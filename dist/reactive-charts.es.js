import Dr, { useRef as Ie, useEffect as kt, useState as st } from "react";
import { createPortal as Le } from "react-dom";
var fe = { exports: {} }, Kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bn;
function Or() {
  if (bn) return Kt;
  bn = 1;
  var t = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function n(r, i, a) {
    var o = null;
    if (a !== void 0 && (o = "" + a), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      a = {};
      for (var s in i)
        s !== "key" && (a[s] = i[s]);
    } else a = i;
    return i = a.ref, {
      $$typeof: t,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Kt.Fragment = e, Kt.jsx = n, Kt.jsxs = n, Kt;
}
var Wt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wn;
function zr() {
  return wn || (wn = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(g) {
      if (g == null) return null;
      if (typeof g == "function")
        return g.$$typeof === v ? null : g.displayName || g.name || null;
      if (typeof g == "string") return g;
      switch (g) {
        case E:
          return "Fragment";
        case R:
          return "Profiler";
        case z:
          return "StrictMode";
        case C:
          return "Suspense";
        case j:
          return "SuspenseList";
        case B:
          return "Activity";
      }
      if (typeof g == "object")
        switch (typeof g.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), g.$$typeof) {
          case b:
            return "Portal";
          case x:
            return g.displayName || "Context";
          case M:
            return (g._context.displayName || "Context") + ".Consumer";
          case A:
            var O = g.render;
            return g = g.displayName, g || (g = O.displayName || O.name || "", g = g !== "" ? "ForwardRef(" + g + ")" : "ForwardRef"), g;
          case X:
            return O = g.displayName || null, O !== null ? O : t(g.type) || "Memo";
          case Z:
            O = g._payload, g = g._init;
            try {
              return t(g(O));
            } catch {
            }
        }
      return null;
    }
    function e(g) {
      return "" + g;
    }
    function n(g) {
      try {
        e(g);
        var O = !1;
      } catch {
        O = !0;
      }
      if (O) {
        O = console;
        var K = O.error, L = typeof Symbol == "function" && Symbol.toStringTag && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return K.call(
          O,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          L
        ), e(g);
      }
    }
    function r(g) {
      if (g === E) return "<>";
      if (typeof g == "object" && g !== null && g.$$typeof === Z)
        return "<...>";
      try {
        var O = t(g);
        return O ? "<" + O + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var g = w.A;
      return g === null ? null : g.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function o(g) {
      if (y.call(g, "key")) {
        var O = Object.getOwnPropertyDescriptor(g, "key").get;
        if (O && O.isReactWarning) return !1;
      }
      return g.key !== void 0;
    }
    function s(g, O) {
      function K() {
        k || (k = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          O
        ));
      }
      K.isReactWarning = !0, Object.defineProperty(g, "key", {
        get: K,
        configurable: !0
      });
    }
    function u() {
      var g = t(this.type);
      return $[g] || ($[g] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), g = this.props.ref, g !== void 0 ? g : null;
    }
    function l(g, O, K, L, at, rt) {
      var U = K.ref;
      return g = {
        $$typeof: m,
        type: g,
        key: O,
        props: K,
        _owner: L
      }, (U !== void 0 ? U : null) !== null ? Object.defineProperty(g, "ref", {
        enumerable: !1,
        get: u
      }) : Object.defineProperty(g, "ref", { enumerable: !1, value: null }), g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(g, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(g, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: at
      }), Object.defineProperty(g, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: rt
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    }
    function c(g, O, K, L, at, rt) {
      var U = O.children;
      if (U !== void 0)
        if (L)
          if (D(U)) {
            for (L = 0; L < U.length; L++)
              f(U[L]);
            Object.freeze && Object.freeze(U);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else f(U);
      if (y.call(O, "key")) {
        U = t(g);
        var et = Object.keys(O).filter(function(N) {
          return N !== "key";
        });
        L = 0 < et.length ? "{key: someKey, " + et.join(": ..., ") + ": ...}" : "{key: someKey}", it[U + L] || (et = 0 < et.length ? "{" + et.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          L,
          U,
          et,
          U
        ), it[U + L] = !0);
      }
      if (U = null, K !== void 0 && (n(K), U = "" + K), o(O) && (n(O.key), U = "" + O.key), "key" in O) {
        K = {};
        for (var ft in O)
          ft !== "key" && (K[ft] = O[ft]);
      } else K = O;
      return U && s(
        K,
        typeof g == "function" ? g.displayName || g.name || "Unknown" : g
      ), l(
        g,
        U,
        K,
        i(),
        at,
        rt
      );
    }
    function f(g) {
      h(g) ? g._store && (g._store.validated = 1) : typeof g == "object" && g !== null && g.$$typeof === Z && (g._payload.status === "fulfilled" ? h(g._payload.value) && g._payload.value._store && (g._payload.value._store.validated = 1) : g._store && (g._store.validated = 1));
    }
    function h(g) {
      return typeof g == "object" && g !== null && g.$$typeof === m;
    }
    var d = Dr, m = Symbol.for("react.transitional.element"), b = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), M = Symbol.for("react.consumer"), x = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), Z = Symbol.for("react.lazy"), B = Symbol.for("react.activity"), v = Symbol.for("react.client.reference"), w = d.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, D = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    d = {
      react_stack_bottom_frame: function(g) {
        return g();
      }
    };
    var k, $ = {}, I = d.react_stack_bottom_frame.bind(
      d,
      a
    )(), V = Y(r(a)), it = {};
    Wt.Fragment = E, Wt.jsx = function(g, O, K) {
      var L = 1e4 > w.recentlyCreatedOwnerStacks++;
      return c(
        g,
        O,
        K,
        !1,
        L ? Error("react-stack-top-frame") : I,
        L ? Y(r(g)) : V
      );
    }, Wt.jsxs = function(g, O, K) {
      var L = 1e4 > w.recentlyCreatedOwnerStacks++;
      return c(
        g,
        O,
        K,
        !0,
        L ? Error("react-stack-top-frame") : I,
        L ? Y(r(g)) : V
      );
    };
  })()), Wt;
}
var kn;
function Fr() {
  return kn || (kn = 1, process.env.NODE_ENV === "production" ? fe.exports = Or() : fe.exports = zr()), fe.exports;
}
var H = Fr();
const ql = ({ onClick: t, children: e }) => /* @__PURE__ */ H.jsx(
  "button",
  {
    style: {
      backgroundColor: "#4ade80",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      color: "white",
      cursor: "pointer"
    },
    onClick: t,
    children: e
  }
);
function te(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Yr(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function tr(t) {
  let e, n, r;
  t.length !== 2 ? (e = te, n = (s, u) => te(t(s), u), r = (s, u) => t(s) - u) : (e = t === te || t === Yr ? t : qr, n = t, r = t);
  function i(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) < 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function a(s, u, l = 0, c = s.length) {
    if (l < c) {
      if (e(u, u) !== 0) return c;
      do {
        const f = l + c >>> 1;
        n(s[f], u) <= 0 ? l = f + 1 : c = f;
      } while (l < c);
    }
    return l;
  }
  function o(s, u, l = 0, c = s.length) {
    const f = i(s, u, l, c - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: o, right: a };
}
function qr() {
  return 0;
}
function Br(t) {
  return t === null ? NaN : +t;
}
const Vr = tr(te), Xr = Vr.right;
tr(Br).center;
class An extends Map {
  constructor(e, n = Ur) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null) for (const [r, i] of e) this.set(r, i);
  }
  get(e) {
    return super.get($n(this, e));
  }
  has(e) {
    return super.has($n(this, e));
  }
  set(e, n) {
    return super.set(Kr(this, e), n);
  }
  delete(e) {
    return super.delete(Wr(this, e));
  }
}
function $n({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : n;
}
function Kr({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) ? t.get(r) : (t.set(r, n), n);
}
function Wr({ _intern: t, _key: e }, n) {
  const r = e(n);
  return t.has(r) && (n = t.get(r), t.delete(r)), n;
}
function Ur(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Jr = Math.sqrt(50), Gr = Math.sqrt(10), Zr = Math.sqrt(2);
function be(t, e, n) {
  const r = (e - t) / Math.max(0, n), i = Math.floor(Math.log10(r)), a = r / Math.pow(10, i), o = a >= Jr ? 10 : a >= Gr ? 5 : a >= Zr ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / o, s = Math.round(t * l), u = Math.round(e * l), s / l < t && ++s, u / l > e && --u, l = -l) : (l = Math.pow(10, i) * o, s = Math.round(t / l), u = Math.round(e / l), s * l < t && ++s, u * l > e && --u), u < s && 0.5 <= n && n < 2 ? be(t, e, n * 2) : [s, u, l];
}
function Qr(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0)) return [];
  if (t === e) return [t];
  const r = e < t, [i, a, o] = r ? be(e, t, n) : be(t, e, n);
  if (!(a >= i)) return [];
  const s = a - i + 1, u = new Array(s);
  if (r)
    if (o < 0) for (let l = 0; l < s; ++l) u[l] = (a - l) / -o;
    else for (let l = 0; l < s; ++l) u[l] = (a - l) * o;
  else if (o < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -o;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * o;
  return u;
}
function We(t, e, n) {
  return e = +e, t = +t, n = +n, be(t, e, n)[2];
}
function ti(t, e, n) {
  e = +e, t = +t, n = +n;
  const r = e < t, i = r ? We(e, t, n) : We(t, e, n);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function Ct(t, e) {
  let n;
  if (e === void 0)
    for (const r of t)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t)
      (i = e(i, ++r, t)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function ei(t, e, n) {
  t = +t, e = +e, n = (i = arguments.length) < 2 ? (e = t, t = 0, 1) : i < 3 ? 1 : +n;
  for (var r = -1, i = Math.max(0, Math.ceil((e - t) / n)) | 0, a = new Array(i); ++r < i; )
    a[r] = t + r * n;
  return a;
}
const ni = ri(Math.random);
function ri(t) {
  return function(n, r = 0, i = n.length) {
    let a = i - (r = +r);
    for (; a; ) {
      const o = t() * a-- | 0, s = n[a + r];
      n[a + r] = n[o + r], n[o + r] = s;
    }
    return n;
  };
}
function ii(t) {
  return t;
}
var Ye = 1, qe = 2, Ue = 3, Jt = 4, Nn = 1e-6;
function ai(t) {
  return "translate(" + t + ",0)";
}
function oi(t) {
  return "translate(0," + t + ")";
}
function si(t) {
  return (e) => +t(e);
}
function li(t, e) {
  return e = Math.max(0, t.bandwidth() - e * 2) / 2, t.round() && (e = Math.round(e)), (n) => +t(n) + e;
}
function ci() {
  return !this.__axis;
}
function er(t, e) {
  var n = [], r = null, i = null, a = 6, o = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === Ye || t === Jt ? -1 : 1, c = t === Jt || t === qe ? "x" : "y", f = t === Ye || t === Ue ? ai : oi;
  function h(d) {
    var m = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), b = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : ii), E = Math.max(a, 0) + s, z = e.range(), R = +z[0] + u, M = +z[z.length - 1] + u, x = (e.bandwidth ? li : si)(e.copy(), u), A = d.selection ? d.selection() : d, C = A.selectAll(".domain").data([null]), j = A.selectAll(".tick").data(m, e).order(), X = j.exit(), Z = j.enter().append("g").attr("class", "tick"), B = j.select("line"), v = j.select("text");
    C = C.merge(C.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), j = j.merge(Z), B = B.merge(Z.append("line").attr("stroke", "currentColor").attr(c + "2", l * a)), v = v.merge(Z.append("text").attr("fill", "currentColor").attr(c, l * E).attr("dy", t === Ye ? "0em" : t === Ue ? "0.71em" : "0.32em")), d !== A && (C = C.transition(d), j = j.transition(d), B = B.transition(d), v = v.transition(d), X = X.transition(d).attr("opacity", Nn).attr("transform", function(w) {
      return isFinite(w = x(w)) ? f(w + u) : this.getAttribute("transform");
    }), Z.attr("opacity", Nn).attr("transform", function(w) {
      var y = this.parentNode.__axis;
      return f((y && isFinite(y = y(w)) ? y : x(w)) + u);
    })), X.remove(), C.attr("d", t === Jt || t === qe ? o ? "M" + l * o + "," + R + "H" + u + "V" + M + "H" + l * o : "M" + u + "," + R + "V" + M : o ? "M" + R + "," + l * o + "V" + u + "H" + M + "V" + l * o : "M" + R + "," + u + "H" + M), j.attr("opacity", 1).attr("transform", function(w) {
      return f(x(w) + u);
    }), B.attr(c + "2", l * a), v.attr(c, l * E).text(b), A.filter(ci).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === qe ? "start" : t === Jt ? "end" : "middle"), A.each(function() {
      this.__axis = x;
    });
  }
  return h.scale = function(d) {
    return arguments.length ? (e = d, h) : e;
  }, h.ticks = function() {
    return n = Array.from(arguments), h;
  }, h.tickArguments = function(d) {
    return arguments.length ? (n = d == null ? [] : Array.from(d), h) : n.slice();
  }, h.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), h) : r && r.slice();
  }, h.tickFormat = function(d) {
    return arguments.length ? (i = d, h) : i;
  }, h.tickSize = function(d) {
    return arguments.length ? (a = o = +d, h) : a;
  }, h.tickSizeInner = function(d) {
    return arguments.length ? (a = +d, h) : a;
  }, h.tickSizeOuter = function(d) {
    return arguments.length ? (o = +d, h) : o;
  }, h.tickPadding = function(d) {
    return arguments.length ? (s = +d, h) : s;
  }, h.offset = function(d) {
    return arguments.length ? (u = +d, h) : u;
  }, h;
}
function je(t) {
  return er(Ue, t);
}
function Pe(t) {
  return er(Jt, t);
}
var ui = { value: () => {
} };
function nr() {
  for (var t = 0, e = arguments.length, n = {}, r; t < e; ++t) {
    if (!(r = arguments[t] + "") || r in n || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    n[r] = [];
  }
  return new me(n);
}
function me(t) {
  this._ = t;
}
function fi(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var r = "", i = n.indexOf(".");
    if (i >= 0 && (r = n.slice(i + 1), n = n.slice(0, i)), n && !e.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: r };
  });
}
me.prototype = nr.prototype = {
  constructor: me,
  on: function(t, e) {
    var n = this._, r = fi(t + "", n), i, a = -1, o = r.length;
    if (arguments.length < 2) {
      for (; ++a < o; ) if ((i = (t = r[a]).type) && (i = hi(n[i], t.name))) return i;
      return;
    }
    if (e != null && typeof e != "function") throw new Error("invalid callback: " + e);
    for (; ++a < o; )
      if (i = (t = r[a]).type) n[i] = Sn(n[i], t.name, e);
      else if (e == null) for (i in n) n[i] = Sn(n[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e) t[n] = e[n].slice();
    return new me(t);
  },
  call: function(t, e) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), r = 0, i, a; r < i; ++r) n[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (a = this._[t], r = 0, i = a.length; r < i; ++r) a[r].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, a = r.length; i < a; ++i) r[i].value.apply(e, n);
  }
};
function hi(t, e) {
  for (var n = 0, r = t.length, i; n < r; ++n)
    if ((i = t[n]).name === e)
      return i.value;
}
function Sn(t, e, n) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === e) {
      t[r] = ui, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Je = "http://www.w3.org/1999/xhtml";
const Mn = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Je,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function He(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Mn.hasOwnProperty(e) ? { space: Mn[e], local: t } : t;
}
function di(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Je && e.documentElement.namespaceURI === Je ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function gi(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function rr(t) {
  var e = He(t);
  return (e.local ? gi : di)(e);
}
function pi() {
}
function cn(t) {
  return t == null ? pi : function() {
    return this.querySelector(t);
  };
}
function yi(t) {
  typeof t != "function" && (t = cn(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = new Array(o), u, l, c = 0; c < o; ++c)
      (u = a[c]) && (l = t.call(u, u.__data__, c, a)) && ("__data__" in u && (l.__data__ = u.__data__), s[c] = l);
  return new pt(r, this._parents);
}
function mi(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function xi() {
  return [];
}
function ir(t) {
  return t == null ? xi : function() {
    return this.querySelectorAll(t);
  };
}
function vi(t) {
  return function() {
    return mi(t.apply(this, arguments));
  };
}
function _i(t) {
  typeof t == "function" ? t = vi(t) : t = ir(t);
  for (var e = this._groups, n = e.length, r = [], i = [], a = 0; a < n; ++a)
    for (var o = e[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && (r.push(t.call(u, u.__data__, l, o)), i.push(u));
  return new pt(r, i);
}
function ar(t) {
  return function() {
    return this.matches(t);
  };
}
function or(t) {
  return function(e) {
    return e.matches(t);
  };
}
var bi = Array.prototype.find;
function wi(t) {
  return function() {
    return bi.call(this.children, t);
  };
}
function ki() {
  return this.firstElementChild;
}
function Ai(t) {
  return this.select(t == null ? ki : wi(typeof t == "function" ? t : or(t)));
}
var $i = Array.prototype.filter;
function Ni() {
  return Array.from(this.children);
}
function Si(t) {
  return function() {
    return $i.call(this.children, t);
  };
}
function Mi(t) {
  return this.selectAll(t == null ? Ni : Si(typeof t == "function" ? t : or(t)));
}
function Ri(t) {
  typeof t != "function" && (t = ar(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new pt(r, this._parents);
}
function sr(t) {
  return new Array(t.length);
}
function Ei() {
  return new pt(this._enter || this._groups.map(sr), this._parents);
}
function we(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
we.prototype = {
  constructor: we,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function Ti(t) {
  return function() {
    return t;
  };
}
function Ci(t, e, n, r, i, a) {
  for (var o = 0, s, u = e.length, l = a.length; o < l; ++o)
    (s = e[o]) ? (s.__data__ = a[o], r[o] = s) : n[o] = new we(t, a[o]);
  for (; o < u; ++o)
    (s = e[o]) && (i[o] = s);
}
function Ii(t, e, n, r, i, a, o) {
  var s, u, l = /* @__PURE__ */ new Map(), c = e.length, f = a.length, h = new Array(c), d;
  for (s = 0; s < c; ++s)
    (u = e[s]) && (h[s] = d = o.call(u, u.__data__, s, e) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < f; ++s)
    d = o.call(t, a[s], s, a) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = a[s], l.delete(d)) : n[s] = new we(t, a[s]);
  for (s = 0; s < c; ++s)
    (u = e[s]) && l.get(h[s]) === u && (i[s] = u);
}
function Li(t) {
  return t.__data__;
}
function ji(t, e) {
  if (!arguments.length) return Array.from(this, Li);
  var n = e ? Ii : Ci, r = this._parents, i = this._groups;
  typeof t != "function" && (t = Ti(t));
  for (var a = i.length, o = new Array(a), s = new Array(a), u = new Array(a), l = 0; l < a; ++l) {
    var c = r[l], f = i[l], h = f.length, d = Pi(t.call(c, c && c.__data__, l, r)), m = d.length, b = s[l] = new Array(m), E = o[l] = new Array(m), z = u[l] = new Array(h);
    n(c, f, b, E, z, d, e);
    for (var R = 0, M = 0, x, A; R < m; ++R)
      if (x = b[R]) {
        for (R >= M && (M = R + 1); !(A = E[M]) && ++M < m; ) ;
        x._next = A || null;
      }
  }
  return o = new pt(o, r), o._enter = s, o._exit = u, o;
}
function Pi(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Hi() {
  return new pt(this._exit || this._groups.map(sr), this._parents);
}
function Di(t, e, n) {
  var r = this.enter(), i = this, a = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), e != null && (i = e(i), i && (i = i.selection())), n == null ? a.remove() : n(a), r && i ? r.merge(i).order() : i;
}
function Oi(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, r = e._groups, i = n.length, a = r.length, o = Math.min(i, a), s = new Array(i), u = 0; u < o; ++u)
    for (var l = n[u], c = r[u], f = l.length, h = s[u] = new Array(f), d, m = 0; m < f; ++m)
      (d = l[m] || c[m]) && (h[m] = d);
  for (; u < i; ++u)
    s[u] = n[u];
  return new pt(s, this._parents);
}
function zi() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var r = t[e], i = r.length - 1, a = r[i], o; --i >= 0; )
      (o = r[i]) && (a && o.compareDocumentPosition(a) ^ 4 && a.parentNode.insertBefore(o, a), a = o);
  return this;
}
function Fi(t) {
  t || (t = Yi);
  function e(f, h) {
    return f && h ? t(f.__data__, h.__data__) : !f - !h;
  }
  for (var n = this._groups, r = n.length, i = new Array(r), a = 0; a < r; ++a) {
    for (var o = n[a], s = o.length, u = i[a] = new Array(s), l, c = 0; c < s; ++c)
      (l = o[c]) && (u[c] = l);
    u.sort(e);
  }
  return new pt(i, this._parents).order();
}
function Yi(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function qi() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Bi() {
  return Array.from(this);
}
function Vi() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length; i < a; ++i) {
      var o = r[i];
      if (o) return o;
    }
  return null;
}
function Xi() {
  let t = 0;
  for (const e of this) ++t;
  return t;
}
function Ki() {
  return !this.node();
}
function Wi(t) {
  for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
    for (var i = e[n], a = 0, o = i.length, s; a < o; ++a)
      (s = i[a]) && t.call(s, s.__data__, a, i);
  return this;
}
function Ui(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Ji(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Gi(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Zi(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Qi(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function ta(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function ea(t, e) {
  var n = He(t);
  if (arguments.length < 2) {
    var r = this.node();
    return n.local ? r.getAttributeNS(n.space, n.local) : r.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Ji : Ui : typeof e == "function" ? n.local ? ta : Qi : n.local ? Zi : Gi)(n, e));
}
function lr(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function na(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ra(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ia(t, e, n) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, n);
  };
}
function aa(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? na : typeof e == "function" ? ia : ra)(t, e, n ?? "")) : qt(this.node(), t);
}
function qt(t, e) {
  return t.style.getPropertyValue(e) || lr(t).getComputedStyle(t, null).getPropertyValue(e);
}
function oa(t) {
  return function() {
    delete this[t];
  };
}
function sa(t, e) {
  return function() {
    this[t] = e;
  };
}
function la(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ca(t, e) {
  return arguments.length > 1 ? this.each((e == null ? oa : typeof e == "function" ? la : sa)(t, e)) : this.node()[t];
}
function cr(t) {
  return t.trim().split(/^|\s+/);
}
function un(t) {
  return t.classList || new ur(t);
}
function ur(t) {
  this._node = t, this._names = cr(t.getAttribute("class") || "");
}
ur.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function fr(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.add(e[r]);
}
function hr(t, e) {
  for (var n = un(t), r = -1, i = e.length; ++r < i; ) n.remove(e[r]);
}
function ua(t) {
  return function() {
    fr(this, t);
  };
}
function fa(t) {
  return function() {
    hr(this, t);
  };
}
function ha(t, e) {
  return function() {
    (e.apply(this, arguments) ? fr : hr)(this, t);
  };
}
function da(t, e) {
  var n = cr(t + "");
  if (arguments.length < 2) {
    for (var r = un(this.node()), i = -1, a = n.length; ++i < a; ) if (!r.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? ha : e ? ua : fa)(n, e));
}
function ga() {
  this.textContent = "";
}
function pa(t) {
  return function() {
    this.textContent = t;
  };
}
function ya(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ma(t) {
  return arguments.length ? this.each(t == null ? ga : (typeof t == "function" ? ya : pa)(t)) : this.node().textContent;
}
function xa() {
  this.innerHTML = "";
}
function va(t) {
  return function() {
    this.innerHTML = t;
  };
}
function _a(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function ba(t) {
  return arguments.length ? this.each(t == null ? xa : (typeof t == "function" ? _a : va)(t)) : this.node().innerHTML;
}
function wa() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ka() {
  return this.each(wa);
}
function Aa() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $a() {
  return this.each(Aa);
}
function Na(t) {
  var e = typeof t == "function" ? t : rr(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Sa() {
  return null;
}
function Ma(t, e) {
  var n = typeof t == "function" ? t : rr(t), r = e == null ? Sa : typeof e == "function" ? e : cn(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Ra() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ea() {
  return this.each(Ra);
}
function Ta() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ca() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ia(t) {
  return this.select(t ? Ca : Ta);
}
function La(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function ja(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Pa(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", r = e.indexOf(".");
    return r >= 0 && (n = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: n };
  });
}
function Ha(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, r = -1, i = e.length, a; n < i; ++n)
        a = e[n], (!t.type || a.type === t.type) && a.name === t.name ? this.removeEventListener(a.type, a.listener, a.options) : e[++r] = a;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Da(t, e, n) {
  return function() {
    var r = this.__on, i, a = ja(e);
    if (r) {
      for (var o = 0, s = r.length; o < s; ++o)
        if ((i = r[o]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = a, i.options = n), i.value = e;
          return;
        }
    }
    this.addEventListener(t.type, a, n), i = { type: t.type, name: t.name, value: e, listener: a, options: n }, r ? r.push(i) : this.__on = [i];
  };
}
function Oa(t, e, n) {
  var r = Pa(t + ""), i, a = r.length, o;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, c; u < l; ++u)
        for (i = 0, c = s[u]; i < a; ++i)
          if ((o = r[i]).type === c.type && o.name === c.name)
            return c.value;
    }
    return;
  }
  for (s = e ? Da : Ha, i = 0; i < a; ++i) this.each(s(r[i], e, n));
  return this;
}
function dr(t, e, n) {
  var r = lr(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(e, n) : (i = r.document.createEvent("Event"), n ? (i.initEvent(e, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(e, !1, !1)), t.dispatchEvent(i);
}
function za(t, e) {
  return function() {
    return dr(this, t, e);
  };
}
function Fa(t, e) {
  return function() {
    return dr(this, t, e.apply(this, arguments));
  };
}
function Ya(t, e) {
  return this.each((typeof e == "function" ? Fa : za)(t, e));
}
function* qa() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var r = t[e], i = 0, a = r.length, o; i < a; ++i)
      (o = r[i]) && (yield o);
}
var gr = [null];
function pt(t, e) {
  this._groups = t, this._parents = e;
}
function ae() {
  return new pt([[document.documentElement]], gr);
}
function Ba() {
  return this;
}
pt.prototype = ae.prototype = {
  constructor: pt,
  select: yi,
  selectAll: _i,
  selectChild: Ai,
  selectChildren: Mi,
  filter: Ri,
  data: ji,
  enter: Ei,
  exit: Hi,
  join: Di,
  merge: Oi,
  selection: Ba,
  order: zi,
  sort: Fi,
  call: qi,
  nodes: Bi,
  node: Vi,
  size: Xi,
  empty: Ki,
  each: Wi,
  attr: ea,
  style: aa,
  property: ca,
  classed: da,
  text: ma,
  html: ba,
  raise: ka,
  lower: $a,
  append: Na,
  insert: Ma,
  remove: Ea,
  clone: Ia,
  datum: La,
  on: Oa,
  dispatch: Ya,
  [Symbol.iterator]: qa
};
function yt(t) {
  return typeof t == "string" ? new pt([[document.querySelector(t)]], [document.documentElement]) : new pt([[t]], gr);
}
function fn(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function pr(t, e) {
  var n = Object.create(t.prototype);
  for (var r in e) n[r] = e[r];
  return n;
}
function oe() {
}
var ee = 0.7, ke = 1 / ee, Yt = "\\s*([+-]?\\d+)\\s*", ne = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", bt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Va = /^#([0-9a-f]{3,8})$/, Xa = new RegExp(`^rgb\\(${Yt},${Yt},${Yt}\\)$`), Ka = new RegExp(`^rgb\\(${bt},${bt},${bt}\\)$`), Wa = new RegExp(`^rgba\\(${Yt},${Yt},${Yt},${ne}\\)$`), Ua = new RegExp(`^rgba\\(${bt},${bt},${bt},${ne}\\)$`), Ja = new RegExp(`^hsl\\(${ne},${bt},${bt}\\)$`), Ga = new RegExp(`^hsla\\(${ne},${bt},${bt},${ne}\\)$`), Rn = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
fn(oe, Dt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: En,
  // Deprecated! Use color.formatHex.
  formatHex: En,
  formatHex8: Za,
  formatHsl: Qa,
  formatRgb: Tn,
  toString: Tn
});
function En() {
  return this.rgb().formatHex();
}
function Za() {
  return this.rgb().formatHex8();
}
function Qa() {
  return yr(this).formatHsl();
}
function Tn() {
  return this.rgb().formatRgb();
}
function Dt(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Va.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Cn(e) : n === 3 ? new gt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? he(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? he(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Xa.exec(t)) ? new gt(e[1], e[2], e[3], 1) : (e = Ka.exec(t)) ? new gt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Wa.exec(t)) ? he(e[1], e[2], e[3], e[4]) : (e = Ua.exec(t)) ? he(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Ja.exec(t)) ? jn(e[1], e[2] / 100, e[3] / 100, 1) : (e = Ga.exec(t)) ? jn(e[1], e[2] / 100, e[3] / 100, e[4]) : Rn.hasOwnProperty(t) ? Cn(Rn[t]) : t === "transparent" ? new gt(NaN, NaN, NaN, 0) : null;
}
function Cn(t) {
  return new gt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function he(t, e, n, r) {
  return r <= 0 && (t = e = n = NaN), new gt(t, e, n, r);
}
function to(t) {
  return t instanceof oe || (t = Dt(t)), t ? (t = t.rgb(), new gt(t.r, t.g, t.b, t.opacity)) : new gt();
}
function Ge(t, e, n, r) {
  return arguments.length === 1 ? to(t) : new gt(t, e, n, r ?? 1);
}
function gt(t, e, n, r) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +r;
}
fn(gt, Ge, pr(oe, {
  brighter(t) {
    return t = t == null ? ke : Math.pow(ke, t), new gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ee : Math.pow(ee, t), new gt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new gt(Ht(this.r), Ht(this.g), Ht(this.b), Ae(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: In,
  // Deprecated! Use color.formatHex.
  formatHex: In,
  formatHex8: eo,
  formatRgb: Ln,
  toString: Ln
}));
function In() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}`;
}
function eo() {
  return `#${Pt(this.r)}${Pt(this.g)}${Pt(this.b)}${Pt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Ln() {
  const t = Ae(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Ht(this.r)}, ${Ht(this.g)}, ${Ht(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Ae(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Ht(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Pt(t) {
  return t = Ht(t), (t < 16 ? "0" : "") + t.toString(16);
}
function jn(t, e, n, r) {
  return r <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new xt(t, e, n, r);
}
function yr(t) {
  if (t instanceof xt) return new xt(t.h, t.s, t.l, t.opacity);
  if (t instanceof oe || (t = Dt(t)), !t) return new xt();
  if (t instanceof xt) return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, r = t.b / 255, i = Math.min(e, n, r), a = Math.max(e, n, r), o = NaN, s = a - i, u = (a + i) / 2;
  return s ? (e === a ? o = (n - r) / s + (n < r) * 6 : n === a ? o = (r - e) / s + 2 : o = (e - n) / s + 4, s /= u < 0.5 ? a + i : 2 - a - i, o *= 60) : s = u > 0 && u < 1 ? 0 : o, new xt(o, s, u, t.opacity);
}
function no(t, e, n, r) {
  return arguments.length === 1 ? yr(t) : new xt(t, e, n, r ?? 1);
}
function xt(t, e, n, r) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +r;
}
fn(xt, no, pr(oe, {
  brighter(t) {
    return t = t == null ? ke : Math.pow(ke, t), new xt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ee : Math.pow(ee, t), new xt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, r = n + (n < 0.5 ? n : 1 - n) * e, i = 2 * n - r;
    return new gt(
      Be(t >= 240 ? t - 240 : t + 120, i, r),
      Be(t, i, r),
      Be(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new xt(Pn(this.h), de(this.s), de(this.l), Ae(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Ae(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Pn(this.h)}, ${de(this.s) * 100}%, ${de(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Pn(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function de(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Be(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const hn = (t) => () => t;
function ro(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function io(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(r) {
    return Math.pow(t + r * e, n);
  };
}
function ao(t) {
  return (t = +t) == 1 ? mr : function(e, n) {
    return n - e ? io(e, n, t) : hn(isNaN(e) ? n : e);
  };
}
function mr(t, e) {
  var n = e - t;
  return n ? ro(t, n) : hn(isNaN(t) ? e : t);
}
const $e = (function t(e) {
  var n = ao(e);
  function r(i, a) {
    var o = n((i = Ge(i)).r, (a = Ge(a)).r), s = n(i.g, a.g), u = n(i.b, a.b), l = mr(i.opacity, a.opacity);
    return function(c) {
      return i.r = o(c), i.g = s(c), i.b = u(c), i.opacity = l(c), i + "";
    };
  }
  return r.gamma = t, r;
})(1);
function oo(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, r = e.slice(), i;
  return function(a) {
    for (i = 0; i < n; ++i) r[i] = t[i] * (1 - a) + e[i] * a;
    return r;
  };
}
function so(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function lo(t, e) {
  var n = e ? e.length : 0, r = t ? Math.min(n, t.length) : 0, i = new Array(r), a = new Array(n), o;
  for (o = 0; o < r; ++o) i[o] = Rt(t[o], e[o]);
  for (; o < n; ++o) a[o] = e[o];
  return function(s) {
    for (o = 0; o < r; ++o) a[o] = i[o](s);
    return a;
  };
}
function co(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(r) {
    return n.setTime(t * (1 - r) + e * r), n;
  };
}
function mt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function uo(t, e) {
  var n = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (i in e)
    i in t ? n[i] = Rt(t[i], e[i]) : r[i] = e[i];
  return function(a) {
    for (i in n) r[i] = n[i](a);
    return r;
  };
}
var Ze = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ve = new RegExp(Ze.source, "g");
function fo(t) {
  return function() {
    return t;
  };
}
function ho(t) {
  return function(e) {
    return t(e) + "";
  };
}
function xr(t, e) {
  var n = Ze.lastIndex = Ve.lastIndex = 0, r, i, a, o = -1, s = [], u = [];
  for (t = t + "", e = e + ""; (r = Ze.exec(t)) && (i = Ve.exec(e)); )
    (a = i.index) > n && (a = e.slice(n, a), s[o] ? s[o] += a : s[++o] = a), (r = r[0]) === (i = i[0]) ? s[o] ? s[o] += i : s[++o] = i : (s[++o] = null, u.push({ i: o, x: mt(r, i) })), n = Ve.lastIndex;
  return n < e.length && (a = e.slice(n), s[o] ? s[o] += a : s[++o] = a), s.length < 2 ? u[0] ? ho(u[0].x) : fo(e) : (e = u.length, function(l) {
    for (var c = 0, f; c < e; ++c) s[(f = u[c]).i] = f.x(l);
    return s.join("");
  });
}
function Rt(t, e) {
  var n = typeof e, r;
  return e == null || n === "boolean" ? hn(e) : (n === "number" ? mt : n === "string" ? (r = Dt(e)) ? (e = r, $e) : xr : e instanceof Dt ? $e : e instanceof Date ? co : so(e) ? oo : Array.isArray(e) ? lo : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? uo : mt)(t, e);
}
function go(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Hn = 180 / Math.PI, Qe = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function vr(t, e, n, r, i, a) {
  var o, s, u;
  return (o = Math.sqrt(t * t + e * e)) && (t /= o, e /= o), (u = t * n + e * r) && (n -= t * u, r -= e * u), (s = Math.sqrt(n * n + r * r)) && (n /= s, r /= s, u /= s), t * r < e * n && (t = -t, e = -e, u = -u, o = -o), {
    translateX: i,
    translateY: a,
    rotate: Math.atan2(e, t) * Hn,
    skewX: Math.atan(u) * Hn,
    scaleX: o,
    scaleY: s
  };
}
var ge;
function po(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Qe : vr(e.a, e.b, e.c, e.d, e.e, e.f);
}
function yo(t) {
  return t == null || (ge || (ge = document.createElementNS("http://www.w3.org/2000/svg", "g")), ge.setAttribute("transform", t), !(t = ge.transform.baseVal.consolidate())) ? Qe : (t = t.matrix, vr(t.a, t.b, t.c, t.d, t.e, t.f));
}
function _r(t, e, n, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function a(l, c, f, h, d, m) {
    if (l !== f || c !== h) {
      var b = d.push("translate(", null, e, null, n);
      m.push({ i: b - 4, x: mt(l, f) }, { i: b - 2, x: mt(c, h) });
    } else (f || h) && d.push("translate(" + f + e + h + n);
  }
  function o(l, c, f, h) {
    l !== c ? (l - c > 180 ? c += 360 : c - l > 180 && (l += 360), h.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: mt(l, c) })) : c && f.push(i(f) + "rotate(" + c + r);
  }
  function s(l, c, f, h) {
    l !== c ? h.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: mt(l, c) }) : c && f.push(i(f) + "skewX(" + c + r);
  }
  function u(l, c, f, h, d, m) {
    if (l !== f || c !== h) {
      var b = d.push(i(d) + "scale(", null, ",", null, ")");
      m.push({ i: b - 4, x: mt(l, f) }, { i: b - 2, x: mt(c, h) });
    } else (f !== 1 || h !== 1) && d.push(i(d) + "scale(" + f + "," + h + ")");
  }
  return function(l, c) {
    var f = [], h = [];
    return l = t(l), c = t(c), a(l.translateX, l.translateY, c.translateX, c.translateY, f, h), o(l.rotate, c.rotate, f, h), s(l.skewX, c.skewX, f, h), u(l.scaleX, l.scaleY, c.scaleX, c.scaleY, f, h), l = c = null, function(d) {
      for (var m = -1, b = h.length, E; ++m < b; ) f[(E = h[m]).i] = E.x(d);
      return f.join("");
    };
  };
}
var mo = _r(po, "px, ", "px)", "deg)"), xo = _r(yo, ", ", ")", ")"), Bt = 0, Gt = 0, Ut = 0, br = 1e3, Ne, Zt, Se = 0, Ot = 0, De = 0, re = typeof performance == "object" && performance.now ? performance : Date, wr = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function dn() {
  return Ot || (wr(vo), Ot = re.now() + De);
}
function vo() {
  Ot = 0;
}
function Me() {
  this._call = this._time = this._next = null;
}
Me.prototype = kr.prototype = {
  constructor: Me,
  restart: function(t, e, n) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    n = (n == null ? dn() : +n) + (e == null ? 0 : +e), !this._next && Zt !== this && (Zt ? Zt._next = this : Ne = this, Zt = this), this._call = t, this._time = n, tn();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, tn());
  }
};
function kr(t, e, n) {
  var r = new Me();
  return r.restart(t, e, n), r;
}
function _o() {
  dn(), ++Bt;
  for (var t = Ne, e; t; )
    (e = Ot - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Bt;
}
function Dn() {
  Ot = (Se = re.now()) + De, Bt = Gt = 0;
  try {
    _o();
  } finally {
    Bt = 0, wo(), Ot = 0;
  }
}
function bo() {
  var t = re.now(), e = t - Se;
  e > br && (De -= e, Se = t);
}
function wo() {
  for (var t, e = Ne, n, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ne = n);
  Zt = t, tn(r);
}
function tn(t) {
  if (!Bt) {
    Gt && (Gt = clearTimeout(Gt));
    var e = t - Ot;
    e > 24 ? (t < 1 / 0 && (Gt = setTimeout(Dn, t - re.now() - De)), Ut && (Ut = clearInterval(Ut))) : (Ut || (Se = re.now(), Ut = setInterval(bo, br)), Bt = 1, wr(Dn));
  }
}
function On(t, e, n) {
  var r = new Me();
  return e = e == null ? 0 : +e, r.restart((i) => {
    r.stop(), t(i + e);
  }, e, n), r;
}
var ko = nr("start", "end", "cancel", "interrupt"), Ao = [], Ar = 0, zn = 1, en = 2, xe = 3, Fn = 4, nn = 5, ve = 6;
function Oe(t, e, n, r, i, a) {
  var o = t.__transition;
  if (!o) t.__transition = {};
  else if (n in o) return;
  $o(t, n, {
    name: e,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: ko,
    tween: Ao,
    time: a.time,
    delay: a.delay,
    duration: a.duration,
    ease: a.ease,
    timer: null,
    state: Ar
  });
}
function gn(t, e) {
  var n = vt(t, e);
  if (n.state > Ar) throw new Error("too late; already scheduled");
  return n;
}
function At(t, e) {
  var n = vt(t, e);
  if (n.state > xe) throw new Error("too late; already running");
  return n;
}
function vt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e])) throw new Error("transition not found");
  return n;
}
function $o(t, e, n) {
  var r = t.__transition, i;
  r[e] = n, n.timer = kr(a, 0, n.time);
  function a(l) {
    n.state = zn, n.timer.restart(o, n.delay, n.time), n.delay <= l && o(l - n.delay);
  }
  function o(l) {
    var c, f, h, d;
    if (n.state !== zn) return u();
    for (c in r)
      if (d = r[c], d.name === n.name) {
        if (d.state === xe) return On(o);
        d.state === Fn ? (d.state = ve, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[c]) : +c < e && (d.state = ve, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[c]);
      }
    if (On(function() {
      n.state === xe && (n.state = Fn, n.timer.restart(s, n.delay, n.time), s(l));
    }), n.state = en, n.on.call("start", t, t.__data__, n.index, n.group), n.state === en) {
      for (n.state = xe, i = new Array(h = n.tween.length), c = 0, f = -1; c < h; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var c = l < n.duration ? n.ease.call(null, l / n.duration) : (n.timer.restart(u), n.state = nn, 1), f = -1, h = i.length; ++f < h; )
      i[f].call(t, c);
    n.state === nn && (n.on.call("end", t, t.__data__, n.index, n.group), u());
  }
  function u() {
    n.state = ve, n.timer.stop(), delete r[e];
    for (var l in r) return;
    delete t.__transition;
  }
}
function No(t, e) {
  var n = t.__transition, r, i, a = !0, o;
  if (n) {
    e = e == null ? null : e + "";
    for (o in n) {
      if ((r = n[o]).name !== e) {
        a = !1;
        continue;
      }
      i = r.state > en && r.state < nn, r.state = ve, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete n[o];
    }
    a && delete t.__transition;
  }
}
function So(t) {
  return this.each(function() {
    No(this, t);
  });
}
function Mo(t, e) {
  var n, r;
  return function() {
    var i = At(this, t), a = i.tween;
    if (a !== n) {
      r = n = a;
      for (var o = 0, s = r.length; o < s; ++o)
        if (r[o].name === e) {
          r = r.slice(), r.splice(o, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function Ro(t, e, n) {
  var r, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var a = At(this, t), o = a.tween;
    if (o !== r) {
      i = (r = o).slice();
      for (var s = { name: e, value: n }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === e) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    a.tween = i;
  };
}
function Eo(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = vt(this.node(), n).tween, i = 0, a = r.length, o; i < a; ++i)
      if ((o = r[i]).name === t)
        return o.value;
    return null;
  }
  return this.each((e == null ? Mo : Ro)(n, t, e));
}
function pn(t, e, n) {
  var r = t._id;
  return t.each(function() {
    var i = At(this, r);
    (i.value || (i.value = {}))[e] = n.apply(this, arguments);
  }), function(i) {
    return vt(i, r).value[e];
  };
}
function $r(t, e) {
  var n;
  return (typeof e == "number" ? mt : e instanceof Dt ? $e : (n = Dt(e)) ? (e = n, $e) : xr)(t, e);
}
function To(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Co(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Io(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttribute(t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function Lo(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = this.getAttributeNS(t.space, t.local);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function jo(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), u;
    return s == null ? void this.removeAttribute(t) : (o = this.getAttribute(t), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = e(r = o, s)));
  };
}
function Po(t, e, n) {
  var r, i, a;
  return function() {
    var o, s = n(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (o = this.getAttributeNS(t.space, t.local), u = s + "", o === u ? null : o === r && u === i ? a : (i = u, a = e(r = o, s)));
  };
}
function Ho(t, e) {
  var n = He(t), r = n === "transform" ? xo : $r;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Po : jo)(n, r, pn(this, "attr." + t, e)) : e == null ? (n.local ? Co : To)(n) : (n.local ? Lo : Io)(n, r, e));
}
function Do(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Oo(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function zo(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Oo(t, a)), n;
  }
  return i._value = e, i;
}
function Fo(t, e) {
  var n, r;
  function i() {
    var a = e.apply(this, arguments);
    return a !== r && (n = (r = a) && Do(t, a)), n;
  }
  return i._value = e, i;
}
function Yo(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (e == null) return this.tween(n, null);
  if (typeof e != "function") throw new Error();
  var r = He(t);
  return this.tween(n, (r.local ? zo : Fo)(r, e));
}
function qo(t, e) {
  return function() {
    gn(this, t).delay = +e.apply(this, arguments);
  };
}
function Bo(t, e) {
  return e = +e, function() {
    gn(this, t).delay = e;
  };
}
function Vo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? qo : Bo)(e, t)) : vt(this.node(), e).delay;
}
function Xo(t, e) {
  return function() {
    At(this, t).duration = +e.apply(this, arguments);
  };
}
function Ko(t, e) {
  return e = +e, function() {
    At(this, t).duration = e;
  };
}
function Wo(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Xo : Ko)(e, t)) : vt(this.node(), e).duration;
}
function Uo(t, e) {
  if (typeof e != "function") throw new Error();
  return function() {
    At(this, t).ease = e;
  };
}
function Jo(t) {
  var e = this._id;
  return arguments.length ? this.each(Uo(e, t)) : vt(this.node(), e).ease;
}
function Go(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    At(this, t).ease = n;
  };
}
function Zo(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Go(this._id, t));
}
function Qo(t) {
  typeof t != "function" && (t = ar(t));
  for (var e = this._groups, n = e.length, r = new Array(n), i = 0; i < n; ++i)
    for (var a = e[i], o = a.length, s = r[i] = [], u, l = 0; l < o; ++l)
      (u = a[l]) && t.call(u, u.__data__, l, a) && s.push(u);
  return new St(r, this._parents, this._name, this._id);
}
function ts(t) {
  if (t._id !== this._id) throw new Error();
  for (var e = this._groups, n = t._groups, r = e.length, i = n.length, a = Math.min(r, i), o = new Array(r), s = 0; s < a; ++s)
    for (var u = e[s], l = n[s], c = u.length, f = o[s] = new Array(c), h, d = 0; d < c; ++d)
      (h = u[d] || l[d]) && (f[d] = h);
  for (; s < r; ++s)
    o[s] = e[s];
  return new St(o, this._parents, this._name, this._id);
}
function es(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function ns(t, e, n) {
  var r, i, a = es(e) ? gn : At;
  return function() {
    var o = a(this, t), s = o.on;
    s !== r && (i = (r = s).copy()).on(e, n), o.on = i;
  };
}
function rs(t, e) {
  var n = this._id;
  return arguments.length < 2 ? vt(this.node(), n).on.on(t) : this.each(ns(n, t, e));
}
function is(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition) if (+n !== t) return;
    e && e.removeChild(this);
  };
}
function as() {
  return this.on("end.remove", is(this._id));
}
function os(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = cn(t));
  for (var r = this._groups, i = r.length, a = new Array(i), o = 0; o < i; ++o)
    for (var s = r[o], u = s.length, l = a[o] = new Array(u), c, f, h = 0; h < u; ++h)
      (c = s[h]) && (f = t.call(c, c.__data__, h, s)) && ("__data__" in c && (f.__data__ = c.__data__), l[h] = f, Oe(l[h], e, n, h, l, vt(c, n)));
  return new St(a, this._parents, e, n);
}
function ss(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ir(t));
  for (var r = this._groups, i = r.length, a = [], o = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, c, f = 0; f < l; ++f)
      if (c = u[f]) {
        for (var h = t.call(c, c.__data__, f, u), d, m = vt(c, n), b = 0, E = h.length; b < E; ++b)
          (d = h[b]) && Oe(d, e, n, b, h, m);
        a.push(h), o.push(c);
      }
  return new St(a, o, e, n);
}
var ls = ae.prototype.constructor;
function cs() {
  return new ls(this._groups, this._parents);
}
function us(t, e) {
  var n, r, i;
  return function() {
    var a = qt(this, t), o = (this.style.removeProperty(t), qt(this, t));
    return a === o ? null : a === n && o === r ? i : i = e(n = a, r = o);
  };
}
function Nr(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function fs(t, e, n) {
  var r, i = n + "", a;
  return function() {
    var o = qt(this, t);
    return o === i ? null : o === r ? a : a = e(r = o, n);
  };
}
function hs(t, e, n) {
  var r, i, a;
  return function() {
    var o = qt(this, t), s = n(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), qt(this, t))), o === u ? null : o === r && u === i ? a : (i = u, a = e(r = o, s));
  };
}
function ds(t, e) {
  var n, r, i, a = "style." + e, o = "end." + a, s;
  return function() {
    var u = At(this, t), l = u.on, c = u.value[a] == null ? s || (s = Nr(e)) : void 0;
    (l !== n || i !== c) && (r = (n = l).copy()).on(o, i = c), u.on = r;
  };
}
function gs(t, e, n) {
  var r = (t += "") == "transform" ? mo : $r;
  return e == null ? this.styleTween(t, us(t, r)).on("end.style." + t, Nr(t)) : typeof e == "function" ? this.styleTween(t, hs(t, r, pn(this, "style." + t, e))).each(ds(this._id, t)) : this.styleTween(t, fs(t, r, e), n).on("end.style." + t, null);
}
function ps(t, e, n) {
  return function(r) {
    this.style.setProperty(t, e.call(this, r), n);
  };
}
function ys(t, e, n) {
  var r, i;
  function a() {
    var o = e.apply(this, arguments);
    return o !== i && (r = (i = o) && ps(t, o, n)), r;
  }
  return a._value = e, a;
}
function ms(t, e, n) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (e == null) return this.tween(r, null);
  if (typeof e != "function") throw new Error();
  return this.tween(r, ys(t, e, n ?? ""));
}
function xs(t) {
  return function() {
    this.textContent = t;
  };
}
function vs(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function _s(t) {
  return this.tween("text", typeof t == "function" ? vs(pn(this, "text", t)) : xs(t == null ? "" : t + ""));
}
function bs(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function ws(t) {
  var e, n;
  function r() {
    var i = t.apply(this, arguments);
    return i !== n && (e = (n = i) && bs(i)), e;
  }
  return r._value = t, r;
}
function ks(t) {
  var e = "text";
  if (arguments.length < 1) return (e = this.tween(e)) && e._value;
  if (t == null) return this.tween(e, null);
  if (typeof t != "function") throw new Error();
  return this.tween(e, ws(t));
}
function As() {
  for (var t = this._name, e = this._id, n = Sr(), r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      if (u = o[l]) {
        var c = vt(u, e);
        Oe(u, t, n, l, o, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new St(r, this._parents, t, n);
}
function $s() {
  var t, e, n = this, r = n._id, i = n.size();
  return new Promise(function(a, o) {
    var s = { value: o }, u = { value: function() {
      --i === 0 && a();
    } };
    n.each(function() {
      var l = At(this, r), c = l.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(s), e._.interrupt.push(s), e._.end.push(u)), l.on = e;
    }), i === 0 && a();
  });
}
var Ns = 0;
function St(t, e, n, r) {
  this._groups = t, this._parents = e, this._name = n, this._id = r;
}
function Sr() {
  return ++Ns;
}
var $t = ae.prototype;
St.prototype = {
  constructor: St,
  select: os,
  selectAll: ss,
  selectChild: $t.selectChild,
  selectChildren: $t.selectChildren,
  filter: Qo,
  merge: ts,
  selection: cs,
  transition: As,
  call: $t.call,
  nodes: $t.nodes,
  node: $t.node,
  size: $t.size,
  empty: $t.empty,
  each: $t.each,
  on: rs,
  attr: Ho,
  attrTween: Yo,
  style: gs,
  styleTween: ms,
  text: _s,
  textTween: ks,
  remove: as,
  tween: Eo,
  delay: Vo,
  duration: Wo,
  ease: Jo,
  easeVarying: Zo,
  end: $s,
  [Symbol.iterator]: $t[Symbol.iterator]
};
function Ss(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Ms = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Ss
};
function Rs(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Es(t) {
  var e, n;
  t instanceof St ? (e = t._id, t = t._name) : (e = Sr(), (n = Ms).time = dn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, a = 0; a < i; ++a)
    for (var o = r[a], s = o.length, u, l = 0; l < s; ++l)
      (u = o[l]) && Oe(u, t, e, l, o, n || Rs(u, e));
  return new St(r, this._parents, t, e);
}
ae.prototype.interrupt = So;
ae.prototype.transition = Es;
const rn = Math.PI, an = 2 * rn, jt = 1e-6, Ts = an - jt;
function Mr(t) {
  this._ += t[0];
  for (let e = 1, n = t.length; e < n; ++e)
    this._ += arguments[e] + t[e];
}
function Cs(t) {
  let e = Math.floor(t);
  if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
  if (e > 15) return Mr;
  const n = 10 ** e;
  return function(r) {
    this._ += r[0];
    for (let i = 1, a = r.length; i < a; ++i)
      this._ += Math.round(arguments[i] * n) / n + r[i];
  };
}
class Is {
  constructor(e) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = e == null ? Mr : Cs(e);
  }
  moveTo(e, n) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(e, n) {
    this._append`L${this._x1 = +e},${this._y1 = +n}`;
  }
  quadraticCurveTo(e, n, r, i) {
    this._append`Q${+e},${+n},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(e, n, r, i, a, o) {
    this._append`C${+e},${+n},${+r},${+i},${this._x1 = +a},${this._y1 = +o}`;
  }
  arcTo(e, n, r, i, a) {
    if (e = +e, n = +n, r = +r, i = +i, a = +a, a < 0) throw new Error(`negative radius: ${a}`);
    let o = this._x1, s = this._y1, u = r - e, l = i - n, c = o - e, f = s - n, h = c * c + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = e},${this._y1 = n}`;
    else if (h > jt) if (!(Math.abs(f * u - l * c) > jt) || !a)
      this._append`L${this._x1 = e},${this._y1 = n}`;
    else {
      let d = r - o, m = i - s, b = u * u + l * l, E = d * d + m * m, z = Math.sqrt(b), R = Math.sqrt(h), M = a * Math.tan((rn - Math.acos((b + h - E) / (2 * z * R))) / 2), x = M / R, A = M / z;
      Math.abs(x - 1) > jt && this._append`L${e + x * c},${n + x * f}`, this._append`A${a},${a},0,0,${+(f * d > c * m)},${this._x1 = e + A * u},${this._y1 = n + A * l}`;
    }
  }
  arc(e, n, r, i, a, o) {
    if (e = +e, n = +n, r = +r, o = !!o, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = e + s, c = n + u, f = 1 ^ o, h = o ? i - a : a - i;
    this._x1 === null ? this._append`M${l},${c}` : (Math.abs(this._x1 - l) > jt || Math.abs(this._y1 - c) > jt) && this._append`L${l},${c}`, r && (h < 0 && (h = h % an + an), h > Ts ? this._append`A${r},${r},0,1,${f},${e - s},${n - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = c}` : h > jt && this._append`A${r},${r},0,${+(h >= rn)},${f},${this._x1 = e + r * Math.cos(a)},${this._y1 = n + r * Math.sin(a)}`);
  }
  rect(e, n, r, i) {
    this._append`M${this._x0 = this._x1 = +e},${this._y0 = this._y1 = +n}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function Ls(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Re(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var n, r = t.slice(0, n);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(n + 1)
  ];
}
function Vt(t) {
  return t = Re(Math.abs(t)), t ? t[1] : NaN;
}
function js(t, e) {
  return function(n, r) {
    for (var i = n.length, a = [], o = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), a.push(n.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[o = (o + 1) % t.length];
    return a.reverse().join(e);
  };
}
function Ps(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var Hs = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Ee(t) {
  if (!(e = Hs.exec(t))) throw new Error("invalid format: " + t);
  var e;
  return new yn({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Ee.prototype = yn.prototype;
function yn(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
yn.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Ds(t) {
  t: for (var e = t.length, n = 1, r = -1, i; n < e; ++n)
    switch (t[n]) {
      case ".":
        r = i = n;
        break;
      case "0":
        r === 0 && (r = n), i = n;
        break;
      default:
        if (!+t[n]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var Rr;
function Os(t, e) {
  var n = Re(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1], a = i - (Rr = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, o = r.length;
  return a === o ? r : a > o ? r + new Array(a - o + 1).join("0") : a > 0 ? r.slice(0, a) + "." + r.slice(a) : "0." + new Array(1 - a).join("0") + Re(t, Math.max(0, e + a - 1))[0];
}
function Yn(t, e) {
  var n = Re(t, e);
  if (!n) return t + "";
  var r = n[0], i = n[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const qn = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: Ls,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Yn(t * 100, e),
  r: Yn,
  s: Os,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Bn(t) {
  return t;
}
var Vn = Array.prototype.map, Xn = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function zs(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Bn : js(Vn.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", a = t.numerals === void 0 ? Bn : Ps(Vn.call(t.numerals, String)), o = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Ee(f);
    var h = f.fill, d = f.align, m = f.sign, b = f.symbol, E = f.zero, z = f.width, R = f.comma, M = f.precision, x = f.trim, A = f.type;
    A === "n" ? (R = !0, A = "g") : qn[A] || (M === void 0 && (M = 12), x = !0, A = "g"), (E || h === "0" && d === "=") && (E = !0, h = "0", d = "=");
    var C = b === "$" ? n : b === "#" && /[boxX]/.test(A) ? "0" + A.toLowerCase() : "", j = b === "$" ? r : /[%p]/.test(A) ? o : "", X = qn[A], Z = /[defgprs%]/.test(A);
    M = M === void 0 ? 6 : /[gprs]/.test(A) ? Math.max(1, Math.min(21, M)) : Math.max(0, Math.min(20, M));
    function B(v) {
      var w = C, y = j, D, Y, k;
      if (A === "c")
        y = X(v) + y, v = "";
      else {
        v = +v;
        var $ = v < 0 || 1 / v < 0;
        if (v = isNaN(v) ? u : X(Math.abs(v), M), x && (v = Ds(v)), $ && +v == 0 && m !== "+" && ($ = !1), w = ($ ? m === "(" ? m : s : m === "-" || m === "(" ? "" : m) + w, y = (A === "s" ? Xn[8 + Rr / 3] : "") + y + ($ && m === "(" ? ")" : ""), Z) {
          for (D = -1, Y = v.length; ++D < Y; )
            if (k = v.charCodeAt(D), 48 > k || k > 57) {
              y = (k === 46 ? i + v.slice(D + 1) : v.slice(D)) + y, v = v.slice(0, D);
              break;
            }
        }
      }
      R && !E && (v = e(v, 1 / 0));
      var I = w.length + v.length + y.length, V = I < z ? new Array(z - I + 1).join(h) : "";
      switch (R && E && (v = e(V + v, V.length ? z - y.length : 1 / 0), V = ""), d) {
        case "<":
          v = w + v + y + V;
          break;
        case "=":
          v = w + V + v + y;
          break;
        case "^":
          v = V.slice(0, I = V.length >> 1) + w + v + y + V.slice(I);
          break;
        default:
          v = V + w + v + y;
          break;
      }
      return a(v);
    }
    return B.toString = function() {
      return f + "";
    }, B;
  }
  function c(f, h) {
    var d = l((f = Ee(f), f.type = "f", f)), m = Math.max(-8, Math.min(8, Math.floor(Vt(h) / 3))) * 3, b = Math.pow(10, -m), E = Xn[8 + m / 3];
    return function(z) {
      return d(b * z) + E;
    };
  }
  return {
    format: l,
    formatPrefix: c
  };
}
var pe, Xt, Er;
Fs({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function Fs(t) {
  return pe = zs(t), Xt = pe.format, Er = pe.formatPrefix, pe;
}
function Ys(t) {
  return Math.max(0, -Vt(Math.abs(t)));
}
function qs(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Vt(e) / 3))) * 3 - Vt(Math.abs(t)));
}
function Bs(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Vt(e) - Vt(t)) + 1;
}
function mn(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const Kn = Symbol("implicit");
function Tr() {
  var t = new An(), e = [], n = [], r = Kn;
  function i(a) {
    let o = t.get(a);
    if (o === void 0) {
      if (r !== Kn) return r;
      t.set(a, o = e.push(a) - 1);
    }
    return n[o % n.length];
  }
  return i.domain = function(a) {
    if (!arguments.length) return e.slice();
    e = [], t = new An();
    for (const o of a)
      t.has(o) || t.set(o, e.push(o) - 1);
    return i;
  }, i.range = function(a) {
    return arguments.length ? (n = Array.from(a), i) : n.slice();
  }, i.unknown = function(a) {
    return arguments.length ? (r = a, i) : r;
  }, i.copy = function() {
    return Tr(e, n).unknown(r);
  }, mn.apply(i, arguments), i;
}
function se() {
  var t = Tr().unknown(void 0), e = t.domain, n = t.range, r = 0, i = 1, a, o, s = !1, u = 0, l = 0, c = 0.5;
  delete t.unknown;
  function f() {
    var h = e().length, d = i < r, m = d ? i : r, b = d ? r : i;
    a = (b - m) / Math.max(1, h - u + l * 2), s && (a = Math.floor(a)), m += (b - m - a * (h - u)) * c, o = a * (1 - u), s && (m = Math.round(m), o = Math.round(o));
    var E = ei(h).map(function(z) {
      return m + a * z;
    });
    return n(d ? E.reverse() : E);
  }
  return t.domain = function(h) {
    return arguments.length ? (e(h), f()) : e();
  }, t.range = function(h) {
    return arguments.length ? ([r, i] = h, r = +r, i = +i, f()) : [r, i];
  }, t.rangeRound = function(h) {
    return [r, i] = h, r = +r, i = +i, s = !0, f();
  }, t.bandwidth = function() {
    return o;
  }, t.step = function() {
    return a;
  }, t.round = function(h) {
    return arguments.length ? (s = !!h, f()) : s;
  }, t.padding = function(h) {
    return arguments.length ? (u = Math.min(1, l = +h), f()) : u;
  }, t.paddingInner = function(h) {
    return arguments.length ? (u = Math.min(1, h), f()) : u;
  }, t.paddingOuter = function(h) {
    return arguments.length ? (l = +h, f()) : l;
  }, t.align = function(h) {
    return arguments.length ? (c = Math.max(0, Math.min(1, h)), f()) : c;
  }, t.copy = function() {
    return se(e(), [r, i]).round(s).paddingInner(u).paddingOuter(l).align(c);
  }, mn.apply(f(), arguments);
}
function Vs(t) {
  return function() {
    return t;
  };
}
function Xs(t) {
  return +t;
}
var Wn = [0, 1];
function zt(t) {
  return t;
}
function on(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Vs(isNaN(e) ? NaN : 0.5);
}
function Ks(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(r) {
    return Math.max(t, Math.min(e, r));
  };
}
function Ws(t, e, n) {
  var r = t[0], i = t[1], a = e[0], o = e[1];
  return i < r ? (r = on(i, r), a = n(o, a)) : (r = on(r, i), a = n(a, o)), function(s) {
    return a(r(s));
  };
}
function Us(t, e, n) {
  var r = Math.min(t.length, e.length) - 1, i = new Array(r), a = new Array(r), o = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++o < r; )
    i[o] = on(t[o], t[o + 1]), a[o] = n(e[o], e[o + 1]);
  return function(s) {
    var u = Xr(t, s, 1, r) - 1;
    return a[u](i[u](s));
  };
}
function Js(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Gs() {
  var t = Wn, e = Wn, n = Rt, r, i, a, o = zt, s, u, l;
  function c() {
    var h = Math.min(t.length, e.length);
    return o !== zt && (o = Ks(t[0], t[h - 1])), s = h > 2 ? Us : Ws, u = l = null, f;
  }
  function f(h) {
    return h == null || isNaN(h = +h) ? a : (u || (u = s(t.map(r), e, n)))(r(o(h)));
  }
  return f.invert = function(h) {
    return o(i((l || (l = s(e, t.map(r), mt)))(h)));
  }, f.domain = function(h) {
    return arguments.length ? (t = Array.from(h, Xs), c()) : t.slice();
  }, f.range = function(h) {
    return arguments.length ? (e = Array.from(h), c()) : e.slice();
  }, f.rangeRound = function(h) {
    return e = Array.from(h), n = go, c();
  }, f.clamp = function(h) {
    return arguments.length ? (o = h ? !0 : zt, c()) : o !== zt;
  }, f.interpolate = function(h) {
    return arguments.length ? (n = h, c()) : n;
  }, f.unknown = function(h) {
    return arguments.length ? (a = h, f) : a;
  }, function(h, d) {
    return r = h, i = d, c();
  };
}
function Zs() {
  return Gs()(zt, zt);
}
function Qs(t, e, n, r) {
  var i = ti(t, e, n), a;
  switch (r = Ee(r ?? ",f"), r.type) {
    case "s": {
      var o = Math.max(Math.abs(t), Math.abs(e));
      return r.precision == null && !isNaN(a = qs(i, o)) && (r.precision = a), Er(r, o);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(a = Bs(i, Math.max(Math.abs(t), Math.abs(e)))) && (r.precision = a - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(a = Ys(i)) && (r.precision = a - (r.type === "%") * 2);
      break;
    }
  }
  return Xt(r);
}
function tl(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var r = e();
    return Qr(r[0], r[r.length - 1], n ?? 10);
  }, t.tickFormat = function(n, r) {
    var i = e();
    return Qs(i[0], i[i.length - 1], n ?? 10, r);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var r = e(), i = 0, a = r.length - 1, o = r[i], s = r[a], u, l, c = 10;
    for (s < o && (l = o, o = s, s = l, l = i, i = a, a = l); c-- > 0; ) {
      if (l = We(o, s, n), l === u)
        return r[i] = o, r[a] = s, e(r);
      if (l > 0)
        o = Math.floor(o / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        o = Math.ceil(o * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function le() {
  var t = Zs();
  return t.copy = function() {
    return Js(t, le());
  }, mn.apply(t, arguments), tl(t);
}
function ce(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), r = 0; r < e; ) n[r] = "#" + t.slice(r * 6, ++r * 6);
  return n;
}
const Cr = ce("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Ir = ce("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"), Lr = ce("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"), jr = ce("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"), Pr = ce("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function lt(t) {
  return function() {
    return t;
  };
}
const Un = Math.abs, ht = Math.atan2, Lt = Math.cos, el = Math.max, Xe = Math.min, _t = Math.sin, Ft = Math.sqrt, dt = 1e-12, ie = Math.PI, Te = ie / 2, _e = 2 * ie;
function nl(t) {
  return t > 1 ? 0 : t < -1 ? ie : Math.acos(t);
}
function Jn(t) {
  return t >= 1 ? Te : t <= -1 ? -Te : Math.asin(t);
}
function rl(t) {
  let e = 3;
  return t.digits = function(n) {
    if (!arguments.length) return e;
    if (n == null)
      e = null;
    else {
      const r = Math.floor(n);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${n}`);
      e = r;
    }
    return t;
  }, () => new Is(e);
}
function il(t) {
  return t.innerRadius;
}
function al(t) {
  return t.outerRadius;
}
function ol(t) {
  return t.startAngle;
}
function sl(t) {
  return t.endAngle;
}
function ll(t) {
  return t && t.padAngle;
}
function cl(t, e, n, r, i, a, o, s) {
  var u = n - t, l = r - e, c = o - i, f = s - a, h = f * u - c * l;
  if (!(h * h < dt))
    return h = (c * (e - a) - f * (t - i)) / h, [t + h * u, e + h * l];
}
function ye(t, e, n, r, i, a, o) {
  var s = t - n, u = e - r, l = (o ? a : -a) / Ft(s * s + u * u), c = l * u, f = -l * s, h = t + c, d = e + f, m = n + c, b = r + f, E = (h + m) / 2, z = (d + b) / 2, R = m - h, M = b - d, x = R * R + M * M, A = i - a, C = h * b - m * d, j = (M < 0 ? -1 : 1) * Ft(el(0, A * A * x - C * C)), X = (C * M - R * j) / x, Z = (-C * R - M * j) / x, B = (C * M + R * j) / x, v = (-C * R + M * j) / x, w = X - E, y = Z - z, D = B - E, Y = v - z;
  return w * w + y * y > D * D + Y * Y && (X = B, Z = v), {
    cx: X,
    cy: Z,
    x01: -c,
    y01: -f,
    x11: X * (i / A - 1),
    y11: Z * (i / A - 1)
  };
}
function Gn() {
  var t = il, e = al, n = lt(0), r = null, i = ol, a = sl, o = ll, s = null, u = rl(l);
  function l() {
    var c, f, h = +t.apply(this, arguments), d = +e.apply(this, arguments), m = i.apply(this, arguments) - Te, b = a.apply(this, arguments) - Te, E = Un(b - m), z = b > m;
    if (s || (s = c = u()), d < h && (f = d, d = h, h = f), !(d > dt)) s.moveTo(0, 0);
    else if (E > _e - dt)
      s.moveTo(d * Lt(m), d * _t(m)), s.arc(0, 0, d, m, b, !z), h > dt && (s.moveTo(h * Lt(b), h * _t(b)), s.arc(0, 0, h, b, m, z));
    else {
      var R = m, M = b, x = m, A = b, C = E, j = E, X = o.apply(this, arguments) / 2, Z = X > dt && (r ? +r.apply(this, arguments) : Ft(h * h + d * d)), B = Xe(Un(d - h) / 2, +n.apply(this, arguments)), v = B, w = B, y, D;
      if (Z > dt) {
        var Y = Jn(Z / h * _t(X)), k = Jn(Z / d * _t(X));
        (C -= Y * 2) > dt ? (Y *= z ? 1 : -1, x += Y, A -= Y) : (C = 0, x = A = (m + b) / 2), (j -= k * 2) > dt ? (k *= z ? 1 : -1, R += k, M -= k) : (j = 0, R = M = (m + b) / 2);
      }
      var $ = d * Lt(R), I = d * _t(R), V = h * Lt(A), it = h * _t(A);
      if (B > dt) {
        var g = d * Lt(M), O = d * _t(M), K = h * Lt(x), L = h * _t(x), at;
        if (E < ie)
          if (at = cl($, I, K, L, g, O, V, it)) {
            var rt = $ - at[0], U = I - at[1], et = g - at[0], ft = O - at[1], N = 1 / _t(nl((rt * et + U * ft) / (Ft(rt * rt + U * U) * Ft(et * et + ft * ft))) / 2), Q = Ft(at[0] * at[0] + at[1] * at[1]);
            v = Xe(B, (h - Q) / (N - 1)), w = Xe(B, (d - Q) / (N + 1));
          } else
            v = w = 0;
      }
      j > dt ? w > dt ? (y = ye(K, L, $, I, d, w, z), D = ye(g, O, V, it, d, w, z), s.moveTo(y.cx + y.x01, y.cy + y.y01), w < B ? s.arc(y.cx, y.cy, w, ht(y.y01, y.x01), ht(D.y01, D.x01), !z) : (s.arc(y.cx, y.cy, w, ht(y.y01, y.x01), ht(y.y11, y.x11), !z), s.arc(0, 0, d, ht(y.cy + y.y11, y.cx + y.x11), ht(D.cy + D.y11, D.cx + D.x11), !z), s.arc(D.cx, D.cy, w, ht(D.y11, D.x11), ht(D.y01, D.x01), !z))) : (s.moveTo($, I), s.arc(0, 0, d, R, M, !z)) : s.moveTo($, I), !(h > dt) || !(C > dt) ? s.lineTo(V, it) : v > dt ? (y = ye(V, it, g, O, h, -v, z), D = ye($, I, K, L, h, -v, z), s.lineTo(y.cx + y.x01, y.cy + y.y01), v < B ? s.arc(y.cx, y.cy, v, ht(y.y01, y.x01), ht(D.y01, D.x01), !z) : (s.arc(y.cx, y.cy, v, ht(y.y01, y.x01), ht(y.y11, y.x11), !z), s.arc(0, 0, h, ht(y.cy + y.y11, y.cx + y.x11), ht(D.cy + D.y11, D.cx + D.x11), z), s.arc(D.cx, D.cy, v, ht(D.y11, D.x11), ht(D.y01, D.x01), !z))) : s.arc(0, 0, h, A, x, z);
    }
    if (s.closePath(), c) return s = null, c + "" || null;
  }
  return l.centroid = function() {
    var c = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2, f = (+i.apply(this, arguments) + +a.apply(this, arguments)) / 2 - ie / 2;
    return [Lt(f) * c, _t(f) * c];
  }, l.innerRadius = function(c) {
    return arguments.length ? (t = typeof c == "function" ? c : lt(+c), l) : t;
  }, l.outerRadius = function(c) {
    return arguments.length ? (e = typeof c == "function" ? c : lt(+c), l) : e;
  }, l.cornerRadius = function(c) {
    return arguments.length ? (n = typeof c == "function" ? c : lt(+c), l) : n;
  }, l.padRadius = function(c) {
    return arguments.length ? (r = c == null ? null : typeof c == "function" ? c : lt(+c), l) : r;
  }, l.startAngle = function(c) {
    return arguments.length ? (i = typeof c == "function" ? c : lt(+c), l) : i;
  }, l.endAngle = function(c) {
    return arguments.length ? (a = typeof c == "function" ? c : lt(+c), l) : a;
  }, l.padAngle = function(c) {
    return arguments.length ? (o = typeof c == "function" ? c : lt(+c), l) : o;
  }, l.context = function(c) {
    return arguments.length ? (s = c ?? null, l) : s;
  }, l;
}
function Hr(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function ul(t, e) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function fl(t) {
  return t;
}
function hl() {
  var t = fl, e = ul, n = null, r = lt(0), i = lt(_e), a = lt(0);
  function o(s) {
    var u, l = (s = Hr(s)).length, c, f, h = 0, d = new Array(l), m = new Array(l), b = +r.apply(this, arguments), E = Math.min(_e, Math.max(-_e, i.apply(this, arguments) - b)), z, R = Math.min(Math.abs(E) / l, a.apply(this, arguments)), M = R * (E < 0 ? -1 : 1), x;
    for (u = 0; u < l; ++u)
      (x = m[d[u] = u] = +t(s[u], u, s)) > 0 && (h += x);
    for (e != null ? d.sort(function(A, C) {
      return e(m[A], m[C]);
    }) : n != null && d.sort(function(A, C) {
      return n(s[A], s[C]);
    }), u = 0, f = h ? (E - l * M) / h : 0; u < l; ++u, b = z)
      c = d[u], x = m[c], z = b + (x > 0 ? x * f : 0) + M, m[c] = {
        data: s[c],
        index: u,
        value: x,
        startAngle: b,
        endAngle: z,
        padAngle: R
      };
    return m;
  }
  return o.value = function(s) {
    return arguments.length ? (t = typeof s == "function" ? s : lt(+s), o) : t;
  }, o.sortValues = function(s) {
    return arguments.length ? (e = s, n = null, o) : e;
  }, o.sort = function(s) {
    return arguments.length ? (n = s, e = null, o) : n;
  }, o.startAngle = function(s) {
    return arguments.length ? (r = typeof s == "function" ? s : lt(+s), o) : r;
  }, o.endAngle = function(s) {
    return arguments.length ? (i = typeof s == "function" ? s : lt(+s), o) : i;
  }, o.padAngle = function(s) {
    return arguments.length ? (a = typeof s == "function" ? s : lt(+s), o) : a;
  }, o;
}
function sn(t, e) {
  if ((o = t.length) > 1)
    for (var n = 1, r, i, a = t[e[0]], o, s = a.length; n < o; ++n)
      for (i = a, a = t[e[n]], r = 0; r < s; ++r)
        a[r][1] += a[r][0] = isNaN(i[r][1]) ? i[r][0] : i[r][1];
}
function ln(t) {
  for (var e = t.length, n = new Array(e); --e >= 0; ) n[e] = e;
  return n;
}
function dl(t, e) {
  return t[e];
}
function gl(t) {
  const e = [];
  return e.key = t, e;
}
function Ce() {
  var t = lt([]), e = ln, n = sn, r = dl;
  function i(a) {
    var o = Array.from(t.apply(this, arguments), gl), s, u = o.length, l = -1, c;
    for (const f of a)
      for (s = 0, ++l; s < u; ++s)
        (o[s][l] = [0, +r(f, o[s].key, l, a)]).data = f;
    for (s = 0, c = Hr(e(o)); s < u; ++s)
      o[c[s]].index = s;
    return n(o, c), o;
  }
  return i.keys = function(a) {
    return arguments.length ? (t = typeof a == "function" ? a : lt(Array.from(a)), i) : t;
  }, i.value = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : lt(+a), i) : r;
  }, i.order = function(a) {
    return arguments.length ? (e = a == null ? ln : typeof a == "function" ? a : lt(Array.from(a)), i) : e;
  }, i.offset = function(a) {
    return arguments.length ? (n = a ?? sn, i) : n;
  }, i;
}
function pl(t, e) {
  if ((r = t.length) > 0) {
    for (var n, r, i = 0, a = t[0].length, o; i < a; ++i) {
      for (o = n = 0; n < r; ++n) o += t[n][i][1] || 0;
      if (o) for (n = 0; n < r; ++n) t[n][i][1] /= o;
    }
    sn(t, e);
  }
}
function Qt(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
Qt.prototype = {
  constructor: Qt,
  scale: function(t) {
    return t === 1 ? this : new Qt(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new Qt(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
Qt.prototype;
const Mt = (t, e) => {
  const n = Ie(null);
  return kt(() => {
    e !== void 0 && n.current && t(yt(n.current));
  }, e === null ? void 0 : e), n;
};
function ue() {
  const t = Ie(null), [e, n] = st({ width: 0, height: 0 });
  return kt(() => {
    const r = t.current;
    if (!r || !r.parentElement) return;
    const i = r.parentElement, a = () => {
      const s = i.getBoundingClientRect();
      n({ width: s.width, height: s.height });
    };
    a();
    const o = new ResizeObserver(() => a());
    return o.observe(i), () => o.disconnect();
  }, []), [t, e];
}
const wt = (t) => {
  try {
    return JSON.parse(JSON.stringify(t));
  } catch {
    return console.log("error when cloning object : "), Array.isArray(t) ? [] : null;
  }
}, Zn = [
  "#bef264",
  "#a3e635",
  "#84cc16",
  "#86efac",
  "#4ade80",
  "#22c55e",
  "#6ee7b7",
  "#34d399",
  "#10b981",
  /* non - tailwind */
  "#34D399",
  "#5eead4",
  "#2dd4bf",
  "#14b8a6",
  "#67e8f9",
  "#22d3ee",
  "#06b6d4",
  "#7dd3fc",
  "#38bdf8",
  "#0ea5e9",
  "#93c5fd",
  "#60a5fa",
  "#3b82f6",
  "#a5b4fc",
  "#818cf8",
  "#6366f1",
  "#c4b5fd",
  "#a78bfa",
  "#8b5cf6",
  "#d8b4fe",
  "#a855f7",
  "#a855f7",
  "#f9a8d4",
  "#f472b6",
  "#ec4899",
  "#fda4af",
  "#fb7185",
  "#f43f5e",
  "#fca5a5",
  "#f87171",
  "#ef4444",
  "#fdba74",
  "#fb923c",
  "#f97316",
  "#fcd34d",
  "#fbbf24",
  "#f59e0b",
  "#fde047",
  "#facc15",
  "#eab308"
];
ni([
  ...Lr,
  ...Ir,
  ...jr,
  ...Pr,
  ...Cr
]);
const Qn = [
  ...Lr,
  ...Ir,
  ...jr,
  ...Pr,
  ...Cr
], ut = (t, e = !0) => {
  const n = e ? [...Zn, ...Qn] : [...Qn, ...Zn];
  return t < n.length ? n[t] : n[t % n.length];
}, Tt = (t) => Xt(",")(t);
function yl(t, e, n) {
  const { top: r } = e.getBoundingClientRect(), i = t.clientY - r;
  return {
    pixelY: i,
    dataY: n.invert(i)
  };
}
const G = {
  "controls-container": "_controls-container_1fjrs_1",
  "fill-container": "_fill-container_1fjrs_25",
  "controls-label": "_controls-label_1fjrs_39",
  "controls-checkbox": "_controls-checkbox_1fjrs_65",
  "chart-svg": "_chart-svg_1fjrs_79"
};
function Bl({ data: t, colorIdx: e = 9 }) {
  const [n, r] = ue(), { width: i, height: a } = r, [o, s] = st(!1), u = document.getElementById("UI-controls"), l = /* @__PURE__ */ H.jsx(
    "div",
    {
      id: "controls",
      className: `${G["controls-container"]} ${u ? G["fill-container"] : ""}`,
      children: /* @__PURE__ */ H.jsxs("label", { className: G["controls-label"], children: [
        /* @__PURE__ */ H.jsx(
          "input",
          {
            type: "checkbox",
            className: G["controls-checkbox"],
            checked: o,
            onChange: (h) => s(h.target.checked)
          }
        ),
        "Sort"
      ] })
    }
  ), c = 1e3, f = Mt((h) => {
    if (i === 0 || a === 0) return;
    const d = { top: 20, right: 20, bottom: 30, left: 25 }, m = o ? wt(t).sort((x, A) => A.value - x.value) : wt(t), b = h.select(".plot-area"), E = se().domain(m.map((x) => x.label)).rangeRound([d.left, i - d.right]).padding(0.1), z = je(E).tickValues(E.domain()).scale(E).tickSizeOuter(0);
    b.select(".x-axis").attr("transform", `translate(0, ${a - d.bottom})`).transition().duration(c).call(z);
    const R = le().domain([0, Ct(m, (x) => x.value) ?? 0]).rangeRound([a - d.bottom, d.top]), M = Pe(R).ticks(null, "s");
    b.select(".y-axis").attr("transform", `translate(${d.left}, 0)`).transition().duration(c).call(M), b.selectAll(".bar").data(m, (x) => x.label).join(
      (x) => x.append("rect").attr("class", "bar").attr("x", function(A) {
        return E(A.label) ?? 0;
      }).attr("width", E.bandwidth()).attr("y", R(0)).attr("height", 0).attr("fill", ut(e)).transition().duration(c).attr("y", function(A) {
        return R(A.value);
      }).attr("height", function(A) {
        return R(0) - R(A.value);
      }),
      (x) => x.transition().duration(c).attr("x", function(C) {
        return E(C.label) ?? 0;
      }).attr("width", E.bandwidth()).attr("y", function(C) {
        return R(C.value);
      }).attr("height", function(C) {
        return R(0) - R(C.value);
      }),
      (x) => x.transition().duration(c).attr("fill", "#94a3b8").attr("height", 0).attr("y", a).style("opacity", 0).remove()
    ).on(
      "mouseover",
      (x, A) => {
        b.selectAll("rect.bar").filter((C) => C.label === A.label).style("stroke", "#71717a").style("stroke-width", 1), yt(".x-axis").selectAll("text").filter((C) => C === A.label).style("font-weight", "bold");
      }
    ).on("mousemove", (x, A) => {
    }).on(
      "mouseout",
      (x, A) => {
        b.selectAll("rect.bar").filter((C) => C.label === A.label).style("stroke", "none").style("stroke-width", 0), yt(".x-axis").selectAll("text").filter((C) => C === A.label).style("font-weight", "normal");
      }
    ).transition().duration(c).attr("x", function(x) {
      return E(x.label) ?? 0;
    }).attr("width", E.bandwidth()).attr("y", function(x) {
      return R(x.value);
    }).attr("height", function(x) {
      return R(0) - R(x.value);
    });
  }, [t, i, a, o]);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: n,
      style: { width: i, height: a, position: "relative", display: "flex", flexDirection: "column" },
      children: [
        u && Le(l, u),
        /* @__PURE__ */ H.jsx(
          "svg",
          {
            ref: f,
            className: `${G["chart-svg"]} ${G["fill-container"]}`,
            viewBox: `0 0 ${i} ${a}`,
            children: /* @__PURE__ */ H.jsxs("g", { className: "plot-area", children: [
              /* @__PURE__ */ H.jsx("g", { className: "y-axis" }),
              /* @__PURE__ */ H.jsx("g", { className: "x-axis" })
            ] })
          }
        ),
        !u && /* @__PURE__ */ H.jsxs(
          "label",
          {
            className: G["controls-label"],
            style: { position: "absolute", right: "12px", top: "6px" },
            children: [
              /* @__PURE__ */ H.jsx(
                "input",
                {
                  type: "checkbox",
                  className: G["controls-checkbox"],
                  checked: o,
                  onChange: (h) => s(h.target.checked)
                }
              ),
              "Sort"
            ]
          }
        )
      ]
    }
  );
}
function ze() {
  const t = Ie(null), [e, n] = st({ width: 0, height: 0 });
  return kt(() => {
    const r = t.current;
    if (!r) return;
    const i = new ResizeObserver(([a]) => {
      a?.contentRect && n({
        width: a.contentRect.width,
        height: a.contentRect.height
      });
    });
    return i.observe(r, { box: "border-box" }), n({
      width: r.offsetWidth,
      height: r.offsetHeight
    }), () => {
      i.disconnect();
    };
  }, []), [t, e];
}
const Fe = (t) => {
  const e = Ie([]);
  return kt(() => {
    const n = e.current;
    if (t.length === 0) {
      e.current = [];
      return;
    }
    const r = t.some((a) => n.includes(a)), i = t.filter((a) => !n.includes(a));
    if (!r) {
      e.current = [...t];
      return;
    }
    if (i.length > 0) {
      e.current = [...n, ...i];
      return;
    }
  }, [t]), e;
}, ml = "_legend_56y3j_1", xl = "_pieSlice_56y3j_41", vl = "_pieSliceNotHovered_56y3j_51", _l = "_animateNotHovered_56y3j_1", bl = "_pieSliceExit_56y3j_75", wl = "_animateHide_56y3j_1", kl = "_pieLabelEnter_56y3j_93", Al = "_showText_56y3j_1", $l = "_pieLabelUnhover_56y3j_117", Nl = "_pieLabelUpdate_56y3j_147", Sl = "_pieLabelExit_56y3j_161", Nt = {
  legend: ml,
  "legend-active": "_legend-active_56y3j_1",
  "legend-rect": "_legend-rect_56y3j_21",
  pieSlice: xl,
  pieSliceNotHovered: vl,
  animateNotHovered: _l,
  pieSliceExit: bl,
  animateHide: wl,
  pieLabelEnter: kl,
  showText: Al,
  pieLabelUnhover: $l,
  pieLabelUpdate: Nl,
  pieLabelExit: Sl
};
function Vl({ data: t, innerRadius: e = 0, sortWithLegends: n = !1 }) {
  const [r, i] = ue(), { width: a, height: o } = i, [s, u] = ze(), { width: l, height: c } = u, f = Fe(t.map((C) => C.label)), [h, d] = st([]), [m, b] = st(!1), [E, z] = st(""), R = 750, M = Mt((C) => {
    const X = (n && m ? wt(t).sort((B, v) => B.value - v.value) : t).map((B) => B.label);
    C.selectAll(".legend-item").data([...X], (B) => B).join(
      (B) => {
        const v = B.append("div").attr("class", function(w) {
          return `${Nt[w === E ? "legend-active" : "legend"]} legend-item`;
        }).style("left", "-10px").style("top", function(w, y) {
          return `${y * 20 + 10}px`;
        }).style("opacity", 0);
        return v.append("div").attr("class", `rect ${Nt["legend-rect"]}`).style("background-color", (w) => ut(f.current.findIndex((y) => y === w))), v.append("span").style("color", (w) => "#333").text((w) => w), v.transition().duration(R).style("left", "6px").style("opacity", 1), v;
      },
      (B) => (B.attr("class", (v) => `    
                                ${Nt[v === E ? "legend-active" : "legend"]} legend-item`).transition().duration(R).style("top", function(v, w) {
        return `${w * 20 + 10}px`;
      }).style("left", "6px").style("opacity", 1).select("div.rect").attr("class", `rect ${Nt["legend-rect"]}`).style("background-color", (v) => ut(f.current.findIndex((w) => w === v))), B.select("span").style("color", (v) => "#333").text((v) => v), B),
      (B) => B.transition().duration(R).style("opacity", 0).style("left", "30px").remove()
    ).on("mouseover", (B, v) => {
      z(v);
    }).on("mouseout", () => {
      z("");
    });
  }, [t, l, c, E, m, n]), x = Mt((C) => {
    if (l === 0 || c === 0) return;
    const j = { x: l / 2, y: c / 2 }, X = { top: 10, right: 20, bottom: 10, left: 20 }, Z = t, B = l - (X.left + X.right), v = c - (X.top + X.bottom), w = Math.min(B, v) / 2, y = Z.reduce((N, Q) => N + Q.value, 0), D = C.select(".plot-area").attr("transform", "translate(" + j.x + "," + j.y + ")"), Y = hl().value(function(N) {
      return N.value;
    }).sort(function(N, Q) {
      return m ? te(N.value, Q.value) : 0;
    }), k = wt(Z), $ = Y(k), I = wt(k);
    d(Y(I));
    let V = I.length > k.length;
    const it = h.map((N) => N.data.label), g = $.map((N) => N.data.label);
    it.every((N) => V ? !1 : g.includes(N) ? !0 : (V = !0, !1));
    const O = h.length === 0, L = Gn().innerRadius(e).outerRadius(w - 12), at = Gn().innerRadius(e).outerRadius(w), rt = (N, Q) => {
      const nt = Rt(
        Q === "exit" ? N.endAngle : N.startAngle,
        Q === "exit" ? N.startAngle : N.endAngle
      ), ot = N.data.label === E;
      return function(P) {
        return N.endAngle = nt(P), ot ? at(N) || "" : L(N) || "";
      };
    };
    D.selectAll("path").data($, function(N) {
      return N.data.label;
    }).join(
      (N) => {
        const Q = N.append("path").attr("class", Nt.pieSlice).attr("fill", function(nt) {
          const ot = f.current.findIndex((P) => P === nt.data.label);
          return ut(ot);
        });
        return Q.transition().duration(R).delay(O ? 0 : R).attr("d", L).attrTween("d", function(nt) {
          if (!O)
            return rt(nt, "not exit");
          const ot = Rt(0, nt.startAngle), P = Rt(0, nt.endAngle), q = nt.data.label === E;
          return function(F) {
            return nt.startAngle = ot(F), nt.endAngle = P(F), q ? at(nt) : L(nt);
          };
        }), Q;
      },
      (N) => {
        const Q = N;
        return N.transition().duration(R).attr("fill", function(nt, ot) {
          const P = f.current.findIndex((q) => q === nt.data.label);
          return ut(P);
        }).attrTween("d", function(nt) {
          const ot = h.find((p) => p.data.label === nt.data.label), P = ot && ot.startAngle ? ot.startAngle : 0, q = Rt(P, nt.startAngle), F = ot && ot.endAngle ? ot.endAngle : 0, J = Rt(F, nt.endAngle), T = nt.data.label === E;
          return function(p) {
            return nt.startAngle = q(p), nt.endAngle = J(p), T ? at(nt) || "" : L(nt) || "";
          };
        }), Q;
      },
      (N) => N.attr("class", Nt.pieSliceExit).transition().duration(R).attrTween("d", function(Q) {
        return rt(Q, "exit");
      }).remove()
    ).on("mouseover", function(N, Q) {
      z(Q.data.label);
    }).on("mouseout", () => {
      z("");
    });
    const et = (N) => Z.length === 1 ? "translate(0, 0)" : `translate(${L.centroid(N)})`, ft = (N) => {
      const Q = N.value / y;
      return Xt(".1%")(Q);
    };
    D.selectAll("text").data($, function(N) {
      return N.data.label;
    }).join(
      (N) => {
        const Q = N.append("text").text(ft).attr("class", Nt.pieLabelEnter);
        return Q.merge(Q).transition().duration(R).delay(
          R
          /* + exitDelay*/
        ).attr("transform", et), Q;
      },
      (N) => {
        const Q = N.text(ft);
        return N.merge(Q).attr("class", Nt.pieLabelUpdate).transition().duration(E !== "" ? 250 : R).style("opacity", function(nt) {
          const ot = E === nt.data.label;
          return E === "" || ot ? 1 : 0;
        }).attr("transform", et), Q;
      },
      (N) => N.transition().duration(R / 2).attr("class", Nt.pieLabelExit).remove()
    );
  }, [t, e, l, c, m, E]), A = a > o;
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: r,
      style: {
        width: a,
        height: o,
        position: "relative",
        display: "flex",
        flexDirection: A ? "row" : "column",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ H.jsx(
          "div",
          {
            ref: s,
            style: {
              flex: 1,
              position: "relative",
              display: "flex"
            },
            children: /* @__PURE__ */ H.jsx(
              "svg",
              {
                ref: x,
                className: `${G["chart-svg"]} ${G["fill-container"]}`,
                viewBox: `0 0 ${l} ${c}`,
                children: /* @__PURE__ */ H.jsx("g", { className: "plot-area" })
              }
            )
          }
        ),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            style: {
              width: A ? "180px" : "100%",
              height: A ? "100%" : "180px",
              flexShrink: 0,
              overflowY: "auto",
              background: "rgba(0,0,0,0.03)",
              borderLeft: A ? "1px solid #ddd" : "none",
              borderTop: A ? "none" : "1px solid #ddd",
              padding: "0px"
            },
            children: /* @__PURE__ */ H.jsx(
              "div",
              {
                ref: M,
                className: "legends-content",
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                  padding: "8px 8px 16px 8px",
                  boxSizing: "border-box",
                  position: "relative"
                }
              }
            )
          }
        ),
        /* @__PURE__ */ H.jsxs(
          "label",
          {
            className: G["controls-label"],
            style: { position: "absolute", left: "12px", top: "6px" },
            children: [
              /* @__PURE__ */ H.jsx(
                "input",
                {
                  type: "checkbox",
                  className: G["controls-checkbox"],
                  checked: m,
                  onChange: (C) => b(C.target.checked)
                }
              ),
              "Sort"
            ]
          }
        )
      ]
    }
  );
}
const Ml = "_tooltip_4lu3m_3", Rl = "_title_4lu3m_167", Et = {
  tooltip: Ml,
  "tooltip--arrow-up": "_tooltip--arrow-up_4lu3m_73",
  "tooltip--arrow-down": "_tooltip--arrow-down_4lu3m_101",
  title: Rl,
  "text-small": "_text-small_4lu3m_213",
  "right-label": "_right-label_4lu3m_225"
}, xn = ({ pCount: t }) => /* @__PURE__ */ H.jsxs("div", { id: "tooltip", className: `${Et.tooltip}`, children: [
  !t && /* @__PURE__ */ H.jsx("p", { className: `${Et["text-small"]}` }),
  t === 3 && /* @__PURE__ */ H.jsxs(H.Fragment, { children: [
    /* @__PURE__ */ H.jsx("p", { className: `title ${Et.title}` }),
    /* @__PURE__ */ H.jsx("p", { className: `top-label ${Et["right-label"]}` }),
    /* @__PURE__ */ H.jsx("p", { className: `bottom-label ${Et["right-label"]}` })
  ] })
] }), vn = (t, e = "tooltip") => t.select(`#${e}`).style("pointer-events", "none").style("position", "fixed").style("left", "auto").style("top", "auto").style("bottom", "auto").style("right", "auto").style("padding", "8px 5px").style("max-width", "200px").style("opacity", 0);
function _n(t, e) {
  const { e: n, svg: r, yScale: i } = e, { pixelY: a } = yl(n, r, i), o = a < 100 ? "bottom" : "top", { offsetWidth: s, offsetHeight: u } = t.node() || {}, l = document.documentElement.clientWidth, c = n.x - s / 2;
  let f = 0;
  if (c < 0)
    f = 0;
  else if (c + s > l) {
    const d = c + s - l;
    f = c - d;
  } else
    f = c;
  const h = o === "top" ? Et["tooltip--arrow-down"] : Et["tooltip--arrow-up"];
  t.attr("class", `${Et.tooltip} ${h}`).style("left", f + "px").style(
    "top",
    o === "top" ? n.y - (u + 20) + "px" : n.y + 30 + "px"
  );
}
const El = "_rect_ty2re_201", Tl = "_rectCard_ty2re_201", Cl = "_rectLegendNotHovered_ty2re_213", Il = "_legend_ty2re_1", Ll = "_rectHoveredLegend_ty2re_249", jl = "_rectCardLegendHovered_ty2re_259", Pl = "_rectLegendHovered_ty2re_271", Hl = "_rotatedAxisText_ty2re_283", Dl = "_axisText_ty2re_293", Ol = "_hoveredAxisText_ty2re_303", zl = "_yAxisLabel_ty2re_317", W = {
  "legends-container": "_legends-container_ty2re_1",
  "legend-container": "_legend-container_ty2re_61",
  "legend-container-active": "_legend-container-active_ty2re_61",
  "legend-container-inactive": "_legend-container-inactive_ty2re_61",
  "legend-rect": "_legend-rect_ty2re_105",
  "legend-label": "_legend-label_ty2re_121",
  rect: El,
  rectCard: Tl,
  rectLegendNotHovered: Cl,
  legend: Il,
  rectHoveredLegend: Ll,
  rectCardLegendHovered: jl,
  rectLegendHovered: Pl,
  rotatedAxisText: Hl,
  axisText: Dl,
  hoveredAxisText: Ol,
  yAxisLabel: zl
}, Ke = "#d1d5db";
function Xl({ stackData: t, focusOnPlot: e = !1 }) {
  const [n, r] = ue(), { width: i, height: a } = r, [o, s] = ze(), { height: u } = s, [l, c] = st(!1), [f, h] = st(["all"]), [d, m] = st(!1), [b, E] = st(""), [z, R] = st(!1), M = document.getElementById("UI-controls");
  kt(() => {
    h(["all"]), c(!0);
  }, [t]);
  const x = 750;
  kt(() => {
    let y;
    return l && (y = setTimeout(() => {
      c(!1);
    }, x + 250)), () => {
      clearTimeout(y);
    };
  }, [l]);
  const A = M ? a : a - u, C = [i, A, f], j = wt(t), X = j.length === 0 ? [] : Object.keys(j[0]).filter((y) => y !== "label" && y !== "total"), Z = Fe(X), B = Mt((y) => {
    if (l)
      return;
    const D = 80;
    y.selectAll(".legend-item").data([...X], (k) => k).join(
      (k) => {
        const $ = k.append("div").attr("class", function(I) {
          return `
                                ${f.includes(I) ? W[e ? "legend-container-active" : "legend-container-inactive"] : W["legend-container"]}
                                legend-item
                            `;
        }).style("left", (I, V) => `${V * D}px`).style("top", "-53px").style("opacity", 0);
        return $.append("div").attr("class", W["legend-rect"]).style("background", (I) => {
          if (!e && f.includes(I))
            return Ke;
          const V = Z.current.findIndex((it) => it === I);
          return ut(V);
        }), $.append("span").attr("class", W["legend-label"]).style("color", (I) => !e && f.includes(I) ? "#d1d5db" : "#333").text((I) => I), $.transition().duration(x).style("top", "0px").style("opacity", 1), $;
      },
      (k) => (k.attr(
        "class",
        ($) => `                                
                                ${f.includes($) ? W[e ? "legend-container-active" : "legend-container-inactive"] : W["legend-container"]}
                                legend-item`
      ).transition().duration(x).style("top", "0px").style("left", ($, I) => `${I * D}px`).style("opacity", 1).select(`.${W["legend-rect"]}`).style("background", ($) => {
        if (!e && f.includes($))
          return Ke;
        const I = Z.current.findIndex((V) => V === $);
        return ut(I);
      }), k.select(`.${W["legend-label"]}`).style("color", ($) => !e && f.includes($) ? Ke : "#333").text(($) => $), k),
      (k) => k.transition().duration(x).style("opacity", 0).style("top", "53px").remove()
    ).on("mouseover", function(k, $) {
      l || E($);
    }).on("mouseout", function(k, $) {
      l || (E(""), d && m(!1));
    }).on("click", (k, $) => {
      h((I) => {
        let V = [];
        return e ? I[0] === $ ? V = ["all"] : V = [$] : I.includes($) ? V = I.filter((it) => it !== $) : V = [...I, $], V;
      }), m(!0);
    });
  }, [...C, X, l]), v = /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: o,
      className: `${G["controls-container"]} ${M ? G["fill-container"] : ""}`,
      children: [
        /* @__PURE__ */ H.jsxs("label", { className: G["controls-label"], style: { paddingRight: "12px" }, children: [
          /* @__PURE__ */ H.jsx(
            "input",
            {
              type: "checkbox",
              className: G["controls-checkbox"],
              checked: z,
              onChange: (y) => R(y.target.checked)
            }
          ),
          "Sort"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            ref: B,
            id: "stacked-barchart-legends",
            className: `${W["legends-container"]}`
          }
        )
      ]
    }
  ), w = Mt((y) => {
    if (i === 0 || A === 0 || b !== "" && l) return;
    const D = { top: 20, right: 30, bottom: 30, left: 40 }, Y = i > 1024, k = e ? X : X.filter((p) => !f.includes(p));
    j.forEach((p) => {
      const S = k.reduce((_, tt) => {
        const ct = p[tt];
        return _ + (typeof ct == "number" ? ct : 0);
      }, 0);
      p.total = S;
    });
    const $ = j, I = z ? wt($).sort(function(p, S) {
      return e ? f[0] === "all" ? p.total - S.total : Number(p[f[0]]) - Number(S[f[0]]) : p.total - S.total;
    }) : $, V = i - D.left - D.right, it = A - D.top - D.bottom, g = y.select("svg"), O = g.node(), K = g.select(".plot-area").attr("transform", "translate(" + D.left + "," + D.top + ")"), L = vn(y), at = Y ? W.axisText : W.rotatedAxisText, rt = se().rangeRound([0, V]).paddingInner(0.1).align(0.2), U = I.map(function(p) {
      return p.label;
    });
    rt.domain(U);
    const et = [], ft = je(rt).tickValues(rt.domain()).scale(rt).tickSizeOuter(0);
    K.select(".x-axis").attr("transform", `translate(0,${it})`).transition().duration(x).call(ft).selectAll("text").style("cursor", "pointer").attr("dy", Y ? "1em" : ".20em").attr("dx", Y ? "0em" : "-.8em").attr("class", at);
    const N = le().range([it, 0]), Q = e ? f[0] === "all" ? Ct(j, (p) => p.total) : Ct(j, (p) => p[f[0]]) : Ct(j, (p) => p.total);
    N.domain([0, Q ?? 0]);
    const nt = Pe(N).ticks(null, "s");
    K.select(".y-axis").attr("transform", "translate(0,0)").style("color", "steelblue").transition().duration(x).call(nt);
    const P = Ce().keys(k)(I).map((p) => {
      const S = p.key, _ = p.map((tt) => {
        const ct = tt.data.label;
        return {
          ...tt,
          key: `${S} - ${ct}`,
          barKey: S
        };
      });
      return _.key = S, _;
    }), q = K.selectAll(".serie").data(P, (p) => p.key).join(
      (p) => p.append("g").attr("class", "serie").attr("fill", (_) => {
        const tt = Z.current.findIndex((It) => It === _.key);
        return ut(tt);
      }).style("opacity", (_) => {
        if (b !== "")
          if (e) {
            if (f[0] === "all")
              return _.key === b || d ? 1 : 0.25;
          } else
            return d ? 1 : _.key === b ? 0.25 : 1;
        return e ? f[0] === "all" || _.key === f[0] ? 1 : 0 : 1;
      }).style("pointer-events", (_) => e ? f[0] === "all" || _.key === f[0] ? "auto" : "none" : "auto"),
      (p) => p.transition().duration(x).attr("fill", (_) => {
        const tt = Z.current.findIndex((It) => It === _.key);
        return ut(tt);
      }).style("opacity", (_) => {
        if (b !== "")
          if (e) {
            if (f[0] === "all")
              return _.key === b || d ? 1 : 0.25;
          } else
            return d ? 1 : _.key === b ? 0.25 : 1;
        return e ? f[0] === "all" || _.key === f[0] ? 1 : 0 : 1;
      }).style("pointer-events", (_) => e ? f[0] === "all" || _.key === f[0] ? "auto" : "none" : "auto"),
      (p) => p.transition().duration(x).style("opacity", 0).attr("fill", "grey").selectAll("rect").attr("y", it).attr("height", 0).remove()
    ), F = (p) => {
      if (p.barKey === b)
        return "none";
      const S = rt.bandwidth(), _ = N(p[0]) - N(p[1]), tt = isNaN(_) || _ < 0 ? 0 : _;
      return k.indexOf(p.barKey) === k.length - 1 || p.barKey === f[0] ? `${S + tt} ${S} ${tt}` : `${tt} ${S}`;
    }, J = (p) => {
      const S = rt.bandwidth();
      return k.indexOf(p.barKey) === k.length - 1 || p.barKey === f[0] ? 0 : S * -1;
    }, T = (p) => b !== "" && b === p.barKey && e ? `rect ${W.rectLegendHovered}` : `rect ${W.rect}`;
    q.selectAll("rect").data(
      (p) => p,
      // each group binds its stacked points
      (p) => p.data.label
      // unique key per bar
    ).join(
      (p) => p.append("rect").attr("class", `rect ${G.rect}`).attr("x", (_) => rt(_.data.label + "") ?? 0).attr("width", rt.bandwidth()).attr("y", (_) => {
        if (!et.includes(_.data.label)) return it;
        const tt = f[0] === "all" ? N(_[1]) : _.key.startsWith(f[0]) ? it - (N(_[0]) - N(_[1])) : N(_[1]), ct = N(_[0]) - N(_[1]), It = isNaN(ct) || ct < 0 ? 0 : ct;
        return tt + It;
      }).attr("height", 0).attr("stroke-dasharray", F).attr("stroke-dashoffset", J).transition().duration(x).attr("x", (_) => rt(_.data.label + "") ?? 0).attr("width", rt.bandwidth()).attr("height", (_) => {
        const tt = N(_[0]) - N(_[1]);
        return isNaN(tt) || tt < 0 ? 0 : tt;
      }).attr("y", (_) => f[0] === "all" ? N(_[1]) : (
        /*d.key.startsWith(plotted)
        ?*/
        it - (N(_[0]) - N(_[1]))
      )),
      void 0,
      // no custom update handler
      (p) => p.transition().duration(x).attr("opacity", 0).attr("y", it).attr("height", 0).remove()
    ).attr("class", T).attr("stroke-dasharray", F).attr("stroke-dashoffset", J).transition().duration(x).attr("x", (p) => rt(p.data.label + "") ?? 0).attr("width", rt.bandwidth()).attr("height", (p) => {
      const S = N(p[0]) - N(p[1]);
      return isNaN(S) || S < 0 ? 0 : S;
    }).attr("y", (p) => f[0] === "all" ? N(p[1]) : (
      /*d.key.startsWith(plotted)
      ?*/
      it - (N(p[0]) - N(p[1]))
    )).on("start", function() {
    }).on("end", function() {
    }), q.selectAll("rect").on("mouseover", function(p, S) {
      yt(".x-axis").selectAll("text").filter((ct) => ct === S.data.label).attr("class", at + " " + W.hoveredAxisText), L.style("opacity", 1).select("p.title").text(S.data.label);
      const _ = S.data[S.barKey], { total: tt } = S.data;
      L.select("p.top-label").text(S.barKey + " : " + Tt(_)), L.select("p.bottom-label").text(f[0] === "all" ? `Total : ${Tt(tt)}` : "~");
    }).on("touch", function(p, S) {
      yt(".x-axis").selectAll("text").filter((_) => _ === S.data.label);
    }).on("mousemove", (p, S) => {
      _n(L, { e: p, svg: O, yScale: N });
    }).on("mouseout", function(p, S) {
      yt(".x-axis").selectAll("text").filter((_) => _ === S.data.label).attr("class", at), L.style("opacity", 0);
    });
  }, [...C, z, j, X, b, e, d, l]);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: n,
      style: { width: i, height: a, display: "flex", flexDirection: "column" },
      children: [
        M ? Le(v, M) : v,
        /* @__PURE__ */ H.jsxs(
          "div",
          {
            ref: w,
            className: `${G["fill-container"]}`,
            style: { display: "flex", flexDirection: "column" },
            children: [
              /* @__PURE__ */ H.jsx(
                "svg",
                {
                  className: `${G["chart-svg"]} ${G["fill-container"]}`,
                  viewBox: `0 0 ${i} ${A}`,
                  children: /* @__PURE__ */ H.jsxs("g", { className: "plot-area", children: [
                    /* @__PURE__ */ H.jsx("g", { className: "plot-rects" }),
                    /* @__PURE__ */ H.jsx("g", { className: "y-axis" }),
                    /* @__PURE__ */ H.jsx("g", { className: "x-axis" })
                  ] })
                }
              ),
              /* @__PURE__ */ H.jsx(xn, { pCount: 3 })
            ]
          }
        )
      ]
    }
  );
}
function Kl({ stackData: t }) {
  const [e, n] = ue(), { width: r, height: i } = n, [a, o] = ze(), { height: s } = o, [u, l] = st(!1), [c, f] = st("all"), [h, d] = st(!1), [m, b] = st(""), [E, z] = st(!1), R = document.getElementById("UI-controls");
  kt(() => {
    f("all"), l(!0);
  }, [t]);
  const M = 750;
  kt(() => {
    let w;
    return u && (w = setTimeout(() => {
      l(!1);
    }, M + 250)), () => {
      clearTimeout(w);
    };
  }, [u]);
  const x = R ? i : i - s, A = [r, x, c], C = wt(t), j = C.length === 0 ? [] : Object.keys(C[0]).filter((w) => w !== "label" && w !== "total"), X = Fe(j), Z = Mt((w) => {
    if (u) return;
    const y = 80;
    w.selectAll(".legend-item").data([...j], (Y) => Y).join(
      (Y) => {
        const k = Y.append("div").attr("class", function($) {
          return `                                
                                ${c === $ ? W["legend-container-active"] : W["legend-container"]} 
                                legend-item`;
        }).style("left", ($, I) => `${I * y}px`).style("top", "-53px").style("opacity", 0);
        return k.append("div").attr("class", W["legend-rect"]).style("background", ($) => {
          const I = X.current.findIndex((V) => V === $);
          return ut(I);
        }), k.append("span").attr("class", W["legend-label"]).text(($) => $), k.transition().duration(M).style("top", "0px").style("opacity", 1), k;
      },
      (Y) => (Y.attr(
        "class",
        (k) => `                                
                                ${c === k ? W["legend-container-active"] : W["legend-container"]} 
                                legend-item`
      ).transition().duration(M).style("top", "0px").style("left", (k, $) => `${$ * y}px`).style("opacity", 1).select(`.${W["legend-rect"]}`).style("background", (k) => {
        const $ = X.current.findIndex((I) => I === k);
        return ut($);
      }), Y.select(`.${W["legend-label"]}`).text((k) => k), Y),
      (Y) => Y.transition().duration(M).style("opacity", 0).style("top", "53px").remove().remove()
    ).on("click", (Y, k) => {
      f(($) => $ === k ? "all" : k);
    }).on("mouseover", (Y, k) => {
      b(k);
    }).on("mouseout", (Y, k) => {
      b("");
    });
  }, [...A, j, u]), B = /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: a,
      className: `${G["controls-container"]} ${R ? G["fill-container"] : ""}`,
      children: [
        /* @__PURE__ */ H.jsxs("label", { className: G["controls-label"], style: { paddingRight: "12px" }, children: [
          /* @__PURE__ */ H.jsx(
            "input",
            {
              type: "checkbox",
              className: G["controls-checkbox"],
              checked: E,
              onChange: (w) => z(w.target.checked)
            }
          ),
          "Sort"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            ref: Z,
            id: "stacked-barchart-legends",
            className: `${W["legends-container"]}`
          }
        )
      ]
    }
  ), v = Mt((w) => {
    if (r === 0 || x === 0 || m !== "" && u) return;
    const y = { top: 20, right: 30, bottom: 30, left: 40 }, D = r > 1024;
    C.forEach(function(P) {
      P.total = j.reduce((q, F) => {
        const J = P[F];
        return q + (typeof J == "number" ? J : Number(J));
      }, 0);
    });
    const Y = C, k = E ? wt(Y).sort(function(P, q) {
      return Number(P[c]) - Number(q[c]);
    }) : Y, $ = r - y.left - y.right, I = x - y.top - y.bottom, V = w.select("svg"), it = V.node(), g = V.select(".plot-area").attr("transform", "translate(" + y.left + "," + y.top + ")"), O = vn(w), K = D ? W.axisText : W.rotatedAxisText, L = se().rangeRound([0, $]).paddingInner(0.1).align(0.2), at = k.map(function(P) {
      return P.label;
    });
    L.domain(at);
    const rt = je(L).tickValues(L.domain()).scale(L).tickSizeOuter(0);
    g.select(".x-axis").attr("transform", `translate(0,${I})`).transition().duration(M).call(rt).selectAll("text").style("cursor", "pointer").attr("dy", D ? "1em" : ".20em").attr("dx", D ? "0em" : "-.8em").attr("class", K);
    const U = le().range([I, 0]), et = c === "all" ? Ct(
      C,
      (P) => Ct(
        Object.entries(P).filter(([q]) => q !== "total" && q !== "label").map(([, q]) => q)
        // value is number | string | undefined
      )
    ) : Ct(C, (P) => P[c]);
    U.domain([0, et ?? 0]);
    const ft = Pe(U).ticks(null, "s");
    g.select(".y-axis").attr("transform", "translate(0,0)").style("color", "steelblue").transition().duration(M).call(ft);
    const Q = Ce().keys(j)(k).map(
      (P) => {
        const q = P.key, F = P.map((J) => {
          const T = Object.keys(J.data).filter((p) => p !== "label" && p !== "total").map((p) => ({
            label: p,
            value: J.data[p]
          })).sort((p, S) => Number(p.value) - Number(S.value));
          return {
            ...J,
            key: `${q} - ${J.data.label}`,
            barKey: q,
            data: {
              ...J.data,
              sortedLayers: T.map((p) => p.label)
            }
          };
        });
        return F.key = q, F;
      }
    ), nt = (P) => m !== "" && m === P.barKey ? `rect ${W.rectLegendHovered}` : `rect ${W.rect}`;
    let ot = g.selectAll(".serie").data(Q, function(P) {
      return P.key;
    }).join(
      (P) => P.append("g").attr("class", "serie").attr("fill", function(F) {
        const J = X.current.findIndex((T) => T === F.key);
        return ut(J);
      }).style("opacity", (F) => c === "all" || F.key === c ? 1 : 0).style("pointer-events", (F) => c === "all" || F.key === c ? "auto" : "none"),
      (P) => P.transition().duration(M).attr("fill", function(F) {
        const J = X.current.findIndex((T) => T === F.key);
        return ut(J);
      }).style("opacity", (F) => c === "all" || F.key === c ? 1 : 0).style("pointer-events", (F) => c === "all" || F.key === c ? "auto" : "none"),
      (P) => P.transition().duration(M).style("opacity", 0).attr("fill", "grey").selectAll("rect").attr("y", I).attr("height", 0).remove()
    );
    ot.selectAll("rect").data(
      (P) => P,
      (P) => P.data.label
    ).join(
      (P) => {
        let q;
        return q = P.append("rect").attr("class", nt).attr("x", function(F) {
          const J = j.indexOf(F.barKey);
          return (L(F.data.label + "") ?? 0) + J * (L.bandwidth() / j.length);
        }).attr("width", function(F) {
          return c === "all" ? L.bandwidth() / j.length : L.bandwidth();
        }).attr("y", I).attr("height", 0).transition().duration(M).attr("x", function(F) {
          const J = L(F.data.label + "") ?? 0;
          if (c === "all") {
            const T = E ? F.data.sortedLayers : j, p = Array.isArray(T) && T.indexOf(F.barKey) || 0;
            return J + p * (L.bandwidth() / j.length);
          }
          return J;
        }).attr("width", function(F) {
          return c === "all" ? L.bandwidth() / j.length : L.bandwidth();
        }).attr("height", function(F) {
          const J = U(F[0]) - U(F[1]);
          return isNaN(J) || J < 0 ? 0 : J;
        }).attr("y", function(F) {
          return I - (U(F[0]) - U(F[1]));
        }), q;
      },
      void 0,
      (P) => P.transition().duration(M).attr("opacity", 0).attr("height", 0).attr("y", I).remove()
    ).attr("class", nt).transition().duration(M).attr("x", function(P) {
      const q = L(P.data.label + "") ?? 0;
      if (c === "all") {
        const F = E ? P.data.sortedLayers : j, J = Array.isArray(F) && F.indexOf(P.barKey) || 0;
        return q + J * (L.bandwidth() / j.length);
      }
      return q;
    }).attr("width", function(P) {
      return c === "all" ? L.bandwidth() / j.length : L.bandwidth();
    }).attr("height", function(P) {
      const q = U(P[0]) - U(P[1]);
      return isNaN(q) || q < 0 ? 0 : q;
    }).attr("y", function(P) {
      return I - (U(P[0]) - U(P[1]));
    }), ot.selectAll("rect").on("mouseover", function(P, q) {
      yt(".x-axis").selectAll("text").filter((p) => p === q.data.label).attr("class", K + " " + W.hoveredAxisText), O.style("opacity", 1).select("p.title").text(q.data.label);
      const F = q.data[q.barKey], { total: J } = q.data, T = F / J * 100;
      Xt(".1f")(T) + "", O.select("p.top-label").text(q.barKey + " : " + Tt(F)), O.select("p.bottom-label").text(
        c === "all" ? `Total : ${Tt(J)}` : "~"
      );
    }).on("touch", function(P, q) {
      yt(".x-axis").selectAll("text").filter((F) => F === q.data.label).attr("class", K);
    }).on("mousemove", (P, q) => {
      _n(O, { e: P, svg: it, yScale: U });
    }).on("mouseout", function(P, q) {
      yt(".x-axis").selectAll("text").filter((F) => F === q.data.label).attr("class", K), O.style("opacity", 0);
    });
  }, [...A, E, C, j, m, h, u]);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: e,
      style: { width: r, height: i, display: "flex", flexDirection: "column" },
      children: [
        R ? Le(B, R) : B,
        /* @__PURE__ */ H.jsxs(
          "div",
          {
            ref: v,
            className: `${G["fill-container"]}`,
            style: { display: "flex", flexDirection: "column" },
            children: [
              /* @__PURE__ */ H.jsx(
                "svg",
                {
                  className: `${G["chart-svg"]} ${G["fill-container"]}`,
                  viewBox: `0 0 ${r} ${x}`,
                  children: /* @__PURE__ */ H.jsxs("g", { className: "plot-area", children: [
                    /* @__PURE__ */ H.jsx("g", { className: "plot-rects" }),
                    /* @__PURE__ */ H.jsx("g", { className: "y-axis" }),
                    /* @__PURE__ */ H.jsx("g", { className: "x-axis" })
                  ] })
                }
              ),
              /* @__PURE__ */ H.jsx(xn, { pCount: 3 })
            ]
          }
        )
      ]
    }
  );
}
function Wl({ stackData: t }) {
  const [e, n] = ue(), { width: r, height: i } = n, [a, o] = st(""), [s, u] = st(!0), [l, c] = st(!1), [f, h] = ze(), { height: d } = h, [m, b] = st("all"), [E, z] = st(!1), R = document.getElementById("UI-controls");
  kt(() => {
    b("all"), u(!0), c(!0);
  }, [t]);
  const M = 750;
  kt(() => {
    let w;
    return l && (w = setTimeout(() => {
      c(!1);
    }, M + 250)), () => {
      clearTimeout(w);
    };
  }, [l]);
  const x = R ? i : i - d, A = [r, x, m], C = wt(t), j = C.length === 0 ? [] : Object.keys(C[0]).filter((w) => w !== "label" && w !== "total"), X = Fe(j), Z = Mt((w) => {
    if (l) return;
    const y = 80;
    w.selectAll(".legend-item").data([...j], (Y) => Y).join(
      (Y) => {
        const k = Y.append("div").attr("class", function($) {
          return `                                
                                ${m === $ ? W["legend-container-active"] : W["legend-container"]} 
                                legend-item`;
        }).style("left", ($, I) => `${I * y}px`).style("top", "-53px").style("opacity", 0);
        return k.append("div").attr("class", W["legend-rect"]).style("background", ($) => {
          const I = X.current.findIndex((V) => V === $);
          return ut(I);
        }), k.append("span").attr("class", W["legend-label"]).text(($) => $), k.transition().duration(M).style("top", "0px").style("opacity", 1), k;
      },
      (Y) => (Y.attr(
        "class",
        (k) => `                                
                                ${m === k ? W["legend-container-active"] : W["legend-container"]} 
                                legend-item`
      ).transition().duration(M).style("top", "0px").style("left", (k, $) => `${$ * y}px`).style("opacity", 1).select(`.${W["legend-rect"]}`).style("background", (k) => {
        const $ = X.current.findIndex((I) => I === k);
        return ut($);
      }), Y.select(`.${W["legend-label"]}`).text((k) => k), Y),
      (Y) => Y.transition().duration(M).style("opacity", 0).style("top", "53px").remove().remove().remove()
    ).on("mouseover", (Y, k) => {
      o(k);
    }).on("mouseout", function(Y) {
      o("");
    });
  }, [...A, j, l]), B = /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: f,
      className: `${G["controls-container"]} ${R ? G["fill-container"] : ""}`,
      children: [
        /* @__PURE__ */ H.jsxs("label", { className: G["controls-label"], style: { paddingRight: "12px" }, children: [
          /* @__PURE__ */ H.jsx(
            "input",
            {
              type: "checkbox",
              className: G["controls-checkbox"],
              checked: s,
              onChange: (w) => u(w.target.checked)
            }
          ),
          "Percentage"
        ] }),
        /* @__PURE__ */ H.jsx(
          "div",
          {
            ref: Z,
            id: "stacked-barchart-legends",
            className: `${W["legends-container"]}`
          }
        )
      ]
    }
  ), v = Mt((w) => {
    if (r === 0 || x === 0 || a !== "" && l) return;
    const y = { top: 20, right: 30, bottom: 30, left: 40 }, D = r > 1024;
    C.forEach(function(T) {
      T.total = j.reduce((p, S) => {
        const _ = T[S];
        return p + (typeof _ == "number" ? _ : Number(_));
      }, 0);
    });
    const k = C.filter((T) => T?.total && T.total > 0), $ = r - y.left - y.right, I = x - y.top - y.bottom, V = w.select("svg"), it = V.node(), g = V.select(".plot-area").attr("transform", "translate(" + y.left + "," + y.top + ")"), O = vn(w), K = D ? W.axisText : W.rotatedAxisText, L = se().rangeRound([0, $]).paddingInner(0.1).align(0.2), at = k.map(function(T) {
      return T.label;
    });
    L.domain(at);
    const rt = [], U = je(L).tickValues(L.domain()).scale(L).tickSizeOuter(0);
    g.select(".x-axis").attr("transform", `translate(0,${I})`).transition().duration(M).call(U).selectAll("text").style("cursor", "pointer").attr("dy", D ? "1em" : ".20em").attr("dx", D ? "0em" : "-.8em").attr("class", K);
    const et = le().range([I, 0]), ft = Ct(C, (T) => T.total);
    et.domain([0, s ? 1 : ft || 0]).nice();
    const N = Pe(et).ticks(null, s ? ".0%" : "s");
    g.select(".y-axis").attr("transform", "translate(0,0)").style("color", "steelblue").transition().duration(M).call(N);
    const Q = Ce().order(ln).offset(pl), ot = (s ? Q.keys(j)(k) : Ce().keys(j)(k)).map((T) => {
      const p = T.key, S = T.map((_) => {
        const tt = _.data.label;
        return {
          ..._,
          key: `${p} - ${tt}`,
          barKey: p
        };
      });
      return S.key = p, S;
    });
    function P(T) {
      if (T.barKey === a)
        return "none";
      const p = L.bandwidth(), S = et(T[0]) - et(T[1]), _ = isNaN(S) || S < 0 ? 0 : S;
      return j.indexOf(T.barKey ?? "") === j.length - 1 || T.barKey === m ? `${p + _} ${p} ${_}` : `${_} ${p}`;
    }
    function q(T) {
      const p = L.bandwidth();
      return j.indexOf(T.barKey ?? "") === j.length - 1 || T.barKey === m ? 0 : p * -1;
    }
    const F = (T) => a !== "" && a === T.barKey ? `rect ${W.rectLegendHovered}` : `rect ${W.rect}`;
    let J = g.selectAll(".serie").data(ot, function(T) {
      return T.key;
    }).join(
      (T) => T.append("g").attr("class", "serie").attr("fill", function(S) {
        const _ = X.current.findIndex((tt) => tt === S.key);
        return ut(_);
      }).style("opacity", 1).style("pointer-events", "auto"),
      (T) => T.transition().duration(M).attr("fill", function(S) {
        const _ = X.current.findIndex((tt) => tt === S.key);
        return ut(_);
      }).style("opacity", 1).style("pointer-events", "auto"),
      (T) => T.transition().duration(M).style("opacity", 0).attr("fill", "grey").selectAll("rect").attr("y", I).attr("height", 0).remove().remove()
    );
    J.selectAll("rect").data(
      (T) => T,
      (T) => T.data.label
    ).join(
      (T) => {
        let p;
        return p = T.append("rect").attr("class", F).attr("x", function(S) {
          return L(S.data.label + "") ?? 0;
        }).attr("width", L.bandwidth()).attr("y", function(S) {
          if (!rt.includes(S.data.label + ""))
            return I - y.bottom;
          const _ = et(S[1]), tt = et(S[0]) - et(S[1]), ct = isNaN(tt) || tt < 0 ? 0 : tt;
          return _ + ct;
        }).attr("height", 0).attr("stroke-dasharray", P).attr("stroke-dashoffset", q).transition().duration(M).attr("x", function(S) {
          return L(S.data.label + "") ?? 0;
        }).attr("width", function(S) {
          return L.bandwidth();
        }).attr("height", function(S) {
          const _ = et(S[0]) - et(S[1]);
          return isNaN(_) || _ < 0 ? 0 : _;
        }).attr("y", function(S) {
          return et(S[1]);
        }), p;
      },
      void 0,
      (T) => T.transition().duration(M).attr("opacity", 0).attr("height", 0).attr("y", I).remove()
    ).attr("class", F).attr("stroke-dasharray", P).attr("stroke-dashoffset", q).transition().duration(M).attr("x", function(T) {
      return L(T.data.label + "") ?? 0;
    }).attr("width", function(T) {
      return L.bandwidth();
    }).attr("height", (T) => {
      const p = et(T[0]) - et(T[1]);
      return isNaN(p) || p < 0 ? 0 : p;
    }).attr("y", (T) => et(T[1])), J.selectAll("rect").on("mouseover", function(T, p) {
      yt(".x-axis").selectAll("text").filter((It) => It === p.data.name).attr("class", K + " " + G.hoveredAxisText), O.style("opacity", 1).select("p.title").text(p.data.label);
      const S = p.data[p.barKey] || 0, _ = p.data.total || 0, tt = S / _ * 100, ct = Xt(".1f")(tt) + "%";
      O.select("p.top-label").text(p.barKey + " : " + (s ? ct : Tt(S))), O.select("p.bottom-label").text(
        s ? `(${Tt(S)} of ${Tt(_)})` : `Total : ${Tt(_)}`
      );
    }).on("touch", function(T, p) {
      yt(".x-axis").selectAll("text").filter((S) => S === p.data.label).attr("class", K);
    }).on("mousemove", (T, p) => {
      _n(O, { e: T, svg: it, yScale: et });
    }).on("mouseout", function(T, p) {
      yt(".x-axis").selectAll("text").filter((S) => S === p.data.name).attr("class", K), O.style("opacity", 0);
    });
  }, [...A, E, C, j, s, a, l]);
  return /* @__PURE__ */ H.jsxs(
    "div",
    {
      ref: e,
      style: { width: r, height: i, display: "flex", flexDirection: "column" },
      children: [
        R ? Le(B, R) : B,
        /* @__PURE__ */ H.jsxs(
          "div",
          {
            ref: v,
            className: `${G["fill-container"]}`,
            style: { display: "flex", flexDirection: "column" },
            children: [
              /* @__PURE__ */ H.jsx(
                "svg",
                {
                  className: `${G["chart-svg"]} ${G["fill-container"]}`,
                  viewBox: `0 0 ${r} ${x}`,
                  children: /* @__PURE__ */ H.jsxs("g", { className: "plot-area", children: [
                    /* @__PURE__ */ H.jsx("g", { className: "plot-rects" }),
                    /* @__PURE__ */ H.jsx("g", { className: "y-axis" }),
                    /* @__PURE__ */ H.jsx("g", { className: "x-axis" })
                  ] })
                }
              ),
              /* @__PURE__ */ H.jsx(xn, { pCount: 3 })
            ]
          }
        )
      ]
    }
  );
}
export {
  Bl as BarChart,
  ql as Button,
  Kl as GroupedBarChart,
  Wl as PercentageBarChart,
  Vl as PieChart,
  Xl as StackedBarChart
};
