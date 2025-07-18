import {
  require_jsx_runtime
} from "./chunk-Q4CGI3WH.js";
import {
  require_react
} from "./chunk-VMNDQG7U.js";
import {
  __commonJS
} from "./chunk-4MBMRILA.js";

// node_modules/react-simple-typewriter/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-simple-typewriter/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var e = require_jsx_runtime();
    var t = require_react();
    var r = function() {
      return r = Object.assign || function(e2) {
        for (var t2, r2 = 1, o2 = arguments.length; r2 < o2; r2++) for (var n2 in t2 = arguments[r2]) Object.prototype.hasOwnProperty.call(t2, n2) && (e2[n2] = t2[n2]);
        return e2;
      }, r.apply(this, arguments);
    };
    function o(e2, t2) {
      var o2, n2;
      switch (t2.type) {
        case "TYPE":
          return r(r({}, e2), { speed: t2.speed, text: null === (o2 = t2.payload) || void 0 === o2 ? void 0 : o2.substring(0, e2.text.length + 1) });
        case "DELAY":
          return r(r({}, e2), { speed: t2.payload });
        case "DELETE":
          return r(r({}, e2), { speed: t2.speed, text: null === (n2 = t2.payload) || void 0 === n2 ? void 0 : n2.substring(0, e2.text.length - 1) });
        case "COUNT":
          return r(r({}, e2), { count: e2.count + 1 });
        default:
          return e2;
      }
    }
    var n = function(e2) {
      var r2 = e2.words, n2 = void 0 === r2 ? ["Hello World!", "This is", "a simple Typewriter"] : r2, i2 = e2.loop, s2 = void 0 === i2 ? 1 : i2, u2 = e2.typeSpeed, l = void 0 === u2 ? 80 : u2, c = e2.deleteSpeed, d = void 0 === c ? 50 : c, a = e2.delaySpeed, p = void 0 === a ? 1500 : a, y = e2.onLoopDone, f = e2.onType, v = e2.onDelete, m = e2.onDelay, h = t.useReducer(o, { speed: l, text: "", count: 0 }), T = h[0], g = T.speed, _ = T.text, x = T.count, D = h[1], C = t.useRef(0), E = t.useRef(false), S = t.useRef(false), b = t.useRef(false), k = t.useRef(false), w = t.useCallback(function() {
        var e3 = x % n2.length, t2 = n2[e3];
        S.current ? (D({ type: "DELETE", payload: t2, speed: d }), "" === _ && (S.current = false, D({ type: "COUNT" }))) : (D({ type: "TYPE", payload: t2, speed: l }), b.current = true, _ === t2 && (D({ type: "DELAY", payload: p }), b.current = false, k.current = true, setTimeout(function() {
          k.current = false, S.current = true;
        }, p), s2 > 0 && (C.current += 1, C.current / n2.length === s2 && (k.current = false, E.current = true)))), b.current && f && f(C.current), S.current && v && v(), k.current && m && m();
      }, [x, p, d, s2, l, n2, _, f, v, m]);
      return t.useEffect(function() {
        var e3 = setTimeout(w, g);
        return E.current && clearTimeout(e3), function() {
          return clearTimeout(e3);
        };
      }, [w, g]), t.useEffect(function() {
        y && E.current && y();
      }, [y]), [_, { isType: b.current, isDelay: k.current, isDelete: S.current, isDone: E.current }];
    };
    var i = "styles-module_blinkingCursor__yugAC";
    var s = "styles-module_blinking__9VXRT";
    !function(e2, t2) {
      void 0 === t2 && (t2 = {});
      var r2 = t2.insertAt;
      if (e2 && "undefined" != typeof document) {
        var o2 = document.head || document.getElementsByTagName("head")[0], n2 = document.createElement("style");
        n2.type = "text/css", "top" === r2 && o2.firstChild ? o2.insertBefore(n2, o2.firstChild) : o2.appendChild(n2), n2.styleSheet ? n2.styleSheet.cssText = e2 : n2.appendChild(document.createTextNode(e2));
      }
    }(".styles-module_blinkingCursor__yugAC{color:inherit;font:inherit;left:3px;line-height:inherit;opacity:1;position:relative;top:0}.styles-module_blinking__9VXRT{animation-duration:.8s;animation-iteration-count:infinite;animation-name:styles-module_blink__rqfaf}@keyframes styles-module_blink__rqfaf{0%{opacity:1}to{opacity:0}}");
    var u = t.memo(function(t2) {
      var o2 = t2.cursorBlinking, n2 = void 0 === o2 || o2, u2 = t2.cursorStyle, l = void 0 === u2 ? "|" : u2, c = t2.cursorColor, d = void 0 === c ? "inherit" : c;
      return e.jsx("span", r({ style: { color: d }, className: "".concat(i, " ").concat(n2 ? s : "") }, { children: l }));
    });
    exports.Cursor = u, exports.Typewriter = function(t2) {
      var r2 = t2.words, o2 = void 0 === r2 ? ["Hello World!", "This is", "a simple Typewriter"] : r2, i2 = t2.loop, s2 = void 0 === i2 ? 1 : i2, l = t2.typeSpeed, c = void 0 === l ? 80 : l, d = t2.deleteSpeed, a = void 0 === d ? 50 : d, p = t2.delaySpeed, y = void 0 === p ? 1500 : p, f = t2.cursor, v = void 0 !== f && f, m = t2.cursorStyle, h = void 0 === m ? "|" : m, T = t2.cursorColor, g = void 0 === T ? "inherit" : T, _ = t2.cursorBlinking, x = void 0 === _ || _, D = t2.onLoopDone, C = t2.onType, E = t2.onDelay, S = t2.onDelete, b = n({ words: o2, loop: s2, typeSpeed: c, deleteSpeed: a, delaySpeed: y, onLoopDone: D, onType: C, onDelay: E, onDelete: S })[0];
      return e.jsxs(e.Fragment, { children: [e.jsx("span", { children: b }), v && e.jsx(u, { cursorStyle: h, cursorColor: g, cursorBlinking: x })] });
    }, exports.useTypewriter = n;
  }
});
export default require_dist();
//# sourceMappingURL=react-simple-typewriter.js.map
