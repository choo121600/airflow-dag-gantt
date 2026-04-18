function Gi(e, t) {
  for (var r = 0; r < t.length; r++) {
    const o = t[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const i in o)
        if (i !== "default" && !(i in e)) {
          const a = Object.getOwnPropertyDescriptor(o, i);
          a && Object.defineProperty(e, i, a.get ? a : {
            enumerable: !0,
            get: () => o[i]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var wt = { exports: {} }, Ge = {};
var mr;
function qi() {
  if (mr) return Ge;
  mr = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.fragment");
  function r(o, i, a) {
    var n = null;
    if (a !== void 0 && (n = "" + a), i.key !== void 0 && (n = "" + i.key), "key" in i) {
      a = {};
      for (var l in i)
        l !== "key" && (a[l] = i[l]);
    } else a = i;
    return i = a.ref, {
      $$typeof: e,
      type: o,
      key: n,
      ref: i !== void 0 ? i : null,
      props: a
    };
  }
  return Ge.Fragment = t, Ge.jsx = r, Ge.jsxs = r, Ge;
}
var hr;
function Ui() {
  return hr || (hr = 1, wt.exports = qi()), wt.exports;
}
var y = Ui();
function po(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Xi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|popover|popoverTarget|popoverTargetAction|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Ki = /* @__PURE__ */ po(
  function(e) {
    return Xi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), zt = { exports: {} }, V = {};
var br;
function Ji() {
  if (br) return V;
  br = 1;
  var e = /* @__PURE__ */ Symbol.for("react.transitional.element"), t = /* @__PURE__ */ Symbol.for("react.portal"), r = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), i = /* @__PURE__ */ Symbol.for("react.profiler"), a = /* @__PURE__ */ Symbol.for("react.consumer"), n = /* @__PURE__ */ Symbol.for("react.context"), l = /* @__PURE__ */ Symbol.for("react.forward_ref"), c = /* @__PURE__ */ Symbol.for("react.suspense"), u = /* @__PURE__ */ Symbol.for("react.memo"), d = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), g = Symbol.iterator;
  function _(s) {
    return s === null || typeof s != "object" ? null : (s = g && s[g] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var k = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, x = Object.assign, w = {};
  function P(s, b, O) {
    this.props = s, this.context = b, this.refs = w, this.updater = O || k;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(s, b) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, b, "setState");
  }, P.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function j() {
  }
  j.prototype = P.prototype;
  function C(s, b, O) {
    this.props = s, this.context = b, this.refs = w, this.updater = O || k;
  }
  var N = C.prototype = new j();
  N.constructor = C, x(N, P.prototype), N.isPureReactComponent = !0;
  var v = Array.isArray;
  function D() {
  }
  var z = { H: null, A: null, T: null, S: null }, I = Object.prototype.hasOwnProperty;
  function W(s, b, O) {
    var $ = O.ref;
    return {
      $$typeof: e,
      type: s,
      key: b,
      ref: $ !== void 0 ? $ : null,
      props: O
    };
  }
  function B(s, b) {
    return W(s.type, b, s.props);
  }
  function G(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }
  function L(s) {
    var b = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(O) {
      return b[O];
    });
  }
  var Q = /\/+/g;
  function ue(s, b) {
    return typeof s == "object" && s !== null && s.key != null ? L("" + s.key) : b.toString(36);
  }
  function Y(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(D, D) : (s.status = "pending", s.then(
          function(b) {
            s.status === "pending" && (s.status = "fulfilled", s.value = b);
          },
          function(b) {
            s.status === "pending" && (s.status = "rejected", s.reason = b);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function oe(s, b, O, $, h) {
    var R = typeof s;
    (R === "undefined" || R === "boolean") && (s = null);
    var T = !1;
    if (s === null) T = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          T = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case e:
            case t:
              T = !0;
              break;
            case d:
              return T = s._init, oe(
                T(s._payload),
                b,
                O,
                $,
                h
              );
          }
      }
    if (T)
      return h = h(s), T = $ === "" ? "." + ue(s, 0) : $, v(h) ? (O = "", T != null && (O = T.replace(Q, "$&/") + "/"), oe(h, b, O, "", function(F) {
        return F;
      })) : h != null && (G(h) && (h = B(
        h,
        O + (h.key == null || s && s.key === h.key ? "" : ("" + h.key).replace(
          Q,
          "$&/"
        ) + "/") + T
      )), b.push(h)), 1;
    T = 0;
    var f = $ === "" ? "." : $ + ":";
    if (v(s))
      for (var m = 0; m < s.length; m++)
        $ = s[m], R = f + ue($, m), T += oe(
          $,
          b,
          O,
          R,
          h
        );
    else if (m = _(s), typeof m == "function")
      for (s = m.call(s), m = 0; !($ = s.next()).done; )
        $ = $.value, R = f + ue($, m++), T += oe(
          $,
          b,
          O,
          R,
          h
        );
    else if (R === "object") {
      if (typeof s.then == "function")
        return oe(
          Y(s),
          b,
          O,
          $,
          h
        );
      throw b = String(s), Error(
        "Objects are not valid as a React child (found: " + (b === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return T;
  }
  function ce(s, b, O) {
    if (s == null) return s;
    var $ = [], h = 0;
    return oe(s, $, "", "", function(R) {
      return b.call(O, R, h++);
    }), $;
  }
  function we(s) {
    if (s._status === -1) {
      var b = s._result;
      b = b(), b.then(
        function(O) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = O);
        },
        function(O) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = O);
        }
      ), s._status === -1 && (s._status = 0, s._result = b);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var M = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var b = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(b)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, Z = {
    map: ce,
    forEach: function(s, b, O) {
      ce(
        s,
        function() {
          b.apply(this, arguments);
        },
        O
      );
    },
    count: function(s) {
      var b = 0;
      return ce(s, function() {
        b++;
      }), b;
    },
    toArray: function(s) {
      return ce(s, function(b) {
        return b;
      }) || [];
    },
    only: function(s) {
      if (!G(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return V.Activity = p, V.Children = Z, V.Component = P, V.Fragment = r, V.Profiler = i, V.PureComponent = C, V.StrictMode = o, V.Suspense = c, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = z, V.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return z.H.useMemoCache(s);
    }
  }, V.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, V.cacheSignal = function() {
    return null;
  }, V.cloneElement = function(s, b, O) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var $ = x({}, s.props), h = s.key;
    if (b != null)
      for (R in b.key !== void 0 && (h = "" + b.key), b)
        !I.call(b, R) || R === "key" || R === "__self" || R === "__source" || R === "ref" && b.ref === void 0 || ($[R] = b[R]);
    var R = arguments.length - 2;
    if (R === 1) $.children = O;
    else if (1 < R) {
      for (var T = Array(R), f = 0; f < R; f++)
        T[f] = arguments[f + 2];
      $.children = T;
    }
    return W(s.type, h, $);
  }, V.createContext = function(s) {
    return s = {
      $$typeof: n,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: a,
      _context: s
    }, s;
  }, V.createElement = function(s, b, O) {
    var $, h = {}, R = null;
    if (b != null)
      for ($ in b.key !== void 0 && (R = "" + b.key), b)
        I.call(b, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (h[$] = b[$]);
    var T = arguments.length - 2;
    if (T === 1) h.children = O;
    else if (1 < T) {
      for (var f = Array(T), m = 0; m < T; m++)
        f[m] = arguments[m + 2];
      h.children = f;
    }
    if (s && s.defaultProps)
      for ($ in T = s.defaultProps, T)
        h[$] === void 0 && (h[$] = T[$]);
    return W(s, R, h);
  }, V.createRef = function() {
    return { current: null };
  }, V.forwardRef = function(s) {
    return { $$typeof: l, render: s };
  }, V.isValidElement = G, V.lazy = function(s) {
    return {
      $$typeof: d,
      _payload: { _status: -1, _result: s },
      _init: we
    };
  }, V.memo = function(s, b) {
    return {
      $$typeof: u,
      type: s,
      compare: b === void 0 ? null : b
    };
  }, V.startTransition = function(s) {
    var b = z.T, O = {};
    z.T = O;
    try {
      var $ = s(), h = z.S;
      h !== null && h(O, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(D, M);
    } catch (R) {
      M(R);
    } finally {
      b !== null && O.types !== null && (b.types = O.types), z.T = b;
    }
  }, V.unstable_useCacheRefresh = function() {
    return z.H.useCacheRefresh();
  }, V.use = function(s) {
    return z.H.use(s);
  }, V.useActionState = function(s, b, O) {
    return z.H.useActionState(s, b, O);
  }, V.useCallback = function(s, b) {
    return z.H.useCallback(s, b);
  }, V.useContext = function(s) {
    return z.H.useContext(s);
  }, V.useDebugValue = function() {
  }, V.useDeferredValue = function(s, b) {
    return z.H.useDeferredValue(s, b);
  }, V.useEffect = function(s, b) {
    return z.H.useEffect(s, b);
  }, V.useEffectEvent = function(s) {
    return z.H.useEffectEvent(s);
  }, V.useId = function() {
    return z.H.useId();
  }, V.useImperativeHandle = function(s, b, O) {
    return z.H.useImperativeHandle(s, b, O);
  }, V.useInsertionEffect = function(s, b) {
    return z.H.useInsertionEffect(s, b);
  }, V.useLayoutEffect = function(s, b) {
    return z.H.useLayoutEffect(s, b);
  }, V.useMemo = function(s, b) {
    return z.H.useMemo(s, b);
  }, V.useOptimistic = function(s, b) {
    return z.H.useOptimistic(s, b);
  }, V.useReducer = function(s, b, O) {
    return z.H.useReducer(s, b, O);
  }, V.useRef = function(s) {
    return z.H.useRef(s);
  }, V.useState = function(s) {
    return z.H.useState(s);
  }, V.useSyncExternalStore = function(s, b, O) {
    return z.H.useSyncExternalStore(
      s,
      b,
      O
    );
  }, V.useTransition = function() {
    return z.H.useTransition();
  }, V.version = "19.2.5", V;
}
var vr;
function Qi() {
  return vr || (vr = 1, zt.exports = Ji()), zt.exports;
}
var S = Qi();
const Zi = /* @__PURE__ */ Yi(S), xr = /* @__PURE__ */ Gi({
  __proto__: null,
  default: Zi
}, [S]);
function ea(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ta(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var ra = /* @__PURE__ */ (function() {
  function e(r) {
    var o = this;
    this._insertTag = function(i) {
      var a;
      o.tags.length === 0 ? o.insertionPoint ? a = o.insertionPoint.nextSibling : o.prepend ? a = o.container.firstChild : a = o.before : a = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(i, a), o.tags.push(i);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, t.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ta(this));
    var i = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = ea(i);
      try {
        a.insertRule(o, a.cssRules.length);
      } catch {
      }
    } else
      i.appendChild(document.createTextNode(o));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(o) {
      var i;
      return (i = o.parentNode) == null ? void 0 : i.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), he = "-ms-", gt = "-moz-", U = "-webkit-", go = "comm", qt = "rule", Ut = "decl", oa = "@import", fo = "@keyframes", ia = "@layer", aa = Math.abs, ht = String.fromCharCode, na = Object.assign;
function sa(e, t) {
  return me(e, 0) ^ 45 ? (((t << 2 ^ me(e, 0)) << 2 ^ me(e, 1)) << 2 ^ me(e, 2)) << 2 ^ me(e, 3) : 0;
}
function mo(e) {
  return e.trim();
}
function la(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function X(e, t, r) {
  return e.replace(t, r);
}
function Ot(e, t) {
  return e.indexOf(t);
}
function me(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ze(e, t, r) {
  return e.slice(t, r);
}
function ze(e) {
  return e.length;
}
function Xt(e) {
  return e.length;
}
function at(e, t) {
  return t.push(e), e;
}
function ca(e, t) {
  return e.map(t).join("");
}
var bt = 1, Le = 1, ho = 0, xe = 0, se = 0, Fe = "";
function vt(e, t, r, o, i, a, n) {
  return { value: e, root: t, parent: r, type: o, props: i, children: a, line: bt, column: Le, length: n, return: "" };
}
function Ye(e, t) {
  return na(vt("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function da() {
  return se;
}
function ua() {
  return se = xe > 0 ? me(Fe, --xe) : 0, Le--, se === 10 && (Le = 1, bt--), se;
}
function ye() {
  return se = xe < ho ? me(Fe, xe++) : 0, Le++, se === 10 && (Le = 1, bt++), se;
}
function Ce() {
  return me(Fe, xe);
}
function ct() {
  return xe;
}
function rt(e, t) {
  return Ze(Fe, e, t);
}
function et(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function bo(e) {
  return bt = Le = 1, ho = ze(Fe = e), xe = 0, [];
}
function vo(e) {
  return Fe = "", e;
}
function dt(e) {
  return mo(rt(xe - 1, $t(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function pa(e) {
  for (; (se = Ce()) && se < 33; )
    ye();
  return et(e) > 2 || et(se) > 3 ? "" : " ";
}
function ga(e, t) {
  for (; --t && ye() && !(se < 48 || se > 102 || se > 57 && se < 65 || se > 70 && se < 97); )
    ;
  return rt(e, ct() + (t < 6 && Ce() == 32 && ye() == 32));
}
function $t(e) {
  for (; ye(); )
    switch (se) {
      // ] ) " '
      case e:
        return xe;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $t(se);
        break;
      // (
      case 40:
        e === 41 && $t(e);
        break;
      // \
      case 92:
        ye();
        break;
    }
  return xe;
}
function fa(e, t) {
  for (; ye() && e + se !== 57; )
    if (e + se === 84 && Ce() === 47)
      break;
  return "/*" + rt(t, xe - 1) + "*" + ht(e === 47 ? e : ye());
}
function ma(e) {
  for (; !et(Ce()); )
    ye();
  return rt(e, xe);
}
function ha(e) {
  return vo(ut("", null, null, null, [""], e = bo(e), 0, [0], e));
}
function ut(e, t, r, o, i, a, n, l, c) {
  for (var u = 0, d = 0, p = n, g = 0, _ = 0, k = 0, x = 1, w = 1, P = 1, j = 0, C = "", N = i, v = a, D = o, z = C; w; )
    switch (k = j, j = ye()) {
      // (
      case 40:
        if (k != 108 && me(z, p - 1) == 58) {
          Ot(z += X(dt(j), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        z += dt(j);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        z += pa(k);
        break;
      // \
      case 92:
        z += ga(ct() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ce()) {
          case 42:
          case 47:
            at(ba(fa(ye(), ct()), t, r), c);
            break;
          default:
            z += "/";
        }
        break;
      // {
      case 123 * x:
        l[u++] = ze(z) * P;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (j) {
          // \0 }
          case 0:
          case 125:
            w = 0;
          // ;
          case 59 + d:
            P == -1 && (z = X(z, /\f/g, "")), _ > 0 && ze(z) - p && at(_ > 32 ? kr(z + ";", o, r, p - 1) : kr(X(z, " ", "") + ";", o, r, p - 2), c);
            break;
          // @ ;
          case 59:
            z += ";";
          // { rule/at-rule
          default:
            if (at(D = yr(z, t, r, u, d, i, l, C, N = [], v = [], p), a), j === 123)
              if (d === 0)
                ut(z, t, D, D, N, a, p, l, v);
              else
                switch (g === 99 && me(z, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ut(e, D, D, o && at(yr(e, D, D, 0, 0, i, l, C, i, N = [], p), v), i, v, p, l, o ? N : v);
                    break;
                  default:
                    ut(z, D, D, D, [""], v, 0, l, v);
                }
        }
        u = d = _ = 0, x = P = 1, C = z = "", p = n;
        break;
      // :
      case 58:
        p = 1 + ze(z), _ = k;
      default:
        if (x < 1) {
          if (j == 123)
            --x;
          else if (j == 125 && x++ == 0 && ua() == 125)
            continue;
        }
        switch (z += ht(j), j * x) {
          // &
          case 38:
            P = d > 0 ? 1 : (z += "\f", -1);
            break;
          // ,
          case 44:
            l[u++] = (ze(z) - 1) * P, P = 1;
            break;
          // @
          case 64:
            Ce() === 45 && (z += dt(ye())), g = Ce(), d = p = ze(C = z += ma(ct())), j++;
            break;
          // -
          case 45:
            k === 45 && ze(z) == 2 && (x = 0);
        }
    }
  return a;
}
function yr(e, t, r, o, i, a, n, l, c, u, d) {
  for (var p = i - 1, g = i === 0 ? a : [""], _ = Xt(g), k = 0, x = 0, w = 0; k < o; ++k)
    for (var P = 0, j = Ze(e, p + 1, p = aa(x = n[k])), C = e; P < _; ++P)
      (C = mo(x > 0 ? g[P] + " " + j : X(j, /&\f/g, g[P]))) && (c[w++] = C);
  return vt(e, t, r, i === 0 ? qt : l, c, u, d);
}
function ba(e, t, r) {
  return vt(e, t, r, go, ht(da()), Ze(e, 2, -2), 0);
}
function kr(e, t, r, o) {
  return vt(e, t, r, Ut, Ze(e, 0, o), Ze(e, o + 1, -1), o);
}
function Me(e, t) {
  for (var r = "", o = Xt(e), i = 0; i < o; i++)
    r += t(e[i], i, e, t) || "";
  return r;
}
function va(e, t, r, o) {
  switch (e.type) {
    case ia:
      if (e.children.length) break;
    case oa:
    case Ut:
      return e.return = e.return || e.value;
    case go:
      return "";
    case fo:
      return e.return = e.value + "{" + Me(e.children, o) + "}";
    case qt:
      e.value = e.props.join(",");
  }
  return ze(r = Me(e.children, o)) ? e.return = e.value + "{" + r + "}" : "";
}
function xa(e) {
  var t = Xt(e);
  return function(r, o, i, a) {
    for (var n = "", l = 0; l < t; l++)
      n += e[l](r, o, i, a) || "";
    return n;
  };
}
function ya(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ka = function(t, r, o) {
  for (var i = 0, a = 0; i = a, a = Ce(), i === 38 && a === 12 && (r[o] = 1), !et(a); )
    ye();
  return rt(t, xe);
}, Sa = function(t, r) {
  var o = -1, i = 44;
  do
    switch (et(i)) {
      case 0:
        i === 38 && Ce() === 12 && (r[o] = 1), t[o] += ka(xe - 1, r, o);
        break;
      case 2:
        t[o] += dt(i);
        break;
      case 4:
        if (i === 44) {
          t[++o] = Ce() === 58 ? "&\f" : "", r[o] = t[o].length;
          break;
        }
      // fallthrough
      default:
        t[o] += ht(i);
    }
  while (i = ye());
  return t;
}, wa = function(t, r) {
  return vo(Sa(bo(t), r));
}, Sr = /* @__PURE__ */ new WeakMap(), za = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, o = t.parent, i = t.column === o.column && t.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Sr.get(o)) && !i) {
      Sr.set(t, !0);
      for (var a = [], n = wa(r, a), l = o.props, c = 0, u = 0; c < n.length; c++)
        for (var d = 0; d < l.length; d++, u++)
          t.props[u] = a[c] ? n[c].replace(/&\f/g, l[d]) : l[d] + " " + n[c];
    }
  }
}, _a = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function xo(e, t) {
  switch (sa(e, t)) {
    // color-adjust
    case 5103:
      return U + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return U + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return U + e + gt + e + he + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return U + e + he + e + e;
    // order
    case 6165:
      return U + e + he + "flex-" + e + e;
    // align-items
    case 5187:
      return U + e + X(e, /(\w+).+(:[^]+)/, U + "box-$1$2" + he + "flex-$1$2") + e;
    // align-self
    case 5443:
      return U + e + he + "flex-item-" + X(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return U + e + he + "flex-line-pack" + X(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return U + e + he + X(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return U + e + he + X(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return U + "box-" + X(e, "-grow", "") + U + e + he + X(e, "grow", "positive") + e;
    // transition
    case 4554:
      return U + X(e, /([^-])(transform)/g, "$1" + U + "$2") + e;
    // cursor
    case 6187:
      return X(X(X(e, /(zoom-|grab)/, U + "$1"), /(image-set)/, U + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return X(e, /(image-set\([^]*)/, U + "$1$`$1");
    // justify-content
    case 4968:
      return X(X(e, /(.+:)(flex-)?(.*)/, U + "box-pack:$3" + he + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + U + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return X(e, /(.+)-inline(.+)/, U + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ze(e) - 1 - t > 6) switch (me(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (me(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return X(e, /(.+:)(.+)-([^]+)/, "$1" + U + "$2-$3$1" + gt + (me(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Ot(e, "stretch") ? xo(X(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (me(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (me(e, ze(e) - 3 - (~Ot(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return X(e, ":", ":" + U) + e;
        // (inline-)?fl(e)x
        case 101:
          return X(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + U + (me(e, 14) === 45 ? "inline-" : "") + "box$3$1" + U + "$2$3$1" + he + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (me(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return U + e + he + X(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return U + e + he + X(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return U + e + he + X(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return U + e + he + e + e;
  }
  return e;
}
var Ca = function(t, r, o, i) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Ut:
      t.return = xo(t.value, t.length);
      break;
    case fo:
      return Me([Ye(t, {
        value: X(t.value, "@", "@" + U)
      })], i);
    case qt:
      if (t.length) return ca(t.props, function(a) {
        switch (la(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Me([Ye(t, {
              props: [X(a, /:(read-\w+)/, ":" + gt + "$1")]
            })], i);
          // :placeholder
          case "::placeholder":
            return Me([Ye(t, {
              props: [X(a, /:(plac\w+)/, ":" + U + "input-$1")]
            }), Ye(t, {
              props: [X(a, /:(plac\w+)/, ":" + gt + "$1")]
            }), Ye(t, {
              props: [X(a, /:(plac\w+)/, he + "input-$1")]
            })], i);
        }
        return "";
      });
  }
}, Ra = [Ca], Pa = function(t) {
  var r = t.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(x) {
      var w = x.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var i = t.stylisPlugins || Ra, a = {}, n, l = [];
  n = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(x) {
      for (var w = x.getAttribute("data-emotion").split(" "), P = 1; P < w.length; P++)
        a[w[P]] = !0;
      l.push(x);
    }
  );
  var c, u = [za, _a];
  {
    var d, p = [va, ya(function(x) {
      d.insert(x);
    })], g = xa(u.concat(i, p)), _ = function(w) {
      return Me(ha(w), g);
    };
    c = function(w, P, j, C) {
      d = j, _(w ? w + "{" + P.styles + "}" : P.styles), C && (k.inserted[P.name] = !0);
    };
  }
  var k = {
    key: r,
    sheet: new ra({
      key: r,
      container: n,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return k.sheet.hydrate(l), k;
}, _t = { exports: {} }, K = {};
var wr;
function Ta() {
  if (wr) return K;
  wr = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? /* @__PURE__ */ Symbol.for("react.element") : 60103, r = e ? /* @__PURE__ */ Symbol.for("react.portal") : 60106, o = e ? /* @__PURE__ */ Symbol.for("react.fragment") : 60107, i = e ? /* @__PURE__ */ Symbol.for("react.strict_mode") : 60108, a = e ? /* @__PURE__ */ Symbol.for("react.profiler") : 60114, n = e ? /* @__PURE__ */ Symbol.for("react.provider") : 60109, l = e ? /* @__PURE__ */ Symbol.for("react.context") : 60110, c = e ? /* @__PURE__ */ Symbol.for("react.async_mode") : 60111, u = e ? /* @__PURE__ */ Symbol.for("react.concurrent_mode") : 60111, d = e ? /* @__PURE__ */ Symbol.for("react.forward_ref") : 60112, p = e ? /* @__PURE__ */ Symbol.for("react.suspense") : 60113, g = e ? /* @__PURE__ */ Symbol.for("react.suspense_list") : 60120, _ = e ? /* @__PURE__ */ Symbol.for("react.memo") : 60115, k = e ? /* @__PURE__ */ Symbol.for("react.lazy") : 60116, x = e ? /* @__PURE__ */ Symbol.for("react.block") : 60121, w = e ? /* @__PURE__ */ Symbol.for("react.fundamental") : 60117, P = e ? /* @__PURE__ */ Symbol.for("react.responder") : 60118, j = e ? /* @__PURE__ */ Symbol.for("react.scope") : 60119;
  function C(v) {
    if (typeof v == "object" && v !== null) {
      var D = v.$$typeof;
      switch (D) {
        case t:
          switch (v = v.type, v) {
            case c:
            case u:
            case o:
            case a:
            case i:
            case p:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case d:
                case k:
                case _:
                case n:
                  return v;
                default:
                  return D;
              }
          }
        case r:
          return D;
      }
    }
  }
  function N(v) {
    return C(v) === u;
  }
  return K.AsyncMode = c, K.ConcurrentMode = u, K.ContextConsumer = l, K.ContextProvider = n, K.Element = t, K.ForwardRef = d, K.Fragment = o, K.Lazy = k, K.Memo = _, K.Portal = r, K.Profiler = a, K.StrictMode = i, K.Suspense = p, K.isAsyncMode = function(v) {
    return N(v) || C(v) === c;
  }, K.isConcurrentMode = N, K.isContextConsumer = function(v) {
    return C(v) === l;
  }, K.isContextProvider = function(v) {
    return C(v) === n;
  }, K.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === t;
  }, K.isForwardRef = function(v) {
    return C(v) === d;
  }, K.isFragment = function(v) {
    return C(v) === o;
  }, K.isLazy = function(v) {
    return C(v) === k;
  }, K.isMemo = function(v) {
    return C(v) === _;
  }, K.isPortal = function(v) {
    return C(v) === r;
  }, K.isProfiler = function(v) {
    return C(v) === a;
  }, K.isStrictMode = function(v) {
    return C(v) === i;
  }, K.isSuspense = function(v) {
    return C(v) === p;
  }, K.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === o || v === u || v === a || v === i || v === p || v === g || typeof v == "object" && v !== null && (v.$$typeof === k || v.$$typeof === _ || v.$$typeof === n || v.$$typeof === l || v.$$typeof === d || v.$$typeof === w || v.$$typeof === P || v.$$typeof === j || v.$$typeof === x);
  }, K.typeOf = C, K;
}
var zr;
function Ia() {
  return zr || (zr = 1, _t.exports = Ta()), _t.exports;
}
var Ct, _r;
function Wa() {
  if (_r) return Ct;
  _r = 1;
  var e = Ia(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, i = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, a = {};
  a[e.ForwardRef] = o, a[e.Memo] = i;
  function n(k) {
    return e.isMemo(k) ? i : a[k.$$typeof] || t;
  }
  var l = Object.defineProperty, c = Object.getOwnPropertyNames, u = Object.getOwnPropertySymbols, d = Object.getOwnPropertyDescriptor, p = Object.getPrototypeOf, g = Object.prototype;
  function _(k, x, w) {
    if (typeof x != "string") {
      if (g) {
        var P = p(x);
        P && P !== g && _(k, P, w);
      }
      var j = c(x);
      u && (j = j.concat(u(x)));
      for (var C = n(k), N = n(x), v = 0; v < j.length; ++v) {
        var D = j[v];
        if (!r[D] && !(w && w[D]) && !(N && N[D]) && !(C && C[D])) {
          var z = d(x, D);
          try {
            l(k, D, z);
          } catch {
          }
        }
      }
    }
    return k;
  }
  return Ct = _, Ct;
}
Wa();
var Ea = !0;
function yo(e, t, r) {
  var o = "";
  return r.split(" ").forEach(function(i) {
    e[i] !== void 0 ? t.push(e[i] + ";") : i && (o += i + " ");
  }), o;
}
var Kt = function(t, r, o) {
  var i = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Ea === !1) && t.registered[i] === void 0 && (t.registered[i] = r.styles);
}, Jt = function(t, r, o) {
  Kt(t, r, o);
  var i = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + i : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Aa(e) {
  for (var t = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var ja = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Na = /[A-Z]|^ms/g, Oa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ko = function(t) {
  return t.charCodeAt(1) === 45;
}, Cr = function(t) {
  return t != null && typeof t != "boolean";
}, Rt = /* @__PURE__ */ po(function(e) {
  return ko(e) ? e : e.replace(Na, "-$&").toLowerCase();
}), Rr = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Oa, function(o, i, a) {
          return _e = {
            name: i,
            styles: a,
            next: _e
          }, i;
        });
  }
  return ja[t] !== 1 && !ko(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function tt(e, t, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var i = r;
      if (i.anim === 1)
        return _e = {
          name: i.name,
          styles: i.styles,
          next: _e
        }, i.name;
      var a = r;
      if (a.styles !== void 0) {
        var n = a.next;
        if (n !== void 0)
          for (; n !== void 0; )
            _e = {
              name: n.name,
              styles: n.styles,
              next: _e
            }, n = n.next;
        var l = a.styles + ";";
        return l;
      }
      return $a(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var c = _e, u = r(e);
        return _e = c, tt(e, t, u);
      }
      break;
    }
  }
  var d = r;
  if (t == null)
    return d;
  var p = t[d];
  return p !== void 0 ? p : d;
}
function $a(e, t, r) {
  var o = "";
  if (Array.isArray(r))
    for (var i = 0; i < r.length; i++)
      o += tt(e, t, r[i]) + ";";
  else
    for (var a in r) {
      var n = r[a];
      if (typeof n != "object") {
        var l = n;
        t != null && t[l] !== void 0 ? o += a + "{" + t[l] + "}" : Cr(l) && (o += Rt(a) + ":" + Rr(a, l) + ";");
      } else if (Array.isArray(n) && typeof n[0] == "string" && (t == null || t[n[0]] === void 0))
        for (var c = 0; c < n.length; c++)
          Cr(n[c]) && (o += Rt(a) + ":" + Rr(a, n[c]) + ";");
      else {
        var u = tt(e, t, n);
        switch (a) {
          case "animation":
          case "animationName": {
            o += Rt(a) + ":" + u + ";";
            break;
          }
          default:
            o += a + "{" + u + "}";
        }
      }
    }
  return o;
}
var Pr = /label:\s*([^\s;{]+)\s*(;|$)/g, _e;
function Qt(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, i = "";
  _e = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    o = !1, i += tt(r, t, a);
  else {
    var n = a;
    i += n[0];
  }
  for (var l = 1; l < e.length; l++)
    if (i += tt(r, t, e[l]), o) {
      var c = a;
      i += c[l];
    }
  Pr.lastIndex = 0;
  for (var u = "", d; (d = Pr.exec(i)) !== null; )
    u += "-" + d[1];
  var p = Aa(i) + u;
  return {
    name: p,
    styles: i,
    next: _e
  };
}
var Da = function(t) {
  return t();
}, So = xr.useInsertionEffect ? xr.useInsertionEffect : !1, wo = So || Da, Tr = So || S.useLayoutEffect, zo = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Pa({
    key: "css"
  }) : null
);
zo.Provider;
var Zt = function(t) {
  return /* @__PURE__ */ S.forwardRef(function(r, o) {
    var i = S.useContext(zo);
    return t(r, i, o);
  });
}, er = /* @__PURE__ */ S.createContext({}), tr = {}.hasOwnProperty, Dt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ba = function(t, r) {
  var o = {};
  for (var i in r)
    tr.call(r, i) && (o[i] = r[i]);
  return o[Dt] = t, o;
}, Ma = function(t) {
  var r = t.cache, o = t.serialized, i = t.isStringTag;
  return Kt(r, o, i), wo(function() {
    return Jt(r, o, i);
  }), null;
}, Va = /* @__PURE__ */ Zt(function(e, t, r) {
  var o = e.css;
  typeof o == "string" && t.registered[o] !== void 0 && (o = t.registered[o]);
  var i = e[Dt], a = [o], n = "";
  typeof e.className == "string" ? n = yo(t.registered, a, e.className) : e.className != null && (n = e.className + " ");
  var l = Qt(a, void 0, S.useContext(er));
  n += t.key + "-" + l.name;
  var c = {};
  for (var u in e)
    tr.call(e, u) && u !== "css" && u !== Dt && (c[u] = e[u]);
  return c.className = n, r && (c.ref = r), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(Ma, {
    cache: t,
    serialized: l,
    isStringTag: typeof i == "string"
  }), /* @__PURE__ */ S.createElement(i, c));
}), La = Va, Ir = function(t, r) {
  var o = arguments;
  if (r == null || !tr.call(r, "css"))
    return S.createElement.apply(void 0, o);
  var i = o.length, a = new Array(i);
  a[0] = La, a[1] = Ba(t, r);
  for (var n = 2; n < i; n++)
    a[n] = o[n];
  return S.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ir || (Ir = {}));
var Wr = /* @__PURE__ */ Zt(function(e, t) {
  var r = e.styles, o = Qt([r], void 0, S.useContext(er)), i = S.useRef();
  return Tr(function() {
    var a = t.key + "-global", n = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, c = document.querySelector('style[data-emotion="' + a + " " + o.name + '"]');
    return t.sheet.tags.length && (n.before = t.sheet.tags[0]), c !== null && (l = !0, c.setAttribute("data-emotion", a), n.hydrate([c])), i.current = [n, l], function() {
      n.flush();
    };
  }, [t]), Tr(function() {
    var a = i.current, n = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (o.next !== void 0 && Jt(t, o.next, !0), n.tags.length) {
      var c = n.tags[n.tags.length - 1].nextElementSibling;
      n.before = c, n.flush();
    }
    t.insert("", o, n, !1);
  }, [t, o.name]), null;
});
function Fa(...e) {
  return function(...r) {
    e.forEach((o) => o?.(...r));
  };
}
const Ha = (...e) => e.map((t) => t?.trim?.()).filter(Boolean).join(" "), Ga = /^on[A-Z]/;
function rr(...e) {
  let t = {};
  for (let r of e) {
    for (let o in t) {
      if (Ga.test(o) && typeof t[o] == "function" && typeof r[o] == "function") {
        t[o] = Fa(t[o], r[o]);
        continue;
      }
      if (o === "className" || o === "class") {
        t[o] = Ha(t[o], r[o]);
        continue;
      }
      if (o === "style") {
        t[o] = Object.assign({}, t[o] ?? {}, r[o] ?? {});
        continue;
      }
      t[o] = r[o] !== void 0 ? r[o] : t[o];
    }
    for (let o in r)
      t[o] === void 0 && (t[o] = r[o]);
  }
  return t;
}
const Ya = parseInt(S.version.split(".")[0], 10), qa = Ya >= 19;
function Pt(e, t) {
  if (e != null) {
    if (typeof e == "function")
      return e(t);
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function Ua(...e) {
  const t = e.filter((r) => r != null);
  if (qa) {
    const r = /* @__PURE__ */ new Map();
    return (o) => (t.forEach((i) => {
      const a = Pt(i, o);
      a && r.set(i, a);
    }), () => {
      t.forEach((i) => {
        const a = r.get(i);
        a && typeof a == "function" ? a() : Pt(i, null);
      }), r.clear();
    });
  } else
    return (r) => {
      t.forEach((o) => {
        Pt(o, r);
      });
    };
}
function ot(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
const ve = (e) => e != null && typeof e == "object" && !Array.isArray(e), Se = (e) => typeof e == "string", or = (e) => typeof e == "function", We = (...e) => {
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    if (!Se(o)) continue;
    const i = o.trim();
    i && t.push(i);
  }
  return t.join(" ");
};
function Xa(e) {
  return e.default || e;
}
function Ka(e) {
  const t = S.version;
  return !Se(t) || t.startsWith("18.") ? e?.ref : e?.props?.ref;
}
const ir = (...e) => {
  const t = e.reduce((r, o) => (o?.forEach((i) => r.add(i)), r), /* @__PURE__ */ new Set([]));
  return Array.from(t);
};
function Ja(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function _o(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: o = "useContext",
    providerName: i = "Provider",
    errorMessage: a,
    defaultValue: n
  } = e, l = S.createContext(n);
  l.displayName = t;
  function c() {
    const u = S.useContext(l);
    if (!u && r) {
      const d = new Error(
        a ?? Ja(o, i)
      );
      throw d.name = "ContextError", Error.captureStackTrace?.(d, c), d;
    }
    return u;
  }
  return [l.Provider, c, l];
}
const [Qa, ar] = _o({
  name: "ChakraContext",
  strict: !0,
  providerName: "<ChakraProvider />"
});
function Za(e) {
  const { value: t, children: r } = e;
  return /* @__PURE__ */ y.jsxs(Qa, { value: t, children: [
    !t._config.disableLayers && /* @__PURE__ */ y.jsx(Wr, { styles: t.layers.atRule }),
    /* @__PURE__ */ y.jsx(Wr, { styles: t._global }),
    r
  ] });
}
const en = (e, t) => {
  const r = {}, o = {}, i = Object.keys(e);
  for (const a of i)
    t(a) ? o[a] = e[a] : r[a] = e[a];
  return [o, r];
}, Ve = (e, t) => {
  const r = or(t) ? t : (o) => t.includes(o);
  return en(e, r);
}, tn = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function rn(e) {
  return typeof e == "string" && tn.has(e);
}
function on(e, t, r) {
  const { css: o, isValidProperty: i } = ar(), { children: a, ...n } = e, l = S.useMemo(() => {
    const [g, _] = Ve(
      n,
      (j) => r(j, t.variantKeys)
    ), [k, x] = Ve(
      _,
      t.variantKeys
    ), [w, P] = Ve(x, i);
    return {
      forwardedProps: g,
      variantProps: k,
      styleProps: w,
      elementProps: P
    };
  }, [t.variantKeys, r, n, i]), { css: c, ...u } = l.styleProps, d = S.useMemo(() => {
    const g = { ...l.variantProps }, _ = t.variantKeys.includes("colorPalette"), k = t.variantKeys.includes("orientation");
    return _ || (g.colorPalette = n.colorPalette), k || (g.orientation = n.orientation), t(g);
  }, [t, l.variantProps, n.colorPalette, n.orientation]);
  return {
    styles: S.useMemo(() => o(d, ...an(c), u), [o, d, c, u]),
    props: {
      ...l.forwardedProps,
      ...l.elementProps,
      children: a
    }
  };
}
const an = (e) => (Array.isArray(e) ? e : [e]).filter(Boolean).flat(), nn = Xa(Ki), sn = nn, ln = (e) => e !== "theme", cn = (e, t, r) => {
  let o;
  if (t) {
    const i = t.shouldForwardProp;
    o = e.__emotion_forwardProp && i ? (a) => e.__emotion_forwardProp(a) && i(a) : i;
  }
  return typeof o != "function" && r && (o = e.__emotion_forwardProp), o;
};
let dn = typeof document < "u";
const Er = ({ cache: e, serialized: t, isStringTag: r }) => {
  Kt(e, t, r);
  const o = wo(
    () => Jt(e, t, r)
  );
  if (!dn && o !== void 0) {
    let i = t.name, a = t.next;
    for (; a !== void 0; )
      i = We(i, a.name), a = a.next;
    return /* @__PURE__ */ y.jsx(
      "style",
      {
        "data-emotion": We(e.key, i),
        dangerouslySetInnerHTML: { __html: o },
        nonce: e.sheet.nonce
      }
    );
  }
  return null;
}, Ar = {
  path: ["d"],
  text: ["x", "y"],
  circle: ["cx", "cy", "r"],
  rect: ["width", "height", "x", "y", "rx", "ry"],
  ellipse: ["cx", "cy", "rx", "ry"],
  g: ["transform"],
  stop: ["offset", "stopOpacity"]
}, un = (e, t) => Object.prototype.hasOwnProperty.call(e, t), pn = (e, t = {}, r = {}) => {
  if (un(Ar, e)) {
    r.forwardProps || (r.forwardProps = []);
    const u = Ar[e];
    r.forwardProps = ir([...r.forwardProps, ...u]);
  }
  const o = e.__emotion_real === e, i = o && e.__emotion_base || e;
  let a, n;
  r !== void 0 && (a = r.label, n = r.target);
  let l = [];
  const c = Zt((u, d, p) => {
    const { cva: g, isValidProperty: _ } = ar(), k = t.__cva__ ? t : g(t), x = fn(e.__emotion_cva, k), w = (Y) => (oe, ce) => Y.includes(oe) ? !0 : !ce?.includes(oe) && !_(oe);
    !r.shouldForwardProp && r.forwardProps && (r.shouldForwardProp = w(r.forwardProps));
    const P = (Y, oe) => {
      const ce = typeof e == "string" && e.charCodeAt(0) > 96 ? sn : ln, we = !oe?.includes(Y) && !_(Y);
      return ce(Y) && we;
    }, j = cn(e, r, o) || P, C = S.useMemo(
      () => Object.assign({}, r.defaultProps, ot(u)),
      [u]
    ), { props: N, styles: v } = on(
      C,
      x,
      j
    );
    let D = "", z = [v], I = N;
    if (N.theme == null) {
      I = {};
      for (let Y in N)
        I[Y] = N[Y];
      I.theme = S.useContext(er);
    }
    typeof N.className == "string" ? D = yo(
      d.registered,
      z,
      N.className
    ) : N.className != null && (D = We(D, N.className));
    const W = Qt(
      l.concat(z),
      d.registered,
      I
    );
    W.styles && (D = We(D, `${d.key}-${W.name}`)), n !== void 0 && (D = We(D, n));
    const B = !j("as");
    let G = B && N.as || i, L = {};
    for (let Y in N)
      if (!(B && Y === "as")) {
        if (rn(Y)) {
          const oe = Y.replace("html", "").toLowerCase();
          L[oe] = N[Y];
          continue;
        }
        j(Y) && (L[Y] = N[Y]);
      }
    let Q = D.trim();
    Q ? L.className = Q : Reflect.deleteProperty(L, "className"), L.ref = p;
    const ue = r.forwardAsChild || r.forwardProps?.includes("asChild");
    if (N.asChild && !ue) {
      const Y = S.isValidElement(N.children) ? S.Children.only(N.children) : S.Children.toArray(N.children).find(S.isValidElement);
      if (!Y)
        throw new Error("[chakra-ui > factory] No valid child found");
      G = Y.type, L.children = null, Reflect.deleteProperty(L, "asChild"), L = rr(L, Y.props), L.ref = Ua(p, Ka(Y));
    }
    return L.as && ue ? (L.as = void 0, /* @__PURE__ */ y.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        Er,
        {
          cache: d,
          serialized: W,
          isStringTag: typeof G == "string"
        }
      ),
      /* @__PURE__ */ y.jsx(G, { asChild: !0, ...L, children: /* @__PURE__ */ y.jsx(N.as, { children: L.children }) })
    ] })) : /* @__PURE__ */ y.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        Er,
        {
          cache: d,
          serialized: W,
          isStringTag: typeof G == "string"
        }
      ),
      /* @__PURE__ */ y.jsx(G, { ...L })
    ] });
  });
  return c.displayName = a !== void 0 ? a : `chakra(${typeof i == "string" ? i : i.displayName || i.name || "Component"})`, c.__emotion_real = c, c.__emotion_base = i, c.__emotion_forwardProp = r.shouldForwardProp, c.__emotion_cva = t, Object.defineProperty(c, "toString", {
    value() {
      return `.${n}`;
    }
  }), c;
}, Tt = pn.bind(), It = /* @__PURE__ */ new Map(), gn = new Proxy(Tt, {
  apply(e, t, r) {
    return Tt(...r);
  },
  get(e, t) {
    return It.has(t) || It.set(t, Tt(t)), It.get(t);
  }
}), Ne = gn, fn = (e, t) => e && !t ? e : !e && t ? t : e.merge(t), Ue = Ne("div");
Ue.displayName = "Box";
const mn = Object.freeze({});
function hn(e) {
  const { key: t, recipe: r } = e, o = ar();
  return S.useMemo(() => {
    const i = r || (t != null ? o.getRecipe(t) : {});
    return o.cva(structuredClone(i));
  }, [t, r, o]);
}
const bn = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function it(e) {
  const { key: t, recipe: r } = e, o = bn(
    t || r.className || "Component"
  ), [i, a] = _o({
    strict: !1,
    name: `${o}PropsContext`,
    providerName: `${o}PropsContext`
  });
  function n(u) {
    const { unstyled: d, ...p } = u, g = hn({
      key: t,
      recipe: p.recipe || r
    }), [_, k] = S.useMemo(
      () => g.splitVariantProps(p),
      [g, p]
    );
    return {
      styles: d ? mn : g(_),
      className: g.className,
      props: k
    };
  }
  const l = (u, d) => {
    const p = Ne(u, {}, d), g = S.forwardRef((_, k) => {
      const x = a(), w = S.useMemo(
        () => rr(x, _),
        [_, x]
      ), { styles: P, className: j, props: C } = n(w);
      return /* @__PURE__ */ y.jsx(
        p,
        {
          ...C,
          ref: k,
          css: [P, w.css],
          className: We(j, w.className)
        }
      );
    });
    return g.displayName = u.displayName || u.name, g;
  };
  function c() {
    return i;
  }
  return {
    withContext: l,
    PropsProvider: i,
    withPropsProvider: c,
    usePropsContext: a,
    useRecipeResult: n
  };
}
var Wt = (e) => typeof e == "string", vn = (e) => typeof e == "function", xn = (e, t) => Object.prototype.hasOwnProperty.call(e, t), yn = Function.prototype.toString;
yn.call(Object);
var kn = (...e) => (...t) => {
  e.forEach(function(r) {
    r?.(...t);
  });
};
function Sn(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function wn(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: o = "useContext",
    providerName: i = "Provider",
    errorMessage: a,
    defaultValue: n
  } = e, l = S.createContext(n);
  l.displayName = t;
  function c() {
    const u = S.useContext(l);
    if (!u && r) {
      const d = new Error(a ?? Sn(o, i));
      throw d.name = "ContextError", xn(Error, "captureStackTrace") && vn(Error.captureStackTrace) && Error.captureStackTrace(d, c), d;
    }
    return u;
  }
  return [l.Provider, c, l];
}
var zn = (...e) => e.map((t) => t?.trim?.()).filter(Boolean).join(" "), _n = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g, jr = (e) => {
  const t = {};
  let r;
  for (; r = _n.exec(e); )
    t[r[1]] = r[2];
  return t;
}, Cn = (e, t) => {
  if (Wt(e)) {
    if (Wt(t)) return `${e};${t}`;
    e = jr(e);
  } else Wt(t) && (t = jr(t));
  return Object.assign({}, e ?? {}, t ?? {});
};
function Co(...e) {
  let t = {};
  for (let r of e) {
    if (!r) continue;
    for (let i in t) {
      if (i.startsWith("on") && typeof t[i] == "function" && typeof r[i] == "function") {
        t[i] = kn(r[i], t[i]);
        continue;
      }
      if (i === "className" || i === "class") {
        t[i] = zn(t[i], r[i]);
        continue;
      }
      if (i === "style") {
        t[i] = Cn(t[i], r[i]);
        continue;
      }
      t[i] = r[i] !== void 0 ? r[i] : t[i];
    }
    for (let i in r)
      t[i] === void 0 && (t[i] = r[i]);
    const o = Object.getOwnPropertySymbols(r);
    for (let i of o)
      t[i] = r[i];
  }
  return t;
}
function Rn(...e) {
  return (t) => {
    const r = [];
    for (const o of e)
      if (typeof o == "function") {
        const i = o(t);
        typeof i == "function" && r.push(i);
      } else o && (o.current = t);
    if (r.length)
      return () => {
        for (const o of r)
          o();
      };
  };
}
function Pn(e) {
  let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning;
  return r ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, r = t && "isReactWarning" in t && t.isReactWarning, r ? e.props.ref : e.props.ref || e.ref);
}
const Et = (e) => {
  const t = S.memo(
    S.forwardRef((r, o) => {
      const { asChild: i, children: a, ...n } = r;
      if (!i)
        return S.createElement(e, { ...n, ref: o }, a);
      if (!S.isValidElement(a))
        return null;
      const l = S.Children.only(a), c = Pn(l);
      return S.cloneElement(l, {
        ...Co(n, l.props),
        ref: o ? Rn(o, c) : c
      });
    })
  );
  return t.displayName = e.displayName || e.name, t;
}, Tn = () => {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Et, {
    apply(t, r, o) {
      return Et(o[0]);
    },
    get(t, r) {
      const o = r;
      return e.has(o) || e.set(o, Et(o)), e.get(o);
    }
  });
}, In = Tn(), { withContext: Wn } = it({
  key: "heading"
}), Ro = Wn("h2");
Ro.displayName = "Heading";
const Xe = Ne("span");
Xe.displayName = "Span";
const { withContext: En } = it({
  key: "text"
}), ae = En("p");
ae.displayName = "Text";
var E = (e, t = []) => ({
  parts: (...r) => {
    if (An(t))
      return E(e, r);
    throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?");
  },
  extendWith: (...r) => E(e, [...t, ...r]),
  omit: (...r) => E(e, t.filter((o) => !r.includes(o))),
  rename: (r) => E(r, t),
  keys: () => t,
  build: () => [...new Set(t)].reduce(
    (r, o) => Object.assign(r, {
      [o]: {
        selector: [
          `&[data-scope="${Oe(e)}"][data-part="${Oe(o)}"]`,
          `& [data-scope="${Oe(e)}"][data-part="${Oe(o)}"]`
        ].join(", "),
        attrs: { "data-scope": Oe(e), "data-part": Oe(o) }
      }
    }),
    {}
  )
}), Oe = (e) => e.replace(/([A-Z])([A-Z])/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), An = (e) => e.length === 0, Po = E("collapsible").parts("root", "trigger", "content", "indicator");
Po.build();
var To = E("color-picker", [
  "root",
  "label",
  "control",
  "trigger",
  "positioner",
  "content",
  "area",
  "areaThumb",
  "valueText",
  "areaBackground",
  "channelSlider",
  "channelSliderLabel",
  "channelSliderTrack",
  "channelSliderThumb",
  "channelSliderValueText",
  "channelInput",
  "transparencyGrid",
  "swatchGroup",
  "swatchTrigger",
  "swatchIndicator",
  "swatch",
  "eyeDropperTrigger",
  "formatTrigger",
  "formatSelect"
]);
To.build();
var Io = E("date-picker").parts(
  "clearTrigger",
  "content",
  "control",
  "input",
  "label",
  "monthSelect",
  "nextTrigger",
  "positioner",
  "presetTrigger",
  "prevTrigger",
  "rangeText",
  "root",
  "table",
  "tableBody",
  "tableCell",
  "tableCellTrigger",
  "tableHead",
  "tableHeader",
  "tableRow",
  "trigger",
  "view",
  "viewControl",
  "viewTrigger",
  "yearSelect"
);
Io.build();
var Wo = E("splitter").parts("root", "panel", "resizeTrigger", "resizeTriggerIndicator");
Wo.build();
var Eo = E("accordion").parts("root", "item", "itemTrigger", "itemContent", "itemIndicator");
Eo.build();
var Ao = E("avatar").parts("root", "image", "fallback");
Ao.build();
var jo = E("carousel").parts(
  "root",
  "itemGroup",
  "item",
  "control",
  "nextTrigger",
  "prevTrigger",
  "indicatorGroup",
  "indicator",
  "autoplayTrigger",
  "progressText"
);
jo.build();
const jn = jo.extendWith("progressText", "autoplayIndicator");
var No = E("checkbox").parts("root", "label", "control", "indicator");
No.build();
const Nn = No.extendWith("group"), [fu, On] = wn({
  name: "FieldContext",
  hookName: "useFieldContext",
  providerName: "<FieldProvider />",
  strict: !1
});
var Oo = E("clipboard").parts("root", "control", "trigger", "indicator", "input", "label");
Oo.build();
const $n = To.extendWith("view");
var $o = E("combobox").parts(
  "root",
  "clearTrigger",
  "content",
  "control",
  "input",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "label",
  "list",
  "positioner",
  "trigger"
);
$o.build();
const Dn = $o.extendWith("empty"), Bn = Io.extendWith("view", "valueText");
var nr = E("dialog").parts(
  "trigger",
  "backdrop",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger"
);
nr.build();
var Do = E("editable").parts(
  "root",
  "area",
  "label",
  "preview",
  "input",
  "editTrigger",
  "submitTrigger",
  "cancelTrigger",
  "control"
);
Do.build();
const Bo = S.forwardRef((e, t) => {
  const r = On(), o = Co(r?.getInputProps(), e);
  return /* @__PURE__ */ y.jsx(In.input, { ...o, ref: t });
});
Bo.displayName = "FieldInput";
const Mo = E("field").parts(
  "root",
  "errorText",
  "helperText",
  "input",
  "label",
  "select",
  "textarea",
  "requiredIndicator"
);
Mo.build();
const Vo = E("fieldset").parts("root", "errorText", "helperText", "legend");
Vo.build();
var Lo = E("file-upload").parts(
  "root",
  "dropzone",
  "item",
  "itemDeleteTrigger",
  "itemGroup",
  "itemName",
  "itemPreview",
  "itemPreviewImage",
  "itemSizeText",
  "label",
  "trigger",
  "clearTrigger"
);
Lo.build();
var Fo = E("hoverCard").parts("arrow", "arrowTip", "trigger", "positioner", "content");
Fo.build();
var Ho = E("tree-view").parts(
  "branch",
  "branchContent",
  "branchControl",
  "branchIndentGuide",
  "branchIndicator",
  "branchText",
  "branchTrigger",
  "item",
  "itemIndicator",
  "itemText",
  "label",
  "nodeCheckbox",
  "nodeRenameInput",
  "root",
  "tree"
);
Ho.build();
var Go = E("listbox").parts(
  "label",
  "input",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "content",
  "root",
  "valueText"
);
Go.build();
const Mn = Go.extendWith("empty");
var Yo = E("marquee").parts("root", "viewport", "content", "edge", "item");
Yo.build();
var qo = E("menu").parts(
  "arrow",
  "arrowTip",
  "content",
  "contextTrigger",
  "indicator",
  "item",
  "itemGroup",
  "itemGroupLabel",
  "itemIndicator",
  "itemText",
  "positioner",
  "separator",
  "trigger",
  "triggerItem"
);
qo.build();
var Uo = E("numberInput").parts(
  "root",
  "label",
  "input",
  "control",
  "valueText",
  "incrementTrigger",
  "decrementTrigger",
  "scrubber"
);
Uo.build();
var Xo = E("pinInput").parts("root", "label", "input", "control");
Xo.build();
var Ko = E("popover").parts(
  "arrow",
  "arrowTip",
  "anchor",
  "trigger",
  "indicator",
  "positioner",
  "content",
  "title",
  "description",
  "closeTrigger"
);
Ko.build();
var sr = E("progress").parts(
  "root",
  "label",
  "track",
  "range",
  "valueText",
  "view",
  "circle",
  "circleTrack",
  "circleRange"
);
sr.build();
var Jo = E("qr-code").parts("root", "frame", "pattern", "overlay", "downloadTrigger");
Jo.build();
var lr = E("radio-group").parts(
  "root",
  "label",
  "item",
  "itemText",
  "itemControl",
  "indicator"
);
lr.build();
var Qo = E("rating-group").parts("root", "label", "item", "control");
Qo.build();
var Zo = E("scroll-area").parts("root", "viewport", "content", "scrollbar", "thumb", "corner");
Zo.build();
const ei = lr.rename("segment-group");
ei.build();
var ti = E("select").parts(
  "label",
  "positioner",
  "trigger",
  "indicator",
  "clearTrigger",
  "item",
  "itemText",
  "itemIndicator",
  "itemGroup",
  "itemGroupLabel",
  "list",
  "content",
  "root",
  "control",
  "valueText"
);
ti.build();
var ri = E("slider").parts(
  "root",
  "label",
  "thumb",
  "valueText",
  "track",
  "range",
  "control",
  "markerGroup",
  "marker",
  "draggingIndicator"
);
ri.build();
var oi = E("switch").parts("root", "label", "control", "thumb");
oi.build();
var ii = E("tagsInput").parts(
  "root",
  "label",
  "control",
  "input",
  "clearTrigger",
  "item",
  "itemPreview",
  "itemInput",
  "itemText",
  "itemDeleteTrigger"
);
ii.build();
var ai = E("tooltip").parts("trigger", "arrow", "arrowTip", "positioner", "content");
ai.build();
function ni(e, t = []) {
  const r = Object.assign({}, e);
  for (const o of t)
    o in r && delete r[o];
  return r;
}
const Vn = (e, t) => {
  if (!e || typeof e != "string")
    return { invalid: !0, value: e };
  const [r, o] = e.split("/");
  if (!r || !o || r === "currentBg")
    return { invalid: !0, value: r };
  const i = t(`colors.${r}`), a = t.raw(`opacity.${o}`)?.value;
  if (!a && isNaN(Number(o)))
    return { invalid: !0, value: r };
  const n = a ? Number(a) * 100 + "%" : `${o}%`, l = i ?? r;
  return {
    invalid: !1,
    color: l,
    value: `color-mix(in srgb, ${l} ${n}, transparent)`
  };
}, te = (e) => (t, r) => {
  const o = r.utils.colorMix(t);
  if (o.invalid) return { [e]: t };
  const i = "--mix-" + e;
  return {
    [i]: o.value,
    [e]: `var(${i}, ${o.color})`
  };
};
function Bt(e) {
  if (e === null || typeof e != "object") return e;
  if (Array.isArray(e)) return e.map((r) => Bt(r));
  const t = Object.create(Object.getPrototypeOf(e));
  for (const r of Object.keys(e))
    t[r] = Bt(e[r]);
  return t;
}
function Mt(e, t) {
  if (t == null) return e;
  for (const r of Object.keys(t))
    if (!(t[r] === void 0 || r === "__proto__"))
      if (!ve(e[r]) && ve(t[r]))
        Object.assign(e, { [r]: t[r] });
      else if (e[r] && ve(t[r]))
        Mt(e[r], t[r]);
      else if (Array.isArray(t[r]) && Array.isArray(e[r])) {
        let o = 0;
        for (; o < t[r].length; o++)
          ve(e[r][o]) && ve(t[r][o]) ? Mt(e[r][o], t[r][o]) : e[r][o] = t[r][o];
      } else
        Object.assign(e, { [r]: t[r] });
  return e;
}
function He(e, ...t) {
  for (const r of t)
    Mt(e, r);
  return e;
}
const Vt = (e) => e != null;
function Re(e, t, r = {}) {
  const { stop: o, getKey: i } = r;
  function a(n, l = []) {
    if (ve(n) || Array.isArray(n)) {
      const c = {};
      for (const [u, d] of Object.entries(n)) {
        const p = i?.(u, d) ?? u, g = [...l, p];
        if (o?.(n, g))
          return t(n, l);
        const _ = a(d, g);
        Vt(_) && (c[p] = _);
      }
      return c;
    }
    return t(n, l);
  }
  return a(e);
}
function si(e, t) {
  return Array.isArray(e) ? e.map((r) => Vt(r) ? t(r) : r) : ve(e) ? Re(e, (r) => t(r)) : Vt(e) ? t(e) : e;
}
const nt = ["value", "type", "description"], Ln = (e) => e && typeof e == "object" && !Array.isArray(e), li = (...e) => {
  const t = He({}, ...e.map(Bt));
  return t.theme?.tokens && Re(
    t.theme.tokens,
    (r) => {
      const a = Object.keys(r).filter((l) => !nt.includes(l)).length > 0, n = nt.some((l) => r[l] != null);
      return a && n && (r.DEFAULT || (r.DEFAULT = {}), nt.forEach((l) => {
        var c;
        r[l] != null && ((c = r.DEFAULT)[l] || (c[l] = r[l]), delete r[l]);
      })), r;
    },
    {
      stop(r) {
        return Ln(r) && Object.keys(r).some(
          (o) => nt.includes(o) || o !== o.toLowerCase() && o !== o.toUpperCase()
        );
      }
    }
  ), t;
}, Fn = (e) => e, de = (e) => e, A = (e) => e, Hn = (e) => e, Gn = (e) => e, Ee = (e) => e, Yn = (e) => e, qn = (e) => e, Un = (e) => e;
function ci() {
  const e = (t) => t;
  return new Proxy(e, {
    get() {
      return e;
    }
  });
}
const le = /* @__PURE__ */ ci(), cr = /* @__PURE__ */ ci(), di = (e) => e, Xn = /[^a-zA-Z0-9_\u0081-\uffff-]/g;
function Kn(e) {
  return `${e}`.replace(Xn, (t) => `\\${t}`);
}
const Jn = /[A-Z]/g;
function Qn(e) {
  return e.replace(Jn, (t) => `-${t.toLowerCase()}`);
}
function ui(e, t = {}) {
  const { fallback: r = "", prefix: o = "" } = t, i = Qn(["-", o, Kn(e)].filter(Boolean).join("-"));
  return {
    var: i,
    ref: `var(${i}${r ? `, ${r}` : ""})`
  };
}
const Zn = (e) => /^var\(--.+\)$/.test(e), pe = (e, t) => t != null ? `${e}(${t})` : t, Ae = (e) => {
  if (Zn(e) || e == null) return e;
  const t = typeof e == "string" && !e.endsWith("deg");
  return typeof e == "number" || t ? `${e}deg` : e;
}, Nr = (e) => ({
  values: ["outside", "inside", "mixed", "none"],
  transform(t, { token: r }) {
    const o = r("colors.colorPalette.focusRing");
    return {
      inside: {
        "--focus-ring-color": o,
        [e]: {
          outlineOffset: "0px",
          outlineWidth: "var(--focus-ring-width, 1px)",
          outlineColor: "var(--focus-ring-color)",
          outlineStyle: "var(--focus-ring-style, solid)",
          borderColor: "var(--focus-ring-color)"
        }
      },
      outside: {
        "--focus-ring-color": o,
        [e]: {
          outlineWidth: "var(--focus-ring-width, 2px)",
          outlineOffset: "var(--focus-ring-offset, 2px)",
          outlineStyle: "var(--focus-ring-style, solid)",
          outlineColor: "var(--focus-ring-color)"
        }
      },
      mixed: {
        "--focus-ring-color": o,
        [e]: {
          outlineWidth: "var(--focus-ring-width, 3px)",
          outlineStyle: "var(--focus-ring-style, solid)",
          outlineColor: "color-mix(in srgb, var(--focus-ring-color), transparent 60%)",
          borderColor: "var(--focus-ring-color)"
        }
      },
      none: {
        "--focus-ring-color": o,
        [e]: {
          outline: "none"
        }
      }
    }[t] ?? {};
  }
}), es = te("borderColor"), Te = (e) => ({
  transition: e,
  transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
  transitionDuration: "150ms"
}), ts = Fn({
  hover: [
    "@media (hover: hover)",
    "&:is(:hover, [data-hover]):not(:disabled, [data-disabled])"
  ],
  active: "&:is(:active, [data-active]):not(:disabled, [data-disabled], [data-state=open])",
  focus: "&:is(:focus, [data-focus])",
  focusWithin: "&:is(:focus-within, [data-focus-within])",
  focusVisible: "&:is(:focus-visible, [data-focus-visible])",
  disabled: "&:is(:disabled, [disabled], [data-disabled], [aria-disabled=true])",
  visited: "&:visited",
  target: "&:target",
  readOnly: "&:is([data-readonly], [aria-readonly=true], [readonly])",
  readWrite: "&:read-write",
  empty: "&:is(:empty, [data-empty])",
  checked: "&:is(:checked, [data-checked], [aria-checked=true], [data-state=checked])",
  enabled: "&:enabled",
  expanded: "&:is([aria-expanded=true], [data-expanded], [data-state=expanded])",
  highlighted: "&[data-highlighted]",
  complete: "&[data-complete]",
  incomplete: "&[data-incomplete]",
  dragging: "&[data-dragging]",
  before: "&::before",
  after: "&::after",
  firstLetter: "&::first-letter",
  firstLine: "&::first-line",
  marker: "&::marker",
  selection: "&::selection",
  file: "&::file-selector-button",
  backdrop: "&::backdrop",
  first: "&:first-of-type",
  last: "&:last-of-type",
  notFirst: "&:not(:first-of-type)",
  notLast: "&:not(:last-of-type)",
  only: "&:only-child",
  even: "&:nth-of-type(even)",
  odd: "&:nth-of-type(odd)",
  peerFocus: ".peer:is(:focus, [data-focus]) ~ &",
  peerHover: ".peer:is(:hover, [data-hover]):not(:disabled, [data-disabled]) ~ &",
  peerActive: ".peer:is(:active, [data-active]):not(:disabled, [data-disabled]) ~ &",
  peerFocusWithin: ".peer:focus-within ~ &",
  peerFocusVisible: ".peer:is(:focus-visible, [data-focus-visible]) ~ &",
  peerDisabled: ".peer:is(:disabled, [disabled], [data-disabled]) ~ &",
  peerChecked: ".peer:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) ~ &",
  peerInvalid: ".peer:is(:invalid, [data-invalid], [aria-invalid=true]) ~ &",
  peerExpanded: ".peer:is([aria-expanded=true], [data-expanded], [data-state=expanded]) ~ &",
  peerPlaceholderShown: ".peer:placeholder-shown ~ &",
  groupFocus: ".group:is(:focus, [data-focus]) &",
  groupHover: ".group:is(:hover, [data-hover]):not(:disabled, [data-disabled]) &",
  groupActive: ".group:is(:active, [data-active]):not(:disabled, [data-disabled]) &",
  groupFocusWithin: ".group:focus-within &",
  groupFocusVisible: ".group:is(:focus-visible, [data-focus-visible]) &",
  groupDisabled: ".group:is(:disabled, [disabled], [data-disabled]) &",
  groupChecked: ".group:is(:checked, [data-checked], [aria-checked=true], [data-state=checked]) &",
  groupExpanded: ".group:is([aria-expanded=true], [data-expanded], [data-state=expanded]) &",
  groupInvalid: ".group:invalid &",
  indeterminate: "&:is(:indeterminate, [data-indeterminate], [aria-checked=mixed], [data-state=indeterminate])",
  required: "&:is([data-required], [aria-required=true])",
  valid: "&:is([data-valid], [data-state=valid])",
  invalid: "&:is([data-invalid], [aria-invalid=true], [data-state=invalid])",
  autofill: "&:autofill",
  inRange: "&:is(:in-range, [data-in-range])",
  outOfRange: "&:is(:out-of-range, [data-outside-range])",
  placeholder: "&::placeholder, &[data-placeholder]",
  placeholderShown: "&:is(:placeholder-shown, [data-placeholder-shown])",
  pressed: "&:is([aria-pressed=true], [data-pressed])",
  selected: "&:is([aria-selected=true], [data-selected])",
  grabbed: "&:is([aria-grabbed=true], [data-grabbed])",
  underValue: "&[data-state=under-value]",
  overValue: "&[data-state=over-value]",
  atValue: "&[data-state=at-value]",
  default: "&:default",
  optional: "&:optional",
  open: "&:is([open], [data-open], [data-state=open])",
  closed: "&:is([closed], [data-closed], [data-state=closed])",
  fullscreen: "&:is(:fullscreen, [data-fullscreen])",
  loading: "&:is([data-loading], [aria-busy=true])",
  hidden: "&:is([hidden], [data-hidden])",
  current: "&[data-current]",
  currentPage: "&[aria-current=page]",
  currentStep: "&[aria-current=step]",
  today: "&[data-today]",
  unavailable: "&[data-unavailable]",
  rangeStart: "&[data-range-start]",
  rangeEnd: "&[data-range-end]",
  now: "&[data-now]",
  topmost: "&[data-topmost]",
  motionReduce: "@media (prefers-reduced-motion: reduce)",
  motionSafe: "@media (prefers-reduced-motion: no-preference)",
  print: "@media print",
  landscape: "@media (orientation: landscape)",
  portrait: "@media (orientation: portrait)",
  dark: ".dark &, .dark .chakra-theme:not(.light) &",
  light: ":root &, .light &",
  osDark: "@media (prefers-color-scheme: dark)",
  osLight: "@media (prefers-color-scheme: light)",
  highContrast: "@media (forced-colors: active)",
  lessContrast: "@media (prefers-contrast: less)",
  moreContrast: "@media (prefers-contrast: more)",
  ltr: "[dir=ltr] &",
  rtl: "[dir=rtl] &",
  scrollbar: "&::-webkit-scrollbar",
  scrollbarThumb: "&::-webkit-scrollbar-thumb",
  scrollbarTrack: "&::-webkit-scrollbar-track",
  horizontal: "&[data-orientation=horizontal]",
  vertical: "&[data-orientation=vertical]",
  icon: "& :where(svg)",
  starting: "@starting-style"
}), Be = ui("bg-currentcolor"), Or = (e) => e === Be.ref || e === "currentBg", ee = (e) => ({
  ...e("colors"),
  currentBg: Be
}), rs = di({
  conditions: ts,
  utilities: {
    // background
    background: {
      values: ee,
      shorthand: ["bg"],
      transform(e, t) {
        if (Or(t.raw)) return { background: Be.ref };
        const r = te("background")(e, t);
        return { ...r, [Be.var]: r?.background };
      }
    },
    backgroundColor: {
      values: ee,
      shorthand: ["bgColor"],
      transform(e, t) {
        if (Or(t.raw))
          return { backgroundColor: Be.ref };
        const r = te("backgroundColor")(e, t);
        return {
          ...r,
          [Be.var]: r?.backgroundColor
        };
      }
    },
    backgroundSize: { shorthand: ["bgSize"] },
    backgroundPosition: { shorthand: ["bgPos"] },
    backgroundRepeat: { shorthand: ["bgRepeat"] },
    backgroundAttachment: { shorthand: ["bgAttachment"] },
    backgroundClip: {
      shorthand: ["bgClip"],
      values: ["text"],
      transform(e) {
        return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
      }
    },
    backgroundGradient: {
      shorthand: ["bgGradient"],
      values(e) {
        return {
          ...e("gradients"),
          "to-t": "linear-gradient(to top, var(--gradient))",
          "to-tr": "linear-gradient(to top right, var(--gradient))",
          "to-r": "linear-gradient(to right, var(--gradient))",
          "to-br": "linear-gradient(to bottom right, var(--gradient))",
          "to-b": "linear-gradient(to bottom, var(--gradient))",
          "to-bl": "linear-gradient(to bottom left, var(--gradient))",
          "to-l": "linear-gradient(to left, var(--gradient))",
          "to-tl": "linear-gradient(to top left, var(--gradient))"
        };
      },
      transform(e) {
        return {
          "--gradient-stops": "var(--gradient-from), var(--gradient-to)",
          "--gradient": "var(--gradient-via-stops, var(--gradient-stops))",
          backgroundImage: e
        };
      }
    },
    gradientFrom: {
      values: ee,
      transform: te("--gradient-from")
    },
    gradientTo: {
      values: ee,
      transform: te("--gradient-to")
    },
    gradientVia: {
      values: ee,
      transform(e, t) {
        return {
          ...te("--gradient-via")(e, t),
          "--gradient-via-stops": "var(--gradient-from), var(--gradient-via), var(--gradient-to)"
        };
      }
    },
    backgroundImage: {
      values(e) {
        return { ...e("gradients"), ...e("assets") };
      },
      shorthand: ["bgImg", "bgImage"]
    },
    // border
    border: { values: "borders" },
    borderTop: { values: "borders" },
    borderLeft: { values: "borders" },
    borderBlockStart: { values: "borders" },
    borderRight: { values: "borders" },
    borderBottom: { values: "borders" },
    borderBlockEnd: { values: "borders" },
    borderInlineStart: { values: "borders", shorthand: ["borderStart"] },
    borderInlineEnd: { values: "borders", shorthand: ["borderEnd"] },
    borderInline: { values: "borders", shorthand: ["borderX"] },
    borderBlock: { values: "borders", shorthand: ["borderY"] },
    // border colors
    borderColor: {
      values: ee,
      transform: te("borderColor")
    },
    borderTopColor: {
      values: ee,
      transform: te("borderTopColor")
    },
    borderBlockStartColor: {
      values: ee,
      transform: te("borderBlockStartColor")
    },
    borderBottomColor: {
      values: ee,
      transform: te("borderBottomColor")
    },
    borderBlockEndColor: {
      values: ee,
      transform: te("borderBlockEndColor")
    },
    borderLeftColor: {
      values: ee,
      transform: te("borderLeftColor")
    },
    borderInlineStartColor: {
      values: ee,
      shorthand: ["borderStartColor"],
      transform: te("borderInlineStartColor")
    },
    borderRightColor: {
      values: ee,
      transform: te("borderRightColor")
    },
    borderInlineEndColor: {
      values: ee,
      shorthand: ["borderEndColor"],
      transform: te("borderInlineEndColor")
    },
    // border styles
    borderStyle: { values: "borderStyles" },
    borderTopStyle: { values: "borderStyles" },
    borderBlockStartStyle: { values: "borderStyles" },
    borderBottomStyle: { values: "borderStyles" },
    borderBlockEndStyle: {
      values: "borderStyles"
    },
    borderInlineStartStyle: {
      values: "borderStyles",
      shorthand: ["borderStartStyle"]
    },
    borderInlineEndStyle: {
      values: "borderStyles",
      shorthand: ["borderEndStyle"]
    },
    borderLeftStyle: { values: "borderStyles" },
    borderRightStyle: { values: "borderStyles" },
    // border radius
    borderRadius: { values: "radii", shorthand: ["rounded"] },
    borderTopLeftRadius: { values: "radii", shorthand: ["roundedTopLeft"] },
    borderStartStartRadius: {
      values: "radii",
      shorthand: ["roundedStartStart", "borderTopStartRadius"]
    },
    borderEndStartRadius: {
      values: "radii",
      shorthand: ["roundedEndStart", "borderBottomStartRadius"]
    },
    borderTopRightRadius: {
      values: "radii",
      shorthand: ["roundedTopRight"]
    },
    borderStartEndRadius: {
      values: "radii",
      shorthand: ["roundedStartEnd", "borderTopEndRadius"]
    },
    borderEndEndRadius: {
      values: "radii",
      shorthand: ["roundedEndEnd", "borderBottomEndRadius"]
    },
    borderBottomLeftRadius: {
      values: "radii",
      shorthand: ["roundedBottomLeft"]
    },
    borderBottomRightRadius: {
      values: "radii",
      shorthand: ["roundedBottomRight"]
    },
    borderInlineStartRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedStart", "borderStartRadius"],
      transform: (e) => ({
        borderStartStartRadius: e,
        borderEndStartRadius: e
      })
    },
    borderInlineEndRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedEnd", "borderEndRadius"],
      transform: (e) => ({
        borderStartEndRadius: e,
        borderEndEndRadius: e
      })
    },
    borderTopRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedTop"],
      transform: (e) => ({
        borderTopLeftRadius: e,
        borderTopRightRadius: e
      })
    },
    borderBottomRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedBottom"],
      transform: (e) => ({
        borderBottomLeftRadius: e,
        borderBottomRightRadius: e
      })
    },
    borderLeftRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedLeft"],
      transform: (e) => ({
        borderTopLeftRadius: e,
        borderBottomLeftRadius: e
      })
    },
    borderRightRadius: {
      values: "radii",
      property: "borderRadius",
      shorthand: ["roundedRight"],
      transform: (e) => ({
        borderTopRightRadius: e,
        borderBottomRightRadius: e
      })
    },
    borderWidth: { values: "borderWidths" },
    borderBlockStartWidth: { values: "borderWidths" },
    borderTopWidth: { values: "borderWidths" },
    borderBottomWidth: { values: "borderWidths" },
    borderBlockEndWidth: { values: "borderWidths" },
    borderRightWidth: { values: "borderWidths" },
    borderInlineWidth: {
      values: "borderWidths",
      shorthand: ["borderXWidth"]
    },
    borderInlineStartWidth: {
      values: "borderWidths",
      shorthand: ["borderStartWidth"]
    },
    borderInlineEndWidth: {
      values: "borderWidths",
      shorthand: ["borderEndWidth"]
    },
    borderLeftWidth: { values: "borderWidths" },
    borderBlockWidth: {
      values: "borderWidths",
      shorthand: ["borderYWidth"]
    },
    // colors
    color: {
      values: ee,
      transform: te("color")
    },
    fill: {
      values: ee,
      transform: te("fill")
    },
    stroke: {
      values: ee,
      transform: te("stroke")
    },
    accentColor: {
      values: ee,
      transform: te("accentColor")
    },
    // divide
    divideX: {
      values: { type: "string" },
      transform(e) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
            borderInlineStartWidth: e,
            borderInlineEndWidth: "0px"
          }
        };
      }
    },
    divideY: {
      values: { type: "string" },
      transform(e) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
            borderTopWidth: e,
            borderBottomWidth: "0px"
          }
        };
      }
    },
    divideColor: {
      values: ee,
      transform(e, t) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": es(
            e,
            t
          )
        };
      }
    },
    divideStyle: {
      property: "borderStyle",
      transform(e) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
            borderStyle: e
          }
        };
      }
    },
    // effects
    boxShadow: { values: "shadows", shorthand: ["shadow"] },
    boxShadowColor: {
      values: ee,
      transform: te("--shadow-color"),
      shorthand: ["shadowColor"]
    },
    mixBlendMode: { shorthand: ["blendMode"] },
    backgroundBlendMode: { shorthand: ["bgBlendMode"] },
    opacity: { values: "opacity" },
    // filters
    filter: {
      transform(e) {
        return e !== "auto" ? { filter: e } : {
          filter: "var(--blur) var(--brightness) var(--contrast) var(--grayscale) var(--hue-rotate) var(--invert) var(--saturate) var(--sepia) var(--drop-shadow)"
        };
      }
    },
    blur: {
      values: "blurs",
      transform: (e) => ({ "--blur": pe("blur", e) })
    },
    brightness: {
      transform: (e) => ({ "--brightness": pe("brightness", e) })
    },
    contrast: {
      transform: (e) => ({ "--contrast": pe("contrast", e) })
    },
    grayscale: {
      transform: (e) => ({ "--grayscale": pe("grayscale", e) })
    },
    hueRotate: {
      transform: (e) => ({ "--hue-rotate": pe("hue-rotate", Ae(e)) })
    },
    invert: { transform: (e) => ({ "--invert": pe("invert", e) }) },
    saturate: {
      transform: (e) => ({ "--saturate": pe("saturate", e) })
    },
    sepia: { transform: (e) => ({ "--sepia": pe("sepia", e) }) },
    dropShadow: {
      transform: (e) => ({ "--drop-shadow": pe("drop-shadow", e) })
    },
    // backdrop filters
    backdropFilter: {
      transform(e) {
        return e !== "auto" ? { backdropFilter: e } : {
          backdropFilter: "var(--backdrop-blur) var(--backdrop-brightness) var(--backdrop-contrast) var(--backdrop-grayscale) var(--backdrop-hue-rotate) var(--backdrop-invert) var(--backdrop-opacity) var(--backdrop-saturate) var(--backdrop-sepia)"
        };
      }
    },
    backdropBlur: {
      values: "blurs",
      transform: (e) => ({ "--backdrop-blur": pe("blur", e) })
    },
    backdropBrightness: {
      transform: (e) => ({
        "--backdrop-brightness": pe("brightness", e)
      })
    },
    backdropContrast: {
      transform: (e) => ({ "--backdrop-contrast": pe("contrast", e) })
    },
    backdropGrayscale: {
      transform: (e) => ({
        "--backdrop-grayscale": pe("grayscale", e)
      })
    },
    backdropHueRotate: {
      transform: (e) => ({
        "--backdrop-hue-rotate": pe("hue-rotate", Ae(e))
      })
    },
    backdropInvert: {
      transform: (e) => ({ "--backdrop-invert": pe("invert", e) })
    },
    backdropOpacity: {
      transform: (e) => ({ "--backdrop-opacity": pe("opacity", e) })
    },
    backdropSaturate: {
      transform: (e) => ({ "--backdrop-saturate": pe("saturate", e) })
    },
    backdropSepia: {
      transform: (e) => ({ "--backdrop-sepia": pe("sepia", e) })
    },
    // flexbox
    flexBasis: { values: "sizes" },
    gap: { values: "spacing" },
    rowGap: { values: "spacing", shorthand: ["gapY"] },
    columnGap: { values: "spacing", shorthand: ["gapX"] },
    flexDirection: { shorthand: ["flexDir"] },
    // grid
    gridGap: { values: "spacing" },
    gridColumnGap: { values: "spacing" },
    gridRowGap: { values: "spacing" },
    // interactivity
    outlineColor: {
      values: ee,
      transform: te("outlineColor")
    },
    focusRing: Nr("&:is(:focus, [data-focus])"),
    focusVisibleRing: Nr(
      "&:is(:focus-visible, [data-focus-visible])"
    ),
    focusRingColor: {
      values: ee,
      transform: te("--focus-ring-color")
    },
    focusRingOffset: {
      values: "spacing",
      transform: (e) => ({ "--focus-ring-offset": e })
    },
    focusRingWidth: {
      values: "borderWidths",
      property: "outlineWidth",
      transform: (e) => ({ "--focus-ring-width": e })
    },
    focusRingStyle: {
      values: "borderStyles",
      property: "outlineStyle",
      transform: (e) => ({ "--focus-ring-style": e })
    },
    // layout
    aspectRatio: { values: "aspectRatios" },
    width: { values: "sizes", shorthand: ["w"] },
    inlineSize: { values: "sizes" },
    height: { values: "sizes", shorthand: ["h"] },
    blockSize: { values: "sizes" },
    boxSize: {
      values: "sizes",
      property: "width",
      transform: (e) => ({ width: e, height: e })
    },
    minWidth: { values: "sizes", shorthand: ["minW"] },
    minInlineSize: { values: "sizes" },
    minHeight: { values: "sizes", shorthand: ["minH"] },
    minBlockSize: { values: "sizes" },
    maxWidth: { values: "sizes", shorthand: ["maxW"] },
    maxInlineSize: { values: "sizes" },
    maxHeight: { values: "sizes", shorthand: ["maxH"] },
    maxBlockSize: { values: "sizes" },
    hideFrom: {
      values: "breakpoints",
      //@ts-ignore
      transform: (e, { raw: t, token: r }) => ({
        [r.raw(`breakpoints.${t}`) ? `@breakpoint ${t}` : `@media screen and (min-width: ${e})`]: { display: "none" }
      })
    },
    hideBelow: {
      values: "breakpoints",
      //@ts-ignore
      transform(e, { raw: t, token: r }) {
        return {
          [r.raw(`breakpoints.${t}`) ? `@breakpoint ${t}Down` : `@media screen and (max-width: ${e})`]: {
            display: "none"
          }
        };
      }
    },
    // scroll
    overscrollBehavior: { shorthand: ["overscroll"] },
    overscrollBehaviorX: { shorthand: ["overscrollX"] },
    overscrollBehaviorY: { shorthand: ["overscrollY"] },
    scrollbar: {
      values: ["visible", "hidden"],
      transform(e) {
        switch (e) {
          case "visible":
            return {
              msOverflowStyle: "auto",
              scrollbarWidth: "auto",
              "&::-webkit-scrollbar": { display: "block" }
            };
          case "hidden":
            return {
              msOverflowStyle: "none",
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": { display: "none" }
            };
          default:
            return {};
        }
      }
    },
    scrollbarColor: {
      values: ee,
      transform: te("scrollbarColor")
    },
    scrollbarGutter: { values: "spacing" },
    scrollbarWidth: { values: "sizes" },
    // scroll margin
    scrollMargin: { values: "spacing" },
    scrollMarginTop: { values: "spacing" },
    scrollMarginBottom: { values: "spacing" },
    scrollMarginLeft: { values: "spacing" },
    scrollMarginRight: { values: "spacing" },
    scrollMarginX: {
      values: "spacing",
      transform: (e) => ({ scrollMarginLeft: e, scrollMarginRight: e })
    },
    scrollMarginY: {
      values: "spacing",
      transform: (e) => ({ scrollMarginTop: e, scrollMarginBottom: e })
    },
    // scroll padding
    scrollPadding: { values: "spacing" },
    scrollPaddingTop: { values: "spacing" },
    scrollPaddingBottom: { values: "spacing" },
    scrollPaddingLeft: { values: "spacing" },
    scrollPaddingRight: { values: "spacing" },
    scrollPaddingInline: { values: "spacing", shorthand: ["scrollPaddingX"] },
    scrollPaddingBlock: { values: "spacing", shorthand: ["scrollPaddingY"] },
    // scroll snap
    scrollSnapType: {
      values: {
        none: "none",
        x: "x var(--scroll-snap-strictness)",
        y: "y var(--scroll-snap-strictness)",
        both: "both var(--scroll-snap-strictness)"
      }
    },
    scrollSnapStrictness: {
      values: ["mandatory", "proximity"],
      transform: (e) => ({ "--scroll-snap-strictness": e })
    },
    scrollSnapMargin: { values: "spacing" },
    scrollSnapMarginTop: { values: "spacing" },
    scrollSnapMarginBottom: { values: "spacing" },
    scrollSnapMarginLeft: { values: "spacing" },
    scrollSnapMarginRight: { values: "spacing" },
    // list
    listStylePosition: { shorthand: ["listStylePos"] },
    listStyleImage: { values: "assets", shorthand: ["listStyleImg"] },
    // position
    position: { shorthand: ["pos"] },
    zIndex: { values: "zIndex" },
    inset: { values: "spacing" },
    insetInline: { values: "spacing", shorthand: ["insetX"] },
    insetBlock: { values: "spacing", shorthand: ["insetY"] },
    top: { values: "spacing" },
    insetBlockStart: { values: "spacing" },
    bottom: { values: "spacing" },
    insetBlockEnd: { values: "spacing" },
    left: { values: "spacing" },
    right: { values: "spacing" },
    insetInlineStart: {
      values: "spacing",
      shorthand: ["insetStart"]
    },
    insetInlineEnd: {
      values: "spacing",
      shorthand: ["insetEnd"]
    },
    // shadow / ring
    ring: {
      transform(e) {
        return {
          "--ring-offset-shadow": "var(--ring-inset) 0 0 0 var(--ring-offset-width) var(--ring-offset-color)",
          "--ring-shadow": "var(--ring-inset) 0 0 0 calc(var(--ring-width) + var(--ring-offset-width)) var(--ring-color)",
          "--ring-width": e,
          boxShadow: "var(--ring-offset-shadow), var(--ring-shadow), var(--shadow, 0 0 #0000)"
        };
      }
    },
    ringColor: {
      values: ee,
      transform: te("--ring-color")
    },
    ringOffset: {
      transform: (e) => ({ "--ring-offset-width": e })
    },
    ringOffsetColor: {
      values: ee,
      transform: te("--ring-offset-color")
    },
    ringInset: {
      transform: (e) => ({ "--ring-inset": e })
    },
    // margin
    margin: { values: "spacing", shorthand: ["m"] },
    marginTop: { values: "spacing", shorthand: ["mt"] },
    marginBlockStart: { values: "spacing" },
    marginRight: { values: "spacing", shorthand: ["mr"] },
    marginBottom: { values: "spacing", shorthand: ["mb"] },
    marginBlockEnd: { values: "spacing" },
    marginLeft: { values: "spacing", shorthand: ["ml"] },
    marginInlineStart: { values: "spacing", shorthand: ["ms", "marginStart"] },
    marginInlineEnd: { values: "spacing", shorthand: ["me", "marginEnd"] },
    marginInline: { values: "spacing", shorthand: ["mx", "marginX"] },
    marginBlock: { values: "spacing", shorthand: ["my", "marginY"] },
    // padding
    padding: { values: "spacing", shorthand: ["p"] },
    paddingTop: { values: "spacing", shorthand: ["pt"] },
    paddingRight: { values: "spacing", shorthand: ["pr"] },
    paddingBottom: { values: "spacing", shorthand: ["pb"] },
    paddingBlockStart: { values: "spacing" },
    paddingBlockEnd: { values: "spacing" },
    paddingLeft: { values: "spacing", shorthand: ["pl"] },
    paddingInlineStart: {
      values: "spacing",
      shorthand: ["ps", "paddingStart"]
    },
    paddingInlineEnd: { values: "spacing", shorthand: ["pe", "paddingEnd"] },
    paddingInline: { values: "spacing", shorthand: ["px", "paddingX"] },
    paddingBlock: { values: "spacing", shorthand: ["py", "paddingY"] },
    // text decoration
    textDecoration: { shorthand: ["textDecor"] },
    textDecorationColor: {
      values: ee,
      transform: te("textDecorationColor")
    },
    textShadow: { values: "shadows" },
    // transform
    transform: {
      transform: (e) => {
        let t = e;
        return e === "auto" && (t = "translateX(var(--translate-x, 0)) translateY(var(--translate-y, 0)) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"), e === "auto-gpu" && (t = "translate3d(var(--translate-x, 0), var(--translate-y, 0), 0) rotate(var(--rotate, 0)) scaleX(var(--scale-x, 1)) scaleY(var(--scale-y, 1)) skewX(var(--skew-x, 0)) skewY(var(--skew-y, 0))"), { transform: t };
      }
    },
    skewX: { transform: (e) => ({ "--skew-x": Ae(e) }) },
    skewY: { transform: (e) => ({ "--skew-y": Ae(e) }) },
    scaleX: { transform: (e) => ({ "--scale-x": e }) },
    scaleY: { transform: (e) => ({ "--scale-y": e }) },
    scale: {
      transform(e) {
        return e !== "auto" ? { scale: e } : {
          scale: "var(--scale-x, 1) var(--scale-y, 1)"
        };
      }
    },
    spaceXReverse: {
      values: { type: "boolean" },
      transform(e) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
            "--space-x-reverse": e ? "1" : void 0
          }
        };
      }
    },
    spaceX: {
      property: "marginInlineStart",
      values: "spacing",
      transform: (e) => ({
        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
          "--space-x-reverse": "0",
          marginInlineStart: `calc(${e} * calc(1 - var(--space-x-reverse)))`,
          marginInlineEnd: `calc(${e} * var(--space-x-reverse))`
        }
      })
    },
    spaceYReverse: {
      values: { type: "boolean" },
      transform(e) {
        return {
          "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
            "--space-y-reverse": e ? "1" : void 0
          }
        };
      }
    },
    spaceY: {
      property: "marginTop",
      values: "spacing",
      transform: (e) => ({
        "& > :not(style, [hidden]) ~ :not(style, [hidden])": {
          "--space-y-reverse": "0",
          marginTop: `calc(${e} * calc(1 - var(--space-y-reverse)))`,
          marginBottom: `calc(${e} * var(--space-y-reverse))`
        }
      })
    },
    rotate: {
      transform(e) {
        return e !== "auto" ? { rotate: Ae(e) } : {
          rotate: "var(--rotate-x, 0) var(--rotate-y, 0) var(--rotate-z, 0)"
        };
      }
    },
    rotateX: {
      transform(e) {
        return { "--rotate-x": Ae(e) };
      }
    },
    rotateY: {
      transform(e) {
        return { "--rotate-y": Ae(e) };
      }
    },
    // transform / translate
    translate: {
      transform(e) {
        return e !== "auto" ? { translate: e } : {
          translate: "var(--translate-x) var(--translate-y)"
        };
      }
    },
    translateX: {
      values: "spacing",
      transform: (e) => ({ "--translate-x": e })
    },
    translateY: {
      values: "spacing",
      transform: (e) => ({ "--translate-y": e })
    },
    // transition
    transition: {
      values: [
        "all",
        "common",
        "colors",
        "opacity",
        "position",
        "backgrounds",
        "size",
        "shadow",
        "transform"
      ],
      transform(e) {
        switch (e) {
          case "all":
            return Te("all");
          case "position":
            return Te(
              "left, right, top, bottom, inset-inline, inset-block"
            );
          case "colors":
            return Te(
              "color, background-color, border-color, text-decoration-color, fill, stroke"
            );
          case "opacity":
            return Te("opacity");
          case "shadow":
            return Te("box-shadow");
          case "transform":
            return Te("transform");
          case "size":
            return Te("width, height");
          case "backgrounds":
            return Te(
              "background, background-color, background-image, background-position"
            );
          case "common":
            return Te(
              "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter"
            );
          default:
            return { transition: e };
        }
      }
    },
    transitionDuration: { values: "durations" },
    transitionProperty: {
      values: {
        common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, translate, transform",
        colors: "background-color, border-color, color, fill, stroke",
        size: "width, height",
        position: "left, right, top, bottom, inset-inline, inset-block",
        background: "background, background-color, background-image, background-position"
      }
    },
    transitionTimingFunction: { values: "easings" },
    // animation
    animation: { values: "animations" },
    animationDuration: { values: "durations" },
    animationDelay: { values: "durations" },
    animationTimingFunction: { values: "easings" },
    // typography
    fontFamily: { values: "fonts" },
    fontSize: { values: "fontSizes" },
    fontWeight: { values: "fontWeights" },
    lineHeight: { values: "lineHeights" },
    letterSpacing: { values: "letterSpacings" },
    textIndent: { values: "spacing" },
    truncate: {
      values: { type: "boolean" },
      transform(e) {
        return e === !0 ? {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        } : {};
      }
    },
    lineClamp: {
      transform(e) {
        return e === "none" ? {
          WebkitLineClamp: "unset"
        } : {
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: e,
          WebkitBoxOrient: "vertical",
          textWrap: "wrap"
        };
      }
    },
    // table
    borderSpacing: {
      values: (e) => ({
        ...e("spacing"),
        auto: "var(--border-spacing-x, 0) var(--border-spacing-y, 0)"
      })
    },
    borderSpacingX: {
      values: "spacing",
      transform(e) {
        return {
          "--border-spacing-x": e
        };
      }
    },
    borderSpacingY: {
      values: "spacing",
      transform(e) {
        return {
          "--border-spacing-y": e
        };
      }
    },
    // helpers
    srOnly: {
      values: { type: "boolean" },
      transform(e) {
        return os[e] || {};
      }
    },
    debug: {
      values: { type: "boolean" },
      transform(e) {
        return e ? {
          outline: "1px solid blue !important",
          "& > *": {
            outline: "1px solid red !important"
          }
        } : {};
      }
    },
    caretColor: {
      values: ee,
      transform: te("caretColor")
    },
    cursor: { values: "cursor" }
  }
}), os = {
  true: {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0"
  },
  false: {
    position: "static",
    width: "auto",
    height: "auto",
    padding: "0",
    margin: "0",
    overflow: "visible",
    clip: "auto",
    whiteSpace: "normal"
  }
};
var is = "", as = is.split(","), ns = "WebkitAppearance,WebkitBorderBefore,WebkitBorderBeforeColor,WebkitBorderBeforeStyle,WebkitBorderBeforeWidth,WebkitBoxReflect,WebkitLineClamp,WebkitMask,WebkitMaskAttachment,WebkitMaskClip,WebkitMaskComposite,WebkitMaskImage,WebkitMaskOrigin,WebkitMaskPosition,WebkitMaskPositionX,WebkitMaskPositionY,WebkitMaskRepeat,WebkitMaskRepeatX,WebkitMaskRepeatY,WebkitMaskSize,WebkitOverflowScrolling,WebkitTapHighlightColor,WebkitTextFillColor,WebkitTextStroke,WebkitTextStrokeColor,WebkitTextStrokeWidth,WebkitTouchCallout,WebkitUserModify,WebkitUserSelect,accentColor,alignContent,alignItems,alignSelf,alignTracks,all,anchorName,anchorScope,animation,animationComposition,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationRange,animationRangeEnd,animationRangeStart,animationTimeline,animationTimingFunction,appearance,aspectRatio,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundSize,blockSize,border,borderBlock,borderBlockColor,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBlockStyle,borderBlockWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderEndEndRadius,borderEndStartRadius,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInline,borderInlineColor,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderInlineStyle,borderInlineWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStartEndRadius,borderStartStartRadius,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxAlign,boxDecorationBreak,boxDirection,boxFlex,boxFlexGroup,boxLines,boxOrdinalGroup,boxOrient,boxPack,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,captionSide,caret,caretColor,caretShape,clear,clip,clipPath,clipRule,color,colorInterpolationFilters,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicBlockSize,containIntrinsicHeight,containIntrinsicInlineSize,containIntrinsicSize,containIntrinsicWidth,container,containerName,containerType,content,contentVisibility,cornerShape,counterIncrement,counterReset,counterSet,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fieldSizing,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontFamily,fontFeatureSettings,fontKerning,fontLanguageOverride,fontOpticalSizing,fontPalette,fontSize,fontSizeAdjust,fontSmooth,fontStretch,fontStyle,fontSynthesis,fontSynthesisPosition,fontSynthesisSmallCaps,fontSynthesisStyle,fontSynthesisWeight,fontVariant,fontVariantAlternates,fontVariantCaps,fontVariantEastAsian,fontVariantEmoji,fontVariantLigatures,fontVariantNumeric,fontVariantPosition,fontVariationSettings,fontWeight,forcedColorAdjust,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,hangingPunctuation,height,hyphenateCharacter,hyphenateLimitChars,hyphens,imageOrientation,imageRendering,imageResolution,imeMode,initialLetter,initialLetterAlign,inlineSize,inset,insetBlock,insetBlockEnd,insetBlockStart,insetInline,insetInlineEnd,insetInlineStart,interpolateSize,isolation,justifyContent,justifyItems,justifySelf,justifyTracks,left,letterSpacing,lightingColor,lineBreak,lineClamp,lineHeight,lineHeightStep,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlock,marginBlockEnd,marginBlockStart,marginBottom,marginInline,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marginTrim,marker,markerEnd,markerMid,markerStart,mask,maskBorder,maskBorderMode,maskBorderOutset,maskBorderRepeat,maskBorderSlice,maskBorderSource,maskBorderWidth,maskClip,maskComposite,maskImage,maskMode,maskOrigin,maskPosition,maskRepeat,maskSize,maskType,masonryAutoFlow,mathDepth,mathShift,mathStyle,maxBlockSize,maxHeight,maxInlineSize,maxLines,maxWidth,minBlockSize,minHeight,minInlineSize,minWidth,mixBlendMode,objectFit,objectPosition,offset,offsetAnchor,offsetDistance,offsetPath,offsetPosition,offsetRotate,opacity,order,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowBlock,overflowClipBox,overflowClipMargin,overflowInline,overflowWrap,overflowX,overflowY,overlay,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlock,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInline,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,page,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,positionAnchor,positionArea,positionTry,positionTryFallbacks,positionTryOrder,positionVisibility,printColorAdjust,quotes,r,resize,right,rotate,rowGap,rubyAlign,rubyMerge,rubyPosition,rx,ry,scale,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapCoordinate,scrollSnapDestination,scrollSnapPointsX,scrollSnapPointsY,scrollSnapStop,scrollSnapType,scrollSnapTypeX,scrollSnapTypeY,scrollTimeline,scrollTimelineAxis,scrollTimelineName,scrollbarColor,scrollbarGutter,scrollbarWidth,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textBox,textBoxEdge,textBoxTrim,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkip,textDecorationSkipInk,textDecorationStyle,textDecorationThickness,textEmphasis,textEmphasisColor,textEmphasisPosition,textEmphasisStyle,textIndent,textJustify,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textSpacingTrim,textTransform,textUnderlineOffset,textUnderlinePosition,textWrap,textWrapMode,textWrapStyle,timelineScope,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionBehavior,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,translate,unicodeBidi,userSelect,vectorEffect,verticalAlign,viewTimeline,viewTimelineAxis,viewTimelineInset,viewTimelineName,viewTransitionName,visibility,whiteSpace,whiteSpaceCollapse,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom,alignmentBaseline,baselineShift,colorInterpolation,colorRendering,glyphOrientationVertical", ss = ns.split(",").concat(as), ls = new Map(ss.map((e) => [e, !0]));
function cs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
var ds = /&|@/, us = /* @__PURE__ */ cs((e) => ls.has(e) || e.startsWith("--") || ds.test(e));
function ke(e, t) {
  const r = {};
  for (const o in e) {
    const i = t(o, e[o]);
    r[i[0]] = i[1];
  }
  return r;
}
function pi(e, t) {
  const r = {};
  return Re(
    e,
    (o, i) => {
      o && (r[i.join(".")] = o.value);
    },
    { stop: t }
  ), r;
}
var ps = Object.defineProperty, gs = (e, t, r) => t in e ? ps(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, $r = (e, t, r) => gs(e, typeof t != "symbol" ? t + "" : t, r);
function ft(e) {
  if (e === null) return "null";
  if (e === void 0) return "undefined";
  const t = typeof e;
  return t === "string" ? `s:${e}` : t === "number" ? `n:${e}` : t === "boolean" ? `b:${e}` : t === "function" ? `f:${e.name || "anonymous"}` : Array.isArray(e) ? `a:[${e.map(ft).join(",")}]` : t === "object" ? `o:{${Object.keys(e).sort().map((o) => `${o}:${ft(e[o])}`).join(",")}}` : String(e);
}
class fs {
  constructor(t = 500) {
    $r(this, "cache", /* @__PURE__ */ new Map()), $r(this, "maxSize"), this.maxSize = t;
  }
  get(t) {
    const r = this.cache.get(t);
    return r !== void 0 && (this.cache.delete(t), this.cache.set(t, r)), r;
  }
  set(t, r) {
    if (this.cache.has(t))
      this.cache.delete(t);
    else if (this.cache.size >= this.maxSize) {
      const o = this.cache.keys().next().value;
      o !== void 0 && this.cache.delete(o);
    }
    this.cache.set(t, r);
  }
  clear() {
    this.cache.clear();
  }
}
const be = (e) => {
  const t = new fs();
  function r(...o) {
    const i = o.length === 1 ? ft(o[0]) : o.map(ft).join("|");
    let a = t.get(i);
    return a === void 0 && (a = e.apply(this, o), t.set(i, a)), a;
  }
  return r;
}, gi = 16, mt = "px", dr = "em", Qe = "rem";
function fi(e = "") {
  const t = new RegExp(String.raw`-?\d+(?:\.\d+|\d*)`), r = new RegExp(`${mt}|${dr}|${Qe}`);
  return e.match(
    new RegExp(`${t.source}(${r.source})`)
  )?.[1];
}
function mi(e = "") {
  if (typeof e == "number")
    return `${e}px`;
  const t = fi(e);
  if (!t || t === mt)
    return e;
  if (t === dr || t === Qe)
    return `${parseFloat(e) * gi}${mt}`;
}
function hi(e = "") {
  const t = fi(e);
  if (!t || t === Qe)
    return e;
  if (t === dr)
    return `${parseFloat(e)}${Qe}`;
  if (t === mt)
    return `${parseFloat(e) / gi}${Qe}`;
}
const ms = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function hs(e) {
  const t = bs(e), r = Object.fromEntries(t);
  function o(g) {
    return r[g];
  }
  function i(g) {
    return $e(o(g));
  }
  function a() {
    const g = Object.keys(r), _ = vs(g), k = g.flatMap((x) => {
      const w = o(x), P = [
        `${x}Down`,
        $e({ max: pt(w.min) })
      ], j = [x, $e({ min: w.min })], C = [`${x}Only`, i(x)];
      return [j, C, P];
    }).filter(([, x]) => x !== "").concat(
      _.map(([x, w]) => {
        const P = o(x), j = o(w);
        return [
          `${x}To${ms(w)}`,
          $e({ min: P.min, max: pt(j.min) })
        ];
      })
    );
    return Object.fromEntries(k);
  }
  function n() {
    const g = a();
    return Object.fromEntries(Object.entries(g));
  }
  const l = n(), c = (g) => l[g];
  function u() {
    return ir(["base", ...Object.keys(r)]);
  }
  function d(g) {
    return $e({ min: o(g).min });
  }
  function p(g) {
    return $e({ max: pt(o(g).min) });
  }
  return {
    values: Object.values(r),
    only: i,
    keys: u,
    conditions: l,
    getCondition: c,
    up: d,
    down: p
  };
}
function pt(e) {
  const t = parseFloat(mi(e) ?? "") - 0.04;
  return hi(`${t}px`);
}
function bs(e) {
  return Object.entries(e).sort(([, r], [, o]) => parseInt(r, 10) < parseInt(o, 10) ? -1 : 1).map(([r, o], i, a) => {
    let n = null;
    return i <= a.length - 1 && (n = a[i + 1]?.[1]), n != null && (n = pt(n)), [r, { name: r, min: hi(o), max: n }];
  });
}
function vs(e) {
  const t = [];
  return e.forEach((r, o) => {
    let i = o;
    i++;
    let a = e[i];
    for (; a; )
      t.push([r, a]), i++, a = e[i];
  }), t;
}
function $e({
  min: e,
  max: t
}) {
  return e == null && t == null ? "" : [
    "@media screen",
    e && `(min-width: ${e})`,
    t && `(max-width: ${t})`
  ].filter(Boolean).join(" and ");
}
const xs = /^@|&|&$/, ys = (e) => {
  const { breakpoints: t, conditions: r = {} } = e, o = ke(r, (d, p) => [`_${d}`, p]), i = Object.assign({}, o, t.conditions);
  function a() {
    return Object.keys(i);
  }
  function n(d) {
    return a().includes(d) || xs.test(d) || d.startsWith("_");
  }
  const l = be((d) => d.filter((p) => p !== "base").sort((p, g) => {
    const _ = n(p), k = n(g);
    return _ && !k ? 1 : !_ && k ? -1 : 0;
  }));
  function c(d) {
    return d.startsWith("@breakpoint") ? t.getCondition(d.replace("@breakpoint ", "")) : d;
  }
  function u(d) {
    return Reflect.get(i, d) || d;
  }
  return {
    keys: a,
    sort: l,
    has: n,
    resolve: u,
    breakpoints: t.keys(),
    expandAtRule: c
  };
}, re = Object.freeze(/* @__PURE__ */ Object.create(null)), ks = Object.freeze([]);
function xt() {
  return /* @__PURE__ */ Object.create(null);
}
const bi = (e) => ({
  minMax: new RegExp(
    `(!?\\(\\s*min(-device-)?-${e})(.|
)+\\(\\s*max(-device)?-${e}`,
    "i"
  ),
  min: new RegExp(`\\(\\s*min(-device)?-${e}`, "i"),
  maxMin: new RegExp(
    `(!?\\(\\s*max(-device)?-${e})(.|
)+\\(\\s*min(-device)?-${e}`,
    "i"
  ),
  max: new RegExp(`\\(\\s*max(-device)?-${e}`, "i")
}), Ss = bi("width"), ws = bi("height"), vi = (e) => ({
  isMin: Fr(e.minMax, e.maxMin, e.min),
  isMax: Fr(e.maxMin, e.minMax, e.max)
}), { isMin: Lt, isMax: Dr } = vi(Ss), { isMin: Ft, isMax: Br } = vi(ws), Mr = /print/i, Vr = /^print$/i, zs = /(-?\d*\.?\d+)(ch|em|ex|px|rem)/, _s = /(\d)/, Ke = Number.MAX_VALUE, Cs = { ch: 8.8984375, em: 16, rem: 16, ex: 8.296875, px: 1 };
function Lr(e) {
  const t = zs.exec(e) || (Lt(e) || Ft(e) ? _s.exec(e) : null);
  if (!t) return Ke;
  if (t[0] === "0") return 0;
  const r = parseFloat(t[1]), o = t[2];
  return r * (Cs[o] || 1);
}
function Fr(e, t, r) {
  return (o) => e.test(o) || !t.test(o) && r.test(o);
}
function Rs(e, t) {
  const r = Mr.test(e), o = Vr.test(e), i = Mr.test(t), a = Vr.test(t);
  return r && i ? !o && a ? 1 : o && !a ? -1 : e.localeCompare(t) : r ? 1 : i ? -1 : null;
}
const Ps = be((e, t) => {
  const r = Rs(e, t);
  if (r !== null) return r;
  const o = Lt(e) || Ft(e), i = Dr(e) || Br(e), a = Lt(t) || Ft(t), n = Dr(t) || Br(t);
  if (o && n) return -1;
  if (i && a) return 1;
  const l = Lr(e), c = Lr(t);
  return l === Ke && c === Ke ? e.localeCompare(t) : l === Ke ? 1 : c === Ke ? -1 : l !== c ? l > c ? i ? -1 : 1 : i ? 1 : -1 : e.localeCompare(t);
});
function Hr(e) {
  return e.sort(([t], [r]) => Ps(t, r));
}
function xi(e) {
  const t = [], r = [], o = {};
  for (const [n, l] of Object.entries(e))
    n.startsWith("@media") ? t.push([n, l]) : n.startsWith("@container") ? r.push([n, l]) : ve(l) ? o[n] = xi(l) : o[n] = l;
  const i = Hr(t), a = Hr(r);
  return {
    ...o,
    ...Object.fromEntries(i),
    ...Object.fromEntries(a)
  };
}
const yi = /\s*!(important)?/i, Ts = be(
  (e) => Se(e) ? yi.test(e) : !1
), Is = be(
  (e) => Se(e) ? e.replace(yi, "").trim() : e
);
function ki(e) {
  const { transform: t, conditions: r, normalize: o } = e, i = As(e);
  return be(function(...n) {
    const l = i(...n), c = o(l), u = xt();
    return Re(c, (d, p) => {
      if (d == null) return;
      const [g, ..._] = r.sort(p).map(r.resolve), k = Ts(d);
      k && (d = Is(d));
      let x = t(g, d) ?? re;
      x = Re(
        x,
        (w) => Se(w) && k ? `${w} !important` : w,
        { getKey: (w) => r.expandAtRule(w) }
      ), Ws(u, _.flat(), x);
    }), xi(u);
  });
}
function Ws(e, t, r) {
  let o = e;
  for (const i of t)
    i && (o[i] || (o[i] = xt()), o = o[i]);
  He(o, r);
}
function Es(...e) {
  return e.filter((t) => {
    if (!ve(t)) return !1;
    const r = ot(t);
    return Object.keys(r).length > 0;
  });
}
function As(e) {
  function t(r) {
    const o = Es(...r);
    return o.length === 1 ? o : o.map((i) => e.normalize(i));
  }
  return be(function(...o) {
    return He({}, ...t(o));
  });
}
const Si = (e) => ({
  base: re,
  variants: re,
  defaultVariants: re,
  compoundVariants: [],
  ...e
});
function js(e) {
  const { css: t, conditions: r, normalize: o, layers: i } = e;
  function a(l = {}) {
    const c = Si(l), { base: u, defaultVariants: d, compoundVariants: p } = c, g = ke(c.variants, (C, N) => [
      C,
      ke(N, (v, D) => [v, o(D)])
    ]), _ = ki({
      conditions: r,
      normalize: o,
      transform(C, N) {
        return g[C]?.[N];
      }
    }), k = (C = {}) => {
      const N = o({
        ...d,
        ...ot(C)
      });
      let v = { ...o(u) };
      He(v, _(N));
      const D = n(
        p,
        N
      );
      return i.wrap("recipes", t(v, D));
    }, x = Object.keys(g), w = (C) => {
      const N = ni(C, ["recipe"]), [v, D] = Ve(N, x), z = x.includes("colorPalette"), I = x.includes("orientation");
      return z || (v.colorPalette = C.colorPalette || d.colorPalette), I && (D.orientation = C.orientation), [v, D];
    }, P = ke(g, (C, N) => [
      C,
      Object.keys(N)
    ]);
    return Object.assign((C) => t(k(C)), {
      className: l.className,
      __cva__: !0,
      variantMap: P,
      variantKeys: x,
      raw: k,
      config: l,
      splitVariantProps: w,
      merge(C) {
        return a(Ns(e)(this, C));
      }
    });
  }
  function n(l, c) {
    let u = re;
    return l.forEach((d) => {
      Object.entries(d).every(([g, _]) => g === "css" ? !0 : (Array.isArray(_) ? _ : [_]).some((x) => c[g] === x)) && (u = t(u, d.css));
    }), u;
  }
  return a;
}
function Ns(e) {
  const { css: t } = e;
  return function(o, i) {
    const a = Si(i.config), n = ir(o.variantKeys, Object.keys(i.variants)), l = t(o.base, a.base), c = Object.fromEntries(
      n.map((g) => [
        g,
        t(o.config.variants[g], a.variants[g])
      ])
    ), u = He(
      o.config.defaultVariants,
      a.defaultVariants
    ), d = [
      ...o.compoundVariants,
      ...a.compoundVariants
    ];
    return {
      className: We(o.className, i.className),
      base: l,
      variants: c,
      defaultVariants: u,
      compoundVariants: d
    };
  };
}
const Os = {
  reset: "reset",
  base: "base",
  tokens: "tokens",
  recipes: "recipes"
}, Gr = {
  reset: 0,
  base: 1,
  tokens: 2,
  recipes: 3
};
function $s(e) {
  const t = e.layers ?? Os, o = Object.values(t).sort((i, a) => Gr[i] - Gr[a]);
  return {
    names: o,
    atRule: `@layer ${o.join(", ")};`,
    wrap(i, a) {
      return e.disableLayers ? a : { [`@layer ${t[i]}`]: a };
    }
  };
}
function Ds(e) {
  const { utility: t, normalize: r } = e, { hasShorthand: o, resolveShorthand: i } = t;
  return function(a) {
    return Re(a, r, {
      stop: (n) => Array.isArray(n),
      getKey: o ? i : void 0
    });
  };
}
function Bs(e) {
  const { preflight: t } = e;
  if (!t) return {};
  const { scope: r = "", level: o = "parent" } = ve(t) ? t : {};
  let i = "";
  r && o === "parent" ? i = `${r} ` : r && o === "element" && (i = `&${r}`);
  const a = {
    "*": {
      margin: "0px",
      padding: "0px",
      font: "inherit",
      wordWrap: "break-word",
      WebkitTapHighlightColor: "transparent"
    },
    "*, *::before, *::after, *::backdrop": {
      boxSizing: "border-box",
      borderWidth: "0px",
      borderStyle: "solid",
      borderColor: "var(--global-color-border, currentColor)"
    },
    hr: {
      height: "0px",
      color: "inherit",
      borderTopWidth: "1px"
    },
    body: {
      minHeight: "100dvh",
      position: "relative"
    },
    img: {
      borderStyle: "none"
    },
    "img, svg, video, canvas, audio, iframe, embed, object": {
      display: "block",
      verticalAlign: "middle"
    },
    iframe: { border: "none" },
    "img, video": { maxWidth: "100%", height: "auto" },
    "p, h1, h2, h3, h4, h5, h6": { overflowWrap: "break-word" },
    "ol, ul": { listStyle: "none" },
    "code, kbd, pre, samp": { fontSize: "1em" },
    "button, [type='button'], [type='reset'], [type='submit']": {
      WebkitAppearance: "button",
      backgroundColor: "transparent",
      backgroundImage: "none"
    },
    "button, input, optgroup, select, textarea": { color: "inherit" },
    "button, select": { textTransform: "none" },
    table: {
      textIndent: "0px",
      borderColor: "inherit",
      borderCollapse: "collapse"
    },
    "*::placeholder": {
      opacity: "unset",
      color: "#9ca3af",
      userSelect: "none"
    },
    textarea: {
      resize: "vertical"
    },
    summary: {
      display: "list-item"
    },
    small: {
      fontSize: "80%"
    },
    "sub, sup": {
      fontSize: "75%",
      lineHeight: 0,
      position: "relative",
      verticalAlign: "baseline"
    },
    sub: {
      bottom: "-0.25em"
    },
    sup: {
      top: "-0.5em"
    },
    dialog: {
      padding: "0px"
    },
    a: {
      color: "inherit",
      textDecoration: "inherit"
    },
    "abbr:where([title])": {
      textDecoration: "underline dotted"
    },
    "b, strong": {
      fontWeight: "bolder"
    },
    "code, kbd, samp, pre": {
      fontSize: "1em",
      "--font-mono-fallback": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New'",
      fontFamily: "var(--global-font-mono, var(--font-mono-fallback))"
    },
    'input[type="text"], input[type="email"], input[type="search"], input[type="password"]': {
      WebkitAppearance: "none",
      MozAppearance: "none"
    },
    "input[type='search']": {
      WebkitAppearance: "textfield",
      outlineOffset: "-2px"
    },
    "::-webkit-search-decoration, ::-webkit-search-cancel-button": {
      WebkitAppearance: "none"
    },
    "::-webkit-file-upload-button": {
      WebkitAppearance: "button",
      font: "inherit"
    },
    'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
      height: "auto"
    },
    "input[type='number']": {
      MozAppearance: "textfield"
    },
    ":-moz-ui-invalid": {
      boxShadow: "none"
    },
    ":-moz-focusring": {
      outline: "auto"
    },
    "[hidden]:where(:not([hidden='until-found']))": {
      display: "none !important"
    }
  }, n = {
    [r || "html"]: {
      lineHeight: 1.5,
      "--font-fallback": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      textRendering: "optimizeLegibility",
      touchAction: "manipulation",
      MozTabSize: "4",
      tabSize: "4",
      fontFamily: "var(--global-font-body, var(--font-fallback))"
    }
  };
  if (o === "element") {
    const l = Object.entries(a).reduce((c, [u, d]) => (c[u] = { [i]: d }, c), {});
    Object.assign(n, l);
  } else i ? n[i] = a : Object.assign(n, a);
  return n;
}
function Ms(e) {
  const { conditions: t, isValidProperty: r } = e, o = be((i, a) => r(i) ? !a.split(",").every((n) => n === "base" || t.has(n)) : !0);
  return function(a) {
    return Re(a, (n) => n, {
      getKey: (n, l) => !ve(l) || t.has(n) ? n : o(n, Object.keys(l).join(",")) ? Ls(n).map((c) => {
        const u = c.startsWith("&") ? c.slice(1) : c;
        return Vs(u) ? `${u} &` : `&${u}`;
      }).join(", ") : n
    });
  };
}
function Vs(e) {
  const t = e.toLowerCase();
  return t.startsWith(":host-context") || t.startsWith(":host") || t.startsWith("::slotted");
}
function Ls(e) {
  const t = [];
  let r = 0, o = "", i = !1;
  for (let a = 0; a < e.length; a++) {
    const n = e[a];
    if (n === "\\" && !i) {
      i = !0, o += n;
      continue;
    }
    if (i) {
      i = !1, o += n;
      continue;
    }
    n === "(" ? r++ : n === ")" && r--, n === "," && r === 0 ? (t.push(o.trim()), o = "") : o += n;
  }
  return o && t.push(o.trim()), t;
}
const Fs = (e = re) => {
  const t = (i) => ({
    base: e.base?.[i] ?? re,
    variants: xt(),
    defaultVariants: e.defaultVariants ?? re,
    compoundVariants: e.compoundVariants ? Hs(e.compoundVariants, i) : ks
  }), o = (e.slots ?? []).map((i) => [i, t(i)]);
  for (const [i, a] of Object.entries(
    e.variants ?? {}
  ))
    for (const [n, l] of Object.entries(
      a
    ))
      o.forEach(([c, u]) => {
        var d;
        (d = u.variants)[i] ?? (d[i] = {}), u.variants[i][n] = l[c] ?? re;
      });
  return Object.fromEntries(o);
}, Hs = (e, t) => e.filter((r) => r.css[t]).map((r) => ({
  ...r,
  css: r.css[t]
}));
function Gs(e) {
  const { cva: t } = e;
  return function(o = re) {
    const i = Object.entries(Fs(o)).map(
      ([p, g]) => [p, t(g)]
    );
    function a(p) {
      const g = i.map(([_, k]) => [_, k(p)]);
      return Object.fromEntries(g);
    }
    const n = o.variants ?? re, l = Object.keys(n);
    function c(p) {
      const g = ni(p, ["recipe"]), [_, k] = Ve(g, l), x = l.includes("colorPalette"), w = l.includes("orientation");
      return x || (_.colorPalette = p.colorPalette || o.defaultVariants?.colorPalette), w && (k.orientation = p.orientation), [_, k];
    }
    const u = ke(n, (p, g) => [
      p,
      Object.keys(g)
    ]);
    let d = {};
    return o.className && (d = Object.fromEntries(
      o.slots.map((p) => [
        p,
        `${o.className}__${p}`
      ])
    )), Object.assign(a, {
      variantMap: u,
      variantKeys: l,
      splitVariantProps: c,
      classNameMap: d
    });
  };
}
const Ys = () => (e) => Array.from(new Set(e)), qs = /([\0-\x1f\x7f]|^-?\d)|^-$|^-|[^\x80-\uFFFF\w-]/g, Us = function(e, t) {
  return t ? e === "\0" ? "�" : e === "-" && e.length === 1 ? "\\-" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) : "\\" + e;
}, wi = (e) => (e + "").replace(qs, Us), zi = (e, t) => {
  let r = "", o = 0, i = "char", a = "", n = "";
  const l = [];
  for (; o < e.length; ) {
    const c = e[o];
    if (c === "{") {
      const d = e.indexOf("}", o);
      if (d === -1)
        break;
      const p = e.slice(o + 1, d), g = t(p);
      r += g ?? p, o = d + 1;
      continue;
    }
    if (i === "token" && c === ",") {
      e[o] === "" && o++, i = "fallback", l.push(i);
      const d = t(a);
      d?.endsWith(")") && (r += d.slice(0, -1)), a = "", n = "";
      continue;
    }
    if (i === "fallback" && n + c === ", var(") {
      const g = Xs(e.slice(o + 1)) + o + 1, _ = e.slice(o + 1, g);
      if (g === -1)
        break;
      r += ", var(" + _ + ")", o = g + 1, i = l.pop() ?? i, n = "";
      continue;
    }
    if (i === "token" || i === "fallback") {
      if (o++, c === ")") {
        i = l.pop() ?? i ?? "char", n += c;
        const d = a && (t(a) ?? wi(a));
        if (n) {
          if (n = n.slice(1).trim(), !n.startsWith("token(") && n.endsWith(")") && (n = n.slice(0, -1)), n.includes("token(")) {
            const g = zi(n, t);
            g && (n = g.slice(0, -1));
          } else if (n) {
            const g = t(n);
            g && (n = g);
          }
        }
        const p = r.at(-1);
        n ? p?.trim() ? r += d.slice(0, -1) + (", " + n + ")") : r += n : r += d || ")", a = "", n = "", i = "char";
        continue;
      }
      i === "token" && (a += c), i === "fallback" && (n += c);
      continue;
    }
    const u = e.indexOf("token(", o);
    if (u !== -1) {
      const d = u + 6;
      r += e.slice(o, u), o = d, i = "token", l.push(i);
      continue;
    }
    r += c, o++;
  }
  return r;
}, Xs = (e) => {
  let t = 0;
  const r = ["("];
  for (; t < e.length; ) {
    const o = e[t];
    if (o === "(")
      r.push(o);
    else if (o === ")" && (r.pop(), r.length === 0))
      return t;
    t++;
  }
  return t;
};
function _i(e) {
  const t = {};
  return e.forEach((r, o) => {
    r instanceof Map ? t[o] = Object.fromEntries(r) : t[o] = r;
  }), t;
}
const Ci = /({([^}]*)})/g, Ks = /[{}]/g, Js = /\w+\.\w+/, Ri = (e) => {
  if (!Se(e)) return [];
  const t = e.match(Ci);
  return t ? t.map((r) => r.replace(Ks, "").trim()) : [];
}, Qs = (e) => Ci.test(e);
function Pi(e) {
  if (!e.extensions?.references)
    return e.extensions?.cssVar?.ref ?? e.value;
  const t = e.extensions.references ?? {};
  let r = e.value;
  const o = Object.keys(t);
  for (let i = 0; i < o.length; i++) {
    const a = o[i], n = t[a];
    if (n.extensions.conditions)
      continue;
    const l = Pi(n);
    r = r.replace(`{${a}}`, l);
  }
  return e.value = r, delete e.extensions.references, e.value;
}
const Zs = /calc/g;
function Ti(e) {
  return ve(e) && e.reference ? e.reference : String(e);
}
const yt = (e, ...t) => t.map(Ti).join(` ${e} `).replace(Zs, ""), Yr = (...e) => `calc(${yt("+", ...e)})`, qr = (...e) => `calc(${yt("-", ...e)})`, Ht = (...e) => `calc(${yt("*", ...e)})`, Ur = (...e) => `calc(${yt("/", ...e)})`, Xr = (e) => {
  const t = Ti(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Ht(t, -1);
}, De = Object.assign(
  (e) => ({
    add: (...t) => De(Yr(e, ...t)),
    subtract: (...t) => De(qr(e, ...t)),
    multiply: (...t) => De(Ht(e, ...t)),
    divide: (...t) => De(Ur(e, ...t)),
    negate: () => De(Xr(e)),
    toString: () => e.toString()
  }),
  {
    add: Yr,
    subtract: qr,
    multiply: Ht,
    divide: Ur,
    negate: Xr
  }
), el = {
  enforce: "pre",
  transform(e) {
    const { prefix: t, allTokens: r, formatCssVar: o, formatTokenName: i, registerToken: a } = e;
    r.filter(
      ({ extensions: l }) => l.category === "spacing"
    ).forEach((l) => {
      const c = l.path.slice(), u = o(c, t);
      if (Se(l.value) && l.value === "0rem")
        return;
      const d = [...l.path], p = d[d.length - 1];
      p != null && (d[d.length - 1] = `-${p}`);
      const g = {
        ...l,
        value: De.negate(u.ref),
        name: i(d),
        path: d,
        extensions: {
          ...l.extensions,
          negative: !0,
          prop: `-${l.extensions.prop}`,
          originalPath: c
        }
      };
      a(g);
    });
  }
}, tl = /* @__PURE__ */ new Set([
  "spacing",
  "sizes",
  "borderWidths",
  "fontSizes",
  "radii"
]), rl = {
  enforce: "post",
  transform(e) {
    e.allTokens.filter((r) => tl.has(r.extensions.category) && !r.extensions.negative).forEach((r) => {
      Object.assign(r.extensions, {
        pixelValue: mi(r.value)
      });
    });
  }
}, ol = {
  enforce: "post",
  transform(e) {
    const { allTokens: t, registerToken: r, formatTokenName: o } = e, i = t.filter(
      ({ extensions: l }) => l.category === "colors"
    ), a = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
    i.forEach((l) => {
      const { colorPalette: c } = l.extensions;
      c && (c.keys.forEach((u) => {
        a.set(o(u), u);
      }), c.roots.forEach((u) => {
        const d = o(u), p = n.get(d) || [];
        if (p.push(l), n.set(d, p), l.extensions.default && u.length === 1) {
          const g = c.keys[0]?.filter(Boolean);
          if (!g.length) return;
          const _ = u.concat(g);
          a.set(o(_), []);
        }
      }));
    }), a.forEach((l) => {
      const c = ["colors", "colorPalette", ...l].filter(Boolean), u = o(c), d = o(c.slice(1));
      r({
        name: u,
        value: u,
        originalValue: u,
        path: c,
        extensions: {
          condition: "base",
          originalPath: c,
          category: "colors",
          prop: d,
          virtual: !0
        }
      }, "pre");
    });
  }
}, il = {
  enforce: "post",
  transform(e) {
    e.allTokens = e.allTokens.filter(
      (t) => t.value !== ""
    );
  }
}, al = [
  el,
  ol,
  rl,
  il
], nl = {
  type: "extensions",
  enforce: "pre",
  name: "tokens/css-var",
  transform(e, t) {
    const { prefix: r, formatCssVar: o } = t, { negative: i, originalPath: a } = e.extensions, n = i ? a : e.path;
    return {
      cssVar: o(n.filter(Boolean), r)
    };
  }
}, sl = {
  enforce: "post",
  type: "value",
  name: "tokens/conditionals",
  transform(e, t) {
    const { prefix: r, formatCssVar: o } = t, i = Ri(e.value);
    return i.length && i.forEach((a) => {
      const n = o(a.split("."), r);
      e.value = e.value.replace(`{${n.ref}}`, n);
    }), e.value;
  }
}, ll = {
  type: "extensions",
  enforce: "pre",
  name: "tokens/colors/colorPalette",
  match(e) {
    return e.extensions.category === "colors" && !e.extensions.virtual;
  },
  transform(e, t) {
    let r = e.path.slice();
    if (r.pop(), r.shift(), r.length === 0) {
      const l = [...e.path];
      l.shift(), r = l;
    }
    if (r.length === 0)
      return {};
    const o = r.reduce((l, c, u, d) => {
      const p = d.slice(0, u + 1);
      return l.push(p), l;
    }, []), i = r[0], a = t.formatTokenName(r), n = e.path.slice(e.path.indexOf(i) + 1).reduce((l, c, u, d) => (l.push(d.slice(u)), l), []);
    return n.length === 0 && n.push([""]), {
      colorPalette: { value: a, roots: o, keys: n }
    };
  }
}, cl = [
  nl,
  sl,
  ll
], Kr = (e) => ve(e) && Object.prototype.hasOwnProperty.call(e, "value");
function dl(e) {
  return e ? {
    breakpoints: si(e, (t) => ({ value: t })),
    sizes: ke(e, (t, r) => [
      `breakpoint-${t}`,
      { value: r }
    ])
  } : { breakpoints: {}, sizes: {} };
}
function ul(e) {
  const {
    prefix: t = "",
    tokens: r = {},
    semanticTokens: o = {},
    breakpoints: i = {}
  } = e, a = (f) => f.join("."), n = (f, m) => ui(f.join("-"), { prefix: m }), l = [], c = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Map(), _ = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), w = [];
  function P(f, m) {
    l.push(f), c.set(f.name, f), m && x.forEach((F) => {
      F.enforce === m && Z(F, f);
    });
  }
  const j = dl(i), C = ot({
    ...r,
    breakpoints: j.breakpoints,
    sizes: {
      ...r.sizes,
      ...j.sizes
    }
  });
  function N() {
    Re(
      C,
      (f, m) => {
        const F = m.includes("DEFAULT");
        m = Jr(m);
        const H = m[0], J = a(m), q = Se(f) ? { value: f } : f, ie = {
          value: q.value,
          originalValue: q.value,
          name: J,
          path: m,
          extensions: {
            condition: "base",
            originalPath: m,
            category: H,
            prop: a(m.slice(1))
          }
        };
        F && (ie.extensions.default = !0), P(ie);
      },
      { stop: Kr }
    ), Re(
      o,
      (f, m) => {
        const F = m.includes("DEFAULT");
        m = Ii(Jr(m));
        const H = m[0], J = a(m), q = Se(f.value) ? { value: { base: f.value } } : f, ie = {
          value: q.value.base || "",
          originalValue: q.value.base || "",
          name: J,
          path: m,
          extensions: {
            originalPath: m,
            category: H,
            conditions: q.value,
            condition: "base",
            prop: a(m.slice(1))
          }
        };
        F && (ie.extensions.default = !0), P(ie);
      },
      { stop: Kr }
    );
  }
  function v(f) {
    return c.get(f);
  }
  function D(f) {
    const { condition: m } = f.extensions;
    m && (u.has(m) || u.set(m, /* @__PURE__ */ new Set()), u.get(m).add(f));
  }
  function z(f) {
    const { category: m, prop: F } = f.extensions;
    m && (k.has(m) || k.set(m, /* @__PURE__ */ new Map()), k.get(m).set(F, f));
  }
  function I(f) {
    const { condition: m, negative: F, virtual: H, cssVar: J } = f.extensions;
    F || H || !m || !J || (d.has(m) || d.set(m, /* @__PURE__ */ new Map()), d.get(m).set(J.var, f.value));
  }
  function W(f) {
    const { category: m, prop: F, cssVar: H, negative: J } = f.extensions;
    if (!m) return;
    _.has(m) || _.set(m, /* @__PURE__ */ new Map());
    const q = J ? f.extensions.conditions ? f.originalValue : f.value : H.ref;
    _.get(m).set(F, q), g.set([m, F].join("."), q);
  }
  function B(f) {
    const { colorPalette: m, virtual: F, default: H } = f.extensions;
    !m || F || m.roots.forEach((J) => {
      const q = a(J);
      p.has(q) || p.set(q, /* @__PURE__ */ new Map());
      const ie = gl(
        [...f.path],
        [...J]
      ), Pe = a(ie), kt = v(Pe);
      if (!kt || !kt.extensions.cssVar) return;
      const { var: Li } = kt.extensions.cssVar;
      if (p.get(q).set(Li, f.extensions.cssVar.ref), H && J.length === 1) {
        const Fi = a(["colors", "colorPalette"]), pr = v(Fi);
        if (!pr) return;
        const Hi = a(f.path), gr = v(Hi);
        if (!gr) return;
        const fr = m.keys[0]?.filter(Boolean);
        if (!fr.length) return;
        const St = a(J.concat(fr));
        p.has(St) || p.set(St, /* @__PURE__ */ new Map()), p.get(St).set(
          pr.extensions.cssVar.var,
          gr.extensions.cssVar.ref
        );
      }
    });
  }
  let G = {};
  function L() {
    l.forEach((f) => {
      D(f), z(f), I(f), W(f), B(f);
    }), G = _i(_);
  }
  const Q = (f, m) => {
    if (!f || typeof f != "string") return { invalid: !0, value: f };
    const [F, H] = f.split("/");
    if (!F || !H)
      return { invalid: !0, value: F };
    const J = m(F), q = v(`opacity.${H}`)?.value;
    if (!q && isNaN(Number(H)))
      return { invalid: !0, value: F };
    const ie = q ? Number(q) * 100 + "%" : `${H}%`, Pe = J ?? F;
    return {
      invalid: !1,
      color: Pe,
      value: `color-mix(in srgb, ${Pe} ${ie}, transparent)`
    };
  }, ue = be((f, m) => g.get(f) ?? m), Y = be((f) => G[f] || null), oe = be((f) => zi(f, (m) => {
    if (!m) return;
    if (m.includes("/")) {
      const H = Q(m, (J) => ue(J));
      if (H.invalid)
        throw new Error("Invalid color mix at " + m + ": " + H.value);
      return H.value;
    }
    const F = ue(m);
    return F || (Js.test(m) ? wi(m) : m);
  })), ce = {
    prefix: t,
    allTokens: l,
    tokenMap: c,
    registerToken: P,
    getByName: v,
    formatTokenName: a,
    formatCssVar: n,
    flatMap: g,
    cssVarMap: d,
    categoryMap: k,
    colorPaletteMap: p,
    getVar: ue,
    getCategoryValues: Y,
    expandReferenceInValue: oe
  };
  function we(...f) {
    f.forEach((m) => {
      x.set(m.name, m);
    });
  }
  function M(...f) {
    w.push(...f);
  }
  function Z(f, m) {
    if (m.extensions.references || or(f.match) && !f.match(m)) return;
    const H = ((J) => f.transform(J, ce))(m);
    switch (!0) {
      case f.type === "extensions":
        Object.assign(m.extensions, H);
        break;
      case f.type === "value":
        m.value = H;
        break;
      default:
        m[f.type] = H;
        break;
    }
  }
  function s(f) {
    w.forEach((m) => {
      m.enforce === f && m.transform(ce);
    });
  }
  function b(f) {
    x.forEach((m) => {
      m.enforce === f && l.forEach((F) => {
        Z(m, F);
      });
    });
  }
  function O() {
    l.forEach((f) => {
      const m = pl(f);
      !m || m.length === 0 || m.forEach((F) => {
        P(F);
      });
    });
  }
  function $(f) {
    const m = Ri(f), F = [];
    for (let H = 0; H < m.length; H++) {
      const J = v(m[H]);
      J && F.push(J);
    }
    return F;
  }
  function h() {
    l.forEach((f) => {
      if (!Qs(f.value)) return;
      const m = $(f.value);
      f.extensions.references = m.reduce((F, H) => (F[H.name] = H, F), {});
    });
  }
  function R() {
    l.forEach((f) => {
      Pi(f);
    });
  }
  function T() {
    s("pre"), b("pre"), O(), h(), R(), s("post"), b("post"), L();
  }
  return N(), we(...cl), M(...al), T(), ce;
}
function Jr(e) {
  return e[0] === "DEFAULT" ? e : e.filter((t) => t !== "DEFAULT");
}
function Ii(e) {
  return e.filter((t) => t !== "base");
}
function pl(e) {
  if (!e.extensions.conditions) return;
  const { conditions: t } = e.extensions, r = [];
  return Re(t, (o, i) => {
    const a = Ii(i);
    if (!a.length) return;
    const n = {
      ...e,
      value: o,
      extensions: {
        ...e.extensions,
        condition: a.join(":")
      }
    };
    r.push(n);
  }), r;
}
function gl(e, t) {
  const r = e.findIndex(
    (o, i) => t.every(
      (a, n) => e[i + n] === a
    )
  );
  return r === -1 || (e.splice(r, t.length), e.splice(r, 0, "colorPalette")), e;
}
Ys()([
  "aspectRatios",
  "zIndex",
  "opacity",
  "colors",
  "fonts",
  "fontSizes",
  "fontWeights",
  "lineHeights",
  "letterSpacings",
  "sizes",
  "shadows",
  "spacing",
  "radii",
  "cursor",
  "borders",
  "borderWidths",
  "borderStyles",
  "durations",
  "easings",
  "animations",
  "blurs",
  "gradients",
  "breakpoints",
  "assets"
]);
function fl(e) {
  return ke(e, (t, r) => [
    t,
    r
  ]);
}
function ml(e) {
  const t = fl(e.config), r = e.tokens, o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  function a(I, W) {
    t[I] = W, n(I, W);
  }
  const n = (I, W) => {
    const B = x(W);
    B && (i.set(I, B), p(I, W));
  }, l = () => {
    for (const [I, W] of Object.entries(t))
      W && n(I, W);
  }, c = () => {
    for (const [I, W] of Object.entries(t)) {
      const { shorthand: B } = W ?? {};
      if (!B) continue;
      (Array.isArray(B) ? B : [B]).forEach((L) => o.set(L, I));
    }
  }, u = () => {
    const I = _i(r.colorPaletteMap);
    a("colorPalette", {
      values: Object.keys(I),
      transform: be((W) => I[W])
    });
  }, d = /* @__PURE__ */ new Map(), p = (I, W) => {
    if (!W) return;
    const B = x(W, (L) => `type:Tokens["${L}"]`);
    if (typeof B == "object" && B.type) {
      d.set(I, /* @__PURE__ */ new Set([`type:${B.type}`]));
      return;
    }
    if (B) {
      const L = new Set(Object.keys(B));
      d.set(I, L);
    }
    const G = d.get(I) ?? /* @__PURE__ */ new Set();
    W.property && d.set(I, G.add(`CssProperties["${W.property}"]`));
  }, g = () => {
    for (const [I, W] of Object.entries(t))
      W && p(I, W);
  }, _ = (I, W) => {
    const B = d.get(I) ?? /* @__PURE__ */ new Set();
    d.set(I, /* @__PURE__ */ new Set([...B, ...W]));
  }, k = () => {
    const I = /* @__PURE__ */ new Map();
    for (const [W, B] of d.entries()) {
      if (B.size === 0) {
        I.set(W, ["string"]);
        continue;
      }
      const G = Array.from(B).map((L) => L.startsWith("CssProperties") ? L : L.startsWith("type:") ? L.replace("type:", "") : JSON.stringify(L));
      I.set(W, G);
    }
    return I;
  }, x = (I, W) => {
    const { values: B } = I, G = (L) => {
      const Q = W?.(L);
      return Q ? { [Q]: Q } : void 0;
    };
    if (Se(B))
      return G?.(B) ?? r.getCategoryValues(B) ?? re;
    if (Array.isArray(B)) {
      const L = {};
      for (let Q = 0; Q < B.length; Q++)
        L[B[Q]] = B[Q];
      return L;
    }
    return or(B) ? B(W ? G : r.getCategoryValues) : B;
  }, w = be((I, W) => ({
    [I]: I.startsWith("--") ? r.getVar(W, W) : W
  })), P = Object.assign(r.getVar, {
    raw: (I) => r.getByName(I)
  }), j = be((I, W) => {
    const B = v(I);
    Se(W) && !W.includes("_EMO_") && (W = r.expandReferenceInValue(W));
    const G = t[B];
    if (!G)
      return w(B, W);
    const L = i.get(B)?.[W];
    if (!G.transform)
      return w(I, L ?? W);
    const Q = (ue) => Vn(ue, P);
    return G.transform(L ?? W, {
      raw: W,
      token: P,
      utils: { colorMix: Q }
    });
  });
  function C() {
    c(), u(), l(), g();
  }
  C();
  const N = o.size > 0, v = be((I) => o.get(I) ?? I);
  return {
    keys: () => [...Array.from(o.keys()), ...Object.keys(t)],
    hasShorthand: N,
    transform: j,
    shorthands: o,
    resolveShorthand: v,
    register: a,
    getTypes: k,
    addPropertyType: _
  };
}
function Wi(...e) {
  const t = li(...e), {
    theme: r = {},
    utilities: o = {},
    globalCss: i = {},
    cssVarsRoot: a = ":where(:root, :host)",
    cssVarsPrefix: n = "chakra",
    preflight: l
  } = t, c = $s(t), u = ul({
    breakpoints: r.breakpoints,
    tokens: r.tokens,
    semanticTokens: r.semanticTokens,
    prefix: n
  }), d = hs(r.breakpoints ?? re), p = ys({
    conditions: t.conditions ?? re,
    breakpoints: d
  }), g = ml({
    config: o,
    tokens: u
  });
  function _() {
    const { textStyles: M, layerStyles: Z, animationStyles: s } = r, b = ot({
      textStyle: M,
      layerStyle: Z,
      animationStyle: s
    });
    for (const [O, $] of Object.entries(b)) {
      const h = pi($ ?? re, Ei);
      g.register(O, {
        values: Object.keys(h),
        transform(R) {
          return C(h[R]);
        }
      });
    }
  }
  _(), g.addPropertyType(
    "animationName",
    Object.keys(r.keyframes ?? re)
  );
  const k = /* @__PURE__ */ new Set(["css", ...g.keys(), ...p.keys()]), x = be(
    (M) => k.has(M) || us(M)
  ), w = (M) => {
    if (Array.isArray(M)) {
      const Z = xt();
      for (let s = 0; s < M.length; s++) {
        const b = M[s];
        if (b != null) {
          const O = p.breakpoints[s];
          Z[O] = b;
        }
      }
      return Z;
    }
    return M;
  }, P = Ds({
    utility: g,
    normalize: w
  }), j = Ms({
    conditions: p,
    isValidProperty: x
  }), C = ki({
    transform: g.transform,
    conditions: p,
    normalize: P
  }), N = js({
    css: C,
    conditions: p,
    normalize: P,
    layers: c
  }), v = Gs({ cva: N });
  function D() {
    const M = {};
    for (const [Z, s] of u.cssVarMap.entries()) {
      const b = Object.fromEntries(s);
      if (Object.keys(b).length === 0) continue;
      const O = Z === "base" ? a : p.resolve(Z), $ = O.startsWith("@"), h = C(
        j({
          [O]: $ ? { [a]: b } : b
        })
      );
      He(M, h);
    }
    return c.wrap("tokens", M);
  }
  function z() {
    const M = ke(
      r.keyframes ?? re,
      (s, b) => [`@keyframes ${s}`, b]
    ), Z = Object.assign({}, M, C(j(i)));
    return c.wrap("base", Z);
  }
  function I(M) {
    return Ve(M, x);
  }
  function W() {
    const M = Bs({ preflight: l });
    return c.wrap("reset", M);
  }
  const B = hl(u), G = (M, Z) => B.get(M)?.value || Z;
  G.var = (M, Z) => B.get(M)?.variable || Z;
  function L(M, Z) {
    return r.recipes?.[M] ?? Z;
  }
  function Q(M, Z) {
    return r.slotRecipes?.[M] ?? Z;
  }
  function ue(M) {
    return Object.hasOwnProperty.call(r.recipes ?? re, M);
  }
  function Y(M) {
    return Object.hasOwnProperty.call(r.slotRecipes ?? re, M);
  }
  function oe(M) {
    return ue(M) || Y(M);
  }
  const ce = [W(), z(), D()], we = {
    layerStyles: At(r.layerStyles ?? re),
    textStyles: At(r.textStyles ?? re),
    animationStyles: At(r.animationStyles ?? re),
    tokens: Qr(
      u,
      Object.keys(r.tokens ?? re),
      (M, Z) => !M.extensions.conditions && !Z.includes("colorPalette")
    ),
    semanticTokens: Qr(
      u,
      Object.keys(r.semanticTokens ?? re),
      (M) => !!M.extensions.conditions
    ),
    keyframes: Zr(r.keyframes ?? re),
    breakpoints: Zr(r.breakpoints ?? re)
  };
  return {
    $$chakra: !0,
    _config: t,
    _global: ce,
    breakpoints: d,
    tokens: u,
    conditions: p,
    utility: g,
    token: G,
    properties: k,
    layers: c,
    isValidProperty: x,
    splitCssProps: I,
    normalizeValue: w,
    getTokenCss: D,
    getGlobalCss: z,
    getPreflightCss: W,
    css: C,
    cva: N,
    sva: v,
    getRecipe: L,
    getSlotRecipe: Q,
    hasRecipe: oe,
    isRecipe: ue,
    isSlotRecipe: Y,
    query: we
  };
}
function hl(e) {
  const t = /* @__PURE__ */ new Map();
  return e.allTokens.forEach((r) => {
    const { cssVar: o, virtual: i, conditions: a } = r.extensions, n = a || i ? o.ref : r.value;
    t.set(r.name, { value: n, variable: o.ref });
  }), t;
}
const Ei = (e) => ve(e) && "value" in e, At = (e) => ({
  list() {
    return Object.keys(pi(e, Ei));
  },
  search(t) {
    return this.list().filter((r) => r.includes(t));
  }
}), Qr = (e, t, r) => ({
  categoryKeys: t,
  list(o) {
    const i = e.categoryMap.get(o), a = i ? [...i.entries()] : [], n = [];
    for (let l = 0; l < a.length; l++) {
      const [c, u] = a[l];
      r(u, c) && n.push(c);
    }
    return n;
  },
  search(o, i) {
    return this.list(o).filter((a) => a.includes(i));
  }
}), Zr = (e) => ({
  list() {
    return Object.keys(e);
  },
  search(t) {
    return this.list().filter((r) => r.includes(t));
  }
}), bl = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
}, jt = "var(--chakra-empty, )", vl = Gn({
  "*": {
    fontFeatureSettings: '"cv11"',
    "--ring-inset": jt,
    "--ring-offset-width": "0px",
    "--ring-offset-color": "#fff",
    "--ring-color": "rgba(66, 153, 225, 0.6)",
    "--ring-offset-shadow": "0 0 #0000",
    "--ring-shadow": "0 0 #0000",
    ...Object.fromEntries(
      [
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "saturate",
        "sepia",
        "drop-shadow"
      ].map((e) => [`--${e}`, jt])
    ),
    ...Object.fromEntries(
      [
        "blur",
        "brightness",
        "contrast",
        "grayscale",
        "hue-rotate",
        "invert",
        "opacity",
        "saturate",
        "sepia"
      ].map((e) => [`--backdrop-${e}`, jt])
    ),
    "--global-font-mono": "fonts.mono",
    "--global-font-body": "fonts.body",
    "--global-color-border": "colors.border"
  },
  html: {
    color: "fg",
    bg: "bg",
    lineHeight: "1.5",
    colorPalette: "gray"
  },
  "*::placeholder, *[data-placeholder]": {
    color: "fg.muted/80"
  },
  "*::selection": {
    bg: "colorPalette.emphasized/80"
  }
}), xl = Un({
  // fill: some background color + color combination
  "fill.muted": {
    value: {
      background: "colorPalette.muted",
      color: "colorPalette.fg"
    }
  },
  "fill.subtle": {
    value: {
      background: "colorPalette.subtle",
      color: "colorPalette.fg"
    }
  },
  "fill.surface": {
    value: {
      background: "colorPalette.subtle",
      color: "colorPalette.fg",
      boxShadow: "0 0 0px 1px var(--shadow-color)",
      boxShadowColor: "colorPalette.muted"
    }
  },
  "fill.solid": {
    value: {
      background: "colorPalette.solid",
      color: "colorPalette.contrast"
    }
  },
  // outline: some border color + color combination
  "outline.subtle": {
    value: {
      color: "colorPalette.fg",
      boxShadow: "inset 0 0 0px 1px var(--shadow-color)",
      boxShadowColor: "colorPalette.subtle"
    }
  },
  "outline.solid": {
    value: {
      borderWidth: "1px",
      borderColor: "colorPalette.solid",
      color: "colorPalette.fg"
    }
  },
  // indicator: floating border color or left/bottom border
  "indicator.bottom": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        bottom: "var(--indicator-offset-y, 0)",
        insetInline: "var(--indicator-offset-x, 0)",
        height: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))"
      }
    }
  },
  "indicator.top": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        top: "var(--indicator-offset-y, 0)",
        insetInline: "var(--indicator-offset-x, 0)",
        height: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))"
      }
    }
  },
  "indicator.start": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        insetInlineStart: "var(--indicator-offset-x, 0)",
        insetBlock: "var(--indicator-offset-y, 0)",
        width: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))"
      }
    }
  },
  "indicator.end": {
    value: {
      position: "relative",
      "--indicator-color-fallback": "colors.colorPalette.solid",
      _before: {
        content: '""',
        position: "absolute",
        insetInlineEnd: "var(--indicator-offset-x, 0)",
        insetBlock: "var(--indicator-offset-y, 0)",
        width: "var(--indicator-thickness, 2px)",
        background: "var(--indicator-color, var(--indicator-color-fallback))"
      }
    }
  },
  disabled: {
    value: {
      opacity: "0.5",
      cursor: "not-allowed"
    }
  },
  none: {
    value: {}
  }
}), yl = qn({
  "slide-fade-in": {
    value: {
      transformOrigin: "var(--transform-origin)",
      "&[data-placement^=top]": {
        animationName: "slide-from-bottom, fade-in"
      },
      "&[data-placement^=bottom]": {
        animationName: "slide-from-top, fade-in"
      },
      "&[data-placement^=left]": {
        animationName: "slide-from-right, fade-in"
      },
      "&[data-placement^=right]": {
        animationName: "slide-from-left, fade-in"
      }
    }
  },
  "slide-fade-out": {
    value: {
      transformOrigin: "var(--transform-origin)",
      "&[data-placement^=top]": {
        animationName: "slide-to-bottom, fade-out"
      },
      "&[data-placement^=bottom]": {
        animationName: "slide-to-top, fade-out"
      },
      "&[data-placement^=left]": {
        animationName: "slide-to-right, fade-out"
      },
      "&[data-placement^=right]": {
        animationName: "slide-to-left, fade-out"
      }
    }
  },
  "scale-fade-in": {
    value: {
      transformOrigin: "var(--transform-origin)",
      animationName: "scale-in, fade-in"
    }
  },
  "scale-fade-out": {
    value: {
      transformOrigin: "var(--transform-origin)",
      animationName: "scale-out, fade-out"
    }
  }
}), ur = de({
  className: "chakra-badge",
  base: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "l2",
    gap: "1",
    fontWeight: "medium",
    fontVariantNumeric: "tabular-nums",
    whiteSpace: "nowrap",
    userSelect: "none"
  },
  variants: {
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast"
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg"
      },
      outline: {
        color: "colorPalette.fg",
        "--outline-shadow-legacy": "colors.colorPalette.muted",
        "--outline-shadow": "colors.colorPalette.border",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "inset 0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted"
      },
      plain: {
        color: "colorPalette.fg"
      }
    },
    size: {
      xs: {
        textStyle: "2xs",
        px: "1",
        minH: "4"
      },
      sm: {
        textStyle: "xs",
        px: "1.5",
        minH: "5"
      },
      md: {
        textStyle: "sm",
        px: "2",
        minH: "6"
      },
      lg: {
        textStyle: "sm",
        px: "2.5",
        minH: "7"
      }
    }
  },
  defaultVariants: {
    variant: "subtle",
    size: "sm"
  }
}), kl = de({
  className: "chakra-button",
  base: {
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    userSelect: "none",
    position: "relative",
    borderRadius: "l2",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    borderWidth: "1px",
    borderColor: "transparent",
    cursor: "button",
    flexShrink: "0",
    outline: "0",
    lineHeight: "1.2",
    isolation: "isolate",
    fontWeight: "medium",
    transitionProperty: "common",
    transitionDuration: "moderate",
    focusVisibleRing: "outside",
    _disabled: {
      layerStyle: "disabled"
    },
    _icon: {
      flexShrink: "0"
    }
  },
  variants: {
    size: {
      "2xs": {
        h: "6",
        minW: "6",
        textStyle: "xs",
        px: "2",
        gap: "1",
        _icon: {
          width: "3.5",
          height: "3.5"
        }
      },
      xs: {
        h: "8",
        minW: "8",
        textStyle: "xs",
        px: "2.5",
        gap: "1",
        _icon: {
          width: "4",
          height: "4"
        }
      },
      sm: {
        h: "9",
        minW: "9",
        px: "3.5",
        textStyle: "sm",
        gap: "2",
        _icon: {
          width: "4",
          height: "4"
        }
      },
      md: {
        h: "10",
        minW: "10",
        textStyle: "sm",
        px: "4",
        gap: "2",
        _icon: {
          width: "5",
          height: "5"
        }
      },
      lg: {
        h: "11",
        minW: "11",
        textStyle: "md",
        px: "5",
        gap: "3",
        _icon: {
          width: "5",
          height: "5"
        }
      },
      xl: {
        h: "12",
        minW: "12",
        textStyle: "md",
        px: "5",
        gap: "2.5",
        _icon: {
          width: "5",
          height: "5"
        }
      },
      "2xl": {
        h: "16",
        minW: "16",
        textStyle: "lg",
        px: "7",
        gap: "3",
        _icon: {
          width: "6",
          height: "6"
        }
      }
    },
    variant: {
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.solid/90"
        },
        _expanded: {
          bg: "colorPalette.solid/90"
        }
      },
      subtle: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderColor: "transparent",
        _hover: {
          bg: "colorPalette.muted"
        },
        _expanded: {
          bg: "colorPalette.muted"
        }
      },
      surface: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        shadow: "0 0 0px 1px var(--shadow-color)",
        shadowColor: "colorPalette.muted",
        _hover: {
          bg: "colorPalette.muted"
        },
        _expanded: {
          bg: "colorPalette.muted"
        }
      },
      outline: {
        borderWidth: "1px",
        "--outline-color-legacy": "colors.colorPalette.muted",
        "--outline-color": "colors.colorPalette.border",
        borderColor: "var(--outline-color, var(--outline-color-legacy))",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle"
        },
        _expanded: {
          bg: "colorPalette.subtle"
        }
      },
      ghost: {
        bg: "transparent",
        color: "colorPalette.fg",
        _hover: {
          bg: "colorPalette.subtle"
        },
        _expanded: {
          bg: "colorPalette.subtle"
        }
      },
      plain: {
        color: "colorPalette.fg"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid"
  }
}), ge = de({
  className: "chakra-checkmark",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    color: "white",
    borderWidth: "1px",
    borderColor: "transparent",
    borderRadius: "l1",
    cursor: "checkbox",
    focusVisibleRing: "outside",
    _icon: {
      boxSize: "full"
    },
    _invalid: {
      colorPalette: "red",
      borderColor: "border.error"
    },
    _disabled: {
      opacity: "0.5",
      cursor: "disabled"
    }
  },
  variants: {
    size: {
      xs: {
        boxSize: "3"
      },
      sm: {
        boxSize: "4"
      },
      md: {
        boxSize: "5",
        p: "0.5"
      },
      lg: {
        boxSize: "6",
        p: "0.5"
      }
    },
    variant: {
      solid: {
        borderColor: "border.emphasized",
        "&:is([data-state=checked], [data-state=indeterminate])": {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast",
          borderColor: "colorPalette.solid"
        }
      },
      outline: {
        borderColor: "border",
        "&:is([data-state=checked], [data-state=indeterminate])": {
          color: "colorPalette.fg",
          borderColor: "colorPalette.solid"
        }
      },
      subtle: {
        bg: "colorPalette.muted",
        borderColor: "colorPalette.muted",
        "&:is([data-state=checked], [data-state=indeterminate])": {
          color: "colorPalette.fg"
        }
      },
      plain: {
        "&:is([data-state=checked], [data-state=indeterminate])": {
          color: "colorPalette.fg"
        }
      },
      inverted: {
        borderColor: "border",
        color: "colorPalette.fg",
        "&:is([data-state=checked], [data-state=indeterminate])": {
          borderColor: "colorPalette.solid"
        }
      }
    },
    filled: {
      true: {
        bg: "bg"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
}), { variants: Sl, defaultVariants: wl } = ur, zl = de({
  className: "chakra-code",
  base: {
    fontFamily: "mono",
    alignItems: "center",
    display: "inline-flex",
    borderRadius: "l2"
  },
  variants: Sl,
  defaultVariants: wl
}), Ai = de({
  className: "color-swatch",
  base: {
    boxSize: "var(--swatch-size)",
    shadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.1)",
    "--checker-size": "8px",
    "--checker-bg": "colors.bg",
    "--checker-fg": "colors.bg.emphasized",
    background: "linear-gradient(var(--color), var(--color)), repeating-conic-gradient(var(--checker-fg) 0%, var(--checker-fg) 25%, var(--checker-bg) 0%, var(--checker-bg) 50%) 0% 50% / var(--checker-size) var(--checker-size) !important",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0"
  },
  variants: {
    size: {
      "2xs": { "--swatch-size": "sizes.3.5" },
      xs: { "--swatch-size": "sizes.4" },
      sm: { "--swatch-size": "sizes.4.5" },
      md: { "--swatch-size": "sizes.5" },
      lg: { "--swatch-size": "sizes.6" },
      xl: { "--swatch-size": "sizes.7" },
      "2xl": { "--swatch-size": "sizes.8" },
      inherit: { "--swatch-size": "inherit" },
      full: { "--swatch-size": "100%" }
    },
    shape: {
      square: { borderRadius: "none" },
      circle: { borderRadius: "full" },
      rounded: { borderRadius: "l1" }
    }
  },
  defaultVariants: {
    size: "md",
    shape: "rounded"
  }
}), _l = de({
  className: "chakra-container",
  base: {
    position: "relative",
    maxWidth: "8xl",
    w: "100%",
    mx: "auto",
    px: { base: "4", md: "6", lg: "8" }
  },
  variants: {
    centerContent: {
      true: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    },
    fluid: {
      true: {
        maxWidth: "full"
      }
    }
  }
}), Cl = de({
  className: "chakra-heading",
  base: {
    fontFamily: "heading",
    fontWeight: "semibold"
  },
  variants: {
    size: {
      xs: { textStyle: "xs" },
      sm: { textStyle: "sm" },
      md: { textStyle: "md" },
      lg: { textStyle: "lg" },
      xl: { textStyle: "xl" },
      "2xl": { textStyle: "2xl" },
      "3xl": { textStyle: "3xl" },
      "4xl": { textStyle: "4xl" },
      "5xl": { textStyle: "5xl" },
      "6xl": { textStyle: "6xl" },
      "7xl": { textStyle: "7xl" }
    }
  },
  defaultVariants: {
    size: "xl"
  }
}), Rl = de({
  className: "chakra-icon",
  base: {
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: "0",
    color: "currentcolor",
    verticalAlign: "middle"
  },
  variants: {
    size: {
      inherit: {},
      xs: { boxSize: "3" },
      sm: { boxSize: "4" },
      md: { boxSize: "5" },
      lg: { boxSize: "6" },
      xl: { boxSize: "7" },
      "2xl": { boxSize: "8" }
    }
  },
  defaultVariants: {
    size: "inherit"
  }
}), ne = de({
  className: "chakra-input",
  base: {
    width: "100%",
    minWidth: "0",
    outline: "0",
    position: "relative",
    appearance: "none",
    textAlign: "start",
    borderRadius: "l2",
    _disabled: {
      layerStyle: "disabled"
    },
    height: "var(--input-height)",
    minW: "var(--input-height)",
    "--focus-color": "colors.colorPalette.focusRing",
    "--error-color": "colors.border.error",
    _invalid: {
      focusRingColor: "var(--error-color)",
      borderColor: "var(--error-color)"
    }
  },
  variants: {
    size: {
      "2xs": {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.7"
      },
      xs: {
        textStyle: "xs",
        px: "2",
        "--input-height": "sizes.8"
      },
      sm: {
        textStyle: "sm",
        px: "2.5",
        "--input-height": "sizes.9"
      },
      md: {
        textStyle: "sm",
        px: "3",
        "--input-height": "sizes.10"
      },
      lg: {
        textStyle: "md",
        px: "4",
        "--input-height": "sizes.11"
      },
      xl: {
        textStyle: "md",
        px: "4.5",
        "--input-height": "sizes.12"
      },
      "2xl": {
        textStyle: "lg",
        px: "5",
        "--input-height": "sizes.16"
      }
    },
    variant: {
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "border",
        focusVisibleRing: "inside",
        focusRingColor: "var(--focus-color)"
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "bg.muted",
        focusVisibleRing: "inside",
        focusRingColor: "var(--focus-color)"
      },
      flushed: {
        bg: "transparent",
        borderBottomWidth: "1px",
        borderBottomColor: "border",
        borderRadius: "0",
        px: "0",
        _focusVisible: {
          borderColor: "var(--focus-color)",
          boxShadow: "0px 1px 0px 0px var(--focus-color)",
          _invalid: {
            borderColor: "var(--error-color)",
            boxShadow: "0px 1px 0px 0px var(--error-color)"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Pl = de({
  className: "chakra-input-addon",
  base: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
    alignSelf: "stretch",
    borderRadius: "l2"
  },
  variants: {
    size: ne.variants.size,
    variant: {
      outline: {
        borderWidth: "1px",
        borderColor: "border",
        bg: "bg.muted"
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "bg.emphasized"
      },
      flushed: {
        borderBottom: "1px solid",
        borderColor: "inherit",
        borderRadius: "0",
        px: "0",
        bg: "transparent"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Tl = de({
  className: "chakra-kbd",
  base: {
    display: "inline-flex",
    alignItems: "center",
    fontWeight: "medium",
    fontFamily: "mono",
    flexShrink: "0",
    whiteSpace: "nowrap",
    wordSpacing: "-0.5em",
    userSelect: "none",
    px: "1",
    borderRadius: "l2"
  },
  variants: {
    variant: {
      raised: {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderWidth: "1px",
        borderBottomWidth: "2px",
        borderColor: "colorPalette.muted"
      },
      outline: {
        borderWidth: "1px",
        color: "colorPalette.fg"
      },
      subtle: {
        bg: "colorPalette.muted",
        color: "colorPalette.fg"
      },
      plain: {
        color: "colorPalette.fg"
      }
    },
    size: {
      sm: {
        textStyle: "xs",
        height: "4.5"
      },
      md: {
        textStyle: "sm",
        height: "5"
      },
      lg: {
        textStyle: "md",
        height: "6"
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "raised"
  }
}), Il = de({
  className: "chakra-link",
  base: {
    display: "inline-flex",
    alignItems: "center",
    outline: "none",
    gap: "1.5",
    cursor: "pointer",
    borderRadius: "l1",
    focusRing: "outside"
  },
  variants: {
    variant: {
      underline: {
        color: "colorPalette.fg",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationColor: "currentColor/20"
      },
      plain: {
        color: "colorPalette.fg",
        _hover: {
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          textDecorationColor: "currentColor/20"
        }
      }
    }
  },
  defaultVariants: {
    variant: "plain"
  }
}), Wl = de({
  className: "chakra-mark",
  base: {
    bg: "transparent",
    color: "inherit",
    whiteSpace: "nowrap"
  },
  variants: {
    variant: {
      subtle: {
        bg: "colorPalette.subtle",
        color: "inherit"
      },
      solid: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast"
      },
      text: {
        fontWeight: "medium"
      },
      plain: {}
    }
  }
}), fe = de({
  className: "chakra-radiomark",
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    verticalAlign: "top",
    color: "white",
    borderWidth: "1px",
    borderColor: "transparent",
    borderRadius: "full",
    cursor: "radio",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "colorPalette.focusRing",
      outlineOffset: "2px"
    },
    _invalid: {
      colorPalette: "red",
      borderColor: "red.500"
    },
    _disabled: {
      opacity: "0.5",
      cursor: "disabled"
    },
    "& .dot": {
      height: "100%",
      width: "100%",
      borderRadius: "full",
      bg: "currentColor",
      scale: "0.4"
    }
  },
  variants: {
    variant: {
      solid: {
        borderWidth: "1px",
        borderColor: "border.emphasized",
        _checked: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast",
          borderColor: "colorPalette.solid"
        }
      },
      subtle: {
        borderWidth: "1px",
        bg: "colorPalette.muted",
        borderColor: "colorPalette.muted",
        color: "transparent",
        _checked: {
          color: "colorPalette.fg"
        }
      },
      outline: {
        borderWidth: "1px",
        borderColor: "inherit",
        _checked: {
          color: "colorPalette.fg",
          borderColor: "colorPalette.solid"
        },
        "& .dot": {
          scale: "0.6"
        }
      },
      inverted: {
        bg: "bg",
        borderWidth: "1px",
        borderColor: "inherit",
        _checked: {
          color: "colorPalette.solid",
          borderColor: "currentcolor"
        }
      }
    },
    size: {
      xs: {
        boxSize: "3"
      },
      sm: {
        boxSize: "4"
      },
      md: {
        boxSize: "5"
      },
      lg: {
        boxSize: "6"
      }
    },
    filled: {
      true: {
        bg: "bg"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
}), El = de({
  className: "chakra-separator",
  base: {
    display: "block",
    borderColor: "border"
  },
  variants: {
    variant: {
      solid: {
        borderStyle: "solid"
      },
      dashed: {
        borderStyle: "dashed"
      },
      dotted: {
        borderStyle: "dotted"
      }
    },
    orientation: {
      vertical: {
        borderInlineStartWidth: "var(--separator-thickness)"
      },
      horizontal: {
        borderTopWidth: "var(--separator-thickness)"
      }
    },
    size: {
      xs: {
        "--separator-thickness": "0.5px"
      },
      sm: {
        "--separator-thickness": "1px"
      },
      md: {
        "--separator-thickness": "2px"
      },
      lg: {
        "--separator-thickness": "3px"
      }
    }
  },
  defaultVariants: {
    size: "sm",
    variant: "solid",
    orientation: "horizontal"
  }
}), Al = de({
  className: "chakra-skeleton",
  base: {},
  variants: {
    loading: {
      true: {
        borderRadius: "l2",
        boxShadow: "none",
        backgroundClip: "padding-box",
        cursor: "default",
        color: "transparent",
        pointerEvents: "none",
        userSelect: "none",
        flexShrink: "0",
        "&::before, &::after, *": {
          visibility: "hidden"
        }
      },
      false: {
        background: "unset",
        animation: "fade-in var(--fade-duration, 0.1s) ease-out !important"
      }
    },
    variant: {
      pulse: {
        background: "bg.emphasized",
        animation: "pulse",
        animationDuration: "var(--duration, 1.2s)"
      },
      shine: {
        "--animate-from": "200%",
        "--animate-to": "-200%",
        "--start-color": "colors.bg.muted",
        "--end-color": "colors.bg.emphasized",
        backgroundImage: "linear-gradient(270deg,var(--start-color),var(--end-color),var(--end-color),var(--start-color))",
        backgroundSize: "400% 100%",
        animation: "bg-position var(--duration, 5s) ease-in-out infinite"
      },
      none: {
        animation: "none"
      }
    }
  },
  defaultVariants: {
    variant: "pulse",
    loading: !0
  }
}), jl = de({
  className: "chakra-skip-nav",
  base: {
    display: "inline-flex",
    bg: "bg.panel",
    padding: "2.5",
    borderRadius: "l2",
    fontWeight: "semibold",
    focusVisibleRing: "outside",
    textStyle: "sm",
    // visually hidden
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    _focusVisible: {
      clip: "auto",
      width: "auto",
      height: "auto",
      position: "fixed",
      top: "6",
      insetStart: "6"
    }
  }
}), Nl = de({
  className: "chakra-spinner",
  base: {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "full",
    width: "var(--spinner-size)",
    height: "var(--spinner-size)",
    animation: "spin",
    animationDuration: "slowest",
    "--spinner-track-color": "transparent",
    borderBottomColor: "var(--spinner-track-color)",
    borderInlineStartColor: "var(--spinner-track-color)"
  },
  variants: {
    size: {
      inherit: { "--spinner-size": "1em" },
      xs: { "--spinner-size": "sizes.3" },
      sm: { "--spinner-size": "sizes.4" },
      md: { "--spinner-size": "sizes.5" },
      lg: { "--spinner-size": "sizes.8" },
      xl: { "--spinner-size": "sizes.10" }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Ol = de({
  className: "chakra-textarea",
  base: {
    width: "100%",
    minWidth: "0",
    outline: "0",
    position: "relative",
    appearance: "none",
    textAlign: "start",
    borderRadius: "l2",
    _disabled: {
      layerStyle: "disabled"
    },
    "--focus-color": "colors.colorPalette.focusRing",
    "--error-color": "colors.border.error",
    _invalid: {
      focusRingColor: "var(--error-color)",
      borderColor: "var(--error-color)"
    }
  },
  variants: {
    size: {
      xs: {
        textStyle: "xs",
        px: "2",
        py: "1.5",
        scrollPaddingBottom: "1.5"
      },
      sm: {
        textStyle: "sm",
        px: "2.5",
        py: "2",
        scrollPaddingBottom: "2"
      },
      md: {
        textStyle: "sm",
        px: "3",
        py: "2",
        scrollPaddingBottom: "2"
      },
      lg: {
        textStyle: "md",
        px: "4",
        py: "3",
        scrollPaddingBottom: "3"
      },
      xl: {
        textStyle: "md",
        px: "4.5",
        py: "3.5",
        scrollPaddingBottom: "3.5"
      }
    },
    variant: {
      outline: {
        bg: "transparent",
        borderWidth: "1px",
        borderColor: "border",
        focusVisibleRing: "inside"
      },
      subtle: {
        borderWidth: "1px",
        borderColor: "transparent",
        bg: "bg.muted",
        focusVisibleRing: "inside"
      },
      flushed: {
        bg: "transparent",
        borderBottomWidth: "1px",
        borderBottomColor: "border",
        borderRadius: "0",
        px: "0",
        _focusVisible: {
          borderColor: "var(--focus-color)",
          boxShadow: "0px 1px 0px 0px var(--focus-color)"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), $l = {
  badge: ur,
  button: kl,
  code: zl,
  container: _l,
  heading: Cl,
  input: ne,
  inputAddon: Pl,
  kbd: Tl,
  link: Il,
  mark: Wl,
  separator: El,
  skeleton: Al,
  skipNavLink: jl,
  spinner: Nl,
  textarea: Ol,
  icon: Rl,
  checkmark: ge,
  radiomark: fe,
  colorSwatch: Ai
}, Dl = cr.colors({
  bg: {
    DEFAULT: {
      value: { _light: "{colors.white}", _dark: "{colors.black}" }
    },
    subtle: {
      value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" }
    },
    muted: {
      value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" }
    },
    emphasized: {
      value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" }
    },
    inverted: {
      value: { _light: "{colors.black}", _dark: "{colors.white}" }
    },
    panel: {
      value: { _light: "{colors.white}", _dark: "{colors.gray.950}" }
    },
    error: {
      value: { _light: "{colors.red.50}", _dark: "{colors.red.950}" }
    },
    warning: {
      value: { _light: "{colors.orange.50}", _dark: "{colors.orange.950}" }
    },
    success: {
      value: { _light: "{colors.green.50}", _dark: "{colors.green.950}" }
    },
    info: {
      value: { _light: "{colors.blue.50}", _dark: "{colors.blue.950}" }
    }
  },
  fg: {
    DEFAULT: {
      value: { _light: "{colors.black}", _dark: "{colors.gray.50}" }
    },
    muted: {
      value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" }
    },
    subtle: {
      value: { _light: "{colors.gray.400}", _dark: "{colors.gray.500}" }
    },
    inverted: {
      value: { _light: "{colors.gray.50}", _dark: "{colors.black}" }
    },
    error: {
      value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" }
    },
    warning: {
      value: { _light: "{colors.orange.600}", _dark: "{colors.orange.300}" }
    },
    success: {
      value: { _light: "{colors.green.600}", _dark: "{colors.green.300}" }
    },
    info: {
      value: { _light: "{colors.blue.600}", _dark: "{colors.blue.300}" }
    }
  },
  border: {
    DEFAULT: {
      value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" }
    },
    muted: {
      value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" }
    },
    subtle: {
      value: { _light: "{colors.gray.50}", _dark: "{colors.gray.950}" }
    },
    emphasized: {
      value: { _light: "{colors.gray.300}", _dark: "{colors.gray.700}" }
    },
    inverted: {
      value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" }
    },
    error: {
      value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" }
    },
    warning: {
      value: { _light: "{colors.orange.500}", _dark: "{colors.orange.400}" }
    },
    success: {
      value: { _light: "{colors.green.500}", _dark: "{colors.green.400}" }
    },
    info: {
      value: { _light: "{colors.blue.500}", _dark: "{colors.blue.400}" }
    }
  },
  gray: {
    contrast: {
      value: { _light: "{colors.white}", _dark: "{colors.black}" }
    },
    fg: {
      value: { _light: "{colors.gray.800}", _dark: "{colors.gray.200}" }
    },
    subtle: {
      value: { _light: "{colors.gray.100}", _dark: "{colors.gray.900}" }
    },
    muted: {
      value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" }
    },
    emphasized: {
      value: { _light: "{colors.gray.300}", _dark: "{colors.gray.700}" }
    },
    solid: {
      value: { _light: "{colors.gray.900}", _dark: "{colors.white}" }
    },
    focusRing: {
      value: { _light: "{colors.gray.400}", _dark: "{colors.gray.400}" }
    },
    border: {
      value: { _light: "{colors.gray.200}", _dark: "{colors.gray.800}" }
    }
  },
  red: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.red.700}", _dark: "{colors.red.300}" }
    },
    subtle: {
      value: { _light: "{colors.red.100}", _dark: "{colors.red.900}" }
    },
    muted: {
      value: { _light: "{colors.red.200}", _dark: "{colors.red.800}" }
    },
    emphasized: {
      value: { _light: "{colors.red.300}", _dark: "{colors.red.700}" }
    },
    solid: {
      value: { _light: "{colors.red.600}", _dark: "{colors.red.600}" }
    },
    focusRing: {
      value: { _light: "{colors.red.500}", _dark: "{colors.red.500}" }
    },
    border: {
      value: { _light: "{colors.red.500}", _dark: "{colors.red.400}" }
    }
  },
  orange: {
    contrast: {
      value: { _light: "white", _dark: "black" }
    },
    fg: {
      value: { _light: "{colors.orange.700}", _dark: "{colors.orange.300}" }
    },
    subtle: {
      value: { _light: "{colors.orange.100}", _dark: "{colors.orange.900}" }
    },
    muted: {
      value: { _light: "{colors.orange.200}", _dark: "{colors.orange.800}" }
    },
    emphasized: {
      value: { _light: "{colors.orange.300}", _dark: "{colors.orange.700}" }
    },
    solid: {
      value: { _light: "{colors.orange.600}", _dark: "{colors.orange.500}" }
    },
    focusRing: {
      value: { _light: "{colors.orange.500}", _dark: "{colors.orange.500}" }
    },
    border: {
      value: { _light: "{colors.orange.500}", _dark: "{colors.orange.400}" }
    }
  },
  green: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.green.700}", _dark: "{colors.green.300}" }
    },
    subtle: {
      value: { _light: "{colors.green.100}", _dark: "{colors.green.900}" }
    },
    muted: {
      value: { _light: "{colors.green.200}", _dark: "{colors.green.800}" }
    },
    emphasized: {
      value: { _light: "{colors.green.300}", _dark: "{colors.green.700}" }
    },
    solid: {
      value: { _light: "{colors.green.600}", _dark: "{colors.green.600}" }
    },
    focusRing: {
      value: { _light: "{colors.green.500}", _dark: "{colors.green.500}" }
    },
    border: {
      value: { _light: "{colors.green.500}", _dark: "{colors.green.400}" }
    }
  },
  blue: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.blue.700}", _dark: "{colors.blue.300}" }
    },
    subtle: {
      value: { _light: "{colors.blue.100}", _dark: "{colors.blue.900}" }
    },
    muted: {
      value: { _light: "{colors.blue.200}", _dark: "{colors.blue.800}" }
    },
    emphasized: {
      value: { _light: "{colors.blue.300}", _dark: "{colors.blue.700}" }
    },
    solid: {
      value: { _light: "{colors.blue.600}", _dark: "{colors.blue.600}" }
    },
    focusRing: {
      value: { _light: "{colors.blue.500}", _dark: "{colors.blue.500}" }
    },
    border: {
      value: { _light: "{colors.blue.500}", _dark: "{colors.blue.400}" }
    }
  },
  yellow: {
    contrast: {
      value: { _light: "black", _dark: "black" }
    },
    fg: {
      value: { _light: "{colors.yellow.800}", _dark: "{colors.yellow.300}" }
    },
    subtle: {
      value: { _light: "{colors.yellow.100}", _dark: "{colors.yellow.900}" }
    },
    muted: {
      value: { _light: "{colors.yellow.200}", _dark: "{colors.yellow.800}" }
    },
    emphasized: {
      value: { _light: "{colors.yellow.300}", _dark: "{colors.yellow.700}" }
    },
    solid: {
      value: { _light: "{colors.yellow.300}", _dark: "{colors.yellow.300}" }
    },
    focusRing: {
      value: { _light: "{colors.yellow.500}", _dark: "{colors.yellow.500}" }
    },
    border: {
      value: { _light: "{colors.yellow.500}", _dark: "{colors.yellow.500}" }
    }
  },
  teal: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.teal.700}", _dark: "{colors.teal.300}" }
    },
    subtle: {
      value: { _light: "{colors.teal.100}", _dark: "{colors.teal.900}" }
    },
    muted: {
      value: { _light: "{colors.teal.200}", _dark: "{colors.teal.800}" }
    },
    emphasized: {
      value: { _light: "{colors.teal.300}", _dark: "{colors.teal.700}" }
    },
    solid: {
      value: { _light: "{colors.teal.600}", _dark: "{colors.teal.600}" }
    },
    focusRing: {
      value: { _light: "{colors.teal.500}", _dark: "{colors.teal.500}" }
    },
    border: {
      value: { _light: "{colors.teal.500}", _dark: "{colors.teal.400}" }
    }
  },
  purple: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.purple.700}", _dark: "{colors.purple.300}" }
    },
    subtle: {
      value: { _light: "{colors.purple.100}", _dark: "{colors.purple.900}" }
    },
    muted: {
      value: { _light: "{colors.purple.200}", _dark: "{colors.purple.800}" }
    },
    emphasized: {
      value: { _light: "{colors.purple.300}", _dark: "{colors.purple.700}" }
    },
    solid: {
      value: { _light: "{colors.purple.600}", _dark: "{colors.purple.600}" }
    },
    focusRing: {
      value: { _light: "{colors.purple.500}", _dark: "{colors.purple.500}" }
    },
    border: {
      value: { _light: "{colors.purple.500}", _dark: "{colors.purple.400}" }
    }
  },
  pink: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.pink.700}", _dark: "{colors.pink.300}" }
    },
    subtle: {
      value: { _light: "{colors.pink.100}", _dark: "{colors.pink.900}" }
    },
    muted: {
      value: { _light: "{colors.pink.200}", _dark: "{colors.pink.800}" }
    },
    emphasized: {
      value: { _light: "{colors.pink.300}", _dark: "{colors.pink.700}" }
    },
    solid: {
      value: { _light: "{colors.pink.600}", _dark: "{colors.pink.600}" }
    },
    focusRing: {
      value: { _light: "{colors.pink.500}", _dark: "{colors.pink.500}" }
    },
    border: {
      value: { _light: "{colors.pink.500}", _dark: "{colors.pink.400}" }
    }
  },
  cyan: {
    contrast: {
      value: { _light: "white", _dark: "white" }
    },
    fg: {
      value: { _light: "{colors.cyan.700}", _dark: "{colors.cyan.300}" }
    },
    subtle: {
      value: { _light: "{colors.cyan.100}", _dark: "{colors.cyan.900}" }
    },
    muted: {
      value: { _light: "{colors.cyan.200}", _dark: "{colors.cyan.800}" }
    },
    emphasized: {
      value: { _light: "{colors.cyan.300}", _dark: "{colors.cyan.700}" }
    },
    solid: {
      value: { _light: "{colors.cyan.600}", _dark: "{colors.cyan.600}" }
    },
    focusRing: {
      value: { _light: "{colors.cyan.500}", _dark: "{colors.cyan.500}" }
    },
    border: {
      value: { _light: "{colors.cyan.500}", _dark: "{colors.cyan.400}" }
    }
  }
}), Bl = cr.radii({
  l1: { value: "{radii.xs}" },
  l2: { value: "{radii.sm}" },
  l3: { value: "{radii.md}" }
}), Ml = cr.shadows({
  xs: {
    value: {
      _light: "0px 1px 2px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/20}",
      _dark: "0px 1px 1px {black/64}, 0px 0px 1px inset {colors.gray.300/20}"
    }
  },
  sm: {
    value: {
      _light: "0px 2px 4px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
      _dark: "0px 2px 4px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
    }
  },
  md: {
    value: {
      _light: "0px 4px 8px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
      _dark: "0px 4px 8px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
    }
  },
  lg: {
    value: {
      _light: "0px 8px 16px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
      _dark: "0px 8px 16px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
    }
  },
  xl: {
    value: {
      _light: "0px 16px 24px {colors.gray.900/10}, 0px 0px 1px {colors.gray.900/30}",
      _dark: "0px 16px 24px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
    }
  },
  "2xl": {
    value: {
      _light: "0px 24px 40px {colors.gray.900/16}, 0px 0px 1px {colors.gray.900/30}",
      _dark: "0px 24px 40px {black/64}, 0px 0px 1px inset {colors.gray.300/30}"
    }
  },
  inner: {
    value: {
      _light: "inset 0 2px 4px 0 {black/5}",
      _dark: "inset 0 2px 4px 0 black"
    }
  },
  inset: {
    value: {
      _light: "inset 0 0 0 1px {black/5}",
      _dark: "inset 0 0 0 1px {colors.gray.300/5}"
    }
  }
}), Vl = Eo.extendWith("itemBody"), Ll = E("action-bar").parts(
  "positioner",
  "content",
  "separator",
  "selectionTrigger",
  "closeTrigger"
), Fl = E("alert").parts(
  "title",
  "description",
  "root",
  "indicator",
  "content"
), Hl = E("breadcrumb").parts(
  "link",
  "currentLink",
  "item",
  "list",
  "root",
  "ellipsis",
  "separator"
), Gl = E("blockquote").parts(
  "root",
  "icon",
  "content",
  "caption"
), Yl = E("card").parts(
  "root",
  "header",
  "body",
  "footer",
  "title",
  "description"
), ql = E("checkbox-card", [
  "root",
  "control",
  "label",
  "description",
  "addon",
  "indicator",
  "content"
]), Ul = E("data-list").parts(
  "root",
  "item",
  "itemLabel",
  "itemValue"
), Xl = Bn.extendWith("indicatorGroup"), Kl = nr.extendWith(
  "header",
  "body",
  "footer",
  "backdrop"
), Jl = nr.extendWith(
  "header",
  "body",
  "footer",
  "backdrop"
), Ql = Do.extendWith("textarea"), Zl = E("empty-state", [
  "root",
  "content",
  "indicator",
  "title",
  "description"
]), ec = Mo.extendWith("requiredIndicator"), tc = Vo.extendWith("content"), rc = Lo.extendWith(
  "itemContent",
  "dropzoneContent",
  "fileText"
), oc = E("list").parts(
  "root",
  "item",
  "indicator"
), ic = qo.extendWith("itemCommand"), ac = E("select").parts(
  "root",
  "field",
  "indicator"
), nc = Ko.extendWith(
  "header",
  "body",
  "footer"
), ji = lr.extendWith(
  "itemAddon",
  "itemIndicator"
), sc = ji.extendWith(
  "itemContent",
  "itemDescription"
), lc = Qo.extendWith("itemIndicator"), cc = ti.extendWith("indicatorGroup"), dc = Dn.extendWith(
  "indicatorGroup",
  "empty"
), uc = ri.extendWith(
  "markerIndicator",
  "markerLabel"
), pc = E("stat").parts(
  "root",
  "label",
  "helpText",
  "valueText",
  "valueUnit",
  "indicator"
), gc = E("status").parts("root", "indicator"), fc = E("steps", [
  "root",
  "list",
  "item",
  "trigger",
  "indicator",
  "separator",
  "content",
  "title",
  "description",
  "nextTrigger",
  "prevTrigger",
  "progress"
]), mc = oi.extendWith("indicator"), hc = E("table").parts(
  "root",
  "header",
  "body",
  "row",
  "columnHeader",
  "cell",
  "footer",
  "caption"
), bc = E("toast").parts(
  "root",
  "title",
  "description",
  "indicator",
  "closeTrigger",
  "actionTrigger"
), vc = E("tabs").parts(
  "root",
  "trigger",
  "list",
  "content",
  "contentGroup",
  "indicator"
), xc = E("tag").parts(
  "root",
  "label",
  "closeTrigger",
  "startElement",
  "endElement"
), yc = E("timeline").parts(
  "root",
  "item",
  "content",
  "separator",
  "indicator",
  "connector",
  "title",
  "description"
), kc = $n.extendWith("channelText"), Sc = E("code-block", [
  "root",
  "content",
  "title",
  "header",
  "footer",
  "control",
  "overlay",
  "code",
  "codeText",
  "copyTrigger",
  "copyIndicator",
  "collapseTrigger",
  "collapseIndicator",
  "collapseText"
]), wc = Wo.extendWith(
  "resizeTriggerSeparator",
  "resizeTriggerIndicator"
);
Oo.extendWith("valueText");
const zc = Mn, _c = A({
  className: "chakra-accordion",
  slots: Vl.keys(),
  base: {
    root: {
      width: "full",
      "--accordion-radius": "radii.l2"
    },
    item: {
      overflowAnchor: "none"
    },
    itemTrigger: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      width: "full",
      outline: "0",
      gap: "3",
      fontWeight: "medium",
      borderRadius: "var(--accordion-radius)",
      _focusVisible: {
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing"
      },
      _disabled: {
        layerStyle: "disabled"
      }
    },
    itemBody: {
      pt: "var(--accordion-padding-y)",
      pb: "calc(var(--accordion-padding-y) * 2)"
    },
    itemContent: {
      overflow: "hidden",
      borderRadius: "var(--accordion-radius)",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate"
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate"
      }
    },
    itemIndicator: {
      transition: "rotate 0.2s",
      transformOrigin: "center",
      color: "fg.subtle",
      _open: {
        rotate: "180deg"
      },
      _icon: {
        width: "1.2em",
        height: "1.2em"
      }
    }
  },
  variants: {
    variant: {
      outline: {
        item: {
          borderBottomWidth: "1px"
        }
      },
      subtle: {
        itemTrigger: {
          px: "var(--accordion-padding-x)"
        },
        itemContent: {
          px: "var(--accordion-padding-x)"
        },
        item: {
          borderRadius: "var(--accordion-radius)",
          _open: {
            bg: "colorPalette.subtle"
          }
        }
      },
      enclosed: {
        root: {
          borderWidth: "1px",
          borderRadius: "var(--accordion-radius)",
          divideY: "1px",
          overflow: "hidden"
        },
        itemTrigger: {
          px: "var(--accordion-padding-x)"
        },
        itemContent: {
          px: "var(--accordion-padding-x)"
        },
        item: {
          _open: {
            bg: "bg.subtle"
          }
        }
      },
      plain: {}
    },
    size: {
      sm: {
        root: {
          "--accordion-padding-x": "spacing.3",
          "--accordion-padding-y": "spacing.2"
        },
        itemTrigger: {
          textStyle: "sm",
          py: "var(--accordion-padding-y)"
        }
      },
      md: {
        root: {
          "--accordion-padding-x": "spacing.4",
          "--accordion-padding-y": "spacing.2"
        },
        itemTrigger: {
          textStyle: "md",
          py: "var(--accordion-padding-y)"
        }
      },
      lg: {
        root: {
          "--accordion-padding-x": "spacing.4.5",
          "--accordion-padding-y": "spacing.2.5"
        },
        itemTrigger: {
          textStyle: "lg",
          py: "var(--accordion-padding-y)"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Cc = A({
  className: "chakra-action-bar",
  slots: Ll.keys(),
  base: {
    positioner: {
      position: "fixed",
      display: "flex",
      pointerEvents: "none",
      insetInline: "0",
      "--action-bar-offset": "spacing.4"
    },
    content: {
      bg: "bg.panel",
      shadow: "md",
      display: "flex",
      alignItems: "center",
      gap: "3",
      borderRadius: "l3",
      py: "2.5",
      px: "3",
      pointerEvents: "auto",
      // Stabilize the position of the action bar when the scrollbar is hidden
      // by using the scrollbar width to offset the position.
      translate: "calc(-1 * var(--scrollbar-width) / 2) 0px",
      _open: {
        animationName: "slide-from-bottom, fade-in",
        animationDuration: "moderate"
      },
      _closed: {
        animationName: "slide-to-bottom, fade-out",
        animationDuration: "faster"
      }
    },
    separator: {
      width: "1px",
      height: "5",
      bg: "border"
    },
    selectionTrigger: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2",
      alignSelf: "stretch",
      textStyle: "sm",
      px: "4",
      py: "1",
      borderRadius: "l2",
      borderWidth: "1px",
      borderStyle: "dashed"
    }
  },
  variants: {
    placement: {
      bottom: {
        positioner: {
          bottom: "calc(env(safe-area-inset-bottom) + var(--action-bar-offset))",
          justifyContent: "center"
        }
      },
      "bottom-start": {
        positioner: {
          bottom: "calc(env(safe-area-inset-bottom) + var(--action-bar-offset))",
          justifyContent: "flex-start",
          ps: "var(--action-bar-offset)"
        }
      },
      "bottom-end": {
        positioner: {
          bottom: "calc(env(safe-area-inset-bottom) + var(--action-bar-offset))",
          justifyContent: "flex-end",
          pe: "var(--action-bar-offset)"
        }
      }
    }
  },
  defaultVariants: {
    placement: "bottom"
  }
}), Rc = A({
  slots: Fl.keys(),
  className: "chakra-alert",
  base: {
    root: {
      width: "full",
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
      borderRadius: "l3"
    },
    title: {
      fontWeight: "medium"
    },
    description: {
      display: "inline"
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      width: "1em",
      height: "1em",
      _icon: { boxSize: "full" }
    },
    content: {
      display: "flex",
      flex: "1",
      gap: "1"
    }
  },
  variants: {
    status: {
      info: {
        root: { colorPalette: "blue" }
      },
      warning: {
        root: { colorPalette: "orange" }
      },
      success: {
        root: { colorPalette: "green" }
      },
      error: {
        root: { colorPalette: "red" }
      },
      neutral: {
        root: { colorPalette: "gray" }
      }
    },
    inline: {
      true: {
        content: {
          display: "inline-flex",
          flexDirection: "row",
          alignItems: "center"
        }
      },
      false: {
        content: {
          display: "flex",
          flexDirection: "column"
        }
      }
    },
    variant: {
      subtle: {
        root: {
          bg: "colorPalette.subtle",
          color: "colorPalette.fg"
        }
      },
      surface: {
        root: {
          bg: "colorPalette.subtle",
          color: "colorPalette.fg",
          shadow: "inset 0 0 0px 1px var(--shadow-color)",
          shadowColor: "colorPalette.muted"
        },
        indicator: {
          color: "colorPalette.fg"
        }
      },
      outline: {
        root: {
          color: "colorPalette.fg",
          shadow: "inset 0 0 0px 1px var(--shadow-color)",
          "--outline-shadow-legacy": "colors.colorPalette.muted",
          "--outline-shadow": "colors.colorPalette.border",
          shadowColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
        },
        indicator: {
          color: "colorPalette.fg"
        }
      },
      solid: {
        root: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast"
        },
        indicator: {
          color: "colorPalette.contrast"
        }
      }
    },
    size: {
      sm: {
        root: {
          gap: "2",
          px: "3",
          py: "3",
          textStyle: "xs"
        },
        indicator: {
          textStyle: "lg"
        }
      },
      md: {
        root: {
          gap: "3",
          px: "4",
          py: "4",
          textStyle: "sm"
        },
        indicator: {
          textStyle: "xl"
        }
      },
      lg: {
        root: {
          gap: "3",
          px: "4",
          py: "4",
          textStyle: "md"
        },
        indicator: {
          textStyle: "2xl"
        }
      }
    }
  },
  defaultVariants: {
    status: "info",
    variant: "subtle",
    size: "md",
    inline: !1
  }
}), Pc = A({
  slots: Ao.keys(),
  className: "chakra-avatar",
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "medium",
      position: "relative",
      verticalAlign: "top",
      flexShrink: "0",
      userSelect: "none",
      width: "var(--avatar-size)",
      height: "var(--avatar-size)",
      fontSize: "var(--avatar-font-size)",
      borderRadius: "var(--avatar-radius)",
      "&[data-group-item]": {
        borderWidth: "2px",
        borderColor: "bg"
      }
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "var(--avatar-radius)"
    },
    fallback: {
      lineHeight: "1",
      textTransform: "uppercase",
      fontWeight: "medium",
      fontSize: "var(--avatar-font-size)",
      borderRadius: "var(--avatar-radius)"
    }
  },
  variants: {
    size: {
      full: {
        root: {
          "--avatar-size": "100%",
          "--avatar-font-size": "100%"
        }
      },
      "2xs": {
        root: {
          "--avatar-font-size": "fontSizes.2xs",
          "--avatar-size": "sizes.6"
        }
      },
      xs: {
        root: {
          "--avatar-font-size": "fontSizes.xs",
          "--avatar-size": "sizes.8"
        }
      },
      sm: {
        root: {
          "--avatar-font-size": "fontSizes.sm",
          "--avatar-size": "sizes.9"
        }
      },
      md: {
        root: {
          "--avatar-font-size": "fontSizes.md",
          "--avatar-size": "sizes.10"
        }
      },
      lg: {
        root: {
          "--avatar-font-size": "fontSizes.md",
          "--avatar-size": "sizes.11"
        }
      },
      xl: {
        root: {
          "--avatar-font-size": "fontSizes.lg",
          "--avatar-size": "sizes.12"
        }
      },
      "2xl": {
        root: {
          "--avatar-font-size": "fontSizes.xl",
          "--avatar-size": "sizes.16"
        }
      }
    },
    variant: {
      solid: {
        root: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast"
        }
      },
      subtle: {
        root: {
          bg: "colorPalette.muted",
          color: "colorPalette.fg"
        }
      },
      outline: {
        root: {
          color: "colorPalette.fg",
          borderWidth: "1px",
          "--outline-shadow-legacy": "colors.colorPalette.muted",
          "--outline-shadow": "colors.colorPalette.border",
          borderColor: "var(--outline-shadow, var(--outline-shadow-legacy))"
        }
      }
    },
    shape: {
      square: {},
      rounded: {
        root: { "--avatar-radius": "radii.l3" }
      },
      full: {
        root: { "--avatar-radius": "radii.full" }
      }
    },
    borderless: {
      true: {
        root: {
          "&[data-group-item]": {
            borderWidth: "0px"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    shape: "full",
    variant: "subtle"
  }
}), Tc = A({
  className: "chakra-blockquote",
  slots: Gl.keys(),
  base: {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: "2"
    },
    caption: {
      textStyle: "sm",
      color: "fg.muted"
    },
    icon: {
      boxSize: "5"
    }
  },
  variants: {
    justify: {
      start: {
        root: {
          alignItems: "flex-start",
          textAlign: "start"
        }
      },
      center: {
        root: {
          alignItems: "center",
          textAlign: "center"
        }
      },
      end: {
        root: {
          alignItems: "flex-end",
          textAlign: "end"
        }
      }
    },
    variant: {
      subtle: {
        root: {
          paddingX: "5",
          borderStartWidth: "4px",
          borderStartColor: "colorPalette.muted"
        },
        icon: {
          color: "colorPalette.fg"
        }
      },
      solid: {
        root: {
          paddingX: "5",
          borderStartWidth: "4px",
          borderStartColor: "colorPalette.solid"
        },
        icon: {
          color: "colorPalette.solid"
        }
      },
      plain: {
        root: {
          paddingX: "5"
        },
        icon: {
          color: "colorPalette.solid"
        }
      }
    }
  },
  defaultVariants: {
    variant: "subtle",
    justify: "start"
  }
}), Ic = A({
  className: "chakra-breadcrumb",
  slots: Hl.keys(),
  base: {
    list: {
      display: "flex",
      alignItems: "center",
      wordBreak: "break-word",
      color: "fg.muted",
      listStyle: "none"
    },
    link: {
      outline: "0",
      textDecoration: "none",
      borderRadius: "l1",
      focusRing: "outside",
      display: "inline-flex",
      alignItems: "center",
      gap: "2"
    },
    item: {
      display: "inline-flex",
      alignItems: "center"
    },
    separator: {
      color: "fg.muted",
      opacity: "0.8",
      _icon: {
        boxSize: "1em"
      },
      _rtl: {
        rotate: "180deg"
      }
    },
    ellipsis: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      _icon: {
        boxSize: "1em"
      }
    }
  },
  variants: {
    variant: {
      underline: {
        link: {
          color: "colorPalette.fg",
          textDecoration: "underline",
          textUnderlineOffset: "0.2em",
          textDecorationColor: "colorPalette.muted"
        },
        currentLink: {
          color: "colorPalette.fg"
        }
      },
      plain: {
        link: {
          color: "fg.muted",
          _hover: { color: "fg" }
        },
        currentLink: {
          color: "fg"
        }
      }
    },
    size: {
      sm: {
        list: {
          gap: "1",
          textStyle: "xs"
        }
      },
      md: {
        list: {
          gap: "1.5",
          textStyle: "sm"
        }
      },
      lg: {
        list: {
          gap: "2",
          textStyle: "md"
        }
      }
    }
  },
  defaultVariants: {
    variant: "plain",
    size: "md"
  }
}), Wc = A({
  className: "chakra-card",
  slots: Yl.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      minWidth: "0",
      wordWrap: "break-word",
      borderRadius: "l3",
      color: "fg",
      textAlign: "start"
    },
    title: {
      fontWeight: "semibold"
    },
    description: {
      color: "fg.muted",
      fontSize: "sm"
    },
    header: {
      paddingInline: "var(--card-padding)",
      paddingTop: "var(--card-padding)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },
    body: {
      padding: "var(--card-padding)",
      flex: "1",
      display: "flex",
      flexDirection: "column"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      paddingInline: "var(--card-padding)",
      paddingBottom: "var(--card-padding)"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          "--card-padding": "spacing.4"
        },
        title: {
          textStyle: "md"
        }
      },
      md: {
        root: {
          "--card-padding": "spacing.6"
        },
        title: {
          textStyle: "lg"
        }
      },
      lg: {
        root: {
          "--card-padding": "spacing.7"
        },
        title: {
          textStyle: "xl"
        }
      }
    },
    variant: {
      elevated: {
        root: {
          bg: "bg.panel",
          boxShadow: "md"
        }
      },
      outline: {
        root: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderColor: "border"
        }
      },
      subtle: {
        root: {
          bg: "bg.muted"
        }
      }
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md"
  }
}), Ec = A({
  className: "carousel",
  slots: jn.keys(),
  base: {
    root: {
      position: "relative",
      display: "flex",
      gap: "2",
      _horizontal: {
        flexDirection: "column"
      },
      _vertical: {
        flexDirection: "row"
      }
    },
    item: {
      _horizontal: {
        width: "100%"
      },
      _vertical: {
        height: "100%"
      }
    },
    control: {
      display: "flex",
      alignItems: "center",
      _horizontal: {
        flexDirection: "row",
        width: "100%"
      },
      _vertical: {
        flexDirection: "column",
        height: "100%"
      }
    },
    indicatorGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "3",
      _horizontal: {
        flexDirection: "row"
      },
      _vertical: {
        flexDirection: "column"
      }
    },
    indicator: {
      width: "2.5",
      height: "2.5",
      borderRadius: "full",
      bg: "colorPalette.subtle",
      cursor: "button",
      _current: {
        bg: "colorPalette.solid"
      }
    }
  },
  defaultVariants: {}
}), Ac = A({
  slots: Nn.keys(),
  className: "chakra-checkbox",
  base: {
    root: {
      display: "inline-flex",
      gap: "2",
      alignItems: "center",
      verticalAlign: "top",
      position: "relative"
    },
    control: ge.base,
    label: {
      fontWeight: "medium",
      userSelect: "none",
      _disabled: {
        opacity: "0.5"
      }
    }
  },
  variants: {
    size: {
      xs: {
        root: { gap: "1.5" },
        label: { textStyle: "xs" },
        control: ge.variants?.size?.xs
      },
      sm: {
        root: { gap: "2" },
        label: { textStyle: "sm" },
        control: ge.variants?.size?.sm
      },
      md: {
        root: { gap: "2.5" },
        label: { textStyle: "sm" },
        control: ge.variants?.size?.md
      },
      lg: {
        root: { gap: "3" },
        label: { textStyle: "md" },
        control: ge.variants?.size?.lg
      }
    },
    variant: {
      outline: {
        control: ge.variants?.variant?.outline
      },
      solid: {
        control: ge.variants?.variant?.solid
      },
      subtle: {
        control: ge.variants?.variant?.subtle
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
}), jc = A({
  slots: ql.keys(),
  className: "chakra-checkbox-card",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      position: "relative",
      borderRadius: "l2",
      flex: "1",
      focusVisibleRing: "outside",
      _disabled: {
        opacity: "0.8"
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "border.error"
      }
    },
    control: {
      display: "inline-flex",
      flex: "1",
      position: "relative",
      borderRadius: "inherit",
      justifyContent: "var(--checkbox-card-justify)",
      alignItems: "var(--checkbox-card-align)"
    },
    label: {
      fontWeight: "medium",
      display: "flex",
      alignItems: "center",
      gap: "2",
      flex: "1",
      _disabled: {
        opacity: "0.5"
      }
    },
    description: {
      opacity: "0.64",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    },
    addon: {
      _disabled: {
        opacity: "0.5"
      }
    },
    indicator: ge.base,
    content: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "1",
      justifyContent: "var(--checkbox-card-justify)",
      alignItems: "var(--checkbox-card-align)"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: "sm"
        },
        control: {
          padding: "3",
          gap: "1.5"
        },
        addon: {
          px: "3",
          py: "1.5",
          borderTopWidth: "1px"
        },
        indicator: ge.variants?.size.sm
      },
      md: {
        root: {
          textStyle: "sm"
        },
        control: {
          padding: "4",
          gap: "2.5"
        },
        addon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px"
        },
        indicator: ge.variants?.size.md
      },
      lg: {
        root: {
          textStyle: "md"
        },
        control: {
          padding: "4",
          gap: "3.5"
        },
        addon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px"
        },
        indicator: ge.variants?.size.lg
      }
    },
    variant: {
      surface: {
        root: {
          borderWidth: "1px",
          borderColor: "border",
          _checked: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
            borderColor: "colorPalette.muted"
          },
          _disabled: {
            bg: "bg.muted"
          }
        },
        indicator: ge.variants?.variant.solid
      },
      subtle: {
        root: {
          bg: "bg.muted"
        },
        control: {
          _checked: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg"
          }
        },
        indicator: ge.variants?.variant.plain
      },
      outline: {
        root: {
          borderWidth: "1px",
          borderColor: "border",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid",
            borderColor: "colorPalette.solid"
          }
        },
        indicator: ge.variants?.variant.solid
      },
      solid: {
        root: {
          borderWidth: "1px",
          _checked: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
            borderColor: "colorPalette.solid"
          }
        },
        indicator: ge.variants?.variant.inverted
      }
    },
    justify: {
      start: {
        root: { "--checkbox-card-justify": "flex-start" }
      },
      end: {
        root: { "--checkbox-card-justify": "flex-end" }
      },
      center: {
        root: { "--checkbox-card-justify": "center" }
      }
    },
    align: {
      start: {
        root: { "--checkbox-card-align": "flex-start" },
        content: { textAlign: "start" }
      },
      end: {
        root: { "--checkbox-card-align": "flex-end" },
        content: { textAlign: "end" }
      },
      center: {
        root: { "--checkbox-card-align": "center" },
        content: { textAlign: "center" }
      }
    },
    orientation: {
      vertical: {
        control: { flexDirection: "column" }
      },
      horizontal: {
        control: { flexDirection: "row" }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
    align: "start",
    orientation: "horizontal"
  }
}), Nc = A({
  slots: Sc.keys(),
  className: "code-block",
  base: {
    root: {
      colorPalette: "gray",
      rounded: "var(--code-block-radius)",
      overflow: "hidden",
      bg: "bg",
      color: "fg",
      borderWidth: "1px",
      "--code-block-max-height": "320px",
      "--code-block-bg": "colors.bg",
      "--code-block-fg": "colors.fg",
      "--code-block-obscured-opacity": "0.5",
      "--code-block-obscured-blur": "1px",
      "--code-block-line-number-width": "sizes.3",
      "--code-block-line-number-margin": "spacing.4",
      "--code-block-highlight-bg": "{colors.teal.focusRing/20}",
      "--code-block-highlight-border": "colors.teal.focusRing",
      "--code-block-highlight-added-bg": "{colors.green.focusRing/20}",
      "--code-block-highlight-added-border": "colors.green.focusRing",
      "--code-block-highlight-removed-bg": "{colors.red.focusRing/20}",
      "--code-block-highlight-removed-border": "colors.red.focusRing"
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      position: "relative",
      px: "var(--code-block-padding)",
      minH: "var(--code-block-header-height)",
      mb: "calc(var(--code-block-padding) / 2 * -1)"
    },
    title: {
      display: "inline-flex",
      alignItems: "center",
      gap: "1.5",
      flex: "1",
      color: "fg.muted"
    },
    control: {
      gap: "1.5",
      display: "inline-flex",
      alignItems: "center"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "2",
      px: "var(--code-block-padding)",
      minH: "var(--code-block-header-height)"
    },
    content: {
      position: "relative",
      colorScheme: "dark",
      borderBottomRadius: "var(--code-block-radius)",
      maxHeight: "var(--code-block-max-height)",
      "& ::selection": {
        bg: "blue.500/40"
      },
      _expanded: {
        maxHeight: "unset"
      }
    },
    overlay: {
      "--bg": "{colors.black/50}",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: "4",
      bgImage: "linear-gradient(0deg,var(--bg) 25%,transparent 100%)",
      color: "white",
      minH: "5rem",
      pos: "absolute",
      bottom: "0",
      insetInline: "0",
      zIndex: "1",
      fontWeight: "medium",
      _expanded: {
        display: "none"
      }
    },
    code: {
      fontFamily: "mono",
      lineHeight: "tall",
      whiteSpace: "pre",
      counterReset: "line 0",
      overflowX: "auto",
      overflowY: "hidden"
    },
    codeText: {
      px: "var(--code-block-padding)",
      py: "var(--code-block-padding)",
      position: "relative",
      display: "block",
      width: "100%",
      "&[data-has-focused]": {
        "& [data-line]:not([data-focused])": {
          transitionProperty: "opacity, filter",
          transitionDuration: "moderate",
          transitionTimingFunction: "ease-in-out",
          opacity: "var(--code-block-obscured-opacity)",
          filter: "blur(var(--code-block-obscured-blur))"
        },
        "&:hover": {
          "--code-block-obscured-opacity": "1",
          "--code-block-obscured-blur": "0px"
        }
      },
      "&[data-has-line-numbers][data-plaintext]": {
        paddingInlineStart: "calc(var(--code-block-line-number-width) + var(--code-block-line-number-margin) + var(--code-block-padding))"
      },
      "& [data-line]": {
        position: "relative",
        paddingInlineEnd: "var(--code-block-padding)",
        "--highlight-bg": "var(--code-block-highlight-bg)",
        "--highlight-border": "var(--code-block-highlight-border)",
        "&[data-highlight], &[data-diff]": {
          display: "inline-block",
          width: "full",
          "&:after": {
            content: "''",
            display: "block",
            position: "absolute",
            top: "0",
            insetStart: "calc(var(--code-block-padding) * -1)",
            insetEnd: "0px",
            width: "calc(100% + var(--code-block-padding) * 2)",
            height: "100%",
            bg: "var(--highlight-bg)",
            borderStartWidth: "2px",
            borderStartColor: "var(--highlight-border)"
          }
        },
        "&[data-diff='added']": {
          "--highlight-bg": "var(--code-block-highlight-added-bg)",
          "--highlight-border": "var(--code-block-highlight-added-border)"
        },
        "&[data-diff='removed']": {
          "--highlight-bg": "var(--code-block-highlight-removed-bg)",
          "--highlight-border": "var(--code-block-highlight-removed-border)"
        }
      },
      "&[data-word-wrap]": {
        "&[data-plaintext], & [data-line]": {
          whiteSpace: "pre-wrap",
          wordBreak: "break-all"
        }
      },
      "&[data-has-line-numbers]": {
        "--content": "counter(line)",
        "& [data-line]:before": {
          content: "var(--content)",
          counterIncrement: "line",
          width: "var(--code-block-line-number-width)",
          marginRight: "var(--code-block-line-number-margin)",
          display: "inline-block",
          textAlign: "end",
          userSelect: "none",
          whiteSpace: "nowrap",
          opacity: 0.4
        },
        "& [data-diff='added']:before": {
          content: "'+'"
        },
        "& [data-diff='removed']:before": {
          content: "'-'"
        }
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          "--code-block-padding": "spacing.4",
          "--code-block-radius": "radii.md",
          "--code-block-header-height": "sizes.8"
        },
        title: {
          textStyle: "xs"
        },
        code: {
          fontSize: "xs"
        }
      },
      md: {
        root: {
          "--code-block-padding": "spacing.4",
          "--code-block-radius": "radii.lg",
          "--code-block-header-height": "sizes.10"
        },
        title: {
          textStyle: "xs"
        },
        code: {
          fontSize: "sm"
        }
      },
      lg: {
        root: {
          "--code-block-padding": "spacing.5",
          "--code-block-radius": "radii.xl",
          "--code-block-header-height": "sizes.12"
        },
        title: {
          textStyle: "sm"
        },
        code: {
          fontSize: "sm"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Oc = A({
  slots: Po.keys(),
  className: "chakra-collapsible",
  base: {
    content: {
      overflow: "hidden",
      _open: {
        animationName: "expand-height, fade-in",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "expand-height"
        }
      },
      _closed: {
        animationName: "collapse-height, fade-out",
        animationDuration: "moderate",
        "&[data-has-collapsed-size]": {
          animationName: "collapse-height"
        }
      }
    }
  }
}), $c = A({
  className: "colorPicker",
  slots: kc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5"
    },
    label: {
      color: "fg",
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    },
    valueText: {
      textAlign: "start"
    },
    control: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: "2",
      position: "relative"
    },
    swatchTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      flexShrink: "0",
      gap: "2",
      textStyle: "sm",
      minH: "var(--input-height)",
      minW: "var(--input-height)",
      px: "1",
      rounded: "l2",
      _disabled: { opacity: "0.5" },
      "--focus-color": "colors.colorPalette.focusRing",
      "&:focus-visible": {
        borderColor: "var(--focus-color)",
        outline: "1px solid var(--focus-color)"
      },
      "&[data-fit-content]": {
        "--input-height": "unset",
        px: "0",
        border: "0"
      }
    },
    content: {
      display: "flex",
      flexDirection: "column",
      bg: "bg.panel",
      borderRadius: "l3",
      boxShadow: "lg",
      width: "64",
      p: "4",
      gap: "3",
      "--color-picker-z-index": "zIndex.popover",
      zIndex: "calc(var(--color-picker-z-index) + var(--layer-index, 0))",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster"
      }
    },
    area: {
      height: "180px",
      borderRadius: "l2",
      overflow: "hidden"
    },
    areaThumb: {
      borderRadius: "full",
      height: "var(--thumb-size)",
      width: "var(--thumb-size)",
      borderWidth: "2px",
      borderColor: "white",
      shadow: "sm",
      focusVisibleRing: "mixed",
      focusRingColor: "white"
    },
    areaBackground: {
      height: "full"
    },
    channelSlider: {
      borderRadius: "l2",
      flex: "1"
    },
    channelSliderTrack: {
      height: "var(--slider-height)",
      borderRadius: "inherit",
      boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
    },
    channelText: {
      textStyle: "xs",
      color: "fg.muted",
      fontWeight: "medium",
      textTransform: "capitalize"
    },
    swatchGroup: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: "2"
    },
    swatch: {
      ...Ai.base,
      borderRadius: "l1"
    },
    swatchIndicator: {
      color: "white",
      rounded: "full"
    },
    channelSliderThumb: {
      borderRadius: "full",
      height: "var(--thumb-size)",
      width: "var(--thumb-size)",
      borderWidth: "2px",
      borderColor: "white",
      shadow: "sm",
      transform: "translate(-50%, -50%)",
      focusVisibleRing: "outside",
      focusRingOffset: "1px"
    },
    channelInput: {
      ...ne.base,
      "&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
        WebkitAppearance: "none",
        margin: 0
      }
    },
    formatSelect: {
      textStyle: "xs",
      textTransform: "uppercase",
      borderWidth: "1px",
      minH: "6",
      focusRing: "inside",
      rounded: "l2"
    },
    transparencyGrid: {
      borderRadius: "l2"
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: "2"
    }
  },
  variants: {
    size: {
      "2xs": {
        channelInput: ne.variants?.size?.["2xs"],
        swatch: { "--swatch-size": "sizes.4.5" },
        trigger: { "--input-height": "sizes.7" },
        area: { "--thumb-size": "sizes.3" },
        channelSlider: {
          "--slider-height": "sizes.3",
          "--thumb-size": "sizes.3"
        }
      },
      xs: {
        channelInput: ne.variants?.size?.xs,
        swatch: { "--swatch-size": "sizes.5" },
        trigger: { "--input-height": "sizes.8" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      },
      sm: {
        channelInput: ne.variants?.size?.sm,
        swatch: { "--swatch-size": "sizes.6" },
        trigger: { "--input-height": "sizes.9" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      },
      md: {
        channelInput: ne.variants?.size?.md,
        swatch: { "--swatch-size": "sizes.7" },
        trigger: { "--input-height": "sizes.10" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      },
      lg: {
        channelInput: ne.variants?.size?.lg,
        swatch: { "--swatch-size": "sizes.7" },
        trigger: { "--input-height": "sizes.11" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      },
      xl: {
        channelInput: ne.variants?.size?.xl,
        swatch: { "--swatch-size": "sizes.8" },
        trigger: { "--input-height": "sizes.12" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      },
      "2xl": {
        channelInput: ne.variants?.size?.["2xl"],
        swatch: { "--swatch-size": "sizes.10" },
        trigger: { "--input-height": "sizes.16" },
        area: { "--thumb-size": "sizes.3.5" },
        channelSlider: {
          "--slider-height": "sizes.3.5",
          "--thumb-size": "sizes.3.5"
        }
      }
    },
    variant: {
      outline: {
        channelInput: ne.variants?.variant?.outline,
        trigger: {
          borderWidth: "1px"
        }
      },
      subtle: {
        channelInput: ne.variants?.variant?.subtle,
        trigger: {
          borderWidth: "1px",
          borderColor: "transparent",
          bg: "bg.muted"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Dc = A({
  className: "chakra-combobox",
  slots: dc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    label: {
      fontWeight: "medium",
      userSelect: "none",
      textStyle: "sm",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    control: {
      pos: "relative",
      "--padding-factor": "1",
      "--combobox-input-padding-end": "var(--combobox-input-padding-x)",
      "&:has([data-part=trigger]), &:has([data-part=clear-trigger])": {
        "--combobox-input-padding-end": "calc(var(--combobox-input-height) * var(--padding-factor))"
      },
      "&:has([data-part=trigger]):has([data-part=clear-trigger]:not([hidden]))": {
        "--padding-factor": "1.5"
      }
    },
    input: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "bg.panel",
      width: "full",
      minH: "var(--combobox-input-height)",
      ps: "var(--combobox-input-padding-x)",
      pe: "var(--combobox-input-padding-end)",
      "--input-height": "var(--combobox-input-height)",
      borderRadius: "l2",
      outline: 0,
      userSelect: "none",
      textAlign: "start",
      _placeholderShown: {
        color: "fg.muted"
      },
      _disabled: {
        layerStyle: "disabled"
      },
      "--focus-color": "colors.colorPalette.focusRing",
      "--error-color": "colors.border.error",
      _invalid: {
        focusRingColor: "var(--error-color)",
        borderColor: "var(--error-color)"
      }
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      "--input-height": "var(--combobox-input-height)"
    },
    clearTrigger: {
      color: "fg.muted",
      pointerEvents: "auto",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      rounded: "l1"
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      pos: "absolute",
      insetEnd: "0",
      top: "0",
      bottom: "0",
      px: "var(--combobox-input-padding-x)",
      _icon: {
        boxSize: "var(--combobox-indicator-size)"
      },
      "[data-disabled] &": {
        opacity: 0.5
      }
    },
    content: {
      background: "bg.panel",
      display: "flex",
      flexDirection: "column",
      "--combobox-z-index": "zIndex.popover",
      zIndex: "calc(var(--combobox-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      outline: 0,
      maxH: "96",
      overflowY: "auto",
      boxShadow: "md",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "0s"
      },
      "&[data-empty]:not(:has([data-scope=combobox][data-part=empty]))": {
        opacity: 0
      }
    },
    item: {
      position: "relative",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "2",
      py: "var(--combobox-item-padding-y)",
      px: "var(--combobox-item-padding-x)",
      cursor: "option",
      justifyContent: "space-between",
      flex: "1",
      textAlign: "start",
      borderRadius: "l1",
      _highlighted: {
        bg: "bg.emphasized/60"
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5"
      },
      _icon: {
        boxSize: "var(--combobox-indicator-size)"
      }
    },
    empty: {
      py: "var(--combobox-item-padding-y)",
      px: "var(--combobox-item-padding-x)"
    },
    itemText: {
      flex: "1"
    },
    itemGroup: {
      pb: "var(--combobox-item-padding-y)",
      _last: {
        pb: "0"
      }
    },
    itemGroupLabel: {
      fontWeight: "medium",
      py: "var(--combobox-item-padding-y)",
      px: "var(--combobox-item-padding-x)"
    }
  },
  variants: {
    variant: {
      outline: {
        input: {
          bg: "transparent",
          borderWidth: "1px",
          borderColor: "border",
          focusVisibleRing: "inside"
        }
      },
      subtle: {
        input: {
          borderWidth: "1px",
          borderColor: "transparent",
          bg: "bg.muted",
          focusVisibleRing: "inside"
        }
      },
      flushed: {
        input: {
          bg: "transparent",
          borderBottomWidth: "1px",
          borderBottomColor: "border",
          borderRadius: "0",
          px: "0",
          _focusVisible: {
            borderColor: "var(--focus-color)",
            boxShadow: "0px 1px 0px 0px var(--focus-color)"
          }
        },
        indicatorGroup: {
          px: "0"
        }
      }
    },
    size: {
      xs: {
        root: {
          "--combobox-input-height": "sizes.8",
          "--combobox-input-padding-x": "spacing.2",
          "--combobox-indicator-size": "sizes.3.5"
        },
        input: {
          textStyle: "xs"
        },
        content: {
          "--combobox-item-padding-x": "spacing.1.5",
          "--combobox-item-padding-y": "spacing.1",
          "--combobox-indicator-size": "sizes.3.5",
          p: "1",
          textStyle: "xs"
        },
        trigger: {
          textStyle: "xs",
          gap: "1"
        }
      },
      sm: {
        root: {
          "--combobox-input-height": "sizes.9",
          "--combobox-input-padding-x": "spacing.2.5",
          "--combobox-indicator-size": "sizes.4"
        },
        input: {
          textStyle: "sm"
        },
        content: {
          "--combobox-item-padding-x": "spacing.2",
          "--combobox-item-padding-y": "spacing.1.5",
          "--combobox-indicator-size": "sizes.4",
          p: "1",
          textStyle: "sm"
        },
        trigger: {
          textStyle: "sm",
          gap: "1"
        }
      },
      md: {
        root: {
          "--combobox-input-height": "sizes.10",
          "--combobox-input-padding-x": "spacing.3",
          "--combobox-indicator-size": "sizes.4"
        },
        input: {
          textStyle: "sm"
        },
        content: {
          "--combobox-item-padding-x": "spacing.2",
          "--combobox-item-padding-y": "spacing.1.5",
          "--combobox-indicator-size": "sizes.4",
          p: "1",
          textStyle: "sm"
        },
        itemIndicator: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        trigger: {
          textStyle: "sm",
          gap: "2"
        }
      },
      lg: {
        root: {
          "--combobox-input-height": "sizes.12",
          "--combobox-input-padding-x": "spacing.4",
          "--combobox-indicator-size": "sizes.5"
        },
        input: {
          textStyle: "md"
        },
        content: {
          "--combobox-item-padding-y": "spacing.2",
          "--combobox-item-padding-x": "spacing.3",
          "--combobox-indicator-size": "sizes.5",
          p: "1.5",
          textStyle: "md"
        },
        trigger: {
          textStyle: "md",
          py: "3",
          gap: "2"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Bc = A({
  slots: Ul.keys(),
  className: "chakra-data-list",
  base: {
    itemLabel: {
      display: "flex",
      alignItems: "center",
      gap: "1"
    },
    itemValue: {
      display: "flex",
      minWidth: "0",
      flex: "1"
    }
  },
  variants: {
    orientation: {
      horizontal: {
        root: {
          display: "flex",
          flexDirection: "column"
        },
        item: {
          display: "inline-flex",
          alignItems: "center",
          gap: "4"
        },
        itemLabel: {
          minWidth: "120px"
        }
      },
      vertical: {
        root: {
          display: "flex",
          flexDirection: "column"
        },
        item: {
          display: "flex",
          flexDirection: "column",
          gap: "1"
        }
      }
    },
    size: {
      sm: {
        root: {
          gap: "3"
        },
        item: {
          textStyle: "xs"
        }
      },
      md: {
        root: {
          gap: "4"
        },
        item: {
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          gap: "5"
        },
        item: {
          textStyle: "md"
        }
      }
    },
    variant: {
      subtle: {
        itemLabel: {
          color: "fg.muted"
        }
      },
      bold: {
        itemLabel: {
          fontWeight: "medium"
        },
        itemValue: {
          color: "fg.muted"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    orientation: "vertical",
    variant: "subtle"
  }
}), eo = Ee({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  boxSize: "var(--datepicker-nav-trigger-size)",
  borderRadius: "l2",
  color: "fg",
  focusVisibleRing: "inside",
  focusRingWidth: "2px",
  _hover: {
    bg: "colorPalette.subtle"
  },
  _focusVisible: {
    boxShadow: "0 0 0 2px var(--colors-color-palette-focus-ring)"
  },
  _disabled: {
    opacity: 0.5
  },
  _icon: {
    boxSize: "4"
  }
}), Mc = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, to = Ee({
  height: "var(--datepicker-select-height)",
  ps: "2",
  pe: "8",
  textStyle: "sm",
  borderWidth: "1px",
  borderRadius: "l2",
  outline: "none",
  focusVisibleRing: "inside",
  appearance: "none",
  fieldSizing: "content",
  backgroundImage: Mc,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right 0.375rem center",
  backgroundSize: "1.25em"
}), Vc = A({
  className: "date-picker",
  slots: Xl.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full",
      "--datepicker-indicators-offset": "sizes.3",
      _disabled: {
        opacity: 0.5
      }
    },
    label: {
      textStyle: "sm",
      fontWeight: "medium"
    },
    indicatorGroup: {
      position: "absolute",
      insetEnd: "var(--datepicker-indicators-offset)",
      top: "50%",
      transform: "translateY(-50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1"
    },
    control: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      width: "full",
      position: "relative"
    },
    input: {
      flex: "1",
      minWidth: "0",
      height: "var(--datepicker-input-height)",
      "--input-height": "var(--datepicker-input-height)",
      px: "var(--datepicker-input-px)",
      textStyle: "sm",
      bg: "transparent",
      borderRadius: "l2",
      outline: "0",
      appearance: "none",
      color: "fg",
      "--focus-color": "colors.colorPalette.focusRing",
      "--error-color": "colors.border.error",
      _placeholder: {
        color: "fg.muted"
      },
      _invalid: {
        focusRingColor: "var(--error-color)",
        borderColor: "var(--error-color)"
      }
    },
    trigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "6",
      height: "6",
      borderRadius: "l1",
      color: "fg.muted",
      outline: "none",
      _hover: {
        color: "fg"
      },
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      _icon: {
        boxSize: "4"
      }
    },
    content: {
      display: "flex",
      flexDirection: "column",
      gap: "3",
      p: "3",
      minW: "18rem",
      bg: "bg.panel",
      borderRadius: "l2",
      boxShadow: "lg",
      color: "fg",
      maxHeight: "var(--available-height)",
      "--date-picker-z-index": "zIndex.popover",
      zIndex: "calc(var(--date-picker-z-index) + var(--layer-index, 0))",
      outline: "none",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster"
      }
    },
    view: {
      display: "flex",
      flexDirection: "column",
      gap: "3"
    },
    viewControl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "2",
      height: "var(--datepicker-nav-trigger-size)"
    },
    viewTrigger: {
      display: "inline-flex",
      flex: "1",
      alignItems: "center",
      justifyContent: "center",
      gap: "1",
      py: "1.5",
      px: "2",
      textStyle: "sm",
      fontWeight: "semibold",
      borderRadius: "l2",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      _hover: {
        bg: "colorPalette.subtle"
      }
    },
    prevTrigger: eo,
    nextTrigger: eo,
    rangeText: {
      textStyle: "sm",
      fontWeight: "semibold"
    },
    table: {
      borderCollapse: "separate",
      borderSpacing: "0"
    },
    tableHeader: {
      width: "var(--table-cell-size)",
      py: "2",
      textStyle: "xs",
      fontWeight: "medium",
      color: "fg.muted",
      textAlign: "center",
      textTransform: "uppercase",
      "&[data-type='week-number']": {
        color: "fg.subtle"
      }
    },
    tableCell: {
      py: "0.5",
      "&[data-type='week-number']": {
        color: "fg.subtle"
      }
    },
    tableCellTrigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minWidth: "var(--table-cell-size)",
      minHeight: "var(--table-cell-size)",
      textStyle: "sm",
      borderRadius: "l2",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      focusRingOffset: "0px",
      cursor: "default",
      position: "relative",
      _hover: {
        bg: "colorPalette.subtle"
      },
      "[data-view=month] &, [data-view=year] &": {
        width: "calc(var(--table-cell-size) * 1.75)"
      },
      _today: {
        color: "colorPalette.fg",
        fontWeight: "semibold",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        textDecorationThickness: "2px"
      },
      _selected: {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        _hover: {
          bg: "colorPalette.solid"
        }
      },
      "&[data-in-range]": {
        bg: "colorPalette.subtle",
        color: "colorPalette.fg",
        borderRadius: "0",
        _hover: {
          bg: "colorPalette.subtle"
        }
      },
      "&[data-range-start]": {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderRadius: "0",
        borderStartRadius: "l2",
        _hover: { bg: "colorPalette.solid" }
      },
      "&[data-range-end]": {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderRadius: "0",
        borderEndRadius: "l2",
        _hover: { bg: "colorPalette.solid" }
      },
      "&[data-range-start][data-range-end]": {
        borderRadius: "l2"
      },
      "&[data-selected][data-in-range]": {
        bg: "colorPalette.solid",
        color: "colorPalette.contrast",
        borderRadius: "l2",
        _hover: { bg: "colorPalette.solid" }
      },
      _disabled: {
        opacity: 0.4
      }
    },
    monthSelect: to,
    yearSelect: to,
    clearTrigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "6",
      height: "6",
      flexShrink: 0,
      textStyle: "xs",
      borderRadius: "l2",
      color: "fg.muted",
      _hover: {
        color: "fg"
      },
      focusVisibleRing: "inside",
      _icon: {
        width: "4",
        height: "4"
      }
    }
  },
  variants: {
    size: {
      xs: {
        root: {
          "--datepicker-input-height": "sizes.8",
          "--datepicker-input-px": "sizes.2",
          "--datepicker-indicators-offset": "sizes.2"
        },
        view: {
          "--table-cell-size": "sizes.8",
          "--datepicker-nav-trigger-size": "sizes.7",
          "--datepicker-select-height": "sizes.8"
        }
      },
      sm: {
        root: {
          "--datepicker-input-height": "sizes.9",
          "--datepicker-input-px": "sizes.2.5",
          "--datepicker-indicators-offset": "sizes.2.5"
        },
        view: {
          "--table-cell-size": "sizes.9",
          "--datepicker-nav-trigger-size": "sizes.8",
          "--datepicker-select-height": "sizes.9"
        }
      },
      md: {
        root: {
          "--datepicker-input-height": "sizes.10",
          "--datepicker-input-px": "sizes.3"
        },
        view: {
          "--table-cell-size": "sizes.10",
          "--datepicker-nav-trigger-size": "sizes.8",
          "--datepicker-select-height": "sizes.10"
        }
      },
      lg: {
        root: {
          "--datepicker-input-height": "sizes.11",
          "--datepicker-input-px": "sizes.4"
        },
        view: {
          "--table-cell-size": "sizes.10",
          "--datepicker-nav-trigger-size": "sizes.9",
          "--datepicker-select-height": "sizes.10"
        }
      },
      xl: {
        root: {
          "--datepicker-input-height": "sizes.12",
          "--datepicker-input-px": "sizes.4.5"
        },
        view: {
          "--table-cell-size": "sizes.10",
          "--datepicker-nav-trigger-size": "sizes.9",
          "--datepicker-select-height": "sizes.10"
        }
      }
    },
    hideOutsideDays: {
      true: {
        tableCellTrigger: {
          "&[data-outside-range]": {
            visibility: "hidden"
          }
        }
      }
    },
    variant: {
      outline: {
        input: {
          bg: "transparent",
          borderWidth: "1px",
          borderColor: "border",
          focusVisibleRing: "inside",
          focusRingColor: "var(--focus-color)"
        }
      },
      subtle: {
        input: {
          borderWidth: "1px",
          borderColor: "transparent",
          bg: "bg.muted",
          focusVisibleRing: "inside",
          focusRingColor: "var(--focus-color)"
        }
      },
      flushed: {
        input: {
          bg: "transparent",
          borderBottomWidth: "1px",
          borderBottomColor: "border",
          borderRadius: "0",
          px: "0",
          _focusVisible: {
            borderColor: "var(--focus-color)",
            boxShadow: "0px 1px 0px 0px var(--focus-color)",
            _invalid: {
              borderColor: "var(--error-color)",
              boxShadow: "0px 1px 0px 0px var(--error-color)"
            }
          }
        },
        indicatorGroup: {
          insetEnd: "0"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), Lc = A({
  slots: Kl.keys(),
  className: "chakra-dialog",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      left: 0,
      top: 0,
      w: "100dvw",
      h: "100dvh",
      zIndex: "var(--z-index)",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow"
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate"
      }
    },
    positioner: {
      display: "flex",
      width: "100dvw",
      height: "100dvh",
      position: "fixed",
      left: 0,
      top: 0,
      "--dialog-z-index": "zIndex.popover",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      justifyContent: "center",
      overscrollBehaviorY: "none"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      borderRadius: "l3",
      textStyle: "sm",
      my: "var(--dialog-margin, var(--dialog-base-margin))",
      "--dialog-z-index": "zIndex.popover",
      zIndex: "calc(var(--dialog-z-index) + var(--layer-index, 0))",
      bg: "bg.panel",
      boxShadow: "lg",
      _open: {
        animationDuration: "moderate"
      },
      _closed: {
        animationDuration: "faster"
      }
    },
    header: {
      display: "flex",
      gap: "2",
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4"
    },
    body: {
      flex: "1",
      px: "6",
      pt: "2",
      pb: "6"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4"
    },
    title: {
      textStyle: "lg",
      fontWeight: "semibold"
    },
    description: {
      color: "fg.muted"
    },
    closeTrigger: {
      pos: "absolute",
      top: "2",
      insetEnd: "2"
    }
  },
  variants: {
    placement: {
      center: {
        positioner: {
          alignItems: "center"
        },
        content: {
          "--dialog-base-margin": "auto",
          mx: "auto"
        }
      },
      top: {
        positioner: {
          alignItems: "flex-start"
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto"
        }
      },
      bottom: {
        positioner: {
          alignItems: "flex-end"
        },
        content: {
          "--dialog-base-margin": "spacing.16",
          mx: "auto"
        }
      }
    },
    scrollBehavior: {
      inside: {
        positioner: {
          overflow: "hidden"
        },
        content: {
          maxH: "calc(100% - 7.5rem)"
        },
        body: {
          overflow: "auto"
        }
      },
      outside: {
        positioner: {
          overflow: "auto",
          pointerEvents: "auto"
        }
      }
    },
    size: {
      xs: {
        content: {
          maxW: "sm"
        }
      },
      sm: {
        content: {
          maxW: "md"
        }
      },
      md: {
        content: {
          maxW: "lg"
        }
      },
      lg: {
        content: {
          maxW: "2xl"
        }
      },
      xl: {
        content: {
          maxW: "4xl"
        }
      },
      cover: {
        positioner: {
          padding: "10"
        },
        content: {
          width: "100%",
          height: "100%",
          "--dialog-margin": "0"
        }
      },
      full: {
        content: {
          maxW: "100dvw",
          minH: "100dvh",
          "--dialog-margin": "0",
          borderRadius: "0"
        }
      }
    },
    motionPreset: {
      scale: {
        content: {
          _open: { animationName: "scale-in, fade-in" },
          _closed: { animationName: "scale-out, fade-out" }
        }
      },
      "slide-in-bottom": {
        content: {
          _open: { animationName: "slide-from-bottom, fade-in" },
          _closed: { animationName: "slide-to-bottom, fade-out" }
        }
      },
      "slide-in-top": {
        content: {
          _open: { animationName: "slide-from-top, fade-in" },
          _closed: { animationName: "slide-to-top, fade-out" }
        }
      },
      "slide-in-left": {
        content: {
          _open: { animationName: "slide-from-left, fade-in" },
          _closed: { animationName: "slide-to-left, fade-out" }
        }
      },
      "slide-in-right": {
        content: {
          _open: { animationName: "slide-from-right, fade-in" },
          _closed: { animationName: "slide-to-right, fade-out" }
        }
      },
      none: {}
    }
  },
  defaultVariants: {
    size: "md",
    scrollBehavior: "outside",
    placement: "top",
    motionPreset: "scale"
  }
}), Fc = A({
  slots: Jl.keys(),
  className: "chakra-drawer",
  base: {
    backdrop: {
      bg: "blackAlpha.500",
      pos: "fixed",
      insetInlineStart: 0,
      top: 0,
      w: "100vw",
      h: "100dvh",
      zIndex: "var(--z-index)",
      _open: {
        animationName: "fade-in",
        animationDuration: "slow"
      },
      _closed: {
        animationName: "fade-out",
        animationDuration: "moderate"
      }
    },
    positioner: {
      display: "flex",
      width: "100vw",
      height: "100dvh",
      position: "fixed",
      insetInlineStart: 0,
      top: 0,
      "--drawer-z-index": "zIndex.popover",
      zIndex: "calc(var(--drawer-z-index) + var(--layer-index, 0))",
      overscrollBehaviorY: "none"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      "--drawer-z-index": "zIndex.popover",
      zIndex: "calc(var(--drawer-z-index) + var(--layer-index, 0))",
      textStyle: "sm",
      maxH: "100dvh",
      color: "inherit",
      bg: "bg.panel",
      boxShadow: "lg",
      _open: {
        animationDuration: "slowest",
        animationTimingFunction: "ease-in-smooth"
      },
      _closed: {
        animationDuration: "slower",
        animationTimingFunction: "ease-in-smooth"
      }
    },
    header: {
      display: "flex",
      alignItems: "center",
      gap: "2",
      flex: 0,
      px: "6",
      pt: "6",
      pb: "4"
    },
    body: {
      px: "6",
      py: "2",
      flex: "1",
      overflow: "auto"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "3",
      px: "6",
      pt: "2",
      pb: "4"
    },
    title: {
      flex: "1",
      textStyle: "lg",
      fontWeight: "semibold"
    },
    description: {
      color: "fg.muted"
    },
    closeTrigger: {
      pos: "absolute",
      top: "3",
      insetEnd: "2"
    }
  },
  variants: {
    size: {
      xs: {
        content: {
          maxW: "xs"
        }
      },
      sm: {
        content: {
          maxW: "md"
        }
      },
      md: {
        content: {
          maxW: "lg"
        }
      },
      lg: {
        content: {
          maxW: "2xl"
        }
      },
      xl: {
        content: {
          maxW: "4xl"
        }
      },
      full: {
        content: {
          maxW: "100vw",
          h: "100dvh"
        }
      }
    },
    placement: {
      start: {
        positioner: {
          justifyContent: "flex-start",
          alignItems: "stretch"
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-left-full, fade-in",
              _rtl: "slide-from-right-full, fade-in"
            }
          },
          _closed: {
            animationName: {
              base: "slide-to-left-full, fade-out",
              _rtl: "slide-to-right-full, fade-out"
            }
          }
        }
      },
      end: {
        positioner: {
          justifyContent: "flex-end",
          alignItems: "stretch"
        },
        content: {
          _open: {
            animationName: {
              base: "slide-from-right-full, fade-in",
              _rtl: "slide-from-left-full, fade-in"
            }
          },
          _closed: {
            animationName: {
              base: "slide-to-right-full, fade-out",
              _rtl: "slide-to-left-full, fade-out"
            }
          }
        }
      },
      top: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-start"
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-top-full, fade-in" },
          _closed: { animationName: "slide-to-top-full, fade-out" }
        }
      },
      bottom: {
        positioner: {
          justifyContent: "stretch",
          alignItems: "flex-end"
        },
        content: {
          maxW: "100%",
          _open: { animationName: "slide-from-bottom-full, fade-in" },
          _closed: { animationName: "slide-to-bottom-full, fade-out" }
        }
      }
    },
    contained: {
      true: {
        positioner: {
          padding: "4"
        },
        content: {
          borderRadius: "l3"
        }
      }
    }
  },
  defaultVariants: {
    size: "xs",
    placement: "end"
  }
}), ro = Ee({
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent",
  borderRadius: "l2"
}), Hc = A({
  slots: Ql.keys(),
  className: "chakra-editable",
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      gap: "1.5",
      width: "full"
    },
    preview: {
      ...ro,
      py: "1",
      px: "1",
      display: "inline-flex",
      alignItems: "center",
      transitionProperty: "common",
      transitionDuration: "moderate",
      cursor: "text",
      _hover: {
        bg: "bg.muted"
      },
      _disabled: {
        userSelect: "none"
      }
    },
    input: {
      ...ro,
      outline: "0",
      py: "1",
      px: "1",
      transitionProperty: "common",
      transitionDuration: "normal",
      width: "full",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      _placeholder: { opacity: 0.6 }
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      gap: "1.5"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: "sm"
        },
        preview: { minH: "8" },
        input: { minH: "8" }
      },
      md: {
        root: {
          textStyle: "sm"
        },
        preview: { minH: "9" },
        input: { minH: "9" }
      },
      lg: {
        root: {
          textStyle: "md"
        },
        preview: { minH: "10" },
        input: { minH: "10" }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Gc = A({
  slots: Zl.keys(),
  className: "chakra-empty-state",
  base: {
    root: {
      width: "full"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "fg.subtle",
      _icon: {
        boxSize: "1em"
      }
    },
    title: {
      fontWeight: "semibold"
    },
    description: {
      textStyle: "sm",
      color: "fg.muted"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          px: "4",
          py: "6"
        },
        title: {
          textStyle: "md"
        },
        content: {
          gap: "4"
        },
        indicator: {
          textStyle: "2xl"
        }
      },
      md: {
        root: {
          px: "8",
          py: "12"
        },
        title: {
          textStyle: "lg"
        },
        content: {
          gap: "6"
        },
        indicator: {
          textStyle: "4xl"
        }
      },
      lg: {
        root: {
          px: "12",
          py: "16"
        },
        title: {
          textStyle: "xl"
        },
        content: {
          gap: "8"
        },
        indicator: {
          textStyle: "6xl"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Yc = A({
  className: "chakra-field",
  slots: ec.keys(),
  base: {
    requiredIndicator: {
      color: "fg.error",
      lineHeight: "1"
    },
    root: {
      display: "flex",
      width: "100%",
      position: "relative",
      gap: "1.5"
    },
    label: {
      display: "flex",
      alignItems: "center",
      textAlign: "start",
      textStyle: "sm",
      fontWeight: "medium",
      gap: "1",
      userSelect: "none",
      _disabled: {
        opacity: "0.5"
      }
    },
    errorText: {
      display: "inline-flex",
      alignItems: "center",
      fontWeight: "medium",
      gap: "1",
      color: "fg.error",
      textStyle: "xs"
    },
    helperText: {
      color: "fg.muted",
      textStyle: "xs"
    }
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: "column",
          alignItems: "flex-start"
        }
      },
      horizontal: {
        root: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
        },
        label: {
          flex: "0 0 var(--field-label-width, 80px)"
        }
      }
    }
  },
  defaultVariants: {
    orientation: "vertical"
  }
}), qc = A({
  className: "fieldset",
  slots: tc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "full"
    },
    content: {
      display: "flex",
      flexDirection: "column",
      width: "full"
    },
    legend: {
      color: "fg",
      fontWeight: "medium",
      _disabled: {
        opacity: "0.5"
      }
    },
    helperText: {
      color: "fg.muted",
      textStyle: "sm"
    },
    errorText: {
      display: "inline-flex",
      alignItems: "center",
      color: "fg.error",
      gap: "2",
      fontWeight: "medium",
      textStyle: "sm"
    }
  },
  variants: {
    size: {
      sm: {
        root: { spaceY: "2" },
        content: { gap: "1.5" },
        legend: { textStyle: "sm" }
      },
      md: {
        root: { spaceY: "4" },
        content: { gap: "4" },
        legend: { textStyle: "sm" }
      },
      lg: {
        root: { spaceY: "6" },
        content: { gap: "4" },
        legend: { textStyle: "md" }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Uc = A({
  className: "chakra-file-upload",
  slots: rc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "4",
      width: "100%",
      alignItems: "flex-start"
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm"
    },
    dropzone: {
      background: "bg",
      borderRadius: "l3",
      borderWidth: "2px",
      borderStyle: "dashed",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "4",
      justifyContent: "center",
      minHeight: "2xs",
      px: "3",
      py: "2",
      transition: "backgrounds",
      focusVisibleRing: "outside",
      _hover: {
        bg: "bg.subtle"
      },
      _dragging: {
        bg: "colorPalette.subtle",
        borderStyle: "solid",
        borderColor: "colorPalette.solid"
      }
    },
    dropzoneContent: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "1",
      textStyle: "sm"
    },
    item: {
      pos: "relative",
      textStyle: "sm",
      animationName: "fade-in",
      animationDuration: "moderate",
      background: "bg",
      borderRadius: "l2",
      borderWidth: "1px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "3",
      p: "4"
    },
    itemGroup: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: "3",
      _empty: {
        display: "none"
      }
    },
    itemName: {
      color: "fg",
      fontWeight: "medium",
      lineClamp: "1"
    },
    itemContent: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5",
      flex: "1"
    },
    itemSizeText: {
      color: "fg.muted",
      textStyle: "xs"
    },
    itemDeleteTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "flex-start",
      boxSize: "5",
      p: "2px",
      color: "fg.muted",
      cursor: "button"
    },
    itemPreview: {
      color: "fg.muted",
      _icon: {
        boxSize: "4.5"
      }
    }
  },
  defaultVariants: {}
}), Xc = A({
  className: "chakra-hover-card",
  slots: Fo.keys(),
  base: {
    content: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      textStyle: "sm",
      "--hovercard-bg": "colors.bg.panel",
      bg: "var(--hovercard-bg)",
      boxShadow: "lg",
      maxWidth: "80",
      borderRadius: "l3",
      "--hover-card-z-index": "zIndex.popover",
      zIndex: "calc(var(--hover-card-z-index) + var(--layer-index, 0))",
      transformOrigin: "var(--transform-origin)",
      outline: "0",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster"
      }
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--hovercard-bg)"
    },
    arrowTip: {
      borderTopWidth: "0.5px",
      borderLeftWidth: "0.5px"
    }
  },
  variants: {
    size: {
      xs: {
        content: {
          padding: "3"
        }
      },
      sm: {
        content: {
          padding: "4"
        }
      },
      md: {
        content: {
          padding: "5"
        }
      },
      lg: {
        content: {
          padding: "6"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), Kc = A({
  className: "chakra-list",
  slots: oc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--list-gap)",
      "& :where(ul, ol)": {
        marginTop: "var(--list-gap)"
      }
    },
    item: {
      whiteSpace: "normal",
      display: "list-item"
    },
    indicator: {
      marginEnd: "2",
      minHeight: "1lh",
      flexShrink: 0,
      display: "inline-block",
      verticalAlign: "middle"
    }
  },
  variants: {
    variant: {
      marker: {
        root: {
          listStyle: "revert"
        },
        item: {
          _marker: {
            color: "fg.subtle"
          }
        }
      },
      plain: {
        item: {
          alignItems: "flex-start",
          display: "inline-flex"
        }
      }
    },
    align: {
      center: {
        item: { alignItems: "center" }
      },
      start: {
        item: { alignItems: "flex-start" }
      },
      end: {
        item: { alignItems: "flex-end" }
      }
    }
  },
  defaultVariants: {
    variant: "marker"
  }
}), Jc = A({
  className: "chakra-listbox",
  slots: zc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    content: {
      display: "flex",
      maxH: "96",
      p: "1",
      gap: "1",
      textStyle: "sm",
      outline: "none",
      scrollPadding: "1",
      _horizontal: {
        flexDirection: "row",
        overflowX: "auto"
      },
      _vertical: {
        flexDirection: "column",
        overflowY: "auto"
      },
      "--listbox-item-padding-x": "spacing.2",
      "--listbox-item-padding-y": "spacing.1.5"
    },
    item: {
      position: "relative",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "2",
      cursor: "pointer",
      justifyContent: "space-between",
      flex: "1",
      textAlign: "start",
      borderRadius: "l1",
      py: "var(--listbox-item-padding-y)",
      px: "var(--listbox-item-padding-x)",
      _highlighted: {
        outline: "2px solid",
        outlineColor: "border.emphasized"
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5"
      }
    },
    empty: {
      py: "var(--listbox-item-padding-y)",
      px: "var(--listbox-item-padding-x)"
    },
    itemText: {
      flex: "1"
    },
    itemGroup: {
      mt: "1.5",
      _first: { mt: "0" }
    },
    itemGroupLabel: {
      py: "1.5",
      px: "2",
      fontWeight: "medium"
    },
    label: {
      fontWeight: "medium",
      userSelect: "none",
      textStyle: "sm",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    valueText: {
      lineClamp: "1",
      maxW: "80%"
    },
    itemIndicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      _icon: {
        boxSize: "4"
      }
    }
  },
  variants: {
    variant: {
      subtle: {
        content: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderRadius: "l2"
        },
        item: {
          _hover: {
            bg: "bg.emphasized/60"
          },
          _selected: {
            bg: "bg.muted"
          }
        }
      },
      solid: {
        content: {
          bg: "bg.panel",
          borderWidth: "1px",
          borderRadius: "l2"
        },
        item: {
          _selected: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast"
          }
        }
      },
      plain: {}
    }
  },
  defaultVariants: {
    variant: "subtle"
  }
}), Qc = A({
  className: "chakra-marquee",
  slots: Yo.keys(),
  base: {
    root: {
      position: "relative",
      width: "100%",
      "--marquee-edge-color": "colors.bg",
      "--marquee-edge-size": "20%",
      "&[data-paused]": {
        animationPlayState: "paused !important",
        "& *": {
          animationPlayState: "paused !important"
        }
      }
    },
    viewport: {
      overflow: "hidden",
      display: "flex",
      width: "100%",
      height: "100%"
    },
    content: {
      display: "flex",
      minWidth: "max-content",
      animationTimingFunction: "linear",
      animationFillMode: "forwards",
      animationDuration: "var(--marquee-duration)",
      animationDelay: "var(--marquee-delay)",
      animationIterationCount: "var(--marquee-loop-count)",
      _motionReduce: {
        animation: "none !important"
      },
      "&[data-side='start'], &[data-side='end']": {
        animationName: "marqueeX"
      },
      "&[data-side='top'], &[data-side='bottom']": {
        animationName: "marqueeY"
      },
      "&[data-reverse]": {
        animationDirection: "reverse"
      },
      "&[data-orientation='horizontal']": {
        flexDirection: "row"
      },
      "&[data-orientation='vertical']": {
        flexDirection: "column"
      }
    },
    edge: {
      position: "absolute",
      zIndex: "1",
      pointerEvents: "none",
      "&[data-side='start']": {
        width: "var(--marquee-edge-size)",
        insetY: "0",
        insetInlineStart: "0",
        background: "linear-gradient(to right, var(--marquee-edge-color, white), transparent)",
        _rtl: {
          background: "linear-gradient(to left, var(--marquee-edge-color, white), transparent)"
        }
      },
      "&[data-side='end']": {
        width: "var(--marquee-edge-size)",
        insetY: "0",
        insetInlineEnd: "0",
        background: "linear-gradient(to left, var(--marquee-edge-color, white), transparent)",
        _rtl: {
          background: "linear-gradient(to right, var(--marquee-edge-color, white), transparent)"
        }
      },
      "&[data-side='top']": {
        height: "var(--marquee-edge-size)",
        insetX: "0",
        top: "0",
        background: "linear-gradient(to bottom, var(--marquee-edge-color, white), transparent)"
      },
      "&[data-side='bottom']": {
        height: "var(--marquee-edge-size)",
        insetX: "0",
        bottom: "0",
        background: "linear-gradient(to top, var(--marquee-edge-color, white), transparent)"
      }
    }
  }
}), Zc = A({
  className: "chakra-menu",
  slots: ic.keys(),
  base: {
    content: {
      outline: 0,
      "--menu-bg": "colors.bg.panel",
      bg: "var(--menu-bg)",
      boxShadow: "lg",
      color: "fg",
      maxHeight: "var(--available-height)",
      "--menu-z-index": "zIndex.popover",
      zIndex: "calc(var(--menu-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      overflow: "hidden",
      overflowY: "auto",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "faster"
      }
    },
    item: {
      textDecoration: "none",
      color: "fg",
      userSelect: "none",
      borderRadius: "l1",
      width: "100%",
      display: "flex",
      cursor: "menuitem",
      alignItems: "center",
      textAlign: "start",
      position: "relative",
      flex: "0 0 auto",
      outline: 0,
      _disabled: {
        layerStyle: "disabled"
      },
      "&[data-type]": {
        ps: "8"
      }
    },
    itemText: {
      flex: "1"
    },
    itemIndicator: {
      position: "absolute",
      insetStart: "2",
      transform: "translateY(-50%)",
      top: "50%"
    },
    itemGroupLabel: {
      px: "2",
      py: "1.5",
      fontWeight: "semibold",
      textStyle: "sm"
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0"
    },
    itemCommand: {
      opacity: "0.6",
      textStyle: "xs",
      ms: "auto",
      ps: "4",
      letterSpacing: "widest",
      fontFamily: "inherit"
    },
    separator: {
      height: "1px",
      bg: "bg.muted",
      my: "1",
      mx: "-1"
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--menu-bg)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px"
    }
  },
  variants: {
    variant: {
      subtle: {
        item: {
          _highlighted: {
            bg: "bg.emphasized/60"
          }
        }
      },
      solid: {
        item: {
          _highlighted: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast"
          }
        }
      }
    },
    size: {
      sm: {
        content: {
          minW: "8rem",
          padding: "1",
          scrollPadding: "1"
        },
        item: {
          gap: "1",
          textStyle: "xs",
          py: "1",
          px: "1.5"
        }
      },
      md: {
        content: {
          minW: "8rem",
          padding: "1.5",
          scrollPadding: "1.5"
        },
        item: {
          gap: "2",
          textStyle: "sm",
          py: "1.5",
          px: "2"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "subtle"
  }
}), Je = A({
  className: "chakra-select",
  slots: cc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "full",
      minH: "var(--select-trigger-height)",
      "--input-height": "var(--select-trigger-height)",
      px: "var(--select-trigger-padding-x)",
      borderRadius: "l2",
      userSelect: "none",
      textAlign: "start",
      focusVisibleRing: "inside",
      _placeholderShown: {
        color: "fg.muted/80"
      },
      _disabled: {
        layerStyle: "disabled"
      },
      _invalid: {
        borderColor: "border.error"
      }
    },
    indicatorGroup: {
      display: "flex",
      alignItems: "center",
      gap: "1",
      pos: "absolute",
      insetEnd: "0",
      top: "0",
      bottom: "0",
      px: "var(--select-trigger-padding-x)",
      pointerEvents: "none"
    },
    indicator: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: { base: "fg.muted", _disabled: "fg.subtle", _invalid: "fg.error" }
    },
    content: {
      background: "bg.panel",
      display: "flex",
      flexDirection: "column",
      "--select-z-index": "zIndex.popover",
      zIndex: "calc(var(--select-z-index) + var(--layer-index, 0))",
      borderRadius: "l2",
      outline: 0,
      maxH: "96",
      overflowY: "auto",
      boxShadow: "md",
      _open: {
        animationStyle: "slide-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "slide-fade-out",
        animationDuration: "fastest"
      }
    },
    item: {
      position: "relative",
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: "2",
      cursor: "option",
      justifyContent: "space-between",
      flex: "1",
      textAlign: "start",
      borderRadius: "l1",
      _highlighted: {
        bg: "bg.emphasized/60"
      },
      _disabled: {
        pointerEvents: "none",
        opacity: "0.5"
      },
      _icon: {
        width: "4",
        height: "4"
      }
    },
    control: {
      pos: "relative"
    },
    itemText: {
      flex: "1"
    },
    itemGroup: {
      _first: { mt: "0" }
    },
    itemGroupLabel: {
      py: "1",
      fontWeight: "medium"
    },
    label: {
      fontWeight: "medium",
      userSelect: "none",
      textStyle: "sm",
      _disabled: {
        layerStyle: "disabled"
      }
    },
    valueText: {
      lineClamp: "1",
      maxW: "80%"
    },
    clearTrigger: {
      color: "fg.muted",
      pointerEvents: "auto",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      rounded: "l1"
    }
  },
  variants: {
    variant: {
      outline: {
        trigger: {
          bg: "transparent",
          borderWidth: "1px",
          borderColor: "border",
          _expanded: {
            borderColor: "border.emphasized"
          }
        }
      },
      subtle: {
        trigger: {
          borderWidth: "1px",
          borderColor: "transparent",
          bg: "bg.muted"
        }
      },
      ghost: {
        trigger: {
          bg: "transparent",
          _expanded: {
            bg: "bg.muted"
          }
        }
      }
    },
    size: {
      xs: {
        root: {
          "--select-trigger-height": "sizes.8",
          "--select-trigger-padding-x": "spacing.2"
        },
        content: {
          p: "1",
          gap: "1",
          textStyle: "xs"
        },
        trigger: {
          textStyle: "xs",
          gap: "1"
        },
        item: {
          py: "1",
          px: "2"
        },
        itemGroupLabel: {
          py: "1",
          px: "2"
        },
        indicator: {
          _icon: {
            width: "3.5",
            height: "3.5"
          }
        }
      },
      sm: {
        root: {
          "--select-trigger-height": "sizes.9",
          "--select-trigger-padding-x": "spacing.2.5"
        },
        content: {
          p: "1",
          textStyle: "sm"
        },
        trigger: {
          textStyle: "sm",
          gap: "1"
        },
        indicator: {
          _icon: {
            width: "4",
            height: "4"
          }
        },
        item: {
          py: "1",
          px: "1.5"
        },
        itemGroup: {
          mt: "1"
        },
        itemGroupLabel: {
          py: "1",
          px: "1.5"
        }
      },
      md: {
        root: {
          "--select-trigger-height": "sizes.10",
          "--select-trigger-padding-x": "spacing.3"
        },
        content: {
          p: "1",
          textStyle: "sm"
        },
        itemGroup: {
          mt: "1.5"
        },
        item: {
          py: "1.5",
          px: "2"
        },
        itemIndicator: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        itemGroupLabel: {
          py: "1.5",
          px: "2"
        },
        trigger: {
          textStyle: "sm",
          gap: "2"
        },
        indicator: {
          _icon: {
            width: "4",
            height: "4"
          }
        }
      },
      lg: {
        root: {
          "--select-trigger-height": "sizes.12",
          "--select-trigger-padding-x": "spacing.4"
        },
        content: {
          p: "1.5",
          textStyle: "md"
        },
        itemGroup: {
          mt: "2"
        },
        item: {
          py: "2",
          px: "3"
        },
        itemGroupLabel: {
          py: "2",
          px: "3"
        },
        trigger: {
          textStyle: "md",
          py: "3",
          gap: "2"
        },
        indicator: {
          _icon: {
            width: "5",
            height: "5"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), ed = A({
  className: "chakra-native-select",
  slots: ac.keys(),
  base: {
    root: {
      height: "fit-content",
      display: "flex",
      width: "100%",
      position: "relative"
    },
    field: {
      width: "100%",
      minWidth: "0",
      outline: "0",
      appearance: "none",
      borderRadius: "l2",
      "--error-color": "colors.border.error",
      "--input-height": "var(--select-field-height)",
      height: "var(--select-field-height)",
      _disabled: {
        layerStyle: "disabled"
      },
      _invalid: {
        focusRingColor: "var(--error-color)",
        borderColor: "var(--error-color)"
      },
      focusVisibleRing: "inside",
      lineHeight: "normal",
      "& > option, & > optgroup": {
        bg: "bg"
      }
    },
    indicator: {
      position: "absolute",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      pointerEvents: "none",
      top: "50%",
      transform: "translateY(-50%)",
      height: "100%",
      color: "fg.muted",
      _disabled: {
        opacity: "0.5"
      },
      _invalid: {
        color: "fg.error"
      },
      _icon: {
        width: "1em",
        height: "1em"
      }
    }
  },
  variants: {
    variant: {
      outline: {
        field: Je.variants?.variant.outline.trigger
      },
      subtle: {
        field: Je.variants?.variant.subtle.trigger
      },
      plain: {
        field: {
          bg: "transparent",
          color: "fg",
          focusRingWidth: "2px"
        }
      },
      ghost: {
        field: Je.variants?.variant.ghost.trigger
      }
    },
    size: {
      xs: {
        root: {
          "--select-field-height": "sizes.8"
        },
        field: {
          textStyle: "xs",
          ps: "2",
          pe: "6"
        },
        indicator: {
          textStyle: "sm",
          insetEnd: "1.5"
        }
      },
      sm: {
        root: {
          "--select-field-height": "sizes.9"
        },
        field: {
          textStyle: "sm",
          ps: "2.5",
          pe: "8"
        },
        indicator: {
          textStyle: "md",
          insetEnd: "2"
        }
      },
      md: {
        root: {
          "--select-field-height": "sizes.10"
        },
        field: {
          textStyle: "sm",
          ps: "3",
          pe: "8"
        },
        indicator: {
          textStyle: "lg",
          insetEnd: "2"
        }
      },
      lg: {
        root: {
          "--select-field-height": "sizes.11"
        },
        field: {
          textStyle: "md",
          ps: "4",
          pe: "8"
        },
        indicator: {
          textStyle: "xl",
          insetEnd: "3"
        }
      },
      xl: {
        root: {
          "--select-field-height": "sizes.12"
        },
        field: {
          textStyle: "md",
          ps: "4.5",
          pe: "10"
        },
        indicator: {
          textStyle: "xl",
          insetEnd: "3"
        }
      }
    }
  },
  defaultVariants: Je.defaultVariants
}), oo = Ee({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: "1",
  userSelect: "none",
  cursor: "button",
  lineHeight: "1",
  color: "fg.muted",
  "--stepper-base-radius": "radii.l1",
  "--stepper-radius": "calc(var(--stepper-base-radius) + 1px)",
  _icon: {
    boxSize: "1em"
  },
  _disabled: {
    opacity: "0.5"
  },
  _hover: {
    bg: "bg.muted"
  },
  _active: {
    bg: "bg.emphasized"
  }
}), td = A({
  className: "chakra-number-input",
  slots: Uo.keys(),
  base: {
    root: {
      position: "relative",
      zIndex: "0",
      isolation: "isolate"
    },
    input: {
      ...ne.base,
      verticalAlign: "top",
      pe: "calc(var(--stepper-width) + 0.5rem)"
    },
    control: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: "0",
      insetEnd: "0px",
      margin: "1px",
      width: "var(--stepper-width)",
      height: "calc(100% - 2px)",
      zIndex: "1",
      borderStartWidth: "1px",
      divideY: "1px"
    },
    incrementTrigger: {
      ...oo,
      borderTopEndRadius: "var(--stepper-radius)"
    },
    decrementTrigger: {
      ...oo,
      borderBottomEndRadius: "var(--stepper-radius)"
    },
    valueText: {
      fontWeight: "medium",
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums"
    }
  },
  variants: {
    size: {
      xs: {
        input: ne.variants.size.xs,
        control: {
          fontSize: "2xs",
          "--stepper-width": "sizes.4"
        }
      },
      sm: {
        input: ne.variants.size.sm,
        control: {
          fontSize: "xs",
          "--stepper-width": "sizes.5"
        }
      },
      md: {
        input: ne.variants.size.md,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6"
        }
      },
      lg: {
        input: ne.variants.size.lg,
        control: {
          fontSize: "sm",
          "--stepper-width": "sizes.6"
        }
      }
    },
    variant: ke(ne.variants.variant, (e, t) => [
      e,
      { input: t }
    ])
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), { variants: io, defaultVariants: rd } = ne, od = A({
  className: "chakra-pin-input",
  slots: Xo.keys(),
  base: {
    input: {
      ...ne.base,
      textAlign: "center",
      width: "var(--input-height)"
    },
    control: {
      display: "inline-flex",
      gap: "2",
      isolation: "isolate"
    }
  },
  variants: {
    size: ke(io.size, (e, t) => [
      e,
      { input: { ...t, px: "1" } }
    ]),
    variant: ke(io.variant, (e, t) => [
      e,
      { input: t }
    ]),
    attached: {
      true: {
        control: {
          gap: "0",
          spaceX: "-1px"
        },
        input: {
          _notFirst: { borderStartRadius: "0" },
          _notLast: { borderEndRadius: "0" },
          _focusVisible: { zIndex: "1" }
        }
      }
    }
  },
  defaultVariants: rd
}), id = A({
  className: "chakra-popover",
  slots: nc.keys(),
  base: {
    content: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      textStyle: "sm",
      "--popover-bg": "colors.bg.panel",
      bg: "var(--popover-bg)",
      boxShadow: "lg",
      "--popover-size": "sizes.xs",
      "--popover-mobile-size": "calc(100dvw - 1rem)",
      width: {
        base: "min(var(--popover-mobile-size), var(--popover-size))",
        sm: "var(--popover-size)"
      },
      borderRadius: "l3",
      "--popover-z-index": "zIndex.popover",
      zIndex: "calc(var(--popover-z-index) + var(--layer-index, 0))",
      outline: "0",
      transformOrigin: "var(--transform-origin)",
      maxHeight: "var(--available-height)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "faster"
      }
    },
    header: {
      paddingInline: "var(--popover-padding)",
      paddingTop: "var(--popover-padding)"
    },
    body: {
      padding: "var(--popover-padding)",
      flex: "1"
    },
    footer: {
      display: "flex",
      alignItems: "center",
      paddingInline: "var(--popover-padding)",
      paddingBottom: "var(--popover-padding)"
    },
    arrow: {
      "--arrow-size": "sizes.3",
      "--arrow-background": "var(--popover-bg)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px"
    }
  },
  variants: {
    size: {
      xs: {
        content: {
          "--popover-padding": "spacing.3"
        }
      },
      sm: {
        content: {
          "--popover-padding": "spacing.4"
        }
      },
      md: {
        content: {
          "--popover-padding": "spacing.5"
        }
      },
      lg: {
        content: {
          "--popover-padding": "spacing.6"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), ad = A({
  slots: sr.keys(),
  className: "chakra-progress",
  base: {
    root: {
      textStyle: "sm",
      position: "relative"
    },
    track: {
      overflow: "hidden",
      position: "relative"
    },
    range: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transitionProperty: "width, height",
      transitionDuration: "slow",
      height: "100%",
      bgColor: "var(--track-color)",
      _indeterminate: {
        "--animate-from-x": "-40%",
        "--animate-to-x": "100%",
        position: "absolute",
        willChange: "left",
        minWidth: "50%",
        animation: "position 1s ease infinite normal none running",
        backgroundImage: "linear-gradient(to right, transparent 0%, var(--track-color) 50%, transparent 100%)"
      }
    },
    label: {
      display: "inline-flex",
      fontWeight: "medium",
      alignItems: "center",
      gap: "1"
    },
    valueText: {
      textStyle: "xs",
      lineHeight: "1",
      fontWeight: "medium"
    }
  },
  variants: {
    variant: {
      outline: {
        track: {
          shadow: "inset",
          bgColor: "bg.muted"
        },
        range: {
          bgColor: "colorPalette.solid"
        }
      },
      subtle: {
        track: {
          bgColor: "colorPalette.muted"
        },
        range: {
          bgColor: "colorPalette.solid/72"
        }
      }
    },
    shape: {
      square: {},
      rounded: {
        track: {
          borderRadius: "l1"
        }
      },
      full: {
        track: {
          borderRadius: "full"
        }
      }
    },
    striped: {
      true: {
        range: {
          backgroundImage: "linear-gradient(45deg, var(--stripe-color) 25%, transparent 25%, transparent 50%, var(--stripe-color) 50%, var(--stripe-color) 75%, transparent 75%, transparent)",
          backgroundSize: "var(--stripe-size) var(--stripe-size)",
          "--stripe-size": "1rem",
          "--stripe-color": {
            _light: "rgba(255, 255, 255, 0.3)",
            _dark: "rgba(0, 0, 0, 0.3)"
          }
        }
      }
    },
    animated: {
      true: {
        range: {
          "--animate-from": "var(--stripe-size)",
          animation: "bg-position 1s linear infinite"
        }
      }
    },
    size: {
      xs: {
        track: { h: "1.5" }
      },
      sm: {
        track: { h: "2" }
      },
      md: {
        track: { h: "2.5" }
      },
      lg: {
        track: { h: "3" }
      },
      xl: {
        track: { h: "4" }
      }
    }
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
    shape: "rounded"
  }
}), nd = A({
  className: "chakra-progress-circle",
  slots: sr.keys(),
  base: {
    root: {
      display: "inline-flex",
      textStyle: "sm",
      position: "relative"
    },
    circle: {
      _indeterminate: {
        animation: "spin 2s linear infinite"
      }
    },
    circleTrack: {
      "--track-color": "colors.colorPalette.muted",
      stroke: "var(--track-color)"
    },
    circleRange: {
      stroke: "colorPalette.solid",
      transitionProperty: "stroke-dashoffset, stroke-dasharray",
      transitionDuration: "0.6s",
      _indeterminate: {
        animation: "circular-progress 1.5s linear infinite"
      }
    },
    label: {
      display: "inline-flex"
    },
    valueText: {
      lineHeight: "1",
      fontWeight: "medium",
      letterSpacing: "tight",
      fontVariantNumeric: "tabular-nums"
    }
  },
  variants: {
    size: {
      xs: {
        circle: {
          "--size": "24px",
          "--thickness": "4px"
        },
        valueText: {
          textStyle: "2xs"
        }
      },
      sm: {
        circle: {
          "--size": "32px",
          "--thickness": "5px"
        },
        valueText: {
          textStyle: "2xs"
        }
      },
      md: {
        circle: {
          "--size": "40px",
          "--thickness": "6px"
        },
        valueText: {
          textStyle: "xs"
        }
      },
      lg: {
        circle: {
          "--size": "48px",
          "--thickness": "7px"
        },
        valueText: {
          textStyle: "sm"
        }
      },
      xl: {
        circle: {
          "--size": "64px",
          "--thickness": "8px"
        },
        valueText: {
          textStyle: "sm"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), sd = A({
  slots: Jo.keys(),
  className: "chakra-qr-code",
  base: {
    root: {
      position: "relative",
      width: "fit-content",
      "--qr-code-overlay-size": "calc(var(--qr-code-size) / 3)"
    },
    frame: {
      width: "var(--qr-code-size)",
      height: "var(--qr-code-size)",
      fill: "currentColor"
    },
    overlay: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--qr-code-overlay-size)",
      height: "var(--qr-code-overlay-size)",
      padding: "1",
      bg: "bg",
      rounded: "l1"
    }
  },
  variants: {
    size: {
      "2xs": {
        root: { "--qr-code-size": "40px" }
      },
      xs: {
        root: { "--qr-code-size": "64px" }
      },
      sm: {
        root: { "--qr-code-size": "80px" }
      },
      md: {
        root: { "--qr-code-size": "120px" }
      },
      lg: {
        root: { "--qr-code-size": "160px" }
      },
      xl: {
        root: { "--qr-code-size": "200px" }
      },
      "2xl": {
        root: { "--qr-code-size": "240px" }
      },
      full: {
        root: { "--qr-code-size": "100%" }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), ld = A({
  className: "chakra-radio-card",
  slots: sc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      isolation: "isolate"
    },
    item: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      position: "relative",
      borderRadius: "l2",
      _focus: {
        bg: "colorPalette.muted/20"
      },
      _disabled: {
        opacity: "0.5"
      },
      _checked: {
        zIndex: "1"
      }
    },
    label: {
      display: "inline-flex",
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    },
    itemText: {
      fontWeight: "medium",
      flex: "1"
    },
    itemDescription: {
      opacity: "0.64",
      textStyle: "sm"
    },
    itemControl: {
      display: "inline-flex",
      flex: "1",
      pos: "relative",
      rounded: "inherit",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)",
      _disabled: {
        bg: "bg.muted"
      }
    },
    itemIndicator: fe.base,
    itemAddon: {
      roundedBottom: "inherit",
      _disabled: {
        color: "fg.muted"
      }
    },
    itemContent: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "1",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)"
    }
  },
  variants: {
    size: {
      sm: {
        item: {
          textStyle: "sm"
        },
        itemControl: {
          padding: "3",
          gap: "1.5"
        },
        itemAddon: {
          px: "3",
          py: "1.5",
          borderTopWidth: "1px"
        },
        itemIndicator: fe.variants?.size.sm
      },
      md: {
        item: {
          textStyle: "sm"
        },
        itemControl: {
          padding: "4",
          gap: "2.5"
        },
        itemAddon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px"
        },
        itemIndicator: fe.variants?.size.md
      },
      lg: {
        item: {
          textStyle: "md"
        },
        itemControl: {
          padding: "4",
          gap: "3.5"
        },
        itemAddon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px"
        },
        itemIndicator: fe.variants?.size.lg
      }
    },
    variant: {
      surface: {
        item: {
          borderWidth: "1px",
          _checked: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
            borderColor: "colorPalette.muted"
          }
        },
        itemIndicator: fe.variants?.variant.solid
      },
      subtle: {
        item: {
          bg: "bg.muted"
        },
        itemControl: {
          _checked: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg"
          }
        },
        itemIndicator: fe.variants?.variant.outline
      },
      outline: {
        item: {
          borderWidth: "1px",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid",
            borderColor: "colorPalette.solid"
          }
        },
        itemIndicator: fe.variants?.variant.solid
      },
      solid: {
        item: {
          borderWidth: "1px",
          _checked: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
            borderColor: "colorPalette.solid"
          }
        },
        itemControl: {
          _disabled: {
            bg: "unset"
          }
        },
        itemIndicator: fe.variants?.variant.inverted
      }
    },
    justify: {
      start: {
        item: { "--radio-card-justify": "flex-start" }
      },
      end: {
        item: { "--radio-card-justify": "flex-end" }
      },
      center: {
        item: { "--radio-card-justify": "center" }
      }
    },
    align: {
      start: {
        item: { "--radio-card-align": "flex-start" },
        itemControl: { textAlign: "start" }
      },
      end: {
        item: { "--radio-card-align": "flex-end" },
        itemControl: { textAlign: "end" }
      },
      center: {
        item: { "--radio-card-align": "center" },
        itemControl: { textAlign: "center" }
      }
    },
    orientation: {
      vertical: {
        itemControl: { flexDirection: "column" }
      },
      horizontal: {
        itemControl: { flexDirection: "row" }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
    align: "start",
    orientation: "horizontal"
  }
}), cd = A({
  className: "chakra-radio-group",
  slots: ji.keys(),
  base: {
    item: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      fontWeight: "medium",
      _disabled: {
        cursor: "disabled"
      }
    },
    itemControl: fe.base,
    label: {
      userSelect: "none",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    }
  },
  variants: {
    variant: {
      outline: {
        itemControl: fe.variants?.variant?.outline
      },
      subtle: {
        itemControl: fe.variants?.variant?.subtle
      },
      solid: {
        itemControl: fe.variants?.variant?.solid
      }
    },
    size: {
      xs: {
        item: { textStyle: "xs", gap: "1.5" },
        itemControl: fe.variants?.size?.xs
      },
      sm: {
        item: { textStyle: "sm", gap: "2" },
        itemControl: fe.variants?.size?.sm
      },
      md: {
        item: { textStyle: "sm", gap: "2.5" },
        itemControl: fe.variants?.size?.md
      },
      lg: {
        item: { textStyle: "md", gap: "3" },
        itemControl: fe.variants?.size?.lg
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid"
  }
}), dd = A({
  className: "chakra-rating-group",
  slots: lc.keys(),
  base: {
    root: {
      display: "inline-flex"
    },
    control: {
      display: "inline-flex",
      alignItems: "center"
    },
    item: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none"
    },
    itemIndicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "1em",
      height: "1em",
      position: "relative",
      "--clip-path": { base: "inset(0 50% 0 0)", _rtl: "inset(0 0 0 50%)" },
      _icon: {
        stroke: "currentColor",
        width: "100%",
        height: "100%",
        display: "inline-block",
        flexShrink: 0,
        position: "absolute",
        left: 0,
        top: 0
      },
      "& [data-bg]": {
        color: "bg.emphasized"
      },
      "& [data-fg]": {
        color: "transparent"
      },
      "&[data-highlighted]:not([data-half])": {
        "& [data-fg]": {
          color: "colorPalette.solid"
        }
      },
      "&[data-half]": {
        "& [data-fg]": {
          color: "colorPalette.solid",
          clipPath: "var(--clip-path)"
        }
      }
    }
  },
  variants: {
    size: {
      xs: {
        item: {
          textStyle: "sm"
        }
      },
      sm: {
        item: {
          textStyle: "md"
        }
      },
      md: {
        item: {
          textStyle: "xl"
        }
      },
      lg: {
        item: {
          textStyle: "2xl"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), ud = A({
  className: "chakra-scroll-area",
  slots: Zo.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      "--scrollbar-margin": "2px",
      "--scrollbar-click-area": "calc(var(--scrollbar-size) + calc(var(--scrollbar-margin) * 2))"
    },
    viewport: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100%",
      borderRadius: "inherit",
      WebkitOverflowScrolling: "touch",
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    },
    content: {
      minWidth: "100%"
    },
    scrollbar: {
      display: "flex",
      userSelect: "none",
      touchAction: "none",
      borderRadius: "full",
      colorPalette: "gray",
      transition: "opacity 150ms 300ms",
      position: "relative",
      margin: "var(--scrollbar-margin)",
      "&:not([data-overflow-x], [data-overflow-y])": {
        display: "none"
      },
      bg: "{colors.colorPalette.solid/10}",
      "--thumb-bg": "{colors.colorPalette.solid/25}",
      "&:is(:hover, :active)": {
        "--thumb-bg": "{colors.colorPalette.solid/50}"
      },
      _before: {
        content: '""',
        position: "absolute"
      },
      _vertical: {
        width: "var(--scrollbar-size)",
        flexDirection: "column",
        "&::before": {
          width: "var(--scrollbar-click-area)",
          height: "100%",
          insetInlineStart: "calc(var(--scrollbar-margin) * -1)"
        }
      },
      _horizontal: {
        height: "var(--scrollbar-size)",
        flexDirection: "row",
        "&::before": {
          height: "var(--scrollbar-click-area)",
          width: "100%",
          top: "calc(var(--scrollbar-margin) * -1)"
        }
      }
    },
    thumb: {
      borderRadius: "inherit",
      bg: "var(--thumb-bg)",
      transition: "backgrounds",
      _vertical: { width: "full" },
      _horizontal: { height: "full" }
    },
    corner: {
      bg: "bg.muted",
      margin: "var(--scrollbar-margin)",
      opacity: 0,
      transition: "opacity 150ms 300ms",
      "&[data-hover]": {
        transitionDelay: "0ms",
        opacity: 1
      }
    }
  },
  variants: {
    variant: {
      hover: {
        scrollbar: {
          opacity: "0",
          "&[data-hover], &[data-scrolling]": {
            opacity: "1",
            transitionDuration: "faster",
            transitionDelay: "0ms"
          }
        }
      },
      always: {
        scrollbar: {
          opacity: "1"
        }
      }
    },
    size: {
      xs: {
        root: {
          "--scrollbar-size": "sizes.1"
        }
      },
      sm: {
        root: {
          "--scrollbar-size": "sizes.1.5"
        }
      },
      md: {
        root: {
          "--scrollbar-size": "sizes.2"
        }
      },
      lg: {
        root: {
          "--scrollbar-size": "sizes.3"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "hover"
  }
}), pd = A({
  className: "chakra-segment-group",
  slots: ei.keys(),
  base: {
    root: {
      "--segment-radius": "radii.l2",
      "--segment-indicator-bg": {
        _light: "colors.bg",
        _dark: "colors.bg.emphasized"
      },
      "--segment-indicator-shadow": "shadows.sm",
      borderRadius: "var(--segment-radius)",
      display: "inline-flex",
      boxShadow: "inset",
      minW: "max-content",
      textAlign: "center",
      position: "relative",
      isolation: "isolate",
      bg: "bg.muted",
      _vertical: {
        flexDirection: "column"
      }
    },
    item: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      fontSize: "sm",
      position: "relative",
      color: "fg",
      borderRadius: "var(--segment-radius)",
      _disabled: {
        opacity: "0.5"
      },
      "&:has(input:focus-visible)": {
        focusRing: "outside"
      },
      _before: {
        content: '""',
        position: "absolute",
        bg: "border",
        transition: "opacity 0.2s"
      },
      _horizontal: {
        _before: {
          insetInlineStart: 0,
          insetBlock: "1.5",
          width: "1px"
        }
      },
      _vertical: {
        _before: {
          insetBlockStart: 0,
          insetInline: "1.5",
          height: "1px"
        }
      },
      "& + &[data-state=checked], &[data-state=checked] + &, &:first-of-type": {
        _before: {
          opacity: "0"
        }
      },
      "&[data-state=checked][data-ssr]": {
        shadow: "sm",
        bg: "bg",
        borderRadius: "var(--segment-radius)"
      }
    },
    indicator: {
      shadow: "var(--segment-indicator-shadow)",
      pos: "absolute",
      bg: "var(--segment-indicator-bg)",
      width: "var(--width)",
      height: "var(--height)",
      top: "var(--top)",
      left: "var(--left)",
      zIndex: -1,
      borderRadius: "var(--segment-radius)"
    }
  },
  variants: {
    size: {
      xs: {
        item: {
          textStyle: "xs",
          px: "3",
          gap: "1",
          height: "6"
        }
      },
      sm: {
        item: {
          textStyle: "sm",
          px: "4",
          gap: "2",
          height: "8"
        }
      },
      md: {
        item: {
          textStyle: "sm",
          px: "4",
          gap: "2",
          height: "10"
        }
      },
      lg: {
        item: {
          textStyle: "md",
          px: "4.5",
          gap: "3",
          height: "11"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), gd = A({
  className: "chakra-slider",
  slots: uc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      textStyle: "sm",
      position: "relative",
      isolation: "isolate",
      touchAction: "none"
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm"
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative"
    },
    track: {
      overflow: "hidden",
      borderRadius: "full",
      flex: "1"
    },
    range: {
      width: "inherit",
      height: "inherit",
      _disabled: { bg: "border.emphasized!" }
    },
    markerGroup: {
      position: "absolute!",
      zIndex: "1"
    },
    marker: {
      "--marker-bg": { base: "white", _underValue: "colors.bg" },
      display: "flex",
      alignItems: "center",
      gap: "calc(var(--slider-thumb-size) / 2)",
      color: "fg.muted",
      textStyle: "xs"
    },
    markerIndicator: {
      width: "var(--slider-marker-size)",
      height: "var(--slider-marker-size)",
      borderRadius: "full",
      bg: "var(--marker-bg)"
    },
    thumb: {
      width: "var(--slider-thumb-size)",
      height: "var(--slider-thumb-size)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: 0,
      zIndex: "2",
      borderRadius: "full",
      transition: "shadow",
      _focusVisible: {
        ring: "3px",
        ringColor: "colorPalette.focusRing/50"
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          "--slider-thumb-size": "sizes.4",
          "--slider-track-size": "sizes.1.5",
          "--slider-marker-center": "6px",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "3px"
        }
      },
      md: {
        root: {
          "--slider-thumb-size": "sizes.5",
          "--slider-track-size": "sizes.2",
          "--slider-marker-center": "8px",
          "--slider-marker-size": "sizes.1",
          "--slider-marker-inset": "4px"
        }
      },
      lg: {
        root: {
          "--slider-thumb-size": "sizes.6",
          "--slider-track-size": "sizes.2.5",
          "--slider-marker-center": "9px",
          "--slider-marker-size": "sizes.1.5",
          "--slider-marker-inset": "5px"
        }
      }
    },
    variant: {
      outline: {
        track: {
          shadow: "inset",
          bg: "bg.emphasized/72"
        },
        range: {
          bg: "colorPalette.solid"
        },
        thumb: {
          borderWidth: "2px",
          borderColor: "colorPalette.solid",
          bg: "bg",
          _disabled: {
            bg: "border.emphasized",
            borderColor: "border.emphasized"
          }
        }
      },
      solid: {
        track: {
          bg: "colorPalette.subtle",
          _disabled: {
            bg: "bg.muted"
          }
        },
        range: {
          bg: "colorPalette.solid"
        },
        thumb: {
          bg: "colorPalette.solid",
          _disabled: {
            bg: "border.emphasized"
          }
        }
      }
    },
    orientation: {
      vertical: {
        root: {
          display: "inline-flex"
        },
        control: {
          flexDirection: "column",
          height: "100%",
          minWidth: "var(--slider-thumb-size)",
          "&:has(.chakra-slider__markerLabel)": {
            marginEnd: "4"
          }
        },
        track: {
          width: "var(--slider-track-size)"
        },
        thumb: {
          left: "50%",
          translate: "-50% 0"
        },
        markerGroup: {
          insetStart: "var(--slider-marker-center)",
          insetBlock: "var(--slider-marker-inset)"
        },
        marker: {
          flexDirection: "row"
        }
      },
      horizontal: {
        control: {
          flexDirection: "row",
          width: "100%",
          minHeight: "var(--slider-thumb-size)",
          "&:has(.chakra-slider__markerLabel)": {
            marginBottom: "4"
          }
        },
        track: {
          height: "var(--slider-track-size)"
        },
        thumb: {
          top: "50%",
          translate: "0 -50%"
        },
        markerGroup: {
          top: "var(--slider-marker-center)",
          insetInline: "var(--slider-marker-inset)"
        },
        marker: {
          flexDirection: "column"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline",
    orientation: "horizontal"
  }
}), fd = A({
  slots: wc.keys(),
  className: "splitter",
  base: {
    resizeTrigger: {
      "--splitter-border-color": "colors.border",
      "--splitter-thumb-color": "colors.bg",
      "--splitter-thumb-size": "sizes.2",
      "--splitter-thumb-inset": "calc(var(--splitter-thumb-size) * -0.5)",
      "--splitter-border-size": "1px",
      "--splitter-handle-size": "sizes.6",
      outline: "0",
      display: "grid",
      placeItems: "center",
      position: "relative",
      _focus: {
        "--splitter-border-color": "colors.border.emphasized",
        "--splitter-thumb-color": "colors.colorPalette.subtle"
      },
      _dragging: {
        "--splitter-thumb-color": "colors.colorPalette.focusRing"
      },
      _horizontal: {
        minWidth: "var(--splitter-thumb-size)",
        marginInline: "var(--splitter-thumb-inset)"
      },
      _vertical: {
        minHeight: "var(--splitter-thumb-size)",
        marginBlock: "var(--splitter-thumb-inset)"
      }
    },
    resizeTriggerSeparator: {
      position: "absolute",
      bg: "var(--splitter-border-color)",
      "[data-part='resize-trigger'][data-orientation=horizontal] &": {
        insetInlineEnd: "calc(var(--splitter-thumb-size) * 0.5)",
        insetBlock: "0",
        insetInlineStart: "auto",
        w: "var(--splitter-border-size)"
      },
      "[data-part='resize-trigger'][data-orientation=vertical] &": {
        insetBlockEnd: "calc(var(--splitter-thumb-size) * 0.5)",
        insetInline: "0",
        insetBlockStart: "auto",
        h: "var(--splitter-border-size)"
      }
    },
    resizeTriggerIndicator: {
      position: "relative",
      rounded: "full",
      bg: "var(--splitter-thumb-color)",
      shadow: "xs",
      borderWidth: "1px",
      zIndex: "1",
      "[data-part='resize-trigger'][data-orientation=horizontal] &": {
        w: "full",
        h: "var(--splitter-handle-size)"
      },
      "[data-part='resize-trigger'][data-orientation=vertical] &": {
        w: "var(--splitter-handle-size)",
        h: "full"
      },
      "[data-part='resize-trigger'][data-focus]:focus-visible &": {
        outlineWidth: "2px",
        outlineColor: "colorPalette.focusRing",
        outlineStyle: "solid"
      },
      "[data-part='resize-trigger'][data-disabled] &": {
        visibility: "hidden"
      }
    }
  }
}), md = A({
  className: "chakra-stat",
  slots: pc.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1",
      position: "relative",
      flex: "1"
    },
    label: {
      display: "inline-flex",
      gap: "1.5",
      alignItems: "center",
      color: "fg.muted",
      textStyle: "sm"
    },
    helpText: {
      color: "fg.muted",
      textStyle: "xs"
    },
    valueUnit: {
      color: "fg.muted",
      textStyle: "xs",
      fontWeight: "initial",
      letterSpacing: "initial"
    },
    valueText: {
      verticalAlign: "baseline",
      fontWeight: "semibold",
      letterSpacing: "tight",
      fontFeatureSettings: "pnum",
      fontVariantNumeric: "proportional-nums",
      display: "inline-flex",
      gap: "1"
    },
    indicator: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      marginEnd: 1,
      "& :where(svg)": {
        w: "1em",
        h: "1em"
      },
      "&[data-type=up]": {
        color: "fg.success"
      },
      "&[data-type=down]": {
        color: "fg.error"
      }
    }
  },
  variants: {
    size: {
      sm: {
        valueText: {
          textStyle: "xl"
        }
      },
      md: {
        valueText: {
          textStyle: "2xl"
        }
      },
      lg: {
        valueText: {
          textStyle: "3xl"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), hd = A({
  className: "chakra-status",
  slots: gc.keys(),
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      gap: "2"
    },
    indicator: {
      width: "0.64em",
      height: "0.64em",
      flexShrink: 0,
      borderRadius: "full",
      forcedColorAdjust: "none",
      bg: "colorPalette.solid"
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          textStyle: "xs"
        }
      },
      md: {
        root: {
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          textStyle: "md"
        }
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
}), bd = A({
  className: "chakra-steps",
  slots: fc.keys(),
  base: {
    root: {
      display: "flex",
      width: "full"
    },
    list: {
      display: "flex",
      justifyContent: "space-between",
      "--steps-gutter": "spacing.3",
      "--steps-thickness": "2px"
    },
    title: {
      fontWeight: "medium",
      color: "fg"
    },
    description: {
      color: "fg.muted"
    },
    separator: {
      bg: "border",
      flex: "1"
    },
    indicator: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: "0",
      borderRadius: "full",
      fontWeight: "medium",
      width: "var(--steps-size)",
      height: "var(--steps-size)",
      _icon: {
        flexShrink: "0",
        width: "var(--steps-icon-size)",
        height: "var(--steps-icon-size)"
      }
    },
    item: {
      position: "relative",
      display: "flex",
      gap: "3",
      flex: "1 0 0",
      "&:last-of-type": {
        flex: "initial",
        "& [data-part=separator]": {
          display: "none"
        }
      }
    },
    trigger: {
      display: "flex",
      alignItems: "center",
      gap: "3",
      textAlign: "start",
      focusVisibleRing: "outside",
      borderRadius: "l2"
    },
    content: {
      focusVisibleRing: "outside"
    }
  },
  variants: {
    orientation: {
      vertical: {
        root: {
          flexDirection: "row",
          height: "100%"
        },
        list: {
          flexDirection: "column",
          alignItems: "flex-start"
        },
        separator: {
          position: "absolute",
          width: "var(--steps-thickness)",
          height: "100%",
          maxHeight: "calc(100% - var(--steps-size) - var(--steps-gutter) * 2)",
          top: "calc(var(--steps-size) + var(--steps-gutter))",
          insetStart: "calc(var(--steps-size) / 2 - 1px)"
        },
        item: {
          alignItems: "flex-start"
        }
      },
      horizontal: {
        root: {
          flexDirection: "column",
          width: "100%"
        },
        list: {
          flexDirection: "row",
          alignItems: "center"
        },
        separator: {
          width: "100%",
          height: "var(--steps-thickness)",
          marginX: "var(--steps-gutter)"
        },
        item: {
          alignItems: "center"
        }
      }
    },
    variant: {
      solid: {
        indicator: {
          _incomplete: {
            borderWidth: "var(--steps-thickness)"
          },
          _current: {
            bg: "colorPalette.muted",
            borderWidth: "var(--steps-thickness)",
            borderColor: "colorPalette.solid",
            color: "colorPalette.fg"
          },
          _complete: {
            bg: "colorPalette.solid",
            borderColor: "colorPalette.solid",
            color: "colorPalette.contrast"
          }
        },
        separator: {
          _complete: {
            bg: "colorPalette.solid"
          }
        }
      },
      subtle: {
        indicator: {
          _incomplete: {
            bg: "bg.muted"
          },
          _current: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg"
          },
          _complete: {
            bg: "colorPalette.emphasized",
            color: "colorPalette.fg"
          }
        },
        separator: {
          _complete: {
            bg: "colorPalette.emphasized"
          }
        }
      }
    },
    size: {
      xs: {
        root: {
          gap: "2.5"
        },
        list: {
          "--steps-size": "sizes.6",
          "--steps-icon-size": "sizes.3.5",
          textStyle: "xs"
        },
        title: {
          textStyle: "sm"
        }
      },
      sm: {
        root: {
          gap: "3"
        },
        list: {
          "--steps-size": "sizes.8",
          "--steps-icon-size": "sizes.4",
          textStyle: "xs"
        },
        title: {
          textStyle: "sm"
        }
      },
      md: {
        root: {
          gap: "4"
        },
        list: {
          "--steps-size": "sizes.10",
          "--steps-icon-size": "sizes.4",
          textStyle: "sm"
        },
        title: {
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          gap: "6"
        },
        list: {
          "--steps-size": "sizes.11",
          "--steps-icon-size": "sizes.5",
          textStyle: "md"
        },
        title: {
          textStyle: "md"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    orientation: "horizontal"
  }
}), vd = A({
  slots: mc.keys(),
  className: "chakra-switch",
  base: {
    root: {
      display: "inline-flex",
      gap: "2.5",
      alignItems: "center",
      position: "relative",
      verticalAlign: "middle",
      "--switch-diff": "calc(var(--switch-width) - var(--switch-height))",
      "--switch-x": {
        base: "var(--switch-diff)",
        _rtl: "calc(var(--switch-diff) * -1)"
      }
    },
    label: {
      lineHeight: "1",
      userSelect: "none",
      fontSize: "sm",
      fontWeight: "medium",
      _disabled: {
        opacity: "0.5"
      }
    },
    indicator: {
      position: "absolute",
      height: "var(--switch-height)",
      width: "var(--switch-height)",
      fontSize: "var(--switch-indicator-font-size)",
      fontWeight: "medium",
      flexShrink: 0,
      userSelect: "none",
      display: "grid",
      placeContent: "center",
      transition: "inset-inline-start 0.12s ease",
      insetInlineStart: "calc(var(--switch-x) - 2px)",
      _checked: {
        insetInlineStart: "2px"
      }
    },
    control: {
      display: "inline-flex",
      gap: "0.5rem",
      flexShrink: 0,
      justifyContent: "flex-start",
      cursor: "switch",
      borderRadius: "full",
      position: "relative",
      width: "var(--switch-width)",
      height: "var(--switch-height)",
      transition: "backgrounds",
      _disabled: {
        opacity: "0.5",
        cursor: "not-allowed"
      },
      _invalid: {
        outline: "2px solid",
        outlineColor: "border.error",
        outlineOffset: "2px"
      }
    },
    thumb: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transitionProperty: "translate",
      transitionDuration: "fast",
      borderRadius: "inherit",
      _checked: {
        translate: "var(--switch-x) 0"
      }
    }
  },
  variants: {
    variant: {
      solid: {
        control: {
          borderRadius: "full",
          bg: "bg.emphasized",
          focusVisibleRing: "outside",
          _checked: {
            bg: "colorPalette.solid"
          }
        },
        thumb: {
          bg: "white",
          width: "var(--switch-height)",
          height: "var(--switch-height)",
          scale: "0.8",
          boxShadow: "sm",
          _checked: {
            bg: "colorPalette.contrast"
          }
        }
      },
      raised: {
        control: {
          borderRadius: "full",
          height: "calc(var(--switch-height) / 2)",
          bg: "bg.muted",
          boxShadow: "inset",
          _checked: {
            bg: "colorPalette.solid/60"
          }
        },
        thumb: {
          width: "var(--switch-height)",
          height: "var(--switch-height)",
          position: "relative",
          top: "calc(var(--switch-height) * -0.25)",
          bg: "white",
          boxShadow: "xs",
          focusVisibleRing: "outside",
          _checked: {
            bg: "colorPalette.solid"
          }
        }
      }
    },
    size: {
      xs: {
        root: {
          "--switch-width": "sizes.6",
          "--switch-height": "sizes.3",
          "--switch-indicator-font-size": "fontSizes.xs"
        }
      },
      sm: {
        root: {
          "--switch-width": "sizes.8",
          "--switch-height": "sizes.4",
          "--switch-indicator-font-size": "fontSizes.xs"
        }
      },
      md: {
        root: {
          "--switch-width": "sizes.10",
          "--switch-height": "sizes.5",
          "--switch-indicator-font-size": "fontSizes.sm"
        }
      },
      lg: {
        root: {
          "--switch-width": "sizes.12",
          "--switch-height": "sizes.6",
          "--switch-indicator-font-size": "fontSizes.md"
        }
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    size: "md"
  }
}), xd = A({
  className: "chakra-table",
  slots: hc.keys(),
  base: {
    root: {
      fontVariantNumeric: "lining-nums tabular-nums",
      borderCollapse: "collapse",
      width: "full",
      textAlign: "start",
      verticalAlign: "top"
    },
    row: {
      _selected: {
        bg: "colorPalette.subtle"
      }
    },
    cell: {
      textAlign: "start",
      alignItems: "center"
    },
    columnHeader: {
      fontWeight: "medium",
      textAlign: "start",
      color: "fg"
    },
    caption: {
      fontWeight: "medium",
      textStyle: "xs"
    },
    footer: {
      fontWeight: "medium"
    }
  },
  variants: {
    interactive: {
      true: {
        body: {
          "& tr": {
            _hover: {
              bg: "colorPalette.subtle"
            }
          }
        }
      }
    },
    stickyHeader: {
      true: {
        header: {
          "& :where(tr)": {
            top: "var(--table-sticky-offset, 0)",
            position: "sticky",
            zIndex: 1
          }
        }
      }
    },
    striped: {
      true: {
        row: {
          "&:nth-of-type(odd) td": {
            bg: "bg.muted"
          }
        }
      }
    },
    showColumnBorder: {
      true: {
        columnHeader: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px"
          }
        },
        cell: {
          "&:not(:last-of-type)": {
            borderInlineEndWidth: "1px"
          }
        }
      }
    },
    variant: {
      line: {
        columnHeader: {
          borderBottomWidth: "1px"
        },
        cell: {
          borderBottomWidth: "1px"
        },
        row: {
          bg: "bg"
        }
      },
      outline: {
        root: {
          boxShadow: "0 0 0 1px {colors.border}"
        },
        columnHeader: {
          borderBottomWidth: "1px"
        },
        header: {
          bg: "bg.muted"
        },
        row: {
          "&:not(:last-of-type)": {
            borderBottomWidth: "1px"
          }
        },
        footer: {
          borderTopWidth: "1px"
        }
      }
    },
    size: {
      sm: {
        root: {
          textStyle: "sm"
        },
        columnHeader: {
          px: "2",
          py: "2"
        },
        cell: {
          px: "2",
          py: "2"
        }
      },
      md: {
        root: {
          textStyle: "sm"
        },
        columnHeader: {
          px: "3",
          py: "3"
        },
        cell: {
          px: "3",
          py: "3"
        }
      },
      lg: {
        root: {
          textStyle: "md"
        },
        columnHeader: {
          px: "4",
          py: "3"
        },
        cell: {
          px: "4",
          py: "3"
        }
      }
    }
  },
  defaultVariants: {
    variant: "line",
    size: "md"
  }
}), yd = A({
  slots: vc.keys(),
  className: "chakra-tabs",
  base: {
    root: {
      "--tabs-trigger-radius": "radii.l2",
      "--tabs-indicator-shadow": "shadows.xs",
      "--tabs-indicator-bg": "colors.bg",
      position: "relative",
      _horizontal: {
        display: "block"
      },
      _vertical: {
        display: "flex"
      }
    },
    list: {
      display: "inline-flex",
      position: "relative",
      isolation: "isolate",
      minH: "var(--tabs-height)",
      _horizontal: {
        flexDirection: "row"
      },
      _vertical: {
        flexDirection: "column"
      }
    },
    trigger: {
      outline: "0",
      minW: "var(--tabs-height)",
      height: "var(--tabs-height)",
      display: "flex",
      alignItems: "center",
      fontWeight: "medium",
      position: "relative",
      cursor: "button",
      gap: "2",
      _focusVisible: {
        zIndex: 1,
        outline: "2px solid",
        outlineColor: "colorPalette.focusRing"
      },
      _disabled: {
        cursor: "not-allowed",
        opacity: 0.5
      }
    },
    content: {
      focusVisibleRing: "inside",
      _horizontal: {
        width: "100%",
        pt: "var(--tabs-content-padding)"
      },
      _vertical: {
        height: "100%",
        ps: "var(--tabs-content-padding)"
      }
    },
    indicator: {
      width: "var(--width)",
      height: "var(--height)",
      borderRadius: "var(--tabs-trigger-radius)",
      bg: "var(--tabs-indicator-bg)",
      shadow: "var(--tabs-indicator-shadow)",
      zIndex: -1
    }
  },
  variants: {
    fitted: {
      true: {
        list: {
          display: "flex"
        },
        trigger: {
          flex: 1,
          textAlign: "center",
          justifyContent: "center"
        }
      }
    },
    justify: {
      start: {
        list: {
          justifyContent: "flex-start"
        }
      },
      center: {
        list: {
          justifyContent: "center"
        }
      },
      end: {
        list: {
          justifyContent: "flex-end"
        }
      }
    },
    size: {
      sm: {
        root: {
          "--tabs-height": "sizes.9",
          "--tabs-content-padding": "spacing.3"
        },
        trigger: {
          py: "1",
          px: "3",
          textStyle: "sm"
        }
      },
      md: {
        root: {
          "--tabs-height": "sizes.10",
          "--tabs-content-padding": "spacing.4"
        },
        trigger: {
          py: "2",
          px: "4",
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          "--tabs-height": "sizes.11",
          "--tabs-content-padding": "spacing.4.5"
        },
        trigger: {
          py: "2",
          px: "4.5",
          textStyle: "md"
        }
      }
    },
    variant: {
      line: {
        list: {
          display: "flex",
          borderColor: "border",
          _horizontal: {
            borderBottomWidth: "1px"
          },
          _vertical: {
            borderEndWidth: "1px"
          }
        },
        trigger: {
          color: "fg.muted",
          _disabled: {
            _active: { bg: "initial" }
          },
          _selected: {
            color: "fg",
            _horizontal: {
              layerStyle: "indicator.bottom",
              "--indicator-offset-y": "-1px",
              "--indicator-color": "colors.colorPalette.solid"
            },
            _vertical: {
              layerStyle: "indicator.end",
              "--indicator-offset-x": "-1px"
            }
          }
        }
      },
      subtle: {
        trigger: {
          borderRadius: "var(--tabs-trigger-radius)",
          color: "fg.muted",
          _selected: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg"
          }
        }
      },
      enclosed: {
        list: {
          bg: "bg.muted",
          padding: "1",
          borderRadius: "l3",
          minH: "calc(var(--tabs-height) - 4px)"
        },
        trigger: {
          justifyContent: "center",
          color: "fg.muted",
          borderRadius: "var(--tabs-trigger-radius)",
          _selected: {
            bg: "bg",
            color: "colorPalette.fg",
            shadow: "xs"
          }
        }
      },
      outline: {
        list: {
          "--line-thickness": "1px",
          "--line-offset": "calc(var(--line-thickness) * -1)",
          borderColor: "border",
          display: "flex",
          _horizontal: {
            _before: {
              content: '""',
              position: "absolute",
              bottom: "0px",
              width: "100%",
              borderBottomWidth: "var(--line-thickness)",
              borderBottomColor: "border"
            }
          },
          _vertical: {
            _before: {
              content: '""',
              position: "absolute",
              insetInline: "var(--line-offset)",
              height: "calc(100% - calc(var(--line-thickness) * 2))",
              borderEndWidth: "var(--line-thickness)",
              borderEndColor: "border"
            }
          }
        },
        trigger: {
          color: "fg.muted",
          borderWidth: "1px",
          borderColor: "transparent",
          _selected: {
            bg: "currentBg",
            color: "colorPalette.fg"
          },
          _horizontal: {
            borderTopRadius: "var(--tabs-trigger-radius)",
            marginBottom: "var(--line-offset)",
            marginEnd: { _notLast: "var(--line-offset)" },
            _selected: {
              borderColor: "border",
              borderBottomColor: "transparent"
            }
          },
          _vertical: {
            borderStartRadius: "var(--tabs-trigger-radius)",
            marginEnd: "var(--line-offset)",
            marginBottom: { _notLast: "var(--line-offset)" },
            _selected: {
              borderColor: "border",
              borderEndColor: "transparent"
            }
          }
        }
      },
      plain: {
        trigger: {
          color: "fg.muted",
          _selected: {
            color: "colorPalette.fg"
          },
          borderRadius: "var(--tabs-trigger-radius)",
          "&[data-selected][data-ssr]": {
            bg: "var(--tabs-indicator-bg)",
            shadow: "var(--tabs-indicator-shadow)",
            borderRadius: "var(--tabs-trigger-radius)"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "line"
  }
}), st = ur.variants?.variant, kd = A({
  slots: xc.keys(),
  className: "chakra-tag",
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      verticalAlign: "top",
      maxWidth: "100%",
      userSelect: "none",
      borderRadius: "l2",
      focusVisibleRing: "outside"
    },
    label: {
      lineClamp: "1"
    },
    closeTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      borderRadius: "l1",
      color: "currentColor",
      focusVisibleRing: "inside",
      focusRingWidth: "2px"
    },
    startElement: {
      flexShrink: 0,
      boxSize: "var(--tag-element-size)",
      ms: "var(--tag-element-offset)",
      "&:has([data-scope=avatar])": {
        boxSize: "var(--tag-avatar-size)",
        ms: "calc(var(--tag-element-offset) * 1.5)"
      },
      _icon: { boxSize: "100%" }
    },
    endElement: {
      flexShrink: 0,
      boxSize: "var(--tag-element-size)",
      me: "var(--tag-element-offset)",
      _icon: { boxSize: "100%" },
      "&:has(button)": {
        ms: "calc(var(--tag-element-offset) * -1)"
      }
    }
  },
  variants: {
    size: {
      sm: {
        root: {
          px: "1.5",
          minH: "4.5",
          gap: "1",
          "--tag-avatar-size": "spacing.3",
          "--tag-element-size": "spacing.3",
          "--tag-element-offset": "-2px"
        },
        label: {
          textStyle: "xs"
        }
      },
      md: {
        root: {
          px: "1.5",
          minH: "5",
          gap: "1",
          "--tag-avatar-size": "spacing.3.5",
          "--tag-element-size": "spacing.3.5",
          "--tag-element-offset": "-2px"
        },
        label: {
          textStyle: "xs"
        }
      },
      lg: {
        root: {
          px: "2",
          minH: "6",
          gap: "1.5",
          "--tag-avatar-size": "spacing.4.5",
          "--tag-element-size": "spacing.4",
          "--tag-element-offset": "-3px"
        },
        label: {
          textStyle: "sm"
        }
      },
      xl: {
        root: {
          px: "2.5",
          minH: "8",
          gap: "1.5",
          "--tag-avatar-size": "spacing.6",
          "--tag-element-size": "spacing.4.5",
          "--tag-element-offset": "-4px"
        },
        label: {
          textStyle: "sm"
        }
      }
    },
    variant: {
      subtle: {
        root: st?.subtle
      },
      solid: {
        root: st?.solid
      },
      outline: {
        root: st?.outline
      },
      surface: {
        root: st?.surface
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "surface"
  }
}), Sd = A({
  slots: ii.keys(),
  className: "tags-input",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
      width: "full"
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5"
      }
    },
    control: {
      "--focus-color": "colors.colorPalette.focusRing",
      "--error-color": "colors.border.error",
      minH: "var(--tags-input-height)",
      "--input-height": "var(--tags-input-height)",
      px: "var(--tags-input-px)",
      py: "var(--tags-input-py)",
      gap: "var(--tags-input-gap)",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      borderRadius: "l2",
      pos: "relative",
      transitionProperty: "border-color, box-shadow",
      transitionDuration: "normal",
      _disabled: {
        opacity: "0.5"
      },
      _invalid: {
        borderColor: "var(--error-color)"
      }
    },
    input: {
      flex: "1",
      minWidth: "20",
      outline: "none",
      bg: "transparent",
      color: "fg",
      px: "calc(var(--tags-input-item-px) / 1.25)",
      height: "var(--tags-input-item-height)",
      _readOnly: {
        display: "none"
      }
    },
    item: {
      maxWidth: "100%",
      minWidth: "0"
    },
    itemText: {
      lineClamp: "1",
      minWidth: "0"
    },
    itemInput: {
      outline: "none",
      bg: "transparent",
      minWidth: "2ch",
      color: "inherit",
      px: "var(--tags-input-item-px)",
      height: "var(--tags-input-item-height)"
    },
    itemPreview: {
      height: "var(--tags-input-item-height)",
      userSelect: "none",
      display: "inline-flex",
      alignItems: "center",
      gap: "1",
      rounded: "l1",
      px: "var(--tags-input-item-px)",
      maxWidth: "100%"
    },
    itemDeleteTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: "0",
      boxSize: "calc(var(--tags-input-item-height) / 1.5)",
      cursor: { base: "button", _disabled: "initial" },
      me: "-1",
      opacity: "0.4",
      _hover: {
        opacity: "1"
      },
      "[data-highlighted] &": {
        opacity: "1"
      },
      _icon: {
        boxSize: "80%"
      }
    },
    clearTrigger: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxSize: "calc(var(--tags-input-item-height) / 1.5)",
      cursor: { base: "button", _disabled: "initial" },
      color: "fg.muted",
      focusVisibleRing: "inside",
      focusRingWidth: "2px",
      rounded: "l1",
      _icon: {
        boxSize: "5"
      }
    }
  },
  variants: {
    size: {
      xs: {
        root: {
          "--tags-input-height": "sizes.8",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-py": "spacing.1",
          "--tags-input-gap": "spacing.1",
          "--tags-input-item-height": "sizes.6",
          "--tags-input-item-px": "spacing.2",
          textStyle: "xs"
        }
      },
      sm: {
        root: {
          "--tags-input-height": "sizes.9",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-py": "spacing.1",
          "--tags-input-gap": "spacing.1",
          "--tags-input-item-height": "sizes.6",
          "--tags-input-item-px": "spacing.2",
          textStyle: "sm"
        }
      },
      md: {
        root: {
          "--tags-input-height": "sizes.10",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-py": "spacing.1",
          "--tags-input-gap": "spacing.1",
          "--tags-input-item-height": "sizes.7",
          "--tags-input-item-px": "spacing.2",
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          "--tags-input-height": "sizes.11",
          "--tags-input-px": "spacing.1.5",
          "--tags-input-py": "spacing.1",
          "--tags-input-gap": "spacing.1",
          "--tags-input-item-height": "sizes.8",
          "--tags-input-item-px": "spacing.2",
          textStyle: "md"
        }
      }
    },
    variant: {
      outline: {
        control: {
          borderWidth: "1px",
          bg: "bg",
          _focus: {
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "var(--focus-color)",
            borderColor: "var(--focus-color)",
            _invalid: {
              outlineColor: "var(--error-color)",
              borderColor: "var(--error-color)"
            }
          }
        },
        itemPreview: {
          bg: "colorPalette.subtle",
          _highlighted: {
            bg: "colorPalette.muted"
          }
        }
      },
      subtle: {
        control: {
          bg: "bg.muted",
          borderWidth: "1px",
          borderColor: "transparent",
          _focus: {
            outlineWidth: "1px",
            outlineStyle: "solid",
            outlineColor: "var(--focus-color)",
            borderColor: "var(--focus-color)",
            _invalid: {
              outlineColor: "var(--error-color)",
              borderColor: "var(--error-color)"
            }
          }
        },
        itemPreview: {
          bg: "bg",
          borderWidth: "1px",
          _highlighted: {
            bg: "colorPalette.subtle",
            borderColor: "colorPalette.emphasized"
          }
        }
      },
      flushed: {
        control: {
          borderRadius: "0",
          px: "0",
          bg: "transparent",
          borderBottomWidth: "1px",
          borderBottomColor: "border",
          _focus: {
            borderColor: "var(--focus-color)",
            boxShadow: "0px 1px 0px 0px var(--focus-color)"
          }
        },
        itemPreview: {
          bg: "colorPalette.subtle",
          _highlighted: {
            bg: "colorPalette.muted"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "outline"
  }
}), wd = A({
  slots: yc.keys(),
  className: "chakra-timeline",
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      width: "full",
      "--timeline-thickness": "1px",
      "--timeline-gutter": "4px"
    },
    item: {
      "--timeline-content-gap": "spacing.6",
      display: "flex",
      position: "relative",
      alignItems: "flex-start",
      flexShrink: 0,
      gap: "4",
      _last: {
        "--timeline-content-gap": "0"
      }
    },
    separator: {
      display: "var(--timeline-separator-display)",
      position: "absolute",
      borderStartWidth: "var(--timeline-thickness)",
      ms: "calc(-1 * var(--timeline-thickness) / 2)",
      insetInlineStart: "calc(var(--timeline-indicator-size) / 2)",
      insetBlock: "0",
      borderColor: "border"
    },
    indicator: {
      outline: "2px solid {colors.bg}",
      position: "relative",
      flexShrink: "0",
      boxSize: "var(--timeline-indicator-size)",
      fontSize: "var(--timeline-font-size)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "full",
      fontWeight: "medium"
    },
    connector: {
      alignSelf: "stretch",
      position: "relative"
    },
    content: {
      pb: "var(--timeline-content-gap)",
      display: "flex",
      flexDirection: "column",
      width: "full",
      gap: "2"
    },
    title: {
      display: "flex",
      fontWeight: "medium",
      flexWrap: "wrap",
      gap: "1.5",
      alignItems: "center",
      mt: "var(--timeline-margin)"
    },
    description: {
      color: "fg.muted",
      textStyle: "xs"
    }
  },
  variants: {
    variant: {
      subtle: {
        indicator: {
          bg: "colorPalette.muted"
        }
      },
      solid: {
        indicator: {
          bg: "colorPalette.solid",
          color: "colorPalette.contrast"
        }
      },
      outline: {
        indicator: {
          bg: "currentBg",
          borderWidth: "1px",
          borderColor: "colorPalette.muted"
        }
      },
      plain: {}
    },
    showLastSeparator: {
      true: {
        item: {
          _last: {
            "--timeline-separator-display": "initial"
          }
        }
      },
      false: {
        item: {
          _last: {
            "--timeline-separator-display": "none"
          }
        }
      }
    },
    size: {
      sm: {
        root: {
          "--timeline-indicator-size": "sizes.4",
          "--timeline-font-size": "fontSizes.2xs"
        },
        title: {
          textStyle: "xs"
        }
      },
      md: {
        root: {
          "--timeline-indicator-size": "sizes.5",
          "--timeline-font-size": "fontSizes.xs"
        },
        title: {
          textStyle: "sm"
        }
      },
      lg: {
        root: {
          "--timeline-indicator-size": "sizes.6",
          "--timeline-font-size": "fontSizes.xs"
        },
        title: {
          mt: "0.5",
          textStyle: "sm"
        }
      },
      xl: {
        root: {
          "--timeline-indicator-size": "sizes.8",
          "--timeline-font-size": "fontSizes.sm"
        },
        title: {
          mt: "1.5",
          textStyle: "sm"
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    showLastSeparator: !1
  }
}), zd = A({
  slots: bc.keys(),
  className: "chakra-toast",
  base: {
    root: {
      width: "full",
      display: "flex",
      alignItems: "flex-start",
      position: "relative",
      gap: "3",
      py: "4",
      ps: "4",
      pe: "6",
      borderRadius: "l2",
      translate: "var(--x) var(--y)",
      scale: "var(--scale)",
      zIndex: "var(--z-index)",
      height: "var(--height)",
      opacity: "var(--opacity)",
      willChange: "translate, opacity, scale",
      transition: "translate 400ms, scale 400ms, opacity 400ms, height 400ms, box-shadow 200ms",
      transitionTimingFunction: "cubic-bezier(0.21, 1.02, 0.73, 1)",
      _closed: {
        transition: "translate 400ms, scale 400ms, opacity 200ms",
        transitionTimingFunction: "cubic-bezier(0.06, 0.71, 0.55, 1)"
      },
      bg: "bg.panel",
      color: "fg",
      boxShadow: "xl",
      "--toast-trigger-bg": "colors.bg.muted",
      "&[data-type=warning]": {
        bg: "orange.solid",
        color: "orange.contrast",
        "--toast-trigger-bg": "{white/10}",
        "--toast-border-color": "{white/40}"
      },
      "&[data-type=success]": {
        bg: "green.solid",
        color: "green.contrast",
        "--toast-trigger-bg": "{white/10}",
        "--toast-border-color": "{white/40}"
      },
      "&[data-type=error]": {
        bg: "red.solid",
        color: "red.contrast",
        "--toast-trigger-bg": "{white/10}",
        "--toast-border-color": "{white/40}"
      }
    },
    title: {
      fontWeight: "medium",
      textStyle: "sm",
      marginEnd: "2"
    },
    description: {
      display: "inline",
      textStyle: "sm",
      opacity: "0.8"
    },
    indicator: {
      flexShrink: "0",
      boxSize: "5"
    },
    actionTrigger: {
      textStyle: "sm",
      fontWeight: "medium",
      height: "8",
      px: "3",
      borderRadius: "l2",
      alignSelf: "center",
      borderWidth: "1px",
      borderColor: "var(--toast-border-color, inherit)",
      transition: "background 200ms",
      _hover: {
        bg: "var(--toast-trigger-bg)"
      }
    },
    closeTrigger: {
      position: "absolute",
      top: "1",
      insetEnd: "1",
      padding: "1",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "{currentColor/60}",
      borderRadius: "l2",
      textStyle: "md",
      transition: "background 200ms",
      _icon: {
        boxSize: "1em"
      }
    }
  }
}), _d = A({
  slots: ai.keys(),
  className: "chakra-tooltip",
  base: {
    content: {
      "--tooltip-bg": "colors.bg.inverted",
      bg: "var(--tooltip-bg)",
      color: "fg.inverted",
      px: "2.5",
      py: "1",
      borderRadius: "l2",
      fontWeight: "medium",
      textStyle: "xs",
      boxShadow: "md",
      maxW: "xs",
      zIndex: "tooltip",
      transformOrigin: "var(--transform-origin)",
      _open: {
        animationStyle: "scale-fade-in",
        animationDuration: "fast"
      },
      _closed: {
        animationStyle: "scale-fade-out",
        animationDuration: "fast"
      }
    },
    arrow: {
      "--arrow-size": "sizes.2",
      "--arrow-background": "var(--tooltip-bg)"
    },
    arrowTip: {
      borderTopWidth: "1px",
      borderLeftWidth: "1px",
      borderColor: "var(--tooltip-bg)"
    }
  }
}), ao = Ee({
  display: "flex",
  alignItems: "center",
  gap: "var(--tree-item-gap)",
  rounded: "l2",
  userSelect: "none",
  position: "relative",
  "--tree-depth": "calc(var(--depth) - 1)",
  "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
  "--tree-icon-offset": "calc(var(--tree-icon-size) * var(--tree-depth) * 0.5)",
  "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset) + var(--tree-icon-offset))",
  ps: "var(--tree-offset)",
  pe: "var(--tree-padding-inline)",
  py: "var(--tree-padding-block)",
  focusVisibleRing: "inside",
  focusRingColor: "border.emphasized",
  focusRingWidth: "2px",
  "&:hover, &:focus-visible": {
    bg: "bg.muted"
  },
  _disabled: {
    layerStyle: "disabled"
  }
}), no = Ee({
  flex: "1"
}), so = Ee({
  _selected: {
    bg: "colorPalette.subtle",
    color: "colorPalette.fg"
  }
}), lo = Ee({
  _selected: {
    layerStyle: "fill.solid"
  }
}), Cd = A({
  slots: Ho.keys(),
  className: "chakra-tree-view",
  base: {
    root: {
      width: "full",
      display: "flex",
      flexDirection: "column",
      gap: "2"
    },
    tree: {
      display: "flex",
      flexDirection: "column",
      "--tree-item-gap": "spacing.2",
      _icon: {
        boxSize: "var(--tree-icon-size)"
      }
    },
    label: {
      fontWeight: "medium",
      textStyle: "sm"
    },
    branch: {
      position: "relative"
    },
    branchContent: {
      position: "relative"
    },
    branchIndentGuide: {
      height: "100%",
      width: "1px",
      bg: "border",
      position: "absolute",
      "--tree-depth": "calc(var(--depth) - 1)",
      "--tree-indentation-offset": "calc(var(--tree-indentation) * var(--tree-depth))",
      "--tree-offset": "calc(var(--tree-padding-inline) + var(--tree-indentation-offset))",
      "--tree-icon-offset": "calc(var(--tree-icon-size) * 0.5 * var(--depth))",
      insetInlineStart: "calc(var(--tree-offset) + var(--tree-icon-offset))",
      zIndex: "1"
    },
    branchIndicator: {
      color: "fg.muted",
      transformOrigin: "center",
      transitionDuration: "normal",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      _open: {
        transform: "rotate(90deg)"
      }
    },
    branchTrigger: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    branchControl: ao,
    item: ao,
    itemText: no,
    branchText: no,
    nodeCheckbox: {
      display: "inline-flex"
    }
  },
  variants: {
    size: {
      md: {
        tree: {
          textStyle: "sm",
          "--tree-indentation": "spacing.4",
          "--tree-padding-inline": "spacing.3",
          "--tree-padding-block": "spacing.1.5",
          "--tree-icon-size": "spacing.4"
        }
      },
      sm: {
        tree: {
          textStyle: "sm",
          "--tree-indentation": "spacing.4",
          "--tree-padding-inline": "spacing.3",
          "--tree-padding-block": "spacing.1",
          "--tree-icon-size": "spacing.3"
        }
      },
      xs: {
        tree: {
          textStyle: "xs",
          "--tree-indentation": "spacing.4",
          "--tree-padding-inline": "spacing.2",
          "--tree-padding-block": "spacing.1",
          "--tree-icon-size": "spacing.3"
        }
      }
    },
    variant: {
      subtle: {
        branchControl: so,
        item: so
      },
      solid: {
        branchControl: lo,
        item: lo
      }
    },
    animateContent: {
      true: {
        branchContent: {
          _open: {
            animationName: "expand-height, fade-in",
            animationDuration: "moderate"
          },
          _closed: {
            animationName: "collapse-height, fade-out",
            animationDuration: "moderate"
          }
        }
      }
    }
  },
  defaultVariants: {
    size: "md",
    variant: "subtle"
  }
}), Rd = {
  accordion: _c,
  actionBar: Cc,
  alert: Rc,
  avatar: Pc,
  blockquote: Tc,
  breadcrumb: Ic,
  card: Wc,
  carousel: Ec,
  checkbox: Ac,
  checkboxCard: jc,
  codeBlock: Nc,
  collapsible: Oc,
  dataList: Bc,
  datePicker: Vc,
  dialog: Lc,
  drawer: Fc,
  editable: Hc,
  emptyState: Gc,
  field: Yc,
  fieldset: qc,
  fileUpload: Uc,
  hoverCard: Xc,
  list: Kc,
  listbox: Jc,
  menu: Zc,
  nativeSelect: ed,
  numberInput: td,
  pinInput: od,
  popover: id,
  progress: ad,
  progressCircle: nd,
  radioCard: ld,
  radioGroup: cd,
  ratingGroup: dd,
  scrollArea: ud,
  segmentGroup: pd,
  select: Je,
  combobox: Dc,
  slider: gd,
  splitter: fd,
  stat: md,
  steps: bd,
  switch: vd,
  table: xd,
  tabs: yd,
  tag: kd,
  tagsInput: Sd,
  toast: zd,
  tooltip: _d,
  status: hd,
  timeline: wd,
  colorPicker: $c,
  qrCode: sd,
  treeView: Cd,
  marquee: Qc
}, Pd = Yn({
  "2xs": { value: { fontSize: "2xs", lineHeight: "0.75rem" } },
  xs: { value: { fontSize: "xs", lineHeight: "1rem" } },
  sm: { value: { fontSize: "sm", lineHeight: "1.25rem" } },
  md: { value: { fontSize: "md", lineHeight: "1.5rem" } },
  lg: { value: { fontSize: "lg", lineHeight: "1.75rem" } },
  xl: { value: { fontSize: "xl", lineHeight: "1.875rem" } },
  "2xl": { value: { fontSize: "2xl", lineHeight: "2rem" } },
  "3xl": { value: { fontSize: "3xl", lineHeight: "2.375rem" } },
  "4xl": {
    value: {
      fontSize: "4xl",
      lineHeight: "2.75rem",
      letterSpacing: "-0.025em"
    }
  },
  "5xl": {
    value: {
      fontSize: "5xl",
      lineHeight: "3.75rem",
      letterSpacing: "-0.025em"
    }
  },
  "6xl": {
    value: { fontSize: "6xl", lineHeight: "4.5rem", letterSpacing: "-0.025em" }
  },
  "7xl": {
    value: {
      fontSize: "7xl",
      lineHeight: "5.75rem",
      letterSpacing: "-0.025em"
    }
  },
  none: {
    value: {}
  },
  label: {
    value: {
      fontSize: "sm",
      lineHeight: "1.25rem",
      fontWeight: "medium"
    }
  }
}), Td = le.animations({
  spin: { value: "spin 1s linear infinite" },
  ping: { value: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite" },
  pulse: { value: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" },
  bounce: { value: "bounce 1s infinite" }
}), Id = le.aspectRatios({
  square: { value: "1 / 1" },
  landscape: { value: "4 / 3" },
  portrait: { value: "3 / 4" },
  wide: { value: "16 / 9" },
  ultrawide: { value: "18 / 5" },
  golden: { value: "1.618 / 1" }
}), Wd = le.blurs({
  none: { value: " " },
  sm: { value: "4px" },
  md: { value: "8px" },
  lg: { value: "12px" },
  xl: { value: "16px" },
  "2xl": { value: "24px" },
  "3xl": { value: "40px" },
  "4xl": { value: "64px" }
}), Ed = le.borders({
  xs: { value: "0.5px solid" },
  sm: { value: "1px solid" },
  md: { value: "2px solid" },
  lg: { value: "4px solid" },
  xl: { value: "8px solid" }
}), Ad = le.colors({
  transparent: { value: "transparent" },
  current: { value: "currentColor" },
  black: { value: "#09090B" },
  white: { value: "#FFFFFF" },
  whiteAlpha: {
    50: { value: "rgba(255, 255, 255, 0.04)" },
    100: { value: "rgba(255, 255, 255, 0.06)" },
    200: { value: "rgba(255, 255, 255, 0.08)" },
    300: { value: "rgba(255, 255, 255, 0.16)" },
    400: { value: "rgba(255, 255, 255, 0.24)" },
    500: { value: "rgba(255, 255, 255, 0.36)" },
    600: { value: "rgba(255, 255, 255, 0.48)" },
    700: { value: "rgba(255, 255, 255, 0.64)" },
    800: { value: "rgba(255, 255, 255, 0.80)" },
    900: { value: "rgba(255, 255, 255, 0.92)" },
    950: { value: "rgba(255, 255, 255, 0.95)" }
  },
  blackAlpha: {
    50: { value: "rgba(0, 0, 0, 0.04)" },
    100: { value: "rgba(0, 0, 0, 0.06)" },
    200: { value: "rgba(0, 0, 0, 0.08)" },
    300: { value: "rgba(0, 0, 0, 0.16)" },
    400: { value: "rgba(0, 0, 0, 0.24)" },
    500: { value: "rgba(0, 0, 0, 0.36)" },
    600: { value: "rgba(0, 0, 0, 0.48)" },
    700: { value: "rgba(0, 0, 0, 0.64)" },
    800: { value: "rgba(0, 0, 0, 0.80)" },
    900: { value: "rgba(0, 0, 0, 0.92)" },
    950: { value: "rgba(0, 0, 0, 0.95)" }
  },
  gray: {
    50: { value: "#fafafa" },
    100: { value: "#f4f4f5" },
    200: { value: "#e4e4e7" },
    300: { value: "#d4d4d8" },
    400: { value: "#a1a1aa" },
    500: { value: "#71717a" },
    600: { value: "#52525b" },
    700: { value: "#3f3f46" },
    800: { value: "#27272a" },
    900: { value: "#18181b" },
    950: { value: "#111111" }
  },
  red: {
    50: { value: "#fef2f2" },
    100: { value: "#fee2e2" },
    200: { value: "#fecaca" },
    300: { value: "#fca5a5" },
    400: { value: "#f87171" },
    500: { value: "#ef4444" },
    600: { value: "#dc2626" },
    700: { value: "#991919" },
    800: { value: "#511111" },
    900: { value: "#300c0c" },
    950: { value: "#1f0808" }
  },
  orange: {
    50: { value: "#fff7ed" },
    100: { value: "#ffedd5" },
    200: { value: "#fed7aa" },
    300: { value: "#fdba74" },
    400: { value: "#fb923c" },
    500: { value: "#f97316" },
    600: { value: "#ea580c" },
    700: { value: "#92310a" },
    800: { value: "#6c2710" },
    900: { value: "#3b1106" },
    950: { value: "#220a04" }
  },
  yellow: {
    50: { value: "#fefce8" },
    100: { value: "#fef9c3" },
    200: { value: "#fef08a" },
    300: { value: "#fde047" },
    400: { value: "#facc15" },
    500: { value: "#eab308" },
    600: { value: "#ca8a04" },
    700: { value: "#845209" },
    800: { value: "#713f12" },
    900: { value: "#422006" },
    950: { value: "#281304" }
  },
  green: {
    50: { value: "#f0fdf4" },
    100: { value: "#dcfce7" },
    200: { value: "#bbf7d0" },
    300: { value: "#86efac" },
    400: { value: "#4ade80" },
    500: { value: "#22c55e" },
    600: { value: "#16a34a" },
    700: { value: "#116932" },
    800: { value: "#124a28" },
    900: { value: "#042713" },
    950: { value: "#03190c" }
  },
  teal: {
    50: { value: "#f0fdfa" },
    100: { value: "#ccfbf1" },
    200: { value: "#99f6e4" },
    300: { value: "#5eead4" },
    400: { value: "#2dd4bf" },
    500: { value: "#14b8a6" },
    600: { value: "#0d9488" },
    700: { value: "#0c5d56" },
    800: { value: "#114240" },
    900: { value: "#032726" },
    950: { value: "#021716" }
  },
  blue: {
    50: { value: "#eff6ff" },
    100: { value: "#dbeafe" },
    200: { value: "#bfdbfe" },
    300: { value: "#a3cfff" },
    400: { value: "#60a5fa" },
    500: { value: "#3b82f6" },
    600: { value: "#2563eb" },
    700: { value: "#173da6" },
    800: { value: "#1a3478" },
    900: { value: "#14204a" },
    950: { value: "#0c142e" }
  },
  cyan: {
    50: { value: "#ecfeff" },
    100: { value: "#cffafe" },
    200: { value: "#a5f3fc" },
    300: { value: "#67e8f9" },
    400: { value: "#22d3ee" },
    500: { value: "#06b6d4" },
    600: { value: "#0891b2" },
    700: { value: "#0c5c72" },
    800: { value: "#134152" },
    900: { value: "#072a38" },
    950: { value: "#051b24" }
  },
  purple: {
    50: { value: "#faf5ff" },
    100: { value: "#f3e8ff" },
    200: { value: "#e9d5ff" },
    300: { value: "#d8b4fe" },
    400: { value: "#c084fc" },
    500: { value: "#a855f7" },
    600: { value: "#9333ea" },
    700: { value: "#641ba3" },
    800: { value: "#4a1772" },
    900: { value: "#2f0553" },
    950: { value: "#1a032e" }
  },
  pink: {
    50: { value: "#fdf2f8" },
    100: { value: "#fce7f3" },
    200: { value: "#fbcfe8" },
    300: { value: "#f9a8d4" },
    400: { value: "#f472b6" },
    500: { value: "#ec4899" },
    600: { value: "#db2777" },
    700: { value: "#a41752" },
    800: { value: "#6d0e34" },
    900: { value: "#45061f" },
    950: { value: "#2c0514" }
  }
}), jd = le.cursor({
  button: { value: "pointer" },
  checkbox: { value: "default" },
  disabled: { value: "not-allowed" },
  menuitem: { value: "default" },
  option: { value: "default" },
  radio: { value: "default" },
  slider: { value: "default" },
  switch: { value: "pointer" }
}), Nd = le.durations({
  fastest: { value: "50ms" },
  faster: { value: "100ms" },
  fast: { value: "150ms" },
  moderate: { value: "200ms" },
  slow: { value: "300ms" },
  slower: { value: "400ms" },
  slowest: { value: "500ms" }
}), Od = le.easings({
  "ease-in": { value: "cubic-bezier(0.42, 0, 1, 1)" },
  "ease-out": { value: "cubic-bezier(0, 0, 0.58, 1)" },
  "ease-in-out": { value: "cubic-bezier(0.42, 0, 0.58, 1)" },
  "ease-in-smooth": { value: "cubic-bezier(0.32, 0.72, 0, 1)" }
}), $d = le.fontSizes({
  "2xs": { value: "0.625rem" },
  xs: { value: "0.75rem" },
  sm: { value: "0.875rem" },
  md: { value: "1rem" },
  lg: { value: "1.125rem" },
  xl: { value: "1.25rem" },
  "2xl": { value: "1.5rem" },
  "3xl": { value: "1.875rem" },
  "4xl": { value: "2.25rem" },
  "5xl": { value: "3rem" },
  "6xl": { value: "3.75rem" },
  "7xl": { value: "4.5rem" },
  "8xl": { value: "6rem" },
  "9xl": { value: "8rem" }
}), Dd = le.fontWeights({
  thin: { value: "100" },
  extralight: { value: "200" },
  light: { value: "300" },
  normal: { value: "400" },
  medium: { value: "500" },
  semibold: { value: "600" },
  bold: { value: "700" },
  extrabold: { value: "800" },
  black: { value: "900" }
}), co = '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"', Bd = le.fonts({
  heading: {
    value: `Inter, ${co}`
  },
  body: {
    value: `Inter, ${co}`
  },
  mono: {
    value: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  }
}), Md = Hn({
  spin: {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" }
  },
  pulse: {
    "50%": { opacity: "0.5" }
  },
  ping: {
    "75%, 100%": {
      transform: "scale(2)",
      opacity: "0"
    }
  },
  bounce: {
    "0%, 100%": {
      transform: "translateY(-25%)",
      animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
    },
    "50%": {
      transform: "none",
      animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
    }
  },
  "bg-position": {
    from: { backgroundPosition: "var(--animate-from, 1rem) 0" },
    to: { backgroundPosition: "var(--animate-to, 0) 0" }
  },
  position: {
    from: {
      insetInlineStart: "var(--animate-from-x)",
      insetBlockStart: "var(--animate-from-y)"
    },
    to: {
      insetInlineStart: "var(--animate-to-x)",
      insetBlockStart: "var(--animate-to-y)"
    }
  },
  "circular-progress": {
    "0%": {
      strokeDasharray: "1, 400",
      strokeDashoffset: "0"
    },
    "50%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-100%"
    },
    "100%": {
      strokeDasharray: "400, 400",
      strokeDashoffset: "-260%"
    }
  },
  // collapse
  "expand-height": {
    from: { height: "var(--collapsed-height, 0)" },
    to: { height: "var(--height)" }
  },
  "collapse-height": {
    from: { height: "var(--height)" },
    to: { height: "var(--collapsed-height, 0)" }
  },
  "expand-width": {
    from: { width: "var(--collapsed-width, 0)" },
    to: { width: "var(--width)" }
  },
  "collapse-width": {
    from: { width: "var(--width)" },
    to: { width: "var(--collapsed-width, 0)" }
  },
  // fade
  "fade-in": {
    from: { opacity: 0 },
    to: { opacity: 1 }
  },
  "fade-out": {
    from: { opacity: 1 },
    to: { opacity: 0 }
  },
  // slide from (full)
  "slide-from-left-full": {
    from: { translate: "-100% 0" },
    to: { translate: "0 0" }
  },
  "slide-from-right-full": {
    from: { translate: "100% 0" },
    to: { translate: "0 0" }
  },
  "slide-from-top-full": {
    from: { translate: "0 -100%" },
    to: { translate: "0 0" }
  },
  "slide-from-bottom-full": {
    from: { translate: "0 100%" },
    to: { translate: "0 0" }
  },
  // slide to (full)
  "slide-to-left-full": {
    from: { translate: "0 0" },
    to: { translate: "-100% 0" }
  },
  "slide-to-right-full": {
    from: { translate: "0 0" },
    to: { translate: "100% 0" }
  },
  "slide-to-top-full": {
    from: { translate: "0 0" },
    to: { translate: "0 -100%" }
  },
  "slide-to-bottom-full": {
    from: { translate: "0 0" },
    to: { translate: "0 100%" }
  },
  // slide from
  "slide-from-top": {
    "0%": { translate: "0 -0.5rem" },
    to: { translate: "0" }
  },
  "slide-from-bottom": {
    "0%": { translate: "0 0.5rem" },
    to: { translate: "0" }
  },
  "slide-from-left": {
    "0%": { translate: "-0.5rem 0" },
    to: { translate: "0" }
  },
  "slide-from-right": {
    "0%": { translate: "0.5rem 0" },
    to: { translate: "0" }
  },
  // slide to
  "slide-to-top": {
    "0%": { translate: "0" },
    to: { translate: "0 -0.5rem" }
  },
  "slide-to-bottom": {
    "0%": { translate: "0" },
    to: { translate: "0 0.5rem" }
  },
  "slide-to-left": {
    "0%": { translate: "0" },
    to: { translate: "-0.5rem 0" }
  },
  "slide-to-right": {
    "0%": { translate: "0" },
    to: { translate: "0.5rem 0" }
  },
  // scale
  "scale-in": {
    from: { scale: "0.95" },
    to: { scale: "1" }
  },
  "scale-out": {
    from: { scale: "1" },
    to: { scale: "0.95" }
  },
  // marquee
  marqueeX: {
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(var(--marquee-translate))" }
  },
  marqueeY: {
    from: { transform: "translateY(0%)" },
    to: { transform: "translateY(var(--marquee-translate))" }
  }
}), Vd = le.letterSpacings({
  tighter: { value: "-0.05em" },
  tight: { value: "-0.025em" },
  wide: { value: "0.025em" },
  wider: { value: "0.05em" },
  widest: { value: "0.1em" }
}), Ld = le.lineHeights({
  shorter: { value: 1.25 },
  short: { value: 1.375 },
  moderate: { value: 1.5 },
  tall: { value: 1.625 },
  taller: { value: 2 }
}), Fd = le.radii({
  none: { value: "0" },
  "2xs": { value: "0.0625rem" },
  xs: { value: "0.125rem" },
  sm: { value: "0.25rem" },
  md: { value: "0.375rem" },
  lg: { value: "0.5rem" },
  xl: { value: "0.75rem" },
  "2xl": { value: "1rem" },
  "3xl": { value: "1.5rem" },
  "4xl": { value: "2rem" },
  full: { value: "9999px" }
}), Ni = le.spacing({
  0.5: { value: "0.125rem" },
  1: { value: "0.25rem" },
  1.5: { value: "0.375rem" },
  2: { value: "0.5rem" },
  2.5: { value: "0.625rem" },
  3: { value: "0.75rem" },
  3.5: { value: "0.875rem" },
  4: { value: "1rem" },
  4.5: { value: "1.125rem" },
  5: { value: "1.25rem" },
  6: { value: "1.5rem" },
  7: { value: "1.75rem" },
  8: { value: "2rem" },
  9: { value: "2.25rem" },
  10: { value: "2.5rem" },
  11: { value: "2.75rem" },
  12: { value: "3rem" },
  14: { value: "3.5rem" },
  16: { value: "4rem" },
  20: { value: "5rem" },
  24: { value: "6rem" },
  28: { value: "7rem" },
  32: { value: "8rem" },
  36: { value: "9rem" },
  40: { value: "10rem" },
  44: { value: "11rem" },
  48: { value: "12rem" },
  52: { value: "13rem" },
  56: { value: "14rem" },
  60: { value: "15rem" },
  64: { value: "16rem" },
  72: { value: "18rem" },
  80: { value: "20rem" },
  96: { value: "24rem" }
}), Hd = le.sizes({
  "3xs": { value: "14rem" },
  "2xs": { value: "16rem" },
  xs: { value: "20rem" },
  sm: { value: "24rem" },
  md: { value: "28rem" },
  lg: { value: "32rem" },
  xl: { value: "36rem" },
  "2xl": { value: "42rem" },
  "3xl": { value: "48rem" },
  "4xl": { value: "56rem" },
  "5xl": { value: "64rem" },
  "6xl": { value: "72rem" },
  "7xl": { value: "80rem" },
  "8xl": { value: "90rem" }
}), Gd = le.sizes({
  max: { value: "max-content" },
  min: { value: "min-content" },
  fit: { value: "fit-content" },
  prose: { value: "60ch" },
  full: { value: "100%" },
  dvh: { value: "100dvh" },
  svh: { value: "100svh" },
  lvh: { value: "100lvh" },
  dvw: { value: "100dvw" },
  svw: { value: "100svw" },
  lvw: { value: "100lvw" },
  vw: { value: "100vw" },
  vh: { value: "100vh" }
}), Yd = le.sizes({
  "1/2": { value: "50%" },
  "1/3": { value: "33.333333%" },
  "2/3": { value: "66.666667%" },
  "1/4": { value: "25%" },
  "3/4": { value: "75%" },
  "1/5": { value: "20%" },
  "2/5": { value: "40%" },
  "3/5": { value: "60%" },
  "4/5": { value: "80%" },
  "1/6": { value: "16.666667%" },
  "2/6": { value: "33.333333%" },
  "3/6": { value: "50%" },
  "4/6": { value: "66.666667%" },
  "5/6": { value: "83.333333%" },
  "1/12": { value: "8.333333%" },
  "2/12": { value: "16.666667%" },
  "3/12": { value: "25%" },
  "4/12": { value: "33.333333%" },
  "5/12": { value: "41.666667%" },
  "6/12": { value: "50%" },
  "7/12": { value: "58.333333%" },
  "8/12": { value: "66.666667%" },
  "9/12": { value: "75%" },
  "10/12": { value: "83.333333%" },
  "11/12": { value: "91.666667%" }
}), qd = le.sizes({
  ...Hd,
  ...Ni,
  ...Yd,
  ...Gd
}), Ud = le.zIndex({
  hide: { value: -1 },
  base: { value: 0 },
  docked: { value: 10 },
  dropdown: { value: 1e3 },
  sticky: { value: 1100 },
  banner: { value: 1200 },
  overlay: { value: 1300 },
  modal: { value: 1400 },
  popover: { value: 1500 },
  skipNav: { value: 1600 },
  toast: { value: 1700 },
  tooltip: { value: 1800 },
  max: { value: 2147483647 }
}), Xd = {
  aspectRatios: Id,
  animations: Td,
  blurs: Wd,
  borders: Ed,
  colors: Ad,
  durations: Nd,
  easings: Od,
  fonts: Bd,
  fontSizes: $d,
  fontWeights: Dd,
  letterSpacings: Vd,
  lineHeights: Ld,
  radii: Fd,
  spacing: Ni,
  sizes: qd,
  zIndex: Ud,
  cursor: jd
}, Kd = {
  colors: Dl,
  shadows: Ml,
  radii: Bl
}, Jd = "chakra", Qd = ":where(html, .chakra-theme)", Zd = di({
  preflight: !0,
  cssVarsPrefix: Jd,
  cssVarsRoot: Qd,
  globalCss: vl,
  theme: {
    breakpoints: bl,
    keyframes: Md,
    tokens: Xd,
    semanticTokens: Kd,
    recipes: $l,
    slotRecipes: Rd,
    textStyles: Pd,
    layerStyles: xl,
    animationStyles: yl
  }
}), Oi = li(rs, Zd);
Wi(Oi);
const $i = Ne("div", {
  base: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  variants: {
    axis: {
      horizontal: {
        insetStart: "50%",
        translate: "-50%",
        _rtl: {
          translate: "50%"
        }
      },
      vertical: {
        top: "50%",
        translate: "0 -50%"
      },
      both: {
        insetStart: "50%",
        top: "50%",
        translate: "-50% -50%",
        _rtl: {
          translate: "50% -50%"
        }
      }
    }
  },
  defaultVariants: {
    axis: "both"
  }
});
$i.displayName = "AbsoluteCenter";
const eu = (e) => e ? "" : void 0, { withContext: tu } = it({
  key: "spinner"
}), Di = tu("span");
Di.displayName = "Spinner";
const Bi = S.forwardRef(
  function(t, r) {
    const {
      spinner: o = /* @__PURE__ */ y.jsx(Di, { size: "inherit", borderWidth: "0.125em", color: "inherit" }),
      spinnerPlacement: i = "start",
      children: a,
      text: n,
      visible: l = !0,
      ...c
    } = t;
    return l ? n ? /* @__PURE__ */ y.jsxs(Xe, { ref: r, display: "contents", ...c, children: [
      i === "start" && o,
      n,
      i === "end" && o
    ] }) : o ? /* @__PURE__ */ y.jsxs(Xe, { ref: r, display: "contents", ...c, children: [
      /* @__PURE__ */ y.jsx($i, { display: "inline-flex", children: o }),
      /* @__PURE__ */ y.jsx(Xe, { visibility: "hidden", display: "contents", children: a })
    ] }) : /* @__PURE__ */ y.jsx(Xe, { ref: r, display: "contents", ...c, children: a }) : a;
  }
);
Bi.displayName = "Loader";
const { useRecipeResult: ru, usePropsContext: ou } = it(
  { key: "button" }
), je = S.forwardRef(
  function(t, r) {
    const o = ou(), i = S.useMemo(
      () => rr(o, t),
      [o, t]
    ), a = ru(i), {
      loading: n,
      loadingText: l,
      children: c,
      spinner: u,
      spinnerPlacement: d,
      ...p
    } = a.props;
    return /* @__PURE__ */ y.jsx(
      Ne.button,
      {
        type: "button",
        ref: r,
        ...p,
        "data-loading": eu(n),
        disabled: n || p.disabled,
        className: We(a.className, i.className),
        css: [a.styles, i.css],
        children: !i.asChild && n ? /* @__PURE__ */ y.jsx(
          Bi,
          {
            spinner: u,
            text: l,
            spinnerPlacement: d,
            children: c
          }
        ) : c
      }
    );
  }
);
je.displayName = "Button";
function iu(e) {
  const { gap: t, direction: r } = e, o = {
    column: {
      marginY: t,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    "column-reverse": {
      marginY: t,
      marginX: 0,
      borderInlineStartWidth: 0,
      borderTopWidth: "1px"
    },
    row: {
      marginX: t,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    },
    "row-reverse": {
      marginX: t,
      marginY: 0,
      borderInlineStartWidth: "1px",
      borderTopWidth: 0
    }
  };
  return {
    "&": si(r, (i) => o[i])
  };
}
function au(e) {
  return S.Children.toArray(e).filter(
    (t) => S.isValidElement(t)
  );
}
const Mi = S.forwardRef(
  function(t, r) {
    const {
      direction: o = "column",
      align: i,
      justify: a,
      gap: n = "0.5rem",
      wrap: l,
      children: c,
      separator: u,
      className: d,
      ...p
    } = t, g = S.useMemo(
      () => iu({ gap: n, direction: o }),
      [n, o]
    ), _ = S.useMemo(() => S.isValidElement(u) ? au(c).map((k, x, w) => {
      const P = typeof k.key < "u" ? k.key : x, j = u, C = S.cloneElement(j, {
        css: [g, j.props.css]
      });
      return /* @__PURE__ */ y.jsxs(S.Fragment, { children: [
        k,
        x === w.length - 1 ? null : C
      ] }, P);
    }) : c, [c, u, g]);
    return /* @__PURE__ */ y.jsx(
      Ne.div,
      {
        ref: r,
        display: "flex",
        alignItems: i,
        justifyContent: a,
        flexDirection: o,
        flexWrap: l,
        gap: u ? void 0 : n,
        className: We("chakra-stack", d),
        ...p,
        children: _
      }
    );
  }
);
Mi.displayName = "Stack";
const Ie = S.forwardRef(
  function(t, r) {
    const {
      direction: o,
      align: i,
      justify: a,
      wrap: n,
      basis: l,
      grow: c,
      shrink: u,
      inline: d,
      ...p
    } = t;
    return /* @__PURE__ */ y.jsx(
      Ne.div,
      {
        ref: r,
        ...p,
        css: {
          display: d ? "inline-flex" : "flex",
          flexDirection: o,
          alignItems: i,
          justifyContent: a,
          flexWrap: n,
          flexBasis: l,
          flexGrow: c,
          flexShrink: u,
          ...t.css
        }
      }
    );
  }
);
Ie.displayName = "Flex";
const Gt = S.forwardRef(
  function(t, r) {
    return /* @__PURE__ */ y.jsx(Mi, { align: "center", ...t, direction: "row", ref: r });
  }
);
Gt.displayName = "HStack";
const { withContext: nu } = it({
  key: "input"
}), su = nu(Bo), Yt = [
  "#4fc3f7",
  "#81c784",
  "#ffb74d",
  "#e57373",
  "#ba68c8",
  "#4dd0e1",
  "#aed581",
  "#ff8a65",
  "#f06292",
  "#7986cb"
], lu = [10, 25, 50, 100, 0];
function Vi(e) {
  const t = e.split("_");
  return t.length <= 1 ? e : t[0] === "mdi" ? "mdi" : e.startsWith("wisereport") || e.startsWith("pdf_") || e.startsWith("report_") ? "wisereport" : e.startsWith("dart") ? "dart" : e.startsWith("news") ? "news" : t[0];
}
function cu(e) {
  const t = [...new Set(e.map((o) => Vi(o.dag_id)))].sort(), r = {};
  return t.forEach((o, i) => {
    r[o] = Yt[i % Yt.length];
  }), r;
}
function uo(e) {
  const t = new Date(e);
  return t.getHours() * 60 + t.getMinutes() + t.getSeconds() / 60;
}
function lt(e) {
  const t = Math.floor(e / 60), r = Math.floor(e % 60);
  return `${String(t).padStart(2, "0")}:${String(r).padStart(2, "0")}`;
}
function qe(e) {
  return e.reduce((t, r) => t + r, 0) / e.length;
}
function Nt(e) {
  const t = [...e].sort((o, i) => o - i), r = Math.floor(t.length / 2);
  return t.length % 2 ? t[r] : (t[r - 1] + t[r]) / 2;
}
function du(e) {
  const t = [], r = [], o = [];
  for (const i of e)
    !i.start_date || !i.end_date || (t.push(uo(i.start_date)), r.push(uo(i.end_date)), o.push(
      (new Date(i.end_date).getTime() - new Date(i.start_date).getTime()) / 6e4
    ));
  return t.length === 0 ? null : {
    avg_start: lt(qe(t)),
    avg_end: lt(qe(r)),
    median_start: lt(Nt(t)),
    median_end: lt(Nt(r)),
    avg_duration_min: Math.round(qe(o) * 10) / 10,
    median_duration_min: Math.round(Nt(o) * 10) / 10,
    display_start: Math.round(qe(t) * 10) / 10,
    display_end: Math.round(qe(r) * 10) / 10,
    run_count: t.length
  };
}
const uu = () => {
  const [e, t] = S.useState([]), [r, o] = S.useState("mean"), [i, a] = S.useState(50), [n, l] = S.useState(!0), [c, u] = S.useState(null), [d, p] = S.useState(""), [g, _] = S.useState(null), [k, x] = S.useState(!1), [w, P] = S.useState(null), j = S.useRef(null), [C, N] = S.useState(1200), v = S.useCallback(async () => {
    l(!0), u(null);
    try {
      const h = await fetch("/api/v2/dags?only_active=true&paused=false");
      if (!h.ok) throw new Error(`Dags API: ${h.status}`);
      const T = (await h.json()).dags || [], f = new URLSearchParams({
        state: "success",
        order_by: "-start_date"
      });
      i > 0 && f.set("limit", String(i));
      const m = T.map(async (q) => {
        try {
          const ie = await fetch(
            `/api/v2/dags/${q.dag_id}/dagRuns?${f}`
          );
          if (!ie.ok) return { dag_id: q.dag_id, runs: [] };
          const Pe = await ie.json();
          return { dag_id: q.dag_id, runs: Pe.dag_runs || [] };
        } catch {
          return { dag_id: q.dag_id, runs: [] };
        }
      }), F = await Promise.all(m), H = {};
      for (const q of T)
        H[q.dag_id] = (q.tags || []).map(
          (ie) => typeof ie == "string" ? ie : ie.name
        );
      const J = [];
      for (const { dag_id: q, runs: ie } of F) {
        const Pe = du(ie);
        Pe && J.push({ dag_id: q, tags: H[q] || [], ...Pe });
      }
      J.sort((q, ie) => q.display_start - ie.display_start), t(J);
    } catch (h) {
      u(h.message);
    } finally {
      l(!1);
    }
  }, [i]);
  S.useEffect(() => {
    v();
  }, [v]), S.useEffect(() => {
    const h = j.current;
    if (!h) return;
    const R = new ResizeObserver((T) => {
      for (const f of T)
        N(f.contentRect.width);
    });
    return R.observe(h), N(h.clientWidth), () => R.disconnect();
  }, []);
  const D = cu(e), z = S.useMemo(() => {
    const h = {};
    for (const R of e)
      for (const T of R.tags)
        h[T] = (h[T] || 0) + 1;
    return Object.entries(h).sort((R, T) => T[1] - R[1]).map(([R]) => R);
  }, [e]), I = 12, W = k ? z : z.slice(0, I), B = S.useMemo(() => {
    let h = e;
    if (g !== null && (h = h.filter(
      (R) => R.tags.some((T) => g.has(T))
    )), d.trim()) {
      const R = d.trim().toLowerCase();
      h = h.filter(
        (T) => T.dag_id.toLowerCase().includes(R) || T.tags.some((f) => f.toLowerCase().includes(R))
      );
    }
    return h;
  }, [e, g, d]), G = S.useMemo(() => B.map((h) => ({
    ...h,
    display_start: r === "mean" ? parseFloat(h.avg_start.split(":")[0]) * 60 + parseFloat(h.avg_start.split(":")[1]) : parseFloat(h.median_start.split(":")[0]) * 60 + parseFloat(h.median_start.split(":")[1]),
    display_end: r === "mean" ? parseFloat(h.avg_end.split(":")[0]) * 60 + parseFloat(h.avg_end.split(":")[1]) : parseFloat(h.median_end.split(":")[0]) * 60 + parseFloat(h.median_end.split(":")[1])
  })), [B, r]), L = (h) => {
    _((R) => {
      if (R === null)
        return /* @__PURE__ */ new Set([h]);
      const T = new Set(R);
      return T.has(h) ? (T.delete(h), T.size === 0 ? null : T) : (T.add(h), T);
    });
  }, Q = 28, ue = 3, Y = 300, oe = 20, ce = 36, we = 16, M = Math.max(600, C - Y - oe), Z = C, s = ce + G.length * (Q + ue) + we, b = (h) => {
    const T = h.target.getAttribute("data-idx");
    if (T === null) {
      P(null);
      return;
    }
    const f = G[parseInt(T)];
    if (!f) {
      P(null);
      return;
    }
    P({ dag: f, x: h.clientX, y: h.clientY });
  }, O = () => P(null), $ = g !== null || d.trim().length > 0;
  return /* @__PURE__ */ y.jsxs(Ue, { p: 4, ref: j, children: [
    /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", align: "center", mb: 3, wrap: "wrap", gap: 3, children: [
      /* @__PURE__ */ y.jsx(Ro, { size: "lg", children: "Dag Gantt Chart" }),
      /* @__PURE__ */ y.jsxs(Gt, { gap: 2, children: [
        /* @__PURE__ */ y.jsx(ae, { fontSize: "sm", color: "fg.muted", children: "Metric" }),
        /* @__PURE__ */ y.jsx(je, { size: "sm", variant: r === "mean" ? "solid" : "outline", colorPalette: "blue", onClick: () => o("mean"), children: "Mean" }),
        /* @__PURE__ */ y.jsx(je, { size: "sm", variant: r === "median" ? "solid" : "outline", colorPalette: "blue", onClick: () => o("median"), children: "Median" }),
        /* @__PURE__ */ y.jsx(ae, { fontSize: "sm", color: "fg.muted", ml: 2, children: "Runs" }),
        lu.map((h) => /* @__PURE__ */ y.jsx(je, { size: "sm", variant: i === h ? "solid" : "outline", colorPalette: "gray", onClick: () => a(h), children: h === 0 ? "All" : h }, h))
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs(Ie, { gap: 3, mb: 2, wrap: "wrap", align: "center", children: [
      /* @__PURE__ */ y.jsxs(ae, { fontSize: "xs", color: "fg.muted", whiteSpace: "nowrap", children: [
        $ ? `${G.length}/` : "",
        e.length,
        " Dags / ",
        G.reduce((h, R) => h + R.run_count, 0),
        " runs"
      ] }),
      Object.entries(D).map(([h, R]) => /* @__PURE__ */ y.jsxs(Gt, { gap: 1, children: [
        /* @__PURE__ */ y.jsx(Ue, { w: "10px", h: "10px", borderRadius: "2px", bg: R }),
        /* @__PURE__ */ y.jsx(ae, { fontSize: "xs", color: "fg.muted", children: h })
      ] }, h)),
      /* @__PURE__ */ y.jsx(
        su,
        {
          size: "sm",
          placeholder: "Search name or tag...",
          value: d,
          onChange: (h) => p(h.target.value),
          maxW: "200px",
          ml: "auto"
        }
      )
    ] }),
    z.length > 0 && /* @__PURE__ */ y.jsxs(Ie, { gap: 1, mb: 2, wrap: "wrap", align: "center", children: [
      /* @__PURE__ */ y.jsx(ae, { fontSize: "xs", color: "fg.muted", mr: 1, children: "Tags" }),
      W.map((h) => {
        const R = g !== null && g.has(h);
        return /* @__PURE__ */ y.jsx(
          je,
          {
            size: "xs",
            variant: R ? "solid" : "outline",
            colorPalette: R ? "blue" : "gray",
            onClick: () => L(h),
            fontWeight: "normal",
            children: h
          },
          h
        );
      }),
      z.length > I && /* @__PURE__ */ y.jsx(
        je,
        {
          size: "xs",
          variant: "ghost",
          onClick: () => x(!k),
          color: "fg.muted",
          children: k ? "Less" : `+${z.length - I} more`
        }
      ),
      $ && /* @__PURE__ */ y.jsx(
        je,
        {
          size: "xs",
          variant: "ghost",
          onClick: () => {
            _(null), p("");
          },
          ml: 1,
          children: "Reset"
        }
      )
    ] }),
    n && /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", textAlign: "center", py: 16, children: "Loading Dag run data..." }),
    c && /* @__PURE__ */ y.jsxs(ae, { color: "red.500", textAlign: "center", py: 8, children: [
      "Failed to load: ",
      c
    ] }),
    !n && !c && G.length > 0 && /* @__PURE__ */ y.jsx(Ue, { overflowX: "auto", children: /* @__PURE__ */ y.jsxs(
      "svg",
      {
        width: Z,
        height: s,
        style: { fontFamily: "inherit" },
        onMouseMove: b,
        onMouseLeave: O,
        children: [
          Array.from({ length: 25 }, (h, R) => {
            const T = Y + R / 24 * M, f = R % 3 === 0;
            return /* @__PURE__ */ y.jsxs("g", { children: [
              /* @__PURE__ */ y.jsx(
                "line",
                {
                  x1: T,
                  y1: ce - 4,
                  x2: T,
                  y2: s - we,
                  stroke: f ? "var(--chakra-colors-border)" : "var(--chakra-colors-border-muted, #e2e8f0)",
                  strokeWidth: f ? 1 : 0.5,
                  opacity: f ? 0.6 : 0.3
                }
              ),
              f && /* @__PURE__ */ y.jsx("text", { x: T, y: ce - 10, textAnchor: "middle", fill: "var(--chakra-colors-fg-muted, #888)", fontSize: 11, children: `${String(R % 24).padStart(2, "0")}:00` })
            ] }, R);
          }),
          G.map((h, R) => {
            const T = ce + R * (Q + ue), f = Y + h.display_start / 1440 * M;
            let m = (h.display_end - h.display_start) / 1440 * M;
            m < 4 && (m = 4);
            const F = D[Vi(h.dag_id)] || Yt[0], H = r === "mean" ? h.avg_duration_min : h.median_duration_min, J = H < 60 ? `${H.toFixed(0)}m` : `${(H / 60).toFixed(1)}h`, q = h.dag_id.length > 38 ? h.dag_id.slice(0, 36) + ".." : h.dag_id;
            return /* @__PURE__ */ y.jsxs("g", { children: [
              /* @__PURE__ */ y.jsx("rect", { "data-idx": R, x: 0, y: T, width: Z, height: Q, fill: "transparent" }),
              /* @__PURE__ */ y.jsx("text", { x: Y - 8, y: T + Q / 2 + 4, textAnchor: "end", fill: "var(--chakra-colors-fg, #333)", fontSize: 12, children: q }),
              /* @__PURE__ */ y.jsx("rect", { "data-idx": R, x: f, y: T + 4, width: m, height: Q - 8, rx: 4, fill: F, opacity: 0.85 }),
              m > 36 && /* @__PURE__ */ y.jsx("text", { x: f + m / 2, y: T + Q / 2 + 4, textAnchor: "middle", fill: "#111", fontSize: 10, fontWeight: 600, children: J })
            ] }, h.dag_id);
          })
        ]
      }
    ) }),
    !n && !c && G.length === 0 && /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", textAlign: "center", py: 16, children: e.length > 0 ? "No Dags match the current filter." : "No successful Dag runs found." }),
    w && /* @__PURE__ */ y.jsxs(
      Ue,
      {
        position: "fixed",
        left: `${w.x + 12}px`,
        top: `${w.y + 12}px`,
        bg: "bg.panel",
        border: "1px solid",
        borderColor: "border",
        borderRadius: "md",
        p: 3,
        shadow: "lg",
        zIndex: 100,
        pointerEvents: "none",
        fontSize: "xs",
        lineHeight: "1.8",
        maxW: "280px",
        children: [
          /* @__PURE__ */ y.jsx(ae, { fontWeight: "bold", color: "blue.400", mb: 1, children: w.dag.dag_id }),
          /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", gap: 4, children: [
            /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", children: "Mean" }),
            /* @__PURE__ */ y.jsxs(ae, { children: [
              w.dag.avg_start,
              " ~ ",
              w.dag.avg_end
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", gap: 4, children: [
            /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", children: "Median" }),
            /* @__PURE__ */ y.jsxs(ae, { children: [
              w.dag.median_start,
              " ~ ",
              w.dag.median_end
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", gap: 4, children: [
            /* @__PURE__ */ y.jsxs(ae, { color: "fg.muted", children: [
              "Duration (",
              r,
              ")"
            ] }),
            /* @__PURE__ */ y.jsxs(ae, { children: [
              (r === "mean" ? w.dag.avg_duration_min : w.dag.median_duration_min).toFixed(1),
              " min"
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", gap: 4, children: [
            /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", children: "Runs" }),
            /* @__PURE__ */ y.jsx(ae, { children: w.dag.run_count })
          ] }),
          w.dag.tags.length > 0 && /* @__PURE__ */ y.jsxs(Ie, { justify: "space-between", gap: 4, children: [
            /* @__PURE__ */ y.jsx(ae, { color: "fg.muted", children: "Tags" }),
            /* @__PURE__ */ y.jsx(ae, { children: w.dag.tags.slice(0, 5).join(", ") })
          ] })
        ]
      }
    )
  ] });
}, pu = Wi(Oi), gu = () => {
  const e = globalThis.ChakraUISystem ?? pu;
  return /* @__PURE__ */ y.jsx(Za, { value: e, children: /* @__PURE__ */ y.jsx(uu, {}) });
};
globalThis.AirflowPlugin = gu;
export {
  gu as default
};
