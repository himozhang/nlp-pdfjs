/* Copyright 2012 Mozilla Foundation
 * 加载NLP审查出来的错误信息
 * author : himo
 * data : 2018-10-26
 */

import { createPromiseCapability } from 'pdfjs-lib';
import { renderTextLayer } from 'pdfjs-lib';
import { scrollIntoView } from './ui_utils';
import { getGlobalEventBus } from './dom_events';

const FIND_TIMEOUT = 250; // ms

const EXPAND_DIVS_TIMEOUT = 300; // ms
const MATCH_SCROLL_OFFSET_TOP = -50;
const MATCH_SCROLL_OFFSET_LEFT = -400;

//特殊字符转义
const CHARACTERS_TO_NORMALIZE = {
  '\u2018': '\'', // Left single quotation mark-->‘
  '\u2019': '\'', // Right single quotation mark-->’
  '\u201A': '\'', // Single low-9 quotation mark-->
  '\u201B': '\'', // Single high-reversed-9 quotation mark-->
  '\u201C': '"', // Left double quotation mark-->“
  '\u201D': '"', // Right double quotation mark-->”
  '\u201E': '"', // Double low-9 quotation mark-->
  '\u201F': '"', // Double high-reversed-9 quotation mark-->
  '\u00BC': '1/4', // Vulgar fraction one quarter-->¼
  '\u00BD': '1/2', // Vulgar fraction one half-->½
  '\u00BE': '3/4', // Vulgar fraction three quarters-->¾
};

/**
 * @typedef {Object} PDFFindControllerOptions
 * @property {IPDFLinkService} linkService - The navigation/linking service.
 * @property {EventBus} eventBus - The application event bus.
 */

/**
 * Provides search functionality to find a given string in a PDF document.
 */
class PDFLoadLabelDataUtils {
  /**
   * @param {PDFLoadLabelDataUtilsOptions} options
   */
  constructor({ linkService,eventBus = getGlobalEventBus(), }) {
    this._linkService = linkService;
    this._pdfDocument = null;
    /**
     *  pageNumber: this.pageNumber,
        textDivs: this.textDivs,
        numTextDivs: this.textDivs.length,
        textContent: this.textContent,
        textContentItemsStr: this.textContentItemsStr,
        pageContents:this._pageContents
     */
   
    // this._textContent = "";
    // if(this._textLayerBuilder!==undefined){
    //     this._textLayerBuilder.textContentItemsStr.forEach(element => {
    //         this._textContent +=element;
    //     });
    // }
   
    this._eventBus = eventBus;
  }
 

  initPDFLoadLabelDataUtils(){
    
    if (!this._pdfDocument) {
      // If the document was closed before searching began, or if the search
      // operation was relevant for a previously opened document, do nothing.
      return;
    }

      var labelDatas = [{
          name:'住所地',
          intemValue:'河南省郑州市金水区明珠新城明珠西路10号11、12、13层',
          code:'zsd2value',
          color:'yellow',
          pageNum:1,
          seriesIdx:'zsd2value',
          detail:'住所地不正确！！'
        },{
            name:'甲方指定账户',
            code:'jfzdzh2value',
            intemValue:'8008315456120017545801',
            color:'rgb(180, 0, 170)',
            pageNum:5,
            seriesIdx:'jfzdzh2value',
            detail:'甲方指定账户不正确！！'
        },{
            name:'甲方指定账户-户名',
            code:'jfzdhm2value',
            intemValue:'户  名：致富银行有限公司信用卡中心',
            color:'red',
            pageNum:5,
            seriesIdx:'jfzdhm2value',
            detail:'甲方指定账户-户名不正确！！'
        }];
        
        this._numPages= this._linkService.pagesCount;
        this._currnetPage = this._linkService.page;
        this._labelDatas = labelDatas;
        this._pageContents = [];
        this._extractTextPromises = [];
        this._pendingFindMatches = [];
        this._matchIdxArr = [];
        //提取pdf内容到paceContents中
        this._extractText();
        // let labelDatas = JSON.parse(document.getElementById("labelDatas").value);
        // console.debug(JSON.stringify(labelDatas));
        // labelDatas.forEach(labelData => {
        //     this.matchQuery(labelData);
        // });
  }

  _extractText() {
    // Perform text extraction once if this method is called multiple times.
    if (this._extractTextPromises.length > 0) {
      return;
    }
    
    let promise = Promise.resolve();
    for (let i = 0, ii = this._pdfDocument._pdfInfo.numPages; i < ii; i++) {
      const extractTextCapability = createPromiseCapability();
      this._extractTextPromises[i] = extractTextCapability.promise;
      
      promise = promise.then(() => {
        return this._pdfDocument.getPage(i + 1).then((pdfPage) => {
          return pdfPage.getTextContent({
            normalizeWhitespace: true,
          });
        }).then((textContent) => {
          const textItems = textContent.items;
          const strBuf = [];

          for (let j = 0, jj = textItems.length; j < jj; j++) {
            strBuf.push(textItems[j].str);
          }

          // Store the page content (text items) as one string.
          //将页面内容（文本项）存储为一个字符串
          this._pageContents[i] = strBuf.join('');
          extractTextCapability.resolve(i);
        }, (reason) => {
          console.error(`Unable to get text content for page ${i + 1}`, reason);
          // Page error -- assuming no text content.
          this._pageContents[i] = '';
          extractTextCapability.resolve(i);
        });
      });
    }
  }

  /**
   * 进行全局查询匹配
   * @param {*} labelData 
   */
globalMatchQuery(){
    for (let i = 0; i < this._numPages; i++) {
        // Start finding the matches as soon as the text is extracted.
        if (!(i in this._pendingFindMatches)) {
          this._pendingFindMatches[i] = true;
          this._extractTextPromises[i].then((pageIdx) => {
            delete this._pendingFindMatches[pageIdx];
            this._globalCalculateMatch(pageIdx);
          });
        }
    }
}

_globalCalculateMatch(pageIndex){
    this._labelDatas.forEach(labelData => {
        this._doGlobalPageMatchQuery(labelData,pageIndex);
    });
}

_formatMatchObj(query,labelData,matchIdx,pageIndex){
    var matchObj = {
        query:query,
        labelData:labelData,
        matchIdx:matchIdx,
        pageIndex:pageIndex,
        queryMatchStrLength:query.length
    };
    return matchObj;
}

/**
 * 进行查询匹配
 * @param {*} labelData 
 */
_doGlobalPageMatchQuery(labelData,pageIndex){
    let pageContent = this._pageContents[pageIndex];
    console.info("pageIndex--->  "+pageIndex);
    console.info("pageContent--->  "+pageContent);
    const matches = [];
    let query = labelData.intemValue;
    let _this = this;
    console.info("_calculatePhraseMatch ");
    console.info("labelData---> ");
    console.info(labelData);
    console.info("pageContent--->  "+pageContent);
    const queryLen = query.length;
    let matchIdx = -queryLen;
    while (true) {
        matchIdx = pageContent.indexOf(query,matchIdx+queryLen);
        if (matchIdx === -1) {
            break;
        }
        _this._matchIdxArr.push(_this._formatMatchObj(query,labelData,matchIdx,pageIndex+1));
    }
}

_globalConverMatches(pageIndex,textDivs,textContentItemsStr){
    
    let i = 0;
    let iIndex = 0;
    let matchesLength = null;
    let end = textContentItemsStr.length - 1;

    let ret = [];
    if (!this._matchIdxArr) {
        return ret;
    }
    for (let m = 0, len = this._matchIdxArr.length; m < len; m++) {
            // Calculate the start position.
            let matchIdx2 = this._matchIdxArr[m]; 
            let labelData = matchIdx2.labelData;
            
            if(pageIndex!==matchIdx2.pageIndex){
                continue;
            }
            // Loop over the divIdxs.
            while (i !== end && matchIdx2.matchIdx >=(iIndex + textContentItemsStr[i].length)) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }

            if (i === textContentItemsStr.length) {
                console.error('Could not find a matching mapping');
            }

            let match = {
                labelData:labelData,
                begin: {
                    divIdx: i,
                    offset: matchIdx2.matchIdx - iIndex,
                },
            };
            
            // Calculate the end position.
            if (matchesLength) { // Multiterm search.
                matchIdx2.matchIdx += matchesLength[m];
            } else { // Phrase search.
                matchIdx2.matchIdx += matchIdx2.queryMatchStrLength;
            }

            // Somewhat the same array as above, but use > instead of >= to get
            // the end position right.
            while (i !== end && matchIdx2.matchIdx >(iIndex + textContentItemsStr[i].length)) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }

            match.end = {
                divIdx: i,
                offset: matchIdx2.matchIdx - iIndex,
            };
            ret.push(match);
    }
    
    if(ret.length>0){ 
        console.error("this._matchIdxArr--->");
        console.error(this._matchIdxArr);
        console.error("_globalRenderMatches matches :");
        console.error(ret);
        this._globalRenderMatches(ret,textDivs,textContentItemsStr);
    }
}

 /**
   * 重新渲染DIV
   * @param {*} labelData 
   * @param {*} matches 
   */
  _globalRenderMatches(matches,textDivs,textContentItemsStr){
        
    let this_ = this;
    let prevEnd = null;
    let selectedMatchIdx = -1;
    let infinity = {
        divIdx: -1,
        offset: undefined,
    };

    function beginText(begin, className,labelData) {
        let divIdx = begin.divIdx;
         textDivs[divIdx].textContent = '';
        appendTextToDiv(divIdx, 0, begin.offset, className,labelData);
    }

    function appendTextToDiv(divIdx, fromOffset, toOffset, className,labelData) {
        let div = textDivs[divIdx];
        
        let content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
        let node = document.createTextNode(content);
        
        if (className) {
            let span = document.createElement('span');
            span.className = className;
            this_.bulidLabelHtml(span,labelData);
            span.appendChild(node);
            div.appendChild(span);
            this_. _scrollIntoView(textDivs[divIdx],labelData);
            return;
        }

        div.appendChild(node);
    }
    
    let i0 = 0, i1 =  matches.length;

    for (let i = i0; i < i1; i++) {
        
        let match = matches[i];
        let labelData = match.labelData;
        let begin = match.begin;
        let end = match.end;
        let highlightSuffix = ' tooltipstered';
        
        
        // Match inside new div.
        if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
            // If there was a previous div, then add the text at the end.
            if (prevEnd !== null) {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
            }
            // Clear the divs and set the content until the starting point.
                beginText(begin);
        } else {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
        }
        
        if (begin.divIdx === end.divIdx) {
            appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix,labelData);
        } else {
            appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix,labelData);
            for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                textDivs[n0].className = 'highlight middle' + highlightSuffix;
                this_.bulidLabelHtml(textDivs[n0],labelData);
            }
            beginText(end, 'highlight end ' + highlightSuffix,labelData);
        }
        prevEnd = end;
    }

    if (prevEnd) {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
    }
}

  /**
   * 进行查询匹配
   * @param {*} labelData 
   */
  matchQuery(labelData){
        const matches = [];
        console.log(this._textLayerBuilder);
        let pageContent = this._textContent;
        let query = labelData.intemValue;
        const queryLen = labelData.intemValue.length;
        console.info("_calculatePhraseMatch ");
        console.info("labelData---> ");
        console.info(labelData);
        console.info("pageContent--->  "+pageContent);
        let matchIdx = -queryLen;
        while (true) {
            matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
            if (matchIdx === -1) {
                break;
            }
            console.info("matchIdx--->  "+matchIdx);
            matches.push(matchIdx);
        }
        console.info("query :"+query);
        console.info("matches--->  ");
        console.info(matches);
        console.info("********************** ");
        this.converMatches(labelData,matches);
  }

  /**
   * 获取匹配数据对应的begin/end--->divIdx和offset数据
   * @param {*} labelData 
   * @param {*} matches 
   */
  converMatches(labelData,matches){
    let i = 0;
    let iIndex = 0;
    let matchesLength = null;
    const queryLen = labelData.intemValue.length;
    let textContentItemsStr = this._textLayerBuilder.textContentItemsStr;
    let end = textContentItemsStr.length - 1;

    let ret = [];
    if (!matches) {
        return ret;
    }

    for (let m = 0, len = matches.length; m < len; m++) {
            // Calculate the start position.
            let matchIdx2 = matches[m];

            // Loop over the divIdxs.
            while (i !== end && matchIdx2 >=
                    (iIndex + textContentItemsStr[i].length)) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }

            if (i === textContentItemsStr.length) {
                console.error('Could not find a matching mapping');
            }

            let match = {
                begin: {
                    divIdx: i,
                    offset: matchIdx2 - iIndex,
                },
            };
            
            // Calculate the end position.
            if (matchesLength) { // Multiterm search.
                matchIdx2 += matchesLength[m];
            } else { // Phrase search.
                matchIdx2 += queryLen;
            }

            // Somewhat the same array as above, but use > instead of >= to get
            // the end position right.
            while (i !== end && matchIdx2 >
                    (iIndex + textContentItemsStr[i].length)) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }

            match.end = {
                divIdx: i,
                offset: matchIdx2 - iIndex,
            };
            ret.push(match);
    }
    this.renderMatches(labelData,ret);
  }

  /**
   * 重新渲染DIV
   * @param {*} labelData 
   * @param {*} matches 
   */
  renderMatches(labelData,matches){
        
        let textDivs =this._textLayerBuilder.textDivs;
        let this_ = this;
        let prevEnd = null;
        let selectedMatchIdx = -1;
        let textContentItemsStr  = this._textLayerBuilder.textContentItemsStr;
        let infinity = {
            divIdx: -1,
            offset: undefined,
        };

        function beginText(begin, className,labelData) {
            let divIdx = begin.divIdx;
             textDivs[divIdx].textContent = '';
            appendTextToDiv(divIdx, 0, begin.offset, className,labelData);
        }

        function appendTextToDiv(divIdx, fromOffset, toOffset, className,labelData) {
            let div = textDivs[divIdx];
            
            let content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
            let node = document.createTextNode(content);
            
            if (className) {
                let span = document.createElement('span');
                span.className = className;
                this_.bulidLabelHtml(span,labelData);
                span.appendChild(node);
                div.appendChild(span);
                this_. _scrollIntoView(textDivs[divIdx],labelData);
                return;
            }

            div.appendChild(node);
        }
        
        let i0 = 0, i1 =  matches.length;

        for (let i = i0; i < i1; i++) {
            
            let match = matches[i];
            let begin = match.begin;
            let end = match.end;
            let highlightSuffix = ' tooltipstered';

            
            // Match inside new div.
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                // If there was a previous div, then add the text at the end.
                if (prevEnd !== null) {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                }
                // Clear the divs and set the content until the starting point.
                    beginText(begin);
            } else {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
            }
            
            if (begin.divIdx === end.divIdx) {
                appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix,labelData);
            } else {
                appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix,labelData);
                for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                    textDivs[n0].className = 'highlight middle' + highlightSuffix;
                    this_.bulidLabelHtml(textDivs[n0],labelData);
                }
                beginText(end, 'highlight end ' + highlightSuffix,labelData);
            }
            prevEnd = end;
        }

        if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
        }
  }
  _scrollIntoView(textDiv,labelData){
    
    let seriesIdx = document.getElementById("seriesIdx").value;
    if(seriesIdx!==null&&seriesIdx!==""){
        if(labelData.seriesIdx===seriesIdx){
            const spot = {
                top: MATCH_SCROLL_OFFSET_TOP,
                left: MATCH_SCROLL_OFFSET_LEFT,
            };
            scrollIntoView(textDiv, spot,/* skipOverflowHiddenElements = */ true);
        }
    }
   
  }

  bulidLabelHtml(htmlObj,labelData){
    if(labelData!==null){
        // name:'甲方指定账户',
        // code:'jfzdzh2value',
        // intemValue:'8008315456120017545801',
        // color:'rgb(225, 240, 120)',
        // seriesIdx:'jfzdzh2value',
        // detail:'甲方指定账户不正确！！'
        if(!labelData.color){
            labelData.color = red;
        }
        htmlObj.style.background  =labelData.color;
        htmlObj.setAttribute("id",labelData.seriesIdx);
        htmlObj.setAttribute("data-name",labelData.name);
        htmlObj.setAttribute("data-code",labelData.code);
        htmlObj.setAttribute("data-detail",labelData.detail);
        htmlObj.setAttribute("series-idx",labelData.seriesIdx);
    }
  }
}

export {
  PDFLoadLabelDataUtils,
};
