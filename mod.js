// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},S="function"==typeof Symbol?Symbol.toStringTag:"",T=_,x=S,O=w;var V=j,k=function(r){var e,t,n;if(null==r)return O.call(r);t=r[x],e=T(r,x);try{r[x]=void 0}catch(e){return O.call(r)}return n=O.call(r),e?r[x]=t:delete r[x],n},I=y()?k:V,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},C=h,N=M;var B=m,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=I;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var sr=I,lr=ar.REGEXP,vr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var mr=pr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},br=tr()?hr:dr;var yr=function(r){return"function"===br(r)},wr=yr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)},jr=_;var Pr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&jr(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var _r=function(r){return"string"==typeof r},Sr=String.prototype.valueOf;var Tr=I,xr=function(r){try{return Sr.call(r),!0}catch(r){return!1}},Or=y();var Vr=function(r){return"object"==typeof r&&(r instanceof String||(Or?xr(r):"[object String]"===Tr(r)))},kr=_r,Ir=Vr;var Ar=m,Fr=function(r){return kr(r)||Ir(r)},Rr=Vr;Ar(Fr,"isPrimitive",_r),Ar(Fr,"isObject",Rr);var $r=Fr,Mr=Math.floor;var Cr=function(r){return Mr(r)===r},Nr=Cr;var Br=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Nr(r.length)&&r.length>=0&&r.length<=9007199254740991};var Gr=function(r){return"number"==typeof r},Lr=Number,Zr=Lr.prototype.toString;var Wr=I,Xr=Lr,zr=function(r){try{return Zr.call(r),!0}catch(r){return!1}},Ur=y();var Yr=function(r){return"object"==typeof r&&(r instanceof Xr||(Ur?zr(r):"[object Number]"===Wr(r)))},Dr=Gr,qr=Yr;var Hr=m,Jr=function(r){return Dr(r)||qr(r)},Kr=Yr;Hr(Jr,"isPrimitive",Gr),Hr(Jr,"isObject",Kr);var Qr=Jr,re=Number.POSITIVE_INFINITY,ee=Lr.NEGATIVE_INFINITY,te=re,ne=ee,ie=Cr;var ae=function(r){return r<te&&r>ne&&ie(r)},oe=Qr.isPrimitive,ue=ae;var ce=function(r){return oe(r)&&ue(r)},fe=Qr.isObject,se=ae;var le=function(r){return fe(r)&&se(r.valueOf())},ve=ce,pe=le;var ge=m,me=function(r){return ve(r)||pe(r)},de=le;ge(me,"isPrimitive",ce),ge(me,"isObject",de);var he=me;var be=function(r){return r!=r},ye=Qr.isPrimitive,we=be;var Ee=function(r){return ye(r)&&we(r)},je=Qr.isObject,Pe=be;var _e=function(r){return je(r)&&Pe(r.valueOf())},Se=Ee,Te=_e;var xe=m,Oe=function(r){return Se(r)||Te(r)},Ve=_e;xe(Oe,"isPrimitive",Ee),xe(Oe,"isObject",Ve);var ke=Br,Ie=he.isPrimitive,Ae=$r.isPrimitive,Fe=Oe.isPrimitive;var Re=function(r,e,t){var n,i,a;if(!ke(r)&&!Ae(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ie(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ae(r)){if(!Ae(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Fe(e)){for(a=i;a<n;a++)if(Fe(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},$e=$r.isPrimitive;var Me=function(r){if(!$e(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ce=$r.isPrimitive;var Ne=function(r){if(!Ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Be=Me,Ge=Ne,Le=$r.isPrimitive;var Ze=function(r){return Le(r)&&r===Ge(r)&&r!==Be(r)},We=re,Xe=ee;var ze=function(r){return r==r&&r>Xe&&r<We},Ue=he.isPrimitive;var Ye=function(r){return Ue(r)&&r>=0},De=he.isObject;var qe=function(r){return De(r)&&r.valueOf()>=0},He=Ye,Je=qe;var Ke=m,Qe=function(r){return He(r)||Je(r)},rt=qe;Ke(Qe,"isPrimitive",Ye),Ke(Qe,"isObject",rt);var et=Qe.isPrimitive,tt=$r.isPrimitive;var nt=function(r,e){var t,n;if(!tt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!et(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},it=he.isPrimitive,at=$r.isPrimitive;var ot=nt,ut=function(r,e,t){var n,i;if(!at(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!at(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!it(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ct=function(r,e,t){var n=!1,i=e-r.length;return i<0||(ut(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ot("0",i):ot("0",i)+r,n&&(r="-"+r)),r},ft=Ze,st=Ne,lt=Me,vt=ze,pt=Qr.isPrimitive,gt=ct;var mt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!vt(n)){if(!pt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=gt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=gt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=ft(r.specifier)?st(t):lt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},dt=$r.isPrimitive,ht=/[-\/\\^$*+?.()|[\]{}]/g;var bt=function(r){var e,t;if(!dt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ht,"\\$&"):(e=(e=r.substring(1,t)).replace(ht,"\\$&"),r=r[0]+e+r.substring(t))},yt=RegExp.prototype.exec;var wt=I,Et=function(r){try{return yt.call(r),!0}catch(r){return!1}},jt=y();var Pt=bt,_t=yr,St=$r.isPrimitive,Tt=function(r){return"object"==typeof r&&(r instanceof RegExp||(jt?Et(r):"[object RegExp]"===wt(r)))};var xt=Ze,Ot=Ne,Vt=Me,kt=function(r,e,t){if(!St(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(St(e))e=Pt(e),e=new RegExp(e,"g");else if(!Tt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!St(t)&&!_t(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},It=ze,At=Qr.isPrimitive,Ft=function(r){return Math.abs(r)},Rt=/e\+(\d)$/,$t=/e-(\d)$/,Mt=/^(\d+)$/,Ct=/^(\d+)e/,Nt=/\.0$/,Bt=/\.0*e/,Gt=/(\..*[^0])0*e/;var Lt=function(r){var e,t,n=parseFloat(r.arg);if(!It(n)){if(!At(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Ft(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=kt(t,Gt,"$1e"),t=kt(t,Bt,"e"),t=kt(t,Nt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=kt(t,Rt,"e+0$1"),t=kt(t,$t,"e-0$1"),r.alternate&&(t=kt(t,Mt,"$1."),t=kt(t,Ct,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=xt(r.specifier)?Ot(t):Vt(t)},Zt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Wt=nt;var Xt=$r.isPrimitive,zt=Re,Ut=be,Yt=mt,Dt=Lt,qt=function(r){var e,t,n,i,a;for(e=0,n=[],a=Zt.exec(r);a;)(t=r.slice(e,Zt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Zt.lastIndex,a=Zt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ht=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Wt(" ",n):Wt(" ",n)+r},Jt=ct,Kt=String.fromCharCode;var Qt=m,rn=yr,en=Er,tn=Pr,nn=function(r){var e,t,n,i,a,o,u,c,f;if(!Xt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=qt(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],Xt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!zt(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Ut(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Ut(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Yt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Ut(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ut(a)?String(n.arg):Kt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Dt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Jt(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Ht(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var an=function r(e,t,n){var i,a,o;if(!en(e))throw new TypeError(nn("invalid argument. First argument must be an iterator protocol-compliant object. Value: `%s`.",e));if(!rn(t))throw new TypeError(nn("invalid argument. Second argument must be a function. Value: `%s`.",t));return o=-1,Qt(i={},"next",(function(){var r;if(a)return{done:!0};for(;;){if(r=e.next(),o+=1,r.done)return a=!0,r;if(t.call(n,r.value,o))return{value:r.value,done:!1}}})),Qt(i,"return",(function(r){if(a=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),tn&&rn(e[tn])&&Qt(i,tn,(function(){return r(e[tn](),t,n)})),i},on=an;export{on as default};
//# sourceMappingURL=mod.js.map
