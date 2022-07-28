! function(e, t) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
		if(!e.document) throw new Error("jQuery requires a window with a document");
		return t(e)
	} : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
	"use strict";

	function n(e, t, n) {
		n = n || we;
		var r, i, o = n.createElement("script");
		if(o.text = e, t)
			for(r in Te) i = t[r] || t.getAttribute && t.getAttribute(r), i && o.setAttribute(r, i);
		n.head.appendChild(o).parentNode.removeChild(o)
	}

	function r(e) {
		return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? de[he.call(e)] || "object" : typeof e
	}

	function i(e) {
		var t = !!e && "length" in e && e.length,
			n = r(e);
		return xe(e) || be(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
	}

	function o(e, t) {
		return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
	}

	function a(e, t, n) {
		return xe(t) ? Ee.grep(e, function(e, r) {
			return !!t.call(e, r, e) !== n
		}) : t.nodeType ? Ee.grep(e, function(e) {
			return e === t !== n
		}) : "string" != typeof t ? Ee.grep(e, function(e) {
			return pe.call(t, e) > -1 !== n
		}) : Ee.filter(t, e, n)
	}

	function s(e, t) {
		for(;
			(e = e[t]) && 1 !== e.nodeType;);
		return e
	}

	function u(e) {
		var t = {};
		return Ee.each(e.match(Pe) || [], function(e, n) {
			t[n] = !0
		}), t
	}

	function l(e) {
		return e
	}

	function c(e) {
		throw e
	}

	function f(e, t, n, r) {
		var i;
		try {
			e && xe(i = e.promise) ? i.call(e).done(t).fail(n) : e && xe(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
		} catch(e) {
			n.apply(void 0, [e])
		}
	}

	function p() {
		we.removeEventListener("DOMContentLoaded", p), e.removeEventListener("load", p), Ee.ready()
	}

	function d(e, t) {
		return t.toUpperCase()
	}

	function h(e) {
		return e.replace(We, "ms-").replace(Fe, d)
	}

	function g() {
		this.expando = Ee.expando + g.uid++
	}

	function m(e) {
		return "true" === e ? !0 : "false" === e ? !1 : "null" === e ? null : e === +e + "" ? +e : ze.test(e) ? JSON.parse(e) : e
	}

	function v(e, t, n) {
		var r;
		if(void 0 === n && 1 === e.nodeType)
			if(r = "data-" + t.replace(Ue, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
				try {
					n = m(n)
				} catch(i) {}
				_e.set(e, t, n)
			} else n = void 0;
		return n
	}

	function y(e, t, n, r) {
		var i, o, a = 20,
			s = r ? function() {
				return r.cur()
			} : function() {
				return Ee.css(e, t, "")
			},
			u = s(),
			l = n && n[3] || (Ee.cssNumber[t] ? "" : "px"),
			c = e.nodeType && (Ee.cssNumber[t] || "px" !== l && +u) && Ve.exec(Ee.css(e, t));
		if(c && c[3] !== l) {
			for(u /= 2, l = l || c[3], c = +u || 1; a--;) Ee.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
			c = 2 * c, Ee.style(e, t, c + l), n = n || []
		}
		return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
	}

	function x(e) {
		var t, n = e.ownerDocument,
			r = e.nodeName,
			i = Ze[r];
		return i ? i : (t = n.body.appendChild(n.createElement(r)), i = Ee.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ze[r] = i, i)
	}

	function b(e, t) {
		for(var n, r, i = [], o = 0, a = e.length; a > o; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = $e.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Ke(r) && (i[o] = x(r))) : "none" !== n && (i[o] = "none", $e.set(r, "display", n)));
		for(o = 0; a > o; o++) null != i[o] && (e[o].style.display = i[o]);
		return e
	}

	function w(e, t) {
		var n;
		return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && o(e, t) ? Ee.merge([e], n) : n
	}

	function T(e, t) {
		for(var n = 0, r = e.length; r > n; n++) $e.set(e[n], "globalEval", !t || $e.get(t[n], "globalEval"))
	}

	function C(e, t, n, i, o) {
		for(var a, s, u, l, c, f, p = t.createDocumentFragment(), d = [], h = 0, g = e.length; g > h; h++)
			if(a = e[h], a || 0 === a)
				if("object" === r(a)) Ee.merge(d, a.nodeType ? [a] : a);
				else if(it.test(a)) {
			for(s = s || p.appendChild(t.createElement("div")), u = (tt.exec(a) || ["", ""])[1].toLowerCase(), l = rt[u] || rt._default, s.innerHTML = l[1] + Ee.htmlPrefilter(a) + l[2], f = l[0]; f--;) s = s.lastChild;
			Ee.merge(d, s.childNodes), s = p.firstChild, s.textContent = ""
		} else d.push(t.createTextNode(a));
		for(p.textContent = "", h = 0; a = d[h++];)
			if(i && Ee.inArray(a, i) > -1) o && o.push(a);
			else if(c = Qe(a), s = w(p.appendChild(a), "script"), c && T(s), n)
			for(f = 0; a = s[f++];) nt.test(a.type || "") && n.push(a);
		return p
	}

	function E() {
		return !0
	}

	function S() {
		return !1
	}

	function k(e, t) {
		return e === A() == ("focus" === t)
	}

	function A() {
		try {
			return we.activeElement
		} catch(e) {}
	}

	function N(e, t, n, r, i, o) {
		var a, s;
		if("object" == typeof t) {
			"string" != typeof n && (r = r || n, n = void 0);
			for(s in t) N(e, s, n, r, t[s], o);
			return e
		}
		if(null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = S;
		else if(!i) return e;
		return 1 === o && (a = i, i = function(e) {
			return Ee().off(e), a.apply(this, arguments)
		}, i.guid = a.guid || (a.guid = Ee.guid++)), e.each(function() {
			Ee.event.add(this, t, i, r, n)
		})
	}

	function j(e, t, n) {
		return n ? ($e.set(e, t, !1), void Ee.event.add(e, t, {
			namespace: !1,
			handler: function(e) {
				var r, i, o = $e.get(this, t);
				if(1 & e.isTrigger && this[t]) {
					if(o.length)(Ee.event.special[t] || {}).delegateType && e.stopPropagation();
					else if(o = le.call(arguments), $e.set(this, t, o), r = n(this, t), this[t](), i = $e.get(this, t), o !== i || r ? $e.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i && i.value
				} else o.length && ($e.set(this, t, {
					value: Ee.event.trigger(Ee.extend(o[0], Ee.Event.prototype), o.slice(1), this)
				}), e.stopImmediatePropagation())
			}
		})) : void(void 0 === $e.get(e, t) && Ee.event.add(e, t, E))
	}

	function D(e, t) {
		return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ee(e).children("tbody")[0] || e : e
	}

	function q(e) {
		return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
	}

	function L(e) {
		return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
	}

	function H(e, t) {
		var n, r, i, o, a, s, u;
		if(1 === t.nodeType) {
			if($e.hasData(e) && (o = $e.get(e), u = o.events)) {
				$e.remove(t, "handle events");
				for(i in u)
					for(n = 0, r = u[i].length; r > n; n++) Ee.event.add(t, i, u[i][n])
			}
			_e.hasData(e) && (a = _e.access(e), s = Ee.extend({}, a), _e.set(t, s))
		}
	}

	function O(e, t) {
		var n = t.nodeName.toLowerCase();
		"input" === n && et.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
	}

	function P(e, t, r, i) {
		t = ce(t);
		var o, a, s, u, l, c, f = 0,
			p = e.length,
			d = p - 1,
			h = t[0],
			g = xe(h);
		if(g || p > 1 && "string" == typeof h && !ye.checkClone && st.test(h)) return e.each(function(n) {
			var o = e.eq(n);
			g && (t[0] = h.call(this, n, o.html())), P(o, t, r, i)
		});
		if(p && (o = C(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
			for(s = Ee.map(w(o, "script"), q), u = s.length; p > f; f++) l = o, f !== d && (l = Ee.clone(l, !0, !0), u && Ee.merge(s, w(l, "script"))), r.call(e[f], l, f);
			if(u)
				for(c = s[s.length - 1].ownerDocument, Ee.map(s, L), f = 0; u > f; f++) l = s[f], nt.test(l.type || "") && !$e.access(l, "globalEval") && Ee.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? Ee._evalUrl && !l.noModule && Ee._evalUrl(l.src, {
					nonce: l.nonce || l.getAttribute("nonce")
				}, c) : n(l.textContent.replace(ut, ""), l, c))
		}
		return e
	}

	function R(e, t, n) {
		for(var r, i = t ? Ee.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Ee.cleanData(w(r)), r.parentNode && (n && Qe(r) && T(w(r, "script")), r.parentNode.removeChild(r));
		return e
	}

	function M(e, t, n) {
		var r, i, o, a, s = e.style;
		return n = n || ct(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || Qe(e) || (a = Ee.style(e, t)), !ye.pixelBoxStyles() && lt.test(a) && pt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function I(e, t) {
		return {
			get: function() {
				return e() ? void delete this.get : (this.get = t).apply(this, arguments)
			}
		}
	}

	function W(e) {
		for(var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--;)
			if(e = dt[n] + t, e in ht) return e
	}

	function F(e) {
		var t = Ee.cssProps[e] || gt[e];
		return t ? t : e in ht ? e : gt[e] = W(e) || e
	}

	function B(e, t, n) {
		var r = Ve.exec(t);
		return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
	}

	function $(e, t, n, r, i, o) {
		var a = "width" === t ? 1 : 0,
			s = 0,
			u = 0;
		if(n === (r ? "border" : "content")) return 0;
		for(; 4 > a; a += 2) "margin" === n && (u += Ee.css(e, n + Ge[a], !0, i)), r ? ("content" === n && (u -= Ee.css(e, "padding" + Ge[a], !0, i)), "margin" !== n && (u -= Ee.css(e, "border" + Ge[a] + "Width", !0, i))) : (u += Ee.css(e, "padding" + Ge[a], !0, i), "padding" !== n ? u += Ee.css(e, "border" + Ge[a] + "Width", !0, i) : s += Ee.css(e, "border" + Ge[a] + "Width", !0, i));
		return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
	}

	function _(e, t, n) {
		var r = ct(e),
			i = !ye.boxSizingReliable() || n,
			a = i && "border-box" === Ee.css(e, "boxSizing", !1, r),
			s = a,
			u = M(e, t, r),
			l = "offset" + t[0].toUpperCase() + t.slice(1);
		if(lt.test(u)) {
			if(!n) return u;
			u = "auto"
		}
		return(!ye.boxSizingReliable() && a || !ye.reliableTrDimensions() && o(e, "tr") || "auto" === u || !parseFloat(u) && "inline" === Ee.css(e, "display", !1, r)) && e.getClientRects().length && (a = "border-box" === Ee.css(e, "boxSizing", !1, r), s = l in e, s && (u = e[l])), u = parseFloat(u) || 0, u + $(e, t, n || (a ? "border" : "content"), s, r, u) + "px"
	}

	function z(e, t, n, r, i) {
		return new z.prototype.init(e, t, n, r, i)
	}

	function U() {
		wt && (we.hidden === !1 && e.requestAnimationFrame ? e.requestAnimationFrame(U) : e.setTimeout(U, Ee.fx.interval), Ee.fx.tick())
	}

	function X() {
		return e.setTimeout(function() {
			bt = void 0
		}), bt = Date.now()
	}

	function V(e, t) {
		var n, r = 0,
			i = {
				height: e
			};
		for(t = t ? 1 : 0; 4 > r; r += 2 - t) n = Ge[r], i["margin" + n] = i["padding" + n] = e;
		return t && (i.opacity = i.width = e), i
	}

	function G(e, t, n) {
		for(var r, i = (J.tweeners[t] || []).concat(J.tweeners["*"]), o = 0, a = i.length; a > o; o++)
			if(r = i[o].call(n, t, e)) return r
	}

	function Y(e, t, n) {
		var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
			p = this,
			d = {},
			h = e.style,
			g = e.nodeType && Ke(e),
			m = $e.get(e, "fxshow");
		n.queue || (a = Ee._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
			a.unqueued || s()
		}), a.unqueued++, p.always(function() {
			p.always(function() {
				a.unqueued--, Ee.queue(e, "fx").length || a.empty.fire()
			})
		}));
		for(r in t)
			if(i = t[r], Tt.test(i)) {
				if(delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
					if("show" !== i || !m || void 0 === m[r]) continue;
					g = !0
				}
				d[r] = m && m[r] || Ee.style(e, r)
			}
		if(u = !Ee.isEmptyObject(t), u || !Ee.isEmptyObject(d)) {
			f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], l = m && m.display, null == l && (l = $e.get(e, "display")), c = Ee.css(e, "display"), "none" === c && (l ? c = l : (b([e], !0), l = e.style.display || l, c = Ee.css(e, "display"), b([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === Ee.css(e, "float") && (u || (p.done(function() {
				h.display = l
			}), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
				h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
			})), u = !1;
			for(r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = $e.access(e, "fxshow", {
				display: l
			}), o && (m.hidden = !g), g && b([e], !0), p.done(function() {
				g || b([e]), $e.remove(e, "fxshow");
				for(r in d) Ee.style(e, r, d[r])
			})), u = G(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
		}
	}

	function Q(e, t) {
		var n, r, i, o, a;
		for(n in e)
			if(r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = Ee.cssHooks[r], a && "expand" in a) {
				o = a.expand(o), delete e[r];
				for(n in o) n in e || (e[n] = o[n], t[n] = i)
			} else t[r] = i
	}

	function J(e, t, n) {
		var r, i, o = 0,
			a = J.prefilters.length,
			s = Ee.Deferred().always(function() {
				delete u.elem
			}),
			u = function() {
				if(i) return !1;
				for(var t = bt || X(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++) l.tweens[a].run(o);
				return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (u || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
			},
			l = s.promise({
				elem: e,
				props: Ee.extend({}, t),
				opts: Ee.extend(!0, {
					specialEasing: {},
					easing: Ee.easing._default
				}, n),
				originalProperties: t,
				originalOptions: n,
				startTime: bt || X(),
				duration: n.duration,
				tweens: [],
				createTween: function(t, n) {
					var r = Ee.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
					return l.tweens.push(r), r
				},
				stop: function(t) {
					var n = 0,
						r = t ? l.tweens.length : 0;
					if(i) return this;
					for(i = !0; r > n; n++) l.tweens[n].run(1);
					return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this
				}
			}),
			c = l.props;
		for(Q(c, l.opts.specialEasing); a > o; o++)
			if(r = J.prefilters[o].call(l, e, c, l.opts)) return xe(r.stop) && (Ee._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
		return Ee.map(c, G, l), xe(l.opts.start) && l.opts.start.call(e, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), Ee.fx.timer(Ee.extend(u, {
			elem: e,
			anim: l,
			queue: l.opts.queue
		})), l
	}

	function K(e) {
		var t = e.match(Pe) || [];
		return t.join(" ")
	}

	function Z(e) {
		return e.getAttribute && e.getAttribute("class") || ""
	}

	function ee(e) {
		return Array.isArray(e) ? e : "string" == typeof e ? e.match(Pe) || [] : []
	}

	function te(e, t, n, i) {
		var o;
		if(Array.isArray(t)) Ee.each(t, function(t, r) {
			n || Ot.test(e) ? i(e, r) : te(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
		});
		else if(n || "object" !== r(t)) i(e, t);
		else
			for(o in t) te(e + "[" + o + "]", t[o], n, i)
	}

	function ne(e) {
		return function(t, n) {
			"string" != typeof t && (n = t, t = "*");
			var r, i = 0,
				o = t.toLowerCase().match(Pe) || [];
			if(xe(n))
				for(; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
		}
	}

	function re(e, t, n, r) {
		function i(s) {
			var u;
			return o[s] = !0, Ee.each(e[s] || [], function(e, s) {
				var l = s(t, n, r);
				return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
			}), u
		}
		var o = {},
			a = e === Xt;
		return i(t.dataTypes[0]) || !o["*"] && i("*")
	}

	function ie(e, t) {
		var n, r, i = Ee.ajaxSettings.flatOptions || {};
		for(n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
		return r && Ee.extend(!0, e, r), e
	}

	function oe(e, t, n) {
		for(var r, i, o, a, s = e.contents, u = e.dataTypes;
			"*" === u[0];) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
		if(r)
			for(i in s)
				if(s[i] && s[i].test(r)) {
					u.unshift(i);
					break
				}
		if(u[0] in n) o = u[0];
		else {
			for(i in n) {
				if(!u[0] || e.converters[i + " " + u[0]]) {
					o = i;
					break
				}
				a || (a = i)
			}
			o = o || a
		}
		return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0
	}

	function ae(e, t, n, r) {
		var i, o, a, s, u, l = {},
			c = e.dataTypes.slice();
		if(c[1])
			for(a in e.converters) l[a.toLowerCase()] = e.converters[a];
		for(o = c.shift(); o;)
			if(e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
				if("*" === o) o = u;
				else if("*" !== u && u !== o) {
			if(a = l[u + " " + o] || l["* " + o], !a)
				for(i in l)
					if(s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
						a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
						break
					}
			if(a !== !0)
				if(a && e["throws"]) t = a(t);
				else try {
					t = a(t)
				} catch(f) {
					return {
						state: "parsererror",
						error: a ? f : "No conversion from " + u + " to " + o
					}
				}
		}
		return {
			state: "success",
			data: t
		}
	}
	var se = [],
		ue = Object.getPrototypeOf,
		le = se.slice,
		ce = se.flat ? function(e) {
			return se.flat.call(e)
		} : function(e) {
			return se.concat.apply([], e)
		},
		fe = se.push,
		pe = se.indexOf,
		de = {},
		he = de.toString,
		ge = de.hasOwnProperty,
		me = ge.toString,
		ve = me.call(Object),
		ye = {},
		xe = function(e) {
			return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
		},
		be = function(e) {
			return null != e && e === e.window
		},
		we = e.document,
		Te = {
			type: !0,
			src: !0,
			nonce: !0,
			noModule: !0
		},
		Ce = "3.6.0",
		Ee = function(e, t) {
			return new Ee.fn.init(e, t)
		};
	Ee.fn = Ee.prototype = {
		jquery: Ce,
		constructor: Ee,
		length: 0,
		toArray: function() {
			return le.call(this)
		},
		get: function(e) {
			return null == e ? le.call(this) : 0 > e ? this[e + this.length] : this[e]
		},
		pushStack: function(e) {
			var t = Ee.merge(this.constructor(), e);
			return t.prevObject = this, t
		},
		each: function(e) {
			return Ee.each(this, e)
		},
		map: function(e) {
			return this.pushStack(Ee.map(this, function(t, n) {
				return e.call(t, n, t)
			}))
		},
		slice: function() {
			return this.pushStack(le.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		even: function() {
			return this.pushStack(Ee.grep(this, function(e, t) {
				return(t + 1) % 2
			}))
		},
		odd: function() {
			return this.pushStack(Ee.grep(this, function(e, t) {
				return t % 2
			}))
		},
		eq: function(e) {
			var t = this.length,
				n = +e + (0 > e ? t : 0);
			return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: fe,
		sort: se.sort,
		splice: se.splice
	}, Ee.extend = Ee.fn.extend = function() {
		var e, t, n, r, i, o, a = arguments[0] || {},
			s = 1,
			u = arguments.length,
			l = !1;
		for("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || xe(a) || (a = {}), s === u && (a = this, s--); u > s; s++)
			if(null != (e = arguments[s]))
				for(t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (Ee.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || Ee.isPlainObject(n) ? n : {}, i = !1, a[t] = Ee.extend(l, o, r)) : void 0 !== r && (a[t] = r));
		return a
	}, Ee.extend({
		expando: "jQuery" + (Ce + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(e) {
			throw new Error(e)
		},
		noop: function() {},
		isPlainObject: function(e) {
			var t, n;
			return e && "[object Object]" === he.call(e) ? (t = ue(e)) ? (n = ge.call(t, "constructor") && t.constructor, "function" == typeof n && me.call(n) === ve) : !0 : !1
		},
		isEmptyObject: function(e) {
			var t;
			for(t in e) return !1;
			return !0
		},
		globalEval: function(e, t, r) {
			n(e, {
				nonce: t && t.nonce
			}, r)
		},
		each: function(e, t) {
			var n, r = 0;
			if(i(e))
				for(n = e.length; n > r && t.call(e[r], r, e[r]) !== !1; r++);
			else
				for(r in e)
					if(t.call(e[r], r, e[r]) === !1) break; return e
		},
		makeArray: function(e, t) {
			var n = t || [];
			return null != e && (i(Object(e)) ? Ee.merge(n, "string" == typeof e ? [e] : e) : fe.call(n, e)), n
		},
		inArray: function(e, t, n) {
			return null == t ? -1 : pe.call(t, e, n)
		},
		merge: function(e, t) {
			for(var n = +t.length, r = 0, i = e.length; n > r; r++) e[i++] = t[r];
			return e.length = i, e
		},
		grep: function(e, t, n) {
			for(var r, i = [], o = 0, a = e.length, s = !n; a > o; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
			return i
		},
		map: function(e, t, n) {
			var r, o, a = 0,
				s = [];
			if(i(e))
				for(r = e.length; r > a; a++) o = t(e[a], a, n), null != o && s.push(o);
			else
				for(a in e) o = t(e[a], a, n), null != o && s.push(o);
			return ce(s)
		},
		guid: 1,
		support: ye
	}), "function" == typeof Symbol && (Ee.fn[Symbol.iterator] = se[Symbol.iterator]), Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
		de["[object " + t + "]"] = t.toLowerCase()
	});
	var Se = function(e) {
		function t(e, t, n, r) {
			var i, o, a, s, u, l, c, p = t && t.ownerDocument,
				h = t ? t.nodeType : 9;
			if(n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
			if(!r && (L(t), t = t || H, P)) {
				if(11 !== h && (u = xe.exec(e)))
					if(i = u[1]) {
						if(9 === h) {
							if(!(a = t.getElementById(i))) return n;
							if(a.id === i) return n.push(a), n
						} else if(p && (a = p.getElementById(i)) && W(t, a) && a.id === i) return n.push(a), n
					} else {
						if(u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
						if((i = u[3]) && T.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n
					}
				if(T.qsa && !V[e + " "] && (!R || !R.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
					if(c = e, p = t, 1 === h && (fe.test(e) || ce.test(e))) {
						for(p = be.test(e) && f(t.parentNode) || t, p === t && T.scope || ((s = t.getAttribute("id")) ? s = s.replace(Ce, Ee) : t.setAttribute("id", s = F)), l = k(e), o = l.length; o--;) l[o] = (s ? "#" + s : ":scope") + " " + d(l[o]);
						c = l.join(",")
					}
					try {
						return Z.apply(n, p.querySelectorAll(c)), n
					} catch(g) {
						V(e, !0)
					} finally {
						s === F && t.removeAttribute("id")
					}
				}
			}
			return N(e.replace(ue, "$1"), t, n, r)
		}

		function n() {
			function e(n, r) {
				return t.push(n + " ") > C.cacheLength && delete e[t.shift()], e[n + " "] = r
			}
			var t = [];
			return e
		}

		function r(e) {
			return e[F] = !0, e
		}

		function i(e) {
			var t = H.createElement("fieldset");
			try {
				return !!e(t)
			} catch(n) {
				return !1
			} finally {
				t.parentNode && t.parentNode.removeChild(t), t = null
			}
		}

		function o(e, t) {
			for(var n = e.split("|"), r = n.length; r--;) C.attrHandle[n[r]] = t
		}

		function a(e, t) {
			var n = t && e,
				r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
			if(r) return r;
			if(n)
				for(; n = n.nextSibling;)
					if(n === t) return -1;
			return e ? 1 : -1
		}

		function s(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return "input" === n && t.type === e
			}
		}

		function u(e) {
			return function(t) {
				var n = t.nodeName.toLowerCase();
				return("input" === n || "button" === n) && t.type === e
			}
		}

		function l(e) {
			return function(t) {
				return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ke(t) === e : t.disabled === e : "label" in t ? t.disabled === e : !1
			}
		}

		function c(e) {
			return r(function(t) {
				return t = +t, r(function(n, r) {
					for(var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
				})
			})
		}

		function f(e) {
			return e && "undefined" != typeof e.getElementsByTagName && e
		}

		function p() {}

		function d(e) {
			for(var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
			return r
		}

		function h(e, t, n) {
			var r = t.dir,
				i = t.next,
				o = i || r,
				a = n && "parentNode" === o,
				s = _++;
			return t.first ? function(t, n, i) {
				for(; t = t[r];)
					if(1 === t.nodeType || a) return e(t, n, i);
				return !1
			} : function(t, n, u) {
				var l, c, f, p = [$, s];
				if(u) {
					for(; t = t[r];)
						if((1 === t.nodeType || a) && e(t, n, u)) return !0
				} else
					for(; t = t[r];)
						if(1 === t.nodeType || a)
							if(f = t[F] || (t[F] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
							else {
								if((l = c[o]) && l[0] === $ && l[1] === s) return p[2] = l[2];
								if(c[o] = p, p[2] = e(t, n, u)) return !0
							} return !1
			}
		}

		function g(e) {
			return e.length > 1 ? function(t, n, r) {
				for(var i = e.length; i--;)
					if(!e[i](t, n, r)) return !1;
				return !0
			} : e[0]
		}

		function m(e, n, r) {
			for(var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
			return r
		}

		function v(e, t, n, r, i) {
			for(var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
			return a
		}

		function y(e, t, n, i, o, a) {
			return i && !i[F] && (i = y(i)), o && !o[F] && (o = y(o, a)), r(function(r, a, s, u) {
				var l, c, f, p = [],
					d = [],
					h = a.length,
					g = r || m(t || "*", s.nodeType ? [s] : s, []),
					y = !e || !r && t ? g : v(g, p, e, s, u),
					x = n ? o || (r ? e : h || i) ? [] : a : y;
				if(n && n(y, x, s, u), i)
					for(l = v(x, d), i(l, [], s, u), c = l.length; c--;)(f = l[c]) && (x[d[c]] = !(y[d[c]] = f));
				if(r) {
					if(o || e) {
						if(o) {
							for(l = [], c = x.length; c--;)(f = x[c]) && l.push(y[c] = f);
							o(null, x = [], l, u)
						}
						for(c = x.length; c--;)(f = x[c]) && (l = o ? te(r, f) : p[c]) > -1 && (r[l] = !(a[l] = f))
					}
				} else x = v(x === a ? x.splice(h, x.length) : x), o ? o(null, a, x, u) : Z.apply(a, x)
			})
		}

		function x(e) {
			for(var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = h(function(e) {
					return e === t
				}, a, !0), l = h(function(e) {
					return te(t, e) > -1
				}, a, !0), c = [function(e, n, r) {
					var i = !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
					return t = null, i
				}]; i > s; s++)
				if(n = C.relative[e[s].type]) c = [h(g(c), n)];
				else {
					if(n = C.filter[e[s].type].apply(null, e[s].matches), n[F]) {
						for(r = ++s; i > r && !C.relative[e[r].type]; r++);
						return y(s > 1 && g(c), s > 1 && d(e.slice(0, s - 1).concat({
							value: " " === e[s - 2].type ? "*" : ""
						})).replace(ue, "$1"), n, r > s && x(e.slice(s, r)), i > r && x(e = e.slice(r)), i > r && d(e))
					}
					c.push(n)
				}
			return g(c)
		}

		function b(e, n) {
			var i = n.length > 0,
				o = e.length > 0,
				a = function(r, a, s, u, l) {
					var c, f, p, d = 0,
						h = "0",
						g = r && [],
						m = [],
						y = j,
						x = r || o && C.find.TAG("*", l),
						b = $ += null == y ? 1 : Math.random() || .1,
						w = x.length;
					for(l && (j = a == H || a || l); h !== w && null != (c = x[h]); h++) {
						if(o && c) {
							for(f = 0, a || c.ownerDocument == H || (L(c), s = !P); p = e[f++];)
								if(p(c, a || H, s)) {
									u.push(c);
									break
								}
							l && ($ = b)
						}
						i && ((c = !p && c) && d--, r && g.push(c))
					}
					if(d += h, i && h !== d) {
						for(f = 0; p = n[f++];) p(g, m, a, s);
						if(r) {
							if(d > 0)
								for(; h--;) g[h] || m[h] || (m[h] = J.call(u));
							m = v(m)
						}
						Z.apply(u, m), l && !r && m.length > 0 && d + n.length > 1 && t.uniqueSort(u)
					}
					return l && ($ = b, j = y), g
				};
			return i ? r(a) : a
		}
		var w, T, C, E, S, k, A, N, j, D, q, L, H, O, P, R, M, I, W, F = "sizzle" + 1 * new Date,
			B = e.document,
			$ = 0,
			_ = 0,
			z = n(),
			U = n(),
			X = n(),
			V = n(),
			G = function(e, t) {
				return e === t && (q = !0), 0
			},
			Y = {}.hasOwnProperty,
			Q = [],
			J = Q.pop,
			K = Q.push,
			Z = Q.push,
			ee = Q.slice,
			te = function(e, t) {
				for(var n = 0, r = e.length; r > n; n++)
					if(e[n] === t) return n;
				return -1
			},
			ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			re = "[\\x20\\t\\r\\n\\f]",
			ie = "(?:\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\x00-\\x7f])+",
			oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
			ae = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
			se = new RegExp(re + "+", "g"),
			ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
			le = new RegExp("^" + re + "*," + re + "*"),
			ce = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
			fe = new RegExp(re + "|>"),
			pe = new RegExp(ae),
			de = new RegExp("^" + ie + "$"),
			he = {
				ID: new RegExp("^#(" + ie + ")"),
				CLASS: new RegExp("^\\.(" + ie + ")"),
				TAG: new RegExp("^(" + ie + "|[*])"),
				ATTR: new RegExp("^" + oe),
				PSEUDO: new RegExp("^" + ae),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + ne + ")$", "i"),
				needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
			},
			ge = /HTML$/i,
			me = /^(?:input|select|textarea|button)$/i,
			ve = /^h\d$/i,
			ye = /^[^{]+\{\s*\[native \w/,
			xe = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			be = /[+~]/,
			we = new RegExp("\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])", "g"),
			Te = function(e, t) {
				var n = "0x" + e.slice(1) - 65536;
				return t ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
			},
			Ce = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			Ee = function(e, t) {
				return t ? "\x00" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
			},
			Se = function() {
				L()
			},
			ke = h(function(e) {
				return e.disabled === !0 && "fieldset" === e.nodeName.toLowerCase()
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			Z.apply(Q = ee.call(B.childNodes), B.childNodes), Q[B.childNodes.length].nodeType
		} catch(Ae) {
			Z = {
				apply: Q.length ? function(e, t) {
					K.apply(e, ee.call(t))
				} : function(e, t) {
					for(var n = e.length, r = 0; e[n++] = t[r++];);
					e.length = n - 1
				}
			}
		}
		T = t.support = {}, S = t.isXML = function(e) {
			var t = e && e.namespaceURI,
				n = e && (e.ownerDocument || e).documentElement;
			return !ge.test(t || n && n.nodeName || "HTML")
		}, L = t.setDocument = function(e) {
			var t, n, r = e ? e.ownerDocument || e : B;
			return r != H && 9 === r.nodeType && r.documentElement ? (H = r, O = H.documentElement, P = !S(H), B != H && (n = H.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Se, !1) : n.attachEvent && n.attachEvent("onunload", Se)), T.scope = i(function(e) {
				return O.appendChild(e).appendChild(H.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
			}), T.attributes = i(function(e) {
				return e.className = "i", !e.getAttribute("className")
			}), T.getElementsByTagName = i(function(e) {
				return e.appendChild(H.createComment("")), !e.getElementsByTagName("*").length
			}), T.getElementsByClassName = ye.test(H.getElementsByClassName), T.getById = i(function(e) {
				return O.appendChild(e).id = F, !H.getElementsByName || !H.getElementsByName(F).length
			}), T.getById ? (C.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					return e.getAttribute("id") === t
				}
			}, C.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && P) {
					var n = t.getElementById(e);
					return n ? [n] : []
				}
			}) : (C.filter.ID = function(e) {
				var t = e.replace(we, Te);
				return function(e) {
					var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
					return n && n.value === t
				}
			}, C.find.ID = function(e, t) {
				if("undefined" != typeof t.getElementById && P) {
					var n, r, i, o = t.getElementById(e);
					if(o) {
						if(n = o.getAttributeNode("id"), n && n.value === e) return [o];
						for(i = t.getElementsByName(e), r = 0; o = i[r++];)
							if(n = o.getAttributeNode("id"), n && n.value === e) return [o]
					}
					return []
				}
			}), C.find.TAG = T.getElementsByTagName ? function(e, t) {
				return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : T.qsa ? t.querySelectorAll(e) : void 0
			} : function(e, t) {
				var n, r = [],
					i = 0,
					o = t.getElementsByTagName(e);
				if("*" === e) {
					for(; n = o[i++];) 1 === n.nodeType && r.push(n);
					return r
				}
				return o
			}, C.find.CLASS = T.getElementsByClassName && function(e, t) {
				return "undefined" != typeof t.getElementsByClassName && P ? t.getElementsByClassName(e) : void 0
			}, M = [], R = [], (T.qsa = ye.test(H.querySelectorAll)) && (i(function(e) {
				var t;
				O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && R.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || R.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + F + "-]").length || R.push("~="), t = H.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || R.push("\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || R.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || R.push(".#.+[+~]"), e.querySelectorAll("\\\f"), R.push("[\\r\\n\\f]")
			}), i(function(e) {
				e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
				var t = H.createElement("input");
				t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && R.push("name" + re + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && R.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && R.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), R.push(",.*:")
			})), (T.matchesSelector = ye.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
				T.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), M.push("!=", ae)
			}), R = R.length && new RegExp(R.join("|")), M = M.length && new RegExp(M.join("|")), t = ye.test(O.compareDocumentPosition), W = t || ye.test(O.contains) ? function(e, t) {
				var n = 9 === e.nodeType ? e.documentElement : e,
					r = t && t.parentNode;
				return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
			} : function(e, t) {
				if(t)
					for(; t = t.parentNode;)
						if(t === e) return !0;
				return !1
			}, G = t ? function(e, t) {
				if(e === t) return q = !0, 0;
				var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
				return n ? n : (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !T.sortDetached && t.compareDocumentPosition(e) === n ? e == H || e.ownerDocument == B && W(B, e) ? -1 : t == H || t.ownerDocument == B && W(B, t) ? 1 : D ? te(D, e) - te(D, t) : 0 : 4 & n ? -1 : 1)
			} : function(e, t) {
				if(e === t) return q = !0, 0;
				var n, r = 0,
					i = e.parentNode,
					o = t.parentNode,
					s = [e],
					u = [t];
				if(!i || !o) return e == H ? -1 : t == H ? 1 : i ? -1 : o ? 1 : D ? te(D, e) - te(D, t) : 0;
				if(i === o) return a(e, t);
				for(n = e; n = n.parentNode;) s.unshift(n);
				for(n = t; n = n.parentNode;) u.unshift(n);
				for(; s[r] === u[r];) r++;
				return r ? a(s[r], u[r]) : s[r] == B ? -1 : u[r] == B ? 1 : 0
			}, H) : H
		}, t.matches = function(e, n) {
			return t(e, null, null, n)
		}, t.matchesSelector = function(e, n) {
			if(L(e), T.matchesSelector && P && !V[n + " "] && (!M || !M.test(n)) && (!R || !R.test(n))) try {
				var r = I.call(e, n);
				if(r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
			} catch(i) {
				V(n, !0)
			}
			return t(n, H, null, [e]).length > 0
		}, t.contains = function(e, t) {
			return(e.ownerDocument || e) != H && L(e), W(e, t)
		}, t.attr = function(e, t) {
			(e.ownerDocument || e) != H && L(e);
			var n = C.attrHandle[t.toLowerCase()],
				r = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !P) : void 0;
			return void 0 !== r ? r : T.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}, t.escape = function(e) {
			return(e + "").replace(Ce, Ee)
		}, t.error = function(e) {
			throw new Error("Syntax error, unrecognized expression: " + e)
		}, t.uniqueSort = function(e) {
			var t, n = [],
				r = 0,
				i = 0;
			if(q = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(G), q) {
				for(; t = e[i++];) t === e[i] && (r = n.push(i));
				for(; r--;) e.splice(n[r], 1)
			}
			return D = null, e
		}, E = t.getText = function(e) {
			var t, n = "",
				r = 0,
				i = e.nodeType;
			if(i) {
				if(1 === i || 9 === i || 11 === i) {
					if("string" == typeof e.textContent) return e.textContent;
					for(e = e.firstChild; e; e = e.nextSibling) n += E(e)
				} else if(3 === i || 4 === i) return e.nodeValue
			} else
				for(; t = e[r++];) n += E(t);
			return n
		}, C = t.selectors = {
			cacheLength: 50,
			createPseudo: r,
			match: he,
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
					return e[1] = e[1].replace(we, Te), e[3] = (e[3] || e[4] || e[5] || "").replace(we, Te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
				},
				CHILD: function(e) {
					return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
				},
				PSEUDO: function(e) {
					var t, n = !e[6] && e[2];
					return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
				}
			},
			filter: {
				TAG: function(e) {
					var t = e.replace(we, Te).toLowerCase();
					return "*" === e ? function() {
						return !0
					} : function(e) {
						return e.nodeName && e.nodeName.toLowerCase() === t
					}
				},
				CLASS: function(e) {
					var t = z[e + " "];
					return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && z(e, function(e) {
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
					return 1 === r && 0 === i ? function(e) {
						return !!e.parentNode
					} : function(t, n, u) {
						var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling",
							m = t.parentNode,
							v = s && t.nodeName.toLowerCase(),
							y = !u && !s,
							x = !1;
						if(m) {
							if(o) {
								for(; g;) {
									for(p = t; p = p[g];)
										if(s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
									h = g = "only" === e && !h && "nextSibling"
								}
								return !0
							}
							if(h = [a ? m.firstChild : m.lastChild], a && y) {
								for(p = m, f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === $ && l[1], x = d && l[2], p = d && m.childNodes[d]; p = ++d && p && p[g] || (x = d = 0) || h.pop();)
									if(1 === p.nodeType && ++x && p === t) {
										c[e] = [$, d, x];
										break
									}
							} else if(y && (p = t, f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), l = c[e] || [], d = l[0] === $ && l[1], x = d), x === !1)
								for(;
									(p = ++d && p && p[g] || (x = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++x || (y && (f = p[F] || (p[F] = {}), c = f[p.uniqueID] || (f[p.uniqueID] = {}), c[e] = [$, x]), p !== t)););
							return x -= i, x === r || x % r === 0 && x / r >= 0
						}
					}
				},
				PSEUDO: function(e, n) {
					var i, o = C.pseudos[e] || C.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
					return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n], C.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
						for(var r, i = o(e, n), a = i.length; a--;) r = te(e, i[a]), e[r] = !(t[r] = i[a])
					}) : function(e) {
						return o(e, 0, i)
					}) : o
				}
			},
			pseudos: {
				not: r(function(e) {
					var t = [],
						n = [],
						i = A(e.replace(ue, "$1"));
					return i[F] ? r(function(e, t, n, r) {
						for(var o, a = i(e, null, r, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
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
					return e = e.replace(we, Te),
						function(t) {
							return(t.textContent || E(t)).indexOf(e) > -1
						}
				}),
				lang: r(function(e) {
					return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(we, Te).toLowerCase(),
						function(t) {
							var n;
							do
								if(n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-");
							while((t = t.parentNode) && 1 === t.nodeType);
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
					return e === H.activeElement && (!H.hasFocus || H.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
				},
				enabled: l(!1),
				disabled: l(!0),
				checked: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && !!e.checked || "option" === t && !!e.selected
				},
				selected: function(e) {
					return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
				},
				empty: function(e) {
					for(e = e.firstChild; e; e = e.nextSibling)
						if(e.nodeType < 6) return !1;
					return !0
				},
				parent: function(e) {
					return !C.pseudos.empty(e)
				},
				header: function(e) {
					return ve.test(e.nodeName)
				},
				input: function(e) {
					return me.test(e.nodeName)
				},
				button: function(e) {
					var t = e.nodeName.toLowerCase();
					return "input" === t && "button" === e.type || "button" === t
				},
				text: function(e) {
					var t;
					return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
				},
				first: c(function() {
					return [0]
				}),
				last: c(function(e, t) {
					return [t - 1]
				}),
				eq: c(function(e, t, n) {
					return [0 > n ? n + t : n]
				}),
				even: c(function(e, t) {
					for(var n = 0; t > n; n += 2) e.push(n);
					return e
				}),
				odd: c(function(e, t) {
					for(var n = 1; t > n; n += 2) e.push(n);
					return e
				}),
				lt: c(function(e, t, n) {
					for(var r = 0 > n ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
					return e
				}),
				gt: c(function(e, t, n) {
					for(var r = 0 > n ? n + t : n; ++r < t;) e.push(r);
					return e
				})
			}
		}, C.pseudos.nth = C.pseudos.eq;
		for(w in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) C.pseudos[w] = s(w);
		for(w in {
				submit: !0,
				reset: !0
			}) C.pseudos[w] = u(w);
		return p.prototype = C.filters = C.pseudos, C.setFilters = new p, k = t.tokenize = function(e, n) {
			var r, i, o, a, s, u, l, c = U[e + " "];
			if(c) return n ? 0 : c.slice(0);
			for(s = e, u = [], l = C.preFilter; s;) {
				(!r || (i = le.exec(s))) && (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ce.exec(s)) && (r = i.shift(), o.push({
					value: r,
					type: i[0].replace(ue, " ")
				}), s = s.slice(r.length));
				for(a in C.filter) !(i = he[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
					value: r,
					type: a,
					matches: i
				}), s = s.slice(r.length));
				if(!r) break
			}
			return n ? s.length : s ? t.error(e) : U(e, u).slice(0)
		}, A = t.compile = function(e, t) {
			var n, r = [],
				i = [],
				o = X[e + " "];
			if(!o) {
				for(t || (t = k(e)), n = t.length; n--;) o = x(t[n]), o[F] ? r.push(o) : i.push(o);
				o = X(e, b(i, r)), o.selector = e
			}
			return o
		}, N = t.select = function(e, t, n, r) {
			var i, o, a, s, u, l = "function" == typeof e && e,
				c = !r && k(e = l.selector || e);
			if(n = n || [], 1 === c.length) {
				if(o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && P && C.relative[o[1].type]) {
					if(t = (C.find.ID(a.matches[0].replace(we, Te), t) || [])[0], !t) return n;
					l && (t = t.parentNode), e = e.slice(o.shift().value.length)
				}
				for(i = he.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)
					if((u = C.find[s]) && (r = u(a.matches[0].replace(we, Te), be.test(o[0].type) && f(t.parentNode) || t))) {
						if(o.splice(i, 1), e = r.length && d(o), !e) return Z.apply(n, r), n;
						break
					}
			}
			return(l || A(e, c))(r, t, !P, n, !t || be.test(e) && f(t.parentNode) || t), n
		}, T.sortStable = F.split("").sort(G).join("") === F, T.detectDuplicates = !!q, L(), T.sortDetached = i(function(e) {
			return 1 & e.compareDocumentPosition(H.createElement("fieldset"))
		}), i(function(e) {
			return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
		}) || o("type|href|height|width", function(e, t, n) {
			return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
		}), T.attributes && i(function(e) {
			return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
		}) || o("value", function(e, t, n) {
			return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
		}), i(function(e) {
			return null == e.getAttribute("disabled")
		}) || o(ne, function(e, t, n) {
			var r;
			return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
		}), t
	}(e);
	Ee.find = Se, Ee.expr = Se.selectors, Ee.expr[":"] = Ee.expr.pseudos, Ee.uniqueSort = Ee.unique = Se.uniqueSort, Ee.text = Se.getText, Ee.isXMLDoc = Se.isXML, Ee.contains = Se.contains, Ee.escapeSelector = Se.escape;
	var ke = function(e, t, n) {
			for(var r = [], i = void 0 !== n;
				(e = e[t]) && 9 !== e.nodeType;)
				if(1 === e.nodeType) {
					if(i && Ee(e).is(n)) break;
					r.push(e)
				}
			return r
		},
		Ae = function(e, t) {
			for(var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
			return n
		},
		Ne = Ee.expr.match.needsContext,
		je = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
	Ee.filter = function(e, t, n) {
		var r = t[0];
		return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ee.find.matchesSelector(r, e) ? [r] : [] : Ee.find.matches(e, Ee.grep(t, function(e) {
			return 1 === e.nodeType
		}))
	}, Ee.fn.extend({
		find: function(e) {
			var t, n, r = this.length,
				i = this;
			if("string" != typeof e) return this.pushStack(Ee(e).filter(function() {
				for(t = 0; r > t; t++)
					if(Ee.contains(i[t], this)) return !0
			}));
			for(n = this.pushStack([]), t = 0; r > t; t++) Ee.find(e, i[t], n);
			return r > 1 ? Ee.uniqueSort(n) : n
		},
		filter: function(e) {
			return this.pushStack(a(this, e || [], !1))
		},
		not: function(e) {
			return this.pushStack(a(this, e || [], !0))
		},
		is: function(e) {
			return !!a(this, "string" == typeof e && Ne.test(e) ? Ee(e) : e || [], !1).length
		}
	});
	var De, qe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
		Le = Ee.fn.init = function(e, t, n) {
			var r, i;
			if(!e) return this;
			if(n = n || De, "string" == typeof e) {
				if(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : qe.exec(e), !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
				if(r[1]) {
					if(t = t instanceof Ee ? t[0] : t, Ee.merge(this, Ee.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : we, !0)), je.test(r[1]) && Ee.isPlainObject(t))
						for(r in t) xe(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
					return this
				}
				return i = we.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
			}
			return e.nodeType ? (this[0] = e, this.length = 1, this) : xe(e) ? void 0 !== n.ready ? n.ready(e) : e(Ee) : Ee.makeArray(e, this)
		};
	Le.prototype = Ee.fn, De = Ee(we);
	var He = /^(?:parents|prev(?:Until|All))/,
		Oe = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};
	Ee.fn.extend({
		has: function(e) {
			var t = Ee(e, this),
				n = t.length;
			return this.filter(function() {
				for(var e = 0; n > e; e++)
					if(Ee.contains(this, t[e])) return !0
			})
		},
		closest: function(e, t) {
			var n, r = 0,
				i = this.length,
				o = [],
				a = "string" != typeof e && Ee(e);
			if(!Ne.test(e))
				for(; i > r; r++)
					for(n = this[r]; n && n !== t; n = n.parentNode)
						if(n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && Ee.find.matchesSelector(n, e))) {
							o.push(n);
							break
						}
			return this.pushStack(o.length > 1 ? Ee.uniqueSort(o) : o)
		},
		index: function(e) {
			return e ? "string" == typeof e ? pe.call(Ee(e), this[0]) : pe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(e, t) {
			return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(), Ee(e, t))))
		},
		addBack: function(e) {
			return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
		}
	}), Ee.each({
		parent: function(e) {
			var t = e.parentNode;
			return t && 11 !== t.nodeType ? t : null
		},
		parents: function(e) {
			return ke(e, "parentNode")
		},
		parentsUntil: function(e, t, n) {
			return ke(e, "parentNode", n)
		},
		next: function(e) {
			return s(e, "nextSibling")
		},
		prev: function(e) {
			return s(e, "previousSibling")
		},
		nextAll: function(e) {
			return ke(e, "nextSibling")
		},
		prevAll: function(e) {
			return ke(e, "previousSibling")
		},
		nextUntil: function(e, t, n) {
			return ke(e, "nextSibling", n)
		},
		prevUntil: function(e, t, n) {
			return ke(e, "previousSibling", n)
		},
		siblings: function(e) {
			return Ae((e.parentNode || {}).firstChild, e)
		},
		children: function(e) {
			return Ae(e.firstChild)
		},
		contents: function(e) {
			return null != e.contentDocument && ue(e.contentDocument) ? e.contentDocument : (o(e, "template") && (e = e.content || e), Ee.merge([], e.childNodes))
		}
	}, function(e, t) {
		Ee.fn[e] = function(n, r) {
			var i = Ee.map(this, t, n);
			return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ee.filter(r, i)), this.length > 1 && (Oe[e] || Ee.uniqueSort(i), He.test(e) && i.reverse()), this.pushStack(i)
		}
	});
	var Pe = /[^\x20\t\r\n\f]+/g;
	Ee.Callbacks = function(e) {
		e = "string" == typeof e ? u(e) : Ee.extend({}, e);
		var t, n, i, o, a = [],
			s = [],
			l = -1,
			c = function() {
				for(o = o || e.once, i = t = !0; s.length; l = -1)
					for(n = s.shift(); ++l < a.length;) a[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = a.length, n = !1);
				e.memory || (n = !1), t = !1, o && (a = n ? [] : "")
			},
			f = {
				add: function() {
					return a && (n && !t && (l = a.length - 1, s.push(n)), function i(t) {
						Ee.each(t, function(t, n) {
							xe(n) ? e.unique && f.has(n) || a.push(n) : n && n.length && "string" !== r(n) && i(n)
						})
					}(arguments), n && !t && c()), this
				},
				remove: function() {
					return Ee.each(arguments, function(e, t) {
						for(var n;
							(n = Ee.inArray(t, a, n)) > -1;) a.splice(n, 1), l >= n && l--
					}), this
				},
				has: function(e) {
					return e ? Ee.inArray(e, a) > -1 : a.length > 0
				},
				empty: function() {
					return a && (a = []), this
				},
				disable: function() {
					return o = s = [], a = n = "", this
				},
				disabled: function() {
					return !a
				},
				lock: function() {
					return o = s = [], n || t || (a = n = ""), this
				},
				locked: function() {
					return !!o
				},
				fireWith: function(e, n) {
					return o || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || c()), this
				},
				fire: function() {
					return f.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return f
	}, Ee.extend({
		Deferred: function(t) {
			var n = [
					["notify", "progress", Ee.Callbacks("memory"), Ee.Callbacks("memory"), 2],
					["resolve", "done", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", Ee.Callbacks("once memory"), Ee.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				i = {
					state: function() {
						return r
					},
					always: function() {
						return o.done(arguments).fail(arguments), this
					},
					"catch": function(e) {
						return i.then(null, e)
					},
					pipe: function() {
						var e = arguments;
						return Ee.Deferred(function(t) {
							Ee.each(n, function(n, r) {
								var i = xe(e[r[4]]) && e[r[4]];
								o[r[1]](function() {
									var e = i && i.apply(this, arguments);
									e && xe(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
								})
							}), e = null
						}).promise()
					},
					then: function(t, r, i) {
						function o(t, n, r, i) {
							return function() {
								var s = this,
									u = arguments,
									f = function() {
										var e, f;
										if(!(a > t)) {
											if(e = r.apply(s, u), e === n.promise()) throw new TypeError("Thenable self-resolution");
											f = e && ("object" == typeof e || "function" == typeof e) && e.then, xe(f) ? i ? f.call(e, o(a, n, l, i), o(a, n, c, i)) : (a++, f.call(e, o(a, n, l, i), o(a, n, c, i), o(a, n, l, n.notifyWith))) : (r !== l && (s = void 0, u = [e]), (i || n.resolveWith)(s, u))
										}
									},
									p = i ? f : function() {
										try {
											f()
										} catch(e) {
											Ee.Deferred.exceptionHook && Ee.Deferred.exceptionHook(e, p.stackTrace), t + 1 >= a && (r !== c && (s = void 0, u = [e]), n.rejectWith(s, u))
										}
									};
								t ? p() : (Ee.Deferred.getStackHook && (p.stackTrace = Ee.Deferred.getStackHook()), e.setTimeout(p))
							}
						}
						var a = 0;
						return Ee.Deferred(function(e) {
							n[0][3].add(o(0, e, xe(i) ? i : l, e.notifyWith)), n[1][3].add(o(0, e, xe(t) ? t : l)), n[2][3].add(o(0, e, xe(r) ? r : c))
						}).promise()
					},
					promise: function(e) {
						return null != e ? Ee.extend(e, i) : i
					}
				},
				o = {};
			return Ee.each(n, function(e, t) {
				var a = t[2],
					s = t[5];
				i[t[1]] = a.add, s && a.add(function() {
					r = s
				}, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), a.add(t[3].fire), o[t[0]] = function() {
					return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
				}, o[t[0] + "With"] = a.fireWith
			}), i.promise(o), t && t.call(o, o), o
		},
		when: function(e) {
			var t = arguments.length,
				n = t,
				r = Array(n),
				i = le.call(arguments),
				o = Ee.Deferred(),
				a = function(e) {
					return function(n) {
						r[e] = this, i[e] = arguments.length > 1 ? le.call(arguments) : n, --t || o.resolveWith(r, i)
					}
				};
			if(1 >= t && (f(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || xe(i[n] && i[n].then))) return o.then();
			for(; n--;) f(i[n], a(n), o.reject);
			return o.promise()
		}
	});
	var Re = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	Ee.Deferred.exceptionHook = function(t, n) {
		e.console && e.console.warn && t && Re.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
	}, Ee.readyException = function(t) {
		e.setTimeout(function() {
			throw t
		})
	};
	var Me = Ee.Deferred();
	Ee.fn.ready = function(e) {
		return Me.then(e)["catch"](function(e) {
			Ee.readyException(e)
		}), this
	}, Ee.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(e) {
			(e === !0 ? --Ee.readyWait : Ee.isReady) || (Ee.isReady = !0, e !== !0 && --Ee.readyWait > 0 || Me.resolveWith(we, [Ee]))
		}
	}), Ee.ready.then = Me.then, "complete" === we.readyState || "loading" !== we.readyState && !we.documentElement.doScroll ? e.setTimeout(Ee.ready) : (we.addEventListener("DOMContentLoaded", p), e.addEventListener("load", p));
	var Ie = function(e, t, n, i, o, a, s) {
			var u = 0,
				l = e.length,
				c = null == n;
			if("object" === r(n)) {
				o = !0;
				for(u in n) Ie(e, t, u, n[u], !0, a, s)
			} else if(void 0 !== i && (o = !0, xe(i) || (s = !0), c && (s ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
					return c.call(Ee(e), n)
				})), t))
				for(; l > u; u++) t(e[u], n, s ? i : i.call(e[u], u, t(e[u], n)));
			return o ? e : c ? t.call(e) : l ? t(e[0], n) : a
		},
		We = /^-ms-/,
		Fe = /-([a-z])/g,
		Be = function(e) {
			return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
		};
	g.uid = 1, g.prototype = {
		cache: function(e) {
			var t = e[this.expando];
			return t || (t = {}, Be(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
				value: t,
				configurable: !0
			}))), t
		},
		set: function(e, t, n) {
			var r, i = this.cache(e);
			if("string" == typeof t) i[h(t)] = n;
			else
				for(r in t) i[h(r)] = t[r];
			return i
		},
		get: function(e, t) {
			return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
		},
		access: function(e, t, n) {
			return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
		},
		remove: function(e, t) {
			var n, r = e[this.expando];
			if(void 0 !== r) {
				if(void 0 !== t) {
					Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(Pe) || []), n = t.length;
					for(; n--;) delete r[t[n]]
				}(void 0 === t || Ee.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
			}
		},
		hasData: function(e) {
			var t = e[this.expando];
			return void 0 !== t && !Ee.isEmptyObject(t)
		}
	};
	var $e = new g,
		_e = new g,
		ze = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ue = /[A-Z]/g;
	Ee.extend({
		hasData: function(e) {
			return _e.hasData(e) || $e.hasData(e)
		},
		data: function(e, t, n) {
			return _e.access(e, t, n)
		},
		removeData: function(e, t) {
			_e.remove(e, t)
		},
		_data: function(e, t, n) {
			return $e.access(e, t, n)
		},
		_removeData: function(e, t) {
			$e.remove(e, t)
		}
	}), Ee.fn.extend({
		data: function(e, t) {
			var n, r, i, o = this[0],
				a = o && o.attributes;
			if(void 0 === e) {
				if(this.length && (i = _e.get(o), 1 === o.nodeType && !$e.get(o, "hasDataAttrs"))) {
					for(n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = h(r.slice(5)), v(o, r, i[r])));
					$e.set(o, "hasDataAttrs", !0)
				}
				return i
			}
			return "object" == typeof e ? this.each(function() {
				_e.set(this, e)
			}) : Ie(this, function(t) {
				var n;
				if(o && void 0 === t) {
					if(n = _e.get(o, e), void 0 !== n) return n;
					if(n = v(o, e), void 0 !== n) return n
				} else this.each(function() {
					_e.set(this, e, t)
				})
			}, null, t, arguments.length > 1, null, !0)
		},
		removeData: function(e) {
			return this.each(function() {
				_e.remove(this, e)
			})
		}
	}), Ee.extend({
		queue: function(e, t, n) {
			var r;
			return e ? (t = (t || "fx") + "queue", r = $e.get(e, t), n && (!r || Array.isArray(n) ? r = $e.access(e, t, Ee.makeArray(n)) : r.push(n)), r || []) : void 0
		},
		dequeue: function(e, t) {
			t = t || "fx";
			var n = Ee.queue(e, t),
				r = n.length,
				i = n.shift(),
				o = Ee._queueHooks(e, t),
				a = function() {
					Ee.dequeue(e, t)
				};
			"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
		},
		_queueHooks: function(e, t) {
			var n = t + "queueHooks";
			return $e.get(e, n) || $e.access(e, n, {
				empty: Ee.Callbacks("once memory").add(function() {
					$e.remove(e, [t + "queue", n])
				})
			})
		}
	}), Ee.fn.extend({
		queue: function(e, t) {
			var n = 2;
			return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ee.queue(this[0], e) : void 0 === t ? this : this.each(function() {
				var n = Ee.queue(this, e, t);
				Ee._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ee.dequeue(this, e)
			})
		},
		dequeue: function(e) {
			return this.each(function() {
				Ee.dequeue(this, e)
			})
		},
		clearQueue: function(e) {
			return this.queue(e || "fx", [])
		},
		promise: function(e, t) {
			var n, r = 1,
				i = Ee.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--r || i.resolveWith(o, [o])
				};
			for("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) n = $e.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
			return s(), i.promise(t)
		}
	});
	var Xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		Ve = new RegExp("^(?:([+-])=|)(" + Xe + ")([a-z%]*)$", "i"),
		Ge = ["Top", "Right", "Bottom", "Left"],
		Ye = we.documentElement,
		Qe = function(e) {
			return Ee.contains(e.ownerDocument, e)
		},
		Je = {
			composed: !0
		};
	Ye.getRootNode && (Qe = function(e) {
		return Ee.contains(e.ownerDocument, e) || e.getRootNode(Je) === e.ownerDocument
	});
	var Ke = function(e, t) {
			return e = t || e, "none" === e.style.display || "" === e.style.display && Qe(e) && "none" === Ee.css(e, "display")
		},
		Ze = {};
	Ee.fn.extend({
		show: function() {
			return b(this, !0)
		},
		hide: function() {
			return b(this)
		},
		toggle: function(e) {
			return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
				Ke(this) ? Ee(this).show() : Ee(this).hide()
			})
		}
	});
	var et = /^(?:checkbox|radio)$/i,
		tt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
		nt = /^$|^module$|\/(?:java|ecma)script/i;
	! function() {
		var e = we.createDocumentFragment(),
			t = e.appendChild(we.createElement("div")),
			n = we.createElement("input");
		n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ye.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", ye.option = !!t.lastChild
	}();
	var rt = {
		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
		_default: [0, "", ""]
	};
	rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td, ye.option || (rt.optgroup = rt.option = [1, "<select multiple='multiple'>", "</select>"]);
	var it = /<|&#?\w+;/,
		ot = /^([^.]*)(?:\.(.+)|)/;
	Ee.event = {
		global: {},
		add: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, m = $e.get(e);
			if(Be(e))
				for(n.handler && (o = n, n = o.handler, i = o.selector), i && Ee.find.matchesSelector(Ye, i), n.guid || (n.guid = Ee.guid++), (u = m.events) || (u = m.events = Object.create(null)), (a = m.handle) || (a = m.handle = function(t) {
						return "undefined" != typeof Ee && Ee.event.triggered !== t.type ? Ee.event.dispatch.apply(e, arguments) : void 0
					}), t = (t || "").match(Pe) || [""], l = t.length; l--;) s = ot.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d && (f = Ee.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = Ee.event.special[d] || {}, c = Ee.extend({
					type: d,
					origType: g,
					data: r,
					handler: n,
					guid: n.guid,
					selector: i,
					needsContext: i && Ee.expr.match.needsContext.test(i),
					namespace: h.join(".")
				}, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(e, r, h, a) !== !1 || e.addEventListener && e.addEventListener(d, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), Ee.event.global[d] = !0)
		},
		remove: function(e, t, n, r, i) {
			var o, a, s, u, l, c, f, p, d, h, g, m = $e.hasData(e) && $e.get(e);
			if(m && (u = m.events)) {
				for(t = (t || "").match(Pe) || [""], l = t.length; l--;)
					if(s = ot.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
						for(f = Ee.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
						a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || Ee.removeEvent(e, d, m.handle), delete u[d])
					} else
						for(d in u) Ee.event.remove(e, d + t[l], n, r, !0);
				Ee.isEmptyObject(u) && $e.remove(e, "handle events")
			}
		},
		dispatch: function(e) {
			var t, n, r, i, o, a, s = new Array(arguments.length),
				u = Ee.event.fix(e),
				l = ($e.get(this, "events") || Object.create(null))[u.type] || [],
				c = Ee.event.special[u.type] || {};
			for(s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
			if(u.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, u) !== !1) {
				for(a = Ee.event.handlers.call(this, u, l), t = 0;
					(i = a[t++]) && !u.isPropagationStopped();)
					for(u.currentTarget = i.elem, n = 0;
						(o = i.handlers[n++]) && !u.isImmediatePropagationStopped();)(!u.rnamespace || o.namespace === !1 || u.rnamespace.test(o.namespace)) && (u.handleObj = o, u.data = o.data, r = ((Ee.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s), void 0 !== r && (u.result = r) === !1 && (u.preventDefault(), u.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, u), u.result
			}
		},
		handlers: function(e, t) {
			var n, r, i, o, a, s = [],
				u = t.delegateCount,
				l = e.target;
			if(u && l.nodeType && !("click" === e.type && e.button >= 1))
				for(; l !== this; l = l.parentNode || this)
					if(1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
						for(o = [], a = {}, n = 0; u > n; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? Ee(i, this).index(l) > -1 : Ee.find(i, this, null, [l]).length), a[i] && o.push(r);
						o.length && s.push({
							elem: l,
							handlers: o
						})
					}
			return l = this, u < t.length && s.push({
				elem: l,
				handlers: t.slice(u)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(Ee.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: xe(t) ? function() {
					return this.originalEvent ? t(this.originalEvent) : void 0
				} : function() {
					return this.originalEvent ? this.originalEvent[e] : void 0
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(e) {
			return e[Ee.expando] ? e : new Ee.Event(e)
		},
		special: {
			load: {
				noBubble: !0
			},
			click: {
				setup: function(e) {
					var t = this || e;
					return et.test(t.type) && t.click && o(t, "input") && j(t, "click", E), !1
				},
				trigger: function(e) {
					var t = this || e;
					return et.test(t.type) && t.click && o(t, "input") && j(t, "click"), !0
				},
				_default: function(e) {
					var t = e.target;
					return et.test(t.type) && t.click && o(t, "input") && $e.get(t, "click") || o(t, "a")
				}
			},
			beforeunload: {
				postDispatch: function(e) {
					void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
				}
			}
		}
	}, Ee.removeEvent = function(e, t, n) {
		e.removeEventListener && e.removeEventListener(t, n)
	}, Ee.Event = function(e, t) {
		return this instanceof Ee.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? E : S, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ee.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), void(this[Ee.expando] = !0)) : new Ee.Event(e, t)
	}, Ee.Event.prototype = {
		constructor: Ee.Event,
		isDefaultPrevented: S,
		isPropagationStopped: S,
		isImmediatePropagationStopped: S,
		isSimulated: !1,
		preventDefault: function() {
			var e = this.originalEvent;
			this.isDefaultPrevented = E, e && !this.isSimulated && e.preventDefault()
		},
		stopPropagation: function() {
			var e = this.originalEvent;
			this.isPropagationStopped = E, e && !this.isSimulated && e.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
			this.isImmediatePropagationStopped = E, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
		}
	}, Ee.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		"char": !0,
		code: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: !0
	}, Ee.event.addProp), Ee.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		Ee.event.special[e] = {
			setup: function() {
				return j(this, e, k), !1
			},
			trigger: function() {
				return j(this, e), !0
			},
			_default: function() {
				return !0
			},
			delegateType: t
		}
	}), Ee.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(e, t) {
		Ee.event.special[e] = {
			delegateType: t,
			bindType: t,
			handle: function(e) {
				var n, r = this,
					i = e.relatedTarget,
					o = e.handleObj;
				return(!i || i !== r && !Ee.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
			}
		}
	}), Ee.fn.extend({
		on: function(e, t, n, r) {
			return N(this, e, t, n, r)
		},
		one: function(e, t, n, r) {
			return N(this, e, t, n, r, 1)
		},
		off: function(e, t, n) {
			var r, i;
			if(e && e.preventDefault && e.handleObj) return r = e.handleObj, Ee(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
			if("object" == typeof e) {
				for(i in e) this.off(i, t, e[i]);
				return this
			}
			return(t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = S), this.each(function() {
				Ee.event.remove(this, e, n, t)
			})
		}
	});
	var at = /<script|<style|<link/i,
		st = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	Ee.extend({
		htmlPrefilter: function(e) {
			return e
		},
		clone: function(e, t, n) {
			var r, i, o, a, s = e.cloneNode(!0),
				u = Qe(e);
			if(!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ee.isXMLDoc(e)))
				for(a = w(s), o = w(e), r = 0, i = o.length; i > r; r++) O(o[r], a[r]);
			if(t)
				if(n)
					for(o = o || w(e), a = a || w(s), r = 0, i = o.length; i > r; r++) H(o[r], a[r]);
				else H(e, s);
			return a = w(s, "script"), a.length > 0 && T(a, !u && w(e, "script")), s
		},
		cleanData: function(e) {
			for(var t, n, r, i = Ee.event.special, o = 0; void 0 !== (n = e[o]); o++)
				if(Be(n)) {
					if(t = n[$e.expando]) {
						if(t.events)
							for(r in t.events) i[r] ? Ee.event.remove(n, r) : Ee.removeEvent(n, r, t.handle);
						n[$e.expando] = void 0
					}
					n[_e.expando] && (n[_e.expando] = void 0)
				}
		}
	}), Ee.fn.extend({
		detach: function(e) {
			return R(this, e, !0)
		},
		remove: function(e) {
			return R(this, e)
		},
		text: function(e) {
			return Ie(this, function(e) {
				return void 0 === e ? Ee.text(this) : this.empty().each(function() {
					(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
				})
			}, null, e, arguments.length)
		},
		append: function() {
			return P(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = D(this, e);
					t.appendChild(e)
				}
			})
		},
		prepend: function() {
			return P(this, arguments, function(e) {
				if(1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var t = D(this, e);
					t.insertBefore(e, t.firstChild)
				}
			})
		},
		before: function() {
			return P(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this)
			})
		},
		after: function() {
			return P(this, arguments, function(e) {
				this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
			})
		},
		empty: function() {
			for(var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ee.cleanData(w(e, !1)), e.textContent = "");
			return this
		},
		clone: function(e, t) {
			return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
				return Ee.clone(this, e, t)
			})
		},
		html: function(e) {
			return Ie(this, function(e) {
				var t = this[0] || {},
					n = 0,
					r = this.length;
				if(void 0 === e && 1 === t.nodeType) return t.innerHTML;
				if("string" == typeof e && !at.test(e) && !rt[(tt.exec(e) || ["", ""])[1].toLowerCase()]) {
					e = Ee.htmlPrefilter(e);
					try {
						for(; r > n; n++) t = this[n] || {}, 1 === t.nodeType && (Ee.cleanData(w(t, !1)), t.innerHTML = e);
						t = 0
					} catch(i) {}
				}
				t && this.empty().append(e)
			}, null, e, arguments.length)
		},
		replaceWith: function() {
			var e = [];
			return P(this, arguments, function(t) {
				var n = this.parentNode;
				Ee.inArray(this, e) < 0 && (Ee.cleanData(w(this)), n && n.replaceChild(t, this))
			}, e)
		}
	}), Ee.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(e, t) {
		Ee.fn[e] = function(e) {
			for(var n, r = [], i = Ee(e), o = i.length - 1, a = 0; o >= a; a++) n = a === o ? this : this.clone(!0), Ee(i[a])[t](n), fe.apply(r, n.get());
			return this.pushStack(r)
		}
	});
	var lt = new RegExp("^(" + Xe + ")(?!px)[a-z%]+$", "i"),
		ct = function(t) {
			var n = t.ownerDocument.defaultView;
			return n && n.opener || (n = e), n.getComputedStyle(t)
		},
		ft = function(e, t, n) {
			var r, i, o = {};
			for(i in t) o[i] = e.style[i], e.style[i] = t[i];
			r = n.call(e);
			for(i in t) e.style[i] = o[i];
			return r
		},
		pt = new RegExp(Ge.join("|"), "i");
	! function() {
		function t() {
			if(c) {
				l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Ye.appendChild(l).appendChild(c);
				var t = e.getComputedStyle(c);
				r = "1%" !== t.top, u = 12 === n(t.marginLeft), c.style.right = "60%", a = 36 === n(t.right), i = 36 === n(t.width), c.style.position = "absolute", o = 12 === n(c.offsetWidth / 3), Ye.removeChild(l), c = null
			}
		}

		function n(e) {
			return Math.round(parseFloat(e))
		}
		var r, i, o, a, s, u, l = we.createElement("div"),
			c = we.createElement("div");
		c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === c.style.backgroundClip, Ee.extend(ye, {
			boxSizingReliable: function() {
				return t(), i
			},
			pixelBoxStyles: function() {
				return t(), a
			},
			pixelPosition: function() {
				return t(), r
			},
			reliableMarginLeft: function() {
				return t(), u
			},
			scrollboxSize: function() {
				return t(), o
			},
			reliableTrDimensions: function() {
				var t, n, r, i;
				return null == s && (t = we.createElement("table"), n = we.createElement("tr"), r = we.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", n.style.cssText = "border:1px solid", n.style.height = "1px", r.style.height = "9px", r.style.display = "block", Ye.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), s = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === n.offsetHeight, Ye.removeChild(t)), s
			}
		}))
	}();
	var dt = ["Webkit", "Moz", "ms"],
		ht = we.createElement("div").style,
		gt = {},
		mt = /^(none|table(?!-c[ea]).+)/,
		vt = /^--/,
		yt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		xt = {
			letterSpacing: "0",
			fontWeight: "400"
		};
	Ee.extend({
			cssHooks: {
				opacity: {
					get: function(e, t) {
						if(t) {
							var n = M(e, "opacity");
							return "" === n ? "1" : n
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				gridArea: !0,
				gridColumn: !0,
				gridColumnEnd: !0,
				gridColumnStart: !0,
				gridRow: !0,
				gridRowEnd: !0,
				gridRowStart: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {},
			style: function(e, t, n, r) {
				if(e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
					var i, o, a, s = h(t),
						u = vt.test(t),
						l = e.style;
					return u || (t = F(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t] : (o = typeof n, "string" === o && (i = Ve.exec(n)) && i[1] && (n = y(e, t, i), o = "number"), null != n && n === n && ("number" !== o || u || (n += i && i[3] || (Ee.cssNumber[s] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n)), void 0)
				}
			},
			css: function(e, t, n, r) {
				var i, o, a, s = h(t),
					u = vt.test(t);
				return u || (t = F(s)), a = Ee.cssHooks[t] || Ee.cssHooks[s], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = M(e, t, r)), "normal" === i && t in xt && (i = xt[t]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
			}
		}), Ee.each(["height", "width"], function(e, t) {
			Ee.cssHooks[t] = {
				get: function(e, n, r) {
					return n ? !mt.test(Ee.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? _(e, t, r) : ft(e, yt, function() {
						return _(e, t, r)
					}) : void 0
				},
				set: function(e, n, r) {
					var i, o = ct(e),
						a = !ye.scrollboxSize() && "absolute" === o.position,
						s = a || r,
						u = s && "border-box" === Ee.css(e, "boxSizing", !1, o),
						l = r ? $(e, t, r, u, o) : 0;
					return u && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - $(e, t, "border", !1, o) - .5)), l && (i = Ve.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ee.css(e, t)), B(e, n, l)
				}
			}
		}), Ee.cssHooks.marginLeft = I(ye.reliableMarginLeft, function(e, t) {
			return t ? (parseFloat(M(e, "marginLeft")) || e.getBoundingClientRect().left - ft(e, {
				marginLeft: 0
			}, function() {
				return e.getBoundingClientRect().left
			})) + "px" : void 0
		}), Ee.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function(e, t) {
			Ee.cssHooks[e + t] = {
				expand: function(n) {
					for(var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Ge[r] + t] = o[r] || o[r - 2] || o[0];
					return i
				}
			}, "margin" !== e && (Ee.cssHooks[e + t].set = B)
		}), Ee.fn.extend({
			css: function(e, t) {
				return Ie(this, function(e, t, n) {
					var r, i, o = {},
						a = 0;
					if(Array.isArray(t)) {
						for(r = ct(e), i = t.length; i > a; a++) o[t[a]] = Ee.css(e, t[a], !1, r);
						return o
					}
					return void 0 !== n ? Ee.style(e, t, n) : Ee.css(e, t)
				}, e, t, arguments.length > 1)
			}
		}), Ee.Tween = z, z.prototype = {
			constructor: z,
			init: function(e, t, n, r, i, o) {
				this.elem = e, this.prop = n, this.easing = i || Ee.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ee.cssNumber[n] ? "" : "px")
			},
			cur: function() {
				var e = z.propHooks[this.prop];
				return e && e.get ? e.get(this) : z.propHooks._default.get(this)
			},
			run: function(e) {
				var t, n = z.propHooks[this.prop];
				return this.options.duration ? this.pos = t = Ee.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
			}
		}, z.prototype.init.prototype = z.prototype,
		z.propHooks = {
			_default: {
				get: function(e) {
					var t;
					return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ee.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
				},
				set: function(e) {
					Ee.fx.step[e.prop] ? Ee.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Ee.cssHooks[e.prop] && null == e.elem.style[F(e.prop)] ? e.elem[e.prop] = e.now : Ee.style(e.elem, e.prop, e.now + e.unit)
				}
			}
		}, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
			set: function(e) {
				e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
			}
		}, Ee.easing = {
			linear: function(e) {
				return e
			},
			swing: function(e) {
				return .5 - Math.cos(e * Math.PI) / 2
			},
			_default: "swing"
		}, Ee.fx = z.prototype.init, Ee.fx.step = {};
	var bt, wt, Tt = /^(?:toggle|show|hide)$/,
		Ct = /queueHooks$/;
	Ee.Animation = Ee.extend(J, {
			tweeners: {
				"*": [function(e, t) {
					var n = this.createTween(e, t);
					return y(n.elem, e, Ve.exec(t), n), n
				}]
			},
			tweener: function(e, t) {
				xe(e) ? (t = e, e = ["*"]) : e = e.match(Pe);
				for(var n, r = 0, i = e.length; i > r; r++) n = e[r], J.tweeners[n] = J.tweeners[n] || [], J.tweeners[n].unshift(t)
			},
			prefilters: [Y],
			prefilter: function(e, t) {
				t ? J.prefilters.unshift(e) : J.prefilters.push(e)
			}
		}), Ee.speed = function(e, t, n) {
			var r = e && "object" == typeof e ? Ee.extend({}, e) : {
				complete: n || !n && t || xe(e) && e,
				duration: e,
				easing: n && t || t && !xe(t) && t
			};
			return Ee.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ee.fx.speeds ? r.duration = Ee.fx.speeds[r.duration] : r.duration = Ee.fx.speeds._default), (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
				xe(r.old) && r.old.call(this), r.queue && Ee.dequeue(this, r.queue)
			}, r
		}, Ee.fn.extend({
			fadeTo: function(e, t, n, r) {
				return this.filter(Ke).css("opacity", 0).show().end().animate({
					opacity: t
				}, e, n, r)
			},
			animate: function(e, t, n, r) {
				var i = Ee.isEmptyObject(e),
					o = Ee.speed(t, n, r),
					a = function() {
						var t = J(this, Ee.extend({}, e), o);
						(i || $e.get(this, "finish")) && t.stop(!0)
					};
				return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
			},
			stop: function(e, t, n) {
				var r = function(e) {
					var t = e.stop;
					delete e.stop, t(n)
				};
				return "string" != typeof e && (n = t, t = e, e = void 0), t && this.queue(e || "fx", []), this.each(function() {
					var t = !0,
						i = null != e && e + "queueHooks",
						o = Ee.timers,
						a = $e.get(this);
					if(i) a[i] && a[i].stop && r(a[i]);
					else
						for(i in a) a[i] && a[i].stop && Ct.test(i) && r(a[i]);
					for(i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
					(t || !n) && Ee.dequeue(this, e)
				})
			},
			finish: function(e) {
				return e !== !1 && (e = e || "fx"), this.each(function() {
					var t, n = $e.get(this),
						r = n[e + "queue"],
						i = n[e + "queueHooks"],
						o = Ee.timers,
						a = r ? r.length : 0;
					for(n.finish = !0, Ee.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
					for(t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
					delete n.finish
				})
			}
		}), Ee.each(["toggle", "show", "hide"], function(e, t) {
			var n = Ee.fn[t];
			Ee.fn[t] = function(e, r, i) {
				return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(V(t, !0), e, r, i)
			}
		}), Ee.each({
			slideDown: V("show"),
			slideUp: V("hide"),
			slideToggle: V("toggle"),
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
			Ee.fn[e] = function(e, n, r) {
				return this.animate(t, e, n, r)
			}
		}), Ee.timers = [], Ee.fx.tick = function() {
			var e, t = 0,
				n = Ee.timers;
			for(bt = Date.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
			n.length || Ee.fx.stop(), bt = void 0
		}, Ee.fx.timer = function(e) {
			Ee.timers.push(e), Ee.fx.start()
		}, Ee.fx.interval = 13, Ee.fx.start = function() {
			wt || (wt = !0, U())
		}, Ee.fx.stop = function() {
			wt = null
		}, Ee.fx.speeds = {
			slow: 600,
			fast: 200,
			_default: 400
		}, Ee.fn.delay = function(t, n) {
			return t = Ee.fx ? Ee.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
				var i = e.setTimeout(n, t);
				r.stop = function() {
					e.clearTimeout(i)
				}
			})
		},
		function() {
			var e = we.createElement("input"),
				t = we.createElement("select"),
				n = t.appendChild(we.createElement("option"));
			e.type = "checkbox", ye.checkOn = "" !== e.value, ye.optSelected = n.selected, e = we.createElement("input"), e.value = "t", e.type = "radio", ye.radioValue = "t" === e.value
		}();
	var Et, St = Ee.expr.attrHandle;
	Ee.fn.extend({
		attr: function(e, t) {
			return Ie(this, Ee.attr, e, t, arguments.length > 1)
		},
		removeAttr: function(e) {
			return this.each(function() {
				Ee.removeAttr(this, e)
			})
		}
	}), Ee.extend({
		attr: function(e, t, n) {
			var r, i, o = e.nodeType;
			if(3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Ee.prop(e, t, n) : (1 === o && Ee.isXMLDoc(e) || (i = Ee.attrHooks[t.toLowerCase()] || (Ee.expr.match.bool.test(t) ? Et : void 0)), void 0 !== n ? null === n ? void Ee.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Ee.find.attr(e, t), null == r ? void 0 : r))
		},
		attrHooks: {
			type: {
				set: function(e, t) {
					if(!ye.radioValue && "radio" === t && o(e, "input")) {
						var n = e.value;
						return e.setAttribute("type", t), n && (e.value = n), t
					}
				}
			}
		},
		removeAttr: function(e, t) {
			var n, r = 0,
				i = t && t.match(Pe);
			if(i && 1 === e.nodeType)
				for(; n = i[r++];) e.removeAttribute(n)
		}
	}), Et = {
		set: function(e, t, n) {
			return t === !1 ? Ee.removeAttr(e, n) : e.setAttribute(n, n), n
		}
	}, Ee.each(Ee.expr.match.bool.source.match(/\w+/g), function(e, t) {
		var n = St[t] || Ee.find.attr;
		St[t] = function(e, t, r) {
			var i, o, a = t.toLowerCase();
			return r || (o = St[a], St[a] = i, i = null != n(e, t, r) ? a : null, St[a] = o), i
		}
	});
	var kt = /^(?:input|select|textarea|button)$/i,
		At = /^(?:a|area)$/i;
	Ee.fn.extend({
		prop: function(e, t) {
			return Ie(this, Ee.prop, e, t, arguments.length > 1)
		},
		removeProp: function(e) {
			return this.each(function() {
				delete this[Ee.propFix[e] || e]
			})
		}
	}), Ee.extend({
		prop: function(e, t, n) {
			var r, i, o = e.nodeType;
			if(3 !== o && 8 !== o && 2 !== o) return 1 === o && Ee.isXMLDoc(e) || (t = Ee.propFix[t] || t, i = Ee.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
		},
		propHooks: {
			tabIndex: {
				get: function(e) {
					var t = Ee.find.attr(e, "tabindex");
					return t ? parseInt(t, 10) : kt.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
				}
			}
		},
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	}), ye.optSelected || (Ee.propHooks.selected = {
		get: function(e) {
			var t = e.parentNode;
			return t && t.parentNode && t.parentNode.selectedIndex, null
		},
		set: function(e) {
			var t = e.parentNode;
			t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
		}
	}), Ee.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		Ee.propFix[this.toLowerCase()] = this
	}), Ee.fn.extend({
		addClass: function(e) {
			var t, n, r, i, o, a, s, u = 0;
			if(xe(e)) return this.each(function(t) {
				Ee(this).addClass(e.call(this, t, Z(this)))
			});
			if(t = ee(e), t.length)
				for(; n = this[u++];)
					if(i = Z(n), r = 1 === n.nodeType && " " + K(i) + " ") {
						for(a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
						s = K(r), i !== s && n.setAttribute("class", s)
					}
			return this
		},
		removeClass: function(e) {
			var t, n, r, i, o, a, s, u = 0;
			if(xe(e)) return this.each(function(t) {
				Ee(this).removeClass(e.call(this, t, Z(this)))
			});
			if(!arguments.length) return this.attr("class", "");
			if(t = ee(e), t.length)
				for(; n = this[u++];)
					if(i = Z(n), r = 1 === n.nodeType && " " + K(i) + " ") {
						for(a = 0; o = t[a++];)
							for(; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
						s = K(r), i !== s && n.setAttribute("class", s)
					}
			return this
		},
		toggleClass: function(e, t) {
			var n = typeof e,
				r = "string" === n || Array.isArray(e);
			return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : xe(e) ? this.each(function(n) {
				Ee(this).toggleClass(e.call(this, n, Z(this), t), t)
			}) : this.each(function() {
				var t, i, o, a;
				if(r)
					for(i = 0, o = Ee(this), a = ee(e); t = a[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
				else(void 0 === e || "boolean" === n) && (t = Z(this), t && $e.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "" : $e.get(this, "__className__") || ""))
			})
		},
		hasClass: function(e) {
			var t, n, r = 0;
			for(t = " " + e + " "; n = this[r++];)
				if(1 === n.nodeType && (" " + K(Z(n)) + " ").indexOf(t) > -1) return !0;
			return !1
		}
	});
	var Nt = /\r/g;
	Ee.fn.extend({
		val: function(e) {
			var t, n, r, i = this[0]; {
				if(arguments.length) return r = xe(e), this.each(function(n) {
					var i;
					1 === this.nodeType && (i = r ? e.call(this, n, Ee(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ee.map(i, function(e) {
						return null == e ? "" : e + ""
					})), t = Ee.valHooks[this.type] || Ee.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
				});
				if(i) return t = Ee.valHooks[i.type] || Ee.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)
			}
		}
	}), Ee.extend({
		valHooks: {
			option: {
				get: function(e) {
					var t = Ee.find.attr(e, "value");
					return null != t ? t : K(Ee.text(e))
				}
			},
			select: {
				get: function(e) {
					var t, n, r, i = e.options,
						a = e.selectedIndex,
						s = "select-one" === e.type,
						u = s ? null : [],
						l = s ? a + 1 : i.length;
					for(r = 0 > a ? l : s ? a : 0; l > r; r++)
						if(n = i[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
							if(t = Ee(n).val(), s) return t;
							u.push(t)
						}
					return u
				},
				set: function(e, t) {
					for(var n, r, i = e.options, o = Ee.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = Ee.inArray(Ee.valHooks.option.get(r), o) > -1) && (n = !0);
					return n || (e.selectedIndex = -1), o
				}
			}
		}
	}), Ee.each(["radio", "checkbox"], function() {
		Ee.valHooks[this] = {
			set: function(e, t) {
				return Array.isArray(t) ? e.checked = Ee.inArray(Ee(e).val(), t) > -1 : void 0
			}
		}, ye.checkOn || (Ee.valHooks[this].get = function(e) {
			return null === e.getAttribute("value") ? "on" : e.value
		})
	}), ye.focusin = "onfocusin" in e;
	var jt = /^(?:focusinfocus|focusoutblur)$/,
		Dt = function(e) {
			e.stopPropagation()
		};
	Ee.extend(Ee.event, {
		trigger: function(t, n, r, i) {
			var o, a, s, u, l, c, f, p, d = [r || we],
				h = ge.call(t, "type") ? t.type : t,
				g = ge.call(t, "namespace") ? t.namespace.split(".") : [];
			if(a = p = s = r = r || we, 3 !== r.nodeType && 8 !== r.nodeType && !jt.test(h + Ee.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), l = h.indexOf(":") < 0 && "on" + h, t = t[Ee.expando] ? t : new Ee.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : Ee.makeArray(n, [t]), f = Ee.event.special[h] || {}, i || !f.trigger || f.trigger.apply(r, n) !== !1)) {
				if(!i && !f.noBubble && !be(r)) {
					for(u = f.delegateType || h, jt.test(u + h) || (a = a.parentNode); a; a = a.parentNode) d.push(a), s = a;
					s === (r.ownerDocument || we) && d.push(s.defaultView || s.parentWindow || e)
				}
				for(o = 0;
					(a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? u : f.bindType || h, c = ($e.get(a, "events") || Object.create(null))[t.type] && $e.get(a, "handle"), c && c.apply(a, n), c = l && a[l], c && c.apply && Be(a) && (t.result = c.apply(a, n), t.result === !1 && t.preventDefault());
				return t.type = h, i || t.isDefaultPrevented() || f._default && f._default.apply(d.pop(), n) !== !1 || !Be(r) || l && xe(r[h]) && !be(r) && (s = r[l], s && (r[l] = null), Ee.event.triggered = h, t.isPropagationStopped() && p.addEventListener(h, Dt), r[h](), t.isPropagationStopped() && p.removeEventListener(h, Dt), Ee.event.triggered = void 0, s && (r[l] = s)), t.result
			}
		},
		simulate: function(e, t, n) {
			var r = Ee.extend(new Ee.Event, n, {
				type: e,
				isSimulated: !0
			});
			Ee.event.trigger(r, null, t)
		}
	}), Ee.fn.extend({
		trigger: function(e, t) {
			return this.each(function() {
				Ee.event.trigger(e, t, this)
			})
		},
		triggerHandler: function(e, t) {
			var n = this[0];
			return n ? Ee.event.trigger(e, t, n, !0) : void 0
		}
	}), ye.focusin || Ee.each({
		focus: "focusin",
		blur: "focusout"
	}, function(e, t) {
		var n = function(e) {
			Ee.event.simulate(t, e.target, Ee.event.fix(e))
		};
		Ee.event.special[t] = {
			setup: function() {
				var r = this.ownerDocument || this.document || this,
					i = $e.access(r, t);
				i || r.addEventListener(e, n, !0), $e.access(r, t, (i || 0) + 1)
			},
			teardown: function() {
				var r = this.ownerDocument || this.document || this,
					i = $e.access(r, t) - 1;
				i ? $e.access(r, t, i) : (r.removeEventListener(e, n, !0), $e.remove(r, t))
			}
		}
	});
	var qt = e.location,
		Lt = {
			guid: Date.now()
		},
		Ht = /\?/;
	Ee.parseXML = function(t) {
		var n, r;
		if(!t || "string" != typeof t) return null;
		try {
			n = (new e.DOMParser).parseFromString(t, "text/xml")
		} catch(i) {}
		return r = n && n.getElementsByTagName("parsererror")[0], (!n || r) && Ee.error("Invalid XML: " + (r ? Ee.map(r.childNodes, function(e) {
			return e.textContent
		}).join("\n") : t)), n
	};
	var Ot = /\[\]$/,
		Pt = /\r?\n/g,
		Rt = /^(?:submit|button|image|reset|file)$/i,
		Mt = /^(?:input|select|textarea|keygen)/i;
	Ee.param = function(e, t) {
		var n, r = [],
			i = function(e, t) {
				var n = xe(t) ? t() : t;
				r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if(null == e) return "";
		if(Array.isArray(e) || e.jquery && !Ee.isPlainObject(e)) Ee.each(e, function() {
			i(this.name, this.value)
		});
		else
			for(n in e) te(n, e[n], t, i);
		return r.join("&")
	}, Ee.fn.extend({
		serialize: function() {
			return Ee.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var e = Ee.prop(this, "elements");
				return e ? Ee.makeArray(e) : this
			}).filter(function() {
				var e = this.type;
				return this.name && !Ee(this).is(":disabled") && Mt.test(this.nodeName) && !Rt.test(e) && (this.checked || !et.test(e))
			}).map(function(e, t) {
				var n = Ee(this).val();
				return null == n ? null : Array.isArray(n) ? Ee.map(n, function(e) {
					return {
						name: t.name,
						value: e.replace(Pt, "\r\n")
					}
				}) : {
					name: t.name,
					value: n.replace(Pt, "\r\n")
				}
			}).get()
		}
	});
	var It = /%20/g,
		Wt = /#.*$/,
		Ft = /([?&])_=[^&]*/,
		Bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		$t = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		_t = /^(?:GET|HEAD)$/,
		zt = /^\/\//,
		Ut = {},
		Xt = {},
		Vt = "*/".concat("*"),
		Gt = we.createElement("a");
	Gt.href = qt.href, Ee.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: qt.href,
			type: "GET",
			isLocal: $t.test(qt.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Vt,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": Ee.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(e, t) {
			return t ? ie(ie(e, Ee.ajaxSettings), t) : ie(Ee.ajaxSettings, e)
		},
		ajaxPrefilter: ne(Ut),
		ajaxTransport: ne(Xt),
		ajax: function(t, n) {
			function r(t, n, r, s) {
				var l, p, d, b, w, T = n;
				c || (c = !0, u && e.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, l = t >= 200 && 300 > t || 304 === t, r && (b = oe(h, C, r)), !l && Ee.inArray("script", h.dataTypes) > -1 && Ee.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), b = ae(h, b, C, l), l ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (Ee.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (Ee.etag[o] = w)), 204 === t || "HEAD" === h.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = b.state, p = b.data, d = b.error, l = !d)) : (d = T, (t || !T) && (T = "error", 0 > t && (t = 0))), C.status = t, C.statusText = (n || T) + "", l ? v.resolveWith(g, [p, T, C]) : v.rejectWith(g, [C, T, d]), C.statusCode(x), x = void 0, f && m.trigger(l ? "ajaxSuccess" : "ajaxError", [C, h, l ? p : d]), y.fireWith(g, [C, T]), f && (m.trigger("ajaxComplete", [C, h]), --Ee.active || Ee.event.trigger("ajaxStop")))
			}
			"object" == typeof t && (n = t, t = void 0), n = n || {};
			var i, o, a, s, u, l, c, f, p, d, h = Ee.ajaxSetup({}, n),
				g = h.context || h,
				m = h.context && (g.nodeType || g.jquery) ? Ee(g) : Ee.event,
				v = Ee.Deferred(),
				y = Ee.Callbacks("once memory"),
				x = h.statusCode || {},
				b = {},
				w = {},
				T = "canceled",
				C = {
					readyState: 0,
					getResponseHeader: function(e) {
						var t;
						if(c) {
							if(!s)
								for(s = {}; t = Bt.exec(a);) s[t[1].toLowerCase() + " "] = (s[t[1].toLowerCase() + " "] || []).concat(t[2]);
							t = s[e.toLowerCase() + " "]
						}
						return null == t ? null : t.join(", ")
					},
					getAllResponseHeaders: function() {
						return c ? a : null
					},
					setRequestHeader: function(e, t) {
						return null == c && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, b[e] = t), this
					},
					overrideMimeType: function(e) {
						return null == c && (h.mimeType = e), this
					},
					statusCode: function(e) {
						var t;
						if(e)
							if(c) C.always(e[C.status]);
							else
								for(t in e) x[t] = [x[t], e[t]];
						return this
					},
					abort: function(e) {
						var t = e || T;
						return i && i.abort(t), r(0, t), this
					}
				};
			if(v.promise(C), h.url = ((t || h.url || qt.href) + "").replace(zt, qt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Pe) || [""], null == h.crossDomain) {
				l = we.createElement("a");
				try {
					l.href = h.url, l.href = l.href, h.crossDomain = Gt.protocol + "//" + Gt.host != l.protocol + "//" + l.host
				} catch(E) {
					h.crossDomain = !0
				}
			}
			if(h.data && h.processData && "string" != typeof h.data && (h.data = Ee.param(h.data, h.traditional)), re(Ut, h, n, C), c) return C;
			f = Ee.event && h.global, f && 0 === Ee.active++ && Ee.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !_t.test(h.type), o = h.url.replace(Wt, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(It, "+")) : (d = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ht.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Ft, "$1"), d = (Ht.test(o) ? "&" : "?") + "_=" + Lt.guid++ + d), h.url = o + d), h.ifModified && (Ee.lastModified[o] && C.setRequestHeader("If-Modified-Since", Ee.lastModified[o]), Ee.etag[o] && C.setRequestHeader("If-None-Match", Ee.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : h.accepts["*"]);
			for(p in h.headers) C.setRequestHeader(p, h.headers[p]);
			if(h.beforeSend && (h.beforeSend.call(g, C, h) === !1 || c)) return C.abort();
			if(T = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = re(Xt, h, n, C)) {
				if(C.readyState = 1, f && m.trigger("ajaxSend", [C, h]), c) return C;
				h.async && h.timeout > 0 && (u = e.setTimeout(function() {
					C.abort("timeout")
				}, h.timeout));
				try {
					c = !1, i.send(b, r)
				} catch(E) {
					if(c) throw E;
					r(-1, E)
				}
			} else r(-1, "No Transport");
			return C
		},
		getJSON: function(e, t, n) {
			return Ee.get(e, t, n, "json")
		},
		getScript: function(e, t) {
			return Ee.get(e, void 0, t, "script")
		}
	}), Ee.each(["get", "post"], function(e, t) {
		Ee[t] = function(e, n, r, i) {
			return xe(n) && (i = i || r, r = n, n = void 0), Ee.ajax(Ee.extend({
				url: e,
				type: t,
				dataType: i,
				data: n,
				success: r
			}, Ee.isPlainObject(e) && e))
		}
	}), Ee.ajaxPrefilter(function(e) {
		var t;
		for(t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
	}), Ee._evalUrl = function(e, t, n) {
		return Ee.ajax({
			url: e,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			converters: {
				"text script": function() {}
			},
			dataFilter: function(e) {
				Ee.globalEval(e, t, n)
			}
		})
	}, Ee.fn.extend({
		wrapAll: function(e) {
			var t;
			return this[0] && (xe(e) && (e = e.call(this[0])), t = Ee(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for(var e = this; e.firstElementChild;) e = e.firstElementChild;
				return e
			}).append(this)), this
		},
		wrapInner: function(e) {
			return xe(e) ? this.each(function(t) {
				Ee(this).wrapInner(e.call(this, t))
			}) : this.each(function() {
				var t = Ee(this),
					n = t.contents();
				n.length ? n.wrapAll(e) : t.append(e)
			})
		},
		wrap: function(e) {
			var t = xe(e);
			return this.each(function(n) {
				Ee(this).wrapAll(t ? e.call(this, n) : e)
			})
		},
		unwrap: function(e) {
			return this.parent(e).not("body").each(function() {
				Ee(this).replaceWith(this.childNodes)
			}), this
		}
	}), Ee.expr.pseudos.hidden = function(e) {
		return !Ee.expr.pseudos.visible(e)
	}, Ee.expr.pseudos.visible = function(e) {
		return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
	}, Ee.ajaxSettings.xhr = function() {
		try {
			return new e.XMLHttpRequest
		} catch(t) {}
	};
	var Yt = {
			0: 200,
			1223: 204
		},
		Qt = Ee.ajaxSettings.xhr();
	ye.cors = !!Qt && "withCredentials" in Qt, ye.ajax = Qt = !!Qt, Ee.ajaxTransport(function(t) {
		var n, r;
		return ye.cors || Qt && !t.crossDomain ? {
			send: function(i, o) {
				var a, s = t.xhr();
				if(s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
					for(a in t.xhrFields) s[a] = t.xhrFields[a];
				t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
				for(a in i) s.setRequestHeader(a, i[a]);
				n = function(e) {
					return function() {
						n && (n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(Yt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
							binary: s.response
						} : {
							text: s.responseText
						}, s.getAllResponseHeaders()))
					}
				}, s.onload = n(), r = s.onerror = s.ontimeout = n("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function() {
					4 === s.readyState && e.setTimeout(function() {
						n && r()
					})
				}, n = n("abort");
				try {
					s.send(t.hasContent && t.data || null)
				} catch(u) {
					if(n) throw u
				}
			},
			abort: function() {
				n && n()
			}
		} : void 0
	}), Ee.ajaxPrefilter(function(e) {
		e.crossDomain && (e.contents.script = !1)
	}), Ee.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(e) {
				return Ee.globalEval(e), e
			}
		}
	}), Ee.ajaxPrefilter("script", function(e) {
		void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
	}), Ee.ajaxTransport("script", function(e) {
		if(e.crossDomain || e.scriptAttrs) {
			var t, n;
			return {
				send: function(r, i) {
					t = Ee("<script>").attr(e.scriptAttrs || {}).prop({
						charset: e.scriptCharset,
						src: e.url
					}).on("load error", n = function(e) {
						t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
					}), we.head.appendChild(t[0])
				},
				abort: function() {
					n && n()
				}
			}
		}
	});
	var Jt = [],
		Kt = /(=)\?(?=&|$)|\?\?/;
	Ee.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var e = Jt.pop() || Ee.expando + "_" + Lt.guid++;
			return this[e] = !0, e
		}
	}), Ee.ajaxPrefilter("json jsonp", function(t, n, r) {
		var i, o, a, s = t.jsonp !== !1 && (Kt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = xe(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Kt, "$1" + i) : t.jsonp !== !1 && (t.url += (Ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return a || Ee.error(i + " was not called"), a[0]
		}, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
			a = arguments
		}, r.always(function() {
			void 0 === o ? Ee(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Jt.push(i)), a && xe(o) && o(a[0]), a = o = void 0
		}), "script") : void 0
	}), ye.createHTMLDocument = function() {
		var e = we.implementation.createHTMLDocument("").body;
		return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
	}(), Ee.parseHTML = function(e, t, n) {
		if("string" != typeof e) return [];
		"boolean" == typeof t && (n = t, t = !1);
		var r, i, o;
		return t || (ye.createHTMLDocument ? (t = we.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = we.location.href, t.head.appendChild(r)) : t = we), i = je.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = C([e], t, o), o && o.length && Ee(o).remove(), Ee.merge([], i.childNodes))
	}, Ee.fn.load = function(e, t, n) {
		var r, i, o, a = this,
			s = e.indexOf(" ");
		return s > -1 && (r = K(e.slice(s)), e = e.slice(0, s)), xe(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && Ee.ajax({
			url: e,
			type: i || "GET",
			dataType: "html",
			data: t
		}).done(function(e) {
			o = arguments, a.html(r ? Ee("<div>").append(Ee.parseHTML(e)).find(r) : e)
		}).always(n && function(e, t) {
			a.each(function() {
				n.apply(this, o || [e.responseText, t, e])
			})
		}), this
	}, Ee.expr.pseudos.animated = function(e) {
		return Ee.grep(Ee.timers, function(t) {
			return e === t.elem
		}).length
	}, Ee.offset = {
		setOffset: function(e, t, n) {
			var r, i, o, a, s, u, l, c = Ee.css(e, "position"),
				f = Ee(e),
				p = {};
			"static" === c && (e.style.position = "relative"), s = f.offset(), o = Ee.css(e, "top"), u = Ee.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), xe(t) && (t = t.call(e, n, Ee.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p)
		}
	}, Ee.fn.extend({
		offset: function(e) {
			if(arguments.length) return void 0 === e ? this : this.each(function(t) {
				Ee.offset.setOffset(this, e, t)
			});
			var t, n, r = this[0];
			if(r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			}
		},
		position: function() {
			if(this[0]) {
				var e, t, n, r = this[0],
					i = {
						top: 0,
						left: 0
					};
				if("fixed" === Ee.css(r, "position")) t = r.getBoundingClientRect();
				else {
					for(t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ee.css(e, "position");) e = e.parentNode;
					e && e !== r && 1 === e.nodeType && (i = Ee(e).offset(), i.top += Ee.css(e, "borderTopWidth", !0), i.left += Ee.css(e, "borderLeftWidth", !0))
				}
				return {
					top: t.top - i.top - Ee.css(r, "marginTop", !0),
					left: t.left - i.left - Ee.css(r, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for(var e = this.offsetParent; e && "static" === Ee.css(e, "position");) e = e.offsetParent;
				return e || Ye
			})
		}
	}), Ee.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, t) {
		var n = "pageYOffset" === t;
		Ee.fn[e] = function(r) {
			return Ie(this, function(e, r, i) {
				var o;
				return be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i ? o ? o[t] : e[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i)
			}, e, r, arguments.length)
		}
	}), Ee.each(["top", "left"], function(e, t) {
		Ee.cssHooks[t] = I(ye.pixelPosition, function(e, n) {
			return n ? (n = M(e, t), lt.test(n) ? Ee(e).position()[t] + "px" : n) : void 0
		})
	}), Ee.each({
		Height: "height",
		Width: "width"
	}, function(e, t) {
		Ee.each({
			padding: "inner" + e,
			content: t,
			"": "outer" + e
		}, function(n, r) {
			Ee.fn[r] = function(i, o) {
				var a = arguments.length && (n || "boolean" != typeof i),
					s = n || (i === !0 || o === !0 ? "margin" : "border");
				return Ie(this, function(t, n, i) {
					var o;
					return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? Ee.css(t, n, s) : Ee.style(t, n, i, s)
				}, t, a ? i : void 0, a)
			}
		})
	}), Ee.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
		Ee.fn[t] = function(e) {
			return this.on(t, e)
		}
	}), Ee.fn.extend({
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
		},
		hover: function(e, t) {
			return this.mouseenter(e).mouseleave(t || e)
		}
	}), Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
		Ee.fn[t] = function(e, n) {
			return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
		}
	});
	var Zt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
	Ee.proxy = function(e, t) {
		var n, r, i;
		return "string" == typeof t && (n = e[t], t = e, e = n), xe(e) ? (r = le.call(arguments, 2), i = function() {
			return e.apply(t || this, r.concat(le.call(arguments)))
		}, i.guid = e.guid = e.guid || Ee.guid++, i) : void 0
	}, Ee.holdReady = function(e) {
		e ? Ee.readyWait++ : Ee.ready(!0)
	}, Ee.isArray = Array.isArray, Ee.parseJSON = JSON.parse, Ee.nodeName = o, Ee.isFunction = xe, Ee.isWindow = be, Ee.camelCase = h, Ee.type = r, Ee.now = Date.now, Ee.isNumeric = function(e) {
		var t = Ee.type(e);
		return("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
	}, Ee.trim = function(e) {
		return null == e ? "" : (e + "").replace(Zt, "")
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return Ee
	});
	var en = e.jQuery,
		tn = e.$;
	return Ee.noConflict = function(t) {
		return e.$ === Ee && (e.$ = tn), t && e.jQuery === Ee && (e.jQuery = en), Ee
	}, "undefined" == typeof t && (e.jQuery = e.$ = Ee), Ee
});