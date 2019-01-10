!
function(e, t) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if (!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	function n(e) {
		var t = "length" in e && e.length,
			n = Z.type(e);
		return "function" === n || Z.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}
	function r(e, t, n) {
		if (Z.isFunction(t)) return Z.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		});
		if (t.nodeType) return Z.grep(e, function(e) {
			return e === t !== n
		});
		if ("string" == typeof t) {
			if (se.test(t)) return Z.filter(t, e, n);
			t = Z.filter(t, e)
		}
		return Z.grep(e, function(e) {
			return G.call(t, e) >= 0 !== n
		})
	}
	function i(e, t) {
		for (;
		(e = e[t]) && 1 !== e.nodeType;);
		return e
	}
	function o(e) {
		var t = pe[e] = {};
		return Z.each(e.match(fe) || [], function(e, n) {
			t[n] = !0
		}), t
	}
	function a() {
		Q.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), Z.ready()
	}
	function s() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = Z.expando + s.uid++
	}
	function l(e, t, n) {
		var r;
		if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(_e, "-$1").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
			try {
				n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : ye.test(n) ? Z.parseJSON(n) : n
			} catch (i) {}
			be.set(e, t, n)
		} else n = void 0;
		return n
	}
	function u() {
		return !0
	}
	function c() {
		return !1
	}
	function d() {
		try {
			return Q.activeElement
		} catch (e) {}
	}
	function h(e, t) {
		return Z.nodeName(e, "table") && Z.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
	}
	function f(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}
	function p(e) {
		var t = Fe.exec(e.type);
		return t ? e.type = t[1] : e.removeAttribute("type"), e
	}
	function g(e, t) {
		for (var n = 0, r = e.length; r > n; n++) me.set(e[n], "globalEval", !t || me.get(t[n], "globalEval"))
	}
	function v(e, t) {
		var n, r, i, o, a, s, l, u;
		if (1 === t.nodeType) {
			if (me.hasData(e) && (o = me.access(e), a = me.set(t, o), u = o.events)) {
				delete a.handle, a.events = {};
				for (i in u) for (n = 0, r = u[i].length; r > n; n++) Z.event.add(t, i, u[i][n])
			}
			be.hasData(e) && (s = be.access(e), l = Z.extend({}, s), be.set(t, l))
		}
	}
	function m(e, t) {
		var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
		return void 0 === t || t && Z.nodeName(e, t) ? Z.merge([e], n) : n
	}
	function b(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && xe.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}
	function y(t, n) {
		var r, i = Z(n.createElement(t)).appendTo(n.body),
			o = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(i[0])) ? r.display : Z.css(i[0], "display");
		return i.detach(), o
	}
	function _(e) {
		var t = Q,
			n = qe[e];
		return n || (n = y(e, t), "none" !== n && n || (Be = (Be || Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Be[0].contentDocument, t.write(), t.close(), n = y(e, t), Be.detach()), qe[e] = n), n
	}
	function w(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || ze(e), n && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || Z.contains(e.ownerDocument, e) || (a = Z.style(e, t)), Ue.test(a) && Ve.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}
	function S(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}
	function P(e, t) {
		if (t in e) return t;
		for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Je.length; i--;) if (t = Je[i] + n, t in e) return t;
		return r
	}
	function x(e, t, n) {
		var r = He.exec(t);
		return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
	}
	function C(e, t, n, r, i) {
		for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += Z.css(e, n + Se[o], !0, i)), r ? ("content" === n && (a -= Z.css(e, "padding" + Se[o], !0, i)), "margin" !== n && (a -= Z.css(e, "border" + Se[o] + "Width", !0, i))) : (a += Z.css(e, "padding" + Se[o], !0, i), "padding" !== n && (a += Z.css(e, "border" + Se[o] + "Width", !0, i)));
		return a
	}
	function A(e, t, n) {
		var r = !0,
			i = "width" === t ? e.offsetWidth : e.offsetHeight,
			o = ze(e),
			a = "border-box" === Z.css(e, "boxSizing", !1, o);
		if (0 >= i || null == i) {
			if (i = w(e, t, o), (0 > i || null == i) && (i = e.style[t]), Ue.test(i)) return i;
			r = a && (Y.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
		}
		return i + C(e, t, n || (a ? "border" : "content"), r, o) + "px"
	}
	function k(e, t) {
		for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) r = e[a], r.style && (o[a] = me.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && Pe(r) && (o[a] = me.access(r, "olddisplay", _(r.nodeName)))) : (i = Pe(r), "none" === n && i || me.set(r, "olddisplay", i ? n : Z.css(r, "display"))));
		for (a = 0; s > a; a++) r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
		return e
	}
	function T(e, t, n, r, i) {
		return new T.prototype.init(e, t, n, r, i)
	}
	function E() {
		return setTimeout(function() {
			Ye = void 0
		}), Ye = Z.now()
	}
	function L(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Se[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}
	function I(e, t, n) {
		for (var r, i = (nt[t] || []).concat(nt["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r
	}
	function R(e, t, n) {
		var r, i, o, a, s, l, u, c, d = this,
			h = {},
			f = e.style,
			p = e.nodeType && Pe(e),
			g = me.get(e, "fxshow");
		n.queue || (s = Z._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
			s.unqueued || l()
		}), s.unqueued++, d.always(function() {
			d.always(function() {
				s.unqueued--, Z.queue(e, "fx").length || s.empty.fire()
			})
		})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], u = Z.css(e, "display"), c = "none" === u ? me.get(e, "olddisplay") || _(e.nodeName) : u, "inline" === c && "none" === Z.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", d.always(function() {
			f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
		}));
		for (r in t) if (i = t[r], Ke.exec(i)) {
			if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
				if ("show" !== i || !g || void 0 === g[r]) continue;
				p = !0
			}
			h[r] = g && g[r] || Z.style(e, r)
		} else u = void 0;
		if (Z.isEmptyObject(h))"inline" === ("none" === u ? _(e.nodeName) : u) && (f.display = u);
		else {
			g ? "hidden" in g && (p = g.hidden) : g = me.access(e, "fxshow", {}), o && (g.hidden = !p), p ? Z(e).show() : d.done(function() {
				Z(e).hide()
			}), d.done(function() {
				var t;
				me.remove(e, "fxshow");
				for (t in h) Z.style(e, t, h[t])
			});
			for (r in h) a = I(p ? g[r] : 0, r, d), r in g || (g[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
		}
	}
	function O(e, t) {
		var n, r, i, o, a;
		for (n in e) if (r = Z.camelCase(n), i = t[r], o = e[n], Z.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Z.cssHooks[r], a && "expand" in a) {
			o = a.expand(o), delete e[r];
			for (n in o) n in e || (e[n] = o[n], t[n] = i)
		} else t[r] = i
	}
	function D(e, t, n) {
		var r, i, o = 0,
			a = tt.length,
			s = Z.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (i) return !1;
				for (var t = Ye || E(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length; l > a; a++) u.tweens[a].run(o);
				return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
			},
			u = s.promise({
				elem: e,
				props: Z.extend({}, t),
				opts: Z.extend(!0, {
					specialEasing: {}
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: Ye || E(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Z.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? u.tweens.length : 0;
					if (i) return this;
					for (i = !0; r > n; n++) u.tweens[n].run(1);
					return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
				}
			}),
			c = u.props;
		for (O(c, u.opts.specialEasing); a > o; o++) if (r = tt[o].call(u, e, c, u.opts)) return r;
		return Z.map(c, I, u), Z.isFunction(u.opts.start) && u.opts.start.call(e, u), Z.fx.timer(Z.extend(l, {
			elem: e,
			anim: u,
			queue: u.opts.queue
		})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
	}
	function N(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(fe) || [];
			if (Z.isFunction(n)) for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}
	function F(e, t, n, r) {
		function i(s) {
			var l;
			return o[s] = !0, Z.each(e[s] || [], function(e, s) {
				var u = s(t, n, r);
				return "string" != typeof u || a || o[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), i(u), !1)
			}), l
		}
		var o = {},
			a = e === yt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}
	function M(e, t) {
		var n, r, i = Z.ajaxSettings.flatOptions || {};
		for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Z.extend(!0, e, r), e
	}
	function j(e, t, n) {
		for (var r, i, o, a, s = e.contents, l = e.dataTypes;
		"*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if (r) for (i in s) if (s[i] && s[i].test(r)) {
			l.unshift(i);
			break
		}
		if (l[0] in n) o = l[0];
		else {
			for (i in n) {
				if (!l[0] || e.converters[i + " " + l[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0
	}
	function B(e, t, n, r) {
		var i, o, a, s, l, u = {},
			c = e.dataTypes.slice();
		if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
		for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;
		else if ("*" !== l && l !== o) {
			if (a = u[l + " " + o] || u["* " + o], !a) for (i in u) if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
				a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
				break
			}
			if (a !== !0) if (a && e["throws"]) t = a(t);
			else try {
				t = a(t)
			} catch (d) {
				return {
					state: "parsererror",
					error: a ? d : "No conversion from " + l + " to " + o
				}
			}
		}
		return {
			state: "success",
			data: t
		}
	}
	function q(e, t, n, r) {
		var i;
		if (Z.isArray(t)) Z.each(t, function(t, i) {
			n || xt.test(e) ? r(e, i) : q(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
		});
		else if (n || "object" !== Z.type(t)) r(e, t);
		else for (i in t) q(e + "[" + i + "]", t[i], n, r)
	}
	function V(e) {
		return Z.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
	}
	var U = [],
		z = U.slice,
		W = U.concat,
		H = U.push,
		G = U.indexOf,
		$ = {},
		X = $.toString,
		J = $.hasOwnProperty,
		Y = {},
		Q = e.document,
		K = "2.1.4",
		Z = function(e, t) {
			return new Z.fn.init(e, t)
		},
		ee = /^[\s﻿ ]+|[\s﻿ ]+$/g,
		te = /^-ms-/,
		ne = /-([\da-z])/gi,
		re = function(e, t) {
			return t.toUpperCase()
		};
	Z.fn = Z.prototype = {
		jquery: K,
		constructor: Z,
		selector: "",
		length: 0,
		toArray: function() {
			return z.call(this)
		},
		get: function(e) {
			return null != e ? 0 > e ? this[e + this.length] : this[e] : z.call(this)
		},
		pushStack: function(e) {
			var t = Z.merge(this.constructor(), e);
			return t.prevObject = this, t.context = this.context, t
		},
		each: function(e, t) {
			return Z.each(this, e, t)
		},
		map: function(e) {
			return this.pushStack(Z.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(z.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: H,
		sort: U.sort,
		splice: U.splice
	}, Z.extend = Z.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || Z.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (u && r && (Z.isPlainObject(r) || (i = Z.isArray(r))) ? (i ? (i = !1, o = n && Z.isArray(n) ? n : []) : o = n && Z.isPlainObject(n) ? n : {}, a[t] = Z.extend(u, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, Z.extend({
		expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isFunction: function(e) {
			return "function" === Z.type(e)
		},
		isArray: Array.isArray,
		isWindow: function(e) {
			return null != e && e === e.window
		},
		isNumeric: function(e) {
			return !Z.isArray(e) && e - parseFloat(e) + 1 >= 0
		},
		isPlainObject: function(e) {
			return "object" !== Z.type(e) || e.nodeType || Z.isWindow(e) ? !1 : e.constructor && !J.call(e.constructor.prototype, "isPrototypeOf") ? !1 : !0
		},
		isEmptyObject: function(e) {
			var t;
			for (t in e) return !1;
			return !0
		},
		type: function(e) {
			return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? $[X.call(e)] || "object" : typeof e
		},
		globalEval: function(e) {
			var t, n = eval;
			e = Z.trim(e), e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
		},
		camelCase: function(e) {
			return e.replace(te, "ms-").replace(ne, re)
		},
		nodeName: function(e, t) {
			return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
		},
		each: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e);
			if (r) {
				if (s) for (; a > o && (i = t.apply(e[o], r), i !== !1); o++);
				else for (o in e) if (i = t.apply(e[o], r), i === !1) break
			} else if (s) for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++);
			else for (o in e) if (i = t.call(e[o], o, e[o]), i === !1) break;
			return e
		},
		trim: function(e) {
			return null == e ? "" : (e + "").replace(ee, "")
		},
		makeArray: function(e, t) {
			var r = t || [];
			return null != e && (n(Object(e)) ? Z.merge(r, "string" == typeof e ? [e] : e) : H.call(r, e)), r
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : G.call(t, e, n)
		},
		merge: function(e, t) {
			for (var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for (var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, r) {
			var i, o = 0,
				a = e.length,
				s = n(e),
				l = [];
			if (s) for (; a > o; o++) i = t(e[o], o, r), null != i && l.push(i);
			else for (o in e) i = t(e[o], o, r), null != i && l.push(i);
			return W.apply([], l)
		},
		guid: 1,
		proxy: function(e, t) {
			var n, r, i;
			return "string" == typeof t && (n = e[t], t = e, e = n), Z.isFunction(e) ? (r = z.call(arguments, 2), i = function() {
				return e.apply(t || this, r.concat(z.call(arguments)))
			}, i.guid = e.guid = e.guid || Z.guid++, i) : void 0
		},
		now: Date.now,
		support: Y
	}), Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
		$["[object " + t + "]"] = t.toLowerCase()
	});
	var ie = function(e) {
			function t(e, t, n, r) {
				var i, o, a, s, l, u, d, f, p, g;
				if ((t ? t.ownerDocument || t : q) !== R && I(t), t = t || R, n = n || [], s = t.nodeType, "string" != typeof e || !e || 1 !== s && 9 !== s && 11 !== s) return n;
				if (!r && D) {
					if (11 !== s && (i = be.exec(e))) if (a = i[1]) {
						if (9 === s) {
							if (o = t.getElementById(a), !o || !o.parentNode) return n;
							if (o.id === a) return n.push(o), n
						} else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && j(t, o) && o.id === a) return n.push(o), n
					} else {
						if (i[2]) return K.apply(n, t.getElementsByTagName(e)), n;
						if ((a = i[3]) && w.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
					}
					if (w.qsa && (!N || !N.test(e))) {
						if (f = d = B, p = t, g = 1 !== s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
							for (u = C(e), (d = t.getAttribute("id")) ? f = d.replace(_e, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + h(u[l]);
							p = ye.test(e) && c(t.parentNode) || t, g = u.join(",")
						}
						if (g) try {
							return K.apply(n, p.querySelectorAll(g)), n
						} catch (v) {} finally {
							d || t.removeAttribute("id")
						}
					}
				}
				return k(e.replace(le, "$1"), t, n, r)
			}
			function n() {
				function e(n, r) {
					return t.push(n + " ") > S.cacheLength && delete e[t.shift()], e[n + " "] = r
				}
				var t = [];
				return e
			}
			function r(e) {
				return e[B] = !0, e
			}
			function i(e) {
				var t = R.createElement("div");
				try {
					return !!e(t)
				} catch (n) {
					return !1
				} finally {
					t.parentNode && t.parentNode.removeChild(t), t = null
				}
			}
			function o(e, t) {
				for (var n = e.split("|"), r = e.length; r--;) S.attrHandle[n[r]] = t
			}
			function a(e, t) {
				var n = t && e,
					r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || $) - (~e.sourceIndex || $);
				if (r) return r;
				if (n) for (; n = n.nextSibling;) if (n === t) return -1;
				return e ? 1 : -1
			}
			function s(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return "input" === n && t.type === e
				}
			}
			function l(e) {
				return function(t) {
					var n = t.nodeName.toLowerCase();
					return ("input" === n || "button" === n) && t.type === e
				}
			}
			function u(e) {
				return r(function(t) {
					return t = +t, r(function(n, r) {
						for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
					})
				})
			}
			function c(e) {
				return e && "undefined" != typeof e.getElementsByTagName && e
			}
			function d() {}
			function h(e) {
				for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
				return r
			}
			function f(e, t, n) {
				var r = t.dir,
					i = n && "parentNode" === r,
					o = U++;
				return t.first ?
				function(t, n, o) {
					for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o)
				} : function(t, n, a) {
					var s, l, u = [V, o];
					if (a) {
						for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0
					} else for (; t = t[r];) if (1 === t.nodeType || i) {
						if (l = t[B] || (t[B] = {}), (s = l[r]) && s[0] === V && s[1] === o) return u[2] = s[2];
						if (l[r] = u, u[2] = e(t, n, a)) return !0
					}
				}
			}
			function p(e) {
				return e.length > 1 ?
				function(t, n, r) {
					for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;
					return !0
				} : e[0]
			}
			function g(e, n, r) {
				for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
				return r
			}
			function v(e, t, n, r, i) {
				for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
				return a
			}
			function m(e, t, n, i, o, a) {
				return i && !i[B] && (i = m(i)), o && !o[B] && (o = m(o, a)), r(function(r, a, s, l) {
					var u, c, d, h = [],
						f = [],
						p = a.length,
						m = r || g(t || "*", s.nodeType ? [s] : s, []),
						b = !e || !r && t ? m : v(m, h, e, s, l),
						y = n ? o || (r ? e : p || i) ? [] : a : b;
					if (n && n(b, y, s, l), i) for (u = v(y, f), i(u, [], s, l), c = u.length; c--;)(d = u[c]) && (y[f[c]] = !(b[f[c]] = d));
					if (r) {
						if (o || e) {
							if (o) {
								for (u = [], c = y.length; c--;)(d = y[c]) && u.push(b[c] = d);
								o(null, y = [], u, l)
							}
							for (c = y.length; c--;)(d = y[c]) && (u = o ? ee(r, d) : h[c]) > -1 && (r[u] = !(a[u] = d))
						}
					} else y = v(y === a ? y.splice(p, y.length) : y), o ? o(null, a, y, l) : K.apply(a, y)
				})
			}
			function b(e) {
				for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, l = f(function(e) {
					return e === t
				}, a, !0), u = f(function(e) {
					return ee(t, e) > -1
				}, a, !0), c = [function(e, n, r) {
					var i = !o && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
					return t = null, i
				}]; i > s; s++) if (n = S.relative[e[s].type]) c = [f(p(c), n)];
				else {
					if (n = S.filter[e[s].type].apply(null, e[s].matches), n[B]) {
						for (r = ++s; i > r && !S.relative[e[r].type]; r++);
						return m(s > 1 && p(c), s > 1 && h(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(le, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && h(e))
					}
					c.push(n)
				}
				return p(c)
			}
			function y(e, n) {
				var i = n.length > 0,
					o = e.length > 0,
					a = function(r, a, s, l, u) {
						var c, d, h, f = 0,
							p = "0",
							g = r && [],
							m = [],
							b = T,
							y = r || o && S.find.TAG("*", u),
							_ = V += null == b ? 1 : Math.random() || .1,
							w = y.length;
						for (u && (T = a !== R && a); p !== w && null != (c = y[p]); p++) {
							if (o && c) {
								for (d = 0; h = e[d++];) if (h(c, a, s)) {
									l.push(c);
									break
								}
								u && (V = _)
							}
							i && ((c = !h && c) && f--, r && g.push(c))
						}
						if (f += p, i && p !== f) {
							for (d = 0; h = n[d++];) h(g, m, a, s);
							if (r) {
								if (f > 0) for (; p--;) g[p] || m[p] || (m[p] = Y.call(l));
								m = v(m)
							}
							K.apply(l, m), u && !r && m.length > 0 && f + n.length > 1 && t.uniqueSort(l)
						}
						return u && (V = _, T = b), g
					};
				return i ? r(a) : a
			}
			var _, w, S, P, x, C, A, k, T, E, L, I, R, O, D, N, F, M, j, B = "sizzle" + 1 * new Date,
				q = e.document,
				V = 0,
				U = 0,
				z = n(),
				W = n(),
				H = n(),
				G = function(e, t) {
					return e === t && (L = !0), 0
				},
				$ = 1 << 31,
				X = {}.hasOwnProperty,
				J = [],
				Y = J.pop,
				Q = J.push,
				K = J.push,
				Z = J.slice,
				ee = function(e, t) {
					for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
					return -1
				},
				te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ne = "[\ \\t\\r\\n\\f]",
				re = "(?:\\\\.|[\\w-]|[^\ -\ ])+",
				ie = re.replace("w", "w#"),
				oe = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + ne + "*\\]",
				ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
				se = new RegExp(ne + "+", "g"),
				le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
				ue = new RegExp("^" + ne + "*," + ne + "*"),
				ce = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
				de = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
				he = new RegExp(ae),
				fe = new RegExp("^" + ie + "$"),
				pe = {
					ID: new RegExp("^#(" + re + ")"),
					CLASS: new RegExp("^\\.(" + re + ")"),
					TAG: new RegExp("^(" + re.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + oe),
					PSEUDO: new RegExp("^" + ae),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + te + ")$", "i"),
					needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
				},
				ge = /^(?:input|select|textarea|button)$/i,
				ve = /^h\d$/i,
				me = /^[^{]+\{\s*\[native \w/,
				be = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ye = /[+~]/,
				_e = /'|\\/g,
				we = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
				Se = function(e, t, n) {
					var r = "0x" + t - 65536;
					return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
				},
				Pe = function() {
					I()
				};
			try {
				K.apply(J = Z.call(q.childNodes), q.childNodes), J[q.childNodes.length].nodeType
			} catch (xe) {
				K = {
					apply: J.length ?
					function(e, t) {
						Q.apply(e, Z.call(t))
					} : function(e, t) {
						for (var n = e.length, r = 0; e[n++] = t[r++];);
						e.length = n - 1
					}
				}
			}
			w = t.support = {}, x = t.isXML = function(e) {
				var t = e && (e.ownerDocument || e).documentElement;
				return t ? "HTML" !== t.nodeName : !1
			}, I = t.setDocument = function(e) {
				var t, n, r = e ? e.ownerDocument || e : q;
				return r !== R && 9 === r.nodeType && r.documentElement ? (R = r, O = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Pe, !1) : n.attachEvent && n.attachEvent("onunload", Pe)), D = !x(r), w.attributes = i(function(e) {
					return e.className = "i", !e.getAttribute("className")
				}), w.getElementsByTagName = i(function(e) {
					return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
				}), w.getElementsByClassName = me.test(r.getElementsByClassName), w.getById = i(function(e) {
					return O.appendChild(e).id = B, !r.getElementsByName || !r.getElementsByName(B).length
				}), w.getById ? (S.find.ID = function(e, t) {
					if ("undefined" != typeof t.getElementById && D) {
						var n = t.getElementById(e);
						return n && n.parentNode ? [n] : []
					}
				}, S.filter.ID = function(e) {
					var t = e.replace(we, Se);
					return function(e) {
						return e.getAttribute("id") === t
					}
				}) : (delete S.find.ID, S.filter.ID = function(e) {
					var t = e.replace(we, Se);
					return function(e) {
						var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
						return n && n.value === t
					}
				}), S.find.TAG = w.getElementsByTagName ?
				function(e, t) {
					return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
				} : function(e, t) {
					var n, r = [],
						i = 0,
						o = t.getElementsByTagName(e);
					if ("*" === e) {
						for (; n = o[i++];) 1 === n.nodeType && r.push(n);
						return r
					}
					return o
				}, S.find.CLASS = w.getElementsByClassName &&
				function(e, t) {
					return D ? t.getElementsByClassName(e) : void 0
				}, F = [], N = [], (w.qsa = me.test(r.querySelectorAll)) && (i(function(e) {
					O.appendChild(e).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ne + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || N.push("\\[" + ne + "*(?:value|" + te + ")"), e.querySelectorAll("[id~=" + B + "-]").length || N.push("~="), e.querySelectorAll(":checked").length || N.push(":checked"), e.querySelectorAll("a#" + B + "+*").length || N.push(".#.+[+~]")
				}), i(function(e) {
					var t = r.createElement("input");
					t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && N.push("name" + ne + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), N.push(",.*:")
				})), (w.matchesSelector = me.test(M = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
					w.disconnectedMatch = M.call(e, "div"), M.call(e, "[s!='']:x"), F.push("!=", ae)
				}), N = N.length && new RegExp(N.join("|")), F = F.length && new RegExp(F.join("|")), t = me.test(O.compareDocumentPosition), j = t || me.test(O.contains) ?
				function(e, t) {
					var n = 9 === e.nodeType ? e.documentElement : e,
						r = t && t.parentNode;
					return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
				} : function(e, t) {
					if (t) for (; t = t.parentNode;) if (t === e) return !0;
					return !1
				}, G = t ?
				function(e, t) {
					if (e === t) return L = !0, 0;
					var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
					return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === r || e.ownerDocument === q && j(q, e) ? -1 : t === r || t.ownerDocument === q && j(q, t) ? 1 : E ? ee(E, e) - ee(E, t) : 0 : 4 & n ? -1 : 1)
				} : function(e, t) {
					if (e === t) return L = !0, 0;
					var n, i = 0,
						o = e.parentNode,
						s = t.parentNode,
						l = [e],
						u = [t];
					if (!o || !s) return e === r ? -1 : t === r ? 1 : o ? -1 : s ? 1 : E ? ee(E, e) - ee(E, t) : 0;
					if (o === s) return a(e, t);
					for (n = e; n = n.parentNode;) l.unshift(n);
					for (n = t; n = n.parentNode;) u.unshift(n);
					for (; l[i] === u[i];) i++;
					return i ? a(l[i], u[i]) : l[i] === q ? -1 : u[i] === q ? 1 : 0
				}, r) : R
			}, t.matches = function(e, n) {
				return t(e, null, null, n)
			}, t.matchesSelector = function(e, n) {
				if ((e.ownerDocument || e) !== R && I(e), n = n.replace(de, "='$1']"), !(!w.matchesSelector || !D || F && F.test(n) || N && N.test(n))) try {
					var r = M.call(e, n);
					if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
				} catch (i) {}
				return t(n, R, null, [e]).length > 0
			}, t.contains = function(e, t) {
				return (e.ownerDocument || e) !== R && I(e), j(e, t)
			}, t.attr = function(e, t) {
				(e.ownerDocument || e) !== R && I(e);
				var n = S.attrHandle[t.toLowerCase()],
					r = n && X.call(S.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;
				return void 0 !== r ? r : w.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}, t.error = function(e) {
				throw new Error("Syntax error, unrecognized expression: " + e)
			}, t.uniqueSort = function(e) {
				var t, n = [],
					r = 0,
					i = 0;
				if (L = !w.detectDuplicates, E = !w.sortStable && e.slice(0), e.sort(G), L) {
					for (; t = e[i++];) t === e[i] && (r = n.push(i));
					for (; r--;) e.splice(n[r], 1)
				}
				return E = null, e
			}, P = t.getText = function(e) {
				var t, n = "",
					r = 0,
					i = e.nodeType;
				if (i) {
					if (1 === i || 9 === i || 11 === i) {
						if ("string" == typeof e.textContent) return e.textContent;
						for (e = e.firstChild; e; e = e.nextSibling) n += P(e)
					} else if (3 === i || 4 === i) return e.nodeValue
				} else for (; t = e[r++];) n += P(t);
				return n
			}, S = t.selectors = {
				cacheLength: 50,
				createPseudo: r,
				match: pe,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(e) {
						return e[1] = e[1].replace(we, Se), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Se), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
					},
					CHILD: function(e) {
						return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
					},
					PSEUDO: function(e) {
						var t, n = !e[6] && e[2];
						return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
					}
				},
				filter: {
					TAG: function(e) {
						var t = e.replace(we, Se).toLowerCase();
						return "*" === e ?
						function() {
							return !0
						} : function(e) {
							return e.nodeName && e.nodeName.toLowerCase() === t
						}
					},
					CLASS: function(e) {
						var t = z[e + " "];
						return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && z(e, function(e) {
							return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
						})
					},
					ATTR: function(e, n, r) {
						return function(i) {
							var o = t.attr(i, e);
							return null == o ? "!=" === n : n ? (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
						}
					},
					CHILD: function(e, t, n, r, i) {
						var o = "nth" !== e.slice(0, 3),
							a = "last" !== e.slice(-4),
							s = "of-type" === t;
						return 1 === r && 0 === i ?
						function(e) {
							return !!e.parentNode
						} : function(t, n, l) {
							var u, c, d, h, f, p, g = o !== a ? "nextSibling" : "previousSibling",
								v = t.parentNode,
								m = s && t.nodeName.toLowerCase(),
								b = !l && !s;
							if (v) {
								if (o) {
									for (; g;) {
										for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
										p = g = "only" === e && !p && "nextSibling"
									}
									return !0
								}
								if (p = [a ? v.firstChild : v.lastChild], a && b) {
									for (c = v[B] || (v[B] = {}), u = c[e] || [], f = u[0] === V && u[1], h = u[0] === V && u[2], d = f && v.childNodes[f]; d = ++f && d && d[g] || (h = f = 0) || p.pop();) if (1 === d.nodeType && ++h && d === t) {
										c[e] = [V, f, h];
										break
									}
								} else if (b && (u = (t[B] || (t[B] = {}))[e]) && u[0] === V) h = u[1];
								else for (;
								(d = ++f && d && d[g] || (h = f = 0) || p.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++h || (b && ((d[B] || (d[B] = {}))[e] = [V, h]), d !== t)););
								return h -= i, h === r || h % r === 0 && h / r >= 0
							}
						}
					},
					PSEUDO: function(e, n) {
						var i, o = S.pseudos[e] || S.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
						return o[B] ? o(n) : o.length > 1 ? (i = [e, e, "", n], S.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
							for (var r, i = o(e, n), a = i.length; a--;) r = ee(e, i[a]), e[r] = !(t[r] = i[a])
						}) : function(e) {
							return o(e, 0, i)
						}) : o
					}
				},
				pseudos: {
					not: r(function(e) {
						var t = [],
							n = [],
							i = A(e.replace(le, "$1"));
						return i[B] ? r(function(e, t, n, r) {
							for (var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
						}) : function(e, r, o) {
							return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
						}
					}),
					has: r(function(e) {
						return function(n) {
							return t(e, n).length > 0
						}
					}),
					contains: r(function(e) {
						return e = e.replace(we, Se), function(t) {
							return (t.textContent || t.innerText || P(t)).indexOf(e) > -1
						}
					}),
					lang: r(function(e) {
						return fe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Se).toLowerCase(), function(t) {
							var n;
							do
							if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while ((t = t.parentNode) && 1 === t.nodeType);
							return !1
						}
					}),
					target: function(t) {
						var n = e.location && e.location.hash;
						return n && n.slice(1) === t.id
					},
					root: function(e) {
						return e === O
					},
					focus: function(e) {
						return e === R.activeElement && (!R.hasFocus || R.hasFocus()) && !! (e.type || e.href || ~e.tabIndex)
					},
					enabled: function(e) {
						return e.disabled === !1
					},
					disabled: function(e) {
						return e.disabled === !0
					},
					checked: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && !! e.checked || "option" === t && !! e.selected
					},
					selected: function(e) {
						return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
					},
					empty: function(e) {
						for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
						return !0
					},
					parent: function(e) {
						return !S.pseudos.empty(e)
					},
					header: function(e) {
						return ve.test(e.nodeName)
					},
					input: function(e) {
						return ge.test(e.nodeName)
					},
					button: function(e) {
						var t = e.nodeName.toLowerCase();
						return "input" === t && "button" === e.type || "button" === t
					},
					text: function(e) {
						var t;
						return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
					},
					first: u(function() {
						return [0]
					}),
					last: u(function(e, t) {
						return [t - 1]
					}),
					eq: u(function(e, t, n) {
						return [0 > n ? n + t : n]
					}),
					even: u(function(e, t) {
						for (var n = 0; t > n; n += 2) e.push(n);
						return e
					}),
					odd: u(function(e, t) {
						for (var n = 1; t > n; n += 2) e.push(n);
						return e
					}),
					lt: u(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);
						return e
					}),
					gt: u(function(e, t, n) {
						for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
						return e
					})
				}
			}, S.pseudos.nth = S.pseudos.eq;
			for (_ in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) S.pseudos[_] = s(_);
			for (_ in {
				submit: !0,
				reset: !0
			}) S.pseudos[_] = l(_);
			return d.prototype = S.filters = S.pseudos, S.setFilters = new d, C = t.tokenize = function(e, n) {
				var r, i, o, a, s, l, u, c = W[e + " "];
				if (c) return n ? 0 : c.slice(0);
				for (s = e, l = [], u = S.preFilter; s;) {
					(!r || (i = ue.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
						value: r,
						type: i[0].replace(le, " ")
					}), s = s.slice(r.length));
					for (a in S.filter)!(i = pe[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({
						value: r,
						type: a,
						matches: i
					}), s = s.slice(r.length));
					if (!r) break
				}
				return n ? s.length : s ? t.error(e) : W(e, l).slice(0)
			}, A = t.compile = function(e, t) {
				var n, r = [],
					i = [],
					o = H[e + " "];
				if (!o) {
					for (t || (t = C(e)), n = t.length; n--;) o = b(t[n]), o[B] ? r.push(o) : i.push(o);
					o = H(e, y(i, r)), o.selector = e
				}
				return o
			}, k = t.select = function(e, t, n, r) {
				var i, o, a, s, l, u = "function" == typeof e && e,
					d = !r && C(e = u.selector || e);
				if (n = n || [], 1 === d.length) {
					if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && w.getById && 9 === t.nodeType && D && S.relative[o[1].type]) {
						if (t = (S.find.ID(a.matches[0].replace(we, Se), t) || [])[0], !t) return n;
						u && (t = t.parentNode), e = e.slice(o.shift().value.length)
					}
					for (i = pe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);) if ((l = S.find[s]) && (r = l(a.matches[0].replace(we, Se), ye.test(o[0].type) && c(t.parentNode) || t))) {
						if (o.splice(i, 1), e = r.length && h(o), !e) return K.apply(n, r), n;
						break
					}
				}
				return (u || A(e, d))(r, t, !D, n, ye.test(e) && c(t.parentNode) || t), n
			}, w.sortStable = B.split("").sort(G).join("") === B, w.detectDuplicates = !! L, I(), w.sortDetached = i(function(e) {
				return 1 & e.compareDocumentPosition(R.createElement("div"))
			}), i(function(e) {
				return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
			}) || o("type|href|height|width", function(e, t, n) {
				return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
			}), w.attributes && i(function(e) {
				return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
			}) || o("value", function(e, t, n) {
				return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
			}), i(function(e) {
				return null == e.getAttribute("disabled")
			}) || o(te, function(e, t, n) {
				var r;
				return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
			}), t
		}(e);
	Z.find = ie, Z.expr = ie.selectors, Z.expr[":"] = Z.expr.pseudos, Z.unique = ie.uniqueSort, Z.text = ie.getText, Z.isXMLDoc = ie.isXML, Z.contains = ie.contains;
	var oe = Z.expr.match.needsContext,
		ae = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		se = /^.[^:#\[\.,]*$/;
	Z.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Z.find.matchesSelector(r, e) ? [r] : [] : Z.find.matches(e, Z.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Z.fn.extend({
		find: function(e) {
			var t, n = this.length,
				r = [],
				i = this;
			if ("string" != typeof e) return this.pushStack(Z(e).filter(function() {
				for (t = 0; n > t; t++) if (Z.contains(i[t], this)) return !0
			}));
			for (t = 0; n > t; t++) Z.find(e, i[t], r);
			return r = this.pushStack(n > 1 ? Z.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r
		},
		filter: function(e) {
			return this.pushStack(r(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(r(this, e || [], !0))
		},
		is: function(e) {
			return !!r(this, "string" == typeof e && oe.test(e) ? Z(e) : e || [], !1).length
		}
	});
	var le, ue = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		ce = Z.fn.init = function(e, t) {
			var n, r;
			if (!e) return this;
			if ("string" == typeof e) {
				if (n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ue.exec(e), !n || !n[1] && t) return !t || t.jquery ? (t || le).find(e) : this.constructor(t).find(e);
				if (n[1]) {
					if (t = t instanceof Z ? t[0] : t, Z.merge(this, Z.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : Q, !0)), ae.test(n[1]) && Z.isPlainObject(t)) for (n in t) Z.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
					return this
				}
				return r = Q.getElementById(n[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Q, this.selector = e, this
			}
			return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Z.isFunction(e) ? "undefined" != typeof le.ready ? le.ready(e) : e(Z) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), Z.makeArray(e, this))
		};
	ce.prototype = Z.fn, le = Z(Q);
	var de = /^(?:parents|prev(?:Until|All))/,
		he = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Z.extend({
		dir: function(e, t, n) {
			for (var r = [], i = void 0 !== n;
			(e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
				if (i && Z(e).is(n)) break;
				r.push(e)
			}
			return r
		},
		sibling: function(e, t) {
			for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		}
	}), Z.fn.extend({
		has: function(e) {
			var t = Z(e, this),
				n = t.length;
			return this.filter(function() {
				for (var e = 0; n > e; e++) if (Z.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			for (var n, r = 0, i = this.length, o = [], a = oe.test(e) || "string" != typeof e ? Z(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Z.find.matchesSelector(n, e))) {
				o.push(n);
				break
			}
			return this.pushStack(o.length > 1 ? Z.unique(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? G.call(Z(e), this[0]) : G.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Z.unique(Z.merge(this.get(), Z(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Z.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return Z.dir(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return Z.dir(e, "parentNode", n)
		},
		next: function(e) {
			return i(e, "nextSibling")
		},
		prev: function(e) {
			return i(e, "previousSibling")
		},
		nextAll: function(e) {
			return Z.dir(e, "nextSibling")
		},
		prevAll: function(e) {
			return Z.dir(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return Z.dir(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return Z.dir(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Z.sibling((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Z.sibling(e.firstChild)
		},
		contents: function(e) {
			return e.contentDocument || Z.merge([], e.childNodes)
		}
	}, function(e, t) {
		Z.fn[e] = function(n, r) {
			var i = Z.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Z.filter(r, i)), this.length > 1 && (he[e] || Z.unique(i), de.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var fe = /\S+/g,
		pe = {};
	Z.Callbacks = function(e) {
		e = "string" == typeof e ? pe[e] || o(e) : Z.extend({}, e);
		var t, n, r, i, a, s, l = [],
			u = !e.once && [],
			c = function(o) {
				for (t = e.memory && o, n = !0, s = i || 0, i = 0, a = l.length, r = !0; l && a > s; s++) if (l[s].apply(o[0], o[1]) === !1 && e.stopOnFalse) {
					t = !1;
					break
				}
				r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable())
			},
			d = {
				add: function() {
					if (l) {
						var n = l.length;
						!
						function o(t) {
							Z.each(t, function(t, n) {
								var r = Z.type(n);
								"function" === r ? e.unique && d.has(n) || l.push(n) : n && n.length && "string" !== r && o(n)
							})
						}(arguments), r ? a = l.length : t && (i = n, c(t))
					}
					return this
				},
				remove: function() {
					return l && Z.each(arguments, function(e, t) {
						for (var n;
						(n = Z.inArray(t, l, n)) > -1;) l.splice(n, 1), r && (a >= n && a--, s >= n && s--)
					}), this
				},
				has: function(e) {
					return e ? Z.inArray(e, l) > -1 : !(!l || !l.length)
				},
				empty: function() {
					return l = [], a = 0, this
				},
				disable: function() {
					return l = u = t = void 0, this
				},
				disabled: function() {
					return !l
				},
				lock: function() {
					return u = void 0, t || d.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(e, t) {
					return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
				}
			};
		return d
	}, Z.extend({
		Deferred: function(e) {
			var t = [
				["resolve", "done", Z.Callbacks("once memory"), "resolved"],
				["reject", "fail", Z.Callbacks("once memory"), "rejected"],
				["notify", "progress", Z.Callbacks("memory")]
			],
				n = "pending",
				r = {
					state: function() {
						return n
					},
					always: function() {
						return i.done(arguments).fail(arguments), this
					},
					then: function() {
						var e = arguments;
						return Z.Deferred(function(n) {
							Z.each(t, function(t, o) {
								var a = Z.isFunction(e[t]) && e[t];
								i[o[1]](function() {
									var e = a && a.apply(this, arguments);
									e && Z.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					promise: function(e) {
						return null != e ? Z.extend(e, r) : r
					}
				},
				i = {};
			return r.pipe = r.then, Z.each(t, function(e, o) {
				var a = o[2],
					s = o[3];
				r[o[1]] = a.add, s && a.add(function() {
					n = s
				}, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
					return i[o[0] + "With"](this === i ? r : this, arguments), this
				}, i[o[0] + "With"] = a.fireWith
			}), r.promise(i), e && e.call(i, i), i
		},
		when: function(e) {
			var t, n, r, i = 0,
				o = z.call(arguments),
				a = o.length,
				s = 1 !== a || e && Z.isFunction(e.promise) ? a : 0,
				l = 1 === s ? e : Z.Deferred(),
				u = function(e, n, r) {
					return function(i) {
						n[e] = this, r[e] = arguments.length > 1 ? z.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
					}
				};
			if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && Z.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;
			return s || l.resolveWith(r, o), l.promise()
		}
	});
	var ge;
	Z.fn.ready = function(e) {
		return Z.ready.promise().done(e), this
	}, Z.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(e) {
			e ? Z.readyWait++ : Z.ready(!0)
		},
		ready: function(e) {
			(e === !0 ? --Z.readyWait : Z.isReady) || (Z.isReady = !0, e !== !0 && --Z.readyWait > 0 || (ge.resolveWith(Q, [Z]), Z.fn.triggerHandler && (Z(Q).triggerHandler("ready"), Z(Q).off("ready"))))
		}
	}), Z.ready.promise = function(t) {
		return ge || (ge = Z.Deferred(), "complete" === Q.readyState ? setTimeout(Z.ready) : (Q.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), ge.promise(t)
	}, Z.ready.promise();
	var ve = Z.access = function(e, t, n, r, i, o, a) {
			var s = 0,
				l = e.length,
				u = null == n;
			if ("object" === Z.type(n)) {
				i = !0;
				for (s in n) Z.access(e, t, s, n[s], !0, o, a)
			} else if (void 0 !== r && (i = !0, Z.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function(e, t, n) {
				return u.call(Z(e), n)
			})), t)) for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
			return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
		};
	Z.acceptData = function(e) {
		return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
	}, s.uid = 1, s.accepts = Z.acceptData, s.prototype = {
		key: function(e) {
			if (!s.accepts(e)) return 0;
			var t = {},
				n = e[this.expando];
			if (!n) {
				n = s.uid++;
				try {
					t[this.expando] = {
						value: n
					}, Object.defineProperties(e, t)
				} catch (r) {
					t[this.expando] = n, Z.extend(e, t)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(e, t, n) {
			var r, i = this.key(e),
				o = this.cache[i];
			if ("string" == typeof t) o[t] = n;
			else if (Z.isEmptyObject(o)) Z.extend(this.cache[i], t);
			else for (r in t) o[r] = t[r];
			return o
		},
		get: function(e, t) {
			var n = this.cache[this.key(e)];
			return void 0 === t ? n : n[t]
		},
		access: function(e, t, n) {
			var r;
			return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r : this.get(e, Z.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r, i, o = this.key(e),
				a = this.cache[o];
			if (void 0 === t) this.cache[o] = {};
			else {
				Z.isArray(t) ? r = t.concat(t.map(Z.camelCase)) : (i = Z.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(fe) || [])), n = r.length;
				for (; n--;) delete a[r[n]]
			}
		},
		hasData: function(e) {
			return !Z.isEmptyObject(this.cache[e[this.expando]] || {})
		},
		discard: function(e) {
			e[this.expando] && delete this.cache[e[this.expando]]
		}
	};
	var me = new s,
		be = new s,
		ye = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		_e = /([A-Z])/g;
	Z.extend({
		hasData: function(e) {
			return be.hasData(e) || me.hasData(e)
		},
		data: function(e, t, n) {
			return be.access(e, t, n)
		},
		removeData: function(e, t) {
			be.remove(e, t)
		},
		_data: function(e, t, n) {
			return me.access(e, t, n)
		},
		_removeData: function(e, t) {
			me.remove(e, t)
		}
	}), Z.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if (void 0 === e) {
				if (this.length && (i = be.get(o), 1 === o.nodeType && !me.get(o, "hasDataAttrs"))) {
					for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = Z.camelCase(r.slice(5)), l(o, r, i[r])));
					me.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				be.set(this, e)
			}) : ve(this, function(t) {
				var n, r = Z.camelCase(e);
				if (o && void 0 === t) {
					if (n = be.get(o, e), void 0 !== n) return n;
					if (n = be.get(o, r), void 0 !== n) return n;
					if (n = l(o, r, void 0), void 0 !== n) return n
				} else this.each(function() {
					var n = be.get(this, r);
					be.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && be.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				be.remove(this, e)
			})
		}
	}), Z.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = me.get(e, t), n && (!r || Z.isArray(n) ? r = me.access(e, t, Z.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Z.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Z._queueHooks(e, t),
				a = function() {
					Z.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return me.get(e, n) || me.access(e, n, {
				empty: Z.Callbacks("once memory").add(function() {
					me.remove(e, [t + "queue", n])
				})
			})
		}
	}), Z.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Z.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Z.queue(this, e, t);
				Z._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Z.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Z.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Z.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = me.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var we = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Se = ["Top", "Right", "Bottom", "Left"],
		Pe = function(e, t) {
			return e = t || e, "none" === Z.css(e, "display") || !Z.contains(e.ownerDocument, e)
		},
		xe = /^(?:checkbox|radio)$/i;
	!
	function() {
		var e = Q.createDocumentFragment(),
			t = e.appendChild(Q.createElement("div")),
			n = Q.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), Y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !! t.cloneNode(!0).lastChild.defaultValue
	}();
	var Ce = "undefined";
	Y.focusinBubbles = "onfocusin" in e;
	var Ae = /^key/,
		ke = /^(?:mouse|pointer|contextmenu)|click/,
		Te = /^(?:focusinfocus|focusoutblur)$/,
		Ee = /^([^.]*)(?:\.(.+)|)$/;
	Z.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, l, u, c, d, h, f, p, g, v = me.get(e);
			if (v) for (n.handler && (o = n, n = o.handler, i = o.selector), n.guid || (n.guid = Z.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
				return typeof Z !== Ce && Z.event.triggered !== t.type ? Z.event.dispatch.apply(e, arguments) : void 0
			}), t = (t || "").match(fe) || [""], u = t.length; u--;) s = Ee.exec(t[u]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f && (d = Z.event.special[f] || {}, f = (i ? d.delegateType : d.bindType) || f, d = Z.event.special[f] || {}, c = Z.extend({
				type: f,
				origType: g,
				data: r,
				handler: n,
				guid: n.guid,
				selector: i,
				needsContext: i && Z.expr.match.needsContext.test(i),
				namespace: p.join(".")
			}, o), (h = l[f]) || (h = l[f] = [], h.delegateCount = 0, d.setup && d.setup.call(e, r, p, a) !== !1 || e.addEventListener && e.addEventListener(f, a, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, c) : h.push(c), Z.event.global[f] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, l, u, c, d, h, f, p, g, v = me.hasData(e) && me.get(e);
			if (v && (l = v.events)) {
				for (t = (t || "").match(fe) || [""], u = t.length; u--;) if (s = Ee.exec(t[u]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
					for (d = Z.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, h = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(e, c));
					a && !h.length && (d.teardown && d.teardown.call(e, p, v.handle) !== !1 || Z.removeEvent(e, f, v.handle), delete l[f])
				} else for (f in l) Z.event.remove(e, f + t[u], n, r, !0);
				Z.isEmptyObject(l) && (delete v.handle, me.remove(e, "events"))
			}
		},
		trigger: function(t, n, r, i) {
			var o, a, s, l, u, c, d, h = [r || Q],
				f = J.call(t, "type") ? t.type : t,
				p = J.call(t, "namespace") ? t.namespace.split(".") : [];
			if (a = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !Te.test(f + Z.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), u = f.indexOf(":") < 0 && "on" + f, t = t[Z.expando] ? t : new Z.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Z.makeArray(n, [t]), d = Z.event.special[f] || {}, i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
				if (!i && !d.noBubble && !Z.isWindow(r)) {
					for (l = d.delegateType || f, Te.test(l + f) || (a = a.parentNode); a; a = a.parentNode) h.push(a), s = a;
					s === (r.ownerDocument || Q) && h.push(s.defaultView || s.parentWindow || e)
				}
				for (o = 0;
				(a = h[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? l : d.bindType || f, c = (me.get(a, "events") || {})[t.type] && me.get(a, "handle"), c && c.apply(a, n), c = u && a[u], c && c.apply && Z.acceptData(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = f, i || t.isDefaultPrevented() || d._default && d._default.apply(h.pop(), n) !== !1 || !Z.acceptData(r) || u && Z.isFunction(r[f]) && !Z.isWindow(r) && (s = r[u], s && (r[u] = null), Z.event.triggered = f, r[f](), Z.event.triggered = void 0, s && (r[u] = s)), t.result
			}
		},
		dispatch: function(e) {
			e = Z.event.fix(e);
			var t, n, r, i, o, a = [],
				s = z.call(arguments),
				l = (me.get(this, "events") || {})[e.type] || [],
				u = Z.event.special[e.type] || {};
			if (s[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
				for (a = Z.event.handlers.call(this, e, l), t = 0;
				(i = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0;
				(o = i.handlers[n++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(o.namespace)) && (e.handleObj = o, e.data = o.data, r = ((Z.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
				return u.postDispatch && u.postDispatch.call(this, e), e.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a = [],
				s = t.delegateCount,
				l = e.target;
			if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (l.disabled !== !0 || "click" !== e.type) {
				for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? Z(i, this).index(l) >= 0 : Z.find(i, this, null, [l]).length), r[i] && r.push(o);
				r.length && a.push({
					elem: l,
					handlers: r
				})
			}
			return s < t.length && a.push({
				elem: this,
				handlers: t.slice(s)
			}), a
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(e, t) {
				return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(e, t) {
				var n, r, i, o = t.button;
				return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e
			}
		},
		fix: function(e) {
			if (e[Z.expando]) return e;
			var t, n, r, i = e.type,
				o = e,
				a = this.fixHooks[i];
			for (a || (this.fixHooks[i] = a = ke.test(i) ? this.mouseHooks : Ae.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new Z.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];
			return e.target || (e.target = Q), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== d() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === d() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && Z.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(e) {
					return Z.nodeName(e.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		},
		simulate: function(e, t, n, r) {
			var i = Z.extend(new Z.Event, n, {
				type: e,
				isSimulated: !0,
				originalEvent: {}
			});
			r ? Z.event.trigger(i, null, t) : Z.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
		}
	}, Z.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n, !1)
	}, Z.Event = function(e, t) {
		return this instanceof Z.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? u : c) : this.type = e, t && Z.extend(this, t), this.timeStamp = e && e.timeStamp || Z.now(), void(this[Z.expando] = !0)) : new Z.Event(e, t)
	}, Z.Event.prototype = {
		isDefaultPrevented: c,
		isPropagationStopped: c,
		isImmediatePropagationStopped: c,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Z.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Z.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return (!i || i !== r && !Z.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Y.focusinBubbles || Z.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
				Z.event.simulate(t, e.target, Z.event.fix(e), !0)
			};
		Z.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this,
					i = me.access(r, t);
				i || r.addEventListener(e, n, !0), me.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this,
					i = me.access(r, t) - 1;
				i ? me.access(r, t, i) : (r.removeEventListener(e, n, !0), me.remove(r, t))
			}
		}
	}), Z.fn.extend({
		on: function(e, t, n, r, i) {
			var o, a;
			if ("object" == typeof e) {
				"string" != typeof t && (n = n || t, t = void 0);
				for (a in e) this.on(a, t, n, e[a], i);
				return this
			}
			if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), r === !1) r = c;
			else if (!r) return this;
			return 1 === i && (o = r, r = function(e) {
				return Z().off(e), o.apply(this, arguments)
			}, r.guid = o.guid || (o.guid = Z.guid++)), this.each(function() {
				Z.event.add(this, e, r, n, t)
			})
		},
		one: function(e, t, n, r) {
			return this.on(e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Z(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if ("object" == typeof e) {
				for (i in e) this.off(i, t, e[i]);
				return this
			}
			return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = c), this.each(function() {
				Z.event.remove(this, e, n, t)
			})
		},
		trigger: function(e, t) {
			return this.each(function() {
				Z.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Z.event.trigger(e, t, n, !0) : void 0
		}
	});
	var Le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		Ie = /<([\w:]+)/,
		Re = /<|&#?\w+;/,
		Oe = /<(?:script|style|link)/i,
		De = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Ne = /^$|\/(?:java|ecma)script/i,
		Fe = /^true\/(.*)/,
		Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		je = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};
	je.optgroup = je.option, je.tbody = je.tfoot = je.colgroup = je.caption = je.thead, je.th = je.td, Z.extend({
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				l = Z.contains(e.ownerDocument, e);
			if (!(Y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Z.isXMLDoc(e))) for (a = m(s), o = m(e), r = 0, i = o.length; i > r; r++) b(o[r], a[r]);
			if (t) if (n) for (o = o || m(e), a = a || m(s), r = 0, i = o.length; i > r; r++) v(o[r], a[r]);
			else v(e, s);
			return a = m(s, "script"), a.length > 0 && g(a, !l && m(e, "script")), s
		},
		buildFragment: function(e, t, n, r) {
			for (var i, o, a, s, l, u, c = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++) if (i = e[h], i || 0 === i) if ("object" === Z.type(i)) Z.merge(d, i.nodeType ? [i] : i);
			else if (Re.test(i)) {
				for (o = o || c.appendChild(t.createElement("div")), a = (Ie.exec(i) || ["", ""])[1].toLowerCase(), s = je[a] || je._default, o.innerHTML = s[1] + i.replace(Le, "<$1></$2>") + s[2], u = s[0]; u--;) o = o.lastChild;
				Z.merge(d, o.childNodes), o = c.firstChild, o.textContent = ""
			} else d.push(t.createTextNode(i));
			for (c.textContent = "", h = 0; i = d[h++];) if ((!r || -1 === Z.inArray(i, r)) && (l = Z.contains(i.ownerDocument, i), o = m(c.appendChild(i), "script"), l && g(o), n)) for (u = 0; i = o[u++];) Ne.test(i.type || "") && n.push(i);
			return c
		},
		cleanData: function(e) {
			for (var t, n, r, i, o = Z.event.special, a = 0; void 0 !== (n = e[a]); a++) {
				if (Z.acceptData(n) && (i = n[me.expando], i && (t = me.cache[i]))) {
					if (t.events) for (r in t.events) o[r] ? Z.event.remove(n, r) : Z.removeEvent(n, r, t.handle);
					me.cache[i] && delete me.cache[i]
				}
				delete be.cache[n[be.expando]]
			}
		}
	}), Z.fn.extend({
		text: function(e) {
			return ve(this, function(e) {
				return void 0 === e ? Z.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(e) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = h(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		remove: function(e, t) {
			for (var n, r = e ? Z.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || Z.cleanData(m(n)), n.parentNode && (t && Z.contains(n.ownerDocument, n) && g(m(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Z.cleanData(m(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Z.clone(this, e, t)
			})
		},
		html: function(e) {
			return ve(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if ("string" == typeof e && !Oe.test(e) && !je[(Ie.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = e.replace(Le, "<$1></$2>");
					try {
						for (; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Z.cleanData(m(t, !1)), t.innerHTML = e);
						t = 0
					} catch (i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, Z.cleanData(m(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(e) {
			return this.remove(e, !0)
		},
		domManip: function(e, t) {
			e = W.apply([], e);
			var n, r, i, o, a, s, l = 0,
				u = this.length,
				c = this,
				d = u - 1,
				h = e[0],
				g = Z.isFunction(h);
			if (g || u > 1 && "string" == typeof h && !Y.checkClone && De.test(h)) return this.each(function(n) {
				var r = c.eq(n);
				g && (e[0] = h.call(this, n, r.html())), r.domManip(e, t)
			});
			if (u && (n = Z.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
				for (i = Z.map(m(n, "script"), f), o = i.length; u > l; l++) a = n, l !== d && (a = Z.clone(a, !0, !0), o && Z.merge(i, m(a, "script"))), t.call(this[l], a, l);
				if (o) for (s = i[i.length - 1].ownerDocument, Z.map(i, p), l = 0; o > l; l++) a = i[l], Ne.test(a.type || "") && !me.access(a, "globalEval") && Z.contains(s, a) && (a.src ? Z._evalUrl && Z._evalUrl(a.src) : Z.globalEval(a.textContent.replace(Me, "")))
			}
			return this
		}
	}), Z.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Z.fn[e] = function(e) {
			for (var n, r = [], i = Z(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Z(i[a])[t](n), H.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var Be, qe = {},
		Ve = /^margin/,
		Ue = new RegExp("^(" + we + ")(?!px)[a-z%]+$", "i"),
		ze = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
		};
	!
	function() {
		function t() {
			a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a.innerHTML = "", i.appendChild(o);
			var t = e.getComputedStyle(a, null);
			n = "1%" !== t.top, r = "4px" === t.width, i.removeChild(o)
		}
		var n, r, i = Q.documentElement,
			o = Q.createElement("div"),
			a = Q.createElement("div");
		a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(a), e.getComputedStyle && Z.extend(Y, {
			pixelPosition: function() {
				return t(), n
			},
			boxSizingReliable: function() {
				return null == r && t(), r
			},
			reliableMarginRight: function() {
				var t, n = a.appendChild(Q.createElement("div"));
				return n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", a.style.width = "1px", i.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), i.removeChild(o), a.removeChild(n), t
			}
		}))
	}(), Z.swap = function(e, t, n, r) {
		var i, o, a = {};
		for (o in t) a[o] = e.style[o], e.style[o] = t[o];
		i = n.apply(e, r || []);
		for (o in t) e.style[o] = a[o];
		return i
	};
	var We = /^(none|table(?!-c[ea]).+)/,
		He = new RegExp("^(" + we + ")(.*)$", "i"),
		Ge = new RegExp("^([+-])=(" + we + ")", "i"),
		$e = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Xe = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Je = ["Webkit", "O", "Moz", "ms"];
	Z.extend({
		cssHooks: {
			opacity: {
				get: function(e, t) {
					if (t) {
						var n = w(e, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			"float": "cssFloat"
		},
		style: function(e, t, n, r) {
			if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
				var i, o, a, s = Z.camelCase(t),
					l = e.style;
				return t = Z.cssProps[s] || (Z.cssProps[s] = P(l, s)), a = Z.cssHooks[t] || Z.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Ge.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(Z.css(e, t)), o = "number"), void(null != n && n === n && ("number" !== o || Z.cssNumber[s] || (n += "px"), Y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))))
			}
		},
		css: function(e, t, n, r) {
			var i, o, a, s = Z.camelCase(t);
			return t = Z.cssProps[s] || (Z.cssProps[s] = P(e.style, s)), a = Z.cssHooks[t] || Z.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = w(e, t, r)), "normal" === i && t in Xe && (i = Xe[t]), "" === n || n ? (o = parseFloat(i), n === !0 || Z.isNumeric(o) ? o || 0 : i) : i
		}
	}), Z.each(["height", "width"], function(e, t) {
		Z.cssHooks[t] = {
			get: function(e, n, r) {
				return n ? We.test(Z.css(e, "display")) && 0 === e.offsetWidth ? Z.swap(e, $e, function() {
					return A(e, t, r)
				}) : A(e, t, r) : void 0
			},
			set: function(e, n, r) {
				var i = r && ze(e);
				return x(e, n, r ? C(e, t, r, "border-box" === Z.css(e, "boxSizing", !1, i), i) : 0)
			}
		}
	}), Z.cssHooks.marginRight = S(Y.reliableMarginRight, function(e, t) {
		return t ? Z.swap(e, {
			display: "inline-block"
		}, w, [e, "marginRight"]) : void 0
	}), Z.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(e, t) {
		Z.cssHooks[e + t] = {
			expand: function(n) {
				for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Se[r] + t] = o[r] || o[r - 2] || o[0];
				return i
			}
		}, Ve.test(e) || (Z.cssHooks[e + t].set = x)
	}), Z.fn.extend({
		css: function(e, t) {
			return ve(this, function(e, t, n) {
				var r, i, o = {},
					a = 0;
				if (Z.isArray(t)) {
					for (r = ze(e), i = t.length; i > a; a++) o[t[a]] = Z.css(e, t[a], !1, r);
					return o
				}
				return void 0 !== n ? Z.style(e, t, n) : Z.css(e, t)
			}, e, t, arguments.length > 1)
		},
		show: function() {
			return k(this, !0)
		},
		hide: function() {
			return k(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Pe(this) ? Z(this).show() : Z(this).hide()
			})
		}
	}), Z.Tween = T, T.prototype = {
		constructor: T,
		init: function(e, t, n, r, i, o) {
			this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Z.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var e = T.propHooks[this.prop];
			return e && e.get ? e.get(this) : T.propHooks._default.get(this)
		},
		run: function(e) {
			var t, n = T.propHooks[this.prop];
			return this.options.duration ? this.pos = t = Z.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : T.propHooks._default.set(this), this
		}
	}, T.prototype.init.prototype = T.prototype, T.propHooks = {
		_default: {
			get: function(e) {
				var t;
				return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = Z.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
			},
			set: function(e) {
				Z.fx.step[e.prop] ? Z.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[Z.cssProps[e.prop]] || Z.cssHooks[e.prop]) ? Z.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
			}
		}
	}, T.propHooks.scrollTop = T.propHooks.scrollLeft = {
		set: function(e) {
			e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
		}
	}, Z.easing = {
		linear: function(e) {
			return e
		},
		swing: function(e) {
			return .5 - Math.cos(e * Math.PI) / 2
		}
	}, Z.fx = T.prototype.init, Z.fx.step = {};
	var Ye, Qe, Ke = /^(?:toggle|show|hide)$/,
		Ze = new RegExp("^(?:([+-])=|)(" + we + ")([a-z%]*)$", "i"),
		et = /queueHooks$/,
		tt = [R],
		nt = {
			"*": [function(e, t) {
				var n = this.createTween(e, t),
					r = n.cur(),
					i = Ze.exec(t),
					o = i && i[3] || (Z.cssNumber[e] ? "" : "px"),
					a = (Z.cssNumber[e] || "px" !== o && +r) && Ze.exec(Z.css(n.elem, e)),
					s = 1,
					l = 20;
				if (a && a[3] !== o) {
					o = o || a[3], i = i || [], a = +r || 1;
					do s = s || ".5", a /= s, Z.style(n.elem, e, a + o);
					while (s !== (s = n.cur() / r) && 1 !== s && --l)
				}
				return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
			}]
		};
	Z.Animation = Z.extend(D, {
		tweener: function(e, t) {
			Z.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
			for (var n, r = 0, i = e.length; i > r; r++) n = e[r], nt[n] = nt[n] || [], nt[n].unshift(t)
		},
		prefilter: function(e, t) {
			t ? tt.unshift(e) : tt.push(e)
		}
	}), Z.speed = function(e, t, n) {
		var r = e && "object" == typeof e ? Z.extend({}, e) : {
			complete: n || !n && t || Z.isFunction(e) && e,
			duration: e,
			easing: n && t || t && !Z.isFunction(t) && t
		};
		return r.duration = Z.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in Z.fx.speeds ? Z.fx.speeds[r.duration] : Z.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
			Z.isFunction(r.old) && r.old.call(this), r.queue && Z.dequeue(this, r.queue)
		}, r
	}, Z.fn.extend({
		fadeTo: function(e, t, n, r) {
			return this.filter(Pe).css("opacity", 0).show().end().animate({
				opacity: t
			}, e, n, r)
		},
		animate: function(e, t, n, r) {
			var i = Z.isEmptyObject(e),
				o = Z.speed(t, n, r),
				a = function() {
					var t = D(this, Z.extend({}, e), o);
					(i || me.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(e, t, n) {
			var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
			return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function() {
				var t = !0,
					i = null != e && e + "queueHooks",
					o = Z.timers,
					a = me.get(this);
				if (i) a[i] && a[i].stop && r(a[i]);
				else for (i in a) a[i] && a[i].stop && et.test(i) && r(a[i]);
				for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
				(t || !n) && Z.dequeue(this, e)
			})
		},
		finish: function(e) {
			return e !== !1 && (e = e || "fx"), this.each(function() {
				var t, n = me.get(this),
					r = n[e + "queue"],
					i = n[e + "queueHooks"],
					o = Z.timers,
					a = r ? r.length : 0;
				for (n.finish = !0, Z.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
				delete n.finish
			})
		}
	}), Z.each(["toggle", "show", "hide"], function(e, t) {
		var n = Z.fn[t];
		Z.fn[t] = function(e, r, i) {
			return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(L(t, !0), e, r, i)
		}
	}), Z.each({
		slideDown: L("show"),
		slideUp: L("hide"),
		slideToggle: L("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(e, t) {
		Z.fn[e] = function(e, n, r) {
			return this.animate(t, e, n, r)
		}
	}), Z.timers = [], Z.fx.tick = function() {
		var e, t = 0,
			n = Z.timers;
		for (Ye = Z.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
		n.length || Z.fx.stop(), Ye = void 0
	}, Z.fx.timer = function(e) {
		Z.timers.push(e), e() ? Z.fx.start() : Z.timers.pop()
	}, Z.fx.interval = 13, Z.fx.start = function() {
		Qe || (Qe = setInterval(Z.fx.tick, Z.fx.interval))
	}, Z.fx.stop = function() {
		clearInterval(Qe), Qe = null
	}, Z.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, Z.fn.delay = function(e, t) {
		return e = Z.fx ? Z.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
			var r = setTimeout(t, e);
			n.stop = function() {
				clearTimeout(r)
			}
		})
	}, function() {
		var e = Q.createElement("input"),
			t = Q.createElement("select"),
			n = t.appendChild(Q.createElement("option"));
		e.type = "checkbox", Y.checkOn = "" !== e.value, Y.optSelected = n.selected, t.disabled = !0, Y.optDisabled = !n.disabled, e = Q.createElement("input"), e.value = "t", e.type = "radio", Y.radioValue = "t" === e.value
	}();
	var rt, it, ot = Z.expr.attrHandle;
	Z.fn.extend({
		attr: function(e, t) {
			return ve(this, Z.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Z.removeAttr(this, e)
			})
		}
	}), Z.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			return e && 3 !== o && 8 !== o && 2 !== o ? typeof e.getAttribute === Ce ? Z.prop(e, t, n) : (1 === o && Z.isXMLDoc(e) || (t = t.toLowerCase(), r = Z.attrHooks[t] || (Z.expr.match.bool.test(t) ? it : rt)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = Z.find.attr(e, t), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void Z.removeAttr(e, t)) : void 0
		},
		removeAttr: function(e, t) {
			var n, r, i = 0,
				o = t && t.match(fe);
			if (o && 1 === e.nodeType) for (; n = o[i++];) r = Z.propFix[n] || n, Z.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if (!Y.radioValue && "radio" === t && Z.nodeName(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		}
	}), it = {
		set: function(e, t, n) {
			return t === !1 ? Z.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Z.each(Z.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = ot[t] || Z.find.attr;
		ot[t] = function(e, t, r) {
			var i, o;
			return r || (o = ot[t], ot[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, ot[t] = o), i
		}
	});
	var at = /^(?:input|select|textarea|button)$/i;
	Z.fn.extend({
		prop: function(e, t) {
			return ve(this, Z.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Z.propFix[e] || e]
			})
		}
	}), Z.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},
		prop: function(e, t, n) {
			var r, i, o, a = e.nodeType;
			return e && 3 !== a && 8 !== a && 2 !== a ? (o = 1 !== a || !Z.isXMLDoc(e), o && (t = Z.propFix[t] || t, i = Z.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]) : void 0
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					return e.hasAttribute("tabindex") || at.test(e.nodeName) || e.href ? e.tabIndex : -1
				}
			}
		}
	}), Y.optSelected || (Z.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		}
	}), Z.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Z.propFix[this.toLowerCase()] = this
	});
	var st = /[\t\r\n\f]/g;
	Z.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s = "string" == typeof e && e,
				l = 0,
				u = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).addClass(e.call(this, t, this.className))
			});
			if (s) for (t = (e || "").match(fe) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : " ")) {
				for (o = 0; i = t[o++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
				a = Z.trim(r), n.className !== a && (n.className = a)
			}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				u = this.length;
			if (Z.isFunction(e)) return this.each(function(t) {
				Z(this).removeClass(e.call(this, t, this.className))
			});
			if (s) for (t = (e || "").match(fe) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(st, " ") : "")) {
				for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
				a = e ? Z.trim(r) : "", n.className !== a && (n.className = a)
			}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e;
			return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(Z.isFunction(e) ?
			function(n) {
				Z(this).toggleClass(e.call(this, n, this.className, t), t)
			} : function() {
				if ("string" === n) for (var t, r = 0, i = Z(this), o = e.match(fe) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else(n === Ce || "boolean" === n) && (this.className && me.set(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : me.get(this, "__className__") || "")
			})
		},
		hasClass: function(e) {
			for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(st, " ").indexOf(t) >= 0) return !0;
			return !1
		}
	});
	var lt = /\r/g;
	Z.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0];
			return arguments.length ? (r = Z.isFunction(e), this.each(function(n) {
				var i;
				1 === this.nodeType && (i = r ? e.call(this, n, Z(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Z.isArray(i) && (i = Z.map(i, function(e) {
					return null == e ? "" : e + ""
				})), t = Z.valHooks[this.type] || Z.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
			})) : i ? (t = Z.valHooks[i.type] || Z.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(lt, "") : null == n ? "" : n)) : void 0
		}
	}), Z.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Z.find.attr(e, "value");
					return null != t ? t : Z.trim(Z.text(e))
				}
			},
			select: {
				get: function(e) {
					for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (n = r[l], !(!n.selected && l !== i || (Y.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && Z.nodeName(n.parentNode, "optgroup"))) {
						if (t = Z(n).val(), o) return t;
						a.push(t)
					}
					return a
				},
				set: function(e, t) {
					for (var n, r, i = e.options, o = Z.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Z.inArray(r.value, o) >= 0) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Z.each(["radio", "checkbox"], function() {
		Z.valHooks[this] = {
			set: function(e, t) {
				return Z.isArray(t) ? e.checked = Z.inArray(Z(e).val(), t) >= 0 : void 0
			}
		}, Y.checkOn || (Z.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
		Z.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	}), Z.fn.extend({
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		},
		bind: function(e, t, n) {
			return this.on(e, null, t, n)
		},
		unbind: function(e, t) {
			return this.off(e, null, t)
		},
		delegate: function(e, t, n, r) {
			return this.on(t, e, n, r)
		},
		undelegate: function(e, t, n) {
			return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
		}
	});
	var ut = Z.now(),
		ct = /\?/;
	Z.parseJSON = function(e) {
		return JSON.parse(e + "")
	}, Z.parseXML = function(e) {
		var t, n;
		if (!e || "string" != typeof e) return null;
		try {
			n = new DOMParser, t = n.parseFromString(e, "text/xml")
		} catch (r) {
			t = void 0
		}
		return (!t || t.getElementsByTagName("parsererror").length) && Z.error("Invalid XML: " + e), t
	};
	var dt = /#.*$/,
		ht = /([?&])_=[^&]*/,
		ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		gt = /^(?:GET|HEAD)$/,
		vt = /^\/\//,
		mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		bt = {},
		yt = {},
		_t = "*/".concat("*"),
		wt = e.location.href,
		St = mt.exec(wt.toLowerCase()) || [];
	Z.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: wt,
			type: "GET",
			isLocal: pt.test(St[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": _t,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": Z.parseJSON,
				"text xml": Z.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? M(M(e, Z.ajaxSettings), t) : M(Z.ajaxSettings, e)
		},
		ajaxPrefilter: N(bt),
		ajaxTransport: N(yt),
		ajax: function(e, t) {
			function n(e, t, n, a) {
				var l, c, m, b, _, S = t;
				2 !== y && (y = 2, s && clearTimeout(s), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (b = j(d, w, n)), b = B(d, b, w, l), l ? (d.ifModified && (_ = w.getResponseHeader("Last-Modified"), _ && (Z.lastModified[i] = _), _ = w.getResponseHeader("etag"), _ && (Z.etag[i] = _)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, c = b.data, m = b.error, l = !m)) : (m = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || S) + "", l ? p.resolveWith(h, [c, S, w]) : p.rejectWith(h, [w, S, m]), w.statusCode(v), v = void 0, u && f.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? c : m]), g.fireWith(h, [w, S]), u && (f.trigger("ajaxComplete", [w, d]), --Z.active || Z.event.trigger("ajaxStop")))
			}
			"object" == typeof e && (t = e, e = void 0), t = t || {};
			var r, i, o, a, s, l, u, c, d = Z.ajaxSetup({}, t),
				h = d.context || d,
				f = d.context && (h.nodeType || h.jquery) ? Z(h) : Z.event,
				p = Z.Deferred(),
				g = Z.Callbacks("once memory"),
				v = d.statusCode || {},
				m = {},
				b = {},
				y = 0,
				_ = "canceled",
				w = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if (2 === y) {
							if (!a) for (a = {}; t = ft.exec(o);) a[t[1].toLowerCase()] = t[2];
							t = a[e.toLowerCase()]
						}
						return null == t ? null : t
					},
					getAllResponseHeaders: function() {
						return 2 === y ? o : null
					},
					setRequestHeader: function(e, t) {
						var n = e.toLowerCase();
						return y || (e = b[n] = b[n] || e, m[e] = t), this
					},
					overrideMimeType: function(e) {
						return y || (d.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if (e) if (2 > y) for (t in e) v[t] = [v[t], e[t]];
						else w.always(e[w.status]);
						return this
					},
					abort: function(e) {
						var t = e || _;
						return r && r.abort(t), n(0, t), this
					}
				};
			if (p.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || wt) + "").replace(dt, "").replace(vt, St[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = Z.trim(d.dataType || "*").toLowerCase().match(fe) || [""], null == d.crossDomain && (l = mt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === St[1] && l[2] === St[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (St[3] || ("http:" === St[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = Z.param(d.data, d.traditional)), F(bt, d, t, w), 2 === y) return w;
			u = Z.event && d.global, u && 0 === Z.active++ && Z.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !gt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (ct.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = ht.test(i) ? i.replace(ht, "$1_=" + ut++) : i + (ct.test(i) ? "&" : "?") + "_=" + ut++)), d.ifModified && (Z.lastModified[i] && w.setRequestHeader("If-Modified-Since", Z.lastModified[i]), Z.etag[i] && w.setRequestHeader("If-None-Match", Z.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _t + "; q=0.01" : "") : d.accepts["*"]);
			for (c in d.headers) w.setRequestHeader(c, d.headers[c]);
			if (d.beforeSend && (d.beforeSend.call(h, w, d) === !1 || 2 === y)) return w.abort();
			_ = "abort";
			for (c in {
				success: 1,
				error: 1,
				complete: 1
			}) w[c](d[c]);
			if (r = F(yt, d, t, w)) {
				w.readyState = 1, u && f.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function() {
					w.abort("timeout")
				}, d.timeout));
				try {
					y = 1, r.send(m, n)
				} catch (S) {
					if (!(2 > y)) throw S;
					n(-1, S)
				}
			} else n(-1, "No Transport");
			return w
		},
		getJSON: function(e, t, n) {
			return Z.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Z.get(e, void 0, t, "script")
		}
	}), Z.each(["get", "post"], function(e, t) {
		Z[t] = function(e, n, r, i) {
			return Z.isFunction(n) && (i = i || r, r = n, n = void 0), Z.ajax({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			})
		}
	}), Z._evalUrl = function(e) {
		return Z.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			"throws": !0
		})
	}, Z.fn.extend({
		wrapAll: function(e) {
			var t;
			return Z.isFunction(e) ? this.each(function(t) {
				Z(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = Z(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this)
		},
		wrapInner: function(e) {
			return this.each(Z.isFunction(e) ?
			function(t) {
				Z(this).wrapInner(e.call(this, t))
			} : function() {
				var t = Z(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = Z.isFunction(e);
			return this.each(function(n) {
				Z(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				Z.nodeName(this, "body") || Z(this).replaceWith(this.childNodes)
			}).end()
		}
	}), Z.expr.filters.hidden = function(e) {
		return e.offsetWidth <= 0 && e.offsetHeight <= 0
	}, Z.expr.filters.visible = function(e) {
		return !Z.expr.filters.hidden(e)
	};
	var Pt = /%20/g,
		xt = /\[\]$/,
		Ct = /\r?\n/g,
		At = /^(?:submit|button|image|reset|file)$/i,
		kt = /^(?:input|select|textarea|keygen)/i;
	Z.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				t = Z.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
			};
		if (void 0 === t && (t = Z.ajaxSettings && Z.ajaxSettings.traditional), Z.isArray(e) || e.jquery && !Z.isPlainObject(e)) Z.each(e, function() {
			i(this.name, this.value)
		});
		else for (n in e) q(n, e[n], t, i);
		return r.join("&").replace(Pt, "+")
	}, Z.fn.extend({
		serialize: function() {
			return Z.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Z.prop(this, "elements");
				return e ? Z.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Z(this).is(":disabled") && kt.test(this.nodeName) && !At.test(e) && (this.checked || !xe.test(e))
			}).map(function(e, t) {
				var n = Z(this).val();
				return null == n ? null : Z.isArray(n) ? Z.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Ct, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Ct, "\r\n")
				}
			}).get()
		}
	}), Z.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (e) {}
	};
	var Tt = 0,
		Et = {},
		Lt = {
			0: 200,
			1223: 204
		},
		It = Z.ajaxSettings.xhr();
	e.attachEvent && e.attachEvent("onunload", function() {
		for (var e in Et) Et[e]()
	}), Y.cors = !! It && "withCredentials" in It, Y.ajax = It = !! It, Z.ajaxTransport(function(e) {
		var t;
		return Y.cors || It && !e.crossDomain ? {
			send: function(n, r) {
				var i, o = e.xhr(),
					a = ++Tt;
				if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) o[i] = e.xhrFields[i];
				e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
				for (i in n) o.setRequestHeader(i, n[i]);
				t = function(e) {
					return function() {
						t && (delete Et[a], t = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Lt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
							text: o.responseText
						} : void 0, o.getAllResponseHeaders()))
					}
				}, o.onload = t(), o.onerror = t("error"), t = Et[a] = t("abort");
				try {
					o.send(e.hasContent && e.data || null)
				} catch (s) {
					if (t) throw s
				}
			},
			abort: function() {
				t && t()
			}
		} : void 0
	}), Z.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(e) {
				return Z.globalEval(e), e
			}
		}
	}), Z.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Z.ajaxTransport("script", function(e) {
		if (e.crossDomain) {
			var t, n;
			return {
				send: function(r, i) {
					t = Z("<script>").prop({
						async: !0,
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), Q.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Rt = [],
		Ot = /(=)\?(?=&|$)|\?\?/;
	Z.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Rt.pop() || Z.expando + "_" + ut++;
			return this[e] = !0, e
		}
	}), Z.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (Ot.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = Z.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ot, "$1" + i) : t.jsonp !== !1 && (t.url += (ct.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || Z.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Rt.push(i)), a && Z.isFunction(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), Z.parseHTML = function(e, t, n) {
		if (!e || "string" != typeof e) return null;
		"boolean" == typeof t && (n = t, t = !1), t = t || Q;
		var r = ae.exec(e),
			i = !n && [];
		return r ? [t.createElement(r[1])] : (r = Z.buildFragment([e], t, i), i && i.length && Z(i).remove(), Z.merge([], r.childNodes))
	};
	var Dt = Z.fn.load;
	Z.fn.load = function(e, t, n) {
		if ("string" != typeof e && Dt) return Dt.apply(this, arguments);
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s >= 0 && (r = Z.trim(e.slice(s)), e = e.slice(0, s)), Z.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Z.ajax({
			url: e,
			type: i,
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? Z("<div>").append(Z.parseHTML(e)).find(r) : e)
		}).complete(n &&
		function(e, t) {
			a.each(n, o || [e.responseText, t, e])
		}), this
	}, Z.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Z.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Z.expr.filters.animated = function(e) {
		return Z.grep(Z.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Nt = e.document.documentElement;
	Z.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, l, u, c = Z.css(e, "position"),
				d = Z(e),
				h = {};
			"static" === c && (e.style.position = "relative"), s = d.offset(), o = Z.css(e, "top"), l = Z.css(e, "left"), u = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, u ? (r = d.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), Z.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + i), "using" in t ? t.using.call(e, h) : d.css(h)
		}
	}, Z.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				Z.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0],
				i = {
					top: 0,
					left: 0
				},
				o = r && r.ownerDocument;
			return o ? (t = o.documentElement, Z.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (i = r.getBoundingClientRect()), n = V(o), {
				top: i.top + n.pageYOffset - t.clientTop,
				left: i.left + n.pageXOffset - t.clientLeft
			}) : i) : void 0
		},
		position: function() {
			if (this[0]) {
				var e, t, n = this[0],
					r = {
						top: 0,
						left: 0
					};
				return "fixed" === Z.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), Z.nodeName(e[0], "html") || (r = e.offset()), r.top += Z.css(e[0], "borderTopWidth", !0), r.left += Z.css(e[0], "borderLeftWidth", !0)), {
					top: t.top - r.top - Z.css(n, "marginTop", !0),
					left: t.left - r.left - Z.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var e = this.offsetParent || Nt; e && !Z.nodeName(e, "html") && "static" === Z.css(e, "position");) e = e.offsetParent;
				return e || Nt
			})
		}
	}), Z.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(t, n) {
		var r = "pageYOffset" === n;
		Z.fn[t] = function(i) {
			return ve(this, function(t, i, o) {
				var a = V(t);
				return void 0 === o ? a ? a[n] : t[i] : void(a ? a.scrollTo(r ? e.pageXOffset : o, r ? o : e.pageYOffset) : t[i] = o)
			}, t, i, arguments.length, null)
		}
	}), Z.each(["top", "left"], function(e, t) {
		Z.cssHooks[t] = S(Y.pixelPosition, function(e, n) {
			return n ? (n = w(e, t), Ue.test(n) ? Z(e).position()[t] + "px" : n) : void 0
		})
	}), Z.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Z.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Z.fn[r] = function(r, i) {
				var o = arguments.length && (n || "boolean" != typeof r),
					a = n || (r === !0 || i === !0 ? "margin" : "border");
				return ve(this, function(t, n, r) {
					var i;
					return Z.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? Z.css(t, n, a) : Z.style(t, n, r, a)
				}, t, o ? r : void 0, o, null)
			}
		})
	}), Z.fn.size = function() {
		return this.length
	}, Z.fn.andSelf = Z.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Z
	});
	var Ft = e.jQuery,
		Mt = e.$;
	return Z.noConflict = function(t) {
		return e.$ === Z && (e.$ = Mt), t && e.jQuery === Z && (e.jQuery = Ft), Z
	}, typeof t === Ce && (e.jQuery = e.$ = Z), Z
}), document.webL10n = function(e, t, n) {
	function r() {
		return t.querySelectorAll('link[type="application/l10n"]')
	}
	function i() {
		var e = t.querySelector('script[type="application/l10n"]');
		return e ? JSON.parse(e.innerHTML) : null
	}
	function o(e) {
		return e ? e.querySelectorAll("*[data-l10n-id]") : []
	}
	function a(e) {
		if (!e) return {};
		var t = e.getAttribute("data-l10n-id"),
			n = e.getAttribute("data-l10n-args"),
			r = {};
		if (n) try {
			r = JSON.parse(n)
		} catch (i) {
			console.warn("could not parse arguments for #" + t)
		}
		return {
			id: t,
			args: r
		}
	}
	function s(e) {
		var n = t.createEvent("Event");
		n.initEvent("localized", !0, !1), n.language = e, t.dispatchEvent(n)
	}
	function l(e, t, n) {
		t = t ||
		function(e) {}, n = n ||
		function() {};
		var r = new XMLHttpRequest;
		r.open("GET", e, C), r.overrideMimeType && r.overrideMimeType("text/plain; charset=utf-8"), r.onreadystatechange = function() {
			4 == r.readyState && (200 == r.status || 0 === r.status ? t(r.responseText) : n())
		}, r.onerror = n, r.ontimeout = n;
		try {
			r.send(null)
		} catch (i) {
			n()
		}
	}
	function u(e, t, n, r) {
		function i(e) {
			return e.lastIndexOf("\\") < 0 ? e : e.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
		}
		function o(e, n) {
			function r(e, n, r) {
				function l() {
					for (;;) {
						if (!p.length) return void r();
						var e = p.shift();
						if (!c.test(e)) {
							if (n) {
								if (b = d.exec(e)) {
									g = b[1].toLowerCase(), m = "*" !== g && g !== t && g !== v;
									continue
								}
								if (m) continue;
								if (b = h.exec(e)) return void o(a + b[1], l)
							}
							var u = e.match(f);
							u && 3 == u.length && (s[u[1]] = i(u[2]))
						}
					}
				}
				var p = e.replace(u, "").split(/[\r\n]+/),
					g = "*",
					v = t.split("-", 1)[0],
					m = !1,
					b = "";
				l()
			}
			function o(e, t) {
				l(e, function(e) {
					r(e, !1, t)
				}, function() {
					console.warn(e + " not found."), t()
				})
			}
			var s = {},
				u = /^\s*|\s*$/,
				c = /^\s*#|^\s*$/,
				d = /^\s*\[(.*)\]\s*$/,
				h = /^\s*@import\s+url\((.*)\)\s*$/i,
				f = /^([^=\s]*)\s*=\s*(.+)$/;
			r(e, !0, function() {
				n(s)
			})
		}
		var a = e.replace(/[^\/]*$/, "") || "./";
		l(e, function(e) {
			_ += e, o(e, function(e) {
				for (var t in e) {
					var r, i, o = t.lastIndexOf(".");
					o > 0 ? (r = t.substring(0, o), i = t.substr(o + 1)) : (r = t, i = w), y[r] || (y[r] = {}), y[r][i] = e[t]
				}
				n && n()
			})
		}, r)
	}
	function c(e, t) {
		function n(e) {
			var t = e.href;
			this.load = function(e, n) {
				u(t, e, n, function() {
					console.warn(t + " not found."), console.warn('"' + e + '" resource not found'), S = "", n()
				})
			}
		}
		e && (e = e.toLowerCase()), t = t ||
		function() {}, d(), S = e;
		var o = r(),
			a = o.length;
		if (0 === a) {
			var l = i();
			if (l && l.locales && l.default_locale) {
				if (console.log("using the embedded JSON directory, early way out"), y = l.locales[e], !y) {
					var c = l.default_locale.toLowerCase();
					for (var h in l.locales) {
						if (h = h.toLowerCase(), h === e) {
							y = l.locales[e];
							break
						}
						h === c && (y = l.locales[c])
					}
				}
				t()
			} else console.log("no resource to load, early way out");
			return s(e), void(x = "complete")
		}
		var f = null,
			p = 0;
		f = function() {
			p++, p >= a && (t(), s(e), x = "complete")
		};
		for (var g = 0; a > g; g++) {
			var v = new n(o[g]);
			v.load(e, f)
		}
	}
	function d() {
		y = {}, _ = "", S = ""
	}
	function h(e) {
		function t(e, t) {
			return -1 !== t.indexOf(e)
		}
		function n(e, t, n) {
			return e >= t && n >= e
		}
		var r = {
			af: 3,
			ak: 4,
			am: 4,
			ar: 1,
			asa: 3,
			az: 0,
			be: 11,
			bem: 3,
			bez: 3,
			bg: 3,
			bh: 4,
			bm: 0,
			bn: 3,
			bo: 0,
			br: 20,
			brx: 3,
			bs: 11,
			ca: 3,
			cgg: 3,
			chr: 3,
			cs: 12,
			cy: 17,
			da: 3,
			de: 3,
			dv: 3,
			dz: 0,
			ee: 3,
			el: 3,
			en: 3,
			eo: 3,
			es: 3,
			et: 3,
			eu: 3,
			fa: 0,
			ff: 5,
			fi: 3,
			fil: 4,
			fo: 3,
			fr: 5,
			fur: 3,
			fy: 3,
			ga: 8,
			gd: 24,
			gl: 3,
			gsw: 3,
			gu: 3,
			guw: 4,
			gv: 23,
			ha: 3,
			haw: 3,
			he: 2,
			hi: 4,
			hr: 11,
			hu: 0,
			id: 0,
			ig: 0,
			ii: 0,
			is: 3,
			it: 3,
			iu: 7,
			ja: 0,
			jmc: 3,
			jv: 0,
			ka: 0,
			kab: 5,
			kaj: 3,
			kcg: 3,
			kde: 0,
			kea: 0,
			kk: 3,
			kl: 3,
			km: 0,
			kn: 0,
			ko: 0,
			ksb: 3,
			ksh: 21,
			ku: 3,
			kw: 7,
			lag: 18,
			lb: 3,
			lg: 3,
			ln: 4,
			lo: 0,
			lt: 10,
			lv: 6,
			mas: 3,
			mg: 4,
			mk: 16,
			ml: 3,
			mn: 3,
			mo: 9,
			mr: 3,
			ms: 0,
			mt: 15,
			my: 0,
			nah: 3,
			naq: 7,
			nb: 3,
			nd: 3,
			ne: 3,
			nl: 3,
			nn: 3,
			no: 3,
			nr: 3,
			nso: 4,
			ny: 3,
			nyn: 3,
			om: 3,
			or: 3,
			pa: 3,
			pap: 3,
			pl: 13,
			ps: 3,
			pt: 3,
			rm: 3,
			ro: 9,
			rof: 3,
			ru: 11,
			rwk: 3,
			sah: 0,
			saq: 3,
			se: 7,
			seh: 3,
			ses: 0,
			sg: 0,
			sh: 11,
			shi: 19,
			sk: 12,
			sl: 14,
			sma: 7,
			smi: 7,
			smj: 7,
			smn: 7,
			sms: 7,
			sn: 3,
			so: 3,
			sq: 3,
			sr: 11,
			ss: 3,
			ssy: 3,
			st: 3,
			sv: 3,
			sw: 3,
			syr: 3,
			ta: 3,
			te: 3,
			teo: 3,
			th: 0,
			ti: 4,
			tig: 3,
			tk: 3,
			tl: 4,
			tn: 3,
			to: 0,
			tr: 0,
			ts: 3,
			tzm: 22,
			uk: 11,
			ur: 3,
			ve: 3,
			vi: 0,
			vun: 3,
			wa: 4,
			wae: 3,
			wo: 0,
			xh: 3,
			xog: 3,
			yo: 0,
			zh: 0,
			zu: 3
		},
			i = {
				0: function(e) {
					return "other"
				},
				1: function(e) {
					return n(e % 100, 3, 10) ? "few" : 0 === e ? "zero" : n(e % 100, 11, 99) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
				},
				2: function(e) {
					return 0 !== e && e % 10 === 0 ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
				},
				3: function(e) {
					return 1 == e ? "one" : "other"
				},
				4: function(e) {
					return n(e, 0, 1) ? "one" : "other"
				},
				5: function(e) {
					return n(e, 0, 2) && 2 != e ? "one" : "other"
				},
				6: function(e) {
					return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
				},
				7: function(e) {
					return 2 == e ? "two" : 1 == e ? "one" : "other"
				},
				8: function(e) {
					return n(e, 3, 6) ? "few" : n(e, 7, 10) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
				},
				9: function(e) {
					return 0 === e || 1 != e && n(e % 100, 1, 19) ? "few" : 1 == e ? "one" : "other"
				},
				10: function(e) {
					return n(e % 10, 2, 9) && !n(e % 100, 11, 19) ? "few" : e % 10 != 1 || n(e % 100, 11, 19) ? "other" : "one"
				},
				11: function(e) {
					return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : e % 10 === 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14) ? "many" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
				},
				12: function(e) {
					return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other"
				},
				13: function(e) {
					return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : 1 != e && n(e % 10, 0, 1) || n(e % 10, 5, 9) || n(e % 100, 12, 14) ? "many" : 1 == e ? "one" : "other"
				},
				14: function(e) {
					return n(e % 100, 3, 4) ? "few" : e % 100 == 2 ? "two" : e % 100 == 1 ? "one" : "other"
				},
				15: function(e) {
					return 0 === e || n(e % 100, 2, 10) ? "few" : n(e % 100, 11, 19) ? "many" : 1 == e ? "one" : "other"
				},
				16: function(e) {
					return e % 10 == 1 && 11 != e ? "one" : "other"
				},
				17: function(e) {
					return 3 == e ? "few" : 0 === e ? "zero" : 6 == e ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
				},
				18: function(e) {
					return 0 === e ? "zero" : n(e, 0, 2) && 0 !== e && 2 != e ? "one" : "other"
				},
				19: function(e) {
					return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other"
				},
				20: function(e) {
					return !n(e % 10, 3, 4) && e % 10 != 9 || n(e % 100, 10, 19) || n(e % 100, 70, 79) || n(e % 100, 90, 99) ? e % 1e6 === 0 && 0 !== e ? "many" : e % 10 != 2 || t(e % 100, [12, 72, 92]) ? e % 10 != 1 || t(e % 100, [11, 71, 91]) ? "other" : "one" : "two" : "few"
				},
				21: function(e) {
					return 0 === e ? "zero" : 1 == e ? "one" : "other"
				},
				22: function(e) {
					return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other"
				},
				23: function(e) {
					return n(e % 10, 1, 2) || e % 20 === 0 ? "one" : "other"
				},
				24: function(e) {
					return n(e, 3, 10) || n(e, 13, 19) ? "few" : t(e, [2, 12]) ? "two" : t(e, [1, 11]) ? "one" : "other"
				}
			},
			o = r[e.replace(/-.*$/, "")];
		return o in i ? i[o] : (console.warn("plural form unknown for [" + e + "]"), function() {
			return "other"
		})
	}
	function f(e, t, n) {
		var r = y[e];
		if (!r) {
			if (console.warn("#" + e + " is undefined."), !n) return null;
			r = n
		}
		var i = {};
		for (var o in r) {
			var a = r[o];
			a = p(a, t, e, o), a = g(a, t, e), i[o] = a
		}
		return i
	}
	function p(e, t, n, r) {
		var i = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,
			o = i.exec(e);
		if (!o || !o.length) return e;
		var a, s = o[1],
			l = o[2];
		if (t && l in t ? a = t[l] : l in y && (a = y[l]), s in P) {
			var u = P[s];
			e = u(e, a, n, r)
		}
		return e
	}
	function g(e, t, n) {
		var r = /\{\{\s*(.+?)\s*\}\}/g;
		return e.replace(r, function(e, r) {
			return t && r in t ? t[r] : r in y ? y[r] : (console.log("argument {{" + r + "}} for #" + n + " is undefined."), e)
		})
	}
	function v(e) {
		var n = a(e);
		if (n.id) {
			var r = f(n.id, n.args);
			if (!r) return void console.warn("#" + n.id + " is undefined.");
			if (r[w]) {
				if (0 === m(e)) e[w] = r[w];
				else {
					for (var i = e.childNodes, o = !1, s = 0, l = i.length; l > s; s++) 3 === i[s].nodeType && /\S/.test(i[s].nodeValue) && (o ? i[s].nodeValue = "" : (i[s].nodeValue = r[w], o = !0));
					if (!o) {
						var u = t.createTextNode(r[w]);
						e.insertBefore(u, e.firstChild)
					}
				}
				delete r[w]
			}
			for (var c in r) e[c] = r[c]
		}
	}
	function m(e) {
		if (e.children) return e.children.length;
		if ("undefined" != typeof e.childElementCount) return e.childElementCount;
		for (var t = 0, n = 0; n < e.childNodes.length; n++) t += 1 === e.nodeType ? 1 : 0;
		return t
	}
	function b(e) {
		e = e || t.documentElement;
		for (var n = o(e), r = n.length, i = 0; r > i; i++) v(n[i]);
		v(e)
	}
	var y = {},
		_ = "",
		w = "textContent",
		S = "",
		P = {},
		x = "loading",
		C = !0;
	return P.plural = function(e, t, n, r) {
		var i = parseFloat(t);
		if (isNaN(i)) return e;
		if (r != w) return e;
		P._pluralRules || (P._pluralRules = h(S));
		var o = "[" + P._pluralRules(i) + "]";
		return 0 === i && n + "[zero]" in y ? e = y[n + "[zero]"][r] : 1 == i && n + "[one]" in y ? e = y[n + "[one]"][r] : 2 == i && n + "[two]" in y ? e = y[n + "[two]"][r] : n + o in y ? e = y[n + o][r] : n + "[other]" in y && (e = y[n + "[other]"][r]), e
	}, {
		get: function(e, t, n) {
			var r = e.lastIndexOf("."),
				i = w;
			r > 0 && (i = e.substr(r + 1), e = e.substring(0, r));
			var o;
			n && (o = {}, o[i] = n);
			var a = f(e, t, o);
			return a && i in a ? a[i] : "{{" + e + "}}"
		},
		getData: function() {
			return y
		},
		getText: function() {
			return _
		},
		getLanguage: function() {
			return S
		},
		setLanguage: function(e, t) {
			c(e, function() {
				t && t()
			})
		},
		getDirection: function() {
			var e = ["ar", "he", "fa", "ps", "ur"],
				t = S.split("-", 1)[0];
			return e.indexOf(t) >= 0 ? "rtl" : "ltr"
		},
		translate: b,
		getReadyState: function() {
			return x
		},
		ready: function(n) {
			n && ("complete" == x || "interactive" == x ? e.setTimeout(function() {
				n()
			}) : t.addEventListener && t.addEventListener("localized", function r() {
				t.removeEventListener("localized", r), n()
			}))
		}
	}
}(window, document), function(e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("pdfjs-dist/build/pdf", [], t) : "object" == typeof exports ? exports["pdfjs-dist/build/pdf"] = t() : e["pdfjs-dist/build/pdf"] = e.pdfjsDistBuildPdf = t()
}(this, function() {
	return function(e) {
		function t(r) {
			if (n[r]) return n[r].exports;
			var i = n[r] = {
				i: r,
				l: !1,
				exports: {}
			};
			return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
		}
		var n = {};
		return t.m = e, t.c = n, t.d = function(e, n, r) {
			t.o(e, n) || Object.defineProperty(e, n, {
				configurable: !1,
				enumerable: !0,
				get: r
			})
		}, t.n = function(e) {
			var n = e && e.__esModule ?
			function() {
				return e["default"]
			} : function() {
				return e
			};
			return t.d(n, "a", n), n
		}, t.o = function(e, t) {
			return Object.prototype.hasOwnProperty.call(e, t)
		}, t.p = "", t(t.s = 63)
	}([function(e, t, n) {
		"use strict";

		function r(e) {
			ae = e
		}
		function i() {
			return ae
		}
		function o(e) {
			ae >= re.infos && console.log("Info: " + e)
		}
		function a(e) {
			ae >= re.warnings && console.log("Warning: " + e)
		}
		function s(e) {
			console.log("Deprecated API usage: " + e)
		}
		function l(e) {
			throw new Error(e)
		}
		function u(e, t) {
			e || l(t)
		}
		function c(e, t) {
			try {
				var n = new URL(e);
				if (!n.origin || "null" === n.origin) return !1
			} catch (r) {
				return !1
			}
			var i = new URL(t, n);
			return n.origin === i.origin
		}
		function d(e) {
			if (!e) return !1;
			switch (e.protocol) {
			case "http:":
			case "https:":
			case "ftp:":
			case "mailto:":
			case "tel:":
				return !0;
			default:
				return !1
			}
		}
		function h(e, t) {
			if (!e) return null;
			try {
				var n = t ? new URL(e, t) : new URL(e);
				if (d(n)) return n
			} catch (r) {}
			return null
		}
		function f(e, t, n) {
			return Object.defineProperty(e, t, {
				value: n,
				enumerable: !0,
				configurable: !0,
				writable: !1
			}), n
		}
		function p(e) {
			var t;
			return function() {
				return e && (t = Object.create(null), e(t), e = null), t
			}
		}
		function g(e) {
			return "string" != typeof e ? (a("The argument for removeNullCharacters must be a string."), e) : e.replace(ye, "")
		}
		function v(e) {
			u(null !== e && "object" === ("undefined" == typeof e ? "undefined" : H(e)) && void 0 !== e.length, "Invalid argument for bytesToString");
			var t = e.length,
				n = 8192;
			if (n > t) return String.fromCharCode.apply(null, e);
			for (var r = [], i = 0; t > i; i += n) {
				var o = Math.min(i + n, t),
					a = e.subarray(i, o);
				r.push(String.fromCharCode.apply(null, a))
			}
			return r.join("")
		}
		function m(e) {
			u("string" == typeof e, "Invalid argument for stringToBytes");
			for (var t = e.length, n = new Uint8Array(t), r = 0; t > r; ++r) n[r] = 255 & e.charCodeAt(r);
			return n
		}
		function b(e) {
			return void 0 !== e.length ? e.length : (u(void 0 !== e.byteLength), e.byteLength)
		}
		function y(e) {
			if (1 === e.length && e[0] instanceof Uint8Array) return e[0];
			var t, n, r, i = 0,
				o = e.length;
			for (t = 0; o > t; t++) n = e[t], r = b(n), i += r;
			var a = 0,
				s = new Uint8Array(i);
			for (t = 0; o > t; t++) n = e[t], n instanceof Uint8Array || (n = "string" == typeof n ? m(n) : new Uint8Array(n)), r = n.byteLength, s.set(n, a), a += r;
			return s
		}
		function _(e) {
			return String.fromCharCode(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e)
		}
		function w(e) {
			for (var t = 1, n = 0; e > t;) t <<= 1, n++;
			return n
		}
		function S(e, t) {
			return e[t] << 24 >> 24
		}
		function P(e, t) {
			return e[t] << 8 | e[t + 1]
		}
		function x(e, t) {
			return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
		}
		function C() {
			var e = new Uint8Array(4);
			e[0] = 1;
			var t = new Uint32Array(e.buffer, 0, 1);
			return 1 === t[0]
		}
		function A() {
			try {
				return new Function(""), !0
			} catch (e) {
				return !1
			}
		}
		function k(e) {
			var t, n = e.length,
				r = [];
			if ("þ" === e[0] && "ÿ" === e[1]) for (t = 2; n > t; t += 2) r.push(String.fromCharCode(e.charCodeAt(t) << 8 | e.charCodeAt(t + 1)));
			else for (t = 0; n > t; ++t) {
				var i = Pe[e.charCodeAt(t)];
				r.push(i ? String.fromCharCode(i) : e.charAt(t))
			}
			return r.join("")
		}
		function T(e) {
			return decodeURIComponent(escape(e))
		}
		function E(e) {
			return unescape(encodeURIComponent(e))
		}
		function L(e) {
			for (var t in e) return !1;
			return !0
		}
		function I(e) {
			return "boolean" == typeof e
		}
		function R(e) {
			return "number" == typeof e
		}
		function O(e) {
			return "string" == typeof e
		}
		function D(e) {
			return "object" === ("undefined" == typeof e ? "undefined" : H(e)) && null !== e && void 0 !== e.byteLength
		}
		function N(e) {
			return 32 === e || 9 === e || 13 === e || 10 === e
		}
		function F() {
			return "object" === ("undefined" == typeof process ? "undefined" : H(process)) && process + "" == "[object process]"
		}
		function M() {
			var e = {};
			return e.promise = new Promise(function(t, n) {
				e.resolve = t, e.reject = n
			}), e
		}
		function j(e, t) {
			var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
			return e ? new Promise(function(r, i) {
				r(e.apply(n, t))
			}) : Promise.resolve(void 0)
		}
		function B(e) {
			if ("object" !== ("undefined" == typeof e ? "undefined" : H(e))) return e;
			switch (e.name) {
			case "AbortException":
				return new be(e.message);
			case "MissingPDFException":
				return new he(e.message);
			case "UnexpectedResponseException":
				return new fe(e.message, e.status);
			default:
				return new ce(e.message, e.details)
			}
		}
		function q(e) {
			return !(e instanceof Error) || e instanceof be || e instanceof he || e instanceof fe || e instanceof ce ? e : new ce(e.message, e.toString())
		}
		function V(e, t, n) {
			t ? e.resolve() : e.reject(n)
		}
		function U(e) {
			return Promise.resolve(e)["catch"](function() {})
		}
		function z(e, t, n) {
			var r = this;
			this.sourceName = e, this.targetName = t, this.comObj = n, this.callbackId = 1, this.streamId = 1, this.postMessageTransfers = !0, this.streamSinks = Object.create(null), this.streamControllers = Object.create(null);
			var i = this.callbacksCapabilities = Object.create(null),
				o = this.actionHandler = Object.create(null);
			this._onComObjOnMessage = function(e) {
				var t = e.data;
				if (t.targetName === r.sourceName) if (t.stream) r._processStreamMessage(t);
				else if (t.isReply) {
					var a = t.callbackId;
					if (!(t.callbackId in i)) throw new Error("Cannot resolve callback " + a);
					var s = i[a];
					delete i[a], "error" in t ? s.reject(B(t.error)) : s.resolve(t.data)
				} else {
					if (!(t.action in o)) throw new Error("Unknown action from worker: " + t.action);
					var l = o[t.action];
					if (t.callbackId) {
						var u = r.sourceName,
							c = t.sourceName;
						Promise.resolve().then(function() {
							return l[0].call(l[1], t.data)
						}).then(function(e) {
							n.postMessage({
								sourceName: u,
								targetName: c,
								isReply: !0,
								callbackId: t.callbackId,
								data: e
							})
						}, function(e) {
							n.postMessage({
								sourceName: u,
								targetName: c,
								isReply: !0,
								callbackId: t.callbackId,
								error: q(e)
							})
						})
					} else t.streamId ? r._createStreamSink(t) : l[0].call(l[1], t.data)
				}
			}, n.addEventListener("message", this._onComObjOnMessage)
		}
		function W(e, t, n) {
			var r = new Image;
			r.onload = function() {
				n.resolve(e, r)
			}, r.onerror = function() {
				n.resolve(e, null), a("Error during JPEG image loading")
			}, r.src = t
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.unreachable = t.warn = t.utf8StringToString = t.stringToUTF8String = t.stringToPDFString = t.stringToBytes = t.string32 = t.shadow = t.setVerbosityLevel = t.ReadableStream = t.removeNullCharacters = t.readUint32 = t.readUint16 = t.readInt8 = t.log2 = t.loadJpegStream = t.isEvalSupported = t.isLittleEndian = t.createValidAbsoluteUrl = t.isSameOrigin = t.isNodeJS = t.isSpace = t.isString = t.isNum = t.isEmptyObj = t.isBool = t.isArrayBuffer = t.info = t.getVerbosityLevel = t.getLookupTableFactory = t.deprecated = t.createObjectURL = t.createPromiseCapability = t.createBlob = t.bytesToString = t.assert = t.arraysToBytes = t.arrayByteLength = t.FormatError = t.XRefParseException = t.Util = t.UnknownErrorException = t.UnexpectedResponseException = t.TextRenderingMode = t.StreamType = t.StatTimer = t.PasswordResponses = t.PasswordException = t.PageViewport = t.NotImplementedException = t.NativeImageDecoding = t.MissingPDFException = t.MissingDataException = t.MessageHandler = t.InvalidPDFException = t.AbortException = t.CMapCompressionType = t.ImageKind = t.FontType = t.AnnotationType = t.AnnotationFlag = t.AnnotationFieldFlag = t.AnnotationBorderStyleType = t.UNSUPPORTED_FEATURES = t.VERBOSITY_LEVELS = t.OPS = t.IDENTITY_MATRIX = t.FONT_IDENTITY_MATRIX = void 0;
		var H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		n(64);
		var G = n(111),
			$ = [.001, 0, 0, .001, 0, 0],
			X = {
				NONE: "none",
				DECODE: "decode",
				DISPLAY: "display"
			},
			J = {
				FILL: 0,
				STROKE: 1,
				FILL_STROKE: 2,
				INVISIBLE: 3,
				FILL_ADD_TO_PATH: 4,
				STROKE_ADD_TO_PATH: 5,
				FILL_STROKE_ADD_TO_PATH: 6,
				ADD_TO_PATH: 7,
				FILL_STROKE_MASK: 3,
				ADD_TO_PATH_FLAG: 4
			},
			Y = {
				GRAYSCALE_1BPP: 1,
				RGB_24BPP: 2,
				RGBA_32BPP: 3
			},
			Q = {
				TEXT: 1,
				LINK: 2,
				FREETEXT: 3,
				LINE: 4,
				SQUARE: 5,
				CIRCLE: 6,
				POLYGON: 7,
				POLYLINE: 8,
				HIGHLIGHT: 9,
				UNDERLINE: 10,
				SQUIGGLY: 11,
				STRIKEOUT: 12,
				STAMP: 13,
				CARET: 14,
				INK: 15,
				POPUP: 16,
				FILEATTACHMENT: 17,
				SOUND: 18,
				MOVIE: 19,
				WIDGET: 20,
				SCREEN: 21,
				PRINTERMARK: 22,
				TRAPNET: 23,
				WATERMARK: 24,
				THREED: 25,
				REDACT: 26
			},
			K = {
				INVISIBLE: 1,
				HIDDEN: 2,
				PRINT: 4,
				NOZOOM: 8,
				NOROTATE: 16,
				NOVIEW: 32,
				READONLY: 64,
				LOCKED: 128,
				TOGGLENOVIEW: 256,
				LOCKEDCONTENTS: 512
			},
			Z = {
				READONLY: 1,
				REQUIRED: 2,
				NOEXPORT: 4,
				MULTILINE: 4096,
				PASSWORD: 8192,
				NOTOGGLETOOFF: 16384,
				RADIO: 32768,
				PUSHBUTTON: 65536,
				COMBO: 131072,
				EDIT: 262144,
				SORT: 524288,
				FILESELECT: 1048576,
				MULTISELECT: 2097152,
				DONOTSPELLCHECK: 4194304,
				DONOTSCROLL: 8388608,
				COMB: 16777216,
				RICHTEXT: 33554432,
				RADIOSINUNISON: 33554432,
				COMMITONSELCHANGE: 67108864
			},
			ee = {
				SOLID: 1,
				DASHED: 2,
				BEVELED: 3,
				INSET: 4,
				UNDERLINE: 5
			},
			te = {
				UNKNOWN: 0,
				FLATE: 1,
				LZW: 2,
				DCT: 3,
				JPX: 4,
				JBIG: 5,
				A85: 6,
				AHX: 7,
				CCF: 8,
				RL: 9
			},
			ne = {
				UNKNOWN: 0,
				TYPE1: 1,
				TYPE1C: 2,
				CIDFONTTYPE0: 3,
				CIDFONTTYPE0C: 4,
				TRUETYPE: 5,
				CIDFONTTYPE2: 6,
				TYPE3: 7,
				OPENTYPE: 8,
				TYPE0: 9,
				MMTYPE1: 10
			},
			re = {
				errors: 0,
				warnings: 1,
				infos: 5
			},
			ie = {
				NONE: 0,
				BINARY: 1,
				STREAM: 2
			},
			oe = {
				dependency: 1,
				setLineWidth: 2,
				setLineCap: 3,
				setLineJoin: 4,
				setMiterLimit: 5,
				setDash: 6,
				setRenderingIntent: 7,
				setFlatness: 8,
				setGState: 9,
				save: 10,
				restore: 11,
				transform: 12,
				moveTo: 13,
				lineTo: 14,
				curveTo: 15,
				curveTo2: 16,
				curveTo3: 17,
				closePath: 18,
				rectangle: 19,
				stroke: 20,
				closeStroke: 21,
				fill: 22,
				eoFill: 23,
				fillStroke: 24,
				eoFillStroke: 25,
				closeFillStroke: 26,
				closeEOFillStroke: 27,
				endPath: 28,
				clip: 29,
				eoClip: 30,
				beginText: 31,
				endText: 32,
				setCharSpacing: 33,
				setWordSpacing: 34,
				setHScale: 35,
				setLeading: 36,
				setFont: 37,
				setTextRenderingMode: 38,
				setTextRise: 39,
				moveText: 40,
				setLeadingMoveText: 41,
				setTextMatrix: 42,
				nextLine: 43,
				showText: 44,
				showSpacedText: 45,
				nextLineShowText: 46,
				nextLineSetSpacingShowText: 47,
				setCharWidth: 48,
				setCharWidthAndBounds: 49,
				setStrokeColorSpace: 50,
				setFillColorSpace: 51,
				setStrokeColor: 52,
				setStrokeColorN: 53,
				setFillColor: 54,
				setFillColorN: 55,
				setStrokeGray: 56,
				setFillGray: 57,
				setStrokeRGBColor: 58,
				setFillRGBColor: 59,
				setStrokeCMYKColor: 60,
				setFillCMYKColor: 61,
				shadingFill: 62,
				beginInlineImage: 63,
				beginImageData: 64,
				endInlineImage: 65,
				paintXObject: 66,
				markPoint: 67,
				markPointProps: 68,
				beginMarkedContent: 69,
				beginMarkedContentProps: 70,
				endMarkedContent: 71,
				beginCompat: 72,
				endCompat: 73,
				paintFormXObjectBegin: 74,
				paintFormXObjectEnd: 75,
				beginGroup: 76,
				endGroup: 77,
				beginAnnotations: 78,
				endAnnotations: 79,
				beginAnnotation: 80,
				endAnnotation: 81,
				paintJpegXObject: 82,
				paintImageMaskXObject: 83,
				paintImageMaskXObjectGroup: 84,
				paintImageXObject: 85,
				paintInlineImageXObject: 86,
				paintInlineImageXObjectGroup: 87,
				paintImageXObjectRepeat: 88,
				paintImageMaskXObjectRepeat: 89,
				paintSolidColorImageMask: 90,
				constructPath: 91
			},
			ae = re.warnings,
			se = {
				unknown: "unknown",
				forms: "forms",
				javaScript: "javaScript",
				smask: "smask",
				shadingPattern: "shadingPattern",
				font: "font"
			},
			le = {
				NEED_PASSWORD: 1,
				INCORRECT_PASSWORD: 2
			},
			ue = function() {
				function e(e, t) {
					this.name = "PasswordException", this.message = e, this.code = t
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			ce = function() {
				function e(e, t) {
					this.name = "UnknownErrorException", this.message = e, this.details = t
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			de = function() {
				function e(e) {
					this.name = "InvalidPDFException", this.message = e
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			he = function() {
				function e(e) {
					this.name = "MissingPDFException", this.message = e
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			fe = function() {
				function e(e, t) {
					this.name = "UnexpectedResponseException", this.message = e, this.status = t
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			pe = function() {
				function e(e) {
					this.message = e
				}
				return e.prototype = new Error, e.prototype.name = "NotImplementedException", e.constructor = e, e
			}(),
			ge = function() {
				function e(e, t) {
					this.begin = e, this.end = t, this.message = "Missing data [" + e + ", " + t + ")"
				}
				return e.prototype = new Error, e.prototype.name = "MissingDataException", e.constructor = e, e
			}(),
			ve = function() {
				function e(e) {
					this.message = e
				}
				return e.prototype = new Error, e.prototype.name = "XRefParseException", e.constructor = e, e
			}(),
			me = function() {
				function e(e) {
					this.message = e
				}
				return e.prototype = new Error, e.prototype.name = "FormatError", e.constructor = e, e
			}(),
			be = function() {
				function e(e) {
					this.name = "AbortException", this.message = e
				}
				return e.prototype = new Error, e.constructor = e, e
			}(),
			ye = / /g,
			_e = [1, 0, 0, 1, 0, 0],
			we = function() {
				function e() {}
				var t = ["rgb(", 0, ",", 0, ",", 0, ")"];
				e.makeCssRgb = function(e, n, r) {
					return t[1] = e, t[3] = n, t[5] = r, t.join("")
				}, e.transform = function(e, t) {
					return [e[0] * t[0] + e[2] * t[1], e[1] * t[0] + e[3] * t[1], e[0] * t[2] + e[2] * t[3], e[1] * t[2] + e[3] * t[3], e[0] * t[4] + e[2] * t[5] + e[4], e[1] * t[4] + e[3] * t[5] + e[5]]
				}, e.applyTransform = function(e, t) {
					var n = e[0] * t[0] + e[1] * t[2] + t[4],
						r = e[0] * t[1] + e[1] * t[3] + t[5];
					return [n, r]
				}, e.applyInverseTransform = function(e, t) {
					var n = t[0] * t[3] - t[1] * t[2],
						r = (e[0] * t[3] - e[1] * t[2] + t[2] * t[5] - t[4] * t[3]) / n,
						i = (-e[0] * t[1] + e[1] * t[0] + t[4] * t[1] - t[5] * t[0]) / n;
					return [r, i]
				}, e.getAxialAlignedBoundingBox = function(t, n) {
					var r = e.applyTransform(t, n),
						i = e.applyTransform(t.slice(2, 4), n),
						o = e.applyTransform([t[0], t[3]], n),
						a = e.applyTransform([t[2], t[1]], n);
					return [Math.min(r[0], i[0], o[0], a[0]), Math.min(r[1], i[1], o[1], a[1]), Math.max(r[0], i[0], o[0], a[0]), Math.max(r[1], i[1], o[1], a[1])]
				}, e.inverseTransform = function(e) {
					var t = e[0] * e[3] - e[1] * e[2];
					return [e[3] / t, -e[1] / t, -e[2] / t, e[0] / t, (e[2] * e[5] - e[4] * e[3]) / t, (e[4] * e[1] - e[5] * e[0]) / t]
				}, e.apply3dTransform = function(e, t) {
					return [e[0] * t[0] + e[1] * t[1] + e[2] * t[2], e[3] * t[0] + e[4] * t[1] + e[5] * t[2], e[6] * t[0] + e[7] * t[1] + e[8] * t[2]]
				}, e.singularValueDecompose2dScale = function(e) {
					var t = [e[0], e[2], e[1], e[3]],
						n = e[0] * t[0] + e[1] * t[2],
						r = e[0] * t[1] + e[1] * t[3],
						i = e[2] * t[0] + e[3] * t[2],
						o = e[2] * t[1] + e[3] * t[3],
						a = (n + o) / 2,
						s = Math.sqrt((n + o) * (n + o) - 4 * (n * o - i * r)) / 2,
						l = a + s || 1,
						u = a - s || 1;
					return [Math.sqrt(l), Math.sqrt(u)]
				}, e.normalizeRect = function(e) {
					var t = e.slice(0);
					return e[0] > e[2] && (t[0] = e[2], t[2] = e[0]), e[1] > e[3] && (t[1] = e[3], t[3] = e[1]), t
				}, e.intersect = function(t, n) {
					function r(e, t) {
						return e - t
					}
					var i = [t[0], t[2], n[0], n[2]].sort(r),
						o = [t[1], t[3], n[1], n[3]].sort(r),
						a = [];
					return t = e.normalizeRect(t), n = e.normalizeRect(n), i[0] === t[0] && i[1] === n[0] || i[0] === n[0] && i[1] === t[0] ? (a[0] = i[1], a[2] = i[2], o[0] === t[1] && o[1] === n[1] || o[0] === n[1] && o[1] === t[1] ? (a[1] = o[1], a[3] = o[2], a) : !1) : !1
				};
				var n = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM", "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
				return e.toRoman = function(e, t) {
					u(Number.isInteger(e) && e > 0, "The number should be a positive integer.");
					for (var r, i = []; e >= 1e3;) e -= 1e3, i.push("M");
					r = e / 100 | 0, e %= 100, i.push(n[r]), r = e / 10 | 0, e %= 10, i.push(n[10 + r]), i.push(n[20 + e]);
					var o = i.join("");
					return t ? o.toLowerCase() : o
				}, e.appendToArray = function(e, t) {
					Array.prototype.push.apply(e, t)
				}, e.prependToArray = function(e, t) {
					Array.prototype.unshift.apply(e, t)
				}, e.extendObj = function(e, t) {
					for (var n in t) e[n] = t[n]
				}, e.getInheritableProperty = function(e, t, n) {
					for (; e && !e.has(t);) e = e.get("Parent");
					return e ? n ? e.getArray(t) : e.get(t) : null
				}, e.inherit = function(e, t, n) {
					e.prototype = Object.create(t.prototype), e.prototype.constructor = e;
					for (var r in n) e.prototype[r] = n[r]
				}, e.loadScript = function(e, t) {
					var n = document.createElement("script"),
						r = !1;
					n.setAttribute("src", e), t && (n.onload = function() {
						r || t(), r = !0
					}), document.getElementsByTagName("head")[0].appendChild(n)
				}, e
			}(),
			Se = function() {
				function e(e, t, n, r, i, o) {
					this.viewBox = e, this.scale = t, this.rotation = n, this.offsetX = r, this.offsetY = i;
					var a, s, l, u, c = (e[2] + e[0]) / 2,
						d = (e[3] + e[1]) / 2;
					switch (n %= 360, n = 0 > n ? n + 360 : n) {
					case 180:
						a = -1, s = 0, l = 0, u = 1;
						break;
					case 90:
						a = 0, s = 1, l = 1, u = 0;
						break;
					case 270:
						a = 0, s = -1, l = -1, u = 0;
						break;
					default:
						a = 1, s = 0, l = 0, u = -1
					}
					o && (l = -l, u = -u);
					var h, f, p, g;
					0 === a ? (h = Math.abs(d - e[1]) * t + r, f = Math.abs(c - e[0]) * t + i, p = Math.abs(e[3] - e[1]) * t, g = Math.abs(e[2] - e[0]) * t) : (h = Math.abs(c - e[0]) * t + r, f = Math.abs(d - e[1]) * t + i, p = Math.abs(e[2] - e[0]) * t, g = Math.abs(e[3] - e[1]) * t), this.transform = [a * t, s * t, l * t, u * t, h - a * t * c - l * t * d, f - s * t * c - u * t * d], this.width = p, this.height = g, this.fontScale = t
				}
				return e.prototype = {
					clone: function(t) {
						t = t || {};
						var n = "scale" in t ? t.scale : this.scale,
							r = "rotation" in t ? t.rotation : this.rotation;
						return new e(this.viewBox.slice(), n, r, this.offsetX, this.offsetY, t.dontFlip)
					},
					convertToViewportPoint: function(e, t) {
						return we.applyTransform([e, t], this.transform)
					},
					convertToViewportRectangle: function(e) {
						var t = we.applyTransform([e[0], e[1]], this.transform),
							n = we.applyTransform([e[2], e[3]], this.transform);
						return [t[0], t[1], n[0], n[1]]
					},
					convertToPdfPoint: function(e, t) {
						return we.applyInverseTransform([e, t], this.transform)
					}
				}, e
			}(),
			Pe = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 728, 711, 710, 729, 733, 731, 730, 732, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8226, 8224, 8225, 8230, 8212, 8211, 402, 8260, 8249, 8250, 8722, 8240, 8222, 8220, 8221, 8216, 8217, 8218, 8482, 64257, 64258, 321, 338, 352, 376, 381, 305, 322, 339, 353, 382, 0, 8364],
			xe = function() {
				function e(e, t, n) {
					for (; e.length < n;) e += t;
					return e
				}
				function t() {
					this.started = Object.create(null), this.times = [], this.enabled = !0
				}
				return t.prototype = {
					time: function(e) {
						this.enabled && (e in this.started && a("Timer is already running for " + e), this.started[e] = Date.now())
					},
					timeEnd: function(e) {
						this.enabled && (e in this.started || a("Timer has not been started for " + e), this.times.push({
							name: e,
							start: this.started[e],
							end: Date.now()
						}), delete this.started[e])
					},
					toString: function() {
						var t, n, r = this.times,
							i = "",
							o = 0;
						for (t = 0, n = r.length; n > t; ++t) {
							var a = r[t].name;
							a.length > o && (o = a.length)
						}
						for (t = 0, n = r.length; n > t; ++t) {
							var s = r[t],
								l = s.end - s.start;
							i += e(s.name, " ", o) + " " + l + "ms\n"
						}
						return i
					}
				}, t
			}(),
			Ce = function(e, t) {
				if ("undefined" != typeof Blob) return new Blob([e], {
					type: t
				});
				throw new Error('The "Blob" constructor is not supported.')
			},
			Ae = function() {
				var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
				return function(t, n) {
					var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
					if (!r && URL.createObjectURL) {
						var i = Ce(t, n);
						return URL.createObjectURL(i)
					}
					for (var o = "data:" + n + ";base64,", a = 0, s = t.length; s > a; a += 3) {
						var l = 255 & t[a],
							u = 255 & t[a + 1],
							c = 255 & t[a + 2],
							d = l >> 2,
							h = (3 & l) << 4 | u >> 4,
							f = s > a + 1 ? (15 & u) << 2 | c >> 6 : 64,
							p = s > a + 2 ? 63 & c : 64;
						o += e[d] + e[h] + e[f] + e[p]
					}
					return o
				}
			}();
		z.prototype = {
			on: function(e, t, n) {
				var r = this.actionHandler;
				if (r[e]) throw new Error('There is already an actionName called "' + e + '"');
				r[e] = [t, n]
			},
			send: function(e, t, n) {
				var r = {
					sourceName: this.sourceName,
					targetName: this.targetName,
					action: e,
					data: t
				};
				this.postMessage(r, n)
			},
			sendWithPromise: function(e, t, n) {
				var r = this.callbackId++,
					i = {
						sourceName: this.sourceName,
						targetName: this.targetName,
						action: e,
						data: t,
						callbackId: r
					},
					o = M();
				this.callbacksCapabilities[r] = o;
				try {
					this.postMessage(i, n)
				} catch (a) {
					o.reject(a)
				}
				return o.promise
			},
			sendWithStream: function(e, t, n, r) {
				var i = this,
					o = this.streamId++,
					a = this.sourceName,
					s = this.targetName;
				return new G.ReadableStream({
					start: function(n) {
						var r = M();
						return i.streamControllers[o] = {
							controller: n,
							startCall: r,
							isClosed: !1
						}, i.postMessage({
							sourceName: a,
							targetName: s,
							action: e,
							streamId: o,
							data: t,
							desiredSize: n.desiredSize
						}), r.promise
					},
					pull: function(e) {
						var t = M();
						return i.streamControllers[o].pullCall = t, i.postMessage({
							sourceName: a,
							targetName: s,
							stream: "pull",
							streamId: o,
							desiredSize: e.desiredSize
						}), t.promise
					},
					cancel: function(e) {
						var t = M();
						return i.streamControllers[o].cancelCall = t, i.streamControllers[o].isClosed = !0, i.postMessage({
							sourceName: a,
							targetName: s,
							stream: "cancel",
							reason: e,
							streamId: o
						}), t.promise
					}
				}, n)
			},
			_createStreamSink: function(e) {
				var t = this,
					n = this,
					r = this.actionHandler[e.action],
					i = e.streamId,
					o = e.desiredSize,
					a = this.sourceName,
					s = e.sourceName,
					l = M(),
					u = function(e) {
						var n = e.stream,
							r = e.chunk,
							o = e.transfers,
							l = e.success,
							u = e.reason;
						t.postMessage({
							sourceName: a,
							targetName: s,
							stream: n,
							streamId: i,
							chunk: r,
							success: l,
							reason: u
						}, o)
					},
					c = {
						enqueue: function(e) {
							var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
								n = arguments[2];
							if (!this.isCancelled) {
								var r = this.desiredSize;
								this.desiredSize -= t, r > 0 && this.desiredSize <= 0 && (this.sinkCapability = M(), this.ready = this.sinkCapability.promise), u({
									stream: "enqueue",
									chunk: e,
									transfers: n
								})
							}
						},
						close: function() {
							this.isCancelled || (this.isCancelled = !0, u({
								stream: "close"
							}), delete n.streamSinks[i])
						},
						error: function(e) {
							this.isCancelled || (this.isCancelled = !0, u({
								stream: "error",
								reason: e
							}))
						},
						sinkCapability: l,
						onPull: null,
						onCancel: null,
						isCancelled: !1,
						desiredSize: o,
						ready: null
					};
				c.sinkCapability.resolve(), c.ready = c.sinkCapability.promise, this.streamSinks[i] = c, j(r[0], [e.data, c], r[1]).then(function() {
					u({
						stream: "start_complete",
						success: !0
					})
				}, function(e) {
					u({
						stream: "start_complete",
						success: !1,
						reason: e
					})
				})
			},
			_processStreamMessage: function(e) {
				var t = this,
					n = this.sourceName,
					r = e.sourceName,
					i = e.streamId,
					o = function(e) {
						var o = e.stream,
							a = e.success,
							s = e.reason;
						t.comObj.postMessage({
							sourceName: n,
							targetName: r,
							stream: o,
							success: a,
							streamId: i,
							reason: s
						})
					},
					a = function() {
						Promise.all([t.streamControllers[e.streamId].startCall, t.streamControllers[e.streamId].pullCall, t.streamControllers[e.streamId].cancelCall].map(function(e) {
							return e && U(e.promise)
						})).then(function() {
							delete t.streamControllers[e.streamId]
						})
					};
				switch (e.stream) {
				case "start_complete":
					V(this.streamControllers[e.streamId].startCall, e.success, B(e.reason));
					break;
				case "pull_complete":
					V(this.streamControllers[e.streamId].pullCall, e.success, B(e.reason));
					break;
				case "pull":
					if (!this.streamSinks[e.streamId]) {
						o({
							stream: "pull_complete",
							success: !0
						});
						break
					}
					this.streamSinks[e.streamId].desiredSize <= 0 && e.desiredSize > 0 && this.streamSinks[e.streamId].sinkCapability.resolve(), this.streamSinks[e.streamId].desiredSize = e.desiredSize, j(this.streamSinks[e.streamId].onPull).then(function() {
						o({
							stream: "pull_complete",
							success: !0
						})
					}, function(e) {
						o({
							stream: "pull_complete",
							success: !1,
							reason: e
						})
					});
					break;
				case "enqueue":
					u(this.streamControllers[e.streamId], "enqueue should have stream controller"), this.streamControllers[e.streamId].isClosed || this.streamControllers[e.streamId].controller.enqueue(e.chunk);
					break;
				case "close":
					if (u(this.streamControllers[e.streamId], "close should have stream controller"), this.streamControllers[e.streamId].isClosed) break;
					this.streamControllers[e.streamId].isClosed = !0, this.streamControllers[e.streamId].controller.close(), a();
					break;
				case "error":
					u(this.streamControllers[e.streamId], "error should have stream controller"), this.streamControllers[e.streamId].controller.error(B(e.reason)), a();
					break;
				case "cancel_complete":
					V(this.streamControllers[e.streamId].cancelCall, e.success, B(e.reason)), a();
					break;
				case "cancel":
					if (!this.streamSinks[e.streamId]) break;
					j(this.streamSinks[e.streamId].onCancel, [B(e.reason)]).then(function() {
						o({
							stream: "cancel_complete",
							success: !0
						})
					}, function(e) {
						o({
							stream: "cancel_complete",
							success: !1,
							reason: e
						})
					}), this.streamSinks[e.streamId].sinkCapability.reject(B(e.reason)), this.streamSinks[e.streamId].isCancelled = !0, delete this.streamSinks[e.streamId];
					break;
				default:
					throw new Error("Unexpected stream case")
				}
			},
			postMessage: function(e, t) {
				t && this.postMessageTransfers ? this.comObj.postMessage(e, t) : this.comObj.postMessage(e)
			},
			destroy: function() {
				this.comObj.removeEventListener("message", this._onComObjOnMessage)
			}
		}, t.FONT_IDENTITY_MATRIX = $, t.IDENTITY_MATRIX = _e, t.OPS = oe, t.VERBOSITY_LEVELS = re, t.UNSUPPORTED_FEATURES = se, t.AnnotationBorderStyleType = ee, t.AnnotationFieldFlag = Z, t.AnnotationFlag = K, t.AnnotationType = Q, t.FontType = ne, t.ImageKind = Y, t.CMapCompressionType = ie, t.AbortException = be, t.InvalidPDFException = de, t.MessageHandler = z, t.MissingDataException = ge, t.MissingPDFException = he, t.NativeImageDecoding = X, t.NotImplementedException = pe, t.PageViewport = Se, t.PasswordException = ue, t.PasswordResponses = le, t.StatTimer = xe, t.StreamType = te, t.TextRenderingMode = J, t.UnexpectedResponseException = fe, t.UnknownErrorException = ce, t.Util = we, t.XRefParseException = ve, t.FormatError = me, t.arrayByteLength = b, t.arraysToBytes = y, t.assert = u, t.bytesToString = v, t.createBlob = Ce, t.createPromiseCapability = M, t.createObjectURL = Ae, t.deprecated = s, t.getLookupTableFactory = p, t.getVerbosityLevel = i, t.info = o, t.isArrayBuffer = D, t.isBool = I, t.isEmptyObj = L, t.isNum = R, t.isString = O, t.isSpace = N, t.isNodeJS = F, t.isSameOrigin = c, t.createValidAbsoluteUrl = h, t.isLittleEndian = C, t.isEvalSupported = A, t.loadJpegStream = W, t.log2 = w, t.readInt8 = S, t.readUint16 = P, t.readUint32 = x, t.removeNullCharacters = g, t.ReadableStream = G.ReadableStream, t.setVerbosityLevel = r, t.shadow = f, t.string32 = _, t.stringToBytes = m, t.stringToPDFString = k, t.stringToUTF8String = T, t.utf8StringToString = E, t.warn = a, t.unreachable = l
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		e.exports = function(e) {
			return "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? null !== e : "function" == typeof e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(42)("wks"),
			i = n(20),
			o = n(3).Symbol,
			a = "function" == typeof o,
			s = e.exports = function(e) {
				return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
			};
		s.store = r
	}, function(e, t, n) {
		"use strict";
		var r = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = r)
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = n(5),
			o = n(11),
			a = n(9),
			s = n(10),
			l = "prototype",
			u = function c(e, t, n) {
				var u, d, h, f, p = e & c.F,
					g = e & c.G,
					v = e & c.S,
					m = e & c.P,
					b = e & c.B,
					y = g ? r : v ? r[t] || (r[t] = {}) : (r[t] || {})[l],
					_ = g ? i : i[t] || (i[t] = {}),
					w = _[l] || (_[l] = {});
				g && (n = t);
				for (u in n) d = !p && y && void 0 !== y[u], h = (d ? y : n)[u], f = b && d ? s(h, r) : m && "function" == typeof h ? s(Function.call, h) : h, y && a(y, u, h, e & c.U), _[u] != h && o(_, u, f), m && w[u] != h && (w[u] = h)
			};
		r.core = i, u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
	}, function(e, t, n) {
		"use strict";
		var r = e.exports = {
			version: "2.5.1"
		};
		"number" == typeof __e && (__e = r)
	}, function(e, t, n) {
		"use strict";
		var r = n(1);
		e.exports = function(e) {
			if (!r(e)) throw TypeError(e + " is not an object!");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = {}.hasOwnProperty;
		e.exports = function(e, t) {
			return r.call(e, t)
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function o(e, t) {
			var n = t && t.url;
			if (e.href = e.title = n ? (0, c.removeNullCharacters)(n) : "", n) {
				var r = t.target;
				"undefined" == typeof r && (r = s("externalLinkTarget")), e.target = P[r];
				var i = t.rel;
				"undefined" == typeof i && (i = s("externalLinkRel")), e.rel = i
			}
		}
		function a(e) {
			var t = e.indexOf("#"),
				n = e.indexOf("?"),
				r = Math.min(t > 0 ? t : e.length, n > 0 ? n : e.length);
			return e.substring(e.lastIndexOf("/", r) + 1, r)
		}
		function s(e) {
			var t = h["default"].PDFJS;
			switch (e) {
			case "pdfBug":
				return t ? t.pdfBug : !1;
			case "disableAutoFetch":
				return t ? t.disableAutoFetch : !1;
			case "disableStream":
				return t ? t.disableStream : !1;
			case "disableRange":
				return t ? t.disableRange : !1;
			case "disableFontFace":
				return t ? t.disableFontFace : !1;
			case "disableCreateObjectURL":
				return t ? t.disableCreateObjectURL : !1;
			case "disableWebGL":
				return t ? t.disableWebGL : !0;
			case "cMapUrl":
				return t ? t.cMapUrl : null;
			case "cMapPacked":
				return t ? t.cMapPacked : !1;
			case "postMessageTransfers":
				return t ? t.postMessageTransfers : !0;
			case "workerPort":
				return t ? t.workerPort : null;
			case "workerSrc":
				return t ? t.workerSrc : null;
			case "disableWorker":
				return t ? t.disableWorker : !1;
			case "maxImageSize":
				return t ? t.maxImageSize : -1;
			case "imageResourcesPath":
				return t ? t.imageResourcesPath : "";
			case "isEvalSupported":
				return t ? t.isEvalSupported : !0;
			case "externalLinkTarget":
				if (!t) return S.NONE;
				switch (t.externalLinkTarget) {
				case S.NONE:
				case S.SELF:
				case S.BLANK:
				case S.PARENT:
				case S.TOP:
					return t.externalLinkTarget
				}
				return (0, c.warn)("PDFJS.externalLinkTarget is invalid: " + t.externalLinkTarget), t.externalLinkTarget = S.NONE, S.NONE;
			case "externalLinkRel":
				return t ? t.externalLinkRel : f;
			case "enableStats":
				return !(!t || !t.enableStats);
			default:
				throw new Error("Unknown default setting: " + e)
			}
		}
		function l() {
			var e = s("externalLinkTarget");
			switch (e) {
			case S.NONE:
				return !1;
			case S.SELF:
			case S.BLANK:
			case S.PARENT:
			case S.TOP:
				return !0
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.SimpleXMLParser = t.DOMSVGFactory = t.DOMCMapReaderFactory = t.DOMCanvasFactory = t.DEFAULT_LINK_REL = t.getDefaultSetting = t.LinkTarget = t.getFilenameFromUrl = t.isExternalLinkTargetSet = t.addLinkAttributes = t.RenderingCancelledException = t.CustomStyle = void 0;
		var u = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			c = n(0),
			d = n(14),
			h = r(d),
			f = "noopener noreferrer nofollow",
			p = "http://www.w3.org/2000/svg",
			g = function() {
				function e() {
					i(this, e)
				}
				return u(e, [{
					key: "create",
					value: function(e, t) {
						if (0 >= e || 0 >= t) throw new Error("invalid canvas size");
						var n = document.createElement("canvas"),
							r = n.getContext("2d");
						return n.width = e, n.height = t, {
							canvas: n,
							context: r
						}
					}
				}, {
					key: "reset",
					value: function(e, t, n) {
						if (!e.canvas) throw new Error("canvas is not specified");
						if (0 >= t || 0 >= n) throw new Error("invalid canvas size");
						e.canvas.width = t, e.canvas.height = n
					}
				}, {
					key: "destroy",
					value: function(e) {
						if (!e.canvas) throw new Error("canvas is not specified");
						e.canvas.width = 0, e.canvas.height = 0, e.canvas = null, e.context = null
					}
				}]), e
			}(),
			v = function() {
				function e(t) {
					var n = t.baseUrl,
						r = void 0 === n ? null : n,
						o = t.isCompressed,
						a = void 0 === o ? !1 : o;
					i(this, e), this.baseUrl = r, this.isCompressed = a
				}
				return u(e, [{
					key: "fetch",
					value: function(e) {
						var t = this,
							n = e.name;
						return this.baseUrl ? n ? new Promise(function(e, r) {
							var i = t.baseUrl + n + (t.isCompressed ? ".bcmap" : ""),
								o = new XMLHttpRequest;
							o.open("GET", i, !0), t.isCompressed && (o.responseType = "arraybuffer"), o.onreadystatechange = function() {
								if (o.readyState === XMLHttpRequest.DONE) {
									if (200 === o.status || 0 === o.status) {
										var n = void 0;
										if (t.isCompressed && o.response ? n = new Uint8Array(o.response) : !t.isCompressed && o.responseText && (n = (0, c.stringToBytes)(o.responseText)), n) return void e({
											cMapData: n,
											compressionType: t.isCompressed ? c.CMapCompressionType.BINARY : c.CMapCompressionType.NONE
										})
									}
									r(new Error("Unable to load " + (t.isCompressed ? "binary " : "") + "CMap at: " + i))
								}
							}, o.send(null)
						}) : Promise.reject(new Error("CMap name must be specified.")) : Promise.reject(new Error('CMap baseUrl must be specified, see "PDFJS.cMapUrl" (and also "PDFJS.cMapPacked").'))
					}
				}]), e
			}(),
			m = function() {
				function e() {
					i(this, e)
				}
				return u(e, [{
					key: "create",
					value: function(e, t) {
						(0, c.assert)(e > 0 && t > 0, "Invalid SVG dimensions");
						var n = document.createElementNS(p, "svg:svg");
						return n.setAttribute("version", "1.1"), n.setAttribute("width", e + "px"), n.setAttribute("height", t + "px"), n.setAttribute("preserveAspectRatio", "none"), n.setAttribute("viewBox", "0 0 " + e + " " + t), n
					}
				}, {
					key: "createElement",
					value: function(e) {
						return (0, c.assert)("string" == typeof e, "Invalid SVG element type"), document.createElementNS(p, e)
					}
				}]), e
			}(),
			b = function() {
				function e(t, n) {
					i(this, e), this.nodeName = t, this.nodeValue = n, Object.defineProperty(this, "parentNode", {
						value: null,
						writable: !0
					})
				}
				return u(e, [{
					key: "hasChildNodes",
					value: function() {
						return this.childNodes && this.childNodes.length > 0
					}
				}, {
					key: "firstChild",
					get: function() {
						return this.childNodes[0]
					}
				}, {
					key: "nextSibling",
					get: function() {
						var e = this.parentNode.childNodes.indexOf(this);
						return this.parentNode.childNodes[e + 1]
					}
				}, {
					key: "textContent",
					get: function() {
						return this.childNodes ? this.childNodes.map(function(e) {
							return e.textContent
						}).join("") : this.nodeValue || ""
					}
				}]), e
			}(),
			y = function() {
				function e() {
					i(this, e)
				}
				return u(e, [{
					key: "parseFromString",
					value: function(e) {
						var t = this,
							n = [];
						e = e.replace(/<\?[\s\S]*?\?>|<!--[\s\S]*?-->/g, "").trim(), e = e.replace(/<!DOCTYPE[^>\[]+(\[[^\]]+)?[^>]+>/g, "").trim(), e = e.replace(/>([^<][\s\S]*?)</g, function(e, r) {
							var i = n.length,
								o = new b("#text", t._decodeXML(r));
							return n.push(o), 0 === o.textContent.trim().length ? "><" : ">" + i + ",<"
						}), e = e.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, function(e, t) {
							var r = n.length,
								i = new b("#text", t);
							return n.push(i), r + ","
						});
						var r = /<([\w\:]+)((?:[\s\w:=]|'[^']*'|"[^"]*")*)(?:\/>|>([\d,]*)<\/[^>]+>)/g,
							i = void 0;
						do i = n.length, e = e.replace(r, function(e, t, r, i) {
							var o = n.length,
								a = new b(t),
								s = [];
							return i && (i = i.split(","), i.pop(), i.forEach(function(e) {
								var t = n[+e];
								t.parentNode = a, s.push(t)
							})), a.childNodes = s, n.push(a), o + ","
						});
						while (i < n.length);
						return {
							documentElement: n.pop()
						}
					}
				}, {
					key: "_decodeXML",
					value: function(e) {
						return e.indexOf("&") < 0 ? e : e.replace(/&(#(x[0-9a-f]+|\d+)|\w+);/gi, function(e, t, n) {
							if (n) return n = "x" === n[0] ? parseInt(n.substring(1), 16) : +n, String.fromCharCode(n);
							switch (t) {
							case "amp":
								return "&";
							case "lt":
								return "<";
							case "gt":
								return ">";
							case "quot":
								return '"';
							case "apos":
								return "'"
							}
							return "&" + t + ";"
						})
					}
				}]), e
			}(),
			_ = function() {
				function e() {}
				var t = ["ms", "Moz", "Webkit", "O"],
					n = Object.create(null);
				return e.getProp = function(e, r) {
					if (1 === arguments.length && "string" == typeof n[e]) return n[e];
					r = r || document.documentElement;
					var i, o, a = r.style;
					if ("string" == typeof a[e]) return n[e] = e;
					o = e.charAt(0).toUpperCase() + e.slice(1);
					for (var s = 0, l = t.length; l > s; s++) if (i = t[s] + o, "string" == typeof a[i]) return n[e] = i;
					return n[e] = "undefined"
				}, e.setProp = function(e, t, n) {
					var r = this.getProp(e);
					"undefined" !== r && (t.style[r] = n)
				}, e
			}(),
			w = function x() {
				function x(e, t) {
					this.message = e, this.type = t
				}
				return x.prototype = new Error, x.prototype.name = "RenderingCancelledException", x.constructor = x, x
			}(),
			S = {
				NONE: 0,
				SELF: 1,
				BLANK: 2,
				PARENT: 3,
				TOP: 4
			},
			P = ["", "_self", "_blank", "_parent", "_top"];
		t.CustomStyle = _, t.RenderingCancelledException = w, t.addLinkAttributes = o, t.isExternalLinkTargetSet = l, t.getFilenameFromUrl = a, t.LinkTarget = S, t.getDefaultSetting = s, t.DEFAULT_LINK_REL = f, t.DOMCanvasFactory = g, t.DOMCMapReaderFactory = v, t.DOMSVGFactory = m, t.SimpleXMLParser = y
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = n(11),
			o = n(7),
			a = n(20)("src"),
			s = "toString",
			l = Function[s],
			u = ("" + l).split(s);
		n(5).inspectSource = function(e) {
			return l.call(e)
		}, (e.exports = function(e, t, n, s) {
			var l = "function" == typeof n;
			l && (o(n, "name") || i(n, "name", t)), e[t] !== n && (l && (o(n, a) || i(n, a, e[t] ? "" + e[t] : u.join(String(t)))), e === r ? e[t] = n : s ? e[t] ? e[t] = n : i(e, t, n) : (delete e[t], i(e, t, n)))
		})(Function.prototype, s, function() {
			return "function" == typeof this && this[a] || l.call(this)
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(16);
		e.exports = function(e, t, n) {
			if (r(e), void 0 === t) return e;
			switch (n) {
			case 1:
				return function(n) {
					return e.call(t, n)
				};
			case 2:
				return function(n, r) {
					return e.call(t, n, r)
				};
			case 3:
				return function(n, r, i) {
					return e.call(t, n, r, i)
				}
			}
			return function() {
				return e.apply(t, arguments)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(15),
			i = n(25);
		e.exports = n(12) ?
		function(e, t, n) {
			return r.f(e, t, i(1, n))
		} : function(e, t, n) {
			return e[t] = n, e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = !n(13)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			try {
				return !!e()
			} catch (t) {
				return !0
			}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = "undefined" != typeof window && window.Math === Math ? window : "undefined" != typeof global && global.Math === Math ? global : "undefined" != typeof self && self.Math === Math ? self : {}
	}, function(e, t, n) {
		"use strict";
		var r = n(6),
			i = n(39),
			o = n(40),
			a = Object.defineProperty;
		t.f = n(12) ? Object.defineProperty : function(e, t, n) {
			if (r(e), t = o(t, !0), r(n), i) try {
				return a(e, t, n)
			} catch (s) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (e[t] = n.value), e
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			if ("function" != typeof e) throw TypeError(e + " is not a function!");
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(26),
			i = n(27);
		e.exports = function(e) {
			return r(i(e))
		}
	}, function(e, t, n) {
		"use strict";
		var r = {}.toString;
		e.exports = function(e) {
			return r.call(e).slice(8, -1)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = {}
	}, function(e, t, n) {
		"use strict";
		var r = 0,
			i = Math.random();
		e.exports = function(e) {
			return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++r + i).toString(36))
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(68),
			i = n(43);
		e.exports = Object.keys ||
		function(e) {
			return r(e, i)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(15).f,
			i = n(7),
			o = n(2)("toStringTag");
		e.exports = function(e, t, n) {
			e && !i(e = n ? e : e.prototype, o) && r(e, o, {
				configurable: !0,
				value: t
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(10),
			i = n(87),
			o = n(88),
			a = n(6),
			s = n(28),
			l = n(89),
			u = {},
			c = {},
			d = e.exports = function(e, t, n, d, h) {
				var f, p, g, v, m = h ?
				function() {
					return e
				} : l(e), b = r(n, d, t ? 2 : 1), y = 0;
				if ("function" != typeof m) throw TypeError(e + " is not iterable!");
				if (o(m)) {
					for (f = s(e.length); f > y; y++) if (v = t ? b(a(p = e[y])[0], p[1]) : b(e[y]), v === u || v === c) return v
				} else for (g = m.call(e); !(p = g.next()).done;) if (v = i(g, b, p.value, t), v === u || v === c) return v
			};
		d.BREAK = u, d.RETURN = c
	}, function(e, t, n) {
		"use strict";
		var r = n(1),
			i = n(3).document,
			o = r(i) && r(i.createElement);
		e.exports = function(e) {
			return o ? i.createElement(e) : {}
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return {
				enumerable: !(1 & e),
				configurable: !(2 & e),
				writable: !(4 & e),
				value: t
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(18);
		e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
			return "String" == r(e) ? e.split("") : Object(e)
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			if (void 0 == e) throw TypeError("Can't call method on  " + e);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(29),
			i = Math.min;
		e.exports = function(e) {
			return e > 0 ? i(r(e), 9007199254740991) : 0
		}
	}, function(e, t, n) {
		"use strict";
		var r = Math.ceil,
			i = Math.floor;
		e.exports = function(e) {
			return isNaN(e = +e) ? 0 : (e > 0 ? i : r)(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(42)("keys"),
			i = n(20);
		e.exports = function(e) {
			return r[e] || (r[e] = i(e))
		}
	}, function(e, t, n) {
		"use strict";
		t.f = {}.propertyIsEnumerable
	}, function(e, t, n) {
		"use strict";
		var r = n(18),
			i = n(2)("toStringTag"),
			o = "Arguments" == r(function() {
				return arguments
			}()),
			a = function(e, t) {
				try {
					return e[t]
				} catch (n) {}
			};
		e.exports = function(e) {
			var t, n, s;
			return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = a(t = Object(e), i)) ? n : o ? r(t) : "Object" == (s = r(t)) && "function" == typeof t.callee ? "Arguments" : s
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(27);
		e.exports = function(e) {
			return Object(r(e))
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n, r) {
			if (!(e instanceof t) || void 0 !== r && r in e) throw TypeError(n + ": incorrect invocation!");
			return e
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			var t, n;
			this.promise = new e(function(e, r) {
				if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
				t = e, n = r
			}), this.resolve = i(t), this.reject = i(n)
		}
		var i = n(16);
		e.exports.f = function(e) {
			return new r(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(9);
		e.exports = function(e, t, n) {
			for (var i in t) r(e, i, t[i], n);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, i = n(20)("meta"), o = n(1), a = n(7), s = n(15).f, l = 0, u = Object.isExtensible ||
		function() {
			return !0
		}, c = !n(13)(function() {
			return u(Object.preventExtensions({}))
		}), d = function(e) {
			s(e, i, {
				value: {
					i: "O" + ++l,
					w: {}
				}
			})
		}, h = function(e, t) {
			if (!o(e)) return "symbol" == ("undefined" == typeof e ? "undefined" : r(e)) ? e : ("string" == typeof e ? "S" : "P") + e;
			if (!a(e, i)) {
				if (!u(e)) return "F";
				if (!t) return "E";
				d(e)
			}
			return e[i].i
		}, f = function(e, t) {
			if (!a(e, i)) {
				if (!u(e)) return !0;
				if (!t) return !1;
				d(e)
			}
			return e[i].w
		}, p = function(e) {
			return c && g.NEED && u(e) && !a(e, i) && d(e), e
		}, g = e.exports = {
			KEY: i,
			NEED: !1,
			fastKey: h,
			getWeak: f,
			onFreeze: p
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			var t = e.getResponseHeader,
				n = e.isHttp,
				r = e.rangeChunkSize,
				i = e.disableRange;
			(0, a.assert)(r > 0);
			var o = {
				allowRangeRequests: !1,
				suggestedLength: void 0
			};
			if (i || !n) return o;
			if ("bytes" !== t("Accept-Ranges")) return o;
			var s = t("Content-Encoding") || "identity";
			if ("identity" !== s) return o;
			var l = parseInt(t("Content-Length"), 10);
			return Number.isInteger(l) ? (o.suggestedLength = l, 2 * r >= l ? o : (o.allowRangeRequests = !0, o)) : o
		}
		function i(e, t) {
			return 404 === e || 0 === e && /^file:/.test(t) ? new a.MissingPDFException('Missing PDF "' + t + '".') : new a.UnexpectedResponseException("Unexpected server response (" + e + ') while retrieving PDF "' + t + '".', e)
		}
		function o(e) {
			return 200 === e || 206 === e
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.validateResponseStatus = t.validateRangeRequestCapabilities = t.createResponseStatusError = void 0;
		var a = n(0);
		t.createResponseStatusError = i, t.validateRangeRequestCapabilities = r, t.validateResponseStatus = o
	}, function(e, t, n) {
		"use strict";
		e.exports = !n(12) && !n(13)(function() {
			return 7 != Object.defineProperty(n(24)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(1);
		e.exports = function(e, t) {
			if (!r(e)) return e;
			var n, i;
			if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
			if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
			if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(17),
			i = n(28),
			o = n(69);
		e.exports = function(e) {
			return function(t, n, a) {
				var s, l = r(t),
					u = i(l.length),
					c = o(a, u);
				if (e && n != n) {
					for (; u > c;) if (s = l[c++], s != s) return !0
				} else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
				return !e && -1
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = "__core-js_shared__",
			o = r[i] || (r[i] = {});
		e.exports = function(e) {
			return o[e] || (o[e] = {})
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(e, t, n) {
		"use strict";
		var r = n(2)("unscopables"),
			i = Array.prototype;
		void 0 == i[r] && n(11)(i, r, {}), e.exports = function(e) {
			i[r][e] = !0
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(32),
			i = {};
		i[n(2)("toStringTag")] = "z", i + "" != "[object z]" && n(9)(Object.prototype, "toString", function() {
			return "[object " + r(this) + "]"
		}, !0)
	}, function(e, t, n) {
		"use strict";
		var r = n(47),
			i = n(4),
			o = n(9),
			a = n(11),
			s = n(7),
			l = n(19),
			u = n(80),
			c = n(22),
			d = n(83),
			h = n(2)("iterator"),
			f = !([].keys && "next" in [].keys()),
			p = "@@iterator",
			g = "keys",
			v = "values",
			m = function() {
				return this
			};
		e.exports = function(e, t, n, b, y, _, w) {
			u(n, t, b);
			var S, P, x, C = function(e) {
					if (!f && e in E) return E[e];
					switch (e) {
					case g:
						return function() {
							return new n(this, e)
						};
					case v:
						return function() {
							return new n(this, e)
						}
					}
					return function() {
						return new n(this, e)
					}
				},
				A = t + " Iterator",
				k = y == v,
				T = !1,
				E = e.prototype,
				L = E[h] || E[p] || y && E[y],
				I = L || C(y),
				R = y ? k ? C("entries") : I : void 0,
				O = "Array" == t ? E.entries || L : L;
			if (O && (x = d(O.call(new e)), x !== Object.prototype && x.next && (c(x, A, !0), r || s(x, h) || a(x, h, m))), k && L && L.name !== v && (T = !0, I = function() {
				return L.call(this)
			}), r && !w || !f && !T && E[h] || a(E, h, I), l[t] = I, l[A] = m, y) if (S = {
				values: k ? I : C(v),
				keys: _ ? I : C(g),
				entries: R
			}, w) for (P in S) P in E || o(E, P, S[P]);
			else i(i.P + i.F * (f || T), t, S);
			return S
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = !1
	}, function(e, t, n) {
		"use strict";
		var r = n(3).document;
		e.exports = r && r.documentElement
	}, function(e, t, n) {
		"use strict";
		for (var r = n(84), i = n(21), o = n(9), a = n(3), s = n(11), l = n(19), u = n(2), c = u("iterator"), d = u("toStringTag"), h = l.Array, f = {
			CSSRuleList: !0,
			CSSStyleDeclaration: !1,
			CSSValueList: !1,
			ClientRectList: !1,
			DOMRectList: !1,
			DOMStringList: !1,
			DOMTokenList: !0,
			DataTransferItemList: !1,
			FileList: !1,
			HTMLAllCollection: !1,
			HTMLCollection: !1,
			HTMLFormElement: !1,
			HTMLSelectElement: !1,
			MediaList: !0,
			MimeTypeArray: !1,
			NamedNodeMap: !1,
			NodeList: !0,
			PaintRequestList: !1,
			Plugin: !1,
			PluginArray: !1,
			SVGLengthList: !1,
			SVGNumberList: !1,
			SVGPathSegList: !1,
			SVGPointList: !1,
			SVGStringList: !1,
			SVGTransformList: !1,
			SourceBufferList: !1,
			StyleSheetList: !0,
			TextTrackCueList: !1,
			TextTrackList: !1,
			TouchList: !1
		}, p = i(f), g = 0; g < p.length; g++) {
			var v, m = p[g],
				b = f[m],
				y = a[m],
				_ = y && y.prototype;
			if (_ && (_[c] || s(_, c, h), _[d] || s(_, d, m), l[m] = h, b)) for (v in r) _[v] || o(_, v, r[v], !0)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(6),
			i = n(16),
			o = n(2)("species");
		e.exports = function(e, t) {
			var n, a = r(e).constructor;
			return void 0 === a || void 0 == (n = r(a)[o]) ? t : i(n)
		}
	}, function(e, t, n) {
		"use strict";
		var r, i, o, a = n(10),
			s = n(90),
			l = n(48),
			u = n(24),
			c = n(3),
			d = c.process,
			h = c.setImmediate,
			f = c.clearImmediate,
			p = c.MessageChannel,
			g = c.Dispatch,
			v = 0,
			m = {},
			b = "onreadystatechange",
			y = function() {
				var e = +this;
				if (m.hasOwnProperty(e)) {
					var t = m[e];
					delete m[e], t()
				}
			},
			_ = function(e) {
				y.call(e.data)
			};
		h && f || (h = function(e) {
			for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
			return m[++v] = function() {
				s("function" == typeof e ? e : Function(e), t)
			}, r(v), v
		}, f = function(e) {
			delete m[e]
		}, "process" == n(18)(d) ? r = function(e) {
			d.nextTick(a(y, e, 1))
		} : g && g.now ? r = function(e) {
			g.now(a(y, e, 1))
		} : p ? (i = new p, o = i.port2, i.port1.onmessage = _, r = a(o.postMessage, o, 1)) : c.addEventListener && "function" == typeof postMessage && !c.importScripts ? (r = function(e) {
			c.postMessage(e + "", "*")
		}, c.addEventListener("message", _, !1)) : r = b in u("script") ?
		function(e) {
			l.appendChild(u("script"))[b] = function() {
				l.removeChild(this), y.call(e)
			}
		} : function(e) {
			setTimeout(a(y, e, 1), 0)
		}), e.exports = {
			set: h,
			clear: f
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e) {
			try {
				return {
					e: !1,
					v: e()
				}
			} catch (t) {
				return {
					e: !0,
					v: t
				}
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(6),
			i = n(1),
			o = n(35);
		e.exports = function(e, t) {
			if (r(e), i(t) && t.constructor === e) return t;
			var n = o.f(e),
				a = n.resolve;
			return a(t), n.promise
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(2)("iterator"),
			i = !1;
		try {
			var o = [7][r]();
			o["return"] = function() {
				i = !0
			}, Array.from(o, function() {
				throw 2
			})
		} catch (a) {}
		e.exports = function(e, t) {
			if (!t && !i) return !1;
			var n = !1;
			try {
				var o = [7],
					a = o[r]();
				a.next = function() {
					return {
						done: n = !0
					}
				}, o[r] = function() {
					return a
				}, e(o)
			} catch (s) {}
			return n
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(10),
			i = n(26),
			o = n(33),
			a = n(28),
			s = n(97);
		e.exports = function(e, t) {
			var n = 1 == e,
				l = 2 == e,
				u = 3 == e,
				c = 4 == e,
				d = 6 == e,
				h = 5 == e || d,
				f = t || s;
			return function(t, s, p) {
				for (var g, v, m = o(t), b = i(m), y = r(s, p, 3), _ = a(b.length), w = 0, S = n ? f(t, _) : l ? f(t, 0) : void 0; _ > w; w++) if ((h || w in b) && (g = b[w], v = y(g, w, m), e)) if (n) S[w] = v;
				else if (v) switch (e) {
				case 3:
					return !0;
				case 5:
					return g;
				case 6:
					return w;
				case 2:
					S.push(g)
				} else if (c) return !1;
				return d ? -1 : u || c ? c : S
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(1);
		e.exports = function(e, t) {
			if (!r(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
			return e
		}
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		function i(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function o(e) {
			A = e
		}
		function a(e) {
			var t, n = new E;
			if ("string" == typeof e) t = {
				url: e
			};
			else if ((0, d.isArrayBuffer)(e)) t = {
				data: e
			};
			else if (e instanceof L) t = {
				range: e
			};
			else {
				if ("object" !== ("undefined" == typeof e ? "undefined" : c(e))) throw new Error("Invalid parameter in getDocument, need either Uint8Array, string or a parameter object");
				if (!e.url && !e.data && !e.range) throw new Error("Invalid parameter object: need either .data, .range or .url");
				t = e
			}
			var r = {},
				i = null,
				o = null,
				a = h.DOMCMapReaderFactory;
			for (var l in t) if ("url" !== l || "undefined" == typeof window) if ("range" !== l) if ("worker" !== l) if ("data" !== l || t[l] instanceof Uint8Array)"CMapReaderFactory" !== l ? r[l] = t[l] : a = t[l];
			else {
				var u = t[l];
				if ("string" == typeof u) r[l] = (0, d.stringToBytes)(u);
				else if ("object" !== ("undefined" == typeof u ? "undefined" : c(u)) || null === u || isNaN(u.length)) {
					if (!(0, d.isArrayBuffer)(u)) throw new Error("Invalid PDF binary data: either typed array, string or array-like object is expected in the data property.");
					r[l] = new Uint8Array(u)
				} else r[l] = new Uint8Array(u)
			} else o = t[l];
			else i = t[l];
			else r[l] = new URL(t[l], window.location).href;
			r.rangeChunkSize = r.rangeChunkSize || y, r.ignoreErrors = r.stopAtErrors !== !0;
			var f = Object.values(d.NativeImageDecoding);
			if (void 0 !== r.nativeImageDecoderSupport && f.includes(r.nativeImageDecoderSupport) || (r.nativeImageDecoderSupport = d.NativeImageDecoding.DECODE), !o) {
				var p = (0, h.getDefaultSetting)("workerPort");
				o = p ? D.fromPort(p) : new D, n._worker = o
			}
			var g = n.docId;
			return o.promise.then(function() {
				if (n.destroyed) throw new Error("Loading aborted");
				return s(o, r, i, g).then(function(e) {
					if (n.destroyed) throw new Error("Loading aborted");
					var t = void 0;
					i ? t = new b.PDFDataTransportStream(r, i) : r.data || (t = new A({
						source: r,
						disableRange: (0, h.getDefaultSetting)("disableRange")
					}));
					var s = new d.MessageHandler(g, e, o.port);
					s.postMessageTransfers = o.postMessageTransfers;
					var l = new N(s, n, t, a);
					n._transport = l, s.send("Ready", null)
				})
			})["catch"](n._capability.reject), n
		}
		function s(e, t, n, r) {
			if (e.destroyed) return Promise.reject(new Error("Worker was destroyed"));
			var i = "2.0.99";
			return t.disableAutoFetch = (0, h.getDefaultSetting)("disableAutoFetch"), t.disableStream = (0, h.getDefaultSetting)("disableStream"), t.chunkedViewerLoading = !! n, n && (t.length = n.length, t.initialData = n.initialData), e.messageHandler.sendWithPromise("GetDocRequest", {
				docId: r,
				apiVersion: i,
				source: {
					data: t.data,
					url: t.url,
					password: t.password,
					disableAutoFetch: t.disableAutoFetch,
					rangeChunkSize: t.rangeChunkSize,
					length: t.length
				},
				maxImageSize: (0, h.getDefaultSetting)("maxImageSize"),
				disableFontFace: (0, h.getDefaultSetting)("disableFontFace"),
				disableCreateObjectURL: (0, h.getDefaultSetting)("disableCreateObjectURL"),
				postMessageTransfers: (0, h.getDefaultSetting)("postMessageTransfers") && !w,
				docBaseUrl: t.docBaseUrl,
				nativeImageDecoderSupport: t.nativeImageDecoderSupport,
				ignoreErrors: t.ignoreErrors,
				isEvalSupported: (0, h.getDefaultSetting)("isEvalSupported")
			}).then(function(t) {
				if (e.destroyed) throw new Error("Worker was destroyed");
				return t
			})
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.build = t.version = t.setPDFNetworkStreamClass = t.PDFPageProxy = t.PDFDocumentProxy = t.PDFWorker = t.PDFDataRangeTransport = t.LoopbackPort = t.getDocument = void 0;
		var l, u = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		}, d = n(0), h = n(8), f = n(114), p = n(115), g = n(14), v = r(g), m = n(59), b = n(117), y = 65536, _ = !1, w = !1, S = "undefined" != typeof document && document.currentScript ? document.currentScript.src : null, P = null, x = !1;
		"undefined" == typeof window ? (_ = !0, "undefined" == typeof require.ensure && (require.ensure = require("node-ensure")), x = !0) : "undefined" != typeof require && "function" == typeof require.ensure && (x = !0), "undefined" != typeof requirejs && requirejs.toUrl && (l = requirejs.toUrl("pdfjs-dist/build/pdf.worker.js"));
		var C = "undefined" != typeof requirejs && requirejs.load;
		P = x ?
		function(e) {
			require.ensure([], function() {
				var t;
				t = require("./pdf.worker.js"), e(t.WorkerMessageHandler)
			})
		} : C ?
		function(e) {
			requirejs(["pdfjs-dist/build/pdf.worker"], function(t) {
				e(t.WorkerMessageHandler)
			})
		} : null;
		var A, k, T, E = function() {
				function e() {
					this._capability = (0, d.createPromiseCapability)(), this._transport = null, this._worker = null, this.docId = "d" + t++, this.destroyed = !1, this.onPassword = null, this.onProgress = null, this.onUnsupportedFeature = null
				}
				var t = 0;
				return e.prototype = {
					get promise() {
						return this._capability.promise
					}, destroy: function() {
						var e = this;
						this.destroyed = !0;
						var t = this._transport ? this._transport.destroy() : Promise.resolve();
						return t.then(function() {
							e._transport = null, e._worker && (e._worker.destroy(), e._worker = null)
						})
					},
					then: function(e, t) {
						return this.promise.then.apply(this.promise, arguments)
					}
				}, e
			}(),
			L = function() {
				function e(e, t) {
					this.length = e, this.initialData = t, this._rangeListeners = [], this._progressListeners = [], this._progressiveReadListeners = [], this._readyCapability = (0, d.createPromiseCapability)()
				}
				return e.prototype = {
					addRangeListener: function(e) {
						this._rangeListeners.push(e)
					},
					addProgressListener: function(e) {
						this._progressListeners.push(e)
					},
					addProgressiveReadListener: function(e) {
						this._progressiveReadListeners.push(e)
					},
					onDataRange: function(e, t) {
						for (var n = this._rangeListeners, r = 0, i = n.length; i > r; ++r) n[r](e, t)
					},
					onDataProgress: function(e) {
						var t = this;
						this._readyCapability.promise.then(function() {
							for (var n = t._progressListeners, r = 0, i = n.length; i > r; ++r) n[r](e)
						})
					},
					onDataProgressiveRead: function(e) {
						var t = this;
						this._readyCapability.promise.then(function() {
							for (var n = t._progressiveReadListeners, r = 0, i = n.length; i > r; ++r) n[r](e)
						})
					},
					transportReady: function() {
						this._readyCapability.resolve()
					},
					requestDataRange: function(e, t) {
						throw new Error("Abstract method PDFDataRangeTransport.requestDataRange")
					},
					abort: function() {}
				}, e
			}(),
			I = function() {
				function e(e, t, n) {
					this.pdfInfo = e, this.transport = t, this.loadingTask = n
				}
				return e.prototype = {
					get numPages() {
						return this.pdfInfo.numPages
					}, get fingerprint() {
						return this.pdfInfo.fingerprint
					}, getPage: function(e) {
						return this.transport.getPage(e)
					},
					getPageIndex: function(e) {
						return this.transport.getPageIndex(e)
					},
					getDestinations: function() {
						return this.transport.getDestinations()
					},
					getDestination: function(e) {
						return this.transport.getDestination(e)
					},
					getPageLabels: function() {
						return this.transport.getPageLabels()
					},
					getPageMode: function() {
						return this.transport.getPageMode()
					},
					getAttachments: function() {
						return this.transport.getAttachments()
					},
					getJavaScript: function() {
						return this.transport.getJavaScript()
					},
					getOutline: function() {
						return this.transport.getOutline()
					},
					getMetadata: function() {
						return this.transport.getMetadata()
					},
					getData: function() {
						return this.transport.getData()
					},
					getDownloadInfo: function() {
						return this.transport.downloadInfoCapability.promise
					},
					getStats: function() {
						return this.transport.getStats()
					},
					cleanup: function() {
						this.transport.startCleanup()
					},
					destroy: function() {
						return this.loadingTask.destroy()
					}
				}, e
			}(),
			R = function() {
				function e(e, t, n) {
					this.pageIndex = e, this.pageInfo = t, this.transport = n, this.stats = new d.StatTimer, this.stats.enabled = (0, h.getDefaultSetting)("enableStats"), this.commonObjs = n.commonObjs, this.objs = new F, this.cleanupAfterRender = !1, this.pendingCleanup = !1, this.intentStates = Object.create(null), this.destroyed = !1
				}
				return e.prototype = {
					get pageNumber() {
						return this.pageIndex + 1
					}, get rotate() {
						return this.pageInfo.rotate
					}, get ref() {
						return this.pageInfo.ref
					}, get userUnit() {
						return this.pageInfo.userUnit
					}, get view() {
						return this.pageInfo.view
					}, getViewport: function(e, t) {
						return arguments.length < 2 && (t = this.rotate), new d.PageViewport(this.view, e, t, 0, 0)
					},
					getAnnotations: function(e) {
						var t = e && e.intent || null;
						return this.annotationsPromise && this.annotationsIntent === t || (this.annotationsPromise = this.transport.getAnnotations(this.pageIndex, t), this.annotationsIntent = t), this.annotationsPromise
					},
					render: function(e) {
						var t = this,
							n = this.stats;
						n.time("Overall"), this.pendingCleanup = !1;
						var r = "print" === e.intent ? "print" : "display",
							i = e.canvasFactory || new h.DOMCanvasFactory;
						this.intentStates[r] || (this.intentStates[r] = Object.create(null));
						var o = this.intentStates[r];
						o.displayReadyCapability || (o.receivingOperatorList = !0, o.displayReadyCapability = (0, d.createPromiseCapability)(), o.operatorList = {
							fnArray: [],
							argsArray: [],
							lastChunk: !1
						}, this.stats.time("Page Request"), this.transport.messageHandler.send("RenderPageRequest", {
							pageIndex: this.pageNumber - 1,
							intent: r,
							renderInteractiveForms: e.renderInteractiveForms === !0
						}));
						var a = function(e) {
								var r = o.renderTasks.indexOf(s);
								r >= 0 && o.renderTasks.splice(r, 1), t.cleanupAfterRender && (t.pendingCleanup = !0), t._tryCleanup(), e ? s.capability.reject(e) : s.capability.resolve(), n.timeEnd("Rendering"), n.timeEnd("Overall")
							},
							s = new j(a, e, this.objs, this.commonObjs, o.operatorList, this.pageNumber, i);
						s.useRequestAnimationFrame = "print" !== r, o.renderTasks || (o.renderTasks = []), o.renderTasks.push(s);
						var l = s.task;
						return o.displayReadyCapability.promise.then(function(e) {
							return t.pendingCleanup ? void a() : (n.time("Rendering"), s.initializeGraphics(e), void s.operatorListChanged())
						})["catch"](a), l
					},
					getOperatorList: function() {
						function e() {
							if (r.operatorList.lastChunk) {
								r.opListReadCapability.resolve(r.operatorList);
								var e = r.renderTasks.indexOf(n);
								e >= 0 && r.renderTasks.splice(e, 1)
							}
						}
						var t = "oplist";
						this.intentStates[t] || (this.intentStates[t] = Object.create(null));
						var n, r = this.intentStates[t];
						return r.opListReadCapability || (n = {}, n.operatorListChanged = e, r.receivingOperatorList = !0, r.opListReadCapability = (0, d.createPromiseCapability)(), r.renderTasks = [], r.renderTasks.push(n), r.operatorList = {
							fnArray: [],
							argsArray: [],
							lastChunk: !1
						}, this.transport.messageHandler.send("RenderPageRequest", {
							pageIndex: this.pageIndex,
							intent: t
						})), r.opListReadCapability.promise
					},
					streamTextContent: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							t = 100;
						return this.transport.messageHandler.sendWithStream("GetTextContent", {
							pageIndex: this.pageNumber - 1,
							normalizeWhitespace: e.normalizeWhitespace === !0,
							combineTextItems: e.disableCombineTextItems !== !0
						}, {
							highWaterMark: t,
							size: function(e) {
								return e.items.length
							}
						})
					},
					getTextContent: function(e) {
						e = e || {};
						var t = this.streamTextContent(e);
						return new Promise(function(e, n) {
							function r() {
								i.read().then(function(t) {
									var n = t.value,
										i = t.done;
									return i ? void e(o) : (d.Util.extendObj(o.styles, n.styles), d.Util.appendToArray(o.items, n.items), void r())
								}, n)
							}
							var i = t.getReader(),
								o = {
									items: [],
									styles: Object.create(null)
								};
							r()
						})
					},
					_destroy: function() {
						this.destroyed = !0, this.transport.pageCache[this.pageIndex] = null;
						var e = [];
						return Object.keys(this.intentStates).forEach(function(t) {
							if ("oplist" !== t) {
								var n = this.intentStates[t];
								n.renderTasks.forEach(function(t) {
									var n = t.capability.promise["catch"](function() {});
									e.push(n), t.cancel()
								})
							}
						}, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1, Promise.all(e)
					},
					cleanup: function() {
						this.pendingCleanup = !0, this._tryCleanup()
					},
					_tryCleanup: function() {
						this.pendingCleanup && !Object.keys(this.intentStates).some(function(e) {
							var t = this.intentStates[e];
							return 0 !== t.renderTasks.length || t.receivingOperatorList
						}, this) && (Object.keys(this.intentStates).forEach(function(e) {
							delete this.intentStates[e]
						}, this), this.objs.clear(), this.annotationsPromise = null, this.pendingCleanup = !1)
					},
					_startRenderPage: function(e, t) {
						var n = this.intentStates[t];
						n.displayReadyCapability && n.displayReadyCapability.resolve(e)
					},
					_renderPageChunk: function(e, t) {
						var n, r, i = this.intentStates[t];
						for (n = 0, r = e.length; r > n; n++) i.operatorList.fnArray.push(e.fnArray[n]), i.operatorList.argsArray.push(e.argsArray[n]);
						for (i.operatorList.lastChunk = e.lastChunk, n = 0; n < i.renderTasks.length; n++) i.renderTasks[n].operatorListChanged();
						e.lastChunk && (i.receivingOperatorList = !1, this._tryCleanup())
					}
				}, e
			}(),
			O = function() {
				function e(t) {
					i(this, e), this._listeners = [], this._defer = t, this._deferred = Promise.resolve(void 0)
				}
				return u(e, [{
					key: "postMessage",
					value: function(e, t) {
						function n(e) {
							if ("object" !== ("undefined" == typeof e ? "undefined" : c(e)) || null === e) return e;
							if (i.has(e)) return i.get(e);
							var r, o;
							if ((o = e.buffer) && (0, d.isArrayBuffer)(o)) {
								var a = t && t.indexOf(o) >= 0;
								return r = e === o ? e : a ? new e.constructor(o, e.byteOffset, e.byteLength) : new e.constructor(e), i.set(e, r), r
							}
							r = Array.isArray(e) ? [] : {}, i.set(e, r);
							for (var s in e) {
								for (var l, u = e; !(l = Object.getOwnPropertyDescriptor(u, s));) u = Object.getPrototypeOf(u);
								"undefined" != typeof l.value && "function" != typeof l.value && (r[s] = n(l.value))
							}
							return r
						}
						var r = this;
						if (!this._defer) return void this._listeners.forEach(function(t) {
							t.call(this, {
								data: e
							})
						}, this);
						var i = new WeakMap,
							o = {
								data: n(e)
							};
						this._deferred.then(function() {
							r._listeners.forEach(function(e) {
								e.call(this, o)
							}, r)
						})
					}
				}, {
					key: "addEventListener",
					value: function(e, t) {
						this._listeners.push(t)
					}
				}, {
					key: "removeEventListener",
					value: function(e, t) {
						var n = this._listeners.indexOf(t);
						this._listeners.splice(n, 1)
					}
				}, {
					key: "terminate",
					value: function() {
						this._listeners = []
					}
				}]), e
			}(),
			D = function() {
				function e() {
					if ("undefined" != typeof l) return l;
					if ((0, h.getDefaultSetting)("workerSrc")) return (0, h.getDefaultSetting)("workerSrc");
					if (S) return S.replace(/(\.(?:min\.)?js)(\?.*)?$/i, ".worker$1$2");
					throw new Error("No PDFJS.workerSrc specified")
				}
				function t() {
					if (o) return o.promise;
					o = (0, d.createPromiseCapability)();
					var t = P ||
					function(t) {
						d.Util.loadScript(e(), function() {
							t(window.pdfjsDistBuildPdfWorker.WorkerMessageHandler)
						})
					};
					return t(o.resolve), o.promise
				}
				function n(e) {
					var t = "importScripts('" + e + "');";
					return URL.createObjectURL(new Blob([t]))
				}
				function r(e, t) {
					if (t && a.has(t)) throw new Error("Cannot use more than one PDFWorker per port");
					return this.name = e, this.destroyed = !1, this.postMessageTransfers = !0, this._readyCapability = (0, d.createPromiseCapability)(), this._port = null, this._webWorker = null, this._messageHandler = null, t ? (a.set(t, this), void this._initializeFromPort(t)) : void this._initialize()
				}
				var i = 0,
					o = void 0,
					a = new WeakMap;
				return r.prototype = {
					get promise() {
						return this._readyCapability.promise
					}, get port() {
						return this._port
					}, get messageHandler() {
						return this._messageHandler
					}, _initializeFromPort: function(e) {
						this._port = e, this._messageHandler = new d.MessageHandler("main", "worker", e), this._messageHandler.on("ready", function() {}), this._readyCapability.resolve()
					},
					_initialize: function() {
						var t = this;
						if (!_ && !(0, h.getDefaultSetting)("disableWorker") && "undefined" != typeof Worker) {
							var r = e();
							try {
								(0, d.isSameOrigin)(window.location.href, r) || (r = n(new URL(r, window.location).href));
								var i = new Worker(r),
									o = new d.MessageHandler("main", "worker", i),
									a = function() {
										i.removeEventListener("error", s), o.destroy(), i.terminate(), t.destroyed ? t._readyCapability.reject(new Error("Worker was destroyed")) : t._setupFakeWorker()
									},
									s = function() {
										t._webWorker || a()
									};
								i.addEventListener("error", s), o.on("test", function(e) {
									if (i.removeEventListener("error", s), t.destroyed) return void a();
									var n = e && e.supportTypedArray;
									n ? (t._messageHandler = o, t._port = i, t._webWorker = i, e.supportTransfers || (t.postMessageTransfers = !1, w = !0), t._readyCapability.resolve(), o.send("configure", {
										verbosity: (0, d.getVerbosityLevel)()
									})) : (t._setupFakeWorker(), o.destroy(), i.terminate())
								}), o.on("console_log", function(e) {
									console.log.apply(console, e)
								}), o.on("console_error", function(e) {
									console.error.apply(console, e)
								}), o.on("ready", function(e) {
									if (i.removeEventListener("error", s), t.destroyed) return void a();
									try {
										l()
									} catch (n) {
										t._setupFakeWorker()
									}
								});
								var l = function() {
										var e = (0, h.getDefaultSetting)("postMessageTransfers") && !w,
											t = new Uint8Array([e ? 255 : 0]);
										try {
											o.send("test", t, [t.buffer])
										} catch (n) {
											(0, d.info)("Cannot use postMessage transfers"), t[0] = 0, o.send("test", t)
										}
									};
								return void l()
							} catch (u) {
								(0, d.info)("The worker has been disabled.")
							}
						}
						this._setupFakeWorker()
					},
					_setupFakeWorker: function() {
						var e = this;
						_ || (0, h.getDefaultSetting)("disableWorker") || ((0, d.warn)("Setting up fake worker."), _ = !0), t().then(function(t) {
							if (e.destroyed) return void e._readyCapability.reject(new Error("Worker was destroyed"));
							var n = Uint8Array !== Float32Array,
								r = new O(n);
							e._port = r;
							var o = "fake" + i++,
								a = new d.MessageHandler(o + "_worker", o, r);
							t.setup(a, r);
							var s = new d.MessageHandler(o, o + "_worker", r);
							e._messageHandler = s, e._readyCapability.resolve()
						})
					},
					destroy: function() {
						this.destroyed = !0, this._webWorker && (this._webWorker.terminate(), this._webWorker = null), a["delete"](this._port), this._port = null, this._messageHandler && (this._messageHandler.destroy(), this._messageHandler = null)
					}
				}, r.fromPort = function(e) {
					return a.has(e) ? a.get(e) : new r(null, e)
				}, r
			}(),
			N = function() {
				function e(e, t, n, r) {
					this.messageHandler = e, this.loadingTask = t, this.commonObjs = new F, this.fontLoader = new f.FontLoader(t.docId), this.CMapReaderFactory = new r({
						baseUrl: (0, h.getDefaultSetting)("cMapUrl"),
						isCompressed: (0, h.getDefaultSetting)("cMapPacked")
					}), this.destroyed = !1, this.destroyCapability = null, this._passwordCapability = null, this._networkStream = n, this._fullReader = null, this._lastProgress = null, this.pageCache = [], this.pagePromises = [], this.downloadInfoCapability = (0, d.createPromiseCapability)(), this.setupMessageHandler()
				}
				return e.prototype = {
					destroy: function() {
						var e = this;
						if (this.destroyCapability) return this.destroyCapability.promise;
						this.destroyed = !0, this.destroyCapability = (0, d.createPromiseCapability)(), this._passwordCapability && this._passwordCapability.reject(new Error("Worker was destroyed during onPassword callback"));
						var t = [];
						this.pageCache.forEach(function(e) {
							e && t.push(e._destroy())
						}), this.pageCache = [], this.pagePromises = [];
						var n = this.messageHandler.sendWithPromise("Terminate", null);
						return t.push(n), Promise.all(t).then(function() {
							e.fontLoader.clear(), e._networkStream && e._networkStream.cancelAllRequests(), e.messageHandler && (e.messageHandler.destroy(), e.messageHandler = null), e.destroyCapability.resolve()
						}, this.destroyCapability.reject), this.destroyCapability.promise
					},
					setupMessageHandler: function() {
						var e = this.messageHandler,
							t = this.loadingTask;
						e.on("GetReader", function(e, t) {
							var n = this;
							(0, d.assert)(this._networkStream), this._fullReader = this._networkStream.getFullReader(), this._fullReader.onProgress = function(e) {
								n._lastProgress = {
									loaded: e.loaded,
									total: e.total
								}
							}, t.onPull = function() {
								n._fullReader.read().then(function(e) {
									var n = e.value,
										r = e.done;
									return r ? void t.close() : ((0, d.assert)((0, d.isArrayBuffer)(n)), void t.enqueue(new Uint8Array(n), 1, [n]))
								})["catch"](function(e) {
									t.error(e)
								})
							}, t.onCancel = function(e) {
								n._fullReader.cancel(e)
							}
						}, this), e.on("ReaderHeadersReady", function(e) {
							var t = this,
								n = (0, d.createPromiseCapability)(),
								r = this._fullReader;
							return r.headersReady.then(function() {
								if (!r.isStreamingSupported || !r.isRangeSupported) {
									if (t._lastProgress) {
										var e = t.loadingTask;
										e.onProgress && e.onProgress(t._lastProgress)
									}
									r.onProgress = function(e) {
										var n = t.loadingTask;
										n.onProgress && n.onProgress({
											loaded: e.loaded,
											total: e.total
										})
									}
								}
								n.resolve({
									isStreamingSupported: r.isStreamingSupported,
									isRangeSupported: r.isRangeSupported,
									contentLength: r.contentLength
								})
							}, n.reject), n.promise
						}, this), e.on("GetRangeReader", function(e, t) {
							(0, d.assert)(this._networkStream);
							var n = this._networkStream.getRangeReader(e.begin, e.end);
							t.onPull = function() {
								n.read().then(function(e) {
									var n = e.value,
										r = e.done;
									return r ? void t.close() : ((0, d.assert)((0, d.isArrayBuffer)(n)), void t.enqueue(new Uint8Array(n), 1, [n]))
								})["catch"](function(e) {
									t.error(e)
								})
							}, t.onCancel = function(e) {
								n.cancel(e)
							}
						}, this), e.on("GetDoc", function(e) {
							var t = e.pdfInfo;
							this.numPages = e.pdfInfo.numPages;
							var n = this.loadingTask,
								r = new I(t, this, n);
							this.pdfDocument = r, n._capability.resolve(r)
						}, this), e.on("PasswordRequest", function(e) {
							var n = this;
							if (this._passwordCapability = (0, d.createPromiseCapability)(), t.onPassword) {
								var r = function(e) {
										n._passwordCapability.resolve({
											password: e
										})
									};
								t.onPassword(r, e.code)
							} else this._passwordCapability.reject(new d.PasswordException(e.message, e.code));
							return this._passwordCapability.promise
						}, this), e.on("PasswordException", function(e) {
							t._capability.reject(new d.PasswordException(e.message, e.code))
						}, this), e.on("InvalidPDF", function(e) {
							this.loadingTask._capability.reject(new d.InvalidPDFException(e.message))
						}, this), e.on("MissingPDF", function(e) {
							this.loadingTask._capability.reject(new d.MissingPDFException(e.message))
						}, this), e.on("UnexpectedResponse", function(e) {
							this.loadingTask._capability.reject(new d.UnexpectedResponseException(e.message, e.status))
						}, this), e.on("UnknownError", function(e) {
							this.loadingTask._capability.reject(new d.UnknownErrorException(e.message, e.details))
						}, this), e.on("DataLoaded", function(e) {
							this.downloadInfoCapability.resolve(e)
						}, this), e.on("PDFManagerReady", function(e) {}, this), e.on("StartRenderPage", function(e) {
							if (!this.destroyed) {
								var t = this.pageCache[e.pageIndex];
								t.stats.timeEnd("Page Request"), t._startRenderPage(e.transparency, e.intent)
							}
						}, this), e.on("RenderPageChunk", function(e) {
							if (!this.destroyed) {
								var t = this.pageCache[e.pageIndex];
								t._renderPageChunk(e.operatorList, e.intent)
							}
						}, this), e.on("commonobj", function(e) {
							var t = this;
							if (!this.destroyed) {
								var n = e[0],
									r = e[1];
								if (!this.commonObjs.hasData(n)) switch (r) {
								case "Font":
									var i = e[2];
									if ("error" in i) {
										var o = i.error;
										(0, d.warn)("Error during font loading: " + o), this.commonObjs.resolve(n, o);
										break
									}
									var a = null;
									(0, h.getDefaultSetting)("pdfBug") && v["default"].FontInspector && v["default"].FontInspector.enabled && (a = {
										registerFont: function(e, t) {
											v["default"].FontInspector.fontAdded(e, t)
										}
									});
									var s = new f.FontFaceObject(i, {
										isEvalSupported: (0, h.getDefaultSetting)("isEvalSupported"),
										disableFontFace: (0, h.getDefaultSetting)("disableFontFace"),
										fontRegistry: a
									}),
										l = function(e) {
											t.commonObjs.resolve(n, s)
										};
									this.fontLoader.bind([s], l);
									break;
								case "FontPath":
									this.commonObjs.resolve(n, e[2]);
									break;
								default:
									throw new Error("Got unknown common object type " + r)
								}
							}
						}, this), e.on("obj", function(e) {
							if (!this.destroyed) {
								var t, n = e[0],
									r = e[1],
									i = e[2],
									o = this.pageCache[r];
								if (!o.objs.hasData(n)) switch (i) {
								case "JpegStream":
									t = e[3], (0, d.loadJpegStream)(n, t, o.objs);
									break;
								case "Image":
									t = e[3], o.objs.resolve(n, t);
									var a = 8e6;
									t && "data" in t && t.data.length > a && (o.cleanupAfterRender = !0);
									break;
								default:
									throw new Error("Got unknown object type " + i)
								}
							}
						}, this), e.on("DocProgress", function(e) {
							if (!this.destroyed) {
								var t = this.loadingTask;
								t.onProgress && t.onProgress({
									loaded: e.loaded,
									total: e.total
								})
							}
						}, this), e.on("PageError", function(e) {
							if (!this.destroyed) {
								var t = this.pageCache[e.pageNum - 1],
									n = t.intentStates[e.intent];
								if (!n.displayReadyCapability) throw new Error(e.error);
								if (n.displayReadyCapability.reject(e.error), n.operatorList) {
									n.operatorList.lastChunk = !0;
									for (var r = 0; r < n.renderTasks.length; r++) n.renderTasks[r].operatorListChanged()
								}
							}
						}, this), e.on("UnsupportedFeature", function(e) {
							if (!this.destroyed) {
								var t = this.loadingTask;
								t.onUnsupportedFeature && t.onUnsupportedFeature(e.featureId)
							}
						}, this), e.on("JpegDecode", function(e) {
							if (this.destroyed) return Promise.reject(new Error("Worker was destroyed"));
							if ("undefined" == typeof document) return Promise.reject(new Error('"document" is not defined.'));
							var t = e[0],
								n = e[1];
							return 3 !== n && 1 !== n ? Promise.reject(new Error("Only 3 components or 1 component can be returned")) : new Promise(function(e, r) {
								var i = new Image;
								i.onload = function() {
									var t = i.width,
										r = i.height,
										o = t * r,
										a = 4 * o,
										s = new Uint8Array(o * n),
										l = document.createElement("canvas");
									l.width = t, l.height = r;
									var u = l.getContext("2d");
									u.drawImage(i, 0, 0);
									var c, d, h = u.getImageData(0, 0, t, r).data;
									if (3 === n) for (c = 0, d = 0; a > c; c += 4, d += 3) s[d] = h[c], s[d + 1] = h[c + 1], s[d + 2] = h[c + 2];
									else if (1 === n) for (c = 0, d = 0; a > c; c += 4, d++) s[d] = h[c];
									e({
										data: s,
										width: t,
										height: r
									})
								}, i.onerror = function() {
									r(new Error("JpegDecode failed to load image"))
								}, i.src = t
							})
						}, this), e.on("FetchBuiltInCMap", function(e) {
							return this.destroyed ? Promise.reject(new Error("Worker was destroyed")) : this.CMapReaderFactory.fetch({
								name: e.name
							})
						}, this)
					},
					getData: function() {
						return this.messageHandler.sendWithPromise("GetData", null)
					},
					getPage: function(e, t) {
						var n = this;
						if (!Number.isInteger(e) || 0 >= e || e > this.numPages) return Promise.reject(new Error("Invalid page request"));
						var r = e - 1;
						if (r in this.pagePromises) return this.pagePromises[r];
						var i = this.messageHandler.sendWithPromise("GetPage", {
							pageIndex: r
						}).then(function(e) {
							if (n.destroyed) throw new Error("Transport destroyed");
							var t = new R(r, e, n);
							return n.pageCache[r] = t, t
						});
						return this.pagePromises[r] = i, i
					},
					getPageIndex: function(e) {
						return this.messageHandler.sendWithPromise("GetPageIndex", {
							ref: e
						})["catch"](function(e) {
							return Promise.reject(new Error(e))
						})
					},
					getAnnotations: function(e, t) {
						return this.messageHandler.sendWithPromise("GetAnnotations", {
							pageIndex: e,
							intent: t
						})
					},
					getDestinations: function() {
						return this.messageHandler.sendWithPromise("GetDestinations", null)
					},
					getDestination: function(e) {
						return this.messageHandler.sendWithPromise("GetDestination", {
							id: e
						})
					},
					getPageLabels: function() {
						return this.messageHandler.sendWithPromise("GetPageLabels", null)
					},
					getPageMode: function() {
						return this.messageHandler.sendWithPromise("GetPageMode", null)
					},
					getAttachments: function() {
						return this.messageHandler.sendWithPromise("GetAttachments", null)
					},
					getJavaScript: function() {
						return this.messageHandler.sendWithPromise("GetJavaScript", null)
					},
					getOutline: function() {
						return this.messageHandler.sendWithPromise("GetOutline", null)
					},
					getMetadata: function() {
						return this.messageHandler.sendWithPromise("GetMetadata", null).then(function(e) {
							return {
								info: e[0],
								metadata: e[1] ? new m.Metadata(e[1]) : null
							}
						})
					},
					getStats: function() {
						return this.messageHandler.sendWithPromise("GetStats", null)
					},
					startCleanup: function() {
						var e = this;
						this.messageHandler.sendWithPromise("Cleanup", null).then(function() {
							for (var t = 0, n = e.pageCache.length; n > t; t++) {
								var r = e.pageCache[t];
								r && r.cleanup()
							}
							e.commonObjs.clear(), e.fontLoader.clear()
						})
					}
				}, e
			}(),
			F = function() {
				function e() {
					this.objs = Object.create(null)
				}
				return e.prototype = {
					ensureObj: function(e) {
						if (this.objs[e]) return this.objs[e];
						var t = {
							capability: (0, d.createPromiseCapability)(),
							data: null,
							resolved: !1
						};
						return this.objs[e] = t, t
					},
					get: function(e, t) {
						if (t) return this.ensureObj(e).capability.promise.then(t), null;
						var n = this.objs[e];
						if (!n || !n.resolved) throw new Error("Requesting object that isn't resolved yet " + e);
						return n.data
					},
					resolve: function(e, t) {
						var n = this.ensureObj(e);
						n.resolved = !0, n.data = t, n.capability.resolve(t)
					},
					isResolved: function(e) {
						var t = this.objs;
						return t[e] ? t[e].resolved : !1
					},
					hasData: function(e) {
						return this.isResolved(e)
					},
					getData: function(e) {
						var t = this.objs;
						return t[e] && t[e].resolved ? t[e].data : null
					},
					clear: function() {
						this.objs = Object.create(null)
					}
				}, e
			}(),
			M = function() {
				function e(e) {
					this._internalRenderTask = e, this.onContinue = null
				}
				return e.prototype = {
					get promise() {
						return this._internalRenderTask.capability.promise
					}, cancel: function() {
						this._internalRenderTask.cancel()
					},
					then: function(e, t) {
						return this.promise.then.apply(this.promise, arguments)
					}
				}, e
			}(),
			j = function() {
				function e(e, t, n, r, i, o, a) {
					this.callback = e, this.params = t, this.objs = n, this.commonObjs = r, this.operatorListIdx = null, this.operatorList = i, this.pageNumber = o, this.canvasFactory = a, this.running = !1, this.graphicsReadyCallback = null, this.graphicsReady = !1, this.useRequestAnimationFrame = !1, this.cancelled = !1, this.capability = (0, d.createPromiseCapability)(), this.task = new M(this), this._continueBound = this._continue.bind(this), this._scheduleNextBound = this._scheduleNext.bind(this), this._nextBound = this._next.bind(this), this._canvas = t.canvasContext.canvas
				}
				var t = new WeakMap;
				return e.prototype = {
					initializeGraphics: function(e) {
						if (this._canvas) {
							if (t.has(this._canvas)) throw new Error("Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.");
							t.set(this._canvas, this)
						}
						if (!this.cancelled) {
							(0, h.getDefaultSetting)("pdfBug") && v["default"].StepperManager && v["default"].StepperManager.enabled && (this.stepper = v["default"].StepperManager.create(this.pageNumber - 1), this.stepper.init(this.operatorList), this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint());
							var n = this.params;
							this.gfx = new p.CanvasGraphics(n.canvasContext, this.commonObjs, this.objs, this.canvasFactory, n.imageLayer), this.gfx.beginDrawing({
								transform: n.transform,
								viewport: n.viewport,
								transparency: e,
								background: n.background
							}), this.operatorListIdx = 0, this.graphicsReady = !0, this.graphicsReadyCallback && this.graphicsReadyCallback()
						}
					},
					cancel: function() {
						this.running = !1, this.cancelled = !0, this._canvas && t["delete"](this._canvas), this.callback(new h.RenderingCancelledException("Rendering cancelled, page " + this.pageNumber, "canvas"))
					},
					operatorListChanged: function() {
						return this.graphicsReady ? (this.stepper && this.stepper.updateOperatorList(this.operatorList), void(this.running || this._continue())) : void(this.graphicsReadyCallback || (this.graphicsReadyCallback = this._continueBound))
					},
					_continue: function() {
						this.running = !0, this.cancelled || (this.task.onContinue ? this.task.onContinue(this._scheduleNextBound) : this._scheduleNext())
					},
					_scheduleNext: function() {
						this.useRequestAnimationFrame && "undefined" != typeof window ? window.requestAnimationFrame(this._nextBound) : Promise.resolve(void 0).then(this._nextBound)
					},
					_next: function() {
						this.cancelled || (this.operatorListIdx = this.gfx.executeOperatorList(this.operatorList, this.operatorListIdx, this._continueBound, this.stepper), this.operatorListIdx === this.operatorList.argsArray.length && (this.running = !1, this.operatorList.lastChunk && (this.gfx.endDrawing(), this._canvas && t["delete"](this._canvas), this.callback())))
					}
				}, e
			}();
		t.version = k = "2.0.99", t.build = T = "2b70e68eb", t.getDocument = a, t.LoopbackPort = O, t.PDFDataRangeTransport = L, t.PDFWorker = D, t.PDFDocumentProxy = I, t.PDFPageProxy = R, t.setPDFNetworkStreamClass = o, t.version = k, t.build = T
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.WebGLUtils = void 0;
		var r = n(8),
			i = n(0),
			o = function() {
				function e(e, t, n) {
					var r = e.createShader(n);
					e.shaderSource(r, t), e.compileShader(r);
					var i = e.getShaderParameter(r, e.COMPILE_STATUS);
					if (!i) {
						var o = e.getShaderInfoLog(r);
						throw new Error("Error during shader compilation: " + o)
					}
					return r
				}
				function t(t, n) {
					return e(t, n, t.VERTEX_SHADER)
				}
				function n(t, n) {
					return e(t, n, t.FRAGMENT_SHADER)
				}
				function o(e, t) {
					for (var n = e.createProgram(), r = 0, i = t.length; i > r; ++r) e.attachShader(n, t[r]);
					e.linkProgram(n);
					var o = e.getProgramParameter(n, e.LINK_STATUS);
					if (!o) {
						var a = e.getProgramInfoLog(n);
						throw new Error("Error during program linking: " + a)
					}
					return n
				}
				function a(e, t, n) {
					e.activeTexture(n);
					var r = e.createTexture();
					return e.bindTexture(e.TEXTURE_2D, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, t), r
				}
				function s() {
					f || (p = document.createElement("canvas"), f = p.getContext("webgl", {
						premultipliedalpha: !1
					}))
				}
				function l() {
					var e, r;
					s(), e = p, p = null, r = f, f = null;
					var i = t(r, g),
						a = n(r, v),
						l = o(r, [i, a]);
					r.useProgram(l);
					var u = {};
					u.gl = r, u.canvas = e, u.resolutionLocation = r.getUniformLocation(l, "u_resolution"), u.positionLocation = r.getAttribLocation(l, "a_position"), u.backdropLocation = r.getUniformLocation(l, "u_backdrop"), u.subtypeLocation = r.getUniformLocation(l, "u_subtype");
					var c = r.getAttribLocation(l, "a_texCoord"),
						d = r.getUniformLocation(l, "u_image"),
						h = r.getUniformLocation(l, "u_mask"),
						b = r.createBuffer();
					r.bindBuffer(r.ARRAY_BUFFER, b), r.bufferData(r.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]), r.STATIC_DRAW), r.enableVertexAttribArray(c), r.vertexAttribPointer(c, 2, r.FLOAT, !1, 0, 0), r.uniform1i(d, 0), r.uniform1i(h, 1), m = u
				}
				function u(e, t, n) {
					var r = e.width,
						i = e.height;
					m || l();
					var o = m,
						s = o.canvas,
						u = o.gl;
					s.width = r, s.height = i, u.viewport(0, 0, u.drawingBufferWidth, u.drawingBufferHeight), u.uniform2f(o.resolutionLocation, r, i), n.backdrop ? u.uniform4f(o.resolutionLocation, n.backdrop[0], n.backdrop[1], n.backdrop[2], 1) : u.uniform4f(o.resolutionLocation, 0, 0, 0, 0), u.uniform1i(o.subtypeLocation, "Luminosity" === n.subtype ? 1 : 0);
					var c = a(u, e, u.TEXTURE0),
						d = a(u, t, u.TEXTURE1),
						h = u.createBuffer();
					return u.bindBuffer(u.ARRAY_BUFFER, h), u.bufferData(u.ARRAY_BUFFER, new Float32Array([0, 0, r, 0, 0, i, 0, i, r, 0, r, i]), u.STATIC_DRAW), u.enableVertexAttribArray(o.positionLocation), u.vertexAttribPointer(o.positionLocation, 2, u.FLOAT, !1, 0, 0), u.clearColor(0, 0, 0, 0), u.enable(u.BLEND), u.blendFunc(u.ONE, u.ONE_MINUS_SRC_ALPHA), u.clear(u.COLOR_BUFFER_BIT), u.drawArrays(u.TRIANGLES, 0, 6), u.flush(), u.deleteTexture(c), u.deleteTexture(d), u.deleteBuffer(h), s
				}
				function c() {
					var e, r;
					s(), e = p, p = null, r = f, f = null;
					var i = t(r, b),
						a = n(r, y),
						l = o(r, [i, a]);
					r.useProgram(l);
					var u = {};
					u.gl = r, u.canvas = e, u.resolutionLocation = r.getUniformLocation(l, "u_resolution"), u.scaleLocation = r.getUniformLocation(l, "u_scale"), u.offsetLocation = r.getUniformLocation(l, "u_offset"), u.positionLocation = r.getAttribLocation(l, "a_position"), u.colorLocation = r.getAttribLocation(l, "a_color"), _ = u
				}
				function d(e, t, n, r, i) {
					_ || c();
					var o = _,
						a = o.canvas,
						s = o.gl;
					a.width = e, a.height = t, s.viewport(0, 0, s.drawingBufferWidth, s.drawingBufferHeight), s.uniform2f(o.resolutionLocation, e, t);
					var l, u, d, h = 0;
					for (l = 0, u = r.length; u > l; l++) switch (r[l].type) {
					case "lattice":
						d = r[l].coords.length / r[l].verticesPerRow | 0, h += (d - 1) * (r[l].verticesPerRow - 1) * 6;
						break;
					case "triangles":
						h += r[l].coords.length
					}
					var f = new Float32Array(2 * h),
						p = new Uint8Array(3 * h),
						g = i.coords,
						v = i.colors,
						m = 0,
						b = 0;
					for (l = 0, u = r.length; u > l; l++) {
						var y = r[l],
							w = y.coords,
							S = y.colors;
						switch (y.type) {
						case "lattice":
							var P = y.verticesPerRow;
							d = w.length / P | 0;
							for (var x = 1; d > x; x++) for (var C = x * P + 1, A = 1; P > A; A++, C++) f[m] = g[w[C - P - 1]], f[m + 1] = g[w[C - P - 1] + 1], f[m + 2] = g[w[C - P]], f[m + 3] = g[w[C - P] + 1], f[m + 4] = g[w[C - 1]], f[m + 5] = g[w[C - 1] + 1], p[b] = v[S[C - P - 1]], p[b + 1] = v[S[C - P - 1] + 1], p[b + 2] = v[S[C - P - 1] + 2], p[b + 3] = v[S[C - P]], p[b + 4] = v[S[C - P] + 1], p[b + 5] = v[S[C - P] + 2], p[b + 6] = v[S[C - 1]], p[b + 7] = v[S[C - 1] + 1], p[b + 8] = v[S[C - 1] + 2], f[m + 6] = f[m + 2], f[m + 7] = f[m + 3], f[m + 8] = f[m + 4], f[m + 9] = f[m + 5], f[m + 10] = g[w[C]], f[m + 11] = g[w[C] + 1], p[b + 9] = p[b + 3], p[b + 10] = p[b + 4], p[b + 11] = p[b + 5], p[b + 12] = p[b + 6], p[b + 13] = p[b + 7], p[b + 14] = p[b + 8], p[b + 15] = v[S[C]], p[b + 16] = v[S[C] + 1], p[b + 17] = v[S[C] + 2], m += 12, b += 18;
							break;
						case "triangles":
							for (var k = 0, T = w.length; T > k; k++) f[m] = g[w[k]], f[m + 1] = g[w[k] + 1], p[b] = v[S[k]], p[b + 1] = v[S[k] + 1], p[b + 2] = v[S[k] + 2], m += 2, b += 3
						}
					}
					n ? s.clearColor(n[0] / 255, n[1] / 255, n[2] / 255, 1) : s.clearColor(0, 0, 0, 0), s.clear(s.COLOR_BUFFER_BIT);
					var E = s.createBuffer();
					s.bindBuffer(s.ARRAY_BUFFER, E), s.bufferData(s.ARRAY_BUFFER, f, s.STATIC_DRAW), s.enableVertexAttribArray(o.positionLocation), s.vertexAttribPointer(o.positionLocation, 2, s.FLOAT, !1, 0, 0);
					var L = s.createBuffer();
					return s.bindBuffer(s.ARRAY_BUFFER, L), s.bufferData(s.ARRAY_BUFFER, p, s.STATIC_DRAW), s.enableVertexAttribArray(o.colorLocation), s.vertexAttribPointer(o.colorLocation, 3, s.UNSIGNED_BYTE, !1, 0, 0), s.uniform2f(o.scaleLocation, i.scaleX, i.scaleY), s.uniform2f(o.offsetLocation, i.offsetX, i.offsetY), s.drawArrays(s.TRIANGLES, 0, h), s.flush(), s.deleteBuffer(E), s.deleteBuffer(L), a
				}
				function h() {
					m && m.canvas && (m.canvas.width = 0, m.canvas.height = 0), _ && _.canvas && (_.canvas.width = 0, _.canvas.height = 0), m = null, _ = null
				}
				var f, p, g = "  attribute vec2 a_position;                                      attribute vec2 a_texCoord;                                                                                                      uniform vec2 u_resolution;                                                                                                      varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec2 clipSpace = (a_position / u_resolution) * 2.0 - 1.0;       gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_texCoord = a_texCoord;                                      }                                                             ",
					v = "  precision mediump float;                                                                                                        uniform vec4 u_backdrop;                                        uniform int u_subtype;                                          uniform sampler2D u_image;                                      uniform sampler2D u_mask;                                                                                                       varying vec2 v_texCoord;                                                                                                        void main() {                                                     vec4 imageColor = texture2D(u_image, v_texCoord);               vec4 maskColor = texture2D(u_mask, v_texCoord);                 if (u_backdrop.a > 0.0) {                                         maskColor.rgb = maskColor.rgb * maskColor.a +                                   u_backdrop.rgb * (1.0 - maskColor.a);         }                                                               float lum;                                                      if (u_subtype == 0) {                                             lum = maskColor.a;                                            } else {                                                          lum = maskColor.r * 0.3 + maskColor.g * 0.59 +                        maskColor.b * 0.11;                                     }                                                               imageColor.a *= lum;                                            imageColor.rgb *= imageColor.a;                                 gl_FragColor = imageColor;                                    }                                                             ",
					m = null,
					b = "  attribute vec2 a_position;                                      attribute vec3 a_color;                                                                                                         uniform vec2 u_resolution;                                      uniform vec2 u_scale;                                           uniform vec2 u_offset;                                                                                                          varying vec4 v_color;                                                                                                           void main() {                                                     vec2 position = (a_position + u_offset) * u_scale;              vec2 clipSpace = (position / u_resolution) * 2.0 - 1.0;         gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);                                                                              v_color = vec4(a_color / 255.0, 1.0);                         }                                                             ",
					y = "  precision mediump float;                                                                                                        varying vec4 v_color;                                                                                                           void main() {                                                     gl_FragColor = v_color;                                       }                                                             ",
					_ = null;
				return {
					get isEnabled() {
						if ((0, r.getDefaultSetting)("disableWebGL")) return !1;
						var e = !1;
						try {
							s(), e = !! f
						} catch (t) {}
						return (0, i.shadow)(this, "isEnabled", e)
					}, composeSMask: u,
					drawFigures: d,
					clear: h
				}
			}();
		t.WebGLUtils = o
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.Metadata = void 0;
		var i = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			o = n(0),
			a = n(8),
			s = function() {
				function e(t) {
					r(this, e), (0, o.assert)("string" == typeof t, "Metadata: input is not a string"), t = this._repair(t);
					var n = new a.SimpleXMLParser;
					t = n.parseFromString(t), this._metadata = Object.create(null), this._parse(t)
				}
				return i(e, [{
					key: "_repair",
					value: function(e) {
						return e.replace(/>\\376\\377([^<]+)/g, function(e, t) {
							for (var n = t.replace(/\\([0-3])([0-7])([0-7])/g, function(e, t, n, r) {
								return String.fromCharCode(64 * t + 8 * n + 1 * r)
							}), r = "", i = 0, o = n.length; o > i; i += 2) {
								var a = 256 * n.charCodeAt(i) + n.charCodeAt(i + 1);
								r += a >= 32 && 127 > a && 60 !== a && 62 !== a && 38 !== a ? String.fromCharCode(a) : "&#x" + (65536 + a).toString(16).substring(1) + ";"
							}
							return ">" + r
						})
					}
				}, {
					key: "_parse",
					value: function(e) {
						var t = e.documentElement;
						if ("rdf:rdf" !== t.nodeName.toLowerCase()) for (t = t.firstChild; t && "rdf:rdf" !== t.nodeName.toLowerCase();) t = t.nextSibling;
						var n = t ? t.nodeName.toLowerCase() : null;
						if (t && "rdf:rdf" === n && t.hasChildNodes()) for (var r = t.childNodes, i = 0, o = r.length; o > i; i++) {
							var a = r[i];
							if ("rdf:description" === a.nodeName.toLowerCase()) for (var s = 0, l = a.childNodes.length; l > s; s++) if ("#text" !== a.childNodes[s].nodeName.toLowerCase()) {
								var u = a.childNodes[s],
									c = u.nodeName.toLowerCase();
								this._metadata[c] = u.textContent.trim()
							}
						}
					}
				}, {
					key: "get",
					value: function(e) {
						return this._metadata[e] || null
					}
				}, {
					key: "getAll",
					value: function() {
						return this._metadata
					}
				}, {
					key: "has",
					value: function(e) {
						return "undefined" != typeof this._metadata[e]
					}
				}]), e
			}();
		t.Metadata = s
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.AnnotationLayer = void 0;
		var a = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			s = n(8),
			l = n(0),
			u = function() {
				function e() {
					o(this, e)
				}
				return a(e, null, [{
					key: "create",
					value: function(e) {
						var t = e.data.annotationType;
						switch (t) {
						case l.AnnotationType.LINK:
							return new d(e);
						case l.AnnotationType.TEXT:
							return new h(e);
						case l.AnnotationType.WIDGET:
							var n = e.data.fieldType;
							switch (n) {
							case "Tx":
								return new p(e);
							case "Btn":
								if (e.data.radioButton) return new v(e);
								if (e.data.checkBox) return new g(e);
								(0, l.warn)("Unimplemented button widget annotation: pushbutton");
								break;
							case "Ch":
								return new m(e)
							}
							return new f(e);
						case l.AnnotationType.POPUP:
							return new b(e);
						case l.AnnotationType.LINE:
							return new _(e);
						case l.AnnotationType.SQUARE:
							return new w(e);
						case l.AnnotationType.CIRCLE:
							return new S(e);
						case l.AnnotationType.POLYLINE:
							return new P(e);
						case l.AnnotationType.POLYGON:
							return new x(e);
						case l.AnnotationType.HIGHLIGHT:
							return new C(e);
						case l.AnnotationType.UNDERLINE:
							return new A(e);
						case l.AnnotationType.SQUIGGLY:
							return new k(e);
						case l.AnnotationType.STRIKEOUT:
							return new T(e);
						case l.AnnotationType.STAMP:
							return new E(e);
						case l.AnnotationType.FILEATTACHMENT:
							return new L(e);
						default:
							return new c(e)
						}
					}
				}]), e
			}(),
			c = function() {
				function e(t) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
					o(this, e), this.isRenderable = n, this.data = t.data, this.layer = t.layer, this.page = t.page, this.viewport = t.viewport, this.linkService = t.linkService, this.downloadManager = t.downloadManager, this.imageResourcesPath = t.imageResourcesPath, this.renderInteractiveForms = t.renderInteractiveForms, this.svgFactory = t.svgFactory, n && (this.container = this._createContainer(r))
				}
				return a(e, [{
					key: "_createContainer",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
							t = this.data,
							n = this.page,
							r = this.viewport,
							i = document.createElement("section"),
							o = t.rect[2] - t.rect[0],
							a = t.rect[3] - t.rect[1];
						i.setAttribute("data-annotation-id", t.id);
						var u = l.Util.normalizeRect([t.rect[0], n.view[3] - t.rect[1] + n.view[1], t.rect[2], n.view[3] - t.rect[3] + n.view[1]]);
						if (s.CustomStyle.setProp("transform", i, "matrix(" + r.transform.join(",") + ")"), s.CustomStyle.setProp("transformOrigin", i, -u[0] + "px " + -u[1] + "px"), !e && t.borderStyle.width > 0) {
							i.style.borderWidth = t.borderStyle.width + "px", t.borderStyle.style !== l.AnnotationBorderStyleType.UNDERLINE && (o -= 2 * t.borderStyle.width, a -= 2 * t.borderStyle.width);
							var c = t.borderStyle.horizontalCornerRadius,
								d = t.borderStyle.verticalCornerRadius;
							if (c > 0 || d > 0) {
								var h = c + "px / " + d + "px";
								s.CustomStyle.setProp("borderRadius", i, h)
							}
							switch (t.borderStyle.style) {
							case l.AnnotationBorderStyleType.SOLID:
								i.style.borderStyle = "solid";
								break;
							case l.AnnotationBorderStyleType.DASHED:
								i.style.borderStyle = "dashed";
								break;
							case l.AnnotationBorderStyleType.BEVELED:
								(0, l.warn)("Unimplemented border style: beveled");
								break;
							case l.AnnotationBorderStyleType.INSET:
								(0, l.warn)("Unimplemented border style: inset");
								break;
							case l.AnnotationBorderStyleType.UNDERLINE:
								i.style.borderBottomStyle = "solid"
							}
							t.color ? i.style.borderColor = l.Util.makeCssRgb(0 | t.color[0], 0 | t.color[1], 0 | t.color[2]) : i.style.borderWidth = 0
						}
						return i.style.left = u[0] + "px", i.style.top = u[1] + "px", i.style.width = o + "px", i.style.height = a + "px", i
					}
				}, {
					key: "_createPopup",
					value: function(e, t, n) {
						t || (t = document.createElement("div"), t.style.height = e.style.height, t.style.width = e.style.width, e.appendChild(t));
						var r = new y({
							container: e,
							trigger: t,
							color: n.color,
							title: n.title,
							contents: n.contents,
							hideWrapper: !0
						}),
							i = r.render();
						i.style.left = e.style.width, e.appendChild(i)
					}
				}, {
					key: "render",
					value: function() {
						throw new Error("Abstract method `AnnotationElement.render` called")
					}
				}]), e
			}(),
			d = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.url || e.data.dest || e.data.action);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "linkAnnotation";
						var e = document.createElement("a");
						return (0, s.addLinkAttributes)(e, {
							url: this.data.url,
							target: this.data.newWindow ? s.LinkTarget.BLANK : void 0
						}), this.data.url || (this.data.action ? this._bindNamedAction(e, this.data.action) : this._bindLink(e, this.data.dest)), this.container.appendChild(e), this.container
					}
				}, {
					key: "_bindLink",
					value: function(e, t) {
						var n = this;
						e.href = this.linkService.getDestinationHash(t), e.onclick = function() {
							return t && n.linkService.navigateTo(t), !1
						}, t && (e.className = "internalLink")
					}
				}, {
					key: "_bindNamedAction",
					value: function(e, t) {
						var n = this;
						e.href = this.linkService.getAnchorUrl(""), e.onclick = function() {
							return n.linkService.executeNamedAction(t), !1
						}, e.className = "internalLink"
					}
				}]), t
			}(c),
			h = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "textAnnotation";
						var e = document.createElement("img");
						return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.src = this.imageResourcesPath + "annotation-" + this.data.name.toLowerCase() + ".svg", e.alt = "[{{type}} Annotation]", e.dataset.l10nId = "text_annotation_type", e.dataset.l10nArgs = JSON.stringify({
							type: this.data.name
						}), this.data.hasPopup || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
					}
				}]), t
			}(c),
			f = function(e) {
				function t() {
					return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container
					}
				}]), t
			}(c),
			p = function(e) {
				function t(e) {
					o(this, t);
					var n = e.renderInteractiveForms || !e.data.hasAppearance && !! e.data.fieldValue;
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						var e = ["left", "center", "right"];
						this.container.className = "textWidgetAnnotation";
						var t = null;
						if (this.renderInteractiveForms) {
							if (this.data.multiLine ? (t = document.createElement("textarea"), t.textContent = this.data.fieldValue) : (t = document.createElement("input"), t.type = "text", t.setAttribute("value", this.data.fieldValue)), t.disabled = this.data.readOnly, null !== this.data.maxLen && (t.maxLength = this.data.maxLen), this.data.comb) {
								var n = this.data.rect[2] - this.data.rect[0],
									r = n / this.data.maxLen;
								t.classList.add("comb"), t.style.letterSpacing = "calc(" + r + "px - 1ch)"
							}
						} else {
							t = document.createElement("div"), t.textContent = this.data.fieldValue, t.style.verticalAlign = "middle", t.style.display = "table-cell";
							var i = null;
							this.data.fontRefName && (i = this.page.commonObjs.getData(this.data.fontRefName)), this._setTextStyle(t, i)
						}
						return null !== this.data.textAlignment && (t.style.textAlign = e[this.data.textAlignment]), this.container.appendChild(t), this.container
					}
				}, {
					key: "_setTextStyle",
					value: function(e, t) {
						var n = e.style;
						if (n.fontSize = this.data.fontSize + "px", n.direction = this.data.fontDirection < 0 ? "rtl" : "ltr", t) {
							n.fontWeight = t.black ? t.bold ? "900" : "bold" : t.bold ? "bold" : "normal", n.fontStyle = t.italic ? "italic" : "normal";
							var r = t.loadedName ? '"' + t.loadedName + '", ' : "",
								i = t.fallbackName || "Helvetica, sans-serif";
							n.fontFamily = r + i
						}
					}
				}]), t
			}(f),
			g = function(e) {
				function t(e) {
					return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "buttonWidgetAnnotation checkBox";
						var e = document.createElement("input");
						return e.disabled = this.data.readOnly, e.type = "checkbox", this.data.fieldValue && "Off" !== this.data.fieldValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
					}
				}]), t
			}(f),
			v = function(e) {
				function t(e) {
					return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "buttonWidgetAnnotation radioButton";
						var e = document.createElement("input");
						return e.disabled = this.data.readOnly, e.type = "radio", e.name = this.data.fieldName, this.data.fieldValue === this.data.buttonValue && e.setAttribute("checked", !0), this.container.appendChild(e), this.container
					}
				}]), t
			}(f),
			m = function(e) {
				function t(e) {
					return o(this, t), r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, e.renderInteractiveForms))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "choiceWidgetAnnotation";
						var e = document.createElement("select");
						e.disabled = this.data.readOnly, this.data.combo || (e.size = this.data.options.length, this.data.multiSelect && (e.multiple = !0));
						for (var t = 0, n = this.data.options.length; n > t; t++) {
							var r = this.data.options[t],
								i = document.createElement("option");
							i.textContent = r.displayValue, i.value = r.exportValue, this.data.fieldValue.indexOf(r.displayValue) >= 0 && i.setAttribute("selected", !0), e.appendChild(i)
						}
						return this.container.appendChild(e), this.container
					}
				}]), t
			}(f),
			b = function(e) {
				function t(e) {
					o(this, t);
					var n = !(!e.data.title && !e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						var e = ["Line", "Square", "Circle", "PolyLine", "Polygon"];
						if (this.container.className = "popupAnnotation", e.indexOf(this.data.parentType) >= 0) return this.container;
						var t = '[data-annotation-id="' + this.data.parentId + '"]',
							n = this.layer.querySelector(t);
						if (!n) return this.container;
						var r = new y({
							container: this.container,
							trigger: n,
							color: this.data.color,
							title: this.data.title,
							contents: this.data.contents
						}),
							i = parseFloat(n.style.left),
							o = parseFloat(n.style.width);
						return s.CustomStyle.setProp("transformOrigin", this.container, -(i + o) + "px -" + n.style.top), this.container.style.left = i + o + "px", this.container.appendChild(r.render()), this.container
					}
				}]), t
			}(c),
			y = function() {
				function e(t) {
					o(this, e), this.container = t.container, this.trigger = t.trigger, this.color = t.color, this.title = t.title, this.contents = t.contents, this.hideWrapper = t.hideWrapper || !1, this.pinned = !1
				}
				return a(e, [{
					key: "render",
					value: function() {
						var e = .7,
							t = document.createElement("div");
						t.className = "popupWrapper", this.hideElement = this.hideWrapper ? t : this.container, this.hideElement.setAttribute("hidden", !0);
						var n = document.createElement("div");
						n.className = "popup";
						var r = this.color;
						if (r) {
							var i = e * (255 - r[0]) + r[0],
								o = e * (255 - r[1]) + r[1],
								a = e * (255 - r[2]) + r[2];
							n.style.backgroundColor = l.Util.makeCssRgb(0 | i, 0 | o, 0 | a)
						}
						var s = this._formatContents(this.contents),
							u = document.createElement("h1");
						return u.textContent = this.title, this.trigger.addEventListener("click", this._toggle.bind(this)), this.trigger.addEventListener("mouseover", this._show.bind(this, !1)), this.trigger.addEventListener("mouseout", this._hide.bind(this, !1)), n.addEventListener("click", this._hide.bind(this, !0)), n.appendChild(u), n.appendChild(s), t.appendChild(n), t
					}
				}, {
					key: "_formatContents",
					value: function(e) {
						for (var t = document.createElement("p"), n = e.split(/(?:\r\n?|\n)/), r = 0, i = n.length; i > r; ++r) {
							var o = n[r];
							t.appendChild(document.createTextNode(o)), i - 1 > r && t.appendChild(document.createElement("br"))
						}
						return t
					}
				}, {
					key: "_toggle",
					value: function() {
						this.pinned ? this._hide(!0) : this._show(!0)
					}
				}, {
					key: "_show",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
						e && (this.pinned = !0), this.hideElement.hasAttribute("hidden") && (this.hideElement.removeAttribute("hidden"), this.container.style.zIndex += 1)
					}
				}, {
					key: "_hide",
					value: function() {
						var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !0;
						e && (this.pinned = !1), this.hideElement.hasAttribute("hidden") || this.pinned || (this.hideElement.setAttribute("hidden", !0), this.container.style.zIndex -= 1)
					}
				}]), e
			}(),
			_ = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "lineAnnotation";
						var e = this.data,
							t = e.rect[2] - e.rect[0],
							n = e.rect[3] - e.rect[1],
							r = this.svgFactory.create(t, n),
							i = this.svgFactory.createElement("svg:line");
						return i.setAttribute("x1", e.rect[2] - e.lineCoordinates[0]), i.setAttribute("y1", e.rect[3] - e.lineCoordinates[1]), i.setAttribute("x2", e.rect[2] - e.lineCoordinates[2]), i.setAttribute("y2", e.rect[3] - e.lineCoordinates[3]), i.setAttribute("stroke-width", e.borderStyle.width), i.setAttribute("stroke", "transparent"), r.appendChild(i), this.container.append(r), this._createPopup(this.container, i, e), this.container
					}
				}]), t
			}(c),
			w = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "squareAnnotation";
						var e = this.data,
							t = e.rect[2] - e.rect[0],
							n = e.rect[3] - e.rect[1],
							r = this.svgFactory.create(t, n),
							i = e.borderStyle.width,
							o = this.svgFactory.createElement("svg:rect");
						return o.setAttribute("x", i / 2), o.setAttribute("y", i / 2), o.setAttribute("width", t - i), o.setAttribute("height", n - i), o.setAttribute("stroke-width", i), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "none"), r.appendChild(o), this.container.append(r), this._createPopup(this.container, o, e), this.container
					}
				}]), t
			}(c),
			S = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "circleAnnotation";
						var e = this.data,
							t = e.rect[2] - e.rect[0],
							n = e.rect[3] - e.rect[1],
							r = this.svgFactory.create(t, n),
							i = e.borderStyle.width,
							o = this.svgFactory.createElement("svg:ellipse");
						return o.setAttribute("cx", t / 2), o.setAttribute("cy", n / 2), o.setAttribute("rx", t / 2 - i / 2), o.setAttribute("ry", n / 2 - i / 2), o.setAttribute("stroke-width", i), o.setAttribute("stroke", "transparent"), o.setAttribute("fill", "none"), r.appendChild(o), this.container.append(r), this._createPopup(this.container, o, e), this.container
					}
				}]), t
			}(c),
			P = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents),
						i = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0));
					return i.containerClassName = "polylineAnnotation", i.svgElementName = "svg:polyline", i
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = this.containerClassName;
						for (var e = this.data, t = e.rect[2] - e.rect[0], n = e.rect[3] - e.rect[1], r = this.svgFactory.create(t, n), i = e.vertices, o = [], a = 0, s = i.length; s > a; a++) {
							var l = i[a].x - e.rect[0],
								u = e.rect[3] - i[a].y;
							o.push(l + "," + u)
						}
						o = o.join(" ");
						var c = e.borderStyle.width,
							d = this.svgFactory.createElement(this.svgElementName);
						return d.setAttribute("points", o), d.setAttribute("stroke-width", c), d.setAttribute("stroke", "transparent"), d.setAttribute("fill", "none"), r.appendChild(d), this.container.append(r), this._createPopup(this.container, d, e), this.container
					}
				}]), t
			}(c),
			x = function(e) {
				function t(e) {
					o(this, t);
					var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return n.containerClassName = "polygonAnnotation", n.svgElementName = "svg:polygon", n
				}
				return i(t, e), t
			}(P),
			C = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container.className = "highlightAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
					}
				}]), t
			}(c),
			A = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container.className = "underlineAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
					}
				}]), t
			}(c),
			k = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container.className = "squigglyAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
					}
				}]), t
			}(c),
			T = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container.className = "strikeoutAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
					}
				}]), t
			}(c),
			E = function(e) {
				function t(e) {
					o(this, t);
					var n = !! (e.data.hasPopup || e.data.title || e.data.contents);
					return r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, n, !0))
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						return this.container.className = "stampAnnotation", this.data.hasPopup || this._createPopup(this.container, null, this.data), this.container
					}
				}]), t
			}(c),
			L = function(e) {
				function t(e) {
					o(this, t);
					var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e, !0)),
						i = n.data.file;
					return n.filename = (0, s.getFilenameFromUrl)(i.filename), n.content = i.content, n.linkService.onFileAttachmentAnnotation({
						id: (0, l.stringToPDFString)(i.filename),
						filename: i.filename,
						content: i.content
					}), n
				}
				return i(t, e), a(t, [{
					key: "render",
					value: function() {
						this.container.className = "fileAttachmentAnnotation";
						var e = document.createElement("div");
						return e.style.height = this.container.style.height, e.style.width = this.container.style.width, e.addEventListener("dblclick", this._download.bind(this)), this.data.hasPopup || !this.data.title && !this.data.contents || this._createPopup(this.container, e, this.data), this.container.appendChild(e), this.container
					}
				}, {
					key: "_download",
					value: function() {
						return this.downloadManager ? void this.downloadManager.downloadData(this.content, this.filename, "") : void(0, l.warn)("Download cannot be started due to unavailable download manager")
					}
				}]), t
			}(c),
			I = function() {
				function e() {
					o(this, e)
				}
				return a(e, null, [{
					key: "render",
					value: function(e) {
						for (var t = 0, n = e.annotations.length; n > t; t++) {
							var r = e.annotations[t];
							if (r) {
								var i = u.create({
									data: r,
									layer: e.div,
									page: e.page,
									viewport: e.viewport,
									linkService: e.linkService,
									downloadManager: e.downloadManager,
									imageResourcesPath: e.imageResourcesPath || (0, s.getDefaultSetting)("imageResourcesPath"),
									renderInteractiveForms: e.renderInteractiveForms || !1,
									svgFactory: new s.DOMSVGFactory
								});
								i.isRenderable && e.div.appendChild(i.render())
							}
						}
					}
				}, {
					key: "update",
					value: function(e) {
						for (var t = 0, n = e.annotations.length; n > t; t++) {
							var r = e.annotations[t],
								i = e.div.querySelector('[data-annotation-id="' + r.id + '"]');
							i && s.CustomStyle.setProp("transform", i, "matrix(" + e.viewport.transform.join(",") + ")")
						}
						e.div.removeAttribute("hidden")
					}
				}]), e
			}();
		t.AnnotationLayer = I
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.renderTextLayer = void 0;
		var r = n(0),
			i = n(8),
			o = function() {
				function e(e) {
					return !d.test(e)
				}
				function t(t, n, o) {
					var a = document.createElement("div"),
						s = {
							style: null,
							angle: 0,
							canvasWidth: 0,
							isWhitespace: !1,
							originalTransform: null,
							paddingBottom: 0,
							paddingLeft: 0,
							paddingRight: 0,
							paddingTop: 0,
							scale: 1
						};
					if (t._textDivs.push(a), e(n.str)) return s.isWhitespace = !0, void t._textDivProperties.set(a, s);
					var l = r.Util.transform(t._viewport.transform, n.transform),
						u = Math.atan2(l[1], l[0]),
						c = o[n.fontName];
					c.vertical && (u += Math.PI / 2);
					var d = Math.sqrt(l[2] * l[2] + l[3] * l[3]),
						f = d;
					c.ascent ? f = c.ascent * f : c.descent && (f = (1 + c.descent) * f);
					var p, g;
					if (0 === u ? (p = l[4], g = l[5] - f) : (p = l[4] + f * Math.sin(u), g = l[5] - f * Math.cos(u)), h[1] = p, h[3] = g, h[5] = d, h[7] = c.fontFamily, s.style = h.join(""), a.setAttribute("style", s.style), a.textContent = n.str, (0, i.getDefaultSetting)("pdfBug") && (a.dataset.fontName = n.fontName), 0 !== u && (s.angle = u * (180 / Math.PI)), n.str.length > 1 && (c.vertical ? s.canvasWidth = n.height * t._viewport.scale : s.canvasWidth = n.width * t._viewport.scale), t._textDivProperties.set(a, s), t._textContentStream && t._layoutText(a), t._enhanceTextSelection) {
						var v = 1,
							m = 0;
						0 !== u && (v = Math.cos(u), m = Math.sin(u));
						var b, y, _ = (c.vertical ? n.height : n.width) * t._viewport.scale,
							w = d;
						0 !== u ? (b = [v, m, -m, v, p, g], y = r.Util.getAxialAlignedBoundingBox([0, 0, _, w], b)) : y = [p, g, p + _, g + w], t._bounds.push({
							left: y[0],
							top: y[1],
							right: y[2],
							bottom: y[3],
							div: a,
							size: [_, w],
							m: b
						})
					}
				}
				function n(e) {
					if (!e._canceled) {
						var t = e._textDivs,
							n = e._capability,
							r = t.length;
						if (r > c) return e._renderingDone = !0, void n.resolve();
						if (!e._textContentStream) for (var i = 0; r > i; i++) e._layoutText(t[i]);
						e._renderingDone = !0, n.resolve()
					}
				}
				function o(e) {
					for (var t = e._bounds, n = e._viewport, i = a(n.width, n.height, t), o = 0; o < i.length; o++) {
						var s = t[o].div,
							l = e._textDivProperties.get(s);
						if (0 !== l.angle) {
							var u = i[o],
								c = t[o],
								d = c.m,
								h = d[0],
								f = d[1],
								p = [
									[0, 0],
									[0, c.size[1]],
									[c.size[0], 0], c.size],
								g = new Float64Array(64);
							p.forEach(function(e, t) {
								var n = r.Util.applyTransform(e, d);
								g[t + 0] = h && (u.left - n[0]) / h, g[t + 4] = f && (u.top - n[1]) / f, g[t + 8] = h && (u.right - n[0]) / h, g[t + 12] = f && (u.bottom - n[1]) / f, g[t + 16] = f && (u.left - n[0]) / -f, g[t + 20] = h && (u.top - n[1]) / h, g[t + 24] = f && (u.right - n[0]) / -f, g[t + 28] = h && (u.bottom - n[1]) / h, g[t + 32] = h && (u.left - n[0]) / -h, g[t + 36] = f && (u.top - n[1]) / -f, g[t + 40] = h && (u.right - n[0]) / -h, g[t + 44] = f && (u.bottom - n[1]) / -f, g[t + 48] = f && (u.left - n[0]) / f, g[t + 52] = h && (u.top - n[1]) / -h, g[t + 56] = f && (u.right - n[0]) / f, g[t + 60] = h && (u.bottom - n[1]) / -h
							});
							var v = function(e, t, n) {
									for (var r = 0, i = 0; n > i; i++) {
										var o = e[t++];
										o > 0 && (r = r ? Math.min(o, r) : o)
									}
									return r
								},
								m = 1 + Math.min(Math.abs(h), Math.abs(f));
							l.paddingLeft = v(g, 32, 16) / m, l.paddingTop = v(g, 48, 16) / m, l.paddingRight = v(g, 0, 16) / m, l.paddingBottom = v(g, 16, 16) / m, e._textDivProperties.set(s, l)
						} else l.paddingLeft = t[o].left - i[o].left, l.paddingTop = t[o].top - i[o].top, l.paddingRight = i[o].right - t[o].right, l.paddingBottom = i[o].bottom - t[o].bottom, e._textDivProperties.set(s, l)
					}
				}
				function a(e, t, n) {
					var r = n.map(function(e, t) {
						return {
							x1: e.left,
							y1: e.top,
							x2: e.right,
							y2: e.bottom,
							index: t,
							x1New: void 0,
							x2New: void 0
						}
					});
					s(e, r);
					var i = new Array(n.length);
					return r.forEach(function(e) {
						var t = e.index;
						i[t] = {
							left: e.x1New,
							top: 0,
							right: e.x2New,
							bottom: 0
						}
					}), n.map(function(t, n) {
						var o = i[n],
							a = r[n];
						a.x1 = t.top, a.y1 = e - o.right, a.x2 = t.bottom, a.y2 = e - o.left, a.index = n, a.x1New = void 0, a.x2New = void 0
					}), s(t, r), r.forEach(function(e) {
						var t = e.index;
						i[t].top = e.x1New, i[t].bottom = e.x2New
					}), i
				}
				function s(e, t) {
					t.sort(function(e, t) {
						return e.x1 - t.x1 || e.index - t.index
					});
					var n = {
						x1: -(1 / 0),
						y1: -(1 / 0),
						x2: 0,
						y2: 1 / 0,
						index: -1,
						x1New: 0,
						x2New: 0
					},
						r = [{
							start: -(1 / 0),
							end: 1 / 0,
							boundary: n
						}];
					t.forEach(function(e) {
						for (var t = 0; t < r.length && r[t].end <= e.y1;) t++;
						for (var n = r.length - 1; n >= 0 && r[n].start >= e.y2;) n--;
						var i, o, a, s, l = -(1 / 0);
						for (a = t; n >= a; a++) {
							i = r[a], o = i.boundary;
							var u;
							u = o.x2 > e.x1 ? o.index > e.index ? o.x1New : e.x1 : void 0 === o.x2New ? (o.x2 + e.x1) / 2 : o.x2New, u > l && (l = u)
						}
						for (e.x1New = l, a = t; n >= a; a++) i = r[a], o = i.boundary, void 0 === o.x2New ? o.x2 > e.x1 ? o.index > e.index && (o.x2New = o.x2) : o.x2New = l : o.x2New > l && (o.x2New = Math.max(l, o.x2));
						var c = [],
							d = null;
						for (a = t; n >= a; a++) {
							i = r[a], o = i.boundary;
							var h = o.x2 > e.x2 ? o : e;
							d === h ? c[c.length - 1].end = i.end : (c.push({
								start: i.start,
								end: i.end,
								boundary: h
							}), d = h)
						}
						for (r[t].start < e.y1 && (c[0].start = e.y1, c.unshift({
							start: r[t].start,
							end: e.y1,
							boundary: r[t].boundary
						})), e.y2 < r[n].end && (c[c.length - 1].end = e.y2, c.push({
							start: e.y2,
							end: r[n].end,
							boundary: r[n].boundary
						})), a = t; n >= a; a++) if (i = r[a], o = i.boundary, void 0 === o.x2New) {
							var f = !1;
							for (s = t - 1; !f && s >= 0 && r[s].start >= o.y1; s--) f = r[s].boundary === o;
							for (s = n + 1; !f && s < r.length && r[s].end <= o.y2; s++) f = r[s].boundary === o;
							for (s = 0; !f && s < c.length; s++) f = c[s].boundary === o;
							f || (o.x2New = l)
						}
						Array.prototype.splice.apply(r, [t, n - t + 1].concat(c))
					}), r.forEach(function(t) {
						var n = t.boundary;
						void 0 === n.x2New && (n.x2New = Math.max(e, n.x2))
					})
				}
				function l(e) {
					var t = e.textContent,
						n = e.textContentStream,
						i = e.container,
						o = e.viewport,
						a = e.textDivs,
						s = e.textContentItemsStr,
						l = e.enhanceTextSelection;
					this._textContent = t, this._textContentStream = n, this._container = i, this._viewport = o, this._textDivs = a || [], this._textContentItemsStr = s || [], this._enhanceTextSelection = !! l, this._reader = null, this._layoutTextLastFontSize = null, this._layoutTextLastFontFamily = null, this._layoutTextCtx = null, this._textDivProperties = new WeakMap, this._renderingDone = !1, this._canceled = !1, this._capability = (0, r.createPromiseCapability)(), this._renderTimer = null, this._bounds = []
				}
				function u(e) {
					var t = new l({
						textContent: e.textContent,
						textContentStream: e.textContentStream,
						container: e.container,
						viewport: e.viewport,
						textDivs: e.textDivs,
						textContentItemsStr: e.textContentItemsStr,
						enhanceTextSelection: e.enhanceTextSelection
					});
					return t._render(e.timeout), t
				}
				var c = 1e5,
					d = /\S/,
					h = ["left: ", 0, "px; top: ", 0, "px; font-size: ", 0, "px; font-family: ", "", ";"];
				return l.prototype = {
					get promise() {
						return this._capability.promise
					}, cancel: function() {
						this._reader && (this._reader.cancel(new r.AbortException("text layer task cancelled")), this._reader = null), this._canceled = !0, null !== this._renderTimer && (clearTimeout(this._renderTimer), this._renderTimer = null), this._capability.reject("canceled")
					},
					_processItems: function(e, n) {
						for (var r = 0, i = e.length; i > r; r++) this._textContentItemsStr.push(e[r].str), t(this, e[r], n)
					},
					_layoutText: function(e) {
						var t = this._container,
							n = this._textDivProperties.get(e);
						if (!n.isWhitespace) {
							var r = e.style.fontSize,
								o = e.style.fontFamily;
							(r !== this._layoutTextLastFontSize || o !== this._layoutTextLastFontFamily) && (this._layoutTextCtx.font = r + " " + o, this._lastFontSize = r, this._lastFontFamily = o);
							var a = this._layoutTextCtx.measureText(e.textContent).width,
								s = "";
							0 !== n.canvasWidth && a > 0 && (n.scale = n.canvasWidth / a, s = "scaleX(" + n.scale + ")"), 0 !== n.angle && (s = "rotate(" + n.angle + "deg) " + s), "" !== s && (n.originalTransform = s, i.CustomStyle.setProp("transform", e, s)), this._textDivProperties.set(e, n), t.appendChild(e)
						}
					},
					_render: function(e) {
						var t = this,
							i = (0, r.createPromiseCapability)(),
							o = Object.create(null),
							a = document.createElement("canvas");
						if (a.mozOpaque = !0, this._layoutTextCtx = a.getContext("2d", {
							alpha: !1
						}), this._textContent) {
							var s = this._textContent.items,
								l = this._textContent.styles;
							this._processItems(s, l), i.resolve()
						} else {
							if (!this._textContentStream) throw new Error('Neither "textContent" nor "textContentStream" parameters specified.');
							var u = function c() {
									t._reader.read().then(function(e) {
										var n = e.value,
											a = e.done;
										return a ? void i.resolve() : (r.Util.extendObj(o, n.styles), t._processItems(n.items, o), void c())
									}, i.reject)
								};
							this._reader = this._textContentStream.getReader(), u()
						}
						i.promise.then(function() {
							o = null, e ? t._renderTimer = setTimeout(function() {
								n(t), t._renderTimer = null
							}, e) : n(t)
						}, this._capability.reject)
					},
					expandTextDivs: function(e) {
						if (this._enhanceTextSelection && this._renderingDone) {
							null !== this._bounds && (o(this), this._bounds = null);
							for (var t = 0, n = this._textDivs.length; n > t; t++) {
								var r = this._textDivs[t],
									a = this._textDivProperties.get(r);
								if (!a.isWhitespace) if (e) {
									var s = "",
										l = "";
									1 !== a.scale && (s = "scaleX(" + a.scale + ")"), 0 !== a.angle && (s = "rotate(" + a.angle + "deg) " + s), 0 !== a.paddingLeft && (l += " padding-left: " + a.paddingLeft / a.scale + "px;", s += " translateX(" + -a.paddingLeft / a.scale + "px)"), 0 !== a.paddingTop && (l += " padding-top: " + a.paddingTop + "px;", s += " translateY(" + -a.paddingTop + "px)"), 0 !== a.paddingRight && (l += " padding-right: " + a.paddingRight / a.scale + "px;"), 0 !== a.paddingBottom && (l += " padding-bottom: " + a.paddingBottom + "px;"), "" !== l && r.setAttribute("style", a.style + l), "" !== s && i.CustomStyle.setProp("transform", r, s)
								} else r.style.padding = 0, i.CustomStyle.setProp("transform", r, a.originalTransform || "")
							}
						}
					}
				}, u
			}();
		t.renderTextLayer = o
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.SVGGraphics = void 0;
		var r = n(0),
			i = n(8),
			o = function() {
				throw new Error("Not implemented: SVGGraphics")
			},
			a = {
				fontStyle: "normal",
				fontWeight: "normal",
				fillColor: "#000000"
			},
			s = function() {
				function e(e, t, n) {
					for (var r = -1, i = t; n > i; i++) {
						var o = 255 & (r ^ e[i]),
							a = u[o];
						r = r >>> 8 ^ a
					}
					return -1 ^ r
				}
				function t(t, n, r, i) {
					var o = i,
						a = n.length;
					r[o] = a >> 24 & 255, r[o + 1] = a >> 16 & 255, r[o + 2] = a >> 8 & 255, r[o + 3] = 255 & a, o += 4, r[o] = 255 & t.charCodeAt(0), r[o + 1] = 255 & t.charCodeAt(1), r[o + 2] = 255 & t.charCodeAt(2), r[o + 3] = 255 & t.charCodeAt(3), o += 4, r.set(n, o), o += n.length;
					var s = e(r, i + 4, o);
					r[o] = s >> 24 & 255, r[o + 1] = s >> 16 & 255, r[o + 2] = s >> 8 & 255, r[o + 3] = 255 & s
				}
				function n(e, t, n) {
					for (var r = 1, i = 0, o = t; n > o; ++o) r = (r + (255 & e[o])) % 65521, i = (i + r) % 65521;
					return i << 16 | r
				}
				function i(e) {
					if (!(0, r.isNodeJS)()) return o(e);
					try {
						var t;
						t = parseInt(process.versions.node) >= 8 ? e : new Buffer(e);
						var n = require("zlib").deflateSync(t, {
							level: 9
						});
						return n instanceof Uint8Array ? n : new Uint8Array(n)
					} catch (i) {
						(0, r.warn)("Not compressing PNG because zlib.deflateSync is unavailable: " + i)
					}
					return o(e)
				}
				function o(e) {
					var t = e.length,
						r = 65535,
						i = Math.ceil(t / r),
						o = new Uint8Array(2 + t + 5 * i + 4),
						a = 0;
					o[a++] = 120, o[a++] = 156;
					for (var s = 0; t > r;) o[a++] = 0, o[a++] = 255, o[a++] = 255, o[a++] = 0, o[a++] = 0, o.set(e.subarray(s, s + r), a), a += r, s += r, t -= r;
					o[a++] = 1, o[a++] = 255 & t, o[a++] = t >> 8 & 255, o[a++] = 65535 & ~t & 255, o[a++] = (65535 & ~t) >> 8 & 255, o.set(e.subarray(s), a), a += e.length - s;
					var l = n(e, 0, e.length);
					return o[a++] = l >> 24 & 255, o[a++] = l >> 16 & 255, o[a++] = l >> 8 & 255, o[a++] = 255 & l, o
				}
				function a(e, n, o) {
					var a, u, c, d = e.width,
						h = e.height,
						f = e.data;
					switch (n) {
					case r.ImageKind.GRAYSCALE_1BPP:
						u = 0, a = 1, c = d + 7 >> 3;
						break;
					case r.ImageKind.RGB_24BPP:
						u = 2, a = 8, c = 3 * d;
						break;
					case r.ImageKind.RGBA_32BPP:
						u = 6, a = 8, c = 4 * d;
						break;
					default:
						throw new Error("invalid format")
					}
					var p, g, v = new Uint8Array((1 + c) * h),
						m = 0,
						b = 0;
					for (p = 0; h > p; ++p) v[m++] = 0, v.set(f.subarray(b, b + c), m), b += c, m += c;
					if (n === r.ImageKind.GRAYSCALE_1BPP) for (m = 0, p = 0; h > p; p++) for (m++, g = 0; c > g; g++) v[m++] ^= 255;
					var y = new Uint8Array([d >> 24 & 255, d >> 16 & 255, d >> 8 & 255, 255 & d, h >> 24 & 255, h >> 16 & 255, h >> 8 & 255, 255 & h, a, u, 0, 0, 0]),
						_ = i(v),
						w = s.length + 3 * l + y.length + _.length,
						S = new Uint8Array(w),
						P = 0;
					return S.set(s, P), P += s.length, t("IHDR", y, S, P), P += l + y.length, t("IDATA", _, S, P), P += l + _.length, t("IEND", new Uint8Array(0), S, P), (0, r.createObjectURL)(S, "image/png", o)
				}
				for (var s = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]), l = 12, u = new Int32Array(256), c = 0; 256 > c; c++) {
					for (var d = c, h = 0; 8 > h; h++) d = 1 & d ? 3988292384 ^ d >> 1 & 2147483647 : d >> 1 & 2147483647;
					u[c] = d
				}
				return function(e, t) {
					var n = void 0 === e.kind ? r.ImageKind.GRAYSCALE_1BPP : e.kind;
					return a(e, n, t)
				}
			}(),
			l = function() {
				function e() {
					this.fontSizeScale = 1, this.fontWeight = a.fontWeight, this.fontSize = 0, this.textMatrix = r.IDENTITY_MATRIX, this.fontMatrix = r.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRise = 0, this.fillColor = a.fillColor, this.strokeColor = "#000000", this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.lineJoin = "", this.lineCap = "", this.miterLimit = 0, this.dashArray = [], this.dashPhase = 0, this.dependencies = [], this.activeClipUrl = null, this.clipGroup = null, this.maskId = ""
				}
				return e.prototype = {
					clone: function() {
						return Object.create(this)
					},
					setCurrentPoint: function(e, t) {
						this.x = e, this.y = t
					}
				}, e
			}();
		t.SVGGraphics = o = function() {
			function e(e) {
				for (var t = [], n = [], r = e.length, i = 0; r > i; i++)"save" !== e[i].fn ? "restore" === e[i].fn ? t = n.pop() : t.push(e[i]) : (t.push({
					fnId: 92,
					fn: "group",
					items: []
				}), n.push(t), t = t[t.length - 1].items);
				return t
			}
			function t(e) {
				if (Number.isInteger(e)) return e.toString();
				var t = e.toFixed(10),
					n = t.length - 1;
				if ("0" !== t[n]) return t;
				do n--;
				while ("0" === t[n]);
				return t.substr(0, "." === t[n] ? n : n + 1)
			}
			function n(e) {
				if (0 === e[4] && 0 === e[5]) {
					if (0 === e[1] && 0 === e[2]) return 1 === e[0] && 1 === e[3] ? "" : "scale(" + t(e[0]) + " " + t(e[3]) + ")";
					if (e[0] === e[3] && e[1] === -e[2]) {
						var n = 180 * Math.acos(e[0]) / Math.PI;
						return "rotate(" + t(n) + ")"
					}
				} else if (1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3]) return "translate(" + t(e[4]) + " " + t(e[5]) + ")";
				return "matrix(" + t(e[0]) + " " + t(e[1]) + " " + t(e[2]) + " " + t(e[3]) + " " + t(e[4]) + " " + t(e[5]) + ")"
			}
			function o(e, t, n) {
				this.svgFactory = new i.DOMSVGFactory, this.current = new l, this.transformMatrix = r.IDENTITY_MATRIX, this.transformStack = [], this.extraStack = [], this.commonObjs = e, this.objs = t, this.pendingClip = null, this.pendingEOFill = !1, this.embedFonts = !1, this.embeddedFonts = Object.create(null), this.cssStyle = null, this.forceDataSchema = !! n
			}
			var u = "http://www.w3.org/XML/1998/namespace",
				c = "http://www.w3.org/1999/xlink",
				d = ["butt", "round", "square"],
				h = ["miter", "round", "bevel"],
				f = 0,
				p = 0;
			return o.prototype = {
				save: function() {
					this.transformStack.push(this.transformMatrix);
					var e = this.current;
					this.extraStack.push(e), this.current = e.clone()
				},
				restore: function() {
					this.transformMatrix = this.transformStack.pop(), this.current = this.extraStack.pop(), this.pendingClip = null, this.tgrp = null
				},
				group: function(e) {
					this.save(), this.executeOpTree(e), this.restore()
				},
				loadDependencies: function(e) {
					for (var t = this, n = e.fnArray, i = n.length, o = e.argsArray, a = 0; i > a; a++) if (r.OPS.dependency === n[a]) for (var s = o[a], l = 0, u = s.length; u > l; l++) {
						var c, d = s[l],
							h = "g_" === d.substring(0, 2);
						c = h ? new Promise(function(e) {
							t.commonObjs.get(d, e)
						}) : new Promise(function(e) {
							t.objs.get(d, e)
						}), this.current.dependencies.push(c)
					}
					return Promise.all(this.current.dependencies)
				},
				transform: function(e, t, n, i, o, a) {
					var s = [e, t, n, i, o, a];
					this.transformMatrix = r.Util.transform(this.transformMatrix, s), this.tgrp = null
				},
				getSVG: function(e, t) {
					var n = this;
					this.viewport = t;
					var i = this._initialize(t);
					return this.loadDependencies(e).then(function() {
						n.transformMatrix = r.IDENTITY_MATRIX;
						var t = n.convertOpList(e);
						return n.executeOpTree(t), i
					})
				},
				convertOpList: function(t) {
					var n = t.argsArray,
						i = t.fnArray,
						o = i.length,
						a = [],
						s = [];
					for (var l in r.OPS) a[r.OPS[l]] = l;
					for (var u = 0; o > u; u++) {
						var c = i[u];
						s.push({
							fnId: c,
							fn: a[c],
							args: n[u]
						})
					}
					return e(s)
				},
				executeOpTree: function(e) {
					for (var t = e.length, n = 0; t > n; n++) {
						var i = e[n].fn,
							o = e[n].fnId,
							a = e[n].args;
						switch (0 | o) {
						case r.OPS.beginText:
							this.beginText();
							break;
						case r.OPS.setLeading:
							this.setLeading(a);
							break;
						case r.OPS.setLeadingMoveText:
							this.setLeadingMoveText(a[0], a[1]);
							break;
						case r.OPS.setFont:
							this.setFont(a);
							break;
						case r.OPS.showText:
							this.showText(a[0]);
							break;
						case r.OPS.showSpacedText:
							this.showText(a[0]);
							break;
						case r.OPS.endText:
							this.endText();
							break;
						case r.OPS.moveText:
							this.moveText(a[0], a[1]);
							break;
						case r.OPS.setCharSpacing:
							this.setCharSpacing(a[0]);
							break;
						case r.OPS.setWordSpacing:
							this.setWordSpacing(a[0]);
							break;
						case r.OPS.setHScale:
							this.setHScale(a[0]);
							break;
						case r.OPS.setTextMatrix:
							this.setTextMatrix(a[0], a[1], a[2], a[3], a[4], a[5]);
							break;
						case r.OPS.setTextRise:
							this.setTextRise(a[0]);
							break;
						case r.OPS.setLineWidth:
							this.setLineWidth(a[0]);
							break;
						case r.OPS.setLineJoin:
							this.setLineJoin(a[0]);
							break;
						case r.OPS.setLineCap:
							this.setLineCap(a[0]);
							break;
						case r.OPS.setMiterLimit:
							this.setMiterLimit(a[0]);
							break;
						case r.OPS.setFillRGBColor:
							this.setFillRGBColor(a[0], a[1], a[2]);
							break;
						case r.OPS.setStrokeRGBColor:
							this.setStrokeRGBColor(a[0], a[1], a[2]);
							break;
						case r.OPS.setDash:
							this.setDash(a[0], a[1]);
							break;
						case r.OPS.setGState:
							this.setGState(a[0]);
							break;
						case r.OPS.fill:
							this.fill();
							break;
						case r.OPS.eoFill:
							this.eoFill();
							break;
						case r.OPS.stroke:
							this.stroke();
							break;
						case r.OPS.fillStroke:
							this.fillStroke();
							break;
						case r.OPS.eoFillStroke:
							this.eoFillStroke();
							break;
						case r.OPS.clip:
							this.clip("nonzero");
							break;
						case r.OPS.eoClip:
							this.clip("evenodd");
							break;
						case r.OPS.paintSolidColorImageMask:
							this.paintSolidColorImageMask();
							break;
						case r.OPS.paintJpegXObject:
							this.paintJpegXObject(a[0], a[1], a[2]);
							break;
						case r.OPS.paintImageXObject:
							this.paintImageXObject(a[0]);
							break;
						case r.OPS.paintInlineImageXObject:
							this.paintInlineImageXObject(a[0]);
							break;
						case r.OPS.paintImageMaskXObject:
							this.paintImageMaskXObject(a[0]);
							break;
						case r.OPS.paintFormXObjectBegin:
							this.paintFormXObjectBegin(a[0], a[1]);
							break;
						case r.OPS.paintFormXObjectEnd:
							this.paintFormXObjectEnd();
							break;
						case r.OPS.closePath:
							this.closePath();
							break;
						case r.OPS.closeStroke:
							this.closeStroke();
							break;
						case r.OPS.closeFillStroke:
							this.closeFillStroke();
							break;
						case r.OPS.nextLine:
							this.nextLine();
							break;
						case r.OPS.transform:
							this.transform(a[0], a[1], a[2], a[3], a[4], a[5]);
							break;
						case r.OPS.constructPath:
							this.constructPath(a[0], a[1]);
							break;
						case r.OPS.endPath:
							this.endPath();
							break;
						case 92:
							this.group(e[n].items);
							break;
						default:
							(0, r.warn)("Unimplemented operator " + i)
						}
					}
				},
				setWordSpacing: function(e) {
					this.current.wordSpacing = e
				},
				setCharSpacing: function(e) {
					this.current.charSpacing = e
				},
				nextLine: function() {
					this.moveText(0, this.current.leading)
				},
				setTextMatrix: function(e, n, r, i, o, a) {
					var s = this.current;
					this.current.textMatrix = this.current.lineMatrix = [e, n, r, i, o, a], this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, s.xcoords = [], s.tspan = this.svgFactory.createElement("svg:tspan"), s.tspan.setAttributeNS(null, "font-family", s.fontFamily), s.tspan.setAttributeNS(null, "font-size", t(s.fontSize) + "px"), s.tspan.setAttributeNS(null, "y", t(-s.y)), s.txtElement = this.svgFactory.createElement("svg:text"), s.txtElement.appendChild(s.tspan)
				},
				beginText: function() {
					this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0, this.current.textMatrix = r.IDENTITY_MATRIX, this.current.lineMatrix = r.IDENTITY_MATRIX, this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.txtElement = this.svgFactory.createElement("svg:text"), this.current.txtgrp = this.svgFactory.createElement("svg:g"), this.current.xcoords = []
				},
				moveText: function(e, n) {
					var r = this.current;
					this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += n, r.xcoords = [], r.tspan = this.svgFactory.createElement("svg:tspan"), r.tspan.setAttributeNS(null, "font-family", r.fontFamily), r.tspan.setAttributeNS(null, "font-size", t(r.fontSize) + "px"), r.tspan.setAttributeNS(null, "y", t(-r.y))
				},
				showText: function(e) {
					var i = this.current,
						o = i.font,
						s = i.fontSize;
					if (0 !== s) {
						var l, c = i.charSpacing,
							d = i.wordSpacing,
							h = i.fontDirection,
							f = i.textHScale * h,
							p = e.length,
							g = o.vertical,
							v = s * i.fontMatrix[0],
							m = 0;
						for (l = 0; p > l; ++l) {
							var b = e[l];
							if (null !== b) if ((0, r.isNum)(b)) m += -b * s * .001;
							else {
								var y = b.width,
									_ = b.fontChar,
									w = (b.isSpace ? d : 0) + c,
									S = y * v + w * h;
								b.isInFont || o.missingFile ? (i.xcoords.push(i.x + m * f), i.tspan.textContent += _, m += S) : m += S
							} else m += h * d
						}
						g ? i.y -= m * f : i.x += m * f, i.tspan.setAttributeNS(null, "x", i.xcoords.map(t).join(" ")), i.tspan.setAttributeNS(null, "y", t(-i.y)), i.tspan.setAttributeNS(null, "font-family", i.fontFamily), i.tspan.setAttributeNS(null, "font-size", t(i.fontSize) + "px"), i.fontStyle !== a.fontStyle && i.tspan.setAttributeNS(null, "font-style", i.fontStyle), i.fontWeight !== a.fontWeight && i.tspan.setAttributeNS(null, "font-weight", i.fontWeight), i.fillColor !== a.fillColor && i.tspan.setAttributeNS(null, "fill", i.fillColor);
						var P = i.textMatrix;
						0 !== i.textRise && (P = P.slice(), P[5] += i.textRise), i.txtElement.setAttributeNS(null, "transform", n(P) + " scale(1, -1)"), i.txtElement.setAttributeNS(u, "xml:space", "preserve"), i.txtElement.appendChild(i.tspan), i.txtgrp.appendChild(i.txtElement), this._ensureTransformGroup().appendChild(i.txtElement)
					}
				},
				setLeadingMoveText: function(e, t) {
					this.setLeading(-t), this.moveText(e, t)
				},
				addFontStyle: function(e) {
					this.cssStyle || (this.cssStyle = this.svgFactory.createElement("svg:style"), this.cssStyle.setAttributeNS(null, "type", "text/css"), this.defs.appendChild(this.cssStyle));
					var t = (0, r.createObjectURL)(e.data, e.mimetype, this.forceDataSchema);
					this.cssStyle.textContent += '@font-face { font-family: "' + e.loadedName + '"; src: url(' + t + "); }\n"
				},
				setFont: function(e) {
					var n = this.current,
						i = this.commonObjs.get(e[0]),
						o = e[1];
					this.current.font = i, this.embedFonts && i.data && !this.embeddedFonts[i.loadedName] && (this.addFontStyle(i), this.embeddedFonts[i.loadedName] = i), n.fontMatrix = i.fontMatrix ? i.fontMatrix : r.FONT_IDENTITY_MATRIX;
					var a = i.black ? i.bold ? "bolder" : "bold" : i.bold ? "bold" : "normal",
						s = i.italic ? "italic" : "normal";
					0 > o ? (o = -o, n.fontDirection = -1) : n.fontDirection = 1, n.fontSize = o, n.fontFamily = i.loadedName, n.fontWeight = a, n.fontStyle = s, n.tspan = this.svgFactory.createElement("svg:tspan"), n.tspan.setAttributeNS(null, "y", t(-n.y)), n.xcoords = []
				},
				endText: function() {},
				setLineWidth: function(e) {
					this.current.lineWidth = e
				},
				setLineCap: function(e) {
					this.current.lineCap = d[e]
				},
				setLineJoin: function(e) {
					this.current.lineJoin = h[e]
				},
				setMiterLimit: function(e) {
					this.current.miterLimit = e
				},
				setStrokeAlpha: function(e) {
					this.current.strokeAlpha = e
				},
				setStrokeRGBColor: function(e, t, n) {
					var i = r.Util.makeCssRgb(e, t, n);
					this.current.strokeColor = i
				},
				setFillAlpha: function(e) {
					this.current.fillAlpha = e
				},
				setFillRGBColor: function(e, t, n) {
					var i = r.Util.makeCssRgb(e, t, n);
					this.current.fillColor = i, this.current.tspan = this.svgFactory.createElement("svg:tspan"), this.current.xcoords = []
				},
				setDash: function(e, t) {
					this.current.dashArray = e, this.current.dashPhase = t
				},
				constructPath: function(e, n) {
					var i = this.current,
						o = i.x,
						a = i.y;
					i.path = this.svgFactory.createElement("svg:path");
					for (var s = [], l = e.length, u = 0, c = 0; l > u; u++) switch (0 | e[u]) {
					case r.OPS.rectangle:
						o = n[c++], a = n[c++];
						var d = n[c++],
							h = n[c++],
							f = o + d,
							p = a + h;
						s.push("M", t(o), t(a), "L", t(f), t(a), "L", t(f), t(p), "L", t(o), t(p), "Z");
						break;
					case r.OPS.moveTo:
						o = n[c++], a = n[c++], s.push("M", t(o), t(a));
						break;
					case r.OPS.lineTo:
						o = n[c++], a = n[c++], s.push("L", t(o), t(a));
						break;
					case r.OPS.curveTo:
						o = n[c + 4], a = n[c + 5], s.push("C", t(n[c]), t(n[c + 1]), t(n[c + 2]), t(n[c + 3]), t(o), t(a)), c += 6;
						break;
					case r.OPS.curveTo2:
						o = n[c + 2], a = n[c + 3], s.push("C", t(o), t(a), t(n[c]), t(n[c + 1]), t(n[c + 2]), t(n[c + 3])), c += 4;
						break;
					case r.OPS.curveTo3:
						o = n[c + 2], a = n[c + 3], s.push("C", t(n[c]), t(n[c + 1]), t(o), t(a), t(o), t(a)), c += 4;
						break;
					case r.OPS.closePath:
						s.push("Z")
					}
					i.path.setAttributeNS(null, "d", s.join(" ")), i.path.setAttributeNS(null, "fill", "none"), this._ensureTransformGroup().appendChild(i.path), i.element = i.path, i.setCurrentPoint(o, a)
				},
				endPath: function() {
					if (this.pendingClip) {
						var e = this.current,
							t = "clippath" + f;
						f++;
						var r = this.svgFactory.createElement("svg:clipPath");
						r.setAttributeNS(null, "id", t), r.setAttributeNS(null, "transform", n(this.transformMatrix));
						var i = e.element.cloneNode();
						"evenodd" === this.pendingClip ? i.setAttributeNS(null, "clip-rule", "evenodd") : i.setAttributeNS(null, "clip-rule", "nonzero"), this.pendingClip = null, r.appendChild(i), this.defs.appendChild(r), e.activeClipUrl && (e.clipGroup = null, this.extraStack.forEach(function(e) {
							e.clipGroup = null
						})), e.activeClipUrl = "url(#" + t + ")", this.tgrp = null
					}
				},
				clip: function(e) {
					this.pendingClip = e
				},
				closePath: function() {
					var e = this.current,
						t = e.path.getAttributeNS(null, "d");
					t += "Z", e.path.setAttributeNS(null, "d", t)
				},
				setLeading: function(e) {
					this.current.leading = -e
				},
				setTextRise: function(e) {
					this.current.textRise = e
				},
				setHScale: function(e) {
					this.current.textHScale = e / 100
				},
				setGState: function(e) {
					for (var t = 0, n = e.length; n > t; t++) {
						var i = e[t],
							o = i[0],
							a = i[1];
						switch (o) {
						case "LW":
							this.setLineWidth(a);
							break;
						case "LC":
							this.setLineCap(a);
							break;
						case "LJ":
							this.setLineJoin(a);
							break;
						case "ML":
							this.setMiterLimit(a);
							break;
						case "D":
							this.setDash(a[0], a[1]);
							break;
						case "Font":
							this.setFont(a);
							break;
						case "CA":
							this.setStrokeAlpha(a);
							break;
						case "ca":
							this.setFillAlpha(a);
							break;
						default:
							(0, r.warn)("Unimplemented graphic state " + o)
						}
					}
				},
				fill: function() {
					var e = this.current;
					e.element.setAttributeNS(null, "fill", e.fillColor), e.element.setAttributeNS(null, "fill-opacity", e.fillAlpha)
				},
				stroke: function() {
					var e = this.current;
					e.element.setAttributeNS(null, "stroke", e.strokeColor), e.element.setAttributeNS(null, "stroke-opacity", e.strokeAlpha), e.element.setAttributeNS(null, "stroke-miterlimit", t(e.miterLimit)), e.element.setAttributeNS(null, "stroke-linecap", e.lineCap), e.element.setAttributeNS(null, "stroke-linejoin", e.lineJoin), e.element.setAttributeNS(null, "stroke-width", t(e.lineWidth) + "px"), e.element.setAttributeNS(null, "stroke-dasharray", e.dashArray.map(t).join(" ")), e.element.setAttributeNS(null, "stroke-dashoffset", t(e.dashPhase) + "px"), e.element.setAttributeNS(null, "fill", "none")
				},
				eoFill: function() {
					this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fill()
				},
				fillStroke: function() {
					this.stroke(), this.fill()
				},
				eoFillStroke: function() {
					this.current.element.setAttributeNS(null, "fill-rule", "evenodd"), this.fillStroke()
				},
				closeStroke: function() {
					this.closePath(), this.stroke()
				},
				closeFillStroke: function() {
					this.closePath(), this.fillStroke()
				},
				paintSolidColorImageMask: function() {
					var e = this.current,
						t = this.svgFactory.createElement("svg:rect");
					t.setAttributeNS(null, "x", "0"), t.setAttributeNS(null, "y", "0"), t.setAttributeNS(null, "width", "1px"), t.setAttributeNS(null, "height", "1px"), t.setAttributeNS(null, "fill", e.fillColor), this._ensureTransformGroup().appendChild(t)
				},
				paintJpegXObject: function(e, n, r) {
					var i = this.objs.get(e),
						o = this.svgFactory.createElement("svg:image");
					o.setAttributeNS(c, "xlink:href", i.src), o.setAttributeNS(null, "width", t(n)), o.setAttributeNS(null, "height", t(r)), o.setAttributeNS(null, "x", "0"), o.setAttributeNS(null, "y", t(-r)), o.setAttributeNS(null, "transform", "scale(" + t(1 / n) + " " + t(-1 / r) + ")"), this._ensureTransformGroup().appendChild(o)
				},
				paintImageXObject: function(e) {
					var t = this.objs.get(e);
					return t ? void this.paintInlineImageXObject(t) : void(0, r.warn)("Dependent image isn't ready yet")
				},
				paintInlineImageXObject: function(e, n) {
					var r = e.width,
						i = e.height,
						o = s(e, this.forceDataSchema),
						a = this.svgFactory.createElement("svg:rect");
					a.setAttributeNS(null, "x", "0"), a.setAttributeNS(null, "y", "0"), a.setAttributeNS(null, "width", t(r)), a.setAttributeNS(null, "height", t(i)), this.current.element = a, this.clip("nonzero");
					var l = this.svgFactory.createElement("svg:image");
					l.setAttributeNS(c, "xlink:href", o), l.setAttributeNS(null, "x", "0"), l.setAttributeNS(null, "y", t(-i)), l.setAttributeNS(null, "width", t(r) + "px"), l.setAttributeNS(null, "height", t(i) + "px"), l.setAttributeNS(null, "transform", "scale(" + t(1 / r) + " " + t(-1 / i) + ")"), n ? n.appendChild(l) : this._ensureTransformGroup().appendChild(l)
				},
				paintImageMaskXObject: function(e) {
					var n = this.current,
						r = e.width,
						i = e.height,
						o = n.fillColor;
					n.maskId = "mask" + p++;
					var a = this.svgFactory.createElement("svg:mask");
					a.setAttributeNS(null, "id", n.maskId);
					var s = this.svgFactory.createElement("svg:rect");
					s.setAttributeNS(null, "x", "0"), s.setAttributeNS(null, "y", "0"), s.setAttributeNS(null, "width", t(r)), s.setAttributeNS(null, "height", t(i)), s.setAttributeNS(null, "fill", o), s.setAttributeNS(null, "mask", "url(#" + n.maskId + ")"), this.defs.appendChild(a), this._ensureTransformGroup().appendChild(s), this.paintInlineImageXObject(e, a)
				},
				paintFormXObjectBegin: function(e, n) {
					if (Array.isArray(e) && 6 === e.length && this.transform(e[0], e[1], e[2], e[3], e[4], e[5]), Array.isArray(n) && 4 === n.length) {
						var r = n[2] - n[0],
							i = n[3] - n[1],
							o = this.svgFactory.createElement("svg:rect");
						o.setAttributeNS(null, "x", n[0]), o.setAttributeNS(null, "y", n[1]), o.setAttributeNS(null, "width", t(r)), o.setAttributeNS(null, "height", t(i)), this.current.element = o, this.clip("nonzero"), this.endPath()
					}
				},
				paintFormXObjectEnd: function() {},
				_initialize: function(e) {
					var t = this.svgFactory.create(e.width, e.height),
						r = this.svgFactory.createElement("svg:defs");
					t.appendChild(r), this.defs = r;
					var i = this.svgFactory.createElement("svg:g");
					return i.setAttributeNS(null, "transform", n(e.transform)), t.appendChild(i), this.svg = i, t
				},
				_ensureClipGroup: function() {
					if (!this.current.clipGroup) {
						var e = this.svgFactory.createElement("svg:g");
						e.setAttributeNS(null, "clip-path", this.current.activeClipUrl), this.svg.appendChild(e), this.current.clipGroup = e
					}
					return this.current.clipGroup
				},
				_ensureTransformGroup: function() {
					return this.tgrp || (this.tgrp = this.svgFactory.createElement("svg:g"), this.tgrp.setAttributeNS(null, "transform", n(this.transformMatrix)), this.current.activeClipUrl ? this._ensureClipGroup().appendChild(this.tgrp) : this.svg.appendChild(this.tgrp)), this.tgrp
				}
			}, o
		}(), t.SVGGraphics = o
	}, function(e, t, n) {
		"use strict";
		var r = n(0),
			i = n(113),
			o = n(57),
			a = n(61),
			s = n(60),
			l = n(8),
			u = n(62);
		if (r.isNodeJS()) {
			var c = n(118).PDFNodeStream;
			o.setPDFNetworkStreamClass(c)
		} else if ("undefined" != typeof Response && "body" in Response.prototype && "undefined" != typeof ReadableStream) {
			var d = n(119).PDFFetchStream;
			o.setPDFNetworkStreamClass(d)
		} else {
			var h = n(120).PDFNetworkStream;
			o.setPDFNetworkStreamClass(h)
		}
		t.PDFJS = i.PDFJS, t.build = o.build, t.version = o.version, t.getDocument = o.getDocument, t.LoopbackPort = o.LoopbackPort, t.PDFDataRangeTransport = o.PDFDataRangeTransport, t.PDFWorker = o.PDFWorker, t.renderTextLayer = a.renderTextLayer, t.AnnotationLayer = s.AnnotationLayer, t.CustomStyle = l.CustomStyle, t.createPromiseCapability = r.createPromiseCapability, t.PasswordResponses = r.PasswordResponses, t.InvalidPDFException = r.InvalidPDFException, t.MissingPDFException = r.MissingPDFException, t.SVGGraphics = u.SVGGraphics, t.NativeImageDecoding = r.NativeImageDecoding, t.UnexpectedResponseException = r.UnexpectedResponseException, t.OPS = r.OPS, t.UNSUPPORTED_FEATURES = r.UNSUPPORTED_FEATURES, t.createValidAbsoluteUrl = r.createValidAbsoluteUrl, t.createObjectURL = r.createObjectURL, t.removeNullCharacters = r.removeNullCharacters, t.shadow = r.shadow, t.createBlob = r.createBlob, t.RenderingCancelledException = l.RenderingCancelledException, t.getFilenameFromUrl = l.getFilenameFromUrl, t.addLinkAttributes = l.addLinkAttributes, t.StatTimer = r.StatTimer
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		if ("undefined" == typeof PDFJS || !PDFJS.compatibilityChecked) {
			var i = n(14),
				o = "undefined" != typeof navigator && navigator.userAgent || "",
				a = /Android/.test(o),
				s = /Android\s[0-2][^\d]/.test(o),
				l = /Android\s[0-4][^\d]/.test(o),
				u = o.indexOf("Chrom") >= 0,
				c = /Chrome\/(39|40)\./.test(o),
				d = o.indexOf("CriOS") >= 0,
				h = o.indexOf("Trident") >= 0,
				f = /\b(iPad|iPhone|iPod)(?=;)/.test(o),
				p = o.indexOf("Opera") >= 0,
				g = /Safari\//.test(o) && !/(Chrome\/|Android\s)/.test(o),
				v = "object" === ("undefined" == typeof window ? "undefined" : r(window)) && "object" === ("undefined" == typeof document ? "undefined" : r(document));
			"undefined" == typeof PDFJS && (i.PDFJS = {}), PDFJS.compatibilityChecked = !0, function() {
				i.URL || (i.URL = i.webkitURL)
			}(), function() {
				if ("undefined" != typeof Object.defineProperty) {
					var e = !0;
					try {
						v && Object.defineProperty(new Image, "id", {
							value: "test"
						});
						var t = function() {};
						t.prototype = {
							get id() {}
						}, Object.defineProperty(new t, "id", {
							value: "",
							configurable: !0,
							enumerable: !0,
							writable: !1
						})
					} catch (n) {
						e = !1
					}
					if (e) return
				}
				Object.defineProperty = function(e, t, n) {
					delete e[t], "get" in n && e.__defineGetter__(t, n.get), "set" in n && e.__defineSetter__(t, n.set), "value" in n && (e.__defineSetter__(t, function(e) {
						return this.__defineGetter__(t, function() {
							return e
						}), e
					}), e[t] = n.value)
				}
			}(), function() {
				if ("undefined" != typeof XMLHttpRequest) {
					var e = XMLHttpRequest.prototype,
						t = new XMLHttpRequest;
					if ("overrideMimeType" in t || Object.defineProperty(e, "overrideMimeType", {
						value: function(e) {}
					}), !("responseType" in t)) return Object.defineProperty(e, "responseType", {
						get: function() {
							return this._responseType || "text"
						},
						set: function(e) {
							("text" === e || "arraybuffer" === e) && (this._responseType = e, "arraybuffer" === e && "function" == typeof this.overrideMimeType && this.overrideMimeType("text/plain; charset=x-user-defined"))
						}
					}), "undefined" != typeof VBArray ? void Object.defineProperty(e, "response", {
						get: function() {
							return "arraybuffer" === this.responseType ? new Uint8Array(new VBArray(this.responseBody).toArray()) : this.responseText
						}
					}) : void Object.defineProperty(e, "response", {
						get: function() {
							if ("arraybuffer" !== this.responseType) return this.responseText;
							var e, t = this.responseText,
								n = t.length,
								r = new Uint8Array(n);
							for (e = 0; n > e; ++e) r[e] = 255 & t.charCodeAt(e);
							return r.buffer
						}
					})
				}
			}(), function() {
				if (!("btoa" in i)) {
					var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					i.btoa = function(t) {
						var n, r, i = "";
						for (n = 0, r = t.length; r > n; n += 3) {
							var o = 255 & t.charCodeAt(n),
								a = 255 & t.charCodeAt(n + 1),
								s = 255 & t.charCodeAt(n + 2),
								l = o >> 2,
								u = (3 & o) << 4 | a >> 4,
								c = r > n + 1 ? (15 & a) << 2 | s >> 6 : 64,
								d = r > n + 2 ? 63 & s : 64;
							i += e.charAt(l) + e.charAt(u) + e.charAt(c) + e.charAt(d)
						}
						return i
					}
				}
			}(), function() {
				if (!("atob" in i)) {
					var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					i.atob = function(t) {
						if (t = t.replace(/=+$/, ""), t.length % 4 === 1) throw new Error("bad atob input");
						for (var n, r, i = 0, o = 0, a = ""; r = t.charAt(o++);~r && (n = i % 4 ? 64 * n + r : r, i++ % 4) ? a += String.fromCharCode(255 & n >> (-2 * i & 6)) : 0) r = e.indexOf(r);
						return a
					}
				}
			}(), function() {
				"undefined" == typeof Function.prototype.bind && (Function.prototype.bind = function(e) {
					var t = this,
						n = Array.prototype.slice.call(arguments, 1),
						r = function() {
							var r = n.concat(Array.prototype.slice.call(arguments));
							return t.apply(e, r)
						};
					return r
				})
			}(), function() {
				if (v) {
					var e = document.createElement("div");
					"dataset" in e || Object.defineProperty(HTMLElement.prototype, "dataset", {
						get: function() {
							if (this._dataset) return this._dataset;
							for (var e = {}, t = 0, n = this.attributes.length; n > t; t++) {
								var r = this.attributes[t];
								if ("data-" === r.name.substring(0, 5)) {
									var i = r.name.substring(5).replace(/\-([a-z])/g, function(e, t) {
										return t.toUpperCase()
									});
									e[i] = r.value
								}
							}
							return Object.defineProperty(this, "_dataset", {
								value: e,
								writable: !1,
								enumerable: !1
							}), e
						},
						enumerable: !0
					})
				}
			}(), function() {
				function e(e, t, n, r) {
					var i = e.className || "",
						o = i.split(/\s+/g);
					"" === o[0] && o.shift();
					var a = o.indexOf(t);
					return 0 > a && n && o.push(t), a >= 0 && r && o.splice(a, 1), e.className = o.join(" "), a >= 0
				}
				if (v) {
					var t = document.createElement("div");
					if (!("classList" in t)) {
						var n = {
							add: function(t) {
								e(this.element, t, !0, !1)
							},
							contains: function(t) {
								return e(this.element, t, !1, !1)
							},
							remove: function(t) {
								e(this.element, t, !1, !0)
							},
							toggle: function(t) {
								e(this.element, t, !0, !0)
							}
						};
						Object.defineProperty(HTMLElement.prototype, "classList", {
							get: function() {
								if (this._classList) return this._classList;
								var e = Object.create(n, {
									element: {
										value: this,
										writable: !1,
										enumerable: !0
									}
								});
								return Object.defineProperty(this, "_classList", {
									value: e,
									writable: !1,
									enumerable: !1
								}), e
							},
							enumerable: !0
						})
					}
				}
			}(), function() {
				if (!("undefined" == typeof importScripts || "console" in i)) {
					var e = {},
						t = {
							log: function() {
								var e = Array.prototype.slice.call(arguments);
								i.postMessage({
									targetName: "main",
									action: "console_log",
									data: e
								})
							},
							error: function() {
								var e = Array.prototype.slice.call(arguments);
								i.postMessage({
									targetName: "main",
									action: "console_error",
									data: e
								})
							},
							time: function(t) {
								e[t] = Date.now()
							},
							timeEnd: function(t) {
								var n = e[t];
								if (!n) throw new Error("Unknown timer name " + t);
								this.log("Timer:", t, Date.now() - n)
							}
						};
					i.console = t
				}
			}(), function() {
				return v ? "console" in window ? "bind" in console.log ? void 0 : (console.log = function(e) {
					return function(t) {
						return e(t)
					}
				}(console.log), console.error = function(e) {
					return function(t) {
						return e(t)
					}
				}(console.error), void(console.warn = function(e) {
					return function(t) {
						return e(t)
					}
				}(console.warn))) : void(window.console = {
					log: function() {},
					error: function() {},
					warn: function() {}
				}) : void 0
			}(), function() {
				function e(e) {
					t(e.target) && e.stopPropagation()
				}
				function t(e) {
					return e.disabled || e.parentNode && t(e.parentNode)
				}
				p && document.addEventListener("click", e, !0)
			}(), function() {
				(h || d) && (PDFJS.disableCreateObjectURL = !0)
			}(), function() {
				"undefined" != typeof navigator && ("language" in navigator || (PDFJS.locale = navigator.userLanguage || "en-US"))
			}(), function() {
				(g || s || c || f) && (PDFJS.disableRange = !0, PDFJS.disableStream = !0)
			}(), function() {
				v && (!history.pushState || s) && (PDFJS.disableHistory = !0)
			}(), function() {
				if (v) if (window.CanvasPixelArray)"function" != typeof window.CanvasPixelArray.prototype.set && (window.CanvasPixelArray.prototype.set = function(e) {
					for (var t = 0, n = this.length; n > t; t++) this[t] = e[t]
				});
				else {
					var e, t = !1;
					if (u ? (e = o.match(/Chrom(e|ium)\/([0-9]+)\./), t = e && parseInt(e[2]) < 21) : a ? t = l : g && (e = o.match(/Version\/([0-9]+)\.([0-9]+)\.([0-9]+) Safari\//), t = e && parseInt(e[1]) < 6), t) {
						var n = window.CanvasRenderingContext2D.prototype,
							r = n.createImageData;
						n.createImageData = function(e, t) {
							var n = r.call(this, e, t);
							return n.data.set = function(e) {
								for (var t = 0, n = this.length; n > t; t++) this[t] = e[t]
							}, n
						}, n = null
					}
				}
			}(), function() {
				function e() {
					window.requestAnimationFrame = function(e) {
						return window.setTimeout(e, 20)
					}, window.cancelAnimationFrame = function(e) {
						window.clearTimeout(e)
					}
				}
				if (v) return f ? void e() : void("requestAnimationFrame" in window || (window.requestAnimationFrame = window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame || e()))
			}(), function() {
				(f || a) && (PDFJS.maxCanvasPixels = 5242880)
			}(), function() {
				v && h && window.parent !== window && (PDFJS.disableFullscreen = !0)
			}(), function() {
				v && ("currentScript" in document || Object.defineProperty(document, "currentScript", {
					get: function() {
						var e = document.getElementsByTagName("script");
						return e[e.length - 1]
					},
					enumerable: !0,
					configurable: !0
				}))
			}(), function() {
				if (v) {
					var e = document.createElement("input");
					try {
						e.type = "number"
					} catch (t) {
						var n = e.constructor.prototype,
							r = Object.getOwnPropertyDescriptor(n, "type");
						Object.defineProperty(n, "type", {
							get: function() {
								return r.get.call(this)
							},
							set: function(e) {
								r.set.call(this, "number" === e ? "text" : e)
							},
							enumerable: !0,
							configurable: !0
						})
					}
				}
			}(), function() {
				if (v && document.attachEvent) {
					var e = document.constructor.prototype,
						t = Object.getOwnPropertyDescriptor(e, "readyState");
					Object.defineProperty(e, "readyState", {
						get: function() {
							var e = t.get.call(this);
							return "interactive" === e ? "loading" : e
						},
						set: function(e) {
							t.set.call(this, e)
						},
						enumerable: !0,
						configurable: !0
					})
				}
			}(), function() {
				v && "undefined" == typeof Element.prototype.remove && (Element.prototype.remove = function() {
					this.parentNode && this.parentNode.removeChild(this)
				})
			}(), function() {
				Object.values || (Object.values = n(65))
			}(), function() {
				Array.prototype.includes || (Array.prototype.includes = n(70))
			}(), function() {
				Number.isNaN || (Number.isNaN = n(72))
			}(), function() {
				Number.isInteger || (Number.isInteger = n(74))
			}(), function() {
				i.Promise || (i.Promise = n(77))
			}(), function() {
				i.WeakMap || (i.WeakMap = n(95))
			}(), function() {
				function e(e) {
					return void 0 !== f[e]
				}
				function t() {
					l.call(this), this._isInvalid = !0
				}
				function n(e) {
					return "" === e && t.call(this), e.toLowerCase()
				}
				function o(e) {
					var t = e.charCodeAt(0);
					return t > 32 && 127 > t && -1 === [34, 35, 60, 62, 63, 96].indexOf(t) ? e : encodeURIComponent(e)
				}
				function a(e) {
					var t = e.charCodeAt(0);
					return t > 32 && 127 > t && -1 === [34, 35, 60, 62, 96].indexOf(t) ? e : encodeURIComponent(e)
				}
				function s(r, i, s) {
					function l(e) {
						y.push(e)
					}
					var u = i || "scheme start",
						c = 0,
						d = "",
						h = !1,
						b = !1,
						y = [];
					e: for (;
					(r[c - 1] !== g || 0 === c) && !this._isInvalid;) {
						var _ = r[c];
						switch (u) {
						case "scheme start":
							if (!_ || !v.test(_)) {
								if (i) {
									l("Invalid scheme.");
									break e
								}
								d = "", u = "no scheme";
								continue
							}
							d += _.toLowerCase(), u = "scheme";
							break;
						case "scheme":
							if (_ && m.test(_)) d += _.toLowerCase();
							else {
								if (":" !== _) {
									if (i) {
										if (_ === g) break e;
										l("Code point not allowed in scheme: " + _);
										break e
									}
									d = "", c = 0, u = "no scheme";
									continue
								}
								if (this._scheme = d, d = "", i) break e;
								e(this._scheme) && (this._isRelative = !0), u = "file" === this._scheme ? "relative" : this._isRelative && s && s._scheme === this._scheme ? "relative or authority" : this._isRelative ? "authority first slash" : "scheme data"
							}
							break;
						case "scheme data":
							"?" === _ ? (this._query = "?", u = "query") : "#" === _ ? (this._fragment = "#", u = "fragment") : _ !== g && "	" !== _ && "\n" !== _ && "\r" !== _ && (this._schemeData += o(_));
							break;
						case "no scheme":
							if (s && e(s._scheme)) {
								u = "relative";
								continue
							}
							l("Missing scheme."), t.call(this);
							break;
						case "relative or authority":
							if ("/" !== _ || "/" !== r[c + 1]) {
								l("Expected /, got: " + _), u = "relative";
								continue
							}
							u = "authority ignore slashes";
							break;
						case "relative":
							if (this._isRelative = !0, "file" !== this._scheme && (this._scheme = s._scheme), _ === g) {
								this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._username = s._username, this._password = s._password;
								break e
							}
							if ("/" === _ || "\\" === _)"\\" === _ && l("\\ is an invalid code point."), u = "relative slash";
							else if ("?" === _) this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = "?", this._username = s._username, this._password = s._password, u = "query";
							else {
								if ("#" !== _) {
									var w = r[c + 1],
										S = r[c + 2];
									("file" !== this._scheme || !v.test(_) || ":" !== w && "|" !== w || S !== g && "/" !== S && "\\" !== S && "?" !== S && "#" !== S) && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password, this._path = s._path.slice(), this._path.pop()), u = "relative path";
									continue
								}
								this._host = s._host, this._port = s._port, this._path = s._path.slice(), this._query = s._query, this._fragment = "#", this._username = s._username, this._password = s._password, u = "fragment"
							}
							break;
						case "relative slash":
							if ("/" !== _ && "\\" !== _) {
								"file" !== this._scheme && (this._host = s._host, this._port = s._port, this._username = s._username, this._password = s._password), u = "relative path";
								continue
							}
							"\\" === _ && l("\\ is an invalid code point."), u = "file" === this._scheme ? "file host" : "authority ignore slashes";
							break;
						case "authority first slash":
							if ("/" !== _) {
								l("Expected '/', got: " + _), u = "authority ignore slashes";
								continue
							}
							u = "authority second slash";
							break;
						case "authority second slash":
							if (u = "authority ignore slashes", "/" !== _) {
								l("Expected '/', got: " + _);
								continue
							}
							break;
						case "authority ignore slashes":
							if ("/" !== _ && "\\" !== _) {
								u = "authority";
								continue
							}
							l("Expected authority, got: " + _);
							break;
						case "authority":
							if ("@" === _) {
								h && (l("@ already seen."), d += "%40"), h = !0;
								for (var P = 0; P < d.length; P++) {
									var x = d[P];
									if ("	" !== x && "\n" !== x && "\r" !== x) if (":" !== x || null !== this._password) {
										var C = o(x);
										null !== this._password ? this._password += C : this._username += C
									} else this._password = "";
									else l("Invalid whitespace in authority.")
								}
								d = ""
							} else {
								if (_ === g || "/" === _ || "\\" === _ || "?" === _ || "#" === _) {
									c -= d.length, d = "", u = "host";
									continue
								}
								d += _
							}
							break;
						case "file host":
							if (_ === g || "/" === _ || "\\" === _ || "?" === _ || "#" === _) {
								2 !== d.length || !v.test(d[0]) || ":" !== d[1] && "|" !== d[1] ? 0 === d.length ? u = "relative path start" : (this._host = n.call(this, d), d = "", u = "relative path start") : u = "relative path";
								continue
							}
							"	" === _ || "\n" === _ || "\r" === _ ? l("Invalid whitespace in file host.") : d += _;
							break;
						case "host":
						case "hostname":
							if (":" !== _ || b) {
								if (_ === g || "/" === _ || "\\" === _ || "?" === _ || "#" === _) {
									if (this._host = n.call(this, d), d = "", u = "relative path start", i) break e;
									continue
								}
								"	" !== _ && "\n" !== _ && "\r" !== _ ? ("[" === _ ? b = !0 : "]" === _ && (b = !1), d += _) : l("Invalid code point in host/hostname: " + _)
							} else if (this._host = n.call(this, d), d = "", u = "port", "hostname" === i) break e;
							break;
						case "port":
							if (/[0-9]/.test(_)) d += _;
							else {
								if (_ === g || "/" === _ || "\\" === _ || "?" === _ || "#" === _ || i) {
									if ("" !== d) {
										var A = parseInt(d, 10);
										A !== f[this._scheme] && (this._port = A + ""), d = ""
									}
									if (i) break e;
									u = "relative path start";
									continue
								}
								"	" === _ || "\n" === _ || "\r" === _ ? l("Invalid code point in port: " + _) : t.call(this)
							}
							break;
						case "relative path start":
							if ("\\" === _ && l("'\\' not allowed in path."), u = "relative path", "/" !== _ && "\\" !== _) continue;
							break;
						case "relative path":
							if (_ !== g && "/" !== _ && "\\" !== _ && (i || "?" !== _ && "#" !== _))"	" !== _ && "\n" !== _ && "\r" !== _ && (d += o(_));
							else {
								"\\" === _ && l("\\ not allowed in relative path.");
								var k;
								(k = p[d.toLowerCase()]) && (d = k), ".." === d ? (this._path.pop(), "/" !== _ && "\\" !== _ && this._path.push("")) : "." === d && "/" !== _ && "\\" !== _ ? this._path.push("") : "." !== d && ("file" === this._scheme && 0 === this._path.length && 2 === d.length && v.test(d[0]) && "|" === d[1] && (d = d[0] + ":"), this._path.push(d)), d = "", "?" === _ ? (this._query = "?", u = "query") : "#" === _ && (this._fragment = "#", u = "fragment")
							}
							break;
						case "query":
							i || "#" !== _ ? _ !== g && "	" !== _ && "\n" !== _ && "\r" !== _ && (this._query += a(_)) : (this._fragment = "#", u = "fragment");
							break;
						case "fragment":
							_ !== g && "	" !== _ && "\n" !== _ && "\r" !== _ && (this._fragment += _)
						}
						c++
					}
				}
				function l() {
					this._scheme = "", this._schemeData = "", this._username = "", this._password = null, this._host = "", this._port = "", this._path = [], this._query = "", this._fragment = "", this._isInvalid = !1, this._isRelative = !1
				}
				function u(e, t) {
					void 0 === t || t instanceof u || (t = new u(String(t))), this._url = e, l.call(this);
					var n = e.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
					s.call(this, n, null, t)
				}
				var c = !1;
				try {
					if ("function" == typeof URL && "object" === r(URL.prototype) && "origin" in URL.prototype) {
						var d = new URL("b", "http://a");
						d.pathname = "c%20d", c = "http://a/c%20d" === d.href
					}
				} catch (h) {}
				if (!c) {
					var f = Object.create(null);
					f.ftp = 21, f.file = 0, f.gopher = 70, f.http = 80, f.https = 443, f.ws = 80, f.wss = 443;
					var p = Object.create(null);
					p["%2e"] = ".", p[".%2e"] = "..", p["%2e."] = "..", p["%2e%2e"] = "..";
					var g, v = /[a-zA-Z]/,
						m = /[a-zA-Z0-9\+\-\.]/;
					u.prototype = {
						toString: function() {
							return this.href
						},
						get href() {
							if (this._isInvalid) return this._url;
							var e = "";
							return ("" !== this._username || null !== this._password) && (e = this._username + (null !== this._password ? ":" + this._password : "") + "@"), this.protocol + (this._isRelative ? "//" + e + this.host : "") + this.pathname + this._query + this._fragment
						},
						set href(e) {
							l.call(this), s.call(this, e)
						},
						get protocol() {
							return this._scheme + ":"
						},
						set protocol(e) {
							this._isInvalid || s.call(this, e + ":", "scheme start")
						},
						get host() {
							return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host
						},
						set host(e) {
							!this._isInvalid && this._isRelative && s.call(this, e, "host")
						},
						get hostname() {
							return this._host
						},
						set hostname(e) {
							!this._isInvalid && this._isRelative && s.call(this, e, "hostname")
						},
						get port() {
							return this._port
						},
						set port(e) {
							!this._isInvalid && this._isRelative && s.call(this, e, "port")
						},
						get pathname() {
							return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData
						},
						set pathname(e) {
							!this._isInvalid && this._isRelative && (this._path = [], s.call(this, e, "relative path start"))
						},
						get search() {
							return this._isInvalid || !this._query || "?" === this._query ? "" : this._query
						},
						set search(e) {
							!this._isInvalid && this._isRelative && (this._query = "?", "?" === e[0] && (e = e.slice(1)), s.call(this, e, "query"))
						},
						get hash() {
							return this._isInvalid || !this._fragment || "#" === this._fragment ? "" : this._fragment
						},
						set hash(e) {
							this._isInvalid || (this._fragment = "#", "#" === e[0] && (e = e.slice(1)), s.call(this, e, "fragment"))
						},
						get origin() {
							var e;
							if (this._isInvalid || !this._scheme) return "";
							switch (this._scheme) {
							case "data":
							case "file":
							case "javascript":
							case "mailto":
								return "null";
							case "blob":
								try {
									return new u(this._schemeData).origin || "null"
								} catch (t) {}
								return "null"
							}
							return e = this.host, e ? this._scheme + "://" + e : ""
						}
					};
					var b = i.URL;
					b && (u.createObjectURL = function(e) {
						return b.createObjectURL.apply(b, arguments)
					}, u.revokeObjectURL = function(e) {
						b.revokeObjectURL(e)
					}), i.URL = u
				}
			}()
		}
	}, function(e, t, n) {
		"use strict";
		n(66), e.exports = n(5).Object.values
	}, function(e, t, n) {
		"use strict";
		var r = n(4),
			i = n(67)(!1);
		r(r.S, "Object", {
			values: function(e) {
				return i(e)
			}
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(21),
			i = n(17),
			o = n(31).f;
		e.exports = function(e) {
			return function(t) {
				for (var n, a = i(t), s = r(a), l = s.length, u = 0, c = []; l > u;) o.call(a, n = s[u++]) && c.push(e ? [n, a[n]] : a[n]);
				return c
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(7),
			i = n(17),
			o = n(41)(!1),
			a = n(30)("IE_PROTO");
		e.exports = function(e, t) {
			var n, s = i(e),
				l = 0,
				u = [];
			for (n in s) n != a && r(s, n) && u.push(n);
			for (; t.length > l;) r(s, n = t[l++]) && (~o(u, n) || u.push(n));
			return u
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(29),
			i = Math.max,
			o = Math.min;
		e.exports = function(e, t) {
			return e = r(e), 0 > e ? i(e + t, 0) : o(e, t)
		}
	}, function(e, t, n) {
		"use strict";
		n(71), e.exports = n(5).Array.includes
	}, function(e, t, n) {
		"use strict";
		var r = n(4),
			i = n(41)(!0);
		r(r.P, "Array", {
			includes: function(e) {
				return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
			}
		}), n(44)("includes")
	}, function(e, t, n) {
		"use strict";
		n(73), e.exports = n(5).Number.isNaN
	}, function(e, t, n) {
		"use strict";
		var r = n(4);
		r(r.S, "Number", {
			isNaN: function(e) {
				return e != e
			}
		})
	}, function(e, t, n) {
		"use strict";
		n(75), e.exports = n(5).Number.isInteger
	}, function(e, t, n) {
		"use strict";
		var r = n(4);
		r(r.S, "Number", {
			isInteger: n(76)
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(1),
			i = Math.floor;
		e.exports = function(e) {
			return !r(e) && isFinite(e) && i(e) === e
		}
	}, function(e, t, n) {
		"use strict";
		n(45), n(78), n(49), n(86), n(93), n(94), e.exports = n(5).Promise
	}, function(e, t, n) {
		"use strict";
		var r = n(79)(!0);
		n(46)(String, "String", function(e) {
			this._t = String(e), this._i = 0
		}, function() {
			var e, t = this._t,
				n = this._i;
			return n >= t.length ? {
				value: void 0,
				done: !0
			} : (e = r(t, n), this._i += e.length, {
				value: e,
				done: !1
			})
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(29),
			i = n(27);
		e.exports = function(e) {
			return function(t, n) {
				var o, a, s = String(i(t)),
					l = r(n),
					u = s.length;
				return 0 > l || l >= u ? e ? "" : void 0 : (o = s.charCodeAt(l), 55296 > o || o > 56319 || l + 1 === u || (a = s.charCodeAt(l + 1)) < 56320 || a > 57343 ? e ? s.charAt(l) : o : e ? s.slice(l, l + 2) : (o - 55296 << 10) + (a - 56320) + 65536)
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(81),
			i = n(25),
			o = n(22),
			a = {};
		n(11)(a, n(2)("iterator"), function() {
			return this
		}), e.exports = function(e, t, n) {
			e.prototype = r(a, {
				next: i(1, n)
			}), o(e, t + " Iterator")
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(6),
			i = n(82),
			o = n(43),
			a = n(30)("IE_PROTO"),
			s = function() {},
			l = "prototype",
			u = function() {
				var e, t = n(24)("iframe"),
					r = o.length,
					i = "<",
					a = ">";
				for (t.style.display = "none", n(48).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write(i + "script" + a + "document.F=Object" + i + "/script" + a), e.close(), u = e.F; r--;) delete u[l][o[r]];
				return u()
			};
		e.exports = Object.create ||
		function(e, t) {
			var n;
			return null !== e ? (s[l] = r(e), n = new s, s[l] = null, n[a] = e) : n = u(), void 0 === t ? n : i(n, t)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(15),
			i = n(6),
			o = n(21);
		e.exports = n(12) ? Object.defineProperties : function(e, t) {
			i(e);
			for (var n, a = o(t), s = a.length, l = 0; s > l;) r.f(e, n = a[l++], t[n]);
			return e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(7),
			i = n(33),
			o = n(30)("IE_PROTO"),
			a = Object.prototype;
		e.exports = Object.getPrototypeOf ||
		function(e) {
			return e = i(e), r(e, o) ? e[o] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? a : null
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(44),
			i = n(85),
			o = n(19),
			a = n(17);
		e.exports = n(46)(Array, "Array", function(e, t) {
			this._t = a(e), this._i = 0, this._k = t
		}, function() {
			var e = this._t,
				t = this._k,
				n = this._i++;
			return !e || n >= e.length ? (this._t = void 0, i(1)) : "keys" == t ? i(0, n) : "values" == t ? i(0, e[n]) : i(0, [n, e[n]])
		}, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries")
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t) {
			return {
				value: t,
				done: !! e
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r, i, o, a, s = n(47),
			l = n(3),
			u = n(10),
			c = n(32),
			d = n(4),
			h = n(1),
			f = n(16),
			p = n(34),
			g = n(23),
			v = n(50),
			m = n(51).set,
			b = n(91)(),
			y = n(35),
			_ = n(52),
			w = n(53),
			S = "Promise",
			P = l.TypeError,
			x = l.process,
			C = l[S],
			A = "process" == c(x),
			k = function() {},
			T = i = y.f,
			E = !!
		function() {
			try {
				var e = C.resolve(1),
					t = (e.constructor = {})[n(2)("species")] = function(e) {
						e(k, k)
					};
				return (A || "function" == typeof PromiseRejectionEvent) && e.then(k) instanceof t
			} catch (r) {}
		}(), L = function(e) {
			var t;
			return h(e) && "function" == typeof(t = e.then) ? t : !1
		}, I = function(e, t) {
			if (!e._n) {
				e._n = !0;
				var n = e._c;
				b(function() {
					for (var r = e._v, i = 1 == e._s, o = 0, a = function(t) {
							var n, o, a = i ? t.ok : t.fail,
								s = t.resolve,
								l = t.reject,
								u = t.domain;
							try {
								a ? (i || (2 == e._h && D(e), e._h = 1), a === !0 ? n = r : (u && u.enter(), n = a(r), u && u.exit()), n === t.promise ? l(P("Promise-chain cycle")) : (o = L(n)) ? o.call(n, s, l) : s(n)) : l(r)
							} catch (c) {
								l(c)
							}
						}; n.length > o;) a(n[o++]);
					e._c = [], e._n = !1, t && !e._h && R(e)
				})
			}
		}, R = function(e) {
			m.call(l, function() {
				var t, n, r, i = e._v,
					o = O(e);
				if (o && (t = _(function() {
					A ? x.emit("unhandledRejection", i, e) : (n = l.onunhandledrejection) ? n({
						promise: e,
						reason: i
					}) : (r = l.console) && r.error && r.error("Unhandled promise rejection", i)
				}), e._h = A || O(e) ? 2 : 1), e._a = void 0, o && t.e) throw t.v
			})
		}, O = function M(e) {
			if (1 == e._h) return !1;
			for (var t, n = e._a || e._c, r = 0; n.length > r;) if (t = n[r++], t.fail || !M(t.promise)) return !1;
			return !0
		}, D = function(e) {
			m.call(l, function() {
				var t;
				A ? x.emit("rejectionHandled", e) : (t = l.onrejectionhandled) && t({
					promise: e,
					reason: e._v
				})
			})
		}, N = function(e) {
			var t = this;
			t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), I(t, !0))
		}, F = function j(e) {
			var t, n = this;
			if (!n._d) {
				n._d = !0, n = n._w || n;
				try {
					if (n === e) throw P("Promise can't be resolved itself");
					(t = L(e)) ? b(function() {
						var r = {
							_w: n,
							_d: !1
						};
						try {
							t.call(e, u(j, r, 1), u(N, r, 1))
						} catch (i) {
							N.call(r, i)
						}
					}) : (n._v = e, n._s = 1, I(n, !1))
				} catch (r) {
					N.call({
						_w: n,
						_d: !1
					}, r)
				}
			}
		};
		E || (C = function(e) {
			p(this, C, S, "_h"), f(e), r.call(this);
			try {
				e(u(F, this, 1), u(N, this, 1))
			} catch (t) {
				N.call(this, t)
			}
		}, r = function(e) {
			this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
		}, r.prototype = n(36)(C.prototype, {
			then: function(e, t) {
				var n = T(v(this, C));
				return n.ok = "function" == typeof e ? e : !0, n.fail = "function" == typeof t && t, n.domain = A ? x.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && I(this, !1), n.promise
			},
			"catch": function(e) {
				return this.then(void 0, e)
			}
		}), o = function() {
			var e = new r;
			this.promise = e, this.resolve = u(F, e, 1), this.reject = u(N, e, 1)
		}, y.f = T = function(e) {
			return e === C || e === a ? new o(e) : i(e)
		}), d(d.G + d.W + d.F * !E, {
			Promise: C
		}), n(22)(C, S), n(92)(S), a = n(5)[S], d(d.S + d.F * !E, S, {
			reject: function(e) {
				var t = T(this),
					n = t.reject;
				return n(e), t.promise
			}
		}), d(d.S + d.F * (s || !E), S, {
			resolve: function(e) {
				return w(s && this === a ? C : this, e)
			}
		}), d(d.S + d.F * !(E && n(54)(function(e) {
			C.all(e)["catch"](k)
		})), S, {
			all: function(e) {
				var t = this,
					n = T(t),
					r = n.resolve,
					i = n.reject,
					o = _(function() {
						var n = [],
							o = 0,
							a = 1;
						g(e, !1, function(e) {
							var s = o++,
								l = !1;
							n.push(void 0), a++, t.resolve(e).then(function(e) {
								l || (l = !0, n[s] = e, --a || r(n))
							}, i)
						}), --a || r(n)
					});
				return o.e && i(o.v), n.promise
			},
			race: function(e) {
				var t = this,
					n = T(t),
					r = n.reject,
					i = _(function() {
						g(e, !1, function(e) {
							t.resolve(e).then(n.resolve, r)
						})
					});
				return i.e && r(i.v), n.promise
			}
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(6);
		e.exports = function(e, t, n, i) {
			try {
				return i ? t(r(n)[0], n[1]) : t(n)
			} catch (o) {
				var a = e["return"];
				throw void 0 !== a && r(a.call(e)), o
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(19),
			i = n(2)("iterator"),
			o = Array.prototype;
		e.exports = function(e) {
			return void 0 !== e && (r.Array === e || o[i] === e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(32),
			i = n(2)("iterator"),
			o = n(19);
		e.exports = n(5).getIteratorMethod = function(e) {
			return void 0 != e ? e[i] || e["@@iterator"] || o[r(e)] : void 0
		}
	}, function(e, t, n) {
		"use strict";
		e.exports = function(e, t, n) {
			var r = void 0 === n;
			switch (t.length) {
			case 0:
				return r ? e() : e.call(n);
			case 1:
				return r ? e(t[0]) : e.call(n, t[0]);
			case 2:
				return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
			case 3:
				return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
			case 4:
				return r ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
			}
			return e.apply(n, t)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = n(51).set,
			o = r.MutationObserver || r.WebKitMutationObserver,
			a = r.process,
			s = r.Promise,
			l = "process" == n(18)(a);
		e.exports = function() {
			var e, t, n, u = function() {
					var r, i;
					for (l && (r = a.domain) && r.exit(); e;) {
						i = e.fn, e = e.next;
						try {
							i()
						} catch (o) {
							throw e ? n() : t = void 0, o
						}
					}
					t = void 0, r && r.enter()
				};
			if (l) n = function() {
				a.nextTick(u)
			};
			else if (o) {
				var c = !0,
					d = document.createTextNode("");
				new o(u).observe(d, {
					characterData: !0
				}), n = function() {
					d.data = c = !c
				}
			} else if (s && s.resolve) {
				var h = s.resolve();
				n = function() {
					h.then(u)
				}
			} else n = function() {
				i.call(r, u)
			};
			return function(r) {
				var i = {
					fn: r,
					next: void 0
				};
				t && (t.next = i), e || (e = i, n()), t = i
			}
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = n(15),
			o = n(12),
			a = n(2)("species");
		e.exports = function(e) {
			var t = r[e];
			o && t && !t[a] && i.f(t, a, {
				configurable: !0,
				get: function() {
					return this
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(4),
			i = n(5),
			o = n(3),
			a = n(50),
			s = n(53);
		r(r.P + r.R, "Promise", {
			"finally": function(e) {
				var t = a(this, i.Promise || o.Promise),
					n = "function" == typeof e;
				return this.then(n ?
				function(n) {
					return s(t, e()).then(function() {
						return n
					})
				} : e, n ?
				function(n) {
					return s(t, e()).then(function() {
						throw n
					})
				} : e)
			}
		})
	}, function(e, t, n) {
		"use strict";
		var r = n(4),
			i = n(35),
			o = n(52);
		r(r.S, "Promise", {
			"try": function(e) {
				var t = i.f(this),
					n = o(e);
				return (n.e ? t.reject : t.resolve)(n.v), t.promise
			}
		})
	}, function(e, t, n) {
		"use strict";
		n(45), n(49), n(96), n(107), n(109), e.exports = n(5).WeakMap
	}, function(e, t, n) {
		"use strict";
		var r, i = n(55)(0),
			o = n(9),
			a = n(37),
			s = n(100),
			l = n(102),
			u = n(1),
			c = n(13),
			d = n(56),
			h = "WeakMap",
			f = a.getWeak,
			p = Object.isExtensible,
			g = l.ufstore,
			v = {},
			m = function(e) {
				return function() {
					return e(this, arguments.length > 0 ? arguments[0] : void 0)
				}
			},
			b = {
				get: function(e) {
					if (u(e)) {
						var t = f(e);
						return t === !0 ? g(d(this, h)).get(e) : t ? t[this._i] : void 0
					}
				},
				set: function(e, t) {
					return l.def(d(this, h), e, t)
				}
			},
			y = e.exports = n(103)(h, m, b, l, !0, !0);
		c(function() {
			return 7 != (new y).set((Object.freeze || Object)(v), 7).get(v)
		}) && (r = l.getConstructor(m, h), s(r.prototype, b), a.NEED = !0, i(["delete", "has", "get", "set"], function(e) {
			var t = y.prototype,
				n = t[e];
			o(t, e, function(t, i) {
				if (u(t) && !p(t)) {
					this._f || (this._f = new r);
					var o = this._f[e](t, i);
					return "set" == e ? this : o
				}
				return n.call(this, t, i)
			})
		}))
	}, function(e, t, n) {
		"use strict";
		var r = n(98);
		e.exports = function(e, t) {
			return new(r(e))(t)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(1),
			i = n(99),
			o = n(2)("species");
		e.exports = function(e) {
			var t;
			return i(e) && (t = e.constructor, "function" != typeof t || t !== Array && !i(t.prototype) || (t = void 0), r(t) && (t = t[o], null === t && (t = void 0))), void 0 === t ? Array : t
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(18);
		e.exports = Array.isArray ||
		function(e) {
			return "Array" == r(e)
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(21),
			i = n(101),
			o = n(31),
			a = n(33),
			s = n(26),
			l = Object.assign;
		e.exports = !l || n(13)(function() {
			var e = {},
				t = {},
				n = Symbol(),
				r = "abcdefghijklmnopqrst";
			return e[n] = 7, r.split("").forEach(function(e) {
				t[e] = e
			}), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
		}) ?
		function(e, t) {
			for (var n = a(e), l = arguments.length, u = 1, c = i.f, d = o.f; l > u;) for (var h, f = s(arguments[u++]), p = c ? r(f).concat(c(f)) : r(f), g = p.length, v = 0; g > v;) d.call(f, h = p[v++]) && (n[h] = f[h]);
			return n
		} : l
	}, function(e, t, n) {
		"use strict";
		t.f = Object.getOwnPropertySymbols
	}, function(e, t, n) {
		"use strict";
		var r = n(36),
			i = n(37).getWeak,
			o = n(6),
			a = n(1),
			s = n(34),
			l = n(23),
			u = n(55),
			c = n(7),
			d = n(56),
			h = u(5),
			f = u(6),
			p = 0,
			g = function(e) {
				return e._l || (e._l = new v)
			},
			v = function() {
				this.a = []
			},
			m = function(e, t) {
				return h(e.a, function(e) {
					return e[0] === t
				})
			};
		v.prototype = {
			get: function(e) {
				var t = m(this, e);
				return t ? t[1] : void 0
			},
			has: function(e) {
				return !!m(this, e)
			},
			set: function(e, t) {
				var n = m(this, e);
				n ? n[1] = t : this.a.push([e, t])
			},
			"delete": function(e) {
				var t = f(this.a, function(t) {
					return t[0] === e
				});
				return ~t && this.a.splice(t, 1), !! ~t
			}
		}, e.exports = {
			getConstructor: function(e, t, n, o) {
				var u = e(function(e, r) {
					s(e, u, t, "_i"), e._t = t, e._i = p++, e._l = void 0, void 0 != r && l(r, n, e[o], e)
				});
				return r(u.prototype, {
					"delete": function(e) {
						if (!a(e)) return !1;
						var n = i(e);
						return n === !0 ? g(d(this, t))["delete"](e) : n && c(n, this._i) && delete n[this._i]
					},
					has: function(e) {
						if (!a(e)) return !1;
						var n = i(e);
						return n === !0 ? g(d(this, t)).has(e) : n && c(n, this._i)
					}
				}), u
			},
			def: function(e, t, n) {
				var r = i(o(t), !0);
				return r === !0 ? g(e).set(t, n) : r[e._i] = n, e
			},
			ufstore: g
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(3),
			i = n(4),
			o = n(9),
			a = n(36),
			s = n(37),
			l = n(23),
			u = n(34),
			c = n(1),
			d = n(13),
			h = n(54),
			f = n(22),
			p = n(104);
		e.exports = function(e, t, n, g, v, m) {
			var b = r[e],
				y = b,
				_ = v ? "set" : "add",
				w = y && y.prototype,
				S = {},
				P = function(e) {
					var t = w[e];
					o(w, e, "delete" == e ?
					function(e) {
						return m && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
					} : "has" == e ?
					function(e) {
						return m && !c(e) ? !1 : t.call(this, 0 === e ? 0 : e)
					} : "get" == e ?
					function(e) {
						return m && !c(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
					} : "add" == e ?
					function(e) {
						return t.call(this, 0 === e ? 0 : e), this
					} : function(e, n) {
						return t.call(this, 0 === e ? 0 : e, n), this
					})
				};
			if ("function" == typeof y && (m || w.forEach && !d(function() {
				(new y).entries().next()
			}))) {
				var x = new y,
					C = x[_](m ? {} : -0, 1) != x,
					A = d(function() {
						x.has(1)
					}),
					k = h(function(e) {
						new y(e)
					}),
					T = !m && d(function() {
						for (var e = new y, t = 5; t--;) e[_](t, t);
						return !e.has(-0)
					});
				k || (y = t(function(t, n) {
					u(t, y, e);
					var r = p(new b, t, y);
					return void 0 != n && l(n, v, r[_], r), r
				}), y.prototype = w, w.constructor = y), (A || T) && (P("delete"), P("has"), v && P("get")), (T || C) && P(_), m && w.clear && delete w.clear
			} else y = g.getConstructor(t, e, v, _), a(y.prototype, n), s.NEED = !0;
			return f(y, e), S[e] = y, i(i.G + i.W + i.F * (y != b), S), m || g.setStrong(y, e, v), y
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(1),
			i = n(105).set;
		e.exports = function(e, t, n) {
			var o, a = t.constructor;
			return a !== n && "function" == typeof a && (o = a.prototype) !== n.prototype && r(o) && i && i(e, o), e
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(1),
			i = n(6),
			o = function(e, t) {
				if (i(e), !r(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
			};
		e.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ?
			function(e, t, r) {
				try {
					r = n(10)(Function.call, n(106).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
				} catch (i) {
					t = !0
				}
				return function(e, n) {
					return o(e, n), t ? e.__proto__ = n : r(e, n), e
				}
			}({}, !1) : void 0),
			check: o
		}
	}, function(e, t, n) {
		"use strict";
		var r = n(31),
			i = n(25),
			o = n(17),
			a = n(40),
			s = n(7),
			l = n(39),
			u = Object.getOwnPropertyDescriptor;
		t.f = n(12) ? u : function(e, t) {
			if (e = o(e), t = a(t, !0), l) try {
				return u(e, t)
			} catch (n) {}
			return s(e, t) ? i(!r.f.call(e, t), e[t]) : void 0
		}
	}, function(e, t, n) {
		"use strict";
		n(108)("WeakMap")
	}, function(e, t, n) {
		"use strict";
		var r = n(4);
		e.exports = function(e) {
			r(r.S, e, {
				of: function() {
					for (var e = arguments.length, t = Array(e); e--;) t[e] = arguments[e];
					return new this(t)
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		n(110)("WeakMap")
	}, function(e, t, n) {
		"use strict";
		var r = n(4),
			i = n(16),
			o = n(10),
			a = n(23);
		e.exports = function(e) {
			r(r.S, e, {
				from: function(e) {
					var t, n, r, s, l = arguments[1];
					return i(this), t = void 0 !== l, t && i(l), void 0 == e ? new this : (n = [], t ? (r = 0, s = o(l, arguments[2], 2), a(e, !1, function(e) {
						n.push(s(e, r++))
					})) : a(e, !1, n.push, n), new this(n))
				}
			})
		}
	}, function(e, t, n) {
		"use strict";
		var r = !1;
		if ("undefined" != typeof ReadableStream) try {
			new ReadableStream({
				start: function(e) {
					e.close()
				}
			}), r = !0
		} catch (i) {}
		r ? t.ReadableStream = ReadableStream : t.ReadableStream = n(112).ReadableStream
	}, function(e, t, n) {
		"use strict";
		var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
		function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		!
		function(e, t) {
			for (var n in t) e[n] = t[n]
		}(t, function(e) {
			function t(r) {
				if (n[r]) return n[r].exports;
				var i = n[r] = {
					i: r,
					l: !1,
					exports: {}
				};
				return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
			}
			var n = {};
			return t.m = e, t.c = n, t.i = function(e) {
				return e
			}, t.d = function(e, n, r) {
				t.o(e, n) || Object.defineProperty(e, n, {
					configurable: !1,
					enumerable: !0,
					get: r
				})
			}, t.n = function(e) {
				var n = e && e.__esModule ?
				function() {
					return e["default"]
				} : function() {
					return e
				};
				return t.d(n, "a", n), n
			}, t.o = function(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}, t.p = "", t(t.s = 7)
		}([function(e, t, n) {
			function i(e) {
				return "string" == typeof e || "symbol" === ("undefined" == typeof e ? "undefined" : a(e))
			}
			function o(e, t, n) {
				if ("function" != typeof e) throw new TypeError("Argument is not a function");
				return Function.prototype.apply.call(e, t, n)
			}
			var a = "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ?
			function(e) {
				return "undefined" == typeof e ? "undefined" : r(e)
			} : function(e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : r(e)
			}, s = n(1), l = s.assert;
			t.typeIsObject = function(e) {
				return "object" === ("undefined" == typeof e ? "undefined" : a(e)) && null !== e || "function" == typeof e
			}, t.createDataProperty = function(e, n, r) {
				l(t.typeIsObject(e)), Object.defineProperty(e, n, {
					value: r,
					writable: !0,
					enumerable: !0,
					configurable: !0
				})
			}, t.createArrayFromList = function(e) {
				return e.slice()
			}, t.ArrayBufferCopy = function(e, t, n, r, i) {
				new Uint8Array(e).set(new Uint8Array(n, r, i), t)
			}, t.CreateIterResultObject = function(e, t) {
				l("boolean" == typeof t);
				var n = {};
				return Object.defineProperty(n, "value", {
					value: e,
					enumerable: !0,
					writable: !0,
					configurable: !0
				}), Object.defineProperty(n, "done", {
					value: t,
					enumerable: !0,
					writable: !0,
					configurable: !0
				}), n
			}, t.IsFiniteNonNegativeNumber = function(e) {
				return Number.isNaN(e) ? !1 : e === 1 / 0 ? !1 : 0 > e ? !1 : !0
			}, t.InvokeOrNoop = function(e, t, n) {
				l(void 0 !== e), l(i(t)), l(Array.isArray(n));
				var r = e[t];
				return void 0 === r ? void 0 : o(r, e, n)
			}, t.PromiseInvokeOrNoop = function(e, n, r) {
				l(void 0 !== e), l(i(n)), l(Array.isArray(r));
				try {
					return Promise.resolve(t.InvokeOrNoop(e, n, r))
				} catch (o) {
					return Promise.reject(o)
				}
			}, t.PromiseInvokeOrPerformFallback = function(e, t, n, r, a) {
				l(void 0 !== e), l(i(t)), l(Array.isArray(n)), l(Array.isArray(a));
				var s = void 0;
				try {
					s = e[t]
				} catch (u) {
					return Promise.reject(u)
				}
				if (void 0 === s) return r.apply(null, a);
				try {
					return Promise.resolve(o(s, e, n))
				} catch (c) {
					return Promise.reject(c)
				}
			}, t.TransferArrayBuffer = function(e) {
				return e.slice()
			}, t.ValidateAndNormalizeHighWaterMark = function(e) {
				if (e = Number(e), Number.isNaN(e) || 0 > e) throw new RangeError("highWaterMark property of a queuing strategy must be non-negative and non-NaN");
				return e
			}, t.ValidateAndNormalizeQueuingStrategy = function(e, n) {
				if (void 0 !== e && "function" != typeof e) throw new TypeError("size property of a queuing strategy must be a function");
				return n = t.ValidateAndNormalizeHighWaterMark(n), {
					size: e,
					highWaterMark: n
				}
			}
		}, function(e, t, n) {
			function r(e) {
				e && e.constructor === i && setTimeout(function() {
					throw e
				}, 0)
			}
			function i(e) {
				this.name = "AssertionError", this.message = e || "", this.stack = (new Error).stack
			}
			function o(e, t) {
				if (!e) throw new i(t)
			}
			i.prototype = Object.create(Error.prototype), i.prototype.constructor = i, e.exports = {
				rethrowAssertionErrorRejection: r,
				AssertionError: i,
				assert: o
			}
		}, function(e, t, n) {
			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function i(e) {
				return new ye(e)
			}
			function o(e) {
				return ue(e) && Object.prototype.hasOwnProperty.call(e, "_writableStreamController") ? !0 : !1
			}
			function a(e) {
				return de(o(e) === !0, "IsWritableStreamLocked should only be used on known writable streams"), void 0 === e._writer ? !1 : !0
			}
			function s(e, t) {
				var n = e._state;
				if ("closed" === n) return Promise.resolve(void 0);
				if ("errored" === n) return Promise.reject(e._storedError);
				var r = new TypeError("Requested to abort");
				if (void 0 !== e._pendingAbortRequest) return Promise.reject(r);
				de("writable" === n || "erroring" === n, "state must be writable or erroring");
				var i = !1;
				"erroring" === n && (i = !0, t = void 0);
				var o = new Promise(function(n, r) {
					e._pendingAbortRequest = {
						_resolve: n,
						_reject: r,
						_reason: t,
						_wasAlreadyErroring: i
					}
				});
				return i === !1 && c(e, r), o
			}
			function l(e) {
				de(a(e) === !0), de("writable" === e._state);
				var t = new Promise(function(t, n) {
					var r = {
						_resolve: t,
						_reject: n
					};
					e._writeRequests.push(r)
				});
				return t
			}
			function u(e, t) {
				var n = e._state;
				return "writable" === n ? void c(e, t) : (de("erroring" === n), void d(e))
			}
			function c(e, t) {
				de(void 0 === e._storedError, "stream._storedError === undefined"), de("writable" === e._state, "state must be writable");
				var n = e._writableStreamController;
				de(void 0 !== n, "controller must not be undefined"), e._state = "erroring", e._storedError = t;
				var r = e._writer;
				void 0 !== r && k(r, t), m(e) === !1 && n._started === !0 && d(e)
			}
			function d(e) {
				de("erroring" === e._state, "stream._state === erroring"), de(m(e) === !1, "WritableStreamHasOperationMarkedInFlight(stream) === false"), e._state = "errored", e._writableStreamController.__errorSteps();
				for (var t = e._storedError, n = 0; n < e._writeRequests.length; n++) {
					var r = e._writeRequests[n];
					r._reject(t)
				}
				if (e._writeRequests = [], void 0 === e._pendingAbortRequest) return void _(e);
				var i = e._pendingAbortRequest;
				if (e._pendingAbortRequest = void 0, i._wasAlreadyErroring === !0) return i._reject(t), void _(e);
				var o = e._writableStreamController.__abortSteps(i._reason);
				o.then(function() {
					i._resolve(), _(e)
				}, function(t) {
					i._reject(t), _(e)
				})
			}
			function h(e) {
				de(void 0 !== e._inFlightWriteRequest), e._inFlightWriteRequest._resolve(void 0), e._inFlightWriteRequest = void 0
			}
			function f(e, t) {
				de(void 0 !== e._inFlightWriteRequest), e._inFlightWriteRequest._reject(t), e._inFlightWriteRequest = void 0, de("writable" === e._state || "erroring" === e._state), u(e, t)
			}
			function p(e) {
				de(void 0 !== e._inFlightCloseRequest), e._inFlightCloseRequest._resolve(void 0), e._inFlightCloseRequest = void 0;
				var t = e._state;
				de("writable" === t || "erroring" === t), "erroring" === t && (e._storedError = void 0, void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._resolve(), e._pendingAbortRequest = void 0)), e._state = "closed";
				var n = e._writer;
				void 0 !== n && Y(n), de(void 0 === e._pendingAbortRequest, "stream._pendingAbortRequest === undefined"), de(void 0 === e._storedError, "stream._storedError === undefined")
			}
			function g(e, t) {
				de(void 0 !== e._inFlightCloseRequest), e._inFlightCloseRequest._reject(t), e._inFlightCloseRequest = void 0, de("writable" === e._state || "erroring" === e._state), void 0 !== e._pendingAbortRequest && (e._pendingAbortRequest._reject(t), e._pendingAbortRequest = void 0), u(e, t)
			}
			function v(e) {
				return void 0 === e._closeRequest && void 0 === e._inFlightCloseRequest ? !1 : !0
			}
			function m(e) {
				return void 0 === e._inFlightWriteRequest && void 0 === e._inFlightCloseRequest ? !1 : !0
			}
			function b(e) {
				de(void 0 === e._inFlightCloseRequest), de(void 0 !== e._closeRequest), e._inFlightCloseRequest = e._closeRequest, e._closeRequest = void 0
			}
			function y(e) {
				de(void 0 === e._inFlightWriteRequest, "there must be no pending write request"), de(0 !== e._writeRequests.length, "writeRequests must not be empty"), e._inFlightWriteRequest = e._writeRequests.shift()
			}
			function _(e) {
				de("errored" === e._state, '_stream_.[[state]] is `"errored"`'), void 0 !== e._closeRequest && (de(void 0 === e._inFlightCloseRequest), e._closeRequest._reject(e._storedError), e._closeRequest = void 0);
				var t = e._writer;
				void 0 !== t && (X(t, e._storedError), t._closedPromise["catch"](function() {}))
			}
			function w(e, t) {
				de("writable" === e._state), de(v(e) === !1);
				var n = e._writer;
				void 0 !== n && t !== e._backpressure && (t === !0 ? te(n) : (de(t === !1), re(n))), e._backpressure = t
			}
			function S(e) {
				return ue(e) && Object.prototype.hasOwnProperty.call(e, "_ownerWritableStream") ? !0 : !1
			}
			function P(e, t) {
				var n = e._ownerWritableStream;
				return de(void 0 !== n), s(n, t)
			}
			function x(e) {
				var t = e._ownerWritableStream;
				de(void 0 !== t);
				var n = t._state;
				if ("closed" === n || "errored" === n) return Promise.reject(new TypeError("The stream (in " + n + " state) is not in the writable state and cannot be closed"));
				de("writable" === n || "erroring" === n), de(v(t) === !1);
				var r = new Promise(function(e, n) {
					var r = {
						_resolve: e,
						_reject: n
					};
					t._closeRequest = r
				});
				return t._backpressure === !0 && "writable" === n && re(e), I(t._writableStreamController), r
			}
			function C(e) {
				var t = e._ownerWritableStream;
				de(void 0 !== t);
				var n = t._state;
				return v(t) === !0 || "closed" === n ? Promise.resolve() : "errored" === n ? Promise.reject(t._storedError) : (de("writable" === n || "erroring" === n), x(e))
			}
			function A(e, t) {
				"pending" === e._closedPromiseState ? X(e, t) : J(e, t), e._closedPromise["catch"](function() {})
			}
			function k(e, t) {
				"pending" === e._readyPromiseState ? ee(e, t) : ne(e, t), e._readyPromise["catch"](function() {})
			}
			function T(e) {
				var t = e._ownerWritableStream,
					n = t._state;
				return "errored" === n || "erroring" === n ? null : "closed" === n ? 0 : O(t._writableStreamController)
			}
			function E(e) {
				var t = e._ownerWritableStream;
				de(void 0 !== t), de(t._writer === e);
				var n = new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");
				k(e, n), A(e, n), t._writer = void 0, e._ownerWritableStream = void 0
			}
			function L(e, t) {
				var n = e._ownerWritableStream;
				de(void 0 !== n);
				var r = n._writableStreamController,
					i = R(r, t);
				if (n !== e._ownerWritableStream) return Promise.reject(W("write to"));
				var o = n._state;
				if ("errored" === o) return Promise.reject(n._storedError);
				if (v(n) === !0 || "closed" === o) return Promise.reject(new TypeError("The stream is closing or closed and cannot be written to"));
				if ("erroring" === o) return Promise.reject(n._storedError);
				de("writable" === o);
				var a = l(n);
				return D(r, t, i), a
			}
			function I(e) {
				ge(e, "close", 0), F(e)
			}
			function R(e, t) {
				var n = e._strategySize;
				if (void 0 === n) return 1;
				try {
					return n(t)
				} catch (r) {
					return M(e, r), 1
				}
			}
			function O(e) {
				return e._strategyHWM - e._queueTotalSize
			}
			function D(e, t, n) {
				var r = {
					chunk: t
				};
				try {
					ge(e, r, n)
				} catch (i) {
					return void M(e, i)
				}
				var o = e._controlledWritableStream;
				if (v(o) === !1 && "writable" === o._state) {
					var a = q(e);
					w(o, a)
				}
				F(e)
			}
			function N(e) {
				return ue(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingSink") ? !0 : !1
			}
			function F(e) {
				var t = e._controlledWritableStream;
				if (e._started !== !1 && void 0 === t._inFlightWriteRequest) {
					var n = t._state;
					if ("closed" !== n && "errored" !== n) {
						if ("erroring" === n) return void d(t);
						if (0 !== e._queue.length) {
							var r = ve(e);
							"close" === r ? j(e) : B(e, r.chunk)
						}
					}
				}
			}
			function M(e, t) {
				"writable" === e._controlledWritableStream._state && V(e, t)
			}
			function j(e) {
				var t = e._controlledWritableStream;
				b(t), pe(e), de(0 === e._queue.length, "queue must be empty once the final write record is dequeued");
				var n = se(e._underlyingSink, "close", []);
				n.then(function() {
					p(t)
				}, function(e) {
					g(t, e)
				})["catch"](he)
			}
			function B(e, t) {
				var n = e._controlledWritableStream;
				y(n);
				var r = se(e._underlyingSink, "write", [t, e]);
				r.then(function() {
					h(n);
					var t = n._state;
					if (de("writable" === t || "erroring" === t), pe(e), v(n) === !1 && "writable" === t) {
						var r = q(e);
						w(n, r)
					}
					F(e)
				}, function(e) {
					f(n, e)
				})["catch"](he)
			}
			function q(e) {
				var t = O(e);
				return 0 >= t
			}
			function V(e, t) {
				var n = e._controlledWritableStream;
				de("writable" === n._state), c(n, t)
			}
			function U(e) {
				return new TypeError("WritableStream.prototype." + e + " can only be used on a WritableStream")
			}
			function z(e) {
				return new TypeError("WritableStreamDefaultWriter.prototype." + e + " can only be used on a WritableStreamDefaultWriter")
			}
			function W(e) {
				return new TypeError("Cannot " + e + " a stream using a released writer")
			}
			function H(e) {
				e._closedPromise = new Promise(function(t, n) {
					e._closedPromise_resolve = t, e._closedPromise_reject = n, e._closedPromiseState = "pending"
				})
			}
			function G(e, t) {
				e._closedPromise = Promise.reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected"
			}
			function $(e) {
				e._closedPromise = Promise.resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved"
			}
			function X(e, t) {
				de(void 0 !== e._closedPromise_resolve, "writer._closedPromise_resolve !== undefined"), de(void 0 !== e._closedPromise_reject, "writer._closedPromise_reject !== undefined"), de("pending" === e._closedPromiseState, "writer._closedPromiseState is pending"), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "rejected"
			}
			function J(e, t) {
				de(void 0 === e._closedPromise_resolve, "writer._closedPromise_resolve === undefined"), de(void 0 === e._closedPromise_reject, "writer._closedPromise_reject === undefined"), de("pending" !== e._closedPromiseState, "writer._closedPromiseState is not pending"), e._closedPromise = Promise.reject(t), e._closedPromiseState = "rejected"
			}
			function Y(e) {
				de(void 0 !== e._closedPromise_resolve, "writer._closedPromise_resolve !== undefined"), de(void 0 !== e._closedPromise_reject, "writer._closedPromise_reject !== undefined"), de("pending" === e._closedPromiseState, "writer._closedPromiseState is pending"), e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0, e._closedPromiseState = "resolved"
			}
			function Q(e) {
				e._readyPromise = new Promise(function(t, n) {
					e._readyPromise_resolve = t, e._readyPromise_reject = n
				}), e._readyPromiseState = "pending"
			}
			function K(e, t) {
				e._readyPromise = Promise.reject(t), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected"
			}
			function Z(e) {
				e._readyPromise = Promise.resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled"
			}
			function ee(e, t) {
				de(void 0 !== e._readyPromise_resolve, "writer._readyPromise_resolve !== undefined"), de(void 0 !== e._readyPromise_reject, "writer._readyPromise_reject !== undefined"), e._readyPromise_reject(t), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "rejected"
			}
			function te(e) {
				de(void 0 === e._readyPromise_resolve, "writer._readyPromise_resolve === undefined"), de(void 0 === e._readyPromise_reject, "writer._readyPromise_reject === undefined"), e._readyPromise = new Promise(function(t, n) {
					e._readyPromise_resolve = t, e._readyPromise_reject = n
				}), e._readyPromiseState = "pending"
			}
			function ne(e, t) {
				de(void 0 === e._readyPromise_resolve, "writer._readyPromise_resolve === undefined"), de(void 0 === e._readyPromise_reject, "writer._readyPromise_reject === undefined"), e._readyPromise = Promise.reject(t), e._readyPromiseState = "rejected"
			}
			function re(e) {
				de(void 0 !== e._readyPromise_resolve, "writer._readyPromise_resolve !== undefined"), de(void 0 !== e._readyPromise_reject, "writer._readyPromise_reject !== undefined"), e._readyPromise_resolve(void 0), e._readyPromise_resolve = void 0, e._readyPromise_reject = void 0, e._readyPromiseState = "fulfilled"
			}
			var ie = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				oe = n(0),
				ae = oe.InvokeOrNoop,
				se = oe.PromiseInvokeOrNoop,
				le = oe.ValidateAndNormalizeQueuingStrategy,
				ue = oe.typeIsObject,
				ce = n(1),
				de = ce.assert,
				he = ce.rethrowAssertionErrorRejection,
				fe = n(3),
				pe = fe.DequeueValue,
				ge = fe.EnqueueValueWithSize,
				ve = fe.PeekQueueValue,
				me = fe.ResetQueue,
				be = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							i = n.size,
							o = n.highWaterMark,
							a = void 0 === o ? 1 : o;
						r(this, e), this._state = "writable", this._storedError = void 0, this._writer = void 0, this._writableStreamController = void 0, this._writeRequests = [], this._inFlightWriteRequest = void 0, this._closeRequest = void 0, this._inFlightCloseRequest = void 0, this._pendingAbortRequest = void 0, this._backpressure = !1;
						var s = t.type;
						if (void 0 !== s) throw new RangeError("Invalid type is specified");
						this._writableStreamController = new _e(this, t, i, a), this._writableStreamController.__startSteps()
					}
					return ie(e, [{
						key: "abort",
						value: function(e) {
							return o(this) === !1 ? Promise.reject(U("abort")) : a(this) === !0 ? Promise.reject(new TypeError("Cannot abort a stream that already has a writer")) : s(this, e)
						}
					}, {
						key: "getWriter",
						value: function() {
							if (o(this) === !1) throw U("getWriter");
							return i(this)
						}
					}, {
						key: "locked",
						get: function() {
							if (o(this) === !1) throw U("locked");
							return a(this)
						}
					}]), e
				}();
			e.exports = {
				AcquireWritableStreamDefaultWriter: i,
				IsWritableStream: o,
				IsWritableStreamLocked: a,
				WritableStream: be,
				WritableStreamAbort: s,
				WritableStreamDefaultControllerError: V,
				WritableStreamDefaultWriterCloseWithErrorPropagation: C,
				WritableStreamDefaultWriterRelease: E,
				WritableStreamDefaultWriterWrite: L,
				WritableStreamCloseQueuedOrInFlight: v
			};
			var ye = function() {
					function e(t) {
						if (r(this, e), o(t) === !1) throw new TypeError("WritableStreamDefaultWriter can only be constructed with a WritableStream instance");
						if (a(t) === !0) throw new TypeError("This stream has already been locked for exclusive writing by another writer");
						this._ownerWritableStream = t, t._writer = this;
						var n = t._state;
						if ("writable" === n) v(t) === !1 && t._backpressure === !0 ? Q(this) : Z(this), H(this);
						else if ("erroring" === n) K(this, t._storedError), this._readyPromise["catch"](function() {}), H(this);
						else if ("closed" === n) Z(this), $(this);
						else {
							de("errored" === n, "state must be errored");
							var i = t._storedError;
							K(this, i), this._readyPromise["catch"](function() {}), G(this, i), this._closedPromise["catch"](function() {})
						}
					}
					return ie(e, [{
						key: "abort",
						value: function(e) {
							return S(this) === !1 ? Promise.reject(z("abort")) : void 0 === this._ownerWritableStream ? Promise.reject(W("abort")) : P(this, e)
						}
					}, {
						key: "close",
						value: function() {
							if (S(this) === !1) return Promise.reject(z("close"));
							var e = this._ownerWritableStream;
							return void 0 === e ? Promise.reject(W("close")) : v(e) === !0 ? Promise.reject(new TypeError("cannot close an already-closing stream")) : x(this)
						}
					}, {
						key: "releaseLock",
						value: function() {
							if (S(this) === !1) throw z("releaseLock");
							var e = this._ownerWritableStream;
							void 0 !== e && (de(void 0 !== e._writer), E(this))
						}
					}, {
						key: "write",
						value: function(e) {
							return S(this) === !1 ? Promise.reject(z("write")) : void 0 === this._ownerWritableStream ? Promise.reject(W("write to")) : L(this, e)
						}
					}, {
						key: "closed",
						get: function() {
							return S(this) === !1 ? Promise.reject(z("closed")) : this._closedPromise
						}
					}, {
						key: "desiredSize",
						get: function() {
							if (S(this) === !1) throw z("desiredSize");
							if (void 0 === this._ownerWritableStream) throw W("desiredSize");
							return T(this)
						}
					}, {
						key: "ready",
						get: function() {
							return S(this) === !1 ? Promise.reject(z("ready")) : this._readyPromise
						}
					}]), e
				}(),
				_e = function() {
					function e(t, n, i, a) {
						if (r(this, e), o(t) === !1) throw new TypeError("WritableStreamDefaultController can only be constructed with a WritableStream instance");
						if (void 0 !== t._writableStreamController) throw new TypeError("WritableStreamDefaultController instances can only be created by the WritableStream constructor");
						this._controlledWritableStream = t, this._underlyingSink = n, this._queue = void 0, this._queueTotalSize = void 0, me(this), this._started = !1;
						var s = le(i, a);
						this._strategySize = s.size, this._strategyHWM = s.highWaterMark;
						var l = q(this);
						w(t, l)
					}
					return ie(e, [{
						key: "error",
						value: function(e) {
							if (N(this) === !1) throw new TypeError("WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController");
							var t = this._controlledWritableStream._state;
							"writable" === t && V(this, e)
						}
					}, {
						key: "__abortSteps",
						value: function(e) {
							return se(this._underlyingSink, "abort", [e])
						}
					}, {
						key: "__errorSteps",
						value: function() {
							me(this)
						}
					}, {
						key: "__startSteps",
						value: function() {
							var e = this,
								t = ae(this._underlyingSink, "start", [this]),
								n = this._controlledWritableStream;
							Promise.resolve(t).then(function() {
								de("writable" === n._state || "erroring" === n._state), e._started = !0, F(e)
							}, function(t) {
								de("writable" === n._state || "erroring" === n._state), e._started = !0, u(n, t)
							})["catch"](he)
						}
					}]), e
				}()
		}, function(e, t, n) {
			var r = n(0),
				i = r.IsFiniteNonNegativeNumber,
				o = n(1),
				a = o.assert;
			t.DequeueValue = function(e) {
				a("_queue" in e && "_queueTotalSize" in e, "Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."), a(e._queue.length > 0, "Spec-level failure: should never dequeue from an empty queue.");
				var t = e._queue.shift();
				return e._queueTotalSize -= t.size, e._queueTotalSize < 0 && (e._queueTotalSize = 0), t.value
			}, t.EnqueueValueWithSize = function(e, t, n) {
				if (a("_queue" in e && "_queueTotalSize" in e, "Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and [[queueTotalSize]]."), n = Number(n), !i(n)) throw new RangeError("Size must be a finite, non-NaN, non-negative number.");
				e._queue.push({
					value: t,
					size: n
				}), e._queueTotalSize += n
			}, t.PeekQueueValue = function(e) {
				a("_queue" in e && "_queueTotalSize" in e, "Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]]."), a(e._queue.length > 0, "Spec-level failure: should never peek at an empty queue.");
				var t = e._queue[0];
				return t.value
			}, t.ResetQueue = function(e) {
				a("_queue" in e && "_queueTotalSize" in e, "Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]]."), e._queue = [], e._queueTotalSize = 0
			}
		}, function(e, t, n) {
			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function i(e) {
				return new tt(e)
			}
			function o(e) {
				return new et(e)
			}
			function a(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_readableStreamController") ? !0 : !1
			}
			function s(e) {
				return je(a(e) === !0, "IsReadableStreamDisturbed should only be used on known readable streams"), e._disturbed
			}
			function l(e) {
				return je(a(e) === !0, "IsReadableStreamLocked should only be used on known readable streams"), void 0 === e._reader ? !1 : !0
			}
			function u(e, t) {
				je(a(e) === !0), je("boolean" == typeof t);
				var n = o(e),
					r = {
						closedOrErrored: !1,
						canceled1: !1,
						canceled2: !1,
						reason1: void 0,
						reason2: void 0
					};
				r.promise = new Promise(function(e) {
					r._resolve = e
				});
				var i = c();
				i._reader = n, i._teeState = r, i._cloneForBranch2 = t;
				var s = d();
				s._stream = e, s._teeState = r;
				var l = h();
				l._stream = e, l._teeState = r;
				var u = Object.create(Object.prototype);
				Ne(u, "pull", i), Ne(u, "cancel", s);
				var f = new Ze(u),
					p = Object.create(Object.prototype);
				Ne(p, "pull", i), Ne(p, "cancel", l);
				var g = new Ze(p);
				return i._branch1 = f._readableStreamController, i._branch2 = g._readableStreamController, n._closedPromise["catch"](function(e) {
					r.closedOrErrored !== !0 && (F(i._branch1, e), F(i._branch2, e), r.closedOrErrored = !0)
				}), [f, g]
			}
			function c() {
				function e() {
					var t = e._reader,
						n = e._branch1,
						r = e._branch2,
						i = e._teeState;
					return L(t).then(function(e) {
						je(Fe(e));
						var t = e.value,
							o = e.done;
						if (je("boolean" == typeof o), o === !0 && i.closedOrErrored === !1 && (i.canceled1 === !1 && D(n), i.canceled2 === !1 && D(r), i.closedOrErrored = !0), i.closedOrErrored !== !0) {
							var a = t,
								s = t;
							i.canceled1 === !1 && N(n, a), i.canceled2 === !1 && N(r, s)
						}
					})
				}
				return e
			}
			function d() {
				function e(t) {
					var n = e._stream,
						r = e._teeState;
					if (r.canceled1 = !0, r.reason1 = t, r.canceled2 === !0) {
						var i = De([r.reason1, r.reason2]),
							o = g(n, i);
						r._resolve(o)
					}
					return r.promise
				}
				return e
			}
			function h() {
				function e(t) {
					var n = e._stream,
						r = e._teeState;
					if (r.canceled2 = !0, r.reason2 = t, r.canceled1 === !0) {
						var i = De([r.reason1, r.reason2]),
							o = g(n, i);
						r._resolve(o)
					}
					return r.promise
				}
				return e
			}
			function f(e) {
				je(x(e._reader) === !0), je("readable" === e._state || "closed" === e._state);
				var t = new Promise(function(t, n) {
					var r = {
						_resolve: t,
						_reject: n
					};
					e._reader._readIntoRequests.push(r)
				});
				return t
			}
			function p(e) {
				je(C(e._reader) === !0), je("readable" === e._state);
				var t = new Promise(function(t, n) {
					var r = {
						_resolve: t,
						_reject: n
					};
					e._reader._readRequests.push(r)
				});
				return t
			}
			function g(e, t) {
				if (e._disturbed = !0, "closed" === e._state) return Promise.resolve(void 0);
				if ("errored" === e._state) return Promise.reject(e._storedError);
				v(e);
				var n = e._readableStreamController.__cancelSteps(t);
				return n.then(function() {
					return void 0
				})
			}
			function v(e) {
				je("readable" === e._state), e._state = "closed";
				var t = e._reader;
				if (void 0 === t) return void 0;
				if (C(t) === !0) {
					for (var n = 0; n < t._readRequests.length; n++) {
						var r = t._readRequests[n]._resolve;
						r(Ae(void 0, !0))
					}
					t._readRequests = []
				}
				return void me(t)
			}
			function m(e, t) {
				je(a(e) === !0, "stream must be ReadableStream"), je("readable" === e._state, "state must be readable"), e._state = "errored", e._storedError = t;
				var n = e._reader;
				if (void 0 === n) return void 0;
				if (C(n) === !0) {
					for (var r = 0; r < n._readRequests.length; r++) {
						var i = n._readRequests[r];
						i._reject(t)
					}
					n._readRequests = []
				} else {
					je(x(n), "reader must be ReadableStreamBYOBReader");
					for (var o = 0; o < n._readIntoRequests.length; o++) {
						var s = n._readIntoRequests[o];
						s._reject(t)
					}
					n._readIntoRequests = []
				}
				ge(n, t), n._closedPromise["catch"](function() {})
			}
			function b(e, t, n) {
				var r = e._reader;
				je(r._readIntoRequests.length > 0);
				var i = r._readIntoRequests.shift();
				i._resolve(Ae(t, n))
			}
			function y(e, t, n) {
				var r = e._reader;
				je(r._readRequests.length > 0);
				var i = r._readRequests.shift();
				i._resolve(Ae(t, n))
			}
			function _(e) {
				return e._reader._readIntoRequests.length
			}
			function w(e) {
				return e._reader._readRequests.length
			}
			function S(e) {
				var t = e._reader;
				return void 0 === t ? !1 : x(t) === !1 ? !1 : !0
			}
			function P(e) {
				var t = e._reader;
				return void 0 === t ? !1 : C(t) === !1 ? !1 : !0
			}
			function x(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_readIntoRequests") ? !0 : !1
			}
			function C(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_readRequests") ? !0 : !1
			}
			function A(e, t) {
				e._ownerReadableStream = t, t._reader = e, "readable" === t._state ? he(e) : "closed" === t._state ? pe(e) : (je("errored" === t._state, "state must be errored"), fe(e, t._storedError), e._closedPromise["catch"](function() {}))
			}
			function k(e, t) {
				var n = e._ownerReadableStream;
				return je(void 0 !== n), g(n, t)
			}
			function T(e) {
				je(void 0 !== e._ownerReadableStream), je(e._ownerReadableStream._reader === e), "readable" === e._ownerReadableStream._state ? ge(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")) : ve(e, new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")), e._closedPromise["catch"](function() {}), e._ownerReadableStream._reader = void 0, e._ownerReadableStream = void 0
			}
			function E(e, t) {
				var n = e._ownerReadableStream;
				return je(void 0 !== n), n._disturbed = !0, "errored" === n._state ? Promise.reject(n._storedError) : Q(n._readableStreamController, t)
			}
			function L(e) {
				var t = e._ownerReadableStream;
				return je(void 0 !== t), t._disturbed = !0, "closed" === t._state ? Promise.resolve(Ae(void 0, !0)) : "errored" === t._state ? Promise.reject(t._storedError) : (je("readable" === t._state), t._readableStreamController.__pullSteps())
			}
			function I(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingSource") ? !0 : !1
			}
			function R(e) {
				var t = O(e);
				if (t === !1) return void 0;
				if (e._pulling === !0) return void(e._pullAgain = !0);
				je(e._pullAgain === !1), e._pulling = !0;
				var n = Ee(e._underlyingSource, "pull", [e]);
				return void n.then(function() {
					return e._pulling = !1, e._pullAgain === !0 ? (e._pullAgain = !1, R(e)) : void 0
				}, function(t) {
					M(e, t)
				})["catch"](Be)
			}
			function O(e) {
				var t = e._controlledReadableStream;
				if ("closed" === t._state || "errored" === t._state) return !1;
				if (e._closeRequested === !0) return !1;
				if (e._started === !1) return !1;
				if (l(t) === !0 && w(t) > 0) return !0;
				var n = j(e);
				return n > 0 ? !0 : !1
			}
			function D(e) {
				var t = e._controlledReadableStream;
				je(e._closeRequested === !1), je("readable" === t._state), e._closeRequested = !0, 0 === e._queue.length && v(t)
			}
			function N(e, t) {
				var n = e._controlledReadableStream;
				if (je(e._closeRequested === !1), je("readable" === n._state), l(n) === !0 && w(n) > 0) y(n, t, !1);
				else {
					var r = 1;
					if (void 0 !== e._strategySize) {
						var i = e._strategySize;
						try {
							r = i(t)
						} catch (o) {
							throw M(e, o), o
						}
					}
					try {
						Ue(e, t, r)
					} catch (a) {
						throw M(e, a), a
					}
				}
				return void R(e)
			}
			function F(e, t) {
				var n = e._controlledReadableStream;
				je("readable" === n._state), ze(e), m(n, t)
			}
			function M(e, t) {
				"readable" === e._controlledReadableStream._state && F(e, t)
			}
			function j(e) {
				var t = e._controlledReadableStream,
					n = t._state;
				return "errored" === n ? null : "closed" === n ? 0 : e._strategyHWM - e._queueTotalSize
			}
			function B(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_underlyingByteSource") ? !0 : !1
			}
			function q(e) {
				return Fe(e) && Object.prototype.hasOwnProperty.call(e, "_associatedReadableByteStreamController") ? !0 : !1
			}
			function V(e) {
				var t = ne(e);
				if (t === !1) return void 0;
				if (e._pulling === !0) return void(e._pullAgain = !0);
				je(e._pullAgain === !1), e._pulling = !0;
				var n = Ee(e._underlyingByteSource, "pull", [e]);
				return void n.then(function() {
					e._pulling = !1, e._pullAgain === !0 && (e._pullAgain = !1, V(e))
				}, function(t) {
					"readable" === e._controlledReadableStream._state && oe(e, t)
				})["catch"](Be)
			}
			function U(e) {
				J(e), e._pendingPullIntos = []
			}
			function z(e, t) {
				je("errored" !== e._state, "state must not be errored");
				var n = !1;
				"closed" === e._state && (je(0 === t.bytesFilled), n = !0);
				var r = W(t);
				"default" === t.readerType ? y(e, r, n) : (je("byob" === t.readerType), b(e, r, n))
			}
			function W(e) {
				var t = e.bytesFilled,
					n = e.elementSize;
				return je(t <= e.byteLength), je(t % n === 0), new e.ctor(e.buffer, e.byteOffset, t / n)
			}
			function H(e, t, n, r) {
				e._queue.push({
					buffer: t,
					byteOffset: n,
					byteLength: r
				}), e._queueTotalSize += r
			}
			function G(e, t) {
				var n = t.elementSize,
					r = t.bytesFilled - t.bytesFilled % n,
					i = Math.min(e._queueTotalSize, t.byteLength - t.bytesFilled),
					o = t.bytesFilled + i,
					a = o - o % n,
					s = i,
					l = !1;
				a > r && (s = a - t.bytesFilled, l = !0);
				for (var u = e._queue; s > 0;) {
					var c = u[0],
						d = Math.min(s, c.byteLength),
						h = t.byteOffset + t.bytesFilled;
					Ce(t.buffer, h, c.buffer, c.byteOffset, d), c.byteLength === d ? u.shift() : (c.byteOffset += d, c.byteLength -= d), e._queueTotalSize -= d, $(e, d, t), s -= d
				}
				return l === !1 && (je(0 === e._queueTotalSize, "queue must be empty"), je(t.bytesFilled > 0), je(t.bytesFilled < t.elementSize)), l
			}
			function $(e, t, n) {
				je(0 === e._pendingPullIntos.length || e._pendingPullIntos[0] === n), J(e), n.bytesFilled += t
			}
			function X(e) {
				je("readable" === e._controlledReadableStream._state), 0 === e._queueTotalSize && e._closeRequested === !0 ? v(e._controlledReadableStream) : V(e)
			}
			function J(e) {
				void 0 !== e._byobRequest && (e._byobRequest._associatedReadableByteStreamController = void 0, e._byobRequest._view = void 0, e._byobRequest = void 0)
			}
			function Y(e) {
				for (je(e._closeRequested === !1); e._pendingPullIntos.length > 0;) {
					if (0 === e._queueTotalSize) return;
					var t = e._pendingPullIntos[0];
					G(e, t) === !0 && (te(e), z(e._controlledReadableStream, t))
				}
			}
			function Q(e, t) {
				var n = e._controlledReadableStream,
					r = 1;
				t.constructor !== DataView && (r = t.constructor.BYTES_PER_ELEMENT);
				var i = t.constructor,
					o = {
						buffer: t.buffer,
						byteOffset: t.byteOffset,
						byteLength: t.byteLength,
						bytesFilled: 0,
						elementSize: r,
						ctor: i,
						readerType: "byob"
					};
				if (e._pendingPullIntos.length > 0) return o.buffer = Le(o.buffer), e._pendingPullIntos.push(o), f(n);
				if ("closed" === n._state) {
					var a = new t.constructor(o.buffer, o.byteOffset, 0);
					return Promise.resolve(Ae(a, !0))
				}
				if (e._queueTotalSize > 0) {
					if (G(e, o) === !0) {
						var s = W(o);
						return X(e), Promise.resolve(Ae(s, !1))
					}
					if (e._closeRequested === !0) {
						var l = new TypeError("Insufficient bytes to fill elements in the given buffer");
						return oe(e, l), Promise.reject(l)
					}
				}
				o.buffer = Le(o.buffer), e._pendingPullIntos.push(o);
				var u = f(n);
				return V(e), u
			}
			function K(e, t) {
				t.buffer = Le(t.buffer), je(0 === t.bytesFilled, "bytesFilled must be 0");
				var n = e._controlledReadableStream;
				if (S(n) === !0) for (; _(n) > 0;) {
					var r = te(e);
					z(n, r)
				}
			}
			function Z(e, t, n) {
				if (n.bytesFilled + t > n.byteLength) throw new RangeError("bytesWritten out of range");
				if ($(e, t, n), !(n.bytesFilled < n.elementSize)) {
					te(e);
					var r = n.bytesFilled % n.elementSize;
					if (r > 0) {
						var i = n.byteOffset + n.bytesFilled,
							o = n.buffer.slice(i - r, i);
						H(e, o, 0, o.byteLength)
					}
					n.buffer = Le(n.buffer), n.bytesFilled -= r, z(e._controlledReadableStream, n), Y(e)
				}
			}
			function ee(e, t) {
				var n = e._pendingPullIntos[0],
					r = e._controlledReadableStream;
				if ("closed" === r._state) {
					if (0 !== t) throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream");
					K(e, n)
				} else je("readable" === r._state), Z(e, t, n)
			}
			function te(e) {
				var t = e._pendingPullIntos.shift();
				return J(e), t
			}
			function ne(e) {
				var t = e._controlledReadableStream;
				return "readable" !== t._state ? !1 : e._closeRequested === !0 ? !1 : e._started === !1 ? !1 : P(t) === !0 && w(t) > 0 ? !0 : S(t) === !0 && _(t) > 0 ? !0 : ae(e) > 0 ? !0 : !1
			}
			function re(e) {
				var t = e._controlledReadableStream;
				if (je(e._closeRequested === !1), je("readable" === t._state), e._queueTotalSize > 0) return void(e._closeRequested = !0);
				if (e._pendingPullIntos.length > 0) {
					var n = e._pendingPullIntos[0];
					if (n.bytesFilled > 0) {
						var r = new TypeError("Insufficient bytes to fill elements in the given buffer");
						throw oe(e, r), r
					}
				}
				v(t)
			}
			function ie(e, t) {
				var n = e._controlledReadableStream;
				je(e._closeRequested === !1), je("readable" === n._state);
				var r = t.buffer,
					i = t.byteOffset,
					o = t.byteLength,
					a = Le(r);
				if (P(n) === !0) if (0 === w(n)) H(e, a, i, o);
				else {
					je(0 === e._queue.length);
					var s = new Uint8Array(a, i, o);
					y(n, s, !1)
				} else S(n) === !0 ? (H(e, a, i, o), Y(e)) : (je(l(n) === !1, "stream must not be locked"), H(e, a, i, o))
			}
			function oe(e, t) {
				var n = e._controlledReadableStream;
				je("readable" === n._state), U(e), ze(e), m(n, t)
			}
			function ae(e) {
				var t = e._controlledReadableStream,
					n = t._state;
				return "errored" === n ? null : "closed" === n ? 0 : e._strategyHWM - e._queueTotalSize
			}
			function se(e, t) {
				if (t = Number(t), ke(t) === !1) throw new RangeError("bytesWritten must be a finite");
				je(e._pendingPullIntos.length > 0), ee(e, t)
			}
			function le(e, t) {
				je(e._pendingPullIntos.length > 0);
				var n = e._pendingPullIntos[0];
				if (n.byteOffset + n.bytesFilled !== t.byteOffset) throw new RangeError("The region specified by view does not match byobRequest");
				if (n.byteLength !== t.byteLength) throw new RangeError("The buffer of view has different capacity than byobRequest");
				n.buffer = t.buffer, ee(e, t.byteLength)
			}
			function ue(e) {
				return new TypeError("ReadableStream.prototype." + e + " can only be used on a ReadableStream")
			}
			function ce(e) {
				return new TypeError("Cannot " + e + " a stream using a released reader")
			}
			function de(e) {
				return new TypeError("ReadableStreamDefaultReader.prototype." + e + " can only be used on a ReadableStreamDefaultReader")
			}
			function he(e) {
				e._closedPromise = new Promise(function(t, n) {
					e._closedPromise_resolve = t, e._closedPromise_reject = n
				})
			}
			function fe(e, t) {
				e._closedPromise = Promise.reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0
			}
			function pe(e) {
				e._closedPromise = Promise.resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0
			}
			function ge(e, t) {
				je(void 0 !== e._closedPromise_resolve), je(void 0 !== e._closedPromise_reject), e._closedPromise_reject(t), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0
			}
			function ve(e, t) {
				je(void 0 === e._closedPromise_resolve), je(void 0 === e._closedPromise_reject), e._closedPromise = Promise.reject(t)
			}
			function me(e) {
				je(void 0 !== e._closedPromise_resolve), je(void 0 !== e._closedPromise_reject), e._closedPromise_resolve(void 0), e._closedPromise_resolve = void 0, e._closedPromise_reject = void 0
			}
			function be(e) {
				return new TypeError("ReadableStreamBYOBReader.prototype." + e + " can only be used on a ReadableStreamBYOBReader")
			}
			function ye(e) {
				return new TypeError("ReadableStreamDefaultController.prototype." + e + " can only be used on a ReadableStreamDefaultController")
			}
			function _e(e) {
				return new TypeError("ReadableStreamBYOBRequest.prototype." + e + " can only be used on a ReadableStreamBYOBRequest")
			}
			function we(e) {
				return new TypeError("ReadableByteStreamController.prototype." + e + " can only be used on a ReadableByteStreamController")
			}
			function Se(e) {
				try {
					Promise.prototype.then.call(e, void 0, function() {})
				} catch (t) {}
			}
			var Pe = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				xe = n(0),
				Ce = xe.ArrayBufferCopy,
				Ae = xe.CreateIterResultObject,
				ke = xe.IsFiniteNonNegativeNumber,
				Te = xe.InvokeOrNoop,
				Ee = xe.PromiseInvokeOrNoop,
				Le = xe.TransferArrayBuffer,
				Ie = xe.ValidateAndNormalizeQueuingStrategy,
				Re = xe.ValidateAndNormalizeHighWaterMark,
				Oe = n(0),
				De = Oe.createArrayFromList,
				Ne = Oe.createDataProperty,
				Fe = Oe.typeIsObject,
				Me = n(1),
				je = Me.assert,
				Be = Me.rethrowAssertionErrorRejection,
				qe = n(3),
				Ve = qe.DequeueValue,
				Ue = qe.EnqueueValueWithSize,
				ze = qe.ResetQueue,
				We = n(2),
				He = We.AcquireWritableStreamDefaultWriter,
				Ge = We.IsWritableStream,
				$e = We.IsWritableStreamLocked,
				Xe = We.WritableStreamAbort,
				Je = We.WritableStreamDefaultWriterCloseWithErrorPropagation,
				Ye = We.WritableStreamDefaultWriterRelease,
				Qe = We.WritableStreamDefaultWriterWrite,
				Ke = We.WritableStreamCloseQueuedOrInFlight,
				Ze = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
							n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
							i = n.size,
							o = n.highWaterMark;
						r(this, e), this._state = "readable", this._reader = void 0, this._storedError = void 0, this._disturbed = !1, this._readableStreamController = void 0;
						var a = t.type,
							s = String(a);
						if ("bytes" === s) void 0 === o && (o = 0), this._readableStreamController = new it(this, t, o);
						else {
							if (void 0 !== a) throw new RangeError("Invalid type is specified");
							void 0 === o && (o = 1), this._readableStreamController = new nt(this, t, i, o)
						}
					}
					return Pe(e, [{
						key: "cancel",
						value: function(e) {
							return a(this) === !1 ? Promise.reject(ue("cancel")) : l(this) === !0 ? Promise.reject(new TypeError("Cannot cancel a stream that already has a reader")) : g(this, e)
						}
					}, {
						key: "getReader",
						value: function() {
							var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
								t = e.mode;
							if (a(this) === !1) throw ue("getReader");
							if (void 0 === t) return o(this);
							if (t = String(t), "byob" === t) return i(this);
							throw new RangeError("Invalid mode is specified")
						}
					}, {
						key: "pipeThrough",
						value: function(e, t) {
							var n = e.writable,
								r = e.readable,
								i = this.pipeTo(n, t);
							return Se(i), r
						}
					}, {
						key: "pipeTo",
						value: function(e) {
							var t = this,
								n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
								r = n.preventClose,
								i = n.preventAbort,
								s = n.preventCancel;
							if (a(this) === !1) return Promise.reject(ue("pipeTo"));
							if (Ge(e) === !1) return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));
							if (r = Boolean(r), i = Boolean(i), s = Boolean(s), l(this) === !0) return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream"));
							if ($e(e) === !0) return Promise.reject(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream"));
							var u = o(this),
								c = He(e),
								d = !1,
								h = Promise.resolve();
							return new Promise(function(n, o) {
								function a() {
									return h = Promise.resolve(), d === !0 ? Promise.resolve() : c._readyPromise.then(function() {
										return L(u).then(function(e) {
											var t = e.value,
												n = e.done;
											n !== !0 && (h = Qe(c, t)["catch"](function() {}))
										})
									}).then(a)
								}
								function l() {
									var e = h;
									return h.then(function() {
										return e !== h ? l() : void 0
									})
								}
								function f(e, t, n) {
									"errored" === e._state ? n(e._storedError) : t["catch"](n)["catch"](Be)
								}
								function p(e, t, n) {
									"closed" === e._state ? n() : t.then(n)["catch"](Be)
								}
								function v(t, n, r) {
									function i() {
										t().then(function() {
											return b(n, r)
										}, function(e) {
											return b(!0, e)
										})["catch"](Be)
									}
									d !== !0 && (d = !0, "writable" === e._state && Ke(e) === !1 ? l().then(i) : i())
								}
								function m(t, n) {
									d !== !0 && (d = !0, "writable" === e._state && Ke(e) === !1 ? l().then(function() {
										return b(t, n)
									})["catch"](Be) : b(t, n))
								}
								function b(e, t) {
									Ye(c), T(u), e ? o(t) : n(void 0)
								}
								if (f(t, u._closedPromise, function(t) {
									i === !1 ? v(function() {
										return Xe(e, t)
									}, !0, t) : m(!0, t)
								}), f(e, c._closedPromise, function(e) {
									s === !1 ? v(function() {
										return g(t, e)
									}, !0, e) : m(!0, e)
								}), p(t, u._closedPromise, function() {
									r === !1 ? v(function() {
										return Je(c)
									}) : m()
								}), Ke(e) === !0 || "closed" === e._state) {
									var y = new TypeError("the destination writable stream closed before all data could be piped to it");
									s === !1 ? v(function() {
										return g(t, y)
									}, !0, y) : m(!0, y)
								}
								a()["catch"](function(e) {
									h = Promise.resolve(), Be(e)
								})
							})
						}
					}, {
						key: "tee",
						value: function() {
							if (a(this) === !1) throw ue("tee");
							var e = u(this, !1);
							return De(e)
						}
					}, {
						key: "locked",
						get: function() {
							if (a(this) === !1) throw ue("locked");
							return l(this)
						}
					}]), e
				}();
			e.exports = {
				ReadableStream: Ze,
				IsReadableStreamDisturbed: s,
				ReadableStreamDefaultControllerClose: D,
				ReadableStreamDefaultControllerEnqueue: N,
				ReadableStreamDefaultControllerError: F,
				ReadableStreamDefaultControllerGetDesiredSize: j
			};
			var et = function() {
					function e(t) {
						if (r(this, e), a(t) === !1) throw new TypeError("ReadableStreamDefaultReader can only be constructed with a ReadableStream instance");
						if (l(t) === !0) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
						A(this, t), this._readRequests = []
					}
					return Pe(e, [{
						key: "cancel",
						value: function(e) {
							return C(this) === !1 ? Promise.reject(de("cancel")) : void 0 === this._ownerReadableStream ? Promise.reject(ce("cancel")) : k(this, e)
						}
					}, {
						key: "read",
						value: function() {
							return C(this) === !1 ? Promise.reject(de("read")) : void 0 === this._ownerReadableStream ? Promise.reject(ce("read from")) : L(this)
						}
					}, {
						key: "releaseLock",
						value: function() {
							if (C(this) === !1) throw de("releaseLock");
							if (void 0 !== this._ownerReadableStream) {
								if (this._readRequests.length > 0) throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
								T(this)
							}
						}
					}, {
						key: "closed",
						get: function() {
							return C(this) === !1 ? Promise.reject(de("closed")) : this._closedPromise
						}
					}]), e
				}(),
				tt = function() {
					function e(t) {
						if (r(this, e), !a(t)) throw new TypeError("ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a byte source");
						if (B(t._readableStreamController) === !1) throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");
						if (l(t)) throw new TypeError("This stream has already been locked for exclusive reading by another reader");
						A(this, t), this._readIntoRequests = []
					}
					return Pe(e, [{
						key: "cancel",
						value: function(e) {
							return x(this) ? void 0 === this._ownerReadableStream ? Promise.reject(ce("cancel")) : k(this, e) : Promise.reject(be("cancel"))
						}
					}, {
						key: "read",
						value: function(e) {
							return x(this) ? void 0 === this._ownerReadableStream ? Promise.reject(ce("read from")) : ArrayBuffer.isView(e) ? 0 === e.byteLength ? Promise.reject(new TypeError("view must have non-zero byteLength")) : E(this, e) : Promise.reject(new TypeError("view must be an array buffer view")) : Promise.reject(be("read"))
						}
					}, {
						key: "releaseLock",
						value: function() {
							if (!x(this)) throw be("releaseLock");
							if (void 0 !== this._ownerReadableStream) {
								if (this._readIntoRequests.length > 0) throw new TypeError("Tried to release a reader lock when that reader has pending read() calls un-settled");
								T(this)
							}
						}
					}, {
						key: "closed",
						get: function() {
							return x(this) ? this._closedPromise : Promise.reject(be("closed"))
						}
					}]), e
				}(),
				nt = function() {
					function e(t, n, i, o) {
						if (r(this, e), a(t) === !1) throw new TypeError("ReadableStreamDefaultController can only be constructed with a ReadableStream instance");
						if (void 0 !== t._readableStreamController) throw new TypeError("ReadableStreamDefaultController instances can only be created by the ReadableStream constructor");
						this._controlledReadableStream = t, this._underlyingSource = n, this._queue = void 0, this._queueTotalSize = void 0, ze(this), this._started = !1, this._closeRequested = !1, this._pullAgain = !1, this._pulling = !1;
						var s = Ie(i, o);
						this._strategySize = s.size, this._strategyHWM = s.highWaterMark;
						var l = this,
							u = Te(n, "start", [this]);
						Promise.resolve(u).then(function() {
							l._started = !0, je(l._pulling === !1), je(l._pullAgain === !1), R(l)
						}, function(e) {
							M(l, e)
						})["catch"](Be)
					}
					return Pe(e, [{
						key: "close",
						value: function() {
							if (I(this) === !1) throw ye("close");
							if (this._closeRequested === !0) throw new TypeError("The stream has already been closed; do not close it again!");
							var e = this._controlledReadableStream._state;
							if ("readable" !== e) throw new TypeError("The stream (in " + e + " state) is not in the readable state and cannot be closed");
							D(this)
						}
					}, {
						key: "enqueue",
						value: function(e) {
							if (I(this) === !1) throw ye("enqueue");
							if (this._closeRequested === !0) throw new TypeError("stream is closed or draining");
							var t = this._controlledReadableStream._state;
							if ("readable" !== t) throw new TypeError("The stream (in " + t + " state) is not in the readable state and cannot be enqueued to");
							return N(this, e)
						}
					}, {
						key: "error",
						value: function(e) {
							if (I(this) === !1) throw ye("error");
							var t = this._controlledReadableStream;
							if ("readable" !== t._state) throw new TypeError("The stream is " + t._state + " and so cannot be errored");
							F(this, e)
						}
					}, {
						key: "__cancelSteps",
						value: function(e) {
							return ze(this), Ee(this._underlyingSource, "cancel", [e])
						}
					}, {
						key: "__pullSteps",
						value: function() {
							var e = this._controlledReadableStream;
							if (this._queue.length > 0) {
								var t = Ve(this);
								return this._closeRequested === !0 && 0 === this._queue.length ? v(e) : R(this), Promise.resolve(Ae(t, !1))
							}
							var n = p(e);
							return R(this), n
						}
					}, {
						key: "desiredSize",
						get: function() {
							if (I(this) === !1) throw ye("desiredSize");
							return j(this)
						}
					}]), e
				}(),
				rt = function() {
					function e(t, n) {
						r(this, e), this._associatedReadableByteStreamController = t, this._view = n
					}
					return Pe(e, [{
						key: "respond",
						value: function(e) {
							if (q(this) === !1) throw _e("respond");
							if (void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
							se(this._associatedReadableByteStreamController, e)
						}
					}, {
						key: "respondWithNewView",
						value: function(e) {
							if (q(this) === !1) throw _e("respond");
							if (void 0 === this._associatedReadableByteStreamController) throw new TypeError("This BYOB request has been invalidated");
							if (!ArrayBuffer.isView(e)) throw new TypeError("You can only respond with array buffer views");
							le(this._associatedReadableByteStreamController, e)
						}
					}, {
						key: "view",
						get: function() {
							return this._view
						}
					}]), e
				}(),
				it = function() {
					function e(t, n, i) {
						if (r(this, e), a(t) === !1) throw new TypeError("ReadableByteStreamController can only be constructed with a ReadableStream instance given a byte source");
						if (void 0 !== t._readableStreamController) throw new TypeError("ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte source");
						this._controlledReadableStream = t, this._underlyingByteSource = n, this._pullAgain = !1, this._pulling = !1, U(this), this._queue = this._queueTotalSize = void 0, ze(this), this._closeRequested = !1, this._started = !1, this._strategyHWM = Re(i);
						var o = n.autoAllocateChunkSize;
						if (void 0 !== o && (Number.isInteger(o) === !1 || 0 >= o)) throw new RangeError("autoAllocateChunkSize must be a positive integer");
						this._autoAllocateChunkSize = o, this._pendingPullIntos = [];
						var s = this,
							l = Te(n, "start", [this]);
						Promise.resolve(l).then(function() {
							s._started = !0, je(s._pulling === !1), je(s._pullAgain === !1), V(s)
						}, function(e) {
							"readable" === t._state && oe(s, e)
						})["catch"](Be)
					}
					return Pe(e, [{
						key: "close",
						value: function() {
							if (B(this) === !1) throw we("close");
							if (this._closeRequested === !0) throw new TypeError("The stream has already been closed; do not close it again!");
							var e = this._controlledReadableStream._state;
							if ("readable" !== e) throw new TypeError("The stream (in " + e + " state) is not in the readable state and cannot be closed");
							re(this)
						}
					}, {
						key: "enqueue",
						value: function(e) {
							if (B(this) === !1) throw we("enqueue");
							if (this._closeRequested === !0) throw new TypeError("stream is closed or draining");
							var t = this._controlledReadableStream._state;
							if ("readable" !== t) throw new TypeError("The stream (in " + t + " state) is not in the readable state and cannot be enqueued to");
							if (!ArrayBuffer.isView(e)) throw new TypeError("You can only enqueue array buffer views when using a ReadableByteStreamController");
							ie(this, e)
						}
					}, {
						key: "error",
						value: function(e) {
							if (B(this) === !1) throw we("error");
							var t = this._controlledReadableStream;
							if ("readable" !== t._state) throw new TypeError("The stream is " + t._state + " and so cannot be errored");
							oe(this, e)
						}
					}, {
						key: "__cancelSteps",
						value: function(e) {
							if (this._pendingPullIntos.length > 0) {
								var t = this._pendingPullIntos[0];
								t.bytesFilled = 0
							}
							return ze(this), Ee(this._underlyingByteSource, "cancel", [e])
						}
					}, {
						key: "__pullSteps",
						value: function() {
							var e = this._controlledReadableStream;
							if (je(P(e) === !0), this._queueTotalSize > 0) {
								je(0 === w(e));
								var t = this._queue.shift();
								this._queueTotalSize -= t.byteLength, X(this);
								var n = void 0;
								try {
									n = new Uint8Array(t.buffer, t.byteOffset, t.byteLength)
								} catch (r) {
									return Promise.reject(r)
								}
								return Promise.resolve(Ae(n, !1))
							}
							var i = this._autoAllocateChunkSize;
							if (void 0 !== i) {
								var o = void 0;
								try {
									o = new ArrayBuffer(i)
								} catch (a) {
									return Promise.reject(a)
								}
								var s = {
									buffer: o,
									byteOffset: 0,
									byteLength: i,
									bytesFilled: 0,
									elementSize: 1,
									ctor: Uint8Array,
									readerType: "default"
								};
								this._pendingPullIntos.push(s)
							}
							var l = p(e);
							return V(this), l
						}
					}, {
						key: "byobRequest",
						get: function() {
							if (B(this) === !1) throw we("byobRequest");
							if (void 0 === this._byobRequest && this._pendingPullIntos.length > 0) {
								var e = this._pendingPullIntos[0],
									t = new Uint8Array(e.buffer, e.byteOffset + e.bytesFilled, e.byteLength - e.bytesFilled);
								this._byobRequest = new rt(this, t)
							}
							return this._byobRequest
						}
					}, {
						key: "desiredSize",
						get: function() {
							if (B(this) === !1) throw we("desiredSize");
							return ae(this)
						}
					}]), e
				}()
		}, function(e, t, n) {
			var r = n(6),
				i = n(4),
				o = n(2);
			t.TransformStream = r.TransformStream, t.ReadableStream = i.ReadableStream, t.IsReadableStreamDisturbed = i.IsReadableStreamDisturbed, t.ReadableStreamDefaultControllerClose = i.ReadableStreamDefaultControllerClose, t.ReadableStreamDefaultControllerEnqueue = i.ReadableStreamDefaultControllerEnqueue, t.ReadableStreamDefaultControllerError = i.ReadableStreamDefaultControllerError, t.ReadableStreamDefaultControllerGetDesiredSize = i.ReadableStreamDefaultControllerGetDesiredSize, t.AcquireWritableStreamDefaultWriter = o.AcquireWritableStreamDefaultWriter, t.IsWritableStream = o.IsWritableStream, t.IsWritableStreamLocked = o.IsWritableStreamLocked, t.WritableStream = o.WritableStream, t.WritableStreamAbort = o.WritableStreamAbort, t.WritableStreamDefaultControllerError = o.WritableStreamDefaultControllerError, t.WritableStreamDefaultWriterCloseWithErrorPropagation = o.WritableStreamDefaultWriterCloseWithErrorPropagation, t.WritableStreamDefaultWriterRelease = o.WritableStreamDefaultWriterRelease, t.WritableStreamDefaultWriterWrite = o.WritableStreamDefaultWriterWrite
		}, function(e, t, n) {
			function r(e, t) {
				if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
			}
			function i(e) {
				if (e._errored === !0) throw new TypeError("TransformStream is already errored");
				if (e._readableClosed === !0) throw new TypeError("Readable side is already closed");
				s(e)
			}
			function o(e, t) {
				if (e._errored === !0) throw new TypeError("TransformStream is already errored");
				if (e._readableClosed === !0) throw new TypeError("Readable side is already closed");
				var n = e._readableController;
				try {
					E(n, t)
				} catch (r) {
					throw e._readableClosed = !0, l(e, r), e._storedError
				}
				var i = I(n),
					o = 0 >= i;
				o === !0 && e._backpressure === !1 && d(e, !0)
			}
			function a(e, t) {
				if (e._errored === !0) throw new TypeError("TransformStream is already errored");
				u(e, t)
			}
			function s(e) {
				_(e._errored === !1), _(e._readableClosed === !1);
				try {
					T(e._readableController)
				} catch (t) {
					_(!1)
				}
				e._readableClosed = !0
			}
			function l(e, t) {
				e._errored === !1 && u(e, t)
			}
			function u(e, t) {
				_(e._errored === !1), e._errored = !0, e._storedError = t, e._writableDone === !1 && D(e._writableController, t), e._readableClosed === !1 && L(e._readableController, t)
			}
			function c(e) {
				return _(void 0 !== e._backpressureChangePromise, "_backpressureChangePromise should have been initialized"), e._backpressure === !1 ? Promise.resolve() : (_(e._backpressure === !0, "_backpressure should have been initialized"), e._backpressureChangePromise)
			}
			function d(e, t) {
				_(e._backpressure !== t, "TransformStreamSetBackpressure() should be called only when backpressure is changed"), void 0 !== e._backpressureChangePromise && e._backpressureChangePromise_resolve(t), e._backpressureChangePromise = new Promise(function(t) {
					e._backpressureChangePromise_resolve = t
				}), e._backpressureChangePromise.then(function(e) {
					_(e !== t, "_backpressureChangePromise should be fulfilled only when backpressure is changed")
				}), e._backpressure = t
			}
			function h(e, t) {
				var n = t._controlledTransformStream;
				return o(n, e), Promise.resolve()
			}
			function f(e, t) {
				_(e._errored === !1), _(e._transforming === !1), _(e._backpressure === !1), e._transforming = !0;
				var n = e._transformer,
					r = e._transformStreamController,
					i = P(n, "transform", [t, r], h, [t, r]);
				return i.then(function() {
					return e._transforming = !1, c(e)
				}, function(t) {
					return l(e, t), Promise.reject(t)
				})
			}
			function p(e) {
				return C(e) && Object.prototype.hasOwnProperty.call(e, "_controlledTransformStream") ? !0 : !1
			}
			function g(e) {
				return C(e) && Object.prototype.hasOwnProperty.call(e, "_transformStreamController") ? !0 : !1
			}
			function v(e) {
				return new TypeError("TransformStreamDefaultController.prototype." + e + " can only be used on a TransformStreamDefaultController")
			}
			function m(e) {
				return new TypeError("TransformStream.prototype." + e + " can only be used on a TransformStream")
			}
			var b = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var r = t[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
						}
					}
					return function(t, n, r) {
						return n && e(t.prototype, n), r && e(t, r), t
					}
				}(),
				y = n(1),
				_ = y.assert,
				w = n(0),
				S = w.InvokeOrNoop,
				P = w.PromiseInvokeOrPerformFallback,
				x = w.PromiseInvokeOrNoop,
				C = w.typeIsObject,
				A = n(4),
				k = A.ReadableStream,
				T = A.ReadableStreamDefaultControllerClose,
				E = A.ReadableStreamDefaultControllerEnqueue,
				L = A.ReadableStreamDefaultControllerError,
				I = A.ReadableStreamDefaultControllerGetDesiredSize,
				R = n(2),
				O = R.WritableStream,
				D = R.WritableStreamDefaultControllerError,
				N = function() {
					function e(t, n) {
						r(this, e), this._transformStream = t, this._startPromise = n
					}
					return b(e, [{
						key: "start",
						value: function(e) {
							var t = this._transformStream;
							return t._writableController = e, this._startPromise.then(function() {
								return c(t)
							})
						}
					}, {
						key: "write",
						value: function(e) {
							var t = this._transformStream;
							return f(t, e)
						}
					}, {
						key: "abort",
						value: function() {
							var e = this._transformStream;
							e._writableDone = !0, u(e, new TypeError("Writable side aborted"))
						}
					}, {
						key: "close",
						value: function() {
							var e = this._transformStream;
							_(e._transforming === !1), e._writableDone = !0;
							var t = x(e._transformer, "flush", [e._transformStreamController]);
							return t.then(function() {
								return e._errored === !0 ? Promise.reject(e._storedError) : (e._readableClosed === !1 && s(e), Promise.resolve())
							})["catch"](function(t) {
								return l(e, t), Promise.reject(e._storedError)
							})
						}
					}]), e
				}(),
				F = function() {
					function e(t, n) {
						r(this, e), this._transformStream = t, this._startPromise = n
					}
					return b(e, [{
						key: "start",
						value: function(e) {
							var t = this._transformStream;
							return t._readableController = e, this._startPromise.then(function() {
								return _(void 0 !== t._backpressureChangePromise, "_backpressureChangePromise should have been initialized"), t._backpressure === !0 ? Promise.resolve() : (_(t._backpressure === !1, "_backpressure should have been initialized"), t._backpressureChangePromise)
							})
						}
					}, {
						key: "pull",
						value: function() {
							var e = this._transformStream;
							return _(e._backpressure === !0, "pull() should be never called while _backpressure is false"), _(void 0 !== e._backpressureChangePromise, "_backpressureChangePromise should have been initialized"), d(e, !1), e._backpressureChangePromise
						}
					}, {
						key: "cancel",
						value: function() {
							var e = this._transformStream;
							e._readableClosed = !0, u(e, new TypeError("Readable side canceled"))
						}
					}]), e
				}(),
				M = function() {
					function e(t) {
						if (r(this, e), g(t) === !1) throw new TypeError("TransformStreamDefaultController can only be constructed with a TransformStream instance");
						if (void 0 !== t._transformStreamController) throw new TypeError("TransformStreamDefaultController instances can only be created by the TransformStream constructor");
						this._controlledTransformStream = t
					}
					return b(e, [{
						key: "enqueue",
						value: function(e) {
							if (p(this) === !1) throw v("enqueue");
							o(this._controlledTransformStream, e)
						}
					}, {
						key: "close",
						value: function() {
							if (p(this) === !1) throw v("close");
							i(this._controlledTransformStream)
						}
					}, {
						key: "error",
						value: function(e) {
							if (p(this) === !1) throw v("error");
							a(this._controlledTransformStream, e)
						}
					}, {
						key: "desiredSize",
						get: function() {
							if (p(this) === !1) throw v("desiredSize");
							var e = this._controlledTransformStream,
								t = e._readableController;
							return I(t)
						}
					}]), e
				}(),
				j = function() {
					function e() {
						var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
						r(this, e), this._transformer = t;
						var n = t.readableStrategy,
							i = t.writableStrategy;
						this._transforming = !1, this._errored = !1, this._storedError = void 0, this._writableController = void 0, this._readableController = void 0, this._transformStreamController = void 0, this._writableDone = !1, this._readableClosed = !1, this._backpressure = void 0, this._backpressureChangePromise = void 0, this._backpressureChangePromise_resolve = void 0, this._transformStreamController = new M(this);
						var o = void 0,
							a = new Promise(function(e) {
								o = e
							}),
							s = new F(this, a);
						this._readable = new k(s, n);
						var l = new N(this, a);
						this._writable = new O(l, i), _(void 0 !== this._writableController), _(void 0 !== this._readableController);
						var u = I(this._readableController);
						d(this, 0 >= u);
						var c = this,
							h = S(t, "start", [c._transformStreamController]);
						o(h), a["catch"](function(e) {
							c._errored === !1 && (c._errored = !0, c._storedError = e)
						})
					}
					return b(e, [{
						key: "readable",
						get: function() {
							if (g(this) === !1) throw m("readable");
							return this._readable
						}
					}, {
						key: "writable",
						get: function() {
							if (g(this) === !1) throw m("writable");
							return this._writable
						}
					}]), e
				}();
			e.exports = {
				TransformStream: j
			}
		}, function(e, t, n) {
			e.exports = n(5)
		}]))
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PDFJS = t.globalScope = void 0;
		var i = n(8),
			o = n(0),
			a = n(57),
			s = n(60),
			l = n(14),
			u = r(l),
			c = n(59),
			d = n(61),
			h = n(62);
		u["default"].PDFJS || (u["default"].PDFJS = {});
		var f = u["default"].PDFJS;
		f.version = "2.0.99", f.build = "2b70e68eb", f.pdfBug = !1, void 0 !== f.verbosity && (0, o.setVerbosityLevel)(f.verbosity), delete f.verbosity, Object.defineProperty(f, "verbosity", {
			get: function() {
				return (0, o.getVerbosityLevel)()
			},
			set: function(e) {
				(0, o.setVerbosityLevel)(e)
			},
			enumerable: !0,
			configurable: !0
		}), f.VERBOSITY_LEVELS = o.VERBOSITY_LEVELS, f.OPS = o.OPS, f.UNSUPPORTED_FEATURES = o.UNSUPPORTED_FEATURES, f.isValidUrl = i.isValidUrl, f.shadow = o.shadow, f.createBlob = o.createBlob, f.createObjectURL = function(e, t) {
			return (0, o.createObjectURL)(e, t, f.disableCreateObjectURL)
		}, Object.defineProperty(f, "isLittleEndian", {
			configurable: !0,
			get: function() {
				return (0, o.shadow)(f, "isLittleEndian", (0, o.isLittleEndian)())
			}
		}), f.removeNullCharacters = o.removeNullCharacters, f.PasswordResponses = o.PasswordResponses, f.PasswordException = o.PasswordException, f.UnknownErrorException = o.UnknownErrorException, f.InvalidPDFException = o.InvalidPDFException, f.MissingPDFException = o.MissingPDFException, f.UnexpectedResponseException = o.UnexpectedResponseException, f.Util = o.Util, f.PageViewport = o.PageViewport, f.createPromiseCapability = o.createPromiseCapability, f.maxImageSize = void 0 === f.maxImageSize ? -1 : f.maxImageSize, f.cMapUrl = void 0 === f.cMapUrl ? null : f.cMapUrl, f.cMapPacked = void 0 === f.cMapPacked ? !1 : f.cMapPacked, f.disableFontFace = void 0 === f.disableFontFace ? !1 : f.disableFontFace, f.imageResourcesPath = void 0 === f.imageResourcesPath ? "" : f.imageResourcesPath, f.disableWorker = void 0 === f.disableWorker ? !1 : f.disableWorker, f.workerSrc = void 0 === f.workerSrc ? null : f.workerSrc, f.workerPort = void 0 === f.workerPort ? null : f.workerPort, f.disableRange = void 0 === f.disableRange ? !1 : f.disableRange, f.disableStream = void 0 === f.disableStream ? !1 : f.disableStream, f.disableAutoFetch = void 0 === f.disableAutoFetch ? !1 : f.disableAutoFetch, f.pdfBug = void 0 === f.pdfBug ? !1 : f.pdfBug, f.postMessageTransfers = void 0 === f.postMessageTransfers ? !0 : f.postMessageTransfers, f.disableCreateObjectURL = void 0 === f.disableCreateObjectURL ? !1 : f.disableCreateObjectURL, f.disableWebGL = void 0 === f.disableWebGL ? !0 : f.disableWebGL, f.externalLinkTarget = void 0 === f.externalLinkTarget ? i.LinkTarget.NONE : f.externalLinkTarget, f.externalLinkRel = void 0 === f.externalLinkRel ? i.DEFAULT_LINK_REL : f.externalLinkRel, f.isEvalSupported = void 0 === f.isEvalSupported ? !0 : f.isEvalSupported, f.getDocument = a.getDocument, f.LoopbackPort = a.LoopbackPort, f.PDFDataRangeTransport = a.PDFDataRangeTransport, f.PDFWorker = a.PDFWorker, f.CustomStyle = i.CustomStyle, f.LinkTarget = i.LinkTarget, f.addLinkAttributes = i.addLinkAttributes, f.getFilenameFromUrl = i.getFilenameFromUrl, f.isExternalLinkTargetSet = i.isExternalLinkTargetSet, f.AnnotationLayer = s.AnnotationLayer, f.renderTextLayer = d.renderTextLayer, f.Metadata = c.Metadata, f.SVGGraphics = h.SVGGraphics, t.globalScope = u["default"], t.PDFJS = f
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			this.docId = e, this.styleElement = null, this.nativeFontFaces = [], this.loadTestFontId = 0, this.loadingContext = {
				requests: [],
				nextRequestId: 0
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.FontLoader = t.FontFaceObject = void 0;
		var i = n(0);
		r.prototype = {
			insertRule: function(e) {
				var t = this.styleElement;
				t || (t = this.styleElement = document.createElement("style"), t.id = "PDFJS_FONT_STYLE_TAG_" + this.docId, document.documentElement.getElementsByTagName("head")[0].appendChild(t));
				var n = t.sheet;
				n.insertRule(e, n.cssRules.length)
			},
			clear: function() {
				this.styleElement && (this.styleElement.remove(), this.styleElement = null), this.nativeFontFaces.forEach(function(e) {
					document.fonts["delete"](e)
				}), this.nativeFontFaces.length = 0
			}
		};
		var o = function() {
				return atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==")
			};
		Object.defineProperty(r.prototype, "loadTestFont", {
			get: function() {
				return (0, i.shadow)(this, "loadTestFont", o())
			},
			configurable: !0
		}), r.prototype.addNativeFontFace = function(e) {
			this.nativeFontFaces.push(e), document.fonts.add(e)
		}, r.prototype.bind = function(e, t) {
			for (var n = [], o = [], a = [], s = function(e) {
					return e.loaded["catch"](function(t) {
						(0, i.warn)('Failed to load font "' + e.family + '": ' + t)
					})
				}, l = r.isFontLoadingAPISupported && !r.isSyncFontLoadingSupported, u = 0, c = e.length; c > u; u++) {
				var d = e[u];
				if (!d.attached && d.loading !== !1) if (d.attached = !0, l) {
					var h = d.createNativeFontFace();
					h && (this.addNativeFontFace(h), a.push(s(h)))
				} else {
					var f = d.createFontFaceRule();
					f && (this.insertRule(f), n.push(f), o.push(d))
				}
			}
			var p = this.queueLoadingCallback(t);
			l ? Promise.all(a).then(function() {
				p.complete()
			}) : n.length > 0 && !r.isSyncFontLoadingSupported ? this.prepareFontLoadEvent(n, o, p) : p.complete()
		}, r.prototype.queueLoadingCallback = function(e) {
			function t() {
				for ((0, i.assert)(!o.end, "completeRequest() cannot be called twice"), o.end = Date.now(); n.requests.length > 0 && n.requests[0].end;) {
					var e = n.requests.shift();
					setTimeout(e.callback, 0)
				}
			}
			var n = this.loadingContext,
				r = "pdfjs-font-loading-" + n.nextRequestId++,
				o = {
					id: r,
					complete: t,
					callback: e,
					started: Date.now()
				};
			return n.requests.push(o), o
		}, r.prototype.prepareFontLoadEvent = function(e, t, n) {
			function r(e, t) {
				return e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | 255 & e.charCodeAt(t + 3)
			}
			function o(e, t, n, r) {
				var i = e.substr(0, t),
					o = e.substr(t + n);
				return i + r + o
			}
			function a(e, t) {
				if (d++, d > 30) return (0, i.warn)("Load test font never loaded."), void t();
				c.font = "30px " + e, c.fillText(".", 0, 20);
				var n = c.getImageData(0, 0, 1, 1);
				return n.data[3] > 0 ? void t() : void setTimeout(a.bind(null, e, t))
			}
			var s, l, u = document.createElement("canvas");
			u.width = 1, u.height = 1;
			var c = u.getContext("2d"),
				d = 0,
				h = "lt" + Date.now() + this.loadTestFontId++,
				f = this.loadTestFont,
				p = 976;
			f = o(f, p, h.length, h);
			var g = 16,
				v = 1482184792,
				m = r(f, g);
			for (s = 0, l = h.length - 3; l > s; s += 4) m = m - v + r(h, s) | 0;
			s < h.length && (m = m - v + r(h + "XXX", s) | 0), f = o(f, g, 4, (0, i.string32)(m));
			var b = "url(data:font/opentype;base64," + btoa(f) + ");",
				y = '@font-face { font-family:"' + h + '";src:' + b + "}";
			this.insertRule(y);
			var _ = [];
			for (s = 0, l = t.length; l > s; s++) _.push(t[s].loadedName);
			_.push(h);
			var w = document.createElement("div");
			for (w.setAttribute("style", "visibility: hidden;width: 10px; height: 10px;position: absolute; top: 0px; left: 0px;"), s = 0, l = _.length; l > s; ++s) {
				var S = document.createElement("span");
				S.textContent = "Hi", S.style.fontFamily = _[s], w.appendChild(S)
			}
			document.body.appendChild(w), a(h, function() {
				document.body.removeChild(w), n.complete()
			})
		}, r.isFontLoadingAPISupported = "undefined" != typeof document && !! document.fonts;
		var a = function() {
				if ("undefined" == typeof navigator) return !0;
				var e = !1,
					t = /Mozilla\/5.0.*?rv:(\d+).*? Gecko/.exec(navigator.userAgent);
				return t && t[1] >= 14 && (e = !0), e
			};
		Object.defineProperty(r, "isSyncFontLoadingSupported", {
			get: function() {
				return (0, i.shadow)(r, "isSyncFontLoadingSupported", a())
			},
			enumerable: !0,
			configurable: !0
		});
		var s = {
			get value() {
				return (0, i.shadow)(this, "value", (0, i.isEvalSupported)())
			}
		},
			l = function() {
				function e(e, t) {
					this.compiledGlyphs = Object.create(null);
					for (var n in e) this[n] = e[n];
					this.options = t;
				}
				return e.prototype = {
					createNativeFontFace: function() {
						if (!this.data) return null;
						if (this.options.disableFontFace) return this.disableFontFace = !0, null;
						var e = new FontFace(this.loadedName, this.data, {});
						return this.options.fontRegistry && this.options.fontRegistry.registerFont(this), e
					},
					createFontFaceRule: function() {
						if (!this.data) return null;
						if (this.options.disableFontFace) return this.disableFontFace = !0, null;
						var e = (0, i.bytesToString)(new Uint8Array(this.data)),
							t = this.loadedName,
							n = "url(data:" + this.mimetype + ";base64," + btoa(e) + ");",
							r = '@font-face { font-family:"' + t + '";src:' + n + "}";
						return this.options.fontRegistry && this.options.fontRegistry.registerFont(this, n), r
					},
					getPathGenerator: function(e, t) {
						if (!(t in this.compiledGlyphs)) {
							var n, r, i, o = e.get(this.loadedName + "_path_" + t);
							if (this.options.isEvalSupported && s.value) {
								var a, l = "";
								for (r = 0, i = o.length; i > r; r++) n = o[r], a = void 0 !== n.args ? n.args.join(",") : "", l += "c." + n.cmd + "(" + a + ");\n";
								this.compiledGlyphs[t] = new Function("c", "size", l)
							} else this.compiledGlyphs[t] = function(e, t) {
								for (r = 0, i = o.length; i > r; r++) n = o[r], "scale" === n.cmd && (n.args = [t, -t]), e[n.cmd].apply(e, n.args)
							}
						}
						return this.compiledGlyphs[t]
					}
				}, e
			}();
		t.FontFaceObject = l, t.FontLoader = r
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			e.mozCurrentTransform || (e._originalSave = e.save, e._originalRestore = e.restore, e._originalRotate = e.rotate, e._originalScale = e.scale, e._originalTranslate = e.translate, e._originalTransform = e.transform, e._originalSetTransform = e.setTransform, e._transformMatrix = e._transformMatrix || [1, 0, 0, 1, 0, 0], e._transformStack = [], Object.defineProperty(e, "mozCurrentTransform", {
				get: function() {
					return this._transformMatrix
				}
			}), Object.defineProperty(e, "mozCurrentTransformInverse", {
				get: function() {
					var e = this._transformMatrix,
						t = e[0],
						n = e[1],
						r = e[2],
						i = e[3],
						o = e[4],
						a = e[5],
						s = t * i - n * r,
						l = n * r - t * i;
					return [i / s, n / l, r / l, t / s, (i * o - r * a) / l, (n * o - t * a) / s]
				}
			}), e.save = function() {
				var e = this._transformMatrix;
				this._transformStack.push(e), this._transformMatrix = e.slice(0, 6), this._originalSave()
			}, e.restore = function() {
				var e = this._transformStack.pop();
				e && (this._transformMatrix = e, this._originalRestore())
			}, e.translate = function(e, t) {
				var n = this._transformMatrix;
				n[4] = n[0] * e + n[2] * t + n[4], n[5] = n[1] * e + n[3] * t + n[5], this._originalTranslate(e, t)
			}, e.scale = function(e, t) {
				var n = this._transformMatrix;
				n[0] = n[0] * e, n[1] = n[1] * e, n[2] = n[2] * t, n[3] = n[3] * t, this._originalScale(e, t)
			}, e.transform = function(t, n, r, i, o, a) {
				var s = this._transformMatrix;
				this._transformMatrix = [s[0] * t + s[2] * n, s[1] * t + s[3] * n, s[0] * r + s[2] * i, s[1] * r + s[3] * i, s[0] * o + s[2] * a + s[4], s[1] * o + s[3] * a + s[5]], e._originalTransform(t, n, r, i, o, a)
			}, e.setTransform = function(t, n, r, i, o, a) {
				this._transformMatrix = [t, n, r, i, o, a], e._originalSetTransform(t, n, r, i, o, a)
			}, e.rotate = function(e) {
				var t = Math.cos(e),
					n = Math.sin(e),
					r = this._transformMatrix;
				this._transformMatrix = [r[0] * t + r[2] * n, r[1] * t + r[3] * n, r[0] * -n + r[2] * t, r[1] * -n + r[3] * t, r[4], r[5]], this._originalRotate(e)
			})
		}
		function i(e) {
			var t, n, r, i, o = 1e3,
				a = e.width,
				s = e.height,
				l = a + 1,
				u = new Uint8Array(l * (s + 1)),
				c = new Uint8Array([0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0]),
				d = a + 7 & -8,
				h = e.data,
				f = new Uint8Array(d * s),
				p = 0;
			for (t = 0, i = h.length; i > t; t++) for (var g = 128, v = h[t]; g > 0;) f[p++] = v & g ? 0 : 255, g >>= 1;
			var m = 0;
			for (p = 0, 0 !== f[p] && (u[0] = 1, ++m), n = 1; a > n; n++) f[p] !== f[p + 1] && (u[n] = f[p] ? 2 : 1, ++m), p++;
			for (0 !== f[p] && (u[n] = 2, ++m), t = 1; s > t; t++) {
				p = t * d, r = t * l, f[p - d] !== f[p] && (u[r] = f[p] ? 1 : 8, ++m);
				var b = (f[p] ? 4 : 0) + (f[p - d] ? 8 : 0);
				for (n = 1; a > n; n++) b = (b >> 2) + (f[p + 1] ? 4 : 0) + (f[p - d + 1] ? 8 : 0), c[b] && (u[r + n] = c[b], ++m), p++;
				if (f[p - d] !== f[p] && (u[r + n] = f[p] ? 2 : 4, ++m), m > o) return null
			}
			for (p = d * (s - 1), r = t * l, 0 !== f[p] && (u[r] = 8, ++m), n = 1; a > n; n++) f[p] !== f[p + 1] && (u[r + n] = f[p] ? 4 : 8, ++m), p++;
			if (0 !== f[p] && (u[r + n] = 4, ++m), m > o) return null;
			var y = new Int32Array([0, l, -1, 0, -l, 0, 0, 0, 1]),
				_ = [];
			for (t = 0; m && s >= t; t++) {
				for (var w = t * l, S = w + a; S > w && !u[w];) w++;
				if (w !== S) {
					var P, x = [w % l, t],
						C = u[w],
						A = w;
					do {
						var k = y[C];
						do w += k;
						while (!u[w]);
						P = u[w], 5 !== P && 10 !== P ? (C = P, u[w] = 0) : (C = P & 51 * C >> 4, u[w] &= C >> 2 | C << 2), x.push(w % l), x.push(w / l | 0), --m
					} while (A !== w);
					_.push(x), --t
				}
			}
			var T = function(e) {
					e.save(), e.scale(1 / a, -1 / s), e.translate(0, -s), e.beginPath();
					for (var t = 0, n = _.length; n > t; t++) {
						var r = _[t];
						e.moveTo(r[0], r[1]);
						for (var i = 2, o = r.length; o > i; i += 2) e.lineTo(r[i], r[i + 1])
					}
					e.fill(), e.beginPath(), e.restore()
				};
			return T
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.CanvasGraphics = void 0;
		var o = n(0),
			a = n(116),
			s = n(58),
			l = 16,
			u = 100,
			c = 4096,
			d = .65,
			h = !0,
			f = 1e3,
			p = 16,
			g = {
				get value() {
					return (0, o.shadow)(g, "value", (0, o.isLittleEndian)())
				}
			},
			v = function() {
				function e(e) {
					this.canvasFactory = e, this.cache = Object.create(null)
				}
				return e.prototype = {
					getCanvas: function(e, t, n, i) {
						var o;
						return void 0 !== this.cache[e] ? (o = this.cache[e], this.canvasFactory.reset(o, t, n), o.context.setTransform(1, 0, 0, 1, 0, 0)) : (o = this.canvasFactory.create(t, n), this.cache[e] = o), i && r(o.context), o
					},
					clear: function() {
						for (var e in this.cache) {
							var t = this.cache[e];
							this.canvasFactory.destroy(t), delete this.cache[e]
						}
					}
				}, e
			}(),
			m = function() {
				function e() {
					this.alphaIsShape = !1, this.fontSize = 0, this.fontSizeScale = 1, this.textMatrix = o.IDENTITY_MATRIX, this.textMatrixScale = 1, this.fontMatrix = o.FONT_IDENTITY_MATRIX, this.leading = 0, this.x = 0, this.y = 0, this.lineX = 0, this.lineY = 0, this.charSpacing = 0, this.wordSpacing = 0, this.textHScale = 1, this.textRenderingMode = o.TextRenderingMode.FILL, this.textRise = 0, this.fillColor = "#000000", this.strokeColor = "#000000", this.patternFill = !1, this.fillAlpha = 1, this.strokeAlpha = 1, this.lineWidth = 1, this.activeSMask = null, this.resumeSMaskCtx = null
				}
				return e.prototype = {
					clone: function() {
						return Object.create(this)
					},
					setCurrentPoint: function(e, t) {
						this.x = e, this.y = t
					}
				}, e
			}(),
			b = function() {
				function e(e, t, n, i, o) {
					this.ctx = e, this.current = new m, this.stateStack = [], this.pendingClip = null, this.pendingEOFill = !1, this.res = null, this.xobjs = null, this.commonObjs = t, this.objs = n, this.canvasFactory = i, this.imageLayer = o, this.groupStack = [], this.processingType3 = null, this.baseTransform = null, this.baseTransformStack = [], this.groupLevel = 0, this.smaskStack = [], this.smaskCounter = 0, this.tempSMask = null, this.cachedCanvases = new v(this.canvasFactory), e && r(e), this.cachedGetSinglePixelWidth = null
				}
				function t(e, t) {
					if ("undefined" != typeof ImageData && t instanceof ImageData) return void e.putImageData(t, 0, 0);
					var n, r, i, a, s, l = t.height,
						u = t.width,
						c = l % p,
						d = (l - c) / p,
						h = 0 === c ? d : d + 1,
						f = e.createImageData(u, p),
						v = 0,
						m = t.data,
						b = f.data;
					if (t.kind === o.ImageKind.GRAYSCALE_1BPP) {
						var y = m.byteLength,
							_ = new Uint32Array(b.buffer, 0, b.byteLength >> 2),
							w = _.length,
							S = u + 7 >> 3,
							P = 4294967295,
							x = g.value ? 4278190080 : 255;
						for (r = 0; h > r; r++) {
							for (a = d > r ? p : c, n = 0, i = 0; a > i; i++) {
								for (var C = y - v, A = 0, k = C > S ? u : 8 * C - 7, T = -8 & k, E = 0, L = 0; T > A; A += 8) L = m[v++], _[n++] = 128 & L ? P : x, _[n++] = 64 & L ? P : x, _[n++] = 32 & L ? P : x, _[n++] = 16 & L ? P : x, _[n++] = 8 & L ? P : x, _[n++] = 4 & L ? P : x, _[n++] = 2 & L ? P : x, _[n++] = 1 & L ? P : x;
								for (; k > A; A++) 0 === E && (L = m[v++], E = 128), _[n++] = L & E ? P : x, E >>= 1
							}
							for (; w > n;) _[n++] = 0;
							e.putImageData(f, 0, r * p)
						}
					} else if (t.kind === o.ImageKind.RGBA_32BPP) {
						for (i = 0, s = u * p * 4, r = 0; d > r; r++) b.set(m.subarray(v, v + s)), v += s, e.putImageData(f, 0, i), i += p;
						h > r && (s = u * c * 4, b.set(m.subarray(v, v + s)), e.putImageData(f, 0, i))
					} else {
						if (t.kind !== o.ImageKind.RGB_24BPP) throw new Error("bad image kind: " + t.kind);
						for (a = p, s = u * a, r = 0; h > r; r++) {
							for (r >= d && (a = c, s = u * a), n = 0, i = s; i--;) b[n++] = m[v++], b[n++] = m[v++], b[n++] = m[v++], b[n++] = 255;
							e.putImageData(f, 0, r * p)
						}
					}
				}
				function n(e, t) {
					for (var n = t.height, r = t.width, i = n % p, o = (n - i) / p, a = 0 === i ? o : o + 1, s = e.createImageData(r, p), l = 0, u = t.data, c = s.data, d = 0; a > d; d++) {
						for (var h = o > d ? p : i, f = 3, g = 0; h > g; g++) for (var v = 0, m = 0; r > m; m++) {
							if (!v) {
								var b = u[l++];
								v = 128
							}
							c[f] = b & v ? 0 : 255, f += 4, v >>= 1
						}
						e.putImageData(s, 0, d * p)
					}
				}
				function b(e, t) {
					for (var n = ["strokeStyle", "fillStyle", "fillRule", "globalAlpha", "lineWidth", "lineCap", "lineJoin", "miterLimit", "globalCompositeOperation", "font"], r = 0, i = n.length; i > r; r++) {
						var o = n[r];
						void 0 !== e[o] && (t[o] = e[o])
					}
					void 0 !== e.setLineDash && (t.setLineDash(e.getLineDash()), t.lineDashOffset = e.lineDashOffset)
				}
				function y(e) {
					e.strokeStyle = "#000000", e.fillStyle = "#000000", e.fillRule = "nonzero", e.globalAlpha = 1, e.lineWidth = 1, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 10, e.globalCompositeOperation = "source-over", e.font = "10px sans-serif", void 0 !== e.setLineDash && (e.setLineDash([]), e.lineDashOffset = 0)
				}
				function _(e, t, n, r) {
					for (var i = e.length, o = 3; i > o; o += 4) {
						var a = e[o];
						if (0 === a) e[o - 3] = t, e[o - 2] = n, e[o - 1] = r;
						else if (255 > a) {
							var s = 255 - a;
							e[o - 3] = e[o - 3] * a + t * s >> 8, e[o - 2] = e[o - 2] * a + n * s >> 8, e[o - 1] = e[o - 1] * a + r * s >> 8
						}
					}
				}
				function w(e, t, n) {
					for (var r = e.length, i = 1 / 255, o = 3; r > o; o += 4) {
						var a = n ? n[e[o]] : e[o];
						t[o] = t[o] * a * i | 0
					}
				}
				function S(e, t, n) {
					for (var r = e.length, i = 3; r > i; i += 4) {
						var o = 77 * e[i - 3] + 152 * e[i - 2] + 28 * e[i - 1];
						t[i] = n ? t[i] * n[o >> 8] >> 8 : t[i] * o >> 16
					}
				}
				function P(e, t, n, r, i, o, a) {
					var s, l = !! o,
						u = l ? o[0] : 0,
						c = l ? o[1] : 0,
						d = l ? o[2] : 0;
					s = "Luminosity" === i ? S : w;
					for (var h = 1048576, f = Math.min(r, Math.ceil(h / n)), p = 0; r > p; p += f) {
						var g = Math.min(f, r - p),
							v = e.getImageData(0, p, n, g),
							m = t.getImageData(0, p, n, g);
						l && _(v.data, u, c, d), s(v.data, m.data, a), e.putImageData(m, 0, p)
					}
				}
				function x(e, t, n) {
					var r = t.canvas,
						i = t.context;
					e.setTransform(t.scaleX, 0, 0, t.scaleY, t.offsetX, t.offsetY);
					var o = t.backdrop || null;
					if (!t.transferMap && s.WebGLUtils.isEnabled) {
						var a = s.WebGLUtils.composeSMask(n.canvas, r, {
							subtype: t.subtype,
							backdrop: o
						});
						return e.setTransform(1, 0, 0, 1, 0, 0), void e.drawImage(a, t.offsetX, t.offsetY)
					}
					P(i, n, r.width, r.height, t.subtype, o, t.transferMap), e.drawImage(r, 0, 0)
				}
				var C = 15,
					A = 10,
					k = ["butt", "round", "square"],
					T = ["miter", "round", "bevel"],
					E = {},
					L = {};
				e.prototype = {
					beginDrawing: function(e) {
						var t = e.transform,
							n = e.viewport,
							r = e.transparency,
							i = e.background,
							o = void 0 === i ? null : i,
							a = this.ctx.canvas.width,
							s = this.ctx.canvas.height;
						if (this.ctx.save(), this.ctx.fillStyle = o || "rgb(255, 255, 255)", this.ctx.fillRect(0, 0, a, s), this.ctx.restore(), r) {
							var l = this.cachedCanvases.getCanvas("transparent", a, s, !0);
							this.compositeCtx = this.ctx, this.transparentCanvas = l.canvas, this.ctx = l.context, this.ctx.save(), this.ctx.transform.apply(this.ctx, this.compositeCtx.mozCurrentTransform)
						}
						this.ctx.save(), y(this.ctx), t && this.ctx.transform.apply(this.ctx, t), this.ctx.transform.apply(this.ctx, n.transform), this.baseTransform = this.ctx.mozCurrentTransform.slice(), this.imageLayer && this.imageLayer.beginLayout()
					},
					executeOperatorList: function(e, t, n, r) {
						var i = e.argsArray,
							a = e.fnArray,
							s = t || 0,
							l = i.length;
						if (l === s) return s;
						for (var u, c = l - s > A && "function" == typeof n, d = c ? Date.now() + C : 0, h = 0, f = this.commonObjs, p = this.objs;;) {
							if (void 0 !== r && s === r.nextBreakPoint) return r.breakIt(s, n), s;
							if (u = a[s], u !== o.OPS.dependency) this[u].apply(this, i[s]);
							else for (var g = i[s], v = 0, m = g.length; m > v; v++) {
								var b = g[v],
									y = "g" === b[0] && "_" === b[1],
									_ = y ? f : p;
								if (!_.isResolved(b)) return _.get(b, n), s
							}
							if (s++, s === l) return s;
							if (c && ++h > A) {
								if (Date.now() > d) return n(), s;
								h = 0
							}
						}
					},
					endDrawing: function() {
						null !== this.current.activeSMask && this.endSMaskGroup(), this.ctx.restore(), this.transparentCanvas && (this.ctx = this.compositeCtx, this.ctx.save(), this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.drawImage(this.transparentCanvas, 0, 0), this.ctx.restore(), this.transparentCanvas = null), this.cachedCanvases.clear(), s.WebGLUtils.clear(), this.imageLayer && this.imageLayer.endLayout()
					},
					setLineWidth: function(e) {
						this.current.lineWidth = e, this.ctx.lineWidth = e
					},
					setLineCap: function(e) {
						this.ctx.lineCap = k[e]
					},
					setLineJoin: function(e) {
						this.ctx.lineJoin = T[e]
					},
					setMiterLimit: function(e) {
						this.ctx.miterLimit = e
					},
					setDash: function(e, t) {
						var n = this.ctx;
						void 0 !== n.setLineDash && (n.setLineDash(e), n.lineDashOffset = t)
					},
					setRenderingIntent: function(e) {},
					setFlatness: function(e) {},
					setGState: function(e) {
						for (var t = 0, n = e.length; n > t; t++) {
							var r = e[t],
								i = r[0],
								o = r[1];
							switch (i) {
							case "LW":
								this.setLineWidth(o);
								break;
							case "LC":
								this.setLineCap(o);
								break;
							case "LJ":
								this.setLineJoin(o);
								break;
							case "ML":
								this.setMiterLimit(o);
								break;
							case "D":
								this.setDash(o[0], o[1]);
								break;
							case "RI":
								this.setRenderingIntent(o);
								break;
							case "FL":
								this.setFlatness(o);
								break;
							case "Font":
								this.setFont(o[0], o[1]);
								break;
							case "CA":
								this.current.strokeAlpha = r[1];
								break;
							case "ca":
								this.current.fillAlpha = r[1], this.ctx.globalAlpha = r[1];
								break;
							case "BM":
								this.ctx.globalCompositeOperation = o;
								break;
							case "SMask":
								this.current.activeSMask && (this.stateStack.length > 0 && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask ? this.suspendSMaskGroup() : this.endSMaskGroup()), this.current.activeSMask = o ? this.tempSMask : null, this.current.activeSMask && this.beginSMaskGroup(), this.tempSMask = null
							}
						}
					},
					beginSMaskGroup: function() {
						var e = this.current.activeSMask,
							t = e.canvas.width,
							n = e.canvas.height,
							r = "smaskGroupAt" + this.groupLevel,
							i = this.cachedCanvases.getCanvas(r, t, n, !0),
							o = this.ctx,
							a = o.mozCurrentTransform;
						this.ctx.save();
						var s = i.context;
						s.scale(1 / e.scaleX, 1 / e.scaleY), s.translate(-e.offsetX, -e.offsetY), s.transform.apply(s, a), e.startTransformInverse = s.mozCurrentTransformInverse, b(o, s), this.ctx = s, this.setGState([
							["BM", "source-over"],
							["ca", 1],
							["CA", 1]
						]), this.groupStack.push(o), this.groupLevel++
					},
					suspendSMaskGroup: function() {
						var e = this.ctx;
						this.groupLevel--, this.ctx = this.groupStack.pop(), x(this.ctx, this.current.activeSMask, e), this.ctx.restore(), this.ctx.save(), b(e, this.ctx), this.current.resumeSMaskCtx = e;
						var t = o.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
						this.ctx.transform.apply(this.ctx, t), e.save(), e.setTransform(1, 0, 0, 1, 0, 0), e.clearRect(0, 0, e.canvas.width, e.canvas.height), e.restore()
					},
					resumeSMaskGroup: function() {
						var e = this.current.resumeSMaskCtx,
							t = this.ctx;
						this.ctx = e, this.groupStack.push(t), this.groupLevel++
					},
					endSMaskGroup: function() {
						var e = this.ctx;
						this.groupLevel--, this.ctx = this.groupStack.pop(), x(this.ctx, this.current.activeSMask, e), this.ctx.restore(), b(e, this.ctx);
						var t = o.Util.transform(this.current.activeSMask.startTransformInverse, e.mozCurrentTransform);
						this.ctx.transform.apply(this.ctx, t)
					},
					save: function() {
						this.ctx.save();
						var e = this.current;
						this.stateStack.push(e), this.current = e.clone(), this.current.resumeSMaskCtx = null
					},
					restore: function() {
						this.current.resumeSMaskCtx && this.resumeSMaskGroup(), null === this.current.activeSMask || 0 !== this.stateStack.length && this.stateStack[this.stateStack.length - 1].activeSMask === this.current.activeSMask || this.endSMaskGroup(), 0 !== this.stateStack.length && (this.current = this.stateStack.pop(), this.ctx.restore(), this.pendingClip = null, this.cachedGetSinglePixelWidth = null)
					},
					transform: function(e, t, n, r, i, o) {
						this.ctx.transform(e, t, n, r, i, o), this.cachedGetSinglePixelWidth = null
					},
					constructPath: function(e, t) {
						for (var n = this.ctx, r = this.current, i = r.x, a = r.y, s = 0, l = 0, u = e.length; u > s; s++) switch (0 | e[s]) {
						case o.OPS.rectangle:
							i = t[l++], a = t[l++];
							var c = t[l++],
								d = t[l++];
							0 === c && (c = this.getSinglePixelWidth()), 0 === d && (d = this.getSinglePixelWidth());
							var h = i + c,
								f = a + d;
							this.ctx.moveTo(i, a), this.ctx.lineTo(h, a), this.ctx.lineTo(h, f), this.ctx.lineTo(i, f), this.ctx.lineTo(i, a), this.ctx.closePath();
							break;
						case o.OPS.moveTo:
							i = t[l++], a = t[l++], n.moveTo(i, a);
							break;
						case o.OPS.lineTo:
							i = t[l++], a = t[l++], n.lineTo(i, a);
							break;
						case o.OPS.curveTo:
							i = t[l + 4], a = t[l + 5], n.bezierCurveTo(t[l], t[l + 1], t[l + 2], t[l + 3], i, a), l += 6;
							break;
						case o.OPS.curveTo2:
							n.bezierCurveTo(i, a, t[l], t[l + 1], t[l + 2], t[l + 3]), i = t[l + 2], a = t[l + 3], l += 4;
							break;
						case o.OPS.curveTo3:
							i = t[l + 2], a = t[l + 3], n.bezierCurveTo(t[l], t[l + 1], i, a, i, a), l += 4;
							break;
						case o.OPS.closePath:
							n.closePath()
						}
						r.setCurrentPoint(i, a)
					},
					closePath: function() {
						this.ctx.closePath()
					},
					stroke: function(e) {
						e = "undefined" != typeof e ? e : !0;
						var t = this.ctx,
							n = this.current.strokeColor;
						t.lineWidth = Math.max(this.getSinglePixelWidth() * d, this.current.lineWidth), t.globalAlpha = this.current.strokeAlpha, n && n.hasOwnProperty("type") && "Pattern" === n.type ? (t.save(), t.strokeStyle = n.getPattern(t, this), t.stroke(), t.restore()) : t.stroke(), e && this.consumePath(), t.globalAlpha = this.current.fillAlpha
					},
					closeStroke: function() {
						this.closePath(), this.stroke()
					},
					fill: function(e) {
						e = "undefined" != typeof e ? e : !0;
						var t = this.ctx,
							n = this.current.fillColor,
							r = this.current.patternFill,
							i = !1;
						r && (t.save(), this.baseTransform && t.setTransform.apply(t, this.baseTransform), t.fillStyle = n.getPattern(t, this), i = !0), this.pendingEOFill ? (t.fill("evenodd"), this.pendingEOFill = !1) : t.fill(), i && t.restore(), e && this.consumePath()
					},
					eoFill: function() {
						this.pendingEOFill = !0, this.fill()
					},
					fillStroke: function() {
						this.fill(!1), this.stroke(!1), this.consumePath()
					},
					eoFillStroke: function() {
						this.pendingEOFill = !0, this.fillStroke()
					},
					closeFillStroke: function() {
						this.closePath(), this.fillStroke()
					},
					closeEOFillStroke: function() {
						this.pendingEOFill = !0, this.closePath(), this.fillStroke()
					},
					endPath: function() {
						this.consumePath()
					},
					clip: function() {
						this.pendingClip = E
					},
					eoClip: function() {
						this.pendingClip = L
					},
					beginText: function() {
						this.current.textMatrix = o.IDENTITY_MATRIX, this.current.textMatrixScale = 1, this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
					},
					endText: function() {
						var e = this.pendingTextPaths,
							t = this.ctx;
						if (void 0 === e) return void t.beginPath();
						t.save(), t.beginPath();
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							t.setTransform.apply(t, r.transform), t.translate(r.x, r.y), r.addToPath(t, r.fontSize)
						}
						t.restore(), t.clip(), t.beginPath(), delete this.pendingTextPaths
					},
					setCharSpacing: function(e) {
						this.current.charSpacing = e
					},
					setWordSpacing: function(e) {
						this.current.wordSpacing = e
					},
					setHScale: function(e) {
						this.current.textHScale = e / 100
					},
					setLeading: function(e) {
						this.current.leading = -e
					},
					setFont: function(e, t) {
						var n = this.commonObjs.get(e),
							r = this.current;
						if (!n) throw new Error("Can't find font for " + e);
						if (r.fontMatrix = n.fontMatrix ? n.fontMatrix : o.FONT_IDENTITY_MATRIX, (0 === r.fontMatrix[0] || 0 === r.fontMatrix[3]) && (0, o.warn)("Invalid font matrix for font " + e), 0 > t ? (t = -t, r.fontDirection = -1) : r.fontDirection = 1, this.current.font = n, this.current.fontSize = t, !n.isType3Font) {
							var i = n.loadedName || "sans-serif",
								a = n.black ? "900" : n.bold ? "bold" : "normal",
								s = n.italic ? "italic" : "normal",
								c = '"' + i + '", ' + n.fallbackName,
								d = l > t ? l : t > u ? u : t;
							this.current.fontSizeScale = t / d;
							var h = s + " " + a + " " + d + "px " + c;
							this.ctx.font = h
						}
					},
					setTextRenderingMode: function(e) {
						this.current.textRenderingMode = e
					},
					setTextRise: function(e) {
						this.current.textRise = e
					},
					moveText: function(e, t) {
						this.current.x = this.current.lineX += e, this.current.y = this.current.lineY += t
					},
					setLeadingMoveText: function(e, t) {
						this.setLeading(-t), this.moveText(e, t)
					},
					setTextMatrix: function(e, t, n, r, i, o) {
						this.current.textMatrix = [e, t, n, r, i, o], this.current.textMatrixScale = Math.sqrt(e * e + t * t), this.current.x = this.current.lineX = 0, this.current.y = this.current.lineY = 0
					},
					nextLine: function() {
						this.moveText(0, this.current.leading)
					},
					paintChar: function(e, t, n) {
						var r, i = this.ctx,
							a = this.current,
							s = a.font,
							l = a.textRenderingMode,
							u = a.fontSize / a.fontSizeScale,
							c = l & o.TextRenderingMode.FILL_STROKE_MASK,
							d = !! (l & o.TextRenderingMode.ADD_TO_PATH_FLAG);
						if ((s.disableFontFace || d) && (r = s.getPathGenerator(this.commonObjs, e)), s.disableFontFace ? (i.save(), i.translate(t, n), i.beginPath(), r(i, u), (c === o.TextRenderingMode.FILL || c === o.TextRenderingMode.FILL_STROKE) && i.fill(), (c === o.TextRenderingMode.STROKE || c === o.TextRenderingMode.FILL_STROKE) && i.stroke(), i.restore()) : ((c === o.TextRenderingMode.FILL || c === o.TextRenderingMode.FILL_STROKE) && i.fillText(e, t, n), (c === o.TextRenderingMode.STROKE || c === o.TextRenderingMode.FILL_STROKE) && i.strokeText(e, t, n)), d) {
							var h = this.pendingTextPaths || (this.pendingTextPaths = []);
							h.push({
								transform: i.mozCurrentTransform,
								x: t,
								y: n,
								fontSize: u,
								addToPath: r
							})
						}
					},
					get isFontSubpixelAAEnabled() {
						var e = this.canvasFactory.create(10, 10).context;
						e.scale(1.5, 1), e.fillText("I", 0, 10);
						for (var t = e.getImageData(0, 0, 10, 10).data, n = !1, r = 3; r < t.length; r += 4) if (t[r] > 0 && t[r] < 255) {
							n = !0;
							break
						}
						return (0, o.shadow)(this, "isFontSubpixelAAEnabled", n)
					},
					showText: function(e) {
						var t = this.current,
							n = t.font;
						if (n.isType3Font) return this.showType3Text(e);
						var r = t.fontSize;
						if (0 !== r) {
							var i = this.ctx,
								a = t.fontSizeScale,
								s = t.charSpacing,
								l = t.wordSpacing,
								u = t.fontDirection,
								c = t.textHScale * u,
								h = e.length,
								f = n.vertical,
								p = f ? 1 : -1,
								g = n.defaultVMetrics,
								v = r * t.fontMatrix[0],
								m = t.textRenderingMode === o.TextRenderingMode.FILL && !n.disableFontFace;
							i.save(), i.transform.apply(i, t.textMatrix), i.translate(t.x, t.y + t.textRise), t.patternFill && (i.fillStyle = t.fillColor.getPattern(i, this)), u > 0 ? i.scale(c, -1) : i.scale(c, 1);
							var b = t.lineWidth,
								y = t.textMatrixScale;
							if (0 === y || 0 === b) {
								var _ = t.textRenderingMode & o.TextRenderingMode.FILL_STROKE_MASK;
								(_ === o.TextRenderingMode.STROKE || _ === o.TextRenderingMode.FILL_STROKE) && (this.cachedGetSinglePixelWidth = null, b = this.getSinglePixelWidth() * d)
							} else b /= y;
							1 !== a && (i.scale(a, a), b /= a), i.lineWidth = b;
							var w, S = 0;
							for (w = 0; h > w; ++w) {
								var P = e[w];
								if ((0, o.isNum)(P)) S += p * P * r / 1e3;
								else {
									var x, C, A, k, T = !1,
										E = (P.isSpace ? l : 0) + s,
										L = P.fontChar,
										I = P.accent,
										R = P.width;
									if (f) {
										var O, D, N;
										O = P.vmetric || g, D = P.vmetric ? O[1] : .5 * R, D = -D * v, N = O[2] * v, R = O ? -O[0] : R, x = D / a, C = (S + N) / a
									} else x = S / a, C = 0;
									if (n.remeasure && R > 0) {
										var F = 1e3 * i.measureText(L).width / r * a;
										if (F > R && this.isFontSubpixelAAEnabled) {
											var M = R / F;
											T = !0, i.save(), i.scale(M, 1), x /= M
										} else R !== F && (x += (R - F) / 2e3 * r / a)
									}(P.isInFont || n.missingFile) && (m && !I ? i.fillText(L, x, C) : (this.paintChar(L, x, C), I && (A = x + I.offset.x / a, k = C - I.offset.y / a, this.paintChar(I.fontChar, A, k))));
									var j = R * v + E * u;
									S += j, T && i.restore()
								}
							}
							f ? t.y -= S * c : t.x += S * c, i.restore()
						}
					},
					showType3Text: function(e) {
						var t, n, r, i, a = this.ctx,
							s = this.current,
							l = s.font,
							u = s.fontSize,
							c = s.fontDirection,
							d = l.vertical ? 1 : -1,
							h = s.charSpacing,
							f = s.wordSpacing,
							p = s.textHScale * c,
							g = s.fontMatrix || o.FONT_IDENTITY_MATRIX,
							v = e.length,
							m = s.textRenderingMode === o.TextRenderingMode.INVISIBLE;
						if (!m && 0 !== u) {
							for (this.cachedGetSinglePixelWidth = null, a.save(), a.transform.apply(a, s.textMatrix), a.translate(s.x, s.y), a.scale(p, c), t = 0; v > t; ++t) if (n = e[t], (0, o.isNum)(n)) i = d * n * u / 1e3, this.ctx.translate(i, 0), s.x += i * p;
							else {
								var b = (n.isSpace ? f : 0) + h,
									y = l.charProcOperatorList[n.operatorListId];
								if (y) {
									this.processingType3 = n, this.save(), a.scale(u, u), a.transform.apply(a, g), this.executeOperatorList(y), this.restore();
									var _ = o.Util.applyTransform([n.width, 0], g);
									r = _[0] * u + b, a.translate(r, 0), s.x += r * p
								} else(0, o.warn)('Type3 character "' + n.operatorListId + '" is not available.')
							}
							a.restore(), this.processingType3 = null
						}
					},
					setCharWidth: function(e, t) {},
					setCharWidthAndBounds: function(e, t, n, r, i, o) {
						this.ctx.rect(n, r, i - n, o - r), this.clip(), this.endPath()
					},
					getColorN_Pattern: function(t) {
						var n, r = this;
						if ("TilingPattern" === t[0]) {
							var i = t[1],
								o = this.baseTransform || this.ctx.mozCurrentTransform.slice(),
								s = {
									createCanvasGraphics: function(t) {
										return new e(t, r.commonObjs, r.objs, r.canvasFactory)
									}
								};
							n = new a.TilingPattern(t, i, this.ctx, s, o)
						} else n = (0, a.getShadingPatternFromIR)(t);
						return n
					},
					setStrokeColorN: function() {
						this.current.strokeColor = this.getColorN_Pattern(arguments)
					},
					setFillColorN: function() {
						this.current.fillColor = this.getColorN_Pattern(arguments), this.current.patternFill = !0
					},
					setStrokeRGBColor: function(e, t, n) {
						var r = o.Util.makeCssRgb(e, t, n);
						this.ctx.strokeStyle = r, this.current.strokeColor = r
					},
					setFillRGBColor: function(e, t, n) {
						var r = o.Util.makeCssRgb(e, t, n);
						this.ctx.fillStyle = r, this.current.fillColor = r, this.current.patternFill = !1
					},
					shadingFill: function(e) {
						var t = this.ctx;
						this.save();
						var n = (0, a.getShadingPatternFromIR)(e);
						t.fillStyle = n.getPattern(t, this, !0);
						var r = t.mozCurrentTransformInverse;
						if (r) {
							var i = t.canvas,
								s = i.width,
								l = i.height,
								u = o.Util.applyTransform([0, 0], r),
								c = o.Util.applyTransform([0, l], r),
								d = o.Util.applyTransform([s, 0], r),
								h = o.Util.applyTransform([s, l], r),
								f = Math.min(u[0], c[0], d[0], h[0]),
								p = Math.min(u[1], c[1], d[1], h[1]),
								g = Math.max(u[0], c[0], d[0], h[0]),
								v = Math.max(u[1], c[1], d[1], h[1]);
							this.ctx.fillRect(f, p, g - f, v - p)
						} else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
						this.restore()
					},
					beginInlineImage: function() {
						throw new Error("Should not call beginInlineImage")
					},
					beginImageData: function() {
						throw new Error("Should not call beginImageData")
					},
					paintFormXObjectBegin: function(e, t) {
						if (this.save(), this.baseTransformStack.push(this.baseTransform), Array.isArray(e) && 6 === e.length && this.transform.apply(this, e), this.baseTransform = this.ctx.mozCurrentTransform, Array.isArray(t) && 4 === t.length) {
							var n = t[2] - t[0],
								r = t[3] - t[1];
							this.ctx.rect(t[0], t[1], n, r), this.clip(), this.endPath()
						}
					},
					paintFormXObjectEnd: function() {
						this.restore(), this.baseTransform = this.baseTransformStack.pop()
					},
					beginGroup: function(e) {
						this.save();
						var t = this.ctx;
						e.isolated || (0, o.info)("TODO: Support non-isolated groups."), e.knockout && (0, o.warn)("Knockout groups not supported.");
						var n = t.mozCurrentTransform;
						if (e.matrix && t.transform.apply(t, e.matrix), !e.bbox) throw new Error("Bounding box is required.");
						var r = o.Util.getAxialAlignedBoundingBox(e.bbox, t.mozCurrentTransform),
							i = [0, 0, t.canvas.width, t.canvas.height];
						r = o.Util.intersect(r, i) || [0, 0, 0, 0];
						var a = Math.floor(r[0]),
							s = Math.floor(r[1]),
							l = Math.max(Math.ceil(r[2]) - a, 1),
							u = Math.max(Math.ceil(r[3]) - s, 1),
							d = 1,
							h = 1;
						l > c && (d = l / c, l = c), u > c && (h = u / c, u = c);
						var f = "groupAt" + this.groupLevel;
						e.smask && (f += "_smask_" + this.smaskCounter++ % 2);
						var p = this.cachedCanvases.getCanvas(f, l, u, !0),
							g = p.context;
						g.scale(1 / d, 1 / h), g.translate(-a, -s), g.transform.apply(g, n), e.smask ? this.smaskStack.push({
							canvas: p.canvas,
							context: g,
							offsetX: a,
							offsetY: s,
							scaleX: d,
							scaleY: h,
							subtype: e.smask.subtype,
							backdrop: e.smask.backdrop,
							transferMap: e.smask.transferMap || null,
							startTransformInverse: null
						}) : (t.setTransform(1, 0, 0, 1, 0, 0), t.translate(a, s), t.scale(d, h)), b(t, g), this.ctx = g, this.setGState([
							["BM", "source-over"],
							["ca", 1],
							["CA", 1]
						]), this.groupStack.push(t), this.groupLevel++, this.current.activeSMask = null
					},
					endGroup: function(e) {
						this.groupLevel--;
						var t = this.ctx;
						this.ctx = this.groupStack.pop(), void 0 !== this.ctx.imageSmoothingEnabled ? this.ctx.imageSmoothingEnabled = !1 : this.ctx.mozImageSmoothingEnabled = !1, e.smask ? this.tempSMask = this.smaskStack.pop() : this.ctx.drawImage(t.canvas, 0, 0), this.restore()
					},
					beginAnnotations: function() {
						this.save(), this.baseTransform && this.ctx.setTransform.apply(this.ctx, this.baseTransform)
					},
					endAnnotations: function() {
						this.restore()
					},
					beginAnnotation: function(e, t, n) {
						if (this.save(), y(this.ctx), this.current = new m, Array.isArray(e) && 4 === e.length) {
							var r = e[2] - e[0],
								i = e[3] - e[1];
							this.ctx.rect(e[0], e[1], r, i), this.clip(), this.endPath()
						}
						this.transform.apply(this, t), this.transform.apply(this, n)
					},
					endAnnotation: function() {
						this.restore()
					},
					paintJpegXObject: function(e, t, n) {
						var r = this.objs.get(e);
						if (!r) return void(0, o.warn)("Dependent image isn't ready yet");
						this.save();
						var i = this.ctx;
						if (i.scale(1 / t, -1 / n), i.drawImage(r, 0, 0, r.width, r.height, 0, -n, t, n), this.imageLayer) {
							var a = i.mozCurrentTransformInverse,
								s = this.getCanvasPosition(0, 0);
							this.imageLayer.appendImage({
								objId: e,
								left: s[0],
								top: s[1],
								width: t / a[0],
								height: n / a[3]
							})
						}
						this.restore()
					},
					paintImageMaskXObject: function(e) {
						var t = this.ctx,
							r = e.width,
							o = e.height,
							a = this.current.fillColor,
							s = this.current.patternFill,
							l = this.processingType3;
						if (h && l && void 0 === l.compiled && (f >= r && f >= o ? l.compiled = i({
							data: e.data,
							width: r,
							height: o
						}) : l.compiled = null), l && l.compiled) return void l.compiled(t);
						var u = this.cachedCanvases.getCanvas("maskCanvas", r, o),
							c = u.context;
						c.save(), n(c, e), c.globalCompositeOperation = "source-in", c.fillStyle = s ? a.getPattern(c, this) : a, c.fillRect(0, 0, r, o), c.restore(), this.paintInlineImageXObject(u.canvas)
					},
					paintImageMaskXObjectRepeat: function(e, t, r, i) {
						var o = e.width,
							a = e.height,
							s = this.current.fillColor,
							l = this.current.patternFill,
							u = this.cachedCanvases.getCanvas("maskCanvas", o, a),
							c = u.context;
						c.save(), n(c, e), c.globalCompositeOperation = "source-in", c.fillStyle = l ? s.getPattern(c, this) : s, c.fillRect(0, 0, o, a), c.restore();
						for (var d = this.ctx, h = 0, f = i.length; f > h; h += 2) d.save(), d.transform(t, 0, 0, r, i[h], i[h + 1]), d.scale(1, -1), d.drawImage(u.canvas, 0, 0, o, a, 0, -1, 1, 1), d.restore()
					},
					paintImageMaskXObjectGroup: function(e) {
						for (var t = this.ctx, r = this.current.fillColor, i = this.current.patternFill, o = 0, a = e.length; a > o; o++) {
							var s = e[o],
								l = s.width,
								u = s.height,
								c = this.cachedCanvases.getCanvas("maskCanvas", l, u),
								d = c.context;
							d.save(), n(d, s), d.globalCompositeOperation = "source-in", d.fillStyle = i ? r.getPattern(d, this) : r, d.fillRect(0, 0, l, u), d.restore(), t.save(), t.transform.apply(t, s.transform), t.scale(1, -1), t.drawImage(c.canvas, 0, 0, l, u, 0, -1, 1, 1), t.restore()
						}
					},
					paintImageXObject: function(e) {
						var t = this.objs.get(e);
						return t ? void this.paintInlineImageXObject(t) : void(0, o.warn)("Dependent image isn't ready yet")
					},
					paintImageXObjectRepeat: function(e, t, n, r) {
						var i = this.objs.get(e);
						if (!i) return void(0, o.warn)("Dependent image isn't ready yet");
						for (var a = i.width, s = i.height, l = [], u = 0, c = r.length; c > u; u += 2) l.push({
							transform: [t, 0, 0, n, r[u], r[u + 1]],
							x: 0,
							y: 0,
							w: a,
							h: s
						});
						this.paintInlineImageXObjectGroup(i, l)
					},
					paintInlineImageXObject: function(e) {
						var n = e.width,
							r = e.height,
							i = this.ctx;
						this.save(), i.scale(1 / n, -1 / r);
						var o, a, s = i.mozCurrentTransformInverse,
							l = s[0],
							u = s[1],
							c = Math.max(Math.sqrt(l * l + u * u), 1),
							d = s[2],
							h = s[3],
							f = Math.max(Math.sqrt(d * d + h * h), 1);
						if (e instanceof HTMLElement || !e.data) o = e;
						else {
							a = this.cachedCanvases.getCanvas("inlineImage", n, r);
							var p = a.context;
							t(p, e), o = a.canvas
						}
						for (var g = n, v = r, m = "prescale1"; c > 2 && g > 1 || f > 2 && v > 1;) {
							var b = g,
								y = v;
							c > 2 && g > 1 && (b = Math.ceil(g / 2), c /= g / b), f > 2 && v > 1 && (y = Math.ceil(v / 2), f /= v / y), a = this.cachedCanvases.getCanvas(m, b, y), p = a.context, p.clearRect(0, 0, b, y), p.drawImage(o, 0, 0, g, v, 0, 0, b, y), o = a.canvas, g = b, v = y, m = "prescale1" === m ? "prescale2" : "prescale1"
						}
						if (i.drawImage(o, 0, 0, g, v, 0, -r, n, r), this.imageLayer) {
							var _ = this.getCanvasPosition(0, -r);
							this.imageLayer.appendImage({
								imgData: e,
								left: _[0],
								top: _[1],
								width: n / s[0],
								height: r / s[3]
							})
						}
						this.restore()
					},
					paintInlineImageXObjectGroup: function(e, n) {
						var r = this.ctx,
							i = e.width,
							o = e.height,
							a = this.cachedCanvases.getCanvas("inlineImage", i, o),
							s = a.context;
						t(s, e);
						for (var l = 0, u = n.length; u > l; l++) {
							var c = n[l];
							if (r.save(), r.transform.apply(r, c.transform), r.scale(1, -1), r.drawImage(a.canvas, c.x, c.y, c.w, c.h, 0, -1, 1, 1), this.imageLayer) {
								var d = this.getCanvasPosition(c.x, c.y);
								this.imageLayer.appendImage({
									imgData: e,
									left: d[0],
									top: d[1],
									width: i,
									height: o
								})
							}
							r.restore()
						}
					},
					paintSolidColorImageMask: function() {
						this.ctx.fillRect(0, 0, 1, 1)
					},
					paintXObject: function() {
						(0, o.warn)("Unsupported 'paintXObject' command.")
					},
					markPoint: function(e) {},
					markPointProps: function(e, t) {},
					beginMarkedContent: function(e) {},
					beginMarkedContentProps: function(e, t) {},
					endMarkedContent: function() {},
					beginCompat: function() {},
					endCompat: function() {},
					consumePath: function() {
						var e = this.ctx;
						this.pendingClip && (this.pendingClip === L ? e.clip("evenodd") : e.clip(), this.pendingClip = null), e.beginPath()
					},
					getSinglePixelWidth: function(e) {
						if (null === this.cachedGetSinglePixelWidth) {
							this.ctx.save();
							var t = this.ctx.mozCurrentTransformInverse;
							this.ctx.restore(), this.cachedGetSinglePixelWidth = Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1], t[2] * t[2] + t[3] * t[3]))
						}
						return this.cachedGetSinglePixelWidth
					},
					getCanvasPosition: function(e, t) {
						var n = this.ctx.mozCurrentTransform;
						return [n[0] * e + n[2] * t + n[4], n[1] * e + n[3] * t + n[5]]
					}
				};
				for (var I in o.OPS) e.prototype[o.OPS[I]] = e.prototype[I];
				return e
			}();
		t.CanvasGraphics = b
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			var t = a[e[0]];
			if (!t) throw new Error("Unknown IR type: " + e[0]);
			return t.fromIR(e)
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.TilingPattern = t.getShadingPatternFromIR = void 0;
		var i = n(0),
			o = n(58),
			a = {};
		a.RadialAxial = {
			fromIR: function(e) {
				var t = e[1],
					n = e[2],
					r = e[3],
					i = e[4],
					o = e[5],
					a = e[6];
				return {
					type: "Pattern",
					getPattern: function(e) {
						var s;
						"axial" === t ? s = e.createLinearGradient(r[0], r[1], i[0], i[1]) : "radial" === t && (s = e.createRadialGradient(r[0], r[1], o, i[0], i[1], a));
						for (var l = 0, u = n.length; u > l; ++l) {
							var c = n[l];
							s.addColorStop(c[0], c[1])
						}
						return s
					}
				}
			}
		};
		var s = function() {
				function e(e, t, n, r, i, o, a, s) {
					var l, u = t.coords,
						c = t.colors,
						d = e.data,
						h = 4 * e.width;
					u[n + 1] > u[r + 1] && (l = n, n = r, r = l, l = o, o = a, a = l), u[r + 1] > u[i + 1] && (l = r, r = i, i = l, l = a, a = s, s = l), u[n + 1] > u[r + 1] && (l = n, n = r, r = l, l = o, o = a, a = l);
					var f = (u[n] + t.offsetX) * t.scaleX,
						p = (u[n + 1] + t.offsetY) * t.scaleY,
						g = (u[r] + t.offsetX) * t.scaleX,
						v = (u[r + 1] + t.offsetY) * t.scaleY,
						m = (u[i] + t.offsetX) * t.scaleX,
						b = (u[i + 1] + t.offsetY) * t.scaleY;
					if (!(p >= b)) for (var y, _, w, S, P, x, C, A, k, T = c[o], E = c[o + 1], L = c[o + 2], I = c[a], R = c[a + 1], O = c[a + 2], D = c[s], N = c[s + 1], F = c[s + 2], M = Math.round(p), j = Math.round(b), B = M; j >= B; B++) {
						v > B ? (k = p > B ? 0 : p === v ? 1 : (p - B) / (p - v), y = f - (f - g) * k, _ = T - (T - I) * k, w = E - (E - R) * k, S = L - (L - O) * k) : (k = B > b ? 1 : v === b ? 0 : (v - B) / (v - b), y = g - (g - m) * k, _ = I - (I - D) * k, w = R - (R - N) * k, S = O - (O - F) * k), k = p > B ? 0 : B > b ? 1 : (p - B) / (p - b), P = f - (f - m) * k, x = T - (T - D) * k, C = E - (E - N) * k, A = L - (L - F) * k;
						for (var q = Math.round(Math.min(y, P)), V = Math.round(Math.max(y, P)), U = h * B + 4 * q, z = q; V >= z; z++) k = (y - z) / (y - P), k = 0 > k ? 0 : k > 1 ? 1 : k, d[U++] = _ - (_ - x) * k | 0, d[U++] = w - (w - C) * k | 0, d[U++] = S - (S - A) * k | 0, d[U++] = 255
					}
				}
				function t(t, n, r) {
					var i, o, a = n.coords,
						s = n.colors;
					switch (n.type) {
					case "lattice":
						var l = n.verticesPerRow,
							u = Math.floor(a.length / l) - 1,
							c = l - 1;
						for (i = 0; u > i; i++) for (var d = i * l, h = 0; c > h; h++, d++) e(t, r, a[d], a[d + 1], a[d + l], s[d], s[d + 1], s[d + l]), e(t, r, a[d + l + 1], a[d + 1], a[d + l], s[d + l + 1], s[d + 1], s[d + l]);
						break;
					case "triangles":
						for (i = 0, o = a.length; o > i; i += 3) e(t, r, a[i], a[i + 1], a[i + 2], s[i], s[i + 1], s[i + 2]);
						break;
					default:
						throw new Error("illegal figure")
					}
				}
				function n(e, n, r, i, a, s, l) {
					var u, c, d, h, f = 1.1,
						p = 3e3,
						g = 2,
						v = Math.floor(e[0]),
						m = Math.floor(e[1]),
						b = Math.ceil(e[2]) - v,
						y = Math.ceil(e[3]) - m,
						_ = Math.min(Math.ceil(Math.abs(b * n[0] * f)), p),
						w = Math.min(Math.ceil(Math.abs(y * n[1] * f)), p),
						S = b / _,
						P = y / w,
						x = {
							coords: r,
							colors: i,
							offsetX: -v,
							offsetY: -m,
							scaleX: 1 / S,
							scaleY: 1 / P
						},
						C = _ + 2 * g,
						A = w + 2 * g;
					if (o.WebGLUtils.isEnabled) u = o.WebGLUtils.drawFigures(_, w, s, a, x), c = l.getCanvas("mesh", C, A, !1), c.context.drawImage(u, g, g), u = c.canvas;
					else {
						c = l.getCanvas("mesh", C, A, !1);
						var k = c.context,
							T = k.createImageData(_, w);
						if (s) {
							var E = T.data;
							for (d = 0, h = E.length; h > d; d += 4) E[d] = s[0], E[d + 1] = s[1], E[d + 2] = s[2], E[d + 3] = 255
						}
						for (d = 0; d < a.length; d++) t(T, a[d], x);
						k.putImageData(T, g, g), u = c.canvas
					}
					return {
						canvas: u,
						offsetX: v - g * S,
						offsetY: m - g * P,
						scaleX: S,
						scaleY: P
					}
				}
				return n
			}();
		a.Mesh = {
			fromIR: function(e) {
				var t = e[2],
					n = e[3],
					r = e[4],
					o = e[5],
					a = e[6],
					l = e[8];
				return {
					type: "Pattern",
					getPattern: function(e, u, c) {
						var d;
						if (c) d = i.Util.singularValueDecompose2dScale(e.mozCurrentTransform);
						else if (d = i.Util.singularValueDecompose2dScale(u.baseTransform), a) {
							var h = i.Util.singularValueDecompose2dScale(a);
							d = [d[0] * h[0], d[1] * h[1]]
						}
						var f = s(o, d, t, n, r, c ? null : l, u.cachedCanvases);
						return c || (e.setTransform.apply(e, u.baseTransform), a && e.transform.apply(e, a)), e.translate(f.offsetX, f.offsetY), e.scale(f.scaleX, f.scaleY), e.createPattern(f.canvas, "no-repeat")
					}
				}
			}
		}, a.Dummy = {
			fromIR: function() {
				return {
					type: "Pattern",
					getPattern: function() {
						return "hotpink"
					}
				}
			}
		};
		var l = function() {
				function e(e, t, n, r, i) {
					this.operatorList = e[2], this.matrix = e[3] || [1, 0, 0, 1, 0, 0], this.bbox = e[4], this.xstep = e[5], this.ystep = e[6], this.paintType = e[7], this.tilingType = e[8], this.color = t, this.canvasGraphicsFactory = r, this.baseTransform = i, this.type = "Pattern", this.ctx = n
				}
				var t = {
					COLORED: 1,
					UNCOLORED: 2
				},
					n = 3e3;
				return e.prototype = {
					createPatternCanvas: function(e) {
						var t = this.operatorList,
							r = this.bbox,
							o = this.xstep,
							a = this.ystep,
							s = this.paintType,
							l = this.tilingType,
							u = this.color,
							c = this.canvasGraphicsFactory;
						(0, i.info)("TilingType: " + l);
						var d = r[0],
							h = r[1],
							f = r[2],
							p = r[3],
							g = [d, h],
							v = [d + o, h + a],
							m = v[0] - g[0],
							b = v[1] - g[1],
							y = i.Util.singularValueDecompose2dScale(this.matrix),
							_ = i.Util.singularValueDecompose2dScale(this.baseTransform),
							w = [y[0] * _[0], y[1] * _[1]];
						m = Math.min(Math.ceil(Math.abs(m * w[0])), n), b = Math.min(Math.ceil(Math.abs(b * w[1])), n);
						var S = e.cachedCanvases.getCanvas("pattern", m, b, !0),
							P = S.context,
							x = c.createCanvasGraphics(P);
						x.groupLevel = e.groupLevel, this.setFillAndStrokeStyleToContext(x, s, u), this.setScale(m, b, o, a), this.transformToScale(x);
						var C = [1, 0, 0, 1, -g[0], -g[1]];
						return x.transform.apply(x, C), this.clipBbox(x, r, d, h, f, p), x.executeOperatorList(t), S.canvas
					},
					setScale: function(e, t, n, r) {
						this.scale = [e / n, t / r]
					},
					transformToScale: function(e) {
						var t = this.scale,
							n = [t[0], 0, 0, t[1], 0, 0];
						e.transform.apply(e, n)
					},
					scaleToContext: function() {
						var e = this.scale;
						this.ctx.scale(1 / e[0], 1 / e[1])
					},
					clipBbox: function(e, t, n, r, i, o) {
						if (Array.isArray(t) && 4 === t.length) {
							var a = i - n,
								s = o - r;
							e.ctx.rect(n, r, a, s), e.clip(), e.endPath()
						}
					},
					setFillAndStrokeStyleToContext: function(e, n, r) {
						var o = e.ctx,
							a = e.current;
						switch (n) {
						case t.COLORED:
							var s = this.ctx;
							o.fillStyle = s.fillStyle, o.strokeStyle = s.strokeStyle, a.fillColor = s.fillStyle, a.strokeColor = s.strokeStyle;
							break;
						case t.UNCOLORED:
							var l = i.Util.makeCssRgb(r[0], r[1], r[2]);
							o.fillStyle = l, o.strokeStyle = l, a.fillColor = l, a.strokeColor = l;
							break;
						default:
							throw new i.FormatError("Unsupported paint type: " + n)
						}
					},
					getPattern: function(e, t) {
						var n = this.createPatternCanvas(t);
						return e = this.ctx, e.setTransform.apply(e, this.baseTransform), e.transform.apply(e, this.matrix), this.scaleToContext(), e.createPattern(n, "repeat")
					}
				}, e
			}();
		t.getShadingPatternFromIR = r, t.TilingPattern = l
	}, function(e, t, n) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PDFDataTransportStream = void 0;
		var r = n(0),
			i = function() {
				function e(e, t) {
					var n = this;
					(0, r.assert)(t), this._queuedChunks = [];
					var i = e.initialData;
					if (i && i.length > 0) {
						var o = new Uint8Array(i).buffer;
						this._queuedChunks.push(o)
					}
					this._pdfDataRangeTransport = t, this._isRangeSupported = !e.disableRange, this._isStreamingSupported = !e.disableStream, this._contentLength = e.length, this._fullRequestReader = null, this._rangeReaders = [], this._pdfDataRangeTransport.addRangeListener(function(e, t) {
						n._onReceiveData({
							begin: e,
							chunk: t
						})
					}), this._pdfDataRangeTransport.addProgressListener(function(e) {
						n._onProgress({
							loaded: e
						})
					}), this._pdfDataRangeTransport.addProgressiveReadListener(function(e) {
						n._onReceiveData({
							chunk: e
						})
					}), this._pdfDataRangeTransport.transportReady()
				}
				function t(e, t) {
					this._stream = e, this._done = !1, this._queuedChunks = t || [], this._requests = [], this._headersReady = Promise.resolve(), e._fullRequestReader = this, this.onProgress = null
				}
				function n(e, t, n) {
					this._stream = e, this._begin = t, this._end = n, this._queuedChunk = null, this._requests = [], this._done = !1, this.onProgress = null
				}
				return e.prototype = {
					_onReceiveData: function(e) {
						var t = new Uint8Array(e.chunk).buffer;
						if (void 0 === e.begin) this._fullRequestReader ? this._fullRequestReader._enqueue(t) : this._queuedChunks.push(t);
						else {
							var n = this._rangeReaders.some(function(n) {
								return n._begin !== e.begin ? !1 : (n._enqueue(t), !0)
							});
							(0, r.assert)(n)
						}
					},
					_onProgress: function(e) {
						if (this._rangeReaders.length > 0) {
							var t = this._rangeReaders[0];
							t.onProgress && t.onProgress({
								loaded: e.loaded
							})
						}
					},
					_removeRangeReader: function(e) {
						var t = this._rangeReaders.indexOf(e);
						t >= 0 && this._rangeReaders.splice(t, 1)
					},
					getFullReader: function() {
						(0, r.assert)(!this._fullRequestReader);
						var e = this._queuedChunks;
						return this._queuedChunks = null, new t(this, e)
					},
					getRangeReader: function(e, t) {
						var r = new n(this, e, t);
						return this._pdfDataRangeTransport.requestDataRange(e, t), this._rangeReaders.push(r), r
					},
					cancelAllRequests: function(e) {
						this._fullRequestReader && this._fullRequestReader.cancel(e);
						var t = this._rangeReaders.slice(0);
						t.forEach(function(t) {
							t.cancel(e)
						}), this._pdfDataRangeTransport.abort()
					}
				}, t.prototype = {
					_enqueue: function(e) {
						if (!this._done) {
							if (this._requests.length > 0) {
								var t = this._requests.shift();
								return void t.resolve({
									value: e,
									done: !1
								})
							}
							this._queuedChunks.push(e)
						}
					},
					get headersReady() {
						return this._headersReady
					},
					get isRangeSupported() {
						return this._stream._isRangeSupported
					},
					get isStreamingSupported() {
						return this._stream._isStreamingSupported
					},
					get contentLength() {
						return this._stream._contentLength
					},
					read: function() {
						if (this._queuedChunks.length > 0) {
							var e = this._queuedChunks.shift();
							return Promise.resolve({
								value: e,
								done: !1
							})
						}
						if (this._done) return Promise.resolve({
							value: void 0,
							done: !0
						});
						var t = (0, r.createPromiseCapability)();
						return this._requests.push(t), t.promise
					},
					cancel: function(e) {
						this._done = !0, this._requests.forEach(function(e) {
							e.resolve({
								value: void 0,
								done: !0
							})
						}), this._requests = []
					}
				}, n.prototype = {
					_enqueue: function(e) {
						if (!this._done) {
							if (0 === this._requests.length) this._queuedChunk = e;
							else {
								var t = this._requests.shift();
								t.resolve({
									value: e,
									done: !1
								}), this._requests.forEach(function(e) {
									e.resolve({
										value: void 0,
										done: !0
									})
								}), this._requests = []
							}
							this._done = !0, this._stream._removeRangeReader(this)
						}
					},
					get isStreamingSupported() {
						return !1
					},
					read: function() {
						if (this._queuedChunk) {
							var e = this._queuedChunk;
							return this._queuedChunk = null, Promise.resolve({
								value: e,
								done: !1
							})
						}
						if (this._done) return Promise.resolve({
							value: void 0,
							done: !0
						});
						var t = (0, r.createPromiseCapability)();
						return this._requests.push(t), t.promise
					},
					cancel: function(e) {
						this._done = !0, this._requests.forEach(function(e) {
							e.resolve({
								value: void 0,
								done: !0
							})
						}), this._requests = [], this._stream._removeRangeReader(this)
					}
				}, e
			}();
		t.PDFDataTransportStream = i
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !t || "object" != typeof t && "function" != typeof t ? e : t
		}
		function i(e, t) {
			if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
			e.prototype = Object.create(t && t.prototype, {
				constructor: {
					value: e,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
		}
		function o(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function a(e, t) {
			return {
				protocol: e.protocol,
				auth: e.auth,
				host: e.hostname,
				port: e.port,
				path: e.path,
				method: "GET",
				headers: t
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PDFNodeStream = void 0;
		var s = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			l = n(0),
			u = n(38),
			c = require("fs"),
			d = require("http"),
			h = require("https"),
			f = require("url"),
			p = function() {
				function e(t) {
					o(this, e), this.options = t, this.source = t.source, this.url = f.parse(this.source.url), this.isHttp = "http:" === this.url.protocol || "https:" === this.url.protocol, this.isFsUrl = "file:" === this.url.protocol || !this.url.host, this.httpHeaders = this.isHttp && this.source.httpHeaders || {}, this._fullRequest = null, this._rangeRequestReaders = []
				}
				return s(e, [{
					key: "getFullReader",
					value: function() {
						return (0, l.assert)(!this._fullRequest), this._fullRequest = this.isFsUrl ? new y(this) : new m(this), this._fullRequest
					}
				}, {
					key: "getRangeReader",
					value: function(e, t) {
						var n = this.isFsUrl ? new _(this, e, t) : new b(this, e, t);
						return this._rangeRequestReaders.push(n), n
					}
				}, {
					key: "cancelAllRequests",
					value: function(e) {
						this._fullRequest && this._fullRequest.cancel(e);
						var t = this._rangeRequestReaders.slice(0);
						t.forEach(function(t) {
							t.cancel(e)
						})
					}
				}]), e
			}(),
			g = function() {
				function e(t) {
					o(this, e), this._url = t.url, this._done = !1, this._errored = !1, this._reason = null, this.onProgress = null, this._contentLength = t.source.length, this._loaded = 0, this._disableRange = t.options.disableRange || !1, this._rangeChunkSize = t.source.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !t.source.disableStream, this._isRangeSupported = !t.options.disableRange, this._readableStream = null, this._readCapability = (0, l.createPromiseCapability)(), this._headersCapability = (0, l.createPromiseCapability)()
				}
				return s(e, [{
					key: "read",
					value: function() {
						var e = this;
						return this._readCapability.promise.then(function() {
							if (e._done) return Promise.resolve({
								value: void 0,
								done: !0
							});
							if (e._errored) return Promise.reject(e._reason);
							var t = e._readableStream.read();
							if (null === t) return e._readCapability = (0, l.createPromiseCapability)(), e.read();
							e._loaded += t.length, e.onProgress && e.onProgress({
								loaded: e._loaded,
								total: e._contentLength
							});
							var n = new Uint8Array(t).buffer;
							return Promise.resolve({
								value: n,
								done: !1
							})
						})
					}
				}, {
					key: "cancel",
					value: function(e) {
						return this._readableStream ? void this._readableStream.destroy(e) : void this._error(e)
					}
				}, {
					key: "_error",
					value: function(e) {
						this._errored = !0, this._reason = e, this._readCapability.resolve()
					}
				}, {
					key: "_setReadableStream",
					value: function(e) {
						var t = this;
						this._readableStream = e, e.on("readable", function() {
							t._readCapability.resolve()
						}), e.on("end", function() {
							e.destroy(), t._done = !0, t._readCapability.resolve()
						}), e.on("error", function(e) {
							t._error(e)
						}), !this._isStreamingSupported && this._isRangeSupported && this._error(new l.AbortException("streaming is disabled")), this._errored && this._readableStream.destroy(this._reason)
					}
				}, {
					key: "headersReady",
					get: function() {
						return this._headersCapability.promise
					}
				}, {
					key: "contentLength",
					get: function() {
						return this._contentLength
					}
				}, {
					key: "isRangeSupported",
					get: function() {
						return this._isRangeSupported
					}
				}, {
					key: "isStreamingSupported",
					get: function() {
						return this._isStreamingSupported
					}
				}]), e
			}(),
			v = function() {
				function e(t) {
					o(this, e), this._url = t.url, this._done = !1, this._errored = !1, this._reason = null, this.onProgress = null, this._loaded = 0, this._readableStream = null, this._readCapability = (0, l.createPromiseCapability)(), this._isStreamingSupported = !t.source.disableStream
				}
				return s(e, [{
					key: "read",
					value: function() {
						var e = this;
						return this._readCapability.promise.then(function() {
							if (e._done) return Promise.resolve({
								value: void 0,
								done: !0
							});
							if (e._errored) return Promise.reject(e._reason);
							var t = e._readableStream.read();
							if (null === t) return e._readCapability = (0, l.createPromiseCapability)(), e.read();
							e._loaded += t.length, e.onProgress && e.onProgress({
								loaded: e._loaded
							});
							var n = new Uint8Array(t).buffer;
							return Promise.resolve({
								value: n,
								done: !1
							})
						})
					}
				}, {
					key: "cancel",
					value: function(e) {
						return this._readableStream ? void this._readableStream.destroy(e) : void this._error(e)
					}
				}, {
					key: "_error",
					value: function(e) {
						this._errored = !0, this._reason = e, this._readCapability.resolve()
					}
				}, {
					key: "_setReadableStream",
					value: function(e) {
						var t = this;
						this._readableStream = e, e.on("readable", function() {
							t._readCapability.resolve()
						}), e.on("end", function() {
							e.destroy(), t._done = !0, t._readCapability.resolve()
						}), e.on("error", function(e) {
							t._error(e)
						}), this._errored && this._readableStream.destroy(this._reason)
					}
				}, {
					key: "isStreamingSupported",
					get: function() {
						return this._isStreamingSupported
					}
				}]), e
			}(),
			m = function(e) {
				function t(e) {
					o(this, t);
					var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
						i = function(t) {
							n._headersCapability.resolve(), n._setReadableStream(t);
							var r = (0, u.validateRangeRequestCapabilities)({
								getResponseHeader: function(e) {
									return n._readableStream.headers[e.toLowerCase()]
								},
								isHttp: e.isHttp,
								rangeChunkSize: n._rangeChunkSize,
								disableRange: n._disableRange
							}),
								i = r.allowRangeRequests,
								o = r.suggestedLength;
							i && (n._isRangeSupported = !0), n._contentLength = o
						};
					return n._request = null, "http:" === n._url.protocol ? n._request = d.request(a(n._url, e.httpHeaders), i) : n._request = h.request(a(n._url, e.httpHeaders), i), n._request.on("error", function(e) {
						n._errored = !0, n._reason = e, n._headersCapability.reject(e)
					}), n._request.end(), n
				}
				return i(t, e), t
			}(g),
			b = function(e) {
				function t(e, n, i) {
					o(this, t);
					var s = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					s._httpHeaders = {};
					for (var l in e.httpHeaders) {
						var u = e.httpHeaders[l];
						"undefined" != typeof u && (s._httpHeaders[l] = u)
					}
					return s._httpHeaders.Range = "bytes=" + n + "-" + (i - 1), s._request = null, "http:" === s._url.protocol ? s._request = d.request(a(s._url, s._httpHeaders), function(e) {
						s._setReadableStream(e)
					}) : s._request = h.request(a(s._url, s._httpHeaders), function(e) {
						s._setReadableStream(e)
					}), s._request.on("error", function(e) {
						s._errored = !0, s._reason = e
					}), s._request.end(), s
				}
				return i(t, e), t
			}(v),
			y = function(e) {
				function t(e) {
					o(this, t);
					var n = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)),
						i = decodeURI(n._url.path);
					return c.lstat(i, function(e, t) {
						return e ? (n._errored = !0, n._reason = e, void n._headersCapability.reject(e)) : (n._contentLength = t.size, n._setReadableStream(c.createReadStream(i)), void n._headersCapability.resolve())
					}), n
				}
				return i(t, e), t
			}(g),
			_ = function(e) {
				function t(e, n, i) {
					o(this, t);
					var a = r(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
					return a._setReadableStream(c.createReadStream(decodeURI(a._url.path), {
						start: n,
						end: i - 1
					})), a
				}
				return i(t, e), t
			}(v);
		t.PDFNodeStream = p
	}, function(e, t, n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}
		function i(e, t) {
			return {
				method: "GET",
				headers: e,
				mode: "cors",
				credentials: t ? "include" : "same-origin",
				redirect: "follow"
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.PDFFetchStream = void 0;
		var o = function() {
				function e(e, t) {
					for (var n = 0; n < t.length; n++) {
						var r = t[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
					}
				}
				return function(t, n, r) {
					return n && e(t.prototype, n), r && e(t, r), t
				}
			}(),
			a = n(0),
			s = n(38),
			l = function() {
				function e(t) {
					r(this, e), this.options = t, this.source = t.source, this.isHttp = /^https?:/i.test(this.source.url), this.httpHeaders = this.isHttp && this.source.httpHeaders || {}, this._fullRequestReader = null, this._rangeRequestReaders = []
				}
				return o(e, [{
					key: "getFullReader",
					value: function() {
						return (0, a.assert)(!this._fullRequestReader), this._fullRequestReader = new u(this), this._fullRequestReader
					}
				}, {
					key: "getRangeReader",
					value: function(e, t) {
						var n = new c(this, e, t);
						return this._rangeRequestReaders.push(n), n
					}
				}, {
					key: "cancelAllRequests",
					value: function(e) {
						this._fullRequestReader && this._fullRequestReader.cancel(e);
						var t = this._rangeRequestReaders.slice(0);
						t.forEach(function(t) {
							t.cancel(e)
						})
					}
				}]), e
			}(),
			u = function() {
				function e(t) {
					var n = this;
					r(this, e), this._stream = t, this._reader = null, this._loaded = 0, this._withCredentials = t.source.withCredentials, this._contentLength = this._stream.source.length, this._headersCapability = (0, a.createPromiseCapability)(), this._disableRange = this._stream.options.disableRange, this._rangeChunkSize = this._stream.source.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isRangeSupported = !this._stream.options.disableRange, this._isStreamingSupported = !this._stream.source.disableStream, this._headers = new Headers;
					for (var o in this._stream.httpHeaders) {
						var l = this._stream.httpHeaders[o];
						"undefined" != typeof l && this._headers.append(o, l)
					}
					var u = this._stream.source.url;
					fetch(u, i(this._headers, this._withCredentials)).then(function(e) {
						if (!(0, s.validateResponseStatus)(e.status)) throw (0, s.createResponseStatusError)(e.status, u);
						n._reader = e.body.getReader(), n._headersCapability.resolve();
						var t = (0, s.validateRangeRequestCapabilities)({
							getResponseHeader: function(t) {
								return e.headers.get(t)
							},
							isHttp: n._stream.isHttp,
							rangeChunkSize: n._rangeChunkSize,
							disableRange: n._disableRange
						}),
							r = t.allowRangeRequests,
							i = t.suggestedLength;
						n._contentLength = i, n._isRangeSupported = r, !n._isStreamingSupported && n._isRangeSupported && n.cancel(new a.AbortException("streaming is disabled"))
					})["catch"](this._headersCapability.reject), this.onProgress = null
				}
				return o(e, [{
					key: "read",
					value: function() {
						var e = this;
						return this._headersCapability.promise.then(function() {
							return e._reader.read().then(function(t) {
								var n = t.value,
									r = t.done;
								if (r) return Promise.resolve({
									value: n,
									done: r
								});
								e._loaded += n.byteLength, e.onProgress && e.onProgress({
									loaded: e._loaded,
									total: e._contentLength
								});
								var i = new Uint8Array(n).buffer;
								return Promise.resolve({
									value: i,
									done: !1
								})
							})
						})
					}
				}, {
					key: "cancel",
					value: function(e) {
						this._reader && this._reader.cancel(e)
					}
				}, {
					key: "headersReady",
					get: function() {
						return this._headersCapability.promise
					}
				}, {
					key: "contentLength",
					get: function() {
						return this._contentLength
					}
				}, {
					key: "isRangeSupported",
					get: function() {
						return this._isRangeSupported
					}
				}, {
					key: "isStreamingSupported",
					get: function() {
						return this._isStreamingSupported
					}
				}]), e
			}(),
			c = function() {
				function e(t, n, o) {
					var l = this;
					r(this, e), this._stream = t, this._reader = null, this._loaded = 0, this._withCredentials = t.source.withCredentials, this._readCapability = (0, a.createPromiseCapability)(), this._isStreamingSupported = !t.source.disableStream, this._headers = new Headers;
					for (var u in this._stream.httpHeaders) {
						var c = this._stream.httpHeaders[u];
						"undefined" != typeof c && this._headers.append(u, c)
					}
					var d = n + "-" + (o - 1);
					this._headers.append("Range", "bytes=" + d);
					var h = this._stream.source.url;
					fetch(h, i(this._headers, this._withCredentials)).then(function(e) {
						if (!(0, s.validateResponseStatus)(e.status)) throw (0, s.createResponseStatusError)(e.status, h);
						l._readCapability.resolve(), l._reader = e.body.getReader()
					}), this.onProgress = null
				}
				return o(e, [{
					key: "read",
					value: function() {
						var e = this;
						return this._readCapability.promise.then(function() {
							return e._reader.read().then(function(t) {
								var n = t.value,
									r = t.done;
								if (r) return Promise.resolve({
									value: n,
									done: r
								});
								e._loaded += n.byteLength, e.onProgress && e.onProgress({
									loaded: e._loaded
								});
								var i = new Uint8Array(n).buffer;
								return Promise.resolve({
									value: i,
									done: !1
								})
							})
						})
					}
				}, {
					key: "cancel",
					value: function(e) {
						this._reader && this._reader.cancel(e)
					}
				}, {
					key: "isStreamingSupported",
					get: function() {
						return this._isStreamingSupported
					}
				}]), e
			}();
		t.PDFFetchStream = l
	}, function(e, t, n) {
		"use strict";

		function r(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}
		function i(e, t) {
			this.url = e, t = t || {}, this.isHttp = /^https?:/i.test(e), this.httpHeaders = this.isHttp && t.httpHeaders || {}, this.withCredentials = t.withCredentials || !1, this.getXhr = t.getXhr ||
			function() {
				return new XMLHttpRequest
			}, this.currXhrId = 0, this.pendingRequests = Object.create(null), this.loadedRequests = Object.create(null)
		}
		function o(e) {
			var t = e.response;
			if ("string" != typeof t) return t;
			var n = (0, u.stringToBytes)(t);
			return n.buffer
		}
		function a(e) {
			this._options = e;
			var t = e.source;
			this._manager = new i(t.url, {
				httpHeaders: t.httpHeaders,
				withCredentials: t.withCredentials
			}), this._rangeChunkSize = t.rangeChunkSize, this._fullRequestReader = null, this._rangeRequestReaders = []
		}
		function s(e, t) {
			this._manager = e;
			var n = t.source,
				r = {
					onHeadersReceived: this._onHeadersReceived.bind(this),
					onProgressiveData: n.disableStream ? null : this._onProgressiveData.bind(this),
					onDone: this._onDone.bind(this),
					onError: this._onError.bind(this),
					onProgress: this._onProgress.bind(this)
				};
			this._url = n.url, this._fullRequestId = e.requestFull(r), this._headersReceivedCapability = (0, u.createPromiseCapability)(), this._disableRange = t.disableRange || !1, this._contentLength = n.length, this._rangeChunkSize = n.rangeChunkSize, this._rangeChunkSize || this._disableRange || (this._disableRange = !0), this._isStreamingSupported = !1, this._isRangeSupported = !1, this._cachedChunks = [], this._requests = [], this._done = !1, this._storedError = void 0, this.onProgress = null
		}
		function l(e, t, n) {
			this._manager = e;
			var r = {
				onDone: this._onDone.bind(this),
				onProgress: this._onProgress.bind(this)
			};
			this._requestId = e.requestRange(t, n, r), this._requests = [], this._queuedChunk = null, this._done = !1, this.onProgress = null, this.onClosed = null
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.NetworkManager = t.PDFNetworkStream = void 0;
		var u = n(0),
			c = n(38),
			d = n(14),
			h = r(d),
			f = 200,
			p = 206,
			g = function() {
				try {
					var e = new XMLHttpRequest;
					return e.open("GET", h["default"].location.href), e.responseType = "moz-chunked-arraybuffer", "moz-chunked-arraybuffer" === e.responseType
				} catch (t) {
					return !1
				}
			}();
		i.prototype = {
			requestRange: function(e, t, n) {
				var r = {
					begin: e,
					end: t
				};
				for (var i in n) r[i] = n[i];
				return this.request(r)
			},
			requestFull: function(e) {
				return this.request(e)
			},
			request: function(e) {
				var t = this.getXhr(),
					n = this.currXhrId++,
					r = this.pendingRequests[n] = {
						xhr: t
					};
				t.open("GET", this.url), t.withCredentials = this.withCredentials;
				for (var i in this.httpHeaders) {
					var o = this.httpHeaders[i];
					"undefined" != typeof o && t.setRequestHeader(i, o)
				}
				if (this.isHttp && "begin" in e && "end" in e) {
					var a = e.begin + "-" + (e.end - 1);
					t.setRequestHeader("Range", "bytes=" + a), r.expectedStatus = 206
				} else r.expectedStatus = 200;
				var s = g && !! e.onProgressiveData;
				return s ? (t.responseType = "moz-chunked-arraybuffer", r.onProgressiveData = e.onProgressiveData, r.mozChunked = !0) : t.responseType = "arraybuffer", e.onError && (t.onerror = function(n) {
					e.onError(t.status)
				}), t.onreadystatechange = this.onStateChange.bind(this, n), t.onprogress = this.onProgress.bind(this, n), r.onHeadersReceived = e.onHeadersReceived, r.onDone = e.onDone, r.onError = e.onError, r.onProgress = e.onProgress, t.send(null), n
			},
			onProgress: function(e, t) {
				var n = this.pendingRequests[e];
				if (n) {
					if (n.mozChunked) {
						var r = o(n.xhr);
						n.onProgressiveData(r)
					}
					var i = n.onProgress;
					i && i(t)
				}
			},
			onStateChange: function(e, t) {
				var n = this.pendingRequests[e];
				if (n) {
					var r = n.xhr;
					if (r.readyState >= 2 && n.onHeadersReceived && (n.onHeadersReceived(), delete n.onHeadersReceived), 4 === r.readyState && e in this.pendingRequests) {
						if (delete this.pendingRequests[e], 0 === r.status && this.isHttp) return void(n.onError && n.onError(r.status));
						var i = r.status || f,
							a = i === f && n.expectedStatus === p;
						if (!a && i !== n.expectedStatus) return void(n.onError && n.onError(r.status));
						this.loadedRequests[e] = !0;
						var s = o(r);
						if (i === p) {
							var l = r.getResponseHeader("Content-Range"),
								u = /bytes (\d+)-(\d+)\/(\d+)/.exec(l),
								c = parseInt(u[1], 10);
							n.onDone({
								begin: c,
								chunk: s
							})
						} else n.onProgressiveData ? n.onDone(null) : s ? n.onDone({
							begin: 0,
							chunk: s
						}) : n.onError && n.onError(r.status)
					}
				}
			},
			hasPendingRequests: function() {
				for (var e in this.pendingRequests) return !0;
				return !1
			},
			getRequestXhr: function(e) {
				return this.pendingRequests[e].xhr
			},
			isStreamingRequest: function(e) {
				return !!this.pendingRequests[e].onProgressiveData
			},
			isPendingRequest: function(e) {
				return e in this.pendingRequests
			},
			isLoadedRequest: function(e) {
				return e in this.loadedRequests
			},
			abortAllRequests: function() {
				for (var e in this.pendingRequests) this.abortRequest(0 | e)
			},
			abortRequest: function(e) {
				var t = this.pendingRequests[e].xhr;
				delete this.pendingRequests[e], t.abort()
			}
		}, a.prototype = {
			_onRangeRequestReaderClosed: function(e) {
				var t = this._rangeRequestReaders.indexOf(e);
				t >= 0 && this._rangeRequestReaders.splice(t, 1)
			},
			getFullReader: function() {
				return (0, u.assert)(!this._fullRequestReader), this._fullRequestReader = new s(this._manager, this._options), this._fullRequestReader
			},
			getRangeReader: function(e, t) {
				var n = new l(this._manager, e, t);
				return n.onClosed = this._onRangeRequestReaderClosed.bind(this), this._rangeRequestReaders.push(n), n
			},
			cancelAllRequests: function(e) {
				this._fullRequestReader && this._fullRequestReader.cancel(e);
				var t = this._rangeRequestReaders.slice(0);
				t.forEach(function(t) {
					t.cancel(e)
				})
			}
		}, s.prototype = {
			_onHeadersReceived: function() {
				var e = this._fullRequestId,
					t = this._manager.getRequestXhr(e),
					n = (0, c.validateRangeRequestCapabilities)({
						getResponseHeader: function(e) {
							return t.getResponseHeader(e)
						},
						isHttp: this._manager.isHttp,
						rangeChunkSize: this._rangeChunkSize,
						disableRange: this._disableRange
					}),
					r = n.allowRangeRequests,
					i = n.suggestedLength;
				this._contentLength = i || this._contentLength, r && (this._isRangeSupported = !0);
				var o = this._manager;
				o.isStreamingRequest(e) ? this._isStreamingSupported = !0 : this._isRangeSupported && o.abortRequest(e), this._headersReceivedCapability.resolve()
			},
			_onProgressiveData: function(e) {
				if (this._requests.length > 0) {
					var t = this._requests.shift();
					t.resolve({
						value: e,
						done: !1
					})
				} else this._cachedChunks.push(e)
			},
			_onDone: function(e) {
				e && this._onProgressiveData(e.chunk), this._done = !0, this._cachedChunks.length > 0 || (this._requests.forEach(function(e) {
					e.resolve({
						value: void 0,
						done: !0
					})
				}), this._requests = [])
			},
			_onError: function(e) {
				var t = this._url,
					n = (0, c.createResponseStatusError)(e, t);
				this._storedError = n, this._headersReceivedCapability.reject(n), this._requests.forEach(function(e) {
					e.reject(n)
				}), this._requests = [], this._cachedChunks = []
			},
			_onProgress: function(e) {
				this.onProgress && this.onProgress({
					loaded: e.loaded,
					total: e.lengthComputable ? e.total : this._contentLength
				})
			},
			get isRangeSupported() {
				return this._isRangeSupported
			},
			get isStreamingSupported() {
				return this._isStreamingSupported
			},
			get contentLength() {
				return this._contentLength
			},
			get headersReady() {
				return this._headersReceivedCapability.promise
			},
			read: function() {
				if (this._storedError) return Promise.reject(this._storedError);
				if (this._cachedChunks.length > 0) {
					var e = this._cachedChunks.shift();
					return Promise.resolve({
						value: e,
						done: !1
					})
				}
				if (this._done) return Promise.resolve({
					value: void 0,
					done: !0
				});
				var t = (0, u.createPromiseCapability)();
				return this._requests.push(t), t.promise
			},
			cancel: function(e) {
				this._done = !0, this._headersReceivedCapability.reject(e), this._requests.forEach(function(e) {
					e.resolve({
						value: void 0,
						done: !0
					})
				}), this._requests = [], this._manager.isPendingRequest(this._fullRequestId) && this._manager.abortRequest(this._fullRequestId), this._fullRequestReader = null
			}
		}, l.prototype = {
			_close: function() {
				this.onClosed && this.onClosed(this)
			},
			_onDone: function(e) {
				var t = e.chunk;
				if (this._requests.length > 0) {
					var n = this._requests.shift();
					n.resolve({
						value: t,
						done: !1
					})
				} else this._queuedChunk = t;
				this._done = !0, this._requests.forEach(function(e) {
					e.resolve({
						value: void 0,
						done: !0
					})
				}), this._requests = [], this._close()
			},
			_onProgress: function(e) {
				!this.isStreamingSupported && this.onProgress && this.onProgress({
					loaded: e.loaded
				})
			},
			get isStreamingSupported() {
				return !1
			},
			read: function() {
				if (null !== this._queuedChunk) {
					var e = this._queuedChunk;
					return this._queuedChunk = null, Promise.resolve({
						value: e,
						done: !1
					})
				}
				if (this._done) return Promise.resolve({
					value: void 0,
					done: !0
				});
				var t = (0, u.createPromiseCapability)();
				return this._requests.push(t), t.promise
			},
			cancel: function(e) {
				this._done = !0, this._requests.forEach(function(e) {
					e.resolve({
						value: void 0,
						done: !0
					})
				}), this._requests = [], this._manager.isPendingRequest(this._requestId) && this._manager.abortRequest(this._requestId), this._close()
			}
		}, t.PDFNetworkStream = a, t.NetworkManager = i
	}])
}), function(e) {
	function t(r) {
		if (n[r]) return n[r].exports;
		var i = n[r] = {
			i: r,
			l: !1,
			exports: {}
		};
		return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.d = function(e, n, r) {
		t.o(e, n) || Object.defineProperty(e, n, {
			configurable: !1,
			enumerable: !0,
			get: r
		})
	}, t.n = function(e) {
		var n = e && e.__esModule ?
		function() {
			return e["default"]
		} : function() {
			return e
		};
		return t.d(n, "a", n), n
	}, t.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, t.p = "", t(t.s = 10)
}([function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e, t) {
		return t ? e.replace(/\{\{\s*(\w+)\s*\}\}/g, function(e, n) {
			return n in t ? t[n] : "{{" + n + "}}"
		}) : e
	}
	function o(e) {
		var t = window.devicePixelRatio || 1,
			n = e.webkitBackingStorePixelRatio || e.mozBackingStorePixelRatio || e.msBackingStorePixelRatio || e.oBackingStorePixelRatio || e.backingStorePixelRatio || 1,
			r = t / n;
		return {
			sx: r,
			sy: r,
			scaled: 1 !== r
		}
	}
	function a(e, t) {
		var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
			r = e.offsetParent;
		if (!r) return void console.error("offsetParent is not set -- cannot scroll");
		for (var i = e.offsetTop + e.clientTop, o = e.offsetLeft + e.clientLeft; r.clientHeight === r.scrollHeight || n && "hidden" === getComputedStyle(r).overflow;) if (r.dataset._scaleY && (i /= r.dataset._scaleY, o /= r.dataset._scaleX), i += r.offsetTop, o += r.offsetLeft, r = r.offsetParent, !r) return;
		t && (void 0 !== t.top && (i += t.top), void 0 !== t.left && (o += t.left, r.scrollLeft = o)), r.scrollTop = i
	}
	function s(e, t) {
		var n = function(n) {
				i || (i = window.requestAnimationFrame(function() {
					i = null;
					var n = e.scrollTop,
						o = r.lastY;
					n !== o && (r.down = n > o), r.lastY = n, t(r)
				}))
			},
			r = {
				down: !0,
				lastY: e.scrollTop,
				_eventHandler: n
			},
			i = null;
		return e.addEventListener("scroll", n, !0), r
	}
	function l(e) {
		for (var t = e.split("&"), n = Object.create(null), r = 0, i = t.length; i > r; ++r) {
			var o = t[r].split("="),
				a = o[0].toLowerCase(),
				s = o.length > 1 ? o[1] : null;
			n[decodeURIComponent(a)] = decodeURIComponent(s)
		}
		return n
	}
	function u(e, t) {
		var n = 0,
			r = e.length - 1;
		if (0 === e.length || !t(e[r])) return e.length;
		if (t(e[n])) return n;
		for (; r > n;) {
			var i = n + r >> 1,
				o = e[i];
			t(o) ? r = i : n = i + 1
		}
		return n
	}
	function c(e) {
		if (Math.floor(e) === e) return [e, 1];
		var t = 1 / e,
			n = 8;
		if (t > n) return [1, n];
		if (Math.floor(t) === t) return [1, t];
		for (var r = e > 1 ? t : e, i = 0, o = 1, a = 1, s = 1;;) {
			var l = i + a,
				u = o + s;
			if (u > n) break;
			l / u >= r ? (a = l, s = u) : (i = l, o = u)
		}
		var c = void 0;
		return c = a / s - r > r - i / o ? r === e ? [i, o] : [o, i] : r === e ? [a, s] : [s, a]
	}
	function d(e, t) {
		var n = e % t;
		return 0 === n ? e : Math.round(e - n + t)
	}
	function h(e, t) {
		function n(e) {
			var t = e.div,
				n = t.offsetTop + t.clientTop + t.clientHeight;
			return n > i
		}
		for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1, i = e.scrollTop, o = i + e.clientHeight, a = e.scrollLeft, s = a + e.clientWidth, l = [], c = void 0, d = void 0, h = void 0, f = void 0, p = void 0, g = void 0, v = void 0, m = void 0, b = 0 === t.length ? 0 : u(t, n), y = b, _ = t.length; _ > y && (c = t[y], d = c.div, h = d.offsetTop + d.clientTop, f = d.clientHeight, !(h > o)); y++) v = d.offsetLeft + d.clientLeft, m = d.clientWidth, a > v + m || v > s || (p = Math.max(0, i - h) + Math.max(0, h + f - o), g = 100 * (f - p) / f | 0, l.push({
			id: c.id,
			x: v,
			y: h,
			view: c,
			percent: g
		}));
		var w = l[0],
			S = l[l.length - 1];
		return r && l.sort(function(e, t) {
			var n = e.percent - t.percent;
			return Math.abs(n) > .001 ? -n : e.id - t.id
		}), {
			first: w,
			last: S,
			views: l
		}
	}
	function f(e) {
		e.preventDefault()
	}
	function p(e) {
		for (var t = 0, n = e.length; n > t && "" === e[t].trim();) t++;
		return "data:" === e.substr(t, 5).toLowerCase()
	}
	function g(e) {
		var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "document.pdf";
		if (p(e)) return console.warn('getPDFFileNameFromURL: ignoring "data:" URL for performance reasons.'), t;
		var n = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/,
			r = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
			i = n.exec(e),
			o = r.exec(i[1]) || r.exec(i[2]) || r.exec(i[3]);
		if (o && (o = o[0], -1 !== o.indexOf("%"))) try {
			o = r.exec(decodeURIComponent(o))[0]
		} catch (a) {}
		return o || t
	}
	function v(e) {
		var t = Math.sqrt(e.deltaX * e.deltaX + e.deltaY * e.deltaY),
			n = Math.atan2(e.deltaY, e.deltaX); - .25 * Math.PI < n && n < .75 * Math.PI && (t = -t);
		var r = 0,
			i = 1,
			o = 30,
			a = 30;
		return e.deltaMode === r ? t /= o * a : e.deltaMode === i && (t /= a), t
	}
	function m(e) {
		return Number.isInteger(e) && e % 90 === 0
	}
	function b(e) {
		var t = Object.create(null);
		for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t
	}
	function y(e) {
		function t(e) {
			n instanceof q ? n.off(r, s) : n.removeEventListener(r, s), u && clearTimeout(u), a.resolve(e)
		}
		var n = e.target,
			r = e.name,
			i = e.delay,
			o = void 0 === i ? 0 : i;
		if ("object" !== ("undefined" == typeof n ? "undefined" : S(n)) || !r || "string" != typeof r || !(Number.isInteger(o) && o >= 0)) return Promise.reject(new Error("waitOnEventOrTimeout - invalid paramaters."));
		var a = (0, P.createPromiseCapability)(),
			s = t.bind(null, F.EVENT);
		n instanceof q ? n.on(r, s) : n.addEventListener(r, s);
		var l = t.bind(null, F.TIMEOUT),
			u = setTimeout(l, o);
		return a.promise
	}
	function _(e, t, n) {
		return Math.min(Math.max(e, t), n)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.waitOnEventOrTimeout = t.WaitOnType = t.localized = t.animationStarted = t.normalizeWheelEventDelta = t.binarySearchFirstItem = t.watchScroll = t.scrollIntoView = t.getOutputScale = t.approximateFraction = t.roundToDivide = t.getVisibleElements = t.parseQueryString = t.noContextMenuHandler = t.getPDFFileNameFromURL = t.ProgressBar = t.EventBus = t.NullL10n = t.mozL10n = t.RendererType = t.PresentationModeState = t.cloneObj = t.isValidRotation = t.VERTICAL_PADDING = t.SCROLLBAR_PADDING = t.MAX_AUTO_SCALE = t.UNKNOWN_SCALE = t.MAX_SCALE = t.MIN_SCALE = t.DEFAULT_SCALE = t.DEFAULT_SCALE_VALUE = t.CSS_UNITS = void 0;
	var w = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	}, P = n(1), x = 96 / 72, C = "page-width", A = 1, k = .25, T = 10, E = 0, L = 1.25, I = 40, R = 5, O = {
		UNKNOWN: 0,
		NORMAL: 1,
		CHANGING: 2,
		FULLSCREEN: 3
	}, D = {
		CANVAS: "canvas",
		SVG: "svg"
	}, N = {
		get: function(e, t, n) {
			return Promise.resolve(i(n, t))
		},
		translate: function(e) {
			return Promise.resolve()
		}
	};
	P.PDFJS.disableFullscreen = void 0 === P.PDFJS.disableFullscreen ? !1 : P.PDFJS.disableFullscreen, P.PDFJS.useOnlyCssZoom = void 0 === P.PDFJS.useOnlyCssZoom ? !1 : P.PDFJS.useOnlyCssZoom, P.PDFJS.maxCanvasPixels = void 0 === P.PDFJS.maxCanvasPixels ? 16777216 : P.PDFJS.maxCanvasPixels, P.PDFJS.disableHistory = void 0 === P.PDFJS.disableHistory ? !1 : P.PDFJS.disableHistory, P.PDFJS.disableTextLayer = void 0 === P.PDFJS.disableTextLayer ? !1 : P.PDFJS.disableTextLayer, P.PDFJS.ignoreCurrentPositionOnZoom = void 0 === P.PDFJS.ignoreCurrentPositionOnZoom ? !1 : P.PDFJS.ignoreCurrentPositionOnZoom, P.PDFJS.locale = void 0 === P.PDFJS.locale && "undefined" != typeof navigator ? navigator.language : P.PDFJS.locale;
	var F = {
		EVENT: "event",
		TIMEOUT: "timeout"
	},
		M = new Promise(function(e) {
			window.requestAnimationFrame(e)
		}),
		j = void 0,
		B = Promise.resolve(),
		q = function() {
			function e() {
				r(this, e), this._listeners = Object.create(null)
			}
			return w(e, [{
				key: "on",
				value: function(e, t) {
					var n = this._listeners[e];
					n || (n = [], this._listeners[e] = n), n.push(t)
				}
			}, {
				key: "off",
				value: function(e, t) {
					var n = this._listeners[e],
						r = void 0;
					!n || (r = n.indexOf(t)) < 0 || n.splice(r, 1)
				}
			}, {
				key: "dispatch",
				value: function(e) {
					var t = this._listeners[e];
					if (t && 0 !== t.length) {
						var n = Array.prototype.slice.call(arguments, 1);
						t.slice(0).forEach(function(e) {
							e.apply(null, n)
						})
					}
				}
			}]), e
		}(),
		V = function() {
			function e(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					i = n.height,
					o = n.width,
					a = n.units;
				r(this, e), this.visible = !0, this.div = document.querySelector(t + " .progress"), this.bar = this.div.parentNode, this.height = i || 100, this.width = o || 100, this.units = a || "%", this.div.style.height = this.height + this.units, this.percent = 0
			}
			return w(e, [{
				key: "_updateBar",
				value: function() {
					if (this._indeterminate) return this.div.classList.add("indeterminate"), void(this.div.style.width = this.width + this.units);
					this.div.classList.remove("indeterminate");
					var e = this.width * this._percent / 100;
					this.div.style.width = e + this.units
				}
			}, {
				key: "setWidth",
				value: function(e) {
					if (e) {
						var t = e.parentNode,
							n = t.offsetWidth - e.offsetWidth;
						n > 0 && this.bar.setAttribute("style", "width: calc(100% - " + n + "px);")
					}
				}
			}, {
				key: "hide",
				value: function() {
					this.visible && (this.visible = !1, this.bar.classList.add("hidden"), document.body.classList.remove("loadingInProgress"))
				}
			}, {
				key: "show",
				value: function() {
					this.visible || (this.visible = !0, document.body.classList.add("loadingInProgress"), this.bar.classList.remove("hidden"))
				}
			}, {
				key: "percent",
				get: function() {
					return this._percent
				},
				set: function(e) {
					this._indeterminate = isNaN(e), this._percent = _(e, 0, 100), this._updateBar()
				}
			}]), e
		}();
	t.CSS_UNITS = x, t.DEFAULT_SCALE_VALUE = C, t.DEFAULT_SCALE = A, t.MIN_SCALE = k, t.MAX_SCALE = T, t.UNKNOWN_SCALE = E, t.MAX_AUTO_SCALE = L, t.SCROLLBAR_PADDING = I, t.VERTICAL_PADDING = R, t.isValidRotation = m, t.cloneObj = b, t.PresentationModeState = O, t.RendererType = D, t.mozL10n = j, t.NullL10n = N, t.EventBus = q, t.ProgressBar = V, t.getPDFFileNameFromURL = g, t.noContextMenuHandler = f, t.parseQueryString = l, t.getVisibleElements = h, t.roundToDivide = d, t.approximateFraction = c, t.getOutputScale = o, t.scrollIntoView = a, t.watchScroll = s, t.binarySearchFirstItem = u, t.normalizeWheelEventDelta = v, t.animationStarted = M, t.localized = B, t.WaitOnType = F, t.waitOnEventOrTimeout = y
}, function(e, t, n) {
	"use strict";
	var r;
	r = "undefined" != typeof window && window["pdfjs-dist/build/pdf"] ? window["pdfjs-dist/build/pdf"] : require("../build/pdf.js"), e.exports = r
}, function(e, t, n) {
	"use strict";

	function r(e) {
		e.on("documentload", function() {
			var e = document.createEvent("CustomEvent");
			e.initCustomEvent("documentload", !0, !0, {}), window.dispatchEvent(e)
		}), e.on("pagerendered", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagerendered", !0, !0, {
				pageNumber: e.pageNumber,
				cssTransform: e.cssTransform
			}), e.source.div.dispatchEvent(t)
		}), e.on("textlayerrendered", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("textlayerrendered", !0, !0, {pageNumber: e.pageNumber
			}), e.source.textLayerDiv.dispatchEvent(t)
		}), e.on("pagechange", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("pagechange", !0, !0, window, 0), t.pageNumber = e.pageNumber, e.source.container.dispatchEvent(t)
		}), e.on("pagesinit", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagesinit", !0, !0, null), e.source.container.dispatchEvent(t)
		}), e.on("pagesloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagesloaded", !0, !0, {
				pagesCount: e.pagesCount
			}), e.source.container.dispatchEvent(t)
		}), e.on("scalechange", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("scalechange", !0, !0, window, 0), t.scale = e.scale, t.presetValue = e.presetValue, e.source.container.dispatchEvent(t)
		}), e.on("updateviewarea", function(e) {
			var t = document.createEvent("UIEvents");
			t.initUIEvent("updateviewarea", !0, !0, window, 0), t.location = e.location, e.source.container.dispatchEvent(t)
		}), e.on("find", function(e) {
			if (e.source !== window) {
				var t = document.createEvent("CustomEvent");
				t.initCustomEvent("find" + e.type, !0, !0, {
					query: e.query,
					phraseSearch: e.phraseSearch,
					caseSensitive: e.caseSensitive,
					highlightAll: e.highlightAll,
					findPrevious: e.findPrevious
				}), window.dispatchEvent(t)
			}
		}), e.on("labeling", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("labeling", !0, !0, {
				selection: e.selection,
				ifLabeling: e.ifLabeling
			}), window.dispatchEvent(t)
		}), e.on("attachmentsloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("attachmentsloaded", !0, !0, {
				attachmentsCount: e.attachmentsCount
			}), e.source.container.dispatchEvent(t)
		}), e.on("sidebarviewchanged", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("sidebarviewchanged", !0, !0, {
				view: e.view
			}), e.source.outerContainer.dispatchEvent(t)
		}), e.on("pagemode", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("pagemode", !0, !0, {
				mode: e.mode
			}), e.source.pdfViewer.container.dispatchEvent(t)
		}), e.on("namedaction", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("namedaction", !0, !0, {
				action: e.action
			}), e.source.pdfViewer.container.dispatchEvent(t)
		}), e.on("presentationmodechanged", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("presentationmodechanged", !0, !0, {
				active: e.active,
				switchInProgress: e.switchInProgress
			}), window.dispatchEvent(t)
		}), e.on("outlineloaded", function(e) {
			var t = document.createEvent("CustomEvent");
			t.initCustomEvent("outlineloaded", !0, !0, {
				outlineCount: e.outlineCount
			}), e.source.container.dispatchEvent(t)
		})
	}
	function i() {
		return a ? a : (a = new o.EventBus, r(a), a)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.getGlobalEventBus = t.attachDOMEventsToEventBus = void 0;
	var o = n(0),
		a = null;
	t.attachDOMEventsToEventBus = r, t.getGlobalEventBus = i
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = 3e4,
		a = {
			INITIAL: 0,
			RUNNING: 1,
			PAUSED: 2,
			FINISHED: 3
		},
		s = function() {
			function e() {
				r(this, e), this.pdfViewer = null, this.pdfThumbnailViewer = null, this.onIdle = null, this.highestPriorityPage = null, this.idleTimeout = null, this.printing = !1, this.isThumbnailViewEnabled = !1
			}
			return i(e, [{
				key: "setViewer",
				value: function(e) {
					this.pdfViewer = e
				}
			}, {
				key: "setThumbnailViewer",
				value: function(e) {
					this.pdfThumbnailViewer = e
				}
			}, {
				key: "isHighestPriority",
				value: function(e) {
					return this.highestPriorityPage === e.renderingId
				}
			}, {
				key: "renderHighestPriority",
				value: function(e) {
					this.idleTimeout && (clearTimeout(this.idleTimeout), this.idleTimeout = null), this.pdfViewer.forceRendering(e) || this.pdfThumbnailViewer && this.isThumbnailViewEnabled && this.pdfThumbnailViewer.forceRendering() || this.printing || this.onIdle && (this.idleTimeout = setTimeout(this.onIdle.bind(this), o))
				}
			}, {
				key: "getHighestPriority",
				value: function(e, t, n) {
					var r = e.views,
						i = r.length;
					if (0 === i) return !1;
					for (var o = 0; i > o; ++o) {
						var a = r[o].view;
						if (!this.isViewFinished(a)) return a
					}
					if (n) {
						var s = e.last.id;
						if (t[s] && !this.isViewFinished(t[s])) return t[s]
					} else {
						var l = e.first.id - 2;
						if (t[l] && !this.isViewFinished(t[l])) return t[l]
					}
					return null
				}
			}, {
				key: "isViewFinished",
				value: function(e) {
					return e.renderingState === a.FINISHED
				}
			}, {
				key: "renderView",
				value: function(e) {
					var t = this;
					switch (e.renderingState) {
					case a.FINISHED:
						return !1;
					case a.PAUSED:
						this.highestPriorityPage = e.renderingId, e.resume();
						break;
					case a.RUNNING:
						this.highestPriorityPage = e.renderingId;
						break;
					case a.INITIAL:
						this.highestPriorityPage = e.renderingId;
						var n = function() {
								t.renderHighestPriority()
							};
						e.draw().then(n, n)
					}
					return !0
				}
			}]), e
		}();
	t.RenderingStates = a, t.PDFRenderingQueue = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		e.imageResourcesPath = "./images/", e.workerSrc = "../build/pdf.worker.js", e.cMapUrl = "../web/cmaps/", t.workerSrc && (e.workerSrc = t.workerSrc), e.cMapPacked = !0
	}
	function i(e) {
		return new Promise(function(t, n) {
			var r = he.appConfig,
				i = document.createElement("script");
			i.src = r.debuggerScriptPath, i.onload = function() {
				PDFBug.enable(e), PDFBug.init({
					PDFJS: z.PDFJS,
					OPS: z.OPS
				}, r.mainContainer), t()
			}, i.onerror = function() {
				n(new Error("Cannot load debugger at " + i.src))
			}, (document.getElementsByTagName("head")[0] || document.body).appendChild(i)
		})
	}
	function o() {
		var e = he.appConfig,
			t = void 0,
			n = document.location.search.substring(1),
			r = (0, V.parseQueryString)(n);
		t = "file" in r ? r.file : e.defaultUrl, fe(t);
		var o = [],
			a = document.createElement("input");
		if (a.id = e.openFileInputName, a.className = "fileInput", a.setAttribute("type", "file"), a.oncontextmenu = V.noContextMenuHandler, document.body.appendChild(a), window.File && window.FileReader && window.FileList && window.Blob ? a.value = null : (e.toolbar.openFile.setAttribute("hidden", "true"), e.secondaryToolbar.openFileButton.setAttribute("hidden", "true")), a.addEventListener("change", function(e) {
			var t = e.target.files;
			t && 0 !== t.length && he.eventBus.dispatch("fileinputchange", {
				fileInput: e.target
			})
		}), he.viewerPrefs.pdfBugEnabled) {
			var s = document.location.hash.substring(1),
				l = (0, V.parseQueryString)(s);
			if ("disableworker" in l && (z.PDFJS.disableWorker = "true" === l.disableworker), "disablerange" in l && (z.PDFJS.disableRange = "true" === l.disablerange), "disablestream" in l && (z.PDFJS.disableStream = "true" === l.disablestream), "disableautofetch" in l && (z.PDFJS.disableAutoFetch = "true" === l.disableautofetch), "disablefontface" in l && (z.PDFJS.disableFontFace = "true" === l.disablefontface), "disablehistory" in l && (z.PDFJS.disableHistory = "true" === l.disablehistory), "webgl" in l && (z.PDFJS.disableWebGL = "true" !== l.webgl), "useonlycsszoom" in l && (z.PDFJS.useOnlyCssZoom = "true" === l.useonlycsszoom), "verbosity" in l && (z.PDFJS.verbosity = 0 | l.verbosity), "ignorecurrentpositiononzoom" in l && (z.PDFJS.ignoreCurrentPositionOnZoom = "true" === l.ignorecurrentpositiononzoom), "textlayer" in l) switch (l.textlayer) {
			case "off":
				z.PDFJS.disableTextLayer = !0;
				break;
			case "visible":
			case "shadow":
			case "hover":
				var u = e.viewerContainer;
				u.classList.add("textLayer-" + l.textlayer)
			}
			if ("pdfbug" in l) {
				z.PDFJS.pdfBug = !0;
				var c = l.pdfbug,
					d = c.split(",");
				o.push(i(d))
			}
		}
		he.supportsPrinting || (e.toolbar.print.classList.add("hidden"), e.secondaryToolbar.printButton.classList.add("hidden")), he.supportsFullscreen || (e.toolbar.presentationModeButton.classList.add("hidden"), e.secondaryToolbar.presentationModeButton.classList.add("hidden")), he.supportsIntegratedFind && e.toolbar.viewFind.classList.add("hidden"), e.mainContainer.addEventListener("transitionend", function(e) {
			e.target === this && he.eventBus.dispatch("resize")
		}, !0), e.sidebar.toggleButton.addEventListener("click", function() {
			he.pdfSidebar.toggle()
		}), Promise.all(o).then(function() {
			ge(t)
		})["catch"](function(e) {
			he.l10n.get("loading_error", null, "An error occurred while opening.").then(function(t) {
				he.error(t, e)
			})
		})
	}
	function a(e) {
		var t = e.pageNumber,
			n = t - 1,
			r = he.pdfViewer.getPageView(n);
		if (t === he.page && he.toolbar.updateLoadingIndicatorState(!1), r) {
			if (he.pdfSidebar.isThumbnailViewVisible) {
				var i = he.pdfThumbnailViewer.getThumbnail(n);
				i.setImage(r)
			}
			z.PDFJS.pdfBug && Stats.enabled && r.stats && Stats.add(t, r.stats), r.error && he.l10n.get("rendering_error", null, "An error occurred while rendering the page.").then(function(e) {
				he.error(e, r.error)
			})
		}
	}
	function s(e) {}
	function l(e) {
		var t = e.mode,
			n = void 0;
		switch (t) {
		case "thumbs":
			n = G.SidebarView.THUMBS;
			break;
		case "bookmarks":
		case "outline":
			n = G.SidebarView.OUTLINE;
			break;
		case "attachments":
			n = G.SidebarView.ATTACHMENTS;
			break;
		case "none":
			n = G.SidebarView.NONE;
			break;
		default:
			return void console.error('Invalid "pagemode" hash parameter: ' + t)
		}
		he.pdfSidebar.switchView(n, !0)
	}
	function u(e) {
		var t = e.action;
		switch (t) {
		case "GoToPage":
			he.appConfig.toolbar.pageNumber.select();
			break;
		case "Find":
			he.supportsIntegratedFind || he.findBar.toggle()
		}
	}
	function c(e) {
		var t = e.active,
			n = e.switchInProgress;
		he.pdfViewer.presentationModeState = n ? V.PresentationModeState.CHANGING : t ? V.PresentationModeState.FULLSCREEN : V.PresentationModeState.NORMAL
	}
	function d(e) {
		he.pdfRenderingQueue.isThumbnailViewEnabled = he.pdfSidebar.isThumbnailViewVisible;
		var t = he.store;
		t && he.isInitialViewSet && t.set("sidebarView", e.view)["catch"](function() {})
	}
	function h(e) {
		var t = e.location,
			n = he.store;
		n && he.isInitialViewSet && n.setMultiple({
			exists: !0,
			page: t.pageNumber,
			zoom: t.scale,
			scrollLeft: t.left,
			scrollTop: t.top,
			rotation: t.rotation
		})["catch"](function() {});
		var r = he.pdfLinkService.getAnchorUrl(t.pdfOpenParams);
		he.appConfig.toolbar.viewBookmark.href = r, he.appConfig.secondaryToolbar.viewBookmarkButton.href = r;
		var i = he.pdfViewer.getPageView(he.page - 1),
			o = i.renderingState !== H.RenderingStates.FINISHED;
		he.toolbar.updateLoadingIndicatorState(o)
	}
	function f() {
		var e = he.pdfDocument,
			t = he.pdfViewer;
		if (e) {
			var n = t.currentScaleValue;
			("auto" === n || "page-fit" === n || "page-width" === n) && (t.currentScaleValue = n), t.update()
		}
	}
	function p(e) {
		var t = e.hash;
		t && (he.isInitialViewSet ? he.pdfHistory.popStateInProgress || he.pdfLinkService.setHash(t) : he.initialBookmark = t)
	}
	function g() {
		he.requestPresentationMode()
	}
	function v() {
		var e = he.appConfig.openFileInputName;
		document.getElementById(e).click()
	}
	function m() {
		window.print()
	}
	function b() {
		he.download()
	}
	function y() {
		he.pdfDocument && (he.page = 1)
	}
	function _() {
		he.pdfDocument && (he.page = he.pagesCount)
	}
	function w() {
		he.page++
	}
	function S() {
		he.page--
	}
	function P() {
		he.zoomIn()
	}
	function x() {
		he.zoomOut()
	}
	function C(e) {
		var t = he.pdfViewer;
		t.currentPageLabel = e.value, e.value !== t.currentPageNumber.toString() && e.value !== t.currentPageLabel && he.toolbar.setPageNumber(t.currentPageNumber, t.currentPageLabel)
	}
	function A(e) {
		he.pdfViewer.currentScaleValue = e.value
	}
	function k() {
		he.rotatePages(90)
	}
	function T() {
		he.rotatePages(-90)
	}
	function E() {
		he.pdfDocumentProperties.open()
	}
	function L(e) {
		he.findController.excuteLabeling(e.type, {
			selection: e.selection,
			ifLabeling: e.ifLabeling,
			dataColor: e.dataColor,
			dataTag: e.dataTag
		})
	}
	function I(e) {
		he.findController.executeCommand("find" + e.type, {
			query: e.query,
			phraseSearch: e.phraseSearch,
			caseSensitive: e.caseSensitive,
			highlightAll: e.highlightAll,
			findPrevious: e.findPrevious
		})
	}
	function R(e) {
		he.findController.executeCommand("find", {
			query: e.query,
			phraseSearch: e.phraseSearch,
			caseSensitive: !1,
			highlightAll: !0,
			findPrevious: !1
		})
	}
	function O(e) {
		he.toolbar.setPageScale(e.presetValue, e.scale), he.pdfViewer.update()
	}
	function D(e) {
		he.pdfThumbnailViewer.pagesRotation = e.pagesRotation, he.forceRendering(), he.pdfViewer.currentPageNumber = e.pageNumber
	}
	function N(e) {
		var t = e.pageNumber;
		if (he.toolbar.setPageNumber(t, e.pageLabel || null), he.secondaryToolbar.setPageNumber(t), he.pdfSidebar.isThumbnailViewVisible && he.pdfThumbnailViewer.scrollThumbnailIntoView(t), z.PDFJS.pdfBug && Stats.enabled) {
			var n = he.pdfViewer.getPageView(t - 1);
			n.stats && Stats.add(t, n.stats)
		}
	}
	function F(e) {
		var t = he.pdfViewer;
		if (!t.isInPresentationMode) if (e.ctrlKey || e.metaKey) {
			var n = he.supportedMouseWheelZoomModifierKeys;
			if (e.ctrlKey && !n.ctrlKey || e.metaKey && !n.metaKey) return;
			if (e.preventDefault(), me) return;
			var r = t.currentScale,
				i = (0, V.normalizeWheelEventDelta)(e),
				o = 3,
				a = i * o;
			0 > a ? he.zoomOut(-a) : he.zoomIn(a);
			var s = t.currentScale;
			if (r !== s) {
				var l = s / r - 1,
					u = t.container.getBoundingClientRect(),
					c = e.clientX - u.left,
					d = e.clientY - u.top;
				t.container.scrollLeft += c * l, t.container.scrollTop += d * l
			}
		} else me = !0, clearTimeout(be), be = setTimeout(function() {
			me = !1
		}, 1e3)
	}
	function M(e) {
		if (he.secondaryToolbar.isOpen) {
			var t = he.appConfig;
			(he.pdfViewer.containsElement(e.target) || t.toolbar.container.contains(e.target) && e.target !== t.secondaryToolbar.toggleButton) && he.secondaryToolbar.close()
		}
	}
	function j(e) {
		if (!he.overlayManager.active) {
			var t = !1,
				n = !1,
				r = (e.ctrlKey ? 1 : 0) | (e.altKey ? 2 : 0) | (e.shiftKey ? 4 : 0) | (e.metaKey ? 8 : 0),
				i = he.pdfViewer,
				o = i && i.isInPresentationMode;
			if (1 === r || 8 === r || 5 === r || 12 === r) switch (e.keyCode) {
			case 70:
				he.supportsIntegratedFind || (he.findBar.open(), t = !0);
				break;
			case 71:
				if (!he.supportsIntegratedFind) {
					var a = he.findController.state;
					a && he.findController.executeCommand("findagain", {
						query: a.query,
						phraseSearch: a.phraseSearch,
						caseSensitive: a.caseSensitive,
						highlightAll: a.highlightAll,
						findPrevious: 5 === r || 12 === r
					}), t = !0
				}
				break;
			case 61:
			case 107:
			case 187:
			case 171:
				o || he.zoomIn(), t = !0;
				break;
			case 173:
			case 109:
			case 189:
				o || he.zoomOut(), t = !0;
				break;
			case 48:
			case 96:
				o || (setTimeout(function() {
					i.currentScaleValue = V.DEFAULT_SCALE_VALUE
				}), t = !1);
				break;
			case 38:
				(o || he.page > 1) && (he.page = 1, t = !0, n = !0);
				break;
			case 40:
				(o || he.page < he.pagesCount) && (he.page = he.pagesCount, t = !0, n = !0)
			}
			if (1 === r || 8 === r) switch (e.keyCode) {
			case 83:
				he.download(), t = !0
			}
			if (3 === r || 10 === r) switch (e.keyCode) {
			case 80:
				he.requestPresentationMode(), t = !0;
				break;
			case 71:
				he.appConfig.toolbar.pageNumber.select(), t = !0
			}
			if (t) return n && !o && i.focus(), void e.preventDefault();
			var s = document.activeElement || document.querySelector(":focus"),
				l = s && s.tagName.toUpperCase();
			if ("INPUT" !== l && "TEXTAREA" !== l && "SELECT" !== l || 27 === e.keyCode) {
				if (0 === r) switch (e.keyCode) {
				case 38:
				case 33:
				case 8:
					if (!o && "page-fit" !== i.currentScaleValue) break;
				case 37:
					if (i.isHorizontalScrollbarEnabled) break;
				case 75:
				case 80:
					he.page > 1 && he.page--, t = !0;
					break;
				case 27:
					he.secondaryToolbar.isOpen && (he.secondaryToolbar.close(), t = !0), !he.supportsIntegratedFind && he.findBar.opened && (he.findBar.close(), t = !0);
					break;
				case 40:
				case 34:
				case 32:
					if (!o && "page-fit" !== i.currentScaleValue) break;
				case 39:
					if (i.isHorizontalScrollbarEnabled) break;
				case 74:
				case 78:
					he.page < he.pagesCount && he.page++, t = !0;
					break;
				case 36:
					(o || he.page > 1) && (he.page = 1, t = !0, n = !0);
					break;
				case 35:
					(o || he.page < he.pagesCount) && (he.page = he.pagesCount, t = !0, n = !0);
					break;
				case 83:
					he.pdfCursorTools.switchTool(W.CursorTool.SELECT);
					break;
				case 72:
					he.pdfCursorTools.switchTool(W.CursorTool.HAND);
					break;
				case 82:
					he.rotatePages(90)
				}
				if (4 === r) switch (e.keyCode) {
				case 32:
					if (!o && "page-fit" !== i.currentScaleValue) break;
					he.page > 1 && he.page--, t = !0;
					break;
				case 82:
					he.rotatePages(-90)
				}
				t || o || (e.keyCode >= 33 && e.keyCode <= 40 || 32 === e.keyCode && "BUTTON" !== l) && (n = !0), n && !i.containsElement(s) && i.focus(), t && e.preventDefault()
			}
		}
	}
	function B(e) {
		switch (e) {
		case "UseNone":
			return G.SidebarView.NONE;
		case "UseThumbs":
			return G.SidebarView.THUMBS;
		case "UseOutlines":
			return G.SidebarView.OUTLINE;
		case "UseAttachments":
			return G.SidebarView.ATTACHMENTS;
		case "UseOC":
		}
		return G.SidebarView.NONE
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.labelManager = t.PDFPrintServiceFactory = t.DefaultExternalServices = t.PDFViewerApplication = void 0;
	var q = function() {
			function e(e, t) {
				var n = [],
					r = !0,
					i = !1,
					o = void 0;
				try {
					for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
				} catch (l) {
					i = !0, o = l
				} finally {
					try {
						!r && s["return"] && s["return"]()
					} finally {
						if (i) throw o
					}
				}
				return n
			}
			return function(t, n) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		V = n(0),
		U = n(5),
		z = n(1),
		W = n(8),
		H = n(3),
		G = n(12),
		$ = n(2),
		X = n(13),
		J = n(14),
		Y = n(15),
		Q = n(16),
		K = n(17),
		Z = n(9),
		ee = n(18),
		te = n(7),
		ne = n(19),
		re = n(20),
		ie = n(21),
		oe = n(23),
		ae = n(28),
		se = n(29),
		le = n(30),
		ue = 1.1,
		ce = 5e3,
		de = {
			updateFindControlState: function(e) {},
			initPassiveLoading: function(e) {},
			fallback: function(e, t) {},
			reportTelemetry: function(e) {},
			createDownloadManager: function() {
				throw new Error("Not implemented: createDownloadManager")
			},
			createPreferences: function() {
				throw new Error("Not implemented: createPreferences")
			},
			createL10n: function() {
				throw new Error("Not implemented: createL10n")
			},
			supportsIntegratedFind: !1,
			supportsDocumentFonts: !0,
			supportsDocumentColors: !0,
			supportedMouseWheelZoomModifierKeys: {
				ctrlKey: !0,
				metaKey: !0
			}
		},
		he = {
			initialBookmark: document.location.hash.substring(1),
			initialized: !1,
			fellback: !1,
			appConfig: null,
			pdfDocument: null,
			pdfLoadingTask: null,
			printService: null,
			pdfViewer: null,
			pdfThumbnailViewer: null,
			pdfRenderingQueue: null,
			pdfPresentationMode: null,
			pdfDocumentProperties: null,
			pdfLinkService: null,
			pdfHistory: null,
			pdfSidebar: null,
			pdfOutlineViewer: null,
			pdfAttachmentViewer: null,
			pdfCursorTools: null,
			store: null,
			downloadManager: null,
			overlayManager: null,
			preferences: null,
			toolbar: null,
			secondaryToolbar: null,
			eventBus: null,
			l10n: null,
			isInitialViewSet: !1,
			downloadComplete: !1,
			viewerPrefs: {
				sidebarViewOnLoad: G.SidebarView.NONE,
				pdfBugEnabled: !1,
				showPreviousViewOnLoad: !0,
				defaultZoomValue: "",
				disablePageMode: !1,
				disablePageLabels: !1,
				renderer: "canvas",
				enhanceTextSelection: !1,
				renderInteractiveForms: !1,
				enablePrintAutoRotate: !1
			},
			isViewerEmbedded: window.parent !== window,
			url: "",
			baseUrl: "",
			externalServices: de,
			_boundEvents: {},
			initialize: function(e) {
				var t = this;
				return this.preferences = this.externalServices.createPreferences(), r(z.PDFJS, e), this.appConfig = e, this._readPreferences().then(function() {
					return t._initializeL10n()
				}).then(function() {
					return t._initializeViewerComponents()
				}).then(function() {
					t.bindEvents(), t.bindWindowEvents();
					var n = e.appContainer || document.documentElement;
					t.l10n.translate(n).then(function() {
						t.eventBus.dispatch("localized")
					}), t.isViewerEmbedded && !z.PDFJS.isExternalLinkTargetSet() && (z.PDFJS.externalLinkTarget = z.PDFJS.LinkTarget.TOP), t.initialized = !0
				})
			},
			_readPreferences: function() {
				var e = this.preferences,
					t = this.viewerPrefs;
				return Promise.all([e.get("enableWebGL").then(function(e) {
					z.PDFJS.disableWebGL = !e
				}), e.get("sidebarViewOnLoad").then(function(e) {
					t.sidebarViewOnLoad = e
				}), e.get("pdfBugEnabled").then(function(e) {
					t.pdfBugEnabled = e
				}), e.get("showPreviousViewOnLoad").then(function(e) {
					t.showPreviousViewOnLoad = e
				}), e.get("defaultZoomValue").then(function(e) {
					t.defaultZoomValue = e
				}), e.get("enhanceTextSelection").then(function(e) {
					t.enhanceTextSelection = e
				}), e.get("disableTextLayer").then(function(e) {
					z.PDFJS.disableTextLayer !== !0 && (z.PDFJS.disableTextLayer = e)
				}), e.get("disableRange").then(function(e) {
					z.PDFJS.disableRange !== !0 && (z.PDFJS.disableRange = e)
				}), e.get("disableStream").then(function(e) {
					z.PDFJS.disableStream !== !0 && (z.PDFJS.disableStream = e)
				}), e.get("disableAutoFetch").then(function(e) {
					z.PDFJS.disableAutoFetch = e
				}), e.get("disableFontFace").then(function(e) {
					z.PDFJS.disableFontFace !== !0 && (z.PDFJS.disableFontFace = e)
				}), e.get("useOnlyCssZoom").then(function(e) {
					z.PDFJS.useOnlyCssZoom = e
				}), e.get("externalLinkTarget").then(function(e) {
					z.PDFJS.isExternalLinkTargetSet() || (z.PDFJS.externalLinkTarget = e)
				}), e.get("renderer").then(function(e) {
					t.renderer = e
				}), e.get("renderInteractiveForms").then(function(e) {
					t.renderInteractiveForms = e
				}), e.get("disablePageMode").then(function(e) {
					t.disablePageMode = e
				}), e.get("disablePageLabels").then(function(e) {
					t.disablePageLabels = e
				}), e.get("enablePrintAutoRotate").then(function(e) {
					t.enablePrintAutoRotate = e
				})])["catch"](function(e) {})
			},
			_initializeL10n: function() {
				if (this.viewerPrefs.pdfBugEnabled) {
					var e = document.location.hash.substring(1),
						t = (0, V.parseQueryString)(e);
					"locale" in t && (z.PDFJS.locale = t.locale)
				}
				return this.l10n = this.externalServices.createL10n(), this.l10n.getDirection().then(function(e) {
					document.getElementsByTagName("html")[0].dir = e
				})
			},
			_initializeViewerComponents: function() {
				var e = this,
					t = this.appConfig;
				return new Promise(function(n, r) {
					e.overlayManager = new X.OverlayManager;
					var i = t.eventBus || (0, $.getGlobalEventBus)();
					e.eventBus = i;
					var o = new H.PDFRenderingQueue;
					o.onIdle = e.cleanup.bind(e), e.pdfRenderingQueue = o;
					var a = new te.PDFLinkService({
						eventBus: i
					});
					e.pdfLinkService = a;
					var s = e.externalServices.createDownloadManager();
					e.downloadManager = s;
					var l = t.mainContainer,
						u = t.viewerContainer;
					e.pdfViewer = new oe.PDFViewer({
						container: l,
						viewer: u,
						eventBus: i,
						renderingQueue: o,
						linkService: a,
						downloadManager: s,
						renderer: e.viewerPrefs.renderer,
						l10n: e.l10n,
						enhanceTextSelection: e.viewerPrefs.enhanceTextSelection,
						renderInteractiveForms: e.viewerPrefs.renderInteractiveForms,
						enablePrintAutoRotate: e.viewerPrefs.enablePrintAutoRotate
					}), o.setViewer(e.pdfViewer), a.setViewer(e.pdfViewer);
					var c = t.sidebar.thumbnailView;
					e.pdfThumbnailViewer = new ie.PDFThumbnailViewer({
						container: c,
						renderingQueue: o,
						linkService: a,
						l10n: e.l10n
					}), o.setThumbnailViewer(e.pdfThumbnailViewer), e.pdfHistory = new ee.PDFHistory({
						linkService: a,
						eventBus: i
					}), a.setHistory(e.pdfHistory), e.findController = new Z.PDFFindController({
						pdfViewer: e.pdfViewer,
						labelData: e.appConfig.labelData,
						enableLabel: e.appConfig.enableLabel,
						enableCompares: e.appConfig.enableCompares
					}), e.findController.onUpdateResultsCount = function(t) {
						e.supportsIntegratedFind || e.findBar.updateResultsCount(t)
					}, e.findController.onUpdateState = function(t, n, r) {
						e.supportsIntegratedFind ? e.externalServices.updateFindControlState({
							result: t,
							findPrevious: n
						}) : e.findBar.updateUIState(t, n, r)
					}, e.pdfViewer.setFindController(e.findController);
					var d = Object.create(t.findBar);
					d.findController = e.findController, d.eventBus = i, e.findBar = new K.PDFFindBar(d, e.l10n), window.findDispatchEvent = e.findBar.exportDispatchEvent(), e.pdfDocumentProperties = new Q.PDFDocumentProperties(t.documentProperties, e.overlayManager, e.l10n), e.pdfCursorTools = new W.PDFCursorTools({
						container: l,
						eventBus: i,
						preferences: e.preferences
					}), e.toolbar = new se.Toolbar(t.toolbar, l, i, e.l10n), e.secondaryToolbar = new ae.SecondaryToolbar(t.secondaryToolbar, l, i), e.supportsFullscreen && (e.pdfPresentationMode = new re.PDFPresentationMode({
						container: l,
						viewer: u,
						pdfViewer: e.pdfViewer,
						eventBus: i,
						contextMenuItems: t.fullscreen
					})), e.passwordPrompt = new J.PasswordPrompt(t.passwordOverlay, e.overlayManager, e.l10n), e.pdfOutlineViewer = new ne.PDFOutlineViewer({
						container: t.sidebar.outlineView,
						eventBus: i,
						linkService: a
					}), e.pdfAttachmentViewer = new Y.PDFAttachmentViewer({
						container: t.sidebar.attachmentsView,
						eventBus: i,
						downloadManager: s
					});
					var h = Object.create(t.sidebar);
					h.pdfViewer = e.pdfViewer, h.pdfThumbnailViewer = e.pdfThumbnailViewer, h.pdfOutlineViewer = e.pdfOutlineViewer, h.eventBus = i, e.pdfSidebar = new G.PDFSidebar(h, e.l10n), e.pdfSidebar.onToggled = e.forceRendering.bind(e), n(void 0)
				})
			},
			run: function(e) {
				this.initialize(e).then(o)
			},
			zoomIn: function(e) {
				var t = this.pdfViewer.currentScale;
				do t = (t * ue).toFixed(2), t = Math.ceil(10 * t) / 10, t = Math.min(V.MAX_SCALE, t);
				while (--e > 0 && t < V.MAX_SCALE);
				this.pdfViewer.currentScaleValue = t
			},
			zoomOut: function(e) {
				var t = this.pdfViewer.currentScale;
				do t = (t / ue).toFixed(2), t = Math.floor(10 * t) / 10, t = Math.max(V.MIN_SCALE, t);
				while (--e > 0 && t > V.MIN_SCALE);
				this.pdfViewer.currentScaleValue = t
			},
			get pagesCount() {
				return this.pdfDocument ? this.pdfDocument.numPages : 0
			},
			get pageRotation() {
				return this.pdfViewer ? this.pdfViewer.pagesRotation : void 0
			},
			set page(e) {
				this.pdfViewer && (this.pdfViewer.currentPageNumber = e)
			},
			get page() {
				return this.pdfViewer ? this.pdfViewer.currentPageNumber : void 0
			},
			get printing() {
				return !!this.printService
			},
			get supportsPrinting() {
				return ye ? ye.instance.supportsPrinting : void 0
			},
			get supportsFullscreen() {
				var e = void 0,
					t = document.documentElement;
				return e = !! (t.requestFullscreen || t.mozRequestFullScreen || t.webkitRequestFullScreen || t.msRequestFullscreen), (document.fullscreenEnabled === !1 || document.mozFullScreenEnabled === !1 || document.webkitFullscreenEnabled === !1 || document.msFullscreenEnabled === !1) && (e = !1), e && z.PDFJS.disableFullscreen === !0 && (e = !1), (0, z.shadow)(this, "supportsFullscreen", e)
			},
			get supportsIntegratedFind() {
				return this.externalServices.supportsIntegratedFind
			},
			get supportsDocumentFonts() {
				return this.externalServices.supportsDocumentFonts
			},
			get supportsDocumentColors() {
				return this.externalServices.supportsDocumentColors
			},
			get loadingBar() {
				var e = new V.ProgressBar("#loadingBar");
				return (0, z.shadow)(this, "loadingBar", e)
			},
			get supportedMouseWheelZoomModifierKeys() {
				return this.externalServices.supportedMouseWheelZoomModifierKeys
			},
			initPassiveLoading: function() {
				throw new Error("Not implemented: initPassiveLoading")
			},
			setTitleUsingUrl: function(e) {
				this.url = e, this.baseUrl = e.split("#")[0];
				var t = (0, V.getPDFFileNameFromURL)(e, "");
				if (!t) try {
					t = decodeURIComponent((0, z.getFilenameFromUrl)(e)) || e
				} catch (n) {
					t = e
				}
				this.setTitle(t)
			},
			setTitle: function(e) {
				this.isViewerEmbedded || (document.title = e)
			},
			close: function() {
				var e = this.appConfig.errorWrapper.container;
				if (e.setAttribute("hidden", "true"), !this.pdfLoadingTask) return Promise.resolve();
				var t = this.pdfLoadingTask.destroy();
				return this.pdfLoadingTask = null, this.pdfDocument && (this.pdfDocument = null, this.pdfThumbnailViewer.setDocument(null), this.pdfViewer.setDocument(null), this.pdfLinkService.setDocument(null, null), this.pdfDocumentProperties.setDocument(null, null)), this.store = null, this.isInitialViewSet = !1, this.downloadComplete = !1, this.pdfSidebar.reset(), this.pdfOutlineViewer.reset(), this.pdfAttachmentViewer.reset(), this.findController.reset(), this.findBar.reset(), this.toolbar.reset(), this.secondaryToolbar.reset(), "undefined" != typeof PDFBug && PDFBug.cleanup(), t
			},
			open: function(e, t) {
				var n = this;
				if (this.pdfLoadingTask) return this.close().then(function() {
					return n.preferences.reload(), n.open(e, t)
				});
				var r = Object.create(null);
				if ("string" == typeof e ? (this.setTitleUsingUrl(e), r.url = e) : e && "byteLength" in e ? r.data = e : e.url && e.originalUrl && (this.setTitleUsingUrl(e.originalUrl), r.url = e.url), t) for (var i in t)"length" === i && this.pdfDocumentProperties.setFileSize(t[i]), r[i] = t[i];
				var o = (0, z.getDocument)(r);
				return this.pdfLoadingTask = o, o.onPassword = function(e, t) {
					n.passwordPrompt.setUpdateCallback(e, t), n.passwordPrompt.open()
				}, o.onProgress = function(e) {
					var t = e.loaded,
						r = e.total;
					n.progress(t / r)
				}, o.onUnsupportedFeature = this.fallback.bind(this), o.promise.then(function(e) {
					n.load(e)
				}, function(e) {
					var t = e && e.message,
						r = void 0;
					return r = e instanceof z.InvalidPDFException ? n.l10n.get("invalid_file_error", null, "Invalid or corrupted PDF file.") : e instanceof z.MissingPDFException ? n.l10n.get("missing_file_error", null, "Missing PDF file.") : e instanceof z.UnexpectedResponseException ? n.l10n.get("unexpected_response_error", null, "Unexpected server response.") : n.l10n.get("loading_error", null, "An error occurred while loading the PDF."), r.then(function(e) {
						throw n.error(e, {
							message: t
						}), new Error(e)
					})
				})
			},
			download: function() {
				function e() {
					i.downloadUrl(n, r)
				}
				var t = this,
					n = this.baseUrl,
					r = (0, V.getPDFFileNameFromURL)(this.url),
					i = this.downloadManager;
				return i.onerror = function(e) {
					t.error("PDF failed to download: " + e)
				}, this.pdfDocument && this.downloadComplete ? void this.pdfDocument.getData().then(function(e) {
					var t = (0, z.createBlob)(e, "application/pdf");
					i.download(t, n, r)
				})["catch"](e) : void e()
			},
			fallback: function(e) {},
			error: function(e, t) {
				var n = [this.l10n.get("error_version_info", {
					version: z.version || "?",
					build: z.build || "?"
				}, "PDF.js v{{version}} (build: {{build}})")];
				t && (n.push(this.l10n.get("error_message", {
					message: t.message
				}, "Message: {{message}}")), t.stack ? n.push(this.l10n.get("error_stack", {
					stack: t.stack
				}, "Stack: {{stack}}")) : (t.filename && n.push(this.l10n.get("error_file", {
					file: t.filename
				}, "File: {{file}}")), t.lineNumber && n.push(this.l10n.get("error_line", {
					line: t.lineNumber
				}, "Line: {{line}}"))));
				var r = this.appConfig.errorWrapper,
					i = r.container;
				i.removeAttribute("hidden");
				var o = r.errorMessage;
				o.textContent = e;
				var a = r.closeButton;
				a.onclick = function() {
					i.setAttribute("hidden", "true")
				};
				var s = r.errorMoreInfo,
					l = r.moreInfoButton,
					u = r.lessInfoButton;
				l.onclick = function() {
					s.removeAttribute("hidden"), l.setAttribute("hidden", "true"), u.removeAttribute("hidden"), s.style.height = s.scrollHeight + "px"
				}, u.onclick = function() {
					s.setAttribute("hidden", "true"), l.removeAttribute("hidden"), u.setAttribute("hidden", "true")
				}, l.oncontextmenu = V.noContextMenuHandler, u.oncontextmenu = V.noContextMenuHandler, a.oncontextmenu = V.noContextMenuHandler, l.removeAttribute("hidden"), u.setAttribute("hidden", "true"), Promise.all(n).then(function(e) {
					s.value = e.join("\n")
				})
			},
			progress: function(e) {
				var t = this;
				if (!this.downloadComplete) {
					var n = Math.round(100 * e);
					(n > this.loadingBar.percent || isNaN(n)) && (this.loadingBar.percent = n, z.PDFJS.disableAutoFetch && n && (this.disableAutoFetchLoadingBarTimeout && (clearTimeout(this.disableAutoFetchLoadingBarTimeout), this.disableAutoFetchLoadingBarTimeout = null), this.loadingBar.show(), this.disableAutoFetchLoadingBarTimeout = setTimeout(function() {
						t.loadingBar.hide(), t.disableAutoFetchLoadingBarTimeout = null
					}, ce)))
				}
			},
			load: function(e) {
				var t = this;
				this.pdfDocument = e, e.getDownloadInfo().then(function() {
					t.downloadComplete = !0, t.loadingBar.hide(), s.then(function() {
						t.eventBus.dispatch("documentload", {
							source: t
						})
					})
				});
				var n = e.getPageMode()["catch"](function() {});
				this.toolbar.setPagesCount(e.numPages, !1), this.secondaryToolbar.setPagesCount(e.numPages);
				var r = this.documentFingerprint = e.fingerprint,
					i = this.store = new le.ViewHistory(r),
					o = void 0;
				o = null, this.pdfLinkService.setDocument(e, o), this.pdfDocumentProperties.setDocument(e, this.url);
				var a = this.pdfViewer;
				a.setDocument(e);
				var s = a.firstPagePromise,
					l = a.pagesPromise,
					u = a.onePageRendered,
					c = this.pdfThumbnailViewer;
				c.setDocument(e), s.then(function(e) {
					if (t.loadingBar.setWidth(t.appConfig.viewerContainer), !z.PDFJS.disableHistory && !t.isViewerEmbedded) {
						var o = !t.viewerPrefs.showPreviousViewOnLoad;
						t.pdfHistory.initialize(r, o), t.pdfHistory.initialBookmark && (t.initialBookmark = t.pdfHistory.initialBookmark, t.initialRotation = t.pdfHistory.initialRotation)
					}
					var s = {
						bookmark: null,
						hash: null
					},
						u = i.getMultiple({
							exists: !1,
							page: "1",
							zoom: V.DEFAULT_SCALE_VALUE,
							scrollLeft: "0",
							scrollTop: "0",
							rotation: null,
							sidebarView: G.SidebarView.NONE
						})["catch"](function() {});
					Promise.all([u, n]).then(function(e) {
						var n = q(e, 2),
							r = n[0],
							i = void 0 === r ? {} : r,
							o = n[1],
							a = t.viewerPrefs.defaultZoomValue ? "zoom=" + t.viewerPrefs.defaultZoomValue : null,
							s = null,
							l = t.viewerPrefs.sidebarViewOnLoad;
						return i.exists && t.viewerPrefs.showPreviousViewOnLoad && (a = "page=" + i.page + "&zoom=" + (t.viewerPrefs.defaultZoomValue || i.zoom) + "," + i.scrollLeft + "," + i.scrollTop, s = parseInt(i.rotation, 10), l = l || 0 | i.sidebarView), o && !t.viewerPrefs.disablePageMode && (l = l || B(o)), {
							hash: a,
							rotation: s,
							sidebarView: l
						}
					}).then(function(e) {
						var n = e.hash,
							r = e.rotation,
							i = e.sidebarView;
						return s.bookmark = t.initialBookmark, s.hash = n, t.setInitialView(n, {
							rotation: r,
							sidebarView: i
						}), t.isViewerEmbedded || a.focus(), l
					}).then(function() {
						(s.bookmark || s.hash) && (a.hasEqualPageSizes || (t.initialBookmark = s.bookmark, a.currentScaleValue = a.currentScaleValue, t.setInitialView(s.hash)))
					}).then(function() {
						a.update()
					})
				}), e.getPageLabels().then(function(n) {
					if (n && !t.viewerPrefs.disablePageLabels) {
						var r = 0,
							i = n.length;
						if (i !== t.pagesCount) return void console.error("The number of Page Labels does not match the number of pages in the document.");
						for (; i > r && n[r] === (r + 1).toString();) r++;
						r !== i && (a.setPageLabels(n), c.setPageLabels(n), t.toolbar.setPagesCount(e.numPages, !0), t.toolbar.setPageNumber(a.currentPageNumber, a.currentPageLabel))
					}
				}), l.then(function() {
					t.supportsPrinting && e.getJavaScript().then(function(e) {
						if (e) {
							e.some(function(e) {
								return e ? (console.warn("Warning: JavaScript is not supported"), t.fallback(z.UNSUPPORTED_FEATURES.javaScript), !0) : !1
							});
							for (var n = /\bprint\s*\(/, r = 0, i = e.length; i > r; r++) {
								var o = e[r];
								if (o && n.test(o)) return void setTimeout(function() {
									window.print()
								})
							}
						}
					})
				}), Promise.all([u, V.animationStarted]).then(function() {
					e.getOutline().then(function(e) {
						t.pdfOutlineViewer.render({
							outline: e
						})
					}), e.getAttachments().then(function(e) {
						t.pdfAttachmentViewer.render({
							attachments: e
						})
					})
				}), e.getMetadata().then(function(n) {
					var r = n.info,
						i = n.metadata;
					t.documentInfo = r, t.metadata = i, console.log("PDF " + e.fingerprint + " [" + r.PDFFormatVersion + " " + (r.Producer || "-").trim() + " / " + (r.Creator || "-").trim() + "] (PDF.js: " + (z.version || "-") + (z.PDFJS.disableWebGL ? "" : " [WebGL]") + ")");
					var o = void 0;
					if (i && i.has("dc:title")) {
						var a = i.get("dc:title");
						"Untitled" !== a && (o = a)
					}!o && r && r.Title && (o = r.Title), o && t.setTitle(o + " - " + document.title), r.IsAcroFormPresent && (console.warn("Warning: AcroForm/XFA is not supported"), t.fallback(z.UNSUPPORTED_FEATURES.forms))
				})
			},
			setInitialView: function(e) {
				var t = this,
					n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
					r = n.rotation,
					i = n.sidebarView,
					o = function(e) {
						(0, V.isValidRotation)(e) && (t.pdfViewer.pagesRotation = e)
					};
				this.isInitialViewSet = !0, this.pdfSidebar.setInitialView(i), this.initialBookmark ? (o(this.initialRotation), delete this.initialRotation, this.pdfLinkService.setHash(this.initialBookmark), this.initialBookmark = null) : e && (o(r), this.pdfLinkService.setHash(e)), this.toolbar.setPageNumber(this.pdfViewer.currentPageNumber, this.pdfViewer.currentPageLabel), this.secondaryToolbar.setPageNumber(this.pdfViewer.currentPageNumber), this.pdfViewer.currentScaleValue || (this.pdfViewer.currentScaleValue = V.DEFAULT_SCALE_VALUE)
			},
			cleanup: function() {
				this.pdfDocument && (this.pdfViewer.cleanup(), this.pdfThumbnailViewer.cleanup(), this.pdfViewer.renderer !== V.RendererType.SVG && this.pdfDocument.cleanup())
			},
			forceRendering: function() {
				this.pdfRenderingQueue.printing = this.printing, this.pdfRenderingQueue.isThumbnailViewEnabled = this.pdfSidebar.isThumbnailViewVisible, this.pdfRenderingQueue.renderHighestPriority()
			},
			beforePrint: function() {
				var e = this;
				if (!this.printService) {
					if (!this.supportsPrinting) return void this.l10n.get("printing_not_supported", null, "Warning: Printing is not fully supported by this browser.").then(function(t) {
						e.error(t)
					});
					if (!this.pdfViewer.pageViewsReady) return void this.l10n.get("printing_not_ready", null, "Warning: The PDF is not fully loaded for printing.").then(function(e) {
						window.alert(e)
					});
					var t = this.pdfViewer.getPagesOverview(),
						n = this.appConfig.printContainer,
						r = ye.instance.createPrintService(this.pdfDocument, t, n, this.l10n);
					this.printService = r, this.forceRendering(), r.layout()
				}
			},
			afterPrint: function() {
				this.printService && (this.printService.destroy(), this.printService = null), this.forceRendering()
			},
			rotatePages: function(e) {
				if (this.pdfDocument) {
					var t = (this.pdfViewer.pagesRotation + 360 + e) % 360;
					this.pdfViewer.pagesRotation = t
				}
			},
			requestPresentationMode: function() {
				this.pdfPresentationMode && this.pdfPresentationMode.request()
			},
			bindEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				window.eventBus = e, t.beforePrint = this.beforePrint.bind(this), t.afterPrint = this.afterPrint.bind(this), e.on("resize", f), e.on("hashchange", p), e.on("beforeprint", t.beforePrint), e.on("afterprint", t.afterPrint), e.on("pagerendered", a), e.on("textlayerrendered", s), e.on("updateviewarea", h), e.on("pagechanging", N), e.on("scalechanging", O), e.on("rotationchanging", D), e.on("sidebarviewchanged", d), e.on("pagemode", l), e.on("namedaction", u), e.on("presentationmodechanged", c), e.on("presentationmode", g), e.on("openfile", v), e.on("print", m), e.on("download", b), e.on("firstpage", y), e.on("lastpage", _), e.on("nextpage", w), e.on("previouspage", S), e.on("zoomin", P), e.on("zoomout", x), e.on("pagenumberchanged", C), e.on("scalechanged", A), e.on("rotatecw", k), e.on("rotateccw", T), e.on("documentproperties", E), e.on("find", I), e.on("findfromurlhash", R), e.on("labeling", L), e.on("fileinputchange", ve)
			},
			bindWindowEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				t.windowResize = function() {
					e.dispatch("resize")
				}, t.windowHashChange = function() {
					e.dispatch("hashchange", {
						hash: document.location.hash.substring(1)
					})
				}, t.windowBeforePrint = function() {
					e.dispatch("beforeprint")
				}, t.windowAfterPrint = function() {
					e.dispatch("afterprint")
				}
			},
			unbindEvents: function() {
				var e = this.eventBus,
					t = this._boundEvents;
				e.off("resize", f), e.off("hashchange", p), e.off("beforeprint", t.beforePrint), e.off("afterprint", t.afterPrint), e.off("pagerendered", a), e.off("textlayerrendered", s), e.off("updateviewarea", h), e.off("pagechanging", N), e.off("scalechanging", O), e.off("rotationchanging", D), e.off("sidebarviewchanged", d), e.off("pagemode", l), e.off("namedaction", u), e.off("presentationmodechanged", c), e.off("presentationmode", g), e.off("openfile", v), e.off("print", m), e.off("download", b), e.off("firstpage", y), e.off("lastpage", _), e.off("nextpage", w), e.off("previouspage", S), e.off("zoomin", P), e.off("zoomout", x), e.off("pagenumberchanged", C), e.off("scalechanged", A), e.off("rotatecw", k), e.off("rotateccw", T), e.off("documentproperties", E), e.off("find", I), e.off("findfromurlhash", R), e.off("labeling", L), e.off("fileinputchange", ve), t.beforePrint = null, t.afterPrint = null
			},
			unbindWindowEvents: function() {
				var e = this._boundEvents;
				window.removeEventListener("wheel", F), window.removeEventListener("click", M), window.removeEventListener("keydown", j), window.removeEventListener("resize", e.windowResize), window.removeEventListener("hashchange", e.windowHashChange), window.removeEventListener("beforeprint", e.windowBeforePrint), window.removeEventListener("afterprint", e.windowAfterPrint), e.windowResize = null, e.windowHashChange = null, e.windowBeforePrint = null, e.windowAfterPrint = null
			}
		},
		fe = void 0,
		pe = ["null", "http://mozilla.github.io", "https://mozilla.github.io"];
	fe = function(e) {
		if (void 0 !== e) try {
			var t = new URL(window.location.href).origin || "null";
			if (pe.indexOf(t) >= 0) return;
			var n = new URL(e, window.location.href).origin;
			if (n !== t) throw new Error("file origin does not match viewer's")
		} catch (r) {
			var i = r && r.message;
			throw he.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(function(e) {
				he.error(e, {
					message: i
				})
			}), r
		}
	};
	var ge = void 0;
	ge = function(e) {
		if (e && 0 === e.lastIndexOf("file:", 0)) {
			he.setTitleUsingUrl(e);
			var t = new XMLHttpRequest;
			t.onload = function() {
				he.open(new Uint8Array(t.response))
			};
			try {
				t.open("GET", e), t.responseType = "arraybuffer", t.send()
			} catch (n) {
				he.l10n.get("loading_error", null, "An error occurred while loading the PDF.").then(function(e) {
					he.error(e, n)
				})
			}
		} else e && he.open(e)
	};
	var ve = void 0;
	ve = function(e) {
		var t = e.fileInput.files[0];
		if (!z.PDFJS.disableCreateObjectURL && URL.createObjectURL) he.open(URL.createObjectURL(t));
		else {
			var n = new FileReader;
			n.onload = function(e) {
				var t = e.target.result;
				he.open(new Uint8Array(t))
			}, n.readAsArrayBuffer(t)
		}
		he.setTitleUsingUrl(t.name);
		var r = he.appConfig;
		r.toolbar.viewBookmark.setAttribute("hidden", "true"), r.secondaryToolbar.viewBookmarkButton.setAttribute("hidden", "true"), r.toolbar.download.setAttribute("hidden", "true"), r.secondaryToolbar.downloadButton.setAttribute("hidden", "true")
	};
	var me = !1,
		be = void 0,
		ye = {
			instance: {
				supportsPrinting: !1,
				createPrintService: function() {
					throw new Error("Not implemented: createPrintService")
				}
			}
		};
	t.PDFViewerApplication = he, t.DefaultExternalServices = de, t.PDFPrintServiceFactory = ye, t.labelManager = U.labelManager
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.labelManager = void 0;
	var r = n(0),
		i = n(6),
		o = {
			status: 0,
			pdfViewer: null,
			pageContents: [],
			pageOffsets: [],
			articleContent: null,
			indexLabelMatches: [],
			specialIndexLabelMatches: [],
			articleOffsetLabelMatches: [],
			pageOffsetLabelMatches: [],
			loadConfig: function(e) {
				this.pageOffsets = e.pageOffsets, this.pageContents = e.pageContents, this.articleContent = e.articleContent, this.pdfViewer = e.pdfViewer, this.enableLabel = e.enableLabel
			},
			loadPageLabelMatches: function(e) {
				var t = this.articleOffsetLabelMatches,
					n = e.pageIdx,
					r = (e.textDivs, e.textContentItemsStr),
					o = this,
					a = void 0,
					s = [];
				return t.forEach(function(e, t) {
					e[0].pageIdx === n && (a = o.convertArticleToPageMatch(e, r), e[0].seriesIdx ? a.seriesIdx = e[0].seriesIdx : a.seriesIdx = o.generationSeriesIdx(), i.comparesManager.getEnabledStatus() && (a.compares = i.comparesManager.getComparesList(t)), s.push(a))
				}), s
			},
			convertArticleToPageMatch: function(e, t) {
				var n = void 0,
					r = void 0,
					i = [],
					o = $.merge([], e);
				o[0].pageIdx !== o[1].pageIdx && (o[1].pageIdx = o[0].pageIdx, o[1].offset = t.join("").length - 1);
				for (var a = function(e) {
						var a = 0 === e;
						n = 0, r = o[e], t.forEach(function(e, t) {
							var o = e.length;
							n <= r.offset && r.offset <= n + o && (a && r.offset - n === o || !a && r.offset - n === 0 || i.push({
								divIdx: t,
								offset: r.offset - n
							})), n += o
						})
					}, s = 0; s < o.length; s++) a(s);
				return i[1] && 0 == i[1].offset && (i[1].divIdx--, i[1].offset = t[i[1].divIdx].length), i[0] && i[0].offset == t[i[0].divIdx].length && (i[0].divIdx++, i[0].offset = 0), this.convertLabelArrayToObj(i, o[0])
			},
			convertLabelArrayToObj: function(e, t) {
				return {
					word: t.word,
					dataTag: t.dataTag,
					dataDetail: t.dataDetail,
					dataColor: t.dataColor,
					begin: e[0],
					end: e[1]
				}
			},
			getSeriesIdx: function(e) {
				return e.begin.divIdx.toString() + e.begin.offset.toString() + e.begin.divIdx.toString() + e.begin.offset.toString()
			},
			addSeriesIdx: function(e) {
				var t = this;
				return e.forEach(function(e) {
					e.seriesIdx = t.generationSeriesIdx()
				}), e
			},
			loadSpecialIndexLabelMatches: function(e) {
				var t = [];
				this.specialIndexLabelMatches = this.addSeriesIdx(e), i.comparesManager.getEnabledStatus() && i.comparesManager.initComparesList(e);
				for (var n = 0; n < e.length; n++) {
					var r = e[n];
					t.push(this.convertIndexToAricleMatch(r, r.index))
				}
				return this.articleOffsetLabelMatches = t, t
			},
			loadIndexLabelMatches: function(e) {
				var t = [];
				this.indexLabelMatches = this.addSeriesIdx(e);
				for (var n = 0; n < e.length; n++) {
					for (var r = e[n], i = (r.word.length, 0), o = -1;;) {
						if (o = this.articleContent.indexOf(r.word, o), 0 > o || i === r.index) break;
						i++
					}
					0 > o && (console.error("标注序号查找错误"), console.error(r)), t.push(this.convertIndexToAricleMatch(r, o))
				}
				return this.articleOffsetLabelMatches = t, t
			},
			convertIndexToAricleMatch: function(e, t) {
				for (var n = void 0, r = void 0, i = e.word, o = t, a = t + i.length, s = {
					pageIdx: -1,
					offset: -1,
					dataTag: e.dataTag,
					dataDetail: e.dataDetail,
					dataColor: e.dataColor,
					seriesIdx: e.seriesIdx
				}, l = [$.extend({}, s), $.extend({}, s)], u = 0; u < this.pageOffsets.length; u++) {
					n = this.pageOffsets[u], r = n + this.pageContents[u].length;
					for (var c = 0; 2 > c; c++) {
						var d = 1 > c ? o : a;
						d >= n && r >= d && (l[c].pageIdx = u, l[c].offset = d - n)
					}
					if (l[1].pageIdx > -1) break
				}
				return l[0].word = i, l[1].word = i, l
			},
			addMatchByPageMatch: function(e, t) {
				var n = void 0,
					r = void 0,
					i = (t.pageIdx, t.textDivs, t.textContentItemsStr);
				n = this.convertPageToArticleMatch(e, i), r = this.convertArticleToSpecialIndexMatch(n), this.articleOffsetLabelMatches.push(n), window.parent.postMessage && window.parent.postMessage({
					type: "addLabelIdx",
					val: r
				}, "*")
			},
			removeMatchBySeriesIdx: function(e) {
				for (var t = void 0, n = -1, r = 0; r < this.articleOffsetLabelMatches.length; r++) if (t = this.articleOffsetLabelMatches[r], e === t[0].seriesIdx) {
					n = r;
					break
				}
				n > -1 && (this.articleOffsetLabelMatches.splice(n, 1), window.parent.postMessage && window.parent.postMessage({
					type: "removeLabelIdx",
					val: n
				}, "*"))
			},
			convertPageToArticleMatch: function(e, t) {
				var n = [e.begin, e.end],
					r = [],
					i = void 0;
				return n.forEach(function(n) {
					i = 0;
					for (var o = 0; o < n.divIdx; o++) i += t[o].length;
					i += n.offset, r.push({
						offset: i,
						pageIdx: n.pageIdx,
						dataColor: e.dataColor,
						dataTag: e.dataTag,
						dataDetail: e.dataDetail,
						seriesIdx: e.seriesIdx
					})
				}), r
			},
			getIndexLabelMatches: function() {
				var e = this,
					t = [];
				this.articleOffsetLabelMatches.forEach(function(n) {
					t.push(e.convertArticleToIndexMatch(n))
				})
			},
			convertArticleToSpecialIndexMatch: function(e) {
				var t = {},
					n = e[0].pageIdx,
					r = e[1].pageIdx,
					i = e[0].offset,
					o = e[1].offset,
					a = 0;
				r === n && (t.word = this.pageContents[n].substring(i, o));
				for (var s = 0; s < this.pageContents.length; s++) {
					if (n == s) {
						a += i;
						break
					}
					a += this.pageContents[s].length
				}
				return t.index = a, t.dataColor = e[0].dataColor, t.dataTag = e[0].dataTag, t.dataDetail = e[0].dataDetail, t
			},
			convertArticleToIndexMatch: function(e) {
				var t = void 0,
					n = {},
					r = -1,
					i = e[0].pageIdx,
					o = e[1].pageIdx,
					a = e[0].offset,
					s = e[1].offset,
					l = 0,
					u = 0;
				o === i && (t = this.pageContents[i].substring(a, s));
				for (var c = 0; i >= c; c++) l += c === i ? a : this.pageContents[c].length;
				for (;;) {
					if (r++, u = this.articleContent.indexOf(t, u + t.length), u === l) break;
					if (0 > u || u > l) {
						r = -1;
						break
					}
				}
				return 0 > r && console.error("没有查到该indexMatch"), n = {
					dataTag: e[0].dataTag,
					dataDetail: e[0].dataDetail,
					dataColor: e[0].dataColor,
					index: r,
					word: t
				}
			},
			triggerLabel: function(e) {
				var t = void 0,
					n = void 0,
					i = void 0,
					o = this.articleOffsetLabelMatches[e],
					a = o[0].pageIdx;
				if (this.pdfViewer.currentPageNumber = a + 1, n = this.pdfViewer.getPageView(a), i = {
					top: -50,
					left: -400
				}, n.textLayer && n.textLayer.textDivs.length > 0) {
					var s = this.convertArticleToPageMatch(o, n.textLayer.textContentItemsStr);
					t = n.textLayer.textDivs[s.begin.divIdx], t.offsetParent || (t = n.textLayer.textDivs[s.begin.divIdx + 1]), (0, r.scrollIntoView)(t, void 0, !0)
				} else console.error("没找到label对应的textLayer")
			},
			generationSeriesIdx: function() {
				function e() {
					return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
				}
				return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
			},
			getEnableLabelStatus: function() {
				return this.enableLabel
			}
		};
	t.labelManager = o
}, function(e, t, n) {
	"use strict";
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = {
		enableCompares: !1,
		labelCompares: [],
		loadConfig: function(e) {
			this.enableCompares = e.enableCompares
		},
		getEnabledStatus: function() {
			return this.enableCompares
		},
		initComparesList: function(e) {
			var t = this;
			this.labelCompares = [], $.each(e, function(e, n) {
				n.compares ? t.labelCompares.push(n.compares) : t.labelCompares.push([])
			})
		},
		getComparesList: function(e) {
			return 0 !== typeof e ? this.labelCompares[e] : void 0
		},
		getRenderHTML: function(e, t) {
			function n(e) {
				return e ? "compare-" + e : void 0
			}
			function r(e) {
				var t = "";
				return "insert" === e ? t = "plus-circle" : "replace" === e ? t = "pencil-square-o" : "delete" === e && (t = "minus-circle"), t ? "<i class='fa fa-" + t + "'></i>" : ""
			}
			var i = "";
			return i += "<p class='compare-content compare-content-init'>&nbsp;<span>原文为：</span><span>" + t.word + "</span></p>", $.each(e, function(e, t) {
				var o = t.type;
				i += "<br /><p class='compare-content " + n(o) + "'>" + r(o) + "&nbsp;<span>" + t.docName + "中原文：</span><span>" + t.word + "</span><button class='btn' type='button' onClick='compareCallback(\"" + t.docName + "\")'>对比</button></p>"
			}), $(i)
		},
		HTMLEncode: function(e) {
			var t = document.createElement("div");
			null != t.textContent ? t.textContent = e : t.innerText = e;
			var n = t.innerHTML;
			return t = null, n
		}
	};
	t.comparesManager = r
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e) {
		if (!(e instanceof Array)) return !1;
		var t = e.length,
			n = !0;
		if (2 > t) return !1;
		var r = e[0];
		if (!("object" === ("undefined" == typeof r ? "undefined" : o(r)) && Number.isInteger(r.num) && Number.isInteger(r.gen) || Number.isInteger(r) && r >= 0)) return !1;
		var i = e[1];
		if ("object" !== ("undefined" == typeof i ? "undefined" : o(i)) || "string" != typeof i.name) return !1;
		switch (i.name) {
		case "XYZ":
			if (5 !== t) return !1;
			break;
		case "Fit":
		case "FitB":
			return 2 === t;
		case "FitH":
		case "FitBH":
		case "FitV":
		case "FitBV":
			if (3 !== t) return !1;
			break;
		case "FitR":
			if (6 !== t) return !1;
			n = !1;
			break;
		default:
			return !1
		}
		for (var a = 2; t > a; a++) {
			var s = e[a];
			if (!("number" == typeof s || n && null === s)) return !1
		}
		return !0
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SimpleLinkService = t.PDFLinkService = void 0;
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	}, a = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t
		}
	}(), s = n(2), l = n(0), u = function() {
		function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
				n = t.eventBus;
			r(this, e), this.eventBus = n || (0, s.getGlobalEventBus)(), this.baseUrl = null, this.pdfDocument = null, this.pdfViewer = null, this.pdfHistory = null, this._pagesRefCache = null
		}
		return a(e, [{
			key: "setDocument",
			value: function(e, t) {
				this.baseUrl = t, this.pdfDocument = e, this._pagesRefCache = Object.create(null)
			}
		}, {
			key: "setViewer",
			value: function(e) {
				this.pdfViewer = e
			}
		}, {
			key: "setHistory",
			value: function(e) {
				this.pdfHistory = e
			}
		}, {
			key: "navigateTo",
			value: function(e) {
				var t = this,
					n = function r(n) {
						var i = n.namedDest,
							o = n.explicitDest,
							a = o[0],
							s = void 0;
						if (a instanceof Object) {
							if (s = t._cachedPageNumber(a), null === s) return void t.pdfDocument.getPageIndex(a).then(function(e) {
								t.cachePageRef(e + 1, a), r({
									namedDest: i,
									explicitDest: o
								})
							})["catch"](function() {
								console.error('PDFLinkService.navigateTo: "' + a + '" is not ' + ('a valid page reference, for dest="' + e + '".'))
							})
						} else {
							if (!Number.isInteger(a)) return void console.error('PDFLinkService.navigateTo: "' + a + '" is not ' + ('a valid destination reference, for dest="' + e + '".'));
							s = a + 1
						}
						return !s || 1 > s || s > t.pagesCount ? void console.error('PDFLinkService.navigateTo: "' + s + '" is not ' + ('a valid page number, for dest="' + e + '".')) : (t.pdfHistory && (t.pdfHistory.pushCurrentPosition(), t.pdfHistory.push({
							namedDest: i,
							explicitDest: o,
							pageNumber: s
						})), void t.pdfViewer.scrollPageIntoView({
							pageNumber: s,
							destArray: o
						}))
					};
				new Promise(function(n, r) {
					return "string" == typeof e ? void t.pdfDocument.getDestination(e).then(function(t) {
						n({
							namedDest: e,
							explicitDest: t
						})
					}) : void n({
						namedDest: "",
						explicitDest: e
					})
				}).then(function(t) {
					return t.explicitDest instanceof Array ? void n(t) : void console.error('PDFLinkService.navigateTo: "' + t.explicitDest + '" is' + (' not a valid destination array, for dest="' + e + '".'))
				})
			}
		}, {
			key: "getDestinationHash",
			value: function(e) {
				if ("string" == typeof e) return this.getAnchorUrl("#" + escape(e));
				if (e instanceof Array) {
					var t = JSON.stringify(e);
					return this.getAnchorUrl("#" + escape(t))
				}
				return this.getAnchorUrl("")
			}
		}, {
			key: "getAnchorUrl",
			value: function(e) {
				return (this.baseUrl || "") + e
			}
		}, {
			key: "setHash",
			value: function(e) {
				var t = void 0,
					n = void 0;
				if (e.indexOf("=") >= 0) {
					var r = (0, l.parseQueryString)(e);
					if ("search" in r && this.eventBus.dispatch("findfromurlhash", {
						source: this,
						query: r.search.replace(/"/g, ""),
						phraseSearch: "true" === r.phrase
					}), "nameddest" in r) return void this.navigateTo(r.nameddest);
					if ("page" in r && (t = 0 | r.page || 1), "zoom" in r) {
						var o = r.zoom.split(","),
							a = o[0],
							s = parseFloat(a); - 1 === a.indexOf("Fit") ? n = [null,
						{
							name: "XYZ"
						},
						o.length > 1 ? 0 | o[1] : null, o.length > 2 ? 0 | o[2] : null, s ? s / 100 : a] : "Fit" === a || "FitB" === a ? n = [null,
						{
							name: a
						}] : "FitH" === a || "FitBH" === a || "FitV" === a || "FitBV" === a ? n = [null,
						{
							name: a
						},
						o.length > 1 ? 0 | o[1] : null] : "FitR" === a ? 5 !== o.length ? console.error('PDFLinkService.setHash: Not enough parameters for "FitR".') : n = [null,
						{
							name: a
						},
						0 | o[1], 0 | o[2], 0 | o[3], 0 | o[4]] : console.error('PDFLinkService.setHash: "' + a + '" is not a valid zoom value.')
					}
					n ? this.pdfViewer.scrollPageIntoView({
						pageNumber: t || this.page,
						destArray: n,
						allowNegativeOffset: !0
					}) : t && (this.page = t), "pagemode" in r && this.eventBus.dispatch("pagemode", {
						source: this,
						mode: r.pagemode
					})
				} else {
					n = unescape(e);
					try {
						n = JSON.parse(n), n instanceof Array || (n = n.toString())
					} catch (u) {}
					if ("string" == typeof n || i(n)) return void this.navigateTo(n);
					console.error('PDFLinkService.setHash: "' + unescape(e) + '" is not a valid destination.')
				}
			}
		}, {
			key: "executeNamedAction",
			value: function(e) {
				switch (e) {
				case "GoBack":
					this.pdfHistory && this.pdfHistory.back();
					break;
				case "GoForward":
					this.pdfHistory && this.pdfHistory.forward();
					break;
				case "NextPage":
					this.page < this.pagesCount && this.page++;
					break;
				case "PrevPage":
					this.page > 1 && this.page--;
					break;
				case "LastPage":
					this.page = this.pagesCount;
					break;
				case "FirstPage":
					this.page = 1
				}
				this.eventBus.dispatch("namedaction", {
					source: this,
					action: e
				})
			}
		}, {
			key: "onFileAttachmentAnnotation",
			value: function(e) {
				var t = e.id,
					n = e.filename,
					r = e.content;
				this.eventBus.dispatch("fileattachmentannotation", {
					source: this,
					id: t,
					filename: n,
					content: r
				})
			}
		}, {
			key: "cachePageRef",
			value: function(e, t) {
				var n = t.num + " " + t.gen + " R";
				this._pagesRefCache[n] = e
			}
		}, {
			key: "_cachedPageNumber",
			value: function(e) {
				var t = e.num + " " + e.gen + " R";
				return this._pagesRefCache && this._pagesRefCache[t] || null
			}
		}, {
			key: "pagesCount",
			get: function() {
				return this.pdfDocument ? this.pdfDocument.numPages : 0
			}
		}, {
			key: "page",
			get: function() {
				return this.pdfViewer.currentPageNumber
			},
			set: function(e) {
				this.pdfViewer.currentPageNumber = e
			}
		}, {
			key: "rotation",
			get: function() {
				return this.pdfViewer.pagesRotation
			},
			set: function(e) {
				this.pdfViewer.pagesRotation = e
			}
		}]), e
	}(), c = function() {
		function e() {
			r(this, e)
		}
		return a(e, [{
			key: "navigateTo",
			value: function(e) {}
		}, {
			key: "getDestinationHash",
			value: function(e) {
				return "#"
			}
		}, {
			key: "getAnchorUrl",
			value: function(e) {
				return "#"
			}
		}, {
			key: "setHash",
			value: function(e) {}
		}, {
			key: "executeNamedAction",
			value: function(e) {}
		}, {
			key: "onFileAttachmentAnnotation",
			value: function(e) {
				e.id, e.filename, e.content
			}
		}, {
			key: "cachePageRef",
			value: function(e, t) {}
		}, {
			key: "page",
			get: function() {
				return 0
			},
			set: function(e) {}
		}, {
			key: "rotation",
			get: function() {
				return 0
			},
			set: function(e) {}
		}]), e
	}();
	t.PDFLinkService = u, t.SimpleLinkService = c
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFCursorTools = t.CursorTool = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(11),
		a = {
			SELECT: 0,
			HAND: 1,
			ZOOM: 2
		},
		s = function() {
			function e(t) {
				var n = this,
					i = t.container,
					s = t.eventBus,
					l = t.preferences;
				r(this, e), this.container = i, this.eventBus = s, this.active = a.SELECT, this.activeBeforePresentationMode = null, this.handTool = new o.GrabToPan({
					element: this.container
				}), this._addEventListeners(), l.get("cursorToolOnLoad").then(function(e) {
					n.switchTool(e)
				})["catch"](function() {})
			}
			return i(e, [{
				key: "switchTool",
				value: function(e) {
					var t = this;
					if (null === this.activeBeforePresentationMode && e !== this.active) {
						var n = function() {
								switch (t.active) {
								case a.SELECT:
									break;
								case a.HAND:
									t.handTool.deactivate();
									break;
								case a.ZOOM:
								}
							};
						switch (e) {
						case a.SELECT:
							n();
							break;
						case a.HAND:
							n(), this.handTool.activate();
							break;
						case a.ZOOM:
						default:
							return void console.error('switchTool: "' + e + '" is an unsupported value.')
						}
						this.active = e, this._dispatchEvent()
					}
				}
			}, {
				key: "_dispatchEvent",
				value: function() {
					this.eventBus.dispatch("cursortoolchanged", {
						source: this,
						tool: this.active
					})
				}
			}, {
				key: "_addEventListeners",
				value: function() {
					var e = this;
					this.eventBus.on("switchcursortool", function(t) {
						e.switchTool(t.tool)
					}), this.eventBus.on("presentationmodechanged", function(t) {
						if (!t.switchInProgress) {
							var n = void 0;
							t.active ? (n = e.active, e.switchTool(a.SELECT), e.activeBeforePresentationMode = n) : (n = e.activeBeforePresentationMode, e.activeBeforePresentationMode = null, e.switchTool(n))
						}
					})
				}
			}, {
				key: "activeTool",
				get: function() {
					return this.active
				}
			}]), e
		}();
	t.CursorTool = a, t.PDFCursorTools = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFFindController = t.FindState = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(1),
		a = n(0),
		s = n(5),
		l = n(6),
		u = {
			FOUND: 0,
			NOT_FOUND: 1,
			WRAPPED: 2,
			PENDING: 3
		},
		c = -50,
		d = -400,
		h = 250,
		f = {
			"‘": "'",
			"’": "'",
			"‚": "'",
			"‛": "'",
			"“": '"',
			"”": '"',
			"„": '"',
			"‟": '"',
			"¼": "1/4",
			"½": "1/2",
			"¾": "3/4"
		},
		p = function() {
			function e(t) {
				var n = t.pdfViewer,
					i = t.labelData,
					o = t.enableLabel,
					a = t.enableCompares;
				r(this, e), this.pdfViewer = n, this.labelData = i, this.enableLabel = o, this.enableCompares = a, this.onUpdateResultsCount = null, this.onUpdateState = null, this.reset();
				var s = Object.keys(f).join("");
				this.normalizationRegex = new RegExp("[" + s + "]", "g"), this.initLabelLoad()
			}
			return i(e, [{
				key: "reset",
				value: function() {
					var e = this;
					this.startedTextExtraction = !1, this.extractTextPromises = [], this.pendingFindMatches = Object.create(null), this.active = !1, this.pageContents = [], this.pageMatches = [], this.pageMatchesLength = null, this.pageOffsets = [], this.articleContent = "", this.matchCount = 0, this.selected = {
						pageIdx: -1,
						matchIdx: -1
					}, this.offset = {
						pageIdx: null,
						matchIdx: null
					}, this.pagesToSearch = null, this.resumePageIdx = null, this.state = null, this.dirtyMatch = !1, this.findTimeout = null, this._firstPagePromise = new Promise(function(t) {
						e.resolveFirstPage = t
					})
				}
			}, {
				key: "normalize",
				value: function(e) {
					return e.replace(this.normalizationRegex, function(e) {
						return f[e]
					})
				}
			}, {
				key: "_prepareMatches",
				value: function(e, t, n) {
					function r(e, t) {
						var n = e[t],
							r = e[t + 1];
						if (t < e.length - 1 && n.match === r.match) return n.skipped = !0, !0;
						for (var i = t - 1; i >= 0; i--) {
							var o = e[i];
							if (!o.skipped) {
								if (o.match + o.matchLength < n.match) break;
								if (o.match + o.matchLength >= n.match + n.matchLength) return n.skipped = !0, !0
							}
						}
						return !1
					}
					e.sort(function(e, t) {
						return e.match === t.match ? e.matchLength - t.matchLength : e.match - t.match
					});
					for (var i = 0, o = e.length; o > i; i++) r(e, i) || (t.push(e[i].match), n.push(e[i].matchLength))
				}
			}, {
				key: "calcFindPhraseMatch",
				value: function(e, t, n) {
					for (var r = [], i = e.length, o = -i;;) {
						if (o = n.indexOf(e, o + i), -1 === o) break;
						r.push(o)
					}
					this.pageMatches[t] = r
				}
			}, {
				key: "calcFindWordMatch",
				value: function(e, t, n) {
					for (var r = [], i = e.match(/\S+/g), o = 0, a = i.length; a > o; o++) for (var s = i[o], l = s.length, u = -l;;) {
						if (u = n.indexOf(s, u + l), -1 === u) break;
						r.push({
							match: u,
							matchLength: l,
							skipped: !1
						})
					}
					this.pageMatchesLength || (this.pageMatchesLength = []), this.pageMatchesLength[t] = [], this.pageMatches[t] = [], this._prepareMatches(r, this.pageMatches[t], this.pageMatchesLength[t])
				}
			}, {
				key: "calcFindMatch",
				value: function(e) {
					var t = this.normalize(this.pageContents[e]),
						n = this.normalize(this.state.query),
						r = this.state.caseSensitive,
						i = this.state.phraseSearch,
						o = n.length;
					0 !== o && (r || (t = t.toLowerCase(), n = n.toLowerCase()), i ? this.calcFindPhraseMatch(n, e, t) : this.calcFindWordMatch(n, e, t), this.updatePage(e), this.resumePageIdx === e && (this.resumePageIdx = null, this.nextPageMatch()), this.pageMatches[e].length > 0 && (this.matchCount += this.pageMatches[e].length, this.updateUIResultsCount()))
				}
			}, {
				key: "extractText",
				value: function() {
					var e = this;
					if (!this.startedTextExtraction) {
						this.startedTextExtraction = !0, this.pageContents.length = 0;
						for (var t = Promise.resolve(), n = function(n, r) {
								var i = (0, o.createPromiseCapability)();
								e.extractTextPromises[n] = i.promise, t = t.then(function() {
									return e.pdfViewer.getPageTextContent(n).then(function(t) {
										for (var r = t.items, o = [], a = 0, s = r.length; s > a; a++) o.push(r[a].str);
										e.pageContents[n] = o.join(""), i.resolve(n)
									}, function(t) {
										console.error("Unable to get page " + (n + 1) + " text content", t), e.pageContents[n] = "", i.resolve(n)
									})
								})
							}, r = 0, i = this.pdfViewer.pagesCount; i > r; r++) n(r, i)
					}
				}
			}, {
				key: "initLabelLoad",
				value: function(e) {
					var t = this;
					this._firstPagePromise.then(function() {
						var n = [],
							r = "";
						t.extractText(), t.extractTextPromises[t.pdfViewer.pagesCount - 1].then(function(i) {
							var o = 0;
							t.pageContents.forEach(function(e) {
								r += e, n.push(o), o += e.length
							}), l.comparesManager.loadConfig({
								enableCompares: t.enableCompares
							}), s.labelManager.loadConfig({
								pageOffsets: n,
								pageContents: t.pageContents,
								articleContent: r,
								pdfViewer: t.pdfViewer,
								enableLabel: t.enableLabel
							}), e && (t.labelData = e);
							for (var a = (s.labelManager.loadSpecialIndexLabelMatches(t.labelData), 0); a < t.pdfViewer.pagesCount; a++) {
								var u = t.pdfViewer.getPageView(a);
								u.textLayer && u.textLayer.textContentItemsStr.length > 0 && u.textLayer.updateLabelMatches()
							}
							t.labelData.length > 0 && s.labelManager.triggerLabel(0)
						})
					})
				}
			}, {
				key: "calcFindPhraseMatch",
				value: function(e, t, n) {
					for (var r = [], i = e.length, o = -i;;) {
						if (o = n.indexOf(e, o + i), -1 === o) break;
						r.push(o)
					}
					this.pageMatches[t] = r
				}
			}, {
				key: "excuteLabeling",
				value: function(e, t) {
					if (!t.selection.isCollapsed) {
						var n = this.getSelectionPage(t.selection.anchorNode.parentNode);
						this.getNodePageIdx(t.selection.anchorNode), this.getNodePageIdx(t.selection.focusNode);
						t.ifLabeling && n && n.textLayer && n.textLayer.labelingMatch(t)
					}
				}
			}, {
				key: "getLabelNodeInfo",
				value: function(e, t) {
					this.getNodePageIdx(e), this.textDivs.indexOf(this.getParentDiv(e));
					return this.pdfViewer.getPageView(), {
						pageIdx: pageIdx,
						offset: -1,
						divIdx: -1
					}
				}
			}, {
				key: "getLabelInfo",
				value: function(e) {
					var t = e.selection,
						n = (t.anchorNode, t.focusNode, this.getLabelNodeInfo(t.anchorNode, t.anchorOffset), this.getLabelNodeInfo(t.focusNode, t.focusOffset), this.getSelectionInfo(t), {
							selectionStr: t.toString(),
							begin: {
								pageIdx: -1,
								divIdx: -1,
								offset: ""
							}
						});
					return n
				}
			}, {
				key: "getNodePageIdx",
				value: function(e) {
					var t = -1;
					return e.getAttribute && (t = e.getAttribute("data-page-number")) ? parseInt(t) - 1 : this.getNodePageIdx(e.parentNode)
				}
			}, {
				key: "getSelectionPage",
				value: function(e) {
					var t = void 0,
						n = this.pdfViewer._pages,
						r = this;
					return n.forEach(function(n, i) {
						if (n.textLayer) {
							var o = n.textLayer.textDivs;
							o.indexOf(r.getParentDiv(e)) > -1 && (t = i)
						}
					}), t > -1 ? this.pdfViewer.getPageView(t) : void 0
				}
			}, {
				key: "getParentDiv",
				value: function(e) {
					return "DIV" === e.nodeName ? e : this.getParentDiv(e.parentNode)
				}
			}, {
				key: "executeCommand",
				value: function(e, t) {
					var n = this;
					(null === this.state || "findagain" !== e) && (this.dirtyMatch = !0), this.state = t, this.updateUIState(u.PENDING), this._firstPagePromise.then(function() {
						n.extractText(), clearTimeout(n.findTimeout), "find" === e ? n.findTimeout = setTimeout(n.nextMatch.bind(n), h) : n.nextMatch()
					})
				}
			}, {
				key: "updatePage",
				value: function(e) {
					this.selected.pageIdx === e && (this.pdfViewer.currentPageNumber = e + 1);
					var t = this.pdfViewer.getPageView(e);
					t.textLayer && t.textLayer.updateMatches()
				}
			}, {
				key: "nextMatch",
				value: function() {
					var e = this,
						t = this.state.findPrevious,
						n = this.pdfViewer.currentPageNumber - 1,
						r = this.pdfViewer.pagesCount;
					if (this.active = !0, this.dirtyMatch) {
						this.dirtyMatch = !1, this.selected.pageIdx = this.selected.matchIdx = -1, this.offset.pageIdx = n, this.offset.matchIdx = null, this.hadMatch = !1, this.resumePageIdx = null, this.pageMatches = [], this.matchCount = 0, this.pageMatchesLength = null;
						for (var i = 0; r > i; i++) this.updatePage(i), i in this.pendingFindMatches || (this.pendingFindMatches[i] = !0, this.extractTextPromises[i].then(function(t) {
							delete e.pendingFindMatches[t], e.calcFindMatch(t)
						}))
					}
					if ("" === this.state.query) return void this.updateUIState(u.FOUND);
					if (!this.resumePageIdx) {
						var o = this.offset;
						if (this.pagesToSearch = r, null !== o.matchIdx) {
							var a = this.pageMatches[o.pageIdx].length;
							if (!t && o.matchIdx + 1 < a || t && o.matchIdx > 0) return this.hadMatch = !0, o.matchIdx = t ? o.matchIdx - 1 : o.matchIdx + 1, void this.updateMatch(!0);
							this.advanceOffsetPage(t)
						}
						this.nextPageMatch()
					}
				}
			}, {
				key: "matchesReady",
				value: function(e) {
					var t = this.offset,
						n = e.length,
						r = this.state.findPrevious;
					return n ? (this.hadMatch = !0, t.matchIdx = r ? n - 1 : 0, this.updateMatch(!0), !0) : (this.advanceOffsetPage(r), t.wrapped && (t.matchIdx = null, this.pagesToSearch < 0) ? (this.updateMatch(!1), !0) : !1)
				}
			}, {
				key: "updateMatchPosition",
				value: function(e, t, n, r) {
					if (this.selected.matchIdx === t && this.selected.pageIdx === e) {
						var i = {
							top: c,
							left: d
						};
						(0, a.scrollIntoView)(n[r], i, !0)
					}
				}
			}, {
				key: "updateLabelMatchPosition",
				value: function(e, t) {
					(0, a.scrollIntoView)(elements[t], void 0, !0)
				}
			}, {
				key: "nextPageMatch",
				value: function() {
					null !== this.resumePageIdx && console.error("There can only be one pending page.");
					var e = null;
					do {
						var t = this.offset.pageIdx;
						if (e = this.pageMatches[t], !e) {
							this.resumePageIdx = t;
							break
						}
					} while (!this.matchesReady(e))
				}
			}, {
				key: "advanceOffsetPage",
				value: function(e) {
					var t = this.offset,
						n = this.extractTextPromises.length;
					t.pageIdx = e ? t.pageIdx - 1 : t.pageIdx + 1, t.matchIdx = null, this.pagesToSearch--, (t.pageIdx >= n || t.pageIdx < 0) && (t.pageIdx = e ? n - 1 : 0, t.wrapped = !0)
				}
			}, {
				key: "updateMatch",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
						t = u.NOT_FOUND,
						n = this.offset.wrapped;
					if (this.offset.wrapped = !1, e) {
						var r = this.selected.pageIdx;
						this.selected.pageIdx = this.offset.pageIdx, this.selected.matchIdx = this.offset.matchIdx, t = n ? u.WRAPPED : u.FOUND, -1 !== r && r !== this.selected.pageIdx && this.updatePage(r)
					}
					this.updateUIState(t, this.state.findPrevious), -1 !== this.selected.pageIdx && this.updatePage(this.selected.pageIdx)
				}
			}, {
				key: "updateUIResultsCount",
				value: function() {
					this.onUpdateResultsCount && this.onUpdateResultsCount(this.matchCount)
				}
			}, {
				key: "updateUIState",
				value: function(e, t) {
					this.onUpdateState && this.onUpdateState(e, t, this.matchCount)
				}
			}]), e
		}();
	t.FindState = u, t.PDFFindController = p
}, function(e, t, n) {
	"use strict";

	function r() {
		return {
			appContainer: document.getElementById("appContainer"),
			selectionToolbarContainer: document.getElementById("selectionToolbarContainer"),
			mainContainer: document.getElementById("viewerContainer"),
			viewerContainer: document.getElementById("viewer"),
			eventBus: null,
			toolbar: {
				container: document.getElementById("toolbarViewer"),
				numPages: document.getElementById("numPages"),
				pageNumber: document.getElementById("pageNumber"),
				scaleSelectContainer: document.getElementById("scaleSelectContainer"),
				scaleSelect: document.getElementById("scaleSelect"),
				customScaleOption: document.getElementById("customScaleOption"),
				previous: document.getElementById("previous"),
				next: document.getElementById("next"),
				zoomIn: document.getElementById("zoomIn"),
				zoomOut: document.getElementById("zoomOut"),
				viewFind: document.getElementById("viewFind"),
				openFile: document.getElementById("openFile"),
				print: document.getElementById("print"),
				presentationModeButton: document.getElementById("presentationMode"),
				download: document.getElementById("download"),
				viewBookmark: document.getElementById("viewBookmark")
			},
			secondaryToolbar: {
				toolbar: document.getElementById("secondaryToolbar"),
				toggleButton: document.getElementById("secondaryToolbarToggle"),
				toolbarButtonContainer: document.getElementById("secondaryToolbarButtonContainer"),
				presentationModeButton: document.getElementById("secondaryPresentationMode"),
				openFileButton: document.getElementById("secondaryOpenFile"),
				printButton: document.getElementById("secondaryPrint"),
				downloadButton: document.getElementById("secondaryDownload"),
				viewBookmarkButton: document.getElementById("secondaryViewBookmark"),
				firstPageButton: document.getElementById("firstPage"),
				lastPageButton: document.getElementById("lastPage"),
				pageRotateCwButton: document.getElementById("pageRotateCw"),
				pageRotateCcwButton: document.getElementById("pageRotateCcw"),
				cursorSelectToolButton: document.getElementById("cursorSelectTool"),
				cursorHandToolButton: document.getElementById("cursorHandTool"),
				documentPropertiesButton: document.getElementById("documentProperties")
			},
			fullscreen: {
				contextFirstPage: document.getElementById("contextFirstPage"),
				contextLastPage: document.getElementById("contextLastPage"),
				contextPageRotateCw: document.getElementById("contextPageRotateCw"),
				contextPageRotateCcw: document.getElementById("contextPageRotateCcw")
			},
			sidebar: {
				outerContainer: document.getElementById("outerContainer"),
				viewerContainer: document.getElementById("viewerContainer"),
				toggleButton: document.getElementById("sidebarToggle"),
				thumbnailButton: document.getElementById("viewThumbnail"),
				outlineButton: document.getElementById("viewOutline"),
				attachmentsButton: document.getElementById("viewAttachments"),
				thumbnailView: document.getElementById("thumbnailView"),
				outlineView: document.getElementById("outlineView"),
				attachmentsView: document.getElementById("attachmentsView")
			},
			findBar: {
				bar: document.getElementById("findbar"),
				toggleButton: document.getElementById("viewFind"),
				findField: document.getElementById("findInput"),
				highlightAllCheckbox: document.getElementById("findHighlightAll"),
				caseSensitiveCheckbox: document.getElementById("findMatchCase"),
				findMsg: document.getElementById("findMsg"),
				findResultsCount: document.getElementById("findResultsCount"),
				findStatusIcon: document.getElementById("findStatusIcon"),
				findPreviousButton: document.getElementById("findPrevious"),
				findNextButton: document.getElementById("findNext"),
				labelingButton: document.getElementById("labelingField"),
				unLabelingButton: document.getElementById("unLabelingField")
			},
			passwordOverlay: {
				overlayName: "passwordOverlay",
				container: document.getElementById("passwordOverlay"),
				label: document.getElementById("passwordText"),
				input: document.getElementById("password"),
				submitButton: document.getElementById("passwordSubmit"),
				cancelButton: document.getElementById("passwordCancel")
			},
			documentProperties: {
				overlayName: "documentPropertiesOverlay",
				container: document.getElementById("documentPropertiesOverlay"),
				closeButton: document.getElementById("documentPropertiesClose"),
				fields: {
					fileName: document.getElementById("fileNameField"),
					fileSize: document.getElementById("fileSizeField"),
					title: document.getElementById("titleField"),
					author: document.getElementById("authorField"),
					subject: document.getElementById("subjectField"),
					keywords: document.getElementById("keywordsField"),
					creationDate: document.getElementById("creationDateField"),
					modificationDate: document.getElementById("modificationDateField"),
					creator: document.getElementById("creatorField"),
					producer: document.getElementById("producerField"),
					version: document.getElementById("versionField"),
					pageCount: document.getElementById("pageCountField")
				}
			},
			errorWrapper: {
				container: document.getElementById("errorWrapper"),
				errorMessage: document.getElementById("errorMessage"),
				closeButton: document.getElementById("errorClose"),
				errorMoreInfo: document.getElementById("errorMoreInfo"),
				moreInfoButton: document.getElementById("errorShowMore"),
				lessInfoButton: document.getElementById("errorShowLess")
			},
			printContainer: document.getElementById("printContainer"),
			openFileInputName: "fileInput",
			debuggerScriptPath: "./debugger.js",
			defaultUrl: u,
			enableLabel: !0,
			enableCompares: !0,
			tags: [{
				dataColor: "87, 220, 162",
				code: "1",
				dataTag: "测试1",
				dataDetail: "测试detail1"
			}, {
				dataColor: "253, 140, 155",
				code: "2",
				dataTag: "测试2",
				dataDetail: "测试detail2"
			}],
			labelData: [{
				index: 297,
				word: "2",
				code: "2",
				compares: [{
					docName: "b.doc",
					word: "1",
					type: "replace"
				}, {
					docName: "c.doc",
					word: "3",
					type: "replace"
				}, {
					docName: "d.doc",
					word: "1",
					type: "replace"
				}, {
					docName: "e.doc",
					word: "1",
					type: "replace"
				}]
			}]
		}
	}
	function i(e) {
		e || (e = r()), window.PDFViewerApplication = c.PDFViewerApplication, c.PDFViewerApplication.run(e), e.enableLabel && setTimeout(function() {
			s(e)
		}, 500)
	}
	function o(e) {
		var t = r();
		e = $.extend({}, t, e), window.PDFViewerApplication = c.PDFViewerApplication, window.labelManager = c.labelManager, c.PDFViewerApplication.run(e), e.enableLabel && setTimeout(function() {
			s(e)
		}, 500)
	}
	function a(e, t) {
		var n = t.find("ul"),
			r = "";
		return e.tags && e.tags.length > 0 ? ($.each(e.tags, function(e, t) {
			r += '<li data-color="' + t.dataColor + '" title="' + t.code + '" data-tag="' + t.dataTag + '" data-detail="' + t.dataDetail + '"><div style="background-color: rgb(' + t.dataColor + ')" class="color-block"></div> ' + t.code + "</li>"
		}), n.html(r), n.find("li")) : void 0
	}
	function s(e) {
		function t(e) {
			var t, n = ["anchor", "base", "extent", "focus"];
			return "Edge" !== l() ? e : ($.each(n, function(n, r) {
				1 == e[r + "Node"].nodeType && 1 == e[r + "Offset"] && (t = e[r + "Node"].childNodes.length, e[r + "Node"] = e[r + "Node"].childNodes[t - 1], 3 == e[r + "Node"].nodeType ? e[r + "Offset"] = e[r + "Node"].data.length : 1 == e[r + "Node"].nodeType && (e[r + "Offset"] = e[r + "Node"].innerText.length))
			}), e)
		}
		function n() {
			setTimeout(function() {
				h.css({
					display: "none"
				})
			}, 50)
		}
		var r = "";
		h = $(e.selectionToolbarContainer), p = h.find(".selection-text"), g = h.find("input.search-input"), f = $(e.mainContainer);
		var i = a(e, h);
		g.on("input propertychange", function(t) {
			var n = [],
				o = !1;
			r = t.target.value, r || (o = !0), e.tags.forEach(function(e, t) {
				e.code.match(r) && n.push(t)
			});
			for (var a = 0; a < i.length; a++) {
				var s = i[a];
				o || n.indexOf(a) > -1 ? s.style.display = "inline-block" : s.style.display = "none"
			}
		}), f.mouseup(function(e) {
			var r, i, o = e.timeStamp;
			if (d) {
				if (900 > o - d) return void n();
				d = o
			} else d = o;
			if (r = getSelection(), i = r.toString(), i.length) {
				var a = e.clientY,
					s = e.clientX;
				window.tempSelection = t($.extend({}, r)), window.tempSelection.selectionText = i, p.html("<b>已选文本</b>: " + i), h.css({
					display: "block",
					left: s,
					top: a,
					"margin-top": 0
				}), g.focus(), setTimeout(function() {
					var e = h.height(),
						t = $(window).height(),
						n = $(window).width(),
						r = 395;
					0 > t - e - a && h.animate({
						"margin-top": -e
					}), 0 > n - r - s && h.css({
						left: n - s
					})
				}, 50)
			} else n()
		}), h.find("li").on("mousedown", function(e) {
			n(), window.PDFViewerApplication.eventBus.dispatch("labeling", {
				source: this,
				type: "",
				selection: window.tempSelection,
				ifLabeling: !0,
				dataColor: this.getAttribute("data-color"),
				dataTag: this.getAttribute("data-tag"),
				dataDetail: this.getAttribute("data-detail")
			})
		})
	}
	function l() {
		var e = void 0;
		return window && (e = navigator.userAgent), window.ActiveXObject || "ActiveXObject" in window ? "IE" : e.indexOf("Edge") > -1 ? "Edge" : e.indexOf("Chrome") > -1 ? "Chrome" : void 0
	}
	var u = "样本1解析.pdf",
		c = void 0;
	c = n(4), n(31), n(36);
	var d = void 0,
		h = void 0,
		f = void 0,
		p = void 0,
		g = void 0;
	window.pdfReadLoad = function(e) {
		e ? o(e) : i()
	}, window.initLabelLoad = function(e) {
		window.PDFViewerApplication && PDFViewerApplication.findController.initLabelLoad(e)
	}, window.compareCallback = function(e) {
		window.parent.postMessage && window.parent.postMessage({
			type: "compare",
			val: e
		}, "*")
	}
}, function(e, t, n) {
	"use strict";

	function r(e) {
		this.element = e.element, this.document = e.element.ownerDocument, "function" == typeof e.ignoreTarget && (this.ignoreTarget = e.ignoreTarget), this.onActiveChanged = e.onActiveChanged, this.activate = this.activate.bind(this), this.deactivate = this.deactivate.bind(this), this.toggle = this.toggle.bind(this), this._onmousedown = this._onmousedown.bind(this), this._onmousemove = this._onmousemove.bind(this), this._endPan = this._endPan.bind(this);
		var t = this.overlay = document.createElement("div");
		t.className = "grab-to-pan-grabbing"
	}
	function i(e) {
		return "buttons" in e && a ? !(1 & e.buttons) : l || u ? 0 === e.which : void 0
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), r.prototype = {
		CSS_CLASS_GRAB: "grab-to-pan-grab",
		activate: function() {
			this.active || (this.active = !0, this.element.addEventListener("mousedown", this._onmousedown, !0), this.element.classList.add(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!0))
		},
		deactivate: function() {
			this.active && (this.active = !1, this.element.removeEventListener("mousedown", this._onmousedown, !0), this._endPan(), this.element.classList.remove(this.CSS_CLASS_GRAB), this.onActiveChanged && this.onActiveChanged(!1))
		},
		toggle: function() {
			this.active ? this.deactivate() : this.activate()
		},
		ignoreTarget: function(e) {
			return e[o]("a[href], a[href] *, input, textarea, button, button *, select, option")
		},
		_onmousedown: function(e) {
			if (0 === e.button && !this.ignoreTarget(e.target)) {
				if (e.originalTarget) try {
					e.originalTarget.tagName
				} catch (t) {
					return
				}
				this.scrollLeftStart = this.element.scrollLeft, this.scrollTopStart = this.element.scrollTop, this.clientXStart = e.clientX, this.clientYStart = e.clientY, this.document.addEventListener("mousemove", this._onmousemove, !0), this.document.addEventListener("mouseup", this._endPan, !0), this.element.addEventListener("scroll", this._endPan, !0), e.preventDefault(), e.stopPropagation();
				var n = document.activeElement;
				n && !n.contains(e.target) && n.blur()
			}
		},
		_onmousemove: function(e) {
			if (this.element.removeEventListener("scroll", this._endPan, !0), i(e)) return void this._endPan();
			var t = e.clientX - this.clientXStart,
				n = e.clientY - this.clientYStart,
				r = this.scrollTopStart - n,
				o = this.scrollLeftStart - t;
			this.element.scrollTo ? this.element.scrollTo({
				top: r,
				left: o,
				behavior: "instant"
			}) : (this.element.scrollTop = r, this.element.scrollLeft = o), this.overlay.parentNode || document.body.appendChild(this.overlay)
		},
		_endPan: function() {
			this.element.removeEventListener("scroll", this._endPan, !0), this.document.removeEventListener("mousemove", this._onmousemove, !0), this.document.removeEventListener("mouseup", this._endPan, !0), this.overlay.remove()
		}
	};
	var o;
	["webkitM", "mozM", "msM", "oM", "m"].some(function(e) {
		var t = e + "atches";
		return t in document.documentElement && (o = t), t += "Selector", t in document.documentElement && (o = t), o
	});
	var a = !document.documentMode || document.documentMode > 9,
		s = window.chrome,
		l = s && (s.webstore || s.app),
		u = /Apple/.test(navigator.vendor) && /Version\/([6-9]\d*|[1-5]\d+)/.test(navigator.userAgent);
	t.GrabToPan = r
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFSidebar = t.SidebarView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = n(3),
		s = "pdfSidebarNotification",
		l = {
			NONE: 0,
			THUMBS: 1,
			OUTLINE: 2,
			ATTACHMENTS: 3
		},
		u = function() {
			function e(t) {
				var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.NullL10n;
				r(this, e), this.isOpen = !1, this.active = l.THUMBS, this.isInitialViewSet = !1, this.onToggled = null, this.pdfViewer = t.pdfViewer, this.pdfThumbnailViewer = t.pdfThumbnailViewer, this.pdfOutlineViewer = t.pdfOutlineViewer, this.outerContainer = t.outerContainer, this.viewerContainer = t.viewerContainer, this.eventBus = t.eventBus, this.toggleButton = t.toggleButton, this.thumbnailButton = t.thumbnailButton, this.outlineButton = t.outlineButton, this.attachmentsButton = t.attachmentsButton, this.thumbnailView = t.thumbnailView, this.outlineView = t.outlineView, this.attachmentsView = t.attachmentsView, this.disableNotification = t.disableNotification || !1, this.l10n = n, this._addEventListeners()
			}
			return i(e, [{
				key: "reset",
				value: function() {
					this.isInitialViewSet = !1, this._hideUINotification(null), this.switchView(l.THUMBS), this.outlineButton.disabled = !1, this.attachmentsButton.disabled = !1
				}
			}, {
				key: "setInitialView",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.NONE;
					if (!this.isInitialViewSet) {
						if (this.isInitialViewSet = !0, this.isOpen && e === l.NONE) return void this._dispatchEvent();
						var t = e === this.visibleView;
						this.switchView(e, !0), t && this._dispatchEvent()
					}
				}
			}, {
				key: "switchView",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
					if (e === l.NONE) return void this.close();
					var n = e !== this.active,
						r = !1;
					switch (e) {
					case l.THUMBS:
						this.thumbnailButton.classList.add("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.remove("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.add("hidden"), this.isOpen && n && (this._updateThumbnailViewer(), r = !0);
						break;
					case l.OUTLINE:
						if (this.outlineButton.disabled) return;
						this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.add("toggled"), this.attachmentsButton.classList.remove("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.remove("hidden"), this.attachmentsView.classList.add("hidden");
						break;
					case l.ATTACHMENTS:
						if (this.attachmentsButton.disabled) return;
						this.thumbnailButton.classList.remove("toggled"), this.outlineButton.classList.remove("toggled"), this.attachmentsButton.classList.add("toggled"), this.thumbnailView.classList.add("hidden"), this.outlineView.classList.add("hidden"), this.attachmentsView.classList.remove("hidden");
						break;
					default:
						return void console.error('PDFSidebar_switchView: "' + e + '" is an unsupported value.')
					}
					return this.active = 0 | e, t && !this.isOpen ? void this.open() : (r && this._forceRendering(), n && this._dispatchEvent(), void this._hideUINotification(this.active))
				}
			}, {
				key: "open",
				value: function() {
					this.isOpen || (this.isOpen = !0, this.toggleButton.classList.add("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.add("sidebarOpen"), this.active === l.THUMBS && this._updateThumbnailViewer(), this._forceRendering(), this._dispatchEvent(), this._hideUINotification(this.active))
				}
			}, {
				key: "close",
				value: function() {
					this.isOpen && (this.isOpen = !1, this.toggleButton.classList.remove("toggled"), this.outerContainer.classList.add("sidebarMoving"), this.outerContainer.classList.remove("sidebarOpen"), this._forceRendering(), this._dispatchEvent())
				}
			}, {
				key: "toggle",
				value: function() {
					this.isOpen ? this.close() : this.open()
				}
			}, {
				key: "_dispatchEvent",
				value: function() {
					this.eventBus.dispatch("sidebarviewchanged", {
						source: this,
						view: this.visibleView
					})
				}
			}, {
				key: "_forceRendering",
				value: function() {
					this.onToggled ? this.onToggled() : (this.pdfViewer.forceRendering(), this.pdfThumbnailViewer.forceRendering())
				}
			}, {
				key: "_updateThumbnailViewer",
				value: function() {
					for (var e = this.pdfViewer, t = this.pdfThumbnailViewer, n = e.pagesCount, r = 0; n > r; r++) {
						var i = e.getPageView(r);
						if (i && i.renderingState === a.RenderingStates.FINISHED) {
							var o = t.getThumbnail(r);
							o.setImage(i)
						}
					}
					t.scrollThumbnailIntoView(e.currentPageNumber)
				}
			}, {
				key: "_showUINotification",
				value: function(e) {
					var t = this;
					if (!this.disableNotification) {
						if (this.l10n.get("toggle_sidebar_notification.title", null, "Toggle Sidebar (document contains outline/attachments)").then(function(e) {
							t.toggleButton.title = e
						}), this.isOpen) {
							if (e === this.active) return
						} else this.toggleButton.classList.add(s);
						switch (e) {
						case l.OUTLINE:
							this.outlineButton.classList.add(s);
							break;
						case l.ATTACHMENTS:
							this.attachmentsButton.classList.add(s)
						}
					}
				}
			}, {
				key: "_hideUINotification",
				value: function(e) {
					var t = this;
					if (!this.disableNotification) {
						var n = function(e) {
								switch (e) {
								case l.OUTLINE:
									t.outlineButton.classList.remove(s);
									break;
								case l.ATTACHMENTS:
									t.attachmentsButton.classList.remove(s)
								}
							};
						if (this.isOpen || null === e) {
							if (this.toggleButton.classList.remove(s), null !== e) return void n(e);
							for (e in l) n(l[e]);
							this.l10n.get("toggle_sidebar.title", null, "Toggle Sidebar").then(function(e) {
								t.toggleButton.title = e
							})
						}
					}
				}
			}, {
				key: "_addEventListeners",
				value: function() {
					var e = this;
					this.viewerContainer.addEventListener("transitionend", function(t) {
						t.target === e.viewerContainer && e.outerContainer.classList.remove("sidebarMoving")
					}), this.thumbnailButton.addEventListener("click", function() {
						e.switchView(l.THUMBS)
					}), this.outlineButton.addEventListener("click", function() {
						e.switchView(l.OUTLINE)
					}), this.outlineButton.addEventListener("dblclick", function() {
						e.pdfOutlineViewer.toggleOutlineTree()
					}), this.attachmentsButton.addEventListener("click", function() {
						e.switchView(l.ATTACHMENTS)
					}), this.eventBus.on("outlineloaded", function(t) {
						var n = t.outlineCount;
						e.outlineButton.disabled = !n, n ? e._showUINotification(l.OUTLINE) : e.active === l.OUTLINE && e.switchView(l.THUMBS)
					}), this.eventBus.on("attachmentsloaded", function(t) {
						return t.attachmentsCount ? (e.attachmentsButton.disabled = !1, void e._showUINotification(l.ATTACHMENTS)) : void Promise.resolve().then(function() {
							e.attachmentsView.hasChildNodes() || (e.attachmentsButton.disabled = !0, e.active === l.ATTACHMENTS && e.switchView(l.THUMBS))
						})
					}), this.eventBus.on("presentationmodechanged", function(t) {
						t.active || t.switchInProgress || !e.isThumbnailViewVisible || e._updateThumbnailViewer()
					})
				}
			}, {
				key: "visibleView",
				get: function() {
					return this.isOpen ? this.active : l.NONE
				}
			}, {
				key: "isThumbnailViewVisible",
				get: function() {
					return this.isOpen && this.active === l.THUMBS
				}
			}, {
				key: "isOutlineViewVisible",
				get: function() {
					return this.isOpen && this.active === l.OUTLINE
				}
			}, {
				key: "isAttachmentsViewVisible",
				get: function() {
					return this.isOpen && this.active === l.ATTACHMENTS
				}
			}]), e
		}();
	t.SidebarView = l, t.PDFSidebar = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = function() {
			function e() {
				r(this, e), this._overlays = {}, this._active = null, this._keyDownBound = this._keyDown.bind(this)
			}
			return i(e, [{
				key: "register",
				value: function(e, t) {
					var n = this,
						r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
						i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
					return new Promise(function(o) {
						var a = void 0;
						if (!(e && t && (a = t.parentNode))) throw new Error("Not enough parameters.");
						if (n._overlays[e]) throw new Error("The overlay is already registered.");
						n._overlays[e] = {
							element: t,
							container: a,
							callerCloseMethod: r,
							canForceClose: i
						}, o()
					})
				}
			}, {
				key: "unregister",
				value: function(e) {
					var t = this;
					return new Promise(function(n) {
						if (!t._overlays[e]) throw new Error("The overlay does not exist.");
						if (t._active === e) throw new Error("The overlay cannot be removed while it is active.");
						delete t._overlays[e], n()
					})
				}
			}, {
				key: "open",
				value: function(e) {
					var t = this;
					return new Promise(function(n) {
						if (!t._overlays[e]) throw new Error("The overlay does not exist.");
						if (t._active) {
							if (!t._overlays[e].canForceClose) throw t._active === e ? new Error("The overlay is already active.") : new Error("Another overlay is currently active.");
							t._closeThroughCaller()
						}
						t._active = e, t._overlays[t._active].element.classList.remove("hidden"), t._overlays[t._active].container.classList.remove("hidden"), window.addEventListener("keydown", t._keyDownBound), n()
					})
				}
			}, {
				key: "close",
				value: function(e) {
					var t = this;
					return new Promise(function(n) {
						if (!t._overlays[e]) throw new Error("The overlay does not exist.");
						if (!t._active) throw new Error("The overlay is currently not active.");
						if (t._active !== e) throw new Error("Another overlay is currently active.");
						t._overlays[t._active].container.classList.add("hidden"), t._overlays[t._active].element.classList.add("hidden"), t._active = null, window.removeEventListener("keydown", t._keyDownBound), n()
					})
				}
			}, {
				key: "_keyDown",
				value: function(e) {
					this._active && 27 === e.keyCode && (this._closeThroughCaller(), e.preventDefault())
				}
			}, {
				key: "_closeThroughCaller",
				value: function() {
					this._overlays[this._active].callerCloseMethod && this._overlays[this._active].callerCloseMethod(), this._active && this.close(this._active)
				}
			}, {
				key: "active",
				get: function() {
					return this._active
				}
			}]), e
		}();
	t.OverlayManager = o
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PasswordPrompt = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = n(1),
		s = function() {
			function e(t, n) {
				var i = this,
					a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.NullL10n;
				r(this, e), this.overlayName = t.overlayName, this.container = t.container, this.label = t.label, this.input = t.input, this.submitButton = t.submitButton, this.cancelButton = t.cancelButton, this.overlayManager = n, this.l10n = a, this.updateCallback = null, this.reason = null, this.submitButton.addEventListener("click", this.verify.bind(this)), this.cancelButton.addEventListener("click", this.close.bind(this)), this.input.addEventListener("keydown", function(e) {
					13 === e.keyCode && i.verify()
				}), this.overlayManager.register(this.overlayName, this.container, this.close.bind(this), !0)
			}
			return i(e, [{
				key: "open",
				value: function() {
					var e = this;
					this.overlayManager.open(this.overlayName).then(function() {
						e.input.focus();
						var t = void 0;
						t = e.reason === a.PasswordResponses.INCORRECT_PASSWORD ? e.l10n.get("password_invalid", null, "Invalid password. Please try again.") : e.l10n.get("password_label", null, "Enter the password to open this PDF file."), t.then(function(t) {
							e.label.textContent = t
						})
					})
				}
			}, {
				key: "close",
				value: function() {
					var e = this;
					this.overlayManager.close(this.overlayName).then(function() {
						e.input.value = ""
					})
				}
			}, {
				key: "verify",
				value: function() {
					var e = this.input.value;
					return e && e.length > 0 ? (this.close(), this.updateCallback(e)) : void 0
				}
			}, {
				key: "setUpdateCallback",
				value: function(e, t) {
					this.updateCallback = e, this.reason = t
				}
			}]), e
		}();
	t.PasswordPrompt = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFAttachmentViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(1),
		a = function() {
			function e(t) {
				var n = t.container,
					i = t.eventBus,
					o = t.downloadManager;
				r(this, e), this.container = n, this.eventBus = i, this.downloadManager = o, this.reset(), this.eventBus.on("fileattachmentannotation", this._appendAttachment.bind(this))
			}
			return i(e, [{
				key: "reset",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
					this.attachments = null, this.container.textContent = "", e || (this._renderedCapability = (0, o.createPromiseCapability)())
				}
			}, {
				key: "_dispatchEvent",
				value: function(e) {
					this._renderedCapability.resolve(), this.eventBus.dispatch("attachmentsloaded", {
						source: this,
						attachmentsCount: e
					})
				}
			}, {
				key: "_bindPdfLink",
				value: function(e, t, n) {
					if (o.PDFJS.disableCreateObjectURL) throw new Error('bindPdfLink: Unsupported "PDFJS.disableCreateObjectURL" value.');
					var r = void 0;
					e.onclick = function() {
						r || (r = (0, o.createObjectURL)(t, "application/pdf"));
						var e = void 0;
						return e = "?file=" + encodeURIComponent(r + "#" + n), window.open(e), !1
					}
				}
			}, {
				key: "_bindLink",
				value: function(e, t, n) {
					var r = this;
					e.onclick = function() {
						return r.downloadManager.downloadData(t, n, ""), !1
					}
				}
			}, {
				key: "render",
				value: function(e) {
					var t = e.attachments,
						n = e.keepRenderedCapability,
						r = void 0 === n ? !1 : n,
						i = 0;
					if (this.attachments && this.reset(r === !0), this.attachments = t || null, !t) return void this._dispatchEvent(i);
					var a = Object.keys(t).sort(function(e, t) {
						return e.toLowerCase().localeCompare(t.toLowerCase())
					});
					i = a.length;
					for (var s = 0; i > s; s++) {
						var l = t[a[s]],
							u = (0, o.removeNullCharacters)((0, o.getFilenameFromUrl)(l.filename)),
							c = document.createElement("div");
						c.className = "attachmentsItem";
						var d = document.createElement("button");
						d.textContent = u, /\.pdf$/i.test(u) && !o.PDFJS.disableCreateObjectURL ? this._bindPdfLink(d, l.content, u) : this._bindLink(d, l.content, u), c.appendChild(d), this.container.appendChild(c)
					}
					this._dispatchEvent(i)
				}
			}, {
				key: "_appendAttachment",
				value: function(e) {
					var t = this,
						n = e.id,
						r = e.filename,
						i = e.content;
					this._renderedCapability.promise.then(function() {
						var e = t.attachments;
						if (e) {
							for (var o in e) if (n === o) return
						} else e = Object.create(null);
						e[n] = {
							filename: r,
							content: i
						}, t.render({
							attachments: e,
							keepRenderedCapability: !0
						})
					})
				}
			}]), e
		}();
	t.PDFAttachmentViewer = a
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFDocumentProperties = void 0;
	var i = function() {
			function e(e, t) {
				var n = [],
					r = !0,
					i = !1,
					o = void 0;
				try {
					for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
				} catch (l) {
					i = !0, o = l
				} finally {
					try {
						!r && s["return"] && s["return"]()
					} finally {
						if (i) throw o
					}
				}
				return n
			}
			return function(t, n) {
				if (Array.isArray(t)) return t;
				if (Symbol.iterator in Object(t)) return e(t, n);
				throw new TypeError("Invalid attempt to destructure non-iterable instance")
			}
		}(),
		o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		a = n(0),
		s = n(1),
		l = "-",
		u = function() {
			function e(t, n) {
				var i = t.overlayName,
					o = t.fields,
					s = t.container,
					l = t.closeButton,
					u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a.NullL10n;
				r(this, e), this.overlayName = i, this.fields = o, this.container = s, this.overlayManager = n, this.l10n = u, this._reset(), l && l.addEventListener("click", this.close.bind(this)), this.overlayManager.register(this.overlayName, this.container, this.close.bind(this))
			}
			return o(e, [{
				key: "open",
				value: function() {
					var e = this,
						t = function(t) {
							Object.defineProperty(e, "fieldData", {
								value: Object.freeze(t),
								writable: !1,
								enumerable: !0,
								configurable: !0
							})
						};
					Promise.all([this.overlayManager.open(this.overlayName), this._dataAvailableCapability.promise]).then(function() {
						return e.fieldData ? void e._updateUI() : void e.pdfDocument.getMetadata().then(function(t) {
							var n = t.info,
								r = t.metadata;
							return Promise.all([n, r, e._parseFileSize(e.maybeFileSize), e._parseDate(n.CreationDate), e._parseDate(n.ModDate)])
						}).then(function(n) {
							var r = i(n, 5),
								o = r[0],
								s = (r[1], r[2]),
								l = r[3],
								u = r[4];
							return t({
								fileName: (0, a.getPDFFileNameFromURL)(e.url),
								fileSize: s,
								title: o.Title,
								author: o.Author,
								subject: o.Subject,
								keywords: o.Keywords,
								creationDate: l,
								modificationDate: u,
								creator: o.Creator,
								producer: o.Producer,
								version: o.PDFFormatVersion,
								pageCount: e.pdfDocument.numPages
							}), e._updateUI(), e.pdfDocument.getDownloadInfo()
						}).then(function(t) {
							var n = t.length;
							return e._parseFileSize(n)
						}).then(function(n) {
							var r = (0, a.cloneObj)(e.fieldData);
							r.fileSize = n, t(r), e._updateUI()
						})
					})
				}
			}, {
				key: "close",
				value: function() {
					this.overlayManager.close(this.overlayName)
				}
			}, {
				key: "setDocument",
				value: function(e, t) {
					this.pdfDocument && (this._reset(), this._updateUI(!0)), e && (this.pdfDocument = e, this.url = t, this._dataAvailableCapability.resolve())
				}
			}, {
				key: "setFileSize",
				value: function(e) {
					"number" == typeof e && e > 0 && (this.maybeFileSize = e)
				}
			}, {
				key: "_reset",
				value: function() {
					this.pdfDocument = null, this.url = null, this.maybeFileSize = 0, delete this.fieldData, this._dataAvailableCapability = (0, s.createPromiseCapability)()
				}
			}, {
				key: "_updateUI",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
					if (!e && this.fieldData) {
						if (this.overlayManager.active === this.overlayName) for (var t in this.fields) {
							var n = this.fieldData[t];
							this.fields[t].textContent = n || 0 === n ? n : l
						}
					} else for (var r in this.fields) this.fields[r].textContent = l
				}
			}, {
				key: "_parseFileSize",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
						t = e / 1024;
					return t ? 1024 > t ? this.l10n.get("document_properties_kb", {
						size_kb: (+t.toPrecision(3)).toLocaleString(),
						size_b: e.toLocaleString()
					}, "{{size_kb}} KB ({{size_b}} bytes)") : this.l10n.get("document_properties_mb", {
						size_mb: (+(t / 1024).toPrecision(3)).toLocaleString(),
						size_b: e.toLocaleString()
					}, "{{size_mb}} MB ({{size_b}} bytes)") : Promise.resolve(void 0)
				}
			}, {
				key: "_parseDate",
				value: function(e) {
					if (e) {
						var t = e;
						"D:" === t.substring(0, 2) && (t = t.substring(2));
						var n = parseInt(t.substring(0, 4), 10),
							r = parseInt(t.substring(4, 6), 10) - 1,
							i = parseInt(t.substring(6, 8), 10),
							o = parseInt(t.substring(8, 10), 10),
							a = parseInt(t.substring(10, 12), 10),
							s = parseInt(t.substring(12, 14), 10),
							l = t.substring(14, 15),
							u = parseInt(t.substring(15, 17), 10),
							c = parseInt(t.substring(18, 20), 10);
						"-" === l ? (o += u, a += c) : "+" === l && (o -= u, a -= c);
						var d = new Date(Date.UTC(n, r, i, o, a, s)),
							h = d.toLocaleDateString(),
							f = d.toLocaleTimeString();
						return this.l10n.get("document_properties_date_string", {
							date: h,
							time: f
						}, "{{date}}, {{time}}")
					}
				}
			}]), e
		}();
	t.PDFDocumentProperties = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFFindBar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(9),
		a = n(0),
		s = function() {
			function e(t) {
				var n = this,
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.NullL10n;
				if (r(this, e), this.opened = !1, this.bar = t.bar || null, this.toggleButton = t.toggleButton || null, this.findField = t.findField || null, this.highlightAll = t.highlightAllCheckbox || null, this.caseSensitive = t.caseSensitiveCheckbox || null, this.findMsg = t.findMsg || null, this.findResultsCount = t.findResultsCount || null, this.findStatusIcon = t.findStatusIcon || null, this.findPreviousButton = t.findPreviousButton || null, this.findNextButton = t.findNextButton || null, this.findController = t.findController || null, this.labelingButton = t.labelingButton || null, this.unLabelingButton = t.unLabelingButton || null, this.eventBus = t.eventBus, this.l10n = i, null === this.findController) throw new Error("PDFFindBar cannot be used without a PDFFindController instance.");
				this.toggleButton.addEventListener("click", function() {
					n.toggle()
				}), this.findField.addEventListener("input", function() {
					n.dispatchEvent("")
				}), this.bar.addEventListener("keydown", function(e) {
					switch (e.keyCode) {
					case 13:
						e.target === n.findField && n.dispatchEvent("again", e.shiftKey);
						break;
					case 27:
						n.close()
					}
				}), this.findPreviousButton.addEventListener("click", function() {
					n.dispatchEvent("again", !0)
				}), this.findNextButton.addEventListener("click", function() {
					n.dispatchEvent("again", !1)
				}), this.highlightAll.addEventListener("click", function() {
					n.dispatchEvent("highlightallchange")
				}), this.caseSensitive.addEventListener("click", function() {
					n.dispatchEvent("casesensitivitychange")
				}), this.labelingButton.addEventListener("click", function() {
					n.labelDispatchEvent("labeling", !0)
				}), this.unLabelingButton.addEventListener("click", function() {
					n.labelDispatchEvent("labeling", !1)
				}), this.eventBus.on("resize", this._adjustWidth.bind(this))
			}
			return i(e, [{
				key: "reset",
				value: function() {
					this.updateUIState()
				}
			}, {
				key: "exportDispatchEvent",
				value: function() {
					return this.dispatchEventl
				}
			}, {
				key: "labelDispatchEvent",
				value: function(e, t) {
					this.eventBus.dispatch("labeling", {
						source: this,
						type: e,
						selection: window.getSelection(),
						ifLabeling: t
					})
				}
			}, {
				key: "dispatchEvent",
				value: function(e, t) {
					this.eventBus.dispatch("find", {
						source: this,
						type: e,
						query: this.findField.value,
						caseSensitive: this.caseSensitive.checked,
						phraseSearch: !0,
						highlightAll: this.highlightAll.checked,
						findPrevious: t
					})
				}
			}, {
				key: "updateUIState",
				value: function(e, t, n) {
					var r = this,
						i = !1,
						a = "",
						s = "";
					switch (e) {
					case o.FindState.FOUND:
						break;
					case o.FindState.PENDING:
						s = "pending";
						break;
					case o.FindState.NOT_FOUND:
						a = this.l10n.get("find_not_found", null, "Phrase not found"), i = !0;
						break;
					case o.FindState.WRAPPED:
						a = t ? this.l10n.get("find_reached_top", null, "Reached top of document, continued from bottom") : this.l10n.get("find_reached_bottom", null, "Reached end of document, continued from top")
					}
					i ? this.findField.classList.add("notFound") : this.findField.classList.remove("notFound"), this.findField.setAttribute("data-status", s), Promise.resolve(a).then(function(e) {
						r.findMsg.textContent = e, r._adjustWidth()
					}), this.updateResultsCount(n)
				}
			}, {
				key: "updateResultsCount",
				value: function(e) {
					this.findResultsCount && (e ? (this.findResultsCount.textContent = e.toLocaleString(), this.findResultsCount.classList.remove("hidden")) : (this.findResultsCount.classList.add("hidden"), this.findResultsCount.textContent = ""), this._adjustWidth())
				}
			}, {
				key: "open",
				value: function() {
					this.opened || (this.opened = !0, this.toggleButton.classList.add("toggled"), this.bar.classList.remove("hidden")), this.findField.select(), this.findField.focus(), this._adjustWidth()
				}
			}, {
				key: "close",
				value: function() {
					this.opened && (this.opened = !1, this.toggleButton.classList.remove("toggled"), this.bar.classList.add("hidden"), this.findController.active = !1)
				}
			}, {
				key: "toggle",
				value: function() {
					this.opened ? this.close() : this.open()
				}
			}, {
				key: "_adjustWidth",
				value: function() {
					if (this.opened) {
						this.bar.classList.remove("wrapContainers");
						var e = this.bar.clientHeight,
							t = this.bar.firstElementChild.clientHeight;
						e > t && this.bar.classList.add("wrapContainers")
					}
				}
			}]), e
		}();
	t.PDFFindBar = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i() {
		return document.location.hash
	}
	function o(e) {
		var t = unescape(i()).substring(1),
			n = (0, c.parseQueryString)(t),
			r = 0 | n.page;
		return Number.isInteger(r) && r > 0 && r <= e.pagesCount || (r = null), {
			hash: t,
			page: r,
			rotation: e.rotation
		}
	}
	function a(e, t) {
		if ("string" != typeof e || "string" != typeof t) return !1;
		if (e === t) return !0;
		var n = (0, c.parseQueryString)(e),
			r = n.nameddest;
		return r === t ? !0 : !1
	}
	function s(e, t) {
		function n(e, t) {
			if (("undefined" == typeof e ? "undefined" : l(e)) !== ("undefined" == typeof t ? "undefined" : l(t))) return !1;
			if (e instanceof Array || t instanceof Array) return !1;
			if (null !== e && "object" === ("undefined" == typeof e ? "undefined" : l(e)) && null !== t) {
				if (Object.keys(e).length !== Object.keys(t).length) return !1;
				for (var r in e) if (!n(e[r], t[r])) return !1;
				return !0
			}
			return e === t || Number.isNaN(e) && Number.isNaN(t)
		}
		if (!(e instanceof Array && t instanceof Array)) return !1;
		if (e.length !== t.length) return !1;
		for (var r = 0, i = e.length; i > r; r++) if (!n(e[r], t[r])) return !1;
		return !0
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.isDestArraysEqual = t.isDestHashesEqual = t.PDFHistory = void 0;
	var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	}, u = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t
		}
	}(), c = n(0), d = n(2), h = 1e3, f = 50, p = 1e3, g = function() {
		function e(t) {
			var n = this,
				i = t.linkService,
				o = t.eventBus;
			r(this, e), this.linkService = i, this.eventBus = o || (0, d.getGlobalEventBus)(), this.initialized = !1, this.initialBookmark = null, this.initialRotation = null, this._boundEvents = Object.create(null), this._isViewerInPresentationMode = !1, this._isPagesLoaded = !1, this.eventBus.on("presentationmodechanged", function(e) {
				n._isViewerInPresentationMode = e.active || e.switchInProgress
			}), this.eventBus.on("pagesloaded", function(e) {
				n._isPagesLoaded = !! e.pagesCount
			})
		}
		return u(e, [{
			key: "initialize",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
				if (!e || "string" != typeof e) return void console.error('PDFHistory.initialize: The "fingerprint" must be a non-empty string.');
				var n = this.initialized && this.fingerprint !== e;
				this.fingerprint = e, this.initialized || this._bindEvents();
				var r = window.history.state;
				if (this.initialized = !0, this.initialBookmark = null, this.initialRotation = null, this._popStateInProgress = !1, this._blockHashChange = 0, this._currentHash = i(), this._numPositionUpdates = 0, this._uid = this._maxUid = 0, this._destination = null, this._position = null, !this._isValidState(r) || t) {
					var a = o(this.linkService),
						s = a.hash,
						l = a.page,
						u = a.rotation;
					return !s || n || t ? void this._pushOrReplaceState(null, !0) : void this._pushOrReplaceState({
						hash: s,
						page: l,
						rotation: u
					}, !0)
				}
				var c = r.destination;
				this._updateInternalState(c, r.uid, !0), void 0 !== c.rotation && (this.initialRotation = c.rotation), c.dest ? (this.initialBookmark = JSON.stringify(c.dest), this._destination.page = null) : c.hash ? this.initialBookmark = c.hash : c.page && (this.initialBookmark = "page=" + c.page)
			}
		}, {
			key: "push",
			value: function(e) {
				var t = this,
					n = e.namedDest,
					r = e.explicitDest,
					i = e.pageNumber;
				if (this.initialized) {
					if (n && "string" != typeof n || !(r instanceof Array) || !(Number.isInteger(i) && i > 0 && i <= this.linkService.pagesCount)) return void console.error("PDFHistory.push: Invalid parameters.");
					var o = n || JSON.stringify(r);
					if (o) {
						var l = !1;
						if (this._destination && (a(this._destination.hash, o) || s(this._destination.dest, r))) {
							if (this._destination.page) return;
							l = !0
						}(!this._popStateInProgress || l) && (this._pushOrReplaceState({
							dest: r,
							hash: o,
							page: i,
							rotation: this.linkService.rotation
						}, l), this._popStateInProgress || (this._popStateInProgress = !0, Promise.resolve().then(function() {
							t._popStateInProgress = !1
						})))
					}
				}
			}
		}, {
			key: "pushCurrentPosition",
			value: function() {
				this.initialized && !this._popStateInProgress && this._tryPushCurrentPosition()
			}
		}, {
			key: "back",
			value: function() {
				if (this.initialized && !this._popStateInProgress) {
					var e = window.history.state;
					this._isValidState(e) && e.uid > 0 && window.history.back()
				}
			}
		}, {
			key: "forward",
			value: function() {
				if (this.initialized && !this._popStateInProgress) {
					var e = window.history.state;
					this._isValidState(e) && e.uid < this._maxUid && window.history.forward()
				}
			}
		}, {
			key: "_pushOrReplaceState",
			value: function(e) {
				var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
					n = t || !this._destination,
					r = {
						fingerprint: this.fingerprint,
						uid: n ? this._uid : this._uid + 1,
						destination: e
					};
				this._updateInternalState(e, r.uid), n ? window.history.replaceState(r, "", document.URL) : (this._maxUid = this._uid, window.history.pushState(r, "", document.URL))
			}
		}, {
			key: "_tryPushCurrentPosition",
			value: function() {
				var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
				if (this._position) {
					var t = this._position;
					if (e && (t = (0, c.cloneObj)(this._position), t.temporary = !0), !this._destination) return void this._pushOrReplaceState(t);
					if (this._destination.temporary) return void this._pushOrReplaceState(t, !0);
					if (this._destination.hash !== t.hash && (this._destination.page || !(0 >= f || this._numPositionUpdates <= f))) {
						var n = !1;
						if (this._destination.page === t.first || this._destination.page === t.page) {
							if (this._destination.dest || !this._destination.first) return;
							n = !0
						}
						this._pushOrReplaceState(t, n)
					}
				}
			}
		}, {
			key: "_isValidState",
			value: function(e) {
				return e ? e.fingerprint !== this.fingerprint ? !1 : !Number.isInteger(e.uid) || e.uid < 0 ? !1 : null === e.destination || "object" !== l(e.destination) ? !1 : !0 : !1
			}
		}, {
			key: "_updateInternalState",
			value: function(e, t) {
				var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1;
				this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), n && e && e.temporary && delete e.temporary, this._destination = e, this._uid = t, this._numPositionUpdates = 0
			}
		}, {
			key: "_updateViewarea",
			value: function(e) {
				var t = this,
					n = e.location;
				this._updateViewareaTimeout && (clearTimeout(this._updateViewareaTimeout), this._updateViewareaTimeout = null), this._position = {
					hash: this._isViewerInPresentationMode ? "page=" + n.pageNumber : n.pdfOpenParams.substring(1),
					page: this.linkService.page,
					first: n.pageNumber,
					rotation: n.rotation
				}, this._popStateInProgress || (f > 0 && this._isPagesLoaded && this._destination && !this._destination.page && this._numPositionUpdates++, p > 0 && (this._updateViewareaTimeout = setTimeout(function() {
					t._popStateInProgress || t._tryPushCurrentPosition(!0), t._updateViewareaTimeout = null
				}, p)))
			}
		}, {
			key: "_popState",
			value: function(e) {
				var t = this,
					n = e.state,
					r = i(),
					a = this._currentHash !== r;
				if (this._currentHash = r, !n) {
					this._uid++;
					var s = o(this.linkService),
						l = s.hash,
						u = s.page,
						d = s.rotation;
					return void this._pushOrReplaceState({
						hash: l,
						page: u,
						rotation: d
					}, !0)
				}
				if (this._isValidState(n)) {
					this._popStateInProgress = !0, a && (this._blockHashChange++, (0, c.waitOnEventOrTimeout)({
						target: window,
						name: "hashchange",
						delay: h
					}).then(function() {
						t._blockHashChange--
					}));
					var f = n.destination;
					this._updateInternalState(f, n.uid, !0), (0, c.isValidRotation)(f.rotation) && (this.linkService.rotation = f.rotation), f.dest ? this.linkService.navigateTo(f.dest) : f.hash ? this.linkService.setHash(f.hash) : f.page && (this.linkService.page = f.page), Promise.resolve().then(function() {
						t._popStateInProgress = !1
					})
				}
			}
		}, {
			key: "_bindEvents",
			value: function() {
				var e = this,
					t = this._boundEvents,
					n = this.eventBus;
				t.updateViewarea = this._updateViewarea.bind(this), t.popState = this._popState.bind(this), t.pageHide = function(t) {
					e._destination || e._tryPushCurrentPosition()
				}, n.on("updateviewarea", t.updateViewarea), window.addEventListener("popstate", t.popState), window.addEventListener("pagehide", t.pageHide)
			}
		}, {
			key: "popStateInProgress",
			get: function() {
				return this.initialized && (this._popStateInProgress || this._blockHashChange > 0)
			}
		}]), e
	}();
	t.PDFHistory = g, t.isDestHashesEqual = a, t.isDestArraysEqual = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFOutlineViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(1),
		a = "–",
		s = function() {
			function e(t) {
				var n = t.container,
					i = t.linkService,
					o = t.eventBus;
				r(this, e), this.container = n, this.linkService = i, this.eventBus = o, this.reset()
			}
			return i(e, [{
				key: "reset",
				value: function() {
					this.outline = null, this.lastToggleIsShow = !0, this.container.textContent = "", this.container.classList.remove("outlineWithDeepNesting")
				}
			}, {
				key: "_dispatchEvent",
				value: function(e) {
					this.eventBus.dispatch("outlineloaded", {
						source: this,
						outlineCount: e
					})
				}
			}, {
				key: "_bindLink",
				value: function(e, t) {
					var n = this;
					if (t.url) return void(0, o.addLinkAttributes)(e, {
						url: t.url,
						target: t.newWindow ? o.PDFJS.LinkTarget.BLANK : void 0
					});
					var r = t.dest;
					e.href = this.linkService.getDestinationHash(r), e.onclick = function() {
						return r && n.linkService.navigateTo(r), !1
					}
				}
			}, {
				key: "_setStyles",
				value: function(e, t) {
					var n = "";
					t.bold && (n += "font-weight: bold;"), t.italic && (n += "font-style: italic;"), n && e.setAttribute("style", n)
				}
			}, {
				key: "_addToggleButton",
				value: function(e) {
					var t = this,
						n = document.createElement("div");
					n.className = "outlineItemToggler", n.onclick = function(r) {
						if (r.stopPropagation(), n.classList.toggle("outlineItemsHidden"), r.shiftKey) {
							var i = !n.classList.contains("outlineItemsHidden");
							t._toggleOutlineItem(e, i)
						}
					}, e.insertBefore(n, e.firstChild)
				}
			}, {
				key: "_toggleOutlineItem",
				value: function(e, t) {
					this.lastToggleIsShow = t;
					for (var n = e.querySelectorAll(".outlineItemToggler"), r = 0, i = n.length; i > r; ++r) n[r].classList[t ? "remove" : "add"]("outlineItemsHidden")
				}
			}, {
				key: "toggleOutlineTree",
				value: function() {
					this.outline && this._toggleOutlineItem(this.container, !this.lastToggleIsShow)
				}
			}, {
				key: "render",
				value: function(e) {
					var t = e.outline,
						n = 0;
					if (this.outline && this.reset(), this.outline = t || null, !t) return void this._dispatchEvent(n);
					for (var r = document.createDocumentFragment(), i = [{
						parent: r,
						items: this.outline
					}], s = !1; i.length > 0;) for (var l = i.shift(), u = 0, c = l.items.length; c > u; u++) {
						var d = l.items[u],
							h = document.createElement("div");
						h.className = "outlineItem";
						var f = document.createElement("a");
						if (this._bindLink(f, d), this._setStyles(f, d), f.textContent = (0, o.removeNullCharacters)(d.title) || a, h.appendChild(f), d.items.length > 0) {
							s = !0, this._addToggleButton(h);
							var p = document.createElement("div");
							p.className = "outlineItems", h.appendChild(p), i.push({
								parent: p,
								items: d.items
							})
						}
						l.parent.appendChild(h), n++
					}
					s && this.container.classList.add("outlineWithDeepNesting"), this.container.appendChild(r), this._dispatchEvent(n)
				}
			}]), e
		}();
	t.PDFOutlineViewer = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPresentationMode = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = 1500,
		s = 3e3,
		l = "pdfPresentationMode",
		u = "pdfPresentationModeControls",
		c = 50,
		d = .1,
		h = 50,
		f = Math.PI / 6,
		p = function() {
			function e(t) {
				var n = this,
					i = t.container,
					o = t.viewer,
					a = void 0 === o ? null : o,
					s = t.pdfViewer,
					l = t.eventBus,
					u = t.contextMenuItems,
					c = void 0 === u ? null : u;
				r(this, e), this.container = i, this.viewer = a || i.firstElementChild, this.pdfViewer = s, this.eventBus = l, this.active = !1, this.args = null, this.contextMenuOpen = !1, this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0, this.touchSwipeState = null, c && (c.contextFirstPage.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("firstpage")
				}), c.contextLastPage.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("lastpage")
				}), c.contextPageRotateCw.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("rotatecw")
				}), c.contextPageRotateCcw.addEventListener("click", function() {
					n.contextMenuOpen = !1, n.eventBus.dispatch("rotateccw")
				}))
			}
			return i(e, [{
				key: "request",
				value: function() {
					if (this.switchInProgress || this.active || !this.viewer.hasChildNodes()) return !1;
					if (this._addFullscreenChangeListeners(), this._setSwitchInProgress(), this._notifyStateChange(), this.container.requestFullscreen) this.container.requestFullscreen();
					else if (this.container.mozRequestFullScreen) this.container.mozRequestFullScreen();
					else if (this.container.webkitRequestFullscreen) this.container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
					else {
						if (!this.container.msRequestFullscreen) return !1;
						this.container.msRequestFullscreen()
					}
					return this.args = {
						page: this.pdfViewer.currentPageNumber,
						previousScale: this.pdfViewer.currentScaleValue
					}, !0
				}
			}, {
				key: "_mouseWheel",
				value: function(e) {
					if (this.active) {
						e.preventDefault();
						var t = (0, o.normalizeWheelEventDelta)(e),
							n = (new Date).getTime(),
							r = this.mouseScrollTimeStamp;
						if (!(n > r && c > n - r) && ((this.mouseScrollDelta > 0 && 0 > t || this.mouseScrollDelta < 0 && t > 0) && this._resetMouseScrollState(), this.mouseScrollDelta += t, Math.abs(this.mouseScrollDelta) >= d)) {
							var i = this.mouseScrollDelta;
							this._resetMouseScrollState();
							var a = i > 0 ? this._goToPreviousPage() : this._goToNextPage();
							a && (this.mouseScrollTimeStamp = n)
						}
					}
				}
			}, {
				key: "_goToPreviousPage",
				value: function() {
					var e = this.pdfViewer.currentPageNumber;
					return 1 >= e ? !1 : (this.pdfViewer.currentPageNumber = e - 1, !0)
				}
			}, {
				key: "_goToNextPage",
				value: function() {
					var e = this.pdfViewer.currentPageNumber;
					return e >= this.pdfViewer.pagesCount ? !1 : (this.pdfViewer.currentPageNumber = e + 1, !0)
				}
			}, {
				key: "_notifyStateChange",
				value: function() {
					this.eventBus.dispatch("presentationmodechanged", {
						source: this,
						active: this.active,
						switchInProgress: !! this.switchInProgress
					})
				}
			}, {
				key: "_setSwitchInProgress",
				value: function() {
					var e = this;
					this.switchInProgress && clearTimeout(this.switchInProgress), this.switchInProgress = setTimeout(function() {
						e._removeFullscreenChangeListeners(), delete e.switchInProgress, e._notifyStateChange()
					}, a)
				}
			}, {
				key: "_resetSwitchInProgress",
				value: function() {
					this.switchInProgress && (clearTimeout(this.switchInProgress), delete this.switchInProgress)
				}
			}, {
				key: "_enter",
				value: function() {
					var e = this;
					this.active = !0, this._resetSwitchInProgress(), this._notifyStateChange(), this.container.classList.add(l), setTimeout(function() {
						e.pdfViewer.currentPageNumber = e.args.page, e.pdfViewer.currentScaleValue = "page-fit"
					}, 0), this._addWindowListeners(), this._showControls(), this.contextMenuOpen = !1, this.container.setAttribute("contextmenu", "viewerContextMenu"), window.getSelection().removeAllRanges()
				}
			}, {
				key: "_exit",
				value: function() {
					var e = this,
						t = this.pdfViewer.currentPageNumber;
					this.container.classList.remove(l), setTimeout(function() {
						e.active = !1, e._removeFullscreenChangeListeners(), e._notifyStateChange(), e.pdfViewer.currentScaleValue = e.args.previousScale, e.pdfViewer.currentPageNumber = t, e.args = null
					}, 0), this._removeWindowListeners(), this._hideControls(), this._resetMouseScrollState(), this.container.removeAttribute("contextmenu"), this.contextMenuOpen = !1
				}
			}, {
				key: "_mouseDown",
				value: function(e) {
					if (this.contextMenuOpen) return this.contextMenuOpen = !1, void e.preventDefault();
					if (0 === e.button) {
						var t = e.target.href && e.target.classList.contains("internalLink");
						t || (e.preventDefault(), e.shiftKey ? this._goToPreviousPage() : this._goToNextPage())
					}
				}
			}, {
				key: "_contextMenu",
				value: function() {
					this.contextMenuOpen = !0
				}
			}, {
				key: "_showControls",
				value: function() {
					var e = this;
					this.controlsTimeout ? clearTimeout(this.controlsTimeout) : this.container.classList.add(u), this.controlsTimeout = setTimeout(function() {
						e.container.classList.remove(u), delete e.controlsTimeout
					}, s)
				}
			}, {
				key: "_hideControls",
				value: function() {
					this.controlsTimeout && (clearTimeout(this.controlsTimeout), this.container.classList.remove(u), delete this.controlsTimeout)
				}
			}, {
				key: "_resetMouseScrollState",
				value: function() {
					this.mouseScrollTimeStamp = 0, this.mouseScrollDelta = 0
				}
			}, {
				key: "_touchSwipe",
				value: function(e) {
					if (this.active) {
						if (e.touches.length > 1) return void(this.touchSwipeState = null);
						switch (e.type) {
						case "touchstart":
							this.touchSwipeState = {
								startX: e.touches[0].pageX,
								startY: e.touches[0].pageY,
								endX: e.touches[0].pageX,
								endY: e.touches[0].pageY
							};
							break;
						case "touchmove":
							if (null === this.touchSwipeState) return;
							this.touchSwipeState.endX = e.touches[0].pageX, this.touchSwipeState.endY = e.touches[0].pageY, e.preventDefault();
							break;
						case "touchend":
							if (null === this.touchSwipeState) return;
							var t = 0,
								n = this.touchSwipeState.endX - this.touchSwipeState.startX,
								r = this.touchSwipeState.endY - this.touchSwipeState.startY,
								i = Math.abs(Math.atan2(r, n));
							Math.abs(n) > h && (f >= i || i >= Math.PI - f) ? t = n : Math.abs(r) > h && Math.abs(i - Math.PI / 2) <= f && (t = r), t > 0 ? this._goToPreviousPage() : 0 > t && this._goToNextPage()
						}
					}
				}
			}, {
				key: "_addWindowListeners",
				value: function() {
					this.showControlsBind = this._showControls.bind(this), this.mouseDownBind = this._mouseDown.bind(this), this.mouseWheelBind = this._mouseWheel.bind(this), this.resetMouseScrollStateBind = this._resetMouseScrollState.bind(this), this.contextMenuBind = this._contextMenu.bind(this), this.touchSwipeBind = this._touchSwipe.bind(this), window.addEventListener("mousemove", this.showControlsBind), window.addEventListener("mousedown", this.mouseDownBind), window.addEventListener("wheel", this.mouseWheelBind), window.addEventListener("keydown", this.resetMouseScrollStateBind), window.addEventListener("contextmenu", this.contextMenuBind), window.addEventListener("touchstart", this.touchSwipeBind), window.addEventListener("touchmove", this.touchSwipeBind), window.addEventListener("touchend", this.touchSwipeBind)
				}
			}, {
				key: "_removeWindowListeners",
				value: function() {
					window.removeEventListener("mousemove", this.showControlsBind), window.removeEventListener("mousedown", this.mouseDownBind), window.removeEventListener("wheel", this.mouseWheelBind), window.removeEventListener("keydown", this.resetMouseScrollStateBind), window.removeEventListener("contextmenu", this.contextMenuBind), window.removeEventListener("touchstart", this.touchSwipeBind), window.removeEventListener("touchmove", this.touchSwipeBind), window.removeEventListener("touchend", this.touchSwipeBind), delete this.showControlsBind, delete this.mouseDownBind, delete this.mouseWheelBind, delete this.resetMouseScrollStateBind, delete this.contextMenuBind, delete this.touchSwipeBind
				}
			}, {
				key: "_fullscreenChange",
				value: function() {
					this.isFullscreen ? this._enter() : this._exit()
				}
			}, {
				key: "_addFullscreenChangeListeners",
				value: function() {
					this.fullscreenChangeBind = this._fullscreenChange.bind(this), window.addEventListener("fullscreenchange", this.fullscreenChangeBind), window.addEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.addEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.addEventListener("MSFullscreenChange", this.fullscreenChangeBind)
				}
			}, {
				key: "_removeFullscreenChangeListeners",
				value: function() {
					window.removeEventListener("fullscreenchange", this.fullscreenChangeBind), window.removeEventListener("mozfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("webkitfullscreenchange", this.fullscreenChangeBind), window.removeEventListener("MSFullscreenChange", this.fullscreenChangeBind), delete this.fullscreenChangeBind
				}
			}, {
				key: "isFullscreen",
				get: function() {
					return !!(document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen || document.msFullscreenElement)
				}
			}]), e
		}();
	t.PDFPresentationMode = p
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFThumbnailViewer = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = n(22),
		s = -19,
		l = function() {
			function e(t) {
				var n = t.container,
					i = t.linkService,
					a = t.renderingQueue,
					s = t.l10n,
					l = void 0 === s ? o.NullL10n : s;
				r(this, e), this.container = n, this.linkService = i, this.renderingQueue = a, this.l10n = l, this.scroll = (0, o.watchScroll)(this.container, this._scrollUpdated.bind(this)), this._resetView()
			}
			return i(e, [{
				key: "_scrollUpdated",
				value: function() {
					this.renderingQueue.renderHighestPriority()
				}
			}, {
				key: "getThumbnail",
				value: function(e) {
					return this._thumbnails[e]
				}
			}, {
				key: "_getVisibleThumbs",
				value: function() {
					return (0, o.getVisibleElements)(this.container, this._thumbnails)
				}
			}, {
				key: "scrollThumbnailIntoView",
				value: function(e) {
					var t = document.querySelector(".thumbnail.selected");
					t && t.classList.remove("selected");
					var n = document.querySelector('div.thumbnail[data-page-number="' + e + '"]');
					n && n.classList.add("selected");
					var r = this._getVisibleThumbs(),
						i = r.views.length;
					if (i > 0) {
						var a = r.first.id,
							l = i > 1 ? r.last.id : a;
						(a >= e || e >= l) && (0, o.scrollIntoView)(n, {
							top: s
						})
					}
				}
			}, {
				key: "cleanup",
				value: function() {
					a.PDFThumbnailView.cleanup()
				}
			}, {
				key: "_resetView",
				value: function() {
					this._thumbnails = [], this._pageLabels = null, this._pagesRotation = 0, this._pagesRequests = [], this.container.textContent = ""
				}
			}, {
				key: "setDocument",
				value: function(e) {
					var t = this;
					this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e && e.getPage(1).then(function(n) {
						for (var r = e.numPages, i = n.getViewport(1), o = 1; r >= o; ++o) {
							var s = new a.PDFThumbnailView({
								container: t.container,
								id: o,
								defaultViewport: i.clone(),
								linkService: t.linkService,
								renderingQueue: t.renderingQueue,
								disableCanvasToImageConversion: !1,
								l10n: t.l10n
							});
							t._thumbnails.push(s)
						}
					})["catch"](function(e) {
						console.error("Unable to initialize thumbnail viewer", e)
					})
				}
			}, {
				key: "_cancelRendering",
				value: function() {
					for (var e = 0, t = this._thumbnails.length; t > e; e++) this._thumbnails[e] && this._thumbnails[e].cancelRendering()
				}
			}, {
				key: "setPageLabels",
				value: function(e) {
					if (this.pdfDocument) {
						e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error("PDFThumbnailViewer_setPageLabels: Invalid page labels.")) : this._pageLabels = null;
						for (var t = 0, n = this._thumbnails.length; n > t; t++) {
							var r = this._pageLabels && this._pageLabels[t];
							this._thumbnails[t].setPageLabel(r)
						}
					}
				}
			}, {
				key: "_ensurePdfPageLoaded",
				value: function(e) {
					var t = this;
					if (e.pdfPage) return Promise.resolve(e.pdfPage);
					var n = e.id;
					if (this._pagesRequests[n]) return this._pagesRequests[n];
					var r = this.pdfDocument.getPage(n).then(function(r) {
						return e.setPdfPage(r), t._pagesRequests[n] = null, r
					})["catch"](function(e) {
						console.error("Unable to get page for thumb view", e), t._pagesRequests[n] = null
					});
					return this._pagesRequests[n] = r, r
				}
			}, {
				key: "forceRendering",
				value: function() {
					var e = this,
						t = this._getVisibleThumbs(),
						n = this.renderingQueue.getHighestPriority(t, this._thumbnails, this.scroll.down);
					return n ? (this._ensurePdfPageLoaded(n).then(function() {
						e.renderingQueue.renderView(n)
					}), !0) : !1
				}
			}, {
				key: "pagesRotation",
				get: function() {
					return this._pagesRotation
				},
				set: function(e) {
					if (!(0, o.isValidRotation)(e)) throw new Error("Invalid thumbnails rotation angle.");
					if (this.pdfDocument && this._pagesRotation !== e) {
						this._pagesRotation = e;
						for (var t = 0, n = this._thumbnails.length; n > t; t++) this._thumbnails[t].update(e)
					}
				}
			}]), e
		}();
	t.PDFThumbnailViewer = l
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFThumbnailView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(1),
		a = n(0),
		s = n(3),
		l = 3,
		u = 1,
		c = 98,
		d = function() {
			var e = null;
			return {
				getCanvas: function(t, n) {
					var r = e;
					r || (r = document.createElement("canvas"), e = r), r.width = t, r.height = n, r.mozOpaque = !0;
					var i = r.getContext("2d", {
						alpha: !1
					});
					return i.save(), i.fillStyle = "rgb(255, 255, 255)", i.fillRect(0, 0, t, n), i.restore(), r
				},
				destroyCanvas: function() {
					var t = e;
					t && (t.width = 0, t.height = 0), e = null
				}
			}
		}(),
		h = function() {
			function e(t) {
				var n = t.container,
					i = t.id,
					o = t.defaultViewport,
					l = t.linkService,
					d = t.renderingQueue,
					h = t.disableCanvasToImageConversion,
					f = void 0 === h ? !1 : h,
					p = t.l10n,
					g = void 0 === p ? a.NullL10n : p;
				r(this, e), this.id = i, this.renderingId = "thumbnail" + i, this.pageLabel = null, this.pdfPage = null, this.rotation = 0, this.viewport = o, this.pdfPageRotate = o.rotation, this.linkService = l, this.renderingQueue = d, this.renderTask = null, this.renderingState = s.RenderingStates.INITIAL, this.resume = null, this.disableCanvasToImageConversion = f, this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasWidth = c, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.l10n = g;
				var v = document.createElement("a");
				v.href = l.getAnchorUrl("#page=" + i), this.l10n.get("thumb_page_title", {
					page: i
				}, "Page {{page}}").then(function(e) {
					v.title = e
				}), v.onclick = function() {
					return l.page = i, !1
				}, this.anchor = v;
				var m = document.createElement("div");
				m.className = "thumbnail", m.setAttribute("data-page-number", this.id), this.div = m, 1 === i && m.classList.add("selected");
				var b = document.createElement("div");
				b.className = "thumbnailSelectionRing";
				var y = 2 * u;
				b.style.width = this.canvasWidth + y + "px", b.style.height = this.canvasHeight + y + "px", this.ring = b, m.appendChild(b), v.appendChild(m), n.appendChild(v)
			}
			return i(e, [{
				key: "setPdfPage",
				value: function(e) {
					this.pdfPage = e, this.pdfPageRotate = e.rotate;
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = e.getViewport(1, t), this.reset()
				}
			}, {
				key: "reset",
				value: function() {
					this.cancelRendering(), this.pageWidth = this.viewport.width, this.pageHeight = this.viewport.height, this.pageRatio = this.pageWidth / this.pageHeight, this.canvasHeight = this.canvasWidth / this.pageRatio | 0, this.scale = this.canvasWidth / this.pageWidth, this.div.removeAttribute("data-loaded");
					for (var e = this.ring, t = e.childNodes, n = t.length - 1; n >= 0; n--) e.removeChild(t[n]);
					var r = 2 * u;
					e.style.width = this.canvasWidth + r + "px", e.style.height = this.canvasHeight + r + "px", this.canvas && (this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this.image && (this.image.removeAttribute("src"), delete this.image)
				}
			}, {
				key: "update",
				value: function(e) {
					"undefined" != typeof e && (this.rotation = e);
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = this.viewport.clone({
						scale: 1,
						rotation: t
					}), this.reset()
				}
			}, {
				key: "cancelRendering",
				value: function() {
					this.renderTask && (this.renderTask.cancel(), this.renderTask = null), this.renderingState = s.RenderingStates.INITIAL, this.resume = null
				}
			}, {
				key: "_getPageDrawContext",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
						t = document.createElement("canvas");
					this.canvas = t, t.mozOpaque = !0;
					var n = t.getContext("2d", {
						alpha: !1
					}),
						r = (0, a.getOutputScale)(n);
					return t.width = this.canvasWidth * r.sx | 0, t.height = this.canvasHeight * r.sy | 0, t.style.width = this.canvasWidth + "px", t.style.height = this.canvasHeight + "px", !e && r.scaled && n.scale(r.sx, r.sy), n
				}
			}, {
				key: "_convertCanvasToImage",
				value: function() {
					var e = this;
					if (this.canvas && this.renderingState === s.RenderingStates.FINISHED) {
						var t = this.renderingId,
							n = "thumbnailImage";
						if (this.disableCanvasToImageConversion) return this.canvas.id = t, this.canvas.className = n, this.l10n.get("thumb_page_canvas", {
							page: this.pageId
						}, "Thumbnail of Page {{page}}").then(function(t) {
							e.canvas.setAttribute("aria-label", t)
						}), this.div.setAttribute("data-loaded", !0), void this.ring.appendChild(this.canvas);
						var r = document.createElement("img");
						r.id = t, r.className = n, this.l10n.get("thumb_page_canvas", {
							page: this.pageId
						}, "Thumbnail of Page {{page}}").then(function(e) {
							r.setAttribute("aria-label", e)
						}), r.style.width = this.canvasWidth + "px", r.style.height = this.canvasHeight + "px", r.src = this.canvas.toDataURL(), this.image = r, this.div.setAttribute("data-loaded", !0), this.ring.appendChild(r), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas
					}
				}
			}, {
				key: "draw",
				value: function() {
					var e = this;
					if (this.renderingState !== s.RenderingStates.INITIAL) return console.error("Must be in new state before drawing"), Promise.resolve(void 0);
					this.renderingState = s.RenderingStates.RUNNING;
					var t = (0, o.createPromiseCapability)(),
						n = function(n) {
							return u === e.renderTask && (e.renderTask = null), n instanceof o.RenderingCancelledException ? void t.resolve(void 0) : (e.renderingState = s.RenderingStates.FINISHED, e._convertCanvasToImage(), void(n ? t.reject(n) : t.resolve(void 0)))
						},
						r = this._getPageDrawContext(),
						i = this.viewport.clone({
							scale: this.scale
						}),
						a = function(t) {
							return e.renderingQueue.isHighestPriority(e) ? void t() : (e.renderingState = s.RenderingStates.PAUSED, void(e.resume = function() {
								e.renderingState = s.RenderingStates.RUNNING, t()
							}))
						},
						l = {
							canvasContext: r,
							viewport: i
						},
						u = this.renderTask = this.pdfPage.render(l);
					return u.onContinue = a, u.promise.then(function() {
						n(null)
					}, function(e) {
						n(e)
					}), t.promise
				}
			}, {
				key: "setImage",
				value: function(e) {
					if (this.renderingState === s.RenderingStates.INITIAL) {
						var t = e.canvas;
						if (t) {
							this.pdfPage || this.setPdfPage(e.pdfPage), this.renderingState = s.RenderingStates.FINISHED;
							var n = this._getPageDrawContext(!0),
								r = n.canvas;
							if (t.width <= 2 * r.width) return n.drawImage(t, 0, 0, t.width, t.height, 0, 0, r.width, r.height), void this._convertCanvasToImage();
							for (var i = r.width << l, o = r.height << l, a = d.getCanvas(i, o), u = a.getContext("2d"); i > t.width || o > t.height;) i >>= 1, o >>= 1;
							for (u.drawImage(t, 0, 0, t.width, t.height, 0, 0, i, o); i > 2 * r.width;) u.drawImage(a, 0, 0, i, o, 0, 0, i >> 1, o >> 1), i >>= 1, o >>= 1;
							n.drawImage(a, 0, 0, i, o, 0, 0, r.width, r.height), this._convertCanvasToImage()
						}
					}
				}
			}, {
				key: "setPageLabel",
				value: function(e) {
					var t = this;
					this.pageLabel = "string" == typeof e ? e : null, this.l10n.get("thumb_page_title", {
						page: this.pageId
					}, "Page {{page}}").then(function(e) {
						t.anchor.title = e
					}), this.renderingState === s.RenderingStates.FINISHED && this.l10n.get("thumb_page_canvas", {
						page: this.pageId
					}, "Thumbnail of Page {{page}}").then(function(e) {
						t.image ? t.image.setAttribute("aria-label", e) : t.disableCanvasToImageConversion && t.canvas && t.canvas.setAttribute("aria-label", e)
					})
				}
			}, {
				key: "pageId",
				get: function() {
					return null !== this.pageLabel ? this.pageLabel : this.id
				}
			}], [{
				key: "cleanup",
				value: function() {
					d.destroyCanvas()
				}
			}]), e
		}();
	t.PDFThumbnailView = h
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFViewer = void 0;
	var a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		s = n(0),
		l = n(24),
		u = n(1),
		c = function(e) {
			function t() {
				return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return o(t, e), a(t, [{
				key: "_scrollIntoView",
				value: function(e) {
					var t = e.pageDiv,
						n = e.pageSpot,
						r = void 0 === n ? null : n;
					(0, s.scrollIntoView)(t, r)
				}
			}, {
				key: "_getVisiblePages",
				value: function() {
					if (!this.isInPresentationMode) return (0, s.getVisibleElements)(this.container, this._pages, !0);
					var e = this._pages[this._currentPageNumber - 1],
						t = [{
							id: e.id,
							view: e
						}];
					return {
						first: e,
						last: e,
						views: t
					}
				}
			}, {
				key: "update",
				value: function() {
					var e = this._getVisiblePages(),
						t = e.views,
						n = t.length;
					if (0 !== n) {
						this._resizeBuffer(n), this.renderingQueue.renderHighestPriority(e);
						for (var r = this._currentPageNumber, i = !1, o = 0; n > o; ++o) {
							var a = t[o];
							if (a.percent < 100) break;
							if (a.id === r) {
								i = !0;
								break
							}
						}
						i || (r = t[0].id), this.isInPresentationMode || this._setCurrentPageNumber(r), this._updateLocation(e.first), this.eventBus.dispatch("updateviewarea", {
							source: this,
							location: this._location
						})
					}
				}
			}, {
				key: "_setDocumentViewerElement",
				get: function() {
					return (0, u.shadow)(this, "_setDocumentViewerElement", this.viewer)
				}
			}]), t
		}(l.BaseViewer);
	t.PDFViewer = c
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e) {
		var t = [];
		this.push = function(n) {
			var r = t.indexOf(n);
			r >= 0 && t.splice(r, 1), t.push(n), t.length > e && t.shift().destroy()
		}, this.resize = function(n) {
			for (e = n; t.length > e;) t.shift().destroy()
		}
	}
	function o(e, t) {
		return t === e ? !0 : Math.abs(t - e) < 1e-15 ? !0 : !1
	}
	function a(e) {
		return e.width <= e.height
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BaseViewer = void 0;
	var s = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		l = n(1),
		u = n(0),
		c = n(3),
		d = n(25),
		h = n(2),
		f = n(26),
		p = n(7),
		g = n(27),
		v = 10,
		m = function() {
			function e(t) {
				if (r(this, e), this.constructor === e) throw new Error("Cannot initialize BaseViewer.");
				this._name = this.constructor.name, this.container = t.container, this.viewer = t.viewer || t.container.firstElementChild, this.eventBus = t.eventBus || (0, h.getGlobalEventBus)(), this.linkService = t.linkService || new p.SimpleLinkService, this.downloadManager = t.downloadManager || null, this.removePageBorders = t.removePageBorders || !1, this.enhanceTextSelection = t.enhanceTextSelection || !1, this.renderInteractiveForms = t.renderInteractiveForms || !1, this.enablePrintAutoRotate = t.enablePrintAutoRotate || !1, this.renderer = t.renderer || u.RendererType.CANVAS, this.l10n = t.l10n || u.NullL10n, this.defaultRenderingQueue = !t.renderingQueue, this.defaultRenderingQueue ? (this.renderingQueue = new c.PDFRenderingQueue, this.renderingQueue.setViewer(this)) : this.renderingQueue = t.renderingQueue, this.scroll = (0, u.watchScroll)(this.container, this._scrollUpdate.bind(this)), this.presentationModeState = u.PresentationModeState.UNKNOWN, this._resetView(), this.removePageBorders && this.viewer.classList.add("removePageBorders")
			}
			return s(e, [{
				key: "getPageView",
				value: function(e) {
					return this._pages[e]
				}
			}, {
				key: "_setCurrentPageNumber",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
					if (this._currentPageNumber === e) return void(t && this._resetCurrentPageView());
					if (!(e > 0 && e <= this.pagesCount)) return void console.error(this._name + '._setCurrentPageNumber: "' + e + '" is out of bounds.');
					var n = {
						source: this,
						pageNumber: e,
						pageLabel: this._pageLabels && this._pageLabels[e - 1]
					};
					this._currentPageNumber = e, this.eventBus.dispatch("pagechanging", n), this.eventBus.dispatch("pagechange", n), t && this._resetCurrentPageView()
				}
			}, {
				key: "setDocument",
				value: function(e) {
					var t = this;
					if (this.pdfDocument && (this._cancelRendering(), this._resetView()), this.pdfDocument = e, e) {
						var n = e.numPages,
							r = (0, l.createPromiseCapability)();
						this.pagesPromise = r.promise, r.promise.then(function() {
							t._pageViewsReady = !0, t.eventBus.dispatch("pagesloaded", {
								source: t,
								pagesCount: n
							})
						});
						var i = !1,
							o = (0, l.createPromiseCapability)();
						this.onePageRendered = o.promise;
						var a = function(e) {
								e.onBeforeDraw = function() {
									t._buffer.push(e)
								}, e.onAfterDraw = function() {
									i || (i = !0, o.resolve())
								}
							},
							s = e.getPage(1);
						this.firstPagePromise = s, s.then(function(i) {
							for (var s = t.currentScale, c = i.getViewport(s * u.CSS_UNITS), d = 1; n >= d; ++d) {
								var h = null;
								l.PDFJS.disableTextLayer || (h = t);
								var p = new f.PDFPageView({
									container: t._setDocumentViewerElement,
									eventBus: t.eventBus,
									id: d,
									scale: s,
									defaultViewport: c.clone(),
									renderingQueue: t.renderingQueue,
									textLayerFactory: h,
									annotationLayerFactory: t,
									enhanceTextSelection: t.enhanceTextSelection,
									renderInteractiveForms: t.renderInteractiveForms,
									renderer: t.renderer,
									l10n: t.l10n
								});
								a(p), t._pages.push(p)
							}
							o.promise.then(function() {
								if (l.PDFJS.disableAutoFetch) return void r.resolve();
								for (var i = n, o = function(n) {
										e.getPage(n).then(function(e) {
											var o = t._pages[n - 1];
											o.pdfPage || o.setPdfPage(e), t.linkService.cachePageRef(n, e.ref), 0 === --i && r.resolve()
										}, function(e) {
											console.error("Unable to get page " + n + " to initialize viewer", e), 0 === --i && r.resolve()
										})
									}, a = 1; n >= a; ++a) o(a)
							}), t.eventBus.dispatch("pagesinit", {
								source: t
							}), t.defaultRenderingQueue && t.update(), t.findController && t.findController.resolveFirstPage()
						})["catch"](function(e) {
							console.error("Unable to initialize viewer", e)
						})
					}
				}
			}, {
				key: "setPageLabels",
				value: function(e) {
					if (this.pdfDocument) {
						e ? e instanceof Array && this.pdfDocument.numPages === e.length ? this._pageLabels = e : (this._pageLabels = null, console.error(this._name + ".setPageLabels: Invalid page labels.")) : this._pageLabels = null;
						for (var t = 0, n = this._pages.length; n > t; t++) {
							var r = this._pages[t],
								i = this._pageLabels && this._pageLabels[t];
							r.setPageLabel(i)
						}
					}
				}
			}, {
				key: "_resetView",
				value: function() {
					this._pages = [], this._currentPageNumber = 1, this._currentScale = u.UNKNOWN_SCALE, this._currentScaleValue = null, this._pageLabels = null, this._buffer = new i(v), this._location = null, this._pagesRotation = 0, this._pagesRequests = [], this._pageViewsReady = !1, this.viewer.textContent = ""
				}
			}, {
				key: "_scrollUpdate",
				value: function() {
					0 !== this.pagesCount && this.update()
				}
			}, {
				key: "_scrollIntoView",
				value: function(e) {
					e.pageDiv, e.pageSpot, e.pageNumber;
					throw new Error("Not implemented: _scrollIntoView")
				}
			}, {
				key: "_setScaleDispatchEvent",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
						r = {
							source: this,
							scale: e,
							presetValue: n ? t : void 0
						};
					this.eventBus.dispatch("scalechanging", r), this.eventBus.dispatch("scalechange", r)
				}
			}, {
				key: "_setScaleUpdatePages",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
					if (this._currentScaleValue = t.toString(), o(this._currentScale, e)) return void(r && this._setScaleDispatchEvent(e, t, !0));
					for (var i = 0, a = this._pages.length; a > i; i++) this._pages[i].update(e);
					if (this._currentScale = e, !n) {
						var s = this._currentPageNumber,
							u = void 0;
						!this._location || l.PDFJS.ignoreCurrentPositionOnZoom || this.isInPresentationMode || this.isChangingPresentationMode || (s = this._location.pageNumber, u = [null,
						{
							name: "XYZ"
						},
						this._location.left, this._location.top, null]), this.scrollPageIntoView({
							pageNumber: s,
							destArray: u,
							allowNegativeOffset: !0
						})
					}
					this._setScaleDispatchEvent(e, t, r), this.defaultRenderingQueue && this.update()
				}
			}, {
				key: "_setScale",
				value: function(e) {
					var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
						n = parseFloat(e);
					if (n > 0) this._setScaleUpdatePages(n, e, t, !1);
					else {
						var r = this._pages[this._currentPageNumber - 1];
						if (!r) return;
						var i = this.isInPresentationMode || this.removePageBorders ? 0 : u.SCROLLBAR_PADDING,
							o = this.isInPresentationMode || this.removePageBorders ? 0 : u.VERTICAL_PADDING,
							a = (this.container.clientWidth - i) / r.width * r.scale,
							s = (this.container.clientHeight - o) / r.height * r.scale;
						switch (e) {
						case "page-actual":
							n = 1;
							break;
						case "page-width":
							n = a;
							break;
						case "page-height":
							n = s;
							break;
						case "page-fit":
							n = Math.min(a, s);
							break;
						case "auto":
							var l = r.width > r.height,
								c = l ? Math.min(s, a) : a;
							n = Math.min(u.MAX_AUTO_SCALE, c);
							break;
						default:
							return void console.error(this._name + '._setScale: "' + e + '" is an unknown zoom value.')
						}
						this._setScaleUpdatePages(n, e, t, !0)
					}
				}
			}, {
				key: "_resetCurrentPageView",
				value: function() {
					this.isInPresentationMode && this._setScale(this._currentScaleValue, !0);
					var e = this._pages[this._currentPageNumber - 1];
					this._scrollIntoView({
						pageDiv: e.div
					})
				}
			}, {
				key: "scrollPageIntoView",
				value: function(e) {
					if (this.pdfDocument) {
						var t = e.pageNumber || 0,
							n = e.destArray || null,
							r = e.allowNegativeOffset || !1;
						if (this.isInPresentationMode || !n) return void this._setCurrentPageNumber(t, !0);
						var i = this._pages[t - 1];
						if (!i) return void console.error(this._name + '.scrollPageIntoView: Invalid "pageNumber" parameter.');
						var o = 0,
							a = 0,
							s = 0,
							l = 0,
							c = void 0,
							d = void 0,
							h = i.rotation % 180 === 0 ? !1 : !0,
							f = (h ? i.height : i.width) / i.scale / u.CSS_UNITS,
							p = (h ? i.width : i.height) / i.scale / u.CSS_UNITS,
							g = 0;
						switch (n[1].name) {
						case "XYZ":
							o = n[2], a = n[3], g = n[4], o = null !== o ? o : 0, a = null !== a ? a : p;
							break;
						case "Fit":
						case "FitB":
							g = "page-fit";
							break;
						case "FitH":
						case "FitBH":
							a = n[2], g = "page-width", null === a && this._location && (o = this._location.left, a = this._location.top);
							break;
						case "FitV":
						case "FitBV":
							o = n[2], s = f, l = p, g = "page-height";
							break;
						case "FitR":
							o = n[2], a = n[3], s = n[4] - o, l = n[5] - a;
							var v = this.removePageBorders ? 0 : u.SCROLLBAR_PADDING,
								m = this.removePageBorders ? 0 : u.VERTICAL_PADDING;
							c = (this.container.clientWidth - v) / s / u.CSS_UNITS, d = (this.container.clientHeight - m) / l / u.CSS_UNITS, g = Math.min(Math.abs(c), Math.abs(d));
							break;
						default:
							return void console.error(this._name + '.scrollPageIntoView: "' + n[1].name + '" is not a valid destination type.')
						}
						if (g && g !== this._currentScale ? this.currentScaleValue = g : this._currentScale === u.UNKNOWN_SCALE && (this.currentScaleValue = u.DEFAULT_SCALE_VALUE), "page-fit" === g && !n[4]) return void this._scrollIntoView({
							pageDiv: i.div,
							pageNumber: t
						});
						var b = [i.viewport.convertToViewportPoint(o, a), i.viewport.convertToViewportPoint(o + s, a + l)],
							y = Math.min(b[0][0], b[1][0]),
							_ = Math.min(b[0][1], b[1][1]);
						r || (y = Math.max(y, 0), _ = Math.max(_, 0)), this._scrollIntoView({
							pageDiv: i.div,
							pageSpot: {
								left: y,
								top: _
							},
							pageNumber: t
						})
					}
				}
			}, {
				key: "_resizeBuffer",
				value: function(e) {
					var t = Math.max(v, 2 * e + 1);
					this._buffer.resize(t)
				}
			}, {
				key: "_updateLocation",
				value: function(e) {
					var t = this._currentScale,
						n = this._currentScaleValue,
						r = parseFloat(n) === t ? Math.round(1e4 * t) / 100 : n,
						i = e.id,
						o = "#page=" + i;
					o += "&zoom=" + r;
					var a = this._pages[i - 1],
						s = this.container,
						l = a.getPagePoint(s.scrollLeft - e.x, s.scrollTop - e.y),
						u = Math.round(l[0]),
						c = Math.round(l[1]);
					o += "," + u + "," + c, this._location = {
						pageNumber: i,
						scale: r,
						top: c,
						left: u,
						rotation: this._pagesRotation,
						pdfOpenParams: o
					}
				}
			}, {
				key: "update",
				value: function() {
					throw new Error("Not implemented: update")
				}
			}, {
				key: "containsElement",
				value: function(e) {
					return this.container.contains(e)
				}
			}, {
				key: "focus",
				value: function() {
					this.container.focus()
				}
			}, {
				key: "_getVisiblePages",
				value: function() {
					throw new Error("Not implemented: _getVisiblePages")
				}
			}, {
				key: "cleanup",
				value: function() {
					for (var e = 0, t = this._pages.length; t > e; e++) this._pages[e] && this._pages[e].renderingState !== c.RenderingStates.FINISHED && this._pages[e].reset()
				}
			}, {
				key: "_cancelRendering",
				value: function() {
					for (var e = 0, t = this._pages.length; t > e; e++) this._pages[e] && this._pages[e].cancelRendering()
				}
			}, {
				key: "_ensurePdfPageLoaded",
				value: function(e) {
					var t = this;
					if (e.pdfPage) return Promise.resolve(e.pdfPage);
					var n = e.id;
					if (this._pagesRequests[n]) return this._pagesRequests[n];
					var r = this.pdfDocument.getPage(n).then(function(r) {
						return e.pdfPage || e.setPdfPage(r), t._pagesRequests[n] = null, r
					})["catch"](function(e) {
						console.error("Unable to get page for page view", e), t._pagesRequests[n] = null
					});
					return this._pagesRequests[n] = r, r
				}
			}, {
				key: "forceRendering",
				value: function(e) {
					var t = this,
						n = e || this._getVisiblePages(),
						r = this.renderingQueue.getHighestPriority(n, this._pages, this.scroll.down);
					return r ? (this._ensurePdfPageLoaded(r).then(function() {
						t.renderingQueue.renderView(r)
					}), !0) : !1
				}
			}, {
				key: "getPageTextContent",
				value: function(e) {
					return this.pdfDocument.getPage(e + 1).then(function(e) {
						return e.getTextContent({
							normalizeWhitespace: !0
						})
					})
				}
			}, {
				key: "createTextLayerBuilder",
				value: function(e, t, n) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
					return new g.TextLayerBuilder({
						textLayerDiv: e,
						eventBus: this.eventBus,
						pageIndex: t,
						viewport: n,
						findController: this.isInPresentationMode ? null : this.findController,
						enhanceTextSelection: this.isInPresentationMode ? !1 : r
					})
				}
			}, {
				key: "createAnnotationLayerBuilder",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : u.NullL10n;
					return new d.AnnotationLayerBuilder({
						pageDiv: e,
						pdfPage: t,
						renderInteractiveForms: n,
						linkService: this.linkService,
						downloadManager: this.downloadManager,
						l10n: r
					})
				}
			}, {
				key: "setFindController",
				value: function(e) {
					this.findController = e
				}
			}, {
				key: "getPagesOverview",
				value: function() {
					var e = this._pages.map(function(e) {
						var t = e.pdfPage.getViewport(1);
						return {
							width: t.width,
							height: t.height,
							rotation: t.rotation
						}
					});
					if (!this.enablePrintAutoRotate) return e;
					var t = a(e[0]);
					return e.map(function(e) {
						return t === a(e) ? e : {
							width: e.height,
							height: e.width,
							rotation: (e.rotation + 90) % 360
						}
					})
				}
			}, {
				key: "pagesCount",
				get: function() {
					return this._pages.length
				}
			}, {
				key: "pageViewsReady",
				get: function() {
					return this._pageViewsReady
				}
			}, {
				key: "currentPageNumber",
				get: function() {
					return this._currentPageNumber
				},
				set: function(e) {
					if (!Number.isInteger(e)) throw new Error("Invalid page number.");
					this.pdfDocument && this._setCurrentPageNumber(e, !0)
				}
			}, {
				key: "currentPageLabel",
				get: function() {
					return this._pageLabels && this._pageLabels[this._currentPageNumber - 1]
				},
				set: function(e) {
					var t = 0 | e;
					if (this._pageLabels) {
						var n = this._pageLabels.indexOf(e);
						n >= 0 && (t = n + 1)
					}
					this.currentPageNumber = t
				}
			}, {
				key: "currentScale",
				get: function() {
					return this._currentScale !== u.UNKNOWN_SCALE ? this._currentScale : u.DEFAULT_SCALE
				},
				set: function(e) {
					if (isNaN(e)) throw new Error("Invalid numeric scale");
					this.pdfDocument && this._setScale(e, !1)
				}
			}, {
				key: "currentScaleValue",
				get: function() {
					return this._currentScaleValue
				},
				set: function(e) {
					this.pdfDocument && this._setScale(e, !1)
				}
			}, {
				key: "pagesRotation",
				get: function() {
					return this._pagesRotation
				},
				set: function(e) {
					if (!(0, u.isValidRotation)(e)) throw new Error("Invalid pages rotation angle.");
					if (this.pdfDocument && this._pagesRotation !== e) {
						this._pagesRotation = e;
						for (var t = this._currentPageNumber, n = 0, r = this._pages.length; r > n; n++) {
							var i = this._pages[n];
							i.update(i.scale, e)
						}
						this._currentScaleValue && this._setScale(this._currentScaleValue, !0), this.eventBus.dispatch("rotationchanging", {
							source: this,
							pagesRotation: e,
							pageNumber: t
						}), this.defaultRenderingQueue && this.update()
					}
				}
			}, {
				key: "_setDocumentViewerElement",
				get: function() {
					throw new Error("Not implemented: _setDocumentViewerElement")
				}
			}, {
				key: "isInPresentationMode",
				get: function() {
					return this.presentationModeState === u.PresentationModeState.FULLSCREEN
				}
			}, {
				key: "isChangingPresentationMode",
				get: function() {
					return this.presentationModeState === u.PresentationModeState.CHANGING
				}
			}, {
				key: "isHorizontalScrollbarEnabled",
				get: function() {
					return this.isInPresentationMode ? !1 : this.container.scrollWidth > this.container.clientWidth
				}
			}, {
				key: "hasEqualPageSizes",
				get: function() {
					for (var e = this._pages[0], t = 1, n = this._pages.length; n > t; ++t) {
						var r = this._pages[t];
						if (r.width !== e.width || r.height !== e.height) return !1
					}
					return !0
				}
			}]), e
		}();
	t.BaseViewer = m
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DefaultAnnotationLayerFactory = t.AnnotationLayerBuilder = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(1),
		a = n(0),
		s = n(7),
		l = function() {
			function e(t) {
				var n = t.pageDiv,
					i = t.pdfPage,
					o = t.linkService,
					s = t.downloadManager,
					l = t.renderInteractiveForms,
					u = void 0 === l ? !1 : l,
					c = t.l10n,
					d = void 0 === c ? a.NullL10n : c;
				r(this, e), this.pageDiv = n, this.pdfPage = i, this.linkService = o, this.downloadManager = s, this.renderInteractiveForms = u, this.l10n = d, this.div = null, this._cancelled = !1
			}
			return i(e, [{
				key: "render",
				value: function(e) {
					var t = this,
						n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "display";
					this.pdfPage.getAnnotations({
						intent: n
					}).then(function(n) {
						if (!t._cancelled) {
							var r = {
								viewport: e.clone({
									dontFlip: !0
								}),
								div: t.div,
								annotations: n,
								page: t.pdfPage,
								renderInteractiveForms: t.renderInteractiveForms,
								linkService: t.linkService,
								downloadManager: t.downloadManager
							};
							if (t.div) o.AnnotationLayer.update(r);
							else {
								if (0 === n.length) return;
								t.div = document.createElement("div"), t.div.className = "annotationLayer", t.pageDiv.appendChild(t.div), r.div = t.div, o.AnnotationLayer.render(r), t.l10n.translate(t.div)
							}
						}
					})
				}
			}, {
				key: "cancel",
				value: function() {
					this._cancelled = !0
				}
			}, {
				key: "hide",
				value: function() {
					this.div && this.div.setAttribute("hidden", "true")
				}
			}]), e
		}(),
		u = function() {
			function e() {
				r(this, e)
			}
			return i(e, [{
				key: "createAnnotationLayerBuilder",
				value: function(e, t) {
					var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
						r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : a.NullL10n;
					return new l({
						pageDiv: e,
						pdfPage: t,
						renderInteractiveForms: n,
						linkService: new s.SimpleLinkService,
						l10n: r
					})
				}
			}]), e
		}();
	t.AnnotationLayerBuilder = l, t.DefaultAnnotationLayerFactory = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPageView = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = n(1),
		s = n(2),
		l = n(3),
		u = function() {
			function e(t) {
				r(this, e);
				var n = t.container,
					i = t.defaultViewport;
				this.id = t.id, this.renderingId = "page" + this.id, this.pdfPage = null, this.pageLabel = null, this.rotation = 0, this.scale = t.scale || o.DEFAULT_SCALE, this.viewport = i, this.pdfPageRotate = i.rotation, this.hasRestrictedScaling = !1, this.enhanceTextSelection = t.enhanceTextSelection || !1, this.renderInteractiveForms = t.renderInteractiveForms || !1, this.eventBus = t.eventBus || (0, s.getGlobalEventBus)(), this.renderingQueue = t.renderingQueue, this.textLayerFactory = t.textLayerFactory, this.annotationLayerFactory = t.annotationLayerFactory, this.renderer = t.renderer || o.RendererType.CANVAS, this.l10n = t.l10n || o.NullL10n, this.paintTask = null, this.paintedViewportMap = new WeakMap, this.renderingState = l.RenderingStates.INITIAL, this.resume = null, this.error = null, this.onBeforeDraw = null, this.onAfterDraw = null, this.annotationLayer = null, this.textLayer = null, this.zoomLayer = null;
				var a = document.createElement("div");
				a.className = "page", a.style.width = Math.floor(this.viewport.width) + "px", a.style.height = Math.floor(this.viewport.height) + "px", a.setAttribute("data-page-number", this.id), this.div = a, n.appendChild(a)
			}
			return i(e, [{
				key: "setPdfPage",
				value: function(e) {
					this.pdfPage = e, this.pdfPageRotate = e.rotate;
					var t = (this.rotation + this.pdfPageRotate) % 360;
					this.viewport = e.getViewport(this.scale * o.CSS_UNITS, t), this.stats = e.stats, this.reset()
				}
			}, {
				key: "destroy",
				value: function() {
					this.reset(), this.pdfPage && this.pdfPage.cleanup()
				}
			}, {
				key: "_resetZoomLayer",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
					if (this.zoomLayer) {
						var t = this.zoomLayer.firstChild;
						this.paintedViewportMap["delete"](t), t.width = 0, t.height = 0, e && this.zoomLayer.remove(), this.zoomLayer = null
					}
				}
			}, {
				key: "reset",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
						t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1;
					this.cancelRendering(t);
					var n = this.div;
					n.style.width = Math.floor(this.viewport.width) + "px", n.style.height = Math.floor(this.viewport.height) + "px";
					for (var r = n.childNodes, i = e && this.zoomLayer || null, o = t && this.annotationLayer && this.annotationLayer.div || null, a = r.length - 1; a >= 0; a--) {
						var s = r[a];
						i !== s && o !== s && n.removeChild(s)
					}
					n.removeAttribute("data-loaded"), o ? this.annotationLayer.hide() : this.annotationLayer && (this.annotationLayer.cancel(), this.annotationLayer = null), i || (this.canvas && (this.paintedViewportMap["delete"](this.canvas), this.canvas.width = 0, this.canvas.height = 0, delete this.canvas), this._resetZoomLayer()), this.svg && (this.paintedViewportMap["delete"](this.svg), delete this.svg), this.loadingIconDiv = document.createElement("div"), this.loadingIconDiv.className = "loadingIcon", n.appendChild(this.loadingIconDiv)
				}
			}, {
				key: "update",
				value: function(e, t) {
					this.scale = e || this.scale, "undefined" != typeof t && (this.rotation = t);
					var n = (this.rotation + this.pdfPageRotate) % 360;
					if (this.viewport = this.viewport.clone({
						scale: this.scale * o.CSS_UNITS,
						rotation: n
					}), this.svg) return this.cssTransform(this.svg, !0), void this.eventBus.dispatch("pagerendered", {
						source: this,
						pageNumber: this.id,
						cssTransform: !0
					});
					var r = !1;
					if (this.canvas && a.PDFJS.maxCanvasPixels > 0) {
						var i = this.outputScale;
						(Math.floor(this.viewport.width) * i.sx | 0) * (Math.floor(this.viewport.height) * i.sy | 0) > a.PDFJS.maxCanvasPixels && (r = !0)
					}
					if (this.canvas) {
						if (a.PDFJS.useOnlyCssZoom || this.hasRestrictedScaling && r) return this.cssTransform(this.canvas, !0), void this.eventBus.dispatch("pagerendered", {
							source: this,
							pageNumber: this.id,
							cssTransform: !0
						});
						this.zoomLayer || this.canvas.hasAttribute("hidden") || (this.zoomLayer = this.canvas.parentNode, this.zoomLayer.style.position = "absolute")
					}
					this.zoomLayer && this.cssTransform(this.zoomLayer.firstChild), this.reset(!0, !0)
				}
			}, {
				key: "cancelRendering",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
					this.paintTask && (this.paintTask.cancel(), this.paintTask = null), this.renderingState = l.RenderingStates.INITIAL, this.resume = null, this.textLayer && (this.textLayer.cancel(), this.textLayer = null), !e && this.annotationLayer && (this.annotationLayer.cancel(), this.annotationLayer = null)
				}
			}, {
				key: "cssTransform",
				value: function t(e) {
					var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
						r = this.viewport.width,
						i = this.viewport.height,
						o = this.div;
					e.style.width = e.parentNode.style.width = o.style.width = Math.floor(r) + "px", e.style.height = e.parentNode.style.height = o.style.height = Math.floor(i) + "px";
					var s = this.viewport.rotation - this.paintedViewportMap.get(e).rotation,
						l = Math.abs(s),
						u = 1,
						c = 1;
					(90 === l || 270 === l) && (u = i / r, c = r / i);
					var t = "rotate(" + s + "deg) scale(" + u + "," + c + ")";
					if (a.CustomStyle.setProp("transform", e, t), this.textLayer) {
						var d = this.textLayer.viewport,
							h = this.viewport.rotation - d.rotation,
							f = Math.abs(h),
							p = r / d.width;
						(90 === f || 270 === f) && (p = r / d.height);
						var g = this.textLayer.textLayerDiv,
							v = void 0,
							m = void 0;
						switch (f) {
						case 0:
							v = m = 0;
							break;
						case 90:
							v = 0, m = "-" + g.style.height;
							break;
						case 180:
							v = "-" + g.style.width, m = "-" + g.style.height;
							break;
						case 270:
							v = "-" + g.style.width, m = 0;
							break;
						default:
							console.error("Bad rotation value.")
						}
						a.CustomStyle.setProp("transform", g, "rotate(" + f + "deg) scale(" + p + ", " + p + ") translate(" + v + ", " + m + ")"), a.CustomStyle.setProp("transformOrigin", g, "0% 0%")
					}
					n && this.annotationLayer && this.annotationLayer.render(this.viewport, "display")
				}
			}, {
				key: "getPagePoint",
				value: function(e, t) {
					return this.viewport.convertToPdfPoint(e, t)
				}
			}, {
				key: "draw",
				value: function() {
					var e = this;
					if (this.renderingState !== l.RenderingStates.INITIAL && (console.error("Must be in new state before drawing"), this.reset()), !this.pdfPage) return this.renderingState = l.RenderingStates.FINISHED, Promise.reject(new Error("Page is not loaded"));
					this.renderingState = l.RenderingStates.RUNNING;
					var t = this.pdfPage,
						n = this.div,
						r = document.createElement("div");
					r.style.width = n.style.width, r.style.height = n.style.height, r.classList.add("canvasWrapper"), this.annotationLayer && this.annotationLayer.div ? n.insertBefore(r, this.annotationLayer.div) : n.appendChild(r);
					var i = null;
					if (this.textLayerFactory) {
						var s = document.createElement("div");
						s.className = "textLayer", s.style.width = r.style.width, s.style.height = r.style.height, this.annotationLayer && this.annotationLayer.div ? n.insertBefore(s, this.annotationLayer.div) : n.appendChild(s), i = this.textLayerFactory.createTextLayerBuilder(s, this.id - 1, this.viewport, this.enhanceTextSelection)
					}
					this.textLayer = i;
					var u = null;
					this.renderingQueue && (u = function(t) {
						return e.renderingQueue.isHighestPriority(e) ? void t() : (e.renderingState = l.RenderingStates.PAUSED, void(e.resume = function() {
							e.renderingState = l.RenderingStates.RUNNING, t()
						}))
					});
					var c = function(r) {
							return d === e.paintTask && (e.paintTask = null), r instanceof a.RenderingCancelledException ? (e.error = null, Promise.resolve(void 0)) : (e.renderingState = l.RenderingStates.FINISHED, e.loadingIconDiv && (n.removeChild(e.loadingIconDiv), delete e.loadingIconDiv), e._resetZoomLayer(!0), e.error = r, e.stats = t.stats, e.onAfterDraw && e.onAfterDraw(), e.eventBus.dispatch("pagerendered", {
								source: e,
								pageNumber: e.id,
								cssTransform: !1
							}), r ? Promise.reject(r) : Promise.resolve(void 0))
						},
						d = this.renderer === o.RendererType.SVG ? this.paintOnSvg(r) : this.paintOnCanvas(r);
					d.onRenderContinue = u, this.paintTask = d;
					var h = d.promise.then(function() {
						return c(null).then(function() {
							if (i) {
								var e = t.streamTextContent({
									normalizeWhitespace: !0
								});
								i.setTextContentStream(e), i.render()
							}
						})
					}, function(e) {
						return c(e)
					});
					return this.annotationLayerFactory && (this.annotationLayer || (this.annotationLayer = this.annotationLayerFactory.createAnnotationLayerBuilder(n, t, this.renderInteractiveForms, this.l10n)), this.annotationLayer.render(this.viewport, "display")), n.setAttribute("data-loaded", !0), this.onBeforeDraw && this.onBeforeDraw(), h
				}
			}, {
				key: "paintOnCanvas",
				value: function(e) {
					var t = (0, a.createPromiseCapability)(),
						n = {
							promise: t.promise,
							onRenderContinue: function(e) {
								e()
							},
							cancel: function() {
								b.cancel()
							}
						},
						r = this.viewport,
						i = document.createElement("canvas");
					i.id = this.renderingId, i.setAttribute("hidden", "hidden");
					var s = !0,
						l = function() {
							s && (i.removeAttribute("hidden"), s = !1)
						};
					e.appendChild(i), this.canvas = i, i.mozOpaque = !0;
					var u = i.getContext("2d", {
						alpha: !1
					}),
						c = (0, o.getOutputScale)(u);
					if (this.outputScale = c, a.PDFJS.useOnlyCssZoom) {
						var d = r.clone({
							scale: o.CSS_UNITS
						});
						c.sx *= d.width / r.width, c.sy *= d.height / r.height, c.scaled = !0
					}
					if (a.PDFJS.maxCanvasPixels > 0) {
						var h = r.width * r.height,
							f = Math.sqrt(a.PDFJS.maxCanvasPixels / h);
						c.sx > f || c.sy > f ? (c.sx = f, c.sy = f, c.scaled = !0, this.hasRestrictedScaling = !0) : this.hasRestrictedScaling = !1
					}
					var p = (0, o.approximateFraction)(c.sx),
						g = (0, o.approximateFraction)(c.sy);
					i.width = (0, o.roundToDivide)(r.width * c.sx, p[0]), i.height = (0, o.roundToDivide)(r.height * c.sy, g[0]), i.style.width = (0, o.roundToDivide)(r.width, p[1]) + "px", i.style.height = (0, o.roundToDivide)(r.height, g[1]) + "px", this.paintedViewportMap.set(i, r);
					var v = c.scaled ? [c.sx, 0, 0, c.sy, 0, 0] : null,
						m = {
							canvasContext: u,
							transform: v,
							viewport: this.viewport,
							renderInteractiveForms: this.renderInteractiveForms
						},
						b = this.pdfPage.render(m);
					return b.onContinue = function(e) {
						l(), n.onRenderContinue ? n.onRenderContinue(e) : e()
					}, b.promise.then(function() {
						l(), t.resolve(void 0)
					}, function(e) {
						l(), t.reject(e)
					}), n
				}
			}, {
				key: "paintOnSvg",
				value: function(e) {
					var t = this,
						n = !1,
						r = function() {
							if (n) throw new a.RenderingCancelledException("Rendering cancelled, page " + t.id, "svg")
						},
						i = this.pdfPage,
						s = this.viewport.clone({
							scale: o.CSS_UNITS
						}),
						u = i.getOperatorList().then(function(n) {
							r();
							var o = new a.SVGGraphics(i.commonObjs, i.objs);
							return o.getSVG(n, s).then(function(n) {
								r(), t.svg = n, t.paintedViewportMap.set(n, s), n.style.width = e.style.width, n.style.height = e.style.height, t.renderingState = l.RenderingStates.FINISHED, e.appendChild(n)
							})
						});
					return {
						promise: u,
						onRenderContinue: function(e) {
							e()
						},
						cancel: function() {
							n = !0
						}
					}
				}
			}, {
				key: "setPageLabel",
				value: function(e) {
					this.pageLabel = "string" == typeof e ? e : null, null !== this.pageLabel ? this.div.setAttribute("data-page-label", this.pageLabel) : this.div.removeAttribute("data-page-label")
				}
			}, {
				key: "width",
				get: function() {
					return this.viewport.width
				}
			}, {
				key: "height",
				get: function() {
					return this.viewport.height
				}
			}]), e
		}();
	t.PDFPageView = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DefaultTextLayerFactory = t.TextLayerBuilder = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(2),
		a = n(1),
		s = n(5),
		l = n(6),
		u = 300,
		c = function() {
			function e(t) {
				var n = t.textLayerDiv,
					i = t.eventBus,
					a = t.pageIndex,
					s = t.viewport,
					l = t.findController,
					u = void 0 === l ? null : l,
					c = t.enhanceTextSelection,
					d = void 0 === c ? !1 : c;
				r(this, e), this.textLayerDiv = n, this.eventBus = i || (0, o.getGlobalEventBus)(), this.textContent = null, this.textContentItemsStr = [], this.textContentStream = null, this.renderingDone = !1, this.pageIdx = a, this.pageNumber = this.pageIdx + 1, this.matches = [], this.viewport = s, this.textDivs = [], this.findController = u, this.textLayerRenderTask = null, this.enhanceTextSelection = d, this.labelMatches = [], this._bindMouse()
			}
			return i(e, [{
				key: "_finishRendering",
				value: function() {
					if (this.renderingDone = !0, !this.enhanceTextSelection) {
						var e = document.createElement("div");
						e.className = "endOfContent", this.textLayerDiv.appendChild(e)
					}
					this.eventBus.dispatch("textlayerrendered", {
						source: this,
						pageNumber: this.pageNumber,
						numTextDivs: this.textDivs.length
					})
				}
			}, {
				key: "render",
				value: function() {
					var e = this,
						t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
					if ((this.textContent || this.textContentStream) && !this.renderingDone) {
						this.cancel(), this.textDivs = [];
						var n = document.createDocumentFragment();
						this.textLayerRenderTask = (0, a.renderTextLayer)({
							textContent: this.textContent,
							textContentStream: this.textContentStream,
							container: n,
							viewport: this.viewport,
							textDivs: this.textDivs,
							textContentItemsStr: this.textContentItemsStr,
							timeout: t,
							enhanceTextSelection: this.enhanceTextSelection
						}), this.textLayerRenderTask.promise.then(function() {
							e.textLayerDiv.appendChild(n), e._finishRendering(), e.updateMatches(), e.updateLabelMatches()
						}, function(e) {})
					}
				}
			}, {
				key: "cancel",
				value: function() {
					this.textLayerRenderTask && (this.textLayerRenderTask.cancel(), this.textLayerRenderTask = null)
				}
			}, {
				key: "setTextContentStream",
				value: function(e) {
					this.cancel(), this.textContentStream = e
				}
			}, {
				key: "setTextContent",
				value: function(e) {
					this.cancel(), this.textContent = e
				}
			}, {
				key: "convertMatches",
				value: function(e, t) {
					var n = 0,
						r = 0,
						i = this.textContentItemsStr,
						o = i.length - 1,
						a = null === this.findController ? 0 : this.findController.state.query.length,
						s = [];
					if (!e) return s;
					for (var l = 0, u = e.length; u > l; l++) {
						for (var c = e[l]; n !== o && c >= r + i[n].length;) r += i[n].length, n++;
						n === i.length && console.error("Could not find a matching mapping");
						var d = {
							begin: {
								divIdx: n,
								offset: c - r
							}
						};
						for (c += t ? t[l] : a; n !== o && c > r + i[n].length;) r += i[n].length, n++;
						d.end = {
							divIdx: n,
							offset: c - r
						}, s.push(d)
					}
					return s
				}
			}, {
				key: "renderMatches",
				value: function(e) {
					function t(e, t) {
						var r = e.divIdx;
						i[r].textContent = "", n(r, 0, e.offset, t)
					}
					function n(e, t, n, o) {
						var a = i[e],
							s = r[e].substring(t, n),
							l = document.createTextNode(s);
						if (o) {
							var u = document.createElement("span");
							return u.className = o, u.appendChild(l), void a.appendChild(u)
						}
						a.appendChild(l)
					}
					if (0 !== e.length) {
						var r = this.textContentItemsStr,
							i = this.textDivs,
							o = null,
							a = this.pageIdx,
							s = null === this.findController ? !1 : a === this.findController.selected.pageIdx,
							l = null === this.findController ? -1 : this.findController.selected.matchIdx,
							u = null === this.findController ? !1 : this.findController.state.highlightAll,
							c = {
								divIdx: -1,
								offset: void 0
							},
							d = l,
							h = d + 1;
						if (u) d = 0, h = e.length;
						else if (!s) return;
						for (var f = d; h > f; f++) {
							var p = e[f],
								g = p.begin,
								v = p.end,
								m = s && f === l,
								b = m ? " selected" : "";
							if (this.findController && this.findController.updateMatchPosition(a, f, i, g.divIdx), o && g.divIdx === o.divIdx ? n(o.divIdx, o.offset, g.offset) : (null !== o && n(o.divIdx, o.offset, c.offset), t(g)), g.divIdx === v.divIdx) n(g.divIdx, g.offset, v.offset, "highlight" + b);
							else {
								n(g.divIdx, g.offset, c.offset, "highlight begin" + b);
								for (var y = g.divIdx + 1, _ = v.divIdx; _ > y; y++) i[y].className = "highlight middle" + b;
								t(v, "highlight end" + b)
							}
							o = v
						}
						o && n(o.divIdx, o.offset, c.offset)
					}
				}
			}, {
				key: "getOffsetNodeList",
				value: function(e, t) {
					for (var n = t || 0, r = [], i = 0; i < e.childNodes.length; i++) {
						var o = e.childNodes[i],
							a = n + this.getNodeTextWidth(o);
						3 === o.nodeType ? r.push({
							startOffset: n,
							endOffset: a,
							length: o.length,
							dom: o
						}) : r.push({
							startOffset: n,
							endOffset: n + this.getNodeTextWidth(o),
							childNodes: this.getOffsetNodeList(o, n),
							dom: o
						}), n = a
					}
					return r
				}
			}, {
				key: "getAdjustOffset",
				value: function(e) {
					return e.offset
				}
			}, {
				key: "getNodeOuterWidth",
				value: function(e) {
					return 3 === e.nodeType ? e.data.length : e.outerHTML.length
				}
			}, {
				key: "getNodeInnerWidth",
				value: function(e) {
					return 3 === e.nodeType ? e.data.length : e.innerHTML.length
				}
			}, {
				key: "getNodeTextWidth",
				value: function(e) {
					return 3 === e.nodeType ? e.data.length : e.innerText.length
				}
			}, {
				key: "convertToTextOffset",
				value: function(e, t) {
					var n = this.getParentDiv(t),
						r = e;
					if (3 !== t.nodeType) return e ? e : 0;
					if (t.data.length == n.innerText.length) return r;
					var i = this.getDeepTextOffsetInfo(n, t, {
						offset: e,
						findNode: !1
					});
					return i.findNode ? i.offset : void 0
				}
			}, {
				key: "getDeepTextOffsetInfo",
				value: function(e, t, n) {
					var r = void 0;
					if (n.findNode) return n;
					for (var i = 0; i < e.childNodes.length; i++) r = e.childNodes[i], n.findNode || (3 === r.nodeType && r === t ? n = {
						offset: n.offset,
						findNode: !0
					} : 3 === r.nodeType ? n.offset += this.getNodeTextWidth(r) : r !== t && (n = this.getDeepTextOffsetInfo(r, t, n)));
					return n
				}
			}, {
				key: "getSeriesIdx",
				value: function() {
					function e() {
						return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
					}
					return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
				}
			}, {
				key: "getParentDiv",
				value: function(e) {
					return "DIV" === e.nodeName ? e : this.getParentDiv(e.parentNode)
				}
			}, {
				key: "getDivIdx",
				value: function(e, t, n) {
					var r = this.getParentDiv(e),
						i = this.textDivs.indexOf(r);
					return t ? (n && r.innerText.length === t.start ? (i++, t.start = 0) : !n && t && 0 === t.end && (i--, t.end = this.textDivs[i].innerText.length), i) : i
				}
			}, {
				key: "getNodePageIdx",
				value: function(e) {
					var t = -1;
					return e.getAttribute && (t = e.getAttribute("data-page-number")) ? parseInt(t) - 1 : this.getNodePageIdx(e.parentNode)
				}
			}, {
				key: "getSelectionInfo",
				value: function(e) {
					var t = e.anchorNode,
						n = e.focusNode,
						r = {
							start: e.anchorOffset,
							end: e.focusOffset
						},
						i = this.getNodePageIdx(t),
						o = this.getNodePageIdx(n),
						a = this.getDivIdx(t, r, !0),
						s = this.getDivIdx(n, r, !1),
						l = void 0;
					return (a > s || a === s && r.start > r.end) && (l = a, a = s, s = l, l = r.start, r.start = r.end, r.end = l, l = i, i = o, o = l), {
						startIdx: a,
						endIdx: s,
						startPageIdx: i,
						endPageIdx: o,
						startOffset: r.start,
						endOffset: r.end
					}
				}
			}, {
				key: "labelingMatch",
				value: function(e) {
					var t = e.selection,
						n = t.anchorNode,
						r = t.focusNode,
						i = this.getSelectionInfo(t),
						o = {
							dataTag: e.dataTag,
							dataColor: e.dataColor,
							word: t.selectionText,
							seriesIdx: -1,
							begin: {
								pageIdx: i.startPageIdx,
								divIdx: i.startIdx,
								offset: this.convertToTextOffset(i.startOffset, n)
							},
							end: {
								pageIdx: i.endPageIdx,
								divIdx: i.endIdx,
								offset: this.convertToTextOffset(i.endOffset, r)
							}
						};
					o.seriesIdx = this.getSeriesIdx(o), s.labelManager.addMatchByPageMatch(o, {
						pageIdx: this.pageIdx,
						textContentItemsStr: this.textContentItemsStr,
						textDivs: this.textDivs
					}), this.labelMatches.push(o);
					for (var a = this.fixLabelInfo(o), l = a.begin.divIdx; l <= a.end.divIdx; l++) {
						var u = void 0,
							c = void 0,
							d = {
								seriesIdx: a.seriesIdx
							};
						l === a.begin.divIdx && (u = this.getAdjustOffset(a.begin), d.hasStart = !0), l === a.end.divIdx && (c = this.getAdjustOffset(a.end), d.hasEnd = !0);
						this.labelingDiv(this.textDivs[l], u, c, a)
					}
				}
			}, {
				key: "fixLabelInfo",
				value: function(e) {
					var t = $.extend({}, e);
					return this.pageIdx !== t.begin.pageIdx && (t.begin.divIdx = 0, t.begin.offset = 0), this.pageIdx !== t.end.pageIdx && (t.end.divIdx = this.textDivs.length - 1, t.end.offset = this.textContentItemsStr[t.end.divIdx].length - 1), t
				}
			}, {
				key: "labelingDiv",
				value: function(e, t, n, r) {
					var i = e.innerText,
						o = this.getOffsetNodeList(e);
					n || i.length;
					this.labelingWrapper(o, t, n, r)
				}
			}, {
				key: "labelingWrapper",
				value: function(e, t, n, r) {
					for (var i = void 0, o = void 0, a = void 0, s = void 0, l = void 0, u = 0; u < e.length; u++) {
						var c = e[u];
						if (s = c.dom, 3 === c.dom.nodeType) {
							i = this.max(t, c.startOffset) - c.startOffset, o = this.min(n, c.endOffset) - c.startOffset, i = i > c.length ? c.length : i, o = 0 > o ? 0 : o, a = {
								hasStart: t >= c.startOffset && t <= c.endOffset,
								hasEnd: n >= c.startOffset && n <= c.endOffset
							};
							for (var d = s.parentNode, h = 0; h < d.childNodes.length; h++) if (d.childNodes[h] === s) {
								l = h;
								break
							}
							if (i !== o) {
								$(s).replaceWith(s.data.substring(0, i) + this.labelingSpanReplace(s.data.substring(i, o), a, r) + s.data.substring(o, c.length)), 0 !== i && l++;
								var f = d.childNodes[l];
								r.compares && r.compares.length > 0 ? this.addTooltipster(f, r) : this.addTitleTipster(f), this._bindSingleUnlabelingEvent(f)
							} else if (r.begin.offset == r.end.offset && r.begin.divIdx === r.end.divIdx && r.compares && r.compares.length > 0) {
								var p = this.addAddIconElement(d, s, i);
								this.addTooltipster(p, r)
							}
						} else this.labelingWrapper(c.childNodes, t, n, r)
					}
				}
			}, {
				key: "addTitleTipster",
				value: function(e) {
					$.tooltipster ? $(e).tooltipster() : console.error("tooltip生成失败")
				}
			}, {
				key: "addTooltipster",
				value: function(e, t) {
					var n = t.compares;
					$.tooltipster ? $(e).tooltipster({
						theme: "tooltipster-shadow",
						contentAsHTML: !0,
						interactive: !0,
						content: l.comparesManager.getRenderHTML(n, t)
					}) : console.log("标注提示加载失败")
				}
			}, {
				key: "addAddIconElement",
				value: function(e, t, n) {
					var r = e.clientWidth * (n / t.length),
						i = "-10px",
						o = "18px",
						a = document.createElement("i");
					return a.setAttribute("class", "fa fa-plus-circle"), a.style.position = "absolute", a.style.left = r, a.style.top = i, a.style.fontSize = o, a.style.color = "rgb(52, 143, 103)", e.appendChild(a), a
				}
			}, {
				key: "labelingSpanReplace",
				value: function(e, t, n) {
					if (!e) return "";
					var r = t.hasStart ? "label-span-start" : "",
						i = t.hasEnd ? "label-span-end" : "";
					return n.dataTag ? '<span title="' + n.word + '" data-tag="' + this.getdataTag(n) + '" data-detail="' + this.getDataDetail(n) + '" style="background-color: rgb(' + n.dataColor + ')" series-idx="' + n.seriesIdx + '" class="' + this.getLabelSpanStyle(t) + '">' + e + "</span>" : '<span series-idx="' + n.seriesIdx + '" class="label-span ' + r + " " + i + '">' + e + "</span>"
				}
			}, {
				key: "getTitle",
				value: function(e) {
					return e.compares && e.compares.length > 0 ? "" : void 0
				}
			}, {
				key: "getLabelSpanStyle",
				value: function(e) {
					var t = "label-span",
						n = e.hasStart ? "label-span-start" : "",
						r = e.hasEnd ? "label-span-end" : "";
					return n && (t += " " + n), r && (t += " " + r), t
				}
			}, {
				key: "getDataDetail",
				value: function(e) {
					return e.dataDetail
				}
			}, {
				key: "getdataTag",
				value: function(e) {
					return e.dataTag
				}
			}, {
				key: "max",
				value: function(e, t) {
					return e > t ? e : t
				}
			}, {
				key: "min",
				value: function(e, t) {
					return t > e ? e : t
				}
			}, {
				key: "updateLabelMatches",
				value: function() {
					this.pageIdx, this.textDivs, this.textContentItemsStr;
					this.labelMatches = s.labelManager.loadPageLabelMatches({
						pageIdx: this.pageIdx,
						textContentItemsStr: this.textContentItemsStr,
						textDivs: this.textDivs
					}), this.clearAllLabelingNodes(), this.renderLabelMatches(this.labelMatches)
				}
			}, {
				key: "clearAllLabelingNodes",
				value: function() {
					var e = void 0;
					$.each($(this.textLayerDiv).find(".label-span"), function(t, n) {
						e = this.parentNode, this.outerHTML = this.innerHTML, e.normalize()
					})
				}
			}, {
				key: "renderLabelMatches",
				value: function(e) {
					if (0 !== e.length) for (var t = 0; t < e.length; t++) {
						var n = e[t];
						if (n.begin && n.end) for (var r = n.begin.divIdx, i = n.end.divIdx, o = r; i >= o; o++) {
							var a = void 0,
								s = void 0,
								l = {
									seriesIdx: n.seriesIdx
								};
							o === r && (a = this.getAdjustOffset(n.begin), l.hasStart = !0), o === i && (s = this.getAdjustOffset(n.end), l.hasEnd = !0), this.labelingDiv(this.textDivs[o], a, s, n)
						}
					}
				}
			}, {
				key: "_bindSingleUnlabelingEvent",
				value: function(e) {
					var t = this,
						n = s.labelManager.getEnableLabelStatus();
					n && $(e).on("dblclick", function(e) {
						e.stopPropagation();
						var n = this.getAttribute("series-idx"),
							r = -1;
						t.labelMatches.forEach(function(e, i) {
							e.seriesIdx.toString() == n && (t.removeSingleLabeling(e), r = i)
						}), s.labelManager.removeMatchBySeriesIdx(n), t.labelMatches.splice(r, 1), console.log(t.labelMatches)
					})
				}
			}, {
				key: "removeSingleLabeling",
				value: function(e) {
					for (var t = void 0, n = void 0, r = void 0, i = e.begin.divIdx; i <= e.end.divIdx; i++) {
						var o = void 0,
							a = void 0;
						if (i == e.begin.divIdx && (o = e.begin.offset), i == e.begin.divIdx && (a = e.end.offset), r = this.getLabelingNode(this.textDivs[i], e), !(r && r.length < 1)) for (var s = 0; s < r.length; s++) {
							n = r[s], t = n.parentNode;
							for (var l = 0; l < n.childNodes.length; l++) t.insertBefore(n.childNodes[l], n);
							t.removeChild(n), t.normalize()
						}
					}
				}
			}, {
				key: "getLabelSpanNode",
				value: function(e, t) {
					for (var n = void 0, r = [], i = 0; i < e.childNodes.length; i++) n = e.childNodes[i], n.getAttribute && n.getAttribute("series-idx") === t && r.push(n), r = r.concat(this.getLabelSpanNode(n, t));
					return r
				}
			}, {
				key: "getLabelingNode",
				value: function(e, t) {
					return this.getLabelSpanNode(e, t.seriesIdx)
				}
			}, {
				key: "updateMatches",
				value: function() {
					if (this.renderingDone) {
						for (var e = this.matches, t = this.textDivs, n = this.textContentItemsStr, r = -1, i = 0, o = e.length; o > i; i++) {
							for (var a = e[i], s = Math.max(r, a.begin.divIdx), l = s, u = a.end.divIdx; u >= l; l++) {
								var c = t[l];
								c.textContent = n[l], c.className = ""
							}
							r = a.end.divIdx + 1
						}
						if (null !== this.findController && this.findController.active) {
							var d = void 0,
								h = void 0;
							null !== this.findController && (d = this.findController.pageMatches[this.pageIdx] || null, h = this.findController.pageMatchesLength ? this.findController.pageMatchesLength[this.pageIdx] || null : null), this.matches = this.convertMatches(d, h), this.renderMatches(this.matches)
						}
					}
				}
			}, {
				key: "_bindMouse",
				value: function() {
					var e = this,
						t = this.textLayerDiv,
						n = null;
					t.addEventListener("mousedown", function(r) {
						if (e.enhanceTextSelection && e.textLayerRenderTask) return e.textLayerRenderTask.expandTextDivs(!0), void(n && (clearTimeout(n), n = null));
						var i = t.querySelector(".endOfContent");
						if (i) {
							var o = r.target !== t;
							if (o = o && "none" !== window.getComputedStyle(i).getPropertyValue("-moz-user-select")) {
								var a = t.getBoundingClientRect(),
									s = Math.max(0, (r.pageY - a.top) / a.height);
								i.style.top = (100 * s).toFixed(2) + "%"
							}
							i.classList.add("active")
						}
					}), t.addEventListener("mouseup", function() {
						if (e.enhanceTextSelection && e.textLayerRenderTask) return void(n = setTimeout(function() {
							e.textLayerRenderTask && e.textLayerRenderTask.expandTextDivs(!1), n = null
						}, u));
						var r = t.querySelector(".endOfContent");
						r && (r.style.top = "", r.classList.remove("active"))
					})
				}
			}]), e
		}(),
		d = function() {
			function e() {
				r(this, e)
			}
			return i(e, [{
				key: "createTextLayerBuilder",
				value: function(e, t, n) {
					var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : !1;
					return new c({
						textLayerDiv: e,
						pageIndex: t,
						viewport: n,
						enhanceTextSelection: r
					})
				}
			}]), e
		}();
	t.TextLayerBuilder = c, t.DefaultTextLayerFactory = d
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.SecondaryToolbar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(8),
		a = n(0),
		s = function() {
			function e(t, n, i) {
				r(this, e), this.toolbar = t.toolbar, this.toggleButton = t.toggleButton, this.toolbarButtonContainer = t.toolbarButtonContainer, this.buttons = [{
					element: t.presentationModeButton,
					eventName: "presentationmode",
					close: !0
				}, {
					element: t.openFileButton,
					eventName: "openfile",
					close: !0
				}, {
					element: t.printButton,
					eventName: "print",
					close: !0
				}, {
					element: t.downloadButton,
					eventName: "download",
					close: !0
				}, {
					element: t.viewBookmarkButton,
					eventName: null,
					close: !0
				}, {
					element: t.firstPageButton,
					eventName: "firstpage",
					close: !0
				}, {
					element: t.lastPageButton,
					eventName: "lastpage",
					close: !0
				}, {
					element: t.pageRotateCwButton,
					eventName: "rotatecw",
					close: !1
				}, {
					element: t.pageRotateCcwButton,
					eventName: "rotateccw",
					close: !1
				}, {
					element: t.cursorSelectToolButton,
					eventName: "switchcursortool",
					eventDetails: {
						tool: o.CursorTool.SELECT
					},
					close: !0
				}, {
					element: t.cursorHandToolButton,
					eventName: "switchcursortool",
					eventDetails: {
						tool: o.CursorTool.HAND
					},
					close: !0
				}, {
					element: t.documentPropertiesButton,
					eventName: "documentproperties",
					close: !0
				}], this.items = {
					firstPage: t.firstPageButton,
					lastPage: t.lastPageButton,
					pageRotateCw: t.pageRotateCwButton,
					pageRotateCcw: t.pageRotateCcwButton
				}, this.mainContainer = n, this.eventBus = i, this.opened = !1, this.containerHeight = null, this.previousContainerHeight = null, this.reset(), this._bindClickListeners(), this._bindCursorToolsListener(t), this.eventBus.on("resize", this._setMaxHeight.bind(this))
			}
			return i(e, [{
				key: "setPageNumber",
				value: function(e) {
					this.pageNumber = e, this._updateUIState()
				}
			}, {
				key: "setPagesCount",
				value: function(e) {
					this.pagesCount = e, this._updateUIState()
				}
			}, {
				key: "reset",
				value: function() {
					this.pageNumber = 0, this.pagesCount = 0, this._updateUIState()
				}
			}, {
				key: "_updateUIState",
				value: function() {
					this.items.firstPage.disabled = this.pageNumber <= 1, this.items.lastPage.disabled = this.pageNumber >= this.pagesCount, this.items.pageRotateCw.disabled = 0 === this.pagesCount, this.items.pageRotateCcw.disabled = 0 === this.pagesCount
				}
			}, {
				key: "_bindClickListeners",
				value: function() {
					var e = this;
					this.toggleButton.addEventListener("click", this.toggle.bind(this));
					var t = function(t) {
							var n = e.buttons[t],
								r = n.element,
								i = n.eventName,
								o = n.close,
								a = n.eventDetails;
							r.addEventListener("click", function(t) {
								if (null !== i) {
									var n = {
										source: e
									};
									for (var r in a) n[r] = a[r];
									e.eventBus.dispatch(i, n)
								}
								o && e.close()
							})
						};
					for (var n in this.buttons) t(n)
				}
			}, {
				key: "_bindCursorToolsListener",
				value: function(e) {
					this.eventBus.on("cursortoolchanged", function(t) {
						switch (e.cursorSelectToolButton.classList.remove("toggled"), e.cursorHandToolButton.classList.remove("toggled"), t.tool) {
						case o.CursorTool.SELECT:
							e.cursorSelectToolButton.classList.add("toggled");
							break;
						case o.CursorTool.HAND:
							e.cursorHandToolButton.classList.add("toggled")
						}
					})
				}
			}, {
				key: "open",
				value: function() {
					this.opened || (this.opened = !0, this._setMaxHeight(), this.toggleButton.classList.add("toggled"), this.toolbar.classList.remove("hidden"))
				}
			}, {
				key: "close",
				value: function() {
					this.opened && (this.opened = !1, this.toolbar.classList.add("hidden"), this.toggleButton.classList.remove("toggled"))
				}
			}, {
				key: "toggle",
				value: function() {
					this.opened ? this.close() : this.open()
				}
			}, {
				key: "_setMaxHeight",
				value: function() {
					this.opened && (this.containerHeight = this.mainContainer.clientHeight, this.containerHeight !== this.previousContainerHeight && (this.toolbarButtonContainer.setAttribute("style", "max-height: " + (this.containerHeight - a.SCROLLBAR_PADDING) + "px;"), this.previousContainerHeight = this.containerHeight))
				}
			}, {
				key: "isOpen",
				get: function() {
					return this.opened
				}
			}]), e
		}();
	t.SecondaryToolbar = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.Toolbar = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = n(0),
		a = "visiblePageIsLoading",
		s = 8,
		l = 22,
		u = function() {
			function e(t, n, i) {
				var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : o.NullL10n;
				r(this, e), this.toolbar = t.container, this.mainContainer = n, this.eventBus = i, this.l10n = a, this.items = t, this._wasLocalized = !1, this.reset(), this._bindListeners()
			}
			return i(e, [{
				key: "setPageNumber",
				value: function(e, t) {
					this.pageNumber = e, this.pageLabel = t, this._updateUIState(!1)
				}
			}, {
				key: "setPagesCount",
				value: function(e, t) {
					this.pagesCount = e, this.hasPageLabels = t, this._updateUIState(!0)
				}
			}, {
				key: "setPageScale",
				value: function(e, t) {
					this.pageScaleValue = e, this.pageScale = t, this._updateUIState(!1)
				}
			}, {
				key: "reset",
				value: function() {
					this.pageNumber = 0, this.pageLabel = null, this.hasPageLabels = !1, this.pagesCount = 0, this.pageScaleValue = o.DEFAULT_SCALE_VALUE, this.pageScale = o.DEFAULT_SCALE, this._updateUIState(!0)
				}
			}, {
				key: "_bindListeners",
				value: function() {
					var e = this,
						t = this.eventBus,
						n = this.items,
						r = this;
					n.previous.addEventListener("click", function() {
						t.dispatch("previouspage")
					}), n.next.addEventListener("click", function() {
						t.dispatch("nextpage")
					}), n.zoomIn.addEventListener("click", function() {
						t.dispatch("zoomin")
					}), n.zoomOut.addEventListener("click", function() {
						t.dispatch("zoomout")
					}), n.pageNumber.addEventListener("click", function() {
						this.select()
					}), n.pageNumber.addEventListener("change", function() {
						t.dispatch("pagenumberchanged", {
							source: r,
							value: this.value
						})
					}), n.scaleSelect.addEventListener("change", function() {
						"custom" !== this.value && t.dispatch("scalechanged", {
							source: r,
							value: this.value
						})
					}), n.presentationModeButton.addEventListener("click", function() {
						t.dispatch("presentationmode")
					}), n.openFile.addEventListener("click", function() {
						t.dispatch("openfile")
					}), n.print.addEventListener("click", function() {
						t.dispatch("print")
					}), n.download.addEventListener("click", function() {
						t.dispatch("download")
					}), n.scaleSelect.oncontextmenu = o.noContextMenuHandler, t.on("localized", function() {
						e._localized()
					})
				}
			}, {
				key: "_localized",
				value: function() {
					this._wasLocalized = !0, this._adjustScaleWidth(), this._updateUIState(!0)
				}
			}, {
				key: "_updateUIState",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1;
					if (this._wasLocalized) {
						var t = this.pageNumber,
							n = this.pagesCount,
							r = this.items,
							i = (this.pageScaleValue || this.pageScale).toString(),
							a = this.pageScale;
						e && (this.hasPageLabels ? r.pageNumber.type = "text" : (r.pageNumber.type = "number", this.l10n.get("of_pages", {
							pagesCount: n
						}, "of {{pagesCount}}").then(function(e) {
							r.numPages.textContent = e
						})), r.pageNumber.max = n), this.hasPageLabels ? (r.pageNumber.value = this.pageLabel, this.l10n.get("page_of_pages", {
							pageNumber: t,
							pagesCount: n
						}, "({{pageNumber}} of {{pagesCount}})").then(function(e) {
							r.numPages.textContent = e
						})) : r.pageNumber.value = t, r.previous.disabled = 1 >= t, r.next.disabled = t >= n, r.zoomOut.disabled = a <= o.MIN_SCALE, r.zoomIn.disabled = a >= o.MAX_SCALE;
						var s = Math.round(1e4 * a) / 100;
						this.l10n.get("page_scale_percent", {
							scale: s
						}, "{{scale}}%").then(function(e) {
							for (var t = r.scaleSelect.options, n = !1, o = 0, a = t.length; a > o; o++) {
								var s = t[o];
								s.value === i ? (s.selected = !0, n = !0) : s.selected = !1
							}
							n || (r.customScaleOption.textContent = e, r.customScaleOption.selected = !0)
						})
					}
				}
			}, {
				key: "updateLoadingIndicatorState",
				value: function() {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : !1,
						t = this.items.pageNumber;
					e ? t.classList.add(a) : t.classList.remove(a)
				}
			}, {
				key: "_adjustScaleWidth",
				value: function() {
					var e = this.items.scaleSelectContainer,
						t = this.items.scaleSelect;
					o.animationStarted.then(function() {
						if (0 === e.clientWidth && e.setAttribute("style", "display: inherit;"), e.clientWidth > 0) {
							t.setAttribute("style", "min-width: inherit;");
							var n = t.clientWidth + s;
							t.setAttribute("style", "min-width: " + (n + l) + "px;"), e.setAttribute("style", "min-width: " + n + "px; max-width: " + n + "px;")
						}
					})
				}
			}]), e
		}();
	t.Toolbar = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		o = 20,
		a = function() {
			function e(t) {
				var n = this,
					i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
				r(this, e), this.fingerprint = t, this.cacheSize = i, this._initializedPromise = this._readFromStorage().then(function(e) {
					var t = JSON.parse(e || "{}");
					"files" in t || (t.files = []), t.files.length >= n.cacheSize && t.files.shift();
					for (var r = void 0, i = 0, o = t.files.length; o > i; i++) {
						var a = t.files[i];
						if (a.fingerprint === n.fingerprint) {
							r = i;
							break
						}
					}
					"number" != typeof r && (r = t.files.push({
						fingerprint: n.fingerprint
					}) - 1), n.file = t.files[r], n.database = t
				})
			}
			return i(e, [{
				key: "_writeToStorage",
				value: function() {
					var e = this;
					return new Promise(function(t) {
						var n = JSON.stringify(e.database);
						localStorage.setItem("pdfjs.history", n), t()
					})
				}
			}, {
				key: "_readFromStorage",
				value: function() {
					return new Promise(function(e) {
						e(localStorage.getItem("pdfjs.history"))
					})
				}
			}, {
				key: "set",
				value: function(e, t) {
					var n = this;
					return this._initializedPromise.then(function() {
						return n.file[e] = t, n._writeToStorage()
					})
				}
			}, {
				key: "setMultiple",
				value: function(e) {
					var t = this;
					return this._initializedPromise.then(function() {
						for (var n in e) t.file[n] = e[n];
						return t._writeToStorage()
					})
				}
			}, {
				key: "get",
				value: function(e, t) {
					var n = this;
					return this._initializedPromise.then(function() {
						var r = n.file[e];
						return void 0 !== r ? r : t
					})
				}
			}, {
				key: "getMultiple",
				value: function(e) {
					var t = this;
					return this._initializedPromise.then(function() {
						var n = Object.create(null);
						for (var r in e) {
							var i = t.file[r];
							n[r] = void 0 !== i ? i : e[r]
						}
						return n
					})
				}
			}]), e
		}();
	t.ViewHistory = a
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e, t) {
		if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function o(e, t) {
		if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
			constructor: {
				value: e,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericCom = void 0;
	var a = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		s = n(4),
		l = n(32),
		u = n(33),
		c = n(34),
		d = n(1),
		h = {},
		f = function(e) {
			function t() {
				return r(this, t), i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
			}
			return o(t, e), a(t, [{
				key: "_writeToStorage",
				value: function(e) {
					return new Promise(function(t) {
						localStorage.setItem("pdfjs.preferences", JSON.stringify(e)), t()
					})
				}
			}, {
				key: "_readFromStorage",
				value: function(e) {
					return new Promise(function(e) {
						var t = JSON.parse(localStorage.getItem("pdfjs.preferences"));
						e(t)
					})
				}
			}]), t
		}(l.BasePreferences),
		p = Object.create(s.DefaultExternalServices);
	p.createDownloadManager = function() {
		return new u.DownloadManager
	}, p.createPreferences = function() {
		return new f
	}, p.createL10n = function() {
		return new c.GenericL10n(d.PDFJS.locale)
	}, s.PDFViewerApplication.externalServices = p, t.GenericCom = h
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i() {
		return l || (l = Promise.resolve({
			showPreviousViewOnLoad: !0,
			defaultZoomValue: "",
			sidebarViewOnLoad: 0,
			enableHandToolOnLoad: !1,
			cursorToolOnLoad: 0,
			enableWebGL: !1,
			pdfBugEnabled: !1,
			disableRange: !1,
			disableStream: !1,
			disableAutoFetch: !1,
			disableFontFace: !1,
			disableTextLayer: !1,
			useOnlyCssZoom: !1,
			externalLinkTarget: 0,
			enhanceTextSelection: !1,
			renderer: "canvas",
			renderInteractiveForms: !1,
			enablePrintAutoRotate: !1,
			disablePageMode: !1,
			disablePageLabels: !1
		})), l
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.BasePreferences = void 0;
	var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
	function(e) {
		return typeof e
	} : function(e) {
		return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
	}, a = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t
		}
	}(), s = n(0), l = null, u = function() {
		function e() {
			var t = this;
			if (r(this, e), this.constructor === e) throw new Error("Cannot initialize BasePreferences.");
			this.prefs = null, this._initializedPromise = i().then(function(e) {
				return Object.defineProperty(t, "defaults", {
					value: Object.freeze(e),
					writable: !1,
					enumerable: !0,
					configurable: !1
				}), t.prefs = (0, s.cloneObj)(e), t._readFromStorage(e)
			}).then(function(e) {
				e && (t.prefs = e)
			})
		}
		return a(e, [{
			key: "_writeToStorage",
			value: function(e) {
				return Promise.reject(new Error("Not implemented: _writeToStorage"))
			}
		}, {
			key: "_readFromStorage",
			value: function(e) {
				return Promise.reject(new Error("Not implemented: _readFromStorage"))
			}
		}, {
			key: "reset",
			value: function() {
				var e = this;
				return this._initializedPromise.then(function() {
					return e.prefs = (0, s.cloneObj)(e.defaults), e._writeToStorage(e.defaults)
				})
			}
		}, {
			key: "reload",
			value: function() {
				var e = this;
				return this._initializedPromise.then(function() {
					return e._readFromStorage(e.defaults)
				}).then(function(t) {
					t && (e.prefs = t)
				})
			}
		}, {
			key: "set",
			value: function(e, t) {
				var n = this;
				return this._initializedPromise.then(function() {
					if (void 0 === n.defaults[e]) throw new Error('Set preference: "' + e + '" is undefined.');
					if (void 0 === t) throw new Error("Set preference: no value is specified.");
					var r = "undefined" == typeof t ? "undefined" : o(t),
						i = o(n.defaults[e]);
					if (r !== i) {
						if ("number" !== r || "string" !== i) throw new Error('Set preference: "' + t + '" is a ' + r + ", " + ("expected a " + i + "."));
						t = t.toString()
					} else if ("number" === r && !Number.isInteger(t)) throw new Error('Set preference: "' + t + '" must be an integer.');
					return n.prefs[e] = t, n._writeToStorage(n.prefs)
				})
			}
		}, {
			key: "get",
			value: function(e) {
				var t = this;
				return this._initializedPromise.then(function() {
					var n = t.defaults[e];
					if (void 0 === n) throw new Error('Get preference: "' + e + '" is undefined.');
					var r = t.prefs[e];
					return void 0 !== r ? r : n
				})
			}
		}]), e
	}();
	t.BasePreferences = u
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	function i(e, t) {
		var n = document.createElement("a");
		if (n.click) n.href = e, n.target = "_parent", "download" in n && (n.download = t), (document.body || document.documentElement).appendChild(n), n.click(), n.parentNode.removeChild(n);
		else {
			if (window.top === window && e.split("#")[0] === window.location.href.split("#")[0]) {
				var r = -1 === e.indexOf("?") ? "?" : "&";
				e = e.replace(/#|$/, r + "$&")
			}
			window.open(e, "_parent")
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.DownloadManager = void 0;
	var o = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}(),
		a = n(1),
		s = function() {
			function e() {
				r(this, e)
			}
			return o(e, [{
				key: "downloadUrl",
				value: function(e, t) {
					(0, a.createValidAbsoluteUrl)(e, "http://example.com") && i(e + "#pdfjs.action=download", t)
				}
			}, {
				key: "downloadData",
				value: function(e, t, n) {
					if (navigator.msSaveBlob) return navigator.msSaveBlob(new Blob([e], {
						type: n
					}), t);
					var r = (0, a.createObjectURL)(e, n, a.PDFJS.disableCreateObjectURL);
					i(r, t)
				}
			}, {
				key: "download",
				value: function(e, t, n) {
					if (navigator.msSaveBlob) return void(navigator.msSaveBlob(e, n) || this.downloadUrl(t, n));
					if (a.PDFJS.disableCreateObjectURL) return void this.downloadUrl(t, n);
					var r = URL.createObjectURL(e);
					i(r, n)
				}
			}]), e
		}();
	t.DownloadManager = s
}, function(e, t, n) {
	"use strict";

	function r(e, t) {
		if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.GenericL10n = void 0;
	var i = function() {
			function e(e, t) {
				for (var n = 0; n < t.length; n++) {
					var r = t[n];
					r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
				}
			}
			return function(t, n, r) {
				return n && e(t.prototype, n), r && e(t, r), t
			}
		}();
	n(35);
	var o = document.webL10n,
		a = function() {
			function e(t) {
				r(this, e), this._lang = t, this._ready = new Promise(function(e, n) {
					o.setLanguage(t, function() {
						e(o)
					})
				})
			}
			return i(e, [{
				key: "getDirection",
				value: function() {
					return this._ready.then(function(e) {
						return e.getDirection()
					})
				}
			}, {
				key: "get",
				value: function(e, t, n) {
					return this._ready.then(function(r) {
						return r.get(e, t, n)
					})
				}
			}, {
				key: "translate",
				value: function(e) {
					return this._ready.then(function(t) {
						return t.translate(e)
					})
				}
			}]), e
		}();
	t.GenericL10n = a
}, function(e, t, n) {
	"use strict";
	document.webL10n = function(e, t, n) {
		function r() {
			return t.querySelectorAll('link[type="application/l10n"]')
		}
		function i() {
			var e = t.querySelector('script[type="application/l10n"]');
			return e ? JSON.parse(e.innerHTML) : null
		}
		function o(e) {
			return e ? e.querySelectorAll("*[data-l10n-id]") : []
		}
		function a(e) {
			if (!e) return {};
			var t = e.getAttribute("data-l10n-id"),
				n = e.getAttribute("data-l10n-args"),
				r = {};
			if (n) try {
				r = JSON.parse(n)
			} catch (i) {
				console.warn("could not parse arguments for #" + t)
			}
			return {
				id: t,
				args: r
			}
		}
		function s(e) {
			var n = t.createEvent("Event");
			n.initEvent("localized", !0, !1), n.language = e, t.dispatchEvent(n)
		}
		function l(e, t, n) {
			t = t ||
			function(e) {}, n = n ||
			function() {};
			var r = new XMLHttpRequest;
			r.open("GET", e, C), r.overrideMimeType && r.overrideMimeType("text/plain; charset=utf-8"), r.onreadystatechange = function() {
				4 == r.readyState && (200 == r.status || 0 === r.status ? t(r.responseText) : n())
			}, r.onerror = n, r.ontimeout = n;
			try {
				r.send(null)
			} catch (i) {
				n()
			}
		}
		function u(e, t, n, r) {
			function i(e) {
				return e.lastIndexOf("\\") < 0 ? e : e.replace(/\\\\/g, "\\").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "	").replace(/\\b/g, "\b").replace(/\\f/g, "\f").replace(/\\{/g, "{").replace(/\\}/g, "}").replace(/\\"/g, '"').replace(/\\'/g, "'")
			}
			function o(e, n) {
				function r(e, n, r) {
					function l() {
						for (;;) {
							if (!p.length) return void r();
							var e = p.shift();
							if (!c.test(e)) {
								if (n) {
									if (b = d.exec(e)) {
										g = b[1].toLowerCase(), m = "*" !== g && g !== t && g !== v;
										continue
									}
									if (m) continue;
									if (b = h.exec(e)) return void o(a + b[1], l)
								}
								var u = e.match(f);
								u && 3 == u.length && (s[u[1]] = i(u[2]))
							}
						}
					}
					var p = e.replace(u, "").split(/[\r\n]+/),
						g = "*",
						v = t.split("-", 1)[0],
						m = !1,
						b = "";
					l()
				}
				function o(e, t) {
					l(e, function(e) {
						r(e, !1, t)
					}, function() {
						console.warn(e + " not found."), t()
					})
				}
				var s = {},
					u = /^\s*|\s*$/,
					c = /^\s*#|^\s*$/,
					d = /^\s*\[(.*)\]\s*$/,
					h = /^\s*@import\s+url\((.*)\)\s*$/i,
					f = /^([^=\s]*)\s*=\s*(.+)$/;
				r(e, !0, function() {
					n(s)
				})
			}
			var a = e.replace(/[^\/]*$/, "") || "./";
			l(e, function(e) {
				_ += e, o(e, function(e) {
					for (var t in e) {
						var r, i, o = t.lastIndexOf(".");
						o > 0 ? (r = t.substring(0, o), i = t.substr(o + 1)) : (r = t, i = w), y[r] || (y[r] = {}), y[r][i] = e[t]
					}
					n && n()
				})
			}, r)
		}
		function c(e, t) {
			function n(e) {
				var t = e.href;
				this.load = function(e, n) {
					u(t, e, n, function() {
						console.warn(t + " not found."), console.warn('"' + e + '" resource not found'), S = "", n()
					})
				}
			}
			e && (e = e.toLowerCase()), t = t ||
			function() {}, d(), S = e;
			var o = r(),
				a = o.length;
			if (0 === a) {
				var l = i();
				if (l && l.locales && l.default_locale) {
					if (console.log("using the embedded JSON directory, early way out"), y = l.locales[e], !y) {
						var c = l.default_locale.toLowerCase();
						for (var h in l.locales) {
							if (h = h.toLowerCase(), h === e) {
								y = l.locales[e];
								break
							}
							h === c && (y = l.locales[c])
						}
					}
					t()
				} else console.log("no resource to load, early way out");
				return s(e), void(x = "complete")
			}
			var f = null,
				p = 0;
			f = function() {
				p++, p >= a && (t(), s(e), x = "complete")
			};
			for (var g = 0; a > g; g++) {
				var v = new n(o[g]);
				v.load(e, f)
			}
		}
		function d() {
			y = {}, _ = "", S = ""
		}
		function h(e) {
			function t(e, t) {
				return -1 !== t.indexOf(e)
			}
			function n(e, t, n) {
				return e >= t && n >= e
			}
			var r = {
				af: 3,
				ak: 4,
				am: 4,
				ar: 1,
				asa: 3,
				az: 0,
				be: 11,
				bem: 3,
				bez: 3,
				bg: 3,
				bh: 4,
				bm: 0,
				bn: 3,
				bo: 0,
				br: 20,
				brx: 3,
				bs: 11,
				ca: 3,
				cgg: 3,
				chr: 3,
				cs: 12,
				cy: 17,
				da: 3,
				de: 3,
				dv: 3,
				dz: 0,
				ee: 3,
				el: 3,
				en: 3,
				eo: 3,
				es: 3,
				et: 3,
				eu: 3,
				fa: 0,
				ff: 5,
				fi: 3,
				fil: 4,
				fo: 3,
				fr: 5,
				fur: 3,
				fy: 3,
				ga: 8,
				gd: 24,
				gl: 3,
				gsw: 3,
				gu: 3,
				guw: 4,
				gv: 23,
				ha: 3,
				haw: 3,
				he: 2,
				hi: 4,
				hr: 11,
				hu: 0,
				id: 0,
				ig: 0,
				ii: 0,
				is: 3,
				it: 3,
				iu: 7,
				ja: 0,
				jmc: 3,
				jv: 0,
				ka: 0,
				kab: 5,
				kaj: 3,
				kcg: 3,
				kde: 0,
				kea: 0,
				kk: 3,
				kl: 3,
				km: 0,
				kn: 0,
				ko: 0,
				ksb: 3,
				ksh: 21,
				ku: 3,
				kw: 7,
				lag: 18,
				lb: 3,
				lg: 3,
				ln: 4,
				lo: 0,
				lt: 10,
				lv: 6,
				mas: 3,
				mg: 4,
				mk: 16,
				ml: 3,
				mn: 3,
				mo: 9,
				mr: 3,
				ms: 0,
				mt: 15,
				my: 0,
				nah: 3,
				naq: 7,
				nb: 3,
				nd: 3,
				ne: 3,
				nl: 3,
				nn: 3,
				no: 3,
				nr: 3,
				nso: 4,
				ny: 3,
				nyn: 3,
				om: 3,
				or: 3,
				pa: 3,
				pap: 3,
				pl: 13,
				ps: 3,
				pt: 3,
				rm: 3,
				ro: 9,
				rof: 3,
				ru: 11,
				rwk: 3,
				sah: 0,
				saq: 3,
				se: 7,
				seh: 3,
				ses: 0,
				sg: 0,
				sh: 11,
				shi: 19,
				sk: 12,
				sl: 14,
				sma: 7,
				smi: 7,
				smj: 7,
				smn: 7,
				sms: 7,
				sn: 3,
				so: 3,
				sq: 3,
				sr: 11,
				ss: 3,
				ssy: 3,
				st: 3,
				sv: 3,
				sw: 3,
				syr: 3,
				ta: 3,
				te: 3,
				teo: 3,
				th: 0,
				ti: 4,
				tig: 3,
				tk: 3,
				tl: 4,
				tn: 3,
				to: 0,
				tr: 0,
				ts: 3,
				tzm: 22,
				uk: 11,
				ur: 3,
				ve: 3,
				vi: 0,
				vun: 3,
				wa: 4,
				wae: 3,
				wo: 0,
				xh: 3,
				xog: 3,
				yo: 0,
				zh: 0,
				zu: 3
			},
				i = {
					0: function(e) {
						return "other"
					},
					1: function(e) {
						return n(e % 100, 3, 10) ? "few" : 0 === e ? "zero" : n(e % 100, 11, 99) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
					},
					2: function(e) {
						return 0 !== e && e % 10 === 0 ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
					},
					3: function(e) {
						return 1 == e ? "one" : "other"
					},
					4: function(e) {
						return n(e, 0, 1) ? "one" : "other"
					},
					5: function(e) {
						return n(e, 0, 2) && 2 != e ? "one" : "other"
					},
					6: function(e) {
						return 0 === e ? "zero" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
					},
					7: function(e) {
						return 2 == e ? "two" : 1 == e ? "one" : "other"
					},
					8: function(e) {
						return n(e, 3, 6) ? "few" : n(e, 7, 10) ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
					},
					9: function(e) {
						return 0 === e || 1 != e && n(e % 100, 1, 19) ? "few" : 1 == e ? "one" : "other"
					},
					10: function(e) {
						return n(e % 10, 2, 9) && !n(e % 100, 11, 19) ? "few" : e % 10 != 1 || n(e % 100, 11, 19) ? "other" : "one"
					},
					11: function(e) {
						return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : e % 10 === 0 || n(e % 10, 5, 9) || n(e % 100, 11, 14) ? "many" : e % 10 == 1 && e % 100 != 11 ? "one" : "other"
					},
					12: function(e) {
						return n(e, 2, 4) ? "few" : 1 == e ? "one" : "other"
					},
					13: function(e) {
						return n(e % 10, 2, 4) && !n(e % 100, 12, 14) ? "few" : 1 != e && n(e % 10, 0, 1) || n(e % 10, 5, 9) || n(e % 100, 12, 14) ? "many" : 1 == e ? "one" : "other"
					},
					14: function(e) {
						return n(e % 100, 3, 4) ? "few" : e % 100 == 2 ? "two" : e % 100 == 1 ? "one" : "other"
					},
					15: function(e) {
						return 0 === e || n(e % 100, 2, 10) ? "few" : n(e % 100, 11, 19) ? "many" : 1 == e ? "one" : "other"
					},
					16: function(e) {
						return e % 10 == 1 && 11 != e ? "one" : "other"
					},
					17: function(e) {
						return 3 == e ? "few" : 0 === e ? "zero" : 6 == e ? "many" : 2 == e ? "two" : 1 == e ? "one" : "other"
					},
					18: function(e) {
						return 0 === e ? "zero" : n(e, 0, 2) && 0 !== e && 2 != e ? "one" : "other"
					},
					19: function(e) {
						return n(e, 2, 10) ? "few" : n(e, 0, 1) ? "one" : "other"
					},
					20: function(e) {
						return !n(e % 10, 3, 4) && e % 10 != 9 || n(e % 100, 10, 19) || n(e % 100, 70, 79) || n(e % 100, 90, 99) ? e % 1e6 === 0 && 0 !== e ? "many" : e % 10 != 2 || t(e % 100, [12, 72, 92]) ? e % 10 != 1 || t(e % 100, [11, 71, 91]) ? "other" : "one" : "two" : "few"
					},
					21: function(e) {
						return 0 === e ? "zero" : 1 == e ? "one" : "other"
					},
					22: function(e) {
						return n(e, 0, 1) || n(e, 11, 99) ? "one" : "other"
					},
					23: function(e) {
						return n(e % 10, 1, 2) || e % 20 === 0 ? "one" : "other"
					},
					24: function(e) {
						return n(e, 3, 10) || n(e, 13, 19) ? "few" : t(e, [2, 12]) ? "two" : t(e, [1, 11]) ? "one" : "other"
					}
				},
				o = r[e.replace(/-.*$/, "")];
			return o in i ? i[o] : (console.warn("plural form unknown for [" + e + "]"), function() {
				return "other"
			})
		}
		function f(e, t, n) {
			var r = y[e];
			if (!r) {
				if (console.warn("#" + e + " is undefined."), !n) return null;
				r = n
			}
			var i = {};
			for (var o in r) {
				var a = r[o];
				a = p(a, t, e, o), a = g(a, t, e), i[o] = a
			}
			return i
		}
		function p(e, t, n, r) {
			var i = /\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,
				o = i.exec(e);
			if (!o || !o.length) return e;
			var a, s = o[1],
				l = o[2];
			if (t && l in t ? a = t[l] : l in y && (a = y[l]), s in P) {
				var u = P[s];
				e = u(e, a, n, r)
			}
			return e
		}
		function g(e, t, n) {
			var r = /\{\{\s*(.+?)\s*\}\}/g;
			return e.replace(r, function(e, r) {
				return t && r in t ? t[r] : r in y ? y[r] : (console.log("argument {{" + r + "}} for #" + n + " is undefined."), e)
			})
		}
		function v(e) {
			var n = a(e);
			if (n.id) {
				var r = f(n.id, n.args);
				if (!r) return void console.warn("#" + n.id + " is undefined.");
				if (r[w]) {
					if (0 === m(e)) e[w] = r[w];
					else {
						for (var i = e.childNodes, o = !1, s = 0, l = i.length; l > s; s++) 3 === i[s].nodeType && /\S/.test(i[s].nodeValue) && (o ? i[s].nodeValue = "" : (i[s].nodeValue = r[w], o = !0));
						if (!o) {
							var u = t.createTextNode(r[w]);
							e.insertBefore(u, e.firstChild)
						}
					}
					delete r[w]
				}
				for (var c in r) e[c] = r[c]
			}
		}
		function m(e) {
			if (e.children) return e.children.length;
			if ("undefined" != typeof e.childElementCount) return e.childElementCount;
			for (var t = 0, n = 0; n < e.childNodes.length; n++) t += 1 === e.nodeType ? 1 : 0;
			return t
		}
		function b(e) {
			e = e || t.documentElement;
			for (var n = o(e), r = n.length, i = 0; r > i; i++) v(n[i]);
			v(e)
		}
		var y = {},
			_ = "",
			w = "textContent",
			S = "",
			P = {},
			x = "loading",
			C = !0;
		return P.plural = function(e, t, n, r) {
			var i = parseFloat(t);
			if (isNaN(i)) return e;
			if (r != w) return e;
			P._pluralRules || (P._pluralRules = h(S));
			var o = "[" + P._pluralRules(i) + "]";
			return 0 === i && n + "[zero]" in y ? e = y[n + "[zero]"][r] : 1 == i && n + "[one]" in y ? e = y[n + "[one]"][r] : 2 == i && n + "[two]" in y ? e = y[n + "[two]"][r] : n + o in y ? e = y[n + o][r] : n + "[other]" in y && (e = y[n + "[other]"][r]), e
		}, {
			get: function(e, t, n) {
				var r = e.lastIndexOf("."),
					i = w;
				r > 0 && (i = e.substr(r + 1), e = e.substring(0, r));
				var o;
				n && (o = {}, o[i] = n);
				var a = f(e, t, o);
				return a && i in a ? a[i] : "{{" + e + "}}"
			},
			getData: function() {
				return y
			},
			getText: function() {
				return _
			},
			getLanguage: function() {
				return S
			},
			setLanguage: function(e, t) {
				c(e, function() {
					t && t()
				})
			},
			getDirection: function() {
				var e = ["ar", "he", "fa", "ps", "ur"],
					t = S.split("-", 1)[0];
				return e.indexOf(t) >= 0 ? "rtl" : "ltr"
			},
			translate: b,
			getReadyState: function() {
				return x
			},
			ready: function(n) {
				n && ("complete" == x || "interactive" == x ? e.setTimeout(function() {
					n()
				}) : t.addEventListener && t.addEventListener("localized", function r() {
					t.removeEventListener("localized", r), n()
				}))
			}
		}
	}(window, document)
}, function(e, t, n) {
	"use strict";

	function r(e, t, n, r) {
		var i = h.scratchCanvas,
			o = 150,
			a = o / 72;
		i.width = Math.floor(r.width * a), i.height = Math.floor(r.height * a);
		var s = Math.floor(r.width * u.CSS_UNITS) + "px",
			l = Math.floor(r.height * u.CSS_UNITS) + "px",
			c = i.getContext("2d");
		return c.save(), c.fillStyle = "rgb(255, 255, 255)", c.fillRect(0, 0, i.width, i.height), c.restore(), t.getPage(n).then(function(e) {
			var t = {
				canvasContext: c,
				transform: [a, 0, 0, a, 0, 0],
				viewport: e.getViewport(1, r.rotation),
				intent: "print"
			};
			return e.render(t).promise
		}).then(function() {
			return {
				width: s,
				height: l
			}
		})
	}
	function i(e, t, n, r) {
		this.pdfDocument = e, this.pagesOverview = t, this.printContainer = n, this.l10n = r || u.NullL10n, this.currentPage = -1, this.scratchCanvas = document.createElement("canvas")
	}
	function o(e) {
		var t = document.createEvent("CustomEvent");
		t.initCustomEvent(e, !1, !1, "custom"), window.dispatchEvent(t)
	}
	function a() {
		h && (h.destroy(), o("afterprint"))
	}
	function s(e, t, n) {
		var r = document.getElementById("printServiceOverlay"),
			i = Math.round(100 * e / t),
			o = r.querySelector("progress"),
			a = r.querySelector(".relative-progress");
		o.value = i, n.get("print_progress_percent", {
			progress: i
		}, i + "%").then(function(e) {
			a.textContent = e
		})
	}
	function l() {
		if (!m) {
			if (f = c.PDFViewerApplication.overlayManager, !f) throw new Error("The overlay manager has not yet been initialized.");
			m = f.register("printServiceOverlay", document.getElementById("printServiceOverlay"), a, !0), document.getElementById("printCancel").onclick = a
		}
		return m
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.PDFPrintService = void 0;
	var u = n(0),
		c = n(4),
		d = n(1),
		h = null,
		f = null;
	i.prototype = {
		layout: function() {
			this.throwIfInactive();
			var e = document.querySelector("body");
			e.setAttribute("data-pdfjsprinting", !0);
			var t = this.pagesOverview.every(function(e) {
				return e.width === this.pagesOverview[0].width && e.height === this.pagesOverview[0].height
			}, this);
			t || console.warn("Not all pages have the same size. The printed result may be incorrect!"), this.pageStyleSheet = document.createElement("style");
			var n = this.pagesOverview[0];
			this.pageStyleSheet.textContent = "@supports ((size:A4) and (size:1pt 1pt)) {@page { size: " + n.width + "pt " + n.height + "pt;}}", e.appendChild(this.pageStyleSheet)
		},
		destroy: function() {
			h === this && (this.printContainer.textContent = "", this.pageStyleSheet && this.pageStyleSheet.parentNode && (this.pageStyleSheet.parentNode.removeChild(this.pageStyleSheet), this.pageStyleSheet = null), this.scratchCanvas.width = this.scratchCanvas.height = 0, this.scratchCanvas = null, h = null, l().then(function() {
				"printServiceOverlay" === f.active && f.close("printServiceOverlay")
			}))
		},
		renderPages: function() {
			var e = this,
				t = this.pagesOverview.length,
				n = function i(n, o) {
					if (e.throwIfInactive(), ++e.currentPage >= t) return s(t, t, e.l10n), void n();
					var a = e.currentPage;
					s(a, t, e.l10n), r(e, e.pdfDocument, a + 1, e.pagesOverview[a]).then(e.useRenderedPage.bind(e)).then(function() {
						i(n, o)
					}, o)
				};
			return new Promise(n)
		},
		useRenderedPage: function(e) {
			this.throwIfInactive();
			var t = document.createElement("img");
			t.style.width = e.width, t.style.height = e.height;
			var n = this.scratchCanvas;
			"toBlob" in n && !d.PDFJS.disableCreateObjectURL ? n.toBlob(function(e) {
				t.src = URL.createObjectURL(e)
			}) : t.src = n.toDataURL();
			var r = document.createElement("div");
			return r.appendChild(t), this.printContainer.appendChild(r), new Promise(function(e, n) {
				t.onload = e, t.onerror = n
			})
		},
		performPrint: function() {
			var e = this;
			return this.throwIfInactive(), new Promise(function(t) {
				setTimeout(function() {
					return e.active ? (p.call(window), void setTimeout(t, 20)) : void t()
				}, 0)
			})
		},
		get active() {
			return this === h
		},
		throwIfInactive: function() {
			if (!this.active) throw new Error("This print request was cancelled or completed.")
		}
	};
	var p = window.print;
	window.print = function() {
		if (h) return void console.warn("Ignored window.print() because of a pending print job.");
		l().then(function() {
			h && f.open("printServiceOverlay")
		});
		try {
			o("beforeprint")
		} finally {
			if (!h) return console.error("Expected print service to be initialized."), void l().then(function() {
				"printServiceOverlay" === f.active && f.close("printServiceOverlay")
			});
			var e = h;
			h.renderPages().then(function() {
				return e.performPrint()
			})["catch"](function() {}).then(function() {
				e.active && a()
			})
		}
	};
	var g = !! document.attachEvent;
	if (window.addEventListener("keydown", function(e) {
		if (80 === e.keyCode && (e.ctrlKey || e.metaKey) && !e.altKey && (!e.shiftKey || window.chrome || window.opera)) {
			if (window.print(), g) return;
			return e.preventDefault(), void(e.stopImmediatePropagation ? e.stopImmediatePropagation() : e.stopPropagation())
		}
	}, !0), g && document.attachEvent("onkeydown", function(e) {
		return e = e || window.event, 80 === e.keyCode && e.ctrlKey ? (e.keyCode = 0, !1) : void 0
	}), "onbeforeprint" in window) {
		var v = function(e) {
				"custom" !== e.detail && e.stopImmediatePropagation && e.stopImmediatePropagation()
			};
		window.addEventListener("beforeprint", v), window.addEventListener("afterprint", v)
	}
	var m = void 0;
	c.PDFPrintServiceFactory.instance = {
		supportsPrinting: !0,
		createPrintService: function(e, t, n, r) {
			if (h) throw new Error("The print service is created and active.");
			return h = new i(e, t, n, r)
		}
	}, t.PDFPrintService = i
}]), !
function(e, t) {
	"function" == typeof define && define.amd ? define(["jquery"], function(e) {
		return t(e)
	}) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function(e) {
	function t(e) {
		this.$container, this.constraints = null, this.__$tooltip, this.__init(e)
	}
	function n(t, n) {
		var r = !0;
		return e.each(t, function(e, i) {
			return void 0 === n[e] || t[e] !== n[e] ? (r = !1, !1) : void 0
		}), r
	}
	function r(t) {
		var n = t.attr("id"),
			r = n ? s.window.document.getElementById(n) : null;
		return r ? r === t[0] : e.contains(s.window.document.body, t[0])
	}
	function i() {
		if (!a) return !1;
		var e = a.document.body || a.document.documentElement,
			t = e.style,
			n = "transition",
			r = ["Moz", "Webkit", "Khtml", "O", "ms"];
		if ("string" == typeof t[n]) return !0;
		n = n.charAt(0).toUpperCase() + n.substr(1);
		for (var i = 0; i < r.length; i++) if ("string" == typeof t[r[i] + n]) return !0;
		return !1
	}
	var o = {
		animation: "fade",
		animationDuration: 350,
		content: null,
		contentAsHTML: !1,
		contentCloning: !1,
		debug: !0,
		delay: 300,
		delayTouch: [300, 500],
		functionInit: null,
		functionBefore: null,
		functionReady: null,
		functionAfter: null,
		functionFormat: null,
		IEmin: 6,
		interactive: !1,
		multiple: !1,
		parent: null,
		plugins: ["sideTip"],
		repositionOnScroll: !1,
		restoration: "none",
		selfDestruction: !0,
		theme: [],
		timer: 0,
		trackerInterval: 500,
		trackOrigin: !1,
		trackTooltip: !1,
		trigger: "hover",
		triggerClose: {
			click: !1,
			mouseleave: !1,
			originClick: !1,
			scroll: !1,
			tap: !1,
			touchleave: !1
		},
		triggerOpen: {
			click: !1,
			mouseenter: !1,
			tap: !1,
			touchstart: !1
		},
		updateAnimation: "rotate",
		zIndex: 9999999
	},
		a = "undefined" != typeof window ? window : null,
		s = {
			hasTouchCapability: !(!a || !("ontouchstart" in a || a.DocumentTouch && a.document instanceof a.DocumentTouch || a.navigator.maxTouchPoints)),
			hasTransitions: i(),
			IE: !1,
			semVer: "4.2.5",
			window: a
		},
		l = function() {
			this.__$emitterPrivate = e({}), this.__$emitterPublic = e({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = s
		};
	l.prototype = {
		__bridge: function(t, n, r) {
			if (!n[r]) {
				var i = function() {};
				i.prototype = t;
				var a = new i;
				a.__init && a.__init(n), e.each(t, function(e, t) {
					0 != e.indexOf("__") && (n[e] ? o.debug && console.log("The " + e + " method of the " + r + " plugin conflicts with another plugin or native methods") : (n[e] = function() {
						return a[e].apply(a, Array.prototype.slice.apply(arguments))
					}, n[e].bridged = a))
				}), n[r] = a
			}
			return this
		},
		__setWindow: function(e) {
			return s.window = e, this
		},
		_getRuler: function(e) {
			return new t(e)
		},
		_off: function() {
			return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_on: function() {
			return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_one: function() {
			return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_plugin: function(t) {
			var n = this;
			if ("string" == typeof t) {
				var r = t,
					i = null;
				return r.indexOf(".") > 0 ? i = n.__plugins[r] : e.each(n.__plugins, function(e, t) {
					return t.name.substring(t.name.length - r.length - 1) == "." + r ? (i = t, !1) : void 0
				}), i
			}
			if (t.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
			return n.__plugins[t.name] = t, t.core && n.__bridge(t.core, n, t.name), this
		},
		_trigger: function() {
			var e = Array.prototype.slice.apply(arguments);
			return "string" == typeof e[0] && (e[0] = {
				type: e[0]
			}), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
		},
		instances: function(t) {
			var n = [],
				r = t || ".tooltipstered";
			return e(r).each(function() {
				var t = e(this),
					r = t.data("tooltipster-ns");
				r && e.each(r, function(e, r) {
					n.push(t.data(r))
				})
			}), n
		},
		instancesLatest: function() {
			return this.__instancesLatestArr
		},
		off: function() {
			return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		on: function() {
			return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		one: function() {
			return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		origins: function(t) {
			var n = t ? t + " " : "";
			return e(n + ".tooltipstered").toArray()
		},
		setDefaults: function(t) {
			return e.extend(o, t), this
		},
		triggerHandler: function() {
			return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		}
	}, e.tooltipster = new l, e.Tooltipster = function(t, n) {
		this.__callbacks = {
			close: [],
			open: []
		}, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = e({}), this.__$emitterPublic = e({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
			close: [],
			open: null
		}, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(t, n)
	}, e.Tooltipster.prototype = {
		__init: function(t, n) {
			var r = this;
			if (r._$origin = e(t), r.__options = e.extend(!0, {}, o, n), r.__optionsFormat(), !s.IE || s.IE >= r.__options.IEmin) {
				var i = null;
				if (void 0 === r._$origin.data("tooltipster-initialTitle") && (i = r._$origin.attr("title"), void 0 === i && (i = null), r._$origin.data("tooltipster-initialTitle", i)), null !== r.__options.content) r.__contentSet(r.__options.content);
				else {
					var a, l = r._$origin.attr("data-tooltip-content");
					l && (a = e(l)), a && a[0] ? r.__contentSet(a.first()) : r.__contentSet(i)
				}
				r._$origin.removeAttr("title").addClass("tooltipstered"), r.__prepareOrigin(), r.__prepareGC(), e.each(r.__options.plugins, function(e, t) {
					r._plug(t)
				}), s.hasTouchCapability && e(s.window.document.body).on("touchmove." + r.__namespace + "-triggerOpen", function(e) {
					r._touchRecordEvent(e)
				}), r._on("created", function() {
					r.__prepareTooltip()
				})._on("repositioned", function(e) {
					r.__lastPosition = e.position
				})
			} else r.__options.disabled = !0
		},
		__contentInsert: function() {
			var e = this,
				t = e._$tooltip.find(".tooltipster-content"),
				n = e.__Content,
				r = function(e) {
					n = e
				};
			return e._trigger({
				type: "format",
				content: e.__Content,
				format: r
			}), e.__options.functionFormat && (n = e.__options.functionFormat.call(e, e, {
				origin: e._$origin[0]
			}, e.__Content)), "string" != typeof n || e.__options.contentAsHTML ? t.empty().append(n) : t.text(n), e
		},
		__contentSet: function(t) {
			return t instanceof e && this.__options.contentCloning && (t = t.clone(!0)), this.__Content = t, this._trigger({
				type: "updated",
				content: t
			}), this
		},
		__destroyError: function() {
			throw new Error("This tooltip has been destroyed and cannot execute your method call.")
		},
		__geometry: function() {
			var t = this,
				n = t._$origin,
				r = t._$origin.is("area");
			if (r) {
				var i = t._$origin.parent().attr("name");
				n = e('img[usemap="#' + i + '"]')
			}
			var o = n[0].getBoundingClientRect(),
				a = e(s.window.document),
				l = e(s.window),
				u = n,
				c = {
					available: {
						document: null,
						window: null
					},
					document: {
						size: {
							height: a.height(),
							width: a.width()
						}
					},
					window: {
						scroll: {
							left: s.window.scrollX || s.window.document.documentElement.scrollLeft,
							top: s.window.scrollY || s.window.document.documentElement.scrollTop
						},
						size: {
							height: l.height(),
							width: l.width()
						}
					},
					origin: {
						fixedLineage: !1,
						offset: {},
						size: {
							height: o.bottom - o.top,
							width: o.right - o.left
						},
						usemapImage: r ? n[0] : null,
						windowOffset: {
							bottom: o.bottom,
							left: o.left,
							right: o.right,
							top: o.top
						}
					}
				};
			if (r) {
				var d = t._$origin.attr("shape"),
					h = t._$origin.attr("coords");
				if (h && (h = h.split(","), e.map(h, function(e, t) {
					h[t] = parseInt(e)
				})), "default" != d) switch (d) {
				case "circle":
					var f = h[0],
						p = h[1],
						g = h[2],
						v = p - g,
						m = f - g;
					c.origin.size.height = 2 * g, c.origin.size.width = c.origin.size.height, c.origin.windowOffset.left += m, c.origin.windowOffset.top += v;
					break;
				case "rect":
					var b = h[0],
						y = h[1],
						_ = h[2],
						w = h[3];
					c.origin.size.height = w - y, c.origin.size.width = _ - b, c.origin.windowOffset.left += b, c.origin.windowOffset.top += y;
					break;
				case "poly":
					for (var S = 0, P = 0, x = 0, C = 0, A = "even", k = 0; k < h.length; k++) {
						var T = h[k];
						"even" == A ? (T > x && (x = T, 0 === k && (S = x)), S > T && (S = T), A = "odd") : (T > C && (C = T, 1 == k && (P = C)), P > T && (P = T), A = "even")
					}
					c.origin.size.height = C - P, c.origin.size.width = x - S, c.origin.windowOffset.left += S, c.origin.windowOffset.top += P
				}
			}
			var E = function(e) {
					c.origin.size.height = e.height, c.origin.windowOffset.left = e.left, c.origin.windowOffset.top = e.top, c.origin.size.width = e.width
				};
			for (t._trigger({
				type: "geometry",
				edit: E,
				geometry: {
					height: c.origin.size.height,
					left: c.origin.windowOffset.left,
					top: c.origin.windowOffset.top,
					width: c.origin.size.width
				}
			}), c.origin.windowOffset.right = c.origin.windowOffset.left + c.origin.size.width, c.origin.windowOffset.bottom = c.origin.windowOffset.top + c.origin.size.height, c.origin.offset.left = c.origin.windowOffset.left + c.window.scroll.left, c.origin.offset.top = c.origin.windowOffset.top + c.window.scroll.top, c.origin.offset.bottom = c.origin.offset.top + c.origin.size.height, c.origin.offset.right = c.origin.offset.left + c.origin.size.width, c.available.document = {
				bottom: {
					height: c.document.size.height - c.origin.offset.bottom,
					width: c.document.size.width
				},
				left: {
					height: c.document.size.height,
					width: c.origin.offset.left
				},
				right: {
					height: c.document.size.height,
					width: c.document.size.width - c.origin.offset.right
				},
				top: {
					height: c.origin.offset.top,
					width: c.document.size.width
				}
			}, c.available.window = {
				bottom: {
					height: Math.max(c.window.size.height - Math.max(c.origin.windowOffset.bottom, 0), 0),
					width: c.window.size.width
				},
				left: {
					height: c.window.size.height,
					width: Math.max(c.origin.windowOffset.left, 0)
				},
				right: {
					height: c.window.size.height,
					width: Math.max(c.window.size.width - Math.max(c.origin.windowOffset.right, 0), 0)
				},
				top: {
					height: Math.max(c.origin.windowOffset.top, 0),
					width: c.window.size.width
				}
			};
			"html" != u[0].tagName.toLowerCase();) {
				if ("fixed" == u.css("position")) {
					c.origin.fixedLineage = !0;
					break
				}
				u = u.parent()
			}
			return c
		},
		__optionsFormat: function() {
			return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = e(s.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = e(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
				mouseenter: !0,
				touchstart: !0
			}, this.__options.triggerClose = {
				mouseleave: !0,
				originClick: !0,
				touchleave: !0
			}) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
				click: !0,
				tap: !0
			}, this.__options.triggerClose = {
				click: !0,
				tap: !0
			}), this._trigger("options"), this
		},
		__prepareGC: function() {
			var t = this;
			return t.__options.selfDestruction ? t.__garbageCollector = setInterval(function() {
				var n = (new Date).getTime();
				t.__touchEvents = e.grep(t.__touchEvents, function(e, t) {
					return n - e.time > 6e4
				}), r(t._$origin) || t.close(function() {
					t.destroy()
				})
			}, 2e4) : clearInterval(t.__garbageCollector), t
		},
		__prepareOrigin: function() {
			var e = this;
			if (e._$origin.off("." + e.__namespace + "-triggerOpen"), s.hasTouchCapability && e._$origin.on("touchstart." + e.__namespace + "-triggerOpen touchend." + e.__namespace + "-triggerOpen touchcancel." + e.__namespace + "-triggerOpen", function(t) {
				e._touchRecordEvent(t)
			}), e.__options.triggerOpen.click || e.__options.triggerOpen.tap && s.hasTouchCapability) {
				var t = "";
				e.__options.triggerOpen.click && (t += "click." + e.__namespace + "-triggerOpen "), e.__options.triggerOpen.tap && s.hasTouchCapability && (t += "touchend." + e.__namespace + "-triggerOpen"), e._$origin.on(t, function(t) {
					e._touchIsMeaningfulEvent(t) && e._open(t)
				})
			}
			if (e.__options.triggerOpen.mouseenter || e.__options.triggerOpen.touchstart && s.hasTouchCapability) {
				var t = "";
				e.__options.triggerOpen.mouseenter && (t += "mouseenter." + e.__namespace + "-triggerOpen "), e.__options.triggerOpen.touchstart && s.hasTouchCapability && (t += "touchstart." + e.__namespace + "-triggerOpen"), e._$origin.on(t, function(t) {
					!e._touchIsTouchEvent(t) && e._touchIsEmulatedEvent(t) || (e.__pointerIsOverOrigin = !0, e._openShortly(t))
				})
			}
			if (e.__options.triggerClose.mouseleave || e.__options.triggerClose.touchleave && s.hasTouchCapability) {
				var t = "";
				e.__options.triggerClose.mouseleave && (t += "mouseleave." + e.__namespace + "-triggerOpen "), e.__options.triggerClose.touchleave && s.hasTouchCapability && (t += "touchend." + e.__namespace + "-triggerOpen touchcancel." + e.__namespace + "-triggerOpen"), e._$origin.on(t, function(t) {
					e._touchIsMeaningfulEvent(t) && (e.__pointerIsOverOrigin = !1)
				})
			}
			return e
		},
		__prepareTooltip: function() {
			var t = this,
				n = t.__options.interactive ? "auto" : "";
			return t._$tooltip.attr("id", t.__namespace).css({
				"pointer-events": n,
				zIndex: t.__options.zIndex
			}), e.each(t.__previousThemes, function(e, n) {
				t._$tooltip.removeClass(n)
			}), e.each(t.__options.theme, function(e, n) {
				t._$tooltip.addClass(n)
			}), t.__previousThemes = e.merge([], t.__options.theme), t
		},
		__scrollHandler: function(t) {
			var n = this;
			if (n.__options.triggerClose.scroll) n._close(t);
			else if (r(n._$origin) && r(n._$tooltip)) {
				var i = null;
				if (t.target === s.window.document) n.__Geometry.origin.fixedLineage || n.__options.repositionOnScroll && n.reposition(t);
				else {
					i = n.__geometry();
					var o = !1;
					if ("fixed" != n._$origin.css("position") && n.__$originParents.each(function(t, n) {
						var r = e(n),
							a = r.css("overflow-x"),
							s = r.css("overflow-y");
						if ("visible" != a || "visible" != s) {
							var l = n.getBoundingClientRect();
							if ("visible" != a && (i.origin.windowOffset.left < l.left || i.origin.windowOffset.right > l.right)) return o = !0, !1;
							if ("visible" != s && (i.origin.windowOffset.top < l.top || i.origin.windowOffset.bottom > l.bottom)) return o = !0, !1
						}
						return "fixed" == r.css("position") ? !1 : void 0
					}), o) n._$tooltip.css("visibility", "hidden");
					else if (n._$tooltip.css("visibility", "visible"), n.__options.repositionOnScroll) n.reposition(t);
					else {
						var a = i.origin.offset.left - n.__Geometry.origin.offset.left,
							l = i.origin.offset.top - n.__Geometry.origin.offset.top;
						n._$tooltip.css({
							left: n.__lastPosition.coord.left + a,
							top: n.__lastPosition.coord.top + l
						})
					}
				}
				n._trigger({
					type: "scroll",
					event: t,
					geo: i
				})
			}
			return n
		},
		__stateSet: function(e) {
			return this.__state = e, this._trigger({
				type: "state",
				state: e
			}), this
		},
		__timeoutsClear: function() {
			return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, e.each(this.__timeouts.close, function(e, t) {
				clearTimeout(t)
			}), this.__timeouts.close = [], this
		},
		__trackerStart: function() {
			var e = this,
				t = e._$tooltip.find(".tooltipster-content");
			return e.__options.trackTooltip && (e.__contentBcr = t[0].getBoundingClientRect()), e.__tracker = setInterval(function() {
				if (r(e._$origin) && r(e._$tooltip)) {
					if (e.__options.trackOrigin) {
						var i = e.__geometry(),
							o = !1;
						n(i.origin.size, e.__Geometry.origin.size) && (e.__Geometry.origin.fixedLineage ? n(i.origin.windowOffset, e.__Geometry.origin.windowOffset) && (o = !0) : n(i.origin.offset, e.__Geometry.origin.offset) && (o = !0)), o || (e.__options.triggerClose.mouseleave ? e._close() : e.reposition())
					}
					if (e.__options.trackTooltip) {
						var a = t[0].getBoundingClientRect();
						a.height === e.__contentBcr.height && a.width === e.__contentBcr.width || (e.reposition(), e.__contentBcr = a)
					}
				} else e._close()
			}, e.__options.trackerInterval), e
		},
		_close: function(t, n, r) {
			var i = this,
				o = !0;
			if (i._trigger({
				type: "close",
				event: t,
				stop: function() {
					o = !1
				}
			}), o || r) {
				n && i.__callbacks.close.push(n), i.__callbacks.open = [], i.__timeoutsClear();
				var a = function() {
						e.each(i.__callbacks.close, function(e, n) {
							n.call(i, i, {
								event: t,
								origin: i._$origin[0]
							})
						}), i.__callbacks.close = []
					};
				if ("closed" != i.__state) {
					var l = !0,
						u = new Date,
						c = u.getTime(),
						d = c + i.__options.animationDuration[1];
					if ("disappearing" == i.__state && d > i.__closingTime && i.__options.animationDuration[1] > 0 && (l = !1), l) {
						i.__closingTime = d, "disappearing" != i.__state && i.__stateSet("disappearing");
						var h = function() {
								clearInterval(i.__tracker), i._trigger({
									type: "closing",
									event: t
								}), i._$tooltip.off("." + i.__namespace + "-triggerClose").removeClass("tooltipster-dying"), e(s.window).off("." + i.__namespace + "-triggerClose"), i.__$originParents.each(function(t, n) {
									e(n).off("scroll." + i.__namespace + "-triggerClose")
								}), i.__$originParents = null, e(s.window.document.body).off("." + i.__namespace + "-triggerClose"), i._$origin.off("." + i.__namespace + "-triggerClose"), i._off("dismissable"), i.__stateSet("closed"), i._trigger({
									type: "after",
									event: t
								}), i.__options.functionAfter && i.__options.functionAfter.call(i, i, {
									event: t,
									origin: i._$origin[0]
								}), a()
							};
						s.hasTransitions ? (i._$tooltip.css({
							"-moz-animation-duration": i.__options.animationDuration[1] + "ms",
							"-ms-animation-duration": i.__options.animationDuration[1] + "ms",
							"-o-animation-duration": i.__options.animationDuration[1] + "ms",
							"-webkit-animation-duration": i.__options.animationDuration[1] + "ms",
							"animation-duration": i.__options.animationDuration[1] + "ms",
							"transition-duration": i.__options.animationDuration[1] + "ms"
						}), i._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), i.__options.animationDuration[1] > 0 && i._$tooltip.delay(i.__options.animationDuration[1]), i._$tooltip.queue(h)) : i._$tooltip.stop().fadeOut(i.__options.animationDuration[1], h)
					}
				} else a()
			}
			return i
		},
		_off: function() {
			return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_on: function() {
			return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_one: function() {
			return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
		},
		_open: function(t, n) {
			var i = this;
			if (!i.__destroying && r(i._$origin) && i.__enabled) {
				var o = !0;
				if ("closed" == i.__state && (i._trigger({
					type: "before",
					event: t,
					stop: function() {
						o = !1
					}
				}), o && i.__options.functionBefore && (o = i.__options.functionBefore.call(i, i, {
					event: t,
					origin: i._$origin[0]
				}))), o !== !1 && null !== i.__Content) {
					n && i.__callbacks.open.push(n), i.__callbacks.close = [], i.__timeoutsClear();
					var a, l = function() {
							"stable" != i.__state && i.__stateSet("stable"), e.each(i.__callbacks.open, function(e, t) {
								t.call(i, i, {
									origin: i._$origin[0],
									tooltip: i._$tooltip[0]
								})
							}), i.__callbacks.open = []
						};
					if ("closed" !== i.__state) a = 0, "disappearing" === i.__state ? (i.__stateSet("appearing"), s.hasTransitions ? (i._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), i.__options.animationDuration[0] > 0 && i._$tooltip.delay(i.__options.animationDuration[0]), i._$tooltip.queue(l)) : i._$tooltip.stop().fadeIn(l)) : "stable" == i.__state && l();
					else {
						if (i.__stateSet("appearing"), a = i.__options.animationDuration[0], i.__contentInsert(), i.reposition(t, !0), s.hasTransitions ? (i._$tooltip.addClass("tooltipster-" + i.__options.animation).addClass("tooltipster-initial").css({
							"-moz-animation-duration": i.__options.animationDuration[0] + "ms",
							"-ms-animation-duration": i.__options.animationDuration[0] + "ms",
							"-o-animation-duration": i.__options.animationDuration[0] + "ms",
							"-webkit-animation-duration": i.__options.animationDuration[0] + "ms",
							"animation-duration": i.__options.animationDuration[0] + "ms",
							"transition-duration": i.__options.animationDuration[0] + "ms"
						}), setTimeout(function() {
							"closed" != i.__state && (i._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), i.__options.animationDuration[0] > 0 && i._$tooltip.delay(i.__options.animationDuration[0]), i._$tooltip.queue(l))
						}, 0)) : i._$tooltip.css("display", "none").fadeIn(i.__options.animationDuration[0], l), i.__trackerStart(), e(s.window).on("resize." + i.__namespace + "-triggerClose", function(t) {
							var n = e(document.activeElement);
							(n.is("input") || n.is("textarea")) && e.contains(i._$tooltip[0], n[0]) || i.reposition(t)
						}).on("scroll." + i.__namespace + "-triggerClose", function(e) {
							i.__scrollHandler(e)
						}), i.__$originParents = i._$origin.parents(), i.__$originParents.each(function(t, n) {
							e(n).on("scroll." + i.__namespace + "-triggerClose", function(e) {
								i.__scrollHandler(e)
							})
						}), i.__options.triggerClose.mouseleave || i.__options.triggerClose.touchleave && s.hasTouchCapability) {
							i._on("dismissable", function(e) {
								e.dismissable ? e.delay ? (h = setTimeout(function() {
									i._close(e.event)
								}, e.delay), i.__timeouts.close.push(h)) : i._close(e) : clearTimeout(h)
							});
							var u = i._$origin,
								c = "",
								d = "",
								h = null;
							i.__options.interactive && (u = u.add(i._$tooltip)), i.__options.triggerClose.mouseleave && (c += "mouseenter." + i.__namespace + "-triggerClose ", d += "mouseleave." + i.__namespace + "-triggerClose "), i.__options.triggerClose.touchleave && s.hasTouchCapability && (c += "touchstart." + i.__namespace + "-triggerClose", d += "touchend." + i.__namespace + "-triggerClose touchcancel." + i.__namespace + "-triggerClose"), u.on(d, function(e) {
								if (i._touchIsTouchEvent(e) || !i._touchIsEmulatedEvent(e)) {
									var t = "mouseleave" == e.type ? i.__options.delay : i.__options.delayTouch;
									i._trigger({
										delay: t[1],
										dismissable: !0,
										event: e,
										type: "dismissable"
									})
								}
							}).on(c, function(e) {
								!i._touchIsTouchEvent(e) && i._touchIsEmulatedEvent(e) || i._trigger({
									dismissable: !1,
									event: e,
									type: "dismissable"
								})
							})
						}
						i.__options.triggerClose.originClick && i._$origin.on("click." + i.__namespace + "-triggerClose", function(e) {
							i._touchIsTouchEvent(e) || i._touchIsEmulatedEvent(e) || i._close(e)
						}), (i.__options.triggerClose.click || i.__options.triggerClose.tap && s.hasTouchCapability) && setTimeout(function() {
							if ("closed" != i.__state) {
								var t = "",
									n = e(s.window.document.body);
								i.__options.triggerClose.click && (t += "click." + i.__namespace + "-triggerClose "), i.__options.triggerClose.tap && s.hasTouchCapability && (t += "touchend." + i.__namespace + "-triggerClose"), n.on(t, function(t) {
									i._touchIsMeaningfulEvent(t) && (i._touchRecordEvent(t), i.__options.interactive && e.contains(i._$tooltip[0], t.target) || i._close(t))
								}), i.__options.triggerClose.tap && s.hasTouchCapability && n.on("touchstart." + i.__namespace + "-triggerClose", function(e) {
									i._touchRecordEvent(e)
								})
							}
						}, 0), i._trigger("ready"), i.__options.functionReady && i.__options.functionReady.call(i, i, {
							origin: i._$origin[0],
							tooltip: i._$tooltip[0]
						})
					}
					if (i.__options.timer > 0) {
						var h = setTimeout(function() {
							i._close()
						}, i.__options.timer + a);
						i.__timeouts.close.push(h)
					}
				}
			}
			return i
		},
		_openShortly: function(e) {
			var t = this,
				n = !0;
			if ("stable" != t.__state && "appearing" != t.__state && !t.__timeouts.open && (t._trigger({
				type: "start",
				event: e,
				stop: function() {
					n = !1
				}
			}), n)) {
				var r = 0 == e.type.indexOf("touch") ? t.__options.delayTouch : t.__options.delay;
				r[0] ? t.__timeouts.open = setTimeout(function() {
					t.__timeouts.open = null, t.__pointerIsOverOrigin && t._touchIsMeaningfulEvent(e) ? (t._trigger("startend"), t._open(e)) : t._trigger("startcancel")
				}, r[0]) : (t._trigger("startend"), t._open(e))
			}
			return t
		},
		_optionsExtract: function(t, n) {
			var r = this,
				i = e.extend(!0, {}, n),
				o = r.__options[t];
			return o || (o = {}, e.each(n, function(e, t) {
				var n = r.__options[e];
				void 0 !== n && (o[e] = n)
			})), e.each(i, function(t, n) {
				void 0 !== o[t] && ("object" != typeof n || n instanceof Array || null == n || "object" != typeof o[t] || o[t] instanceof Array || null == o[t] ? i[t] = o[t] : e.extend(i[t], o[t]))
			}), i
		},
		_plug: function(t) {
			var n = e.tooltipster._plugin(t);
			if (!n) throw new Error('The "' + t + '" plugin is not defined');
			return n.instance && e.tooltipster.__bridge(n.instance, this, n.name), this
		},
		_touchIsEmulatedEvent: function(e) {
			for (var t = !1, n = (new Date).getTime(), r = this.__touchEvents.length - 1; r >= 0; r--) {
				var i = this.__touchEvents[r];
				if (!(n - i.time < 500)) break;
				i.target === e.target && (t = !0)
			}
			return t
		},
		_touchIsMeaningfulEvent: function(e) {
			return this._touchIsTouchEvent(e) && !this._touchSwiped(e.target) || !this._touchIsTouchEvent(e) && !this._touchIsEmulatedEvent(e)
		},
		_touchIsTouchEvent: function(e) {
			return 0 == e.type.indexOf("touch")
		},
		_touchRecordEvent: function(e) {
			return this._touchIsTouchEvent(e) && (e.time = (new Date).getTime(), this.__touchEvents.push(e)), this
		},
		_touchSwiped: function(e) {
			for (var t = !1, n = this.__touchEvents.length - 1; n >= 0; n--) {
				var r = this.__touchEvents[n];
				if ("touchmove" == r.type) {
					t = !0;
					break
				}
				if ("touchstart" == r.type && e === r.target) break
			}
			return t
		},
		_trigger: function() {
			var t = Array.prototype.slice.apply(arguments);
			return "string" == typeof t[0] && (t[0] = {
				type: t[0]
			}), t[0].instance = this, t[0].origin = this._$origin ? this._$origin[0] : null, t[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, t), e.tooltipster._trigger.apply(e.tooltipster, t), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, t), this
		},
		_unplug: function(t) {
			var n = this;
			if (n[t]) {
				var r = e.tooltipster._plugin(t);
				r.instance && e.each(r.instance, function(e, r) {
					n[e] && n[e].bridged === n[t] && delete n[e]
				}), n[t].__destroy && n[t].__destroy(), delete n[t]
			}
			return n
		},
		close: function(e) {
			return this.__destroyed ? this.__destroyError() : this._close(null, e), this
		},
		content: function(e) {
			var t = this;
			if (void 0 === e) return t.__Content;
			if (t.__destroyed) t.__destroyError();
			else if (t.__contentSet(e), null !== t.__Content) {
				if ("closed" !== t.__state && (t.__contentInsert(), t.reposition(), t.__options.updateAnimation)) if (s.hasTransitions) {
					var n = t.__options.updateAnimation;
					t._$tooltip.addClass("tooltipster-update-" + n), setTimeout(function() {
						"closed" != t.__state && t._$tooltip.removeClass("tooltipster-update-" + n)
					}, 1e3)
				} else t._$tooltip.fadeTo(200, .5, function() {
					"closed" != t.__state && t._$tooltip.fadeTo(200, 1)
				})
			} else t._close();
			return t
		},
		destroy: function() {
			var t = this;
			if (t.__destroyed) t.__destroyError();
			else {
				"closed" != t.__state ? t.option("animationDuration", 0)._close(null, null, !0) : t.__timeoutsClear(), t._trigger("destroy"), t.__destroyed = !0, t._$origin.removeData(t.__namespace).off("." + t.__namespace + "-triggerOpen"), e(s.window.document.body).off("." + t.__namespace + "-triggerOpen");
				var n = t._$origin.data("tooltipster-ns");
				if (n) if (1 === n.length) {
					var r = null;
					"previous" == t.__options.restoration ? r = t._$origin.data("tooltipster-initialTitle") : "current" == t.__options.restoration && (r = "string" == typeof t.__Content ? t.__Content : e("<div></div>").append(t.__Content).html()), r && t._$origin.attr("title", r), t._$origin.removeClass("tooltipstered"), t._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
				} else n = e.grep(n, function(e, n) {
					return e !== t.__namespace
				}), t._$origin.data("tooltipster-ns", n);
				t._trigger("destroyed"), t._off(), t.off(), t.__Content = null, t.__$emitterPrivate = null, t.__$emitterPublic = null, t.__options.parent = null, t._$origin = null, t._$tooltip = null, e.tooltipster.__instancesLatestArr = e.grep(e.tooltipster.__instancesLatestArr, function(e, n) {
					return t !== e
				}), clearInterval(t.__garbageCollector)
			}
			return t
		},
		disable: function() {
			return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this)
		},
		elementOrigin: function() {
			return this.__destroyed ? void this.__destroyError() : this._$origin[0]
		},
		elementTooltip: function() {
			return this._$tooltip ? this._$tooltip[0] : null
		},
		enable: function() {
			return this.__enabled = !0, this
		},
		hide: function(e) {
			return this.close(e)
		},
		instance: function() {
			return this
		},
		off: function() {
			return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		on: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		one: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		},
		open: function(e) {
			return this.__destroyed ? this.__destroyError() : this._open(null, e), this
		},
		option: function(t, n) {
			return void 0 === n ? this.__options[t] : (this.__destroyed ? this.__destroyError() : (this.__options[t] = n, this.__optionsFormat(), e.inArray(t, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === t && this.__prepareGC()), this)
		},
		reposition: function(e, t) {
			var n = this;
			return n.__destroyed ? n.__destroyError() : "closed" != n.__state && r(n._$origin) && (t || r(n._$tooltip)) && (t || n._$tooltip.detach(), n.__Geometry = n.__geometry(), n._trigger({
				type: "reposition",
				event: e,
				helper: {
					geo: n.__Geometry
				}
			})), n
		},
		show: function(e) {
			return this.open(e)
		},
		status: function() {
			return {
				destroyed: this.__destroyed,
				enabled: this.__enabled,
				open: "closed" !== this.__state,
				state: this.__state
			}
		},
		triggerHandler: function() {
			return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
		}
	}, e.fn.tooltipster = function() {
		var t = Array.prototype.slice.apply(arguments),
			n = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
		if (0 === this.length) return this;
		if ("string" == typeof t[0]) {
			var r = "#*$~&";
			return this.each(function() {
				var i = e(this).data("tooltipster-ns"),
					o = i ? e(this).data(i[0]) : null;
				if (!o) throw new Error("You called Tooltipster's \"" + t[0] + '" method on an uninitialized element');
				if ("function" != typeof o[t[0]]) throw new Error('Unknown method "' + t[0] + '"');
				this.length > 1 && "content" == t[0] && (t[1] instanceof e || "object" == typeof t[1] && null != t[1] && t[1].tagName) && !o.__options.contentCloning && o.__options.debug && console.log(n);
				var a = o[t[0]](t[1], t[2]);
				return a !== o || "instance" === t[0] ? (r = a, !1) : void 0
			}), "#*$~&" !== r ? r : this
		}
		e.tooltipster.__instancesLatestArr = [];
		var i = t[0] && void 0 !== t[0].multiple,
			a = i && t[0].multiple || !i && o.multiple,
			s = t[0] && void 0 !== t[0].content,
			l = s && t[0].content || !s && o.content,
			u = t[0] && void 0 !== t[0].contentCloning,
			c = u && t[0].contentCloning || !u && o.contentCloning,
			d = t[0] && void 0 !== t[0].debug,
			h = d && t[0].debug || !d && o.debug;
		return this.length > 1 && (l instanceof e || "object" == typeof l && null != l && l.tagName) && !c && h && console.log(n), this.each(function() {
			var n = !1,
				r = e(this),
				i = r.data("tooltipster-ns"),
				o = null;
			i ? a ? n = !0 : h && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : n = !0, n && (o = new e.Tooltipster(this, t[0]), i || (i = []), i.push(o.__namespace), r.data("tooltipster-ns", i), r.data(o.__namespace, o), o.__options.functionInit && o.__options.functionInit.call(o, o, {
				origin: this
			}), o._trigger("init")), e.tooltipster.__instancesLatestArr.push(o)
		}), this
	}, t.prototype = {
		__init: function(t) {
			this.__$tooltip = t, this.__$tooltip.css({
				left: 0,
				overflow: "hidden",
				position: "absolute",
				top: 0
			}).find(".tooltipster-content").css("overflow", "auto"), this.$container = e('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(s.window.document.body)
		},
		__forceRedraw: function() {
			var e = this.__$tooltip.parent();
			this.__$tooltip.detach(), this.__$tooltip.appendTo(e)
		},
		constrain: function(e, t) {
			return this.constraints = {
				width: e,
				height: t
			}, this.__$tooltip.css({
				display: "block",
				height: "",
				overflow: "auto",
				width: e
			}), this
		},
		destroy: function() {
			this.__$tooltip.detach().find(".tooltipster-content").css({
				display: "",
				overflow: ""
			}), this.$container.remove()
		},
		free: function() {
			return this.constraints = null, this.__$tooltip.css({
				display: "",
				height: "",
				overflow: "visible",
				width: ""
			}), this
		},
		measure: function() {
			this.__forceRedraw();
			var e = this.__$tooltip[0].getBoundingClientRect(),
				t = {
					size: {
						height: e.height || e.bottom - e.top,
						width: e.width || e.right - e.left
					}
				};
			if (this.constraints) {
				var n = this.__$tooltip.find(".tooltipster-content"),
					r = this.__$tooltip.outerHeight(),
					i = n[0].getBoundingClientRect(),
					o = {
						height: r <= this.constraints.height,
						width: e.width <= this.constraints.width && i.width >= n[0].scrollWidth - 1
					};
				t.fits = o.height && o.width
			}
			return s.IE && s.IE <= 11 && t.size.width !== s.window.document.documentElement.clientWidth && (t.size.width = Math.ceil(t.size.width) + 1), t
		}
	};
	var u = navigator.userAgent.toLowerCase(); - 1 != u.indexOf("msie") ? s.IE = parseInt(u.split("msie")[1]) : -1 !== u.toLowerCase().indexOf("trident") && -1 !== u.indexOf(" rv:11") ? s.IE = 11 : -1 != u.toLowerCase().indexOf("edge/") && (s.IE = parseInt(u.toLowerCase().split("edge/")[1]));
	var c = "tooltipster.sideTip";
	return e.tooltipster._plugin({
		name: c,
		instance: {
			__defaults: function() {
				return {
					arrow: !0,
					distance: 6,
					functionPosition: null,
					maxWidth: null,
					minIntersection: 16,
					minWidth: 0,
					position: null,
					side: "top",
					viewportAware: !0
				}
			},
			__init: function(e) {
				var t = this;
				t.__instance = e, t.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), t.__previousState = "closed", t.__options, t.__optionsFormat(), t.__instance._on("state." + t.__namespace, function(e) {
					"closed" == e.state ? t.__close() : "appearing" == e.state && "closed" == t.__previousState && t.__create(), t.__previousState = e.state
				}), t.__instance._on("options." + t.__namespace, function() {
					t.__optionsFormat()
				}), t.__instance._on("reposition." + t.__namespace, function(e) {
					t.__reposition(e.event, e.helper)
				})
			},
			__close: function() {
				this.__instance.content() instanceof e && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
			},
			__create: function() {
				var t = e('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
				this.__options.arrow || t.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && t.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && t.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = t, this.__instance._trigger("created")
			},
			__destroy: function() {
				this.__instance._off("." + self.__namespace)
			},
			__optionsFormat: function() {
				var t = this;
				if (t.__options = t.__instance._optionsExtract(c, t.__defaults()), t.__options.position && (t.__options.side = t.__options.position), "object" != typeof t.__options.distance && (t.__options.distance = [t.__options.distance]), t.__options.distance.length < 4 && (void 0 === t.__options.distance[1] && (t.__options.distance[1] = t.__options.distance[0]), void 0 === t.__options.distance[2] && (t.__options.distance[2] = t.__options.distance[0]), void 0 === t.__options.distance[3] && (t.__options.distance[3] = t.__options.distance[1]), t.__options.distance = {
					top: t.__options.distance[0],
					right: t.__options.distance[1],
					bottom: t.__options.distance[2],
					left: t.__options.distance[3]
				}), "string" == typeof t.__options.side) {
					var n = {
						top: "bottom",
						right: "left",
						bottom: "top",
						left: "right"
					};
					t.__options.side = [t.__options.side, n[t.__options.side]], "left" == t.__options.side[0] || "right" == t.__options.side[0] ? t.__options.side.push("top", "bottom") : t.__options.side.push("right", "left")
				}
				6 === e.tooltipster._env.IE && t.__options.arrow !== !0 && (t.__options.arrow = !1)
			},
			__reposition: function(t, n) {
				var r, i = this,
					o = i.__targetFind(n),
					a = [];
				i.__instance._$tooltip.detach();
				var s = i.__instance._$tooltip.clone(),
					l = e.tooltipster._getRuler(s),
					u = !1,
					c = i.__instance.option("animation");
				switch (c && s.removeClass("tooltipster-" + c), e.each(["window", "document"], function(r, c) {
					var d = null;
					if (i.__instance._trigger({
						container: c,
						helper: n,
						satisfied: u,
						takeTest: function(e) {
							d = e
						},
						results: a,
						type: "positionTest"
					}), 1 == d || 0 != d && 0 == u && ("window" != c || i.__options.viewportAware)) for (var r = 0; r < i.__options.side.length; r++) {
						var h = {
							horizontal: 0,
							vertical: 0
						},
							f = i.__options.side[r];
						"top" == f || "bottom" == f ? h.vertical = i.__options.distance[f] : h.horizontal = i.__options.distance[f], i.__sideChange(s, f), e.each(["natural", "constrained"], function(e, r) {
							if (d = null, i.__instance._trigger({
								container: c,
								event: t,
								helper: n,
								mode: r,
								results: a,
								satisfied: u,
								side: f,
								takeTest: function(e) {
									d = e
								},
								type: "positionTest"
							}), 1 == d || 0 != d && 0 == u) {
								var s = {
									container: c,
									distance: h,
									fits: null,
									mode: r,
									outerSize: null,
									side: f,
									size: null,
									target: o[f],
									whole: null
								},
									p = "natural" == r ? l.free() : l.constrain(n.geo.available[c][f].width - h.horizontal, n.geo.available[c][f].height - h.vertical),
									g = p.measure();
								if (s.size = g.size, s.outerSize = {
									height: g.size.height + h.vertical,
									width: g.size.width + h.horizontal
								}, "natural" == r ? n.geo.available[c][f].width >= s.outerSize.width && n.geo.available[c][f].height >= s.outerSize.height ? s.fits = !0 : s.fits = !1 : s.fits = g.fits, "window" == c && (s.fits ? "top" == f || "bottom" == f ? s.whole = n.geo.origin.windowOffset.right >= i.__options.minIntersection && n.geo.window.size.width - n.geo.origin.windowOffset.left >= i.__options.minIntersection : s.whole = n.geo.origin.windowOffset.bottom >= i.__options.minIntersection && n.geo.window.size.height - n.geo.origin.windowOffset.top >= i.__options.minIntersection : s.whole = !1), a.push(s), s.whole) u = !0;
								else if ("natural" == s.mode && (s.fits || s.size.width <= n.geo.available[c][f].width)) return !1
							}
						})
					}
				}), i.__instance._trigger({
					edit: function(e) {
						a = e
					},
					event: t,
					helper: n,
					results: a,
					type: "positionTested"
				}), a.sort(function(e, t) {
					if (e.whole && !t.whole) return -1;
					if (!e.whole && t.whole) return 1;
					if (e.whole && t.whole) {
						var n = i.__options.side.indexOf(e.side),
							r = i.__options.side.indexOf(t.side);
						return r > n ? -1 : n > r ? 1 : "natural" == e.mode ? -1 : 1
					}
					if (e.fits && !t.fits) return -1;
					if (!e.fits && t.fits) return 1;
					if (e.fits && t.fits) {
						var n = i.__options.side.indexOf(e.side),
							r = i.__options.side.indexOf(t.side);
						return r > n ? -1 : n > r ? 1 : "natural" == e.mode ? -1 : 1
					}
					return "document" == e.container && "bottom" == e.side && "natural" == e.mode ? -1 : 1
				}), r = a[0], r.coord = {}, r.side) {
				case "left":
				case "right":
					r.coord.top = Math.floor(r.target - r.size.height / 2);
					break;
				case "bottom":
				case "top":
					r.coord.left = Math.floor(r.target - r.size.width / 2)
				}
				switch (r.side) {
				case "left":
					r.coord.left = n.geo.origin.windowOffset.left - r.outerSize.width;
					break;
				case "right":
					r.coord.left = n.geo.origin.windowOffset.right + r.distance.horizontal;
					break;
				case "top":
					r.coord.top = n.geo.origin.windowOffset.top - r.outerSize.height;
					break;
				case "bottom":
					r.coord.top = n.geo.origin.windowOffset.bottom + r.distance.vertical
				}
				"window" == r.container ? "top" == r.side || "bottom" == r.side ? r.coord.left < 0 ? n.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? r.coord.left = 0 : r.coord.left = n.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : r.coord.left > n.geo.window.size.width - r.size.width && (n.geo.origin.windowOffset.left + this.__options.minIntersection <= n.geo.window.size.width ? r.coord.left = n.geo.window.size.width - r.size.width : r.coord.left = n.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - r.size.width) : r.coord.top < 0 ? n.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? r.coord.top = 0 : r.coord.top = n.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : r.coord.top > n.geo.window.size.height - r.size.height && (n.geo.origin.windowOffset.top + this.__options.minIntersection <= n.geo.window.size.height ? r.coord.top = n.geo.window.size.height - r.size.height : r.coord.top = n.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - r.size.height) : (r.coord.left > n.geo.window.size.width - r.size.width && (r.coord.left = n.geo.window.size.width - r.size.width), r.coord.left < 0 && (r.coord.left = 0)), i.__sideChange(s, r.side), n.tooltipClone = s[0], n.tooltipParent = i.__instance.option("parent").parent[0], n.mode = r.mode, n.whole = r.whole, n.origin = i.__instance._$origin[0], n.tooltip = i.__instance._$tooltip[0], delete r.container, delete r.fits, delete r.mode, delete r.outerSize, delete r.whole, r.distance = r.distance.horizontal || r.distance.vertical;
				var d = e.extend(!0, {}, r);
				if (i.__instance._trigger({
					edit: function(e) {
						r = e
					},
					event: t,
					helper: n,
					position: d,
					type: "position"
				}), i.__options.functionPosition) {
					var h = i.__options.functionPosition.call(i, i.__instance, n, d);
					h && (r = h)
				}
				l.destroy();
				var f, p;
				"top" == r.side || "bottom" == r.side ? (f = {
					prop: "left",
					val: r.target - r.coord.left
				}, p = r.size.width - this.__options.minIntersection) : (f = {
					prop: "top",
					val: r.target - r.coord.top
				}, p = r.size.height - this.__options.minIntersection), f.val < this.__options.minIntersection ? f.val = this.__options.minIntersection : f.val > p && (f.val = p);
				var g;
				g = n.geo.origin.fixedLineage ? n.geo.origin.windowOffset : {
					left: n.geo.origin.windowOffset.left + n.geo.window.scroll.left,
					top: n.geo.origin.windowOffset.top + n.geo.window.scroll.top
				}, r.coord = {
					left: g.left + (r.coord.left - n.geo.origin.windowOffset.left),
					top: g.top + (r.coord.top - n.geo.origin.windowOffset.top)
				}, i.__sideChange(i.__instance._$tooltip, r.side), n.geo.origin.fixedLineage ? i.__instance._$tooltip.css("position", "fixed") : i.__instance._$tooltip.css("position", ""), i.__instance._$tooltip.css({
					left: r.coord.left,
					top: r.coord.top,
					height: r.size.height,
					width: r.size.width
				}).find(".tooltipster-arrow").css({
					left: "",
					top: ""
				}).css(f.prop, f.val), i.__instance._$tooltip.appendTo(i.__instance.option("parent")), i.__instance._trigger({
					type: "repositioned",
					event: t,
					position: r
				})
			},
			__sideChange: function(e, t) {
				e.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + t)
			},
			__targetFind: function(e) {
				var t = {},
					n = this.__instance._$origin[0].getClientRects();
				if (n.length > 1) {
					var r = this.__instance._$origin.css("opacity");
					1 == r && (this.__instance._$origin.css("opacity", .99), n = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1))
				}
				if (n.length < 2) t.top = Math.floor(e.geo.origin.windowOffset.left + e.geo.origin.size.width / 2), t.bottom = t.top, t.left = Math.floor(e.geo.origin.windowOffset.top + e.geo.origin.size.height / 2), t.right = t.left;
				else {
					var i = n[0];
					t.top = Math.floor(i.left + (i.right - i.left) / 2), i = n.length > 2 ? n[Math.ceil(n.length / 2) - 1] : n[0], t.right = Math.floor(i.top + (i.bottom - i.top) / 2), i = n[n.length - 1], t.bottom = Math.floor(i.left + (i.right - i.left) / 2), i = n.length > 2 ? n[Math.ceil((n.length + 1) / 2) - 1] : n[n.length - 1], t.left = Math.floor(i.top + (i.bottom - i.top) / 2)
				}
				return t
			}
		}
	}), e
});