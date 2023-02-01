// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).iterFilter=t()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,f=n.__lookupGetter__,l=n.__lookupSetter__;t=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,t,r){var c,a,y,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(e,t)||l.call(e,t)?(c=e.__proto__,e.__proto__=n,delete e[t],e[t]=r.value,e.__proto__=c):e[t]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(e,t,r.get),p&&i&&i.call(e,t,r.set),e};var c=t;function a(e,t,r){c(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(e){return"boolean"==typeof e}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function m(e,t){return null!=e&&v.call(e,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var _=s()?function(e){var t,r,n;if(null==e)return d.call(e);r=e[w],t=m(e,w);try{e[w]=void 0}catch(t){return d.call(e)}return n=d.call(e),t?e[w]=r:delete e[w],n}:function(e){return d.call(e)},g=Boolean.prototype.toString;var j=s();function h(e){return"object"==typeof e&&(e instanceof Boolean||(j?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===_(e)))}function S(e){return p(e)||h(e)}function O(){return new Function("return this;")()}a(S,"isPrimitive",p),a(S,"isObject",h);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},x="object"==typeof A?A:null;var B=function(e){if(arguments.length){if(!p(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return O()}if(E)return E;if(T)return T;if(x)return x;throw new Error("unexpected error. Unable to resolve global object.")}(),P=B.document&&B.document.childNodes,C=Int8Array;function V(){return/^\s*function\s*([^(]*)/i}var k=/^\s*function\s*([^(]*)/i;a(V,"REGEXP",k);var F=Array.isArray?Array.isArray:function(e){return"[object Array]"===_(e)};function G(e){return null!==e&&"object"==typeof e}function L(e){var t,r,n,o;if(("Object"===(r=_(e).slice(8,-1))||"Error"===r)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(t=k.exec(n.toString()))return t[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(t){var r,n;if(!F(t))return!1;if(0===(r=t.length))return!1;for(n=0;n<r;n++)if(!1===e(t[n]))return!1;return!0}}(G));var I="function"==typeof y||"object"==typeof C||"function"==typeof P?function(e){return L(e).toLowerCase()}:function(e){var t;return null===e?"null":"object"===(t=typeof e)?L(e).toLowerCase():t};function M(e){return"function"===I(e)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;function U(){var e,t=arguments,r=t[0],n="https://stdlib.io/e/"+r+"?";for(e=1;e<t.length;e++)n+="&arg[]="+encodeURIComponent(t[e]);return n}return function e(t,r,n){var o,u,i,f,l;if(l=typeof(f=t),null===f||"object"!==l&&"function"!==l||!M(f.next))throw new TypeError(U("0CO4J",t));if(!M(r))throw new TypeError(U("0CO2S",r));return i=-1,a(o={},"next",(function(){var e;if(u)return{done:!0};for(;;){if(e=t.next(),i+=1,e.done)return u=!0,e;if(r.call(n,e.value,i))return{value:e.value,done:!1}}})),a(o,"return",(function(e){if(u=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),R&&M(t[R])&&a(o,R,(function(){return e(t[R](),r,n)})),o}}));
//# sourceMappingURL=browser.js.map
