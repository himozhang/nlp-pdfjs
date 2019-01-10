/* Copyright 2012 Mozilla Foundation
 * 加载NLP审查出来的错误信息
 * author : himo
 * data : 2018-10-26
 */

import {
  createPromiseCapability
} from 'pdfjs-lib';
import {
  renderTextLayer
} from 'pdfjs-lib';
import {
  scrollIntoView
} from './ui_utils';
import {
  getGlobalEventBus
} from './dom_events';

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
  constructor({
    linkService,
    eventBus = getGlobalEventBus(),
  }) {
    this._linkService = linkService;
    this._pdfDocument = null;
    this._pageContents = [];
    this._extractTextPromises = [];
    this._pendingFindMatches = [];
    this._matchIdxArr = [];
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
    this._boundEvents = Object.create(null);
    this._eventBus = eventBus;
    this._bindEvents();
  }


  initPDFLoadLabelDataUtils() {

    if (!this._pdfDocument) {
      // If the document was closed before searching began, or if the search
      // operation was relevant for a previously opened document, do nothing.
      return;
    }

    let labelDatas = null;
    if(""!=document.getElementById("labelDatas").value){
      labelDatas = JSON.parse(document.getElementById("labelDatas").value);
    }else{
      labelDatas =[
        {
            "checkPointName": "甲方营业执照编号",
            "itemValue": "91520000722105429Q",
            "code": "jfmc2value_yyzzbh2value",
            "color": "cyan",
            "seriesIdx": "jfmc2value_yyzzbh2value"
        },
        {
            "checkPointName": "乙方营业执照编号",
            "itemValue": "91360821674982661H",
            "code": "yfmc2value_yyzzbh2value",
            "color": "cyan",
            "seriesIdx": "yfmc2value_yyzzbh2value"
        },
        {
            "checkPointName": "甲方住所地",
            "itemValue": "贵阳市高新区高新科技园中国西部（贵阳）高新技术产业研发生产基地1号西裙楼14层",
            "code": "jfmc2value_zsd2value",
            "color": "cyan",
            "seriesIdx": "jfmc2value_zsd2value"
        },
        {
            "checkPointName": "乙方住所地",
            "itemValue": "吉安县高新技术产业园区西区",
            "code": "yfmc2value_zsd2value",
            "color": "cyan",
            "seriesIdx": "yfmc2value_zsd2value"
        },
        {
            "checkPointName": "甲方签约人名称",
            "itemValue": "黄新著",
            "code": "jfqyr2value",
            "color": "red",
            "seriesIdx": "jfqyr2value"
        },
        {
            "checkPointName": "乙方签约人名称",
            "itemValue": "张瑶瑶",
            "code": "yfqyr2value",
            "color": "yellow",
            "seriesIdx": "yfqyr2value"
        },
        {
            "checkPointName": "甲方法定代表人名称",
            "itemValue": "曹景军",
            "code": "jfmc2value_fddbr2value",
            "color": "cyan",
            "seriesIdx": "jfmc2value_fddbr2value"
        },
        {
            "checkPointName": "乙方法定代表人名称",
            "itemValue": "范春明",
            "code": "yfmc2value_fddbr2value",
            "color": "cyan",
            "seriesIdx": "yfmc2value_fddbr2value"
        },
        {
            "checkPointName": "合同履行时间",
            "itemValue": "自签订之日起至2018年12月31日止",
            "code": "htlxsj2key_htlxsj2value",
            "color": "cyan",
            "seriesIdx": "htlxsj2key_htlxsj2value"
        },
        {
            "checkPointName": "合同付款条件",
            "itemValue": "以甲乙双方签字确认的收货清单以及乙方开具的增值税专用发票为依据",
            "code": "htfktj2value",
            "color": "cyan",
            "seriesIdx": "htfktj2value"
        },
        {
            "checkPointName": "合同付款结算及支付方式",
            "itemValue": "5.2.5其他方式：次月20日前核对上月采购金额，乙方开具发票，甲方按照以销定结方式支付已销售商品货款。",
            "code": "htfkjsjzffs2value",
            "color": "cyan",
            "seriesIdx": "htfkjsjzffs2value"
        },
        {
            "checkPointName": "合同增值税发票",
            "itemValue": "增值税专用发票",
            "code": "htzzsfp2value",
            "color": "cyan",
            "seriesIdx": "htzzsfp2value"
        },
        {
            "checkPointName": "标的物交付方式",
            "itemValue": "4.1.1乙方送货。乙方送货至甲方订单中要求地点。",
            "code": "bdwjffs2value",
            "color": "cyan",
            "seriesIdx": "bdwjffs2value"
        },
        {
            "checkPointName": "甲方权利与义务",
            "itemValue": "8.1.1要求乙方按照合同约定或订单确定的时间、地点、数量、价格、质量标准交付货物。",
            "code": "jfqlyw2value",
            "color": "cyan",
            "seriesIdx": "jfqlyw2value"
        },
        {
            "checkPointName": "甲方权利与义务",
            "itemValue": "8.1.2乙方或其委托的第三方将货物交付收货人之前，甲方有权要求乙方中止运输、变更到达地或变更收货人，由此而导致的运输或储存费用变动的，由乙方自行承担。",
            "code": "jfqlyw2value",
            "color": "cyan",
            "seriesIdx": "jfqlyw2value"
        },
        {
            "checkPointName": "甲方权利与义务",
            "itemValue": "8.1.3要求乙方供应的易燃、易爆、有毒、有腐蚀性、有放射性的危险货物，应按国家有关危险货物规定对危险物品妥善包装，作出危险物的标志和标签，并将有关危险物品的名称、性质和防范措施书面材料提交甲方。",
            "code": "jfqlyw2value",
            "color": "cyan",
            "seriesIdx": "jfqlyw2value"
        },
        {
            "checkPointName": "甲方权利与义务",
            "itemValue": "8.1.4按合同约定支付货物采购费用。",
            "code": "jfqlyw2value",
            "color": "cyan",
            "seriesIdx": "jfqlyw2value"
        },
        {
            "checkPointName": "甲方权利与义务",
            "itemValue": "8.1.5其他约定：——。",
            "code": "jfqlyw2value",
            "color": "cyan",
            "seriesIdx": "jfqlyw2value"
        },
        {
            "checkPointName": "乙方权利与义务",
            "itemValue": "8.2.1按照合同约定的时间、质量标准交付货物，并向甲方发出到货通知，办理相应的交接手续。",
            "code": "yfqlyw2value",
            "color": "cyan",
            "seriesIdx": "yfqlyw2value"
        },
        {
            "checkPointName": "乙方权利与义务",
            "itemValue": "8.2.2按合同约定向甲方收取货物采购费用。",
            "code": "yfqlyw2value",
            "color": "cyan",
            "seriesIdx": "yfqlyw2value"
        },
        {
            "checkPointName": "乙方权利与义务",
            "itemValue": "8.2.3对易燃、易爆、有毒、有腐蚀性、有放射性的危险物品，应按国家有关危险物品的运输规定进行妥善保管，作出危险物的标志和标签，并采取有效措施保证货物安全，避免环境污染。",
            "code": "yfqlyw2value",
            "color": "cyan",
            "seriesIdx": "yfqlyw2value"
        },
        {
            "checkPointName": "乙方权利与义务",
            "itemValue": "8.2.4应就双方约定的某种货物保持足够库存，以确保甲方该货物的必要使用量。若不能及时供货的，应提前　7　日通知甲方。",
            "code": "yfqlyw2value",
            "color": "cyan",
            "seriesIdx": "yfqlyw2value"
        },
        {
            "checkPointName": "乙方权利与义务",
            "itemValue": "8.2.5其他约定：——。",
            "code": "yfqlyw2value",
            "color": "cyan",
            "seriesIdx": "yfqlyw2value"
        },
        {
            "checkPointName": "甲方违约责任",
            "itemValue": "16.1.1甲方未能按约定期限付款的，应向乙方支付迟延部分货款金额__1_％的违约金；",
            "code": "jfwyzr2value",
            "color": "cyan",
            "seriesIdx": "jfwyzr2value"
        },
        {
            "checkPointName": "甲方违约责任",
            "itemValue": "16.1.2其他约定：————",
            "code": "jfwyzr2value",
            "color": "cyan",
            "seriesIdx": "jfwyzr2value"
        },
        {
            "checkPointName": "乙方违约责任",
            "itemValue": "16.2.1乙方未能按约定数量交货的，应向甲方偿付不能交货部分货款1％的违约金,并赔偿由此给甲方造成的损失；",
            "code": "yfwyzr2value",
            "color": "cyan",
            "seriesIdx": "yfwyzr2value"
        },
        {
            "checkPointName": "乙方违约责任",
            "itemValue": "16.2.2乙方未能按约定质量交货的，应向甲方偿付违约交货部分货款1％的违约金,并赔偿由此给甲方造成的损失；",
            "code": "yfwyzr2value",
            "color": "cyan",
            "seriesIdx": "yfwyzr2value"
        },
        {
            "checkPointName": "乙方违约责任",
            "itemValue": "16.2.3乙方未能按约定期限交货的，应向甲方偿付逾期交货部分货款1％的违约金；",
            "code": "yfwyzr2value",
            "color": "cyan",
            "seriesIdx": "yfwyzr2value"
        },
        {
            "checkPointName": "乙方违约责任",
            "itemValue": "16.2.4其他约定：遇节假日开展促销活动，乙方需提前一个月向甲方提报详细的促销方案，经甲方审核后，方可执行。促销活动必须严格按照审核后的促销方案执行。乙方需安排促销人员上站促销时，促销人员必须服从甲方相关管理规定及操作规程，因乙方促销人员的过失造成损失或产生法律纠纷的由乙方负责赔偿处理。促销员在站期间发生安全事故的，由乙方自行负责。乙方任意延长促销活动时间、增加促销站点及活动内容、不遵守相关制度规定的，甲方有权立即停止或撤销促销活动，并对乙方进行200-2000元的罚款。甲乙双方的日常配合参照甲方《非油业务供应商管理办法》执行。",
            "code": "yfwyzr2value",
            "color": "cyan",
            "seriesIdx": "yfwyzr2value"
        },
        {
            "checkPointName": "不可抗力",
            "itemValue": "14.1不可抗力事件指合同当事人不能预见、不能避免、不能克服的客观情况，包括但不限于地震、水灾、雷击、雪灾等自然事件以及战争、罢工等社会事件。",
            "code": "bkkl2value",
            "color": "cyan",
            "seriesIdx": "bkkl2value"
        },
        {
            "checkPointName": "不可抗力",
            "itemValue": "14.2由于不可抗力原因，使双方或任何一方不能履行合同义务时，应采取有效措施，尽量避免或减少损失，将损失降低到最低程度。在不可抗力发生后24小时内以书面形式通知对方，并在不可抗力事件结束后2日内向对方提供有效证明文件。",
            "code": "bkkl2value",
            "color": "cyan",
            "seriesIdx": "bkkl2value"
        },
        {
            "checkPointName": "不可抗力",
            "itemValue": "14.3因不可抗力致使合同无法按期履行或不能履行所造成的损失由双方各自承担。一方未尽通知义务或未采取措施避免、减少损失的，应就扩大的损失承担相应的赔偿责任。",
            "code": "bkkl2value",
            "color": "cyan",
            "seriesIdx": "bkkl2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.1双方协商一致，可以书面方式变更或解除合同。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2发生下列情形之一的，无过错方可以解除合同：",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.1因不可抗力，致使合同目的不能实现；",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.2乙方未按合同约定期限交付货物，经催告后3日内仍未交货达3次以上的，甲方可以解除合同。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.3货物质量不符合约定，且乙方未按甲方要求采取必要补救措施的，甲方可以单方解除合同，有关损失由乙方承担。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.4合作期间，乙方行为不符合甲方相关管理办法，达到淘汰或终止合作标准的，或与甲方上级部门文件规定相冲突，甲方有权解除合同。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.5甲方无正当理由拒绝接收货物达3次以上的，乙方可以解除合同。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.2.5其他约定：合同解除后，乙方仍然要承担甲遗留产品的退换货，直至产品全部处理完毕。。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同变更和解除",
            "itemValue": "15.3合同变更或解除，不能免除违约方应承担的违约责任，给对方造成损失的，还应承担赔偿责任。",
            "code": "htbgjc2value",
            "color": "cyan",
            "seriesIdx": "htbgjc2value"
        },
        {
            "checkPointName": "合同纠纷解决方式",
            "itemValue": "17.2向甲方所在地人民法院提起诉讼。",
            "code": "htjfjjfs2value",
            "color": "cyan",
            "seriesIdx": "htjfjjfs2value"
        },
        {
            "checkPointName": "签订地点",
            "itemValue": "北京市海淀区上地东里11号楼3单元201室",
            "code": "htqddd2value",
            "color": "cyan",
            "seriesIdx": "htqddd2value"
        }
    ];
    }
    if (!labelDatas&&""!=labelDatas) {
      if (window.parent.document && window.parent.document.getElementById("labelDatas")) {
        labelDatas = JSON.parse(window.parent.document.getElementById("labelDatas").value);
        if (!labelDatas) {
          // labelDatas = [{
          //   name: '住所地',
          //   itemValue: '河南省郑州市金水区明珠新城明珠西路10号11、12、13层',
          //   code: 'zsd2value',
          //   color: 'yellow',
          //   seriesIdx: 'zsd2value',
          //   detail: '住所地不正确！！'
          // }, {
          //   name: '甲方指定账户',
          //   code: 'jfzdzh2value',
          //   itemValue: '8008315456120017545801',
          //   color: 'rgb(180, 0, 170)',
          //   seriesIdx: 'jfzdzh2value',
          //   detail: '甲方指定账户不正确！！'
          // }, {
          //   name: '甲方指定账户-户名',
          //   code: 'jfzdhm2value',
          //   itemValue: '户  名：致富银行有限公司信用卡中心',
          //   color: 'red',
          //   seriesIdx: 'jfzdhm2value',
          //   detail: '甲方指定账户-户名不正确！！'
          // }];
          console.error("主动调用parent.window实例化labelDatas失败，使用默认测试数据进行打标签！！！");
        }else{
            console.info("主动调用parent.window实例化labelDatas");
        }
      }
    }else{
        console.info("labelDatas已被parent.window实例化");
    }

    this._numPages = this._linkService.pagesCount;
    this._labelDatas = labelDatas;

    //提取pdf内容到paceContents中
    // this._extractText();
    // let labelDatas = JSON.parse(document.getElementById("labelDatas").value);
    // console.debug(JSON.stringify(labelDatas));
    // labelDatas.forEach(labelData => {
    //     this.matchQuery(labelData);
    // });
  }

  /**
   * 格式化match对象
   * @param {*} query 
   * @param {*} labelData 
   * @param {*} matchIdx 
   * @param {*} pageIndex 
   */
  _formatMatchObj(query, labelData, matchIdx, pageIndex) {
    var matchObj = {
      query: query,
      labelData: labelData,
      matchIdx: matchIdx,
      pageIndex: pageIndex,
      queryMatchStrLength: query.length
    };
    return matchObj;
  }

  //如果存在_halfQueryStr，则先进性一半query匹配，产生_halfQueryStr的可能性为pageContent内容被分页了
  halfQuery(matches,pageContent,pageIndex){
    var _this = this;
    var halfQueryStr = document.getElementById("halfQueryStr").value;
    const matchesLen1 = matches.length;
    if(halfQueryStr!==""){
      var labelData = this._labelDatas[document.getElementById("labelDataIndex").value];
      console.info("-->_halfQueryStr---> "+halfQueryStr);
      matches = _this.bulidMatches(document.getElementById("labelDataIndex").value,pageContent,labelData,halfQueryStr,matches,pageIndex);
      const matchesLen2 = matches.length;
      if(matchesLen2>matchesLen1){
        document.getElementById("halfQueryStr").value="";
      }
    }
    return matches;
  }

  /**
   * 进行查询匹配
   * @param {*} labelData 
   */
  matchQuery(pageIndex, textDivs, textContentItemsStr) {
    let matches = [];
    let pageContent = "";
    let _this = this;
    if (!textContentItemsStr) {
      return false;
    }

    textContentItemsStr.forEach(element => {
      pageContent += element;
    });
    console.log("pageIndex:< " + pageIndex + " >--->pageContent ↓ ");
    console.log(pageContent);
    //如果存在_halfQueryStr，则先进性一半query匹配，产生_halfQueryStr的可能性为pageContent内容被分页了
    matches = _this.halfQuery(matches,pageContent,pageIndex);
    for(var i=0;i<this._labelDatas.length;i++){
      var labelData = this._labelDatas[i];
      if(labelData.show&&labelData.show==="false"){
        return false
      }
      
      let query = labelData.itemValue;
      console.info(i+"-->query---> "+query);
      if(query instanceof Array){
        query.forEach(queryItem => {
          matches = _this.bulidMatches(i,pageContent,labelData,queryItem,matches,pageIndex);
        });
      }else if(query!==undefined){
        matches = _this.bulidMatches(i,pageContent,labelData,query,matches,pageIndex);
      }
    }
    // this._labelDatas.forEach(labelData => {
      
    // });

    if (matches.length > 0) {
      if (matches.length > 1) {
        matches = matches.sort(_this.matcheArrCompare);
      }
      console.info("matches ↓");
      console.info(matches);
      console.info("********************** ");
      this.converMatches(matches, textDivs, textContentItemsStr);
    } else {
      console.info("matches 为空！");
    }
  }

  startWith(str,s){     
    var reg=new RegExp("^"+s);     
    return reg.test(str);        
  }  
  
  endWith(str,s){     
    var reg=new RegExp(s+"$");     
    return reg.test(str);        
  }

  /**
   * 去掉字符串前后空格，字符串中段空格不做处理
   * @param {*} s 
   */
  trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }

  /**
   * 判断字符串是否以符号结尾，如果以符号结尾，则删除符号
   * @param {*} str 
   */
  replaceLastWord(str){
    var _this = this;
    var endStrRegStr = ".*[\\.。，；]$";
    var endStrReg = new RegExp(endStrRegStr,"g");
    var tmp = str.match(endStrReg);
    if(tmp&&tmp.length>0){
      // debugger
      str = tmp[0].substring(0,tmp[0].length-1);
      return _this.replaceLastWord(str);
    }else{
      return str;
    }
  }

 /**
   * 根据pageContent进行逐字匹配，替换pageContent中对应的真实query值（实际pageContent中可能包含空格或者_）
   * @param {*} pageContent 
   * @param {*} query 
   */
  getQueryStr(labelDataIndex,pageContent,query){
        var _this = this;
        if(!query){
          return false;
        }

        //先对query去空格和去“_”操作
        var queryTrim = query.replace(/_/g,"").replace(/\s+/g, "");
        var queryLen = queryTrim.length;
        var  inLoop = false;
        var index = -1;
        var tmpQueryStr = "";
       
        //如果pageContent不存在queryTrim，则直接返回query，不在进行逐字遍历
        // if(pageContent.replace(/\s+/g, "").indexOf(queryTrim)<0){
        //   return query;
        // }

        // if(pageContent.indexOf("8.1.3")>=0){
        //   if(queryTrim.indexOf("8.1.3")>=0){
        //    debugger
        //   }.replace(/【/g,"").replace(/】/g,"")
        // }
        var charRegStr = ".*[\\s_]$";
        var charReg = new RegExp(charRegStr,"g");
        for(var i=0;i<queryLen;i++){
          var queryChar = queryTrim[i];
          var tmp1 = queryChar.match(charReg);
          //判断当前queryChar是否为空格或者_，如果为空格或者_则进行到下一轮重新匹配，index+1
          if(tmp1&&tmp1.length>0){
            tmpQueryStr+=queryChar;
            index+=1;
            continue;
          }
          if(inLoop){
            index +=1;
            if(index>=pageContent.length){
              // debugger 
              ///\s+/g删除首尾空格
              var queryArr = queryTrim.split(tmpQueryStr.replace(/\s+/g, ""));
              if(queryArr.length>1){
                document.getElementById("halfQueryStr").value = queryArr[1];
                document.getElementById("labelDataIndex").value=labelDataIndex;
                query = tmpQueryStr;
              }
              return query;
            }else{
                var pageChar = pageContent.charAt(index);
                //判断当前字符是否为"_"或者空格，如果是，则直接追加后跳过当前循环，并重新对上一个quertyStr进行匹配
                var tmp = pageChar.match(charReg);
                //判断当前pageChar是否为空格或者_，如果为空格或者_则进行到下一轮重新匹配，index+1
                if(tmp&&tmp.length>0||pageChar.indexOf("【")>-1||pageChar.indexOf("】")>-1||pageChar.indexOf("[")>-1||pageChar.indexOf("]")>-1){
                  tmpQueryStr+=pageChar;
                  i--;
                  continue;
                }else{//如果不为空格或者_，则追加当前字符，并进行继续匹配
                  if(queryChar===pageChar){
                    tmpQueryStr+=pageChar;
                    inLoop = true;
                  }else{
                    //重置所有变量
                    inLoop = false;
                    tmpQueryStr = "";
                    i=-1;//i++后，会冲0继续开始遍历。
                    continue;
                  }
                }
            }
            
          }else{
            index = pageContent.indexOf(queryChar,index);
            if (index === -1) {
              index = false;
              break;
            }else{
              tmpQueryStr+=pageContent.charAt(index);
              inLoop = true;
            }
          }
        } 

        //将匹配的tmpQueryStr进行去空格和去“_”操作，并重新赋值给query
        var tmpQueryStr_ = tmpQueryStr.replace(/【/g,"").replace(/】/g,"").replace(/\[/g,"").replace(/\]/g,"").replace(/_/g,"").replace(/\s+/g, "");
        console.info("**********queryTrim :"+queryTrim);
        console.info("**********tmpQueryStr_ :"+tmpQueryStr_);
        if(queryTrim===tmpQueryStr_){
          query = tmpQueryStr;
        }
        // query = this.trim(query);
        // // debugger
        // query = this.replaceLastWord(query);
         
        // if(this.startWith(query,":")){
        //   query = query.substring(1,query.length);
        // }
        // if(this.startWith(query,"：")){
        //   query = query.substring(1,query.length);
        // }
        
        // if(query===undefined){
        //   return false;
        // }
        // console.log("1111query : "+query);
        // var query_first_char = query.substring(0,3);
        // var query_last_char = query.substring(query.length-2,query.length);
        // var regStr = query_first_char+"(.*?)(?="+query_last_char+")";
        // var reg = new RegExp(regStr);
        // var tempStr = pageContent.match(reg); //
        // console.log("regStr : "+regStr);
        // console.log("22222query : "+query);
        // console.log("111111tempStr : "+tempStr);
        // if(tempStr){
        //   console.log("22222222tempStr : "+tempStr);
        //   query = tempStr[0];
        // }

        return query;
  }

  /**
   * 对每页数据进行query比对
   * @param {*} pageContent 
   * @param {*} labelData 
   * @param {*} query 
   * @param {*} matches 
   * @param {*} pageIndex 
   */
  bulidMatches(i,pageContent,labelData,query,matches,pageIndex){
        let _this = this;
        //如果query为数组，则返回第一个元素进行查询
        if(query instanceof Array){
          query = query[0];
        }
        //通过pageContent获取真实query值
        query = _this.getQueryStr(i,pageContent,query);
        let queryLen = query.length;
        let matchIdx = -queryLen;
        while (true) {
            // debugger
            matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
            if (matchIdx === -1) {
              break;
            }
            matches.push(_this._formatMatchObj(query, labelData, matchIdx,pageIndex + 1));
            // matches.push(matchIdx);
        }
        return matches;
  }

  /**
   * 对matches进行排序
   * @param {*} matche1 
   * @param {*} matche2 
   */
  matcheArrCompare(matche1, matche2) {
    var matchIdx1 = matche1.matchIdx;
    var matchIdx2 = matche2.matchIdx;
    if (matchIdx1 < matchIdx2) {
      return -1;
    } else if (matchIdx1 > matchIdx2) {
      return 1;
    } else {
      return 0;
    }
  }

  /**
   * 获取匹配数据对应的begin/end--->divIdx和offset数据
   */
  converMatches(matches, textDivs, textContentItemsStr) {
    let i = 0;
    let iIndex = 0;
    let matchesLength = null;

    let end = textContentItemsStr.length - 1;

    let ret = [];
    if (!matches) {
      return ret;
    }

    for (let m = 0, len = matches.length; m < len; m++) {
      // Calculate the start position.
      let matchIdx2 = matches[m];
      let labelData = matchIdx2.labelData;

      const queryLen = matchIdx2.query.length;
      // Loop over the divIdxs.
      while (i !== end && matchIdx2.matchIdx >= (iIndex + textContentItemsStr[
          i].length)) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }

      if (i === textContentItemsStr.length) {
        console.error('Could not find a matching mapping');
      }

      let match = {
        labelData: labelData,
        begin: {
          divIdx: i,
          offset: matchIdx2.matchIdx - iIndex,
        },
      };

      // Calculate the end position.
      if (matchesLength) { // Multiterm search.
        matchIdx2.matchIdx += matchesLength[m];
      } else { // Phrase search.
        matchIdx2.matchIdx += queryLen;
      }

      // Somewhat the same array as above, but use > instead of >= to get
      // the end position right.
      while (i !== end && matchIdx2.matchIdx > (iIndex + textContentItemsStr[
          i].length)) {
        iIndex += textContentItemsStr[i].length;
        i++;
      }

      match.end = {
        divIdx: i,
        offset: matchIdx2.matchIdx - iIndex,
      };
      ret.push(match);
    }
    this.renderMatches(ret, textDivs, textContentItemsStr);
  }

  /**
   * 重新渲染DIV
   */
  renderMatches(matches, textDivs, textContentItemsStr) {

    let this_ = this;
    let prevEnd = null;
    let infinity = {
      divIdx: -1,
      offset: undefined,
    };

    function beginText(begin, className, labelData) {
      let divIdx = begin.divIdx;
      textDivs[divIdx].textContent = '';
      appendTextToDiv(divIdx, 0, begin.offset, className, labelData);
    }

    function appendTextToDiv(divIdx, fromOffset, toOffset, className,
      labelData) {
      let div = textDivs[divIdx];

      let content = textContentItemsStr[divIdx].substring(fromOffset,
        toOffset);
      let node = document.createTextNode(content);

      if (className) {
        let spanChild = document.createElement('span');
        spanChild.className = className;
        this_.bulidLabelHtml(spanChild, labelData);
        spanChild.appendChild(node);
        div.appendChild(spanChild);
        this_._scrollIntoView(textDivs[divIdx], labelData);
        return;
      }

      div.appendChild(node);
    }

    let i0 = 0,i1 = matches.length;

    for (let i = i0; i < i1; i++) {

      let match = matches[i];
      let labelData = match.labelData;

      let begin = match.begin;
      let end = match.end;
      // let highlightSuffix = ' tooltipstered';
      let highlightSuffix = ' selected tooltipstered';

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
        appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' +
          highlightSuffix, labelData);
      } else {
        appendTextToDiv(begin.divIdx, begin.offset, infinity.offset,
          'highlight begin' + highlightSuffix, labelData);
        for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
          textDivs[n0].className = 'highlight middle' + highlightSuffix;
          this_.bulidLabelHtml(textDivs[n0], labelData);
        }
        beginText(end, 'highlight end ' + highlightSuffix, labelData);
      }
      prevEnd = end;
    }

    if (prevEnd) {
      appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
    }
  }
  /**
   * 定位到指定div标签，定位依据以seriesIdx为准
   * @param {*} textDiv 
   * @param {*} labelData 
   */
  _scrollIntoView(textDiv, labelData) {

    let seriesIdx = document.getElementById("seriesIdx").value;
    if (seriesIdx !== null && seriesIdx !== "") {
      if (labelData.seriesIdx === seriesIdx) {
        const spot = {
          top: MATCH_SCROLL_OFFSET_TOP,
          left: MATCH_SCROLL_OFFSET_LEFT,
        };
        scrollIntoView(textDiv, spot, /* skipOverflowHiddenElements = */ true);
      }
    }

  }

  /**
   * 给重新渲染的DIV添加属性
   * @param {*} htmlObj 
   * @param {*} labelData 
   */
  bulidLabelHtml(htmlObj, labelData) {
    if (labelData !== null) {
      // name:'甲方指定账户',
      // code:'jfzdzh2value',
      // itemValue:'8008315456120017545801',
      // color:'rgb(225, 240, 120)',
      // seriesIdx:'jfzdzh2value',
      // detail:'甲方指定账户不正确！！'
      if (!labelData.color) {
        labelData.color = "red";
      }
      htmlObj.style.background = labelData.color;
      htmlObj.setAttribute("id", labelData.seriesIdx);
      htmlObj.setAttribute("data-checkPointName", labelData.checkPointName);
      htmlObj.setAttribute("data-title", labelData.title);
      htmlObj.setAttribute("data-code", labelData.code);
      htmlObj.setAttribute("data-detail", labelData.detail);
      htmlObj.setAttribute("series-idx", labelData.seriesIdx);
    }
  }
  //提取pdf内容到paceContents中
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
          console.error(
            `Unable to get text content for page ${i + 1}`, reason);
          // Page error -- assuming no text content.
          this._pageContents[i] = '';
          extractTextCapability.resolve(i);
        });
      });
    }
  }

  /**
   * 全局查询，外部传入seriesIdx，获取对应的labelData，
   * 再进行全页面匹配，匹配到以后直接调用_scrollIntoView滚动到对应页面位置
   * @param {*} params 
   */
  globalLabelDataQuery(params) {
    console.log("come in globalLabelDataQuery ");
    console.log(params);
    var _this = this;
    var seriesIdx = params.seriesIdx;
    var app = params.app;
    var _labelData = null;
    let seriesIdxIndex = 0;
    var i=0;
    this._labelDatas.forEach(labelData => {
      i++;
      let seriesIdxArr = seriesIdx.split(":");
      if(seriesIdxArr.length>1){
        seriesIdx = seriesIdxArr[0];
        seriesIdxIndex = seriesIdxArr[1];
      }

      if (labelData.seriesIdx === seriesIdx) {
        console.log(" labelData ");
        console.log(labelData);
        _labelData = labelData;
        return ;
      }
    });
    if(_labelData!==null){
      _this._globalPageMatch(i,_labelData, app,seriesIdxIndex);
    }else{
      console.error("错误：seriesIdx="+seriesIdx+"未匹配到labelData数据，请确认！！");
      console.log("labelDatas集合数据如下： ");
      console.log(this._labelDatas);
    }
  }

  /**
   * 获取页面，并进行全局匹配查询
   * @param {*} i 
   * @param {*} labelData 
   * @param {*} app 
   */
  _globalPageMatch(i,labelData, app,seriesIdx) {
    var pageNum = app.pagesCount;
    this.isMatch = false;
    const this_ = this;
    for (let i = 0; i < pageNum; i++) {
      //如果匹配到，则不在进行页面遍历
      if(this_.isMatch){
        break;
      }
      // Start finding the matches as soon as the text is extracted.
      if (!(i in this._pendingFindMatches)) {
        this._pendingFindMatches[i] = true;
        this._extractTextPromises[i].then((pageIdx) => {
          delete this._pendingFindMatches[pageIdx];
          this._globalCalculateMatch(i,app, labelData, pageIdx,seriesIdx);
        });
      }
    }
  }

  /**
   * 全局匹配操作
   * @param {*} i 
   * @param {*} app 
   * @param {*} labelData 
   * @param {*} pageIdx 
   */
  _globalCalculateMatch(i,app, labelData, pageIdx,seriesIdxIndex) {
    const pageContent = this._pageContents[pageIdx];
    console.info("pageIndex--->  " + pageIdx);
    console.info("pageContent--->  " + pageContent);
    let matches = [];
    const _this = this;

    let query = labelData.itemValue;
    if(query instanceof Array){
      if(seriesIdxIndex){
        query = query[seriesIdxIndex];
      }
    }
    //如果query为数组，则返回第一个元素进行查询
    if(query instanceof Array){
      query = query[0];
    }
    //通过pageContent获取真实query值
    query = _this.getQueryStr(i,pageContent,query);
    const queryLen = query.length;
    let matchIdx = -queryLen;
    var scrollTop = 0;
    var pdfViewerContainer = app.pdfViewer.container;
    //获得每页高度
    var pageHeight = document.querySelector("div.page").clientHeight;
    while (true) {
      //如果匹配到，则不在进行遍历
      if( _this.isMatch){
        break;
      }
      matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
      if (matchIdx === -1) {
        break;
      }
      
      //如果存在_halfQueryStr，则先进性一半query匹配，产生_halfQueryStr的可能性为pageContent内容被分页了
      // matches = _this.halfQuery(matches,pageContent,pageIdx);
      //一旦查询出数据，则直接跳出，渲染第一个被查询出的数据
      //app.page = pageIdx + 1;
      _this._linkService.page = pageIdx + 1;
      var parent_Container =document.querySelector("span[series-idx='"+labelData.seriesIdx+"']").parentElement;
      if(parent_Container!=null){
          scrollTop = parent_Container.offsetTop+(pageHeight*pageIdx);
          pdfViewerContainer.scrollTop = scrollTop-pdfViewerContainer.offsetTop;
          _this.isMatch = true;
      }
      // matches.push(_this._formatMatchObj(query,labelData,matchIdx,pageIdx+1));
    }
   
  }
  /**
   * @private
   */
  _bindEvents() {
    const {
      _eventBus,
      _boundEvents,
    } = this;
    //每一页渲染完成后，均触发此事件,页面渲染完成后，不在触发
    _boundEvents.globalLabelDataQuery = (params) => {
      console.log("globalLabelDataQuery call....");
      this.globalLabelDataQuery(params);
    };
    //每一页渲染完成后，均触发此事件
    _eventBus.on('globalLabelDataQuery', _boundEvents.globalLabelDataQuery);
  }
}

export {
  PDFLoadLabelDataUtils,
};
