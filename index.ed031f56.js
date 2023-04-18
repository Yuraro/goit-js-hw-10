!function(){function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(n){return n&&n.constructor===Symbol?"symbol":typeof n};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(t){var e=void 0===t?"undefined":n(o)(t);return!!t&&("object"==e||"function"==e)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":n(o)(t))||function(n){return!!n&&"object"==typeof n}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var f=a.test(t);return f||c.test(t)?u(t.slice(2),f?2:8):r.test(t)?NaN:+t}e=function(n,t,e){var o,i,r,a,c,u,f=0,l=!1,s=!1,d=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,r=i;return o=i=void 0,f=t,a=n.apply(r,e)}function b(n){return f=n,c=setTimeout(T,t),l?h(n):a}function j(n){var e=n-u;return void 0===u||e>=t||e<0||s&&n-f>=r}function T(){var n=g();if(j(n))return C(n);c=setTimeout(T,function(n){var e=t-(n-u);return s?p(e,r-(n-f)):e}(n))}function C(n){return c=void 0,d&&o?h(n):(o=i=void 0,a)}function w(){var n=g(),e=j(n);if(o=arguments,i=this,u=n,e){if(void 0===c)return b(u);if(s)return c=setTimeout(T,t),h(u)}return void 0===c&&(c=setTimeout(T,t)),a}return t=m(t)||0,y(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(m(e.maxWait)||0,t):r,d="trailing"in e?!!e.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),f=0,o=u=i=c=void 0},w.flush=function(){return void 0===c?a:C(g())},w};var h=document.querySelector("#search-box"),b=document.querySelector(".country-list"),j=document.querySelector(".country-info");h.addEventListener("input",n(e)((function(n){var t=n.target.value.trim();if(!t)return clearCountryInfo(),void clearCountryList();(e=t,fetch("https://restcountries.com/v3.1/name/".concat(e,"?fields=name.official,capital,population,flags.svg,languages")).then((function(n){return n.json()})).catch((function(n){return console.log(n)}))).then((function(n){var t;1===n.length?(t=n[0],j.innerHTML="\n    <h2>".concat(t.name.official,"</h2>\n    <p><strong>Capital:</strong> ").concat(t.capital,"</p>\n    <p><strong>Population:</strong> ").concat(t.population,'</p>\n    <img src="').concat(t.flags.svg,'" alt="').concat(t.name.official,' flag">\n    <h3>Languages:</h3>\n    <div>\n        <ul>\n        ').concat(Object.values(t.languages).map((function(n){return"\n            <li>".concat(n,"</li>\n        ")})).join(""),"\n        </ul>\n    </div>\n</div>\n"),clearCountryList()):n.length>1&&n.length<=10?(!function(n){b.innerHTML="\n    <ul>\n    ".concat(n.map((function(n){return'\n        <li>\n            <img src="'.concat(n.flags.svg,'" alt="').concat(n.name.official,' flag">\n            <span>').concat(n.name.official,"</span>\n        </li>\n    ")})).join(""),"\n    </ul>\n")}(n),clearCountryInfo()):n.length>10?(showNotification("Too many matches found. Please enter a more specific query."),clearCountryInfo(),clearCountryList()):(showNotification("Country not found."),clearCountryInfo(),clearCountryList())})).catch((function(n){return"Not founded."}));var e}),300))}();
//# sourceMappingURL=index.ed031f56.js.map
