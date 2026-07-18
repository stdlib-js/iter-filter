"use strict";var w=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(u){throw (r=0, u)}};};var m=w(function(F,c){
var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/assert-is-function/dist'),x=require('@stdlib/assert-is-iterator-like/dist'),i=require('@stdlib/symbol-iterator/dist'),f=require('@stdlib/error-tools-fmtprodmsg/dist');function s(e,r,u){var t,a,o;if(!x(e))throw new TypeError(f('0Ox46',e));if(!v(r))throw new TypeError(f('0Ox2H',r));return o=-1,t={},l(t,"next",d),l(t,"return",q),i&&v(e[i])&&l(t,i,g),t;function d(){var n;if(a)return{done:!0};for(;;){if(n=e.next(),o+=1,n.done)return a=!0,n;if(r.call(u,n.value,o))return{value:n.value,done:!1}}}function q(n){return a=!0,arguments.length?{value:n,done:!0}:{done:!0}}function g(){return s(e[i](),r,u)}}c.exports=s
});var y=m();module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
