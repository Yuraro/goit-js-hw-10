!function(){function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}};var o={},i=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=_(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var s="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function y(){}function g(){}function m(){}var w={};c(w,i,(function(){return this}));var b=Object.getPrototypeOf,L=b&&b(b(k([])));L&&L!==r&&n.call(L,i)&&(w=L);var x=m.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var f=c.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function _(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,_(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:S}}function S(){return{value:e,done:!0}}return g.prototype=m,c(x,"constructor",m),c(m,"constructor",g),g.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(j.prototype),c(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(x),c(x,u,"Generator"),c(x,i,(function(){return this})),c(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(o);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}function a(t){return fetch("${BASE_URL}${name}?${fields}").then((function(t){return t.json()}))}var u,c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,h=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,y=v||d||Function("return this")(),g=Object.prototype.toString,m=Math.max,w=Math.min,b=function(){return y.Date.now()};function L(e){var r=void 0===e?"undefined":t(c)(e);return!!e&&("object"==r||"function"==r)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(c)(e))||function(t){return!!t&&"object"==typeof t}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(L(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=L(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=s.test(e);return n||h.test(e)?p(e.slice(2),n?2:8):l.test(e)?NaN:+e}u=function(t,e,r){var n,o,i,a,u,c,f=0,l=!1,s=!1,h=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function p(e){var r=n,i=o;return n=o=void 0,f=e,a=t.apply(i,r)}function v(t){return f=t,u=setTimeout(y,e),l?p(t):a}function d(t){var r=t-c;return void 0===c||r>=e||r<0||s&&t-f>=i}function y(){var t=b();if(d(t))return g(t);u=setTimeout(y,function(t){var r=e-(t-c);return s?w(r,i-(t-f)):r}(t))}function g(t){return u=void 0,h&&n?p(t):(n=o=void 0,a)}function E(){var t=b(),r=d(t);if(n=arguments,o=this,c=t,r){if(void 0===u)return v(c);if(s)return u=setTimeout(y,e),p(c)}return void 0===u&&(u=setTimeout(y,e)),a}return e=x(e)||0,L(r)&&(l=!!r.leading,i=(s="maxWait"in r)?m(x(r.maxWait)||0,e):i,h="trailing"in r?!!r.trailing:h),E.cancel=function(){void 0!==u&&clearTimeout(u),f=0,n=c=o=u=void 0},E.flush=function(){return void 0===u?a:g(b())},E};var E=document.getElementById("search-box"),j=document.querySelector(".country-list"),_=document.querySelector(".country-info");function O(){return(O=t(r)(t(o).mark((function e(){var r,n;return t(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==E.value.trim().length){t.next=4;break}return T(),t.abrupt("return");case 4:return t.next=6,a();case 6:if(0!==(r=t.sent).length){t.next=11;break}return j.innerHTML="<li>No countries found</li>",_.innerHTML="",t.abrupt("return");case 11:n=r.map((function(t){var e=document.createElement("li");return e.textContent=t.name,e.addEventListener("click",(function(){return N(t)})),e})),j.innerHTML="",n.forEach((function(t){return j.appendChild(t)}));case 14:case"end":return t.stop()}}),e)})))).apply(this,arguments)}function T(){j.innerHTML="",_.innerHTML=""}function N(t){var e=t.name,r=t.capital,n=t.population,o=t.languages,i=t.flag,a="\n    <h2>".concat(e,'</h2>\n    <img src="').concat(i,'" alt="').concat(e,' flag" width="200">\n    <p><strong>Capital:</strong> ').concat(r,"</p>\n    <p><strong>Population:</strong> ").concat(n,"</p>\n    <p><strong>Languages:</strong> ").concat(o.map((function(t){return t.name})).join(", "),"</p>\n");_.innerHTML=a}E.addEventListener("input",(function(){return O.apply(this,arguments)}),t(u)((function(t){t.preventDefault(),t.target.value.trim()}),300))}();
//# sourceMappingURL=index.1e86b7f8.js.map
