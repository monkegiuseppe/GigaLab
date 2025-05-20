(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lh={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function qy(){if(R_)return Lo;R_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var C_;function Yy(){return C_||(C_=1,lh.exports=qy()),lh.exports}var se=Yy(),ch={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function jy(){if(w_)return ue;w_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.iterator;function v(C){return C===null||typeof C!="object"?null:(C=x&&C[x]||C["@@iterator"],typeof C=="function"?C:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(C,z,tt){this.props=C,this.context=z,this.refs=A,this.updater=tt||S}y.prototype.isReactComponent={},y.prototype.setState=function(C,z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,z,"setState")},y.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function _(){}_.prototype=y.prototype;function P(C,z,tt){this.props=C,this.context=z,this.refs=A,this.updater=tt||S}var D=P.prototype=new _;D.constructor=P,E(D,y.prototype),D.isPureReactComponent=!0;var U=Array.isArray,G={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function F(C,z,tt,lt,W,it){return tt=it.ref,{$$typeof:s,type:C,key:z,ref:tt!==void 0?tt:null,props:it}}function j(C,z){return F(C.type,z,void 0,void 0,void 0,C.props)}function L(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function w(C){var z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(tt){return z[tt]})}var k=/\/+/g;function ht(C,z){return typeof C=="object"&&C!==null&&C.key!=null?w(""+C.key):z.toString(36)}function ft(){}function Mt(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ft,ft):(C.status="pending",C.then(function(z){C.status==="pending"&&(C.status="fulfilled",C.value=z)},function(z){C.status==="pending"&&(C.status="rejected",C.reason=z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function gt(C,z,tt,lt,W){var it=typeof C;(it==="undefined"||it==="boolean")&&(C=null);var st=!1;if(C===null)st=!0;else switch(it){case"bigint":case"string":case"number":st=!0;break;case"object":switch(C.$$typeof){case s:case t:st=!0;break;case g:return st=C._init,gt(st(C._payload),z,tt,lt,W)}}if(st)return W=W(C),st=lt===""?"."+ht(C,0):lt,U(W)?(tt="",st!=null&&(tt=st.replace(k,"$&/")+"/"),gt(W,z,tt,"",function(zt){return zt})):W!=null&&(L(W)&&(W=j(W,tt+(W.key==null||C&&C.key===W.key?"":(""+W.key).replace(k,"$&/")+"/")+st)),z.push(W)),1;st=0;var bt=lt===""?".":lt+":";if(U(C))for(var Et=0;Et<C.length;Et++)lt=C[Et],it=bt+ht(lt,Et),st+=gt(lt,z,tt,it,W);else if(Et=v(C),typeof Et=="function")for(C=Et.call(C),Et=0;!(lt=C.next()).done;)lt=lt.value,it=bt+ht(lt,Et++),st+=gt(lt,z,tt,it,W);else if(it==="object"){if(typeof C.then=="function")return gt(Mt(C),z,tt,lt,W);throw z=String(C),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return st}function B(C,z,tt){if(C==null)return C;var lt=[],W=0;return gt(C,lt,"","",function(it){return z.call(tt,it,W++)}),lt}function X(C){if(C._status===-1){var z=C._result;z=z(),z.then(function(tt){(C._status===0||C._status===-1)&&(C._status=1,C._result=tt)},function(tt){(C._status===0||C._status===-1)&&(C._status=2,C._result=tt)}),C._status===-1&&(C._status=0,C._result=z)}if(C._status===1)return C._result.default;throw C._result}var O=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)};function rt(){}return ue.Children={map:B,forEach:function(C,z,tt){B(C,function(){z.apply(this,arguments)},tt)},count:function(C){var z=0;return B(C,function(){z++}),z},toArray:function(C){return B(C,function(z){return z})||[]},only:function(C){if(!L(C))throw Error("React.Children.only expected to receive a single React element child.");return C}},ue.Component=y,ue.Fragment=i,ue.Profiler=l,ue.PureComponent=P,ue.StrictMode=r,ue.Suspense=p,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ue.__COMPILER_RUNTIME={__proto__:null,c:function(C){return G.H.useMemoCache(C)}},ue.cache=function(C){return function(){return C.apply(null,arguments)}},ue.cloneElement=function(C,z,tt){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var lt=E({},C.props),W=C.key,it=void 0;if(z!=null)for(st in z.ref!==void 0&&(it=void 0),z.key!==void 0&&(W=""+z.key),z)!V.call(z,st)||st==="key"||st==="__self"||st==="__source"||st==="ref"&&z.ref===void 0||(lt[st]=z[st]);var st=arguments.length-2;if(st===1)lt.children=tt;else if(1<st){for(var bt=Array(st),Et=0;Et<st;Et++)bt[Et]=arguments[Et+2];lt.children=bt}return F(C.type,W,void 0,void 0,it,lt)},ue.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:c,_context:C},C},ue.createElement=function(C,z,tt){var lt,W={},it=null;if(z!=null)for(lt in z.key!==void 0&&(it=""+z.key),z)V.call(z,lt)&&lt!=="key"&&lt!=="__self"&&lt!=="__source"&&(W[lt]=z[lt]);var st=arguments.length-2;if(st===1)W.children=tt;else if(1<st){for(var bt=Array(st),Et=0;Et<st;Et++)bt[Et]=arguments[Et+2];W.children=bt}if(C&&C.defaultProps)for(lt in st=C.defaultProps,st)W[lt]===void 0&&(W[lt]=st[lt]);return F(C,it,void 0,void 0,null,W)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(C){return{$$typeof:d,render:C}},ue.isValidElement=L,ue.lazy=function(C){return{$$typeof:g,_payload:{_status:-1,_result:C},_init:X}},ue.memo=function(C,z){return{$$typeof:m,type:C,compare:z===void 0?null:z}},ue.startTransition=function(C){var z=G.T,tt={};G.T=tt;try{var lt=C(),W=G.S;W!==null&&W(tt,lt),typeof lt=="object"&&lt!==null&&typeof lt.then=="function"&&lt.then(rt,O)}catch(it){O(it)}finally{G.T=z}},ue.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ue.use=function(C){return G.H.use(C)},ue.useActionState=function(C,z,tt){return G.H.useActionState(C,z,tt)},ue.useCallback=function(C,z){return G.H.useCallback(C,z)},ue.useContext=function(C){return G.H.useContext(C)},ue.useDebugValue=function(){},ue.useDeferredValue=function(C,z){return G.H.useDeferredValue(C,z)},ue.useEffect=function(C,z,tt){var lt=G.H;if(typeof tt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return lt.useEffect(C,z)},ue.useId=function(){return G.H.useId()},ue.useImperativeHandle=function(C,z,tt){return G.H.useImperativeHandle(C,z,tt)},ue.useInsertionEffect=function(C,z){return G.H.useInsertionEffect(C,z)},ue.useLayoutEffect=function(C,z){return G.H.useLayoutEffect(C,z)},ue.useMemo=function(C,z){return G.H.useMemo(C,z)},ue.useOptimistic=function(C,z){return G.H.useOptimistic(C,z)},ue.useReducer=function(C,z,tt){return G.H.useReducer(C,z,tt)},ue.useRef=function(C){return G.H.useRef(C)},ue.useState=function(C){return G.H.useState(C)},ue.useSyncExternalStore=function(C,z,tt){return G.H.useSyncExternalStore(C,z,tt)},ue.useTransition=function(){return G.H.useTransition()},ue.version="19.1.0",ue}var D_;function Bd(){return D_||(D_=1,ch.exports=jy()),ch.exports}var xt=Bd();const Zy=Z0(xt);var uh={exports:{}},No={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Ky(){return U_||(U_=1,function(s){function t(B,X){var O=B.length;B.push(X);t:for(;0<O;){var rt=O-1>>>1,C=B[rt];if(0<l(C,X))B[rt]=X,B[O]=C,O=rt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var X=B[0],O=B.pop();if(O!==X){B[0]=O;t:for(var rt=0,C=B.length,z=C>>>1;rt<z;){var tt=2*(rt+1)-1,lt=B[tt],W=tt+1,it=B[W];if(0>l(lt,O))W<C&&0>l(it,lt)?(B[rt]=it,B[W]=O,rt=W):(B[rt]=lt,B[tt]=O,rt=tt);else if(W<C&&0>l(it,O))B[rt]=it,B[W]=O,rt=W;else break t}}return X}function l(B,X){var O=B.sortIndex-X.sortIndex;return O!==0?O:B.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,x=null,v=3,S=!1,E=!1,A=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function U(B){for(var X=i(m);X!==null;){if(X.callback===null)r(m);else if(X.startTime<=B)r(m),X.sortIndex=X.expirationTime,t(p,X);else break;X=i(m)}}function G(B){if(A=!1,U(B),!E)if(i(p)!==null)E=!0,V||(V=!0,ht());else{var X=i(m);X!==null&&gt(G,X.startTime-B)}}var V=!1,F=-1,j=5,L=-1;function w(){return y?!0:!(s.unstable_now()-L<j)}function k(){if(y=!1,V){var B=s.unstable_now();L=B;var X=!0;try{t:{E=!1,A&&(A=!1,P(F),F=-1),S=!0;var O=v;try{e:{for(U(B),x=i(p);x!==null&&!(x.expirationTime>B&&w());){var rt=x.callback;if(typeof rt=="function"){x.callback=null,v=x.priorityLevel;var C=rt(x.expirationTime<=B);if(B=s.unstable_now(),typeof C=="function"){x.callback=C,U(B),X=!0;break e}x===i(p)&&r(p),U(B)}else r(p);x=i(p)}if(x!==null)X=!0;else{var z=i(m);z!==null&&gt(G,z.startTime-B),X=!1}}break t}finally{x=null,v=O,S=!1}X=void 0}}finally{X?ht():V=!1}}}var ht;if(typeof D=="function")ht=function(){D(k)};else if(typeof MessageChannel<"u"){var ft=new MessageChannel,Mt=ft.port2;ft.port1.onmessage=k,ht=function(){Mt.postMessage(null)}}else ht=function(){_(k,0)};function gt(B,X){F=_(function(){B(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(B){switch(v){case 1:case 2:case 3:var X=3;break;default:X=v}var O=v;v=X;try{return B()}finally{v=O}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,X){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var O=v;v=B;try{return X()}finally{v=O}},s.unstable_scheduleCallback=function(B,X,O){var rt=s.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?rt+O:rt):O=rt,B){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=O+C,B={id:g++,callback:X,priorityLevel:B,startTime:O,expirationTime:C,sortIndex:-1},O>rt?(B.sortIndex=O,t(m,B),i(p)===null&&B===i(m)&&(A?(P(F),F=-1):A=!0,gt(G,O-rt))):(B.sortIndex=C,t(p,B),E||S||(E=!0,V||(V=!0,ht()))),B},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(B){var X=v;return function(){var O=v;v=X;try{return B.apply(this,arguments)}finally{v=O}}}}(hh)),hh}var L_;function Qy(){return L_||(L_=1,fh.exports=Ky()),fh.exports}var dh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Jy(){if(N_)return Un;N_=1;var s=Bd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Un.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Un.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:x,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,x=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Un.requestFormReset=function(p){r.d.r(p)},Un.unstable_batchedUpdates=function(p,m){return p(m)},Un.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.1.0",Un}var P_;function $y(){if(P_)return dh.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=Jy(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function tS(){if(O_)return No;O_=1;var s=Qy(),t=Bd(),i=$y();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return d(u),e;if(h===o)return d(u),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,T=u.child;T;){if(T===a){M=!0,a=u,o=h;break}if(T===o){M=!0,o=u,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,o=u;break}if(T===o){M=!0,o=h,a=u;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),P=Symbol.for("react.consumer"),D=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function ht(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case A:return"StrictMode";case G:return"Suspense";case V:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case D:return(e.displayName||"Context")+".Provider";case P:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:Mt(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return Mt(e(n))}catch{}}return null}var gt=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},rt=[],C=-1;function z(e){return{current:e}}function tt(e){0>C||(e.current=rt[C],rt[C]=null,C--)}function lt(e,n){C++,rt[C]=e.current,e.current=n}var W=z(null),it=z(null),st=z(null),bt=z(null);function Et(e,n){switch(lt(st,n),lt(it,e),lt(W,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(W),lt(W,e)}function zt(){tt(W),tt(it),tt(st)}function wt(e){e.memoizedState!==null&&lt(bt,e);var n=W.current,a=n_(n,e.type);n!==a&&(lt(it,e),lt(W,a))}function ge(e){it.current===e&&(tt(W),tt(it)),bt.current===e&&(tt(bt),Ro._currentValue=O)}var re=Object.prototype.hasOwnProperty,oe=s.unstable_scheduleCallback,H=s.unstable_cancelCallback,Re=s.unstable_shouldYield,jt=s.unstable_requestPaint,Wt=s.unstable_now,Xt=s.unstable_getCurrentPriorityLevel,Me=s.unstable_ImmediatePriority,kt=s.unstable_UserBlockingPriority,N=s.unstable_NormalPriority,b=s.unstable_LowPriority,nt=s.unstable_IdlePriority,vt=s.log,Tt=s.unstable_setDisableYieldValue,pt=null,Dt=null;function Ct(e){if(typeof vt=="function"&&Tt(e),Dt&&typeof Dt.setStrictMode=="function")try{Dt.setStrictMode(pt,e)}catch{}}var Ft=Math.clz32?Math.clz32:Ht,Kt=Math.log,At=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(Kt(e)/At|0)|0}var Zt=256,Qt=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ce(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?u=It(o):(M&=T,M!==0?u=It(M):a||(a=T&~e,a!==0&&(u=It(a))))):(T=o&~h,T!==0?u=It(T):M!==0?u=It(M):a||(a=o&~e,a!==0&&(u=It(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ne(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Y(){var e=Zt;return Zt<<=1,(Zt&4194048)===0&&(Zt=256),e}function Pt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function dt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function yt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,I=e.expirationTimes,et=e.hiddenUpdates;for(a=M&~a;0<a;){var mt=31-Ft(a),St=1<<mt;T[mt]=0,I[mt]=-1;var at=et[mt];if(at!==null)for(et[mt]=null,mt=0;mt<at.length;mt++){var ot=at[mt];ot!==null&&(ot.lane&=-536870913)}a&=~St}o!==0&&Ot(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Ot(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function le(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ke(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function an(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ce(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function Wn(e,n){var a=X.p;try{return X.p=e,n()}finally{X.p=a}}var gn=Math.random().toString(36).slice(2),cn="__reactFiber$"+gn,En="__reactProps$"+gn,Bn="__reactContainer$"+gn,Ja="__reactEvents$"+gn,al="__reactListeners$"+gn,rl="__reactHandles$"+gn,$a="__reactResources$"+gn,pa="__reactMarker$"+gn;function ma(e){delete e[cn],delete e[En],delete e[Ja],delete e[al],delete e[rl]}function Ii(e){var n=e[cn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Bn]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=s_(e);e!==null;){if(a=e[cn])return a;e=s_(e)}return n}e=a,a=e.parentNode}return null}function Bi(e){if(e=e[cn]||e[Bn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ga(e){var n=e[$a];return n||(n=e[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function rn(e){e[pa]=!0}var sl=new Set,ol={};function zi(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(ol[e]=n,e=0;e<n.length;e++)sl.add(n[e])}var K=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},ut={};function Q(e){return re.call(ut,e)?!0:re.call(ct,e)?!1:K.test(e)?ut[e]=!0:(ct[e]=!0,!1)}function Rt(e,n,a){if(Q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ut(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Lt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Gt,ie;function Jt(e){if(Gt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Gt=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Gt+e+ie}var Yt=!1;function _e(e,n){if(!e||Yt)return"";Yt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(ot){var at=ot}Reflect.construct(e,[],St)}else{try{St.call()}catch(ot){at=ot}e.call(St.prototype)}}else{try{throw Error()}catch(ot){at=ot}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(ot){if(ot&&at&&typeof ot.stack=="string")return[ot.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var I=M.split(`
`),et=T.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===et.length)for(o=I.length-1,u=et.length-1;1<=o&&0<=u&&I[o]!==et[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==et[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==et[u]){var mt=`
`+I[o].replace(" at new "," at ");return e.displayName&&mt.includes("<anonymous>")&&(mt=mt.replace("<anonymous>",e.displayName)),mt}while(1<=o&&0<=u);break}}}finally{Yt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Jt(a):""}function we(e){switch(e.tag){case 26:case 27:case 5:return Jt(e.type);case 16:return Jt("Lazy");case 13:return Jt("Suspense");case 19:return Jt("SuspenseList");case 0:case 15:return _e(e.type,!1);case 11:return _e(e.type.render,!1);case 1:return _e(e.type,!0);case 31:return Jt("Activity");default:return""}}function je(e){try{var n="";do n+=we(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ee(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function be(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(e){var n=be(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Qe(e){e._valueTracker||(e._valueTracker=$t(e))}function Ae(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=be(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Cn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _a=/[\n"\\]/g;function Xe(e){return e.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,o,u,h,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ee(n)):e.value!==""+Ee(n)&&(e.value=""+Ee(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?wn(e,M,Ee(n)):a!=null?wn(e,M,Ee(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ee(T):e.removeAttribute("name")}function Ge(e,n,a,o,u,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+Ee(a):"",n=n!=null?""+Ee(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function wn(e,n,a){n==="number"&&Cn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function un(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ee(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function _n(e,n,a){if(n!=null&&(n=""+Ee(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ee(a):""}function bn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(gt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ee(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Hi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Hi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function np(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ep(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&ep(e,h,n[h])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Or=null,Ir=null;function ip(e){var n=Bi(e);if(n&&(e=n.stateNode)){var a=e[En]||null;t:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[En]||null;if(!u)throw Error(r(90));Fi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Ae(o)}break t;case"textarea":_n(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&un(e,!!a.multiple,n,!1)}}}var cu=!1;function ap(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Or!==null||Ir!==null)&&(Yl(),Or&&(n=Or,e=Ir,Ir=Or=null,ip(n),e)))for(n=0;n<e.length;n++)ip(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Gi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{uu=!1}var va=null,fu=null,cl=null;function rp(){if(cl)return cl;var e,n=fu,a=n.length,o,u="value"in va?va.value:va.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function sp(){return!1}function zn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?fl:sp,this.isPropagationStopped=sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=zn(er),Gs=g({},er,{view:0,detail:0}),qv=zn(Gs),hu,du,Vs,dl=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(hu=e.screenX-Vs.screenX,du=e.screenY-Vs.screenY):du=hu=0,Vs=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),op=zn(dl),Yv=g({},dl,{dataTransfer:0}),jv=zn(Yv),Zv=g({},Gs,{relatedTarget:0}),pu=zn(Zv),Kv=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=zn(Kv),Jv=g({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=zn(Jv),tx=g({},er,{data:0}),lp=zn(tx),ex={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ix={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ax(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ix[e])?!!n[e]:!1}function mu(){return ax}var rx=g({},Gs,{key:function(e){if(e.key){var n=ex[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=zn(rx),ox=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=zn(ox),lx=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),cx=zn(lx),ux=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),fx=zn(ux),hx=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dx=zn(hx),px=g({},er,{newState:0,oldState:0}),mx=zn(px),gx=[9,13,27,32],gu=Gi&&"CompositionEvent"in window,ks=null;Gi&&"documentMode"in document&&(ks=document.documentMode);var _x=Gi&&"TextEvent"in window&&!ks,up=Gi&&(!gu||ks&&8<ks&&11>=ks),fp=" ",hp=!1;function dp(e,n){switch(e){case"keyup":return gx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function vx(e,n){switch(e){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(hp=!0,fp);case"textInput":return e=n.data,e===fp&&hp?null:e;default:return null}}function xx(e,n){if(Br)return e==="compositionend"||!gu&&dp(e,n)?(e=rp(),cl=fu=va=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yx[e.type]:n==="textarea"}function gp(e,n,a,o){Or?Ir?Ir.push(o):Ir=[o]:Or=o,n=$l(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xs=null,Ws=null;function Sx(e){Kg(e,0)}function pl(e){var n=tr(e);if(Ae(n))return e}function _p(e,n){if(e==="change")return n}var vp=!1;if(Gi){var _u;if(Gi){var vu="oninput"in document;if(!vu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),vu=typeof xp.oninput=="function"}_u=vu}else _u=!1;vp=_u&&(!document.documentMode||9<document.documentMode)}function yp(){Xs&&(Xs.detachEvent("onpropertychange",Sp),Ws=Xs=null)}function Sp(e){if(e.propertyName==="value"&&pl(Ws)){var n=[];gp(n,Ws,e,lu(e)),ap(Sx,n)}}function Mx(e,n,a){e==="focusin"?(yp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",Sp)):e==="focusout"&&yp()}function Ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Ws)}function bx(e,n){if(e==="click")return pl(n)}function Tx(e,n){if(e==="input"||e==="change")return pl(n)}function Ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Ax;function qs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!re.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=Mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Cn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Cn(e.document)}return n}function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Rx=Gi&&"documentMode"in document&&11>=document.documentMode,zr=null,yu=null,Ys=null,Su=!1;function Ap(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||zr==null||zr!==Cn(o)||(o=zr,"selectionStart"in o&&xu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=$l(yu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=zr)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Fr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Mu={},Rp={};Gi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Fr.animationend.animation,delete Fr.animationiteration.animation,delete Fr.animationstart.animation),"TransitionEvent"in window||delete Fr.transitionend.transition);function ir(e){if(Mu[e])return Mu[e];if(!Fr[e])return e;var n=Fr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return Mu[e]=n[a];return e}var Cp=ir("animationend"),wp=ir("animationiteration"),Dp=ir("animationstart"),Cx=ir("transitionrun"),wx=ir("transitionstart"),Dx=ir("transitioncancel"),Up=ir("transitionend"),Lp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function di(e,n){Lp.set(e,n),zi(n,[e])}var Np=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:je(n)},Np.set(e,n),n)}return{value:e,source:n,stack:je(n)}}var ii=[],Hr=0,bu=0;function ml(){for(var e=Hr,n=bu=Hr=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var h=ii[n];if(ii[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Pp(a,u,h)}}function gl(e,n,a,o){ii[Hr++]=e,ii[Hr++]=n,ii[Hr++]=a,ii[Hr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return gl(e,n,a,o),_l(e)}function Gr(e,n){return gl(e,null,null,n),_l(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Ft(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function _l(e){if(50<xo)throw xo=0,Lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Vr={};function Ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new Ux(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vi(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,h){var M=0;if(o=e,typeof e=="function")Au(e)&&(M=1);else if(typeof e=="string")M=Ny(e,a,W.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Yn(31,a,n,u),e.elementType=L,e.lanes=h,e;case E:return ar(a.children,u,h,n);case A:M=8,u|=24;break;case y:return e=Yn(12,a,n,u|2),e.elementType=y,e.lanes=h,e;case G:return e=Yn(13,a,n,u),e.elementType=G,e.lanes=h,e;case V:return e=Yn(19,a,n,u),e.elementType=V,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case D:M=10;break t;case P:M=9;break t;case U:M=11;break t;case F:M=14;break t;case j:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function ar(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var kr=[],Xr=0,xl=null,yl=0,ai=[],ri=0,rr=null,ki=1,Xi="";function sr(e,n){kr[Xr++]=yl,kr[Xr++]=xl,xl=e,yl=n}function Ip(e,n,a){ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=rr,rr=e;var o=ki;e=Xi;var u=32-Ft(o)-1;o&=~(1<<u),a+=1;var h=32-Ft(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,ki=1<<32-Ft(n)+u|a<<u|o,Xi=h+e}else ki=1<<h|a<<u|o,Xi=e}function wu(e){e.return!==null&&(sr(e,1),Ip(e,1,0))}function Du(e){for(;e===xl;)xl=kr[--Xr],kr[Xr]=null,yl=kr[--Xr],kr[Xr]=null;for(;e===rr;)rr=ai[--ri],ai[ri]=null,Xi=ai[--ri],ai[ri]=null,ki=ai[--ri],ai[ri]=null}var Pn=null,Je=null,Le=!1,or=null,bi=!1,Uu=Error(r(519));function lr(e){var n=Error(r(418,""));throw Ks(ni(n,e)),Uu}function Bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[cn]=e,n[En]=o,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)xe(So[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Ge(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Qe(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),bn(n,o.value,o.defaultValue,o.children),Qe(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),o.onScroll!=null&&xe("scroll",n),o.onScrollEnd!=null&&xe("scrollend",n),o.onClick!=null&&(n.onclick=tc),n=!0):n=!1,n||lr(e)}function zp(e){for(Pn=e.return;Pn;)switch(Pn.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Pn=Pn.return}}function js(e){if(e!==Pn)return!1;if(!Le)return zp(e),Le=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&Je&&lr(e),zp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Je=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Je=null}}else n===27?(n=Je,Pa(e.type)?(e=Jf,Jf=null,Je=e):Je=n):Je=Pn?mi(e.stateNode.nextSibling):null;return!0}function Zs(){Je=Pn=null,Le=!1}function Fp(){var e=or;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),or=null),e}function Ks(e){or===null?or=[e]:or.push(e)}var Lu=z(null),cr=null,Wi=null;function xa(e,n,a){lt(Lu,n._currentValue),n._currentValue=a}function qi(e){e._currentValue=Lu.current,tt(Lu)}function Nu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=u;for(var I=0;I<n.length;I++)if(T.context===n[I]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),Nu(h.return,a,e),o||(M=null);break t}h=T.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Nu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Qs(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(u===bt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){cr=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Dn(e){return Hp(cr,e)}function Ml(e,n){return cr===null&&ur(e),Hp(e,n)}function Hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Wi===null){if(e===null)throw Error(r(308));Wi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Wi=Wi.next=n;return a}var Lx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nx=s.unstable_scheduleCallback,Px=s.unstable_NormalPriority,fn={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Lx,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&Nx(Px,function(){e.controller.abort()})}var $s=null,Iu=0,Wr=0,qr=null;function Ox(e,n){if($s===null){var a=$s=[];Iu=0,Wr=Ff(),qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(Gp,Gp),n}function Gp(){if(--Iu===0&&$s!==null){qr!==null&&(qr.status="fulfilled");var e=$s;$s=null,Wr=0,qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ix(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(e,n),Vp!==null&&Vp(e,n)};var fr=z(null);function Bu(){var e=fr.current;return e!==null?e:We.pooledCache}function El(e,n){n===null?lt(fr,fr.current):lt(fr,n.pool)}function kp(){var e=Bu();return e===null?null:{parent:fn._currentValue,pool:e}}var to=Error(r(460)),Xp=Error(r(474)),bl=Error(r(542)),zu={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tl(){}function qp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Tl,Tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Tl,Tl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw eo=n,to}}var eo=null;function Yp(){if(eo===null)throw Error(r(459));var e=eo;return eo=null,e}function jp(e){if(e===to||e===bl)throw Error(r(483))}var ya=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Pe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),Pp(e,null,a),n}return gl(e,o,n,a),_l(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}function Gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vu=!1;function io(){if(Vu){var e=qr;if(e!==null)throw e}}function ao(e,n,a,o){Vu=!1;var u=e.updateQueue;ya=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var I=T,et=I.next;I.next=null,M===null?h=et:M.next=et,M=I;var mt=e.alternate;mt!==null&&(mt=mt.updateQueue,T=mt.lastBaseUpdate,T!==M&&(T===null?mt.firstBaseUpdate=et:T.next=et,mt.lastBaseUpdate=I))}if(h!==null){var St=u.baseState;M=0,mt=et=I=null,T=h;do{var at=T.lane&-536870913,ot=at!==T.lane;if(ot?(Te&at)===at:(o&at)===at){at!==0&&at===Wr&&(Vu=!0),mt!==null&&(mt=mt.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ae=e,te=T;at=n;var ze=a;switch(te.tag){case 1:if(ae=te.payload,typeof ae=="function"){St=ae.call(ze,St,at);break t}St=ae;break t;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=te.payload,at=typeof ae=="function"?ae.call(ze,St,at):ae,at==null)break t;St=g({},St,at);break t;case 2:ya=!0}}at=T.callback,at!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[at]:ot.push(at))}else ot={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},mt===null?(et=mt=ot,I=St):mt=mt.next=ot,M|=at;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);mt===null&&(I=St),u.baseState=I,u.firstBaseUpdate=et,u.lastBaseUpdate=mt,h===null&&(u.shared.lanes=0),Da|=M,e.lanes=M,e.memoizedState=St}}function Zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var Yr=z(null),Al=z(0);function Qp(e,n){e=$i,lt(Al,e),lt(Yr,n),$i=e|n.baseLanes}function ku(){lt(Al,$i),lt(Yr,Yr.current)}function Xu(){$i=Al.current,tt(Yr),tt(Al)}var Ea=0,pe=null,Ie=null,sn=null,Rl=!1,jr=!1,hr=!1,Cl=0,ro=0,Zr=null,Bx=0;function en(){throw Error(r(321))}function Wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,h){return Ea=h,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Pm:Om,hr=!1,h=a(o,u),hr=!1,jr&&(h=$p(n,a,o,u)),Jp(e),h}function Jp(e){B.H=Pl;var n=Ie!==null&&Ie.next!==null;if(Ea=0,sn=Ie=pe=null,Rl=!1,ro=0,Zr=null,n)throw Error(r(300));e===null||vn||(e=e.dependencies,e!==null&&Sl(e)&&(vn=!0))}function $p(e,n,a,o){pe=e;var u=0;do{if(jr&&(Zr=null),ro=0,jr=!1,25<=u)throw Error(r(301));if(u+=1,sn=Ie=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=Xx,h=n(a,o)}while(jr);return h}function zx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(pe.flags|=1024),n}function Yu(){var e=Cl!==0;return Cl=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}Ea=0,sn=Ie=pe=null,jr=!1,ro=Cl=0,Zr=null}function Fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?pe.memoizedState=sn=e:sn=sn.next=e,sn}function on(){if(Ie===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=sn===null?pe.memoizedState:sn.next;if(n!==null)sn=n,Ie=e;else{if(e===null)throw pe.alternate===null?Error(r(467)):Error(r(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},sn===null?pe.memoizedState=sn=e:sn=sn.next=e}return sn}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,Zr===null&&(Zr=[]),e=qp(Zr,e,n),n=pe,(sn===null?n.memoizedState:sn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Pm:Om),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===D)return Dn(e)}throw Error(r(438,String(e)))}function Qu(e){var n=null,a=pe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=pe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),pe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function Yi(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=on();return Ju(n,Ie,e)}function Ju(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var T=M=null,I=null,et=n,mt=!1;do{var St=et.lane&-536870913;if(St!==et.lane?(Te&St)===St:(Ea&St)===St){var at=et.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),St===Wr&&(mt=!0);else if((Ea&at)===at){et=et.next,at===Wr&&(mt=!0);continue}else St={lane:0,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(T=I=St,M=h):I=I.next=St,pe.lanes|=at,Da|=at;St=et.action,hr&&a(h,St),h=et.hasEagerState?et.eagerState:a(h,St)}else at={lane:St,revertLane:et.revertLane,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},I===null?(T=I=at,M=h):I=I.next=at,pe.lanes|=St,Da|=St;et=et.next}while(et!==null&&et!==n);if(I===null?M=h:I.next=T,!qn(h,e.memoizedState)&&(vn=!0,mt&&(a=qr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=on(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);qn(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function tm(e,n,a){var o=pe,u=on(),h=Le;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!qn((Ie||u).memoizedState,a);M&&(u.memoizedState=a,vn=!0),u=u.queue;var T=im.bind(null,o,u,e);if(oo(2048,8,T,[e]),u.getSnapshot!==n||M||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Kr(9,Ul(),nm.bind(null,o,u,a,n),null),We===null)throw Error(r(349));h||(Ea&124)!==0||em(o,n,a)}return a}function em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=pe.updateQueue,n===null?(n=Ku(),pe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function nm(e,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&rm(e)}function im(e,n,a){return a(function(){am(n)&&rm(e)})}function am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function rm(e){var n=Gr(e,2);n!==null&&Jn(n,e,2)}function tf(e){var n=Fn();if(typeof e=="function"){var a=e;if(e=a(),hr){Ct(!0);try{a()}finally{Ct(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},n}function sm(e,n,a,o){return e.baseState=a,Ju(e,Ie,typeof o=="function"?o:Yi)}function Fx(e,n,a,o,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,om(n,h)):(h.next=a.next,n.pending=a.next=h)}}function om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=B.T,M={};B.T=M;try{var T=a(u,o),I=B.S;I!==null&&I(M,T),lm(e,n,T)}catch(et){ef(e,n,et)}finally{B.T=h}}else try{h=a(u,o),lm(e,n,h)}catch(et){ef(e,n,et)}}function lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(e,n,o)},function(o){return ef(e,n,o)}):cm(e,n,a)}function cm(e,n,a){n.status="fulfilled",n.value=a,um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,om(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}e.action=null}function um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fm(e,n){return n}function hm(e,n){if(Le){var a=We.formState;if(a!==null){t:{var o=pe;if(Le){if(Je){e:{for(var u=Je,h=bi;u.nodeType!==8;){if(!h){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Je=mi(u.nextSibling),o=u.data==="F!";break t}}lr(o)}o=!1}o&&(n=a[0])}}return a=Fn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Um.bind(null,pe,o),o.dispatch=a,o=tf(!1),h=of.bind(null,pe,!1,o.queue),o=Fn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Fx.bind(null,pe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dm(e){var n=on();return pm(n,Ie,e)}function pm(e,n,a){if(n=Ju(e,n,fm)[0],e=Dl(Yi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(M){throw M===to?bl:M}else o=n;n=on();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(pe.flags|=2048,Kr(9,Ul(),Hx.bind(null,u,a),null)),[o,h,e]}function Hx(e,n){e.action=n}function mm(e){var n=on(),a=Ie;if(a!==null)return pm(n,a,e);on(),n=n.memoizedState,a=on();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Kr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Ku(),pe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ul(){return{destroy:void 0,resource:void 0}}function gm(){return on().memoizedState}function Ll(e,n,a,o){var u=Fn();o=o===void 0?null:o,pe.flags|=e,u.memoizedState=Kr(1|n,Ul(),a,o)}function oo(e,n,a,o){var u=on();o=o===void 0?null:o;var h=u.memoizedState.inst;Ie!==null&&o!==null&&Wu(o,Ie.memoizedState.deps)?u.memoizedState=Kr(n,h,a,o):(pe.flags|=e,u.memoizedState=Kr(1|n,h,a,o))}function _m(e,n){Ll(8390656,8,e,n)}function vm(e,n){oo(2048,8,e,n)}function xm(e,n){return oo(4,2,e,n)}function ym(e,n){return oo(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,oo(4,4,Sm.bind(null,n,e),a)}function nf(){}function Em(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bm(e,n){var a=on();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=e(),hr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Rg(),pe.lanes|=e,Da|=e,a)}function Tm(e,n,a,o){return qn(a,n)?a:Yr.current!==null?(e=af(e,a,o),qn(e,n)||(vn=!0),e):(Ea&42)===0?(vn=!0,e.memoizedState=a):(e=Rg(),pe.lanes|=e,Da|=e,n)}function Am(e,n,a,o,u){var h=X.p;X.p=h!==0&&8>h?h:8;var M=B.T,T={};B.T=T,of(e,!1,n,a);try{var I=u(),et=B.S;if(et!==null&&et(T,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var mt=Ix(I,o);lo(e,n,mt,Qn(e))}else lo(e,n,o,Qn(e))}catch(St){lo(e,n,{then:function(){},status:"rejected",reason:St},Qn())}finally{X.p=h,B.T=M}}function Gx(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Rm(e).queue;Am(e,u,n,O,a===null?Gx:function(){return Cm(e),a(o)})}function Rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:O},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=Rm(e).next.queue;lo(e,n,{},Qn())}function sf(){return Dn(Ro)}function wm(){return on().memoizedState}function Dm(){return on().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Sa(a);var o=Ma(n,e,a);o!==null&&(Jn(o,n,a),no(o,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function kx(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Lm(n,a):(a=Tu(e,n,a,o),a!==null&&(Jn(a,e,o),Nm(a,n,o)))}function Um(e,n,a){var o=Qn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Lm(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,T=h(M,a);if(u.hasEagerState=!0,u.eagerState=T,qn(T,M))return gl(e,n,u,0),We===null&&ml(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return Jn(a,e,o),Nm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,o,2),n!==null&&Jn(n,e,2)}function Nl(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function Lm(e,n){jr=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Nm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}var Pl={readContext:Dn,use:wl,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en},Pm={readContext:Dn,use:wl,useCallback:function(e,n){return Fn().memoizedState=[e,n===void 0?null:n],e},useContext:Dn,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=Fn();n=n===void 0?null:n;var o=e();if(hr){Ct(!0);try{e()}finally{Ct(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Fn();if(a!==void 0){var u=a(n);if(hr){Ct(!0);try{a(n)}finally{Ct(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=kx.bind(null,pe,e),[o.memoizedState,e]},useRef:function(e){var n=Fn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Um.bind(null,pe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Fn();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Am.bind(null,pe,e.queue,!0,!1),Fn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=pe,u=Fn();if(Le){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Te&124)!==0||em(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,_m(im.bind(null,o,h,e),[e]),o.flags|=2048,Kr(9,Ul(),nm.bind(null,o,h,a,n),null),a},useId:function(){var e=Fn(),n=We.identifierPrefix;if(Le){var a=Xi,o=ki;a=(o&~(1<<32-Ft(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Bx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:hm,useActionState:hm,useOptimistic:function(e){var n=Fn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,pe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return Fn().memoizedState=Vx.bind(null,pe)}},Om={readContext:Dn,use:wl,useCallback:Em,useContext:Dn,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:ym,useMemo:bm,useReducer:Dl,useRef:gm,useState:function(){return Dl(Yi)},useDebugValue:nf,useDeferredValue:function(e,n){var a=on();return Tm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=Dl(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=on();return sm(a,Ie,e,n)},useMemoCache:Qu,useCacheRefresh:Dm},Xx={readContext:Dn,use:wl,useCallback:Em,useContext:Dn,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:xm,useLayoutEffect:ym,useMemo:bm,useReducer:$u,useRef:gm,useState:function(){return $u(Yi)},useDebugValue:nf,useDeferredValue:function(e,n){var a=on();return Ie===null?af(a,e,n):Tm(a,Ie.memoizedState,e,n)},useTransition:function(){var e=$u(Yi)[0],n=on().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var a=on();return Ie!==null?sm(a,Ie,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Dm},Qr=null,co=0;function Ol(e){var n=co;return co+=1,Qr===null&&(Qr=[]),qp(Qr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===x?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Im(e){var n=e._init;return n(e._payload)}function Bm(e){function n(Z,q){if(e){var J=Z.deletions;J===null?(Z.deletions=[q],Z.flags|=16):J.push(q)}}function a(Z,q){if(!e)return null;for(;q!==null;)n(Z,q),q=q.sibling;return null}function o(Z){for(var q=new Map;Z!==null;)Z.key!==null?q.set(Z.key,Z):q.set(Z.index,Z),Z=Z.sibling;return q}function u(Z,q){return Z=Vi(Z,q),Z.index=0,Z.sibling=null,Z}function h(Z,q,J){return Z.index=J,e?(J=Z.alternate,J!==null?(J=J.index,J<q?(Z.flags|=67108866,q):J):(Z.flags|=67108866,q)):(Z.flags|=1048576,q)}function M(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function T(Z,q,J,_t){return q===null||q.tag!==6?(q=Ru(J,Z.mode,_t),q.return=Z,q):(q=u(q,J),q.return=Z,q)}function I(Z,q,J,_t){var Vt=J.type;return Vt===E?mt(Z,q,J.props.children,_t,J.key):q!==null&&(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===j&&Im(Vt)===q.type)?(q=u(q,J.props),uo(q,J),q.return=Z,q):(q=vl(J.type,J.key,J.props,null,Z.mode,_t),uo(q,J),q.return=Z,q)}function et(Z,q,J,_t){return q===null||q.tag!==4||q.stateNode.containerInfo!==J.containerInfo||q.stateNode.implementation!==J.implementation?(q=Cu(J,Z.mode,_t),q.return=Z,q):(q=u(q,J.children||[]),q.return=Z,q)}function mt(Z,q,J,_t,Vt){return q===null||q.tag!==7?(q=ar(J,Z.mode,_t,Vt),q.return=Z,q):(q=u(q,J),q.return=Z,q)}function St(Z,q,J){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return q=Ru(""+q,Z.mode,J),q.return=Z,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case v:return J=vl(q.type,q.key,q.props,null,Z.mode,J),uo(J,q),J.return=Z,J;case S:return q=Cu(q,Z.mode,J),q.return=Z,q;case j:var _t=q._init;return q=_t(q._payload),St(Z,q,J)}if(gt(q)||ht(q))return q=ar(q,Z.mode,J,null),q.return=Z,q;if(typeof q.then=="function")return St(Z,Ol(q),J);if(q.$$typeof===D)return St(Z,Ml(Z,q),J);Il(Z,q)}return null}function at(Z,q,J,_t){var Vt=q!==null?q.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Vt!==null?null:T(Z,q,""+J,_t);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case v:return J.key===Vt?I(Z,q,J,_t):null;case S:return J.key===Vt?et(Z,q,J,_t):null;case j:return Vt=J._init,J=Vt(J._payload),at(Z,q,J,_t)}if(gt(J)||ht(J))return Vt!==null?null:mt(Z,q,J,_t,null);if(typeof J.then=="function")return at(Z,q,Ol(J),_t);if(J.$$typeof===D)return at(Z,q,Ml(Z,J),_t);Il(Z,J)}return null}function ot(Z,q,J,_t,Vt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return Z=Z.get(J)||null,T(q,Z,""+_t,Vt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case v:return Z=Z.get(_t.key===null?J:_t.key)||null,I(q,Z,_t,Vt);case S:return Z=Z.get(_t.key===null?J:_t.key)||null,et(q,Z,_t,Vt);case j:var me=_t._init;return _t=me(_t._payload),ot(Z,q,J,_t,Vt)}if(gt(_t)||ht(_t))return Z=Z.get(J)||null,mt(q,Z,_t,Vt,null);if(typeof _t.then=="function")return ot(Z,q,J,Ol(_t),Vt);if(_t.$$typeof===D)return ot(Z,q,J,Ml(q,_t),Vt);Il(q,_t)}return null}function ae(Z,q,J,_t){for(var Vt=null,me=null,qt=q,ee=q=0,yn=null;qt!==null&&ee<J.length;ee++){qt.index>ee?(yn=qt,qt=null):yn=qt.sibling;var De=at(Z,qt,J[ee],_t);if(De===null){qt===null&&(qt=yn);break}e&&qt&&De.alternate===null&&n(Z,qt),q=h(De,q,ee),me===null?Vt=De:me.sibling=De,me=De,qt=yn}if(ee===J.length)return a(Z,qt),Le&&sr(Z,ee),Vt;if(qt===null){for(;ee<J.length;ee++)qt=St(Z,J[ee],_t),qt!==null&&(q=h(qt,q,ee),me===null?Vt=qt:me.sibling=qt,me=qt);return Le&&sr(Z,ee),Vt}for(qt=o(qt);ee<J.length;ee++)yn=ot(qt,Z,ee,J[ee],_t),yn!==null&&(e&&yn.alternate!==null&&qt.delete(yn.key===null?ee:yn.key),q=h(yn,q,ee),me===null?Vt=yn:me.sibling=yn,me=yn);return e&&qt.forEach(function(Fa){return n(Z,Fa)}),Le&&sr(Z,ee),Vt}function te(Z,q,J,_t){if(J==null)throw Error(r(151));for(var Vt=null,me=null,qt=q,ee=q=0,yn=null,De=J.next();qt!==null&&!De.done;ee++,De=J.next()){qt.index>ee?(yn=qt,qt=null):yn=qt.sibling;var Fa=at(Z,qt,De.value,_t);if(Fa===null){qt===null&&(qt=yn);break}e&&qt&&Fa.alternate===null&&n(Z,qt),q=h(Fa,q,ee),me===null?Vt=Fa:me.sibling=Fa,me=Fa,qt=yn}if(De.done)return a(Z,qt),Le&&sr(Z,ee),Vt;if(qt===null){for(;!De.done;ee++,De=J.next())De=St(Z,De.value,_t),De!==null&&(q=h(De,q,ee),me===null?Vt=De:me.sibling=De,me=De);return Le&&sr(Z,ee),Vt}for(qt=o(qt);!De.done;ee++,De=J.next())De=ot(qt,Z,ee,De.value,_t),De!==null&&(e&&De.alternate!==null&&qt.delete(De.key===null?ee:De.key),q=h(De,q,ee),me===null?Vt=De:me.sibling=De,me=De);return e&&qt.forEach(function(Wy){return n(Z,Wy)}),Le&&sr(Z,ee),Vt}function ze(Z,q,J,_t){if(typeof J=="object"&&J!==null&&J.type===E&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case v:t:{for(var Vt=J.key;q!==null;){if(q.key===Vt){if(Vt=J.type,Vt===E){if(q.tag===7){a(Z,q.sibling),_t=u(q,J.props.children),_t.return=Z,Z=_t;break t}}else if(q.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===j&&Im(Vt)===q.type){a(Z,q.sibling),_t=u(q,J.props),uo(_t,J),_t.return=Z,Z=_t;break t}a(Z,q);break}else n(Z,q);q=q.sibling}J.type===E?(_t=ar(J.props.children,Z.mode,_t,J.key),_t.return=Z,Z=_t):(_t=vl(J.type,J.key,J.props,null,Z.mode,_t),uo(_t,J),_t.return=Z,Z=_t)}return M(Z);case S:t:{for(Vt=J.key;q!==null;){if(q.key===Vt)if(q.tag===4&&q.stateNode.containerInfo===J.containerInfo&&q.stateNode.implementation===J.implementation){a(Z,q.sibling),_t=u(q,J.children||[]),_t.return=Z,Z=_t;break t}else{a(Z,q);break}else n(Z,q);q=q.sibling}_t=Cu(J,Z.mode,_t),_t.return=Z,Z=_t}return M(Z);case j:return Vt=J._init,J=Vt(J._payload),ze(Z,q,J,_t)}if(gt(J))return ae(Z,q,J,_t);if(ht(J)){if(Vt=ht(J),typeof Vt!="function")throw Error(r(150));return J=Vt.call(J),te(Z,q,J,_t)}if(typeof J.then=="function")return ze(Z,q,Ol(J),_t);if(J.$$typeof===D)return ze(Z,q,Ml(Z,J),_t);Il(Z,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,q!==null&&q.tag===6?(a(Z,q.sibling),_t=u(q,J),_t.return=Z,Z=_t):(a(Z,q),_t=Ru(J,Z.mode,_t),_t.return=Z,Z=_t),M(Z)):a(Z,q)}return function(Z,q,J,_t){try{co=0;var Vt=ze(Z,q,J,_t);return Qr=null,Vt}catch(qt){if(qt===to||qt===bl)throw qt;var me=Yn(29,qt,null,Z.mode);return me.lanes=_t,me.return=Z,me}finally{}}}var Jr=Bm(!0),zm=Bm(!1),si=z(null),Ti=null;function ba(e){var n=e.alternate;lt(hn,hn.current&1),lt(si,e),Ti===null&&(n===null||Yr.current!==null||n.memoizedState!==null)&&(Ti=e)}function Fm(e){if(e.tag===22){if(lt(hn,hn.current),lt(si,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else Ta()}function Ta(){lt(hn,hn.current),lt(si,si.current)}function ji(e){tt(si),Ti===e&&(Ti=null),tt(hn)}var hn=z(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(Jn(n,e,a),no(n,e,a))}};function Hm(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(u,h):!0}function Gm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var zl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vm(e){zl(e)}function km(e){console.error(e)}function Xm(e){zl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function qm(e){return e=Sa(e),e.tag=3,e}function Ym(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){Wm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Wx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ti===null?Pf():a.alternate===null&&$e===0&&($e=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(e,o,u)),!1;case 22:return a.flags|=65536,o===zu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(e,o,u)),!1}throw Error(r(435,a.tag))}return If(e,o,u),Pf(),!1}if(Le)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(r(422),{cause:o}),Ks(ni(e,a)))):(o!==Uu&&(n=Error(r(423),{cause:o}),Ks(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=uf(e.stateNode,o,u),Gu(e,u),$e!==4&&($e=2)),!1;var h=Error(r(520),{cause:o});if(h=ni(h,a),vo===null?vo=[h]:vo.push(h),$e!==4&&($e=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Gu(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ua===null||!Ua.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,e,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var jm=Error(r(461)),vn=!1;function Tn(e,n,a,o){n.child=e===null?zm(n,null,a,o):Jr(n,e.child,a,o)}function Zm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return ur(n),o=qu(e,n,a,M,h,u),T=Yu(),e!==null&&!vn?(ju(e,n,u),Zi(e,n,u)):(Le&&T&&wu(n),n.flags|=1,Tn(e,n,o,u),n.child)}function Km(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Au(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Qm(e,n,h,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!vf(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(M,o)&&e.ref===n.ref)return Zi(e,n,u)}return n.flags|=1,e=Vi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(qs(h,o)&&e.ref===n.ref)if(vn=!1,n.pendingProps=o=h,vf(e,u))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Zi(e,n,u)}return ff(e,n,a,o,u)}function Jm(e,n,a){var o=n.pendingProps,u=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(u=n.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return $m(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,h!==null?h.cachePool:null),h!==null?Qp(n,h):ku(),Fm(n);else return n.lanes=n.childLanes=536870912,$m(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(El(n,h.cachePool),Qp(n,h),Ta(),n.memoizedState=null):(e!==null&&El(n,null),ku(),Ta());return Tn(e,n,u,a),n.child}function $m(e,n,a,o){var u=Bu();return u=u===null?null:{parent:fn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&El(n,null),ku(),Fm(n),e!==null&&Qs(e,n,o,!0),null}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return ur(n),a=qu(e,n,a,o,void 0,u),o=Yu(),e!==null&&!vn?(ju(e,n,u),Zi(e,n,u)):(Le&&o&&wu(n),n.flags|=1,Tn(e,n,a,u),n.child)}function tg(e,n,a,o,u,h){return ur(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(e),o=Yu(),e!==null&&!vn?(ju(e,n,h),Zi(e,n,h)):(Le&&o&&wu(n),n.flags|=1,Tn(e,n,a,h),n.child)}function eg(e,n,a,o,u){if(ur(n),n.stateNode===null){var h=Vr,M=a.contextType;typeof M=="object"&&M!==null&&(h=Dn(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=cf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Fu(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Dn(M):Vr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&cf.enqueueReplaceState(h,h.state,null),ao(n,o,h,u),io(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,I=dr(a,T);h.props=I;var et=h.context,mt=a.contextType;M=Vr,typeof mt=="object"&&mt!==null&&(M=Dn(mt));var St=a.getDerivedStateFromProps;mt=typeof St=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,mt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||et!==M)&&Gm(n,h,o,M),ya=!1;var at=n.memoizedState;h.state=at,ao(n,o,h,u),io(),et=n.memoizedState,T||at!==et||ya?(typeof St=="function"&&(lf(n,a,St,o),et=n.memoizedState),(I=ya||Hm(n,a,I,o,at,et,M))?(mt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=et),h.props=o,h.state=et,h.context=M,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Hu(e,n),M=n.memoizedProps,mt=dr(a,M),h.props=mt,St=n.pendingProps,at=h.context,et=a.contextType,I=Vr,typeof et=="object"&&et!==null&&(I=Dn(et)),T=a.getDerivedStateFromProps,(et=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==St||at!==I)&&Gm(n,h,o,I),ya=!1,at=n.memoizedState,h.state=at,ao(n,o,h,u),io();var ot=n.memoizedState;M!==St||at!==ot||ya||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof T=="function"&&(lf(n,a,T,o),ot=n.memoizedState),(mt=ya||Hm(n,a,mt,o,at,ot,I)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(et||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ot,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ot,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=I,o=mt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Hl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Jr(n,e.child,null,u),n.child=Jr(n,null,a,u)):Tn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Zi(e,n,u),e}function ng(e,n,a,o){return Zs(),n.flags|=256,Tn(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:kp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function ig(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(hn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Le){if(u?ba(n):Ta(),Le){var T=Je,I;if(I=T){t:{for(I=T,T=bi;I.nodeType!==8;){if(!T){T=null;break t}if(I=mi(I.nextSibling),I===null){T=null;break t}}T=I}T!==null?(n.memoizedState={dehydrated:T,treeContext:rr!==null?{id:ki,overflow:Xi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=T,I.return=n,n.child=I,Pn=n,Je=null,I=!0):I=!1}I||lr(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Qf(T)?n.lanes=32:n.lanes=536870912,null;ji(n)}return T=o.children,o=o.fallback,u?(Ta(),u=n.mode,T=Gl({mode:"hidden",children:T},u),o=ar(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,u=n.child,u.memoizedState=df(a),u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),mf(n,T))}if(I=e.memoizedState,I!==null&&(T=I.dehydrated,T!==null)){if(h)n.flags&256?(ba(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),u=o.fallback,T=n.mode,o=Gl({mode:"visible",children:o.children},T),u=ar(u,T,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,Jr(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=u);else if(ba(n),Qf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var et=M.dgst;M=et,o=Error(r(419)),o.stack="",o.digest=M,Ks({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(vn||Qs(e,n,a,!1),M=(a&e.childLanes)!==0,vn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:ke(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Gr(e,o),Jn(M,e,o),jm;T.data==="$?"||Pf(),n=gf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Je=mi(T.nextSibling),Pn=n,Le=!0,or=null,bi=!1,e!==null&&(ai[ri++]=ki,ai[ri++]=Xi,ai[ri++]=rr,ki=e.id,Xi=e.overflow,rr=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Ta(),u=o.fallback,T=n.mode,I=e.child,et=I.sibling,o=Vi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,et!==null?u=Vi(et,u):(u=ar(u,T,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,T=e.child.memoizedState,T===null?T=df(a):(I=T.cachePool,I!==null?(et=fn._currentValue,I=I.parent!==et?{parent:et,pool:et}:I):I=kp(),T={baseLanes:T.baseLanes|a,cachePool:I}),u.memoizedState=T,u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),a=e.child,e=a.sibling,a=Vi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return Jr(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nu(e.return,n,a)}function _f(e,n,a,o,u){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=u)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;if(Tn(e,n,o.children,a),o=hn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(lt(hn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,h);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,h);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Zi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Vi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Vi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function qx(e,n,a){switch(n.tag){case 3:Et(n,n.stateNode.containerInfo),xa(n,fn,e.memoizedState.cache),Zs();break;case 27:case 5:wt(n);break;case 4:Et(n,n.stateNode.containerInfo);break;case 10:xa(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(ba(n),e=Zi(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),lt(hn,hn.current),o)break;return null;case 22:case 23:return n.lanes=0,Jm(e,n,a);case 24:xa(n,fn,e.memoizedState.cache)}return Zi(e,n,a)}function sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return vn=!1,qx(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Le&&(n.flags&1048576)!==0&&Ip(n,yl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(e=dr(o,e),n.tag=1,n=eg(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===U){n.tag=11,n=Zm(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Km(null,n,o,e,a);break t}}throw n=Mt(o)||o,Error(r(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=dr(o,n.pendingProps),eg(e,n,o,u,a);case 3:t:{if(Et(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,Hu(e,n),ao(n,o,null,a);var M=n.memoizedState;if(o=M.cache,xa(n,fn,o),o!==h.cache&&Pu(n,[fn],a,!0),io(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ng(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),Ks(u),n=ng(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=mi(e.firstChild),Pn=n,Le=!0,or=null,bi=!0,a=zm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===u){n=Zi(e,n,a);break t}Tn(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Le||(a=n.type,e=n.pendingProps,o=ec(st.current).createElement(a),o[cn]=n,o[En]=e,Rn(o,a,e),rn(o),n.stateNode=o):n.memoizedState=u_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return wt(n),e===null&&Le&&(o=n.stateNode=o_(n.type,n.pendingProps,st.current),Pn=n,bi=!0,u=Je,Pa(n.type)?(Jf=u,Je=mi(o.firstChild)):Je=u),Tn(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Le&&((u=o=Je)&&(o=yy(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,Pn=n,Je=mi(o.firstChild),bi=!1,u=!0):u=!1),u||lr(n)),wt(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,jf(u,h)?o=null:M!==null&&jf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,zx,null,null,a),Ro._currentValue=u),Hl(e,n),Tn(e,n,o,a),n.child;case 6:return e===null&&Le&&((e=a=Je)&&(a=Sy(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Pn=n,Je=null,e=!0):e=!1),e||lr(n)),null;case 13:return ig(e,n,a);case 4:return Et(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Jr(n,null,o,a):Tn(e,n,o,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,xa(n,n.type,o.value),Tn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ur(n),u=Dn(u),o=o(u),n.flags|=1,Tn(e,n,o,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Qm(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Gl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Vi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Jm(e,n,a);case 24:return ur(n),o=Dn(fn),e===null?(u=Bu(),u===null&&(u=We,h=Ou(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Fu(n),xa(n,fn,u)):((e.lanes&a)!==0&&(Hu(e,n),ao(n,null,null,a),io()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),xa(n,fn,o)):(o=h.cache,xa(n,fn,o),o!==u.cache&&Pu(n,[fn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ki(e){e.flags|=4}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m_(n)){if(n=si.current,n!==null&&((Te&4194048)===Te?Ti!==null:(Te&62914560)!==Te&&(Te&536870912)===0||n!==Ti))throw eo=zu,Xp;e.flags|=8192}}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pt():536870912,e.lanes|=n,ns|=n)}function fo(e,n){if(!Le)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ze(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),qi(fn),zt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Ki(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fp())),Ze(n),null;case 26:return a=n.memoizedState,e===null?(Ki(n),a!==null?(Ze(n),og(n,a)):(Ze(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Ki(n),Ze(n),og(n,a)):(Ze(n),n.flags&=-16777217):(e.memoizedProps!==o&&Ki(n),Ze(n),n.flags&=-16777217),null;case 27:ge(n),a=st.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}e=W.current,js(n)?Bp(n):(e=o_(u,o,a),n.stateNode=e,Ki(n))}return Ze(n),null;case 5:if(ge(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(e=W.current,js(n))Bp(n);else{switch(u=ec(st.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[cn]=n,e[En]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Rn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Ki(n)}}return Ze(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ki(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=st.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Pn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[cn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||lr(n)}else e=ec(e).createTextNode(o),e[cn]=n,n.stateNode=e}return Ze(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[cn]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),u=!1}else u=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ji(n),n):(ji(n),null)}if(ji(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ze(n),null;case 4:return zt(),e===null&&kf(n.stateNode.containerInfo),Ze(n),null;case 10:return qi(n.type),Ze(n),null;case 19:if(tt(hn),u=n.memoizedState,u===null)return Ze(n),null;if(o=(n.flags&128)!==0,h=u.rendering,h===null)if(o)fo(u,!1);else{if($e!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Bl(e),h!==null){for(n.flags|=128,fo(u,!1),e=h.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return lt(hn,hn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Wt()>Wl&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304)}else{if(!o)if(e=Bl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!h.alternate&&!Le)return Ze(n),null}else 2*Wt()-u.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304);u.isBackwards?(h.sibling=n.child,n.child=h):(e=u.last,e!==null?e.sibling=h:n.child=h,u.last=h)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Wt(),n.sibling=null,e=hn.current,lt(hn,o?e&1|2:e&1),n):(Ze(n),null);case 22:case 23:return ji(n),Xu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&tt(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),qi(fn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jx(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return qi(fn),zt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ge(n),null;case 13:if(ji(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return tt(hn),null;case 4:return zt(),null;case 10:return qi(n.type),null;case 22:case 23:return ji(n),Xu(),e!==null&&tt(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return qi(fn),null;case 25:return null;default:return null}}function lg(e,n){switch(Du(n),n.tag){case 3:qi(fn),zt();break;case 26:case 27:case 5:ge(n);break;case 4:zt();break;case 13:ji(n);break;case 19:tt(hn);break;case 10:qi(n.type);break;case 22:case 23:ji(n),Xu(),e!==null&&tt(fr);break;case 24:qi(fn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(T){Ve(n,n.return,T)}}function Aa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,u=n;var I=a,et=T;try{et()}catch(mt){Ve(u,I,mt)}}}o=o.next}while(o!==h)}}catch(mt){Ve(n,n.return,mt)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(o){Ve(e,e.return,o)}}}function ug(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ve(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Ve(e,n,u)}}function Ai(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Ve(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Ve(e,e.return,u)}}function xf(e,n,a){try{var o=e.stateNode;my(o,e.type,a,n),o[En]=n}catch(u){Ve(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=tc));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,a),n[cn]=e,n[En]=a}catch(h){Ve(e,e.return,h)}}var Qi=!1,nn=!1,Mf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Zx(e,n){if(e=e.containerInfo,qf=oc,e=Tp(e),xu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,T=-1,I=-1,et=0,mt=0,St=e,at=null;e:for(;;){for(var ot;St!==a||u!==0&&St.nodeType!==3||(T=M+u),St!==h||o!==0&&St.nodeType!==3||(I=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(ot=St.firstChild)!==null;)at=St,St=ot;for(;;){if(St===e)break e;if(at===a&&++et===u&&(T=M),at===h&&++mt===o&&(I=M),(ot=St.nextSibling)!==null)break;St=at,at=St.parentNode}St=ot}a=T===-1||I===-1?null:{start:T,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},oc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ae=dr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ae,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(te){Ve(a,a.return,te)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),o&4&&ho(5,a);break;case 1:if(Ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ve(a,a.return,M)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ve(a,a.return,M)}}o&64&&cg(a),o&512&&po(a,a.return);break;case 3:if(Ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(M){Ve(a,a.return,M)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:Ra(e,a),n===null&&o&4&&fg(a),o&512&&po(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),o&4&&vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ay.bind(null,a),My(e,a))));break;case 22:if(o=a.memoizedState!==null||Qi,!o){n=n!==null&&n.memoizedState!==null||nn,u=Qi;var h=nn;Qi=o,(nn=n)&&!h?Ca(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),Qi=u,nn=h}break;case 30:break;default:Ra(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ma(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ye=null,Hn=!1;function Ji(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(Dt&&typeof Dt.onCommitFiberUnmount=="function")try{Dt.onCommitFiberUnmount(pt,a)}catch{}switch(a.tag){case 26:nn||Ai(a,n),Ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:nn||Ai(a,n);var o=Ye,u=Hn;Pa(a.type)&&(Ye=a.stateNode,Hn=!1),Ji(e,n,a),Eo(a.stateNode),Ye=o,Hn=u;break;case 5:nn||Ai(a,n);case 6:if(o=Ye,u=Hn,Ye=null,Ji(e,n,a),Ye=o,Hn=u,Ye!==null)if(Hn)try{(Ye.nodeType===9?Ye.body:Ye.nodeName==="HTML"?Ye.ownerDocument.body:Ye).removeChild(a.stateNode)}catch(h){Ve(a,n,h)}else try{Ye.removeChild(a.stateNode)}catch(h){Ve(a,n,h)}break;case 18:Ye!==null&&(Hn?(e=Ye,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Uo(e)):r_(Ye,a.stateNode));break;case 4:o=Ye,u=Hn,Ye=a.stateNode.containerInfo,Hn=!0,Ji(e,n,a),Ye=o,Hn=u;break;case 0:case 11:case 14:case 15:nn||Aa(2,a,n),nn||Aa(4,a,n),Ji(e,n,a);break;case 1:nn||(Ai(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),Ji(e,n,a);break;case 21:Ji(e,n,a);break;case 22:nn=(o=nn)||a.memoizedState!==null,Ji(e,n,a),nn=o;break;default:Ji(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(a){Ve(n,n.return,a)}}function Kx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(r(435,e.tag))}}function Ef(e,n){var a=Kx(e);n.forEach(function(o){var u=ry.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Pa(T.type)){Ye=T.stateNode,Hn=!1;break t}break;case 5:Ye=T.stateNode,Hn=!1;break t;case 3:case 4:Ye=T.stateNode.containerInfo,Hn=!0;break t}T=T.return}if(Ye===null)throw Error(r(160));_g(h,M,u),Ye=null,Hn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)xg(n,e),n=n.sibling}var pi=null;function xg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Aa(3,e,e.return),ho(3,e),Aa(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(nn||a===null||Ai(a,a.return)),o&64&&Qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(jn(n,e),Zn(e),o&512&&(nn||a===null||Ai(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[pa]||h[cn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Rn(h,o,a),h[cn]=e,rn(h),o=h;break t;case"link":var M=d_("link","href",u).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}h=u.createElement(o),Rn(h,o,a),u.head.appendChild(h);break;case"meta":if(M=d_("meta","content",u).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}h=u.createElement(o),Rn(h,o,a),u.head.appendChild(h);break;default:throw Error(r(468,o))}h[cn]=e,rn(h),o=h}e.stateNode=o}else p_(u,e.type,e.stateNode);else e.stateNode=h_(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?p_(u,e.type,e.stateNode):h_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&xf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(nn||a===null||Ai(a,a.return)),a!==null&&o&4&&xf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(nn||a===null||Ai(a,a.return)),e.flags&32){u=e.stateNode;try{Ei(u,"")}catch(ot){Ve(e,e.return,ot)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,xf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(ot){Ve(e,e.return,ot)}}break;case 3:if(ac=null,u=pi,pi=nc(n.containerInfo),jn(n,e),pi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(ot){Ve(e,e.return,ot)}Mf&&(Mf=!1,yg(e));break;case 4:o=pi,pi=nc(e.stateNode.containerInfo),jn(n,e),Zn(e),pi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=Wt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,et=Qi,mt=nn;if(Qi=et||u,nn=mt||I,jn(n,e),nn=mt,Qi=et,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Qi||nn||pr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=I.stateNode;var St=I.memoizedProps.style,at=St!=null&&St.hasOwnProperty("display")?St.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(ot){Ve(I,I.return,ot)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(ot){Ve(I,I.return,ot)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,h=yf(e);kl(e,h,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ei(M,""),a.flags&=-33);var T=yf(e);kl(e,T,M);break;case 3:case 4:var I=a.stateNode.containerInfo,et=yf(e);Sf(e,et,I);break;default:throw Error(r(161))}}catch(mt){Ve(e,e.return,mt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function yg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;yg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),pr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),pr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ai(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}e=e.sibling}}function Ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:Ca(u,h,a),ho(4,h);break;case 1:if(Ca(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ve(o,o.return,et)}if(o=h,u=o.updateQueue,u!==null){var T=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Zp(I[u],T)}catch(et){Ve(o,o.return,et)}}a&&M&64&&cg(h),po(h,h.return);break;case 27:dg(h);case 26:case 5:Ca(u,h,a),a&&o===null&&M&4&&fg(h),po(h,h.return);break;case 12:Ca(u,h,a);break;case 13:Ca(u,h,a),a&&M&4&&vg(u,h);break;case 22:h.memoizedState===null&&Ca(u,h,a),po(h,h.return);break;case 30:break;default:Ca(u,h,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(e,n,a,o),n=n.sibling}function Sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&ho(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Ve(n,n.return,I)}}else Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ri(e,n,a,o):mo(e,n):h._visibility&2?Ri(e,n,a,o):(h._visibility|=2,$r(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(M,n);break;case 24:Ri(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Ri(e,n,a,o)}}function $r(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,T=a,I=o,et=M.flags;switch(M.tag){case 0:case 11:case 15:$r(h,M,T,I,u),ho(8,M);break;case 23:break;case 22:var mt=M.stateNode;M.memoizedState!==null?mt._visibility&2?$r(h,M,T,I,u):mo(h,M):(mt._visibility|=2,$r(h,M,T,I,u)),u&&et&2048&&bf(M.alternate,M);break;case 24:$r(h,M,T,I,u),u&&et&2048&&Tf(M.alternate,M);break;default:$r(h,M,T,I,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&bf(o.alternate,o);break;case 24:mo(a,o),u&2048&&Tf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function ts(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 26:ts(e),e.flags&go&&e.memoizedState!==null&&Oy(pi,e.memoizedState,e.memoizedProps);break;case 5:ts(e);break;case 3:case 4:var n=pi;pi=nc(e.stateNode.containerInfo),ts(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,ts(e),go=n):ts(e));break;default:ts(e)}}function Eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Tg(o,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):_o(e);break;default:_o(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Tg(o,e)}Eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function Tg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,h=o.return;if(gg(o),o===a){xn=null;break t}if(u!==null){u.return=h,xn=u;break t}xn=h}}}var Qx={getCacheForType:function(e){var n=Dn(fn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jx=typeof WeakMap=="function"?WeakMap:Map,Pe=0,We=null,ve=null,Te=0,Oe=0,Kn=null,wa=!1,es=!1,Af=!1,$i=0,$e=0,Da=0,mr=0,Rf=0,oi=0,ns=0,vo=null,Gn=null,Cf=!1,wf=0,Wl=1/0,ql=null,Ua=null,An=0,La=null,is=null,as=0,Df=0,Uf=null,Ag=null,xo=0,Lf=null;function Qn(){if((Pe&2)!==0&&Te!==0)return Te&-Te;if(B.T!==null){var e=Wr;return e!==0?e:Ff()}return Ce()}function Rg(){oi===0&&(oi=(Te&536870912)===0||Le?Y():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===We&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)&&(rs(e,0),Na(e,Te,oi,!1)),yt(e,a),((Pe&2)===0||e!==We)&&(e===We&&((Pe&2)===0&&(mr|=a),$e===4&&Na(e,Te,oi,!1)),Ci(e))}function Cg(e,n,a){if((Pe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),u=o?ey(e,n):Of(e,n,!0),h=o;do{if(u===0){es&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!$x(a)){u=Of(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;u=vo;var I=T.current.memoizedState.isDehydrated;if(I&&(rs(T,M).flags|=256),M=Of(T,M,!1),M!==2){if(Af&&!I){T.errorRecoveryDisabledLanes|=h,mr|=h,u=4;break t}h=Gn,Gn=u,h!==null&&(Gn===null?Gn=h:Gn.push.apply(Gn,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){rs(e,0),Na(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,oi,!wa);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=wf+300-Wt(),10<u)){if(Na(o,n,oi,!wa),ce(o,0,!0)!==0)break t;o.timeoutHandle=i_(wg.bind(null,o,a,Gn,ql,Cf,n,oi,mr,ns,wa,h,2,-0,0),u);break t}wg(o,a,Gn,ql,Cf,n,oi,mr,ns,wa,h,0,-0,0)}}break}while(!0);Ci(e)}function wg(e,n,a,o,u,h,M,T,I,et,mt,St,at,ot){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:Py},Mg(n),St=Iy(),St!==null)){e.cancelPendingCommit=St(Ig.bind(null,e,n,h,a,o,u,M,T,I,mt,1,at,ot)),Na(e,h,M,!et);return}Ig(e,n,h,a,o,u,M,T,I)}function $x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!qn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~Rf,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Ft(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&Ot(e,a,n)}function Yl(){return(Pe&6)===0?(yo(0),!1):!0}function Nf(){if(ve!==null){if(Oe===0)var e=ve.return;else e=ve,Wi=cr=null,Zu(e),Qr=null,co=0,e=ve;for(;e!==null;)lg(e.alternate,e),e=e.return;ve=null}}function rs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_y(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nf(),We=e,ve=a=Vi(e.current,null),Te=n,Oe=0,Kn=null,wa=!1,es=ne(e,n),Af=!1,ns=oi=Rf=mr=Da=$e=0,Gn=vo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ft(o),h=1<<u;n|=e[u],o&=~h}return $i=n,ml(),a}function Dg(e,n){pe=null,B.H=Pl,n===to||n===bl?(n=Yp(),Oe=3):n===Xp?(n=Yp(),Oe=4):Oe=n===jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,ve===null&&($e=1,Fl(e,ni(n,e.current)))}function Ug(){var e=B.H;return B.H=Pl,e===null?Pl:e}function Lg(){var e=B.A;return B.A=Qx,e}function Pf(){$e=4,wa||(Te&4194048)!==Te&&si.current!==null||(es=!0),(Da&134217727)===0&&(mr&134217727)===0||We===null||Na(We,Te,oi,!1)}function Of(e,n,a){var o=Pe;Pe|=2;var u=Ug(),h=Lg();(We!==e||Te!==n)&&(ql=null,rs(e,n)),n=!1;var M=$e;t:do try{if(Oe!==0&&ve!==null){var T=ve,I=Kn;switch(Oe){case 8:Nf(),M=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var et=Oe;if(Oe=0,Kn=null,ss(e,T,I,et),a&&es){M=0;break t}break;default:et=Oe,Oe=0,Kn=null,ss(e,T,I,et)}}ty(),M=$e;break}catch(mt){Dg(e,mt)}while(!0);return n&&e.shellSuspendCounter++,Wi=cr=null,Pe=o,B.H=u,B.A=h,ve===null&&(We=null,Te=0,ml()),M}function ty(){for(;ve!==null;)Ng(ve)}function ey(e,n){var a=Pe;Pe|=2;var o=Ug(),u=Lg();We!==e||Te!==n?(ql=null,Wl=Wt()+500,rs(e,n)):es=ne(e,n);t:do try{if(Oe!==0&&ve!==null){n=ve;var h=Kn;e:switch(Oe){case 1:Oe=0,Kn=null,ss(e,n,h,1);break;case 2:case 9:if(Wp(h)){Oe=0,Kn=null,Pg(n);break}n=function(){Oe!==2&&Oe!==9||We!==e||(Oe=7),Ci(e)},h.then(n,n);break t;case 3:Oe=7;break t;case 4:Oe=5;break t;case 7:Wp(h)?(Oe=0,Kn=null,Pg(n)):(Oe=0,Kn=null,ss(e,n,h,7));break;case 5:var M=null;switch(ve.tag){case 26:M=ve.memoizedState;case 5:case 27:var T=ve;if(!M||m_(M)){Oe=0,Kn=null;var I=T.sibling;if(I!==null)ve=I;else{var et=T.return;et!==null?(ve=et,jl(et)):ve=null}break e}}Oe=0,Kn=null,ss(e,n,h,5);break;case 6:Oe=0,Kn=null,ss(e,n,h,6);break;case 8:Nf(),$e=6;break t;default:throw Error(r(462))}}ny();break}catch(mt){Dg(e,mt)}while(!0);return Wi=cr=null,B.H=o,B.A=u,Pe=a,ve!==null?0:(We=null,Te=0,ml(),$e)}function ny(){for(;ve!==null&&!Re();)Ng(ve)}function Ng(e){var n=sg(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,Te);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,Te);break;case 5:Zu(n);default:lg(a,n),n=ve=Op(n,$i),n=sg(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?jl(e):ve=n}function ss(e,n,a,o){Wi=cr=null,Zu(n),Qr=null,co=0;var u=n.return;try{if(Wx(e,u,n,a,Te)){$e=1,Fl(e,ni(a,e.current)),ve=null;return}}catch(h){if(u!==null)throw ve=u,h;$e=1,Fl(e,ni(a,e.current)),ve=null;return}n.flags&32768?(Le||o===1?e=!0:es||(Te&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Og(n,wa);return}e=n.return;var a=Yx(n.alternate,n,$i);if(a!==null){ve=a;return}if(n=n.sibling,n!==null){ve=n;return}ve=n=e}while(n!==null);$e===0&&($e=5)}function Og(e,n){do{var a=jx(e.alternate,e);if(a!==null){a.flags&=32767,ve=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ve=e;return}ve=e=a}while(e!==null);$e=6,ve=null}function Ig(e,n,a,o,u,h,M,T,I){e.cancelPendingCommit=null;do Zl();while(An!==0);if((Pe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=bu,Bt(e,a,h,M,T,I),e===We&&(ve=We=null,Te=0),is=n,La=e,as=a,Df=h,Uf=u,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sy(N,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=X.p,X.p=2,M=Pe,Pe|=4;try{Zx(e,n,a)}finally{Pe=M,X.p=u,B.T=o}}An=1,Bg(),zg(),Fg()}}function Bg(){if(An===1){An=0;var e=La,n=is,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=X.p;X.p=2;var u=Pe;Pe|=4;try{xg(n,e);var h=Yf,M=Tp(e.containerInfo),T=h.focusedElem,I=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&bp(T.ownerDocument.documentElement,T)){if(I!==null&&xu(T)){var et=I.start,mt=I.end;if(mt===void 0&&(mt=et),"selectionStart"in T)T.selectionStart=et,T.selectionEnd=Math.min(mt,T.value.length);else{var St=T.ownerDocument||document,at=St&&St.defaultView||window;if(at.getSelection){var ot=at.getSelection(),ae=T.textContent.length,te=Math.min(I.start,ae),ze=I.end===void 0?te:Math.min(I.end,ae);!ot.extend&&te>ze&&(M=ze,ze=te,te=M);var Z=Ep(T,te),q=Ep(T,ze);if(Z&&q&&(ot.rangeCount!==1||ot.anchorNode!==Z.node||ot.anchorOffset!==Z.offset||ot.focusNode!==q.node||ot.focusOffset!==q.offset)){var J=St.createRange();J.setStart(Z.node,Z.offset),ot.removeAllRanges(),te>ze?(ot.addRange(J),ot.extend(q.node,q.offset)):(J.setEnd(q.node,q.offset),ot.addRange(J))}}}}for(St=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&St.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<St.length;T++){var _t=St[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}oc=!!qf,Yf=qf=null}finally{Pe=u,X.p=o,B.T=a}}e.current=n,An=2}}function zg(){if(An===2){An=0;var e=La,n=is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=X.p;X.p=2;var u=Pe;Pe|=4;try{mg(e,n.alternate,n)}finally{Pe=u,X.p=o,B.T=a}}An=3}}function Fg(){if(An===4||An===3){An=0,jt();var e=La,n=is,a=as,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?An=5:(An=0,is=La=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),an(a),n=n.stateNode,Dt&&typeof Dt.onCommitFiberRoot=="function")try{Dt.onCommitFiberRoot(pt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=X.p,X.p=2,B.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];h(T.value,{componentStack:T.stack})}}finally{B.T=n,X.p=u}}(as&3)!==0&&Zl(),Ci(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Lf?xo++:(xo=0,Lf=e):xo=0,yo(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Zl(e){return Bg(),zg(),Fg(),Gg()}function Gg(){if(An!==5)return!1;var e=La,n=Df;Df=0;var a=an(as),o=B.T,u=X.p;try{X.p=32>a?32:a,B.T=null,a=Uf,Uf=null;var h=La,M=as;if(An=0,is=La=null,as=0,(Pe&6)!==0)throw Error(r(331));var T=Pe;if(Pe|=4,bg(h.current),Sg(h,h.current,M,a),Pe=T,yo(0,!1),Dt&&typeof Dt.onPostCommitFiberRoot=="function")try{Dt.onPostCommitFiberRoot(pt,h)}catch{}return!0}finally{X.p=u,B.T=o,Hg(e,n)}}function Vg(e,n,a){n=ni(a,n),n=uf(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(yt(e,2),Ci(e))}function Ve(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ni(a,e),a=qm(2),o=Ma(n,a,2),o!==null&&(Ym(a,o,n,e),yt(o,2),Ci(o));break}}n=n.return}}function If(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=iy.bind(null,e,n,a),n.then(e,e))}function iy(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Te&a)===a&&($e===4||$e===3&&(Te&62914560)===Te&&300>Wt()-wf?(Pe&2)===0&&rs(e,0):Rf|=a,ns===Te&&(ns=0)),Ci(e)}function kg(e,n){n===0&&(n=Pt()),e=Gr(e,n),e!==null&&(yt(e,n),Ci(e))}function ay(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function ry(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function sy(e,n){return oe(e,n)}var Kl=null,os=null,Bf=!1,Ql=!1,zf=!1,gr=0;function Ci(e){e!==os&&e.next===null&&(os===null?Kl=os=e:os=os.next=e),Ql=!0,Bf||(Bf=!0,ly())}function yo(e,n){if(!zf&&Ql){zf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Ft(42|e)+1)-1,h&=u&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Yg(o,h))}else h=Te,h=ce(o,o===We?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ne(o,h)||(a=!0,Yg(o,h));o=o.next}while(a);zf=!1}}function oy(){Xg()}function Xg(){Ql=Bf=!1;var e=0;gr!==0&&(gy()&&(e=gr),gr=0);for(var n=Wt(),a=null,o=Kl;o!==null;){var u=o.next,h=Wg(o,n);h===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(os=a)):(a=o,(e!==0||(h&3)!==0)&&(Ql=!0)),o=u}yo(e)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Ft(h),T=1<<M,I=u[M];I===-1?((T&a)===0||(T&o)!==0)&&(u[M]=Ne(T,n)):I<=n&&(e.expiredLanes|=T),h&=~T}if(n=We,a=Te,a=ce(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Oe===2||Oe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&H(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&H(o),an(a)){case 2:case 8:a=kt;break;case 32:a=N;break;case 268435456:a=nt;break;default:a=N}return o=qg.bind(null,e),a=oe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&H(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(An!==0&&An!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=Te;return o=ce(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),Wg(e,Wt()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(Zl())return null;Cg(e,n,!0)}function ly(){vy(function(){(Pe&6)!==0?oe(Me,oy):Xg()})}function Ff(){return gr===0&&(gr=Y()),gr}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cy(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=jg((u[En]||null).action),M=o.submitter;M&&(n=(n=M[En]||null)?jg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var T=new hl("action","action",null,o,u);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var I=M?Zg(u,M):new FormData(u);rf(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(T.preventDefault(),I=M?Zg(u,M):new FormData(u),rf(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],uy=Gf.toLowerCase(),fy=Gf[0].toUpperCase()+Gf.slice(1);di(uy,"on"+fy)}di(Cp,"onAnimationEnd"),di(wp,"onAnimationIteration"),di(Dp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Cx,"onTransitionRun"),di(wx,"onTransitionStart"),di(Dx,"onTransitionCancel"),di(Up,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),zi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zi("onBeforeInput",["compositionend","keypress","textInput","paste"]),zi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],I=T.instance,et=T.currentTarget;if(T=T.listener,I!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=et;try{h(u)}catch(mt){zl(mt)}u.currentTarget=null,h=I}else for(M=0;M<o.length;M++){if(T=o[M],I=T.instance,et=T.currentTarget,T=T.listener,I!==h&&u.isPropagationStopped())break t;h=T,u.currentTarget=et;try{h(u)}catch(mt){zl(mt)}u.currentTarget=null,h=I}}}}function xe(e,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Jl]){e[Jl]=!0,sl.forEach(function(a){a!=="selectionchange"&&(hy.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Vf("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(S_(n)){case 2:var u=Fy;break;case 8:u=Hy;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Xf(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===u)break;if(M===4)for(M=o.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;T!==null;){if(M=Ii(T),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){o=h=M;continue t}T=T.parentNode}}o=o.return}ap(function(){var et=h,mt=lu(a),St=[];t:{var at=Lp.get(e);if(at!==void 0){var ot=hl,ae=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ot=sx;break;case"focusin":ae="focus",ot=pu;break;case"focusout":ae="blur",ot=pu;break;case"beforeblur":case"afterblur":ot=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=cx;break;case Cp:case wp:case Dp:ot=Qv;break;case Up:ot=fx;break;case"scroll":case"scrollend":ot=qv;break;case"wheel":ot=dx;break;case"copy":case"cut":case"paste":ot=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=cp;break;case"toggle":case"beforetoggle":ot=mx}var te=(n&4)!==0,ze=!te&&(e==="scroll"||e==="scrollend"),Z=te?at!==null?at+"Capture":null:at;te=[];for(var q=et,J;q!==null;){var _t=q;if(J=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||J===null||Z===null||(_t=Fs(q,Z),_t!=null&&te.push(Mo(q,_t,J))),ze)break;q=q.return}0<te.length&&(at=new ot(at,ae,null,a,mt),St.push({event:at,listeners:te}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",at&&a!==ou&&(ae=a.relatedTarget||a.fromElement)&&(Ii(ae)||ae[Bn]))break t;if((ot||at)&&(at=mt.window===mt?mt:(at=mt.ownerDocument)?at.defaultView||at.parentWindow:window,ot?(ae=a.relatedTarget||a.toElement,ot=et,ae=ae?Ii(ae):null,ae!==null&&(ze=c(ae),te=ae.tag,ae!==ze||te!==5&&te!==27&&te!==6)&&(ae=null)):(ot=null,ae=et),ot!==ae)){if(te=op,_t="onMouseLeave",Z="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(te=cp,_t="onPointerLeave",Z="onPointerEnter",q="pointer"),ze=ot==null?at:tr(ot),J=ae==null?at:tr(ae),at=new te(_t,q+"leave",ot,a,mt),at.target=ze,at.relatedTarget=J,_t=null,Ii(mt)===et&&(te=new te(Z,q+"enter",ae,a,mt),te.target=J,te.relatedTarget=ze,_t=te),ze=_t,ot&&ae)e:{for(te=ot,Z=ae,q=0,J=te;J;J=ls(J))q++;for(J=0,_t=Z;_t;_t=ls(_t))J++;for(;0<q-J;)te=ls(te),q--;for(;0<J-q;)Z=ls(Z),J--;for(;q--;){if(te===Z||Z!==null&&te===Z.alternate)break e;te=ls(te),Z=ls(Z)}te=null}else te=null;ot!==null&&Jg(St,at,ot,te,!1),ae!==null&&ze!==null&&Jg(St,ze,ae,te,!0)}}t:{if(at=et?tr(et):window,ot=at.nodeName&&at.nodeName.toLowerCase(),ot==="select"||ot==="input"&&at.type==="file")var Vt=_p;else if(mp(at))if(vp)Vt=Tx;else{Vt=Ex;var me=Mx}else ot=at.nodeName,!ot||ot.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?et&&su(et.elementType)&&(Vt=_p):Vt=bx;if(Vt&&(Vt=Vt(e,et))){gp(St,Vt,a,mt);break t}me&&me(e,at,et),e==="focusout"&&et&&at.type==="number"&&et.memoizedProps.value!=null&&wn(at,"number",at.value)}switch(me=et?tr(et):window,e){case"focusin":(mp(me)||me.contentEditable==="true")&&(zr=me,yu=et,Ys=null);break;case"focusout":Ys=yu=zr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Ap(St,a,mt);break;case"selectionchange":if(Rx)break;case"keydown":case"keyup":Ap(St,a,mt)}var qt;if(gu)t:{switch(e){case"compositionstart":var ee="onCompositionStart";break t;case"compositionend":ee="onCompositionEnd";break t;case"compositionupdate":ee="onCompositionUpdate";break t}ee=void 0}else Br?dp(e,a)&&(ee="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ee="onCompositionStart");ee&&(up&&a.locale!=="ko"&&(Br||ee!=="onCompositionStart"?ee==="onCompositionEnd"&&Br&&(qt=rp()):(va=mt,fu="value"in va?va.value:va.textContent,Br=!0)),me=$l(et,ee),0<me.length&&(ee=new lp(ee,e,null,a,mt),St.push({event:ee,listeners:me}),qt?ee.data=qt:(qt=pp(a),qt!==null&&(ee.data=qt)))),(qt=_x?vx(e,a):xx(e,a))&&(ee=$l(et,"onBeforeInput"),0<ee.length&&(me=new lp("onBeforeInput","beforeinput",null,a,mt),St.push({event:me,listeners:ee}),me.data=qt)),cy(St,e,et,a,mt)}Kg(St,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Fs(e,a),u!=null&&o.unshift(Mo(e,u,h)),u=Fs(e,n),u!=null&&o.push(Mo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function ls(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var T=a,I=T.alternate,et=T.stateNode;if(T=T.tag,I!==null&&I===o)break;T!==5&&T!==26&&T!==27||et===null||(I=et,u?(et=Fs(a,h),et!=null&&M.unshift(Mo(a,et,I))):u||(et=Fs(a,h),et!=null&&M.push(Mo(a,et,I)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var dy=/\r\n?/g,py=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(dy,`
`).replace(py,"")}function t_(e,n){return n=$g(n),$g(e)===n}function tc(){}function Be(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ei(e,""+o);break;case"className":Ut(e,"class",o);break;case"tabIndex":Ut(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ut(e,a,o);break;case"style":np(e,o,h);break;case"data":if(n!=="object"){Ut(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=tc);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":xe("beforetoggle",e),xe("toggle",e),Rt(e,"popover",o);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Rt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,Rt(e,a,o))}}function Wf(e,n,a,o,u,h){switch(a){case"style":np(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&Ei(e,""+o);break;case"onScroll":o!=null&&xe("scroll",e);break;case"onScrollEnd":o!=null&&xe("scrollend",e);break;case"onClick":o!=null&&(e.onclick=tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[En]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Rt(e,a,o)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,h,M,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var T=h=M=u=null,I=null,et=null;for(o in a)if(a.hasOwnProperty(o)){var mt=a[o];if(mt!=null)switch(o){case"name":u=mt;break;case"type":M=mt;break;case"checked":I=mt;break;case"defaultChecked":et=mt;break;case"value":h=mt;break;case"defaultValue":T=mt;break;case"children":case"dangerouslySetInnerHTML":if(mt!=null)throw Error(r(137,n));break;default:Be(e,n,o,mt,a,null)}}Ge(e,h,T,I,et,M,u,!1),Qe(e);return;case"select":xe("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Be(e,n,u,T,a,null)}n=h,a=M,e.multiple=!!o,n!=null?un(e,!!o,n,!1):a!=null&&un(e,!!o,a,!0);return;case"textarea":xe("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":u=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Be(e,n,M,T,a,null)}bn(e,o,u,h),Qe(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,I,o,a,null)}return;case"dialog":xe("beforetoggle",e),xe("toggle",e),xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)xe(So[o],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(o=a[et],o!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,et,o,a,null)}return;default:if(su(n)){for(mt in a)a.hasOwnProperty(mt)&&(o=a[mt],o!==void 0&&Wf(e,n,mt,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Be(e,n,T,o,a,null))}function my(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,T=null,I=null,et=null,mt=null;for(ot in a){var St=a[ot];if(a.hasOwnProperty(ot)&&St!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":I=St;default:o.hasOwnProperty(ot)||Be(e,n,ot,null,o,St)}}for(var at in o){var ot=o[at];if(St=a[at],o.hasOwnProperty(at)&&(ot!=null||St!=null))switch(at){case"type":h=ot;break;case"name":u=ot;break;case"checked":et=ot;break;case"defaultChecked":mt=ot;break;case"value":M=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ot!==St&&Be(e,n,at,ot,o,St)}}Fi(e,M,T,I,et,mt,h,u);return;case"select":ot=M=T=at=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":ot=I;default:o.hasOwnProperty(h)||Be(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":at=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==I&&Be(e,n,u,h,o,I)}n=T,a=M,o=ot,at!=null?un(e,!!a,at,!1):!!o!=!!a&&(n!=null?un(e,!!a,n,!0):un(e,!!a,a?[]:"",!1));return;case"textarea":ot=at=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Be(e,n,T,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":at=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==h&&Be(e,n,M,u,o,h)}_n(e,at,ot);return;case"option":for(var ae in a)if(at=a[ae],a.hasOwnProperty(ae)&&at!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":e.selected=!1;break;default:Be(e,n,ae,null,o,at)}for(I in o)if(at=o[I],ot=a[I],o.hasOwnProperty(I)&&at!==ot&&(at!=null||ot!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Be(e,n,I,at,o,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)at=a[te],a.hasOwnProperty(te)&&at!=null&&!o.hasOwnProperty(te)&&Be(e,n,te,null,o,at);for(et in o)if(at=o[et],ot=a[et],o.hasOwnProperty(et)&&at!==ot&&(at!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Be(e,n,et,at,o,ot)}return;default:if(su(n)){for(var ze in a)at=a[ze],a.hasOwnProperty(ze)&&at!==void 0&&!o.hasOwnProperty(ze)&&Wf(e,n,ze,void 0,o,at);for(mt in o)at=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||at===ot||at===void 0&&ot===void 0||Wf(e,n,mt,at,o,ot);return}}for(var Z in a)at=a[Z],a.hasOwnProperty(Z)&&at!=null&&!o.hasOwnProperty(Z)&&Be(e,n,Z,null,o,at);for(St in o)at=o[St],ot=a[St],!o.hasOwnProperty(St)||at===ot||at==null&&ot==null||Be(e,n,St,at,o,ot)}var qf=null,Yf=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gy(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,vy=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(xy)}:i_;function xy(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function r_(e,n){var a=n,o=0,u=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Eo(M.documentElement),a&2&&Eo(M.body),a&4)for(a=M.head,Eo(a),M=a.firstChild;M;){var T=M.nextSibling,I=M.nodeName;M[pa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(u===0){e.removeChild(h),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Uo(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function yy(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[pa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Sy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function My(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function s_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function o_(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ma(e)}var li=new Map,l_=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=X.d;X.d={f:Ey,r:by,D:Ty,C:Ay,L:Ry,m:Cy,X:Dy,S:wy,M:Uy};function Ey(){var e=ta.f(),n=Yl();return e||n}function by(e){var n=Bi(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):ta.r(e)}var cs=typeof document>"u"?null:document;function c_(e,n,a){var o=cs;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l_.has(u)||(l_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",e),rn(n),o.head.appendChild(n)))}}function Ty(e){ta.D(e),c_("dns-prefetch",e,null)}function Ay(e,n){ta.C(e,n),c_("preconnect",e,n)}function Ry(e,n,a){ta.L(e,n,a);var o=cs;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var h=u;switch(n){case"style":h=us(e);break;case"script":h=fs(e)}li.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(h))||n==="script"&&o.querySelector(To(h))||(n=o.createElement("link"),Rn(n,"link",e),rn(n),o.head.appendChild(n)))}}function Cy(e,n){ta.m(e,n);var a=cs;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=fs(e)}if(!li.has(h)&&(e=g({rel:"modulepreload",href:e},n),li.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(h)))return}o=a.createElement("link"),Rn(o,"link",e),rn(o),a.head.appendChild(o)}}}function wy(e,n,a){ta.S(e,n,a);var o=cs;if(o&&e){var u=ga(o).hoistableStyles,h=us(e);n=n||"default";var M=u.get(h);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(bo(h)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(h))&&$f(e,a);var I=M=o.createElement("link");rn(I),Rn(I,"link",e),I._p=new Promise(function(et,mt){I.onload=et,I.onerror=mt}),I.addEventListener("load",function(){T.loading|=1}),I.addEventListener("error",function(){T.loading|=2}),T.loading|=4,ic(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},u.set(h,M)}}}function Dy(e,n){ta.X(e,n);var a=cs;if(a&&e){var o=ga(a).hoistableScripts,u=fs(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=g({src:e,async:!0},n),(n=li.get(u))&&th(e,n),h=a.createElement("script"),rn(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Uy(e,n){ta.M(e,n);var a=cs;if(a&&e){var o=ga(a).hoistableScripts,u=fs(e),h=o.get(u);h||(h=a.querySelector(To(u)),h||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(u))&&th(e,n),h=a.createElement("script"),rn(h),Rn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function u_(e,n,a,o){var u=(u=st.current)?nc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=us(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=us(a.href);var h=ga(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(bo(e)))&&!h._p&&(M.instance=h,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),h||Ly(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fs(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function us(e){return'href="'+Xe(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ly(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",a),rn(n),e.head.appendChild(n))}function fs(e){return'[src="'+Xe(e)+'"]'}function To(e){return"script[async]"+e}function h_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,rn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),rn(o),Rn(o,"style",u),ic(o,a.precedence,e),n.instance=o;case"stylesheet":u=us(a.href);var h=e.querySelector(bo(u));if(h)return n.state.loading|=4,n.instance=h,rn(h),h;o=f_(a),(u=li.get(u))&&$f(o,u),h=(e.ownerDocument||e).createElement("link"),rn(h);var M=h;return M._p=new Promise(function(T,I){M.onload=T,M.onerror=I}),Rn(h,"link",o),n.state.loading|=4,ic(h,a.precedence,e),n.instance=h;case"script":return h=fs(a.src),(u=e.querySelector(To(h)))?(n.instance=u,rn(u),u):(o=a,(u=li.get(h))&&(o=g({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),rn(u),Rn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,e));return n.instance}function ic(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)h=T;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function d_(e,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[pa]||h[cn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(h):o.set(M,[h])}}return o}function p_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ny(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function Py(){}function Oy(e,n,a){if(Ao===null)throw Error(r(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=us(a.href),h=e.querySelector(bo(u));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=rc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,rn(h);return}h=e.ownerDocument||e,a=f_(a),(u=li.get(u))&&$f(a,u),h=h.createElement("link"),rn(h);var M=h;M._p=new Promise(function(T,I){M.onload=T,M.onerror=I}),Rn(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=rc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Iy(){if(Ao===null)throw Error(r(475));var e=Ao;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(By,e),sc=null,rc.call(e))}function By(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:D,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function zy(e,n,a,o,u,h,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dt(0),this.hiddenUpdates=dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function g_(e,n,a,o,u,h,M,T,I,et,mt,St){return e=new zy(e,n,a,M,T,I,et,St),n=1,h===!0&&(n|=24),h=Yn(3,null,null,n),e.current=h,h.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Fu(h),e}function __(e){return e?(e=Vr,e):Vr}function v_(e,n,a,o,u,h){u=__(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ma(e,o,n),a!==null&&(Jn(a,e,n),no(a,e,n))}function x_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){x_(e,n),(e=e.alternate)&&x_(e,n)}function y_(e){if(e.tag===13){var n=Gr(e,67108864);n!==null&&Jn(n,e,67108864),nh(e,67108864)}}var oc=!0;function Fy(e,n,a,o){var u=B.T;B.T=null;var h=X.p;try{X.p=2,ih(e,n,a,o)}finally{X.p=h,B.T=u}}function Hy(e,n,a,o){var u=B.T;B.T=null;var h=X.p;try{X.p=8,ih(e,n,a,o)}finally{X.p=h,B.T=u}}function ih(e,n,a,o){if(oc){var u=ah(o);if(u===null)Xf(e,n,o,lc,a),M_(e,o);else if(Vy(u,e,n,a,o))o.stopPropagation();else if(M_(e,o),n&4&&-1<Gy.indexOf(e)){for(;u!==null;){var h=Bi(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=It(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var I=1<<31-Ft(M);T.entanglements[1]|=I,M&=~I}Ci(h),(Pe&6)===0&&(Wl=Wt()+500,yo(0))}}break;case 13:T=Gr(h,2),T!==null&&Jn(T,h,2),Yl(),nh(h,2)}if(h=ah(o),h===null&&Xf(e,n,o,lc,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Xf(e,n,o,null,a)}}function ah(e){return e=lu(e),rh(e)}var lc=null;function rh(e){if(lc=null,e=Ii(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Xt()){case Me:return 2;case kt:return 8;case N:case b:return 32;case nt:return 268435456;default:return 32}default:return 32}}var sh=!1,Oa=null,Ia=null,Ba=null,Co=new Map,wo=new Map,za=[],Gy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Bi(n),n!==null&&y_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Vy(e,n,a,o,u){switch(n){case"focusin":return Oa=Do(Oa,e,n,a,o,u),!0;case"dragenter":return Ia=Do(Ia,e,n,a,o,u),!0;case"mouseover":return Ba=Do(Ba,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Co.set(h,Do(Co.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,wo.set(h,Do(wo.get(h)||null,e,n,a,o,u)),!0}return!1}function E_(e){var n=Ii(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Wn(e.priority,function(){if(a.tag===13){var o=Qn();o=ke(o);var u=Gr(a,o);u!==null&&Jn(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=Bi(a),n!==null&&y_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){cc(e)&&a.delete(n)}function ky(){sh=!1,Oa!==null&&cc(Oa)&&(Oa=null),Ia!==null&&cc(Ia)&&(Ia=null),Ba!==null&&cc(Ba)&&(Ba=null),Co.forEach(b_),wo.forEach(b_)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,ky)))}var fc=null;function T_(e){fc!==e&&(fc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var h=Bi(a);h!==null&&(e.splice(n,3),n-=3,rf(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(e){function n(I){return uc(I,e)}Oa!==null&&uc(Oa,e),Ia!==null&&uc(Ia,e),Ba!==null&&uc(Ba,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<za.length;a++){var o=za[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[En]||null;if(typeof h=="function")M||T_(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[En]||null)T=M.formAction;else if(rh(u)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),T_(a)}}}function oh(e){this._internalRoot=e}hc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();v_(a,o,e,n,null,null)},hc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),Yl(),n[Bn]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ce();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&E_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(r(527,A_,"19.1.0"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Xy={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{pt=dc.inject(Xy),Dt=dc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Vm,h=km,M=Xm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=g_(e,1,!1,null,null,a,o,u,h,M,T,null),e[Bn]=n.current,kf(e),new oh(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",h=Vm,M=km,T=Xm,I=null,et=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(et=a.formState)),n=g_(e,1,!0,n,a??null,o,u,h,M,T,I,et),n.context=__(null),a=n.current,o=Qn(),o=ke(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,yt(n,a),Ci(n),e[Bn]=n.current,kf(e),new hc(n)},No.version="19.1.0",No}var I_;function eS(){if(I_)return uh.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=tS(),uh.exports}var nS=eS();const iS=Z0(nS);var Po={},B_;function aS(){if(B_)return Po;B_=1,Object.defineProperty(Po,"__esModule",{value:!0}),Po.parse=f,Po.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const E=new c,A=v.length;if(A<2)return E;const y=(S==null?void 0:S.decode)||g;let _=0;do{const P=v.indexOf("=",_);if(P===-1)break;const D=v.indexOf(";",_),U=D===-1?A:D;if(P>U){_=v.lastIndexOf(";",P-1)+1;continue}const G=d(v,_,P),V=p(v,P,G),F=v.slice(G,V);if(E[F]===void 0){let j=d(v,P+1,U),L=p(v,U,j);const w=y(v.slice(j,L));E[F]=w}_=U+1}while(_<A);return E}function d(v,S,E){do{const A=v.charCodeAt(S);if(A!==32&&A!==9)return S}while(++S<E);return E}function p(v,S,E){for(;S>E;){const A=v.charCodeAt(--S);if(A!==32&&A!==9)return S+1}return E}function m(v,S,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const y=A(S);if(!t.test(y))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+y;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!x(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function x(v){return l.call(v)==="[object Date]"}return Po}aS();var z_="popstate";function rS(s={}){function t(l,c){let{pathname:f="/",search:d="",hash:p=""}=Ur(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Yh("",{pathname:f,search:d,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof c=="string"?c:Wo(c))}function r(l,c){Mi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return oS(t,i,r,s)}function Ke(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Mi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function F_(s,t){return{usr:s.state,key:s.key,idx:t}}function Yh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Ur(t):t,state:i,key:t&&t.key||r||sS()}}function Wo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ur(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function oS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function x(){d="POP";let y=g(),_=y==null?null:y-m;m=y,p&&p({action:d,location:A.location,delta:_})}function v(y,_){d="PUSH";let P=Yh(A.location,y,_);i&&i(P,y),m=g()+1;let D=F_(P,m),U=A.createHref(P);try{f.pushState(D,"",U)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(U)}c&&p&&p({action:d,location:A.location,delta:1})}function S(y,_){d="REPLACE";let P=Yh(A.location,y,_);i&&i(P,y),m=g();let D=F_(P,m),U=A.createHref(P);f.replaceState(D,"",U),c&&p&&p({action:d,location:A.location,delta:0})}function E(y){return lS(y)}let A={get action(){return d},get location(){return s(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(z_,x),p=y,()=>{l.removeEventListener(z_,x),p=null}},createHref(y){return t(l,y)},createURL:E,encodeLocation(y){let _=E(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(y){return f.go(y)}};return A}function lS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ke(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Wo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function K0(s,t,i="/"){return cS(s,t,i,!1)}function cS(s,t,i,r){let l=typeof t=="string"?Ur(t):t,c=fa(l.pathname||"/",i);if(c==null)return null;let f=Q0(s);uS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=SS(c);d=xS(f[p],m,r)}return d}function Q0(s,t=[],i=[],r=""){let l=(c,f,d)=>{let p={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Ke(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=ca([r,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(Ke(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Q0(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:_S(m,c.index),routesMeta:g})};return s.forEach((c,f)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))l(c,f);else for(let p of J0(c.path))l(c,f,p)}),t}function J0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=J0(r.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function uS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:vS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var fS=/^:[\w-]+$/,hS=3,dS=2,pS=1,mS=10,gS=-2,H_=s=>s==="*";function _S(s,t){let i=s.split("/"),r=i.length;return i.some(H_)&&(r+=gS),t&&(r+=dS),i.filter(l=>!H_(l)).reduce((l,c)=>l+(fS.test(c)?hS:c===""?pS:mS),r)}function vS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function xS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",x=Zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!x&&m&&i&&!r[r.length-1].route.index&&(x=Zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!x)return null;Object.assign(l,x.params),f.push({params:l,pathname:ca([c,x.pathname]),pathnameBase:TS(ca([c,x.pathnameBase])),route:v}),x.pathnameBase!=="/"&&(c=ca([c,x.pathnameBase]))}return f}function Zc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=yS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:x},v)=>{if(g==="*"){let E=d[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=d[v];return x&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function yS(s,t=!1,i=!0){Mi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function SS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function fa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function MS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Ur(s):s;return{pathname:i?i.startsWith("/")?i:ES(i,t):t,search:AS(r),hash:RS(l)}}function ES(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ph(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function $0(s){let t=bS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function tv(s,t,i,r=!1){let l;typeof s=="string"?l=Ur(s):(l={...s},Ke(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),Ke(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),Ke(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let x=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),x-=1;l.pathname=v.join("/")}d=x>=0?t[x]:"/"}let p=MS(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ca=s=>s.join("/").replace(/\/\/+/g,"/"),TS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),AS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,RS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function CS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var ev=["POST","PUT","PATCH","DELETE"];new Set(ev);var wS=["GET",...ev];new Set(wS);var Bs=xt.createContext(null);Bs.displayName="DataRouter";var tu=xt.createContext(null);tu.displayName="DataRouterState";var nv=xt.createContext({isTransitioning:!1});nv.displayName="ViewTransition";var DS=xt.createContext(new Map);DS.displayName="Fetchers";var US=xt.createContext(null);US.displayName="Await";var Oi=xt.createContext(null);Oi.displayName="Navigation";var Ko=xt.createContext(null);Ko.displayName="Location";var da=xt.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var zd=xt.createContext(null);zd.displayName="RouteError";function LS(s,{relative:t}={}){Ke(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=xt.useContext(Oi),{hash:l,pathname:c,search:f}=Jo(s,{relative:t}),d=c;return i!=="/"&&(d=c==="/"?i:ca([i,c])),r.createHref({pathname:d,search:f,hash:l})}function Qo(){return xt.useContext(Ko)!=null}function Lr(){return Ke(Qo(),"useLocation() may be used only in the context of a <Router> component."),xt.useContext(Ko).location}var iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function av(s){xt.useContext(Oi).static||xt.useLayoutEffect(s)}function NS(){let{isDataRoute:s}=xt.useContext(da);return s?qS():PS()}function PS(){Ke(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=xt.useContext(Bs),{basename:t,navigator:i}=xt.useContext(Oi),{matches:r}=xt.useContext(da),{pathname:l}=Lr(),c=JSON.stringify($0(r)),f=xt.useRef(!1);return av(()=>{f.current=!0}),xt.useCallback((p,m={})=>{if(Mi(f.current,iv),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=tv(p,JSON.parse(c),l,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ca([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,s])}xt.createContext(null);function Jo(s,{relative:t}={}){let{matches:i}=xt.useContext(da),{pathname:r}=Lr(),l=JSON.stringify($0(i));return xt.useMemo(()=>tv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function OS(s,t){return rv(s,t)}function rv(s,t,i,r){var P;Ke(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=xt.useContext(Oi),{matches:f}=xt.useContext(da),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",x=d&&d.route;{let D=x&&x.path||"";sv(m,!x||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let v=Lr(),S;if(t){let D=typeof t=="string"?Ur(t):t;Ke(g==="/"||((P=D.pathname)==null?void 0:P.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),S=D}else S=v;let E=S.pathname||"/",A=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let y=!c&&i&&i.matches&&i.matches.length>0?i.matches:K0(s,{pathname:A});Mi(x||y!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=HS(y&&y.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:ca([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ca([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,r);return t&&_?xt.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function IS(){let s=WS(),t=CS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=xt.createElement(xt.Fragment,null,xt.createElement("p",null,"💿 Hey developer 👋"),xt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",xt.createElement("code",{style:c},"ErrorBoundary")," or"," ",xt.createElement("code",{style:c},"errorElement")," prop on your route.")),xt.createElement(xt.Fragment,null,xt.createElement("h2",null,"Unexpected Application Error!"),xt.createElement("h3",{style:{fontStyle:"italic"}},t),i?xt.createElement("pre",{style:l},i):null,f)}var BS=xt.createElement(IS,null),zS=class extends xt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?xt.createElement(da.Provider,{value:this.props.routeContext},xt.createElement(zd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FS({routeContext:s,match:t,children:i}){let r=xt.useContext(Bs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),xt.createElement(da.Provider,{value:s},i)}function HS(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Ke(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:x}=i,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!x||x[m.route.id]===void 0);if(m.route.lazy||v){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let x,v=!1,S=null,E=null;i&&(x=c&&m.route.id?c[m.route.id]:void 0,S=m.route.errorElement||BS,f&&(d<0&&g===0?(sv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):d===g&&(v=!0,E=m.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,g+1)),y=()=>{let _;return x?_=S:v?_=E:m.route.Component?_=xt.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,xt.createElement(FS,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?xt.createElement(zS,{location:i.location,revalidation:i.revalidation,component:S,error:x,children:y(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):y()},null)}function Fd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GS(s){let t=xt.useContext(Bs);return Ke(t,Fd(s)),t}function VS(s){let t=xt.useContext(tu);return Ke(t,Fd(s)),t}function kS(s){let t=xt.useContext(da);return Ke(t,Fd(s)),t}function Hd(s){let t=kS(s),i=t.matches[t.matches.length-1];return Ke(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function XS(){return Hd("useRouteId")}function WS(){var r;let s=xt.useContext(zd),t=VS("useRouteError"),i=Hd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function qS(){let{router:s}=GS("useNavigate"),t=Hd("useNavigate"),i=xt.useRef(!1);return av(()=>{i.current=!0}),xt.useCallback(async(l,c={})=>{Mi(i.current,iv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var G_={};function sv(s,t,i){!t&&!G_[s]&&(G_[s]=!0,Mi(!1,i))}xt.memo(YS);function YS({routes:s,future:t,state:i}){return rv(s,void 0,i,t)}function jh(s){Ke(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jS({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Ke(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=xt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Ur(i));let{pathname:p="/",search:m="",hash:g="",state:x=null,key:v="default"}=i,S=xt.useMemo(()=>{let E=fa(p,f);return E==null?null:{location:{pathname:E,search:m,hash:g,state:x,key:v},navigationType:r}},[f,p,m,g,x,v,r]);return Mi(S!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:xt.createElement(Oi.Provider,{value:d},xt.createElement(Ko.Provider,{children:t,value:S}))}function ZS({children:s,location:t}){return OS(Zh(s),t)}function Zh(s,t=[]){let i=[];return xt.Children.forEach(s,(r,l)=>{if(!xt.isValidElement(r))return;let c=[...t,l];if(r.type===xt.Fragment){i.push.apply(i,Zh(r.props.children,c));return}Ke(r.type===jh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ke(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Zh(r.props.children,c)),i.push(f)}),i}var Fc="get",Hc="application/x-www-form-urlencoded";function eu(s){return s!=null&&typeof s.tagName=="string"}function KS(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function QS(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function JS(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function $S(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function tM(s,t){return s.button===0&&(!t||t==="_self")&&!$S(s)}var pc=null;function eM(){if(pc===null)try{new FormData(document.createElement("form"),0),pc=!1}catch{pc=!0}return pc}var nM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mh(s){return s!=null&&!nM.has(s)?(Mi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):s}function iM(s,t){let i,r,l,c,f;if(QS(s)){let d=s.getAttribute("action");r=d?fa(d,t):null,i=s.getAttribute("method")||Fc,l=mh(s.getAttribute("enctype"))||Hc,c=new FormData(s)}else if(KS(s)||JS(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(r=p?fa(p,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Fc,l=mh(s.getAttribute("formenctype"))||mh(d.getAttribute("enctype"))||Hc,c=new FormData(d,s),!eM()){let{name:m,type:g,value:x}=s;if(g==="image"){let v=m?`${m}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else m&&c.append(m,x)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Fc,r=null,l=Hc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Gd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function aM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function sM(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await aM(c,i);return f.links?f.links():[]}return[]}));return uM(r.flat(1).filter(rM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function V_(s,t,i,r,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?t.filter((p,m)=>{var x;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((x=i[0])==null?void 0:x.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oM(s,t,{includeHydrateFallback:i}={}){return lM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function lM(s){return[...new Set(s)]}function cM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function uM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(cM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fM=new Set([100,101,204,205]);function hM(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&fa(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function ov(){let s=xt.useContext(Bs);return Gd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function dM(){let s=xt.useContext(tu);return Gd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Vd=xt.createContext(void 0);Vd.displayName="FrameworkContext";function lv(){let s=xt.useContext(Vd);return Gd(s,"You must render this element inside a <HydratedRouter> element"),s}function pM(s,t){let i=xt.useContext(Vd),[r,l]=xt.useState(!1),[c,f]=xt.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:x}=t,v=xt.useRef(null);xt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(P=>{f(P.isIntersecting)})},y=new IntersectionObserver(A,{threshold:.5});return v.current&&y.observe(v.current),()=>{y.disconnect()}}},[s]),xt.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Oo(d,S),onBlur:Oo(p,E),onMouseEnter:Oo(m,S),onMouseLeave:Oo(g,E),onTouchStart:Oo(x,S)}]:[!1,v,{}]}function Oo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function mM({page:s,...t}){let{router:i}=ov(),r=xt.useMemo(()=>K0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?xt.createElement(_M,{page:s,matches:r,...t}):null}function gM(s){let{manifest:t,routeModules:i}=lv(),[r,l]=xt.useState([]);return xt.useEffect(()=>{let c=!1;return sM(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function _M({page:s,matches:t,...i}){let r=Lr(),{manifest:l,routeModules:c}=lv(),{basename:f}=ov(),{loaderData:d,matches:p}=dM(),m=xt.useMemo(()=>V_(s,t,p,l,r,"data"),[s,t,p,l,r]),g=xt.useMemo(()=>V_(s,t,p,l,r,"assets"),[s,t,p,l,r]),x=xt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{var D;let P=l.routes[_.route.id];!P||!P.hasLoader||(!m.some(U=>U.route.id===_.route.id)&&_.route.id in d&&((D=c[_.route.id])!=null&&D.shouldRevalidate)||P.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let y=hM(s,f);return A&&E.size>0&&y.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,d,r,l,m,t,s,c]),v=xt.useMemo(()=>oM(g,l),[g,l]),S=gM(g);return xt.createElement(xt.Fragment,null,x.map(E=>xt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>xt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:A})=>xt.createElement("link",{key:E,...A})))}function vM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cv&&(window.__reactRouterVersion="7.6.0")}catch{}function xM({basename:s,children:t,window:i}){let r=xt.useRef();r.current==null&&(r.current=rS({window:i,v5Compat:!0}));let l=r.current,[c,f]=xt.useState({action:l.action,location:l.location}),d=xt.useCallback(p=>{xt.startTransition(()=>f(p))},[f]);return xt.useLayoutEffect(()=>l.listen(d),[l,d]),xt.createElement(jS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nu=xt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:x,...v},S){let{basename:E}=xt.useContext(Oi),A=typeof m=="string"&&uv.test(m),y,_=!1;if(typeof m=="string"&&A&&(y=m,cv))try{let L=new URL(window.location.href),w=m.startsWith("//")?new URL(L.protocol+m):new URL(m),k=fa(w.pathname,E);w.origin===L.origin&&k!=null?m=k+w.search+w.hash:_=!0}catch{Mi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let P=LS(m,{relative:l}),[D,U,G]=pM(r,v),V=EM(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:x});function F(L){t&&t(L),L.defaultPrevented||V(L)}let j=xt.createElement("a",{...v,...G,href:y||P,onClick:_||c?t:F,ref:vM(S,U),target:p,"data-discover":!A&&i==="render"?"true":void 0});return D&&!A?xt.createElement(xt.Fragment,null,j,xt.createElement(mM,{page:P})):j});nu.displayName="Link";var yM=xt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let x=Jo(f,{relative:m.relative}),v=Lr(),S=xt.useContext(tu),{navigator:E,basename:A}=xt.useContext(Oi),y=S!=null&&CM(x)&&d===!0,_=E.encodeLocation?E.encodeLocation(x).pathname:x.pathname,P=v.pathname,D=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(P=P.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&A&&(D=fa(D,A)||D);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=P===_||!l&&P.startsWith(_)&&P.charAt(U)==="/",V=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),F={isActive:G,isPending:V,isTransitioning:y},j=G?t:void 0,L;typeof r=="function"?L=r(F):L=[r,G?"active":null,V?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let w=typeof c=="function"?c(F):c;return xt.createElement(nu,{...m,"aria-current":j,className:L,ref:g,style:w,to:f,viewTransition:d},typeof p=="function"?p(F):p)});yM.displayName="NavLink";var SM=xt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Fc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:x,...v},S)=>{let E=AM(),A=RM(d,{relative:m}),y=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&uv.test(d),P=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let U=D.nativeEvent.submitter,G=(U==null?void 0:U.getAttribute("formmethod"))||f;E(U||D.currentTarget,{fetcherKey:t,method:G,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:x})};return xt.createElement("form",{ref:S,method:y,action:A,onSubmit:r?p:P,...v,"data-discover":!_&&s==="render"?"true":void 0})});SM.displayName="Form";function MM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fv(s){let t=xt.useContext(Bs);return Ke(t,MM(s)),t}function EM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=NS(),p=Lr(),m=Jo(s,{relative:c});return xt.useCallback(g=>{if(tM(g,t)){g.preventDefault();let x=i!==void 0?i:Wo(p)===Wo(m);d(s,{replace:x,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,i,r,t,s,l,c,f])}var bM=0,TM=()=>`__${String(++bM)}__`;function AM(){let{router:s}=fv("useSubmit"),{basename:t}=xt.useContext(Oi),i=XS();return xt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=iM(r,t);if(l.navigate===!1){let g=l.fetcherKey||TM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function RM(s,{relative:t}={}){let{basename:i}=xt.useContext(Oi),r=xt.useContext(da);Ke(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:t})},f=Lr();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(x=>x).forEach(x=>d.append("index",x));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ca([i,c.pathname])),Wo(c)}function CM(s,t={}){let i=xt.useContext(nv);Ke(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=fv("useViewTransitionState"),l=Jo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let c=fa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=fa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Zc(l.pathname,f)!=null||Zc(l.pathname,c)!=null}[...fM];const k_=[{id:"quantum-playground",title:"Atom",description:"Explore electron clouds and photon interactions",color:"#1a73e8",image:"⚛️",path:"/quantum-playground",available:!0},{id:"gravity-wells",title:"Placeholder",description:"Placeholder",color:"#ea4335",image:"🪐",path:"/gravity-wells",available:!1},{id:"fluid-dynamics",title:"Placeholder",description:"Placeholder",color:"#34a853",image:"💧",path:"/fluid-dynamics",available:!1},{id:"wave-mechanics",title:"Placeholder",description:"Placeholder",color:"#fbbc04",image:"🌊",path:"/wave-mechanics",available:!1},{id:"particle-collider",title:"Placeholder",description:"Placeholder",color:"#9c27b0",image:"💥",path:"/particle-collider",available:!1},{id:"electric-fields",title:"Placeholder",description:"Placeholder",color:"#00bcd4",image:"⚡",path:"/electric-fields",available:!1}];function wM({simulation:s,isActive:t,onMouseEnter:i,onMouseLeave:r,themeColors:l}){const{id:c,title:f,description:d,color:p,image:m,path:g,available:x}=s,v=p;return se.jsx(nu,{to:x?g:"#",className:"block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl",style:{opacity:x?1:.7,cursor:x?"pointer":"not-allowed",transform:t?"translateY(-5px)":"translateY(0)"},onMouseEnter:()=>i(c),onMouseLeave:r,children:se.jsxs("div",{className:"glass card-content transition-transform duration-500 ease-out h-full p-6 flex flex-col",style:{borderLeft:`3px solid ${v}`,boxShadow:t?`0 0 20px ${v}80`:"none",background:l.card},children:[se.jsx("div",{className:"emoji-icon text-5xl mb-4 transition-all duration-300",style:{filter:t?`drop-shadow(0 0 10px ${v})`:"none",transform:t?"scale(1.05)":"scale(1)",transformOrigin:"center"},children:m}),se.jsx("h2",{className:"text-2xl font-bold mb-2 transition-all duration-300",style:{color:v,transform:t?"scale(1.05)":"scale(1)",transformOrigin:"left"},children:f}),se.jsx("p",{style:{color:l.textSecondary},className:"mb-6 flex-grow",children:d}),se.jsxs("div",{className:"mt-auto",children:[se.jsx("div",{className:`text-sm font-medium ${x?"text-green-400":"text-amber-400"}`,children:x?"Available Now":"Coming Soon"}),se.jsx("div",{className:"progress-bar h-1 mt-3 rounded-full transition-all duration-500",style:{background:`linear-gradient(to right, ${v}80, ${v})`,opacity:t?1:0,transform:t?"scaleX(1)":"scaleX(0)"}})]})]})})}function DM(){const[s,t]=xt.useState(null),[i,r]=xt.useState("gray"),l=p=>{t(p)},c=()=>{t(null)},f={dark:{bg:"rgba(20, 40, 45, 1)",sidebar:"rgba(50, 90, 100, 0.3)",card:"rgba(50, 90, 100, 0.8)",accent:"rgb(0, 160, 170)",accentHover:"rgb(0, 190, 210)",text:"rgba(230, 240, 245, 0.9)",textSecondary:"rgba(180, 200, 210, 0.7)",gradient:"from-[rgb(0,160,170)] to-[rgb(0,190,210)]"},light:{bg:"rgba(245, 240, 230, 1)",sidebar:"rgba(230, 220, 200, 0.7)",card:"rgba(235, 225, 210, 0.9)",accent:"rgb(210, 120, 50)",accentHover:"rgb(230, 150, 80)",text:"rgba(70, 60, 50, 0.9)",textSecondary:"rgba(100, 90, 80, 0.7)",gradient:"from-[rgb(230,150,80)] to-[rgb(210,120,50)]"},blue:{bg:"#0f172a",sidebar:"rgba(30, 41, 59, 0.8)",card:"rgba(30, 41, 59, 0.8)",accent:"rgb(59, 130, 246)",accentHover:"rgb(96, 165, 250)",text:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(203, 213, 225, 0.7)",gradient:"from-blue-400 via-purple-500 to-pink-500"},gray:{bg:"#1a1a1a",sidebar:"rgba(40, 40, 40, 0.8)",card:"rgba(50, 50, 50, 0.8)",accent:"rgb(220, 40, 40)",accentHover:"rgb(240, 70, 70)",text:"rgba(220, 220, 220, 0.9)",textSecondary:"rgba(180, 180, 180, 0.7)",gradient:"from-[rgb(220,40,40)] to-[rgb(240,70,70)]"}},d=f[i];return document.documentElement.style.setProperty("--accent-color",d.accent),document.documentElement.style.setProperty("--accent-color-hover",d.accentHover),document.documentElement.style.setProperty("--text-primary",d.text),document.documentElement.style.setProperty("--text-secondary",d.textSecondary),document.documentElement.style.setProperty("--bg-card",d.card),se.jsxs("div",{className:"min-h-screen grid grid-cols-12",style:{backgroundColor:d.bg,color:d.text},children:[se.jsxs("div",{className:"col-span-2 glass fixed h-full p-4 flex flex-col",style:{background:d.sidebar},children:[se.jsx("div",{className:"text-xl font-bold mb-8",style:{color:d.accent},children:"GigaLab"}),se.jsx("nav",{className:"flex flex-col space-y-4",children:k_.map(p=>se.jsxs(nu,{to:p.available?p.path:"#",className:`p-2 rounded transition-colors ${p.available?"hover:bg-opacity-20":"opacity-50 cursor-not-allowed"}`,style:{color:d.text,backgroundColor:p.available&&i===s?`${d.accent}20`:"transparent"},children:[se.jsx("span",{className:"mr-2",children:p.image}),p.title]},p.id))}),se.jsxs("div",{className:"mt-8 mb-4",children:[se.jsx("p",{className:"text-sm mb-2",style:{color:d.textSecondary},children:"Select Theme"}),se.jsxs("div",{className:"flex space-x-2",children:[se.jsx("button",{onClick:()=>r("dark"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="dark"?"ring-2 scale-110":""}`,style:{background:"rgba(20, 40, 45, 1)",ringColor:f.dark.accent},title:"Dark Theme",children:i==="dark"&&se.jsx("span",{className:"text-xs",children:"✓"})}),se.jsx("button",{onClick:()=>r("light"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="light"?"ring-2 scale-110":""}`,style:{background:"rgba(245, 240, 230, 1)",ringColor:f.light.accent},title:"Light Theme",children:i==="light"&&se.jsx("span",{className:"text-xs text-gray-800",children:"✓"})}),se.jsx("button",{onClick:()=>r("blue"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="blue"?"ring-2 scale-110":""}`,style:{background:"#0f172a",ringColor:f.blue.accent},title:"Blue Theme",children:i==="blue"&&se.jsx("span",{className:"text-xs",children:"✓"})}),se.jsx("button",{onClick:()=>r("gray"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="gray"?"ring-2 scale-110":""}`,style:{background:"#1a1a1a",ringColor:f.gray.accent},title:"Gray Theme",children:i==="gray"&&se.jsx("span",{className:"text-xs",children:"✓"})})]})]}),se.jsx("div",{className:"mt-auto text-sm",children:se.jsx("button",{className:"w-full p-2 rounded border transition-all hover:bg-opacity-90",style:{backgroundColor:d.accent,borderColor:d.accent,color:i==="light"?"#fff":d.text},children:"Contact"})})]}),se.jsxs("div",{className:"col-span-10 col-start-3 px-8 py-16 max-w-7xl mx-auto",children:[se.jsxs("header",{className:"text-center mb-16",children:[se.jsx("h1",{className:`text-6xl font-bold mb-4 bg-gradient-to-r ${d.gradient} text-transparent bg-clip-text px-4 py-4`,children:"GigaLab"}),se.jsx("p",{className:"text-xl",style:{color:d.text},children:"Interactive physics simulations (and other stuff)"})]}),se.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto",children:k_.map(p=>se.jsx(wM,{simulation:p,isActive:s===p.id,onMouseEnter:l,onMouseLeave:c,themeColors:d},p.id))})]}),se.jsx("div",{className:"bg-animate"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="176",ws={ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,X_=1,LM=2,hv=1,NM=2,sa=3,Ka=0,Xn=1,oa=2,ja=0,Ds=1,W_=2,q_=3,Y_=4,PM=5,br=100,OM=101,IM=102,BM=103,zM=104,FM=200,HM=201,GM=202,VM=203,Kh=204,Qh=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,Jh=0,$h=1,td=2,Ls=3,ed=4,nd=5,id=6,ad=7,dv=0,JM=1,$M=2,Za=0,tE=1,eE=2,nE=3,iE=4,aE=5,rE=6,sE=7,pv=300,Ns=301,Ps=302,rd=303,sd=304,iu=306,od=1e3,Ar=1001,ld=1002,ei=1003,oE=1004,mc=1005,Di=1006,gh=1007,Rr=1008,Ni=1009,mv=1010,gv=1011,qo=1012,Xd=1013,Cr=1014,Ui=1015,$o=1016,Wd=1017,qd=1018,Yo=1020,_v=35902,vv=1021,xv=1022,yi=1023,jo=1026,Zo=1027,Yd=1028,jd=1029,yv=1030,Zd=1031,Kd=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,xd=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,bd=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,Wc=36492,Dd=36494,Ud=36495,Sv=36283,Ld=36284,Nd=36285,Pd=36286,lE=3200,cE=3201,Mv=0,uE=1,Ya="",ui="srgb",Os="srgb-linear",Kc="linear",Fe="srgb",hs=7680,j_=519,fE=512,hE=513,dE=514,Ev=515,pE=516,mE=517,gE=518,_E=519,Z_=35044,K_="300 es",la=2e3,Qc=2001;class Nr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,Od=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[t&255]+Ln[t>>8&255]+"-"+Ln[t>>16&15|64]+Ln[t>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function ye(s,t,i){return Math.max(t,Math.min(i,s))}function vE(s,t){return(s%t+t)%t}function _h(s,t,i){return(1-i)*s+i*t}function Io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xE={DEG2RAD:qc};class he{constructor(t=0,i=0){he.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(t,i,r,l,c,f,d,p,m){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m)}set(t,i,r,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],x=r[7],v=r[2],S=r[5],E=r[8],A=l[0],y=l[3],_=l[6],P=l[1],D=l[4],U=l[7],G=l[2],V=l[5],F=l[8];return c[0]=f*A+d*P+p*G,c[3]=f*y+d*D+p*V,c[6]=f*_+d*U+p*F,c[1]=m*A+g*P+x*G,c[4]=m*y+g*D+x*V,c[7]=m*_+g*U+x*F,c[2]=v*A+S*P+E*G,c[5]=v*y+S*D+E*V,c[8]=v*_+S*U+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*c*g+r*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=g*f-d*m,v=d*p-g*c,S=m*c-f*p,E=i*x+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=x*A,t[1]=(l*m-g*r)*A,t[2]=(d*r-l*f)*A,t[3]=v*A,t[4]=(g*i-l*p)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(r*p-m*i)*A,t[8]=(f*i-r*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new fe;function bv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function yE(){const s=Jc("canvas");return s.style.display="block",s}const Q_={};function Yc(s){s in Q_||(Q_[s]=!0,console.warn(s))}function SE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function ME(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function EE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Fe&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Fe&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:Fe,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ue=bE();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ds;class TE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ds===void 0&&(ds=Jc("canvas")),ds.width=t.width,ds.height=t.height;const l=ds.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ds}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ua(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AE=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(xh(l[f].image)):c.push(xh(l[f]))}else c=xh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function xh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class In extends Nr{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=Ar,l=Ar,c=Di,f=Rr,d=yi,p=Ni,m=In.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=tl(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case od:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case od:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=pv;In.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,r=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],x=p[8],v=p[1],S=p[5],E=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(x-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+v)<.1&&Math.abs(x+A)<.1&&Math.abs(E+y)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,U=(S+1)/2,G=(_+1)/2,V=(g+v)/4,F=(x+A)/4,j=(E+y)/4;return D>U&&D>G?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=V/r,c=F/r):U>G?U<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),r=V/l,c=j/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=F/c,l=j/c),this.set(r,l,c,i),this}let P=Math.sqrt((y-E)*(y-E)+(x-A)*(x-A)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(x-A)/P,this.z=(v-g)/P,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this.w=ye(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this.w=ye(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Nr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new In(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wr extends CE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tv extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],x=r[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],A=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x;return}if(d===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=A;return}if(x!==A||p!==v||m!==S||g!==E){let y=1-d;const _=p*v+m*S+g*E+x*A,P=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const G=Math.sqrt(D),V=Math.atan2(G,_*P);y=Math.sin(y*V)/G,d=Math.sin(d*V)/G}const U=d*P;if(p=p*y+v*U,m=m*y+S*U,g=g*y+E*U,x=x*y+A*U,y===1-d){const G=1/Math.sqrt(p*p+m*m+g*g+x*x);p*=G,m*=G,g*=G,x*=G}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,c,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],x=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=d*E+g*x+p*S-m*v,t[i+1]=p*E+g*v+m*x-d*S,t[i+2]=m*E+g*S+d*v-p*x,t[i+3]=g*E-d*x-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),x=d(c/2),v=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*x+m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x-v*S*E;break;case"YXZ":this._x=v*g*x+m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x+v*S*E;break;case"ZXY":this._x=v*g*x-m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x-v*S*E;break;case"ZYX":this._x=v*g*x-m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x+v*S*E;break;case"YZX":this._x=v*g*x+m*S*E,this._y=m*S*x+v*g*E,this._z=m*g*E-v*S*x,this._w=m*g*x-v*S*E;break;case"XZY":this._x=v*g*x-m*S*E,this._y=m*S*x-v*g*E,this._z=m*g*E+v*S*x,this._w=m*g*x+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],x=i[10],v=r+d+x;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>d&&r>x){const S=2*Math.sqrt(1+r-d-x);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(d>x){const S=2*Math.sqrt(1+d-r-x);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+x-r-d);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-r*m,this._z=c*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),x=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*x+this._w*v,this._x=r*x+this._x*v,this._y=l*x+this._y*v,this._z=c*x+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(t=0,i=0,r=0){$.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(t0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-c*l),x=2*(c*r-f*i);return this.x=i+p*m+f*x-d*g,this.y=r+p*g+d*m-c*x,this.z=l+p*x+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ye(this.x,t.x,i.x),this.y=ye(this.y,t.y,i.y),this.z=ye(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ye(this.x,t,i),this.y=ye(this.y,t,i),this.z=ye(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ye(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return yh.copy(this).projectOnVector(t),this.sub(yh)}reflect(t){return this.sub(yh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(ye(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yh=new $,t0=new Dr;class Pr{constructor(t=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bo),_c.subVectors(this.max,Bo),ps.subVectors(t.a,Bo),ms.subVectors(t.b,Bo),gs.subVectors(t.c,Bo),Ha.subVectors(ms,ps),Ga.subVectors(gs,ms),_r.subVectors(ps,gs);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_r.z,_r.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_r.z,0,-_r.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_r.y,_r.x,0];return!Sh(i,ps,ms,gs,_c)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ps,ms,gs,_c))?!1:(vc.crossVectors(Ha,Ga),i=[vc.x,vc.y,vc.z],Sh(i,ps,ms,gs,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ea=[new $,new $,new $,new $,new $,new $,new $,new $],gi=new $,gc=new Pr,ps=new $,ms=new $,gs=new $,Ha=new $,Ga=new $,_r=new $,Bo=new $,_c=new $,vc=new $,vr=new $;function Sh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){vr.fromArray(s,c);const d=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),p=t.dot(vr),m=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const DE=new Pr,zo=new $,Mh=new $;class el{constructor(t=new $,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):DE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zo.subVectors(t,this.center);const i=zo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(zo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zo.copy(t.center).add(Mh)),this.expandByPoint(zo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const na=new $,Eh=new $,xc=new $,Va=new $,bh=new $,yc=new $,Th=new $;class Av{constructor(t=new $,i=new $(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,na)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=na.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(na.copy(this.origin).addScaledVector(this.direction,i),na.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Eh.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(xc),d=Va.dot(this.direction),p=-Va.dot(xc),m=Va.lengthSq(),g=Math.abs(1-f*f);let x,v,S,E;if(g>0)if(x=f*p-d,v=f*d-p,E=c*g,x>=0)if(v>=-E)if(v<=E){const A=1/g;x*=A,v*=A,S=x*(x+f*v+2*d)+v*(f*x+v+2*p)+m}else v=c,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v=-c,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;else v<=-E?(x=Math.max(0,-(-f*c+d)),v=x>0?-c:Math.min(Math.max(-c,-p),c),S=-x*x+v*(v+2*p)+m):v<=E?(x=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(x=Math.max(0,-(f*c+d)),v=x>0?c:Math.min(Math.max(-c,-p),c),S=-x*x+v*(v+2*p)+m);else v=f>0?-c:c,x=Math.max(0,-(f*v+d)),S=-x*x+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(Eh).addScaledVector(xc,v),S}intersectSphere(t,i){na.subVectors(t.center,this.origin);const r=na.dot(this.direction),l=na.dot(na)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),x>=0?(d=(t.min.z-v.z)*x,p=(t.max.z-v.z)*x):(d=(t.max.z-v.z)*x,p=(t.min.z-v.z)*x),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,na)!==null}intersectTriangle(t,i,r,l,c){bh.subVectors(i,t),yc.subVectors(r,t),Th.crossVectors(bh,yc);let f=this.direction.dot(Th),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Va.subVectors(this.origin,t);const p=d*this.direction.dot(yc.crossVectors(Va,yc));if(p<0)return null;const m=d*this.direction.dot(bh.cross(Va));if(m<0||p+m>f)return null;const g=-d*Va.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,f,d,p,m,g,x,v,S,E,A,y){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,d,p,m,g,x,v,S,E,A,y)}set(t,i,r,l,c,f,d,p,m,g,x,v,S,E,A,y){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=x,_[14]=v,_[3]=S,_[7]=E,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/_s.setFromMatrixColumn(t,0).length(),c=1/_s.setFromMatrixColumn(t,1).length(),f=1/_s.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*x,E=d*g,A=d*x;i[0]=p*g,i[4]=-p*x,i[8]=m,i[1]=S+E*m,i[5]=v-A*m,i[9]=-d*p,i[2]=A-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*x,E=m*g,A=m*x;i[0]=v+A*d,i[4]=E*d-S,i[8]=f*m,i[1]=f*x,i[5]=f*g,i[9]=-d,i[2]=S*d-E,i[6]=A+v*d,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*x,E=m*g,A=m*x;i[0]=v-A*d,i[4]=-f*x,i[8]=E+S*d,i[1]=S+E*d,i[5]=f*g,i[9]=A-v*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*x,E=d*g,A=d*x;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+A,i[1]=p*x,i[5]=A*m+v,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=d*p,A=d*m;i[0]=p*g,i[4]=A-v*x,i[8]=E*x+S,i[1]=x,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=S*x+E,i[10]=v-A*x}else if(t.order==="XZY"){const v=f*p,S=f*m,E=d*p,A=d*m;i[0]=p*g,i[4]=-x,i[8]=m*g,i[1]=v*x+A,i[5]=f*g,i[9]=S*x-E,i[2]=E*x-S,i[6]=d*g,i[10]=A*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UE,t,LE)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ka.crossVectors(r,$n),ka.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ka.crossVectors(r,$n)),ka.normalize(),Sc.crossVectors($n,ka),l[0]=ka.x,l[4]=Sc.x,l[8]=$n.x,l[1]=ka.y,l[5]=Sc.y,l[9]=$n.y,l[2]=ka.z,l[6]=Sc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],x=r[5],v=r[9],S=r[13],E=r[2],A=r[6],y=r[10],_=r[14],P=r[3],D=r[7],U=r[11],G=r[15],V=l[0],F=l[4],j=l[8],L=l[12],w=l[1],k=l[5],ht=l[9],ft=l[13],Mt=l[2],gt=l[6],B=l[10],X=l[14],O=l[3],rt=l[7],C=l[11],z=l[15];return c[0]=f*V+d*w+p*Mt+m*O,c[4]=f*F+d*k+p*gt+m*rt,c[8]=f*j+d*ht+p*B+m*C,c[12]=f*L+d*ft+p*X+m*z,c[1]=g*V+x*w+v*Mt+S*O,c[5]=g*F+x*k+v*gt+S*rt,c[9]=g*j+x*ht+v*B+S*C,c[13]=g*L+x*ft+v*X+S*z,c[2]=E*V+A*w+y*Mt+_*O,c[6]=E*F+A*k+y*gt+_*rt,c[10]=E*j+A*ht+y*B+_*C,c[14]=E*L+A*ft+y*X+_*z,c[3]=P*V+D*w+U*Mt+G*O,c[7]=P*F+D*k+U*gt+G*rt,c[11]=P*j+D*ht+U*B+G*C,c[15]=P*L+D*ft+U*X+G*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],x=t[6],v=t[10],S=t[14],E=t[3],A=t[7],y=t[11],_=t[15];return E*(+c*p*x-l*m*x-c*d*v+r*m*v+l*d*S-r*p*S)+A*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+y*(+i*m*x-i*d*S-c*f*x+r*f*S+c*d*g-r*m*g)+_*(-l*d*g-i*p*x+i*d*v+l*f*x-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],x=t[9],v=t[10],S=t[11],E=t[12],A=t[13],y=t[14],_=t[15],P=x*y*m-A*v*m+A*p*S-d*y*S-x*p*_+d*v*_,D=E*v*m-g*y*m-E*p*S+f*y*S+g*p*_-f*v*_,U=g*A*m-E*x*m+E*d*S-f*A*S-g*d*_+f*x*_,G=E*x*p-g*A*p-E*d*v+f*A*v+g*d*y-f*x*y,V=i*P+r*D+l*U+c*G;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return t[0]=P*F,t[1]=(A*v*c-x*y*c-A*l*S+r*y*S+x*l*_-r*v*_)*F,t[2]=(d*y*c-A*p*c+A*l*m-r*y*m-d*l*_+r*p*_)*F,t[3]=(x*p*c-d*v*c-x*l*m+r*v*m+d*l*S-r*p*S)*F,t[4]=D*F,t[5]=(g*y*c-E*v*c+E*l*S-i*y*S-g*l*_+i*v*_)*F,t[6]=(E*p*c-f*y*c-E*l*m+i*y*m+f*l*_-i*p*_)*F,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*F,t[8]=U*F,t[9]=(E*x*c-g*A*c-E*r*S+i*A*S+g*r*_-i*x*_)*F,t[10]=(f*A*c-E*d*c+E*r*m-i*A*m-f*r*_+i*d*_)*F,t[11]=(g*d*c-f*x*c-g*r*m+i*x*m+f*r*S-i*d*S)*F,t[12]=G*F,t[13]=(g*A*l-E*x*l+E*r*v-i*A*v-g*r*y+i*x*y)*F,t[14]=(E*d*l-f*A*l-E*r*p+i*A*p+f*r*y-i*d*y)*F,t[15]=(f*x*l-g*d*l+g*r*p-i*x*p-f*r*v+i*d*v)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,x=d+d,v=c*m,S=c*g,E=c*x,A=f*g,y=f*x,_=d*x,P=p*m,D=p*g,U=p*x,G=r.x,V=r.y,F=r.z;return l[0]=(1-(A+_))*G,l[1]=(S+U)*G,l[2]=(E-D)*G,l[3]=0,l[4]=(S-U)*V,l[5]=(1-(v+_))*V,l[6]=(y+P)*V,l[7]=0,l[8]=(E+D)*F,l[9]=(y-P)*F,l[10]=(1-(v+A))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=_s.set(l[0],l[1],l[2]).length();const f=_s.set(l[4],l[5],l[6]).length(),d=_s.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const m=1/c,g=1/f,x=1/d;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=d,this}makePerspective(t,i,r,l,c,f,d=la){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),x=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(d===la)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(d===Qc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,d=la){const p=this.elements,m=1/(i-t),g=1/(r-l),x=1/(f-c),v=(i+t)*m,S=(r+l)*g;let E,A;if(d===la)E=(f+c)*x,A=-2*x;else if(d===Qc)E=c*x,A=-1*x;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const _s=new $,_i=new qe,UE=new $(0,0,0),LE=new $(1,1,1),ka=new $,Sc=new $,$n=new $,e0=new qe,n0=new Dr;class Pi{constructor(t=0,i=0,r=0,l=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],x=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-ye(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const i0=new $,vs=new Dr,ia=new qe,Mc=new $,Fo=new $,PE=new $,OE=new Dr,a0=new $(1,0,0),r0=new $(0,1,0),s0=new $(0,0,1),o0={type:"added"},IE={type:"removed"},xs={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Mn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new $,i=new Pi,r=new Dr,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new fe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.multiply(vs),this}rotateOnWorldAxis(t,i){return vs.setFromAxisAngle(t,i),this.quaternion.premultiply(vs),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,i){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ia.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mc.copy(t):Mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ia.lookAt(Fo,Mc,this.up):ia.lookAt(Mc,Fo,this.up),this.quaternion.setFromRotationMatrix(ia),l&&(ia.extractRotation(l.matrixWorld),vs.setFromRotationMatrix(ia),this.quaternion.premultiply(vs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IE),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ia.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ia.multiply(t.parent.matrixWorld)),t.applyMatrix4(ia),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,PE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,OE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const x=p[m];c(t.shapes,x)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),x=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new $(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new $,aa=new $,Rh=new $,ra=new $,ys=new $,Ss=new $,l0=new $,Ch=new $,wh=new $,Dh=new $,Uh=new tn,Lh=new tn,Nh=new tn;class xi{constructor(t=new $,i=new $,r=new $){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){vi.subVectors(l,i),aa.subVectors(r,i),Rh.subVectors(t,i);const f=vi.dot(vi),d=vi.dot(aa),p=vi.dot(Rh),m=aa.dot(aa),g=aa.dot(Rh),x=f*m-d*d;if(x===0)return c.set(0,0,0),null;const v=1/x,S=(m*p-d*g)*v,E=(f*g-d*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,r,l,c,f,d,p){return this.getBarycoord(t,i,r,l,ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,ra.x),p.addScaledVector(f,ra.y),p.addScaledVector(d,ra.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,r),Nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Lh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),aa.subVectors(t,i),vi.cross(aa).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),aa.subVectors(this.a,this.b),vi.cross(aa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return xi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return xi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return xi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,d;ys.subVectors(l,r),Ss.subVectors(c,r),Ch.subVectors(t,r);const p=ys.dot(Ch),m=Ss.dot(Ch);if(p<=0&&m<=0)return i.copy(r);wh.subVectors(t,l);const g=ys.dot(wh),x=Ss.dot(wh);if(g>=0&&x<=g)return i.copy(l);const v=p*x-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ys,f);Dh.subVectors(t,c);const S=ys.dot(Dh),E=Ss.dot(Dh);if(E>=0&&S<=E)return i.copy(c);const A=S*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(Ss,d);const y=g*E-S*x;if(y<=0&&x-g>=0&&S-E>=0)return l0.subVectors(c,l),d=(x-g)/(x-g+(S-E)),i.copy(l).addScaledVector(l0,d);const _=1/(y+A+v);return f=A*_,d=v*_,i.copy(r).addScaledVector(ys,f).addScaledVector(Ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ph(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Se{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ue.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ue.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ue.workingColorSpace){if(t=vE(t,1),i=ye(i,0,1),r=ye(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Ph(f,c,t+1/3),this.g=Ph(f,c,t),this.b=Ph(f,c,t-1/3)}return Ue.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=Cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ue.fromWorkingColorSpace(Nn.copy(this),t),Math.round(ye(Nn.r*255,0,255))*65536+Math.round(ye(Nn.g*255,0,255))*256+Math.round(ye(Nn.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ue.workingColorSpace){Ue.fromWorkingColorSpace(Nn.copy(this),i);const r=Nn.r,l=Nn.g,c=Nn.b,f=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const x=f-d;switch(m=g<=.5?x/(f+d):x/(2-f-d),f){case r:p=(l-c)/x+(l<c?6:0);break;case l:p=(c-r)/x+2;break;case c:p=(r-l)/x+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ue.workingColorSpace){return Ue.fromWorkingColorSpace(Nn.copy(this),i),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=ui){Ue.fromWorkingColorSpace(Nn.copy(this),t);const i=Nn.r,r=Nn.g,l=Nn.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Ec);const r=_h(Xa.h,Ec.h,i),l=_h(Xa.s,Ec.s,i),c=_h(Xa.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Se;Se.NAMES=Cv;let BE=0;class nl extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BE++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Ds,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ds&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wv extends nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ln=new $,bc=new he;let zE=0;class Si{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:zE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Z_,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix3(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyMatrix4(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.applyNormalMatrix(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)ln.fromBufferAttribute(this,i),ln.transformDirection(t),this.setXYZ(i,ln.x,ln.y,ln.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Vn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=Vn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Vn(i,this.array),r=Vn(r,this.array),l=Vn(l,this.array),c=Vn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class Dv extends Si{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Uv extends Si{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Li extends Si{constructor(t,i,r){super(new Float32Array(t),i,r)}}let FE=0;const ci=new qe,Oh=new Mn,Ms=new $,ti=new Pr,Ho=new Pr,Sn=new $;class Qa extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bv(t)?Uv:Dv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new fe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Li(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Ho.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ti.min,Ho.min),ti.expandByPoint(Sn),Sn.addVectors(ti.max,Ho.max),ti.expandByPoint(Sn)):(ti.expandByPoint(Ho.min),ti.expandByPoint(Ho.max))}ti.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Sn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(Ms.fromBufferAttribute(t,m),Sn.add(Ms)),l=Math.max(l,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let j=0;j<r.count;j++)d[j]=new $,p[j]=new $;const m=new $,g=new $,x=new $,v=new he,S=new he,E=new he,A=new $,y=new $;function _(j,L,w){m.fromBufferAttribute(r,j),g.fromBufferAttribute(r,L),x.fromBufferAttribute(r,w),v.fromBufferAttribute(c,j),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,w),g.sub(m),x.sub(m),S.sub(v),E.sub(v);const k=1/(S.x*E.y-E.x*S.y);isFinite(k)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(x,-S.y).multiplyScalar(k),y.copy(x).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(k),d[j].add(A),d[L].add(A),d[w].add(A),p[j].add(y),p[L].add(y),p[w].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let j=0,L=P.length;j<L;++j){const w=P[j],k=w.start,ht=w.count;for(let ft=k,Mt=k+ht;ft<Mt;ft+=3)_(t.getX(ft+0),t.getX(ft+1),t.getX(ft+2))}const D=new $,U=new $,G=new $,V=new $;function F(j){G.fromBufferAttribute(l,j),V.copy(G);const L=d[j];D.copy(L),D.sub(G.multiplyScalar(G.dot(L))).normalize(),U.crossVectors(V,L);const k=U.dot(p[j])<0?-1:1;f.setXYZW(j,D.x,D.y,D.z,k)}for(let j=0,L=P.length;j<L;++j){const w=P[j],k=w.start,ht=w.count;for(let ft=k,Mt=k+ht;ft<Mt;ft+=3)F(t.getX(ft+0)),F(t.getX(ft+1)),F(t.getX(ft+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new $,c=new $,f=new $,d=new $,p=new $,m=new $,g=new $,x=new $;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),A=t.getX(v+1),y=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,y),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),x.subVectors(l,c),g.cross(x),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,x=d.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let A=0,y=p.length;A<y;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*g;for(let _=0;_<g;_++)v[E++]=m[S++]}return new Si(v,g,x)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qa,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,x=m.length;g<x;g++){const v=m[g],S=t(v,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let x=0,v=m.length;x<v;x++){const S=m[x];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],x=c[m];for(let v=0,S=x.length;v<S;v++)g.push(x[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const x=f[m];this.addGroup(x.start,x.count,x.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new qe,xr=new Av,Tc=new el,u0=new $,Ac=new $,Rc=new $,Cc=new $,Ih=new $,wc=new $,f0=new $,Dc=new $;class hi extends Mn{constructor(t=new Qa,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){wc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],x=c[p];g!==0&&(Ih.fromBufferAttribute(x,t),f?wc.addScaledVector(Ih,g):wc.addScaledVector(Ih.sub(i),g))}i.add(wc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),xr.copy(t.ray).recast(t.near),!(Tc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Tc,u0)===null||xr.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(c).invert(),xr.copy(t.ray).applyMatrix4(c0),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,v=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=f[y.materialIndex],P=Math.max(y.start,S.start),D=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let U=P,G=D;U<G;U+=3){const V=d.getX(U),F=d.getX(U+1),j=d.getX(U+2);l=Uc(this,_,t,r,m,g,x,V,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const P=d.getX(y),D=d.getX(y+1),U=d.getX(y+2);l=Uc(this,f,t,r,m,g,x,P,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=v.length;E<A;E++){const y=v[E],_=f[y.materialIndex],P=Math.max(y.start,S.start),D=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let U=P,G=D;U<G;U+=3){const V=U,F=U+1,j=U+2;l=Uc(this,_,t,r,m,g,x,V,F,j),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let y=E,_=A;y<_;y+=3){const P=y,D=y+1,U=y+2;l=Uc(this,f,t,r,m,g,x,P,D,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function HE(s,t,i,r,l,c,f,d){let p;if(t.side===Xn?p=r.intersectTriangle(f,c,l,!0,d):p=r.intersectTriangle(l,c,f,t.side===Ka,d),p===null)return null;Dc.copy(d),Dc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Dc);return m<i.near||m>i.far?null:{distance:m,point:Dc.clone(),object:s}}function Uc(s,t,i,r,l,c,f,d,p,m){s.getVertexPosition(d,Ac),s.getVertexPosition(p,Rc),s.getVertexPosition(m,Cc);const g=HE(s,t,i,r,Ac,Rc,Cc,f0);if(g){const x=new $;xi.getBarycoord(f0,Ac,Rc,Cc,x),l&&(g.uv=xi.getInterpolatedAttribute(l,d,p,m,x,new he)),c&&(g.uv1=xi.getInterpolatedAttribute(c,d,p,m,x,new he)),f&&(g.normal=xi.getInterpolatedAttribute(f,d,p,m,x,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new $,materialIndex:0};xi.getNormal(Ac,Rc,Cc,v.normal),g.face=v,g.barycoord=x}return g}class il extends Qa{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],x=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(g,3)),this.setAttribute("uv",new Li(x,2));function E(A,y,_,P,D,U,G,V,F,j,L){const w=U/F,k=G/j,ht=U/2,ft=G/2,Mt=V/2,gt=F+1,B=j+1;let X=0,O=0;const rt=new $;for(let C=0;C<B;C++){const z=C*k-ft;for(let tt=0;tt<gt;tt++){const lt=tt*w-ht;rt[A]=lt*P,rt[y]=z*D,rt[_]=Mt,m.push(rt.x,rt.y,rt.z),rt[A]=0,rt[y]=0,rt[_]=V>0?1:-1,g.push(rt.x,rt.y,rt.z),x.push(tt/F),x.push(1-C/j),X+=1}}for(let C=0;C<j;C++)for(let z=0;z<F;z++){const tt=v+z+gt*C,lt=v+z+gt*(C+1),W=v+(z+1)+gt*(C+1),it=v+(z+1)+gt*C;p.push(tt,lt,it),p.push(lt,W,it),O+=6}d.addGroup(S,O,L),S+=O,v+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function On(s){const t={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)t[l]=r[l]}return t}function GE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Lv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const VE={clone:Is,merge:On};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=GE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new $,h0=new he,d0=new he;class fi extends Nv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,h0,d0),i.subVectors(d0,h0)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Es=-90,bs=1;class WE extends Mn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(Es,bs,t,i);l.layers=this.layers,this.add(l);const c=new fi(Es,bs,t,i);c.layers=this.layers,this.add(c);const f=new fi(Es,bs,t,i);f.layers=this.layers,this.add(f);const d=new fi(Es,bs,t,i);d.layers=this.layers,this.add(d);const p=new fi(Es,bs,t,i);p.layers=this.layers,this.add(p);const m=new fi(Es,bs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(x,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Pv extends In{constructor(t=[],i=Ns,r,l,c,f,d,p,m,g){super(t,i,r,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qE extends wr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Di}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new il(5,5,5),c=new ha({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:ja});c.uniforms.tEquirect.value=i;const f=new hi(l,c),d=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Di),new WE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Lc extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],x=m.joints["thumb-tip"],v=g.position.distanceTo(x.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Lc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class jE extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ZE extends In{constructor(t=null,i=1,r=1,l,c,f,d,p,m=ei,g=ei,x,v){super(null,f,d,p,m,g,l,c,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $c extends Si{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ts=new qe,p0=new qe,Nc=[],m0=new Pr,KE=new qe,Go=new hi,Vo=new el;class g0 extends hi{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,KE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Pr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ts),m0.copy(t.boundingBox).applyMatrix4(Ts),this.boundingBox.union(m0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new el),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ts),Vo.copy(t.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(Vo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,f=t*c+1;for(let d=0;d<r.length;d++)r[d]=l[f+d]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(r),t.ray.intersectsSphere(Vo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ts),p0.multiplyMatrices(r,Ts),Go.matrixWorld=p0,Go.raycast(t,Nc);for(let f=0,d=Nc.length;f<d;f++){const p=Nc[f];p.instanceId=c,p.object=this,i.push(p)}Nc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new ZE(new Float32Array(l*this.count),l,this.count,Yd,Ui));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<r.length;m++)f+=r[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=d,c.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const zh=new $,QE=new $,JE=new fe;class qa{constructor(t=new $(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=zh.subVectors(r,i).cross(QE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(zh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||JE.getNormalMatrix(t),l=this.coplanarPoint(zh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new el,Pc=new $;class Jd{constructor(t=new qa,i=new qa,r=new qa,l=new qa,c=new qa,f=new qa){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=la){const r=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],x=l[6],v=l[7],S=l[8],E=l[9],A=l[10],y=l[11],_=l[12],P=l[13],D=l[14],U=l[15];if(r[0].setComponents(p-c,v-m,y-S,U-_).normalize(),r[1].setComponents(p+c,v+m,y+S,U+_).normalize(),r[2].setComponents(p+f,v+g,y+E,U+P).normalize(),r[3].setComponents(p-f,v-g,y-E,U-P).normalize(),r[4].setComponents(p-d,v-x,y-A,U-D).normalize(),i===la)r[5].setComponents(p+d,v+x,y+A,U+D).normalize();else if(i===Qc)r[5].setComponents(d,x,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),yr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(t){return yr.center.set(0,0,0),yr.radius=.7071067811865476,yr.applyMatrix4(t.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ov extends In{constructor(t,i,r=Cr,l,c,f,d=ei,p=ei,m,g=jo){if(g!==jo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class au extends Qa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,x=t/d,v=i/p,S=[],E=[],A=[],y=[];for(let _=0;_<g;_++){const P=_*v-f;for(let D=0;D<m;D++){const U=D*x-c;E.push(U,-P,0),A.push(0,0,1),y.push(D/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let P=0;P<d;P++){const D=P+m*_,U=P+m*(_+1),G=P+1+m*(_+1),V=P+1+m*_;S.push(D,U,V),S.push(U,G,V)}this.setIndex(S),this.setAttribute("position",new Li(E,3)),this.setAttribute("normal",new Li(A,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xo extends Qa{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const g=[],x=new $,v=new $,S=[],E=[],A=[],y=[];for(let _=0;_<=r;_++){const P=[],D=_/r;let U=0;_===0&&f===0?U=.5/i:_===r&&p===Math.PI&&(U=-.5/i);for(let G=0;G<=i;G++){const V=G/i;x.x=-t*Math.cos(l+V*c)*Math.sin(f+D*d),x.y=t*Math.cos(f+D*d),x.z=t*Math.sin(l+V*c)*Math.sin(f+D*d),E.push(x.x,x.y,x.z),v.copy(x).normalize(),A.push(v.x,v.y,v.z),y.push(V+U,1-D),P.push(m++)}g.push(P)}for(let _=0;_<r;_++)for(let P=0;P<i;P++){const D=g[_][P+1],U=g[_][P],G=g[_+1][P],V=g[_+1][P+1];(_!==0||f>0)&&S.push(D,U,V),(_!==r-1||p<Math.PI)&&S.push(U,G,V)}this.setIndex(S),this.setAttribute("position",new Li(E,3)),this.setAttribute("normal",new Li(A,3)),this.setAttribute("uv",new Li(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _0 extends nl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mv,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $E extends nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Iv extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Fh=new qe,v0=new $,x0=new $;class eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Ni,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;v0.setFromMatrixPosition(t.matrixWorld),i.position.copy(v0),x0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(x0),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bv extends Nv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends eb{constructor(){super(new Bv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class y0 extends Iv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ib extends Iv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ab extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class S0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ye(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(ye(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rb extends Nr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function M0(s,t,i,r){const l=sb(r);switch(i){case vv:return s*t;case Yd:return s*t/l.components*l.byteLength;case jd:return s*t/l.components*l.byteLength;case yv:return s*t*2/l.components*l.byteLength;case Zd:return s*t*2/l.components*l.byteLength;case xv:return s*t*3/l.components*l.byteLength;case yi:return s*t*4/l.components*l.byteLength;case Kd:return s*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:case hd:return Math.max(s,16)*Math.max(t,8)/4;case cd:case fd:return Math.max(s,8)*Math.max(t,8)/2;case dd:case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Md:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wc:case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sv:case Ld:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nd:case Pd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(s){switch(s){case Ni:case mv:return{byteLength:1,components:1};case qo:case gv:case $o:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case Cr:case Xd:case Ui:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ob(s){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,x=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:x}}function r(d,p,m){const g=p.array,x=p.updateRanges;if(s.bindBuffer(m,d),x.length===0)s.bufferSubData(m,0,g);else{x.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<x.length;S++){const E=x[v],A=x[S];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++v,x[v]=A)}x.length=v+1;for(let S=0,E=x.length;S<E;S++){const A=x[S];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ub=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,_b=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Mb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ub=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$b=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,tT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,eT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_T=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ST=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,MT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ET=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,DT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,UT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,PT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,OT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,IT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,BT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,FT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,XT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,YT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$T=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,t1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,n1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,i1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,r1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,s1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,p1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,m1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,g1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,M1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,w1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,L1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,P1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,O1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,F1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:hb,alphatest_pars_fragment:db,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:vb,beginnormal_vertex:xb,bsdfs:yb,iridescence_fragment:Sb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ob,emissivemap_fragment:Ib,emissivemap_pars_fragment:Bb,colorspace_fragment:zb,colorspace_pars_fragment:Fb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:tT,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:aT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:xT,morphinstance_vertex:yT,morphcolor_vertex:ST,morphnormal_vertex:MT,morphtarget_pars_vertex:ET,morphtarget_vertex:bT,normal_fragment_begin:TT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:CT,normal_vertex:wT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:PT,opaque_fragment:OT,packing:IT,premultiplied_alpha_fragment:BT,project_vertex:zT,dithering_fragment:FT,dithering_pars_fragment:HT,roughnessmap_fragment:GT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:XT,shadowmap_vertex:WT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:jT,skinning_vertex:ZT,skinnormal_vertex:KT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:$T,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:x1,linedashed_frag:y1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:P1,points_vert:O1,points_frag:I1,shadow_vert:B1,shadow_frag:z1,sprite_vert:F1,sprite_frag:H1},Nt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},wi={basic:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Se(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:On([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:On([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:On([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Se(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:On([Nt.points,Nt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:On([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:On([Nt.common,Nt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:On([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:On([Nt.sprite,Nt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distanceRGBA:{uniforms:On([Nt.common,Nt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distanceRGBA_vert,fragmentShader:de.distanceRGBA_frag},shadow:{uniforms:On([Nt.lights,Nt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};wi.physical={uniforms:On([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Oc={r:0,b:0,g:0},Sr=new Pi,G1=new qe;function V1(s,t,i,r,l,c,f){const d=new Se(0);let p=c===!0?0:1,m,g,x=null,v=0,S=null;function E(D){let U=D.isScene===!0?D.background:null;return U&&U.isTexture&&(U=(D.backgroundBlurriness>0?i:t).get(U)),U}function A(D){let U=!1;const G=E(D);G===null?_(d,p):G&&G.isColor&&(_(G,1),U=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(D,U){const G=E(U);G&&(G.isCubeTexture||G.mapping===iu)?(g===void 0&&(g=new hi(new il(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Is(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(U.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Sr)),g.material.toneMapped=Ue.getTransfer(G.colorSpace)!==Fe,(x!==G||v!==G.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,x=G,v=G.version,S=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(m===void 0&&(m=new hi(new au(2,2),new ha({name:"BackgroundMaterial",uniforms:Is(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=G,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Ue.getTransfer(G.colorSpace)!==Fe,G.matrixAutoUpdate===!0&&G.updateMatrix(),m.material.uniforms.uvTransform.value.copy(G.matrix),(x!==G||v!==G.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,x=G,v=G.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,U){D.getRGB(Oc,Lv(s)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,U,f)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,U=1){d.set(D),p=U,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:A,addToRenderList:y,dispose:P}}function k1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function d(w,k,ht,ft,Mt){let gt=!1;const B=x(ft,ht,k);c!==B&&(c=B,m(c.object)),gt=S(w,ft,ht,Mt),gt&&E(w,ft,ht,Mt),Mt!==null&&t.update(Mt,s.ELEMENT_ARRAY_BUFFER),(gt||f)&&(f=!1,U(w,k,ht,ft),Mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Mt).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function x(w,k,ht){const ft=ht.wireframe===!0;let Mt=r[w.id];Mt===void 0&&(Mt={},r[w.id]=Mt);let gt=Mt[k.id];gt===void 0&&(gt={},Mt[k.id]=gt);let B=gt[ft];return B===void 0&&(B=v(p()),gt[ft]=B),B}function v(w){const k=[],ht=[],ft=[];for(let Mt=0;Mt<i;Mt++)k[Mt]=0,ht[Mt]=0,ft[Mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:ht,attributeDivisors:ft,object:w,attributes:{},index:null}}function S(w,k,ht,ft){const Mt=c.attributes,gt=k.attributes;let B=0;const X=ht.getAttributes();for(const O in X)if(X[O].location>=0){const C=Mt[O];let z=gt[O];if(z===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(z=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(z=w.instanceColor)),C===void 0||C.attribute!==z||z&&C.data!==z.data)return!0;B++}return c.attributesNum!==B||c.index!==ft}function E(w,k,ht,ft){const Mt={},gt=k.attributes;let B=0;const X=ht.getAttributes();for(const O in X)if(X[O].location>=0){let C=gt[O];C===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(C=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(C=w.instanceColor));const z={};z.attribute=C,C&&C.data&&(z.data=C.data),Mt[O]=z,B++}c.attributes=Mt,c.attributesNum=B,c.index=ft}function A(){const w=c.newAttributes;for(let k=0,ht=w.length;k<ht;k++)w[k]=0}function y(w){_(w,0)}function _(w,k){const ht=c.newAttributes,ft=c.enabledAttributes,Mt=c.attributeDivisors;ht[w]=1,ft[w]===0&&(s.enableVertexAttribArray(w),ft[w]=1),Mt[w]!==k&&(s.vertexAttribDivisor(w,k),Mt[w]=k)}function P(){const w=c.newAttributes,k=c.enabledAttributes;for(let ht=0,ft=k.length;ht<ft;ht++)k[ht]!==w[ht]&&(s.disableVertexAttribArray(ht),k[ht]=0)}function D(w,k,ht,ft,Mt,gt,B){B===!0?s.vertexAttribIPointer(w,k,ht,Mt,gt):s.vertexAttribPointer(w,k,ht,ft,Mt,gt)}function U(w,k,ht,ft){A();const Mt=ft.attributes,gt=ht.getAttributes(),B=k.defaultAttributeValues;for(const X in gt){const O=gt[X];if(O.location>=0){let rt=Mt[X];if(rt===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(rt=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(rt=w.instanceColor)),rt!==void 0){const C=rt.normalized,z=rt.itemSize,tt=t.get(rt);if(tt===void 0)continue;const lt=tt.buffer,W=tt.type,it=tt.bytesPerElement,st=W===s.INT||W===s.UNSIGNED_INT||rt.gpuType===Xd;if(rt.isInterleavedBufferAttribute){const bt=rt.data,Et=bt.stride,zt=rt.offset;if(bt.isInstancedInterleavedBuffer){for(let wt=0;wt<O.locationSize;wt++)_(O.location+wt,bt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let wt=0;wt<O.locationSize;wt++)y(O.location+wt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let wt=0;wt<O.locationSize;wt++)D(O.location+wt,z/O.locationSize,W,C,Et*it,(zt+z/O.locationSize*wt)*it,st)}else{if(rt.isInstancedBufferAttribute){for(let bt=0;bt<O.locationSize;bt++)_(O.location+bt,rt.meshPerAttribute);w.isInstancedMesh!==!0&&ft._maxInstanceCount===void 0&&(ft._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let bt=0;bt<O.locationSize;bt++)y(O.location+bt);s.bindBuffer(s.ARRAY_BUFFER,lt);for(let bt=0;bt<O.locationSize;bt++)D(O.location+bt,z/O.locationSize,W,C,z*it,z/O.locationSize*bt*it,st)}}else if(B!==void 0){const C=B[X];if(C!==void 0)switch(C.length){case 2:s.vertexAttrib2fv(O.location,C);break;case 3:s.vertexAttrib3fv(O.location,C);break;case 4:s.vertexAttrib4fv(O.location,C);break;default:s.vertexAttrib1fv(O.location,C)}}}}P()}function G(){j();for(const w in r){const k=r[w];for(const ht in k){const ft=k[ht];for(const Mt in ft)g(ft[Mt].object),delete ft[Mt];delete k[ht]}delete r[w]}}function V(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const ht in k){const ft=k[ht];for(const Mt in ft)g(ft[Mt].object),delete ft[Mt];delete k[ht]}delete r[w.id]}function F(w){for(const k in r){const ht=r[k];if(ht[w.id]===void 0)continue;const ft=ht[w.id];for(const Mt in ft)g(ft[Mt].object),delete ft[Mt];delete ht[w.id]}}function j(){L(),f=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:L,dispose:G,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function X1(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,x){x!==0&&(s.drawArraysInstanced(r,m,g,x),i.update(g,r,x))}function d(m,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,x);let S=0;for(let E=0;E<x;E++)S+=g[E];i.update(S,r,1)}function p(m,g,x,v){if(x===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,x);let E=0;for(let A=0;A<x;A++)E+=g[A]*v[A];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function W1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==yi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const j=F===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Ni&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ui&&!j)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const x=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=E>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:x,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:U,vertexTextures:G,maxSamples:V}}function q1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new qa,d=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const S=x.length!==0||v||r!==0||l;return l=v,r=x.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,v){i=g(x,v,0)},this.setState=function(x,v,S){const E=x.clippingPlanes,A=x.clipIntersection,y=x.clipShadows,_=s.get(x);if(!l||E===null||E.length===0||c&&!y)c?g(null):m();else{const P=c?0:r,D=P*4;let U=_.clippingState||null;p.value=U,U=g(E,v,D,S);for(let G=0;G!==D;++G)U[G]=i[G];_.clippingState=U,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(x,v,S,E){const A=x!==null?x.length:0;let y=null;if(A!==0){if(y=p.value,E!==!0||y===null){const _=S+A*4,P=v.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<_)&&(y=new Float32Array(_));for(let D=0,U=S;D!==A;++D,U+=4)f.copy(x[D]).applyMatrix4(P,d),f.normal.toArray(y,U),y[U+3]=f.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function Y1(s){let t=new WeakMap;function i(f,d){return d===rd?f.mapping=Ns:d===sd&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===rd||d===sd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new qE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Cs=4,E0=[.125,.215,.35,.446,.526,.582],Tr=20,Hh=new Bv,b0=new Se;let Gh=null,Vh=0,kh=0,Xh=!1;const Er=(1+Math.sqrt(5))/2,As=1/Er,T0=[new $(-Er,As,0),new $(Er,As,0),new $(-As,0,Er),new $(As,0,Er),new $(0,Er,-As),new $(0,Er,As),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)],j1=new $;class A0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:d=j1}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Di,minFilter:Di,generateMipmaps:!1,type:$o,format:yi,colorSpace:Os,depthBuffer:!1},l=R0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=K1(c,t,i)}return l}_compileMaterial(t){const i=new hi(this._lodPlanes[0],t);this._renderer.compile(i,Hh)}_sceneToCubeUV(t,i,r,l,c){const p=new fi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,S=x.toneMapping;x.getClearColor(b0),x.toneMapping=Za,x.autoClear=!1;const E=new wv({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),A=new hi(new il,E);let y=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,y=!0):(E.color.copy(b0),y=!0);for(let P=0;P<6;P++){const D=P%3;D===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):D===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const U=this._cubeSize;Ic(l,D*U,P>2?U:0,U,U),x.setRenderTarget(l),y&&x.render(A,p),x.render(t,p)}A.geometry.dispose(),A.material.dispose(),x.toneMapping=S,x.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ns||t.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new hi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Ic(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=T0[(l-c-1)%T0.length];this._blur(t,c-1,c,f,d)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,x=new hi(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),A=c/E,y=isFinite(c)?1+Math.floor(g*A):Tr;y>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Tr}`);const _=[];let P=0;for(let F=0;F<Tr;++F){const j=F/A,L=Math.exp(-j*j/2);_.push(L),F===0?P+=L:F<y&&(P+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/P;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=_,v.latitudinal.value=f==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:D}=this;v.dTheta.value=E,v.mipInt.value=D-r;const U=this._sizeLods[l],G=3*U*(l>D-Cs?l-D+Cs:0),V=4*(this._cubeSize-U);Ic(i,G,V,3*U,2*U),p.setRenderTarget(i),p.render(x,Hh)}}function Z1(s){const t=[],i=[],r=[];let l=s;const c=s-Cs+1+E0.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Cs?p=E0[f-s+Cs-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,x=1+m,v=[g,g,x,g,x,x,g,g,x,x,g,x],S=6,E=6,A=3,y=2,_=1,P=new Float32Array(A*E*S),D=new Float32Array(y*E*S),U=new Float32Array(_*E*S);for(let V=0;V<S;V++){const F=V%3*2/3-1,j=V>2?0:-1,L=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];P.set(L,A*E*V),D.set(v,y*E*V);const w=[V,V,V,V,V,V];U.set(w,_*E*V)}const G=new Qa;G.setAttribute("position",new Si(P,A)),G.setAttribute("uv",new Si(D,y)),G.setAttribute("faceIndex",new Si(U,_)),t.push(G),l>Cs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function R0(s,t,i){const r=new wr(s,t,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function K1(s,t,i){const r=new Float32Array(Tr),l=new $(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function C0(){return new ha({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function w0(){return new ha({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ja,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Q1(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===rd||p===sd,g=p===Ns||p===Ps;if(m||g){let x=t.get(d);const v=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return i===null&&(i=new A0(s)),x=m?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),x.texture;if(x!==void 0)return x.texture;{const S=d.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new A0(s)),x=m?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,t.set(d,x),d.addEventListener("dispose",c),x.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function J1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function $1(s,t,i,r){const l={},c=new WeakMap;function f(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function d(x,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(x){const v=x.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(x){const v=[],S=x.index,E=x.attributes.position;let A=0;if(S!==null){const P=S.array;A=S.version;for(let D=0,U=P.length;D<U;D+=3){const G=P[D+0],V=P[D+1],F=P[D+2];v.push(G,V,V,F,F,G)}}else if(E!==void 0){const P=E.array;A=E.version;for(let D=0,U=P.length/3-1;D<U;D+=3){const G=D+0,V=D+1,F=D+2;v.push(G,V,V,F,F,G)}}else return;const y=new(bv(v)?Uv:Dv)(v,1);y.version=A;const _=c.get(x);_&&t.remove(_),c.set(x,y)}function g(x){const v=c.get(x);if(v){const S=x.index;S!==null&&v.version<S.version&&m(x)}else m(x);return c.get(x)}return{get:d,update:p,getWireframeAttribute:g}}function tA(s,t,i){let r;function l(v){r=v}let c,f;function d(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let y=0;for(let _=0;_<E;_++)y+=S[_];i.update(y,r,1)}function x(v,S,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<v.length;_++)m(v[_]/f,S[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,A,0,E);let _=0;for(let P=0;P<E;P++)_+=S[P]*A[P];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function eA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function nA(s,t,i){const r=new WeakMap,l=new tn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=g!==void 0?g.length:0;let v=r.get(d);if(v===void 0||v.count!==x){let w=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;v!==void 0&&v.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let U=0;E===!0&&(U=1),A===!0&&(U=2),y===!0&&(U=3);let G=d.attributes.position.count*U,V=1;G>t.maxTextureSize&&(V=Math.ceil(G/t.maxTextureSize),G=t.maxTextureSize);const F=new Float32Array(G*V*4*x),j=new Tv(F,G,V,x);j.type=Ui,j.needsUpdate=!0;const L=U*4;for(let k=0;k<x;k++){const ht=_[k],ft=P[k],Mt=D[k],gt=G*V*4*k;for(let B=0;B<ht.count;B++){const X=B*L;E===!0&&(l.fromBufferAttribute(ht,B),F[gt+X+0]=l.x,F[gt+X+1]=l.y,F[gt+X+2]=l.z,F[gt+X+3]=0),A===!0&&(l.fromBufferAttribute(ft,B),F[gt+X+4]=l.x,F[gt+X+5]=l.y,F[gt+X+6]=l.z,F[gt+X+7]=0),y===!0&&(l.fromBufferAttribute(Mt,B),F[gt+X+8]=l.x,F[gt+X+9]=l.y,F[gt+X+10]=l.z,F[gt+X+11]=Mt.itemSize===4?l.w:1)}}v={count:x,texture:j,size:new he(G,V)},r.set(d,v),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let y=0;y<m.length;y++)E+=m[y];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function iA(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,x=t.get(p,g);if(l.get(x)!==m&&(t.update(x),l.set(x,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return x}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Fv=new In,D0=new Ov(1,1),Hv=new Tv,Gv=new wE,Vv=new Pv,U0=[],L0=[],N0=new Float32Array(16),P0=new Float32Array(9),O0=new Float32Array(4);function zs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=U0[l];if(c===void 0&&(c=new Float32Array(l),U0[l]=c),t!==0){r.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(c,d)}return c}function pn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function mn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ru(s,t){let i=L0[t];i===void 0&&(i=new Int32Array(t),L0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function aA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function rA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2fv(this.addr,t),mn(i,t)}}function sA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(pn(i,t))return;s.uniform3fv(this.addr,t),mn(i,t)}}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4fv(this.addr,t),mn(i,t)}}function lA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),mn(i,r)}}function cA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;P0.set(r),s.uniformMatrix3fv(this.addr,!1,P0),mn(i,r)}}function uA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(pn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),mn(i,t)}else{if(pn(i,r))return;N0.set(r),s.uniformMatrix4fv(this.addr,!1,N0),mn(i,r)}}function fA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2iv(this.addr,t),mn(i,t)}}function dA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3iv(this.addr,t),mn(i,t)}}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4iv(this.addr,t),mn(i,t)}}function mA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(pn(i,t))return;s.uniform2uiv(this.addr,t),mn(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(pn(i,t))return;s.uniform3uiv(this.addr,t),mn(i,t)}}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(pn(i,t))return;s.uniform4uiv(this.addr,t),mn(i,t)}}function xA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(D0.compareFunction=Ev,c=D0):c=Fv,i.setTexture2D(t||c,l)}function yA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Gv,l)}function SA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Vv,l)}function MA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Hv,l)}function EA(s){switch(s){case 5126:return aA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return xA;case 35679:case 36299:case 36307:return yA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}function bA(s,t){s.uniform1fv(this.addr,t)}function TA(s,t){const i=zs(t,this.size,2);s.uniform2fv(this.addr,i)}function AA(s,t){const i=zs(t,this.size,3);s.uniform3fv(this.addr,i)}function RA(s,t){const i=zs(t,this.size,4);s.uniform4fv(this.addr,i)}function CA(s,t){const i=zs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function wA(s,t){const i=zs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function DA(s,t){const i=zs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function UA(s,t){s.uniform1iv(this.addr,t)}function LA(s,t){s.uniform2iv(this.addr,t)}function NA(s,t){s.uniform3iv(this.addr,t)}function PA(s,t){s.uniform4iv(this.addr,t)}function OA(s,t){s.uniform1uiv(this.addr,t)}function IA(s,t){s.uniform2uiv(this.addr,t)}function BA(s,t){s.uniform3uiv(this.addr,t)}function zA(s,t){s.uniform4uiv(this.addr,t)}function FA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Fv,c[f])}function HA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Gv,c[f])}function GA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Vv,c[f])}function VA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);pn(r,c)||(s.uniform1iv(this.addr,c),mn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Hv,c[f])}function kA(s){switch(s){case 5126:return bA;case 35664:return TA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return PA;case 5125:return OA;case 36294:return IA;case 36295:return BA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=EA(i.type)}}class WA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kA(i.type)}}class qA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],r)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function I0(s,t){s.seq.push(t),s.map[t.id]=t}function YA(s,t,i){const r=s.name,l=r.length;for(Wh.lastIndex=0;;){const c=Wh.exec(r),f=Wh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){I0(i,m===void 0?new XA(d,s,t):new WA(d,s,t));break}else{let x=i.map[d];x===void 0&&(x=new qA(d),I0(i,x)),i=x}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);YA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function B0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const jA=37297;let ZA=0;function KA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const z0=new fe;function QA(s){Ue._getMatrix(z0,Ue.workingColorSpace,s);const t=`mat3( ${z0.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(s)){case Kc:return[t,"LinearTransferOETF"];case Fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function F0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+KA(s.getShaderSource(t),f)}else return l}function JA(s,t){const i=QA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $A(s,t){let i;switch(t){case tE:i="Linear";break;case eE:i="Reinhard";break;case nE:i="Cineon";break;case iE:i="ACESFilmic";break;case rE:i="AgX";break;case sE:i="Neutral";break;case aE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new $;function tR(){Ue.getLuminanceCoefficients(Bc);const s=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function nR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function iR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function ko(s){return s!==""}function H0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(aR,sR)}const rR=new Map;function sR(s,t){let i=de[t];if(i===void 0){const r=rR.get(t);if(r!==void 0)i=de[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Id(i)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(oR,lR)}function lR(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function k0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function cR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===NM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function uR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Ps:t="ENVMAP_TYPE_CUBE";break;case iu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function hR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dv:t="ENVMAP_BLENDING_MULTIPLY";break;case JM:t="ENVMAP_BLENDING_MIX";break;case $M:t="ENVMAP_BLENDING_ADD";break}return t}function dR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function pR(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=cR(i),m=uR(i),g=fR(i),x=hR(i),v=dR(i),S=eR(i),E=nR(c),A=l.createProgram();let y,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(y=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?de.tonemapping_pars_fragment:"",i.toneMapping!==Za?$A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,JA("linearToOutputTexel",i.outputColorSpace),tR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),f=Id(f),f=H0(f,i),f=G0(f,i),d=Id(d),d=H0(d,i),d=G0(d,i),f=V0(f),d=V0(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=P+y+f,U=P+_+d,G=B0(l,l.VERTEX_SHADER,D),V=B0(l,l.FRAGMENT_SHADER,U);l.attachShader(A,G),l.attachShader(A,V),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(k){if(s.debug.checkShaderErrors){const ht=l.getProgramInfoLog(A).trim(),ft=l.getShaderInfoLog(G).trim(),Mt=l.getShaderInfoLog(V).trim();let gt=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(gt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,G,V);else{const X=F0(l,G,"vertex"),O=F0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ht+`
`+X+`
`+O)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(ft===""||Mt==="")&&(B=!1);B&&(k.diagnostics={runnable:gt,programLog:ht,vertexShader:{log:ft,prefix:y},fragmentShader:{log:Mt,prefix:_}})}l.deleteShader(G),l.deleteShader(V),j=new jc(l,A),L=iR(l,A)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(A,jA)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=G,this.fragmentShader=V,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new _R(t),i.set(t,r)),r}}class _R{constructor(t){this.id=mR++,this.code=t,this.usedTimes=0}}function vR(s,t,i,r,l,c,f){const d=new Rv,p=new gR,m=new Set,g=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(L){return m.add(L),L===0?"uv":`uv${L}`}function y(L,w,k,ht,ft){const Mt=ht.fog,gt=ft.geometry,B=L.isMeshStandardMaterial?ht.environment:null,X=(L.isMeshStandardMaterial?i:t).get(L.envMap||B),O=X&&X.mapping===iu?X.image.height:null,rt=E[L.type];L.precision!==null&&(S=l.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const C=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,z=C!==void 0?C.length:0;let tt=0;gt.morphAttributes.position!==void 0&&(tt=1),gt.morphAttributes.normal!==void 0&&(tt=2),gt.morphAttributes.color!==void 0&&(tt=3);let lt,W,it,st;if(rt){const Ce=wi[rt];lt=Ce.vertexShader,W=Ce.fragmentShader}else lt=L.vertexShader,W=L.fragmentShader,p.update(L),it=p.getVertexShaderID(L),st=p.getFragmentShaderID(L);const bt=s.getRenderTarget(),Et=s.state.buffers.depth.getReversed(),zt=ft.isInstancedMesh===!0,wt=ft.isBatchedMesh===!0,ge=!!L.map,re=!!L.matcap,oe=!!X,H=!!L.aoMap,Re=!!L.lightMap,jt=!!L.bumpMap,Wt=!!L.normalMap,Xt=!!L.displacementMap,Me=!!L.emissiveMap,kt=!!L.metalnessMap,N=!!L.roughnessMap,b=L.anisotropy>0,nt=L.clearcoat>0,vt=L.dispersion>0,Tt=L.iridescence>0,pt=L.sheen>0,Dt=L.transmission>0,Ct=b&&!!L.anisotropyMap,Ft=nt&&!!L.clearcoatMap,Kt=nt&&!!L.clearcoatNormalMap,At=nt&&!!L.clearcoatRoughnessMap,Ht=Tt&&!!L.iridescenceMap,Zt=Tt&&!!L.iridescenceThicknessMap,Qt=pt&&!!L.sheenColorMap,It=pt&&!!L.sheenRoughnessMap,ce=!!L.specularMap,ne=!!L.specularColorMap,Ne=!!L.specularIntensityMap,Y=Dt&&!!L.transmissionMap,Pt=Dt&&!!L.thicknessMap,dt=!!L.gradientMap,yt=!!L.alphaMap,Bt=L.alphaTest>0,Ot=!!L.alphaHash,le=!!L.extensions;let ke=Za;L.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(ke=s.toneMapping);const an={shaderID:rt,shaderType:L.type,shaderName:L.name,vertexShader:lt,fragmentShader:W,defines:L.defines,customVertexShaderID:it,customFragmentShaderID:st,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:wt,batchingColor:wt&&ft._colorsTexture!==null,instancing:zt,instancingColor:zt&&ft.instanceColor!==null,instancingMorph:zt&&ft.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:bt===null?s.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:Os,alphaToCoverage:!!L.alphaToCoverage,map:ge,matcap:re,envMap:oe,envMapMode:oe&&X.mapping,envMapCubeUVHeight:O,aoMap:H,lightMap:Re,bumpMap:jt,normalMap:Wt,displacementMap:v&&Xt,emissiveMap:Me,normalMapObjectSpace:Wt&&L.normalMapType===uE,normalMapTangentSpace:Wt&&L.normalMapType===Mv,metalnessMap:kt,roughnessMap:N,anisotropy:b,anisotropyMap:Ct,clearcoat:nt,clearcoatMap:Ft,clearcoatNormalMap:Kt,clearcoatRoughnessMap:At,dispersion:vt,iridescence:Tt,iridescenceMap:Ht,iridescenceThicknessMap:Zt,sheen:pt,sheenColorMap:Qt,sheenRoughnessMap:It,specularMap:ce,specularColorMap:ne,specularIntensityMap:Ne,transmission:Dt,transmissionMap:Y,thicknessMap:Pt,gradientMap:dt,opaque:L.transparent===!1&&L.blending===Ds&&L.alphaToCoverage===!1,alphaMap:yt,alphaTest:Bt,alphaHash:Ot,combine:L.combine,mapUv:ge&&A(L.map.channel),aoMapUv:H&&A(L.aoMap.channel),lightMapUv:Re&&A(L.lightMap.channel),bumpMapUv:jt&&A(L.bumpMap.channel),normalMapUv:Wt&&A(L.normalMap.channel),displacementMapUv:Xt&&A(L.displacementMap.channel),emissiveMapUv:Me&&A(L.emissiveMap.channel),metalnessMapUv:kt&&A(L.metalnessMap.channel),roughnessMapUv:N&&A(L.roughnessMap.channel),anisotropyMapUv:Ct&&A(L.anisotropyMap.channel),clearcoatMapUv:Ft&&A(L.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&A(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&A(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&A(L.iridescenceMap.channel),iridescenceThicknessMapUv:Zt&&A(L.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&A(L.sheenColorMap.channel),sheenRoughnessMapUv:It&&A(L.sheenRoughnessMap.channel),specularMapUv:ce&&A(L.specularMap.channel),specularColorMapUv:ne&&A(L.specularColorMap.channel),specularIntensityMapUv:Ne&&A(L.specularIntensityMap.channel),transmissionMapUv:Y&&A(L.transmissionMap.channel),thicknessMapUv:Pt&&A(L.thicknessMap.channel),alphaMapUv:yt&&A(L.alphaMap.channel),vertexTangents:!!gt.attributes.tangent&&(Wt||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,pointsUvs:ft.isPoints===!0&&!!gt.attributes.uv&&(ge||yt),fog:!!Mt,useFog:L.fog===!0,fogExp2:!!Mt&&Mt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:x,reverseDepthBuffer:Et,skinning:ft.isSkinnedMesh===!0,morphTargets:gt.morphAttributes.position!==void 0,morphNormals:gt.morphAttributes.normal!==void 0,morphColors:gt.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:tt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:ke,decodeVideoTexture:ge&&L.map.isVideoTexture===!0&&Ue.getTransfer(L.map.colorSpace)===Fe,decodeVideoTextureEmissive:Me&&L.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(L.emissiveMap.colorSpace)===Fe,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===oa,flipSided:L.side===Xn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:le&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&L.extensions.multiDraw===!0||wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return an.vertexUv1s=m.has(1),an.vertexUv2s=m.has(2),an.vertexUv3s=m.has(3),m.clear(),an}function _(L){const w=[];if(L.shaderID?w.push(L.shaderID):(w.push(L.customVertexShaderID),w.push(L.customFragmentShaderID)),L.defines!==void 0)for(const k in L.defines)w.push(k),w.push(L.defines[k]);return L.isRawShaderMaterial===!1&&(P(w,L),D(w,L),w.push(s.outputColorSpace)),w.push(L.customProgramCacheKey),w.join()}function P(L,w){L.push(w.precision),L.push(w.outputColorSpace),L.push(w.envMapMode),L.push(w.envMapCubeUVHeight),L.push(w.mapUv),L.push(w.alphaMapUv),L.push(w.lightMapUv),L.push(w.aoMapUv),L.push(w.bumpMapUv),L.push(w.normalMapUv),L.push(w.displacementMapUv),L.push(w.emissiveMapUv),L.push(w.metalnessMapUv),L.push(w.roughnessMapUv),L.push(w.anisotropyMapUv),L.push(w.clearcoatMapUv),L.push(w.clearcoatNormalMapUv),L.push(w.clearcoatRoughnessMapUv),L.push(w.iridescenceMapUv),L.push(w.iridescenceThicknessMapUv),L.push(w.sheenColorMapUv),L.push(w.sheenRoughnessMapUv),L.push(w.specularMapUv),L.push(w.specularColorMapUv),L.push(w.specularIntensityMapUv),L.push(w.transmissionMapUv),L.push(w.thicknessMapUv),L.push(w.combine),L.push(w.fogExp2),L.push(w.sizeAttenuation),L.push(w.morphTargetsCount),L.push(w.morphAttributeCount),L.push(w.numDirLights),L.push(w.numPointLights),L.push(w.numSpotLights),L.push(w.numSpotLightMaps),L.push(w.numHemiLights),L.push(w.numRectAreaLights),L.push(w.numDirLightShadows),L.push(w.numPointLightShadows),L.push(w.numSpotLightShadows),L.push(w.numSpotLightShadowsWithMaps),L.push(w.numLightProbes),L.push(w.shadowMapType),L.push(w.toneMapping),L.push(w.numClippingPlanes),L.push(w.numClipIntersection),L.push(w.depthPacking)}function D(L,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),L.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reverseDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),L.push(d.mask)}function U(L){const w=E[L.type];let k;if(w){const ht=wi[w];k=VE.clone(ht.uniforms)}else k=L.uniforms;return k}function G(L,w){let k;for(let ht=0,ft=g.length;ht<ft;ht++){const Mt=g[ht];if(Mt.cacheKey===w){k=Mt,++k.usedTimes;break}}return k===void 0&&(k=new pR(s,w,L,c),g.push(k)),k}function V(L){if(--L.usedTimes===0){const w=g.indexOf(L);g[w]=g[g.length-1],g.pop(),L.destroy()}}function F(L){p.remove(L)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:U,acquireProgram:G,releaseProgram:V,releaseShaderCache:F,programs:g,dispose:j}}function xR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function yR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function X0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function W0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(x,v,S,E,A,y){let _=s[t];return _===void 0?(_={id:x.id,object:x,geometry:v,material:S,groupOrder:E,renderOrder:x.renderOrder,z:A,group:y},s[t]=_):(_.id=x.id,_.object=x,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=A,_.group=y),t++,_}function d(x,v,S,E,A,y){const _=f(x,v,S,E,A,y);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(x,v,S,E,A,y){const _=f(x,v,S,E,A,y);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function m(x,v){i.length>1&&i.sort(x||yR),r.length>1&&r.sort(v||X0),l.length>1&&l.sort(v||X0)}function g(){for(let x=t,v=s.length;x<v;x++){const S=s[x];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function SR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new W0,s.set(r,[f])):l>=c.length?(f=new W0,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function MR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new $,color:new Se};break;case"SpotLight":i={position:new $,direction:new $,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new $,halfWidth:new $,halfHeight:new $};break}return s[t.id]=i,i}}}function ER(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let bR=0;function TR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function AR(s){const t=new MR,i=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new $);const l=new $,c=new qe,f=new qe;function d(m){let g=0,x=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,A=0,y=0,_=0,P=0,D=0,U=0,G=0,V=0,F=0;m.sort(TR);for(let L=0,w=m.length;L<w;L++){const k=m[L],ht=k.color,ft=k.intensity,Mt=k.distance,gt=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)g+=ht.r*ft,x+=ht.g*ft,v+=ht.b*ft;else if(k.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(k.sh.coefficients[B],ft);F++}else if(k.isDirectionalLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const X=k.shadow,O=i.get(k);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.directionalShadow[S]=O,r.directionalShadowMap[S]=gt,r.directionalShadowMatrix[S]=k.shadow.matrix,P++}r.directional[S]=B,S++}else if(k.isSpotLight){const B=t.get(k);B.position.setFromMatrixPosition(k.matrixWorld),B.color.copy(ht).multiplyScalar(ft),B.distance=Mt,B.coneCos=Math.cos(k.angle),B.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),B.decay=k.decay,r.spot[A]=B;const X=k.shadow;if(k.map&&(r.spotLightMap[G]=k.map,G++,X.updateMatrices(k),k.castShadow&&V++),r.spotLightMatrix[A]=X.matrix,k.castShadow){const O=i.get(k);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.spotShadow[A]=O,r.spotShadowMap[A]=gt,U++}A++}else if(k.isRectAreaLight){const B=t.get(k);B.color.copy(ht).multiplyScalar(ft),B.halfWidth.set(k.width*.5,0,0),B.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=B,y++}else if(k.isPointLight){const B=t.get(k);if(B.color.copy(k.color).multiplyScalar(k.intensity),B.distance=k.distance,B.decay=k.decay,k.castShadow){const X=k.shadow,O=i.get(k);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,r.pointShadow[E]=O,r.pointShadowMap[E]=gt,r.pointShadowMatrix[E]=k.shadow.matrix,D++}r.point[E]=B,E++}else if(k.isHemisphereLight){const B=t.get(k);B.skyColor.copy(k.color).multiplyScalar(ft),B.groundColor.copy(k.groundColor).multiplyScalar(ft),r.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=x,r.ambient[2]=v;const j=r.hash;(j.directionalLength!==S||j.pointLength!==E||j.spotLength!==A||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==P||j.numPointShadows!==D||j.numSpotShadows!==U||j.numSpotMaps!==G||j.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=U,r.spotShadowMap.length=U,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=U+G-V,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=F,j.directionalLength=S,j.pointLength=E,j.spotLength=A,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=P,j.numPointShadows=D,j.numSpotShadows=U,j.numSpotMaps=G,j.numLightProbes=F,r.version=bR++)}function p(m,g){let x=0,v=0,S=0,E=0,A=0;const y=g.matrixWorldInverse;for(let _=0,P=m.length;_<P;_++){const D=m[_];if(D.isDirectionalLight){const U=r.directional[x];U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),x++}else if(D.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),S++}else if(D.isRectAreaLight){const U=r.rectArea[E];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),f.identity(),c.copy(D.matrixWorld),c.premultiply(y),f.extractRotation(c),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const U=r.point[v];U.position.setFromMatrixPosition(D.matrixWorld),U.position.applyMatrix4(y),v++}else if(D.isHemisphereLight){const U=r.hemi[A];U.direction.setFromMatrixPosition(D.matrixWorld),U.direction.transformDirection(y),A++}}}return{setup:d,setupView:p,state:r}}function q0(s){const t=new AR(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function RR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new q0(s),t.set(l,[d])):c>=f.length?(d=new q0(s),f.push(d)):d=f[c],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function DR(s,t,i){let r=new Jd;const l=new he,c=new he,f=new tn,d=new $E({depthPacking:cE}),p=new tb,m={},g=i.maxTextureSize,x={[Ka]:Xn,[Xn]:Ka,[oa]:oa},v=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Qa;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new hi(E,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(V,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||V.length===0)return;const L=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),ht=s.state;ht.setBlending(ja),ht.buffers.color.setClear(1,1,1,1),ht.buffers.depth.setTest(!0),ht.setScissorTest(!1);const ft=_!==sa&&this.type===sa,Mt=_===sa&&this.type!==sa;for(let gt=0,B=V.length;gt<B;gt++){const X=V[gt],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const rt=O.getFrameExtents();if(l.multiply(rt),c.copy(O.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/rt.x),l.x=c.x*rt.x,O.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/rt.y),l.y=c.y*rt.y,O.mapSize.y=c.y)),O.map===null||ft===!0||Mt===!0){const z=this.type!==sa?{minFilter:ei,magFilter:ei}:{};O.map!==null&&O.map.dispose(),O.map=new wr(l.x,l.y,z),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const C=O.getViewportCount();for(let z=0;z<C;z++){const tt=O.getViewport(z);f.set(c.x*tt.x,c.y*tt.y,c.x*tt.z,c.y*tt.w),ht.viewport(f),O.updateMatrices(X,z),r=O.getFrustum(),U(F,j,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===sa&&P(O,j),O.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(L,w,k)};function P(V,F){const j=t.update(A);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new wr(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(F,null,j,v,A,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(F,null,j,S,A,null)}function D(V,F,j,L){let w=null;const k=j.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(k!==void 0)w=k;else if(w=j.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ht=w.uuid,ft=F.uuid;let Mt=m[ht];Mt===void 0&&(Mt={},m[ht]=Mt);let gt=Mt[ft];gt===void 0&&(gt=w.clone(),Mt[ft]=gt,F.addEventListener("dispose",G)),w=gt}if(w.visible=F.visible,w.wireframe=F.wireframe,L===sa?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:x[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,j.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ht=s.properties.get(w);ht.light=j}return w}function U(V,F,j,L,w){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&w===sa)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,V.matrixWorld);const ft=t.update(V),Mt=V.material;if(Array.isArray(Mt)){const gt=ft.groups;for(let B=0,X=gt.length;B<X;B++){const O=gt[B],rt=Mt[O.materialIndex];if(rt&&rt.visible){const C=D(V,rt,L,w);V.onBeforeShadow(s,V,F,j,ft,C,O),s.renderBufferDirect(j,null,ft,C,V,O),V.onAfterShadow(s,V,F,j,ft,C,O)}}}else if(Mt.visible){const gt=D(V,Mt,L,w);V.onBeforeShadow(s,V,F,j,ft,gt,null),s.renderBufferDirect(j,null,ft,gt,V,null),V.onAfterShadow(s,V,F,j,ft,gt,null)}}const ht=V.children;for(let ft=0,Mt=ht.length;ft<Mt;ft++)U(ht[ft],F,j,L,w)}function G(V){V.target.removeEventListener("dispose",G);for(const j in m){const L=m[j],w=V.target.uuid;w in L&&(L[w].dispose(),delete L[w])}}}const UR={[Jh]:$h,[td]:id,[ed]:ad,[Ls]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:Ls};function LR(s,t){function i(){let Y=!1;const Pt=new tn;let dt=null;const yt=new tn(0,0,0,0);return{setMask:function(Bt){dt!==Bt&&!Y&&(s.colorMask(Bt,Bt,Bt,Bt),dt=Bt)},setLocked:function(Bt){Y=Bt},setClear:function(Bt,Ot,le,ke,an){an===!0&&(Bt*=ke,Ot*=ke,le*=ke),Pt.set(Bt,Ot,le,ke),yt.equals(Pt)===!1&&(s.clearColor(Bt,Ot,le,ke),yt.copy(Pt))},reset:function(){Y=!1,dt=null,yt.set(-1,0,0,0)}}}function r(){let Y=!1,Pt=!1,dt=null,yt=null,Bt=null;return{setReversed:function(Ot){if(Pt!==Ot){const le=t.get("EXT_clip_control");Ot?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Pt=Ot;const ke=Bt;Bt=null,this.setClear(ke)}},getReversed:function(){return Pt},setTest:function(Ot){Ot?bt(s.DEPTH_TEST):Et(s.DEPTH_TEST)},setMask:function(Ot){dt!==Ot&&!Y&&(s.depthMask(Ot),dt=Ot)},setFunc:function(Ot){if(Pt&&(Ot=UR[Ot]),yt!==Ot){switch(Ot){case Jh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case td:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ed:s.depthFunc(s.EQUAL);break;case nd:s.depthFunc(s.GEQUAL);break;case id:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}yt=Ot}},setLocked:function(Ot){Y=Ot},setClear:function(Ot){Bt!==Ot&&(Pt&&(Ot=1-Ot),s.clearDepth(Ot),Bt=Ot)},reset:function(){Y=!1,dt=null,yt=null,Bt=null,Pt=!1}}}function l(){let Y=!1,Pt=null,dt=null,yt=null,Bt=null,Ot=null,le=null,ke=null,an=null;return{setTest:function(Ce){Y||(Ce?bt(s.STENCIL_TEST):Et(s.STENCIL_TEST))},setMask:function(Ce){Pt!==Ce&&!Y&&(s.stencilMask(Ce),Pt=Ce)},setFunc:function(Ce,Wn,gn){(dt!==Ce||yt!==Wn||Bt!==gn)&&(s.stencilFunc(Ce,Wn,gn),dt=Ce,yt=Wn,Bt=gn)},setOp:function(Ce,Wn,gn){(Ot!==Ce||le!==Wn||ke!==gn)&&(s.stencilOp(Ce,Wn,gn),Ot=Ce,le=Wn,ke=gn)},setLocked:function(Ce){Y=Ce},setClear:function(Ce){an!==Ce&&(s.clearStencil(Ce),an=Ce)},reset:function(){Y=!1,Pt=null,dt=null,yt=null,Bt=null,Ot=null,le=null,ke=null,an=null}}}const c=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},x={},v=new WeakMap,S=[],E=null,A=!1,y=null,_=null,P=null,D=null,U=null,G=null,V=null,F=new Se(0,0,0),j=0,L=!1,w=null,k=null,ht=null,ft=null,Mt=null;const gt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,X=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=X>=2);let rt=null,C={};const z=s.getParameter(s.SCISSOR_BOX),tt=s.getParameter(s.VIEWPORT),lt=new tn().fromArray(z),W=new tn().fromArray(tt);function it(Y,Pt,dt,yt){const Bt=new Uint8Array(4),Ot=s.createTexture();s.bindTexture(Y,Ot),s.texParameteri(Y,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Y,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<dt;le++)Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?s.texImage3D(Pt,0,s.RGBA,1,1,yt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(Pt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return Ot}const st={};st[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),st[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),st[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),st[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),bt(s.DEPTH_TEST),f.setFunc(Ls),jt(!1),Wt(X_),bt(s.CULL_FACE),H(ja);function bt(Y){g[Y]!==!0&&(s.enable(Y),g[Y]=!0)}function Et(Y){g[Y]!==!1&&(s.disable(Y),g[Y]=!1)}function zt(Y,Pt){return x[Y]!==Pt?(s.bindFramebuffer(Y,Pt),x[Y]=Pt,Y===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Pt),Y===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Pt),!0):!1}function wt(Y,Pt){let dt=S,yt=!1;if(Y){dt=v.get(Pt),dt===void 0&&(dt=[],v.set(Pt,dt));const Bt=Y.textures;if(dt.length!==Bt.length||dt[0]!==s.COLOR_ATTACHMENT0){for(let Ot=0,le=Bt.length;Ot<le;Ot++)dt[Ot]=s.COLOR_ATTACHMENT0+Ot;dt.length=Bt.length,yt=!0}}else dt[0]!==s.BACK&&(dt[0]=s.BACK,yt=!0);yt&&s.drawBuffers(dt)}function ge(Y){return E!==Y?(s.useProgram(Y),E=Y,!0):!1}const re={[br]:s.FUNC_ADD,[OM]:s.FUNC_SUBTRACT,[IM]:s.FUNC_REVERSE_SUBTRACT};re[BM]=s.MIN,re[zM]=s.MAX;const oe={[FM]:s.ZERO,[HM]:s.ONE,[GM]:s.SRC_COLOR,[Kh]:s.SRC_ALPHA,[YM]:s.SRC_ALPHA_SATURATE,[WM]:s.DST_COLOR,[kM]:s.DST_ALPHA,[VM]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[qM]:s.ONE_MINUS_DST_COLOR,[XM]:s.ONE_MINUS_DST_ALPHA,[jM]:s.CONSTANT_COLOR,[ZM]:s.ONE_MINUS_CONSTANT_COLOR,[KM]:s.CONSTANT_ALPHA,[QM]:s.ONE_MINUS_CONSTANT_ALPHA};function H(Y,Pt,dt,yt,Bt,Ot,le,ke,an,Ce){if(Y===ja){A===!0&&(Et(s.BLEND),A=!1);return}if(A===!1&&(bt(s.BLEND),A=!0),Y!==PM){if(Y!==y||Ce!==L){if((_!==br||U!==br)&&(s.blendEquation(s.FUNC_ADD),_=br,U=br),Ce)switch(Y){case Ds:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ds:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",Y);break}P=null,D=null,G=null,V=null,F.set(0,0,0),j=0,y=Y,L=Ce}return}Bt=Bt||Pt,Ot=Ot||dt,le=le||yt,(Pt!==_||Bt!==U)&&(s.blendEquationSeparate(re[Pt],re[Bt]),_=Pt,U=Bt),(dt!==P||yt!==D||Ot!==G||le!==V)&&(s.blendFuncSeparate(oe[dt],oe[yt],oe[Ot],oe[le]),P=dt,D=yt,G=Ot,V=le),(ke.equals(F)===!1||an!==j)&&(s.blendColor(ke.r,ke.g,ke.b,an),F.copy(ke),j=an),y=Y,L=!1}function Re(Y,Pt){Y.side===oa?Et(s.CULL_FACE):bt(s.CULL_FACE);let dt=Y.side===Xn;Pt&&(dt=!dt),jt(dt),Y.blending===Ds&&Y.transparent===!1?H(ja):H(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),f.setFunc(Y.depthFunc),f.setTest(Y.depthTest),f.setMask(Y.depthWrite),c.setMask(Y.colorWrite);const yt=Y.stencilWrite;d.setTest(yt),yt&&(d.setMask(Y.stencilWriteMask),d.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),d.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Me(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?bt(s.SAMPLE_ALPHA_TO_COVERAGE):Et(s.SAMPLE_ALPHA_TO_COVERAGE)}function jt(Y){w!==Y&&(Y?s.frontFace(s.CW):s.frontFace(s.CCW),w=Y)}function Wt(Y){Y!==UM?(bt(s.CULL_FACE),Y!==k&&(Y===X_?s.cullFace(s.BACK):Y===LM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Et(s.CULL_FACE),k=Y}function Xt(Y){Y!==ht&&(B&&s.lineWidth(Y),ht=Y)}function Me(Y,Pt,dt){Y?(bt(s.POLYGON_OFFSET_FILL),(ft!==Pt||Mt!==dt)&&(s.polygonOffset(Pt,dt),ft=Pt,Mt=dt)):Et(s.POLYGON_OFFSET_FILL)}function kt(Y){Y?bt(s.SCISSOR_TEST):Et(s.SCISSOR_TEST)}function N(Y){Y===void 0&&(Y=s.TEXTURE0+gt-1),rt!==Y&&(s.activeTexture(Y),rt=Y)}function b(Y,Pt,dt){dt===void 0&&(rt===null?dt=s.TEXTURE0+gt-1:dt=rt);let yt=C[dt];yt===void 0&&(yt={type:void 0,texture:void 0},C[dt]=yt),(yt.type!==Y||yt.texture!==Pt)&&(rt!==dt&&(s.activeTexture(dt),rt=dt),s.bindTexture(Y,Pt||st[Y]),yt.type=Y,yt.texture=Pt)}function nt(){const Y=C[rt];Y!==void 0&&Y.type!==void 0&&(s.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function vt(){try{s.compressedTexImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Tt(){try{s.compressedTexImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function pt(){try{s.texSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Dt(){try{s.texSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ct(){try{s.compressedTexSubImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Kt(){try{s.texStorage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function At(){try{s.texStorage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Ht(){try{s.texImage2D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Zt(){try{s.texImage3D(...arguments)}catch(Y){console.error("THREE.WebGLState:",Y)}}function Qt(Y){lt.equals(Y)===!1&&(s.scissor(Y.x,Y.y,Y.z,Y.w),lt.copy(Y))}function It(Y){W.equals(Y)===!1&&(s.viewport(Y.x,Y.y,Y.z,Y.w),W.copy(Y))}function ce(Y,Pt){let dt=m.get(Pt);dt===void 0&&(dt=new WeakMap,m.set(Pt,dt));let yt=dt.get(Y);yt===void 0&&(yt=s.getUniformBlockIndex(Pt,Y.name),dt.set(Y,yt))}function ne(Y,Pt){const yt=m.get(Pt).get(Y);p.get(Pt)!==yt&&(s.uniformBlockBinding(Pt,yt,Y.__bindingPointIndex),p.set(Pt,yt))}function Ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},rt=null,C={},x={},v=new WeakMap,S=[],E=null,A=!1,y=null,_=null,P=null,D=null,U=null,G=null,V=null,F=new Se(0,0,0),j=0,L=!1,w=null,k=null,ht=null,ft=null,Mt=null,lt.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:bt,disable:Et,bindFramebuffer:zt,drawBuffers:wt,useProgram:ge,setBlending:H,setMaterial:Re,setFlipSided:jt,setCullFace:Wt,setLineWidth:Xt,setPolygonOffset:Me,setScissorTest:kt,activeTexture:N,bindTexture:b,unbindTexture:nt,compressedTexImage2D:vt,compressedTexImage3D:Tt,texImage2D:Ht,texImage3D:Zt,updateUBOMapping:ce,uniformBlockBinding:ne,texStorage2D:Kt,texStorage3D:At,texSubImage2D:pt,texSubImage3D:Dt,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ft,scissor:Qt,viewport:It,reset:Ne}}function NR(s,t,i,r,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,g=new WeakMap;let x;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):Jc("canvas")}function A(N,b,nt){let vt=1;const Tt=kt(N);if((Tt.width>nt||Tt.height>nt)&&(vt=nt/Math.max(Tt.width,Tt.height)),vt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(vt*Tt.width),Dt=Math.floor(vt*Tt.height);x===void 0&&(x=E(pt,Dt));const Ct=b?E(pt,Dt):x;return Ct.width=pt,Ct.height=Dt,Ct.getContext("2d").drawImage(N,0,0,pt,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+pt+"x"+Dt+")."),Ct}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),N;return N}function y(N){return N.generateMipmaps}function _(N){s.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?s.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(N,b,nt,vt,Tt=!1){if(N!==null){if(s[N]!==void 0)return s[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=b;if(b===s.RED&&(nt===s.FLOAT&&(pt=s.R32F),nt===s.HALF_FLOAT&&(pt=s.R16F),nt===s.UNSIGNED_BYTE&&(pt=s.R8)),b===s.RED_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.R8UI),nt===s.UNSIGNED_SHORT&&(pt=s.R16UI),nt===s.UNSIGNED_INT&&(pt=s.R32UI),nt===s.BYTE&&(pt=s.R8I),nt===s.SHORT&&(pt=s.R16I),nt===s.INT&&(pt=s.R32I)),b===s.RG&&(nt===s.FLOAT&&(pt=s.RG32F),nt===s.HALF_FLOAT&&(pt=s.RG16F),nt===s.UNSIGNED_BYTE&&(pt=s.RG8)),b===s.RG_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RG8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RG16UI),nt===s.UNSIGNED_INT&&(pt=s.RG32UI),nt===s.BYTE&&(pt=s.RG8I),nt===s.SHORT&&(pt=s.RG16I),nt===s.INT&&(pt=s.RG32I)),b===s.RGB_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGB8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGB16UI),nt===s.UNSIGNED_INT&&(pt=s.RGB32UI),nt===s.BYTE&&(pt=s.RGB8I),nt===s.SHORT&&(pt=s.RGB16I),nt===s.INT&&(pt=s.RGB32I)),b===s.RGBA_INTEGER&&(nt===s.UNSIGNED_BYTE&&(pt=s.RGBA8UI),nt===s.UNSIGNED_SHORT&&(pt=s.RGBA16UI),nt===s.UNSIGNED_INT&&(pt=s.RGBA32UI),nt===s.BYTE&&(pt=s.RGBA8I),nt===s.SHORT&&(pt=s.RGBA16I),nt===s.INT&&(pt=s.RGBA32I)),b===s.RGB&&nt===s.UNSIGNED_INT_5_9_9_9_REV&&(pt=s.RGB9_E5),b===s.RGBA){const Dt=Tt?Kc:Ue.getTransfer(vt);nt===s.FLOAT&&(pt=s.RGBA32F),nt===s.HALF_FLOAT&&(pt=s.RGBA16F),nt===s.UNSIGNED_BYTE&&(pt=Dt===Fe?s.SRGB8_ALPHA8:s.RGBA8),nt===s.UNSIGNED_SHORT_4_4_4_4&&(pt=s.RGBA4),nt===s.UNSIGNED_SHORT_5_5_5_1&&(pt=s.RGB5_A1)}return(pt===s.R16F||pt===s.R32F||pt===s.RG16F||pt===s.RG32F||pt===s.RGBA16F||pt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function U(N,b){let nt;return N?b===null||b===Cr||b===Yo?nt=s.DEPTH24_STENCIL8:b===Ui?nt=s.DEPTH32F_STENCIL8:b===qo&&(nt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Cr||b===Yo?nt=s.DEPTH_COMPONENT24:b===Ui?nt=s.DEPTH_COMPONENT32F:b===qo&&(nt=s.DEPTH_COMPONENT16),nt}function G(N,b){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==ei&&N.minFilter!==Di?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function V(N){const b=N.target;b.removeEventListener("dispose",V),j(b),b.isVideoTexture&&g.delete(b)}function F(N){const b=N.target;b.removeEventListener("dispose",F),w(b)}function j(N){const b=r.get(N);if(b.__webglInit===void 0)return;const nt=N.source,vt=v.get(nt);if(vt){const Tt=vt[b.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&L(N),Object.keys(vt).length===0&&v.delete(nt)}r.remove(N)}function L(N){const b=r.get(N);s.deleteTexture(b.__webglTexture);const nt=N.source,vt=v.get(nt);delete vt[b.__cacheKey],f.memory.textures--}function w(N){const b=r.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),r.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(b.__webglFramebuffer[vt]))for(let Tt=0;Tt<b.__webglFramebuffer[vt].length;Tt++)s.deleteFramebuffer(b.__webglFramebuffer[vt][Tt]);else s.deleteFramebuffer(b.__webglFramebuffer[vt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[vt])}else{if(Array.isArray(b.__webglFramebuffer))for(let vt=0;vt<b.__webglFramebuffer.length;vt++)s.deleteFramebuffer(b.__webglFramebuffer[vt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let vt=0;vt<b.__webglColorRenderbuffer.length;vt++)b.__webglColorRenderbuffer[vt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[vt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const nt=N.textures;for(let vt=0,Tt=nt.length;vt<Tt;vt++){const pt=r.get(nt[vt]);pt.__webglTexture&&(s.deleteTexture(pt.__webglTexture),f.memory.textures--),r.remove(nt[vt])}r.remove(N)}let k=0;function ht(){k=0}function ft(){const N=k;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),k+=1,N}function Mt(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function gt(N,b){const nt=r.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&nt.__version!==N.version){const vt=N.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(nt,N,b);return}}i.bindTexture(s.TEXTURE_2D,nt.__webglTexture,s.TEXTURE0+b)}function B(N,b){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){W(nt,N,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,nt.__webglTexture,s.TEXTURE0+b)}function X(N,b){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){W(nt,N,b);return}i.bindTexture(s.TEXTURE_3D,nt.__webglTexture,s.TEXTURE0+b)}function O(N,b){const nt=r.get(N);if(N.version>0&&nt.__version!==N.version){it(nt,N,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture,s.TEXTURE0+b)}const rt={[od]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[ld]:s.MIRRORED_REPEAT},C={[ei]:s.NEAREST,[oE]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[Di]:s.LINEAR,[gh]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},z={[fE]:s.NEVER,[_E]:s.ALWAYS,[hE]:s.LESS,[Ev]:s.LEQUAL,[dE]:s.EQUAL,[gE]:s.GEQUAL,[pE]:s.GREATER,[mE]:s.NOTEQUAL};function tt(N,b){if(b.type===Ui&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Di||b.magFilter===gh||b.magFilter===mc||b.magFilter===Rr||b.minFilter===Di||b.minFilter===gh||b.minFilter===mc||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(N,s.TEXTURE_WRAP_S,rt[b.wrapS]),s.texParameteri(N,s.TEXTURE_WRAP_T,rt[b.wrapT]),(N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY)&&s.texParameteri(N,s.TEXTURE_WRAP_R,rt[b.wrapR]),s.texParameteri(N,s.TEXTURE_MAG_FILTER,C[b.magFilter]),s.texParameteri(N,s.TEXTURE_MIN_FILTER,C[b.minFilter]),b.compareFunction&&(s.texParameteri(N,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(N,s.TEXTURE_COMPARE_FUNC,z[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==mc&&b.minFilter!==Rr||b.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const nt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(N,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function lt(N,b){let nt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",V));const vt=b.source;let Tt=v.get(vt);Tt===void 0&&(Tt={},v.set(vt,Tt));const pt=Mt(b);if(pt!==N.__cacheKey){Tt[pt]===void 0&&(Tt[pt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,nt=!0),Tt[pt].usedTimes++;const Dt=Tt[N.__cacheKey];Dt!==void 0&&(Tt[N.__cacheKey].usedTimes--,Dt.usedTimes===0&&L(b)),N.__cacheKey=pt,N.__webglTexture=Tt[pt].texture}return nt}function W(N,b,nt){let vt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(vt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(vt=s.TEXTURE_3D);const Tt=lt(N,b),pt=b.source;i.bindTexture(vt,N.__webglTexture,s.TEXTURE0+nt);const Dt=r.get(pt);if(pt.version!==Dt.__version||Tt===!0){i.activeTexture(s.TEXTURE0+nt);const Ct=Ue.getPrimaries(Ue.workingColorSpace),Ft=b.colorSpace===Ya?null:Ue.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ya||Ct===Ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let At=A(b.image,!1,l.maxTextureSize);At=Me(b,At);const Ht=c.convert(b.format,b.colorSpace),Zt=c.convert(b.type);let Qt=D(b.internalFormat,Ht,Zt,b.colorSpace,b.isVideoTexture);tt(vt,b);let It;const ce=b.mipmaps,ne=b.isVideoTexture!==!0,Ne=Dt.__version===void 0||Tt===!0,Y=pt.dataReady,Pt=G(b,At);if(b.isDepthTexture)Qt=U(b.format===Zo,b.type),Ne&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,At.width,At.height):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ht,Zt,null));else if(b.isDataTexture)if(ce.length>0){ne&&Ne&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let dt=0,yt=ce.length;dt<yt;dt++)It=ce[dt],ne?Y&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,Ht,Zt,It.data):i.texImage2D(s.TEXTURE_2D,dt,Qt,It.width,It.height,0,Ht,Zt,It.data);b.generateMipmaps=!1}else ne?(Ne&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,At.width,At.height),Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,At.width,At.height,Ht,Zt,At.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,At.width,At.height,0,Ht,Zt,At.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Qt,ce[0].width,ce[0].height,At.depth);for(let dt=0,yt=ce.length;dt<yt;dt++)if(It=ce[dt],b.format!==yi)if(Ht!==null)if(ne){if(Y)if(b.layerUpdates.size>0){const Bt=M0(It.width,It.height,b.format,b.type);for(const Ot of b.layerUpdates){const le=It.data.subarray(Ot*Bt/It.data.BYTES_PER_ELEMENT,(Ot+1)*Bt/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,Ot,It.width,It.height,1,Ht,le)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,It.width,It.height,At.depth,Ht,It.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,dt,Qt,It.width,It.height,At.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Y&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,dt,0,0,0,It.width,It.height,At.depth,Ht,Zt,It.data):i.texImage3D(s.TEXTURE_2D_ARRAY,dt,Qt,It.width,It.height,At.depth,0,Ht,Zt,It.data)}else{ne&&Ne&&i.texStorage2D(s.TEXTURE_2D,Pt,Qt,ce[0].width,ce[0].height);for(let dt=0,yt=ce.length;dt<yt;dt++)It=ce[dt],b.format!==yi?Ht!==null?ne?Y&&i.compressedTexSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,Ht,It.data):i.compressedTexImage2D(s.TEXTURE_2D,dt,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Y&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,It.width,It.height,Ht,Zt,It.data):i.texImage2D(s.TEXTURE_2D,dt,Qt,It.width,It.height,0,Ht,Zt,It.data)}else if(b.isDataArrayTexture)if(ne){if(Ne&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Pt,Qt,At.width,At.height,At.depth),Y)if(b.layerUpdates.size>0){const dt=M0(At.width,At.height,b.format,b.type);for(const yt of b.layerUpdates){const Bt=At.data.subarray(yt*dt/At.data.BYTES_PER_ELEMENT,(yt+1)*dt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,yt,At.width,At.height,1,Ht,Zt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ht,Zt,At.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,At.width,At.height,At.depth,0,Ht,Zt,At.data);else if(b.isData3DTexture)ne?(Ne&&i.texStorage3D(s.TEXTURE_3D,Pt,Qt,At.width,At.height,At.depth),Y&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ht,Zt,At.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,At.width,At.height,At.depth,0,Ht,Zt,At.data);else if(b.isFramebufferTexture){if(Ne)if(ne)i.texStorage2D(s.TEXTURE_2D,Pt,Qt,At.width,At.height);else{let dt=At.width,yt=At.height;for(let Bt=0;Bt<Pt;Bt++)i.texImage2D(s.TEXTURE_2D,Bt,Qt,dt,yt,0,Ht,Zt,null),dt>>=1,yt>>=1}}else if(ce.length>0){if(ne&&Ne){const dt=kt(ce[0]);i.texStorage2D(s.TEXTURE_2D,Pt,Qt,dt.width,dt.height)}for(let dt=0,yt=ce.length;dt<yt;dt++)It=ce[dt],ne?Y&&i.texSubImage2D(s.TEXTURE_2D,dt,0,0,Ht,Zt,It):i.texImage2D(s.TEXTURE_2D,dt,Qt,Ht,Zt,It);b.generateMipmaps=!1}else if(ne){if(Ne){const dt=kt(At);i.texStorage2D(s.TEXTURE_2D,Pt,Qt,dt.width,dt.height)}Y&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Zt,At)}else i.texImage2D(s.TEXTURE_2D,0,Qt,Ht,Zt,At);y(b)&&_(vt),Dt.__version=pt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function it(N,b,nt){if(b.image.length!==6)return;const vt=lt(N,b),Tt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+nt);const pt=r.get(Tt);if(Tt.version!==pt.__version||vt===!0){i.activeTexture(s.TEXTURE0+nt);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Ct=b.colorSpace===Ya?null:Ue.getPrimaries(b.colorSpace),Ft=b.colorSpace===Ya||Dt===Ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,At=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let yt=0;yt<6;yt++)!Kt&&!At?Ht[yt]=A(b.image[yt],!0,l.maxCubemapSize):Ht[yt]=At?b.image[yt].image:b.image[yt],Ht[yt]=Me(b,Ht[yt]);const Zt=Ht[0],Qt=c.convert(b.format,b.colorSpace),It=c.convert(b.type),ce=D(b.internalFormat,Qt,It,b.colorSpace),ne=b.isVideoTexture!==!0,Ne=pt.__version===void 0||vt===!0,Y=Tt.dataReady;let Pt=G(b,Zt);tt(s.TEXTURE_CUBE_MAP,b);let dt;if(Kt){ne&&Ne&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ce,Zt.width,Zt.height);for(let yt=0;yt<6;yt++){dt=Ht[yt].mipmaps;for(let Bt=0;Bt<dt.length;Bt++){const Ot=dt[Bt];b.format!==yi?Qt!==null?ne?Y&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Ot.width,Ot.height,Qt,Ot.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ce,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,0,0,Ot.width,Ot.height,Qt,It,Ot.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt,ce,Ot.width,Ot.height,0,Qt,It,Ot.data)}}}else{if(dt=b.mipmaps,ne&&Ne){dt.length>0&&Pt++;const yt=kt(Ht[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Pt,ce,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(At){ne?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ht[yt].width,Ht[yt].height,Qt,It,Ht[yt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ce,Ht[yt].width,Ht[yt].height,0,Qt,It,Ht[yt].data);for(let Bt=0;Bt<dt.length;Bt++){const le=dt[Bt].image[yt].image;ne?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,le.width,le.height,Qt,It,le.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ce,le.width,le.height,0,Qt,It,le.data)}}else{ne?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Qt,It,Ht[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ce,Qt,It,Ht[yt]);for(let Bt=0;Bt<dt.length;Bt++){const Ot=dt[Bt];ne?Y&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,0,0,Qt,It,Ot.image[yt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Bt+1,ce,Qt,It,Ot.image[yt])}}}y(b)&&_(s.TEXTURE_CUBE_MAP),pt.__version=Tt.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function st(N,b,nt,vt,Tt,pt){const Dt=c.convert(nt.format,nt.colorSpace),Ct=c.convert(nt.type),Ft=D(nt.internalFormat,Dt,Ct,nt.colorSpace),Kt=r.get(b),At=r.get(nt);if(At.__renderTarget=b,!Kt.__hasExternalTextures){const Ht=Math.max(1,b.width>>pt),Zt=Math.max(1,b.height>>pt);Tt===s.TEXTURE_3D||Tt===s.TEXTURE_2D_ARRAY?i.texImage3D(Tt,pt,Ft,Ht,Zt,b.depth,0,Dt,Ct,null):i.texImage2D(Tt,pt,Ft,Ht,Zt,0,Dt,Ct,null)}i.bindFramebuffer(s.FRAMEBUFFER,N),Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,vt,Tt,At.__webglTexture,0,jt(b)):(Tt===s.TEXTURE_2D||Tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,vt,Tt,At.__webglTexture,pt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(N,b,nt){if(s.bindRenderbuffer(s.RENDERBUFFER,N),b.depthBuffer){const vt=b.depthTexture,Tt=vt&&vt.isDepthTexture?vt.type:null,pt=U(b.stencilBuffer,Tt),Dt=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=jt(b);Wt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct,pt,b.width,b.height):nt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct,pt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,pt,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Dt,s.RENDERBUFFER,N)}else{const vt=b.textures;for(let Tt=0;Tt<vt.length;Tt++){const pt=vt[Tt],Dt=c.convert(pt.format,pt.colorSpace),Ct=c.convert(pt.type),Ft=D(pt.internalFormat,Dt,Ct,pt.colorSpace),Kt=jt(b);nt&&Wt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Ft,b.width,b.height):Wt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,Ft,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ft,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Et(N,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(b.depthTexture);vt.__renderTarget=b,(!vt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),gt(b.depthTexture,0);const Tt=vt.__webglTexture,pt=jt(b);if(b.depthTexture.format===jo)Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Tt,0);else if(b.depthTexture.format===Zo)Wt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0,pt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function zt(N){const b=r.get(N),nt=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const vt=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),vt){const Tt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,vt.removeEventListener("dispose",Tt)};vt.addEventListener("dispose",Tt),b.__depthDisposeCallback=Tt}b.__boundDepthTexture=vt}if(N.depthTexture&&!b.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const vt=N.texture.mipmaps;vt&&vt.length>0?Et(b.__webglFramebuffer[0],N):Et(b.__webglFramebuffer,N)}else if(nt){b.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[vt]),b.__webglDepthbuffer[vt]===void 0)b.__webglDepthbuffer[vt]=s.createRenderbuffer(),bt(b.__webglDepthbuffer[vt],N,!1);else{const Tt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer[vt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,pt)}}else{const vt=N.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),bt(b.__webglDepthbuffer,N,!1);else{const Tt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Tt,s.RENDERBUFFER,pt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(N,b,nt){const vt=r.get(N);b!==void 0&&st(vt.__webglFramebuffer,N,N.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),nt!==void 0&&zt(N)}function ge(N){const b=N.texture,nt=r.get(N),vt=r.get(b);N.addEventListener("dispose",F);const Tt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,Dt=Tt.length>1;if(Dt||(vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture()),vt.__version=b.version,f.memory.textures++),pt){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)nt.__webglFramebuffer[Ct][Ft]=s.createFramebuffer()}else nt.__webglFramebuffer[Ct]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<b.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=s.createFramebuffer()}else nt.__webglFramebuffer=s.createFramebuffer();if(Dt)for(let Ct=0,Ft=Tt.length;Ct<Ft;Ct++){const Kt=r.get(Tt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),f.memory.textures++)}if(N.samples>0&&Wt(N)===!1){nt.__webglMultisampledFramebuffer=s.createFramebuffer(),nt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<Tt.length;Ct++){const Ft=Tt[Ct];nt.__webglColorRenderbuffer[Ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const Kt=c.convert(Ft.format,Ft.colorSpace),At=c.convert(Ft.type),Ht=D(Ft.internalFormat,Kt,At,Ft.colorSpace,N.isXRRenderTarget===!0),Zt=jt(N);s.renderbufferStorageMultisample(s.RENDERBUFFER,Zt,Ht,N.width,N.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ct,s.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),N.depthBuffer&&(nt.__webglDepthRenderbuffer=s.createRenderbuffer(),bt(nt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){i.bindTexture(s.TEXTURE_CUBE_MAP,vt.__webglTexture),tt(s.TEXTURE_CUBE_MAP,b);for(let Ct=0;Ct<6;Ct++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)st(nt.__webglFramebuffer[Ct][Ft],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,Ft);else st(nt.__webglFramebuffer[Ct],N,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Dt){for(let Ct=0,Ft=Tt.length;Ct<Ft;Ct++){const Kt=Tt[Ct],At=r.get(Kt);i.bindTexture(s.TEXTURE_2D,At.__webglTexture),tt(s.TEXTURE_2D,Kt),st(nt.__webglFramebuffer,N,Kt,s.COLOR_ATTACHMENT0+Ct,s.TEXTURE_2D,0),y(Kt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Ct=s.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ct,vt.__webglTexture),tt(Ct,b),b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)st(nt.__webglFramebuffer[Ft],N,b,s.COLOR_ATTACHMENT0,Ct,Ft);else st(nt.__webglFramebuffer,N,b,s.COLOR_ATTACHMENT0,Ct,0);y(b)&&_(Ct),i.unbindTexture()}N.depthBuffer&&zt(N)}function re(N){const b=N.textures;for(let nt=0,vt=b.length;nt<vt;nt++){const Tt=b[nt];if(y(Tt)){const pt=P(N),Dt=r.get(Tt).__webglTexture;i.bindTexture(pt,Dt),_(pt),i.unbindTexture()}}}const oe=[],H=[];function Re(N){if(N.samples>0){if(Wt(N)===!1){const b=N.textures,nt=N.width,vt=N.height;let Tt=s.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=r.get(N),Ct=b.length>1;if(Ct)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer);const Ft=N.texture.mipmaps;Ft&&Ft.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(Tt|=s.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(Tt|=s.STENCIL_BUFFER_BIT)),Ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Kt]);const At=r.get(b[Kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,At,0)}s.blitFramebuffer(0,0,nt,vt,0,0,nt,vt,Tt,s.NEAREST),p===!0&&(oe.length=0,H.length=0,oe.push(s.COLOR_ATTACHMENT0+Kt),N.depthBuffer&&N.resolveDepthBuffer===!1&&(oe.push(pt),H.push(pt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,oe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,Dt.__webglColorRenderbuffer[Kt]);const At=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Dt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,At,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const b=N.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function jt(N){return Math.min(l.maxSamples,N.samples)}function Wt(N){const b=r.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Xt(N){const b=f.render.frame;g.get(N)!==b&&(g.set(N,b),N.update())}function Me(N,b){const nt=N.colorSpace,vt=N.format,Tt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||nt!==Os&&nt!==Ya&&(Ue.getTransfer(nt)===Fe?(vt!==yi||Tt!==Ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),b}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=ft,this.resetTextureUnits=ht,this.setTexture2D=gt,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=wt,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=re,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=Wt}function PR(s,t){function i(r,l=Ya){let c;const f=Ue.getTransfer(l);if(r===Ni)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.BYTE;if(r===gv)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===Xd)return s.INT;if(r===Cr)return s.UNSIGNED_INT;if(r===Ui)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===vv)return s.ALPHA;if(r===xv)return s.RGB;if(r===yi)return s.RGBA;if(r===jo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===Yd)return s.RED;if(r===jd)return s.RED_INTEGER;if(r===yv)return s.RG;if(r===Zd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(f===Fe)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return f===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd||r===Cd||r===wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===yd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return f===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wc||r===Dd||r===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Wc)return f===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sv||r===Ld||r===Nd||r===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new In,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ha({vertexShader:OR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new au(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zR extends Nr{constructor(t,i){super();const r=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,x=null,v=null,S=null,E=null;const A=new BR,y=i.getContextAttributes();let _=null,P=null;const D=[],U=[],G=new he;let V=null;const F=new fi;F.viewport=new tn;const j=new fi;j.viewport=new tn;const L=[F,j],w=new ab;let k=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let it=D[W];return it===void 0&&(it=new Bh,D[W]=it),it.getTargetRaySpace()},this.getControllerGrip=function(W){let it=D[W];return it===void 0&&(it=new Bh,D[W]=it),it.getGripSpace()},this.getHand=function(W){let it=D[W];return it===void 0&&(it=new Bh,D[W]=it),it.getHandSpace()};function ft(W){const it=U.indexOf(W.inputSource);if(it===-1)return;const st=D[it];st!==void 0&&(st.update(W.inputSource,W.frame,m||f),st.dispatchEvent({type:W.type,data:W.inputSource}))}function Mt(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",Mt),l.removeEventListener("inputsourceschange",gt);for(let W=0;W<D.length;W++){const it=U[W];it!==null&&(U[W]=null,D[W].disconnect(it))}k=null,ht=null,A.reset(),t.setRenderTarget(_),S=null,v=null,x=null,l=null,P=null,lt.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(G.width,G.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){c=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){d=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(W){m=W},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(W){if(l=W,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",Mt),l.addEventListener("inputsourceschange",gt),y.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(G),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,bt=null,Et=null;y.depth&&(Et=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,st=y.stencil?Zo:jo,bt=y.stencil?Yo:Cr);const zt={colorFormat:i.RGBA8,depthFormat:Et,scaleFactor:c};x=new XRWebGLBinding(l,i),v=x.createProjectionLayer(zt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),P=new wr(v.textureWidth,v.textureHeight,{format:yi,type:Ni,depthTexture:new Ov(v.textureWidth,v.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const st={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,st),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new wr(S.framebufferWidth,S.framebufferHeight,{format:yi,type:Ni,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),lt.setContext(l),lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function gt(W){for(let it=0;it<W.removed.length;it++){const st=W.removed[it],bt=U.indexOf(st);bt>=0&&(U[bt]=null,D[bt].disconnect(st))}for(let it=0;it<W.added.length;it++){const st=W.added[it];let bt=U.indexOf(st);if(bt===-1){for(let zt=0;zt<D.length;zt++)if(zt>=U.length){U.push(st),bt=zt;break}else if(U[zt]===null){U[zt]=st,bt=zt;break}if(bt===-1)break}const Et=D[bt];Et&&Et.connect(st)}}const B=new $,X=new $;function O(W,it,st){B.setFromMatrixPosition(it.matrixWorld),X.setFromMatrixPosition(st.matrixWorld);const bt=B.distanceTo(X),Et=it.projectionMatrix.elements,zt=st.projectionMatrix.elements,wt=Et[14]/(Et[10]-1),ge=Et[14]/(Et[10]+1),re=(Et[9]+1)/Et[5],oe=(Et[9]-1)/Et[5],H=(Et[8]-1)/Et[0],Re=(zt[8]+1)/zt[0],jt=wt*H,Wt=wt*Re,Xt=bt/(-H+Re),Me=Xt*-H;if(it.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Me),W.translateZ(Xt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Et[10]===-1)W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const kt=wt+Xt,N=ge+Xt,b=jt-Me,nt=Wt+(bt-Me),vt=re*ge/N*kt,Tt=oe*ge/N*kt;W.projectionMatrix.makePerspective(b,nt,vt,Tt,kt,N),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function rt(W,it){it===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(it.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(l===null)return;let it=W.near,st=W.far;A.texture!==null&&(A.depthNear>0&&(it=A.depthNear),A.depthFar>0&&(st=A.depthFar)),w.near=j.near=F.near=it,w.far=j.far=F.far=st,(k!==w.near||ht!==w.far)&&(l.updateRenderState({depthNear:w.near,depthFar:w.far}),k=w.near,ht=w.far),F.layers.mask=W.layers.mask|2,j.layers.mask=W.layers.mask|4,w.layers.mask=F.layers.mask|j.layers.mask;const bt=W.parent,Et=w.cameras;rt(w,bt);for(let zt=0;zt<Et.length;zt++)rt(Et[zt],bt);Et.length===2?O(w,F,j):w.projectionMatrix.copy(F.projectionMatrix),C(W,w,bt)};function C(W,it,st){st===null?W.matrix.copy(it.matrixWorld):(W.matrix.copy(st.matrixWorld),W.matrix.invert(),W.matrix.multiply(it.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(it.projectionMatrix),W.projectionMatrixInverse.copy(it.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Od*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(W){p=W,v!==null&&(v.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(w)};let z=null;function tt(W,it){if(g=it.getViewerPose(m||f),E=it,g!==null){const st=g.views;S!==null&&(t.setRenderTargetFramebuffer(P,S.framebuffer),t.setRenderTarget(P));let bt=!1;st.length!==w.cameras.length&&(w.cameras.length=0,bt=!0);for(let wt=0;wt<st.length;wt++){const ge=st[wt];let re=null;if(S!==null)re=S.getViewport(ge);else{const H=x.getViewSubImage(v,ge);re=H.viewport,wt===0&&(t.setRenderTargetTextures(P,H.colorTexture,H.depthStencilTexture),t.setRenderTarget(P))}let oe=L[wt];oe===void 0&&(oe=new fi,oe.layers.enable(wt),oe.viewport=new tn,L[wt]=oe),oe.matrix.fromArray(ge.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(ge.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(re.x,re.y,re.width,re.height),wt===0&&(w.matrix.copy(oe.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),bt===!0&&w.cameras.push(oe)}const Et=l.enabledFeatures;if(Et&&Et.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&x){const wt=x.getDepthInformation(st[0]);wt&&wt.isValid&&wt.texture&&A.init(t,wt,l.renderState)}}for(let st=0;st<D.length;st++){const bt=U[st],Et=D[st];bt!==null&&Et!==void 0&&Et.update(bt,it,m||f)}z&&z(W,it),it.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:it}),E=null}const lt=new zv;lt.setAnimationLoop(tt),this.setAnimationLoop=function(W){z=W},this.dispose=function(){}}}const Mr=new Pi,FR=new qe;function HR(s,t){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,Lv(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,P,D,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),x(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),v(y,_),_.isMeshPhysicalMaterial&&S(y,_,U)):_.isMeshMatcapMaterial?(c(y,_),E(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),A(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,P,D):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Xn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Xn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const P=t.get(_),D=P.envMap,U=P.envMapRotation;D&&(y.envMap.value=D,Mr.copy(U),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),y.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(Mr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,P,D){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*P,y.scale.value=D*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function x(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function v(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function S(y,_,P){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const P=t.get(_).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function GR(s,t,i,r){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,D){const U=D.program;r.uniformBlockBinding(P,U)}function m(P,D){let U=l[P.id];U===void 0&&(E(P),U=g(P),l[P.id]=U,P.addEventListener("dispose",y));const G=D.program;r.updateUBOMapping(P,G);const V=t.render.frame;c[P.id]!==V&&(v(P),c[P.id]=V)}function g(P){const D=x();P.__bindingPointIndex=D;const U=s.createBuffer(),G=P.__size,V=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,G,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,U),U}function x(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const D=l[P.id],U=P.uniforms,G=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let V=0,F=U.length;V<F;V++){const j=Array.isArray(U[V])?U[V]:[U[V]];for(let L=0,w=j.length;L<w;L++){const k=j[L];if(S(k,V,L,G)===!0){const ht=k.__offset,ft=Array.isArray(k.value)?k.value:[k.value];let Mt=0;for(let gt=0;gt<ft.length;gt++){const B=ft[gt],X=A(B);typeof B=="number"||typeof B=="boolean"?(k.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,ht+Mt,k.__data)):B.isMatrix3?(k.__data[0]=B.elements[0],k.__data[1]=B.elements[1],k.__data[2]=B.elements[2],k.__data[3]=0,k.__data[4]=B.elements[3],k.__data[5]=B.elements[4],k.__data[6]=B.elements[5],k.__data[7]=0,k.__data[8]=B.elements[6],k.__data[9]=B.elements[7],k.__data[10]=B.elements[8],k.__data[11]=0):(B.toArray(k.__data,Mt),Mt+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ht,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(P,D,U,G){const V=P.value,F=D+"_"+U;if(G[F]===void 0)return typeof V=="number"||typeof V=="boolean"?G[F]=V:G[F]=V.clone(),!0;{const j=G[F];if(typeof V=="number"||typeof V=="boolean"){if(j!==V)return G[F]=V,!0}else if(j.equals(V)===!1)return j.copy(V),!0}return!1}function E(P){const D=P.uniforms;let U=0;const G=16;for(let F=0,j=D.length;F<j;F++){const L=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,k=L.length;w<k;w++){const ht=L[w],ft=Array.isArray(ht.value)?ht.value:[ht.value];for(let Mt=0,gt=ft.length;Mt<gt;Mt++){const B=ft[Mt],X=A(B),O=U%G,rt=O%X.boundary,C=O+rt;U+=rt,C!==0&&G-C<X.storage&&(U+=G-C),ht.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),ht.__offset=U,U+=X.storage}}}const V=U%G;return V>0&&(U+=G-V),P.__size=U,P.__cache={},this}function A(P){const D={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(D.boundary=4,D.storage=4):P.isVector2?(D.boundary=8,D.storage=8):P.isVector3||P.isColor?(D.boundary=16,D.storage=12):P.isVector4?(D.boundary=16,D.storage=16):P.isMatrix3?(D.boundary=48,D.storage=48):P.isMatrix4?(D.boundary=64,D.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),D}function y(P){const D=P.target;D.removeEventListener("dispose",y);const U=f.indexOf(D.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const P in l)s.deleteBuffer(l[P]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class VR{constructor(t={}){const{canvas:i=yE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,_=null;const P=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let G=!1;this._outputColorSpace=ui;let V=0,F=0,j=null,L=-1,w=null;const k=new tn,ht=new tn;let ft=null;const Mt=new Se(0);let gt=0,B=i.width,X=i.height,O=1,rt=null,C=null;const z=new tn(0,0,B,X),tt=new tn(0,0,B,X);let lt=!1;const W=new Jd;let it=!1,st=!1;const bt=new qe,Et=new qe,zt=new $,wt=new tn,ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function oe(){return j===null?O:1}let H=r;function Re(R,K){return i.getContext(R,K)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Ot,!1),H===null){const K="webgl2";if(H=Re(K,R),H===null)throw Re(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let jt,Wt,Xt,Me,kt,N,b,nt,vt,Tt,pt,Dt,Ct,Ft,Kt,At,Ht,Zt,Qt,It,ce,ne,Ne,Y;function Pt(){jt=new J1(H),jt.init(),ne=new PR(H,jt),Wt=new W1(H,jt,t,ne),Xt=new LR(H,jt),Wt.reverseDepthBuffer&&v&&Xt.buffers.depth.setReversed(!0),Me=new eA(H),kt=new xR,N=new NR(H,jt,Xt,kt,Wt,ne,Me),b=new Y1(U),nt=new Q1(U),vt=new ob(H),Ne=new k1(H,vt),Tt=new $1(H,vt,Me,Ne),pt=new iA(H,Tt,vt,Me),Qt=new nA(H,Wt,N),At=new q1(kt),Dt=new vR(U,b,nt,jt,Wt,Ne,At),Ct=new HR(U,kt),Ft=new SR,Kt=new RR(jt),Zt=new V1(U,b,nt,Xt,pt,S,p),Ht=new DR(U,pt,Wt),Y=new GR(H,Me,Wt,Xt),It=new X1(H,jt,Me),ce=new tA(H,jt,Me),Me.programs=Dt.programs,U.capabilities=Wt,U.extensions=jt,U.properties=kt,U.renderLists=Ft,U.shadowMap=Ht,U.state=Xt,U.info=Me}Pt();const dt=new zR(U,H);this.xr=dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=jt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=jt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(B,X,!1))},this.getSize=function(R){return R.set(B,X)},this.setSize=function(R,K,ct=!0){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,X=K,i.width=Math.floor(R*O),i.height=Math.floor(K*O),ct===!0&&(i.style.width=R+"px",i.style.height=K+"px"),this.setViewport(0,0,R,K)},this.getDrawingBufferSize=function(R){return R.set(B*O,X*O).floor()},this.setDrawingBufferSize=function(R,K,ct){B=R,X=K,O=ct,i.width=Math.floor(R*ct),i.height=Math.floor(K*ct),this.setViewport(0,0,R,K)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(z)},this.setViewport=function(R,K,ct,ut){R.isVector4?z.set(R.x,R.y,R.z,R.w):z.set(R,K,ct,ut),Xt.viewport(k.copy(z).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(tt)},this.setScissor=function(R,K,ct,ut){R.isVector4?tt.set(R.x,R.y,R.z,R.w):tt.set(R,K,ct,ut),Xt.scissor(ht.copy(tt).multiplyScalar(O).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(R){Xt.setScissorTest(lt=R)},this.setOpaqueSort=function(R){rt=R},this.setTransparentSort=function(R){C=R},this.getClearColor=function(R){return R.copy(Zt.getClearColor())},this.setClearColor=function(){Zt.setClearColor(...arguments)},this.getClearAlpha=function(){return Zt.getClearAlpha()},this.setClearAlpha=function(){Zt.setClearAlpha(...arguments)},this.clear=function(R=!0,K=!0,ct=!0){let ut=0;if(R){let Q=!1;if(j!==null){const Rt=j.texture.format;Q=Rt===Kd||Rt===Zd||Rt===jd}if(Q){const Rt=j.texture.type,Ut=Rt===Ni||Rt===Cr||Rt===qo||Rt===Yo||Rt===Wd||Rt===qd,Lt=Zt.getClearColor(),Gt=Zt.getClearAlpha(),ie=Lt.r,Jt=Lt.g,Yt=Lt.b;Ut?(E[0]=ie,E[1]=Jt,E[2]=Yt,E[3]=Gt,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=ie,A[1]=Jt,A[2]=Yt,A[3]=Gt,H.clearBufferiv(H.COLOR,0,A))}else ut|=H.COLOR_BUFFER_BIT}K&&(ut|=H.DEPTH_BUFFER_BIT),ct&&(ut|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Ot,!1),Zt.dispose(),Ft.dispose(),Kt.dispose(),kt.dispose(),b.dispose(),nt.dispose(),pt.dispose(),Ne.dispose(),Y.dispose(),Dt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",cn),dt.removeEventListener("sessionend",En),Bn.stop()};function yt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const R=Me.autoReset,K=Ht.enabled,ct=Ht.autoUpdate,ut=Ht.needsUpdate,Q=Ht.type;Pt(),Me.autoReset=R,Ht.enabled=K,Ht.autoUpdate=ct,Ht.needsUpdate=ut,Ht.type=Q}function Ot(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function le(R){const K=R.target;K.removeEventListener("dispose",le),ke(K)}function ke(R){an(R),kt.remove(R)}function an(R){const K=kt.get(R).programs;K!==void 0&&(K.forEach(function(ct){Dt.releaseProgram(ct)}),R.isShaderMaterial&&Dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,K,ct,ut,Q,Rt){K===null&&(K=ge);const Ut=Q.isMesh&&Q.matrixWorld.determinant()<0,Lt=tr(R,K,ct,ut,Q);Xt.setMaterial(ut,Ut);let Gt=ct.index,ie=1;if(ut.wireframe===!0){if(Gt=Tt.getWireframeAttribute(ct),Gt===void 0)return;ie=2}const Jt=ct.drawRange,Yt=ct.attributes.position;let _e=Jt.start*ie,we=(Jt.start+Jt.count)*ie;Rt!==null&&(_e=Math.max(_e,Rt.start*ie),we=Math.min(we,(Rt.start+Rt.count)*ie)),Gt!==null?(_e=Math.max(_e,0),we=Math.min(we,Gt.count)):Yt!=null&&(_e=Math.max(_e,0),we=Math.min(we,Yt.count));const je=we-_e;if(je<0||je===1/0)return;Ne.setup(Q,ut,Lt,ct,Gt);let Ee,be=It;if(Gt!==null&&(Ee=vt.get(Gt),be=ce,be.setIndex(Ee)),Q.isMesh)ut.wireframe===!0?(Xt.setLineWidth(ut.wireframeLinewidth*oe()),be.setMode(H.LINES)):be.setMode(H.TRIANGLES);else if(Q.isLine){let $t=ut.linewidth;$t===void 0&&($t=1),Xt.setLineWidth($t*oe()),Q.isLineSegments?be.setMode(H.LINES):Q.isLineLoop?be.setMode(H.LINE_LOOP):be.setMode(H.LINE_STRIP)}else Q.isPoints?be.setMode(H.POINTS):Q.isSprite&&be.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),be.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(jt.get("WEBGL_multi_draw"))be.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const $t=Q._multiDrawStarts,Qe=Q._multiDrawCounts,Ae=Q._multiDrawCount,Cn=Gt?vt.get(Gt).bytesPerElement:1,_a=kt.get(ut).currentProgram.getUniforms();for(let Xe=0;Xe<Ae;Xe++)_a.setValue(H,"_gl_DrawID",Xe),be.render($t[Xe]/Cn,Qe[Xe])}else if(Q.isInstancedMesh)be.renderInstances(_e,je,Q.count);else if(ct.isInstancedBufferGeometry){const $t=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Qe=Math.min(ct.instanceCount,$t);be.renderInstances(_e,je,Qe)}else be.render(_e,je)};function Ce(R,K,ct){R.transparent===!0&&R.side===oa&&R.forceSinglePass===!1?(R.side=Xn,R.needsUpdate=!0,ma(R,K,ct),R.side=Ka,R.needsUpdate=!0,ma(R,K,ct),R.side=oa):ma(R,K,ct)}this.compile=function(R,K,ct=null){ct===null&&(ct=R),_=Kt.get(ct),_.init(K),D.push(_),ct.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),R!==ct&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(K.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const ut=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Rt=Q.material;if(Rt)if(Array.isArray(Rt))for(let Ut=0;Ut<Rt.length;Ut++){const Lt=Rt[Ut];Ce(Lt,ct,Q),ut.add(Lt)}else Ce(Rt,ct,Q),ut.add(Rt)}),_=D.pop(),ut},this.compileAsync=function(R,K,ct=null){const ut=this.compile(R,K,ct);return new Promise(Q=>{function Rt(){if(ut.forEach(function(Ut){kt.get(Ut).currentProgram.isReady()&&ut.delete(Ut)}),ut.size===0){Q(R);return}setTimeout(Rt,10)}jt.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Wn=null;function gn(R){Wn&&Wn(R)}function cn(){Bn.stop()}function En(){Bn.start()}const Bn=new zv;Bn.setAnimationLoop(gn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(R){Wn=R,dt.setAnimationLoop(R),R===null?Bn.stop():Bn.start()},dt.addEventListener("sessionstart",cn),dt.addEventListener("sessionend",En),this.render=function(R,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(K),K=dt.getCamera()),R.isScene===!0&&R.onBeforeRender(U,R,K,j),_=Kt.get(R,D.length),_.init(K),D.push(_),Et.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W.setFromProjectionMatrix(Et),st=this.localClippingEnabled,it=At.init(this.clippingPlanes,st),y=Ft.get(R,P.length),y.init(),P.push(y),dt.enabled===!0&&dt.isPresenting===!0){const Rt=U.xr.getDepthSensingMesh();Rt!==null&&Ja(Rt,K,-1/0,U.sortObjects)}Ja(R,K,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(rt,C),re=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,re&&Zt.addToRenderList(y,R),this.info.render.frame++,it===!0&&At.beginShadows();const ct=_.state.shadowsArray;Ht.render(ct,R,K),it===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=y.opaque,Q=y.transmissive;if(_.setupLights(),K.isArrayCamera){const Rt=K.cameras;if(Q.length>0)for(let Ut=0,Lt=Rt.length;Ut<Lt;Ut++){const Gt=Rt[Ut];rl(ut,Q,R,Gt)}re&&Zt.render(R);for(let Ut=0,Lt=Rt.length;Ut<Lt;Ut++){const Gt=Rt[Ut];al(y,R,Gt,Gt.viewport)}}else Q.length>0&&rl(ut,Q,R,K),re&&Zt.render(R),al(y,R,K);j!==null&&F===0&&(N.updateMultisampleRenderTarget(j),N.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(U,R,K),Ne.resetDefaultState(),L=-1,w=null,D.pop(),D.length>0?(_=D[D.length-1],it===!0&&At.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function Ja(R,K,ct,ut){if(R.visible===!1)return;if(R.layers.test(K.layers)){if(R.isGroup)ct=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(K);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||W.intersectsSprite(R)){ut&&wt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const Ut=pt.update(R),Lt=R.material;Lt.visible&&y.push(R,Ut,Lt,ct,wt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||W.intersectsObject(R))){const Ut=pt.update(R),Lt=R.material;if(ut&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),wt.copy(R.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),wt.copy(Ut.boundingSphere.center)),wt.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Lt)){const Gt=Ut.groups;for(let ie=0,Jt=Gt.length;ie<Jt;ie++){const Yt=Gt[ie],_e=Lt[Yt.materialIndex];_e&&_e.visible&&y.push(R,Ut,_e,ct,wt.z,Yt)}}else Lt.visible&&y.push(R,Ut,Lt,ct,wt.z,null)}}const Rt=R.children;for(let Ut=0,Lt=Rt.length;Ut<Lt;Ut++)Ja(Rt[Ut],K,ct,ut)}function al(R,K,ct,ut){const Q=R.opaque,Rt=R.transmissive,Ut=R.transparent;_.setupLightsView(ct),it===!0&&At.setGlobalState(U.clippingPlanes,ct),ut&&Xt.viewport(k.copy(ut)),Q.length>0&&$a(Q,K,ct),Rt.length>0&&$a(Rt,K,ct),Ut.length>0&&$a(Ut,K,ct),Xt.buffers.depth.setTest(!0),Xt.buffers.depth.setMask(!0),Xt.buffers.color.setMask(!0),Xt.setPolygonOffset(!1)}function rl(R,K,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ut.id]===void 0&&(_.state.transmissionRenderTarget[ut.id]=new wr(1,1,{generateMipmaps:!0,type:jt.has("EXT_color_buffer_half_float")||jt.has("EXT_color_buffer_float")?$o:Ni,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const Rt=_.state.transmissionRenderTarget[ut.id],Ut=ut.viewport||k;Rt.setSize(Ut.z*U.transmissionResolutionScale,Ut.w*U.transmissionResolutionScale);const Lt=U.getRenderTarget();U.setRenderTarget(Rt),U.getClearColor(Mt),gt=U.getClearAlpha(),gt<1&&U.setClearColor(16777215,.5),U.clear(),re&&Zt.render(ct);const Gt=U.toneMapping;U.toneMapping=Za;const ie=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),_.setupLightsView(ut),it===!0&&At.setGlobalState(U.clippingPlanes,ut),$a(R,ct,ut),N.updateMultisampleRenderTarget(Rt),N.updateRenderTargetMipmap(Rt),jt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Yt=0,_e=K.length;Yt<_e;Yt++){const we=K[Yt],je=we.object,Ee=we.geometry,be=we.material,$t=we.group;if(be.side===oa&&je.layers.test(ut.layers)){const Qe=be.side;be.side=Xn,be.needsUpdate=!0,pa(je,ct,ut,Ee,be,$t),be.side=Qe,be.needsUpdate=!0,Jt=!0}}Jt===!0&&(N.updateMultisampleRenderTarget(Rt),N.updateRenderTargetMipmap(Rt))}U.setRenderTarget(Lt),U.setClearColor(Mt,gt),ie!==void 0&&(ut.viewport=ie),U.toneMapping=Gt}function $a(R,K,ct){const ut=K.isScene===!0?K.overrideMaterial:null;for(let Q=0,Rt=R.length;Q<Rt;Q++){const Ut=R[Q],Lt=Ut.object,Gt=Ut.geometry,ie=Ut.group;let Jt=Ut.material;Jt.allowOverride===!0&&ut!==null&&(Jt=ut),Lt.layers.test(ct.layers)&&pa(Lt,K,ct,Gt,Jt,ie)}}function pa(R,K,ct,ut,Q,Rt){R.onBeforeRender(U,K,ct,ut,Q,Rt),R.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(U,K,ct,ut,R,Rt),Q.transparent===!0&&Q.side===oa&&Q.forceSinglePass===!1?(Q.side=Xn,Q.needsUpdate=!0,U.renderBufferDirect(ct,K,ut,Q,R,Rt),Q.side=Ka,Q.needsUpdate=!0,U.renderBufferDirect(ct,K,ut,Q,R,Rt),Q.side=oa):U.renderBufferDirect(ct,K,ut,Q,R,Rt),R.onAfterRender(U,K,ct,ut,Q,Rt)}function ma(R,K,ct){K.isScene!==!0&&(K=ge);const ut=kt.get(R),Q=_.state.lights,Rt=_.state.shadowsArray,Ut=Q.state.version,Lt=Dt.getParameters(R,Q.state,Rt,K,ct),Gt=Dt.getProgramCacheKey(Lt);let ie=ut.programs;ut.environment=R.isMeshStandardMaterial?K.environment:null,ut.fog=K.fog,ut.envMap=(R.isMeshStandardMaterial?nt:b).get(R.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&R.envMap===null?K.environmentRotation:R.envMapRotation,ie===void 0&&(R.addEventListener("dispose",le),ie=new Map,ut.programs=ie);let Jt=ie.get(Gt);if(Jt!==void 0){if(ut.currentProgram===Jt&&ut.lightsStateVersion===Ut)return Bi(R,Lt),Jt}else Lt.uniforms=Dt.getUniforms(R),R.onBeforeCompile(Lt,U),Jt=Dt.acquireProgram(Lt,Gt),ie.set(Gt,Jt),ut.uniforms=Lt.uniforms;const Yt=ut.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Yt.clippingPlanes=At.uniform),Bi(R,Lt),ut.needsLights=rn(R),ut.lightsStateVersion=Ut,ut.needsLights&&(Yt.ambientLightColor.value=Q.state.ambient,Yt.lightProbe.value=Q.state.probe,Yt.directionalLights.value=Q.state.directional,Yt.directionalLightShadows.value=Q.state.directionalShadow,Yt.spotLights.value=Q.state.spot,Yt.spotLightShadows.value=Q.state.spotShadow,Yt.rectAreaLights.value=Q.state.rectArea,Yt.ltc_1.value=Q.state.rectAreaLTC1,Yt.ltc_2.value=Q.state.rectAreaLTC2,Yt.pointLights.value=Q.state.point,Yt.pointLightShadows.value=Q.state.pointShadow,Yt.hemisphereLights.value=Q.state.hemi,Yt.directionalShadowMap.value=Q.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Yt.spotShadowMap.value=Q.state.spotShadowMap,Yt.spotLightMatrix.value=Q.state.spotLightMatrix,Yt.spotLightMap.value=Q.state.spotLightMap,Yt.pointShadowMap.value=Q.state.pointShadowMap,Yt.pointShadowMatrix.value=Q.state.pointShadowMatrix),ut.currentProgram=Jt,ut.uniformsList=null,Jt}function Ii(R){if(R.uniformsList===null){const K=R.currentProgram.getUniforms();R.uniformsList=jc.seqWithValue(K.seq,R.uniforms)}return R.uniformsList}function Bi(R,K){const ct=kt.get(R);ct.outputColorSpace=K.outputColorSpace,ct.batching=K.batching,ct.batchingColor=K.batchingColor,ct.instancing=K.instancing,ct.instancingColor=K.instancingColor,ct.instancingMorph=K.instancingMorph,ct.skinning=K.skinning,ct.morphTargets=K.morphTargets,ct.morphNormals=K.morphNormals,ct.morphColors=K.morphColors,ct.morphTargetsCount=K.morphTargetsCount,ct.numClippingPlanes=K.numClippingPlanes,ct.numIntersection=K.numClipIntersection,ct.vertexAlphas=K.vertexAlphas,ct.vertexTangents=K.vertexTangents,ct.toneMapping=K.toneMapping}function tr(R,K,ct,ut,Q){K.isScene!==!0&&(K=ge),N.resetTextureUnits();const Rt=K.fog,Ut=ut.isMeshStandardMaterial?K.environment:null,Lt=j===null?U.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Os,Gt=(ut.isMeshStandardMaterial?nt:b).get(ut.envMap||Ut),ie=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,Jt=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),Yt=!!ct.morphAttributes.position,_e=!!ct.morphAttributes.normal,we=!!ct.morphAttributes.color;let je=Za;ut.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(je=U.toneMapping);const Ee=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,be=Ee!==void 0?Ee.length:0,$t=kt.get(ut),Qe=_.state.lights;if(it===!0&&(st===!0||R!==w)){const _n=R===w&&ut.id===L;At.setState(ut,R,_n)}let Ae=!1;ut.version===$t.__version?($t.needsLights&&$t.lightsStateVersion!==Qe.state.version||$t.outputColorSpace!==Lt||Q.isBatchedMesh&&$t.batching===!1||!Q.isBatchedMesh&&$t.batching===!0||Q.isBatchedMesh&&$t.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&$t.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&$t.instancing===!1||!Q.isInstancedMesh&&$t.instancing===!0||Q.isSkinnedMesh&&$t.skinning===!1||!Q.isSkinnedMesh&&$t.skinning===!0||Q.isInstancedMesh&&$t.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&$t.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&$t.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&$t.instancingMorph===!1&&Q.morphTexture!==null||$t.envMap!==Gt||ut.fog===!0&&$t.fog!==Rt||$t.numClippingPlanes!==void 0&&($t.numClippingPlanes!==At.numPlanes||$t.numIntersection!==At.numIntersection)||$t.vertexAlphas!==ie||$t.vertexTangents!==Jt||$t.morphTargets!==Yt||$t.morphNormals!==_e||$t.morphColors!==we||$t.toneMapping!==je||$t.morphTargetsCount!==be)&&(Ae=!0):(Ae=!0,$t.__version=ut.version);let Cn=$t.currentProgram;Ae===!0&&(Cn=ma(ut,K,Q));let _a=!1,Xe=!1,Fi=!1;const Ge=Cn.getUniforms(),wn=$t.uniforms;if(Xt.useProgram(Cn.program)&&(_a=!0,Xe=!0,Fi=!0),ut.id!==L&&(L=ut.id,Xe=!0),_a||w!==R){Xt.buffers.depth.getReversed()?(bt.copy(R.projectionMatrix),ME(bt),EE(bt),Ge.setValue(H,"projectionMatrix",bt)):Ge.setValue(H,"projectionMatrix",R.projectionMatrix),Ge.setValue(H,"viewMatrix",R.matrixWorldInverse);const bn=Ge.map.cameraPosition;bn!==void 0&&bn.setValue(H,zt.setFromMatrixPosition(R.matrixWorld)),Wt.logarithmicDepthBuffer&&Ge.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Ge.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,Xe=!0,Fi=!0)}if(Q.isSkinnedMesh){Ge.setOptional(H,Q,"bindMatrix"),Ge.setOptional(H,Q,"bindMatrixInverse");const _n=Q.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ge.setValue(H,"boneTexture",_n.boneTexture,N))}Q.isBatchedMesh&&(Ge.setOptional(H,Q,"batchingTexture"),Ge.setValue(H,"batchingTexture",Q._matricesTexture,N),Ge.setOptional(H,Q,"batchingIdTexture"),Ge.setValue(H,"batchingIdTexture",Q._indirectTexture,N),Ge.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ge.setValue(H,"batchingColorTexture",Q._colorsTexture,N));const un=ct.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&Qt.update(Q,ct,Cn),(Xe||$t.receiveShadow!==Q.receiveShadow)&&($t.receiveShadow=Q.receiveShadow,Ge.setValue(H,"receiveShadow",Q.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(wn.envMap.value=Gt,wn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&K.environment!==null&&(wn.envMapIntensity.value=K.environmentIntensity),Xe&&(Ge.setValue(H,"toneMappingExposure",U.toneMappingExposure),$t.needsLights&&ga(wn,Fi),Rt&&ut.fog===!0&&Ct.refreshFogUniforms(wn,Rt),Ct.refreshMaterialUniforms(wn,ut,O,X,_.state.transmissionRenderTarget[R.id]),jc.upload(H,Ii($t),wn,N)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(jc.upload(H,Ii($t),wn,N),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Ge.setValue(H,"center",Q.center),Ge.setValue(H,"modelViewMatrix",Q.modelViewMatrix),Ge.setValue(H,"normalMatrix",Q.normalMatrix),Ge.setValue(H,"modelMatrix",Q.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const _n=ut.uniformsGroups;for(let bn=0,Ei=_n.length;bn<Ei;bn++){const Hi=_n[bn];Y.update(Hi,Cn),Y.bind(Hi,Cn)}}return Cn}function ga(R,K){R.ambientLightColor.needsUpdate=K,R.lightProbe.needsUpdate=K,R.directionalLights.needsUpdate=K,R.directionalLightShadows.needsUpdate=K,R.pointLights.needsUpdate=K,R.pointLightShadows.needsUpdate=K,R.spotLights.needsUpdate=K,R.spotLightShadows.needsUpdate=K,R.rectAreaLights.needsUpdate=K,R.hemisphereLights.needsUpdate=K}function rn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,K,ct){const ut=kt.get(R);ut.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),kt.get(R.texture).__webglTexture=K,kt.get(R.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ct,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,K){const ct=kt.get(R);ct.__webglFramebuffer=K,ct.__useDefaultFramebuffer=K===void 0};const sl=H.createFramebuffer();this.setRenderTarget=function(R,K=0,ct=0){j=R,V=K,F=ct;let ut=!0,Q=null,Rt=!1,Ut=!1;if(R){const Gt=kt.get(R);if(Gt.__useDefaultFramebuffer!==void 0)Xt.bindFramebuffer(H.FRAMEBUFFER,null),ut=!1;else if(Gt.__webglFramebuffer===void 0)N.setupRenderTarget(R);else if(Gt.__hasExternalTextures)N.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Yt=R.depthTexture;if(Gt.__boundDepthTexture!==Yt){if(Yt!==null&&kt.has(Yt)&&(R.width!==Yt.image.width||R.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(R)}}const ie=R.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Ut=!0);const Jt=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[K])?Q=Jt[K][ct]:Q=Jt[K],Rt=!0):R.samples>0&&N.useMultisampledRTT(R)===!1?Q=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?Q=Jt[ct]:Q=Jt,k.copy(R.viewport),ht.copy(R.scissor),ft=R.scissorTest}else k.copy(z).multiplyScalar(O).floor(),ht.copy(tt).multiplyScalar(O).floor(),ft=lt;if(ct!==0&&(Q=sl),Xt.bindFramebuffer(H.FRAMEBUFFER,Q)&&ut&&Xt.drawBuffers(R,Q),Xt.viewport(k),Xt.scissor(ht),Xt.setScissorTest(ft),Rt){const Gt=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+K,Gt.__webglTexture,ct)}else if(Ut){const Gt=kt.get(R.texture),ie=K;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Gt.__webglTexture,ct,ie)}else if(R!==null&&ct!==0){const Gt=kt.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Gt.__webglTexture,ct)}L=-1},this.readRenderTargetPixels=function(R,K,ct,ut,Q,Rt,Ut){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt){Xt.bindFramebuffer(H.FRAMEBUFFER,Lt);try{const Gt=R.texture,ie=Gt.format,Jt=Gt.type;if(!Wt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=R.width-ut&&ct>=0&&ct<=R.height-Q&&H.readPixels(K,ct,ut,Q,ne.convert(ie),ne.convert(Jt),Rt)}finally{const Gt=j!==null?kt.get(j).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,Gt)}}},this.readRenderTargetPixelsAsync=async function(R,K,ct,ut,Q,Rt,Ut){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ut!==void 0&&(Lt=Lt[Ut]),Lt)if(K>=0&&K<=R.width-ut&&ct>=0&&ct<=R.height-Q){Xt.bindFramebuffer(H.FRAMEBUFFER,Lt);const Gt=R.texture,ie=Gt.format,Jt=Gt.type;if(!Wt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.bufferData(H.PIXEL_PACK_BUFFER,Rt.byteLength,H.STREAM_READ),H.readPixels(K,ct,ut,Q,ne.convert(ie),ne.convert(Jt),0);const _e=j!==null?kt.get(j).__webglFramebuffer:null;Xt.bindFramebuffer(H.FRAMEBUFFER,_e);const we=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await SE(H,we,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Yt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Rt),H.deleteBuffer(Yt),H.deleteSync(we),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,K=null,ct=0){const ut=Math.pow(2,-ct),Q=Math.floor(R.image.width*ut),Rt=Math.floor(R.image.height*ut),Ut=K!==null?K.x:0,Lt=K!==null?K.y:0;N.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ct,0,0,Ut,Lt,Q,Rt),Xt.unbindTexture()};const ol=H.createFramebuffer(),zi=H.createFramebuffer();this.copyTextureToTexture=function(R,K,ct=null,ut=null,Q=0,Rt=null){Rt===null&&(Q!==0?(Yc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Rt=Q,Q=0):Rt=0);let Ut,Lt,Gt,ie,Jt,Yt,_e,we,je;const Ee=R.isCompressedTexture?R.mipmaps[Rt]:R.image;if(ct!==null)Ut=ct.max.x-ct.min.x,Lt=ct.max.y-ct.min.y,Gt=ct.isBox3?ct.max.z-ct.min.z:1,ie=ct.min.x,Jt=ct.min.y,Yt=ct.isBox3?ct.min.z:0;else{const un=Math.pow(2,-Q);Ut=Math.floor(Ee.width*un),Lt=Math.floor(Ee.height*un),R.isDataArrayTexture?Gt=Ee.depth:R.isData3DTexture?Gt=Math.floor(Ee.depth*un):Gt=1,ie=0,Jt=0,Yt=0}ut!==null?(_e=ut.x,we=ut.y,je=ut.z):(_e=0,we=0,je=0);const be=ne.convert(K.format),$t=ne.convert(K.type);let Qe;K.isData3DTexture?(N.setTexture3D(K,0),Qe=H.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(N.setTexture2DArray(K,0),Qe=H.TEXTURE_2D_ARRAY):(N.setTexture2D(K,0),Qe=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,K.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,K.unpackAlignment);const Ae=H.getParameter(H.UNPACK_ROW_LENGTH),Cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_a=H.getParameter(H.UNPACK_SKIP_PIXELS),Xe=H.getParameter(H.UNPACK_SKIP_ROWS),Fi=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ee.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ie),H.pixelStorei(H.UNPACK_SKIP_ROWS,Jt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt);const Ge=R.isDataArrayTexture||R.isData3DTexture,wn=K.isDataArrayTexture||K.isData3DTexture;if(R.isDepthTexture){const un=kt.get(R),_n=kt.get(K),bn=kt.get(un.__renderTarget),Ei=kt.get(_n.__renderTarget);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,bn.__webglFramebuffer),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Hi=0;Hi<Gt;Hi++)Ge&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,Q,Yt+Hi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,kt.get(K).__webglTexture,Rt,je+Hi)),H.blitFramebuffer(ie,Jt,Ut,Lt,_e,we,Ut,Lt,H.DEPTH_BUFFER_BIT,H.NEAREST);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||kt.has(R)){const un=kt.get(R),_n=kt.get(K);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,ol),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,zi);for(let bn=0;bn<Gt;bn++)Ge?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,un.__webglTexture,Q,Yt+bn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,un.__webglTexture,Q),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,_n.__webglTexture,Rt,je+bn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,_n.__webglTexture,Rt),Q!==0?H.blitFramebuffer(ie,Jt,Ut,Lt,_e,we,Ut,Lt,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(Qe,Rt,_e,we,je+bn,ie,Jt,Ut,Lt):H.copyTexSubImage2D(Qe,Rt,_e,we,ie,Jt,Ut,Lt);Xt.bindFramebuffer(H.READ_FRAMEBUFFER,null),Xt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Qe,Rt,_e,we,je,Ut,Lt,Gt,be,$t,Ee.data):K.isCompressedArrayTexture?H.compressedTexSubImage3D(Qe,Rt,_e,we,je,Ut,Lt,Gt,be,Ee.data):H.texSubImage3D(Qe,Rt,_e,we,je,Ut,Lt,Gt,be,$t,Ee):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Rt,_e,we,Ut,Lt,be,$t,Ee.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Rt,_e,we,Ee.width,Ee.height,be,Ee.data):H.texSubImage2D(H.TEXTURE_2D,Rt,_e,we,Ut,Lt,be,$t,Ee);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ae),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_a),H.pixelStorei(H.UNPACK_SKIP_ROWS,Xe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Fi),Rt===0&&K.generateMipmaps&&H.generateMipmap(Qe),Xt.unbindTexture()},this.copyTextureToTexture3D=function(R,K,ct=null,ut=null,Q=0){return Yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,K,ct,ut,Q)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&N.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?N.setTextureCube(R,0):R.isData3DTexture?N.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?N.setTexture2DArray(R,0):N.setTexture2D(R,0),Xt.unbindTexture()},this.resetState=function(){V=0,F=0,j=null,Xt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Y0={type:"change"},tp={type:"start"},kv={type:"end"},zc=new Av,j0=new qa,kR=Math.cos(70*xE.DEG2RAD),dn=new $,kn=2*Math.PI,He={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class XR extends rb{constructor(t,i=null){super(t,i),this.state=He.NONE,this.target=new $,this.cursor=new $,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ws.ROTATE,MIDDLE:ws.DOLLY,RIGHT:ws.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new $,this._lastQuaternion=new Dr,this._lastTargetPosition=new $,this._quat=new Dr().setFromUnitVectors(t.up,new $(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S0,this._sphericalDelta=new S0,this._scale=1,this._panOffset=new $,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new $,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qR.bind(this),this._onPointerDown=WR.bind(this),this._onPointerUp=YR.bind(this),this._onContextMenu=tC.bind(this),this._onMouseWheel=KR.bind(this),this._onKeyDown=QR.bind(this),this._onTouchStart=JR.bind(this),this._onTouchMove=$R.bind(this),this._onMouseDown=jR.bind(this),this._onMouseMove=ZR.bind(this),this._interceptControlDown=eC.bind(this),this._interceptControlUp=nC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=He.NONE}update(t=null){const i=this.object.position;dn.copy(i).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===He.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=kn:r>Math.PI&&(r-=kn),l<-Math.PI?l+=kn:l>Math.PI&&(l-=kn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),i.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const d=dn.length();f=this._clampDistance(d*this._scale);const p=d-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const d=new $(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new $(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),f=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(zc.origin.copy(this.object.position),zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zc.direction))<kR?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),zc.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?kn/60*this.autoRotateSpeed*t:kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){dn.setFromMatrixColumn(i,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,i){this.screenSpacePanning===!0?dn.setFromMatrixColumn(i,1):(dn.setFromMatrixColumn(i,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;dn.copy(l).sub(this.target);let c=dn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,d=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(f,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new he,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function WR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function qR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=He.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function jR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ws.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=He.DOLLY;break;case ws.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=He.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=He.ROTATE}break;case ws.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=He.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=He.PAN}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(tp)}function ZR(s){switch(this.state){case He.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case He.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case He.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KR(s){this.enabled===!1||this.enableZoom===!1||this.state!==He.NONE||(s.preventDefault(),this.dispatchEvent(tp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kv))}function QR(s){this.enabled!==!1&&this._handleKeyDown(s)}function JR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Rs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=He.TOUCH_ROTATE;break;case Rs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=He.TOUCH_PAN;break;default:this.state=He.NONE}break;case 2:switch(this.touches.TWO){case Rs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=He.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=He.TOUCH_DOLLY_ROTATE;break;default:this.state=He.NONE}break;default:this.state=He.NONE}this.state!==He.NONE&&this.dispatchEvent(tp)}function $R(s){switch(this._trackPointer(s),this.state){case He.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case He.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case He.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case He.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=He.NONE}}function tC(s){this.enabled!==!1&&s.preventDefault()}function eC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iC(){const s=xt.useRef(null),t=xt.useRef(null);return xt.useEffect(()=>{if(!s.current||!t.current)return;let i,r,l,c;const f={};let d="1s_H";const p=45e3,m=.06;let g="linear",x=[],v=.5,S=0,E=1,A=.8,y=.3;const _=`
      // Attributes from THREE.SphereGeometry
      attribute float a_initialPhase;
      
      uniform float orbitalScale;
      uniform float u_time;
      uniform float u_maxSpeedAtCenter;
      uniform float u_minSpeedAtEdge;
      uniform float u_exponentialFalloffRate;
      uniform float u_crossSectionX;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      
      void main() {
          // Extract the original position from the instanceMatrix (translation part)
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          // Calculate dynamic rotation for this instance based on its original_pos
          float distanceToYAxis = length(original_pos.xz);
          float angularSpeed = (u_maxSpeedAtCenter - u_minSpeedAtEdge) * exp(-distanceToYAxis * u_exponentialFalloffRate) + u_minSpeedAtEdge;
          float currentRotationY = a_initialPhase + angularSpeed * u_time;

          // Create rotation matrix around Y axis for the particle's position
          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          // Calculate the new animated center of the instance
          vec3 animated_instance_center_object_space = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;
          
          // Create a translation matrix to this new animated center
          mat4 translationToAnimatedCenter = mat4(
              1.0, 0.0, 0.0, 0.0,
              0.0, 1.0, 0.0, 0.0,
              0.0, 0.0, 1.0, 0.0,
              animated_instance_center_object_space.x, animated_instance_center_object_space.y, animated_instance_center_object_space.z, 1.0
          );

          // Transform the local vertex of the sphere ('position') to its animated spot
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          // Calculate cross-section visibility (1 = visible, 0 = hidden)
          vCrossSectionVisibility = worldPosition.x <= u_crossSectionX ? 1.0 : 0.0;
          
          // Normals are transformed by the model matrix
          vNormalWorld = normalize(mat3(modelMatrix) * normal);

          vec4 viewPosition = viewMatrix * worldPosition; 
          float rawDepth = -viewPosition.z; 
          
          vDepthFactor = smoothstep(orbitalScale * 0.45, orbitalScale * 2.8, rawDepth); 

          gl_Position = projectionMatrix * viewPosition;
      }
    `,P=`
      uniform vec3 baseColor;
      uniform vec3 lowDensityColor;
      uniform vec3 midDensityColor;
      uniform vec3 highDensityColor;
      uniform vec3 ambientLightColor;
      uniform vec3 directionalLightColor1;
      uniform vec3 directionalLightDirection1;
      uniform vec3 directionalLightColor2;
      uniform vec3 directionalLightDirection2;
      uniform float u_crossSectionX;

      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      
      const float minOverallBrightness = 0.12;
      const float maxOverallBrightness = 0.98;
      const float minRawLight = 0.08;
      const float maxRawLight = 1.9;

      void main() {
          if (vCrossSectionVisibility < 0.5) {
              discard;
          }
          
          vec3 N = normalize(vNormalWorld);

          vec3 L1 = normalize(directionalLightDirection1);
          float lambertian1 = max(dot(N, L1), 0.0);
          vec3 diffuse1 = directionalLightColor1 * lambertian1;

          vec3 L2 = normalize(directionalLightDirection2);
          float lambertian2 = max(dot(N, L2), 0.0);
          vec3 diffuse2 = directionalLightColor2 * lambertian2;

          vec3 rawLighting = ambientLightColor + diffuse1 + diffuse2;
          
          float crossSectionFactor = 10.0 - min(u_crossSectionX, 10.0);
          float lightBoost = 1.0 + (crossSectionFactor * 0.05);
          
          rawLighting *= lightBoost;
          rawLighting = clamp(rawLighting, vec3(minRawLight), vec3(maxRawLight));
          
          float distFromCenter = length(vWorldPosition);
          float maxDist = 10.0;
          float normalizedDist = clamp(distFromCenter / maxDist, 0.0, 1.0);
          
          float density = 1.0 - normalizedDist;
          density = pow(density, 2.0);
          
          vec3 densityColor;
          if (density > 0.7) {
              float t = (density - 0.7) / 0.3;
              densityColor = mix(midDensityColor, highDensityColor, t);
          } else if (density > 0.3) {
              float t = (density - 0.3) / 0.4;
              densityColor = mix(lowDensityColor, midDensityColor, t);
          } else {
              float t = density / 0.3;
              densityColor = mix(lowDensityColor, lowDensityColor, t);
          }
          
          vec3 litColor = densityColor * rawLighting;

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(0.25, 0.25, 0.25); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, 1.0);
      }
    `,D={"1s_H":{name:"1s H (1,0,0) - Simple sphere",color:4620980,lowDensityColor:11584734,midDensityColor:4620980,highDensityColor:2574701,scale:4,generatePoints:U,cameraPosition:new $(5,5,8)},"2s_H":{name:"2s H (2,0,0) - Sphere with radial node",color:8900331,lowDensityColor:14087167,midDensityColor:8900331,highDensityColor:4623791,scale:5,generatePoints:G,cameraPosition:new $(7,7,11)},"2p_H_z":{name:"2pz H (2,1,0) - Dumbbell",color:16761035,lowDensityColor:16770284,midDensityColor:16761035,highDensityColor:12615824,scale:5,generatePoints:V,cameraPosition:new $(7,7,11)},"3p_H_z":{name:"3pz H (3,1,0) - Larger dumbbell with radial node",color:16767673,lowDensityColor:16773861,midDensityColor:16767673,highDensityColor:13409397,scale:6,generatePoints:F,cameraPosition:new $(9,9,14)},"3d_Fe_z2":{name:"3dz² Fe (3,2,0) - Larger dumbbell with radial node",color:16776960,lowDensityColor:16777184,midDensityColor:16776960,highDensityColor:12566272,scale:6.5,generatePoints:j,cameraPosition:new $(10,10,15)}};function U(X,O){const rt=[];for(let C=0;C<X;C++){let z,tt;do{z=O*Math.random();const Et=z/(O/4);tt=Et*Et*Math.exp(-2*Et)}while(Math.random()>tt);const lt=Math.acos(2*Math.random()-1),W=Math.random()*Math.PI*2,it=z*Math.sin(lt)*Math.cos(W),st=z*Math.sin(lt)*Math.sin(W),bt=z*Math.cos(lt);rt.push(new $(it,st,bt))}return rt}function G(X,O){const rt=[];for(let C=0;C<X;C++){let z,tt;do{z=O*1.5*Math.random();const Et=z/(O/4),zt=Math.pow(2-Et/2,2),wt=Math.abs(Et/2-2)<.3?.05:1;tt=Et*Et*zt*Math.exp(-Et/2)*wt}while(Math.random()*2>tt);const lt=Math.acos(2*Math.random()-1),W=Math.random()*Math.PI*2,it=z*Math.sin(lt)*Math.cos(W),st=z*Math.sin(lt)*Math.sin(W),bt=z*Math.cos(lt);rt.push(new $(it,st,bt))}return rt}function V(X,O){const rt=[];for(let C=0;C<X;C++){let z,tt,lt;do{z=O*1.2*Math.random(),tt=Math.acos(2*Math.random()-1);const Et=z/(O/4),zt=Math.pow(Math.cos(tt),4),wt=Math.abs(Math.cos(tt))<.2?.01:1;lt=Et*Et*Math.exp(-Et)*zt*wt}while(Math.random()*.3>lt);const W=Math.random()*Math.PI*2,it=z*Math.sin(tt)*Math.cos(W),st=z*Math.sin(tt)*Math.sin(W),bt=z*Math.cos(tt);rt.push(new $(it,st,bt))}return rt}function F(X,O){const rt=[];for(let C=0;C<X;C++){let z,tt,lt;do{z=O*1.5*Math.random(),tt=Math.acos(2*Math.random()-1);const Et=z/(O/6),zt=Math.pow(Math.cos(tt),4),wt=Math.abs(Math.cos(tt))<.2?.01:1,ge=Math.pow(6-Et,2)*Math.pow(Et,2),re=Math.abs(Et-6)<.5?.05:1;lt=ge*Math.exp(-Et/3)*zt*wt*re}while(Math.random()*5>lt);const W=Math.random()*Math.PI*2,it=z*Math.sin(tt)*Math.cos(W),st=z*Math.sin(tt)*Math.sin(W),bt=z*Math.cos(tt);rt.push(new $(it,st,bt))}return rt}function j(X,O){const rt=[];for(let C=0;C<X;C++){let z,tt,lt;do{z=O*1.5*Math.random(),tt=Math.acos(2*Math.random()-1);const Et=z/(O/6),zt=Math.pow(3*Math.pow(Math.cos(tt),2)-1,2),wt=Math.abs(3*Math.pow(Math.cos(tt),2)-1)<.3?.05:1;lt=Math.pow(Et,4)*Math.exp(-Et/3)*zt*wt}while(Math.random()*10>lt);const W=Math.random()*Math.PI*2,it=z*Math.sin(tt)*Math.cos(W),st=z*Math.sin(tt)*Math.sin(W),bt=z*Math.cos(tt);rt.push(new $(it,st,bt))}return rt}function L(){i=new jE,r=new fi(75,s.current.clientWidth/s.current.clientHeight,.1,1e3),r.position.set(5,5,8),l=new VR({antialias:!0}),l.setSize(s.current.clientWidth,s.current.clientHeight),l.setPixelRatio(window.devicePixelRatio),l.setClearColor(3355443),s.current.appendChild(l.domElement);const X=new ib(16777215,.9);i.add(X);const O=new y0(16777215,.5);O.position.set(5,10,7.5),i.add(O);const rt=new y0(16777215,.3);rt.position.set(-5,-5,-7.5),i.add(rt),i.userData.ambientLightColor=X.color.clone(),i.userData.directionalLight1={color:O.color.clone(),direction:O.position.clone().normalize()},i.userData.directionalLight2={color:rt.color.clone(),direction:rt.position.clone().normalize()},c=new XR(r,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const C=new Xo(.1,32,32),z=new _0({color:16777184,emissive:3355392}),tt=new hi(C,z);tt.visible=!1,i.add(tt);for(const it in D)f[it]=k(it),i.add(f[it]);w(),ht(d);const lt=Mt(i);window.addEventListener("resize",ft);let W=function(){requestAnimationFrame(W);const it=1/60;B(it),typeof lt=="function"&&lt(it),S+=.01*E;for(const st in f)f[st].material&&f[st].material.uniforms&&(f[st].material.uniforms.u_time.value=S,f[st].material.uniforms.viewMatrix.value=r.matrixWorldInverse,f[st].material.uniforms.u_waveHeight&&(f[st].material.uniforms.u_waveHeight.value=A),f[st].material.uniforms.u_waveFrequency&&(f[st].material.uniforms.u_waveFrequency.value=y));c.update(),l.render(i,r)};W()}function w(){const X=document.createElement("div"),O=document.createElement("div"),rt=document.createElement("label"),C=document.createElement("label"),z=document.createElement("select");z.id="orbitalSelector",z.style.width="100%",z.style.padding="8px",z.style.borderRadius="4px",z.style.backgroundColor="rgba(60, 60, 60, 0.8)",z.style.color="rgba(220, 220, 220, 0.9)",z.style.border="1px solid rgba(80, 80, 80, 0.8)",X.style.marginBottom="15px";for(const Re in D){const jt=document.createElement("option");jt.value=Re,jt.textContent=D[Re].name,z.appendChild(jt)}z.addEventListener("change",Re=>{ht(Re.target.value)});const tt=document.createElement("input");O.className="glass",O.style.padding="15px",O.style.borderRadius="8px",O.style.backgroundColor="rgba(50, 50, 50, 0.8)",O.style.backdropFilter="blur(10px)",O.style.WebkitBackdropFilter="blur(10px)",O.style.border="1px solid rgba(255, 255, 255, 0.05)",O.style.marginBottom="15px",tt.type="range",tt.id="crossSectionSlider",tt.min="-10",tt.max="10",tt.value="10",tt.step="0.1",C.style.fontWeight="bold",C.style.marginBottom="10px",C.style.display="block",C.style.color="rgba(220, 220, 220, 0.9)",tt.style.accentColor="rgb(220, 40, 40)",tt.style.width="100%",tt.style.marginBottom="5px",tt.addEventListener("input",Re=>{const jt=parseFloat(Re.target.value);for(const Wt in f)f[Wt].material&&f[Wt].material.uniforms&&(f[Wt].material.uniforms.u_crossSectionX.value=jt)});const lt=document.createElement("div");lt.style.marginTop="15px",lt.className="glass",lt.style.padding="15px",lt.style.borderRadius="8px",lt.style.backgroundColor="rgba(50, 50, 50, 0.8)",lt.style.backdropFilter="blur(10px)",lt.style.WebkitBackdropFilter="blur(10px)",lt.style.border="1px solid rgba(255, 255, 255, 0.05)",lt.style.marginBottom="15px";const W=document.createElement("label");W.style.fontWeight="bold",W.style.marginBottom="10px",W.style.display="block",W.style.color="rgba(220, 220, 220, 0.9)",W.textContent="Photon Wavelength:",W.setAttribute("for","wavelengthSlider"),lt.appendChild(W);const it=document.createElement("div");it.style.textAlign="center",it.style.marginBottom="10px",it.style.padding="5px",it.style.backgroundColor="rgba(40, 40, 40, 0.8)",it.style.borderRadius="4px",it.style.color="rgb(220, 40, 40)",it.style.fontWeight="bold",it.id="currentWavelength",it.textContent=v.toFixed(1)+" nm",it.style.fontSize="14px",it.style.textAlign="center",it.style.marginBottom="5px",lt.appendChild(it);const st=document.createElement("input");st.style.accentColor="rgb(220, 40, 40)",st.style.width="100%",st.style.marginBottom="5px",st.type="range",st.id="wavelengthSlider",st.min="0.2",st.max="3.0",st.value=v,st.step="0.1",lt.appendChild(st),st.addEventListener("input",Re=>{v=parseFloat(Re.target.value),document.getElementById("currentWavelength").textContent=v.toFixed(1)+" nm";const jt=gt(v);document.getElementById("photonEnergyDisplay").textContent=`Photon Energy: ${jt.eV.toFixed(1)} eV`});const bt=document.createElement("div");bt.style.display="flex",bt.style.justifyContent="space-between",bt.style.fontSize="12px",bt.style.marginTop="2px",bt.innerHTML="<span>0.2 nm</span><span>3.0 nm</span>",lt.appendChild(bt);const Et=document.createElement("div");Et.style.backgroundColor="rgba(40, 40, 40, 0.8)",Et.style.padding="5px",Et.style.borderRadius="4px",Et.style.marginTop="10px",Et.style.fontSize="13px",Et.style.color="rgba(200, 200, 200, 0.8)",Et.id="photonEnergyDisplay",Et.textContent=`Photon Energy: ${gt(v).eV.toFixed(1)} eV`,lt.appendChild(Et);const zt=document.createElement("button");zt.id="emitWaveBtn",zt.textContent="Emit Photon Wave",zt.addEventListener("click",()=>{});const wt=t.current;wt.innerHTML="",wt.className="glass",wt.style.padding="20px",wt.style.borderRadius="12px",wt.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)",wt.style.width="280px",wt.style.color="rgba(220, 220, 220, 0.9)",rt.style.fontWeight="bold",rt.style.marginBottom="10px",rt.style.display="block",rt.textContent="Select Orbital:",rt.setAttribute("for","orbitalSelector"),X.appendChild(rt),X.appendChild(z),wt.appendChild(X),wt.appendChild(lt),O.style.marginTop="15px",C.textContent="Cross-Section (X-axis):",C.setAttribute("for","crossSectionSlider"),O.appendChild(C),O.appendChild(tt);const ge=document.createElement("div");ge.style.display="flex",ge.style.justifyContent="space-between",ge.style.fontSize="12px",ge.innerHTML="<span>-10</span><span>0</span><span>10</span>",O.appendChild(ge),wt.appendChild(O);const re=document.createElement("button");re.id="waveTypeToggleBtn",re.textContent="Wave Type: Point",re.className="w-full p-2 rounded border transition-all",re.style.backgroundColor="rgba(50, 50, 50, 0.8)",re.style.borderColor="rgba(80, 80, 80, 0.8)",re.style.color="rgba(220, 220, 220, 0.9)",re.style.fontSize="14px",re.style.margin="10px 0",re.addEventListener("click",()=>{g==="linear"?(g="circular",re.textContent="Wave Type: Circular",re.style.backgroundColor="rgba(70, 70, 100, 0.8)"):(g="linear",re.textContent="Wave Type: Point",re.style.backgroundColor="rgba(50, 50, 50, 0.8)")});const oe=document.createElement("div");oe.style.marginTop="10px",oe.appendChild(re),wt.appendChild(oe);const H=document.createElement("div");H.style.marginTop="15px",zt.className="w-full p-2 rounded border transition-all hover:bg-opacity-90",zt.style.backgroundColor="rgb(220, 40, 40)",zt.style.borderColor="rgb(220, 40, 40)",zt.style.color="rgba(220, 220, 220, 0.9)",H.appendChild(zt),wt.appendChild(H)}function k(X){const O=D[X],rt=O.scale,C=O.generatePoints(p,rt),z=new Xo(m,8,6),tt=new ha({vertexShader:_,fragmentShader:P,uniforms:{baseColor:{value:new Se(O.color)},lowDensityColor:{value:new Se(O.lowDensityColor)},midDensityColor:{value:new Se(O.midDensityColor)},highDensityColor:{value:new Se(O.highDensityColor)},ambientLightColor:{value:i.userData.ambientLightColor},directionalLightColor1:{value:i.userData.directionalLight1.color},directionalLightDirection1:{value:i.userData.directionalLight1.direction},directionalLightColor2:{value:i.userData.directionalLight2.color},directionalLightDirection2:{value:i.userData.directionalLight2.direction},orbitalScale:{value:rt},u_time:{value:0},u_maxSpeedAtCenter:{value:50},u_minSpeedAtEdge:{value:.01},u_exponentialFalloffRate:{value:3.5},u_crossSectionX:{value:10},viewMatrix:{value:r.matrixWorldInverse},u_waveHeight:{value:A},u_waveFrequency:{value:y}}}),lt=new g0(z,tt,C.length),W=new Float32Array(C.length);for(let st=0;st<C.length;st++)W[st]=Math.random()*Math.PI*2;lt.geometry.setAttribute("a_initialPhase",new $c(W,1));const it=new Mn;for(let st=0;st<C.length;st++)it.position.set(C[st].x,C[st].y,C[st].z),it.updateMatrix(),lt.setMatrixAt(st,it.matrix);return lt.instanceMatrix.needsUpdate=!0,lt}function ht(X){for(const O in f)f[O].visible=!1;if(f[X]&&(f[X].visible=!0,d=X,D[X].cameraPosition)){let O=function(){const lt=performance.now()-tt,W=Math.min(lt/z,1),it=1-Math.pow(1-W,3);r.position.lerpVectors(C,rt,it),W<1&&requestAnimationFrame(O)};const rt=D[X].cameraPosition,C=r.position.clone(),z=1e3,tt=performance.now();O()}}function ft(){s.current&&(r.aspect=s.current.clientWidth/s.current.clientHeight,r.updateProjectionMatrix(),l.setSize(s.current.clientWidth,s.current.clientHeight))}function Mt(X){const O={waveSpeed:1,waveHeight:1.5,waveFrequency:.3,wavelength:v};let rt=!1,C=5;const z=130,tt=.25,lt=z*z,W=new Se(49151),it=.3,st=0,bt=new Xo(.12,8,6),Et=new _0({color:W,emissive:W.clone().multiplyScalar(.3),transparent:!0,opacity:.8}),zt=new g0(bt,Et,lt);zt.visible=!0,X.add(zt),zt.instanceColor=new $c(new Float32Array(lt*3),3);const wt=new Mn,ge=0;for(let Re=0;Re<z;Re++)for(let jt=0;jt<z;jt++){const Wt=Re*z+jt,Xt=(Re-z/2)*tt,Me=(jt-z/2)*tt+ge;wt.position.set(Xt,st,Me),wt.scale.set(it,it,it),wt.updateMatrix(),zt.setMatrixAt(Wt,wt.matrix),zt.setColorAt(Wt,W)}zt.instanceMatrix.needsUpdate=!0,zt.instanceColor.needsUpdate=!0;function re(){rt=!0,C=10,O.wavelength=v,O.waveFrequency=1/v;const Re=gt(v);document.getElementById("photonEnergyDisplay").textContent=`Photon Energy: ${Re.eV.toFixed(2)} eV`}function oe(Re){if(document.getElementById("wavelengthSlider")){v=parseFloat(document.getElementById("wavelengthSlider").value),document.getElementById("currentWavelength").textContent=v.toFixed(1)+" nm";const jt=gt(v);document.getElementById("photonEnergyDisplay").textContent=`Photon Energy: ${jt.eV.toFixed(1)} eV`}rt&&(C-=Re*O.waveSpeed*1.2,C<-25&&(rt=!1));for(let jt=0;jt<z;jt++)for(let Wt=0;Wt<z;Wt++){const Xt=jt*z+Wt,Me=(jt-z/2)*tt,kt=(Wt-z/2)*tt+ge;let N=Math.sin(S*.3+Me*.1+kt*.1)*.01,b=.4;if(rt)if(g==="linear"){const Tt=Me,pt=kt-C,Dt=Math.sqrt(Tt*Tt+pt*pt),Ct=5*v,Ft=10*v;if(Dt<Ft&&Dt<Ct){const Kt=1-Dt/Ct,At=O.waveHeight*v*Math.pow(Kt,2);At>N&&(N=At,b=.4+Math.min(.6,N/(O.waveHeight*v)*.6))}}else{const Dt=Math.abs(17-C)*1.2,Ct=Me-0,Ft=kt-17,Kt=Math.sqrt(Ct*Ct+Ft*Ft),At=Math.atan2(Ct,-Ft),Ht=Math.PI*.42;if(Math.abs(At)<=Ht){const Zt=1.8*v,Qt=Math.abs(Kt-Dt);if(Qt<Zt){const It=1-Qt/Zt,ce=Math.max(.3,1/(1+Dt*.05)),ne=Math.cos(At/Ht*(Math.PI/2))*Math.cos(At/Ht*(Math.PI/2)),Ne=Dt<8?Math.max(.5,Dt/8):1,Y=O.waveHeight*v*Math.pow(It,2)*ce*Math.pow(ne,2)*Ne;Y>N&&(N=Y,b=.4+Math.min(.6,N/(O.waveHeight*v)*.6))}}}wt.position.set(Me,N,kt);const nt=it+N*.7;wt.scale.set(nt,nt,nt),wt.updateMatrix(),zt.setMatrixAt(Xt,wt.matrix);const vt=W.clone().multiplyScalar(b);zt.setColorAt(Xt,vt)}zt.instanceMatrix.needsUpdate=!0,zt.instanceColor.needsUpdate=!0}const H=document.getElementById("emitWaveBtn");return H&&H.addEventListener("click",re),oe}function gt(X){const O=662607015e-42,rt=299792458,C=X*1e-9,z=O*rt/C,tt=z/1602176634e-28;return{joules:z,eV:tt}}function B(X){for(let O=x.length-1;O>=0;O--){const rt=x[O];if(rt.material&&rt.material.uniforms){const C=performance.now()*.001-rt.userData.startTime;rt.material.uniforms.time.value=C;const z=.3;rt.position.x+=z*X,rt.userData.totalDistance+=z*X;const tt=rt.userData.wavelength*1.2;rt.userData.totalDistance>tt&&(i.remove(rt),x.splice(O,1))}}}return L(),()=>{window.removeEventListener("resize",ft),l&&(l.dispose(),s.current&&s.current.contains(l.domElement)&&s.current.removeChild(l.domElement))}},[]),se.jsxs("div",{className:"quantum-container",style:{position:"relative",width:"100%",height:"100vh"},children:[se.jsx("div",{ref:s,className:"renderer-container",style:{width:"100%",height:"100%"}}),se.jsx("div",{ref:t,className:"gui-container",style:{position:"absolute",top:"20px",left:"20px",zIndex:10,backgroundColor:"rgba(40,40,40,0.85)",padding:"15px",width:"280px"}})]})}function aC(){return se.jsx(xM,{children:se.jsxs(ZS,{children:[se.jsx(jh,{path:"/",element:se.jsx(DM,{})}),se.jsx(jh,{path:"/quantum-playground",element:se.jsx(iC,{})})]})})}iS.createRoot(document.getElementById("root")).render(se.jsx(Zy.StrictMode,{children:se.jsx(aC,{})}));
