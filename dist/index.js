"use strict";var w=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var m=w(function(F,c){
var o=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),u=require('@stdlib/symbol-iterator/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(e,r,l){var t,i,a;if(!x(e))throw new TypeError(f('0Ox46',e));if(!v(r))throw new TypeError(f('0Ox2H',r));return a=-1,t={},o(t,"next",d),o(t,"return",q),u&&v(e[u])&&o(t,u,g),t;function d(){var n;if(i)return{done:!0};for(;;){if(n=e.next(),a+=1,n.done)return i=!0,n;if(r.call(l,n.value,a))return{value:n.value,done:!1}}}function q(n){return i=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return s(e[u](),r,l)}}c.exports=s
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
