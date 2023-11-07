var gd = Object.defineProperty;
var yd = (e, t, n) =>
  t in e
    ? gd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var ra = (e, t, n) => (yd(e, typeof t != "symbol" ? t + "" : t, n), n);
function wd(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] },
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function Sd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ms = { exports: {} },
  eo = {},
  js = { exports: {} },
  $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Vr = Symbol.for("react.element"),
  Ed = Symbol.for("react.portal"),
  kd = Symbol.for("react.fragment"),
  xd = Symbol.for("react.strict_mode"),
  Cd = Symbol.for("react.profiler"),
  Pd = Symbol.for("react.provider"),
  _d = Symbol.for("react.context"),
  Rd = Symbol.for("react.forward_ref"),
  Nd = Symbol.for("react.suspense"),
  Ld = Symbol.for("react.memo"),
  Dd = Symbol.for("react.lazy"),
  la = Symbol.iterator;
function zd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (la && e[la]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Os = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Fs = Object.assign,
  Is = {};
function Qn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Os);
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Qn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Us() {}
Us.prototype = Qn.prototype;
function eu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Is),
    (this.updater = n || Os);
}
var tu = (eu.prototype = new Us());
tu.constructor = eu;
Fs(tu, Qn.prototype);
tu.isPureReactComponent = !0;
var oa = Array.isArray,
  As = Object.prototype.hasOwnProperty,
  nu = { current: null },
  $s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bs(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      As.call(t, r) && !$s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), s = 0; s < u; s++) a[s] = arguments[s + 2];
    l.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Vr,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: nu.current,
  };
}
function Td(e, t) {
  return {
    $$typeof: Vr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ru(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Vr;
}
function Md(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ia = /\/+/g;
function _o(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Md("" + e.key)
    : t.toString(36);
}
function vl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Vr:
          case Ed:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + _o(i, 0) : r),
      oa(l)
        ? ((n = ""),
          e != null && (n = e.replace(ia, "$&/") + "/"),
          vl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (ru(l) &&
            (l = Td(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ia, "$&/") + "/") +
                e,
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), oa(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var a = r + _o(o, u);
      i += vl(o, t, n, a, l);
    }
  else if (((a = zd(e)), typeof a == "function"))
    for (e = a.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (a = r + _o(o, u++)), (i += vl(o, t, n, a, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead.",
      ))
    );
  return i;
}
function qr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    vl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function jd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  gl = { transition: null },
  Od = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: gl,
    ReactCurrentOwner: nu,
  };
$.Children = {
  map: qr,
  forEach: function (e, t, n) {
    qr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n,
    );
  },
  count: function (e) {
    var t = 0;
    return (
      qr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      qr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ru(e))
      throw Error(
        "React.Children.only expected to receive a single React element child.",
      );
    return e;
  },
};
$.Component = Qn;
$.Fragment = kd;
$.Profiler = Cd;
$.PureComponent = eu;
$.StrictMode = xd;
$.Suspense = Nd;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Od;
$.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        ".",
    );
  var r = Fs({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = nu.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (a in t)
      As.call(t, a) &&
        !$s.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var s = 0; s < a; s++) u[s] = arguments[s + 2];
    r.children = u;
  }
  return { $$typeof: Vr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
$.createContext = function (e) {
  return (
    (e = {
      $$typeof: _d,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Pd, _context: e }),
    (e.Consumer = e)
  );
};
$.createElement = Bs;
$.createFactory = function (e) {
  var t = Bs.bind(null, e);
  return (t.type = e), t;
};
$.createRef = function () {
  return { current: null };
};
$.forwardRef = function (e) {
  return { $$typeof: Rd, render: e };
};
$.isValidElement = ru;
$.lazy = function (e) {
  return { $$typeof: Dd, _payload: { _status: -1, _result: e }, _init: jd };
};
$.memo = function (e, t) {
  return { $$typeof: Ld, type: e, compare: t === void 0 ? null : t };
};
$.startTransition = function (e) {
  var t = gl.transition;
  gl.transition = {};
  try {
    e();
  } finally {
    gl.transition = t;
  }
};
$.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
$.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
$.useContext = function (e) {
  return Ce.current.useContext(e);
};
$.useDebugValue = function () {};
$.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
$.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
$.useId = function () {
  return Ce.current.useId();
};
$.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
$.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
$.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
$.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
$.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
$.useRef = function (e) {
  return Ce.current.useRef(e);
};
$.useState = function (e) {
  return Ce.current.useState(e);
};
$.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
$.useTransition = function () {
  return Ce.current.useTransition();
};
$.version = "18.2.0";
js.exports = $;
var x = js.exports;
const Vs = Sd(x),
  ri = wd({ __proto__: null, default: Vs }, [x]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Fd = x,
  Id = Symbol.for("react.element"),
  Ud = Symbol.for("react.fragment"),
  Ad = Object.prototype.hasOwnProperty,
  $d = Fd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Bd = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ws(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Ad.call(t, r) && !Bd.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Id,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: $d.current,
  };
}
eo.Fragment = Ud;
eo.jsx = Ws;
eo.jsxs = Ws;
Ms.exports = eo;
var T = Ms.exports,
  li = {},
  Hs = { exports: {} },
  Ae = {},
  Qs = { exports: {} },
  Ks = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(_, F) {
    var I = _.length;
    _.push(F);
    e: for (; 0 < I; ) {
      var q = (I - 1) >>> 1,
        ie = _[q];
      if (0 < l(ie, F)) (_[q] = F), (_[I] = ie), (I = q);
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var F = _[0],
      I = _.pop();
    if (I !== F) {
      _[0] = I;
      e: for (var q = 0, ie = _.length, dn = ie >>> 1; q < dn; ) {
        var ut = 2 * (q + 1) - 1,
          at = _[ut],
          et = ut + 1,
          xt = _[et];
        if (0 > l(at, I))
          et < ie && 0 > l(xt, at)
            ? ((_[q] = xt), (_[et] = I), (q = et))
            : ((_[q] = at), (_[ut] = I), (q = ut));
        else if (et < ie && 0 > l(xt, I)) (_[q] = xt), (_[et] = I), (q = et);
        else break e;
      }
    }
    return F;
  }
  function l(_, F) {
    var I = _.sortIndex - F.sortIndex;
    return I !== 0 ? I : _.id - F.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var a = [],
    s = [],
    p = 1,
    m = null,
    c = 3,
    v = !1,
    w = !1,
    y = !1,
    z = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    f = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(_) {
    for (var F = n(s); F !== null; ) {
      if (F.callback === null) r(s);
      else if (F.startTime <= _)
        r(s), (F.sortIndex = F.expirationTime), t(a, F);
      else break;
      F = n(s);
    }
  }
  function g(_) {
    if (((y = !1), h(_), !w))
      if (n(a) !== null) (w = !0), Gn(C);
      else {
        var F = n(s);
        F !== null && Zn(g, F.startTime - _);
      }
  }
  function C(_, F) {
    (w = !1), y && ((y = !1), d(D), (D = -1)), (v = !0);
    var I = c;
    try {
      for (
        h(F), m = n(a);
        m !== null && (!(m.expirationTime > F) || (_ && !je()));

      ) {
        var q = m.callback;
        if (typeof q == "function") {
          (m.callback = null), (c = m.priorityLevel);
          var ie = q(m.expirationTime <= F);
          (F = e.unstable_now()),
            typeof ie == "function" ? (m.callback = ie) : m === n(a) && r(a),
            h(F);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var dn = !0;
      else {
        var ut = n(s);
        ut !== null && Zn(g, ut.startTime - F), (dn = !1);
      }
      return dn;
    } finally {
      (m = null), (c = I), (v = !1);
    }
  }
  var L = !1,
    R = null,
    D = -1,
    W = 5,
    O = -1;
  function je() {
    return !(e.unstable_now() - O < W);
  }
  function Ht() {
    if (R !== null) {
      var _ = e.unstable_now();
      O = _;
      var F = !0;
      try {
        F = R(!0, _);
      } finally {
        F ? Qt() : ((L = !1), (R = null));
      }
    } else L = !1;
  }
  var Qt;
  if (typeof f == "function")
    Qt = function () {
      f(Ht);
    };
  else if (typeof MessageChannel < "u") {
    var ge = new MessageChannel(),
      Kt = ge.port2;
    (ge.port1.onmessage = Ht),
      (Qt = function () {
        Kt.postMessage(null);
      });
  } else
    Qt = function () {
      z(Ht, 0);
    };
  function Gn(_) {
    (R = _), L || ((L = !0), Qt());
  }
  function Zn(_, F) {
    D = z(function () {
      _(e.unstable_now());
    }, F);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (_) {
      _.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || v || ((w = !0), Gn(C));
    }),
    (e.unstable_forceFrameRate = function (_) {
      0 > _ || 125 < _
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (W = 0 < _ ? Math.floor(1e3 / _) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return c;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (_) {
      switch (c) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = c;
      }
      var I = c;
      c = F;
      try {
        return _();
      } finally {
        c = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (_, F) {
      switch (_) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          _ = 3;
      }
      var I = c;
      c = _;
      try {
        return F();
      } finally {
        c = I;
      }
    }),
    (e.unstable_scheduleCallback = function (_, F, I) {
      var q = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? q + I : q))
          : (I = q),
        _)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = I + ie),
        (_ = {
          id: p++,
          callback: F,
          priorityLevel: _,
          startTime: I,
          expirationTime: ie,
          sortIndex: -1,
        }),
        I > q
          ? ((_.sortIndex = I),
            t(s, _),
            n(a) === null &&
              _ === n(s) &&
              (y ? (d(D), (D = -1)) : (y = !0), Zn(g, I - q)))
          : ((_.sortIndex = ie), t(a, _), w || v || ((w = !0), Gn(C))),
        _
      );
    }),
    (e.unstable_shouldYield = je),
    (e.unstable_wrapCallback = function (_) {
      var F = c;
      return function () {
        var I = c;
        c = F;
        try {
          return _.apply(this, arguments);
        } finally {
          c = I;
        }
      };
    });
})(Ks);
Qs.exports = Ks;
var Vd = Qs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ys = x,
  Ue = Vd;
function k(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Xs = new Set(),
  kr = {};
function sn(e, t) {
  Un(e, t), Un(e + "Capture", t);
}
function Un(e, t) {
  for (kr[e] = t, e = 0; e < t.length; e++) Xs.add(t[e]);
}
var gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  oi = Object.prototype.hasOwnProperty,
  Wd =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ua = {},
  aa = {};
function Hd(e) {
  return oi.call(aa, e)
    ? !0
    : oi.call(ua, e)
    ? !1
    : Wd.test(e)
    ? (aa[e] = !0)
    : ((ua[e] = !0), !1);
}
function Qd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Kd(e, t, n, r) {
  if (t === null || typeof t > "u" || Qd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Pe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new Pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new Pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new Pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new Pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new Pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new Pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new Pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function ou(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, ou);
    ve[t] = new Pe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, ou);
    ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lu, ou);
  ve[t] = new Pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new Pe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1,
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new Pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function iu(e, t, n, r) {
  var l = ve.hasOwnProperty(t) ? ve[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Kd(t, n, l, r) && (n = null),
    r || l === null
      ? Hd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Et = Ys.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  br = Symbol.for("react.element"),
  yn = Symbol.for("react.portal"),
  wn = Symbol.for("react.fragment"),
  uu = Symbol.for("react.strict_mode"),
  ii = Symbol.for("react.profiler"),
  Gs = Symbol.for("react.provider"),
  Zs = Symbol.for("react.context"),
  au = Symbol.for("react.forward_ref"),
  ui = Symbol.for("react.suspense"),
  ai = Symbol.for("react.suspense_list"),
  su = Symbol.for("react.memo"),
  Pt = Symbol.for("react.lazy"),
  Js = Symbol.for("react.offscreen"),
  sa = Symbol.iterator;
function Jn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (sa && e[sa]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ne = Object.assign,
  Ro;
function ur(e) {
  if (Ro === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Ro = (t && t[1]) || "";
    }
  return (
    `
` +
    Ro +
    e
  );
}
var No = !1;
function Lo(e, t) {
  if (!e || No) return "";
  No = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var a =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (No = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? ur(e) : "";
}
function Yd(e) {
  switch (e.tag) {
    case 5:
      return ur(e.type);
    case 16:
      return ur("Lazy");
    case 13:
      return ur("Suspense");
    case 19:
      return ur("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Lo(e.type, !1)), e;
    case 11:
      return (e = Lo(e.type.render, !1)), e;
    case 1:
      return (e = Lo(e.type, !0)), e;
    default:
      return "";
  }
}
function si(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case wn:
      return "Fragment";
    case yn:
      return "Portal";
    case ii:
      return "Profiler";
    case uu:
      return "StrictMode";
    case ui:
      return "Suspense";
    case ai:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zs:
        return (e.displayName || "Context") + ".Consumer";
      case Gs:
        return (e._context.displayName || "Context") + ".Provider";
      case au:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case su:
        return (
          (t = e.displayName || null), t !== null ? t : si(e.type) || "Memo"
        );
      case Pt:
        (t = e._payload), (e = e._init);
        try {
          return si(e(t));
        } catch {}
    }
  return null;
}
function Xd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return si(t);
    case 8:
      return t === uu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function At(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function qs(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Gd(e) {
  var t = qs(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function el(e) {
  e._valueTracker || (e._valueTracker = Gd(e));
}
function bs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = qs(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Nl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ci(e, t) {
  var n = t.checked;
  return ne({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ca(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = At(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ec(e, t) {
  (t = t.checked), t != null && iu(e, "checked", t, !1);
}
function fi(e, t) {
  ec(e, t);
  var n = At(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? di(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && di(e, t.type, At(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function fa(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function di(e, t, n) {
  (t !== "number" || Nl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var ar = Array.isArray;
function zn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + At(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function pi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return ne({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function da(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(k(92));
      if (ar(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: At(n) };
}
function tc(e, t) {
  var n = At(t.value),
    r = At(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function pa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function nc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? nc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var tl,
  rc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        tl = tl || document.createElement("div"),
          tl.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = tl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function xr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Zd = ["Webkit", "ms", "Moz", "O"];
Object.keys(dr).forEach(function (e) {
  Zd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (dr[t] = dr[e]);
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (dr.hasOwnProperty(e) && dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function oc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Jd = ne(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function mi(e, t) {
  if (t) {
    if (Jd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function vi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var gi = null;
function cu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var yi = null,
  Tn = null,
  Mn = null;
function ha(e) {
  if ((e = Qr(e))) {
    if (typeof yi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && ((t = oo(t)), yi(e.stateNode, e.type, t));
  }
}
function ic(e) {
  Tn ? (Mn ? Mn.push(e) : (Mn = [e])) : (Tn = e);
}
function uc() {
  if (Tn) {
    var e = Tn,
      t = Mn;
    if (((Mn = Tn = null), ha(e), t)) for (e = 0; e < t.length; e++) ha(t[e]);
  }
}
function ac(e, t) {
  return e(t);
}
function sc() {}
var Do = !1;
function cc(e, t, n) {
  if (Do) return e(t, n);
  Do = !0;
  try {
    return ac(e, t, n);
  } finally {
    (Do = !1), (Tn !== null || Mn !== null) && (sc(), uc());
  }
}
function Cr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = oo(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var wi = !1;
if (gt)
  try {
    var qn = {};
    Object.defineProperty(qn, "passive", {
      get: function () {
        wi = !0;
      },
    }),
      window.addEventListener("test", qn, qn),
      window.removeEventListener("test", qn, qn);
  } catch {
    wi = !1;
  }
function qd(e, t, n, r, l, o, i, u, a) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (p) {
    this.onError(p);
  }
}
var pr = !1,
  Ll = null,
  Dl = !1,
  Si = null,
  bd = {
    onError: function (e) {
      (pr = !0), (Ll = e);
    },
  };
function ep(e, t, n, r, l, o, i, u, a) {
  (pr = !1), (Ll = null), qd.apply(bd, arguments);
}
function tp(e, t, n, r, l, o, i, u, a) {
  if ((ep.apply(this, arguments), pr)) {
    if (pr) {
      var s = Ll;
      (pr = !1), (Ll = null);
    } else throw Error(k(198));
    Dl || ((Dl = !0), (Si = s));
  }
}
function cn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ma(e) {
  if (cn(e) !== e) throw Error(k(188));
}
function np(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = cn(e)), t === null)) throw Error(k(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return ma(l), e;
        if (o === r) return ma(l), t;
        o = o.sibling;
      }
      throw Error(k(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function dc(e) {
  return (e = np(e)), e !== null ? pc(e) : null;
}
function pc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = pc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var hc = Ue.unstable_scheduleCallback,
  va = Ue.unstable_cancelCallback,
  rp = Ue.unstable_shouldYield,
  lp = Ue.unstable_requestPaint,
  oe = Ue.unstable_now,
  op = Ue.unstable_getCurrentPriorityLevel,
  fu = Ue.unstable_ImmediatePriority,
  mc = Ue.unstable_UserBlockingPriority,
  zl = Ue.unstable_NormalPriority,
  ip = Ue.unstable_LowPriority,
  vc = Ue.unstable_IdlePriority,
  to = null,
  lt = null;
function up(e) {
  if (lt && typeof lt.onCommitFiberRoot == "function")
    try {
      lt.onCommitFiberRoot(to, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Je = Math.clz32 ? Math.clz32 : cp,
  ap = Math.log,
  sp = Math.LN2;
function cp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ap(e) / sp) | 0)) | 0;
}
var nl = 64,
  rl = 4194304;
function sr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = sr(u)) : ((o &= i), o !== 0 && (r = sr(o)));
  } else (i = n & ~l), i !== 0 ? (r = sr(i)) : o !== 0 && (r = sr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Je(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function fp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Je(o),
      u = 1 << i,
      a = l[i];
    a === -1
      ? (!(u & n) || u & r) && (l[i] = fp(u, t))
      : a <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function Ei(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function gc() {
  var e = nl;
  return (nl <<= 1), !(nl & 4194240) && (nl = 64), e;
}
function zo(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Wr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Je(t)),
    (e[t] = n);
}
function pp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Je(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function du(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Je(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var K = 0;
function yc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var wc,
  pu,
  Sc,
  Ec,
  kc,
  ki = !1,
  ll = [],
  zt = null,
  Tt = null,
  Mt = null,
  Pr = new Map(),
  _r = new Map(),
  Rt = [],
  hp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " ",
    );
function ga(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      zt = null;
      break;
    case "dragenter":
    case "dragleave":
      Tt = null;
      break;
    case "mouseover":
    case "mouseout":
      Mt = null;
      break;
    case "pointerover":
    case "pointerout":
      Pr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      _r.delete(t.pointerId);
  }
}
function bn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Qr(t)), t !== null && pu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function mp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (zt = bn(zt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Tt = bn(Tt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Mt = bn(Mt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Pr.set(o, bn(Pr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), _r.set(o, bn(_r.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function xc(e) {
  var t = Jt(e.target);
  if (t !== null) {
    var n = cn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fc(n)), t !== null)) {
          (e.blockedOn = t),
            kc(e.priority, function () {
              Sc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function yl(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = xi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (gi = r), n.target.dispatchEvent(r), (gi = null);
    } else return (t = Qr(n)), t !== null && pu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ya(e, t, n) {
  yl(e) && n.delete(t);
}
function vp() {
  (ki = !1),
    zt !== null && yl(zt) && (zt = null),
    Tt !== null && yl(Tt) && (Tt = null),
    Mt !== null && yl(Mt) && (Mt = null),
    Pr.forEach(ya),
    _r.forEach(ya);
}
function er(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ki ||
      ((ki = !0),
      Ue.unstable_scheduleCallback(Ue.unstable_NormalPriority, vp)));
}
function Rr(e) {
  function t(l) {
    return er(l, e);
  }
  if (0 < ll.length) {
    er(ll[0], e);
    for (var n = 1; n < ll.length; n++) {
      var r = ll[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    zt !== null && er(zt, e),
      Tt !== null && er(Tt, e),
      Mt !== null && er(Mt, e),
      Pr.forEach(t),
      _r.forEach(t),
      n = 0;
    n < Rt.length;
    n++
  )
    (r = Rt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Rt.length && ((n = Rt[0]), n.blockedOn === null); )
    xc(n), n.blockedOn === null && Rt.shift();
}
var jn = Et.ReactCurrentBatchConfig,
  Ml = !0;
function gp(e, t, n, r) {
  var l = K,
    o = jn.transition;
  jn.transition = null;
  try {
    (K = 1), hu(e, t, n, r);
  } finally {
    (K = l), (jn.transition = o);
  }
}
function yp(e, t, n, r) {
  var l = K,
    o = jn.transition;
  jn.transition = null;
  try {
    (K = 4), hu(e, t, n, r);
  } finally {
    (K = l), (jn.transition = o);
  }
}
function hu(e, t, n, r) {
  if (Ml) {
    var l = xi(e, t, n, r);
    if (l === null) Bo(e, t, r, jl, n), ga(e, r);
    else if (mp(l, e, t, n, r)) r.stopPropagation();
    else if ((ga(e, r), t & 4 && -1 < hp.indexOf(e))) {
      for (; l !== null; ) {
        var o = Qr(l);
        if (
          (o !== null && wc(o),
          (o = xi(e, t, n, r)),
          o === null && Bo(e, t, r, jl, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Bo(e, t, r, null, n);
  }
}
var jl = null;
function xi(e, t, n, r) {
  if (((jl = null), (e = cu(r)), (e = Jt(e)), e !== null))
    if (((t = cn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (jl = e), null;
}
function Cc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (op()) {
        case fu:
          return 1;
        case mc:
          return 4;
        case zl:
        case ip:
          return 16;
        case vc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Lt = null,
  mu = null,
  wl = null;
function Pc() {
  if (wl) return wl;
  var e,
    t = mu,
    n = t.length,
    r,
    l = "value" in Lt ? Lt.value : Lt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (wl = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Sl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ol() {
  return !0;
}
function wa() {
  return !1;
}
function $e(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ol
        : wa),
      (this.isPropagationStopped = wa),
      this
    );
  }
  return (
    ne(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ol));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ol));
      },
      persist: function () {},
      isPersistent: ol,
    }),
    t
  );
}
var Kn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  vu = $e(Kn),
  Hr = ne({}, Kn, { view: 0, detail: 0 }),
  wp = $e(Hr),
  To,
  Mo,
  tr,
  no = ne({}, Hr, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: gu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== tr &&
            (tr && e.type === "mousemove"
              ? ((To = e.screenX - tr.screenX), (Mo = e.screenY - tr.screenY))
              : (Mo = To = 0),
            (tr = e)),
          To);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Mo;
    },
  }),
  Sa = $e(no),
  Sp = ne({}, no, { dataTransfer: 0 }),
  Ep = $e(Sp),
  kp = ne({}, Hr, { relatedTarget: 0 }),
  jo = $e(kp),
  xp = ne({}, Kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cp = $e(xp),
  Pp = ne({}, Kn, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  _p = $e(Pp),
  Rp = ne({}, Kn, { data: 0 }),
  Ea = $e(Rp),
  Np = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Lp = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Dp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function zp(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Dp[e]) ? !!t[e] : !1;
}
function gu() {
  return zp;
}
var Tp = ne({}, Hr, {
    key: function (e) {
      if (e.key) {
        var t = Np[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Sl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Lp[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: gu,
    charCode: function (e) {
      return e.type === "keypress" ? Sl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Sl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Mp = $e(Tp),
  jp = ne({}, no, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  ka = $e(jp),
  Op = ne({}, Hr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: gu,
  }),
  Fp = $e(Op),
  Ip = ne({}, Kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Up = $e(Ip),
  Ap = ne({}, no, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  $p = $e(Ap),
  Bp = [9, 13, 27, 32],
  yu = gt && "CompositionEvent" in window,
  hr = null;
gt && "documentMode" in document && (hr = document.documentMode);
var Vp = gt && "TextEvent" in window && !hr,
  _c = gt && (!yu || (hr && 8 < hr && 11 >= hr)),
  xa = String.fromCharCode(32),
  Ca = !1;
function Rc(e, t) {
  switch (e) {
    case "keyup":
      return Bp.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Nc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Sn = !1;
function Wp(e, t) {
  switch (e) {
    case "compositionend":
      return Nc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ca = !0), xa);
    case "textInput":
      return (e = t.data), e === xa && Ca ? null : e;
    default:
      return null;
  }
}
function Hp(e, t) {
  if (Sn)
    return e === "compositionend" || (!yu && Rc(e, t))
      ? ((e = Pc()), (wl = mu = Lt = null), (Sn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return _c && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Qp = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Pa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Qp[e.type] : t === "textarea";
}
function Lc(e, t, n, r) {
  ic(r),
    (t = Ol(t, "onChange")),
    0 < t.length &&
      ((n = new vu("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var mr = null,
  Nr = null;
function Kp(e) {
  $c(e, 0);
}
function ro(e) {
  var t = xn(e);
  if (bs(t)) return e;
}
function Yp(e, t) {
  if (e === "change") return t;
}
var Dc = !1;
if (gt) {
  var Oo;
  if (gt) {
    var Fo = "oninput" in document;
    if (!Fo) {
      var _a = document.createElement("div");
      _a.setAttribute("oninput", "return;"),
        (Fo = typeof _a.oninput == "function");
    }
    Oo = Fo;
  } else Oo = !1;
  Dc = Oo && (!document.documentMode || 9 < document.documentMode);
}
function Ra() {
  mr && (mr.detachEvent("onpropertychange", zc), (Nr = mr = null));
}
function zc(e) {
  if (e.propertyName === "value" && ro(Nr)) {
    var t = [];
    Lc(t, Nr, e, cu(e)), cc(Kp, t);
  }
}
function Xp(e, t, n) {
  e === "focusin"
    ? (Ra(), (mr = t), (Nr = n), mr.attachEvent("onpropertychange", zc))
    : e === "focusout" && Ra();
}
function Gp(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ro(Nr);
}
function Zp(e, t) {
  if (e === "click") return ro(t);
}
function Jp(e, t) {
  if (e === "input" || e === "change") return ro(t);
}
function qp(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var be = typeof Object.is == "function" ? Object.is : qp;
function Lr(e, t) {
  if (be(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!oi.call(t, l) || !be(e[l], t[l])) return !1;
  }
  return !0;
}
function Na(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function La(e, t) {
  var n = Na(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Na(n);
  }
}
function Tc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Tc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Mc() {
  for (var e = window, t = Nl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Nl(e.document);
  }
  return t;
}
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function bp(e) {
  var t = Mc(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Tc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && wu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = La(n, o));
        var i = La(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var eh = gt && "documentMode" in document && 11 >= document.documentMode,
  En = null,
  Ci = null,
  vr = null,
  Pi = !1;
function Da(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Pi ||
    En == null ||
    En !== Nl(r) ||
    ((r = En),
    "selectionStart" in r && wu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (vr && Lr(vr, r)) ||
      ((vr = r),
      (r = Ol(Ci, "onSelect")),
      0 < r.length &&
        ((t = new vu("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = En))));
}
function il(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var kn = {
    animationend: il("Animation", "AnimationEnd"),
    animationiteration: il("Animation", "AnimationIteration"),
    animationstart: il("Animation", "AnimationStart"),
    transitionend: il("Transition", "TransitionEnd"),
  },
  Io = {},
  jc = {};
gt &&
  ((jc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete kn.animationend.animation,
    delete kn.animationiteration.animation,
    delete kn.animationstart.animation),
  "TransitionEvent" in window || delete kn.transitionend.transition);
function lo(e) {
  if (Io[e]) return Io[e];
  if (!kn[e]) return e;
  var t = kn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in jc) return (Io[e] = t[n]);
  return e;
}
var Oc = lo("animationend"),
  Fc = lo("animationiteration"),
  Ic = lo("animationstart"),
  Uc = lo("transitionend"),
  Ac = new Map(),
  za =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " ",
    );
function Bt(e, t) {
  Ac.set(e, t), sn(t, [e]);
}
for (var Uo = 0; Uo < za.length; Uo++) {
  var Ao = za[Uo],
    th = Ao.toLowerCase(),
    nh = Ao[0].toUpperCase() + Ao.slice(1);
  Bt(th, "on" + nh);
}
Bt(Oc, "onAnimationEnd");
Bt(Fc, "onAnimationIteration");
Bt(Ic, "onAnimationStart");
Bt("dblclick", "onDoubleClick");
Bt("focusin", "onFocus");
Bt("focusout", "onBlur");
Bt(Uc, "onTransitionEnd");
Un("onMouseEnter", ["mouseout", "mouseover"]);
Un("onMouseLeave", ["mouseout", "mouseover"]);
Un("onPointerEnter", ["pointerout", "pointerover"]);
Un("onPointerLeave", ["pointerout", "pointerover"]);
sn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(
    " ",
  ),
);
sn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " ",
  ),
);
sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
sn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" "),
);
sn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" "),
);
sn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
);
var cr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " ",
    ),
  rh = new Set("cancel close invalid load scroll toggle".split(" ").concat(cr));
function Ta(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), tp(r, t, void 0, e), (e.currentTarget = null);
}
function $c(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            a = u.instance,
            s = u.currentTarget;
          if (((u = u.listener), a !== o && l.isPropagationStopped())) break e;
          Ta(l, u, s), (o = a);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (a = u.instance),
            (s = u.currentTarget),
            (u = u.listener),
            a !== o && l.isPropagationStopped())
          )
            break e;
          Ta(l, u, s), (o = a);
        }
    }
  }
  if (Dl) throw ((e = Si), (Dl = !1), (Si = null), e);
}
function Z(e, t) {
  var n = t[Di];
  n === void 0 && (n = t[Di] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Bc(t, e, 2, !1), n.add(r));
}
function $o(e, t, n) {
  var r = 0;
  t && (r |= 4), Bc(n, e, r, t);
}
var ul = "_reactListening" + Math.random().toString(36).slice(2);
function Dr(e) {
  if (!e[ul]) {
    (e[ul] = !0),
      Xs.forEach(function (n) {
        n !== "selectionchange" && (rh.has(n) || $o(n, !1, e), $o(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[ul] || ((t[ul] = !0), $o("selectionchange", !1, t));
  }
}
function Bc(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var l = gp;
      break;
    case 4:
      l = yp;
      break;
    default:
      l = hu;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !wi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Bo(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var a = i.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = i.stateNode.containerInfo),
              a === l || (a.nodeType === 8 && a.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = Jt(u)), i === null)) return;
          if (((a = i.tag), a === 5 || a === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  cc(function () {
    var s = o,
      p = cu(n),
      m = [];
    e: {
      var c = Ac.get(e);
      if (c !== void 0) {
        var v = vu,
          w = e;
        switch (e) {
          case "keypress":
            if (Sl(n) === 0) break e;
          case "keydown":
          case "keyup":
            v = Mp;
            break;
          case "focusin":
            (w = "focus"), (v = jo);
            break;
          case "focusout":
            (w = "blur"), (v = jo);
            break;
          case "beforeblur":
          case "afterblur":
            v = jo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Sa;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Ep;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Fp;
            break;
          case Oc:
          case Fc:
          case Ic:
            v = Cp;
            break;
          case Uc:
            v = Up;
            break;
          case "scroll":
            v = wp;
            break;
          case "wheel":
            v = $p;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = _p;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = ka;
        }
        var y = (t & 4) !== 0,
          z = !y && e === "scroll",
          d = y ? (c !== null ? c + "Capture" : null) : c;
        y = [];
        for (var f = s, h; f !== null; ) {
          h = f;
          var g = h.stateNode;
          if (
            (h.tag === 5 &&
              g !== null &&
              ((h = g),
              d !== null && ((g = Cr(f, d)), g != null && y.push(zr(f, g, h)))),
            z)
          )
            break;
          f = f.return;
        }
        0 < y.length &&
          ((c = new v(c, w, null, n, p)), m.push({ event: c, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((c = e === "mouseover" || e === "pointerover"),
          (v = e === "mouseout" || e === "pointerout"),
          c &&
            n !== gi &&
            (w = n.relatedTarget || n.fromElement) &&
            (Jt(w) || w[yt]))
        )
          break e;
        if (
          (v || c) &&
          ((c =
            p.window === p
              ? p
              : (c = p.ownerDocument)
              ? c.defaultView || c.parentWindow
              : window),
          v
            ? ((w = n.relatedTarget || n.toElement),
              (v = s),
              (w = w ? Jt(w) : null),
              w !== null &&
                ((z = cn(w)), w !== z || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((v = null), (w = s)),
          v !== w)
        ) {
          if (
            ((y = Sa),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (f = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((y = ka),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (f = "pointer")),
            (z = v == null ? c : xn(v)),
            (h = w == null ? c : xn(w)),
            (c = new y(g, f + "leave", v, n, p)),
            (c.target = z),
            (c.relatedTarget = h),
            (g = null),
            Jt(p) === s &&
              ((y = new y(d, f + "enter", w, n, p)),
              (y.target = h),
              (y.relatedTarget = z),
              (g = y)),
            (z = g),
            v && w)
          )
            t: {
              for (y = v, d = w, f = 0, h = y; h; h = gn(h)) f++;
              for (h = 0, g = d; g; g = gn(g)) h++;
              for (; 0 < f - h; ) (y = gn(y)), f--;
              for (; 0 < h - f; ) (d = gn(d)), h--;
              for (; f--; ) {
                if (y === d || (d !== null && y === d.alternate)) break t;
                (y = gn(y)), (d = gn(d));
              }
              y = null;
            }
          else y = null;
          v !== null && Ma(m, c, v, y, !1),
            w !== null && z !== null && Ma(m, z, w, y, !0);
        }
      }
      e: {
        if (
          ((c = s ? xn(s) : window),
          (v = c.nodeName && c.nodeName.toLowerCase()),
          v === "select" || (v === "input" && c.type === "file"))
        )
          var C = Yp;
        else if (Pa(c))
          if (Dc) C = Jp;
          else {
            C = Gp;
            var L = Xp;
          }
        else
          (v = c.nodeName) &&
            v.toLowerCase() === "input" &&
            (c.type === "checkbox" || c.type === "radio") &&
            (C = Zp);
        if (C && (C = C(e, s))) {
          Lc(m, C, n, p);
          break e;
        }
        L && L(e, c, s),
          e === "focusout" &&
            (L = c._wrapperState) &&
            L.controlled &&
            c.type === "number" &&
            di(c, "number", c.value);
      }
      switch (((L = s ? xn(s) : window), e)) {
        case "focusin":
          (Pa(L) || L.contentEditable === "true") &&
            ((En = L), (Ci = s), (vr = null));
          break;
        case "focusout":
          vr = Ci = En = null;
          break;
        case "mousedown":
          Pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Pi = !1), Da(m, n, p);
          break;
        case "selectionchange":
          if (eh) break;
        case "keydown":
        case "keyup":
          Da(m, n, p);
      }
      var R;
      if (yu)
        e: {
          switch (e) {
            case "compositionstart":
              var D = "onCompositionStart";
              break e;
            case "compositionend":
              D = "onCompositionEnd";
              break e;
            case "compositionupdate":
              D = "onCompositionUpdate";
              break e;
          }
          D = void 0;
        }
      else
        Sn
          ? Rc(e, n) && (D = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (D = "onCompositionStart");
      D &&
        (_c &&
          n.locale !== "ko" &&
          (Sn || D !== "onCompositionStart"
            ? D === "onCompositionEnd" && Sn && (R = Pc())
            : ((Lt = p),
              (mu = "value" in Lt ? Lt.value : Lt.textContent),
              (Sn = !0))),
        (L = Ol(s, D)),
        0 < L.length &&
          ((D = new Ea(D, e, null, n, p)),
          m.push({ event: D, listeners: L }),
          R ? (D.data = R) : ((R = Nc(n)), R !== null && (D.data = R)))),
        (R = Vp ? Wp(e, n) : Hp(e, n)) &&
          ((s = Ol(s, "onBeforeInput")),
          0 < s.length &&
            ((p = new Ea("onBeforeInput", "beforeinput", null, n, p)),
            m.push({ event: p, listeners: s }),
            (p.data = R)));
    }
    $c(m, t);
  });
}
function zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Cr(e, n)),
      o != null && r.unshift(zr(e, o, l)),
      (o = Cr(e, t)),
      o != null && r.push(zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function gn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ma(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      a = u.alternate,
      s = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 &&
      s !== null &&
      ((u = s),
      l
        ? ((a = Cr(n, o)), a != null && i.unshift(zr(n, a, u)))
        : l || ((a = Cr(n, o)), a != null && i.push(zr(n, a, u)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var lh = /\r\n?/g,
  oh = /\u0000|\uFFFD/g;
function ja(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      lh,
      `
`,
    )
    .replace(oh, "");
}
function al(e, t, n) {
  if (((t = ja(t)), ja(e) !== t && n)) throw Error(k(425));
}
function Fl() {}
var _i = null,
  Ri = null;
function Ni(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Li = typeof setTimeout == "function" ? setTimeout : void 0,
  ih = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Oa = typeof Promise == "function" ? Promise : void 0,
  uh =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Oa < "u"
      ? function (e) {
          return Oa.resolve(null).then(e).catch(ah);
        }
      : Li;
function ah(e) {
  setTimeout(function () {
    throw e;
  });
}
function Vo(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Rr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Rr(t);
}
function jt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Fa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Yn = Math.random().toString(36).slice(2),
  rt = "__reactFiber$" + Yn,
  Tr = "__reactProps$" + Yn,
  yt = "__reactContainer$" + Yn,
  Di = "__reactEvents$" + Yn,
  sh = "__reactListeners$" + Yn,
  ch = "__reactHandles$" + Yn;
function Jt(e) {
  var t = e[rt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[yt] || n[rt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Fa(e); e !== null; ) {
          if ((n = e[rt])) return n;
          e = Fa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Qr(e) {
  return (
    (e = e[rt] || e[yt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function xn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function oo(e) {
  return e[Tr] || null;
}
var zi = [],
  Cn = -1;
function Vt(e) {
  return { current: e };
}
function J(e) {
  0 > Cn || ((e.current = zi[Cn]), (zi[Cn] = null), Cn--);
}
function X(e, t) {
  Cn++, (zi[Cn] = e.current), (e.current = t);
}
var $t = {},
  Ee = Vt($t),
  ze = Vt(!1),
  rn = $t;
function An(e, t) {
  var n = e.type.contextTypes;
  if (!n) return $t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Te(e) {
  return (e = e.childContextTypes), e != null;
}
function Il() {
  J(ze), J(Ee);
}
function Ia(e, t, n) {
  if (Ee.current !== $t) throw Error(k(168));
  X(Ee, t), X(ze, n);
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, Xd(e) || "Unknown", l));
  return ne({}, n, r);
}
function Ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || $t),
    (rn = Ee.current),
    X(Ee, e),
    X(ze, ze.current),
    !0
  );
}
function Ua(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n
    ? ((e = Vc(e, t, rn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      J(ze),
      J(Ee),
      X(Ee, e))
    : J(ze),
    X(ze, n);
}
var dt = null,
  io = !1,
  Wo = !1;
function Wc(e) {
  dt === null ? (dt = [e]) : dt.push(e);
}
function fh(e) {
  (io = !0), Wc(e);
}
function Wt() {
  if (!Wo && dt !== null) {
    Wo = !0;
    var e = 0,
      t = K;
    try {
      var n = dt;
      for (K = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (dt = null), (io = !1);
    } catch (l) {
      throw (dt !== null && (dt = dt.slice(e + 1)), hc(fu, Wt), l);
    } finally {
      (K = t), (Wo = !1);
    }
  }
  return null;
}
var Pn = [],
  _n = 0,
  Al = null,
  $l = 0,
  Be = [],
  Ve = 0,
  ln = null,
  pt = 1,
  ht = "";
function Xt(e, t) {
  (Pn[_n++] = $l), (Pn[_n++] = Al), (Al = e), ($l = t);
}
function Hc(e, t, n) {
  (Be[Ve++] = pt), (Be[Ve++] = ht), (Be[Ve++] = ln), (ln = e);
  var r = pt;
  e = ht;
  var l = 32 - Je(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Je(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (pt = (1 << (32 - Je(t) + l)) | (n << l) | r),
      (ht = o + e);
  } else (pt = (1 << o) | (n << l) | r), (ht = e);
}
function Su(e) {
  e.return !== null && (Xt(e, 1), Hc(e, 1, 0));
}
function Eu(e) {
  for (; e === Al; )
    (Al = Pn[--_n]), (Pn[_n] = null), ($l = Pn[--_n]), (Pn[_n] = null);
  for (; e === ln; )
    (ln = Be[--Ve]),
      (Be[Ve] = null),
      (ht = Be[--Ve]),
      (Be[Ve] = null),
      (pt = Be[--Ve]),
      (Be[Ve] = null);
}
var Ie = null,
  Fe = null,
  b = !1,
  Ze = null;
function Qc(e, t) {
  var n = We(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Aa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Fe = jt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ln !== null ? { id: pt, overflow: ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = We(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Ti(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mi(e) {
  if (b) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!Aa(e, t)) {
        if (Ti(e)) throw Error(k(418));
        t = jt(n.nextSibling);
        var r = Ie;
        t && Aa(e, t)
          ? Qc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (b = !1), (Ie = e));
      }
    } else {
      if (Ti(e)) throw Error(k(418));
      (e.flags = (e.flags & -4097) | 2), (b = !1), (Ie = e);
    }
  }
}
function $a(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function sl(e) {
  if (e !== Ie) return !1;
  if (!b) return $a(e), (b = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Ni(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (Ti(e)) throw (Kc(), Error(k(418)));
    for (; t; ) Qc(e, t), (t = jt(t.nextSibling));
  }
  if (($a(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = jt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ie ? jt(e.stateNode.nextSibling) : null;
  return !0;
}
function Kc() {
  for (var e = Fe; e; ) e = jt(e.nextSibling);
}
function $n() {
  (Fe = Ie = null), (b = !1);
}
function ku(e) {
  Ze === null ? (Ze = [e]) : Ze.push(e);
}
var dh = Et.ReactCurrentBatchConfig;
function Xe(e, t) {
  if (e && e.defaultProps) {
    (t = ne({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Bl = Vt(null),
  Vl = null,
  Rn = null,
  xu = null;
function Cu() {
  xu = Rn = Vl = null;
}
function Pu(e) {
  var t = Bl.current;
  J(Bl), (e._currentValue = t);
}
function ji(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function On(e, t) {
  (Vl = e),
    (xu = Rn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function Qe(e) {
  var t = e._currentValue;
  if (xu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
      if (Vl === null) throw Error(k(308));
      (Rn = e), (Vl.dependencies = { lanes: 0, firstContext: e });
    } else Rn = Rn.next = e;
  return t;
}
var qt = null;
function _u(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function Yc(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), _u(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    wt(e, r)
  );
}
function wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var _t = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Xc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function mt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), V & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      wt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), _u(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    wt(e, n)
  );
}
function El(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
function Ba(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Wl(e, t, n, r) {
  var l = e.updateQueue;
  _t = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u,
      s = a.next;
    (a.next = null), i === null ? (o = s) : (i.next = s), (i = a);
    var p = e.alternate;
    p !== null &&
      ((p = p.updateQueue),
      (u = p.lastBaseUpdate),
      u !== i &&
        (u === null ? (p.firstBaseUpdate = s) : (u.next = s),
        (p.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (p = s = a = null), (u = o);
    do {
      var c = u.lane,
        v = u.eventTime;
      if ((r & c) === c) {
        p !== null &&
          (p = p.next =
            {
              eventTime: v,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            y = u;
          switch (((c = t), (v = n), y.tag)) {
            case 1:
              if (((w = y.payload), typeof w == "function")) {
                m = w.call(v, m, c);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = y.payload),
                (c = typeof w == "function" ? w.call(v, m, c) : w),
                c == null)
              )
                break e;
              m = ne({}, m, c);
              break e;
            case 2:
              _t = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (c = l.effects),
          c === null ? (l.effects = [u]) : c.push(u));
      } else
        (v = {
          eventTime: v,
          lane: c,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          p === null ? ((s = p = v), (a = m)) : (p = p.next = v),
          (i |= c);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (c = u),
          (u = c.next),
          (c.next = null),
          (l.lastBaseUpdate = c),
          (l.shared.pending = null);
      }
    } while (1);
    if (
      (p === null && (a = m),
      (l.baseState = a),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = p),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (un |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function Va(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(k(191, l));
        l.call(r);
      }
    }
}
var Gc = new Ys.Component().refs;
function Oi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ne({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var uo = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? cn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      l = It(e),
      o = mt(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, l)),
      t !== null && (qe(t, e, l, r), El(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = xe(),
      l = It(e),
      o = mt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Ot(e, o, l)),
      t !== null && (qe(t, e, l, r), El(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = xe(),
      r = It(e),
      l = mt(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Ot(e, l, r)),
      t !== null && (qe(t, e, r, n), El(t, e, r));
  },
};
function Wa(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Lr(n, r) || !Lr(l, o)
      : !0
  );
}
function Zc(e, t, n) {
  var r = !1,
    l = $t,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = Qe(o))
      : ((l = Te(t) ? rn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? An(e, l) : $t)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = uo),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Ha(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && uo.enqueueReplaceState(t, t.state, null);
}
function Fi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = Gc), Ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = Qe(o))
    : ((o = Te(t) ? rn : Ee.current), (l.context = An(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Oi(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && uo.enqueueReplaceState(l, l.state, null),
      Wl(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            u === Gc && (u = l.refs = {}),
              i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function cl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      k(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e,
      ),
    ))
  );
}
function Qa(e) {
  var t = e._init;
  return t(e._payload);
}
function Jc(e) {
  function t(d, f) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [f]), (d.flags |= 16)) : h.push(f);
    }
  }
  function n(d, f) {
    if (!e) return null;
    for (; f !== null; ) t(d, f), (f = f.sibling);
    return null;
  }
  function r(d, f) {
    for (d = new Map(); f !== null; )
      f.key !== null ? d.set(f.key, f) : d.set(f.index, f), (f = f.sibling);
    return d;
  }
  function l(d, f) {
    return (d = Ut(d, f)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, f, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < f ? ((d.flags |= 2), f) : h)
            : ((d.flags |= 2), f))
        : ((d.flags |= 1048576), f)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, f, h, g) {
    return f === null || f.tag !== 6
      ? ((f = Zo(h, d.mode, g)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function a(d, f, h, g) {
    var C = h.type;
    return C === wn
      ? p(d, f, h.props.children, g, h.key)
      : f !== null &&
        (f.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Pt &&
            Qa(C) === f.type))
      ? ((g = l(f, h.props)), (g.ref = nr(d, f, h)), (g.return = d), g)
      : ((g = Rl(h.type, h.key, h.props, null, d.mode, g)),
        (g.ref = nr(d, f, h)),
        (g.return = d),
        g);
  }
  function s(d, f, h, g) {
    return f === null ||
      f.tag !== 4 ||
      f.stateNode.containerInfo !== h.containerInfo ||
      f.stateNode.implementation !== h.implementation
      ? ((f = Jo(h, d.mode, g)), (f.return = d), f)
      : ((f = l(f, h.children || [])), (f.return = d), f);
  }
  function p(d, f, h, g, C) {
    return f === null || f.tag !== 7
      ? ((f = nn(h, d.mode, g, C)), (f.return = d), f)
      : ((f = l(f, h)), (f.return = d), f);
  }
  function m(d, f, h) {
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return (f = Zo("" + f, d.mode, h)), (f.return = d), f;
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case br:
          return (
            (h = Rl(f.type, f.key, f.props, null, d.mode, h)),
            (h.ref = nr(d, null, f)),
            (h.return = d),
            h
          );
        case yn:
          return (f = Jo(f, d.mode, h)), (f.return = d), f;
        case Pt:
          var g = f._init;
          return m(d, g(f._payload), h);
      }
      if (ar(f) || Jn(f))
        return (f = nn(f, d.mode, h, null)), (f.return = d), f;
      cl(d, f);
    }
    return null;
  }
  function c(d, f, h, g) {
    var C = f !== null ? f.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return C !== null ? null : u(d, f, "" + h, g);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case br:
          return h.key === C ? a(d, f, h, g) : null;
        case yn:
          return h.key === C ? s(d, f, h, g) : null;
        case Pt:
          return (C = h._init), c(d, f, C(h._payload), g);
      }
      if (ar(h) || Jn(h)) return C !== null ? null : p(d, f, h, g, null);
      cl(d, h);
    }
    return null;
  }
  function v(d, f, h, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(h) || null), u(f, d, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case br:
          return (d = d.get(g.key === null ? h : g.key) || null), a(f, d, g, C);
        case yn:
          return (d = d.get(g.key === null ? h : g.key) || null), s(f, d, g, C);
        case Pt:
          var L = g._init;
          return v(d, f, h, L(g._payload), C);
      }
      if (ar(g) || Jn(g)) return (d = d.get(h) || null), p(f, d, g, C, null);
      cl(f, g);
    }
    return null;
  }
  function w(d, f, h, g) {
    for (
      var C = null, L = null, R = f, D = (f = 0), W = null;
      R !== null && D < h.length;
      D++
    ) {
      R.index > D ? ((W = R), (R = null)) : (W = R.sibling);
      var O = c(d, R, h[D], g);
      if (O === null) {
        R === null && (R = W);
        break;
      }
      e && R && O.alternate === null && t(d, R),
        (f = o(O, f, D)),
        L === null ? (C = O) : (L.sibling = O),
        (L = O),
        (R = W);
    }
    if (D === h.length) return n(d, R), b && Xt(d, D), C;
    if (R === null) {
      for (; D < h.length; D++)
        (R = m(d, h[D], g)),
          R !== null &&
            ((f = o(R, f, D)), L === null ? (C = R) : (L.sibling = R), (L = R));
      return b && Xt(d, D), C;
    }
    for (R = r(d, R); D < h.length; D++)
      (W = v(R, d, D, h[D], g)),
        W !== null &&
          (e && W.alternate !== null && R.delete(W.key === null ? D : W.key),
          (f = o(W, f, D)),
          L === null ? (C = W) : (L.sibling = W),
          (L = W));
    return (
      e &&
        R.forEach(function (je) {
          return t(d, je);
        }),
      b && Xt(d, D),
      C
    );
  }
  function y(d, f, h, g) {
    var C = Jn(h);
    if (typeof C != "function") throw Error(k(150));
    if (((h = C.call(h)), h == null)) throw Error(k(151));
    for (
      var L = (C = null), R = f, D = (f = 0), W = null, O = h.next();
      R !== null && !O.done;
      D++, O = h.next()
    ) {
      R.index > D ? ((W = R), (R = null)) : (W = R.sibling);
      var je = c(d, R, O.value, g);
      if (je === null) {
        R === null && (R = W);
        break;
      }
      e && R && je.alternate === null && t(d, R),
        (f = o(je, f, D)),
        L === null ? (C = je) : (L.sibling = je),
        (L = je),
        (R = W);
    }
    if (O.done) return n(d, R), b && Xt(d, D), C;
    if (R === null) {
      for (; !O.done; D++, O = h.next())
        (O = m(d, O.value, g)),
          O !== null &&
            ((f = o(O, f, D)), L === null ? (C = O) : (L.sibling = O), (L = O));
      return b && Xt(d, D), C;
    }
    for (R = r(d, R); !O.done; D++, O = h.next())
      (O = v(R, d, D, O.value, g)),
        O !== null &&
          (e && O.alternate !== null && R.delete(O.key === null ? D : O.key),
          (f = o(O, f, D)),
          L === null ? (C = O) : (L.sibling = O),
          (L = O));
    return (
      e &&
        R.forEach(function (Ht) {
          return t(d, Ht);
        }),
      b && Xt(d, D),
      C
    );
  }
  function z(d, f, h, g) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === wn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case br:
          e: {
            for (var C = h.key, L = f; L !== null; ) {
              if (L.key === C) {
                if (((C = h.type), C === wn)) {
                  if (L.tag === 7) {
                    n(d, L.sibling),
                      (f = l(L, h.props.children)),
                      (f.return = d),
                      (d = f);
                    break e;
                  }
                } else if (
                  L.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Pt &&
                    Qa(C) === L.type)
                ) {
                  n(d, L.sibling),
                    (f = l(L, h.props)),
                    (f.ref = nr(d, L, h)),
                    (f.return = d),
                    (d = f);
                  break e;
                }
                n(d, L);
                break;
              } else t(d, L);
              L = L.sibling;
            }
            h.type === wn
              ? ((f = nn(h.props.children, d.mode, g, h.key)),
                (f.return = d),
                (d = f))
              : ((g = Rl(h.type, h.key, h.props, null, d.mode, g)),
                (g.ref = nr(d, f, h)),
                (g.return = d),
                (d = g));
          }
          return i(d);
        case yn:
          e: {
            for (L = h.key; f !== null; ) {
              if (f.key === L)
                if (
                  f.tag === 4 &&
                  f.stateNode.containerInfo === h.containerInfo &&
                  f.stateNode.implementation === h.implementation
                ) {
                  n(d, f.sibling),
                    (f = l(f, h.children || [])),
                    (f.return = d),
                    (d = f);
                  break e;
                } else {
                  n(d, f);
                  break;
                }
              else t(d, f);
              f = f.sibling;
            }
            (f = Jo(h, d.mode, g)), (f.return = d), (d = f);
          }
          return i(d);
        case Pt:
          return (L = h._init), z(d, f, L(h._payload), g);
      }
      if (ar(h)) return w(d, f, h, g);
      if (Jn(h)) return y(d, f, h, g);
      cl(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        f !== null && f.tag === 6
          ? (n(d, f.sibling), (f = l(f, h)), (f.return = d), (d = f))
          : (n(d, f), (f = Zo(h, d.mode, g)), (f.return = d), (d = f)),
        i(d))
      : n(d, f);
  }
  return z;
}
var Bn = Jc(!0),
  qc = Jc(!1),
  Kr = {},
  ot = Vt(Kr),
  Mr = Vt(Kr),
  jr = Vt(Kr);
function bt(e) {
  if (e === Kr) throw Error(k(174));
  return e;
}
function Nu(e, t) {
  switch ((X(jr, t), X(Mr, e), X(ot, Kr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = hi(t, e));
  }
  J(ot), X(ot, t);
}
function Vn() {
  J(ot), J(Mr), J(jr);
}
function bc(e) {
  bt(jr.current);
  var t = bt(ot.current),
    n = hi(t, e.type);
  t !== n && (X(Mr, e), X(ot, n));
}
function Lu(e) {
  Mr.current === e && (J(ot), J(Mr));
}
var ee = Vt(0);
function Hl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Ho = [];
function Du() {
  for (var e = 0; e < Ho.length; e++)
    Ho[e]._workInProgressVersionPrimary = null;
  Ho.length = 0;
}
var kl = Et.ReactCurrentDispatcher,
  Qo = Et.ReactCurrentBatchConfig,
  on = 0,
  te = null,
  se = null,
  fe = null,
  Ql = !1,
  gr = !1,
  Or = 0,
  ph = 0;
function ye() {
  throw Error(k(321));
}
function zu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!be(e[n], t[n])) return !1;
  return !0;
}
function Tu(e, t, n, r, l, o) {
  if (
    ((on = o),
    (te = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (kl.current = e === null || e.memoizedState === null ? gh : yh),
    (e = n(r, l)),
    gr)
  ) {
    o = 0;
    do {
      if (((gr = !1), (Or = 0), 25 <= o)) throw Error(k(301));
      (o += 1),
        (fe = se = null),
        (t.updateQueue = null),
        (kl.current = wh),
        (e = n(r, l));
    } while (gr);
  }
  if (
    ((kl.current = Kl),
    (t = se !== null && se.next !== null),
    (on = 0),
    (fe = se = te = null),
    (Ql = !1),
    t)
  )
    throw Error(k(300));
  return e;
}
function Mu() {
  var e = Or !== 0;
  return (Or = 0), e;
}
function nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return fe === null ? (te.memoizedState = fe = e) : (fe = fe.next = e), fe;
}
function Ke() {
  if (se === null) {
    var e = te.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = se.next;
  var t = fe === null ? te.memoizedState : fe.next;
  if (t !== null) (fe = t), (se = e);
  else {
    if (e === null) throw Error(k(310));
    (se = e),
      (e = {
        memoizedState: se.memoizedState,
        baseState: se.baseState,
        baseQueue: se.baseQueue,
        queue: se.queue,
        next: null,
      }),
      fe === null ? (te.memoizedState = fe = e) : (fe = fe.next = e);
  }
  return fe;
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Ko(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = se,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      a = null,
      s = o;
    do {
      var p = s.lane;
      if ((on & p) === p)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var m = {
          lane: p,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        a === null ? ((u = a = m), (i = r)) : (a = a.next = m),
          (te.lanes |= p),
          (un |= p);
      }
      s = s.next;
    } while (s !== null && s !== o);
    a === null ? (i = r) : (a.next = u),
      be(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (te.lanes |= o), (un |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Yo(e) {
  var t = Ke(),
    n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    be(o, t.memoizedState) || (De = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function ef() {}
function tf(e, t) {
  var n = te,
    r = Ke(),
    l = t(),
    o = !be(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (De = !0)),
    (r = r.queue),
    ju(lf.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (fe !== null && fe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ir(9, rf.bind(null, n, r, l, t), void 0, null),
      de === null)
    )
      throw Error(k(349));
    on & 30 || nf(n, t, l);
  }
  return l;
}
function nf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function rf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), of(t) && uf(e);
}
function lf(e, t, n) {
  return n(function () {
    of(t) && uf(e);
  });
}
function of(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !be(e, n);
  } catch {
    return !0;
  }
}
function uf(e) {
  var t = wt(e, 1);
  t !== null && qe(t, e, 1, -1);
}
function Ka(e) {
  var t = nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = vh.bind(null, te, e)),
    [t.memoizedState, e]
  );
}
function Ir(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = te.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (te.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function af() {
  return Ke().memoizedState;
}
function xl(e, t, n, r) {
  var l = nt();
  (te.flags |= e),
    (l.memoizedState = Ir(1 | t, n, void 0, r === void 0 ? null : r));
}
function ao(e, t, n, r) {
  var l = Ke();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (se !== null) {
    var i = se.memoizedState;
    if (((o = i.destroy), r !== null && zu(r, i.deps))) {
      l.memoizedState = Ir(t, n, o, r);
      return;
    }
  }
  (te.flags |= e), (l.memoizedState = Ir(1 | t, n, o, r));
}
function Ya(e, t) {
  return xl(8390656, 8, e, t);
}
function ju(e, t) {
  return ao(2048, 8, e, t);
}
function sf(e, t) {
  return ao(4, 2, e, t);
}
function cf(e, t) {
  return ao(4, 4, e, t);
}
function ff(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function df(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), ao(4, 4, ff.bind(null, t, e), n)
  );
}
function Ou() {}
function pf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function hf(e, t) {
  var n = Ke();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zu(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mf(e, t, n) {
  return on & 21
    ? (be(n, t) || ((n = gc()), (te.lanes |= n), (un |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function hh(e, t) {
  var n = K;
  (K = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Qo.transition;
  Qo.transition = {};
  try {
    e(!1), t();
  } finally {
    (K = n), (Qo.transition = r);
  }
}
function vf() {
  return Ke().memoizedState;
}
function mh(e, t, n) {
  var r = It(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gf(e))
  )
    yf(t, n);
  else if (((n = Yc(e, t, n, r)), n !== null)) {
    var l = xe();
    qe(n, e, r, l), wf(n, t, r);
  }
}
function vh(e, t, n) {
  var r = It(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gf(e)) yf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), be(u, i))) {
          var a = t.interleaved;
          a === null
            ? ((l.next = l), _u(t))
            : ((l.next = a.next), (a.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Yc(e, t, l, r)),
      n !== null && ((l = xe()), qe(n, e, r, l), wf(n, t, r));
  }
}
function gf(e) {
  var t = e.alternate;
  return e === te || (t !== null && t === te);
}
function yf(e, t) {
  gr = Ql = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), du(e, n);
  }
}
var Kl = {
    readContext: Qe,
    useCallback: ye,
    useContext: ye,
    useEffect: ye,
    useImperativeHandle: ye,
    useInsertionEffect: ye,
    useLayoutEffect: ye,
    useMemo: ye,
    useReducer: ye,
    useRef: ye,
    useState: ye,
    useDebugValue: ye,
    useDeferredValue: ye,
    useTransition: ye,
    useMutableSource: ye,
    useSyncExternalStore: ye,
    useId: ye,
    unstable_isNewReconciler: !1,
  },
  gh = {
    readContext: Qe,
    useCallback: function (e, t) {
      return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Qe,
    useEffect: Ya,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xl(4194308, 4, ff.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = mh.bind(null, te, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Ka,
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      return (nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Ka(!1),
        t = e[0];
      return (e = hh.bind(null, e[1])), (nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = te,
        l = nt();
      if (b) {
        if (n === void 0) throw Error(k(407));
        n = n();
      } else {
        if (((n = t()), de === null)) throw Error(k(349));
        on & 30 || nf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        Ya(lf.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Ir(9, rf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = nt(),
        t = de.identifierPrefix;
      if (b) {
        var n = ht,
          r = pt;
        (n = (r & ~(1 << (32 - Je(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Or++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ph++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  yh = {
    readContext: Qe,
    useCallback: pf,
    useContext: Qe,
    useEffect: ju,
    useImperativeHandle: df,
    useInsertionEffect: sf,
    useLayoutEffect: cf,
    useMemo: hf,
    useReducer: Ko,
    useRef: af,
    useState: function () {
      return Ko(Fr);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = Ke();
      return mf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Ko(Fr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: vf,
    unstable_isNewReconciler: !1,
  },
  wh = {
    readContext: Qe,
    useCallback: pf,
    useContext: Qe,
    useEffect: ju,
    useImperativeHandle: df,
    useInsertionEffect: sf,
    useLayoutEffect: cf,
    useMemo: hf,
    useReducer: Yo,
    useRef: af,
    useState: function () {
      return Yo(Fr);
    },
    useDebugValue: Ou,
    useDeferredValue: function (e) {
      var t = Ke();
      return se === null ? (t.memoizedState = e) : mf(t, se.memoizedState, e);
    },
    useTransition: function () {
      var e = Yo(Fr)[0],
        t = Ke().memoizedState;
      return [e, t];
    },
    useMutableSource: ef,
    useSyncExternalStore: tf,
    useId: vf,
    unstable_isNewReconciler: !1,
  };
function Wn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Yd(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Xo(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ii(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Sh = typeof WeakMap == "function" ? WeakMap : Map;
function Sf(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Xl || ((Xl = !0), (Yi = r)), Ii(e, t);
    }),
    n
  );
}
function Ef(e, t, n) {
  (n = mt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ii(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        Ii(e, t),
          typeof r != "function" &&
            (Ft === null ? (Ft = new Set([this])) : Ft.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Xa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Sh();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = jh.bind(null, e, t, n)), t.then(e, e));
}
function Ga(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Za(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = mt(-1, 1)), (t.tag = 2), Ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Eh = Et.ReactCurrentOwner,
  De = !1;
function ke(e, t, n, r) {
  t.child = e === null ? qc(t, null, n, r) : Bn(t, e.child, n, r);
}
function Ja(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    On(t, l),
    (r = Tu(e, t, n, r, o, l)),
    (n = Mu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (b && n && Su(t), (t.flags |= 1), ke(e, t, r, l), t.child)
  );
}
function qa(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Wu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), kf(e, t, o, r, l))
      : ((e = Rl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Lr), n(i, r) && e.ref === t.ref)
    )
      return St(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ut(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function kf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Lr(o, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), St(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function xf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        X(Ln, Oe),
        (Oe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          X(Ln, Oe),
          (Oe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        X(Ln, Oe),
        (Oe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      X(Ln, Oe),
      (Oe |= r);
  return ke(e, t, l, n), t.child;
}
function Cf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ui(e, t, n, r, l) {
  var o = Te(n) ? rn : Ee.current;
  return (
    (o = An(t, o)),
    On(t, l),
    (n = Tu(e, t, n, r, o, l)),
    (r = Mu()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        St(e, t, l))
      : (b && r && Su(t), (t.flags |= 1), ke(e, t, n, l), t.child)
  );
}
function ba(e, t, n, r, l) {
  if (Te(n)) {
    var o = !0;
    Ul(t);
  } else o = !1;
  if ((On(t, l), t.stateNode === null))
    Cl(e, t), Zc(t, n, r), Fi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var a = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = Qe(s))
      : ((s = Te(n) ? rn : Ee.current), (s = An(t, s)));
    var p = n.getDerivedStateFromProps,
      m =
        typeof p == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || a !== s) && Ha(t, i, r, s)),
      (_t = !1);
    var c = t.memoizedState;
    (i.state = c),
      Wl(t, r, i, l),
      (a = t.memoizedState),
      u !== r || c !== a || ze.current || _t
        ? (typeof p == "function" && (Oi(t, n, p, r), (a = t.memoizedState)),
          (u = _t || Wa(t, n, u, r, c, a, s))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (i.props = r),
          (i.state = a),
          (i.context = s),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Xc(e, t),
      (u = t.memoizedProps),
      (s = t.type === t.elementType ? u : Xe(t.type, u)),
      (i.props = s),
      (m = t.pendingProps),
      (c = i.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = Qe(a))
        : ((a = Te(n) ? rn : Ee.current), (a = An(t, a)));
    var v = n.getDerivedStateFromProps;
    (p =
      typeof v == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || c !== a) && Ha(t, i, r, a)),
      (_t = !1),
      (c = t.memoizedState),
      (i.state = c),
      Wl(t, r, i, l);
    var w = t.memoizedState;
    u !== m || c !== w || ze.current || _t
      ? (typeof v == "function" && (Oi(t, n, v, r), (w = t.memoizedState)),
        (s = _t || Wa(t, n, s, r, c, w, a) || !1)
          ? (p ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, a),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, a)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && c === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = a),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && c === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ai(e, t, n, r, o, l);
}
function Ai(e, t, n, r, l, o) {
  Cf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Ua(t, n, !1), St(e, t, o);
  (r = t.stateNode), (Eh.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = Bn(t, e.child, null, o)), (t.child = Bn(t, null, u, o)))
      : ke(e, t, u, o),
    (t.memoizedState = r.state),
    l && Ua(t, n, !0),
    t.child
  );
}
function Pf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ia(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ia(e, t.context, !1),
    Nu(e, t.containerInfo);
}
function es(e, t, n, r, l) {
  return $n(), ku(l), (t.flags |= 256), ke(e, t, n, r), t.child;
}
var $i = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _f(e, t, n) {
  var r = t.pendingProps,
    l = ee.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    X(ee, l & 1),
    e === null)
  )
    return (
      Mi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = fo(i, r, 0, null)),
              (e = nn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Bi(n)),
              (t.memoizedState = $i),
              e)
            : Fu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return kh(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Ut(l, a)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = Ut(u, o)) : ((o = nn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Bi(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = $i),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Ut(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Fu(e, t) {
  return (
    (t = fo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fl(e, t, n, r) {
  return (
    r !== null && ku(r),
    Bn(t, e.child, null, n),
    (e = Fu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function kh(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Xo(Error(k(422)))), fl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = fo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = nn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && Bn(t, e.child, null, i),
        (t.child.memoizedState = Bi(i)),
        (t.memoizedState = $i),
        o);
  if (!(t.mode & 1)) return fl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(k(419))), (r = Xo(o, r, void 0)), fl(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), De || u)) {
    if (((r = de), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), wt(e, l), qe(r, e, l, -1));
    }
    return Vu(), (r = Xo(Error(k(421)))), fl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Oh.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = jt(l.nextSibling)),
      (Ie = t),
      (b = !0),
      (Ze = null),
      e !== null &&
        ((Be[Ve++] = pt),
        (Be[Ve++] = ht),
        (Be[Ve++] = ln),
        (pt = e.id),
        (ht = e.overflow),
        (ln = t)),
      (t = Fu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), ji(e.return, t, n);
}
function Go(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Rf(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ke(e, t, r.children, n), (r = ee.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ts(e, n, t);
        else if (e.tag === 19) ts(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((X(ee, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Hl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Go(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Hl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Go(t, !0, n, null, o);
        break;
      case "together":
        Go(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Cl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function St(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (un |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ut(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ut(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function xh(e, t, n) {
  switch (t.tag) {
    case 3:
      Pf(t), $n();
      break;
    case 5:
      bc(t);
      break;
    case 1:
      Te(t.type) && Ul(t);
      break;
    case 4:
      Nu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      X(Bl, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (X(ee, ee.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? _f(e, t, n)
          : (X(ee, ee.current & 1),
            (e = St(e, t, n)),
            e !== null ? e.sibling : null);
      X(ee, ee.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Rf(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        X(ee, ee.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), xf(e, t, n);
  }
  return St(e, t, n);
}
var Nf, Vi, Lf, Df;
Nf = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vi = function () {};
Lf = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), bt(ot.current);
    var o = null;
    switch (n) {
      case "input":
        (l = ci(e, l)), (r = ci(e, r)), (o = []);
        break;
      case "select":
        (l = ne({}, l, { value: void 0 })),
          (r = ne({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = pi(e, l)), (r = pi(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Fl);
    }
    mi(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var u = l[s];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (kr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var a = r[s];
      if (
        ((u = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && a !== u && (a != null || u != null))
      )
        if (s === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (a && a.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in a)
              a.hasOwnProperty(i) &&
                u[i] !== a[i] &&
                (n || (n = {}), (n[i] = a[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = a);
        else
          s === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (u = u ? u.__html : void 0),
              a != null && u !== a && (o = o || []).push(s, a))
            : s === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(s, "" + a)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (kr.hasOwnProperty(s)
                ? (a != null && s === "onScroll" && Z("scroll", e),
                  o || u === a || (o = []))
                : (o = o || []).push(s, a));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Df = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function rr(e, t) {
  if (!b)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function we(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ch(e, t, n) {
  var r = t.pendingProps;
  switch ((Eu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return we(t), null;
    case 1:
      return Te(t.type) && Il(), we(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Vn(),
        J(ze),
        J(Ee),
        Du(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (sl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ze !== null && (Zi(Ze), (Ze = null)))),
        Vi(e, t),
        we(t),
        null
      );
    case 5:
      Lu(t);
      var l = bt(jr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Lf(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return we(t), null;
        }
        if (((e = bt(ot.current)), sl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[rt] = t), (r[Tr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Z("cancel", r), Z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              Z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < cr.length; l++) Z(cr[l], r);
              break;
            case "source":
              Z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              Z("error", r), Z("load", r);
              break;
            case "details":
              Z("toggle", r);
              break;
            case "input":
              ca(r, o), Z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                Z("invalid", r);
              break;
            case "textarea":
              da(r, o), Z("invalid", r);
          }
          mi(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      al(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      al(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : kr.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  Z("scroll", r);
            }
          switch (n) {
            case "input":
              el(r), fa(r, o, !0);
              break;
            case "textarea":
              el(r), pa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Fl);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = nc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[rt] = t),
            (e[Tr] = r),
            Nf(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = vi(n, r)), n)) {
              case "dialog":
                Z("cancel", e), Z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < cr.length; l++) Z(cr[l], e);
                l = r;
                break;
              case "source":
                Z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                Z("error", e), Z("load", e), (l = r);
                break;
              case "details":
                Z("toggle", e), (l = r);
                break;
              case "input":
                ca(e, r), (l = ci(e, r)), Z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ne({}, r, { value: void 0 })),
                  Z("invalid", e);
                break;
              case "textarea":
                da(e, r), (l = pi(e, r)), Z("invalid", e);
                break;
              default:
                l = r;
            }
            mi(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var a = u[o];
                o === "style"
                  ? oc(e, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && rc(e, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && xr(e, a)
                    : typeof a == "number" && xr(e, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (kr.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Z("scroll", e)
                      : a != null && iu(e, o, a, i));
              }
            switch (n) {
              case "input":
                el(e), fa(e, r, !1);
                break;
              case "textarea":
                el(e), pa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + At(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? zn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      zn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Fl);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return we(t), null;
    case 6:
      if (e && t.stateNode != null) Df(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (((n = bt(jr.current)), bt(ot.current), sl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[rt] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                al(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  al(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[rt] = t),
            (t.stateNode = r);
      }
      return we(t), null;
    case 13:
      if (
        (J(ee),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (b && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Kc(), $n(), (t.flags |= 98560), (o = !1);
        else if (((o = sl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(k(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(k(317));
            o[rt] = t;
          } else
            $n(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          we(t), (o = !1);
        } else Ze !== null && (Zi(Ze), (Ze = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ee.current & 1 ? ce === 0 && (ce = 3) : Vu())),
          t.updateQueue !== null && (t.flags |= 4),
          we(t),
          null);
    case 4:
      return (
        Vn(), Vi(e, t), e === null && Dr(t.stateNode.containerInfo), we(t), null
      );
    case 10:
      return Pu(t.type._context), we(t), null;
    case 17:
      return Te(t.type) && Il(), we(t), null;
    case 19:
      if ((J(ee), (o = t.memoizedState), o === null)) return we(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) rr(o, !1);
        else {
          if (ce !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Hl(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    rr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return X(ee, (ee.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            oe() > Hn &&
            ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Hl(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              rr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !b)
            )
              return we(t), null;
          } else
            2 * oe() - o.renderingStartTime > Hn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), rr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = oe()),
          (t.sibling = null),
          (n = ee.current),
          X(ee, r ? (n & 1) | 2 : n & 1),
          t)
        : (we(t), null);
    case 22:
    case 23:
      return (
        Bu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Oe & 1073741824 && (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : we(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Ph(e, t) {
  switch ((Eu(t), t.tag)) {
    case 1:
      return (
        Te(t.type) && Il(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Vn(),
        J(ze),
        J(Ee),
        Du(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if ((J(ee), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(k(340));
        $n();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return J(ee), null;
    case 4:
      return Vn(), null;
    case 10:
      return Pu(t.type._context), null;
    case 22:
    case 23:
      return Bu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var dl = !1,
  Se = !1,
  _h = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function Nn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        re(e, t, r);
      }
    else n.current = null;
}
function Wi(e, t, n) {
  try {
    n();
  } catch (r) {
    re(e, t, r);
  }
}
var ns = !1;
function Rh(e, t) {
  if (((_i = Ml), (e = Mc()), wu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            a = -1,
            s = 0,
            p = 0,
            m = e,
            c = null;
          t: for (;;) {
            for (
              var v;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (a = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (v = m.firstChild) !== null;

            )
              (c = m), (m = v);
            for (;;) {
              if (m === e) break t;
              if (
                (c === n && ++s === l && (u = i),
                c === o && ++p === r && (a = i),
                (v = m.nextSibling) !== null)
              )
                break;
              (m = c), (c = m.parentNode);
            }
            m = v;
          }
          n = u === -1 || a === -1 ? null : { start: u, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ri = { focusedElem: e, selectionRange: n }, Ml = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var y = w.memoizedProps,
                    z = w.memoizedState,
                    d = t.stateNode,
                    f = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? y : Xe(t.type, y),
                      z,
                    );
                  d.__reactInternalSnapshotBeforeUpdate = f;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(k(163));
            }
        } catch (g) {
          re(t, t.return, g);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (w = ns), (ns = !1), w;
}
function yr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Wi(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function so(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Hi(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function zf(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), zf(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[rt], delete t[Tr], delete t[Di], delete t[sh], delete t[ch])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Tf(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rs(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Tf(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fl));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Qi(e, t, n), e = e.sibling; e !== null; ) Qi(e, t, n), (e = e.sibling);
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), (e = e.sibling);
}
var pe = null,
  Ge = !1;
function Ct(e, t, n) {
  for (n = n.child; n !== null; ) Mf(e, t, n), (n = n.sibling);
}
function Mf(e, t, n) {
  if (lt && typeof lt.onCommitFiberUnmount == "function")
    try {
      lt.onCommitFiberUnmount(to, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Se || Nn(n, t);
    case 6:
      var r = pe,
        l = Ge;
      (pe = null),
        Ct(e, t, n),
        (pe = r),
        (Ge = l),
        pe !== null &&
          (Ge
            ? ((e = pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : pe.removeChild(n.stateNode));
      break;
    case 18:
      pe !== null &&
        (Ge
          ? ((e = pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? Vo(e.parentNode, n)
              : e.nodeType === 1 && Vo(e, n),
            Rr(e))
          : Vo(pe, n.stateNode));
      break;
    case 4:
      (r = pe),
        (l = Ge),
        (pe = n.stateNode.containerInfo),
        (Ge = !0),
        Ct(e, t, n),
        (pe = r),
        (Ge = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Se &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Wi(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ct(e, t, n);
      break;
    case 1:
      if (
        !Se &&
        (Nn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          re(n, t, u);
        }
      Ct(e, t, n);
      break;
    case 21:
      Ct(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Se = (r = Se) || n.memoizedState !== null), Ct(e, t, n), (Se = r))
        : Ct(e, t, n);
      break;
    default:
      Ct(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new _h()),
      t.forEach(function (r) {
        var l = Fh.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function Ye(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (pe = u.stateNode), (Ge = !1);
              break e;
            case 3:
              (pe = u.stateNode.containerInfo), (Ge = !0);
              break e;
            case 4:
              (pe = u.stateNode.containerInfo), (Ge = !0);
              break e;
          }
          u = u.return;
        }
        if (pe === null) throw Error(k(160));
        Mf(o, i, l), (pe = null), (Ge = !1);
        var a = l.alternate;
        a !== null && (a.return = null), (l.return = null);
      } catch (s) {
        re(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) jf(t, e), (t = t.sibling);
}
function jf(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ye(t, e), tt(e), r & 4)) {
        try {
          yr(3, e, e.return), so(3, e);
        } catch (y) {
          re(e, e.return, y);
        }
        try {
          yr(5, e, e.return);
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 1:
      Ye(t, e), tt(e), r & 512 && n !== null && Nn(n, n.return);
      break;
    case 5:
      if (
        (Ye(t, e),
        tt(e),
        r & 512 && n !== null && Nn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          xr(l, "");
        } catch (y) {
          re(e, e.return, y);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ec(l, o),
              vi(u, i);
            var s = vi(u, o);
            for (i = 0; i < a.length; i += 2) {
              var p = a[i],
                m = a[i + 1];
              p === "style"
                ? oc(l, m)
                : p === "dangerouslySetInnerHTML"
                ? rc(l, m)
                : p === "children"
                ? xr(l, m)
                : iu(l, p, m, s);
            }
            switch (u) {
              case "input":
                fi(l, o);
                break;
              case "textarea":
                tc(l, o);
                break;
              case "select":
                var c = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var v = o.value;
                v != null
                  ? zn(l, !!o.multiple, v, !1)
                  : c !== !!o.multiple &&
                    (o.defaultValue != null
                      ? zn(l, !!o.multiple, o.defaultValue, !0)
                      : zn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[Tr] = o;
          } catch (y) {
            re(e, e.return, y);
          }
      }
      break;
    case 6:
      if ((Ye(t, e), tt(e), r & 4)) {
        if (e.stateNode === null) throw Error(k(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (y) {
          re(e, e.return, y);
        }
      }
      break;
    case 3:
      if (
        (Ye(t, e), tt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Rr(t.containerInfo);
        } catch (y) {
          re(e, e.return, y);
        }
      break;
    case 4:
      Ye(t, e), tt(e);
      break;
    case 13:
      Ye(t, e),
        tt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Au = oe())),
        r & 4 && ls(e);
      break;
    case 22:
      if (
        ((p = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Se = (s = Se) || p), Ye(t, e), (Se = s)) : Ye(t, e),
        tt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !p && e.mode & 1)
        )
          for (N = e, p = e.child; p !== null; ) {
            for (m = N = p; N !== null; ) {
              switch (((c = N), (v = c.child), c.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yr(4, c, c.return);
                  break;
                case 1:
                  Nn(c, c.return);
                  var w = c.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = c), (n = c.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (y) {
                      re(r, n, y);
                    }
                  }
                  break;
                case 5:
                  Nn(c, c.return);
                  break;
                case 22:
                  if (c.memoizedState !== null) {
                    is(m);
                    continue;
                  }
              }
              v !== null ? ((v.return = c), (N = v)) : is(m);
            }
            p = p.sibling;
          }
        e: for (p = null, m = e; ; ) {
          if (m.tag === 5) {
            if (p === null) {
              p = m;
              try {
                (l = m.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (a = m.memoizedProps.style),
                      (i =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (u.style.display = lc("display", i)));
              } catch (y) {
                re(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (p === null)
              try {
                m.stateNode.nodeValue = s ? "" : m.memoizedProps;
              } catch (y) {
                re(e, e.return, y);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            p === m && (p = null), (m = m.return);
          }
          p === m && (p = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      Ye(t, e), tt(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      Ye(t, e), tt(e);
  }
}
function tt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Tf(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (xr(l, ""), (r.flags &= -33));
          var o = rs(e);
          Ki(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = rs(e);
          Qi(e, u, i);
          break;
        default:
          throw Error(k(161));
      }
    } catch (a) {
      re(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Nh(e, t, n) {
  (N = e), Of(e);
}
function Of(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || dl;
      if (!i) {
        var u = l.alternate,
          a = (u !== null && u.memoizedState !== null) || Se;
        u = dl;
        var s = Se;
        if (((dl = i), (Se = a) && !s))
          for (N = l; N !== null; )
            (i = N),
              (a = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? us(l)
                : a !== null
                ? ((a.return = i), (N = a))
                : us(l);
        for (; o !== null; ) (N = o), Of(o), (o = o.sibling);
        (N = l), (dl = u), (Se = s);
      }
      os(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (N = o)) : os(e);
  }
}
function os(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Se || so(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Se)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  );
                }
              var o = t.updateQueue;
              o !== null && Va(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Va(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var p = s.memoizedState;
                  if (p !== null) {
                    var m = p.dehydrated;
                    m !== null && Rr(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(k(163));
          }
        Se || (t.flags & 512 && Hi(t));
      } catch (c) {
        re(t, t.return, c);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function is(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function us(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            so(4, t);
          } catch (a) {
            re(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              re(t, l, a);
            }
          }
          var o = t.return;
          try {
            Hi(t);
          } catch (a) {
            re(t, o, a);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Hi(t);
          } catch (a) {
            re(t, i, a);
          }
      }
    } catch (a) {
      re(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (N = u);
      break;
    }
    N = t.return;
  }
}
var Lh = Math.ceil,
  Yl = Et.ReactCurrentDispatcher,
  Iu = Et.ReactCurrentOwner,
  He = Et.ReactCurrentBatchConfig,
  V = 0,
  de = null,
  ue = null,
  me = 0,
  Oe = 0,
  Ln = Vt(0),
  ce = 0,
  Ur = null,
  un = 0,
  co = 0,
  Uu = 0,
  wr = null,
  Le = null,
  Au = 0,
  Hn = 1 / 0,
  ft = null,
  Xl = !1,
  Yi = null,
  Ft = null,
  pl = !1,
  Dt = null,
  Gl = 0,
  Sr = 0,
  Xi = null,
  Pl = -1,
  _l = 0;
function xe() {
  return V & 6 ? oe() : Pl !== -1 ? Pl : (Pl = oe());
}
function It(e) {
  return e.mode & 1
    ? V & 2 && me !== 0
      ? me & -me
      : dh.transition !== null
      ? (_l === 0 && (_l = gc()), _l)
      : ((e = K),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function qe(e, t, n, r) {
  if (50 < Sr) throw ((Sr = 0), (Xi = null), Error(k(185)));
  Wr(e, n, r),
    (!(V & 2) || e !== de) &&
      (e === de && (!(V & 2) && (co |= n), ce === 4 && Nt(e, me)),
      Me(e, r),
      n === 1 && V === 0 && !(t.mode & 1) && ((Hn = oe() + 500), io && Wt()));
}
function Me(e, t) {
  var n = e.callbackNode;
  dp(e, t);
  var r = Tl(e, e === de ? me : 0);
  if (r === 0)
    n !== null && va(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && va(n), t === 1))
      e.tag === 0 ? fh(as.bind(null, e)) : Wc(as.bind(null, e)),
        uh(function () {
          !(V & 6) && Wt();
        }),
        (n = null);
    else {
      switch (yc(r)) {
        case 1:
          n = fu;
          break;
        case 4:
          n = mc;
          break;
        case 16:
          n = zl;
          break;
        case 536870912:
          n = vc;
          break;
        default:
          n = zl;
      }
      n = Wf(n, Ff.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ff(e, t) {
  if (((Pl = -1), (_l = 0), V & 6)) throw Error(k(327));
  var n = e.callbackNode;
  if (Fn() && e.callbackNode !== n) return null;
  var r = Tl(e, e === de ? me : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Zl(e, r);
  else {
    t = r;
    var l = V;
    V |= 2;
    var o = Uf();
    (de !== e || me !== t) && ((ft = null), (Hn = oe() + 500), tn(e, t));
    do
      try {
        Th();
        break;
      } catch (u) {
        If(e, u);
      }
    while (1);
    Cu(),
      (Yl.current = o),
      (V = l),
      ue !== null ? (t = 0) : ((de = null), (me = 0), (t = ce));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Ei(e)), l !== 0 && ((r = l), (t = Gi(e, l)))), t === 1)
    )
      throw ((n = Ur), tn(e, 0), Nt(e, r), Me(e, oe()), n);
    if (t === 6) Nt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Dh(l) &&
          ((t = Zl(e, r)),
          t === 2 && ((o = Ei(e)), o !== 0 && ((r = o), (t = Gi(e, o)))),
          t === 1))
      )
        throw ((n = Ur), tn(e, 0), Nt(e, r), Me(e, oe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Gt(e, Le, ft);
          break;
        case 3:
          if (
            (Nt(e, r), (r & 130023424) === r && ((t = Au + 500 - oe()), 10 < t))
          ) {
            if (Tl(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              xe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Li(Gt.bind(null, e, Le, ft), t);
            break;
          }
          Gt(e, Le, ft);
          break;
        case 4:
          if ((Nt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Je(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Lh(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Li(Gt.bind(null, e, Le, ft), r);
            break;
          }
          Gt(e, Le, ft);
          break;
        case 5:
          Gt(e, Le, ft);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return Me(e, oe()), e.callbackNode === n ? Ff.bind(null, e) : null;
}
function Gi(e, t) {
  var n = wr;
  return (
    e.current.memoizedState.isDehydrated && (tn(e, t).flags |= 256),
    (e = Zl(e, t)),
    e !== 2 && ((t = Le), (Le = n), t !== null && Zi(t)),
    e
  );
}
function Zi(e) {
  Le === null ? (Le = e) : Le.push.apply(Le, e);
}
function Dh(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!be(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nt(e, t) {
  for (
    t &= ~Uu,
      t &= ~co,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Je(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function as(e) {
  if (V & 6) throw Error(k(327));
  Fn();
  var t = Tl(e, 0);
  if (!(t & 1)) return Me(e, oe()), null;
  var n = Zl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && ((t = r), (n = Gi(e, r)));
  }
  if (n === 1) throw ((n = Ur), tn(e, 0), Nt(e, t), Me(e, oe()), n);
  if (n === 6) throw Error(k(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Gt(e, Le, ft),
    Me(e, oe()),
    null
  );
}
function $u(e, t) {
  var n = V;
  V |= 1;
  try {
    return e(t);
  } finally {
    (V = n), V === 0 && ((Hn = oe() + 500), io && Wt());
  }
}
function an(e) {
  Dt !== null && Dt.tag === 0 && !(V & 6) && Fn();
  var t = V;
  V |= 1;
  var n = He.transition,
    r = K;
  try {
    if (((He.transition = null), (K = 1), e)) return e();
  } finally {
    (K = r), (He.transition = n), (V = t), !(V & 6) && Wt();
  }
}
function Bu() {
  (Oe = Ln.current), J(Ln);
}
function tn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ih(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Eu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Il();
          break;
        case 3:
          Vn(), J(ze), J(Ee), Du();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          Vn();
          break;
        case 13:
          J(ee);
          break;
        case 19:
          J(ee);
          break;
        case 10:
          Pu(r.type._context);
          break;
        case 22:
        case 23:
          Bu();
      }
      n = n.return;
    }
  if (
    ((de = e),
    (ue = e = Ut(e.current, null)),
    (me = Oe = t),
    (ce = 0),
    (Ur = null),
    (Uu = co = un = 0),
    (Le = wr = null),
    qt !== null)
  ) {
    for (t = 0; t < qt.length; t++)
      if (((n = qt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    qt = null;
  }
  return e;
}
function If(e, t) {
  do {
    var n = ue;
    try {
      if ((Cu(), (kl.current = Kl), Ql)) {
        for (var r = te.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ql = !1;
      }
      if (
        ((on = 0),
        (fe = se = te = null),
        (gr = !1),
        (Or = 0),
        (Iu.current = null),
        n === null || n.return === null)
      ) {
        (ce = 1), (Ur = t), (ue = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          a = t;
        if (
          ((t = me),
          (u.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var s = a,
            p = u,
            m = p.tag;
          if (!(p.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var c = p.alternate;
            c
              ? ((p.updateQueue = c.updateQueue),
                (p.memoizedState = c.memoizedState),
                (p.lanes = c.lanes))
              : ((p.updateQueue = null), (p.memoizedState = null));
          }
          var v = Ga(i);
          if (v !== null) {
            (v.flags &= -257),
              Za(v, i, u, o, t),
              v.mode & 1 && Xa(o, s, t),
              (t = v),
              (a = s);
            var w = t.updateQueue;
            if (w === null) {
              var y = new Set();
              y.add(a), (t.updateQueue = y);
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              Xa(o, s, t), Vu();
              break e;
            }
            a = Error(k(426));
          }
        } else if (b && u.mode & 1) {
          var z = Ga(i);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256),
              Za(z, i, u, o, t),
              ku(Wn(a, u));
            break e;
          }
        }
        (o = a = Wn(a, u)),
          ce !== 4 && (ce = 2),
          wr === null ? (wr = [o]) : wr.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Sf(o, a, t);
              Ba(o, d);
              break e;
            case 1:
              u = a;
              var f = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof f.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Ft === null || !Ft.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var g = Ef(o, u, t);
                Ba(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      $f(n);
    } catch (C) {
      (t = C), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function Uf() {
  var e = Yl.current;
  return (Yl.current = Kl), e === null ? Kl : e;
}
function Vu() {
  (ce === 0 || ce === 3 || ce === 2) && (ce = 4),
    de === null || (!(un & 268435455) && !(co & 268435455)) || Nt(de, me);
}
function Zl(e, t) {
  var n = V;
  V |= 2;
  var r = Uf();
  (de !== e || me !== t) && ((ft = null), tn(e, t));
  do
    try {
      zh();
      break;
    } catch (l) {
      If(e, l);
    }
  while (1);
  if ((Cu(), (V = n), (Yl.current = r), ue !== null)) throw Error(k(261));
  return (de = null), (me = 0), ce;
}
function zh() {
  for (; ue !== null; ) Af(ue);
}
function Th() {
  for (; ue !== null && !rp(); ) Af(ue);
}
function Af(e) {
  var t = Vf(e.alternate, e, Oe);
  (e.memoizedProps = e.pendingProps),
    t === null ? $f(e) : (ue = t),
    (Iu.current = null);
}
function $f(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Ph(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ce = 6), (ue = null);
        return;
      }
    } else if (((n = Ch(n, t, Oe)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  ce === 0 && (ce = 5);
}
function Gt(e, t, n) {
  var r = K,
    l = He.transition;
  try {
    (He.transition = null), (K = 1), Mh(e, t, n, r);
  } finally {
    (He.transition = l), (K = r);
  }
  return null;
}
function Mh(e, t, n, r) {
  do Fn();
  while (Dt !== null);
  if (V & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(k(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (pp(e, o),
    e === de && ((ue = de = null), (me = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pl ||
      ((pl = !0),
      Wf(zl, function () {
        return Fn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = He.transition), (He.transition = null);
    var i = K;
    K = 1;
    var u = V;
    (V |= 4),
      (Iu.current = null),
      Rh(e, n),
      jf(n, e),
      bp(Ri),
      (Ml = !!_i),
      (Ri = _i = null),
      (e.current = n),
      Nh(n),
      lp(),
      (V = u),
      (K = i),
      (He.transition = o);
  } else e.current = n;
  if (
    (pl && ((pl = !1), (Dt = e), (Gl = l)),
    (o = e.pendingLanes),
    o === 0 && (Ft = null),
    up(n.stateNode),
    Me(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Xl) throw ((Xl = !1), (e = Yi), (Yi = null), e);
  return (
    Gl & 1 && e.tag !== 0 && Fn(),
    (o = e.pendingLanes),
    o & 1 ? (e === Xi ? Sr++ : ((Sr = 0), (Xi = e))) : (Sr = 0),
    Wt(),
    null
  );
}
function Fn() {
  if (Dt !== null) {
    var e = yc(Gl),
      t = He.transition,
      n = K;
    try {
      if (((He.transition = null), (K = 16 > e ? 16 : e), Dt === null))
        var r = !1;
      else {
        if (((e = Dt), (Dt = null), (Gl = 0), V & 6)) throw Error(k(331));
        var l = V;
        for (V |= 4, N = e.current; N !== null; ) {
          var o = N,
            i = o.child;
          if (N.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var s = u[a];
                for (N = s; N !== null; ) {
                  var p = N;
                  switch (p.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yr(8, p, o);
                  }
                  var m = p.child;
                  if (m !== null) (m.return = p), (N = m);
                  else
                    for (; N !== null; ) {
                      p = N;
                      var c = p.sibling,
                        v = p.return;
                      if ((zf(p), p === s)) {
                        N = null;
                        break;
                      }
                      if (c !== null) {
                        (c.return = v), (N = c);
                        break;
                      }
                      N = v;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var y = w.child;
                if (y !== null) {
                  w.child = null;
                  do {
                    var z = y.sibling;
                    (y.sibling = null), (y = z);
                  } while (y !== null);
                }
              }
              N = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (N = i);
          else
            e: for (; N !== null; ) {
              if (((o = N), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    yr(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (N = d);
                break e;
              }
              N = o.return;
            }
        }
        var f = e.current;
        for (N = f; N !== null; ) {
          i = N;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (N = h);
          else
            e: for (i = f; N !== null; ) {
              if (((u = N), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      so(9, u);
                  }
                } catch (C) {
                  re(u, u.return, C);
                }
              if (u === i) {
                N = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (N = g);
                break e;
              }
              N = u.return;
            }
        }
        if (
          ((V = l), Wt(), lt && typeof lt.onPostCommitFiberRoot == "function")
        )
          try {
            lt.onPostCommitFiberRoot(to, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (K = n), (He.transition = t);
    }
  }
  return !1;
}
function ss(e, t, n) {
  (t = Wn(n, t)),
    (t = Sf(e, t, 1)),
    (e = Ot(e, t, 1)),
    (t = xe()),
    e !== null && (Wr(e, 1, t), Me(e, t));
}
function re(e, t, n) {
  if (e.tag === 3) ss(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ss(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Ft === null || !Ft.has(r)))
        ) {
          (e = Wn(n, e)),
            (e = Ef(t, e, 1)),
            (t = Ot(t, e, 1)),
            (e = xe()),
            t !== null && (Wr(t, 1, e), Me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function jh(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = xe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    de === e &&
      (me & n) === n &&
      (ce === 4 || (ce === 3 && (me & 130023424) === me && 500 > oe() - Au)
        ? tn(e, 0)
        : (Uu |= n)),
    Me(e, t);
}
function Bf(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = rl), (rl <<= 1), !(rl & 130023424) && (rl = 4194304))
      : (t = 1));
  var n = xe();
  (e = wt(e, t)), e !== null && (Wr(e, t, n), Me(e, n));
}
function Oh(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Bf(e, n);
}
function Fh(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(k(314));
  }
  r !== null && r.delete(t), Bf(e, n);
}
var Vf;
Vf = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || ze.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), xh(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), b && t.flags & 1048576 && Hc(t, $l, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Cl(e, t), (e = t.pendingProps);
      var l = An(t, Ee.current);
      On(t, n), (l = Tu(null, t, r, e, l, n));
      var o = Mu();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Te(r) ? ((o = !0), Ul(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ru(t),
            (l.updater = uo),
            (t.stateNode = l),
            (l._reactInternals = t),
            Fi(t, r, e, n),
            (t = Ai(null, t, r, !0, o, n)))
          : ((t.tag = 0), b && o && Su(t), ke(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Cl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Uh(r)),
          (e = Xe(r, e)),
          l)
        ) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = ba(null, t, r, e, n);
            break e;
          case 11:
            t = Ja(null, t, r, e, n);
            break e;
          case 14:
            t = qa(null, t, r, Xe(r.type, e), n);
            break e;
        }
        throw Error(k(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Ui(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        ba(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Pf(t), e === null)) throw Error(k(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Xc(e, t),
          Wl(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Wn(Error(k(423)), t)), (t = es(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Wn(Error(k(424)), t)), (t = es(e, t, r, n, l));
            break e;
          } else
            for (
              Fe = jt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                b = !0,
                Ze = null,
                n = qc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if (($n(), r === l)) {
            t = St(e, t, n);
            break e;
          }
          ke(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        bc(t),
        e === null && Mi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Ni(r, l) ? (i = null) : o !== null && Ni(r, o) && (t.flags |= 32),
        Cf(e, t),
        ke(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Mi(t), null;
    case 13:
      return _f(e, t, n);
    case 4:
      return (
        Nu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Bn(t, null, r, n)) : ke(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Ja(e, t, r, l, n)
      );
    case 7:
      return ke(e, t, t.pendingProps, n), t.child;
    case 8:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ke(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          X(Bl, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (be(o.value, i)) {
            if (o.children === l.children && !ze.current) {
              t = St(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var a = u.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (o.tag === 1) {
                      (a = mt(-1, n & -n)), (a.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var p = s.pending;
                        p === null
                          ? (a.next = a)
                          : ((a.next = p.next), (p.next = a)),
                          (s.pending = a);
                      }
                    }
                    (o.lanes |= n),
                      (a = o.alternate),
                      a !== null && (a.lanes |= n),
                      ji(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(k(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  ji(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ke(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        On(t, n),
        (l = Qe(l)),
        (r = r(l)),
        (t.flags |= 1),
        ke(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Xe(r, t.pendingProps)),
        (l = Xe(r.type, l)),
        qa(e, t, r, l, n)
      );
    case 15:
      return kf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Xe(r, l)),
        Cl(e, t),
        (t.tag = 1),
        Te(r) ? ((e = !0), Ul(t)) : (e = !1),
        On(t, n),
        Zc(t, r, l),
        Fi(t, r, l, n),
        Ai(null, t, r, !0, e, n)
      );
    case 19:
      return Rf(e, t, n);
    case 22:
      return xf(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Wf(e, t) {
  return hc(e, t);
}
function Ih(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function We(e, t, n, r) {
  return new Ih(e, t, n, r);
}
function Wu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Uh(e) {
  if (typeof e == "function") return Wu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === au)) return 11;
    if (e === su) return 14;
  }
  return 2;
}
function Ut(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = We(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Rl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Wu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case wn:
        return nn(n.children, l, o, t);
      case uu:
        (i = 8), (l |= 8);
        break;
      case ii:
        return (
          (e = We(12, n, t, l | 2)), (e.elementType = ii), (e.lanes = o), e
        );
      case ui:
        return (e = We(13, n, t, l)), (e.elementType = ui), (e.lanes = o), e;
      case ai:
        return (e = We(19, n, t, l)), (e.elementType = ai), (e.lanes = o), e;
      case Js:
        return fo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Gs:
              i = 10;
              break e;
            case Zs:
              i = 9;
              break e;
            case au:
              i = 11;
              break e;
            case su:
              i = 14;
              break e;
            case Pt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(k(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = We(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function nn(e, t, n, r) {
  return (e = We(7, e, r, t)), (e.lanes = n), e;
}
function fo(e, t, n, r) {
  return (
    (e = We(22, e, r, t)),
    (e.elementType = Js),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Zo(e, t, n) {
  return (e = We(6, e, null, t)), (e.lanes = n), e;
}
function Jo(e, t, n) {
  return (
    (t = We(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Ah(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zo(0)),
    (this.expirationTimes = zo(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zo(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Hu(e, t, n, r, l, o, i, u, a) {
  return (
    (e = new Ah(e, t, n, u, a)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = We(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(o),
    e
  );
}
function $h(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: yn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Hf(e) {
  if (!e) return $t;
  e = e._reactInternals;
  e: {
    if (cn(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Te(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Te(n)) return Vc(e, n, t);
  }
  return t;
}
function Qf(e, t, n, r, l, o, i, u, a) {
  return (
    (e = Hu(n, r, !0, e, l, o, i, u, a)),
    (e.context = Hf(null)),
    (n = e.current),
    (r = xe()),
    (l = It(n)),
    (o = mt(r, l)),
    (o.callback = t ?? null),
    Ot(n, o, l),
    (e.current.lanes = l),
    Wr(e, l, r),
    Me(e, r),
    e
  );
}
function po(e, t, n, r) {
  var l = t.current,
    o = xe(),
    i = It(l);
  return (
    (n = Hf(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = mt(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Ot(l, t, i)),
    e !== null && (qe(e, l, i, o), El(e, l, i)),
    i
  );
}
function Jl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cs(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qu(e, t) {
  cs(e, t), (e = e.alternate) && cs(e, t);
}
function Bh() {
  return null;
}
var Kf =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ku(e) {
  this._internalRoot = e;
}
ho.prototype.render = Ku.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  po(e, t, null, null);
};
ho.prototype.unmount = Ku.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    an(function () {
      po(null, e, null, null);
    }),
      (t[yt] = null);
  }
};
function ho(e) {
  this._internalRoot = e;
}
ho.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ec();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Rt.length && t !== 0 && t < Rt[n].priority; n++);
    Rt.splice(n, 0, e), n === 0 && xc(e);
  }
};
function Yu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function mo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function fs() {}
function Vh(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = Jl(i);
        o.call(s);
      };
    }
    var i = Qf(t, r, e, 0, null, !1, !1, "", fs);
    return (
      (e._reactRootContainer = i),
      (e[yt] = i.current),
      Dr(e.nodeType === 8 ? e.parentNode : e),
      an(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var s = Jl(a);
      u.call(s);
    };
  }
  var a = Hu(e, 0, !1, null, null, !1, !1, "", fs);
  return (
    (e._reactRootContainer = a),
    (e[yt] = a.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    an(function () {
      po(t, a, n, r);
    }),
    a
  );
}
function vo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var a = Jl(i);
        u.call(a);
      };
    }
    po(t, i, e, l);
  } else i = Vh(n, t, e, l, r);
  return Jl(i);
}
wc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = sr(t.pendingLanes);
        n !== 0 &&
          (du(t, n | 1), Me(t, oe()), !(V & 6) && ((Hn = oe() + 500), Wt()));
      }
      break;
    case 13:
      an(function () {
        var r = wt(e, 1);
        if (r !== null) {
          var l = xe();
          qe(r, e, 1, l);
        }
      }),
        Qu(e, 1);
  }
};
pu = function (e) {
  if (e.tag === 13) {
    var t = wt(e, 134217728);
    if (t !== null) {
      var n = xe();
      qe(t, e, 134217728, n);
    }
    Qu(e, 134217728);
  }
};
Sc = function (e) {
  if (e.tag === 13) {
    var t = It(e),
      n = wt(e, t);
    if (n !== null) {
      var r = xe();
      qe(n, e, t, r);
    }
    Qu(e, t);
  }
};
Ec = function () {
  return K;
};
kc = function (e, t) {
  var n = K;
  try {
    return (K = e), t();
  } finally {
    K = n;
  }
};
yi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((fi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = oo(r);
            if (!l) throw Error(k(90));
            bs(r), fi(r, l);
          }
        }
      }
      break;
    case "textarea":
      tc(e, n);
      break;
    case "select":
      (t = n.value), t != null && zn(e, !!n.multiple, t, !1);
  }
};
ac = $u;
sc = an;
var Wh = { usingClientEntryPoint: !1, Events: [Qr, xn, oo, ic, uc, $u] },
  lr = {
    findFiberByHostInstance: Jt,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Hh = {
    bundleType: lr.bundleType,
    version: lr.version,
    rendererPackageName: lr.rendererPackageName,
    rendererConfig: lr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Et.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = dc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: lr.findFiberByHostInstance || Bh,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var hl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!hl.isDisabled && hl.supportsFiber)
    try {
      (to = hl.inject(Hh)), (lt = hl);
    } catch {}
}
Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Wh;
Ae.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yu(t)) throw Error(k(200));
  return $h(e, t, null, n);
};
Ae.createRoot = function (e, t) {
  if (!Yu(e)) throw Error(k(299));
  var n = !1,
    r = "",
    l = Kf;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Hu(e, 1, !1, null, null, n, !1, r, l)),
    (e[yt] = t.current),
    Dr(e.nodeType === 8 ? e.parentNode : e),
    new Ku(t)
  );
};
Ae.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(k(188))
      : ((e = Object.keys(e).join(",")), Error(k(268, e)));
  return (e = dc(t)), (e = e === null ? null : e.stateNode), e;
};
Ae.flushSync = function (e) {
  return an(e);
};
Ae.hydrate = function (e, t, n) {
  if (!mo(t)) throw Error(k(200));
  return vo(null, e, t, !0, n);
};
Ae.hydrateRoot = function (e, t, n) {
  if (!Yu(e)) throw Error(k(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = Kf;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Qf(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[yt] = t.current),
    Dr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new ho(t);
};
Ae.render = function (e, t, n) {
  if (!mo(t)) throw Error(k(200));
  return vo(null, e, t, !1, n);
};
Ae.unmountComponentAtNode = function (e) {
  if (!mo(e)) throw Error(k(40));
  return e._reactRootContainer
    ? (an(function () {
        vo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[yt] = null);
        });
      }),
      !0)
    : !1;
};
Ae.unstable_batchedUpdates = $u;
Ae.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!mo(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return vo(e, t, n, !1, r);
};
Ae.version = "18.2.0-next-9e3b772b8-20220608";
function Yf() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yf);
    } catch (e) {
      console.error(e);
    }
}
Yf(), (Hs.exports = Ae);
var Qh = Hs.exports,
  ds = Qh;
(li.createRoot = ds.createRoot), (li.hydrateRoot = ds.hydrateRoot);
/**
 * @remix-run/router v1.0.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function le() {
  return (
    (le = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    le.apply(this, arguments)
  );
}
var ae;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(ae || (ae = {}));
const ps = "popstate";
function Kh(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: u } = r.location;
    return Ar(
      "",
      { pathname: o, search: i, hash: u },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default",
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : it(l);
  }
  return Xh(t, n, null, e);
}
function U(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Yh() {
  return Math.random().toString(36).substr(2, 8);
}
function hs(e) {
  return { usr: e.state, key: e.key };
}
function Ar(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    le(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? kt(t) : t,
      { state: n, key: (t && t.key) || r || Yh() },
    )
  );
}
function it(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function kt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function $r(e) {
  let t =
      typeof window < "u" &&
      typeof window.location < "u" &&
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href,
    n = typeof e == "string" ? e : it(e);
  return (
    U(
      t,
      "No window.location.(origin|href) available to create URL for href: " + n,
    ),
    new URL(n, t)
  );
}
function Xh(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    u = ae.Pop,
    a = null;
  function s() {
    (u = ae.Pop), a && a({ action: u, location: c.location });
  }
  function p(v, w) {
    u = ae.Push;
    let y = Ar(c.location, v, w);
    n && n(y, v);
    let z = hs(y),
      d = c.createHref(y);
    try {
      i.pushState(z, "", d);
    } catch {
      l.location.assign(d);
    }
    o && a && a({ action: u, location: c.location });
  }
  function m(v, w) {
    u = ae.Replace;
    let y = Ar(c.location, v, w);
    n && n(y, v);
    let z = hs(y),
      d = c.createHref(y);
    i.replaceState(z, "", d), o && a && a({ action: u, location: c.location });
  }
  let c = {
    get action() {
      return u;
    },
    get location() {
      return e(l, i);
    },
    listen(v) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(ps, s),
        (a = v),
        () => {
          l.removeEventListener(ps, s), (a = null);
        }
      );
    },
    createHref(v) {
      return t(l, v);
    },
    encodeLocation(v) {
      let w = $r(typeof v == "string" ? v : it(v));
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: p,
    replace: m,
    go(v) {
      return i.go(v);
    },
  };
  return c;
}
var he;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(he || (he = {}));
function Gh(e) {
  return e.index === !0;
}
function Xf(e, t, n) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = new Set()),
    e.map((r, l) => {
      let o = [...t, l],
        i = typeof r.id == "string" ? r.id : o.join("-");
      return (
        U(
          r.index !== !0 || !r.children,
          "Cannot specify children on an index route",
        ),
        U(
          !n.has(i),
          'Found a route id collision on id "' +
            i +
            `".  Route id's must be globally unique within Data Router usages`,
        ),
        n.add(i),
        Gh(r)
          ? le({}, r, { id: i })
          : le({}, r, {
              id: i,
              children: r.children ? Xf(r.children, o, n) : void 0,
            })
      );
    })
  );
}
function fr(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? kt(t) : t,
    l = Zf(r.pathname || "/", n);
  if (l == null) return null;
  let o = Gf(e);
  Zh(o);
  let i = null;
  for (let u = 0; i == null && u < o.length; ++u) i = om(o[u], am(l));
  return i;
}
function Gf(e, t, n, r) {
  return (
    t === void 0 && (t = []),
    n === void 0 && (n = []),
    r === void 0 && (r = ""),
    e.forEach((l, o) => {
      let i = {
        relativePath: l.path || "",
        caseSensitive: l.caseSensitive === !0,
        childrenIndex: o,
        route: l,
      };
      i.relativePath.startsWith("/") &&
        (U(
          i.relativePath.startsWith(r),
          'Absolute route path "' +
            i.relativePath +
            '" nested under path ' +
            ('"' + r + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (i.relativePath = i.relativePath.slice(r.length)));
      let u = vt([r, i.relativePath]),
        a = n.concat(i);
      l.children &&
        l.children.length > 0 &&
        (U(
          l.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + u + '".'),
        ),
        Gf(l.children, t, a, u)),
        !(l.path == null && !l.index) &&
          t.push({ path: u, score: rm(u, l.index), routesMeta: a });
    }),
    t
  );
}
function Zh(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : lm(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  );
}
const Jh = /^:\w+$/,
  qh = 3,
  bh = 2,
  em = 1,
  tm = 10,
  nm = -2,
  ms = (e) => e === "*";
function rm(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(ms) && (r += nm),
    t && (r += bh),
    n
      .filter((l) => !ms(l))
      .reduce((l, o) => l + (Jh.test(o) ? qh : o === "" ? em : tm), r)
  );
}
function lm(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function om(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let u = n[i],
      a = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      p = im(
        { path: u.relativePath, caseSensitive: u.caseSensitive, end: a },
        s,
      );
    if (!p) return null;
    Object.assign(r, p.params);
    let m = u.route;
    o.push({
      params: r,
      pathname: vt([l, p.pathname]),
      pathnameBase: dm(vt([l, p.pathnameBase])),
      route: m,
    }),
      p.pathnameBase !== "/" && (l = vt([l, p.pathnameBase]));
  }
  return o;
}
function im(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = um(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    u = l.slice(1);
  return {
    params: r.reduce((s, p, m) => {
      if (p === "*") {
        let c = u[m] || "";
        i = o.slice(0, o.length - c.length).replace(/(.)\/+$/, "$1");
      }
      return (s[p] = sm(u[m] || "", p)), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function um(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Xu(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
        .replace(/:(\w+)/g, (i, u) => (r.push(u), "([^\\/]+)"));
  return (
    e.endsWith("*")
      ? (r.push("*"),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function am(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return (
      Xu(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ")."),
      ),
      e
    );
  }
}
function sm(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (n) {
    return (
      Xu(
        !1,
        'The value for the URL param "' +
          t +
          '" will not be decoded because' +
          (' the string "' +
            e +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + n + ")."),
      ),
      e
    );
  }
}
function Zf(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Xu(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function cm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? kt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : fm(n, t)) : t,
    search: pm(r),
    hash: hm(l),
  };
}
function fm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function qo(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function go(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  );
}
function Gu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = kt(e))
    : ((l = le({}, e)),
      U(
        !l.pathname || !l.pathname.includes("?"),
        qo("?", "pathname", "search", l),
      ),
      U(
        !l.pathname || !l.pathname.includes("#"),
        qo("#", "pathname", "hash", l),
      ),
      U(!l.search || !l.search.includes("#"), qo("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    u;
  if (r || i == null) u = n;
  else {
    let m = t.length - 1;
    if (i.startsWith("..")) {
      let c = i.split("/");
      for (; c[0] === ".."; ) c.shift(), (m -= 1);
      l.pathname = c.join("/");
    }
    u = m >= 0 ? t[m] : "/";
  }
  let a = cm(l, u),
    s = i && i !== "/" && i.endsWith("/"),
    p = (o || i === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (s || p) && (a.pathname += "/"), a;
}
const vt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  dm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  pm = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  hm = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class vs extends Error {}
class mm {
  constructor(t) {
    (this.pendingKeys = new Set()),
      (this.subscriber = void 0),
      U(
        t && typeof t == "object" && !Array.isArray(t),
        "defer() only accepts plain objects",
      );
    let n;
    (this.abortPromise = new Promise((l, o) => (n = o))),
      (this.controller = new AbortController());
    let r = () => n(new vs("Deferred data aborted"));
    (this.unlistenAbortSignal = () =>
      this.controller.signal.removeEventListener("abort", r)),
      this.controller.signal.addEventListener("abort", r),
      (this.data = Object.entries(t).reduce((l, o) => {
        let [i, u] = o;
        return Object.assign(l, { [i]: this.trackPromise(i, u) });
      }, {}));
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.pendingKeys.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, null, l),
      (l) => this.onSettle(r, t, l),
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, "_tracked", { get: () => !0 }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof vs)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, "_error", { get: () => r }),
        Promise.reject(r)
      );
    this.pendingKeys.delete(n), this.done && this.unlistenAbortSignal();
    const o = this.subscriber;
    return r
      ? (Object.defineProperty(t, "_error", { get: () => r }),
        o && o(!1),
        Promise.reject(r))
      : (Object.defineProperty(t, "_data", { get: () => l }), o && o(!1), l);
  }
  subscribe(t) {
    this.subscriber = t;
  }
  cancel() {
    this.controller.abort(),
      this.pendingKeys.forEach((n, r) => this.pendingKeys.delete(r));
    let t = this.subscriber;
    t && t(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener("abort", r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener("abort", r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeys.size === 0;
  }
  get unwrappedData() {
    return (
      U(
        this.data !== null && this.done,
        "Can only unwrap data on initialized and settled deferreds",
      ),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, { [r]: gm(l) });
      }, {})
    );
  }
}
function vm(e) {
  return e instanceof Promise && e._tracked === !0;
}
function gm(e) {
  if (!vm(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
class yo {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function Jf(e) {
  return e instanceof yo;
}
const qf = ["post", "put", "patch", "delete"],
  ym = new Set(qf),
  wm = ["get", ...qf],
  Sm = new Set(wm),
  Em = new Set([301, 302, 303, 307, 308]),
  km = new Set([307, 308]),
  bo = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  xm = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
  },
  Cm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Pm = !Cm;
function _m(e) {
  U(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter",
  );
  let t = Xf(e.routes),
    n = null,
    r = new Set(),
    l = null,
    o = null,
    i = null,
    u = !1,
    a = fr(t, e.history.location, e.basename),
    s = null;
  if (a == null) {
    let S = Zt(404, { pathname: e.history.location.pathname }),
      { matches: E, route: P } = Es(t);
    (a = E), (s = { [P.id]: S });
  }
  let p = !a.some((S) => S.route.loader) || e.hydrationData != null,
    m,
    c = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: a,
      initialized: p,
      navigation: bo,
      restoreScrollPosition: null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || s,
      fetchers: new Map(),
    },
    v = ae.Pop,
    w = !1,
    y,
    z = !1,
    d = !1,
    f = [],
    h = [],
    g = new Map(),
    C = 0,
    L = -1,
    R = new Map(),
    D = new Set(),
    W = new Map(),
    O = new Map();
  function je() {
    return (
      (n = e.history.listen((S) => {
        let { action: E, location: P } = S;
        return _(E, P);
      })),
      c.initialized || _(ae.Pop, c.location),
      m
    );
  }
  function Ht() {
    n && n(), r.clear(), y && y.abort(), c.fetchers.forEach((S, E) => xo(E));
  }
  function Qt(S) {
    return r.add(S), () => r.delete(S);
  }
  function ge(S) {
    (c = le({}, c, S)), r.forEach((E) => E(c));
  }
  function Kt(S, E) {
    var P;
    let M =
        c.actionData != null &&
        c.navigation.formMethod != null &&
        c.navigation.state === "loading" &&
        ((P = c.navigation.formAction) == null ? void 0 : P.split("?")[0]) ===
          S.pathname,
      j = E.loaderData
        ? { loaderData: ei(c.loaderData, E.loaderData, E.matches || []) }
        : {};
    ge(
      le({}, M ? {} : { actionData: null }, E, j, {
        historyAction: v,
        location: S,
        initialized: !0,
        navigation: bo,
        revalidation: "idle",
        restoreScrollPosition: c.navigation.formData
          ? !1
          : bu(S, E.matches || c.matches),
        preventScrollReset: w,
      }),
    ),
      z ||
        v === ae.Pop ||
        (v === ae.Push
          ? e.history.push(S, S.state)
          : v === ae.Replace && e.history.replace(S, S.state)),
      (v = ae.Pop),
      (w = !1),
      (z = !1),
      (d = !1),
      (f = []),
      (h = []);
  }
  async function Gn(S, E) {
    if (typeof S == "number") {
      e.history.go(S);
      return;
    }
    let { path: P, submission: M, error: j } = gs(S, E),
      A = Ar(c.location, P, E && E.state);
    A = le({}, A, e.history.encodeLocation(A));
    let B = (E && E.replace) === !0 || M != null ? ae.Replace : ae.Push,
      H = E && "preventScrollReset" in E ? E.preventScrollReset === !0 : void 0;
    return await _(B, A, {
      submission: M,
      pendingError: j,
      preventScrollReset: H,
      replace: E && E.replace,
    });
  }
  function Zn() {
    if (
      (xt(),
      ge({ revalidation: "loading" }),
      c.navigation.state !== "submitting")
    ) {
      if (c.navigation.state === "idle") {
        _(c.historyAction, c.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      _(v || c.historyAction, c.navigation.location, {
        overrideNavigation: c.navigation,
      });
    }
  }
  async function _(S, E, P) {
    y && y.abort(),
      (y = null),
      (v = S),
      (z = (P && P.startUninterruptedRevalidation) === !0),
      pd(c.location, c.matches),
      (w = (P && P.preventScrollReset) === !0);
    let M = P && P.overrideNavigation,
      j = fr(t, E, e.basename);
    if (!j) {
      let _e = Zt(404, { pathname: E.pathname }),
        { matches: pn, route: st } = Es(t);
      Co(), Kt(E, { matches: pn, loaderData: {}, errors: { [st.id]: _e } });
      return;
    }
    if (zm(c.location, E)) {
      Kt(E, { matches: j });
      return;
    }
    y = new AbortController();
    let A = ir(E, y.signal, P && P.submission),
      B,
      H;
    if (P && P.pendingError) H = { [Dn(j).route.id]: P.pendingError };
    else if (P && P.submission) {
      let _e = await F(A, E, P.submission, j, { replace: P.replace });
      if (_e.shortCircuited) return;
      (B = _e.pendingActionData),
        (H = _e.pendingActionError),
        (M = le({ state: "loading", location: E }, P.submission)),
        (A = new Request(A.url, { signal: A.signal }));
    }
    let {
      shortCircuited: Y,
      loaderData: Q,
      errors: G,
    } = await I(A, E, j, M, P && P.submission, P && P.replace, B, H);
    Y || ((y = null), Kt(E, { matches: j, loaderData: Q, errors: G }));
  }
  async function F(S, E, P, M, j) {
    xt();
    let A = le({ state: "submitting", location: E }, P);
    ge({ navigation: A });
    let B,
      H = Ps(M, E);
    if (!H.route.action)
      B = {
        type: he.error,
        error: Zt(405, {
          method: S.method,
          pathname: E.pathname,
          routeId: H.route.id,
        }),
      };
    else if (((B = await or("action", S, H, M, m.basename)), S.signal.aborted))
      return { shortCircuited: !0 };
    if (In(B))
      return await at(c, B, j && j.replace === !0), { shortCircuited: !0 };
    if (Er(B)) {
      let Y = Dn(M, H.route.id);
      return (
        (j && j.replace) !== !0 && (v = ae.Push),
        { pendingActionError: { [Y.route.id]: B.error } }
      );
    }
    if (en(B)) throw new Error("defer() is not supported in actions");
    return { pendingActionData: { [H.route.id]: B.data } };
  }
  async function I(S, E, P, M, j, A, B, H) {
    let Y = M;
    Y ||
      (Y = {
        state: "loading",
        location: E,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      });
    let [Q, G] = ys(c, P, j, E, d, f, h, B, H, W);
    if (
      (Co(
        (Re) =>
          !(P && P.some((Ne) => Ne.route.id === Re)) ||
          (Q && Q.some((Ne) => Ne.route.id === Re)),
      ),
      Q.length === 0 && G.length === 0)
    )
      return (
        Kt(E, {
          matches: P,
          loaderData: ei(c.loaderData, {}, P),
          errors: H || null,
          actionData: B || null,
        }),
        { shortCircuited: !0 }
      );
    z ||
      (G.forEach((Re) => {
        let [Ne] = Re,
          vn = c.fetchers.get(Ne),
          Jr = {
            state: "loading",
            data: vn && vn.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(Ne, Jr);
      }),
      ge(
        le(
          { navigation: Y, actionData: B || c.actionData || null },
          G.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
        ),
      )),
      (L = ++C),
      G.forEach((Re) => {
        let [Ne] = Re;
        return g.set(Ne, y);
      });
    let {
      results: _e,
      loaderResults: pn,
      fetcherResults: st,
    } = await et(c.matches, P, Q, G, S);
    if (S.signal.aborted) return { shortCircuited: !0 };
    G.forEach((Re) => {
      let [Ne] = Re;
      return g.delete(Ne);
    });
    let hn = ks(_e);
    if (hn) return await at(c, hn, A), { shortCircuited: !0 };
    let { loaderData: Po, errors: Zr } = Ss(c, P, Q, pn, H, G, st, O);
    O.forEach((Re, Ne) => {
      Re.subscribe((vn) => {
        (vn || Re.done) && O.delete(Ne);
      });
    }),
      fd();
    let mn = qu(L);
    return le(
      { loaderData: Po, errors: Zr },
      mn || G.length > 0 ? { fetchers: new Map(c.fetchers) } : {},
    );
  }
  function q(S) {
    return c.fetchers.get(S) || xm;
  }
  function ie(S, E, P, M) {
    if (Pm)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    g.has(S) && Gr(S);
    let j = fr(t, P, e.basename);
    if (!j) {
      ko(S, E, Zt(404, { pathname: P }));
      return;
    }
    let { path: A, submission: B } = gs(P, M, !0),
      H = Ps(j, A);
    if (B) {
      dn(S, E, A, H, j, B);
      return;
    }
    W.set(S, [A, H, j]), ut(S, E, A, H, j);
  }
  async function dn(S, E, P, M, j, A) {
    if ((xt(), W.delete(S), !M.route.action)) {
      let ct = Zt(405, { method: A.formMethod, pathname: P, routeId: E });
      ko(S, E, ct);
      return;
    }
    let B = c.fetchers.get(S),
      H = le({ state: "submitting" }, A, { data: B && B.data });
    c.fetchers.set(S, H), ge({ fetchers: new Map(c.fetchers) });
    let Y = new AbortController(),
      Q = ir(P, Y.signal, A);
    g.set(S, Y);
    let G = await or("action", Q, M, j, m.basename);
    if (Q.signal.aborted) {
      g.get(S) === Y && g.delete(S);
      return;
    }
    if (In(G)) {
      g.delete(S), D.add(S);
      let ct = le({ state: "loading" }, A, { data: void 0 });
      return (
        c.fetchers.set(S, ct), ge({ fetchers: new Map(c.fetchers) }), at(c, G)
      );
    }
    if (Er(G)) {
      ko(S, E, G.error);
      return;
    }
    en(G) && U(!1, "defer() is not supported in actions");
    let _e = c.navigation.location || c.location,
      pn = ir(_e, Y.signal),
      st =
        c.navigation.state !== "idle"
          ? fr(t, c.navigation.location, e.basename)
          : c.matches;
    U(st, "Didn't find any matches after fetcher action");
    let hn = ++C;
    R.set(S, hn);
    let Po = le({ state: "loading", data: G.data }, A);
    c.fetchers.set(S, Po);
    let [Zr, mn] = ys(
      c,
      st,
      A,
      _e,
      d,
      f,
      h,
      { [M.route.id]: G.data },
      void 0,
      W,
    );
    mn
      .filter((ct) => {
        let [Yt] = ct;
        return Yt !== S;
      })
      .forEach((ct) => {
        let [Yt] = ct,
          na = c.fetchers.get(Yt),
          vd = {
            state: "loading",
            data: na && na.data,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
          };
        c.fetchers.set(Yt, vd), g.set(Yt, Y);
      }),
      ge({ fetchers: new Map(c.fetchers) });
    let {
      results: Re,
      loaderResults: Ne,
      fetcherResults: vn,
    } = await et(c.matches, st, Zr, mn, pn);
    if (Y.signal.aborted) return;
    R.delete(S),
      g.delete(S),
      mn.forEach((ct) => {
        let [Yt] = ct;
        return g.delete(Yt);
      });
    let Jr = ks(Re);
    if (Jr) return at(c, Jr);
    let { loaderData: ea, errors: ta } = Ss(
        c,
        c.matches,
        Zr,
        Ne,
        void 0,
        mn,
        vn,
        O,
      ),
      hd = {
        state: "idle",
        data: G.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
    c.fetchers.set(S, hd);
    let md = qu(hn);
    c.navigation.state === "loading" && hn > L
      ? (U(v, "Expected pending action"),
        y && y.abort(),
        Kt(c.navigation.location, {
          matches: st,
          loaderData: ea,
          errors: ta,
          fetchers: new Map(c.fetchers),
        }))
      : (ge(
          le(
            { errors: ta, loaderData: ei(c.loaderData, ea, st) },
            md ? { fetchers: new Map(c.fetchers) } : {},
          ),
        ),
        (d = !1));
  }
  async function ut(S, E, P, M, j) {
    let A = c.fetchers.get(S),
      B = {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        data: A && A.data,
      };
    c.fetchers.set(S, B), ge({ fetchers: new Map(c.fetchers) });
    let H = new AbortController(),
      Y = ir(P, H.signal);
    g.set(S, H);
    let Q = await or("loader", Y, M, j, m.basename);
    if (
      (en(Q) && (Q = (await rd(Q, Y.signal, !0)) || Q),
      g.get(S) === H && g.delete(S),
      Y.signal.aborted)
    )
      return;
    if (In(Q)) {
      await at(c, Q);
      return;
    }
    if (Er(Q)) {
      let _e = Dn(c.matches, E);
      c.fetchers.delete(S),
        ge({
          fetchers: new Map(c.fetchers),
          errors: { [_e.route.id]: Q.error },
        });
      return;
    }
    U(!en(Q), "Unhandled fetcher deferred data");
    let G = {
      state: "idle",
      data: Q.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
    };
    c.fetchers.set(S, G), ge({ fetchers: new Map(c.fetchers) });
  }
  async function at(S, E, P) {
    var M;
    E.revalidate && (d = !0);
    let j = Ar(S.location, E.location);
    if (
      (U(j, "Expected a location on the redirect navigation"),
      typeof ((M = window) == null ? void 0 : M.location) < "u")
    ) {
      let G = $r(E.location).origin;
      if (window.location.origin !== G) {
        P
          ? window.location.replace(E.location)
          : window.location.assign(E.location);
        return;
      }
    }
    y = null;
    let A = P === !0 ? ae.Replace : ae.Push,
      {
        formMethod: B,
        formAction: H,
        formEncType: Y,
        formData: Q,
      } = S.navigation;
    km.has(E.status) && B && nd(B) && Y && Q
      ? await _(A, j, {
          submission: {
            formMethod: B,
            formAction: E.location,
            formEncType: Y,
            formData: Q,
          },
        })
      : await _(A, j, {
          overrideNavigation: {
            state: "loading",
            location: j,
            formMethod: B || void 0,
            formAction: H || void 0,
            formEncType: Y || void 0,
            formData: Q || void 0,
          },
        });
  }
  async function et(S, E, P, M, j) {
    let A = await Promise.all([
        ...P.map((Y) => or("loader", j, Y, E, m.basename)),
        ...M.map((Y) => {
          let [, Q, G, _e] = Y;
          return or("loader", ir(Q, j.signal), G, _e, m.basename);
        }),
      ]),
      B = A.slice(0, P.length),
      H = A.slice(P.length);
    return (
      await Promise.all([
        xs(S, P, B, j.signal, !1, c.loaderData),
        xs(
          S,
          M.map((Y) => {
            let [, , Q] = Y;
            return Q;
          }),
          H,
          j.signal,
          !0,
        ),
      ]),
      { results: A, loaderResults: B, fetcherResults: H }
    );
  }
  function xt() {
    (d = !0),
      f.push(...Co()),
      W.forEach((S, E) => {
        g.has(E) && (h.push(E), Gr(E));
      });
  }
  function ko(S, E, P) {
    let M = Dn(c.matches, E);
    xo(S), ge({ errors: { [M.route.id]: P }, fetchers: new Map(c.fetchers) });
  }
  function xo(S) {
    g.has(S) && Gr(S),
      W.delete(S),
      R.delete(S),
      D.delete(S),
      c.fetchers.delete(S);
  }
  function Gr(S) {
    let E = g.get(S);
    U(E, "Expected fetch controller: " + S), E.abort(), g.delete(S);
  }
  function Ju(S) {
    for (let E of S) {
      let M = {
        state: "idle",
        data: q(E).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
      };
      c.fetchers.set(E, M);
    }
  }
  function fd() {
    let S = [];
    for (let E of D) {
      let P = c.fetchers.get(E);
      U(P, "Expected fetcher: " + E),
        P.state === "loading" && (D.delete(E), S.push(E));
    }
    Ju(S);
  }
  function qu(S) {
    let E = [];
    for (let [P, M] of R)
      if (M < S) {
        let j = c.fetchers.get(P);
        U(j, "Expected fetcher: " + P),
          j.state === "loading" && (Gr(P), R.delete(P), E.push(P));
      }
    return Ju(E), E.length > 0;
  }
  function Co(S) {
    let E = [];
    return (
      O.forEach((P, M) => {
        (!S || S(M)) && (P.cancel(), E.push(M), O.delete(M));
      }),
      E
    );
  }
  function dd(S, E, P) {
    if (
      ((l = S), (i = E), (o = P || ((M) => M.key)), !u && c.navigation === bo)
    ) {
      u = !0;
      let M = bu(c.location, c.matches);
      M != null && ge({ restoreScrollPosition: M });
    }
    return () => {
      (l = null), (i = null), (o = null);
    };
  }
  function pd(S, E) {
    if (l && o && i) {
      let P = E.map((j) => Cs(j, c.loaderData)),
        M = o(S, P) || S.key;
      l[M] = i();
    }
  }
  function bu(S, E) {
    if (l && o && i) {
      let P = E.map((A) => Cs(A, c.loaderData)),
        M = o(S, P) || S.key,
        j = l[M];
      if (typeof j == "number") return j;
    }
    return null;
  }
  return (
    (m = {
      get basename() {
        return e.basename;
      },
      get state() {
        return c;
      },
      get routes() {
        return t;
      },
      initialize: je,
      subscribe: Qt,
      enableScrollRestoration: dd,
      navigate: Gn,
      fetch: ie,
      revalidate: Zn,
      createHref: (S) => e.history.createHref(S),
      encodeLocation: (S) => e.history.encodeLocation(S),
      getFetcher: q,
      deleteFetcher: xo,
      dispose: Ht,
      _internalFetchControllers: g,
      _internalActiveDeferreds: O,
    }),
    m
  );
}
function Rm(e) {
  return e != null && "formData" in e;
}
function gs(e, t, n) {
  n === void 0 && (n = !1);
  let r = typeof e == "string" ? e : it(e);
  if (!t || !Rm(t)) return { path: r };
  if (t.formMethod && !Mm(t.formMethod))
    return { path: r, error: Zt(405, { method: t.formMethod }) };
  if (t.formMethod && nd(t.formMethod))
    return {
      path: r,
      submission: {
        formMethod: t.formMethod,
        formAction: td(r),
        formEncType:
          (t && t.formEncType) || "application/x-www-form-urlencoded",
        formData: t.formData,
      },
    };
  let l = kt(r);
  try {
    let o = ed(t.formData);
    n && l.search && ld(l.search) && o.append("index", ""),
      (l.search = "?" + o);
  } catch {
    return { path: r, error: Zt(400) };
  }
  return { path: it(l) };
}
function Nm(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function ys(e, t, n, r, l, o, i, u, a, s) {
  let p = a ? Object.values(a)[0] : u ? Object.values(u)[0] : null,
    m = a ? Object.keys(a)[0] : void 0,
    v = Nm(t, m).filter(
      (y, z) =>
        y.route.loader != null &&
        (Lm(e.loaderData, e.matches[z], y) ||
          o.some((d) => d === y.route.id) ||
          ws(e.location, e.matches[z], n, r, y, l, p)),
    ),
    w = [];
  return (
    s &&
      s.forEach((y, z) => {
        let [d, f, h] = y;
        i.includes(z)
          ? w.push([z, d, f, h])
          : l && ws(d, f, n, d, f, l, p) && w.push([z, d, f, h]);
      }),
    [v, w]
  );
}
function Lm(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function bf(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function ws(e, t, n, r, l, o, i) {
  let u = $r(e),
    a = t.params,
    s = $r(r),
    p = l.params,
    m = bf(t, l) || u.toString() === s.toString() || u.search !== s.search || o;
  if (l.route.shouldRevalidate) {
    let c = l.route.shouldRevalidate(
      le({ currentUrl: u, currentParams: a, nextUrl: s, nextParams: p }, n, {
        actionResult: i,
        defaultShouldRevalidate: m,
      }),
    );
    if (typeof c == "boolean") return c;
  }
  return m;
}
async function or(e, t, n, r, l, o, i, u) {
  l === void 0 && (l = "/"), o === void 0 && (o = !1), i === void 0 && (i = !1);
  let a,
    s,
    p,
    m = new Promise((v, w) => (p = w)),
    c = () => p();
  t.signal.addEventListener("abort", c);
  try {
    let v = n.route[e];
    U(
      v,
      "Could not find the " + e + ' to run on the "' + n.route.id + '" route',
    ),
      (s = await Promise.race([
        v({ request: t, params: n.params, context: u }),
        m,
      ])),
      U(
        s !== void 0,
        "You defined " +
          (e === "action" ? "an action" : "a loader") +
          " for route " +
          ('"' +
            n.route.id +
            "\" but didn't return anything from your `" +
            e +
            "` ") +
          "function. Please return a value or `null`.",
      );
  } catch (v) {
    (a = he.error), (s = v);
  } finally {
    t.signal.removeEventListener("abort", c);
  }
  if (Tm(s)) {
    let v = s.status;
    if (Em.has(v)) {
      let z = s.headers.get("Location");
      if (
        (U(
          z,
          "Redirects returned/thrown from loaders/actions must have a Location header",
        ),
        !(/^[a-z+]+:\/\//i.test(z) || z.startsWith("//")))
      ) {
        let f = r.slice(0, r.indexOf(n) + 1),
          h = go(f).map((C) => C.pathnameBase),
          g = Gu(z, h, new URL(t.url).pathname);
        if ((U(it(g), "Unable to resolve redirect location: " + z), l)) {
          let C = g.pathname;
          g.pathname = C === "/" ? l : vt([l, C]);
        }
        z = it(g);
      }
      if (o) throw (s.headers.set("Location", z), s);
      return {
        type: he.redirect,
        status: v,
        location: z,
        revalidate: s.headers.get("X-Remix-Revalidate") !== null,
      };
    }
    if (i) throw { type: a || he.data, response: s };
    let w,
      y = s.headers.get("Content-Type");
    return (
      y && y.startsWith("application/json")
        ? (w = await s.json())
        : (w = await s.text()),
      a === he.error
        ? { type: a, error: new yo(v, s.statusText, w), headers: s.headers }
        : { type: he.data, data: w, statusCode: s.status, headers: s.headers }
    );
  }
  return a === he.error
    ? { type: a, error: s }
    : s instanceof mm
    ? { type: he.deferred, deferredData: s }
    : { type: he.data, data: s };
}
function ir(e, t, n) {
  let r = $r(td(e)).toString(),
    l = { signal: t };
  if (n) {
    let { formMethod: o, formEncType: i, formData: u } = n;
    (l.method = o.toUpperCase()),
      (l.body = i === "application/x-www-form-urlencoded" ? ed(u) : u);
  }
  return new Request(r, l);
}
function ed(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    U(
      typeof r == "string",
      'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.',
    ),
      t.append(n, r);
  return t;
}
function Dm(e, t, n, r, l) {
  let o = {},
    i = null,
    u,
    a = !1,
    s = {};
  return (
    n.forEach((p, m) => {
      let c = t[m].route.id;
      if (
        (U(!In(p), "Cannot handle redirect results in processLoaderData"),
        Er(p))
      ) {
        let v = Dn(e, c),
          w = p.error;
        r && ((w = Object.values(r)[0]), (r = void 0)),
          (i = Object.assign(i || {}, { [v.route.id]: w })),
          a || ((a = !0), (u = Jf(p.error) ? p.error.status : 500)),
          p.headers && (s[c] = p.headers);
      } else
        en(p)
          ? (l && l.set(c, p.deferredData), (o[c] = p.deferredData.data))
          : ((o[c] = p.data),
            p.statusCode != null &&
              p.statusCode !== 200 &&
              !a &&
              (u = p.statusCode),
            p.headers && (s[c] = p.headers));
    }),
    r && (i = r),
    { loaderData: o, errors: i, statusCode: u || 200, loaderHeaders: s }
  );
}
function Ss(e, t, n, r, l, o, i, u) {
  let { loaderData: a, errors: s } = Dm(t, n, r, l, u);
  for (let p = 0; p < o.length; p++) {
    let [m, , c] = o[p];
    U(
      i !== void 0 && i[p] !== void 0,
      "Did not find corresponding fetcher result",
    );
    let v = i[p];
    if (Er(v)) {
      let w = Dn(e.matches, c.route.id);
      (s && s[w.route.id]) || (s = le({}, s, { [w.route.id]: v.error })),
        e.fetchers.delete(m);
    } else {
      if (In(v)) throw new Error("Unhandled fetcher revalidation redirect");
      if (en(v)) throw new Error("Unhandled fetcher deferred data");
      {
        let w = {
          state: "idle",
          data: v.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
        };
        e.fetchers.set(m, w);
      }
    }
  }
  return { loaderData: a, errors: s };
}
function ei(e, t, n) {
  let r = le({}, t);
  return (
    n.forEach((l) => {
      let o = l.route.id;
      t[o] === void 0 && e[o] !== void 0 && (r[o] = e[o]);
    }),
    r
  );
}
function Dn(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Es(e) {
  let t = e.find((n) => n.index || !n.path || n.path === "/") || {
    id: "__shim-error-route__",
  };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function Zt(e, t) {
  let { pathname: n, routeId: r, method: l } = t === void 0 ? {} : t,
    o = "Unknown Server Error",
    i = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((o = "Bad Request"),
        l && n && r
          ? (i =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : (i = "Cannot submit binary form data using GET"))
      : e === 403
      ? ((o = "Forbidden"),
        (i = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((o = "Not Found"), (i = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((o = "Method Not Allowed"),
        l && n && r
          ? (i =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (i = 'Invalid request method "' + l.toUpperCase() + '"')),
    new yo(e || 500, o, new Error(i), !0)
  );
}
function ks(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (In(n)) return n;
  }
}
function td(e) {
  let t = typeof e == "string" ? kt(e) : e;
  return it(le({}, t, { hash: "" }));
}
function zm(e, t) {
  return (
    e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash
  );
}
function en(e) {
  return e.type === he.deferred;
}
function Er(e) {
  return e.type === he.error;
}
function In(e) {
  return (e && e.type) === he.redirect;
}
function Tm(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function Mm(e) {
  return Sm.has(e);
}
function nd(e) {
  return ym.has(e);
}
async function xs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let u = n[i],
      a = t[i],
      s = e.find((m) => m.route.id === a.route.id),
      p = s != null && !bf(s, a) && (o && o[a.route.id]) !== void 0;
    en(u) &&
      (l || p) &&
      (await rd(u, r, l).then((m) => {
        m && (n[i] = m || n[i]);
      }));
  }
}
async function rd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: he.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: he.error, error: l };
      }
    return { type: he.data, data: e.deferredData.data };
  }
}
function ld(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function Cs(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function Ps(e, t) {
  let n = typeof t == "string" ? kt(t).search : t.search;
  if (e[e.length - 1].route.index && ld(n || "")) return e[e.length - 1];
  let r = go(e);
  return r[r.length - 1];
}
/**
 * React Router v6.4.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ql() {
  return (
    (ql = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ql.apply(this, arguments)
  );
}
function jm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
const Om = typeof Object.is == "function" ? Object.is : jm,
  { useState: Fm, useEffect: Im, useLayoutEffect: Um, useDebugValue: Am } = ri;
function $m(e, t, n) {
  const r = t(),
    [{ inst: l }, o] = Fm({ inst: { value: r, getSnapshot: t } });
  return (
    Um(() => {
      (l.value = r), (l.getSnapshot = t), ti(l) && o({ inst: l });
    }, [e, r, t]),
    Im(
      () => (
        ti(l) && o({ inst: l }),
        e(() => {
          ti(l) && o({ inst: l });
        })
      ),
      [e],
    ),
    Am(r),
    r
  );
}
function ti(e) {
  const t = e.getSnapshot,
    n = e.value;
  try {
    const r = t();
    return !Om(n, r);
  } catch {
    return !0;
  }
}
function Bm(e, t, n) {
  return t();
}
const Vm =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  Wm = !Vm,
  Hm = Wm ? Bm : $m,
  Qm = "useSyncExternalStore" in ri ? ((e) => e.useSyncExternalStore)(ri) : Hm,
  Km = x.createContext(null),
  od = x.createContext(null),
  wo = x.createContext(null),
  Yr = x.createContext(null),
  So = x.createContext(null),
  fn = x.createContext({ outlet: null, matches: [] }),
  id = x.createContext(null);
function Ym(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Xr() || U(!1);
  let { basename: r, navigator: l } = x.useContext(Yr),
    { hash: o, pathname: i, search: u } = Zu(e, { relative: n }),
    a = i;
  return (
    r !== "/" && (a = i === "/" ? r : vt([r, i])),
    l.createHref({ pathname: a, search: u, hash: o })
  );
}
function Xr() {
  return x.useContext(So) != null;
}
function Xn() {
  return Xr() || U(!1), x.useContext(So).location;
}
function Eo() {
  Xr() || U(!1);
  let { basename: e, navigator: t } = x.useContext(Yr),
    { matches: n } = x.useContext(fn),
    { pathname: r } = Xn(),
    l = JSON.stringify(go(n).map((u) => u.pathnameBase)),
    o = x.useRef(!1);
  return (
    x.useEffect(() => {
      o.current = !0;
    }),
    x.useCallback(
      function (u, a) {
        if ((a === void 0 && (a = {}), !o.current)) return;
        if (typeof u == "number") {
          t.go(u);
          return;
        }
        let s = Gu(u, JSON.parse(l), r, a.relative === "path");
        e !== "/" &&
          (s.pathname = s.pathname === "/" ? e : vt([e, s.pathname])),
          (a.replace ? t.replace : t.push)(s, a.state, a);
      },
      [e, t, l, r],
    )
  );
}
const ud = x.createContext(null);
function Xm() {
  return x.useContext(ud);
}
function Gm(e) {
  let t = x.useContext(fn).outlet;
  return t && x.createElement(ud.Provider, { value: e }, t);
}
function Zm() {
  let { matches: e } = x.useContext(fn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Zu(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { matches: r } = x.useContext(fn),
    { pathname: l } = Xn(),
    o = JSON.stringify(go(r).map((i) => i.pathnameBase));
  return x.useMemo(() => Gu(e, JSON.parse(o), l, n === "path"), [e, o, l, n]);
}
function Jm(e, t) {
  Xr() || U(!1);
  let { navigator: n } = x.useContext(Yr),
    r = x.useContext(wo),
    { matches: l } = x.useContext(fn),
    o = l[l.length - 1],
    i = o ? o.params : {};
  o && o.pathname;
  let u = o ? o.pathnameBase : "/";
  o && o.route;
  let a = Xn(),
    s;
  if (t) {
    var p;
    let y = typeof t == "string" ? kt(t) : t;
    u === "/" || ((p = y.pathname) != null && p.startsWith(u)) || U(!1),
      (s = y);
  } else s = a;
  let m = s.pathname || "/",
    c = u === "/" ? m : m.slice(u.length) || "/",
    v = fr(e, { pathname: c }),
    w = tv(
      v &&
        v.map((y) =>
          Object.assign({}, y, {
            params: Object.assign({}, i, y.params),
            pathname: vt([
              u,
              n.encodeLocation
                ? n.encodeLocation(y.pathname).pathname
                : y.pathname,
            ]),
            pathnameBase:
              y.pathnameBase === "/"
                ? u
                : vt([
                    u,
                    n.encodeLocation
                      ? n.encodeLocation(y.pathnameBase).pathname
                      : y.pathnameBase,
                  ]),
          }),
        ),
      l,
      r || void 0,
    );
  return t && w
    ? x.createElement(
        So.Provider,
        {
          value: {
            location: ql(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              s,
            ),
            navigationType: ae.Pop,
          },
        },
        w,
      )
    : w;
}
function qm() {
  let e = rv(),
    t = Jf(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = "rgba(200,200,200, 0.5)",
    l = { padding: "0.5rem", backgroundColor: r },
    o = { padding: "2px 4px", backgroundColor: r };
  return x.createElement(
    x.Fragment,
    null,
    x.createElement("h2", null, "Unhandled Thrown Error!"),
    x.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? x.createElement("pre", { style: l }, n) : null,
    x.createElement("p", null, "💿 Hey developer 👋"),
    x.createElement(
      "p",
      null,
      "You can provide a way better UX than this when your app throws errors by providing your own ",
      x.createElement("code", { style: o }, "errorElement"),
      " props on ",
      x.createElement("code", { style: o }, "<Route>"),
    ),
  );
}
class bm extends x.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? { error: t.error, location: t.location }
      : { error: t.error || n.error, location: n.location };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n,
    );
  }
  render() {
    return this.state.error
      ? x.createElement(id.Provider, {
          value: this.state.error,
          children: this.props.component,
        })
      : this.props.children;
  }
}
function ev(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = x.useContext(Km);
  return (
    l && n.route.errorElement && (l._deepestRenderedBoundaryId = n.route.id),
    x.createElement(fn.Provider, { value: t }, r)
  );
}
function tv(e, t, n) {
  if ((t === void 0 && (t = []), e == null))
    if (n != null && n.errors) e = n.matches;
    else return null;
  let r = e,
    l = n == null ? void 0 : n.errors;
  if (l != null) {
    let o = r.findIndex(
      (i) => i.route.id && (l == null ? void 0 : l[i.route.id]),
    );
    o >= 0 || U(!1), (r = r.slice(0, Math.min(r.length, o + 1)));
  }
  return r.reduceRight((o, i, u) => {
    let a = i.route.id ? (l == null ? void 0 : l[i.route.id]) : null,
      s = n ? i.route.errorElement || x.createElement(qm, null) : null,
      p = () =>
        x.createElement(
          ev,
          {
            match: i,
            routeContext: { outlet: o, matches: t.concat(r.slice(0, u + 1)) },
          },
          a ? s : i.route.element !== void 0 ? i.route.element : o,
        );
    return n && (i.route.errorElement || u === 0)
      ? x.createElement(bm, {
          location: n.location,
          component: s,
          error: a,
          children: p(),
        })
      : p();
  }, null);
}
var _s;
(function (e) {
  e.UseRevalidator = "useRevalidator";
})(_s || (_s = {}));
var Ji;
(function (e) {
  (e.UseLoaderData = "useLoaderData"),
    (e.UseActionData = "useActionData"),
    (e.UseRouteError = "useRouteError"),
    (e.UseNavigation = "useNavigation"),
    (e.UseRouteLoaderData = "useRouteLoaderData"),
    (e.UseMatches = "useMatches"),
    (e.UseRevalidator = "useRevalidator");
})(Ji || (Ji = {}));
function nv(e) {
  let t = x.useContext(wo);
  return t || U(!1), t;
}
function rv() {
  var e;
  let t = x.useContext(id),
    n = nv(Ji.UseRouteError),
    r = x.useContext(fn),
    l = r.matches[r.matches.length - 1];
  return (
    t ||
    (r || U(!1),
    l.route.id || U(!1),
    (e = n.errors) == null ? void 0 : e[l.route.id])
  );
}
function lv(e) {
  let { fallbackElement: t, router: n } = e,
    r = Qm(
      n.subscribe,
      () => n.state,
      () => n.state,
    ),
    l = x.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (i) => n.navigate(i),
        push: (i, u, a) =>
          n.navigate(i, {
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
        replace: (i, u, a) =>
          n.navigate(i, {
            replace: !0,
            state: u,
            preventScrollReset: a == null ? void 0 : a.preventScrollReset,
          }),
      }),
      [n],
    ),
    o = n.basename || "/";
  return x.createElement(
    od.Provider,
    { value: { router: n, navigator: l, static: !1, basename: o } },
    x.createElement(
      wo.Provider,
      { value: r },
      x.createElement(
        iv,
        {
          basename: n.basename,
          location: n.state.location,
          navigationType: n.state.historyAction,
          navigator: l,
        },
        n.state.initialized ? x.createElement(uv, null) : t,
      ),
    ),
  );
}
function ov(e) {
  return Gm(e.context);
}
function qi(e) {
  U(!1);
}
function iv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = ae.Pop,
    navigator: o,
    static: i = !1,
  } = e;
  Xr() && U(!1);
  let u = t.replace(/^\/*/, "/"),
    a = x.useMemo(() => ({ basename: u, navigator: o, static: i }), [u, o, i]);
  typeof r == "string" && (r = kt(r));
  let {
      pathname: s = "/",
      search: p = "",
      hash: m = "",
      state: c = null,
      key: v = "default",
    } = r,
    w = x.useMemo(() => {
      let y = Zf(s, u);
      return y == null
        ? null
        : { pathname: y, search: p, hash: m, state: c, key: v };
    }, [u, s, p, m, c, v]);
  return w == null
    ? null
    : x.createElement(
        Yr.Provider,
        { value: a },
        x.createElement(So.Provider, {
          children: n,
          value: { location: w, navigationType: l },
        }),
      );
}
function uv(e) {
  let { children: t, location: n } = e,
    r = x.useContext(od),
    l = r && !t ? r.router.routes : bl(t);
  return Jm(l, n);
}
var Rs;
(function (e) {
  (e[(e.pending = 0)] = "pending"),
    (e[(e.success = 1)] = "success"),
    (e[(e.error = 2)] = "error");
})(Rs || (Rs = {}));
new Promise(() => {});
function bl(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    x.Children.forEach(e, (r, l) => {
      if (!x.isValidElement(r)) return;
      if (r.type === x.Fragment) {
        n.push.apply(n, bl(r.props.children, t));
        return;
      }
      r.type !== qi && U(!1), !r.props.index || !r.props.children || U(!1);
      let o = [...t, l],
        i = {
          id: r.props.id || o.join("-"),
          caseSensitive: r.props.caseSensitive,
          element: r.props.element,
          index: r.props.index,
          path: r.props.path,
          loader: r.props.loader,
          action: r.props.action,
          errorElement: r.props.errorElement,
          hasErrorBoundary: r.props.errorElement != null,
          shouldRevalidate: r.props.shouldRevalidate,
          handle: r.props.handle,
        };
      r.props.children && (i.children = bl(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function ad(e) {
  return e.map((t) => {
    let n = ql({}, t);
    return (
      n.hasErrorBoundary == null &&
        (n.hasErrorBoundary = n.errorElement != null),
      n.children && (n.children = ad(n.children)),
      n
    );
  });
}
/**
 * React Router DOM v6.4.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Br() {
  return (
    (Br = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Br.apply(this, arguments)
  );
}
function sd(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function sv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !av(e);
}
function bi(e) {
  return (
    e === void 0 && (e = ""),
    new URLSearchParams(
      typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, []),
    )
  );
}
function cv(e, t) {
  let n = bi(e);
  for (let r of t.keys())
    n.has(r) ||
      t.getAll(r).forEach((l) => {
        n.append(r, l);
      });
  return n;
}
const fv = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
  ],
  dv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "children",
  ];
function pv(e, t) {
  return _m({
    basename: t == null ? void 0 : t.basename,
    history: Kh({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || hv(),
    routes: ad(e),
  }).initialize();
}
function hv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Br({}, t, { errors: mv(t.errors) })), t;
}
function mv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    l && l.__type === "RouteErrorResponse"
      ? (n[r] = new yo(l.status, l.statusText, l.data, l.internal === !0))
      : (n[r] = l);
  return n;
}
const vv = x.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: u,
        target: a,
        to: s,
        preventScrollReset: p,
      } = t,
      m = sd(t, fv),
      c = Ym(s, { relative: l }),
      v = yv(s, {
        replace: i,
        state: u,
        target: a,
        preventScrollReset: p,
        relative: l,
      });
    function w(y) {
      r && r(y), y.defaultPrevented || v(y);
    }
    return x.createElement(
      "a",
      Br({}, m, { href: c, onClick: o ? r : w, ref: n, target: a }),
    );
  }),
  gv = x.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: u,
        to: a,
        children: s,
      } = t,
      p = sd(t, dv),
      m = Zu(a, { relative: p.relative }),
      c = Xn(),
      v = x.useContext(wo),
      { navigator: w } = x.useContext(Yr),
      y = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      z = c.pathname,
      d =
        v && v.navigation && v.navigation.location
          ? v.navigation.location.pathname
          : null;
    l ||
      ((z = z.toLowerCase()),
      (d = d ? d.toLowerCase() : null),
      (y = y.toLowerCase()));
    let f = z === y || (!i && z.startsWith(y) && z.charAt(y.length) === "/"),
      h =
        d != null &&
        (d === y || (!i && d.startsWith(y) && d.charAt(y.length) === "/")),
      g = f ? r : void 0,
      C;
    typeof o == "function"
      ? (C = o({ isActive: f, isPending: h }))
      : (C = [o, f ? "active" : null, h ? "pending" : null]
          .filter(Boolean)
          .join(" "));
    let L = typeof u == "function" ? u({ isActive: f, isPending: h }) : u;
    return x.createElement(
      vv,
      Br({}, p, { "aria-current": g, className: C, ref: n, style: L, to: a }),
      typeof s == "function" ? s({ isActive: f, isPending: h }) : s,
    );
  });
var Ns;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmitImpl = "useSubmitImpl"),
    (e.UseFetcher = "useFetcher");
})(Ns || (Ns = {}));
var Ls;
(function (e) {
  (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(Ls || (Ls = {}));
function yv(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
    } = t === void 0 ? {} : t,
    u = Eo(),
    a = Xn(),
    s = Zu(e, { relative: i });
  return x.useCallback(
    (p) => {
      if (sv(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : it(a) === it(s);
        u(e, { replace: m, state: l, preventScrollReset: o, relative: i });
      }
    },
    [a, u, s, r, l, n, e, o, i],
  );
}
function wv(e) {
  let t = x.useRef(bi(e)),
    n = Xn(),
    r = x.useMemo(() => cv(n.search, t.current), [n.search]),
    l = Eo(),
    o = x.useCallback(
      (i, u) => {
        const a = bi(typeof i == "function" ? i(r) : i);
        l("?" + a, u);
      },
      [l, r],
    );
  return [r, o];
}
const Sv = "_details_52pu6_1",
  Ev = "_container_52pu6_23",
  kv = "_remove_52pu6_37",
  xv = "_img_52pu6_63",
  ml = { details: Sv, container: Ev, remove: kv, img: xv },
  Cv = () => {
    const [e, t] = x.useState(!0),
      n = Xm(),
      r = Eo(),
      { id: l } = Zm(),
      [o, i] = x.useState({
        films: [],
        name: "",
        imageUrl: "",
        _id: 0,
        tvShow: [],
      });
    x.useEffect(() => {
      t(!0),
        u(l).then((a) => {
          i(a), t(!1);
        });
    }, [l]);
    function u(a) {
      return fetch(`https://api.disneyapi.dev/character/${a}`)
        .then((s) => s.json())
        .then((s) => {
          const { data: p } = s;
          return {
            films: p.films,
            tvShow: p.tvShow,
            imageUrl: p.imageUrl,
            _id: p.id,
            name: p.name,
          };
        });
    }
    return T.jsx("div", {
      className: ml.details,
      children: e
        ? T.jsx("p", { children: "Loading..." })
        : T.jsxs("div", {
            className: ml.container,
            children: [
              T.jsx("button", {
                className: ml.remove,
                title: "I wish you a New Year's mood",
                onClick: () => {
                  n.handleDetails(), r(`/react/react-routing/?page=${n.page}`);
                },
                children: T.jsx("img", {
                  src: "assets/close.svg",
                  alt: "close details",
                }),
              }),
              T.jsx("div", {
                className: ml.img,
                style: { background: `center no-repeat url(${o.imageUrl} )` },
              }),
              T.jsxs("p", { children: ["Film: ", o.films[0] || "-"] }),
              T.jsxs("p", { children: ["tvShow: ", o.tvShow || "-"] }),
              T.jsxs("p", { children: ["Name: ", o.name] }),
            ],
          }),
    });
  };
const Pv = "_search_5u5qe_1",
  _v = "_input_5u5qe_15",
  Ds = { search: Pv, input: _v },
  Rv = (e) => {
    const [t, n] = x.useState(localStorage.getItem("prevRequest") || "");
    function r(l) {
      n(l.target.value);
    }
    return T.jsxs("div", {
      className: Ds.search,
      children: [
        T.jsx("input", {
          autoFocus: !0,
          className: Ds.input,
          type: "text",
          value: t,
          placeholder: "your request...queen, belle and other",
          onChange: r,
        }),
        T.jsx("button", {
          onClick: () => e.handleRequest(t),
          className: "button",
          children: "Search",
        }),
      ],
    });
  },
  Nv = "_header_fvgk9_1",
  Lv = "_name_fvgk9_19",
  zs = { header: Nv, name: Lv },
  Dv = (e) => {
    const [t, n] = x.useState(!1),
      r = () => {
        n(!0);
      };
    if (t) throw new Error("Do you want error");
    return T.jsxs("header", {
      className: zs.header,
      children: [
        T.jsx("p", { className: zs.name, children: "Disney character" }),
        T.jsx(Rv, { handleRequest: e.handleRequest }),
        T.jsx("button", {
          className: "button",
          onClick: r,
          children: "Go Error",
        }),
      ],
    });
  },
  zv = (e) =>
    T.jsxs("div", {
      className: "pagination",
      children: [
        T.jsx("button", {
          onClick: () => e.handlePage("prev"),
          disabled: e.page <= 1,
          children: "Prev",
        }),
        T.jsx("div", { children: e.page }),
        T.jsx("button", {
          onClick: () => e.handlePage("next"),
          disabled: e.page >= e.info.totalPages,
          children: "Next",
        }),
        T.jsx("p", { children: "Elements quantity:" }),
        T.jsxs("select", {
          value: e.pageSize,
          className: "select",
          onChange: (t) => e.handlePageSize(Number(t.target.value)),
          children: [
            T.jsx("option", { children: "5" }),
            T.jsx("option", { children: "10" }),
            T.jsx("option", { children: "15" }),
            T.jsx("option", { children: "20" }),
          ],
        }),
      ],
    }),
  Tv = "_main_1ur9z_1",
  Mv = { main: Tv },
  jv = "_name_1yvd9_1",
  Ov = "_mainItem_1yvd9_9",
  Fv = "_img_1yvd9_39",
  ni = { name: jv, mainItem: Ov, img: Fv },
  Ts = (e) =>
    T.jsxs(gv, {
      to: `details/${e.item._id}?page=${e.page}`,
      className: ni.mainItem,
      onClick: () => e.setIsDetails(!0),
      children: [
        T.jsx("div", {
          className: ni.img,
          style: {
            background: `center no-repeat url(${e.item.imageUrl} )`,
            backgroundSize: "contain",
          },
        }),
        T.jsx("p", { className: ni.name, children: e.item.name }),
      ],
    }),
  Iv = (e) => {
    const t = Eo(),
      n = (r) => {
        t(r);
      };
    return T.jsx("div", {
      className: Mv.main,
      onClick: () => {
        e.isDetails && (e.setIsDetails(!1), n(`/react/react-routing/?page=${e.page}`));
      },
      children: Array.isArray(e.results)
        ? e.results.map((r) =>
            T.jsx(
              Ts,
              { page: e.page, setIsDetails: e.setIsDetails, item: r },
              r._id,
            ),
          )
        : T.jsx(
            Ts,
            { page: e.page, setIsDetails: e.setIsDetails, item: e.results },
            e.results,
          ),
    });
  },
  Uv = () => {
    const [e, t] = x.useState(!1),
      [n, r] = x.useState(""),
      [l, o] = x.useState(!1),
      [i, u] = x.useState(!1),
      [a, s] = x.useState(10),
      [p, m] = x.useState(1),
      [, c] = wv(),
      [v, w] = x.useState({
        data: [],
        info: { count: 0, nextPage: "", previousPage: "", totalPages: 0 },
      });
    function y(g, C, L) {
      fetch(
        `https://api.disneyapi.dev/character?name=${g}&page=${C}&pageSize=${L}`,
      )
        .then((R) => R.json())
        .then((R) => {
          const { info: D, data: W } = R;
          w({
            data: W,
            info: {
              count: D.count,
              nextPage: D.nextPage,
              previousPage: D.previousPage,
              totalPages: D.totalPages,
            },
          }),
            u(!0),
            o(!1);
        })
        .catch(() => {
          u(!0), o(!0);
        });
    }
    x.useEffect(() => {
      c({ page: `${p}` });
      const g = localStorage.getItem("prevRequest");
      u(!1), r(g || ""), y(g || "", p, a);
    }, [n, p, a]);
    function z(g) {
      switch (g) {
        case "next":
          m((C) => C + 1);
          break;
        case "prev":
          m((C) => C - 1);
          break;
      }
    }
    function d(g) {
      s((C) => C + g - C), m(1);
    }
    function f(g) {
      r(g), localStorage.setItem("prevRequest", g.trim());
    }
    if (l) throw new Error("Request not found");
    function h() {
      t(!1);
    }
    return T.jsxs("div", {
      className: "app",
      children: [
        T.jsx(Dv, { handleRequest: f }),
        i
          ? T.jsxs(T.Fragment, {
              children: [
                T.jsx(zv, {
                  info: v.info,
                  handlePage: z,
                  page: p,
                  pageSize: a,
                  handlePageSize: d,
                }),
                T.jsxs("div", {
                  className: e ? "open-details" : "",
                  children: [
                    T.jsx(Iv, {
                      setIsDetails: t,
                      results: v.data,
                      page: p,
                      isDetails: e,
                    }),
                    T.jsx(ov, { context: { handleDetails: h, page: p } }),
                  ],
                }),
              ],
            })
          : T.jsx("img", {
              className: "loading",
              src: "assets/loading.gif",
              alt: "loading",
            }),
      ],
    });
  },
  Av = "_errorBoundary_et8zc_1",
  $v = { errorBoundary: Av };
class cd extends x.Component {
  constructor() {
    super(...arguments);
    ra(this, "state", { hasError: !1, textError: "" });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(n) {
    console.log(n.message), this.setState({ textError: n.message });
  }
  render() {
    return this.state.hasError
      ? T.jsx("div", {
          className: $v.errorBoundary,
          children: T.jsxs("div", {
            children: [
              T.jsx("p", { children: this.state.textError }),
              T.jsx("button", {
                className: "button",
                onClick: () => {
                  this.setState({ hasError: !1 });
                },
                children: "Try again",
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
const Bv = pv(
    bl(
      T.jsx(qi, {
        path: "/react/react-routing/",
        element: T.jsx(cd, { children: T.jsx(Uv, {}) }),
        children: T.jsx(qi, { path: "details/:id", element: T.jsx(Cv, {}) }),
      }),
    ),
  ),
  Vv = () => T.jsx(T.Fragment, { children: T.jsx(lv, { router: Bv }) });
li.createRoot(document.getElementById("root")).render(
  T.jsx(Vs.StrictMode, { children: T.jsx(cd, { children: T.jsx(Vv, {}) }) }),
);
