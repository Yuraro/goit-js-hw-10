function n(n){return n&&n.__esModule?n.default:n}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var e,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,u=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),l=Object.prototype.toString,p=Math.max,d=Math.min,g=function(){return s.Date.now()};function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function m(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(o,"");var e=r.test(n);return e||a.test(n)?u(n.slice(2),e?2:8):i.test(n)?NaN:+n}e=function(n,t,e){var o,i,r,a,u,f,c=0,s=!1,l=!1,h=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function y(t){var e=o,r=i;return o=i=void 0,c=t,a=n.apply(r,e)}function b(n){return c=n,u=setTimeout($,t),s?y(n):a}function j(n){var e=n-f;return void 0===f||e>=t||e<0||l&&n-c>=r}function $(){var n=g();if(j(n))return w(n);u=setTimeout($,function(n){var e=t-(n-f);return l?d(e,r-(n-c)):e}(n))}function w(n){return u=void 0,h&&o?y(n):(o=i=void 0,a)}function T(){var n=g(),e=j(n);if(o=arguments,i=this,f=n,e){if(void 0===u)return b(f);if(l)return u=setTimeout($,t),y(f)}return void 0===u&&(u=setTimeout($,t)),a}return t=m(t)||0,v(e)&&(s=!!e.leading,r=(l="maxWait"in e)?p(m(e.maxWait)||0,t):r,h="trailing"in e?!!e.trailing:h),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=i=u=void 0},T.flush=function(){return void 0===u?a:w(g())},T};const h=document.querySelector("#search-box"),y=document.querySelector(".country-list"),b=document.querySelector(".country-info");function j(){b.innerHTML=""}function $(){y.innerHTML=""}h.addEventListener("input",n(e)((function(n){const t=n.target.value.trim();if(!t)return j(),void $();(e=t,fetch(`https://restcountries.com/v3.1/name/${e}?fields=name,capital,population,flags,languages`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()}))).then((n=>{var t;1===n.length?(t=n[0],b.innerHTML=`\n    <h2>${t.name.official}</h2>\n    <p><strong>Capital:</strong> ${t.capital}</p>\n    <p><strong>Population:</strong> ${t.population}</p>\n    <img src="${t.flags.svg}" alt="${t.name.official} flag">\n    <h3>Languages:</h3>\n    <div>\n        <ul>\n        ${Object.values(t.languages).map((n=>`\n            <li>${n}</li>\n        `)).join("")}\n        </ul>\n    </div>\n</div>\n`,$()):n.length>1&&n.length<=10?(!function(n){const t=n.map((n=>`<li class="country--item">\n                    <img src="${n.flags.svg}" alt="Country flag"\n                        width="40", height="30">\n                    <span class="country-list--name">${n.name.official}</span>\n                </li>`)).join("");y.insertAdjacentHTML("beforeend",t)}(n),j()):n.length>10?(showNotification("Too many matches found. Please enter a more specific query."),j(),$()):(showNotification("Country not found."),j(),$())})).catch((n=>{n&&n.response&&404===n.response.status&&showNotification("Country not found."),j(),$()}));var e}),300));
//# sourceMappingURL=index.8411e610.js.map
