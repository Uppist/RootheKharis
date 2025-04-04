/** @format */

(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) f(h);
  new MutationObserver((h) => {
    for (const v of h)
      if (v.type === "childList")
        for (const E of v.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && f(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function C(h) {
    const v = {};
    return (
      h.integrity && (v.integrity = h.integrity),
      h.referrerPolicy && (v.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (v.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (v.credentials = "omit")
        : (v.credentials = "same-origin"),
      v
    );
  }
  function f(h) {
    if (h.ep) return;
    h.ep = !0;
    const v = C(h);
    fetch(h.href, v);
  }
})();
var j7 = { exports: {} },
  Z8 = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ll;
function zi() {
  if (Ll) return Z8;
  Ll = 1;
  var s = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.fragment");
  function C(f, h, v) {
    var E = null;
    if (
      (v !== void 0 && (E = "" + v),
      h.key !== void 0 && (E = "" + h.key),
      "key" in h)
    ) {
      v = {};
      for (var _ in h) _ !== "key" && (v[_] = h[_]);
    } else v = h;
    return (
      (h = v.ref),
      { $$typeof: s, type: f, key: E, ref: h !== void 0 ? h : null, props: v }
    );
  }
  return (Z8.Fragment = o), (Z8.jsx = C), (Z8.jsxs = C), Z8;
}
var Ml;
function wi() {
  return Ml || ((Ml = 1), (j7.exports = zi())), j7.exports;
}
var c = wi(),
  L7 = { exports: {} },
  l1 = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Al;
function Oi() {
  if (Al) return l1;
  Al = 1;
  var s = Symbol.for("react.transitional.element"),
    o = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    f = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    v = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function z(g) {
    return g === null || typeof g != "object"
      ? null
      : ((g = (N && g[N]) || g["@@iterator"]),
        typeof g == "function" ? g : null);
  }
  var D = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    X = {};
  function V(g, O, P) {
    (this.props = g),
      (this.context = O),
      (this.refs = X),
      (this.updater = P || D);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (g, O) {
      if (typeof g != "object" && typeof g != "function" && g != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, g, O, "setState");
    }),
    (V.prototype.forceUpdate = function (g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    });
  function U() {}
  U.prototype = V.prototype;
  function Q(g, O, P) {
    (this.props = g),
      (this.context = O),
      (this.refs = X),
      (this.updater = P || D);
  }
  var Y = (Q.prototype = new U());
  (Y.constructor = Q), w(Y, V.prototype), (Y.isPureReactComponent = !0);
  var C1 = Array.isArray,
    F = { H: null, A: null, T: null, S: null },
    H1 = Object.prototype.hasOwnProperty;
  function T1(g, O, P, $, Z, s1) {
    return (
      (P = s1.ref),
      { $$typeof: s, type: g, key: O, ref: P !== void 0 ? P : null, props: s1 }
    );
  }
  function N1(g, O) {
    return T1(g.type, O, void 0, void 0, void 0, g.props);
  }
  function q(g) {
    return typeof g == "object" && g !== null && g.$$typeof === s;
  }
  function t1(g) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      g.replace(/[=:]/g, function (P) {
        return O[P];
      })
    );
  }
  var B1 = /\/+/g;
  function o2(g, O) {
    return typeof g == "object" && g !== null && g.key != null
      ? t1("" + g.key)
      : O.toString(36);
  }
  function a2() {}
  function C2(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (
          (typeof g.status == "string"
            ? g.then(a2, a2)
            : ((g.status = "pending"),
              g.then(
                function (O) {
                  g.status === "pending" &&
                    ((g.status = "fulfilled"), (g.value = O));
                },
                function (O) {
                  g.status === "pending" &&
                    ((g.status = "rejected"), (g.reason = O));
                }
              )),
          g.status)
        ) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function X1(g, O, P, $, Z) {
    var s1 = typeof g;
    (s1 === "undefined" || s1 === "boolean") && (g = null);
    var a1 = !1;
    if (g === null) a1 = !0;
    else
      switch (s1) {
        case "bigint":
        case "string":
        case "number":
          a1 = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case s:
            case o:
              a1 = !0;
              break;
            case T:
              return (a1 = g._init), X1(a1(g._payload), O, P, $, Z);
          }
      }
    if (a1)
      return (
        (Z = Z(g)),
        (a1 = $ === "" ? "." + o2(g, 0) : $),
        C1(Z)
          ? ((P = ""),
            a1 != null && (P = a1.replace(B1, "$&/") + "/"),
            X1(Z, O, P, "", function (R1) {
              return R1;
            }))
          : Z != null &&
            (q(Z) &&
              (Z = N1(
                Z,
                P +
                  (Z.key == null || (g && g.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(B1, "$&/") + "/") +
                  a1
              )),
            O.push(Z)),
        1
      );
    a1 = 0;
    var F1 = $ === "" ? "." : $ + ":";
    if (C1(g))
      for (var h1 = 0; h1 < g.length; h1++)
        ($ = g[h1]), (s1 = F1 + o2($, h1)), (a1 += X1($, O, P, s1, Z));
    else if (((h1 = z(g)), typeof h1 == "function"))
      for (g = h1.call(g), h1 = 0; !($ = g.next()).done; )
        ($ = $.value), (s1 = F1 + o2($, h1++)), (a1 += X1($, O, P, s1, Z));
    else if (s1 === "object") {
      if (typeof g.then == "function") return X1(C2(g), O, P, $, Z);
      throw (
        ((O = String(g)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(g).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return a1;
  }
  function B(g, O, P) {
    if (g == null) return g;
    var $ = [],
      Z = 0;
    return (
      X1(g, $, "", "", function (s1) {
        return O.call(P, s1, Z++);
      }),
      $
    );
  }
  function I(g) {
    if (g._status === -1) {
      var O = g._result;
      (O = O()),
        O.then(
          function (P) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 1), (g._result = P));
          },
          function (P) {
            (g._status === 0 || g._status === -1) &&
              ((g._status = 2), (g._result = P));
          }
        ),
        g._status === -1 && ((g._status = 0), (g._result = O));
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var J =
    typeof reportError == "function"
      ? reportError
      : function (g) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof g == "object" &&
                g !== null &&
                typeof g.message == "string"
                  ? String(g.message)
                  : String(g),
              error: g,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", g);
            return;
          }
          console.error(g);
        };
  function m1() {}
  return (
    (l1.Children = {
      map: B,
      forEach: function (g, O, P) {
        B(
          g,
          function () {
            O.apply(this, arguments);
          },
          P
        );
      },
      count: function (g) {
        var O = 0;
        return (
          B(g, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (g) {
        return (
          B(g, function (O) {
            return O;
          }) || []
        );
      },
      only: function (g) {
        if (!q(g))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return g;
      },
    }),
    (l1.Component = V),
    (l1.Fragment = C),
    (l1.Profiler = h),
    (l1.PureComponent = Q),
    (l1.StrictMode = f),
    (l1.Suspense = b),
    (l1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (l1.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (l1.cache = function (g) {
      return function () {
        return g.apply(null, arguments);
      };
    }),
    (l1.cloneElement = function (g, O, P) {
      if (g == null)
        throw Error(
          "The argument must be a React element, but you passed " + g + "."
        );
      var $ = w({}, g.props),
        Z = g.key,
        s1 = void 0;
      if (O != null)
        for (a1 in (O.ref !== void 0 && (s1 = void 0),
        O.key !== void 0 && (Z = "" + O.key),
        O))
          !H1.call(O, a1) ||
            a1 === "key" ||
            a1 === "__self" ||
            a1 === "__source" ||
            (a1 === "ref" && O.ref === void 0) ||
            ($[a1] = O[a1]);
      var a1 = arguments.length - 2;
      if (a1 === 1) $.children = P;
      else if (1 < a1) {
        for (var F1 = Array(a1), h1 = 0; h1 < a1; h1++)
          F1[h1] = arguments[h1 + 2];
        $.children = F1;
      }
      return T1(g.type, Z, void 0, void 0, s1, $);
    }),
    (l1.createContext = function (g) {
      return (
        (g = {
          $$typeof: E,
          _currentValue: g,
          _currentValue2: g,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (g.Provider = g),
        (g.Consumer = { $$typeof: v, _context: g }),
        g
      );
    }),
    (l1.createElement = function (g, O, P) {
      var $,
        Z = {},
        s1 = null;
      if (O != null)
        for ($ in (O.key !== void 0 && (s1 = "" + O.key), O))
          H1.call(O, $) &&
            $ !== "key" &&
            $ !== "__self" &&
            $ !== "__source" &&
            (Z[$] = O[$]);
      var a1 = arguments.length - 2;
      if (a1 === 1) Z.children = P;
      else if (1 < a1) {
        for (var F1 = Array(a1), h1 = 0; h1 < a1; h1++)
          F1[h1] = arguments[h1 + 2];
        Z.children = F1;
      }
      if (g && g.defaultProps)
        for ($ in ((a1 = g.defaultProps), a1))
          Z[$] === void 0 && (Z[$] = a1[$]);
      return T1(g, s1, void 0, void 0, null, Z);
    }),
    (l1.createRef = function () {
      return { current: null };
    }),
    (l1.forwardRef = function (g) {
      return { $$typeof: _, render: g };
    }),
    (l1.isValidElement = q),
    (l1.lazy = function (g) {
      return { $$typeof: T, _payload: { _status: -1, _result: g }, _init: I };
    }),
    (l1.memo = function (g, O) {
      return { $$typeof: m, type: g, compare: O === void 0 ? null : O };
    }),
    (l1.startTransition = function (g) {
      var O = F.T,
        P = {};
      F.T = P;
      try {
        var $ = g(),
          Z = F.S;
        Z !== null && Z(P, $),
          typeof $ == "object" &&
            $ !== null &&
            typeof $.then == "function" &&
            $.then(m1, J);
      } catch (s1) {
        J(s1);
      } finally {
        F.T = O;
      }
    }),
    (l1.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (l1.use = function (g) {
      return F.H.use(g);
    }),
    (l1.useActionState = function (g, O, P) {
      return F.H.useActionState(g, O, P);
    }),
    (l1.useCallback = function (g, O) {
      return F.H.useCallback(g, O);
    }),
    (l1.useContext = function (g) {
      return F.H.useContext(g);
    }),
    (l1.useDebugValue = function () {}),
    (l1.useDeferredValue = function (g, O) {
      return F.H.useDeferredValue(g, O);
    }),
    (l1.useEffect = function (g, O) {
      return F.H.useEffect(g, O);
    }),
    (l1.useId = function () {
      return F.H.useId();
    }),
    (l1.useImperativeHandle = function (g, O, P) {
      return F.H.useImperativeHandle(g, O, P);
    }),
    (l1.useInsertionEffect = function (g, O) {
      return F.H.useInsertionEffect(g, O);
    }),
    (l1.useLayoutEffect = function (g, O) {
      return F.H.useLayoutEffect(g, O);
    }),
    (l1.useMemo = function (g, O) {
      return F.H.useMemo(g, O);
    }),
    (l1.useOptimistic = function (g, O) {
      return F.H.useOptimistic(g, O);
    }),
    (l1.useReducer = function (g, O, P) {
      return F.H.useReducer(g, O, P);
    }),
    (l1.useRef = function (g) {
      return F.H.useRef(g);
    }),
    (l1.useState = function (g) {
      return F.H.useState(g);
    }),
    (l1.useSyncExternalStore = function (g, O, P) {
      return F.H.useSyncExternalStore(g, O, P);
    }),
    (l1.useTransition = function () {
      return F.H.useTransition();
    }),
    (l1.version = "19.0.0"),
    l1
  );
}
var Tl;
function B7() {
  return Tl || ((Tl = 1), (L7.exports = Oi())), L7.exports;
}
var M = B7(),
  M7 = { exports: {} },
  Y8 = {},
  A7 = { exports: {} },
  T7 = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rl;
function Di() {
  return (
    Rl ||
      ((Rl = 1),
      (function (s) {
        function o(B, I) {
          var J = B.length;
          B.push(I);
          e: for (; 0 < J; ) {
            var m1 = (J - 1) >>> 1,
              g = B[m1];
            if (0 < h(g, I)) (B[m1] = I), (B[J] = g), (J = m1);
            else break e;
          }
        }
        function C(B) {
          return B.length === 0 ? null : B[0];
        }
        function f(B) {
          if (B.length === 0) return null;
          var I = B[0],
            J = B.pop();
          if (J !== I) {
            B[0] = J;
            e: for (var m1 = 0, g = B.length, O = g >>> 1; m1 < O; ) {
              var P = 2 * (m1 + 1) - 1,
                $ = B[P],
                Z = P + 1,
                s1 = B[Z];
              if (0 > h($, J))
                Z < g && 0 > h(s1, $)
                  ? ((B[m1] = s1), (B[Z] = J), (m1 = Z))
                  : ((B[m1] = $), (B[P] = J), (m1 = P));
              else if (Z < g && 0 > h(s1, J))
                (B[m1] = s1), (B[Z] = J), (m1 = Z);
              else break e;
            }
          }
          return I;
        }
        function h(B, I) {
          var J = B.sortIndex - I.sortIndex;
          return J !== 0 ? J : B.id - I.id;
        }
        if (
          ((s.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var v = performance;
          s.unstable_now = function () {
            return v.now();
          };
        } else {
          var E = Date,
            _ = E.now();
          s.unstable_now = function () {
            return E.now() - _;
          };
        }
        var b = [],
          m = [],
          T = 1,
          N = null,
          z = 3,
          D = !1,
          w = !1,
          X = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          U = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function Y(B) {
          for (var I = C(m); I !== null; ) {
            if (I.callback === null) f(m);
            else if (I.startTime <= B)
              f(m), (I.sortIndex = I.expirationTime), o(b, I);
            else break;
            I = C(m);
          }
        }
        function C1(B) {
          if (((X = !1), Y(B), !w))
            if (C(b) !== null) (w = !0), C2();
            else {
              var I = C(m);
              I !== null && X1(C1, I.startTime - B);
            }
        }
        var F = !1,
          H1 = -1,
          T1 = 5,
          N1 = -1;
        function q() {
          return !(s.unstable_now() - N1 < T1);
        }
        function t1() {
          if (F) {
            var B = s.unstable_now();
            N1 = B;
            var I = !0;
            try {
              e: {
                (w = !1), X && ((X = !1), U(H1), (H1 = -1)), (D = !0);
                var J = z;
                try {
                  t: {
                    for (
                      Y(B), N = C(b);
                      N !== null && !(N.expirationTime > B && q());

                    ) {
                      var m1 = N.callback;
                      if (typeof m1 == "function") {
                        (N.callback = null), (z = N.priorityLevel);
                        var g = m1(N.expirationTime <= B);
                        if (((B = s.unstable_now()), typeof g == "function")) {
                          (N.callback = g), Y(B), (I = !0);
                          break t;
                        }
                        N === C(b) && f(b), Y(B);
                      } else f(b);
                      N = C(b);
                    }
                    if (N !== null) I = !0;
                    else {
                      var O = C(m);
                      O !== null && X1(C1, O.startTime - B), (I = !1);
                    }
                  }
                  break e;
                } finally {
                  (N = null), (z = J), (D = !1);
                }
                I = void 0;
              }
            } finally {
              I ? B1() : (F = !1);
            }
          }
        }
        var B1;
        if (typeof Q == "function")
          B1 = function () {
            Q(t1);
          };
        else if (typeof MessageChannel < "u") {
          var o2 = new MessageChannel(),
            a2 = o2.port2;
          (o2.port1.onmessage = t1),
            (B1 = function () {
              a2.postMessage(null);
            });
        } else
          B1 = function () {
            V(t1, 0);
          };
        function C2() {
          F || ((F = !0), B1());
        }
        function X1(B, I) {
          H1 = V(function () {
            B(s.unstable_now());
          }, I);
        }
        (s.unstable_IdlePriority = 5),
          (s.unstable_ImmediatePriority = 1),
          (s.unstable_LowPriority = 4),
          (s.unstable_NormalPriority = 3),
          (s.unstable_Profiling = null),
          (s.unstable_UserBlockingPriority = 2),
          (s.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (s.unstable_continueExecution = function () {
            w || D || ((w = !0), C2());
          }),
          (s.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (T1 = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (s.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (s.unstable_getFirstCallbackNode = function () {
            return C(b);
          }),
          (s.unstable_next = function (B) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var I = 3;
                break;
              default:
                I = z;
            }
            var J = z;
            z = I;
            try {
              return B();
            } finally {
              z = J;
            }
          }),
          (s.unstable_pauseExecution = function () {}),
          (s.unstable_requestPaint = function () {}),
          (s.unstable_runWithPriority = function (B, I) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var J = z;
            z = B;
            try {
              return I();
            } finally {
              z = J;
            }
          }),
          (s.unstable_scheduleCallback = function (B, I, J) {
            var m1 = s.unstable_now();
            switch (
              (typeof J == "object" && J !== null
                ? ((J = J.delay),
                  (J = typeof J == "number" && 0 < J ? m1 + J : m1))
                : (J = m1),
              B)
            ) {
              case 1:
                var g = -1;
                break;
              case 2:
                g = 250;
                break;
              case 5:
                g = 1073741823;
                break;
              case 4:
                g = 1e4;
                break;
              default:
                g = 5e3;
            }
            return (
              (g = J + g),
              (B = {
                id: T++,
                callback: I,
                priorityLevel: B,
                startTime: J,
                expirationTime: g,
                sortIndex: -1,
              }),
              J > m1
                ? ((B.sortIndex = J),
                  o(m, B),
                  C(b) === null &&
                    B === C(m) &&
                    (X ? (U(H1), (H1 = -1)) : (X = !0), X1(C1, J - m1)))
                : ((B.sortIndex = g), o(b, B), w || D || ((w = !0), C2())),
              B
            );
          }),
          (s.unstable_shouldYield = q),
          (s.unstable_wrapCallback = function (B) {
            var I = z;
            return function () {
              var J = z;
              z = I;
              try {
                return B.apply(this, arguments);
              } finally {
                z = J;
              }
            };
          });
      })(T7)),
    T7
  );
}
var zl;
function Ni() {
  return zl || ((zl = 1), (A7.exports = Di())), A7.exports;
}
var R7 = { exports: {} },
  W1 = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var wl;
function Ui() {
  if (wl) return W1;
  wl = 1;
  var s = B7();
  function o(b) {
    var m = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var T = 2; T < arguments.length; T++)
        m += "&args[]=" + encodeURIComponent(arguments[T]);
    }
    return (
      "Minified React error #" +
      b +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function C() {}
  var f = {
      d: {
        f: C,
        r: function () {
          throw Error(o(522));
        },
        D: C,
        C,
        L: C,
        m: C,
        X: C,
        S: C,
        M: C,
      },
      p: 0,
      findDOMNode: null,
    },
    h = Symbol.for("react.portal");
  function v(b, m, T) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: N == null ? null : "" + N,
      children: b,
      containerInfo: m,
      implementation: T,
    };
  }
  var E = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(b, m) {
    if (b === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (W1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f),
    (W1.createPortal = function (b, m) {
      var T =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(o(299));
      return v(b, m, null, T);
    }),
    (W1.flushSync = function (b) {
      var m = E.T,
        T = f.p;
      try {
        if (((E.T = null), (f.p = 2), b)) return b();
      } finally {
        (E.T = m), (f.p = T), f.d.f();
      }
    }),
    (W1.preconnect = function (b, m) {
      typeof b == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        f.d.C(b, m));
    }),
    (W1.prefetchDNS = function (b) {
      typeof b == "string" && f.d.D(b);
    }),
    (W1.preinit = function (b, m) {
      if (typeof b == "string" && m && typeof m.as == "string") {
        var T = m.as,
          N = _(T, m.crossOrigin),
          z = typeof m.integrity == "string" ? m.integrity : void 0,
          D = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        T === "style"
          ? f.d.S(b, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: N,
              integrity: z,
              fetchPriority: D,
            })
          : T === "script" &&
            f.d.X(b, {
              crossOrigin: N,
              integrity: z,
              fetchPriority: D,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (W1.preinitModule = function (b, m) {
      if (typeof b == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var T = _(m.as, m.crossOrigin);
            f.d.M(b, {
              crossOrigin: T,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && f.d.M(b);
    }),
    (W1.preload = function (b, m) {
      if (
        typeof b == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var T = m.as,
          N = _(T, m.crossOrigin);
        f.d.L(b, T, {
          crossOrigin: N,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (W1.preloadModule = function (b, m) {
      if (typeof b == "string")
        if (m) {
          var T = _(m.as, m.crossOrigin);
          f.d.m(b, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: T,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else f.d.m(b);
    }),
    (W1.requestFormReset = function (b) {
      f.d.r(b);
    }),
    (W1.unstable_batchedUpdates = function (b, m) {
      return b(m);
    }),
    (W1.useFormState = function (b, m, T) {
      return E.H.useFormState(b, m, T);
    }),
    (W1.useFormStatus = function () {
      return E.H.useHostTransitionStatus();
    }),
    (W1.version = "19.0.0"),
    W1
  );
}
var Ol;
function Vi() {
  if (Ol) return R7.exports;
  Ol = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), (R7.exports = Ui()), R7.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dl;
function Bi() {
  if (Dl) return Y8;
  Dl = 1;
  var s = Ni(),
    o = B7(),
    C = Vi();
  function f(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function h(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  var v = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    T = Symbol.for("react.profiler"),
    N = Symbol.for("react.provider"),
    z = Symbol.for("react.consumer"),
    D = Symbol.for("react.context"),
    w = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    U = Symbol.for("react.memo"),
    Q = Symbol.for("react.lazy"),
    Y = Symbol.for("react.offscreen"),
    C1 = Symbol.for("react.memo_cache_sentinel"),
    F = Symbol.iterator;
  function H1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var T1 = Symbol.for("react.client.reference");
  function N1(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === T1 ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case _:
        return "Portal";
      case T:
        return "Profiler";
      case m:
        return "StrictMode";
      case X:
        return "Suspense";
      case V:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case D:
          return (e.displayName || "Context") + ".Provider";
        case z:
          return (e._context.displayName || "Context") + ".Consumer";
        case w:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case U:
          return (
            (t = e.displayName || null), t !== null ? t : N1(e.type) || "Memo"
          );
        case Q:
          (t = e._payload), (e = e._init);
          try {
            return N1(e(t));
          } catch {}
      }
    return null;
  }
  var q = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    t1 = Object.assign,
    B1,
    o2;
  function a2(e) {
    if (B1 === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (B1 = (t && t[1]) || ""),
          (o2 =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      B1 +
      e +
      o2
    );
  }
  var C2 = !1;
  function X1(e, t) {
    if (!e || C2) return "";
    C2 = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var R = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(R.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(R, []);
                } catch (j) {
                  var S = j;
                }
                Reflect.construct(e, [], R);
              } else {
                try {
                  R.call();
                } catch (j) {
                  S = j;
                }
                e.call(R.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (j) {
                S = j;
              }
              (R = e()) &&
                typeof R.catch == "function" &&
                R.catch(function () {});
            }
          } catch (j) {
            if (j && S && typeof j.stack == "string") return [j.stack, S.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        u = i[0],
        r = i[1];
      if (u && r) {
        var d = u.split(`
`),
          y = r.split(`
`);
        for (
          n = a = 0;
          a < d.length && !d[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === d.length || n === y.length)
          for (
            a = d.length - 1, n = y.length - 1;
            1 <= a && 0 <= n && d[a] !== y[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (d[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || d[a] !== y[n])) {
                  var L =
                    `
` + d[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      L.includes("<anonymous>") &&
                      (L = L.replace("<anonymous>", e.displayName)),
                    L
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (C2 = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? a2(l) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return a2(e.type);
      case 16:
        return a2("Lazy");
      case 13:
        return a2("Suspense");
      case 19:
        return a2("SuspenseList");
      case 0:
      case 15:
        return (e = X1(e.type, !1)), e;
      case 11:
        return (e = X1(e.type.render, !1)), e;
      case 1:
        return (e = X1(e.type, !0)), e;
      default:
        return "";
    }
  }
  function I(e) {
    try {
      var t = "";
      do (t += B(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function J(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function m1(e) {
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
  function g(e) {
    if (J(e) !== e) throw Error(f(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = J(e)), t === null)) throw Error(f(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return g(n), e;
          if (i === a) return g(n), t;
          i = i.sibling;
        }
        throw Error(f(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var u = !1, r = n.child; r; ) {
          if (r === l) {
            (u = !0), (l = n), (a = i);
            break;
          }
          if (r === a) {
            (u = !0), (a = n), (l = i);
            break;
          }
          r = r.sibling;
        }
        if (!u) {
          for (r = i.child; r; ) {
            if (r === l) {
              (u = !0), (l = i), (a = n);
              break;
            }
            if (r === a) {
              (u = !0), (a = i), (l = n);
              break;
            }
            r = r.sibling;
          }
          if (!u) throw Error(f(189));
        }
      }
      if (l.alternate !== a) throw Error(f(190));
    }
    if (l.tag !== 3) throw Error(f(188));
    return l.stateNode.current === l ? e : t;
  }
  function P(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = P(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var $ = Array.isArray,
    Z = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    s1 = { pending: !1, data: null, method: null, action: null },
    a1 = [],
    F1 = -1;
  function h1(e) {
    return { current: e };
  }
  function R1(e) {
    0 > F1 || ((e.current = a1[F1]), (a1[F1] = null), F1--);
  }
  function x1(e, t) {
    F1++, (a1[F1] = e.current), (e.current = t);
  }
  var w2 = h1(null),
    X4 = h1(null),
    c3 = h1(null),
    $8 = h1(null);
  function W8(e, t) {
    switch ((x1(c3, t), x1(X4, e), x1(w2, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? ll(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = ll(e)), (t = al(e, t));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    R1(w2), x1(w2, t);
  }
  function i4() {
    R1(w2), R1(X4), R1(c3);
  }
  function g9(e) {
    e.memoizedState !== null && x1($8, e);
    var t = w2.current,
      l = al(t, e.type);
    t !== l && (x1(X4, e), x1(w2, l));
  }
  function F8(e) {
    X4.current === e && (R1(w2), R1(X4)),
      $8.current === e && (R1($8), (N8._currentValue = s1));
  }
  var p9 = Object.prototype.hasOwnProperty,
    y9 = s.unstable_scheduleCallback,
    b9 = s.unstable_cancelCallback,
    ra = s.unstable_shouldYield,
    fa = s.unstable_requestPaint,
    O2 = s.unstable_now,
    oa = s.unstable_getCurrentPriorityLevel,
    Q7 = s.unstable_ImmediatePriority,
    K7 = s.unstable_UserBlockingPriority,
    P8 = s.unstable_NormalPriority,
    Ca = s.unstable_LowPriority,
    k7 = s.unstable_IdlePriority,
    da = s.log,
    ha = s.unstable_setDisableYieldValue,
    Q4 = null,
    n2 = null;
  function ma(e) {
    if (n2 && typeof n2.onCommitFiberRoot == "function")
      try {
        n2.onCommitFiberRoot(Q4, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function s3(e) {
    if (
      (typeof da == "function" && ha(e),
      n2 && typeof n2.setStrictMode == "function")
    )
      try {
        n2.setStrictMode(Q4, e);
      } catch {}
  }
  var i2 = Math.clz32 ? Math.clz32 : pa,
    va = Math.log,
    ga = Math.LN2;
  function pa(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((va(e) / ga) | 0)) | 0;
  }
  var I8 = 128,
    e5 = 4194304;
  function O3(e) {
    var t = e & 42;
    if (t !== 0) return t;
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
        return 64;
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
        return e & 4194176;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function t5(e, t) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0,
      n = e.suspendedLanes,
      i = e.pingedLanes,
      u = e.warmLanes;
    e = e.finishedLanes !== 0;
    var r = l & 134217727;
    return (
      r !== 0
        ? ((l = r & ~n),
          l !== 0
            ? (a = O3(l))
            : ((i &= r),
              i !== 0
                ? (a = O3(i))
                : e || ((u = r & ~u), u !== 0 && (a = O3(u)))))
        : ((r = l & ~n),
          r !== 0
            ? (a = O3(r))
            : i !== 0
            ? (a = O3(i))
            : e || ((u = l & ~u), u !== 0 && (a = O3(u)))),
      a === 0
        ? 0
        : t !== 0 &&
          t !== a &&
          !(t & n) &&
          ((n = a & -a),
          (u = t & -t),
          n >= u || (n === 32 && (u & 4194176) !== 0))
        ? t
        : a
    );
  }
  function K4(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function ya(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
        return t + 250;
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function J7() {
    var e = I8;
    return (I8 <<= 1), !(I8 & 4194176) && (I8 = 128), e;
  }
  function $7() {
    var e = e5;
    return (e5 <<= 1), !(e5 & 62914560) && (e5 = 4194304), e;
  }
  function H9(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function k4(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function ba(e, t, l, a, n, i) {
    var u = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var r = e.entanglements,
      d = e.expirationTimes,
      y = e.hiddenUpdates;
    for (l = u & ~l; 0 < l; ) {
      var L = 31 - i2(l),
        R = 1 << L;
      (r[L] = 0), (d[L] = -1);
      var S = y[L];
      if (S !== null)
        for (y[L] = null, L = 0; L < S.length; L++) {
          var j = S[L];
          j !== null && (j.lane &= -536870913);
        }
      l &= ~R;
    }
    a !== 0 && W7(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function W7(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - i2(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194218));
  }
  function F7(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - i2(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function P7(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function I7() {
    var e = Z.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Hl(e.type));
  }
  function Ha(e, t) {
    var l = Z.p;
    try {
      return (Z.p = e), t();
    } finally {
      Z.p = l;
    }
  }
  var r3 = Math.random().toString(36).slice(2),
    J1 = "__reactFiber$" + r3,
    e2 = "__reactProps$" + r3,
    u4 = "__reactContainer$" + r3,
    x9 = "__reactEvents$" + r3,
    xa = "__reactListeners$" + r3,
    Sa = "__reactHandles$" + r3,
    e0 = "__reactResources$" + r3,
    J4 = "__reactMarker$" + r3;
  function S9(e) {
    delete e[J1], delete e[e2], delete e[x9], delete e[xa], delete e[Sa];
  }
  function D3(e) {
    var t = e[J1];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[u4] || l[J1])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = ul(e); e !== null; ) {
            if ((l = e[J1])) return l;
            e = ul(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function c4(e) {
    if ((e = e[J1] || e[u4])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function $4(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(f(33));
  }
  function s4(e) {
    var t = e[e0];
    return (
      t ||
        (t = e[e0] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function q1(e) {
    e[J4] = !0;
  }
  var t0 = new Set(),
    l0 = {};
  function N3(e, t) {
    r4(e, t), r4(e + "Capture", t);
  }
  function r4(e, t) {
    for (l0[e] = t, e = 0; e < t.length; e++) t0.add(t[e]);
  }
  var Y2 = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Ea = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    a0 = {},
    n0 = {};
  function _a(e) {
    return p9.call(n0, e)
      ? !0
      : p9.call(a0, e)
      ? !1
      : Ea.test(e)
      ? (n0[e] = !0)
      : ((a0[e] = !0), !1);
  }
  function l5(e, t, l) {
    if (_a(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function a5(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function G2(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  function d2(e) {
    switch (typeof e) {
      case "bigint":
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
  function i0(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ja(e) {
    var t = i0(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            (a = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (u) {
            a = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function n5(e) {
    e._valueTracker || (e._valueTracker = ja(e));
  }
  function u0(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = i0(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function i5(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var La = /[\n"\\]/g;
  function h2(e) {
    return e.replace(La, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function E9(e, t, l, a, n, i, u, r) {
    (e.name = ""),
      u != null &&
      typeof u != "function" &&
      typeof u != "symbol" &&
      typeof u != "boolean"
        ? (e.type = u)
        : e.removeAttribute("type"),
      t != null
        ? u === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + d2(t))
          : e.value !== "" + d2(t) && (e.value = "" + d2(t))
        : (u !== "submit" && u !== "reset") || e.removeAttribute("value"),
      t != null
        ? _9(e, u, d2(t))
        : l != null
        ? _9(e, u, d2(l))
        : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.name = "" + d2(r))
        : e.removeAttribute("name");
  }
  function c0(e, t, l, a, n, i, u, r) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      (l = l != null ? "" + d2(l) : ""),
        (t = t != null ? "" + d2(t) : l),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = r ? e.checked : !!a),
      (e.defaultChecked = !!a),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.name = u);
  }
  function _9(e, t, l) {
    (t === "number" && i5(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function f4(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + d2(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function s0(e, t, l) {
    if (
      t != null &&
      ((t = "" + d2(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + d2(l) : "";
  }
  function r0(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(f(92));
        if ($(a)) {
          if (1 < a.length) throw Error(f(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = d2(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function o4(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ma = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function f0(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : a
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || Ma.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function o0(e, t, l) {
    if (t != null && typeof t != "object") throw Error(f(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
            ? (e.cssFloat = "")
            : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && f0(e, n, a);
    } else for (var i in t) t.hasOwnProperty(i) && f0(e, i, t[i]);
  }
  function j9(e) {
    if (e.indexOf("-") === -1) return !1;
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
  var Aa = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Ta =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function u5(e) {
    return Ta.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var L9 = null;
  function M9(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var C4 = null,
    d4 = null;
  function C0(e) {
    var t = c4(e);
    if (t && (e = t.stateNode)) {
      var l = e[e2] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (E9(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + h2("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[e2] || null;
                if (!n) throw Error(f(90));
                E9(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && u0(a);
          }
          break e;
        case "textarea":
          s0(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && f4(e, !!l.multiple, t, !1);
      }
    }
  }
  var A9 = !1;
  function d0(e, t, l) {
    if (A9) return e(t, l);
    A9 = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((A9 = !1),
        (C4 !== null || d4 !== null) &&
          (G5(), C4 && ((t = C4), (e = d4), (d4 = C4 = null), C0(t), e)))
      )
        for (t = 0; t < e.length; t++) C0(e[t]);
    }
  }
  function W4(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[e2] || null;
    if (a === null) return null;
    l = a[t];
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
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(f(231, t, typeof l));
    return l;
  }
  var T9 = !1;
  if (Y2)
    try {
      var F4 = {};
      Object.defineProperty(F4, "passive", {
        get: function () {
          T9 = !0;
        },
      }),
        window.addEventListener("test", F4, F4),
        window.removeEventListener("test", F4, F4);
    } catch {
      T9 = !1;
    }
  var f3 = null,
    R9 = null,
    c5 = null;
  function h0() {
    if (c5) return c5;
    var e,
      t = R9,
      l = t.length,
      a,
      n = "value" in f3 ? f3.value : f3.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var u = l - e;
    for (a = 1; a <= u && t[l - a] === n[i - a]; a++);
    return (c5 = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function s5(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function r5() {
    return !0;
  }
  function m0() {
    return !1;
  }
  function t2(e) {
    function t(l, a, n, i, u) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var r in e)
        e.hasOwnProperty(r) && ((l = e[r]), (this[r] = l ? l(i) : i[r]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? r5
          : m0),
        (this.isPropagationStopped = m0),
        this
      );
    }
    return (
      t1(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = r5));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = r5));
        },
        persist: function () {},
        isPersistent: r5,
      }),
      t
    );
  }
  var U3 = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    f5 = t2(U3),
    P4 = t1({}, U3, { view: 0, detail: 0 }),
    Ra = t2(P4),
    z9,
    w9,
    I4,
    o5 = t1({}, P4, {
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
      getModifierState: D9,
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
          : (e !== I4 &&
              (I4 && e.type === "mousemove"
                ? ((z9 = e.screenX - I4.screenX), (w9 = e.screenY - I4.screenY))
                : (w9 = z9 = 0),
              (I4 = e)),
            z9);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : w9;
      },
    }),
    v0 = t2(o5),
    za = t1({}, o5, { dataTransfer: 0 }),
    wa = t2(za),
    Oa = t1({}, P4, { relatedTarget: 0 }),
    O9 = t2(Oa),
    Da = t1({}, U3, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Na = t2(Da),
    Ua = t1({}, U3, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Va = t2(Ua),
    Ba = t1({}, U3, { data: 0 }),
    g0 = t2(Ba),
    qa = {
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
    Za = {
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
    Ya = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ga(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Ya[e])
      ? !!t[e]
      : !1;
  }
  function D9() {
    return Ga;
  }
  var Xa = t1({}, P4, {
      key: function (e) {
        if (e.key) {
          var t = qa[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = s5(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Za[e.keyCode] || "Unidentified"
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
      getModifierState: D9,
      charCode: function (e) {
        return e.type === "keypress" ? s5(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? s5(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Qa = t2(Xa),
    Ka = t1({}, o5, {
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
    p0 = t2(Ka),
    ka = t1({}, P4, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: D9,
    }),
    Ja = t2(ka),
    $a = t1({}, U3, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wa = t2($a),
    Fa = t1({}, o5, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
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
    Pa = t2(Fa),
    Ia = t1({}, U3, { newState: 0, oldState: 0 }),
    en = t2(Ia),
    tn = [9, 13, 27, 32],
    N9 = Y2 && "CompositionEvent" in window,
    e8 = null;
  Y2 && "documentMode" in document && (e8 = document.documentMode);
  var ln = Y2 && "TextEvent" in window && !e8,
    y0 = Y2 && (!N9 || (e8 && 8 < e8 && 11 >= e8)),
    b0 = " ",
    H0 = !1;
  function x0(e, t) {
    switch (e) {
      case "keyup":
        return tn.indexOf(t.keyCode) !== -1;
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
  function S0(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var h4 = !1;
  function an(e, t) {
    switch (e) {
      case "compositionend":
        return S0(t);
      case "keypress":
        return t.which !== 32 ? null : ((H0 = !0), b0);
      case "textInput":
        return (e = t.data), e === b0 && H0 ? null : e;
      default:
        return null;
    }
  }
  function nn(e, t) {
    if (h4)
      return e === "compositionend" || (!N9 && x0(e, t))
        ? ((e = h0()), (c5 = R9 = f3 = null), (h4 = !1), e)
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
        return y0 && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var un = {
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
  function E0(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!un[e.type] : t === "textarea";
  }
  function _0(e, t, l, a) {
    C4 ? (d4 ? d4.push(a) : (d4 = [a])) : (C4 = a),
      (t = J5(t, "onChange")),
      0 < t.length &&
        ((l = new f5("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var t8 = null,
    l8 = null;
  function cn(e) {
    Ft(e, 0);
  }
  function C5(e) {
    var t = $4(e);
    if (u0(t)) return e;
  }
  function j0(e, t) {
    if (e === "change") return t;
  }
  var L0 = !1;
  if (Y2) {
    var U9;
    if (Y2) {
      var V9 = "oninput" in document;
      if (!V9) {
        var M0 = document.createElement("div");
        M0.setAttribute("oninput", "return;"),
          (V9 = typeof M0.oninput == "function");
      }
      U9 = V9;
    } else U9 = !1;
    L0 = U9 && (!document.documentMode || 9 < document.documentMode);
  }
  function A0() {
    t8 && (t8.detachEvent("onpropertychange", T0), (l8 = t8 = null));
  }
  function T0(e) {
    if (e.propertyName === "value" && C5(l8)) {
      var t = [];
      _0(t, l8, e, M9(e)), d0(cn, t);
    }
  }
  function sn(e, t, l) {
    e === "focusin"
      ? (A0(), (t8 = t), (l8 = l), t8.attachEvent("onpropertychange", T0))
      : e === "focusout" && A0();
  }
  function rn(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return C5(l8);
  }
  function fn(e, t) {
    if (e === "click") return C5(t);
  }
  function on(e, t) {
    if (e === "input" || e === "change") return C5(t);
  }
  function Cn(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var u2 = typeof Object.is == "function" ? Object.is : Cn;
  function a8(e, t) {
    if (u2(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!p9.call(t, n) || !u2(e[n], t[n])) return !1;
    }
    return !0;
  }
  function R0(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function z0(e, t) {
    var l = R0(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = R0(l);
    }
  }
  function w0(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? w0(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function O0(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = i5(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = i5(e.document);
    }
    return t;
  }
  function B9(e) {
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
  function dn(e, t) {
    var l = O0(t);
    t = e.focusedElem;
    var a = e.selectionRange;
    if (
      l !== t &&
      t &&
      t.ownerDocument &&
      w0(t.ownerDocument.documentElement, t)
    ) {
      if (a !== null && B9(t)) {
        if (
          ((e = a.start),
          (l = a.end),
          l === void 0 && (l = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(l, t.value.length));
        else if (
          ((l = ((e = t.ownerDocument || document) && e.defaultView) || window),
          l.getSelection)
        ) {
          l = l.getSelection();
          var n = t.textContent.length,
            i = Math.min(a.start, n);
          (a = a.end === void 0 ? i : Math.min(a.end, n)),
            !l.extend && i > a && ((n = a), (a = i), (i = n)),
            (n = z0(t, i));
          var u = z0(t, a);
          n &&
            u &&
            (l.rangeCount !== 1 ||
              l.anchorNode !== n.node ||
              l.anchorOffset !== n.offset ||
              l.focusNode !== u.node ||
              l.focusOffset !== u.offset) &&
            ((e = e.createRange()),
            e.setStart(n.node, n.offset),
            l.removeAllRanges(),
            i > a
              ? (l.addRange(e), l.extend(u.node, u.offset))
              : (e.setEnd(u.node, u.offset), l.addRange(e)));
        }
      }
      for (e = [], l = t; (l = l.parentNode); )
        l.nodeType === 1 &&
          e.push({ element: l, left: l.scrollLeft, top: l.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (l = e[t]),
          (l.element.scrollLeft = l.left),
          (l.element.scrollTop = l.top);
    }
  }
  var hn = Y2 && "documentMode" in document && 11 >= document.documentMode,
    m4 = null,
    q9 = null,
    n8 = null,
    Z9 = !1;
  function D0(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Z9 ||
      m4 == null ||
      m4 !== i5(a) ||
      ((a = m4),
      "selectionStart" in a && B9(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (n8 && a8(n8, a)) ||
        ((n8 = a),
        (a = J5(q9, "onSelect")),
        0 < a.length &&
          ((t = new f5("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = m4))));
  }
  function V3(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var v4 = {
      animationend: V3("Animation", "AnimationEnd"),
      animationiteration: V3("Animation", "AnimationIteration"),
      animationstart: V3("Animation", "AnimationStart"),
      transitionrun: V3("Transition", "TransitionRun"),
      transitionstart: V3("Transition", "TransitionStart"),
      transitioncancel: V3("Transition", "TransitionCancel"),
      transitionend: V3("Transition", "TransitionEnd"),
    },
    Y9 = {},
    N0 = {};
  Y2 &&
    ((N0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete v4.animationend.animation,
      delete v4.animationiteration.animation,
      delete v4.animationstart.animation),
    "TransitionEvent" in window || delete v4.transitionend.transition);
  function B3(e) {
    if (Y9[e]) return Y9[e];
    if (!v4[e]) return e;
    var t = v4[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in N0) return (Y9[e] = t[l]);
    return e;
  }
  var U0 = B3("animationend"),
    V0 = B3("animationiteration"),
    B0 = B3("animationstart"),
    mn = B3("transitionrun"),
    vn = B3("transitionstart"),
    gn = B3("transitioncancel"),
    q0 = B3("transitionend"),
    Z0 = new Map(),
    Y0 =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function j2(e, t) {
    Z0.set(e, t), N3(t, [e]);
  }
  var m2 = [],
    g4 = 0,
    G9 = 0;
  function d5() {
    for (var e = g4, t = (G9 = g4 = 0); t < e; ) {
      var l = m2[t];
      m2[t++] = null;
      var a = m2[t];
      m2[t++] = null;
      var n = m2[t];
      m2[t++] = null;
      var i = m2[t];
      if (((m2[t++] = null), a !== null && n !== null)) {
        var u = a.pending;
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (a.pending = n);
      }
      i !== 0 && G0(l, n, i);
    }
  }
  function h5(e, t, l, a) {
    (m2[g4++] = e),
      (m2[g4++] = t),
      (m2[g4++] = l),
      (m2[g4++] = a),
      (G9 |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function X9(e, t, l, a) {
    return h5(e, t, l, a), m5(e);
  }
  function o3(e, t) {
    return h5(e, null, null, t), m5(e);
  }
  function G0(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    n &&
      t !== null &&
      e.tag === 3 &&
      ((i = e.stateNode),
      (n = 31 - i2(l)),
      (i = i.hiddenUpdates),
      (e = i[n]),
      e === null ? (i[n] = [t]) : e.push(t),
      (t.lane = l | 536870912));
  }
  function m5(e) {
    if (50 < A8) throw ((A8 = 0), (W6 = null), Error(f(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var p4 = {},
    X0 = new WeakMap();
  function v2(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = X0.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: I(t) }), X0.set(e, t), t);
    }
    return { value: e, source: t, stack: I(t) };
  }
  var y4 = [],
    b4 = 0,
    v5 = null,
    g5 = 0,
    g2 = [],
    p2 = 0,
    q3 = null,
    X2 = 1,
    Q2 = "";
  function Z3(e, t) {
    (y4[b4++] = g5), (y4[b4++] = v5), (v5 = e), (g5 = t);
  }
  function Q0(e, t, l) {
    (g2[p2++] = X2), (g2[p2++] = Q2), (g2[p2++] = q3), (q3 = e);
    var a = X2;
    e = Q2;
    var n = 32 - i2(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - i2(t) + n;
    if (30 < i) {
      var u = n - (n % 5);
      (i = (a & ((1 << u) - 1)).toString(32)),
        (a >>= u),
        (n -= u),
        (X2 = (1 << (32 - i2(t) + n)) | (l << n) | a),
        (Q2 = i + e);
    } else (X2 = (1 << i) | (l << n) | a), (Q2 = e);
  }
  function Q9(e) {
    e.return !== null && (Z3(e, 1), Q0(e, 1, 0));
  }
  function K9(e) {
    for (; e === v5; )
      (v5 = y4[--b4]), (y4[b4] = null), (g5 = y4[--b4]), (y4[b4] = null);
    for (; e === q3; )
      (q3 = g2[--p2]),
        (g2[p2] = null),
        (Q2 = g2[--p2]),
        (g2[p2] = null),
        (X2 = g2[--p2]),
        (g2[p2] = null);
  }
  var P1 = null,
    Q1 = null,
    f1 = !1,
    L2 = null,
    D2 = !1,
    k9 = Error(f(519));
  function Y3(e) {
    var t = Error(f(418, ""));
    throw (c8(v2(t, e)), k9);
  }
  function K0(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[J1] = e), (t[e2] = a), l)) {
      case "dialog":
        c1("cancel", t), c1("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        c1("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < R8.length; l++) c1(R8[l], t);
        break;
      case "source":
        c1("error", t);
        break;
      case "img":
      case "image":
      case "link":
        c1("error", t), c1("load", t);
        break;
      case "details":
        c1("toggle", t);
        break;
      case "input":
        c1("invalid", t),
          c0(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          n5(t);
        break;
      case "select":
        c1("invalid", t);
        break;
      case "textarea":
        c1("invalid", t), r0(t, a.value, a.defaultValue, a.children), n5(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      tl(t.textContent, l)
        ? (a.popover != null && (c1("beforetoggle", t), c1("toggle", t)),
          a.onScroll != null && c1("scroll", t),
          a.onScrollEnd != null && c1("scrollend", t),
          a.onClick != null && (t.onclick = $5),
          (t = !0))
        : (t = !1),
      t || Y3(e);
  }
  function k0(e) {
    for (P1 = e.return; P1; )
      switch (P1.tag) {
        case 3:
        case 27:
          D2 = !0;
          return;
        case 5:
        case 13:
          D2 = !1;
          return;
        default:
          P1 = P1.return;
      }
  }
  function i8(e) {
    if (e !== P1) return !1;
    if (!f1) return k0(e), (f1 = !0), !1;
    var t = !1,
      l;
    if (
      ((l = e.tag !== 3 && e.tag !== 27) &&
        ((l = e.tag === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || d7(e.type, e.memoizedProps))),
        (l = !l)),
      l && (t = !0),
      t && Q1 && Y3(e),
      k0(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(f(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                Q1 = A2(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        Q1 = null;
      }
    } else Q1 = P1 ? A2(e.stateNode.nextSibling) : null;
    return !0;
  }
  function u8() {
    (Q1 = P1 = null), (f1 = !1);
  }
  function c8(e) {
    L2 === null ? (L2 = [e]) : L2.push(e);
  }
  var s8 = Error(f(460)),
    J0 = Error(f(474)),
    J9 = { then: function () {} };
  function $0(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function p5() {}
  function W0(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(p5, p5), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === s8 ? Error(f(483)) : e);
      default:
        if (typeof t.status == "string") t.then(p5, p5);
        else {
          if (((e = y1), e !== null && 100 < e.shellSuspendCounter))
            throw Error(f(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === s8 ? Error(f(483)) : e);
        }
        throw ((r8 = t), s8);
    }
  }
  var r8 = null;
  function F0() {
    if (r8 === null) throw Error(f(459));
    var e = r8;
    return (r8 = null), e;
  }
  var H4 = null,
    f8 = 0;
  function y5(e) {
    var t = f8;
    return (f8 += 1), H4 === null && (H4 = []), W0(H4, e, t);
  }
  function o8(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function b5(e, t) {
    throw t.$$typeof === v
      ? Error(f(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          f(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function P0(e) {
    var t = e._init;
    return t(e._payload);
  }
  function I0(e) {
    function t(H, p) {
      if (e) {
        var x = H.deletions;
        x === null ? ((H.deletions = [p]), (H.flags |= 16)) : x.push(p);
      }
    }
    function l(H, p) {
      if (!e) return null;
      for (; p !== null; ) t(H, p), (p = p.sibling);
      return null;
    }
    function a(H) {
      for (var p = new Map(); H !== null; )
        H.key !== null ? p.set(H.key, H) : p.set(H.index, H), (H = H.sibling);
      return p;
    }
    function n(H, p) {
      return (H = S3(H, p)), (H.index = 0), (H.sibling = null), H;
    }
    function i(H, p, x) {
      return (
        (H.index = x),
        e
          ? ((x = H.alternate),
            x !== null
              ? ((x = x.index), x < p ? ((H.flags |= 33554434), p) : x)
              : ((H.flags |= 33554434), p))
          : ((H.flags |= 1048576), p)
      );
    }
    function u(H) {
      return e && H.alternate === null && (H.flags |= 33554434), H;
    }
    function r(H, p, x, A) {
      return p === null || p.tag !== 6
        ? ((p = Y6(x, H.mode, A)), (p.return = H), p)
        : ((p = n(p, x)), (p.return = H), p);
    }
    function d(H, p, x, A) {
      var G = x.type;
      return G === b
        ? L(H, p, x.props.children, A, x.key)
        : p !== null &&
          (p.elementType === G ||
            (typeof G == "object" &&
              G !== null &&
              G.$$typeof === Q &&
              P0(G) === p.type))
        ? ((p = n(p, x.props)), o8(p, x), (p.return = H), p)
        : ((p = V5(x.type, x.key, x.props, null, H.mode, A)),
          o8(p, x),
          (p.return = H),
          p);
    }
    function y(H, p, x, A) {
      return p === null ||
        p.tag !== 4 ||
        p.stateNode.containerInfo !== x.containerInfo ||
        p.stateNode.implementation !== x.implementation
        ? ((p = G6(x, H.mode, A)), (p.return = H), p)
        : ((p = n(p, x.children || [])), (p.return = H), p);
    }
    function L(H, p, x, A, G) {
      return p === null || p.tag !== 7
        ? ((p = P3(x, H.mode, A, G)), (p.return = H), p)
        : ((p = n(p, x)), (p.return = H), p);
    }
    function R(H, p, x) {
      if (
        (typeof p == "string" && p !== "") ||
        typeof p == "number" ||
        typeof p == "bigint"
      )
        return (p = Y6("" + p, H.mode, x)), (p.return = H), p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case E:
            return (
              (x = V5(p.type, p.key, p.props, null, H.mode, x)),
              o8(x, p),
              (x.return = H),
              x
            );
          case _:
            return (p = G6(p, H.mode, x)), (p.return = H), p;
          case Q:
            var A = p._init;
            return (p = A(p._payload)), R(H, p, x);
        }
        if ($(p) || H1(p))
          return (p = P3(p, H.mode, x, null)), (p.return = H), p;
        if (typeof p.then == "function") return R(H, y5(p), x);
        if (p.$$typeof === D) return R(H, D5(H, p), x);
        b5(H, p);
      }
      return null;
    }
    function S(H, p, x, A) {
      var G = p !== null ? p.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return G !== null ? null : r(H, p, "" + x, A);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return x.key === G ? d(H, p, x, A) : null;
          case _:
            return x.key === G ? y(H, p, x, A) : null;
          case Q:
            return (G = x._init), (x = G(x._payload)), S(H, p, x, A);
        }
        if ($(x) || H1(x)) return G !== null ? null : L(H, p, x, A, null);
        if (typeof x.then == "function") return S(H, p, y5(x), A);
        if (x.$$typeof === D) return S(H, p, D5(H, x), A);
        b5(H, x);
      }
      return null;
    }
    function j(H, p, x, A, G) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return (H = H.get(x) || null), r(p, H, "" + A, G);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case E:
            return (
              (H = H.get(A.key === null ? x : A.key) || null), d(p, H, A, G)
            );
          case _:
            return (
              (H = H.get(A.key === null ? x : A.key) || null), y(p, H, A, G)
            );
          case Q:
            var i1 = A._init;
            return (A = i1(A._payload)), j(H, p, x, A, G);
        }
        if ($(A) || H1(A)) return (H = H.get(x) || null), L(p, H, A, G, null);
        if (typeof A.then == "function") return j(H, p, x, y5(A), G);
        if (A.$$typeof === D) return j(H, p, x, D5(p, A), G);
        b5(p, A);
      }
      return null;
    }
    function K(H, p, x, A) {
      for (
        var G = null, i1 = null, k = p, W = (p = 0), G1 = null;
        k !== null && W < x.length;
        W++
      ) {
        k.index > W ? ((G1 = k), (k = null)) : (G1 = k.sibling);
        var o1 = S(H, k, x[W], A);
        if (o1 === null) {
          k === null && (k = G1);
          break;
        }
        e && k && o1.alternate === null && t(H, k),
          (p = i(o1, p, W)),
          i1 === null ? (G = o1) : (i1.sibling = o1),
          (i1 = o1),
          (k = G1);
      }
      if (W === x.length) return l(H, k), f1 && Z3(H, W), G;
      if (k === null) {
        for (; W < x.length; W++)
          (k = R(H, x[W], A)),
            k !== null &&
              ((p = i(k, p, W)),
              i1 === null ? (G = k) : (i1.sibling = k),
              (i1 = k));
        return f1 && Z3(H, W), G;
      }
      for (k = a(k); W < x.length; W++)
        (G1 = j(k, H, W, x[W], A)),
          G1 !== null &&
            (e &&
              G1.alternate !== null &&
              k.delete(G1.key === null ? W : G1.key),
            (p = i(G1, p, W)),
            i1 === null ? (G = G1) : (i1.sibling = G1),
            (i1 = G1));
      return (
        e &&
          k.forEach(function (T3) {
            return t(H, T3);
          }),
        f1 && Z3(H, W),
        G
      );
    }
    function e1(H, p, x, A) {
      if (x == null) throw Error(f(151));
      for (
        var G = null, i1 = null, k = p, W = (p = 0), G1 = null, o1 = x.next();
        k !== null && !o1.done;
        W++, o1 = x.next()
      ) {
        k.index > W ? ((G1 = k), (k = null)) : (G1 = k.sibling);
        var T3 = S(H, k, o1.value, A);
        if (T3 === null) {
          k === null && (k = G1);
          break;
        }
        e && k && T3.alternate === null && t(H, k),
          (p = i(T3, p, W)),
          i1 === null ? (G = T3) : (i1.sibling = T3),
          (i1 = T3),
          (k = G1);
      }
      if (o1.done) return l(H, k), f1 && Z3(H, W), G;
      if (k === null) {
        for (; !o1.done; W++, o1 = x.next())
          (o1 = R(H, o1.value, A)),
            o1 !== null &&
              ((p = i(o1, p, W)),
              i1 === null ? (G = o1) : (i1.sibling = o1),
              (i1 = o1));
        return f1 && Z3(H, W), G;
      }
      for (k = a(k); !o1.done; W++, o1 = x.next())
        (o1 = j(k, H, W, o1.value, A)),
          o1 !== null &&
            (e &&
              o1.alternate !== null &&
              k.delete(o1.key === null ? W : o1.key),
            (p = i(o1, p, W)),
            i1 === null ? (G = o1) : (i1.sibling = o1),
            (i1 = o1));
      return (
        e &&
          k.forEach(function (Ri) {
            return t(H, Ri);
          }),
        f1 && Z3(H, W),
        G
      );
    }
    function M1(H, p, x, A) {
      if (
        (typeof x == "object" &&
          x !== null &&
          x.type === b &&
          x.key === null &&
          (x = x.props.children),
        typeof x == "object" && x !== null)
      ) {
        switch (x.$$typeof) {
          case E:
            e: {
              for (var G = x.key; p !== null; ) {
                if (p.key === G) {
                  if (((G = x.type), G === b)) {
                    if (p.tag === 7) {
                      l(H, p.sibling),
                        (A = n(p, x.props.children)),
                        (A.return = H),
                        (H = A);
                      break e;
                    }
                  } else if (
                    p.elementType === G ||
                    (typeof G == "object" &&
                      G !== null &&
                      G.$$typeof === Q &&
                      P0(G) === p.type)
                  ) {
                    l(H, p.sibling),
                      (A = n(p, x.props)),
                      o8(A, x),
                      (A.return = H),
                      (H = A);
                    break e;
                  }
                  l(H, p);
                  break;
                } else t(H, p);
                p = p.sibling;
              }
              x.type === b
                ? ((A = P3(x.props.children, H.mode, A, x.key)),
                  (A.return = H),
                  (H = A))
                : ((A = V5(x.type, x.key, x.props, null, H.mode, A)),
                  o8(A, x),
                  (A.return = H),
                  (H = A));
            }
            return u(H);
          case _:
            e: {
              for (G = x.key; p !== null; ) {
                if (p.key === G)
                  if (
                    p.tag === 4 &&
                    p.stateNode.containerInfo === x.containerInfo &&
                    p.stateNode.implementation === x.implementation
                  ) {
                    l(H, p.sibling),
                      (A = n(p, x.children || [])),
                      (A.return = H),
                      (H = A);
                    break e;
                  } else {
                    l(H, p);
                    break;
                  }
                else t(H, p);
                p = p.sibling;
              }
              (A = G6(x, H.mode, A)), (A.return = H), (H = A);
            }
            return u(H);
          case Q:
            return (G = x._init), (x = G(x._payload)), M1(H, p, x, A);
        }
        if ($(x)) return K(H, p, x, A);
        if (H1(x)) {
          if (((G = H1(x)), typeof G != "function")) throw Error(f(150));
          return (x = G.call(x)), e1(H, p, x, A);
        }
        if (typeof x.then == "function") return M1(H, p, y5(x), A);
        if (x.$$typeof === D) return M1(H, p, D5(H, x), A);
        b5(H, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          p !== null && p.tag === 6
            ? (l(H, p.sibling), (A = n(p, x)), (A.return = H), (H = A))
            : (l(H, p), (A = Y6(x, H.mode, A)), (A.return = H), (H = A)),
          u(H))
        : l(H, p);
    }
    return function (H, p, x, A) {
      try {
        f8 = 0;
        var G = M1(H, p, x, A);
        return (H4 = null), G;
      } catch (k) {
        if (k === s8) throw k;
        var i1 = x2(29, k, null, H.mode);
        return (i1.lanes = A), (i1.return = H), i1;
      } finally {
      }
    };
  }
  var G3 = I0(!0),
    ee = I0(!1),
    x4 = h1(null),
    H5 = h1(0);
  function te(e, t) {
    (e = l3), x1(H5, e), x1(x4, t), (l3 = e | t.baseLanes);
  }
  function $9() {
    x1(H5, l3), x1(x4, x4.current);
  }
  function W9() {
    (l3 = H5.current), R1(x4), R1(H5);
  }
  var y2 = h1(null),
    N2 = null;
  function C3(e) {
    var t = e.alternate;
    x1(U1, U1.current & 1),
      x1(y2, e),
      N2 === null &&
        (t === null || x4.current !== null || t.memoizedState !== null) &&
        (N2 = e);
  }
  function le(e) {
    if (e.tag === 22) {
      if ((x1(U1, U1.current), x1(y2, e), N2 === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (N2 = e);
      }
    } else d3();
  }
  function d3() {
    x1(U1, U1.current), x1(y2, y2.current);
  }
  function K2(e) {
    R1(y2), N2 === e && (N2 = null), R1(U1);
  }
  var U1 = h1(0);
  function x5(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || l.data === "$!")
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
  var pn =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    yn = s.unstable_scheduleCallback,
    bn = s.unstable_NormalPriority,
    V1 = {
      $$typeof: D,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function F9() {
    return { controller: new pn(), data: new Map(), refCount: 0 };
  }
  function C8(e) {
    e.refCount--,
      e.refCount === 0 &&
        yn(bn, function () {
          e.controller.abort();
        });
  }
  var d8 = null,
    P9 = 0,
    S4 = 0,
    E4 = null;
  function Hn(e, t) {
    if (d8 === null) {
      var l = (d8 = []);
      (P9 = 0),
        (S4 = n7()),
        (E4 = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return P9++, t.then(ae, ae), t;
  }
  function ae() {
    if (--P9 === 0 && d8 !== null) {
      E4 !== null && (E4.status = "fulfilled");
      var e = d8;
      (d8 = null), (S4 = 0), (E4 = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xn(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var ne = q.S;
  q.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Hn(e, t),
      ne !== null && ne(e, t);
  };
  var X3 = h1(null);
  function I9() {
    var e = X3.current;
    return e !== null ? e : y1.pooledCache;
  }
  function S5(e, t) {
    t === null ? x1(X3, X3.current) : x1(X3, t.pool);
  }
  function ie() {
    var e = I9();
    return e === null ? null : { parent: V1._currentValue, pool: e };
  }
  var h3 = 0,
    n1 = null,
    v1 = null,
    z1 = null,
    E5 = !1,
    _4 = !1,
    Q3 = !1,
    _5 = 0,
    h8 = 0,
    j4 = null,
    Sn = 0;
  function A1() {
    throw Error(f(321));
  }
  function e6(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!u2(e[l], t[l])) return !1;
    return !0;
  }
  function t6(e, t, l, a, n, i) {
    return (
      (h3 = i),
      (n1 = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (q.H = e === null || e.memoizedState === null ? K3 : m3),
      (Q3 = !1),
      (i = l(a, n)),
      (Q3 = !1),
      _4 && (i = ce(t, l, a, n)),
      ue(e),
      i
    );
  }
  function ue(e) {
    q.H = U2;
    var t = v1 !== null && v1.next !== null;
    if (((h3 = 0), (z1 = v1 = n1 = null), (E5 = !1), (h8 = 0), (j4 = null), t))
      throw Error(f(300));
    e === null ||
      Z1 ||
      ((e = e.dependencies), e !== null && O5(e) && (Z1 = !0));
  }
  function ce(e, t, l, a) {
    n1 = e;
    var n = 0;
    do {
      if ((_4 && (j4 = null), (h8 = 0), (_4 = !1), 25 <= n))
        throw Error(f(301));
      if (((n += 1), (z1 = v1 = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (q.H = k3), (i = t(l, a));
    } while (_4);
    return i;
  }
  function En() {
    var e = q.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? m8(t) : t),
      (e = e.useState()[0]),
      (v1 !== null ? v1.memoizedState : null) !== e && (n1.flags |= 1024),
      t
    );
  }
  function l6() {
    var e = _5 !== 0;
    return (_5 = 0), e;
  }
  function a6(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function n6(e) {
    if (E5) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      E5 = !1;
    }
    (h3 = 0), (z1 = v1 = n1 = null), (_4 = !1), (h8 = _5 = 0), (j4 = null);
  }
  function l2() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return z1 === null ? (n1.memoizedState = z1 = e) : (z1 = z1.next = e), z1;
  }
  function w1() {
    if (v1 === null) {
      var e = n1.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = v1.next;
    var t = z1 === null ? n1.memoizedState : z1.next;
    if (t !== null) (z1 = t), (v1 = e);
    else {
      if (e === null)
        throw n1.alternate === null ? Error(f(467)) : Error(f(310));
      (v1 = e),
        (e = {
          memoizedState: v1.memoizedState,
          baseState: v1.baseState,
          baseQueue: v1.baseQueue,
          queue: v1.queue,
          next: null,
        }),
        z1 === null ? (n1.memoizedState = z1 = e) : (z1 = z1.next = e);
    }
    return z1;
  }
  var j5;
  j5 = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function m8(e) {
    var t = h8;
    return (
      (h8 += 1),
      j4 === null && (j4 = []),
      (e = W0(j4, e, t)),
      (t = n1),
      (z1 === null ? t.memoizedState : z1.next) === null &&
        ((t = t.alternate),
        (q.H = t === null || t.memoizedState === null ? K3 : m3)),
      e
    );
  }
  function L5(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return m8(e);
      if (e.$$typeof === D) return $1(e);
    }
    throw Error(f(438, String(e)));
  }
  function i6(e) {
    var t = null,
      l = n1.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = n1.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = j5()), (n1.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = C1;
    return t.index++, l;
  }
  function k2(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function M5(e) {
    var t = w1();
    return u6(t, v1, e);
  }
  function u6(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(f(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        (n.next = i.next), (i.next = u);
      }
      (t.baseQueue = n = i), (a.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var r = (u = null),
        d = null,
        y = t,
        L = !1;
      do {
        var R = y.lane & -536870913;
        if (R !== y.lane ? (r1 & R) === R : (h3 & R) === R) {
          var S = y.revertLane;
          if (S === 0)
            d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: y.action,
                  hasEagerState: y.hasEagerState,
                  eagerState: y.eagerState,
                  next: null,
                }),
              R === S4 && (L = !0);
          else if ((h3 & S) === S) {
            (y = y.next), S === S4 && (L = !0);
            continue;
          } else
            (R = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              d === null ? ((r = d = R), (u = i)) : (d = d.next = R),
              (n1.lanes |= S),
              (E3 |= S);
          (R = y.action),
            Q3 && l(i, R),
            (i = y.hasEagerState ? y.eagerState : l(i, R));
        } else
          (S = {
            lane: R,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            d === null ? ((r = d = S), (u = i)) : (d = d.next = S),
            (n1.lanes |= R),
            (E3 |= R);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (d === null ? (u = i) : (d.next = r),
        !u2(i, e.memoizedState) && ((Z1 = !0), L && ((l = E4), l !== null)))
      )
        throw l;
      (e.memoizedState = i),
        (e.baseState = u),
        (e.baseQueue = d),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function c6(e) {
    var t = w1(),
      l = t.queue;
    if (l === null) throw Error(f(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var u = (n = n.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== n);
      u2(i, t.memoizedState) || (Z1 = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function se(e, t, l) {
    var a = n1,
      n = w1(),
      i = f1;
    if (i) {
      if (l === void 0) throw Error(f(407));
      l = l();
    } else l = t();
    var u = !u2((v1 || n).memoizedState, l);
    if (
      (u && ((n.memoizedState = l), (Z1 = !0)),
      (n = n.queue),
      f6(oe.bind(null, a, n, e), [e]),
      n.getSnapshot !== t || u || (z1 !== null && z1.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        L4(9, fe.bind(null, a, n, l, t), { destroy: void 0 }, null),
        y1 === null)
      )
        throw Error(f(349));
      i || h3 & 60 || re(a, t, l);
    }
    return l;
  }
  function re(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = n1.updateQueue),
      t === null
        ? ((t = j5()), (n1.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function fe(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Ce(t) && de(e);
  }
  function oe(e, t, l) {
    return l(function () {
      Ce(t) && de(e);
    });
  }
  function Ce(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !u2(e, l);
    } catch {
      return !0;
    }
  }
  function de(e) {
    var t = o3(e, 2);
    t !== null && I1(t, e, 2);
  }
  function s6(e) {
    var t = l2();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Q3)) {
        s3(!0);
        try {
          l();
        } finally {
          s3(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: k2,
        lastRenderedState: e,
      }),
      t
    );
  }
  function he(e, t, l, a) {
    return (e.baseState = l), u6(e, v1, typeof a == "function" ? a : k2);
  }
  function _n(e, t, l, a, n) {
    if (R5(e)) throw Error(f(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (u) {
          i.listeners.push(u);
        },
      };
      q.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), me(t, i))
          : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function me(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = q.T,
        u = {};
      q.T = u;
      try {
        var r = l(n, a),
          d = q.S;
        d !== null && d(u, r), ve(e, t, r);
      } catch (y) {
        r6(e, t, y);
      } finally {
        q.T = i;
      }
    } else
      try {
        (i = l(n, a)), ve(e, t, i);
      } catch (y) {
        r6(e, t, y);
      }
  }
  function ve(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            ge(e, t, a);
          },
          function (a) {
            return r6(e, t, a);
          }
        )
      : ge(e, t, l);
  }
  function ge(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      pe(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), me(e, l)));
  }
  function r6(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), pe(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function pe(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function ye(e, t) {
    return t;
  }
  function be(e, t) {
    if (f1) {
      var l = y1.formState;
      if (l !== null) {
        e: {
          var a = n1;
          if (f1) {
            if (Q1) {
              t: {
                for (var n = Q1, i = D2; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = A2(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (Q1 = A2(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            Y3(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = l2()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ye,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Ve.bind(null, n1, a)),
      (a.dispatch = l),
      (a = s6(!1)),
      (i = m6.bind(null, n1, !1, a.queue)),
      (a = l2()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = _n.bind(null, n1, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function He(e) {
    var t = w1();
    return xe(t, v1, e);
  }
  function xe(e, t, l) {
    (t = u6(e, t, ye)[0]),
      (e = M5(k2)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? m8(t)
          : t);
    var a = w1(),
      n = a.queue,
      i = n.dispatch;
    return (
      l !== a.memoizedState &&
        ((n1.flags |= 2048),
        L4(9, jn.bind(null, n, l), { destroy: void 0 }, null)),
      [t, i, e]
    );
  }
  function jn(e, t) {
    e.action = t;
  }
  function Se(e) {
    var t = w1(),
      l = v1;
    if (l !== null) return xe(t, l, e);
    w1(), (t = t.memoizedState), (l = w1());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function L4(e, t, l, a) {
    return (
      (e = { tag: e, create: t, inst: l, deps: a, next: null }),
      (t = n1.updateQueue),
      t === null && ((t = j5()), (n1.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Ee() {
    return w1().memoizedState;
  }
  function A5(e, t, l, a) {
    var n = l2();
    (n1.flags |= e),
      (n.memoizedState = L4(
        1 | t,
        l,
        { destroy: void 0 },
        a === void 0 ? null : a
      ));
  }
  function T5(e, t, l, a) {
    var n = w1();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    v1 !== null && a !== null && e6(a, v1.memoizedState.deps)
      ? (n.memoizedState = L4(t, l, i, a))
      : ((n1.flags |= e), (n.memoizedState = L4(1 | t, l, i, a)));
  }
  function _e(e, t) {
    A5(8390656, 8, e, t);
  }
  function f6(e, t) {
    T5(2048, 8, e, t);
  }
  function je(e, t) {
    return T5(4, 2, e, t);
  }
  function Le(e, t) {
    return T5(4, 4, e, t);
  }
  function Me(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ae(e, t, l) {
    (l = l != null ? l.concat([e]) : null), T5(4, 4, Me.bind(null, t, e), l);
  }
  function o6() {}
  function Te(e, t) {
    var l = w1();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && e6(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function Re(e, t) {
    var l = w1();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && e6(t, a[1])) return a[0];
    if (((a = e()), Q3)) {
      s3(!0);
      try {
        e();
      } finally {
        s3(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function C6(e, t, l) {
    return l === void 0 || h3 & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = wt()), (n1.lanes |= e), (E3 |= e), l);
  }
  function ze(e, t, l, a) {
    return u2(l, t)
      ? l
      : x4.current !== null
      ? ((e = C6(e, l, a)), u2(e, t) || (Z1 = !0), e)
      : h3 & 42
      ? ((e = wt()), (n1.lanes |= e), (E3 |= e), t)
      : ((Z1 = !0), (e.memoizedState = l));
  }
  function we(e, t, l, a, n) {
    var i = Z.p;
    Z.p = i !== 0 && 8 > i ? i : 8;
    var u = q.T,
      r = {};
    (q.T = r), m6(e, !1, t, l);
    try {
      var d = n(),
        y = q.S;
      if (
        (y !== null && y(r, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var L = xn(d, a);
        v8(e, t, L, f2(e));
      } else v8(e, t, a, f2(e));
    } catch (R) {
      v8(e, t, { then: function () {}, status: "rejected", reason: R }, f2());
    } finally {
      (Z.p = i), (q.T = u);
    }
  }
  function Ln() {}
  function d6(e, t, l, a) {
    if (e.tag !== 5) throw Error(f(476));
    var n = Oe(e).queue;
    we(
      e,
      n,
      t,
      s1,
      l === null
        ? Ln
        : function () {
            return De(e), l(a);
          }
    );
  }
  function Oe(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: s1,
      baseState: s1,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: k2,
        lastRenderedState: s1,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: k2,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function De(e) {
    var t = Oe(e).next.queue;
    v8(e, t, {}, f2());
  }
  function h6() {
    return $1(N8);
  }
  function Ne() {
    return w1().memoizedState;
  }
  function Ue() {
    return w1().memoizedState;
  }
  function Mn(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = f2();
          e = p3(l);
          var a = y3(t, e, l);
          a !== null && (I1(a, t, l), y8(a, t, l)),
            (t = { cache: F9() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function An(e, t, l) {
    var a = f2();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      R5(e)
        ? Be(t, l)
        : ((l = X9(e, t, l, a)), l !== null && (I1(l, e, a), qe(l, t, a)));
  }
  function Ve(e, t, l) {
    var a = f2();
    v8(e, t, l, a);
  }
  function v8(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (R5(e)) Be(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            r = i(u, l);
          if (((n.hasEagerState = !0), (n.eagerState = r), u2(r, u)))
            return h5(e, t, n, 0), y1 === null && d5(), !1;
        } catch {
        } finally {
        }
      if (((l = X9(e, t, n, a)), l !== null))
        return I1(l, e, a), qe(l, t, a), !0;
    }
    return !1;
  }
  function m6(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: n7(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      R5(e))
    ) {
      if (t) throw Error(f(479));
    } else (t = X9(e, l, a, 2)), t !== null && I1(t, e, 2);
  }
  function R5(e) {
    var t = e.alternate;
    return e === n1 || (t !== null && t === n1);
  }
  function Be(e, t) {
    _4 = E5 = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function qe(e, t, l) {
    if (l & 4194176) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), F7(e, l);
    }
  }
  var U2 = {
    readContext: $1,
    use: L5,
    useCallback: A1,
    useContext: A1,
    useEffect: A1,
    useImperativeHandle: A1,
    useLayoutEffect: A1,
    useInsertionEffect: A1,
    useMemo: A1,
    useReducer: A1,
    useRef: A1,
    useState: A1,
    useDebugValue: A1,
    useDeferredValue: A1,
    useTransition: A1,
    useSyncExternalStore: A1,
    useId: A1,
  };
  (U2.useCacheRefresh = A1),
    (U2.useMemoCache = A1),
    (U2.useHostTransitionStatus = A1),
    (U2.useFormState = A1),
    (U2.useActionState = A1),
    (U2.useOptimistic = A1);
  var K3 = {
    readContext: $1,
    use: L5,
    useCallback: function (e, t) {
      return (l2().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: $1,
    useEffect: _e,
    useImperativeHandle: function (e, t, l) {
      (l = l != null ? l.concat([e]) : null),
        A5(4194308, 4, Me.bind(null, t, e), l);
    },
    useLayoutEffect: function (e, t) {
      return A5(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      A5(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var l = l2();
      t = t === void 0 ? null : t;
      var a = e();
      if (Q3) {
        s3(!0);
        try {
          e();
        } finally {
          s3(!1);
        }
      }
      return (l.memoizedState = [a, t]), a;
    },
    useReducer: function (e, t, l) {
      var a = l2();
      if (l !== void 0) {
        var n = l(t);
        if (Q3) {
          s3(!0);
          try {
            l(t);
          } finally {
            s3(!1);
          }
        }
      } else n = t;
      return (
        (a.memoizedState = a.baseState = n),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (a.queue = e),
        (e = e.dispatch = An.bind(null, n1, e)),
        [a.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = l2();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = s6(e);
      var t = e.queue,
        l = Ve.bind(null, n1, t);
      return (t.dispatch = l), [e.memoizedState, l];
    },
    useDebugValue: o6,
    useDeferredValue: function (e, t) {
      var l = l2();
      return C6(l, e, t);
    },
    useTransition: function () {
      var e = s6(!1);
      return (
        (e = we.bind(null, n1, e.queue, !0, !1)),
        (l2().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, l) {
      var a = n1,
        n = l2();
      if (f1) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else {
        if (((l = t()), y1 === null)) throw Error(f(349));
        r1 & 60 || re(a, t, l);
      }
      n.memoizedState = l;
      var i = { value: l, getSnapshot: t };
      return (
        (n.queue = i),
        _e(oe.bind(null, a, i, e), [e]),
        (a.flags |= 2048),
        L4(9, fe.bind(null, a, i, l, t), { destroy: void 0 }, null),
        l
      );
    },
    useId: function () {
      var e = l2(),
        t = y1.identifierPrefix;
      if (f1) {
        var l = Q2,
          a = X2;
        (l = (a & ~(1 << (32 - i2(a) - 1))).toString(32) + l),
          (t = ":" + t + "R" + l),
          (l = _5++),
          0 < l && (t += "H" + l.toString(32)),
          (t += ":");
      } else (l = Sn++), (t = ":" + t + "r" + l.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (l2().memoizedState = Mn.bind(null, n1));
    },
  };
  (K3.useMemoCache = i6),
    (K3.useHostTransitionStatus = h6),
    (K3.useFormState = be),
    (K3.useActionState = be),
    (K3.useOptimistic = function (e) {
      var t = l2();
      t.memoizedState = t.baseState = e;
      var l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = l), (t = m6.bind(null, n1, !0, l)), (l.dispatch = t), [e, t]
      );
    });
  var m3 = {
    readContext: $1,
    use: L5,
    useCallback: Te,
    useContext: $1,
    useEffect: f6,
    useImperativeHandle: Ae,
    useInsertionEffect: je,
    useLayoutEffect: Le,
    useMemo: Re,
    useReducer: M5,
    useRef: Ee,
    useState: function () {
      return M5(k2);
    },
    useDebugValue: o6,
    useDeferredValue: function (e, t) {
      var l = w1();
      return ze(l, v1.memoizedState, e, t);
    },
    useTransition: function () {
      var e = M5(k2)[0],
        t = w1().memoizedState;
      return [typeof e == "boolean" ? e : m8(e), t];
    },
    useSyncExternalStore: se,
    useId: Ne,
  };
  (m3.useCacheRefresh = Ue),
    (m3.useMemoCache = i6),
    (m3.useHostTransitionStatus = h6),
    (m3.useFormState = He),
    (m3.useActionState = He),
    (m3.useOptimistic = function (e, t) {
      var l = w1();
      return he(l, v1, e, t);
    });
  var k3 = {
    readContext: $1,
    use: L5,
    useCallback: Te,
    useContext: $1,
    useEffect: f6,
    useImperativeHandle: Ae,
    useInsertionEffect: je,
    useLayoutEffect: Le,
    useMemo: Re,
    useReducer: c6,
    useRef: Ee,
    useState: function () {
      return c6(k2);
    },
    useDebugValue: o6,
    useDeferredValue: function (e, t) {
      var l = w1();
      return v1 === null ? C6(l, e, t) : ze(l, v1.memoizedState, e, t);
    },
    useTransition: function () {
      var e = c6(k2)[0],
        t = w1().memoizedState;
      return [typeof e == "boolean" ? e : m8(e), t];
    },
    useSyncExternalStore: se,
    useId: Ne,
  };
  (k3.useCacheRefresh = Ue),
    (k3.useMemoCache = i6),
    (k3.useHostTransitionStatus = h6),
    (k3.useFormState = Se),
    (k3.useActionState = Se),
    (k3.useOptimistic = function (e, t) {
      var l = w1();
      return v1 !== null
        ? he(l, v1, e, t)
        : ((l.baseState = e), [e, l.queue.dispatch]);
    });
  function v6(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : t1({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var g6 = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? J(e) === e : !1;
    },
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = f2(),
        n = p3(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = y3(e, n, a)),
        t !== null && (I1(t, e, a), y8(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = f2(),
        n = p3(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = y3(e, n, a)),
        t !== null && (I1(t, e, a), y8(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = f2(),
        a = p3(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = y3(e, a, l)),
        t !== null && (I1(t, e, l), y8(t, e, l));
    },
  };
  function Ze(e, t, l, a, n, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !a8(l, a) || !a8(n, i)
        : !0
    );
  }
  function Ye(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && g6.enqueueReplaceState(t, t.state, null);
  }
  function J3(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = t1({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var z5 =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Ge(e) {
    z5(e);
  }
  function Xe(e) {
    console.error(e);
  }
  function Qe(e) {
    z5(e);
  }
  function w5(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Ke(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function p6(e, t, l) {
    return (
      (l = p3(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        w5(e, t);
      }),
      l
    );
  }
  function ke(e) {
    return (e = p3(e)), (e.tag = 3), e;
  }
  function Je(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Ke(t, l, a);
        });
    }
    var u = l.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (e.callback = function () {
        Ke(t, l, a),
          typeof n != "function" &&
            (_3 === null ? (_3 = new Set([this])) : _3.add(this));
        var r = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function Tn(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && p8(t, l, n, !0),
        (l = y2.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              N2 === null ? I6() : l.alternate === null && L1 === 0 && (L1 = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === J9
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  t7(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === J9
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  t7(e, a, n)),
              !1
            );
        }
        throw Error(f(435, l.tag));
      }
      return t7(e, a, n), I6(), !1;
    }
    if (f1)
      return (
        (t = y2.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== k9 && ((e = Error(f(422), { cause: a })), c8(v2(e, l))))
          : (a !== k9 && ((t = Error(f(423), { cause: a })), c8(v2(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = v2(a, l)),
            (n = p6(e.stateNode, a, n)),
            w6(e, n),
            L1 !== 4 && (L1 = 2)),
        !1
      );
    var i = Error(f(520), { cause: a });
    if (
      ((i = v2(i, l)),
      L8 === null ? (L8 = [i]) : L8.push(i),
      L1 !== 4 && (L1 = 2),
      t === null)
    )
      return !0;
    (a = v2(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = p6(l.stateNode, a, e)),
            w6(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (_3 === null || !_3.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = ke(n)),
              Je(n, e, l, a),
              w6(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var $e = Error(f(461)),
    Z1 = !1;
  function K1(e, t, l, a) {
    t.child = e === null ? ee(t, null, l, a) : G3(t, e.child, l, a);
  }
  function We(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var u = {};
      for (var r in a) r !== "ref" && (u[r] = a[r]);
    } else u = a;
    return (
      W3(t),
      (a = t6(e, t, l, u, i, n)),
      (r = l6()),
      e !== null && !Z1
        ? (a6(e, t, n), J2(e, t, n))
        : (f1 && r && Q9(t), (t.flags |= 1), K1(e, t, a, n), t.child)
    );
  }
  function Fe(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !Z6(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), Pe(e, t, i, a, n))
        : ((e = V5(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !L6(e, n))) {
      var u = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : a8), l(u, a) && e.ref === t.ref)
      )
        return J2(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = S3(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Pe(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (a8(i, a) && e.ref === t.ref)
        if (((Z1 = !1), (t.pendingProps = a = i), L6(e, n)))
          e.flags & 131072 && (Z1 = !0);
        else return (t.lanes = e.lanes), J2(e, t, n);
    }
    return y6(e, t, l, a, n);
  }
  function Ie(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = (t.stateNode._pendingVisibility & 2) !== 0,
      u = e !== null ? e.memoizedState : null;
    if ((g8(e, t), a.mode === "hidden" || i)) {
      if (t.flags & 128) {
        if (((a = u !== null ? u.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = i & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return et(e, t, a, l);
      }
      if (l & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && S5(t, u !== null ? u.cachePool : null),
          u !== null ? te(t, u) : $9(),
          le(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          et(e, t, u !== null ? u.baseLanes | l : l, l)
        );
    } else
      u !== null
        ? (S5(t, u.cachePool), te(t, u), d3(), (t.memoizedState = null))
        : (e !== null && S5(t, null), $9(), d3());
    return K1(e, t, n, l), t.child;
  }
  function et(e, t, l, a) {
    var n = I9();
    return (
      (n = n === null ? null : { parent: V1._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && S5(t, null),
      $9(),
      le(t),
      e !== null && p8(e, t, a, !0),
      null
    );
  }
  function g8(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(f(284));
      (e === null || e.ref !== l) && (t.flags |= 2097664);
    }
  }
  function y6(e, t, l, a, n) {
    return (
      W3(t),
      (l = t6(e, t, l, a, void 0, n)),
      (a = l6()),
      e !== null && !Z1
        ? (a6(e, t, n), J2(e, t, n))
        : (f1 && a && Q9(t), (t.flags |= 1), K1(e, t, l, n), t.child)
    );
  }
  function tt(e, t, l, a, n, i) {
    return (
      W3(t),
      (t.updateQueue = null),
      (l = ce(t, a, l, n)),
      ue(e),
      (a = l6()),
      e !== null && !Z1
        ? (a6(e, t, i), J2(e, t, i))
        : (f1 && a && Q9(t), (t.flags |= 1), K1(e, t, l, i), t.child)
    );
  }
  function lt(e, t, l, a, n) {
    if ((W3(t), t.stateNode === null)) {
      var i = p4,
        u = l.contextType;
      typeof u == "object" && u !== null && (i = $1(u)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = g6),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        R6(t),
        (u = l.contextType),
        (i.context = typeof u == "object" && u !== null ? $1(u) : p4),
        (i.state = t.memoizedState),
        (u = l.getDerivedStateFromProps),
        typeof u == "function" && (v6(t, l, u, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((u = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && g6.enqueueReplaceState(i, i.state, null),
          H8(t, a, i, n),
          b8(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      i = t.stateNode;
      var r = t.memoizedProps,
        d = J3(l, r);
      i.props = d;
      var y = i.context,
        L = l.contextType;
      (u = p4), typeof L == "object" && L !== null && (u = $1(L));
      var R = l.getDerivedStateFromProps;
      (L =
        typeof R == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (r = t.pendingProps !== r),
        L ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((r || y !== u) && Ye(t, i, a, u)),
        (g3 = !1);
      var S = t.memoizedState;
      (i.state = S),
        H8(t, a, i, n),
        b8(),
        (y = t.memoizedState),
        r || S !== y || g3
          ? (typeof R == "function" && (v6(t, l, R, a), (y = t.memoizedState)),
            (d = g3 || Ze(t, l, d, a, S, y, u))
              ? (L ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = y)),
            (i.props = a),
            (i.state = y),
            (i.context = u),
            (a = d))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (i = t.stateNode),
        z6(e, t),
        (u = t.memoizedProps),
        (L = J3(l, u)),
        (i.props = L),
        (R = t.pendingProps),
        (S = i.context),
        (y = l.contextType),
        (d = p4),
        typeof y == "object" && y !== null && (d = $1(y)),
        (r = l.getDerivedStateFromProps),
        (y =
          typeof r == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((u !== R || S !== d) && Ye(t, i, a, d)),
        (g3 = !1),
        (S = t.memoizedState),
        (i.state = S),
        H8(t, a, i, n),
        b8();
      var j = t.memoizedState;
      u !== R ||
      S !== j ||
      g3 ||
      (e !== null && e.dependencies !== null && O5(e.dependencies))
        ? (typeof r == "function" && (v6(t, l, r, a), (j = t.memoizedState)),
          (L =
            g3 ||
            Ze(t, l, L, a, S, j, d) ||
            (e !== null && e.dependencies !== null && O5(e.dependencies)))
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, j, d),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, j, d)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = j)),
          (i.props = a),
          (i.state = j),
          (i.context = d),
          (a = L))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      g8(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = G3(t, e.child, null, n)),
              (t.child = G3(t, null, l, n)))
            : K1(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = J2(e, t, n)),
      e
    );
  }
  function at(e, t, l, a) {
    return u8(), (t.flags |= 256), K1(e, t, l, a), t.child;
  }
  var b6 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function H6(e) {
    return { baseLanes: e, cachePool: ie() };
  }
  function x6(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= S2), e;
  }
  function nt(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          e !== null && e.memoizedState === null ? !1 : (U1.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (f1) {
        if ((n ? C3(t) : d3(), f1)) {
          var r = Q1,
            d;
          if ((d = r)) {
            e: {
              for (d = r, r = D2; d.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break e;
                }
                if (((d = A2(d.nextSibling)), d === null)) {
                  r = null;
                  break e;
                }
              }
              r = d;
            }
            r !== null
              ? ((t.memoizedState = {
                  dehydrated: r,
                  treeContext: q3 !== null ? { id: X2, overflow: Q2 } : null,
                  retryLane: 536870912,
                }),
                (d = x2(18, null, null, 0)),
                (d.stateNode = r),
                (d.return = t),
                (t.child = d),
                (P1 = t),
                (Q1 = null),
                (d = !0))
              : (d = !1);
          }
          d || Y3(t);
        }
        if (
          ((r = t.memoizedState),
          r !== null && ((r = r.dehydrated), r !== null))
        )
          return r.data === "$!" ? (t.lanes = 16) : (t.lanes = 536870912), null;
        K2(t);
      }
      return (
        (r = a.children),
        (a = a.fallback),
        n
          ? (d3(),
            (n = t.mode),
            (r = E6({ mode: "hidden", children: r }, n)),
            (a = P3(a, n, l, null)),
            (r.return = t),
            (a.return = t),
            (r.sibling = a),
            (t.child = r),
            (n = t.child),
            (n.memoizedState = H6(l)),
            (n.childLanes = x6(e, u, l)),
            (t.memoizedState = b6),
            a)
          : (C3(t), S6(t, r))
      );
    }
    if (
      ((d = e.memoizedState), d !== null && ((r = d.dehydrated), r !== null))
    ) {
      if (i)
        t.flags & 256
          ? (C3(t), (t.flags &= -257), (t = _6(e, t, l)))
          : t.memoizedState !== null
          ? (d3(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (d3(),
            (n = a.fallback),
            (r = t.mode),
            (a = E6({ mode: "visible", children: a.children }, r)),
            (n = P3(n, r, l, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            G3(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = H6(l)),
            (a.childLanes = x6(e, u, l)),
            (t.memoizedState = b6),
            (t = n));
      else if ((C3(t), r.data === "$!")) {
        if (((u = r.nextSibling && r.nextSibling.dataset), u)) var y = u.dgst;
        (u = y),
          (a = Error(f(419))),
          (a.stack = ""),
          (a.digest = u),
          c8({ value: a, source: null, stack: null }),
          (t = _6(e, t, l));
      } else if (
        (Z1 || p8(e, t, l, !1), (u = (l & e.childLanes) !== 0), Z1 || u)
      ) {
        if (((u = y1), u !== null)) {
          if (((a = l & -l), a & 42)) a = 1;
          else
            switch (a) {
              case 2:
                a = 1;
                break;
              case 8:
                a = 4;
                break;
              case 32:
                a = 16;
                break;
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
                a = 64;
                break;
              case 268435456:
                a = 134217728;
                break;
              default:
                a = 0;
            }
          if (
            ((a = a & (u.suspendedLanes | l) ? 0 : a),
            a !== 0 && a !== d.retryLane)
          )
            throw ((d.retryLane = a), o3(e, a), I1(u, e, a), $e);
        }
        r.data === "$?" || I6(), (t = _6(e, t, l));
      } else
        r.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Qn.bind(null, e)),
            (r._reactRetry = t),
            (t = null))
          : ((e = d.treeContext),
            (Q1 = A2(r.nextSibling)),
            (P1 = t),
            (f1 = !0),
            (L2 = null),
            (D2 = !1),
            e !== null &&
              ((g2[p2++] = X2),
              (g2[p2++] = Q2),
              (g2[p2++] = q3),
              (X2 = e.id),
              (Q2 = e.overflow),
              (q3 = t)),
            (t = S6(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (d3(),
        (n = a.fallback),
        (r = t.mode),
        (d = e.child),
        (y = d.sibling),
        (a = S3(d, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = d.subtreeFlags & 31457280),
        y !== null ? (n = S3(y, n)) : ((n = P3(n, r, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (r = e.child.memoizedState),
        r === null
          ? (r = H6(l))
          : ((d = r.cachePool),
            d !== null
              ? ((y = V1._currentValue),
                (d = d.parent !== y ? { parent: y, pool: y } : d))
              : (d = ie()),
            (r = { baseLanes: r.baseLanes | l, cachePool: d })),
        (n.memoizedState = r),
        (n.childLanes = x6(e, u, l)),
        (t.memoizedState = b6),
        a)
      : (C3(t),
        (l = e.child),
        (e = l.sibling),
        (l = S3(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((u = t.deletions),
          u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function S6(e, t) {
    return (
      (t = E6({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function E6(e, t) {
    return Tt(e, t, 0, null);
  }
  function _6(e, t, l) {
    return (
      G3(t, e.child, null, l),
      (e = S6(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function it(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), A6(e.return, t, l);
  }
  function j6(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function ut(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((K1(e, t, a.children, l), (a = U1.current), a & 2))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && it(e, l, t);
          else if (e.tag === 19) it(e, l, t);
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
      a &= 1;
    }
    switch ((x1(U1, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && x5(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          j6(t, !1, n, l, i);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && x5(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        j6(t, !0, l, null, i);
        break;
      case "together":
        j6(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function J2(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (E3 |= t.lanes),
      !(l & t.childLanes))
    )
      if (e !== null) {
        if ((p8(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(f(153));
    if (t.child !== null) {
      for (
        e = t.child, l = S3(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = S3(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function L6(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && O5(e)));
  }
  function Rn(e, t, l) {
    switch (t.tag) {
      case 3:
        W8(t, t.stateNode.containerInfo),
          v3(t, V1, e.memoizedState.cache),
          u8();
        break;
      case 27:
      case 5:
        g9(t);
        break;
      case 4:
        W8(t, t.stateNode.containerInfo);
        break;
      case 10:
        v3(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (C3(t), (t.flags |= 128), null)
            : l & t.child.childLanes
            ? nt(e, t, l)
            : (C3(t), (e = J2(e, t, l)), e !== null ? e.sibling : null);
        C3(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (p8(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return ut(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          x1(U1, U1.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Ie(e, t, l);
      case 24:
        v3(t, V1, e.memoizedState.cache);
    }
    return J2(e, t, l);
  }
  function ct(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Z1 = !0;
      else {
        if (!L6(e, l) && !(t.flags & 128)) return (Z1 = !1), Rn(e, t, l);
        Z1 = !!(e.flags & 131072);
      }
    else (Z1 = !1), f1 && t.flags & 1048576 && Q0(t, g5, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            Z6(a)
              ? ((e = J3(a, e)), (t.tag = 1), (t = lt(null, t, a, e, l)))
              : ((t.tag = 0), (t = y6(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === w)) {
                (t.tag = 11), (t = We(null, t, a, e, l));
                break e;
              } else if (n === U) {
                (t.tag = 14), (t = Fe(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = N1(a) || a), Error(f(306, t, "")));
          }
        }
        return t;
      case 0:
        return y6(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = J3(a, t.pendingProps)), lt(e, t, a, n, l);
      case 3:
        e: {
          if ((W8(t, t.stateNode.containerInfo), e === null))
            throw Error(f(387));
          var i = t.pendingProps;
          (n = t.memoizedState), (a = n.element), z6(e, t), H8(t, i, null, l);
          var u = t.memoizedState;
          if (
            ((i = u.cache),
            v3(t, V1, i),
            i !== n.cache && T6(t, [V1], l, !0),
            b8(),
            (i = u.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: i, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = at(e, t, i, l);
              break e;
            } else if (i !== a) {
              (a = v2(Error(f(424)), t)), c8(a), (t = at(e, t, i, l));
              break e;
            } else
              for (
                Q1 = A2(t.stateNode.containerInfo.firstChild),
                  P1 = t,
                  f1 = !0,
                  L2 = null,
                  D2 = !0,
                  l = ee(t, null, i, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
          else {
            if ((u8(), i === a)) {
              t = J2(e, t, l);
              break e;
            }
            K1(e, t, i, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          g8(e, t),
          e === null
            ? (l = fl(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : f1 ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = W5(c3.current).createElement(l)),
                (a[J1] = t),
                (a[e2] = e),
                k1(a, l, e),
                q1(a),
                (t.stateNode = a))
            : (t.memoizedState = fl(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          g9(t),
          e === null &&
            f1 &&
            ((a = t.stateNode = cl(t.type, t.pendingProps, c3.current)),
            (P1 = t),
            (D2 = !0),
            (Q1 = A2(a.firstChild))),
          (a = t.pendingProps.children),
          e !== null || f1 ? K1(e, t, a, l) : (t.child = G3(t, null, a, l)),
          g8(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            f1 &&
            ((n = a = Q1) &&
              ((a = ci(a, t.type, t.pendingProps, D2)),
              a !== null
                ? ((t.stateNode = a),
                  (P1 = t),
                  (Q1 = A2(a.firstChild)),
                  (D2 = !1),
                  (n = !0))
                : (n = !1)),
            n || Y3(t)),
          g9(t),
          (n = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (a = i.children),
          d7(n, i) ? (a = null) : u !== null && d7(n, u) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = t6(e, t, En, null, null, l)), (N8._currentValue = n)),
          g8(e, t),
          K1(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            f1 &&
            ((e = l = Q1) &&
              ((l = si(l, t.pendingProps, D2)),
              l !== null
                ? ((t.stateNode = l), (P1 = t), (Q1 = null), (e = !0))
                : (e = !1)),
            e || Y3(t)),
          null
        );
      case 13:
        return nt(e, t, l);
      case 4:
        return (
          W8(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = G3(t, null, a, l)) : K1(e, t, a, l),
          t.child
        );
      case 11:
        return We(e, t, t.type, t.pendingProps, l);
      case 7:
        return K1(e, t, t.pendingProps, l), t.child;
      case 8:
        return K1(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return K1(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          v3(t, t.type, a.value),
          K1(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          W3(t),
          (n = $1(n)),
          (a = a(n)),
          (t.flags |= 1),
          K1(e, t, a, l),
          t.child
        );
      case 14:
        return Fe(e, t, t.type, t.pendingProps, l);
      case 15:
        return Pe(e, t, t.type, t.pendingProps, l);
      case 19:
        return ut(e, t, l);
      case 22:
        return Ie(e, t, l);
      case 24:
        return (
          W3(t),
          (a = $1(V1)),
          e === null
            ? ((n = I9()),
              n === null &&
                ((n = y1),
                (i = F9()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              R6(t),
              v3(t, V1, n))
            : (e.lanes & l && (z6(e, t), H8(t, null, null, l), b8()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  v3(t, V1, a))
                : ((a = i.cache),
                  v3(t, V1, a),
                  a !== n.cache && T6(t, [V1], l, !0))),
          K1(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(f(156, t.tag));
  }
  var M6 = h1(null),
    $3 = null,
    $2 = null;
  function v3(e, t, l) {
    x1(M6, t._currentValue), (t._currentValue = l);
  }
  function W2(e) {
    (e._currentValue = M6.current), R1(M6);
  }
  function A6(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function T6(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var u = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var r = i;
          i = n;
          for (var d = 0; d < t.length; d++)
            if (r.context === t[d]) {
              (i.lanes |= l),
                (r = i.alternate),
                r !== null && (r.lanes |= l),
                A6(i.return, l, e),
                a || (u = null);
              break e;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(f(341));
        (u.lanes |= l),
          (i = u.alternate),
          i !== null && (i.lanes |= l),
          A6(u, l, e),
          (u = null);
      } else u = n.child;
      if (u !== null) u.return = n;
      else
        for (u = n; u !== null; ) {
          if (u === e) {
            u = null;
            break;
          }
          if (((n = u.sibling), n !== null)) {
            (n.return = u.return), (u = n);
            break;
          }
          u = u.return;
        }
      n = u;
    }
  }
  function p8(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if (n.flags & 524288) i = !0;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(f(387));
        if (((u = u.memoizedProps), u !== null)) {
          var r = n.type;
          u2(n.pendingProps.value, u.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (n === $8.current) {
        if (((u = n.alternate), u === null)) throw Error(f(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(N8) : (e = [N8]));
      }
      n = n.return;
    }
    e !== null && T6(t, e, l, a), (t.flags |= 262144);
  }
  function O5(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!u2(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function W3(e) {
    ($3 = e),
      ($2 = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function $1(e) {
    return st($3, e);
  }
  function D5(e, t) {
    return $3 === null && W3(e), st(e, t);
  }
  function st(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), $2 === null)) {
      if (e === null) throw Error(f(308));
      ($2 = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else $2 = $2.next = t;
    return l;
  }
  var g3 = !1;
  function R6(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function z6(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function p3(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function y3(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), E1 & 2)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = m5(e)),
        G0(e, null, l),
        t
      );
    }
    return h5(e, a, t, l), m5(e);
  }
  function y8(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194176) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), F7(e, l);
    }
  }
  function w6(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var u = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = u) : (i = i.next = u), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var O6 = !1;
  function b8() {
    if (O6) {
      var e = E4;
      if (e !== null) throw e;
    }
  }
  function H8(e, t, l, a) {
    O6 = !1;
    var n = e.updateQueue;
    g3 = !1;
    var i = n.firstBaseUpdate,
      u = n.lastBaseUpdate,
      r = n.shared.pending;
    if (r !== null) {
      n.shared.pending = null;
      var d = r,
        y = d.next;
      (d.next = null), u === null ? (i = y) : (u.next = y), (u = d);
      var L = e.alternate;
      L !== null &&
        ((L = L.updateQueue),
        (r = L.lastBaseUpdate),
        r !== u &&
          (r === null ? (L.firstBaseUpdate = y) : (r.next = y),
          (L.lastBaseUpdate = d)));
    }
    if (i !== null) {
      var R = n.baseState;
      (u = 0), (L = y = d = null), (r = i);
      do {
        var S = r.lane & -536870913,
          j = S !== r.lane;
        if (j ? (r1 & S) === S : (a & S) === S) {
          S !== 0 && S === S4 && (O6 = !0),
            L !== null &&
              (L = L.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var K = e,
              e1 = r;
            S = t;
            var M1 = l;
            switch (e1.tag) {
              case 1:
                if (((K = e1.payload), typeof K == "function")) {
                  R = K.call(M1, R, S);
                  break e;
                }
                R = K;
                break e;
              case 3:
                K.flags = (K.flags & -65537) | 128;
              case 0:
                if (
                  ((K = e1.payload),
                  (S = typeof K == "function" ? K.call(M1, R, S) : K),
                  S == null)
                )
                  break e;
                R = t1({}, R, S);
                break e;
              case 2:
                g3 = !0;
            }
          }
          (S = r.callback),
            S !== null &&
              ((e.flags |= 64),
              j && (e.flags |= 8192),
              (j = n.callbacks),
              j === null ? (n.callbacks = [S]) : j.push(S));
        } else
          (j = {
            lane: S,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            L === null ? ((y = L = j), (d = R)) : (L = L.next = j),
            (u |= S);
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          (j = r),
            (r = j.next),
            (j.next = null),
            (n.lastBaseUpdate = j),
            (n.shared.pending = null);
        }
      } while (!0);
      L === null && (d = R),
        (n.baseState = d),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = L),
        i === null && (n.shared.lanes = 0),
        (E3 |= u),
        (e.lanes = u),
        (e.memoizedState = R);
    }
  }
  function rt(e, t) {
    if (typeof e != "function") throw Error(f(191, e));
    e.call(t);
  }
  function ft(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) rt(l[e], t);
  }
  function x8(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              u = l.inst;
            (a = i()), (u.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (r) {
      p1(t, t.return, r);
    }
  }
  function b3(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var u = a.inst,
              r = u.destroy;
            if (r !== void 0) {
              (u.destroy = void 0), (n = t);
              var d = l;
              try {
                r();
              } catch (y) {
                p1(n, d, y);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (y) {
      p1(t, t.return, y);
    }
  }
  function ot(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        ft(t, l);
      } catch (a) {
        p1(e, e.return, a);
      }
    }
  }
  function Ct(e, t, l) {
    (l.props = J3(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      p1(e, t, a);
    }
  }
  function F3(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        var a = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = a;
            break;
          default:
            n = a;
        }
        typeof l == "function" ? (e.refCleanup = l(n)) : (l.current = n);
      }
    } catch (i) {
      p1(e, t, i);
    }
  }
  function c2(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          p1(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          p1(e, t, n);
        }
      else l.current = null;
  }
  function dt(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      p1(e, e.return, n);
    }
  }
  function ht(e, t, l) {
    try {
      var a = e.stateNode;
      li(a, e.type, l, t), (a[e2] = t);
    } catch (n) {
      p1(e, e.return, n);
    }
  }
  function mt(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function D6(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || mt(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function N6(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? l.nodeType === 8
            ? l.parentNode.insertBefore(e, t)
            : l.insertBefore(e, t)
          : (l.nodeType === 8
              ? ((t = l.parentNode), t.insertBefore(e, l))
              : ((t = l), t.appendChild(e)),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = $5));
    else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
      for (N6(e, t, l), e = e.sibling; e !== null; )
        N6(e, t, l), (e = e.sibling);
  }
  function N5(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (a !== 4 && a !== 27 && ((e = e.child), e !== null))
      for (N5(e, t, l), e = e.sibling; e !== null; )
        N5(e, t, l), (e = e.sibling);
  }
  var F2 = !1,
    j1 = !1,
    U6 = !1,
    vt = typeof WeakSet == "function" ? WeakSet : Set,
    Y1 = null,
    gt = !1;
  function zn(e, t) {
    if (((e = e.containerInfo), (o7 = l9), (e = O0(e)), B9(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var u = 0,
              r = -1,
              d = -1,
              y = 0,
              L = 0,
              R = e,
              S = null;
            t: for (;;) {
              for (
                var j;
                R !== l || (n !== 0 && R.nodeType !== 3) || (r = u + n),
                  R !== i || (a !== 0 && R.nodeType !== 3) || (d = u + a),
                  R.nodeType === 3 && (u += R.nodeValue.length),
                  (j = R.firstChild) !== null;

              )
                (S = R), (R = j);
              for (;;) {
                if (R === e) break t;
                if (
                  (S === l && ++y === n && (r = u),
                  S === i && ++L === a && (d = u),
                  (j = R.nextSibling) !== null)
                )
                  break;
                (R = S), (S = R.parentNode);
              }
              R = j;
            }
            l = r === -1 || d === -1 ? null : { start: r, end: d };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      C7 = { focusedElem: e, selectionRange: l }, l9 = !1, Y1 = t;
      Y1 !== null;

    )
      if (
        ((t = Y1), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (Y1 = e);
      else
        for (; Y1 !== null; ) {
          switch (((t = Y1), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && i !== null) {
                (e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var K = J3(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(K, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (e1) {
                  p1(l, l.return, e1);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  v7(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      v7(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if (e & 1024) throw Error(f(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Y1 = e);
            break;
          }
          Y1 = t.return;
        }
    return (K = gt), (gt = !1), K;
  }
  function pt(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        I2(e, l), a & 4 && x8(5, l);
        break;
      case 1:
        if ((I2(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (r) {
              p1(l, l.return, r);
            }
          else {
            var n = J3(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              p1(l, l.return, r);
            }
          }
        a & 64 && ot(l), a & 512 && F3(l, l.return);
        break;
      case 3:
        if ((I2(e, l), a & 64 && ((a = l.updateQueue), a !== null))) {
          if (((e = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
          try {
            ft(a, e);
          } catch (r) {
            p1(l, l.return, r);
          }
        }
        break;
      case 26:
        I2(e, l), a & 512 && F3(l, l.return);
        break;
      case 27:
      case 5:
        I2(e, l), t === null && a & 4 && dt(l), a & 512 && F3(l, l.return);
        break;
      case 12:
        I2(e, l);
        break;
      case 13:
        I2(e, l), a & 4 && Ht(e, l);
        break;
      case 22:
        if (((n = l.memoizedState !== null || F2), !n)) {
          t = (t !== null && t.memoizedState !== null) || j1;
          var i = F2,
            u = j1;
          (F2 = n),
            (j1 = t) && !u ? H3(e, l, (l.subtreeFlags & 8772) !== 0) : I2(e, l),
            (F2 = i),
            (j1 = u);
        }
        a & 512 &&
          (l.memoizedProps.mode === "manual"
            ? F3(l, l.return)
            : c2(l, l.return));
        break;
      default:
        I2(e, l);
    }
  }
  function yt(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), yt(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && S9(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var O1 = null,
    s2 = !1;
  function P2(e, t, l) {
    for (l = l.child; l !== null; ) bt(e, t, l), (l = l.sibling);
  }
  function bt(e, t, l) {
    if (n2 && typeof n2.onCommitFiberUnmount == "function")
      try {
        n2.onCommitFiberUnmount(Q4, l);
      } catch {}
    switch (l.tag) {
      case 26:
        j1 || c2(l, t),
          P2(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        j1 || c2(l, t);
        var a = O1,
          n = s2;
        for (
          O1 = l.stateNode, P2(e, t, l), l = l.stateNode, t = l.attributes;
          t.length;

        )
          l.removeAttributeNode(t[0]);
        S9(l), (O1 = a), (s2 = n);
        break;
      case 5:
        j1 || c2(l, t);
      case 6:
        n = O1;
        var i = s2;
        if (((O1 = null), P2(e, t, l), (O1 = n), (s2 = i), O1 !== null))
          if (s2)
            try {
              (e = O1),
                (a = l.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(a)
                  : e.removeChild(a);
            } catch (u) {
              p1(l, t, u);
            }
          else
            try {
              O1.removeChild(l.stateNode);
            } catch (u) {
              p1(l, t, u);
            }
        break;
      case 18:
        O1 !== null &&
          (s2
            ? ((t = O1),
              (l = l.stateNode),
              t.nodeType === 8
                ? m7(t.parentNode, l)
                : t.nodeType === 1 && m7(t, l),
              q8(t))
            : m7(O1, l.stateNode));
        break;
      case 4:
        (a = O1),
          (n = s2),
          (O1 = l.stateNode.containerInfo),
          (s2 = !0),
          P2(e, t, l),
          (O1 = a),
          (s2 = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        j1 || b3(2, l, t), j1 || b3(4, l, t), P2(e, t, l);
        break;
      case 1:
        j1 ||
          (c2(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && Ct(l, t, a)),
          P2(e, t, l);
        break;
      case 21:
        P2(e, t, l);
        break;
      case 22:
        j1 || c2(l, t),
          (j1 = (a = j1) || l.memoizedState !== null),
          P2(e, t, l),
          (j1 = a);
        break;
      default:
        P2(e, t, l);
    }
  }
  function Ht(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        q8(e);
      } catch (l) {
        p1(t, t.return, l);
      }
  }
  function wn(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new vt()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new vt()),
          t
        );
      default:
        throw Error(f(435, e.tag));
    }
  }
  function V6(e, t) {
    var l = wn(e);
    t.forEach(function (a) {
      var n = Kn.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function b2(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          u = t,
          r = u;
        e: for (; r !== null; ) {
          switch (r.tag) {
            case 27:
            case 5:
              (O1 = r.stateNode), (s2 = !1);
              break e;
            case 3:
              (O1 = r.stateNode.containerInfo), (s2 = !0);
              break e;
            case 4:
              (O1 = r.stateNode.containerInfo), (s2 = !0);
              break e;
          }
          r = r.return;
        }
        if (O1 === null) throw Error(f(160));
        bt(i, u, n),
          (O1 = null),
          (s2 = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) xt(t, e), (t = t.sibling);
  }
  var M2 = null;
  function xt(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        b2(t, e),
          H2(e),
          a & 4 && (b3(3, e, e.return), x8(3, e), b3(5, e, e.return));
        break;
      case 1:
        b2(t, e),
          H2(e),
          a & 512 && (j1 || l === null || c2(l, l.return)),
          a & 64 &&
            F2 &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = M2;
        if (
          (b2(t, e),
          H2(e),
          a & 512 && (j1 || l === null || c2(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[J4] ||
                          i[J1] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        k1(i, a, l),
                        (i[J1] = e),
                        q1(i),
                        (a = i);
                      break e;
                    case "link":
                      var u = dl("link", "href", n).get(a + (l.href || ""));
                      if (u) {
                        for (var r = 0; r < u.length; r++)
                          if (
                            ((i = u[r]),
                            i.getAttribute("href") ===
                              (l.href == null ? null : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            u.splice(r, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        k1(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (u = dl("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (r = 0; r < u.length; r++)
                          if (
                            ((i = u[r]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            u.splice(r, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        k1(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(f(468, a));
                  }
                  (i[J1] = e), q1(i), (a = i);
                }
                e.stateNode = a;
              } else hl(n, e.type, e.stateNode);
            else e.stateNode = Cl(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? hl(n, e.type, e.stateNode)
                  : Cl(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                ht(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        if (a & 4 && e.alternate === null) {
          (n = e.stateNode), (i = e.memoizedProps);
          try {
            for (var d = n.firstChild; d; ) {
              var y = d.nextSibling,
                L = d.nodeName;
              d[J4] ||
                L === "HEAD" ||
                L === "BODY" ||
                L === "SCRIPT" ||
                L === "STYLE" ||
                (L === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                n.removeChild(d),
                (d = y);
            }
            for (var R = e.type, S = n.attributes; S.length; )
              n.removeAttributeNode(S[0]);
            k1(n, R, i), (n[J1] = e), (n[e2] = i);
          } catch (K) {
            p1(e, e.return, K);
          }
        }
      case 5:
        if (
          (b2(t, e),
          H2(e),
          a & 512 && (j1 || l === null || c2(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            o4(n, "");
          } catch (K) {
            p1(e, e.return, K);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), ht(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (U6 = !0);
        break;
      case 6:
        if ((b2(t, e), H2(e), a & 4)) {
          if (e.stateNode === null) throw Error(f(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (K) {
            p1(e, e.return, K);
          }
        }
        break;
      case 3:
        if (
          ((I5 = null),
          (n = M2),
          (M2 = F5(t.containerInfo)),
          b2(t, e),
          (M2 = n),
          H2(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            q8(t.containerInfo);
          } catch (K) {
            p1(e, e.return, K);
          }
        U6 && ((U6 = !1), St(e));
        break;
      case 4:
        (a = M2),
          (M2 = F5(e.stateNode.containerInfo)),
          b2(t, e),
          H2(e),
          (M2 = a);
        break;
      case 12:
        b2(t, e), H2(e);
        break;
      case 13:
        b2(t, e),
          H2(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (k6 = O2()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), V6(e, a)));
        break;
      case 22:
        if (
          (a & 512 && (j1 || l === null || c2(l, l.return)),
          (d = e.memoizedState !== null),
          (y = l !== null && l.memoizedState !== null),
          (L = F2),
          (R = j1),
          (F2 = L || d),
          (j1 = R || y),
          b2(t, e),
          (j1 = R),
          (F2 = L),
          H2(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          a & 8192 &&
            ((t._visibility = d ? t._visibility & -2 : t._visibility | 1),
            d && ((t = F2 || j1), l === null || y || t || M4(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (l === null) {
                y = l = t;
                try {
                  if (((n = y.stateNode), d))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    (u = y.stateNode), (r = y.memoizedProps.style);
                    var j =
                      r != null && r.hasOwnProperty("display")
                        ? r.display
                        : null;
                    u.style.display =
                      j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (K) {
                  p1(y, y.return, K);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = d ? "" : y.memoizedProps;
                } catch (K) {
                  p1(y, y.return, K);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), V6(e, l))));
        break;
      case 19:
        b2(t, e),
          H2(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), V6(e, a)));
        break;
      case 21:
        break;
      default:
        b2(t, e), H2(e);
    }
  }
  function H2(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var l = e.return; l !== null; ) {
              if (mt(l)) {
                var a = l;
                break e;
              }
              l = l.return;
            }
            throw Error(f(160));
          }
          switch (a.tag) {
            case 27:
              var n = a.stateNode,
                i = D6(e);
              N5(e, i, n);
              break;
            case 5:
              var u = a.stateNode;
              a.flags & 32 && (o4(u, ""), (a.flags &= -33));
              var r = D6(e);
              N5(e, r, u);
              break;
            case 3:
            case 4:
              var d = a.stateNode.containerInfo,
                y = D6(e);
              N6(e, y, d);
              break;
            default:
              throw Error(f(161));
          }
        }
      } catch (L) {
        p1(e, e.return, L);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function St(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        St(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function I2(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) pt(e, t.alternate, t), (t = t.sibling);
  }
  function M4(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          b3(4, t, t.return), M4(t);
          break;
        case 1:
          c2(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && Ct(t, t.return, l),
            M4(t);
          break;
        case 26:
        case 27:
        case 5:
          c2(t, t.return), M4(t);
          break;
        case 22:
          c2(t, t.return), t.memoizedState === null && M4(t);
          break;
        default:
          M4(t);
      }
      e = e.sibling;
    }
  }
  function H3(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          H3(n, i, l), x8(4, i);
          break;
        case 1:
          if (
            (H3(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              p1(a, a.return, y);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var r = a.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  rt(d[n], r);
            } catch (y) {
              p1(a, a.return, y);
            }
          }
          l && u & 64 && ot(i), F3(i, i.return);
          break;
        case 26:
        case 27:
        case 5:
          H3(n, i, l), l && a === null && u & 4 && dt(i), F3(i, i.return);
          break;
        case 12:
          H3(n, i, l);
          break;
        case 13:
          H3(n, i, l), l && u & 4 && Ht(n, i);
          break;
        case 22:
          i.memoizedState === null && H3(n, i, l), F3(i, i.return);
          break;
        default:
          H3(n, i, l);
      }
      t = t.sibling;
    }
  }
  function B6(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && C8(l));
  }
  function q6(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && C8(e));
  }
  function x3(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) Et(e, t, l, a), (t = t.sibling);
  }
  function Et(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        x3(e, t, l, a), n & 2048 && x8(9, t);
        break;
      case 3:
        x3(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && C8(e)));
        break;
      case 12:
        if (n & 2048) {
          x3(e, t, l, a), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              u = i.id,
              r = i.onPostCommit;
            typeof r == "function" &&
              r(
                u,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (d) {
            p1(t, t.return, d);
          }
        } else x3(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          t.memoizedState !== null
            ? i._visibility & 4
              ? x3(e, t, l, a)
              : S8(e, t)
            : i._visibility & 4
            ? x3(e, t, l, a)
            : ((i._visibility |= 4),
              A4(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && B6(t.alternate, t);
        break;
      case 24:
        x3(e, t, l, a), n & 2048 && q6(t.alternate, t);
        break;
      default:
        x3(e, t, l, a);
    }
  }
  function A4(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        u = t,
        r = l,
        d = a,
        y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          A4(i, u, r, d, n), x8(8, u);
          break;
        case 23:
          break;
        case 22:
          var L = u.stateNode;
          u.memoizedState !== null
            ? L._visibility & 4
              ? A4(i, u, r, d, n)
              : S8(i, u)
            : ((L._visibility |= 4), A4(i, u, r, d, n)),
            n && y & 2048 && B6(u.alternate, u);
          break;
        case 24:
          A4(i, u, r, d, n), n && y & 2048 && q6(u.alternate, u);
          break;
        default:
          A4(i, u, r, d, n);
      }
      t = t.sibling;
    }
  }
  function S8(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            S8(l, a), n & 2048 && B6(a.alternate, a);
            break;
          case 24:
            S8(l, a), n & 2048 && q6(a.alternate, a);
            break;
          default:
            S8(l, a);
        }
        t = t.sibling;
      }
  }
  var E8 = 8192;
  function T4(e) {
    if (e.subtreeFlags & E8)
      for (e = e.child; e !== null; ) _t(e), (e = e.sibling);
  }
  function _t(e) {
    switch (e.tag) {
      case 26:
        T4(e),
          e.flags & E8 &&
            e.memoizedState !== null &&
            Hi(M2, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        T4(e);
        break;
      case 3:
      case 4:
        var t = M2;
        (M2 = F5(e.stateNode.containerInfo)), T4(e), (M2 = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = E8), (E8 = 16777216), T4(e), (E8 = t))
            : T4(e));
        break;
      default:
        T4(e);
    }
  }
  function jt(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function _8(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Y1 = a), Mt(a, e);
        }
      jt(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) Lt(e), (e = e.sibling);
  }
  function Lt(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _8(e), e.flags & 2048 && b3(9, e, e.return);
        break;
      case 3:
        _8(e);
        break;
      case 12:
        _8(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), U5(e))
          : _8(e);
        break;
      default:
        _8(e);
    }
  }
  function U5(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Y1 = a), Mt(a, e);
        }
      jt(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          b3(8, t, t.return), U5(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 4 && ((l._visibility &= -5), U5(t));
          break;
        default:
          U5(t);
      }
      e = e.sibling;
    }
  }
  function Mt(e, t) {
    for (; Y1 !== null; ) {
      var l = Y1;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          b3(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          C8(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Y1 = a);
      else
        e: for (l = e; Y1 !== null; ) {
          a = Y1;
          var n = a.sibling,
            i = a.return;
          if ((yt(a), a === l)) {
            Y1 = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (Y1 = n);
            break e;
          }
          Y1 = i;
        }
    }
  }
  function On(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function x2(e, t, l, a) {
    return new On(e, t, l, a);
  }
  function Z6(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function S3(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = x2(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 31457280),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function At(e, t) {
    e.flags &= 31457282;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function V5(e, t, l, a, n, i) {
    var u = 0;
    if (((a = e), typeof e == "function")) Z6(e) && (u = 1);
    else if (typeof e == "string")
      u = yi(e, l, w2.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case b:
          return P3(l.children, n, i, t);
        case m:
          (u = 8), (n |= 24);
          break;
        case T:
          return (
            (e = x2(12, l, t, n | 2)), (e.elementType = T), (e.lanes = i), e
          );
        case X:
          return (e = x2(13, l, t, n)), (e.elementType = X), (e.lanes = i), e;
        case V:
          return (e = x2(19, l, t, n)), (e.elementType = V), (e.lanes = i), e;
        case Y:
          return Tt(l, n, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case N:
              case D:
                u = 10;
                break e;
              case z:
                u = 9;
                break e;
              case w:
                u = 11;
                break e;
              case U:
                u = 14;
                break e;
              case Q:
                (u = 16), (a = null);
                break e;
            }
          (u = 29),
            (l = Error(f(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = x2(u, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t
    );
  }
  function P3(e, t, l, a) {
    return (e = x2(7, e, a, t)), (e.lanes = l), e;
  }
  function Tt(e, t, l, a) {
    (e = x2(22, e, a, t)), (e.elementType = Y), (e.lanes = l);
    var n = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var i = n._current;
        if (i === null) throw Error(f(456));
        if (!(n._pendingVisibility & 2)) {
          var u = o3(i, 2);
          u !== null && ((n._pendingVisibility |= 2), I1(u, i, 2));
        }
      },
      attach: function () {
        var i = n._current;
        if (i === null) throw Error(f(456));
        if (n._pendingVisibility & 2) {
          var u = o3(i, 2);
          u !== null && ((n._pendingVisibility &= -3), I1(u, i, 2));
        }
      },
    };
    return (e.stateNode = n), e;
  }
  function Y6(e, t, l) {
    return (e = x2(6, e, null, t)), (e.lanes = l), e;
  }
  function G6(e, t, l) {
    return (
      (t = x2(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function e3(e) {
    e.flags |= 4;
  }
  function Rt(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !ml(t))) {
      if (
        ((t = y2.current),
        t !== null &&
          ((r1 & 4194176) === r1
            ? N2 !== null
            : ((r1 & 62914560) !== r1 && !(r1 & 536870912)) || t !== N2))
      )
        throw ((r8 = J9), J0);
      e.flags |= 8192;
    }
  }
  function B5(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? $7() : 536870912), (e.lanes |= t), (z4 |= t));
  }
  function j8(e, t) {
    if (!f1)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function S1(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 31457280),
          (a |= n.flags & 31457280),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function Dn(e, t, l) {
    var a = t.pendingProps;
    switch ((K9(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return S1(t), null;
      case 1:
        return S1(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          W2(V1),
          i4(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (i8(t)
              ? e3(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), L2 !== null && (F6(L2), (L2 = null)))),
          S1(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (e3(t),
              l !== null ? (S1(t), Rt(t, l)) : (S1(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (e3(t), S1(t), Rt(t, l))
              : (S1(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && e3(t), S1(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        F8(t), (l = c3.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && e3(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return S1(t), null;
          }
          (e = w2.current),
            i8(t) ? K0(t) : ((e = cl(n, a, l)), (t.stateNode = e), e3(t));
        }
        return S1(t), null;
      case 5:
        if ((F8(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && e3(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(f(166));
            return S1(t), null;
          }
          if (((e = w2.current), i8(t))) K0(t);
          else {
            switch (((n = W5(c3.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[J1] = t), (e[e2] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch ((k1(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && e3(t);
          }
        }
        return S1(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && e3(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
          if (((e = c3.current), i8(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = P1),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[J1] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                tl(e.nodeValue, l)
              )),
              e || Y3(t);
          } else (e = W5(e).createTextNode(a)), (e[J1] = t), (t.stateNode = e);
        }
        return S1(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = i8(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(f(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(f(317));
              n[J1] = t;
            } else
              u8(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            S1(t), (n = !1);
          } else L2 !== null && (F6(L2), (L2 = null)), (n = !0);
          if (!n) return t.flags & 256 ? (K2(t), t) : (K2(t), null);
        }
        if ((K2(t), t.flags & 128)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          B5(t, t.updateQueue),
          S1(t),
          null
        );
      case 4:
        return i4(), e === null && s7(t.stateNode.containerInfo), S1(t), null;
      case 10:
        return W2(t.type), S1(t), null;
      case 19:
        if ((R1(U1), (n = t.memoizedState), n === null)) return S1(t), null;
        if (((a = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) j8(n, !1);
          else {
            if (L1 !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = x5(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      j8(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      B5(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    At(l, e), (l = l.sibling);
                  return x1(U1, (U1.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              O2() > q5 &&
              ((t.flags |= 128), (a = !0), j8(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = x5(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                B5(t, e),
                j8(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !f1)
              )
                return S1(t), null;
            } else
              2 * O2() - n.renderingStartTime > q5 &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), j8(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = O2()),
            (t.sibling = null),
            (e = U1.current),
            x1(U1, a ? (e & 1) | 2 : e & 1),
            t)
          : (S1(t), null);
      case 22:
      case 23:
        return (
          K2(t),
          W9(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? l & 536870912 &&
              !(t.flags & 128) &&
              (S1(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : S1(t),
          (l = t.updateQueue),
          l !== null && B5(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && R1(X3),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          W2(V1),
          S1(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(f(156, t.tag));
  }
  function Nn(e, t) {
    switch ((K9(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          W2(V1),
          i4(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return F8(t), null;
      case 13:
        if (
          (K2(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(f(340));
          u8();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return R1(U1), null;
      case 4:
        return i4(), null;
      case 10:
        return W2(t.type), null;
      case 22:
      case 23:
        return (
          K2(t),
          W9(),
          e !== null && R1(X3),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return W2(V1), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zt(e, t) {
    switch ((K9(t), t.tag)) {
      case 3:
        W2(V1), i4();
        break;
      case 26:
      case 27:
      case 5:
        F8(t);
        break;
      case 4:
        i4();
        break;
      case 13:
        K2(t);
        break;
      case 19:
        R1(U1);
        break;
      case 10:
        W2(t.type);
        break;
      case 22:
      case 23:
        K2(t), W9(), e !== null && R1(X3);
        break;
      case 24:
        W2(V1);
    }
  }
  var Un = {
      getCacheForType: function (e) {
        var t = $1(V1),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    Vn = typeof WeakMap == "function" ? WeakMap : Map,
    E1 = 0,
    y1 = null,
    u1 = null,
    r1 = 0,
    b1 = 0,
    r2 = null,
    t3 = !1,
    R4 = !1,
    X6 = !1,
    l3 = 0,
    L1 = 0,
    E3 = 0,
    I3 = 0,
    Q6 = 0,
    S2 = 0,
    z4 = 0,
    L8 = null,
    V2 = null,
    K6 = !1,
    k6 = 0,
    q5 = 1 / 0,
    Z5 = null,
    _3 = null,
    Y5 = !1,
    e4 = null,
    M8 = 0,
    J6 = 0,
    $6 = null,
    A8 = 0,
    W6 = null;
  function f2() {
    if (E1 & 2 && r1 !== 0) return r1 & -r1;
    if (q.T !== null) {
      var e = S4;
      return e !== 0 ? e : n7();
    }
    return I7();
  }
  function wt() {
    S2 === 0 && (S2 = !(r1 & 536870912) || f1 ? J7() : 536870912);
    var e = y2.current;
    return e !== null && (e.flags |= 32), S2;
  }
  function I1(e, t, l) {
    ((e === y1 && b1 === 2) || e.cancelPendingCommit !== null) &&
      (w4(e, 0), a3(e, r1, S2, !1)),
      k4(e, l),
      (!(E1 & 2) || e !== y1) &&
        (e === y1 && (!(E1 & 2) && (I3 |= l), L1 === 4 && a3(e, r1, S2, !1)),
        B2(e));
  }
  function Ot(e, t, l) {
    if (E1 & 6) throw Error(f(327));
    var a = (!l && (t & 60) === 0 && (t & e.expiredLanes) === 0) || K4(e, t),
      n = a ? Zn(e, t) : e7(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        R4 && !a && a3(e, t, 0, !1);
        break;
      } else if (n === 6) a3(e, t, 0, !t3);
      else {
        if (((l = e.current.alternate), i && !Bn(l))) {
          (n = e7(e, t, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var u = 0;
          else
            (u = e.pendingLanes & -536870913),
              (u = u !== 0 ? u : u & 536870912 ? 536870912 : 0);
          if (u !== 0) {
            t = u;
            e: {
              var r = e;
              n = L8;
              var d = r.current.memoizedState.isDehydrated;
              if ((d && (w4(r, u).flags |= 256), (u = e7(r, u, !1)), u !== 2)) {
                if (X6 && !d) {
                  (r.errorRecoveryDisabledLanes |= i), (I3 |= i), (n = 4);
                  break e;
                }
                (i = V2), (V2 = n), i !== null && F6(i);
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          w4(e, 0), a3(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), n)) {
            case 0:
            case 1:
              throw Error(f(345));
            case 4:
              if ((t & 4194176) === t) {
                a3(a, t, S2, !t3);
                break e;
              }
              break;
            case 2:
              V2 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(f(329));
          }
          if (
            ((a.finishedWork = l),
            (a.finishedLanes = t),
            (t & 62914560) === t && ((i = k6 + 300 - O2()), 10 < i))
          ) {
            if ((a3(a, t, S2, !t3), t5(a, 0) !== 0)) break e;
            a.timeoutHandle = nl(
              Dt.bind(null, a, l, V2, Z5, K6, t, S2, I3, z4, t3, 2, -0, 0),
              i
            );
            break e;
          }
          Dt(a, l, V2, Z5, K6, t, S2, I3, z4, t3, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    B2(e);
  }
  function F6(e) {
    V2 === null ? (V2 = e) : V2.push.apply(V2, e);
  }
  function Dt(e, t, l, a, n, i, u, r, d, y, L, R, S) {
    var j = t.subtreeFlags;
    if (
      (j & 8192 || (j & 16785408) === 16785408) &&
      ((D8 = { stylesheets: null, count: 0, unsuspend: bi }),
      _t(t),
      (t = xi()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Yt.bind(null, e, l, a, n, u, r, d, 1, R, S))),
        a3(e, i, u, !y);
      return;
    }
    Yt(e, l, a, n, u, r, d, L, R, S);
  }
  function Bn(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!u2(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
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
  function a3(e, t, l, a) {
    (t &= ~Q6),
      (t &= ~I3),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - i2(n),
        u = 1 << i;
      (a[i] = -1), (n &= ~u);
    }
    l !== 0 && W7(e, l, t);
  }
  function G5() {
    return E1 & 6 ? !0 : (T8(0), !1);
  }
  function P6() {
    if (u1 !== null) {
      if (b1 === 0) var e = u1.return;
      else (e = u1), ($2 = $3 = null), n6(e), (H4 = null), (f8 = 0), (e = u1);
      for (; e !== null; ) zt(e.alternate, e), (e = e.return);
      u1 = null;
    }
  }
  function w4(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), ni(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      P6(),
      (y1 = e),
      (u1 = l = S3(e.current, null)),
      (r1 = t),
      (b1 = 0),
      (r2 = null),
      (t3 = !1),
      (R4 = K4(e, t)),
      (X6 = !1),
      (z4 = S2 = Q6 = I3 = E3 = L1 = 0),
      (V2 = L8 = null),
      (K6 = !1),
      t & 8 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - i2(a),
          i = 1 << n;
        (t |= e[n]), (a &= ~i);
      }
    return (l3 = t), d5(), l;
  }
  function Nt(e, t) {
    (n1 = null),
      (q.H = U2),
      t === s8
        ? ((t = F0()), (b1 = 3))
        : t === J0
        ? ((t = F0()), (b1 = 4))
        : (b1 =
            t === $e
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (r2 = t),
      u1 === null && ((L1 = 1), w5(e, v2(t, e.current)));
  }
  function Ut() {
    var e = q.H;
    return (q.H = U2), e === null ? U2 : e;
  }
  function Vt() {
    var e = q.A;
    return (q.A = Un), e;
  }
  function I6() {
    (L1 = 4),
      t3 || ((r1 & 4194176) !== r1 && y2.current !== null) || (R4 = !0),
      (!(E3 & 134217727) && !(I3 & 134217727)) ||
        y1 === null ||
        a3(y1, r1, S2, !1);
  }
  function e7(e, t, l) {
    var a = E1;
    E1 |= 2;
    var n = Ut(),
      i = Vt();
    (y1 !== e || r1 !== t) && ((Z5 = null), w4(e, t)), (t = !1);
    var u = L1;
    e: do
      try {
        if (b1 !== 0 && u1 !== null) {
          var r = u1,
            d = r2;
          switch (b1) {
            case 8:
              P6(), (u = 6);
              break e;
            case 3:
            case 2:
            case 6:
              y2.current === null && (t = !0);
              var y = b1;
              if (((b1 = 0), (r2 = null), O4(e, r, d, y), l && R4)) {
                u = 0;
                break e;
              }
              break;
            default:
              (y = b1), (b1 = 0), (r2 = null), O4(e, r, d, y);
          }
        }
        qn(), (u = L1);
        break;
      } catch (L) {
        Nt(e, L);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      ($2 = $3 = null),
      (E1 = a),
      (q.H = n),
      (q.A = i),
      u1 === null && ((y1 = null), (r1 = 0), d5()),
      u
    );
  }
  function qn() {
    for (; u1 !== null; ) Bt(u1);
  }
  function Zn(e, t) {
    var l = E1;
    E1 |= 2;
    var a = Ut(),
      n = Vt();
    y1 !== e || r1 !== t
      ? ((Z5 = null), (q5 = O2() + 500), w4(e, t))
      : (R4 = K4(e, t));
    e: do
      try {
        if (b1 !== 0 && u1 !== null) {
          t = u1;
          var i = r2;
          t: switch (b1) {
            case 1:
              (b1 = 0), (r2 = null), O4(e, t, i, 1);
              break;
            case 2:
              if ($0(i)) {
                (b1 = 0), (r2 = null), qt(t);
                break;
              }
              (t = function () {
                b1 === 2 && y1 === e && (b1 = 7), B2(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              b1 = 7;
              break e;
            case 4:
              b1 = 5;
              break e;
            case 7:
              $0(i)
                ? ((b1 = 0), (r2 = null), qt(t))
                : ((b1 = 0), (r2 = null), O4(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (u1.tag) {
                case 26:
                  u = u1.memoizedState;
                case 5:
                case 27:
                  var r = u1;
                  if (!u || ml(u)) {
                    (b1 = 0), (r2 = null);
                    var d = r.sibling;
                    if (d !== null) u1 = d;
                    else {
                      var y = r.return;
                      y !== null ? ((u1 = y), X5(y)) : (u1 = null);
                    }
                    break t;
                  }
              }
              (b1 = 0), (r2 = null), O4(e, t, i, 5);
              break;
            case 6:
              (b1 = 0), (r2 = null), O4(e, t, i, 6);
              break;
            case 8:
              P6(), (L1 = 6);
              break e;
            default:
              throw Error(f(462));
          }
        }
        Yn();
        break;
      } catch (L) {
        Nt(e, L);
      }
    while (!0);
    return (
      ($2 = $3 = null),
      (q.H = a),
      (q.A = n),
      (E1 = l),
      u1 !== null ? 0 : ((y1 = null), (r1 = 0), d5(), L1)
    );
  }
  function Yn() {
    for (; u1 !== null && !ra(); ) Bt(u1);
  }
  function Bt(e) {
    var t = ct(e.alternate, e, l3);
    (e.memoizedProps = e.pendingProps), t === null ? X5(e) : (u1 = t);
  }
  function qt(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = tt(l, t, t.pendingProps, t.type, void 0, r1);
        break;
      case 11:
        t = tt(l, t, t.pendingProps, t.type.render, t.ref, r1);
        break;
      case 5:
        n6(t);
      default:
        zt(l, t), (t = u1 = At(t, l3)), (t = ct(l, t, l3));
    }
    (e.memoizedProps = e.pendingProps), t === null ? X5(e) : (u1 = t);
  }
  function O4(e, t, l, a) {
    ($2 = $3 = null), n6(t), (H4 = null), (f8 = 0);
    var n = t.return;
    try {
      if (Tn(e, n, t, l, r1)) {
        (L1 = 1), w5(e, v2(l, e.current)), (u1 = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((u1 = n), i);
      (L1 = 1), w5(e, v2(l, e.current)), (u1 = null);
      return;
    }
    t.flags & 32768
      ? (f1 || a === 1
          ? (e = !0)
          : R4 || r1 & 536870912
          ? (e = !1)
          : ((t3 = e = !0),
            (a === 2 || a === 3 || a === 6) &&
              ((a = y2.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Zt(t, e))
      : X5(t);
  }
  function X5(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Zt(t, t3);
        return;
      }
      e = t.return;
      var l = Dn(t.alternate, t, l3);
      if (l !== null) {
        u1 = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        u1 = t;
        return;
      }
      u1 = t = e;
    } while (t !== null);
    L1 === 0 && (L1 = 5);
  }
  function Zt(e, t) {
    do {
      var l = Nn(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (u1 = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        u1 = e;
        return;
      }
      u1 = e = l;
    } while (e !== null);
    (L1 = 6), (u1 = null);
  }
  function Yt(e, t, l, a, n, i, u, r, d, y) {
    var L = q.T,
      R = Z.p;
    try {
      (Z.p = 2), (q.T = null), Gn(e, t, l, a, R, n, i, u, r, d, y);
    } finally {
      (q.T = L), (Z.p = R);
    }
  }
  function Gn(e, t, l, a, n, i, u, r) {
    do D4();
    while (e4 !== null);
    if (E1 & 6) throw Error(f(327));
    var d = e.finishedWork;
    if (((a = e.finishedLanes), d === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), d === e.current))
      throw Error(f(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var y = d.lanes | d.childLanes;
    if (
      ((y |= G9),
      ba(e, a, y, i, u, r),
      e === y1 && ((u1 = y1 = null), (r1 = 0)),
      (!(d.subtreeFlags & 10256) && !(d.flags & 10256)) ||
        Y5 ||
        ((Y5 = !0),
        (J6 = y),
        ($6 = l),
        kn(P8, function () {
          return D4(), null;
        })),
      (l = (d.flags & 15990) !== 0),
      d.subtreeFlags & 15990 || l
        ? ((l = q.T),
          (q.T = null),
          (i = Z.p),
          (Z.p = 2),
          (u = E1),
          (E1 |= 4),
          zn(e, d),
          xt(d, e),
          dn(C7, e.containerInfo),
          (l9 = !!o7),
          (C7 = o7 = null),
          (e.current = d),
          pt(e, d.alternate, d),
          fa(),
          (E1 = u),
          (Z.p = i),
          (q.T = l))
        : (e.current = d),
      Y5 ? ((Y5 = !1), (e4 = e), (M8 = a)) : Gt(e, y),
      (y = e.pendingLanes),
      y === 0 && (_3 = null),
      ma(d.stateNode),
      B2(e),
      t !== null)
    )
      for (n = e.onRecoverableError, d = 0; d < t.length; d++)
        (y = t[d]), n(y.value, { componentStack: y.stack });
    return (
      M8 & 3 && D4(),
      (y = e.pendingLanes),
      a & 4194218 && y & 42
        ? e === W6
          ? A8++
          : ((A8 = 0), (W6 = e))
        : (A8 = 0),
      T8(0),
      null
    );
  }
  function Gt(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), C8(t)));
  }
  function D4() {
    if (e4 !== null) {
      var e = e4,
        t = J6;
      J6 = 0;
      var l = P7(M8),
        a = q.T,
        n = Z.p;
      try {
        if (((Z.p = 32 > l ? 32 : l), (q.T = null), e4 === null)) var i = !1;
        else {
          (l = $6), ($6 = null);
          var u = e4,
            r = M8;
          if (((e4 = null), (M8 = 0), E1 & 6)) throw Error(f(331));
          var d = E1;
          if (
            ((E1 |= 4),
            Lt(u.current),
            Et(u, u.current, r, l),
            (E1 = d),
            T8(0, !1),
            n2 && typeof n2.onPostCommitFiberRoot == "function")
          )
            try {
              n2.onPostCommitFiberRoot(Q4, u);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (Z.p = n), (q.T = a), Gt(e, t);
      }
    }
    return !1;
  }
  function Xt(e, t, l) {
    (t = v2(l, t)),
      (t = p6(e.stateNode, t, 2)),
      (e = y3(e, t, 2)),
      e !== null && (k4(e, 2), B2(e));
  }
  function p1(e, t, l) {
    if (e.tag === 3) Xt(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Xt(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (_3 === null || !_3.has(a)))
          ) {
            (e = v2(l, e)),
              (l = ke(2)),
              (a = y3(t, l, 2)),
              a !== null && (Je(l, a, t, e), k4(a, 2), B2(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function t7(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Vn();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((X6 = !0), n.add(l), (e = Xn.bind(null, e, t, l)), t.then(e, e));
  }
  function Xn(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      y1 === e &&
        (r1 & l) === l &&
        (L1 === 4 || (L1 === 3 && (r1 & 62914560) === r1 && 300 > O2() - k6)
          ? !(E1 & 2) && w4(e, 0)
          : (Q6 |= l),
        z4 === r1 && (z4 = 0)),
      B2(e);
  }
  function Qt(e, t) {
    t === 0 && (t = $7()), (e = o3(e, t)), e !== null && (k4(e, t), B2(e));
  }
  function Qn(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), Qt(e, l);
  }
  function Kn(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(f(314));
    }
    a !== null && a.delete(t), Qt(e, l);
  }
  function kn(e, t) {
    return y9(e, t);
  }
  var Q5 = null,
    N4 = null,
    l7 = !1,
    K5 = !1,
    a7 = !1,
    t4 = 0;
  function B2(e) {
    e !== N4 &&
      e.next === null &&
      (N4 === null ? (Q5 = N4 = e) : (N4 = N4.next = e)),
      (K5 = !0),
      l7 || ((l7 = !0), $n(Jn));
  }
  function T8(e, t) {
    if (!a7 && K5) {
      a7 = !0;
      do
        for (var l = !1, a = Q5; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = a.suspendedLanes,
                r = a.pingedLanes;
              (i = (1 << (31 - i2(42 | e) + 1)) - 1),
                (i &= n & ~(u & ~r)),
                (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Jt(a, i));
          } else
            (i = r1),
              (i = t5(a, a === y1 ? i : 0)),
              !(i & 3) || K4(a, i) || ((l = !0), Jt(a, i));
          a = a.next;
        }
      while (l);
      a7 = !1;
    }
  }
  function Jn() {
    K5 = l7 = !1;
    var e = 0;
    t4 !== 0 && (ai() && (e = t4), (t4 = 0));
    for (var t = O2(), l = null, a = Q5; a !== null; ) {
      var n = a.next,
        i = Kt(a, t);
      i === 0
        ? ((a.next = null),
          l === null ? (Q5 = n) : (l.next = n),
          n === null && (N4 = l))
        : ((l = a), (e !== 0 || i & 3) && (K5 = !0)),
        (a = n);
    }
    T8(e);
  }
  function Kt(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var u = 31 - i2(i),
        r = 1 << u,
        d = n[u];
      d === -1
        ? (!(r & l) || r & a) && (n[u] = ya(r, t))
        : d <= t && (e.expiredLanes |= r),
        (i &= ~r);
    }
    if (
      ((t = y1),
      (l = r1),
      (l = t5(e, e === t ? l : 0)),
      (a = e.callbackNode),
      l === 0 || (e === t && b1 === 2) || e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && b9(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(l & 3) || K4(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && b9(a), P7(l))) {
        case 2:
        case 8:
          l = K7;
          break;
        case 32:
          l = P8;
          break;
        case 268435456:
          l = k7;
          break;
        default:
          l = P8;
      }
      return (
        (a = kt.bind(null, e)),
        (l = y9(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && b9(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function kt(e, t) {
    var l = e.callbackNode;
    if (D4() && e.callbackNode !== l) return null;
    var a = r1;
    return (
      (a = t5(e, e === y1 ? a : 0)),
      a === 0
        ? null
        : (Ot(e, a, t),
          Kt(e, O2()),
          e.callbackNode != null && e.callbackNode === l
            ? kt.bind(null, e)
            : null)
    );
  }
  function Jt(e, t) {
    if (D4()) return null;
    Ot(e, t, !0);
  }
  function $n(e) {
    ii(function () {
      E1 & 6 ? y9(Q7, e) : e();
    });
  }
  function n7() {
    return t4 === 0 && (t4 = J7()), t4;
  }
  function $t(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : u5("" + e);
  }
  function Wt(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Wn(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = $t((n[e2] || null).action),
        u = a.submitter;
      u &&
        ((t = (t = u[e2] || null)
          ? $t(t.formAction)
          : u.getAttribute("formAction")),
        t !== null && ((i = t), (u = null)));
      var r = new f5("action", "action", null, a, n);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (t4 !== 0) {
                  var d = u ? Wt(n, u) : new FormData(n);
                  d6(
                    l,
                    { pending: !0, data: d, method: n.method, action: i },
                    null,
                    d
                  );
                }
              } else
                typeof i == "function" &&
                  (r.preventDefault(),
                  (d = u ? Wt(n, u) : new FormData(n)),
                  d6(
                    l,
                    { pending: !0, data: d, method: n.method, action: i },
                    i,
                    d
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var i7 = 0; i7 < Y0.length; i7++) {
    var u7 = Y0[i7],
      Fn = u7.toLowerCase(),
      Pn = u7[0].toUpperCase() + u7.slice(1);
    j2(Fn, "on" + Pn);
  }
  j2(U0, "onAnimationEnd"),
    j2(V0, "onAnimationIteration"),
    j2(B0, "onAnimationStart"),
    j2("dblclick", "onDoubleClick"),
    j2("focusin", "onFocus"),
    j2("focusout", "onBlur"),
    j2(mn, "onTransitionRun"),
    j2(vn, "onTransitionStart"),
    j2(gn, "onTransitionCancel"),
    j2(q0, "onTransitionEnd"),
    r4("onMouseEnter", ["mouseout", "mouseover"]),
    r4("onMouseLeave", ["mouseout", "mouseover"]),
    r4("onPointerEnter", ["pointerout", "pointerover"]),
    r4("onPointerLeave", ["pointerout", "pointerover"]),
    N3(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    N3(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    N3("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    N3(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    N3(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    N3(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var R8 =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    In = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(R8)
    );
  function Ft(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = a.length - 1; 0 <= u; u--) {
            var r = a[u],
              d = r.instance,
              y = r.currentTarget;
            if (((r = r.listener), d !== i && n.isPropagationStopped()))
              break e;
            (i = r), (n.currentTarget = y);
            try {
              i(n);
            } catch (L) {
              z5(L);
            }
            (n.currentTarget = null), (i = d);
          }
        else
          for (u = 0; u < a.length; u++) {
            if (
              ((r = a[u]),
              (d = r.instance),
              (y = r.currentTarget),
              (r = r.listener),
              d !== i && n.isPropagationStopped())
            )
              break e;
            (i = r), (n.currentTarget = y);
            try {
              i(n);
            } catch (L) {
              z5(L);
            }
            (n.currentTarget = null), (i = d);
          }
      }
    }
  }
  function c1(e, t) {
    var l = t[x9];
    l === void 0 && (l = t[x9] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Pt(t, e, 2, !1), l.add(a));
  }
  function c7(e, t, l) {
    var a = 0;
    t && (a |= 4), Pt(l, e, a, t);
  }
  var k5 = "_reactListening" + Math.random().toString(36).slice(2);
  function s7(e) {
    if (!e[k5]) {
      (e[k5] = !0),
        t0.forEach(function (l) {
          l !== "selectionchange" && (In.has(l) || c7(l, !1, e), c7(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[k5] || ((t[k5] = !0), c7("selectionchange", !1, t));
    }
  }
  function Pt(e, t, l, a) {
    switch (Hl(t)) {
      case 2:
        var n = _i;
        break;
      case 8:
        n = ji;
        break;
      default:
        n = H7;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !T9 ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1);
  }
  function r7(e, t, l, a, n) {
    var i = a;
    if (!(t & 1) && !(t & 2) && a !== null)
      e: for (;;) {
        if (a === null) return;
        var u = a.tag;
        if (u === 3 || u === 4) {
          var r = a.stateNode.containerInfo;
          if (r === n || (r.nodeType === 8 && r.parentNode === n)) break;
          if (u === 4)
            for (u = a.return; u !== null; ) {
              var d = u.tag;
              if (
                (d === 3 || d === 4) &&
                ((d = u.stateNode.containerInfo),
                d === n || (d.nodeType === 8 && d.parentNode === n))
              )
                return;
              u = u.return;
            }
          for (; r !== null; ) {
            if (((u = D3(r)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              a = i = u;
              continue e;
            }
            r = r.parentNode;
          }
        }
        a = a.return;
      }
    d0(function () {
      var y = i,
        L = M9(l),
        R = [];
      e: {
        var S = Z0.get(e);
        if (S !== void 0) {
          var j = f5,
            K = e;
          switch (e) {
            case "keypress":
              if (s5(l) === 0) break e;
            case "keydown":
            case "keyup":
              j = Qa;
              break;
            case "focusin":
              (K = "focus"), (j = O9);
              break;
            case "focusout":
              (K = "blur"), (j = O9);
              break;
            case "beforeblur":
            case "afterblur":
              j = O9;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              j = v0;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              j = wa;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              j = Ja;
              break;
            case U0:
            case V0:
            case B0:
              j = Na;
              break;
            case q0:
              j = Wa;
              break;
            case "scroll":
            case "scrollend":
              j = Ra;
              break;
            case "wheel":
              j = Pa;
              break;
            case "copy":
            case "cut":
            case "paste":
              j = Va;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              j = p0;
              break;
            case "toggle":
            case "beforetoggle":
              j = en;
          }
          var e1 = (t & 4) !== 0,
            M1 = !e1 && (e === "scroll" || e === "scrollend"),
            H = e1 ? (S !== null ? S + "Capture" : null) : S;
          e1 = [];
          for (var p = y, x; p !== null; ) {
            var A = p;
            if (
              ((x = A.stateNode),
              (A = A.tag),
              (A !== 5 && A !== 26 && A !== 27) ||
                x === null ||
                H === null ||
                ((A = W4(p, H)), A != null && e1.push(z8(p, A, x))),
              M1)
            )
              break;
            p = p.return;
          }
          0 < e1.length &&
            ((S = new j(S, K, null, l, L)),
            R.push({ event: S, listeners: e1 }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((S = e === "mouseover" || e === "pointerover"),
            (j = e === "mouseout" || e === "pointerout"),
            S &&
              l !== L9 &&
              (K = l.relatedTarget || l.fromElement) &&
              (D3(K) || K[u4]))
          )
            break e;
          if (
            (j || S) &&
            ((S =
              L.window === L
                ? L
                : (S = L.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            j
              ? ((K = l.relatedTarget || l.toElement),
                (j = y),
                (K = K ? D3(K) : null),
                K !== null &&
                  ((M1 = J(K)),
                  (e1 = K.tag),
                  K !== M1 || (e1 !== 5 && e1 !== 27 && e1 !== 6)) &&
                  (K = null))
              : ((j = null), (K = y)),
            j !== K)
          ) {
            if (
              ((e1 = v0),
              (A = "onMouseLeave"),
              (H = "onMouseEnter"),
              (p = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((e1 = p0),
                (A = "onPointerLeave"),
                (H = "onPointerEnter"),
                (p = "pointer")),
              (M1 = j == null ? S : $4(j)),
              (x = K == null ? S : $4(K)),
              (S = new e1(A, p + "leave", j, l, L)),
              (S.target = M1),
              (S.relatedTarget = x),
              (A = null),
              D3(L) === y &&
                ((e1 = new e1(H, p + "enter", K, l, L)),
                (e1.target = x),
                (e1.relatedTarget = M1),
                (A = e1)),
              (M1 = A),
              j && K)
            )
              t: {
                for (e1 = j, H = K, p = 0, x = e1; x; x = U4(x)) p++;
                for (x = 0, A = H; A; A = U4(A)) x++;
                for (; 0 < p - x; ) (e1 = U4(e1)), p--;
                for (; 0 < x - p; ) (H = U4(H)), x--;
                for (; p--; ) {
                  if (e1 === H || (H !== null && e1 === H.alternate)) break t;
                  (e1 = U4(e1)), (H = U4(H));
                }
                e1 = null;
              }
            else e1 = null;
            j !== null && It(R, S, j, e1, !1),
              K !== null && M1 !== null && It(R, M1, K, e1, !0);
          }
        }
        e: {
          if (
            ((S = y ? $4(y) : window),
            (j = S.nodeName && S.nodeName.toLowerCase()),
            j === "select" || (j === "input" && S.type === "file"))
          )
            var G = j0;
          else if (E0(S))
            if (L0) G = on;
            else {
              G = rn;
              var i1 = sn;
            }
          else
            (j = S.nodeName),
              !j ||
              j.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? y && j9(y.elementType) && (G = j0)
                : (G = fn);
          if (G && (G = G(e, y))) {
            _0(R, G, l, L);
            break e;
          }
          i1 && i1(e, S, y),
            e === "focusout" &&
              y &&
              S.type === "number" &&
              y.memoizedProps.value != null &&
              _9(S, "number", S.value);
        }
        switch (((i1 = y ? $4(y) : window), e)) {
          case "focusin":
            (E0(i1) || i1.contentEditable === "true") &&
              ((m4 = i1), (q9 = y), (n8 = null));
            break;
          case "focusout":
            n8 = q9 = m4 = null;
            break;
          case "mousedown":
            Z9 = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Z9 = !1), D0(R, l, L);
            break;
          case "selectionchange":
            if (hn) break;
          case "keydown":
          case "keyup":
            D0(R, l, L);
        }
        var k;
        if (N9)
          e: {
            switch (e) {
              case "compositionstart":
                var W = "onCompositionStart";
                break e;
              case "compositionend":
                W = "onCompositionEnd";
                break e;
              case "compositionupdate":
                W = "onCompositionUpdate";
                break e;
            }
            W = void 0;
          }
        else
          h4
            ? x0(e, l) && (W = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (W = "onCompositionStart");
        W &&
          (y0 &&
            l.locale !== "ko" &&
            (h4 || W !== "onCompositionStart"
              ? W === "onCompositionEnd" && h4 && (k = h0())
              : ((f3 = L),
                (R9 = "value" in f3 ? f3.value : f3.textContent),
                (h4 = !0))),
          (i1 = J5(y, W)),
          0 < i1.length &&
            ((W = new g0(W, e, null, l, L)),
            R.push({ event: W, listeners: i1 }),
            k ? (W.data = k) : ((k = S0(l)), k !== null && (W.data = k)))),
          (k = ln ? an(e, l) : nn(e, l)) &&
            ((W = J5(y, "onBeforeInput")),
            0 < W.length &&
              ((i1 = new g0("onBeforeInput", "beforeinput", null, l, L)),
              R.push({ event: i1, listeners: W }),
              (i1.data = k))),
          Wn(R, e, y, l, L);
      }
      Ft(R, t);
    });
  }
  function z8(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function J5(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      (n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = W4(e, l)),
          n != null && a.unshift(z8(e, n, i)),
          (n = W4(e, t)),
          n != null && a.push(z8(e, n, i))),
        (e = e.return);
    }
    return a;
  }
  function U4(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function It(e, t, l, a, n) {
    for (var i = t._reactName, u = []; l !== null && l !== a; ) {
      var r = l,
        d = r.alternate,
        y = r.stateNode;
      if (((r = r.tag), d !== null && d === a)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        y === null ||
        ((d = y),
        n
          ? ((y = W4(l, i)), y != null && u.unshift(z8(l, y, d)))
          : n || ((y = W4(l, i)), y != null && u.push(z8(l, y, d)))),
        (l = l.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var ei = /\r\n?/g,
    ti = /\u0000|\uFFFD/g;
  function el(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ei,
        `
`
      )
      .replace(ti, "");
  }
  function tl(e, t) {
    return (t = el(t)), el(e) === t;
  }
  function $5() {}
  function g1(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || o4(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            o4(e, "" + a);
        break;
      case "className":
        a5(e, "class", a);
        break;
      case "tabIndex":
        a5(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        a5(e, l, a);
        break;
      case "style":
        o0(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          a5(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = u5("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && g1(e, t, "name", n.name, n, null),
                g1(e, t, "formEncType", n.formEncType, n, null),
                g1(e, t, "formMethod", n.formMethod, n, null),
                g1(e, t, "formTarget", n.formTarget, n, null))
              : (g1(e, t, "encType", n.encType, n, null),
                g1(e, t, "method", n.method, n, null),
                g1(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = u5("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = $5);
        break;
      case "onScroll":
        a != null && c1("scroll", e);
        break;
      case "onScrollEnd":
        a != null && c1("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = u5("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        c1("beforetoggle", e), c1("toggle", e), l5(e, "popover", a);
        break;
      case "xlinkActuate":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        l5(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = Aa.get(l) || l), l5(e, l, a));
    }
  }
  function f7(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        o0(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(f(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? o4(e, a)
          : (typeof a == "number" || typeof a == "bigint") && o4(e, "" + a);
        break;
      case "onScroll":
        a != null && c1("scroll", e);
        break;
      case "onScrollEnd":
        a != null && c1("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = $5);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!l0.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[e2] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
              ? e.setAttribute(l, "")
              : l5(e, l, a);
          }
    }
  }
  function k1(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        c1("error", e), c1("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var u = l[i];
            if (u != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(f(137, t));
                default:
                  g1(e, t, i, u, l, null);
              }
          }
        n && g1(e, t, "srcSet", l.srcSet, l, null),
          a && g1(e, t, "src", l.src, l, null);
        return;
      case "input":
        c1("invalid", e);
        var r = (i = u = n = null),
          d = null,
          y = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var L = l[a];
            if (L != null)
              switch (a) {
                case "name":
                  n = L;
                  break;
                case "type":
                  u = L;
                  break;
                case "checked":
                  d = L;
                  break;
                case "defaultChecked":
                  y = L;
                  break;
                case "value":
                  i = L;
                  break;
                case "defaultValue":
                  r = L;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (L != null) throw Error(f(137, t));
                  break;
                default:
                  g1(e, t, a, L, l, null);
              }
          }
        c0(e, i, r, d, y, u, n, !1), n5(e);
        return;
      case "select":
        c1("invalid", e), (a = u = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((r = l[n]), r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "multiple":
                a = r;
              default:
                g1(e, t, n, r, l, null);
            }
        (t = i),
          (l = u),
          (e.multiple = !!a),
          t != null ? f4(e, !!a, t, !1) : l != null && f4(e, !!a, l, !0);
        return;
      case "textarea":
        c1("invalid", e), (i = n = a = null);
        for (u in l)
          if (l.hasOwnProperty(u) && ((r = l[u]), r != null))
            switch (u) {
              case "value":
                a = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(f(91));
                break;
              default:
                g1(e, t, u, r, l, null);
            }
        r0(e, a, n, i), n5(e);
        return;
      case "option":
        for (d in l)
          if (l.hasOwnProperty(d) && ((a = l[d]), a != null))
            switch (d) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                g1(e, t, d, a, l, null);
            }
        return;
      case "dialog":
        c1("cancel", e), c1("close", e);
        break;
      case "iframe":
      case "object":
        c1("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < R8.length; a++) c1(R8[a], e);
        break;
      case "image":
        c1("error", e), c1("load", e);
        break;
      case "details":
        c1("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        c1("error", e), c1("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in l)
          if (l.hasOwnProperty(y) && ((a = l[y]), a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                g1(e, t, y, a, l, null);
            }
        return;
      default:
        if (j9(t)) {
          for (L in l)
            l.hasOwnProperty(L) &&
              ((a = l[L]), a !== void 0 && f7(e, t, L, a, l, void 0));
          return;
        }
    }
    for (r in l)
      l.hasOwnProperty(r) && ((a = l[r]), a != null && g1(e, t, r, a, l, null));
  }
  function li(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          u = null,
          r = null,
          d = null,
          y = null,
          L = null;
        for (j in l) {
          var R = l[j];
          if (l.hasOwnProperty(j) && R != null)
            switch (j) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = R;
              default:
                a.hasOwnProperty(j) || g1(e, t, j, null, a, R);
            }
        }
        for (var S in a) {
          var j = a[S];
          if (((R = l[S]), a.hasOwnProperty(S) && (j != null || R != null)))
            switch (S) {
              case "type":
                i = j;
                break;
              case "name":
                n = j;
                break;
              case "checked":
                y = j;
                break;
              case "defaultChecked":
                L = j;
                break;
              case "value":
                u = j;
                break;
              case "defaultValue":
                r = j;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (j != null) throw Error(f(137, t));
                break;
              default:
                j !== R && g1(e, t, S, j, a, R);
            }
        }
        E9(e, u, r, d, y, L, i, n);
        return;
      case "select":
        j = u = r = S = null;
        for (i in l)
          if (((d = l[i]), l.hasOwnProperty(i) && d != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                j = d;
              default:
                a.hasOwnProperty(i) || g1(e, t, i, null, a, d);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (d = l[n]),
            a.hasOwnProperty(n) && (i != null || d != null))
          )
            switch (n) {
              case "value":
                S = i;
                break;
              case "defaultValue":
                r = i;
                break;
              case "multiple":
                u = i;
              default:
                i !== d && g1(e, t, n, i, a, d);
            }
        (t = r),
          (l = u),
          (a = j),
          S != null
            ? f4(e, !!l, S, !1)
            : !!a != !!l &&
              (t != null ? f4(e, !!l, t, !0) : f4(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        j = S = null;
        for (r in l)
          if (
            ((n = l[r]),
            l.hasOwnProperty(r) && n != null && !a.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                g1(e, t, r, null, a, n);
            }
        for (u in a)
          if (
            ((n = a[u]),
            (i = l[u]),
            a.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                j = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(f(91));
                break;
              default:
                n !== i && g1(e, t, u, n, a, i);
            }
        s0(e, S, j);
        return;
      case "option":
        for (var K in l)
          if (
            ((S = l[K]),
            l.hasOwnProperty(K) && S != null && !a.hasOwnProperty(K))
          )
            switch (K) {
              case "selected":
                e.selected = !1;
                break;
              default:
                g1(e, t, K, null, a, S);
            }
        for (d in a)
          if (
            ((S = a[d]),
            (j = l[d]),
            a.hasOwnProperty(d) && S !== j && (S != null || j != null))
          )
            switch (d) {
              case "selected":
                e.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                g1(e, t, d, S, a, j);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var e1 in l)
          (S = l[e1]),
            l.hasOwnProperty(e1) &&
              S != null &&
              !a.hasOwnProperty(e1) &&
              g1(e, t, e1, null, a, S);
        for (y in a)
          if (
            ((S = a[y]),
            (j = l[y]),
            a.hasOwnProperty(y) && S !== j && (S != null || j != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(f(137, t));
                break;
              default:
                g1(e, t, y, S, a, j);
            }
        return;
      default:
        if (j9(t)) {
          for (var M1 in l)
            (S = l[M1]),
              l.hasOwnProperty(M1) &&
                S !== void 0 &&
                !a.hasOwnProperty(M1) &&
                f7(e, t, M1, void 0, a, S);
          for (L in a)
            (S = a[L]),
              (j = l[L]),
              !a.hasOwnProperty(L) ||
                S === j ||
                (S === void 0 && j === void 0) ||
                f7(e, t, L, S, a, j);
          return;
        }
    }
    for (var H in l)
      (S = l[H]),
        l.hasOwnProperty(H) &&
          S != null &&
          !a.hasOwnProperty(H) &&
          g1(e, t, H, null, a, S);
    for (R in a)
      (S = a[R]),
        (j = l[R]),
        !a.hasOwnProperty(R) ||
          S === j ||
          (S == null && j == null) ||
          g1(e, t, R, S, a, j);
  }
  var o7 = null,
    C7 = null;
  function W5(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ll(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function al(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function d7(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var h7 = null;
  function ai() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === h7
        ? !1
        : ((h7 = e), !0)
      : ((h7 = null), !1);
  }
  var nl = typeof setTimeout == "function" ? setTimeout : void 0,
    ni = typeof clearTimeout == "function" ? clearTimeout : void 0,
    il = typeof Promise == "function" ? Promise : void 0,
    ii =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof il < "u"
        ? function (e) {
            return il.resolve(null).then(e).catch(ui);
          }
        : nl;
  function ui(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function m7(e, t) {
    var l = t,
      a = 0;
    do {
      var n = l.nextSibling;
      if ((e.removeChild(l), n && n.nodeType === 8))
        if (((l = n.data), l === "/$")) {
          if (a === 0) {
            e.removeChild(n), q8(t);
            return;
          }
          a--;
        } else (l !== "$" && l !== "$?" && l !== "$!") || a++;
      l = n;
    } while (l);
    q8(t);
  }
  function v7(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          v7(l), S9(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function ci(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[J4])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !== (n.href == null ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = A2(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function si(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = A2(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function A2(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ul(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function cl(e, t, l) {
    switch (((t = W5(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(f(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(f(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(f(454));
        return e;
      default:
        throw Error(f(451));
    }
  }
  var E2 = new Map(),
    sl = new Set();
  function F5(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var n3 = Z.d;
  Z.d = { f: ri, r: fi, D: oi, C: Ci, L: di, m: hi, X: vi, S: mi, M: gi };
  function ri() {
    var e = n3.f(),
      t = G5();
    return e || t;
  }
  function fi(e) {
    var t = c4(e);
    t !== null && t.tag === 5 && t.type === "form" ? De(t) : n3.r(e);
  }
  var V4 = typeof document > "u" ? null : document;
  function rl(e, t, l) {
    var a = V4;
    if (a && typeof t == "string" && t) {
      var n = h2(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        sl.has(n) ||
          (sl.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            k1(t, "link", e),
            q1(t),
            a.head.appendChild(t)));
    }
  }
  function oi(e) {
    n3.D(e), rl("dns-prefetch", e, null);
  }
  function Ci(e, t) {
    n3.C(e, t), rl("preconnect", e, t);
  }
  function di(e, t, l) {
    n3.L(e, t, l);
    var a = V4;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + h2(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + h2(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + h2(l.imageSizes) + '"]'))
        : (n += '[href="' + h2(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = B4(e);
          break;
        case "script":
          i = q4(e);
      }
      E2.has(i) ||
        ((e = t1(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        E2.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(w8(i))) ||
          (t === "script" && a.querySelector(O8(i))) ||
          ((t = a.createElement("link")),
          k1(t, "link", e),
          q1(t),
          a.head.appendChild(t)));
    }
  }
  function hi(e, t) {
    n3.m(e, t);
    var l = V4;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + h2(a) + '"][href="' + h2(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = q4(e);
      }
      if (
        !E2.has(i) &&
        ((e = t1({ rel: "modulepreload", href: e }, t)),
        E2.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(O8(i))) return;
        }
        (a = l.createElement("link")),
          k1(a, "link", e),
          q1(a),
          l.head.appendChild(a);
      }
    }
  }
  function mi(e, t, l) {
    n3.S(e, t, l);
    var a = V4;
    if (a && e) {
      var n = s4(a).hoistableStyles,
        i = B4(e);
      t = t || "default";
      var u = n.get(i);
      if (!u) {
        var r = { loading: 0, preload: null };
        if ((u = a.querySelector(w8(i)))) r.loading = 5;
        else {
          (e = t1({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = E2.get(i)) && g7(e, l);
          var d = (u = a.createElement("link"));
          q1(d),
            k1(d, "link", e),
            (d._p = new Promise(function (y, L) {
              (d.onload = y), (d.onerror = L);
            })),
            d.addEventListener("load", function () {
              r.loading |= 1;
            }),
            d.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            P5(u, t, a);
        }
        (u = { type: "stylesheet", instance: u, count: 1, state: r }),
          n.set(i, u);
      }
    }
  }
  function vi(e, t) {
    n3.X(e, t);
    var l = V4;
    if (l && e) {
      var a = s4(l).hoistableScripts,
        n = q4(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(O8(n))),
        i ||
          ((e = t1({ src: e, async: !0 }, t)),
          (t = E2.get(n)) && p7(e, t),
          (i = l.createElement("script")),
          q1(i),
          k1(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function gi(e, t) {
    n3.M(e, t);
    var l = V4;
    if (l && e) {
      var a = s4(l).hoistableScripts,
        n = q4(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(O8(n))),
        i ||
          ((e = t1({ src: e, async: !0, type: "module" }, t)),
          (t = E2.get(n)) && p7(e, t),
          (i = l.createElement("script")),
          q1(i),
          k1(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function fl(e, t, l, a) {
    var n = (n = c3.current) ? F5(n) : null;
    if (!n) throw Error(f(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = B4(l.href)),
            (l = s4(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = B4(l.href);
          var i = s4(n).hoistableStyles,
            u = i.get(e);
          if (
            (u ||
              ((n = n.ownerDocument || n),
              (u = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, u),
              (i = n.querySelector(w8(e))) &&
                !i._p &&
                ((u.instance = i), (u.state.loading = 5)),
              E2.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                E2.set(e, l),
                i || pi(n, e, l, u.state))),
            t && a === null)
          )
            throw Error(f(528, ""));
          return u;
        }
        if (t && a !== null) throw Error(f(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = q4(l)),
              (l = s4(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(f(444, e));
    }
  }
  function B4(e) {
    return 'href="' + h2(e) + '"';
  }
  function w8(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function ol(e) {
    return t1({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function pi(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        k1(t, "link", l),
        q1(t),
        e.head.appendChild(t));
  }
  function q4(e) {
    return '[src="' + h2(e) + '"]';
  }
  function O8(e) {
    return "script[async]" + e;
  }
  function Cl(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + h2(l.href) + '"]');
          if (a) return (t.instance = a), q1(a), a;
          var n = t1({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            q1(a),
            k1(a, "style", n),
            P5(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = B4(l.href);
          var i = e.querySelector(w8(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), q1(i), i;
          (a = ol(l)),
            (n = E2.get(n)) && g7(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            q1(i);
          var u = i;
          return (
            (u._p = new Promise(function (r, d) {
              (u.onload = r), (u.onerror = d);
            })),
            k1(i, "link", a),
            (t.state.loading |= 4),
            P5(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = q4(l.src)),
            (n = e.querySelector(O8(i)))
              ? ((t.instance = n), q1(n), n)
              : ((a = l),
                (n = E2.get(i)) && ((a = t1({}, l)), p7(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                q1(n),
                k1(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((a = t.instance), (t.state.loading |= 4), P5(a, l.precedence, e));
    return t.instance;
  }
  function P5(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        u = 0;
      u < a.length;
      u++
    ) {
      var r = a[u];
      if (r.dataset.precedence === t) i = r;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function g7(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function p7(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var I5 = null;
  function dl(e, t, l) {
    if (I5 === null) {
      var a = new Map(),
        n = (I5 = new Map());
      n.set(l, a);
    } else (n = I5), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[J4] ||
          i[J1] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var r = a.get(u);
        r ? r.push(i) : a.set(u, [i]);
      }
    }
    return a;
  }
  function hl(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function yi(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ml(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var D8 = null;
  function bi() {}
  function Hi(e, t, l) {
    if (D8 === null) throw Error(f(475));
    var a = D8;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var n = B4(l.href),
          i = e.querySelector(w8(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = e9.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            q1(i);
          return;
        }
        (i = e.ownerDocument || e),
          (l = ol(l)),
          (n = E2.get(n)) && g7(l, n),
          (i = i.createElement("link")),
          q1(i);
        var u = i;
        (u._p = new Promise(function (r, d) {
          (u.onload = r), (u.onerror = d);
        })),
          k1(i, "link", l),
          (t.instance = i);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (a.count++,
          (t = e9.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function xi() {
    if (D8 === null) throw Error(f(475));
    var e = D8;
    return (
      e.stylesheets && e.count === 0 && y7(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && y7(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function e9() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) y7(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var t9 = null;
  function y7(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (t9 = new Map()),
        t.forEach(Si, e),
        (t9 = null),
        e9.call(e));
  }
  function Si(e, t) {
    if (!(t.state.loading & 4)) {
      var l = t9.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), t9.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var u = n[i];
          (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") &&
            (l.set(u.dataset.precedence, u), (a = u));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (u = n.getAttribute("data-precedence")),
        (i = l.get(u) || a),
        i === a && l.set(null, n),
        l.set(u, n),
        this.count++,
        (a = e9.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var N8 = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: s1,
    _currentValue2: s1,
    _threadCount: 0,
  };
  function Ei(e, t, l, a, n, i, u, r) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = H9(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.finishedLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = H9(0)),
      (this.hiddenUpdates = H9(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function vl(e, t, l, a, n, i, u, r, d, y, L, R) {
    return (
      (e = new Ei(e, t, l, u, r, d, y, R)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = x2(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = F9()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      R6(i),
      e
    );
  }
  function gl(e) {
    return e ? ((e = p4), e) : p4;
  }
  function pl(e, t, l, a, n, i) {
    (n = gl(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = p3(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = y3(e, a, t)),
      l !== null && (I1(l, e, t), y8(l, e, t));
  }
  function yl(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function b7(e, t) {
    yl(e, t), (e = e.alternate) && yl(e, t);
  }
  function bl(e) {
    if (e.tag === 13) {
      var t = o3(e, 67108864);
      t !== null && I1(t, e, 67108864), b7(e, 67108864);
    }
  }
  var l9 = !0;
  function _i(e, t, l, a) {
    var n = q.T;
    q.T = null;
    var i = Z.p;
    try {
      (Z.p = 2), H7(e, t, l, a);
    } finally {
      (Z.p = i), (q.T = n);
    }
  }
  function ji(e, t, l, a) {
    var n = q.T;
    q.T = null;
    var i = Z.p;
    try {
      (Z.p = 8), H7(e, t, l, a);
    } finally {
      (Z.p = i), (q.T = n);
    }
  }
  function H7(e, t, l, a) {
    if (l9) {
      var n = x7(a);
      if (n === null) r7(e, t, a, a9, l), xl(e, a);
      else if (Mi(n, e, t, l, a)) a.stopPropagation();
      else if ((xl(e, a), t & 4 && -1 < Li.indexOf(e))) {
        for (; n !== null; ) {
          var i = c4(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = O3(i.pendingLanes);
                  if (u !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; u; ) {
                      var d = 1 << (31 - i2(u));
                      (r.entanglements[1] |= d), (u &= ~d);
                    }
                    B2(i), !(E1 & 6) && ((q5 = O2() + 500), T8(0));
                  }
                }
                break;
              case 13:
                (r = o3(i, 2)), r !== null && I1(r, i, 2), G5(), b7(i, 2);
            }
          if (((i = x7(a)), i === null && r7(e, t, a, a9, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else r7(e, t, a, null, l);
    }
  }
  function x7(e) {
    return (e = M9(e)), S7(e);
  }
  var a9 = null;
  function S7(e) {
    if (((a9 = null), (e = D3(e)), e !== null)) {
      var t = J(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = m1(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (a9 = e), null;
  }
  function Hl(e) {
    switch (e) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (oa()) {
          case Q7:
            return 2;
          case K7:
            return 8;
          case P8:
          case Ca:
            return 32;
          case k7:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var E7 = !1,
    j3 = null,
    L3 = null,
    M3 = null,
    U8 = new Map(),
    V8 = new Map(),
    A3 = [],
    Li =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function xl(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        j3 = null;
        break;
      case "dragenter":
      case "dragleave":
        L3 = null;
        break;
      case "mouseover":
      case "mouseout":
        M3 = null;
        break;
      case "pointerover":
      case "pointerout":
        U8.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        V8.delete(t.pointerId);
    }
  }
  function B8(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = c4(t)), t !== null && bl(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function Mi(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (j3 = B8(j3, e, t, l, a, n)), !0;
      case "dragenter":
        return (L3 = B8(L3, e, t, l, a, n)), !0;
      case "mouseover":
        return (M3 = B8(M3, e, t, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return U8.set(i, B8(U8.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), V8.set(i, B8(V8.get(i) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function Sl(e) {
    var t = D3(e.target);
    if (t !== null) {
      var l = J(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = m1(l)), t !== null)) {
            (e.blockedOn = t),
              Ha(e.priority, function () {
                if (l.tag === 13) {
                  var a = f2(),
                    n = o3(l, a);
                  n !== null && I1(n, l, a), b7(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function n9(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = x7(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (L9 = a), l.target.dispatchEvent(a), (L9 = null);
      } else return (t = c4(l)), t !== null && bl(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function El(e, t, l) {
    n9(e) && l.delete(t);
  }
  function Ai() {
    (E7 = !1),
      j3 !== null && n9(j3) && (j3 = null),
      L3 !== null && n9(L3) && (L3 = null),
      M3 !== null && n9(M3) && (M3 = null),
      U8.forEach(El),
      V8.forEach(El);
  }
  function i9(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      E7 ||
        ((E7 = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, Ai)));
  }
  var u9 = null;
  function _l(e) {
    u9 !== e &&
      ((u9 = e),
      s.unstable_scheduleCallback(s.unstable_NormalPriority, function () {
        u9 === e && (u9 = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if (S7(a || l) === null) continue;
            break;
          }
          var i = c4(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            d6(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function q8(e) {
    function t(d) {
      return i9(d, e);
    }
    j3 !== null && i9(j3, e),
      L3 !== null && i9(L3, e),
      M3 !== null && i9(M3, e),
      U8.forEach(t),
      V8.forEach(t);
    for (var l = 0; l < A3.length; l++) {
      var a = A3[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < A3.length && ((l = A3[0]), l.blockedOn === null); )
      Sl(l), l.blockedOn === null && A3.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          u = n[e2] || null;
        if (typeof i == "function") u || _l(l);
        else if (u) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (u = i[e2] || null))) r = u.formAction;
            else if (S7(n) !== null) continue;
          } else r = u.action;
          typeof r == "function" ? (l[a + 1] = r) : (l.splice(a, 3), (a -= 3)),
            _l(l);
        }
      }
  }
  function _7(e) {
    this._internalRoot = e;
  }
  (c9.prototype.render = _7.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current,
        a = f2();
      pl(l, a, e, t, null, null);
    }),
    (c9.prototype.unmount = _7.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && D4(),
            pl(e.current, 2, null, e, null, null),
            G5(),
            (t[u4] = null);
        }
      });
  function c9(e) {
    this._internalRoot = e;
  }
  c9.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = I7();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < A3.length && t !== 0 && t < A3[l].priority; l++);
      A3.splice(l, 0, e), l === 0 && Sl(e);
    }
  };
  var jl = o.version;
  if (jl !== "19.0.0") throw Error(f(527, jl, "19.0.0"));
  Z.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(f(188))
        : ((e = Object.keys(e).join(",")), Error(f(268, e)));
    return (
      (e = O(t)),
      (e = e !== null ? P(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ti = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: q,
    findFiberByHostInstance: D3,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var s9 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!s9.isDisabled && s9.supportsFiber)
      try {
        (Q4 = s9.inject(Ti)), (n2 = s9);
      } catch {}
  }
  return (
    (Y8.createRoot = function (e, t) {
      if (!h(e)) throw Error(f(299));
      var l = !1,
        a = "",
        n = Ge,
        i = Xe,
        u = Qe,
        r = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (r = t.unstable_transitionCallbacks)),
        (t = vl(e, 1, !1, null, null, l, a, n, i, u, r, null)),
        (e[u4] = t.current),
        s7(e.nodeType === 8 ? e.parentNode : e),
        new _7(t)
      );
    }),
    (Y8.hydrateRoot = function (e, t, l) {
      if (!h(e)) throw Error(f(299));
      var a = !1,
        n = "",
        i = Ge,
        u = Xe,
        r = Qe,
        d = null,
        y = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (u = l.onCaughtError),
          l.onRecoverableError !== void 0 && (r = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (d = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (y = l.formState)),
        (t = vl(e, 1, !0, t, l ?? null, a, n, i, u, r, d, y)),
        (t.context = gl(null)),
        (l = t.current),
        (a = f2()),
        (n = p3(a)),
        (n.callback = null),
        y3(l, n, a),
        (t.current.lanes = a),
        k4(t, a),
        B2(t),
        (e[u4] = t.current),
        s7(e),
        new c9(t)
      );
    }),
    (Y8.version = "19.0.0"),
    Y8
  );
}
var Nl;
function qi() {
  if (Nl) return M7.exports;
  Nl = 1;
  function s() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (o) {
        console.error(o);
      }
  }
  return s(), (M7.exports = Bi()), M7.exports;
}
var Zi = qi();
const Yi = "_firstsection_l4qyi_7",
  Gi = "_logo_l4qyi_23",
  Xi = "_nav_l4qyi_33",
  Qi = "_navul_l4qyi_49",
  Ki = "_lists_l4qyi_83",
  ki = "_listcontact_l4qyi_99",
  Ji = "_listmenu_l4qyi_125",
  $i = "_sidebar_l4qyi_133",
  Wi = "_active_l4qyi_227",
  Fi = "_imageclose_l4qyi_253",
  Pi = "_sidebarmenu_l4qyi_269",
  Ii = "_sidebarlist_l4qyi_287",
  eu = "_sidebarcontact_l4qyi_315",
  D1 = {
    firstsection: Yi,
    logo: Gi,
    nav: Xi,
    navul: Qi,
    lists: Ki,
    listcontact: ki,
    listmenu: Ji,
    sidebar: $i,
    active: Wi,
    "fade-out": "_fade-out_l4qyi_241",
    imageclose: Fi,
    sidebarmenu: Pi,
    sidebarlist: Ii,
    sidebarcontact: eu,
  };
function Ul() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("svg", {
      className: D1.logo,
      width: "160",
      height: "58",
      viewBox: "0 0 160 58",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsx("path", {
          d: "M30.8909 24.7244C30.8868 24.8261 30.8671 24.9266 30.8324 25.0222C30.7675 25.0222 30.6636 25.0222 30.5272 25.0222L30.0824 25.0418L29.6376 25.0614H29.3129C28.9852 25.0708 28.6577 25.0367 28.3388 24.96C28.0922 24.8864 27.8685 24.75 27.6894 24.564C27.4868 24.3489 27.296 24.1228 27.118 23.8866C26.8647 23.5593 26.5855 23.1961 26.277 22.7706L25.303 21.4289C24.9621 20.9576 24.6536 20.506 24.3289 20.074C24.0042 19.642 23.7704 19.2559 23.5399 18.909C23.3094 18.5621 23.1438 18.3265 23.0529 18.1759C23.0598 18.0568 23.0862 17.9396 23.1308 17.829C23.1755 17.7363 23.236 17.6521 23.3094 17.5803C23.7669 17.5212 24.2166 17.4114 24.6504 17.2531C25.0427 17.1097 25.4099 16.9042 25.7381 16.6444C26.0373 16.4029 26.2829 16.1007 26.4589 15.7575C26.6411 15.3947 26.7325 14.9925 26.7251 14.5859C26.7384 14.1588 26.6575 13.7341 26.4881 13.3423C26.3415 13.02 26.1185 12.739 25.8387 12.5242C25.5584 12.3137 25.2395 12.1613 24.9004 12.0758C24.5331 11.9827 24.1557 11.9365 23.7769 11.9384H23.3808L22.9457 11.958C22.8029 11.958 22.6633 11.9744 22.5334 11.9875C22.4035 12.0006 22.2964 12.0137 22.2087 12.0267L22.1697 12.9038C22.1697 13.1689 22.147 13.4765 22.1405 13.8299C22.134 14.1834 22.1405 14.5499 22.1405 14.9328L22.1015 20.4962C22.1015 20.5878 22.1015 20.806 22.1015 21.1507C22.1015 21.478 22.1015 21.8641 22.1015 22.2536C22.1015 22.643 22.121 23.003 22.1405 23.3303C22.1301 23.5249 22.1669 23.7192 22.2477 23.8964C22.4587 24.1091 22.9198 24.2728 23.6308 24.3938C23.6524 24.4918 23.6655 24.5914 23.6698 24.6916C23.6726 24.7385 23.6726 24.7855 23.6698 24.8324C23.6698 24.8847 23.6601 24.9436 23.6406 25.0091H23.0886C22.8386 25.0091 22.5431 25.0091 22.199 24.9895C21.8548 24.9698 21.5496 24.9698 21.2249 24.9698C20.9002 24.9698 20.608 24.9698 20.2768 24.9895C19.9456 25.0091 19.6599 25.0091 19.4099 25.0091H18.8319C18.8189 24.9436 18.8092 24.8847 18.8027 24.8324C18.7999 24.7855 18.7999 24.7385 18.8027 24.6916C18.807 24.5914 18.8201 24.4918 18.8417 24.3938C19.5398 24.2728 19.9878 24.1157 20.1859 23.916C20.2687 23.7393 20.3087 23.5453 20.3028 23.3499C20.332 23.0226 20.3515 22.6659 20.3645 22.2732C20.3775 21.8805 20.3839 21.514 20.3839 21.1703V20.506L20.4424 14.9426V14.3666C20.4424 14.095 20.4424 13.8168 20.4229 13.5289C20.4034 13.2409 20.3937 12.9823 20.3742 12.7434C20.3774 12.5985 20.3463 12.4549 20.2833 12.3246C20.1379 12.1978 19.9658 12.106 19.78 12.0562C19.5495 11.9842 19.2638 11.9155 18.9228 11.8468C18.9008 11.7489 18.8878 11.6492 18.8839 11.5489C18.8811 11.5032 18.8811 11.4573 18.8839 11.4115C18.8839 11.3559 18.8839 11.297 18.9131 11.2315H19.1988C19.3222 11.2315 19.4586 11.2315 19.6047 11.2119H19.8515C19.9449 11.2121 20.0382 11.2055 20.1307 11.1922L21.1762 11.1431L22.3223 11.081L23.4068 11.0319C23.751 11.0319 24.0562 11.0122 24.2964 11.0122C24.7951 11.0131 25.2931 11.0492 25.7868 11.1202C26.2757 11.1885 26.7479 11.3471 27.1797 11.5882C27.6059 11.8322 27.9626 12.1827 28.2154 12.606C28.5102 13.14 28.6508 13.7465 28.6213 14.3568C28.6319 14.8008 28.5507 15.2422 28.383 15.6529C28.2153 16.0636 27.9648 16.4346 27.6472 16.7425C26.9208 17.42 26.0068 17.8584 25.027 17.9992C25.1309 18.1694 25.2965 18.4181 25.5205 18.7454C25.7446 19.0726 25.9978 19.4293 26.2803 19.8188C26.5628 20.2082 26.8582 20.6173 27.1699 21.0427C27.4816 21.4682 27.7739 21.8674 28.0563 22.2372C28.3388 22.607 28.5986 22.9343 28.8291 23.219C28.9898 23.423 29.1645 23.6155 29.3518 23.795C29.5398 23.9648 29.7443 24.115 29.9623 24.2433C30.1356 24.3501 30.3339 24.4088 30.537 24.4135H30.8454C30.8641 24.4586 30.8772 24.5059 30.8844 24.5542C30.8918 24.6106 30.894 24.6676 30.8909 24.7244Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M23.8321 33.5505C23.828 33.6508 23.8149 33.7504 23.7932 33.8483C23.449 33.9171 23.1633 33.9825 22.9327 34.048C22.7466 34.0915 22.5738 34.1803 22.4295 34.3065C22.3736 34.3993 22.3433 34.5055 22.3418 34.6141C22.3223 34.7821 22.3061 34.9883 22.2931 35.2326C22.2801 35.477 22.2704 35.7453 22.2639 36.0377C22.2639 36.3322 22.2639 36.6169 22.2639 36.8951L22.2217 42.4585V43.4239C22.2217 43.8003 22.2217 44.1668 22.2217 44.517C22.2217 44.8671 22.2444 45.1715 22.2736 45.4529C22.2711 45.6228 22.3113 45.7906 22.3905 45.9405C22.5363 46.0743 22.7125 46.1698 22.9035 46.2187C23.1276 46.2842 23.3971 46.3529 23.7152 46.4183C23.737 46.5162 23.7501 46.6159 23.7542 46.7161C23.7569 46.763 23.7569 46.81 23.7542 46.8569C23.7542 46.9092 23.7445 46.9681 23.725 47.0336H23.16C22.9111 47.0336 22.6189 47.027 22.2834 47.0139C21.9587 47.0139 21.634 46.9943 21.3255 46.9943C21.0171 46.9943 20.7054 46.9943 20.3775 47.0139C20.0495 47.0336 19.7573 47.0336 19.5073 47.0336H18.9553C18.9423 46.9681 18.9326 46.9092 18.9261 46.8569C18.9234 46.81 18.9234 46.763 18.9261 46.7161C18.9302 46.6159 18.9433 46.5162 18.9651 46.4183C19.2544 46.3645 19.5406 46.2946 19.8222 46.2089C20.0092 46.1597 20.1825 46.0679 20.3287 45.9405C20.3916 45.7998 20.4216 45.6464 20.4164 45.4922C20.4359 45.2337 20.4554 44.926 20.4749 44.566C20.4943 44.2061 20.5073 43.8363 20.5138 43.4534C20.5203 43.0705 20.5138 42.7367 20.5138 42.4716L20.5528 36.9082C20.5528 36.6169 20.5528 36.3224 20.5528 36.0311C20.5528 35.7399 20.5365 35.4748 20.5236 35.2359C20.5144 35.0354 20.4949 34.8355 20.4651 34.637C20.458 34.5311 20.4245 34.4287 20.3677 34.3392C20.2223 34.2071 20.0456 34.1147 19.8547 34.0709C19.6307 34.012 19.3579 33.9498 19.043 33.8811C19.0212 33.7832 19.0082 33.6835 19.004 33.5833C19.0012 33.5375 19.0012 33.4916 19.004 33.4458C19.004 33.3902 19.004 33.3313 19.0332 33.2658H19.5852C19.8352 33.2658 20.1307 33.2658 20.4651 33.2855C20.7995 33.3051 21.1145 33.3051 21.4392 33.3051C21.7639 33.3051 22.0593 33.3051 22.3873 33.2855C22.7152 33.2658 23.0074 33.2658 23.2574 33.2658H23.8094C23.8094 33.3313 23.8321 33.3902 23.8386 33.4458C23.8381 33.4808 23.8359 33.5157 23.8321 33.5505ZM30.7837 46.7063C30.7864 46.7532 30.7864 46.8002 30.7837 46.847C30.7837 46.8994 30.774 46.9583 30.7545 47.0238H30.4298L29.9947 47.0434L29.5207 47.0663H29.0888C28.7711 47.0748 28.4541 47.0305 28.1505 46.9354C27.9495 46.8744 27.7643 46.7693 27.6083 46.6278C27.4632 46.4816 27.2468 46.2329 26.9589 45.8816C26.6764 45.5282 26.3615 45.1289 26.0205 44.6773C25.6796 44.2257 25.3225 43.7512 24.9556 43.2537C24.5887 42.7563 24.2445 42.2883 23.9263 41.8498L23.1081 40.7077C22.8776 40.3804 22.7217 40.1579 22.6438 40.0532L26.1796 35.9722C26.4686 35.645 26.7219 35.3177 26.9394 35.0461C27.0993 34.8771 27.2114 34.6681 27.2641 34.4407C27.2639 34.3486 27.2353 34.2589 27.1824 34.1839C27.1295 34.1089 27.0548 34.0522 26.9686 34.0218C26.7559 33.9251 26.5288 33.8643 26.2965 33.8418C26.2715 33.7445 26.2584 33.6445 26.2576 33.544C26.2568 33.4337 26.2699 33.3237 26.2965 33.2167H26.9881H27.3323C27.4838 33.2167 27.6494 33.2167 27.8291 33.2167H28.3713H28.8648C29.1289 33.2167 29.3821 33.2102 29.6246 33.1971C29.8681 33.1971 30.0629 33.1775 30.2058 33.1775H30.6603C30.6773 33.2153 30.6903 33.2548 30.6993 33.2953C30.7139 33.3542 30.7215 33.4146 30.722 33.4753C30.7213 33.5392 30.7136 33.6028 30.6993 33.6651C30.6911 33.7089 30.678 33.7518 30.6603 33.7927C30.3973 33.8483 30.1798 33.8974 30.011 33.9432C29.8156 34.0014 29.6312 34.0921 29.4655 34.2116C29.2234 34.3909 28.9964 34.5902 28.7869 34.8072C28.5206 35.0756 28.1667 35.4617 27.7187 35.9232L24.4231 39.5983C24.5042 39.703 24.6471 39.9026 24.8582 40.1939C25.0692 40.4851 25.3225 40.8484 25.6179 41.2313C25.9134 41.6142 26.2348 42.056 26.5758 42.5141C26.9167 42.9723 27.2576 43.4174 27.5953 43.8461C27.933 44.2748 28.2447 44.674 28.5434 45.0308C28.8421 45.3875 29.0856 45.6689 29.2837 45.8685C29.4472 46.0318 29.6371 46.1657 29.8454 46.2645C30.0636 46.3721 30.3037 46.427 30.5467 46.4249H30.7448C30.7656 46.5174 30.7786 46.6116 30.7837 46.7063Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M32.2675 28.9002H17.4325V29.4173H32.2675V28.9002Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M24.9166 58L0 43.4992V14.5008L24.9166 0L49.8364 14.5008V43.4992L24.9166 58ZM2.21762 42.2163L24.9166 55.4245L47.6188 42.2163V15.7902L24.9166 2.5788L2.21762 15.7902V42.2163Z",
          fill: "#B8824F",
        }),
        c.jsx("path", {
          d: "M67.4021 27.2541C67.4055 27.3086 67.4055 27.3632 67.4021 27.4177C67.3944 27.4656 67.3825 27.5127 67.3664 27.5584L66.717 27.5748H65.9702C65.75 27.5845 65.5299 27.5535 65.3208 27.4832C65.1417 27.409 64.9801 27.2975 64.8468 27.1559C64.7846 27.0953 64.73 27.0271 64.6844 26.953C64.6098 26.8385 64.5221 26.6977 64.4214 26.5276L64.0968 25.9712C63.9755 25.7683 63.8554 25.5622 63.7364 25.3527C63.4571 24.8618 63.1454 24.3153 62.8013 23.7164C62.8021 23.6151 62.8263 23.5153 62.872 23.425C62.9176 23.3347 62.9834 23.2564 63.0642 23.1961C63.2979 23.1429 63.5254 23.0651 63.7428 22.9637C63.9427 22.8769 64.127 22.7574 64.2883 22.6103C64.4301 22.463 64.5406 22.2882 64.613 22.0965C64.7018 21.8695 64.7448 21.627 64.7396 21.3831C64.7531 21.187 64.7247 20.9904 64.6564 20.8063C64.588 20.6223 64.4813 20.4552 64.3435 20.3162C64.2056 20.1773 64.0398 20.0698 63.8572 20.0009C63.6746 19.932 63.4795 19.9034 63.285 19.9169C63.2363 19.9169 63.1649 19.9169 63.0642 19.9169H62.7558C62.6519 19.9169 62.5545 19.9169 62.4571 19.9366H62.2525C62.2525 20.0904 62.2525 20.2638 62.2525 20.4078C62.2525 20.5518 62.2525 20.6991 62.2525 20.8693V21.3536L62.2168 25.0942C62.2168 25.248 62.2168 25.4018 62.2168 25.5589C62.2168 25.716 62.2168 25.8665 62.2428 26.0072C62.2514 26.1389 62.2731 26.2694 62.3077 26.3967C62.3304 26.4953 62.3812 26.5852 62.4538 26.6552C62.5147 26.719 62.5822 26.776 62.6551 26.8254C62.7664 26.8851 62.8896 26.9187 63.0155 26.9235C63.0336 26.9675 63.0456 27.0138 63.0513 27.061C63.0686 27.1694 63.0686 27.2799 63.0513 27.3883C63.0452 27.4365 63.0332 27.4837 63.0155 27.529H62.6909C62.4766 27.529 62.2363 27.529 61.9765 27.529C61.7168 27.529 61.5057 27.529 61.3466 27.529C61.1875 27.529 60.9635 27.529 60.7265 27.529C60.4895 27.529 60.2719 27.529 60.0771 27.529H59.5966C59.579 27.4837 59.567 27.4365 59.5609 27.3883C59.5435 27.2799 59.5435 27.1694 59.5609 27.061C59.5666 27.0138 59.5786 26.9675 59.5966 26.9235C59.8519 26.9173 60.0973 26.8225 60.2914 26.6552C60.3568 26.5808 60.4046 26.4924 60.431 26.3967C60.4678 26.2696 60.4917 26.1391 60.5025 26.0072C60.5025 25.8665 60.5219 25.716 60.5252 25.5589C60.5284 25.4018 60.5252 25.2316 60.5252 25.0942L60.5512 21.3896C60.5512 21.082 60.5512 20.794 60.5512 20.5289C60.5617 20.3174 60.4934 20.1096 60.3596 19.9464C60.2835 19.8757 60.1956 19.8192 60.0998 19.7795C59.9685 19.7247 59.8293 19.6916 59.6875 19.6813C59.6698 19.6359 59.6568 19.5887 59.6485 19.5406C59.6451 19.4861 59.6451 19.4315 59.6485 19.377C59.6453 19.2735 59.6652 19.1705 59.707 19.0759H60.3563L61.233 19.053L62.2493 19.0268L63.2233 19.0039H63.9279C64.2709 19.0015 64.6129 19.0389 64.9474 19.1152C65.2507 19.1793 65.5386 19.3027 65.7949 19.4784C66.0393 19.6449 66.2389 19.8697 66.3761 20.1329C66.53 20.4445 66.6048 20.7897 66.5936 21.1376C66.5952 21.4152 66.5445 21.6906 66.4443 21.9492C66.3453 22.1964 66.2047 22.4245 66.0287 22.6234C65.8491 22.8231 65.6385 22.9922 65.4053 23.1241C65.1641 23.2667 64.9054 23.3767 64.6357 23.4513C64.9604 24.0077 65.2624 24.5149 65.5351 24.9665L65.8436 25.5262L66.1683 26.053C66.2689 26.2167 66.3566 26.3541 66.4345 26.4654C66.4824 26.5456 66.5402 26.6192 66.6066 26.6846C66.6786 26.7637 66.7658 26.8271 66.863 26.871C66.9601 26.9149 67.0651 26.9383 67.1716 26.9399H67.3534C67.3699 26.9844 67.3819 27.0304 67.3891 27.0774C67.3974 27.1359 67.4017 27.1949 67.4021 27.2541Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M76.5323 23.1143C76.5375 23.7414 76.4148 24.3629 76.1719 24.9404C75.9439 25.4896 75.6132 25.9896 75.1979 26.413C74.7801 26.8345 74.2834 27.1682 73.7368 27.3948C73.1649 27.6304 72.5525 27.7494 71.9347 27.745C71.3785 27.7547 70.8261 27.65 70.3113 27.4373C69.8501 27.2413 69.436 26.9478 69.097 26.5767C68.758 26.1975 68.5005 25.7518 68.3404 25.2676C68.1638 24.7227 68.0772 24.1522 68.0839 23.579C68.0755 22.9331 68.1959 22.2921 68.4379 21.694C68.6586 21.1456 68.9881 20.6485 69.4063 20.2332C69.8245 19.8179 70.3225 19.4931 70.8698 19.2788C71.4442 19.0546 72.0559 18.9435 72.6718 18.9515C73.2276 18.9433 73.7795 19.0468 74.2952 19.2559C74.758 19.446 75.1729 19.7378 75.5096 20.11C75.8469 20.4904 76.1042 20.9357 76.2661 21.4191C76.4465 21.9656 76.5364 22.5383 76.5323 23.1143ZM74.7401 23.2452C74.7415 22.8284 74.6869 22.4134 74.5777 22.0114C74.4774 21.6314 74.315 21.2708 74.0972 20.9445C73.8901 20.6282 73.6149 20.3631 73.2919 20.1689C72.9488 19.9659 72.5566 19.8628 72.1588 19.8711C71.9226 19.8757 71.688 19.9109 71.4607 19.9759C71.2542 20.0242 71.0561 20.1037 70.873 20.2115C70.5633 20.5955 70.3197 21.0291 70.1522 21.4943C69.9399 22.1261 69.842 22.7912 69.8632 23.4579C69.8622 23.8785 69.9146 24.2975 70.0191 24.7047C70.1157 25.0891 70.2783 25.4535 70.4996 25.7814C70.7145 26.0778 70.9889 26.3253 71.3049 26.5079C71.6474 26.7088 72.0386 26.8096 72.4348 26.7992C72.6719 26.7956 72.9076 26.7615 73.1361 26.6977C73.3448 26.6498 73.5451 26.5704 73.7303 26.4621C73.881 26.2847 74.0158 26.0942 74.1329 25.8927C74.2662 25.6708 74.3751 25.4348 74.4576 25.1891C74.5533 24.9058 74.624 24.6145 74.6686 24.3186C74.721 23.96 74.7449 23.5978 74.7401 23.2353V23.2452Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M86.286 23.1143C86.2911 23.7414 86.1684 24.3629 85.9256 24.9404C85.6975 25.4897 85.3669 25.9896 84.9515 26.413C84.5343 26.8337 84.0389 27.1673 83.4936 27.3948C82.9216 27.6297 82.3093 27.7487 81.6916 27.745C81.1354 27.7546 80.583 27.6499 80.0682 27.4373C79.608 27.2412 79.1949 26.9477 78.8571 26.5767C78.5171 26.1983 78.2594 25.7524 78.1006 25.2676C77.9228 24.7229 77.8351 24.1524 77.8408 23.579C77.834 22.9332 77.9543 22.2925 78.1947 21.694C78.4155 21.1451 78.7454 20.6477 79.1643 20.2323C79.5831 19.8169 80.0819 19.4924 80.6299 19.2788C81.2041 19.0541 81.816 18.943 82.4319 18.9515C82.9877 18.9436 83.5396 19.047 84.0554 19.2559C84.5172 19.446 84.931 19.7378 85.2664 20.11C85.6048 20.4902 85.8632 20.9355 86.0262 21.4191C86.2043 21.966 86.2921 22.5387 86.286 23.1143ZM84.4969 23.2452C84.4967 22.8285 84.4422 22.4137 84.3346 22.0114C84.2315 21.6324 84.0693 21.2722 83.854 20.9445C83.6462 20.6289 83.3711 20.364 83.0488 20.1689C82.7044 19.9662 82.3112 19.8632 81.9124 19.8711C81.6773 19.8755 81.4437 19.9107 81.2176 19.9759C81.0101 20.0243 80.8109 20.1037 80.6266 20.2115C80.3169 20.5955 80.0733 21.0291 79.9058 21.4943C79.6935 22.1261 79.5956 22.7912 79.6169 23.4579C79.6153 23.8787 79.6688 24.298 79.776 24.7047C79.8712 25.0896 80.0339 25.4543 80.2565 25.7814C80.4705 26.0775 80.7437 26.325 81.0585 26.5079C81.401 26.7088 81.7922 26.8096 82.1884 26.7992C82.4266 26.7954 82.6633 26.7613 82.893 26.6977C83.1017 26.6498 83.302 26.5704 83.4871 26.4621C83.6368 26.2839 83.7715 26.0934 83.8898 25.8927C84.0218 25.6701 84.1306 25.4343 84.2144 25.1891C84.3087 24.9053 84.3793 24.6141 84.4255 24.3186C84.4779 23.96 84.5018 23.5978 84.4969 23.2353V23.2452Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M93.4713 20.8987C93.4239 20.9153 93.3749 20.9274 93.3252 20.9347C93.269 20.9381 93.2126 20.9381 93.1564 20.9347C93.059 20.9395 92.9617 20.9239 92.8707 20.8889C92.8407 20.7193 92.7837 20.5558 92.7018 20.4046C92.6389 20.2912 92.5455 20.1982 92.4323 20.1362C92.3089 20.0767 92.1758 20.0401 92.0395 20.0282C91.8604 20.0099 91.6805 20.0012 91.5005 20.002H91.3446C91.2927 20.005 91.2407 20.005 91.1888 20.002C91.1283 20.0071 91.0674 20.0071 91.0069 20.002C91.0069 20.1231 91.0069 20.2573 91.0069 20.4013C91.0069 20.5453 91.0069 20.6565 91.0069 20.8071V21.2718L90.9712 25.0745C90.9712 25.2283 90.9712 25.3822 90.9712 25.5425C90.9756 25.6937 90.9886 25.8445 91.0102 25.9941C91.0271 26.1278 91.0531 26.2601 91.0881 26.3901C91.1084 26.489 91.1583 26.5792 91.231 26.6486C91.4259 26.8167 91.6726 26.9115 91.9291 26.917C91.9441 26.9619 91.956 27.0079 91.9648 27.0544C91.9778 27.1631 91.9778 27.273 91.9648 27.3817C91.9556 27.4293 91.9437 27.4763 91.9291 27.5224H91.6044C91.3868 27.5224 91.1758 27.5224 90.955 27.5224C90.7342 27.5224 90.4744 27.5224 90.1368 27.5224C89.7991 27.5224 89.5264 27.5224 89.2958 27.5224C89.0653 27.5224 88.8478 27.5224 88.6465 27.5224H88.3575C88.3414 27.4767 88.3294 27.4296 88.3218 27.3817C88.3088 27.273 88.3088 27.1631 88.3218 27.0544C88.329 27.0075 88.341 26.9615 88.3575 26.917C88.6139 26.9115 88.8606 26.8167 89.0556 26.6486C89.1947 26.472 89.2692 26.2524 89.2666 26.0269C89.2861 25.7323 89.2958 25.4182 89.2958 25.0876L89.3186 21.2718C89.3186 21.1114 89.3186 20.9445 89.3186 20.8071C89.3186 20.6696 89.3186 20.5224 89.3186 20.4013C89.3186 20.2802 89.3186 20.1231 89.3186 20.002C89.2581 20.0071 89.1972 20.0071 89.1367 20.002C89.0837 20.005 89.0306 20.005 88.9776 20.002H88.825C88.645 20.0012 88.4651 20.0099 88.2861 20.0282C88.1487 20.0402 88.0146 20.0768 87.8899 20.1362C87.7723 20.1966 87.6743 20.2898 87.6075 20.4046C87.5184 20.5543 87.4548 20.718 87.4191 20.8889C87.3281 20.9239 87.2308 20.9395 87.1334 20.9347C87.0772 20.9381 87.0208 20.9381 86.9646 20.9347C86.9148 20.9278 86.8658 20.9157 86.8185 20.8987L86.8672 19.0923H87.1432H87.4938H87.8477H92.507H92.8609H93.2116H93.4876L93.4713 20.8987Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M102.602 19.4064C102.605 19.4609 102.605 19.5156 102.602 19.5701C102.594 19.618 102.582 19.6652 102.566 19.7108C102.31 19.7169 102.064 19.8104 101.868 19.9759C101.733 20.1383 101.664 20.3467 101.676 20.5584C101.676 20.8235 101.676 21.1114 101.676 21.4191L101.628 25.1236C101.628 25.2774 101.628 25.4312 101.628 25.5883C101.628 25.7454 101.628 25.896 101.65 26.0367C101.662 26.1683 101.684 26.2986 101.718 26.4261C101.74 26.5245 101.79 26.6143 101.861 26.6846C101.938 26.7572 102.027 26.8149 102.124 26.8548C102.259 26.9091 102.402 26.9422 102.546 26.953C102.564 26.997 102.576 27.0432 102.582 27.0904C102.599 27.1988 102.599 27.3093 102.582 27.4177C102.576 27.4659 102.564 27.5132 102.546 27.5584H102.115C101.897 27.5584 101.66 27.5584 101.4 27.5584C101.14 27.5584 100.929 27.5584 100.767 27.5584C100.605 27.5584 100.387 27.5584 100.15 27.5584C99.9132 27.5584 99.6956 27.5584 99.5008 27.5584H99.0203C99.0041 27.5127 98.9922 27.4656 98.9845 27.4177C98.9672 27.3093 98.9672 27.1988 98.9845 27.0904C98.9918 27.0435 99.0037 26.9975 99.0203 26.953C99.2766 26.9467 99.523 26.852 99.7183 26.6846C99.7832 26.6104 99.8299 26.5218 99.8547 26.4261C99.8926 26.2992 99.9176 26.1687 99.9294 26.0367C99.9294 25.896 99.9489 25.7454 99.9521 25.5883C99.9554 25.4312 99.9521 25.2611 99.9521 25.1236V23.6575H96.8026V25.1236C96.8026 25.2774 96.8026 25.4312 96.8026 25.5883C96.8026 25.7454 96.8026 25.896 96.8286 26.0367C96.8372 26.1684 96.859 26.2988 96.8935 26.4261C96.9165 26.524 96.966 26.6135 97.0364 26.6846C97.1136 26.7579 97.204 26.8157 97.3026 26.8548C97.4364 26.9092 97.5777 26.9423 97.7215 26.953C97.7395 26.997 97.7515 27.0432 97.7572 27.0904C97.7746 27.1988 97.7746 27.3093 97.7572 27.4177C97.7511 27.4659 97.7391 27.5132 97.7215 27.5584H97.2897C97.0754 27.5584 96.8351 27.5584 96.5754 27.5584C96.3156 27.5584 96.1046 27.5584 95.9455 27.5584C95.7864 27.5584 95.5623 27.5584 95.3253 27.5584C95.0883 27.5584 94.8707 27.5584 94.6759 27.5584H94.1921C94.1749 27.5128 94.1619 27.4657 94.1532 27.4177C94.1402 27.309 94.1402 27.1991 94.1532 27.0904C94.1614 27.0434 94.1744 26.9973 94.1921 26.953C94.4475 26.9468 94.6929 26.852 94.887 26.6846C94.9524 26.6103 95.0001 26.5219 95.0266 26.4261C95.0634 26.2991 95.0873 26.1686 95.098 26.0367C95.098 25.896 95.1175 25.7454 95.1207 25.5883C95.124 25.4312 95.1207 25.2611 95.1207 25.1236L95.1565 21.4191C95.1565 21.1114 95.1565 20.8235 95.1565 20.5584C95.1661 20.3465 95.0966 20.1386 94.9616 19.9759C94.8854 19.9037 94.7961 19.8471 94.6987 19.8089C94.5638 19.7546 94.4214 19.7215 94.2766 19.7108C94.2601 19.6652 94.2481 19.618 94.2408 19.5701C94.2375 19.5156 94.2375 19.4609 94.2408 19.4064C94.2376 19.3519 94.2376 19.2973 94.2408 19.2428C94.2481 19.1959 94.26 19.1498 94.2766 19.1053H94.7116C94.9259 19.1053 95.1597 19.1053 95.4065 19.1053H96.0201H96.6208C96.8448 19.1053 97.0559 19.1053 97.2702 19.1053H97.7312C97.7492 19.1493 97.7613 19.1956 97.767 19.2428C97.7718 19.2972 97.7718 19.352 97.767 19.4064C97.772 19.4608 97.772 19.5156 97.767 19.5701C97.7612 19.6183 97.7492 19.6657 97.7312 19.7108C97.4756 19.7174 97.2296 19.8108 97.0332 19.9759C96.8994 20.1391 96.831 20.3469 96.8416 20.5584C96.8416 20.8235 96.8416 21.1114 96.8416 21.4191V22.751H99.9878V21.4191C99.9878 21.1114 99.9878 20.8235 99.9878 20.5584C99.9981 20.3396 99.9222 20.1255 99.7768 19.9628C99.7 19.8913 99.6109 19.8347 99.5138 19.7959C99.3789 19.7416 99.2365 19.7084 99.0917 19.6977C99.0737 19.6526 99.0617 19.6052 99.056 19.557C99.0509 19.5025 99.0509 19.4478 99.056 19.3933C99.0511 19.3389 99.0511 19.2841 99.056 19.2297C99.0617 19.1825 99.0737 19.1362 99.0917 19.0923H99.5235C99.7411 19.0923 99.9716 19.0923 100.222 19.0923H100.835H101.436C101.66 19.0923 101.871 19.0923 102.085 19.0923H102.566C102.582 19.1367 102.594 19.1828 102.602 19.2297C102.605 19.2885 102.605 19.3476 102.602 19.4064Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M109.579 27.5584H109.147H108.618H108.073H105.199C104.965 27.5584 104.725 27.5584 104.478 27.5584C104.232 27.5584 104.007 27.5584 103.829 27.5584H103.576C103.558 27.5128 103.545 27.4657 103.537 27.4177C103.524 27.309 103.524 27.1991 103.537 27.0904C103.545 27.0434 103.558 26.9973 103.576 26.953C103.831 26.9468 104.076 26.852 104.27 26.6846C104.336 26.6103 104.384 26.5219 104.41 26.4261C104.447 26.2991 104.471 26.1686 104.482 26.0367C104.482 25.896 104.501 25.7454 104.504 25.5883C104.508 25.4312 104.504 25.2611 104.504 25.1236L104.55 21.4191C104.55 21.2652 104.55 21.1114 104.55 20.9576C104.55 20.8038 104.53 20.6598 104.517 20.5289C104.503 20.4122 104.482 20.2964 104.456 20.182C104.442 20.1057 104.408 20.0345 104.358 19.9759C104.282 19.9037 104.193 19.8471 104.095 19.8089C103.961 19.755 103.82 19.7219 103.676 19.7108C103.659 19.6653 103.646 19.6182 103.637 19.57C103.634 19.5156 103.634 19.4609 103.637 19.4064C103.634 19.3519 103.634 19.2973 103.637 19.2428C103.646 19.1957 103.659 19.1497 103.676 19.1053H104.108C104.245 19.1053 104.433 19.1053 104.647 19.1053H105.296H108.771H109.18H109.54H109.774L109.81 20.9118C109.763 20.9284 109.715 20.9405 109.667 20.9478H109.498C109.4 20.9525 109.301 20.9369 109.209 20.902C109.173 20.7318 109.11 20.5683 109.024 20.4176C108.951 20.3 108.849 20.2031 108.728 20.1362C108.597 20.0693 108.453 20.0283 108.306 20.0151C108.147 20.0151 107.962 19.9922 107.754 19.9922H107.459H107.06H106.624C106.482 19.9922 106.352 19.9922 106.241 19.9922C106.251 20.1459 106.251 20.3 106.241 20.4536C106.241 20.6304 106.241 20.8496 106.241 21.1082V22.7183C106.328 22.7183 106.416 22.7183 106.504 22.7183H107.056C107.219 22.7193 107.382 22.7094 107.543 22.6888C107.682 22.6721 107.816 22.6264 107.936 22.5546C108.05 22.4822 108.147 22.3849 108.219 22.2699C108.303 22.1243 108.361 21.9647 108.391 21.7987C108.438 21.7817 108.487 21.7696 108.537 21.7627C108.592 21.7594 108.647 21.7594 108.702 21.7627C108.801 21.7566 108.9 21.7734 108.991 21.8118V22.0179C108.991 22.1063 108.991 22.2372 108.991 22.4041C108.991 22.571 108.972 22.823 108.972 23.1437C108.972 23.4644 108.972 23.7491 108.991 23.9422C109.011 24.1353 108.991 24.2695 108.991 24.3186V24.5444C108.946 24.5629 108.898 24.575 108.849 24.5804C108.792 24.5851 108.736 24.5851 108.68 24.5804C108.581 24.5864 108.482 24.5696 108.391 24.5313C108.364 24.3626 108.305 24.2005 108.219 24.0535C108.147 23.9424 108.05 23.8504 107.936 23.7851C107.813 23.7235 107.68 23.6826 107.543 23.6641C107.382 23.6435 107.219 23.6336 107.056 23.6346H106.644C106.495 23.6346 106.358 23.6346 106.228 23.6542V25.3233C106.228 25.4836 106.228 25.6505 106.228 25.7847C106.231 25.916 106.24 26.0472 106.258 26.1774C106.259 26.2592 106.289 26.338 106.342 26.3999C106.405 26.4528 106.479 26.4888 106.56 26.5047C106.674 26.5348 106.79 26.5567 106.907 26.5701C107.034 26.5701 107.163 26.5996 107.293 26.6061C107.423 26.6127 107.527 26.6061 107.618 26.6061C107.842 26.6061 108.04 26.6061 108.215 26.5897C108.373 26.5798 108.527 26.5398 108.67 26.4719C108.807 26.4057 108.927 26.3069 109.017 26.1839C109.138 26.0168 109.233 25.8326 109.3 25.6374C109.349 25.6186 109.4 25.6065 109.453 25.6014C109.51 25.5967 109.567 25.5967 109.625 25.6014C109.723 25.5954 109.822 25.6122 109.914 25.6505L109.579 27.5584Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M114.372 23.7197C114.372 23.9135 114.34 24.106 114.277 24.2891C114.212 24.3299 114.143 24.366 114.073 24.3971C113.969 24.4462 113.849 24.492 113.712 24.5411C113.574 24.591 113.433 24.6336 113.29 24.6687C113.161 24.7033 113.028 24.722 112.894 24.7244H110.553C110.537 24.6735 110.529 24.6206 110.527 24.5673V24.3971C110.526 24.203 110.559 24.0102 110.625 23.8277C110.689 23.7856 110.758 23.7495 110.829 23.7197C110.933 23.6695 111.053 23.6204 111.19 23.5724C111.326 23.5244 111.466 23.4819 111.608 23.4448C111.739 23.4113 111.873 23.3937 112.008 23.3924H114.349C114.364 23.4434 114.371 23.4963 114.372 23.5495V23.7197Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M118.554 19.4064C118.559 19.4608 118.559 19.5156 118.554 19.5701C118.548 19.6183 118.536 19.6657 118.518 19.7108C118.263 19.7174 118.018 19.8109 117.823 19.9759C117.688 20.1386 117.618 20.3465 117.628 20.5584C117.628 20.8235 117.628 21.1114 117.628 21.4191L117.592 25.1236C117.592 25.2774 117.592 25.4313 117.592 25.5883C117.592 25.7454 117.592 25.896 117.615 26.0367C117.625 26.1682 117.647 26.2985 117.68 26.4261C117.703 26.5248 117.754 26.6146 117.826 26.6846C117.902 26.7579 117.992 26.8157 118.089 26.8548C118.224 26.9091 118.366 26.9422 118.511 26.953C118.526 26.9979 118.538 27.0439 118.547 27.0904C118.56 27.1991 118.56 27.309 118.547 27.4177C118.538 27.4653 118.526 27.5123 118.511 27.5584H118.076C117.862 27.5584 117.622 27.5584 117.362 27.5584C117.102 27.5584 116.891 27.5584 116.732 27.5584C116.573 27.5584 116.349 27.5584 116.115 27.5584C115.881 27.5584 115.657 27.5584 115.466 27.5584H114.985C114.968 27.5132 114.956 27.4659 114.949 27.4177C114.932 27.3093 114.932 27.1988 114.949 27.0904C114.955 27.0432 114.967 26.997 114.985 26.953C115.241 26.9468 115.486 26.852 115.68 26.6846C115.747 26.6114 115.795 26.5226 115.82 26.4261C115.856 26.2991 115.88 26.1686 115.891 26.0367C115.891 25.896 115.911 25.7454 115.917 25.5883C115.924 25.4313 115.917 25.2611 115.917 25.1236L115.956 21.4191C115.956 21.1114 115.956 20.8235 115.956 20.5584C115.967 20.3469 115.898 20.1391 115.764 19.9759C115.687 19.9037 115.597 19.8471 115.498 19.809C115.364 19.7546 115.223 19.7215 115.079 19.7108C115.061 19.6657 115.049 19.6183 115.044 19.5701C115.039 19.5156 115.039 19.4608 115.044 19.4064C115.039 19.352 115.039 19.2972 115.044 19.2428C115.049 19.1956 115.061 19.1493 115.079 19.1053H115.511C115.725 19.1053 115.959 19.1053 116.209 19.1053H116.82H117.42C117.644 19.1053 117.859 19.1053 118.07 19.1053H118.511C118.529 19.1493 118.541 19.1956 118.547 19.2428C118.554 19.297 118.556 19.3518 118.554 19.4064ZM123.057 19.3835C123.06 19.4446 123.06 19.5057 123.057 19.5668C123.05 19.6159 123.038 19.6642 123.021 19.7108C122.832 19.701 122.643 19.7254 122.463 19.7828C122.296 19.8391 122.141 19.9256 122.005 20.038C121.858 20.1575 121.723 20.2912 121.602 20.4373C121.476 20.5911 121.343 20.7645 121.206 20.9347L119.485 23.1732L120.589 24.7473L121.024 25.3527C121.167 25.5556 121.3 25.7421 121.427 25.909L121.752 26.3476C121.815 26.4342 121.886 26.5152 121.963 26.5897C122.088 26.725 122.246 26.8263 122.421 26.8843C122.6 26.9337 122.786 26.9568 122.973 26.953C122.991 26.9991 123.003 27.0476 123.008 27.097C123.011 27.1537 123.011 27.2105 123.008 27.2672C123.013 27.3667 122.997 27.4661 122.96 27.5584L122.576 27.5748H122.252H121.927H121.563C121.271 27.5833 120.979 27.5502 120.696 27.4766C120.492 27.4148 120.307 27.3023 120.157 27.1494C120.067 27.0533 119.982 26.9517 119.904 26.845C119.8 26.7076 119.687 26.5505 119.56 26.3672L119.164 25.7814C119.024 25.572 118.888 25.3625 118.752 25.1498C118.429 24.6589 118.084 24.1222 117.716 23.5397L119.485 21.2129C119.557 21.1082 119.635 20.9969 119.719 20.8856C119.804 20.7744 119.881 20.6631 119.953 20.5584C120.021 20.4637 120.081 20.3642 120.135 20.2606C120.175 20.193 120.2 20.1168 120.206 20.038C120.209 19.9815 120.192 19.9258 120.157 19.8809C120.125 19.8397 120.084 19.8062 120.037 19.7828C119.986 19.7579 119.931 19.7392 119.875 19.7271C119.818 19.717 119.761 19.7115 119.703 19.7108C119.675 19.6163 119.663 19.5179 119.667 19.4195C119.659 19.3084 119.675 19.1969 119.713 19.0923H120.037H120.3H120.722C120.875 19.0923 121.021 19.0923 121.167 19.0923H121.817C121.927 19.0923 122.041 19.0923 122.141 19.0923H122.466H122.674H123.034C123.057 19.1876 123.064 19.2858 123.057 19.3835Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M131.973 19.4064C131.978 19.4608 131.978 19.5156 131.973 19.57C131.967 19.6183 131.955 19.6656 131.937 19.7108C131.682 19.7174 131.436 19.8108 131.239 19.9759C131.107 20.1399 131.039 20.3471 131.048 20.5584C131.048 20.8234 131.048 21.1114 131.048 21.4191L131.009 25.1236C131.009 25.2774 131.009 25.4312 131.009 25.5883C131.009 25.7454 131.009 25.896 131.035 26.0367C131.045 26.1682 131.067 26.2985 131.099 26.4261C131.122 26.524 131.172 26.6135 131.242 26.6846C131.32 26.7579 131.41 26.8157 131.509 26.8548C131.642 26.9092 131.784 26.9423 131.927 26.953C131.945 26.9973 131.958 27.0434 131.966 27.0904C131.979 27.1991 131.979 27.309 131.966 27.4177C131.958 27.4657 131.945 27.5128 131.927 27.5584H131.496C131.281 27.5584 131.041 27.5584 130.781 27.5584C130.522 27.5584 130.31 27.5584 130.151 27.5584C129.992 27.5584 129.768 27.5584 129.531 27.5584C129.294 27.5584 129.077 27.5584 128.882 27.5584H128.382C128.364 27.5132 128.352 27.4659 128.346 27.4177C128.329 27.3093 128.329 27.1988 128.346 27.0904C128.352 27.0432 128.364 26.997 128.382 26.953C128.637 26.9468 128.883 26.852 129.077 26.6846C129.142 26.6103 129.19 26.5219 129.216 26.4261C129.253 26.2991 129.277 26.1686 129.288 26.0367C129.288 25.896 129.307 25.7454 129.31 25.5883C129.314 25.4312 129.31 25.2611 129.31 25.1236V23.6575H126.164V25.1236C126.164 25.2774 126.164 25.4312 126.164 25.5883C126.164 25.7454 126.164 25.896 126.187 26.0367C126.199 26.1679 126.221 26.2981 126.252 26.4261C126.275 26.5248 126.325 26.6146 126.398 26.6846C126.475 26.7572 126.564 26.8149 126.661 26.8548C126.796 26.9091 126.938 26.9422 127.083 26.953C127.1 26.9975 127.112 27.0435 127.119 27.0904C127.132 27.1991 127.132 27.309 127.119 27.4177C127.111 27.4656 127.099 27.5127 127.083 27.5584H126.661C126.447 27.5584 126.21 27.5584 125.947 27.5584C125.684 27.5584 125.476 27.5584 125.317 27.5584C125.158 27.5584 124.934 27.5584 124.7 27.5584C124.466 27.5584 124.242 27.5584 124.05 27.5584H123.57C123.552 27.5132 123.54 27.4659 123.534 27.4177C123.517 27.3093 123.517 27.1988 123.534 27.0904C123.54 27.0432 123.552 26.997 123.57 26.953C123.826 26.9467 124.073 26.852 124.268 26.6846C124.333 26.6104 124.38 26.5218 124.404 26.4261C124.443 26.2994 124.467 26.1688 124.476 26.0367C124.476 25.896 124.495 25.7454 124.502 25.5883C124.508 25.4312 124.502 25.2611 124.502 25.1236L124.538 21.4191C124.538 21.1114 124.538 20.8234 124.538 20.5584C124.548 20.3469 124.48 20.1391 124.346 19.9759C124.269 19.9037 124.178 19.8471 124.08 19.8089C123.946 19.7543 123.805 19.7211 123.661 19.7108C123.643 19.6656 123.631 19.6183 123.625 19.57C123.62 19.5156 123.62 19.4608 123.625 19.4064C123.62 19.352 123.62 19.2972 123.625 19.2428C123.631 19.1956 123.643 19.1493 123.661 19.1053H124.093C124.31 19.1053 124.541 19.1053 124.791 19.1053H125.401H126.002C126.226 19.1053 126.44 19.1053 126.651 19.1053H127.132C127.15 19.1493 127.162 19.1956 127.168 19.2428C127.172 19.2972 127.172 19.352 127.168 19.4064C127.173 19.4608 127.173 19.5156 127.168 19.57C127.162 19.6183 127.15 19.6656 127.132 19.7108C126.877 19.7174 126.632 19.8108 126.437 19.9759C126.302 20.1383 126.233 20.3467 126.245 20.5584C126.245 20.8234 126.245 21.1114 126.245 21.4191V22.751H129.395V21.4191C129.395 21.1114 129.395 20.8234 129.395 20.5584C129.405 20.3465 129.335 20.1386 129.2 19.9759C129.124 19.903 129.035 19.8462 128.937 19.8089C128.802 19.7546 128.66 19.7215 128.515 19.7108C128.5 19.6647 128.488 19.6177 128.479 19.57C128.476 19.5156 128.476 19.4609 128.479 19.4064C128.476 19.3519 128.476 19.2973 128.479 19.2428C128.488 19.1962 128.5 19.1503 128.515 19.1053H128.901C129.116 19.1053 129.349 19.1053 129.596 19.1053H130.21H130.811C131.035 19.1053 131.246 19.1053 131.46 19.1053H131.94C131.958 19.1493 131.97 19.1956 131.976 19.2428C131.98 19.2973 131.979 19.3521 131.973 19.4064Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M141.33 27.2541C141.335 27.3063 141.335 27.3589 141.33 27.4112C141.325 27.4616 141.313 27.511 141.295 27.5584H140.947H140.691C140.58 27.5584 140.463 27.5584 140.334 27.5584H139.944H139.59H139.194H138.713C138.554 27.5584 138.408 27.5584 138.275 27.5584H137.993H137.645C137.627 27.509 137.615 27.4573 137.609 27.4046C137.605 27.3545 137.605 27.3042 137.609 27.2541C137.606 27.2018 137.606 27.1493 137.609 27.097C137.611 27.0477 137.621 26.9991 137.639 26.953C137.71 26.953 137.795 26.9366 137.892 26.9039C137.986 26.8788 138.078 26.8482 138.168 26.8123C138.25 26.7809 138.325 26.7331 138.389 26.6716C138.417 26.6481 138.44 26.6186 138.456 26.5852C138.471 26.5518 138.479 26.5154 138.48 26.4785C138.47 26.2895 138.436 26.1026 138.379 25.9221C138.308 25.6898 138.22 25.3887 138.106 25.0254L137.937 24.5051H135.249L135.057 25.0516C134.921 25.4313 134.817 25.7454 134.749 25.9941C134.695 26.1674 134.661 26.3464 134.648 26.5276C134.65 26.5622 134.659 26.5959 134.677 26.6256C134.695 26.6554 134.719 26.6802 134.749 26.6977C134.822 26.7493 134.9 26.7922 134.983 26.8254C135.07 26.8596 135.158 26.8881 135.249 26.9105L135.454 26.953C135.47 27.0016 135.48 27.0522 135.483 27.1035C135.483 27.1624 135.483 27.2148 135.483 27.2541C135.483 27.2933 135.483 27.3555 135.483 27.4112C135.479 27.4613 135.469 27.5107 135.454 27.5584H135.152H134.882C134.749 27.5584 134.606 27.5584 134.45 27.5584H133.992H133.639C133.431 27.5584 133.233 27.5584 133.044 27.5584H132.606H132.304C132.285 27.509 132.273 27.4573 132.268 27.4046C132.268 27.3457 132.268 27.2933 132.268 27.2541C132.265 27.2018 132.265 27.1493 132.268 27.097C132.274 27.0476 132.286 26.9991 132.304 26.953L132.629 26.8712C132.777 26.8367 132.913 26.7594 133.018 26.6487C133.098 26.5545 133.167 26.4513 133.223 26.341C133.312 26.1839 133.399 26.0138 133.486 25.8305C133.577 25.6505 133.658 25.4771 133.733 25.3167C133.789 25.2027 133.84 25.0858 133.885 24.9665L136.249 19.0333L137.609 18.8632L139.843 25.0385C139.98 25.4247 140.103 25.7454 140.217 25.9941C140.316 26.2291 140.458 26.4433 140.636 26.6257C140.729 26.7183 140.839 26.7917 140.96 26.8417C141.064 26.8913 141.173 26.9286 141.285 26.953C141.304 27.0012 141.316 27.0519 141.321 27.1035C141.328 27.1534 141.331 27.2037 141.33 27.2541ZM136.947 21.5401C136.876 21.3361 136.82 21.1272 136.778 20.9151C136.739 20.7089 136.7 20.542 136.671 20.4144C136.639 20.542 136.593 20.7089 136.532 20.9151C136.47 21.1213 136.398 21.3372 136.311 21.5696L135.564 23.6051H137.619L136.947 21.5401Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M149.526 27.2541C149.529 27.3086 149.529 27.3632 149.526 27.4177C149.518 27.4656 149.506 27.5127 149.49 27.5584L148.84 27.5748H148.094C147.873 27.5845 147.653 27.5535 147.444 27.4832C147.265 27.4098 147.103 27.2981 146.97 27.1559C146.908 27.0953 146.853 27.0271 146.808 26.953C146.733 26.8385 146.646 26.6977 146.545 26.5276L146.22 25.9712L145.86 25.3527C145.581 24.8618 145.266 24.3153 144.921 23.7164C144.923 23.6148 144.947 23.5149 144.994 23.4246C145.04 23.3342 145.106 23.256 145.188 23.1961C145.421 23.1429 145.649 23.0651 145.866 22.9637C146.061 22.8743 146.239 22.7539 146.396 22.607C146.551 22.4644 146.675 22.2905 146.759 22.0965C146.848 21.8695 146.891 21.627 146.886 21.3831C146.899 21.187 146.871 20.9904 146.803 20.8063C146.734 20.6223 146.628 20.4552 146.49 20.3162C146.352 20.1773 146.186 20.0698 146.003 20.0009C145.821 19.932 145.626 19.9034 145.431 19.9169C145.383 19.9169 145.311 19.9169 145.21 19.9169H144.905C144.798 19.9169 144.701 19.9169 144.603 19.9366H144.399C144.399 20.0904 144.399 20.2638 144.399 20.4078C144.399 20.5518 144.399 20.6991 144.399 20.8693V21.3536L144.36 25.0942C144.36 25.248 144.36 25.4018 144.36 25.5589C144.36 25.716 144.36 25.8665 144.386 26.0072C144.396 26.1387 144.418 26.269 144.451 26.3967C144.473 26.4953 144.524 26.5852 144.597 26.6552C144.658 26.719 144.725 26.776 144.798 26.8254C144.909 26.8851 145.033 26.9187 145.158 26.9235C145.176 26.9675 145.188 27.0138 145.194 27.061C145.212 27.1694 145.212 27.2799 145.194 27.3883C145.188 27.4365 145.176 27.4837 145.158 27.529H144.834C144.619 27.529 144.379 27.529 144.119 27.529C143.86 27.529 143.649 27.529 143.49 27.529C143.33 27.529 143.106 27.529 142.869 27.529C142.632 27.529 142.415 27.529 142.22 27.529H141.74C141.722 27.4837 141.71 27.4365 141.704 27.3883C141.686 27.2799 141.686 27.1694 141.704 27.061C141.709 27.0138 141.722 26.9675 141.74 26.9235C141.995 26.9173 142.24 26.8225 142.434 26.6552C142.5 26.5808 142.547 26.4924 142.574 26.3967C142.611 26.2696 142.635 26.1391 142.645 26.0072C142.645 25.8665 142.665 25.716 142.668 25.5589C142.671 25.4018 142.668 25.2316 142.668 25.0942L142.694 21.3896C142.694 21.082 142.694 20.794 142.694 20.5289C142.693 20.3192 142.614 20.1174 142.473 19.9628C142.397 19.8921 142.309 19.8355 142.214 19.7959C142.082 19.7411 141.943 19.7079 141.801 19.6977C141.784 19.6522 141.77 19.6051 141.762 19.557C141.759 19.5025 141.759 19.4478 141.762 19.3933C141.759 19.2898 141.779 19.1869 141.821 19.0923H142.47L143.347 19.0693L144.363 19.0432L145.337 19.0203H146.038C146.382 19.0177 146.726 19.0551 147.061 19.1315C147.364 19.1957 147.652 19.3191 147.909 19.4948C148.153 19.6612 148.353 19.8861 148.49 20.1493C148.644 20.4609 148.718 20.8061 148.707 21.154C148.711 21.4317 148.66 21.7074 148.558 21.9656C148.459 22.2128 148.318 22.4409 148.142 22.6397C147.963 22.8395 147.752 23.0086 147.519 23.1404C147.278 23.2831 147.019 23.3931 146.749 23.4677C147.074 24.024 147.376 24.5313 147.649 24.9829L148.006 25.5556C148.12 25.7454 148.227 25.9221 148.331 26.0825C148.435 26.2428 148.519 26.3836 148.597 26.4948C148.645 26.575 148.703 26.6487 148.769 26.7141C148.841 26.7931 148.928 26.8566 149.025 26.9004C149.123 26.9443 149.228 26.9678 149.334 26.9694H149.516C149.532 27.0138 149.544 27.0599 149.552 27.1068C149.546 27.1564 149.537 27.2055 149.526 27.2541Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M153.646 19.4064C153.649 19.4609 153.649 19.5156 153.646 19.57C153.639 19.618 153.627 19.6652 153.61 19.7108C153.354 19.7174 153.109 19.8108 152.912 19.9759C152.777 20.1383 152.708 20.3467 152.72 20.5584C152.72 20.8234 152.72 21.1114 152.72 21.4191L152.685 25.1236C152.685 25.2774 152.685 25.4312 152.685 25.5883C152.685 25.7454 152.685 25.896 152.707 26.0367C152.719 26.1683 152.742 26.2986 152.776 26.4261C152.797 26.5245 152.847 26.6143 152.919 26.6846C152.996 26.7579 153.086 26.8157 153.185 26.8548C153.318 26.9095 153.46 26.9426 153.604 26.953C153.622 26.997 153.634 27.0432 153.639 27.0904C153.657 27.1988 153.657 27.3093 153.639 27.4177C153.633 27.4659 153.621 27.5132 153.604 27.5584H153.172C152.954 27.5584 152.717 27.5584 152.457 27.5584C152.198 27.5584 151.987 27.5584 151.828 27.5584C151.668 27.5584 151.444 27.5584 151.207 27.5584C150.97 27.5584 150.753 27.5584 150.558 27.5584H150.078C150.061 27.5127 150.049 27.4656 150.042 27.4177C150.025 27.3093 150.025 27.1988 150.042 27.0904C150.049 27.0435 150.061 26.9975 150.078 26.953C150.334 26.9467 150.58 26.852 150.776 26.6846C150.84 26.6098 150.888 26.5216 150.915 26.4261C150.95 26.2987 150.974 26.1684 150.987 26.0367C150.987 25.896 151.006 25.7454 151.009 25.5883C151.013 25.4312 151.009 25.2611 151.009 25.1236L151.045 21.4191C151.045 21.1114 151.045 20.8234 151.045 20.5584C151.057 20.3467 150.989 20.1383 150.854 19.9759C150.777 19.9044 150.688 19.8478 150.591 19.8089C150.456 19.7546 150.313 19.7215 150.168 19.7108C150.152 19.6652 150.14 19.618 150.133 19.57C150.129 19.5156 150.129 19.4609 150.133 19.4064C150.129 19.3519 150.129 19.2973 150.133 19.2428C150.14 19.1959 150.152 19.1498 150.168 19.1053H150.6C150.818 19.1053 151.052 19.1053 151.298 19.1053H151.912H152.513C152.737 19.1053 152.948 19.1053 153.162 19.1053H153.643C153.659 19.1498 153.671 19.1959 153.678 19.2428C153.671 19.2979 153.66 19.3526 153.646 19.4064Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M160 25.2447C160.02 25.6633 159.906 26.0773 159.675 26.4261C159.445 26.7427 159.149 27.0051 158.808 27.1952C158.455 27.3901 158.074 27.5302 157.678 27.6108C157.306 27.6924 156.926 27.7352 156.545 27.7384C156.383 27.7384 156.221 27.7384 156.016 27.7221L155.464 27.6795L155 27.6304L154.73 27.5944L154.672 25.788C154.718 25.7705 154.766 25.7585 154.815 25.752C154.871 25.7486 154.927 25.7486 154.984 25.752C155.081 25.7471 155.178 25.7628 155.269 25.7978C155.447 26.4697 155.948 26.8046 156.773 26.8025C156.955 26.8008 157.137 26.7865 157.318 26.7599C157.488 26.7419 157.655 26.708 157.818 26.6585C157.962 26.483 158.072 26.2821 158.143 26.0661C158.218 25.856 158.258 25.6349 158.263 25.4116C158.279 25.121 158.186 24.835 158.003 24.6098C157.82 24.4068 157.599 24.2413 157.354 24.1222C157.079 23.9821 156.797 23.8565 156.51 23.7459C156.21 23.6307 155.926 23.4802 155.662 23.2975C155.36 23.0941 155.117 22.8137 154.957 22.485C154.798 22.1562 154.727 21.7907 154.753 21.4256C154.736 20.998 154.849 20.5753 155.078 20.2148C155.295 19.8974 155.58 19.6334 155.912 19.4424C156.251 19.2458 156.621 19.1086 157.006 19.0366C157.37 18.9611 157.739 18.9217 158.11 18.9188C158.273 18.9188 158.435 18.9188 158.64 18.9384L159.185 18.981L159.643 19.0301C159.776 19.0464 159.864 19.0563 159.912 19.0661L159.948 20.8202C159.902 20.8387 159.854 20.8508 159.805 20.8562C159.749 20.8611 159.693 20.8611 159.636 20.8562C159.538 20.8614 159.439 20.8447 159.347 20.8071C159.255 20.5152 159.065 20.265 158.808 20.1002C158.526 19.9267 158.2 19.8403 157.87 19.8515C157.695 19.8529 157.52 19.8671 157.347 19.894C157.187 19.9153 157.028 19.9492 156.873 19.9955C156.756 20.1626 156.665 20.3469 156.604 20.542C156.539 20.7372 156.505 20.9415 156.503 21.1474C156.486 21.4297 156.578 21.7077 156.76 21.923C156.946 22.1182 157.166 22.2778 157.409 22.3943C157.669 22.5252 157.951 22.6496 158.256 22.7706C158.555 22.8952 158.838 23.0568 159.097 23.2517C159.366 23.4515 159.588 23.7085 159.747 24.0044C159.934 24.3897 160.021 24.8164 160 25.2447Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M89.5426 38.9241C89.5472 38.9567 89.5472 38.9897 89.5426 39.0223C89.3965 39.0583 89.2504 39.0845 89.1075 39.1074C88.9633 39.1271 88.818 39.1369 88.6724 39.1368C88.4671 39.1376 88.2672 39.0697 88.1042 38.9437C87.9375 38.8158 87.7821 38.6735 87.6399 38.5183C87.4112 38.7209 87.1469 38.8785 86.8607 38.983C86.5791 39.0837 86.2827 39.1357 85.984 39.1368C85.6941 39.1406 85.4052 39.1009 85.1268 39.019C84.8887 38.9472 84.6677 38.8269 84.4775 38.6656C84.2971 38.5061 84.154 38.3082 84.0586 38.0863C83.9557 37.8343 83.9048 37.5637 83.9092 37.2911C83.9077 37.1038 83.95 36.9188 84.0326 36.7511C84.1191 36.5809 84.2283 36.4234 84.3573 36.2831C84.4964 36.1304 84.6485 35.9902 84.8119 35.8642C84.984 35.7301 85.1528 35.6024 85.3216 35.4781C85.1654 35.2221 85.0297 34.954 84.9158 34.6763C84.8232 34.47 84.7704 34.2479 84.7599 34.0218C84.7592 33.8399 84.8074 33.6611 84.8996 33.5047C84.9941 33.348 85.1202 33.2131 85.2697 33.1087C85.4244 32.9969 85.5952 32.9097 85.7762 32.8502C85.9574 32.7898 86.147 32.7589 86.3379 32.7586C86.4929 32.7582 86.6475 32.7746 86.799 32.8077C86.9403 32.8374 87.0748 32.8941 87.1951 32.9746C87.3121 33.0594 87.4069 33.1717 87.4711 33.3018C87.5443 33.4523 87.5799 33.6186 87.575 33.7862C87.5758 33.9535 87.5333 34.1182 87.4516 34.264C87.3656 34.4188 87.2561 34.559 87.1269 34.6796C86.981 34.8167 86.8259 34.9436 86.6626 35.0592L86.1399 35.4323C86.247 35.5959 86.3671 35.7595 86.5035 35.9624C86.6399 36.1653 86.786 36.3388 86.9353 36.5319C87.0847 36.7249 87.2308 36.9115 87.3802 37.098L87.8055 37.6151C87.915 37.3894 87.9999 37.1523 88.0588 36.9082C88.1176 36.6948 88.1503 36.475 88.1562 36.2537C88.1671 36.1704 88.1487 36.0859 88.1042 36.0148C88.0425 35.9512 87.9669 35.9031 87.8834 35.8741C87.8109 35.8456 87.734 35.8301 87.6562 35.8282C87.645 35.8083 87.6394 35.7857 87.6399 35.7628V35.6712C87.6409 35.6271 87.6464 35.5832 87.6562 35.5403H87.9646C87.9948 35.5436 88.0253 35.5436 88.0555 35.5403H88.1464C88.2048 35.5437 88.2634 35.5437 88.3218 35.5403H88.5166C88.6497 35.5403 88.7828 35.5403 88.9094 35.5403H89.2699H89.5166C89.5382 35.6295 89.5382 35.7227 89.5166 35.8119H89.3932C89.3341 35.8229 89.2756 35.8371 89.2179 35.8544C89.1545 35.8708 89.0925 35.8927 89.0328 35.9199C88.9811 35.9414 88.9337 35.9725 88.8932 36.0115C88.8342 36.0882 88.7941 36.1779 88.7763 36.2733L88.6335 36.7511C88.5783 36.9344 88.5101 37.1373 88.4289 37.35C88.3479 37.5655 88.2445 37.7717 88.1205 37.9652L88.3575 38.2303C88.4446 38.3237 88.5368 38.4122 88.6335 38.4954C88.7243 38.5737 88.8234 38.6417 88.9289 38.6983C89.0142 38.7472 89.1101 38.7742 89.2082 38.7768H89.3348C89.3897 38.777 89.4444 38.7693 89.4971 38.7539C89.5184 38.7764 89.532 38.805 89.5361 38.8358C89.5422 38.8648 89.5444 38.8945 89.5426 38.9241ZM87.3412 38.2009C87.2113 38.0536 87.0717 37.8736 86.9159 37.6969C86.76 37.5202 86.5912 37.3107 86.4418 37.1046C86.2925 36.8984 86.1171 36.6889 85.9678 36.4729C85.8184 36.257 85.6756 36.0541 85.5522 35.8577C85.3224 36.0082 85.122 36.2002 84.9612 36.4239C84.8032 36.6673 84.7248 36.9546 84.7372 37.2453C84.7374 37.4183 84.7716 37.5896 84.8379 37.7493C84.9037 37.9136 85.002 38.0628 85.1268 38.1878C85.2594 38.3193 85.416 38.4237 85.5879 38.4954C85.7816 38.579 85.9908 38.6203 86.2015 38.6165C86.4168 38.6183 86.6304 38.5794 86.8314 38.5019C87.0164 38.43 87.1885 38.3283 87.3412 38.2009ZM86.9289 33.8254C86.9324 33.7374 86.9175 33.6497 86.885 33.5679C86.8526 33.4861 86.8033 33.4122 86.7405 33.3509C86.6743 33.288 86.5962 33.239 86.5109 33.207C86.4255 33.1749 86.3347 33.1605 86.2438 33.1644C86.181 33.1606 86.1182 33.1606 86.0554 33.1644L85.8671 33.1938C85.7392 33.2596 85.6331 33.3614 85.5616 33.4869C85.4901 33.6125 85.4564 33.7562 85.4645 33.9007C85.4734 34.074 85.5153 34.244 85.5879 34.4014C85.6807 34.627 85.7892 34.8457 85.9126 35.0559C86.1671 34.8758 86.4071 34.6755 86.6301 34.457C86.7207 34.3782 86.7943 34.2815 86.8462 34.1728C86.8981 34.0642 86.9274 33.9459 86.9321 33.8254H86.9289Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M97.1013 34.3032C97.1117 34.6218 97.0144 34.9345 96.8254 35.1901C96.6369 35.4334 96.3988 35.6331 96.1273 35.7759C95.8352 35.93 95.5224 36.0403 95.1987 36.1031C94.8778 36.1682 94.5518 36.2043 94.2246 36.2111V37.422C94.2246 37.5889 94.2246 37.7493 94.2246 37.8998C94.2246 38.0503 94.2246 38.1878 94.2473 38.3056C94.2473 38.3797 94.2652 38.4527 94.2993 38.5183C94.3639 38.5777 94.4419 38.6204 94.5266 38.6427C94.6261 38.6732 94.7463 38.7027 94.887 38.731C94.8978 38.7739 94.9044 38.8178 94.9064 38.8619C94.9079 38.8826 94.9079 38.9034 94.9064 38.9241C94.9064 38.947 94.9064 38.9765 94.9064 39.0059H94.6629H94.2701H93.8447H93.4259H93.0395H92.7927C92.7927 38.9765 92.7927 38.947 92.7927 38.9241C92.7912 38.9034 92.7912 38.8826 92.7927 38.8619C92.7897 38.8184 92.7897 38.7746 92.7927 38.731C92.9221 38.7067 93.05 38.675 93.1759 38.6361C93.2585 38.6147 93.3352 38.5744 93.3999 38.5183C93.4268 38.4553 93.44 38.3873 93.4389 38.3187C93.4389 38.2041 93.4551 38.07 93.4648 37.9129C93.4746 37.7558 93.4648 37.5856 93.4811 37.4285C93.4973 37.2715 93.4811 37.1013 93.4811 36.99V34.4898V34.1167C93.4811 33.9956 93.4811 33.8811 93.4811 33.7894C93.4798 33.6996 93.4722 33.6099 93.4583 33.5211C93.4561 33.4719 93.4404 33.4243 93.4129 33.3836C93.3494 33.3268 93.2739 33.2854 93.1921 33.2625C93.0882 33.2331 92.9616 33.2004 92.809 33.1709C92.8005 33.1277 92.7951 33.084 92.7927 33.04C92.7912 33.0193 92.7912 32.9985 92.7927 32.9778C92.7927 32.9549 92.7927 32.9255 92.7927 32.896H93.3187L93.77 32.8731L94.2603 32.8469L94.7441 32.824H95.1694C95.4091 32.8225 95.6483 32.8444 95.8838 32.8895C96.1009 32.9276 96.3084 33.0088 96.4942 33.1284C96.6713 33.2455 96.8156 33.4067 96.913 33.5964C97.0313 33.8133 97.0959 34.0558 97.1013 34.3032ZM96.2604 34.4374C96.2752 34.2602 96.2479 34.0819 96.1807 33.9174C96.1135 33.7529 96.0084 33.607 95.874 33.4916C95.5913 33.2855 95.2487 33.1796 94.9 33.1905H94.7279H94.5298H94.3025C94.3025 33.2462 94.3025 33.3182 94.3025 33.4131C94.3025 33.508 94.3025 33.6127 94.3025 33.7403C94.3025 33.868 94.3025 33.976 94.3025 34.1003C94.3025 34.2247 94.3025 34.3458 94.3025 34.4505L94.2863 35.7137H94.5493H94.8123C94.9454 35.7137 95.072 35.7137 95.1889 35.7137C95.2866 35.7071 95.3834 35.6906 95.4779 35.6646C95.7186 35.5667 95.9253 35.3994 96.0721 35.1836C96.2057 34.9586 96.2711 34.6993 96.2604 34.4374Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M103.218 38.8619C103.222 38.8869 103.222 38.9122 103.218 38.9372C103.218 38.9634 103.212 38.9863 103.199 39.0059H102.926H102.602C102.465 39.0059 102.319 39.0059 102.166 39.0059H101.916H101.423H101.257H101.011C100.999 38.9589 100.993 38.9104 100.994 38.8619C100.994 38.8177 100.999 38.7737 101.011 38.731L101.157 38.7048C101.221 38.6916 101.283 38.6741 101.345 38.6525C101.403 38.6301 101.459 38.6016 101.511 38.5674C101.532 38.5548 101.549 38.5372 101.562 38.516C101.574 38.4949 101.581 38.4709 101.582 38.4463C101.567 38.3109 101.535 38.1779 101.488 38.0503C101.426 37.8572 101.335 37.5627 101.212 37.1765L100.975 36.4435H98.9066L98.7053 36.9802C98.6533 37.1176 98.6014 37.2584 98.5527 37.4089C98.504 37.5594 98.4553 37.7034 98.4163 37.8409C98.3774 37.9783 98.3416 38.106 98.3189 38.214C98.3007 38.2881 98.2887 38.3636 98.2832 38.4398C98.2849 38.4646 98.2923 38.4887 98.3046 38.5103C98.317 38.5318 98.3341 38.5502 98.3546 38.5641C98.4062 38.6001 98.4617 38.6298 98.5202 38.6525C98.5818 38.6741 98.6447 38.6916 98.7085 38.7048L98.8546 38.731C98.8644 38.774 98.8699 38.8179 98.8709 38.8619C98.8703 38.9104 98.8648 38.9586 98.8546 39.0059H98.6339H98.4813H98.0267H97.8124C97.6598 39.0059 97.5299 39.0059 97.426 39.0059H97.1533H96.9422C96.9303 38.9875 96.9246 38.9657 96.926 38.9437V38.8619C96.927 38.8179 96.9325 38.774 96.9422 38.731L97.1825 38.6787C97.291 38.6539 97.3902 38.5982 97.4682 38.5183C97.5353 38.4351 97.59 38.3425 97.6306 38.2434C97.6988 38.1027 97.7669 37.9489 97.8416 37.7853C97.9163 37.6216 97.9812 37.458 98.0429 37.3075C98.1046 37.1569 98.1468 37.0456 98.1696 36.9802L99.7475 32.8011L100.433 32.6964L102.072 37.1831C102.096 37.2551 102.132 37.3642 102.179 37.5104C102.231 37.6478 102.287 37.7918 102.348 37.9358C102.41 38.0798 102.472 38.214 102.537 38.3383C102.584 38.4335 102.643 38.5226 102.712 38.6034C102.776 38.6655 102.86 38.7036 102.949 38.7114L103.192 38.7441C103.21 38.7809 103.219 38.8212 103.218 38.8619ZM100.212 34.1887C100.174 34.0814 100.143 33.9722 100.118 33.8614C100.092 33.76 100.072 33.6683 100.056 33.5865C100.029 33.5037 100.012 33.4181 100.004 33.3313C99.9897 33.3686 99.9778 33.4069 99.9683 33.4458C99.9683 33.4883 99.9456 33.5309 99.9326 33.5767C99.9196 33.6225 99.8807 33.7534 99.8482 33.8614C99.8157 33.9694 99.7768 34.0807 99.7313 34.1887L99.0559 36.0344H100.845L100.212 34.1887Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M109.004 38.8718C109.003 38.9176 108.995 38.963 108.978 39.0059H108.842H108.647H108.449H108.303C108.156 39.0096 108.008 38.9942 107.865 38.9601C107.755 38.9279 107.655 38.867 107.576 38.7834C107.486 38.6882 107.401 38.5876 107.323 38.4823C107.212 38.3416 107.089 38.178 106.949 37.9882C106.81 37.7983 106.667 37.602 106.517 37.3925C106.368 37.1831 106.222 36.9835 106.092 36.7904C105.962 36.5973 105.842 36.4271 105.741 36.2733C105.641 36.1195 105.566 36.0082 105.524 35.9461C105.528 35.8922 105.54 35.8393 105.559 35.789C105.581 35.7492 105.609 35.7129 105.641 35.681C105.843 35.6521 106.043 35.6017 106.235 35.5304C106.409 35.4666 106.573 35.3749 106.719 35.2588C106.854 35.1529 106.964 35.019 107.043 34.8661C107.116 34.7085 107.152 34.536 107.147 34.3621C107.153 34.172 107.116 33.983 107.04 33.8091C106.976 33.6667 106.878 33.5429 106.754 33.4491C106.631 33.3537 106.49 33.2856 106.339 33.2495C106.175 33.2067 106.007 33.1858 105.839 33.1873H105.663H105.472H105.287H105.147L105.131 33.5767C105.131 33.6945 105.131 33.832 105.131 33.9891C105.131 34.1461 105.131 34.3163 105.131 34.4799L105.115 36.954C105.115 36.9933 105.115 37.0915 105.115 37.2453C105.115 37.3991 105.115 37.5725 105.115 37.7362C105.115 37.8998 105.115 38.0634 105.131 38.2107C105.127 38.2974 105.143 38.3839 105.18 38.4627C105.36 38.5925 105.572 38.6695 105.793 38.6852C105.796 38.7288 105.796 38.7725 105.793 38.8161C105.795 38.8368 105.795 38.8576 105.793 38.8783C105.793 38.9012 105.793 38.9307 105.793 38.9601H105.524H105.131H104.699H104.28H103.894H103.647C103.647 38.9307 103.647 38.9012 103.647 38.8783C103.646 38.8576 103.646 38.8368 103.647 38.8161C103.649 38.7721 103.655 38.7284 103.663 38.6852C103.878 38.6701 104.084 38.5966 104.261 38.4725C104.298 38.3941 104.316 38.3075 104.313 38.2205C104.313 38.0765 104.332 37.9162 104.339 37.7427C104.345 37.5693 104.339 37.4155 104.339 37.2518V36.954L104.365 34.4799V34.228C104.365 34.1058 104.365 33.9814 104.365 33.8549C104.365 33.7305 104.365 33.6127 104.345 33.508C104.326 33.4033 104.322 33.3378 104.303 33.3214C104.239 33.2646 104.164 33.2232 104.082 33.2004C103.978 33.1709 103.852 33.1382 103.699 33.1087C103.691 33.0655 103.685 33.0218 103.683 32.9778C103.681 32.9571 103.681 32.9363 103.683 32.9156C103.683 32.8927 103.683 32.8633 103.683 32.8338H103.809C103.87 32.8369 103.931 32.8369 103.991 32.8338H104.098H104.219L104.683 32.8109L105.193 32.7847L105.673 32.7618H106.069C106.287 32.7627 106.504 32.7791 106.719 32.8109C106.936 32.8392 107.147 32.9092 107.339 33.0171C107.528 33.1252 107.687 33.2807 107.8 33.4687C107.929 33.7059 107.99 33.9742 107.978 34.2443C107.992 34.4464 107.962 34.6491 107.892 34.8387C107.821 35.0284 107.711 35.2006 107.569 35.3439C107.245 35.6455 106.837 35.8397 106.4 35.9002C106.449 35.9788 106.521 36.0901 106.621 36.2275C106.722 36.365 106.832 36.5286 106.946 36.702L107.339 37.2485L107.735 37.7787L108.06 38.2107C108.132 38.3009 108.21 38.3862 108.293 38.466C108.376 38.5414 108.467 38.6083 108.563 38.6656C108.641 38.7117 108.729 38.7376 108.819 38.7408H108.949C108.959 38.7605 108.965 38.7815 108.969 38.803C108.982 38.8253 108.994 38.8482 109.004 38.8718Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M113.696 33.9072C113.652 33.9104 113.607 33.9104 113.563 33.9072H113.501H113.423C113.369 33.7099 113.247 33.5383 113.079 33.4229C112.891 33.336 112.685 33.2956 112.479 33.3051H112.066C111.907 33.3051 111.78 33.3051 111.68 33.3051C111.677 33.353 111.677 33.4011 111.68 33.4491V33.6127C111.68 33.7142 111.68 33.8385 111.68 33.9891C111.68 34.1396 111.68 34.3163 111.68 34.4963V36.9704V37.5136C111.68 37.6925 111.68 37.8529 111.68 37.9947C111.68 38.1387 111.68 38.2565 111.703 38.3481C111.7 38.4031 111.71 38.4579 111.732 38.5085C111.796 38.566 111.873 38.6065 111.956 38.6263C112.081 38.6652 112.207 38.6969 112.336 38.7212C112.347 38.7641 112.353 38.8079 112.355 38.8521C112.357 38.8728 112.357 38.8936 112.355 38.9143C112.355 38.9372 112.355 38.9667 112.355 38.9961H112.112H111.722H111.297H110.875H110.488H110.245C110.242 38.9689 110.242 38.9415 110.245 38.9143C110.243 38.8936 110.243 38.8728 110.245 38.8521C110.247 38.8079 110.253 38.7641 110.264 38.7212C110.393 38.6969 110.519 38.6652 110.644 38.6263C110.727 38.6057 110.804 38.5653 110.868 38.5085C110.889 38.4645 110.901 38.4166 110.904 38.3678C110.904 38.286 110.923 38.1747 110.933 38.0405C110.943 37.9063 110.949 37.746 110.953 37.5627C110.956 37.3795 110.953 37.1831 110.953 36.9704L110.969 34.5159V33.4556C110.969 33.4 110.969 33.3509 110.969 33.3051H110.81H110.605H110.102C109.895 33.2945 109.689 33.335 109.501 33.4229C109.332 33.538 109.209 33.7095 109.154 33.9072C109.111 33.9103 109.067 33.9103 109.024 33.9072H108.962H108.884L108.91 32.8633H109.141H109.465C109.579 32.8633 109.693 32.8633 109.79 32.8633H110.063H112.482H112.755C112.858 32.8633 112.966 32.8633 113.079 32.8633H113.404H113.667L113.696 33.9072Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M120.401 33.0236C120.4 33.0677 120.395 33.1116 120.385 33.1545C120.165 33.1687 119.953 33.2421 119.771 33.3673C119.742 33.4322 119.727 33.5023 119.726 33.5734C119.726 33.6945 119.706 33.8352 119.696 33.9891C119.687 34.1429 119.696 34.3163 119.696 34.4505C119.696 34.5847 119.696 34.709 119.696 34.7777L119.68 36.9769C119.68 37.1962 119.68 37.4122 119.68 37.6314C119.68 37.8507 119.68 38.0438 119.664 38.2271C119.648 38.4103 119.664 38.5543 119.641 38.6918C119.619 38.8292 119.625 38.9012 119.618 38.9437C119.46 39.0334 119.284 39.085 119.102 39.0943L115.914 34.7908C115.858 34.7202 115.807 34.6458 115.761 34.5683C115.709 34.4865 115.664 34.4112 115.615 34.349C115.587 34.3105 115.562 34.27 115.54 34.228L115.475 34.1101V34.4374C115.475 34.5258 115.475 34.6207 115.475 34.7254C115.475 34.8301 115.475 34.9185 115.475 34.9937L115.456 36.9573V37.2845C115.456 37.4449 115.456 37.6118 115.456 37.7918C115.456 37.9718 115.456 38.1191 115.475 38.2729C115.472 38.3602 115.491 38.4469 115.531 38.5249C115.709 38.6492 115.918 38.7227 116.135 38.7376C116.138 38.7812 116.138 38.8249 116.135 38.8685C116.136 38.8892 116.136 38.91 116.135 38.9307C116.135 38.9536 116.135 38.983 116.135 39.0125H115.725H115.609H115.394H115.18C115.044 39.0125 114.924 39.0125 114.82 39.0125C114.716 39.0125 114.605 39.0125 114.495 39.0125H114.222C114.222 38.983 114.222 38.9536 114.222 38.9307C114.221 38.91 114.221 38.8892 114.222 38.8685C114.219 38.8249 114.219 38.7812 114.222 38.7376C114.442 38.7234 114.654 38.65 114.836 38.5249C114.868 38.446 114.883 38.3613 114.881 38.2761C114.881 38.1289 114.901 37.9685 114.907 37.7885C114.914 37.6085 114.907 37.4351 114.907 37.2715C114.907 37.1078 114.907 36.9998 114.907 36.9442L114.927 34.8596V34.277C114.931 34.0791 114.92 33.8811 114.894 33.6847C114.887 33.5817 114.849 33.4832 114.786 33.4017C114.723 33.3201 114.638 33.2592 114.54 33.2265C114.453 33.1911 114.361 33.1669 114.268 33.1545C114.261 33.1344 114.261 33.1125 114.268 33.0924V33.0138C114.263 32.9692 114.263 32.9243 114.268 32.8797H114.427H114.677H114.933H115.089H115.443L118.641 37.2715C118.713 37.3729 118.774 37.4645 118.833 37.5529L118.976 37.7853L119.099 37.9947C119.099 37.926 119.099 37.854 119.099 37.7853V37.5725C119.099 37.4547 119.099 37.3304 119.099 37.1995C119.099 37.0686 119.099 36.9573 119.099 36.8722L119.125 34.7777C119.125 34.7025 119.125 34.5879 119.125 34.4505C119.125 34.313 119.125 34.1494 119.125 33.9956C119.125 33.8418 119.125 33.7076 119.102 33.5865C119.104 33.5188 119.094 33.4513 119.073 33.3869C118.893 33.262 118.684 33.1885 118.466 33.1742C118.457 33.131 118.452 33.0872 118.45 33.0433C118.448 33.0226 118.448 33.0018 118.45 32.9811C118.45 32.9582 118.45 32.9287 118.45 32.8993H118.742C118.781 32.9025 118.82 32.9025 118.859 32.8993H118.976C119.041 32.8993 119.112 32.8993 119.193 32.8993H119.407C119.541 32.8993 119.661 32.8993 119.765 32.8993C119.869 32.8993 119.979 32.8993 120.089 32.8993H120.362C120.362 32.9287 120.362 32.9582 120.362 32.9811C120.376 32.9944 120.389 33.0086 120.401 33.0236Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M125.398 39.0059H124.794H124.093H122.145H121.726H121.382H121.171C121.171 38.9765 121.171 38.947 121.171 38.9241C121.169 38.9034 121.169 38.8826 121.171 38.8619C121.171 38.8178 121.177 38.7739 121.187 38.731C121.315 38.7071 121.442 38.6754 121.567 38.6361C121.65 38.6163 121.727 38.5758 121.791 38.5183C121.827 38.4476 121.846 38.369 121.846 38.2892C121.846 38.1583 121.865 38.0143 121.872 37.8507C121.878 37.6871 121.872 37.5234 121.872 37.3696V36.9998L121.891 34.5159V34.1887C121.891 34.0643 121.891 33.9432 121.891 33.8254C121.891 33.7076 121.891 33.6029 121.872 33.4982C121.87 33.4407 121.855 33.3844 121.826 33.3345C121.762 33.2782 121.685 33.2389 121.602 33.22C121.501 33.1895 121.374 33.16 121.222 33.1316C121.212 33.0888 121.205 33.0449 121.203 33.0007C121.202 32.98 121.202 32.9593 121.203 32.9386C121.203 32.9156 121.203 32.8862 121.203 32.8567H121.378H121.505H121.966H122.219H124.411H124.752C124.869 32.8567 124.982 32.8567 125.096 32.8567C125.21 32.8567 125.297 32.8567 125.365 32.8567L125.391 33.9072C125.349 33.9197 125.306 33.9263 125.262 33.9269C125.215 33.9253 125.168 33.9187 125.122 33.9072C125.08 33.783 125.023 33.6644 124.953 33.5538C124.898 33.4685 124.821 33.4005 124.729 33.3574C124.627 33.3095 124.517 33.2807 124.404 33.2724C124.268 33.2724 124.102 33.2724 123.904 33.2724C123.489 33.2724 123.076 33.2724 122.667 33.2985V33.4818C122.667 33.5473 122.667 33.6127 122.667 33.6782C122.667 33.796 122.667 33.9301 122.667 34.0807C122.667 34.2312 122.667 34.3818 122.667 34.5356V35.6483H123.057H123.482C123.648 35.6483 123.791 35.6483 123.921 35.6286C124.033 35.6206 124.143 35.5917 124.245 35.5435C124.338 35.5006 124.416 35.4326 124.473 35.3472C124.539 35.2359 124.583 35.1125 124.602 34.9839C124.646 34.9724 124.691 34.9669 124.736 34.9676C124.783 34.9665 124.83 34.972 124.875 34.9839V35.2065C124.875 35.2686 124.875 35.357 124.875 35.465C124.875 35.573 124.875 35.7006 124.875 35.8413C124.875 35.9821 124.875 36.1064 124.875 36.2111C124.875 36.3159 124.875 36.4042 124.875 36.4697V36.6889C124.83 36.7019 124.783 36.7085 124.736 36.7086C124.691 36.708 124.646 36.7014 124.602 36.6889C124.583 36.5604 124.539 36.4369 124.473 36.3257C124.416 36.2403 124.338 36.1723 124.245 36.1293C124.143 36.0822 124.033 36.0535 123.921 36.0442C123.791 36.0442 123.648 36.0442 123.482 36.0442H123.057C122.914 36.0442 122.771 36.0442 122.632 36.0442V36.9998V37.8343C122.632 37.9849 122.632 38.1191 122.632 38.2369C122.63 38.3022 122.639 38.3674 122.658 38.4299C122.708 38.4736 122.768 38.504 122.833 38.5183C122.926 38.5441 123.022 38.5616 123.119 38.5707C123.226 38.5707 123.343 38.5936 123.466 38.5969C123.589 38.6001 123.71 38.5969 123.833 38.5969C124.008 38.5976 124.182 38.5888 124.356 38.5707C124.491 38.5568 124.623 38.5226 124.749 38.4692C124.861 38.4217 124.96 38.3476 125.038 38.2532C125.128 38.1398 125.198 38.0114 125.245 37.8736C125.289 37.8533 125.337 37.8443 125.385 37.8474C125.431 37.8435 125.477 37.8525 125.518 37.8736L125.398 39.0059Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M131.824 38.8717C131.823 38.9176 131.814 38.963 131.798 39.0059H131.661H131.466H131.268H131.122C130.975 39.0096 130.827 38.9942 130.684 38.9601C130.574 38.9279 130.474 38.867 130.395 38.7834C130.305 38.6882 130.22 38.5876 130.142 38.4823C130.031 38.3416 129.908 38.178 129.768 37.9882L129.336 37.3925C129.184 37.1831 129.041 36.9835 128.911 36.7904C128.781 36.5973 128.661 36.4271 128.56 36.2733C128.46 36.1195 128.385 36.0082 128.346 35.9461C128.344 35.8961 128.353 35.8462 128.372 35.8002C128.392 35.7542 128.422 35.7135 128.46 35.681C128.663 35.6521 128.862 35.6017 129.054 35.5304C129.229 35.4666 129.392 35.3749 129.538 35.2588C129.673 35.1529 129.783 35.019 129.862 34.8661C129.945 34.7055 129.986 34.5266 129.983 34.3458C129.988 34.1557 129.952 33.9667 129.875 33.7927C129.813 33.6506 129.716 33.5267 129.593 33.4327C129.468 33.3379 129.326 33.2699 129.174 33.2331C129.011 33.1903 128.843 33.1694 128.674 33.1709H128.499H128.307H128.122H127.982V33.5603C127.982 33.6782 127.982 33.8156 127.982 33.9727C127.982 34.1298 127.982 34.2999 127.982 34.4636L127.966 36.9377C127.966 36.9769 127.966 37.0751 127.966 37.2289C127.966 37.3827 127.966 37.5562 127.966 37.7198C127.966 37.8834 127.966 38.0471 127.966 38.1943C127.962 38.2811 127.979 38.3675 128.015 38.4463C128.195 38.5761 128.408 38.6531 128.629 38.6688C128.637 38.712 128.643 38.7558 128.645 38.7998C128.646 38.8204 128.646 38.8412 128.645 38.8619C128.645 38.8848 128.645 38.9143 128.645 38.9437H128.398H128.005H127.573H127.155H126.768H126.521C126.521 38.9143 126.521 38.8848 126.521 38.8619C126.521 38.839 126.521 38.8194 126.521 38.7998C126.518 38.7562 126.518 38.7124 126.521 38.6688C126.736 38.6537 126.942 38.5802 127.119 38.4561C127.156 38.3777 127.174 38.2912 127.171 38.2041C127.171 38.0601 127.193 37.8998 127.197 37.7263C127.2 37.5529 127.197 37.3991 127.197 37.2355V36.9377L127.223 34.4636V34.2116C127.223 34.0894 127.223 33.9651 127.223 33.8385C127.223 33.7142 127.223 33.5963 127.203 33.4916C127.204 33.4273 127.191 33.3635 127.164 33.3051C127.099 33.249 127.023 33.2077 126.94 33.184C126.836 33.1545 126.71 33.1218 126.557 33.0924C126.549 33.0492 126.543 33.0054 126.541 32.9615C126.539 32.9408 126.539 32.92 126.541 32.8993C126.541 32.8764 126.541 32.8469 126.541 32.8175H126.629C126.689 32.8206 126.75 32.8206 126.81 32.8175H126.917H127.038L127.502 32.7946L128.012 32.7684L128.492 32.7455H128.888C129.106 32.7466 129.323 32.763 129.538 32.7946C129.754 32.8234 129.964 32.8934 130.155 33.0007C130.344 33.1088 130.503 33.2643 130.616 33.4524C130.746 33.689 130.808 33.9577 130.794 34.228C130.8 34.425 130.764 34.621 130.691 34.8036C130.617 34.9861 130.506 35.1512 130.366 35.2883C130.043 35.5893 129.636 35.7834 129.2 35.8446C129.246 35.9232 129.317 36.0344 129.418 36.1719C129.518 36.3093 129.629 36.4729 129.742 36.6464L130.135 37.1929L130.531 37.7231L130.872 38.1551C130.944 38.2453 131.023 38.3305 131.106 38.4103C131.19 38.4859 131.281 38.5528 131.379 38.6099C131.455 38.6563 131.543 38.6822 131.632 38.6852H131.762C131.771 38.7049 131.778 38.7258 131.781 38.7474C131.799 38.7875 131.813 38.8291 131.824 38.8717Z",
          fill: "#233E81",
        }),
        c.jsx("path", {
          d: "M135.665 37.3958C135.672 37.6742 135.595 37.9484 135.444 38.1812C135.302 38.398 135.116 38.5821 134.898 38.7212C134.675 38.8686 134.429 38.979 134.171 39.0485C133.926 39.1138 133.674 39.1479 133.421 39.1499C133.262 39.1499 133.096 39.1499 132.895 39.127C132.675 39.1082 132.458 39.0687 132.246 39.0092L132.203 37.9587C132.22 37.9391 132.268 37.9292 132.343 37.9292C132.389 37.9263 132.435 37.9365 132.476 37.9587C132.515 38.0964 132.58 38.2253 132.668 38.3383C132.744 38.4332 132.838 38.5122 132.944 38.5707C133.046 38.6259 133.155 38.6666 133.268 38.6918C133.389 38.7139 133.512 38.7248 133.635 38.7245C133.77 38.7246 133.905 38.7114 134.038 38.6852C134.159 38.6639 134.277 38.6276 134.389 38.5772C134.526 38.4761 134.637 38.3438 134.713 38.1911C134.801 38.0147 134.845 37.8191 134.84 37.6216C134.848 37.3883 134.781 37.1585 134.648 36.9671C134.514 36.7848 134.351 36.6266 134.165 36.4991C133.966 36.358 133.759 36.2291 133.544 36.113C133.326 35.9957 133.118 35.8611 132.921 35.7104C132.732 35.5672 132.568 35.3923 132.437 35.1934C132.304 34.9753 132.238 34.7227 132.246 34.4669C132.239 34.1943 132.308 33.9254 132.447 33.6912C132.58 33.48 132.756 33.2994 132.963 33.1611C133.179 33.0219 133.416 32.9181 133.665 32.8535C133.911 32.7869 134.166 32.7528 134.421 32.752C134.577 32.752 134.746 32.752 134.924 32.7749C135.144 32.7939 135.361 32.8334 135.574 32.8927L135.59 33.9105C135.546 33.9306 135.498 33.9395 135.45 33.9367H135.376C135.355 33.9367 135.334 33.9298 135.317 33.9171C135.299 33.7953 135.253 33.6795 135.182 33.5789C135.112 33.4783 135.019 33.3957 134.911 33.3378C134.688 33.2311 134.444 33.1784 134.197 33.184C134.08 33.184 133.963 33.1906 133.846 33.2036C133.734 33.2173 133.624 33.2494 133.522 33.2985C133.39 33.3918 133.279 33.5123 133.197 33.652C133.112 33.8174 133.072 34.0025 133.08 34.1887C133.068 34.4225 133.135 34.6535 133.272 34.8432C133.409 35.018 133.572 35.1703 133.755 35.2948C133.955 35.4305 134.162 35.554 134.376 35.6646C134.596 35.7772 134.804 35.9109 134.999 36.0639C135.192 36.2145 135.356 36.3998 135.483 36.6104C135.61 36.8517 135.673 37.1225 135.665 37.3958Z",
          fill: "#233E81",
        }),
      ],
    }),
  });
}
var G8 = {},
  Vl;
function tu() {
  if (Vl) return G8;
  (Vl = 1),
    Object.defineProperty(G8, "__esModule", { value: !0 }),
    (G8.parse = E),
    (G8.serialize = m);
  const s = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    C =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    f = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    v = (() => {
      const z = function () {};
      return (z.prototype = Object.create(null)), z;
    })();
  function E(z, D) {
    const w = new v(),
      X = z.length;
    if (X < 2) return w;
    const V = (D == null ? void 0 : D.decode) || T;
    let U = 0;
    do {
      const Q = z.indexOf("=", U);
      if (Q === -1) break;
      const Y = z.indexOf(";", U),
        C1 = Y === -1 ? X : Y;
      if (Q > C1) {
        U = z.lastIndexOf(";", Q - 1) + 1;
        continue;
      }
      const F = _(z, U, Q),
        H1 = b(z, Q, F),
        T1 = z.slice(F, H1);
      if (w[T1] === void 0) {
        let N1 = _(z, Q + 1, C1),
          q = b(z, C1, N1);
        const t1 = V(z.slice(N1, q));
        w[T1] = t1;
      }
      U = C1 + 1;
    } while (U < X);
    return w;
  }
  function _(z, D, w) {
    do {
      const X = z.charCodeAt(D);
      if (X !== 32 && X !== 9) return D;
    } while (++D < w);
    return w;
  }
  function b(z, D, w) {
    for (; D > w; ) {
      const X = z.charCodeAt(--D);
      if (X !== 32 && X !== 9) return D + 1;
    }
    return w;
  }
  function m(z, D, w) {
    const X = (w == null ? void 0 : w.encode) || encodeURIComponent;
    if (!s.test(z)) throw new TypeError(`argument name is invalid: ${z}`);
    const V = X(D);
    if (!o.test(V)) throw new TypeError(`argument val is invalid: ${D}`);
    let U = z + "=" + V;
    if (!w) return U;
    if (w.maxAge !== void 0) {
      if (!Number.isInteger(w.maxAge))
        throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
      U += "; Max-Age=" + w.maxAge;
    }
    if (w.domain) {
      if (!C.test(w.domain))
        throw new TypeError(`option domain is invalid: ${w.domain}`);
      U += "; Domain=" + w.domain;
    }
    if (w.path) {
      if (!f.test(w.path))
        throw new TypeError(`option path is invalid: ${w.path}`);
      U += "; Path=" + w.path;
    }
    if (w.expires) {
      if (!N(w.expires) || !Number.isFinite(w.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${w.expires}`);
      U += "; Expires=" + w.expires.toUTCString();
    }
    if (
      (w.httpOnly && (U += "; HttpOnly"),
      w.secure && (U += "; Secure"),
      w.partitioned && (U += "; Partitioned"),
      w.priority)
    )
      switch (
        typeof w.priority == "string" ? w.priority.toLowerCase() : void 0
      ) {
        case "low":
          U += "; Priority=Low";
          break;
        case "medium":
          U += "; Priority=Medium";
          break;
        case "high":
          U += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${w.priority}`);
      }
    if (w.sameSite)
      switch (
        typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite
      ) {
        case !0:
        case "strict":
          U += "; SameSite=Strict";
          break;
        case "lax":
          U += "; SameSite=Lax";
          break;
        case "none":
          U += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
      }
    return U;
  }
  function T(z) {
    if (z.indexOf("%") === -1) return z;
    try {
      return decodeURIComponent(z);
    } catch {
      return z;
    }
  }
  function N(z) {
    return h.call(z) === "[object Date]";
  }
  return G8;
}
tu();
/**
 * react-router v7.2.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Bl = "popstate";
function lu(s = {}) {
  function o(h, v) {
    let {
      pathname: E = "/",
      search: _ = "",
      hash: b = "",
    } = n4(h.location.hash.substring(1));
    return (
      !E.startsWith("/") && !E.startsWith(".") && (E = "/" + E),
      N7(
        "",
        { pathname: E, search: _, hash: b },
        (v.state && v.state.usr) || null,
        (v.state && v.state.key) || "default"
      )
    );
  }
  function C(h, v) {
    let E = h.document.querySelector("base"),
      _ = "";
    if (E && E.getAttribute("href")) {
      let b = h.location.href,
        m = b.indexOf("#");
      _ = m === -1 ? b : b.slice(0, m);
    }
    return _ + "#" + (typeof v == "string" ? v : Q8(v));
  }
  function f(h, v) {
    z2(
      h.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        v
      )})`
    );
  }
  return nu(o, C, f, s);
}
function _1(s, o) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(o);
}
function z2(s, o) {
  if (!s) {
    typeof console < "u" && console.warn(o);
    try {
      throw new Error(o);
    } catch {}
  }
}
function au() {
  return Math.random().toString(36).substring(2, 10);
}
function ql(s, o) {
  return { usr: s.state, key: s.key, idx: o };
}
function N7(s, o, C = null, f) {
  return {
    pathname: typeof s == "string" ? s : s.pathname,
    search: "",
    hash: "",
    ...(typeof o == "string" ? n4(o) : o),
    state: C,
    key: (o && o.key) || f || au(),
  };
}
function Q8({ pathname: s = "/", search: o = "", hash: C = "" }) {
  return (
    o && o !== "?" && (s += o.charAt(0) === "?" ? o : "?" + o),
    C && C !== "#" && (s += C.charAt(0) === "#" ? C : "#" + C),
    s
  );
}
function n4(s) {
  let o = {};
  if (s) {
    let C = s.indexOf("#");
    C >= 0 && ((o.hash = s.substring(C)), (s = s.substring(0, C)));
    let f = s.indexOf("?");
    f >= 0 && ((o.search = s.substring(f)), (s = s.substring(0, f))),
      s && (o.pathname = s);
  }
  return o;
}
function nu(s, o, C, f = {}) {
  let { window: h = document.defaultView, v5Compat: v = !1 } = f,
    E = h.history,
    _ = "POP",
    b = null,
    m = T();
  m == null && ((m = 0), E.replaceState({ ...E.state, idx: m }, ""));
  function T() {
    return (E.state || { idx: null }).idx;
  }
  function N() {
    _ = "POP";
    let V = T(),
      U = V == null ? null : V - m;
    (m = V), b && b({ action: _, location: X.location, delta: U });
  }
  function z(V, U) {
    _ = "PUSH";
    let Q = N7(X.location, V, U);
    C && C(Q, V), (m = T() + 1);
    let Y = ql(Q, m),
      C1 = X.createHref(Q);
    try {
      E.pushState(Y, "", C1);
    } catch (F) {
      if (F instanceof DOMException && F.name === "DataCloneError") throw F;
      h.location.assign(C1);
    }
    v && b && b({ action: _, location: X.location, delta: 1 });
  }
  function D(V, U) {
    _ = "REPLACE";
    let Q = N7(X.location, V, U);
    C && C(Q, V), (m = T());
    let Y = ql(Q, m),
      C1 = X.createHref(Q);
    E.replaceState(Y, "", C1),
      v && b && b({ action: _, location: X.location, delta: 0 });
  }
  function w(V) {
    let U = h.location.origin !== "null" ? h.location.origin : h.location.href,
      Q = typeof V == "string" ? V : Q8(V);
    return (
      (Q = Q.replace(/ $/, "%20")),
      _1(
        U,
        `No window.location.(origin|href) available to create URL for href: ${Q}`
      ),
      new URL(Q, U)
    );
  }
  let X = {
    get action() {
      return _;
    },
    get location() {
      return s(h, E);
    },
    listen(V) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(Bl, N),
        (b = V),
        () => {
          h.removeEventListener(Bl, N), (b = null);
        }
      );
    },
    createHref(V) {
      return o(h, V);
    },
    createURL: w,
    encodeLocation(V) {
      let U = w(V);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: z,
    replace: D,
    go(V) {
      return E.go(V);
    },
  };
  return X;
}
function kl(s, o, C = "/") {
  return iu(s, o, C, !1);
}
function iu(s, o, C, f) {
  let h = typeof o == "string" ? n4(o) : o,
    v = z3(h.pathname || "/", C);
  if (v == null) return null;
  let E = Jl(s);
  uu(E);
  let _ = null;
  for (let b = 0; _ == null && b < E.length; ++b) {
    let m = gu(v);
    _ = mu(E[b], m, f);
  }
  return _;
}
function Jl(s, o = [], C = [], f = "") {
  let h = (v, E, _) => {
    let b = {
      relativePath: _ === void 0 ? v.path || "" : _,
      caseSensitive: v.caseSensitive === !0,
      childrenIndex: E,
      route: v,
    };
    b.relativePath.startsWith("/") &&
      (_1(
        b.relativePath.startsWith(f),
        `Absolute route path "${b.relativePath}" nested under path "${f}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(f.length)));
    let m = i3([f, b.relativePath]),
      T = C.concat(b);
    v.children &&
      v.children.length > 0 &&
      (_1(
        v.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      Jl(v.children, o, T, m)),
      !(v.path == null && !v.index) &&
        o.push({ path: m, score: du(m, v.index), routesMeta: T });
  };
  return (
    s.forEach((v, E) => {
      var _;
      if (v.path === "" || !((_ = v.path) != null && _.includes("?"))) h(v, E);
      else for (let b of $l(v.path)) h(v, E, b);
    }),
    o
  );
}
function $l(s) {
  let o = s.split("/");
  if (o.length === 0) return [];
  let [C, ...f] = o,
    h = C.endsWith("?"),
    v = C.replace(/\?$/, "");
  if (f.length === 0) return h ? [v, ""] : [v];
  let E = $l(f.join("/")),
    _ = [];
  return (
    _.push(...E.map((b) => (b === "" ? v : [v, b].join("/")))),
    h && _.push(...E),
    _.map((b) => (s.startsWith("/") && b === "" ? "/" : b))
  );
}
function uu(s) {
  s.sort((o, C) =>
    o.score !== C.score
      ? C.score - o.score
      : hu(
          o.routesMeta.map((f) => f.childrenIndex),
          C.routesMeta.map((f) => f.childrenIndex)
        )
  );
}
var cu = /^:[\w-]+$/,
  su = 3,
  ru = 2,
  fu = 1,
  ou = 10,
  Cu = -2,
  Zl = (s) => s === "*";
function du(s, o) {
  let C = s.split("/"),
    f = C.length;
  return (
    C.some(Zl) && (f += Cu),
    o && (f += ru),
    C.filter((h) => !Zl(h)).reduce(
      (h, v) => h + (cu.test(v) ? su : v === "" ? fu : ou),
      f
    )
  );
}
function hu(s, o) {
  return s.length === o.length && s.slice(0, -1).every((f, h) => f === o[h])
    ? s[s.length - 1] - o[o.length - 1]
    : 0;
}
function mu(s, o, C = !1) {
  let { routesMeta: f } = s,
    h = {},
    v = "/",
    E = [];
  for (let _ = 0; _ < f.length; ++_) {
    let b = f[_],
      m = _ === f.length - 1,
      T = v === "/" ? o : o.slice(v.length) || "/",
      N = h9(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: m },
        T
      ),
      z = b.route;
    if (
      (!N &&
        m &&
        C &&
        !f[f.length - 1].route.index &&
        (N = h9(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          T
        )),
      !N)
    )
      return null;
    Object.assign(h, N.params),
      E.push({
        params: h,
        pathname: i3([v, N.pathname]),
        pathnameBase: Hu(i3([v, N.pathnameBase])),
        route: z,
      }),
      N.pathnameBase !== "/" && (v = i3([v, N.pathnameBase]));
  }
  return E;
}
function h9(s, o) {
  typeof s == "string" && (s = { path: s, caseSensitive: !1, end: !0 });
  let [C, f] = vu(s.path, s.caseSensitive, s.end),
    h = o.match(C);
  if (!h) return null;
  let v = h[0],
    E = v.replace(/(.)\/+$/, "$1"),
    _ = h.slice(1);
  return {
    params: f.reduce((m, { paramName: T, isOptional: N }, z) => {
      if (T === "*") {
        let w = _[z] || "";
        E = v.slice(0, v.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const D = _[z];
      return (
        N && !D ? (m[T] = void 0) : (m[T] = (D || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: v,
    pathnameBase: E,
    pattern: s,
  };
}
function vu(s, o = !1, C = !0) {
  z2(
    s === "*" || !s.endsWith("*") || s.endsWith("/*"),
    `Route path "${s}" will be treated as if it were "${s.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let f = [],
    h =
      "^" +
      s
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (E, _, b) => (
            f.push({ paramName: _, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    s.endsWith("*")
      ? (f.push({ paramName: "*" }),
        (h += s === "*" || s === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : C
      ? (h += "\\/*$")
      : s !== "" && s !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, o ? void 0 : "i"), f]
  );
}
function gu(s) {
  try {
    return s
      .split("/")
      .map((o) => decodeURIComponent(o).replace(/\//g, "%2F"))
      .join("/");
  } catch (o) {
    return (
      z2(
        !1,
        `The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`
      ),
      s
    );
  }
}
function z3(s, o) {
  if (o === "/") return s;
  if (!s.toLowerCase().startsWith(o.toLowerCase())) return null;
  let C = o.endsWith("/") ? o.length - 1 : o.length,
    f = s.charAt(C);
  return f && f !== "/" ? null : s.slice(C) || "/";
}
function pu(s, o = "/") {
  let {
    pathname: C,
    search: f = "",
    hash: h = "",
  } = typeof s == "string" ? n4(s) : s;
  return {
    pathname: C ? (C.startsWith("/") ? C : yu(C, o)) : o,
    search: xu(f),
    hash: Su(h),
  };
}
function yu(s, o) {
  let C = o.replace(/\/+$/, "").split("/");
  return (
    s.split("/").forEach((h) => {
      h === ".." ? C.length > 1 && C.pop() : h !== "." && C.push(h);
    }),
    C.length > 1 ? C.join("/") : "/"
  );
}
function z7(s, o, C, f) {
  return `Cannot include a '${s}' character in a manually specified \`to.${o}\` field [${JSON.stringify(
    f
  )}].  Please separate it out to the \`to.${C}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bu(s) {
  return s.filter(
    (o, C) => C === 0 || (o.route.path && o.route.path.length > 0)
  );
}
function Wl(s) {
  let o = bu(s);
  return o.map((C, f) => (f === o.length - 1 ? C.pathname : C.pathnameBase));
}
function Fl(s, o, C, f = !1) {
  let h;
  typeof s == "string"
    ? (h = n4(s))
    : ((h = { ...s }),
      _1(
        !h.pathname || !h.pathname.includes("?"),
        z7("?", "pathname", "search", h)
      ),
      _1(
        !h.pathname || !h.pathname.includes("#"),
        z7("#", "pathname", "hash", h)
      ),
      _1(!h.search || !h.search.includes("#"), z7("#", "search", "hash", h)));
  let v = s === "" || h.pathname === "",
    E = v ? "/" : h.pathname,
    _;
  if (E == null) _ = C;
  else {
    let N = o.length - 1;
    if (!f && E.startsWith("..")) {
      let z = E.split("/");
      for (; z[0] === ".."; ) z.shift(), (N -= 1);
      h.pathname = z.join("/");
    }
    _ = N >= 0 ? o[N] : "/";
  }
  let b = pu(h, _),
    m = E && E !== "/" && E.endsWith("/"),
    T = (v || E === ".") && C.endsWith("/");
  return !b.pathname.endsWith("/") && (m || T) && (b.pathname += "/"), b;
}
var i3 = (s) => s.join("/").replace(/\/\/+/g, "/"),
  Hu = (s) => s.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xu = (s) => (!s || s === "?" ? "" : s.startsWith("?") ? s : "?" + s),
  Su = (s) => (!s || s === "#" ? "" : s.startsWith("#") ? s : "#" + s);
function Eu(s) {
  return (
    s != null &&
    typeof s.status == "number" &&
    typeof s.statusText == "string" &&
    typeof s.internal == "boolean" &&
    "data" in s
  );
}
var Pl = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Pl);
var _u = ["GET", ...Pl];
new Set(_u);
var Z4 = M.createContext(null);
Z4.displayName = "DataRouter";
var m9 = M.createContext(null);
m9.displayName = "DataRouterState";
var Il = M.createContext({ isTransitioning: !1 });
Il.displayName = "ViewTransition";
var ju = M.createContext(new Map());
ju.displayName = "Fetchers";
var Lu = M.createContext(null);
Lu.displayName = "Await";
var Z2 = M.createContext(null);
Z2.displayName = "Navigation";
var K8 = M.createContext(null);
K8.displayName = "Location";
var u3 = M.createContext({ outlet: null, matches: [], isDataRoute: !1 });
u3.displayName = "Route";
var q7 = M.createContext(null);
q7.displayName = "RouteError";
function Mu(s, { relative: o } = {}) {
  _1(
    k8(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: C, navigator: f } = M.useContext(Z2),
    { hash: h, pathname: v, search: E } = J8(s, { relative: o }),
    _ = v;
  return (
    C !== "/" && (_ = v === "/" ? C : i3([C, v])),
    f.createHref({ pathname: _, search: E, hash: h })
  );
}
function k8() {
  return M.useContext(K8) != null;
}
function w3() {
  return (
    _1(
      k8(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    M.useContext(K8).location
  );
}
var ea =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ta(s) {
  M.useContext(Z2).static || M.useLayoutEffect(s);
}
function Au() {
  let { isDataRoute: s } = M.useContext(u3);
  return s ? Yu() : Tu();
}
function Tu() {
  _1(
    k8(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let s = M.useContext(Z4),
    { basename: o, navigator: C } = M.useContext(Z2),
    { matches: f } = M.useContext(u3),
    { pathname: h } = w3(),
    v = JSON.stringify(Wl(f)),
    E = M.useRef(!1);
  return (
    ta(() => {
      E.current = !0;
    }),
    M.useCallback(
      (b, m = {}) => {
        if ((z2(E.current, ea), !E.current)) return;
        if (typeof b == "number") {
          C.go(b);
          return;
        }
        let T = Fl(b, JSON.parse(v), h, m.relative === "path");
        s == null &&
          o !== "/" &&
          (T.pathname = T.pathname === "/" ? o : i3([o, T.pathname])),
          (m.replace ? C.replace : C.push)(T, m.state, m);
      },
      [o, C, v, h, s]
    )
  );
}
M.createContext(null);
function J8(s, { relative: o } = {}) {
  let { matches: C } = M.useContext(u3),
    { pathname: f } = w3(),
    h = JSON.stringify(Wl(C));
  return M.useMemo(() => Fl(s, JSON.parse(h), f, o === "path"), [s, h, f, o]);
}
function Ru(s, o) {
  return la(s, o);
}
function la(s, o, C, f) {
  var Q;
  _1(
    k8(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h, static: v } = M.useContext(Z2),
    { matches: E } = M.useContext(u3),
    _ = E[E.length - 1],
    b = _ ? _.params : {},
    m = _ ? _.pathname : "/",
    T = _ ? _.pathnameBase : "/",
    N = _ && _.route;
  {
    let Y = (N && N.path) || "";
    aa(
      m,
      !N || Y.endsWith("*") || Y.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${
        Y === "/" ? "*" : `${Y}/*`
      }">.`
    );
  }
  let z = w3(),
    D;
  if (o) {
    let Y = typeof o == "string" ? n4(o) : o;
    _1(
      T === "/" || ((Q = Y.pathname) == null ? void 0 : Q.startsWith(T)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${T}" but pathname "${Y.pathname}" was given in the \`location\` prop.`
    ),
      (D = Y);
  } else D = z;
  let w = D.pathname || "/",
    X = w;
  if (T !== "/") {
    let Y = T.replace(/^\//, "").split("/");
    X = "/" + w.replace(/^\//, "").split("/").slice(Y.length).join("/");
  }
  let V =
    !v && C && C.matches && C.matches.length > 0
      ? C.matches
      : kl(s, { pathname: X });
  z2(
    N || V != null,
    `No routes matched location "${D.pathname}${D.search}${D.hash}" `
  ),
    z2(
      V == null ||
        V[V.length - 1].route.element !== void 0 ||
        V[V.length - 1].route.Component !== void 0 ||
        V[V.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let U = Nu(
    V &&
      V.map((Y) =>
        Object.assign({}, Y, {
          params: Object.assign({}, b, Y.params),
          pathname: i3([
            T,
            h.encodeLocation
              ? h.encodeLocation(Y.pathname).pathname
              : Y.pathname,
          ]),
          pathnameBase:
            Y.pathnameBase === "/"
              ? T
              : i3([
                  T,
                  h.encodeLocation
                    ? h.encodeLocation(Y.pathnameBase).pathname
                    : Y.pathnameBase,
                ]),
        })
      ),
    E,
    C,
    f
  );
  return o && U
    ? M.createElement(
        K8.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...D,
            },
            navigationType: "POP",
          },
        },
        U
      )
    : U;
}
function zu() {
  let s = Zu(),
    o = Eu(s)
      ? `${s.status} ${s.statusText}`
      : s instanceof Error
      ? s.message
      : JSON.stringify(s),
    C = s instanceof Error ? s.stack : null,
    f = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: f },
    v = { padding: "2px 4px", backgroundColor: f },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", s),
    (E = M.createElement(
      M.Fragment,
      null,
      M.createElement("p", null, "💿 Hey developer 👋"),
      M.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        M.createElement("code", { style: v }, "ErrorBoundary"),
        " or",
        " ",
        M.createElement("code", { style: v }, "errorElement"),
        " prop on your route."
      )
    )),
    M.createElement(
      M.Fragment,
      null,
      M.createElement("h2", null, "Unexpected Application Error!"),
      M.createElement("h3", { style: { fontStyle: "italic" } }, o),
      C ? M.createElement("pre", { style: h }, C) : null,
      E
    )
  );
}
var wu = M.createElement(zu, null),
  Ou = class extends M.Component {
    constructor(s) {
      super(s),
        (this.state = {
          location: s.location,
          revalidation: s.revalidation,
          error: s.error,
        });
    }
    static getDerivedStateFromError(s) {
      return { error: s };
    }
    static getDerivedStateFromProps(s, o) {
      return o.location !== s.location ||
        (o.revalidation !== "idle" && s.revalidation === "idle")
        ? { error: s.error, location: s.location, revalidation: s.revalidation }
        : {
            error: s.error !== void 0 ? s.error : o.error,
            location: o.location,
            revalidation: s.revalidation || o.revalidation,
          };
    }
    componentDidCatch(s, o) {
      console.error(
        "React Router caught the following error during render",
        s,
        o
      );
    }
    render() {
      return this.state.error !== void 0
        ? M.createElement(
            u3.Provider,
            { value: this.props.routeContext },
            M.createElement(q7.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Du({ routeContext: s, match: o, children: C }) {
  let f = M.useContext(Z4);
  return (
    f &&
      f.static &&
      f.staticContext &&
      (o.route.errorElement || o.route.ErrorBoundary) &&
      (f.staticContext._deepestRenderedBoundaryId = o.route.id),
    M.createElement(u3.Provider, { value: s }, C)
  );
}
function Nu(s, o = [], C = null, f = null) {
  if (s == null) {
    if (!C) return null;
    if (C.errors) s = C.matches;
    else if (o.length === 0 && !C.initialized && C.matches.length > 0)
      s = C.matches;
    else return null;
  }
  let h = s,
    v = C == null ? void 0 : C.errors;
  if (v != null) {
    let b = h.findIndex(
      (m) => m.route.id && (v == null ? void 0 : v[m.route.id]) !== void 0
    );
    _1(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        v
      ).join(",")}`
    ),
      (h = h.slice(0, Math.min(h.length, b + 1)));
  }
  let E = !1,
    _ = -1;
  if (C)
    for (let b = 0; b < h.length; b++) {
      let m = h[b];
      if (
        ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (_ = b),
        m.route.id)
      ) {
        let { loaderData: T, errors: N } = C,
          z =
            m.route.loader &&
            !T.hasOwnProperty(m.route.id) &&
            (!N || N[m.route.id] === void 0);
        if (m.route.lazy || z) {
          (E = !0), _ >= 0 ? (h = h.slice(0, _ + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((b, m, T) => {
    let N,
      z = !1,
      D = null,
      w = null;
    C &&
      ((N = v && m.route.id ? v[m.route.id] : void 0),
      (D = m.route.errorElement || wu),
      E &&
        (_ < 0 && T === 0
          ? (aa(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (z = !0),
            (w = null))
          : _ === T &&
            ((z = !0), (w = m.route.hydrateFallbackElement || null))));
    let X = o.concat(h.slice(0, T + 1)),
      V = () => {
        let U;
        return (
          N
            ? (U = D)
            : z
            ? (U = w)
            : m.route.Component
            ? (U = M.createElement(m.route.Component, null))
            : m.route.element
            ? (U = m.route.element)
            : (U = b),
          M.createElement(Du, {
            match: m,
            routeContext: { outlet: b, matches: X, isDataRoute: C != null },
            children: U,
          })
        );
      };
    return C && (m.route.ErrorBoundary || m.route.errorElement || T === 0)
      ? M.createElement(Ou, {
          location: C.location,
          revalidation: C.revalidation,
          component: D,
          error: N,
          children: V(),
          routeContext: { outlet: null, matches: X, isDataRoute: !0 },
        })
      : V();
  }, null);
}
function Z7(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Uu(s) {
  let o = M.useContext(Z4);
  return _1(o, Z7(s)), o;
}
function Vu(s) {
  let o = M.useContext(m9);
  return _1(o, Z7(s)), o;
}
function Bu(s) {
  let o = M.useContext(u3);
  return _1(o, Z7(s)), o;
}
function Y7(s) {
  let o = Bu(s),
    C = o.matches[o.matches.length - 1];
  return (
    _1(
      C.route.id,
      `${s} can only be used on routes that contain a unique "id"`
    ),
    C.route.id
  );
}
function qu() {
  return Y7("useRouteId");
}
function Zu() {
  var f;
  let s = M.useContext(q7),
    o = Vu("useRouteError"),
    C = Y7("useRouteError");
  return s !== void 0 ? s : (f = o.errors) == null ? void 0 : f[C];
}
function Yu() {
  let { router: s } = Uu("useNavigate"),
    o = Y7("useNavigate"),
    C = M.useRef(!1);
  return (
    ta(() => {
      C.current = !0;
    }),
    M.useCallback(
      async (h, v = {}) => {
        z2(C.current, ea),
          C.current &&
            (typeof h == "number"
              ? s.navigate(h)
              : await s.navigate(h, { fromRouteId: o, ...v }));
      },
      [s, o]
    )
  );
}
var Yl = {};
function aa(s, o, C) {
  !o && !Yl[s] && ((Yl[s] = !0), z2(!1, C));
}
M.memo(Gu);
function Gu({ routes: s, future: o, state: C }) {
  return la(s, void 0, C, o);
}
function a4(s) {
  _1(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Xu({
  basename: s = "/",
  children: o = null,
  location: C,
  navigationType: f = "POP",
  navigator: h,
  static: v = !1,
}) {
  _1(
    !k8(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let E = s.replace(/^\/*/, "/"),
    _ = M.useMemo(
      () => ({ basename: E, navigator: h, static: v, future: {} }),
      [E, h, v]
    );
  typeof C == "string" && (C = n4(C));
  let {
      pathname: b = "/",
      search: m = "",
      hash: T = "",
      state: N = null,
      key: z = "default",
    } = C,
    D = M.useMemo(() => {
      let w = z3(b, E);
      return w == null
        ? null
        : {
            location: { pathname: w, search: m, hash: T, state: N, key: z },
            navigationType: f,
          };
    }, [E, b, m, T, N, z, f]);
  return (
    z2(
      D != null,
      `<Router basename="${E}"> is not able to match the URL "${b}${m}${T}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    D == null
      ? null
      : M.createElement(
          Z2.Provider,
          { value: _ },
          M.createElement(K8.Provider, { children: o, value: D })
        )
  );
}
function Qu({ children: s, location: o }) {
  return Ru(U7(s), o);
}
function U7(s, o = []) {
  let C = [];
  return (
    M.Children.forEach(s, (f, h) => {
      if (!M.isValidElement(f)) return;
      let v = [...o, h];
      if (f.type === M.Fragment) {
        C.push.apply(C, U7(f.props.children, v));
        return;
      }
      _1(
        f.type === a4,
        `[${
          typeof f.type == "string" ? f.type : f.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        _1(
          !f.props.index || !f.props.children,
          "An index route cannot have child routes."
        );
      let E = {
        id: f.props.id || v.join("-"),
        caseSensitive: f.props.caseSensitive,
        element: f.props.element,
        Component: f.props.Component,
        index: f.props.index,
        path: f.props.path,
        loader: f.props.loader,
        action: f.props.action,
        hydrateFallbackElement: f.props.hydrateFallbackElement,
        HydrateFallback: f.props.HydrateFallback,
        errorElement: f.props.errorElement,
        ErrorBoundary: f.props.ErrorBoundary,
        hasErrorBoundary:
          f.props.hasErrorBoundary === !0 ||
          f.props.ErrorBoundary != null ||
          f.props.errorElement != null,
        shouldRevalidate: f.props.shouldRevalidate,
        handle: f.props.handle,
        lazy: f.props.lazy,
      };
      f.props.children && (E.children = U7(f.props.children, v)), C.push(E);
    }),
    C
  );
}
var C9 = "get",
  d9 = "application/x-www-form-urlencoded";
function v9(s) {
  return s != null && typeof s.tagName == "string";
}
function Ku(s) {
  return v9(s) && s.tagName.toLowerCase() === "button";
}
function ku(s) {
  return v9(s) && s.tagName.toLowerCase() === "form";
}
function Ju(s) {
  return v9(s) && s.tagName.toLowerCase() === "input";
}
function $u(s) {
  return !!(s.metaKey || s.altKey || s.ctrlKey || s.shiftKey);
}
function Wu(s, o) {
  return s.button === 0 && (!o || o === "_self") && !$u(s);
}
var r9 = null;
function Fu() {
  if (r9 === null)
    try {
      new FormData(document.createElement("form"), 0), (r9 = !1);
    } catch {
      r9 = !0;
    }
  return r9;
}
var Pu = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function w7(s) {
  return s != null && !Pu.has(s)
    ? (z2(
        !1,
        `"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${d9}"`
      ),
      null)
    : s;
}
function Iu(s, o) {
  let C, f, h, v, E;
  if (ku(s)) {
    let _ = s.getAttribute("action");
    (f = _ ? z3(_, o) : null),
      (C = s.getAttribute("method") || C9),
      (h = w7(s.getAttribute("enctype")) || d9),
      (v = new FormData(s));
  } else if (Ku(s) || (Ju(s) && (s.type === "submit" || s.type === "image"))) {
    let _ = s.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = s.getAttribute("formaction") || _.getAttribute("action");
    if (
      ((f = b ? z3(b, o) : null),
      (C = s.getAttribute("formmethod") || _.getAttribute("method") || C9),
      (h =
        w7(s.getAttribute("formenctype")) ||
        w7(_.getAttribute("enctype")) ||
        d9),
      (v = new FormData(_, s)),
      !Fu())
    ) {
      let { name: m, type: T, value: N } = s;
      if (T === "image") {
        let z = m ? `${m}.` : "";
        v.append(`${z}x`, "0"), v.append(`${z}y`, "0");
      } else m && v.append(m, N);
    }
  } else {
    if (v9(s))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (C = C9), (f = null), (h = d9), (E = s);
  }
  return (
    v && h === "text/plain" && ((E = v), (v = void 0)),
    { action: f, method: C.toLowerCase(), encType: h, formData: v, body: E }
  );
}
function G7(s, o) {
  if (s === !1 || s === null || typeof s > "u") throw new Error(o);
}
async function ec(s, o) {
  if (s.id in o) return o[s.id];
  try {
    let C = await import(s.module);
    return (o[s.id] = C), C;
  } catch (C) {
    return (
      console.error(
        `Error loading route module \`${s.module}\`, reloading page...`
      ),
      console.error(C),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function tc(s) {
  return s == null
    ? !1
    : s.href == null
    ? s.rel === "preload" &&
      typeof s.imageSrcSet == "string" &&
      typeof s.imageSizes == "string"
    : typeof s.rel == "string" && typeof s.href == "string";
}
async function lc(s, o, C) {
  let f = await Promise.all(
    s.map(async (h) => {
      let v = o.routes[h.route.id];
      if (v) {
        let E = await ec(v, C);
        return E.links ? E.links() : [];
      }
      return [];
    })
  );
  return uc(
    f
      .flat(1)
      .filter(tc)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" }
      )
  );
}
function Gl(s, o, C, f, h, v) {
  let E = (b, m) => (C[m] ? b.route.id !== C[m].route.id : !0),
    _ = (b, m) => {
      var T;
      return (
        C[m].pathname !== b.pathname ||
        (((T = C[m].route.path) == null ? void 0 : T.endsWith("*")) &&
          C[m].params["*"] !== b.params["*"])
      );
    };
  return v === "assets"
    ? o.filter((b, m) => E(b, m) || _(b, m))
    : v === "data"
    ? o.filter((b, m) => {
        var N;
        let T = f.routes[b.route.id];
        if (!T || !T.hasLoader) return !1;
        if (E(b, m) || _(b, m)) return !0;
        if (b.route.shouldRevalidate) {
          let z = b.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: ((N = C[0]) == null ? void 0 : N.params) || {},
            nextUrl: new URL(s, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof z == "boolean") return z;
        }
        return !0;
      })
    : [];
}
function ac(s, o, { includeHydrateFallback: C } = {}) {
  return nc(
    s
      .map((f) => {
        let h = o.routes[f.route.id];
        if (!h) return [];
        let v = [h.module];
        return (
          h.clientActionModule && (v = v.concat(h.clientActionModule)),
          h.clientLoaderModule && (v = v.concat(h.clientLoaderModule)),
          C &&
            h.hydrateFallbackModule &&
            (v = v.concat(h.hydrateFallbackModule)),
          h.imports && (v = v.concat(h.imports)),
          v
        );
      })
      .flat(1)
  );
}
function nc(s) {
  return [...new Set(s)];
}
function ic(s) {
  let o = {},
    C = Object.keys(s).sort();
  for (let f of C) o[f] = s[f];
  return o;
}
function uc(s, o) {
  let C = new Set();
  return (
    new Set(o),
    s.reduce((f, h) => {
      let v = JSON.stringify(ic(h));
      return C.has(v) || (C.add(v), f.push({ key: v, link: h })), f;
    }, [])
  );
}
function cc(s) {
  let o =
    typeof s == "string"
      ? new URL(
          s,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : s;
  return (
    o.pathname === "/"
      ? (o.pathname = "_root.data")
      : (o.pathname = `${o.pathname.replace(/\/$/, "")}.data`),
    o
  );
}
function sc() {
  let s = M.useContext(Z4);
  return (
    G7(
      s,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    s
  );
}
function rc() {
  let s = M.useContext(m9);
  return (
    G7(
      s,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    s
  );
}
var X7 = M.createContext(void 0);
X7.displayName = "FrameworkContext";
function na() {
  let s = M.useContext(X7);
  return (
    G7(s, "You must render this element inside a <HydratedRouter> element"), s
  );
}
function fc(s, o) {
  let C = M.useContext(X7),
    [f, h] = M.useState(!1),
    [v, E] = M.useState(!1),
    {
      onFocus: _,
      onBlur: b,
      onMouseEnter: m,
      onMouseLeave: T,
      onTouchStart: N,
    } = o,
    z = M.useRef(null);
  M.useEffect(() => {
    if ((s === "render" && E(!0), s === "viewport")) {
      let X = (U) => {
          U.forEach((Q) => {
            E(Q.isIntersecting);
          });
        },
        V = new IntersectionObserver(X, { threshold: 0.5 });
      return (
        z.current && V.observe(z.current),
        () => {
          V.disconnect();
        }
      );
    }
  }, [s]),
    M.useEffect(() => {
      if (f) {
        let X = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(X);
        };
      }
    }, [f]);
  let D = () => {
      h(!0);
    },
    w = () => {
      h(!1), E(!1);
    };
  return C
    ? s !== "intent"
      ? [v, z, {}]
      : [
          v,
          z,
          {
            onFocus: X8(_, D),
            onBlur: X8(b, w),
            onMouseEnter: X8(m, D),
            onMouseLeave: X8(T, w),
            onTouchStart: X8(N, D),
          },
        ]
    : [!1, z, {}];
}
function X8(s, o) {
  return (C) => {
    s && s(C), C.defaultPrevented || o(C);
  };
}
function oc({ page: s, ...o }) {
  let { router: C } = sc(),
    f = M.useMemo(() => kl(C.routes, s, C.basename), [C.routes, s, C.basename]);
  return f ? M.createElement(dc, { page: s, matches: f, ...o }) : null;
}
function Cc(s) {
  let { manifest: o, routeModules: C } = na(),
    [f, h] = M.useState([]);
  return (
    M.useEffect(() => {
      let v = !1;
      return (
        lc(s, o, C).then((E) => {
          v || h(E);
        }),
        () => {
          v = !0;
        }
      );
    }, [s, o, C]),
    f
  );
}
function dc({ page: s, matches: o, ...C }) {
  let f = w3(),
    { manifest: h, routeModules: v } = na(),
    { loaderData: E, matches: _ } = rc(),
    b = M.useMemo(() => Gl(s, o, _, h, f, "data"), [s, o, _, h, f]),
    m = M.useMemo(() => Gl(s, o, _, h, f, "assets"), [s, o, _, h, f]),
    T = M.useMemo(() => {
      if (s === f.pathname + f.search + f.hash) return [];
      let D = new Set(),
        w = !1;
      if (
        (o.forEach((V) => {
          var Q;
          let U = h.routes[V.route.id];
          !U ||
            !U.hasLoader ||
            ((!b.some((Y) => Y.route.id === V.route.id) &&
              V.route.id in E &&
              (Q = v[V.route.id]) != null &&
              Q.shouldRevalidate) ||
            U.hasClientLoader
              ? (w = !0)
              : D.add(V.route.id));
        }),
        D.size === 0)
      )
        return [];
      let X = cc(s);
      return (
        w &&
          D.size > 0 &&
          X.searchParams.set(
            "_routes",
            o
              .filter((V) => D.has(V.route.id))
              .map((V) => V.route.id)
              .join(",")
          ),
        [X.pathname + X.search]
      );
    }, [E, f, h, b, o, s, v]),
    N = M.useMemo(() => ac(m, h), [m, h]),
    z = Cc(m);
  return M.createElement(
    M.Fragment,
    null,
    T.map((D) =>
      M.createElement("link", {
        key: D,
        rel: "prefetch",
        as: "fetch",
        href: D,
        ...C,
      })
    ),
    N.map((D) =>
      M.createElement("link", { key: D, rel: "modulepreload", href: D, ...C })
    ),
    z.map(({ key: D, link: w }) => M.createElement("link", { key: D, ...w }))
  );
}
function hc(...s) {
  return (o) => {
    s.forEach((C) => {
      typeof C == "function" ? C(o) : C != null && (C.current = o);
    });
  };
}
var ia =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ia && (window.__reactRouterVersion = "7.2.0");
} catch {}
function mc({ basename: s, children: o, window: C }) {
  let f = M.useRef();
  f.current == null && (f.current = lu({ window: C, v5Compat: !0 }));
  let h = f.current,
    [v, E] = M.useState({ action: h.action, location: h.location }),
    _ = M.useCallback(
      (b) => {
        M.startTransition(() => E(b));
      },
      [E]
    );
  return (
    M.useLayoutEffect(() => h.listen(_), [h, _]),
    M.createElement(Xu, {
      basename: s,
      children: o,
      location: v.location,
      navigationType: v.action,
      navigator: h,
    })
  );
}
var ua = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  d1 = M.forwardRef(function (
    {
      onClick: o,
      discover: C = "render",
      prefetch: f = "none",
      relative: h,
      reloadDocument: v,
      replace: E,
      state: _,
      target: b,
      to: m,
      preventScrollReset: T,
      viewTransition: N,
      ...z
    },
    D
  ) {
    let { basename: w } = M.useContext(Z2),
      X = typeof m == "string" && ua.test(m),
      V,
      U = !1;
    if (typeof m == "string" && X && ((V = m), ia))
      try {
        let q = new URL(window.location.href),
          t1 = m.startsWith("//") ? new URL(q.protocol + m) : new URL(m),
          B1 = z3(t1.pathname, w);
        t1.origin === q.origin && B1 != null
          ? (m = B1 + t1.search + t1.hash)
          : (U = !0);
      } catch {
        z2(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let Q = Mu(m, { relative: h }),
      [Y, C1, F] = fc(f, z),
      H1 = yc(m, {
        replace: E,
        state: _,
        target: b,
        preventScrollReset: T,
        relative: h,
        viewTransition: N,
      });
    function T1(q) {
      o && o(q), q.defaultPrevented || H1(q);
    }
    let N1 = M.createElement("a", {
      ...z,
      ...F,
      href: V || Q,
      onClick: U || v ? o : T1,
      ref: hc(D, C1),
      target: b,
      "data-discover": !X && C === "render" ? "true" : void 0,
    });
    return Y && !X
      ? M.createElement(M.Fragment, null, N1, M.createElement(oc, { page: Q }))
      : N1;
  });
d1.displayName = "Link";
var vc = M.forwardRef(function (
  {
    "aria-current": o = "page",
    caseSensitive: C = !1,
    className: f = "",
    end: h = !1,
    style: v,
    to: E,
    viewTransition: _,
    children: b,
    ...m
  },
  T
) {
  let N = J8(E, { relative: m.relative }),
    z = w3(),
    D = M.useContext(m9),
    { navigator: w, basename: X } = M.useContext(Z2),
    V = D != null && Ec(N) && _ === !0,
    U = w.encodeLocation ? w.encodeLocation(N).pathname : N.pathname,
    Q = z.pathname,
    Y =
      D && D.navigation && D.navigation.location
        ? D.navigation.location.pathname
        : null;
  C ||
    ((Q = Q.toLowerCase()),
    (Y = Y ? Y.toLowerCase() : null),
    (U = U.toLowerCase())),
    Y && X && (Y = z3(Y, X) || Y);
  const C1 = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let F = Q === U || (!h && Q.startsWith(U) && Q.charAt(C1) === "/"),
    H1 =
      Y != null &&
      (Y === U || (!h && Y.startsWith(U) && Y.charAt(U.length) === "/")),
    T1 = { isActive: F, isPending: H1, isTransitioning: V },
    N1 = F ? o : void 0,
    q;
  typeof f == "function"
    ? (q = f(T1))
    : (q = [
        f,
        F ? "active" : null,
        H1 ? "pending" : null,
        V ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let t1 = typeof v == "function" ? v(T1) : v;
  return M.createElement(
    d1,
    {
      ...m,
      "aria-current": N1,
      className: q,
      ref: T,
      style: t1,
      to: E,
      viewTransition: _,
    },
    typeof b == "function" ? b(T1) : b
  );
});
vc.displayName = "NavLink";
var gc = M.forwardRef(
  (
    {
      discover: s = "render",
      fetcherKey: o,
      navigate: C,
      reloadDocument: f,
      replace: h,
      state: v,
      method: E = C9,
      action: _,
      onSubmit: b,
      relative: m,
      preventScrollReset: T,
      viewTransition: N,
      ...z
    },
    D
  ) => {
    let w = xc(),
      X = Sc(_, { relative: m }),
      V = E.toLowerCase() === "get" ? "get" : "post",
      U = typeof _ == "string" && ua.test(_),
      Q = (Y) => {
        if ((b && b(Y), Y.defaultPrevented)) return;
        Y.preventDefault();
        let C1 = Y.nativeEvent.submitter,
          F = (C1 == null ? void 0 : C1.getAttribute("formmethod")) || E;
        w(C1 || Y.currentTarget, {
          fetcherKey: o,
          method: F,
          navigate: C,
          replace: h,
          state: v,
          relative: m,
          preventScrollReset: T,
          viewTransition: N,
        });
      };
    return M.createElement("form", {
      ref: D,
      method: V,
      action: X,
      onSubmit: f ? b : Q,
      ...z,
      "data-discover": !U && s === "render" ? "true" : void 0,
    });
  }
);
gc.displayName = "Form";
function pc(s) {
  return `${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function ca(s) {
  let o = M.useContext(Z4);
  return _1(o, pc(s)), o;
}
function yc(
  s,
  {
    target: o,
    replace: C,
    state: f,
    preventScrollReset: h,
    relative: v,
    viewTransition: E,
  } = {}
) {
  let _ = Au(),
    b = w3(),
    m = J8(s, { relative: v });
  return M.useCallback(
    (T) => {
      if (Wu(T, o)) {
        T.preventDefault();
        let N = C !== void 0 ? C : Q8(b) === Q8(m);
        _(s, {
          replace: N,
          state: f,
          preventScrollReset: h,
          relative: v,
          viewTransition: E,
        });
      }
    },
    [b, _, m, C, f, o, s, h, v, E]
  );
}
var bc = 0,
  Hc = () => `__${String(++bc)}__`;
function xc() {
  let { router: s } = ca("useSubmit"),
    { basename: o } = M.useContext(Z2),
    C = qu();
  return M.useCallback(
    async (f, h = {}) => {
      let { action: v, method: E, encType: _, formData: b, body: m } = Iu(f, o);
      if (h.navigate === !1) {
        let T = h.fetcherKey || Hc();
        await s.fetch(T, C, h.action || v, {
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: m,
          formMethod: h.method || E,
          formEncType: h.encType || _,
          flushSync: h.flushSync,
        });
      } else
        await s.navigate(h.action || v, {
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: m,
          formMethod: h.method || E,
          formEncType: h.encType || _,
          replace: h.replace,
          state: h.state,
          fromRouteId: C,
          flushSync: h.flushSync,
          viewTransition: h.viewTransition,
        });
    },
    [s, o, C]
  );
}
function Sc(s, { relative: o } = {}) {
  let { basename: C } = M.useContext(Z2),
    f = M.useContext(u3);
  _1(f, "useFormAction must be used inside a RouteContext");
  let [h] = f.matches.slice(-1),
    v = { ...J8(s || ".", { relative: o }) },
    E = w3();
  if (s == null) {
    v.search = E.search;
    let _ = new URLSearchParams(v.search),
      b = _.getAll("index");
    if (b.some((T) => T === "")) {
      _.delete("index"),
        b.filter((N) => N).forEach((N) => _.append("index", N));
      let T = _.toString();
      v.search = T ? `?${T}` : "";
    }
  }
  return (
    (!s || s === ".") &&
      h.route.index &&
      (v.search = v.search ? v.search.replace(/^\?/, "?index&") : "?index"),
    C !== "/" && (v.pathname = v.pathname === "/" ? C : i3([C, v.pathname])),
    Q8(v)
  );
}
function Ec(s, o = {}) {
  let C = M.useContext(Il);
  _1(
    C != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: f } = ca("useViewTransitionState"),
    h = J8(s, { relative: o.relative });
  if (!C.isTransitioning) return !1;
  let v = z3(C.currentLocation.pathname, f) || C.currentLocation.pathname,
    E = z3(C.nextLocation.pathname, f) || C.nextLocation.pathname;
  return h9(h.pathname, E) != null || h9(h.pathname, v) != null;
}
new TextEncoder();
function Y4({}) {
  const [s, o] = M.useState(!1);
  function C() {
    o(!0);
  }
  function f() {
    o(!1);
  }
  return c.jsx("header", {
    className: D1.firstsection,
    children: c.jsxs("nav", {
      className: D1.nav,
      children: [
        c.jsx(d1, { to: "/", children: c.jsx(Ul, {}) }),
        c.jsxs("ul", {
          className: D1.navul,
          children: [
            c.jsx(d1, {
              to: "/",
              children: c.jsx("li", { className: D1.lists, children: "Home" }),
            }),
            c.jsx(d1, {
              to: "/aboutus",
              children: c.jsx("li", {
                className: D1.lists,
                children: "About Us",
              }),
            }),
            c.jsx(d1, {
              to: "/services",
              children: c.jsx("li", {
                className: D1.lists,
                children: "Services ",
              }),
            }),
            c.jsx(d1, {
              to: "/Articles",
              children: c.jsx("li", {
                className: D1.lists,
                children: "Articles",
              }),
            }),
            c.jsx(d1, {
              to: "/contactus",
              children: c.jsx("li", {
                className: D1.listcontact,
                children: "Book a Consultation",
              }),
            }),
            c.jsx("li", {
              className: D1.listmenu,
              onClick: C,
              children: c.jsx("a", {
                className: "dropdown",
                children: c.jsxs("svg", {
                  width: "27",
                  height: "26",
                  viewBox: "0 0 27 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    c.jsx("path", {
                      d: "M5.41882 18.4188L20.5915 18.4188",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    c.jsx("path", {
                      d: "M5.41882 13H20.5915",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    c.jsx("path", {
                      d: "M5.41882 7.58118L14.0889 7.58119",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
              }),
            }),
          ],
        }),
        c.jsxs("div", {
          className: `${D1.sidebar} ${s ? D1.active : D1["fade-out"]}`,
          children: [
            c.jsxs("div", {
              className: D1.imageclose,
              children: [
                c.jsx(d1, { to: "/", children: c.jsx(Ul, {}) }),
                c.jsx("a", {
                  className: "dropdown-close",
                  onClick: f,
                  children: c.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: c.jsx("path", {
                      d: "M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243",
                      stroke: "#2B2B2B",
                      strokeWidth: "2",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  }),
                }),
              ],
            }),
            c.jsxs("ul", {
              className: D1.sidebarmenu,
              children: [
                c.jsx(d1, {
                  to: "/",
                  children: c.jsxs("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      f();
                    },
                    children: ["Home", " "],
                  }),
                }),
                c.jsx("hr", {}),
                c.jsx(d1, {
                  to: "/aboutus",
                  children: c.jsx("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      f();
                    },
                    children: "About Us",
                  }),
                }),
                c.jsx("hr", {}),
                c.jsx(d1, {
                  to: "/services",
                  children: c.jsxs("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      f();
                    },
                    children: ["Services", " "],
                  }),
                }),
                c.jsx("hr", {}),
                c.jsx(d1, {
                  to: "/Articles",
                  children: c.jsx("li", {
                    className: D1.sidebarlist,
                    children: "Articles ",
                  }),
                }),
                c.jsx("hr", {}),
                c.jsx(d1, {
                  to: "/contactus",
                  children: c.jsx("li", {
                    className: D1.sidebarcontact,
                    onClick: () => {
                      f();
                    },
                    children: "Book a Consultation",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
const _c = "_advisory_1uhvt_5",
  jc = "_div_1uhvt_29",
  Lc = "_div2_1uhvt_81",
  O7 = { advisory: _c, div: jc, div2: Lc };
function Mc() {
  return c.jsxs("section", {
    className: O7.advisory,
    children: [
      c.jsxs("div", {
        className: O7.div,
        children: [
          c.jsxs("h2", {
            children: [
              "World-class Legal",
              c.jsx("br", {}),
              " Advisory, Tailored",
              c.jsx("br", {}),
              " To Local Needs.",
            ],
          }),
          c.jsx("span", {
            children: "Let us be your legal partner in Africa.",
          }),
        ],
      }),
      c.jsx(d1, {
        to: "/services",
        children: c.jsx("div", {
          className: O7.div2,
          children: c.jsxs("span", {
            children: [
              "View Services",
              c.jsx("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: c.jsx("path", {
                  d: "M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666",
                  stroke: "white",
                  "stroke-width": "2",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                }),
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const Ac = "_purpose_1s3nb_5",
  Tc = "_text_1s3nb_19",
  Rc = "_button_1s3nb_65",
  zc = "_img_1s3nb_107",
  f9 = { purpose: Ac, text: Tc, button: Rc, img: zc },
  wc = "./assets/Purpose-0rdKMhrl.png";
function Oc() {
  return c.jsxs("section", {
    className: f9.purpose,
    children: [
      c.jsx("div", {
        className: f9.img,
        children: c.jsx("img", { src: wc, alt: "" }),
      }),
      c.jsxs("div", {
        className: f9.text,
        children: [
          c.jsxs("div", {
            children: [
              c.jsx("label", { htmlFor: "", children: "About Our Law Firm" }),
              c.jsx("h2", { children: "Our Purpose" }),
            ],
          }),
          c.jsxs("p", {
            children: [
              "Roothe-Kharis & Partners exist to help corporates, SMEs and individuals navigate complexities, seize opportunities, and achieve their goals with confidence.",
              " ",
            ],
          }),
          " ",
          c.jsx("p", {
            children:
              "From boardrooms to the fields, we expertly deliver tailored legal solutions that drive progress, protect interests, and unlock possibilities.",
          }),
          c.jsx("p", {
            children:
              "Leveraging global standards, we provide local legal solutions!",
          }),
          c.jsxs(d1, {
            to: "/aboutus",
            children: [
              " ",
              c.jsxs("button", {
                className: f9.button,
                type: "button",
                children: [
                  "Read Full details",
                  c.jsx("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: c.jsx("path", {
                      d: "M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666",
                      stroke: "#B8824F",
                      "stroke-width": "1",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Dc = "_service_1e0t5_5",
  Nc = "_background1_1e0t5_29",
  Uc = "_background2_1e0t5_41",
  Vc = "_texts_1e0t5_55",
  Bc = "_services_1e0t5_105",
  qc = "_one_1e0t5_121",
  Zc = "_button_1e0t5_241",
  R3 = {
    service: Dc,
    background1: Nc,
    background2: Uc,
    texts: Vc,
    services: Bc,
    one: qc,
    button: Zc,
  },
  Yc = "./assets/Service1-InuAcJqG.png",
  Gc = "./assets/Service3-Bj2Nk7-U.png",
  Xc = "./assets/Service2-CGoK3-pK.png",
  Qc = "./assets/Service4-BrD7tEUK.png",
  Kc = "./assets/Service5-BKrdYtB5.png",
  kc = "./assets/Service6-CCZ3F7ck.png",
  Jc = "./assets/Service7-DJmbXASO.png",
  $c = [
    {
      id: 0,
      image: "service1.png",
      title: "Real Estate & Construction",
      description:
        "Developing, constructing, or expanding a new business operation usually involves the acquisition of real estate properties.",
    },
    {
      id: 1,
      image: "service2.png",
      title: "Corporate & Commercial Law",
      description:
        "The dynamics and frameworks of laws, policies and regulation are continually evolving. Together with our clients, we craft bespoke legal...",
    },
    {
      id: 2,
      image: "service3.png",
      title: "Energy, Power, Infrastructure",
      description:
        "Roothe - Kharis & Partners provide services to Clients across a spectrum of the shipping and maritime industry including ship owners, ship managers etc.",
    },
    {
      id: 3,
      image: "service4.png",
      title: "Venture Capital and Private Equity",
      description:
        "At Roothe-Kharis, we support the objectives of our clients by providing holistic advisory on transactions across the venture capital and private equity life cycle from the...",
    },
    {
      id: 4,
      image: "service5.png",
      title: "Labour and Employment Relations",
      description:
        "Roothe-Kharis & Partners provide sound, practical and comprehensive solutions to SMEs and Large corporations across banking, oil and gas, construction...",
    },
    {
      id: 5,
      image: "service6.png",
      title: "Intellectual Property - Advisory,Registration, Management, etc:",
      description:
        "At Roothe-Kharis & Partners, we have developed a strategic and practical approach to protecting and...",
    },
    {
      id: 6,
      image: "service7.png",
      title: "Alternative Dispute Resolution Services",
      description:
        "At Roothe – Kharis & Partners, we understand that time is a valuable resource and we explore several alternatives in resolving disputes while focused on...",
    },
  ];
function Wc() {
  const s = {
    "service1.png": Yc,
    "service2.png": Gc,
    "service3.png": Xc,
    "service4.png": Qc,
    "service5.png": Kc,
    "service6.png": kc,
    "service7.png": Jc,
  };
  return c.jsx("div", {
    className: R3.background1,
    children: c.jsx("div", {
      className: R3.background2,
      children: c.jsx("div", {
        className: R3.background3,
        children: c.jsxs("section", {
          className: R3.service,
          children: [
            c.jsxs("div", {
              className: R3.texts,
              children: [
                c.jsx("label", {
                  htmlFor: "",
                  children: "Who are we servicing?",
                }),
                c.jsx("h2", { children: "Services We Provide" }),
                c.jsx("p", {
                  children:
                    "Roothe-Kharis & Partners specializes exclusively in transactional, advisory, and non-litigation services.",
                }),
              ],
            }),
            c.jsx("div", {
              className: R3.services,
              children: $c.map((o, C) =>
                c.jsxs(
                  "div",
                  {
                    className: R3.one,
                    children: [
                      c.jsx("img", { src: s[o.image], alt: o.title }),
                      c.jsxs("div", {
                        children: [
                          c.jsx("h2", { children: o.title }),
                          c.jsx("span", { children: o.description }),
                          c.jsx(d1, {
                            to: "/services",
                            state: {
                              serviceid:
                                o.title.split(" ")[0] || "Other Services",
                            },
                            children: c.jsxs("button", {
                              className: R3.button,
                              type: "button",
                              children: [
                                "Read full details",
                                c.jsx("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: c.jsx("path", {
                                    d: "M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666",
                                    stroke: "#B8824F",
                                    "stroke-width": "1",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  C
                )
              ),
            }),
          ],
        }),
      }),
    }),
  });
}
const Fc = "_faq_p164x_5",
  Pc = "_divs_p164x_35",
  Ic = "_extra_p164x_47",
  es = "_active_p164x_67",
  ts = "_div_p164x_35",
  ls = "_svg_p164x_117",
  as = "_rotate_p164x_145",
  l4 = {
    faq: Fc,
    divs: Pc,
    extra: Ic,
    active: es,
    div: ts,
    svg: ls,
    rotate: as,
  },
  ns = [
    {
      id: 1,
      question: "Why Should I Trust Your Firm For My Case?",
      answer:
        "Our legal team provides all of our clients with case-specific strategies designed to obtain the best outcome for their cases.",
    },
    {
      id: 2,
      question: "What Types of Cases Does Your Law Firm Handle?",
      answer:
        "Every case within our area of practice. This means that we never treat two cases the same and avoid the 'cookie-cutter' approach.",
    },
    {
      id: 3,
      question: "What Are Your Opening Hours?",
      answer:
        "We are dedicated to creating litigation strategies that will result in the most favorable judgments for our clients. We are open 9am - 6pm daily.",
    },
    {
      id: 4,
      question: "Do You Charge For Your Consultations?",
      answer:
        "Your goals and needs are always at the forefront of every decision we make and every action we take.",
    },
  ];
function is() {
  const [s, o] = M.useState({ 1: !1, 2: !1, 3: !1, 4: !1 });
  function C(f) {
    o((h) => ({ ...h, [f]: !h[f] }));
  }
  return c.jsxs("section", {
    className: l4.faq,
    children: [
      c.jsx("h2", { children: "FAQs" }),
      c.jsx("div", {
        className: l4.divs,
        children: ns.map((f, h) =>
          c.jsxs(
            "div",
            {
              className: `${l4.extra} ${s[h] ? l4.active : ""}`,
              children: [
                c.jsxs("div", {
                  className: l4.div,
                  onClick: () => C(h),
                  children: [
                    c.jsx("span", { children: f.question }),
                    c.jsx("div", {
                      className: `${l4.svg} ${s[h] ? l4.rotate : ""}`,
                      children: c.jsx("svg", {
                        width: "11",
                        height: "19",
                        viewBox: "0 0 11 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: c.jsx("path", {
                          d: "M1.5 18L9.71927 9.74341L1.5 1.48682",
                          stroke: s[h] ? "#fff" : "#B8824F",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                    }),
                  ],
                }),
                s[h] && c.jsx("p", { children: f.answer }),
              ],
            },
            h
          )
        ),
      }),
    ],
  });
}
const us = "_bg_1731c_9",
  cs = "_footer_1731c_17",
  ss = "_uppist_1731c_49",
  rs = "_details_1731c_69",
  fs = "_footer2_1731c_173",
  os = "_quicks_1731c_205",
  Cs = "_connect_1731c_219",
  ds = "_svg_1731c_315",
  hs = "_label_1731c_327",
  ms = "_footerlogo_1731c_377",
  vs = "_span_1731c_439",
  gs = "_design_1731c_591",
  _2 = {
    bg: us,
    footer: cs,
    uppist: ss,
    details: rs,
    footer2: fs,
    quicks: os,
    connect: Cs,
    svg: ds,
    label: hs,
    footerlogo: ms,
    span: vs,
    design: gs,
  };
function ps() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("svg", {
      className: _2.uppist,
      width: "472",
      height: "138",
      viewBox: "0 0 472 138",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsxs("g", {
          clipPath: "url(#clip0_16_344)",
          children: [
            c.jsx("path", {
              d: "M429.67 103.51C453.048 103.51 472 85.8657 472 64.1002C472 42.3346 453.048 24.6902 429.67 24.6902C406.292 24.6902 387.34 42.3346 387.34 64.1002C387.34 85.8657 406.292 103.51 429.67 103.51Z",
              fill: "#F89A1C",
            }),
            c.jsx("path", {
              d: "M429.75 61.7402C427.661 62.4977 425.393 62.6092 423.24 62.0602C420.912 61.455 418.858 60.0806 417.41 58.1602C419.146 59.6568 421.197 60.7436 423.41 61.3402C425.475 61.8992 427.631 62.0352 429.75 61.7402Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M438.88 55.05L418.17 58.3301C421.771 60.4511 425.827 61.6819 430 61.92C428.783 65.7001 428.979 69.7931 430.55 73.4401L438.88 55.05Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M430 61.9202C428.609 63.693 427.871 65.8911 427.911 68.1443C427.951 70.3974 428.767 72.5679 430.22 74.2902C429.246 72.3805 428.72 70.2739 428.682 68.1306C428.644 65.9872 429.095 63.8633 430 61.9202Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M415.73 74.0002C413.641 74.7577 411.373 74.8692 409.22 74.3202C406.894 73.7169 404.84 72.3463 403.39 70.4302C405.077 71.8644 407.05 72.9242 409.177 73.5397C411.304 74.1551 413.538 74.312 415.73 74.0002Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M424.86 67.28L404.15 70.55C407.736 72.6735 411.779 73.9079 415.94 74.15C414.724 77.9302 414.92 82.0229 416.49 85.67L424.86 67.28Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M415.94 74.1501C414.549 75.923 413.811 78.1211 413.851 80.3743C413.891 82.6274 414.707 84.7979 416.16 86.5201C415.186 84.6104 414.66 82.5039 414.622 80.3605C414.584 78.2172 415.034 76.0933 415.94 74.1501Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M444.2 49.58C442.115 50.3398 439.849 50.4514 437.7 49.9C435.371 49.2926 433.313 47.9188 431.86 46C433.615 47.4961 435.682 48.5824 437.91 49.18C439.959 49.7291 442.097 49.865 444.2 49.58Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M453.33 42.9001L432.62 46.1701C434.555 47.3113 436.629 48.1986 438.79 48.8101C440.623 49.3416 442.507 49.6768 444.41 49.8101C443.217 53.5829 443.427 57.6596 445 61.2901L453.33 42.9001Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M444.41 49.77C443.018 51.5405 442.279 53.7373 442.319 55.9892C442.36 58.2411 443.176 60.4102 444.63 62.13C443.656 60.2221 443.13 58.1172 443.092 55.9754C443.054 53.8337 443.505 51.7114 444.41 49.77Z",
              fill: "#561D5E",
            }),
            c.jsx("path", {
              d: "M64.251 85.4371C57.8783 91.0031 49.5697 93.7861 39.325 93.7861C29.0803 93.7861 20.7717 91.0031 14.399 85.4371C8.02633 79.8711 4.84 72.5708 4.84 63.5361V7.15009H29.04V60.8741C29.04 67.1661 32.4683 70.3121 39.325 70.3121C46.1817 70.3121 49.61 67.1661 49.61 60.8741V7.15009H73.81V63.5361C73.81 72.5708 70.6237 79.8711 64.251 85.4371ZM122.136 29.6561C130.284 29.6561 136.939 32.6811 142.101 38.7311C147.264 44.7811 149.845 52.4041 149.845 61.6001C149.845 70.7961 147.264 78.4191 142.101 84.4691C136.939 90.5191 130.284 93.5441 122.136 93.5441C115.199 93.5441 109.794 91.1644 105.922 86.4051V116.05H83.5373V31.3501H105.922V36.7951C109.794 32.0358 115.199 29.6561 122.136 29.6561ZM108.826 69.7071C110.843 71.8851 113.465 72.9741 116.691 72.9741C119.918 72.9741 122.499 71.8851 124.435 69.7071C126.452 67.5291 127.46 64.8268 127.46 61.6001C127.46 58.3734 126.452 55.6711 124.435 53.4931C122.499 51.3151 119.918 50.2261 116.691 50.2261C113.465 50.2261 110.843 51.3151 108.826 53.4931C106.89 55.6711 105.922 58.3734 105.922 61.6001C105.922 64.8268 106.89 67.5291 108.826 69.7071ZM195.516 29.6561C203.663 29.6561 210.318 32.6811 215.481 38.7311C220.644 44.7811 223.225 52.4041 223.225 61.6001C223.225 70.7961 220.644 78.4191 215.481 84.4691C210.318 90.5191 203.663 93.5441 195.516 93.5441C188.579 93.5441 183.174 91.1644 179.302 86.4051V116.05H156.917V31.3501H179.302V36.7951C183.174 32.0358 188.579 29.6561 195.516 29.6561ZM182.206 69.7071C184.223 71.8851 186.844 72.9741 190.071 72.9741C193.298 72.9741 195.879 71.8851 197.815 69.7071C199.832 67.5291 200.84 64.8268 200.84 61.6001C200.84 58.3734 199.832 55.6711 197.815 53.4931C195.879 51.3151 193.298 50.2261 190.071 50.2261C186.844 50.2261 184.223 51.3151 182.206 53.4931C180.27 55.6711 179.302 58.3734 179.302 61.6001C179.302 64.8268 180.27 67.5291 182.206 69.7071ZM241.55 26.7521C238.162 26.7521 235.218 25.5421 232.717 23.1221C230.297 20.6214 229.087 17.7174 229.087 14.4101C229.087 11.1028 230.297 8.23909 232.717 5.81909C235.218 3.31843 238.162 2.06809 241.55 2.06809C244.857 2.06809 247.721 3.31843 250.141 5.81909C252.642 8.23909 253.892 11.1028 253.892 14.4101C253.892 17.7174 252.642 20.6214 250.141 23.1221C247.721 25.5421 244.857 26.7521 241.55 26.7521ZM230.297 91.8501V31.3501H252.682V91.8501H230.297ZM283.978 49.1371C283.978 50.1051 284.704 50.8714 286.156 51.4361C287.689 52.0008 289.585 52.4444 291.843 52.7671C294.102 53.0091 296.522 53.5334 299.103 54.3401C301.685 55.1468 304.105 56.1551 306.363 57.3651C308.622 58.5751 310.477 60.5111 311.929 63.1731C313.462 65.7544 314.228 68.9004 314.228 72.6111C314.228 76.4831 313.341 79.8711 311.566 82.7751C309.872 85.6791 307.614 87.8571 304.79 89.3091C301.967 90.7611 299.063 91.8098 296.078 92.4551C293.174 93.1811 290.149 93.5441 287.003 93.5441C272.403 93.5441 262.965 88.7444 258.689 79.1451L278.17 70.4331C279.703 74.5471 282.567 76.6041 286.761 76.6041C289.504 76.6041 290.875 75.7168 290.875 73.9421C290.875 72.8934 289.867 72.0464 287.85 71.4011C285.834 70.7558 283.414 70.1104 280.59 69.4651C277.767 68.7391 274.903 67.8114 271.999 66.6821C269.176 65.4721 266.756 63.4958 264.739 60.7531C262.723 58.0104 261.714 54.5821 261.714 50.4681C261.714 43.8534 264.215 38.7311 269.216 35.1011C274.298 31.4711 280.147 29.6561 286.761 29.6561C299.991 29.6561 308.743 34.7784 313.018 45.0231L294.505 51.6781C293.053 48.2901 290.795 46.5961 287.729 46.5961C285.229 46.5961 283.978 47.4431 283.978 49.1371ZM359.086 52.6461H346.381V65.7141C346.381 67.7308 346.865 69.2231 347.833 70.1911C348.801 71.1591 350.213 71.7238 352.068 71.8851C354.004 71.9658 356.344 71.9254 359.086 71.7641V91.8501C346.422 93.6248 337.387 92.5358 331.982 88.5831C326.658 84.6304 323.996 77.4108 323.996 66.9241V52.6461H315.526V31.3501H323.996V21.0651L346.381 14.4101V31.3501H359.086V52.6461Z",
              fill: "#fff",
            }),
          ],
        }),
        c.jsx("defs", {
          children: c.jsx("clipPath", {
            id: "clip0_16_344",
            children: c.jsx("rect", {
              width: "472",
              height: "137.21",
              fill: "white",
            }),
          }),
        }),
      ],
    }),
  });
}
function ys() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("svg", {
      className: _2.design,
      width: "70",
      height: "14",
      viewBox: "0 0 70 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsx("path", {
          d: "M64.2025 12.8283C64.0539 12.8283 63.91 12.8144 63.7707 12.7865C63.6407 12.7587 63.52 12.7262 63.4086 12.689L63.6314 11.7837C63.7057 11.8022 63.7893 11.8208 63.8822 11.8394C63.975 11.8672 64.0632 11.8812 64.1468 11.8812C64.5275 11.8812 64.8432 11.7419 65.0939 11.4633C65.3447 11.194 65.5397 10.8504 65.6789 10.4326L65.8322 9.93116L63.1161 3.14795H64.3L65.6789 6.89473C65.7811 7.18259 65.8879 7.49366 65.9993 7.82795C66.12 8.16223 66.2314 8.48723 66.3336 8.80295H66.3893C66.4914 8.49652 66.5889 8.17616 66.6818 7.84188C66.7747 7.50759 66.8675 7.19188 66.9604 6.89473L68.1722 3.14795H69.2864L66.7375 10.4744C66.5797 10.9201 66.3893 11.3194 66.1664 11.6722C65.9529 12.0251 65.6836 12.3037 65.3586 12.5079C65.0429 12.7215 64.6575 12.8283 64.2025 12.8283Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M59.4413 10.0843C59.1256 10.0843 58.7959 10.01 58.4524 9.86143C58.1181 9.70357 57.8024 9.49 57.5052 9.22071H57.4634L57.3659 9.91714H56.4467V0H57.5888V2.70214L57.5609 3.92786C57.8674 3.65857 58.2017 3.43571 58.5638 3.25929C58.9352 3.07357 59.3067 2.98071 59.6781 2.98071C60.5602 2.98071 61.2288 3.29179 61.6838 3.91393C62.1388 4.53607 62.3663 5.37179 62.3663 6.42107C62.3663 7.19179 62.227 7.85107 61.9484 8.39893C61.6792 8.94679 61.3217 9.36464 60.8759 9.6525C60.4395 9.94036 59.9613 10.0843 59.4413 10.0843ZM59.2463 9.12321C59.8034 9.12321 60.2631 8.88643 60.6252 8.41286C60.9967 7.93 61.1824 7.27071 61.1824 6.435C61.1824 5.69214 61.0431 5.09321 60.7645 4.63821C60.4952 4.17393 60.0402 3.94179 59.3995 3.94179C59.1117 3.94179 58.8192 4.02071 58.522 4.17857C58.2249 4.33643 57.9138 4.56393 57.5888 4.86107V8.41286C57.8859 8.67286 58.1784 8.85857 58.4663 8.97C58.7634 9.07214 59.0234 9.12321 59.2463 9.12321Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M48.2442 10.0843C47.3992 10.0843 46.7214 9.77786 46.2106 9.165C45.6999 8.54286 45.4446 7.67 45.4446 6.54643C45.4446 5.81286 45.5792 5.18143 45.8485 4.65214C46.1271 4.11357 46.4892 3.70036 46.9349 3.4125C47.3899 3.12464 47.8728 2.98071 48.3835 2.98071C48.7735 2.98071 49.1124 3.05036 49.4003 3.18964C49.6882 3.32893 49.9807 3.51929 50.2778 3.76071L50.2221 2.60464V0H51.3782V9.91714H50.431L50.3335 9.12321H50.2917C50.0317 9.38321 49.7253 9.61071 49.3724 9.80572C49.0196 9.99143 48.6435 10.0843 48.2442 10.0843ZM48.4949 9.12321C49.0892 9.12321 49.6649 8.81214 50.2221 8.19V4.65214C49.9342 4.39214 49.6557 4.21107 49.3864 4.10893C49.1264 3.9975 48.8571 3.94179 48.5785 3.94179C48.2164 3.94179 47.8867 4.05321 47.5896 4.27607C47.3017 4.48964 47.0696 4.79143 46.8931 5.18143C46.7167 5.56214 46.6285 6.0125 46.6285 6.5325C46.6285 7.34036 46.791 7.97643 47.116 8.44071C47.441 8.89571 47.9006 9.12321 48.4949 9.12321Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M41.7662 10.0845C41.1626 10.0845 40.6147 9.94524 40.1226 9.66667C39.6305 9.37882 39.2405 8.97024 38.9526 8.44096C38.6647 7.91167 38.5208 7.28024 38.5208 6.54667C38.5208 5.80381 38.6647 5.16774 38.9526 4.63846C39.2497 4.10917 39.6305 3.7006 40.0947 3.41274C40.559 3.12489 41.0465 2.98096 41.5572 2.98096C42.4208 2.98096 43.0847 3.26881 43.549 3.84453C44.0226 4.42024 44.2594 5.19096 44.2594 6.15667C44.2594 6.27739 44.2547 6.3981 44.2455 6.51881C44.2455 6.63024 44.2362 6.72774 44.2176 6.81131H39.649C39.6955 7.52631 39.9183 8.09739 40.3176 8.52453C40.7262 8.95167 41.2555 9.16524 41.9055 9.16524C42.2305 9.16524 42.5276 9.11881 42.7969 9.02596C43.0755 8.92381 43.3401 8.79381 43.5908 8.63596L43.9947 9.3881C43.7069 9.57381 43.3772 9.73631 43.0058 9.8756C42.6437 10.0149 42.2305 10.0845 41.7662 10.0845ZM39.6351 5.98953H43.2565C43.2565 5.30239 43.108 4.78239 42.8108 4.42953C42.523 4.06739 42.1144 3.88631 41.5851 3.88631C41.1115 3.88631 40.6844 4.07203 40.3037 4.44346C39.9322 4.8056 39.7094 5.32096 39.6351 5.98953Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M31.4052 9.91739V3.1481H32.3523L32.4498 4.1231H32.4916C32.8166 3.7981 33.1602 3.52881 33.5223 3.31524C33.8844 3.09239 34.2976 2.98096 34.7619 2.98096C35.4769 2.98096 35.9969 3.20846 36.3219 3.66346C36.6562 4.10917 36.8234 4.76381 36.8234 5.62739V9.91739H35.6812V5.7806C35.6812 5.14917 35.5791 4.68953 35.3748 4.40167C35.1705 4.11381 34.8455 3.96989 34.3998 3.96989C34.0562 3.96989 33.7451 4.0581 33.4666 4.23453C33.1973 4.41096 32.8909 4.67096 32.5473 5.01453V9.91739H31.4052Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M26.6708 13.0374C25.8444 13.0374 25.1712 12.8795 24.6512 12.5638C24.1312 12.2481 23.8712 11.7977 23.8712 11.2127C23.8712 10.9249 23.9594 10.6463 24.1358 10.377C24.3122 10.117 24.5537 9.88489 24.8601 9.6806V9.62489C24.6929 9.52274 24.549 9.37881 24.4283 9.1931C24.3169 9.00739 24.2612 8.78453 24.2612 8.52453C24.2612 8.23667 24.3401 7.98596 24.4979 7.77239C24.6558 7.55881 24.8229 7.39167 24.9994 7.27096V7.21524C24.7765 7.02953 24.5722 6.77882 24.3865 6.4631C24.2101 6.14739 24.1219 5.78989 24.1219 5.3906C24.1219 4.89846 24.2379 4.47131 24.4701 4.10917C24.7022 3.74703 25.0133 3.46846 25.4033 3.27346C25.7933 3.07846 26.2158 2.98096 26.6708 2.98096C26.8565 2.98096 27.0329 2.99953 27.2001 3.03667C27.3672 3.06453 27.5112 3.10167 27.6319 3.1481H29.9858V4.0256H28.5929C28.7508 4.17417 28.8808 4.37381 28.9829 4.62453C29.0944 4.86596 29.1501 5.1306 29.1501 5.41846C29.1501 5.90131 29.0387 6.31917 28.8158 6.67203C28.5929 7.02489 28.2958 7.29881 27.9244 7.49381C27.5529 7.67953 27.1351 7.77239 26.6708 7.77239C26.3087 7.77239 25.9697 7.69346 25.654 7.5356C25.5333 7.63774 25.4312 7.75381 25.3476 7.88381C25.264 8.00453 25.2222 8.15774 25.2222 8.34346C25.2222 8.55703 25.3058 8.73346 25.4729 8.87274C25.6494 9.01203 25.9651 9.08167 26.4201 9.08167H27.7294C28.5187 9.08167 29.1083 9.21167 29.4983 9.47167C29.8976 9.72239 30.0972 10.131 30.0972 10.6974C30.0972 11.1152 29.9579 11.5006 29.6794 11.8535C29.4008 12.2063 29.0062 12.4895 28.4954 12.7031C27.9847 12.926 27.3765 13.0374 26.6708 13.0374ZM26.6708 7.00631C27.0608 7.00631 27.3951 6.86239 27.6737 6.57453C27.9615 6.27739 28.1054 5.88274 28.1054 5.3906C28.1054 4.89846 27.9662 4.5131 27.6876 4.23453C27.409 3.95596 27.0701 3.81667 26.6708 3.81667C26.2715 3.81667 25.9326 3.95596 25.654 4.23453C25.3754 4.5131 25.2362 4.89846 25.2362 5.3906C25.2362 5.88274 25.3754 6.27739 25.654 6.57453C25.9419 6.86239 26.2808 7.00631 26.6708 7.00631ZM26.8379 12.2435C27.4879 12.2435 28.0079 12.0995 28.3979 11.8117C28.7879 11.5331 28.9829 11.2174 28.9829 10.8645C28.9829 10.5488 28.8622 10.3306 28.6208 10.2099C28.3887 10.0892 28.0544 10.0288 27.6179 10.0288H26.4479C26.3179 10.0288 26.174 10.0195 26.0162 10.001C25.8676 9.98239 25.719 9.95453 25.5704 9.91739C25.329 10.0938 25.1526 10.2795 25.0412 10.4745C24.9297 10.6695 24.874 10.8645 24.874 11.0595C24.874 11.4217 25.0458 11.7095 25.3894 11.9231C25.7422 12.1367 26.2251 12.2435 26.8379 12.2435Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M20.9587 9.91692V3.14763H22.1009V9.91692H20.9587ZM21.5437 1.75477C21.3209 1.75477 21.1351 1.68977 20.9866 1.55977C20.8473 1.42049 20.7776 1.23477 20.7776 1.00263C20.7776 0.779773 20.8473 0.598702 20.9866 0.459417C21.1351 0.320131 21.3209 0.250488 21.5437 0.250488C21.7666 0.250488 21.9476 0.320131 22.0869 0.459417C22.2355 0.598702 22.3098 0.779773 22.3098 1.00263C22.3098 1.23477 22.2355 1.42049 22.0869 1.55977C21.9476 1.68977 21.7666 1.75477 21.5437 1.75477Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M16.8922 10.0845C16.4094 10.0845 15.9497 9.99632 15.5133 9.81989C15.0769 9.63417 14.6962 9.41131 14.3712 9.15132L14.9422 8.38524C15.2394 8.61739 15.5458 8.81239 15.8615 8.97024C16.1772 9.11881 16.5347 9.1931 16.934 9.1931C17.3797 9.1931 17.714 9.09096 17.9369 8.88667C18.1597 8.6731 18.2712 8.42239 18.2712 8.13453C18.2712 7.90239 18.1922 7.70739 18.0344 7.54953C17.8858 7.39167 17.6908 7.26167 17.4494 7.15953C17.2172 7.0481 16.9758 6.94596 16.7251 6.8531C16.4094 6.73239 16.0983 6.59774 15.7919 6.44917C15.4854 6.29131 15.2347 6.09167 15.0397 5.85024C14.8447 5.59953 14.7472 5.28381 14.7472 4.9031C14.7472 4.35524 14.9515 3.90024 15.3601 3.5381C15.7779 3.16667 16.3537 2.98096 17.0872 2.98096C17.5051 2.98096 17.8951 3.05524 18.2572 3.20381C18.6194 3.35239 18.9304 3.53346 19.1904 3.74703L18.6333 4.47131C18.4012 4.29489 18.1597 4.15096 17.909 4.03953C17.6583 3.9281 17.3844 3.87239 17.0872 3.87239C16.6601 3.87239 16.3444 3.96989 16.1401 4.16489C15.9451 4.35989 15.8476 4.58739 15.8476 4.84739C15.8476 5.06096 15.9172 5.23739 16.0565 5.37667C16.1958 5.50667 16.3769 5.62274 16.5997 5.72489C16.8226 5.81774 17.0594 5.91524 17.3101 6.01739C17.6351 6.1381 17.9554 6.27739 18.2712 6.43524C18.5869 6.58381 18.8469 6.7881 19.0512 7.0481C19.2647 7.29881 19.3715 7.63774 19.3715 8.06489C19.3715 8.42703 19.274 8.76132 19.079 9.06774C18.8933 9.37417 18.6147 9.62024 18.2433 9.80596C17.8812 9.99167 17.4308 10.0845 16.8922 10.0845Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M10.9573 10.0845C10.3538 10.0845 9.8059 9.94524 9.31376 9.66667C8.82162 9.37882 8.43162 8.97024 8.14376 8.44096C7.8559 7.91167 7.71198 7.28024 7.71198 6.54667C7.71198 5.80381 7.8559 5.16774 8.14376 4.63846C8.4409 4.10917 8.82162 3.7006 9.2859 3.41274C9.75019 3.12489 10.2377 2.98096 10.7484 2.98096C11.612 2.98096 12.2759 3.26881 12.7402 3.84453C13.2138 4.42024 13.4505 5.19096 13.4505 6.15667C13.4505 6.27739 13.4459 6.3981 13.4366 6.51881C13.4366 6.63024 13.4273 6.72774 13.4088 6.81131H8.84019C8.88662 7.52631 9.10948 8.09739 9.50876 8.52453C9.91733 8.95167 10.4466 9.16524 11.0966 9.16524C11.4216 9.16524 11.7188 9.11881 11.988 9.02596C12.2666 8.92381 12.5313 8.79381 12.782 8.63596L13.1859 9.3881C12.898 9.57381 12.5684 9.73631 12.197 9.8756C11.8348 10.0149 11.4216 10.0845 10.9573 10.0845ZM8.82626 5.98953H12.4477C12.4477 5.30239 12.2991 4.78239 12.002 4.42953C11.7141 4.06739 11.3055 3.88631 10.7763 3.88631C10.3027 3.88631 9.87555 4.07203 9.49483 4.44346C9.1234 4.8056 8.90055 5.32096 8.82626 5.98953Z",
          fill: "#ffffff",
        }),
        c.jsx("path", {
          d: "M2.79964 10.0843C1.95464 10.0843 1.27679 9.77786 0.766072 9.165C0.255357 8.54286 0 7.67 0 6.54643C0 5.81286 0.134643 5.18143 0.403929 4.65214C0.6825 4.11357 1.04464 3.70036 1.49036 3.4125C1.94536 3.12464 2.42821 2.98071 2.93893 2.98071C3.32893 2.98071 3.66786 3.05036 3.95571 3.18964C4.24357 3.32893 4.53607 3.51929 4.83321 3.76071L4.7775 2.60464V0H5.93357V9.91714H4.98643L4.88893 9.12321H4.84714C4.58714 9.38321 4.28071 9.61071 3.92786 9.80572C3.575 9.99143 3.19893 10.0843 2.79964 10.0843ZM3.05036 9.12321C3.64464 9.12321 4.22036 8.81214 4.7775 8.19V4.65214C4.48964 4.39214 4.21107 4.21107 3.94179 4.10893C3.68179 3.9975 3.4125 3.94179 3.13393 3.94179C2.77179 3.94179 2.44214 4.05321 2.145 4.27607C1.85714 4.48964 1.625 4.79143 1.44857 5.18143C1.27214 5.56214 1.18393 6.0125 1.18393 6.5325C1.18393 7.34036 1.34643 7.97643 1.67143 8.44071C1.99643 8.89571 2.45607 9.12321 3.05036 9.12321Z",
          fill: "#ffffff",
        }),
      ],
    }),
  });
}
function bs() {
  return c.jsx(c.Fragment, {
    children: c.jsxs("svg", {
      width: "139",
      height: "43",
      viewBox: "0 0 139 43",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        c.jsx("path", {
          d: "M22.5 2.22998L41.9856 12.1157V31.8872L22.5 41.7729L3.01443 31.8872V12.1157L22.5 2.22998Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M22.4906 42.6143L1 32.097V11.0647L22.4906 0.547363L43.9839 11.0647V32.097L22.4906 42.6143ZM2.9127 31.1665L22.4906 40.7463L42.0712 31.1665V11.9999L22.4906 2.41774L2.9127 11.9999V31.1665Z",
          fill: "#B8824F",
        }),
        c.jsx("path", {
          d: "M27.6434 18.4795C27.6399 18.5533 27.6229 18.6261 27.593 18.6955C27.5369 18.6955 27.4473 18.6955 27.3297 18.6955L26.9461 18.7097L26.5624 18.724H26.2824C25.9997 18.7308 25.7172 18.706 25.4422 18.6504C25.2295 18.597 25.0366 18.4981 24.8821 18.3632C24.7074 18.2072 24.5428 18.0431 24.3893 17.8718C24.1708 17.6345 23.93 17.371 23.6639 17.0625L22.8238 16.0893C22.5298 15.7475 22.2637 15.4199 21.9837 15.1066C21.7036 14.7933 21.502 14.5132 21.3032 14.2616C21.1043 14.01 20.9615 13.8391 20.8831 13.7299C20.8891 13.6435 20.9118 13.5585 20.9503 13.4783C20.9889 13.4111 21.041 13.35 21.1043 13.298C21.499 13.255 21.8868 13.1754 22.2609 13.0606C22.5993 12.9566 22.916 12.8076 23.1991 12.6191C23.4572 12.444 23.669 12.2248 23.8208 11.9759C23.9779 11.7127 24.0567 11.421 24.0504 11.1261C24.0619 10.8164 23.992 10.5083 23.846 10.2242C23.7196 9.99041 23.5272 9.78661 23.2859 9.63077C23.0441 9.47808 22.7691 9.36756 22.4766 9.30559C22.1598 9.23804 21.8342 9.20454 21.5076 9.2059H21.166L20.7907 9.22014C20.6675 9.22014 20.5471 9.23201 20.435 9.24151C20.323 9.251 20.2306 9.26049 20.155 9.26999L20.1214 9.90611C20.1214 10.0984 20.1018 10.3215 20.0962 10.5778C20.0906 10.8342 20.0962 11.1 20.0962 11.3777L20.0626 15.4128C20.0626 15.4793 20.0626 15.6375 20.0626 15.8875C20.0626 16.1249 20.0626 16.405 20.0626 16.6874C20.0626 16.9699 20.0794 17.231 20.0962 17.4683C20.0872 17.6095 20.1189 17.7505 20.1886 17.879C20.3706 18.0332 20.7683 18.1519 21.3816 18.2397C21.4002 18.3108 21.4115 18.3831 21.4152 18.4557C21.4176 18.4897 21.4176 18.5238 21.4152 18.5578C21.4152 18.5958 21.4068 18.6385 21.39 18.686H20.9139C20.6983 18.686 20.4434 18.686 20.1466 18.6717C19.8497 18.6575 19.5865 18.6575 19.3065 18.6575C19.0264 18.6575 18.7744 18.6575 18.4887 18.6717C18.2031 18.686 17.9567 18.686 17.741 18.686H17.2425C17.2313 18.6385 17.2229 18.5958 17.2173 18.5578C17.2149 18.5238 17.2149 18.4897 17.2173 18.4557C17.2211 18.3831 17.2323 18.3108 17.2509 18.2397C17.853 18.1519 18.2395 18.038 18.4103 17.8932C18.4817 17.765 18.5163 17.6243 18.5111 17.4826C18.5363 17.2452 18.5531 16.9865 18.5643 16.7017C18.5755 16.4168 18.5811 16.151 18.5811 15.9018V15.4199L18.6316 11.3848V10.9671C18.6316 10.7701 18.6316 10.5683 18.6148 10.3595C18.598 10.1506 18.5895 9.96307 18.5727 9.7898C18.5755 9.68468 18.5487 9.58052 18.4943 9.48598C18.369 9.39402 18.2205 9.32746 18.0603 9.29135C17.8614 9.23913 17.615 9.18929 17.321 9.13944C17.302 9.06847 17.2907 8.99617 17.2873 8.92345C17.285 8.89025 17.285 8.85695 17.2873 8.82376C17.2873 8.7834 17.2873 8.74068 17.3125 8.69321H17.559C17.6654 8.69321 17.783 8.69321 17.909 8.67897H18.1219C18.2025 8.67912 18.2829 8.67436 18.3627 8.66473L19.2645 8.62912L20.253 8.58402L21.1884 8.54842C21.4852 8.54842 21.7484 8.53418 21.9557 8.53418C22.3858 8.53479 22.8153 8.56096 23.2411 8.61251C23.6628 8.66201 24.0701 8.77708 24.4425 8.95193C24.8101 9.12889 25.1178 9.38311 25.3358 9.69011C25.5901 10.0774 25.7113 10.5173 25.6859 10.96C25.695 11.282 25.625 11.6021 25.4804 11.9C25.3357 12.1979 25.1196 12.467 24.8457 12.6903C24.2192 13.1817 23.4309 13.4996 22.5858 13.6018C22.6754 13.7252 22.8182 13.9056 23.0114 14.1429C23.2047 14.3803 23.4231 14.639 23.6667 14.9215C23.9104 15.2039 24.1652 15.5006 24.4341 15.8092C24.7029 16.1178 24.9549 16.4073 25.1986 16.6756C25.4422 16.9438 25.6663 17.1811 25.8651 17.3876C26.0037 17.5356 26.1544 17.6752 26.316 17.8054C26.4781 17.9286 26.6545 18.0375 26.8424 18.1306C26.9919 18.208 27.1629 18.2506 27.3381 18.254H27.6042C27.6203 18.2867 27.6315 18.321 27.6378 18.3561C27.6442 18.397 27.6461 18.4383 27.6434 18.4795Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M21.5552 24.8809C21.5516 24.9536 21.5404 25.0259 21.5216 25.0969C21.2248 25.1468 20.9783 25.1943 20.7795 25.2417C20.6189 25.2733 20.4699 25.3377 20.3454 25.4292C20.2972 25.4966 20.2711 25.5736 20.2698 25.6524C20.253 25.7742 20.239 25.9237 20.2278 26.101C20.2166 26.2782 20.2082 26.4728 20.2026 26.6849C20.2026 26.8985 20.2026 27.105 20.2026 27.3067L20.1662 31.3418V32.042C20.1662 32.315 20.1662 32.5808 20.1662 32.8348C20.1662 33.0888 20.1858 33.3095 20.211 33.5137C20.2088 33.6369 20.2435 33.7585 20.3118 33.8673C20.4376 33.9643 20.5895 34.0336 20.7543 34.0691C20.9475 34.1165 21.18 34.1664 21.4544 34.2139C21.4732 34.2849 21.4844 34.3571 21.488 34.4299C21.4903 34.4638 21.4903 34.4979 21.488 34.5319C21.488 34.5699 21.4796 34.6126 21.4628 34.6601H20.9755C20.7608 34.6601 20.5088 34.6553 20.2194 34.6459C19.9394 34.6459 19.6593 34.6316 19.3933 34.6316C19.1272 34.6316 18.8584 34.6316 18.5756 34.6459C18.2927 34.6601 18.0407 34.6601 17.825 34.6601H17.349C17.3378 34.6126 17.3294 34.5699 17.3238 34.5319C17.3214 34.4979 17.3214 34.4638 17.3238 34.4299C17.3273 34.3571 17.3386 34.2849 17.3574 34.2139C17.6069 34.1748 17.8537 34.1241 18.0967 34.0619C18.258 34.0263 18.4074 33.9597 18.5335 33.8673C18.5878 33.7653 18.6137 33.654 18.6092 33.5421C18.626 33.3546 18.6428 33.1315 18.6596 32.8704C18.6764 32.6093 18.6876 32.3411 18.6932 32.0634C18.6988 31.7857 18.6932 31.5436 18.6932 31.3513L18.7268 27.3162C18.7268 27.105 18.7268 26.8914 18.7268 26.6801C18.7268 26.4689 18.7128 26.2766 18.7016 26.1033C18.6937 25.9579 18.6769 25.8129 18.6512 25.669C18.645 25.5921 18.6161 25.5178 18.5672 25.453C18.4417 25.3571 18.2894 25.2901 18.1247 25.2583C17.9315 25.2156 17.6962 25.1705 17.4246 25.1207C17.4058 25.0497 17.3945 24.9774 17.391 24.9047C17.3886 24.8715 17.3886 24.8382 17.391 24.805C17.391 24.7646 17.391 24.7219 17.4162 24.6744H17.8922C18.1079 24.6744 18.3627 24.6744 18.6512 24.6887C18.9396 24.7029 19.2113 24.7029 19.4913 24.7029C19.7713 24.7029 20.0262 24.7029 20.309 24.6887C20.5919 24.6744 20.8439 24.6744 21.0595 24.6744H21.5356C21.5356 24.7219 21.5552 24.7646 21.5608 24.805C21.5603 24.8304 21.5585 24.8557 21.5552 24.8809ZM27.551 34.4227C27.5533 34.4567 27.5533 34.4908 27.551 34.5248C27.551 34.5628 27.5426 34.6055 27.5258 34.653H27.2457L26.8705 34.6672L26.4616 34.6838H26.0891C25.815 34.69 25.5416 34.6579 25.2798 34.5889C25.1064 34.5446 24.9467 34.4684 24.8121 34.3658C24.687 34.2597 24.5003 34.0794 24.252 33.8246C24.0084 33.5682 23.7368 33.2787 23.4427 32.9511C23.1487 32.6236 22.8406 32.2794 22.5242 31.9186C22.2077 31.5578 21.9109 31.2184 21.6364 30.9003L20.9307 30.072C20.7319 29.8346 20.5975 29.6732 20.5303 29.5972L23.5799 26.6374C23.8292 26.4 24.0476 26.1627 24.2352 25.9657C24.3731 25.8431 24.4698 25.6915 24.5153 25.5266C24.5151 25.4598 24.4905 25.3947 24.4448 25.3403C24.3992 25.2859 24.3348 25.2448 24.2604 25.2227C24.077 25.1526 23.8811 25.1085 23.6808 25.0922C23.6591 25.0216 23.6478 24.9491 23.6471 24.8762C23.6465 24.7962 23.6578 24.7164 23.6808 24.6388H24.2772H24.5741C24.7048 24.6388 24.8476 24.6388 25.0026 24.6388H25.4702H25.8959C26.1237 24.6388 26.3421 24.6341 26.5512 24.6246C26.7612 24.6246 26.9293 24.6104 27.0525 24.6104H27.4445C27.4592 24.6378 27.4704 24.6664 27.4781 24.6958C27.4907 24.7385 27.4973 24.7823 27.4978 24.8263C27.4971 24.8727 27.4905 24.9189 27.4781 24.964C27.4711 24.9958 27.4598 25.0269 27.4445 25.0566C27.2177 25.0969 27.0301 25.1325 26.8845 25.1658C26.7159 25.208 26.5569 25.2738 26.414 25.3604C26.2052 25.4905 26.0094 25.635 25.8287 25.7924C25.5991 25.987 25.2938 26.2671 24.9073 26.6018L22.0649 29.2673C22.1349 29.3433 22.2581 29.4881 22.4402 29.6993C22.6222 29.9106 22.8406 30.174 23.0955 30.4517C23.3503 30.7294 23.6275 31.0499 23.9216 31.3822C24.2156 31.7145 24.5097 32.0373 24.8009 32.3482C25.0922 32.6592 25.361 32.9487 25.6187 33.2075C25.8763 33.4662 26.0863 33.6703 26.2572 33.8151C26.3982 33.9335 26.562 34.0306 26.7416 34.1023C26.9299 34.1803 27.137 34.2202 27.3465 34.2186H27.5174C27.5353 34.2857 27.5466 34.354 27.551 34.4227Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M28.8308 21.5083H16.0356V21.8833H28.8308V21.5083Z",
          fill: "#243D81",
        }),
        c.jsx("path", {
          d: "M59.1343 20.3144C59.1372 20.354 59.1372 20.3936 59.1343 20.4331C59.1277 20.4679 59.1174 20.502 59.1035 20.5352L58.5434 20.547H57.8993C57.7094 20.5541 57.5195 20.5316 57.3392 20.4806C57.1847 20.4268 57.0454 20.3459 56.9303 20.2432C56.8767 20.1993 56.8297 20.1498 56.7903 20.0961C56.7259 20.013 56.6503 19.9109 56.5635 19.7875L56.2834 19.384C56.1789 19.2368 56.0753 19.0873 55.9726 18.9354C55.7318 18.5794 55.4629 18.183 55.1661 17.7486C55.1668 17.6751 55.1877 17.6028 55.2271 17.5373C55.2664 17.4718 55.3232 17.4149 55.3929 17.3712C55.5945 17.3327 55.7907 17.2762 55.9782 17.2027C56.1506 17.1397 56.3095 17.0531 56.4487 16.9463C56.5709 16.8395 56.6662 16.7127 56.7287 16.5737C56.8053 16.409 56.8424 16.2331 56.8379 16.0562C56.8495 15.9141 56.8251 15.7714 56.7661 15.6379C56.7072 15.5045 56.6151 15.3833 56.4962 15.2825C56.3773 15.1817 56.2343 15.1037 56.0769 15.0537C55.9194 15.0038 55.7511 14.983 55.5833 14.9929C55.5413 14.9929 55.4797 14.9929 55.3929 14.9929H55.1269C55.0373 14.9929 54.9532 14.9929 54.8692 15.0071H54.6928C54.6928 15.1187 54.6928 15.2445 54.6928 15.3489C54.6928 15.4533 54.6928 15.5602 54.6928 15.6836V16.0349L54.662 18.7479C54.662 18.8594 54.662 18.971 54.662 19.0849C54.662 19.1989 54.662 19.308 54.6844 19.4101C54.6918 19.5056 54.7106 19.6002 54.7404 19.6926C54.76 19.7641 54.8038 19.8293 54.8664 19.8801C54.919 19.9263 54.9772 19.9677 55.0401 20.0035C55.136 20.0468 55.2423 20.0712 55.3509 20.0747C55.3664 20.1066 55.3768 20.1401 55.3817 20.1744C55.3966 20.253 55.3966 20.3331 55.3817 20.4118C55.3764 20.4467 55.3661 20.481 55.3509 20.5138H55.0709C54.886 20.5138 54.6788 20.5138 54.4548 20.5138C54.2307 20.5138 54.0487 20.5138 53.9115 20.5138C53.7743 20.5138 53.581 20.5138 53.3766 20.5138C53.1722 20.5138 52.9845 20.5138 52.8165 20.5138H52.402C52.3868 20.481 52.3765 20.4467 52.3712 20.4118C52.3563 20.3331 52.3563 20.253 52.3712 20.1744C52.3761 20.1401 52.3865 20.1066 52.402 20.0747C52.6223 20.0702 52.8339 20.0014 53.0013 19.8801C53.0578 19.8261 53.0989 19.762 53.1218 19.6926C53.1535 19.6004 53.1741 19.5058 53.1834 19.4101C53.1834 19.308 53.2002 19.1989 53.203 19.0849C53.2058 18.971 53.203 18.8476 53.203 18.7479L53.2254 16.061C53.2254 15.8379 53.2254 15.629 53.2254 15.4367C53.2345 15.2834 53.1755 15.1326 53.0601 15.0142C52.9945 14.963 52.9187 14.922 52.8361 14.8932C52.7228 14.8535 52.6027 14.8294 52.4805 14.822C52.4652 14.789 52.454 14.7548 52.4468 14.7199C52.4439 14.6804 52.4439 14.6408 52.4468 14.6012C52.444 14.5262 52.4613 14.4515 52.4973 14.3829H53.0573L53.8135 14.3662L54.69 14.3473L55.5301 14.3306H56.1378C56.4336 14.3289 56.7287 14.356 57.0172 14.4113C57.2788 14.4579 57.5271 14.5474 57.7481 14.6748C57.9589 14.7955 58.1311 14.9586 58.2494 15.1495C58.3821 15.3755 58.4466 15.6259 58.437 15.8782C58.4383 16.0796 58.3946 16.2793 58.3082 16.4669C58.2228 16.6462 58.1016 16.8116 57.9497 16.9558C57.7948 17.1007 57.6132 17.2234 57.412 17.319C57.204 17.4224 56.9809 17.5022 56.7483 17.5563C57.0284 17.9598 57.2888 18.3278 57.524 18.6553L57.7901 19.0612L58.0701 19.4433C58.1569 19.562 58.2326 19.6617 58.2998 19.7424C58.3411 19.8006 58.3909 19.854 58.4482 19.9014C58.5103 19.9588 58.5855 20.0048 58.6693 20.0366C58.7531 20.0684 58.8437 20.0854 58.9355 20.0866H59.0923C59.1065 20.1188 59.1169 20.1522 59.1231 20.1863C59.1302 20.2287 59.134 20.2715 59.1343 20.3144Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M67.0091 17.3115C67.0136 17.7664 66.9078 18.2172 66.6983 18.636C66.5016 19.0344 66.2164 19.397 65.8581 19.7041C65.4978 20.0098 65.0695 20.2518 64.598 20.4162C64.1048 20.587 63.5765 20.6733 63.0437 20.6701C62.5639 20.6772 62.0875 20.6012 61.6435 20.447C61.2457 20.3048 60.8886 20.0919 60.5961 19.8228C60.3038 19.5478 60.0816 19.2245 59.9436 18.8733C59.7913 18.4781 59.7165 18.0643 59.7224 17.6486C59.7151 17.1801 59.8189 16.7152 60.0276 16.2814C60.218 15.8837 60.5023 15.5232 60.863 15.2219C61.2237 14.9207 61.6532 14.6851 62.1252 14.5297C62.6206 14.3671 63.1482 14.2865 63.6794 14.2923C64.1588 14.2864 64.6348 14.3614 65.0796 14.5131C65.4788 14.6509 65.8366 14.8626 66.127 15.1326C66.4179 15.4084 66.6399 15.7314 66.7795 16.082C66.9351 16.4784 67.0126 16.8938 67.0091 17.3115ZM65.4633 17.4065C65.4645 17.1042 65.4174 16.8032 65.3233 16.5116C65.2367 16.236 65.0966 15.9745 64.9088 15.7378C64.7302 15.5084 64.4928 15.3161 64.2143 15.1753C63.9184 15.028 63.58 14.9532 63.2369 14.9593C63.0332 14.9626 62.8309 14.9882 62.6348 15.0353C62.4567 15.0703 62.2859 15.128 62.128 15.2061C61.8608 15.4847 61.6507 15.7992 61.5063 16.1366C61.3231 16.5948 61.2387 17.0772 61.257 17.5607C61.2562 17.8658 61.3013 18.1697 61.3914 18.4651C61.4748 18.7439 61.615 19.0082 61.8059 19.246C61.9913 19.461 62.2279 19.6405 62.5004 19.7729C62.7959 19.9186 63.1333 19.9917 63.475 19.9842C63.6795 19.9816 63.8828 19.9569 64.0799 19.9106C64.2599 19.8758 64.4327 19.8182 64.5924 19.7397C64.7224 19.611 64.8386 19.4728 64.9396 19.3267C65.0546 19.1657 65.1485 18.9946 65.2196 18.8164C65.3022 18.6109 65.3632 18.3996 65.4017 18.185C65.4469 17.9249 65.4675 17.6622 65.4633 17.3993V17.4065Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M75.4217 17.3115C75.4261 17.7664 75.3203 18.2172 75.1108 18.636C74.9141 19.0344 74.6289 19.397 74.2707 19.7041C73.9109 20.0092 73.4836 20.2512 73.0133 20.4162C72.5199 20.5865 71.9918 20.6728 71.459 20.6701C70.9793 20.6771 70.5028 20.6012 70.0588 20.447C69.6619 20.3048 69.3057 20.0919 69.0143 19.8228C68.721 19.5483 68.4987 19.2249 68.3617 18.8733C68.2084 18.4782 68.1328 18.0645 68.1377 17.6486C68.1319 17.1802 68.2356 16.7155 68.443 16.2814C68.6334 15.8833 68.918 15.5225 69.2792 15.2213C69.6404 14.92 70.0706 14.6846 70.5433 14.5297C71.0386 14.3667 71.5663 14.2861 72.0975 14.2923C72.5769 14.2866 73.0529 14.3616 73.4978 14.5131C73.8961 14.651 74.253 14.8626 74.5423 15.1326C74.8341 15.4083 75.057 15.7313 75.1976 16.082C75.3512 16.4787 75.4269 16.894 75.4217 17.3115ZM73.8786 17.4065C73.8785 17.1043 73.8314 16.8034 73.7386 16.5116C73.6497 16.2367 73.5098 15.9755 73.3241 15.7378C73.1448 15.5089 72.9076 15.3167 72.6296 15.1753C72.3325 15.0283 71.9934 14.9535 71.6495 14.9593C71.4467 14.9625 71.2452 14.988 71.0502 15.0353C70.8712 15.0704 70.6994 15.128 70.5405 15.2062C70.2734 15.4847 70.0632 15.7992 69.9188 16.1366C69.7357 16.5948 69.6512 17.0772 69.6696 17.5607C69.6682 17.866 69.7144 18.1701 69.8068 18.4651C69.8889 18.7442 70.0293 19.0087 70.2212 19.246C70.4058 19.4607 70.6414 19.6402 70.9129 19.7729C71.2084 19.9186 71.5458 19.9917 71.8875 19.9842C72.0929 19.9814 72.2971 19.9567 72.4952 19.9106C72.6752 19.8758 72.848 19.8182 73.0077 19.7397C73.1367 19.6104 73.2529 19.4723 73.3549 19.3267C73.4688 19.1652 73.5626 18.9942 73.635 18.8164C73.7162 18.6106 73.7771 18.3994 73.817 18.185C73.8622 17.9249 73.8828 17.6622 73.8786 17.3993V17.4065Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M81.619 15.7052C81.5781 15.7173 81.5359 15.726 81.493 15.7313C81.4445 15.7338 81.3959 15.7338 81.3474 15.7313C81.2634 15.7348 81.1795 15.7235 81.1009 15.6981C81.0751 15.5751 81.0259 15.4565 80.9553 15.3468C80.9011 15.2646 80.8205 15.1972 80.7229 15.1522C80.6164 15.1091 80.5016 15.0825 80.384 15.0739C80.2296 15.0606 80.0744 15.0543 79.9191 15.0549H79.7847C79.74 15.0571 79.6951 15.0571 79.6503 15.0549C79.5981 15.0586 79.5457 15.0586 79.4935 15.0549C79.4935 15.1427 79.4935 15.24 79.4935 15.3445C79.4935 15.4489 79.4935 15.5296 79.4935 15.6388V15.9758L79.4627 18.7339C79.4627 18.8455 79.4627 18.957 79.4627 19.0733C79.4664 19.183 79.4776 19.2924 79.4963 19.4009C79.5108 19.4978 79.5333 19.5938 79.5635 19.6881C79.581 19.7598 79.624 19.8252 79.6867 19.8756C79.8549 19.9975 80.0676 20.0663 80.2888 20.0702C80.3018 20.1028 80.312 20.1361 80.3196 20.1699C80.3308 20.2488 80.3308 20.3285 80.3196 20.4073C80.3117 20.4418 80.3014 20.4759 80.2888 20.5094H80.0088C79.8211 20.5094 79.6391 20.5094 79.4487 20.5094C79.2582 20.5094 79.0342 20.5094 78.743 20.5094C78.4517 20.5094 78.2165 20.5094 78.0176 20.5094C77.8188 20.5094 77.6312 20.5094 77.4576 20.5094H77.2083C77.1944 20.4762 77.1841 20.442 77.1775 20.4073C77.1663 20.3285 77.1663 20.2488 77.1775 20.1699C77.1838 20.1359 77.1941 20.1025 77.2083 20.0702C77.4295 20.0663 77.6423 19.9975 77.8104 19.8756C77.9304 19.7475 77.9947 19.5882 77.9924 19.4246C78.0092 19.211 78.0176 18.9832 78.0176 18.7434L78.0373 15.9758C78.0373 15.8595 78.0373 15.7385 78.0373 15.6388C78.0373 15.5391 78.0373 15.4323 78.0373 15.3445C78.0373 15.2566 78.0373 15.1427 78.0373 15.0549C77.9851 15.0586 77.9326 15.0586 77.8804 15.0549C77.8347 15.0571 77.7889 15.0571 77.7432 15.0549H77.6116C77.4563 15.0543 77.3012 15.0606 77.1467 15.0739C77.0282 15.0825 76.9125 15.1091 76.8051 15.1522C76.7036 15.196 76.619 15.2636 76.5614 15.3468C76.4846 15.4555 76.4297 15.5742 76.399 15.6981C76.3204 15.7235 76.2365 15.7348 76.1526 15.7313C76.1041 15.7338 76.0554 15.7338 76.0069 15.7313C75.964 15.7263 75.9218 15.7175 75.8809 15.7052L75.9229 14.395H76.161H76.4634H76.7687H80.7873H81.0925H81.395H81.633L81.619 15.7052Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M89.4939 14.6229C89.4969 14.6624 89.4969 14.702 89.4939 14.7416C89.4876 14.7764 89.4773 14.8106 89.4631 14.8436C89.2425 14.8481 89.0302 14.9159 88.861 15.0359C88.7443 15.1537 88.6852 15.3048 88.6957 15.4584C88.6957 15.6506 88.6957 15.8595 88.6957 16.0826L88.6537 18.7695C88.6537 18.8811 88.6537 18.9926 88.6537 19.1066C88.6537 19.2205 88.6537 19.3297 88.6733 19.4318C88.6831 19.5272 88.7027 19.6217 88.7321 19.7142C88.7508 19.7856 88.7936 19.8507 88.8554 19.9017C88.9214 19.9543 88.9983 19.9962 89.0822 20.0252C89.1985 20.0645 89.3213 20.0886 89.4462 20.0964C89.4618 20.1283 89.4721 20.1618 89.4771 20.196C89.492 20.2747 89.492 20.3548 89.4771 20.4334C89.4718 20.4684 89.4614 20.5027 89.4462 20.5355H89.0738C88.8862 20.5355 88.6817 20.5355 88.4577 20.5355C88.2337 20.5355 88.0516 20.5355 87.9116 20.5355C87.7716 20.5355 87.584 20.5355 87.3795 20.5355C87.1751 20.5355 86.9875 20.5355 86.8194 20.5355H86.405C86.3911 20.5023 86.3808 20.4681 86.3742 20.4334C86.3592 20.3548 86.3592 20.2747 86.3742 20.196C86.3804 20.162 86.3907 20.1286 86.405 20.0964C86.626 20.0918 86.8386 20.0231 87.0071 19.9017C87.063 19.8478 87.1033 19.7836 87.1247 19.7142C87.1574 19.6221 87.1789 19.5275 87.1891 19.4318C87.1891 19.3297 87.2059 19.2205 87.2087 19.1066C87.2115 18.9926 87.2087 18.8692 87.2087 18.7695V17.7062H84.4923V18.7695C84.4923 18.8811 84.4923 18.9926 84.4923 19.1066C84.4923 19.2205 84.4923 19.3297 84.5147 19.4318C84.5221 19.5273 84.5409 19.6219 84.5707 19.7142C84.5905 19.7852 84.6331 19.8501 84.6939 19.9017C84.7605 19.9549 84.8384 19.9967 84.9235 20.0252C85.0389 20.0646 85.1608 20.0886 85.2848 20.0964C85.3003 20.1283 85.3107 20.1618 85.3156 20.196C85.3306 20.2747 85.3306 20.3548 85.3156 20.4334C85.3103 20.4684 85.3 20.5027 85.2848 20.5355H84.9123C84.7275 20.5355 84.5203 20.5355 84.2962 20.5355C84.0722 20.5355 83.8902 20.5355 83.753 20.5355C83.6157 20.5355 83.4225 20.5355 83.2181 20.5355C83.0136 20.5355 82.826 20.5355 82.658 20.5355H82.2407C82.2259 20.5024 82.2146 20.4682 82.2071 20.4334C82.1959 20.3546 82.1959 20.2749 82.2071 20.196C82.2142 20.1619 82.2255 20.1285 82.2407 20.0964C82.461 20.0918 82.6726 20.0231 82.84 19.9017C82.8964 19.8478 82.9376 19.7837 82.9604 19.7142C82.9922 19.6221 83.0128 19.5274 83.022 19.4318C83.022 19.3297 83.0388 19.2205 83.0416 19.1066C83.0444 18.9926 83.0416 18.8692 83.0416 18.7695L83.0725 16.0826C83.0725 15.8595 83.0725 15.6506 83.0725 15.4584C83.0808 15.3047 83.0208 15.1539 82.9044 15.0359C82.8387 14.9836 82.7617 14.9425 82.6776 14.9148C82.5613 14.8754 82.4385 14.8514 82.3135 14.8436C82.2993 14.8106 82.289 14.7764 82.2827 14.7416C82.2798 14.702 82.2798 14.6624 82.2827 14.6229C82.2799 14.5834 82.2799 14.5437 82.2827 14.5042C82.289 14.4702 82.2993 14.4368 82.3135 14.4045H82.6888C82.8736 14.4045 83.0753 14.4045 83.2881 14.4045H83.8174H84.3354C84.5287 14.4045 84.7107 14.4045 84.8955 14.4045H85.2932C85.3087 14.4364 85.3191 14.4699 85.324 14.5042C85.3282 14.5437 85.3282 14.5834 85.324 14.6229C85.3284 14.6624 85.3284 14.7021 85.324 14.7416C85.3191 14.7766 85.3087 14.8109 85.2932 14.8436C85.0727 14.8485 84.8606 14.9162 84.6911 15.0359C84.5757 15.1543 84.5168 15.305 84.5259 15.4584C84.5259 15.6506 84.5259 15.8595 84.5259 16.0826V17.0487H87.2395V16.0826C87.2395 15.8595 87.2395 15.6506 87.2395 15.4584C87.2484 15.2997 87.1829 15.1444 87.0575 15.0264C86.9913 14.9746 86.9144 14.9335 86.8306 14.9053C86.7143 14.866 86.5915 14.8419 86.4666 14.8341C86.4511 14.8014 86.4407 14.7671 86.4358 14.7321C86.4314 14.6926 86.4314 14.6529 86.4358 14.6134C86.4316 14.5739 86.4316 14.5342 86.4358 14.4947C86.4407 14.4605 86.4511 14.4269 86.4666 14.395H86.839C87.0267 14.395 87.2255 14.395 87.4411 14.395H87.9704H88.4885C88.6817 14.395 88.8638 14.395 89.0486 14.395H89.4631C89.4773 14.4273 89.4876 14.4607 89.4939 14.4947C89.4971 14.5374 89.4971 14.5802 89.4939 14.6229Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M95.512 20.5353H95.1396H94.6831H94.2126H91.7342C91.5326 20.5353 91.3254 20.5353 91.1125 20.5353C90.8997 20.5353 90.7065 20.5353 90.5524 20.5353H90.334C90.3191 20.5022 90.3079 20.468 90.3004 20.4332C90.2892 20.3544 90.2892 20.2747 90.3004 20.1958C90.3075 20.1617 90.3187 20.1283 90.334 20.0961C90.5542 20.0916 90.7659 20.0229 90.9333 19.9015C90.9897 19.8476 91.0309 19.7834 91.0537 19.714C91.0854 19.6218 91.1061 19.5272 91.1153 19.4315C91.1153 19.3295 91.1321 19.2203 91.1349 19.1064C91.1377 18.9924 91.1349 18.869 91.1349 18.7693L91.1741 16.0824C91.1741 15.9709 91.1741 15.8593 91.1741 15.7477C91.1741 15.6362 91.1573 15.5317 91.1461 15.4368C91.1338 15.3522 91.1161 15.2682 91.0929 15.1852C91.0812 15.1299 91.0522 15.0782 91.0089 15.0357C90.9432 14.9834 90.8661 14.9423 90.7821 14.9146C90.6666 14.8755 90.5448 14.8515 90.4208 14.8434C90.4056 14.8104 90.3943 14.7762 90.3872 14.7413C90.3843 14.7018 90.3843 14.6622 90.3872 14.6227C90.3844 14.5831 90.3844 14.5435 90.3872 14.504C90.3943 14.4699 90.4056 14.4364 90.4208 14.4043H90.7933C90.9109 14.4043 91.0733 14.4043 91.2581 14.4043H91.8182H94.8147H95.1676H95.4784H95.68L95.7108 15.7145C95.6709 15.7266 95.6296 15.7353 95.5876 15.7406H95.442C95.3571 15.744 95.2723 15.7327 95.1928 15.7074C95.1616 15.5839 95.1077 15.4654 95.0331 15.3561C94.9701 15.2708 94.8824 15.2005 94.7783 15.152C94.6646 15.1035 94.541 15.0737 94.4142 15.0642C94.277 15.0642 94.1174 15.0475 93.9382 15.0475H93.6833H93.3389H92.9636C92.8404 15.0475 92.7284 15.0475 92.6332 15.0475C92.6413 15.159 92.6413 15.2708 92.6332 15.3822C92.6332 15.5104 92.6332 15.6694 92.6332 15.8569V17.0247C92.7078 17.0247 92.7834 17.0247 92.86 17.0247H93.3361C93.4765 17.0254 93.6168 17.0183 93.7561 17.0034C93.8758 16.9912 93.9912 16.9581 94.095 16.906C94.1934 16.8535 94.2766 16.7829 94.3386 16.6995C94.4114 16.5939 94.4617 16.4782 94.487 16.3578C94.5279 16.3454 94.5701 16.3367 94.6131 16.3316C94.6606 16.3293 94.7083 16.3293 94.7559 16.3316C94.8411 16.3273 94.9263 16.3394 95.0051 16.3672V16.5168C95.0051 16.5809 95.0051 16.6758 95.0051 16.7969C95.0051 16.9179 94.9883 17.1007 94.9883 17.3333C94.9883 17.5659 94.9883 17.7724 95.0051 17.9124C95.0219 18.0525 95.0051 18.1498 95.0051 18.1854V18.3492C94.9657 18.3626 94.9242 18.3714 94.8819 18.3753C94.8335 18.3787 94.7847 18.3787 94.7363 18.3753C94.6511 18.3797 94.5658 18.3675 94.487 18.3397C94.4636 18.2173 94.4132 18.0998 94.3386 17.9931C94.2771 17.9126 94.1935 17.8458 94.095 17.7985C93.9884 17.7538 93.874 17.7241 93.7561 17.7107C93.6168 17.6958 93.4765 17.6886 93.3361 17.6893H92.9804C92.8516 17.6893 92.734 17.6893 92.622 17.7036V18.9141C92.622 19.0304 92.622 19.1515 92.622 19.2488C92.6239 19.344 92.6324 19.4391 92.6472 19.5336C92.6484 19.593 92.6742 19.6501 92.72 19.695C92.774 19.7333 92.8385 19.7595 92.9076 19.771C93.006 19.7929 93.1062 19.8087 93.2073 19.8184C93.3165 19.8184 93.4285 19.8398 93.5405 19.8445C93.6525 19.8493 93.7421 19.8445 93.8205 19.8445C94.0138 19.8445 94.1846 19.8445 94.3358 19.8327C94.4717 19.8254 94.6047 19.7964 94.7279 19.7472C94.8463 19.6992 94.9491 19.6275 95.0275 19.5384C95.1313 19.4171 95.2134 19.2835 95.2712 19.142C95.3135 19.1283 95.3577 19.1195 95.4028 19.1159C95.4522 19.1124 95.5018 19.1124 95.5512 19.1159C95.6364 19.1115 95.7217 19.1236 95.8005 19.1515L95.512 20.5353Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M99.6454 17.751C99.6458 17.8916 99.6184 18.0312 99.5642 18.164C99.5077 18.1936 99.4487 18.2198 99.3878 18.2424C99.2982 18.278 99.1946 18.3112 99.077 18.3468C98.9576 18.383 98.8361 18.4139 98.7129 18.4394C98.6014 18.4645 98.4866 18.478 98.3713 18.4797H96.3521C96.3385 18.4428 96.331 18.4045 96.3297 18.3658V18.2424C96.3286 18.1016 96.357 17.9617 96.4137 17.8294C96.4697 17.7989 96.5287 17.7726 96.5902 17.751C96.6798 17.7146 96.7834 17.679 96.901 17.6442C97.0186 17.6094 97.1391 17.5785 97.2623 17.5516C97.3749 17.5274 97.4905 17.5146 97.6067 17.5137H99.6258C99.6388 17.5507 99.6454 17.589 99.6454 17.6276V17.751Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M103.252 14.6229C103.257 14.6624 103.257 14.7021 103.252 14.7416C103.247 14.7766 103.237 14.8109 103.222 14.8436C103.002 14.8484 102.791 14.9162 102.622 15.0359C102.506 15.1539 102.446 15.3047 102.454 15.4584C102.454 15.6506 102.454 15.8595 102.454 16.0826L102.423 18.7695C102.423 18.8811 102.423 18.9926 102.423 19.1066C102.423 19.2205 102.423 19.3297 102.443 19.4318C102.452 19.5271 102.471 19.6216 102.499 19.7142C102.519 19.7858 102.562 19.8509 102.625 19.9017C102.691 19.9548 102.768 19.9967 102.852 20.0252C102.968 20.0645 103.091 20.0886 103.216 20.0964C103.229 20.129 103.239 20.1623 103.247 20.196C103.258 20.2749 103.258 20.3546 103.247 20.4334C103.239 20.4679 103.229 20.502 103.216 20.5355H102.841C102.656 20.5355 102.449 20.5355 102.225 20.5355C102.001 20.5355 101.819 20.5355 101.681 20.5355C101.544 20.5355 101.351 20.5355 101.149 20.5355C100.948 20.5355 100.754 20.5355 100.589 20.5355H100.175C100.16 20.5027 100.149 20.4684 100.144 20.4334C100.129 20.3548 100.129 20.2747 100.144 20.196C100.149 20.1618 100.159 20.1283 100.175 20.0964C100.395 20.0918 100.607 20.0231 100.774 19.9017C100.832 19.8486 100.873 19.7842 100.894 19.7142C100.926 19.6221 100.947 19.5274 100.956 19.4318C100.956 19.3297 100.973 19.2205 100.978 19.1066C100.984 18.9926 100.978 18.8692 100.978 18.7695L101.012 16.0826C101.012 15.8595 101.012 15.6506 101.012 15.4584C101.021 15.305 100.962 15.1543 100.847 15.0359C100.78 14.9836 100.702 14.9425 100.617 14.9148C100.502 14.8754 100.38 14.8514 100.256 14.8436C100.24 14.8109 100.23 14.7766 100.225 14.7416C100.221 14.7021 100.221 14.6624 100.225 14.6229C100.221 14.5834 100.221 14.5437 100.225 14.5042C100.23 14.4699 100.24 14.4364 100.256 14.4045H100.628C100.813 14.4045 101.015 14.4045 101.23 14.4045H101.757H102.275C102.468 14.4045 102.653 14.4045 102.835 14.4045H103.216C103.232 14.4364 103.242 14.4699 103.247 14.5042C103.253 14.5435 103.255 14.5833 103.252 14.6229ZM107.137 14.6063C107.14 14.6505 107.14 14.6949 107.137 14.7392C107.131 14.7748 107.12 14.8098 107.106 14.8436C106.943 14.8366 106.78 14.8543 106.624 14.8958C106.48 14.9367 106.346 14.9994 106.229 15.081C106.103 15.1676 105.986 15.2646 105.882 15.3706C105.773 15.4821 105.658 15.6079 105.54 15.7313L104.056 17.3549L105.008 18.4966L105.384 18.9357C105.507 19.0828 105.622 19.2181 105.731 19.3392L106.011 19.6572C106.066 19.72 106.126 19.7788 106.193 19.8329C106.301 19.931 106.437 20.0045 106.588 20.0465C106.743 20.0823 106.903 20.0991 107.064 20.0964C107.08 20.1298 107.09 20.165 107.095 20.2008C107.097 20.2419 107.097 20.2831 107.095 20.3242C107.099 20.3964 107.085 20.4685 107.053 20.5355L106.722 20.5473H106.442H106.162H105.848C105.596 20.5535 105.345 20.5295 105.101 20.4761C104.925 20.4313 104.765 20.3497 104.636 20.2388C104.558 20.1691 104.485 20.0954 104.417 20.018C104.328 19.9183 104.23 19.8044 104.121 19.6715L103.779 19.2466C103.658 19.0947 103.541 18.9428 103.423 18.7885C103.145 18.4325 102.847 18.0432 102.53 17.6207L104.056 15.9331C104.118 15.8571 104.185 15.7764 104.258 15.6957C104.331 15.615 104.398 15.5343 104.459 15.4584C104.518 15.3898 104.57 15.3176 104.616 15.2424C104.651 15.1934 104.672 15.1381 104.678 15.081C104.68 15.04 104.665 14.9996 104.636 14.9671C104.608 14.9371 104.573 14.9128 104.532 14.8958C104.488 14.8778 104.441 14.8643 104.392 14.8555C104.343 14.8481 104.294 14.8442 104.244 14.8436C104.22 14.7751 104.209 14.7038 104.213 14.6324C104.206 14.5518 104.22 14.4709 104.252 14.395H104.532H104.759H105.123C105.255 14.395 105.381 14.395 105.507 14.395H106.067C106.162 14.395 106.26 14.395 106.347 14.395H106.627H106.806H107.117C107.136 14.4641 107.143 14.5354 107.137 14.6063Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M114.827 14.6227C114.831 14.6621 114.831 14.7019 114.827 14.7413C114.822 14.7764 114.811 14.8107 114.796 14.8434C114.575 14.8482 114.363 14.916 114.194 15.0357C114.08 15.1546 114.021 15.3049 114.029 15.4582C114.029 15.6504 114.029 15.8593 114.029 16.0824L113.995 18.7693C113.995 18.8809 113.995 18.9924 113.995 19.1064C113.995 19.2203 113.995 19.3295 114.017 19.4315C114.026 19.5269 114.045 19.6214 114.073 19.714C114.093 19.785 114.136 19.8499 114.197 19.9015C114.263 19.9546 114.341 19.9965 114.426 20.0249C114.542 20.0643 114.663 20.0884 114.787 20.0961C114.803 20.1283 114.814 20.1617 114.821 20.1958C114.832 20.2747 114.832 20.3544 114.821 20.4332C114.814 20.468 114.802 20.5022 114.787 20.5353H114.415C114.23 20.5353 114.023 20.5353 113.799 20.5353C113.575 20.5353 113.393 20.5353 113.256 20.5353C113.118 20.5353 112.925 20.5353 112.721 20.5353C112.516 20.5353 112.329 20.5353 112.161 20.5353H111.729C111.714 20.5024 111.704 20.4682 111.699 20.4332C111.684 20.3546 111.684 20.2744 111.699 20.1958C111.703 20.1616 111.714 20.128 111.729 20.0961C111.95 20.0916 112.161 20.0229 112.329 19.9015C112.385 19.8476 112.426 19.7834 112.449 19.714C112.481 19.6218 112.501 19.5272 112.511 19.4315C112.511 19.3295 112.527 19.2203 112.53 19.1064C112.533 18.9924 112.53 18.869 112.53 18.7693V17.7059H109.817V18.7693C109.817 18.8809 109.817 18.9924 109.817 19.1064C109.817 19.2203 109.817 19.3295 109.836 19.4315C109.847 19.5268 109.865 19.6212 109.892 19.714C109.912 19.7856 109.956 19.8507 110.018 19.9015C110.084 19.9541 110.161 19.996 110.245 20.0249C110.361 20.0643 110.484 20.0883 110.609 20.0961C110.623 20.1284 110.634 20.1618 110.64 20.1958C110.651 20.2747 110.651 20.3544 110.64 20.4332C110.633 20.4679 110.623 20.5021 110.609 20.5353H110.245C110.06 20.5353 109.856 20.5353 109.629 20.5353C109.402 20.5353 109.223 20.5353 109.086 20.5353C108.949 20.5353 108.755 20.5353 108.554 20.5353C108.352 20.5353 108.159 20.5353 107.994 20.5353H107.579C107.564 20.5024 107.554 20.4682 107.548 20.4332C107.533 20.3546 107.533 20.2744 107.548 20.1958C107.553 20.1616 107.564 20.128 107.579 20.0961C107.8 20.0916 108.013 20.0229 108.181 19.9015C108.237 19.8476 108.277 19.7834 108.299 19.714C108.332 19.6221 108.353 19.5274 108.36 19.4315C108.36 19.3295 108.377 19.2203 108.383 19.1064C108.388 18.9924 108.383 18.869 108.383 18.7693L108.414 16.0824C108.414 15.8593 108.414 15.6504 108.414 15.4582C108.423 15.3048 108.364 15.1541 108.248 15.0357C108.182 14.9833 108.104 14.9423 108.019 14.9146C107.904 14.875 107.782 14.8509 107.658 14.8434C107.642 14.8107 107.632 14.7764 107.627 14.7413C107.622 14.7019 107.622 14.6621 107.627 14.6227C107.623 14.5832 107.623 14.5435 107.627 14.504C107.632 14.4697 107.642 14.4362 107.658 14.4043H108.03C108.218 14.4043 108.416 14.4043 108.632 14.4043H109.159H109.677C109.87 14.4043 110.055 14.4043 110.237 14.4043H110.651C110.667 14.4362 110.677 14.4697 110.682 14.504C110.686 14.5435 110.686 14.5832 110.682 14.6227C110.686 14.6621 110.686 14.7019 110.682 14.7413C110.677 14.7764 110.667 14.8107 110.651 14.8434C110.432 14.8482 110.22 14.916 110.052 15.0357C109.935 15.1535 109.876 15.3046 109.887 15.4582C109.887 15.6504 109.887 15.8593 109.887 16.0824V17.0485H112.603V16.0824C112.603 15.8593 112.603 15.6504 112.603 15.4582C112.611 15.3045 112.551 15.1537 112.435 15.0357C112.37 14.9828 112.293 14.9416 112.208 14.9146C112.092 14.8752 111.969 14.8512 111.844 14.8434C111.831 14.81 111.821 14.7759 111.813 14.7413C111.81 14.7018 111.81 14.6622 111.813 14.6227C111.811 14.5831 111.811 14.5435 111.813 14.504C111.821 14.4702 111.831 14.4369 111.844 14.4043H112.177C112.362 14.4043 112.564 14.4043 112.777 14.4043H113.306H113.824C114.017 14.4043 114.199 14.4043 114.384 14.4043H114.799C114.814 14.4362 114.825 14.4697 114.829 14.504C114.833 14.5435 114.832 14.5833 114.827 14.6227Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M122.897 20.3144C122.901 20.3523 122.901 20.3904 122.897 20.4283C122.893 20.4649 122.882 20.5007 122.867 20.5351H122.567H122.346C122.251 20.5351 122.15 20.5351 122.038 20.5351H121.702H121.396H121.055H120.64C120.503 20.5351 120.377 20.5351 120.262 20.5351H120.019H119.719C119.703 20.4993 119.693 20.4617 119.688 20.4236C119.685 20.3872 119.685 20.3507 119.688 20.3144C119.685 20.2764 119.685 20.2384 119.688 20.2004C119.69 20.1647 119.698 20.1294 119.713 20.096C119.775 20.096 119.848 20.0841 119.932 20.0604C120.013 20.0422 120.092 20.02 120.17 19.9939C120.241 19.9712 120.306 19.9365 120.36 19.8919C120.385 19.8748 120.404 19.8535 120.418 19.8293C120.431 19.8051 120.439 19.7786 120.439 19.7518C120.43 19.6148 120.401 19.4792 120.352 19.3483C120.29 19.1798 120.215 18.9614 120.117 18.698L119.971 18.3206H117.652L117.487 18.717C117.369 18.9923 117.28 19.2202 117.221 19.4005C117.175 19.5262 117.145 19.6561 117.134 19.7874C117.135 19.8125 117.144 19.837 117.159 19.8586C117.174 19.8801 117.195 19.8981 117.221 19.9109C117.284 19.9483 117.351 19.9794 117.423 20.0034C117.497 20.0283 117.574 20.0489 117.652 20.0651L117.829 20.096C117.843 20.1312 117.851 20.168 117.854 20.2052C117.854 20.2479 117.854 20.2859 117.854 20.3144C117.854 20.3429 117.854 20.388 117.854 20.4283C117.851 20.4646 117.842 20.5005 117.829 20.5351H117.568H117.336C117.221 20.5351 117.098 20.5351 116.963 20.5351H116.568H116.263C116.084 20.5351 115.913 20.5351 115.751 20.5351H115.373H115.112C115.096 20.4993 115.086 20.4617 115.081 20.4236C115.081 20.3808 115.081 20.3429 115.081 20.3144C115.079 20.2764 115.079 20.2384 115.081 20.2004C115.086 20.1646 115.096 20.1295 115.112 20.096L115.392 20.0367C115.52 20.0116 115.637 19.9556 115.728 19.8753C115.797 19.807 115.856 19.7321 115.905 19.6521C115.981 19.5382 116.057 19.4148 116.132 19.2819C116.21 19.1513 116.28 19.0255 116.344 18.9092C116.393 18.8265 116.437 18.7417 116.476 18.6552L118.515 14.3519L119.688 14.2285L121.615 18.7075C121.732 18.9875 121.839 19.2202 121.937 19.4005C122.023 19.571 122.145 19.7263 122.298 19.8586C122.379 19.9258 122.474 19.979 122.578 20.0153C122.668 20.0512 122.762 20.0783 122.858 20.096C122.875 20.1309 122.885 20.1677 122.889 20.2052C122.895 20.2413 122.898 20.2778 122.897 20.3144ZM119.117 16.1701C119.056 16.0221 119.007 15.8706 118.971 15.7168C118.938 15.5672 118.904 15.4462 118.879 15.3536C118.851 15.4462 118.812 15.5672 118.758 15.7168C118.705 15.8663 118.644 16.0229 118.568 16.1915L117.924 17.6678H119.697L119.117 16.1701Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M129.966 20.3143C129.969 20.3538 129.969 20.3935 129.966 20.433C129.959 20.4677 129.949 20.5019 129.935 20.535L129.375 20.5469H128.731C128.541 20.554 128.351 20.5314 128.171 20.4805C128.016 20.4272 127.876 20.3463 127.762 20.2431C127.708 20.1991 127.661 20.1497 127.622 20.0959C127.557 20.0129 127.482 19.9108 127.395 19.7874L127.115 19.3839L126.804 18.9352C126.563 18.5792 126.292 18.1828 125.995 17.7485C125.996 17.6748 126.017 17.6023 126.057 17.5368C126.097 17.4713 126.154 17.4145 126.224 17.3711C126.426 17.3325 126.622 17.276 126.81 17.2025C126.977 17.1377 127.131 17.0503 127.266 16.9438C127.4 16.8404 127.507 16.7143 127.58 16.5735C127.656 16.4089 127.693 16.233 127.689 16.0561C127.701 15.9139 127.676 15.7713 127.617 15.6378C127.558 15.5043 127.466 15.3831 127.347 15.2823C127.228 15.1816 127.085 15.1036 126.928 15.0536C126.77 15.0037 126.602 14.9829 126.434 14.9927C126.392 14.9927 126.331 14.9927 126.244 14.9927H125.981C125.888 14.9927 125.804 14.9927 125.72 15.007H125.544C125.544 15.1185 125.544 15.2443 125.544 15.3488C125.544 15.4532 125.544 15.56 125.544 15.6834V16.0347L125.51 18.7477C125.51 18.8593 125.51 18.9709 125.51 19.0848C125.51 19.1987 125.51 19.3079 125.533 19.41C125.542 19.5053 125.56 19.5998 125.589 19.6924C125.608 19.764 125.652 19.8292 125.715 19.8799C125.767 19.9262 125.825 19.9676 125.888 20.0034C125.984 20.0467 126.091 20.071 126.199 20.0746C126.215 20.1065 126.225 20.14 126.23 20.1743C126.245 20.2529 126.245 20.333 126.23 20.4116C126.225 20.4466 126.214 20.4809 126.199 20.5137H125.919C125.734 20.5137 125.527 20.5137 125.303 20.5137C125.079 20.5137 124.897 20.5137 124.76 20.5137C124.623 20.5137 124.429 20.5137 124.225 20.5137C124.02 20.5137 123.833 20.5137 123.665 20.5137H123.25C123.235 20.4809 123.225 20.4466 123.22 20.4116C123.205 20.333 123.205 20.2529 123.22 20.1743C123.224 20.14 123.235 20.1065 123.25 20.0746C123.471 20.07 123.682 20.0013 123.85 19.8799C123.906 19.826 123.947 19.7619 123.97 19.6924C124.002 19.6003 124.022 19.5056 124.032 19.41C124.032 19.3079 124.048 19.1987 124.051 19.0848C124.054 18.9709 124.051 18.8474 124.051 18.7477L124.074 16.0608C124.074 15.8377 124.074 15.6289 124.074 15.4366C124.072 15.2845 124.004 15.1382 123.883 15.026C123.818 14.9747 123.742 14.9337 123.659 14.9049C123.546 14.8652 123.426 14.8412 123.304 14.8337C123.288 14.8007 123.277 14.7665 123.27 14.7316C123.267 14.6921 123.267 14.6525 123.27 14.613C123.267 14.5379 123.284 14.4632 123.32 14.3946H123.88L124.637 14.378L125.513 14.359L126.353 14.3424H126.958C127.255 14.3405 127.551 14.3676 127.84 14.4231C128.102 14.4696 128.35 14.5591 128.571 14.6865C128.782 14.8073 128.954 14.9704 129.072 15.1613C129.205 15.3872 129.27 15.6376 129.26 15.8899C129.263 16.0914 129.219 16.2914 129.131 16.4786C129.046 16.6579 128.925 16.8233 128.773 16.9676C128.618 17.1124 128.436 17.2351 128.235 17.3307C128.027 17.4342 127.804 17.514 127.571 17.5681C127.851 17.9716 128.112 18.3395 128.347 18.667L128.655 19.0824C128.753 19.2201 128.846 19.3483 128.935 19.4646C129.025 19.5809 129.098 19.6829 129.165 19.7636C129.206 19.8218 129.256 19.8752 129.313 19.9227C129.375 19.98 129.451 20.026 129.534 20.0578C129.618 20.0896 129.709 20.1067 129.801 20.1078H129.957C129.972 20.1401 129.982 20.1735 129.988 20.2075C129.983 20.2434 129.976 20.2791 129.966 20.3143Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M133.52 14.6227C133.523 14.6622 133.523 14.7018 133.52 14.7413C133.513 14.7761 133.503 14.8103 133.489 14.8434C133.268 14.8482 133.056 14.916 132.887 15.0357C132.77 15.1535 132.711 15.3046 132.721 15.4582C132.721 15.6504 132.721 15.8593 132.721 16.0824L132.691 18.7693C132.691 18.8809 132.691 18.9924 132.691 19.1064C132.691 19.2203 132.691 19.3295 132.71 19.4315C132.72 19.527 132.74 19.6215 132.769 19.714C132.788 19.7853 132.83 19.8505 132.892 19.9015C132.959 19.9546 133.037 19.9965 133.122 20.0249C133.237 20.0646 133.359 20.0886 133.483 20.0961C133.499 20.128 133.509 20.1616 133.514 20.1958C133.529 20.2744 133.529 20.3546 133.514 20.4332C133.509 20.4682 133.498 20.5024 133.483 20.5353H133.111C132.923 20.5353 132.719 20.5353 132.495 20.5353C132.271 20.5353 132.089 20.5353 131.951 20.5353C131.814 20.5353 131.621 20.5353 131.416 20.5353C131.212 20.5353 131.024 20.5353 130.856 20.5353H130.442C130.428 20.5021 130.418 20.4679 130.411 20.4332C130.396 20.3546 130.396 20.2744 130.411 20.1958C130.417 20.1618 130.428 20.1284 130.442 20.0961C130.663 20.0916 130.875 20.0229 131.044 19.9015C131.1 19.8472 131.141 19.7832 131.164 19.714C131.195 19.6216 131.215 19.5271 131.226 19.4315C131.226 19.3295 131.243 19.2203 131.246 19.1064C131.248 18.9924 131.246 18.869 131.246 18.7693L131.276 16.0824C131.276 15.8593 131.276 15.6504 131.276 15.4582C131.287 15.3046 131.228 15.1535 131.111 15.0357C131.045 14.9839 130.968 14.9428 130.884 14.9146C130.768 14.8752 130.645 14.8512 130.52 14.8434C130.506 14.8103 130.496 14.7761 130.489 14.7413C130.486 14.7018 130.486 14.6622 130.489 14.6227C130.487 14.5831 130.487 14.5435 130.489 14.504C130.496 14.47 130.506 14.4366 130.52 14.4043H130.893C131.08 14.4043 131.282 14.4043 131.495 14.4043H132.024H132.542C132.735 14.4043 132.917 14.4043 133.102 14.4043H133.517C133.531 14.4366 133.541 14.47 133.548 14.504C133.541 14.544 133.532 14.5836 133.52 14.6227Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M139 18.8567C139.017 19.1603 138.919 19.4606 138.72 19.7135C138.521 19.9432 138.266 20.1335 137.972 20.2713C137.667 20.4127 137.339 20.5143 136.998 20.5728C136.677 20.632 136.349 20.663 136.02 20.6654C135.88 20.6654 135.74 20.6654 135.564 20.6535L135.088 20.6226L134.687 20.587L134.455 20.5609L134.404 19.2507C134.444 19.2381 134.486 19.2293 134.528 19.2246C134.576 19.2222 134.625 19.2222 134.673 19.2246C134.757 19.2211 134.841 19.2324 134.92 19.2578C135.073 19.7452 135.505 19.9881 136.216 19.9865C136.374 19.9853 136.531 19.975 136.687 19.9557C136.833 19.9426 136.977 19.918 137.118 19.8821C137.242 19.7548 137.337 19.6091 137.398 19.4525C137.463 19.3 137.498 19.1397 137.502 18.9777C137.515 18.767 137.435 18.5595 137.278 18.3962C137.12 18.249 136.929 18.1289 136.718 18.0425C136.481 17.9409 136.238 17.8498 135.99 17.7696C135.732 17.6861 135.486 17.5769 135.259 17.4444C134.998 17.2968 134.789 17.0935 134.651 16.8551C134.513 16.6166 134.452 16.3515 134.474 16.0867C134.459 15.7766 134.557 15.47 134.755 15.2085C134.942 14.9783 135.188 14.7869 135.474 14.6483C135.767 14.5057 136.086 14.4062 136.418 14.354C136.731 14.2992 137.05 14.2706 137.37 14.2686C137.51 14.2686 137.65 14.2686 137.827 14.2828L138.297 14.3137L138.692 14.3493C138.807 14.3611 138.882 14.3682 138.924 14.3754L138.955 15.6476C138.916 15.661 138.874 15.6698 138.832 15.6737C138.784 15.6773 138.735 15.6773 138.686 15.6737C138.601 15.6775 138.516 15.6654 138.437 15.6381C138.358 15.4264 138.193 15.2449 137.972 15.1254C137.729 14.9996 137.448 14.9369 137.163 14.945C137.012 14.9461 136.861 14.9564 136.712 14.9759C136.574 14.9913 136.437 15.0159 136.303 15.0495C136.202 15.1706 136.124 15.3043 136.071 15.4459C136.014 15.5874 135.985 15.7356 135.984 15.885C135.969 16.0897 136.048 16.2913 136.205 16.4475C136.366 16.589 136.556 16.7048 136.765 16.7893C136.989 16.8842 137.233 16.9744 137.496 17.0623C137.754 17.1526 137.998 17.2698 138.221 17.4112C138.453 17.5561 138.644 17.7425 138.782 17.9571C138.943 18.2365 139.018 18.546 139 18.8567Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M78.2305 28.779C78.2344 28.8026 78.2344 28.8265 78.2305 28.8502C78.1045 28.8763 77.9784 28.8953 77.8552 28.9119C77.7308 28.9262 77.6055 28.9333 77.48 28.9332C77.3028 28.9338 77.1305 28.8845 76.9899 28.7932C76.8461 28.7004 76.7121 28.5972 76.5894 28.4846C76.3922 28.6316 76.1642 28.7459 75.9173 28.8217C75.6745 28.8947 75.4189 28.9324 75.1612 28.9332C74.9111 28.936 74.662 28.9072 74.4219 28.8478C74.2165 28.7957 74.0259 28.7084 73.8618 28.5914C73.7062 28.4758 73.5829 28.3323 73.5005 28.1713C73.4117 27.9885 73.3679 27.7922 73.3717 27.5945C73.3704 27.4587 73.4068 27.3245 73.4781 27.2029C73.5527 27.0794 73.6469 26.9652 73.7582 26.8635C73.8781 26.7527 74.0093 26.651 74.1502 26.5597C74.2987 26.4623 74.4443 26.3698 74.5899 26.2796C74.4551 26.0939 74.3381 25.8995 74.2399 25.6981C74.16 25.5484 74.1144 25.3874 74.1054 25.2233C74.1048 25.0914 74.1464 24.9618 74.2259 24.8483C74.3074 24.7347 74.4161 24.6368 74.5451 24.5611C74.6786 24.48 74.8259 24.4168 74.982 24.3736C75.1383 24.3298 75.3018 24.3074 75.4665 24.3071C75.6001 24.3069 75.7334 24.3188 75.8641 24.3427C75.986 24.3643 76.102 24.4054 76.2058 24.4638C76.3067 24.5253 76.3884 24.6068 76.4438 24.7011C76.5069 24.8103 76.5377 24.9309 76.5334 25.0524C76.5341 25.1738 76.4974 25.2933 76.427 25.399C76.3528 25.5113 76.2583 25.613 76.147 25.7004C76.0211 25.7999 75.8873 25.8919 75.7465 25.9758L75.2956 26.2463C75.388 26.365 75.4917 26.4837 75.6093 26.6309C75.7269 26.778 75.8529 26.9038 75.9817 27.0439C76.1106 27.1839 76.2366 27.3192 76.3654 27.4545L76.7322 27.8295C76.8267 27.6658 76.8999 27.4939 76.9507 27.3168C77.0014 27.1621 77.0296 27.0027 77.0347 26.8421C77.0441 26.7817 77.0282 26.7204 76.9899 26.6688C76.9366 26.6228 76.8714 26.5878 76.7995 26.5668C76.7369 26.5462 76.6705 26.5349 76.6034 26.5336C76.5938 26.5191 76.589 26.5027 76.5894 26.4861V26.4196C76.5903 26.3877 76.595 26.3558 76.6034 26.3247H76.8695C76.8955 26.3271 76.9218 26.3271 76.9479 26.3247H77.0263C77.0767 26.3272 77.1271 26.3272 77.1775 26.3247H77.3455C77.4604 26.3247 77.5752 26.3247 77.6844 26.3247H77.9952H78.2081C78.2267 26.3894 78.2267 26.457 78.2081 26.5217H78.1017C78.0506 26.5297 78.0002 26.54 77.9504 26.5525C77.8957 26.5644 77.8423 26.5803 77.7908 26.6C77.7462 26.6156 77.7053 26.6382 77.6704 26.6665C77.6195 26.7221 77.5849 26.7872 77.5696 26.8564L77.4464 27.2029C77.3988 27.3358 77.3399 27.483 77.2699 27.6373C77.2 27.7935 77.1109 27.9431 77.0039 28.0835L77.2083 28.2758C77.2835 28.3435 77.3629 28.4077 77.4464 28.468C77.5247 28.5248 77.6102 28.5741 77.7012 28.6152C77.7747 28.6506 77.8575 28.6702 77.942 28.6721H78.0513C78.0986 28.6722 78.1458 28.6666 78.1913 28.6555C78.2096 28.6718 78.2213 28.6926 78.2249 28.7149C78.2302 28.7359 78.2321 28.7575 78.2305 28.779ZM76.3318 28.2544C76.2198 28.1476 76.0993 28.017 75.9649 27.8889C75.8305 27.7607 75.6849 27.6088 75.5561 27.4592C75.4272 27.3097 75.276 27.1578 75.1472 27.0011C75.0184 26.8445 74.8952 26.6973 74.7887 26.5549C74.5905 26.6641 74.4178 26.8033 74.2791 26.9655C74.1427 27.1421 74.0751 27.3505 74.0858 27.5613C74.086 27.6868 74.1155 27.8111 74.1726 27.9268C74.2295 28.0461 74.3143 28.1543 74.4219 28.2449C74.5363 28.3403 74.6713 28.416 74.8196 28.468C74.9867 28.5287 75.1671 28.5586 75.3488 28.5558C75.5345 28.5571 75.7187 28.529 75.8921 28.4728C76.0516 28.4206 76.2001 28.3468 76.3318 28.2544ZM75.9761 25.0809C75.9792 25.0171 75.9663 24.9534 75.9383 24.8941C75.9103 24.8348 75.8679 24.7812 75.8137 24.7368C75.7566 24.6911 75.6892 24.6556 75.6156 24.6324C75.542 24.6091 75.4637 24.5986 75.3852 24.6015C75.3311 24.5988 75.2769 24.5988 75.2228 24.6015L75.0604 24.6228C74.9501 24.6705 74.8585 24.7444 74.7969 24.8354C74.7352 24.9265 74.7061 25.0307 74.7131 25.1355C74.7208 25.2612 74.757 25.3845 74.8196 25.4987C74.8996 25.6623 74.9932 25.8209 75.0996 25.9734C75.3192 25.8427 75.5261 25.6975 75.7185 25.539C75.7966 25.4819 75.86 25.4117 75.9048 25.3329C75.9496 25.2541 75.9749 25.1683 75.9789 25.0809H75.9761Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M84.7499 25.4269C84.7588 25.658 84.6749 25.8848 84.5119 26.0702C84.3493 26.2466 84.144 26.3915 83.9098 26.495C83.6579 26.6068 83.388 26.6868 83.1088 26.7324C82.8321 26.7796 82.5509 26.8058 82.2687 26.8107V27.6889C82.2687 27.81 82.2687 27.9263 82.2687 28.0355C82.2687 28.1447 82.2687 28.2444 82.2883 28.3298C82.2883 28.3835 82.3037 28.4365 82.3331 28.4841C82.3889 28.5272 82.4561 28.5581 82.5292 28.5743C82.615 28.5964 82.7186 28.6178 82.84 28.6384C82.8494 28.6695 82.855 28.7013 82.8568 28.7333C82.858 28.7483 82.858 28.7634 82.8568 28.7784C82.8568 28.795 82.8568 28.8164 82.8568 28.8378H82.6468H82.3079H81.9411H81.5798H81.2465H81.0337C81.0337 28.8164 81.0337 28.795 81.0337 28.7784C81.0324 28.7634 81.0324 28.7483 81.0337 28.7333C81.0311 28.7017 81.0311 28.67 81.0337 28.6384C81.1453 28.6207 81.2556 28.5977 81.3642 28.5695C81.4355 28.554 81.5016 28.5248 81.5574 28.4841C81.5806 28.4384 81.592 28.389 81.591 28.3393C81.591 28.2562 81.605 28.1589 81.6134 28.045C81.6218 27.931 81.6134 27.8076 81.6274 27.6937C81.6414 27.5798 81.6274 27.4563 81.6274 27.3756V25.5622V25.2916C81.6274 25.2038 81.6274 25.1207 81.6274 25.0543C81.6263 24.9891 81.6197 24.924 81.6078 24.8596C81.6059 24.824 81.5923 24.7894 81.5686 24.7599C81.5139 24.7187 81.4487 24.6887 81.3782 24.6721C81.2886 24.6508 81.1793 24.627 81.0477 24.6057C81.0404 24.5743 81.0357 24.5426 81.0337 24.5107C81.0324 24.4957 81.0324 24.4806 81.0337 24.4656C81.0337 24.449 81.0337 24.4276 81.0337 24.4063H81.4874L81.8766 24.3897L82.2995 24.3707L82.7168 24.3541H83.0836C83.2903 24.3529 83.4967 24.3688 83.6997 24.4015C83.887 24.4292 84.066 24.4881 84.2262 24.5748C84.379 24.6598 84.5034 24.7767 84.5875 24.9142C84.6895 25.0716 84.7452 25.2474 84.7499 25.4269ZM84.0246 25.5242C84.0373 25.3957 84.0138 25.2664 83.9558 25.1471C83.8979 25.0278 83.8072 24.9219 83.6913 24.8383C83.4475 24.6887 83.152 24.612 82.8512 24.6199H82.7028H82.532H82.3359C82.3359 24.6602 82.3359 24.7125 82.3359 24.7813C82.3359 24.8501 82.3359 24.9261 82.3359 25.0187C82.3359 25.1112 82.3359 25.1896 82.3359 25.2798C82.3359 25.3699 82.3359 25.4578 82.3359 25.5337L82.3219 26.4499H82.5488H82.7756C82.8904 26.4499 82.9996 26.4499 83.1004 26.4499C83.1847 26.4451 83.2682 26.4332 83.3497 26.4143C83.5573 26.3433 83.7356 26.2219 83.8622 26.0654C83.9774 25.9023 84.0338 25.7142 84.0246 25.5242Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M90.0259 28.7335C90.0287 28.7517 90.0287 28.77 90.0259 28.7881C90.0259 28.8071 90.0203 28.8237 90.0091 28.838H89.7739H89.4938C89.3762 28.838 89.2502 28.838 89.1186 28.838H88.903H88.4773H88.3345H88.1216C88.1115 28.8039 88.1067 28.7687 88.1076 28.7335C88.1071 28.7015 88.1118 28.6695 88.1216 28.6386L88.2476 28.6196C88.3027 28.61 88.357 28.5973 88.4101 28.5816C88.4601 28.5654 88.508 28.5447 88.5529 28.5199C88.571 28.5108 88.5861 28.498 88.5969 28.4827C88.6077 28.4673 88.6137 28.4499 88.6145 28.4321C88.6015 28.3339 88.5742 28.2374 88.5333 28.1449C88.4801 28.0049 88.4017 27.7912 88.2953 27.5111L88.0908 26.9795H86.3069L86.1333 27.3687C86.0885 27.4684 86.0437 27.5705 86.0017 27.6797C85.9597 27.7889 85.9177 27.8933 85.8841 27.993C85.8505 28.0927 85.8197 28.1852 85.8001 28.2636C85.7843 28.3173 85.774 28.3721 85.7693 28.4274C85.7708 28.4454 85.7771 28.4629 85.7878 28.4785C85.7984 28.4941 85.8132 28.5075 85.8309 28.5175C85.8753 28.5436 85.9233 28.5652 85.9737 28.5816C86.0268 28.5973 86.0811 28.61 86.1361 28.6196L86.2621 28.6386C86.2706 28.6698 86.2753 28.7016 86.2761 28.7335C86.2756 28.7687 86.2709 28.8037 86.2621 28.838H86.0717H85.9401H85.548H85.3632C85.2316 28.838 85.1196 28.838 85.0299 28.838H84.7947H84.6127C84.6024 28.8246 84.5975 28.8088 84.5987 28.7929V28.7335C84.5996 28.7016 84.6043 28.6698 84.6127 28.6386L84.8199 28.6006C84.9135 28.5826 84.999 28.5423 85.0664 28.4843C85.1242 28.424 85.1714 28.3568 85.2064 28.2849C85.2652 28.1829 85.324 28.0713 85.3884 27.9526C85.4528 27.834 85.5088 27.7153 85.562 27.6061C85.6152 27.4969 85.6516 27.4162 85.6713 27.3687L87.0323 24.3377L87.6232 24.2617L89.0374 27.5159C89.0579 27.5681 89.0887 27.6472 89.1298 27.7533C89.1746 27.8529 89.2222 27.9574 89.2754 28.0618C89.3286 28.1663 89.3818 28.2636 89.4378 28.3538C89.4788 28.4228 89.5296 28.4874 89.5891 28.546C89.6447 28.5911 89.7168 28.6187 89.7935 28.6244L90.0035 28.6481C90.0186 28.6748 90.0262 28.704 90.0259 28.7335ZM87.4327 25.3441C87.4005 25.2663 87.3734 25.187 87.3515 25.1067C87.3291 25.0331 87.3123 24.9667 87.2983 24.9073C87.2751 24.8473 87.26 24.7852 87.2535 24.7222C87.2412 24.7493 87.2309 24.7771 87.2227 24.8053C87.2227 24.8361 87.2031 24.867 87.1919 24.9002C87.1807 24.9334 87.1471 25.0284 87.1191 25.1067C87.0911 25.185 87.0575 25.2657 87.0183 25.3441L86.4358 26.6828H87.9788L87.4327 25.3441Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M95.0163 28.741C95.0155 28.7743 95.0079 28.8073 94.9939 28.8384H94.8763H94.7083H94.5374H94.4114C94.2842 28.841 94.1572 28.8299 94.0333 28.8051C93.9384 28.7818 93.8524 28.7376 93.7841 28.677C93.7063 28.6079 93.6333 28.535 93.5657 28.4586C93.4705 28.3565 93.364 28.2378 93.2436 28.1002C93.1232 27.9625 93 27.8201 92.8712 27.6682C92.7423 27.5163 92.6163 27.3715 92.5043 27.2314C92.3923 27.0914 92.2887 26.968 92.2019 26.8564C92.1151 26.7449 92.0506 26.6642 92.0142 26.6191C92.0179 26.58 92.0283 26.5416 92.045 26.5051C92.0638 26.4763 92.0874 26.4499 92.115 26.4268C92.2899 26.4059 92.4617 26.3693 92.6275 26.3176C92.7782 26.2713 92.9191 26.2048 93.0448 26.1206C93.1612 26.0438 93.2567 25.9467 93.3248 25.8358C93.3878 25.7215 93.4185 25.5963 93.4145 25.4703C93.4194 25.3324 93.3878 25.1953 93.322 25.0691C93.2672 24.9659 93.1824 24.8761 93.0756 24.808C92.9695 24.7388 92.8474 24.6895 92.7171 24.6632C92.5764 24.6322 92.4313 24.617 92.2859 24.6181H92.1347H91.9694H91.8098H91.6894L91.6754 24.9006C91.6754 24.986 91.6754 25.0857 91.6754 25.1997C91.6754 25.3136 91.6754 25.437 91.6754 25.5557L91.6614 27.3501C91.6614 27.3786 91.6614 27.4498 91.6614 27.5614C91.6614 27.6729 91.6614 27.7987 91.6614 27.9174C91.6614 28.0361 91.6614 28.1548 91.6754 28.2616C91.6717 28.3245 91.6861 28.3872 91.7174 28.4443C91.8729 28.5385 92.0561 28.5943 92.2467 28.6057C92.2493 28.6374 92.2493 28.6691 92.2467 28.7007C92.248 28.7157 92.248 28.7308 92.2467 28.7458C92.2467 28.7624 92.2467 28.7838 92.2467 28.8051H92.0142H91.6754H91.3029H90.9417H90.6084H90.3956C90.3956 28.7838 90.3956 28.7624 90.3956 28.7458C90.3943 28.7308 90.3943 28.7157 90.3956 28.7007C90.3976 28.6688 90.4023 28.6371 90.4096 28.6057C90.5946 28.5948 90.7727 28.5415 90.9249 28.4515C90.9573 28.3946 90.9727 28.3318 90.9697 28.2687C90.9697 28.1643 90.9865 28.048 90.9921 27.9222C90.9977 27.7964 90.9921 27.6848 90.9921 27.5661V27.3501L91.0145 25.5557V25.3729C91.0145 25.2843 91.0145 25.1941 91.0145 25.1023C91.0145 25.0121 91.0145 24.9267 90.9977 24.8507C90.9809 24.7748 90.9781 24.7273 90.9613 24.7155C90.9065 24.6742 90.8414 24.6442 90.7708 24.6276C90.6812 24.6063 90.572 24.5825 90.4404 24.5612C90.4331 24.5298 90.4284 24.4981 90.4264 24.4662C90.4251 24.4512 90.4251 24.4361 90.4264 24.4211C90.4264 24.4045 90.4264 24.3832 90.4264 24.3618H90.5356C90.5878 24.364 90.6402 24.364 90.6924 24.3618H90.7848H90.8885L91.2889 24.3452L91.7286 24.3262L92.1431 24.3096H92.4847C92.6722 24.3102 92.8593 24.3221 93.0448 24.3452C93.2327 24.3657 93.4143 24.4164 93.5797 24.4947C93.7433 24.5731 93.8802 24.6859 93.9773 24.8223C94.0884 24.9943 94.1416 25.1889 94.1314 25.3848C94.143 25.5314 94.1176 25.6784 94.0567 25.8159C93.9959 25.9535 93.901 26.0784 93.7785 26.1823C93.4991 26.4011 93.1472 26.5419 92.7704 26.5858C92.8124 26.6428 92.874 26.7235 92.9608 26.8232C93.0476 26.9229 93.1428 27.0416 93.2408 27.1674L93.5797 27.5637L93.9213 27.9483L94.2014 28.2616C94.2637 28.327 94.331 28.3889 94.403 28.4467C94.4746 28.5015 94.5524 28.55 94.6354 28.5915C94.7027 28.625 94.7787 28.6437 94.8567 28.6461H94.9687C94.9768 28.6604 94.9825 28.6756 94.9855 28.6912C94.9968 28.7074 95.007 28.724 95.0163 28.741Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M99.0629 25.14C99.0247 25.1423 98.9863 25.1423 98.9481 25.14H98.8949H98.8277C98.7808 24.9969 98.6756 24.8724 98.5309 24.7887C98.3687 24.7256 98.191 24.6963 98.0128 24.7032H97.6571C97.5199 24.7032 97.4107 24.7032 97.3239 24.7032C97.321 24.738 97.321 24.7729 97.3239 24.8077V24.9264C97.3239 24.9999 97.3239 25.0901 97.3239 25.1993C97.3239 25.3085 97.3239 25.4367 97.3239 25.5672V27.3617V27.7557C97.3239 27.8854 97.3239 28.0017 97.3239 28.1046C97.3239 28.209 97.3239 28.2945 97.3435 28.3609C97.3415 28.4008 97.3501 28.4406 97.3687 28.4772C97.4237 28.5189 97.4901 28.5483 97.5619 28.5627C97.6695 28.5909 97.7789 28.6139 97.8896 28.6315C97.8989 28.6626 97.9046 28.6944 97.9064 28.7265C97.9076 28.7415 97.9076 28.7565 97.9064 28.7716C97.9064 28.7882 97.9064 28.8095 97.9064 28.8309H97.6963H97.3603H96.9934H96.6294H96.2961H96.0861C96.0838 28.8112 96.0838 28.7913 96.0861 28.7716C96.0848 28.7565 96.0848 28.7415 96.0861 28.7265C96.0879 28.6944 96.0935 28.6626 96.1029 28.6315C96.2136 28.6139 96.323 28.5909 96.4305 28.5627C96.5021 28.5478 96.5684 28.5184 96.6238 28.4772C96.642 28.4453 96.6524 28.4106 96.6546 28.3752C96.6546 28.3158 96.6714 28.2351 96.6798 28.1378C96.6882 28.0405 96.6938 27.9242 96.6966 27.7913C96.6994 27.6584 96.6966 27.5159 96.6966 27.3617L96.7106 25.5815V24.8124C96.7106 24.7721 96.7106 24.7365 96.7106 24.7032H96.5733H96.3969H95.9629C95.7845 24.6956 95.6067 24.7249 95.4448 24.7887C95.2991 24.8721 95.193 24.9966 95.1451 25.14C95.1078 25.1422 95.0704 25.1422 95.0331 25.14H94.9799H94.9127L94.9351 24.3828H95.1339H95.414C95.512 24.3828 95.61 24.3828 95.694 24.3828H95.9292H98.0156H98.2508C98.3404 24.3828 98.4328 24.3828 98.5309 24.3828H98.8109H99.0377L99.0629 25.14Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M104.846 24.4995C104.845 24.5314 104.841 24.5633 104.832 24.5944C104.642 24.6046 104.459 24.6579 104.303 24.7487C104.278 24.7958 104.264 24.8466 104.263 24.8982C104.263 24.986 104.247 25.0881 104.238 25.1997C104.23 25.3112 104.238 25.437 104.238 25.5343C104.238 25.6317 104.238 25.7218 104.238 25.7717L104.224 27.3667C104.224 27.5258 104.224 27.6824 104.224 27.8415C104.224 28.0005 104.224 28.1405 104.21 28.2734C104.196 28.4064 104.21 28.5108 104.191 28.6105C104.171 28.7102 104.177 28.7624 104.171 28.7933C104.034 28.8583 103.882 28.8957 103.726 28.9024L100.976 25.7812C100.928 25.7299 100.884 25.676 100.844 25.6198C100.799 25.5604 100.76 25.5059 100.718 25.4608C100.694 25.4328 100.673 25.4034 100.654 25.3729L100.598 25.2875V25.5248C100.598 25.5889 100.598 25.6578 100.598 25.7337C100.598 25.8097 100.598 25.8738 100.598 25.9284L100.581 27.3525V27.5899C100.581 27.7062 100.581 27.8272 100.581 27.9578C100.581 28.0883 100.581 28.1951 100.598 28.3067C100.595 28.37 100.611 28.4329 100.645 28.4894C100.799 28.5796 100.979 28.6329 101.166 28.6437C101.169 28.6753 101.169 28.7071 101.166 28.7387C101.167 28.7537 101.167 28.7688 101.166 28.7838C101.166 28.8004 101.166 28.8217 101.166 28.8431H100.813H100.712H100.528H100.343C100.225 28.8431 100.122 28.8431 100.032 28.8431C99.9423 28.8431 99.8471 28.8431 99.7519 28.8431H99.5166C99.5166 28.8217 99.5166 28.8004 99.5166 28.7838C99.5153 28.7688 99.5153 28.7537 99.5166 28.7387C99.514 28.7071 99.514 28.6753 99.5166 28.6437C99.7062 28.6335 99.889 28.5802 100.046 28.4894C100.074 28.4323 100.087 28.3708 100.085 28.3091C100.085 28.2022 100.102 28.0859 100.108 27.9554C100.113 27.8248 100.108 27.699 100.108 27.5804C100.108 27.4617 100.108 27.3834 100.108 27.343L100.124 25.831V25.4085C100.128 25.2649 100.118 25.1213 100.096 24.9789C100.09 24.9042 100.057 24.8328 100.003 24.7736C99.9487 24.7145 99.875 24.6703 99.7911 24.6466C99.7155 24.6209 99.6365 24.6034 99.5558 24.5944C99.5499 24.5798 99.5499 24.5639 99.5558 24.5493V24.4923C99.5521 24.46 99.5521 24.4274 99.5558 24.395H99.6931H99.9087H100.13H100.264H100.57L103.328 27.5804C103.39 27.6539 103.443 27.7204 103.493 27.7845L103.616 27.953L103.723 28.1049C103.723 28.0551 103.723 28.0029 103.723 27.953V27.7987C103.723 27.7133 103.723 27.6231 103.723 27.5281C103.723 27.4332 103.723 27.3525 103.723 27.2908L103.745 25.7717C103.745 25.7171 103.745 25.634 103.745 25.5343C103.745 25.4346 103.745 25.316 103.745 25.2044C103.745 25.0929 103.745 24.9955 103.726 24.9077C103.727 24.8586 103.718 24.8097 103.7 24.7629C103.546 24.6723 103.365 24.619 103.177 24.6086C103.169 24.5773 103.165 24.5456 103.163 24.5137C103.161 24.4987 103.161 24.4836 103.163 24.4686C103.163 24.452 103.163 24.4306 103.163 24.4093H103.415C103.448 24.4116 103.482 24.4116 103.516 24.4093H103.616C103.672 24.4093 103.734 24.4093 103.804 24.4093H103.989C104.104 24.4093 104.207 24.4093 104.297 24.4093C104.387 24.4093 104.482 24.4093 104.577 24.4093H104.812C104.812 24.4306 104.812 24.452 104.812 24.4686C104.824 24.4782 104.836 24.4885 104.846 24.4995Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M109.156 28.8379H108.635H108.03H106.35H105.988H105.692H105.51C105.51 28.8165 105.51 28.7952 105.51 28.7785C105.508 28.7635 105.508 28.7485 105.51 28.7334C105.51 28.7015 105.515 28.6696 105.524 28.6385C105.634 28.6212 105.744 28.5982 105.851 28.5697C105.923 28.5553 105.989 28.5259 106.044 28.4842C106.076 28.4329 106.092 28.3759 106.092 28.3181C106.092 28.2231 106.109 28.1187 106.114 28C106.12 27.8813 106.114 27.7627 106.114 27.6511V27.3829L106.131 25.5813V25.344C106.131 25.2538 106.131 25.166 106.131 25.0805C106.131 24.9951 106.131 24.9191 106.114 24.8432C106.113 24.8014 106.1 24.7607 106.075 24.7245C106.02 24.6836 105.954 24.6551 105.882 24.6414C105.794 24.6192 105.685 24.5979 105.554 24.5773C105.545 24.5462 105.539 24.5144 105.538 24.4824C105.536 24.4674 105.536 24.4523 105.538 24.4373C105.538 24.4207 105.538 24.3993 105.538 24.3779H105.689H105.798H106.196H106.414H108.304H108.598C108.699 24.3779 108.797 24.3779 108.895 24.3779C108.993 24.3779 109.069 24.3779 109.128 24.3779L109.15 25.1398C109.114 25.1489 109.076 25.1537 109.038 25.1541C108.998 25.1529 108.957 25.1482 108.918 25.1398C108.881 25.0498 108.833 24.9637 108.772 24.8835C108.725 24.8216 108.658 24.7723 108.579 24.7411C108.491 24.7063 108.396 24.6854 108.299 24.6794C108.181 24.6794 108.038 24.6794 107.868 24.6794C107.509 24.6794 107.153 24.6794 106.801 24.6984V24.8313C106.801 24.8788 106.801 24.9262 106.801 24.9737C106.801 25.0591 106.801 25.1565 106.801 25.2656C106.801 25.3748 106.801 25.484 106.801 25.5956V26.4026H107.137H107.503C107.646 26.4026 107.77 26.4026 107.882 26.3884C107.979 26.3825 108.073 26.3616 108.162 26.3266C108.241 26.2955 108.309 26.2462 108.358 26.1842C108.415 26.1036 108.453 26.014 108.47 25.9208C108.507 25.9124 108.546 25.9084 108.584 25.9089C108.625 25.9081 108.666 25.9121 108.705 25.9208V26.0822C108.705 26.1273 108.705 26.1913 108.705 26.2697C108.705 26.348 108.705 26.4406 108.705 26.5426C108.705 26.6447 108.705 26.7349 108.705 26.8108C108.705 26.8868 108.705 26.9509 108.705 26.9984V27.1574C108.666 27.1668 108.625 27.1716 108.584 27.1716C108.546 27.1712 108.507 27.1664 108.47 27.1574C108.453 27.0642 108.415 26.9746 108.358 26.8939C108.309 26.832 108.241 26.7827 108.162 26.7515C108.073 26.7174 107.978 26.6965 107.882 26.6898C107.77 26.6898 107.646 26.6898 107.503 26.6898H107.137C107.013 26.6898 106.89 26.6898 106.77 26.6898V27.3829V27.9881C106.77 28.0973 106.77 28.1946 106.77 28.2801C106.768 28.3275 106.776 28.3748 106.792 28.4201C106.836 28.4518 106.887 28.4738 106.943 28.4842C107.024 28.5029 107.107 28.5156 107.19 28.5222C107.282 28.5222 107.383 28.5388 107.489 28.5412C107.596 28.5436 107.7 28.5412 107.806 28.5412C107.957 28.5417 108.107 28.5354 108.257 28.5222C108.373 28.5121 108.488 28.4873 108.596 28.4486C108.692 28.4141 108.778 28.3604 108.845 28.292C108.923 28.2097 108.984 28.1165 109.024 28.0166C109.062 28.0019 109.103 27.9954 109.145 27.9976C109.184 27.9948 109.224 28.0013 109.259 28.0166L109.156 28.8379Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M114.698 28.7407C114.697 28.774 114.689 28.8069 114.675 28.838H114.558H114.39H114.219H114.093C113.966 28.8407 113.839 28.8295 113.715 28.8048C113.62 28.7815 113.534 28.7372 113.466 28.6766C113.388 28.6076 113.315 28.5346 113.247 28.4582C113.152 28.3562 113.046 28.2375 112.925 28.0998L112.553 27.6678C112.421 27.5159 112.298 27.3711 112.186 27.2311C112.074 27.0911 111.97 26.9676 111.883 26.8561C111.797 26.7445 111.732 26.6638 111.699 26.6187C111.696 26.5825 111.704 26.5463 111.721 26.5129C111.738 26.4796 111.764 26.45 111.797 26.4265C111.971 26.4055 112.143 26.3689 112.309 26.3173C112.46 26.271 112.601 26.2045 112.726 26.1203C112.843 26.0435 112.938 25.9463 113.006 25.8354C113.078 25.719 113.113 25.5892 113.11 25.458C113.115 25.3202 113.083 25.1831 113.018 25.0569C112.964 24.9538 112.88 24.864 112.774 24.7958C112.666 24.727 112.544 24.6778 112.413 24.651C112.272 24.62 112.127 24.6048 111.981 24.6059H111.83H111.665H111.505H111.385V24.8884C111.385 24.9738 111.385 25.0735 111.385 25.1875C111.385 25.3014 111.385 25.4248 111.385 25.5435L111.371 27.3379C111.371 27.3664 111.371 27.4376 111.371 27.5492C111.371 27.6607 111.371 27.7865 111.371 27.9052C111.371 28.0239 111.371 28.1426 111.371 28.2494C111.367 28.3123 111.382 28.375 111.413 28.4321C111.568 28.5263 111.752 28.5821 111.942 28.5935C111.949 28.6249 111.954 28.6566 111.956 28.6885C111.957 28.7035 111.957 28.7186 111.956 28.7336C111.956 28.7502 111.956 28.7716 111.956 28.7929H111.743H111.404H111.032H110.671H110.338H110.125C110.125 28.7716 110.125 28.7502 110.125 28.7336C110.125 28.717 110.125 28.7027 110.125 28.6885C110.122 28.6569 110.122 28.6252 110.125 28.5935C110.31 28.5826 110.488 28.5293 110.64 28.4393C110.672 28.3824 110.688 28.3196 110.685 28.2565C110.685 28.1521 110.704 28.0358 110.707 27.91C110.71 27.7842 110.707 27.6726 110.707 27.5539V27.3379L110.73 25.5435V25.3607C110.73 25.2721 110.73 25.1819 110.73 25.0901C110.73 24.9999 110.73 24.9145 110.713 24.8385C110.714 24.7919 110.702 24.7456 110.679 24.7032C110.623 24.6626 110.557 24.6326 110.486 24.6154C110.396 24.5941 110.287 24.5703 110.155 24.549C110.148 24.5176 110.143 24.4859 110.141 24.454C110.14 24.439 110.14 24.4239 110.141 24.4089C110.141 24.3923 110.141 24.3709 110.141 24.3496H110.217C110.269 24.3519 110.322 24.3519 110.374 24.3496H110.466H110.57L110.97 24.333L111.41 24.314L111.825 24.2974H112.166C112.354 24.2982 112.541 24.3101 112.726 24.333C112.913 24.3539 113.094 24.4046 113.258 24.4825C113.422 24.5609 113.559 24.6737 113.656 24.8101C113.768 24.9817 113.822 25.1766 113.81 25.3726C113.815 25.5155 113.784 25.6577 113.721 25.7901C113.657 25.9225 113.562 26.0422 113.44 26.1416C113.162 26.3599 112.811 26.5007 112.435 26.5451C112.474 26.6021 112.536 26.6828 112.623 26.7825C112.709 26.8822 112.805 27.0009 112.903 27.1267L113.242 27.5231L113.583 27.9076L113.877 28.2209C113.94 28.2863 114.007 28.3482 114.079 28.406C114.151 28.4608 114.23 28.5093 114.314 28.5508C114.38 28.5845 114.455 28.6033 114.533 28.6054H114.645C114.653 28.6197 114.658 28.6349 114.661 28.6505C114.677 28.6796 114.689 28.7098 114.698 28.7407Z",
          fill: "white",
        }),
        c.jsx("path", {
          d: "M118.011 27.6699C118.017 27.8718 117.951 28.0706 117.82 28.2395C117.698 28.3968 117.538 28.5302 117.35 28.6312C117.157 28.738 116.945 28.8182 116.723 28.8685C116.511 28.9159 116.294 28.9406 116.076 28.9421C115.938 28.9421 115.796 28.9421 115.622 28.9255C115.433 28.9118 115.245 28.8832 115.062 28.84L115.025 28.0781C115.039 28.0639 115.081 28.0568 115.146 28.0568C115.186 28.0546 115.226 28.062 115.261 28.0781C115.294 28.178 115.351 28.2715 115.426 28.3535C115.491 28.4223 115.572 28.4795 115.664 28.522C115.752 28.562 115.846 28.5916 115.944 28.6098C116.048 28.6258 116.154 28.6338 116.26 28.6335C116.377 28.6336 116.493 28.6241 116.608 28.6051C116.712 28.5896 116.814 28.5633 116.91 28.5267C117.028 28.4534 117.124 28.3574 117.19 28.2466C117.266 28.1187 117.304 27.9768 117.299 27.8336C117.307 27.6644 117.249 27.4977 117.134 27.3589C117.019 27.2267 116.878 27.1119 116.717 27.0195C116.545 26.9172 116.367 26.8236 116.182 26.7394C115.994 26.6544 115.814 26.5568 115.644 26.4475C115.481 26.3436 115.34 26.2167 115.227 26.0724C115.112 25.9143 115.055 25.7311 115.062 25.5455C115.056 25.3479 115.116 25.1528 115.235 24.983C115.35 24.8298 115.502 24.6988 115.681 24.5985C115.867 24.4975 116.071 24.4222 116.286 24.3753C116.498 24.327 116.718 24.3023 116.938 24.3018C117.073 24.3018 117.218 24.3018 117.372 24.3184C117.562 24.3321 117.749 24.3608 117.932 24.4038L117.946 25.142C117.909 25.1565 117.867 25.1631 117.826 25.161H117.761C117.743 25.161 117.726 25.156 117.711 25.1468C117.695 25.0584 117.656 24.9744 117.595 24.9015C117.534 24.8285 117.454 24.7686 117.361 24.7266C117.169 24.6492 116.958 24.611 116.745 24.6151C116.644 24.6151 116.543 24.6198 116.442 24.6293C116.345 24.6392 116.251 24.6625 116.162 24.6981C116.049 24.7658 115.953 24.8532 115.882 24.9545C115.809 25.0745 115.774 25.2087 115.782 25.3438C115.771 25.5134 115.829 25.6809 115.947 25.8185C116.065 25.9453 116.206 26.0557 116.364 26.146C116.536 26.2444 116.714 26.334 116.899 26.4142C117.089 26.4959 117.269 26.5928 117.437 26.7038C117.603 26.8131 117.745 26.9475 117.854 27.1002C117.964 27.2752 118.018 27.4716 118.011 27.6699Z",
          fill: "white",
        }),
      ],
    }),
  });
}
function Hs() {
  return c.jsxs("div", {
    className: _2.svg,
    children: [
      c.jsx(d1, {
        to: "https://web.facebook.com.Partners ",
        children: c.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            c.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            c.jsx("path", {
              d: "M17.198 29.5H21.198V21.49H24.802L25.198 17.51H21.198V15.5C21.198 15.2348 21.3034 14.9804 21.4909 14.7929C21.6784 14.6054 21.9328 14.5 22.198 14.5H25.198V10.5H22.198C20.8719 10.5 19.6002 11.0268 18.6625 11.9645C17.7248 12.9021 17.198 14.1739 17.198 15.5V17.51H15.198L14.802 21.49H17.198V29.5Z",
              fill: "#B8824F",
            }),
          ],
        }),
      }),
      c.jsxs("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          c.jsx("circle", {
            cx: "20",
            cy: "20",
            r: "20",
            transform: "rotate(-90 20 20)",
            fill: "white",
          }),
          c.jsx("path", {
            d: "M9 10H11.5L26.5 30H24L9 10ZM13.5 10H16L31 30H28.5L13.5 10Z",
            fill: "#B8824F",
          }),
          c.jsx("path", {
            d: "M11 10H16V12H11V10ZM24 30H29V28H24V30Z",
            fill: "#B8824F",
          }),
          c.jsx("path", {
            d: "M26.5 10H30L13 30H9.5L26.5 10Z",
            fill: "#B8824F",
          }),
        ],
      }),
      c.jsx(d1, {
        to: `https://www.instagram.com./\r
 `,
        children: c.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            c.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            c.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.8114 9.34912C12.6278 9.34912 11.4926 9.8192 10.6555 10.656C9.8184 11.4928 9.34788 12.6278 9.34743 13.8114V25.7154C9.34743 26.8993 9.81774 28.0348 10.6549 28.8719C11.4921 29.7091 12.6275 30.1794 13.8114 30.1794H25.7154C26.8991 30.179 28.0341 29.7084 28.8708 28.8713C29.7076 28.0342 30.1777 26.899 30.1777 25.7154V13.8114C30.1773 12.6281 29.707 11.4933 28.8702 10.6566C28.0335 9.81985 26.8988 9.34958 25.7154 9.34912H13.8114ZM26.9994 13.8183C26.9994 14.1593 26.864 14.4863 26.6229 14.7274C26.3817 14.9685 26.0547 15.104 25.7137 15.104C25.3727 15.104 25.0457 14.9685 24.8046 14.7274C24.5635 14.4863 24.428 14.1593 24.428 13.8183C24.428 13.4773 24.5635 13.1502 24.8046 12.9091C25.0457 12.668 25.3727 12.5325 25.7137 12.5325C26.0547 12.5325 26.3817 12.668 26.6229 12.9091C26.864 13.1502 26.9994 13.4773 26.9994 13.8183ZM19.7651 16.1977C18.8195 16.1977 17.9125 16.5734 17.2438 17.2421C16.5751 17.9108 16.1994 18.8177 16.1994 19.7634C16.1994 20.7091 16.5751 21.616 17.2438 22.2847C17.9125 22.9534 18.8195 23.3291 19.7651 23.3291C20.7108 23.3291 21.6178 22.9534 22.2865 22.2847C22.9552 21.616 23.3309 20.7091 23.3309 19.7634C23.3309 18.8177 22.9552 17.9108 22.2865 17.2421C21.6178 16.5734 20.7108 16.1977 19.7651 16.1977ZM14.4834 19.7634C14.4834 18.3631 15.0397 17.0201 16.0299 16.0299C17.0201 15.0397 18.3631 14.4834 19.7634 14.4834C21.1638 14.4834 22.5068 15.0397 23.497 16.0299C24.4871 17.0201 25.0434 18.3631 25.0434 19.7634C25.0434 21.1637 24.4871 22.5067 23.497 23.4969C22.5068 24.4871 21.1638 25.0434 19.7634 25.0434C18.3631 25.0434 17.0201 24.4871 16.0299 23.4969C15.0397 22.5067 14.4834 21.1637 14.4834 19.7634Z",
              fill: "#B8824F",
            }),
          ],
        }),
      }),
      c.jsx(d1, {
        to: `https://www.linkedin.com/company/roothe-kharis-partners/posts/?feedView=all\r
`,
        children: c.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            c.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            c.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.5 9.5C11.7044 9.5 10.9413 9.81607 10.3787 10.3787C9.81607 10.9413 9.5 11.7044 9.5 12.5V27.5C9.5 28.2956 9.81607 29.0587 10.3787 29.6213C10.9413 30.1839 11.7044 30.5 12.5 30.5H27.5C28.2956 30.5 29.0587 30.1839 29.6213 29.6213C30.1839 29.0587 30.5 28.2956 30.5 27.5V12.5C30.5 11.7044 30.1839 10.9413 29.6213 10.3787C29.0587 9.81607 28.2956 9.5 27.5 9.5H12.5ZM14.153 15.9455C14.6284 15.9455 15.0843 15.7566 15.4205 15.4205C15.7566 15.0843 15.9455 14.6284 15.9455 14.153C15.9455 13.6776 15.7566 13.2217 15.4205 12.8855C15.0843 12.5494 14.6284 12.3605 14.153 12.3605C13.6776 12.3605 13.2217 12.5494 12.8855 12.8855C12.5494 13.2217 12.3605 13.6776 12.3605 14.153C12.3605 14.6284 12.5494 15.0843 12.8855 15.4205C13.2217 15.7566 13.6776 15.9455 14.153 15.9455ZM15.653 27.2195V17.351H12.653V27.2195H15.653ZM17.645 17.351H20.645V18.6725C21.0875 17.9795 22.0595 17.0465 23.867 17.0465C26.024 17.0465 27.1955 18.476 27.1955 21.1955C27.1955 21.326 27.2075 21.9215 27.2075 21.9215V27.218H24.2075V21.923C24.2075 21.1955 24.0545 19.766 22.4375 19.766C20.819 19.766 20.6825 21.563 20.645 22.739V27.218H17.645V17.351Z",
              fill: "#B8824F",
            }),
          ],
        }),
      }),
    ],
  });
}
function G4() {
  return c.jsx("footer", {
    className: _2.bg,
    children: c.jsxs("div", {
      className: _2.footer,
      children: [
        c.jsxs("div", {
          className: _2.footer2,
          children: [
            c.jsx("div", {
              className: _2.footerlogo,
              children: c.jsx(d1, { to: "/", children: c.jsx(bs, {}) }),
            }),
            c.jsxs("div", {
              className: _2.details,
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("h2", {
                      children:
                        "We stand by your side, providing expert legal guidance and unwavering support to protect your rights and ensure justice is served",
                    }),
                    c.jsx(Hs, {}),
                    c.jsx("h3", { children: "Open hours" }),
                    c.jsx("span", {
                      children: "Monday - Friday : 9:00 AM - 6:00 PM",
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: _2.connect,
                  children: [
                    c.jsx("label", { children: "Contact us" }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("svg", {
                          width: "18",
                          height: "17",
                          viewBox: "0 0 18 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: c.jsx("path", {
                            d: "M12.5569 10.906L12.1019 11.359C12.1019 11.359 11.0189 12.435 8.06386 9.49698C5.10886 6.55898 6.19186 5.48298 6.19186 5.48298L6.47786 5.19698C7.18486 4.49498 7.25186 3.36698 6.63486 2.54298L5.37486 0.859979C4.61086 -0.160021 3.13586 -0.29502 2.26086 0.57498L0.690856 2.13498C0.257856 2.56698 -0.032144 3.12498 0.002856 3.74498C0.092856 5.33198 0.810856 8.74498 4.81486 12.727C9.06186 16.949 13.0469 17.117 14.6759 16.965C15.1919 16.917 15.6399 16.655 16.0009 16.295L17.4209 14.883C18.3809 13.93 18.1109 12.295 16.8829 11.628L14.9729 10.589C14.1669 10.152 13.1869 10.28 12.5569 10.906Z",
                            fill: "white",
                          }),
                        }),
                        c.jsx("span", { children: "+2349076490029" }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("svg", {
                          width: "19",
                          height: "15",
                          viewBox: "0 0 19 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: c.jsx("path", {
                            d: "M19 0.9375V4.6875L9.5 8.4375L0 4.6875V0.9375C0 0.68886 0.100089 0.450403 0.278249 0.274588C0.456408 0.0987722 0.698044 0 0.95 0H18.05C18.302 0 18.5436 0.0987722 18.7218 0.274588C18.8999 0.450403 19 0.68886 19 0.9375ZM0 6.70688V14.0625C0 14.3111 0.100089 14.5496 0.278249 14.7254C0.456408 14.9012 0.698044 15 0.95 15H18.05C18.302 15 18.5436 14.9012 18.7218 14.7254C18.8999 14.5496 19 14.3111 19 14.0625V6.70688L9.5 10.4569L0 6.70688Z",
                            fill: "white",
                          }),
                        }),
                        c.jsx("span", { children: "info@roothekharis.com " }),
                      ],
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("svg", {
                          width: "16",
                          height: "20",
                          viewBox: "0 0 16 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: c.jsx("path", {
                            d: "M8.00008 0C3.58908 0 8.14446e-05 3.589 8.14446e-05 7.995C-0.0289186 14.44 7.69608 19.784 8.00008 20C8.00008 20 16.0291 14.44 16.0001 8C16.0001 3.589 12.4111 0 8.00008 0ZM8.00008 12C5.79008 12 4.00008 10.21 4.00008 8C4.00008 5.79 5.79008 4 8.00008 4C10.2101 4 12.0001 5.79 12.0001 8C12.0001 10.21 10.2101 12 8.00008 12Z",
                            fill: "white",
                          }),
                        }),
                        c.jsx("span", {
                          children:
                            "Wing B, 4th floor, Plot 6E, Abdulrahman Okene Street, Off Ligali Ayorinde, Victoria island, Lagos state.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: _2.quicks,
                  children: [
                    c.jsx("label", { children: "Quick Links" }),
                    c.jsxs("ul", {
                      children: [
                        c.jsx(d1, {
                          to: "/",
                          children: c.jsx("li", { children: "Home" }),
                        }),
                        c.jsxs(d1, {
                          to: "/aboutus",
                          children: [
                            " ",
                            c.jsx("li", { children: "About us" }),
                          ],
                        }),
                        c.jsx(d1, {
                          to: "/services",
                          children: c.jsx("li", { children: "Our Services" }),
                        }),
                        c.jsx(d1, {
                          to: "/Articles",
                          children: c.jsx("li", { children: "Articles" }),
                        }),
                        c.jsx(d1, {
                          to: "/contactus",
                          children: c.jsx("li", { children: "Contact Us" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        c.jsx("hr", {}),
        c.jsxs("div", {
          className: _2.label,
          children: [
            c.jsx("label", {
              children: "© Roothe Kharis 2025. All rights reserved",
            }),
            c.jsxs("span", {
              className: _2.span,
              children: [
                c.jsx(ys, {}),
                c.jsxs(d1, {
                  to: "https://www.uppist.xyz/",
                  children: [" ", c.jsx(ps, {})],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function xs() {
  return c.jsxs(c.Fragment, {
    children: [
      c.jsx(Y4, {}),
      c.jsx(Mc, {}),
      c.jsx(Oc, {}),
      c.jsx(Wc, {}),
      c.jsx(is, {}),
      c.jsx(G4, {}),
    ],
  });
}
const Ss = "_contact_1qm2b_5",
  Es = "_touch_1qm2b_27",
  _s = "_form_1qm2b_39",
  js = "_text_1qm2b_93",
  Ls = "_service_1qm2b_105",
  Ms = "_select_1qm2b_137",
  As = "_list_1qm2b_139",
  Ts = "_selected_1qm2b_153",
  Rs = "_menu_1qm2b_243",
  zs = "_submit_1qm2b_299",
  ws = "_image_1qm2b_323",
  T2 = {
    contact: Ss,
    touch: Es,
    form: _s,
    text: js,
    service: Ls,
    select: Ms,
    list: As,
    selected: Ts,
    menu: Rs,
    submit: zs,
    image: ws,
  },
  Os = "./assets/contact-DPWEgEZr.png";
function Ds() {
  M.useRef();
  const [s, o] = M.useState(""),
    [C] = M.useState([
      "Real Estate & Construction",
      "Corporate - Commercial",
      "Energy, Power, Infrastructure",
      "Venture Capital and Private...",
      "Labour and Employment Re...",
      "Intellectual Property",
      "Alternative Dispute Resoluti...",
      "Immigration",
      "Tax Advisory",
      "Finance and Capital Markets",
      "Technology and Digital Eco...",
    ]),
    [f, h] = M.useState(!1);
  function v(_) {
    o(_), h(!1);
  }
  function E() {
    h((_) => !_);
  }
  return (
    M.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    c.jsxs("div", {
      className: T2.contact,
      children: [
        c.jsx("div", {
          className: T2.image,
          children: c.jsx("img", { src: Os, alt: "" }),
        }),
        c.jsxs("div", {
          className: T2.touch,
          children: [
            c.jsxs("div", {
              className: T2.form,
              children: [
                c.jsx(d1, {
                  to: "https://calendly.com/roothekharispartners/30min",
                  children: c.jsx("h2", { children: "Book a session" }),
                }),
                c.jsx("label", {
                  children:
                    "Or Fill the form below and we will contact you swiftly.",
                }),
              ],
            }),
            c.jsxs("form", {
              children: [
                c.jsxs("div", {
                  className: T2.text,
                  children: [
                    c.jsxs("div", {
                      className: `${T2.service} ${T2.select}`,
                      children: [
                        c.jsxs("div", {
                          className: `${T2.list} ${f ? "select-clicked" : ""}`,
                          onClick: E,
                          children: [
                            c.jsx("span", {
                              className: T2.selected,
                              children: s || "Select",
                            }),
                            c.jsx("svg", {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: c.jsx("path", {
                                d: "M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485",
                                stroke: "currentColor",
                                strokeOpacity: "0.8",
                                strokeMiterlimit: "10",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                              }),
                            }),
                          ],
                        }),
                        f &&
                          c.jsx("ul", {
                            className: T2.menu,
                            children: C.map((_) =>
                              c.jsx(
                                "li",
                                {
                                  className: `menu-item ${
                                    s === _ ? "active" : ""
                                  }`,
                                  onClick: () => v(_),
                                  role: "option",
                                  name: "from_service",
                                  children: _,
                                },
                                _
                              )
                            ),
                          }),
                      ],
                    }),
                    c.jsx("input", {
                      type: "hidden",
                      name: "from_service",
                      value: s,
                    }),
                    c.jsx("input", {
                      type: "text",
                      placeholder: "Full name",
                      name: "from_name",
                    }),
                    c.jsx("input", {
                      type: "phonenumber",
                      placeholder: "Phone number",
                      name: "from_number",
                    }),
                    c.jsx("input", {
                      type: "email",
                      placeholder: "Email address",
                      name: "from_email",
                    }),
                    c.jsx("textarea", {
                      placeholder: "Message",
                      name: "message",
                    }),
                  ],
                }),
                c.jsx("button", {
                  type: "submit",
                  className: T2.submit,
                  children: "Send Message",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
function Ns() {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(Y4, {}), c.jsx(Ds, {}), c.jsx(G4, {})],
  });
}
const Us = "_bg1_cptlt_5",
  Vs = "_bg2_cptlt_19",
  Bs = "_service_cptlt_33",
  qs = "_texts_cptlt_59",
  Zs = "_details_cptlt_117",
  Ys = "_detail_cptlt_117",
  Gs = "_lists_cptlt_225",
  Xs = "_mark_cptlt_237",
  Qs = "_h2_cptlt_263",
  Ks = "_container_cptlt_285",
  ks = "_item_cptlt_303",
  R2 = {
    bg1: Us,
    bg2: Vs,
    service: Bs,
    texts: qs,
    details: Zs,
    detail: Ys,
    lists: Gs,
    mark: Xs,
    h2: Qs,
    container: Ks,
    item: ks,
  },
  Xl = [
    {
      id: 0,
      image: "service1.png",
      title: "Real Estate & Construction",
      p1: "Developing, constructing, or expanding a new business operation usually involves the acquisition of real estate properties.",
      p2: "We represent private and institutional investors, property owners, developers, and financiers in a broad spectrum of transactions such as:",
      li1: "Drafting and negotiating real estate contracts and other conveyance documents",
      li2: "Facilitating real estate development plans",
      li3: "Perfecting title to real estate",
      li4: "Structuring the financing of complex real estate transactions, including mortgages",
      li5: "Representing companies in buying and selling of real estate",
      li6: "Ensuring regulatory and permit compliance with pertinent laws and authorizing bodies",
      li7: "Executing lease agreements between various entities",
    },
    {
      id: 1,
      image: "service2.png",
      title: "Corporate & Commercial Law",
      p1: "The dynamics and frameworks of laws, policies and regulation are continually evolving.",
      p2: "Together with our clients, we craft bespoke legal solutions that meet the requirements of modern enterprises in the following ways:",
      li1: "Company secretarial services",
      li2: "Corporate governance",
      li3: "Regulatory compliance",
      li4: "Company Formation and Joint Ventures",
      li5: "Support to in-house legal teams",
      li6: "Nominee Services",
      li7: "General Legal advisory",
      li8: "Due diligence and sustainability reporting",
    },
    {
      id: 2,
      image: "service3.png",
      title: "Energy, Power, Infrastructure",
      subtitle: "Shipping & Maritime Law:",
      p1: "Shipping and Maritime are the foundation of international transport and trade. Roothe - Kharis & Partners provide services to Clients across a spectrum of the shipping and maritime industry including ship owners, ship managers, ship operators, stevedores, cruise lines, non-vessel-operating common carriers, salvage companies, shipyards, manning agents and insurers.",
      p2: "We work with a wide range of experts across the maritime industry including ship brokers, marine engineers, financial consultants, marine underwriters to provide the following services:",
      li1: "Representation in acquisitions, sales and purchases of marine vessels",
      li2: "Ship registration and documentation with regulatory institutions",
      li3: "Advisory on vessel financing, vessels ownership, shipping",
      li4: "Manning",
      li5: "Drafting and reviewing chatter party contracts ",
      li6: "Ship arrest, mortgages, claims & liens and release",
      li7: "Advisory and representation on accidents, salvage and damage claims",
      li8: "Carriage of goods",
    },
    {
      id: 3,
      image: "service4.png",
      title: "Venture Capital and Private Equity",
      p1: "At Roothe-Kharis, we support the objectives of our clients by providing holistic advisory on transactions across the venture capital and private equity life cycle from the pre-transaction phase to exiting an investment.",
      p2: "We are experienced in advising on relevant fund structures, sourcing and screening deals, conducting due diligence including corporate governance requirements, negotiating and structuring deals, and drafting transaction documents (such as valuation agreements, Offer Documents, Partnership Agreements, Trust Deeds, Constitution Documents, Management Agreements, Investment Subscription Agreements, Side Letters).",
    },
    {
      id: 4,
      image: "service5.png",
      title: "Labour and Employment Relations",
      p1: "The fortification of various legislations and regulatory requirements pose uncertainties in the relationship between employers and employees.",
      p2: "Roothe-Kharis & Partners provide sound, practical and comprehensive solutions to SMEs and Large corporations across banking, oil and gas, construction, energy, banking, telecommunications, manufacturing, fast-moving consumer goods and non-profits sectors on:",
      li1: "Processing expatriate quotas and immigration requirements for expatriate employees",
      li2: "Drafting and reviewing employment contracts and code of conduct",
      li3: "Employer-Employee dispute mediation",
      li4: "Wrongful termination and dismissal",
      li5: "Employee compensation for Injury",
      li6: "Pension and Tax liabilities",
      li7: "Health and Safety compliance",
    },
    {
      id: 5,
      image: "service6.png",
      title: "Intellectual Property - Advisory, Registration, Management, etc:",
      p1: "Intellectual assets are the fabric of innovation which forms the bedrock of socio-economic advancements. At Roothe-Kharis & Partners, we have developed a strategic and practical approach to protecting and maximizing the values of our Clients’ various intellectual property assets.",
      p2: "We combine our expertise and knowledge of the corporate and regulatory frameworks in specific industry sectors to provide solutions tailored to our Client’s short and long-term needs. These services include:",
      li1: "Trademark and Patent registration",
      li2: "Portfolio protection",
      li3: "Industrial Designs",
      li4: "Registration renewals",
      li5: "Litigation proceedings in opposition of registration",
      li6: "Intellectual property transactions",
      li7: "Dispute resolution",
      li8: "Intellectual property consultation and general advisory",
    },
    {
      id: 6,
      image: "service7.png",
      title: "Alternative Dispute Resolution Services",
      p1: "At Roothe - Kharis & Partners, we understand that time is a valuable resource and we explore several alternatives in resolving disputes while focused on the interest and objectives of our Clients. We employ strategies beyond negotiation, litigation, mediation, conciliation and arbitration to minimize costs.s",
    },
  ],
  Js = "./assets/service1-9FUplsYO.png",
  $s = "./assets/service2-qoUZPi54.png",
  Ws = "./assets/service3-9qkFdpo4.png",
  Fs = "./assets/service4-DTBO8dpr.png",
  Ps = "./assets/service5-CsrbDMOD.png",
  Is = "./assets/service6-CstQ0BP4.png",
  er = "./assets/service7-BZxOJaUU.png";
function V7() {
  return c.jsx(c.Fragment, {
    children: c.jsx("svg", {
      width: "18",
      height: "17",
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: c.jsx("path", {
        d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
        fill: "#233E81",
      }),
    }),
  });
}
function tr() {
  const s = w3(),
    o = M.useRef({}),
    C = M.useRef({});
  Xl.forEach((v) => {
    o.current[v.title] = M.useRef(null);
  }),
    M.useEffect(() => {
      var v;
      if ((v = s.state) != null && v.serviceid) {
        const E = o.current[s.state.serviceid];
        if (E) {
          const _ = window.innerWidth <= 768;
          E.scrollIntoView({
            behavior: "smooth",
            block: _ ? "start" : "center",
          });
        } else
          C.current &&
            C.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, [s.state]);
  const f = [
      "Immigration",
      "Tax advisory",
      "Technology & digital economy",
      "Finance & capital markets",
    ],
    h = {
      "service1.png": Js,
      "service2.png": $s,
      "service3.png": Ws,
      "service4.png": Fs,
      "service5.png": Ps,
      "service6.png": Is,
      "service7.png": er,
    };
  return c.jsx("div", {
    className: R2.bg1,
    children: c.jsx("div", {
      className: R2.bg2,
      children: c.jsxs("section", {
        className: R2.service,
        children: [
          c.jsxs("div", {
            className: R2.texts,
            children: [
              c.jsx("label", {
                htmlFor: "",
                children: "Who are we servicing?",
              }),
              c.jsx("h2", { children: "Services We Provide" }),
              c.jsx("p", {
                children:
                  "Roothe-Kharis & Partners specializes exclusively in transactional, advisory, and non-litigation services.",
              }),
            ],
          }),
          Xl.map((v, E) =>
            c.jsxs(
              "div",
              {
                className: R2.details,
                ref: (_) => (o.current[v.title.split(" ")[0]] = _),
                children: [
                  c.jsxs(
                    "div",
                    {
                      className: R2.detail,
                      children: [
                        c.jsx("h2", { children: v.title }),
                        c.jsx("span", { children: v.subtitle }),
                        c.jsx("p", { children: v.p1 }),
                        c.jsx("p", { children: v.p2 }),
                        c.jsx("div", {
                          className: R2.lists,
                          children: [
                            v.li1,
                            v.li2,
                            v.li3,
                            v.li4,
                            v.li5,
                            v.li6,
                            v.li7,
                            v.li8,
                          ]
                            .filter((_) => _)
                            .map((_, b) =>
                              c.jsxs(
                                "div",
                                {
                                  className: R2.mark,
                                  children: [
                                    c.jsx(V7, {}),
                                    c.jsx("span", { children: _ }),
                                  ],
                                },
                                b
                              )
                            ),
                        }),
                      ],
                    },
                    E
                  ),
                  c.jsx("img", { src: h[v.image], alt: "" }),
                ],
              },
              v.title
            )
          ),
          c.jsxs("div", {
            className: R2.h2,
            children: [
              c.jsx("h2", { children: "Other Services" }),
              c.jsx("div", {
                className: R2.container,
                ref: C,
                children: f.map((v, E) =>
                  c.jsxs(
                    "div",
                    { className: R2.item, children: [c.jsx(V7, {}), v] },
                    E
                  )
                ),
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function lr() {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(Y4, {}), c.jsx(tr, {}), c.jsx(G4, {})],
  });
}
const ar = "_bg_10ibp_5",
  nr = "_bg2_10ibp_17",
  Ql = { bg: ar, bg2: nr },
  ir = "_commit_90o6r_5",
  ur = "_mark_90o6r_55",
  Kl = { commit: ir, mark: ur },
  cr = "./assets/commitment-YWhY-cz4.png";
function sr() {
  return c.jsxs("section", {
    className: Kl.commit,
    children: [
      c.jsx("img", { src: cr, alt: "" }),
      c.jsxs("div", {
        children: [
          c.jsx("h3", { children: "Our Commitment" }),
          c.jsxs("div", {
            className: Kl.mark,
            children: [
              c.jsxs("div", {
                children: [
                  c.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      c.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: c.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      c.jsx("defs", {
                        children: c.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: c.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("span", {
                    children: [
                      c.jsx("label", {
                        children: " Excellence in Every Detail",
                      }),
                      "We bring precision, diligence, and expertise to every matter, ensuring that our clients receive unmatched service.",
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      c.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: c.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      c.jsx("defs", {
                        children: c.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: c.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("span", {
                    children: [
                      c.jsx("label", {
                        children: " Partnership Beyond Transactions",
                      }),
                      "Our relationships are built on trust, collaboration, and a deep understanding of our clients’ industries, goals, and challenges.",
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      c.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: c.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      c.jsx("defs", {
                        children: c.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: c.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  c.jsxs("span", {
                    children: [
                      c.jsx("label", {
                        children: " Sustainability and Growth",
                      }),
                      "We champion strategies that balance profitability with long-term sustainability, aligning our services with our clients’ ambitions for growth and impact",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const rr = "_vision_1otbr_5",
  fr = "_our_1otbr_19",
  or = "_lists_1otbr_91",
  Cr = "_care_1otbr_113",
  o9 = { vision: rr, our: fr, lists: or, care: Cr },
  dr = "./assets/vision1-B9stO0AG.png";
function hr() {
  const s = [
    "Client-centricity: prioritizing the needs, growth, and success of clients’ businesses.",
    "Adaptability and integrity: RKP is committed to delivering forward-thinking and modern legal solutions while maintaining ethical practices and building trust;",
    "Responsibility: long-term commitment to delivering high-quality services that are not only beneficial today but also contribute to the well-being of future generations.",
    "Excellence and expertise: delivering superior quality in all aspects of service through the deep understanding of both local and international legal frameworks.",
  ];
  return c.jsxs("section", {
    className: o9.vision,
    children: [
      c.jsxs("div", {
        className: o9.our,
        children: [
          c.jsx("img", { src: dr, alt: "" }),
          c.jsxs("div", {
            children: [
              c.jsxs("div", {
                children: [
                  c.jsx("h3", { children: "Our Vision" }),
                  c.jsx("p", {
                    children:
                      "To deliver innovative, sustainable, and client-centered legal solutions, empowering businesses to navigate local and international complexities with global standards of efficiency, professionalism, and excellence.",
                  }),
                ],
              }),
              c.jsxs("div", {
                children: [
                  c.jsx("h3", { children: "Our Mission" }),
                  c.jsx("p", {
                    children:
                      "To provide tailored legal solutions that support the growth of businesses by leveraging innovation, sustainable practices, and global standards, and a deep understanding of local and international legal complexities.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      c.jsxs("div", {
        children: [
          c.jsx("h3", { children: "Our Core Values" }),
          c.jsx("label", { htmlFor: "", children: "C.A.R.E" }),
          c.jsx("div", {
            className: o9.lists,
            children: s.map((o, C) =>
              c.jsxs("div", {
                children: [
                  c.jsx(V7, {}),
                  c.jsx("span", { className: o9.care, children: o }),
                ],
              })
            ),
          }),
        ],
      }),
    ],
  });
}
const mr = "_about_1pgob_5",
  vr = "_button_1pgob_77",
  gr = "_global_1pgob_167",
  D7 = { about: mr, button: vr, global: gr },
  pr = "./assets/About-DXnXrf8n.png";
function yr() {
  return c.jsxs("section", {
    className: D7.about,
    children: [
      c.jsxs("div", {
        children: [
          c.jsxs("div", {
            className: D7.global,
            children: [
              c.jsx("label", { htmlFor: "", children: "Who We Are" }),
              c.jsx("h2", {
                children:
                  "Global standards. Local solutions. Expertly delivered!",
              }),
            ],
          }),
          c.jsx("p", {
            children:
              "Roothe-Kharis & Partners exist to help corporates, SMEs and individuals navigate complexities, seize opportunities, and achieve their goals with confidence",
          }),
          c.jsx("p", {
            children:
              "Leveraging on international best practices, we work with clients from boardrooms to the fields to curate tailored legal solutions that drive meaningful progress, protect interests, and unlock possibilities.",
          }),
          c.jsx(d1, {
            to: "/contactus",
            children: c.jsxs("button", {
              className: D7.button,
              children: [
                "Contact Us",
                c.jsx("svg", {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: c.jsx("path", {
                    d: "M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666",
                    stroke: "#B8824F",
                    "stroke-width": "1",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
      c.jsx("img", { src: pr, alt: "" }),
    ],
  });
}
function br() {
  return c.jsx("div", {
    className: Ql.bg,
    children: c.jsxs("div", {
      className: Ql.bg2,
      children: [
        c.jsx(Y4, {}),
        c.jsx(yr, {}),
        c.jsx(sr, {}),
        c.jsx(hr, {}),
        c.jsx(G4, {}),
      ],
    }),
  });
}
const Hr = "_blog_1qz7v_5",
  xr = "_texts_1qz7v_21",
  Sr = "_container_1qz7v_81",
  Er = "_container1_1qz7v_93",
  _r = "_h3_1qz7v_147",
  jr = "_detail_1qz7v_201",
  Lr = "_intro_1qz7v_213",
  Mr = "_admin_1qz7v_241",
  Ar = "_help_1qz7v_261",
  q2 = {
    blog: Hr,
    texts: xr,
    container: Sr,
    container1: Er,
    h3: _r,
    detail: jr,
    intro: Lr,
    admin: Mr,
    help: Ar,
  },
  Tr = "./assets/image2-B1okrnQ7.jpg",
  sa = [
    {
      image: "image1.jpg",
      image2: "image2.jpg",
      title:
        " The Extent of a Third Party Participation at a Company's Meeting",
      text: " A board meeting is a formal gathering of the directors of a company to deliberate on company affairs and make strategic decisions.",
      sections: [
        {
          heading: "INTRODUCTION",
          content1:
            "A board meeting is a formal gathering of the directors of a company to deliberate on company affairs and make strategic decisions. The primary attendees of a board meeting are the directors of the company. The Companies and Allied Matters Act, 2020 (CAMA 2020) governs the composition, rights, and procedures of board meetings in Nigeria. ",
          content2:
            "The primary attendees of a board meeting are the directors of the company. According to Section 289(1) of CAMA 2020, every company is required to hold board meetings, and these meetings must be attended by the directors who are responsible for managing the company’s affairs. By the provisions of Section 335 of CAMA 2020 a company secretary has a right to attend board meeting because of their role in ensuring that the company compliances with applicable rules and regulations. Section 335 (2) CAMA 2020 provides that ‘’The secretary shall not, without the authority of the board exercise any power vested in the directors’’ this implies that the secretary does not have any power to make decisions at the board meeting.",
          content3:
            "Occasionally, companies invite third parties, such as consultants, legal advisors, or auditors, to provide expert insights during board meetings. However, the extent to which such third parties can participate particularly whether they can move or adopt motions is subject to Corporate Governance principles and statutory regulations, primarily governed by CAMA 2020 and relevant corporate governance codes in Nigeria.",
        },
        {
          heading: "Legal Framework for Board Meetings in Nigeria",
          content:
            "Section 305 CAMA 2020 stipulates that directors are responsible for the general management of a company’s business including the initiation and adoption of motions during board meetings. This responsibility is exclusive to directors and cannot be delegated to non-directors unless expressly provided in the company’s articles or through a valid board resolution. The directors in discharging their managerial duties can invite third parties as advisers or experts to provide guidance on technical matters, such as regulatory compliance, financial structuring, or strategic planning. However, their participation or role at the meeting remains advisory and not voting participation.",
          content2:
            "The Nigerian Code of Corporate Governance (NCCG) 2018, issued by the Financial Reporting Council of Nigeria (FRCN) reinforces that while external professionals such as consultants may provide valuable advice and expertise during board meetings, they do not possess the statutory authority to make binding decisions or to propose and adopt motions during meetings. Their role is advisory, supporting the board’s decision-making process without substituting the directors’ responsibility.  ",
        },
        {
          heading:
            "Legal Implication of a Motion Moved/Adopted by a Third Party at a Company’s Board Meeting",
          points: [
            {
              title: "Lack of Legal Authority:",
              description:
                "A third party not being a member of the board, lacks the legal authority to move or adopt motions. Any motion initiated by a such third party would not satisfy the procedural requirements laid down by CAMA 2020 and the company’s articles of association.",
            },
            {
              title: "Procedural Invalidity:",
              description:
                "Since board decisions must be made solely by directors, a motion moved or adopted by a third party is procedurally flawed. In effect, any decision arising from such a motion would be considered invalid, as it does not reflect a proper exercise of the board’s power.",
            },
            {
              title: "Void or Voidable Decisions:",
              description:
                "Where a board inadvertently allows a third party to interfere in the decision-making process during a meeting, such decision may be challenged on the grounds that it was adopted through an improper process. Courts or regulatory bodies may then deem the decision void or voidable, undermining its enforceability.",
            },
            {
              title: "Breach of Governance Protocols:",
              description:
                "Permitting a third party to move or adopt a motion undermines the integrity of the board’s decision-making process. It may indicate a lapse in adherence to corporate governance best practices, potentially leading to internal disputes or conflicts of interest.",
            },
          ],
        },
        {
          heading: "Conclusion",
          content:
            "Under Nigerian law, specifically the provisions of CAMA 2020 and the Nigerian Code of Corporate Governance, only directors are authorized to move and adopt motions during board meetings. A consultant or adviser as third parties do not have the legal capacity to do so. Any motion moved or adopted by a third party is legally invalid, and decisions based on such motions may be challenged and potentially nullified",
          content2:
            "Companies must adhere strictly to their internal governance frameworks to ensure that decision-making authority remains solely with duly appointed directors, thereby safeguarding the company’s legal and operational integrity. While consultants or advisers may provide indispensable advice, it is imperative that their role remains advisory. Directors should ensure that all formal motions and resolutions are initiated, seconded, and adopted exclusively by the board, thereby upholding the provisions of CAMA and Corporate Governance.",
        },
      ],
    },
  ];
function Rr() {
  const s = { "image1.jpg": Tr };
  return (
    M.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    c.jsxs("section", {
      className: q2.blog,
      children: [
        c.jsxs("div", {
          className: q2.texts,
          children: [
            c.jsx("label", { htmlFor: "", children: "Latest Article" }),
            c.jsx("h2", { children: "Blog Posts" }),
          ],
        }),
        c.jsx("div", {
          className: q2.container,
          children: sa.map((o, C) =>
            c.jsxs(
              "div",
              {
                className: q2.container1,
                children: [
                  c.jsx("img", { src: s[o.image], alt: "" }),
                  c.jsxs("div", {
                    children: [
                      c.jsx("label", { htmlFor: "", children: "19 Mar 2025" }),
                      c.jsxs("div", {
                        className: q2.h3,
                        children: [
                          c.jsx("h3", { children: o.title }),
                          c.jsx(d1, {
                            to: "/blog-details",
                            children: c.jsx("svg", {
                              width: "12",
                              height: "12",
                              viewBox: "0 0 12 12",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: c.jsx("path", {
                                d: "M1 11L11 1M11 1H1M11 1V11",
                                stroke: "#B8824F",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                              }),
                            }),
                          }),
                        ],
                      }),
                      c.jsx("span", { children: o.text }),
                    ],
                  }),
                ],
              },
              C
            )
          ),
        }),
      ],
    })
  );
}
function zr() {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(Y4, {}), c.jsx(Rr, {}), c.jsx(G4, {})],
  });
}
const wr = "./assets/image3-B9EbOBdR.jpg";
function Or() {
  const s = { "image2.jpg": wr };
  return (
    M.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    c.jsx("section", {
      className: q2.detail,
      children: c.jsx("div", {
        className: q2.texts,
        children: sa.map((o, C) => {
          var f,
            h,
            v,
            E,
            _,
            b,
            m,
            T,
            N,
            z,
            D,
            w,
            X,
            V,
            U,
            Q,
            Y,
            C1,
            F,
            H1,
            T1,
            N1,
            q,
            t1,
            B1,
            o2,
            a2,
            C2,
            X1,
            B,
            I,
            J,
            m1,
            g;
          return c.jsxs("div", {
            children: [
              c.jsx("label", { htmlFor: "", children: "Latest Article" }),
              c.jsx("h2", { children: o.title }),
              c.jsx("img", { src: s[o.image2], alt: "" }),
              c.jsxs("div", {
                children: [
                  c.jsx("div", {
                    className: q2.admin,
                    children: c.jsx("span", { children: "19 March 2025" }),
                  }),
                  c.jsxs("div", {
                    className: q2.intro,
                    children: [
                      c.jsx("span", {
                        children:
                          (f = o.sections[0]) == null ? void 0 : f.content1,
                      }),
                      c.jsx("span", {
                        children:
                          (h = o.sections[0]) == null ? void 0 : h.content2,
                      }),
                      c.jsx("span", {
                        children:
                          (v = o.sections[0]) == null ? void 0 : v.content3,
                      }),
                      c.jsx("span", {
                        children: c.jsx("b", {
                          children:
                            (E = o.sections[1]) == null ? void 0 : E.heading,
                        }),
                      }),
                      c.jsx("span", {
                        children:
                          (_ = o.sections[1]) == null ? void 0 : _.content,
                      }),
                      c.jsx("span", {
                        children:
                          (b = o.sections[1]) == null ? void 0 : b.content2,
                      }),
                      c.jsx("span", {
                        children: c.jsx("b", {
                          children:
                            (m = o.sections[2]) == null ? void 0 : m.heading,
                        }),
                      }),
                      c.jsxs("ol", {
                        children: [
                          c.jsxs("li", {
                            children: [
                              c.jsxs("b", {
                                children: [
                                  (z =
                                    (N =
                                      (T = o.sections[2]) == null
                                        ? void 0
                                        : T.points) == null
                                      ? void 0
                                      : N[0]) == null
                                    ? void 0
                                    : z.title,
                                  " ",
                                ],
                              }),
                              (X =
                                (w =
                                  (D = o.sections[2]) == null
                                    ? void 0
                                    : D.points) == null
                                  ? void 0
                                  : w[0]) == null
                                ? void 0
                                : X.description,
                            ],
                          }),
                          " ",
                          c.jsxs("li", {
                            children: [
                              c.jsxs("b", {
                                children: [
                                  " ",
                                  (Q =
                                    (U =
                                      (V = o.sections[2]) == null
                                        ? void 0
                                        : V.points) == null
                                      ? void 0
                                      : U[1]) == null
                                    ? void 0
                                    : Q.title,
                                  " ",
                                ],
                              }),
                              (F =
                                (C1 =
                                  (Y = o.sections[2]) == null
                                    ? void 0
                                    : Y.points) == null
                                  ? void 0
                                  : C1[1]) == null
                                ? void 0
                                : F.description,
                            ],
                          }),
                          " ",
                          c.jsxs("li", {
                            children: [
                              c.jsxs("b", {
                                children: [
                                  (N1 =
                                    (T1 =
                                      (H1 = o.sections[2]) == null
                                        ? void 0
                                        : H1.points) == null
                                      ? void 0
                                      : T1[2]) == null
                                    ? void 0
                                    : N1.title,
                                  " ",
                                ],
                              }),
                              (B1 =
                                (t1 =
                                  (q = o.sections[2]) == null
                                    ? void 0
                                    : q.points) == null
                                  ? void 0
                                  : t1[2]) == null
                                ? void 0
                                : B1.description,
                            ],
                          }),
                          " ",
                          c.jsxs("li", {
                            children: [
                              c.jsxs("b", {
                                children: [
                                  (C2 =
                                    (a2 =
                                      (o2 = o.sections[2]) == null
                                        ? void 0
                                        : o2.points) == null
                                      ? void 0
                                      : a2[3]) == null
                                    ? void 0
                                    : C2.title,
                                  " ",
                                ],
                              }),
                              (I =
                                (B =
                                  (X1 = o.sections[2]) == null
                                    ? void 0
                                    : X1.points) == null
                                  ? void 0
                                  : B[3]) == null
                                ? void 0
                                : I.description,
                            ],
                          }),
                          " ",
                        ],
                      }),
                      c.jsxs("b", {
                        children: [
                          " ",
                          c.jsx("span", {
                            children:
                              (J = o.sections[3]) == null ? void 0 : J.heading,
                          }),
                        ],
                      }),
                      c.jsx("span", {
                        children:
                          (m1 = o.sections[3]) == null ? void 0 : m1.content,
                      }),
                      c.jsx("span", {
                        children:
                          (g = o.sections[3]) == null ? void 0 : g.content2,
                      }),
                      c.jsxs("span", {
                        className: q2.help,
                        children: [
                          "Do you need help?",
                          " ",
                          c.jsx(d1, {
                            to: "https://calendly.com/roothekharispartners/30min",
                            children: c.jsx("p", {
                              children: "Book a consultation.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        }),
      }),
    })
  );
}
function Dr() {
  return c.jsxs(c.Fragment, {
    children: [c.jsx(Y4, {}), c.jsx(Or, {}), c.jsx(G4, {})],
  });
}
function Nr() {
  return c.jsx(mc, {
    children: c.jsxs(Qu, {
      children: [
        c.jsx(a4, { path: "/", element: c.jsx(xs, {}) }),
        c.jsx(a4, { path: "/aboutus", element: c.jsx(br, {}) }),
        c.jsx(a4, { path: "/services", element: c.jsx(lr, {}) }),
        c.jsx(a4, { path: "/Articles", element: c.jsx(zr, {}) }),
        c.jsx(a4, { path: "/blog-details", element: c.jsx(Dr, {}) }),
        c.jsx(a4, { path: "/contactus", element: c.jsx(Ns, {}) }),
      ],
    }),
  });
}
Zi.createRoot(document.getElementById("root")).render(
  c.jsx(M.StrictMode, { children: c.jsx(Nr, {}) })
);
