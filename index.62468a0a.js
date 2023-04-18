function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,p=Math.max,y=Math.min,d=function(){return l.Date.now()};function g(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function v(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==s.call(n)}(n))return NaN;if(g(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=g(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=r.test(n);return e||a.test(n)?u(n.slice(2),e?2:8):i.test(n)?NaN:+n}e=function(n,t,e){var o,i,r,a,u,f,c=0,l=!1,s=!1,m=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function h(t){var e=o,r=i;return o=i=void 0,c=t,a=n.apply(r,e)}function b(n){return c=n,u=setTimeout(j,t),l?h(n):a}function $(n){var e=n-f;return void 0===f||e>=t||e<0||s&&n-c>=r}function j(){var n=d();if($(n))return C(n);u=setTimeout(j,function(n){var e=t-(n-f);return s?y(e,r-(n-c)):e}(n))}function C(n){return u=void 0,m&&o?h(n):(o=i=void 0,a)}function T(){var n=d(),e=$(n);if(o=arguments,i=this,f=n,e){if(void 0===u)return b(f);if(s)return u=setTimeout(j,t),h(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=v(t)||0,g(e)&&(l=!!e.leading,r=(s="maxWait"in e)?p(v(e.maxWait)||0,t):r,m="trailing"in e?!!e.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:C(d())},T};const m=document.querySelector("#search-box"),h=document.querySelector(".country-list"),b=document.querySelector(".country-info");m.addEventListener("input",n(e)((function(n){const t=n.target.value.trim();if(!t)return clearCountryInfo(),void clearCountryList();(e=t,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name.official,capital,population,flags.svg,languages`).then((n=>n.json())).catch((n=>console.log(n)))).then((n=>{var t;1===n.length?(t=n[0],b.innerHTML=`\n    <h2>${t.name.official}</h2>\n    <p><strong>Capital:</strong> ${t.capital}</p>\n    <p><strong>Population:</strong> ${t.population}</p>\n    <img src="${t.flags.svg}" alt="${t.name.official} flag">\n    <h3>Languages:</h3>\n    <div>\n        <ul>\n        ${Object.values(t.languages).map((n=>`\n            <li>${n}</li>\n        `)).join("")}\n        </ul>\n    </div>\n</div>\n`,clearCountryList()):n.length>1&&n.length<=10?(!function(n){h.innerHTML=`\n    <ul>\n    ${n.map((n=>`\n        <li>\n            <img src="${n.flags.svg}" alt="${n.name.official} flag">\n            <span>${n.name.official}</span>\n        </li>\n    `)).join("")}\n    </ul>\n`}(n),clearCountryInfo()):n.length>10?(showNotification("Too many matches found. Please enter a more specific query."),clearCountryInfo(),clearCountryList()):(showNotification("Country not found."),clearCountryInfo(),clearCountryList())})).catch((n=>{n&&n.response&&404===n.response.status&&showNotification("Country not found."),clearCountryInfo(),clearCountryList()}));var e}),300));
//# sourceMappingURL=index.62468a0a.js.map