/** @format */

(function () {
  const f = document.createElement("link").relList;
  if (f && f.supports && f.supports("modulepreload")) return;
  for (const h of document.querySelectorAll('link[rel="modulepreload"]')) o(h);
  new MutationObserver((h) => {
    for (const p of h)
      if (p.type === "childList")
        for (const E of p.addedNodes)
          E.tagName === "LINK" && E.rel === "modulepreload" && o(E);
  }).observe(document, { childList: !0, subtree: !0 });
  function C(h) {
    const p = {};
    return (
      h.integrity && (p.integrity = h.integrity),
      h.referrerPolicy && (p.referrerPolicy = h.referrerPolicy),
      h.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : h.crossOrigin === "anonymous"
        ? (p.credentials = "omit")
        : (p.credentials = "same-origin"),
      p
    );
  }
  function o(h) {
    if (h.ep) return;
    h.ep = !0;
    const p = C(h);
    fetch(h.href, p);
  }
})();
var Lt = { exports: {} },
  Ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ja;
function Ri() {
  if (ja) return Ze;
  ja = 1;
  var c = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.fragment");
  function C(o, h, p) {
    var E = null;
    if (
      (p !== void 0 && (E = "" + p),
      h.key !== void 0 && (E = "" + h.key),
      "key" in h)
    ) {
      p = {};
      for (var _ in h) _ !== "key" && (p[_] = h[_]);
    } else p = h;
    return (
      (h = p.ref),
      { $$typeof: c, type: o, key: E, ref: h !== void 0 ? h : null, props: p }
    );
  }
  return (Ze.Fragment = f), (Ze.jsx = C), (Ze.jsxs = C), Ze;
}
var wa;
function Oi() {
  return wa || ((wa = 1), (Lt.exports = Ri())), Lt.exports;
}
var s = Oi(),
  jt = { exports: {} },
  t1 = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ma;
function Di() {
  if (Ma) return t1;
  Ma = 1;
  var c = Symbol.for("react.transitional.element"),
    f = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    h = Symbol.for("react.profiler"),
    p = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    _ = Symbol.for("react.forward_ref"),
    b = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    A = Symbol.for("react.lazy"),
    N = Symbol.iterator;
  function R(v) {
    return v === null || typeof v != "object"
      ? null
      : ((v = (N && v[N]) || v["@@iterator"]),
        typeof v == "function" ? v : null);
  }
  var z = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    Q = {};
  function V(v, O, W) {
    (this.props = v),
      (this.context = O),
      (this.refs = Q),
      (this.updater = W || z);
  }
  (V.prototype.isReactComponent = {}),
    (V.prototype.setState = function (v, O) {
      if (typeof v != "object" && typeof v != "function" && v != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, v, O, "setState");
    }),
    (V.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, "forceUpdate");
    });
  function U() {}
  U.prototype = V.prototype;
  function K(v, O, W) {
    (this.props = v),
      (this.context = O),
      (this.refs = Q),
      (this.updater = W || z);
  }
  var G = (K.prototype = new U());
  (G.constructor = K), D(G, V.prototype), (G.isPureReactComponent = !0);
  var h1 = Array.isArray,
    P = { H: null, A: null, T: null, S: null },
    w1 = Object.prototype.hasOwnProperty;
  function Z1(v, O, W, J, q, c1) {
    return (
      (W = c1.ref),
      { $$typeof: c, type: v, key: O, ref: W !== void 0 ? W : null, props: c1 }
    );
  }
  function Q1(v, O) {
    return Z1(v.type, O, void 0, void 0, void 0, v.props);
  }
  function Y(v) {
    return typeof v == "object" && v !== null && v.$$typeof === c;
  }
  function a1(v) {
    var O = { "=": "=0", ":": "=2" };
    return (
      "$" +
      v.replace(/[=:]/g, function (W) {
        return O[W];
      })
    );
  }
  var $1 = /\/+/g;
  function q2(v, O) {
    return typeof v == "object" && v !== null && v.key != null
      ? a1("" + v.key)
      : O.toString(36);
  }
  function A2() {}
  function Z2(v) {
    switch (v.status) {
      case "fulfilled":
        return v.value;
      case "rejected":
        throw v.reason;
      default:
        switch (
          (typeof v.status == "string"
            ? v.then(A2, A2)
            : ((v.status = "pending"),
              v.then(
                function (O) {
                  v.status === "pending" &&
                    ((v.status = "fulfilled"), (v.value = O));
                },
                function (O) {
                  v.status === "pending" &&
                    ((v.status = "rejected"), (v.reason = O));
                }
              )),
          v.status)
        ) {
          case "fulfilled":
            return v.value;
          case "rejected":
            throw v.reason;
        }
    }
    throw v;
  }
  function I1(v, O, W, J, q) {
    var c1 = typeof v;
    (c1 === "undefined" || c1 === "boolean") && (v = null);
    var l1 = !1;
    if (v === null) l1 = !0;
    else
      switch (c1) {
        case "bigint":
        case "string":
        case "number":
          l1 = !0;
          break;
        case "object":
          switch (v.$$typeof) {
            case c:
            case f:
              l1 = !0;
              break;
            case A:
              return (l1 = v._init), I1(l1(v._payload), O, W, J, q);
          }
      }
    if (l1)
      return (
        (q = q(v)),
        (l1 = J === "" ? "." + q2(v, 0) : J),
        h1(q)
          ? ((W = ""),
            l1 != null && (W = l1.replace($1, "$&/") + "/"),
            I1(q, O, W, "", function (A1) {
              return A1;
            }))
          : q != null &&
            (Y(q) &&
              (q = Q1(
                q,
                W +
                  (q.key == null || (v && v.key === q.key)
                    ? ""
                    : ("" + q.key).replace($1, "$&/") + "/") +
                  l1
              )),
            O.push(q)),
        1
      );
    l1 = 0;
    var W1 = J === "" ? "." : J + ":";
    if (h1(v))
      for (var d1 = 0; d1 < v.length; d1++)
        (J = v[d1]), (c1 = W1 + q2(J, d1)), (l1 += I1(J, O, W, c1, q));
    else if (((d1 = R(v)), typeof d1 == "function"))
      for (v = d1.call(v), d1 = 0; !(J = v.next()).done; )
        (J = J.value), (c1 = W1 + q2(J, d1++)), (l1 += I1(J, O, W, c1, q));
    else if (c1 === "object") {
      if (typeof v.then == "function") return I1(Z2(v), O, W, J, q);
      throw (
        ((O = String(v)),
        Error(
          "Objects are not valid as a React child (found: " +
            (O === "[object Object]"
              ? "object with keys {" + Object.keys(v).join(", ") + "}"
              : O) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return l1;
  }
  function B(v, O, W) {
    if (v == null) return v;
    var J = [],
      q = 0;
    return (
      I1(v, J, "", "", function (c1) {
        return O.call(W, c1, q++);
      }),
      J
    );
  }
  function e1(v) {
    if (v._status === -1) {
      var O = v._result;
      (O = O()),
        O.then(
          function (W) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 1), (v._result = W));
          },
          function (W) {
            (v._status === 0 || v._status === -1) &&
              ((v._status = 2), (v._result = W));
          }
        ),
        v._status === -1 && ((v._status = 0), (v._result = O));
    }
    if (v._status === 1) return v._result.default;
    throw v._result;
  }
  var F =
    typeof reportError == "function"
      ? reportError
      : function (v) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var O = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof v == "object" &&
                v !== null &&
                typeof v.message == "string"
                  ? String(v.message)
                  : String(v),
              error: v,
            });
            if (!window.dispatchEvent(O)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", v);
            return;
          }
          console.error(v);
        };
  function g1() {}
  return (
    (t1.Children = {
      map: B,
      forEach: function (v, O, W) {
        B(
          v,
          function () {
            O.apply(this, arguments);
          },
          W
        );
      },
      count: function (v) {
        var O = 0;
        return (
          B(v, function () {
            O++;
          }),
          O
        );
      },
      toArray: function (v) {
        return (
          B(v, function (O) {
            return O;
          }) || []
        );
      },
      only: function (v) {
        if (!Y(v))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return v;
      },
    }),
    (t1.Component = V),
    (t1.Fragment = C),
    (t1.Profiler = h),
    (t1.PureComponent = K),
    (t1.StrictMode = o),
    (t1.Suspense = b),
    (t1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (t1.act = function () {
      throw Error("act(...) is not supported in production builds of React.");
    }),
    (t1.cache = function (v) {
      return function () {
        return v.apply(null, arguments);
      };
    }),
    (t1.cloneElement = function (v, O, W) {
      if (v == null)
        throw Error(
          "The argument must be a React element, but you passed " + v + "."
        );
      var J = D({}, v.props),
        q = v.key,
        c1 = void 0;
      if (O != null)
        for (l1 in (O.ref !== void 0 && (c1 = void 0),
        O.key !== void 0 && (q = "" + O.key),
        O))
          !w1.call(O, l1) ||
            l1 === "key" ||
            l1 === "__self" ||
            l1 === "__source" ||
            (l1 === "ref" && O.ref === void 0) ||
            (J[l1] = O[l1]);
      var l1 = arguments.length - 2;
      if (l1 === 1) J.children = W;
      else if (1 < l1) {
        for (var W1 = Array(l1), d1 = 0; d1 < l1; d1++)
          W1[d1] = arguments[d1 + 2];
        J.children = W1;
      }
      return Z1(v.type, q, void 0, void 0, c1, J);
    }),
    (t1.createContext = function (v) {
      return (
        (v = {
          $$typeof: E,
          _currentValue: v,
          _currentValue2: v,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (v.Provider = v),
        (v.Consumer = { $$typeof: p, _context: v }),
        v
      );
    }),
    (t1.createElement = function (v, O, W) {
      var J,
        q = {},
        c1 = null;
      if (O != null)
        for (J in (O.key !== void 0 && (c1 = "" + O.key), O))
          w1.call(O, J) &&
            J !== "key" &&
            J !== "__self" &&
            J !== "__source" &&
            (q[J] = O[J]);
      var l1 = arguments.length - 2;
      if (l1 === 1) q.children = W;
      else if (1 < l1) {
        for (var W1 = Array(l1), d1 = 0; d1 < l1; d1++)
          W1[d1] = arguments[d1 + 2];
        q.children = W1;
      }
      if (v && v.defaultProps)
        for (J in ((l1 = v.defaultProps), l1))
          q[J] === void 0 && (q[J] = l1[J]);
      return Z1(v, c1, void 0, void 0, null, q);
    }),
    (t1.createRef = function () {
      return { current: null };
    }),
    (t1.forwardRef = function (v) {
      return { $$typeof: _, render: v };
    }),
    (t1.isValidElement = Y),
    (t1.lazy = function (v) {
      return { $$typeof: A, _payload: { _status: -1, _result: v }, _init: e1 };
    }),
    (t1.memo = function (v, O) {
      return { $$typeof: m, type: v, compare: O === void 0 ? null : O };
    }),
    (t1.startTransition = function (v) {
      var O = P.T,
        W = {};
      P.T = W;
      try {
        var J = v(),
          q = P.S;
        q !== null && q(W, J),
          typeof J == "object" &&
            J !== null &&
            typeof J.then == "function" &&
            J.then(g1, F);
      } catch (c1) {
        F(c1);
      } finally {
        P.T = O;
      }
    }),
    (t1.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (t1.use = function (v) {
      return P.H.use(v);
    }),
    (t1.useActionState = function (v, O, W) {
      return P.H.useActionState(v, O, W);
    }),
    (t1.useCallback = function (v, O) {
      return P.H.useCallback(v, O);
    }),
    (t1.useContext = function (v) {
      return P.H.useContext(v);
    }),
    (t1.useDebugValue = function () {}),
    (t1.useDeferredValue = function (v, O) {
      return P.H.useDeferredValue(v, O);
    }),
    (t1.useEffect = function (v, O) {
      return P.H.useEffect(v, O);
    }),
    (t1.useId = function () {
      return P.H.useId();
    }),
    (t1.useImperativeHandle = function (v, O, W) {
      return P.H.useImperativeHandle(v, O, W);
    }),
    (t1.useInsertionEffect = function (v, O) {
      return P.H.useInsertionEffect(v, O);
    }),
    (t1.useLayoutEffect = function (v, O) {
      return P.H.useLayoutEffect(v, O);
    }),
    (t1.useMemo = function (v, O) {
      return P.H.useMemo(v, O);
    }),
    (t1.useOptimistic = function (v, O) {
      return P.H.useOptimistic(v, O);
    }),
    (t1.useReducer = function (v, O, W) {
      return P.H.useReducer(v, O, W);
    }),
    (t1.useRef = function (v) {
      return P.H.useRef(v);
    }),
    (t1.useState = function (v) {
      return P.H.useState(v);
    }),
    (t1.useSyncExternalStore = function (v, O, W) {
      return P.H.useSyncExternalStore(v, O, W);
    }),
    (t1.useTransition = function () {
      return P.H.useTransition();
    }),
    (t1.version = "19.0.0"),
    t1
  );
}
var Aa;
function Bt() {
  return Aa || ((Aa = 1), (jt.exports = Di())), jt.exports;
}
var j = Bt(),
  wt = { exports: {} },
  Ye = {},
  Mt = { exports: {} },
  At = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta;
function zi() {
  return (
    Ta ||
      ((Ta = 1),
      (function (c) {
        function f(B, e1) {
          var F = B.length;
          B.push(e1);
          e: for (; 0 < F; ) {
            var g1 = (F - 1) >>> 1,
              v = B[g1];
            if (0 < h(v, e1)) (B[g1] = e1), (B[F] = v), (F = g1);
            else break e;
          }
        }
        function C(B) {
          return B.length === 0 ? null : B[0];
        }
        function o(B) {
          if (B.length === 0) return null;
          var e1 = B[0],
            F = B.pop();
          if (F !== e1) {
            B[0] = F;
            e: for (var g1 = 0, v = B.length, O = v >>> 1; g1 < O; ) {
              var W = 2 * (g1 + 1) - 1,
                J = B[W],
                q = W + 1,
                c1 = B[q];
              if (0 > h(J, F))
                q < v && 0 > h(c1, J)
                  ? ((B[g1] = c1), (B[q] = F), (g1 = q))
                  : ((B[g1] = J), (B[W] = F), (g1 = W));
              else if (q < v && 0 > h(c1, F))
                (B[g1] = c1), (B[q] = F), (g1 = q);
              else break e;
            }
          }
          return e1;
        }
        function h(B, e1) {
          var F = B.sortIndex - e1.sortIndex;
          return F !== 0 ? F : B.id - e1.id;
        }
        if (
          ((c.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var p = performance;
          c.unstable_now = function () {
            return p.now();
          };
        } else {
          var E = Date,
            _ = E.now();
          c.unstable_now = function () {
            return E.now() - _;
          };
        }
        var b = [],
          m = [],
          A = 1,
          N = null,
          R = 3,
          z = !1,
          D = !1,
          Q = !1,
          V = typeof setTimeout == "function" ? setTimeout : null,
          U = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function G(B) {
          for (var e1 = C(m); e1 !== null; ) {
            if (e1.callback === null) o(m);
            else if (e1.startTime <= B)
              o(m), (e1.sortIndex = e1.expirationTime), f(b, e1);
            else break;
            e1 = C(m);
          }
        }
        function h1(B) {
          if (((Q = !1), G(B), !D))
            if (C(b) !== null) (D = !0), Z2();
            else {
              var e1 = C(m);
              e1 !== null && I1(h1, e1.startTime - B);
            }
        }
        var P = !1,
          w1 = -1,
          Z1 = 5,
          Q1 = -1;
        function Y() {
          return !(c.unstable_now() - Q1 < Z1);
        }
        function a1() {
          if (P) {
            var B = c.unstable_now();
            Q1 = B;
            var e1 = !0;
            try {
              e: {
                (D = !1), Q && ((Q = !1), U(w1), (w1 = -1)), (z = !0);
                var F = R;
                try {
                  t: {
                    for (
                      G(B), N = C(b);
                      N !== null && !(N.expirationTime > B && Y());

                    ) {
                      var g1 = N.callback;
                      if (typeof g1 == "function") {
                        (N.callback = null), (R = N.priorityLevel);
                        var v = g1(N.expirationTime <= B);
                        if (((B = c.unstable_now()), typeof v == "function")) {
                          (N.callback = v), G(B), (e1 = !0);
                          break t;
                        }
                        N === C(b) && o(b), G(B);
                      } else o(b);
                      N = C(b);
                    }
                    if (N !== null) e1 = !0;
                    else {
                      var O = C(m);
                      O !== null && I1(h1, O.startTime - B), (e1 = !1);
                    }
                  }
                  break e;
                } finally {
                  (N = null), (R = F), (z = !1);
                }
                e1 = void 0;
              }
            } finally {
              e1 ? $1() : (P = !1);
            }
          }
        }
        var $1;
        if (typeof K == "function")
          $1 = function () {
            K(a1);
          };
        else if (typeof MessageChannel < "u") {
          var q2 = new MessageChannel(),
            A2 = q2.port2;
          (q2.port1.onmessage = a1),
            ($1 = function () {
              A2.postMessage(null);
            });
        } else
          $1 = function () {
            V(a1, 0);
          };
        function Z2() {
          P || ((P = !0), $1());
        }
        function I1(B, e1) {
          w1 = V(function () {
            B(c.unstable_now());
          }, e1);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            D || z || ((D = !0), Z2());
          }),
          (c.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (Z1 = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return R;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return C(b);
          }),
          (c.unstable_next = function (B) {
            switch (R) {
              case 1:
              case 2:
              case 3:
                var e1 = 3;
                break;
              default:
                e1 = R;
            }
            var F = R;
            R = e1;
            try {
              return B();
            } finally {
              R = F;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (B, e1) {
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
            var F = R;
            R = B;
            try {
              return e1();
            } finally {
              R = F;
            }
          }),
          (c.unstable_scheduleCallback = function (B, e1, F) {
            var g1 = c.unstable_now();
            switch (
              (typeof F == "object" && F !== null
                ? ((F = F.delay),
                  (F = typeof F == "number" && 0 < F ? g1 + F : g1))
                : (F = g1),
              B)
            ) {
              case 1:
                var v = -1;
                break;
              case 2:
                v = 250;
                break;
              case 5:
                v = 1073741823;
                break;
              case 4:
                v = 1e4;
                break;
              default:
                v = 5e3;
            }
            return (
              (v = F + v),
              (B = {
                id: A++,
                callback: e1,
                priorityLevel: B,
                startTime: F,
                expirationTime: v,
                sortIndex: -1,
              }),
              F > g1
                ? ((B.sortIndex = F),
                  f(m, B),
                  C(b) === null &&
                    B === C(m) &&
                    (Q ? (U(w1), (w1 = -1)) : (Q = !0), I1(h1, F - g1)))
                : ((B.sortIndex = v), f(b, B), D || z || ((D = !0), Z2())),
              B
            );
          }),
          (c.unstable_shouldYield = Y),
          (c.unstable_wrapCallback = function (B) {
            var e1 = R;
            return function () {
              var F = R;
              R = e1;
              try {
                return B.apply(this, arguments);
              } finally {
                R = F;
              }
            };
          });
      })(At)),
    At
  );
}
var Ra;
function Ni() {
  return Ra || ((Ra = 1), (Mt.exports = zi())), Mt.exports;
}
var Tt = { exports: {} },
  J1 = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Oa;
function Ui() {
  if (Oa) return J1;
  Oa = 1;
  var c = Bt();
  function f(b) {
    var m = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var A = 2; A < arguments.length; A++)
        m += "&args[]=" + encodeURIComponent(arguments[A]);
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
  var o = {
      d: {
        f: C,
        r: function () {
          throw Error(f(522));
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
  function p(b, m, A) {
    var N =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: N == null ? null : "" + N,
      children: b,
      containerInfo: m,
      implementation: A,
    };
  }
  var E = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(b, m) {
    if (b === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (J1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (J1.createPortal = function (b, m) {
      var A =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(f(299));
      return p(b, m, null, A);
    }),
    (J1.flushSync = function (b) {
      var m = E.T,
        A = o.p;
      try {
        if (((E.T = null), (o.p = 2), b)) return b();
      } finally {
        (E.T = m), (o.p = A), o.d.f();
      }
    }),
    (J1.preconnect = function (b, m) {
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
        o.d.C(b, m));
    }),
    (J1.prefetchDNS = function (b) {
      typeof b == "string" && o.d.D(b);
    }),
    (J1.preinit = function (b, m) {
      if (typeof b == "string" && m && typeof m.as == "string") {
        var A = m.as,
          N = _(A, m.crossOrigin),
          R = typeof m.integrity == "string" ? m.integrity : void 0,
          z = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        A === "style"
          ? o.d.S(b, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: N,
              integrity: R,
              fetchPriority: z,
            })
          : A === "script" &&
            o.d.X(b, {
              crossOrigin: N,
              integrity: R,
              fetchPriority: z,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (J1.preinitModule = function (b, m) {
      if (typeof b == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var A = _(m.as, m.crossOrigin);
            o.d.M(b, {
              crossOrigin: A,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && o.d.M(b);
    }),
    (J1.preload = function (b, m) {
      if (
        typeof b == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var A = m.as,
          N = _(A, m.crossOrigin);
        o.d.L(b, A, {
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
    (J1.preloadModule = function (b, m) {
      if (typeof b == "string")
        if (m) {
          var A = _(m.as, m.crossOrigin);
          o.d.m(b, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: A,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else o.d.m(b);
    }),
    (J1.requestFormReset = function (b) {
      o.d.r(b);
    }),
    (J1.unstable_batchedUpdates = function (b, m) {
      return b(m);
    }),
    (J1.useFormState = function (b, m, A) {
      return E.H.useFormState(b, m, A);
    }),
    (J1.useFormStatus = function () {
      return E.H.useHostTransitionStatus();
    }),
    (J1.version = "19.0.0"),
    J1
  );
}
var Da;
function Vi() {
  if (Da) return Tt.exports;
  Da = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), (Tt.exports = Ui()), Tt.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var za;
function Bi() {
  if (za) return Ye;
  za = 1;
  var c = Ni(),
    f = Bt(),
    C = Vi();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
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
  var p = Symbol.for("react.element"),
    E = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    b = Symbol.for("react.fragment"),
    m = Symbol.for("react.strict_mode"),
    A = Symbol.for("react.profiler"),
    N = Symbol.for("react.provider"),
    R = Symbol.for("react.consumer"),
    z = Symbol.for("react.context"),
    D = Symbol.for("react.forward_ref"),
    Q = Symbol.for("react.suspense"),
    V = Symbol.for("react.suspense_list"),
    U = Symbol.for("react.memo"),
    K = Symbol.for("react.lazy"),
    G = Symbol.for("react.offscreen"),
    h1 = Symbol.for("react.memo_cache_sentinel"),
    P = Symbol.iterator;
  function w1(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (P && e[P]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Z1 = Symbol.for("react.client.reference");
  function Q1(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Z1 ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case b:
        return "Fragment";
      case _:
        return "Portal";
      case A:
        return "Profiler";
      case m:
        return "StrictMode";
      case Q:
        return "Suspense";
      case V:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case z:
          return (e.displayName || "Context") + ".Provider";
        case R:
          return (e._context.displayName || "Context") + ".Consumer";
        case D:
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
            (t = e.displayName || null), t !== null ? t : Q1(e.type) || "Memo"
          );
        case K:
          (t = e._payload), (e = e._init);
          try {
            return Q1(e(t));
          } catch {}
      }
    return null;
  }
  var Y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    a1 = Object.assign,
    $1,
    q2;
  function A2(e) {
    if ($1 === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ($1 = (t && t[1]) || ""),
          (q2 =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      $1 +
      e +
      q2
    );
  }
  var Z2 = !1;
  function I1(e, t) {
    if (!e || Z2) return "";
    Z2 = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (L) {
                  var S = L;
                }
                Reflect.construct(e, [], T);
              } else {
                try {
                  T.call();
                } catch (L) {
                  S = L;
                }
                e.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (L) {
                S = L;
              }
              (T = e()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (L) {
            if (L && S && typeof L.stack == "string") return [L.stack, S.stack];
          }
          return [null, null];
        },
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(l.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = l.DetermineComponentFrameRoot(),
        u = i[0],
        r = i[1];
      if (u && r) {
        var d = u.split(`
`),
          y = r.split(`
`);
        for (
          n = l = 0;
          l < d.length && !d[l].includes("DetermineComponentFrameRoot");

        )
          l++;
        for (; n < y.length && !y[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (l === d.length || n === y.length)
          for (
            l = d.length - 1, n = y.length - 1;
            1 <= l && 0 <= n && d[l] !== y[n];

          )
            n--;
        for (; 1 <= l && 0 <= n; l--, n--)
          if (d[l] !== y[n]) {
            if (l !== 1 || n !== 1)
              do
                if ((l--, n--, 0 > n || d[l] !== y[n])) {
                  var w =
                    `
` + d[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      w.includes("<anonymous>") &&
                      (w = w.replace("<anonymous>", e.displayName)),
                    w
                  );
                }
              while (1 <= l && 0 <= n);
            break;
          }
      }
    } finally {
      (Z2 = !1), (Error.prepareStackTrace = a);
    }
    return (a = e ? e.displayName || e.name : "") ? A2(a) : "";
  }
  function B(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return A2(e.type);
      case 16:
        return A2("Lazy");
      case 13:
        return A2("Suspense");
      case 19:
        return A2("SuspenseList");
      case 0:
      case 15:
        return (e = I1(e.type, !1)), e;
      case 11:
        return (e = I1(e.type.render, !1)), e;
      case 1:
        return (e = I1(e.type, !0)), e;
      default:
        return "";
    }
  }
  function e1(e) {
    try {
      var t = "";
      do (t += B(e)), (e = e.return);
      while (e);
      return t;
    } catch (a) {
      return (
        `
Error generating stack: ` +
        a.message +
        `
` +
        a.stack
      );
    }
  }
  function F(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (a = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function g1(e) {
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
  function v(e) {
    if (F(e) !== e) throw Error(o(188));
  }
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = F(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, l = t; ; ) {
      var n = a.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((l = n.return), l !== null)) {
          a = l;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === a) return v(n), e;
          if (i === l) return v(n), t;
          i = i.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== l.return) (a = n), (l = i);
      else {
        for (var u = !1, r = n.child; r; ) {
          if (r === a) {
            (u = !0), (a = n), (l = i);
            break;
          }
          if (r === l) {
            (u = !0), (l = n), (a = i);
            break;
          }
          r = r.sibling;
        }
        if (!u) {
          for (r = i.child; r; ) {
            if (r === a) {
              (u = !0), (a = i), (l = n);
              break;
            }
            if (r === l) {
              (u = !0), (l = i), (a = n);
              break;
            }
            r = r.sibling;
          }
          if (!u) throw Error(o(189));
        }
      }
      if (a.alternate !== l) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function W(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = W(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var J = Array.isArray,
    q = C.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    c1 = { pending: !1, data: null, method: null, action: null },
    l1 = [],
    W1 = -1;
  function d1(e) {
    return { current: e };
  }
  function A1(e) {
    0 > W1 || ((e.current = l1[W1]), (l1[W1] = null), W1--);
  }
  function H1(e, t) {
    W1++, (l1[W1] = e.current), (e.current = t);
  }
  var T2 = d1(null),
    X4 = d1(null),
    c3 = d1(null),
    $e = d1(null);
  function We(e, t) {
    switch ((H1(c3, t), H1(X4, e), H1(T2, null), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) && (t = t.namespaceURI) ? aa(t) : 0;
        break;
      default:
        if (
          ((e = e === 8 ? t.parentNode : t),
          (t = e.tagName),
          (e = e.namespaceURI))
        )
          (e = aa(e)), (t = la(e, t));
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
    A1(T2), H1(T2, t);
  }
  function i4() {
    A1(T2), A1(X4), A1(c3);
  }
  function v5(e) {
    e.memoizedState !== null && H1($e, e);
    var t = T2.current,
      a = la(t, e.type);
    t !== a && (H1(X4, e), H1(T2, a));
  }
  function Fe(e) {
    X4.current === e && (A1(T2), A1(X4)),
      $e.current === e && (A1($e), (Ne._currentValue = c1));
  }
  var g5 = Object.prototype.hasOwnProperty,
    y5 = c.unstable_scheduleCallback,
    b5 = c.unstable_cancelCallback,
    rl = c.unstable_shouldYield,
    ol = c.unstable_requestPaint,
    R2 = c.unstable_now,
    fl = c.unstable_getCurrentPriorityLevel,
    Qt = c.unstable_ImmediatePriority,
    Kt = c.unstable_UserBlockingPriority,
    Pe = c.unstable_NormalPriority,
    Cl = c.unstable_LowPriority,
    kt = c.unstable_IdlePriority,
    dl = c.log,
    hl = c.unstable_setDisableYieldValue,
    Q4 = null,
    l2 = null;
  function ml(e) {
    if (l2 && typeof l2.onCommitFiberRoot == "function")
      try {
        l2.onCommitFiberRoot(Q4, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  function r3(e) {
    if (
      (typeof dl == "function" && hl(e),
      l2 && typeof l2.setStrictMode == "function")
    )
      try {
        l2.setStrictMode(Q4, e);
      } catch {}
  }
  var n2 = Math.clz32 ? Math.clz32 : gl,
    pl = Math.log,
    vl = Math.LN2;
  function gl(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((pl(e) / vl) | 0)) | 0;
  }
  var Ie = 128,
    e8 = 4194304;
  function D3(e) {
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
  function t8(e, t) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0,
      n = e.suspendedLanes,
      i = e.pingedLanes,
      u = e.warmLanes;
    e = e.finishedLanes !== 0;
    var r = a & 134217727;
    return (
      r !== 0
        ? ((a = r & ~n),
          a !== 0
            ? (l = D3(a))
            : ((i &= r),
              i !== 0
                ? (l = D3(i))
                : e || ((u = r & ~u), u !== 0 && (l = D3(u)))))
        : ((r = a & ~n),
          r !== 0
            ? (l = D3(r))
            : i !== 0
            ? (l = D3(i))
            : e || ((u = a & ~u), u !== 0 && (l = D3(u)))),
      l === 0
        ? 0
        : t !== 0 &&
          t !== l &&
          !(t & n) &&
          ((n = l & -l),
          (u = t & -t),
          n >= u || (n === 32 && (u & 4194176) !== 0))
        ? t
        : l
    );
  }
  function K4(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function yl(e, t) {
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
  function Jt() {
    var e = Ie;
    return (Ie <<= 1), !(Ie & 4194176) && (Ie = 128), e;
  }
  function $t() {
    var e = e8;
    return (e8 <<= 1), !(e8 & 62914560) && (e8 = 4194304), e;
  }
  function H5(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function k4(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function bl(e, t, a, l, n, i) {
    var u = e.pendingLanes;
    (e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0);
    var r = e.entanglements,
      d = e.expirationTimes,
      y = e.hiddenUpdates;
    for (a = u & ~a; 0 < a; ) {
      var w = 31 - n2(a),
        T = 1 << w;
      (r[w] = 0), (d[w] = -1);
      var S = y[w];
      if (S !== null)
        for (y[w] = null, w = 0; w < S.length; w++) {
          var L = S[w];
          L !== null && (L.lane &= -536870913);
        }
      a &= ~T;
    }
    l !== 0 && Wt(e, l, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(u & ~t));
  }
  function Wt(e, t, a) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var l = 31 - n2(t);
    (e.entangledLanes |= t),
      (e.entanglements[l] = e.entanglements[l] | 1073741824 | (a & 4194218));
  }
  function Ft(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var l = 31 - n2(a),
        n = 1 << l;
      (n & t) | (e[l] & t) && (e[l] |= t), (a &= ~n);
    }
  }
  function Pt(e) {
    return (
      (e &= -e), 2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
    );
  }
  function It() {
    var e = q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : Ha(e.type));
  }
  function Hl(e, t) {
    var a = q.p;
    try {
      return (q.p = e), t();
    } finally {
      q.p = a;
    }
  }
  var o3 = Math.random().toString(36).slice(2),
    K1 = "__reactFiber$" + o3,
    e2 = "__reactProps$" + o3,
    u4 = "__reactContainer$" + o3,
    x5 = "__reactEvents$" + o3,
    xl = "__reactListeners$" + o3,
    Sl = "__reactHandles$" + o3,
    e6 = "__reactResources$" + o3,
    J4 = "__reactMarker$" + o3;
  function S5(e) {
    delete e[K1], delete e[e2], delete e[x5], delete e[xl], delete e[Sl];
  }
  function z3(e) {
    var t = e[K1];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[u4] || a[K1])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = ua(e); e !== null; ) {
            if ((a = e[K1])) return a;
            e = ua(e);
          }
        return t;
      }
      (e = a), (a = e.parentNode);
    }
    return null;
  }
  function s4(e) {
    if ((e = e[K1] || e[u4])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function $4(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function c4(e) {
    var t = e[e6];
    return (
      t ||
        (t = e[e6] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function U1(e) {
    e[J4] = !0;
  }
  var t6 = new Set(),
    a6 = {};
  function N3(e, t) {
    r4(e, t), r4(e + "Capture", t);
  }
  function r4(e, t) {
    for (a6[e] = t, e = 0; e < t.length; e++) t6.add(t[e]);
  }
  var Y2 = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    El = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    l6 = {},
    n6 = {};
  function _l(e) {
    return g5.call(n6, e)
      ? !0
      : g5.call(l6, e)
      ? !1
      : El.test(e)
      ? (n6[e] = !0)
      : ((l6[e] = !0), !1);
  }
  function a8(e, t, a) {
    if (_l(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function l8(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function G2(e, t, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + l);
    }
  }
  function o2(e) {
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
  function i6(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ll(e) {
    var t = i6(e) ? "checked" : "value",
      a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      l = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof a < "u" &&
      typeof a.get == "function" &&
      typeof a.set == "function"
    ) {
      var n = a.get,
        i = a.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (u) {
            (l = "" + u), i.call(this, u);
          },
        }),
        Object.defineProperty(e, t, { enumerable: a.enumerable }),
        {
          getValue: function () {
            return l;
          },
          setValue: function (u) {
            l = "" + u;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function n8(e) {
    e._valueTracker || (e._valueTracker = Ll(e));
  }
  function u6(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      l = "";
    return (
      e && (l = i6(e) ? (e.checked ? "true" : "false") : e.value),
      (e = l),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function i8(e) {
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
  var jl = /[\n"\\]/g;
  function f2(e) {
    return e.replace(jl, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function E5(e, t, a, l, n, i, u, r) {
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
            (e.value = "" + o2(t))
          : e.value !== "" + o2(t) && (e.value = "" + o2(t))
        : (u !== "submit" && u !== "reset") || e.removeAttribute("value"),
      t != null
        ? _5(e, u, o2(t))
        : a != null
        ? _5(e, u, o2(a))
        : l != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.name = "" + o2(r))
        : e.removeAttribute("name");
  }
  function s6(e, t, a, l, n, i, u, r) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || a != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      (a = a != null ? "" + o2(a) : ""),
        (t = t != null ? "" + o2(t) : a),
        r || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (l = l ?? n),
      (l = typeof l != "function" && typeof l != "symbol" && !!l),
      (e.checked = r ? e.checked : !!l),
      (e.defaultChecked = !!l),
      u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.name = u);
  }
  function _5(e, t, a) {
    (t === "number" && i8(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function o4(e, t, a, l) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < a.length; n++) t["$" + a[n]] = !0;
      for (a = 0; a < e.length; a++)
        (n = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== n && (e[a].selected = n),
          n && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + o2(a), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === a) {
          (e[n].selected = !0), l && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function c6(e, t, a) {
    if (
      t != null &&
      ((t = "" + o2(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + o2(a) : "";
  }
  function r6(e, t, a, l) {
    if (t == null) {
      if (l != null) {
        if (a != null) throw Error(o(92));
        if (J(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), (t = a);
    }
    (a = o2(t)),
      (e.defaultValue = a),
      (l = e.textContent),
      l === a && l !== "" && l !== null && (e.value = l);
  }
  function f4(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wl = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function o6(e, t, a) {
    var l = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? l
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : l
      ? e.setProperty(t, a)
      : typeof a != "number" || a === 0 || wl.has(t)
      ? t === "float"
        ? (e.cssFloat = a)
        : (e[t] = ("" + a).trim())
      : (e[t] = a + "px");
  }
  function f6(e, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var l in a)
        !a.hasOwnProperty(l) ||
          (t != null && t.hasOwnProperty(l)) ||
          (l.indexOf("--") === 0
            ? e.setProperty(l, "")
            : l === "float"
            ? (e.cssFloat = "")
            : (e[l] = ""));
      for (var n in t)
        (l = t[n]), t.hasOwnProperty(n) && a[n] !== l && o6(e, n, l);
    } else for (var i in t) t.hasOwnProperty(i) && o6(e, i, t[i]);
  }
  function L5(e) {
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
  var Ml = new Map([
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
    Al =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function u8(e) {
    return Al.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var j5 = null;
  function w5(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var C4 = null,
    d4 = null;
  function C6(e) {
    var t = s4(e);
    if (t && (e = t.stateNode)) {
      var a = e[e2] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (E5(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + f2("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var l = a[t];
              if (l !== e && l.form === e.form) {
                var n = l[e2] || null;
                if (!n) throw Error(o(90));
                E5(
                  l,
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
            for (t = 0; t < a.length; t++)
              (l = a[t]), l.form === e.form && u6(l);
          }
          break e;
        case "textarea":
          c6(e, a.value, a.defaultValue);
          break e;
        case "select":
          (t = a.value), t != null && o4(e, !!a.multiple, t, !1);
      }
    }
  }
  var M5 = !1;
  function d6(e, t, a) {
    if (M5) return e(t, a);
    M5 = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (
        ((M5 = !1),
        (C4 !== null || d4 !== null) &&
          (G8(), C4 && ((t = C4), (e = d4), (d4 = C4 = null), C6(t), e)))
      )
        for (t = 0; t < e.length; t++) C6(e[t]);
    }
  }
  function W4(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[e2] || null;
    if (l === null) return null;
    a = l[t];
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
        (l = !l.disabled) ||
          ((e = e.type),
          (l = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !l);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var A5 = !1;
  if (Y2)
    try {
      var F4 = {};
      Object.defineProperty(F4, "passive", {
        get: function () {
          A5 = !0;
        },
      }),
        window.addEventListener("test", F4, F4),
        window.removeEventListener("test", F4, F4);
    } catch {
      A5 = !1;
    }
  var f3 = null,
    T5 = null,
    s8 = null;
  function h6() {
    if (s8) return s8;
    var e,
      t = T5,
      a = t.length,
      l,
      n = "value" in f3 ? f3.value : f3.textContent,
      i = n.length;
    for (e = 0; e < a && t[e] === n[e]; e++);
    var u = a - e;
    for (l = 1; l <= u && t[a - l] === n[i - l]; l++);
    return (s8 = n.slice(e, 1 < l ? 1 - l : void 0));
  }
  function c8(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function r8() {
    return !0;
  }
  function m6() {
    return !1;
  }
  function t2(e) {
    function t(a, l, n, i, u) {
      (this._reactName = a),
        (this._targetInst = n),
        (this.type = l),
        (this.nativeEvent = i),
        (this.target = u),
        (this.currentTarget = null);
      for (var r in e)
        e.hasOwnProperty(r) && ((a = e[r]), (this[r] = a ? a(i) : i[r]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? r8
          : m6),
        (this.isPropagationStopped = m6),
        this
      );
    }
    return (
      a1(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = r8));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = r8));
        },
        persist: function () {},
        isPersistent: r8,
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
    o8 = t2(U3),
    P4 = a1({}, U3, { view: 0, detail: 0 }),
    Tl = t2(P4),
    R5,
    O5,
    I4,
    f8 = a1({}, P4, {
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
      getModifierState: z5,
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
                ? ((R5 = e.screenX - I4.screenX), (O5 = e.screenY - I4.screenY))
                : (O5 = R5 = 0),
              (I4 = e)),
            R5);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : O5;
      },
    }),
    p6 = t2(f8),
    Rl = a1({}, f8, { dataTransfer: 0 }),
    Ol = t2(Rl),
    Dl = a1({}, P4, { relatedTarget: 0 }),
    D5 = t2(Dl),
    zl = a1({}, U3, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nl = t2(zl),
    Ul = a1({}, U3, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    Vl = t2(Ul),
    Bl = a1({}, U3, { data: 0 }),
    v6 = t2(Bl),
    ql = {
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
    Zl = {
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
    Yl = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Gl(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Yl[e])
      ? !!t[e]
      : !1;
  }
  function z5() {
    return Gl;
  }
  var Xl = a1({}, P4, {
      key: function (e) {
        if (e.key) {
          var t = ql[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = c8(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Zl[e.keyCode] || "Unidentified"
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
      getModifierState: z5,
      charCode: function (e) {
        return e.type === "keypress" ? c8(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? c8(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    Ql = t2(Xl),
    Kl = a1({}, f8, {
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
    g6 = t2(Kl),
    kl = a1({}, P4, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: z5,
    }),
    Jl = t2(kl),
    $l = a1({}, U3, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Wl = t2($l),
    Fl = a1({}, f8, {
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
    Pl = t2(Fl),
    Il = a1({}, U3, { newState: 0, oldState: 0 }),
    en = t2(Il),
    tn = [9, 13, 27, 32],
    N5 = Y2 && "CompositionEvent" in window,
    ee = null;
  Y2 && "documentMode" in document && (ee = document.documentMode);
  var an = Y2 && "TextEvent" in window && !ee,
    y6 = Y2 && (!N5 || (ee && 8 < ee && 11 >= ee)),
    b6 = " ",
    H6 = !1;
  function x6(e, t) {
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
  function S6(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var h4 = !1;
  function ln(e, t) {
    switch (e) {
      case "compositionend":
        return S6(t);
      case "keypress":
        return t.which !== 32 ? null : ((H6 = !0), b6);
      case "textInput":
        return (e = t.data), e === b6 && H6 ? null : e;
      default:
        return null;
    }
  }
  function nn(e, t) {
    if (h4)
      return e === "compositionend" || (!N5 && x6(e, t))
        ? ((e = h6()), (s8 = T5 = f3 = null), (h4 = !1), e)
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
        return y6 && t.locale !== "ko" ? null : t.data;
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
  function E6(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!un[e.type] : t === "textarea";
  }
  function _6(e, t, a, l) {
    C4 ? (d4 ? d4.push(l) : (d4 = [l])) : (C4 = l),
      (t = J8(t, "onChange")),
      0 < t.length &&
        ((a = new o8("onChange", "change", null, a, l)),
        e.push({ event: a, listeners: t }));
  }
  var te = null,
    ae = null;
  function sn(e) {
    F0(e, 0);
  }
  function C8(e) {
    var t = $4(e);
    if (u6(t)) return e;
  }
  function L6(e, t) {
    if (e === "change") return t;
  }
  var j6 = !1;
  if (Y2) {
    var U5;
    if (Y2) {
      var V5 = "oninput" in document;
      if (!V5) {
        var w6 = document.createElement("div");
        w6.setAttribute("oninput", "return;"),
          (V5 = typeof w6.oninput == "function");
      }
      U5 = V5;
    } else U5 = !1;
    j6 = U5 && (!document.documentMode || 9 < document.documentMode);
  }
  function M6() {
    te && (te.detachEvent("onpropertychange", A6), (ae = te = null));
  }
  function A6(e) {
    if (e.propertyName === "value" && C8(ae)) {
      var t = [];
      _6(t, ae, e, w5(e)), d6(sn, t);
    }
  }
  function cn(e, t, a) {
    e === "focusin"
      ? (M6(), (te = t), (ae = a), te.attachEvent("onpropertychange", A6))
      : e === "focusout" && M6();
  }
  function rn(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return C8(ae);
  }
  function on(e, t) {
    if (e === "click") return C8(t);
  }
  function fn(e, t) {
    if (e === "input" || e === "change") return C8(t);
  }
  function Cn(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var i2 = typeof Object.is == "function" ? Object.is : Cn;
  function le(e, t) {
    if (i2(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      l = Object.keys(t);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var n = a[l];
      if (!g5.call(t, n) || !i2(e[n], t[n])) return !1;
    }
    return !0;
  }
  function T6(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function R6(e, t) {
    var a = T6(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (((l = e + a.textContent.length), e <= t && l >= t))
          return { node: a, offset: t - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = T6(a);
    }
  }
  function O6(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? O6(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function D6(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = i8(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = i8(e.document);
    }
    return t;
  }
  function B5(e) {
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
    var a = D6(t);
    t = e.focusedElem;
    var l = e.selectionRange;
    if (
      a !== t &&
      t &&
      t.ownerDocument &&
      O6(t.ownerDocument.documentElement, t)
    ) {
      if (l !== null && B5(t)) {
        if (
          ((e = l.start),
          (a = l.end),
          a === void 0 && (a = e),
          "selectionStart" in t)
        )
          (t.selectionStart = e),
            (t.selectionEnd = Math.min(a, t.value.length));
        else if (
          ((a = ((e = t.ownerDocument || document) && e.defaultView) || window),
          a.getSelection)
        ) {
          a = a.getSelection();
          var n = t.textContent.length,
            i = Math.min(l.start, n);
          (l = l.end === void 0 ? i : Math.min(l.end, n)),
            !a.extend && i > l && ((n = l), (l = i), (i = n)),
            (n = R6(t, i));
          var u = R6(t, l);
          n &&
            u &&
            (a.rangeCount !== 1 ||
              a.anchorNode !== n.node ||
              a.anchorOffset !== n.offset ||
              a.focusNode !== u.node ||
              a.focusOffset !== u.offset) &&
            ((e = e.createRange()),
            e.setStart(n.node, n.offset),
            a.removeAllRanges(),
            i > l
              ? (a.addRange(e), a.extend(u.node, u.offset))
              : (e.setEnd(u.node, u.offset), a.addRange(e)));
        }
      }
      for (e = [], a = t; (a = a.parentNode); )
        a.nodeType === 1 &&
          e.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < e.length; t++)
        (a = e[t]),
          (a.element.scrollLeft = a.left),
          (a.element.scrollTop = a.top);
    }
  }
  var hn = Y2 && "documentMode" in document && 11 >= document.documentMode,
    m4 = null,
    q5 = null,
    ne = null,
    Z5 = !1;
  function z6(e, t, a) {
    var l =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    Z5 ||
      m4 == null ||
      m4 !== i8(l) ||
      ((l = m4),
      "selectionStart" in l && B5(l)
        ? (l = { start: l.selectionStart, end: l.selectionEnd })
        : ((l = (
            (l.ownerDocument && l.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (l = {
            anchorNode: l.anchorNode,
            anchorOffset: l.anchorOffset,
            focusNode: l.focusNode,
            focusOffset: l.focusOffset,
          })),
      (ne && le(ne, l)) ||
        ((ne = l),
        (l = J8(q5, "onSelect")),
        0 < l.length &&
          ((t = new o8("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: l }),
          (t.target = m4))));
  }
  function V3(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var p4 = {
      animationend: V3("Animation", "AnimationEnd"),
      animationiteration: V3("Animation", "AnimationIteration"),
      animationstart: V3("Animation", "AnimationStart"),
      transitionrun: V3("Transition", "TransitionRun"),
      transitionstart: V3("Transition", "TransitionStart"),
      transitioncancel: V3("Transition", "TransitionCancel"),
      transitionend: V3("Transition", "TransitionEnd"),
    },
    Y5 = {},
    N6 = {};
  Y2 &&
    ((N6 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete p4.animationend.animation,
      delete p4.animationiteration.animation,
      delete p4.animationstart.animation),
    "TransitionEvent" in window || delete p4.transitionend.transition);
  function B3(e) {
    if (Y5[e]) return Y5[e];
    if (!p4[e]) return e;
    var t = p4[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in N6) return (Y5[e] = t[a]);
    return e;
  }
  var U6 = B3("animationend"),
    V6 = B3("animationiteration"),
    B6 = B3("animationstart"),
    mn = B3("transitionrun"),
    pn = B3("transitionstart"),
    vn = B3("transitioncancel"),
    q6 = B3("transitionend"),
    Z6 = new Map(),
    Y6 =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
        " "
      );
  function S2(e, t) {
    Z6.set(e, t), N3(t, [e]);
  }
  var C2 = [],
    v4 = 0,
    G5 = 0;
  function d8() {
    for (var e = v4, t = (G5 = v4 = 0); t < e; ) {
      var a = C2[t];
      C2[t++] = null;
      var l = C2[t];
      C2[t++] = null;
      var n = C2[t];
      C2[t++] = null;
      var i = C2[t];
      if (((C2[t++] = null), l !== null && n !== null)) {
        var u = l.pending;
        u === null ? (n.next = n) : ((n.next = u.next), (u.next = n)),
          (l.pending = n);
      }
      i !== 0 && G6(a, n, i);
    }
  }
  function h8(e, t, a, l) {
    (C2[v4++] = e),
      (C2[v4++] = t),
      (C2[v4++] = a),
      (C2[v4++] = l),
      (G5 |= l),
      (e.lanes |= l),
      (e = e.alternate),
      e !== null && (e.lanes |= l);
  }
  function X5(e, t, a, l) {
    return h8(e, t, a, l), m8(e);
  }
  function C3(e, t) {
    return h8(e, null, null, t), m8(e);
  }
  function G6(e, t, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= a),
        (l = i.alternate),
        l !== null && (l.childLanes |= a),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    n &&
      t !== null &&
      e.tag === 3 &&
      ((i = e.stateNode),
      (n = 31 - n2(a)),
      (i = i.hiddenUpdates),
      (e = i[n]),
      e === null ? (i[n] = [t]) : e.push(t),
      (t.lane = a | 536870912));
  }
  function m8(e) {
    if (50 < Me) throw ((Me = 0), (W9 = null), Error(o(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var g4 = {},
    X6 = new WeakMap();
  function d2(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = X6.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: e1(t) }), X6.set(e, t), t);
    }
    return { value: e, source: t, stack: e1(t) };
  }
  var y4 = [],
    b4 = 0,
    p8 = null,
    v8 = 0,
    h2 = [],
    m2 = 0,
    q3 = null,
    X2 = 1,
    Q2 = "";
  function Z3(e, t) {
    (y4[b4++] = v8), (y4[b4++] = p8), (p8 = e), (v8 = t);
  }
  function Q6(e, t, a) {
    (h2[m2++] = X2), (h2[m2++] = Q2), (h2[m2++] = q3), (q3 = e);
    var l = X2;
    e = Q2;
    var n = 32 - n2(l) - 1;
    (l &= ~(1 << n)), (a += 1);
    var i = 32 - n2(t) + n;
    if (30 < i) {
      var u = n - (n % 5);
      (i = (l & ((1 << u) - 1)).toString(32)),
        (l >>= u),
        (n -= u),
        (X2 = (1 << (32 - n2(t) + n)) | (a << n) | l),
        (Q2 = i + e);
    } else (X2 = (1 << i) | (a << n) | l), (Q2 = e);
  }
  function Q5(e) {
    e.return !== null && (Z3(e, 1), Q6(e, 1, 0));
  }
  function K5(e) {
    for (; e === p8; )
      (p8 = y4[--b4]), (y4[b4] = null), (v8 = y4[--b4]), (y4[b4] = null);
    for (; e === q3; )
      (q3 = h2[--m2]),
        (h2[m2] = null),
        (Q2 = h2[--m2]),
        (h2[m2] = null),
        (X2 = h2[--m2]),
        (h2[m2] = null);
  }
  var F1 = null,
    Y1 = null,
    o1 = !1,
    E2 = null,
    O2 = !1,
    k5 = Error(o(519));
  function Y3(e) {
    var t = Error(o(418, ""));
    throw (se(d2(t, e)), k5);
  }
  function K6(e) {
    var t = e.stateNode,
      a = e.type,
      l = e.memoizedProps;
    switch (((t[K1] = e), (t[e2] = l), a)) {
      case "dialog":
        s1("cancel", t), s1("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        s1("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Te.length; a++) s1(Te[a], t);
        break;
      case "source":
        s1("error", t);
        break;
      case "img":
      case "image":
      case "link":
        s1("error", t), s1("load", t);
        break;
      case "details":
        s1("toggle", t);
        break;
      case "input":
        s1("invalid", t),
          s6(
            t,
            l.value,
            l.defaultValue,
            l.checked,
            l.defaultChecked,
            l.type,
            l.name,
            !0
          ),
          n8(t);
        break;
      case "select":
        s1("invalid", t);
        break;
      case "textarea":
        s1("invalid", t), r6(t, l.value, l.defaultValue, l.children), n8(t);
    }
    (a = l.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      l.suppressHydrationWarning === !0 ||
      ta(t.textContent, a)
        ? (l.popover != null && (s1("beforetoggle", t), s1("toggle", t)),
          l.onScroll != null && s1("scroll", t),
          l.onScrollEnd != null && s1("scrollend", t),
          l.onClick != null && (t.onclick = $8),
          (t = !0))
        : (t = !1),
      t || Y3(e);
  }
  function k6(e) {
    for (F1 = e.return; F1; )
      switch (F1.tag) {
        case 3:
        case 27:
          O2 = !0;
          return;
        case 5:
        case 13:
          O2 = !1;
          return;
        default:
          F1 = F1.return;
      }
  }
  function ie(e) {
    if (e !== F1) return !1;
    if (!o1) return k6(e), (o1 = !0), !1;
    var t = !1,
      a;
    if (
      ((a = e.tag !== 3 && e.tag !== 27) &&
        ((a = e.tag === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || dt(e.type, e.memoizedProps))),
        (a = !a)),
      a && (t = !0),
      t && Y1 && Y3(e),
      k6(e),
      e.tag === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((a = e.data), a === "/$")) {
              if (t === 0) {
                Y1 = L2(e.nextSibling);
                break e;
              }
              t--;
            } else (a !== "$" && a !== "$!" && a !== "$?") || t++;
          e = e.nextSibling;
        }
        Y1 = null;
      }
    } else Y1 = F1 ? L2(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ue() {
    (Y1 = F1 = null), (o1 = !1);
  }
  function se(e) {
    E2 === null ? (E2 = [e]) : E2.push(e);
  }
  var ce = Error(o(460)),
    J6 = Error(o(474)),
    J5 = { then: function () {} };
  function $6(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function g8() {}
  function W6(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(g8, g8), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), e === ce ? Error(o(483)) : e);
      default:
        if (typeof t.status == "string") t.then(g8, g8);
        else {
          if (((e = y1), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (l) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = l);
                }
              },
              function (l) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = l);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), e === ce ? Error(o(483)) : e);
        }
        throw ((re = t), ce);
    }
  }
  var re = null;
  function F6() {
    if (re === null) throw Error(o(459));
    var e = re;
    return (re = null), e;
  }
  var H4 = null,
    oe = 0;
  function y8(e) {
    var t = oe;
    return (oe += 1), H4 === null && (H4 = []), W6(H4, e, t);
  }
  function fe(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function b8(e, t) {
    throw t.$$typeof === p
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function P6(e) {
    var t = e._init;
    return t(e._payload);
  }
  function I6(e) {
    function t(H, g) {
      if (e) {
        var x = H.deletions;
        x === null ? ((H.deletions = [g]), (H.flags |= 16)) : x.push(g);
      }
    }
    function a(H, g) {
      if (!e) return null;
      for (; g !== null; ) t(H, g), (g = g.sibling);
      return null;
    }
    function l(H) {
      for (var g = new Map(); H !== null; )
        H.key !== null ? g.set(H.key, H) : g.set(H.index, H), (H = H.sibling);
      return g;
    }
    function n(H, g) {
      return (H = E3(H, g)), (H.index = 0), (H.sibling = null), H;
    }
    function i(H, g, x) {
      return (
        (H.index = x),
        e
          ? ((x = H.alternate),
            x !== null
              ? ((x = x.index), x < g ? ((H.flags |= 33554434), g) : x)
              : ((H.flags |= 33554434), g))
          : ((H.flags |= 1048576), g)
      );
    }
    function u(H) {
      return e && H.alternate === null && (H.flags |= 33554434), H;
    }
    function r(H, g, x, M) {
      return g === null || g.tag !== 6
        ? ((g = Y9(x, H.mode, M)), (g.return = H), g)
        : ((g = n(g, x)), (g.return = H), g);
    }
    function d(H, g, x, M) {
      var Z = x.type;
      return Z === b
        ? w(H, g, x.props.children, M, x.key)
        : g !== null &&
          (g.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === K &&
              P6(Z) === g.type))
        ? ((g = n(g, x.props)), fe(g, x), (g.return = H), g)
        : ((g = V8(x.type, x.key, x.props, null, H.mode, M)),
          fe(g, x),
          (g.return = H),
          g);
    }
    function y(H, g, x, M) {
      return g === null ||
        g.tag !== 4 ||
        g.stateNode.containerInfo !== x.containerInfo ||
        g.stateNode.implementation !== x.implementation
        ? ((g = G9(x, H.mode, M)), (g.return = H), g)
        : ((g = n(g, x.children || [])), (g.return = H), g);
    }
    function w(H, g, x, M, Z) {
      return g === null || g.tag !== 7
        ? ((g = P3(x, H.mode, M, Z)), (g.return = H), g)
        : ((g = n(g, x)), (g.return = H), g);
    }
    function T(H, g, x) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return (g = Y9("" + g, H.mode, x)), (g.return = H), g;
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case E:
            return (
              (x = V8(g.type, g.key, g.props, null, H.mode, x)),
              fe(x, g),
              (x.return = H),
              x
            );
          case _:
            return (g = G9(g, H.mode, x)), (g.return = H), g;
          case K:
            var M = g._init;
            return (g = M(g._payload)), T(H, g, x);
        }
        if (J(g) || w1(g))
          return (g = P3(g, H.mode, x, null)), (g.return = H), g;
        if (typeof g.then == "function") return T(H, y8(g), x);
        if (g.$$typeof === z) return T(H, z8(H, g), x);
        b8(H, g);
      }
      return null;
    }
    function S(H, g, x, M) {
      var Z = g !== null ? g.key : null;
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return Z !== null ? null : r(H, g, "" + x, M);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case E:
            return x.key === Z ? d(H, g, x, M) : null;
          case _:
            return x.key === Z ? y(H, g, x, M) : null;
          case K:
            return (Z = x._init), (x = Z(x._payload)), S(H, g, x, M);
        }
        if (J(x) || w1(x)) return Z !== null ? null : w(H, g, x, M, null);
        if (typeof x.then == "function") return S(H, g, y8(x), M);
        if (x.$$typeof === z) return S(H, g, z8(H, x), M);
        b8(H, x);
      }
      return null;
    }
    function L(H, g, x, M, Z) {
      if (
        (typeof M == "string" && M !== "") ||
        typeof M == "number" ||
        typeof M == "bigint"
      )
        return (H = H.get(x) || null), r(g, H, "" + M, Z);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case E:
            return (
              (H = H.get(M.key === null ? x : M.key) || null), d(g, H, M, Z)
            );
          case _:
            return (
              (H = H.get(M.key === null ? x : M.key) || null), y(g, H, M, Z)
            );
          case K:
            var i1 = M._init;
            return (M = i1(M._payload)), L(H, g, x, M, Z);
        }
        if (J(M) || w1(M)) return (H = H.get(x) || null), w(g, H, M, Z, null);
        if (typeof M.then == "function") return L(H, g, x, y8(M), Z);
        if (M.$$typeof === z) return L(H, g, x, z8(g, M), Z);
        b8(g, M);
      }
      return null;
    }
    function X(H, g, x, M) {
      for (
        var Z = null, i1 = null, k = g, $ = (g = 0), q1 = null;
        k !== null && $ < x.length;
        $++
      ) {
        k.index > $ ? ((q1 = k), (k = null)) : (q1 = k.sibling);
        var f1 = S(H, k, x[$], M);
        if (f1 === null) {
          k === null && (k = q1);
          break;
        }
        e && k && f1.alternate === null && t(H, k),
          (g = i(f1, g, $)),
          i1 === null ? (Z = f1) : (i1.sibling = f1),
          (i1 = f1),
          (k = q1);
      }
      if ($ === x.length) return a(H, k), o1 && Z3(H, $), Z;
      if (k === null) {
        for (; $ < x.length; $++)
          (k = T(H, x[$], M)),
            k !== null &&
              ((g = i(k, g, $)),
              i1 === null ? (Z = k) : (i1.sibling = k),
              (i1 = k));
        return o1 && Z3(H, $), Z;
      }
      for (k = l(k); $ < x.length; $++)
        (q1 = L(k, H, $, x[$], M)),
          q1 !== null &&
            (e &&
              q1.alternate !== null &&
              k.delete(q1.key === null ? $ : q1.key),
            (g = i(q1, g, $)),
            i1 === null ? (Z = q1) : (i1.sibling = q1),
            (i1 = q1));
      return (
        e &&
          k.forEach(function (T3) {
            return t(H, T3);
          }),
        o1 && Z3(H, $),
        Z
      );
    }
    function I(H, g, x, M) {
      if (x == null) throw Error(o(151));
      for (
        var Z = null, i1 = null, k = g, $ = (g = 0), q1 = null, f1 = x.next();
        k !== null && !f1.done;
        $++, f1 = x.next()
      ) {
        k.index > $ ? ((q1 = k), (k = null)) : (q1 = k.sibling);
        var T3 = S(H, k, f1.value, M);
        if (T3 === null) {
          k === null && (k = q1);
          break;
        }
        e && k && T3.alternate === null && t(H, k),
          (g = i(T3, g, $)),
          i1 === null ? (Z = T3) : (i1.sibling = T3),
          (i1 = T3),
          (k = q1);
      }
      if (f1.done) return a(H, k), o1 && Z3(H, $), Z;
      if (k === null) {
        for (; !f1.done; $++, f1 = x.next())
          (f1 = T(H, f1.value, M)),
            f1 !== null &&
              ((g = i(f1, g, $)),
              i1 === null ? (Z = f1) : (i1.sibling = f1),
              (i1 = f1));
        return o1 && Z3(H, $), Z;
      }
      for (k = l(k); !f1.done; $++, f1 = x.next())
        (f1 = L(k, H, $, f1.value, M)),
          f1 !== null &&
            (e &&
              f1.alternate !== null &&
              k.delete(f1.key === null ? $ : f1.key),
            (g = i(f1, g, $)),
            i1 === null ? (Z = f1) : (i1.sibling = f1),
            (i1 = f1));
      return (
        e &&
          k.forEach(function (Ti) {
            return t(H, Ti);
          }),
        o1 && Z3(H, $),
        Z
      );
    }
    function j1(H, g, x, M) {
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
              for (var Z = x.key; g !== null; ) {
                if (g.key === Z) {
                  if (((Z = x.type), Z === b)) {
                    if (g.tag === 7) {
                      a(H, g.sibling),
                        (M = n(g, x.props.children)),
                        (M.return = H),
                        (H = M);
                      break e;
                    }
                  } else if (
                    g.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === K &&
                      P6(Z) === g.type)
                  ) {
                    a(H, g.sibling),
                      (M = n(g, x.props)),
                      fe(M, x),
                      (M.return = H),
                      (H = M);
                    break e;
                  }
                  a(H, g);
                  break;
                } else t(H, g);
                g = g.sibling;
              }
              x.type === b
                ? ((M = P3(x.props.children, H.mode, M, x.key)),
                  (M.return = H),
                  (H = M))
                : ((M = V8(x.type, x.key, x.props, null, H.mode, M)),
                  fe(M, x),
                  (M.return = H),
                  (H = M));
            }
            return u(H);
          case _:
            e: {
              for (Z = x.key; g !== null; ) {
                if (g.key === Z)
                  if (
                    g.tag === 4 &&
                    g.stateNode.containerInfo === x.containerInfo &&
                    g.stateNode.implementation === x.implementation
                  ) {
                    a(H, g.sibling),
                      (M = n(g, x.children || [])),
                      (M.return = H),
                      (H = M);
                    break e;
                  } else {
                    a(H, g);
                    break;
                  }
                else t(H, g);
                g = g.sibling;
              }
              (M = G9(x, H.mode, M)), (M.return = H), (H = M);
            }
            return u(H);
          case K:
            return (Z = x._init), (x = Z(x._payload)), j1(H, g, x, M);
        }
        if (J(x)) return X(H, g, x, M);
        if (w1(x)) {
          if (((Z = w1(x)), typeof Z != "function")) throw Error(o(150));
          return (x = Z.call(x)), I(H, g, x, M);
        }
        if (typeof x.then == "function") return j1(H, g, y8(x), M);
        if (x.$$typeof === z) return j1(H, g, z8(H, x), M);
        b8(H, x);
      }
      return (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
        ? ((x = "" + x),
          g !== null && g.tag === 6
            ? (a(H, g.sibling), (M = n(g, x)), (M.return = H), (H = M))
            : (a(H, g), (M = Y9(x, H.mode, M)), (M.return = H), (H = M)),
          u(H))
        : a(H, g);
    }
    return function (H, g, x, M) {
      try {
        oe = 0;
        var Z = j1(H, g, x, M);
        return (H4 = null), Z;
      } catch (k) {
        if (k === ce) throw k;
        var i1 = y2(29, k, null, H.mode);
        return (i1.lanes = M), (i1.return = H), i1;
      } finally {
      }
    };
  }
  var G3 = I6(!0),
    e7 = I6(!1),
    x4 = d1(null),
    H8 = d1(0);
  function t7(e, t) {
    (e = a3), H1(H8, e), H1(x4, t), (a3 = e | t.baseLanes);
  }
  function $5() {
    H1(H8, a3), H1(x4, x4.current);
  }
  function W5() {
    (a3 = H8.current), A1(x4), A1(H8);
  }
  var p2 = d1(null),
    D2 = null;
  function d3(e) {
    var t = e.alternate;
    H1(z1, z1.current & 1),
      H1(p2, e),
      D2 === null &&
        (t === null || x4.current !== null || t.memoizedState !== null) &&
        (D2 = e);
  }
  function a7(e) {
    if (e.tag === 22) {
      if ((H1(z1, z1.current), H1(p2, e), D2 === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (D2 = e);
      }
    } else h3();
  }
  function h3() {
    H1(z1, z1.current), H1(p2, p2.current);
  }
  function K2(e) {
    A1(p2), D2 === e && (D2 = null), A1(z1);
  }
  var z1 = d1(0);
  function x8(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (
          a !== null &&
          ((a = a.dehydrated), a === null || a.data === "$?" || a.data === "$!")
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
  var gn =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, l) {
                  e.push(l);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                });
            };
          },
    yn = c.unstable_scheduleCallback,
    bn = c.unstable_NormalPriority,
    N1 = {
      $$typeof: z,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function F5() {
    return { controller: new gn(), data: new Map(), refCount: 0 };
  }
  function Ce(e) {
    e.refCount--,
      e.refCount === 0 &&
        yn(bn, function () {
          e.controller.abort();
        });
  }
  var de = null,
    P5 = 0,
    S4 = 0,
    E4 = null;
  function Hn(e, t) {
    if (de === null) {
      var a = (de = []);
      (P5 = 0),
        (S4 = nt()),
        (E4 = {
          status: "pending",
          value: void 0,
          then: function (l) {
            a.push(l);
          },
        });
    }
    return P5++, t.then(l7, l7), t;
  }
  function l7() {
    if (--P5 === 0 && de !== null) {
      E4 !== null && (E4.status = "fulfilled");
      var e = de;
      (de = null), (S4 = 0), (E4 = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xn(e, t) {
    var a = [],
      l = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          a.push(n);
        },
      };
    return (
      e.then(
        function () {
          (l.status = "fulfilled"), (l.value = t);
          for (var n = 0; n < a.length; n++) (0, a[n])(t);
        },
        function (n) {
          for (l.status = "rejected", l.reason = n, n = 0; n < a.length; n++)
            (0, a[n])(void 0);
        }
      ),
      l
    );
  }
  var n7 = Y.S;
  Y.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      Hn(e, t),
      n7 !== null && n7(e, t);
  };
  var X3 = d1(null);
  function I5() {
    var e = X3.current;
    return e !== null ? e : y1.pooledCache;
  }
  function S8(e, t) {
    t === null ? H1(X3, X3.current) : H1(X3, t.pool);
  }
  function i7() {
    var e = I5();
    return e === null ? null : { parent: N1._currentValue, pool: e };
  }
  var m3 = 0,
    n1 = null,
    m1 = null,
    T1 = null,
    E8 = !1,
    _4 = !1,
    Q3 = !1,
    _8 = 0,
    he = 0,
    L4 = null,
    Sn = 0;
  function M1() {
    throw Error(o(321));
  }
  function e9(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!i2(e[a], t[a])) return !1;
    return !0;
  }
  function t9(e, t, a, l, n, i) {
    return (
      (m3 = i),
      (n1 = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Y.H = e === null || e.memoizedState === null ? K3 : p3),
      (Q3 = !1),
      (i = a(l, n)),
      (Q3 = !1),
      _4 && (i = s7(t, a, l, n)),
      u7(e),
      i
    );
  }
  function u7(e) {
    Y.H = z2;
    var t = m1 !== null && m1.next !== null;
    if (((m3 = 0), (T1 = m1 = n1 = null), (E8 = !1), (he = 0), (L4 = null), t))
      throw Error(o(300));
    e === null ||
      V1 ||
      ((e = e.dependencies), e !== null && D8(e) && (V1 = !0));
  }
  function s7(e, t, a, l) {
    n1 = e;
    var n = 0;
    do {
      if ((_4 && (L4 = null), (he = 0), (_4 = !1), 25 <= n))
        throw Error(o(301));
      if (((n += 1), (T1 = m1 = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (Y.H = k3), (i = t(a, l));
    } while (_4);
    return i;
  }
  function En() {
    var e = Y.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? me(t) : t),
      (e = e.useState()[0]),
      (m1 !== null ? m1.memoizedState : null) !== e && (n1.flags |= 1024),
      t
    );
  }
  function a9() {
    var e = _8 !== 0;
    return (_8 = 0), e;
  }
  function l9(e, t, a) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a);
  }
  function n9(e) {
    if (E8) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      E8 = !1;
    }
    (m3 = 0), (T1 = m1 = n1 = null), (_4 = !1), (he = _8 = 0), (L4 = null);
  }
  function a2() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return T1 === null ? (n1.memoizedState = T1 = e) : (T1 = T1.next = e), T1;
  }
  function R1() {
    if (m1 === null) {
      var e = n1.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = m1.next;
    var t = T1 === null ? n1.memoizedState : T1.next;
    if (t !== null) (T1 = t), (m1 = e);
    else {
      if (e === null)
        throw n1.alternate === null ? Error(o(467)) : Error(o(310));
      (m1 = e),
        (e = {
          memoizedState: m1.memoizedState,
          baseState: m1.baseState,
          baseQueue: m1.baseQueue,
          queue: m1.queue,
          next: null,
        }),
        T1 === null ? (n1.memoizedState = T1 = e) : (T1 = T1.next = e);
    }
    return T1;
  }
  var L8;
  L8 = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  };
  function me(e) {
    var t = he;
    return (
      (he += 1),
      L4 === null && (L4 = []),
      (e = W6(L4, e, t)),
      (t = n1),
      (T1 === null ? t.memoizedState : T1.next) === null &&
        ((t = t.alternate),
        (Y.H = t === null || t.memoizedState === null ? K3 : p3)),
      e
    );
  }
  function j8(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return me(e);
      if (e.$$typeof === z) return k1(e);
    }
    throw Error(o(438, String(e)));
  }
  function i9(e) {
    var t = null,
      a = n1.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var l = n1.alternate;
      l !== null &&
        ((l = l.updateQueue),
        l !== null &&
          ((l = l.memoCache),
          l != null &&
            (t = {
              data: l.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = L8()), (n1.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), l = 0; l < e; l++) a[l] = h1;
    return t.index++, a;
  }
  function k2(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function w8(e) {
    var t = R1();
    return u9(t, m1, e);
  }
  function u9(e, t, a) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = a;
    var n = e.baseQueue,
      i = l.pending;
    if (i !== null) {
      if (n !== null) {
        var u = n.next;
        (n.next = i.next), (i.next = u);
      }
      (t.baseQueue = n = i), (l.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var r = (u = null),
        d = null,
        y = t,
        w = !1;
      do {
        var T = y.lane & -536870913;
        if (T !== y.lane ? (r1 & T) === T : (m3 & T) === T) {
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
              T === S4 && (w = !0);
          else if ((m3 & S) === S) {
            (y = y.next), S === S4 && (w = !0);
            continue;
          } else
            (T = {
              lane: 0,
              revertLane: y.revertLane,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null,
            }),
              d === null ? ((r = d = T), (u = i)) : (d = d.next = T),
              (n1.lanes |= S),
              (_3 |= S);
          (T = y.action),
            Q3 && a(i, T),
            (i = y.hasEagerState ? y.eagerState : a(i, T));
        } else
          (S = {
            lane: T,
            revertLane: y.revertLane,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null,
          }),
            d === null ? ((r = d = S), (u = i)) : (d = d.next = S),
            (n1.lanes |= T),
            (_3 |= T);
        y = y.next;
      } while (y !== null && y !== t);
      if (
        (d === null ? (u = i) : (d.next = r),
        !i2(i, e.memoizedState) && ((V1 = !0), w && ((a = E4), a !== null)))
      )
        throw a;
      (e.memoizedState = i),
        (e.baseState = u),
        (e.baseQueue = d),
        (l.lastRenderedState = i);
    }
    return n === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function s9(e) {
    var t = R1(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch,
      n = a.pending,
      i = t.memoizedState;
    if (n !== null) {
      a.pending = null;
      var u = (n = n.next);
      do (i = e(i, u.action)), (u = u.next);
      while (u !== n);
      i2(i, t.memoizedState) || (V1 = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (a.lastRenderedState = i);
    }
    return [i, l];
  }
  function c7(e, t, a) {
    var l = n1,
      n = R1(),
      i = o1;
    if (i) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var u = !i2((m1 || n).memoizedState, a);
    if (
      (u && ((n.memoizedState = a), (V1 = !0)),
      (n = n.queue),
      o9(f7.bind(null, l, n, e), [e]),
      n.getSnapshot !== t || u || (T1 !== null && T1.memoizedState.tag & 1))
    ) {
      if (
        ((l.flags |= 2048),
        j4(9, o7.bind(null, l, n, a, t), { destroy: void 0 }, null),
        y1 === null)
      )
        throw Error(o(349));
      i || m3 & 60 || r7(l, t, a);
    }
    return a;
  }
  function r7(e, t, a) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = n1.updateQueue),
      t === null
        ? ((t = L8()), (n1.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e));
  }
  function o7(e, t, a, l) {
    (t.value = a), (t.getSnapshot = l), C7(t) && d7(e);
  }
  function f7(e, t, a) {
    return a(function () {
      C7(t) && d7(e);
    });
  }
  function C7(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !i2(e, a);
    } catch {
      return !0;
    }
  }
  function d7(e) {
    var t = C3(e, 2);
    t !== null && P1(t, e, 2);
  }
  function c9(e) {
    var t = a2();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), Q3)) {
        r3(!0);
        try {
          a();
        } finally {
          r3(!1);
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
  function h7(e, t, a, l) {
    return (e.baseState = a), u9(e, m1, typeof l == "function" ? l : k2);
  }
  function _n(e, t, a, l, n) {
    if (T8(e)) throw Error(o(485));
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
      Y.T !== null ? a(!0) : (i.isTransition = !1),
        l(i),
        (a = t.pending),
        a === null
          ? ((i.next = t.pending = i), m7(t, i))
          : ((i.next = a.next), (t.pending = a.next = i));
    }
  }
  function m7(e, t) {
    var a = t.action,
      l = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = Y.T,
        u = {};
      Y.T = u;
      try {
        var r = a(n, l),
          d = Y.S;
        d !== null && d(u, r), p7(e, t, r);
      } catch (y) {
        r9(e, t, y);
      } finally {
        Y.T = i;
      }
    } else
      try {
        (i = a(n, l)), p7(e, t, i);
      } catch (y) {
        r9(e, t, y);
      }
  }
  function p7(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (l) {
            v7(e, t, l);
          },
          function (l) {
            return r9(e, t, l);
          }
        )
      : v7(e, t, a);
  }
  function v7(e, t, a) {
    (t.status = "fulfilled"),
      (t.value = a),
      g7(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), m7(e, a)));
  }
  function r9(e, t, a) {
    var l = e.pending;
    if (((e.pending = null), l !== null)) {
      l = l.next;
      do (t.status = "rejected"), (t.reason = a), g7(t), (t = t.next);
      while (t !== l);
    }
    e.action = null;
  }
  function g7(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function y7(e, t) {
    return t;
  }
  function b7(e, t) {
    if (o1) {
      var a = y1.formState;
      if (a !== null) {
        e: {
          var l = n1;
          if (o1) {
            if (Y1) {
              t: {
                for (var n = Y1, i = O2; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = L2(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (Y1 = L2(n.nextSibling)), (l = n.data === "F!");
                break e;
              }
            }
            Y3(l);
          }
          l = !1;
        }
        l && (t = a[0]);
      }
    }
    return (
      (a = a2()),
      (a.memoizedState = a.baseState = t),
      (l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: y7,
        lastRenderedState: t,
      }),
      (a.queue = l),
      (a = V7.bind(null, n1, l)),
      (l.dispatch = a),
      (l = c9(!1)),
      (i = m9.bind(null, n1, !1, l.queue)),
      (l = a2()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (l.queue = n),
      (a = _n.bind(null, n1, n, i, a)),
      (n.dispatch = a),
      (l.memoizedState = e),
      [t, a, !1]
    );
  }
  function H7(e) {
    var t = R1();
    return x7(t, m1, e);
  }
  function x7(e, t, a) {
    (t = u9(e, t, y7)[0]),
      (e = w8(k2)[0]),
      (t =
        typeof t == "object" && t !== null && typeof t.then == "function"
          ? me(t)
          : t);
    var l = R1(),
      n = l.queue,
      i = n.dispatch;
    return (
      a !== l.memoizedState &&
        ((n1.flags |= 2048),
        j4(9, Ln.bind(null, n, a), { destroy: void 0 }, null)),
      [t, i, e]
    );
  }
  function Ln(e, t) {
    e.action = t;
  }
  function S7(e) {
    var t = R1(),
      a = m1;
    if (a !== null) return x7(t, a, e);
    R1(), (t = t.memoizedState), (a = R1());
    var l = a.queue.dispatch;
    return (a.memoizedState = e), [t, l, !1];
  }
  function j4(e, t, a, l) {
    return (
      (e = { tag: e, create: t, inst: a, deps: l, next: null }),
      (t = n1.updateQueue),
      t === null && ((t = L8()), (n1.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((l = a.next), (a.next = e), (e.next = l), (t.lastEffect = e)),
      e
    );
  }
  function E7() {
    return R1().memoizedState;
  }
  function M8(e, t, a, l) {
    var n = a2();
    (n1.flags |= e),
      (n.memoizedState = j4(
        1 | t,
        a,
        { destroy: void 0 },
        l === void 0 ? null : l
      ));
  }
  function A8(e, t, a, l) {
    var n = R1();
    l = l === void 0 ? null : l;
    var i = n.memoizedState.inst;
    m1 !== null && l !== null && e9(l, m1.memoizedState.deps)
      ? (n.memoizedState = j4(t, a, i, l))
      : ((n1.flags |= e), (n.memoizedState = j4(1 | t, a, i, l)));
  }
  function _7(e, t) {
    M8(8390656, 8, e, t);
  }
  function o9(e, t) {
    A8(2048, 8, e, t);
  }
  function L7(e, t) {
    return A8(4, 2, e, t);
  }
  function j7(e, t) {
    return A8(4, 4, e, t);
  }
  function w7(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
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
  function M7(e, t, a) {
    (a = a != null ? a.concat([e]) : null), A8(4, 4, w7.bind(null, t, e), a);
  }
  function f9() {}
  function A7(e, t) {
    var a = R1();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    return t !== null && e9(t, l[1]) ? l[0] : ((a.memoizedState = [e, t]), e);
  }
  function T7(e, t) {
    var a = R1();
    t = t === void 0 ? null : t;
    var l = a.memoizedState;
    if (t !== null && e9(t, l[1])) return l[0];
    if (((l = e()), Q3)) {
      r3(!0);
      try {
        e();
      } finally {
        r3(!1);
      }
    }
    return (a.memoizedState = [l, t]), l;
  }
  function C9(e, t, a) {
    return a === void 0 || m3 & 1073741824
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = O0()), (n1.lanes |= e), (_3 |= e), a);
  }
  function R7(e, t, a, l) {
    return i2(a, t)
      ? a
      : x4.current !== null
      ? ((e = C9(e, a, l)), i2(e, t) || (V1 = !0), e)
      : m3 & 42
      ? ((e = O0()), (n1.lanes |= e), (_3 |= e), t)
      : ((V1 = !0), (e.memoizedState = a));
  }
  function O7(e, t, a, l, n) {
    var i = q.p;
    q.p = i !== 0 && 8 > i ? i : 8;
    var u = Y.T,
      r = {};
    (Y.T = r), m9(e, !1, t, a);
    try {
      var d = n(),
        y = Y.S;
      if (
        (y !== null && y(r, d),
        d !== null && typeof d == "object" && typeof d.then == "function")
      ) {
        var w = xn(d, l);
        pe(e, t, w, r2(e));
      } else pe(e, t, l, r2(e));
    } catch (T) {
      pe(e, t, { then: function () {}, status: "rejected", reason: T }, r2());
    } finally {
      (q.p = i), (Y.T = u);
    }
  }
  function jn() {}
  function d9(e, t, a, l) {
    if (e.tag !== 5) throw Error(o(476));
    var n = D7(e).queue;
    O7(
      e,
      n,
      t,
      c1,
      a === null
        ? jn
        : function () {
            return z7(e), a(l);
          }
    );
  }
  function D7(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: c1,
      baseState: c1,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: k2,
        lastRenderedState: c1,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: k2,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function z7(e) {
    var t = D7(e).next.queue;
    pe(e, t, {}, r2());
  }
  function h9() {
    return k1(Ne);
  }
  function N7() {
    return R1().memoizedState;
  }
  function U7() {
    return R1().memoizedState;
  }
  function wn(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = r2();
          e = y3(a);
          var l = b3(t, e, a);
          l !== null && (P1(l, t, a), ye(l, t, a)),
            (t = { cache: F5() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function Mn(e, t, a) {
    var l = r2();
    (a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      T8(e)
        ? B7(t, a)
        : ((a = X5(e, t, a, l)), a !== null && (P1(a, e, l), q7(a, t, l)));
  }
  function V7(e, t, a) {
    var l = r2();
    pe(e, t, a, l);
  }
  function pe(e, t, a, l) {
    var n = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (T8(e)) B7(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var u = t.lastRenderedState,
            r = i(u, a);
          if (((n.hasEagerState = !0), (n.eagerState = r), i2(r, u)))
            return h8(e, t, n, 0), y1 === null && d8(), !1;
        } catch {
        } finally {
        }
      if (((a = X5(e, t, n, l)), a !== null))
        return P1(a, e, l), q7(a, t, l), !0;
    }
    return !1;
  }
  function m9(e, t, a, l) {
    if (
      ((l = {
        lane: 2,
        revertLane: nt(),
        action: l,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      T8(e))
    ) {
      if (t) throw Error(o(479));
    } else (t = X5(e, a, l, 2)), t !== null && P1(t, e, 2);
  }
  function T8(e) {
    var t = e.alternate;
    return e === n1 || (t !== null && t === n1);
  }
  function B7(e, t) {
    _4 = E8 = !0;
    var a = e.pending;
    a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t);
  }
  function q7(e, t, a) {
    if (a & 4194176) {
      var l = t.lanes;
      (l &= e.pendingLanes), (a |= l), (t.lanes = a), Ft(e, a);
    }
  }
  var z2 = {
    readContext: k1,
    use: j8,
    useCallback: M1,
    useContext: M1,
    useEffect: M1,
    useImperativeHandle: M1,
    useLayoutEffect: M1,
    useInsertionEffect: M1,
    useMemo: M1,
    useReducer: M1,
    useRef: M1,
    useState: M1,
    useDebugValue: M1,
    useDeferredValue: M1,
    useTransition: M1,
    useSyncExternalStore: M1,
    useId: M1,
  };
  (z2.useCacheRefresh = M1),
    (z2.useMemoCache = M1),
    (z2.useHostTransitionStatus = M1),
    (z2.useFormState = M1),
    (z2.useActionState = M1),
    (z2.useOptimistic = M1);
  var K3 = {
    readContext: k1,
    use: j8,
    useCallback: function (e, t) {
      return (a2().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: k1,
    useEffect: _7,
    useImperativeHandle: function (e, t, a) {
      (a = a != null ? a.concat([e]) : null),
        M8(4194308, 4, w7.bind(null, t, e), a);
    },
    useLayoutEffect: function (e, t) {
      return M8(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      M8(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var a = a2();
      t = t === void 0 ? null : t;
      var l = e();
      if (Q3) {
        r3(!0);
        try {
          e();
        } finally {
          r3(!1);
        }
      }
      return (a.memoizedState = [l, t]), l;
    },
    useReducer: function (e, t, a) {
      var l = a2();
      if (a !== void 0) {
        var n = a(t);
        if (Q3) {
          r3(!0);
          try {
            a(t);
          } finally {
            r3(!1);
          }
        }
      } else n = t;
      return (
        (l.memoizedState = l.baseState = n),
        (e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (l.queue = e),
        (e = e.dispatch = Mn.bind(null, n1, e)),
        [l.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = a2();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: function (e) {
      e = c9(e);
      var t = e.queue,
        a = V7.bind(null, n1, t);
      return (t.dispatch = a), [e.memoizedState, a];
    },
    useDebugValue: f9,
    useDeferredValue: function (e, t) {
      var a = a2();
      return C9(a, e, t);
    },
    useTransition: function () {
      var e = c9(!1);
      return (
        (e = O7.bind(null, n1, e.queue, !0, !1)),
        (a2().memoizedState = e),
        [!1, e]
      );
    },
    useSyncExternalStore: function (e, t, a) {
      var l = n1,
        n = a2();
      if (o1) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else {
        if (((a = t()), y1 === null)) throw Error(o(349));
        r1 & 60 || r7(l, t, a);
      }
      n.memoizedState = a;
      var i = { value: a, getSnapshot: t };
      return (
        (n.queue = i),
        _7(f7.bind(null, l, i, e), [e]),
        (l.flags |= 2048),
        j4(9, o7.bind(null, l, i, a, t), { destroy: void 0 }, null),
        a
      );
    },
    useId: function () {
      var e = a2(),
        t = y1.identifierPrefix;
      if (o1) {
        var a = Q2,
          l = X2;
        (a = (l & ~(1 << (32 - n2(l) - 1))).toString(32) + a),
          (t = ":" + t + "R" + a),
          (a = _8++),
          0 < a && (t += "H" + a.toString(32)),
          (t += ":");
      } else (a = Sn++), (t = ":" + t + "r" + a.toString(32) + ":");
      return (e.memoizedState = t);
    },
    useCacheRefresh: function () {
      return (a2().memoizedState = wn.bind(null, n1));
    },
  };
  (K3.useMemoCache = i9),
    (K3.useHostTransitionStatus = h9),
    (K3.useFormState = b7),
    (K3.useActionState = b7),
    (K3.useOptimistic = function (e) {
      var t = a2();
      t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null,
      };
      return (
        (t.queue = a), (t = m9.bind(null, n1, !0, a)), (a.dispatch = t), [e, t]
      );
    });
  var p3 = {
    readContext: k1,
    use: j8,
    useCallback: A7,
    useContext: k1,
    useEffect: o9,
    useImperativeHandle: M7,
    useInsertionEffect: L7,
    useLayoutEffect: j7,
    useMemo: T7,
    useReducer: w8,
    useRef: E7,
    useState: function () {
      return w8(k2);
    },
    useDebugValue: f9,
    useDeferredValue: function (e, t) {
      var a = R1();
      return R7(a, m1.memoizedState, e, t);
    },
    useTransition: function () {
      var e = w8(k2)[0],
        t = R1().memoizedState;
      return [typeof e == "boolean" ? e : me(e), t];
    },
    useSyncExternalStore: c7,
    useId: N7,
  };
  (p3.useCacheRefresh = U7),
    (p3.useMemoCache = i9),
    (p3.useHostTransitionStatus = h9),
    (p3.useFormState = H7),
    (p3.useActionState = H7),
    (p3.useOptimistic = function (e, t) {
      var a = R1();
      return h7(a, m1, e, t);
    });
  var k3 = {
    readContext: k1,
    use: j8,
    useCallback: A7,
    useContext: k1,
    useEffect: o9,
    useImperativeHandle: M7,
    useInsertionEffect: L7,
    useLayoutEffect: j7,
    useMemo: T7,
    useReducer: s9,
    useRef: E7,
    useState: function () {
      return s9(k2);
    },
    useDebugValue: f9,
    useDeferredValue: function (e, t) {
      var a = R1();
      return m1 === null ? C9(a, e, t) : R7(a, m1.memoizedState, e, t);
    },
    useTransition: function () {
      var e = s9(k2)[0],
        t = R1().memoizedState;
      return [typeof e == "boolean" ? e : me(e), t];
    },
    useSyncExternalStore: c7,
    useId: N7,
  };
  (k3.useCacheRefresh = U7),
    (k3.useMemoCache = i9),
    (k3.useHostTransitionStatus = h9),
    (k3.useFormState = S7),
    (k3.useActionState = S7),
    (k3.useOptimistic = function (e, t) {
      var a = R1();
      return m1 !== null
        ? h7(a, m1, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    });
  function p9(e, t, a, l) {
    (t = e.memoizedState),
      (a = a(l, t)),
      (a = a == null ? t : a1({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var v9 = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? F(e) === e : !1;
    },
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var l = r2(),
        n = y3(l);
      (n.payload = t),
        a != null && (n.callback = a),
        (t = b3(e, n, l)),
        t !== null && (P1(t, e, l), ye(t, e, l));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var l = r2(),
        n = y3(l);
      (n.tag = 1),
        (n.payload = t),
        a != null && (n.callback = a),
        (t = b3(e, n, l)),
        t !== null && (P1(t, e, l), ye(t, e, l));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = r2(),
        l = y3(a);
      (l.tag = 2),
        t != null && (l.callback = t),
        (t = b3(e, l, a)),
        t !== null && (P1(t, e, a), ye(t, e, a));
    },
  };
  function Z7(e, t, a, l, n, i, u) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(l, i, u)
        : t.prototype && t.prototype.isPureReactComponent
        ? !le(a, l) || !le(n, i)
        : !0
    );
  }
  function Y7(e, t, a, l) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, l),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, l),
      t.state !== e && v9.enqueueReplaceState(t, t.state, null);
  }
  function J3(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var l in t) l !== "ref" && (a[l] = t[l]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = a1({}, a));
      for (var n in e) a[n] === void 0 && (a[n] = e[n]);
    }
    return a;
  }
  var R8 =
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
  function G7(e) {
    R8(e);
  }
  function X7(e) {
    console.error(e);
  }
  function Q7(e) {
    R8(e);
  }
  function O8(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function K7(e, t, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function g9(e, t, a) {
    return (
      (a = y3(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        O8(e, t);
      }),
      a
    );
  }
  function k7(e) {
    return (e = y3(e)), (e.tag = 3), e;
  }
  function J7(e, t, a, l) {
    var n = a.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = l.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          K7(t, a, l);
        });
    }
    var u = a.stateNode;
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (e.callback = function () {
        K7(t, a, l),
          typeof n != "function" &&
            (L3 === null ? (L3 = new Set([this])) : L3.add(this));
        var r = l.stack;
        this.componentDidCatch(l.value, {
          componentStack: r !== null ? r : "",
        });
      });
  }
  function An(e, t, a, l, n) {
    if (
      ((a.flags |= 32768),
      l !== null && typeof l == "object" && typeof l.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ge(t, a, n, !0),
        (a = p2.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 13:
            return (
              D2 === null ? I9() : a.alternate === null && L1 === 0 && (L1 = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = n),
              l === J5
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([l])) : t.add(l),
                  tt(e, l, n)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              l === J5
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([l]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([l])) : a.add(l)),
                  tt(e, l, n)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return tt(e, l, n), I9(), !1;
    }
    if (o1)
      return (
        (t = p2.current),
        t !== null
          ? (!(t.flags & 65536) && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            l !== k5 && ((e = Error(o(422), { cause: l })), se(d2(e, a))))
          : (l !== k5 && ((t = Error(o(423), { cause: l })), se(d2(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (l = d2(l, a)),
            (n = g9(e.stateNode, l, n)),
            O9(e, n),
            L1 !== 4 && (L1 = 2)),
        !1
      );
    var i = Error(o(520), { cause: l });
    if (
      ((i = d2(i, a)),
      je === null ? (je = [i]) : je.push(i),
      L1 !== 4 && (L1 = 2),
      t === null)
    )
      return !0;
    (l = d2(l, a)), (a = t);
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = n & -n),
            (a.lanes |= e),
            (e = g9(a.stateNode, l, e)),
            O9(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (i = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (L3 === null || !L3.has(i)))))
          )
            return (
              (a.flags |= 65536),
              (n &= -n),
              (a.lanes |= n),
              (n = k7(n)),
              J7(n, e, a, l),
              O9(a, n),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var $7 = Error(o(461)),
    V1 = !1;
  function G1(e, t, a, l) {
    t.child = e === null ? e7(t, null, a, l) : G3(t, e.child, a, l);
  }
  function W7(e, t, a, l, n) {
    a = a.render;
    var i = t.ref;
    if ("ref" in l) {
      var u = {};
      for (var r in l) r !== "ref" && (u[r] = l[r]);
    } else u = l;
    return (
      W3(t),
      (l = t9(e, t, a, u, i, n)),
      (r = a9()),
      e !== null && !V1
        ? (l9(e, t, n), J2(e, t, n))
        : (o1 && r && Q5(t), (t.flags |= 1), G1(e, t, l, n), t.child)
    );
  }
  function F7(e, t, a, l, n) {
    if (e === null) {
      var i = a.type;
      return typeof i == "function" &&
        !Z9(i) &&
        i.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = i), P7(e, t, i, l, n))
        : ((e = V8(a.type, null, l, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !j9(e, n))) {
      var u = i.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : le), a(u, l) && e.ref === t.ref)
      )
        return J2(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = E3(i, l)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function P7(e, t, a, l, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (le(i, l) && e.ref === t.ref)
        if (((V1 = !1), (t.pendingProps = l = i), j9(e, n)))
          e.flags & 131072 && (V1 = !0);
        else return (t.lanes = e.lanes), J2(e, t, n);
    }
    return y9(e, t, a, l, n);
  }
  function I7(e, t, a) {
    var l = t.pendingProps,
      n = l.children,
      i = (t.stateNode._pendingVisibility & 2) !== 0,
      u = e !== null ? e.memoizedState : null;
    if ((ve(e, t), l.mode === "hidden" || i)) {
      if (t.flags & 128) {
        if (((l = u !== null ? u.baseLanes | a : a), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = i & ~l;
        } else (t.childLanes = 0), (t.child = null);
        return e0(e, t, l, a);
      }
      if (a & 536870912)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && S8(t, u !== null ? u.cachePool : null),
          u !== null ? t7(t, u) : $5(),
          a7(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          e0(e, t, u !== null ? u.baseLanes | a : a, a)
        );
    } else
      u !== null
        ? (S8(t, u.cachePool), t7(t, u), h3(), (t.memoizedState = null))
        : (e !== null && S8(t, null), $5(), h3());
    return G1(e, t, n, a), t.child;
  }
  function e0(e, t, a, l) {
    var n = I5();
    return (
      (n = n === null ? null : { parent: N1._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      e !== null && S8(t, null),
      $5(),
      a7(t),
      e !== null && ge(e, t, l, !0),
      null
    );
  }
  function ve(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 2097664);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 2097664);
    }
  }
  function y9(e, t, a, l, n) {
    return (
      W3(t),
      (a = t9(e, t, a, l, void 0, n)),
      (l = a9()),
      e !== null && !V1
        ? (l9(e, t, n), J2(e, t, n))
        : (o1 && l && Q5(t), (t.flags |= 1), G1(e, t, a, n), t.child)
    );
  }
  function t0(e, t, a, l, n, i) {
    return (
      W3(t),
      (t.updateQueue = null),
      (a = s7(t, l, a, n)),
      u7(e),
      (l = a9()),
      e !== null && !V1
        ? (l9(e, t, i), J2(e, t, i))
        : (o1 && l && Q5(t), (t.flags |= 1), G1(e, t, a, i), t.child)
    );
  }
  function a0(e, t, a, l, n) {
    if ((W3(t), t.stateNode === null)) {
      var i = g4,
        u = a.contextType;
      typeof u == "object" && u !== null && (i = k1(u)),
        (i = new a(l, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = v9),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = l),
        (i.state = t.memoizedState),
        (i.refs = {}),
        T9(t),
        (u = a.contextType),
        (i.context = typeof u == "object" && u !== null ? k1(u) : g4),
        (i.state = t.memoizedState),
        (u = a.getDerivedStateFromProps),
        typeof u == "function" && (p9(t, a, u, l), (i.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((u = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          u !== i.state && v9.enqueueReplaceState(i, i.state, null),
          He(t, l, i, n),
          be(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (l = !0);
    } else if (e === null) {
      i = t.stateNode;
      var r = t.memoizedProps,
        d = J3(a, r);
      i.props = d;
      var y = i.context,
        w = a.contextType;
      (u = g4), typeof w == "object" && w !== null && (u = k1(w));
      var T = a.getDerivedStateFromProps;
      (w =
        typeof T == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (r = t.pendingProps !== r),
        w ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((r || y !== u) && Y7(t, i, l, u)),
        (g3 = !1);
      var S = t.memoizedState;
      (i.state = S),
        He(t, l, i, n),
        be(),
        (y = t.memoizedState),
        r || S !== y || g3
          ? (typeof T == "function" && (p9(t, a, T, l), (y = t.memoizedState)),
            (d = g3 || Z7(t, a, d, l, S, y, u))
              ? (w ||
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
                (t.memoizedProps = l),
                (t.memoizedState = y)),
            (i.props = l),
            (i.state = y),
            (i.context = u),
            (l = d))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (l = !1));
    } else {
      (i = t.stateNode),
        R9(e, t),
        (u = t.memoizedProps),
        (w = J3(a, u)),
        (i.props = w),
        (T = t.pendingProps),
        (S = i.context),
        (y = a.contextType),
        (d = g4),
        typeof y == "object" && y !== null && (d = k1(y)),
        (r = a.getDerivedStateFromProps),
        (y =
          typeof r == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((u !== T || S !== d) && Y7(t, i, l, d)),
        (g3 = !1),
        (S = t.memoizedState),
        (i.state = S),
        He(t, l, i, n),
        be();
      var L = t.memoizedState;
      u !== T ||
      S !== L ||
      g3 ||
      (e !== null && e.dependencies !== null && D8(e.dependencies))
        ? (typeof r == "function" && (p9(t, a, r, l), (L = t.memoizedState)),
          (w =
            g3 ||
            Z7(t, a, w, l, S, L, d) ||
            (e !== null && e.dependencies !== null && D8(e.dependencies)))
            ? (y ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(l, L, d),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(l, L, d)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (u === e.memoizedProps && S === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = l),
              (t.memoizedState = L)),
          (i.props = l),
          (i.state = L),
          (i.context = d),
          (l = w))
        : (typeof i.componentDidUpdate != "function" ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (u === e.memoizedProps && S === e.memoizedState) ||
            (t.flags |= 1024),
          (l = !1));
    }
    return (
      (i = l),
      ve(e, t),
      (l = (t.flags & 128) !== 0),
      i || l
        ? ((i = t.stateNode),
          (a =
            l && typeof a.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && l
            ? ((t.child = G3(t, e.child, null, n)),
              (t.child = G3(t, null, a, n)))
            : G1(e, t, a, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = J2(e, t, n)),
      e
    );
  }
  function l0(e, t, a, l) {
    return ue(), (t.flags |= 256), G1(e, t, a, l), t.child;
  }
  var b9 = { dehydrated: null, treeContext: null, retryLane: 0 };
  function H9(e) {
    return { baseLanes: e, cachePool: i7() };
  }
  function x9(e, t, a) {
    return (e = e !== null ? e.childLanes & ~a : 0), t && (e |= b2), e;
  }
  function n0(e, t, a) {
    var l = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      u;
    if (
      ((u = i) ||
        (u =
          e !== null && e.memoizedState === null ? !1 : (z1.current & 2) !== 0),
      u && ((n = !0), (t.flags &= -129)),
      (u = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (o1) {
        if ((n ? d3(t) : h3(), o1)) {
          var r = Y1,
            d;
          if ((d = r)) {
            e: {
              for (d = r, r = O2; d.nodeType !== 8; ) {
                if (!r) {
                  r = null;
                  break e;
                }
                if (((d = L2(d.nextSibling)), d === null)) {
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
                (d = y2(18, null, null, 0)),
                (d.stateNode = r),
                (d.return = t),
                (t.child = d),
                (F1 = t),
                (Y1 = null),
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
        (r = l.children),
        (l = l.fallback),
        n
          ? (h3(),
            (n = t.mode),
            (r = E9({ mode: "hidden", children: r }, n)),
            (l = P3(l, n, a, null)),
            (r.return = t),
            (l.return = t),
            (r.sibling = l),
            (t.child = r),
            (n = t.child),
            (n.memoizedState = H9(a)),
            (n.childLanes = x9(e, u, a)),
            (t.memoizedState = b9),
            l)
          : (d3(t), S9(t, r))
      );
    }
    if (
      ((d = e.memoizedState), d !== null && ((r = d.dehydrated), r !== null))
    ) {
      if (i)
        t.flags & 256
          ? (d3(t), (t.flags &= -257), (t = _9(e, t, a)))
          : t.memoizedState !== null
          ? (h3(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (h3(),
            (n = l.fallback),
            (r = t.mode),
            (l = E9({ mode: "visible", children: l.children }, r)),
            (n = P3(n, r, a, null)),
            (n.flags |= 2),
            (l.return = t),
            (n.return = t),
            (l.sibling = n),
            (t.child = l),
            G3(t, e.child, null, a),
            (l = t.child),
            (l.memoizedState = H9(a)),
            (l.childLanes = x9(e, u, a)),
            (t.memoizedState = b9),
            (t = n));
      else if ((d3(t), r.data === "$!")) {
        if (((u = r.nextSibling && r.nextSibling.dataset), u)) var y = u.dgst;
        (u = y),
          (l = Error(o(419))),
          (l.stack = ""),
          (l.digest = u),
          se({ value: l, source: null, stack: null }),
          (t = _9(e, t, a));
      } else if (
        (V1 || ge(e, t, a, !1), (u = (a & e.childLanes) !== 0), V1 || u)
      ) {
        if (((u = y1), u !== null)) {
          if (((l = a & -a), l & 42)) l = 1;
          else
            switch (l) {
              case 2:
                l = 1;
                break;
              case 8:
                l = 4;
                break;
              case 32:
                l = 16;
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
                l = 64;
                break;
              case 268435456:
                l = 134217728;
                break;
              default:
                l = 0;
            }
          if (
            ((l = l & (u.suspendedLanes | a) ? 0 : l),
            l !== 0 && l !== d.retryLane)
          )
            throw ((d.retryLane = l), C3(e, l), P1(u, e, l), $7);
        }
        r.data === "$?" || I9(), (t = _9(e, t, a));
      } else
        r.data === "$?"
          ? ((t.flags |= 128),
            (t.child = e.child),
            (t = Qn.bind(null, e)),
            (r._reactRetry = t),
            (t = null))
          : ((e = d.treeContext),
            (Y1 = L2(r.nextSibling)),
            (F1 = t),
            (o1 = !0),
            (E2 = null),
            (O2 = !1),
            e !== null &&
              ((h2[m2++] = X2),
              (h2[m2++] = Q2),
              (h2[m2++] = q3),
              (X2 = e.id),
              (Q2 = e.overflow),
              (q3 = t)),
            (t = S9(t, l.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (h3(),
        (n = l.fallback),
        (r = t.mode),
        (d = e.child),
        (y = d.sibling),
        (l = E3(d, { mode: "hidden", children: l.children })),
        (l.subtreeFlags = d.subtreeFlags & 31457280),
        y !== null ? (n = E3(y, n)) : ((n = P3(n, r, a, null)), (n.flags |= 2)),
        (n.return = t),
        (l.return = t),
        (l.sibling = n),
        (t.child = l),
        (l = n),
        (n = t.child),
        (r = e.child.memoizedState),
        r === null
          ? (r = H9(a))
          : ((d = r.cachePool),
            d !== null
              ? ((y = N1._currentValue),
                (d = d.parent !== y ? { parent: y, pool: y } : d))
              : (d = i7()),
            (r = { baseLanes: r.baseLanes | a, cachePool: d })),
        (n.memoizedState = r),
        (n.childLanes = x9(e, u, a)),
        (t.memoizedState = b9),
        l)
      : (d3(t),
        (a = e.child),
        (e = a.sibling),
        (a = E3(a, { mode: "visible", children: l.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((u = t.deletions),
          u === null ? ((t.deletions = [e]), (t.flags |= 16)) : u.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function S9(e, t) {
    return (
      (t = E9({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function E9(e, t) {
    return A0(e, t, 0, null);
  }
  function _9(e, t, a) {
    return (
      G3(t, e.child, null, a),
      (e = S9(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function i0(e, t, a) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), M9(e.return, t, a);
  }
  function L9(e, t, a, l, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: l,
          tail: a,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = l),
        (i.tail = a),
        (i.tailMode = n));
  }
  function u0(e, t, a) {
    var l = t.pendingProps,
      n = l.revealOrder,
      i = l.tail;
    if ((G1(e, t, l.children, a), (l = z1.current), l & 2))
      (l = (l & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && i0(e, a, t);
          else if (e.tag === 19) i0(e, a, t);
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
      l &= 1;
    }
    switch ((H1(z1, l), n)) {
      case "forwards":
        for (a = t.child, n = null; a !== null; )
          (e = a.alternate),
            e !== null && x8(e) === null && (n = a),
            (a = a.sibling);
        (a = n),
          a === null
            ? ((n = t.child), (t.child = null))
            : ((n = a.sibling), (a.sibling = null)),
          L9(t, !1, n, a, i);
        break;
      case "backwards":
        for (a = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && x8(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = a), (a = n), (n = e);
        }
        L9(t, !0, a, null, i);
        break;
      case "together":
        L9(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function J2(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (_3 |= t.lanes),
      !(a & t.childLanes))
    )
      if (e !== null) {
        if ((ge(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = E3(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (a = a.sibling = E3(e, e.pendingProps)),
          (a.return = t);
      a.sibling = null;
    }
    return t.child;
  }
  function j9(e, t) {
    return e.lanes & t ? !0 : ((e = e.dependencies), !!(e !== null && D8(e)));
  }
  function Tn(e, t, a) {
    switch (t.tag) {
      case 3:
        We(t, t.stateNode.containerInfo),
          v3(t, N1, e.memoizedState.cache),
          ue();
        break;
      case 27:
      case 5:
        v5(t);
        break;
      case 4:
        We(t, t.stateNode.containerInfo);
        break;
      case 10:
        v3(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null
            ? (d3(t), (t.flags |= 128), null)
            : a & t.child.childLanes
            ? n0(e, t, a)
            : (d3(t), (e = J2(e, t, a)), e !== null ? e.sibling : null);
        d3(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((l = (a & t.childLanes) !== 0),
          l || (ge(e, t, a, !1), (l = (a & t.childLanes) !== 0)),
          n)
        ) {
          if (l) return u0(e, t, a);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          H1(z1, z1.current),
          l)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), I7(e, t, a);
      case 24:
        v3(t, N1, e.memoizedState.cache);
    }
    return J2(e, t, a);
  }
  function s0(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) V1 = !0;
      else {
        if (!j9(e, a) && !(t.flags & 128)) return (V1 = !1), Tn(e, t, a);
        V1 = !!(e.flags & 131072);
      }
    else (V1 = !1), o1 && t.flags & 1048576 && Q6(t, v8, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var l = t.elementType,
            n = l._init;
          if (((l = n(l._payload)), (t.type = l), typeof l == "function"))
            Z9(l)
              ? ((e = J3(l, e)), (t.tag = 1), (t = a0(null, t, l, e, a)))
              : ((t.tag = 0), (t = y9(null, t, l, e, a)));
          else {
            if (l != null) {
              if (((n = l.$$typeof), n === D)) {
                (t.tag = 11), (t = W7(null, t, l, e, a));
                break e;
              } else if (n === U) {
                (t.tag = 14), (t = F7(null, t, l, e, a));
                break e;
              }
            }
            throw ((t = Q1(l) || l), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return y9(e, t, t.type, t.pendingProps, a);
      case 1:
        return (l = t.type), (n = J3(l, t.pendingProps)), a0(e, t, l, n, a);
      case 3:
        e: {
          if ((We(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          var i = t.pendingProps;
          (n = t.memoizedState), (l = n.element), R9(e, t), He(t, i, null, a);
          var u = t.memoizedState;
          if (
            ((i = u.cache),
            v3(t, N1, i),
            i !== n.cache && A9(t, [N1], a, !0),
            be(),
            (i = u.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: i, isDehydrated: !1, cache: u.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = l0(e, t, i, a);
              break e;
            } else if (i !== l) {
              (l = d2(Error(o(424)), t)), se(l), (t = l0(e, t, i, a));
              break e;
            } else
              for (
                Y1 = L2(t.stateNode.containerInfo.firstChild),
                  F1 = t,
                  o1 = !0,
                  E2 = null,
                  O2 = !0,
                  a = e7(t, null, i, a),
                  t.child = a;
                a;

              )
                (a.flags = (a.flags & -3) | 4096), (a = a.sibling);
          else {
            if ((ue(), i === l)) {
              t = J2(e, t, a);
              break e;
            }
            G1(e, t, i, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          ve(e, t),
          e === null
            ? (a = oa(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : o1 ||
                ((a = t.type),
                (e = t.pendingProps),
                (l = W8(c3.current).createElement(a)),
                (l[K1] = t),
                (l[e2] = e),
                X1(l, a, e),
                U1(l),
                (t.stateNode = l))
            : (t.memoizedState = oa(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          v5(t),
          e === null &&
            o1 &&
            ((l = t.stateNode = sa(t.type, t.pendingProps, c3.current)),
            (F1 = t),
            (O2 = !0),
            (Y1 = L2(l.firstChild))),
          (l = t.pendingProps.children),
          e !== null || o1 ? G1(e, t, l, a) : (t.child = G3(t, null, l, a)),
          ve(e, t),
          t.child
        );
      case 5:
        return (
          e === null &&
            o1 &&
            ((n = l = Y1) &&
              ((l = si(l, t.type, t.pendingProps, O2)),
              l !== null
                ? ((t.stateNode = l),
                  (F1 = t),
                  (Y1 = L2(l.firstChild)),
                  (O2 = !1),
                  (n = !0))
                : (n = !1)),
            n || Y3(t)),
          v5(t),
          (n = t.type),
          (i = t.pendingProps),
          (u = e !== null ? e.memoizedProps : null),
          (l = i.children),
          dt(n, i) ? (l = null) : u !== null && dt(n, u) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = t9(e, t, En, null, null, a)), (Ne._currentValue = n)),
          ve(e, t),
          G1(e, t, l, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            o1 &&
            ((e = a = Y1) &&
              ((a = ci(a, t.pendingProps, O2)),
              a !== null
                ? ((t.stateNode = a), (F1 = t), (Y1 = null), (e = !0))
                : (e = !1)),
            e || Y3(t)),
          null
        );
      case 13:
        return n0(e, t, a);
      case 4:
        return (
          We(t, t.stateNode.containerInfo),
          (l = t.pendingProps),
          e === null ? (t.child = G3(t, null, l, a)) : G1(e, t, l, a),
          t.child
        );
      case 11:
        return W7(e, t, t.type, t.pendingProps, a);
      case 7:
        return G1(e, t, t.pendingProps, a), t.child;
      case 8:
        return G1(e, t, t.pendingProps.children, a), t.child;
      case 12:
        return G1(e, t, t.pendingProps.children, a), t.child;
      case 10:
        return (
          (l = t.pendingProps),
          v3(t, t.type, l.value),
          G1(e, t, l.children, a),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (l = t.pendingProps.children),
          W3(t),
          (n = k1(n)),
          (l = l(n)),
          (t.flags |= 1),
          G1(e, t, l, a),
          t.child
        );
      case 14:
        return F7(e, t, t.type, t.pendingProps, a);
      case 15:
        return P7(e, t, t.type, t.pendingProps, a);
      case 19:
        return u0(e, t, a);
      case 22:
        return I7(e, t, a);
      case 24:
        return (
          W3(t),
          (l = k1(N1)),
          e === null
            ? ((n = I5()),
              n === null &&
                ((n = y1),
                (i = F5()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= a),
                (n = i)),
              (t.memoizedState = { parent: l, cache: n }),
              T9(t),
              v3(t, N1, n))
            : (e.lanes & a && (R9(e, t), He(t, null, null, a), be()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== l
                ? ((n = { parent: l, cache: l }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  v3(t, N1, l))
                : ((l = i.cache),
                  v3(t, N1, l),
                  l !== n.cache && A9(t, [N1], a, !0))),
          G1(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  var w9 = d1(null),
    $3 = null,
    $2 = null;
  function v3(e, t, a) {
    H1(w9, t._currentValue), (t._currentValue = a);
  }
  function W2(e) {
    (e._currentValue = w9.current), A1(w9);
  }
  function M9(e, t, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), l !== null && (l.childLanes |= t))
          : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function A9(e, t, a, l) {
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
              (i.lanes |= a),
                (r = i.alternate),
                r !== null && (r.lanes |= a),
                M9(i.return, a, e),
                l || (u = null);
              break e;
            }
          i = r.next;
        }
      } else if (n.tag === 18) {
        if (((u = n.return), u === null)) throw Error(o(341));
        (u.lanes |= a),
          (i = u.alternate),
          i !== null && (i.lanes |= a),
          M9(u, a, e),
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
  function ge(e, t, a, l) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if (n.flags & 524288) i = !0;
        else if (n.flags & 262144) break;
      }
      if (n.tag === 10) {
        var u = n.alternate;
        if (u === null) throw Error(o(387));
        if (((u = u.memoizedProps), u !== null)) {
          var r = n.type;
          i2(n.pendingProps.value, u.value) ||
            (e !== null ? e.push(r) : (e = [r]));
        }
      } else if (n === $e.current) {
        if (((u = n.alternate), u === null)) throw Error(o(387));
        u.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Ne) : (e = [Ne]));
      }
      n = n.return;
    }
    e !== null && A9(t, e, a, l), (t.flags |= 262144);
  }
  function D8(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!i2(e.context._currentValue, e.memoizedValue)) return !0;
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
  function k1(e) {
    return c0($3, e);
  }
  function z8(e, t) {
    return $3 === null && W3(e), c0(e, t);
  }
  function c0(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), $2 === null)) {
      if (e === null) throw Error(o(308));
      ($2 = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else $2 = $2.next = t;
    return a;
  }
  var g3 = !1;
  function T9(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function R9(e, t) {
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
  function y3(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function b3(e, t, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (((l = l.shared), S1 & 2)) {
      var n = l.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (l.pending = t),
        (t = m8(e)),
        G6(e, null, a),
        t
      );
    }
    return h8(e, l, t, a), m8(e);
  }
  function ye(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194176) !== 0))
    ) {
      var l = t.lanes;
      (l &= e.pendingLanes), (a |= l), (t.lanes = a), Ft(e, a);
    }
  }
  function O9(e, t) {
    var a = e.updateQueue,
      l = e.alternate;
    if (l !== null && ((l = l.updateQueue), a === l)) {
      var n = null,
        i = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var u = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = u) : (i = i.next = u), (a = a.next);
        } while (a !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (a = {
        baseState: l.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: l.shared,
        callbacks: l.callbacks,
      }),
        (e.updateQueue = a);
      return;
    }
    (e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t);
  }
  var D9 = !1;
  function be() {
    if (D9) {
      var e = E4;
      if (e !== null) throw e;
    }
  }
  function He(e, t, a, l) {
    D9 = !1;
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
      var w = e.alternate;
      w !== null &&
        ((w = w.updateQueue),
        (r = w.lastBaseUpdate),
        r !== u &&
          (r === null ? (w.firstBaseUpdate = y) : (r.next = y),
          (w.lastBaseUpdate = d)));
    }
    if (i !== null) {
      var T = n.baseState;
      (u = 0), (w = y = d = null), (r = i);
      do {
        var S = r.lane & -536870913,
          L = S !== r.lane;
        if (L ? (r1 & S) === S : (l & S) === S) {
          S !== 0 && S === S4 && (D9 = !0),
            w !== null &&
              (w = w.next =
                {
                  lane: 0,
                  tag: r.tag,
                  payload: r.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var X = e,
              I = r;
            S = t;
            var j1 = a;
            switch (I.tag) {
              case 1:
                if (((X = I.payload), typeof X == "function")) {
                  T = X.call(j1, T, S);
                  break e;
                }
                T = X;
                break e;
              case 3:
                X.flags = (X.flags & -65537) | 128;
              case 0:
                if (
                  ((X = I.payload),
                  (S = typeof X == "function" ? X.call(j1, T, S) : X),
                  S == null)
                )
                  break e;
                T = a1({}, T, S);
                break e;
              case 2:
                g3 = !0;
            }
          }
          (S = r.callback),
            S !== null &&
              ((e.flags |= 64),
              L && (e.flags |= 8192),
              (L = n.callbacks),
              L === null ? (n.callbacks = [S]) : L.push(S));
        } else
          (L = {
            lane: S,
            tag: r.tag,
            payload: r.payload,
            callback: r.callback,
            next: null,
          }),
            w === null ? ((y = w = L), (d = T)) : (w = w.next = L),
            (u |= S);
        if (((r = r.next), r === null)) {
          if (((r = n.shared.pending), r === null)) break;
          (L = r),
            (r = L.next),
            (L.next = null),
            (n.lastBaseUpdate = L),
            (n.shared.pending = null);
        }
      } while (!0);
      w === null && (d = T),
        (n.baseState = d),
        (n.firstBaseUpdate = y),
        (n.lastBaseUpdate = w),
        i === null && (n.shared.lanes = 0),
        (_3 |= u),
        (e.lanes = u),
        (e.memoizedState = T);
    }
  }
  function r0(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function o0(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) r0(a[e], t);
  }
  function xe(e, t) {
    try {
      var a = t.updateQueue,
        l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var n = l.next;
        a = n;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var i = a.create,
              u = a.inst;
            (l = i()), (u.destroy = l);
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (r) {
      v1(t, t.return, r);
    }
  }
  function H3(e, t, a) {
    try {
      var l = t.updateQueue,
        n = l !== null ? l.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        l = i;
        do {
          if ((l.tag & e) === e) {
            var u = l.inst,
              r = u.destroy;
            if (r !== void 0) {
              (u.destroy = void 0), (n = t);
              var d = a;
              try {
                r();
              } catch (y) {
                v1(n, d, y);
              }
            }
          }
          l = l.next;
        } while (l !== i);
      }
    } catch (y) {
      v1(t, t.return, y);
    }
  }
  function f0(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        o0(t, a);
      } catch (l) {
        v1(e, e.return, l);
      }
    }
  }
  function C0(e, t, a) {
    (a.props = J3(e.type, e.memoizedProps)), (a.state = e.memoizedState);
    try {
      a.componentWillUnmount();
    } catch (l) {
      v1(e, t, l);
    }
  }
  function F3(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        var l = e.stateNode;
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = l;
            break;
          default:
            n = l;
        }
        typeof a == "function" ? (e.refCleanup = a(n)) : (a.current = n);
      }
    } catch (i) {
      v1(e, t, i);
    }
  }
  function u2(e, t) {
    var a = e.ref,
      l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (n) {
          v1(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (n) {
          v1(e, t, n);
        }
      else a.current = null;
  }
  function d0(e) {
    var t = e.type,
      a = e.memoizedProps,
      l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? (l.src = a.src) : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (n) {
      v1(e, e.return, n);
    }
  }
  function h0(e, t, a) {
    try {
      var l = e.stateNode;
      ai(l, e.type, a, t), (l[e2] = t);
    } catch (n) {
      v1(e, e.return, n);
    }
  }
  function m0(e) {
    return (
      e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
    );
  }
  function z9(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || m0(e.return)) return null;
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
  function N9(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode),
        t
          ? a.nodeType === 8
            ? a.parentNode.insertBefore(e, t)
            : a.insertBefore(e, t)
          : (a.nodeType === 8
              ? ((t = a.parentNode), t.insertBefore(e, a))
              : ((t = a), t.appendChild(e)),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = $8));
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (N9(e, t, a), e = e.sibling; e !== null; )
        N9(e, t, a), (e = e.sibling);
  }
  function N8(e, t, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      (e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e);
    else if (l !== 4 && l !== 27 && ((e = e.child), e !== null))
      for (N8(e, t, a), e = e.sibling; e !== null; )
        N8(e, t, a), (e = e.sibling);
  }
  var F2 = !1,
    _1 = !1,
    U9 = !1,
    p0 = typeof WeakSet == "function" ? WeakSet : Set,
    B1 = null,
    v0 = !1;
  function Rn(e, t) {
    if (((e = e.containerInfo), (ft = a5), (e = D6(e)), B5(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var n = l.anchorOffset,
              i = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, i.nodeType;
            } catch {
              a = null;
              break e;
            }
            var u = 0,
              r = -1,
              d = -1,
              y = 0,
              w = 0,
              T = e,
              S = null;
            t: for (;;) {
              for (
                var L;
                T !== a || (n !== 0 && T.nodeType !== 3) || (r = u + n),
                  T !== i || (l !== 0 && T.nodeType !== 3) || (d = u + l),
                  T.nodeType === 3 && (u += T.nodeValue.length),
                  (L = T.firstChild) !== null;

              )
                (S = T), (T = L);
              for (;;) {
                if (T === e) break t;
                if (
                  (S === a && ++y === n && (r = u),
                  S === i && ++w === l && (d = u),
                  (L = T.nextSibling) !== null)
                )
                  break;
                (T = S), (S = T.parentNode);
              }
              T = L;
            }
            a = r === -1 || d === -1 ? null : { start: r, end: d };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Ct = { focusedElem: e, selectionRange: a }, a5 = !1, B1 = t;
      B1 !== null;

    )
      if (
        ((t = B1), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        (e.return = t), (B1 = e);
      else
        for (; B1 !== null; ) {
          switch (((t = B1), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if (e & 1024 && i !== null) {
                (e = void 0),
                  (a = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (l = a.stateNode);
                try {
                  var X = J3(a.type, n, a.elementType === a.type);
                  (e = l.getSnapshotBeforeUpdate(X, i)),
                    (l.__reactInternalSnapshotBeforeUpdate = e);
                } catch (I) {
                  v1(a, a.return, I);
                }
              }
              break;
            case 3:
              if (e & 1024) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  pt(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      pt(e);
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
              if (e & 1024) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (B1 = e);
            break;
          }
          B1 = t.return;
        }
    return (X = v0), (v0 = !1), X;
  }
  function g0(e, t, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        I2(e, a), l & 4 && xe(5, a);
        break;
      case 1:
        if ((I2(e, a), l & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (r) {
              v1(a, a.return, r);
            }
          else {
            var n = J3(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              v1(a, a.return, r);
            }
          }
        l & 64 && f0(a), l & 512 && F3(a, a.return);
        break;
      case 3:
        if ((I2(e, a), l & 64 && ((l = a.updateQueue), l !== null))) {
          if (((e = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                e = a.child.stateNode;
                break;
              case 1:
                e = a.child.stateNode;
            }
          try {
            o0(l, e);
          } catch (r) {
            v1(a, a.return, r);
          }
        }
        break;
      case 26:
        I2(e, a), l & 512 && F3(a, a.return);
        break;
      case 27:
      case 5:
        I2(e, a), t === null && l & 4 && d0(a), l & 512 && F3(a, a.return);
        break;
      case 12:
        I2(e, a);
        break;
      case 13:
        I2(e, a), l & 4 && H0(e, a);
        break;
      case 22:
        if (((n = a.memoizedState !== null || F2), !n)) {
          t = (t !== null && t.memoizedState !== null) || _1;
          var i = F2,
            u = _1;
          (F2 = n),
            (_1 = t) && !u ? x3(e, a, (a.subtreeFlags & 8772) !== 0) : I2(e, a),
            (F2 = i),
            (_1 = u);
        }
        l & 512 &&
          (a.memoizedProps.mode === "manual"
            ? F3(a, a.return)
            : u2(a, a.return));
        break;
      default:
        I2(e, a);
    }
  }
  function y0(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), y0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && S5(t)),
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
  function P2(e, t, a) {
    for (a = a.child; a !== null; ) b0(e, t, a), (a = a.sibling);
  }
  function b0(e, t, a) {
    if (l2 && typeof l2.onCommitFiberUnmount == "function")
      try {
        l2.onCommitFiberUnmount(Q4, a);
      } catch {}
    switch (a.tag) {
      case 26:
        _1 || u2(a, t),
          P2(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a));
        break;
      case 27:
        _1 || u2(a, t);
        var l = O1,
          n = s2;
        for (
          O1 = a.stateNode, P2(e, t, a), a = a.stateNode, t = a.attributes;
          t.length;

        )
          a.removeAttributeNode(t[0]);
        S5(a), (O1 = l), (s2 = n);
        break;
      case 5:
        _1 || u2(a, t);
      case 6:
        n = O1;
        var i = s2;
        if (((O1 = null), P2(e, t, a), (O1 = n), (s2 = i), O1 !== null))
          if (s2)
            try {
              (e = O1),
                (l = a.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(l)
                  : e.removeChild(l);
            } catch (u) {
              v1(a, t, u);
            }
          else
            try {
              O1.removeChild(a.stateNode);
            } catch (u) {
              v1(a, t, u);
            }
        break;
      case 18:
        O1 !== null &&
          (s2
            ? ((t = O1),
              (a = a.stateNode),
              t.nodeType === 8
                ? mt(t.parentNode, a)
                : t.nodeType === 1 && mt(t, a),
              qe(t))
            : mt(O1, a.stateNode));
        break;
      case 4:
        (l = O1),
          (n = s2),
          (O1 = a.stateNode.containerInfo),
          (s2 = !0),
          P2(e, t, a),
          (O1 = l),
          (s2 = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        _1 || H3(2, a, t), _1 || H3(4, a, t), P2(e, t, a);
        break;
      case 1:
        _1 ||
          (u2(a, t),
          (l = a.stateNode),
          typeof l.componentWillUnmount == "function" && C0(a, t, l)),
          P2(e, t, a);
        break;
      case 21:
        P2(e, t, a);
        break;
      case 22:
        _1 || u2(a, t),
          (_1 = (l = _1) || a.memoizedState !== null),
          P2(e, t, a),
          (_1 = l);
        break;
      default:
        P2(e, t, a);
    }
  }
  function H0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        qe(e);
      } catch (a) {
        v1(t, t.return, a);
      }
  }
  function On(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new p0()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new p0()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function V9(e, t) {
    var a = On(e);
    t.forEach(function (l) {
      var n = Kn.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(n, n));
    });
  }
  function v2(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var n = a[l],
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
        if (O1 === null) throw Error(o(160));
        b0(i, u, n),
          (O1 = null),
          (s2 = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) x0(t, e), (t = t.sibling);
  }
  var _2 = null;
  function x0(e, t) {
    var a = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        v2(t, e),
          g2(e),
          l & 4 && (H3(3, e, e.return), xe(3, e), H3(5, e, e.return));
        break;
      case 1:
        v2(t, e),
          g2(e),
          l & 512 && (_1 || a === null || u2(a, a.return)),
          l & 64 &&
            F2 &&
            ((e = e.updateQueue),
            e !== null &&
              ((l = e.callbacks),
              l !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? l : a.concat(l)))));
        break;
      case 26:
        var n = _2;
        if (
          (v2(t, e),
          g2(e),
          l & 512 && (_1 || a === null || u2(a, a.return)),
          l & 4)
        ) {
          var i = a !== null ? a.memoizedState : null;
          if (((l = e.memoizedState), a === null))
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  (l = e.type),
                    (a = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (l) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[J4] ||
                          i[K1] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(l)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        X1(i, l, a),
                        (i[K1] = e),
                        U1(i),
                        (l = i);
                      break e;
                    case "link":
                      var u = da("link", "href", n).get(l + (a.href || ""));
                      if (u) {
                        for (var r = 0; r < u.length; r++)
                          if (
                            ((i = u[r]),
                            i.getAttribute("href") ===
                              (a.href == null ? null : a.href) &&
                              i.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              i.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              i.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            u.splice(r, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(l)),
                        X1(i, l, a),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (u = da("meta", "content", n).get(
                          l + (a.content || "")
                        ))
                      ) {
                        for (r = 0; r < u.length; r++)
                          if (
                            ((i = u[r]),
                            i.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              i.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              i.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              i.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            u.splice(r, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(l)),
                        X1(i, l, a),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  (i[K1] = e), U1(i), (l = i);
                }
                e.stateNode = l;
              } else ha(n, e.type, e.stateNode);
            else e.stateNode = Ca(n, l, e.memoizedProps);
          else
            i !== l
              ? (i === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : i.count--,
                l === null
                  ? ha(n, e.type, e.stateNode)
                  : Ca(n, l, e.memoizedProps))
              : l === null &&
                e.stateNode !== null &&
                h0(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        if (l & 4 && e.alternate === null) {
          (n = e.stateNode), (i = e.memoizedProps);
          try {
            for (var d = n.firstChild; d; ) {
              var y = d.nextSibling,
                w = d.nodeName;
              d[J4] ||
                w === "HEAD" ||
                w === "BODY" ||
                w === "SCRIPT" ||
                w === "STYLE" ||
                (w === "LINK" && d.rel.toLowerCase() === "stylesheet") ||
                n.removeChild(d),
                (d = y);
            }
            for (var T = e.type, S = n.attributes; S.length; )
              n.removeAttributeNode(S[0]);
            X1(n, T, i), (n[K1] = e), (n[e2] = i);
          } catch (X) {
            v1(e, e.return, X);
          }
        }
      case 5:
        if (
          (v2(t, e),
          g2(e),
          l & 512 && (_1 || a === null || u2(a, a.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            f4(n, "");
          } catch (X) {
            v1(e, e.return, X);
          }
        }
        l & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), h0(e, n, a !== null ? a.memoizedProps : n)),
          l & 1024 && (U9 = !0);
        break;
      case 6:
        if ((v2(t, e), g2(e), l & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (l = e.memoizedProps), (a = e.stateNode);
          try {
            a.nodeValue = l;
          } catch (X) {
            v1(e, e.return, X);
          }
        }
        break;
      case 3:
        if (
          ((I8 = null),
          (n = _2),
          (_2 = F8(t.containerInfo)),
          v2(t, e),
          (_2 = n),
          g2(e),
          l & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            qe(t.containerInfo);
          } catch (X) {
            v1(e, e.return, X);
          }
        U9 && ((U9 = !1), S0(e));
        break;
      case 4:
        (l = _2),
          (_2 = F8(e.stateNode.containerInfo)),
          v2(t, e),
          g2(e),
          (_2 = l);
        break;
      case 12:
        v2(t, e), g2(e);
        break;
      case 13:
        v2(t, e),
          g2(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (k9 = R2()),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), V9(e, l)));
        break;
      case 22:
        if (
          (l & 512 && (_1 || a === null || u2(a, a.return)),
          (d = e.memoizedState !== null),
          (y = a !== null && a.memoizedState !== null),
          (w = F2),
          (T = _1),
          (F2 = w || d),
          (_1 = T || y),
          v2(t, e),
          (_1 = T),
          (F2 = w),
          g2(e),
          (t = e.stateNode),
          (t._current = e),
          (t._visibility &= -3),
          (t._visibility |= t._pendingVisibility & 2),
          l & 8192 &&
            ((t._visibility = d ? t._visibility & -2 : t._visibility | 1),
            d && ((t = F2 || _1), a === null || y || t || w4(e)),
            e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
        )
          e: for (a = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
              if (a === null) {
                y = a = t;
                try {
                  if (((n = y.stateNode), d))
                    (i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none");
                  else {
                    (u = y.stateNode), (r = y.memoizedProps.style);
                    var L =
                      r != null && r.hasOwnProperty("display")
                        ? r.display
                        : null;
                    u.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (X) {
                  v1(y, y.return, X);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                y = t;
                try {
                  y.stateNode.nodeValue = d ? "" : y.memoizedProps;
                } catch (X) {
                  v1(y, y.return, X);
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
              a === t && (a = null), (t = t.return);
            }
            a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        l & 4 &&
          ((l = e.updateQueue),
          l !== null &&
            ((a = l.retryQueue),
            a !== null && ((l.retryQueue = null), V9(e, a))));
        break;
      case 19:
        v2(t, e),
          g2(e),
          l & 4 &&
            ((l = e.updateQueue),
            l !== null && ((e.updateQueue = null), V9(e, l)));
        break;
      case 21:
        break;
      default:
        v2(t, e), g2(e);
    }
  }
  function g2(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        if (e.tag !== 27) {
          e: {
            for (var a = e.return; a !== null; ) {
              if (m0(a)) {
                var l = a;
                break e;
              }
              a = a.return;
            }
            throw Error(o(160));
          }
          switch (l.tag) {
            case 27:
              var n = l.stateNode,
                i = z9(e);
              N8(e, i, n);
              break;
            case 5:
              var u = l.stateNode;
              l.flags & 32 && (f4(u, ""), (l.flags &= -33));
              var r = z9(e);
              N8(e, r, u);
              break;
            case 3:
            case 4:
              var d = l.stateNode.containerInfo,
                y = z9(e);
              N9(e, y, d);
              break;
            default:
              throw Error(o(161));
          }
        }
      } catch (w) {
        v1(e, e.return, w);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function S0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        S0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function I2(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) g0(e, t.alternate, t), (t = t.sibling);
  }
  function w4(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          H3(4, t, t.return), w4(t);
          break;
        case 1:
          u2(t, t.return);
          var a = t.stateNode;
          typeof a.componentWillUnmount == "function" && C0(t, t.return, a),
            w4(t);
          break;
        case 26:
        case 27:
        case 5:
          u2(t, t.return), w4(t);
          break;
        case 22:
          u2(t, t.return), t.memoizedState === null && w4(t);
          break;
        default:
          w4(t);
      }
      e = e.sibling;
    }
  }
  function x3(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate,
        n = e,
        i = t,
        u = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          x3(n, i, a), xe(4, i);
          break;
        case 1:
          if (
            (x3(n, i, a),
            (l = i),
            (n = l.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (y) {
              v1(l, l.return, y);
            }
          if (((l = i), (n = l.updateQueue), n !== null)) {
            var r = l.stateNode;
            try {
              var d = n.shared.hiddenCallbacks;
              if (d !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++)
                  r0(d[n], r);
            } catch (y) {
              v1(l, l.return, y);
            }
          }
          a && u & 64 && f0(i), F3(i, i.return);
          break;
        case 26:
        case 27:
        case 5:
          x3(n, i, a), a && l === null && u & 4 && d0(i), F3(i, i.return);
          break;
        case 12:
          x3(n, i, a);
          break;
        case 13:
          x3(n, i, a), a && u & 4 && H0(n, i);
          break;
        case 22:
          i.memoizedState === null && x3(n, i, a), F3(i, i.return);
          break;
        default:
          x3(n, i, a);
      }
      t = t.sibling;
    }
  }
  function B9(e, t) {
    var a = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Ce(a));
  }
  function q9(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ce(e));
  }
  function S3(e, t, a, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) E0(e, t, a, l), (t = t.sibling);
  }
  function E0(e, t, a, l) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        S3(e, t, a, l), n & 2048 && xe(9, t);
        break;
      case 3:
        S3(e, t, a, l),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ce(e)));
        break;
      case 12:
        if (n & 2048) {
          S3(e, t, a, l), (e = t.stateNode);
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
            v1(t, t.return, d);
          }
        } else S3(e, t, a, l);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          t.memoizedState !== null
            ? i._visibility & 4
              ? S3(e, t, a, l)
              : Se(e, t)
            : i._visibility & 4
            ? S3(e, t, a, l)
            : ((i._visibility |= 4),
              M4(e, t, a, l, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && B9(t.alternate, t);
        break;
      case 24:
        S3(e, t, a, l), n & 2048 && q9(t.alternate, t);
        break;
      default:
        S3(e, t, a, l);
    }
  }
  function M4(e, t, a, l, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        u = t,
        r = a,
        d = l,
        y = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          M4(i, u, r, d, n), xe(8, u);
          break;
        case 23:
          break;
        case 22:
          var w = u.stateNode;
          u.memoizedState !== null
            ? w._visibility & 4
              ? M4(i, u, r, d, n)
              : Se(i, u)
            : ((w._visibility |= 4), M4(i, u, r, d, n)),
            n && y & 2048 && B9(u.alternate, u);
          break;
        case 24:
          M4(i, u, r, d, n), n && y & 2048 && q9(u.alternate, u);
          break;
        default:
          M4(i, u, r, d, n);
      }
      t = t.sibling;
    }
  }
  function Se(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          l = t,
          n = l.flags;
        switch (l.tag) {
          case 22:
            Se(a, l), n & 2048 && B9(l.alternate, l);
            break;
          case 24:
            Se(a, l), n & 2048 && q9(l.alternate, l);
            break;
          default:
            Se(a, l);
        }
        t = t.sibling;
      }
  }
  var Ee = 8192;
  function A4(e) {
    if (e.subtreeFlags & Ee)
      for (e = e.child; e !== null; ) _0(e), (e = e.sibling);
  }
  function _0(e) {
    switch (e.tag) {
      case 26:
        A4(e),
          e.flags & Ee &&
            e.memoizedState !== null &&
            Hi(_2, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        A4(e);
        break;
      case 3:
      case 4:
        var t = _2;
        (_2 = F8(e.stateNode.containerInfo)), A4(e), (_2 = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = Ee), (Ee = 16777216), A4(e), (Ee = t))
            : A4(e));
        break;
      default:
        A4(e);
    }
  }
  function L0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function _e(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (B1 = l), w0(l, e);
        }
      L0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) j0(e), (e = e.sibling);
  }
  function j0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        _e(e), e.flags & 2048 && H3(9, e, e.return);
        break;
      case 3:
        _e(e);
        break;
      case 12:
        _e(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 4 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -5), U8(e))
          : _e(e);
        break;
      default:
        _e(e);
    }
  }
  function U8(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var l = t[a];
          (B1 = l), w0(l, e);
        }
      L0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          H3(8, t, t.return), U8(t);
          break;
        case 22:
          (a = t.stateNode),
            a._visibility & 4 && ((a._visibility &= -5), U8(t));
          break;
        default:
          U8(t);
      }
      e = e.sibling;
    }
  }
  function w0(e, t) {
    for (; B1 !== null; ) {
      var a = B1;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          H3(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Ce(a.memoizedState.cache);
      }
      if (((l = a.child), l !== null)) (l.return = a), (B1 = l);
      else
        e: for (a = e; B1 !== null; ) {
          l = B1;
          var n = l.sibling,
            i = l.return;
          if ((y0(l), l === a)) {
            B1 = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (B1 = n);
            break e;
          }
          B1 = i;
        }
    }
  }
  function Dn(e, t, a, l) {
    (this.tag = e),
      (this.key = a),
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
      (this.mode = l),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function y2(e, t, a, l) {
    return new Dn(e, t, a, l);
  }
  function Z9(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function E3(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = y2(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 31457280),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function M0(e, t) {
    e.flags &= 31457282;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function V8(e, t, a, l, n, i) {
    var u = 0;
    if (((l = e), typeof e == "function")) Z9(e) && (u = 1);
    else if (typeof e == "string")
      u = yi(e, a, T2.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case b:
          return P3(a.children, n, i, t);
        case m:
          (u = 8), (n |= 24);
          break;
        case A:
          return (
            (e = y2(12, a, t, n | 2)), (e.elementType = A), (e.lanes = i), e
          );
        case Q:
          return (e = y2(13, a, t, n)), (e.elementType = Q), (e.lanes = i), e;
        case V:
          return (e = y2(19, a, t, n)), (e.elementType = V), (e.lanes = i), e;
        case G:
          return A0(a, n, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case N:
              case z:
                u = 10;
                break e;
              case R:
                u = 9;
                break e;
              case D:
                u = 11;
                break e;
              case U:
                u = 14;
                break e;
              case K:
                (u = 16), (l = null);
                break e;
            }
          (u = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (l = null);
      }
    return (
      (t = y2(u, a, t, n)), (t.elementType = e), (t.type = l), (t.lanes = i), t
    );
  }
  function P3(e, t, a, l) {
    return (e = y2(7, e, l, t)), (e.lanes = a), e;
  }
  function A0(e, t, a, l) {
    (e = y2(22, e, l, t)), (e.elementType = G), (e.lanes = a);
    var n = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var i = n._current;
        if (i === null) throw Error(o(456));
        if (!(n._pendingVisibility & 2)) {
          var u = C3(i, 2);
          u !== null && ((n._pendingVisibility |= 2), P1(u, i, 2));
        }
      },
      attach: function () {
        var i = n._current;
        if (i === null) throw Error(o(456));
        if (n._pendingVisibility & 2) {
          var u = C3(i, 2);
          u !== null && ((n._pendingVisibility &= -3), P1(u, i, 2));
        }
      },
    };
    return (e.stateNode = n), e;
  }
  function Y9(e, t, a) {
    return (e = y2(6, e, null, t)), (e.lanes = a), e;
  }
  function G9(e, t, a) {
    return (
      (t = y2(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
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
  function T0(e, t) {
    if (t.type !== "stylesheet" || t.state.loading & 4) e.flags &= -16777217;
    else if (((e.flags |= 16777216), !ma(t))) {
      if (
        ((t = p2.current),
        t !== null &&
          ((r1 & 4194176) === r1
            ? D2 !== null
            : ((r1 & 62914560) !== r1 && !(r1 & 536870912)) || t !== D2))
      )
        throw ((re = J5), J6);
      e.flags |= 8192;
    }
  }
  function B8(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? $t() : 536870912), (e.lanes |= t), (R4 |= t));
  }
  function Le(e, t) {
    if (!o1)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            t.alternate !== null && (a = t), (t = t.sibling);
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), (a = a.sibling);
          l === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (l.sibling = null);
      }
  }
  function x1(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      l = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags & 31457280),
          (l |= n.flags & 31457280),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (a |= n.lanes | n.childLanes),
          (l |= n.subtreeFlags),
          (l |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= l), (e.childLanes = a), t;
  }
  function zn(e, t, a) {
    var l = t.pendingProps;
    switch ((K5(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return x1(t), null;
      case 1:
        return x1(t), null;
      case 3:
        return (
          (a = t.stateNode),
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          W2(N1),
          i4(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            (ie(t)
              ? e3(t)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), E2 !== null && (F9(E2), (E2 = null)))),
          x1(t),
          null
        );
      case 26:
        return (
          (a = t.memoizedState),
          e === null
            ? (e3(t),
              a !== null ? (x1(t), T0(t, a)) : (x1(t), (t.flags &= -16777217)))
            : a
            ? a !== e.memoizedState
              ? (e3(t), x1(t), T0(t, a))
              : (x1(t), (t.flags &= -16777217))
            : (e.memoizedProps !== l && e3(t), x1(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        Fe(t), (a = c3.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== l && e3(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return x1(t), null;
          }
          (e = T2.current),
            ie(t) ? K6(t) : ((e = sa(n, l, a)), (t.stateNode = e), e3(t));
        }
        return x1(t), null;
      case 5:
        if ((Fe(t), (a = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== l && e3(t);
        else {
          if (!l) {
            if (t.stateNode === null) throw Error(o(166));
            return x1(t), null;
          }
          if (((e = T2.current), ie(t))) K6(t);
          else {
            switch (((n = W8(c3.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", a);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                break;
              default:
                switch (a) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", a);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof l.is == "string"
                        ? n.createElement("select", { is: l.is })
                        : n.createElement("select")),
                      l.multiple
                        ? (e.multiple = !0)
                        : l.size && (e.size = l.size);
                    break;
                  default:
                    e =
                      typeof l.is == "string"
                        ? n.createElement(a, { is: l.is })
                        : n.createElement(a);
                }
            }
            (e[K1] = t), (e[e2] = l);
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
            e: switch ((X1(e, a, l), a)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
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
        return x1(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== l && e3(t);
        else {
          if (typeof l != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = c3.current), ie(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (l = null),
              (n = F1),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  l = n.memoizedProps;
              }
            (e[K1] = t),
              (e = !!(
                e.nodeValue === a ||
                (l !== null && l.suppressHydrationWarning === !0) ||
                ta(e.nodeValue, a)
              )),
              e || Y3(t);
          } else (e = W8(e).createTextNode(l)), (e[K1] = t), (t.stateNode = e);
        }
        return x1(t), null;
      case 13:
        if (
          ((l = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = ie(t)), l !== null && l.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(o(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(o(317));
              n[K1] = t;
            } else
              ue(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            x1(t), (n = !1);
          } else E2 !== null && (F9(E2), (E2 = null)), (n = !0);
          if (!n) return t.flags & 256 ? (K2(t), t) : (K2(t), null);
        }
        if ((K2(t), t.flags & 128)) return (t.lanes = a), t;
        if (
          ((a = l !== null), (e = e !== null && e.memoizedState !== null), a)
        ) {
          (l = t.child),
            (n = null),
            l.alternate !== null &&
              l.alternate.memoizedState !== null &&
              l.alternate.memoizedState.cachePool !== null &&
              (n = l.alternate.memoizedState.cachePool.pool);
          var i = null;
          l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (i = l.memoizedState.cachePool.pool),
            i !== n && (l.flags |= 2048);
        }
        return (
          a !== e && a && (t.child.flags |= 8192),
          B8(t, t.updateQueue),
          x1(t),
          null
        );
      case 4:
        return i4(), e === null && ct(t.stateNode.containerInfo), x1(t), null;
      case 10:
        return W2(t.type), x1(t), null;
      case 19:
        if ((A1(z1), (n = t.memoizedState), n === null)) return x1(t), null;
        if (((l = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (l) Le(n, !1);
          else {
            if (L1 !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((i = x8(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Le(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      B8(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;

                  )
                    M0(a, e), (a = a.sibling);
                  return H1(z1, (z1.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              R2() > q8 &&
              ((t.flags |= 128), (l = !0), Le(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!l)
            if (((e = x8(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                B8(t, e),
                Le(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !o1)
              )
                return x1(t), null;
            } else
              2 * R2() - n.renderingStartTime > q8 &&
                a !== 536870912 &&
                ((t.flags |= 128), (l = !0), Le(n, !1), (t.lanes = 4194304));
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
            (n.renderingStartTime = R2()),
            (t.sibling = null),
            (e = z1.current),
            H1(z1, l ? (e & 1) | 2 : e & 1),
            t)
          : (x1(t), null);
      case 22:
      case 23:
        return (
          K2(t),
          W5(),
          (l = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== l && (t.flags |= 8192)
            : l && (t.flags |= 8192),
          l
            ? a & 536870912 &&
              !(t.flags & 128) &&
              (x1(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : x1(t),
          (a = t.updateQueue),
          a !== null && B8(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (l = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (l = t.memoizedState.cachePool.pool),
          l !== a && (t.flags |= 2048),
          e !== null && A1(X3),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          W2(N1),
          x1(t),
          null
        );
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Nn(e, t) {
    switch ((K5(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          W2(N1),
          i4(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 26:
      case 27:
      case 5:
        return Fe(t), null;
      case 13:
        if (
          (K2(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          ue();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return A1(z1), null;
      case 4:
        return i4(), null;
      case 10:
        return W2(t.type), null;
      case 22:
      case 23:
        return (
          K2(t),
          W5(),
          e !== null && A1(X3),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return W2(N1), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function R0(e, t) {
    switch ((K5(t), t.tag)) {
      case 3:
        W2(N1), i4();
        break;
      case 26:
      case 27:
      case 5:
        Fe(t);
        break;
      case 4:
        i4();
        break;
      case 13:
        K2(t);
        break;
      case 19:
        A1(z1);
        break;
      case 10:
        W2(t.type);
        break;
      case 22:
      case 23:
        K2(t), W5(), e !== null && A1(X3);
        break;
      case 24:
        W2(N1);
    }
  }
  var Un = {
      getCacheForType: function (e) {
        var t = k1(N1),
          a = t.data.get(e);
        return a === void 0 && ((a = e()), t.data.set(e, a)), a;
      },
    },
    Vn = typeof WeakMap == "function" ? WeakMap : Map,
    S1 = 0,
    y1 = null,
    u1 = null,
    r1 = 0,
    b1 = 0,
    c2 = null,
    t3 = !1,
    T4 = !1,
    X9 = !1,
    a3 = 0,
    L1 = 0,
    _3 = 0,
    I3 = 0,
    Q9 = 0,
    b2 = 0,
    R4 = 0,
    je = null,
    N2 = null,
    K9 = !1,
    k9 = 0,
    q8 = 1 / 0,
    Z8 = null,
    L3 = null,
    Y8 = !1,
    e4 = null,
    we = 0,
    J9 = 0,
    $9 = null,
    Me = 0,
    W9 = null;
  function r2() {
    if (S1 & 2 && r1 !== 0) return r1 & -r1;
    if (Y.T !== null) {
      var e = S4;
      return e !== 0 ? e : nt();
    }
    return It();
  }
  function O0() {
    b2 === 0 && (b2 = !(r1 & 536870912) || o1 ? Jt() : 536870912);
    var e = p2.current;
    return e !== null && (e.flags |= 32), b2;
  }
  function P1(e, t, a) {
    ((e === y1 && b1 === 2) || e.cancelPendingCommit !== null) &&
      (O4(e, 0), l3(e, r1, b2, !1)),
      k4(e, a),
      (!(S1 & 2) || e !== y1) &&
        (e === y1 && (!(S1 & 2) && (I3 |= a), L1 === 4 && l3(e, r1, b2, !1)),
        U2(e));
  }
  function D0(e, t, a) {
    if (S1 & 6) throw Error(o(327));
    var l = (!a && (t & 60) === 0 && (t & e.expiredLanes) === 0) || K4(e, t),
      n = l ? Zn(e, t) : et(e, t, !0),
      i = l;
    do {
      if (n === 0) {
        T4 && !l && l3(e, t, 0, !1);
        break;
      } else if (n === 6) l3(e, t, 0, !t3);
      else {
        if (((a = e.current.alternate), i && !Bn(a))) {
          (n = et(e, t, !1)), (i = !1);
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
              n = je;
              var d = r.current.memoizedState.isDehydrated;
              if ((d && (O4(r, u).flags |= 256), (u = et(r, u, !1)), u !== 2)) {
                if (X9 && !d) {
                  (r.errorRecoveryDisabledLanes |= i), (I3 |= i), (n = 4);
                  break e;
                }
                (i = N2), (N2 = n), i !== null && F9(i);
              }
              n = u;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          O4(e, 0), l3(e, t, 0, !0);
          break;
        }
        e: {
          switch (((l = e), n)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194176) === t) {
                l3(l, t, b2, !t3);
                break e;
              }
              break;
            case 2:
              N2 = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if (
            ((l.finishedWork = a),
            (l.finishedLanes = t),
            (t & 62914560) === t && ((i = k9 + 300 - R2()), 10 < i))
          ) {
            if ((l3(l, t, b2, !t3), t8(l, 0) !== 0)) break e;
            l.timeoutHandle = na(
              z0.bind(null, l, a, N2, Z8, K9, t, b2, I3, R4, t3, 2, -0, 0),
              i
            );
            break e;
          }
          z0(l, a, N2, Z8, K9, t, b2, I3, R4, t3, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    U2(e);
  }
  function F9(e) {
    N2 === null ? (N2 = e) : N2.push.apply(N2, e);
  }
  function z0(e, t, a, l, n, i, u, r, d, y, w, T, S) {
    var L = t.subtreeFlags;
    if (
      (L & 8192 || (L & 16785408) === 16785408) &&
      ((ze = { stylesheets: null, count: 0, unsuspend: bi }),
      _0(t),
      (t = xi()),
      t !== null)
    ) {
      (e.cancelPendingCommit = t(Y0.bind(null, e, a, l, n, u, r, d, 1, T, S))),
        l3(e, i, u, !y);
      return;
    }
    Y0(e, a, l, n, u, r, d, w, T, S);
  }
  function Bn(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var l = 0; l < a.length; l++) {
          var n = a[l],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!i2(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        (a.return = t), (t = a);
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
  function l3(e, t, a, l) {
    (t &= ~Q9),
      (t &= ~I3),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      l && (e.warmLanes |= t),
      (l = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - n2(n),
        u = 1 << i;
      (l[i] = -1), (n &= ~u);
    }
    a !== 0 && Wt(e, a, t);
  }
  function G8() {
    return S1 & 6 ? !0 : (Ae(0), !1);
  }
  function P9() {
    if (u1 !== null) {
      if (b1 === 0) var e = u1.return;
      else (e = u1), ($2 = $3 = null), n9(e), (H4 = null), (oe = 0), (e = u1);
      for (; e !== null; ) R0(e.alternate, e), (e = e.return);
      u1 = null;
    }
  }
  function O4(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var a = e.timeoutHandle;
    a !== -1 && ((e.timeoutHandle = -1), ni(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      P9(),
      (y1 = e),
      (u1 = a = E3(e.current, null)),
      (r1 = t),
      (b1 = 0),
      (c2 = null),
      (t3 = !1),
      (T4 = K4(e, t)),
      (X9 = !1),
      (R4 = b2 = Q9 = I3 = _3 = L1 = 0),
      (N2 = je = null),
      (K9 = !1),
      t & 8 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var n = 31 - n2(l),
          i = 1 << n;
        (t |= e[n]), (l &= ~i);
      }
    return (a3 = t), d8(), a;
  }
  function N0(e, t) {
    (n1 = null),
      (Y.H = z2),
      t === ce
        ? ((t = F6()), (b1 = 3))
        : t === J6
        ? ((t = F6()), (b1 = 4))
        : (b1 =
            t === $7
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (c2 = t),
      u1 === null && ((L1 = 1), O8(e, d2(t, e.current)));
  }
  function U0() {
    var e = Y.H;
    return (Y.H = z2), e === null ? z2 : e;
  }
  function V0() {
    var e = Y.A;
    return (Y.A = Un), e;
  }
  function I9() {
    (L1 = 4),
      t3 || ((r1 & 4194176) !== r1 && p2.current !== null) || (T4 = !0),
      (!(_3 & 134217727) && !(I3 & 134217727)) ||
        y1 === null ||
        l3(y1, r1, b2, !1);
  }
  function et(e, t, a) {
    var l = S1;
    S1 |= 2;
    var n = U0(),
      i = V0();
    (y1 !== e || r1 !== t) && ((Z8 = null), O4(e, t)), (t = !1);
    var u = L1;
    e: do
      try {
        if (b1 !== 0 && u1 !== null) {
          var r = u1,
            d = c2;
          switch (b1) {
            case 8:
              P9(), (u = 6);
              break e;
            case 3:
            case 2:
            case 6:
              p2.current === null && (t = !0);
              var y = b1;
              if (((b1 = 0), (c2 = null), D4(e, r, d, y), a && T4)) {
                u = 0;
                break e;
              }
              break;
            default:
              (y = b1), (b1 = 0), (c2 = null), D4(e, r, d, y);
          }
        }
        qn(), (u = L1);
        break;
      } catch (w) {
        N0(e, w);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      ($2 = $3 = null),
      (S1 = l),
      (Y.H = n),
      (Y.A = i),
      u1 === null && ((y1 = null), (r1 = 0), d8()),
      u
    );
  }
  function qn() {
    for (; u1 !== null; ) B0(u1);
  }
  function Zn(e, t) {
    var a = S1;
    S1 |= 2;
    var l = U0(),
      n = V0();
    y1 !== e || r1 !== t
      ? ((Z8 = null), (q8 = R2() + 500), O4(e, t))
      : (T4 = K4(e, t));
    e: do
      try {
        if (b1 !== 0 && u1 !== null) {
          t = u1;
          var i = c2;
          t: switch (b1) {
            case 1:
              (b1 = 0), (c2 = null), D4(e, t, i, 1);
              break;
            case 2:
              if ($6(i)) {
                (b1 = 0), (c2 = null), q0(t);
                break;
              }
              (t = function () {
                b1 === 2 && y1 === e && (b1 = 7), U2(e);
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
              $6(i)
                ? ((b1 = 0), (c2 = null), q0(t))
                : ((b1 = 0), (c2 = null), D4(e, t, i, 7));
              break;
            case 5:
              var u = null;
              switch (u1.tag) {
                case 26:
                  u = u1.memoizedState;
                case 5:
                case 27:
                  var r = u1;
                  if (!u || ma(u)) {
                    (b1 = 0), (c2 = null);
                    var d = r.sibling;
                    if (d !== null) u1 = d;
                    else {
                      var y = r.return;
                      y !== null ? ((u1 = y), X8(y)) : (u1 = null);
                    }
                    break t;
                  }
              }
              (b1 = 0), (c2 = null), D4(e, t, i, 5);
              break;
            case 6:
              (b1 = 0), (c2 = null), D4(e, t, i, 6);
              break;
            case 8:
              P9(), (L1 = 6);
              break e;
            default:
              throw Error(o(462));
          }
        }
        Yn();
        break;
      } catch (w) {
        N0(e, w);
      }
    while (!0);
    return (
      ($2 = $3 = null),
      (Y.H = l),
      (Y.A = n),
      (S1 = a),
      u1 !== null ? 0 : ((y1 = null), (r1 = 0), d8(), L1)
    );
  }
  function Yn() {
    for (; u1 !== null && !rl(); ) B0(u1);
  }
  function B0(e) {
    var t = s0(e.alternate, e, a3);
    (e.memoizedProps = e.pendingProps), t === null ? X8(e) : (u1 = t);
  }
  function q0(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = t0(a, t, t.pendingProps, t.type, void 0, r1);
        break;
      case 11:
        t = t0(a, t, t.pendingProps, t.type.render, t.ref, r1);
        break;
      case 5:
        n9(t);
      default:
        R0(a, t), (t = u1 = M0(t, a3)), (t = s0(a, t, a3));
    }
    (e.memoizedProps = e.pendingProps), t === null ? X8(e) : (u1 = t);
  }
  function D4(e, t, a, l) {
    ($2 = $3 = null), n9(t), (H4 = null), (oe = 0);
    var n = t.return;
    try {
      if (An(e, n, t, a, r1)) {
        (L1 = 1), O8(e, d2(a, e.current)), (u1 = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((u1 = n), i);
      (L1 = 1), O8(e, d2(a, e.current)), (u1 = null);
      return;
    }
    t.flags & 32768
      ? (o1 || l === 1
          ? (e = !0)
          : T4 || r1 & 536870912
          ? (e = !1)
          : ((t3 = e = !0),
            (l === 2 || l === 3 || l === 6) &&
              ((l = p2.current),
              l !== null && l.tag === 13 && (l.flags |= 16384))),
        Z0(t, e))
      : X8(t);
  }
  function X8(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        Z0(t, t3);
        return;
      }
      e = t.return;
      var a = zn(t.alternate, t, a3);
      if (a !== null) {
        u1 = a;
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
  function Z0(e, t) {
    do {
      var a = Nn(e.alternate, e);
      if (a !== null) {
        (a.flags &= 32767), (u1 = a);
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        u1 = e;
        return;
      }
      u1 = e = a;
    } while (e !== null);
    (L1 = 6), (u1 = null);
  }
  function Y0(e, t, a, l, n, i, u, r, d, y) {
    var w = Y.T,
      T = q.p;
    try {
      (q.p = 2), (Y.T = null), Gn(e, t, a, l, T, n, i, u, r, d, y);
    } finally {
      (Y.T = w), (q.p = T);
    }
  }
  function Gn(e, t, a, l, n, i, u, r) {
    do z4();
    while (e4 !== null);
    if (S1 & 6) throw Error(o(327));
    var d = e.finishedWork;
    if (((l = e.finishedLanes), d === null)) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), d === e.current))
      throw Error(o(177));
    (e.callbackNode = null),
      (e.callbackPriority = 0),
      (e.cancelPendingCommit = null);
    var y = d.lanes | d.childLanes;
    if (
      ((y |= G5),
      bl(e, l, y, i, u, r),
      e === y1 && ((u1 = y1 = null), (r1 = 0)),
      (!(d.subtreeFlags & 10256) && !(d.flags & 10256)) ||
        Y8 ||
        ((Y8 = !0),
        (J9 = y),
        ($9 = a),
        kn(Pe, function () {
          return z4(), null;
        })),
      (a = (d.flags & 15990) !== 0),
      d.subtreeFlags & 15990 || a
        ? ((a = Y.T),
          (Y.T = null),
          (i = q.p),
          (q.p = 2),
          (u = S1),
          (S1 |= 4),
          Rn(e, d),
          x0(d, e),
          dn(Ct, e.containerInfo),
          (a5 = !!ft),
          (Ct = ft = null),
          (e.current = d),
          g0(e, d.alternate, d),
          ol(),
          (S1 = u),
          (q.p = i),
          (Y.T = a))
        : (e.current = d),
      Y8 ? ((Y8 = !1), (e4 = e), (we = l)) : G0(e, y),
      (y = e.pendingLanes),
      y === 0 && (L3 = null),
      ml(d.stateNode),
      U2(e),
      t !== null)
    )
      for (n = e.onRecoverableError, d = 0; d < t.length; d++)
        (y = t[d]), n(y.value, { componentStack: y.stack });
    return (
      we & 3 && z4(),
      (y = e.pendingLanes),
      l & 4194218 && y & 42
        ? e === W9
          ? Me++
          : ((Me = 0), (W9 = e))
        : (Me = 0),
      Ae(0),
      null
    );
  }
  function G0(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ce(t)));
  }
  function z4() {
    if (e4 !== null) {
      var e = e4,
        t = J9;
      J9 = 0;
      var a = Pt(we),
        l = Y.T,
        n = q.p;
      try {
        if (((q.p = 32 > a ? 32 : a), (Y.T = null), e4 === null)) var i = !1;
        else {
          (a = $9), ($9 = null);
          var u = e4,
            r = we;
          if (((e4 = null), (we = 0), S1 & 6)) throw Error(o(331));
          var d = S1;
          if (
            ((S1 |= 4),
            j0(u.current),
            E0(u, u.current, r, a),
            (S1 = d),
            Ae(0, !1),
            l2 && typeof l2.onPostCommitFiberRoot == "function")
          )
            try {
              l2.onPostCommitFiberRoot(Q4, u);
            } catch {}
          i = !0;
        }
        return i;
      } finally {
        (q.p = n), (Y.T = l), G0(e, t);
      }
    }
    return !1;
  }
  function X0(e, t, a) {
    (t = d2(a, t)),
      (t = g9(e.stateNode, t, 2)),
      (e = b3(e, t, 2)),
      e !== null && (k4(e, 2), U2(e));
  }
  function v1(e, t, a) {
    if (e.tag === 3) X0(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          X0(t, e, a);
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof l.componentDidCatch == "function" &&
              (L3 === null || !L3.has(l)))
          ) {
            (e = d2(a, e)),
              (a = k7(2)),
              (l = b3(t, a, 2)),
              l !== null && (J7(a, l, t, e), k4(l, 2), U2(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function tt(e, t, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Vn();
      var n = new Set();
      l.set(t, n);
    } else (n = l.get(t)), n === void 0 && ((n = new Set()), l.set(t, n));
    n.has(a) ||
      ((X9 = !0), n.add(a), (e = Xn.bind(null, e, t, a)), t.then(e, e));
  }
  function Xn(e, t, a) {
    var l = e.pingCache;
    l !== null && l.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      y1 === e &&
        (r1 & a) === a &&
        (L1 === 4 || (L1 === 3 && (r1 & 62914560) === r1 && 300 > R2() - k9)
          ? !(S1 & 2) && O4(e, 0)
          : (Q9 |= a),
        R4 === r1 && (R4 = 0)),
      U2(e);
  }
  function Q0(e, t) {
    t === 0 && (t = $t()), (e = C3(e, t)), e !== null && (k4(e, t), U2(e));
  }
  function Qn(e) {
    var t = e.memoizedState,
      a = 0;
    t !== null && (a = t.retryLane), Q0(e, a);
  }
  function Kn(e, t) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode,
          n = e.memoizedState;
        n !== null && (a = n.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), Q0(e, a);
  }
  function kn(e, t) {
    return y5(e, t);
  }
  var Q8 = null,
    N4 = null,
    at = !1,
    K8 = !1,
    lt = !1,
    t4 = 0;
  function U2(e) {
    e !== N4 &&
      e.next === null &&
      (N4 === null ? (Q8 = N4 = e) : (N4 = N4.next = e)),
      (K8 = !0),
      at || ((at = !0), $n(Jn));
  }
  function Ae(e, t) {
    if (!lt && K8) {
      lt = !0;
      do
        for (var a = !1, l = Q8; l !== null; ) {
          if (e !== 0) {
            var n = l.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var u = l.suspendedLanes,
                r = l.pingedLanes;
              (i = (1 << (31 - n2(42 | e) + 1)) - 1),
                (i &= n & ~(u & ~r)),
                (i = i & 201326677 ? (i & 201326677) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((a = !0), J0(l, i));
          } else
            (i = r1),
              (i = t8(l, l === y1 ? i : 0)),
              !(i & 3) || K4(l, i) || ((a = !0), J0(l, i));
          l = l.next;
        }
      while (a);
      lt = !1;
    }
  }
  function Jn() {
    K8 = at = !1;
    var e = 0;
    t4 !== 0 && (li() && (e = t4), (t4 = 0));
    for (var t = R2(), a = null, l = Q8; l !== null; ) {
      var n = l.next,
        i = K0(l, t);
      i === 0
        ? ((l.next = null),
          a === null ? (Q8 = n) : (a.next = n),
          n === null && (N4 = a))
        : ((a = l), (e !== 0 || i & 3) && (K8 = !0)),
        (l = n);
    }
    Ae(e);
  }
  function K0(e, t) {
    for (
      var a = e.suspendedLanes,
        l = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var u = 31 - n2(i),
        r = 1 << u,
        d = n[u];
      d === -1
        ? (!(r & a) || r & l) && (n[u] = yl(r, t))
        : d <= t && (e.expiredLanes |= r),
        (i &= ~r);
    }
    if (
      ((t = y1),
      (a = r1),
      (a = t8(e, e === t ? a : 0)),
      (l = e.callbackNode),
      a === 0 || (e === t && b1 === 2) || e.cancelPendingCommit !== null)
    )
      return (
        l !== null && l !== null && b5(l),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if (!(a & 3) || K4(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((l !== null && b5(l), Pt(a))) {
        case 2:
        case 8:
          a = Kt;
          break;
        case 32:
          a = Pe;
          break;
        case 268435456:
          a = kt;
          break;
        default:
          a = Pe;
      }
      return (
        (l = k0.bind(null, e)),
        (a = y5(a, l)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      l !== null && l !== null && b5(l),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function k0(e, t) {
    var a = e.callbackNode;
    if (z4() && e.callbackNode !== a) return null;
    var l = r1;
    return (
      (l = t8(e, e === y1 ? l : 0)),
      l === 0
        ? null
        : (D0(e, l, t),
          K0(e, R2()),
          e.callbackNode != null && e.callbackNode === a
            ? k0.bind(null, e)
            : null)
    );
  }
  function J0(e, t) {
    if (z4()) return null;
    D0(e, t, !0);
  }
  function $n(e) {
    ii(function () {
      S1 & 6 ? y5(Qt, e) : e();
    });
  }
  function nt() {
    return t4 === 0 && (t4 = Jt()), t4;
  }
  function $0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : u8("" + e);
  }
  function W0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Wn(e, t, a, l, n) {
    if (t === "submit" && a && a.stateNode === n) {
      var i = $0((n[e2] || null).action),
        u = l.submitter;
      u &&
        ((t = (t = u[e2] || null)
          ? $0(t.formAction)
          : u.getAttribute("formAction")),
        t !== null && ((i = t), (u = null)));
      var r = new o8("action", "action", null, l, n);
      e.push({
        event: r,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (l.defaultPrevented) {
                if (t4 !== 0) {
                  var d = u ? W0(n, u) : new FormData(n);
                  d9(
                    a,
                    { pending: !0, data: d, method: n.method, action: i },
                    null,
                    d
                  );
                }
              } else
                typeof i == "function" &&
                  (r.preventDefault(),
                  (d = u ? W0(n, u) : new FormData(n)),
                  d9(
                    a,
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
  for (var it = 0; it < Y6.length; it++) {
    var ut = Y6[it],
      Fn = ut.toLowerCase(),
      Pn = ut[0].toUpperCase() + ut.slice(1);
    S2(Fn, "on" + Pn);
  }
  S2(U6, "onAnimationEnd"),
    S2(V6, "onAnimationIteration"),
    S2(B6, "onAnimationStart"),
    S2("dblclick", "onDoubleClick"),
    S2("focusin", "onFocus"),
    S2("focusout", "onBlur"),
    S2(mn, "onTransitionRun"),
    S2(pn, "onTransitionStart"),
    S2(vn, "onTransitionCancel"),
    S2(q6, "onTransitionEnd"),
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
  var Te =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    In = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Te)
    );
  function F0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a],
        n = l.event;
      l = l.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var u = l.length - 1; 0 <= u; u--) {
            var r = l[u],
              d = r.instance,
              y = r.currentTarget;
            if (((r = r.listener), d !== i && n.isPropagationStopped()))
              break e;
            (i = r), (n.currentTarget = y);
            try {
              i(n);
            } catch (w) {
              R8(w);
            }
            (n.currentTarget = null), (i = d);
          }
        else
          for (u = 0; u < l.length; u++) {
            if (
              ((r = l[u]),
              (d = r.instance),
              (y = r.currentTarget),
              (r = r.listener),
              d !== i && n.isPropagationStopped())
            )
              break e;
            (i = r), (n.currentTarget = y);
            try {
              i(n);
            } catch (w) {
              R8(w);
            }
            (n.currentTarget = null), (i = d);
          }
      }
    }
  }
  function s1(e, t) {
    var a = t[x5];
    a === void 0 && (a = t[x5] = new Set());
    var l = e + "__bubble";
    a.has(l) || (P0(t, e, 2, !1), a.add(l));
  }
  function st(e, t, a) {
    var l = 0;
    t && (l |= 4), P0(a, e, l, t);
  }
  var k8 = "_reactListening" + Math.random().toString(36).slice(2);
  function ct(e) {
    if (!e[k8]) {
      (e[k8] = !0),
        t6.forEach(function (a) {
          a !== "selectionchange" && (In.has(a) || st(a, !1, e), st(a, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[k8] || ((t[k8] = !0), st("selectionchange", !1, t));
    }
  }
  function P0(e, t, a, l) {
    switch (Ha(t)) {
      case 2:
        var n = _i;
        break;
      case 8:
        n = Li;
        break;
      default:
        n = Ht;
    }
    (a = n.bind(null, t, a, e)),
      (n = void 0),
      !A5 ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      l
        ? n !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: n })
          : e.addEventListener(t, a, !0)
        : n !== void 0
        ? e.addEventListener(t, a, { passive: n })
        : e.addEventListener(t, a, !1);
  }
  function rt(e, t, a, l, n) {
    var i = l;
    if (!(t & 1) && !(t & 2) && l !== null)
      e: for (;;) {
        if (l === null) return;
        var u = l.tag;
        if (u === 3 || u === 4) {
          var r = l.stateNode.containerInfo;
          if (r === n || (r.nodeType === 8 && r.parentNode === n)) break;
          if (u === 4)
            for (u = l.return; u !== null; ) {
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
            if (((u = z3(r)), u === null)) return;
            if (((d = u.tag), d === 5 || d === 6 || d === 26 || d === 27)) {
              l = i = u;
              continue e;
            }
            r = r.parentNode;
          }
        }
        l = l.return;
      }
    d6(function () {
      var y = i,
        w = w5(a),
        T = [];
      e: {
        var S = Z6.get(e);
        if (S !== void 0) {
          var L = o8,
            X = e;
          switch (e) {
            case "keypress":
              if (c8(a) === 0) break e;
            case "keydown":
            case "keyup":
              L = Ql;
              break;
            case "focusin":
              (X = "focus"), (L = D5);
              break;
            case "focusout":
              (X = "blur"), (L = D5);
              break;
            case "beforeblur":
            case "afterblur":
              L = D5;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              L = p6;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              L = Ol;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              L = Jl;
              break;
            case U6:
            case V6:
            case B6:
              L = Nl;
              break;
            case q6:
              L = Wl;
              break;
            case "scroll":
            case "scrollend":
              L = Tl;
              break;
            case "wheel":
              L = Pl;
              break;
            case "copy":
            case "cut":
            case "paste":
              L = Vl;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              L = g6;
              break;
            case "toggle":
            case "beforetoggle":
              L = en;
          }
          var I = (t & 4) !== 0,
            j1 = !I && (e === "scroll" || e === "scrollend"),
            H = I ? (S !== null ? S + "Capture" : null) : S;
          I = [];
          for (var g = y, x; g !== null; ) {
            var M = g;
            if (
              ((x = M.stateNode),
              (M = M.tag),
              (M !== 5 && M !== 26 && M !== 27) ||
                x === null ||
                H === null ||
                ((M = W4(g, H)), M != null && I.push(Re(g, M, x))),
              j1)
            )
              break;
            g = g.return;
          }
          0 < I.length &&
            ((S = new L(S, X, null, a, w)), T.push({ event: S, listeners: I }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((S = e === "mouseover" || e === "pointerover"),
            (L = e === "mouseout" || e === "pointerout"),
            S &&
              a !== j5 &&
              (X = a.relatedTarget || a.fromElement) &&
              (z3(X) || X[u4]))
          )
            break e;
          if (
            (L || S) &&
            ((S =
              w.window === w
                ? w
                : (S = w.ownerDocument)
                ? S.defaultView || S.parentWindow
                : window),
            L
              ? ((X = a.relatedTarget || a.toElement),
                (L = y),
                (X = X ? z3(X) : null),
                X !== null &&
                  ((j1 = F(X)),
                  (I = X.tag),
                  X !== j1 || (I !== 5 && I !== 27 && I !== 6)) &&
                  (X = null))
              : ((L = null), (X = y)),
            L !== X)
          ) {
            if (
              ((I = p6),
              (M = "onMouseLeave"),
              (H = "onMouseEnter"),
              (g = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((I = g6),
                (M = "onPointerLeave"),
                (H = "onPointerEnter"),
                (g = "pointer")),
              (j1 = L == null ? S : $4(L)),
              (x = X == null ? S : $4(X)),
              (S = new I(M, g + "leave", L, a, w)),
              (S.target = j1),
              (S.relatedTarget = x),
              (M = null),
              z3(w) === y &&
                ((I = new I(H, g + "enter", X, a, w)),
                (I.target = x),
                (I.relatedTarget = j1),
                (M = I)),
              (j1 = M),
              L && X)
            )
              t: {
                for (I = L, H = X, g = 0, x = I; x; x = U4(x)) g++;
                for (x = 0, M = H; M; M = U4(M)) x++;
                for (; 0 < g - x; ) (I = U4(I)), g--;
                for (; 0 < x - g; ) (H = U4(H)), x--;
                for (; g--; ) {
                  if (I === H || (H !== null && I === H.alternate)) break t;
                  (I = U4(I)), (H = U4(H));
                }
                I = null;
              }
            else I = null;
            L !== null && I0(T, S, L, I, !1),
              X !== null && j1 !== null && I0(T, j1, X, I, !0);
          }
        }
        e: {
          if (
            ((S = y ? $4(y) : window),
            (L = S.nodeName && S.nodeName.toLowerCase()),
            L === "select" || (L === "input" && S.type === "file"))
          )
            var Z = L6;
          else if (E6(S))
            if (j6) Z = fn;
            else {
              Z = rn;
              var i1 = cn;
            }
          else
            (L = S.nodeName),
              !L ||
              L.toLowerCase() !== "input" ||
              (S.type !== "checkbox" && S.type !== "radio")
                ? y && L5(y.elementType) && (Z = L6)
                : (Z = on);
          if (Z && (Z = Z(e, y))) {
            _6(T, Z, a, w);
            break e;
          }
          i1 && i1(e, S, y),
            e === "focusout" &&
              y &&
              S.type === "number" &&
              y.memoizedProps.value != null &&
              _5(S, "number", S.value);
        }
        switch (((i1 = y ? $4(y) : window), e)) {
          case "focusin":
            (E6(i1) || i1.contentEditable === "true") &&
              ((m4 = i1), (q5 = y), (ne = null));
            break;
          case "focusout":
            ne = q5 = m4 = null;
            break;
          case "mousedown":
            Z5 = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Z5 = !1), z6(T, a, w);
            break;
          case "selectionchange":
            if (hn) break;
          case "keydown":
          case "keyup":
            z6(T, a, w);
        }
        var k;
        if (N5)
          e: {
            switch (e) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break e;
              case "compositionend":
                $ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break e;
            }
            $ = void 0;
          }
        else
          h4
            ? x6(e, a) && ($ = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              ($ = "onCompositionStart");
        $ &&
          (y6 &&
            a.locale !== "ko" &&
            (h4 || $ !== "onCompositionStart"
              ? $ === "onCompositionEnd" && h4 && (k = h6())
              : ((f3 = w),
                (T5 = "value" in f3 ? f3.value : f3.textContent),
                (h4 = !0))),
          (i1 = J8(y, $)),
          0 < i1.length &&
            (($ = new v6($, e, null, a, w)),
            T.push({ event: $, listeners: i1 }),
            k ? ($.data = k) : ((k = S6(a)), k !== null && ($.data = k)))),
          (k = an ? ln(e, a) : nn(e, a)) &&
            (($ = J8(y, "onBeforeInput")),
            0 < $.length &&
              ((i1 = new v6("onBeforeInput", "beforeinput", null, a, w)),
              T.push({ event: i1, listeners: $ }),
              (i1.data = k))),
          Wn(T, e, y, a, w);
      }
      F0(T, t);
    });
  }
  function Re(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function J8(e, t) {
    for (var a = t + "Capture", l = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      (n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = W4(e, a)),
          n != null && l.unshift(Re(e, n, i)),
          (n = W4(e, t)),
          n != null && l.push(Re(e, n, i))),
        (e = e.return);
    }
    return l;
  }
  function U4(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function I0(e, t, a, l, n) {
    for (var i = t._reactName, u = []; a !== null && a !== l; ) {
      var r = a,
        d = r.alternate,
        y = r.stateNode;
      if (((r = r.tag), d !== null && d === l)) break;
      (r !== 5 && r !== 26 && r !== 27) ||
        y === null ||
        ((d = y),
        n
          ? ((y = W4(a, i)), y != null && u.unshift(Re(a, y, d)))
          : n || ((y = W4(a, i)), y != null && u.push(Re(a, y, d)))),
        (a = a.return);
    }
    u.length !== 0 && e.push({ event: t, listeners: u });
  }
  var ei = /\r\n?/g,
    ti = /\u0000|\uFFFD/g;
  function ea(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        ei,
        `
`
      )
      .replace(ti, "");
  }
  function ta(e, t) {
    return (t = ea(t)), ea(e) === t;
  }
  function $8() {}
  function p1(e, t, a, l, n, i) {
    switch (a) {
      case "children":
        typeof l == "string"
          ? t === "body" || (t === "textarea" && l === "") || f4(e, l)
          : (typeof l == "number" || typeof l == "bigint") &&
            t !== "body" &&
            f4(e, "" + l);
        break;
      case "className":
        l8(e, "class", l);
        break;
      case "tabIndex":
        l8(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        l8(e, a, l);
        break;
      case "style":
        f6(e, l, i);
        break;
      case "data":
        if (t !== "object") {
          l8(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          l == null ||
          typeof l == "function" ||
          typeof l == "symbol" ||
          typeof l == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        (l = u8("" + l)), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (a === "formAction"
              ? (t !== "input" && p1(e, t, "name", n.name, n, null),
                p1(e, t, "formEncType", n.formEncType, n, null),
                p1(e, t, "formMethod", n.formMethod, n, null),
                p1(e, t, "formTarget", n.formTarget, n, null))
              : (p1(e, t, "encType", n.encType, n, null),
                p1(e, t, "method", n.method, n, null),
                p1(e, t, "target", n.target, n, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        (l = u8("" + l)), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = $8);
        break;
      case "onScroll":
        l != null && s1("scroll", e);
        break;
      case "onScrollEnd":
        l != null && s1("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
          l == null ||
          typeof l == "function" ||
          typeof l == "boolean" ||
          typeof l == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (a = u8("" + l)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "" + l)
          : e.removeAttribute(a);
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
        l && typeof l != "function" && typeof l != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0
          ? e.setAttribute(a, "")
          : l !== !1 &&
            l != null &&
            typeof l != "function" &&
            typeof l != "symbol"
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null &&
        typeof l != "function" &&
        typeof l != "symbol" &&
        !isNaN(l) &&
        1 <= l
          ? e.setAttribute(a, l)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l)
          ? e.removeAttribute(a)
          : e.setAttribute(a, l);
        break;
      case "popover":
        s1("beforetoggle", e), s1("toggle", e), a8(e, "popover", l);
        break;
      case "xlinkActuate":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
        break;
      case "xlinkArcrole":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
        break;
      case "xlinkRole":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
        break;
      case "xlinkShow":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
        break;
      case "xlinkTitle":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
        break;
      case "xlinkType":
        G2(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
        break;
      case "xmlBase":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
        break;
      case "xmlLang":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
        break;
      case "xmlSpace":
        G2(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
        break;
      case "is":
        a8(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Ml.get(a) || a), a8(e, a, l));
    }
  }
  function ot(e, t, a, l, n, i) {
    switch (a) {
      case "style":
        f6(e, l, i);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l)) throw Error(o(61));
          if (((a = l.__html), a != null)) {
            if (n.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string"
          ? f4(e, l)
          : (typeof l == "number" || typeof l == "bigint") && f4(e, "" + l);
        break;
      case "onScroll":
        l != null && s1("scroll", e);
        break;
      case "onScrollEnd":
        l != null && s1("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = $8);
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
        if (!a6.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((n = a.endsWith("Capture")),
              (t = a.slice(2, n ? a.length - 7 : void 0)),
              (i = e[e2] || null),
              (i = i != null ? i[a] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof l == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, l, n);
              break e;
            }
            a in e
              ? (e[a] = l)
              : l === !0
              ? e.setAttribute(a, "")
              : a8(e, a, l);
          }
    }
  }
  function X1(e, t, a) {
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
        s1("error", e), s1("load", e);
        var l = !1,
          n = !1,
          i;
        for (i in a)
          if (a.hasOwnProperty(i)) {
            var u = a[i];
            if (u != null)
              switch (i) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  p1(e, t, i, u, a, null);
              }
          }
        n && p1(e, t, "srcSet", a.srcSet, a, null),
          l && p1(e, t, "src", a.src, a, null);
        return;
      case "input":
        s1("invalid", e);
        var r = (i = u = n = null),
          d = null,
          y = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var w = a[l];
            if (w != null)
              switch (l) {
                case "name":
                  n = w;
                  break;
                case "type":
                  u = w;
                  break;
                case "checked":
                  d = w;
                  break;
                case "defaultChecked":
                  y = w;
                  break;
                case "value":
                  i = w;
                  break;
                case "defaultValue":
                  r = w;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (w != null) throw Error(o(137, t));
                  break;
                default:
                  p1(e, t, l, w, a, null);
              }
          }
        s6(e, i, r, d, y, u, n, !1), n8(e);
        return;
      case "select":
        s1("invalid", e), (l = u = i = null);
        for (n in a)
          if (a.hasOwnProperty(n) && ((r = a[n]), r != null))
            switch (n) {
              case "value":
                i = r;
                break;
              case "defaultValue":
                u = r;
                break;
              case "multiple":
                l = r;
              default:
                p1(e, t, n, r, a, null);
            }
        (t = i),
          (a = u),
          (e.multiple = !!l),
          t != null ? o4(e, !!l, t, !1) : a != null && o4(e, !!l, a, !0);
        return;
      case "textarea":
        s1("invalid", e), (i = n = l = null);
        for (u in a)
          if (a.hasOwnProperty(u) && ((r = a[u]), r != null))
            switch (u) {
              case "value":
                l = r;
                break;
              case "defaultValue":
                n = r;
                break;
              case "children":
                i = r;
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                p1(e, t, u, r, a, null);
            }
        r6(e, l, n, i), n8(e);
        return;
      case "option":
        for (d in a)
          if (a.hasOwnProperty(d) && ((l = a[d]), l != null))
            switch (d) {
              case "selected":
                e.selected =
                  l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                p1(e, t, d, l, a, null);
            }
        return;
      case "dialog":
        s1("cancel", e), s1("close", e);
        break;
      case "iframe":
      case "object":
        s1("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Te.length; l++) s1(Te[l], e);
        break;
      case "image":
        s1("error", e), s1("load", e);
        break;
      case "details":
        s1("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        s1("error", e), s1("load", e);
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
        for (y in a)
          if (a.hasOwnProperty(y) && ((l = a[y]), l != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                p1(e, t, y, l, a, null);
            }
        return;
      default:
        if (L5(t)) {
          for (w in a)
            a.hasOwnProperty(w) &&
              ((l = a[w]), l !== void 0 && ot(e, t, w, l, a, void 0));
          return;
        }
    }
    for (r in a)
      a.hasOwnProperty(r) && ((l = a[r]), l != null && p1(e, t, r, l, a, null));
  }
  function ai(e, t, a, l) {
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
          w = null;
        for (L in a) {
          var T = a[L];
          if (a.hasOwnProperty(L) && T != null)
            switch (L) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = T;
              default:
                l.hasOwnProperty(L) || p1(e, t, L, null, l, T);
            }
        }
        for (var S in l) {
          var L = l[S];
          if (((T = a[S]), l.hasOwnProperty(S) && (L != null || T != null)))
            switch (S) {
              case "type":
                i = L;
                break;
              case "name":
                n = L;
                break;
              case "checked":
                y = L;
                break;
              case "defaultChecked":
                w = L;
                break;
              case "value":
                u = L;
                break;
              case "defaultValue":
                r = L;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(o(137, t));
                break;
              default:
                L !== T && p1(e, t, S, L, l, T);
            }
        }
        E5(e, u, r, d, y, w, i, n);
        return;
      case "select":
        L = u = r = S = null;
        for (i in a)
          if (((d = a[i]), a.hasOwnProperty(i) && d != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                L = d;
              default:
                l.hasOwnProperty(i) || p1(e, t, i, null, l, d);
            }
        for (n in l)
          if (
            ((i = l[n]),
            (d = a[n]),
            l.hasOwnProperty(n) && (i != null || d != null))
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
                i !== d && p1(e, t, n, i, l, d);
            }
        (t = r),
          (a = u),
          (l = L),
          S != null
            ? o4(e, !!a, S, !1)
            : !!l != !!a &&
              (t != null ? o4(e, !!a, t, !0) : o4(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        L = S = null;
        for (r in a)
          if (
            ((n = a[r]),
            a.hasOwnProperty(r) && n != null && !l.hasOwnProperty(r))
          )
            switch (r) {
              case "value":
                break;
              case "children":
                break;
              default:
                p1(e, t, r, null, l, n);
            }
        for (u in l)
          if (
            ((n = l[u]),
            (i = a[u]),
            l.hasOwnProperty(u) && (n != null || i != null))
          )
            switch (u) {
              case "value":
                S = n;
                break;
              case "defaultValue":
                L = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== i && p1(e, t, u, n, l, i);
            }
        c6(e, S, L);
        return;
      case "option":
        for (var X in a)
          if (
            ((S = a[X]),
            a.hasOwnProperty(X) && S != null && !l.hasOwnProperty(X))
          )
            switch (X) {
              case "selected":
                e.selected = !1;
                break;
              default:
                p1(e, t, X, null, l, S);
            }
        for (d in l)
          if (
            ((S = l[d]),
            (L = a[d]),
            l.hasOwnProperty(d) && S !== L && (S != null || L != null))
          )
            switch (d) {
              case "selected":
                e.selected =
                  S && typeof S != "function" && typeof S != "symbol";
                break;
              default:
                p1(e, t, d, S, l, L);
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
        for (var I in a)
          (S = a[I]),
            a.hasOwnProperty(I) &&
              S != null &&
              !l.hasOwnProperty(I) &&
              p1(e, t, I, null, l, S);
        for (y in l)
          if (
            ((S = l[y]),
            (L = a[y]),
            l.hasOwnProperty(y) && S !== L && (S != null || L != null))
          )
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(137, t));
                break;
              default:
                p1(e, t, y, S, l, L);
            }
        return;
      default:
        if (L5(t)) {
          for (var j1 in a)
            (S = a[j1]),
              a.hasOwnProperty(j1) &&
                S !== void 0 &&
                !l.hasOwnProperty(j1) &&
                ot(e, t, j1, void 0, l, S);
          for (w in l)
            (S = l[w]),
              (L = a[w]),
              !l.hasOwnProperty(w) ||
                S === L ||
                (S === void 0 && L === void 0) ||
                ot(e, t, w, S, l, L);
          return;
        }
    }
    for (var H in a)
      (S = a[H]),
        a.hasOwnProperty(H) &&
          S != null &&
          !l.hasOwnProperty(H) &&
          p1(e, t, H, null, l, S);
    for (T in l)
      (S = l[T]),
        (L = a[T]),
        !l.hasOwnProperty(T) ||
          S === L ||
          (S == null && L == null) ||
          p1(e, t, T, S, l, L);
  }
  var ft = null,
    Ct = null;
  function W8(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function aa(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function la(e, t) {
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
  function dt(e, t) {
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
  var ht = null;
  function li() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === ht
        ? !1
        : ((ht = e), !0)
      : ((ht = null), !1);
  }
  var na = typeof setTimeout == "function" ? setTimeout : void 0,
    ni = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ia = typeof Promise == "function" ? Promise : void 0,
    ii =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ia < "u"
        ? function (e) {
            return ia.resolve(null).then(e).catch(ui);
          }
        : na;
  function ui(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function mt(e, t) {
    var a = t,
      l = 0;
    do {
      var n = a.nextSibling;
      if ((e.removeChild(a), n && n.nodeType === 8))
        if (((a = n.data), a === "/$")) {
          if (l === 0) {
            e.removeChild(n), qe(t);
            return;
          }
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$!") || l++;
      a = n;
    } while (a);
    qe(t);
  }
  function pt(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          pt(a), S5(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function si(e, t, a, l) {
    for (; e.nodeType === 1; ) {
      var n = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (l) {
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
      if (((e = L2(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function ci(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = L2(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function L2(e) {
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
  function ua(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (t === 0) return e;
          t--;
        } else a === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function sa(e, t, a) {
    switch (((t = W8(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  var H2 = new Map(),
    ca = new Set();
  function F8(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.ownerDocument;
  }
  var n3 = q.d;
  q.d = { f: ri, r: oi, D: fi, C: Ci, L: di, m: hi, X: pi, S: mi, M: vi };
  function ri() {
    var e = n3.f(),
      t = G8();
    return e || t;
  }
  function oi(e) {
    var t = s4(e);
    t !== null && t.tag === 5 && t.type === "form" ? z7(t) : n3.r(e);
  }
  var V4 = typeof document > "u" ? null : document;
  function ra(e, t, a) {
    var l = V4;
    if (l && typeof t == "string" && t) {
      var n = f2(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof a == "string" && (n += '[crossorigin="' + a + '"]'),
        ca.has(n) ||
          (ca.add(n),
          (e = { rel: e, crossOrigin: a, href: t }),
          l.querySelector(n) === null &&
            ((t = l.createElement("link")),
            X1(t, "link", e),
            U1(t),
            l.head.appendChild(t)));
    }
  }
  function fi(e) {
    n3.D(e), ra("dns-prefetch", e, null);
  }
  function Ci(e, t) {
    n3.C(e, t), ra("preconnect", e, t);
  }
  function di(e, t, a) {
    n3.L(e, t, a);
    var l = V4;
    if (l && e && t) {
      var n = 'link[rel="preload"][as="' + f2(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((n += '[imagesrcset="' + f2(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (n += '[imagesizes="' + f2(a.imageSizes) + '"]'))
        : (n += '[href="' + f2(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = B4(e);
          break;
        case "script":
          i = q4(e);
      }
      H2.has(i) ||
        ((e = a1(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a
        )),
        H2.set(i, e),
        l.querySelector(n) !== null ||
          (t === "style" && l.querySelector(Oe(i))) ||
          (t === "script" && l.querySelector(De(i))) ||
          ((t = l.createElement("link")),
          X1(t, "link", e),
          U1(t),
          l.head.appendChild(t)));
    }
  }
  function hi(e, t) {
    n3.m(e, t);
    var a = V4;
    if (a && e) {
      var l = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + f2(l) + '"][href="' + f2(e) + '"]',
        i = n;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = q4(e);
      }
      if (
        !H2.has(i) &&
        ((e = a1({ rel: "modulepreload", href: e }, t)),
        H2.set(i, e),
        a.querySelector(n) === null)
      ) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(De(i))) return;
        }
        (l = a.createElement("link")),
          X1(l, "link", e),
          U1(l),
          a.head.appendChild(l);
      }
    }
  }
  function mi(e, t, a) {
    n3.S(e, t, a);
    var l = V4;
    if (l && e) {
      var n = c4(l).hoistableStyles,
        i = B4(e);
      t = t || "default";
      var u = n.get(i);
      if (!u) {
        var r = { loading: 0, preload: null };
        if ((u = l.querySelector(Oe(i)))) r.loading = 5;
        else {
          (e = a1({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = H2.get(i)) && vt(e, a);
          var d = (u = l.createElement("link"));
          U1(d),
            X1(d, "link", e),
            (d._p = new Promise(function (y, w) {
              (d.onload = y), (d.onerror = w);
            })),
            d.addEventListener("load", function () {
              r.loading |= 1;
            }),
            d.addEventListener("error", function () {
              r.loading |= 2;
            }),
            (r.loading |= 4),
            P8(u, t, l);
        }
        (u = { type: "stylesheet", instance: u, count: 1, state: r }),
          n.set(i, u);
      }
    }
  }
  function pi(e, t) {
    n3.X(e, t);
    var a = V4;
    if (a && e) {
      var l = c4(a).hoistableScripts,
        n = q4(e),
        i = l.get(n);
      i ||
        ((i = a.querySelector(De(n))),
        i ||
          ((e = a1({ src: e, async: !0 }, t)),
          (t = H2.get(n)) && gt(e, t),
          (i = a.createElement("script")),
          U1(i),
          X1(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function vi(e, t) {
    n3.M(e, t);
    var a = V4;
    if (a && e) {
      var l = c4(a).hoistableScripts,
        n = q4(e),
        i = l.get(n);
      i ||
        ((i = a.querySelector(De(n))),
        i ||
          ((e = a1({ src: e, async: !0, type: "module" }, t)),
          (t = H2.get(n)) && gt(e, t),
          (i = a.createElement("script")),
          U1(i),
          X1(i, "link", e),
          a.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        l.set(n, i));
    }
  }
  function oa(e, t, a, l) {
    var n = (n = c3.current) ? F8(n) : null;
    if (!n) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = B4(a.href)),
            (a = c4(n).hoistableStyles),
            (l = a.get(t)),
            l ||
              ((l = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, l)),
            l)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = B4(a.href);
          var i = c4(n).hoistableStyles,
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
              (i = n.querySelector(Oe(e))) &&
                !i._p &&
                ((u.instance = i), (u.state.loading = 5)),
              H2.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                H2.set(e, a),
                i || gi(n, e, a, u.state))),
            t && l === null)
          )
            throw Error(o(528, ""));
          return u;
        }
        if (t && l !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = q4(a)),
              (a = c4(n).hoistableScripts),
              (l = a.get(t)),
              l ||
                ((l = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, l)),
              l)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function B4(e) {
    return 'href="' + f2(e) + '"';
  }
  function Oe(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function fa(e) {
    return a1({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function gi(e, t, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (l.loading = 1)
      : ((t = e.createElement("link")),
        (l.preload = t),
        t.addEventListener("load", function () {
          return (l.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (l.loading |= 2);
        }),
        X1(t, "link", a),
        U1(t),
        e.head.appendChild(t));
  }
  function q4(e) {
    return '[src="' + f2(e) + '"]';
  }
  function De(e) {
    return "script[async]" + e;
  }
  function Ca(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var l = e.querySelector('style[data-href~="' + f2(a.href) + '"]');
          if (l) return (t.instance = l), U1(l), l;
          var n = a1({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (l = (e.ownerDocument || e).createElement("style")),
            U1(l),
            X1(l, "style", n),
            P8(l, a.precedence, e),
            (t.instance = l)
          );
        case "stylesheet":
          n = B4(a.href);
          var i = e.querySelector(Oe(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), U1(i), i;
          (l = fa(a)),
            (n = H2.get(n)) && vt(l, n),
            (i = (e.ownerDocument || e).createElement("link")),
            U1(i);
          var u = i;
          return (
            (u._p = new Promise(function (r, d) {
              (u.onload = r), (u.onerror = d);
            })),
            X1(i, "link", l),
            (t.state.loading |= 4),
            P8(i, a.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = q4(a.src)),
            (n = e.querySelector(De(i)))
              ? ((t.instance = n), U1(n), n)
              : ((l = a),
                (n = H2.get(i)) && ((l = a1({}, a)), gt(l, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                U1(n),
                X1(n, "link", l),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        !(t.state.loading & 4) &&
        ((l = t.instance), (t.state.loading |= 4), P8(l, a.precedence, e));
    return t.instance;
  }
  function P8(e, t, a) {
    for (
      var l = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = l.length ? l[l.length - 1] : null,
        i = n,
        u = 0;
      u < l.length;
      u++
    ) {
      var r = l[u];
      if (r.dataset.precedence === t) i = r;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function vt(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function gt(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var I8 = null;
  function da(e, t, a) {
    if (I8 === null) {
      var l = new Map(),
        n = (I8 = new Map());
      n.set(a, l);
    } else (n = I8), (l = n.get(a)), l || ((l = new Map()), n.set(a, l));
    if (l.has(e)) return l;
    for (
      l.set(e, null), a = a.getElementsByTagName(e), n = 0;
      n < a.length;
      n++
    ) {
      var i = a[n];
      if (
        !(
          i[J4] ||
          i[K1] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var u = i.getAttribute(t) || "";
        u = e + u;
        var r = l.get(u);
        r ? r.push(i) : l.set(u, [i]);
      }
    }
    return l;
  }
  function ha(e, t, a) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function yi(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function ma(e) {
    return !(e.type === "stylesheet" && !(e.state.loading & 3));
  }
  var ze = null;
  function bi() {}
  function Hi(e, t, a) {
    if (ze === null) throw Error(o(475));
    var l = ze;
    if (
      t.type === "stylesheet" &&
      (typeof a.media != "string" || matchMedia(a.media).matches !== !1) &&
      !(t.state.loading & 4)
    ) {
      if (t.instance === null) {
        var n = B4(a.href),
          i = e.querySelector(Oe(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (l.count++, (l = e5.bind(l)), e.then(l, l)),
            (t.state.loading |= 4),
            (t.instance = i),
            U1(i);
          return;
        }
        (i = e.ownerDocument || e),
          (a = fa(a)),
          (n = H2.get(n)) && vt(a, n),
          (i = i.createElement("link")),
          U1(i);
        var u = i;
        (u._p = new Promise(function (r, d) {
          (u.onload = r), (u.onerror = d);
        })),
          X1(i, "link", a),
          (t.instance = i);
      }
      l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(t, e),
        (e = t.state.preload) &&
          !(t.state.loading & 3) &&
          (l.count++,
          (t = e5.bind(l)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function xi() {
    if (ze === null) throw Error(o(475));
    var e = ze;
    return (
      e.stylesheets && e.count === 0 && yt(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var a = setTimeout(function () {
              if ((e.stylesheets && yt(e, e.stylesheets), e.unsuspend)) {
                var l = e.unsuspend;
                (e.unsuspend = null), l();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(a);
              }
            );
          }
        : null
    );
  }
  function e5() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) yt(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var t5 = null;
  function yt(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (t5 = new Map()),
        t.forEach(Si, e),
        (t5 = null),
        e5.call(e));
  }
  function Si(e, t) {
    if (!(t.state.loading & 4)) {
      var a = t5.get(e);
      if (a) var l = a.get(null);
      else {
        (a = new Map()), t5.set(e, a);
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
            (a.set(u.dataset.precedence, u), (l = u));
        }
        l && a.set(null, l);
      }
      (n = t.instance),
        (u = n.getAttribute("data-precedence")),
        (i = a.get(u) || l),
        i === l && a.set(null, n),
        a.set(u, n),
        this.count++,
        (l = e5.bind(this)),
        n.addEventListener("load", l),
        n.addEventListener("error", l),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Ne = {
    $$typeof: z,
    Provider: null,
    Consumer: null,
    _currentValue: c1,
    _currentValue2: c1,
    _threadCount: 0,
  };
  function Ei(e, t, a, l, n, i, u, r) {
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
      (this.expirationTimes = H5(-1)),
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
      (this.entanglements = H5(0)),
      (this.hiddenUpdates = H5(null)),
      (this.identifierPrefix = l),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = u),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = r),
      (this.incompleteTransitions = new Map());
  }
  function pa(e, t, a, l, n, i, u, r, d, y, w, T) {
    return (
      (e = new Ei(e, t, a, u, r, d, y, T)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = y2(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = F5()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: l, isDehydrated: a, cache: t }),
      T9(i),
      e
    );
  }
  function va(e) {
    return e ? ((e = g4), e) : g4;
  }
  function ga(e, t, a, l, n, i) {
    (n = va(n)),
      l.context === null ? (l.context = n) : (l.pendingContext = n),
      (l = y3(t)),
      (l.payload = { element: a }),
      (i = i === void 0 ? null : i),
      i !== null && (l.callback = i),
      (a = b3(e, l, t)),
      a !== null && (P1(a, e, t), ye(a, e, t));
  }
  function ya(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function bt(e, t) {
    ya(e, t), (e = e.alternate) && ya(e, t);
  }
  function ba(e) {
    if (e.tag === 13) {
      var t = C3(e, 67108864);
      t !== null && P1(t, e, 67108864), bt(e, 67108864);
    }
  }
  var a5 = !0;
  function _i(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var i = q.p;
    try {
      (q.p = 2), Ht(e, t, a, l);
    } finally {
      (q.p = i), (Y.T = n);
    }
  }
  function Li(e, t, a, l) {
    var n = Y.T;
    Y.T = null;
    var i = q.p;
    try {
      (q.p = 8), Ht(e, t, a, l);
    } finally {
      (q.p = i), (Y.T = n);
    }
  }
  function Ht(e, t, a, l) {
    if (a5) {
      var n = xt(l);
      if (n === null) rt(e, t, l, l5, a), xa(e, l);
      else if (wi(n, e, t, a, l)) l.stopPropagation();
      else if ((xa(e, l), t & 4 && -1 < ji.indexOf(e))) {
        for (; n !== null; ) {
          var i = s4(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var u = D3(i.pendingLanes);
                  if (u !== 0) {
                    var r = i;
                    for (r.pendingLanes |= 2, r.entangledLanes |= 2; u; ) {
                      var d = 1 << (31 - n2(u));
                      (r.entanglements[1] |= d), (u &= ~d);
                    }
                    U2(i), !(S1 & 6) && ((q8 = R2() + 500), Ae(0));
                  }
                }
                break;
              case 13:
                (r = C3(i, 2)), r !== null && P1(r, i, 2), G8(), bt(i, 2);
            }
          if (((i = xt(l)), i === null && rt(e, t, l, l5, a), i === n)) break;
          n = i;
        }
        n !== null && l.stopPropagation();
      } else rt(e, t, l, null, a);
    }
  }
  function xt(e) {
    return (e = w5(e)), St(e);
  }
  var l5 = null;
  function St(e) {
    if (((l5 = null), (e = z3(e)), e !== null)) {
      var t = F(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = g1(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (l5 = e), null;
  }
  function Ha(e) {
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
        switch (fl()) {
          case Qt:
            return 2;
          case Kt:
            return 8;
          case Pe:
          case Cl:
            return 32;
          case kt:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Et = !1,
    j3 = null,
    w3 = null,
    M3 = null,
    Ue = new Map(),
    Ve = new Map(),
    A3 = [],
    ji =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function xa(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        j3 = null;
        break;
      case "dragenter":
      case "dragleave":
        w3 = null;
        break;
      case "mouseover":
      case "mouseout":
        M3 = null;
        break;
      case "pointerover":
      case "pointerout":
        Ue.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ve.delete(t.pointerId);
    }
  }
  function Be(e, t, a, l, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: l,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = s4(t)), t !== null && ba(t)),
        e)
      : ((e.eventSystemFlags |= l),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function wi(e, t, a, l, n) {
    switch (t) {
      case "focusin":
        return (j3 = Be(j3, e, t, a, l, n)), !0;
      case "dragenter":
        return (w3 = Be(w3, e, t, a, l, n)), !0;
      case "mouseover":
        return (M3 = Be(M3, e, t, a, l, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return Ue.set(i, Be(Ue.get(i) || null, e, t, a, l, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Ve.set(i, Be(Ve.get(i) || null, e, t, a, l, n)), !0
        );
    }
    return !1;
  }
  function Sa(e) {
    var t = z3(e.target);
    if (t !== null) {
      var a = F(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = g1(a)), t !== null)) {
            (e.blockedOn = t),
              Hl(e.priority, function () {
                if (a.tag === 13) {
                  var l = r2(),
                    n = C3(a, l);
                  n !== null && P1(n, a, l), bt(a, l);
                }
              });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function n5(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = xt(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(a.type, a);
        (j5 = l), a.target.dispatchEvent(l), (j5 = null);
      } else return (t = s4(a)), t !== null && ba(t), (e.blockedOn = a), !1;
      t.shift();
    }
    return !0;
  }
  function Ea(e, t, a) {
    n5(e) && a.delete(t);
  }
  function Mi() {
    (Et = !1),
      j3 !== null && n5(j3) && (j3 = null),
      w3 !== null && n5(w3) && (w3 = null),
      M3 !== null && n5(M3) && (M3 = null),
      Ue.forEach(Ea),
      Ve.forEach(Ea);
  }
  function i5(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Et ||
        ((Et = !0),
        c.unstable_scheduleCallback(c.unstable_NormalPriority, Mi)));
  }
  var u5 = null;
  function _a(e) {
    u5 !== e &&
      ((u5 = e),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        u5 === e && (u5 = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            l = e[t + 1],
            n = e[t + 2];
          if (typeof l != "function") {
            if (St(l || a) === null) continue;
            break;
          }
          var i = s4(a);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            d9(i, { pending: !0, data: n, method: a.method, action: l }, l, n));
        }
      }));
  }
  function qe(e) {
    function t(d) {
      return i5(d, e);
    }
    j3 !== null && i5(j3, e),
      w3 !== null && i5(w3, e),
      M3 !== null && i5(M3, e),
      Ue.forEach(t),
      Ve.forEach(t);
    for (var a = 0; a < A3.length; a++) {
      var l = A3[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < A3.length && ((a = A3[0]), a.blockedOn === null); )
      Sa(a), a.blockedOn === null && A3.shift();
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (l = 0; l < a.length; l += 3) {
        var n = a[l],
          i = a[l + 1],
          u = n[e2] || null;
        if (typeof i == "function") u || _a(a);
        else if (u) {
          var r = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (u = i[e2] || null))) r = u.formAction;
            else if (St(n) !== null) continue;
          } else r = u.action;
          typeof r == "function" ? (a[l + 1] = r) : (a.splice(l, 3), (l -= 3)),
            _a(a);
        }
      }
  }
  function _t(e) {
    this._internalRoot = e;
  }
  (s5.prototype.render = _t.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        l = r2();
      ga(a, l, e, t, null, null);
    }),
    (s5.prototype.unmount = _t.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          e.tag === 0 && z4(),
            ga(e.current, 2, null, e, null, null),
            G8(),
            (t[u4] = null);
        }
      });
  function s5(e) {
    this._internalRoot = e;
  }
  s5.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = It();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < A3.length && t !== 0 && t < A3[a].priority; a++);
      A3.splice(a, 0, e), a === 0 && Sa(e);
    }
  };
  var La = f.version;
  if (La !== "19.0.0") throw Error(o(527, La, "19.0.0"));
  q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = O(t)),
      (e = e !== null ? W(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var Ai = {
    bundleType: 0,
    version: "19.0.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: Y,
    findFiberByHostInstance: z3,
    reconcilerVersion: "19.0.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var c5 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!c5.isDisabled && c5.supportsFiber)
      try {
        (Q4 = c5.inject(Ai)), (l2 = c5);
      } catch {}
  }
  return (
    (Ye.createRoot = function (e, t) {
      if (!h(e)) throw Error(o(299));
      var a = !1,
        l = "",
        n = G7,
        i = X7,
        u = Q7,
        r = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (l = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (r = t.unstable_transitionCallbacks)),
        (t = pa(e, 1, !1, null, null, a, l, n, i, u, r, null)),
        (e[u4] = t.current),
        ct(e.nodeType === 8 ? e.parentNode : e),
        new _t(t)
      );
    }),
    (Ye.hydrateRoot = function (e, t, a) {
      if (!h(e)) throw Error(o(299));
      var l = !1,
        n = "",
        i = G7,
        u = X7,
        r = Q7,
        d = null,
        y = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (l = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (i = a.onUncaughtError),
          a.onCaughtError !== void 0 && (u = a.onCaughtError),
          a.onRecoverableError !== void 0 && (r = a.onRecoverableError),
          a.unstable_transitionCallbacks !== void 0 &&
            (d = a.unstable_transitionCallbacks),
          a.formState !== void 0 && (y = a.formState)),
        (t = pa(e, 1, !0, t, a ?? null, l, n, i, u, r, d, y)),
        (t.context = va(null)),
        (a = t.current),
        (l = r2()),
        (n = y3(l)),
        (n.callback = null),
        b3(a, n, l),
        (t.current.lanes = l),
        k4(t, l),
        U2(t),
        (e[u4] = t.current),
        ct(e),
        new s5(t)
      );
    }),
    (Ye.version = "19.0.0"),
    Ye
  );
}
var Na;
function qi() {
  if (Na) return wt.exports;
  Na = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (f) {
        console.error(f);
      }
  }
  return c(), (wt.exports = Bi()), wt.exports;
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
function Ua() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      className: D1.logo,
      width: "160",
      height: "58",
      viewBox: "0 0 160 58",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsx("path", {
          d: "M30.8909 24.7244C30.8868 24.8261 30.8671 24.9266 30.8324 25.0222C30.7675 25.0222 30.6636 25.0222 30.5272 25.0222L30.0824 25.0418L29.6376 25.0614H29.3129C28.9852 25.0708 28.6577 25.0367 28.3388 24.96C28.0922 24.8864 27.8685 24.75 27.6894 24.564C27.4868 24.3489 27.296 24.1228 27.118 23.8866C26.8647 23.5593 26.5855 23.1961 26.277 22.7706L25.303 21.4289C24.9621 20.9576 24.6536 20.506 24.3289 20.074C24.0042 19.642 23.7704 19.2559 23.5399 18.909C23.3094 18.5621 23.1438 18.3265 23.0529 18.1759C23.0598 18.0568 23.0862 17.9396 23.1308 17.829C23.1755 17.7363 23.236 17.6521 23.3094 17.5803C23.7669 17.5212 24.2166 17.4114 24.6504 17.2531C25.0427 17.1097 25.4099 16.9042 25.7381 16.6444C26.0373 16.4029 26.2829 16.1007 26.4589 15.7575C26.6411 15.3947 26.7325 14.9925 26.7251 14.5859C26.7384 14.1588 26.6575 13.7341 26.4881 13.3423C26.3415 13.02 26.1185 12.739 25.8387 12.5242C25.5584 12.3137 25.2395 12.1613 24.9004 12.0758C24.5331 11.9827 24.1557 11.9365 23.7769 11.9384H23.3808L22.9457 11.958C22.8029 11.958 22.6633 11.9744 22.5334 11.9875C22.4035 12.0006 22.2964 12.0137 22.2087 12.0267L22.1697 12.9038C22.1697 13.1689 22.147 13.4765 22.1405 13.8299C22.134 14.1834 22.1405 14.5499 22.1405 14.9328L22.1015 20.4962C22.1015 20.5878 22.1015 20.806 22.1015 21.1507C22.1015 21.478 22.1015 21.8641 22.1015 22.2536C22.1015 22.643 22.121 23.003 22.1405 23.3303C22.1301 23.5249 22.1669 23.7192 22.2477 23.8964C22.4587 24.1091 22.9198 24.2728 23.6308 24.3938C23.6524 24.4918 23.6655 24.5914 23.6698 24.6916C23.6726 24.7385 23.6726 24.7855 23.6698 24.8324C23.6698 24.8847 23.6601 24.9436 23.6406 25.0091H23.0886C22.8386 25.0091 22.5431 25.0091 22.199 24.9895C21.8548 24.9698 21.5496 24.9698 21.2249 24.9698C20.9002 24.9698 20.608 24.9698 20.2768 24.9895C19.9456 25.0091 19.6599 25.0091 19.4099 25.0091H18.8319C18.8189 24.9436 18.8092 24.8847 18.8027 24.8324C18.7999 24.7855 18.7999 24.7385 18.8027 24.6916C18.807 24.5914 18.8201 24.4918 18.8417 24.3938C19.5398 24.2728 19.9878 24.1157 20.1859 23.916C20.2687 23.7393 20.3087 23.5453 20.3028 23.3499C20.332 23.0226 20.3515 22.6659 20.3645 22.2732C20.3775 21.8805 20.3839 21.514 20.3839 21.1703V20.506L20.4424 14.9426V14.3666C20.4424 14.095 20.4424 13.8168 20.4229 13.5289C20.4034 13.2409 20.3937 12.9823 20.3742 12.7434C20.3774 12.5985 20.3463 12.4549 20.2833 12.3246C20.1379 12.1978 19.9658 12.106 19.78 12.0562C19.5495 11.9842 19.2638 11.9155 18.9228 11.8468C18.9008 11.7489 18.8878 11.6492 18.8839 11.5489C18.8811 11.5032 18.8811 11.4573 18.8839 11.4115C18.8839 11.3559 18.8839 11.297 18.9131 11.2315H19.1988C19.3222 11.2315 19.4586 11.2315 19.6047 11.2119H19.8515C19.9449 11.2121 20.0382 11.2055 20.1307 11.1922L21.1762 11.1431L22.3223 11.081L23.4068 11.0319C23.751 11.0319 24.0562 11.0122 24.2964 11.0122C24.7951 11.0131 25.2931 11.0492 25.7868 11.1202C26.2757 11.1885 26.7479 11.3471 27.1797 11.5882C27.6059 11.8322 27.9626 12.1827 28.2154 12.606C28.5102 13.14 28.6508 13.7465 28.6213 14.3568C28.6319 14.8008 28.5507 15.2422 28.383 15.6529C28.2153 16.0636 27.9648 16.4346 27.6472 16.7425C26.9208 17.42 26.0068 17.8584 25.027 17.9992C25.1309 18.1694 25.2965 18.4181 25.5205 18.7454C25.7446 19.0726 25.9978 19.4293 26.2803 19.8188C26.5628 20.2082 26.8582 20.6173 27.1699 21.0427C27.4816 21.4682 27.7739 21.8674 28.0563 22.2372C28.3388 22.607 28.5986 22.9343 28.8291 23.219C28.9898 23.423 29.1645 23.6155 29.3518 23.795C29.5398 23.9648 29.7443 24.115 29.9623 24.2433C30.1356 24.3501 30.3339 24.4088 30.537 24.4135H30.8454C30.8641 24.4586 30.8772 24.5059 30.8844 24.5542C30.8918 24.6106 30.894 24.6676 30.8909 24.7244Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M23.8321 33.5505C23.828 33.6508 23.8149 33.7504 23.7932 33.8483C23.449 33.9171 23.1633 33.9825 22.9327 34.048C22.7466 34.0915 22.5738 34.1803 22.4295 34.3065C22.3736 34.3993 22.3433 34.5055 22.3418 34.6141C22.3223 34.7821 22.3061 34.9883 22.2931 35.2326C22.2801 35.477 22.2704 35.7453 22.2639 36.0377C22.2639 36.3322 22.2639 36.6169 22.2639 36.8951L22.2217 42.4585V43.4239C22.2217 43.8003 22.2217 44.1668 22.2217 44.517C22.2217 44.8671 22.2444 45.1715 22.2736 45.4529C22.2711 45.6228 22.3113 45.7906 22.3905 45.9405C22.5363 46.0743 22.7125 46.1698 22.9035 46.2187C23.1276 46.2842 23.3971 46.3529 23.7152 46.4183C23.737 46.5162 23.7501 46.6159 23.7542 46.7161C23.7569 46.763 23.7569 46.81 23.7542 46.8569C23.7542 46.9092 23.7445 46.9681 23.725 47.0336H23.16C22.9111 47.0336 22.6189 47.027 22.2834 47.0139C21.9587 47.0139 21.634 46.9943 21.3255 46.9943C21.0171 46.9943 20.7054 46.9943 20.3775 47.0139C20.0495 47.0336 19.7573 47.0336 19.5073 47.0336H18.9553C18.9423 46.9681 18.9326 46.9092 18.9261 46.8569C18.9234 46.81 18.9234 46.763 18.9261 46.7161C18.9302 46.6159 18.9433 46.5162 18.9651 46.4183C19.2544 46.3645 19.5406 46.2946 19.8222 46.2089C20.0092 46.1597 20.1825 46.0679 20.3287 45.9405C20.3916 45.7998 20.4216 45.6464 20.4164 45.4922C20.4359 45.2337 20.4554 44.926 20.4749 44.566C20.4943 44.2061 20.5073 43.8363 20.5138 43.4534C20.5203 43.0705 20.5138 42.7367 20.5138 42.4716L20.5528 36.9082C20.5528 36.6169 20.5528 36.3224 20.5528 36.0311C20.5528 35.7399 20.5365 35.4748 20.5236 35.2359C20.5144 35.0354 20.4949 34.8355 20.4651 34.637C20.458 34.5311 20.4245 34.4287 20.3677 34.3392C20.2223 34.2071 20.0456 34.1147 19.8547 34.0709C19.6307 34.012 19.3579 33.9498 19.043 33.8811C19.0212 33.7832 19.0082 33.6835 19.004 33.5833C19.0012 33.5375 19.0012 33.4916 19.004 33.4458C19.004 33.3902 19.004 33.3313 19.0332 33.2658H19.5852C19.8352 33.2658 20.1307 33.2658 20.4651 33.2855C20.7995 33.3051 21.1145 33.3051 21.4392 33.3051C21.7639 33.3051 22.0593 33.3051 22.3873 33.2855C22.7152 33.2658 23.0074 33.2658 23.2574 33.2658H23.8094C23.8094 33.3313 23.8321 33.3902 23.8386 33.4458C23.8381 33.4808 23.8359 33.5157 23.8321 33.5505ZM30.7837 46.7063C30.7864 46.7532 30.7864 46.8002 30.7837 46.847C30.7837 46.8994 30.774 46.9583 30.7545 47.0238H30.4298L29.9947 47.0434L29.5207 47.0663H29.0888C28.7711 47.0748 28.4541 47.0305 28.1505 46.9354C27.9495 46.8744 27.7643 46.7693 27.6083 46.6278C27.4632 46.4816 27.2468 46.2329 26.9589 45.8816C26.6764 45.5282 26.3615 45.1289 26.0205 44.6773C25.6796 44.2257 25.3225 43.7512 24.9556 43.2537C24.5887 42.7563 24.2445 42.2883 23.9263 41.8498L23.1081 40.7077C22.8776 40.3804 22.7217 40.1579 22.6438 40.0532L26.1796 35.9722C26.4686 35.645 26.7219 35.3177 26.9394 35.0461C27.0993 34.8771 27.2114 34.6681 27.2641 34.4407C27.2639 34.3486 27.2353 34.2589 27.1824 34.1839C27.1295 34.1089 27.0548 34.0522 26.9686 34.0218C26.7559 33.9251 26.5288 33.8643 26.2965 33.8418C26.2715 33.7445 26.2584 33.6445 26.2576 33.544C26.2568 33.4337 26.2699 33.3237 26.2965 33.2167H26.9881H27.3323C27.4838 33.2167 27.6494 33.2167 27.8291 33.2167H28.3713H28.8648C29.1289 33.2167 29.3821 33.2102 29.6246 33.1971C29.8681 33.1971 30.0629 33.1775 30.2058 33.1775H30.6603C30.6773 33.2153 30.6903 33.2548 30.6993 33.2953C30.7139 33.3542 30.7215 33.4146 30.722 33.4753C30.7213 33.5392 30.7136 33.6028 30.6993 33.6651C30.6911 33.7089 30.678 33.7518 30.6603 33.7927C30.3973 33.8483 30.1798 33.8974 30.011 33.9432C29.8156 34.0014 29.6312 34.0921 29.4655 34.2116C29.2234 34.3909 28.9964 34.5902 28.7869 34.8072C28.5206 35.0756 28.1667 35.4617 27.7187 35.9232L24.4231 39.5983C24.5042 39.703 24.6471 39.9026 24.8582 40.1939C25.0692 40.4851 25.3225 40.8484 25.6179 41.2313C25.9134 41.6142 26.2348 42.056 26.5758 42.5141C26.9167 42.9723 27.2576 43.4174 27.5953 43.8461C27.933 44.2748 28.2447 44.674 28.5434 45.0308C28.8421 45.3875 29.0856 45.6689 29.2837 45.8685C29.4472 46.0318 29.6371 46.1657 29.8454 46.2645C30.0636 46.3721 30.3037 46.427 30.5467 46.4249H30.7448C30.7656 46.5174 30.7786 46.6116 30.7837 46.7063Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M32.2675 28.9002H17.4325V29.4173H32.2675V28.9002Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M24.9166 58L0 43.4992V14.5008L24.9166 0L49.8364 14.5008V43.4992L24.9166 58ZM2.21762 42.2163L24.9166 55.4245L47.6188 42.2163V15.7902L24.9166 2.5788L2.21762 15.7902V42.2163Z",
          fill: "#B8824F",
        }),
        s.jsx("path", {
          d: "M67.4021 27.2541C67.4055 27.3086 67.4055 27.3632 67.4021 27.4177C67.3944 27.4656 67.3825 27.5127 67.3664 27.5584L66.717 27.5748H65.9702C65.75 27.5845 65.5299 27.5535 65.3208 27.4832C65.1417 27.409 64.9801 27.2975 64.8468 27.1559C64.7846 27.0953 64.73 27.0271 64.6844 26.953C64.6098 26.8385 64.5221 26.6977 64.4214 26.5276L64.0968 25.9712C63.9755 25.7683 63.8554 25.5622 63.7364 25.3527C63.4571 24.8618 63.1454 24.3153 62.8013 23.7164C62.8021 23.6151 62.8263 23.5153 62.872 23.425C62.9176 23.3347 62.9834 23.2564 63.0642 23.1961C63.2979 23.1429 63.5254 23.0651 63.7428 22.9637C63.9427 22.8769 64.127 22.7574 64.2883 22.6103C64.4301 22.463 64.5406 22.2882 64.613 22.0965C64.7018 21.8695 64.7448 21.627 64.7396 21.3831C64.7531 21.187 64.7247 20.9904 64.6564 20.8063C64.588 20.6223 64.4813 20.4552 64.3435 20.3162C64.2056 20.1773 64.0398 20.0698 63.8572 20.0009C63.6746 19.932 63.4795 19.9034 63.285 19.9169C63.2363 19.9169 63.1649 19.9169 63.0642 19.9169H62.7558C62.6519 19.9169 62.5545 19.9169 62.4571 19.9366H62.2525C62.2525 20.0904 62.2525 20.2638 62.2525 20.4078C62.2525 20.5518 62.2525 20.6991 62.2525 20.8693V21.3536L62.2168 25.0942C62.2168 25.248 62.2168 25.4018 62.2168 25.5589C62.2168 25.716 62.2168 25.8665 62.2428 26.0072C62.2514 26.1389 62.2731 26.2694 62.3077 26.3967C62.3304 26.4953 62.3812 26.5852 62.4538 26.6552C62.5147 26.719 62.5822 26.776 62.6551 26.8254C62.7664 26.8851 62.8896 26.9187 63.0155 26.9235C63.0336 26.9675 63.0456 27.0138 63.0513 27.061C63.0686 27.1694 63.0686 27.2799 63.0513 27.3883C63.0452 27.4365 63.0332 27.4837 63.0155 27.529H62.6909C62.4766 27.529 62.2363 27.529 61.9765 27.529C61.7168 27.529 61.5057 27.529 61.3466 27.529C61.1875 27.529 60.9635 27.529 60.7265 27.529C60.4895 27.529 60.2719 27.529 60.0771 27.529H59.5966C59.579 27.4837 59.567 27.4365 59.5609 27.3883C59.5435 27.2799 59.5435 27.1694 59.5609 27.061C59.5666 27.0138 59.5786 26.9675 59.5966 26.9235C59.8519 26.9173 60.0973 26.8225 60.2914 26.6552C60.3568 26.5808 60.4046 26.4924 60.431 26.3967C60.4678 26.2696 60.4917 26.1391 60.5025 26.0072C60.5025 25.8665 60.5219 25.716 60.5252 25.5589C60.5284 25.4018 60.5252 25.2316 60.5252 25.0942L60.5512 21.3896C60.5512 21.082 60.5512 20.794 60.5512 20.5289C60.5617 20.3174 60.4934 20.1096 60.3596 19.9464C60.2835 19.8757 60.1956 19.8192 60.0998 19.7795C59.9685 19.7247 59.8293 19.6916 59.6875 19.6813C59.6698 19.6359 59.6568 19.5887 59.6485 19.5406C59.6451 19.4861 59.6451 19.4315 59.6485 19.377C59.6453 19.2735 59.6652 19.1705 59.707 19.0759H60.3563L61.233 19.053L62.2493 19.0268L63.2233 19.0039H63.9279C64.2709 19.0015 64.6129 19.0389 64.9474 19.1152C65.2507 19.1793 65.5386 19.3027 65.7949 19.4784C66.0393 19.6449 66.2389 19.8697 66.3761 20.1329C66.53 20.4445 66.6048 20.7897 66.5936 21.1376C66.5952 21.4152 66.5445 21.6906 66.4443 21.9492C66.3453 22.1964 66.2047 22.4245 66.0287 22.6234C65.8491 22.8231 65.6385 22.9922 65.4053 23.1241C65.1641 23.2667 64.9054 23.3767 64.6357 23.4513C64.9604 24.0077 65.2624 24.5149 65.5351 24.9665L65.8436 25.5262L66.1683 26.053C66.2689 26.2167 66.3566 26.3541 66.4345 26.4654C66.4824 26.5456 66.5402 26.6192 66.6066 26.6846C66.6786 26.7637 66.7658 26.8271 66.863 26.871C66.9601 26.9149 67.0651 26.9383 67.1716 26.9399H67.3534C67.3699 26.9844 67.3819 27.0304 67.3891 27.0774C67.3974 27.1359 67.4017 27.1949 67.4021 27.2541Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M76.5323 23.1143C76.5375 23.7414 76.4148 24.3629 76.1719 24.9404C75.9439 25.4896 75.6132 25.9896 75.1979 26.413C74.7801 26.8345 74.2834 27.1682 73.7368 27.3948C73.1649 27.6304 72.5525 27.7494 71.9347 27.745C71.3785 27.7547 70.8261 27.65 70.3113 27.4373C69.8501 27.2413 69.436 26.9478 69.097 26.5767C68.758 26.1975 68.5005 25.7518 68.3404 25.2676C68.1638 24.7227 68.0772 24.1522 68.0839 23.579C68.0755 22.9331 68.1959 22.2921 68.4379 21.694C68.6586 21.1456 68.9881 20.6485 69.4063 20.2332C69.8245 19.8179 70.3225 19.4931 70.8698 19.2788C71.4442 19.0546 72.0559 18.9435 72.6718 18.9515C73.2276 18.9433 73.7795 19.0468 74.2952 19.2559C74.758 19.446 75.1729 19.7378 75.5096 20.11C75.8469 20.4904 76.1042 20.9357 76.2661 21.4191C76.4465 21.9656 76.5364 22.5383 76.5323 23.1143ZM74.7401 23.2452C74.7415 22.8284 74.6869 22.4134 74.5777 22.0114C74.4774 21.6314 74.315 21.2708 74.0972 20.9445C73.8901 20.6282 73.6149 20.3631 73.2919 20.1689C72.9488 19.9659 72.5566 19.8628 72.1588 19.8711C71.9226 19.8757 71.688 19.9109 71.4607 19.9759C71.2542 20.0242 71.0561 20.1037 70.873 20.2115C70.5633 20.5955 70.3197 21.0291 70.1522 21.4943C69.9399 22.1261 69.842 22.7912 69.8632 23.4579C69.8622 23.8785 69.9146 24.2975 70.0191 24.7047C70.1157 25.0891 70.2783 25.4535 70.4996 25.7814C70.7145 26.0778 70.9889 26.3253 71.3049 26.5079C71.6474 26.7088 72.0386 26.8096 72.4348 26.7992C72.6719 26.7956 72.9076 26.7615 73.1361 26.6977C73.3448 26.6498 73.5451 26.5704 73.7303 26.4621C73.881 26.2847 74.0158 26.0942 74.1329 25.8927C74.2662 25.6708 74.3751 25.4348 74.4576 25.1891C74.5533 24.9058 74.624 24.6145 74.6686 24.3186C74.721 23.96 74.7449 23.5978 74.7401 23.2353V23.2452Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M86.286 23.1143C86.2911 23.7414 86.1684 24.3629 85.9256 24.9404C85.6975 25.4897 85.3669 25.9896 84.9515 26.413C84.5343 26.8337 84.0389 27.1673 83.4936 27.3948C82.9216 27.6297 82.3093 27.7487 81.6916 27.745C81.1354 27.7546 80.583 27.6499 80.0682 27.4373C79.608 27.2412 79.1949 26.9477 78.8571 26.5767C78.5171 26.1983 78.2594 25.7524 78.1006 25.2676C77.9228 24.7229 77.8351 24.1524 77.8408 23.579C77.834 22.9332 77.9543 22.2925 78.1947 21.694C78.4155 21.1451 78.7454 20.6477 79.1643 20.2323C79.5831 19.8169 80.0819 19.4924 80.6299 19.2788C81.2041 19.0541 81.816 18.943 82.4319 18.9515C82.9877 18.9436 83.5396 19.047 84.0554 19.2559C84.5172 19.446 84.931 19.7378 85.2664 20.11C85.6048 20.4902 85.8632 20.9355 86.0262 21.4191C86.2043 21.966 86.2921 22.5387 86.286 23.1143ZM84.4969 23.2452C84.4967 22.8285 84.4422 22.4137 84.3346 22.0114C84.2315 21.6324 84.0693 21.2722 83.854 20.9445C83.6462 20.6289 83.3711 20.364 83.0488 20.1689C82.7044 19.9662 82.3112 19.8632 81.9124 19.8711C81.6773 19.8755 81.4437 19.9107 81.2176 19.9759C81.0101 20.0243 80.8109 20.1037 80.6266 20.2115C80.3169 20.5955 80.0733 21.0291 79.9058 21.4943C79.6935 22.1261 79.5956 22.7912 79.6169 23.4579C79.6153 23.8787 79.6688 24.298 79.776 24.7047C79.8712 25.0896 80.0339 25.4543 80.2565 25.7814C80.4705 26.0775 80.7437 26.325 81.0585 26.5079C81.401 26.7088 81.7922 26.8096 82.1884 26.7992C82.4266 26.7954 82.6633 26.7613 82.893 26.6977C83.1017 26.6498 83.302 26.5704 83.4871 26.4621C83.6368 26.2839 83.7715 26.0934 83.8898 25.8927C84.0218 25.6701 84.1306 25.4343 84.2144 25.1891C84.3087 24.9053 84.3793 24.6141 84.4255 24.3186C84.4779 23.96 84.5018 23.5978 84.4969 23.2353V23.2452Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M93.4713 20.8987C93.4239 20.9153 93.3749 20.9274 93.3252 20.9347C93.269 20.9381 93.2126 20.9381 93.1564 20.9347C93.059 20.9395 92.9617 20.9239 92.8707 20.8889C92.8407 20.7193 92.7837 20.5558 92.7018 20.4046C92.6389 20.2912 92.5455 20.1982 92.4323 20.1362C92.3089 20.0767 92.1758 20.0401 92.0395 20.0282C91.8604 20.0099 91.6805 20.0012 91.5005 20.002H91.3446C91.2927 20.005 91.2407 20.005 91.1888 20.002C91.1283 20.0071 91.0674 20.0071 91.0069 20.002C91.0069 20.1231 91.0069 20.2573 91.0069 20.4013C91.0069 20.5453 91.0069 20.6565 91.0069 20.8071V21.2718L90.9712 25.0745C90.9712 25.2283 90.9712 25.3822 90.9712 25.5425C90.9756 25.6937 90.9886 25.8445 91.0102 25.9941C91.0271 26.1278 91.0531 26.2601 91.0881 26.3901C91.1084 26.489 91.1583 26.5792 91.231 26.6486C91.4259 26.8167 91.6726 26.9115 91.9291 26.917C91.9441 26.9619 91.956 27.0079 91.9648 27.0544C91.9778 27.1631 91.9778 27.273 91.9648 27.3817C91.9556 27.4293 91.9437 27.4763 91.9291 27.5224H91.6044C91.3868 27.5224 91.1758 27.5224 90.955 27.5224C90.7342 27.5224 90.4744 27.5224 90.1368 27.5224C89.7991 27.5224 89.5264 27.5224 89.2958 27.5224C89.0653 27.5224 88.8478 27.5224 88.6465 27.5224H88.3575C88.3414 27.4767 88.3294 27.4296 88.3218 27.3817C88.3088 27.273 88.3088 27.1631 88.3218 27.0544C88.329 27.0075 88.341 26.9615 88.3575 26.917C88.6139 26.9115 88.8606 26.8167 89.0556 26.6486C89.1947 26.472 89.2692 26.2524 89.2666 26.0269C89.2861 25.7323 89.2958 25.4182 89.2958 25.0876L89.3186 21.2718C89.3186 21.1114 89.3186 20.9445 89.3186 20.8071C89.3186 20.6696 89.3186 20.5224 89.3186 20.4013C89.3186 20.2802 89.3186 20.1231 89.3186 20.002C89.2581 20.0071 89.1972 20.0071 89.1367 20.002C89.0837 20.005 89.0306 20.005 88.9776 20.002H88.825C88.645 20.0012 88.4651 20.0099 88.2861 20.0282C88.1487 20.0402 88.0146 20.0768 87.8899 20.1362C87.7723 20.1966 87.6743 20.2898 87.6075 20.4046C87.5184 20.5543 87.4548 20.718 87.4191 20.8889C87.3281 20.9239 87.2308 20.9395 87.1334 20.9347C87.0772 20.9381 87.0208 20.9381 86.9646 20.9347C86.9148 20.9278 86.8658 20.9157 86.8185 20.8987L86.8672 19.0923H87.1432H87.4938H87.8477H92.507H92.8609H93.2116H93.4876L93.4713 20.8987Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M102.602 19.4064C102.605 19.4609 102.605 19.5156 102.602 19.5701C102.594 19.618 102.582 19.6652 102.566 19.7108C102.31 19.7169 102.064 19.8104 101.868 19.9759C101.733 20.1383 101.664 20.3467 101.676 20.5584C101.676 20.8235 101.676 21.1114 101.676 21.4191L101.628 25.1236C101.628 25.2774 101.628 25.4312 101.628 25.5883C101.628 25.7454 101.628 25.896 101.65 26.0367C101.662 26.1683 101.684 26.2986 101.718 26.4261C101.74 26.5245 101.79 26.6143 101.861 26.6846C101.938 26.7572 102.027 26.8149 102.124 26.8548C102.259 26.9091 102.402 26.9422 102.546 26.953C102.564 26.997 102.576 27.0432 102.582 27.0904C102.599 27.1988 102.599 27.3093 102.582 27.4177C102.576 27.4659 102.564 27.5132 102.546 27.5584H102.115C101.897 27.5584 101.66 27.5584 101.4 27.5584C101.14 27.5584 100.929 27.5584 100.767 27.5584C100.605 27.5584 100.387 27.5584 100.15 27.5584C99.9132 27.5584 99.6956 27.5584 99.5008 27.5584H99.0203C99.0041 27.5127 98.9922 27.4656 98.9845 27.4177C98.9672 27.3093 98.9672 27.1988 98.9845 27.0904C98.9918 27.0435 99.0037 26.9975 99.0203 26.953C99.2766 26.9467 99.523 26.852 99.7183 26.6846C99.7832 26.6104 99.8299 26.5218 99.8547 26.4261C99.8926 26.2992 99.9176 26.1687 99.9294 26.0367C99.9294 25.896 99.9489 25.7454 99.9521 25.5883C99.9554 25.4312 99.9521 25.2611 99.9521 25.1236V23.6575H96.8026V25.1236C96.8026 25.2774 96.8026 25.4312 96.8026 25.5883C96.8026 25.7454 96.8026 25.896 96.8286 26.0367C96.8372 26.1684 96.859 26.2988 96.8935 26.4261C96.9165 26.524 96.966 26.6135 97.0364 26.6846C97.1136 26.7579 97.204 26.8157 97.3026 26.8548C97.4364 26.9092 97.5777 26.9423 97.7215 26.953C97.7395 26.997 97.7515 27.0432 97.7572 27.0904C97.7746 27.1988 97.7746 27.3093 97.7572 27.4177C97.7511 27.4659 97.7391 27.5132 97.7215 27.5584H97.2897C97.0754 27.5584 96.8351 27.5584 96.5754 27.5584C96.3156 27.5584 96.1046 27.5584 95.9455 27.5584C95.7864 27.5584 95.5623 27.5584 95.3253 27.5584C95.0883 27.5584 94.8707 27.5584 94.6759 27.5584H94.1921C94.1749 27.5128 94.1619 27.4657 94.1532 27.4177C94.1402 27.309 94.1402 27.1991 94.1532 27.0904C94.1614 27.0434 94.1744 26.9973 94.1921 26.953C94.4475 26.9468 94.6929 26.852 94.887 26.6846C94.9524 26.6103 95.0001 26.5219 95.0266 26.4261C95.0634 26.2991 95.0873 26.1686 95.098 26.0367C95.098 25.896 95.1175 25.7454 95.1207 25.5883C95.124 25.4312 95.1207 25.2611 95.1207 25.1236L95.1565 21.4191C95.1565 21.1114 95.1565 20.8235 95.1565 20.5584C95.1661 20.3465 95.0966 20.1386 94.9616 19.9759C94.8854 19.9037 94.7961 19.8471 94.6987 19.8089C94.5638 19.7546 94.4214 19.7215 94.2766 19.7108C94.2601 19.6652 94.2481 19.618 94.2408 19.5701C94.2375 19.5156 94.2375 19.4609 94.2408 19.4064C94.2376 19.3519 94.2376 19.2973 94.2408 19.2428C94.2481 19.1959 94.26 19.1498 94.2766 19.1053H94.7116C94.9259 19.1053 95.1597 19.1053 95.4065 19.1053H96.0201H96.6208C96.8448 19.1053 97.0559 19.1053 97.2702 19.1053H97.7312C97.7492 19.1493 97.7613 19.1956 97.767 19.2428C97.7718 19.2972 97.7718 19.352 97.767 19.4064C97.772 19.4608 97.772 19.5156 97.767 19.5701C97.7612 19.6183 97.7492 19.6657 97.7312 19.7108C97.4756 19.7174 97.2296 19.8108 97.0332 19.9759C96.8994 20.1391 96.831 20.3469 96.8416 20.5584C96.8416 20.8235 96.8416 21.1114 96.8416 21.4191V22.751H99.9878V21.4191C99.9878 21.1114 99.9878 20.8235 99.9878 20.5584C99.9981 20.3396 99.9222 20.1255 99.7768 19.9628C99.7 19.8913 99.6109 19.8347 99.5138 19.7959C99.3789 19.7416 99.2365 19.7084 99.0917 19.6977C99.0737 19.6526 99.0617 19.6052 99.056 19.557C99.0509 19.5025 99.0509 19.4478 99.056 19.3933C99.0511 19.3389 99.0511 19.2841 99.056 19.2297C99.0617 19.1825 99.0737 19.1362 99.0917 19.0923H99.5235C99.7411 19.0923 99.9716 19.0923 100.222 19.0923H100.835H101.436C101.66 19.0923 101.871 19.0923 102.085 19.0923H102.566C102.582 19.1367 102.594 19.1828 102.602 19.2297C102.605 19.2885 102.605 19.3476 102.602 19.4064Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M109.579 27.5584H109.147H108.618H108.073H105.199C104.965 27.5584 104.725 27.5584 104.478 27.5584C104.232 27.5584 104.007 27.5584 103.829 27.5584H103.576C103.558 27.5128 103.545 27.4657 103.537 27.4177C103.524 27.309 103.524 27.1991 103.537 27.0904C103.545 27.0434 103.558 26.9973 103.576 26.953C103.831 26.9468 104.076 26.852 104.27 26.6846C104.336 26.6103 104.384 26.5219 104.41 26.4261C104.447 26.2991 104.471 26.1686 104.482 26.0367C104.482 25.896 104.501 25.7454 104.504 25.5883C104.508 25.4312 104.504 25.2611 104.504 25.1236L104.55 21.4191C104.55 21.2652 104.55 21.1114 104.55 20.9576C104.55 20.8038 104.53 20.6598 104.517 20.5289C104.503 20.4122 104.482 20.2964 104.456 20.182C104.442 20.1057 104.408 20.0345 104.358 19.9759C104.282 19.9037 104.193 19.8471 104.095 19.8089C103.961 19.755 103.82 19.7219 103.676 19.7108C103.659 19.6653 103.646 19.6182 103.637 19.57C103.634 19.5156 103.634 19.4609 103.637 19.4064C103.634 19.3519 103.634 19.2973 103.637 19.2428C103.646 19.1957 103.659 19.1497 103.676 19.1053H104.108C104.245 19.1053 104.433 19.1053 104.647 19.1053H105.296H108.771H109.18H109.54H109.774L109.81 20.9118C109.763 20.9284 109.715 20.9405 109.667 20.9478H109.498C109.4 20.9525 109.301 20.9369 109.209 20.902C109.173 20.7318 109.11 20.5683 109.024 20.4176C108.951 20.3 108.849 20.2031 108.728 20.1362C108.597 20.0693 108.453 20.0283 108.306 20.0151C108.147 20.0151 107.962 19.9922 107.754 19.9922H107.459H107.06H106.624C106.482 19.9922 106.352 19.9922 106.241 19.9922C106.251 20.1459 106.251 20.3 106.241 20.4536C106.241 20.6304 106.241 20.8496 106.241 21.1082V22.7183C106.328 22.7183 106.416 22.7183 106.504 22.7183H107.056C107.219 22.7193 107.382 22.7094 107.543 22.6888C107.682 22.6721 107.816 22.6264 107.936 22.5546C108.05 22.4822 108.147 22.3849 108.219 22.2699C108.303 22.1243 108.361 21.9647 108.391 21.7987C108.438 21.7817 108.487 21.7696 108.537 21.7627C108.592 21.7594 108.647 21.7594 108.702 21.7627C108.801 21.7566 108.9 21.7734 108.991 21.8118V22.0179C108.991 22.1063 108.991 22.2372 108.991 22.4041C108.991 22.571 108.972 22.823 108.972 23.1437C108.972 23.4644 108.972 23.7491 108.991 23.9422C109.011 24.1353 108.991 24.2695 108.991 24.3186V24.5444C108.946 24.5629 108.898 24.575 108.849 24.5804C108.792 24.5851 108.736 24.5851 108.68 24.5804C108.581 24.5864 108.482 24.5696 108.391 24.5313C108.364 24.3626 108.305 24.2005 108.219 24.0535C108.147 23.9424 108.05 23.8504 107.936 23.7851C107.813 23.7235 107.68 23.6826 107.543 23.6641C107.382 23.6435 107.219 23.6336 107.056 23.6346H106.644C106.495 23.6346 106.358 23.6346 106.228 23.6542V25.3233C106.228 25.4836 106.228 25.6505 106.228 25.7847C106.231 25.916 106.24 26.0472 106.258 26.1774C106.259 26.2592 106.289 26.338 106.342 26.3999C106.405 26.4528 106.479 26.4888 106.56 26.5047C106.674 26.5348 106.79 26.5567 106.907 26.5701C107.034 26.5701 107.163 26.5996 107.293 26.6061C107.423 26.6127 107.527 26.6061 107.618 26.6061C107.842 26.6061 108.04 26.6061 108.215 26.5897C108.373 26.5798 108.527 26.5398 108.67 26.4719C108.807 26.4057 108.927 26.3069 109.017 26.1839C109.138 26.0168 109.233 25.8326 109.3 25.6374C109.349 25.6186 109.4 25.6065 109.453 25.6014C109.51 25.5967 109.567 25.5967 109.625 25.6014C109.723 25.5954 109.822 25.6122 109.914 25.6505L109.579 27.5584Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M114.372 23.7197C114.372 23.9135 114.34 24.106 114.277 24.2891C114.212 24.3299 114.143 24.366 114.073 24.3971C113.969 24.4462 113.849 24.492 113.712 24.5411C113.574 24.591 113.433 24.6336 113.29 24.6687C113.161 24.7033 113.028 24.722 112.894 24.7244H110.553C110.537 24.6735 110.529 24.6206 110.527 24.5673V24.3971C110.526 24.203 110.559 24.0102 110.625 23.8277C110.689 23.7856 110.758 23.7495 110.829 23.7197C110.933 23.6695 111.053 23.6204 111.19 23.5724C111.326 23.5244 111.466 23.4819 111.608 23.4448C111.739 23.4113 111.873 23.3937 112.008 23.3924H114.349C114.364 23.4434 114.371 23.4963 114.372 23.5495V23.7197Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M118.554 19.4064C118.559 19.4608 118.559 19.5156 118.554 19.5701C118.548 19.6183 118.536 19.6657 118.518 19.7108C118.263 19.7174 118.018 19.8109 117.823 19.9759C117.688 20.1386 117.618 20.3465 117.628 20.5584C117.628 20.8235 117.628 21.1114 117.628 21.4191L117.592 25.1236C117.592 25.2774 117.592 25.4313 117.592 25.5883C117.592 25.7454 117.592 25.896 117.615 26.0367C117.625 26.1682 117.647 26.2985 117.68 26.4261C117.703 26.5248 117.754 26.6146 117.826 26.6846C117.902 26.7579 117.992 26.8157 118.089 26.8548C118.224 26.9091 118.366 26.9422 118.511 26.953C118.526 26.9979 118.538 27.0439 118.547 27.0904C118.56 27.1991 118.56 27.309 118.547 27.4177C118.538 27.4653 118.526 27.5123 118.511 27.5584H118.076C117.862 27.5584 117.622 27.5584 117.362 27.5584C117.102 27.5584 116.891 27.5584 116.732 27.5584C116.573 27.5584 116.349 27.5584 116.115 27.5584C115.881 27.5584 115.657 27.5584 115.466 27.5584H114.985C114.968 27.5132 114.956 27.4659 114.949 27.4177C114.932 27.3093 114.932 27.1988 114.949 27.0904C114.955 27.0432 114.967 26.997 114.985 26.953C115.241 26.9468 115.486 26.852 115.68 26.6846C115.747 26.6114 115.795 26.5226 115.82 26.4261C115.856 26.2991 115.88 26.1686 115.891 26.0367C115.891 25.896 115.911 25.7454 115.917 25.5883C115.924 25.4313 115.917 25.2611 115.917 25.1236L115.956 21.4191C115.956 21.1114 115.956 20.8235 115.956 20.5584C115.967 20.3469 115.898 20.1391 115.764 19.9759C115.687 19.9037 115.597 19.8471 115.498 19.809C115.364 19.7546 115.223 19.7215 115.079 19.7108C115.061 19.6657 115.049 19.6183 115.044 19.5701C115.039 19.5156 115.039 19.4608 115.044 19.4064C115.039 19.352 115.039 19.2972 115.044 19.2428C115.049 19.1956 115.061 19.1493 115.079 19.1053H115.511C115.725 19.1053 115.959 19.1053 116.209 19.1053H116.82H117.42C117.644 19.1053 117.859 19.1053 118.07 19.1053H118.511C118.529 19.1493 118.541 19.1956 118.547 19.2428C118.554 19.297 118.556 19.3518 118.554 19.4064ZM123.057 19.3835C123.06 19.4446 123.06 19.5057 123.057 19.5668C123.05 19.6159 123.038 19.6642 123.021 19.7108C122.832 19.701 122.643 19.7254 122.463 19.7828C122.296 19.8391 122.141 19.9256 122.005 20.038C121.858 20.1575 121.723 20.2912 121.602 20.4373C121.476 20.5911 121.343 20.7645 121.206 20.9347L119.485 23.1732L120.589 24.7473L121.024 25.3527C121.167 25.5556 121.3 25.7421 121.427 25.909L121.752 26.3476C121.815 26.4342 121.886 26.5152 121.963 26.5897C122.088 26.725 122.246 26.8263 122.421 26.8843C122.6 26.9337 122.786 26.9568 122.973 26.953C122.991 26.9991 123.003 27.0476 123.008 27.097C123.011 27.1537 123.011 27.2105 123.008 27.2672C123.013 27.3667 122.997 27.4661 122.96 27.5584L122.576 27.5748H122.252H121.927H121.563C121.271 27.5833 120.979 27.5502 120.696 27.4766C120.492 27.4148 120.307 27.3023 120.157 27.1494C120.067 27.0533 119.982 26.9517 119.904 26.845C119.8 26.7076 119.687 26.5505 119.56 26.3672L119.164 25.7814C119.024 25.572 118.888 25.3625 118.752 25.1498C118.429 24.6589 118.084 24.1222 117.716 23.5397L119.485 21.2129C119.557 21.1082 119.635 20.9969 119.719 20.8856C119.804 20.7744 119.881 20.6631 119.953 20.5584C120.021 20.4637 120.081 20.3642 120.135 20.2606C120.175 20.193 120.2 20.1168 120.206 20.038C120.209 19.9815 120.192 19.9258 120.157 19.8809C120.125 19.8397 120.084 19.8062 120.037 19.7828C119.986 19.7579 119.931 19.7392 119.875 19.7271C119.818 19.717 119.761 19.7115 119.703 19.7108C119.675 19.6163 119.663 19.5179 119.667 19.4195C119.659 19.3084 119.675 19.1969 119.713 19.0923H120.037H120.3H120.722C120.875 19.0923 121.021 19.0923 121.167 19.0923H121.817C121.927 19.0923 122.041 19.0923 122.141 19.0923H122.466H122.674H123.034C123.057 19.1876 123.064 19.2858 123.057 19.3835Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M131.973 19.4064C131.978 19.4608 131.978 19.5156 131.973 19.57C131.967 19.6183 131.955 19.6656 131.937 19.7108C131.682 19.7174 131.436 19.8108 131.239 19.9759C131.107 20.1399 131.039 20.3471 131.048 20.5584C131.048 20.8234 131.048 21.1114 131.048 21.4191L131.009 25.1236C131.009 25.2774 131.009 25.4312 131.009 25.5883C131.009 25.7454 131.009 25.896 131.035 26.0367C131.045 26.1682 131.067 26.2985 131.099 26.4261C131.122 26.524 131.172 26.6135 131.242 26.6846C131.32 26.7579 131.41 26.8157 131.509 26.8548C131.642 26.9092 131.784 26.9423 131.927 26.953C131.945 26.9973 131.958 27.0434 131.966 27.0904C131.979 27.1991 131.979 27.309 131.966 27.4177C131.958 27.4657 131.945 27.5128 131.927 27.5584H131.496C131.281 27.5584 131.041 27.5584 130.781 27.5584C130.522 27.5584 130.31 27.5584 130.151 27.5584C129.992 27.5584 129.768 27.5584 129.531 27.5584C129.294 27.5584 129.077 27.5584 128.882 27.5584H128.382C128.364 27.5132 128.352 27.4659 128.346 27.4177C128.329 27.3093 128.329 27.1988 128.346 27.0904C128.352 27.0432 128.364 26.997 128.382 26.953C128.637 26.9468 128.883 26.852 129.077 26.6846C129.142 26.6103 129.19 26.5219 129.216 26.4261C129.253 26.2991 129.277 26.1686 129.288 26.0367C129.288 25.896 129.307 25.7454 129.31 25.5883C129.314 25.4312 129.31 25.2611 129.31 25.1236V23.6575H126.164V25.1236C126.164 25.2774 126.164 25.4312 126.164 25.5883C126.164 25.7454 126.164 25.896 126.187 26.0367C126.199 26.1679 126.221 26.2981 126.252 26.4261C126.275 26.5248 126.325 26.6146 126.398 26.6846C126.475 26.7572 126.564 26.8149 126.661 26.8548C126.796 26.9091 126.938 26.9422 127.083 26.953C127.1 26.9975 127.112 27.0435 127.119 27.0904C127.132 27.1991 127.132 27.309 127.119 27.4177C127.111 27.4656 127.099 27.5127 127.083 27.5584H126.661C126.447 27.5584 126.21 27.5584 125.947 27.5584C125.684 27.5584 125.476 27.5584 125.317 27.5584C125.158 27.5584 124.934 27.5584 124.7 27.5584C124.466 27.5584 124.242 27.5584 124.05 27.5584H123.57C123.552 27.5132 123.54 27.4659 123.534 27.4177C123.517 27.3093 123.517 27.1988 123.534 27.0904C123.54 27.0432 123.552 26.997 123.57 26.953C123.826 26.9467 124.073 26.852 124.268 26.6846C124.333 26.6104 124.38 26.5218 124.404 26.4261C124.443 26.2994 124.467 26.1688 124.476 26.0367C124.476 25.896 124.495 25.7454 124.502 25.5883C124.508 25.4312 124.502 25.2611 124.502 25.1236L124.538 21.4191C124.538 21.1114 124.538 20.8234 124.538 20.5584C124.548 20.3469 124.48 20.1391 124.346 19.9759C124.269 19.9037 124.178 19.8471 124.08 19.8089C123.946 19.7543 123.805 19.7211 123.661 19.7108C123.643 19.6656 123.631 19.6183 123.625 19.57C123.62 19.5156 123.62 19.4608 123.625 19.4064C123.62 19.352 123.62 19.2972 123.625 19.2428C123.631 19.1956 123.643 19.1493 123.661 19.1053H124.093C124.31 19.1053 124.541 19.1053 124.791 19.1053H125.401H126.002C126.226 19.1053 126.44 19.1053 126.651 19.1053H127.132C127.15 19.1493 127.162 19.1956 127.168 19.2428C127.172 19.2972 127.172 19.352 127.168 19.4064C127.173 19.4608 127.173 19.5156 127.168 19.57C127.162 19.6183 127.15 19.6656 127.132 19.7108C126.877 19.7174 126.632 19.8108 126.437 19.9759C126.302 20.1383 126.233 20.3467 126.245 20.5584C126.245 20.8234 126.245 21.1114 126.245 21.4191V22.751H129.395V21.4191C129.395 21.1114 129.395 20.8234 129.395 20.5584C129.405 20.3465 129.335 20.1386 129.2 19.9759C129.124 19.903 129.035 19.8462 128.937 19.8089C128.802 19.7546 128.66 19.7215 128.515 19.7108C128.5 19.6647 128.488 19.6177 128.479 19.57C128.476 19.5156 128.476 19.4609 128.479 19.4064C128.476 19.3519 128.476 19.2973 128.479 19.2428C128.488 19.1962 128.5 19.1503 128.515 19.1053H128.901C129.116 19.1053 129.349 19.1053 129.596 19.1053H130.21H130.811C131.035 19.1053 131.246 19.1053 131.46 19.1053H131.94C131.958 19.1493 131.97 19.1956 131.976 19.2428C131.98 19.2973 131.979 19.3521 131.973 19.4064Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M141.33 27.2541C141.335 27.3063 141.335 27.3589 141.33 27.4112C141.325 27.4616 141.313 27.511 141.295 27.5584H140.947H140.691C140.58 27.5584 140.463 27.5584 140.334 27.5584H139.944H139.59H139.194H138.713C138.554 27.5584 138.408 27.5584 138.275 27.5584H137.993H137.645C137.627 27.509 137.615 27.4573 137.609 27.4046C137.605 27.3545 137.605 27.3042 137.609 27.2541C137.606 27.2018 137.606 27.1493 137.609 27.097C137.611 27.0477 137.621 26.9991 137.639 26.953C137.71 26.953 137.795 26.9366 137.892 26.9039C137.986 26.8788 138.078 26.8482 138.168 26.8123C138.25 26.7809 138.325 26.7331 138.389 26.6716C138.417 26.6481 138.44 26.6186 138.456 26.5852C138.471 26.5518 138.479 26.5154 138.48 26.4785C138.47 26.2895 138.436 26.1026 138.379 25.9221C138.308 25.6898 138.22 25.3887 138.106 25.0254L137.937 24.5051H135.249L135.057 25.0516C134.921 25.4313 134.817 25.7454 134.749 25.9941C134.695 26.1674 134.661 26.3464 134.648 26.5276C134.65 26.5622 134.659 26.5959 134.677 26.6256C134.695 26.6554 134.719 26.6802 134.749 26.6977C134.822 26.7493 134.9 26.7922 134.983 26.8254C135.07 26.8596 135.158 26.8881 135.249 26.9105L135.454 26.953C135.47 27.0016 135.48 27.0522 135.483 27.1035C135.483 27.1624 135.483 27.2148 135.483 27.2541C135.483 27.2933 135.483 27.3555 135.483 27.4112C135.479 27.4613 135.469 27.5107 135.454 27.5584H135.152H134.882C134.749 27.5584 134.606 27.5584 134.45 27.5584H133.992H133.639C133.431 27.5584 133.233 27.5584 133.044 27.5584H132.606H132.304C132.285 27.509 132.273 27.4573 132.268 27.4046C132.268 27.3457 132.268 27.2933 132.268 27.2541C132.265 27.2018 132.265 27.1493 132.268 27.097C132.274 27.0476 132.286 26.9991 132.304 26.953L132.629 26.8712C132.777 26.8367 132.913 26.7594 133.018 26.6487C133.098 26.5545 133.167 26.4513 133.223 26.341C133.312 26.1839 133.399 26.0138 133.486 25.8305C133.577 25.6505 133.658 25.4771 133.733 25.3167C133.789 25.2027 133.84 25.0858 133.885 24.9665L136.249 19.0333L137.609 18.8632L139.843 25.0385C139.98 25.4247 140.103 25.7454 140.217 25.9941C140.316 26.2291 140.458 26.4433 140.636 26.6257C140.729 26.7183 140.839 26.7917 140.96 26.8417C141.064 26.8913 141.173 26.9286 141.285 26.953C141.304 27.0012 141.316 27.0519 141.321 27.1035C141.328 27.1534 141.331 27.2037 141.33 27.2541ZM136.947 21.5401C136.876 21.3361 136.82 21.1272 136.778 20.9151C136.739 20.7089 136.7 20.542 136.671 20.4144C136.639 20.542 136.593 20.7089 136.532 20.9151C136.47 21.1213 136.398 21.3372 136.311 21.5696L135.564 23.6051H137.619L136.947 21.5401Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M149.526 27.2541C149.529 27.3086 149.529 27.3632 149.526 27.4177C149.518 27.4656 149.506 27.5127 149.49 27.5584L148.84 27.5748H148.094C147.873 27.5845 147.653 27.5535 147.444 27.4832C147.265 27.4098 147.103 27.2981 146.97 27.1559C146.908 27.0953 146.853 27.0271 146.808 26.953C146.733 26.8385 146.646 26.6977 146.545 26.5276L146.22 25.9712L145.86 25.3527C145.581 24.8618 145.266 24.3153 144.921 23.7164C144.923 23.6148 144.947 23.5149 144.994 23.4246C145.04 23.3342 145.106 23.256 145.188 23.1961C145.421 23.1429 145.649 23.0651 145.866 22.9637C146.061 22.8743 146.239 22.7539 146.396 22.607C146.551 22.4644 146.675 22.2905 146.759 22.0965C146.848 21.8695 146.891 21.627 146.886 21.3831C146.899 21.187 146.871 20.9904 146.803 20.8063C146.734 20.6223 146.628 20.4552 146.49 20.3162C146.352 20.1773 146.186 20.0698 146.003 20.0009C145.821 19.932 145.626 19.9034 145.431 19.9169C145.383 19.9169 145.311 19.9169 145.21 19.9169H144.905C144.798 19.9169 144.701 19.9169 144.603 19.9366H144.399C144.399 20.0904 144.399 20.2638 144.399 20.4078C144.399 20.5518 144.399 20.6991 144.399 20.8693V21.3536L144.36 25.0942C144.36 25.248 144.36 25.4018 144.36 25.5589C144.36 25.716 144.36 25.8665 144.386 26.0072C144.396 26.1387 144.418 26.269 144.451 26.3967C144.473 26.4953 144.524 26.5852 144.597 26.6552C144.658 26.719 144.725 26.776 144.798 26.8254C144.909 26.8851 145.033 26.9187 145.158 26.9235C145.176 26.9675 145.188 27.0138 145.194 27.061C145.212 27.1694 145.212 27.2799 145.194 27.3883C145.188 27.4365 145.176 27.4837 145.158 27.529H144.834C144.619 27.529 144.379 27.529 144.119 27.529C143.86 27.529 143.649 27.529 143.49 27.529C143.33 27.529 143.106 27.529 142.869 27.529C142.632 27.529 142.415 27.529 142.22 27.529H141.74C141.722 27.4837 141.71 27.4365 141.704 27.3883C141.686 27.2799 141.686 27.1694 141.704 27.061C141.709 27.0138 141.722 26.9675 141.74 26.9235C141.995 26.9173 142.24 26.8225 142.434 26.6552C142.5 26.5808 142.547 26.4924 142.574 26.3967C142.611 26.2696 142.635 26.1391 142.645 26.0072C142.645 25.8665 142.665 25.716 142.668 25.5589C142.671 25.4018 142.668 25.2316 142.668 25.0942L142.694 21.3896C142.694 21.082 142.694 20.794 142.694 20.5289C142.693 20.3192 142.614 20.1174 142.473 19.9628C142.397 19.8921 142.309 19.8355 142.214 19.7959C142.082 19.7411 141.943 19.7079 141.801 19.6977C141.784 19.6522 141.77 19.6051 141.762 19.557C141.759 19.5025 141.759 19.4478 141.762 19.3933C141.759 19.2898 141.779 19.1869 141.821 19.0923H142.47L143.347 19.0693L144.363 19.0432L145.337 19.0203H146.038C146.382 19.0177 146.726 19.0551 147.061 19.1315C147.364 19.1957 147.652 19.3191 147.909 19.4948C148.153 19.6612 148.353 19.8861 148.49 20.1493C148.644 20.4609 148.718 20.8061 148.707 21.154C148.711 21.4317 148.66 21.7074 148.558 21.9656C148.459 22.2128 148.318 22.4409 148.142 22.6397C147.963 22.8395 147.752 23.0086 147.519 23.1404C147.278 23.2831 147.019 23.3931 146.749 23.4677C147.074 24.024 147.376 24.5313 147.649 24.9829L148.006 25.5556C148.12 25.7454 148.227 25.9221 148.331 26.0825C148.435 26.2428 148.519 26.3836 148.597 26.4948C148.645 26.575 148.703 26.6487 148.769 26.7141C148.841 26.7931 148.928 26.8566 149.025 26.9004C149.123 26.9443 149.228 26.9678 149.334 26.9694H149.516C149.532 27.0138 149.544 27.0599 149.552 27.1068C149.546 27.1564 149.537 27.2055 149.526 27.2541Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M153.646 19.4064C153.649 19.4609 153.649 19.5156 153.646 19.57C153.639 19.618 153.627 19.6652 153.61 19.7108C153.354 19.7174 153.109 19.8108 152.912 19.9759C152.777 20.1383 152.708 20.3467 152.72 20.5584C152.72 20.8234 152.72 21.1114 152.72 21.4191L152.685 25.1236C152.685 25.2774 152.685 25.4312 152.685 25.5883C152.685 25.7454 152.685 25.896 152.707 26.0367C152.719 26.1683 152.742 26.2986 152.776 26.4261C152.797 26.5245 152.847 26.6143 152.919 26.6846C152.996 26.7579 153.086 26.8157 153.185 26.8548C153.318 26.9095 153.46 26.9426 153.604 26.953C153.622 26.997 153.634 27.0432 153.639 27.0904C153.657 27.1988 153.657 27.3093 153.639 27.4177C153.633 27.4659 153.621 27.5132 153.604 27.5584H153.172C152.954 27.5584 152.717 27.5584 152.457 27.5584C152.198 27.5584 151.987 27.5584 151.828 27.5584C151.668 27.5584 151.444 27.5584 151.207 27.5584C150.97 27.5584 150.753 27.5584 150.558 27.5584H150.078C150.061 27.5127 150.049 27.4656 150.042 27.4177C150.025 27.3093 150.025 27.1988 150.042 27.0904C150.049 27.0435 150.061 26.9975 150.078 26.953C150.334 26.9467 150.58 26.852 150.776 26.6846C150.84 26.6098 150.888 26.5216 150.915 26.4261C150.95 26.2987 150.974 26.1684 150.987 26.0367C150.987 25.896 151.006 25.7454 151.009 25.5883C151.013 25.4312 151.009 25.2611 151.009 25.1236L151.045 21.4191C151.045 21.1114 151.045 20.8234 151.045 20.5584C151.057 20.3467 150.989 20.1383 150.854 19.9759C150.777 19.9044 150.688 19.8478 150.591 19.8089C150.456 19.7546 150.313 19.7215 150.168 19.7108C150.152 19.6652 150.14 19.618 150.133 19.57C150.129 19.5156 150.129 19.4609 150.133 19.4064C150.129 19.3519 150.129 19.2973 150.133 19.2428C150.14 19.1959 150.152 19.1498 150.168 19.1053H150.6C150.818 19.1053 151.052 19.1053 151.298 19.1053H151.912H152.513C152.737 19.1053 152.948 19.1053 153.162 19.1053H153.643C153.659 19.1498 153.671 19.1959 153.678 19.2428C153.671 19.2979 153.66 19.3526 153.646 19.4064Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M160 25.2447C160.02 25.6633 159.906 26.0773 159.675 26.4261C159.445 26.7427 159.149 27.0051 158.808 27.1952C158.455 27.3901 158.074 27.5302 157.678 27.6108C157.306 27.6924 156.926 27.7352 156.545 27.7384C156.383 27.7384 156.221 27.7384 156.016 27.7221L155.464 27.6795L155 27.6304L154.73 27.5944L154.672 25.788C154.718 25.7705 154.766 25.7585 154.815 25.752C154.871 25.7486 154.927 25.7486 154.984 25.752C155.081 25.7471 155.178 25.7628 155.269 25.7978C155.447 26.4697 155.948 26.8046 156.773 26.8025C156.955 26.8008 157.137 26.7865 157.318 26.7599C157.488 26.7419 157.655 26.708 157.818 26.6585C157.962 26.483 158.072 26.2821 158.143 26.0661C158.218 25.856 158.258 25.6349 158.263 25.4116C158.279 25.121 158.186 24.835 158.003 24.6098C157.82 24.4068 157.599 24.2413 157.354 24.1222C157.079 23.9821 156.797 23.8565 156.51 23.7459C156.21 23.6307 155.926 23.4802 155.662 23.2975C155.36 23.0941 155.117 22.8137 154.957 22.485C154.798 22.1562 154.727 21.7907 154.753 21.4256C154.736 20.998 154.849 20.5753 155.078 20.2148C155.295 19.8974 155.58 19.6334 155.912 19.4424C156.251 19.2458 156.621 19.1086 157.006 19.0366C157.37 18.9611 157.739 18.9217 158.11 18.9188C158.273 18.9188 158.435 18.9188 158.64 18.9384L159.185 18.981L159.643 19.0301C159.776 19.0464 159.864 19.0563 159.912 19.0661L159.948 20.8202C159.902 20.8387 159.854 20.8508 159.805 20.8562C159.749 20.8611 159.693 20.8611 159.636 20.8562C159.538 20.8614 159.439 20.8447 159.347 20.8071C159.255 20.5152 159.065 20.265 158.808 20.1002C158.526 19.9267 158.2 19.8403 157.87 19.8515C157.695 19.8529 157.52 19.8671 157.347 19.894C157.187 19.9153 157.028 19.9492 156.873 19.9955C156.756 20.1626 156.665 20.3469 156.604 20.542C156.539 20.7372 156.505 20.9415 156.503 21.1474C156.486 21.4297 156.578 21.7077 156.76 21.923C156.946 22.1182 157.166 22.2778 157.409 22.3943C157.669 22.5252 157.951 22.6496 158.256 22.7706C158.555 22.8952 158.838 23.0568 159.097 23.2517C159.366 23.4515 159.588 23.7085 159.747 24.0044C159.934 24.3897 160.021 24.8164 160 25.2447Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M89.5426 38.9241C89.5472 38.9567 89.5472 38.9897 89.5426 39.0223C89.3965 39.0583 89.2504 39.0845 89.1075 39.1074C88.9633 39.1271 88.818 39.1369 88.6724 39.1368C88.4671 39.1376 88.2672 39.0697 88.1042 38.9437C87.9375 38.8158 87.7821 38.6735 87.6399 38.5183C87.4112 38.7209 87.1469 38.8785 86.8607 38.983C86.5791 39.0837 86.2827 39.1357 85.984 39.1368C85.6941 39.1406 85.4052 39.1009 85.1268 39.019C84.8887 38.9472 84.6677 38.8269 84.4775 38.6656C84.2971 38.5061 84.154 38.3082 84.0586 38.0863C83.9557 37.8343 83.9048 37.5637 83.9092 37.2911C83.9077 37.1038 83.95 36.9188 84.0326 36.7511C84.1191 36.5809 84.2283 36.4234 84.3573 36.2831C84.4964 36.1304 84.6485 35.9902 84.8119 35.8642C84.984 35.7301 85.1528 35.6024 85.3216 35.4781C85.1654 35.2221 85.0297 34.954 84.9158 34.6763C84.8232 34.47 84.7704 34.2479 84.7599 34.0218C84.7592 33.8399 84.8074 33.6611 84.8996 33.5047C84.9941 33.348 85.1202 33.2131 85.2697 33.1087C85.4244 32.9969 85.5952 32.9097 85.7762 32.8502C85.9574 32.7898 86.147 32.7589 86.3379 32.7586C86.4929 32.7582 86.6475 32.7746 86.799 32.8077C86.9403 32.8374 87.0748 32.8941 87.1951 32.9746C87.3121 33.0594 87.4069 33.1717 87.4711 33.3018C87.5443 33.4523 87.5799 33.6186 87.575 33.7862C87.5758 33.9535 87.5333 34.1182 87.4516 34.264C87.3656 34.4188 87.2561 34.559 87.1269 34.6796C86.981 34.8167 86.8259 34.9436 86.6626 35.0592L86.1399 35.4323C86.247 35.5959 86.3671 35.7595 86.5035 35.9624C86.6399 36.1653 86.786 36.3388 86.9353 36.5319C87.0847 36.7249 87.2308 36.9115 87.3802 37.098L87.8055 37.6151C87.915 37.3894 87.9999 37.1523 88.0588 36.9082C88.1176 36.6948 88.1503 36.475 88.1562 36.2537C88.1671 36.1704 88.1487 36.0859 88.1042 36.0148C88.0425 35.9512 87.9669 35.9031 87.8834 35.8741C87.8109 35.8456 87.734 35.8301 87.6562 35.8282C87.645 35.8083 87.6394 35.7857 87.6399 35.7628V35.6712C87.6409 35.6271 87.6464 35.5832 87.6562 35.5403H87.9646C87.9948 35.5436 88.0253 35.5436 88.0555 35.5403H88.1464C88.2048 35.5437 88.2634 35.5437 88.3218 35.5403H88.5166C88.6497 35.5403 88.7828 35.5403 88.9094 35.5403H89.2699H89.5166C89.5382 35.6295 89.5382 35.7227 89.5166 35.8119H89.3932C89.3341 35.8229 89.2756 35.8371 89.2179 35.8544C89.1545 35.8708 89.0925 35.8927 89.0328 35.9199C88.9811 35.9414 88.9337 35.9725 88.8932 36.0115C88.8342 36.0882 88.7941 36.1779 88.7763 36.2733L88.6335 36.7511C88.5783 36.9344 88.5101 37.1373 88.4289 37.35C88.3479 37.5655 88.2445 37.7717 88.1205 37.9652L88.3575 38.2303C88.4446 38.3237 88.5368 38.4122 88.6335 38.4954C88.7243 38.5737 88.8234 38.6417 88.9289 38.6983C89.0142 38.7472 89.1101 38.7742 89.2082 38.7768H89.3348C89.3897 38.777 89.4444 38.7693 89.4971 38.7539C89.5184 38.7764 89.532 38.805 89.5361 38.8358C89.5422 38.8648 89.5444 38.8945 89.5426 38.9241ZM87.3412 38.2009C87.2113 38.0536 87.0717 37.8736 86.9159 37.6969C86.76 37.5202 86.5912 37.3107 86.4418 37.1046C86.2925 36.8984 86.1171 36.6889 85.9678 36.4729C85.8184 36.257 85.6756 36.0541 85.5522 35.8577C85.3224 36.0082 85.122 36.2002 84.9612 36.4239C84.8032 36.6673 84.7248 36.9546 84.7372 37.2453C84.7374 37.4183 84.7716 37.5896 84.8379 37.7493C84.9037 37.9136 85.002 38.0628 85.1268 38.1878C85.2594 38.3193 85.416 38.4237 85.5879 38.4954C85.7816 38.579 85.9908 38.6203 86.2015 38.6165C86.4168 38.6183 86.6304 38.5794 86.8314 38.5019C87.0164 38.43 87.1885 38.3283 87.3412 38.2009ZM86.9289 33.8254C86.9324 33.7374 86.9175 33.6497 86.885 33.5679C86.8526 33.4861 86.8033 33.4122 86.7405 33.3509C86.6743 33.288 86.5962 33.239 86.5109 33.207C86.4255 33.1749 86.3347 33.1605 86.2438 33.1644C86.181 33.1606 86.1182 33.1606 86.0554 33.1644L85.8671 33.1938C85.7392 33.2596 85.6331 33.3614 85.5616 33.4869C85.4901 33.6125 85.4564 33.7562 85.4645 33.9007C85.4734 34.074 85.5153 34.244 85.5879 34.4014C85.6807 34.627 85.7892 34.8457 85.9126 35.0559C86.1671 34.8758 86.4071 34.6755 86.6301 34.457C86.7207 34.3782 86.7943 34.2815 86.8462 34.1728C86.8981 34.0642 86.9274 33.9459 86.9321 33.8254H86.9289Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M97.1013 34.3032C97.1117 34.6218 97.0144 34.9345 96.8254 35.1901C96.6369 35.4334 96.3988 35.6331 96.1273 35.7759C95.8352 35.93 95.5224 36.0403 95.1987 36.1031C94.8778 36.1682 94.5518 36.2043 94.2246 36.2111V37.422C94.2246 37.5889 94.2246 37.7493 94.2246 37.8998C94.2246 38.0503 94.2246 38.1878 94.2473 38.3056C94.2473 38.3797 94.2652 38.4527 94.2993 38.5183C94.3639 38.5777 94.4419 38.6204 94.5266 38.6427C94.6261 38.6732 94.7463 38.7027 94.887 38.731C94.8978 38.7739 94.9044 38.8178 94.9064 38.8619C94.9079 38.8826 94.9079 38.9034 94.9064 38.9241C94.9064 38.947 94.9064 38.9765 94.9064 39.0059H94.6629H94.2701H93.8447H93.4259H93.0395H92.7927C92.7927 38.9765 92.7927 38.947 92.7927 38.9241C92.7912 38.9034 92.7912 38.8826 92.7927 38.8619C92.7897 38.8184 92.7897 38.7746 92.7927 38.731C92.9221 38.7067 93.05 38.675 93.1759 38.6361C93.2585 38.6147 93.3352 38.5744 93.3999 38.5183C93.4268 38.4553 93.44 38.3873 93.4389 38.3187C93.4389 38.2041 93.4551 38.07 93.4648 37.9129C93.4746 37.7558 93.4648 37.5856 93.4811 37.4285C93.4973 37.2715 93.4811 37.1013 93.4811 36.99V34.4898V34.1167C93.4811 33.9956 93.4811 33.8811 93.4811 33.7894C93.4798 33.6996 93.4722 33.6099 93.4583 33.5211C93.4561 33.4719 93.4404 33.4243 93.4129 33.3836C93.3494 33.3268 93.2739 33.2854 93.1921 33.2625C93.0882 33.2331 92.9616 33.2004 92.809 33.1709C92.8005 33.1277 92.7951 33.084 92.7927 33.04C92.7912 33.0193 92.7912 32.9985 92.7927 32.9778C92.7927 32.9549 92.7927 32.9255 92.7927 32.896H93.3187L93.77 32.8731L94.2603 32.8469L94.7441 32.824H95.1694C95.4091 32.8225 95.6483 32.8444 95.8838 32.8895C96.1009 32.9276 96.3084 33.0088 96.4942 33.1284C96.6713 33.2455 96.8156 33.4067 96.913 33.5964C97.0313 33.8133 97.0959 34.0558 97.1013 34.3032ZM96.2604 34.4374C96.2752 34.2602 96.2479 34.0819 96.1807 33.9174C96.1135 33.7529 96.0084 33.607 95.874 33.4916C95.5913 33.2855 95.2487 33.1796 94.9 33.1905H94.7279H94.5298H94.3025C94.3025 33.2462 94.3025 33.3182 94.3025 33.4131C94.3025 33.508 94.3025 33.6127 94.3025 33.7403C94.3025 33.868 94.3025 33.976 94.3025 34.1003C94.3025 34.2247 94.3025 34.3458 94.3025 34.4505L94.2863 35.7137H94.5493H94.8123C94.9454 35.7137 95.072 35.7137 95.1889 35.7137C95.2866 35.7071 95.3834 35.6906 95.4779 35.6646C95.7186 35.5667 95.9253 35.3994 96.0721 35.1836C96.2057 34.9586 96.2711 34.6993 96.2604 34.4374Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M103.218 38.8619C103.222 38.8869 103.222 38.9122 103.218 38.9372C103.218 38.9634 103.212 38.9863 103.199 39.0059H102.926H102.602C102.465 39.0059 102.319 39.0059 102.166 39.0059H101.916H101.423H101.257H101.011C100.999 38.9589 100.993 38.9104 100.994 38.8619C100.994 38.8177 100.999 38.7737 101.011 38.731L101.157 38.7048C101.221 38.6916 101.283 38.6741 101.345 38.6525C101.403 38.6301 101.459 38.6016 101.511 38.5674C101.532 38.5548 101.549 38.5372 101.562 38.516C101.574 38.4949 101.581 38.4709 101.582 38.4463C101.567 38.3109 101.535 38.1779 101.488 38.0503C101.426 37.8572 101.335 37.5627 101.212 37.1765L100.975 36.4435H98.9066L98.7053 36.9802C98.6533 37.1176 98.6014 37.2584 98.5527 37.4089C98.504 37.5594 98.4553 37.7034 98.4163 37.8409C98.3774 37.9783 98.3416 38.106 98.3189 38.214C98.3007 38.2881 98.2887 38.3636 98.2832 38.4398C98.2849 38.4646 98.2923 38.4887 98.3046 38.5103C98.317 38.5318 98.3341 38.5502 98.3546 38.5641C98.4062 38.6001 98.4617 38.6298 98.5202 38.6525C98.5818 38.6741 98.6447 38.6916 98.7085 38.7048L98.8546 38.731C98.8644 38.774 98.8699 38.8179 98.8709 38.8619C98.8703 38.9104 98.8648 38.9586 98.8546 39.0059H98.6339H98.4813H98.0267H97.8124C97.6598 39.0059 97.5299 39.0059 97.426 39.0059H97.1533H96.9422C96.9303 38.9875 96.9246 38.9657 96.926 38.9437V38.8619C96.927 38.8179 96.9325 38.774 96.9422 38.731L97.1825 38.6787C97.291 38.6539 97.3902 38.5982 97.4682 38.5183C97.5353 38.4351 97.59 38.3425 97.6306 38.2434C97.6988 38.1027 97.7669 37.9489 97.8416 37.7853C97.9163 37.6216 97.9812 37.458 98.0429 37.3075C98.1046 37.1569 98.1468 37.0456 98.1696 36.9802L99.7475 32.8011L100.433 32.6964L102.072 37.1831C102.096 37.2551 102.132 37.3642 102.179 37.5104C102.231 37.6478 102.287 37.7918 102.348 37.9358C102.41 38.0798 102.472 38.214 102.537 38.3383C102.584 38.4335 102.643 38.5226 102.712 38.6034C102.776 38.6655 102.86 38.7036 102.949 38.7114L103.192 38.7441C103.21 38.7809 103.219 38.8212 103.218 38.8619ZM100.212 34.1887C100.174 34.0814 100.143 33.9722 100.118 33.8614C100.092 33.76 100.072 33.6683 100.056 33.5865C100.029 33.5037 100.012 33.4181 100.004 33.3313C99.9897 33.3686 99.9778 33.4069 99.9683 33.4458C99.9683 33.4883 99.9456 33.5309 99.9326 33.5767C99.9196 33.6225 99.8807 33.7534 99.8482 33.8614C99.8157 33.9694 99.7768 34.0807 99.7313 34.1887L99.0559 36.0344H100.845L100.212 34.1887Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M109.004 38.8718C109.003 38.9176 108.995 38.963 108.978 39.0059H108.842H108.647H108.449H108.303C108.156 39.0096 108.008 38.9942 107.865 38.9601C107.755 38.9279 107.655 38.867 107.576 38.7834C107.486 38.6882 107.401 38.5876 107.323 38.4823C107.212 38.3416 107.089 38.178 106.949 37.9882C106.81 37.7983 106.667 37.602 106.517 37.3925C106.368 37.1831 106.222 36.9835 106.092 36.7904C105.962 36.5973 105.842 36.4271 105.741 36.2733C105.641 36.1195 105.566 36.0082 105.524 35.9461C105.528 35.8922 105.54 35.8393 105.559 35.789C105.581 35.7492 105.609 35.7129 105.641 35.681C105.843 35.6521 106.043 35.6017 106.235 35.5304C106.409 35.4666 106.573 35.3749 106.719 35.2588C106.854 35.1529 106.964 35.019 107.043 34.8661C107.116 34.7085 107.152 34.536 107.147 34.3621C107.153 34.172 107.116 33.983 107.04 33.8091C106.976 33.6667 106.878 33.5429 106.754 33.4491C106.631 33.3537 106.49 33.2856 106.339 33.2495C106.175 33.2067 106.007 33.1858 105.839 33.1873H105.663H105.472H105.287H105.147L105.131 33.5767C105.131 33.6945 105.131 33.832 105.131 33.9891C105.131 34.1461 105.131 34.3163 105.131 34.4799L105.115 36.954C105.115 36.9933 105.115 37.0915 105.115 37.2453C105.115 37.3991 105.115 37.5725 105.115 37.7362C105.115 37.8998 105.115 38.0634 105.131 38.2107C105.127 38.2974 105.143 38.3839 105.18 38.4627C105.36 38.5925 105.572 38.6695 105.793 38.6852C105.796 38.7288 105.796 38.7725 105.793 38.8161C105.795 38.8368 105.795 38.8576 105.793 38.8783C105.793 38.9012 105.793 38.9307 105.793 38.9601H105.524H105.131H104.699H104.28H103.894H103.647C103.647 38.9307 103.647 38.9012 103.647 38.8783C103.646 38.8576 103.646 38.8368 103.647 38.8161C103.649 38.7721 103.655 38.7284 103.663 38.6852C103.878 38.6701 104.084 38.5966 104.261 38.4725C104.298 38.3941 104.316 38.3075 104.313 38.2205C104.313 38.0765 104.332 37.9162 104.339 37.7427C104.345 37.5693 104.339 37.4155 104.339 37.2518V36.954L104.365 34.4799V34.228C104.365 34.1058 104.365 33.9814 104.365 33.8549C104.365 33.7305 104.365 33.6127 104.345 33.508C104.326 33.4033 104.322 33.3378 104.303 33.3214C104.239 33.2646 104.164 33.2232 104.082 33.2004C103.978 33.1709 103.852 33.1382 103.699 33.1087C103.691 33.0655 103.685 33.0218 103.683 32.9778C103.681 32.9571 103.681 32.9363 103.683 32.9156C103.683 32.8927 103.683 32.8633 103.683 32.8338H103.809C103.87 32.8369 103.931 32.8369 103.991 32.8338H104.098H104.219L104.683 32.8109L105.193 32.7847L105.673 32.7618H106.069C106.287 32.7627 106.504 32.7791 106.719 32.8109C106.936 32.8392 107.147 32.9092 107.339 33.0171C107.528 33.1252 107.687 33.2807 107.8 33.4687C107.929 33.7059 107.99 33.9742 107.978 34.2443C107.992 34.4464 107.962 34.6491 107.892 34.8387C107.821 35.0284 107.711 35.2006 107.569 35.3439C107.245 35.6455 106.837 35.8397 106.4 35.9002C106.449 35.9788 106.521 36.0901 106.621 36.2275C106.722 36.365 106.832 36.5286 106.946 36.702L107.339 37.2485L107.735 37.7787L108.06 38.2107C108.132 38.3009 108.21 38.3862 108.293 38.466C108.376 38.5414 108.467 38.6083 108.563 38.6656C108.641 38.7117 108.729 38.7376 108.819 38.7408H108.949C108.959 38.7605 108.965 38.7815 108.969 38.803C108.982 38.8253 108.994 38.8482 109.004 38.8718Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M113.696 33.9072C113.652 33.9104 113.607 33.9104 113.563 33.9072H113.501H113.423C113.369 33.7099 113.247 33.5383 113.079 33.4229C112.891 33.336 112.685 33.2956 112.479 33.3051H112.066C111.907 33.3051 111.78 33.3051 111.68 33.3051C111.677 33.353 111.677 33.4011 111.68 33.4491V33.6127C111.68 33.7142 111.68 33.8385 111.68 33.9891C111.68 34.1396 111.68 34.3163 111.68 34.4963V36.9704V37.5136C111.68 37.6925 111.68 37.8529 111.68 37.9947C111.68 38.1387 111.68 38.2565 111.703 38.3481C111.7 38.4031 111.71 38.4579 111.732 38.5085C111.796 38.566 111.873 38.6065 111.956 38.6263C112.081 38.6652 112.207 38.6969 112.336 38.7212C112.347 38.7641 112.353 38.8079 112.355 38.8521C112.357 38.8728 112.357 38.8936 112.355 38.9143C112.355 38.9372 112.355 38.9667 112.355 38.9961H112.112H111.722H111.297H110.875H110.488H110.245C110.242 38.9689 110.242 38.9415 110.245 38.9143C110.243 38.8936 110.243 38.8728 110.245 38.8521C110.247 38.8079 110.253 38.7641 110.264 38.7212C110.393 38.6969 110.519 38.6652 110.644 38.6263C110.727 38.6057 110.804 38.5653 110.868 38.5085C110.889 38.4645 110.901 38.4166 110.904 38.3678C110.904 38.286 110.923 38.1747 110.933 38.0405C110.943 37.9063 110.949 37.746 110.953 37.5627C110.956 37.3795 110.953 37.1831 110.953 36.9704L110.969 34.5159V33.4556C110.969 33.4 110.969 33.3509 110.969 33.3051H110.81H110.605H110.102C109.895 33.2945 109.689 33.335 109.501 33.4229C109.332 33.538 109.209 33.7095 109.154 33.9072C109.111 33.9103 109.067 33.9103 109.024 33.9072H108.962H108.884L108.91 32.8633H109.141H109.465C109.579 32.8633 109.693 32.8633 109.79 32.8633H110.063H112.482H112.755C112.858 32.8633 112.966 32.8633 113.079 32.8633H113.404H113.667L113.696 33.9072Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M120.401 33.0236C120.4 33.0677 120.395 33.1116 120.385 33.1545C120.165 33.1687 119.953 33.2421 119.771 33.3673C119.742 33.4322 119.727 33.5023 119.726 33.5734C119.726 33.6945 119.706 33.8352 119.696 33.9891C119.687 34.1429 119.696 34.3163 119.696 34.4505C119.696 34.5847 119.696 34.709 119.696 34.7777L119.68 36.9769C119.68 37.1962 119.68 37.4122 119.68 37.6314C119.68 37.8507 119.68 38.0438 119.664 38.2271C119.648 38.4103 119.664 38.5543 119.641 38.6918C119.619 38.8292 119.625 38.9012 119.618 38.9437C119.46 39.0334 119.284 39.085 119.102 39.0943L115.914 34.7908C115.858 34.7202 115.807 34.6458 115.761 34.5683C115.709 34.4865 115.664 34.4112 115.615 34.349C115.587 34.3105 115.562 34.27 115.54 34.228L115.475 34.1101V34.4374C115.475 34.5258 115.475 34.6207 115.475 34.7254C115.475 34.8301 115.475 34.9185 115.475 34.9937L115.456 36.9573V37.2845C115.456 37.4449 115.456 37.6118 115.456 37.7918C115.456 37.9718 115.456 38.1191 115.475 38.2729C115.472 38.3602 115.491 38.4469 115.531 38.5249C115.709 38.6492 115.918 38.7227 116.135 38.7376C116.138 38.7812 116.138 38.8249 116.135 38.8685C116.136 38.8892 116.136 38.91 116.135 38.9307C116.135 38.9536 116.135 38.983 116.135 39.0125H115.725H115.609H115.394H115.18C115.044 39.0125 114.924 39.0125 114.82 39.0125C114.716 39.0125 114.605 39.0125 114.495 39.0125H114.222C114.222 38.983 114.222 38.9536 114.222 38.9307C114.221 38.91 114.221 38.8892 114.222 38.8685C114.219 38.8249 114.219 38.7812 114.222 38.7376C114.442 38.7234 114.654 38.65 114.836 38.5249C114.868 38.446 114.883 38.3613 114.881 38.2761C114.881 38.1289 114.901 37.9685 114.907 37.7885C114.914 37.6085 114.907 37.4351 114.907 37.2715C114.907 37.1078 114.907 36.9998 114.907 36.9442L114.927 34.8596V34.277C114.931 34.0791 114.92 33.8811 114.894 33.6847C114.887 33.5817 114.849 33.4832 114.786 33.4017C114.723 33.3201 114.638 33.2592 114.54 33.2265C114.453 33.1911 114.361 33.1669 114.268 33.1545C114.261 33.1344 114.261 33.1125 114.268 33.0924V33.0138C114.263 32.9692 114.263 32.9243 114.268 32.8797H114.427H114.677H114.933H115.089H115.443L118.641 37.2715C118.713 37.3729 118.774 37.4645 118.833 37.5529L118.976 37.7853L119.099 37.9947C119.099 37.926 119.099 37.854 119.099 37.7853V37.5725C119.099 37.4547 119.099 37.3304 119.099 37.1995C119.099 37.0686 119.099 36.9573 119.099 36.8722L119.125 34.7777C119.125 34.7025 119.125 34.5879 119.125 34.4505C119.125 34.313 119.125 34.1494 119.125 33.9956C119.125 33.8418 119.125 33.7076 119.102 33.5865C119.104 33.5188 119.094 33.4513 119.073 33.3869C118.893 33.262 118.684 33.1885 118.466 33.1742C118.457 33.131 118.452 33.0872 118.45 33.0433C118.448 33.0226 118.448 33.0018 118.45 32.9811C118.45 32.9582 118.45 32.9287 118.45 32.8993H118.742C118.781 32.9025 118.82 32.9025 118.859 32.8993H118.976C119.041 32.8993 119.112 32.8993 119.193 32.8993H119.407C119.541 32.8993 119.661 32.8993 119.765 32.8993C119.869 32.8993 119.979 32.8993 120.089 32.8993H120.362C120.362 32.9287 120.362 32.9582 120.362 32.9811C120.376 32.9944 120.389 33.0086 120.401 33.0236Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M125.398 39.0059H124.794H124.093H122.145H121.726H121.382H121.171C121.171 38.9765 121.171 38.947 121.171 38.9241C121.169 38.9034 121.169 38.8826 121.171 38.8619C121.171 38.8178 121.177 38.7739 121.187 38.731C121.315 38.7071 121.442 38.6754 121.567 38.6361C121.65 38.6163 121.727 38.5758 121.791 38.5183C121.827 38.4476 121.846 38.369 121.846 38.2892C121.846 38.1583 121.865 38.0143 121.872 37.8507C121.878 37.6871 121.872 37.5234 121.872 37.3696V36.9998L121.891 34.5159V34.1887C121.891 34.0643 121.891 33.9432 121.891 33.8254C121.891 33.7076 121.891 33.6029 121.872 33.4982C121.87 33.4407 121.855 33.3844 121.826 33.3345C121.762 33.2782 121.685 33.2389 121.602 33.22C121.501 33.1895 121.374 33.16 121.222 33.1316C121.212 33.0888 121.205 33.0449 121.203 33.0007C121.202 32.98 121.202 32.9593 121.203 32.9386C121.203 32.9156 121.203 32.8862 121.203 32.8567H121.378H121.505H121.966H122.219H124.411H124.752C124.869 32.8567 124.982 32.8567 125.096 32.8567C125.21 32.8567 125.297 32.8567 125.365 32.8567L125.391 33.9072C125.349 33.9197 125.306 33.9263 125.262 33.9269C125.215 33.9253 125.168 33.9187 125.122 33.9072C125.08 33.783 125.023 33.6644 124.953 33.5538C124.898 33.4685 124.821 33.4005 124.729 33.3574C124.627 33.3095 124.517 33.2807 124.404 33.2724C124.268 33.2724 124.102 33.2724 123.904 33.2724C123.489 33.2724 123.076 33.2724 122.667 33.2985V33.4818C122.667 33.5473 122.667 33.6127 122.667 33.6782C122.667 33.796 122.667 33.9301 122.667 34.0807C122.667 34.2312 122.667 34.3818 122.667 34.5356V35.6483H123.057H123.482C123.648 35.6483 123.791 35.6483 123.921 35.6286C124.033 35.6206 124.143 35.5917 124.245 35.5435C124.338 35.5006 124.416 35.4326 124.473 35.3472C124.539 35.2359 124.583 35.1125 124.602 34.9839C124.646 34.9724 124.691 34.9669 124.736 34.9676C124.783 34.9665 124.83 34.972 124.875 34.9839V35.2065C124.875 35.2686 124.875 35.357 124.875 35.465C124.875 35.573 124.875 35.7006 124.875 35.8413C124.875 35.9821 124.875 36.1064 124.875 36.2111C124.875 36.3159 124.875 36.4042 124.875 36.4697V36.6889C124.83 36.7019 124.783 36.7085 124.736 36.7086C124.691 36.708 124.646 36.7014 124.602 36.6889C124.583 36.5604 124.539 36.4369 124.473 36.3257C124.416 36.2403 124.338 36.1723 124.245 36.1293C124.143 36.0822 124.033 36.0535 123.921 36.0442C123.791 36.0442 123.648 36.0442 123.482 36.0442H123.057C122.914 36.0442 122.771 36.0442 122.632 36.0442V36.9998V37.8343C122.632 37.9849 122.632 38.1191 122.632 38.2369C122.63 38.3022 122.639 38.3674 122.658 38.4299C122.708 38.4736 122.768 38.504 122.833 38.5183C122.926 38.5441 123.022 38.5616 123.119 38.5707C123.226 38.5707 123.343 38.5936 123.466 38.5969C123.589 38.6001 123.71 38.5969 123.833 38.5969C124.008 38.5976 124.182 38.5888 124.356 38.5707C124.491 38.5568 124.623 38.5226 124.749 38.4692C124.861 38.4217 124.96 38.3476 125.038 38.2532C125.128 38.1398 125.198 38.0114 125.245 37.8736C125.289 37.8533 125.337 37.8443 125.385 37.8474C125.431 37.8435 125.477 37.8525 125.518 37.8736L125.398 39.0059Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M131.824 38.8717C131.823 38.9176 131.814 38.963 131.798 39.0059H131.661H131.466H131.268H131.122C130.975 39.0096 130.827 38.9942 130.684 38.9601C130.574 38.9279 130.474 38.867 130.395 38.7834C130.305 38.6882 130.22 38.5876 130.142 38.4823C130.031 38.3416 129.908 38.178 129.768 37.9882L129.336 37.3925C129.184 37.1831 129.041 36.9835 128.911 36.7904C128.781 36.5973 128.661 36.4271 128.56 36.2733C128.46 36.1195 128.385 36.0082 128.346 35.9461C128.344 35.8961 128.353 35.8462 128.372 35.8002C128.392 35.7542 128.422 35.7135 128.46 35.681C128.663 35.6521 128.862 35.6017 129.054 35.5304C129.229 35.4666 129.392 35.3749 129.538 35.2588C129.673 35.1529 129.783 35.019 129.862 34.8661C129.945 34.7055 129.986 34.5266 129.983 34.3458C129.988 34.1557 129.952 33.9667 129.875 33.7927C129.813 33.6506 129.716 33.5267 129.593 33.4327C129.468 33.3379 129.326 33.2699 129.174 33.2331C129.011 33.1903 128.843 33.1694 128.674 33.1709H128.499H128.307H128.122H127.982V33.5603C127.982 33.6782 127.982 33.8156 127.982 33.9727C127.982 34.1298 127.982 34.2999 127.982 34.4636L127.966 36.9377C127.966 36.9769 127.966 37.0751 127.966 37.2289C127.966 37.3827 127.966 37.5562 127.966 37.7198C127.966 37.8834 127.966 38.0471 127.966 38.1943C127.962 38.2811 127.979 38.3675 128.015 38.4463C128.195 38.5761 128.408 38.6531 128.629 38.6688C128.637 38.712 128.643 38.7558 128.645 38.7998C128.646 38.8204 128.646 38.8412 128.645 38.8619C128.645 38.8848 128.645 38.9143 128.645 38.9437H128.398H128.005H127.573H127.155H126.768H126.521C126.521 38.9143 126.521 38.8848 126.521 38.8619C126.521 38.839 126.521 38.8194 126.521 38.7998C126.518 38.7562 126.518 38.7124 126.521 38.6688C126.736 38.6537 126.942 38.5802 127.119 38.4561C127.156 38.3777 127.174 38.2912 127.171 38.2041C127.171 38.0601 127.193 37.8998 127.197 37.7263C127.2 37.5529 127.197 37.3991 127.197 37.2355V36.9377L127.223 34.4636V34.2116C127.223 34.0894 127.223 33.9651 127.223 33.8385C127.223 33.7142 127.223 33.5963 127.203 33.4916C127.204 33.4273 127.191 33.3635 127.164 33.3051C127.099 33.249 127.023 33.2077 126.94 33.184C126.836 33.1545 126.71 33.1218 126.557 33.0924C126.549 33.0492 126.543 33.0054 126.541 32.9615C126.539 32.9408 126.539 32.92 126.541 32.8993C126.541 32.8764 126.541 32.8469 126.541 32.8175H126.629C126.689 32.8206 126.75 32.8206 126.81 32.8175H126.917H127.038L127.502 32.7946L128.012 32.7684L128.492 32.7455H128.888C129.106 32.7466 129.323 32.763 129.538 32.7946C129.754 32.8234 129.964 32.8934 130.155 33.0007C130.344 33.1088 130.503 33.2643 130.616 33.4524C130.746 33.689 130.808 33.9577 130.794 34.228C130.8 34.425 130.764 34.621 130.691 34.8036C130.617 34.9861 130.506 35.1512 130.366 35.2883C130.043 35.5893 129.636 35.7834 129.2 35.8446C129.246 35.9232 129.317 36.0344 129.418 36.1719C129.518 36.3093 129.629 36.4729 129.742 36.6464L130.135 37.1929L130.531 37.7231L130.872 38.1551C130.944 38.2453 131.023 38.3305 131.106 38.4103C131.19 38.4859 131.281 38.5528 131.379 38.6099C131.455 38.6563 131.543 38.6822 131.632 38.6852H131.762C131.771 38.7049 131.778 38.7258 131.781 38.7474C131.799 38.7875 131.813 38.8291 131.824 38.8717Z",
          fill: "#233E81",
        }),
        s.jsx("path", {
          d: "M135.665 37.3958C135.672 37.6742 135.595 37.9484 135.444 38.1812C135.302 38.398 135.116 38.5821 134.898 38.7212C134.675 38.8686 134.429 38.979 134.171 39.0485C133.926 39.1138 133.674 39.1479 133.421 39.1499C133.262 39.1499 133.096 39.1499 132.895 39.127C132.675 39.1082 132.458 39.0687 132.246 39.0092L132.203 37.9587C132.22 37.9391 132.268 37.9292 132.343 37.9292C132.389 37.9263 132.435 37.9365 132.476 37.9587C132.515 38.0964 132.58 38.2253 132.668 38.3383C132.744 38.4332 132.838 38.5122 132.944 38.5707C133.046 38.6259 133.155 38.6666 133.268 38.6918C133.389 38.7139 133.512 38.7248 133.635 38.7245C133.77 38.7246 133.905 38.7114 134.038 38.6852C134.159 38.6639 134.277 38.6276 134.389 38.5772C134.526 38.4761 134.637 38.3438 134.713 38.1911C134.801 38.0147 134.845 37.8191 134.84 37.6216C134.848 37.3883 134.781 37.1585 134.648 36.9671C134.514 36.7848 134.351 36.6266 134.165 36.4991C133.966 36.358 133.759 36.2291 133.544 36.113C133.326 35.9957 133.118 35.8611 132.921 35.7104C132.732 35.5672 132.568 35.3923 132.437 35.1934C132.304 34.9753 132.238 34.7227 132.246 34.4669C132.239 34.1943 132.308 33.9254 132.447 33.6912C132.58 33.48 132.756 33.2994 132.963 33.1611C133.179 33.0219 133.416 32.9181 133.665 32.8535C133.911 32.7869 134.166 32.7528 134.421 32.752C134.577 32.752 134.746 32.752 134.924 32.7749C135.144 32.7939 135.361 32.8334 135.574 32.8927L135.59 33.9105C135.546 33.9306 135.498 33.9395 135.45 33.9367H135.376C135.355 33.9367 135.334 33.9298 135.317 33.9171C135.299 33.7953 135.253 33.6795 135.182 33.5789C135.112 33.4783 135.019 33.3957 134.911 33.3378C134.688 33.2311 134.444 33.1784 134.197 33.184C134.08 33.184 133.963 33.1906 133.846 33.2036C133.734 33.2173 133.624 33.2494 133.522 33.2985C133.39 33.3918 133.279 33.5123 133.197 33.652C133.112 33.8174 133.072 34.0025 133.08 34.1887C133.068 34.4225 133.135 34.6535 133.272 34.8432C133.409 35.018 133.572 35.1703 133.755 35.2948C133.955 35.4305 134.162 35.554 134.376 35.6646C134.596 35.7772 134.804 35.9109 134.999 36.0639C135.192 36.2145 135.356 36.3998 135.483 36.6104C135.61 36.8517 135.673 37.1225 135.665 37.3958Z",
          fill: "#233E81",
        }),
      ],
    }),
  });
}
var Ge = {},
  Va;
function tu() {
  if (Va) return Ge;
  (Va = 1),
    Object.defineProperty(Ge, "__esModule", { value: !0 }),
    (Ge.parse = E),
    (Ge.serialize = m);
  const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    f = /^[\u0021-\u003A\u003C-\u007E]*$/,
    C =
      /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    o = /^[\u0020-\u003A\u003D-\u007E]*$/,
    h = Object.prototype.toString,
    p = (() => {
      const R = function () {};
      return (R.prototype = Object.create(null)), R;
    })();
  function E(R, z) {
    const D = new p(),
      Q = R.length;
    if (Q < 2) return D;
    const V = (z == null ? void 0 : z.decode) || A;
    let U = 0;
    do {
      const K = R.indexOf("=", U);
      if (K === -1) break;
      const G = R.indexOf(";", U),
        h1 = G === -1 ? Q : G;
      if (K > h1) {
        U = R.lastIndexOf(";", K - 1) + 1;
        continue;
      }
      const P = _(R, U, K),
        w1 = b(R, K, P),
        Z1 = R.slice(P, w1);
      if (D[Z1] === void 0) {
        let Q1 = _(R, K + 1, h1),
          Y = b(R, h1, Q1);
        const a1 = V(R.slice(Q1, Y));
        D[Z1] = a1;
      }
      U = h1 + 1;
    } while (U < Q);
    return D;
  }
  function _(R, z, D) {
    do {
      const Q = R.charCodeAt(z);
      if (Q !== 32 && Q !== 9) return z;
    } while (++z < D);
    return D;
  }
  function b(R, z, D) {
    for (; z > D; ) {
      const Q = R.charCodeAt(--z);
      if (Q !== 32 && Q !== 9) return z + 1;
    }
    return D;
  }
  function m(R, z, D) {
    const Q = (D == null ? void 0 : D.encode) || encodeURIComponent;
    if (!c.test(R)) throw new TypeError(`argument name is invalid: ${R}`);
    const V = Q(z);
    if (!f.test(V)) throw new TypeError(`argument val is invalid: ${z}`);
    let U = R + "=" + V;
    if (!D) return U;
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge))
        throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);
      U += "; Max-Age=" + D.maxAge;
    }
    if (D.domain) {
      if (!C.test(D.domain))
        throw new TypeError(`option domain is invalid: ${D.domain}`);
      U += "; Domain=" + D.domain;
    }
    if (D.path) {
      if (!o.test(D.path))
        throw new TypeError(`option path is invalid: ${D.path}`);
      U += "; Path=" + D.path;
    }
    if (D.expires) {
      if (!N(D.expires) || !Number.isFinite(D.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${D.expires}`);
      U += "; Expires=" + D.expires.toUTCString();
    }
    if (
      (D.httpOnly && (U += "; HttpOnly"),
      D.secure && (U += "; Secure"),
      D.partitioned && (U += "; Partitioned"),
      D.priority)
    )
      switch (
        typeof D.priority == "string" ? D.priority.toLowerCase() : void 0
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
          throw new TypeError(`option priority is invalid: ${D.priority}`);
      }
    if (D.sameSite)
      switch (
        typeof D.sameSite == "string" ? D.sameSite.toLowerCase() : D.sameSite
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
          throw new TypeError(`option sameSite is invalid: ${D.sameSite}`);
      }
    return U;
  }
  function A(R) {
    if (R.indexOf("%") === -1) return R;
    try {
      return decodeURIComponent(R);
    } catch {
      return R;
    }
  }
  function N(R) {
    return h.call(R) === "[object Date]";
  }
  return Ge;
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
 */ var Ba = "popstate";
function au(c = {}) {
  function f(h, p) {
    let {
      pathname: E = "/",
      search: _ = "",
      hash: b = "",
    } = n4(h.location.hash.substring(1));
    return (
      !E.startsWith("/") && !E.startsWith(".") && (E = "/" + E),
      Nt(
        "",
        { pathname: E, search: _, hash: b },
        (p.state && p.state.usr) || null,
        (p.state && p.state.key) || "default"
      )
    );
  }
  function C(h, p) {
    let E = h.document.querySelector("base"),
      _ = "";
    if (E && E.getAttribute("href")) {
      let b = h.location.href,
        m = b.indexOf("#");
      _ = m === -1 ? b : b.slice(0, m);
    }
    return _ + "#" + (typeof p == "string" ? p : Qe(p));
  }
  function o(h, p) {
    M2(
      h.pathname.charAt(0) === "/",
      `relative pathnames are not supported in hash history.push(${JSON.stringify(
        p
      )})`
    );
  }
  return nu(f, C, o, c);
}
function E1(c, f) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(f);
}
function M2(c, f) {
  if (!c) {
    typeof console < "u" && console.warn(f);
    try {
      throw new Error(f);
    } catch {}
  }
}
function lu() {
  return Math.random().toString(36).substring(2, 10);
}
function qa(c, f) {
  return { usr: c.state, key: c.key, idx: f };
}
function Nt(c, f, C = null, o) {
  return {
    pathname: typeof c == "string" ? c : c.pathname,
    search: "",
    hash: "",
    ...(typeof f == "string" ? n4(f) : f),
    state: C,
    key: (f && f.key) || o || lu(),
  };
}
function Qe({ pathname: c = "/", search: f = "", hash: C = "" }) {
  return (
    f && f !== "?" && (c += f.charAt(0) === "?" ? f : "?" + f),
    C && C !== "#" && (c += C.charAt(0) === "#" ? C : "#" + C),
    c
  );
}
function n4(c) {
  let f = {};
  if (c) {
    let C = c.indexOf("#");
    C >= 0 && ((f.hash = c.substring(C)), (c = c.substring(0, C)));
    let o = c.indexOf("?");
    o >= 0 && ((f.search = c.substring(o)), (c = c.substring(0, o))),
      c && (f.pathname = c);
  }
  return f;
}
function nu(c, f, C, o = {}) {
  let { window: h = document.defaultView, v5Compat: p = !1 } = o,
    E = h.history,
    _ = "POP",
    b = null,
    m = A();
  m == null && ((m = 0), E.replaceState({ ...E.state, idx: m }, ""));
  function A() {
    return (E.state || { idx: null }).idx;
  }
  function N() {
    _ = "POP";
    let V = A(),
      U = V == null ? null : V - m;
    (m = V), b && b({ action: _, location: Q.location, delta: U });
  }
  function R(V, U) {
    _ = "PUSH";
    let K = Nt(Q.location, V, U);
    C && C(K, V), (m = A() + 1);
    let G = qa(K, m),
      h1 = Q.createHref(K);
    try {
      E.pushState(G, "", h1);
    } catch (P) {
      if (P instanceof DOMException && P.name === "DataCloneError") throw P;
      h.location.assign(h1);
    }
    p && b && b({ action: _, location: Q.location, delta: 1 });
  }
  function z(V, U) {
    _ = "REPLACE";
    let K = Nt(Q.location, V, U);
    C && C(K, V), (m = A());
    let G = qa(K, m),
      h1 = Q.createHref(K);
    E.replaceState(G, "", h1),
      p && b && b({ action: _, location: Q.location, delta: 0 });
  }
  function D(V) {
    let U = h.location.origin !== "null" ? h.location.origin : h.location.href,
      K = typeof V == "string" ? V : Qe(V);
    return (
      (K = K.replace(/ $/, "%20")),
      E1(
        U,
        `No window.location.(origin|href) available to create URL for href: ${K}`
      ),
      new URL(K, U)
    );
  }
  let Q = {
    get action() {
      return _;
    },
    get location() {
      return c(h, E);
    },
    listen(V) {
      if (b) throw new Error("A history only accepts one active listener");
      return (
        h.addEventListener(Ba, N),
        (b = V),
        () => {
          h.removeEventListener(Ba, N), (b = null);
        }
      );
    },
    createHref(V) {
      return f(h, V);
    },
    createURL: D,
    encodeLocation(V) {
      let U = D(V);
      return { pathname: U.pathname, search: U.search, hash: U.hash };
    },
    push: R,
    replace: z,
    go(V) {
      return E.go(V);
    },
  };
  return Q;
}
function ka(c, f, C = "/") {
  return iu(c, f, C, !1);
}
function iu(c, f, C, o) {
  let h = typeof f == "string" ? n4(f) : f,
    p = O3(h.pathname || "/", C);
  if (p == null) return null;
  let E = Ja(c);
  uu(E);
  let _ = null;
  for (let b = 0; _ == null && b < E.length; ++b) {
    let m = vu(p);
    _ = mu(E[b], m, o);
  }
  return _;
}
function Ja(c, f = [], C = [], o = "") {
  let h = (p, E, _) => {
    let b = {
      relativePath: _ === void 0 ? p.path || "" : _,
      caseSensitive: p.caseSensitive === !0,
      childrenIndex: E,
      route: p,
    };
    b.relativePath.startsWith("/") &&
      (E1(
        b.relativePath.startsWith(o),
        `Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (b.relativePath = b.relativePath.slice(o.length)));
    let m = i3([o, b.relativePath]),
      A = C.concat(b);
    p.children &&
      p.children.length > 0 &&
      (E1(
        p.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
      ),
      Ja(p.children, f, A, m)),
      !(p.path == null && !p.index) &&
        f.push({ path: m, score: du(m, p.index), routesMeta: A });
  };
  return (
    c.forEach((p, E) => {
      var _;
      if (p.path === "" || !((_ = p.path) != null && _.includes("?"))) h(p, E);
      else for (let b of $a(p.path)) h(p, E, b);
    }),
    f
  );
}
function $a(c) {
  let f = c.split("/");
  if (f.length === 0) return [];
  let [C, ...o] = f,
    h = C.endsWith("?"),
    p = C.replace(/\?$/, "");
  if (o.length === 0) return h ? [p, ""] : [p];
  let E = $a(o.join("/")),
    _ = [];
  return (
    _.push(...E.map((b) => (b === "" ? p : [p, b].join("/")))),
    h && _.push(...E),
    _.map((b) => (c.startsWith("/") && b === "" ? "/" : b))
  );
}
function uu(c) {
  c.sort((f, C) =>
    f.score !== C.score
      ? C.score - f.score
      : hu(
          f.routesMeta.map((o) => o.childrenIndex),
          C.routesMeta.map((o) => o.childrenIndex)
        )
  );
}
var su = /^:[\w-]+$/,
  cu = 3,
  ru = 2,
  ou = 1,
  fu = 10,
  Cu = -2,
  Za = (c) => c === "*";
function du(c, f) {
  let C = c.split("/"),
    o = C.length;
  return (
    C.some(Za) && (o += Cu),
    f && (o += ru),
    C.filter((h) => !Za(h)).reduce(
      (h, p) => h + (su.test(p) ? cu : p === "" ? ou : fu),
      o
    )
  );
}
function hu(c, f) {
  return c.length === f.length && c.slice(0, -1).every((o, h) => o === f[h])
    ? c[c.length - 1] - f[f.length - 1]
    : 0;
}
function mu(c, f, C = !1) {
  let { routesMeta: o } = c,
    h = {},
    p = "/",
    E = [];
  for (let _ = 0; _ < o.length; ++_) {
    let b = o[_],
      m = _ === o.length - 1,
      A = p === "/" ? f : f.slice(p.length) || "/",
      N = h5(
        { path: b.relativePath, caseSensitive: b.caseSensitive, end: m },
        A
      ),
      R = b.route;
    if (
      (!N &&
        m &&
        C &&
        !o[o.length - 1].route.index &&
        (N = h5(
          { path: b.relativePath, caseSensitive: b.caseSensitive, end: !1 },
          A
        )),
      !N)
    )
      return null;
    Object.assign(h, N.params),
      E.push({
        params: h,
        pathname: i3([p, N.pathname]),
        pathnameBase: Hu(i3([p, N.pathnameBase])),
        route: R,
      }),
      N.pathnameBase !== "/" && (p = i3([p, N.pathnameBase]));
  }
  return E;
}
function h5(c, f) {
  typeof c == "string" && (c = { path: c, caseSensitive: !1, end: !0 });
  let [C, o] = pu(c.path, c.caseSensitive, c.end),
    h = f.match(C);
  if (!h) return null;
  let p = h[0],
    E = p.replace(/(.)\/+$/, "$1"),
    _ = h.slice(1);
  return {
    params: o.reduce((m, { paramName: A, isOptional: N }, R) => {
      if (A === "*") {
        let D = _[R] || "";
        E = p.slice(0, p.length - D.length).replace(/(.)\/+$/, "$1");
      }
      const z = _[R];
      return (
        N && !z ? (m[A] = void 0) : (m[A] = (z || "").replace(/%2F/g, "/")), m
      );
    }, {}),
    pathname: p,
    pathnameBase: E,
    pattern: c,
  };
}
function pu(c, f = !1, C = !0) {
  M2(
    c === "*" || !c.endsWith("*") || c.endsWith("/*"),
    `Route path "${c}" will be treated as if it were "${c.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let o = [],
    h =
      "^" +
      c
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (E, _, b) => (
            o.push({ paramName: _, isOptional: b != null }),
            b ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    c.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (h += c === "*" || c === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : C
      ? (h += "\\/*$")
      : c !== "" && c !== "/" && (h += "(?:(?=\\/|$))"),
    [new RegExp(h, f ? void 0 : "i"), o]
  );
}
function vu(c) {
  try {
    return c
      .split("/")
      .map((f) => decodeURIComponent(f).replace(/\//g, "%2F"))
      .join("/");
  } catch (f) {
    return (
      M2(
        !1,
        `The URL path "${c}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`
      ),
      c
    );
  }
}
function O3(c, f) {
  if (f === "/") return c;
  if (!c.toLowerCase().startsWith(f.toLowerCase())) return null;
  let C = f.endsWith("/") ? f.length - 1 : f.length,
    o = c.charAt(C);
  return o && o !== "/" ? null : c.slice(C) || "/";
}
function gu(c, f = "/") {
  let {
    pathname: C,
    search: o = "",
    hash: h = "",
  } = typeof c == "string" ? n4(c) : c;
  return {
    pathname: C ? (C.startsWith("/") ? C : yu(C, f)) : f,
    search: xu(o),
    hash: Su(h),
  };
}
function yu(c, f) {
  let C = f.replace(/\/+$/, "").split("/");
  return (
    c.split("/").forEach((h) => {
      h === ".." ? C.length > 1 && C.pop() : h !== "." && C.push(h);
    }),
    C.length > 1 ? C.join("/") : "/"
  );
}
function Rt(c, f, C, o) {
  return `Cannot include a '${c}' character in a manually specified \`to.${f}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${C}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function bu(c) {
  return c.filter(
    (f, C) => C === 0 || (f.route.path && f.route.path.length > 0)
  );
}
function Wa(c) {
  let f = bu(c);
  return f.map((C, o) => (o === f.length - 1 ? C.pathname : C.pathnameBase));
}
function Fa(c, f, C, o = !1) {
  let h;
  typeof c == "string"
    ? (h = n4(c))
    : ((h = { ...c }),
      E1(
        !h.pathname || !h.pathname.includes("?"),
        Rt("?", "pathname", "search", h)
      ),
      E1(
        !h.pathname || !h.pathname.includes("#"),
        Rt("#", "pathname", "hash", h)
      ),
      E1(!h.search || !h.search.includes("#"), Rt("#", "search", "hash", h)));
  let p = c === "" || h.pathname === "",
    E = p ? "/" : h.pathname,
    _;
  if (E == null) _ = C;
  else {
    let N = f.length - 1;
    if (!o && E.startsWith("..")) {
      let R = E.split("/");
      for (; R[0] === ".."; ) R.shift(), (N -= 1);
      h.pathname = R.join("/");
    }
    _ = N >= 0 ? f[N] : "/";
  }
  let b = gu(h, _),
    m = E && E !== "/" && E.endsWith("/"),
    A = (p || E === ".") && C.endsWith("/");
  return !b.pathname.endsWith("/") && (m || A) && (b.pathname += "/"), b;
}
var i3 = (c) => c.join("/").replace(/\/\/+/g, "/"),
  Hu = (c) => c.replace(/\/+$/, "").replace(/^\/*/, "/"),
  xu = (c) => (!c || c === "?" ? "" : c.startsWith("?") ? c : "?" + c),
  Su = (c) => (!c || c === "#" ? "" : c.startsWith("#") ? c : "#" + c);
function Eu(c) {
  return (
    c != null &&
    typeof c.status == "number" &&
    typeof c.statusText == "string" &&
    typeof c.internal == "boolean" &&
    "data" in c
  );
}
var Pa = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Pa);
var _u = ["GET", ...Pa];
new Set(_u);
var Z4 = j.createContext(null);
Z4.displayName = "DataRouter";
var m5 = j.createContext(null);
m5.displayName = "DataRouterState";
var Ia = j.createContext({ isTransitioning: !1 });
Ia.displayName = "ViewTransition";
var Lu = j.createContext(new Map());
Lu.displayName = "Fetchers";
var ju = j.createContext(null);
ju.displayName = "Await";
var B2 = j.createContext(null);
B2.displayName = "Navigation";
var Ke = j.createContext(null);
Ke.displayName = "Location";
var u3 = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
u3.displayName = "Route";
var qt = j.createContext(null);
qt.displayName = "RouteError";
function wu(c, { relative: f } = {}) {
  E1(
    ke(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: C, navigator: o } = j.useContext(B2),
    { hash: h, pathname: p, search: E } = Je(c, { relative: f }),
    _ = p;
  return (
    C !== "/" && (_ = p === "/" ? C : i3([C, p])),
    o.createHref({ pathname: _, search: E, hash: h })
  );
}
function ke() {
  return j.useContext(Ke) != null;
}
function s3() {
  return (
    E1(
      ke(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    j.useContext(Ke).location
  );
}
var el =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function tl(c) {
  j.useContext(B2).static || j.useLayoutEffect(c);
}
function al() {
  let { isDataRoute: c } = j.useContext(u3);
  return c ? Zu() : Mu();
}
function Mu() {
  E1(
    ke(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let c = j.useContext(Z4),
    { basename: f, navigator: C } = j.useContext(B2),
    { matches: o } = j.useContext(u3),
    { pathname: h } = s3(),
    p = JSON.stringify(Wa(o)),
    E = j.useRef(!1);
  return (
    tl(() => {
      E.current = !0;
    }),
    j.useCallback(
      (b, m = {}) => {
        if ((M2(E.current, el), !E.current)) return;
        if (typeof b == "number") {
          C.go(b);
          return;
        }
        let A = Fa(b, JSON.parse(p), h, m.relative === "path");
        c == null &&
          f !== "/" &&
          (A.pathname = A.pathname === "/" ? f : i3([f, A.pathname])),
          (m.replace ? C.replace : C.push)(A, m.state, m);
      },
      [f, C, p, h, c]
    )
  );
}
j.createContext(null);
function Je(c, { relative: f } = {}) {
  let { matches: C } = j.useContext(u3),
    { pathname: o } = s3(),
    h = JSON.stringify(Wa(C));
  return j.useMemo(() => Fa(c, JSON.parse(h), o, f === "path"), [c, h, o, f]);
}
function Au(c, f) {
  return ll(c, f);
}
function ll(c, f, C, o) {
  var K;
  E1(
    ke(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: h, static: p } = j.useContext(B2),
    { matches: E } = j.useContext(u3),
    _ = E[E.length - 1],
    b = _ ? _.params : {},
    m = _ ? _.pathname : "/",
    A = _ ? _.pathnameBase : "/",
    N = _ && _.route;
  {
    let G = (N && N.path) || "";
    nl(
      m,
      !N || G.endsWith("*") || G.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${G}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${G}"> to <Route path="${
        G === "/" ? "*" : `${G}/*`
      }">.`
    );
  }
  let R = s3(),
    z;
  if (f) {
    let G = typeof f == "string" ? n4(f) : f;
    E1(
      A === "/" || ((K = G.pathname) == null ? void 0 : K.startsWith(A)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${A}" but pathname "${G.pathname}" was given in the \`location\` prop.`
    ),
      (z = G);
  } else z = R;
  let D = z.pathname || "/",
    Q = D;
  if (A !== "/") {
    let G = A.replace(/^\//, "").split("/");
    Q = "/" + D.replace(/^\//, "").split("/").slice(G.length).join("/");
  }
  let V =
    !p && C && C.matches && C.matches.length > 0
      ? C.matches
      : ka(c, { pathname: Q });
  M2(
    N || V != null,
    `No routes matched location "${z.pathname}${z.search}${z.hash}" `
  ),
    M2(
      V == null ||
        V[V.length - 1].route.element !== void 0 ||
        V[V.length - 1].route.Component !== void 0 ||
        V[V.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${z.pathname}${z.search}${z.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let U = zu(
    V &&
      V.map((G) =>
        Object.assign({}, G, {
          params: Object.assign({}, b, G.params),
          pathname: i3([
            A,
            h.encodeLocation
              ? h.encodeLocation(G.pathname).pathname
              : G.pathname,
          ]),
          pathnameBase:
            G.pathnameBase === "/"
              ? A
              : i3([
                  A,
                  h.encodeLocation
                    ? h.encodeLocation(G.pathnameBase).pathname
                    : G.pathnameBase,
                ]),
        })
      ),
    E,
    C,
    o
  );
  return f && U
    ? j.createElement(
        Ke.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...z,
            },
            navigationType: "POP",
          },
        },
        U
      )
    : U;
}
function Tu() {
  let c = qu(),
    f = Eu(c)
      ? `${c.status} ${c.statusText}`
      : c instanceof Error
      ? c.message
      : JSON.stringify(c),
    C = c instanceof Error ? c.stack : null,
    o = "rgba(200,200,200, 0.5)",
    h = { padding: "0.5rem", backgroundColor: o },
    p = { padding: "2px 4px", backgroundColor: o },
    E = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", c),
    (E = j.createElement(
      j.Fragment,
      null,
      j.createElement("p", null, "💿 Hey developer 👋"),
      j.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        j.createElement("code", { style: p }, "ErrorBoundary"),
        " or",
        " ",
        j.createElement("code", { style: p }, "errorElement"),
        " prop on your route."
      )
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement("h2", null, "Unexpected Application Error!"),
      j.createElement("h3", { style: { fontStyle: "italic" } }, f),
      C ? j.createElement("pre", { style: h }, C) : null,
      E
    )
  );
}
var Ru = j.createElement(Tu, null),
  Ou = class extends j.Component {
    constructor(c) {
      super(c),
        (this.state = {
          location: c.location,
          revalidation: c.revalidation,
          error: c.error,
        });
    }
    static getDerivedStateFromError(c) {
      return { error: c };
    }
    static getDerivedStateFromProps(c, f) {
      return f.location !== c.location ||
        (f.revalidation !== "idle" && c.revalidation === "idle")
        ? { error: c.error, location: c.location, revalidation: c.revalidation }
        : {
            error: c.error !== void 0 ? c.error : f.error,
            location: f.location,
            revalidation: c.revalidation || f.revalidation,
          };
    }
    componentDidCatch(c, f) {
      console.error(
        "React Router caught the following error during render",
        c,
        f
      );
    }
    render() {
      return this.state.error !== void 0
        ? j.createElement(
            u3.Provider,
            { value: this.props.routeContext },
            j.createElement(qt.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Du({ routeContext: c, match: f, children: C }) {
  let o = j.useContext(Z4);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (f.route.errorElement || f.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = f.route.id),
    j.createElement(u3.Provider, { value: c }, C)
  );
}
function zu(c, f = [], C = null, o = null) {
  if (c == null) {
    if (!C) return null;
    if (C.errors) c = C.matches;
    else if (f.length === 0 && !C.initialized && C.matches.length > 0)
      c = C.matches;
    else return null;
  }
  let h = c,
    p = C == null ? void 0 : C.errors;
  if (p != null) {
    let b = h.findIndex(
      (m) => m.route.id && (p == null ? void 0 : p[m.route.id]) !== void 0
    );
    E1(
      b >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        p
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
        let { loaderData: A, errors: N } = C,
          R =
            m.route.loader &&
            !A.hasOwnProperty(m.route.id) &&
            (!N || N[m.route.id] === void 0);
        if (m.route.lazy || R) {
          (E = !0), _ >= 0 ? (h = h.slice(0, _ + 1)) : (h = [h[0]]);
          break;
        }
      }
    }
  return h.reduceRight((b, m, A) => {
    let N,
      R = !1,
      z = null,
      D = null;
    C &&
      ((N = p && m.route.id ? p[m.route.id] : void 0),
      (z = m.route.errorElement || Ru),
      E &&
        (_ < 0 && A === 0
          ? (nl(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (R = !0),
            (D = null))
          : _ === A &&
            ((R = !0), (D = m.route.hydrateFallbackElement || null))));
    let Q = f.concat(h.slice(0, A + 1)),
      V = () => {
        let U;
        return (
          N
            ? (U = z)
            : R
            ? (U = D)
            : m.route.Component
            ? (U = j.createElement(m.route.Component, null))
            : m.route.element
            ? (U = m.route.element)
            : (U = b),
          j.createElement(Du, {
            match: m,
            routeContext: { outlet: b, matches: Q, isDataRoute: C != null },
            children: U,
          })
        );
      };
    return C && (m.route.ErrorBoundary || m.route.errorElement || A === 0)
      ? j.createElement(Ou, {
          location: C.location,
          revalidation: C.revalidation,
          component: z,
          error: N,
          children: V(),
          routeContext: { outlet: null, matches: Q, isDataRoute: !0 },
        })
      : V();
  }, null);
}
function Zt(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Nu(c) {
  let f = j.useContext(Z4);
  return E1(f, Zt(c)), f;
}
function Uu(c) {
  let f = j.useContext(m5);
  return E1(f, Zt(c)), f;
}
function Vu(c) {
  let f = j.useContext(u3);
  return E1(f, Zt(c)), f;
}
function Yt(c) {
  let f = Vu(c),
    C = f.matches[f.matches.length - 1];
  return (
    E1(
      C.route.id,
      `${c} can only be used on routes that contain a unique "id"`
    ),
    C.route.id
  );
}
function Bu() {
  return Yt("useRouteId");
}
function qu() {
  var o;
  let c = j.useContext(qt),
    f = Uu("useRouteError"),
    C = Yt("useRouteError");
  return c !== void 0 ? c : (o = f.errors) == null ? void 0 : o[C];
}
function Zu() {
  let { router: c } = Nu("useNavigate"),
    f = Yt("useNavigate"),
    C = j.useRef(!1);
  return (
    tl(() => {
      C.current = !0;
    }),
    j.useCallback(
      async (h, p = {}) => {
        M2(C.current, el),
          C.current &&
            (typeof h == "number"
              ? c.navigate(h)
              : await c.navigate(h, { fromRouteId: f, ...p }));
      },
      [c, f]
    )
  );
}
var Ya = {};
function nl(c, f, C) {
  !f && !Ya[c] && ((Ya[c] = !0), M2(!1, C));
}
j.memo(Yu);
function Yu({ routes: c, future: f, state: C }) {
  return ll(c, void 0, C, f);
}
function l4(c) {
  E1(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Gu({
  basename: c = "/",
  children: f = null,
  location: C,
  navigationType: o = "POP",
  navigator: h,
  static: p = !1,
}) {
  E1(
    !ke(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let E = c.replace(/^\/*/, "/"),
    _ = j.useMemo(
      () => ({ basename: E, navigator: h, static: p, future: {} }),
      [E, h, p]
    );
  typeof C == "string" && (C = n4(C));
  let {
      pathname: b = "/",
      search: m = "",
      hash: A = "",
      state: N = null,
      key: R = "default",
    } = C,
    z = j.useMemo(() => {
      let D = O3(b, E);
      return D == null
        ? null
        : {
            location: { pathname: D, search: m, hash: A, state: N, key: R },
            navigationType: o,
          };
    }, [E, b, m, A, N, R, o]);
  return (
    M2(
      z != null,
      `<Router basename="${E}"> is not able to match the URL "${b}${m}${A}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    z == null
      ? null
      : j.createElement(
          B2.Provider,
          { value: _ },
          j.createElement(Ke.Provider, { children: f, value: z })
        )
  );
}
function Xu({ children: c, location: f }) {
  return Au(Ut(c), f);
}
function Ut(c, f = []) {
  let C = [];
  return (
    j.Children.forEach(c, (o, h) => {
      if (!j.isValidElement(o)) return;
      let p = [...f, h];
      if (o.type === j.Fragment) {
        C.push.apply(C, Ut(o.props.children, p));
        return;
      }
      E1(
        o.type === l4,
        `[${
          typeof o.type == "string" ? o.type : o.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        E1(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes."
        );
      let E = {
        id: o.props.id || p.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      o.props.children && (E.children = Ut(o.props.children, p)), C.push(E);
    }),
    C
  );
}
var C5 = "get",
  d5 = "application/x-www-form-urlencoded";
function p5(c) {
  return c != null && typeof c.tagName == "string";
}
function Qu(c) {
  return p5(c) && c.tagName.toLowerCase() === "button";
}
function Ku(c) {
  return p5(c) && c.tagName.toLowerCase() === "form";
}
function ku(c) {
  return p5(c) && c.tagName.toLowerCase() === "input";
}
function Ju(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey);
}
function $u(c, f) {
  return c.button === 0 && (!f || f === "_self") && !Ju(c);
}
var r5 = null;
function Wu() {
  if (r5 === null)
    try {
      new FormData(document.createElement("form"), 0), (r5 = !1);
    } catch {
      r5 = !0;
    }
  return r5;
}
var Fu = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function Ot(c) {
  return c != null && !Fu.has(c)
    ? (M2(
        !1,
        `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${d5}"`
      ),
      null)
    : c;
}
function Pu(c, f) {
  let C, o, h, p, E;
  if (Ku(c)) {
    let _ = c.getAttribute("action");
    (o = _ ? O3(_, f) : null),
      (C = c.getAttribute("method") || C5),
      (h = Ot(c.getAttribute("enctype")) || d5),
      (p = new FormData(c));
  } else if (Qu(c) || (ku(c) && (c.type === "submit" || c.type === "image"))) {
    let _ = c.form;
    if (_ == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let b = c.getAttribute("formaction") || _.getAttribute("action");
    if (
      ((o = b ? O3(b, f) : null),
      (C = c.getAttribute("formmethod") || _.getAttribute("method") || C5),
      (h =
        Ot(c.getAttribute("formenctype")) ||
        Ot(_.getAttribute("enctype")) ||
        d5),
      (p = new FormData(_, c)),
      !Wu())
    ) {
      let { name: m, type: A, value: N } = c;
      if (A === "image") {
        let R = m ? `${m}.` : "";
        p.append(`${R}x`, "0"), p.append(`${R}y`, "0");
      } else m && p.append(m, N);
    }
  } else {
    if (p5(c))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (C = C5), (o = null), (h = d5), (E = c);
  }
  return (
    p && h === "text/plain" && ((E = p), (p = void 0)),
    { action: o, method: C.toLowerCase(), encType: h, formData: p, body: E }
  );
}
function Gt(c, f) {
  if (c === !1 || c === null || typeof c > "u") throw new Error(f);
}
async function Iu(c, f) {
  if (c.id in f) return f[c.id];
  try {
    let C = await import(c.module);
    return (f[c.id] = C), C;
  } catch (C) {
    return (
      console.error(
        `Error loading route module \`${c.module}\`, reloading page...`
      ),
      console.error(C),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function es(c) {
  return c == null
    ? !1
    : c.href == null
    ? c.rel === "preload" &&
      typeof c.imageSrcSet == "string" &&
      typeof c.imageSizes == "string"
    : typeof c.rel == "string" && typeof c.href == "string";
}
async function ts(c, f, C) {
  let o = await Promise.all(
    c.map(async (h) => {
      let p = f.routes[h.route.id];
      if (p) {
        let E = await Iu(p, C);
        return E.links ? E.links() : [];
      }
      return [];
    })
  );
  return is(
    o
      .flat(1)
      .filter(es)
      .filter((h) => h.rel === "stylesheet" || h.rel === "preload")
      .map((h) =>
        h.rel === "stylesheet"
          ? { ...h, rel: "prefetch", as: "style" }
          : { ...h, rel: "prefetch" }
      )
  );
}
function Ga(c, f, C, o, h, p) {
  let E = (b, m) => (C[m] ? b.route.id !== C[m].route.id : !0),
    _ = (b, m) => {
      var A;
      return (
        C[m].pathname !== b.pathname ||
        (((A = C[m].route.path) == null ? void 0 : A.endsWith("*")) &&
          C[m].params["*"] !== b.params["*"])
      );
    };
  return p === "assets"
    ? f.filter((b, m) => E(b, m) || _(b, m))
    : p === "data"
    ? f.filter((b, m) => {
        var N;
        let A = o.routes[b.route.id];
        if (!A || !A.hasLoader) return !1;
        if (E(b, m) || _(b, m)) return !0;
        if (b.route.shouldRevalidate) {
          let R = b.route.shouldRevalidate({
            currentUrl: new URL(h.pathname + h.search + h.hash, window.origin),
            currentParams: ((N = C[0]) == null ? void 0 : N.params) || {},
            nextUrl: new URL(c, window.origin),
            nextParams: b.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function as(c, f, { includeHydrateFallback: C } = {}) {
  return ls(
    c
      .map((o) => {
        let h = f.routes[o.route.id];
        if (!h) return [];
        let p = [h.module];
        return (
          h.clientActionModule && (p = p.concat(h.clientActionModule)),
          h.clientLoaderModule && (p = p.concat(h.clientLoaderModule)),
          C &&
            h.hydrateFallbackModule &&
            (p = p.concat(h.hydrateFallbackModule)),
          h.imports && (p = p.concat(h.imports)),
          p
        );
      })
      .flat(1)
  );
}
function ls(c) {
  return [...new Set(c)];
}
function ns(c) {
  let f = {},
    C = Object.keys(c).sort();
  for (let o of C) f[o] = c[o];
  return f;
}
function is(c, f) {
  let C = new Set();
  return (
    new Set(f),
    c.reduce((o, h) => {
      let p = JSON.stringify(ns(h));
      return C.has(p) || (C.add(p), o.push({ key: p, link: h })), o;
    }, [])
  );
}
function us(c) {
  let f =
    typeof c == "string"
      ? new URL(
          c,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : c;
  return (
    f.pathname === "/"
      ? (f.pathname = "_root.data")
      : (f.pathname = `${f.pathname.replace(/\/$/, "")}.data`),
    f
  );
}
function ss() {
  let c = j.useContext(Z4);
  return (
    Gt(
      c,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    c
  );
}
function cs() {
  let c = j.useContext(m5);
  return (
    Gt(
      c,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    c
  );
}
var Xt = j.createContext(void 0);
Xt.displayName = "FrameworkContext";
function il() {
  let c = j.useContext(Xt);
  return (
    Gt(c, "You must render this element inside a <HydratedRouter> element"), c
  );
}
function rs(c, f) {
  let C = j.useContext(Xt),
    [o, h] = j.useState(!1),
    [p, E] = j.useState(!1),
    {
      onFocus: _,
      onBlur: b,
      onMouseEnter: m,
      onMouseLeave: A,
      onTouchStart: N,
    } = f,
    R = j.useRef(null);
  j.useEffect(() => {
    if ((c === "render" && E(!0), c === "viewport")) {
      let Q = (U) => {
          U.forEach((K) => {
            E(K.isIntersecting);
          });
        },
        V = new IntersectionObserver(Q, { threshold: 0.5 });
      return (
        R.current && V.observe(R.current),
        () => {
          V.disconnect();
        }
      );
    }
  }, [c]),
    j.useEffect(() => {
      if (o) {
        let Q = setTimeout(() => {
          E(!0);
        }, 100);
        return () => {
          clearTimeout(Q);
        };
      }
    }, [o]);
  let z = () => {
      h(!0);
    },
    D = () => {
      h(!1), E(!1);
    };
  return C
    ? c !== "intent"
      ? [p, R, {}]
      : [
          p,
          R,
          {
            onFocus: Xe(_, z),
            onBlur: Xe(b, D),
            onMouseEnter: Xe(m, z),
            onMouseLeave: Xe(A, D),
            onTouchStart: Xe(N, z),
          },
        ]
    : [!1, R, {}];
}
function Xe(c, f) {
  return (C) => {
    c && c(C), C.defaultPrevented || f(C);
  };
}
function os({ page: c, ...f }) {
  let { router: C } = ss(),
    o = j.useMemo(() => ka(C.routes, c, C.basename), [C.routes, c, C.basename]);
  return o ? j.createElement(Cs, { page: c, matches: o, ...f }) : null;
}
function fs(c) {
  let { manifest: f, routeModules: C } = il(),
    [o, h] = j.useState([]);
  return (
    j.useEffect(() => {
      let p = !1;
      return (
        ts(c, f, C).then((E) => {
          p || h(E);
        }),
        () => {
          p = !0;
        }
      );
    }, [c, f, C]),
    o
  );
}
function Cs({ page: c, matches: f, ...C }) {
  let o = s3(),
    { manifest: h, routeModules: p } = il(),
    { loaderData: E, matches: _ } = cs(),
    b = j.useMemo(() => Ga(c, f, _, h, o, "data"), [c, f, _, h, o]),
    m = j.useMemo(() => Ga(c, f, _, h, o, "assets"), [c, f, _, h, o]),
    A = j.useMemo(() => {
      if (c === o.pathname + o.search + o.hash) return [];
      let z = new Set(),
        D = !1;
      if (
        (f.forEach((V) => {
          var K;
          let U = h.routes[V.route.id];
          !U ||
            !U.hasLoader ||
            ((!b.some((G) => G.route.id === V.route.id) &&
              V.route.id in E &&
              (K = p[V.route.id]) != null &&
              K.shouldRevalidate) ||
            U.hasClientLoader
              ? (D = !0)
              : z.add(V.route.id));
        }),
        z.size === 0)
      )
        return [];
      let Q = us(c);
      return (
        D &&
          z.size > 0 &&
          Q.searchParams.set(
            "_routes",
            f
              .filter((V) => z.has(V.route.id))
              .map((V) => V.route.id)
              .join(",")
          ),
        [Q.pathname + Q.search]
      );
    }, [E, o, h, b, f, c, p]),
    N = j.useMemo(() => as(m, h), [m, h]),
    R = fs(m);
  return j.createElement(
    j.Fragment,
    null,
    A.map((z) =>
      j.createElement("link", {
        key: z,
        rel: "prefetch",
        as: "fetch",
        href: z,
        ...C,
      })
    ),
    N.map((z) =>
      j.createElement("link", { key: z, rel: "modulepreload", href: z, ...C })
    ),
    R.map(({ key: z, link: D }) => j.createElement("link", { key: z, ...D }))
  );
}
function ds(...c) {
  return (f) => {
    c.forEach((C) => {
      typeof C == "function" ? C(f) : C != null && (C.current = f);
    });
  };
}
var ul =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  ul && (window.__reactRouterVersion = "7.2.0");
} catch {}
function hs({ basename: c, children: f, window: C }) {
  let o = j.useRef();
  o.current == null && (o.current = au({ window: C, v5Compat: !0 }));
  let h = o.current,
    [p, E] = j.useState({ action: h.action, location: h.location }),
    _ = j.useCallback(
      (b) => {
        j.startTransition(() => E(b));
      },
      [E]
    );
  return (
    j.useLayoutEffect(() => h.listen(_), [h, _]),
    j.createElement(Gu, {
      basename: c,
      children: f,
      location: p.location,
      navigationType: p.action,
      navigator: h,
    })
  );
}
var sl = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  C1 = j.forwardRef(function (
    {
      onClick: f,
      discover: C = "render",
      prefetch: o = "none",
      relative: h,
      reloadDocument: p,
      replace: E,
      state: _,
      target: b,
      to: m,
      preventScrollReset: A,
      viewTransition: N,
      ...R
    },
    z
  ) {
    let { basename: D } = j.useContext(B2),
      Q = typeof m == "string" && sl.test(m),
      V,
      U = !1;
    if (typeof m == "string" && Q && ((V = m), ul))
      try {
        let Y = new URL(window.location.href),
          a1 = m.startsWith("//") ? new URL(Y.protocol + m) : new URL(m),
          $1 = O3(a1.pathname, D);
        a1.origin === Y.origin && $1 != null
          ? (m = $1 + a1.search + a1.hash)
          : (U = !0);
      } catch {
        M2(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let K = wu(m, { relative: h }),
      [G, h1, P] = rs(o, R),
      w1 = gs(m, {
        replace: E,
        state: _,
        target: b,
        preventScrollReset: A,
        relative: h,
        viewTransition: N,
      });
    function Z1(Y) {
      f && f(Y), Y.defaultPrevented || w1(Y);
    }
    let Q1 = j.createElement("a", {
      ...R,
      ...P,
      href: V || K,
      onClick: U || p ? f : Z1,
      ref: ds(z, h1),
      target: b,
      "data-discover": !Q && C === "render" ? "true" : void 0,
    });
    return G && !Q
      ? j.createElement(j.Fragment, null, Q1, j.createElement(os, { page: K }))
      : Q1;
  });
C1.displayName = "Link";
var ms = j.forwardRef(function (
  {
    "aria-current": f = "page",
    caseSensitive: C = !1,
    className: o = "",
    end: h = !1,
    style: p,
    to: E,
    viewTransition: _,
    children: b,
    ...m
  },
  A
) {
  let N = Je(E, { relative: m.relative }),
    R = s3(),
    z = j.useContext(m5),
    { navigator: D, basename: Q } = j.useContext(B2),
    V = z != null && Ss(N) && _ === !0,
    U = D.encodeLocation ? D.encodeLocation(N).pathname : N.pathname,
    K = R.pathname,
    G =
      z && z.navigation && z.navigation.location
        ? z.navigation.location.pathname
        : null;
  C ||
    ((K = K.toLowerCase()),
    (G = G ? G.toLowerCase() : null),
    (U = U.toLowerCase())),
    G && Q && (G = O3(G, Q) || G);
  const h1 = U !== "/" && U.endsWith("/") ? U.length - 1 : U.length;
  let P = K === U || (!h && K.startsWith(U) && K.charAt(h1) === "/"),
    w1 =
      G != null &&
      (G === U || (!h && G.startsWith(U) && G.charAt(U.length) === "/")),
    Z1 = { isActive: P, isPending: w1, isTransitioning: V },
    Q1 = P ? f : void 0,
    Y;
  typeof o == "function"
    ? (Y = o(Z1))
    : (Y = [
        o,
        P ? "active" : null,
        w1 ? "pending" : null,
        V ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let a1 = typeof p == "function" ? p(Z1) : p;
  return j.createElement(
    C1,
    {
      ...m,
      "aria-current": Q1,
      className: Y,
      ref: A,
      style: a1,
      to: E,
      viewTransition: _,
    },
    typeof b == "function" ? b(Z1) : b
  );
});
ms.displayName = "NavLink";
var ps = j.forwardRef(
  (
    {
      discover: c = "render",
      fetcherKey: f,
      navigate: C,
      reloadDocument: o,
      replace: h,
      state: p,
      method: E = C5,
      action: _,
      onSubmit: b,
      relative: m,
      preventScrollReset: A,
      viewTransition: N,
      ...R
    },
    z
  ) => {
    let D = Hs(),
      Q = xs(_, { relative: m }),
      V = E.toLowerCase() === "get" ? "get" : "post",
      U = typeof _ == "string" && sl.test(_),
      K = (G) => {
        if ((b && b(G), G.defaultPrevented)) return;
        G.preventDefault();
        let h1 = G.nativeEvent.submitter,
          P = (h1 == null ? void 0 : h1.getAttribute("formmethod")) || E;
        D(h1 || G.currentTarget, {
          fetcherKey: f,
          method: P,
          navigate: C,
          replace: h,
          state: p,
          relative: m,
          preventScrollReset: A,
          viewTransition: N,
        });
      };
    return j.createElement("form", {
      ref: z,
      method: V,
      action: Q,
      onSubmit: o ? b : K,
      ...R,
      "data-discover": !U && c === "render" ? "true" : void 0,
    });
  }
);
ps.displayName = "Form";
function vs(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function cl(c) {
  let f = j.useContext(Z4);
  return E1(f, vs(c)), f;
}
function gs(
  c,
  {
    target: f,
    replace: C,
    state: o,
    preventScrollReset: h,
    relative: p,
    viewTransition: E,
  } = {}
) {
  let _ = al(),
    b = s3(),
    m = Je(c, { relative: p });
  return j.useCallback(
    (A) => {
      if ($u(A, f)) {
        A.preventDefault();
        let N = C !== void 0 ? C : Qe(b) === Qe(m);
        _(c, {
          replace: N,
          state: o,
          preventScrollReset: h,
          relative: p,
          viewTransition: E,
        });
      }
    },
    [b, _, m, C, o, f, c, h, p, E]
  );
}
var ys = 0,
  bs = () => `__${String(++ys)}__`;
function Hs() {
  let { router: c } = cl("useSubmit"),
    { basename: f } = j.useContext(B2),
    C = Bu();
  return j.useCallback(
    async (o, h = {}) => {
      let { action: p, method: E, encType: _, formData: b, body: m } = Pu(o, f);
      if (h.navigate === !1) {
        let A = h.fetcherKey || bs();
        await c.fetch(A, C, h.action || p, {
          preventScrollReset: h.preventScrollReset,
          formData: b,
          body: m,
          formMethod: h.method || E,
          formEncType: h.encType || _,
          flushSync: h.flushSync,
        });
      } else
        await c.navigate(h.action || p, {
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
    [c, f, C]
  );
}
function xs(c, { relative: f } = {}) {
  let { basename: C } = j.useContext(B2),
    o = j.useContext(u3);
  E1(o, "useFormAction must be used inside a RouteContext");
  let [h] = o.matches.slice(-1),
    p = { ...Je(c || ".", { relative: f }) },
    E = s3();
  if (c == null) {
    p.search = E.search;
    let _ = new URLSearchParams(p.search),
      b = _.getAll("index");
    if (b.some((A) => A === "")) {
      _.delete("index"),
        b.filter((N) => N).forEach((N) => _.append("index", N));
      let A = _.toString();
      p.search = A ? `?${A}` : "";
    }
  }
  return (
    (!c || c === ".") &&
      h.route.index &&
      (p.search = p.search ? p.search.replace(/^\?/, "?index&") : "?index"),
    C !== "/" && (p.pathname = p.pathname === "/" ? C : i3([C, p.pathname])),
    Qe(p)
  );
}
function Ss(c, f = {}) {
  let C = j.useContext(Ia);
  E1(
    C != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = cl("useViewTransitionState"),
    h = Je(c, { relative: f.relative });
  if (!C.isTransitioning) return !1;
  let p = O3(C.currentLocation.pathname, o) || C.currentLocation.pathname,
    E = O3(C.nextLocation.pathname, o) || C.nextLocation.pathname;
  return h5(h.pathname, E) != null || h5(h.pathname, p) != null;
}
new TextEncoder();
function Y4({}) {
  const [c, f] = j.useState(!1);
  function C() {
    f(!0);
  }
  function o() {
    f(!1);
  }
  return s.jsx("header", {
    className: D1.firstsection,
    children: s.jsxs("nav", {
      className: D1.nav,
      children: [
        s.jsx(C1, { to: "/", children: s.jsx(Ua, {}) }),
        s.jsxs("ul", {
          className: D1.navul,
          children: [
            s.jsx(C1, {
              to: "/",
              children: s.jsx("li", { className: D1.lists, children: "Home" }),
            }),
            s.jsx(C1, {
              to: "/aboutus",
              children: s.jsx("li", {
                className: D1.lists,
                children: "About Us",
              }),
            }),
            s.jsx(C1, {
              to: "/services",
              children: s.jsx("li", {
                className: D1.lists,
                children: "Services ",
              }),
            }),
            s.jsx(C1, {
              to: "/Articles",
              children: s.jsx("li", {
                className: D1.lists,
                children: "Articles",
              }),
            }),
            s.jsx(C1, {
              to: "/contactus",
              children: s.jsx("li", {
                className: D1.listcontact,
                children: "Book a Consultation",
              }),
            }),
            s.jsx("li", {
              className: D1.listmenu,
              onClick: C,
              children: s.jsx("a", {
                className: "dropdown",
                children: s.jsxs("svg", {
                  width: "27",
                  height: "26",
                  viewBox: "0 0 27 26",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    s.jsx("path", {
                      d: "M5.41882 18.4188L20.5915 18.4188",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
                      d: "M5.41882 13H20.5915",
                      stroke: "#2B2B2B",
                      strokeWidth: "2.16753",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                    s.jsx("path", {
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
        s.jsxs("div", {
          className: `${D1.sidebar} ${c ? D1.active : D1["fade-out"]}`,
          children: [
            s.jsxs("div", {
              className: D1.imageclose,
              children: [
                s.jsx(C1, { to: "/", children: s.jsx(Ua, {}) }),
                s.jsx("a", {
                  className: "dropdown-close",
                  onClick: o,
                  children: s.jsx("svg", {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: s.jsx("path", {
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
            s.jsxs("ul", {
              className: D1.sidebarmenu,
              children: [
                s.jsx(C1, {
                  to: "/",
                  children: s.jsxs("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      o();
                    },
                    children: ["Home", " "],
                  }),
                }),
                s.jsx("hr", {}),
                s.jsx(C1, {
                  to: "/aboutus",
                  children: s.jsx("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      o();
                    },
                    children: "About Us",
                  }),
                }),
                s.jsx("hr", {}),
                s.jsx(C1, {
                  to: "/services",
                  children: s.jsxs("li", {
                    className: D1.sidebarlist,
                    onClick: () => {
                      o();
                    },
                    children: ["Services", " "],
                  }),
                }),
                s.jsx("hr", {}),
                s.jsx(C1, {
                  to: "/Articles",
                  children: s.jsx("li", {
                    className: D1.sidebarlist,
                    children: "Articles ",
                  }),
                }),
                s.jsx("hr", {}),
                s.jsx(C1, {
                  to: "/contactus",
                  children: s.jsx("li", {
                    className: D1.sidebarcontact,
                    onClick: () => {
                      o();
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
const Es = "_advisory_1uhvt_5",
  _s = "_div_1uhvt_29",
  Ls = "_div2_1uhvt_81",
  Dt = { advisory: Es, div: _s, div2: Ls };
function js() {
  return s.jsxs("section", {
    className: Dt.advisory,
    children: [
      s.jsxs("div", {
        className: Dt.div,
        children: [
          s.jsxs("h2", {
            children: [
              "World-class Legal",
              s.jsx("br", {}),
              " Advisory, Tailored",
              s.jsx("br", {}),
              " To Local Needs.",
            ],
          }),
          s.jsx("span", {
            children: "Let us be your legal partner in Africa.",
          }),
        ],
      }),
      s.jsx(C1, {
        to: "/services",
        children: s.jsx("div", {
          className: Dt.div2,
          children: s.jsxs("span", {
            children: [
              "View Services",
              s.jsx("svg", {
                width: "32",
                height: "32",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: s.jsx("path", {
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
const ws = "_purpose_1s3nb_5",
  Ms = "_text_1s3nb_19",
  As = "_button_1s3nb_65",
  Ts = "_img_1s3nb_107",
  o5 = { purpose: ws, text: Ms, button: As, img: Ts },
  Rs = "./assets/Purpose-0rdKMhrl.png";
function Os() {
  return s.jsxs("section", {
    className: o5.purpose,
    children: [
      s.jsx("div", {
        className: o5.img,
        children: s.jsx("img", { src: Rs, alt: "" }),
      }),
      s.jsxs("div", {
        className: o5.text,
        children: [
          s.jsxs("div", {
            children: [
              s.jsx("label", { htmlFor: "", children: "About Our Law Firm" }),
              s.jsx("h2", { children: "Our Purpose" }),
            ],
          }),
          s.jsxs("p", {
            children: [
              "Roothe-Kharis & Partners exist to help corporates, SMEs and individuals navigate complexities, seize opportunities, and achieve their goals with confidence.",
              " ",
            ],
          }),
          " ",
          s.jsx("p", {
            children:
              "From boardrooms to the fields, we expertly deliver tailored legal solutions that drive progress, protect interests, and unlock possibilities.",
          }),
          s.jsx("p", {
            children:
              "Leveraging global standards, we provide local legal solutions!",
          }),
          s.jsxs(C1, {
            to: "/aboutus",
            children: [
              " ",
              s.jsxs("button", {
                className: o5.button,
                type: "button",
                children: [
                  "Read Full details",
                  s.jsx("svg", {
                    width: "32",
                    height: "32",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: s.jsx("path", {
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
const Ds = "_service_1e0t5_5",
  zs = "_background1_1e0t5_29",
  Ns = "_background2_1e0t5_41",
  Us = "_texts_1e0t5_55",
  Vs = "_services_1e0t5_105",
  Bs = "_one_1e0t5_121",
  qs = "_button_1e0t5_241",
  R3 = {
    service: Ds,
    background1: zs,
    background2: Ns,
    texts: Us,
    services: Vs,
    one: Bs,
    button: qs,
  },
  Zs = "./assets/Service1-InuAcJqG.png",
  Ys = "./assets/Service3-Bj2Nk7-U.png",
  Gs = "./assets/Service2-CGoK3-pK.png",
  Xs = "./assets/Service4-BrD7tEUK.png",
  Qs = "./assets/Service5-BKrdYtB5.png",
  Ks = "./assets/Service6-CCZ3F7ck.png",
  ks = "./assets/Service7-DJmbXASO.png",
  Js = [
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
function $s() {
  const c = {
    "service1.png": Zs,
    "service2.png": Ys,
    "service3.png": Gs,
    "service4.png": Xs,
    "service5.png": Qs,
    "service6.png": Ks,
    "service7.png": ks,
  };
  return s.jsx("div", {
    className: R3.background1,
    children: s.jsx("div", {
      className: R3.background2,
      children: s.jsx("div", {
        className: R3.background3,
        children: s.jsxs("section", {
          className: R3.service,
          children: [
            s.jsxs("div", {
              className: R3.texts,
              children: [
                s.jsx("label", {
                  htmlFor: "",
                  children: "Who are we servicing?",
                }),
                s.jsx("h2", { children: "Services We Provide" }),
                s.jsx("p", {
                  children:
                    "Roothe-Kharis & Partners specializes exclusively in transactional, advisory, and non-litigation services.",
                }),
              ],
            }),
            s.jsx("div", {
              className: R3.services,
              children: Js.map((f, C) =>
                s.jsxs(
                  "div",
                  {
                    className: R3.one,
                    children: [
                      s.jsx("img", { src: c[f.image], alt: f.title }),
                      s.jsxs("div", {
                        children: [
                          s.jsx("h2", { children: f.title }),
                          s.jsx("span", { children: f.description }),
                          s.jsx(C1, {
                            to: "/services",
                            state: {
                              serviceid:
                                f.title.split(" ")[0] || "Other Services",
                            },
                            children: s.jsxs("button", {
                              className: R3.button,
                              type: "button",
                              children: [
                                "Read full details",
                                s.jsx("svg", {
                                  width: "32",
                                  height: "32",
                                  viewBox: "0 0 16 16",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                  children: s.jsx("path", {
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
const Ws = "_faq_p164x_5",
  Fs = "_divs_p164x_35",
  Ps = "_extra_p164x_47",
  Is = "_active_p164x_67",
  ec = "_div_p164x_35",
  tc = "_svg_p164x_117",
  ac = "_rotate_p164x_145",
  a4 = {
    faq: Ws,
    divs: Fs,
    extra: Ps,
    active: Is,
    div: ec,
    svg: tc,
    rotate: ac,
  },
  lc = [
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
function nc() {
  const [c, f] = j.useState({ 1: !1, 2: !1, 3: !1, 4: !1 });
  function C(o) {
    f((h) => ({ ...h, [o]: !h[o] }));
  }
  return s.jsxs("section", {
    className: a4.faq,
    children: [
      s.jsx("h2", { children: "FAQs" }),
      s.jsx("div", {
        className: a4.divs,
        children: lc.map((o, h) =>
          s.jsxs(
            "div",
            {
              className: `${a4.extra} ${c[h] ? a4.active : ""}`,
              children: [
                s.jsxs("div", {
                  className: a4.div,
                  onClick: () => C(h),
                  children: [
                    s.jsx("span", { children: o.question }),
                    s.jsx("div", {
                      className: `${a4.svg} ${c[h] ? a4.rotate : ""}`,
                      children: s.jsx("svg", {
                        width: "11",
                        height: "19",
                        viewBox: "0 0 11 19",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: s.jsx("path", {
                          d: "M1.5 18L9.71927 9.74341L1.5 1.48682",
                          stroke: c[h] ? "#fff" : "#B8824F",
                          strokeWidth: "2",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                        }),
                      }),
                    }),
                  ],
                }),
                c[h] && s.jsx("p", { children: o.answer }),
              ],
            },
            h
          )
        ),
      }),
    ],
  });
}
const ic = "_bg_1731c_9",
  uc = "_footer_1731c_17",
  sc = "_uppist_1731c_49",
  cc = "_details_1731c_69",
  rc = "_footer2_1731c_173",
  oc = "_quicks_1731c_205",
  fc = "_connect_1731c_219",
  Cc = "_svg_1731c_315",
  dc = "_label_1731c_327",
  hc = "_footerlogo_1731c_377",
  mc = "_span_1731c_439",
  pc = "_design_1731c_591",
  x2 = {
    bg: ic,
    footer: uc,
    uppist: sc,
    details: cc,
    footer2: rc,
    quicks: oc,
    connect: fc,
    svg: Cc,
    label: dc,
    footerlogo: hc,
    span: mc,
    design: pc,
  };
function vc() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      className: x2.uppist,
      width: "472",
      height: "138",
      viewBox: "0 0 472 138",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsxs("g", {
          clipPath: "url(#clip0_16_344)",
          children: [
            s.jsx("path", {
              d: "M429.67 103.51C453.048 103.51 472 85.8657 472 64.1002C472 42.3346 453.048 24.6902 429.67 24.6902C406.292 24.6902 387.34 42.3346 387.34 64.1002C387.34 85.8657 406.292 103.51 429.67 103.51Z",
              fill: "#F89A1C",
            }),
            s.jsx("path", {
              d: "M429.75 61.7402C427.661 62.4977 425.393 62.6092 423.24 62.0602C420.912 61.455 418.858 60.0806 417.41 58.1602C419.146 59.6568 421.197 60.7436 423.41 61.3402C425.475 61.8992 427.631 62.0352 429.75 61.7402Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M438.88 55.05L418.17 58.3301C421.771 60.4511 425.827 61.6819 430 61.92C428.783 65.7001 428.979 69.7931 430.55 73.4401L438.88 55.05Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M430 61.9202C428.609 63.693 427.871 65.8911 427.911 68.1443C427.951 70.3974 428.767 72.5679 430.22 74.2902C429.246 72.3805 428.72 70.2739 428.682 68.1306C428.644 65.9872 429.095 63.8633 430 61.9202Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M415.73 74.0002C413.641 74.7577 411.373 74.8692 409.22 74.3202C406.894 73.7169 404.84 72.3463 403.39 70.4302C405.077 71.8644 407.05 72.9242 409.177 73.5397C411.304 74.1551 413.538 74.312 415.73 74.0002Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M424.86 67.28L404.15 70.55C407.736 72.6735 411.779 73.9079 415.94 74.15C414.724 77.9302 414.92 82.0229 416.49 85.67L424.86 67.28Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M415.94 74.1501C414.549 75.923 413.811 78.1211 413.851 80.3743C413.891 82.6274 414.707 84.7979 416.16 86.5201C415.186 84.6104 414.66 82.5039 414.622 80.3605C414.584 78.2172 415.034 76.0933 415.94 74.1501Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M444.2 49.58C442.115 50.3398 439.849 50.4514 437.7 49.9C435.371 49.2926 433.313 47.9188 431.86 46C433.615 47.4961 435.682 48.5824 437.91 49.18C439.959 49.7291 442.097 49.865 444.2 49.58Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M453.33 42.9001L432.62 46.1701C434.555 47.3113 436.629 48.1986 438.79 48.8101C440.623 49.3416 442.507 49.6768 444.41 49.8101C443.217 53.5829 443.427 57.6596 445 61.2901L453.33 42.9001Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M444.41 49.77C443.018 51.5405 442.279 53.7373 442.319 55.9892C442.36 58.2411 443.176 60.4102 444.63 62.13C443.656 60.2221 443.13 58.1172 443.092 55.9754C443.054 53.8337 443.505 51.7114 444.41 49.77Z",
              fill: "#561D5E",
            }),
            s.jsx("path", {
              d: "M64.251 85.4371C57.8783 91.0031 49.5697 93.7861 39.325 93.7861C29.0803 93.7861 20.7717 91.0031 14.399 85.4371C8.02633 79.8711 4.84 72.5708 4.84 63.5361V7.15009H29.04V60.8741C29.04 67.1661 32.4683 70.3121 39.325 70.3121C46.1817 70.3121 49.61 67.1661 49.61 60.8741V7.15009H73.81V63.5361C73.81 72.5708 70.6237 79.8711 64.251 85.4371ZM122.136 29.6561C130.284 29.6561 136.939 32.6811 142.101 38.7311C147.264 44.7811 149.845 52.4041 149.845 61.6001C149.845 70.7961 147.264 78.4191 142.101 84.4691C136.939 90.5191 130.284 93.5441 122.136 93.5441C115.199 93.5441 109.794 91.1644 105.922 86.4051V116.05H83.5373V31.3501H105.922V36.7951C109.794 32.0358 115.199 29.6561 122.136 29.6561ZM108.826 69.7071C110.843 71.8851 113.465 72.9741 116.691 72.9741C119.918 72.9741 122.499 71.8851 124.435 69.7071C126.452 67.5291 127.46 64.8268 127.46 61.6001C127.46 58.3734 126.452 55.6711 124.435 53.4931C122.499 51.3151 119.918 50.2261 116.691 50.2261C113.465 50.2261 110.843 51.3151 108.826 53.4931C106.89 55.6711 105.922 58.3734 105.922 61.6001C105.922 64.8268 106.89 67.5291 108.826 69.7071ZM195.516 29.6561C203.663 29.6561 210.318 32.6811 215.481 38.7311C220.644 44.7811 223.225 52.4041 223.225 61.6001C223.225 70.7961 220.644 78.4191 215.481 84.4691C210.318 90.5191 203.663 93.5441 195.516 93.5441C188.579 93.5441 183.174 91.1644 179.302 86.4051V116.05H156.917V31.3501H179.302V36.7951C183.174 32.0358 188.579 29.6561 195.516 29.6561ZM182.206 69.7071C184.223 71.8851 186.844 72.9741 190.071 72.9741C193.298 72.9741 195.879 71.8851 197.815 69.7071C199.832 67.5291 200.84 64.8268 200.84 61.6001C200.84 58.3734 199.832 55.6711 197.815 53.4931C195.879 51.3151 193.298 50.2261 190.071 50.2261C186.844 50.2261 184.223 51.3151 182.206 53.4931C180.27 55.6711 179.302 58.3734 179.302 61.6001C179.302 64.8268 180.27 67.5291 182.206 69.7071ZM241.55 26.7521C238.162 26.7521 235.218 25.5421 232.717 23.1221C230.297 20.6214 229.087 17.7174 229.087 14.4101C229.087 11.1028 230.297 8.23909 232.717 5.81909C235.218 3.31843 238.162 2.06809 241.55 2.06809C244.857 2.06809 247.721 3.31843 250.141 5.81909C252.642 8.23909 253.892 11.1028 253.892 14.4101C253.892 17.7174 252.642 20.6214 250.141 23.1221C247.721 25.5421 244.857 26.7521 241.55 26.7521ZM230.297 91.8501V31.3501H252.682V91.8501H230.297ZM283.978 49.1371C283.978 50.1051 284.704 50.8714 286.156 51.4361C287.689 52.0008 289.585 52.4444 291.843 52.7671C294.102 53.0091 296.522 53.5334 299.103 54.3401C301.685 55.1468 304.105 56.1551 306.363 57.3651C308.622 58.5751 310.477 60.5111 311.929 63.1731C313.462 65.7544 314.228 68.9004 314.228 72.6111C314.228 76.4831 313.341 79.8711 311.566 82.7751C309.872 85.6791 307.614 87.8571 304.79 89.3091C301.967 90.7611 299.063 91.8098 296.078 92.4551C293.174 93.1811 290.149 93.5441 287.003 93.5441C272.403 93.5441 262.965 88.7444 258.689 79.1451L278.17 70.4331C279.703 74.5471 282.567 76.6041 286.761 76.6041C289.504 76.6041 290.875 75.7168 290.875 73.9421C290.875 72.8934 289.867 72.0464 287.85 71.4011C285.834 70.7558 283.414 70.1104 280.59 69.4651C277.767 68.7391 274.903 67.8114 271.999 66.6821C269.176 65.4721 266.756 63.4958 264.739 60.7531C262.723 58.0104 261.714 54.5821 261.714 50.4681C261.714 43.8534 264.215 38.7311 269.216 35.1011C274.298 31.4711 280.147 29.6561 286.761 29.6561C299.991 29.6561 308.743 34.7784 313.018 45.0231L294.505 51.6781C293.053 48.2901 290.795 46.5961 287.729 46.5961C285.229 46.5961 283.978 47.4431 283.978 49.1371ZM359.086 52.6461H346.381V65.7141C346.381 67.7308 346.865 69.2231 347.833 70.1911C348.801 71.1591 350.213 71.7238 352.068 71.8851C354.004 71.9658 356.344 71.9254 359.086 71.7641V91.8501C346.422 93.6248 337.387 92.5358 331.982 88.5831C326.658 84.6304 323.996 77.4108 323.996 66.9241V52.6461H315.526V31.3501H323.996V21.0651L346.381 14.4101V31.3501H359.086V52.6461Z",
              fill: "#fff",
            }),
          ],
        }),
        s.jsx("defs", {
          children: s.jsx("clipPath", {
            id: "clip0_16_344",
            children: s.jsx("rect", {
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
function gc() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      className: x2.design,
      width: "70",
      height: "14",
      viewBox: "0 0 70 14",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsx("path", {
          d: "M64.2025 12.8283C64.0539 12.8283 63.91 12.8144 63.7707 12.7865C63.6407 12.7587 63.52 12.7262 63.4086 12.689L63.6314 11.7837C63.7057 11.8022 63.7893 11.8208 63.8822 11.8394C63.975 11.8672 64.0632 11.8812 64.1468 11.8812C64.5275 11.8812 64.8432 11.7419 65.0939 11.4633C65.3447 11.194 65.5397 10.8504 65.6789 10.4326L65.8322 9.93116L63.1161 3.14795H64.3L65.6789 6.89473C65.7811 7.18259 65.8879 7.49366 65.9993 7.82795C66.12 8.16223 66.2314 8.48723 66.3336 8.80295H66.3893C66.4914 8.49652 66.5889 8.17616 66.6818 7.84188C66.7747 7.50759 66.8675 7.19188 66.9604 6.89473L68.1722 3.14795H69.2864L66.7375 10.4744C66.5797 10.9201 66.3893 11.3194 66.1664 11.6722C65.9529 12.0251 65.6836 12.3037 65.3586 12.5079C65.0429 12.7215 64.6575 12.8283 64.2025 12.8283Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M59.4413 10.0843C59.1256 10.0843 58.7959 10.01 58.4524 9.86143C58.1181 9.70357 57.8024 9.49 57.5052 9.22071H57.4634L57.3659 9.91714H56.4467V0H57.5888V2.70214L57.5609 3.92786C57.8674 3.65857 58.2017 3.43571 58.5638 3.25929C58.9352 3.07357 59.3067 2.98071 59.6781 2.98071C60.5602 2.98071 61.2288 3.29179 61.6838 3.91393C62.1388 4.53607 62.3663 5.37179 62.3663 6.42107C62.3663 7.19179 62.227 7.85107 61.9484 8.39893C61.6792 8.94679 61.3217 9.36464 60.8759 9.6525C60.4395 9.94036 59.9613 10.0843 59.4413 10.0843ZM59.2463 9.12321C59.8034 9.12321 60.2631 8.88643 60.6252 8.41286C60.9967 7.93 61.1824 7.27071 61.1824 6.435C61.1824 5.69214 61.0431 5.09321 60.7645 4.63821C60.4952 4.17393 60.0402 3.94179 59.3995 3.94179C59.1117 3.94179 58.8192 4.02071 58.522 4.17857C58.2249 4.33643 57.9138 4.56393 57.5888 4.86107V8.41286C57.8859 8.67286 58.1784 8.85857 58.4663 8.97C58.7634 9.07214 59.0234 9.12321 59.2463 9.12321Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M48.2442 10.0843C47.3992 10.0843 46.7214 9.77786 46.2106 9.165C45.6999 8.54286 45.4446 7.67 45.4446 6.54643C45.4446 5.81286 45.5792 5.18143 45.8485 4.65214C46.1271 4.11357 46.4892 3.70036 46.9349 3.4125C47.3899 3.12464 47.8728 2.98071 48.3835 2.98071C48.7735 2.98071 49.1124 3.05036 49.4003 3.18964C49.6882 3.32893 49.9807 3.51929 50.2778 3.76071L50.2221 2.60464V0H51.3782V9.91714H50.431L50.3335 9.12321H50.2917C50.0317 9.38321 49.7253 9.61071 49.3724 9.80572C49.0196 9.99143 48.6435 10.0843 48.2442 10.0843ZM48.4949 9.12321C49.0892 9.12321 49.6649 8.81214 50.2221 8.19V4.65214C49.9342 4.39214 49.6557 4.21107 49.3864 4.10893C49.1264 3.9975 48.8571 3.94179 48.5785 3.94179C48.2164 3.94179 47.8867 4.05321 47.5896 4.27607C47.3017 4.48964 47.0696 4.79143 46.8931 5.18143C46.7167 5.56214 46.6285 6.0125 46.6285 6.5325C46.6285 7.34036 46.791 7.97643 47.116 8.44071C47.441 8.89571 47.9006 9.12321 48.4949 9.12321Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M41.7662 10.0845C41.1626 10.0845 40.6147 9.94524 40.1226 9.66667C39.6305 9.37882 39.2405 8.97024 38.9526 8.44096C38.6647 7.91167 38.5208 7.28024 38.5208 6.54667C38.5208 5.80381 38.6647 5.16774 38.9526 4.63846C39.2497 4.10917 39.6305 3.7006 40.0947 3.41274C40.559 3.12489 41.0465 2.98096 41.5572 2.98096C42.4208 2.98096 43.0847 3.26881 43.549 3.84453C44.0226 4.42024 44.2594 5.19096 44.2594 6.15667C44.2594 6.27739 44.2547 6.3981 44.2455 6.51881C44.2455 6.63024 44.2362 6.72774 44.2176 6.81131H39.649C39.6955 7.52631 39.9183 8.09739 40.3176 8.52453C40.7262 8.95167 41.2555 9.16524 41.9055 9.16524C42.2305 9.16524 42.5276 9.11881 42.7969 9.02596C43.0755 8.92381 43.3401 8.79381 43.5908 8.63596L43.9947 9.3881C43.7069 9.57381 43.3772 9.73631 43.0058 9.8756C42.6437 10.0149 42.2305 10.0845 41.7662 10.0845ZM39.6351 5.98953H43.2565C43.2565 5.30239 43.108 4.78239 42.8108 4.42953C42.523 4.06739 42.1144 3.88631 41.5851 3.88631C41.1115 3.88631 40.6844 4.07203 40.3037 4.44346C39.9322 4.8056 39.7094 5.32096 39.6351 5.98953Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M31.4052 9.91739V3.1481H32.3523L32.4498 4.1231H32.4916C32.8166 3.7981 33.1602 3.52881 33.5223 3.31524C33.8844 3.09239 34.2976 2.98096 34.7619 2.98096C35.4769 2.98096 35.9969 3.20846 36.3219 3.66346C36.6562 4.10917 36.8234 4.76381 36.8234 5.62739V9.91739H35.6812V5.7806C35.6812 5.14917 35.5791 4.68953 35.3748 4.40167C35.1705 4.11381 34.8455 3.96989 34.3998 3.96989C34.0562 3.96989 33.7451 4.0581 33.4666 4.23453C33.1973 4.41096 32.8909 4.67096 32.5473 5.01453V9.91739H31.4052Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M26.6708 13.0374C25.8444 13.0374 25.1712 12.8795 24.6512 12.5638C24.1312 12.2481 23.8712 11.7977 23.8712 11.2127C23.8712 10.9249 23.9594 10.6463 24.1358 10.377C24.3122 10.117 24.5537 9.88489 24.8601 9.6806V9.62489C24.6929 9.52274 24.549 9.37881 24.4283 9.1931C24.3169 9.00739 24.2612 8.78453 24.2612 8.52453C24.2612 8.23667 24.3401 7.98596 24.4979 7.77239C24.6558 7.55881 24.8229 7.39167 24.9994 7.27096V7.21524C24.7765 7.02953 24.5722 6.77882 24.3865 6.4631C24.2101 6.14739 24.1219 5.78989 24.1219 5.3906C24.1219 4.89846 24.2379 4.47131 24.4701 4.10917C24.7022 3.74703 25.0133 3.46846 25.4033 3.27346C25.7933 3.07846 26.2158 2.98096 26.6708 2.98096C26.8565 2.98096 27.0329 2.99953 27.2001 3.03667C27.3672 3.06453 27.5112 3.10167 27.6319 3.1481H29.9858V4.0256H28.5929C28.7508 4.17417 28.8808 4.37381 28.9829 4.62453C29.0944 4.86596 29.1501 5.1306 29.1501 5.41846C29.1501 5.90131 29.0387 6.31917 28.8158 6.67203C28.5929 7.02489 28.2958 7.29881 27.9244 7.49381C27.5529 7.67953 27.1351 7.77239 26.6708 7.77239C26.3087 7.77239 25.9697 7.69346 25.654 7.5356C25.5333 7.63774 25.4312 7.75381 25.3476 7.88381C25.264 8.00453 25.2222 8.15774 25.2222 8.34346C25.2222 8.55703 25.3058 8.73346 25.4729 8.87274C25.6494 9.01203 25.9651 9.08167 26.4201 9.08167H27.7294C28.5187 9.08167 29.1083 9.21167 29.4983 9.47167C29.8976 9.72239 30.0972 10.131 30.0972 10.6974C30.0972 11.1152 29.9579 11.5006 29.6794 11.8535C29.4008 12.2063 29.0062 12.4895 28.4954 12.7031C27.9847 12.926 27.3765 13.0374 26.6708 13.0374ZM26.6708 7.00631C27.0608 7.00631 27.3951 6.86239 27.6737 6.57453C27.9615 6.27739 28.1054 5.88274 28.1054 5.3906C28.1054 4.89846 27.9662 4.5131 27.6876 4.23453C27.409 3.95596 27.0701 3.81667 26.6708 3.81667C26.2715 3.81667 25.9326 3.95596 25.654 4.23453C25.3754 4.5131 25.2362 4.89846 25.2362 5.3906C25.2362 5.88274 25.3754 6.27739 25.654 6.57453C25.9419 6.86239 26.2808 7.00631 26.6708 7.00631ZM26.8379 12.2435C27.4879 12.2435 28.0079 12.0995 28.3979 11.8117C28.7879 11.5331 28.9829 11.2174 28.9829 10.8645C28.9829 10.5488 28.8622 10.3306 28.6208 10.2099C28.3887 10.0892 28.0544 10.0288 27.6179 10.0288H26.4479C26.3179 10.0288 26.174 10.0195 26.0162 10.001C25.8676 9.98239 25.719 9.95453 25.5704 9.91739C25.329 10.0938 25.1526 10.2795 25.0412 10.4745C24.9297 10.6695 24.874 10.8645 24.874 11.0595C24.874 11.4217 25.0458 11.7095 25.3894 11.9231C25.7422 12.1367 26.2251 12.2435 26.8379 12.2435Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M20.9587 9.91692V3.14763H22.1009V9.91692H20.9587ZM21.5437 1.75477C21.3209 1.75477 21.1351 1.68977 20.9866 1.55977C20.8473 1.42049 20.7776 1.23477 20.7776 1.00263C20.7776 0.779773 20.8473 0.598702 20.9866 0.459417C21.1351 0.320131 21.3209 0.250488 21.5437 0.250488C21.7666 0.250488 21.9476 0.320131 22.0869 0.459417C22.2355 0.598702 22.3098 0.779773 22.3098 1.00263C22.3098 1.23477 22.2355 1.42049 22.0869 1.55977C21.9476 1.68977 21.7666 1.75477 21.5437 1.75477Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M16.8922 10.0845C16.4094 10.0845 15.9497 9.99632 15.5133 9.81989C15.0769 9.63417 14.6962 9.41131 14.3712 9.15132L14.9422 8.38524C15.2394 8.61739 15.5458 8.81239 15.8615 8.97024C16.1772 9.11881 16.5347 9.1931 16.934 9.1931C17.3797 9.1931 17.714 9.09096 17.9369 8.88667C18.1597 8.6731 18.2712 8.42239 18.2712 8.13453C18.2712 7.90239 18.1922 7.70739 18.0344 7.54953C17.8858 7.39167 17.6908 7.26167 17.4494 7.15953C17.2172 7.0481 16.9758 6.94596 16.7251 6.8531C16.4094 6.73239 16.0983 6.59774 15.7919 6.44917C15.4854 6.29131 15.2347 6.09167 15.0397 5.85024C14.8447 5.59953 14.7472 5.28381 14.7472 4.9031C14.7472 4.35524 14.9515 3.90024 15.3601 3.5381C15.7779 3.16667 16.3537 2.98096 17.0872 2.98096C17.5051 2.98096 17.8951 3.05524 18.2572 3.20381C18.6194 3.35239 18.9304 3.53346 19.1904 3.74703L18.6333 4.47131C18.4012 4.29489 18.1597 4.15096 17.909 4.03953C17.6583 3.9281 17.3844 3.87239 17.0872 3.87239C16.6601 3.87239 16.3444 3.96989 16.1401 4.16489C15.9451 4.35989 15.8476 4.58739 15.8476 4.84739C15.8476 5.06096 15.9172 5.23739 16.0565 5.37667C16.1958 5.50667 16.3769 5.62274 16.5997 5.72489C16.8226 5.81774 17.0594 5.91524 17.3101 6.01739C17.6351 6.1381 17.9554 6.27739 18.2712 6.43524C18.5869 6.58381 18.8469 6.7881 19.0512 7.0481C19.2647 7.29881 19.3715 7.63774 19.3715 8.06489C19.3715 8.42703 19.274 8.76132 19.079 9.06774C18.8933 9.37417 18.6147 9.62024 18.2433 9.80596C17.8812 9.99167 17.4308 10.0845 16.8922 10.0845Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M10.9573 10.0845C10.3538 10.0845 9.8059 9.94524 9.31376 9.66667C8.82162 9.37882 8.43162 8.97024 8.14376 8.44096C7.8559 7.91167 7.71198 7.28024 7.71198 6.54667C7.71198 5.80381 7.8559 5.16774 8.14376 4.63846C8.4409 4.10917 8.82162 3.7006 9.2859 3.41274C9.75019 3.12489 10.2377 2.98096 10.7484 2.98096C11.612 2.98096 12.2759 3.26881 12.7402 3.84453C13.2138 4.42024 13.4505 5.19096 13.4505 6.15667C13.4505 6.27739 13.4459 6.3981 13.4366 6.51881C13.4366 6.63024 13.4273 6.72774 13.4088 6.81131H8.84019C8.88662 7.52631 9.10948 8.09739 9.50876 8.52453C9.91733 8.95167 10.4466 9.16524 11.0966 9.16524C11.4216 9.16524 11.7188 9.11881 11.988 9.02596C12.2666 8.92381 12.5313 8.79381 12.782 8.63596L13.1859 9.3881C12.898 9.57381 12.5684 9.73631 12.197 9.8756C11.8348 10.0149 11.4216 10.0845 10.9573 10.0845ZM8.82626 5.98953H12.4477C12.4477 5.30239 12.2991 4.78239 12.002 4.42953C11.7141 4.06739 11.3055 3.88631 10.7763 3.88631C10.3027 3.88631 9.87555 4.07203 9.49483 4.44346C9.1234 4.8056 8.90055 5.32096 8.82626 5.98953Z",
          fill: "#ffffff",
        }),
        s.jsx("path", {
          d: "M2.79964 10.0843C1.95464 10.0843 1.27679 9.77786 0.766072 9.165C0.255357 8.54286 0 7.67 0 6.54643C0 5.81286 0.134643 5.18143 0.403929 4.65214C0.6825 4.11357 1.04464 3.70036 1.49036 3.4125C1.94536 3.12464 2.42821 2.98071 2.93893 2.98071C3.32893 2.98071 3.66786 3.05036 3.95571 3.18964C4.24357 3.32893 4.53607 3.51929 4.83321 3.76071L4.7775 2.60464V0H5.93357V9.91714H4.98643L4.88893 9.12321H4.84714C4.58714 9.38321 4.28071 9.61071 3.92786 9.80572C3.575 9.99143 3.19893 10.0843 2.79964 10.0843ZM3.05036 9.12321C3.64464 9.12321 4.22036 8.81214 4.7775 8.19V4.65214C4.48964 4.39214 4.21107 4.21107 3.94179 4.10893C3.68179 3.9975 3.4125 3.94179 3.13393 3.94179C2.77179 3.94179 2.44214 4.05321 2.145 4.27607C1.85714 4.48964 1.625 4.79143 1.44857 5.18143C1.27214 5.56214 1.18393 6.0125 1.18393 6.5325C1.18393 7.34036 1.34643 7.97643 1.67143 8.44071C1.99643 8.89571 2.45607 9.12321 3.05036 9.12321Z",
          fill: "#ffffff",
        }),
      ],
    }),
  });
}
function yc() {
  return s.jsx(s.Fragment, {
    children: s.jsxs("svg", {
      width: "139",
      height: "43",
      viewBox: "0 0 139 43",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        s.jsx("path", {
          d: "M22.5 2.22998L41.9856 12.1157V31.8872L22.5 41.7729L3.01443 31.8872V12.1157L22.5 2.22998Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M22.4906 42.6143L1 32.097V11.0647L22.4906 0.547363L43.9839 11.0647V32.097L22.4906 42.6143ZM2.9127 31.1665L22.4906 40.7463L42.0712 31.1665V11.9999L22.4906 2.41774L2.9127 11.9999V31.1665Z",
          fill: "#B8824F",
        }),
        s.jsx("path", {
          d: "M27.6434 18.4795C27.6399 18.5533 27.6229 18.6261 27.593 18.6955C27.5369 18.6955 27.4473 18.6955 27.3297 18.6955L26.9461 18.7097L26.5624 18.724H26.2824C25.9997 18.7308 25.7172 18.706 25.4422 18.6504C25.2295 18.597 25.0366 18.4981 24.8821 18.3632C24.7074 18.2072 24.5428 18.0431 24.3893 17.8718C24.1708 17.6345 23.93 17.371 23.6639 17.0625L22.8238 16.0893C22.5298 15.7475 22.2637 15.4199 21.9837 15.1066C21.7036 14.7933 21.502 14.5132 21.3032 14.2616C21.1043 14.01 20.9615 13.8391 20.8831 13.7299C20.8891 13.6435 20.9118 13.5585 20.9503 13.4783C20.9889 13.4111 21.041 13.35 21.1043 13.298C21.499 13.255 21.8868 13.1754 22.2609 13.0606C22.5993 12.9566 22.916 12.8076 23.1991 12.6191C23.4572 12.444 23.669 12.2248 23.8208 11.9759C23.9779 11.7127 24.0567 11.421 24.0504 11.1261C24.0619 10.8164 23.992 10.5083 23.846 10.2242C23.7196 9.99041 23.5272 9.78661 23.2859 9.63077C23.0441 9.47808 22.7691 9.36756 22.4766 9.30559C22.1598 9.23804 21.8342 9.20454 21.5076 9.2059H21.166L20.7907 9.22014C20.6675 9.22014 20.5471 9.23201 20.435 9.24151C20.323 9.251 20.2306 9.26049 20.155 9.26999L20.1214 9.90611C20.1214 10.0984 20.1018 10.3215 20.0962 10.5778C20.0906 10.8342 20.0962 11.1 20.0962 11.3777L20.0626 15.4128C20.0626 15.4793 20.0626 15.6375 20.0626 15.8875C20.0626 16.1249 20.0626 16.405 20.0626 16.6874C20.0626 16.9699 20.0794 17.231 20.0962 17.4683C20.0872 17.6095 20.1189 17.7505 20.1886 17.879C20.3706 18.0332 20.7683 18.1519 21.3816 18.2397C21.4002 18.3108 21.4115 18.3831 21.4152 18.4557C21.4176 18.4897 21.4176 18.5238 21.4152 18.5578C21.4152 18.5958 21.4068 18.6385 21.39 18.686H20.9139C20.6983 18.686 20.4434 18.686 20.1466 18.6717C19.8497 18.6575 19.5865 18.6575 19.3065 18.6575C19.0264 18.6575 18.7744 18.6575 18.4887 18.6717C18.2031 18.686 17.9567 18.686 17.741 18.686H17.2425C17.2313 18.6385 17.2229 18.5958 17.2173 18.5578C17.2149 18.5238 17.2149 18.4897 17.2173 18.4557C17.2211 18.3831 17.2323 18.3108 17.2509 18.2397C17.853 18.1519 18.2395 18.038 18.4103 17.8932C18.4817 17.765 18.5163 17.6243 18.5111 17.4826C18.5363 17.2452 18.5531 16.9865 18.5643 16.7017C18.5755 16.4168 18.5811 16.151 18.5811 15.9018V15.4199L18.6316 11.3848V10.9671C18.6316 10.7701 18.6316 10.5683 18.6148 10.3595C18.598 10.1506 18.5895 9.96307 18.5727 9.7898C18.5755 9.68468 18.5487 9.58052 18.4943 9.48598C18.369 9.39402 18.2205 9.32746 18.0603 9.29135C17.8614 9.23913 17.615 9.18929 17.321 9.13944C17.302 9.06847 17.2907 8.99617 17.2873 8.92345C17.285 8.89025 17.285 8.85695 17.2873 8.82376C17.2873 8.7834 17.2873 8.74068 17.3125 8.69321H17.559C17.6654 8.69321 17.783 8.69321 17.909 8.67897H18.1219C18.2025 8.67912 18.2829 8.67436 18.3627 8.66473L19.2645 8.62912L20.253 8.58402L21.1884 8.54842C21.4852 8.54842 21.7484 8.53418 21.9557 8.53418C22.3858 8.53479 22.8153 8.56096 23.2411 8.61251C23.6628 8.66201 24.0701 8.77708 24.4425 8.95193C24.8101 9.12889 25.1178 9.38311 25.3358 9.69011C25.5901 10.0774 25.7113 10.5173 25.6859 10.96C25.695 11.282 25.625 11.6021 25.4804 11.9C25.3357 12.1979 25.1196 12.467 24.8457 12.6903C24.2192 13.1817 23.4309 13.4996 22.5858 13.6018C22.6754 13.7252 22.8182 13.9056 23.0114 14.1429C23.2047 14.3803 23.4231 14.639 23.6667 14.9215C23.9104 15.2039 24.1652 15.5006 24.4341 15.8092C24.7029 16.1178 24.9549 16.4073 25.1986 16.6756C25.4422 16.9438 25.6663 17.1811 25.8651 17.3876C26.0037 17.5356 26.1544 17.6752 26.316 17.8054C26.4781 17.9286 26.6545 18.0375 26.8424 18.1306C26.9919 18.208 27.1629 18.2506 27.3381 18.254H27.6042C27.6203 18.2867 27.6315 18.321 27.6378 18.3561C27.6442 18.397 27.6461 18.4383 27.6434 18.4795Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M21.5552 24.8809C21.5516 24.9536 21.5404 25.0259 21.5216 25.0969C21.2248 25.1468 20.9783 25.1943 20.7795 25.2417C20.6189 25.2733 20.4699 25.3377 20.3454 25.4292C20.2972 25.4966 20.2711 25.5736 20.2698 25.6524C20.253 25.7742 20.239 25.9237 20.2278 26.101C20.2166 26.2782 20.2082 26.4728 20.2026 26.6849C20.2026 26.8985 20.2026 27.105 20.2026 27.3067L20.1662 31.3418V32.042C20.1662 32.315 20.1662 32.5808 20.1662 32.8348C20.1662 33.0888 20.1858 33.3095 20.211 33.5137C20.2088 33.6369 20.2435 33.7585 20.3118 33.8673C20.4376 33.9643 20.5895 34.0336 20.7543 34.0691C20.9475 34.1165 21.18 34.1664 21.4544 34.2139C21.4732 34.2849 21.4844 34.3571 21.488 34.4299C21.4903 34.4638 21.4903 34.4979 21.488 34.5319C21.488 34.5699 21.4796 34.6126 21.4628 34.6601H20.9755C20.7608 34.6601 20.5088 34.6553 20.2194 34.6459C19.9394 34.6459 19.6593 34.6316 19.3933 34.6316C19.1272 34.6316 18.8584 34.6316 18.5756 34.6459C18.2927 34.6601 18.0407 34.6601 17.825 34.6601H17.349C17.3378 34.6126 17.3294 34.5699 17.3238 34.5319C17.3214 34.4979 17.3214 34.4638 17.3238 34.4299C17.3273 34.3571 17.3386 34.2849 17.3574 34.2139C17.6069 34.1748 17.8537 34.1241 18.0967 34.0619C18.258 34.0263 18.4074 33.9597 18.5335 33.8673C18.5878 33.7653 18.6137 33.654 18.6092 33.5421C18.626 33.3546 18.6428 33.1315 18.6596 32.8704C18.6764 32.6093 18.6876 32.3411 18.6932 32.0634C18.6988 31.7857 18.6932 31.5436 18.6932 31.3513L18.7268 27.3162C18.7268 27.105 18.7268 26.8914 18.7268 26.6801C18.7268 26.4689 18.7128 26.2766 18.7016 26.1033C18.6937 25.9579 18.6769 25.8129 18.6512 25.669C18.645 25.5921 18.6161 25.5178 18.5672 25.453C18.4417 25.3571 18.2894 25.2901 18.1247 25.2583C17.9315 25.2156 17.6962 25.1705 17.4246 25.1207C17.4058 25.0497 17.3945 24.9774 17.391 24.9047C17.3886 24.8715 17.3886 24.8382 17.391 24.805C17.391 24.7646 17.391 24.7219 17.4162 24.6744H17.8922C18.1079 24.6744 18.3627 24.6744 18.6512 24.6887C18.9396 24.7029 19.2113 24.7029 19.4913 24.7029C19.7713 24.7029 20.0262 24.7029 20.309 24.6887C20.5919 24.6744 20.8439 24.6744 21.0595 24.6744H21.5356C21.5356 24.7219 21.5552 24.7646 21.5608 24.805C21.5603 24.8304 21.5585 24.8557 21.5552 24.8809ZM27.551 34.4227C27.5533 34.4567 27.5533 34.4908 27.551 34.5248C27.551 34.5628 27.5426 34.6055 27.5258 34.653H27.2457L26.8705 34.6672L26.4616 34.6838H26.0891C25.815 34.69 25.5416 34.6579 25.2798 34.5889C25.1064 34.5446 24.9467 34.4684 24.8121 34.3658C24.687 34.2597 24.5003 34.0794 24.252 33.8246C24.0084 33.5682 23.7368 33.2787 23.4427 32.9511C23.1487 32.6236 22.8406 32.2794 22.5242 31.9186C22.2077 31.5578 21.9109 31.2184 21.6364 30.9003L20.9307 30.072C20.7319 29.8346 20.5975 29.6732 20.5303 29.5972L23.5799 26.6374C23.8292 26.4 24.0476 26.1627 24.2352 25.9657C24.3731 25.8431 24.4698 25.6915 24.5153 25.5266C24.5151 25.4598 24.4905 25.3947 24.4448 25.3403C24.3992 25.2859 24.3348 25.2448 24.2604 25.2227C24.077 25.1526 23.8811 25.1085 23.6808 25.0922C23.6591 25.0216 23.6478 24.9491 23.6471 24.8762C23.6465 24.7962 23.6578 24.7164 23.6808 24.6388H24.2772H24.5741C24.7048 24.6388 24.8476 24.6388 25.0026 24.6388H25.4702H25.8959C26.1237 24.6388 26.3421 24.6341 26.5512 24.6246C26.7612 24.6246 26.9293 24.6104 27.0525 24.6104H27.4445C27.4592 24.6378 27.4704 24.6664 27.4781 24.6958C27.4907 24.7385 27.4973 24.7823 27.4978 24.8263C27.4971 24.8727 27.4905 24.9189 27.4781 24.964C27.4711 24.9958 27.4598 25.0269 27.4445 25.0566C27.2177 25.0969 27.0301 25.1325 26.8845 25.1658C26.7159 25.208 26.5569 25.2738 26.414 25.3604C26.2052 25.4905 26.0094 25.635 25.8287 25.7924C25.5991 25.987 25.2938 26.2671 24.9073 26.6018L22.0649 29.2673C22.1349 29.3433 22.2581 29.4881 22.4402 29.6993C22.6222 29.9106 22.8406 30.174 23.0955 30.4517C23.3503 30.7294 23.6275 31.0499 23.9216 31.3822C24.2156 31.7145 24.5097 32.0373 24.8009 32.3482C25.0922 32.6592 25.361 32.9487 25.6187 33.2075C25.8763 33.4662 26.0863 33.6703 26.2572 33.8151C26.3982 33.9335 26.562 34.0306 26.7416 34.1023C26.9299 34.1803 27.137 34.2202 27.3465 34.2186H27.5174C27.5353 34.2857 27.5466 34.354 27.551 34.4227Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M28.8308 21.5083H16.0356V21.8833H28.8308V21.5083Z",
          fill: "#243D81",
        }),
        s.jsx("path", {
          d: "M59.1343 20.3144C59.1372 20.354 59.1372 20.3936 59.1343 20.4331C59.1277 20.4679 59.1174 20.502 59.1035 20.5352L58.5434 20.547H57.8993C57.7094 20.5541 57.5195 20.5316 57.3392 20.4806C57.1847 20.4268 57.0454 20.3459 56.9303 20.2432C56.8767 20.1993 56.8297 20.1498 56.7903 20.0961C56.7259 20.013 56.6503 19.9109 56.5635 19.7875L56.2834 19.384C56.1789 19.2368 56.0753 19.0873 55.9726 18.9354C55.7318 18.5794 55.4629 18.183 55.1661 17.7486C55.1668 17.6751 55.1877 17.6028 55.2271 17.5373C55.2664 17.4718 55.3232 17.4149 55.3929 17.3712C55.5945 17.3327 55.7907 17.2762 55.9782 17.2027C56.1506 17.1397 56.3095 17.0531 56.4487 16.9463C56.5709 16.8395 56.6662 16.7127 56.7287 16.5737C56.8053 16.409 56.8424 16.2331 56.8379 16.0562C56.8495 15.9141 56.8251 15.7714 56.7661 15.6379C56.7072 15.5045 56.6151 15.3833 56.4962 15.2825C56.3773 15.1817 56.2343 15.1037 56.0769 15.0537C55.9194 15.0038 55.7511 14.983 55.5833 14.9929C55.5413 14.9929 55.4797 14.9929 55.3929 14.9929H55.1269C55.0373 14.9929 54.9532 14.9929 54.8692 15.0071H54.6928C54.6928 15.1187 54.6928 15.2445 54.6928 15.3489C54.6928 15.4533 54.6928 15.5602 54.6928 15.6836V16.0349L54.662 18.7479C54.662 18.8594 54.662 18.971 54.662 19.0849C54.662 19.1989 54.662 19.308 54.6844 19.4101C54.6918 19.5056 54.7106 19.6002 54.7404 19.6926C54.76 19.7641 54.8038 19.8293 54.8664 19.8801C54.919 19.9263 54.9772 19.9677 55.0401 20.0035C55.136 20.0468 55.2423 20.0712 55.3509 20.0747C55.3664 20.1066 55.3768 20.1401 55.3817 20.1744C55.3966 20.253 55.3966 20.3331 55.3817 20.4118C55.3764 20.4467 55.3661 20.481 55.3509 20.5138H55.0709C54.886 20.5138 54.6788 20.5138 54.4548 20.5138C54.2307 20.5138 54.0487 20.5138 53.9115 20.5138C53.7743 20.5138 53.581 20.5138 53.3766 20.5138C53.1722 20.5138 52.9845 20.5138 52.8165 20.5138H52.402C52.3868 20.481 52.3765 20.4467 52.3712 20.4118C52.3563 20.3331 52.3563 20.253 52.3712 20.1744C52.3761 20.1401 52.3865 20.1066 52.402 20.0747C52.6223 20.0702 52.8339 20.0014 53.0013 19.8801C53.0578 19.8261 53.0989 19.762 53.1218 19.6926C53.1535 19.6004 53.1741 19.5058 53.1834 19.4101C53.1834 19.308 53.2002 19.1989 53.203 19.0849C53.2058 18.971 53.203 18.8476 53.203 18.7479L53.2254 16.061C53.2254 15.8379 53.2254 15.629 53.2254 15.4367C53.2345 15.2834 53.1755 15.1326 53.0601 15.0142C52.9945 14.963 52.9187 14.922 52.8361 14.8932C52.7228 14.8535 52.6027 14.8294 52.4805 14.822C52.4652 14.789 52.454 14.7548 52.4468 14.7199C52.4439 14.6804 52.4439 14.6408 52.4468 14.6012C52.444 14.5262 52.4613 14.4515 52.4973 14.3829H53.0573L53.8135 14.3662L54.69 14.3473L55.5301 14.3306H56.1378C56.4336 14.3289 56.7287 14.356 57.0172 14.4113C57.2788 14.4579 57.5271 14.5474 57.7481 14.6748C57.9589 14.7955 58.1311 14.9586 58.2494 15.1495C58.3821 15.3755 58.4466 15.6259 58.437 15.8782C58.4383 16.0796 58.3946 16.2793 58.3082 16.4669C58.2228 16.6462 58.1016 16.8116 57.9497 16.9558C57.7948 17.1007 57.6132 17.2234 57.412 17.319C57.204 17.4224 56.9809 17.5022 56.7483 17.5563C57.0284 17.9598 57.2888 18.3278 57.524 18.6553L57.7901 19.0612L58.0701 19.4433C58.1569 19.562 58.2326 19.6617 58.2998 19.7424C58.3411 19.8006 58.3909 19.854 58.4482 19.9014C58.5103 19.9588 58.5855 20.0048 58.6693 20.0366C58.7531 20.0684 58.8437 20.0854 58.9355 20.0866H59.0923C59.1065 20.1188 59.1169 20.1522 59.1231 20.1863C59.1302 20.2287 59.134 20.2715 59.1343 20.3144Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M67.0091 17.3115C67.0136 17.7664 66.9078 18.2172 66.6983 18.636C66.5016 19.0344 66.2164 19.397 65.8581 19.7041C65.4978 20.0098 65.0695 20.2518 64.598 20.4162C64.1048 20.587 63.5765 20.6733 63.0437 20.6701C62.5639 20.6772 62.0875 20.6012 61.6435 20.447C61.2457 20.3048 60.8886 20.0919 60.5961 19.8228C60.3038 19.5478 60.0816 19.2245 59.9436 18.8733C59.7913 18.4781 59.7165 18.0643 59.7224 17.6486C59.7151 17.1801 59.8189 16.7152 60.0276 16.2814C60.218 15.8837 60.5023 15.5232 60.863 15.2219C61.2237 14.9207 61.6532 14.6851 62.1252 14.5297C62.6206 14.3671 63.1482 14.2865 63.6794 14.2923C64.1588 14.2864 64.6348 14.3614 65.0796 14.5131C65.4788 14.6509 65.8366 14.8626 66.127 15.1326C66.4179 15.4084 66.6399 15.7314 66.7795 16.082C66.9351 16.4784 67.0126 16.8938 67.0091 17.3115ZM65.4633 17.4065C65.4645 17.1042 65.4174 16.8032 65.3233 16.5116C65.2367 16.236 65.0966 15.9745 64.9088 15.7378C64.7302 15.5084 64.4928 15.3161 64.2143 15.1753C63.9184 15.028 63.58 14.9532 63.2369 14.9593C63.0332 14.9626 62.8309 14.9882 62.6348 15.0353C62.4567 15.0703 62.2859 15.128 62.128 15.2061C61.8608 15.4847 61.6507 15.7992 61.5063 16.1366C61.3231 16.5948 61.2387 17.0772 61.257 17.5607C61.2562 17.8658 61.3013 18.1697 61.3914 18.4651C61.4748 18.7439 61.615 19.0082 61.8059 19.246C61.9913 19.461 62.2279 19.6405 62.5004 19.7729C62.7959 19.9186 63.1333 19.9917 63.475 19.9842C63.6795 19.9816 63.8828 19.9569 64.0799 19.9106C64.2599 19.8758 64.4327 19.8182 64.5924 19.7397C64.7224 19.611 64.8386 19.4728 64.9396 19.3267C65.0546 19.1657 65.1485 18.9946 65.2196 18.8164C65.3022 18.6109 65.3632 18.3996 65.4017 18.185C65.4469 17.9249 65.4675 17.6622 65.4633 17.3993V17.4065Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M75.4217 17.3115C75.4261 17.7664 75.3203 18.2172 75.1108 18.636C74.9141 19.0344 74.6289 19.397 74.2707 19.7041C73.9109 20.0092 73.4836 20.2512 73.0133 20.4162C72.5199 20.5865 71.9918 20.6728 71.459 20.6701C70.9793 20.6771 70.5028 20.6012 70.0588 20.447C69.6619 20.3048 69.3057 20.0919 69.0143 19.8228C68.721 19.5483 68.4987 19.2249 68.3617 18.8733C68.2084 18.4782 68.1328 18.0645 68.1377 17.6486C68.1319 17.1802 68.2356 16.7155 68.443 16.2814C68.6334 15.8833 68.918 15.5225 69.2792 15.2213C69.6404 14.92 70.0706 14.6846 70.5433 14.5297C71.0386 14.3667 71.5663 14.2861 72.0975 14.2923C72.5769 14.2866 73.0529 14.3616 73.4978 14.5131C73.8961 14.651 74.253 14.8626 74.5423 15.1326C74.8341 15.4083 75.057 15.7313 75.1976 16.082C75.3512 16.4787 75.4269 16.894 75.4217 17.3115ZM73.8786 17.4065C73.8785 17.1043 73.8314 16.8034 73.7386 16.5116C73.6497 16.2367 73.5098 15.9755 73.3241 15.7378C73.1448 15.5089 72.9076 15.3167 72.6296 15.1753C72.3325 15.0283 71.9934 14.9535 71.6495 14.9593C71.4467 14.9625 71.2452 14.988 71.0502 15.0353C70.8712 15.0704 70.6994 15.128 70.5405 15.2062C70.2734 15.4847 70.0632 15.7992 69.9188 16.1366C69.7357 16.5948 69.6512 17.0772 69.6696 17.5607C69.6682 17.866 69.7144 18.1701 69.8068 18.4651C69.8889 18.7442 70.0293 19.0087 70.2212 19.246C70.4058 19.4607 70.6414 19.6402 70.9129 19.7729C71.2084 19.9186 71.5458 19.9917 71.8875 19.9842C72.0929 19.9814 72.2971 19.9567 72.4952 19.9106C72.6752 19.8758 72.848 19.8182 73.0077 19.7397C73.1367 19.6104 73.2529 19.4723 73.3549 19.3267C73.4688 19.1652 73.5626 18.9942 73.635 18.8164C73.7162 18.6106 73.7771 18.3994 73.817 18.185C73.8622 17.9249 73.8828 17.6622 73.8786 17.3993V17.4065Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M81.619 15.7052C81.5781 15.7173 81.5359 15.726 81.493 15.7313C81.4445 15.7338 81.3959 15.7338 81.3474 15.7313C81.2634 15.7348 81.1795 15.7235 81.1009 15.6981C81.0751 15.5751 81.0259 15.4565 80.9553 15.3468C80.9011 15.2646 80.8205 15.1972 80.7229 15.1522C80.6164 15.1091 80.5016 15.0825 80.384 15.0739C80.2296 15.0606 80.0744 15.0543 79.9191 15.0549H79.7847C79.74 15.0571 79.6951 15.0571 79.6503 15.0549C79.5981 15.0586 79.5457 15.0586 79.4935 15.0549C79.4935 15.1427 79.4935 15.24 79.4935 15.3445C79.4935 15.4489 79.4935 15.5296 79.4935 15.6388V15.9758L79.4627 18.7339C79.4627 18.8455 79.4627 18.957 79.4627 19.0733C79.4664 19.183 79.4776 19.2924 79.4963 19.4009C79.5108 19.4978 79.5333 19.5938 79.5635 19.6881C79.581 19.7598 79.624 19.8252 79.6867 19.8756C79.8549 19.9975 80.0676 20.0663 80.2888 20.0702C80.3018 20.1028 80.312 20.1361 80.3196 20.1699C80.3308 20.2488 80.3308 20.3285 80.3196 20.4073C80.3117 20.4418 80.3014 20.4759 80.2888 20.5094H80.0088C79.8211 20.5094 79.6391 20.5094 79.4487 20.5094C79.2582 20.5094 79.0342 20.5094 78.743 20.5094C78.4517 20.5094 78.2165 20.5094 78.0176 20.5094C77.8188 20.5094 77.6312 20.5094 77.4576 20.5094H77.2083C77.1944 20.4762 77.1841 20.442 77.1775 20.4073C77.1663 20.3285 77.1663 20.2488 77.1775 20.1699C77.1838 20.1359 77.1941 20.1025 77.2083 20.0702C77.4295 20.0663 77.6423 19.9975 77.8104 19.8756C77.9304 19.7475 77.9947 19.5882 77.9924 19.4246C78.0092 19.211 78.0176 18.9832 78.0176 18.7434L78.0373 15.9758C78.0373 15.8595 78.0373 15.7385 78.0373 15.6388C78.0373 15.5391 78.0373 15.4323 78.0373 15.3445C78.0373 15.2566 78.0373 15.1427 78.0373 15.0549C77.9851 15.0586 77.9326 15.0586 77.8804 15.0549C77.8347 15.0571 77.7889 15.0571 77.7432 15.0549H77.6116C77.4563 15.0543 77.3012 15.0606 77.1467 15.0739C77.0282 15.0825 76.9125 15.1091 76.8051 15.1522C76.7036 15.196 76.619 15.2636 76.5614 15.3468C76.4846 15.4555 76.4297 15.5742 76.399 15.6981C76.3204 15.7235 76.2365 15.7348 76.1526 15.7313C76.1041 15.7338 76.0554 15.7338 76.0069 15.7313C75.964 15.7263 75.9218 15.7175 75.8809 15.7052L75.9229 14.395H76.161H76.4634H76.7687H80.7873H81.0925H81.395H81.633L81.619 15.7052Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M89.4939 14.6229C89.4969 14.6624 89.4969 14.702 89.4939 14.7416C89.4876 14.7764 89.4773 14.8106 89.4631 14.8436C89.2425 14.8481 89.0302 14.9159 88.861 15.0359C88.7443 15.1537 88.6852 15.3048 88.6957 15.4584C88.6957 15.6506 88.6957 15.8595 88.6957 16.0826L88.6537 18.7695C88.6537 18.8811 88.6537 18.9926 88.6537 19.1066C88.6537 19.2205 88.6537 19.3297 88.6733 19.4318C88.6831 19.5272 88.7027 19.6217 88.7321 19.7142C88.7508 19.7856 88.7936 19.8507 88.8554 19.9017C88.9214 19.9543 88.9983 19.9962 89.0822 20.0252C89.1985 20.0645 89.3213 20.0886 89.4462 20.0964C89.4618 20.1283 89.4721 20.1618 89.4771 20.196C89.492 20.2747 89.492 20.3548 89.4771 20.4334C89.4718 20.4684 89.4614 20.5027 89.4462 20.5355H89.0738C88.8862 20.5355 88.6817 20.5355 88.4577 20.5355C88.2337 20.5355 88.0516 20.5355 87.9116 20.5355C87.7716 20.5355 87.584 20.5355 87.3795 20.5355C87.1751 20.5355 86.9875 20.5355 86.8194 20.5355H86.405C86.3911 20.5023 86.3808 20.4681 86.3742 20.4334C86.3592 20.3548 86.3592 20.2747 86.3742 20.196C86.3804 20.162 86.3907 20.1286 86.405 20.0964C86.626 20.0918 86.8386 20.0231 87.0071 19.9017C87.063 19.8478 87.1033 19.7836 87.1247 19.7142C87.1574 19.6221 87.1789 19.5275 87.1891 19.4318C87.1891 19.3297 87.2059 19.2205 87.2087 19.1066C87.2115 18.9926 87.2087 18.8692 87.2087 18.7695V17.7062H84.4923V18.7695C84.4923 18.8811 84.4923 18.9926 84.4923 19.1066C84.4923 19.2205 84.4923 19.3297 84.5147 19.4318C84.5221 19.5273 84.5409 19.6219 84.5707 19.7142C84.5905 19.7852 84.6331 19.8501 84.6939 19.9017C84.7605 19.9549 84.8384 19.9967 84.9235 20.0252C85.0389 20.0646 85.1608 20.0886 85.2848 20.0964C85.3003 20.1283 85.3107 20.1618 85.3156 20.196C85.3306 20.2747 85.3306 20.3548 85.3156 20.4334C85.3103 20.4684 85.3 20.5027 85.2848 20.5355H84.9123C84.7275 20.5355 84.5203 20.5355 84.2962 20.5355C84.0722 20.5355 83.8902 20.5355 83.753 20.5355C83.6157 20.5355 83.4225 20.5355 83.2181 20.5355C83.0136 20.5355 82.826 20.5355 82.658 20.5355H82.2407C82.2259 20.5024 82.2146 20.4682 82.2071 20.4334C82.1959 20.3546 82.1959 20.2749 82.2071 20.196C82.2142 20.1619 82.2255 20.1285 82.2407 20.0964C82.461 20.0918 82.6726 20.0231 82.84 19.9017C82.8964 19.8478 82.9376 19.7837 82.9604 19.7142C82.9922 19.6221 83.0128 19.5274 83.022 19.4318C83.022 19.3297 83.0388 19.2205 83.0416 19.1066C83.0444 18.9926 83.0416 18.8692 83.0416 18.7695L83.0725 16.0826C83.0725 15.8595 83.0725 15.6506 83.0725 15.4584C83.0808 15.3047 83.0208 15.1539 82.9044 15.0359C82.8387 14.9836 82.7617 14.9425 82.6776 14.9148C82.5613 14.8754 82.4385 14.8514 82.3135 14.8436C82.2993 14.8106 82.289 14.7764 82.2827 14.7416C82.2798 14.702 82.2798 14.6624 82.2827 14.6229C82.2799 14.5834 82.2799 14.5437 82.2827 14.5042C82.289 14.4702 82.2993 14.4368 82.3135 14.4045H82.6888C82.8736 14.4045 83.0753 14.4045 83.2881 14.4045H83.8174H84.3354C84.5287 14.4045 84.7107 14.4045 84.8955 14.4045H85.2932C85.3087 14.4364 85.3191 14.4699 85.324 14.5042C85.3282 14.5437 85.3282 14.5834 85.324 14.6229C85.3284 14.6624 85.3284 14.7021 85.324 14.7416C85.3191 14.7766 85.3087 14.8109 85.2932 14.8436C85.0727 14.8485 84.8606 14.9162 84.6911 15.0359C84.5757 15.1543 84.5168 15.305 84.5259 15.4584C84.5259 15.6506 84.5259 15.8595 84.5259 16.0826V17.0487H87.2395V16.0826C87.2395 15.8595 87.2395 15.6506 87.2395 15.4584C87.2484 15.2997 87.1829 15.1444 87.0575 15.0264C86.9913 14.9746 86.9144 14.9335 86.8306 14.9053C86.7143 14.866 86.5915 14.8419 86.4666 14.8341C86.4511 14.8014 86.4407 14.7671 86.4358 14.7321C86.4314 14.6926 86.4314 14.6529 86.4358 14.6134C86.4316 14.5739 86.4316 14.5342 86.4358 14.4947C86.4407 14.4605 86.4511 14.4269 86.4666 14.395H86.839C87.0267 14.395 87.2255 14.395 87.4411 14.395H87.9704H88.4885C88.6817 14.395 88.8638 14.395 89.0486 14.395H89.4631C89.4773 14.4273 89.4876 14.4607 89.4939 14.4947C89.4971 14.5374 89.4971 14.5802 89.4939 14.6229Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M95.512 20.5353H95.1396H94.6831H94.2126H91.7342C91.5326 20.5353 91.3254 20.5353 91.1125 20.5353C90.8997 20.5353 90.7065 20.5353 90.5524 20.5353H90.334C90.3191 20.5022 90.3079 20.468 90.3004 20.4332C90.2892 20.3544 90.2892 20.2747 90.3004 20.1958C90.3075 20.1617 90.3187 20.1283 90.334 20.0961C90.5542 20.0916 90.7659 20.0229 90.9333 19.9015C90.9897 19.8476 91.0309 19.7834 91.0537 19.714C91.0854 19.6218 91.1061 19.5272 91.1153 19.4315C91.1153 19.3295 91.1321 19.2203 91.1349 19.1064C91.1377 18.9924 91.1349 18.869 91.1349 18.7693L91.1741 16.0824C91.1741 15.9709 91.1741 15.8593 91.1741 15.7477C91.1741 15.6362 91.1573 15.5317 91.1461 15.4368C91.1338 15.3522 91.1161 15.2682 91.0929 15.1852C91.0812 15.1299 91.0522 15.0782 91.0089 15.0357C90.9432 14.9834 90.8661 14.9423 90.7821 14.9146C90.6666 14.8755 90.5448 14.8515 90.4208 14.8434C90.4056 14.8104 90.3943 14.7762 90.3872 14.7413C90.3843 14.7018 90.3843 14.6622 90.3872 14.6227C90.3844 14.5831 90.3844 14.5435 90.3872 14.504C90.3943 14.4699 90.4056 14.4364 90.4208 14.4043H90.7933C90.9109 14.4043 91.0733 14.4043 91.2581 14.4043H91.8182H94.8147H95.1676H95.4784H95.68L95.7108 15.7145C95.6709 15.7266 95.6296 15.7353 95.5876 15.7406H95.442C95.3571 15.744 95.2723 15.7327 95.1928 15.7074C95.1616 15.5839 95.1077 15.4654 95.0331 15.3561C94.9701 15.2708 94.8824 15.2005 94.7783 15.152C94.6646 15.1035 94.541 15.0737 94.4142 15.0642C94.277 15.0642 94.1174 15.0475 93.9382 15.0475H93.6833H93.3389H92.9636C92.8404 15.0475 92.7284 15.0475 92.6332 15.0475C92.6413 15.159 92.6413 15.2708 92.6332 15.3822C92.6332 15.5104 92.6332 15.6694 92.6332 15.8569V17.0247C92.7078 17.0247 92.7834 17.0247 92.86 17.0247H93.3361C93.4765 17.0254 93.6168 17.0183 93.7561 17.0034C93.8758 16.9912 93.9912 16.9581 94.095 16.906C94.1934 16.8535 94.2766 16.7829 94.3386 16.6995C94.4114 16.5939 94.4617 16.4782 94.487 16.3578C94.5279 16.3454 94.5701 16.3367 94.6131 16.3316C94.6606 16.3293 94.7083 16.3293 94.7559 16.3316C94.8411 16.3273 94.9263 16.3394 95.0051 16.3672V16.5168C95.0051 16.5809 95.0051 16.6758 95.0051 16.7969C95.0051 16.9179 94.9883 17.1007 94.9883 17.3333C94.9883 17.5659 94.9883 17.7724 95.0051 17.9124C95.0219 18.0525 95.0051 18.1498 95.0051 18.1854V18.3492C94.9657 18.3626 94.9242 18.3714 94.8819 18.3753C94.8335 18.3787 94.7847 18.3787 94.7363 18.3753C94.6511 18.3797 94.5658 18.3675 94.487 18.3397C94.4636 18.2173 94.4132 18.0998 94.3386 17.9931C94.2771 17.9126 94.1935 17.8458 94.095 17.7985C93.9884 17.7538 93.874 17.7241 93.7561 17.7107C93.6168 17.6958 93.4765 17.6886 93.3361 17.6893H92.9804C92.8516 17.6893 92.734 17.6893 92.622 17.7036V18.9141C92.622 19.0304 92.622 19.1515 92.622 19.2488C92.6239 19.344 92.6324 19.4391 92.6472 19.5336C92.6484 19.593 92.6742 19.6501 92.72 19.695C92.774 19.7333 92.8385 19.7595 92.9076 19.771C93.006 19.7929 93.1062 19.8087 93.2073 19.8184C93.3165 19.8184 93.4285 19.8398 93.5405 19.8445C93.6525 19.8493 93.7421 19.8445 93.8205 19.8445C94.0138 19.8445 94.1846 19.8445 94.3358 19.8327C94.4717 19.8254 94.6047 19.7964 94.7279 19.7472C94.8463 19.6992 94.9491 19.6275 95.0275 19.5384C95.1313 19.4171 95.2134 19.2835 95.2712 19.142C95.3135 19.1283 95.3577 19.1195 95.4028 19.1159C95.4522 19.1124 95.5018 19.1124 95.5512 19.1159C95.6364 19.1115 95.7217 19.1236 95.8005 19.1515L95.512 20.5353Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M99.6454 17.751C99.6458 17.8916 99.6184 18.0312 99.5642 18.164C99.5077 18.1936 99.4487 18.2198 99.3878 18.2424C99.2982 18.278 99.1946 18.3112 99.077 18.3468C98.9576 18.383 98.8361 18.4139 98.7129 18.4394C98.6014 18.4645 98.4866 18.478 98.3713 18.4797H96.3521C96.3385 18.4428 96.331 18.4045 96.3297 18.3658V18.2424C96.3286 18.1016 96.357 17.9617 96.4137 17.8294C96.4697 17.7989 96.5287 17.7726 96.5902 17.751C96.6798 17.7146 96.7834 17.679 96.901 17.6442C97.0186 17.6094 97.1391 17.5785 97.2623 17.5516C97.3749 17.5274 97.4905 17.5146 97.6067 17.5137H99.6258C99.6388 17.5507 99.6454 17.589 99.6454 17.6276V17.751Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M103.252 14.6229C103.257 14.6624 103.257 14.7021 103.252 14.7416C103.247 14.7766 103.237 14.8109 103.222 14.8436C103.002 14.8484 102.791 14.9162 102.622 15.0359C102.506 15.1539 102.446 15.3047 102.454 15.4584C102.454 15.6506 102.454 15.8595 102.454 16.0826L102.423 18.7695C102.423 18.8811 102.423 18.9926 102.423 19.1066C102.423 19.2205 102.423 19.3297 102.443 19.4318C102.452 19.5271 102.471 19.6216 102.499 19.7142C102.519 19.7858 102.562 19.8509 102.625 19.9017C102.691 19.9548 102.768 19.9967 102.852 20.0252C102.968 20.0645 103.091 20.0886 103.216 20.0964C103.229 20.129 103.239 20.1623 103.247 20.196C103.258 20.2749 103.258 20.3546 103.247 20.4334C103.239 20.4679 103.229 20.502 103.216 20.5355H102.841C102.656 20.5355 102.449 20.5355 102.225 20.5355C102.001 20.5355 101.819 20.5355 101.681 20.5355C101.544 20.5355 101.351 20.5355 101.149 20.5355C100.948 20.5355 100.754 20.5355 100.589 20.5355H100.175C100.16 20.5027 100.149 20.4684 100.144 20.4334C100.129 20.3548 100.129 20.2747 100.144 20.196C100.149 20.1618 100.159 20.1283 100.175 20.0964C100.395 20.0918 100.607 20.0231 100.774 19.9017C100.832 19.8486 100.873 19.7842 100.894 19.7142C100.926 19.6221 100.947 19.5274 100.956 19.4318C100.956 19.3297 100.973 19.2205 100.978 19.1066C100.984 18.9926 100.978 18.8692 100.978 18.7695L101.012 16.0826C101.012 15.8595 101.012 15.6506 101.012 15.4584C101.021 15.305 100.962 15.1543 100.847 15.0359C100.78 14.9836 100.702 14.9425 100.617 14.9148C100.502 14.8754 100.38 14.8514 100.256 14.8436C100.24 14.8109 100.23 14.7766 100.225 14.7416C100.221 14.7021 100.221 14.6624 100.225 14.6229C100.221 14.5834 100.221 14.5437 100.225 14.5042C100.23 14.4699 100.24 14.4364 100.256 14.4045H100.628C100.813 14.4045 101.015 14.4045 101.23 14.4045H101.757H102.275C102.468 14.4045 102.653 14.4045 102.835 14.4045H103.216C103.232 14.4364 103.242 14.4699 103.247 14.5042C103.253 14.5435 103.255 14.5833 103.252 14.6229ZM107.137 14.6063C107.14 14.6505 107.14 14.6949 107.137 14.7392C107.131 14.7748 107.12 14.8098 107.106 14.8436C106.943 14.8366 106.78 14.8543 106.624 14.8958C106.48 14.9367 106.346 14.9994 106.229 15.081C106.103 15.1676 105.986 15.2646 105.882 15.3706C105.773 15.4821 105.658 15.6079 105.54 15.7313L104.056 17.3549L105.008 18.4966L105.384 18.9357C105.507 19.0828 105.622 19.2181 105.731 19.3392L106.011 19.6572C106.066 19.72 106.126 19.7788 106.193 19.8329C106.301 19.931 106.437 20.0045 106.588 20.0465C106.743 20.0823 106.903 20.0991 107.064 20.0964C107.08 20.1298 107.09 20.165 107.095 20.2008C107.097 20.2419 107.097 20.2831 107.095 20.3242C107.099 20.3964 107.085 20.4685 107.053 20.5355L106.722 20.5473H106.442H106.162H105.848C105.596 20.5535 105.345 20.5295 105.101 20.4761C104.925 20.4313 104.765 20.3497 104.636 20.2388C104.558 20.1691 104.485 20.0954 104.417 20.018C104.328 19.9183 104.23 19.8044 104.121 19.6715L103.779 19.2466C103.658 19.0947 103.541 18.9428 103.423 18.7885C103.145 18.4325 102.847 18.0432 102.53 17.6207L104.056 15.9331C104.118 15.8571 104.185 15.7764 104.258 15.6957C104.331 15.615 104.398 15.5343 104.459 15.4584C104.518 15.3898 104.57 15.3176 104.616 15.2424C104.651 15.1934 104.672 15.1381 104.678 15.081C104.68 15.04 104.665 14.9996 104.636 14.9671C104.608 14.9371 104.573 14.9128 104.532 14.8958C104.488 14.8778 104.441 14.8643 104.392 14.8555C104.343 14.8481 104.294 14.8442 104.244 14.8436C104.22 14.7751 104.209 14.7038 104.213 14.6324C104.206 14.5518 104.22 14.4709 104.252 14.395H104.532H104.759H105.123C105.255 14.395 105.381 14.395 105.507 14.395H106.067C106.162 14.395 106.26 14.395 106.347 14.395H106.627H106.806H107.117C107.136 14.4641 107.143 14.5354 107.137 14.6063Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M114.827 14.6227C114.831 14.6621 114.831 14.7019 114.827 14.7413C114.822 14.7764 114.811 14.8107 114.796 14.8434C114.575 14.8482 114.363 14.916 114.194 15.0357C114.08 15.1546 114.021 15.3049 114.029 15.4582C114.029 15.6504 114.029 15.8593 114.029 16.0824L113.995 18.7693C113.995 18.8809 113.995 18.9924 113.995 19.1064C113.995 19.2203 113.995 19.3295 114.017 19.4315C114.026 19.5269 114.045 19.6214 114.073 19.714C114.093 19.785 114.136 19.8499 114.197 19.9015C114.263 19.9546 114.341 19.9965 114.426 20.0249C114.542 20.0643 114.663 20.0884 114.787 20.0961C114.803 20.1283 114.814 20.1617 114.821 20.1958C114.832 20.2747 114.832 20.3544 114.821 20.4332C114.814 20.468 114.802 20.5022 114.787 20.5353H114.415C114.23 20.5353 114.023 20.5353 113.799 20.5353C113.575 20.5353 113.393 20.5353 113.256 20.5353C113.118 20.5353 112.925 20.5353 112.721 20.5353C112.516 20.5353 112.329 20.5353 112.161 20.5353H111.729C111.714 20.5024 111.704 20.4682 111.699 20.4332C111.684 20.3546 111.684 20.2744 111.699 20.1958C111.703 20.1616 111.714 20.128 111.729 20.0961C111.95 20.0916 112.161 20.0229 112.329 19.9015C112.385 19.8476 112.426 19.7834 112.449 19.714C112.481 19.6218 112.501 19.5272 112.511 19.4315C112.511 19.3295 112.527 19.2203 112.53 19.1064C112.533 18.9924 112.53 18.869 112.53 18.7693V17.7059H109.817V18.7693C109.817 18.8809 109.817 18.9924 109.817 19.1064C109.817 19.2203 109.817 19.3295 109.836 19.4315C109.847 19.5268 109.865 19.6212 109.892 19.714C109.912 19.7856 109.956 19.8507 110.018 19.9015C110.084 19.9541 110.161 19.996 110.245 20.0249C110.361 20.0643 110.484 20.0883 110.609 20.0961C110.623 20.1284 110.634 20.1618 110.64 20.1958C110.651 20.2747 110.651 20.3544 110.64 20.4332C110.633 20.4679 110.623 20.5021 110.609 20.5353H110.245C110.06 20.5353 109.856 20.5353 109.629 20.5353C109.402 20.5353 109.223 20.5353 109.086 20.5353C108.949 20.5353 108.755 20.5353 108.554 20.5353C108.352 20.5353 108.159 20.5353 107.994 20.5353H107.579C107.564 20.5024 107.554 20.4682 107.548 20.4332C107.533 20.3546 107.533 20.2744 107.548 20.1958C107.553 20.1616 107.564 20.128 107.579 20.0961C107.8 20.0916 108.013 20.0229 108.181 19.9015C108.237 19.8476 108.277 19.7834 108.299 19.714C108.332 19.6221 108.353 19.5274 108.36 19.4315C108.36 19.3295 108.377 19.2203 108.383 19.1064C108.388 18.9924 108.383 18.869 108.383 18.7693L108.414 16.0824C108.414 15.8593 108.414 15.6504 108.414 15.4582C108.423 15.3048 108.364 15.1541 108.248 15.0357C108.182 14.9833 108.104 14.9423 108.019 14.9146C107.904 14.875 107.782 14.8509 107.658 14.8434C107.642 14.8107 107.632 14.7764 107.627 14.7413C107.622 14.7019 107.622 14.6621 107.627 14.6227C107.623 14.5832 107.623 14.5435 107.627 14.504C107.632 14.4697 107.642 14.4362 107.658 14.4043H108.03C108.218 14.4043 108.416 14.4043 108.632 14.4043H109.159H109.677C109.87 14.4043 110.055 14.4043 110.237 14.4043H110.651C110.667 14.4362 110.677 14.4697 110.682 14.504C110.686 14.5435 110.686 14.5832 110.682 14.6227C110.686 14.6621 110.686 14.7019 110.682 14.7413C110.677 14.7764 110.667 14.8107 110.651 14.8434C110.432 14.8482 110.22 14.916 110.052 15.0357C109.935 15.1535 109.876 15.3046 109.887 15.4582C109.887 15.6504 109.887 15.8593 109.887 16.0824V17.0485H112.603V16.0824C112.603 15.8593 112.603 15.6504 112.603 15.4582C112.611 15.3045 112.551 15.1537 112.435 15.0357C112.37 14.9828 112.293 14.9416 112.208 14.9146C112.092 14.8752 111.969 14.8512 111.844 14.8434C111.831 14.81 111.821 14.7759 111.813 14.7413C111.81 14.7018 111.81 14.6622 111.813 14.6227C111.811 14.5831 111.811 14.5435 111.813 14.504C111.821 14.4702 111.831 14.4369 111.844 14.4043H112.177C112.362 14.4043 112.564 14.4043 112.777 14.4043H113.306H113.824C114.017 14.4043 114.199 14.4043 114.384 14.4043H114.799C114.814 14.4362 114.825 14.4697 114.829 14.504C114.833 14.5435 114.832 14.5833 114.827 14.6227Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M122.897 20.3144C122.901 20.3523 122.901 20.3904 122.897 20.4283C122.893 20.4649 122.882 20.5007 122.867 20.5351H122.567H122.346C122.251 20.5351 122.15 20.5351 122.038 20.5351H121.702H121.396H121.055H120.64C120.503 20.5351 120.377 20.5351 120.262 20.5351H120.019H119.719C119.703 20.4993 119.693 20.4617 119.688 20.4236C119.685 20.3872 119.685 20.3507 119.688 20.3144C119.685 20.2764 119.685 20.2384 119.688 20.2004C119.69 20.1647 119.698 20.1294 119.713 20.096C119.775 20.096 119.848 20.0841 119.932 20.0604C120.013 20.0422 120.092 20.02 120.17 19.9939C120.241 19.9712 120.306 19.9365 120.36 19.8919C120.385 19.8748 120.404 19.8535 120.418 19.8293C120.431 19.8051 120.439 19.7786 120.439 19.7518C120.43 19.6148 120.401 19.4792 120.352 19.3483C120.29 19.1798 120.215 18.9614 120.117 18.698L119.971 18.3206H117.652L117.487 18.717C117.369 18.9923 117.28 19.2202 117.221 19.4005C117.175 19.5262 117.145 19.6561 117.134 19.7874C117.135 19.8125 117.144 19.837 117.159 19.8586C117.174 19.8801 117.195 19.8981 117.221 19.9109C117.284 19.9483 117.351 19.9794 117.423 20.0034C117.497 20.0283 117.574 20.0489 117.652 20.0651L117.829 20.096C117.843 20.1312 117.851 20.168 117.854 20.2052C117.854 20.2479 117.854 20.2859 117.854 20.3144C117.854 20.3429 117.854 20.388 117.854 20.4283C117.851 20.4646 117.842 20.5005 117.829 20.5351H117.568H117.336C117.221 20.5351 117.098 20.5351 116.963 20.5351H116.568H116.263C116.084 20.5351 115.913 20.5351 115.751 20.5351H115.373H115.112C115.096 20.4993 115.086 20.4617 115.081 20.4236C115.081 20.3808 115.081 20.3429 115.081 20.3144C115.079 20.2764 115.079 20.2384 115.081 20.2004C115.086 20.1646 115.096 20.1295 115.112 20.096L115.392 20.0367C115.52 20.0116 115.637 19.9556 115.728 19.8753C115.797 19.807 115.856 19.7321 115.905 19.6521C115.981 19.5382 116.057 19.4148 116.132 19.2819C116.21 19.1513 116.28 19.0255 116.344 18.9092C116.393 18.8265 116.437 18.7417 116.476 18.6552L118.515 14.3519L119.688 14.2285L121.615 18.7075C121.732 18.9875 121.839 19.2202 121.937 19.4005C122.023 19.571 122.145 19.7263 122.298 19.8586C122.379 19.9258 122.474 19.979 122.578 20.0153C122.668 20.0512 122.762 20.0783 122.858 20.096C122.875 20.1309 122.885 20.1677 122.889 20.2052C122.895 20.2413 122.898 20.2778 122.897 20.3144ZM119.117 16.1701C119.056 16.0221 119.007 15.8706 118.971 15.7168C118.938 15.5672 118.904 15.4462 118.879 15.3536C118.851 15.4462 118.812 15.5672 118.758 15.7168C118.705 15.8663 118.644 16.0229 118.568 16.1915L117.924 17.6678H119.697L119.117 16.1701Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M129.966 20.3143C129.969 20.3538 129.969 20.3935 129.966 20.433C129.959 20.4677 129.949 20.5019 129.935 20.535L129.375 20.5469H128.731C128.541 20.554 128.351 20.5314 128.171 20.4805C128.016 20.4272 127.876 20.3463 127.762 20.2431C127.708 20.1991 127.661 20.1497 127.622 20.0959C127.557 20.0129 127.482 19.9108 127.395 19.7874L127.115 19.3839L126.804 18.9352C126.563 18.5792 126.292 18.1828 125.995 17.7485C125.996 17.6748 126.017 17.6023 126.057 17.5368C126.097 17.4713 126.154 17.4145 126.224 17.3711C126.426 17.3325 126.622 17.276 126.81 17.2025C126.977 17.1377 127.131 17.0503 127.266 16.9438C127.4 16.8404 127.507 16.7143 127.58 16.5735C127.656 16.4089 127.693 16.233 127.689 16.0561C127.701 15.9139 127.676 15.7713 127.617 15.6378C127.558 15.5043 127.466 15.3831 127.347 15.2823C127.228 15.1816 127.085 15.1036 126.928 15.0536C126.77 15.0037 126.602 14.9829 126.434 14.9927C126.392 14.9927 126.331 14.9927 126.244 14.9927H125.981C125.888 14.9927 125.804 14.9927 125.72 15.007H125.544C125.544 15.1185 125.544 15.2443 125.544 15.3488C125.544 15.4532 125.544 15.56 125.544 15.6834V16.0347L125.51 18.7477C125.51 18.8593 125.51 18.9709 125.51 19.0848C125.51 19.1987 125.51 19.3079 125.533 19.41C125.542 19.5053 125.56 19.5998 125.589 19.6924C125.608 19.764 125.652 19.8292 125.715 19.8799C125.767 19.9262 125.825 19.9676 125.888 20.0034C125.984 20.0467 126.091 20.071 126.199 20.0746C126.215 20.1065 126.225 20.14 126.23 20.1743C126.245 20.2529 126.245 20.333 126.23 20.4116C126.225 20.4466 126.214 20.4809 126.199 20.5137H125.919C125.734 20.5137 125.527 20.5137 125.303 20.5137C125.079 20.5137 124.897 20.5137 124.76 20.5137C124.623 20.5137 124.429 20.5137 124.225 20.5137C124.02 20.5137 123.833 20.5137 123.665 20.5137H123.25C123.235 20.4809 123.225 20.4466 123.22 20.4116C123.205 20.333 123.205 20.2529 123.22 20.1743C123.224 20.14 123.235 20.1065 123.25 20.0746C123.471 20.07 123.682 20.0013 123.85 19.8799C123.906 19.826 123.947 19.7619 123.97 19.6924C124.002 19.6003 124.022 19.5056 124.032 19.41C124.032 19.3079 124.048 19.1987 124.051 19.0848C124.054 18.9709 124.051 18.8474 124.051 18.7477L124.074 16.0608C124.074 15.8377 124.074 15.6289 124.074 15.4366C124.072 15.2845 124.004 15.1382 123.883 15.026C123.818 14.9747 123.742 14.9337 123.659 14.9049C123.546 14.8652 123.426 14.8412 123.304 14.8337C123.288 14.8007 123.277 14.7665 123.27 14.7316C123.267 14.6921 123.267 14.6525 123.27 14.613C123.267 14.5379 123.284 14.4632 123.32 14.3946H123.88L124.637 14.378L125.513 14.359L126.353 14.3424H126.958C127.255 14.3405 127.551 14.3676 127.84 14.4231C128.102 14.4696 128.35 14.5591 128.571 14.6865C128.782 14.8073 128.954 14.9704 129.072 15.1613C129.205 15.3872 129.27 15.6376 129.26 15.8899C129.263 16.0914 129.219 16.2914 129.131 16.4786C129.046 16.6579 128.925 16.8233 128.773 16.9676C128.618 17.1124 128.436 17.2351 128.235 17.3307C128.027 17.4342 127.804 17.514 127.571 17.5681C127.851 17.9716 128.112 18.3395 128.347 18.667L128.655 19.0824C128.753 19.2201 128.846 19.3483 128.935 19.4646C129.025 19.5809 129.098 19.6829 129.165 19.7636C129.206 19.8218 129.256 19.8752 129.313 19.9227C129.375 19.98 129.451 20.026 129.534 20.0578C129.618 20.0896 129.709 20.1067 129.801 20.1078H129.957C129.972 20.1401 129.982 20.1735 129.988 20.2075C129.983 20.2434 129.976 20.2791 129.966 20.3143Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M133.52 14.6227C133.523 14.6622 133.523 14.7018 133.52 14.7413C133.513 14.7761 133.503 14.8103 133.489 14.8434C133.268 14.8482 133.056 14.916 132.887 15.0357C132.77 15.1535 132.711 15.3046 132.721 15.4582C132.721 15.6504 132.721 15.8593 132.721 16.0824L132.691 18.7693C132.691 18.8809 132.691 18.9924 132.691 19.1064C132.691 19.2203 132.691 19.3295 132.71 19.4315C132.72 19.527 132.74 19.6215 132.769 19.714C132.788 19.7853 132.83 19.8505 132.892 19.9015C132.959 19.9546 133.037 19.9965 133.122 20.0249C133.237 20.0646 133.359 20.0886 133.483 20.0961C133.499 20.128 133.509 20.1616 133.514 20.1958C133.529 20.2744 133.529 20.3546 133.514 20.4332C133.509 20.4682 133.498 20.5024 133.483 20.5353H133.111C132.923 20.5353 132.719 20.5353 132.495 20.5353C132.271 20.5353 132.089 20.5353 131.951 20.5353C131.814 20.5353 131.621 20.5353 131.416 20.5353C131.212 20.5353 131.024 20.5353 130.856 20.5353H130.442C130.428 20.5021 130.418 20.4679 130.411 20.4332C130.396 20.3546 130.396 20.2744 130.411 20.1958C130.417 20.1618 130.428 20.1284 130.442 20.0961C130.663 20.0916 130.875 20.0229 131.044 19.9015C131.1 19.8472 131.141 19.7832 131.164 19.714C131.195 19.6216 131.215 19.5271 131.226 19.4315C131.226 19.3295 131.243 19.2203 131.246 19.1064C131.248 18.9924 131.246 18.869 131.246 18.7693L131.276 16.0824C131.276 15.8593 131.276 15.6504 131.276 15.4582C131.287 15.3046 131.228 15.1535 131.111 15.0357C131.045 14.9839 130.968 14.9428 130.884 14.9146C130.768 14.8752 130.645 14.8512 130.52 14.8434C130.506 14.8103 130.496 14.7761 130.489 14.7413C130.486 14.7018 130.486 14.6622 130.489 14.6227C130.487 14.5831 130.487 14.5435 130.489 14.504C130.496 14.47 130.506 14.4366 130.52 14.4043H130.893C131.08 14.4043 131.282 14.4043 131.495 14.4043H132.024H132.542C132.735 14.4043 132.917 14.4043 133.102 14.4043H133.517C133.531 14.4366 133.541 14.47 133.548 14.504C133.541 14.544 133.532 14.5836 133.52 14.6227Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M139 18.8567C139.017 19.1603 138.919 19.4606 138.72 19.7135C138.521 19.9432 138.266 20.1335 137.972 20.2713C137.667 20.4127 137.339 20.5143 136.998 20.5728C136.677 20.632 136.349 20.663 136.02 20.6654C135.88 20.6654 135.74 20.6654 135.564 20.6535L135.088 20.6226L134.687 20.587L134.455 20.5609L134.404 19.2507C134.444 19.2381 134.486 19.2293 134.528 19.2246C134.576 19.2222 134.625 19.2222 134.673 19.2246C134.757 19.2211 134.841 19.2324 134.92 19.2578C135.073 19.7452 135.505 19.9881 136.216 19.9865C136.374 19.9853 136.531 19.975 136.687 19.9557C136.833 19.9426 136.977 19.918 137.118 19.8821C137.242 19.7548 137.337 19.6091 137.398 19.4525C137.463 19.3 137.498 19.1397 137.502 18.9777C137.515 18.767 137.435 18.5595 137.278 18.3962C137.12 18.249 136.929 18.1289 136.718 18.0425C136.481 17.9409 136.238 17.8498 135.99 17.7696C135.732 17.6861 135.486 17.5769 135.259 17.4444C134.998 17.2968 134.789 17.0935 134.651 16.8551C134.513 16.6166 134.452 16.3515 134.474 16.0867C134.459 15.7766 134.557 15.47 134.755 15.2085C134.942 14.9783 135.188 14.7869 135.474 14.6483C135.767 14.5057 136.086 14.4062 136.418 14.354C136.731 14.2992 137.05 14.2706 137.37 14.2686C137.51 14.2686 137.65 14.2686 137.827 14.2828L138.297 14.3137L138.692 14.3493C138.807 14.3611 138.882 14.3682 138.924 14.3754L138.955 15.6476C138.916 15.661 138.874 15.6698 138.832 15.6737C138.784 15.6773 138.735 15.6773 138.686 15.6737C138.601 15.6775 138.516 15.6654 138.437 15.6381C138.358 15.4264 138.193 15.2449 137.972 15.1254C137.729 14.9996 137.448 14.9369 137.163 14.945C137.012 14.9461 136.861 14.9564 136.712 14.9759C136.574 14.9913 136.437 15.0159 136.303 15.0495C136.202 15.1706 136.124 15.3043 136.071 15.4459C136.014 15.5874 135.985 15.7356 135.984 15.885C135.969 16.0897 136.048 16.2913 136.205 16.4475C136.366 16.589 136.556 16.7048 136.765 16.7893C136.989 16.8842 137.233 16.9744 137.496 17.0623C137.754 17.1526 137.998 17.2698 138.221 17.4112C138.453 17.5561 138.644 17.7425 138.782 17.9571C138.943 18.2365 139.018 18.546 139 18.8567Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M78.2305 28.779C78.2344 28.8026 78.2344 28.8265 78.2305 28.8502C78.1045 28.8763 77.9784 28.8953 77.8552 28.9119C77.7308 28.9262 77.6055 28.9333 77.48 28.9332C77.3028 28.9338 77.1305 28.8845 76.9899 28.7932C76.8461 28.7004 76.7121 28.5972 76.5894 28.4846C76.3922 28.6316 76.1642 28.7459 75.9173 28.8217C75.6745 28.8947 75.4189 28.9324 75.1612 28.9332C74.9111 28.936 74.662 28.9072 74.4219 28.8478C74.2165 28.7957 74.0259 28.7084 73.8618 28.5914C73.7062 28.4758 73.5829 28.3323 73.5005 28.1713C73.4117 27.9885 73.3679 27.7922 73.3717 27.5945C73.3704 27.4587 73.4068 27.3245 73.4781 27.2029C73.5527 27.0794 73.6469 26.9652 73.7582 26.8635C73.8781 26.7527 74.0093 26.651 74.1502 26.5597C74.2987 26.4623 74.4443 26.3698 74.5899 26.2796C74.4551 26.0939 74.3381 25.8995 74.2399 25.6981C74.16 25.5484 74.1144 25.3874 74.1054 25.2233C74.1048 25.0914 74.1464 24.9618 74.2259 24.8483C74.3074 24.7347 74.4161 24.6368 74.5451 24.5611C74.6786 24.48 74.8259 24.4168 74.982 24.3736C75.1383 24.3298 75.3018 24.3074 75.4665 24.3071C75.6001 24.3069 75.7334 24.3188 75.8641 24.3427C75.986 24.3643 76.102 24.4054 76.2058 24.4638C76.3067 24.5253 76.3884 24.6068 76.4438 24.7011C76.5069 24.8103 76.5377 24.9309 76.5334 25.0524C76.5341 25.1738 76.4974 25.2933 76.427 25.399C76.3528 25.5113 76.2583 25.613 76.147 25.7004C76.0211 25.7999 75.8873 25.8919 75.7465 25.9758L75.2956 26.2463C75.388 26.365 75.4917 26.4837 75.6093 26.6309C75.7269 26.778 75.8529 26.9038 75.9817 27.0439C76.1106 27.1839 76.2366 27.3192 76.3654 27.4545L76.7322 27.8295C76.8267 27.6658 76.8999 27.4939 76.9507 27.3168C77.0014 27.1621 77.0296 27.0027 77.0347 26.8421C77.0441 26.7817 77.0282 26.7204 76.9899 26.6688C76.9366 26.6228 76.8714 26.5878 76.7995 26.5668C76.7369 26.5462 76.6705 26.5349 76.6034 26.5336C76.5938 26.5191 76.589 26.5027 76.5894 26.4861V26.4196C76.5903 26.3877 76.595 26.3558 76.6034 26.3247H76.8695C76.8955 26.3271 76.9218 26.3271 76.9479 26.3247H77.0263C77.0767 26.3272 77.1271 26.3272 77.1775 26.3247H77.3455C77.4604 26.3247 77.5752 26.3247 77.6844 26.3247H77.9952H78.2081C78.2267 26.3894 78.2267 26.457 78.2081 26.5217H78.1017C78.0506 26.5297 78.0002 26.54 77.9504 26.5525C77.8957 26.5644 77.8423 26.5803 77.7908 26.6C77.7462 26.6156 77.7053 26.6382 77.6704 26.6665C77.6195 26.7221 77.5849 26.7872 77.5696 26.8564L77.4464 27.2029C77.3988 27.3358 77.3399 27.483 77.2699 27.6373C77.2 27.7935 77.1109 27.9431 77.0039 28.0835L77.2083 28.2758C77.2835 28.3435 77.3629 28.4077 77.4464 28.468C77.5247 28.5248 77.6102 28.5741 77.7012 28.6152C77.7747 28.6506 77.8575 28.6702 77.942 28.6721H78.0513C78.0986 28.6722 78.1458 28.6666 78.1913 28.6555C78.2096 28.6718 78.2213 28.6926 78.2249 28.7149C78.2302 28.7359 78.2321 28.7575 78.2305 28.779ZM76.3318 28.2544C76.2198 28.1476 76.0993 28.017 75.9649 27.8889C75.8305 27.7607 75.6849 27.6088 75.5561 27.4592C75.4272 27.3097 75.276 27.1578 75.1472 27.0011C75.0184 26.8445 74.8952 26.6973 74.7887 26.5549C74.5905 26.6641 74.4178 26.8033 74.2791 26.9655C74.1427 27.1421 74.0751 27.3505 74.0858 27.5613C74.086 27.6868 74.1155 27.8111 74.1726 27.9268C74.2295 28.0461 74.3143 28.1543 74.4219 28.2449C74.5363 28.3403 74.6713 28.416 74.8196 28.468C74.9867 28.5287 75.1671 28.5586 75.3488 28.5558C75.5345 28.5571 75.7187 28.529 75.8921 28.4728C76.0516 28.4206 76.2001 28.3468 76.3318 28.2544ZM75.9761 25.0809C75.9792 25.0171 75.9663 24.9534 75.9383 24.8941C75.9103 24.8348 75.8679 24.7812 75.8137 24.7368C75.7566 24.6911 75.6892 24.6556 75.6156 24.6324C75.542 24.6091 75.4637 24.5986 75.3852 24.6015C75.3311 24.5988 75.2769 24.5988 75.2228 24.6015L75.0604 24.6228C74.9501 24.6705 74.8585 24.7444 74.7969 24.8354C74.7352 24.9265 74.7061 25.0307 74.7131 25.1355C74.7208 25.2612 74.757 25.3845 74.8196 25.4987C74.8996 25.6623 74.9932 25.8209 75.0996 25.9734C75.3192 25.8427 75.5261 25.6975 75.7185 25.539C75.7966 25.4819 75.86 25.4117 75.9048 25.3329C75.9496 25.2541 75.9749 25.1683 75.9789 25.0809H75.9761Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M84.7499 25.4269C84.7588 25.658 84.6749 25.8848 84.5119 26.0702C84.3493 26.2466 84.144 26.3915 83.9098 26.495C83.6579 26.6068 83.388 26.6868 83.1088 26.7324C82.8321 26.7796 82.5509 26.8058 82.2687 26.8107V27.6889C82.2687 27.81 82.2687 27.9263 82.2687 28.0355C82.2687 28.1447 82.2687 28.2444 82.2883 28.3298C82.2883 28.3835 82.3037 28.4365 82.3331 28.4841C82.3889 28.5272 82.4561 28.5581 82.5292 28.5743C82.615 28.5964 82.7186 28.6178 82.84 28.6384C82.8494 28.6695 82.855 28.7013 82.8568 28.7333C82.858 28.7483 82.858 28.7634 82.8568 28.7784C82.8568 28.795 82.8568 28.8164 82.8568 28.8378H82.6468H82.3079H81.9411H81.5798H81.2465H81.0337C81.0337 28.8164 81.0337 28.795 81.0337 28.7784C81.0324 28.7634 81.0324 28.7483 81.0337 28.7333C81.0311 28.7017 81.0311 28.67 81.0337 28.6384C81.1453 28.6207 81.2556 28.5977 81.3642 28.5695C81.4355 28.554 81.5016 28.5248 81.5574 28.4841C81.5806 28.4384 81.592 28.389 81.591 28.3393C81.591 28.2562 81.605 28.1589 81.6134 28.045C81.6218 27.931 81.6134 27.8076 81.6274 27.6937C81.6414 27.5798 81.6274 27.4563 81.6274 27.3756V25.5622V25.2916C81.6274 25.2038 81.6274 25.1207 81.6274 25.0543C81.6263 24.9891 81.6197 24.924 81.6078 24.8596C81.6059 24.824 81.5923 24.7894 81.5686 24.7599C81.5139 24.7187 81.4487 24.6887 81.3782 24.6721C81.2886 24.6508 81.1793 24.627 81.0477 24.6057C81.0404 24.5743 81.0357 24.5426 81.0337 24.5107C81.0324 24.4957 81.0324 24.4806 81.0337 24.4656C81.0337 24.449 81.0337 24.4276 81.0337 24.4063H81.4874L81.8766 24.3897L82.2995 24.3707L82.7168 24.3541H83.0836C83.2903 24.3529 83.4967 24.3688 83.6997 24.4015C83.887 24.4292 84.066 24.4881 84.2262 24.5748C84.379 24.6598 84.5034 24.7767 84.5875 24.9142C84.6895 25.0716 84.7452 25.2474 84.7499 25.4269ZM84.0246 25.5242C84.0373 25.3957 84.0138 25.2664 83.9558 25.1471C83.8979 25.0278 83.8072 24.9219 83.6913 24.8383C83.4475 24.6887 83.152 24.612 82.8512 24.6199H82.7028H82.532H82.3359C82.3359 24.6602 82.3359 24.7125 82.3359 24.7813C82.3359 24.8501 82.3359 24.9261 82.3359 25.0187C82.3359 25.1112 82.3359 25.1896 82.3359 25.2798C82.3359 25.3699 82.3359 25.4578 82.3359 25.5337L82.3219 26.4499H82.5488H82.7756C82.8904 26.4499 82.9996 26.4499 83.1004 26.4499C83.1847 26.4451 83.2682 26.4332 83.3497 26.4143C83.5573 26.3433 83.7356 26.2219 83.8622 26.0654C83.9774 25.9023 84.0338 25.7142 84.0246 25.5242Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M90.0259 28.7335C90.0287 28.7517 90.0287 28.77 90.0259 28.7881C90.0259 28.8071 90.0203 28.8237 90.0091 28.838H89.7739H89.4938C89.3762 28.838 89.2502 28.838 89.1186 28.838H88.903H88.4773H88.3345H88.1216C88.1115 28.8039 88.1067 28.7687 88.1076 28.7335C88.1071 28.7015 88.1118 28.6695 88.1216 28.6386L88.2476 28.6196C88.3027 28.61 88.357 28.5973 88.4101 28.5816C88.4601 28.5654 88.508 28.5447 88.5529 28.5199C88.571 28.5108 88.5861 28.498 88.5969 28.4827C88.6077 28.4673 88.6137 28.4499 88.6145 28.4321C88.6015 28.3339 88.5742 28.2374 88.5333 28.1449C88.4801 28.0049 88.4017 27.7912 88.2953 27.5111L88.0908 26.9795H86.3069L86.1333 27.3687C86.0885 27.4684 86.0437 27.5705 86.0017 27.6797C85.9597 27.7889 85.9177 27.8933 85.8841 27.993C85.8505 28.0927 85.8197 28.1852 85.8001 28.2636C85.7843 28.3173 85.774 28.3721 85.7693 28.4274C85.7708 28.4454 85.7771 28.4629 85.7878 28.4785C85.7984 28.4941 85.8132 28.5075 85.8309 28.5175C85.8753 28.5436 85.9233 28.5652 85.9737 28.5816C86.0268 28.5973 86.0811 28.61 86.1361 28.6196L86.2621 28.6386C86.2706 28.6698 86.2753 28.7016 86.2761 28.7335C86.2756 28.7687 86.2709 28.8037 86.2621 28.838H86.0717H85.9401H85.548H85.3632C85.2316 28.838 85.1196 28.838 85.0299 28.838H84.7947H84.6127C84.6024 28.8246 84.5975 28.8088 84.5987 28.7929V28.7335C84.5996 28.7016 84.6043 28.6698 84.6127 28.6386L84.8199 28.6006C84.9135 28.5826 84.999 28.5423 85.0664 28.4843C85.1242 28.424 85.1714 28.3568 85.2064 28.2849C85.2652 28.1829 85.324 28.0713 85.3884 27.9526C85.4528 27.834 85.5088 27.7153 85.562 27.6061C85.6152 27.4969 85.6516 27.4162 85.6713 27.3687L87.0323 24.3377L87.6232 24.2617L89.0374 27.5159C89.0579 27.5681 89.0887 27.6472 89.1298 27.7533C89.1746 27.8529 89.2222 27.9574 89.2754 28.0618C89.3286 28.1663 89.3818 28.2636 89.4378 28.3538C89.4788 28.4228 89.5296 28.4874 89.5891 28.546C89.6447 28.5911 89.7168 28.6187 89.7935 28.6244L90.0035 28.6481C90.0186 28.6748 90.0262 28.704 90.0259 28.7335ZM87.4327 25.3441C87.4005 25.2663 87.3734 25.187 87.3515 25.1067C87.3291 25.0331 87.3123 24.9667 87.2983 24.9073C87.2751 24.8473 87.26 24.7852 87.2535 24.7222C87.2412 24.7493 87.2309 24.7771 87.2227 24.8053C87.2227 24.8361 87.2031 24.867 87.1919 24.9002C87.1807 24.9334 87.1471 25.0284 87.1191 25.1067C87.0911 25.185 87.0575 25.2657 87.0183 25.3441L86.4358 26.6828H87.9788L87.4327 25.3441Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M95.0163 28.741C95.0155 28.7743 95.0079 28.8073 94.9939 28.8384H94.8763H94.7083H94.5374H94.4114C94.2842 28.841 94.1572 28.8299 94.0333 28.8051C93.9384 28.7818 93.8524 28.7376 93.7841 28.677C93.7063 28.6079 93.6333 28.535 93.5657 28.4586C93.4705 28.3565 93.364 28.2378 93.2436 28.1002C93.1232 27.9625 93 27.8201 92.8712 27.6682C92.7423 27.5163 92.6163 27.3715 92.5043 27.2314C92.3923 27.0914 92.2887 26.968 92.2019 26.8564C92.1151 26.7449 92.0506 26.6642 92.0142 26.6191C92.0179 26.58 92.0283 26.5416 92.045 26.5051C92.0638 26.4763 92.0874 26.4499 92.115 26.4268C92.2899 26.4059 92.4617 26.3693 92.6275 26.3176C92.7782 26.2713 92.9191 26.2048 93.0448 26.1206C93.1612 26.0438 93.2567 25.9467 93.3248 25.8358C93.3878 25.7215 93.4185 25.5963 93.4145 25.4703C93.4194 25.3324 93.3878 25.1953 93.322 25.0691C93.2672 24.9659 93.1824 24.8761 93.0756 24.808C92.9695 24.7388 92.8474 24.6895 92.7171 24.6632C92.5764 24.6322 92.4313 24.617 92.2859 24.6181H92.1347H91.9694H91.8098H91.6894L91.6754 24.9006C91.6754 24.986 91.6754 25.0857 91.6754 25.1997C91.6754 25.3136 91.6754 25.437 91.6754 25.5557L91.6614 27.3501C91.6614 27.3786 91.6614 27.4498 91.6614 27.5614C91.6614 27.6729 91.6614 27.7987 91.6614 27.9174C91.6614 28.0361 91.6614 28.1548 91.6754 28.2616C91.6717 28.3245 91.6861 28.3872 91.7174 28.4443C91.8729 28.5385 92.0561 28.5943 92.2467 28.6057C92.2493 28.6374 92.2493 28.6691 92.2467 28.7007C92.248 28.7157 92.248 28.7308 92.2467 28.7458C92.2467 28.7624 92.2467 28.7838 92.2467 28.8051H92.0142H91.6754H91.3029H90.9417H90.6084H90.3956C90.3956 28.7838 90.3956 28.7624 90.3956 28.7458C90.3943 28.7308 90.3943 28.7157 90.3956 28.7007C90.3976 28.6688 90.4023 28.6371 90.4096 28.6057C90.5946 28.5948 90.7727 28.5415 90.9249 28.4515C90.9573 28.3946 90.9727 28.3318 90.9697 28.2687C90.9697 28.1643 90.9865 28.048 90.9921 27.9222C90.9977 27.7964 90.9921 27.6848 90.9921 27.5661V27.3501L91.0145 25.5557V25.3729C91.0145 25.2843 91.0145 25.1941 91.0145 25.1023C91.0145 25.0121 91.0145 24.9267 90.9977 24.8507C90.9809 24.7748 90.9781 24.7273 90.9613 24.7155C90.9065 24.6742 90.8414 24.6442 90.7708 24.6276C90.6812 24.6063 90.572 24.5825 90.4404 24.5612C90.4331 24.5298 90.4284 24.4981 90.4264 24.4662C90.4251 24.4512 90.4251 24.4361 90.4264 24.4211C90.4264 24.4045 90.4264 24.3832 90.4264 24.3618H90.5356C90.5878 24.364 90.6402 24.364 90.6924 24.3618H90.7848H90.8885L91.2889 24.3452L91.7286 24.3262L92.1431 24.3096H92.4847C92.6722 24.3102 92.8593 24.3221 93.0448 24.3452C93.2327 24.3657 93.4143 24.4164 93.5797 24.4947C93.7433 24.5731 93.8802 24.6859 93.9773 24.8223C94.0884 24.9943 94.1416 25.1889 94.1314 25.3848C94.143 25.5314 94.1176 25.6784 94.0567 25.8159C93.9959 25.9535 93.901 26.0784 93.7785 26.1823C93.4991 26.4011 93.1472 26.5419 92.7704 26.5858C92.8124 26.6428 92.874 26.7235 92.9608 26.8232C93.0476 26.9229 93.1428 27.0416 93.2408 27.1674L93.5797 27.5637L93.9213 27.9483L94.2014 28.2616C94.2637 28.327 94.331 28.3889 94.403 28.4467C94.4746 28.5015 94.5524 28.55 94.6354 28.5915C94.7027 28.625 94.7787 28.6437 94.8567 28.6461H94.9687C94.9768 28.6604 94.9825 28.6756 94.9855 28.6912C94.9968 28.7074 95.007 28.724 95.0163 28.741Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M99.0629 25.14C99.0247 25.1423 98.9863 25.1423 98.9481 25.14H98.8949H98.8277C98.7808 24.9969 98.6756 24.8724 98.5309 24.7887C98.3687 24.7256 98.191 24.6963 98.0128 24.7032H97.6571C97.5199 24.7032 97.4107 24.7032 97.3239 24.7032C97.321 24.738 97.321 24.7729 97.3239 24.8077V24.9264C97.3239 24.9999 97.3239 25.0901 97.3239 25.1993C97.3239 25.3085 97.3239 25.4367 97.3239 25.5672V27.3617V27.7557C97.3239 27.8854 97.3239 28.0017 97.3239 28.1046C97.3239 28.209 97.3239 28.2945 97.3435 28.3609C97.3415 28.4008 97.3501 28.4406 97.3687 28.4772C97.4237 28.5189 97.4901 28.5483 97.5619 28.5627C97.6695 28.5909 97.7789 28.6139 97.8896 28.6315C97.8989 28.6626 97.9046 28.6944 97.9064 28.7265C97.9076 28.7415 97.9076 28.7565 97.9064 28.7716C97.9064 28.7882 97.9064 28.8095 97.9064 28.8309H97.6963H97.3603H96.9934H96.6294H96.2961H96.0861C96.0838 28.8112 96.0838 28.7913 96.0861 28.7716C96.0848 28.7565 96.0848 28.7415 96.0861 28.7265C96.0879 28.6944 96.0935 28.6626 96.1029 28.6315C96.2136 28.6139 96.323 28.5909 96.4305 28.5627C96.5021 28.5478 96.5684 28.5184 96.6238 28.4772C96.642 28.4453 96.6524 28.4106 96.6546 28.3752C96.6546 28.3158 96.6714 28.2351 96.6798 28.1378C96.6882 28.0405 96.6938 27.9242 96.6966 27.7913C96.6994 27.6584 96.6966 27.5159 96.6966 27.3617L96.7106 25.5815V24.8124C96.7106 24.7721 96.7106 24.7365 96.7106 24.7032H96.5733H96.3969H95.9629C95.7845 24.6956 95.6067 24.7249 95.4448 24.7887C95.2991 24.8721 95.193 24.9966 95.1451 25.14C95.1078 25.1422 95.0704 25.1422 95.0331 25.14H94.9799H94.9127L94.9351 24.3828H95.1339H95.414C95.512 24.3828 95.61 24.3828 95.694 24.3828H95.9292H98.0156H98.2508C98.3404 24.3828 98.4328 24.3828 98.5309 24.3828H98.8109H99.0377L99.0629 25.14Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M104.846 24.4995C104.845 24.5314 104.841 24.5633 104.832 24.5944C104.642 24.6046 104.459 24.6579 104.303 24.7487C104.278 24.7958 104.264 24.8466 104.263 24.8982C104.263 24.986 104.247 25.0881 104.238 25.1997C104.23 25.3112 104.238 25.437 104.238 25.5343C104.238 25.6317 104.238 25.7218 104.238 25.7717L104.224 27.3667C104.224 27.5258 104.224 27.6824 104.224 27.8415C104.224 28.0005 104.224 28.1405 104.21 28.2734C104.196 28.4064 104.21 28.5108 104.191 28.6105C104.171 28.7102 104.177 28.7624 104.171 28.7933C104.034 28.8583 103.882 28.8957 103.726 28.9024L100.976 25.7812C100.928 25.7299 100.884 25.676 100.844 25.6198C100.799 25.5604 100.76 25.5059 100.718 25.4608C100.694 25.4328 100.673 25.4034 100.654 25.3729L100.598 25.2875V25.5248C100.598 25.5889 100.598 25.6578 100.598 25.7337C100.598 25.8097 100.598 25.8738 100.598 25.9284L100.581 27.3525V27.5899C100.581 27.7062 100.581 27.8272 100.581 27.9578C100.581 28.0883 100.581 28.1951 100.598 28.3067C100.595 28.37 100.611 28.4329 100.645 28.4894C100.799 28.5796 100.979 28.6329 101.166 28.6437C101.169 28.6753 101.169 28.7071 101.166 28.7387C101.167 28.7537 101.167 28.7688 101.166 28.7838C101.166 28.8004 101.166 28.8217 101.166 28.8431H100.813H100.712H100.528H100.343C100.225 28.8431 100.122 28.8431 100.032 28.8431C99.9423 28.8431 99.8471 28.8431 99.7519 28.8431H99.5166C99.5166 28.8217 99.5166 28.8004 99.5166 28.7838C99.5153 28.7688 99.5153 28.7537 99.5166 28.7387C99.514 28.7071 99.514 28.6753 99.5166 28.6437C99.7062 28.6335 99.889 28.5802 100.046 28.4894C100.074 28.4323 100.087 28.3708 100.085 28.3091C100.085 28.2022 100.102 28.0859 100.108 27.9554C100.113 27.8248 100.108 27.699 100.108 27.5804C100.108 27.4617 100.108 27.3834 100.108 27.343L100.124 25.831V25.4085C100.128 25.2649 100.118 25.1213 100.096 24.9789C100.09 24.9042 100.057 24.8328 100.003 24.7736C99.9487 24.7145 99.875 24.6703 99.7911 24.6466C99.7155 24.6209 99.6365 24.6034 99.5558 24.5944C99.5499 24.5798 99.5499 24.5639 99.5558 24.5493V24.4923C99.5521 24.46 99.5521 24.4274 99.5558 24.395H99.6931H99.9087H100.13H100.264H100.57L103.328 27.5804C103.39 27.6539 103.443 27.7204 103.493 27.7845L103.616 27.953L103.723 28.1049C103.723 28.0551 103.723 28.0029 103.723 27.953V27.7987C103.723 27.7133 103.723 27.6231 103.723 27.5281C103.723 27.4332 103.723 27.3525 103.723 27.2908L103.745 25.7717C103.745 25.7171 103.745 25.634 103.745 25.5343C103.745 25.4346 103.745 25.316 103.745 25.2044C103.745 25.0929 103.745 24.9955 103.726 24.9077C103.727 24.8586 103.718 24.8097 103.7 24.7629C103.546 24.6723 103.365 24.619 103.177 24.6086C103.169 24.5773 103.165 24.5456 103.163 24.5137C103.161 24.4987 103.161 24.4836 103.163 24.4686C103.163 24.452 103.163 24.4306 103.163 24.4093H103.415C103.448 24.4116 103.482 24.4116 103.516 24.4093H103.616C103.672 24.4093 103.734 24.4093 103.804 24.4093H103.989C104.104 24.4093 104.207 24.4093 104.297 24.4093C104.387 24.4093 104.482 24.4093 104.577 24.4093H104.812C104.812 24.4306 104.812 24.452 104.812 24.4686C104.824 24.4782 104.836 24.4885 104.846 24.4995Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M109.156 28.8379H108.635H108.03H106.35H105.988H105.692H105.51C105.51 28.8165 105.51 28.7952 105.51 28.7785C105.508 28.7635 105.508 28.7485 105.51 28.7334C105.51 28.7015 105.515 28.6696 105.524 28.6385C105.634 28.6212 105.744 28.5982 105.851 28.5697C105.923 28.5553 105.989 28.5259 106.044 28.4842C106.076 28.4329 106.092 28.3759 106.092 28.3181C106.092 28.2231 106.109 28.1187 106.114 28C106.12 27.8813 106.114 27.7627 106.114 27.6511V27.3829L106.131 25.5813V25.344C106.131 25.2538 106.131 25.166 106.131 25.0805C106.131 24.9951 106.131 24.9191 106.114 24.8432C106.113 24.8014 106.1 24.7607 106.075 24.7245C106.02 24.6836 105.954 24.6551 105.882 24.6414C105.794 24.6192 105.685 24.5979 105.554 24.5773C105.545 24.5462 105.539 24.5144 105.538 24.4824C105.536 24.4674 105.536 24.4523 105.538 24.4373C105.538 24.4207 105.538 24.3993 105.538 24.3779H105.689H105.798H106.196H106.414H108.304H108.598C108.699 24.3779 108.797 24.3779 108.895 24.3779C108.993 24.3779 109.069 24.3779 109.128 24.3779L109.15 25.1398C109.114 25.1489 109.076 25.1537 109.038 25.1541C108.998 25.1529 108.957 25.1482 108.918 25.1398C108.881 25.0498 108.833 24.9637 108.772 24.8835C108.725 24.8216 108.658 24.7723 108.579 24.7411C108.491 24.7063 108.396 24.6854 108.299 24.6794C108.181 24.6794 108.038 24.6794 107.868 24.6794C107.509 24.6794 107.153 24.6794 106.801 24.6984V24.8313C106.801 24.8788 106.801 24.9262 106.801 24.9737C106.801 25.0591 106.801 25.1565 106.801 25.2656C106.801 25.3748 106.801 25.484 106.801 25.5956V26.4026H107.137H107.503C107.646 26.4026 107.77 26.4026 107.882 26.3884C107.979 26.3825 108.073 26.3616 108.162 26.3266C108.241 26.2955 108.309 26.2462 108.358 26.1842C108.415 26.1036 108.453 26.014 108.47 25.9208C108.507 25.9124 108.546 25.9084 108.584 25.9089C108.625 25.9081 108.666 25.9121 108.705 25.9208V26.0822C108.705 26.1273 108.705 26.1913 108.705 26.2697C108.705 26.348 108.705 26.4406 108.705 26.5426C108.705 26.6447 108.705 26.7349 108.705 26.8108C108.705 26.8868 108.705 26.9509 108.705 26.9984V27.1574C108.666 27.1668 108.625 27.1716 108.584 27.1716C108.546 27.1712 108.507 27.1664 108.47 27.1574C108.453 27.0642 108.415 26.9746 108.358 26.8939C108.309 26.832 108.241 26.7827 108.162 26.7515C108.073 26.7174 107.978 26.6965 107.882 26.6898C107.77 26.6898 107.646 26.6898 107.503 26.6898H107.137C107.013 26.6898 106.89 26.6898 106.77 26.6898V27.3829V27.9881C106.77 28.0973 106.77 28.1946 106.77 28.2801C106.768 28.3275 106.776 28.3748 106.792 28.4201C106.836 28.4518 106.887 28.4738 106.943 28.4842C107.024 28.5029 107.107 28.5156 107.19 28.5222C107.282 28.5222 107.383 28.5388 107.489 28.5412C107.596 28.5436 107.7 28.5412 107.806 28.5412C107.957 28.5417 108.107 28.5354 108.257 28.5222C108.373 28.5121 108.488 28.4873 108.596 28.4486C108.692 28.4141 108.778 28.3604 108.845 28.292C108.923 28.2097 108.984 28.1165 109.024 28.0166C109.062 28.0019 109.103 27.9954 109.145 27.9976C109.184 27.9948 109.224 28.0013 109.259 28.0166L109.156 28.8379Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M114.698 28.7407C114.697 28.774 114.689 28.8069 114.675 28.838H114.558H114.39H114.219H114.093C113.966 28.8407 113.839 28.8295 113.715 28.8048C113.62 28.7815 113.534 28.7372 113.466 28.6766C113.388 28.6076 113.315 28.5346 113.247 28.4582C113.152 28.3562 113.046 28.2375 112.925 28.0998L112.553 27.6678C112.421 27.5159 112.298 27.3711 112.186 27.2311C112.074 27.0911 111.97 26.9676 111.883 26.8561C111.797 26.7445 111.732 26.6638 111.699 26.6187C111.696 26.5825 111.704 26.5463 111.721 26.5129C111.738 26.4796 111.764 26.45 111.797 26.4265C111.971 26.4055 112.143 26.3689 112.309 26.3173C112.46 26.271 112.601 26.2045 112.726 26.1203C112.843 26.0435 112.938 25.9463 113.006 25.8354C113.078 25.719 113.113 25.5892 113.11 25.458C113.115 25.3202 113.083 25.1831 113.018 25.0569C112.964 24.9538 112.88 24.864 112.774 24.7958C112.666 24.727 112.544 24.6778 112.413 24.651C112.272 24.62 112.127 24.6048 111.981 24.6059H111.83H111.665H111.505H111.385V24.8884C111.385 24.9738 111.385 25.0735 111.385 25.1875C111.385 25.3014 111.385 25.4248 111.385 25.5435L111.371 27.3379C111.371 27.3664 111.371 27.4376 111.371 27.5492C111.371 27.6607 111.371 27.7865 111.371 27.9052C111.371 28.0239 111.371 28.1426 111.371 28.2494C111.367 28.3123 111.382 28.375 111.413 28.4321C111.568 28.5263 111.752 28.5821 111.942 28.5935C111.949 28.6249 111.954 28.6566 111.956 28.6885C111.957 28.7035 111.957 28.7186 111.956 28.7336C111.956 28.7502 111.956 28.7716 111.956 28.7929H111.743H111.404H111.032H110.671H110.338H110.125C110.125 28.7716 110.125 28.7502 110.125 28.7336C110.125 28.717 110.125 28.7027 110.125 28.6885C110.122 28.6569 110.122 28.6252 110.125 28.5935C110.31 28.5826 110.488 28.5293 110.64 28.4393C110.672 28.3824 110.688 28.3196 110.685 28.2565C110.685 28.1521 110.704 28.0358 110.707 27.91C110.71 27.7842 110.707 27.6726 110.707 27.5539V27.3379L110.73 25.5435V25.3607C110.73 25.2721 110.73 25.1819 110.73 25.0901C110.73 24.9999 110.73 24.9145 110.713 24.8385C110.714 24.7919 110.702 24.7456 110.679 24.7032C110.623 24.6626 110.557 24.6326 110.486 24.6154C110.396 24.5941 110.287 24.5703 110.155 24.549C110.148 24.5176 110.143 24.4859 110.141 24.454C110.14 24.439 110.14 24.4239 110.141 24.4089C110.141 24.3923 110.141 24.3709 110.141 24.3496H110.217C110.269 24.3519 110.322 24.3519 110.374 24.3496H110.466H110.57L110.97 24.333L111.41 24.314L111.825 24.2974H112.166C112.354 24.2982 112.541 24.3101 112.726 24.333C112.913 24.3539 113.094 24.4046 113.258 24.4825C113.422 24.5609 113.559 24.6737 113.656 24.8101C113.768 24.9817 113.822 25.1766 113.81 25.3726C113.815 25.5155 113.784 25.6577 113.721 25.7901C113.657 25.9225 113.562 26.0422 113.44 26.1416C113.162 26.3599 112.811 26.5007 112.435 26.5451C112.474 26.6021 112.536 26.6828 112.623 26.7825C112.709 26.8822 112.805 27.0009 112.903 27.1267L113.242 27.5231L113.583 27.9076L113.877 28.2209C113.94 28.2863 114.007 28.3482 114.079 28.406C114.151 28.4608 114.23 28.5093 114.314 28.5508C114.38 28.5845 114.455 28.6033 114.533 28.6054H114.645C114.653 28.6197 114.658 28.6349 114.661 28.6505C114.677 28.6796 114.689 28.7098 114.698 28.7407Z",
          fill: "white",
        }),
        s.jsx("path", {
          d: "M118.011 27.6699C118.017 27.8718 117.951 28.0706 117.82 28.2395C117.698 28.3968 117.538 28.5302 117.35 28.6312C117.157 28.738 116.945 28.8182 116.723 28.8685C116.511 28.9159 116.294 28.9406 116.076 28.9421C115.938 28.9421 115.796 28.9421 115.622 28.9255C115.433 28.9118 115.245 28.8832 115.062 28.84L115.025 28.0781C115.039 28.0639 115.081 28.0568 115.146 28.0568C115.186 28.0546 115.226 28.062 115.261 28.0781C115.294 28.178 115.351 28.2715 115.426 28.3535C115.491 28.4223 115.572 28.4795 115.664 28.522C115.752 28.562 115.846 28.5916 115.944 28.6098C116.048 28.6258 116.154 28.6338 116.26 28.6335C116.377 28.6336 116.493 28.6241 116.608 28.6051C116.712 28.5896 116.814 28.5633 116.91 28.5267C117.028 28.4534 117.124 28.3574 117.19 28.2466C117.266 28.1187 117.304 27.9768 117.299 27.8336C117.307 27.6644 117.249 27.4977 117.134 27.3589C117.019 27.2267 116.878 27.1119 116.717 27.0195C116.545 26.9172 116.367 26.8236 116.182 26.7394C115.994 26.6544 115.814 26.5568 115.644 26.4475C115.481 26.3436 115.34 26.2167 115.227 26.0724C115.112 25.9143 115.055 25.7311 115.062 25.5455C115.056 25.3479 115.116 25.1528 115.235 24.983C115.35 24.8298 115.502 24.6988 115.681 24.5985C115.867 24.4975 116.071 24.4222 116.286 24.3753C116.498 24.327 116.718 24.3023 116.938 24.3018C117.073 24.3018 117.218 24.3018 117.372 24.3184C117.562 24.3321 117.749 24.3608 117.932 24.4038L117.946 25.142C117.909 25.1565 117.867 25.1631 117.826 25.161H117.761C117.743 25.161 117.726 25.156 117.711 25.1468C117.695 25.0584 117.656 24.9744 117.595 24.9015C117.534 24.8285 117.454 24.7686 117.361 24.7266C117.169 24.6492 116.958 24.611 116.745 24.6151C116.644 24.6151 116.543 24.6198 116.442 24.6293C116.345 24.6392 116.251 24.6625 116.162 24.6981C116.049 24.7658 115.953 24.8532 115.882 24.9545C115.809 25.0745 115.774 25.2087 115.782 25.3438C115.771 25.5134 115.829 25.6809 115.947 25.8185C116.065 25.9453 116.206 26.0557 116.364 26.146C116.536 26.2444 116.714 26.334 116.899 26.4142C117.089 26.4959 117.269 26.5928 117.437 26.7038C117.603 26.8131 117.745 26.9475 117.854 27.1002C117.964 27.2752 118.018 27.4716 118.011 27.6699Z",
          fill: "white",
        }),
      ],
    }),
  });
}
function bc() {
  return s.jsxs("div", {
    className: x2.svg,
    children: [
      s.jsx(C1, {
        to: "https://web.facebook.com/RootheKharisPartners ",
        children: s.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            s.jsx("path", {
              d: "M17.198 29.5H21.198V21.49H24.802L25.198 17.51H21.198V15.5C21.198 15.2348 21.3034 14.9804 21.4909 14.7929C21.6784 14.6054 21.9328 14.5 22.198 14.5H25.198V10.5H22.198C20.8719 10.5 19.6002 11.0268 18.6625 11.9645C17.7248 12.9021 17.198 14.1739 17.198 15.5V17.51H15.198L14.802 21.49H17.198V29.5Z",
              fill: "#B8824F",
            }),
          ],
        }),
      }),
      s.jsxs("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
          s.jsx("circle", {
            cx: "20",
            cy: "20",
            r: "20",
            transform: "rotate(-90 20 20)",
            fill: "white",
          }),
          s.jsx("path", {
            d: "M9 10H11.5L26.5 30H24L9 10ZM13.5 10H16L31 30H28.5L13.5 10Z",
            fill: "#B8824F",
          }),
          s.jsx("path", {
            d: "M11 10H16V12H11V10ZM24 30H29V28H24V30Z",
            fill: "#B8824F",
          }),
          s.jsx("path", {
            d: "M26.5 10H30L13 30H9.5L26.5 10Z",
            fill: "#B8824F",
          }),
        ],
      }),
      s.jsx(C1, {
        to: `https://www.instagram.com/roothekharis/\r
 `,
        children: s.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            s.jsx("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M13.8114 9.34912C12.6278 9.34912 11.4926 9.8192 10.6555 10.656C9.8184 11.4928 9.34788 12.6278 9.34743 13.8114V25.7154C9.34743 26.8993 9.81774 28.0348 10.6549 28.8719C11.4921 29.7091 12.6275 30.1794 13.8114 30.1794H25.7154C26.8991 30.179 28.0341 29.7084 28.8708 28.8713C29.7076 28.0342 30.1777 26.899 30.1777 25.7154V13.8114C30.1773 12.6281 29.707 11.4933 28.8702 10.6566C28.0335 9.81985 26.8988 9.34958 25.7154 9.34912H13.8114ZM26.9994 13.8183C26.9994 14.1593 26.864 14.4863 26.6229 14.7274C26.3817 14.9685 26.0547 15.104 25.7137 15.104C25.3727 15.104 25.0457 14.9685 24.8046 14.7274C24.5635 14.4863 24.428 14.1593 24.428 13.8183C24.428 13.4773 24.5635 13.1502 24.8046 12.9091C25.0457 12.668 25.3727 12.5325 25.7137 12.5325C26.0547 12.5325 26.3817 12.668 26.6229 12.9091C26.864 13.1502 26.9994 13.4773 26.9994 13.8183ZM19.7651 16.1977C18.8195 16.1977 17.9125 16.5734 17.2438 17.2421C16.5751 17.9108 16.1994 18.8177 16.1994 19.7634C16.1994 20.7091 16.5751 21.616 17.2438 22.2847C17.9125 22.9534 18.8195 23.3291 19.7651 23.3291C20.7108 23.3291 21.6178 22.9534 22.2865 22.2847C22.9552 21.616 23.3309 20.7091 23.3309 19.7634C23.3309 18.8177 22.9552 17.9108 22.2865 17.2421C21.6178 16.5734 20.7108 16.1977 19.7651 16.1977ZM14.4834 19.7634C14.4834 18.3631 15.0397 17.0201 16.0299 16.0299C17.0201 15.0397 18.3631 14.4834 19.7634 14.4834C21.1638 14.4834 22.5068 15.0397 23.497 16.0299C24.4871 17.0201 25.0434 18.3631 25.0434 19.7634C25.0434 21.1637 24.4871 22.5067 23.497 23.4969C22.5068 24.4871 21.1638 25.0434 19.7634 25.0434C18.3631 25.0434 17.0201 24.4871 16.0299 23.4969C15.0397 22.5067 14.4834 21.1637 14.4834 19.7634Z",
              fill: "#B8824F",
            }),
          ],
        }),
      }),
      s.jsx(C1, {
        to: `https://www.linkedin.com/company/roothe-kharis-partners/posts/?feedView=all\r
`,
        children: s.jsxs("svg", {
          width: "40",
          height: "40",
          viewBox: "0 0 40 40",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            s.jsx("circle", {
              cx: "20",
              cy: "20",
              r: "20",
              transform: "rotate(-90 20 20)",
              fill: "white",
            }),
            s.jsx("path", {
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
  return s.jsx("footer", {
    className: x2.bg,
    children: s.jsxs("div", {
      className: x2.footer,
      children: [
        s.jsxs("div", {
          className: x2.footer2,
          children: [
            s.jsx("div", {
              className: x2.footerlogo,
              children: s.jsx(C1, { to: "/", children: s.jsx(yc, {}) }),
            }),
            s.jsxs("div", {
              className: x2.details,
              children: [
                s.jsxs("div", {
                  children: [
                    s.jsx("h2", {
                      children:
                        "We stand by your side, providing expert legal guidance and unwavering support to protect your rights and ensure justice is served",
                    }),
                    s.jsx(bc, {}),
                    s.jsx("h3", { children: "Open hours" }),
                    s.jsx("span", {
                      children: "Monday - Friday : 9:00 AM - 6:00 PM",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: x2.connect,
                  children: [
                    s.jsx("label", { children: "Contact us" }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("svg", {
                          width: "18",
                          height: "17",
                          viewBox: "0 0 18 17",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            d: "M12.5569 10.906L12.1019 11.359C12.1019 11.359 11.0189 12.435 8.06386 9.49698C5.10886 6.55898 6.19186 5.48298 6.19186 5.48298L6.47786 5.19698C7.18486 4.49498 7.25186 3.36698 6.63486 2.54298L5.37486 0.859979C4.61086 -0.160021 3.13586 -0.29502 2.26086 0.57498L0.690856 2.13498C0.257856 2.56698 -0.032144 3.12498 0.002856 3.74498C0.092856 5.33198 0.810856 8.74498 4.81486 12.727C9.06186 16.949 13.0469 17.117 14.6759 16.965C15.1919 16.917 15.6399 16.655 16.0009 16.295L17.4209 14.883C18.3809 13.93 18.1109 12.295 16.8829 11.628L14.9729 10.589C14.1669 10.152 13.1869 10.28 12.5569 10.906Z",
                            fill: "white",
                          }),
                        }),
                        s.jsx("span", { children: "+2349076490029" }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("svg", {
                          width: "19",
                          height: "15",
                          viewBox: "0 0 19 15",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            d: "M19 0.9375V4.6875L9.5 8.4375L0 4.6875V0.9375C0 0.68886 0.100089 0.450403 0.278249 0.274588C0.456408 0.0987722 0.698044 0 0.95 0H18.05C18.302 0 18.5436 0.0987722 18.7218 0.274588C18.8999 0.450403 19 0.68886 19 0.9375ZM0 6.70688V14.0625C0 14.3111 0.100089 14.5496 0.278249 14.7254C0.456408 14.9012 0.698044 15 0.95 15H18.05C18.302 15 18.5436 14.9012 18.7218 14.7254C18.8999 14.5496 19 14.3111 19 14.0625V6.70688L9.5 10.4569L0 6.70688Z",
                            fill: "white",
                          }),
                        }),
                        s.jsx("span", { children: "info@roothekharis.com " }),
                      ],
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("svg", {
                          width: "16",
                          height: "20",
                          viewBox: "0 0 16 20",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          children: s.jsx("path", {
                            d: "M8.00008 0C3.58908 0 8.14446e-05 3.589 8.14446e-05 7.995C-0.0289186 14.44 7.69608 19.784 8.00008 20C8.00008 20 16.0291 14.44 16.0001 8C16.0001 3.589 12.4111 0 8.00008 0ZM8.00008 12C5.79008 12 4.00008 10.21 4.00008 8C4.00008 5.79 5.79008 4 8.00008 4C10.2101 4 12.0001 5.79 12.0001 8C12.0001 10.21 10.2101 12 8.00008 12Z",
                            fill: "white",
                          }),
                        }),
                        s.jsx("span", {
                          children:
                            "Wing B, 4th floor, Plot 6E, Abdulrahman Okene Street, Off Ligali Ayorinde, Victoria island, Lagos state.",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: x2.quicks,
                  children: [
                    s.jsx("label", { children: "Quick Links" }),
                    s.jsxs("ul", {
                      children: [
                        s.jsx(C1, {
                          to: "/",
                          children: s.jsx("li", { children: "Home" }),
                        }),
                        s.jsxs(C1, {
                          to: "/aboutus",
                          children: [
                            " ",
                            s.jsx("li", { children: "About us" }),
                          ],
                        }),
                        s.jsx(C1, {
                          to: "/services",
                          children: s.jsx("li", { children: "Our Services" }),
                        }),
                        s.jsx(C1, {
                          to: "/Articles",
                          children: s.jsx("li", { children: "Articles" }),
                        }),
                        s.jsx(C1, {
                          to: "/contactus",
                          children: s.jsx("li", { children: "Contact Us" }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("hr", {}),
        s.jsxs("div", {
          className: x2.label,
          children: [
            s.jsx("label", {
              children: "© Roothe Kharis 2025. All rights reserved",
            }),
            s.jsxs("span", {
              className: x2.span,
              children: [
                s.jsx(gc, {}),
                s.jsxs(C1, {
                  to: "https://www.uppist.xyz/",
                  children: [" ", s.jsx(vc, {})],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function Hc() {
  return s.jsxs(s.Fragment, {
    children: [
      s.jsx(Y4, {}),
      s.jsx(js, {}),
      s.jsx(Os, {}),
      s.jsx($s, {}),
      s.jsx(nc, {}),
      s.jsx(G4, {}),
    ],
  });
}
const xc = "_contact_1qm2b_5",
  Sc = "_touch_1qm2b_27",
  Ec = "_form_1qm2b_39",
  _c = "_text_1qm2b_93",
  Lc = "_service_1qm2b_105",
  jc = "_select_1qm2b_137",
  wc = "_list_1qm2b_139",
  Mc = "_selected_1qm2b_153",
  Ac = "_menu_1qm2b_243",
  Tc = "_submit_1qm2b_299",
  Rc = "_image_1qm2b_323",
  j2 = {
    contact: xc,
    touch: Sc,
    form: Ec,
    text: _c,
    service: Lc,
    select: jc,
    list: wc,
    selected: Mc,
    menu: Ac,
    submit: Tc,
    image: Rc,
  },
  Oc = "./assets/contact-DPWEgEZr.png";
function Dc() {
  j.useRef();
  const [c, f] = j.useState(""),
    [C] = j.useState([
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
    [o, h] = j.useState(!1);
  function p(_) {
    f(_), h(!1);
  }
  function E() {
    h((_) => !_);
  }
  return (
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsxs("div", {
      className: j2.contact,
      children: [
        s.jsx("div", {
          className: j2.image,
          children: s.jsx("img", { src: Oc, alt: "" }),
        }),
        s.jsxs("div", {
          className: j2.touch,
          children: [
            s.jsxs("div", {
              className: j2.form,
              children: [
                s.jsx(C1, {
                  to: "https://calendly.com/roothekharispartners/30min",
                  children: s.jsx("h2", { children: "Book a session" }),
                }),
                s.jsx("label", {
                  children:
                    "Or Fill the form below and we will contact you swiftly.",
                }),
              ],
            }),
            s.jsxs("form", {
              children: [
                s.jsxs("div", {
                  className: j2.text,
                  children: [
                    s.jsxs("div", {
                      className: `${j2.service} ${j2.select}`,
                      children: [
                        s.jsxs("div", {
                          className: `${j2.list} ${o ? "select-clicked" : ""}`,
                          onClick: E,
                          children: [
                            s.jsx("span", {
                              className: j2.selected,
                              children: c || "Select",
                            }),
                            s.jsx("svg", {
                              width: "16",
                              height: "16",
                              viewBox: "0 0 16 16",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: s.jsx("path", {
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
                        o &&
                          s.jsx("ul", {
                            className: j2.menu,
                            children: C.map((_) =>
                              s.jsx(
                                "li",
                                {
                                  className: `menu-item ${
                                    c === _ ? "active" : ""
                                  }`,
                                  onClick: () => p(_),
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
                    s.jsx("input", {
                      type: "hidden",
                      name: "from_service",
                      value: c,
                    }),
                    s.jsx("input", {
                      type: "text",
                      placeholder: "Full name",
                      name: "from_name",
                    }),
                    s.jsx("input", {
                      type: "phonenumber",
                      placeholder: "Phone number",
                      name: "from_number",
                    }),
                    s.jsx("input", {
                      type: "email",
                      placeholder: "Email address",
                      name: "from_email",
                    }),
                    s.jsx("textarea", {
                      placeholder: "Message",
                      name: "message",
                    }),
                  ],
                }),
                s.jsx("button", {
                  type: "submit",
                  className: j2.submit,
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
function zc() {
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Y4, {}), s.jsx(Dc, {}), s.jsx(G4, {})],
  });
}
const Nc = "_bg1_cptlt_5",
  Uc = "_bg2_cptlt_19",
  Vc = "_service_cptlt_33",
  Bc = "_texts_cptlt_59",
  qc = "_details_cptlt_117",
  Zc = "_detail_cptlt_117",
  Yc = "_lists_cptlt_225",
  Gc = "_mark_cptlt_237",
  Xc = "_h2_cptlt_263",
  Qc = "_container_cptlt_285",
  Kc = "_item_cptlt_303",
  w2 = {
    bg1: Nc,
    bg2: Uc,
    service: Vc,
    texts: Bc,
    details: qc,
    detail: Zc,
    lists: Yc,
    mark: Gc,
    h2: Xc,
    container: Qc,
    item: Kc,
  },
  Xa = [
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
  kc = "./assets/service1-9FUplsYO.png",
  Jc = "./assets/service2-qoUZPi54.png",
  $c = "./assets/service3-9qkFdpo4.png",
  Wc = "./assets/service4-DTBO8dpr.png",
  Fc = "./assets/service5-CsrbDMOD.png",
  Pc = "./assets/service6-CstQ0BP4.png",
  Ic = "./assets/service7-BZxOJaUU.png";
function Vt() {
  return s.jsx(s.Fragment, {
    children: s.jsx("svg", {
      width: "18",
      height: "17",
      viewBox: "0 0 18 17",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: s.jsx("path", {
        d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
        fill: "#233E81",
      }),
    }),
  });
}
function er() {
  const c = s3(),
    f = j.useRef({}),
    C = j.useRef({});
  Xa.forEach((p) => {
    f.current[p.title] = j.useRef(null);
  }),
    j.useEffect(() => {
      var p;
      if ((p = c.state) != null && p.serviceid) {
        const E = f.current[c.state.serviceid];
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
    }, [c.state]);
  const o = [
      "Immigration",
      "Tax advisory",
      "Technology & digital economy",
      "Finance & capital markets",
    ],
    h = {
      "service1.png": kc,
      "service2.png": Jc,
      "service3.png": $c,
      "service4.png": Wc,
      "service5.png": Fc,
      "service6.png": Pc,
      "service7.png": Ic,
    };
  return s.jsx("div", {
    className: w2.bg1,
    children: s.jsx("div", {
      className: w2.bg2,
      children: s.jsxs("section", {
        className: w2.service,
        children: [
          s.jsxs("div", {
            className: w2.texts,
            children: [
              s.jsx("label", {
                htmlFor: "",
                children: "Who are we servicing?",
              }),
              s.jsx("h2", { children: "Services We Provide" }),
              s.jsx("p", {
                children:
                  "Roothe-Kharis & Partners specializes exclusively in transactional, advisory, and non-litigation services.",
              }),
            ],
          }),
          Xa.map((p, E) =>
            s.jsxs(
              "div",
              {
                className: w2.details,
                ref: (_) => (f.current[p.title.split(" ")[0]] = _),
                children: [
                  s.jsxs(
                    "div",
                    {
                      className: w2.detail,
                      children: [
                        s.jsx("h2", { children: p.title }),
                        s.jsx("span", { children: p.subtitle }),
                        s.jsx("p", { children: p.p1 }),
                        s.jsx("p", { children: p.p2 }),
                        s.jsx("div", {
                          className: w2.lists,
                          children: [
                            p.li1,
                            p.li2,
                            p.li3,
                            p.li4,
                            p.li5,
                            p.li6,
                            p.li7,
                            p.li8,
                          ]
                            .filter((_) => _)
                            .map((_, b) =>
                              s.jsxs(
                                "div",
                                {
                                  className: w2.mark,
                                  children: [
                                    s.jsx(Vt, {}),
                                    s.jsx("span", { children: _ }),
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
                  s.jsx("img", { src: h[p.image], alt: "" }),
                ],
              },
              p.title
            )
          ),
          s.jsxs("div", {
            className: w2.h2,
            children: [
              s.jsx("h2", { children: "Other Services" }),
              s.jsx("div", {
                className: w2.container,
                ref: C,
                children: o.map((p, E) =>
                  s.jsxs(
                    "div",
                    { className: w2.item, children: [s.jsx(Vt, {}), p] },
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
function tr() {
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Y4, {}), s.jsx(er, {}), s.jsx(G4, {})],
  });
}
const ar = "_bg_10ibp_5",
  lr = "_bg2_10ibp_17",
  Qa = { bg: ar, bg2: lr },
  nr = "_commit_90o6r_5",
  ir = "_mark_90o6r_55",
  Ka = { commit: nr, mark: ir },
  ur = "./assets/commitment-YWhY-cz4.png";
function sr() {
  return s.jsxs("section", {
    className: Ka.commit,
    children: [
      s.jsx("img", { src: ur, alt: "" }),
      s.jsxs("div", {
        children: [
          s.jsx("h3", { children: "Our Commitment" }),
          s.jsxs("div", {
            className: Ka.mark,
            children: [
              s.jsxs("div", {
                children: [
                  s.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: s.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      s.jsx("defs", {
                        children: s.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: s.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    children: [
                      s.jsx("label", {
                        children: " Excellence in Every Detail",
                      }),
                      "We bring precision, diligence, and expertise to every matter, ensuring that our clients receive unmatched service.",
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: s.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      s.jsx("defs", {
                        children: s.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: s.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    children: [
                      s.jsx("label", {
                        children: " Partnership Beyond Transactions",
                      }),
                      "Our relationships are built on trust, collaboration, and a deep understanding of our clients’ industries, goals, and challenges.",
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsxs("svg", {
                    width: "18",
                    height: "17",
                    viewBox: "0 0 18 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                      s.jsx("g", {
                        "clip-path": "url(#clip0_141_150)",
                        children: s.jsx("path", {
                          d: "M8.93746 1.41675C5.02746 1.41675 1.85413 4.59008 1.85413 8.50008C1.85413 12.4101 5.02746 15.5834 8.93746 15.5834C12.8475 15.5834 16.0208 12.4101 16.0208 8.50008C16.0208 4.59008 12.8475 1.41675 8.93746 1.41675ZM7.52079 12.0417L3.97913 8.50008L4.97788 7.50133L7.52079 10.0372L12.897 4.66091L13.8958 5.66675L7.52079 12.0417Z",
                          fill: "#233E81",
                        }),
                      }),
                      s.jsx("defs", {
                        children: s.jsx("clipPath", {
                          id: "clip0_141_150",
                          children: s.jsx("rect", {
                            width: "17",
                            height: "17",
                            fill: "white",
                            transform: "translate(0.4375)",
                          }),
                        }),
                      }),
                    ],
                  }),
                  s.jsxs("span", {
                    children: [
                      s.jsx("label", {
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
const cr = "_vision_1otbr_5",
  rr = "_our_1otbr_19",
  or = "_lists_1otbr_91",
  fr = "_care_1otbr_113",
  f5 = { vision: cr, our: rr, lists: or, care: fr },
  Cr = "./assets/vision1-B9stO0AG.png";
function dr() {
  const c = [
    "Client-centricity: prioritizing the needs, growth, and success of clients’ businesses.",
    "Adaptability and integrity: RKP is committed to delivering forward-thinking and modern legal solutions while maintaining ethical practices and building trust;",
    "Responsibility: long-term commitment to delivering high-quality services that are not only beneficial today but also contribute to the well-being of future generations.",
    "Excellence and expertise: delivering superior quality in all aspects of service through the deep understanding of both local and international legal frameworks.",
  ];
  return s.jsxs("section", {
    className: f5.vision,
    children: [
      s.jsxs("div", {
        className: f5.our,
        children: [
          s.jsx("img", { src: Cr, alt: "" }),
          s.jsxs("div", {
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("h3", { children: "Our Vision" }),
                  s.jsx("p", {
                    children:
                      "To deliver innovative, sustainable, and client-centered legal solutions, empowering businesses to navigate local and international complexities with global standards of efficiency, professionalism, and excellence.",
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h3", { children: "Our Mission" }),
                  s.jsx("p", {
                    children:
                      "To provide tailored legal solutions that support the growth of businesses by leveraging innovation, sustainable practices, and global standards, and a deep understanding of local and international legal complexities.",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      s.jsxs("div", {
        children: [
          s.jsx("h3", { children: "Our Core Values" }),
          s.jsx("label", { htmlFor: "", children: "C.A.R.E" }),
          s.jsx("div", {
            className: f5.lists,
            children: c.map((f, C) =>
              s.jsxs("div", {
                children: [
                  s.jsx(Vt, {}),
                  s.jsx("span", { className: f5.care, children: f }),
                ],
              })
            ),
          }),
        ],
      }),
    ],
  });
}
const hr = "_about_1pgob_5",
  mr = "_button_1pgob_77",
  pr = "_global_1pgob_167",
  zt = { about: hr, button: mr, global: pr },
  vr = "./assets/About-DXnXrf8n.png";
function gr() {
  return s.jsxs("section", {
    className: zt.about,
    children: [
      s.jsxs("div", {
        children: [
          s.jsxs("div", {
            className: zt.global,
            children: [
              s.jsx("label", { htmlFor: "", children: "Who We Are" }),
              s.jsx("h2", {
                children:
                  "Global standards. Local solutions. Expertly delivered!",
              }),
            ],
          }),
          s.jsx("p", {
            children:
              "Roothe-Kharis & Partners exist to help corporates, SMEs and individuals navigate complexities, seize opportunities, and achieve their goals with confidence",
          }),
          s.jsx("p", {
            children:
              "Leveraging on international best practices, we work with clients from boardrooms to the fields to curate tailored legal solutions that drive meaningful progress, protect interests, and unlock possibilities.",
          }),
          s.jsx(C1, {
            to: "/contactus",
            children: s.jsxs("button", {
              className: zt.button,
              children: [
                "Contact Us",
                s.jsx("svg", {
                  width: "32",
                  height: "32",
                  viewBox: "0 0 16 16",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: s.jsx("path", {
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
      s.jsx("img", { src: vr, alt: "" }),
    ],
  });
}
function yr() {
  return s.jsx("div", {
    className: Qa.bg,
    children: s.jsxs("div", {
      className: Qa.bg2,
      children: [
        s.jsx(Y4, {}),
        s.jsx(gr, {}),
        s.jsx(sr, {}),
        s.jsx(dr, {}),
        s.jsx(G4, {}),
      ],
    }),
  });
}
const br = "_blog_1xkpb_5",
  Hr = "_texts_1xkpb_25",
  xr = "_container_1xkpb_85",
  Sr = "_container1_1xkpb_99",
  Er = "_h3_1xkpb_155",
  _r = "_detail_1xkpb_213",
  Lr = "_intro_1xkpb_227",
  jr = "_admin_1xkpb_267",
  wr = "_help_1xkpb_287",
  V2 = {
    blog: br,
    texts: Hr,
    container: xr,
    container1: Sr,
    h3: Er,
    detail: _r,
    intro: Lr,
    admin: jr,
    help: wr,
  },
  Mr = "./assets/image2-B1okrnQ7.jpg",
  Ar = "./assets/lanlordover-VSFMFL1m.jpg",
  Tr = "./assets/estate-CznMMuhP.jpg",
  Rr = "./assets/deed-CTGPw3CN.jpg",
  Or = JSON.parse(
    `[{"link":"the-extent-of-a-third-party-participation-at-a-companys-meeting/","image":"image1.jpg","image2":"image2.jpg","title":" The Extent of a Third Party Participation at a Company's Meeting","text":" A board meeting is a formal gathering of the directors of a company to deliberate on company affairs and make strategic decisions.","date":"19 Mar 2025","content":"\\n<span>Introduction</span>\\n<span>A board meeting is a formal gathering of the directors of a company to deliberate on company affairs and make strategic decisions. The primary attendees of a board meeting are the directors of the company. The Companies and Allied Matters Act, 2020 (CAMA 2020) governs the composition, rights, and procedures of board meetings in Nigeria.</span>\\n\\n<span>According to Section 289(1) of CAMA 2020, every company is required to hold board meetings, and these meetings must be attended by the directors who are responsible for managing the company’s affairs. By the provisions of Section 335 of CAMA 2020, a company secretary has a right to attend board meetings because of their role in ensuring that the company complies with applicable rules and regulations. Section 335(2) CAMA 2020 provides that “The secretary shall not, without the authority of the board, exercise any power vested in the directors.” This implies that the secretary does not have any power to make decisions at the board meeting.</span>\\n\\n<span>Occasionally, companies invite third parties, such as consultants, legal advisors, or auditors, to provide expert insights during board meetings. However, the extent to which such third parties can participate, particularly whether they can move or adopt motions, is subject to Corporate Governance principles and statutory regulations, primarily governed by CAMA 2020 and relevant corporate governance codes in Nigeria.</span>\\n\\n<span>Legal Framework for Board Meetings in Nigeria</span>\\n<span>Section 305 CAMA 2020 stipulates that directors are responsible for the general management of a company’s business, including the initiation and adoption of motions during board meetings. This responsibility is exclusive to directors and cannot be delegated to non-directors unless expressly provided in the company’s articles or through a valid board resolution. The directors, in discharging their managerial duties, can invite third parties as advisers or experts to provide guidance on technical matters, such as regulatory compliance, financial structuring, or strategic planning. However, their participation or role at the meeting remains advisory and not voting participation.</span>\\n\\n<span>The Nigerian Code of Corporate Governance (NCCG) 2018, issued by the Financial Reporting Council of Nigeria (FRCN), reinforces that while external professionals such as consultants may provide valuable advice and expertise during board meetings, they do not possess the statutory authority to make binding decisions or to propose and adopt motions during meetings. Their role is advisory, supporting the board’s decision-making process without substituting the directors’ responsibility.</span>\\n\\n<span>Legal Implication of a Motion Moved/Adopted by a Third Party at a Company’s Board Meeting</span>\\n<span>Given the statutory framework discussed above, the implication of a third-party active participation in a company’s meeting will result in the following:</span>\\n<ol>\\n    <li><strong>Lack of Legal Authority:</strong> A third party, not being a member of the board, lacks the legal authority to move or adopt motions. Any motion initiated by such a third party would not satisfy the procedural requirements laid down by CAMA 2020 and the company’s articles of association.</li>\\n    <li><strong>Procedural Invalidity:</strong> Since board decisions must be made solely by directors, a motion moved or adopted by a third party is procedurally flawed. In effect, any decision arising from such a motion would be considered invalid, as it does not reflect a proper exercise of the board’s power.</li>\\n    <li><strong>Void or Voidable Decisions:</strong> Where a board inadvertently allows a third party to interfere in the decision-making process during a meeting, such a decision may be challenged on the grounds that it was adopted through an improper process. Courts or regulatory bodies may then deem the decision void or voidable, undermining its enforceability.</li>\\n    <li><strong>Breach of Governance Protocols:</strong> Permitting a third party to move or adopt a motion undermines the integrity of the board’s decision-making process. It may indicate a lapse in adherence to corporate governance best practices, potentially leading to internal disputes or conflicts of interest.</li>\\n</ol>\\n\\n<span>Conclusion</span>\\n<span>Under Nigerian law, specifically the provisions of CAMA 2020 and the Nigerian Code of Corporate Governance, only directors are authorized to move and adopt motions during board meetings. A consultant or adviser as third parties do not have the legal capacity to do so. Any motion moved or adopted by a third party is legally invalid, and decisions based on such motions may be challenged and potentially nullified. Companies must adhere strictly to their internal governance frameworks to ensure that decision-making authority remains solely with duly appointed directors, thereby safeguarding the company’s legal and operational integrity. While consultants or advisers may provide indispensable advice, it is imperative that their role remains advisory. Directors should ensure that all formal motions and resolutions are initiated, seconded, and adopted exclusively by the board, thereby upholding the provisions of CAMA and Corporate Governance.</span>\\n We serve as Company Secretaries to companies in diverse industries. </span>\\n\\n</body>\\n</html>"},{"link":"understanding-the-new-tenancy-law-of-lagos-state-what-landlords-need-to-know/","image":"landlord.jpg","image2":"landlord2.jpg","title":" Understanding The New Tenancy Law Of Lagos State: What Landlords Need To Know","text":"Landlords, property managers, and real estate investors play a critical role in the housing ecosystem of Lagos State.","date":"26 Mar 2025","content":"<!DOCTYPE html>\\n<html lang=\\"en\\">\\n<head>\\n    <meta charset=\\"UTF-8\\">\\n    <meta name=\\"viewport\\" content=\\"width=device-width, initial-scale=1.0\\">\\n    <span>1. Introduction:</span>\\n<span>Landlords, property managers, and real estate investors play a critical role in the housing ecosystem of Lagos State. This critical role makes it essential to stay informed about the laws that govern the relationships between landlords, property managers, and tenants.</span>\\n\\n<span>The Lagos State Tenancy Law of 2011 is one of such recent but critical pieces of legislation that every landlord, property manager, or real estate investor should understand in order to operate successfully and avoid legal pitfalls.</span>\\n\\n<span>2. An Overview of the New Tenancy Law of Lagos State</span>\\n<span>The Tenancy Law was enacted to regulate the relationship between landlords and tenants in Lagos State and provide the framework for the creation, operation, and termination of tenancy agreements while protecting the rights and obligations of the parties, and provides the procedure for the recovery of premises.</span>\\n<span>The law applies to all commercial and residential premises within Lagos State (S. 1), excluding Apapa, Ikeja G.R.A., Ikoyi, and Victoria Island.</span>\\n\\n<span>3. The Rights and Responsibilities of Landlords under the Tenancy Law</span>\\n<span>Who is a \\"Tenant\\" under the Tenancy Law?</span>\\n<span>The law defines a tenant as any person who occupies any premises by the payment of rent, or by the operation of law NOT any person who unlawfully occupies under a bonafide claim to be the owner.</span>\\n\\n<span>Who is a \\"Landlord\\" under the Tenancy Law?</span>\\n<span>The law defines a landlord as any person who receives any rent (whether in his own right or as an attorney or agent) from any person for the occupation of any premises in respect of which he has a right to receive such rent. A former landlord, an attorney, solicitor, agent, or caretaker of a landlord is also described as a landlord.</span>\\n\\n<span>4. The Creation of Tenancy</span>\\n<span>By the definition of who a tenant is, we see that a tenancy is created by an agreement which is deemed to have been created where a landlord grants a person who pays value, the right to the use of his premises. Such an agreement can be made expressly or impliedly, orally, in writing, partly oral or partly written, or for a fixed period (e.g., shortlets, Airbnb, etc). According to this definition, a tenant can either be an individual or a business entity.</span>\\n\\n<span>5. What Landlords Must Know in Relation to Business Premises</span>\\n<ul>\\n    <li>A landlord should not:</li>\\n    <li>Significantly prevent a tenant’s access to business premises.</li>\\n    <li>Extensively obstruct the flow of customers, clients, or other persons using the tenant’s business premises.</li>\\n    <li>Cause or fail to remove anything that may disturb a tenant’s trade within the business premises such that would amount to a loss of profit for the tenant.</li>\\n    <li>Fail to rectify the breakdown of plant or equipment under his care or maintenance as soon as possible.</li>\\n</ul>\\n\\n<span>6. Rent Control</span>\\n<span>What does \\"Rents\\" mean under the Tenancy Law?</span>\\n<span>What qualifies as rent includes any consideration or money paid or agreed to be paid or value or a right given or agreed to be given or part of any crop rendered or any equivalent given in kind or in labour, in consideration of which a landlord has permitted any person to use and occupy any land, premises, or other corporeal hereditament, and the use of common areas but does not include any charge for services or facilities provided in addition for the occupation of the premises.</span>\\n\\n<span>It is a criminal offence for a landlord to:</span>\\n<ul>\\n    <li>demand or receive from an existing monthly tenant, six (6) months’ rent in advance.</li>\\n    <li>demand or receive from an existing yearly tenant, one (1) year rent in advance.</li>\\n    <li>demand or receive from a new or proposed tenant, one (1) year in advance.</li>\\n</ul>\\n\\n<span>A landlord who demands rent in advance will be guilty of an offence and liable to 100,000 fine or three (3) months imprisonment.</span>\\n\\n<span>7. Rent Increment: Rights of a Tenant and How They Affect Landlords</span>\\n<span>Often asked questions: what happens in a situation where after the landlord has increased rent, the tenant refused to pay the increased rent?</span>\\n<span>An existing tenant can apply to the court for an order declaring that the increase in rent under the tenancy agreement is unreasonable. The court will then consider the following:</span>\\n<ul>\\n    <li>The rent payable in the same locality generally.</li>\\n    <li>Evidence of the landlord and the tenant.</li>\\n    <li>Special circumstances necessitating the increase in rent e.g., a new amenity has been included, etc.</li>\\n</ul>\\n\\n<span>The tenant can apply to the court to pay the current rent to the court’s registry. The landlord will then be required to approach the court to receive the rent but a sum amounting to 10% of the rent will be deducted by the court before handing over the rent to the landlord.</span>\\n\\n<span>In <em>JOVINCO NIGERIA LTD & ANOR V. IBEOZIMAKO (2014) LPELR-23599(CA)</em>, the court held that a landlord cannot unilaterally increase rent. An increment in rent must be supported by an agreement – since the landlord and tenancy relationship is a contractual relationship.</span>\\n\\n<span>In <em>COBRA LTD V. OMOLE ESTATE AND INVESTMENT LTD (2000) 1 NWLR (Pt. 655)</em>, the court held that unless there is an agreement between the landlord and the tenant, a landlord’s unilateral decision to increase rent is ineffective. See also, <em>UDIHI V. IZEDOMWEN (1990) 2 NWLR (Pt. 132), 357 at 366</em>.</span>\\n\\n<span>In a more recent case of <em>CHISCO TRANSPORT (NIG) LTD V. NJOKU & ORS (2024) LPELR-62333 (CA)</em>, the court held that a landlord does not possess the power to unilaterally increase rent. The matter of rent increment must be supported by an agreement to that effect.</span>\\n\\n<span>8. Rights of a Landlord</span>\\n<ul>\\n    <li>Right to obtain a court order to re-enter and end the tenancy if the tenant breaches any covenants of the tenancy agreement.</li>\\n    <li>Right to apply for court order for possession on the grounds that the premises is being used for immoral or illegal purposes, the premises has been abandoned, the premises is unsafe and unsound as to constitute a danger to human life or property, an act of intolerable nuisance by the tenant such that induces a breach of the tenancy agreement.</li>\\n    <li>Right to recover the premises where a fixed tenancy has ended.</li>\\n    <li>The 7 days notice of Owner’s intention to recover possession has been served on the tenant.</li>\\n</ul>\\n\\n<span>9. Landlords Obligations</span>\\n<ul>\\n    <li>Issue payment receipt to tenants for the payment of rent. A landlord who fails to issue a rent payment receipt is guilty of an offence and liable to pay a fine of N100,000.</li>\\n    <li>Issue a separate receipt for the payment of security deposit to cover damages and repairs to the premises, services and facilities, service charge.</li>\\n    <li>Not to disturb the tenant's quiet and peaceable enjoyment of the premises. Peace and quiet enjoyment include the tenant’s right to privacy, freedom from unreasonable disturbance, exclusive possession of the premises, right to common areas for reasonable and lawful purpose.</li>\\n    <li>Pay all rates and charges as stipulated by law e.g., land use charge, LAWMA, etc.</li>\\n    <li>Keep the premises insured against loss or damage e.g., providing security.</li>\\n    <li>Not terminate or restrict the use of a common facility or service for the use of the premises.</li>\\n    <li>Not seize any item or property of the tenant or interfere with the tenant's access to his personal property.</li>\\n    <li>Effect repairs and maintain the external and common parts of the premises.</li>\\n</ul>\\n\\n<span>10. How a Tenancy is Terminated</span>\\n<ul>\\n    <li>By notice to quit:</li>\\n    <ul>\\n        <li>One week’s notice for a tenant at will.</li>\\n        <li>One (1) month’s notice for a monthly tenant.</li>\\n        <li>Three (3) months’ notice for a quarterly tenant.</li>\\n        <li>Three (3) months’ notice for a half-yearly tenant.</li>\\n        <li>Six months’ notice for a yearly tenant.</li>\\n        <li>Tenancy for a fixed term: at the end of the tenancy/7 days notice of owner’s intention to recover possession.</li>\\n        <li>Licensees are entitled to a 7 days notice of owner's intention to apply to recover possession.</li>\\n    </ul>\\n    <li>By court order</li>\\n</ul>\\n\\n<span>11. Illegal/Unlawful Ways to Terminate a Tenancy</span>\\n<ul>\\n    <li>By harassment – wilfully removing the roof of the building, disconnecting electricity supply or water supply.</li>\\n    <li>Forcefully ejecting a tenant while an action is pending in court against the increment of rent.</li>\\n    <li>Threatening or molesting a tenant by action or words.</li>\\n</ul>\\n\\n<span>These actions are illegal and unlawful and carry liability in law. A landlord who commits any of these illegal acts is guilty of an offence and liable to a fine not exceeding N250,000 or a maximum of six (6) months imprisonment.</span>\\n\\n<span>12. General Limitations a Landlord Should Be Aware Of</span>\\n<ul>\\n    <li>Rent advance limitation</li>\\n    <li>Eviction limitation – i.e., without following legal procedures.</li>\\n    <li>Rent review limitations</li>\\n</ul>\\n\\n<span>13. Strategies for Mitigating These Limitations</span>\\n<ul>\\n    <li>Landlords should conduct thorough tenant screening to reduce default risks.</li>\\n    <li>Drafting airtight tenancy agreements that clarify all obligations.</li>\\n    <li>Ensure compliance with statutory notices for eviction and rent increases.</li>\\n    <li>Immediately take legal action when tenants default to minimize delays.</li>\\n</ul>\\n\\n<span>14. Resolving Disputes Under the Law</span>\\n<span>The Tenancy Law promotes alternative ways of amicably resolving disputes between a landlord and tenant such as reconciliation and mediation. However, the court can refer a tenancy dispute to mediation (at the Citizen Mediation Centre or to the Lagos Multi-Door Court House) without the consent of the landlord and the tenant (S. 32).</span>\\n<span>An agreement known as a mediation agreement is typically executed at the end of mediation and enforced by the court.</span>\\n\\n<span>15. Conclusion</span>\\n<span>The Tenancy Law of Lagos State 2011 is a comprehensive legal framework designed to balance the interests of landlords and tenants while promoting fairness and stability in the rental market. It emphasizes the importance of written agreements, proper notice periods, and due process in resolving disputes. Both landlords and tenants are encouraged to familiarize themselves with the Law to ensure compliance and avoid legal pitfalls.</span>\\n\\n<span>At Roothe-Kharis, we specialize in guiding both landlords and tenants through the complexities of laws and regulations, ensuring compliance and minimizing legal risks. Whether you are a property owner seeking to protect your investment or a tenant aiming to understand your rights, our expert team is here to provide tailored solutions and unparalleled support.</span>\\n\\n<span>Do not hesitate to contact us if you have any questions or require further clarifications on this article. Let us help you unlock the full potential of your property or tenancy experience with confidence and peace of mind.</span>\\n\\n</body>\\n</html>"},{"link":"legal-considerations-in-real-estate-investment-and-development-in-nigeria/","image":"estate.jpg","image2":"estate2.jpg","title":"  Legal Considerations In Real Estate Investment And Development In Nigeria","text":" In Nigeria, real estate investment and development is widely recognized as a profitable and stable venture, offering long-term financial benefits. ","date":"26 Mar 2025","content":"<html><head></head><body><span>Introduction</span><span>In Nigeria, real estate investment and development is widely recognized as a profitable and stable venture, offering long-term financial benefits. However, the acquisition and development of real property are subject to complex legal and regulatory frameworks that must be carefully navigated to ensure compliance and mitigate risks. Failure to adhere to these legal requirements may result in financial losses, disputes, or regulatory sanctions.</span><span>This article examines some key legal considerations in real estate investment and development in Nigeria, focusing on the legal framework for real estate investment and development, the verification of title, contractual obligations, and conflict resolution mechanisms.</span><span>As an investment asset, the tangible characteristic of real estate provides a sense of investment security unlike stocks and bonds. Regardless of market fluctuations, property value generally increases over time, making real estate an attractive long-term investment. Furthermore, the development of commercial and residential properties can provide an excellent passive income through lease payments, when properly managed.</span><span>In relation to development, a piece of real estate (for example, a bare land) can be developed for residential or commercial use by improving its physical aesthetics or such improvements that may enhance its value, or for a future sale.</span><span>1. Right to the ownership of real estate in Nigeria</span><span>The Constitution of the Federal Republic of Nigeria, 1999 (as amended) provides that '…every citizen of Nigeria shall have the right to acquire and own immovable property anywhere in Nigeria.' This forms the bedrock of the legal rights to the ownership of real estate (as an immovable) property in Nigeria.</span><span>Historically, the original ownership of real estate arose by either one of the following: deforestation/first settlement of a virgin land, conquest during inter-tribal wars, etc. In recent years, the ownership of real estate may devolve by a sale or purchase, or by inheritance through a clear and uncontroverted traditional history, or by gift, or by a customary grant, etc.</span><span>In rural areas, Customary right in the ownership of land is still practised in Nigeria wherein only a community, a village, or a family can exercise ownership to land or real estate – not an individual. In order for the sale or purchase of community land to be valid, several requirements must be fulfilled including the payment of a purchase price, the delivery of possession, and the presence of witnesses.</span><span>However, ownership of land in urban areas is subject to the Land Use Act 1978 which provides that '…all lands in urban areas shall be under the control and management of the Governor of each state…'.</span><span>2. The verification of title</span><span>The verification of an interest or title to a piece of real estate involves practical and procedural steps taken to confirm the legal ownership, validity, and enforceability of the claimed interest or title. This process typically includes:</span><ul><li>Reviewing the title documents,</li><li>Conducting due diligence,</li><li>Verifying encumbrances,</li><li>Checking compliance with regulatory requirements,</li><li>Ensuring there are no pre-existing disputes or defects that could affect the property’s marketability or transferability.</li></ul><span>In EFCC & ANOR V. IBRAHIM, Justice Peter Chudi Obiorah noted that 'it is not in the pages of newspapers that encumbrances on landed properties are registered.'</span><span>Title to a piece of real estate can be verified by traditional history/evidence, by duly authenticated and verified documents, by acts of ownership, by proof of possession of a connected land, and by sufficient acts of possession over a long period of time.</span><span>3. Foreign investment restrictions</span><span>In a plethora of decided cases, the Courts have held that the application of the Land Use Act 1978 is wholly for the benefit of Nigerians. However, a foreigner seeking to invest in Nigeria may do so subject to the provisions of the Nigerian Investment Promotion Commission Act, the Companies and Allied Matters Act, 2020, and under the close monitoring of the Foreign Exchange (Monitoring & Miscellaneous Provisions) Act amongst other applicable laws.</span><span>4. Compliance with zoning regulations</span><span>In Nigeria, land zoning and planning are governed by a combination of federal, state, and local government regulations. Zoning involves the systematic division of land into distinct zones based on designated purposes such as residential, agricultural, commercial, industrial, or recreational uses. Land zoning is aimed at optimizing land use, promoting orderly development, ensuring efficient resource allocation, and fostering sustainable and well-structured communities.</span><span>Non-compliance with zoning laws may result in regulatory sanctions, demolition orders, or avoidable legal disputes. In 2024, several buildings were demolished in Lagos State due to non-compliance with the Lagos State Urban and Regional Planning and Development (Amendment) Law 2019.</span><span>5. Taxation</span><span>It is important to note that investing in real estate attracts several taxes including capital gains tax charged at a flat rate of 10% on the profit from the sale of a property, stamp duty tax charged ad-valorem on the documents of transfer and varies according to each state law and the document type, others are company income tax, and personal income tax.</span><span>6. Conflict resolution mechanisms</span><span>Conflict may arise at any time within real estate investment and development cycle from land ownership and title disputes, breach of contract, regulatory non-compliance, opposition from the community, the list is endless. Effective conflict resolution mechanisms are crucial to maintaining investor confidence, ensuring project continuity, and a stable real estate market.</span><span>In Nigeria, real estate conflicts are governed by the Land Use Act 1978, the Urban and Regional Planning Act, contract law, state laws, the civil procedure rules of each state, other relevant laws, regulations, and policies.</span><span>Depending on the nature of the conflict, resolution may be pursued in court through litigation, or through alternatives such as negotiation, mediation, arbitration, or regulatory intervention.</span><span>BEST PRACTICES FOR PREVENTING CONFLICT IN REAL ESTATE TRANSACTIONS</span><span>At Roothe-Kharis & Partners, we understand that real estate investment and development require a strategic approach that balances legal compliance, commercial viability, and risk management. With extensive expertise in real estate transactions, Roothe-Kharis provides tailored legal solutions that support clients throughout the entire property lifecycle - from acquisition and financing to development, management, and exit strategies.</span><span>Our team is well versed in land title verification, joint venture structuring, project financing, zoning and planning regulations, conflict prevention and resolution mechanisms.</span><span>In line with our commitment to delivering end-to-end legal solutions, we highlight below key practices to ensure that stakeholders operate with legal certainty and commercial confidence:</span><ul><li>Early consultation with experts: engaging legal, financial, and technical experts at the outset of a real estate transaction or development project would help identify and mitigate potential risks before they escalate. Early legal intervention ensures proper structuring, regulatory compliance and due diligence.</li><li>Comprehensive due diligence: investors and developments must conduct thorough title verification, regulatory compliance checks, and community engagements before acquiring real estate.</li><li>Well-structured contracts: whether advising institutional investors, developers, financiers, or private clients, clearly drafted agreements, including dispute resolution clauses, help prevent ambiguities that may lead to conflicts.</li><li>Stakeholder engagements: proactive consultation with government agencies, host communities, and regulatory bodies can mitigate disputes.</li><li>ADR mechanisms: considering the time and cost implications of litigation, ADR mechanisms should be deployed at the earliest possible signs of a conflict.</li></ul><span>CONCLUSION</span><span>Navigating the legal landscape of real estate investment and development in Nigeria requires a thorough understanding of the regulatory framework, compliance requirements, and risk mitigation strategies. From land acquisition and title verification to zoning laws and contractual agreements, investors must be well-informed to avoid legal pitfalls and ensure profitable ventures.</span><span>Engaging experienced legal professionals is crucial to safeguarding investments and achieving long-term success in this dynamic sector. Our deep expertise in real estate law makes us well-versed in providing comprehensive advisory and legal services tailored to the unique needs of our clients. By partnering with Roothe-Kharis, investors can confidently make informed decisions, minimize risks, and maximize the potential of their real estate investments in Nigeria.</span><span>Do not hesitate to contact us if you are seeking to explore new opportunities or expand your investment portfolios. Roothe-Kharis offers personalized legal solutions and strategic insights to help clients unlock growth and achieve their business objectives in Nigeria’s thriving real estate market.</span></body></html>"},{"link":"understanding-the-deed-of-assent-transferring-legal-title-to-beneficiaries-under-a-will","image":"deed.jpg","image2":"deed2.jpg","title":" Understanding The Deed Of Assent: Transferring Legal Title To Beneficiaries Under a Will","text":" A Deed of Assent is an instrument or legal document that comes into existence in furtherance of the devolution of title to real property to beneficiaries under a Will","date":"26 Mar 2025","content":"<span>Introduction</span>\\n<span>A Deed of Assent is an instrument or legal document that comes into existence in furtherance of \\nthe devolution of title to real property to beneficiaries under a Will. It is important to state that a \\nwill in itself cannot confer title or ownership on a beneficiary, it only accords a named beneficiary \\nan equitable interest in the property gifted to him while a deed of assent accords a legal title or \\nownership to the property. A named beneficiary in a Will cannot assume legal title or ownership \\nof any property gifted to him until a deed of assent has been executed in his favour.</span>\\n\\n<span>A deed of assent serves the purpose of conferring legal ownership of a gift in a Will on the named \\nbeneficiaries or a third party by Executors or Administrators of an estate. Where a deed of assent \\nhas been duly executed in favour of the beneficiaries, a third party cannot subsequently lay claims \\nto the properties that have been duly passed on to the intended beneficiaries.</span>\\n\\n<span>Section 40 of the Administration of Estate Law of Lagos State provides for the effect of assent by \\nthe personal representative. It states that “a personal representative may assent to the vesting in any \\nperson who either by devise, bequest, devolution, appropriation or otherwise, may be entitled to, either \\nbeneficiary or as a trustee or personal representative, of any estate or interest in real estate to which the \\ntestator or intestate was entitled or over which he exercised a general power of appointment by his will \\nand which devolved upon the personal representative.”</span>\\n\\n<span>Conditions for a Valid Assent</span>\\n<ul>\\n<li>An assent to the vesting of a legal estate shall be in writing.</li>\\n<li>It shall be signed by the personal representative.</li>\\n<li>It shall name the person in whose favour it is given.</li>\\n<li>It shall operate to vest in that person the legal estate to which it relates.</li>\\n<li>An assent not in writing or not in favour of a named person shall not be effectual to \\npass a legal estate.</li>\\n</ul>\\n\\n<span>Checklist of the Requirements for Registration</span>\\n<ul>\\n<li>An application letter addressed to the Registrar of Titles requesting to register a deed \\nof assent with a functional phone number and email address.</li>\\n<li>Two copies of the Deed of Assent/ Vesting Deed.</li>\\n<li>Deed must be dated, signed, and each page initialed.</li>\\n<li>Passport photographs of all the administrators/executors to be attached to the deed.</li>\\n<li>The front cover of the deed must be signed and sealed by the solicitor who prepared \\nthe deed.</li>\\n<li>Spiral/bookbinding.</li>\\n<li>A certified true copy of the root of title.</li>\\n<li>A certified true copy of the letter of administration/ Will.</li>\\n<li>A sworn affidavit deposed to by the administrators/executors attesting to the vesting.</li>\\n<li>Original for sighting and one copy of the valid means of identification of all the \\nadministrators/executors.</li>\\n<li>Payment receipt.</li>\\n</ul>\\n\\n<span>Conclusion</span>\\n<span>A Deed of Assent is so important in the devolution of the estate of the deceased. The title in a \\nproperty cannot pass to the intended named beneficiary or any third party without a duly \\nexecuted deed of assent, which must be signed by the Executors or Administrators to the Will. \\nAnd as earlier stated, once it has fulfilled the conditions highlighted above, a third party cannot \\nlay claims to the properties of the deceased already passed on to the beneficiaries.</span>\\n\\n<span>Roothe-Kharis is a team of lawyers well versed in drafting legal contracts, wills and codicils. Do not hesitate to\\ncontact us if you have any questions or require further clarifications on this article. We are available to provide \\nthe support you need in navigating and distilling the fine prints of a testamentary document.</span>\\n"}]`
  );
function Dr() {
  const c = {
    "image1.jpg": Mr,
    "landlord.jpg": Ar,
    "estate.jpg": Tr,
    "deed.jpg": Rr,
  };
  return (
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    s.jsxs("section", {
      className: V2.blog,
      children: [
        s.jsxs("div", {
          className: V2.texts,
          children: [
            s.jsx("label", { htmlFor: "", children: "Latest Article" }),
            s.jsx("h2", { children: "Blog Posts" }),
          ],
        }),
        s.jsx("div", {
          className: V2.container,
          children: Or.map((f, C) =>
            s.jsxs(
              "div",
              {
                className: V2.container1,
                children: [
                  s.jsx("img", { src: c[f.image], alt: "" }),
                  s.jsxs("div", {
                    children: [
                      s.jsx("label", { htmlFor: "", children: f.date }),
                      s.jsxs("div", {
                        className: V2.h3,
                        children: [
                          s.jsx("h3", { children: f.title }),
                          s.jsx(C1, {
                            to: "/blog-details",
                            state: { data: f },
                            children: s.jsx("svg", {
                              width: "12",
                              height: "12",
                              viewBox: "0 0 12 12",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              children: s.jsx("path", {
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
                      s.jsx("span", { children: f.text }),
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
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Y4, {}), s.jsx(Dr, {}), s.jsx(G4, {})],
  });
}
const Nr = "./assets/image3-B9EbOBdR.jpg",
  Ur = "./assets/landlords-DQkYY7ty.jpg",
  Vr = "./assets/estate2-By-PFYrI.jpg",
  Br = "./assets/deed2-OpPjfkaN.jpg";
function qr() {
  const c = {
      "image2.jpg": Nr,
      "landlord2.jpg": Ur,
      "estate2.jpg": Vr,
      "deed2.jpg": Br,
    },
    f = s3();
  al();
  const { data: C, link: o } = f.state || {};
  return (
    console.log(f.state),
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    C
      ? (j.useEffect(() => {
          window.scrollTo(0, 0);
          const h = (p) => p.preventDefault();
          return (
            document.addEventListener("contextmenu", h),
            () => {
              document.removeEventListener("contextmenu", h);
            }
          );
        }, []),
        s.jsx("section", {
          className: V2.detail,
          children: s.jsxs("div", {
            className: V2.texts,
            children: [
              s.jsx("label", { htmlFor: "", children: "Latest Article" }),
              s.jsx("h2", { children: C.title }),
              C.image2 &&
                s.jsx("img", { src: c[C.image2] || C.image2, alt: C.title }),
              s.jsx("div", {
                className: V2.admin,
                children: s.jsx("span", { children: C.date }),
              }),
              s.jsx("div", {
                className: V2.intro,
                children: s.jsx("div", {
                  dangerouslySetInnerHTML: { __html: C.content },
                }),
              }),
              s.jsxs("span", {
                className: V2.help,
                children: [
                  s.jsx(C1, {
                    to: "https://calendly.com/roothekharispartners/30min",
                    children: s.jsx("p", { children: "Book a consultation." }),
                  }),
                  s.jsx("span", { children: "© Roothe-Kharis & Partners" }),
                ],
              }),
            ],
          }),
        }))
      : s.jsx("p", { children: "Loading..." })
  );
}
function Zr() {
  return s.jsxs(s.Fragment, {
    children: [s.jsx(Y4, {}), s.jsx(qr, {}), s.jsx(G4, {})],
  });
}
function Yr() {
  return s.jsx(C1, {
    to: "https://wa.me/2349076490029",
    children: s.jsx("div", {
      className: "svg2",
      children: s.jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        x: "0px",
        y: "0px",
        width: "48",
        height: "48",
        viewBox: "0 0 48 48",
        children: [
          s.jsx("path", {
            fill: "#fff",
            d: "M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z",
          }),
          s.jsx("path", {
            fill: "#fff",
            d: "M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z",
          }),
          s.jsx("path", {
            fill: "#cfd8dc",
            d: "M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z",
          }),
          s.jsx("path", {
            fill: "#40c351",
            d: "M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z",
          }),
          s.jsx("path", {
            fill: "#fff",
            "fill-rule": "evenodd",
            d: "M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z",
            "clip-rule": "evenodd",
          }),
        ],
      }),
    }),
  });
}
function Gr() {
  return s.jsx(s.Fragment, {
    children: s.jsxs(hs, {
      children: [
        s.jsx(Yr, {}),
        s.jsxs(Xu, {
          children: [
            s.jsx(l4, { path: "/", element: s.jsx(Hc, {}) }),
            s.jsx(l4, { path: "/aboutus", element: s.jsx(yr, {}) }),
            s.jsx(l4, { path: "/services", element: s.jsx(tr, {}) }),
            s.jsx(l4, { path: "/Articles", element: s.jsx(zr, {}) }),
            s.jsx(l4, { path: "/blog-details", element: s.jsx(Zr, {}) }),
            s.jsx(l4, { path: "/contactus", element: s.jsx(zc, {}) }),
          ],
        }),
      ],
    }),
  });
}
Zi.createRoot(document.getElementById("root")).render(
  s.jsx(j.StrictMode, { children: s.jsx(Gr, {}) })
);
