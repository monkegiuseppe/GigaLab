(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lh={exports:{}},Lo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function qx(){if(R_)return Lo;R_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var C_;function Yx(){return C_||(C_=1,lh.exports=qx()),lh.exports}var he=Yx(),ch={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function jx(){if(w_)return pe;w_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function x(P,nt,Et){this.props=P,this.context=nt,this.refs=T,this.updater=Et||S}x.prototype.isReactComponent={},x.prototype.setState=function(P,nt){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,nt,"setState")},x.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=x.prototype;function O(P,nt,Et){this.props=P,this.context=nt,this.refs=T,this.updater=Et||S}var U=O.prototype=new _;U.constructor=O,E(U,x.prototype),U.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function F(P,nt,Et,At,$,vt){return Et=vt.ref,{$$typeof:s,type:P,key:nt,ref:Et!==void 0?Et:null,props:vt}}function q(P,nt){return F(P.type,nt,void 0,void 0,void 0,P.props)}function L(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function R(P){var nt={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Et){return nt[Et]})}var V=/\/+/g;function ft(P,nt){return typeof P=="object"&&P!==null&&P.key!=null?R(""+P.key):nt.toString(36)}function ct(){}function Mt(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(ct,ct):(P.status="pending",P.then(function(nt){P.status==="pending"&&(P.status="fulfilled",P.value=nt)},function(nt){P.status==="pending"&&(P.status="rejected",P.reason=nt)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function mt(P,nt,Et,At,$){var vt=typeof P;(vt==="undefined"||vt==="boolean")&&(P=null);var bt=!1;if(P===null)bt=!0;else switch(vt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(P.$$typeof){case s:case t:bt=!0;break;case g:return bt=P._init,mt(bt(P._payload),nt,Et,At,$)}}if(bt)return $=$(P),bt=At===""?"."+ft(P,0):At,D($)?(Et="",bt!=null&&(Et=bt.replace(V,"$&/")+"/"),mt($,nt,Et,"",function(ut){return ut})):$!=null&&(L($)&&($=q($,Et+($.key==null||P&&P.key===$.key?"":(""+$.key).replace(V,"$&/")+"/")+bt)),nt.push($)),1;bt=0;var K=At===""?".":At+":";if(D(P))for(var W=0;W<P.length;W++)At=P[W],vt=K+ft(At,W),bt+=mt(At,nt,Et,vt,$);else if(W=v(P),typeof W=="function")for(P=W.call(P),W=0;!(At=P.next()).done;)At=At.value,vt=K+ft(At,W++),bt+=mt(At,nt,Et,vt,$);else if(vt==="object"){if(typeof P.then=="function")return mt(Mt(P),nt,Et,At,$);throw nt=String(P),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return bt}function z(P,nt,Et){if(P==null)return P;var At=[],$=0;return mt(P,At,"","",function(vt){return nt.call(Et,vt,$++)}),At}function J(P){if(P._status===-1){var nt=P._result;nt=nt(),nt.then(function(Et){(P._status===0||P._status===-1)&&(P._status=1,P._result=Et)},function(Et){(P._status===0||P._status===-1)&&(P._status=2,P._result=Et)}),P._status===-1&&(P._status=0,P._result=nt)}if(P._status===1)return P._result.default;throw P._result}var Y=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ct(){}return pe.Children={map:z,forEach:function(P,nt,Et){z(P,function(){nt.apply(this,arguments)},Et)},count:function(P){var nt=0;return z(P,function(){nt++}),nt},toArray:function(P){return z(P,function(nt){return nt})||[]},only:function(P){if(!L(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},pe.Component=x,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=O,pe.StrictMode=r,pe.Suspense=p,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,pe.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},pe.cache=function(P){return function(){return P.apply(null,arguments)}},pe.cloneElement=function(P,nt,Et){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var At=E({},P.props),$=P.key,vt=void 0;if(nt!=null)for(bt in nt.ref!==void 0&&(vt=void 0),nt.key!==void 0&&($=""+nt.key),nt)!H.call(nt,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&nt.ref===void 0||(At[bt]=nt[bt]);var bt=arguments.length-2;if(bt===1)At.children=Et;else if(1<bt){for(var K=Array(bt),W=0;W<bt;W++)K[W]=arguments[W+2];At.children=K}return F(P.type,$,void 0,void 0,vt,At)},pe.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},pe.createElement=function(P,nt,Et){var At,$={},vt=null;if(nt!=null)for(At in nt.key!==void 0&&(vt=""+nt.key),nt)H.call(nt,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&($[At]=nt[At]);var bt=arguments.length-2;if(bt===1)$.children=Et;else if(1<bt){for(var K=Array(bt),W=0;W<bt;W++)K[W]=arguments[W+2];$.children=K}if(P&&P.defaultProps)for(At in bt=P.defaultProps,bt)$[At]===void 0&&($[At]=bt[At]);return F(P,vt,void 0,void 0,null,$)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(P){return{$$typeof:h,render:P}},pe.isValidElement=L,pe.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:J}},pe.memo=function(P,nt){return{$$typeof:m,type:P,compare:nt===void 0?null:nt}},pe.startTransition=function(P){var nt=B.T,Et={};B.T=Et;try{var At=P(),$=B.S;$!==null&&$(Et,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(Ct,Y)}catch(vt){Y(vt)}finally{B.T=nt}},pe.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},pe.use=function(P){return B.H.use(P)},pe.useActionState=function(P,nt,Et){return B.H.useActionState(P,nt,Et)},pe.useCallback=function(P,nt){return B.H.useCallback(P,nt)},pe.useContext=function(P){return B.H.useContext(P)},pe.useDebugValue=function(){},pe.useDeferredValue=function(P,nt){return B.H.useDeferredValue(P,nt)},pe.useEffect=function(P,nt,Et){var At=B.H;if(typeof Et=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return At.useEffect(P,nt)},pe.useId=function(){return B.H.useId()},pe.useImperativeHandle=function(P,nt,Et){return B.H.useImperativeHandle(P,nt,Et)},pe.useInsertionEffect=function(P,nt){return B.H.useInsertionEffect(P,nt)},pe.useLayoutEffect=function(P,nt){return B.H.useLayoutEffect(P,nt)},pe.useMemo=function(P,nt){return B.H.useMemo(P,nt)},pe.useOptimistic=function(P,nt){return B.H.useOptimistic(P,nt)},pe.useReducer=function(P,nt,Et){return B.H.useReducer(P,nt,Et)},pe.useRef=function(P){return B.H.useRef(P)},pe.useState=function(P){return B.H.useState(P)},pe.useSyncExternalStore=function(P,nt,Et){return B.H.useSyncExternalStore(P,nt,Et)},pe.useTransition=function(){return B.H.useTransition()},pe.version="19.1.0",pe}var D_;function zd(){return D_||(D_=1,ch.exports=jx()),ch.exports}var yt=zd();const Zx=Z0(yt);var uh={exports:{}},No={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Kx(){return U_||(U_=1,function(s){function t(z,J){var Y=z.length;z.push(J);t:for(;0<Y;){var Ct=Y-1>>>1,P=z[Ct];if(0<l(P,J))z[Ct]=J,z[Y]=P,Y=Ct;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var J=z[0],Y=z.pop();if(Y!==J){z[0]=Y;t:for(var Ct=0,P=z.length,nt=P>>>1;Ct<nt;){var Et=2*(Ct+1)-1,At=z[Et],$=Et+1,vt=z[$];if(0>l(At,Y))$<P&&0>l(vt,At)?(z[Ct]=vt,z[$]=Y,Ct=$):(z[Ct]=At,z[Et]=Y,Ct=Et);else if($<P&&0>l(vt,Y))z[Ct]=vt,z[$]=Y,Ct=$;else break t}}return J}function l(z,J){var Y=z.sortIndex-J.sortIndex;return Y!==0?Y:z.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,y=null,v=3,S=!1,E=!1,T=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var J=i(m);J!==null;){if(J.callback===null)r(m);else if(J.startTime<=z)r(m),J.sortIndex=J.expirationTime,t(p,J);else break;J=i(m)}}function B(z){if(T=!1,D(z),!E)if(i(p)!==null)E=!0,H||(H=!0,ft());else{var J=i(m);J!==null&&mt(B,J.startTime-z)}}var H=!1,F=-1,q=5,L=-1;function R(){return x?!0:!(s.unstable_now()-L<q)}function V(){if(x=!1,H){var z=s.unstable_now();L=z;var J=!0;try{t:{E=!1,T&&(T=!1,O(F),F=-1),S=!0;var Y=v;try{e:{for(D(z),y=i(p);y!==null&&!(y.expirationTime>z&&R());){var Ct=y.callback;if(typeof Ct=="function"){y.callback=null,v=y.priorityLevel;var P=Ct(y.expirationTime<=z);if(z=s.unstable_now(),typeof P=="function"){y.callback=P,D(z),J=!0;break e}y===i(p)&&r(p),D(z)}else r(p);y=i(p)}if(y!==null)J=!0;else{var nt=i(m);nt!==null&&mt(B,nt.startTime-z),J=!1}}break t}finally{y=null,v=Y,S=!1}J=void 0}}finally{J?ft():H=!1}}}var ft;if(typeof U=="function")ft=function(){U(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,Mt=ct.port2;ct.port1.onmessage=V,ft=function(){Mt.postMessage(null)}}else ft=function(){_(V,0)};function mt(z,J){F=_(function(){z(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(z){switch(v){case 1:case 2:case 3:var J=3;break;default:J=v}var Y=v;v=J;try{return z()}finally{v=Y}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(z,J){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=v;v=z;try{return J()}finally{v=Y}},s.unstable_scheduleCallback=function(z,J,Y){var Ct=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Ct+Y:Ct):Y=Ct,z){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Y+P,z={id:g++,callback:J,priorityLevel:z,startTime:Y,expirationTime:P,sortIndex:-1},Y>Ct?(z.sortIndex=Y,t(m,z),i(p)===null&&z===i(m)&&(T?(O(F),F=-1):T=!0,mt(B,Y-Ct))):(z.sortIndex=P,t(p,z),E||S||(E=!0,H||(H=!0,ft()))),z},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(z){var J=v;return function(){var Y=v;v=J;try{return z.apply(this,arguments)}finally{v=Y}}}}(hh)),hh}var L_;function Qx(){return L_||(L_=1,fh.exports=Kx()),fh.exports}var dh={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Jx(){if(N_)return Nn;N_=1;var s=zd();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Nn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Nn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,S=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:S}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:v,fetchPriority:S,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Nn.requestFormReset=function(p){r.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.1.0",Nn}var P_;function $x(){if(P_)return dh.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=Jx(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function tS(){if(O_)return No;O_=1;var s=Qx(),t=zd(),i=$x();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=d;break}if(A===o){M=!0,o=u,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=u;break}if(A===o){M=!0,o=d,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ft(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ct=Symbol.for("react.client.reference");function Mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case T:return"StrictMode";case B:return"Suspense";case H:return"SuspenseList";case L:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case S:return"Portal";case U:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:Mt(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return Mt(e(n))}catch{}}return null}var mt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Ct=[],P=-1;function nt(e){return{current:e}}function Et(e){0>P||(e.current=Ct[P],Ct[P]=null,P--)}function At(e,n){P++,Ct[P]=e.current,e.current=n}var $=nt(null),vt=nt(null),bt=nt(null),K=nt(null);function W(e,n){switch(At(bt,n),At(vt,e),At($,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Et($),At($,e)}function ut(){Et($),Et(vt),Et(bt)}function wt(e){e.memoizedState!==null&&At(K,e);var n=$.current,a=n_(n,e.type);n!==a&&(At(vt,e),At($,a))}function Wt(e){vt.current===e&&(Et($),Et(vt)),K.current===e&&(Et(K),Ro._currentValue=Y)}var Qt=Object.prototype.hasOwnProperty,It=s.unstable_scheduleCallback,N=s.unstable_cancelCallback,ie=s.unstable_shouldYield,qt=s.unstable_requestPaint,Tt=s.unstable_now,Ot=s.unstable_getCurrentPriorityLevel,ae=s.unstable_ImmediatePriority,zt=s.unstable_UserBlockingPriority,C=s.unstable_NormalPriority,b=s.unstable_LowPriority,X=s.unstable_IdlePriority,gt=s.log,xt=s.unstable_setDisableYieldValue,ht=null,Ft=null;function Dt(e){if(typeof gt=="function"&&xt(e),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(ht,e)}catch{}}var Nt=Math.clz32?Math.clz32:Ht,Kt=Math.log,Rt=Math.LN2;function Ht(e){return e>>>=0,e===0?32:31-(Kt(e)/Rt|0)|0}var Vt=256,Pt=4194304;function Ut(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function te(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ut(o):(M&=A,M!==0?u=Ut(M):a||(a=A&~e,a!==0&&(u=Ut(a))))):(A=o&~d,A!==0?u=Ut(A):M!==0?u=Ut(M):a||(a=o&~e,a!==0&&(u=Ut(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function de(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function G(){var e=Vt;return Vt<<=1,(Vt&4194048)===0&&(Vt=256),e}function Bt(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function st(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function dt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kt(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var pt=31-Nt(a),St=1<<pt;A[pt]=0,I[pt]=-1;var at=it[pt];if(at!==null)for(it[pt]=null,pt=0;pt<at.length;pt++){var rt=at[pt];rt!==null&&(rt.lane&=-536870913)}a&=~St}o!==0&&Gt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Gt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Nt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function le(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Nt(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function we(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ye(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Te(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function wn(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var sn=Math.random().toString(36).slice(2),nn="__reactFiber$"+sn,fn="__reactProps$"+sn,bn="__reactContainer$"+sn,Ja="__reactEvents$"+sn,al="__reactListeners$"+sn,rl="__reactHandles$"+sn,$a="__reactResources$"+sn,pa="__reactMarker$"+sn;function ma(e){delete e[nn],delete e[fn],delete e[Ja],delete e[al],delete e[rl]}function zi(e){var n=e[nn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bn]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=s_(e);e!==null;){if(a=e[nn])return a;e=s_(e)}return n}e=a,a=e.parentNode}return null}function Bi(e){if(e=e[nn]||e[bn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function tr(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ga(e){var n=e[$a];return n||(n=e[$a]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function on(e){e[pa]=!0}var sl=new Set,ol={};function Fi(e,n){w(e,n),w(e+"Capture",n)}function w(e,n){for(ol[e]=n,e=0;e<n.length;e++)sl.add(n[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},lt={};function Q(e){return Qt.call(lt,e)?!0:Qt.call(ot,e)?!1:Z.test(e)?lt[e]=!0:(ot[e]=!0,!1)}function Lt(e,n,a){if(Q(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Yt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Zt,ue;function re(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+ue}var ne=!1;function xe(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var St=function(){throw Error()};if(Object.defineProperty(St.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(St,[])}catch(rt){var at=rt}Reflect.construct(e,[],St)}else{try{St.call()}catch(rt){at=rt}e.call(St.prototype)}}else{try{throw Error()}catch(rt){at=rt}(St=e())&&typeof St.catch=="function"&&St.catch(function(){})}}catch(rt){if(rt&&at&&typeof rt.stack=="string")return[rt.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var I=M.split(`
`),it=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===it.length)for(o=I.length-1,u=it.length-1;1<=o&&0<=u&&I[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==it[u]){var pt=`
`+I[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?re(a):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return re(e.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 15:return xe(e.type,!1);case 11:return xe(e.type.render,!1);case 1:return xe(e.type,!0);case 31:return re("Activity");default:return""}}function Ze(e){try{var n="";do n+=Ue(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Ae(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Re(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function se(e){var n=Re(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Je(e){e._valueTracker||(e._valueTracker=se(e))}function De(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Re(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Dn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _a=/[\n"\\]/g;function Xe(e){return e.replace(_a,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Hi(e,n,a,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Ae(n)):e.value!==""+Ae(n)&&(e.value=""+Ae(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Un(e,M,Ae(n)):a!=null?Un(e,M,Ae(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Ae(A):e.removeAttribute("name")}function Ve(e,n,a,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Ae(a):"",n=n!=null?""+Ae(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Un(e,n,a){n==="number"&&Dn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Ae(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+Ae(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Ae(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(mt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ae(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Gi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Gi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function np(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ep(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&ep(e,d,n[d])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ll(e){return Wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ir=null,zr=null;function ip(e){var n=Bi(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Hi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Xe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[fn]||null;if(!u)throw Error(r(90));Hi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&De(o)}break t;case"textarea":vn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var cu=!1;function ap(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Ir!==null||zr!==null)&&(Yl(),Ir&&(n=Ir,e=zr,zr=Ir=null,ip(n),e)))for(n=0;n<e.length;n++)ip(e[n])}}function Fs(e,n){var a=e.stateNode;if(a===null)return null;var o=a[fn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Vi)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{uu=!1}var va=null,fu=null,cl=null;function rp(){if(cl)return cl;var e,n=fu,a=n.length,o,u="value"in va?va.value:va.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return cl=u.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function fl(){return!0}function sp(){return!1}function Fn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?fl:sp,this.isPropagationStopped=sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=fl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=fl)},persist:function(){},isPersistent:fl}),n}var er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hl=Fn(er),Gs=g({},er,{view:0,detail:0}),qv=Fn(Gs),hu,du,Vs,dl=g({},Gs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vs&&(Vs&&e.type==="mousemove"?(hu=e.screenX-Vs.screenX,du=e.screenY-Vs.screenY):du=hu=0,Vs=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),op=Fn(dl),Yv=g({},dl,{dataTransfer:0}),jv=Fn(Yv),Zv=g({},Gs,{relatedTarget:0}),pu=Fn(Zv),Kv=g({},er,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Fn(Kv),Jv=g({},er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Fn(Jv),ty=g({},er,{data:0}),lp=Fn(ty),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iy[e])?!!n[e]:!1}function mu(){return ay}var ry=g({},Gs,{key:function(e){if(e.key){var n=ey[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sy=Fn(ry),oy=g({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Fn(oy),ly=g({},Gs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),cy=Fn(ly),uy=g({},er,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=Fn(uy),hy=g({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Fn(hy),py=g({},er,{newState:0,oldState:0}),my=Fn(py),gy=[9,13,27,32],gu=Vi&&"CompositionEvent"in window,ks=null;Vi&&"documentMode"in document&&(ks=document.documentMode);var _y=Vi&&"TextEvent"in window&&!ks,up=Vi&&(!gu||ks&&8<ks&&11>=ks),fp=" ",hp=!1;function dp(e,n){switch(e){case"keyup":return gy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Br=!1;function vy(e,n){switch(e){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(hp=!0,fp);case"textInput":return e=n.data,e===fp&&hp?null:e;default:return null}}function yy(e,n){if(Br)return e==="compositionend"||!gu&&dp(e,n)?(e=rp(),cl=fu=va=null,Br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xy[e.type]:n==="textarea"}function gp(e,n,a,o){Ir?zr?zr.push(o):zr=[o]:Ir=o,n=$l(n,"onChange"),0<n.length&&(a=new hl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Xs=null,Ws=null;function Sy(e){Kg(e,0)}function pl(e){var n=tr(e);if(De(n))return e}function _p(e,n){if(e==="change")return n}var vp=!1;if(Vi){var _u;if(Vi){var vu="oninput"in document;if(!vu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),vu=typeof yp.oninput=="function"}_u=vu}else _u=!1;vp=_u&&(!document.documentMode||9<document.documentMode)}function xp(){Xs&&(Xs.detachEvent("onpropertychange",Sp),Ws=Xs=null)}function Sp(e){if(e.propertyName==="value"&&pl(Ws)){var n=[];gp(n,Ws,e,lu(e)),ap(Sy,n)}}function My(e,n,a){e==="focusin"?(xp(),Xs=n,Ws=a,Xs.attachEvent("onpropertychange",Sp)):e==="focusout"&&xp()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(Ws)}function by(e,n){if(e==="click")return pl(n)}function Ty(e,n){if(e==="input"||e==="change")return pl(n)}function Ay(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var qn=typeof Object.is=="function"?Object.is:Ay;function qs(e,n){if(qn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Qt.call(n,u)||!qn(e[u],n[u]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=Mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Dn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Dn(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ry=Vi&&"documentMode"in document&&11>=document.documentMode,Fr=null,xu=null,Ys=null,Su=!1;function Ap(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||Fr==null||Fr!==Dn(o)||(o=Fr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ys&&qs(Ys,o)||(Ys=o,o=$l(xu,"onSelect"),0<o.length&&(n=new hl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Fr)))}function nr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Hr={animationend:nr("Animation","AnimationEnd"),animationiteration:nr("Animation","AnimationIteration"),animationstart:nr("Animation","AnimationStart"),transitionrun:nr("Transition","TransitionRun"),transitionstart:nr("Transition","TransitionStart"),transitioncancel:nr("Transition","TransitionCancel"),transitionend:nr("Transition","TransitionEnd")},Mu={},Rp={};Vi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),"TransitionEvent"in window||delete Hr.transitionend.transition);function ir(e){if(Mu[e])return Mu[e];if(!Hr[e])return e;var n=Hr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return Mu[e]=n[a];return e}var Cp=ir("animationend"),wp=ir("animationiteration"),Dp=ir("animationstart"),Cy=ir("transitionrun"),wy=ir("transitionstart"),Dy=ir("transitioncancel"),Up=ir("transitionend"),Lp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function di(e,n){Lp.set(e,n),Fi(n,[e])}var Np=new WeakMap;function ni(e,n){if(typeof e=="object"&&e!==null){var a=Np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ze(n)},Np.set(e,n),n)}return{value:e,source:n,stack:Ze(n)}}var ii=[],Gr=0,bu=0;function ml(){for(var e=Gr,n=bu=Gr=0;n<e;){var a=ii[n];ii[n++]=null;var o=ii[n];ii[n++]=null;var u=ii[n];ii[n++]=null;var d=ii[n];if(ii[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Pp(a,u,d)}}function gl(e,n,a,o){ii[Gr++]=e,ii[Gr++]=n,ii[Gr++]=a,ii[Gr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return gl(e,n,a,o),_l(e)}function Vr(e,n){return gl(e,null,null,n),_l(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-Nt(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function _l(e){if(50<yo)throw yo=0,Lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var kr={};function Uy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yn(e,n,a,o){return new Uy(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ki(e,n){var a=e.alternate;return a===null?(a=Yn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function vl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Au(e)&&(M=1);else if(typeof e=="string")M=Nx(e,a,$.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case L:return e=Yn(31,a,n,u),e.elementType=L,e.lanes=d,e;case E:return ar(a.children,u,d,n);case T:M=8,u|=24;break;case x:return e=Yn(12,a,n,u|2),e.elementType=x,e.lanes=d,e;case B:return e=Yn(13,a,n,u),e.elementType=B,e.lanes=d,e;case H:return e=Yn(19,a,n,u),e.elementType=H,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case U:M=10;break t;case O:M=9;break t;case D:M=11;break t;case F:M=14;break t;case q:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Yn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function ar(e,n,a,o){return e=Yn(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=Yn(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=Yn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Xr=[],Wr=0,yl=null,xl=0,ai=[],ri=0,rr=null,Xi=1,Wi="";function sr(e,n){Xr[Wr++]=xl,Xr[Wr++]=yl,yl=e,xl=n}function Ip(e,n,a){ai[ri++]=Xi,ai[ri++]=Wi,ai[ri++]=rr,rr=e;var o=Xi;e=Wi;var u=32-Nt(o)-1;o&=~(1<<u),a+=1;var d=32-Nt(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Xi=1<<32-Nt(n)+u|a<<u|o,Wi=d+e}else Xi=1<<d|a<<u|o,Wi=e}function wu(e){e.return!==null&&(sr(e,1),Ip(e,1,0))}function Du(e){for(;e===yl;)yl=Xr[--Wr],Xr[Wr]=null,xl=Xr[--Wr],Xr[Wr]=null;for(;e===rr;)rr=ai[--ri],ai[ri]=null,Wi=ai[--ri],ai[ri]=null,Xi=ai[--ri],ai[ri]=null}var In=null,$e=null,Pe=!1,or=null,bi=!1,Uu=Error(r(519));function lr(e){var n=Error(r(418,""));throw Ks(ni(n,e)),Uu}function zp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[nn]=e,n[fn]=o,a){case"dialog":Me("cancel",n),Me("close",n);break;case"iframe":case"object":case"embed":Me("load",n);break;case"video":case"audio":for(a=0;a<So.length;a++)Me(So[a],n);break;case"source":Me("error",n);break;case"img":case"image":case"link":Me("error",n),Me("load",n);break;case"details":Me("toggle",n);break;case"input":Me("invalid",n),Ve(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),Je(n);break;case"select":Me("invalid",n);break;case"textarea":Me("invalid",n),Tn(n,o.value,o.defaultValue,o.children),Je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(Me("beforetoggle",n),Me("toggle",n)),o.onScroll!=null&&Me("scroll",n),o.onScrollEnd!=null&&Me("scrollend",n),o.onClick!=null&&(n.onclick=tc),n=!0):n=!1,n||lr(e)}function Bp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:In=In.return}}function js(e){if(e!==In)return!1;if(!Pe)return Bp(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&$e&&lr(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){$e=mi(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}$e=null}}else n===27?(n=$e,Pa(e.type)?(e=Jf,Jf=null,$e=e):$e=n):$e=In?mi(e.stateNode.nextSibling):null;return!0}function Zs(){$e=In=null,Pe=!1}function Fp(){var e=or;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),or=null),e}function Ks(e){or===null?or=[e]:or.push(e)}var Lu=nt(null),cr=null,qi=null;function ya(e,n,a){At(Lu,n._currentValue),n._currentValue=a}function Yi(e){e._currentValue=Lu.current,Et(Lu)}function Nu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Nu(d.return,a,e),o||(M=null);break t}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Nu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Qs(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;qn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===K.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Ro):e=[Ro])}u=u.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ur(e){cr=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ln(e){return Hp(cr,e)}function Ml(e,n){return cr===null&&ur(e),Hp(e,n)}function Hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else qi=qi.next=n;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ny=s.unstable_scheduleCallback,Py=s.unstable_NormalPriority,dn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Ly,data:new Map,refCount:0}}function Js(e){e.refCount--,e.refCount===0&&Ny(Py,function(){e.controller.abort()})}var $s=null,Iu=0,qr=0,Yr=null;function Oy(e,n){if($s===null){var a=$s=[];Iu=0,qr=Ff(),Yr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Iu++,n.then(Gp,Gp),n}function Gp(){if(--Iu===0&&$s!==null){Yr!==null&&(Yr.status="fulfilled");var e=$s;$s=null,qr=0,Yr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Iy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vp=z.S;z.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Oy(e,n),Vp!==null&&Vp(e,n)};var fr=nt(null);function zu(){var e=fr.current;return e!==null?e:We.pooledCache}function El(e,n){n===null?At(fr,fr.current):At(fr,n.pool)}function kp(){var e=zu();return e===null?null:{parent:dn._currentValue,pool:e}}var to=Error(r(460)),Xp=Error(r(474)),bl=Error(r(542)),Bu={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Tl(){}function qp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Tl,Tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Tl,Tl);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw eo=n,to}}var eo=null;function Yp(){if(eo===null)throw Error(r(459));var e=eo;return eo=null,e}function jp(e){if(e===to||e===bl)throw Error(r(483))}var xa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=_l(e),Pp(e,null,a),n}return gl(e,o,n,a),_l(e)}function no(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}function Gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vu=!1;function io(){if(Vu){var e=Yr;if(e!==null)throw e}}function ao(e,n,a,o){Vu=!1;var u=e.updateQueue;xa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,it=I.next;I.next=null,M===null?d=it:M.next=it,M=I;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,A=pt.lastBaseUpdate,A!==M&&(A===null?pt.firstBaseUpdate=it:A.next=it,pt.lastBaseUpdate=I))}if(d!==null){var St=u.baseState;M=0,pt=it=I=null,A=d;do{var at=A.lane&-536870913,rt=at!==A.lane;if(rt?(Ce&at)===at:(o&at)===at){at!==0&&at===qr&&(Vu=!0),pt!==null&&(pt=pt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var fe=e,oe=A;at=n;var Fe=a;switch(oe.tag){case 1:if(fe=oe.payload,typeof fe=="function"){St=fe.call(Fe,St,at);break t}St=fe;break t;case 3:fe.flags=fe.flags&-65537|128;case 0:if(fe=oe.payload,at=typeof fe=="function"?fe.call(Fe,St,at):fe,at==null)break t;St=g({},St,at);break t;case 2:xa=!0}}at=A.callback,at!==null&&(e.flags|=64,rt&&(e.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[at]:rt.push(at))}else rt={lane:at,tag:A.tag,payload:A.payload,callback:A.callback,next:null},pt===null?(it=pt=rt,I=St):pt=pt.next=rt,M|=at;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);pt===null&&(I=St),u.baseState=I,u.firstBaseUpdate=it,u.lastBaseUpdate=pt,d===null&&(u.shared.lanes=0),Da|=M,e.lanes=M,e.memoizedState=St}}function Zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var jr=nt(null),Al=nt(0);function Qp(e,n){e=ta,At(Al,e),At(jr,n),ta=e|n.baseLanes}function ku(){At(Al,ta),At(jr,jr.current)}function Xu(){ta=Al.current,Et(jr),Et(Al)}var Ea=0,ve=null,ze=null,ln=null,Rl=!1,Zr=!1,hr=!1,Cl=0,ro=0,Kr=null,zy=0;function an(){throw Error(r(321))}function Wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!qn(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,d){return Ea=d,ve=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Pm:Om,hr=!1,d=a(o,u),hr=!1,Zr&&(d=$p(n,a,o,u)),Jp(e),d}function Jp(e){z.H=Pl;var n=ze!==null&&ze.next!==null;if(Ea=0,ln=ze=ve=null,Rl=!1,ro=0,Kr=null,n)throw Error(r(300));e===null||yn||(e=e.dependencies,e!==null&&Sl(e)&&(yn=!0))}function $p(e,n,a,o){ve=e;var u=0;do{if(Zr&&(Kr=null),ro=0,Zr=!1,25<=u)throw Error(r(301));if(u+=1,ln=ze=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=Xy,d=n(a,o)}while(Zr);return d}function By(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?so(n):n,e=e.useState()[0],(ze!==null?ze.memoizedState:null)!==e&&(ve.flags|=1024),n}function Yu(){var e=Cl!==0;return Cl=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Rl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Rl=!1}Ea=0,ln=ze=ve=null,Zr=!1,ro=Cl=0,Kr=null}function Hn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ve.memoizedState=ln=e:ln=ln.next=e,ln}function cn(){if(ze===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var n=ln===null?ve.memoizedState:ln.next;if(n!==null)ln=n,ze=e;else{if(e===null)throw ve.alternate===null?Error(r(467)):Error(r(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},ln===null?ve.memoizedState=ln=e:ln=ln.next=e}return ln}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function so(e){var n=ro;return ro+=1,Kr===null&&(Kr=[]),e=qp(Kr,e,n),n=ve,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Pm:Om),e}function wl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return so(e);if(e.$$typeof===U)return Ln(e)}throw Error(r(438,String(e)))}function Qu(e){var n=null,a=ve.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ve.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),ve.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function ji(e,n){return typeof n=="function"?n(e):n}function Dl(e){var n=cn();return Ju(n,ze,e)}function Ju(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=M=null,I=null,it=n,pt=!1;do{var St=it.lane&-536870913;if(St!==it.lane?(Ce&St)===St:(Ea&St)===St){var at=it.revertLane;if(at===0)I!==null&&(I=I.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),St===qr&&(pt=!0);else if((Ea&at)===at){it=it.next,at===qr&&(pt=!0);continue}else St={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},I===null?(A=I=St,M=d):I=I.next=St,ve.lanes|=at,Da|=at;St=it.action,hr&&a(d,St),d=it.hasEagerState?it.eagerState:a(d,St)}else at={lane:St,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},I===null?(A=I=at,M=d):I=I.next=at,ve.lanes|=St,Da|=St;it=it.next}while(it!==null&&it!==n);if(I===null?M=d:I.next=A,!qn(d,e.memoizedState)&&(yn=!0,pt&&(a=Yr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=I,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);qn(d,n.memoizedState)||(yn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function tm(e,n,a){var o=ve,u=cn(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!qn((ze||u).memoizedState,a);M&&(u.memoizedState=a,yn=!0),u=u.queue;var A=im.bind(null,o,u,e);if(oo(2048,8,A,[e]),u.getSnapshot!==n||M||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,Qr(9,Ul(),nm.bind(null,o,u,a,n),null),We===null)throw Error(r(349));d||(Ea&124)!==0||em(o,n,a)}return a}function em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ve.updateQueue,n===null?(n=Ku(),ve.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function nm(e,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&rm(e)}function im(e,n,a){return a(function(){am(n)&&rm(e)})}function am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!qn(e,a)}catch{return!0}}function rm(e){var n=Vr(e,2);n!==null&&Jn(n,e,2)}function tf(e){var n=Hn();if(typeof e=="function"){var a=e;if(e=a(),hr){Dt(!0);try{a()}finally{Dt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:e},n}function sm(e,n,a,o){return e.baseState=a,Ju(e,ze,typeof o=="function"?o:ji)}function Fy(e,n,a,o,u){if(Nl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};z.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=z.T,M={};z.T=M;try{var A=a(u,o),I=z.S;I!==null&&I(M,A),lm(e,n,A)}catch(it){ef(e,n,it)}finally{z.T=d}}else try{d=a(u,o),lm(e,n,d)}catch(it){ef(e,n,it)}}function lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(e,n,o)},function(o){return ef(e,n,o)}):cm(e,n,a)}function cm(e,n,a){n.status="fulfilled",n.value=a,um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,om(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}e.action=null}function um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fm(e,n){return n}function hm(e,n){if(Pe){var a=We.formState;if(a!==null){t:{var o=ve;if(Pe){if($e){e:{for(var u=$e,d=bi;u.nodeType!==8;){if(!d){u=null;break e}if(u=mi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){$e=mi(u.nextSibling),o=u.data==="F!";break t}}lr(o)}o=!1}o&&(n=a[0])}}return a=Hn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Um.bind(null,ve,o),o.dispatch=a,o=tf(!1),d=of.bind(null,ve,!1,o.queue),o=Hn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Fy.bind(null,ve,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dm(e){var n=cn();return pm(n,ze,e)}function pm(e,n,a){if(n=Ju(e,n,fm)[0],e=Dl(ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=so(n)}catch(M){throw M===to?bl:M}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(ve.flags|=2048,Qr(9,Ul(),Hy.bind(null,u,a),null)),[o,d,e]}function Hy(e,n){e.action=n}function mm(e){var n=cn(),a=ze;if(a!==null)return pm(n,a,e);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Qr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ve.updateQueue,n===null&&(n=Ku(),ve.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ul(){return{destroy:void 0,resource:void 0}}function gm(){return cn().memoizedState}function Ll(e,n,a,o){var u=Hn();o=o===void 0?null:o,ve.flags|=e,u.memoizedState=Qr(1|n,Ul(),a,o)}function oo(e,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;ze!==null&&o!==null&&Wu(o,ze.memoizedState.deps)?u.memoizedState=Qr(n,d,a,o):(ve.flags|=e,u.memoizedState=Qr(1|n,d,a,o))}function _m(e,n){Ll(8390656,8,e,n)}function vm(e,n){oo(2048,8,e,n)}function ym(e,n){return oo(4,2,e,n)}function xm(e,n){return oo(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,oo(4,4,Sm.bind(null,n,e),a)}function nf(){}function Em(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bm(e,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=e(),hr){Dt(!0);try{e()}finally{Dt(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(Ea&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Rg(),ve.lanes|=e,Da|=e,a)}function Tm(e,n,a,o){return qn(a,n)?a:jr.current!==null?(e=af(e,a,o),qn(e,n)||(yn=!0),e):(Ea&42)===0?(yn=!0,e.memoizedState=a):(e=Rg(),ve.lanes|=e,Da|=e,n)}function Am(e,n,a,o,u){var d=J.p;J.p=d!==0&&8>d?d:8;var M=z.T,A={};z.T=A,of(e,!1,n,a);try{var I=u(),it=z.S;if(it!==null&&it(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var pt=Iy(I,o);lo(e,n,pt,Qn(e))}else lo(e,n,o,Qn(e))}catch(St){lo(e,n,{then:function(){},status:"rejected",reason:St},Qn())}finally{J.p=d,z.T=M}}function Gy(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Rm(e).queue;Am(e,u,n,Y,a===null?Gy:function(){return Cm(e),a(o)})}function Rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ji,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=Rm(e).next.queue;lo(e,n,{},Qn())}function sf(){return Ln(Ro)}function wm(){return cn().memoizedState}function Dm(){return cn().memoizedState}function Vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=Sa(a);var o=Ma(n,e,a);o!==null&&(Jn(o,n,a),no(o,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function ky(e,n,a){var o=Qn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Nl(e)?Lm(n,a):(a=Tu(e,n,a,o),a!==null&&(Jn(a,e,o),Nm(a,n,o)))}function Um(e,n,a){var o=Qn();lo(e,n,a,o)}function lo(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nl(e))Lm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(u.hasEagerState=!0,u.eagerState=A,qn(A,M))return gl(e,n,u,0),We===null&&ml(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return Jn(a,e,o),Nm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},Nl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,o,2),n!==null&&Jn(n,e,2)}function Nl(e){var n=e.alternate;return e===ve||n!==null&&n===ve}function Lm(e,n){Zr=Rl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Nm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,le(e,a)}}var Pl={readContext:Ln,use:wl,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an},Pm={readContext:Ln,use:wl,useCallback:function(e,n){return Hn().memoizedState=[e,n===void 0?null:n],e},useContext:Ln,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ll(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ll(4194308,4,e,n)},useInsertionEffect:function(e,n){Ll(4,2,e,n)},useMemo:function(e,n){var a=Hn();n=n===void 0?null:n;var o=e();if(hr){Dt(!0);try{e()}finally{Dt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Hn();if(a!==void 0){var u=a(n);if(hr){Dt(!0);try{a(n)}finally{Dt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ky.bind(null,ve,e),[o.memoizedState,e]},useRef:function(e){var n=Hn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Um.bind(null,ve,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Hn();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Am.bind(null,ve,e.queue,!0,!1),Hn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ve,u=Hn();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(Ce&124)!==0||em(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,_m(im.bind(null,o,d,e),[e]),o.flags|=2048,Qr(9,Ul(),nm.bind(null,o,d,a,n),null),a},useId:function(){var e=Hn(),n=We.identifierPrefix;if(Pe){var a=Wi,o=Xi;a=(o&~(1<<32-Nt(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=Cl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=zy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:hm,useActionState:hm,useOptimistic:function(e){var n=Hn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,ve,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return Hn().memoizedState=Vy.bind(null,ve)}},Om={readContext:Ln,use:wl,useCallback:Em,useContext:Ln,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:ym,useLayoutEffect:xm,useMemo:bm,useReducer:Dl,useRef:gm,useState:function(){return Dl(ji)},useDebugValue:nf,useDeferredValue:function(e,n){var a=cn();return Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=Dl(ji)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=cn();return sm(a,ze,e,n)},useMemoCache:Qu,useCacheRefresh:Dm},Xy={readContext:Ln,use:wl,useCallback:Em,useContext:Ln,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:ym,useLayoutEffect:xm,useMemo:bm,useReducer:$u,useRef:gm,useState:function(){return $u(ji)},useDebugValue:nf,useDeferredValue:function(e,n){var a=cn();return ze===null?af(a,e,n):Tm(a,ze.memoizedState,e,n)},useTransition:function(){var e=$u(ji)[0],n=cn().memoizedState;return[typeof e=="boolean"?e:so(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var a=cn();return ze!==null?sm(a,ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Dm},Jr=null,co=0;function Ol(e){var n=co;return co+=1,Jr===null&&(Jr=[]),qp(Jr,e,n)}function uo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Im(e){var n=e._init;return n(e._payload)}function zm(e){function n(j,k){if(e){var et=j.deletions;et===null?(j.deletions=[k],j.flags|=16):et.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=ki(j,k),j.index=0,j.sibling=null,j}function d(j,k,et){return j.index=et,e?(et=j.alternate,et!==null?(et=et.index,et<k?(j.flags|=67108866,k):et):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function M(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,et,_t){return k===null||k.tag!==6?(k=Ru(et,j.mode,_t),k.return=j,k):(k=u(k,et),k.return=j,k)}function I(j,k,et,_t){var Jt=et.type;return Jt===E?pt(j,k,et.props.children,_t,et.key):k!==null&&(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===q&&Im(Jt)===k.type)?(k=u(k,et.props),uo(k,et),k.return=j,k):(k=vl(et.type,et.key,et.props,null,j.mode,_t),uo(k,et),k.return=j,k)}function it(j,k,et,_t){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Cu(et,j.mode,_t),k.return=j,k):(k=u(k,et.children||[]),k.return=j,k)}function pt(j,k,et,_t,Jt){return k===null||k.tag!==7?(k=ar(et,j.mode,_t,Jt),k.return=j,k):(k=u(k,et),k.return=j,k)}function St(j,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ru(""+k,j.mode,et),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return et=vl(k.type,k.key,k.props,null,j.mode,et),uo(et,k),et.return=j,et;case S:return k=Cu(k,j.mode,et),k.return=j,k;case q:var _t=k._init;return k=_t(k._payload),St(j,k,et)}if(mt(k)||ft(k))return k=ar(k,j.mode,et,null),k.return=j,k;if(typeof k.then=="function")return St(j,Ol(k),et);if(k.$$typeof===U)return St(j,Ml(j,k),et);Il(j,k)}return null}function at(j,k,et,_t){var Jt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:A(j,k,""+et,_t);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case v:return et.key===Jt?I(j,k,et,_t):null;case S:return et.key===Jt?it(j,k,et,_t):null;case q:return Jt=et._init,et=Jt(et._payload),at(j,k,et,_t)}if(mt(et)||ft(et))return Jt!==null?null:pt(j,k,et,_t,null);if(typeof et.then=="function")return at(j,k,Ol(et),_t);if(et.$$typeof===U)return at(j,k,Ml(j,et),_t);Il(j,et)}return null}function rt(j,k,et,_t,Jt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return j=j.get(et)||null,A(k,j,""+_t,Jt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case v:return j=j.get(_t.key===null?et:_t.key)||null,I(k,j,_t,Jt);case S:return j=j.get(_t.key===null?et:_t.key)||null,it(k,j,_t,Jt);case q:var ye=_t._init;return _t=ye(_t._payload),rt(j,k,et,_t,Jt)}if(mt(_t)||ft(_t))return j=j.get(et)||null,pt(k,j,_t,Jt,null);if(typeof _t.then=="function")return rt(j,k,et,Ol(_t),Jt);if(_t.$$typeof===U)return rt(j,k,et,Ml(k,_t),Jt);Il(k,_t)}return null}function fe(j,k,et,_t){for(var Jt=null,ye=null,ee=k,ce=k=0,Sn=null;ee!==null&&ce<et.length;ce++){ee.index>ce?(Sn=ee,ee=null):Sn=ee.sibling;var Le=at(j,ee,et[ce],_t);if(Le===null){ee===null&&(ee=Sn);break}e&&ee&&Le.alternate===null&&n(j,ee),k=d(Le,k,ce),ye===null?Jt=Le:ye.sibling=Le,ye=Le,ee=Sn}if(ce===et.length)return a(j,ee),Pe&&sr(j,ce),Jt;if(ee===null){for(;ce<et.length;ce++)ee=St(j,et[ce],_t),ee!==null&&(k=d(ee,k,ce),ye===null?Jt=ee:ye.sibling=ee,ye=ee);return Pe&&sr(j,ce),Jt}for(ee=o(ee);ce<et.length;ce++)Sn=rt(ee,j,ce,et[ce],_t),Sn!==null&&(e&&Sn.alternate!==null&&ee.delete(Sn.key===null?ce:Sn.key),k=d(Sn,k,ce),ye===null?Jt=Sn:ye.sibling=Sn,ye=Sn);return e&&ee.forEach(function(Fa){return n(j,Fa)}),Pe&&sr(j,ce),Jt}function oe(j,k,et,_t){if(et==null)throw Error(r(151));for(var Jt=null,ye=null,ee=k,ce=k=0,Sn=null,Le=et.next();ee!==null&&!Le.done;ce++,Le=et.next()){ee.index>ce?(Sn=ee,ee=null):Sn=ee.sibling;var Fa=at(j,ee,Le.value,_t);if(Fa===null){ee===null&&(ee=Sn);break}e&&ee&&Fa.alternate===null&&n(j,ee),k=d(Fa,k,ce),ye===null?Jt=Fa:ye.sibling=Fa,ye=Fa,ee=Sn}if(Le.done)return a(j,ee),Pe&&sr(j,ce),Jt;if(ee===null){for(;!Le.done;ce++,Le=et.next())Le=St(j,Le.value,_t),Le!==null&&(k=d(Le,k,ce),ye===null?Jt=Le:ye.sibling=Le,ye=Le);return Pe&&sr(j,ce),Jt}for(ee=o(ee);!Le.done;ce++,Le=et.next())Le=rt(ee,j,ce,Le.value,_t),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?ce:Le.key),k=d(Le,k,ce),ye===null?Jt=Le:ye.sibling=Le,ye=Le);return e&&ee.forEach(function(Wx){return n(j,Wx)}),Pe&&sr(j,ce),Jt}function Fe(j,k,et,_t){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case v:t:{for(var Jt=et.key;k!==null;){if(k.key===Jt){if(Jt=et.type,Jt===E){if(k.tag===7){a(j,k.sibling),_t=u(k,et.props.children),_t.return=j,j=_t;break t}}else if(k.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===q&&Im(Jt)===k.type){a(j,k.sibling),_t=u(k,et.props),uo(_t,et),_t.return=j,j=_t;break t}a(j,k);break}else n(j,k);k=k.sibling}et.type===E?(_t=ar(et.props.children,j.mode,_t,et.key),_t.return=j,j=_t):(_t=vl(et.type,et.key,et.props,null,j.mode,_t),uo(_t,et),_t.return=j,j=_t)}return M(j);case S:t:{for(Jt=et.key;k!==null;){if(k.key===Jt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(j,k.sibling),_t=u(k,et.children||[]),_t.return=j,j=_t;break t}else{a(j,k);break}else n(j,k);k=k.sibling}_t=Cu(et,j.mode,_t),_t.return=j,j=_t}return M(j);case q:return Jt=et._init,et=Jt(et._payload),Fe(j,k,et,_t)}if(mt(et))return fe(j,k,et,_t);if(ft(et)){if(Jt=ft(et),typeof Jt!="function")throw Error(r(150));return et=Jt.call(et),oe(j,k,et,_t)}if(typeof et.then=="function")return Fe(j,k,Ol(et),_t);if(et.$$typeof===U)return Fe(j,k,Ml(j,et),_t);Il(j,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(j,k.sibling),_t=u(k,et),_t.return=j,j=_t):(a(j,k),_t=Ru(et,j.mode,_t),_t.return=j,j=_t),M(j)):a(j,k)}return function(j,k,et,_t){try{co=0;var Jt=Fe(j,k,et,_t);return Jr=null,Jt}catch(ee){if(ee===to||ee===bl)throw ee;var ye=Yn(29,ee,null,j.mode);return ye.lanes=_t,ye.return=j,ye}finally{}}}var $r=zm(!0),Bm=zm(!1),si=nt(null),Ti=null;function ba(e){var n=e.alternate;At(pn,pn.current&1),At(si,e),Ti===null&&(n===null||jr.current!==null||n.memoizedState!==null)&&(Ti=e)}function Fm(e){if(e.tag===22){if(At(pn,pn.current),At(si,e),Ti===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ti=e)}}else Ta()}function Ta(){At(pn,pn.current),At(si,si.current)}function Zi(e){Et(si),Ti===e&&(Ti=null),Et(pn)}var pn=nt(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Sa(o);u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=Qn(),u=Sa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ma(e,u,o),n!==null&&(Jn(n,e,o),no(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),o=Sa(a);o.tag=2,n!=null&&(o.callback=n),n=Ma(e,o,a),n!==null&&(Jn(n,e,a),no(n,e,a))}};function Hm(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!qs(a,o)||!qs(u,d):!0}function Gm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Bl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vm(e){Bl(e)}function km(e){console.error(e)}function Xm(e){Bl(e)}function Fl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Fl(e,n)},a}function qm(e){return e=Sa(e),e.tag=3,e}function Ym(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Wm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof u!="function"&&(Ua===null?Ua=new Set([this]):Ua.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Wy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Qs(n,a,u,!0),a=si.current,a!==null){switch(a.tag){case 13:return Ti===null?Pf():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),If(e,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),If(e,o,u)),!1}throw Error(r(435,a.tag))}return If(e,o,u),Pf(),!1}if(Pe)return n=si.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(r(422),{cause:o}),Ks(ni(e,a)))):(o!==Uu&&(n=Error(r(423),{cause:o}),Ks(ni(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ni(o,a),u=uf(e.stateNode,o,u),Gu(e,u),tn!==4&&(tn=2)),!1;var d=Error(r(520),{cause:o});if(d=ni(d,a),vo===null?vo=[d]:vo.push(d),tn!==4&&(tn=2),n===null)return!0;o=ni(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Gu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ua===null||!Ua.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,e,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var jm=Error(r(461)),yn=!1;function An(e,n,a,o){n.child=e===null?Bm(n,null,a,o):$r(n,e.child,a,o)}function Zm(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return ur(n),o=qu(e,n,a,M,d,u),A=Yu(),e!==null&&!yn?(ju(e,n,u),Ki(e,n,u)):(Pe&&A&&wu(n),n.flags|=1,An(e,n,o,u),n.child)}function Km(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Au(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Qm(e,n,d,o,u)):(e=vl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!vf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:qs,a(M,o)&&e.ref===n.ref)return Ki(e,n,u)}return n.flags|=1,e=ki(d,o),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(qs(d,o)&&e.ref===n.ref)if(yn=!1,n.pendingProps=o=d,vf(e,u))(e.flags&131072)!==0&&(yn=!0);else return n.lanes=e.lanes,Ki(e,n,u)}return ff(e,n,a,o,u)}function Jm(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return $m(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&El(n,d!==null?d.cachePool:null),d!==null?Qp(n,d):ku(),Fm(n);else return n.lanes=n.childLanes=536870912,$m(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(El(n,d.cachePool),Qp(n,d),Ta(),n.memoizedState=null):(e!==null&&El(n,null),ku(),Ta());return An(e,n,u,a),n.child}function $m(e,n,a,o){var u=zu();return u=u===null?null:{parent:dn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&El(n,null),ku(),Fm(n),e!==null&&Qs(e,n,o,!0),null}function Hl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return ur(n),a=qu(e,n,a,o,void 0,u),o=Yu(),e!==null&&!yn?(ju(e,n,u),Ki(e,n,u)):(Pe&&o&&wu(n),n.flags|=1,An(e,n,a,u),n.child)}function tg(e,n,a,o,u,d){return ur(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(e),o=Yu(),e!==null&&!yn?(ju(e,n,d),Ki(e,n,d)):(Pe&&o&&wu(n),n.flags|=1,An(e,n,a,d),n.child)}function eg(e,n,a,o,u){if(ur(n),n.stateNode===null){var d=kr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Ln(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Fu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Ln(M):kr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&cf.enqueueReplaceState(d,d.state,null),ao(n,o,d,u),io(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,I=dr(a,A);d.props=I;var it=d.context,pt=a.contextType;M=kr,typeof pt=="object"&&pt!==null&&(M=Ln(pt));var St=a.getDerivedStateFromProps;pt=typeof St=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,pt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||it!==M)&&Gm(n,d,o,M),xa=!1;var at=n.memoizedState;d.state=at,ao(n,o,d,u),io(),it=n.memoizedState,A||at!==it||xa?(typeof St=="function"&&(lf(n,a,St,o),it=n.memoizedState),(I=xa||Hm(n,a,I,o,at,it,M))?(pt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=M,o=I):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(e,n),M=n.memoizedProps,pt=dr(a,M),d.props=pt,St=n.pendingProps,at=d.context,it=a.contextType,I=kr,typeof it=="object"&&it!==null&&(I=Ln(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==St||at!==I)&&Gm(n,d,o,I),xa=!1,at=n.memoizedState,d.state=at,ao(n,o,d,u),io();var rt=n.memoizedState;M!==St||at!==rt||xa||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),rt=n.memoizedState),(pt=xa||Hm(n,a,pt,o,at,rt,I)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,rt,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,rt,I)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=rt),d.props=o,d.state=rt,d.context=I,o=pt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Hl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=$r(n,e.child,null,u),n.child=$r(n,null,a,u)):An(e,n,a,u),n.memoizedState=d.state,e=n.child):e=Ki(e,n,u),e}function ng(e,n,a,o){return Zs(),n.flags|=256,An(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:kp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=oi),e}function ig(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(pn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?ba(n):Ta(),Pe){var A=$e,I;if(I=A){t:{for(I=A,A=bi;I.nodeType!==8;){if(!A){A=null;break t}if(I=mi(I.nextSibling),I===null){A=null;break t}}A=I}A!==null?(n.memoizedState={dehydrated:A,treeContext:rr!==null?{id:Xi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},I=Yn(18,null,null,0),I.stateNode=A,I.return=n,n.child=I,In=n,$e=null,I=!0):I=!1}I||lr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qf(A)?n.lanes=32:n.lanes=536870912,null;Zi(n)}return A=o.children,o=o.fallback,u?(Ta(),u=n.mode,A=Gl({mode:"hidden",children:A},u),o=ar(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=df(a),u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),mf(n,A))}if(I=e.memoizedState,I!==null&&(A=I.dehydrated,A!==null)){if(d)n.flags&256?(ba(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),u=o.fallback,A=n.mode,o=Gl({mode:"visible",children:o.children},A),u=ar(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,$r(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=u);else if(ba(n),Qf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(r(419)),o.stack="",o.digest=M,Ks({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(yn||Qs(e,n,a,!1),M=(a&e.childLanes)!==0,yn||M){if(M=We,M!==null&&(o=a&-a,o=(o&42)!==0?1:we(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==I.retryLane))throw I.retryLane=o,Vr(e,o),Jn(M,e,o),jm;A.data==="$?"||Pf(),n=gf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,$e=mi(A.nextSibling),In=n,Pe=!0,or=null,bi=!1,e!==null&&(ai[ri++]=Xi,ai[ri++]=Wi,ai[ri++]=rr,Xi=e.id,Wi=e.overflow,rr=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Ta(),u=o.fallback,A=n.mode,I=e.child,it=I.sibling,o=ki(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,it!==null?u=ki(it,u):(u=ar(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=df(a):(I=A.cachePool,I!==null?(it=dn._currentValue,I=I.parent!==it?{parent:it,pool:it}:I):I=kp(),A={baseLanes:A.baseLanes|a,cachePool:I}),u.memoizedState=A,u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(ba(n),a=e.child,e=a.sibling,a=ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=Yn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return $r(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nu(e.return,n,a)}function _f(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(An(e,n,o.children,a),o=pn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(At(pn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ki(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Qs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function qy(e,n,a){switch(n.tag){case 3:W(n,n.stateNode.containerInfo),ya(n,dn,e.memoizedState.cache),Zs();break;case 27:case 5:wt(n);break;case 4:W(n,n.stateNode.containerInfo);break;case 10:ya(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ba(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(ba(n),e=Ki(e,n,a),e!==null?e.sibling:null);ba(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Qs(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),At(pn,pn.current),o)break;return null;case 22:case 23:return n.lanes=0,Jm(e,n,a);case 24:ya(n,dn,e.memoizedState.cache)}return Ki(e,n,a)}function sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)yn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return yn=!1,qy(e,n,a);yn=(e.flags&131072)!==0}else yn=!1,Pe&&(n.flags&1048576)!==0&&Ip(n,xl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(e=dr(o,e),n.tag=1,n=eg(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Zm(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Km(null,n,o,e,a);break t}}throw n=Mt(o)||o,Error(r(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=dr(o,n.pendingProps),eg(e,n,o,u,a);case 3:t:{if(W(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(e,n),ao(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ya(n,dn,o),o!==d.cache&&Pu(n,[dn],a,!0),io(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ng(e,n,o,a);break t}else if(o!==u){u=ni(Error(r(424)),n),Ks(u),n=ng(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=mi(e.firstChild),In=n,Pe=!0,or=null,bi=!0,a=Bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zs(),o===u){n=Ki(e,n,a);break t}An(e,n,o,a)}n=n.child}return n;case 26:return Hl(e,n),e===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=ec(bt.current).createElement(a),o[nn]=n,o[fn]=e,Cn(o,a,e),on(o),n.stateNode=o):n.memoizedState=u_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return wt(n),e===null&&Pe&&(o=n.stateNode=o_(n.type,n.pendingProps,bt.current),In=n,bi=!0,u=$e,Pa(n.type)?(Jf=u,$e=mi(o.firstChild)):$e=u),An(e,n,n.pendingProps.children,a),Hl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=$e)&&(o=xx(o,n.type,n.pendingProps,bi),o!==null?(n.stateNode=o,In=n,$e=mi(o.firstChild),bi=!1,u=!0):u=!1),u||lr(n)),wt(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,jf(u,d)?o=null:M!==null&&jf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,By,null,null,a),Ro._currentValue=u),Hl(e,n),An(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=$e)&&(a=Sx(a,n.pendingProps,bi),a!==null?(n.stateNode=a,In=n,$e=null,e=!0):e=!1),e||lr(n)),null;case 13:return ig(e,n,a);case 4:return W(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=$r(n,null,o,a):An(e,n,o,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ya(n,n.type,o.value),An(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,ur(n),u=Ln(u),o=o(u),n.flags|=1,An(e,n,o,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Qm(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Gl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=ki(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Jm(e,n,a);case 24:return ur(n),o=Ln(dn),e===null?(u=zu(),u===null&&(u=We,d=Ou(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Fu(n),ya(n,dn,u)):((e.lanes&a)!==0&&(Hu(e,n),ao(n,null,null,a),io()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ya(n,dn,o)):(o=d.cache,ya(n,dn,o),o!==u.cache&&Pu(n,[dn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Qi(e){e.flags|=4}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m_(n)){if(n=si.current,n!==null&&((Ce&4194048)===Ce?Ti!==null:(Ce&62914560)!==Ce&&(Ce&536870912)===0||n!==Ti))throw eo=Bu,Xp;e.flags|=8192}}function Vl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,is|=n)}function fo(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Ke(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yy(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(dn),ut(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(js(n)?Qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fp())),Ke(n),null;case 26:return a=n.memoizedState,e===null?(Qi(n),a!==null?(Ke(n),og(n,a)):(Ke(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Qi(n),Ke(n),og(n,a)):(Ke(n),n.flags&=-16777217):(e.memoizedProps!==o&&Qi(n),Ke(n),n.flags&=-16777217),null;case 27:Wt(n),a=bt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}e=$.current,js(n)?zp(n):(e=o_(u,o,a),n.stateNode=e,Qi(n))}return Ke(n),null;case 5:if(Wt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Ke(n),null}if(e=$.current,js(n))zp(n);else{switch(u=ec(bt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[nn]=n,e[fn]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Cn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Qi(n)}}return Ke(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Qi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=bt.current,js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[nn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||lr(n)}else e=ec(e).createTextNode(o),e[nn]=n,n.stateNode=e}return Ke(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[nn]=n}else Zs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),u=!1}else u=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Zi(n),n):(Zi(n),null)}if(Zi(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Vl(n,n.updateQueue),Ke(n),null;case 4:return ut(),e===null&&kf(n.stateNode.containerInfo),Ke(n),null;case 10:return Yi(n.type),Ke(n),null;case 19:if(Et(pn),u=n.memoizedState,u===null)return Ke(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)fo(u,!1);else{if(tn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=zl(e),d!==null){for(n.flags|=128,fo(u,!1),e=d.updateQueue,n.updateQueue=e,Vl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return At(pn,pn.current&1|2),n.child}e=e.sibling}u.tail!==null&&Tt()>Wl&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304)}else{if(!o)if(e=zl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Vl(n,e),fo(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return Ke(n),null}else 2*Tt()-u.renderingStartTime>Wl&&a!==536870912&&(n.flags|=128,o=!0,fo(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Tt(),n.sibling=null,e=pn.current,At(pn,o?e&1|2:e&1),n):(Ke(n),null);case 22:case 23:return Zi(n),Xu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&Vl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Et(fr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(dn),Ke(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jy(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Yi(dn),ut(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Wt(n),null;case 13:if(Zi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Zs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Et(pn),null;case 4:return ut(),null;case 10:return Yi(n.type),null;case 22:case 23:return Zi(n),Xu(),e!==null&&Et(fr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Yi(dn),null;case 25:return null;default:return null}}function lg(e,n){switch(Du(n),n.tag){case 3:Yi(dn),ut();break;case 26:case 27:case 5:Wt(n);break;case 4:ut();break;case 13:Zi(n);break;case 19:Et(pn);break;case 10:Yi(n.type);break;case 22:case 23:Zi(n),Xu(),e!==null&&Et(fr);break;case 24:Yi(dn)}}function ho(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){ke(n,n.return,A)}}function Aa(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var I=a,it=A;try{it()}catch(pt){ke(u,I,pt)}}}o=o.next}while(o!==d)}}catch(pt){ke(n,n.return,pt)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(o){ke(e,e.return,o)}}}function ug(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){ke(e,n,o)}}function po(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){ke(e,n,u)}}function Ai(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){ke(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){ke(e,e.return,u)}}function yf(e,n,a){try{var o=e.stateNode;mx(o,e.type,a,n),o[fn]=n}catch(u){ke(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Pa(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=tc));else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(kl(e,n,a),e=e.sibling;e!==null;)kl(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,a),n[nn]=e,n[fn]=a}catch(d){ke(e,e.return,d)}}var Ji=!1,rn=!1,Mf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Zy(e,n){if(e=e.containerInfo,qf=oc,e=Tp(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,A=-1,I=-1,it=0,pt=0,St=e,at=null;e:for(;;){for(var rt;St!==a||u!==0&&St.nodeType!==3||(A=M+u),St!==d||o!==0&&St.nodeType!==3||(I=M+o),St.nodeType===3&&(M+=St.nodeValue.length),(rt=St.firstChild)!==null;)at=St,St=rt;for(;;){if(St===e)break e;if(at===a&&++it===u&&(A=M),at===d&&++pt===o&&(I=M),(rt=St.nextSibling)!==null)break;St=at,at=St.parentNode}St=rt}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},oc=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var fe=dr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(fe,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(oe){ke(a,a.return,oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a),o&4&&ho(5,a);break;case 1:if(Ra(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){ke(a,a.return,M)}else{var u=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){ke(a,a.return,M)}}o&64&&cg(a),o&512&&po(a,a.return);break;case 3:if(Ra(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(M){ke(a,a.return,M)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:Ra(e,a),n===null&&o&4&&fg(a),o&512&&po(a,a.return);break;case 12:Ra(e,a);break;case 13:Ra(e,a),o&4&&vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ax.bind(null,a),Mx(e,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){n=n!==null&&n.memoizedState!==null||rn,u=Ji;var d=rn;Ji=o,(rn=n)&&!d?Ca(e,a,(a.subtreeFlags&8772)!==0):Ra(e,a),Ji=u,rn=d}break;case 30:break;default:Ra(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ma(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var je=null,Gn=!1;function $i(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(ht,a)}catch{}switch(a.tag){case 26:rn||Ai(a,n),$i(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:rn||Ai(a,n);var o=je,u=Gn;Pa(a.type)&&(je=a.stateNode,Gn=!1),$i(e,n,a),Eo(a.stateNode),je=o,Gn=u;break;case 5:rn||Ai(a,n);case 6:if(o=je,u=Gn,je=null,$i(e,n,a),je=o,Gn=u,je!==null)if(Gn)try{(je.nodeType===9?je.body:je.nodeName==="HTML"?je.ownerDocument.body:je).removeChild(a.stateNode)}catch(d){ke(a,n,d)}else try{je.removeChild(a.stateNode)}catch(d){ke(a,n,d)}break;case 18:je!==null&&(Gn?(e=je,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Uo(e)):r_(je,a.stateNode));break;case 4:o=je,u=Gn,je=a.stateNode.containerInfo,Gn=!0,$i(e,n,a),je=o,Gn=u;break;case 0:case 11:case 14:case 15:rn||Aa(2,a,n),rn||Aa(4,a,n),$i(e,n,a);break;case 1:rn||(Ai(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),$i(e,n,a);break;case 21:$i(e,n,a);break;case 22:rn=(o=rn)||a.memoizedState!==null,$i(e,n,a),rn=o;break;default:$i(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Uo(e)}catch(a){ke(n,n.return,a)}}function Ky(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(r(435,e.tag))}}function Ef(e,n){var a=Ky(e);n.forEach(function(o){var u=rx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Pa(A.type)){je=A.stateNode,Gn=!1;break t}break;case 5:je=A.stateNode,Gn=!1;break t;case 3:case 4:je=A.stateNode.containerInfo,Gn=!0;break t}A=A.return}if(je===null)throw Error(r(160));_g(d,M,u),je=null,Gn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var pi=null;function yg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),Zn(e),o&4&&(Aa(3,e,e.return),ho(3,e),Aa(5,e,e.return));break;case 1:jn(n,e),Zn(e),o&512&&(rn||a===null||Ai(a,a.return)),o&64&&Ji&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=pi;if(jn(n,e),Zn(e),o&512&&(rn||a===null||Ai(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[pa]||d[nn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Cn(d,o,a),d[nn]=e,on(d),o=d;break t;case"link":var M=d_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=d_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}d=u.createElement(o),Cn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[nn]=e,on(d),o=d}e.stateNode=o}else p_(u,e.type,e.stateNode);else e.stateNode=h_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?p_(u,e.type,e.stateNode):h_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&yf(e,e.memoizedProps,a.memoizedProps)}break;case 27:jn(n,e),Zn(e),o&512&&(rn||a===null||Ai(a,a.return)),a!==null&&o&4&&yf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(jn(n,e),Zn(e),o&512&&(rn||a===null||Ai(a,a.return)),e.flags&32){u=e.stateNode;try{Ei(u,"")}catch(rt){ke(e,e.return,rt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,yf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(jn(n,e),Zn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(rt){ke(e,e.return,rt)}}break;case 3:if(ac=null,u=pi,pi=nc(n.containerInfo),jn(n,e),pi=u,Zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Uo(n.containerInfo)}catch(rt){ke(e,e.return,rt)}Mf&&(Mf=!1,xg(e));break;case 4:o=pi,pi=nc(e.stateNode.containerInfo),jn(n,e),Zn(e),pi=o;break;case 12:jn(n,e),Zn(e);break;case 13:jn(n,e),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=Tt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,it=Ji,pt=rn;if(Ji=it||u,rn=pt||I,jn(n,e),rn=pt,Ji=it,Zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Ji||rn||pr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(d=I.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=I.stateNode;var St=I.memoizedProps.style,at=St!=null&&St.hasOwnProperty("display")?St.display:null;A.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(rt){ke(I,I.return,rt)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(rt){ke(I,I.return,rt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:jn(n,e),Zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:jn(n,e),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=xf(e);kl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Ei(M,""),a.flags&=-33);var A=xf(e);kl(e,A,M);break;case 3:case 4:var I=a.stateNode.containerInfo,it=xf(e);Sf(e,it,I);break;default:throw Error(r(161))}}catch(pt){ke(e,e.return,pt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ra(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function pr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),pr(n);break;case 1:Ai(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),pr(n);break;case 27:Eo(n.stateNode);case 26:case 5:Ai(n,n.return),pr(n);break;case 22:n.memoizedState===null&&pr(n);break;case 30:pr(n);break;default:pr(n)}e=e.sibling}}function Ca(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Ca(u,d,a),ho(4,d);break;case 1:if(Ca(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){ke(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)Zp(I[u],A)}catch(it){ke(o,o.return,it)}}a&&M&64&&cg(d),po(d,d.return);break;case 27:dg(d);case 26:case 5:Ca(u,d,a),a&&o===null&&M&4&&fg(d),po(d,d.return);break;case 12:Ca(u,d,a);break;case 13:Ca(u,d,a),a&&M&4&&vg(u,d);break;case 22:d.memoizedState===null&&Ca(u,d,a),po(d,d.return);break;case 30:break;default:Ca(u,d,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Js(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e))}function Ri(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(e,n,a,o),n=n.sibling}function Sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),u&2048&&ho(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Js(e)));break;case 12:if(u&2048){Ri(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){ke(n,n.return,I)}}else Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Ri(e,n,a,o):mo(e,n):d._visibility&2?Ri(e,n,a,o):(d._visibility|=2,ts(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(M,n);break;case 24:Ri(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Ri(e,n,a,o)}}function ts(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=a,I=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:ts(d,M,A,I,u),ho(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?ts(d,M,A,I,u):mo(d,M):(pt._visibility|=2,ts(d,M,A,I,u)),u&&it&2048&&bf(M.alternate,M);break;case 24:ts(d,M,A,I,u),u&&it&2048&&Tf(M.alternate,M);break;default:ts(d,M,A,I,u)}n=n.sibling}}function mo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:mo(a,o),u&2048&&bf(o.alternate,o);break;case 24:mo(a,o),u&2048&&Tf(o.alternate,o);break;default:mo(a,o)}n=n.sibling}}var go=8192;function es(e){if(e.subtreeFlags&go)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 26:es(e),e.flags&go&&e.memoizedState!==null&&Ox(pi,e.memoizedState,e.memoizedProps);break;case 5:es(e);break;case 3:case 4:var n=pi;pi=nc(e.stateNode.containerInfo),es(e),pi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=go,go=16777216,es(e),go=n):es(e));break;default:es(e)}}function Eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function _o(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Tg(o,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:_o(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:_o(e);break;case 12:_o(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):_o(e);break;default:_o(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Tg(o,e)}Eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function Tg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Js(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,d=o.return;if(gg(o),o===a){xn=null;break t}if(u!==null){u.return=d,xn=u;break t}xn=d}}}var Qy={getCacheForType:function(e){var n=Ln(dn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,We=null,Se=null,Ce=0,Ie=0,Kn=null,wa=!1,ns=!1,Af=!1,ta=0,tn=0,Da=0,mr=0,Rf=0,oi=0,is=0,vo=null,Vn=null,Cf=!1,wf=0,Wl=1/0,ql=null,Ua=null,Rn=0,La=null,as=null,rs=0,Df=0,Uf=null,Ag=null,yo=0,Lf=null;function Qn(){if((Oe&2)!==0&&Ce!==0)return Ce&-Ce;if(z.T!==null){var e=qr;return e!==0?e:Ff()}return Te()}function Rg(){oi===0&&(oi=(Ce&536870912)===0||Pe?G():536870912);var e=si.current;return e!==null&&(e.flags|=32),oi}function Jn(e,n,a){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(ss(e,0),Na(e,Ce,oi,!1)),dt(e,a),((Oe&2)===0||e!==We)&&(e===We&&((Oe&2)===0&&(mr|=a),tn===4&&Na(e,Ce,oi,!1)),Ci(e))}function Cg(e,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||$t(e,n),u=o?ex(e,n):Of(e,n,!0),d=o;do{if(u===0){ns&&!o&&Na(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!$y(a)){u=Of(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=vo;var I=A.current.memoizedState.isDehydrated;if(I&&(ss(A,M).flags|=256),M=Of(A,M,!1),M!==2){if(Af&&!I){A.errorRecoveryDisabledLanes|=d,mr|=d,u=4;break t}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){ss(e,0),Na(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Na(o,n,oi,!wa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=wf+300-Tt(),10<u)){if(Na(o,n,oi,!wa),te(o,0,!0)!==0)break t;o.timeoutHandle=i_(wg.bind(null,o,a,Vn,ql,Cf,n,oi,mr,is,wa,d,2,-0,0),u);break t}wg(o,a,Vn,ql,Cf,n,oi,mr,is,wa,d,0,-0,0)}}break}while(!0);Ci(e)}function wg(e,n,a,o,u,d,M,A,I,it,pt,St,at,rt){if(e.timeoutHandle=-1,St=n.subtreeFlags,(St&8192||(St&16785408)===16785408)&&(Ao={stylesheets:null,count:0,unsuspend:Px},Mg(n),St=Ix(),St!==null)){e.cancelPendingCommit=St(Ig.bind(null,e,n,d,a,o,u,M,A,I,pt,1,at,rt)),Na(e,d,M,!it);return}Ig(e,n,d,a,o,u,M,A,I)}function $y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!qn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Na(e,n,a,o){n&=~Rf,n&=~mr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-Nt(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Gt(e,a,n)}function Yl(){return(Oe&6)===0?(xo(0),!1):!0}function Nf(){if(Se!==null){if(Ie===0)var e=Se.return;else e=Se,qi=cr=null,Zu(e),Jr=null,co=0,e=Se;for(;e!==null;)lg(e.alternate,e),e=e.return;Se=null}}function ss(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_x(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nf(),We=e,Se=a=ki(e.current,null),Ce=n,Ie=0,Kn=null,wa=!1,ns=$t(e,n),Af=!1,is=oi=Rf=mr=Da=tn=0,Vn=vo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Nt(o),d=1<<u;n|=e[u],o&=~d}return ta=n,ml(),a}function Dg(e,n){ve=null,z.H=Pl,n===to||n===bl?(n=Yp(),Ie=3):n===Xp?(n=Yp(),Ie=4):Ie=n===jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Kn=n,Se===null&&(tn=1,Fl(e,ni(n,e.current)))}function Ug(){var e=z.H;return z.H=Pl,e===null?Pl:e}function Lg(){var e=z.A;return z.A=Qy,e}function Pf(){tn=4,wa||(Ce&4194048)!==Ce&&si.current!==null||(ns=!0),(Da&134217727)===0&&(mr&134217727)===0||We===null||Na(We,Ce,oi,!1)}function Of(e,n,a){var o=Oe;Oe|=2;var u=Ug(),d=Lg();(We!==e||Ce!==n)&&(ql=null,ss(e,n)),n=!1;var M=tn;t:do try{if(Ie!==0&&Se!==null){var A=Se,I=Kn;switch(Ie){case 8:Nf(),M=6;break t;case 3:case 2:case 9:case 6:si.current===null&&(n=!0);var it=Ie;if(Ie=0,Kn=null,os(e,A,I,it),a&&ns){M=0;break t}break;default:it=Ie,Ie=0,Kn=null,os(e,A,I,it)}}tx(),M=tn;break}catch(pt){Dg(e,pt)}while(!0);return n&&e.shellSuspendCounter++,qi=cr=null,Oe=o,z.H=u,z.A=d,Se===null&&(We=null,Ce=0,ml()),M}function tx(){for(;Se!==null;)Ng(Se)}function ex(e,n){var a=Oe;Oe|=2;var o=Ug(),u=Lg();We!==e||Ce!==n?(ql=null,Wl=Tt()+500,ss(e,n)):ns=$t(e,n);t:do try{if(Ie!==0&&Se!==null){n=Se;var d=Kn;e:switch(Ie){case 1:Ie=0,Kn=null,os(e,n,d,1);break;case 2:case 9:if(Wp(d)){Ie=0,Kn=null,Pg(n);break}n=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),Ci(e)},d.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Wp(d)?(Ie=0,Kn=null,Pg(n)):(Ie=0,Kn=null,os(e,n,d,7));break;case 5:var M=null;switch(Se.tag){case 26:M=Se.memoizedState;case 5:case 27:var A=Se;if(!M||m_(M)){Ie=0,Kn=null;var I=A.sibling;if(I!==null)Se=I;else{var it=A.return;it!==null?(Se=it,jl(it)):Se=null}break e}}Ie=0,Kn=null,os(e,n,d,5);break;case 6:Ie=0,Kn=null,os(e,n,d,6);break;case 8:Nf(),tn=6;break t;default:throw Error(r(462))}}nx();break}catch(pt){Dg(e,pt)}while(!0);return qi=cr=null,z.H=o,z.A=u,Oe=a,Se!==null?0:(We=null,Ce=0,ml(),tn)}function nx(){for(;Se!==null&&!ie();)Ng(Se)}function Ng(e){var n=sg(e.alternate,e,ta);e.memoizedProps=e.pendingProps,n===null?jl(e):Se=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Zu(n);default:lg(a,n),n=Se=Op(n,ta),n=sg(a,n,ta)}e.memoizedProps=e.pendingProps,n===null?jl(e):Se=n}function os(e,n,a,o){qi=cr=null,Zu(n),Jr=null,co=0;var u=n.return;try{if(Wy(e,u,n,a,Ce)){tn=1,Fl(e,ni(a,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;tn=1,Fl(e,ni(a,e.current)),Se=null;return}n.flags&32768?(Pe||o===1?e=!0:ns||(Ce&536870912)!==0?e=!1:(wa=e=!0,(o===2||o===9||o===3||o===6)&&(o=si.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,e)):jl(n)}function jl(e){var n=e;do{if((n.flags&32768)!==0){Og(n,wa);return}e=n.return;var a=Yy(n.alternate,n,ta);if(a!==null){Se=a;return}if(n=n.sibling,n!==null){Se=n;return}Se=n=e}while(n!==null);tn===0&&(tn=5)}function Og(e,n){do{var a=jy(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);tn=6,Se=null}function Ig(e,n,a,o,u,d,M,A,I){e.cancelPendingCommit=null;do Zl();while(Rn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=bu,kt(e,a,d,M,A,I),e===We&&(Se=We=null,Ce=0),as=n,La=e,rs=a,Df=d,Uf=u,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sx(C,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=J.p,J.p=2,M=Oe,Oe|=4;try{Zy(e,n,a)}finally{Oe=M,J.p=u,z.T=o}}Rn=1,zg(),Bg(),Fg()}}function zg(){if(Rn===1){Rn=0;var e=La,n=as,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=J.p;J.p=2;var u=Oe;Oe|=4;try{yg(n,e);var d=Yf,M=Tp(e.containerInfo),A=d.focusedElem,I=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&bp(A.ownerDocument.documentElement,A)){if(I!==null&&yu(A)){var it=I.start,pt=I.end;if(pt===void 0&&(pt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(pt,A.value.length);else{var St=A.ownerDocument||document,at=St&&St.defaultView||window;if(at.getSelection){var rt=at.getSelection(),fe=A.textContent.length,oe=Math.min(I.start,fe),Fe=I.end===void 0?oe:Math.min(I.end,fe);!rt.extend&&oe>Fe&&(M=Fe,Fe=oe,oe=M);var j=Ep(A,oe),k=Ep(A,Fe);if(j&&k&&(rt.rangeCount!==1||rt.anchorNode!==j.node||rt.anchorOffset!==j.offset||rt.focusNode!==k.node||rt.focusOffset!==k.offset)){var et=St.createRange();et.setStart(j.node,j.offset),rt.removeAllRanges(),oe>Fe?(rt.addRange(et),rt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),rt.addRange(et))}}}}for(St=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&St.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<St.length;A++){var _t=St[A];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}oc=!!qf,Yf=qf=null}finally{Oe=u,J.p=o,z.T=a}}e.current=n,Rn=2}}function Bg(){if(Rn===2){Rn=0;var e=La,n=as,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=J.p;J.p=2;var u=Oe;Oe|=4;try{mg(e,n.alternate,n)}finally{Oe=u,J.p=o,z.T=a}}Rn=3}}function Fg(){if(Rn===4||Rn===3){Rn=0,qt();var e=La,n=as,a=rs,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Rn=5:(Rn=0,as=La=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ua=null),Ye(a),n=n.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(ht,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=J.p,J.p=2,z.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{z.T=n,J.p=u}}(rs&3)!==0&&Zl(),Ci(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Lf?yo++:(yo=0,Lf=e):yo=0,xo(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Js(n)))}function Zl(e){return zg(),Bg(),Fg(),Gg()}function Gg(){if(Rn!==5)return!1;var e=La,n=Df;Df=0;var a=Ye(rs),o=z.T,u=J.p;try{J.p=32>a?32:a,z.T=null,a=Uf,Uf=null;var d=La,M=rs;if(Rn=0,as=La=null,rs=0,(Oe&6)!==0)throw Error(r(331));var A=Oe;if(Oe|=4,bg(d.current),Sg(d,d.current,M,a),Oe=A,xo(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(ht,d)}catch{}return!0}finally{J.p=u,z.T=o,Hg(e,n)}}function Vg(e,n,a){n=ni(a,n),n=uf(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(dt(e,2),Ci(e))}function ke(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ua===null||!Ua.has(o))){e=ni(a,e),a=qm(2),o=Ma(n,a,2),o!==null&&(Ym(a,o,n,e),dt(o,2),Ci(o));break}}n=n.return}}function If(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=ix.bind(null,e,n,a),n.then(e,e))}function ix(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Ce&a)===a&&(tn===4||tn===3&&(Ce&62914560)===Ce&&300>Tt()-wf?(Oe&2)===0&&ss(e,0):Rf|=a,is===Ce&&(is=0)),Ci(e)}function kg(e,n){n===0&&(n=Bt()),e=Vr(e,n),e!==null&&(dt(e,n),Ci(e))}function ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function rx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function sx(e,n){return It(e,n)}var Kl=null,ls=null,zf=!1,Ql=!1,Bf=!1,gr=0;function Ci(e){e!==ls&&e.next===null&&(ls===null?Kl=ls=e:ls=ls.next=e),Ql=!0,zf||(zf=!0,lx())}function xo(e,n){if(!Bf&&Ql){Bf=!0;do for(var a=!1,o=Kl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Nt(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Yg(o,d))}else d=Ce,d=te(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||$t(o,d)||(a=!0,Yg(o,d));o=o.next}while(a);Bf=!1}}function ox(){Xg()}function Xg(){Ql=zf=!1;var e=0;gr!==0&&(gx()&&(e=gr),gr=0);for(var n=Tt(),a=null,o=Kl;o!==null;){var u=o.next,d=Wg(o,n);d===0?(o.next=null,a===null?Kl=u:a.next=u,u===null&&(ls=a)):(a=o,(e!==0||(d&3)!==0)&&(Ql=!0)),o=u}xo(e)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-Nt(d),A=1<<M,I=u[M];I===-1?((A&a)===0||(A&o)!==0)&&(u[M]=de(A,n)):I<=n&&(e.expiredLanes|=A),d&=~A}if(n=We,a=Ce,a=te(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&N(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&N(o),Ye(a)){case 2:case 8:a=zt;break;case 32:a=C;break;case 268435456:a=X;break;default:a=C}return o=qg.bind(null,e),a=It(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&N(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(Rn!==0&&Rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Zl()&&e.callbackNode!==a)return null;var o=Ce;return o=te(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),Wg(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(Zl())return null;Cg(e,n,!0)}function lx(){vx(function(){(Oe&6)!==0?It(ae,ox):Xg()})}function Ff(){return gr===0&&(gr=G()),gr}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ll(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=jg((u[fn]||null).action),M=o.submitter;M&&(n=(n=M[fn]||null)?jg(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new hl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(gr!==0){var I=M?Zg(u,M):new FormData(u);rf(a,{pending:!0,data:I,method:u.method,action:d},null,I)}}else typeof d=="function"&&(A.preventDefault(),I=M?Zg(u,M):new FormData(u),rf(a,{pending:!0,data:I,method:u.method,action:d},d,I))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],ux=Gf.toLowerCase(),fx=Gf[0].toUpperCase()+Gf.slice(1);di(ux,"on"+fx)}di(Cp,"onAnimationEnd"),di(wp,"onAnimationIteration"),di(Dp,"onAnimationStart"),di("dblclick","onDoubleClick"),di("focusin","onFocus"),di("focusout","onBlur"),di(Cy,"onTransitionRun"),di(wy,"onTransitionStart"),di(Dy,"onTransitionCancel"),di(Up,"onTransitionEnd"),w("onMouseEnter",["mouseout","mouseover"]),w("onMouseLeave",["mouseout","mouseover"]),w("onPointerEnter",["pointerout","pointerover"]),w("onPointerLeave",["pointerout","pointerover"]),Fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var So="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(So));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],I=A.instance,it=A.currentTarget;if(A=A.listener,I!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(pt){Bl(pt)}u.currentTarget=null,d=I}else for(M=0;M<o.length;M++){if(A=o[M],I=A.instance,it=A.currentTarget,A=A.listener,I!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(pt){Bl(pt)}u.currentTarget=null,d=I}}}}function Me(e,n){var a=n[Ja];a===void 0&&(a=n[Ja]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var Jl="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[Jl]){e[Jl]=!0,sl.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Jl]||(n[Jl]=!0,Vf("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(S_(n)){case 2:var u=Fx;break;case 8:u=Hx;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Xf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var I=M.tag;if((I===3||I===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=zi(A),M===null)return;if(I=M.tag,I===5||I===6||I===26||I===27){o=d=M;continue t}A=A.parentNode}}o=o.return}ap(function(){var it=d,pt=lu(a),St=[];t:{var at=Lp.get(e);if(at!==void 0){var rt=hl,fe=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":rt=sy;break;case"focusin":fe="focus",rt=pu;break;case"focusout":fe="blur",rt=pu;break;case"beforeblur":case"afterblur":rt=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=cy;break;case Cp:case wp:case Dp:rt=Qv;break;case Up:rt=fy;break;case"scroll":case"scrollend":rt=qv;break;case"wheel":rt=dy;break;case"copy":case"cut":case"paste":rt=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=cp;break;case"toggle":case"beforetoggle":rt=my}var oe=(n&4)!==0,Fe=!oe&&(e==="scroll"||e==="scrollend"),j=oe?at!==null?at+"Capture":null:at;oe=[];for(var k=it,et;k!==null;){var _t=k;if(et=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||et===null||j===null||(_t=Fs(k,j),_t!=null&&oe.push(Mo(k,_t,et))),Fe)break;k=k.return}0<oe.length&&(at=new rt(at,fe,null,a,pt),St.push({event:at,listeners:oe}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",rt=e==="mouseout"||e==="pointerout",at&&a!==ou&&(fe=a.relatedTarget||a.fromElement)&&(zi(fe)||fe[bn]))break t;if((rt||at)&&(at=pt.window===pt?pt:(at=pt.ownerDocument)?at.defaultView||at.parentWindow:window,rt?(fe=a.relatedTarget||a.toElement,rt=it,fe=fe?zi(fe):null,fe!==null&&(Fe=c(fe),oe=fe.tag,fe!==Fe||oe!==5&&oe!==27&&oe!==6)&&(fe=null)):(rt=null,fe=it),rt!==fe)){if(oe=op,_t="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(oe=cp,_t="onPointerLeave",j="onPointerEnter",k="pointer"),Fe=rt==null?at:tr(rt),et=fe==null?at:tr(fe),at=new oe(_t,k+"leave",rt,a,pt),at.target=Fe,at.relatedTarget=et,_t=null,zi(pt)===it&&(oe=new oe(j,k+"enter",fe,a,pt),oe.target=et,oe.relatedTarget=Fe,_t=oe),Fe=_t,rt&&fe)e:{for(oe=rt,j=fe,k=0,et=oe;et;et=cs(et))k++;for(et=0,_t=j;_t;_t=cs(_t))et++;for(;0<k-et;)oe=cs(oe),k--;for(;0<et-k;)j=cs(j),et--;for(;k--;){if(oe===j||j!==null&&oe===j.alternate)break e;oe=cs(oe),j=cs(j)}oe=null}else oe=null;rt!==null&&Jg(St,at,rt,oe,!1),fe!==null&&Fe!==null&&Jg(St,Fe,fe,oe,!0)}}t:{if(at=it?tr(it):window,rt=at.nodeName&&at.nodeName.toLowerCase(),rt==="select"||rt==="input"&&at.type==="file")var Jt=_p;else if(mp(at))if(vp)Jt=Ty;else{Jt=Ey;var ye=My}else rt=at.nodeName,!rt||rt.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?it&&su(it.elementType)&&(Jt=_p):Jt=by;if(Jt&&(Jt=Jt(e,it))){gp(St,Jt,a,pt);break t}ye&&ye(e,at,it),e==="focusout"&&it&&at.type==="number"&&it.memoizedProps.value!=null&&Un(at,"number",at.value)}switch(ye=it?tr(it):window,e){case"focusin":(mp(ye)||ye.contentEditable==="true")&&(Fr=ye,xu=it,Ys=null);break;case"focusout":Ys=xu=Fr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Ap(St,a,pt);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Ap(St,a,pt)}var ee;if(gu)t:{switch(e){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else Br?dp(e,a)&&(ce="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(up&&a.locale!=="ko"&&(Br||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&Br&&(ee=rp()):(va=pt,fu="value"in va?va.value:va.textContent,Br=!0)),ye=$l(it,ce),0<ye.length&&(ce=new lp(ce,e,null,a,pt),St.push({event:ce,listeners:ye}),ee?ce.data=ee:(ee=pp(a),ee!==null&&(ce.data=ee)))),(ee=_y?vy(e,a):yy(e,a))&&(ce=$l(it,"onBeforeInput"),0<ce.length&&(ye=new lp("onBeforeInput","beforeinput",null,a,pt),St.push({event:ye,listeners:ce}),ye.data=ee)),cx(St,e,it,a,pt)}Kg(St,n)})}function Mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function $l(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Fs(e,a),u!=null&&o.unshift(Mo(e,u,d)),u=Fs(e,n),u!=null&&o.push(Mo(e,u,d))),e.tag===3)return o;e=e.return}return[]}function cs(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,I=A.alternate,it=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||it===null||(I=it,u?(it=Fs(a,d),it!=null&&M.unshift(Mo(a,it,I))):u||(it=Fs(a,d),it!=null&&M.push(Mo(a,it,I)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(dx,`
`).replace(px,"")}function t_(e,n){return n=$g(n),$g(e)===n}function tc(){}function Be(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ei(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":np(e,o,d);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Be(e,n,"name",u.name,u,null),Be(e,n,"formEncType",u.formEncType,u,null),Be(e,n,"formMethod",u.formMethod,u,null),Be(e,n,"formTarget",u.formTarget,u,null)):(Be(e,n,"encType",u.encType,u,null),Be(e,n,"method",u.method,u,null),Be(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ll(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=tc);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ll(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Me("beforetoggle",e),Me("toggle",e),Lt(e,"popover",o);break;case"xlinkActuate":Yt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Yt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Yt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Yt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Yt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Yt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Yt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Lt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,Lt(e,a,o))}}function Wf(e,n,a,o,u,d){switch(a){case"style":np(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ei(e,o):(typeof o=="number"||typeof o=="bigint")&&Ei(e,""+o);break;case"onScroll":o!=null&&Me("scroll",e);break;case"onScrollEnd":o!=null&&Me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=tc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ol.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[fn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Lt(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,d,M,a,null)}}u&&Be(e,n,"srcSet",a.srcSet,a,null),o&&Be(e,n,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=d=M=u=null,I=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":M=pt;break;case"checked":I=pt;break;case"defaultChecked":it=pt;break;case"value":d=pt;break;case"defaultValue":A=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(r(137,n));break;default:Be(e,n,o,pt,a,null)}}Ve(e,d,A,I,it,M,u,!1),Je(e);return;case"select":Me("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:Be(e,n,u,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?hn(e,!!o,n,!1):a!=null&&hn(e,!!o,a,!0);return;case"textarea":Me("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Be(e,n,M,A,a,null)}Tn(e,o,u,d),Je(e);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Be(e,n,I,o,a,null)}return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(o=0;o<So.length;o++)Me(So[o],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Be(e,n,it,o,a,null)}return;default:if(su(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Wf(e,n,pt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Be(e,n,A,o,a,null))}function mx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,I=null,it=null,pt=null;for(rt in a){var St=a[rt];if(a.hasOwnProperty(rt)&&St!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":I=St;default:o.hasOwnProperty(rt)||Be(e,n,rt,null,o,St)}}for(var at in o){var rt=o[at];if(St=a[at],o.hasOwnProperty(at)&&(rt!=null||St!=null))switch(at){case"type":d=rt;break;case"name":u=rt;break;case"checked":it=rt;break;case"defaultChecked":pt=rt;break;case"value":M=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==St&&Be(e,n,at,rt,o,St)}}Hi(e,M,A,I,it,pt,d,u);return;case"select":rt=M=A=at=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":rt=I;default:o.hasOwnProperty(d)||Be(e,n,d,null,o,I)}for(u in o)if(d=o[u],I=a[u],o.hasOwnProperty(u)&&(d!=null||I!=null))switch(u){case"value":at=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==I&&Be(e,n,u,d,o,I)}n=A,a=M,o=rt,at!=null?hn(e,!!a,at,!1):!!o!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":rt=at=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Be(e,n,A,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":at=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Be(e,n,M,u,o,d)}vn(e,at,rt);return;case"option":for(var fe in a)if(at=a[fe],a.hasOwnProperty(fe)&&at!=null&&!o.hasOwnProperty(fe))switch(fe){case"selected":e.selected=!1;break;default:Be(e,n,fe,null,o,at)}for(I in o)if(at=o[I],rt=a[I],o.hasOwnProperty(I)&&at!==rt&&(at!=null||rt!=null))switch(I){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Be(e,n,I,at,o,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var oe in a)at=a[oe],a.hasOwnProperty(oe)&&at!=null&&!o.hasOwnProperty(oe)&&Be(e,n,oe,null,o,at);for(it in o)if(at=o[it],rt=a[it],o.hasOwnProperty(it)&&at!==rt&&(at!=null||rt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Be(e,n,it,at,o,rt)}return;default:if(su(n)){for(var Fe in a)at=a[Fe],a.hasOwnProperty(Fe)&&at!==void 0&&!o.hasOwnProperty(Fe)&&Wf(e,n,Fe,void 0,o,at);for(pt in o)at=o[pt],rt=a[pt],!o.hasOwnProperty(pt)||at===rt||at===void 0&&rt===void 0||Wf(e,n,pt,at,o,rt);return}}for(var j in a)at=a[j],a.hasOwnProperty(j)&&at!=null&&!o.hasOwnProperty(j)&&Be(e,n,j,null,o,at);for(St in o)at=o[St],rt=a[St],!o.hasOwnProperty(St)||at===rt||at==null&&rt==null||Be(e,n,St,at,o,rt)}var qf=null,Yf=null;function ec(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gx(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(yx)}:i_;function yx(e){setTimeout(function(){throw e})}function Pa(e){return e==="head"}function r_(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Eo(M.documentElement),a&2&&Eo(M.body),a&4)for(a=M.head,Eo(a),M=a.firstChild;M;){var A=M.nextSibling,I=M.nodeName;M[pa]||I==="SCRIPT"||I==="STYLE"||I==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(d),Uo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Uo(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[pa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=mi(e.nextSibling),e===null)break}return null}function Sx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=mi(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Mx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function mi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function s_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function o_(e,n,a){switch(n=ec(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Eo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ma(e)}var li=new Map,l_=new Set;function nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=J.d;J.d={f:Ex,r:bx,D:Tx,C:Ax,L:Rx,m:Cx,X:Dx,S:wx,M:Ux};function Ex(){var e=ea.f(),n=Yl();return e||n}function bx(e){var n=Bi(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):ea.r(e)}var us=typeof document>"u"?null:document;function c_(e,n,a){var o=us;if(o&&typeof n=="string"&&n){var u=Xe(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l_.has(u)||(l_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",e),on(n),o.head.appendChild(n)))}}function Tx(e){ea.D(e),c_("dns-prefetch",e,null)}function Ax(e,n){ea.C(e,n),c_("preconnect",e,n)}function Rx(e,n,a){ea.L(e,n,a);var o=us;if(o&&e&&n){var u='link[rel="preload"][as="'+Xe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Xe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Xe(a.imageSizes)+'"]')):u+='[href="'+Xe(e)+'"]';var d=u;switch(n){case"style":d=fs(e);break;case"script":d=hs(e)}li.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),li.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(bo(d))||n==="script"&&o.querySelector(To(d))||(n=o.createElement("link"),Cn(n,"link",e),on(n),o.head.appendChild(n)))}}function Cx(e,n){ea.m(e,n);var a=us;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Xe(o)+'"][href="'+Xe(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=hs(e)}if(!li.has(d)&&(e=g({rel:"modulepreload",href:e},n),li.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(To(d)))return}o=a.createElement("link"),Cn(o,"link",e),on(o),a.head.appendChild(o)}}}function wx(e,n,a){ea.S(e,n,a);var o=us;if(o&&e){var u=ga(o).hoistableStyles,d=fs(e);n=n||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(bo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=li.get(d))&&$f(e,a);var I=M=o.createElement("link");on(I),Cn(I,"link",e),I._p=new Promise(function(it,pt){I.onload=it,I.onerror=pt}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ic(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function Dx(e,n){ea.X(e,n);var a=us;if(a&&e){var o=ga(a).hoistableScripts,u=hs(e),d=o.get(u);d||(d=a.querySelector(To(u)),d||(e=g({src:e,async:!0},n),(n=li.get(u))&&th(e,n),d=a.createElement("script"),on(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ux(e,n){ea.M(e,n);var a=us;if(a&&e){var o=ga(a).hoistableScripts,u=hs(e),d=o.get(u);d||(d=a.querySelector(To(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=li.get(u))&&th(e,n),d=a.createElement("script"),on(d),Cn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function u_(e,n,a,o){var u=(u=bt.current)?nc(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=fs(a.href),a=ga(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=fs(a.href);var d=ga(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(bo(e)))&&!d._p&&(M.instance=d,M.state.loading=5),li.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},li.set(e,a),d||Lx(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=hs(a),a=ga(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function fs(e){return'href="'+Xe(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Lx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),on(n),e.head.appendChild(n))}function hs(e){return'[src="'+Xe(e)+'"]'}function To(e){return"script[async]"+e}function h_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Xe(a.href)+'"]');if(o)return n.instance=o,on(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),on(o),Cn(o,"style",u),ic(o,a.precedence,e),n.instance=o;case"stylesheet":u=fs(a.href);var d=e.querySelector(bo(u));if(d)return n.state.loading|=4,n.instance=d,on(d),d;o=f_(a),(u=li.get(u))&&$f(o,u),d=(e.ownerDocument||e).createElement("link"),on(d);var M=d;return M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Cn(d,"link",o),n.state.loading|=4,ic(d,a.precedence,e),n.instance=d;case"script":return d=hs(a.src),(u=e.querySelector(To(d)))?(n.instance=u,on(u),u):(o=a,(u=li.get(d))&&(o=g({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),on(u),Cn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ic(o,a.precedence,e));return n.instance}function ic(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ac=null;function d_(e,n,a){if(ac===null){var o=new Map,u=ac=new Map;u.set(a,o)}else u=ac,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[pa]||d[nn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function p_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Nx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Ao=null;function Px(){}function Ox(e,n,a){if(Ao===null)throw Error(r(475));var o=Ao;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=fs(a.href),d=e.querySelector(bo(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=rc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,on(d);return}d=e.ownerDocument||e,a=f_(a),(u=li.get(u))&&$f(a,u),d=d.createElement("link"),on(d);var M=d;M._p=new Promise(function(A,I){M.onload=A,M.onerror=I}),Cn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=rc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ix(){if(Ao===null)throw Error(r(475));var e=Ao;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function rc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var sc=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,sc=new Map,n.forEach(zx,e),sc=null,rc.call(e))}function zx(e,n){if(!(n.state.loading&4)){var a=sc.get(e);if(a)var o=a.get(null);else{a=new Map,sc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=rc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Ro={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Bx(e,n,a,o,u,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function g_(e,n,a,o,u,d,M,A,I,it,pt,St){return e=new Bx(e,n,a,M,A,I,it,St),n=1,d===!0&&(n|=24),d=Yn(3,null,null,n),e.current=d,d.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Fu(d),e}function __(e){return e?(e=kr,e):kr}function v_(e,n,a,o,u,d){u=__(u),o.context===null?o.context=u:o.pendingContext=u,o=Sa(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ma(e,o,n),a!==null&&(Jn(a,e,n),no(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function x_(e){if(e.tag===13){var n=Vr(e,67108864);n!==null&&Jn(n,e,67108864),nh(e,67108864)}}var oc=!0;function Fx(e,n,a,o){var u=z.T;z.T=null;var d=J.p;try{J.p=2,ih(e,n,a,o)}finally{J.p=d,z.T=u}}function Hx(e,n,a,o){var u=z.T;z.T=null;var d=J.p;try{J.p=8,ih(e,n,a,o)}finally{J.p=d,z.T=u}}function ih(e,n,a,o){if(oc){var u=ah(o);if(u===null)Xf(e,n,o,lc,a),M_(e,o);else if(Vx(u,e,n,a,o))o.stopPropagation();else if(M_(e,o),n&4&&-1<Gx.indexOf(e)){for(;u!==null;){var d=Bi(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ut(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var I=1<<31-Nt(M);A.entanglements[1]|=I,M&=~I}Ci(d),(Oe&6)===0&&(Wl=Tt()+500,xo(0))}}break;case 13:A=Vr(d,2),A!==null&&Jn(A,d,2),Yl(),nh(d,2)}if(d=ah(o),d===null&&Xf(e,n,o,lc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Xf(e,n,o,null,a)}}function ah(e){return e=lu(e),rh(e)}var lc=null;function rh(e){if(lc=null,e=zi(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return lc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case ae:return 2;case zt:return 8;case C:case b:return 32;case X:return 268435456;default:return 32}default:return 32}}var sh=!1,Oa=null,Ia=null,za=null,Co=new Map,wo=new Map,Ba=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":Co.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(n.pointerId)}}function Do(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Bi(n),n!==null&&x_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Vx(e,n,a,o,u){switch(n){case"focusin":return Oa=Do(Oa,e,n,a,o,u),!0;case"dragenter":return Ia=Do(Ia,e,n,a,o,u),!0;case"mouseover":return za=Do(za,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Co.set(d,Do(Co.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,wo.set(d,Do(wo.get(d)||null,e,n,a,o,u)),!0}return!1}function E_(e){var n=zi(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,wn(e.priority,function(){if(a.tag===13){var o=Qn();o=we(o);var u=Vr(a,o);u!==null&&Jn(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=Bi(a),n!==null&&x_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){cc(e)&&a.delete(n)}function kx(){sh=!1,Oa!==null&&cc(Oa)&&(Oa=null),Ia!==null&&cc(Ia)&&(Ia=null),za!==null&&cc(za)&&(za=null),Co.forEach(b_),wo.forEach(b_)}function uc(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kx)))}var fc=null;function T_(e){fc!==e&&(fc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){fc===e&&(fc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var d=Bi(a);d!==null&&(e.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Uo(e){function n(I){return uc(I,e)}Oa!==null&&uc(Oa,e),Ia!==null&&uc(Ia,e),za!==null&&uc(za,e),Co.forEach(n),wo.forEach(n);for(var a=0;a<Ba.length;a++){var o=Ba[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[fn]||null;if(typeof d=="function")M||T_(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[fn]||null)A=M.formAction;else if(rh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),T_(a)}}}function oh(e){this._internalRoot=e}hc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=Qn();v_(a,o,e,n,null,null)},hc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),Yl(),n[bn]=null}};function hc(e){this._internalRoot=e}hc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Te();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&E_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(r(527,A_,"19.1.0"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Xx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dc.isDisabled&&dc.supportsFiber)try{ht=dc.inject(Xx),Ft=dc}catch{}}return No.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Vm,d=km,M=Xm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=g_(e,1,!1,null,null,a,o,u,d,M,A,null),e[bn]=n.current,kf(e),new oh(n)},No.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=Vm,M=km,A=Xm,I=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(I=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=g_(e,1,!0,n,a??null,o,u,d,M,A,I,it),n.context=__(null),a=n.current,o=Qn(),o=we(o),u=Sa(o),u.callback=null,Ma(a,u,o),a=o,n.current.lanes=a,dt(n,a),Ci(n),e[bn]=n.current,kf(e),new hc(n)},No.version="19.1.0",No}var I_;function eS(){if(I_)return uh.exports;I_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=tS(),uh.exports}var nS=eS();const iS=Z0(nS);var Po={},z_;function aS(){if(z_)return Po;z_=1,Object.defineProperty(Po,"__esModule",{value:!0}),Po.parse=f,Po.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,S){const E=new c,T=v.length;if(T<2)return E;const x=(S==null?void 0:S.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const U=v.indexOf(";",_),D=U===-1?T:U;if(O>D){_=v.lastIndexOf(";",O-1)+1;continue}const B=h(v,_,O),H=p(v,O,B),F=v.slice(B,H);if(E[F]===void 0){let q=h(v,O+1,D),L=p(v,D,q);const R=x(v.slice(q,L));E[F]=R}_=D+1}while(_<T);return E}function h(v,S,E){do{const T=v.charCodeAt(S);if(T!==32&&T!==9)return S}while(++S<E);return E}function p(v,S,E){for(;S>E;){const T=v.charCodeAt(--S);if(T!==32&&T!==9)return S+1}return E}function m(v,S,E){const T=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const x=T(S);if(!t.test(x))throw new TypeError(`argument val is invalid: ${S}`);let _=v+"="+x;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!y(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return l.call(v)==="[object Date]"}return Po}aS();var B_="popstate";function rS(s={}){function t(l,c){let{pathname:f="/",search:h="",hash:p=""}=Lr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Yh("",{pathname:f,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof c=="string"?c:Wo(c))}function r(l,c){Mi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return oS(t,i,r,s)}function Qe(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Mi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function F_(s,t){return{usr:s.state,key:s.key,idx:t}}function Yh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Lr(t):t,state:i,key:t&&t.key||r||sS()}}function Wo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Lr(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function oS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){h="POP";let x=g(),_=x==null?null:x-m;m=x,p&&p({action:h,location:T.location,delta:_})}function v(x,_){h="PUSH";let O=Yh(T.location,x,_);i&&i(O,x),m=g()+1;let U=F_(O,m),D=T.createHref(O);try{f.pushState(U,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(D)}c&&p&&p({action:h,location:T.location,delta:1})}function S(x,_){h="REPLACE";let O=Yh(T.location,x,_);i&&i(O,x),m=g();let U=F_(O,m),D=T.createHref(O);f.replaceState(U,"",D),c&&p&&p({action:h,location:T.location,delta:0})}function E(x){return lS(x)}let T={get action(){return h},get location(){return s(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(B_,y),p=x,()=>{l.removeEventListener(B_,y),p=null}},createHref(x){return t(l,x)},createURL:E,encodeLocation(x){let _=E(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:S,go(x){return f.go(x)}};return T}function lS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Qe(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Wo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function K0(s,t,i="/"){return cS(s,t,i,!1)}function cS(s,t,i,r){let l=typeof t=="string"?Lr(t):t,c=fa(l.pathname||"/",i);if(c==null)return null;let f=Q0(s);uS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=SS(c);h=yS(f[p],m,r)}return h}function Q0(s,t=[],i=[],r=""){let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(Qe(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=ca([r,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(Qe(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Q0(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:_S(m,c.index),routesMeta:g})};return s.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of J0(c.path))l(c,f,p)}),t}function J0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=J0(r.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function uS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:vS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var fS=/^:[\w-]+$/,hS=3,dS=2,pS=1,mS=10,gS=-2,H_=s=>s==="*";function _S(s,t){let i=s.split("/"),r=i.length;return i.some(H_)&&(r+=gS),t&&(r+=dS),i.filter(l=>!H_(l)).reduce((l,c)=>l+(fS.test(c)?hS:c===""?pS:mS),r)}function vS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function yS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=Zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!y&&m&&i&&!r[r.length-1].route.index&&(y=Zc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:ca([c,y.pathname]),pathnameBase:TS(ca([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=ca([c,y.pathnameBase]))}return f}function Zc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=xS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:y},v)=>{if(g==="*"){let E=h[v]||"";f=c.slice(0,c.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[v];return y&&!S?m[g]=void 0:m[g]=(S||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function xS(s,t=!1,i=!0){Mi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function SS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Mi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function fa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function MS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Lr(s):s;return{pathname:i?i.startsWith("/")?i:ES(i,t):t,search:AS(r),hash:RS(l)}}function ES(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ph(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function $0(s){let t=bS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function tv(s,t,i,r=!1){let l;typeof s=="string"?l=Lr(s):(l={...s},Qe(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),Qe(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),Qe(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let y=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),y-=1;l.pathname=v.join("/")}h=y>=0?t[y]:"/"}let p=MS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ca=s=>s.join("/").replace(/\/\/+/g,"/"),TS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),AS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,RS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function CS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var ev=["POST","PUT","PATCH","DELETE"];new Set(ev);var wS=["GET",...ev];new Set(wS);var zs=yt.createContext(null);zs.displayName="DataRouter";var tu=yt.createContext(null);tu.displayName="DataRouterState";var nv=yt.createContext({isTransitioning:!1});nv.displayName="ViewTransition";var DS=yt.createContext(new Map);DS.displayName="Fetchers";var US=yt.createContext(null);US.displayName="Await";var Ii=yt.createContext(null);Ii.displayName="Navigation";var Ko=yt.createContext(null);Ko.displayName="Location";var da=yt.createContext({outlet:null,matches:[],isDataRoute:!1});da.displayName="Route";var Bd=yt.createContext(null);Bd.displayName="RouteError";function LS(s,{relative:t}={}){Qe(Qo(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=yt.useContext(Ii),{hash:l,pathname:c,search:f}=Jo(s,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:ca([i,c])),r.createHref({pathname:h,search:f,hash:l})}function Qo(){return yt.useContext(Ko)!=null}function Nr(){return Qe(Qo(),"useLocation() may be used only in the context of a <Router> component."),yt.useContext(Ko).location}var iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function av(s){yt.useContext(Ii).static||yt.useLayoutEffect(s)}function NS(){let{isDataRoute:s}=yt.useContext(da);return s?qS():PS()}function PS(){Qe(Qo(),"useNavigate() may be used only in the context of a <Router> component.");let s=yt.useContext(zs),{basename:t,navigator:i}=yt.useContext(Ii),{matches:r}=yt.useContext(da),{pathname:l}=Nr(),c=JSON.stringify($0(r)),f=yt.useRef(!1);return av(()=>{f.current=!0}),yt.useCallback((p,m={})=>{if(Mi(f.current,iv),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=tv(p,JSON.parse(c),l,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ca([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,s])}yt.createContext(null);function Jo(s,{relative:t}={}){let{matches:i}=yt.useContext(da),{pathname:r}=Nr(),l=JSON.stringify($0(i));return yt.useMemo(()=>tv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function OS(s,t){return rv(s,t)}function rv(s,t,i,r){var O;Qe(Qo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=yt.useContext(Ii),{matches:f}=yt.useContext(da),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let U=y&&y.path||"";sv(m,!y||U.endsWith("*")||U.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U==="/"?"*":`${U}/*`}">.`)}let v=Nr(),S;if(t){let U=typeof t=="string"?Lr(t):t;Qe(g==="/"||((O=U.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${U.pathname}" was given in the \`location\` prop.`),S=U}else S=v;let E=S.pathname||"/",T=E;if(g!=="/"){let U=g.replace(/^\//,"").split("/");T="/"+E.replace(/^\//,"").split("/").slice(U.length).join("/")}let x=!c&&i&&i.matches&&i.matches.length>0?i.matches:K0(s,{pathname:T});Mi(y||x!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Mi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=HS(x&&x.map(U=>Object.assign({},U,{params:Object.assign({},p,U.params),pathname:ca([g,l.encodeLocation?l.encodeLocation(U.pathname).pathname:U.pathname]),pathnameBase:U.pathnameBase==="/"?g:ca([g,l.encodeLocation?l.encodeLocation(U.pathnameBase).pathname:U.pathnameBase])})),f,i,r);return t&&_?yt.createElement(Ko.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...S},navigationType:"POP"}},_):_}function IS(){let s=WS(),t=CS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=yt.createElement(yt.Fragment,null,yt.createElement("p",null,"💿 Hey developer 👋"),yt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",yt.createElement("code",{style:c},"ErrorBoundary")," or"," ",yt.createElement("code",{style:c},"errorElement")," prop on your route.")),yt.createElement(yt.Fragment,null,yt.createElement("h2",null,"Unexpected Application Error!"),yt.createElement("h3",{style:{fontStyle:"italic"}},t),i?yt.createElement("pre",{style:l},i):null,f)}var zS=yt.createElement(IS,null),BS=class extends yt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?yt.createElement(da.Provider,{value:this.props.routeContext},yt.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FS({routeContext:s,match:t,children:i}){let r=yt.useContext(zs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),yt.createElement(da.Provider,{value:s},i)}function HS(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);Qe(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:y}=i,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||v){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let y,v=!1,S=null,E=null;i&&(y=c&&m.route.id?c[m.route.id]:void 0,S=m.route.errorElement||zS,f&&(h<0&&g===0?(sv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,E=null):h===g&&(v=!0,E=m.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),x=()=>{let _;return y?_=S:v?_=E:m.route.Component?_=yt.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,yt.createElement(FS,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?yt.createElement(BS,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:x(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):x()},null)}function Fd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GS(s){let t=yt.useContext(zs);return Qe(t,Fd(s)),t}function VS(s){let t=yt.useContext(tu);return Qe(t,Fd(s)),t}function kS(s){let t=yt.useContext(da);return Qe(t,Fd(s)),t}function Hd(s){let t=kS(s),i=t.matches[t.matches.length-1];return Qe(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function XS(){return Hd("useRouteId")}function WS(){var r;let s=yt.useContext(Bd),t=VS("useRouteError"),i=Hd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function qS(){let{router:s}=GS("useNavigate"),t=Hd("useNavigate"),i=yt.useRef(!1);return av(()=>{i.current=!0}),yt.useCallback(async(l,c={})=>{Mi(i.current,iv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var G_={};function sv(s,t,i){!t&&!G_[s]&&(G_[s]=!0,Mi(!1,i))}yt.memo(YS);function YS({routes:s,future:t,state:i}){return rv(s,void 0,i,t)}function jh(s){Qe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jS({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){Qe(!Qo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=yt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Lr(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:v="default"}=i,S=yt.useMemo(()=>{let E=fa(p,f);return E==null?null:{location:{pathname:E,search:m,hash:g,state:y,key:v},navigationType:r}},[f,p,m,g,y,v,r]);return Mi(S!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),S==null?null:yt.createElement(Ii.Provider,{value:h},yt.createElement(Ko.Provider,{children:t,value:S}))}function ZS({children:s,location:t}){return OS(Zh(s),t)}function Zh(s,t=[]){let i=[];return yt.Children.forEach(s,(r,l)=>{if(!yt.isValidElement(r))return;let c=[...t,l];if(r.type===yt.Fragment){i.push.apply(i,Zh(r.props.children,c));return}Qe(r.type===jh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Qe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Zh(r.props.children,c)),i.push(f)}),i}var Fc="get",Hc="application/x-www-form-urlencoded";function eu(s){return s!=null&&typeof s.tagName=="string"}function KS(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function QS(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function JS(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function $S(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function tM(s,t){return s.button===0&&(!t||t==="_self")&&!$S(s)}var pc=null;function eM(){if(pc===null)try{new FormData(document.createElement("form"),0),pc=!1}catch{pc=!0}return pc}var nM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mh(s){return s!=null&&!nM.has(s)?(Mi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hc}"`),null):s}function iM(s,t){let i,r,l,c,f;if(QS(s)){let h=s.getAttribute("action");r=h?fa(h,t):null,i=s.getAttribute("method")||Fc,l=mh(s.getAttribute("enctype"))||Hc,c=new FormData(s)}else if(KS(s)||JS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?fa(p,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Fc,l=mh(s.getAttribute("formenctype"))||mh(h.getAttribute("enctype"))||Hc,c=new FormData(h,s),!eM()){let{name:m,type:g,value:y}=s;if(g==="image"){let v=m?`${m}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else m&&c.append(m,y)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Fc,r=null,l=Hc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Gd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function aM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function sM(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await aM(c,i);return f.links?f.links():[]}return[]}));return uM(r.flat(1).filter(rM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function V_(s,t,i,r,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?t.filter((p,m)=>{var y;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oM(s,t,{includeHydrateFallback:i}={}){return lM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function lM(s){return[...new Set(s)]}function cM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function uM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(cM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fM=new Set([100,101,204,205]);function hM(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&fa(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function ov(){let s=yt.useContext(zs);return Gd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function dM(){let s=yt.useContext(tu);return Gd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Vd=yt.createContext(void 0);Vd.displayName="FrameworkContext";function lv(){let s=yt.useContext(Vd);return Gd(s,"You must render this element inside a <HydratedRouter> element"),s}function pM(s,t){let i=yt.useContext(Vd),[r,l]=yt.useState(!1),[c,f]=yt.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,v=yt.useRef(null);yt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(O=>{f(O.isIntersecting)})},x=new IntersectionObserver(T,{threshold:.5});return v.current&&x.observe(v.current),()=>{x.disconnect()}}},[s]),yt.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let S=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Oo(h,S),onBlur:Oo(p,E),onMouseEnter:Oo(m,S),onMouseLeave:Oo(g,E),onTouchStart:Oo(y,S)}]:[!1,v,{}]}function Oo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function mM({page:s,...t}){let{router:i}=ov(),r=yt.useMemo(()=>K0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?yt.createElement(_M,{page:s,matches:r,...t}):null}function gM(s){let{manifest:t,routeModules:i}=lv(),[r,l]=yt.useState([]);return yt.useEffect(()=>{let c=!1;return sM(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function _M({page:s,matches:t,...i}){let r=Nr(),{manifest:l,routeModules:c}=lv(),{basename:f}=ov(),{loaderData:h,matches:p}=dM(),m=yt.useMemo(()=>V_(s,t,p,l,r,"data"),[s,t,p,l,r]),g=yt.useMemo(()=>V_(s,t,p,l,r,"assets"),[s,t,p,l,r]),y=yt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,T=!1;if(t.forEach(_=>{var U;let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(D=>D.route.id===_.route.id)&&_.route.id in h&&((U=c[_.route.id])!=null&&U.shouldRevalidate)||O.hasClientLoader?T=!0:E.add(_.route.id))}),E.size===0)return[];let x=hM(s,f);return T&&E.size>0&&x.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[f,h,r,l,m,t,s,c]),v=yt.useMemo(()=>oM(g,l),[g,l]),S=gM(g);return yt.createElement(yt.Fragment,null,y.map(E=>yt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),v.map(E=>yt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),S.map(({key:E,link:T})=>yt.createElement("link",{key:E,...T})))}function vM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cv&&(window.__reactRouterVersion="7.6.0")}catch{}function yM({basename:s,children:t,window:i}){let r=yt.useRef();r.current==null&&(r.current=rS({window:i,v5Compat:!0}));let l=r.current,[c,f]=yt.useState({action:l.action,location:l.location}),h=yt.useCallback(p=>{yt.startTransition(()=>f(p))},[f]);return yt.useLayoutEffect(()=>l.listen(h),[l,h]),yt.createElement(jS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nu=yt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:y,...v},S){let{basename:E}=yt.useContext(Ii),T=typeof m=="string"&&uv.test(m),x,_=!1;if(typeof m=="string"&&T&&(x=m,cv))try{let L=new URL(window.location.href),R=m.startsWith("//")?new URL(L.protocol+m):new URL(m),V=fa(R.pathname,E);R.origin===L.origin&&V!=null?m=V+R.search+R.hash:_=!0}catch{Mi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=LS(m,{relative:l}),[U,D,B]=pM(r,v),H=EM(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:y});function F(L){t&&t(L),L.defaultPrevented||H(L)}let q=yt.createElement("a",{...v,...B,href:x||O,onClick:_||c?t:F,ref:vM(S,D),target:p,"data-discover":!T&&i==="render"?"true":void 0});return U&&!T?yt.createElement(yt.Fragment,null,q,yt.createElement(mM,{page:O})):q});nu.displayName="Link";var xM=yt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},g){let y=Jo(f,{relative:m.relative}),v=Nr(),S=yt.useContext(tu),{navigator:E,basename:T}=yt.useContext(Ii),x=S!=null&&CM(y)&&h===!0,_=E.encodeLocation?E.encodeLocation(y).pathname:y.pathname,O=v.pathname,U=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;i||(O=O.toLowerCase(),U=U?U.toLowerCase():null,_=_.toLowerCase()),U&&T&&(U=fa(U,T)||U);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=O===_||!l&&O.startsWith(_)&&O.charAt(D)==="/",H=U!=null&&(U===_||!l&&U.startsWith(_)&&U.charAt(_.length)==="/"),F={isActive:B,isPending:H,isTransitioning:x},q=B?t:void 0,L;typeof r=="function"?L=r(F):L=[r,B?"active":null,H?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(F):c;return yt.createElement(nu,{...m,"aria-current":q,className:L,ref:g,style:R,to:f,viewTransition:h},typeof p=="function"?p(F):p)});xM.displayName="NavLink";var SM=yt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Fc,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,...v},S)=>{let E=AM(),T=RM(h,{relative:m}),x=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&uv.test(h),O=U=>{if(p&&p(U),U.defaultPrevented)return;U.preventDefault();let D=U.nativeEvent.submitter,B=(D==null?void 0:D.getAttribute("formmethod"))||f;E(D||U.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return yt.createElement("form",{ref:S,method:x,action:T,onSubmit:r?p:O,...v,"data-discover":!_&&s==="render"?"true":void 0})});SM.displayName="Form";function MM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fv(s){let t=yt.useContext(zs);return Qe(t,MM(s)),t}function EM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=NS(),p=Nr(),m=Jo(s,{relative:c});return yt.useCallback(g=>{if(tM(g,t)){g.preventDefault();let y=i!==void 0?i:Wo(p)===Wo(m);h(s,{replace:y,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,m,i,r,t,s,l,c,f])}var bM=0,TM=()=>`__${String(++bM)}__`;function AM(){let{router:s}=fv("useSubmit"),{basename:t}=yt.useContext(Ii),i=XS();return yt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=iM(r,t);if(l.navigate===!1){let g=l.fetcherKey||TM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function RM(s,{relative:t}={}){let{basename:i}=yt.useContext(Ii),r=yt.useContext(da);Qe(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...Jo(s||".",{relative:t})},f=Nr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ca([i,c.pathname])),Wo(c)}function CM(s,t={}){let i=yt.useContext(nv);Qe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=fv("useViewTransitionState"),l=Jo(s,{relative:t.relative});if(!i.isTransitioning)return!1;let c=fa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=fa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Zc(l.pathname,f)!=null||Zc(l.pathname,c)!=null}[...fM];const k_=[{id:"quantum-playground",title:"Atom",description:"Explore electron clouds and photon interactions",color:"#1a73e8",image:"⚛️",path:"/atom",available:!0},{id:"gravity-wells",title:"Placeholder",description:"Placeholder",color:"#ea4335",image:"🪐",path:"/gravity-wells",available:!1},{id:"fluid-dynamics",title:"Placeholder",description:"Placeholder",color:"#34a853",image:"💧",path:"/fluid-dynamics",available:!1},{id:"wave-mechanics",title:"Placeholder",description:"Placeholder",color:"#fbbc04",image:"🌊",path:"/wave-mechanics",available:!1},{id:"particle-collider",title:"Placeholder",description:"Placeholder",color:"#9c27b0",image:"💥",path:"/particle-collider",available:!1},{id:"electric-fields",title:"Placeholder",description:"Placeholder",color:"#00bcd4",image:"⚡",path:"/electric-fields",available:!1}];function wM({simulation:s,isActive:t,onMouseEnter:i,onMouseLeave:r,themeColors:l}){const{id:c,title:f,description:h,color:p,image:m,path:g,available:y}=s,v=p;return he.jsx(nu,{to:y?g:"#",className:"block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl",style:{opacity:y?1:.7,cursor:y?"pointer":"not-allowed",transform:t?"translateY(-5px)":"translateY(0)"},onMouseEnter:()=>i(c),onMouseLeave:r,children:he.jsxs("div",{className:"glass card-content transition-transform duration-500 ease-out h-full p-6 flex flex-col",style:{borderLeft:`3px solid ${v}`,boxShadow:t?`0 0 20px ${v}80`:"none",background:l.card},children:[he.jsx("div",{className:"emoji-icon text-5xl mb-4 transition-all duration-300",style:{filter:t?`drop-shadow(0 0 10px ${v})`:"none",transform:t?"scale(1.05)":"scale(1)",transformOrigin:"center"},children:m}),he.jsx("h2",{className:"text-2xl font-bold mb-2 transition-all duration-300",style:{color:v,transform:t?"scale(1.05)":"scale(1)",transformOrigin:"left"},children:f}),he.jsx("p",{style:{color:l.textSecondary},className:"mb-6 flex-grow",children:h}),he.jsxs("div",{className:"mt-auto",children:[he.jsx("div",{className:`text-sm font-medium ${y?"text-green-400":"text-amber-400"}`,children:y?"Available Now":"Coming Soon"}),he.jsx("div",{className:"progress-bar h-1 mt-3 rounded-full transition-all duration-500",style:{background:`linear-gradient(to right, ${v}80, ${v})`,opacity:t?1:0,transform:t?"scaleX(1)":"scaleX(0)"}})]})]})})}function DM(){const[s,t]=yt.useState(null),[i,r]=yt.useState("gray"),l=p=>{t(p)},c=()=>{t(null)},f={dark:{bg:"rgba(20, 40, 45, 1)",sidebar:"rgba(50, 90, 100, 0.3)",card:"rgba(50, 90, 100, 0.8)",accent:"rgb(0, 160, 170)",accentHover:"rgb(0, 190, 210)",text:"rgba(230, 240, 245, 0.9)",textSecondary:"rgba(180, 200, 210, 0.7)",gradient:"from-[rgb(0,160,170)] to-[rgb(0,190,210)]"},light:{bg:"rgba(245, 240, 230, 1)",sidebar:"rgba(230, 220, 200, 0.7)",card:"rgba(235, 225, 210, 0.9)",accent:"rgb(210, 120, 50)",accentHover:"rgb(230, 150, 80)",text:"rgba(70, 60, 50, 0.9)",textSecondary:"rgba(100, 90, 80, 0.7)",gradient:"from-[rgb(230,150,80)] to-[rgb(210,120,50)]"},blue:{bg:"#0f172a",sidebar:"rgba(30, 41, 59, 0.8)",card:"rgba(30, 41, 59, 0.8)",accent:"rgb(59, 130, 246)",accentHover:"rgb(96, 165, 250)",text:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(203, 213, 225, 0.7)",gradient:"from-blue-400 via-purple-500 to-pink-500"},gray:{bg:"#1a1a1a",sidebar:"rgba(40, 40, 40, 0.8)",card:"rgba(50, 50, 50, 0.8)",accent:"rgb(220, 40, 40)",accentHover:"rgb(240, 70, 70)",text:"rgba(220, 220, 220, 0.9)",textSecondary:"rgba(180, 180, 180, 0.7)",gradient:"from-[rgb(220,40,40)] to-[rgb(240,70,70)]"}},h=f[i];return document.documentElement.style.setProperty("--accent-color",h.accent),document.documentElement.style.setProperty("--accent-color-hover",h.accentHover),document.documentElement.style.setProperty("--text-primary",h.text),document.documentElement.style.setProperty("--text-secondary",h.textSecondary),document.documentElement.style.setProperty("--bg-card",h.card),he.jsxs("div",{className:"min-h-screen grid grid-cols-12",style:{backgroundColor:h.bg,color:h.text},children:[he.jsxs("div",{className:"col-span-2 glass fixed h-full p-4 flex flex-col",style:{background:h.sidebar},children:[he.jsx("div",{className:"text-xl font-bold mb-8",style:{color:h.accent},children:"GigaLab"}),he.jsx("nav",{className:"flex flex-col space-y-4",children:k_.map(p=>he.jsxs(nu,{to:p.available?p.path:"#",className:`p-2 rounded transition-colors ${p.available?"hover:bg-opacity-20":"opacity-50 cursor-not-allowed"}`,style:{color:h.text,backgroundColor:p.available&&i===s?`${h.accent}20`:"transparent"},children:[he.jsx("span",{className:"mr-2",children:p.image}),p.title]},p.id))}),he.jsxs("div",{className:"mt-8 mb-4",children:[he.jsx("p",{className:"text-sm mb-2",style:{color:h.textSecondary},children:"Select Theme"}),he.jsxs("div",{className:"flex space-x-2",children:[he.jsx("button",{onClick:()=>r("dark"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="dark"?"ring-2 scale-110":""}`,style:{background:"rgba(20, 40, 45, 1)",ringColor:f.dark.accent},title:"Dark Theme",children:i==="dark"&&he.jsx("span",{className:"text-xs",children:"✓"})}),he.jsx("button",{onClick:()=>r("light"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="light"?"ring-2 scale-110":""}`,style:{background:"rgba(245, 240, 230, 1)",ringColor:f.light.accent},title:"Light Theme",children:i==="light"&&he.jsx("span",{className:"text-xs text-gray-800",children:"✓"})}),he.jsx("button",{onClick:()=>r("blue"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="blue"?"ring-2 scale-110":""}`,style:{background:"#0f172a",ringColor:f.blue.accent},title:"Blue Theme",children:i==="blue"&&he.jsx("span",{className:"text-xs",children:"✓"})}),he.jsx("button",{onClick:()=>r("gray"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="gray"?"ring-2 scale-110":""}`,style:{background:"#1a1a1a",ringColor:f.gray.accent},title:"Gray Theme",children:i==="gray"&&he.jsx("span",{className:"text-xs",children:"✓"})})]})]}),he.jsx("div",{className:"mt-auto text-sm",children:he.jsx("button",{className:"w-full p-2 rounded border transition-all hover:bg-opacity-90",style:{backgroundColor:h.accent,borderColor:h.accent,color:i==="light"?"#fff":h.text},children:"Contact"})})]}),he.jsxs("div",{className:"col-span-10 col-start-3 px-8 py-16 max-w-7xl mx-auto",children:[he.jsxs("header",{className:"text-center mb-16",children:[he.jsx("h1",{className:`text-6xl font-bold mb-4 bg-gradient-to-r ${h.gradient} text-transparent bg-clip-text px-4 py-4`,children:"GigaLab"}),he.jsx("p",{className:"text-xl",style:{color:h.text},children:"Interactive physics simulations (and other stuff)"})]}),he.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto",children:k_.map(p=>he.jsx(wM,{simulation:p,isActive:s===p.id,onMouseEnter:l,onMouseLeave:c,themeColors:h},p.id))})]}),he.jsx("div",{className:"bg-animate"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="176",Ds={ROTATE:0,DOLLY:1,PAN:2},Cs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,X_=1,LM=2,hv=1,NM=2,oa=3,Ka=0,Wn=1,Di=2,ja=0,Cr=1,W_=2,q_=3,Y_=4,PM=5,br=100,OM=101,IM=102,zM=103,BM=104,FM=200,HM=201,GM=202,VM=203,Kh=204,Qh=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,Jh=0,$h=1,td=2,Ls=3,ed=4,nd=5,id=6,ad=7,dv=0,JM=1,$M=2,Za=0,tE=1,eE=2,nE=3,iE=4,aE=5,rE=6,sE=7,pv=300,Ns=301,Ps=302,rd=303,sd=304,iu=306,od=1e3,Ar=1001,ld=1002,ei=1003,oE=1004,mc=1005,Ui=1006,gh=1007,Rr=1008,Pi=1009,mv=1010,gv=1011,qo=1012,Xd=1013,wr=1014,Li=1015,$o=1016,Wd=1017,qd=1018,Yo=1020,_v=35902,vv=1021,yv=1022,xi=1023,jo=1026,Zo=1027,Yd=1028,jd=1029,xv=1030,Zd=1031,Kd=1033,Gc=33776,Vc=33777,kc=33778,Xc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,xd=37812,Sd=37813,Md=37814,Ed=37815,bd=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,Wc=36492,Dd=36494,Ud=36495,Sv=36283,Ld=36284,Nd=36285,Pd=36286,lE=3200,cE=3201,Mv=0,uE=1,Ya="",ui="srgb",Os="srgb-linear",Kc="linear",He="srgb",ds=7680,j_=519,fE=512,hE=513,dE=514,Ev=515,pE=516,mE=517,gE=518,_E=519,Z_=35044,K_="300 es",la=2e3,Qc=2001;class Pr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qc=Math.PI/180,Od=180/Math.PI;function tl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function Ee(s,t,i){return Math.max(t,Math.min(i,s))}function vE(s,t){return(s%t+t)%t}function _h(s,t,i){return(1-i)*s+i*t}function Io(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function kn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yE={DEG2RAD:qc};class ge{constructor(t=0,i=0){ge.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class me{constructor(t,i,r,l,c,f,h,p,m){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m)}set(t,i,r,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],y=r[7],v=r[2],S=r[5],E=r[8],T=l[0],x=l[3],_=l[6],O=l[1],U=l[4],D=l[7],B=l[2],H=l[5],F=l[8];return c[0]=f*T+h*O+p*B,c[3]=f*x+h*U+p*H,c[6]=f*_+h*D+p*F,c[1]=m*T+g*O+y*B,c[4]=m*x+g*U+y*H,c[7]=m*_+g*D+y*F,c[2]=v*T+S*O+E*B,c[5]=v*x+S*U+E*H,c[8]=v*_+S*D+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-r*c*g+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],y=g*f-h*m,v=h*p-g*c,S=m*c-f*p,E=i*y+r*v+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=y*T,t[1]=(l*m-g*r)*T,t[2]=(h*r-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*c-h*i)*T,t[6]=S*T,t[7]=(r*p-m*i)*T,t[8]=(f*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new me;function bv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Jc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xE(){const s=Jc("canvas");return s.style.display="block",s}const Q_={};function Yc(s){s in Q_||(Q_[s]=!0,console.warn(s))}function SE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function ME(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function EE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const s={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===He&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===He&&(l.r=Us(l.r),l.g=Us(l.g),l.b=Us(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Kc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Os]:{primaries:t,whitePoint:r,transfer:Kc,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:t,whitePoint:r,transfer:He,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),s}const Ne=bE();function ua(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Us(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ps;class TE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ps===void 0&&(ps=Jc("canvas")),ps.width=t.width,ps.height=t.height;const l=ps.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ps}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Jc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ua(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AE=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(yh(l[f].image)):c.push(yh(l[f]))}else c=yh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class Bn extends Pr{constructor(t=Bn.DEFAULT_IMAGE,i=Bn.DEFAULT_MAPPING,r=Ar,l=Ar,c=Ui,f=Rr,h=xi,p=Pi,m=Bn.DEFAULT_ANISOTROPY,g=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=tl(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case od:t.x=t.x-Math.floor(t.x);break;case Ar:t.x=t.x<0?0:1;break;case ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case od:t.y=t.y-Math.floor(t.y);break;case Ar:t.y=t.y<0?0:1;break;case ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=pv;Bn.DEFAULT_ANISOTROPY=1;class en{constructor(t=0,i=0,r=0,l=1){en.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],y=p[8],v=p[1],S=p[5],E=p[9],T=p[2],x=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(y-T)<.01&&Math.abs(E-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+T)<.1&&Math.abs(E+x)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(m+1)/2,D=(S+1)/2,B=(_+1)/2,H=(g+v)/4,F=(y+T)/4,q=(E+x)/4;return U>D&&U>B?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=H/r,c=F/r):D>B?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=H/l,c=q/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=F/c,l=q/c),this.set(r,l,c,i),this}let O=Math.sqrt((x-E)*(x-E)+(y-T)*(y-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(x-E)/O,this.y=(y-T)/O,this.z=(v-g)/O,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this.w=Ee(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this.w=Ee(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Pr{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new en(0,0,t,i),this.scissorTest=!1,this.viewport=new en(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new Bn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dr extends CE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tv extends Bn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Bn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const v=c[f+0],S=c[f+1],E=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=y;return}if(h===1){t[i+0]=v,t[i+1]=S,t[i+2]=E,t[i+3]=T;return}if(y!==T||p!==v||m!==S||g!==E){let x=1-h;const _=p*v+m*S+g*E+y*T,O=_>=0?1:-1,U=1-_*_;if(U>Number.EPSILON){const B=Math.sqrt(U),H=Math.atan2(B,_*O);x=Math.sin(x*H)/B,h=Math.sin(h*H)/B}const D=h*O;if(p=p*x+v*D,m=m*x+S*D,g=g*x+E*D,y=y*x+T*D,x===1-h){const B=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=B,m*=B,g*=B,y*=B}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=c[f],v=c[f+1],S=c[f+2],E=c[f+3];return t[i]=h*E+g*y+p*S-m*v,t[i+1]=p*E+g*v+m*y-h*S,t[i+2]=m*E+g*S+h*v-p*y,t[i+3]=g*E-h*y-p*v-m*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),y=h(c/2),v=p(r/2),S=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=v*g*y+m*S*E,this._y=m*S*y-v*g*E,this._z=m*g*E+v*S*y,this._w=m*g*y-v*S*E;break;case"YXZ":this._x=v*g*y+m*S*E,this._y=m*S*y-v*g*E,this._z=m*g*E-v*S*y,this._w=m*g*y+v*S*E;break;case"ZXY":this._x=v*g*y-m*S*E,this._y=m*S*y+v*g*E,this._z=m*g*E+v*S*y,this._w=m*g*y-v*S*E;break;case"ZYX":this._x=v*g*y-m*S*E,this._y=m*S*y+v*g*E,this._z=m*g*E-v*S*y,this._w=m*g*y+v*S*E;break;case"YZX":this._x=v*g*y+m*S*E,this._y=m*S*y+v*g*E,this._z=m*g*E-v*S*y,this._w=m*g*y-v*S*E;break;case"XZY":this._x=v*g*y-m*S*E,this._y=m*S*y-v*g*E,this._z=m*g*E+v*S*y,this._w=m*g*y+v*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],y=i[10],v=r+h+y;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-p)*S,this._y=(c-m)*S,this._z=(f-l)*S}else if(r>h&&r>y){const S=2*Math.sqrt(1+r-h-y);this._w=(g-p)/S,this._x=.25*S,this._y=(l+f)/S,this._z=(c+m)/S}else if(h>y){const S=2*Math.sqrt(1+h-r-y);this._w=(c-m)/S,this._x=(l+f)/S,this._y=.25*S,this._z=(p+g)/S}else{const S=2*Math.sqrt(1+y-r-h);this._w=(f-l)/S,this._x=(c+m)/S,this._y=(p+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-r*m,this._z=c*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const S=1-i;return this._w=S*f+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),y=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*y+this._w*v,this._x=r*y+this._x*v,this._y=l*y+this._y*v,this._z=c*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class tt{constructor(t=0,i=0,r=0){tt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(t0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),g=2*(h*i-c*l),y=2*(c*r-f*i);return this.x=i+p*m+f*y-h*g,this.y=r+p*g+h*m-c*y,this.z=l+p*y+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ee(this.x,t.x,i.x),this.y=Ee(this.y,t.y,i.y),this.z=Ee(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ee(this.x,t,i),this.y=Ee(this.y,t,i),this.z=Ee(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Ee(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Ee(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new tt,t0=new Ur;class Or{constructor(t=new tt(1/0,1/0,1/0),i=new tt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,gi):gi.fromBufferAttribute(c,f),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gc.copy(r.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),_c.subVectors(this.max,zo),ms.subVectors(t.a,zo),gs.subVectors(t.b,zo),_s.subVectors(t.c,zo),Ha.subVectors(gs,ms),Ga.subVectors(_s,gs),_r.subVectors(ms,_s);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-_r.z,_r.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,_r.z,0,-_r.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-_r.y,_r.x,0];return!Sh(i,ms,gs,_s,_c)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ms,gs,_s,_c))?!1:(vc.crossVectors(Ha,Ga),i=[vc.x,vc.y,vc.z],Sh(i,ms,gs,_s,_c))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const na=[new tt,new tt,new tt,new tt,new tt,new tt,new tt,new tt],gi=new tt,gc=new Or,ms=new tt,gs=new tt,_s=new tt,Ha=new tt,Ga=new tt,_r=new tt,zo=new tt,_c=new tt,vc=new tt,vr=new tt;function Sh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){vr.fromArray(s,c);const h=l.x*Math.abs(vr.x)+l.y*Math.abs(vr.y)+l.z*Math.abs(vr.z),p=t.dot(vr),m=i.dot(vr),g=r.dot(vr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const DE=new Or,Bo=new tt,Mh=new tt;class el{constructor(t=new tt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):DE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bo.subVectors(t,this.center);const i=Bo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Bo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bo.copy(t.center).add(Mh)),this.expandByPoint(Bo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ia=new tt,Eh=new tt,yc=new tt,Va=new tt,bh=new tt,xc=new tt,Th=new tt;class Av{constructor(t=new tt,i=new tt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Eh.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(yc),h=Va.dot(this.direction),p=-Va.dot(yc),m=Va.lengthSq(),g=Math.abs(1-f*f);let y,v,S,E;if(g>0)if(y=f*p-h,v=f*h-p,E=c*g,y>=0)if(v>=-E)if(v<=E){const T=1/g;y*=T,v*=T,S=y*(y+f*v+2*h)+v*(f*y+v+2*p)+m}else v=c,y=Math.max(0,-(f*v+h)),S=-y*y+v*(v+2*p)+m;else v=-c,y=Math.max(0,-(f*v+h)),S=-y*y+v*(v+2*p)+m;else v<=-E?(y=Math.max(0,-(-f*c+h)),v=y>0?-c:Math.min(Math.max(-c,-p),c),S=-y*y+v*(v+2*p)+m):v<=E?(y=0,v=Math.min(Math.max(-c,-p),c),S=v*(v+2*p)+m):(y=Math.max(0,-(f*c+h)),v=y>0?c:Math.min(Math.max(-c,-p),c),S=-y*y+v*(v+2*p)+m);else v=f>0?-c:c,y=Math.max(0,-(f*v+h)),S=-y*y+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Eh).addScaledVector(yc,v),S}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const r=ia.dot(this.direction),l=ia.dot(ia)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),y>=0?(h=(t.min.z-v.z)*y,p=(t.max.z-v.z)*y):(h=(t.max.z-v.z)*y,p=(t.min.z-v.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,r,l,c){bh.subVectors(i,t),xc.subVectors(r,t),Th.crossVectors(bh,xc);let f=this.direction.dot(Th),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Va.subVectors(this.origin,t);const p=h*this.direction.dot(xc.crossVectors(Va,xc));if(p<0)return null;const m=h*this.direction.dot(bh.cross(Va));if(m<0||p+m>f)return null;const g=-h*Va.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(t,i,r,l,c,f,h,p,m,g,y,v,S,E,T,x){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m,g,y,v,S,E,T,x)}set(t,i,r,l,c,f,h,p,m,g,y,v,S,E,T,x){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=v,_[3]=S,_[7]=E,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/vs.setFromMatrixColumn(t,0).length(),c=1/vs.setFromMatrixColumn(t,1).length(),f=1/vs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const v=f*g,S=f*y,E=h*g,T=h*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=S+E*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=E+S*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,S=p*y,E=m*g,T=m*y;i[0]=v+T*h,i[4]=E*h-S,i[8]=f*m,i[1]=f*y,i[5]=f*g,i[9]=-h,i[2]=S*h-E,i[6]=T+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,S=p*y,E=m*g,T=m*y;i[0]=v-T*h,i[4]=-f*y,i[8]=E+S*h,i[1]=S+E*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,S=f*y,E=h*g,T=h*y;i[0]=p*g,i[4]=E*m-S,i[8]=v*m+T,i[1]=p*y,i[5]=T*m+v,i[9]=S*m-E,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=T-v*y,i[8]=E*y+S,i[1]=y,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=S*y+E,i[10]=v-T*y}else if(t.order==="XZY"){const v=f*p,S=f*m,E=h*p,T=h*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=v*y+T,i[5]=f*g,i[9]=S*y-E,i[2]=E*y-S,i[6]=h*g,i[10]=T*y+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UE,t,LE)}lookAt(t,i,r){const l=this.elements;return $n.subVectors(t,i),$n.lengthSq()===0&&($n.z=1),$n.normalize(),ka.crossVectors(r,$n),ka.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),ka.crossVectors(r,$n)),ka.normalize(),Sc.crossVectors($n,ka),l[0]=ka.x,l[4]=Sc.x,l[8]=$n.x,l[1]=ka.y,l[5]=Sc.y,l[9]=$n.y,l[2]=ka.z,l[6]=Sc.z,l[10]=$n.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],y=r[5],v=r[9],S=r[13],E=r[2],T=r[6],x=r[10],_=r[14],O=r[3],U=r[7],D=r[11],B=r[15],H=l[0],F=l[4],q=l[8],L=l[12],R=l[1],V=l[5],ft=l[9],ct=l[13],Mt=l[2],mt=l[6],z=l[10],J=l[14],Y=l[3],Ct=l[7],P=l[11],nt=l[15];return c[0]=f*H+h*R+p*Mt+m*Y,c[4]=f*F+h*V+p*mt+m*Ct,c[8]=f*q+h*ft+p*z+m*P,c[12]=f*L+h*ct+p*J+m*nt,c[1]=g*H+y*R+v*Mt+S*Y,c[5]=g*F+y*V+v*mt+S*Ct,c[9]=g*q+y*ft+v*z+S*P,c[13]=g*L+y*ct+v*J+S*nt,c[2]=E*H+T*R+x*Mt+_*Y,c[6]=E*F+T*V+x*mt+_*Ct,c[10]=E*q+T*ft+x*z+_*P,c[14]=E*L+T*ct+x*J+_*nt,c[3]=O*H+U*R+D*Mt+B*Y,c[7]=O*F+U*V+D*mt+B*Ct,c[11]=O*q+U*ft+D*z+B*P,c[15]=O*L+U*ct+D*J+B*nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],y=t[6],v=t[10],S=t[14],E=t[3],T=t[7],x=t[11],_=t[15];return E*(+c*p*y-l*m*y-c*h*v+r*m*v+l*h*S-r*p*S)+T*(+i*p*S-i*m*v+c*f*v-l*f*S+l*m*g-c*p*g)+x*(+i*m*y-i*h*S-c*f*y+r*f*S+c*h*g-r*m*g)+_*(-l*h*g-i*p*y+i*h*v+l*f*y-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],y=t[9],v=t[10],S=t[11],E=t[12],T=t[13],x=t[14],_=t[15],O=y*x*m-T*v*m+T*p*S-h*x*S-y*p*_+h*v*_,U=E*v*m-g*x*m-E*p*S+f*x*S+g*p*_-f*v*_,D=g*T*m-E*y*m+E*h*S-f*T*S-g*h*_+f*y*_,B=E*y*p-g*T*p-E*h*v+f*T*v+g*h*x-f*y*x,H=i*O+r*U+l*D+c*B;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/H;return t[0]=O*F,t[1]=(T*v*c-y*x*c-T*l*S+r*x*S+y*l*_-r*v*_)*F,t[2]=(h*x*c-T*p*c+T*l*m-r*x*m-h*l*_+r*p*_)*F,t[3]=(y*p*c-h*v*c-y*l*m+r*v*m+h*l*S-r*p*S)*F,t[4]=U*F,t[5]=(g*x*c-E*v*c+E*l*S-i*x*S-g*l*_+i*v*_)*F,t[6]=(E*p*c-f*x*c-E*l*m+i*x*m+f*l*_-i*p*_)*F,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*S+i*p*S)*F,t[8]=D*F,t[9]=(E*y*c-g*T*c-E*r*S+i*T*S+g*r*_-i*y*_)*F,t[10]=(f*T*c-E*h*c+E*r*m-i*T*m-f*r*_+i*h*_)*F,t[11]=(g*h*c-f*y*c-g*r*m+i*y*m+f*r*S-i*h*S)*F,t[12]=B*F,t[13]=(g*T*l-E*y*l+E*r*v-i*T*v-g*r*x+i*y*x)*F,t[14]=(E*h*l-f*T*l-E*r*p+i*T*p+f*r*x-i*h*x)*F,t[15]=(f*y*l-g*h*l+g*r*p-i*y*p-f*r*v+i*h*v)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,y=h+h,v=c*m,S=c*g,E=c*y,T=f*g,x=f*y,_=h*y,O=p*m,U=p*g,D=p*y,B=r.x,H=r.y,F=r.z;return l[0]=(1-(T+_))*B,l[1]=(S+D)*B,l[2]=(E-U)*B,l[3]=0,l[4]=(S-D)*H,l[5]=(1-(v+_))*H,l[6]=(x+O)*H,l[7]=0,l[8]=(E+U)*F,l[9]=(x-O)*F,l[10]=(1-(v+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=vs.set(l[0],l[1],l[2]).length();const f=vs.set(l[4],l[5],l[6]).length(),h=vs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const m=1/c,g=1/f,y=1/h;return _i.elements[0]*=m,_i.elements[1]*=m,_i.elements[2]*=m,_i.elements[4]*=g,_i.elements[5]*=g,_i.elements[6]*=g,_i.elements[8]*=y,_i.elements[9]*=y,_i.elements[10]*=y,i.setFromRotationMatrix(_i),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=la){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),v=(r+l)/(r-l);let S,E;if(h===la)S=-(f+c)/(f-c),E=-2*f*c/(f-c);else if(h===Qc)S=-f/(f-c),E=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=S,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=la){const p=this.elements,m=1/(i-t),g=1/(r-l),y=1/(f-c),v=(i+t)*m,S=(r+l)*g;let E,T;if(h===la)E=(f+c)*y,T=-2*y;else if(h===Qc)E=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-S,p[2]=0,p[6]=0,p[10]=T,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const vs=new tt,_i=new qe,UE=new tt(0,0,0),LE=new tt(1,1,1),ka=new tt,Sc=new tt,$n=new tt,e0=new qe,n0=new Ur;class Oi{constructor(t=0,i=0,r=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],v=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ee(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ee(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ee(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-Ee(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const i0=new tt,ys=new Ur,aa=new qe,Mc=new tt,Fo=new tt,PE=new tt,OE=new Ur,a0=new tt(1,0,0),r0=new tt(0,1,0),s0=new tt(0,0,1),o0={type:"added"},IE={type:"removed"},xs={type:"childadded",child:null},Ah={type:"childremoved",child:null};class En extends Pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const t=new tt,i=new Oi,r=new Ur,l=new tt(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new me}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.multiply(ys),this}rotateOnWorldAxis(t,i){return ys.setFromAxisAngle(t,i),this.quaternion.premultiply(ys),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,i){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Mc.copy(t):Mc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Fo,Mc,this.up):aa.lookAt(Mc,Fo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),ys.setFromRotationMatrix(aa),this.quaternion.premultiply(ys.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(IE),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,PE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,OE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];c(t.shapes,y)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),y=f(t.shapes),v=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}En.DEFAULT_UP=new tt(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new tt,ra=new tt,Rh=new tt,sa=new tt,Ss=new tt,Ms=new tt,l0=new tt,Ch=new tt,wh=new tt,Dh=new tt,Uh=new en,Lh=new en,Nh=new en;class yi{constructor(t=new tt,i=new tt,r=new tt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){vi.subVectors(l,i),ra.subVectors(r,i),Rh.subVectors(t,i);const f=vi.dot(vi),h=vi.dot(ra),p=vi.dot(Rh),m=ra.dot(ra),g=ra.dot(Rh),y=f*m-h*h;if(y===0)return c.set(0,0,0),null;const v=1/y,S=(m*p-h*g)*v,E=(f*g-h*p)*v;return c.set(1-S-E,E,S)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,sa)===null?!1:sa.x>=0&&sa.y>=0&&sa.x+sa.y<=1}static getInterpolation(t,i,r,l,c,f,h,p){return this.getBarycoord(t,i,r,l,sa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,sa.x),p.addScaledVector(f,sa.y),p.addScaledVector(h,sa.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,r),Nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Lh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ra.subVectors(t,i),vi.cross(ra).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),vi.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;Ss.subVectors(l,r),Ms.subVectors(c,r),Ch.subVectors(t,r);const p=Ss.dot(Ch),m=Ms.dot(Ch);if(p<=0&&m<=0)return i.copy(r);wh.subVectors(t,l);const g=Ss.dot(wh),y=Ms.dot(wh);if(g>=0&&y<=g)return i.copy(l);const v=p*y-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(Ss,f);Dh.subVectors(t,c);const S=Ss.dot(Dh),E=Ms.dot(Dh);if(E>=0&&S<=E)return i.copy(c);const T=S*m-p*E;if(T<=0&&m>=0&&E<=0)return h=m/(m-E),i.copy(r).addScaledVector(Ms,h);const x=g*E-S*y;if(x<=0&&y-g>=0&&S-E>=0)return l0.subVectors(c,l),h=(y-g)/(y-g+(S-E)),i.copy(l).addScaledVector(l0,h);const _=1/(x+T+v);return f=T*_,h=v*_,i.copy(r).addScaledVector(Ss,f).addScaledVector(Ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Ph(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class be{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ne.workingColorSpace){if(t=vE(t,1),i=Ee(i,0,1),r=Ee(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Ph(f,c,t+1/3),this.g=Ph(f,c,t),this.b=Ph(f,c,t-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(t,i=ui){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ui){const r=Cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}copyLinearToSRGB(t){return this.r=Us(t.r),this.g=Us(t.g),this.b=Us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return Ne.fromWorkingColorSpace(On.copy(this),t),Math.round(Ee(On.r*255,0,255))*65536+Math.round(Ee(On.g*255,0,255))*256+Math.round(Ee(On.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(On.copy(this),i);const r=On.r,l=On.g,c=On.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const y=f-h;switch(m=g<=.5?y/(f+h):y/(2-f-h),f){case r:p=(l-c)/y+(l<c?6:0);break;case l:p=(c-r)/y+2;break;case c:p=(r-l)/y+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(On.copy(this),i),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ui){Ne.fromWorkingColorSpace(On.copy(this),t);const i=On.r,r=On.g,l=On.b;return t!==ui?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(Ec);const r=_h(Xa.h,Ec.h,i),l=_h(Xa.s,Ec.s,i),c=_h(Xa.l,Ec.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new be;be.NAMES=Cv;let zE=0;class nl extends Pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=Cr,this.side=Ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(r.blending=this.blending),this.side!==Ka&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wv extends nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new tt,bc=new ge;let BE=0;class Si{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Z_,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)bc.fromBufferAttribute(this,i),bc.applyMatrix3(t),this.setXY(i,bc.x,bc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Io(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=kn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Io(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Io(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Io(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Io(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),r=kn(r,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class Dv extends Si{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Uv extends Si{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ni extends Si{constructor(t,i,r){super(new Float32Array(t),i,r)}}let FE=0;const ci=new qe,Oh=new En,Es=new tt,ti=new Or,Ho=new Or,Mn=new tt;class Qa extends Pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bv(t)?Uv:Dv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new me().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ci.makeRotationFromQuaternion(t),this.applyMatrix4(ci),this}rotateX(t){return ci.makeRotationX(t),this.applyMatrix4(ci),this}rotateY(t){return ci.makeRotationY(t),this.applyMatrix4(ci),this}rotateZ(t){return ci.makeRotationZ(t),this.applyMatrix4(ci),this}translate(t,i,r){return ci.makeTranslation(t,i,r),this.applyMatrix4(ci),this}scale(t,i,r){return ci.makeScale(t,i,r),this.applyMatrix4(ci),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ni(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new tt(-1/0,-1/0,-1/0),new tt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ti.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new tt,1/0);return}if(t){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Ho.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ti.min,Ho.min),ti.expandByPoint(Mn),Mn.addVectors(ti.max,Ho.max),ti.expandByPoint(Mn)):(ti.expandByPoint(Ho.min),ti.expandByPoint(Ho.max))}ti.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)Mn.fromBufferAttribute(h,m),p&&(Es.fromBufferAttribute(t,m),Mn.add(Es)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<r.count;q++)h[q]=new tt,p[q]=new tt;const m=new tt,g=new tt,y=new tt,v=new ge,S=new ge,E=new ge,T=new tt,x=new tt;function _(q,L,R){m.fromBufferAttribute(r,q),g.fromBufferAttribute(r,L),y.fromBufferAttribute(r,R),v.fromBufferAttribute(c,q),S.fromBufferAttribute(c,L),E.fromBufferAttribute(c,R),g.sub(m),y.sub(m),S.sub(v),E.sub(v);const V=1/(S.x*E.y-E.x*S.y);isFinite(V)&&(T.copy(g).multiplyScalar(E.y).addScaledVector(y,-S.y).multiplyScalar(V),x.copy(y).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(V),h[q].add(T),h[L].add(T),h[R].add(T),p[q].add(x),p[L].add(x),p[R].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let q=0,L=O.length;q<L;++q){const R=O[q],V=R.start,ft=R.count;for(let ct=V,Mt=V+ft;ct<Mt;ct+=3)_(t.getX(ct+0),t.getX(ct+1),t.getX(ct+2))}const U=new tt,D=new tt,B=new tt,H=new tt;function F(q){B.fromBufferAttribute(l,q),H.copy(B);const L=h[q];U.copy(L),U.sub(B.multiplyScalar(B.dot(L))).normalize(),D.crossVectors(H,L);const V=D.dot(p[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,V)}for(let q=0,L=O.length;q<L;++q){const R=O[q],V=R.start,ft=R.count;for(let ct=V,Mt=V+ft;ct<Mt;ct+=3)F(t.getX(ct+0)),F(t.getX(ct+1)),F(t.getX(ct+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const l=new tt,c=new tt,f=new tt,h=new tt,p=new tt,m=new tt,g=new tt,y=new tt;if(t)for(let v=0,S=t.count;v<S;v+=3){const E=t.getX(v+0),T=t.getX(v+1),x=t.getX(v+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),g.subVectors(f,c),y.subVectors(l,c),g.cross(y),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),h.add(g),p.add(g),m.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,S=i.count;v<S;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),y.subVectors(l,c),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,y=h.normalized,v=new m.constructor(p.length*g);let S=0,E=0;for(let T=0,x=p.length;T<x;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*g;for(let _=0;_<g;_++)v[E++]=m[S++]}return new Si(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Qa,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,y=m.length;g<y;g++){const v=m[g],S=t(v,r);p.push(S)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,v=m.length;y<v;y++){const S=m[y];g.push(S.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],y=c[m];for(let v=0,S=y.length;v<S;v++)g.push(y[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new qe,yr=new Av,Tc=new el,u0=new tt,Ac=new tt,Rc=new tt,Cc=new tt,Ih=new tt,wc=new tt,f0=new tt,Dc=new tt;class hi extends En{constructor(t=new Qa,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){wc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],y=c[p];g!==0&&(Ih.fromBufferAttribute(y,t),f?wc.addScaledVector(Ih,g):wc.addScaledVector(Ih.sub(i),g))}i.add(wc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Tc.copy(r.boundingSphere),Tc.applyMatrix4(c),yr.copy(t.ray).recast(t.near),!(Tc.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Tc,u0)===null||yr.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(c).invert(),yr.copy(t.ray).applyMatrix4(c0),!(r.boundingBox!==null&&yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,yr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,v=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const x=v[E],_=f[x.materialIndex],O=Math.max(x.start,S.start),U=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let D=O,B=U;D<B;D+=3){const H=h.getX(D),F=h.getX(D+1),q=h.getX(D+2);l=Uc(this,_,t,r,m,g,y,H,F,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=E,_=T;x<_;x+=3){const O=h.getX(x),U=h.getX(x+1),D=h.getX(x+2);l=Uc(this,f,t,r,m,g,y,O,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=v.length;E<T;E++){const x=v[E],_=f[x.materialIndex],O=Math.max(x.start,S.start),U=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let D=O,B=U;D<B;D+=3){const H=D,F=D+1,q=D+2;l=Uc(this,_,t,r,m,g,y,H,F,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let x=E,_=T;x<_;x+=3){const O=x,U=x+1,D=x+2;l=Uc(this,f,t,r,m,g,y,O,U,D),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function HE(s,t,i,r,l,c,f,h){let p;if(t.side===Wn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===Ka,h),p===null)return null;Dc.copy(h),Dc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Dc);return m<i.near||m>i.far?null:{distance:m,point:Dc.clone(),object:s}}function Uc(s,t,i,r,l,c,f,h,p,m){s.getVertexPosition(h,Ac),s.getVertexPosition(p,Rc),s.getVertexPosition(m,Cc);const g=HE(s,t,i,r,Ac,Rc,Cc,f0);if(g){const y=new tt;yi.getBarycoord(f0,Ac,Rc,Cc,y),l&&(g.uv=yi.getInterpolatedAttribute(l,h,p,m,y,new ge)),c&&(g.uv1=yi.getInterpolatedAttribute(c,h,p,m,y,new ge)),f&&(g.normal=yi.getInterpolatedAttribute(f,h,p,m,y,new tt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new tt,materialIndex:0};yi.getNormal(Ac,Rc,Cc,v.normal),g.face=v,g.barycoord=y}return g}class il extends Qa{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],y=[];let v=0,S=0;E("z","y","x",-1,-1,r,i,t,f,c,0),E("z","y","x",1,-1,r,i,-t,f,c,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,c,4),E("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Ni(m,3)),this.setAttribute("normal",new Ni(g,3)),this.setAttribute("uv",new Ni(y,2));function E(T,x,_,O,U,D,B,H,F,q,L){const R=D/F,V=B/q,ft=D/2,ct=B/2,Mt=H/2,mt=F+1,z=q+1;let J=0,Y=0;const Ct=new tt;for(let P=0;P<z;P++){const nt=P*V-ct;for(let Et=0;Et<mt;Et++){const At=Et*R-ft;Ct[T]=At*O,Ct[x]=nt*U,Ct[_]=Mt,m.push(Ct.x,Ct.y,Ct.z),Ct[T]=0,Ct[x]=0,Ct[_]=H>0?1:-1,g.push(Ct.x,Ct.y,Ct.z),y.push(Et/F),y.push(1-P/q),J+=1}}for(let P=0;P<q;P++)for(let nt=0;nt<F;nt++){const Et=v+nt+mt*P,At=v+nt+mt*(P+1),$=v+(nt+1)+mt*(P+1),vt=v+(nt+1)+mt*P;p.push(Et,At,vt),p.push(At,$,vt),Y+=6}h.addGroup(S,Y,L),S+=Y,v+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Is(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function zn(s){const t={};for(let i=0;i<s.length;i++){const r=Is(s[i]);for(const l in r)t[l]=r[l]}return t}function GE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Lv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const VE={clone:Is,merge:zn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ha extends nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Is(t.uniforms),this.uniformsGroups=GE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nv extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=la}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wa=new tt,h0=new ge,d0=new ge;class fi extends Nv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(qc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Wa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z),Wa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wa.x,Wa.y).multiplyScalar(-t/Wa.z)}getViewSize(t,i){return this.getViewBounds(t,h0,d0),i.subVectors(d0,h0)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(qc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const bs=-90,Ts=1;class WE extends En{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new fi(bs,Ts,t,i);l.layers=this.layers,this.add(l);const c=new fi(bs,Ts,t,i);c.layers=this.layers,this.add(c);const f=new fi(bs,Ts,t,i);f.layers=this.layers,this.add(f);const h=new fi(bs,Ts,t,i);h.layers=this.layers,this.add(h);const p=new fi(bs,Ts,t,i);p.layers=this.layers,this.add(p);const m=new fi(bs,Ts,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===la)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Qc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,y=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(y,v,S),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Pv extends Bn{constructor(t=[],i=Ns,r,l,c,f,h,p,m,g){super(t,i,r,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qE extends Dr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ui}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new il(5,5,5),c=new ha({name:"CubemapFromEquirect",uniforms:Is(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Wn,blending:ja});c.uniforms.tEquirect.value=i;const f=new hi(l,c),h=i.minFilter;return i.minFilter===Rr&&(i.minFilter=Ui),new WE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Lc extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class zh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new tt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new tt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new tt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new tt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const x=i.getJointPose(T,r),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=g.position.distanceTo(y.position),S=.02,E=.005;m.inputState.pinching&&v>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Lc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class jE extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ZE extends Bn{constructor(t=null,i=1,r=1,l,c,f,h,p,m=ei,g=ei,y,v){super(null,f,h,p,m,g,l,c,y,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $c extends Si{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const As=new qe,p0=new qe,Nc=[],m0=new Or,KE=new qe,Go=new hi,Vo=new el;class g0 extends hi{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new $c(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,KE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,As),m0.copy(t.boundingBox).applyMatrix4(As),this.boundingBox.union(m0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new el),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,As),Vo.copy(t.boundingSphere).applyMatrix4(As),this.boundingSphere.union(Vo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,f=t*c+1;for(let h=0;h<r.length;h++)r[h]=l[f+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(r),t.ray.intersectsSphere(Vo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,As),p0.multiplyMatrices(r,As),Go.matrixWorld=p0,Go.raycast(t,Nc);for(let f=0,h=Nc.length;f<h;f++){const p=Nc[f];p.instanceId=c,p.object=this,i.push(p)}Nc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new $c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new ZE(new Float32Array(l*this.count),l,this.count,Yd,Li));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<r.length;m++)f+=r[m];const h=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=h,c.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new tt,QE=new tt,JE=new me;class qa{constructor(t=new tt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Bh.subVectors(r,i).cross(QE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||JE.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new el,Pc=new tt;class Jd{constructor(t=new qa,i=new qa,r=new qa,l=new qa,c=new qa,f=new qa){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=la){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],y=l[6],v=l[7],S=l[8],E=l[9],T=l[10],x=l[11],_=l[12],O=l[13],U=l[14],D=l[15];if(r[0].setComponents(p-c,v-m,x-S,D-_).normalize(),r[1].setComponents(p+c,v+m,x+S,D+_).normalize(),r[2].setComponents(p+f,v+g,x+E,D+O).normalize(),r[3].setComponents(p-f,v-g,x-E,D-O).normalize(),r[4].setComponents(p-h,v-y,x-T,D-U).normalize(),i===la)r[5].setComponents(p+h,v+y,x+T,D+U).normalize();else if(i===Qc)r[5].setComponents(h,y,T,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),xr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(t){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(t.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ov extends Bn{constructor(t,i,r=wr,l,c,f,h=ei,p=ei,m,g=jo){if(g!==jo&&g!==Zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class au extends Qa{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,y=t/h,v=i/p,S=[],E=[],T=[],x=[];for(let _=0;_<g;_++){const O=_*v-f;for(let U=0;U<m;U++){const D=U*y-c;E.push(D,-O,0),T.push(0,0,1),x.push(U/h),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const U=O+m*_,D=O+m*(_+1),B=O+1+m*(_+1),H=O+1+m*_;S.push(U,D,H),S.push(D,B,H)}this.setIndex(S),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(T,3)),this.setAttribute("uv",new Ni(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.width,t.height,t.widthSegments,t.heightSegments)}}class Xo extends Qa{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let m=0;const g=[],y=new tt,v=new tt,S=[],E=[],T=[],x=[];for(let _=0;_<=r;_++){const O=[],U=_/r;let D=0;_===0&&f===0?D=.5/i:_===r&&p===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const H=B/i;y.x=-t*Math.cos(l+H*c)*Math.sin(f+U*h),y.y=t*Math.cos(f+U*h),y.z=t*Math.sin(l+H*c)*Math.sin(f+U*h),E.push(y.x,y.y,y.z),v.copy(y).normalize(),T.push(v.x,v.y,v.z),x.push(H+D,1-U),O.push(m++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const U=g[_][O+1],D=g[_][O],B=g[_+1][O],H=g[_+1][O+1];(_!==0||f>0)&&S.push(U,D,H),(_!==r-1||p<Math.PI)&&S.push(D,B,H)}this.setIndex(S),this.setAttribute("position",new Ni(E,3)),this.setAttribute("normal",new Ni(T,3)),this.setAttribute("uv",new Ni(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _0 extends nl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mv,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $E extends nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Iv extends En{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new be(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Fh=new qe,v0=new tt,y0=new tt;class eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;v0.setFromMatrixPosition(t.matrixWorld),i.position.copy(v0),y0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(y0),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zv extends Nv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends eb{constructor(){super(new zv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x0 extends Iv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ib extends Iv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ab extends fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class S0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ee(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(Ee(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rb extends Pr{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function M0(s,t,i,r){const l=sb(r);switch(i){case vv:return s*t;case Yd:return s*t/l.components*l.byteLength;case jd:return s*t/l.components*l.byteLength;case xv:return s*t*2/l.components*l.byteLength;case Zd:return s*t*2/l.components*l.byteLength;case yv:return s*t*3/l.components*l.byteLength;case xi:return s*t*4/l.components*l.byteLength;case Kd:return s*t*4/l.components*l.byteLength;case Gc:case Vc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case kc:case Xc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:case hd:return Math.max(s,16)*Math.max(t,8)/4;case cd:case fd:return Math.max(s,8)*Math.max(t,8)/2;case dd:case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Md:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Wc:case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sv:case Ld:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nd:case Pd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(s){switch(s){case Pi:case mv:return{byteLength:1,components:1};case qo:case gv:case $o:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case wr:case Xd:case Li:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ob(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,y=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,p,m){const g=p.array,y=p.updateRanges;if(s.bindBuffer(m,h),y.length===0)s.bufferSubData(m,0,g);else{y.sort((S,E)=>S.start-E.start);let v=0;for(let S=1;S<y.length;S++){const E=y[v],T=y[S];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++v,y[v]=T)}y.length=v+1;for(let S=0,E=y.length;S<E;S++){const T=y[S];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var lb=`#ifdef USE_ALPHAHASH
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
#endif`,yb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xb=`float G_BlinnPhong_Implicit( ) {
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
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fb=`vec4 LinearTransferOETF( in vec4 value ) {
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
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xT=`#ifdef USE_INSTANCING_MORPH
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
}`,zT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
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
}`,y1=`uniform float scale;
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
}`,x1=`uniform vec3 diffuse;
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
}`,z1=`#include <common>
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
}`,B1=`uniform vec3 color;
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
}`,_e={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:hb,alphatest_pars_fragment:db,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:vb,beginnormal_vertex:yb,bsdfs:xb,iridescence_fragment:Sb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ob,emissivemap_fragment:Ib,emissivemap_pars_fragment:zb,colorspace_fragment:Bb,colorspace_pars_fragment:Fb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:tT,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:aT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:yT,morphinstance_vertex:xT,morphcolor_vertex:ST,morphnormal_vertex:MT,morphtarget_pars_vertex:ET,morphtarget_vertex:bT,normal_fragment_begin:TT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:CT,normal_vertex:wT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:PT,opaque_fragment:OT,packing:IT,premultiplied_alpha_fragment:zT,project_vertex:BT,dithering_fragment:FT,dithering_pars_fragment:HT,roughnessmap_fragment:GT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:XT,shadowmap_vertex:WT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:jT,skinning_vertex:ZT,skinnormal_vertex:KT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:$T,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:y1,linedashed_frag:x1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:P1,points_vert:O1,points_frag:I1,shadow_vert:z1,shadow_frag:B1,sprite_vert:F1,sprite_frag:H1},jt={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},wi={basic:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:_e.meshbasic_vert,fragmentShader:_e.meshbasic_frag},lambert:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshlambert_vert,fragmentShader:_e.meshlambert_frag},phong:{uniforms:zn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:_e.meshphong_vert,fragmentShader:_e.meshphong_frag},standard:{uniforms:zn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag},toon:{uniforms:zn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new be(0)}}]),vertexShader:_e.meshtoon_vert,fragmentShader:_e.meshtoon_frag},matcap:{uniforms:zn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:_e.meshmatcap_vert,fragmentShader:_e.meshmatcap_frag},points:{uniforms:zn([jt.points,jt.fog]),vertexShader:_e.points_vert,fragmentShader:_e.points_frag},dashed:{uniforms:zn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_e.linedashed_vert,fragmentShader:_e.linedashed_frag},depth:{uniforms:zn([jt.common,jt.displacementmap]),vertexShader:_e.depth_vert,fragmentShader:_e.depth_frag},normal:{uniforms:zn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:_e.meshnormal_vert,fragmentShader:_e.meshnormal_frag},sprite:{uniforms:zn([jt.sprite,jt.fog]),vertexShader:_e.sprite_vert,fragmentShader:_e.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_e.background_vert,fragmentShader:_e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:_e.backgroundCube_vert,fragmentShader:_e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_e.cube_vert,fragmentShader:_e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_e.equirect_vert,fragmentShader:_e.equirect_frag},distanceRGBA:{uniforms:zn([jt.common,jt.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_e.distanceRGBA_vert,fragmentShader:_e.distanceRGBA_frag},shadow:{uniforms:zn([jt.lights,jt.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:_e.shadow_vert,fragmentShader:_e.shadow_frag}};wi.physical={uniforms:zn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:_e.meshphysical_vert,fragmentShader:_e.meshphysical_frag};const Oc={r:0,b:0,g:0},Sr=new Oi,G1=new qe;function V1(s,t,i,r,l,c,f){const h=new be(0);let p=c===!0?0:1,m,g,y=null,v=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?i:t).get(D)),D}function T(U){let D=!1;const B=E(U);B===null?_(h,p):B&&B.isColor&&(_(B,1),D=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(U,D){const B=E(D);B&&(B.isCubeTexture||B.mapping===iu)?(g===void 0&&(g=new hi(new il(1,1,1),new ha({name:"BackgroundCubeMaterial",uniforms:Is(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Sr.copy(D.backgroundRotation),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(Sr)),g.material.toneMapped=Ne.getTransfer(B.colorSpace)!==He,(y!==B||v!==B.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,y=B,v=B.version,S=s.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new hi(new au(2,2),new ha({name:"BackgroundMaterial",uniforms:Is(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(B.colorSpace)!==He,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(y!==B||v!==B.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,y=B,v=B.version,S=s.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function _(U,D){U.getRGB(Oc,Lv(s)),r.buffers.color.setClear(Oc.r,Oc.g,Oc.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),p=D,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,_(h,p)},render:T,addToRenderList:x,dispose:O}}function k1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(R,V,ft,ct,Mt){let mt=!1;const z=y(ct,ft,V);c!==z&&(c=z,m(c.object)),mt=S(R,ct,ft,Mt),mt&&E(R,ct,ft,Mt),Mt!==null&&t.update(Mt,s.ELEMENT_ARRAY_BUFFER),(mt||f)&&(f=!1,D(R,V,ft,ct),Mt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Mt).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,V,ft){const ct=ft.wireframe===!0;let Mt=r[R.id];Mt===void 0&&(Mt={},r[R.id]=Mt);let mt=Mt[V.id];mt===void 0&&(mt={},Mt[V.id]=mt);let z=mt[ct];return z===void 0&&(z=v(p()),mt[ct]=z),z}function v(R){const V=[],ft=[],ct=[];for(let Mt=0;Mt<i;Mt++)V[Mt]=0,ft[Mt]=0,ct[Mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ft,attributeDivisors:ct,object:R,attributes:{},index:null}}function S(R,V,ft,ct){const Mt=c.attributes,mt=V.attributes;let z=0;const J=ft.getAttributes();for(const Y in J)if(J[Y].location>=0){const P=Mt[Y];let nt=mt[Y];if(nt===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),P===void 0||P.attribute!==nt||nt&&P.data!==nt.data)return!0;z++}return c.attributesNum!==z||c.index!==ct}function E(R,V,ft,ct){const Mt={},mt=V.attributes;let z=0;const J=ft.getAttributes();for(const Y in J)if(J[Y].location>=0){let P=mt[Y];P===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(P=R.instanceColor));const nt={};nt.attribute=P,P&&P.data&&(nt.data=P.data),Mt[Y]=nt,z++}c.attributes=Mt,c.attributesNum=z,c.index=ct}function T(){const R=c.newAttributes;for(let V=0,ft=R.length;V<ft;V++)R[V]=0}function x(R){_(R,0)}function _(R,V){const ft=c.newAttributes,ct=c.enabledAttributes,Mt=c.attributeDivisors;ft[R]=1,ct[R]===0&&(s.enableVertexAttribArray(R),ct[R]=1),Mt[R]!==V&&(s.vertexAttribDivisor(R,V),Mt[R]=V)}function O(){const R=c.newAttributes,V=c.enabledAttributes;for(let ft=0,ct=V.length;ft<ct;ft++)V[ft]!==R[ft]&&(s.disableVertexAttribArray(ft),V[ft]=0)}function U(R,V,ft,ct,Mt,mt,z){z===!0?s.vertexAttribIPointer(R,V,ft,Mt,mt):s.vertexAttribPointer(R,V,ft,ct,Mt,mt)}function D(R,V,ft,ct){T();const Mt=ct.attributes,mt=ft.getAttributes(),z=V.defaultAttributeValues;for(const J in mt){const Y=mt[J];if(Y.location>=0){let Ct=Mt[J];if(Ct===void 0&&(J==="instanceMatrix"&&R.instanceMatrix&&(Ct=R.instanceMatrix),J==="instanceColor"&&R.instanceColor&&(Ct=R.instanceColor)),Ct!==void 0){const P=Ct.normalized,nt=Ct.itemSize,Et=t.get(Ct);if(Et===void 0)continue;const At=Et.buffer,$=Et.type,vt=Et.bytesPerElement,bt=$===s.INT||$===s.UNSIGNED_INT||Ct.gpuType===Xd;if(Ct.isInterleavedBufferAttribute){const K=Ct.data,W=K.stride,ut=Ct.offset;if(K.isInstancedInterleavedBuffer){for(let wt=0;wt<Y.locationSize;wt++)_(Y.location+wt,K.meshPerAttribute);R.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let wt=0;wt<Y.locationSize;wt++)x(Y.location+wt);s.bindBuffer(s.ARRAY_BUFFER,At);for(let wt=0;wt<Y.locationSize;wt++)U(Y.location+wt,nt/Y.locationSize,$,P,W*vt,(ut+nt/Y.locationSize*wt)*vt,bt)}else{if(Ct.isInstancedBufferAttribute){for(let K=0;K<Y.locationSize;K++)_(Y.location+K,Ct.meshPerAttribute);R.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=Ct.meshPerAttribute*Ct.count)}else for(let K=0;K<Y.locationSize;K++)x(Y.location+K);s.bindBuffer(s.ARRAY_BUFFER,At);for(let K=0;K<Y.locationSize;K++)U(Y.location+K,nt/Y.locationSize,$,P,nt*vt,nt/Y.locationSize*K*vt,bt)}}else if(z!==void 0){const P=z[J];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(Y.location,P);break;case 3:s.vertexAttrib3fv(Y.location,P);break;case 4:s.vertexAttrib4fv(Y.location,P);break;default:s.vertexAttrib1fv(Y.location,P)}}}}O()}function B(){q();for(const R in r){const V=r[R];for(const ft in V){const ct=V[ft];for(const Mt in ct)g(ct[Mt].object),delete ct[Mt];delete V[ft]}delete r[R]}}function H(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ft in V){const ct=V[ft];for(const Mt in ct)g(ct[Mt].object),delete ct[Mt];delete V[ft]}delete r[R.id]}function F(R){for(const V in r){const ft=r[V];if(ft[R.id]===void 0)continue;const ct=ft[R.id];for(const Mt in ct)g(ct[Mt].object),delete ct[Mt];delete ft[R.id]}}function q(){L(),f=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:L,dispose:B,releaseStatesOfGeometry:H,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:x,disableUnusedAttributes:O}}function X1(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),i.update(g,r,y))}function h(m,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let S=0;for(let E=0;E<y;E++)S+=g[E];i.update(S,r,1)}function p(m,g,y,v){if(y===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)f(m[E],g[E],v[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,y);let E=0;for(let T=0;T<y;T++)E+=g[T]*v[T];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function W1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===$o&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Pi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Li&&!q)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:S,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:D,vertexTextures:B,maxSamples:H}}function q1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new qa,h=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const S=y.length!==0||v||r!==0||l;return l=v,r=y.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,v){i=g(y,v,0)},this.setState=function(y,v,S){const E=y.clippingPlanes,T=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!l||E===null||E.length===0||c&&!x)c?g(null):m();else{const O=c?0:r,U=O*4;let D=_.clippingState||null;p.value=D,D=g(E,v,U,S);for(let B=0;B!==U;++B)D[B]=i[B];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(y,v,S,E){const T=y!==null?y.length:0;let x=null;if(T!==0){if(x=p.value,E!==!0||x===null){const _=S+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(x===null||x.length<_)&&(x=new Float32Array(_));for(let U=0,D=S;U!==T;++U,D+=4)f.copy(y[U]).applyMatrix4(O,h),f.normal.toArray(x,D),x[D+3]=f.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}function Y1(s){let t=new WeakMap;function i(f,h){return h===rd?f.mapping=Ns:h===sd&&(f.mapping=Ps),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===rd||h===sd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new qE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const ws=4,E0=[.125,.215,.35,.446,.526,.582],Tr=20,Hh=new zv,b0=new be;let Gh=null,Vh=0,kh=0,Xh=!1;const Er=(1+Math.sqrt(5))/2,Rs=1/Er,T0=[new tt(-Er,Rs,0),new tt(Er,Rs,0),new tt(-Rs,0,Er),new tt(Rs,0,Er),new tt(0,Er,-Rs),new tt(0,Er,Rs),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],j1=new tt;class A0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=j1}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ns||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ui,minFilter:Ui,generateMipmaps:!1,type:$o,format:xi,colorSpace:Os,depthBuffer:!1},l=R0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=K1(c,t,i)}return l}_compileMaterial(t){const i=new hi(this._lodPlanes[0],t);this._renderer.compile(i,Hh)}_sceneToCubeUV(t,i,r,l,c){const p=new fi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,S=y.toneMapping;y.getClearColor(b0),y.toneMapping=Za,y.autoClear=!1;const E=new wv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),T=new hi(new il,E);let x=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,x=!0):(E.color.copy(b0),x=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const D=this._cubeSize;Ic(l,U*D,O>2?D:0,D,D),y.setRenderTarget(l),x&&y.render(T,p),y.render(t,p)}T.geometry.dispose(),T.material.dispose(),y.toneMapping=S,y.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ns||t.mapping===Ps;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new hi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Ic(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=T0[(l-c-1)%T0.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new hi(this._lodPlanes[l],m),v=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Tr-1),T=c/E,x=isFinite(c)?1+Math.floor(g*T):Tr;x>Tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Tr}`);const _=[];let O=0;for(let F=0;F<Tr;++F){const q=F/T,L=Math.exp(-q*q/2);_.push(L),F===0?O+=L:F<x&&(O+=2*L)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=_,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=E,v.mipInt.value=U-r;const D=this._sizeLods[l],B=3*D*(l>U-ws?l-U+ws:0),H=4*(this._cubeSize-D);Ic(i,B,H,3*D,2*D),p.setRenderTarget(i),p.render(y,Hh)}}function Z1(s){const t=[],i=[],r=[];let l=s;const c=s-ws+1+E0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-ws?p=E0[f-s+ws-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,y=1+m,v=[g,g,y,g,y,y,g,g,y,y,g,y],S=6,E=6,T=3,x=2,_=1,O=new Float32Array(T*E*S),U=new Float32Array(x*E*S),D=new Float32Array(_*E*S);for(let H=0;H<S;H++){const F=H%3*2/3-1,q=H>2?0:-1,L=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];O.set(L,T*E*H),U.set(v,x*E*H);const R=[H,H,H,H,H,H];D.set(R,_*E*H)}const B=new Qa;B.setAttribute("position",new Si(O,T)),B.setAttribute("uv",new Si(U,x)),B.setAttribute("faceIndex",new Si(D,_)),t.push(B),l>ws&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function R0(s,t,i){const r=new Dr(s,t,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function K1(s,t,i){const r=new Float32Array(Tr),l=new tt(0,1,0);return new ha({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

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
	`}function Q1(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===rd||p===sd,g=p===Ns||p===Ps;if(m||g){let y=t.get(h);const v=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new A0(s)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{const S=h.image;return m&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new A0(s)),y=m?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",c),y.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function J1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Yc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function $1(s,t,i,r){const l={},c=new WeakMap;function f(y){const v=y.target;v.index!==null&&t.remove(v.index);for(const E in v.attributes)t.remove(v.attributes[E]);v.removeEventListener("dispose",f),delete l[v.id];const S=c.get(v);S&&(t.remove(S),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(y,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(y){const v=y.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function m(y){const v=[],S=y.index,E=y.attributes.position;let T=0;if(S!==null){const O=S.array;T=S.version;for(let U=0,D=O.length;U<D;U+=3){const B=O[U+0],H=O[U+1],F=O[U+2];v.push(B,H,H,F,F,B)}}else if(E!==void 0){const O=E.array;T=E.version;for(let U=0,D=O.length/3-1;U<D;U+=3){const B=U+0,H=U+1,F=U+2;v.push(B,H,H,F,F,B)}}else return;const x=new(bv(v)?Uv:Dv)(v,1);x.version=T;const _=c.get(y);_&&t.remove(_),c.set(y,x)}function g(y){const v=c.get(y);if(v){const S=y.index;S!==null&&v.version<S.version&&m(y)}else m(y);return c.get(y)}return{get:h,update:p,getWireframeAttribute:g}}function tA(s,t,i){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,S){s.drawElements(r,S,c,v*f),i.update(S,r,1)}function m(v,S,E){E!==0&&(s.drawElementsInstanced(r,S,c,v*f,E),i.update(S,r,E))}function g(v,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,v,0,E);let x=0;for(let _=0;_<E;_++)x+=S[_];i.update(x,r,1)}function y(v,S,E,T){if(E===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<v.length;_++)m(v[_]/f,S[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,c,v,0,T,0,E);let _=0;for(let O=0;O<E;O++)_+=S[O]*T[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function eA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function nA(s,t,i){const r=new WeakMap,l=new en;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==y){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var S=R;v!==void 0&&v.texture.dispose();const E=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),T===!0&&(D=2),x===!0&&(D=3);let B=h.attributes.position.count*D,H=1;B>t.maxTextureSize&&(H=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*H*4*y),q=new Tv(F,B,H,y);q.type=Li,q.needsUpdate=!0;const L=D*4;for(let V=0;V<y;V++){const ft=_[V],ct=O[V],Mt=U[V],mt=B*H*4*V;for(let z=0;z<ft.count;z++){const J=z*L;E===!0&&(l.fromBufferAttribute(ft,z),F[mt+J+0]=l.x,F[mt+J+1]=l.y,F[mt+J+2]=l.z,F[mt+J+3]=0),T===!0&&(l.fromBufferAttribute(ct,z),F[mt+J+4]=l.x,F[mt+J+5]=l.y,F[mt+J+6]=l.z,F[mt+J+7]=0),x===!0&&(l.fromBufferAttribute(Mt,z),F[mt+J+8]=l.x,F[mt+J+9]=l.y,F[mt+J+10]=l.z,F[mt+J+11]=Mt.itemSize===4?l.w:1)}}v={count:y,texture:q,size:new ge(B,H)},r.set(h,v),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let x=0;x<m.length;x++)E+=m[x];const T=h.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function iA(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,y=t.get(p,g);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return y}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Fv=new Bn,D0=new Ov(1,1),Hv=new Tv,Gv=new wE,Vv=new Pv,U0=[],L0=[],N0=new Float32Array(16),P0=new Float32Array(9),O0=new Float32Array(4);function Bs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=U0[l];if(c===void 0&&(c=new Float32Array(l),U0[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function gn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function _n(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ru(s,t){let i=L0[t];i===void 0&&(i=new Int32Array(t),L0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function aA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function rA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2fv(this.addr,t),_n(i,t)}}function sA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;s.uniform3fv(this.addr,t),_n(i,t)}}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4fv(this.addr,t),_n(i,t)}}function lA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),_n(i,r)}}function cA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;P0.set(r),s.uniformMatrix3fv(this.addr,!1,P0),_n(i,r)}}function uA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,r))return;N0.set(r),s.uniformMatrix4fv(this.addr,!1,N0),_n(i,r)}}function fA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2iv(this.addr,t),_n(i,t)}}function dA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3iv(this.addr,t),_n(i,t)}}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4iv(this.addr,t),_n(i,t)}}function mA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;s.uniform2uiv(this.addr,t),_n(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;s.uniform3uiv(this.addr,t),_n(i,t)}}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;s.uniform4uiv(this.addr,t),_n(i,t)}}function yA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(D0.compareFunction=Ev,c=D0):c=Fv,i.setTexture2D(t||c,l)}function xA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Gv,l)}function SA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Vv,l)}function MA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Hv,l)}function EA(s){switch(s){case 5126:return aA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}function bA(s,t){s.uniform1fv(this.addr,t)}function TA(s,t){const i=Bs(t,this.size,2);s.uniform2fv(this.addr,i)}function AA(s,t){const i=Bs(t,this.size,3);s.uniform3fv(this.addr,i)}function RA(s,t){const i=Bs(t,this.size,4);s.uniform4fv(this.addr,i)}function CA(s,t){const i=Bs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function wA(s,t){const i=Bs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function DA(s,t){const i=Bs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function UA(s,t){s.uniform1iv(this.addr,t)}function LA(s,t){s.uniform2iv(this.addr,t)}function NA(s,t){s.uniform3iv(this.addr,t)}function PA(s,t){s.uniform4iv(this.addr,t)}function OA(s,t){s.uniform1uiv(this.addr,t)}function IA(s,t){s.uniform2uiv(this.addr,t)}function zA(s,t){s.uniform3uiv(this.addr,t)}function BA(s,t){s.uniform4uiv(this.addr,t)}function FA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Fv,c[f])}function HA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Gv,c[f])}function GA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Vv,c[f])}function VA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),_n(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Hv,c[f])}function kA(s){switch(s){case 5126:return bA;case 35664:return TA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return PA;case 5125:return OA;case 36294:return IA;case 36295:return zA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=EA(i.type)}}class WA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kA(i.type)}}class qA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function I0(s,t){s.seq.push(t),s.map[t.id]=t}function YA(s,t,i){const r=s.name,l=r.length;for(Wh.lastIndex=0;;){const c=Wh.exec(r),f=Wh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){I0(i,m===void 0?new XA(h,s,t):new WA(h,s,t));break}else{let y=i.map[h];y===void 0&&(y=new qA(h),I0(i,y)),i=y}}}class jc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);YA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function z0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const jA=37297;let ZA=0;function KA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const B0=new me;function QA(s){Ne._getMatrix(B0,Ne.workingColorSpace,s);const t=`mat3( ${B0.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(s)){case Kc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function F0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+KA(s.getShaderSource(t),f)}else return l}function JA(s,t){const i=QA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $A(s,t){let i;switch(t){case tE:i="Linear";break;case eE:i="Reinhard";break;case nE:i="Cineon";break;case iE:i="ACESFilmic";break;case rE:i="AgX";break;case sE:i="Neutral";break;case aE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const zc=new tt;function tR(){Ne.getLuminanceCoefficients(zc);const s=zc.x.toFixed(4),t=zc.y.toFixed(4),i=zc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ko).join(`
`)}function nR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function iR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function ko(s){return s!==""}function H0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(aR,sR)}const rR=new Map;function sR(s,t){let i=_e[t];if(i===void 0){const r=rR.get(t);if(r!==void 0)i=_e[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Id(i)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(oR,lR)}function lR(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function k0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function cR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===NM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function uR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ns:case Ps:t="ENVMAP_TYPE_CUBE";break;case iu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function hR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dv:t="ENVMAP_BLENDING_MULTIPLY";break;case JM:t="ENVMAP_BLENDING_MIX";break;case $M:t="ENVMAP_BLENDING_ADD";break}return t}function dR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function pR(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=cR(i),m=uR(i),g=fR(i),y=hR(i),v=dR(i),S=eR(i),E=nR(c),T=l.createProgram();let x,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ko).join(`
`),_.length>0&&(_+=`
`)):(x=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ko).join(`
`),_=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Za?"#define TONE_MAPPING":"",i.toneMapping!==Za?_e.tonemapping_pars_fragment:"",i.toneMapping!==Za?$A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_e.colorspace_pars_fragment,JA("linearToOutputTexel",i.outputColorSpace),tR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ko).join(`
`)),f=Id(f),f=H0(f,i),f=G0(f,i),h=Id(h),h=H0(h,i),h=G0(h,i),f=V0(f),h=V0(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=O+x+f,D=O+_+h,B=z0(l,l.VERTEX_SHADER,U),H=z0(l,l.FRAGMENT_SHADER,D);l.attachShader(T,B),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(V){if(s.debug.checkShaderErrors){const ft=l.getProgramInfoLog(T).trim(),ct=l.getShaderInfoLog(B).trim(),Mt=l.getShaderInfoLog(H).trim();let mt=!0,z=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(mt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,H);else{const J=F0(l,B,"vertex"),Y=F0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+J+`
`+Y)}else ft!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ft):(ct===""||Mt==="")&&(z=!1);z&&(V.diagnostics={runnable:mt,programLog:ft,vertexShader:{log:ct,prefix:x},fragmentShader:{log:Mt,prefix:_}})}l.deleteShader(B),l.deleteShader(H),q=new jc(l,T),L=iR(l,T)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let L;this.getAttributes=function(){return L===void 0&&F(this),L};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,jA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=H,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new _R(t),i.set(t,r)),r}}class _R{constructor(t){this.id=mR++,this.code=t,this.usedTimes=0}}function vR(s,t,i,r,l,c,f){const h=new Rv,p=new gR,m=new Set,g=[],y=l.logarithmicDepthBuffer,v=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function x(L,R,V,ft,ct){const Mt=ft.fog,mt=ct.geometry,z=L.isMeshStandardMaterial?ft.environment:null,J=(L.isMeshStandardMaterial?i:t).get(L.envMap||z),Y=J&&J.mapping===iu?J.image.height:null,Ct=E[L.type];L.precision!==null&&(S=l.getMaxPrecision(L.precision),S!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",S,"instead."));const P=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,nt=P!==void 0?P.length:0;let Et=0;mt.morphAttributes.position!==void 0&&(Et=1),mt.morphAttributes.normal!==void 0&&(Et=2),mt.morphAttributes.color!==void 0&&(Et=3);let At,$,vt,bt;if(Ct){const Te=wi[Ct];At=Te.vertexShader,$=Te.fragmentShader}else At=L.vertexShader,$=L.fragmentShader,p.update(L),vt=p.getVertexShaderID(L),bt=p.getFragmentShaderID(L);const K=s.getRenderTarget(),W=s.state.buffers.depth.getReversed(),ut=ct.isInstancedMesh===!0,wt=ct.isBatchedMesh===!0,Wt=!!L.map,Qt=!!L.matcap,It=!!J,N=!!L.aoMap,ie=!!L.lightMap,qt=!!L.bumpMap,Tt=!!L.normalMap,Ot=!!L.displacementMap,ae=!!L.emissiveMap,zt=!!L.metalnessMap,C=!!L.roughnessMap,b=L.anisotropy>0,X=L.clearcoat>0,gt=L.dispersion>0,xt=L.iridescence>0,ht=L.sheen>0,Ft=L.transmission>0,Dt=b&&!!L.anisotropyMap,Nt=X&&!!L.clearcoatMap,Kt=X&&!!L.clearcoatNormalMap,Rt=X&&!!L.clearcoatRoughnessMap,Ht=xt&&!!L.iridescenceMap,Vt=xt&&!!L.iridescenceThicknessMap,Pt=ht&&!!L.sheenColorMap,Ut=ht&&!!L.sheenRoughnessMap,te=!!L.specularMap,$t=!!L.specularColorMap,de=!!L.specularIntensityMap,G=Ft&&!!L.transmissionMap,Bt=Ft&&!!L.thicknessMap,st=!!L.gradientMap,dt=!!L.alphaMap,kt=L.alphaTest>0,Gt=!!L.alphaHash,le=!!L.extensions;let we=Za;L.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(we=s.toneMapping);const Ye={shaderID:Ct,shaderType:L.type,shaderName:L.name,vertexShader:At,fragmentShader:$,defines:L.defines,customVertexShaderID:vt,customFragmentShaderID:bt,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:S,batching:wt,batchingColor:wt&&ct._colorsTexture!==null,instancing:ut,instancingColor:ut&&ct.instanceColor!==null,instancingMorph:ut&&ct.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:K===null?s.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Os,alphaToCoverage:!!L.alphaToCoverage,map:Wt,matcap:Qt,envMap:It,envMapMode:It&&J.mapping,envMapCubeUVHeight:Y,aoMap:N,lightMap:ie,bumpMap:qt,normalMap:Tt,displacementMap:v&&Ot,emissiveMap:ae,normalMapObjectSpace:Tt&&L.normalMapType===uE,normalMapTangentSpace:Tt&&L.normalMapType===Mv,metalnessMap:zt,roughnessMap:C,anisotropy:b,anisotropyMap:Dt,clearcoat:X,clearcoatMap:Nt,clearcoatNormalMap:Kt,clearcoatRoughnessMap:Rt,dispersion:gt,iridescence:xt,iridescenceMap:Ht,iridescenceThicknessMap:Vt,sheen:ht,sheenColorMap:Pt,sheenRoughnessMap:Ut,specularMap:te,specularColorMap:$t,specularIntensityMap:de,transmission:Ft,transmissionMap:G,thicknessMap:Bt,gradientMap:st,opaque:L.transparent===!1&&L.blending===Cr&&L.alphaToCoverage===!1,alphaMap:dt,alphaTest:kt,alphaHash:Gt,combine:L.combine,mapUv:Wt&&T(L.map.channel),aoMapUv:N&&T(L.aoMap.channel),lightMapUv:ie&&T(L.lightMap.channel),bumpMapUv:qt&&T(L.bumpMap.channel),normalMapUv:Tt&&T(L.normalMap.channel),displacementMapUv:Ot&&T(L.displacementMap.channel),emissiveMapUv:ae&&T(L.emissiveMap.channel),metalnessMapUv:zt&&T(L.metalnessMap.channel),roughnessMapUv:C&&T(L.roughnessMap.channel),anisotropyMapUv:Dt&&T(L.anisotropyMap.channel),clearcoatMapUv:Nt&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Kt&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:Ht&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&T(L.sheenRoughnessMap.channel),specularMapUv:te&&T(L.specularMap.channel),specularColorMapUv:$t&&T(L.specularColorMap.channel),specularIntensityMapUv:de&&T(L.specularIntensityMap.channel),transmissionMapUv:G&&T(L.transmissionMap.channel),thicknessMapUv:Bt&&T(L.thicknessMap.channel),alphaMapUv:dt&&T(L.alphaMap.channel),vertexTangents:!!mt.attributes.tangent&&(Tt||b),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!mt.attributes.uv&&(Wt||dt),fog:!!Mt,useFog:L.fog===!0,fogExp2:!!Mt&&Mt.isFogExp2,flatShading:L.flatShading===!0,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:W,skinning:ct.isSkinnedMesh===!0,morphTargets:mt.morphAttributes.position!==void 0,morphNormals:mt.morphAttributes.normal!==void 0,morphColors:mt.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Et,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:Wt&&L.map.isVideoTexture===!0&&Ne.getTransfer(L.map.colorSpace)===He,decodeVideoTextureEmissive:ae&&L.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(L.emissiveMap.colorSpace)===He,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===Di,flipSided:L.side===Wn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:le&&L.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&L.extensions.multiDraw===!0||wt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ye.vertexUv1s=m.has(1),Ye.vertexUv2s=m.has(2),Ye.vertexUv3s=m.has(3),m.clear(),Ye}function _(L){const R=[];if(L.shaderID?R.push(L.shaderID):(R.push(L.customVertexShaderID),R.push(L.customFragmentShaderID)),L.defines!==void 0)for(const V in L.defines)R.push(V),R.push(L.defines[V]);return L.isRawShaderMaterial===!1&&(O(R,L),U(R,L),R.push(s.outputColorSpace)),R.push(L.customProgramCacheKey),R.join()}function O(L,R){L.push(R.precision),L.push(R.outputColorSpace),L.push(R.envMapMode),L.push(R.envMapCubeUVHeight),L.push(R.mapUv),L.push(R.alphaMapUv),L.push(R.lightMapUv),L.push(R.aoMapUv),L.push(R.bumpMapUv),L.push(R.normalMapUv),L.push(R.displacementMapUv),L.push(R.emissiveMapUv),L.push(R.metalnessMapUv),L.push(R.roughnessMapUv),L.push(R.anisotropyMapUv),L.push(R.clearcoatMapUv),L.push(R.clearcoatNormalMapUv),L.push(R.clearcoatRoughnessMapUv),L.push(R.iridescenceMapUv),L.push(R.iridescenceThicknessMapUv),L.push(R.sheenColorMapUv),L.push(R.sheenRoughnessMapUv),L.push(R.specularMapUv),L.push(R.specularColorMapUv),L.push(R.specularIntensityMapUv),L.push(R.transmissionMapUv),L.push(R.thicknessMapUv),L.push(R.combine),L.push(R.fogExp2),L.push(R.sizeAttenuation),L.push(R.morphTargetsCount),L.push(R.morphAttributeCount),L.push(R.numDirLights),L.push(R.numPointLights),L.push(R.numSpotLights),L.push(R.numSpotLightMaps),L.push(R.numHemiLights),L.push(R.numRectAreaLights),L.push(R.numDirLightShadows),L.push(R.numPointLightShadows),L.push(R.numSpotLightShadows),L.push(R.numSpotLightShadowsWithMaps),L.push(R.numLightProbes),L.push(R.shadowMapType),L.push(R.toneMapping),L.push(R.numClippingPlanes),L.push(R.numClipIntersection),L.push(R.depthPacking)}function U(L,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),L.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),L.push(h.mask)}function D(L){const R=E[L.type];let V;if(R){const ft=wi[R];V=VE.clone(ft.uniforms)}else V=L.uniforms;return V}function B(L,R){let V;for(let ft=0,ct=g.length;ft<ct;ft++){const Mt=g[ft];if(Mt.cacheKey===R){V=Mt,++V.usedTimes;break}}return V===void 0&&(V=new pR(s,R,L,c),g.push(V)),V}function H(L){if(--L.usedTimes===0){const R=g.indexOf(L);g[R]=g[g.length-1],g.pop(),L.destroy()}}function F(L){p.remove(L)}function q(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:H,releaseShaderCache:F,programs:g,dispose:q}}function yR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function xR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function X0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function W0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(y,v,S,E,T,x){let _=s[t];return _===void 0?(_={id:y.id,object:y,geometry:v,material:S,groupOrder:E,renderOrder:y.renderOrder,z:T,group:x},s[t]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=S,_.groupOrder=E,_.renderOrder=y.renderOrder,_.z=T,_.group=x),t++,_}function h(y,v,S,E,T,x){const _=f(y,v,S,E,T,x);S.transmission>0?r.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(y,v,S,E,T,x){const _=f(y,v,S,E,T,x);S.transmission>0?r.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,v){i.length>1&&i.sort(y||xR),r.length>1&&r.sort(v||X0),l.length>1&&l.sort(v||X0)}function g(){for(let y=t,v=s.length;y<v;y++){const S=s[y];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function SR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new W0,s.set(r,[f])):l>=c.length?(f=new W0,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function MR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new tt,color:new be};break;case"SpotLight":i={position:new tt,direction:new tt,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new tt,color:new be,distance:0,decay:0};break;case"HemisphereLight":i={direction:new tt,skyColor:new be,groundColor:new be};break;case"RectAreaLight":i={color:new be,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return s[t.id]=i,i}}}function ER(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let bR=0;function TR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function AR(s){const t=new MR,i=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new tt);const l=new tt,c=new qe,f=new qe;function h(m){let g=0,y=0,v=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,E=0,T=0,x=0,_=0,O=0,U=0,D=0,B=0,H=0,F=0;m.sort(TR);for(let L=0,R=m.length;L<R;L++){const V=m[L],ft=V.color,ct=V.intensity,Mt=V.distance,mt=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=ft.r*ct,y+=ft.g*ct,v+=ft.b*ct;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],ct);F++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,Y=i.get(V);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.directionalShadow[S]=Y,r.directionalShadowMap[S]=mt,r.directionalShadowMatrix[S]=V.shadow.matrix,O++}r.directional[S]=z,S++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ft).multiplyScalar(ct),z.distance=Mt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[T]=z;const J=V.shadow;if(V.map&&(r.spotLightMap[B]=V.map,B++,J.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[T]=J.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,r.spotShadow[T]=Y,r.spotShadowMap[T]=mt,D++}T++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(ft).multiplyScalar(ct),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[x]=z,x++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const J=V.shadow,Y=i.get(V);Y.shadowIntensity=J.intensity,Y.shadowBias=J.bias,Y.shadowNormalBias=J.normalBias,Y.shadowRadius=J.radius,Y.shadowMapSize=J.mapSize,Y.shadowCameraNear=J.camera.near,Y.shadowCameraFar=J.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=mt,r.pointShadowMatrix[E]=V.shadow.matrix,U++}r.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ct),z.groundColor.copy(V.groundColor).multiplyScalar(ct),r.hemi[_]=z,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=jt.LTC_FLOAT_1,r.rectAreaLTC2=jt.LTC_FLOAT_2):(r.rectAreaLTC1=jt.LTC_HALF_1,r.rectAreaLTC2=jt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==T||q.rectAreaLength!==x||q.hemiLength!==_||q.numDirectionalShadows!==O||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==B||q.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=T,r.rectArea.length=x,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=D+B-H,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=F,q.directionalLength=S,q.pointLength=E,q.spotLength=T,q.rectAreaLength=x,q.hemiLength=_,q.numDirectionalShadows=O,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=B,q.numLightProbes=F,r.version=bR++)}function p(m,g){let y=0,v=0,S=0,E=0,T=0;const x=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const U=m[_];if(U.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),y++}else if(U.isSpotLight){const D=r.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),D.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(x),S++}else if(U.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),f.identity(),c.copy(U.matrixWorld),c.premultiply(x),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(x),v++}else if(U.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(x),T++}}}return{setup:h,setupView:p,state:r}}function q0(s){const t=new AR(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function RR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new q0(s),t.set(l,[h])):c>=f.length?(h=new q0(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const CR=`void main() {
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
}`;function DR(s,t,i){let r=new Jd;const l=new ge,c=new ge,f=new en,h=new $E({depthPacking:cE}),p=new tb,m={},g=i.maxTextureSize,y={[Ka]:Wn,[Wn]:Ka,[Di]:Di},v=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const E=new Qa;E.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new hi(E,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(H,F,q){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||H.length===0)return;const L=s.getRenderTarget(),R=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ft=s.state;ft.setBlending(ja),ft.buffers.color.setClear(1,1,1,1),ft.buffers.depth.setTest(!0),ft.setScissorTest(!1);const ct=_!==oa&&this.type===oa,Mt=_===oa&&this.type!==oa;for(let mt=0,z=H.length;mt<z;mt++){const J=H[mt],Y=J.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Ct=Y.getFrameExtents();if(l.multiply(Ct),c.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Ct.x),l.x=c.x*Ct.x,Y.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Ct.y),l.y=c.y*Ct.y,Y.mapSize.y=c.y)),Y.map===null||ct===!0||Mt===!0){const nt=this.type!==oa?{minFilter:ei,magFilter:ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Dr(l.x,l.y,nt),Y.map.texture.name=J.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const P=Y.getViewportCount();for(let nt=0;nt<P;nt++){const Et=Y.getViewport(nt);f.set(c.x*Et.x,c.y*Et.y,c.x*Et.z,c.y*Et.w),ft.viewport(f),Y.updateMatrices(J,nt),r=Y.getFrustum(),D(F,q,Y.camera,J,this.type)}Y.isPointLightShadow!==!0&&this.type===oa&&O(Y,q),Y.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(L,R,V)};function O(H,F){const q=t.update(T);v.defines.VSM_SAMPLES!==H.blurSamples&&(v.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Dr(l.x,l.y)),v.uniforms.shadow_pass.value=H.map.texture,v.uniforms.resolution.value=H.mapSize,v.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(F,null,q,v,T,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(F,null,q,S,T,null)}function U(H,F,q,L){let R=null;const V=q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)R=V;else if(R=q.isPointLight===!0?p:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ft=R.uuid,ct=F.uuid;let Mt=m[ft];Mt===void 0&&(Mt={},m[ft]=Mt);let mt=Mt[ct];mt===void 0&&(mt=R.clone(),Mt[ct]=mt,F.addEventListener("dispose",B)),R=mt}if(R.visible=F.visible,R.wireframe=F.wireframe,L===oa?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:y[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ft=s.properties.get(R);ft.light=q}return R}function D(H,F,q,L,R){if(H.visible===!1)return;if(H.layers.test(F.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&R===oa)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,H.matrixWorld);const ct=t.update(H),Mt=H.material;if(Array.isArray(Mt)){const mt=ct.groups;for(let z=0,J=mt.length;z<J;z++){const Y=mt[z],Ct=Mt[Y.materialIndex];if(Ct&&Ct.visible){const P=U(H,Ct,L,R);H.onBeforeShadow(s,H,F,q,ct,P,Y),s.renderBufferDirect(q,null,ct,P,H,Y),H.onAfterShadow(s,H,F,q,ct,P,Y)}}}else if(Mt.visible){const mt=U(H,Mt,L,R);H.onBeforeShadow(s,H,F,q,ct,mt,null),s.renderBufferDirect(q,null,ct,mt,H,null),H.onAfterShadow(s,H,F,q,ct,mt,null)}}const ft=H.children;for(let ct=0,Mt=ft.length;ct<Mt;ct++)D(ft[ct],F,q,L,R)}function B(H){H.target.removeEventListener("dispose",B);for(const q in m){const L=m[q],R=H.target.uuid;R in L&&(L[R].dispose(),delete L[R])}}}const UR={[Jh]:$h,[td]:id,[ed]:ad,[Ls]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:Ls};function LR(s,t){function i(){let G=!1;const Bt=new en;let st=null;const dt=new en(0,0,0,0);return{setMask:function(kt){st!==kt&&!G&&(s.colorMask(kt,kt,kt,kt),st=kt)},setLocked:function(kt){G=kt},setClear:function(kt,Gt,le,we,Ye){Ye===!0&&(kt*=we,Gt*=we,le*=we),Bt.set(kt,Gt,le,we),dt.equals(Bt)===!1&&(s.clearColor(kt,Gt,le,we),dt.copy(Bt))},reset:function(){G=!1,st=null,dt.set(-1,0,0,0)}}}function r(){let G=!1,Bt=!1,st=null,dt=null,kt=null;return{setReversed:function(Gt){if(Bt!==Gt){const le=t.get("EXT_clip_control");Gt?le.clipControlEXT(le.LOWER_LEFT_EXT,le.ZERO_TO_ONE_EXT):le.clipControlEXT(le.LOWER_LEFT_EXT,le.NEGATIVE_ONE_TO_ONE_EXT),Bt=Gt;const we=kt;kt=null,this.setClear(we)}},getReversed:function(){return Bt},setTest:function(Gt){Gt?K(s.DEPTH_TEST):W(s.DEPTH_TEST)},setMask:function(Gt){st!==Gt&&!G&&(s.depthMask(Gt),st=Gt)},setFunc:function(Gt){if(Bt&&(Gt=UR[Gt]),dt!==Gt){switch(Gt){case Jh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case td:s.depthFunc(s.LESS);break;case Ls:s.depthFunc(s.LEQUAL);break;case ed:s.depthFunc(s.EQUAL);break;case nd:s.depthFunc(s.GEQUAL);break;case id:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}dt=Gt}},setLocked:function(Gt){G=Gt},setClear:function(Gt){kt!==Gt&&(Bt&&(Gt=1-Gt),s.clearDepth(Gt),kt=Gt)},reset:function(){G=!1,st=null,dt=null,kt=null,Bt=!1}}}function l(){let G=!1,Bt=null,st=null,dt=null,kt=null,Gt=null,le=null,we=null,Ye=null;return{setTest:function(Te){G||(Te?K(s.STENCIL_TEST):W(s.STENCIL_TEST))},setMask:function(Te){Bt!==Te&&!G&&(s.stencilMask(Te),Bt=Te)},setFunc:function(Te,wn,sn){(st!==Te||dt!==wn||kt!==sn)&&(s.stencilFunc(Te,wn,sn),st=Te,dt=wn,kt=sn)},setOp:function(Te,wn,sn){(Gt!==Te||le!==wn||we!==sn)&&(s.stencilOp(Te,wn,sn),Gt=Te,le=wn,we=sn)},setLocked:function(Te){G=Te},setClear:function(Te){Ye!==Te&&(s.clearStencil(Te),Ye=Te)},reset:function(){G=!1,Bt=null,st=null,dt=null,kt=null,Gt=null,le=null,we=null,Ye=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},y={},v=new WeakMap,S=[],E=null,T=!1,x=null,_=null,O=null,U=null,D=null,B=null,H=null,F=new be(0,0,0),q=0,L=!1,R=null,V=null,ft=null,ct=null,Mt=null;const mt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=J>=1):Y.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=J>=2);let Ct=null,P={};const nt=s.getParameter(s.SCISSOR_BOX),Et=s.getParameter(s.VIEWPORT),At=new en().fromArray(nt),$=new en().fromArray(Et);function vt(G,Bt,st,dt){const kt=new Uint8Array(4),Gt=s.createTexture();s.bindTexture(G,Gt),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let le=0;le<st;le++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Bt,0,s.RGBA,1,1,dt,0,s.RGBA,s.UNSIGNED_BYTE,kt):s.texImage2D(Bt+le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,kt);return Gt}const bt={};bt[s.TEXTURE_2D]=vt(s.TEXTURE_2D,s.TEXTURE_2D,1),bt[s.TEXTURE_CUBE_MAP]=vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[s.TEXTURE_2D_ARRAY]=vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),bt[s.TEXTURE_3D]=vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),K(s.DEPTH_TEST),f.setFunc(Ls),qt(!1),Tt(X_),K(s.CULL_FACE),N(ja);function K(G){g[G]!==!0&&(s.enable(G),g[G]=!0)}function W(G){g[G]!==!1&&(s.disable(G),g[G]=!1)}function ut(G,Bt){return y[G]!==Bt?(s.bindFramebuffer(G,Bt),y[G]=Bt,G===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Bt),G===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Bt),!0):!1}function wt(G,Bt){let st=S,dt=!1;if(G){st=v.get(Bt),st===void 0&&(st=[],v.set(Bt,st));const kt=G.textures;if(st.length!==kt.length||st[0]!==s.COLOR_ATTACHMENT0){for(let Gt=0,le=kt.length;Gt<le;Gt++)st[Gt]=s.COLOR_ATTACHMENT0+Gt;st.length=kt.length,dt=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,dt=!0);dt&&s.drawBuffers(st)}function Wt(G){return E!==G?(s.useProgram(G),E=G,!0):!1}const Qt={[br]:s.FUNC_ADD,[OM]:s.FUNC_SUBTRACT,[IM]:s.FUNC_REVERSE_SUBTRACT};Qt[zM]=s.MIN,Qt[BM]=s.MAX;const It={[FM]:s.ZERO,[HM]:s.ONE,[GM]:s.SRC_COLOR,[Kh]:s.SRC_ALPHA,[YM]:s.SRC_ALPHA_SATURATE,[WM]:s.DST_COLOR,[kM]:s.DST_ALPHA,[VM]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[qM]:s.ONE_MINUS_DST_COLOR,[XM]:s.ONE_MINUS_DST_ALPHA,[jM]:s.CONSTANT_COLOR,[ZM]:s.ONE_MINUS_CONSTANT_COLOR,[KM]:s.CONSTANT_ALPHA,[QM]:s.ONE_MINUS_CONSTANT_ALPHA};function N(G,Bt,st,dt,kt,Gt,le,we,Ye,Te){if(G===ja){T===!0&&(W(s.BLEND),T=!1);return}if(T===!1&&(K(s.BLEND),T=!0),G!==PM){if(G!==x||Te!==L){if((_!==br||D!==br)&&(s.blendEquation(s.FUNC_ADD),_=br,D=br),Te)switch(G){case Cr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Cr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}O=null,U=null,B=null,H=null,F.set(0,0,0),q=0,x=G,L=Te}return}kt=kt||Bt,Gt=Gt||st,le=le||dt,(Bt!==_||kt!==D)&&(s.blendEquationSeparate(Qt[Bt],Qt[kt]),_=Bt,D=kt),(st!==O||dt!==U||Gt!==B||le!==H)&&(s.blendFuncSeparate(It[st],It[dt],It[Gt],It[le]),O=st,U=dt,B=Gt,H=le),(we.equals(F)===!1||Ye!==q)&&(s.blendColor(we.r,we.g,we.b,Ye),F.copy(we),q=Ye),x=G,L=!1}function ie(G,Bt){G.side===Di?W(s.CULL_FACE):K(s.CULL_FACE);let st=G.side===Wn;Bt&&(st=!st),qt(st),G.blending===Cr&&G.transparent===!1?N(ja):N(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),f.setFunc(G.depthFunc),f.setTest(G.depthTest),f.setMask(G.depthWrite),c.setMask(G.colorWrite);const dt=G.stencilWrite;h.setTest(dt),dt&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),ae(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?K(s.SAMPLE_ALPHA_TO_COVERAGE):W(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function Tt(G){G!==UM?(K(s.CULL_FACE),G!==V&&(G===X_?s.cullFace(s.BACK):G===LM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):W(s.CULL_FACE),V=G}function Ot(G){G!==ft&&(z&&s.lineWidth(G),ft=G)}function ae(G,Bt,st){G?(K(s.POLYGON_OFFSET_FILL),(ct!==Bt||Mt!==st)&&(s.polygonOffset(Bt,st),ct=Bt,Mt=st)):W(s.POLYGON_OFFSET_FILL)}function zt(G){G?K(s.SCISSOR_TEST):W(s.SCISSOR_TEST)}function C(G){G===void 0&&(G=s.TEXTURE0+mt-1),Ct!==G&&(s.activeTexture(G),Ct=G)}function b(G,Bt,st){st===void 0&&(Ct===null?st=s.TEXTURE0+mt-1:st=Ct);let dt=P[st];dt===void 0&&(dt={type:void 0,texture:void 0},P[st]=dt),(dt.type!==G||dt.texture!==Bt)&&(Ct!==st&&(s.activeTexture(st),Ct=st),s.bindTexture(G,Bt||bt[G]),dt.type=G,dt.texture=Bt)}function X(){const G=P[Ct];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function gt(){try{s.compressedTexImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{s.compressedTexImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ht(){try{s.texSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{s.texSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Dt(){try{s.compressedTexSubImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{s.texStorage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Rt(){try{s.texStorage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ht(){try{s.texImage2D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Vt(){try{s.texImage3D(...arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pt(G){At.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),At.copy(G))}function Ut(G){$.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),$.copy(G))}function te(G,Bt){let st=m.get(Bt);st===void 0&&(st=new WeakMap,m.set(Bt,st));let dt=st.get(G);dt===void 0&&(dt=s.getUniformBlockIndex(Bt,G.name),st.set(G,dt))}function $t(G,Bt){const dt=m.get(Bt).get(G);p.get(Bt)!==dt&&(s.uniformBlockBinding(Bt,dt,G.__bindingPointIndex),p.set(Bt,dt))}function de(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ct=null,P={},y={},v=new WeakMap,S=[],E=null,T=!1,x=null,_=null,O=null,U=null,D=null,B=null,H=null,F=new be(0,0,0),q=0,L=!1,R=null,V=null,ft=null,ct=null,Mt=null,At.set(0,0,s.canvas.width,s.canvas.height),$.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:K,disable:W,bindFramebuffer:ut,drawBuffers:wt,useProgram:Wt,setBlending:N,setMaterial:ie,setFlipSided:qt,setCullFace:Tt,setLineWidth:Ot,setPolygonOffset:ae,setScissorTest:zt,activeTexture:C,bindTexture:b,unbindTexture:X,compressedTexImage2D:gt,compressedTexImage3D:xt,texImage2D:Ht,texImage3D:Vt,updateUBOMapping:te,uniformBlockBinding:$t,texStorage2D:Kt,texStorage3D:Rt,texSubImage2D:ht,texSubImage3D:Ft,compressedTexSubImage2D:Dt,compressedTexSubImage3D:Nt,scissor:Pt,viewport:Ut,reset:de}}function NR(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new ge,g=new WeakMap;let y;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(C,b){return S?new OffscreenCanvas(C,b):Jc("canvas")}function T(C,b,X){let gt=1;const xt=zt(C);if((xt.width>X||xt.height>X)&&(gt=X/Math.max(xt.width,xt.height)),gt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ht=Math.floor(gt*xt.width),Ft=Math.floor(gt*xt.height);y===void 0&&(y=E(ht,Ft));const Dt=b?E(ht,Ft):y;return Dt.width=ht,Dt.height=Ft,Dt.getContext("2d").drawImage(C,0,0,ht,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+xt.width+"x"+xt.height+") to ("+ht+"x"+Ft+")."),Dt}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+xt.width+"x"+xt.height+")."),C;return C}function x(C){return C.generateMipmaps}function _(C){s.generateMipmap(C)}function O(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(C,b,X,gt,xt=!1){if(C!==null){if(s[C]!==void 0)return s[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ht=b;if(b===s.RED&&(X===s.FLOAT&&(ht=s.R32F),X===s.HALF_FLOAT&&(ht=s.R16F),X===s.UNSIGNED_BYTE&&(ht=s.R8)),b===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ht=s.R8UI),X===s.UNSIGNED_SHORT&&(ht=s.R16UI),X===s.UNSIGNED_INT&&(ht=s.R32UI),X===s.BYTE&&(ht=s.R8I),X===s.SHORT&&(ht=s.R16I),X===s.INT&&(ht=s.R32I)),b===s.RG&&(X===s.FLOAT&&(ht=s.RG32F),X===s.HALF_FLOAT&&(ht=s.RG16F),X===s.UNSIGNED_BYTE&&(ht=s.RG8)),b===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ht=s.RG8UI),X===s.UNSIGNED_SHORT&&(ht=s.RG16UI),X===s.UNSIGNED_INT&&(ht=s.RG32UI),X===s.BYTE&&(ht=s.RG8I),X===s.SHORT&&(ht=s.RG16I),X===s.INT&&(ht=s.RG32I)),b===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ht=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ht=s.RGB16UI),X===s.UNSIGNED_INT&&(ht=s.RGB32UI),X===s.BYTE&&(ht=s.RGB8I),X===s.SHORT&&(ht=s.RGB16I),X===s.INT&&(ht=s.RGB32I)),b===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ht=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ht=s.RGBA16UI),X===s.UNSIGNED_INT&&(ht=s.RGBA32UI),X===s.BYTE&&(ht=s.RGBA8I),X===s.SHORT&&(ht=s.RGBA16I),X===s.INT&&(ht=s.RGBA32I)),b===s.RGB&&X===s.UNSIGNED_INT_5_9_9_9_REV&&(ht=s.RGB9_E5),b===s.RGBA){const Ft=xt?Kc:Ne.getTransfer(gt);X===s.FLOAT&&(ht=s.RGBA32F),X===s.HALF_FLOAT&&(ht=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ht=Ft===He?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ht=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ht=s.RGB5_A1)}return(ht===s.R16F||ht===s.R32F||ht===s.RG16F||ht===s.RG32F||ht===s.RGBA16F||ht===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ht}function D(C,b){let X;return C?b===null||b===wr||b===Yo?X=s.DEPTH24_STENCIL8:b===Li?X=s.DEPTH32F_STENCIL8:b===qo&&(X=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===wr||b===Yo?X=s.DEPTH_COMPONENT24:b===Li?X=s.DEPTH_COMPONENT32F:b===qo&&(X=s.DEPTH_COMPONENT16),X}function B(C,b){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==ei&&C.minFilter!==Ui?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function H(C){const b=C.target;b.removeEventListener("dispose",H),q(b),b.isVideoTexture&&g.delete(b)}function F(C){const b=C.target;b.removeEventListener("dispose",F),R(b)}function q(C){const b=r.get(C);if(b.__webglInit===void 0)return;const X=C.source,gt=v.get(X);if(gt){const xt=gt[b.__cacheKey];xt.usedTimes--,xt.usedTimes===0&&L(C),Object.keys(gt).length===0&&v.delete(X)}r.remove(C)}function L(C){const b=r.get(C);s.deleteTexture(b.__webglTexture);const X=C.source,gt=v.get(X);delete gt[b.__cacheKey],f.memory.textures--}function R(C){const b=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(b.__webglFramebuffer[gt]))for(let xt=0;xt<b.__webglFramebuffer[gt].length;xt++)s.deleteFramebuffer(b.__webglFramebuffer[gt][xt]);else s.deleteFramebuffer(b.__webglFramebuffer[gt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[gt])}else{if(Array.isArray(b.__webglFramebuffer))for(let gt=0;gt<b.__webglFramebuffer.length;gt++)s.deleteFramebuffer(b.__webglFramebuffer[gt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let gt=0;gt<b.__webglColorRenderbuffer.length;gt++)b.__webglColorRenderbuffer[gt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[gt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const X=C.textures;for(let gt=0,xt=X.length;gt<xt;gt++){const ht=r.get(X[gt]);ht.__webglTexture&&(s.deleteTexture(ht.__webglTexture),f.memory.textures--),r.remove(X[gt])}r.remove(C)}let V=0;function ft(){V=0}function ct(){const C=V;return C>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+l.maxTextures),V+=1,C}function Mt(C){const b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function mt(C,b){const X=r.get(C);if(C.isVideoTexture&&Ot(C),C.isRenderTargetTexture===!1&&C.version>0&&X.__version!==C.version){const gt=C.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(X,C,b);return}}i.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+b)}function z(C,b){const X=r.get(C);if(C.version>0&&X.__version!==C.version){$(X,C,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+b)}function J(C,b){const X=r.get(C);if(C.version>0&&X.__version!==C.version){$(X,C,b);return}i.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+b)}function Y(C,b){const X=r.get(C);if(C.version>0&&X.__version!==C.version){vt(X,C,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+b)}const Ct={[od]:s.REPEAT,[Ar]:s.CLAMP_TO_EDGE,[ld]:s.MIRRORED_REPEAT},P={[ei]:s.NEAREST,[oE]:s.NEAREST_MIPMAP_NEAREST,[mc]:s.NEAREST_MIPMAP_LINEAR,[Ui]:s.LINEAR,[gh]:s.LINEAR_MIPMAP_NEAREST,[Rr]:s.LINEAR_MIPMAP_LINEAR},nt={[fE]:s.NEVER,[_E]:s.ALWAYS,[hE]:s.LESS,[Ev]:s.LEQUAL,[dE]:s.EQUAL,[gE]:s.GEQUAL,[pE]:s.GREATER,[mE]:s.NOTEQUAL};function Et(C,b){if(b.type===Li&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ui||b.magFilter===gh||b.magFilter===mc||b.magFilter===Rr||b.minFilter===Ui||b.minFilter===gh||b.minFilter===mc||b.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Ct[b.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Ct[b.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Ct[b.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,P[b.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,P[b.minFilter]),b.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,nt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ei||b.minFilter!==mc&&b.minFilter!==Rr||b.type===Li&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const X=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function At(C,b){let X=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",H));const gt=b.source;let xt=v.get(gt);xt===void 0&&(xt={},v.set(gt,xt));const ht=Mt(b);if(ht!==C.__cacheKey){xt[ht]===void 0&&(xt[ht]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,X=!0),xt[ht].usedTimes++;const Ft=xt[C.__cacheKey];Ft!==void 0&&(xt[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&L(b)),C.__cacheKey=ht,C.__webglTexture=xt[ht].texture}return X}function $(C,b,X){let gt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(gt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(gt=s.TEXTURE_3D);const xt=At(C,b),ht=b.source;i.bindTexture(gt,C.__webglTexture,s.TEXTURE0+X);const Ft=r.get(ht);if(ht.version!==Ft.__version||xt===!0){i.activeTexture(s.TEXTURE0+X);const Dt=Ne.getPrimaries(Ne.workingColorSpace),Nt=b.colorSpace===Ya?null:Ne.getPrimaries(b.colorSpace),Kt=b.colorSpace===Ya||Dt===Nt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let Rt=T(b.image,!1,l.maxTextureSize);Rt=ae(b,Rt);const Ht=c.convert(b.format,b.colorSpace),Vt=c.convert(b.type);let Pt=U(b.internalFormat,Ht,Vt,b.colorSpace,b.isVideoTexture);Et(gt,b);let Ut;const te=b.mipmaps,$t=b.isVideoTexture!==!0,de=Ft.__version===void 0||xt===!0,G=ht.dataReady,Bt=B(b,Rt);if(b.isDepthTexture)Pt=D(b.format===Zo,b.type),de&&($t?i.texStorage2D(s.TEXTURE_2D,1,Pt,Rt.width,Rt.height):i.texImage2D(s.TEXTURE_2D,0,Pt,Rt.width,Rt.height,0,Ht,Vt,null));else if(b.isDataTexture)if(te.length>0){$t&&de&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,te[0].width,te[0].height);for(let st=0,dt=te.length;st<dt;st++)Ut=te[st],$t?G&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ut.width,Ut.height,Ht,Vt,Ut.data):i.texImage2D(s.TEXTURE_2D,st,Pt,Ut.width,Ut.height,0,Ht,Vt,Ut.data);b.generateMipmaps=!1}else $t?(de&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height),G&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Rt.width,Rt.height,Ht,Vt,Rt.data)):i.texImage2D(s.TEXTURE_2D,0,Pt,Rt.width,Rt.height,0,Ht,Vt,Rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$t&&de&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,te[0].width,te[0].height,Rt.depth);for(let st=0,dt=te.length;st<dt;st++)if(Ut=te[st],b.format!==xi)if(Ht!==null)if($t){if(G)if(b.layerUpdates.size>0){const kt=M0(Ut.width,Ut.height,b.format,b.type);for(const Gt of b.layerUpdates){const le=Ut.data.subarray(Gt*kt/Ut.data.BYTES_PER_ELEMENT,(Gt+1)*kt/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Gt,Ut.width,Ut.height,1,Ht,le)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ut.width,Ut.height,Rt.depth,Ht,Ut.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,Pt,Ut.width,Ut.height,Rt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?G&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ut.width,Ut.height,Rt.depth,Ht,Vt,Ut.data):i.texImage3D(s.TEXTURE_2D_ARRAY,st,Pt,Ut.width,Ut.height,Rt.depth,0,Ht,Vt,Ut.data)}else{$t&&de&&i.texStorage2D(s.TEXTURE_2D,Bt,Pt,te[0].width,te[0].height);for(let st=0,dt=te.length;st<dt;st++)Ut=te[st],b.format!==xi?Ht!==null?$t?G&&i.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Ut.width,Ut.height,Ht,Ut.data):i.compressedTexImage2D(s.TEXTURE_2D,st,Pt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?G&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ut.width,Ut.height,Ht,Vt,Ut.data):i.texImage2D(s.TEXTURE_2D,st,Pt,Ut.width,Ut.height,0,Ht,Vt,Ut.data)}else if(b.isDataArrayTexture)if($t){if(de&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Bt,Pt,Rt.width,Rt.height,Rt.depth),G)if(b.layerUpdates.size>0){const st=M0(Rt.width,Rt.height,b.format,b.type);for(const dt of b.layerUpdates){const kt=Rt.data.subarray(dt*st/Rt.data.BYTES_PER_ELEMENT,(dt+1)*st/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,dt,Rt.width,Rt.height,1,Ht,Vt,kt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Vt,Rt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,Rt.width,Rt.height,Rt.depth,0,Ht,Vt,Rt.data);else if(b.isData3DTexture)$t?(de&&i.texStorage3D(s.TEXTURE_3D,Bt,Pt,Rt.width,Rt.height,Rt.depth),G&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ht,Vt,Rt.data)):i.texImage3D(s.TEXTURE_3D,0,Pt,Rt.width,Rt.height,Rt.depth,0,Ht,Vt,Rt.data);else if(b.isFramebufferTexture){if(de)if($t)i.texStorage2D(s.TEXTURE_2D,Bt,Pt,Rt.width,Rt.height);else{let st=Rt.width,dt=Rt.height;for(let kt=0;kt<Bt;kt++)i.texImage2D(s.TEXTURE_2D,kt,Pt,st,dt,0,Ht,Vt,null),st>>=1,dt>>=1}}else if(te.length>0){if($t&&de){const st=zt(te[0]);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,st.width,st.height)}for(let st=0,dt=te.length;st<dt;st++)Ut=te[st],$t?G&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ht,Vt,Ut):i.texImage2D(s.TEXTURE_2D,st,Pt,Ht,Vt,Ut);b.generateMipmaps=!1}else if($t){if(de){const st=zt(Rt);i.texStorage2D(s.TEXTURE_2D,Bt,Pt,st.width,st.height)}G&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ht,Vt,Rt)}else i.texImage2D(s.TEXTURE_2D,0,Pt,Ht,Vt,Rt);x(b)&&_(gt),Ft.__version=ht.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function vt(C,b,X){if(b.image.length!==6)return;const gt=At(C,b),xt=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+X);const ht=r.get(xt);if(xt.version!==ht.__version||gt===!0){i.activeTexture(s.TEXTURE0+X);const Ft=Ne.getPrimaries(Ne.workingColorSpace),Dt=b.colorSpace===Ya?null:Ne.getPrimaries(b.colorSpace),Nt=b.colorSpace===Ya||Ft===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Nt);const Kt=b.isCompressedTexture||b.image[0].isCompressedTexture,Rt=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let dt=0;dt<6;dt++)!Kt&&!Rt?Ht[dt]=T(b.image[dt],!0,l.maxCubemapSize):Ht[dt]=Rt?b.image[dt].image:b.image[dt],Ht[dt]=ae(b,Ht[dt]);const Vt=Ht[0],Pt=c.convert(b.format,b.colorSpace),Ut=c.convert(b.type),te=U(b.internalFormat,Pt,Ut,b.colorSpace),$t=b.isVideoTexture!==!0,de=ht.__version===void 0||gt===!0,G=xt.dataReady;let Bt=B(b,Vt);Et(s.TEXTURE_CUBE_MAP,b);let st;if(Kt){$t&&de&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,te,Vt.width,Vt.height);for(let dt=0;dt<6;dt++){st=Ht[dt].mipmaps;for(let kt=0;kt<st.length;kt++){const Gt=st[kt];b.format!==xi?Pt!==null?$t?G&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,Gt.width,Gt.height,Pt,Gt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,te,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?G&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,0,0,Gt.width,Gt.height,Pt,Ut,Gt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt,te,Gt.width,Gt.height,0,Pt,Ut,Gt.data)}}}else{if(st=b.mipmaps,$t&&de){st.length>0&&Bt++;const dt=zt(Ht[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Bt,te,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Rt){$t?G&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Ht[dt].width,Ht[dt].height,Pt,Ut,Ht[dt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,te,Ht[dt].width,Ht[dt].height,0,Pt,Ut,Ht[dt].data);for(let kt=0;kt<st.length;kt++){const le=st[kt].image[dt].image;$t?G&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,le.width,le.height,Pt,Ut,le.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,te,le.width,le.height,0,Pt,Ut,le.data)}}else{$t?G&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Pt,Ut,Ht[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,te,Pt,Ut,Ht[dt]);for(let kt=0;kt<st.length;kt++){const Gt=st[kt];$t?G&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,0,0,Pt,Ut,Gt.image[dt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,kt+1,te,Pt,Ut,Gt.image[dt])}}}x(b)&&_(s.TEXTURE_CUBE_MAP),ht.__version=xt.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function bt(C,b,X,gt,xt,ht){const Ft=c.convert(X.format,X.colorSpace),Dt=c.convert(X.type),Nt=U(X.internalFormat,Ft,Dt,X.colorSpace),Kt=r.get(b),Rt=r.get(X);if(Rt.__renderTarget=b,!Kt.__hasExternalTextures){const Ht=Math.max(1,b.width>>ht),Vt=Math.max(1,b.height>>ht);xt===s.TEXTURE_3D||xt===s.TEXTURE_2D_ARRAY?i.texImage3D(xt,ht,Nt,Ht,Vt,b.depth,0,Ft,Dt,null):i.texImage2D(xt,ht,Nt,Ht,Vt,0,Ft,Dt,null)}i.bindFramebuffer(s.FRAMEBUFFER,C),Tt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,gt,xt,Rt.__webglTexture,0,qt(b)):(xt===s.TEXTURE_2D||xt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,gt,xt,Rt.__webglTexture,ht),i.bindFramebuffer(s.FRAMEBUFFER,null)}function K(C,b,X){if(s.bindRenderbuffer(s.RENDERBUFFER,C),b.depthBuffer){const gt=b.depthTexture,xt=gt&&gt.isDepthTexture?gt.type:null,ht=D(b.stencilBuffer,xt),Ft=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Dt=qt(b);Tt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Dt,ht,b.width,b.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ht,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,C)}else{const gt=b.textures;for(let xt=0;xt<gt.length;xt++){const ht=gt[xt],Ft=c.convert(ht.format,ht.colorSpace),Dt=c.convert(ht.type),Nt=U(ht.internalFormat,Ft,Dt,ht.colorSpace),Kt=qt(b);X&&Tt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Kt,Nt,b.width,b.height):Tt(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Kt,Nt,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Nt,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function W(C,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=r.get(b.depthTexture);gt.__renderTarget=b,(!gt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),mt(b.depthTexture,0);const xt=gt.__webglTexture,ht=qt(b);if(b.depthTexture.format===jo)Tt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,xt,0);else if(b.depthTexture.format===Zo)Tt(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0,ht):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,xt,0);else throw new Error("Unknown depthTexture format")}function ut(C){const b=r.get(C),X=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){const gt=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),gt){const xt=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,gt.removeEventListener("dispose",xt)};gt.addEventListener("dispose",xt),b.__depthDisposeCallback=xt}b.__boundDepthTexture=gt}if(C.depthTexture&&!b.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const gt=C.texture.mipmaps;gt&&gt.length>0?W(b.__webglFramebuffer[0],C):W(b.__webglFramebuffer,C)}else if(X){b.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[gt]),b.__webglDepthbuffer[gt]===void 0)b.__webglDepthbuffer[gt]=s.createRenderbuffer(),K(b.__webglDepthbuffer[gt],C,!1);else{const xt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer[gt];s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ht)}}else{const gt=C.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),K(b.__webglDepthbuffer,C,!1);else{const xt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ht),s.framebufferRenderbuffer(s.FRAMEBUFFER,xt,s.RENDERBUFFER,ht)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function wt(C,b,X){const gt=r.get(C);b!==void 0&&bt(gt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&ut(C)}function Wt(C){const b=C.texture,X=r.get(C),gt=r.get(b);C.addEventListener("dispose",F);const xt=C.textures,ht=C.isWebGLCubeRenderTarget===!0,Ft=xt.length>1;if(Ft||(gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture()),gt.__version=b.version,f.memory.textures++),ht){X.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer[Dt]=[];for(let Nt=0;Nt<b.mipmaps.length;Nt++)X.__webglFramebuffer[Dt][Nt]=s.createFramebuffer()}else X.__webglFramebuffer[Dt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){X.__webglFramebuffer=[];for(let Dt=0;Dt<b.mipmaps.length;Dt++)X.__webglFramebuffer[Dt]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let Dt=0,Nt=xt.length;Dt<Nt;Dt++){const Kt=r.get(xt[Dt]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=s.createTexture(),f.memory.textures++)}if(C.samples>0&&Tt(C)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Dt=0;Dt<xt.length;Dt++){const Nt=xt[Dt];X.__webglColorRenderbuffer[Dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Dt]);const Kt=c.convert(Nt.format,Nt.colorSpace),Rt=c.convert(Nt.type),Ht=U(Nt.internalFormat,Kt,Rt,Nt.colorSpace,C.isXRRenderTarget===!0),Vt=qt(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Vt,Ht,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Dt,s.RENDERBUFFER,X.__webglColorRenderbuffer[Dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),K(X.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ht){i.bindTexture(s.TEXTURE_CUBE_MAP,gt.__webglTexture),Et(s.TEXTURE_CUBE_MAP,b);for(let Dt=0;Dt<6;Dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)bt(X.__webglFramebuffer[Dt][Nt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Nt);else bt(X.__webglFramebuffer[Dt],C,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);x(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ft){for(let Dt=0,Nt=xt.length;Dt<Nt;Dt++){const Kt=xt[Dt],Rt=r.get(Kt);i.bindTexture(s.TEXTURE_2D,Rt.__webglTexture),Et(s.TEXTURE_2D,Kt),bt(X.__webglFramebuffer,C,Kt,s.COLOR_ATTACHMENT0+Dt,s.TEXTURE_2D,0),x(Kt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Dt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Dt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Dt,gt.__webglTexture),Et(Dt,b),b.mipmaps&&b.mipmaps.length>0)for(let Nt=0;Nt<b.mipmaps.length;Nt++)bt(X.__webglFramebuffer[Nt],C,b,s.COLOR_ATTACHMENT0,Dt,Nt);else bt(X.__webglFramebuffer,C,b,s.COLOR_ATTACHMENT0,Dt,0);x(b)&&_(Dt),i.unbindTexture()}C.depthBuffer&&ut(C)}function Qt(C){const b=C.textures;for(let X=0,gt=b.length;X<gt;X++){const xt=b[X];if(x(xt)){const ht=O(C),Ft=r.get(xt).__webglTexture;i.bindTexture(ht,Ft),_(ht),i.unbindTexture()}}}const It=[],N=[];function ie(C){if(C.samples>0){if(Tt(C)===!1){const b=C.textures,X=C.width,gt=C.height;let xt=s.COLOR_BUFFER_BIT;const ht=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=r.get(C),Dt=b.length>1;if(Dt)for(let Kt=0;Kt<b.length;Kt++)i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Nt=C.texture.mipmaps;Nt&&Nt.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Kt=0;Kt<b.length;Kt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(xt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(xt|=s.STENCIL_BUFFER_BIT)),Dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Kt]);const Rt=r.get(b[Kt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Rt,0)}s.blitFramebuffer(0,0,X,gt,0,0,X,gt,xt,s.NEAREST),p===!0&&(It.length=0,N.length=0,It.push(s.COLOR_ATTACHMENT0+Kt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(It.push(ht),N.push(ht),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Dt)for(let Kt=0;Kt<b.length;Kt++){i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Kt]);const Rt=r.get(b[Kt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Kt,s.TEXTURE_2D,Rt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&p){const b=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function qt(C){return Math.min(l.maxSamples,C.samples)}function Tt(C){const b=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ot(C){const b=f.render.frame;g.get(C)!==b&&(g.set(C,b),C.update())}function ae(C,b){const X=C.colorSpace,gt=C.format,xt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||X!==Os&&X!==Ya&&(Ne.getTransfer(X)===He?(gt!==xi||xt!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),b}function zt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(m.width=C.naturalWidth||C.width,m.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(m.width=C.displayWidth,m.height=C.displayHeight):(m.width=C.width,m.height=C.height),m}this.allocateTextureUnit=ct,this.resetTextureUnits=ft,this.setTexture2D=mt,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=Y,this.rebindTextures=wt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=Tt}function PR(s,t){function i(r,l=Ya){let c;const f=Ne.getTransfer(l);if(r===Pi)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.BYTE;if(r===gv)return s.SHORT;if(r===qo)return s.UNSIGNED_SHORT;if(r===Xd)return s.INT;if(r===wr)return s.UNSIGNED_INT;if(r===Li)return s.FLOAT;if(r===$o)return s.HALF_FLOAT;if(r===vv)return s.ALPHA;if(r===yv)return s.RGB;if(r===xi)return s.RGBA;if(r===jo)return s.DEPTH_COMPONENT;if(r===Zo)return s.DEPTH_STENCIL;if(r===Yd)return s.RED;if(r===jd)return s.RED_INTEGER;if(r===xv)return s.RG;if(r===Zd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Gc||r===Vc||r===kc||r===Xc)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Gc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Gc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd||r===Cd||r===wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wc||r===Dd||r===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===Wc)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sv||r===Ld||r===Nd||r===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===Wc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Yo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const OR=`
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

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Bn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new ha({vertexShader:OR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hi(new au(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends Pr{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,y=null,v=null,S=null,E=null;const T=new zR,x=i.getContextAttributes();let _=null,O=null;const U=[],D=[],B=new ge;let H=null;const F=new fi;F.viewport=new en;const q=new fi;q.viewport=new en;const L=[F,q],R=new ab;let V=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let vt=U[$];return vt===void 0&&(vt=new zh,U[$]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function($){let vt=U[$];return vt===void 0&&(vt=new zh,U[$]=vt),vt.getGripSpace()},this.getHand=function($){let vt=U[$];return vt===void 0&&(vt=new zh,U[$]=vt),vt.getHandSpace()};function ct($){const vt=D.indexOf($.inputSource);if(vt===-1)return;const bt=U[vt];bt!==void 0&&(bt.update($.inputSource,$.frame,m||f),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function Mt(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",Mt),l.removeEventListener("inputsourceschange",mt);for(let $=0;$<U.length;$++){const vt=D[$];vt!==null&&(D[$]=null,U[$].disconnect(vt))}V=null,ft=null,T.reset(),t.setRenderTarget(_),S=null,v=null,y=null,l=null,O=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){c=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){h=$,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function($){m=$},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return y},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function($){if(l=$,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",Mt),l.addEventListener("inputsourceschange",mt),x.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,K=null,W=null;x.depth&&(W=x.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,bt=x.stencil?Zo:jo,K=x.stencil?Yo:wr);const ut={colorFormat:i.RGBA8,depthFormat:W,scaleFactor:c};y=new XRWebGLBinding(l,i),v=y.createProjectionLayer(ut),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Dr(v.textureWidth,v.textureHeight,{format:xi,type:Pi,depthTexture:new Ov(v.textureWidth,v.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const bt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,bt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),O=new Dr(S.framebufferWidth,S.framebufferHeight,{format:xi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function mt($){for(let vt=0;vt<$.removed.length;vt++){const bt=$.removed[vt],K=D.indexOf(bt);K>=0&&(D[K]=null,U[K].disconnect(bt))}for(let vt=0;vt<$.added.length;vt++){const bt=$.added[vt];let K=D.indexOf(bt);if(K===-1){for(let ut=0;ut<U.length;ut++)if(ut>=D.length){D.push(bt),K=ut;break}else if(D[ut]===null){D[ut]=bt,K=ut;break}if(K===-1)break}const W=U[K];W&&W.connect(bt)}}const z=new tt,J=new tt;function Y($,vt,bt){z.setFromMatrixPosition(vt.matrixWorld),J.setFromMatrixPosition(bt.matrixWorld);const K=z.distanceTo(J),W=vt.projectionMatrix.elements,ut=bt.projectionMatrix.elements,wt=W[14]/(W[10]-1),Wt=W[14]/(W[10]+1),Qt=(W[9]+1)/W[5],It=(W[9]-1)/W[5],N=(W[8]-1)/W[0],ie=(ut[8]+1)/ut[0],qt=wt*N,Tt=wt*ie,Ot=K/(-N+ie),ae=Ot*-N;if(vt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ae),$.translateZ(Ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),W[10]===-1)$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse);else{const zt=wt+Ot,C=Wt+Ot,b=qt-ae,X=Tt+(K-ae),gt=Qt*Wt/C*zt,xt=It*Wt/C*zt;$.projectionMatrix.makePerspective(b,X,gt,xt,zt,C),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ct($,vt){vt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(vt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(l===null)return;let vt=$.near,bt=$.far;T.texture!==null&&(T.depthNear>0&&(vt=T.depthNear),T.depthFar>0&&(bt=T.depthFar)),R.near=q.near=F.near=vt,R.far=q.far=F.far=bt,(V!==R.near||ft!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),V=R.near,ft=R.far),F.layers.mask=$.layers.mask|2,q.layers.mask=$.layers.mask|4,R.layers.mask=F.layers.mask|q.layers.mask;const K=$.parent,W=R.cameras;Ct(R,K);for(let ut=0;ut<W.length;ut++)Ct(W[ut],K);W.length===2?Y(R,F,q):R.projectionMatrix.copy(F.projectionMatrix),P($,R,K)};function P($,vt,bt){bt===null?$.matrix.copy(vt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(vt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(vt.projectionMatrix),$.projectionMatrixInverse.copy(vt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Od*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function($){p=$,v!==null&&(v.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let nt=null;function Et($,vt){if(g=vt.getViewerPose(m||f),E=vt,g!==null){const bt=g.views;S!==null&&(t.setRenderTargetFramebuffer(O,S.framebuffer),t.setRenderTarget(O));let K=!1;bt.length!==R.cameras.length&&(R.cameras.length=0,K=!0);for(let wt=0;wt<bt.length;wt++){const Wt=bt[wt];let Qt=null;if(S!==null)Qt=S.getViewport(Wt);else{const N=y.getViewSubImage(v,Wt);Qt=N.viewport,wt===0&&(t.setRenderTargetTextures(O,N.colorTexture,N.depthStencilTexture),t.setRenderTarget(O))}let It=L[wt];It===void 0&&(It=new fi,It.layers.enable(wt),It.viewport=new en,L[wt]=It),It.matrix.fromArray(Wt.transform.matrix),It.matrix.decompose(It.position,It.quaternion,It.scale),It.projectionMatrix.fromArray(Wt.projectionMatrix),It.projectionMatrixInverse.copy(It.projectionMatrix).invert(),It.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),wt===0&&(R.matrix.copy(It.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),K===!0&&R.cameras.push(It)}const W=l.enabledFeatures;if(W&&W.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const wt=y.getDepthInformation(bt[0]);wt&&wt.isValid&&wt.texture&&T.init(t,wt,l.renderState)}}for(let bt=0;bt<U.length;bt++){const K=D[bt],W=U[bt];K!==null&&W!==void 0&&W.update(K,vt,m||f)}nt&&nt($,vt),vt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:vt}),E=null}const At=new Bv;At.setAnimationLoop(Et),this.setAnimationLoop=function($){nt=$},this.dispose=function(){}}}const Mr=new Oi,FR=new qe;function HR(s,t){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Lv(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,O,U,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),y(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),v(x,_),_.isMeshPhysicalMaterial&&S(x,_,D)):_.isMeshMatcapMaterial?(c(x,_),E(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),T(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&h(x,_)):_.isPointsMaterial?p(x,_,O,U):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Wn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Wn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const O=t.get(_),U=O.envMap,D=O.envMapRotation;U&&(x.envMap.value=U,Mr.copy(D),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),x.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(Mr)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function h(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,O,U){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*O,x.scale.value=U*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function v(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,O){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Wn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const O=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function GR(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,U){const D=U.program;r.uniformBlockBinding(O,D)}function m(O,U){let D=l[O.id];D===void 0&&(E(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",x));const B=U.program;r.updateUBOMapping(O,B);const H=t.render.frame;c[O.id]!==H&&(v(O),c[O.id]=H)}function g(O){const U=y();O.__bindingPointIndex=U;const D=s.createBuffer(),B=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,B,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,D),D}function y(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const U=l[O.id],D=O.uniforms,B=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let H=0,F=D.length;H<F;H++){const q=Array.isArray(D[H])?D[H]:[D[H]];for(let L=0,R=q.length;L<R;L++){const V=q[L];if(S(V,H,L,B)===!0){const ft=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let Mt=0;for(let mt=0;mt<ct.length;mt++){const z=ct[mt],J=T(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,ft+Mt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,Mt),Mt+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ft,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(O,U,D,B){const H=O.value,F=U+"_"+D;if(B[F]===void 0)return typeof H=="number"||typeof H=="boolean"?B[F]=H:B[F]=H.clone(),!0;{const q=B[F];if(typeof H=="number"||typeof H=="boolean"){if(q!==H)return B[F]=H,!0}else if(q.equals(H)===!1)return q.copy(H),!0}return!1}function E(O){const U=O.uniforms;let D=0;const B=16;for(let F=0,q=U.length;F<q;F++){const L=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,V=L.length;R<V;R++){const ft=L[R],ct=Array.isArray(ft.value)?ft.value:[ft.value];for(let Mt=0,mt=ct.length;Mt<mt;Mt++){const z=ct[Mt],J=T(z),Y=D%B,Ct=Y%J.boundary,P=Y+Ct;D+=Ct,P!==0&&B-P<J.storage&&(D+=B-P),ft.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ft.__offset=D,D+=J.storage}}}const H=D%B;return H>0&&(D+=B-H),O.__size=D,O.__cache={},this}function T(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),U}function x(O){const U=O.target;U.removeEventListener("dispose",x);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class VR{constructor(t={}){const{canvas:i=xE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=f;const E=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const O=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=ui;let H=0,F=0,q=null,L=-1,R=null;const V=new en,ft=new en;let ct=null;const Mt=new be(0);let mt=0,z=i.width,J=i.height,Y=1,Ct=null,P=null;const nt=new en(0,0,z,J),Et=new en(0,0,z,J);let At=!1;const $=new Jd;let vt=!1,bt=!1;const K=new qe,W=new qe,ut=new tt,wt=new en,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function It(){return q===null?Y:1}let N=r;function ie(w,Z){return i.getContext(w,Z)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",dt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Gt,!1),N===null){const Z="webgl2";if(N=ie(Z,w),N===null)throw ie(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let qt,Tt,Ot,ae,zt,C,b,X,gt,xt,ht,Ft,Dt,Nt,Kt,Rt,Ht,Vt,Pt,Ut,te,$t,de,G;function Bt(){qt=new J1(N),qt.init(),$t=new PR(N,qt),Tt=new W1(N,qt,t,$t),Ot=new LR(N,qt),Tt.reverseDepthBuffer&&v&&Ot.buffers.depth.setReversed(!0),ae=new eA(N),zt=new yR,C=new NR(N,qt,Ot,zt,Tt,$t,ae),b=new Y1(D),X=new Q1(D),gt=new ob(N),de=new k1(N,gt),xt=new $1(N,gt,ae,de),ht=new iA(N,xt,gt,ae),Pt=new nA(N,Tt,C),Rt=new q1(zt),Ft=new vR(D,b,X,qt,Tt,de,Rt),Dt=new HR(D,zt),Nt=new SR,Kt=new RR(qt),Vt=new V1(D,b,X,Ot,ht,S,p),Ht=new DR(D,ht,Tt),G=new GR(N,ae,Tt,Ot),Ut=new X1(N,qt,ae),te=new tA(N,qt,ae),ae.programs=Ft.programs,D.capabilities=Tt,D.extensions=qt,D.properties=zt,D.renderLists=Nt,D.shadowMap=Ht,D.state=Ot,D.info=ae}Bt();const st=new BR(D,N);this.xr=st,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=qt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=qt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,Z,ot=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=Z,i.width=Math.floor(w*Y),i.height=Math.floor(Z*Y),ot===!0&&(i.style.width=w+"px",i.style.height=Z+"px"),this.setViewport(0,0,w,Z)},this.getDrawingBufferSize=function(w){return w.set(z*Y,J*Y).floor()},this.setDrawingBufferSize=function(w,Z,ot){z=w,J=Z,Y=ot,i.width=Math.floor(w*ot),i.height=Math.floor(Z*ot),this.setViewport(0,0,w,Z)},this.getCurrentViewport=function(w){return w.copy(V)},this.getViewport=function(w){return w.copy(nt)},this.setViewport=function(w,Z,ot,lt){w.isVector4?nt.set(w.x,w.y,w.z,w.w):nt.set(w,Z,ot,lt),Ot.viewport(V.copy(nt).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(Et)},this.setScissor=function(w,Z,ot,lt){w.isVector4?Et.set(w.x,w.y,w.z,w.w):Et.set(w,Z,ot,lt),Ot.scissor(ft.copy(Et).multiplyScalar(Y).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(w){Ot.setScissorTest(At=w)},this.setOpaqueSort=function(w){Ct=w},this.setTransparentSort=function(w){P=w},this.getClearColor=function(w){return w.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(w=!0,Z=!0,ot=!0){let lt=0;if(w){let Q=!1;if(q!==null){const Lt=q.texture.format;Q=Lt===Kd||Lt===Zd||Lt===jd}if(Q){const Lt=q.texture.type,Xt=Lt===Pi||Lt===wr||Lt===qo||Lt===Yo||Lt===Wd||Lt===qd,Yt=Vt.getClearColor(),Zt=Vt.getClearAlpha(),ue=Yt.r,re=Yt.g,ne=Yt.b;Xt?(E[0]=ue,E[1]=re,E[2]=ne,E[3]=Zt,N.clearBufferuiv(N.COLOR,0,E)):(T[0]=ue,T[1]=re,T[2]=ne,T[3]=Zt,N.clearBufferiv(N.COLOR,0,T))}else lt|=N.COLOR_BUFFER_BIT}Z&&(lt|=N.DEPTH_BUFFER_BIT),ot&&(lt|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",dt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Gt,!1),Vt.dispose(),Nt.dispose(),Kt.dispose(),zt.dispose(),b.dispose(),X.dispose(),ht.dispose(),de.dispose(),G.dispose(),Ft.dispose(),st.dispose(),st.removeEventListener("sessionstart",nn),st.removeEventListener("sessionend",fn),bn.stop()};function dt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const w=ae.autoReset,Z=Ht.enabled,ot=Ht.autoUpdate,lt=Ht.needsUpdate,Q=Ht.type;Bt(),ae.autoReset=w,Ht.enabled=Z,Ht.autoUpdate=ot,Ht.needsUpdate=lt,Ht.type=Q}function Gt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const Z=w.target;Z.removeEventListener("dispose",le),we(Z)}function we(w){Ye(w),zt.remove(w)}function Ye(w){const Z=zt.get(w).programs;Z!==void 0&&(Z.forEach(function(ot){Ft.releaseProgram(ot)}),w.isShaderMaterial&&Ft.releaseShaderCache(w))}this.renderBufferDirect=function(w,Z,ot,lt,Q,Lt){Z===null&&(Z=Wt);const Xt=Q.isMesh&&Q.matrixWorld.determinant()<0,Yt=tr(w,Z,ot,lt,Q);Ot.setMaterial(lt,Xt);let Zt=ot.index,ue=1;if(lt.wireframe===!0){if(Zt=xt.getWireframeAttribute(ot),Zt===void 0)return;ue=2}const re=ot.drawRange,ne=ot.attributes.position;let xe=re.start*ue,Ue=(re.start+re.count)*ue;Lt!==null&&(xe=Math.max(xe,Lt.start*ue),Ue=Math.min(Ue,(Lt.start+Lt.count)*ue)),Zt!==null?(xe=Math.max(xe,0),Ue=Math.min(Ue,Zt.count)):ne!=null&&(xe=Math.max(xe,0),Ue=Math.min(Ue,ne.count));const Ze=Ue-xe;if(Ze<0||Ze===1/0)return;de.setup(Q,lt,Yt,ot,Zt);let Ae,Re=Ut;if(Zt!==null&&(Ae=gt.get(Zt),Re=te,Re.setIndex(Ae)),Q.isMesh)lt.wireframe===!0?(Ot.setLineWidth(lt.wireframeLinewidth*It()),Re.setMode(N.LINES)):Re.setMode(N.TRIANGLES);else if(Q.isLine){let se=lt.linewidth;se===void 0&&(se=1),Ot.setLineWidth(se*It()),Q.isLineSegments?Re.setMode(N.LINES):Q.isLineLoop?Re.setMode(N.LINE_LOOP):Re.setMode(N.LINE_STRIP)}else Q.isPoints?Re.setMode(N.POINTS):Q.isSprite&&Re.setMode(N.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Yc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Re.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const se=Q._multiDrawStarts,Je=Q._multiDrawCounts,De=Q._multiDrawCount,Dn=Zt?gt.get(Zt).bytesPerElement:1,_a=zt.get(lt).currentProgram.getUniforms();for(let Xe=0;Xe<De;Xe++)_a.setValue(N,"_gl_DrawID",Xe),Re.render(se[Xe]/Dn,Je[Xe])}else if(Q.isInstancedMesh)Re.renderInstances(xe,Ze,Q.count);else if(ot.isInstancedBufferGeometry){const se=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Je=Math.min(ot.instanceCount,se);Re.renderInstances(xe,Ze,Je)}else Re.render(xe,Ze)};function Te(w,Z,ot){w.transparent===!0&&w.side===Di&&w.forceSinglePass===!1?(w.side=Wn,w.needsUpdate=!0,ma(w,Z,ot),w.side=Ka,w.needsUpdate=!0,ma(w,Z,ot),w.side=Di):ma(w,Z,ot)}this.compile=function(w,Z,ot=null){ot===null&&(ot=w),_=Kt.get(ot),_.init(Z),U.push(_),ot.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),w!==ot&&w.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Z.layers)&&(_.pushLight(Q),Q.castShadow&&_.pushShadow(Q))}),_.setupLights();const lt=new Set;return w.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Lt=Q.material;if(Lt)if(Array.isArray(Lt))for(let Xt=0;Xt<Lt.length;Xt++){const Yt=Lt[Xt];Te(Yt,ot,Q),lt.add(Yt)}else Te(Lt,ot,Q),lt.add(Lt)}),_=U.pop(),lt},this.compileAsync=function(w,Z,ot=null){const lt=this.compile(w,Z,ot);return new Promise(Q=>{function Lt(){if(lt.forEach(function(Xt){zt.get(Xt).currentProgram.isReady()&&lt.delete(Xt)}),lt.size===0){Q(w);return}setTimeout(Lt,10)}qt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let wn=null;function sn(w){wn&&wn(w)}function nn(){bn.stop()}function fn(){bn.start()}const bn=new Bv;bn.setAnimationLoop(sn),typeof self<"u"&&bn.setContext(self),this.setAnimationLoop=function(w){wn=w,st.setAnimationLoop(w),w===null?bn.stop():bn.start()},st.addEventListener("sessionstart",nn),st.addEventListener("sessionend",fn),this.render=function(w,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(Z),Z=st.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,Z,q),_=Kt.get(w,U.length),_.init(Z),U.push(_),W.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$.setFromProjectionMatrix(W),bt=this.localClippingEnabled,vt=Rt.init(this.clippingPlanes,bt),x=Nt.get(w,O.length),x.init(),O.push(x),st.enabled===!0&&st.isPresenting===!0){const Lt=D.xr.getDepthSensingMesh();Lt!==null&&Ja(Lt,Z,-1/0,D.sortObjects)}Ja(w,Z,0,D.sortObjects),x.finish(),D.sortObjects===!0&&x.sort(Ct,P),Qt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Qt&&Vt.addToRenderList(x,w),this.info.render.frame++,vt===!0&&Rt.beginShadows();const ot=_.state.shadowsArray;Ht.render(ot,w,Z),vt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=x.opaque,Q=x.transmissive;if(_.setupLights(),Z.isArrayCamera){const Lt=Z.cameras;if(Q.length>0)for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++){const Zt=Lt[Xt];rl(lt,Q,w,Zt)}Qt&&Vt.render(w);for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++){const Zt=Lt[Xt];al(x,w,Zt,Zt.viewport)}}else Q.length>0&&rl(lt,Q,w,Z),Qt&&Vt.render(w),al(x,w,Z);q!==null&&F===0&&(C.updateMultisampleRenderTarget(q),C.updateRenderTargetMipmap(q)),w.isScene===!0&&w.onAfterRender(D,w,Z),de.resetDefaultState(),L=-1,R=null,U.pop(),U.length>0?(_=U[U.length-1],vt===!0&&Rt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?x=O[O.length-1]:x=null};function Ja(w,Z,ot,lt){if(w.visible===!1)return;if(w.layers.test(Z.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Z);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||$.intersectsSprite(w)){lt&&wt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(W);const Xt=ht.update(w),Yt=w.material;Yt.visible&&x.push(w,Xt,Yt,ot,wt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||$.intersectsObject(w))){const Xt=ht.update(w),Yt=w.material;if(lt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),wt.copy(w.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),wt.copy(Xt.boundingSphere.center)),wt.applyMatrix4(w.matrixWorld).applyMatrix4(W)),Array.isArray(Yt)){const Zt=Xt.groups;for(let ue=0,re=Zt.length;ue<re;ue++){const ne=Zt[ue],xe=Yt[ne.materialIndex];xe&&xe.visible&&x.push(w,Xt,xe,ot,wt.z,ne)}}else Yt.visible&&x.push(w,Xt,Yt,ot,wt.z,null)}}const Lt=w.children;for(let Xt=0,Yt=Lt.length;Xt<Yt;Xt++)Ja(Lt[Xt],Z,ot,lt)}function al(w,Z,ot,lt){const Q=w.opaque,Lt=w.transmissive,Xt=w.transparent;_.setupLightsView(ot),vt===!0&&Rt.setGlobalState(D.clippingPlanes,ot),lt&&Ot.viewport(V.copy(lt)),Q.length>0&&$a(Q,Z,ot),Lt.length>0&&$a(Lt,Z,ot),Xt.length>0&&$a(Xt,Z,ot),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function rl(w,Z,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[lt.id]===void 0&&(_.state.transmissionRenderTarget[lt.id]=new Dr(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?$o:Pi,minFilter:Rr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Lt=_.state.transmissionRenderTarget[lt.id],Xt=lt.viewport||V;Lt.setSize(Xt.z*D.transmissionResolutionScale,Xt.w*D.transmissionResolutionScale);const Yt=D.getRenderTarget();D.setRenderTarget(Lt),D.getClearColor(Mt),mt=D.getClearAlpha(),mt<1&&D.setClearColor(16777215,.5),D.clear(),Qt&&Vt.render(ot);const Zt=D.toneMapping;D.toneMapping=Za;const ue=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),_.setupLightsView(lt),vt===!0&&Rt.setGlobalState(D.clippingPlanes,lt),$a(w,ot,lt),C.updateMultisampleRenderTarget(Lt),C.updateRenderTargetMipmap(Lt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let ne=0,xe=Z.length;ne<xe;ne++){const Ue=Z[ne],Ze=Ue.object,Ae=Ue.geometry,Re=Ue.material,se=Ue.group;if(Re.side===Di&&Ze.layers.test(lt.layers)){const Je=Re.side;Re.side=Wn,Re.needsUpdate=!0,pa(Ze,ot,lt,Ae,Re,se),Re.side=Je,Re.needsUpdate=!0,re=!0}}re===!0&&(C.updateMultisampleRenderTarget(Lt),C.updateRenderTargetMipmap(Lt))}D.setRenderTarget(Yt),D.setClearColor(Mt,mt),ue!==void 0&&(lt.viewport=ue),D.toneMapping=Zt}function $a(w,Z,ot){const lt=Z.isScene===!0?Z.overrideMaterial:null;for(let Q=0,Lt=w.length;Q<Lt;Q++){const Xt=w[Q],Yt=Xt.object,Zt=Xt.geometry,ue=Xt.group;let re=Xt.material;re.allowOverride===!0&&lt!==null&&(re=lt),Yt.layers.test(ot.layers)&&pa(Yt,Z,ot,Zt,re,ue)}}function pa(w,Z,ot,lt,Q,Lt){w.onBeforeRender(D,Z,ot,lt,Q,Lt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Q.onBeforeRender(D,Z,ot,lt,w,Lt),Q.transparent===!0&&Q.side===Di&&Q.forceSinglePass===!1?(Q.side=Wn,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,lt,Q,w,Lt),Q.side=Ka,Q.needsUpdate=!0,D.renderBufferDirect(ot,Z,lt,Q,w,Lt),Q.side=Di):D.renderBufferDirect(ot,Z,lt,Q,w,Lt),w.onAfterRender(D,Z,ot,lt,Q,Lt)}function ma(w,Z,ot){Z.isScene!==!0&&(Z=Wt);const lt=zt.get(w),Q=_.state.lights,Lt=_.state.shadowsArray,Xt=Q.state.version,Yt=Ft.getParameters(w,Q.state,Lt,Z,ot),Zt=Ft.getProgramCacheKey(Yt);let ue=lt.programs;lt.environment=w.isMeshStandardMaterial?Z.environment:null,lt.fog=Z.fog,lt.envMap=(w.isMeshStandardMaterial?X:b).get(w.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&w.envMap===null?Z.environmentRotation:w.envMapRotation,ue===void 0&&(w.addEventListener("dispose",le),ue=new Map,lt.programs=ue);let re=ue.get(Zt);if(re!==void 0){if(lt.currentProgram===re&&lt.lightsStateVersion===Xt)return Bi(w,Yt),re}else Yt.uniforms=Ft.getUniforms(w),w.onBeforeCompile(Yt,D),re=Ft.acquireProgram(Yt,Zt),ue.set(Zt,re),lt.uniforms=Yt.uniforms;const ne=lt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ne.clippingPlanes=Rt.uniform),Bi(w,Yt),lt.needsLights=on(w),lt.lightsStateVersion=Xt,lt.needsLights&&(ne.ambientLightColor.value=Q.state.ambient,ne.lightProbe.value=Q.state.probe,ne.directionalLights.value=Q.state.directional,ne.directionalLightShadows.value=Q.state.directionalShadow,ne.spotLights.value=Q.state.spot,ne.spotLightShadows.value=Q.state.spotShadow,ne.rectAreaLights.value=Q.state.rectArea,ne.ltc_1.value=Q.state.rectAreaLTC1,ne.ltc_2.value=Q.state.rectAreaLTC2,ne.pointLights.value=Q.state.point,ne.pointLightShadows.value=Q.state.pointShadow,ne.hemisphereLights.value=Q.state.hemi,ne.directionalShadowMap.value=Q.state.directionalShadowMap,ne.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,ne.spotShadowMap.value=Q.state.spotShadowMap,ne.spotLightMatrix.value=Q.state.spotLightMatrix,ne.spotLightMap.value=Q.state.spotLightMap,ne.pointShadowMap.value=Q.state.pointShadowMap,ne.pointShadowMatrix.value=Q.state.pointShadowMatrix),lt.currentProgram=re,lt.uniformsList=null,re}function zi(w){if(w.uniformsList===null){const Z=w.currentProgram.getUniforms();w.uniformsList=jc.seqWithValue(Z.seq,w.uniforms)}return w.uniformsList}function Bi(w,Z){const ot=zt.get(w);ot.outputColorSpace=Z.outputColorSpace,ot.batching=Z.batching,ot.batchingColor=Z.batchingColor,ot.instancing=Z.instancing,ot.instancingColor=Z.instancingColor,ot.instancingMorph=Z.instancingMorph,ot.skinning=Z.skinning,ot.morphTargets=Z.morphTargets,ot.morphNormals=Z.morphNormals,ot.morphColors=Z.morphColors,ot.morphTargetsCount=Z.morphTargetsCount,ot.numClippingPlanes=Z.numClippingPlanes,ot.numIntersection=Z.numClipIntersection,ot.vertexAlphas=Z.vertexAlphas,ot.vertexTangents=Z.vertexTangents,ot.toneMapping=Z.toneMapping}function tr(w,Z,ot,lt,Q){Z.isScene!==!0&&(Z=Wt),C.resetTextureUnits();const Lt=Z.fog,Xt=lt.isMeshStandardMaterial?Z.environment:null,Yt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Os,Zt=(lt.isMeshStandardMaterial?X:b).get(lt.envMap||Xt),ue=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),ne=!!ot.morphAttributes.position,xe=!!ot.morphAttributes.normal,Ue=!!ot.morphAttributes.color;let Ze=Za;lt.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Ze=D.toneMapping);const Ae=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=Ae!==void 0?Ae.length:0,se=zt.get(lt),Je=_.state.lights;if(vt===!0&&(bt===!0||w!==R)){const vn=w===R&&lt.id===L;Rt.setState(lt,w,vn)}let De=!1;lt.version===se.__version?(se.needsLights&&se.lightsStateVersion!==Je.state.version||se.outputColorSpace!==Yt||Q.isBatchedMesh&&se.batching===!1||!Q.isBatchedMesh&&se.batching===!0||Q.isBatchedMesh&&se.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&se.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&se.instancing===!1||!Q.isInstancedMesh&&se.instancing===!0||Q.isSkinnedMesh&&se.skinning===!1||!Q.isSkinnedMesh&&se.skinning===!0||Q.isInstancedMesh&&se.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&se.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&se.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&se.instancingMorph===!1&&Q.morphTexture!==null||se.envMap!==Zt||lt.fog===!0&&se.fog!==Lt||se.numClippingPlanes!==void 0&&(se.numClippingPlanes!==Rt.numPlanes||se.numIntersection!==Rt.numIntersection)||se.vertexAlphas!==ue||se.vertexTangents!==re||se.morphTargets!==ne||se.morphNormals!==xe||se.morphColors!==Ue||se.toneMapping!==Ze||se.morphTargetsCount!==Re)&&(De=!0):(De=!0,se.__version=lt.version);let Dn=se.currentProgram;De===!0&&(Dn=ma(lt,Z,Q));let _a=!1,Xe=!1,Hi=!1;const Ve=Dn.getUniforms(),Un=se.uniforms;if(Ot.useProgram(Dn.program)&&(_a=!0,Xe=!0,Hi=!0),lt.id!==L&&(L=lt.id,Xe=!0),_a||R!==w){Ot.buffers.depth.getReversed()?(K.copy(w.projectionMatrix),ME(K),EE(K),Ve.setValue(N,"projectionMatrix",K)):Ve.setValue(N,"projectionMatrix",w.projectionMatrix),Ve.setValue(N,"viewMatrix",w.matrixWorldInverse);const Tn=Ve.map.cameraPosition;Tn!==void 0&&Tn.setValue(N,ut.setFromMatrixPosition(w.matrixWorld)),Tt.logarithmicDepthBuffer&&Ve.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&Ve.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),R!==w&&(R=w,Xe=!0,Hi=!0)}if(Q.isSkinnedMesh){Ve.setOptional(N,Q,"bindMatrix"),Ve.setOptional(N,Q,"bindMatrixInverse");const vn=Q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ve.setValue(N,"boneTexture",vn.boneTexture,C))}Q.isBatchedMesh&&(Ve.setOptional(N,Q,"batchingTexture"),Ve.setValue(N,"batchingTexture",Q._matricesTexture,C),Ve.setOptional(N,Q,"batchingIdTexture"),Ve.setValue(N,"batchingIdTexture",Q._indirectTexture,C),Ve.setOptional(N,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ve.setValue(N,"batchingColorTexture",Q._colorsTexture,C));const hn=ot.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Pt.update(Q,ot,Dn),(Xe||se.receiveShadow!==Q.receiveShadow)&&(se.receiveShadow=Q.receiveShadow,Ve.setValue(N,"receiveShadow",Q.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(Un.envMap.value=Zt,Un.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&Z.environment!==null&&(Un.envMapIntensity.value=Z.environmentIntensity),Xe&&(Ve.setValue(N,"toneMappingExposure",D.toneMappingExposure),se.needsLights&&ga(Un,Hi),Lt&&lt.fog===!0&&Dt.refreshFogUniforms(Un,Lt),Dt.refreshMaterialUniforms(Un,lt,Y,J,_.state.transmissionRenderTarget[w.id]),jc.upload(N,zi(se),Un,C)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(jc.upload(N,zi(se),Un,C),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&Ve.setValue(N,"center",Q.center),Ve.setValue(N,"modelViewMatrix",Q.modelViewMatrix),Ve.setValue(N,"normalMatrix",Q.normalMatrix),Ve.setValue(N,"modelMatrix",Q.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const vn=lt.uniformsGroups;for(let Tn=0,Ei=vn.length;Tn<Ei;Tn++){const Gi=vn[Tn];G.update(Gi,Dn),G.bind(Gi,Dn)}}return Dn}function ga(w,Z){w.ambientLightColor.needsUpdate=Z,w.lightProbe.needsUpdate=Z,w.directionalLights.needsUpdate=Z,w.directionalLightShadows.needsUpdate=Z,w.pointLights.needsUpdate=Z,w.pointLightShadows.needsUpdate=Z,w.spotLights.needsUpdate=Z,w.spotLightShadows.needsUpdate=Z,w.rectAreaLights.needsUpdate=Z,w.hemisphereLights.needsUpdate=Z}function on(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(w,Z,ot){const lt=zt.get(w);lt.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),zt.get(w.texture).__webglTexture=Z,zt.get(w.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Z){const ot=zt.get(w);ot.__webglFramebuffer=Z,ot.__useDefaultFramebuffer=Z===void 0};const sl=N.createFramebuffer();this.setRenderTarget=function(w,Z=0,ot=0){q=w,H=Z,F=ot;let lt=!0,Q=null,Lt=!1,Xt=!1;if(w){const Zt=zt.get(w);if(Zt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(N.FRAMEBUFFER,null),lt=!1;else if(Zt.__webglFramebuffer===void 0)C.setupRenderTarget(w);else if(Zt.__hasExternalTextures)C.rebindTextures(w,zt.get(w.texture).__webglTexture,zt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ne=w.depthTexture;if(Zt.__boundDepthTexture!==ne){if(ne!==null&&zt.has(ne)&&(w.width!==ne.image.width||w.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(w)}}const ue=w.texture;(ue.isData3DTexture||ue.isDataArrayTexture||ue.isCompressedArrayTexture)&&(Xt=!0);const re=zt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(re[Z])?Q=re[Z][ot]:Q=re[Z],Lt=!0):w.samples>0&&C.useMultisampledRTT(w)===!1?Q=zt.get(w).__webglMultisampledFramebuffer:Array.isArray(re)?Q=re[ot]:Q=re,V.copy(w.viewport),ft.copy(w.scissor),ct=w.scissorTest}else V.copy(nt).multiplyScalar(Y).floor(),ft.copy(Et).multiplyScalar(Y).floor(),ct=At;if(ot!==0&&(Q=sl),Ot.bindFramebuffer(N.FRAMEBUFFER,Q)&&lt&&Ot.drawBuffers(w,Q),Ot.viewport(V),Ot.scissor(ft),Ot.setScissorTest(ct),Lt){const Zt=zt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Zt.__webglTexture,ot)}else if(Xt){const Zt=zt.get(w.texture),ue=Z;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Zt.__webglTexture,ot,ue)}else if(w!==null&&ot!==0){const Zt=zt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Zt.__webglTexture,ot)}L=-1},this.readRenderTargetPixels=function(w,Z,ot,lt,Q,Lt,Xt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Yt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt){Ot.bindFramebuffer(N.FRAMEBUFFER,Yt);try{const Zt=w.texture,ue=Zt.format,re=Zt.type;if(!Tt.textureFormatReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=w.width-lt&&ot>=0&&ot<=w.height-Q&&N.readPixels(Z,ot,lt,Q,$t.convert(ue),$t.convert(re),Lt)}finally{const Zt=q!==null?zt.get(q).__webglFramebuffer:null;Ot.bindFramebuffer(N.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(w,Z,ot,lt,Q,Lt,Xt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Yt=zt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Xt!==void 0&&(Yt=Yt[Xt]),Yt)if(Z>=0&&Z<=w.width-lt&&ot>=0&&ot<=w.height-Q){Ot.bindFramebuffer(N.FRAMEBUFFER,Yt);const Zt=w.texture,ue=Zt.format,re=Zt.type;if(!Tt.textureFormatReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.bufferData(N.PIXEL_PACK_BUFFER,Lt.byteLength,N.STREAM_READ),N.readPixels(Z,ot,lt,Q,$t.convert(ue),$t.convert(re),0);const xe=q!==null?zt.get(q).__webglFramebuffer:null;Ot.bindFramebuffer(N.FRAMEBUFFER,xe);const Ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await SE(N,Ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ne),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Lt),N.deleteBuffer(ne),N.deleteSync(Ue),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Z=null,ot=0){const lt=Math.pow(2,-ot),Q=Math.floor(w.image.width*lt),Lt=Math.floor(w.image.height*lt),Xt=Z!==null?Z.x:0,Yt=Z!==null?Z.y:0;C.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,ot,0,0,Xt,Yt,Q,Lt),Ot.unbindTexture()};const ol=N.createFramebuffer(),Fi=N.createFramebuffer();this.copyTextureToTexture=function(w,Z,ot=null,lt=null,Q=0,Lt=null){Lt===null&&(Q!==0?(Yc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Lt=Q,Q=0):Lt=0);let Xt,Yt,Zt,ue,re,ne,xe,Ue,Ze;const Ae=w.isCompressedTexture?w.mipmaps[Lt]:w.image;if(ot!==null)Xt=ot.max.x-ot.min.x,Yt=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,ue=ot.min.x,re=ot.min.y,ne=ot.isBox3?ot.min.z:0;else{const hn=Math.pow(2,-Q);Xt=Math.floor(Ae.width*hn),Yt=Math.floor(Ae.height*hn),w.isDataArrayTexture?Zt=Ae.depth:w.isData3DTexture?Zt=Math.floor(Ae.depth*hn):Zt=1,ue=0,re=0,ne=0}lt!==null?(xe=lt.x,Ue=lt.y,Ze=lt.z):(xe=0,Ue=0,Ze=0);const Re=$t.convert(Z.format),se=$t.convert(Z.type);let Je;Z.isData3DTexture?(C.setTexture3D(Z,0),Je=N.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(C.setTexture2DArray(Z,0),Je=N.TEXTURE_2D_ARRAY):(C.setTexture2D(Z,0),Je=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,Z.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,Z.unpackAlignment);const De=N.getParameter(N.UNPACK_ROW_LENGTH),Dn=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_a=N.getParameter(N.UNPACK_SKIP_PIXELS),Xe=N.getParameter(N.UNPACK_SKIP_ROWS),Hi=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ue),N.pixelStorei(N.UNPACK_SKIP_ROWS,re),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ne);const Ve=w.isDataArrayTexture||w.isData3DTexture,Un=Z.isDataArrayTexture||Z.isData3DTexture;if(w.isDepthTexture){const hn=zt.get(w),vn=zt.get(Z),Tn=zt.get(hn.__renderTarget),Ei=zt.get(vn.__renderTarget);Ot.bindFramebuffer(N.READ_FRAMEBUFFER,Tn.__webglFramebuffer),Ot.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Gi=0;Gi<Zt;Gi++)Ve&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(w).__webglTexture,Q,ne+Gi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,zt.get(Z).__webglTexture,Lt,Ze+Gi)),N.blitFramebuffer(ue,re,Xt,Yt,xe,Ue,Xt,Yt,N.DEPTH_BUFFER_BIT,N.NEAREST);Ot.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(Q!==0||w.isRenderTargetTexture||zt.has(w)){const hn=zt.get(w),vn=zt.get(Z);Ot.bindFramebuffer(N.READ_FRAMEBUFFER,ol),Ot.bindFramebuffer(N.DRAW_FRAMEBUFFER,Fi);for(let Tn=0;Tn<Zt;Tn++)Ve?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,hn.__webglTexture,Q,ne+Tn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,hn.__webglTexture,Q),Un?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,vn.__webglTexture,Lt,Ze+Tn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vn.__webglTexture,Lt),Q!==0?N.blitFramebuffer(ue,re,Xt,Yt,xe,Ue,Xt,Yt,N.COLOR_BUFFER_BIT,N.NEAREST):Un?N.copyTexSubImage3D(Je,Lt,xe,Ue,Ze+Tn,ue,re,Xt,Yt):N.copyTexSubImage2D(Je,Lt,xe,Ue,ue,re,Xt,Yt);Ot.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Un?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Je,Lt,xe,Ue,Ze,Xt,Yt,Zt,Re,se,Ae.data):Z.isCompressedArrayTexture?N.compressedTexSubImage3D(Je,Lt,xe,Ue,Ze,Xt,Yt,Zt,Re,Ae.data):N.texSubImage3D(Je,Lt,xe,Ue,Ze,Xt,Yt,Zt,Re,se,Ae):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Lt,xe,Ue,Xt,Yt,Re,se,Ae.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Lt,xe,Ue,Ae.width,Ae.height,Re,Ae.data):N.texSubImage2D(N.TEXTURE_2D,Lt,xe,Ue,Xt,Yt,Re,se,Ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,De),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Dn),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_a),N.pixelStorei(N.UNPACK_SKIP_ROWS,Xe),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Hi),Lt===0&&Z.generateMipmaps&&N.generateMipmap(Je),Ot.unbindTexture()},this.copyTextureToTexture3D=function(w,Z,ot=null,lt=null,Q=0){return Yc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,Z,ot,lt,Q)},this.initRenderTarget=function(w){zt.get(w).__webglFramebuffer===void 0&&C.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?C.setTextureCube(w,0):w.isData3DTexture?C.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?C.setTexture2DArray(w,0):C.setTexture2D(w,0),Ot.unbindTexture()},this.resetState=function(){H=0,F=0,q=null,Ot.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Y0={type:"change"},tp={type:"start"},kv={type:"end"},Bc=new Av,j0=new qa,kR=Math.cos(70*yE.DEG2RAD),mn=new tt,Xn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class XR extends rb{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new tt,this.cursor=new tt,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ds.ROTATE,MIDDLE:Ds.DOLLY,RIGHT:Ds.PAN},this.touches={ONE:Cs.ROTATE,TWO:Cs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new tt,this._lastQuaternion=new Ur,this._lastTargetPosition=new tt,this._quat=new Ur().setFromUnitVectors(t.up,new tt(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S0,this._sphericalDelta=new S0,this._scale=1,this._panOffset=new tt,this._rotateStart=new ge,this._rotateEnd=new ge,this._rotateDelta=new ge,this._panStart=new ge,this._panEnd=new ge,this._panDelta=new ge,this._dollyStart=new ge,this._dollyEnd=new ge,this._dollyDelta=new ge,this._dollyDirection=new tt,this._mouse=new ge,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qR.bind(this),this._onPointerDown=WR.bind(this),this._onPointerUp=YR.bind(this),this._onContextMenu=tC.bind(this),this._onMouseWheel=KR.bind(this),this._onKeyDown=QR.bind(this),this._onTouchStart=JR.bind(this),this._onTouchMove=$R.bind(this),this._onMouseDown=jR.bind(this),this._onMouseMove=ZR.bind(this),this._interceptControlDown=eC.bind(this),this._interceptControlUp=nC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Xn:r>Math.PI&&(r-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=mn.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new tt(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new tt(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Bc.origin.copy(this.object.position),Bc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bc.direction))<kR?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bc.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,h=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ge,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function WR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function qR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function jR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ds.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Ge.DOLLY;break;case Ds.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ge.ROTATE}break;case Ds.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(tp)}function ZR(s){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KR(s){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(s.preventDefault(),this.dispatchEvent(tp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kv))}function QR(s){this.enabled!==!1&&this._handleKeyDown(s)}function JR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Cs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Ge.TOUCH_ROTATE;break;case Cs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Cs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Ge.TOUCH_DOLLY_PAN;break;case Cs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(tp)}function $R(s){switch(this._trackPointer(s),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Ge.NONE}}function tC(s){this.enabled!==!1&&s.preventDefault()}function eC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iC(){const s=yt.useRef(null),t=yt.useRef(null);return yt.useEffect(()=>{if(!s.current||!t.current)return;let i,r,l,c;const f={};let h="2p3/2",p="focused",m=.05,g="normal";const y=45e3,v=.05;let S="linear",E=[],T=.5,x=0,_=1,O=.8,U=.3,D=!1,B=0,H=0,F=0;const q=`
      attribute float a_initialPhase;
      
      uniform float orbitalScale;
      uniform float u_time;
      uniform float u_maxSpeedAtCenter;
      uniform float u_minSpeedAtEdge;
      uniform float u_exponentialFalloffRate;
      uniform float u_crossSectionX;
      uniform float u_absorptionStrength;
      uniform float u_absorptionFrequency;
      uniform float u_absorptionPhase;
      uniform float u_particleScale;
      uniform vec3 u_cameraPosition;
      uniform float u_cameraCullDistance;
      uniform float u_depthCullDistance;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      void main() {
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          float distanceToYAxis = length(original_pos.xz);
          float angularSpeed = (u_maxSpeedAtCenter - u_minSpeedAtEdge) * exp(-distanceToYAxis * u_exponentialFalloffRate) + u_minSpeedAtEdge;
          float currentRotationY = a_initialPhase + angularSpeed * u_time;

          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          vec3 animated_position = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;

          if (u_absorptionStrength > 0.01) {
              float dist = length(animated_position);
              vec3 direction = normalize(animated_position);
              float displacement = sin(dist * u_absorptionFrequency - u_absorptionPhase) * u_absorptionStrength;
              float scaleFactor = smoothstep(0.0, orbitalScale * 0.8, dist);
              displacement *= scaleFactor * 0.5;
              animated_position += direction * displacement;
          }

          mat4 translationToAnimatedCenter = mat4(
              1.0, 0.0, 0.0, 0.0,
              0.0, 1.0, 0.0, 0.0,
              0.0, 0.0, 1.0, 0.0,
              animated_position.x, animated_position.y, animated_position.z, 1.0
          );

          // Apply particle scale uniform
          vec3 scaledPosition = position * u_particleScale;
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(scaledPosition, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          // Updated cross-section visibility (0-10 range instead of -10 to 10)
          float crossSectionFactor = u_crossSectionX / 10.0; // Convert 0-10 to 0-1
          vCrossSectionVisibility = worldPosition.x <= mix(-10.0, 10.0, crossSectionFactor) ? 1.0 : 0.0;
          
          // Camera-based culling for better visibility
          float distanceToCamera = distance(worldPosition.xyz, u_cameraPosition);
          
          // Cull particles too close to camera (bulldozer effect)
          vCameraCull = distanceToCamera > u_cameraCullDistance ? 1.0 : 0.0;
          
          // Additional depth-based culling for particles in front of inner orbitals
          vec3 toCameraDir = normalize(u_cameraPosition - worldPosition.xyz);
          vec3 toOriginDir = normalize(-worldPosition.xyz);
          float viewAlignment = dot(toCameraDir, toOriginDir);
          
          // Cull particles that are far from origin AND in front of camera
          float distanceFromOrigin = length(worldPosition.xyz);
          if (distanceFromOrigin > u_depthCullDistance && viewAlignment < 0.3) {
              vCameraCull = 0.0;
          }
          
          vNormalWorld = normalize(mat3(modelMatrix) * normal);

          vec4 viewPosition = viewMatrix * worldPosition; 
          float rawDepth = -viewPosition.z; 
          
          vDepthFactor = smoothstep(orbitalScale * 0.45, orbitalScale * 2.8, rawDepth); 

          gl_Position = projectionMatrix * viewPosition;
      }
    `,L=`
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
      uniform float u_opacity;
      uniform bool u_isWireframe;

      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      const float minOverallBrightness = 0.12;
      const float maxOverallBrightness = 0.98;
      const float minRawLight = 0.08;
      const float maxRawLight = 1.9;

      void main() {
          // Apply camera culling and cross-section visibility
          if (vCrossSectionVisibility < 0.5 || vCameraCull < 0.5) {
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
          if (u_isWireframe) {
              // For wireframe mode, use a single color
              densityColor = baseColor;
          } else {
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
          }
          
          vec3 litColor = densityColor * rawLighting;

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(0.25, 0.25, 0.25); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, u_opacity);
      }
    `,R={"1s":{name:"1s",shell:"K",color:16729156,lowDensityColor:16755370,midDensityColor:16737894,highDensityColor:13369344,scale:.3,particleCount:5e3,generatePoints:V,cameraPosition:new tt(2,1.5,2.5),energy:7112,particleScale:1.5,renderMode:"solid",renderOrder:1e3},"2s":{name:"2s",shell:"L",color:4521796,lowDensityColor:11206570,midDensityColor:6750054,highDensityColor:52224,scale:.65,particleCount:6e3,generatePoints:ft,cameraPosition:new tt(3,2.5,4),energy:844,particleScale:1,renderMode:"solid",renderOrder:500},"2p1/2":{name:"2p₁/₂",shell:"L",color:4521898,lowDensityColor:11206621,midDensityColor:6750139,highDensityColor:52360,scale:.75,particleCount:6e3,generatePoints:ct,cameraPosition:new tt(3,2.5,4),energy:720,particleScale:1,renderMode:"solid",renderOrder:400},"2p3/2":{name:"2p₃/₂",shell:"L",color:4500223,lowDensityColor:11197951,midDensityColor:6732799,highDensityColor:35020,scale:.85,particleCount:6e3,generatePoints:ct,cameraPosition:new tt(3,2.5,4),energy:707,particleScale:1,renderMode:"solid",renderOrder:300},"3s":{name:"3s",shell:"M",color:16777028,lowDensityColor:16777130,midDensityColor:16777062,highDensityColor:13421568,scale:1.5,particleCount:8e3,generatePoints:Mt,cameraPosition:new tt(3,3,4.5),energy:92,particleScale:.8,renderMode:"solid",renderOrder:2},"3p":{name:"3p",shell:"M",color:16755268,lowDensityColor:16768426,midDensityColor:16759654,highDensityColor:13404160,scale:1.5,particleCount:8e3,generatePoints:mt,cameraPosition:new tt(3,3,4.5),energy:52,particleScale:.8,renderMode:"solid",renderOrder:1},"3d":{name:"3d",shell:"M",color:16729343,lowDensityColor:16755455,midDensityColor:16738047,highDensityColor:13369548,scale:1.5,particleCount:8e3,generatePoints:z,cameraPosition:new tt(3,3,4.5),energy:1,particleScale:.8,renderMode:"solid",renderOrder:0}};function V(K,W){const ut=[],wt=W*.05;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N;do{It=W*Math.random();const C=It/(W/4);N=C*C*Math.exp(-2*C)}while(Math.random()>N);const ie=Math.acos(2*Math.random()-1),qt=Math.random()*Math.PI*2,Tt=It*Math.sin(ie)*Math.cos(qt),Ot=It*Math.sin(ie)*Math.sin(qt),ae=It*Math.cos(ie);let zt=!1;if(ut.length<100)for(let C=0;C<Math.min(ut.length,50);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function ft(K,W){const ut=[],wt=W*.06;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N;do{It=W*1.5*Math.random();const C=It/(W/4),b=Math.pow(2-C/2,2),X=Math.abs(C/2-2)<.3?.05:1;N=C*C*b*Math.exp(-C/2)*X}while(Math.random()*2>N);const ie=Math.acos(2*Math.random()-1),qt=Math.random()*Math.PI*2,Tt=It*Math.sin(ie)*Math.cos(qt),Ot=It*Math.sin(ie)*Math.sin(qt),ae=It*Math.cos(ie);let zt=!1;if(ut.length<50)for(let C=0;C<Math.min(ut.length,25);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function ct(K,W){const ut=[],wt=W*.06;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N,ie;do{It=W*1.2*Math.random(),N=Math.acos(2*Math.random()-1);const C=It/(W/4),b=Math.pow(Math.cos(N),4),X=Math.abs(Math.cos(N))<.2?.01:1;ie=C*C*Math.exp(-C)*b*X}while(Math.random()*.3>ie);const qt=Math.random()*Math.PI*2,Tt=It*Math.sin(N)*Math.cos(qt),Ot=It*Math.sin(N)*Math.sin(qt),ae=It*Math.cos(N);let zt=!1;if(ut.length<50)for(let C=0;C<Math.min(ut.length,25);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function Mt(K,W){const ut=[],wt=W*.04;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N;do{It=W*1.8*Math.random();const C=It/(W/6),b=Math.pow(27-18*C/3+2*Math.pow(C/3,2),2),X=Math.abs(C-6)<.4||Math.abs(C-12)<.4?.05:1;N=C*C*b*Math.exp(-C/3)*X}while(Math.random()*3>N);const ie=Math.acos(2*Math.random()-1),qt=Math.random()*Math.PI*2,Tt=It*Math.sin(ie)*Math.cos(qt),Ot=It*Math.sin(ie)*Math.sin(qt),ae=It*Math.cos(ie);let zt=!1;if(ut.length<50)for(let C=0;C<Math.min(ut.length,25);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function mt(K,W){const ut=[],wt=W*.04;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N,ie;do{It=W*1.5*Math.random(),N=Math.acos(2*Math.random()-1);const C=It/(W/6),b=Math.pow(Math.cos(N),4),X=Math.abs(Math.cos(N))<.2?.01:1,gt=Math.pow(6-C,2)*Math.pow(C,2),xt=Math.abs(C-6)<.5?.05:1;ie=gt*Math.exp(-C/3)*b*X*xt}while(Math.random()*5>ie);const qt=Math.random()*Math.PI*2,Tt=It*Math.sin(N)*Math.cos(qt),Ot=It*Math.sin(N)*Math.sin(qt),ae=It*Math.cos(N);let zt=!1;if(ut.length<100)for(let C=0;C<Math.min(ut.length,50);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function z(K,W){const ut=[],wt=W*.04;let Wt=0;const Qt=K*3;for(;ut.length<K&&Wt<Qt;){Wt++;let It,N,ie;do{It=W*1.5*Math.random(),N=Math.acos(2*Math.random()-1);const C=It/(W/6),b=Math.pow(3*Math.pow(Math.cos(N),2)-1,2),X=Math.abs(3*Math.pow(Math.cos(N),2)-1)<.3?.05:1;ie=Math.pow(C,4)*Math.exp(-C/3)*b*X}while(Math.random()*10>ie);const qt=Math.random()*Math.PI*2,Tt=It*Math.sin(N)*Math.cos(qt),Ot=It*Math.sin(N)*Math.sin(qt),ae=It*Math.cos(N);let zt=!1;if(ut.length<100)for(let C=0;C<Math.min(ut.length,50);C++){const b=ut[C];if(Math.sqrt(Math.pow(Tt-b.x,2)+Math.pow(Ot-b.y,2)+Math.pow(ae-b.z,2))<wt){zt=!0;break}}zt||ut.push(new tt(Tt,Ot,ae))}return ut}function J(){const K=document.createElement("div");K.style.position="absolute",K.style.top="50%",K.style.left="50%",K.style.transform="translate(-50%, -50%)",K.style.color="rgba(220, 220, 220, 0.9)",K.style.fontSize="20px",K.style.fontFamily="Arial, sans-serif",K.textContent="Loading Iron Atom...",s.current.appendChild(K),i=new jE,r=new fi(75,s.current.clientWidth/s.current.clientHeight,.1,1e3),r.position.set(4,3,3),l=new VR({antialias:!0,alpha:!0,powerPreference:"high-performance"}),l.setSize(s.current.clientWidth,s.current.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(3355443),l.sortObjects=!0,l.setScissorTest(!1),s.current.appendChild(l.domElement);const W=new ib(16777215,.9);i.add(W);const ut=new x0(16777215,.5);ut.position.set(5,10,7.5),i.add(ut);const wt=new x0(16777215,.3);wt.position.set(-5,-5,-7.5),i.add(wt),i.userData.ambientLightColor=W.color.clone(),i.userData.directionalLight1={color:ut.color.clone(),direction:ut.position.clone().normalize()},i.userData.directionalLight2={color:wt.color.clone(),direction:wt.position.clone().normalize()},c=new XR(r,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const Wt=new Xo(.1,32,32),Qt=new _0({color:16777184,emissive:3355392}),It=new hi(Wt,Qt);It.visible=!0,i.add(It);for(const qt in R)f[qt]=Et(qt),i.add(f[qt]);K&&K.parentNode&&K.parentNode.removeChild(K),Y(),P(),At(h);const N=vt(i);window.addEventListener("resize",$);let ie=function(){requestAnimationFrame(ie);const qt=1/60;if(bt(qt),typeof N=="function"&&N(qt),x+=.01*_,D){const Tt=f[h];Tt.material&&Tt.material.uniforms&&(Tt.material.uniforms.u_absorptionStrength?(Tt.material.uniforms.u_absorptionStrength.value=B,Tt.material.uniforms.u_absorptionFrequency.value=H,Tt.material.uniforms.u_absorptionPhase.value=F):(Tt.material.uniforms.u_absorptionStrength={value:B},Tt.material.uniforms.u_absorptionFrequency={value:H},Tt.material.uniforms.u_absorptionPhase={value:F}))}for(const Tt in f)f[Tt].material&&f[Tt].material.uniforms&&f[Tt].material.uniforms.u_opacity.value>.01&&(f[Tt].material.uniforms.u_time.value=x,f[Tt].material.uniforms.viewMatrix.value=r.matrixWorldInverse,f[Tt].material.uniforms.u_cameraPosition.value=r.position,f[Tt].material.uniforms.u_waveHeight&&(f[Tt].material.uniforms.u_waveHeight.value=O),f[Tt].material.uniforms.u_waveFrequency&&(f[Tt].material.uniforms.u_waveFrequency.value=U));c.update(),l.render(i,r)};ie()}function Y(){if(p==="focused"){const K=R[h].shell;for(const W in f)f[W].material&&f[W].material.uniforms&&(W===h?(f[W].material.uniforms.u_opacity.value=1,f[W].material.depthWrite=!0,f[W].material.transparent=!1,f[W].material.needsUpdate=!0):R[W].shell===K?(f[W].material.uniforms.u_opacity.value=m*2,f[W].material.depthWrite=!1,f[W].material.transparent=!0,f[W].material.needsUpdate=!0):(f[W].material.uniforms.u_opacity.value=m,f[W].material.depthWrite=!1,f[W].material.transparent=!0,f[W].material.needsUpdate=!0))}else for(const K in f)f[K].material&&f[K].material.uniforms&&(K===h?(f[K].material.uniforms.u_opacity.value=1,f[K].material.depthWrite=!0,f[K].material.transparent=!1):(f[K].material.uniforms.u_opacity.value=.4,f[K].material.depthWrite=!1,f[K].material.transparent=!0),f[K].material.needsUpdate=!0)}function Ct(){const K=R[h].scale,W=K<.5;if(p==="focused"&&W){for(const ut in f)if(f[ut].material&&f[ut].material.uniforms){const wt=R[ut].scale;if(ut===h)f[ut].material.uniforms.u_opacity.value=1,f[ut].material.uniforms.u_particleScale.value=R[ut].particleScale*1.8,f[ut].material.uniforms.u_cameraCullDistance.value=.3;else{const Wt=wt/K,Qt=m/(Wt*Wt);f[ut].material.uniforms.u_opacity.value=Math.max(.01,Qt),f[ut].material.uniforms.u_cameraCullDistance.value=1,f[ut].material.uniforms.u_depthCullDistance.value=K*2}f[ut].material.needsUpdate=!0}}}function P(){const K=t.current;K.innerHTML="",K.className="glass",K.style.padding="20px",K.style.borderRadius="12px",K.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)",K.style.width="320px",K.style.color="rgba(220, 220, 220, 0.9)",K.style.maxHeight="90vh",K.style.overflowY="auto";const W=document.createElement("h3");W.textContent="Iron (Fe) Orbitals",W.style.margin="0 0 15px 0",W.style.textAlign="center",K.appendChild(W);const ut=document.createElement("div");ut.className="glass",ut.style.padding="10px",ut.style.borderRadius="8px",ut.style.backgroundColor="rgba(50, 50, 50, 0.8)",ut.style.marginBottom="15px";const wt=document.createElement("button");wt.textContent=p==="focused"?"Mode: Focused Shell":"Mode: Show All",wt.style.width="100%",wt.style.padding="8px",wt.style.backgroundColor="rgba(70, 70, 100, 0.8)",wt.style.border="1px solid rgba(100, 100, 150, 0.8)",wt.style.borderRadius="4px",wt.style.color="rgba(220, 220, 220, 0.9)",wt.style.cursor="pointer",wt.onclick=()=>{p=p==="focused"?"all":"focused",wt.textContent=p==="focused"?"Mode: Focused Shell":"Mode: Show All",Y()},ut.appendChild(wt);const Wt=document.createElement("button");Wt.textContent="Performance: Normal",Wt.style.width="100%",Wt.style.padding="8px",Wt.style.backgroundColor="rgba(70, 70, 70, 0.8)",Wt.style.border="1px solid rgba(100, 100, 100, 0.8)",Wt.style.borderRadius="4px",Wt.style.color="rgba(220, 220, 220, 0.9)",Wt.style.cursor="pointer",Wt.style.marginTop="10px",Wt.onclick=()=>{if(g=g==="normal"?"low":"normal",Wt.textContent=g==="normal"?"Performance: Normal":"Performance: Low",!R["1s"].originalParticleCount)for(const Pt in R)R[Pt].originalParticleCount=R[Pt].particleCount;const Vt=g==="low"?.5:1;for(const Pt in f)if(f[Pt]){i.remove(f[Pt]),f[Pt].geometry.dispose(),f[Pt].material.dispose();const Ut=R[Pt],te=Pt==="1s"?2e3:3e3;Ut.particleCount=Math.max(te,Math.floor(Ut.originalParticleCount*Vt)),f[Pt]=Et(Pt),i.add(f[Pt])}Y()},ut.appendChild(Wt),K.appendChild(ut);const Qt=document.createElement("div");Qt.style.marginBottom="15px";const It={K:["1s"],L:["2s","2p1/2","2p3/2"],M:["3s","3p","3d"]};for(const[Vt,Pt]of Object.entries(It)){const Ut=document.createElement("div");Ut.style.marginBottom="10px",Ut.style.borderRadius="4px",Ut.style.overflow="hidden";const te=document.createElement("div");te.style.padding="8px",te.style.backgroundColor="rgba(60, 60, 60, 0.8)",te.style.cursor="pointer",te.style.fontWeight="bold",te.textContent=`${Vt}-shell`;const $t=document.createElement("div");$t.style.display="none",$t.style.backgroundColor="rgba(40, 40, 40, 0.8)",te.onclick=()=>{$t.style.display=$t.style.display==="none"?"block":"none"},Pt.forEach(de=>{const G=document.createElement("div");G.style.padding="8px 15px",G.style.cursor="pointer",G.style.display="flex",G.style.alignItems="center",G.style.justifyContent="space-between",G.className="orbital-btn";const Bt=document.createElement("span");Bt.textContent=R[de].name;const st=document.createElement("span");st.style.fontSize="12px",st.style.color="rgba(150, 150, 150, 0.9)",st.textContent=`${R[de].energy} eV`,G.appendChild(Bt),G.appendChild(st),G.onclick=()=>{At(de),document.querySelectorAll(".orbital-btn").forEach(dt=>{dt.style.backgroundColor=""}),G.style.backgroundColor="rgba(70, 70, 100, 0.8)"},de===h&&(G.style.backgroundColor="rgba(70, 70, 100, 0.8)",$t.style.display="block"),$t.appendChild(G)}),Ut.appendChild(te),Ut.appendChild($t),Qt.appendChild(Ut)}K.appendChild(Qt);const N=document.createElement("div");N.className="glass",N.style.padding="15px",N.style.borderRadius="8px",N.style.backgroundColor="rgba(50, 50, 50, 0.8)",N.style.marginBottom="15px";const ie=document.createElement("label");ie.textContent="Secondary Opacity:",ie.style.fontWeight="bold",ie.style.display="block",ie.style.marginBottom="10px";const qt=document.createElement("input");qt.type="range",qt.min="0",qt.max="30",qt.value="5",qt.style.width="100%",qt.style.accentColor="rgb(220, 40, 40)";const Tt=document.createElement("span");Tt.style.fontSize="12px",Tt.textContent="5%",qt.oninput=Vt=>{m=Vt.target.value/100,Tt.textContent=`${Vt.target.value}%`,Y()},N.appendChild(ie),N.appendChild(qt),N.appendChild(Tt),K.appendChild(N);const Ot=document.createElement("div");Ot.className="glass",Ot.style.padding="15px",Ot.style.borderRadius="8px",Ot.style.backgroundColor="rgba(50, 50, 50, 0.8)",Ot.style.marginBottom="15px";const ae=document.createElement("label");ae.textContent="Photon Energy:",ae.style.fontWeight="bold",ae.style.display="block",ae.style.marginBottom="10px";const zt=document.createElement("input");zt.type="number",zt.id="photonEnergyInput",zt.value="100",zt.style.width="60%",zt.style.padding="4px",zt.style.marginRight="5px";const C=document.createElement("span");C.textContent="eV";const b=document.createElement("div");b.style.backgroundColor="rgba(40, 40, 40, 0.8)",b.style.padding="5px",b.style.borderRadius="4px",b.style.marginTop="10px",b.style.fontSize="13px",b.style.color="rgba(200, 200, 200, 0.8)",b.id="photonEnergyDisplay",b.textContent=`Wavelength: ${(1239.84/100).toFixed(2)} nm`,zt.oninput=Vt=>{const Pt=parseFloat(Vt.target.value)||100;nt(Pt),b.textContent=`Wavelength: ${(1239.84/Pt).toFixed(2)} nm`},Ot.appendChild(ae),Ot.appendChild(zt),Ot.appendChild(C),Ot.appendChild(b);const X=document.createElement("div");X.style.marginTop="10px",X.style.display="grid",X.style.gridTemplateColumns="1fr 1fr",X.style.gap="5px",[{name:"K-edge",energy:7112},{name:"L₃-edge",energy:707},{name:"L₂-edge",energy:720},{name:"M-edge",energy:92}].forEach(Vt=>{const Pt=document.createElement("button");Pt.textContent=Vt.name,Pt.style.padding="5px",Pt.style.fontSize="12px",Pt.style.backgroundColor="rgba(70, 70, 70, 0.8)",Pt.style.border="1px solid rgba(100, 100, 100, 0.8)",Pt.style.borderRadius="4px",Pt.style.color="rgba(220, 220, 220, 0.9)",Pt.style.cursor="pointer",Pt.onclick=()=>{zt.value=Vt.energy,nt(Vt.energy),b.textContent=`Wavelength: ${(1239.84/Vt.energy).toFixed(2)} nm`;for(const[Ut,te]of Object.entries(R))if(Math.abs(te.energy-Vt.energy)<10){At(Ut),document.querySelectorAll(".orbital-btn").forEach($t=>{$t.style.backgroundColor=""}),document.querySelectorAll(".orbital-btn").forEach($t=>{$t.querySelector("span").textContent===te.name&&($t.style.backgroundColor="rgba(70, 70, 100, 0.8)")});break}},X.appendChild(Pt)}),Ot.appendChild(X),K.appendChild(Ot);const xt=document.createElement("div");xt.className="glass",xt.style.padding="15px",xt.style.borderRadius="8px",xt.style.backgroundColor="rgba(50, 50, 50, 0.8)",xt.style.marginBottom="15px";const ht=document.createElement("label");ht.textContent="Cross-Section View:",ht.style.fontWeight="bold",ht.style.display="block",ht.style.marginBottom="10px";const Ft=document.createElement("input");Ft.type="range",Ft.id="crossSectionSlider",Ft.min="0",Ft.max="10",Ft.value="10",Ft.step="0.1",Ft.style.width="100%",Ft.style.accentColor="rgb(220, 40, 40)",Ft.addEventListener("input",Vt=>{const Pt=parseFloat(Vt.target.value);for(const Ut in f)f[Ut].material&&f[Ut].material.uniforms&&(f[Ut].material.uniforms.u_crossSectionX.value=Pt)}),xt.appendChild(ht),xt.appendChild(Ft);const Dt=document.createElement("div");Dt.style.display="flex",Dt.style.justifyContent="space-between",Dt.style.fontSize="12px",Dt.innerHTML="<span>50%</span><span>75%</span><span>100%</span>",xt.appendChild(Dt),K.appendChild(xt);const Nt=document.createElement("button");Nt.id="waveTypeToggleBtn",Nt.textContent="Wave Type: Point",Nt.className="w-full p-2 rounded border transition-all",Nt.style.backgroundColor="rgba(50, 50, 50, 0.8)",Nt.style.borderColor="rgba(80, 80, 80, 0.8)",Nt.style.color="rgba(220, 220, 220, 0.9)",Nt.style.fontSize="14px",Nt.style.margin="10px 0",Nt.addEventListener("click",()=>{S==="linear"?(S="circular",Nt.textContent="Wave Type: Circular",Nt.style.backgroundColor="rgba(70, 70, 100, 0.8)"):(S="linear",Nt.textContent="Wave Type: Point",Nt.style.backgroundColor="rgba(50, 50, 50, 0.8)")});const Kt=document.createElement("div");Kt.style.marginTop="10px",Kt.appendChild(Nt),K.appendChild(Kt);const Rt=document.createElement("div");Rt.style.marginTop="15px";const Ht=document.createElement("button");Ht.id="emitWaveBtn",Ht.textContent="Emit Photon Wave",Ht.className="w-full p-2 rounded border transition-all hover:bg-opacity-90",Ht.style.backgroundColor="rgb(220, 40, 40)",Ht.style.borderColor="rgb(220, 40, 40)",Ht.style.color="rgba(220, 220, 220, 0.9)",Rt.appendChild(Ht),K.appendChild(Rt)}function nt(K){K>5e3?T=.15:K>500?T=.3+(5e3-K)/1e4:K>50?T=.5+(500-K)/500:T=1+(50-K)/50,T*=.8}function Et(K){const W=R[K],ut=W.scale,wt=W.generatePoints(W.particleCount||y,ut),Wt=new Xo(v,6,4),Qt=K===h,It=new ha({vertexShader:q,fragmentShader:L,transparent:!Qt,depthWrite:Qt,depthTest:!0,blending:Cr,side:Di,uniforms:{baseColor:{value:new be(W.color)},lowDensityColor:{value:new be(W.lowDensityColor)},midDensityColor:{value:new be(W.midDensityColor)},highDensityColor:{value:new be(W.highDensityColor)},ambientLightColor:{value:i.userData.ambientLightColor},directionalLightColor1:{value:i.userData.directionalLight1.color},directionalLightDirection1:{value:i.userData.directionalLight1.direction},directionalLightColor2:{value:i.userData.directionalLight2.color},directionalLightDirection2:{value:i.userData.directionalLight2.direction},orbitalScale:{value:ut},u_time:{value:0},u_maxSpeedAtCenter:{value:10},u_minSpeedAtEdge:{value:.005},u_exponentialFalloffRate:{value:5},u_crossSectionX:{value:10},viewMatrix:{value:r.matrixWorldInverse},u_waveHeight:{value:O},u_waveFrequency:{value:U},u_absorptionStrength:{value:0},u_absorptionFrequency:{value:.3},u_opacity:{value:.05},u_absorptionPhase:{value:0},u_particleScale:{value:W.particleScale||1},u_isWireframe:{value:!1},u_cameraPosition:{value:r.position},u_cameraCullDistance:{value:.5},u_depthCullDistance:{value:ut*1.5}}}),N=new g0(Wt,It,wt.length);N.renderOrder=W.renderOrder||0;const ie=new Float32Array(wt.length);for(let Tt=0;Tt<wt.length;Tt++)ie[Tt]=Math.random()*Math.PI*2;N.geometry.setAttribute("a_initialPhase",new $c(ie,1));const qt=new En;for(let Tt=0;Tt<wt.length;Tt++)qt.position.set(wt[Tt].x,wt[Tt].y,wt[Tt].z),qt.updateMatrix(),N.setMatrixAt(Tt,qt.matrix);return N.instanceMatrix.needsUpdate=!0,N}function At(K){for(const W in f)if(f[W])if(p==="focused")if(W===K){f[W].visible=!0,f[W].material.uniforms.u_opacity.value=1,f[W].material.depthWrite=!0,f[W].material.transparent=!1,f[W].material.needsUpdate=!0;const ut=1.3;f[W].material.uniforms.directionalLightColor1.value=i.userData.directionalLight1.color.clone().multiplyScalar(ut),f[W].material.uniforms.directionalLightColor2.value=i.userData.directionalLight2.color.clone().multiplyScalar(ut)}else f[W].visible=!0,f[W].material.uniforms.u_opacity.value=m,f[W].material.depthWrite=!1,f[W].material.transparent=!0,f[W].material.needsUpdate=!0,f[W].material.uniforms.directionalLightColor1.value.copy(i.userData.directionalLight1.color),f[W].material.uniforms.directionalLightColor2.value.copy(i.userData.directionalLight2.color);else f[W].visible=!0,W===K?(f[W].material.uniforms.u_opacity.value=1,f[W].material.depthWrite=!0,f[W].material.transparent=!1):(f[W].material.uniforms.u_opacity.value=.4,f[W].material.depthWrite=!1,f[W].material.transparent=!0),f[W].material.needsUpdate=!0,f[W].material.uniforms.directionalLightColor1.value.copy(i.userData.directionalLight1.color),f[W].material.uniforms.directionalLightColor2.value.copy(i.userData.directionalLight2.color);if(h=K,R[K].cameraPosition){let W=function(){const It=performance.now()-Qt,N=Math.min(It/Wt,1),ie=1-Math.pow(1-N,3);r.position.lerpVectors(wt,ut,ie),N<1&&requestAnimationFrame(W)};const ut=R[K].cameraPosition,wt=r.position.clone(),Wt=1e3,Qt=performance.now();W()}Ct()}function $(){s.current&&(r.aspect=s.current.clientWidth/s.current.clientHeight,r.updateProjectionMatrix(),l.setSize(s.current.clientWidth,s.current.clientHeight))}function vt(K){const W={waveSpeed:1.8,waveHeight:1.5,waveFrequency:.3,wavelength:T};let ut=!1,wt=0,Wt=-8,Qt=!1,It=0;const N=80,ie=.15,qt=N*N,Tt=new be(49151),Ot=.3,ae=0,zt=new Xo(.12,8,6),C=new _0({color:Tt,emissive:Tt.clone().multiplyScalar(.3),transparent:!0,opacity:.8}),b=new g0(zt,C,qt);b.visible=!0,K.add(b),b.instanceColor=new $c(new Float32Array(qt*3),3);const X=new En,gt=0;for(let Dt=0;Dt<N;Dt++)for(let Nt=0;Nt<N;Nt++){const Kt=Dt*N+Nt,Rt=(Dt-N/2)*ie,Ht=(Nt-N/2)*ie+gt;X.position.set(Rt,ae,Ht),X.scale.set(Ot,Ot,Ot),X.updateMatrix(),b.setMatrixAt(Kt,X.matrix),b.setColorAt(Kt,Tt)}b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0;function xt(){ut=!0,Qt=!1,wt=0,It=0,Wt=-8,D=!1,B=0;const Dt=document.getElementById("photonEnergyInput"),Nt=parseFloat(Dt.value)||100;nt(Nt),W.wavelength=T,W.waveFrequency=1/T}function ht(Dt){if(ut&&!Qt){wt+=Dt*W.waveSpeed*.5,Wt+=Dt*W.waveSpeed*1.2,Wt>25&&(ut=!1);const Nt=R[h].scale,Kt=Math.abs(Wt);if(Kt<Nt*1.5){const Rt=document.getElementById("photonEnergyInput"),Ht=parseFloat(Rt.value)||100,Vt=R[h].energy,Pt=Math.abs(Ht-Vt)/Vt,Ut=Math.exp(-Math.pow(Pt,2)*5),te=Kt/(Nt*1.5),de=Math.pow(1-Math.min(te,1),2)*Ut*.8;B=B*.95+de*.05,Ut>.5&&Kt<Nt*.8&&B>.3?Qt||(Qt=!0,It=0,D=!0,H=.8/T,F=wt*6.28):B>.01&&(D=!0,H=.8/T,F=wt*6.28)}else B*=.96,B<.01&&(D=!1,B=0)}Qt&&(It+=Dt);for(let Nt=0;Nt<N;Nt++)for(let Kt=0;Kt<N;Kt++){const Rt=Nt*N+Kt,Ht=(Nt-N/2)*ie,Vt=(Kt-N/2)*ie+gt;let Pt=Math.sin(x*.3+Ht*.1+Vt*.1)*.01,Ut=.4;if(ut&&!Qt)if(S==="linear"){const de=Ht-Wt,G=Vt,Bt=Math.sqrt(de*de+G*G),st=5*T,dt=10*T;if(Bt<dt&&Bt<st){const kt=1-Bt/st,Gt=W.waveHeight*T*Math.pow(kt,2);Gt>Pt&&(Pt=Gt,Ut=.4+Math.min(.6,Pt/(W.waveHeight*T)*.6))}}else{const Bt=Math.abs(-8-Wt)*.8,st=Ht- -8,dt=Vt-0,kt=Math.sqrt(st*st+dt*dt),Gt=Math.atan2(dt,st),le=Math.min(1,Bt/15),we=Math.PI*.05+Math.PI*.08*le;if(Math.abs(Gt)<=we){const Te=(.5+1.3*le)*T,wn=Math.abs(kt-Bt);if(wn<Te&&Bt>.1){const sn=1-wn/Te,nn=Math.max(.3,1/(1+Bt*.05)),fn=Math.cos(Gt/we*(Math.PI/2))*Math.cos(Gt/we*(Math.PI/2)),bn=W.waveHeight*T*Math.pow(sn,2)*nn*Math.pow(fn,2)*le;bn>Pt&&(Pt=bn,Ut=.4+Math.min(.6,Pt/(W.waveHeight*T)*.6))}}}if(Qt&&B>.1){const de=Math.sqrt(Ht*Ht+Vt*Vt),G=T*1.1,st=It*1.2*2,dt=Math.abs(de-st),kt=G*1.5;if(dt<kt&&st<20){const Gt=1-dt/kt,le=Math.max(.3,1/(1+st*.1)),we=Math.pow(Gt,1.5)*B*le,Ye=W.waveHeight*.6*we;Ye>Pt&&(Pt=Ye,Ut=.5+Math.min(.5,we*.8))}}X.position.set(Ht,Pt,Vt);const te=Ot+Pt*.7;X.scale.set(te,te,te),X.updateMatrix(),b.setMatrixAt(Rt,X.matrix);const $t=Tt.clone().multiplyScalar(Ut);b.setColorAt(Rt,$t)}Qt&&It>10&&(ut=!1,Qt=!1,B=0,D=!1),b.instanceMatrix.needsUpdate=!0,b.instanceColor.needsUpdate=!0}const Ft=document.getElementById("emitWaveBtn");return Ft&&Ft.addEventListener("click",xt),ht}function bt(K){for(let W=E.length-1;W>=0;W--){const ut=E[W];if(ut.material&&ut.material.uniforms){const wt=performance.now()*.001-ut.userData.startTime;ut.material.uniforms.time.value=wt;const Wt=.3;ut.position.x+=Wt*K,ut.userData.totalDistance+=Wt*K;const Qt=ut.userData.wavelength*1.2;ut.userData.totalDistance>Qt&&(i.remove(ut),E.splice(W,1))}}}return J(),()=>{window.removeEventListener("resize",$),l&&(l.dispose(),s.current&&s.current.contains(l.domElement)&&s.current.removeChild(l.domElement))}},[]),he.jsxs("div",{className:"quantum-container",style:{position:"relative",width:"100%",height:"100vh"},children:[he.jsx("div",{ref:s,className:"renderer-container",style:{width:"100%",height:"100%"}}),he.jsx("div",{ref:t,className:"gui-container",style:{position:"absolute",top:"20px",left:"20px",zIndex:10,backgroundColor:"rgba(40,40,40,0.85)",padding:"15px",width:"280px"}})]})}function aC(){return he.jsx(yM,{children:he.jsxs(ZS,{children:[he.jsx(jh,{path:"/",element:he.jsx(DM,{})}),he.jsx(jh,{path:"/atom",element:he.jsx(iC,{})})]})})}iS.createRoot(document.getElementById("root")).render(he.jsx(Zx.StrictMode,{children:he.jsx(aC,{})}));
