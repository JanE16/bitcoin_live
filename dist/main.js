!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=({bpi:{EUR:{rate_float:e}},bpi:{EUR:{description:t}},bpi:{USD:{rate_float:r}},bpi:{USD:{description:n}},bpi:{GBP:{rate_float:o}},bpi:{GBP:{description:a}},chartName:i,disclaimer:u})=>new class{constructor({euroRate:e,euroName:t,dolarRate:r,dolarName:n,name:o,disclaimer:a,poundRate:i,poundName:u}){this.euroRate=e,this.euroName=t,this.dolarRate=r,this.dolarName=n,this.poundName=u,this.poundRate=i,this.name=o,this.disclaimer=a}}({poundRate:o,poundName:a,euroRate:e,euroName:t,dolarRate:r,dolarName:n,name:i,disclaimer:u});const o="https://api.coindesk.com/v1/bpi/currentprice.json";async function a(){try{const e=await fetch(o);if(e.ok){const t=await e.json();return setTimeout(a,1e3),n(t)}throw Error("response not ok")}catch(e){return console.warn("zjebało się"),setTimeout(a,1e3),""}}setInterval(function(){a().then(e=>e.name).then(e=>{document.querySelector(".bitcoin").innerText=e}),a().then(e=>e.disclaimer).then(e=>{document.querySelector(".disclaimer").innerText=e}),a().then(e=>`${e.dolarName} : ${e.dolarRate}`).then(e=>{document.querySelector(".dolar").innerText=e}),a().then(e=>`${e.euroName} : ${e.euroRate}`).then(e=>{document.querySelector(".euro").innerText=e}),a().then(e=>`${e.poundName} : ${e.poundRate}`).then(e=>{document.querySelector(".pound").innerText=e})},3e3)}]);