(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Z0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var lh={exports:{}},zo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function qx(){if(R_)return zo;R_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return zo.Fragment=t,zo.jsx=i,zo.jsxs=i,zo}var C_;function Yx(){return C_||(C_=1,lh.exports=qx()),lh.exports}var ue=Yx(),ch={exports:{}},de={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function jx(){if(w_)return de;w_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),y=Symbol.iterator;function v(P){return P===null||typeof P!="object"?null:(P=y&&P[y]||P["@@iterator"],typeof P=="function"?P:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,T={};function S(P,at,Ct){this.props=P,this.context=at,this.refs=T,this.updater=Ct||x}S.prototype.isReactComponent={},S.prototype.setState=function(P,at){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,at,"setState")},S.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(P,at,Ct){this.props=P,this.context=at,this.refs=T,this.updater=Ct||x}var L=O.prototype=new _;L.constructor=O,b(L,S.prototype),L.isPureReactComponent=!0;var D=Array.isArray,B={H:null,A:null,T:null,S:null,V:null},V=Object.prototype.hasOwnProperty;function F(P,at,Ct,Lt,tt,Et){return Ct=Et.ref,{$$typeof:s,type:P,key:at,ref:Ct!==void 0?Ct:null,props:Et}}function q(P,at){return F(P.type,at,void 0,void 0,void 0,P.props)}function N(P){return typeof P=="object"&&P!==null&&P.$$typeof===s}function R(P){var at={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(Ct){return at[Ct]})}var G=/\/+/g;function pt(P,at){return typeof P=="object"&&P!==null&&P.key!=null?R(""+P.key):at.toString(36)}function ht(){}function At(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(ht,ht):(P.status="pending",P.then(function(at){P.status==="pending"&&(P.status="fulfilled",P.value=at)},function(at){P.status==="pending"&&(P.status="rejected",P.reason=at)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function yt(P,at,Ct,Lt,tt){var Et=typeof P;(Et==="undefined"||Et==="boolean")&&(P=null);var wt=!1;if(P===null)wt=!0;else switch(Et){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(P.$$typeof){case s:case t:wt=!0;break;case g:return wt=P._init,yt(wt(P._payload),at,Ct,Lt,tt)}}if(wt)return tt=tt(P),wt=Lt===""?"."+pt(P,0):Lt,D(tt)?(Ct="",wt!=null&&(Ct=wt.replace(G,"$&/")+"/"),yt(tt,at,Ct,"",function(fe){return fe})):tt!=null&&(N(tt)&&(tt=q(tt,Ct+(tt.key==null||P&&P.key===tt.key?"":(""+tt.key).replace(G,"$&/")+"/")+wt)),at.push(tt)),1;wt=0;var Vt=Lt===""?".":Lt+":";if(D(P))for(var kt=0;kt<P.length;kt++)Lt=P[kt],Et=Vt+pt(Lt,kt),wt+=yt(Lt,at,Ct,Et,tt);else if(kt=v(P),typeof kt=="function")for(P=kt.call(P),kt=0;!(Lt=P.next()).done;)Lt=Lt.value,Et=Vt+pt(Lt,kt++),wt+=yt(Lt,at,Ct,Et,tt);else if(Et==="object"){if(typeof P.then=="function")return yt(At(P),at,Ct,Lt,tt);throw at=String(P),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return wt}function I(P,at,Ct){if(P==null)return P;var Lt=[],tt=0;return yt(P,Lt,"","",function(Et){return at.call(Ct,Et,tt++)}),Lt}function Q(P){if(P._status===-1){var at=P._result;at=at(),at.then(function(Ct){(P._status===0||P._status===-1)&&(P._status=1,P._result=Ct)},function(Ct){(P._status===0||P._status===-1)&&(P._status=2,P._result=Ct)}),P._status===-1&&(P._status=0,P._result=at)}if(P._status===1)return P._result.default;throw P._result}var j=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Nt(){}return de.Children={map:I,forEach:function(P,at,Ct){I(P,function(){at.apply(this,arguments)},Ct)},count:function(P){var at=0;return I(P,function(){at++}),at},toArray:function(P){return I(P,function(at){return at})||[]},only:function(P){if(!N(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},de.Component=S,de.Fragment=i,de.Profiler=l,de.PureComponent=O,de.StrictMode=r,de.Suspense=p,de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,de.__COMPILER_RUNTIME={__proto__:null,c:function(P){return B.H.useMemoCache(P)}},de.cache=function(P){return function(){return P.apply(null,arguments)}},de.cloneElement=function(P,at,Ct){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var Lt=b({},P.props),tt=P.key,Et=void 0;if(at!=null)for(wt in at.ref!==void 0&&(Et=void 0),at.key!==void 0&&(tt=""+at.key),at)!V.call(at,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&at.ref===void 0||(Lt[wt]=at[wt]);var wt=arguments.length-2;if(wt===1)Lt.children=Ct;else if(1<wt){for(var Vt=Array(wt),kt=0;kt<wt;kt++)Vt[kt]=arguments[kt+2];Lt.children=Vt}return F(P.type,tt,void 0,void 0,Et,Lt)},de.createContext=function(P){return P={$$typeof:f,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:c,_context:P},P},de.createElement=function(P,at,Ct){var Lt,tt={},Et=null;if(at!=null)for(Lt in at.key!==void 0&&(Et=""+at.key),at)V.call(at,Lt)&&Lt!=="key"&&Lt!=="__self"&&Lt!=="__source"&&(tt[Lt]=at[Lt]);var wt=arguments.length-2;if(wt===1)tt.children=Ct;else if(1<wt){for(var Vt=Array(wt),kt=0;kt<wt;kt++)Vt[kt]=arguments[kt+2];tt.children=Vt}if(P&&P.defaultProps)for(Lt in wt=P.defaultProps,wt)tt[Lt]===void 0&&(tt[Lt]=wt[Lt]);return F(P,Et,void 0,void 0,null,tt)},de.createRef=function(){return{current:null}},de.forwardRef=function(P){return{$$typeof:h,render:P}},de.isValidElement=N,de.lazy=function(P){return{$$typeof:g,_payload:{_status:-1,_result:P},_init:Q}},de.memo=function(P,at){return{$$typeof:m,type:P,compare:at===void 0?null:at}},de.startTransition=function(P){var at=B.T,Ct={};B.T=Ct;try{var Lt=P(),tt=B.S;tt!==null&&tt(Ct,Lt),typeof Lt=="object"&&Lt!==null&&typeof Lt.then=="function"&&Lt.then(Nt,j)}catch(Et){j(Et)}finally{B.T=at}},de.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},de.use=function(P){return B.H.use(P)},de.useActionState=function(P,at,Ct){return B.H.useActionState(P,at,Ct)},de.useCallback=function(P,at){return B.H.useCallback(P,at)},de.useContext=function(P){return B.H.useContext(P)},de.useDebugValue=function(){},de.useDeferredValue=function(P,at){return B.H.useDeferredValue(P,at)},de.useEffect=function(P,at,Ct){var Lt=B.H;if(typeof Ct=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Lt.useEffect(P,at)},de.useId=function(){return B.H.useId()},de.useImperativeHandle=function(P,at,Ct){return B.H.useImperativeHandle(P,at,Ct)},de.useInsertionEffect=function(P,at){return B.H.useInsertionEffect(P,at)},de.useLayoutEffect=function(P,at){return B.H.useLayoutEffect(P,at)},de.useMemo=function(P,at){return B.H.useMemo(P,at)},de.useOptimistic=function(P,at){return B.H.useOptimistic(P,at)},de.useReducer=function(P,at,Ct){return B.H.useReducer(P,at,Ct)},de.useRef=function(P){return B.H.useRef(P)},de.useState=function(P){return B.H.useState(P)},de.useSyncExternalStore=function(P,at,Ct){return B.H.useSyncExternalStore(P,at,Ct)},de.useTransition=function(){return B.H.useTransition()},de.version="19.1.0",de}var D_;function Id(){return D_||(D_=1,ch.exports=jx()),ch.exports}var Tt=Id();const Zx=Z0(Tt);var uh={exports:{}},Io={},fh={exports:{}},hh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var U_;function Kx(){return U_||(U_=1,function(s){function t(I,Q){var j=I.length;I.push(Q);t:for(;0<j;){var Nt=j-1>>>1,P=I[Nt];if(0<l(P,Q))I[Nt]=Q,I[j]=P,j=Nt;else break t}}function i(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var Q=I[0],j=I.pop();if(j!==Q){I[0]=j;t:for(var Nt=0,P=I.length,at=P>>>1;Nt<at;){var Ct=2*(Nt+1)-1,Lt=I[Ct],tt=Ct+1,Et=I[tt];if(0>l(Lt,j))tt<P&&0>l(Et,Lt)?(I[Nt]=Et,I[tt]=j,Nt=tt):(I[Nt]=Lt,I[Ct]=j,Nt=Ct);else if(tt<P&&0>l(Et,j))I[Nt]=Et,I[tt]=j,Nt=tt;else break t}}return Q}function l(I,Q){var j=I.sortIndex-Q.sortIndex;return j!==0?j:I.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var p=[],m=[],g=1,y=null,v=3,x=!1,b=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function D(I){for(var Q=i(m);Q!==null;){if(Q.callback===null)r(m);else if(Q.startTime<=I)r(m),Q.sortIndex=Q.expirationTime,t(p,Q);else break;Q=i(m)}}function B(I){if(T=!1,D(I),!b)if(i(p)!==null)b=!0,V||(V=!0,pt());else{var Q=i(m);Q!==null&&yt(B,Q.startTime-I)}}var V=!1,F=-1,q=5,N=-1;function R(){return S?!0:!(s.unstable_now()-N<q)}function G(){if(S=!1,V){var I=s.unstable_now();N=I;var Q=!0;try{t:{b=!1,T&&(T=!1,O(F),F=-1),x=!0;var j=v;try{e:{for(D(I),y=i(p);y!==null&&!(y.expirationTime>I&&R());){var Nt=y.callback;if(typeof Nt=="function"){y.callback=null,v=y.priorityLevel;var P=Nt(y.expirationTime<=I);if(I=s.unstable_now(),typeof P=="function"){y.callback=P,D(I),Q=!0;break e}y===i(p)&&r(p),D(I)}else r(p);y=i(p)}if(y!==null)Q=!0;else{var at=i(m);at!==null&&yt(B,at.startTime-I),Q=!1}}break t}finally{y=null,v=j,x=!1}Q=void 0}}finally{Q?pt():V=!1}}}var pt;if(typeof L=="function")pt=function(){L(G)};else if(typeof MessageChannel<"u"){var ht=new MessageChannel,At=ht.port2;ht.port1.onmessage=G,pt=function(){At.postMessage(null)}}else pt=function(){_(G,0)};function yt(I,Q){F=_(function(){I(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_next=function(I){switch(v){case 1:case 2:case 3:var Q=3;break;default:Q=v}var j=v;v=Q;try{return I()}finally{v=j}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(I,Q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var j=v;v=I;try{return Q()}finally{v=j}},s.unstable_scheduleCallback=function(I,Q,j){var Nt=s.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?Nt+j:Nt):j=Nt,I){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=j+P,I={id:g++,callback:Q,priorityLevel:I,startTime:j,expirationTime:P,sortIndex:-1},j>Nt?(I.sortIndex=j,t(m,I),i(p)===null&&I===i(m)&&(T?(O(F),F=-1):T=!0,yt(B,j-Nt))):(I.sortIndex=P,t(p,I),b||x||(b=!0,V||(V=!0,pt()))),I},s.unstable_shouldYield=R,s.unstable_wrapCallback=function(I){var Q=v;return function(){var j=v;v=Q;try{return I.apply(this,arguments)}finally{v=j}}}}(hh)),hh}var L_;function Qx(){return L_||(L_=1,fh.exports=Kx()),fh.exports}var dh={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_;function Jx(){if(N_)return Pn;N_=1;var s=Id();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var y=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:y==null?null:""+y,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Pn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Pn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Pn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Pn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin),v=typeof m.integrity=="string"?m.integrity:void 0,x=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:y,integrity:v,fetchPriority:x}):g==="script"&&r.d.X(p,{crossOrigin:y,integrity:v,fetchPriority:x,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=h(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Pn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,y=h(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:y,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=h(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Pn.requestFormReset=function(p){r.d.r(p)},Pn.unstable_batchedUpdates=function(p,m){return p(m)},Pn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.1.0",Pn}var P_;function $x(){if(P_)return dh.exports;P_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),dh.exports=Jx(),dh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O_;function tS(){if(O_)return Io;O_=1;var s=Qx(),t=Id(),i=$x();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(c(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return h(u),e;if(d===o)return h(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var M=!1,A=u.child;A;){if(A===a){M=!0,a=u,o=d;break}if(A===o){M=!0,o=u,a=d;break}A=A.sibling}if(!M){for(A=d.child;A;){if(A===a){M=!0,a=d,o=u;break}if(A===o){M=!0,o=d,a=u;break}A=A.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),v=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),N=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function pt(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var ht=Symbol.for("react.client.reference");function At(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ht?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Profiler";case T:return"StrictMode";case B:return"Suspense";case V:return"SuspenseList";case N:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x:return"Portal";case L:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:At(e.type)||"Memo";case q:n=e._payload,e=e._init;try{return At(e(n))}catch{}}return null}var yt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},Nt=[],P=-1;function at(e){return{current:e}}function Ct(e){0>P||(e.current=Nt[P],Nt[P]=null,P--)}function Lt(e,n){P++,Nt[P]=e.current,e.current=n}var tt=at(null),Et=at(null),wt=at(null),Vt=at(null);function kt(e,n){switch(Lt(wt,n),Lt(Et,e),Lt(tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?e_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=e_(n),e=n_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ct(tt),Lt(tt,e)}function fe(){Ct(tt),Ct(Et),Ct(wt)}function re(e){e.memoizedState!==null&&Lt(Vt,e);var n=tt.current,a=n_(n,e.type);n!==a&&(Lt(Et,e),Lt(tt,a))}function Ie(e){Et.current===e&&(Ct(tt),Ct(Et)),Vt.current===e&&(Ct(Vt),Uo._currentValue=j)}var mt=Object.prototype.hasOwnProperty,$=s.unstable_scheduleCallback,U=s.unstable_cancelCallback,Dt=s.unstable_shouldYield,Pt=s.unstable_requestPaint,zt=s.unstable_now,xt=s.unstable_getCurrentPriorityLevel,Ft=s.unstable_ImmediatePriority,Ut=s.unstable_UserBlockingPriority,w=s.unstable_NormalPriority,E=s.unstable_LowPriority,H=s.unstable_IdlePriority,nt=s.log,dt=s.unstable_setDisableYieldValue,rt=null,St=null;function X(e){if(typeof nt=="function"&&dt(e),St&&typeof St.setStrictMode=="function")try{St.setStrictMode(rt,e)}catch{}}var ft=Math.clz32?Math.clz32:Wt,gt=Math.log,bt=Math.LN2;function Wt(e){return e>>>=0,e===0?32:31-(gt(e)/bt|0)|0}var $t=256,jt=4194304;function Ht(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Jt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,d=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=Ht(o):(M&=A,M!==0?u=Ht(M):a||(a=A&~e,a!==0&&(u=Ht(a))))):(A=o&~d,A!==0?u=Ht(A):M!==0?u=Ht(M):a||(a=o&~e,a!==0&&(u=Ht(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function Kt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function he(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function W(){var e=$t;return $t<<=1,($t&4194048)===0&&($t=256),e}function Gt(){var e=jt;return jt<<=1,(jt&62914560)===0&&(jt=4194304),e}function st(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function _t(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function It(e,n,a,o,u,d){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,z=e.expirationTimes,it=e.hiddenUpdates;for(a=M&~a;0<a;){var vt=31-ft(a),Rt=1<<vt;A[vt]=0,z[vt]=-1;var ot=it[vt];if(ot!==null)for(it[vt]=null,vt=0;vt<ot.length;vt++){var lt=ot[vt];lt!==null&&(lt.lane&=-536870913)}a&=~Rt}o!==0&&Bt(e,o,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(M&~n))}function Bt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ft(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function te(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ft(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ye(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:S_(e.type))}function dn(e,n){var a=Q.p;try{return Q.p=e,n()}finally{Q.p=a}}var en=Math.random().toString(36).slice(2),Ze="__reactFiber$"+en,qe="__reactProps$"+en,xe="__reactContainer$"+en,An="__reactEvents$"+en,si="__reactListeners$"+en,yi="__reactHandles$"+en,xi="__reactResources$"+en,Yn="__reactMarker$"+en;function jn(e){delete e[Ze],delete e[qe],delete e[An],delete e[si],delete e[yi]}function Si(e){var n=e[Ze];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xe]||a[Ze]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=s_(e);e!==null;){if(a=e[Ze])return a;e=s_(e)}return n}e=a,a=e.parentNode}return null}function Zn(e){if(e=e[Ze]||e[xe]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ni(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function Mi(e){var n=e[xi];return n||(n=e[xi]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[Yn]=!0}var Fr=new Set,ir={};function oi(e,n){C(e,n),C(e+"Capture",n)}function C(e,n){for(ir[e]=n,e=0;e<n.length;e++)Fr.add(n[e])}var Z=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ct={},ut={};function K(e){return mt.call(ut,e)?!0:mt.call(ct,e)?!1:Z.test(e)?ut[e]=!0:(ct[e]=!0,!1)}function Ot(e,n,a){if(K(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var Zt,le;function ie(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",le=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+le}var ne=!1;function Se(e,n){if(!e||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Rt=function(){throw Error()};if(Object.defineProperty(Rt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Rt,[])}catch(lt){var ot=lt}Reflect.construct(e,[],Rt)}else{try{Rt.call()}catch(lt){ot=lt}e.call(Rt.prototype)}}else{try{throw Error()}catch(lt){ot=lt}(Rt=e())&&typeof Rt.catch=="function"&&Rt.catch(function(){})}}catch(lt){if(lt&&ot&&typeof lt.stack=="string")return[lt.stack,ot.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),M=d[0],A=d[1];if(M&&A){var z=M.split(`
`),it=A.split(`
`);for(u=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;u<it.length&&!it[u].includes("DetermineComponentFrameRoot");)u++;if(o===z.length||u===it.length)for(o=z.length-1,u=it.length-1;1<=o&&0<=u&&z[o]!==it[u];)u--;for(;1<=o&&0<=u;o--,u--)if(z[o]!==it[u]){if(o!==1||u!==1)do if(o--,u--,0>u||z[o]!==it[u]){var vt=`
`+z[o].replace(" at new "," at ");return e.displayName&&vt.includes("<anonymous>")&&(vt=vt.replace("<anonymous>",e.displayName)),vt}while(1<=o&&0<=u);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ie(a):""}function Ue(e){switch(e.tag){case 26:case 27:case 5:return ie(e.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 15:return Se(e.type,!1);case 11:return Se(e.type.render,!1);case 1:return Se(e.type,!0);case 31:return ie("Activity");default:return""}}function Je(e){try{var n="";do n+=Ue(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Re(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ae(e){var n=Ce(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var u=a.get,d=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){o=""+M,d.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function an(e){e._valueTracker||(e._valueTracker=ae(e))}function De(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=Ce(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Un(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ea=/[\n"\\]/g;function Ye(e){return e.replace(Ea,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Yi(e,n,a,o,u,d,M,A){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Re(n)):e.value!==""+Re(n)&&(e.value=""+Re(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?Ln(e,M,Re(n)):a!=null?Ln(e,M,Re(a)):o!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Re(A):e.removeAttribute("name")}function Xe(e,n,a,o,u,d,M,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null))return;a=a!=null?""+Re(a):"",n=n!=null?""+Re(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function Ln(e,n,a){n==="number"&&Un(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function xn(e,n,a){if(n!=null&&(n=""+Re(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Re(a):""}function Rn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(yt(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Re(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Pi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ji=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ep(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||ji.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function np(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&ep(e,u,o)}else for(var d in n)n.hasOwnProperty(d)&&ep(e,d,n[d])}function su(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function cl(e){return Wv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ou=null;function lu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hr=null,Gr=null;function ip(e){var n=Zn(e);if(n&&(e=n.stateNode)){var a=e[qe]||null;t:switch(e=n.stateNode,n.type){case"input":if(Yi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ye(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[qe]||null;if(!u)throw Error(r(90));Yi(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&De(o)}break t;case"textarea":xn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var cu=!1;function ap(e,n,a){if(cu)return e(n,a);cu=!0;try{var o=e(n);return o}finally{if(cu=!1,(Hr!==null||Gr!==null)&&(jl(),Hr&&(n=Hr,e=Gr,Gr=Hr=null,ip(n),e)))for(n=0;n<e.length;n++)ip(e[n])}}function ks(e,n){var a=e.stateNode;if(a===null)return null;var o=a[qe]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=!1;if(Zi)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){uu=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{uu=!1}var ba=null,fu=null,ul=null;function rp(){if(ul)return ul;var e,n=fu,a=n.length,o,u="value"in ba?ba.value:ba.textContent,d=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[d-o];o++);return ul=u.slice(e,1<o?1-o:void 0)}function fl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hl(){return!0}function sp(){return!1}function Hn(e){function n(a,o,u,d,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=M,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?hl:sp,this.isPropagationStopped=sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),n}var ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=Hn(ar),Ws=g({},ar,{view:0,detail:0}),qv=Hn(Ws),hu,du,qs,pl=g({},Ws,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qs&&(qs&&e.type==="mousemove"?(hu=e.screenX-qs.screenX,du=e.screenY-qs.screenY):du=hu=0,qs=e),hu)},movementY:function(e){return"movementY"in e?e.movementY:du}}),op=Hn(pl),Yv=g({},pl,{dataTransfer:0}),jv=Hn(Yv),Zv=g({},Ws,{relatedTarget:0}),pu=Hn(Zv),Kv=g({},ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Hn(Kv),Jv=g({},ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$v=Hn(Jv),ty=g({},ar,{data:0}),lp=Hn(ty),ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ny={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ay(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=iy[e])?!!n[e]:!1}function mu(){return ay}var ry=g({},Ws,{key:function(e){if(e.key){var n=ey[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=fl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ny[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mu,charCode:function(e){return e.type==="keypress"?fl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?fl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sy=Hn(ry),oy=g({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cp=Hn(oy),ly=g({},Ws,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mu}),cy=Hn(ly),uy=g({},ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=Hn(uy),hy=g({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),dy=Hn(hy),py=g({},ar,{newState:0,oldState:0}),my=Hn(py),gy=[9,13,27,32],gu=Zi&&"CompositionEvent"in window,Ys=null;Zi&&"documentMode"in document&&(Ys=document.documentMode);var _y=Zi&&"TextEvent"in window&&!Ys,up=Zi&&(!gu||Ys&&8<Ys&&11>=Ys),fp=" ",hp=!1;function dp(e,n){switch(e){case"keyup":return gy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function vy(e,n){switch(e){case"compositionend":return pp(n);case"keypress":return n.which!==32?null:(hp=!0,fp);case"textInput":return e=n.data,e===fp&&hp?null:e;default:return null}}function yy(e,n){if(Vr)return e==="compositionend"||!gu&&dp(e,n)?(e=rp(),ul=fu=ba=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return up&&n.locale!=="ko"?null:n.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xy[e.type]:n==="textarea"}function gp(e,n,a,o){Hr?Gr?Gr.push(o):Gr=[o]:Hr=o,n=tc(n,"onChange"),0<n.length&&(a=new dl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var js=null,Zs=null;function Sy(e){Kg(e,0)}function ml(e){var n=Ni(e);if(De(n))return e}function _p(e,n){if(e==="change")return n}var vp=!1;if(Zi){var _u;if(Zi){var vu="oninput"in document;if(!vu){var yp=document.createElement("div");yp.setAttribute("oninput","return;"),vu=typeof yp.oninput=="function"}_u=vu}else _u=!1;vp=_u&&(!document.documentMode||9<document.documentMode)}function xp(){js&&(js.detachEvent("onpropertychange",Sp),Zs=js=null)}function Sp(e){if(e.propertyName==="value"&&ml(Zs)){var n=[];gp(n,Zs,e,lu(e)),ap(Sy,n)}}function My(e,n,a){e==="focusin"?(xp(),js=n,Zs=a,js.attachEvent("onpropertychange",Sp)):e==="focusout"&&xp()}function Ey(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ml(Zs)}function by(e,n){if(e==="click")return ml(n)}function Ty(e,n){if(e==="input"||e==="change")return ml(n)}function Ay(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Kn=typeof Object.is=="function"?Object.is:Ay;function Ks(e,n){if(Kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!mt.call(n,u)||!Kn(e[u],n[u]))return!1}return!0}function Mp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ep(e,n){var a=Mp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Mp(a)}}function bp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?bp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Un(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Un(e.document)}return n}function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ry=Zi&&"documentMode"in document&&11>=document.documentMode,kr=null,xu=null,Qs=null,Su=!1;function Ap(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Su||kr==null||kr!==Un(o)||(o=kr,"selectionStart"in o&&yu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Qs&&Ks(Qs,o)||(Qs=o,o=tc(xu,"onSelect"),0<o.length&&(n=new dl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=kr)))}function rr(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Xr={animationend:rr("Animation","AnimationEnd"),animationiteration:rr("Animation","AnimationIteration"),animationstart:rr("Animation","AnimationStart"),transitionrun:rr("Transition","TransitionRun"),transitionstart:rr("Transition","TransitionStart"),transitioncancel:rr("Transition","TransitionCancel"),transitionend:rr("Transition","TransitionEnd")},Mu={},Rp={};Zi&&(Rp=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function sr(e){if(Mu[e])return Mu[e];if(!Xr[e])return e;var n=Xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Rp)return Mu[e]=n[a];return e}var Cp=sr("animationend"),wp=sr("animationiteration"),Dp=sr("animationstart"),Cy=sr("transitionrun"),wy=sr("transitionstart"),Dy=sr("transitioncancel"),Up=sr("transitionend"),Lp=new Map,Eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Eu.push("scrollEnd");function Ei(e,n){Lp.set(e,n),oi(n,[e])}var Np=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Np.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Je(n)},Np.set(e,n),n)}return{value:e,source:n,stack:Je(n)}}var ci=[],Wr=0,bu=0;function gl(){for(var e=Wr,n=bu=Wr=0;n<e;){var a=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var d=ci[n];if(ci[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}d!==0&&Pp(a,u,d)}}function _l(e,n,a,o){ci[Wr++]=e,ci[Wr++]=n,ci[Wr++]=a,ci[Wr++]=o,bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,n,a,o){return _l(e,n,a,o),vl(e)}function qr(e,n){return _l(e,null,null,n),vl(e)}function Pp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&n!==null&&(u=31-ft(a),e=d.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function vl(e){if(50<Eo)throw Eo=0,Lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yr={};function Uy(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(e,n,a,o){return new Uy(e,n,a,o)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,n){var a=e.alternate;return a===null?(a=Qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Op(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,a,o,u,d){var M=0;if(o=e,typeof e=="function")Au(e)&&(M=1);else if(typeof e=="string")M=Nx(e,a,tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case N:return e=Qn(31,a,n,u),e.elementType=N,e.lanes=d,e;case b:return or(a.children,u,d,n);case T:M=8,u|=24;break;case S:return e=Qn(12,a,n,u|2),e.elementType=S,e.lanes=d,e;case B:return e=Qn(13,a,n,u),e.elementType=B,e.lanes=d,e;case V:return e=Qn(19,a,n,u),e.elementType=V,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case L:M=10;break t;case O:M=9;break t;case D:M=11;break t;case F:M=14;break t;case q:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Qn(M,a,n,u),n.elementType=e,n.type=o,n.lanes=d,n}function or(e,n,a,o){return e=Qn(7,e,o,n),e.lanes=a,e}function Ru(e,n,a){return e=Qn(6,e,null,n),e.lanes=a,e}function Cu(e,n,a){return n=Qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jr=[],Zr=0,xl=null,Sl=0,ui=[],fi=0,lr=null,Qi=1,Ji="";function cr(e,n){jr[Zr++]=Sl,jr[Zr++]=xl,xl=e,Sl=n}function zp(e,n,a){ui[fi++]=Qi,ui[fi++]=Ji,ui[fi++]=lr,lr=e;var o=Qi;e=Ji;var u=32-ft(o)-1;o&=~(1<<u),a+=1;var d=32-ft(n)+u;if(30<d){var M=u-u%5;d=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Qi=1<<32-ft(n)+u|a<<u|o,Ji=d+e}else Qi=1<<d|a<<u|o,Ji=e}function wu(e){e.return!==null&&(cr(e,1),zp(e,1,0))}function Du(e){for(;e===xl;)xl=jr[--Zr],jr[Zr]=null,Sl=jr[--Zr],jr[Zr]=null;for(;e===lr;)lr=ui[--fi],ui[fi]=null,Ji=ui[--fi],ui[fi]=null,Qi=ui[--fi],ui[fi]=null}var In=null,rn=null,Pe=!1,ur=null,Oi=!1,Uu=Error(r(519));function fr(e){var n=Error(r(418,""));throw to(li(n,e)),Uu}function Ip(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Ze]=e,n[qe]=o,a){case"dialog":Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":case"embed":Ee("load",n);break;case"video":case"audio":for(a=0;a<To.length;a++)Ee(To[a],n);break;case"source":Ee("error",n);break;case"img":case"image":case"link":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"input":Ee("invalid",n),Xe(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),an(n);break;case"select":Ee("invalid",n);break;case"textarea":Ee("invalid",n),Rn(n,o.value,o.defaultValue,o.children),an(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||t_(n.textContent,a)?(o.popover!=null&&(Ee("beforetoggle",n),Ee("toggle",n)),o.onScroll!=null&&Ee("scroll",n),o.onScrollEnd!=null&&Ee("scrollend",n),o.onClick!=null&&(n.onclick=ec),n=!0):n=!1,n||fr(e)}function Bp(e){for(In=e.return;In;)switch(In.tag){case 5:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:In=In.return}}function Js(e){if(e!==In)return!1;if(!Pe)return Bp(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||jf(e.type,e.memoizedProps)),a=!a),a&&rn&&fr(e),Bp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){rn=Ti(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}rn=null}}else n===27?(n=rn,Ha(e.type)?(e=Jf,Jf=null,rn=e):rn=n):rn=In?Ti(e.stateNode.nextSibling):null;return!0}function $s(){rn=In=null,Pe=!1}function Fp(){var e=ur;return e!==null&&(kn===null?kn=e:kn.push.apply(kn,e),ur=null),e}function to(e){ur===null?ur=[e]:ur.push(e)}var Lu=at(null),hr=null,$i=null;function Ta(e,n,a){Lt(Lu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Lu.current,Ct(Lu)}function Nu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Pu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var M=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var z=0;z<n.length;z++)if(A.context===n[z]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Nu(d.return,a,e),o||(M=null);break t}d=A.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(r(341));M.lanes|=a,d=M.alternate,d!==null&&(d.lanes|=a),Nu(M,a,e),M=null}else M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function eo(e,n,a,o){e=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var A=u.type;Kn(u.pendingProps.value,M.value)||(e!==null?e.push(A):e=[A])}}else if(u===Vt.current){if(M=u.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Uo):e=[Uo])}u=u.return}e!==null&&Pu(n,e,a,o),n.flags|=262144}function Ml(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function dr(e){hr=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Hp(hr,e)}function El(e,n){return hr===null&&dr(e),Hp(e,n)}function Hp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(r(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Ly=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ny=s.unstable_scheduleCallback,Py=s.unstable_NormalPriority,mn={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ou(){return{controller:new Ly,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Ny(Py,function(){e.controller.abort()})}var io=null,zu=0,Kr=0,Qr=null;function Oy(e,n){if(io===null){var a=io=[];zu=0,Kr=Ff(),Qr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return zu++,n.then(Gp,Gp),n}function Gp(){if(--zu===0&&io!==null){Qr!==null&&(Qr.status="fulfilled");var e=io;io=null,Kr=0,Qr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function zy(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Vp=I.S;I.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&Oy(e,n),Vp!==null&&Vp(e,n)};var pr=at(null);function Iu(){var e=pr.current;return e!==null?e:je.pooledCache}function bl(e,n){n===null?Lt(pr,pr.current):Lt(pr,n.pool)}function kp(){var e=Iu();return e===null?null:{parent:mn._currentValue,pool:e}}var ao=Error(r(460)),Xp=Error(r(474)),Tl=Error(r(542)),Bu={then:function(){}};function Wp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Al(){}function qp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Al,Al),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e;default:if(typeof n.status=="string")n.then(Al,Al);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,jp(e),e}throw ro=n,ao}}var ro=null;function Yp(){if(ro===null)throw Error(r(459));var e=ro;return ro=null,e}function jp(e){if(e===ao||e===Tl)throw Error(r(483))}var Aa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ra(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ca(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Oe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=vl(e),Pp(e,null,a),n}return _l(e,o,n,a),vl(e)}function so(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,te(e,a)}}function Gu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=M:d=d.next=M,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Vu=!1;function oo(){if(Vu){var e=Qr;if(e!==null)throw e}}function lo(e,n,a,o){Vu=!1;var u=e.updateQueue;Aa=!1;var d=u.firstBaseUpdate,M=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var z=A,it=z.next;z.next=null,M===null?d=it:M.next=it,M=z;var vt=e.alternate;vt!==null&&(vt=vt.updateQueue,A=vt.lastBaseUpdate,A!==M&&(A===null?vt.firstBaseUpdate=it:A.next=it,vt.lastBaseUpdate=z))}if(d!==null){var Rt=u.baseState;M=0,vt=it=z=null,A=d;do{var ot=A.lane&-536870913,lt=ot!==A.lane;if(lt?(we&ot)===ot:(o&ot)===ot){ot!==0&&ot===Kr&&(Vu=!0),vt!==null&&(vt=vt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var ce=e,se=A;ot=n;var Ge=a;switch(se.tag){case 1:if(ce=se.payload,typeof ce=="function"){Rt=ce.call(Ge,Rt,ot);break t}Rt=ce;break t;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=se.payload,ot=typeof ce=="function"?ce.call(Ge,Rt,ot):ce,ot==null)break t;Rt=g({},Rt,ot);break t;case 2:Aa=!0}}ot=A.callback,ot!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[ot]:lt.push(ot))}else lt={lane:ot,tag:A.tag,payload:A.payload,callback:A.callback,next:null},vt===null?(it=vt=lt,z=Rt):vt=vt.next=lt,M|=ot;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);vt===null&&(z=Rt),u.baseState=z,u.firstBaseUpdate=it,u.lastBaseUpdate=vt,d===null&&(u.shared.lanes=0),za|=M,e.lanes=M,e.memoizedState=Rt}}function Zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Kp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Zp(a[e],n)}var Jr=at(null),Rl=at(0);function Qp(e,n){e=oa,Lt(Rl,e),Lt(Jr,n),oa=e|n.baseLanes}function ku(){Lt(Rl,oa),Lt(Jr,Jr.current)}function Xu(){oa=Rl.current,Ct(Jr),Ct(Rl)}var wa=0,_e=null,Fe=null,un=null,Cl=!1,$r=!1,mr=!1,wl=0,co=0,ts=null,Iy=0;function ln(){throw Error(r(321))}function Wu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Kn(e[a],n[a]))return!1;return!0}function qu(e,n,a,o,u,d){return wa=d,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Pm:Om,mr=!1,d=a(o,u),mr=!1,$r&&(d=$p(n,a,o,u)),Jp(e),d}function Jp(e){I.H=Ol;var n=Fe!==null&&Fe.next!==null;if(wa=0,un=Fe=_e=null,Cl=!1,co=0,ts=null,n)throw Error(r(300));e===null||Sn||(e=e.dependencies,e!==null&&Ml(e)&&(Sn=!0))}function $p(e,n,a,o){_e=e;var u=0;do{if($r&&(ts=null),co=0,$r=!1,25<=u)throw Error(r(301));if(u+=1,un=Fe=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}I.H=Xy,d=n(a,o)}while($r);return d}function By(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?uo(n):n,e=e.useState()[0],(Fe!==null?Fe.memoizedState:null)!==e&&(_e.flags|=1024),n}function Yu(){var e=wl!==0;return wl=0,e}function ju(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Zu(e){if(Cl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cl=!1}wa=0,un=Fe=_e=null,$r=!1,co=wl=0,ts=null}function Gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?_e.memoizedState=un=e:un=un.next=e,un}function fn(){if(Fe===null){var e=_e.alternate;e=e!==null?e.memoizedState:null}else e=Fe.next;var n=un===null?_e.memoizedState:un.next;if(n!==null)un=n,Fe=e;else{if(e===null)throw _e.alternate===null?Error(r(467)):Error(r(310));Fe=e,e={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},un===null?_e.memoizedState=un=e:un=un.next=e}return un}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function uo(e){var n=co;return co+=1,ts===null&&(ts=[]),e=qp(ts,e,n),n=_e,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Pm:Om),e}function Dl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return uo(e);if(e.$$typeof===L)return Nn(e)}throw Error(r(438,String(e)))}function Qu(e){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=_e.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ku(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=R;return n.index++,a}function ea(e,n){return typeof n=="function"?n(e):n}function Ul(e){var n=fn();return Ju(n,Fe,e)}function Ju(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=e.baseQueue,d=o.pending;if(d!==null){if(u!==null){var M=u.next;u.next=d.next,d.next=M}n.baseQueue=u=d,o.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{n=u.next;var A=M=null,z=null,it=n,vt=!1;do{var Rt=it.lane&-536870913;if(Rt!==it.lane?(we&Rt)===Rt:(wa&Rt)===Rt){var ot=it.revertLane;if(ot===0)z!==null&&(z=z.next={lane:0,revertLane:0,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Rt===Kr&&(vt=!0);else if((wa&ot)===ot){it=it.next,ot===Kr&&(vt=!0);continue}else Rt={lane:0,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(A=z=Rt,M=d):z=z.next=Rt,_e.lanes|=ot,za|=ot;Rt=it.action,mr&&a(d,Rt),d=it.hasEagerState?it.eagerState:a(d,Rt)}else ot={lane:Rt,revertLane:it.revertLane,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},z===null?(A=z=ot,M=d):z=z.next=ot,_e.lanes|=Rt,za|=Rt;it=it.next}while(it!==null&&it!==n);if(z===null?M=d:z.next=A,!Kn(d,e.memoizedState)&&(Sn=!0,vt&&(a=Qr,a!==null)))throw a;e.memoizedState=d,e.baseState=M,e.baseQueue=z,o.lastRenderedState=d}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var n=fn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do d=e(d,M.action),M=M.next;while(M!==u);Kn(d,n.memoizedState)||(Sn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function tm(e,n,a){var o=_e,u=fn(),d=Pe;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!Kn((Fe||u).memoizedState,a);M&&(u.memoizedState=a,Sn=!0),u=u.queue;var A=im.bind(null,o,u,e);if(fo(2048,8,A,[e]),u.getSnapshot!==n||M||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,es(9,Ll(),nm.bind(null,o,u,a,n),null),je===null)throw Error(r(349));d||(wa&124)!==0||em(o,n,a)}return a}function em(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=Ku(),_e.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function nm(e,n,a,o){n.value=a,n.getSnapshot=o,am(n)&&rm(e)}function im(e,n,a){return a(function(){am(n)&&rm(e)})}function am(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Kn(e,a)}catch{return!0}}function rm(e){var n=qr(e,2);n!==null&&ni(n,e,2)}function tf(e){var n=Gn();if(typeof e=="function"){var a=e;if(e=a(),mr){X(!0);try{a()}finally{X(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:e},n}function sm(e,n,a,o){return e.baseState=a,Ju(e,Fe,typeof o=="function"?o:ea)}function Fy(e,n,a,o,u){if(Pl(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){d.listeners.push(M)}};I.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,om(n,d)):(d.next=a.next,n.pending=a.next=d)}}function om(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var d=I.T,M={};I.T=M;try{var A=a(u,o),z=I.S;z!==null&&z(M,A),lm(e,n,A)}catch(it){ef(e,n,it)}finally{I.T=d}}else try{d=a(u,o),lm(e,n,d)}catch(it){ef(e,n,it)}}function lm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cm(e,n,o)},function(o){return ef(e,n,o)}):cm(e,n,a)}function cm(e,n,a){n.status="fulfilled",n.value=a,um(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,om(e,a)))}function ef(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,um(n),n=n.next;while(n!==o)}e.action=null}function um(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fm(e,n){return n}function hm(e,n){if(Pe){var a=je.formState;if(a!==null){t:{var o=_e;if(Pe){if(rn){e:{for(var u=rn,d=Oi;u.nodeType!==8;){if(!d){u=null;break e}if(u=Ti(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){rn=Ti(u.nextSibling),o=u.data==="F!";break t}}fr(o)}o=!1}o&&(n=a[0])}}return a=Gn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fm,lastRenderedState:n},a.queue=o,a=Um.bind(null,_e,o),o.dispatch=a,o=tf(!1),d=of.bind(null,_e,!1,o.queue),o=Gn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Fy.bind(null,_e,u,d,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function dm(e){var n=fn();return pm(n,Fe,e)}function pm(e,n,a){if(n=Ju(e,n,fm)[0],e=Ul(ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=uo(n)}catch(M){throw M===ao?Tl:M}else o=n;n=fn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,es(9,Ll(),Hy.bind(null,u,a),null)),[o,d,e]}function Hy(e,n){e.action=n}function mm(e){var n=fn(),a=Fe;if(a!==null)return pm(n,a,e);fn(),n=n.memoizedState,a=fn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function es(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=_e.updateQueue,n===null&&(n=Ku(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ll(){return{destroy:void 0,resource:void 0}}function gm(){return fn().memoizedState}function Nl(e,n,a,o){var u=Gn();o=o===void 0?null:o,_e.flags|=e,u.memoizedState=es(1|n,Ll(),a,o)}function fo(e,n,a,o){var u=fn();o=o===void 0?null:o;var d=u.memoizedState.inst;Fe!==null&&o!==null&&Wu(o,Fe.memoizedState.deps)?u.memoizedState=es(n,d,a,o):(_e.flags|=e,u.memoizedState=es(1|n,d,a,o))}function _m(e,n){Nl(8390656,8,e,n)}function vm(e,n){fo(2048,8,e,n)}function ym(e,n){return fo(4,2,e,n)}function xm(e,n){return fo(4,4,e,n)}function Sm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Mm(e,n,a){a=a!=null?a.concat([e]):null,fo(4,4,Sm.bind(null,n,e),a)}function nf(){}function Em(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Wu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function bm(e,n){var a=fn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Wu(n,o[1]))return o[0];if(o=e(),mr){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[o,n],o}function af(e,n,a){return a===void 0||(wa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=Rg(),_e.lanes|=e,za|=e,a)}function Tm(e,n,a,o){return Kn(a,n)?a:Jr.current!==null?(e=af(e,a,o),Kn(e,n)||(Sn=!0),e):(wa&42)===0?(Sn=!0,e.memoizedState=a):(e=Rg(),_e.lanes|=e,za|=e,n)}function Am(e,n,a,o,u){var d=Q.p;Q.p=d!==0&&8>d?d:8;var M=I.T,A={};I.T=A,of(e,!1,n,a);try{var z=u(),it=I.S;if(it!==null&&it(A,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var vt=zy(z,o);ho(e,n,vt,ei(e))}else ho(e,n,o,ei(e))}catch(Rt){ho(e,n,{then:function(){},status:"rejected",reason:Rt},ei())}finally{Q.p=d,I.T=M}}function Gy(){}function rf(e,n,a,o){if(e.tag!==5)throw Error(r(476));var u=Rm(e).queue;Am(e,u,n,j,a===null?Gy:function(){return Cm(e),a(o)})}function Rm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Cm(e){var n=Rm(e).next.queue;ho(e,n,{},ei())}function sf(){return Nn(Uo)}function wm(){return fn().memoizedState}function Dm(){return fn().memoizedState}function Vy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ra(a);var o=Ca(n,e,a);o!==null&&(ni(o,n,a),so(o,n,a)),n={cache:Ou()},e.payload=n;return}n=n.return}}function ky(e,n,a){var o=ei();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Pl(e)?Lm(n,a):(a=Tu(e,n,a,o),a!==null&&(ni(a,e,o),Nm(a,n,o)))}function Um(e,n,a){var o=ei();ho(e,n,a,o)}function ho(e,n,a,o){var u={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pl(e))Lm(n,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var M=n.lastRenderedState,A=d(M,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,M))return _l(e,n,u,0),je===null&&gl(),!1}catch{}finally{}if(a=Tu(e,n,u,o),a!==null)return ni(a,e,o),Nm(a,n,o),!0}return!1}function of(e,n,a,o){if(o={lane:2,revertLane:Ff(),action:o,hasEagerState:!1,eagerState:null,next:null},Pl(e)){if(n)throw Error(r(479))}else n=Tu(e,a,o,2),n!==null&&ni(n,e,2)}function Pl(e){var n=e.alternate;return e===_e||n!==null&&n===_e}function Lm(e,n){$r=Cl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Nm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,te(e,a)}}var Ol={readContext:Nn,use:Dl,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln},Pm={readContext:Nn,use:Dl,useCallback:function(e,n){return Gn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:_m,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nl(4194308,4,Sm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nl(4194308,4,e,n)},useInsertionEffect:function(e,n){Nl(4,2,e,n)},useMemo:function(e,n){var a=Gn();n=n===void 0?null:n;var o=e();if(mr){X(!0);try{e()}finally{X(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Gn();if(a!==void 0){var u=a(n);if(mr){X(!0);try{a(n)}finally{X(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=ky.bind(null,_e,e),[o.memoizedState,e]},useRef:function(e){var n=Gn();return e={current:e},n.memoizedState=e},useState:function(e){e=tf(e);var n=e.queue,a=Um.bind(null,_e,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,n){var a=Gn();return af(a,e,n)},useTransition:function(){var e=tf(!1);return e=Am.bind(null,_e,e.queue,!0,!1),Gn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=_e,u=Gn();if(Pe){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),je===null)throw Error(r(349));(we&124)!==0||em(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,_m(im.bind(null,o,d,e),[e]),o.flags|=2048,es(9,Ll(),nm.bind(null,o,d,a,n),null),a},useId:function(){var e=Gn(),n=je.identifierPrefix;if(Pe){var a=Ji,o=Qi;a=(o&~(1<<32-ft(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=wl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=Iy++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:sf,useFormState:hm,useActionState:hm,useOptimistic:function(e){var n=Gn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=of.bind(null,_e,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qu,useCacheRefresh:function(){return Gn().memoizedState=Vy.bind(null,_e)}},Om={readContext:Nn,use:Dl,useCallback:Em,useContext:Nn,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:ym,useLayoutEffect:xm,useMemo:bm,useReducer:Ul,useRef:gm,useState:function(){return Ul(ea)},useDebugValue:nf,useDeferredValue:function(e,n){var a=fn();return Tm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=Ul(ea)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:dm,useActionState:dm,useOptimistic:function(e,n){var a=fn();return sm(a,Fe,e,n)},useMemoCache:Qu,useCacheRefresh:Dm},Xy={readContext:Nn,use:Dl,useCallback:Em,useContext:Nn,useEffect:vm,useImperativeHandle:Mm,useInsertionEffect:ym,useLayoutEffect:xm,useMemo:bm,useReducer:$u,useRef:gm,useState:function(){return $u(ea)},useDebugValue:nf,useDeferredValue:function(e,n){var a=fn();return Fe===null?af(a,e,n):Tm(a,Fe.memoizedState,e,n)},useTransition:function(){var e=$u(ea)[0],n=fn().memoizedState;return[typeof e=="boolean"?e:uo(e),n]},useSyncExternalStore:tm,useId:wm,useHostTransitionStatus:sf,useFormState:mm,useActionState:mm,useOptimistic:function(e,n){var a=fn();return Fe!==null?sm(a,Fe,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qu,useCacheRefresh:Dm},ns=null,po=0;function zl(e){var n=po;return po+=1,ns===null&&(ns=[]),qp(ns,e,n)}function mo(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Il(e,n){throw n.$$typeof===y?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function zm(e){var n=e._init;return n(e._payload)}function Im(e){function n(Y,k){if(e){var et=Y.deletions;et===null?(Y.deletions=[k],Y.flags|=16):et.push(k)}}function a(Y,k){if(!e)return null;for(;k!==null;)n(Y,k),k=k.sibling;return null}function o(Y){for(var k=new Map;Y!==null;)Y.key!==null?k.set(Y.key,Y):k.set(Y.index,Y),Y=Y.sibling;return k}function u(Y,k){return Y=Ki(Y,k),Y.index=0,Y.sibling=null,Y}function d(Y,k,et){return Y.index=et,e?(et=Y.alternate,et!==null?(et=et.index,et<k?(Y.flags|=67108866,k):et):(Y.flags|=67108866,k)):(Y.flags|=1048576,k)}function M(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,k,et,Mt){return k===null||k.tag!==6?(k=Ru(et,Y.mode,Mt),k.return=Y,k):(k=u(k,et),k.return=Y,k)}function z(Y,k,et,Mt){var Qt=et.type;return Qt===b?vt(Y,k,et.props.children,Mt,et.key):k!==null&&(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&zm(Qt)===k.type)?(k=u(k,et.props),mo(k,et),k.return=Y,k):(k=yl(et.type,et.key,et.props,null,Y.mode,Mt),mo(k,et),k.return=Y,k)}function it(Y,k,et,Mt){return k===null||k.tag!==4||k.stateNode.containerInfo!==et.containerInfo||k.stateNode.implementation!==et.implementation?(k=Cu(et,Y.mode,Mt),k.return=Y,k):(k=u(k,et.children||[]),k.return=Y,k)}function vt(Y,k,et,Mt,Qt){return k===null||k.tag!==7?(k=or(et,Y.mode,Mt,Qt),k.return=Y,k):(k=u(k,et),k.return=Y,k)}function Rt(Y,k,et){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Ru(""+k,Y.mode,et),k.return=Y,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case v:return et=yl(k.type,k.key,k.props,null,Y.mode,et),mo(et,k),et.return=Y,et;case x:return k=Cu(k,Y.mode,et),k.return=Y,k;case q:var Mt=k._init;return k=Mt(k._payload),Rt(Y,k,et)}if(yt(k)||pt(k))return k=or(k,Y.mode,et,null),k.return=Y,k;if(typeof k.then=="function")return Rt(Y,zl(k),et);if(k.$$typeof===L)return Rt(Y,El(Y,k),et);Il(Y,k)}return null}function ot(Y,k,et,Mt){var Qt=k!==null?k.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:A(Y,k,""+et,Mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case v:return et.key===Qt?z(Y,k,et,Mt):null;case x:return et.key===Qt?it(Y,k,et,Mt):null;case q:return Qt=et._init,et=Qt(et._payload),ot(Y,k,et,Mt)}if(yt(et)||pt(et))return Qt!==null?null:vt(Y,k,et,Mt,null);if(typeof et.then=="function")return ot(Y,k,zl(et),Mt);if(et.$$typeof===L)return ot(Y,k,El(Y,et),Mt);Il(Y,et)}return null}function lt(Y,k,et,Mt,Qt){if(typeof Mt=="string"&&Mt!==""||typeof Mt=="number"||typeof Mt=="bigint")return Y=Y.get(et)||null,A(k,Y,""+Mt,Qt);if(typeof Mt=="object"&&Mt!==null){switch(Mt.$$typeof){case v:return Y=Y.get(Mt.key===null?et:Mt.key)||null,z(k,Y,Mt,Qt);case x:return Y=Y.get(Mt.key===null?et:Mt.key)||null,it(k,Y,Mt,Qt);case q:var ve=Mt._init;return Mt=ve(Mt._payload),lt(Y,k,et,Mt,Qt)}if(yt(Mt)||pt(Mt))return Y=Y.get(et)||null,vt(k,Y,Mt,Qt,null);if(typeof Mt.then=="function")return lt(Y,k,et,zl(Mt),Qt);if(Mt.$$typeof===L)return lt(Y,k,et,El(k,Mt),Qt);Il(k,Mt)}return null}function ce(Y,k,et,Mt){for(var Qt=null,ve=null,ee=k,oe=k=0,En=null;ee!==null&&oe<et.length;oe++){ee.index>oe?(En=ee,ee=null):En=ee.sibling;var Le=ot(Y,ee,et[oe],Mt);if(Le===null){ee===null&&(ee=En);break}e&&ee&&Le.alternate===null&&n(Y,ee),k=d(Le,k,oe),ve===null?Qt=Le:ve.sibling=Le,ve=Le,ee=En}if(oe===et.length)return a(Y,ee),Pe&&cr(Y,oe),Qt;if(ee===null){for(;oe<et.length;oe++)ee=Rt(Y,et[oe],Mt),ee!==null&&(k=d(ee,k,oe),ve===null?Qt=ee:ve.sibling=ee,ve=ee);return Pe&&cr(Y,oe),Qt}for(ee=o(ee);oe<et.length;oe++)En=lt(ee,Y,oe,et[oe],Mt),En!==null&&(e&&En.alternate!==null&&ee.delete(En.key===null?oe:En.key),k=d(En,k,oe),ve===null?Qt=En:ve.sibling=En,ve=En);return e&&ee.forEach(function(Wa){return n(Y,Wa)}),Pe&&cr(Y,oe),Qt}function se(Y,k,et,Mt){if(et==null)throw Error(r(151));for(var Qt=null,ve=null,ee=k,oe=k=0,En=null,Le=et.next();ee!==null&&!Le.done;oe++,Le=et.next()){ee.index>oe?(En=ee,ee=null):En=ee.sibling;var Wa=ot(Y,ee,Le.value,Mt);if(Wa===null){ee===null&&(ee=En);break}e&&ee&&Wa.alternate===null&&n(Y,ee),k=d(Wa,k,oe),ve===null?Qt=Wa:ve.sibling=Wa,ve=Wa,ee=En}if(Le.done)return a(Y,ee),Pe&&cr(Y,oe),Qt;if(ee===null){for(;!Le.done;oe++,Le=et.next())Le=Rt(Y,Le.value,Mt),Le!==null&&(k=d(Le,k,oe),ve===null?Qt=Le:ve.sibling=Le,ve=Le);return Pe&&cr(Y,oe),Qt}for(ee=o(ee);!Le.done;oe++,Le=et.next())Le=lt(ee,Y,oe,Le.value,Mt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?oe:Le.key),k=d(Le,k,oe),ve===null?Qt=Le:ve.sibling=Le,ve=Le);return e&&ee.forEach(function(Wx){return n(Y,Wx)}),Pe&&cr(Y,oe),Qt}function Ge(Y,k,et,Mt){if(typeof et=="object"&&et!==null&&et.type===b&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case v:t:{for(var Qt=et.key;k!==null;){if(k.key===Qt){if(Qt=et.type,Qt===b){if(k.tag===7){a(Y,k.sibling),Mt=u(k,et.props.children),Mt.return=Y,Y=Mt;break t}}else if(k.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===q&&zm(Qt)===k.type){a(Y,k.sibling),Mt=u(k,et.props),mo(Mt,et),Mt.return=Y,Y=Mt;break t}a(Y,k);break}else n(Y,k);k=k.sibling}et.type===b?(Mt=or(et.props.children,Y.mode,Mt,et.key),Mt.return=Y,Y=Mt):(Mt=yl(et.type,et.key,et.props,null,Y.mode,Mt),mo(Mt,et),Mt.return=Y,Y=Mt)}return M(Y);case x:t:{for(Qt=et.key;k!==null;){if(k.key===Qt)if(k.tag===4&&k.stateNode.containerInfo===et.containerInfo&&k.stateNode.implementation===et.implementation){a(Y,k.sibling),Mt=u(k,et.children||[]),Mt.return=Y,Y=Mt;break t}else{a(Y,k);break}else n(Y,k);k=k.sibling}Mt=Cu(et,Y.mode,Mt),Mt.return=Y,Y=Mt}return M(Y);case q:return Qt=et._init,et=Qt(et._payload),Ge(Y,k,et,Mt)}if(yt(et))return ce(Y,k,et,Mt);if(pt(et)){if(Qt=pt(et),typeof Qt!="function")throw Error(r(150));return et=Qt.call(et),se(Y,k,et,Mt)}if(typeof et.then=="function")return Ge(Y,k,zl(et),Mt);if(et.$$typeof===L)return Ge(Y,k,El(Y,et),Mt);Il(Y,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,k!==null&&k.tag===6?(a(Y,k.sibling),Mt=u(k,et),Mt.return=Y,Y=Mt):(a(Y,k),Mt=Ru(et,Y.mode,Mt),Mt.return=Y,Y=Mt),M(Y)):a(Y,k)}return function(Y,k,et,Mt){try{po=0;var Qt=Ge(Y,k,et,Mt);return ns=null,Qt}catch(ee){if(ee===ao||ee===Tl)throw ee;var ve=Qn(29,ee,null,Y.mode);return ve.lanes=Mt,ve.return=Y,ve}finally{}}}var is=Im(!0),Bm=Im(!1),hi=at(null),zi=null;function Da(e){var n=e.alternate;Lt(gn,gn.current&1),Lt(hi,e),zi===null&&(n===null||Jr.current!==null||n.memoizedState!==null)&&(zi=e)}function Fm(e){if(e.tag===22){if(Lt(gn,gn.current),Lt(hi,e),zi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(zi=e)}}else Ua()}function Ua(){Lt(gn,gn.current),Lt(hi,hi.current)}function na(e){Ct(hi),zi===e&&(zi=null),Ct(gn)}var gn=at(0);function Bl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Qf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function lf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ra(o);u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(ni(n,e,o),so(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=ei(),u=Ra(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ca(e,u,o),n!==null&&(ni(n,e,o),so(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),o=Ra(a);o.tag=2,n!=null&&(o.callback=n),n=Ca(e,o,a),n!==null&&(ni(n,e,a),so(n,e,a))}};function Hm(e,n,a,o,u,d,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,M):n.prototype&&n.prototype.isPureReactComponent?!Ks(a,o)||!Ks(u,d):!0}function Gm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&cf.enqueueReplaceState(n,n.state,null)}function gr(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}var Fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Vm(e){Fl(e)}function km(e){console.error(e)}function Xm(e){Fl(e)}function Hl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Wm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function uf(e,n,a){return a=Ra(a),a.tag=3,a.payload={element:null},a.callback=function(){Hl(e,n)},a}function qm(e){return e=Ra(e),e.tag=3,e}function Ym(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;e.payload=function(){return u(d)},e.callback=function(){Wm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Wm(n,a,o),typeof u!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Wy(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&eo(n,a,u,!0),a=hi.current,a!==null){switch(a.tag){case 13:return zi===null?Pf():a.alternate===null&&sn===0&&(sn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),zf(e,o,u)),!1;case 22:return a.flags|=65536,o===Bu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),zf(e,o,u)),!1}throw Error(r(435,a.tag))}return zf(e,o,u),Pf(),!1}if(Pe)return n=hi.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Uu&&(e=Error(r(422),{cause:o}),to(li(e,a)))):(o!==Uu&&(n=Error(r(423),{cause:o}),to(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=li(o,a),u=uf(e.stateNode,o,u),Gu(e,u),sn!==4&&(sn=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Mo===null?Mo=[d]:Mo.push(d),sn!==4&&(sn=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=uf(a.stateNode,o,e),Gu(a,e),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ia===null||!Ia.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=qm(u),Ym(u,e,a,o),Gu(a,u),!1}a=a.return}while(a!==null);return!1}var jm=Error(r(461)),Sn=!1;function Cn(e,n,a,o){n.child=e===null?Bm(n,null,a,o):is(n,e.child,a,o)}function Zm(e,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var M={};for(var A in o)A!=="ref"&&(M[A]=o[A])}else M=o;return dr(n),o=qu(e,n,a,M,d,u),A=Yu(),e!==null&&!Sn?(ju(e,n,u),ia(e,n,u)):(Pe&&A&&wu(n),n.flags|=1,Cn(e,n,o,u),n.child)}function Km(e,n,a,o,u){if(e===null){var d=a.type;return typeof d=="function"&&!Au(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,Qm(e,n,d,o,u)):(e=yl(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!vf(e,u)){var M=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ks,a(M,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Ki(d,o),e.ref=n.ref,e.return=n,n.child=e}function Qm(e,n,a,o,u){if(e!==null){var d=e.memoizedProps;if(Ks(d,o)&&e.ref===n.ref)if(Sn=!1,n.pendingProps=o=d,vf(e,u))(e.flags&131072)!==0&&(Sn=!0);else return n.lanes=e.lanes,ia(e,n,u)}return ff(e,n,a,o,u)}function Jm(e,n,a){var o=n.pendingProps,u=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(u=n.child=e.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;n.childLanes=d&~o}else n.childLanes=0,n.child=null;return $m(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&bl(n,d!==null?d.cachePool:null),d!==null?Qp(n,d):ku(),Fm(n);else return n.lanes=n.childLanes=536870912,$m(e,n,d!==null?d.baseLanes|a:a,a)}else d!==null?(bl(n,d.cachePool),Qp(n,d),Ua(),n.memoizedState=null):(e!==null&&bl(n,null),ku(),Ua());return Cn(e,n,u,a),n.child}function $m(e,n,a,o){var u=Iu();return u=u===null?null:{parent:mn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&bl(n,null),ku(),Fm(n),e!==null&&eo(e,n,o,!0),null}function Gl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ff(e,n,a,o,u){return dr(n),a=qu(e,n,a,o,void 0,u),o=Yu(),e!==null&&!Sn?(ju(e,n,u),ia(e,n,u)):(Pe&&o&&wu(n),n.flags|=1,Cn(e,n,a,u),n.child)}function tg(e,n,a,o,u,d){return dr(n),n.updateQueue=null,a=$p(n,o,a,u),Jp(e),o=Yu(),e!==null&&!Sn?(ju(e,n,d),ia(e,n,d)):(Pe&&o&&wu(n),n.flags|=1,Cn(e,n,a,d),n.child)}function eg(e,n,a,o,u){if(dr(n),n.stateNode===null){var d=Yr,M=a.contextType;typeof M=="object"&&M!==null&&(d=Nn(M)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=cf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Fu(n),M=a.contextType,d.context=typeof M=="object"&&M!==null?Nn(M):Yr,d.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(lf(n,a,M,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(M=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),M!==d.state&&cf.enqueueReplaceState(d,d.state,null),lo(n,o,d,u),oo(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var A=n.memoizedProps,z=gr(a,A);d.props=z;var it=d.context,vt=a.contextType;M=Yr,typeof vt=="object"&&vt!==null&&(M=Nn(vt));var Rt=a.getDerivedStateFromProps;vt=typeof Rt=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,vt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||it!==M)&&Gm(n,d,o,M),Aa=!1;var ot=n.memoizedState;d.state=ot,lo(n,o,d,u),oo(),it=n.memoizedState,A||ot!==it||Aa?(typeof Rt=="function"&&(lf(n,a,Rt,o),it=n.memoizedState),(z=Aa||Hm(n,a,z,o,ot,it,M))?(vt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),d.props=o,d.state=it,d.context=M,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,Hu(e,n),M=n.memoizedProps,vt=gr(a,M),d.props=vt,Rt=n.pendingProps,ot=d.context,it=a.contextType,z=Yr,typeof it=="object"&&it!==null&&(z=Nn(it)),A=a.getDerivedStateFromProps,(it=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(M!==Rt||ot!==z)&&Gm(n,d,o,z),Aa=!1,ot=n.memoizedState,d.state=ot,lo(n,o,d,u),oo();var lt=n.memoizedState;M!==Rt||ot!==lt||Aa||e!==null&&e.dependencies!==null&&Ml(e.dependencies)?(typeof A=="function"&&(lf(n,a,A,o),lt=n.memoizedState),(vt=Aa||Hm(n,a,vt,o,ot,lt,z)||e!==null&&e.dependencies!==null&&Ml(e.dependencies))?(it||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,lt,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,lt,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),d.props=o,d.state=lt,d.context=z,o=vt):(typeof d.componentDidUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&ot===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,Gl(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=is(n,e.child,null,u),n.child=is(n,null,a,u)):Cn(e,n,a,u),n.memoizedState=d.state,e=n.child):e=ia(e,n,u),e}function ng(e,n,a,o){return $s(),n.flags|=256,Cn(e,n,a,o),n.child}var hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function df(e){return{baseLanes:e,cachePool:kp()}}function pf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function ig(e,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,M;if((M=d)||(M=e!==null&&e.memoizedState===null?!1:(gn.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(u?Da(n):Ua(),Pe){var A=rn,z;if(z=A){t:{for(z=A,A=Oi;z.nodeType!==8;){if(!A){A=null;break t}if(z=Ti(z.nextSibling),z===null){A=null;break t}}A=z}A!==null?(n.memoizedState={dehydrated:A,treeContext:lr!==null?{id:Qi,overflow:Ji}:null,retryLane:536870912,hydrationErrors:null},z=Qn(18,null,null,0),z.stateNode=A,z.return=n,n.child=z,In=n,rn=null,z=!0):z=!1}z||fr(n)}if(A=n.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Qf(A)?n.lanes=32:n.lanes=536870912,null;na(n)}return A=o.children,o=o.fallback,u?(Ua(),u=n.mode,A=Vl({mode:"hidden",children:A},u),o=or(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,u=n.child,u.memoizedState=df(a),u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Da(n),mf(n,A))}if(z=e.memoizedState,z!==null&&(A=z.dehydrated,A!==null)){if(d)n.flags&256?(Da(n),n.flags&=-257,n=gf(e,n,a)):n.memoizedState!==null?(Ua(),n.child=e.child,n.flags|=128,n=null):(Ua(),u=o.fallback,A=n.mode,o=Vl({mode:"visible",children:o.children},A),u=or(u,A,a,null),u.flags|=2,o.return=n,u.return=n,o.sibling=u,n.child=o,is(n,e.child,null,a),o=n.child,o.memoizedState=df(a),o.childLanes=pf(e,M,a),n.memoizedState=hf,n=u);else if(Da(n),Qf(A)){if(M=A.nextSibling&&A.nextSibling.dataset,M)var it=M.dgst;M=it,o=Error(r(419)),o.stack="",o.digest=M,to({value:o,source:null,stack:null}),n=gf(e,n,a)}else if(Sn||eo(e,n,a,!1),M=(a&e.childLanes)!==0,Sn||M){if(M=je,M!==null&&(o=a&-a,o=(o&42)!==0?1:ye(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==z.retryLane))throw z.retryLane=o,qr(e,o),ni(M,e,o),jm;A.data==="$?"||Pf(),n=gf(e,n,a)}else A.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,rn=Ti(A.nextSibling),In=n,Pe=!0,ur=null,Oi=!1,e!==null&&(ui[fi++]=Qi,ui[fi++]=Ji,ui[fi++]=lr,Qi=e.id,Ji=e.overflow,lr=n),n=mf(n,o.children),n.flags|=4096);return n}return u?(Ua(),u=o.fallback,A=n.mode,z=e.child,it=z.sibling,o=Ki(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,it!==null?u=Ki(it,u):(u=or(u,A,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,o=u,u=n.child,A=e.child.memoizedState,A===null?A=df(a):(z=A.cachePool,z!==null?(it=mn._currentValue,z=z.parent!==it?{parent:it,pool:it}:z):z=kp(),A={baseLanes:A.baseLanes|a,cachePool:z}),u.memoizedState=A,u.childLanes=pf(e,M,a),n.memoizedState=hf,o):(Da(n),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function mf(e,n){return n=Vl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Vl(e,n){return e=Qn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function gf(e,n,a){return is(n,e.child,null,a),e=mf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ag(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Nu(e.return,n,a)}function _f(e,n,a,o,u){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u}:(d.isBackwards=n,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=u)}function rg(e,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;if(Cn(e,n,o.children,a),o=gn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ag(e,a,n);else if(e.tag===19)ag(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(Lt(gn,o),u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&Bl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_f(n,!1,u,a,d);break;case"backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&Bl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}_f(n,!0,a,null,d);break;case"together":_f(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(eo(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ki(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function vf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ml(e)))}function qy(e,n,a){switch(n.tag){case 3:kt(n,n.stateNode.containerInfo),Ta(n,mn,e.memoizedState.cache),$s();break;case 27:case 5:re(n);break;case 4:kt(n,n.stateNode.containerInfo);break;case 10:Ta(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?ig(e,n,a):(Da(n),e=ia(e,n,a),e!==null?e.sibling:null);Da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(eo(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return rg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Lt(gn,gn.current),o)break;return null;case 22:case 23:return n.lanes=0,Jm(e,n,a);case 24:Ta(n,mn,e.memoizedState.cache)}return ia(e,n,a)}function sg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Sn=!0;else{if(!vf(e,a)&&(n.flags&128)===0)return Sn=!1,qy(e,n,a);Sn=(e.flags&131072)!==0}else Sn=!1,Pe&&(n.flags&1048576)!==0&&zp(n,Sl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,u=o._init;if(o=u(o._payload),n.type=o,typeof o=="function")Au(o)?(e=gr(o,e),n.tag=1,n=eg(null,n,o,e,a)):(n.tag=0,n=ff(null,n,o,e,a));else{if(o!=null){if(u=o.$$typeof,u===D){n.tag=11,n=Zm(null,n,o,e,a);break t}else if(u===F){n.tag=14,n=Km(null,n,o,e,a);break t}}throw n=At(o)||o,Error(r(306,n,""))}}return n;case 0:return ff(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=gr(o,n.pendingProps),eg(e,n,o,u,a);case 3:t:{if(kt(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,Hu(e,n),lo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,Ta(n,mn,o),o!==d.cache&&Pu(n,[mn],a,!0),oo(),o=M.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=ng(e,n,o,a);break t}else if(o!==u){u=li(Error(r(424)),n),to(u),n=ng(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rn=Ti(e.firstChild),In=n,Pe=!0,ur=null,Oi=!0,a=Bm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if($s(),o===u){n=ia(e,n,a);break t}Cn(e,n,o,a)}n=n.child}return n;case 26:return Gl(e,n),e===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,o=nc(wt.current).createElement(a),o[Ze]=n,o[qe]=e,Dn(o,a,e),nn(o),n.stateNode=o):n.memoizedState=u_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return re(n),e===null&&Pe&&(o=n.stateNode=o_(n.type,n.pendingProps,wt.current),In=n,Oi=!0,u=rn,Ha(n.type)?(Jf=u,rn=Ti(o.firstChild)):rn=u),Cn(e,n,n.pendingProps.children,a),Gl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((u=o=rn)&&(o=xx(o,n.type,n.pendingProps,Oi),o!==null?(n.stateNode=o,In=n,rn=Ti(o.firstChild),Oi=!1,u=!0):u=!1),u||fr(n)),re(n),u=n.type,d=n.pendingProps,M=e!==null?e.memoizedProps:null,o=d.children,jf(u,d)?o=null:M!==null&&jf(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=qu(e,n,By,null,null,a),Uo._currentValue=u),Gl(e,n),Cn(e,n,o,a),n.child;case 6:return e===null&&Pe&&((e=a=rn)&&(a=Sx(a,n.pendingProps,Oi),a!==null?(n.stateNode=a,In=n,rn=null,e=!0):e=!1),e||fr(n)),null;case 13:return ig(e,n,a);case 4:return kt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=is(n,null,o,a):Cn(e,n,o,a),n.child;case 11:return Zm(e,n,n.type,n.pendingProps,a);case 7:return Cn(e,n,n.pendingProps,a),n.child;case 8:return Cn(e,n,n.pendingProps.children,a),n.child;case 12:return Cn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ta(n,n.type,o.value),Cn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=Nn(u),o=o(u),n.flags|=1,Cn(e,n,o,a),n.child;case 14:return Km(e,n,n.type,n.pendingProps,a);case 15:return Qm(e,n,n.type,n.pendingProps,a);case 19:return rg(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Vl(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=Ki(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Jm(e,n,a);case 24:return dr(n),o=Nn(mn),e===null?(u=Iu(),u===null&&(u=je,d=Ou(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Fu(n),Ta(n,mn,u)):((e.lanes&a)!==0&&(Hu(e,n),lo(n,null,null,a),oo()),u=e.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ta(n,mn,o)):(o=d.cache,Ta(n,mn,o),o!==u.cache&&Pu(n,[mn],a,!0))),Cn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function aa(e){e.flags|=4}function og(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m_(n)){if(n=hi.current,n!==null&&((we&4194048)===we?zi!==null:(we&62914560)!==we&&(we&536870912)===0||n!==zi))throw ro=Bu,Xp;e.flags|=8192}}function kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Gt():536870912,e.lanes|=n,os|=n)}function go(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yy(e,n,a){var o=n.pendingProps;switch(Du(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(mn),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Js(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Fp())),$e(n),null;case 26:return a=n.memoizedState,e===null?(aa(n),a!==null?($e(n),og(n,a)):($e(n),n.flags&=-16777217)):a?a!==e.memoizedState?(aa(n),$e(n),og(n,a)):($e(n),n.flags&=-16777217):(e.memoizedProps!==o&&aa(n),$e(n),n.flags&=-16777217),null;case 27:Ie(n),a=wt.current;var u=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $e(n),null}e=tt.current,Js(n)?Ip(n):(e=o_(u,o,a),n.stateNode=e,aa(n))}return $e(n),null;case 5:if(Ie(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return $e(n),null}if(e=tt.current,Js(n))Ip(n);else{switch(u=nc(wt.current),e){case 1:e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=u.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=u.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=u.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?u.createElement("select",{is:o.is}):u.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?u.createElement(a,{is:o.is}):u.createElement(a)}}e[Ze]=n,e[qe]=o;t:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)e.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break t;for(;u.sibling===null;){if(u.return===null||u.return===n)break t;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=e;t:switch(Dn(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&aa(n)}}return $e(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=wt.current,Js(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=In,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Ze]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||fr(n)}else e=nc(e).createTextNode(o),e[Ze]=n,n.stateNode=e}return $e(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Js(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Ze]=n}else $s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),u=!1}else u=Fp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(na(n),n):(na(n),null)}if(na(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),kl(n,n.updateQueue),$e(n),null;case 4:return fe(),e===null&&kf(n.stateNode.containerInfo),$e(n),null;case 10:return ta(n.type),$e(n),null;case 19:if(Ct(gn),u=n.memoizedState,u===null)return $e(n),null;if(o=(n.flags&128)!==0,d=u.rendering,d===null)if(o)go(u,!1);else{if(sn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Bl(e),d!==null){for(n.flags|=128,go(u,!1),e=d.updateQueue,n.updateQueue=e,kl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Op(a,e),a=a.sibling;return Lt(gn,gn.current&1|2),n.child}e=e.sibling}u.tail!==null&&zt()>ql&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304)}else{if(!o)if(e=Bl(d),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,kl(n,e),go(u,!0),u.tail===null&&u.tailMode==="hidden"&&!d.alternate&&!Pe)return $e(n),null}else 2*zt()-u.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,o=!0,go(u,!1),n.lanes=4194304);u.isBackwards?(d.sibling=n.child,n.child=d):(e=u.last,e!==null?e.sibling=d:n.child=d,u.last=d)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=zt(),n.sibling=null,e=gn.current,Lt(gn,o?e&1|2:e&1),n):($e(n),null);case 22:case 23:return na(n),Xu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&kl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&Ct(pr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(mn),$e(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function jy(e,n){switch(Du(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(mn),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ie(n),null;case 13:if(na(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));$s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ct(gn),null;case 4:return fe(),null;case 10:return ta(n.type),null;case 22:case 23:return na(n),Xu(),e!==null&&Ct(pr),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(mn),null;case 25:return null;default:return null}}function lg(e,n){switch(Du(n),n.tag){case 3:ta(mn),fe();break;case 26:case 27:case 5:Ie(n);break;case 4:fe();break;case 13:na(n);break;case 19:Ct(gn);break;case 10:ta(n.type);break;case 22:case 23:na(n),Xu(),e!==null&&Ct(pr);break;case 24:ta(mn)}}function _o(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var d=a.create,M=a.inst;o=d(),M.destroy=o}a=a.next}while(a!==u)}}catch(A){We(n,n.return,A)}}function La(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&e)===e){var M=o.inst,A=M.destroy;if(A!==void 0){M.destroy=void 0,u=n;var z=a,it=A;try{it()}catch(vt){We(u,z,vt)}}}o=o.next}while(o!==d)}}catch(vt){We(n,n.return,vt)}}function cg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Kp(n,a)}catch(o){We(e,e.return,o)}}}function ug(e,n,a){a.props=gr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){We(e,n,o)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){We(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){We(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){We(e,n,u)}else a.current=null}function fg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){We(e,e.return,u)}}function yf(e,n,a){try{var o=e.stateNode;mx(o,e.type,a,n),o[qe]=n}catch(u){We(e,e.return,u)}}function hg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ha(e.type)||e.tag===4}function xf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ha(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ec));else if(o!==4&&(o===27&&Ha(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sf(e,n,a),e=e.sibling;e!==null;)Sf(e,n,a),e=e.sibling}function Xl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ha(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Xl(e,n,a),e=e.sibling;e!==null;)Xl(e,n,a),e=e.sibling}function dg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[Ze]=e,n[qe]=a}catch(d){We(e,e.return,d)}}var ra=!1,cn=!1,Mf=!1,pg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Zy(e,n){if(e=e.containerInfo,qf=lc,e=Tp(e),yu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var M=0,A=-1,z=-1,it=0,vt=0,Rt=e,ot=null;e:for(;;){for(var lt;Rt!==a||u!==0&&Rt.nodeType!==3||(A=M+u),Rt!==d||o!==0&&Rt.nodeType!==3||(z=M+o),Rt.nodeType===3&&(M+=Rt.nodeValue.length),(lt=Rt.firstChild)!==null;)ot=Rt,Rt=lt;for(;;){if(Rt===e)break e;if(ot===a&&++it===u&&(A=M),ot===d&&++vt===o&&(z=M),(lt=Rt.nextSibling)!==null)break;Rt=ot,ot=Rt.parentNode}Rt=lt}a=A===-1||z===-1?null:{start:A,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Yf={focusedElem:e,selectionRange:a},lc=!1,Mn=n;Mn!==null;)if(n=Mn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,Mn=e;else for(;Mn!==null;){switch(n=Mn,d=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ce=gr(a.type,u,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(se){We(a,a.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Mn=e;break}Mn=n.return}}function mg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),o&4&&_o(5,a);break;case 1:if(Na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){We(a,a.return,M)}else{var u=gr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){We(a,a.return,M)}}o&64&&cg(a),o&512&&vo(a,a.return);break;case 3:if(Na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Kp(e,n)}catch(M){We(a,a.return,M)}}break;case 27:n===null&&o&4&&dg(a);case 26:case 5:Na(e,a),n===null&&o&4&&fg(a),o&512&&vo(a,a.return);break;case 12:Na(e,a);break;case 13:Na(e,a),o&4&&vg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ax.bind(null,a),Mx(e,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||cn,u=ra;var d=cn;ra=o,(cn=n)&&!d?Pa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),ra=u,cn=d}break;case 30:break;default:Na(e,a)}}function gg(e){var n=e.alternate;n!==null&&(e.alternate=null,gg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&jn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Vn=!1;function sa(e,n,a){for(a=a.child;a!==null;)_g(e,n,a),a=a.sibling}function _g(e,n,a){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(rt,a)}catch{}switch(a.tag){case 26:cn||Ii(a,n),sa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ii(a,n);var o=Qe,u=Vn;Ha(a.type)&&(Qe=a.stateNode,Vn=!1),sa(e,n,a),Ro(a.stateNode),Qe=o,Vn=u;break;case 5:cn||Ii(a,n);case 6:if(o=Qe,u=Vn,Qe=null,sa(e,n,a),Qe=o,Vn=u,Qe!==null)if(Vn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(d){We(a,n,d)}else try{Qe.removeChild(a.stateNode)}catch(d){We(a,n,d)}break;case 18:Qe!==null&&(Vn?(e=Qe,r_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Oo(e)):r_(Qe,a.stateNode));break;case 4:o=Qe,u=Vn,Qe=a.stateNode.containerInfo,Vn=!0,sa(e,n,a),Qe=o,Vn=u;break;case 0:case 11:case 14:case 15:cn||La(2,a,n),cn||La(4,a,n),sa(e,n,a);break;case 1:cn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&ug(a,n,o)),sa(e,n,a);break;case 21:sa(e,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,sa(e,n,a),cn=o;break;default:sa(e,n,a)}}function vg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Oo(e)}catch(a){We(n,n.return,a)}}function Ky(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pg),n;default:throw Error(r(435,e.tag))}}function Ef(e,n){var a=Ky(e);n.forEach(function(o){var u=rx.bind(null,e,o);a.has(o)||(a.add(o),o.then(u,u))})}function Jn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=e,M=n,A=M;t:for(;A!==null;){switch(A.tag){case 27:if(Ha(A.type)){Qe=A.stateNode,Vn=!1;break t}break;case 5:Qe=A.stateNode,Vn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Vn=!0;break t}A=A.return}if(Qe===null)throw Error(r(160));_g(d,M,u),Qe=null,Vn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)yg(n,e),n=n.sibling}var bi=null;function yg(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Jn(n,e),$n(e),o&4&&(La(3,e,e.return),_o(3,e),La(5,e,e.return));break;case 1:Jn(n,e),$n(e),o&512&&(cn||a===null||Ii(a,a.return)),o&64&&ra&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=bi;if(Jn(n,e),$n(e),o&512&&(cn||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[Yn]||d[Ze]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,o,a),d[Ze]=e,nn(d),o=d;break t;case"link":var M=d_("link","href",u).get(o+(a.href||""));if(M){for(var A=0;A<M.length;A++)if(d=M[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;case"meta":if(M=d_("meta","content",u).get(o+(a.content||""))){for(A=0;A<M.length;A++)if(d=M[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(A,1);break e}}d=u.createElement(o),Dn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[Ze]=e,nn(d),o=d}e.stateNode=o}else p_(u,e.type,e.stateNode);else e.stateNode=h_(u,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?p_(u,e.type,e.stateNode):h_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&yf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Jn(n,e),$n(e),o&512&&(cn||a===null||Ii(a,a.return)),a!==null&&o&4&&yf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Jn(n,e),$n(e),o&512&&(cn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{Pi(u,"")}catch(lt){We(e,e.return,lt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,yf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(Mf=!0);break;case 6:if(Jn(n,e),$n(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(lt){We(e,e.return,lt)}}break;case 3:if(rc=null,u=bi,bi=ic(n.containerInfo),Jn(n,e),bi=u,$n(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Oo(n.containerInfo)}catch(lt){We(e,e.return,lt)}Mf&&(Mf=!1,xg(e));break;case 4:o=bi,bi=ic(e.stateNode.containerInfo),Jn(n,e),$n(e),bi=o;break;case 12:Jn(n,e),$n(e);break;case 13:Jn(n,e),$n(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wf=zt()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 22:u=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,it=ra,vt=cn;if(ra=it||u,cn=vt||z,Jn(n,e),cn=vt,ra=it,$n(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||z||ra||cn||_r(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(d=z.stateNode,u)M=d.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{A=z.stateNode;var Rt=z.memoizedProps.style,ot=Rt!=null&&Rt.hasOwnProperty("display")?Rt.display:null;A.style.display=ot==null||typeof ot=="boolean"?"":(""+ot).trim()}}catch(lt){We(z,z.return,lt)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=u?"":z.memoizedProps}catch(lt){We(z,z.return,lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ef(e,a))));break;case 19:Jn(n,e),$n(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ef(e,o)));break;case 30:break;case 21:break;default:Jn(n,e),$n(e)}}function $n(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(hg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=xf(e);Xl(e,d,u);break;case 5:var M=a.stateNode;a.flags&32&&(Pi(M,""),a.flags&=-33);var A=xf(e);Xl(e,A,M);break;case 3:case 4:var z=a.stateNode.containerInfo,it=xf(e);Sf(e,it,z);break;default:throw Error(r(161))}}catch(vt){We(e,e.return,vt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;xg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mg(e,n.alternate,n),n=n.sibling}function _r(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:La(4,n,n.return),_r(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ug(n,n.return,a),_r(n);break;case 27:Ro(n.stateNode);case 26:case 5:Ii(n,n.return),_r(n);break;case 22:n.memoizedState===null&&_r(n);break;case 30:_r(n);break;default:_r(n)}e=e.sibling}}function Pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,d=n,M=d.flags;switch(d.tag){case 0:case 11:case 15:Pa(u,d,a),_o(4,d);break;case 1:if(Pa(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(it){We(o,o.return,it)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var z=u.shared.hiddenCallbacks;if(z!==null)for(u.shared.hiddenCallbacks=null,u=0;u<z.length;u++)Zp(z[u],A)}catch(it){We(o,o.return,it)}}a&&M&64&&cg(d),vo(d,d.return);break;case 27:dg(d);case 26:case 5:Pa(u,d,a),a&&o===null&&M&4&&fg(d),vo(d,d.return);break;case 12:Pa(u,d,a);break;case 13:Pa(u,d,a),a&&M&4&&vg(u,d);break;case 22:d.memoizedState===null&&Pa(u,d,a),vo(d,d.return);break;case 30:break;default:Pa(u,d,a)}n=n.sibling}}function bf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function Tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Bi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sg(e,n,a,o),n=n.sibling}function Sg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Bi(e,n,a,o),u&2048&&_o(9,n);break;case 1:Bi(e,n,a,o);break;case 3:Bi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(u&2048){Bi(e,n,a,o),e=n.stateNode;try{var d=n.memoizedProps,M=d.id,A=d.onPostCommit;typeof A=="function"&&A(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){We(n,n.return,z)}}else Bi(e,n,a,o);break;case 13:Bi(e,n,a,o);break;case 23:break;case 22:d=n.stateNode,M=n.alternate,n.memoizedState!==null?d._visibility&2?Bi(e,n,a,o):yo(e,n):d._visibility&2?Bi(e,n,a,o):(d._visibility|=2,as(e,n,a,o,(n.subtreeFlags&10256)!==0)),u&2048&&bf(M,n);break;case 24:Bi(e,n,a,o),u&2048&&Tf(n.alternate,n);break;default:Bi(e,n,a,o)}}function as(e,n,a,o,u){for(u=u&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var d=e,M=n,A=a,z=o,it=M.flags;switch(M.tag){case 0:case 11:case 15:as(d,M,A,z,u),_o(8,M);break;case 23:break;case 22:var vt=M.stateNode;M.memoizedState!==null?vt._visibility&2?as(d,M,A,z,u):yo(d,M):(vt._visibility|=2,as(d,M,A,z,u)),u&&it&2048&&bf(M.alternate,M);break;case 24:as(d,M,A,z,u),u&&it&2048&&Tf(M.alternate,M);break;default:as(d,M,A,z,u)}n=n.sibling}}function yo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:yo(a,o),u&2048&&bf(o.alternate,o);break;case 24:yo(a,o),u&2048&&Tf(o.alternate,o);break;default:yo(a,o)}n=n.sibling}}var xo=8192;function rs(e){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)Mg(e),e=e.sibling}function Mg(e){switch(e.tag){case 26:rs(e),e.flags&xo&&e.memoizedState!==null&&Ox(bi,e.memoizedState,e.memoizedProps);break;case 5:rs(e);break;case 3:case 4:var n=bi;bi=ic(e.stateNode.containerInfo),rs(e),bi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=xo,xo=16777216,rs(e),xo=n):rs(e));break;default:rs(e)}}function Eg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Tg(o,e)}Eg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bg(e),e=e.sibling}function bg(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&La(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):So(e);break;default:So(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Mn=o,Tg(o,e)}Eg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:La(8,n,n.return),Wl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function Tg(e,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:La(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Mn=o;else t:for(a=e;Mn!==null;){o=Mn;var u=o.sibling,d=o.return;if(gg(o),o===a){Mn=null;break t}if(u!==null){u.return=d,Mn=u;break t}Mn=d}}}var Qy={getCacheForType:function(e){var n=Nn(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Jy=typeof WeakMap=="function"?WeakMap:Map,Oe=0,je=null,Me=null,we=0,ze=0,ti=null,Oa=!1,ss=!1,Af=!1,oa=0,sn=0,za=0,vr=0,Rf=0,di=0,os=0,Mo=null,kn=null,Cf=!1,wf=0,ql=1/0,Yl=null,Ia=null,wn=0,Ba=null,ls=null,cs=0,Df=0,Uf=null,Ag=null,Eo=0,Lf=null;function ei(){if((Oe&2)!==0&&we!==0)return we&-we;if(I.T!==null){var e=Kr;return e!==0?e:Ff()}return Ae()}function Rg(){di===0&&(di=(we&536870912)===0||Pe?W():536870912);var e=hi.current;return e!==null&&(e.flags|=32),di}function ni(e,n,a){(e===je&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(us(e,0),Fa(e,we,di,!1)),_t(e,a),((Oe&2)===0||e!==je)&&(e===je&&((Oe&2)===0&&(vr|=a),sn===4&&Fa(e,we,di,!1)),Fi(e))}function Cg(e,n,a){if((Oe&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||Kt(e,n),u=o?ex(e,n):Of(e,n,!0),d=o;do{if(u===0){ss&&!o&&Fa(e,n,0,!1);break}else{if(a=e.current.alternate,d&&!$y(a)){u=Of(e,n,!1),d=!1;continue}if(u===2){if(d=n,e.errorRecoveryDisabledLanes&d)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var A=e;u=Mo;var z=A.current.memoizedState.isDehydrated;if(z&&(us(A,M).flags|=256),M=Of(A,M,!1),M!==2){if(Af&&!z){A.errorRecoveryDisabledLanes|=d,vr|=d,u=4;break t}d=kn,kn=u,d!==null&&(kn===null?kn=d:kn.push.apply(kn,d))}u=M}if(d=!1,u!==2)continue}}if(u===1){us(e,0),Fa(e,n,0,!0);break}t:{switch(o=e,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Fa(o,n,di,!Oa);break t;case 2:kn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=wf+300-zt(),10<u)){if(Fa(o,n,di,!Oa),Jt(o,0,!0)!==0)break t;o.timeoutHandle=i_(wg.bind(null,o,a,kn,Yl,Cf,n,di,vr,os,Oa,d,2,-0,0),u);break t}wg(o,a,kn,Yl,Cf,n,di,vr,os,Oa,d,0,-0,0)}}break}while(!0);Fi(e)}function wg(e,n,a,o,u,d,M,A,z,it,vt,Rt,ot,lt){if(e.timeoutHandle=-1,Rt=n.subtreeFlags,(Rt&8192||(Rt&16785408)===16785408)&&(Do={stylesheets:null,count:0,unsuspend:Px},Mg(n),Rt=zx(),Rt!==null)){e.cancelPendingCommit=Rt(zg.bind(null,e,n,d,a,o,u,M,A,z,vt,1,ot,lt)),Fa(e,d,M,!it);return}zg(e,n,d,a,o,u,M,A,z)}function $y(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Fa(e,n,a,o){n&=~Rf,n&=~vr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var d=31-ft(u),M=1<<d;o[d]=-1,u&=~M}a!==0&&Bt(e,a,n)}function jl(){return(Oe&6)===0?(bo(0),!1):!0}function Nf(){if(Me!==null){if(ze===0)var e=Me.return;else e=Me,$i=hr=null,Zu(e),ns=null,po=0,e=Me;for(;e!==null;)lg(e.alternate,e),e=e.return;Me=null}}function us(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,_x(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Nf(),je=e,Me=a=Ki(e.current,null),we=n,ze=0,ti=null,Oa=!1,ss=Kt(e,n),Af=!1,os=di=Rf=vr=za=sn=0,kn=Mo=null,Cf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ft(o),d=1<<u;n|=e[u],o&=~d}return oa=n,gl(),a}function Dg(e,n){_e=null,I.H=Ol,n===ao||n===Tl?(n=Yp(),ze=3):n===Xp?(n=Yp(),ze=4):ze=n===jm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Me===null&&(sn=1,Hl(e,li(n,e.current)))}function Ug(){var e=I.H;return I.H=Ol,e===null?Ol:e}function Lg(){var e=I.A;return I.A=Qy,e}function Pf(){sn=4,Oa||(we&4194048)!==we&&hi.current!==null||(ss=!0),(za&134217727)===0&&(vr&134217727)===0||je===null||Fa(je,we,di,!1)}function Of(e,n,a){var o=Oe;Oe|=2;var u=Ug(),d=Lg();(je!==e||we!==n)&&(Yl=null,us(e,n)),n=!1;var M=sn;t:do try{if(ze!==0&&Me!==null){var A=Me,z=ti;switch(ze){case 8:Nf(),M=6;break t;case 3:case 2:case 9:case 6:hi.current===null&&(n=!0);var it=ze;if(ze=0,ti=null,fs(e,A,z,it),a&&ss){M=0;break t}break;default:it=ze,ze=0,ti=null,fs(e,A,z,it)}}tx(),M=sn;break}catch(vt){Dg(e,vt)}while(!0);return n&&e.shellSuspendCounter++,$i=hr=null,Oe=o,I.H=u,I.A=d,Me===null&&(je=null,we=0,gl()),M}function tx(){for(;Me!==null;)Ng(Me)}function ex(e,n){var a=Oe;Oe|=2;var o=Ug(),u=Lg();je!==e||we!==n?(Yl=null,ql=zt()+500,us(e,n)):ss=Kt(e,n);t:do try{if(ze!==0&&Me!==null){n=Me;var d=ti;e:switch(ze){case 1:ze=0,ti=null,fs(e,n,d,1);break;case 2:case 9:if(Wp(d)){ze=0,ti=null,Pg(n);break}n=function(){ze!==2&&ze!==9||je!==e||(ze=7),Fi(e)},d.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:Wp(d)?(ze=0,ti=null,Pg(n)):(ze=0,ti=null,fs(e,n,d,7));break;case 5:var M=null;switch(Me.tag){case 26:M=Me.memoizedState;case 5:case 27:var A=Me;if(!M||m_(M)){ze=0,ti=null;var z=A.sibling;if(z!==null)Me=z;else{var it=A.return;it!==null?(Me=it,Zl(it)):Me=null}break e}}ze=0,ti=null,fs(e,n,d,5);break;case 6:ze=0,ti=null,fs(e,n,d,6);break;case 8:Nf(),sn=6;break t;default:throw Error(r(462))}}nx();break}catch(vt){Dg(e,vt)}while(!0);return $i=hr=null,I.H=o,I.A=u,Oe=a,Me!==null?0:(je=null,we=0,gl(),sn)}function nx(){for(;Me!==null&&!Dt();)Ng(Me)}function Ng(e){var n=sg(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Zl(e):Me=n}function Pg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=tg(a,n,n.pendingProps,n.type,void 0,we);break;case 11:n=tg(a,n,n.pendingProps,n.type.render,n.ref,we);break;case 5:Zu(n);default:lg(a,n),n=Me=Op(n,oa),n=sg(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Zl(e):Me=n}function fs(e,n,a,o){$i=hr=null,Zu(n),ns=null,po=0;var u=n.return;try{if(Wy(e,u,n,a,we)){sn=1,Hl(e,li(a,e.current)),Me=null;return}}catch(d){if(u!==null)throw Me=u,d;sn=1,Hl(e,li(a,e.current)),Me=null;return}n.flags&32768?(Pe||o===1?e=!0:ss||(we&536870912)!==0?e=!1:(Oa=e=!0,(o===2||o===9||o===3||o===6)&&(o=hi.current,o!==null&&o.tag===13&&(o.flags|=16384))),Og(n,e)):Zl(n)}function Zl(e){var n=e;do{if((n.flags&32768)!==0){Og(n,Oa);return}e=n.return;var a=Yy(n.alternate,n,oa);if(a!==null){Me=a;return}if(n=n.sibling,n!==null){Me=n;return}Me=n=e}while(n!==null);sn===0&&(sn=5)}function Og(e,n){do{var a=jy(e.alternate,e);if(a!==null){a.flags&=32767,Me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Me=e;return}Me=e=a}while(e!==null);sn=6,Me=null}function zg(e,n,a,o,u,d,M,A,z){e.cancelPendingCommit=null;do Kl();while(wn!==0);if((Oe&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=bu,It(e,a,d,M,A,z),e===je&&(Me=je=null,we=0),ls=n,Ba=e,cs=a,Df=d,Uf=u,Ag=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sx(w,function(){return Gg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=Q.p,Q.p=2,M=Oe,Oe|=4;try{Zy(e,n,a)}finally{Oe=M,Q.p=u,I.T=o}}wn=1,Ig(),Bg(),Fg()}}function Ig(){if(wn===1){wn=0;var e=Ba,n=ls,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Oe;Oe|=4;try{yg(n,e);var d=Yf,M=Tp(e.containerInfo),A=d.focusedElem,z=d.selectionRange;if(M!==A&&A&&A.ownerDocument&&bp(A.ownerDocument.documentElement,A)){if(z!==null&&yu(A)){var it=z.start,vt=z.end;if(vt===void 0&&(vt=it),"selectionStart"in A)A.selectionStart=it,A.selectionEnd=Math.min(vt,A.value.length);else{var Rt=A.ownerDocument||document,ot=Rt&&Rt.defaultView||window;if(ot.getSelection){var lt=ot.getSelection(),ce=A.textContent.length,se=Math.min(z.start,ce),Ge=z.end===void 0?se:Math.min(z.end,ce);!lt.extend&&se>Ge&&(M=Ge,Ge=se,se=M);var Y=Ep(A,se),k=Ep(A,Ge);if(Y&&k&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var et=Rt.createRange();et.setStart(Y.node,Y.offset),lt.removeAllRanges(),se>Ge?(lt.addRange(et),lt.extend(k.node,k.offset)):(et.setEnd(k.node,k.offset),lt.addRange(et))}}}}for(Rt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&Rt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Rt.length;A++){var Mt=Rt[A];Mt.element.scrollLeft=Mt.left,Mt.element.scrollTop=Mt.top}}lc=!!qf,Yf=qf=null}finally{Oe=u,Q.p=o,I.T=a}}e.current=n,wn=2}}function Bg(){if(wn===2){wn=0;var e=Ba,n=ls,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=Q.p;Q.p=2;var u=Oe;Oe|=4;try{mg(e,n.alternate,n)}finally{Oe=u,Q.p=o,I.T=a}}wn=3}}function Fg(){if(wn===4||wn===3){wn=0,Pt();var e=Ba,n=ls,a=cs,o=Ag;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?wn=5:(wn=0,ls=Ba=null,Hg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ia=null),Be(a),n=n.stateNode,St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(rt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=Q.p,Q.p=2,I.T=null;try{for(var d=e.onRecoverableError,M=0;M<o.length;M++){var A=o[M];d(A.value,{componentStack:A.stack})}}finally{I.T=n,Q.p=u}}(cs&3)!==0&&Kl(),Fi(e),u=e.pendingLanes,(a&4194090)!==0&&(u&42)!==0?e===Lf?Eo++:(Eo=0,Lf=e):Eo=0,bo(0)}}function Hg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Kl(e){return Ig(),Bg(),Fg(),Gg()}function Gg(){if(wn!==5)return!1;var e=Ba,n=Df;Df=0;var a=Be(cs),o=I.T,u=Q.p;try{Q.p=32>a?32:a,I.T=null,a=Uf,Uf=null;var d=Ba,M=cs;if(wn=0,ls=Ba=null,cs=0,(Oe&6)!==0)throw Error(r(331));var A=Oe;if(Oe|=4,bg(d.current),Sg(d,d.current,M,a),Oe=A,bo(0,!1),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(rt,d)}catch{}return!0}finally{Q.p=u,I.T=o,Hg(e,n)}}function Vg(e,n,a){n=li(a,n),n=uf(e.stateNode,n,2),e=Ca(e,n,2),e!==null&&(_t(e,2),Fi(e))}function We(e,n,a){if(e.tag===3)Vg(e,e,a);else for(;n!==null;){if(n.tag===3){Vg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){e=li(a,e),a=qm(2),o=Ca(n,a,2),o!==null&&(Ym(a,o,n,e),_t(o,2),Fi(o));break}}n=n.return}}function zf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Af=!0,u.add(a),e=ix.bind(null,e,n,a),n.then(e,e))}function ix(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(we&a)===a&&(sn===4||sn===3&&(we&62914560)===we&&300>zt()-wf?(Oe&2)===0&&us(e,0):Rf|=a,os===we&&(os=0)),Fi(e)}function kg(e,n){n===0&&(n=Gt()),e=qr(e,n),e!==null&&(_t(e,n),Fi(e))}function ax(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),kg(e,a)}function rx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),kg(e,a)}function sx(e,n){return $(e,n)}var Ql=null,hs=null,If=!1,Jl=!1,Bf=!1,yr=0;function Fi(e){e!==hs&&e.next===null&&(hs===null?Ql=hs=e:hs=hs.next=e),Jl=!0,If||(If=!0,lx())}function bo(e,n){if(!Bf&&Jl){Bf=!0;do for(var a=!1,o=Ql;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var M=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-ft(42|e)+1)-1,d&=u&~(M&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,Yg(o,d))}else d=we,d=Jt(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Kt(o,d)||(a=!0,Yg(o,d));o=o.next}while(a);Bf=!1}}function ox(){Xg()}function Xg(){Jl=If=!1;var e=0;yr!==0&&(gx()&&(e=yr),yr=0);for(var n=zt(),a=null,o=Ql;o!==null;){var u=o.next,d=Wg(o,n);d===0?(o.next=null,a===null?Ql=u:a.next=u,u===null&&(hs=a)):(a=o,(e!==0||(d&3)!==0)&&(Jl=!0)),o=u}bo(e)}function Wg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var M=31-ft(d),A=1<<M,z=u[M];z===-1?((A&a)===0||(A&o)!==0)&&(u[M]=he(A,n)):z<=n&&(e.expiredLanes|=A),d&=~A}if(n=je,a=we,a=Jt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&U(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Kt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&U(o),Be(a)){case 2:case 8:a=Ut;break;case 32:a=w;break;case 268435456:a=H;break;default:a=w}return o=qg.bind(null,e),a=$(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&U(o),e.callbackPriority=2,e.callbackNode=null,2}function qg(e,n){if(wn!==0&&wn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Kl()&&e.callbackNode!==a)return null;var o=we;return o=Jt(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Cg(e,o,n),Wg(e,zt()),e.callbackNode!=null&&e.callbackNode===a?qg.bind(null,e):null)}function Yg(e,n){if(Kl())return null;Cg(e,n,!0)}function lx(){vx(function(){(Oe&6)!==0?$(Ft,ox):Xg()})}function Ff(){return yr===0&&(yr=W()),yr}function jg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:cl(""+e)}function Zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=jg((u[qe]||null).action),M=o.submitter;M&&(n=(n=M[qe]||null)?jg(n.formAction):M.getAttribute("formAction"),n!==null&&(d=n,M=null));var A=new dl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(yr!==0){var z=M?Zg(u,M):new FormData(u);rf(a,{pending:!0,data:z,method:u.method,action:d},null,z)}}else typeof d=="function"&&(A.preventDefault(),z=M?Zg(u,M):new FormData(u),rf(a,{pending:!0,data:z,method:u.method,action:d},d,z))},currentTarget:u}]})}}for(var Hf=0;Hf<Eu.length;Hf++){var Gf=Eu[Hf],ux=Gf.toLowerCase(),fx=Gf[0].toUpperCase()+Gf.slice(1);Ei(ux,"on"+fx)}Ei(Cp,"onAnimationEnd"),Ei(wp,"onAnimationIteration"),Ei(Dp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(Cy,"onTransitionRun"),Ei(wy,"onTransitionStart"),Ei(Dy,"onTransitionCancel"),Ei(Up,"onTransitionEnd"),C("onMouseEnter",["mouseout","mouseover"]),C("onMouseLeave",["mouseout","mouseover"]),C("onPointerEnter",["pointerout","pointerover"]),C("onPointerLeave",["pointerout","pointerover"]),oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),oi("onBeforeInput",["compositionend","keypress","textInput","paste"]),oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var To="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(To));function Kg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var d=void 0;if(n)for(var M=o.length-1;0<=M;M--){var A=o[M],z=A.instance,it=A.currentTarget;if(A=A.listener,z!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(vt){Fl(vt)}u.currentTarget=null,d=z}else for(M=0;M<o.length;M++){if(A=o[M],z=A.instance,it=A.currentTarget,A=A.listener,z!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=it;try{d(u)}catch(vt){Fl(vt)}u.currentTarget=null,d=z}}}}function Ee(e,n){var a=n[An];a===void 0&&(a=n[An]=new Set);var o=e+"__bubble";a.has(o)||(Qg(n,e,2,!1),a.add(o))}function Vf(e,n,a){var o=0;n&&(o|=4),Qg(a,e,o,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function kf(e){if(!e[$l]){e[$l]=!0,Fr.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Vf("selectionchange",!1,n))}}function Qg(e,n,a,o){switch(S_(n)){case 2:var u=Fx;break;case 8:u=Hx;break;default:u=ih}a=u.bind(null,n,a,e),u=void 0,!uu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Xf(e,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var A=o.stateNode.containerInfo;if(A===u)break;if(M===4)for(M=o.return;M!==null;){var z=M.tag;if((z===3||z===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;A!==null;){if(M=Si(A),M===null)return;if(z=M.tag,z===5||z===6||z===26||z===27){o=d=M;continue t}A=A.parentNode}}o=o.return}ap(function(){var it=d,vt=lu(a),Rt=[];t:{var ot=Lp.get(e);if(ot!==void 0){var lt=dl,ce=e;switch(e){case"keypress":if(fl(a)===0)break t;case"keydown":case"keyup":lt=sy;break;case"focusin":ce="focus",lt=pu;break;case"focusout":ce="blur",lt=pu;break;case"beforeblur":case"afterblur":lt=pu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=op;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=cy;break;case Cp:case wp:case Dp:lt=Qv;break;case Up:lt=fy;break;case"scroll":case"scrollend":lt=qv;break;case"wheel":lt=dy;break;case"copy":case"cut":case"paste":lt=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=cp;break;case"toggle":case"beforetoggle":lt=my}var se=(n&4)!==0,Ge=!se&&(e==="scroll"||e==="scrollend"),Y=se?ot!==null?ot+"Capture":null:ot;se=[];for(var k=it,et;k!==null;){var Mt=k;if(et=Mt.stateNode,Mt=Mt.tag,Mt!==5&&Mt!==26&&Mt!==27||et===null||Y===null||(Mt=ks(k,Y),Mt!=null&&se.push(Ao(k,Mt,et))),Ge)break;k=k.return}0<se.length&&(ot=new lt(ot,ce,null,a,vt),Rt.push({event:ot,listeners:se}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",ot&&a!==ou&&(ce=a.relatedTarget||a.fromElement)&&(Si(ce)||ce[xe]))break t;if((lt||ot)&&(ot=vt.window===vt?vt:(ot=vt.ownerDocument)?ot.defaultView||ot.parentWindow:window,lt?(ce=a.relatedTarget||a.toElement,lt=it,ce=ce?Si(ce):null,ce!==null&&(Ge=c(ce),se=ce.tag,ce!==Ge||se!==5&&se!==27&&se!==6)&&(ce=null)):(lt=null,ce=it),lt!==ce)){if(se=op,Mt="onMouseLeave",Y="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(se=cp,Mt="onPointerLeave",Y="onPointerEnter",k="pointer"),Ge=lt==null?ot:Ni(lt),et=ce==null?ot:Ni(ce),ot=new se(Mt,k+"leave",lt,a,vt),ot.target=Ge,ot.relatedTarget=et,Mt=null,Si(vt)===it&&(se=new se(Y,k+"enter",ce,a,vt),se.target=et,se.relatedTarget=Ge,Mt=se),Ge=Mt,lt&&ce)e:{for(se=lt,Y=ce,k=0,et=se;et;et=ds(et))k++;for(et=0,Mt=Y;Mt;Mt=ds(Mt))et++;for(;0<k-et;)se=ds(se),k--;for(;0<et-k;)Y=ds(Y),et--;for(;k--;){if(se===Y||Y!==null&&se===Y.alternate)break e;se=ds(se),Y=ds(Y)}se=null}else se=null;lt!==null&&Jg(Rt,ot,lt,se,!1),ce!==null&&Ge!==null&&Jg(Rt,Ge,ce,se,!0)}}t:{if(ot=it?Ni(it):window,lt=ot.nodeName&&ot.nodeName.toLowerCase(),lt==="select"||lt==="input"&&ot.type==="file")var Qt=_p;else if(mp(ot))if(vp)Qt=Ty;else{Qt=Ey;var ve=My}else lt=ot.nodeName,!lt||lt.toLowerCase()!=="input"||ot.type!=="checkbox"&&ot.type!=="radio"?it&&su(it.elementType)&&(Qt=_p):Qt=by;if(Qt&&(Qt=Qt(e,it))){gp(Rt,Qt,a,vt);break t}ve&&ve(e,ot,it),e==="focusout"&&it&&ot.type==="number"&&it.memoizedProps.value!=null&&Ln(ot,"number",ot.value)}switch(ve=it?Ni(it):window,e){case"focusin":(mp(ve)||ve.contentEditable==="true")&&(kr=ve,xu=it,Qs=null);break;case"focusout":Qs=xu=kr=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,Ap(Rt,a,vt);break;case"selectionchange":if(Ry)break;case"keydown":case"keyup":Ap(Rt,a,vt)}var ee;if(gu)t:{switch(e){case"compositionstart":var oe="onCompositionStart";break t;case"compositionend":oe="onCompositionEnd";break t;case"compositionupdate":oe="onCompositionUpdate";break t}oe=void 0}else Vr?dp(e,a)&&(oe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(oe="onCompositionStart");oe&&(up&&a.locale!=="ko"&&(Vr||oe!=="onCompositionStart"?oe==="onCompositionEnd"&&Vr&&(ee=rp()):(ba=vt,fu="value"in ba?ba.value:ba.textContent,Vr=!0)),ve=tc(it,oe),0<ve.length&&(oe=new lp(oe,e,null,a,vt),Rt.push({event:oe,listeners:ve}),ee?oe.data=ee:(ee=pp(a),ee!==null&&(oe.data=ee)))),(ee=_y?vy(e,a):yy(e,a))&&(oe=tc(it,"onBeforeInput"),0<oe.length&&(ve=new lp("onBeforeInput","beforeinput",null,a,vt),Rt.push({event:ve,listeners:oe}),ve.data=ee)),cx(Rt,e,it,a,vt)}Kg(Rt,n)})}function Ao(e,n,a){return{instance:e,listener:n,currentTarget:a}}function tc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=ks(e,a),u!=null&&o.unshift(Ao(e,u,d)),u=ks(e,n),u!=null&&o.push(Ao(e,u,d))),e.tag===3)return o;e=e.return}return[]}function ds(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jg(e,n,a,o,u){for(var d=n._reactName,M=[];a!==null&&a!==o;){var A=a,z=A.alternate,it=A.stateNode;if(A=A.tag,z!==null&&z===o)break;A!==5&&A!==26&&A!==27||it===null||(z=it,u?(it=ks(a,d),it!=null&&M.unshift(Ao(a,it,z))):u||(it=ks(a,d),it!=null&&M.push(Ao(a,it,z)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function $g(e){return(typeof e=="string"?e:""+e).replace(dx,`
`).replace(px,"")}function t_(e,n){return n=$g(n),$g(e)===n}function ec(){}function He(e,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Pi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Pi(e,""+o);break;case"className":Xt(e,"class",o);break;case"tabIndex":Xt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xt(e,a,o);break;case"style":np(e,o,d);break;case"data":if(n!=="object"){Xt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&He(e,n,"name",u.name,u,null),He(e,n,"formEncType",u.formEncType,u,null),He(e,n,"formMethod",u.formMethod,u,null),He(e,n,"formTarget",u.formTarget,u,null)):(He(e,n,"encType",u.encType,u,null),He(e,n,"method",u.method,u,null),He(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=cl(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ec);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=cl(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ee("beforetoggle",e),Ee("toggle",e),Ot(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Ot(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xv.get(a)||a,Ot(e,a,o))}}function Wf(e,n,a,o,u,d){switch(a){case"style":np(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Pi(e,o):(typeof o=="number"||typeof o=="bigint")&&Pi(e,""+o);break;case"onScroll":o!=null&&Ee("scroll",e);break;case"onScrollEnd":o!=null&&Ee("scrollend",e);break;case"onClick":o!=null&&(e.onclick=ec);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ir.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=e[qe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Ot(e,a,o)}}}function Dn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",e),Ee("load",e);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var M=a[d];if(M!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,d,M,a,null)}}u&&He(e,n,"srcSet",a.srcSet,a,null),o&&He(e,n,"src",a.src,a,null);return;case"input":Ee("invalid",e);var A=d=M=u=null,z=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var vt=a[o];if(vt!=null)switch(o){case"name":u=vt;break;case"type":M=vt;break;case"checked":z=vt;break;case"defaultChecked":it=vt;break;case"value":d=vt;break;case"defaultValue":A=vt;break;case"children":case"dangerouslySetInnerHTML":if(vt!=null)throw Error(r(137,n));break;default:He(e,n,o,vt,a,null)}}Xe(e,d,A,z,it,M,u,!1),an(e);return;case"select":Ee("invalid",e),o=M=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":M=A;break;case"multiple":o=A;default:He(e,n,u,A,a,null)}n=d,a=M,e.multiple=!!o,n!=null?pn(e,!!o,n,!1):a!=null&&pn(e,!!o,a,!0);return;case"textarea":Ee("invalid",e),d=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(A=a[M],A!=null))switch(M){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:He(e,n,M,A,a,null)}Rn(e,o,u,d),an(e);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:He(e,n,z,o,a,null)}return;case"dialog":Ee("beforetoggle",e),Ee("toggle",e),Ee("cancel",e),Ee("close",e);break;case"iframe":case"object":Ee("load",e);break;case"video":case"audio":for(o=0;o<To.length;o++)Ee(To[o],e);break;case"image":Ee("error",e),Ee("load",e);break;case"details":Ee("toggle",e);break;case"embed":case"source":case"link":Ee("error",e),Ee("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:He(e,n,it,o,a,null)}return;default:if(su(n)){for(vt in a)a.hasOwnProperty(vt)&&(o=a[vt],o!==void 0&&Wf(e,n,vt,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&He(e,n,A,o,a,null))}function mx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,M=null,A=null,z=null,it=null,vt=null;for(lt in a){var Rt=a[lt];if(a.hasOwnProperty(lt)&&Rt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":z=Rt;default:o.hasOwnProperty(lt)||He(e,n,lt,null,o,Rt)}}for(var ot in o){var lt=o[ot];if(Rt=a[ot],o.hasOwnProperty(ot)&&(lt!=null||Rt!=null))switch(ot){case"type":d=lt;break;case"name":u=lt;break;case"checked":it=lt;break;case"defaultChecked":vt=lt;break;case"value":M=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(r(137,n));break;default:lt!==Rt&&He(e,n,ot,lt,o,Rt)}}Yi(e,M,A,z,it,vt,d,u);return;case"select":lt=M=A=ot=null;for(d in a)if(z=a[d],a.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":lt=z;default:o.hasOwnProperty(d)||He(e,n,d,null,o,z)}for(u in o)if(d=o[u],z=a[u],o.hasOwnProperty(u)&&(d!=null||z!=null))switch(u){case"value":ot=d;break;case"defaultValue":A=d;break;case"multiple":M=d;default:d!==z&&He(e,n,u,d,o,z)}n=A,a=M,o=lt,ot!=null?pn(e,!!a,ot,!1):!!o!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":lt=ot=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:He(e,n,A,null,o,u)}for(M in o)if(u=o[M],d=a[M],o.hasOwnProperty(M)&&(u!=null||d!=null))switch(M){case"value":ot=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&He(e,n,M,u,o,d)}xn(e,ot,lt);return;case"option":for(var ce in a)if(ot=a[ce],a.hasOwnProperty(ce)&&ot!=null&&!o.hasOwnProperty(ce))switch(ce){case"selected":e.selected=!1;break;default:He(e,n,ce,null,o,ot)}for(z in o)if(ot=o[z],lt=a[z],o.hasOwnProperty(z)&&ot!==lt&&(ot!=null||lt!=null))switch(z){case"selected":e.selected=ot&&typeof ot!="function"&&typeof ot!="symbol";break;default:He(e,n,z,ot,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in a)ot=a[se],a.hasOwnProperty(se)&&ot!=null&&!o.hasOwnProperty(se)&&He(e,n,se,null,o,ot);for(it in o)if(ot=o[it],lt=a[it],o.hasOwnProperty(it)&&ot!==lt&&(ot!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:He(e,n,it,ot,o,lt)}return;default:if(su(n)){for(var Ge in a)ot=a[Ge],a.hasOwnProperty(Ge)&&ot!==void 0&&!o.hasOwnProperty(Ge)&&Wf(e,n,Ge,void 0,o,ot);for(vt in o)ot=o[vt],lt=a[vt],!o.hasOwnProperty(vt)||ot===lt||ot===void 0&&lt===void 0||Wf(e,n,vt,ot,o,lt);return}}for(var Y in a)ot=a[Y],a.hasOwnProperty(Y)&&ot!=null&&!o.hasOwnProperty(Y)&&He(e,n,Y,null,o,ot);for(Rt in o)ot=o[Rt],lt=a[Rt],!o.hasOwnProperty(Rt)||ot===lt||ot==null&&lt==null||He(e,n,Rt,ot,o,lt)}var qf=null,Yf=null;function nc(e){return e.nodeType===9?e:e.ownerDocument}function e_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function n_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function jf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zf=null;function gx(){var e=window.event;return e&&e.type==="popstate"?e===Zf?!1:(Zf=e,!0):(Zf=null,!1)}var i_=typeof setTimeout=="function"?setTimeout:void 0,_x=typeof clearTimeout=="function"?clearTimeout:void 0,a_=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof a_<"u"?function(e){return a_.resolve(null).then(e).catch(yx)}:i_;function yx(e){setTimeout(function(){throw e})}function Ha(e){return e==="head"}function r_(e,n){var a=n,o=0,u=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&Ro(M.documentElement),a&2&&Ro(M.body),a&4)for(a=M.head,Ro(a),M=a.firstChild;M;){var A=M.nextSibling,z=M.nodeName;M[Yn]||z==="SCRIPT"||z==="STYLE"||z==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=A}}if(u===0){e.removeChild(d),Oo(n);return}u--}else a==="$"||a==="$?"||a==="$!"?u++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);Oo(n)}function Kf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),jn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xx(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Yn])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ti(e.nextSibling),e===null)break}return null}function Sx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ti(e.nextSibling),e===null))return null;return e}function Qf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Mx(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ti(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Jf=null;function s_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function o_(e,n,a){switch(n=nc(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ro(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);jn(e)}var pi=new Map,l_=new Set;function ic(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var la=Q.d;Q.d={f:Ex,r:bx,D:Tx,C:Ax,L:Rx,m:Cx,X:Dx,S:wx,M:Ux};function Ex(){var e=la.f(),n=jl();return e||n}function bx(e){var n=Zn(e);n!==null&&n.tag===5&&n.type==="form"?Cm(n):la.r(e)}var ps=typeof document>"u"?null:document;function c_(e,n,a){var o=ps;if(o&&typeof n=="string"&&n){var u=Ye(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l_.has(u)||(l_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Tx(e){la.D(e),c_("dns-prefetch",e,null)}function Ax(e,n){la.C(e,n),c_("preconnect",e,n)}function Rx(e,n,a){la.L(e,n,a);var o=ps;if(o&&e&&n){var u='link[rel="preload"][as="'+Ye(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ye(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ye(a.imageSizes)+'"]')):u+='[href="'+Ye(e)+'"]';var d=u;switch(n){case"style":d=ms(e);break;case"script":d=gs(e)}pi.has(d)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(d,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Co(d))||n==="script"&&o.querySelector(wo(d))||(n=o.createElement("link"),Dn(n,"link",e),nn(n),o.head.appendChild(n)))}}function Cx(e,n){la.m(e,n);var a=ps;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ye(o)+'"][href="'+Ye(e)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=gs(e)}if(!pi.has(d)&&(e=g({rel:"modulepreload",href:e},n),pi.set(d,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(wo(d)))return}o=a.createElement("link"),Dn(o,"link",e),nn(o),a.head.appendChild(o)}}}function wx(e,n,a){la.S(e,n,a);var o=ps;if(o&&e){var u=Mi(o).hoistableStyles,d=ms(e);n=n||"default";var M=u.get(d);if(!M){var A={loading:0,preload:null};if(M=o.querySelector(Co(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(d))&&$f(e,a);var z=M=o.createElement("link");nn(z),Dn(z,"link",e),z._p=new Promise(function(it,vt){z.onload=it,z.onerror=vt}),z.addEventListener("load",function(){A.loading|=1}),z.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ac(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:A},u.set(d,M)}}}function Dx(e,n){la.X(e,n);var a=ps;if(a&&e){var o=Mi(a).hoistableScripts,u=gs(e),d=o.get(u);d||(d=a.querySelector(wo(u)),d||(e=g({src:e,async:!0},n),(n=pi.get(u))&&th(e,n),d=a.createElement("script"),nn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function Ux(e,n){la.M(e,n);var a=ps;if(a&&e){var o=Mi(a).hoistableScripts,u=gs(e),d=o.get(u);d||(d=a.querySelector(wo(u)),d||(e=g({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&th(e,n),d=a.createElement("script"),nn(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function u_(e,n,a,o){var u=(u=wt.current)?ic(u):null;if(!u)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ms(a.href),a=Mi(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ms(a.href);var d=Mi(u).hoistableStyles,M=d.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,M),(d=u.querySelector(Co(e)))&&!d._p&&(M.instance=d,M.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),d||Lx(u,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=gs(a),a=Mi(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ms(e){return'href="'+Ye(e)+'"'}function Co(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Lx(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),nn(n),e.head.appendChild(n))}function gs(e){return'[src="'+Ye(e)+'"]'}function wo(e){return"script[async]"+e}function h_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ye(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),Dn(o,"style",u),ac(o,a.precedence,e),n.instance=o;case"stylesheet":u=ms(a.href);var d=e.querySelector(Co(u));if(d)return n.state.loading|=4,n.instance=d,nn(d),d;o=f_(a),(u=pi.get(u))&&$f(o,u),d=(e.ownerDocument||e).createElement("link"),nn(d);var M=d;return M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),Dn(d,"link",o),n.state.loading|=4,ac(d,a.precedence,e),n.instance=d;case"script":return d=gs(a.src),(u=e.querySelector(wo(d)))?(n.instance=u,nn(u),u):(o=a,(u=pi.get(d))&&(o=g({},a),th(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),nn(u),Dn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,ac(o,a.precedence,e));return n.instance}function ac(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,M=0;M<o.length;M++){var A=o[M];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function $f(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function th(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var rc=null;function d_(e,n,a){if(rc===null){var o=new Map,u=rc=new Map;u.set(a,o)}else u=rc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[Yn]||d[Ze]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var M=d.getAttribute(n)||"";M=e+M;var A=o.get(M);A?A.push(d):o.set(M,[d])}}return o}function p_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Nx(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var Do=null;function Px(){}function Ox(e,n,a){if(Do===null)throw Error(r(475));var o=Do;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var u=ms(a.href),d=e.querySelector(Co(u));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=sc.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=d,nn(d);return}d=e.ownerDocument||e,a=f_(a),(u=pi.get(u))&&$f(a,u),d=d.createElement("link"),nn(d);var M=d;M._p=new Promise(function(A,z){M.onload=A,M.onerror=z}),Dn(d,"link",a),n.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=sc.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function zx(){if(Do===null)throw Error(r(475));var e=Do;return e.stylesheets&&e.count===0&&eh(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&eh(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function sc(){if(this.count--,this.count===0){if(this.stylesheets)eh(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var oc=null;function eh(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach(Ix,e),oc=null,sc.call(e))}function Ix(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var o=a.get(null);else{a=new Map,oc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var M=u[d];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),d=a.get(M)||o,d===o&&a.set(null,u),a.set(M,u),this.count++,o=sc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Uo={$$typeof:L,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function Bx(e,n,a,o,u,d,M,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=st(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=st(0),this.hiddenUpdates=st(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function g_(e,n,a,o,u,d,M,A,z,it,vt,Rt){return e=new Bx(e,n,a,M,A,z,it,Rt),n=1,d===!0&&(n|=24),d=Qn(3,null,null,n),e.current=d,d.stateNode=e,n=Ou(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Fu(d),e}function __(e){return e?(e=Yr,e):Yr}function v_(e,n,a,o,u,d){u=__(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Ca(e,o,n),a!==null&&(ni(a,e,n),so(a,e,n))}function y_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function nh(e,n){y_(e,n),(e=e.alternate)&&y_(e,n)}function x_(e){if(e.tag===13){var n=qr(e,67108864);n!==null&&ni(n,e,67108864),nh(e,67108864)}}var lc=!0;function Fx(e,n,a,o){var u=I.T;I.T=null;var d=Q.p;try{Q.p=2,ih(e,n,a,o)}finally{Q.p=d,I.T=u}}function Hx(e,n,a,o){var u=I.T;I.T=null;var d=Q.p;try{Q.p=8,ih(e,n,a,o)}finally{Q.p=d,I.T=u}}function ih(e,n,a,o){if(lc){var u=ah(o);if(u===null)Xf(e,n,o,cc,a),M_(e,o);else if(Vx(u,e,n,a,o))o.stopPropagation();else if(M_(e,o),n&4&&-1<Gx.indexOf(e)){for(;u!==null;){var d=Zn(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var M=Ht(d.pendingLanes);if(M!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;M;){var z=1<<31-ft(M);A.entanglements[1]|=z,M&=~z}Fi(d),(Oe&6)===0&&(ql=zt()+500,bo(0))}}break;case 13:A=qr(d,2),A!==null&&ni(A,d,2),jl(),nh(d,2)}if(d=ah(o),d===null&&Xf(e,n,o,cc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else Xf(e,n,o,null,a)}}function ah(e){return e=lu(e),rh(e)}var cc=null;function rh(e){if(cc=null,e=Si(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cc=e,null}function S_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(xt()){case Ft:return 2;case Ut:return 8;case w:case E:return 32;case H:return 268435456;default:return 32}default:return 32}}var sh=!1,Ga=null,Va=null,ka=null,Lo=new Map,No=new Map,Xa=[],Gx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function M_(e,n){switch(e){case"focusin":case"focusout":Ga=null;break;case"dragenter":case"dragleave":Va=null;break;case"mouseover":case"mouseout":ka=null;break;case"pointerover":case"pointerout":Lo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(n.pointerId)}}function Po(e,n,a,o,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=Zn(n),n!==null&&x_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Vx(e,n,a,o,u){switch(n){case"focusin":return Ga=Po(Ga,e,n,a,o,u),!0;case"dragenter":return Va=Po(Va,e,n,a,o,u),!0;case"mouseover":return ka=Po(ka,e,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Lo.set(d,Po(Lo.get(d)||null,e,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,No.set(d,Po(No.get(d)||null,e,n,a,o,u)),!0}return!1}function E_(e){var n=Si(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,dn(e.priority,function(){if(a.tag===13){var o=ei();o=ye(o);var u=qr(a,o);u!==null&&ni(u,a,o),nh(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function uc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=ah(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ou=o,a.target.dispatchEvent(o),ou=null}else return n=Zn(a),n!==null&&x_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){uc(e)&&a.delete(n)}function kx(){sh=!1,Ga!==null&&uc(Ga)&&(Ga=null),Va!==null&&uc(Va)&&(Va=null),ka!==null&&uc(ka)&&(ka=null),Lo.forEach(b_),No.forEach(b_)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,sh||(sh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,kx)))}var hc=null;function T_(e){hc!==e&&(hc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(rh(o||a)===null)continue;break}var d=Zn(a);d!==null&&(e.splice(n,3),n-=3,rf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Oo(e){function n(z){return fc(z,e)}Ga!==null&&fc(Ga,e),Va!==null&&fc(Va,e),ka!==null&&fc(ka,e),Lo.forEach(n),No.forEach(n);for(var a=0;a<Xa.length;a++){var o=Xa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Xa.length&&(a=Xa[0],a.blockedOn===null);)E_(a),a.blockedOn===null&&Xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],M=u[qe]||null;if(typeof d=="function")M||T_(a);else if(M){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,M=d[qe]||null)A=M.formAction;else if(rh(u)!==null)continue}else A=M.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),T_(a)}}}function oh(e){this._internalRoot=e}dc.prototype.render=oh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ei();v_(a,o,e,n,null,null)},dc.prototype.unmount=oh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),jl(),n[xe]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ae();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Xa.length&&n!==0&&n<Xa[a].priority;a++);Xa.splice(a,0,e),a===0&&E_(e)}};var A_=t.version;if(A_!=="19.1.0")throw Error(r(527,A_,"19.1.0"));Q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Xx={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{rt=pc.inject(Xx),St=pc}catch{}}return Io.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",u=Vm,d=km,M=Xm,A=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(A=n.unstable_transitionCallbacks)),n=g_(e,1,!1,null,null,a,o,u,d,M,A,null),e[xe]=n.current,kf(e),new oh(n)},Io.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,u="",d=Vm,M=km,A=Xm,z=null,it=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(z=a.unstable_transitionCallbacks),a.formState!==void 0&&(it=a.formState)),n=g_(e,1,!0,n,a??null,o,u,d,M,A,z,it),n.context=__(null),a=n.current,o=ei(),o=ye(o),u=Ra(o),u.callback=null,Ca(a,u,o),a=o,n.current.lanes=a,_t(n,a),Fi(n),e[xe]=n.current,kf(e),new dc(n)},Io.version="19.1.0",Io}var z_;function eS(){if(z_)return uh.exports;z_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),uh.exports=tS(),uh.exports}var nS=eS();const iS=Z0(nS);var Bo={},I_;function aS(){if(I_)return Bo;I_=1,Object.defineProperty(Bo,"__esModule",{value:!0}),Bo.parse=f,Bo.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,c=(()=>{const v=function(){};return v.prototype=Object.create(null),v})();function f(v,x){const b=new c,T=v.length;if(T<2)return b;const S=(x==null?void 0:x.decode)||g;let _=0;do{const O=v.indexOf("=",_);if(O===-1)break;const L=v.indexOf(";",_),D=L===-1?T:L;if(O>D){_=v.lastIndexOf(";",O-1)+1;continue}const B=h(v,_,O),V=p(v,O,B),F=v.slice(B,V);if(b[F]===void 0){let q=h(v,O+1,D),N=p(v,D,q);const R=S(v.slice(q,N));b[F]=R}_=D+1}while(_<T);return b}function h(v,x,b){do{const T=v.charCodeAt(x);if(T!==32&&T!==9)return x}while(++x<b);return b}function p(v,x,b){for(;x>b;){const T=v.charCodeAt(--x);if(T!==32&&T!==9)return x+1}return b}function m(v,x,b){const T=(b==null?void 0:b.encode)||encodeURIComponent;if(!s.test(v))throw new TypeError(`argument name is invalid: ${v}`);const S=T(x);if(!t.test(S))throw new TypeError(`argument val is invalid: ${x}`);let _=v+"="+S;if(!b)return _;if(b.maxAge!==void 0){if(!Number.isInteger(b.maxAge))throw new TypeError(`option maxAge is invalid: ${b.maxAge}`);_+="; Max-Age="+b.maxAge}if(b.domain){if(!i.test(b.domain))throw new TypeError(`option domain is invalid: ${b.domain}`);_+="; Domain="+b.domain}if(b.path){if(!r.test(b.path))throw new TypeError(`option path is invalid: ${b.path}`);_+="; Path="+b.path}if(b.expires){if(!y(b.expires)||!Number.isFinite(b.expires.valueOf()))throw new TypeError(`option expires is invalid: ${b.expires}`);_+="; Expires="+b.expires.toUTCString()}if(b.httpOnly&&(_+="; HttpOnly"),b.secure&&(_+="; Secure"),b.partitioned&&(_+="; Partitioned"),b.priority)switch(typeof b.priority=="string"?b.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${b.priority}`)}if(b.sameSite)switch(typeof b.sameSite=="string"?b.sameSite.toLowerCase():b.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${b.sameSite}`)}return _}function g(v){if(v.indexOf("%")===-1)return v;try{return decodeURIComponent(v)}catch{return v}}function y(v){return l.call(v)==="[object Date]"}return Bo}aS();var B_="popstate";function rS(s={}){function t(l,c){let{pathname:f="/",search:h="",hash:p=""}=Or(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Yh("",{pathname:f,search:h,hash:p},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function i(l,c){let f=l.document.querySelector("base"),h="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");h=m===-1?p:p.slice(0,m)}return h+"#"+(typeof c=="string"?c:Ko(c))}function r(l,c){Li(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(c)})`)}return oS(t,i,r,s)}function tn(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function Li(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sS(){return Math.random().toString(36).substring(2,10)}function F_(s,t){return{usr:s.state,key:s.key,idx:t}}function Yh(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Or(t):t,state:i,key:t&&t.key||r||sS()}}function Ko({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Or(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function oS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function y(){h="POP";let S=g(),_=S==null?null:S-m;m=S,p&&p({action:h,location:T.location,delta:_})}function v(S,_){h="PUSH";let O=Yh(T.location,S,_);i&&i(O,S),m=g()+1;let L=F_(O,m),D=T.createHref(O);try{f.pushState(L,"",D)}catch(B){if(B instanceof DOMException&&B.name==="DataCloneError")throw B;l.location.assign(D)}c&&p&&p({action:h,location:T.location,delta:1})}function x(S,_){h="REPLACE";let O=Yh(T.location,S,_);i&&i(O,S),m=g();let L=F_(O,m),D=T.createHref(O);f.replaceState(L,"",D),c&&p&&p({action:h,location:T.location,delta:0})}function b(S){return lS(S)}let T={get action(){return h},get location(){return s(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(B_,y),p=S,()=>{l.removeEventListener(B_,y),p=null}},createHref(S){return t(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:v,replace:x,go(S){return f.go(S)}};return T}function lS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Ko(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function K0(s,t,i="/"){return cS(s,t,i,!1)}function cS(s,t,i,r){let l=typeof t=="string"?Or(t):t,c=ya(l.pathname||"/",i);if(c==null)return null;let f=Q0(s);uS(f);let h=null;for(let p=0;h==null&&p<f.length;++p){let m=SS(c);h=yS(f[p],m,r)}return h}function Q0(s,t=[],i=[],r=""){let l=(c,f,h)=>{let p={relativePath:h===void 0?c.path||"":h,caseSensitive:c.caseSensitive===!0,childrenIndex:f,route:c};p.relativePath.startsWith("/")&&(tn(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=_a([r,p.relativePath]),g=i.concat(p);c.children&&c.children.length>0&&(tn(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Q0(c.children,t,g,m)),!(c.path==null&&!c.index)&&t.push({path:m,score:_S(m,c.index),routesMeta:g})};return s.forEach((c,f)=>{var h;if(c.path===""||!((h=c.path)!=null&&h.includes("?")))l(c,f);else for(let p of J0(c.path))l(c,f,p)}),t}function J0(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=J0(r.join("/")),h=[];return h.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&h.push(...f),h.map(p=>s.startsWith("/")&&p===""?"/":p)}function uS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:vS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var fS=/^:[\w-]+$/,hS=3,dS=2,pS=1,mS=10,gS=-2,H_=s=>s==="*";function _S(s,t){let i=s.split("/"),r=i.length;return i.some(H_)&&(r+=gS),t&&(r+=dS),i.filter(l=>!H_(l)).reduce((l,c)=>l+(fS.test(c)?hS:c===""?pS:mS),r)}function vS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function yS(s,t,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let p=r[h],m=h===r.length-1,g=c==="/"?t:t.slice(c.length)||"/",y=Kc({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),v=p.route;if(!y&&m&&i&&!r[r.length-1].route.index&&(y=Kc({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!y)return null;Object.assign(l,y.params),f.push({params:l,pathname:_a([c,y.pathname]),pathnameBase:TS(_a([c,y.pathnameBase])),route:v}),y.pathnameBase!=="/"&&(c=_a([c,y.pathnameBase]))}return f}function Kc(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=xS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:y},v)=>{if(g==="*"){let b=h[v]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const x=h[v];return y&&!x?m[g]=void 0:m[g]=(x||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function xS(s,t=!1,i=!0){Li(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,p)=>(r.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function SS(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Li(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function ya(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function MS(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Or(s):s;return{pathname:i?i.startsWith("/")?i:ES(i,t):t,search:AS(r),hash:RS(l)}}function ES(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ph(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function bS(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function $0(s){let t=bS(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function tv(s,t,i,r=!1){let l;typeof s=="string"?l=Or(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),ph("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),ph("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),ph("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let y=t.length-1;if(!r&&f.startsWith("..")){let v=f.split("/");for(;v[0]==="..";)v.shift(),y-=1;l.pathname=v.join("/")}h=y>=0?t[y]:"/"}let p=MS(l,h),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var _a=s=>s.join("/").replace(/\/\/+/g,"/"),TS=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),AS=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,RS=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function CS(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var ev=["POST","PUT","PATCH","DELETE"];new Set(ev);var wS=["GET",...ev];new Set(wS);var Gs=Tt.createContext(null);Gs.displayName="DataRouter";var tu=Tt.createContext(null);tu.displayName="DataRouterState";var nv=Tt.createContext({isTransitioning:!1});nv.displayName="ViewTransition";var DS=Tt.createContext(new Map);DS.displayName="Fetchers";var US=Tt.createContext(null);US.displayName="Await";var qi=Tt.createContext(null);qi.displayName="Navigation";var el=Tt.createContext(null);el.displayName="Location";var Ma=Tt.createContext({outlet:null,matches:[],isDataRoute:!1});Ma.displayName="Route";var Bd=Tt.createContext(null);Bd.displayName="RouteError";function LS(s,{relative:t}={}){tn(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Tt.useContext(qi),{hash:l,pathname:c,search:f}=il(s,{relative:t}),h=c;return i!=="/"&&(h=c==="/"?i:_a([i,c])),r.createHref({pathname:h,search:f,hash:l})}function nl(){return Tt.useContext(el)!=null}function zr(){return tn(nl(),"useLocation() may be used only in the context of a <Router> component."),Tt.useContext(el).location}var iv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function av(s){Tt.useContext(qi).static||Tt.useLayoutEffect(s)}function NS(){let{isDataRoute:s}=Tt.useContext(Ma);return s?qS():PS()}function PS(){tn(nl(),"useNavigate() may be used only in the context of a <Router> component.");let s=Tt.useContext(Gs),{basename:t,navigator:i}=Tt.useContext(qi),{matches:r}=Tt.useContext(Ma),{pathname:l}=zr(),c=JSON.stringify($0(r)),f=Tt.useRef(!1);return av(()=>{f.current=!0}),Tt.useCallback((p,m={})=>{if(Li(f.current,iv),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=tv(p,JSON.parse(c),l,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:_a([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,c,l,s])}Tt.createContext(null);function il(s,{relative:t}={}){let{matches:i}=Tt.useContext(Ma),{pathname:r}=zr(),l=JSON.stringify($0(i));return Tt.useMemo(()=>tv(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function OS(s,t){return rv(s,t)}function rv(s,t,i,r){var O;tn(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:c}=Tt.useContext(qi),{matches:f}=Tt.useContext(Ma),h=f[f.length-1],p=h?h.params:{},m=h?h.pathname:"/",g=h?h.pathnameBase:"/",y=h&&h.route;{let L=y&&y.path||"";sv(m,!y||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let v=zr(),x;if(t){let L=typeof t=="string"?Or(t):t;tn(g==="/"||((O=L.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),x=L}else x=v;let b=x.pathname||"/",T=b;if(g!=="/"){let L=g.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=!c&&i&&i.matches&&i.matches.length>0?i.matches:K0(s,{pathname:T});Li(y||S!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),Li(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=HS(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:_a([g,l.encodeLocation?l.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:_a([g,l.encodeLocation?l.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),f,i,r);return t&&_?Tt.createElement(el.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},_):_}function zS(){let s=WS(),t=CS(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Tt.createElement(Tt.Fragment,null,Tt.createElement("p",null,"💿 Hey developer 👋"),Tt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Tt.createElement("code",{style:c},"ErrorBoundary")," or"," ",Tt.createElement("code",{style:c},"errorElement")," prop on your route.")),Tt.createElement(Tt.Fragment,null,Tt.createElement("h2",null,"Unexpected Application Error!"),Tt.createElement("h3",{style:{fontStyle:"italic"}},t),i?Tt.createElement("pre",{style:l},i):null,f)}var IS=Tt.createElement(zS,null),BS=class extends Tt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?Tt.createElement(Ma.Provider,{value:this.props.routeContext},Tt.createElement(Bd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function FS({routeContext:s,match:t,children:i}){let r=Tt.useContext(Gs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),Tt.createElement(Ma.Provider,{value:s},i)}function HS(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,c=i==null?void 0:i.errors;if(c!=null){let p=l.findIndex(m=>m.route.id&&(c==null?void 0:c[m.route.id])!==void 0);tn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,h=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=p),m.route.id){let{loaderData:g,errors:y}=i,v=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!y||y[m.route.id]===void 0);if(m.route.lazy||v){f=!0,h>=0?l=l.slice(0,h+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let y,v=!1,x=null,b=null;i&&(y=c&&m.route.id?c[m.route.id]:void 0,x=m.route.errorElement||IS,f&&(h<0&&g===0?(sv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),v=!0,b=null):h===g&&(v=!0,b=m.route.hydrateFallbackElement||null)));let T=t.concat(l.slice(0,g+1)),S=()=>{let _;return y?_=x:v?_=b:m.route.Component?_=Tt.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,Tt.createElement(FS,{match:m,routeContext:{outlet:p,matches:T,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?Tt.createElement(BS,{location:i.location,revalidation:i.revalidation,component:x,error:y,children:S(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):S()},null)}function Fd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function GS(s){let t=Tt.useContext(Gs);return tn(t,Fd(s)),t}function VS(s){let t=Tt.useContext(tu);return tn(t,Fd(s)),t}function kS(s){let t=Tt.useContext(Ma);return tn(t,Fd(s)),t}function Hd(s){let t=kS(s),i=t.matches[t.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function XS(){return Hd("useRouteId")}function WS(){var r;let s=Tt.useContext(Bd),t=VS("useRouteError"),i=Hd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function qS(){let{router:s}=GS("useNavigate"),t=Hd("useNavigate"),i=Tt.useRef(!1);return av(()=>{i.current=!0}),Tt.useCallback(async(l,c={})=>{Li(i.current,iv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...c}))},[s,t])}var G_={};function sv(s,t,i){!t&&!G_[s]&&(G_[s]=!0,Li(!1,i))}Tt.memo(YS);function YS({routes:s,future:t,state:i}){return rv(s,void 0,i,t)}function jh(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function jS({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){tn(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=Tt.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Or(i));let{pathname:p="/",search:m="",hash:g="",state:y=null,key:v="default"}=i,x=Tt.useMemo(()=>{let b=ya(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:y,key:v},navigationType:r}},[f,p,m,g,y,v,r]);return Li(x!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:Tt.createElement(qi.Provider,{value:h},Tt.createElement(el.Provider,{children:t,value:x}))}function ZS({children:s,location:t}){return OS(Zh(s),t)}function Zh(s,t=[]){let i=[];return Tt.Children.forEach(s,(r,l)=>{if(!Tt.isValidElement(r))return;let c=[...t,l];if(r.type===Tt.Fragment){i.push.apply(i,Zh(r.props.children,c));return}tn(r.type===jh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=Zh(r.props.children,c)),i.push(f)}),i}var Hc="get",Gc="application/x-www-form-urlencoded";function eu(s){return s!=null&&typeof s.tagName=="string"}function KS(s){return eu(s)&&s.tagName.toLowerCase()==="button"}function QS(s){return eu(s)&&s.tagName.toLowerCase()==="form"}function JS(s){return eu(s)&&s.tagName.toLowerCase()==="input"}function $S(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function tM(s,t){return s.button===0&&(!t||t==="_self")&&!$S(s)}var mc=null;function eM(){if(mc===null)try{new FormData(document.createElement("form"),0),mc=!1}catch{mc=!0}return mc}var nM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function mh(s){return s!=null&&!nM.has(s)?(Li(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Gc}"`),null):s}function iM(s,t){let i,r,l,c,f;if(QS(s)){let h=s.getAttribute("action");r=h?ya(h,t):null,i=s.getAttribute("method")||Hc,l=mh(s.getAttribute("enctype"))||Gc,c=new FormData(s)}else if(KS(s)||JS(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||h.getAttribute("action");if(r=p?ya(p,t):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||Hc,l=mh(s.getAttribute("formenctype"))||mh(h.getAttribute("enctype"))||Gc,c=new FormData(h,s),!eM()){let{name:m,type:g,value:y}=s;if(g==="image"){let v=m?`${m}.`:"";c.append(`${v}x`,"0"),c.append(`${v}y`,"0")}else m&&c.append(m,y)}}else{if(eu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Hc,r=null,l=Gc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}function Gd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function aM(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function rM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function sM(s,t,i){let r=await Promise.all(s.map(async l=>{let c=t.routes[l.route.id];if(c){let f=await aM(c,i);return f.links?f.links():[]}return[]}));return uM(r.flat(1).filter(rM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function V_(s,t,i,r,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,h=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return c==="assets"?t.filter((p,m)=>f(p,m)||h(p,m)):c==="data"?t.filter((p,m)=>{var y;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||h(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((y=i[0])==null?void 0:y.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function oM(s,t,{includeHydrateFallback:i}={}){return lM(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function lM(s){return[...new Set(s)]}function cM(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function uM(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let c=JSON.stringify(cM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var fM=new Set([100,101,204,205]);function hM(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&ya(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function ov(){let s=Tt.useContext(Gs);return Gd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function dM(){let s=Tt.useContext(tu);return Gd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Vd=Tt.createContext(void 0);Vd.displayName="FrameworkContext";function lv(){let s=Tt.useContext(Vd);return Gd(s,"You must render this element inside a <HydratedRouter> element"),s}function pM(s,t){let i=Tt.useContext(Vd),[r,l]=Tt.useState(!1),[c,f]=Tt.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:y}=t,v=Tt.useRef(null);Tt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(O=>{f(O.isIntersecting)})},S=new IntersectionObserver(T,{threshold:.5});return v.current&&S.observe(v.current),()=>{S.disconnect()}}},[s]),Tt.useEffect(()=>{if(r){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[r]);let x=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,v,{}]:[c,v,{onFocus:Fo(h,x),onBlur:Fo(p,b),onMouseEnter:Fo(m,x),onMouseLeave:Fo(g,b),onTouchStart:Fo(y,x)}]:[!1,v,{}]}function Fo(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function mM({page:s,...t}){let{router:i}=ov(),r=Tt.useMemo(()=>K0(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Tt.createElement(_M,{page:s,matches:r,...t}):null}function gM(s){let{manifest:t,routeModules:i}=lv(),[r,l]=Tt.useState([]);return Tt.useEffect(()=>{let c=!1;return sM(s,t,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,t,i]),r}function _M({page:s,matches:t,...i}){let r=zr(),{manifest:l,routeModules:c}=lv(),{basename:f}=ov(),{loaderData:h,matches:p}=dM(),m=Tt.useMemo(()=>V_(s,t,p,l,r,"data"),[s,t,p,l,r]),g=Tt.useMemo(()=>V_(s,t,p,l,r,"assets"),[s,t,p,l,r]),y=Tt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,T=!1;if(t.forEach(_=>{var L;let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(D=>D.route.id===_.route.id)&&_.route.id in h&&((L=c[_.route.id])!=null&&L.shouldRevalidate)||O.hasClientLoader?T=!0:b.add(_.route.id))}),b.size===0)return[];let S=hM(s,f);return T&&b.size>0&&S.searchParams.set("_routes",t.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,m,t,s,c]),v=Tt.useMemo(()=>oM(g,l),[g,l]),x=gM(g);return Tt.createElement(Tt.Fragment,null,y.map(b=>Tt.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),v.map(b=>Tt.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),x.map(({key:b,link:T})=>Tt.createElement("link",{key:b,...T})))}function vM(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var cv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{cv&&(window.__reactRouterVersion="7.6.0")}catch{}function yM({basename:s,children:t,window:i}){let r=Tt.useRef();r.current==null&&(r.current=rS({window:i,v5Compat:!0}));let l=r.current,[c,f]=Tt.useState({action:l.action,location:l.location}),h=Tt.useCallback(p=>{Tt.startTransition(()=>f(p))},[f]);return Tt.useLayoutEffect(()=>l.listen(h),[l,h]),Tt.createElement(jS,{basename:s,children:t,location:c.location,navigationType:c.action,navigator:l})}var uv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nu=Tt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:y,...v},x){let{basename:b}=Tt.useContext(qi),T=typeof m=="string"&&uv.test(m),S,_=!1;if(typeof m=="string"&&T&&(S=m,cv))try{let N=new URL(window.location.href),R=m.startsWith("//")?new URL(N.protocol+m):new URL(m),G=ya(R.pathname,b);R.origin===N.origin&&G!=null?m=G+R.search+R.hash:_=!0}catch{Li(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=LS(m,{relative:l}),[L,D,B]=pM(r,v),V=EM(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:l,viewTransition:y});function F(N){t&&t(N),N.defaultPrevented||V(N)}let q=Tt.createElement("a",{...v,...B,href:S||O,onClick:_||c?t:F,ref:vM(x,D),target:p,"data-discover":!T&&i==="render"?"true":void 0});return L&&!T?Tt.createElement(Tt.Fragment,null,q,Tt.createElement(mM,{page:O})):q});nu.displayName="Link";var xM=Tt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:p,...m},g){let y=il(f,{relative:m.relative}),v=zr(),x=Tt.useContext(tu),{navigator:b,basename:T}=Tt.useContext(qi),S=x!=null&&CM(y)&&h===!0,_=b.encodeLocation?b.encodeLocation(y).pathname:y.pathname,O=v.pathname,L=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;i||(O=O.toLowerCase(),L=L?L.toLowerCase():null,_=_.toLowerCase()),L&&T&&(L=ya(L,T)||L);const D=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let B=O===_||!l&&O.startsWith(_)&&O.charAt(D)==="/",V=L!=null&&(L===_||!l&&L.startsWith(_)&&L.charAt(_.length)==="/"),F={isActive:B,isPending:V,isTransitioning:S},q=B?t:void 0,N;typeof r=="function"?N=r(F):N=[r,B?"active":null,V?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let R=typeof c=="function"?c(F):c;return Tt.createElement(nu,{...m,"aria-current":q,className:N,ref:g,style:R,to:f,viewTransition:h},typeof p=="function"?p(F):p)});xM.displayName="NavLink";var SM=Tt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:c,method:f=Hc,action:h,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:y,...v},x)=>{let b=AM(),T=RM(h,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&uv.test(h),O=L=>{if(p&&p(L),L.defaultPrevented)return;L.preventDefault();let D=L.nativeEvent.submitter,B=(D==null?void 0:D.getAttribute("formmethod"))||f;b(D||L.currentTarget,{fetcherKey:t,method:B,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:y})};return Tt.createElement("form",{ref:x,method:S,action:T,onSubmit:r?p:O,...v,"data-discover":!_&&s==="render"?"true":void 0})});SM.displayName="Form";function MM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fv(s){let t=Tt.useContext(Gs);return tn(t,MM(s)),t}function EM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=NS(),p=zr(),m=il(s,{relative:c});return Tt.useCallback(g=>{if(tM(g,t)){g.preventDefault();let y=i!==void 0?i:Ko(p)===Ko(m);h(s,{replace:y,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[p,h,m,i,r,t,s,l,c,f])}var bM=0,TM=()=>`__${String(++bM)}__`;function AM(){let{router:s}=fv("useSubmit"),{basename:t}=Tt.useContext(qi),i=XS();return Tt.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:p,body:m}=iM(r,t);if(l.navigate===!1){let g=l.fetcherKey||TM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function RM(s,{relative:t}={}){let{basename:i}=Tt.useContext(qi),r=Tt.useContext(Ma);tn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...il(s||".",{relative:t})},f=zr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(y=>y).forEach(y=>h.append("index",y));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_a([i,c.pathname])),Ko(c)}function CM(s,t={}){let i=Tt.useContext(nv);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=fv("useViewTransitionState"),l=il(s,{relative:t.relative});if(!i.isTransitioning)return!1;let c=ya(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ya(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Kc(l.pathname,f)!=null||Kc(l.pathname,c)!=null}[...fM];const k_=[{id:"quantum-playground",title:"Atom",description:"Explore electron clouds and photon interactions",color:"#1a73e8",image:"⚛️",path:"/atom",available:!0},{id:"gravity-wells",title:"Placeholder",description:"Placeholder",color:"#ea4335",image:"🪐",path:"/gravity-wells",available:!1},{id:"fluid-dynamics",title:"Placeholder",description:"Placeholder",color:"#34a853",image:"💧",path:"/fluid-dynamics",available:!1},{id:"wave-mechanics",title:"Placeholder",description:"Placeholder",color:"#fbbc04",image:"🌊",path:"/wave-mechanics",available:!1},{id:"particle-collider",title:"Placeholder",description:"Placeholder",color:"#9c27b0",image:"💥",path:"/particle-collider",available:!1},{id:"electric-fields",title:"Placeholder",description:"Placeholder",color:"#00bcd4",image:"⚡",path:"/electric-fields",available:!1}];function wM({simulation:s,isActive:t,onMouseEnter:i,onMouseLeave:r,themeColors:l}){const{id:c,title:f,description:h,color:p,image:m,path:g,available:y}=s,v=p;return ue.jsx(nu,{to:y?g:"#",className:"block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl",style:{opacity:y?1:.7,cursor:y?"pointer":"not-allowed",transform:t?"translateY(-5px)":"translateY(0)"},onMouseEnter:()=>i(c),onMouseLeave:r,children:ue.jsxs("div",{className:"glass card-content transition-transform duration-500 ease-out h-full p-6 flex flex-col",style:{borderLeft:`3px solid ${v}`,boxShadow:t?`0 0 20px ${v}80`:"none",background:l.card},children:[ue.jsx("div",{className:"emoji-icon text-5xl mb-4 transition-all duration-300",style:{filter:t?`drop-shadow(0 0 10px ${v})`:"none",transform:t?"scale(1.05)":"scale(1)",transformOrigin:"center"},children:m}),ue.jsx("h2",{className:"text-2xl font-bold mb-2 transition-all duration-300",style:{color:v,transform:t?"scale(1.05)":"scale(1)",transformOrigin:"left"},children:f}),ue.jsx("p",{style:{color:l.textSecondary},className:"mb-6 flex-grow",children:h}),ue.jsxs("div",{className:"mt-auto",children:[ue.jsx("div",{className:`text-sm font-medium ${y?"text-green-400":"text-amber-400"}`,children:y?"Available Now":"Coming Soon"}),ue.jsx("div",{className:"progress-bar h-1 mt-3 rounded-full transition-all duration-500",style:{background:`linear-gradient(to right, ${v}80, ${v})`,opacity:t?1:0,transform:t?"scaleX(1)":"scaleX(0)"}})]})]})})}function DM(){const[s,t]=Tt.useState(null),[i,r]=Tt.useState("gray"),l=p=>{t(p)},c=()=>{t(null)},f={dark:{bg:"rgba(20, 40, 45, 1)",sidebar:"rgba(50, 90, 100, 0.3)",card:"rgba(50, 90, 100, 0.8)",accent:"rgb(0, 160, 170)",accentHover:"rgb(0, 190, 210)",text:"rgba(230, 240, 245, 0.9)",textSecondary:"rgba(180, 200, 210, 0.7)",gradient:"from-[rgb(0,160,170)] to-[rgb(0,190,210)]"},light:{bg:"rgba(245, 240, 230, 1)",sidebar:"rgba(230, 220, 200, 0.7)",card:"rgba(235, 225, 210, 0.9)",accent:"rgb(210, 120, 50)",accentHover:"rgb(230, 150, 80)",text:"rgba(70, 60, 50, 0.9)",textSecondary:"rgba(100, 90, 80, 0.7)",gradient:"from-[rgb(230,150,80)] to-[rgb(210,120,50)]"},blue:{bg:"#0f172a",sidebar:"rgba(30, 41, 59, 0.8)",card:"rgba(30, 41, 59, 0.8)",accent:"rgb(59, 130, 246)",accentHover:"rgb(96, 165, 250)",text:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(203, 213, 225, 0.7)",gradient:"from-blue-400 via-purple-500 to-pink-500"},gray:{bg:"#1a1a1a",sidebar:"rgba(40, 40, 40, 0.8)",card:"rgba(50, 50, 50, 0.8)",accent:"rgb(220, 40, 40)",accentHover:"rgb(240, 70, 70)",text:"rgba(220, 220, 220, 0.9)",textSecondary:"rgba(180, 180, 180, 0.7)",gradient:"from-[rgb(220,40,40)] to-[rgb(240,70,70)]"}},h=f[i];return document.documentElement.style.setProperty("--accent-color",h.accent),document.documentElement.style.setProperty("--accent-color-hover",h.accentHover),document.documentElement.style.setProperty("--text-primary",h.text),document.documentElement.style.setProperty("--text-secondary",h.textSecondary),document.documentElement.style.setProperty("--bg-card",h.card),ue.jsxs("div",{className:"min-h-screen grid grid-cols-12",style:{backgroundColor:h.bg,color:h.text},children:[ue.jsxs("div",{className:"col-span-2 glass fixed h-full p-4 flex flex-col",style:{background:h.sidebar},children:[ue.jsx("div",{className:"text-xl font-bold mb-8",style:{color:h.accent},children:"GigaLab"}),ue.jsx("nav",{className:"flex flex-col space-y-4",children:k_.map(p=>ue.jsxs(nu,{to:p.available?p.path:"#",className:`p-2 rounded transition-colors ${p.available?"hover:bg-opacity-20":"opacity-50 cursor-not-allowed"}`,style:{color:h.text,backgroundColor:p.available&&i===s?`${h.accent}20`:"transparent"},children:[ue.jsx("span",{className:"mr-2",children:p.image}),p.title]},p.id))}),ue.jsxs("div",{className:"mt-8 mb-4",children:[ue.jsx("p",{className:"text-sm mb-2",style:{color:h.textSecondary},children:"Select Theme"}),ue.jsxs("div",{className:"flex space-x-2",children:[ue.jsx("button",{onClick:()=>r("dark"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="dark"?"ring-2 scale-110":""}`,style:{background:"rgba(20, 40, 45, 1)",ringColor:f.dark.accent},title:"Dark Theme",children:i==="dark"&&ue.jsx("span",{className:"text-xs",children:"✓"})}),ue.jsx("button",{onClick:()=>r("light"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="light"?"ring-2 scale-110":""}`,style:{background:"rgba(245, 240, 230, 1)",ringColor:f.light.accent},title:"Light Theme",children:i==="light"&&ue.jsx("span",{className:"text-xs text-gray-800",children:"✓"})}),ue.jsx("button",{onClick:()=>r("blue"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="blue"?"ring-2 scale-110":""}`,style:{background:"#0f172a",ringColor:f.blue.accent},title:"Blue Theme",children:i==="blue"&&ue.jsx("span",{className:"text-xs",children:"✓"})}),ue.jsx("button",{onClick:()=>r("gray"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="gray"?"ring-2 scale-110":""}`,style:{background:"#1a1a1a",ringColor:f.gray.accent},title:"Gray Theme",children:i==="gray"&&ue.jsx("span",{className:"text-xs",children:"✓"})})]})]}),ue.jsx("div",{className:"mt-auto text-sm",children:ue.jsx("button",{className:"w-full p-2 rounded border transition-all hover:bg-opacity-90",style:{backgroundColor:h.accent,borderColor:h.accent,color:i==="light"?"#fff":h.text},children:"Contact"})})]}),ue.jsxs("div",{className:"col-span-10 col-start-3 px-8 py-16 max-w-7xl mx-auto",children:[ue.jsxs("header",{className:"text-center mb-16",children:[ue.jsx("h1",{className:`text-6xl font-bold mb-4 bg-gradient-to-r ${h.gradient} text-transparent bg-clip-text px-4 py-4`,children:"GigaLab"}),ue.jsx("p",{className:"text-xl",style:{color:h.text},children:"Interactive physics simulations (and other stuff)"})]}),ue.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto",children:k_.map(p=>ue.jsx(wM,{simulation:p,isActive:s===p.id,onMouseEnter:l,onMouseLeave:c,themeColors:h},p.id))})]}),ue.jsx("div",{className:"bg-animate"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kd="176",Ps={ROTATE:0,DOLLY:1,PAN:2},Ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},UM=0,X_=1,LM=2,hv=1,NM=2,pa=3,xa=0,qn=1,ma=2,tr=0,Ur=1,W_=2,q_=3,Y_=4,PM=5,Rr=100,OM=101,zM=102,IM=103,BM=104,FM=200,HM=201,GM=202,VM=203,Kh=204,Qh=205,kM=206,XM=207,WM=208,qM=209,YM=210,jM=211,ZM=212,KM=213,QM=214,Jh=0,$h=1,td=2,zs=3,ed=4,nd=5,id=6,ad=7,dv=0,JM=1,$M=2,er=0,tE=1,eE=2,nE=3,iE=4,aE=5,rE=6,sE=7,pv=300,Is=301,Bs=302,rd=303,sd=304,iu=306,od=1e3,wr=1001,ld=1002,ri=1003,oE=1004,gc=1005,Gi=1006,gh=1007,Dr=1008,Xi=1009,mv=1010,gv=1011,Qo=1012,Xd=1013,Lr=1014,Vi=1015,al=1016,Wd=1017,qd=1018,Jo=1020,_v=35902,vv=1021,yv=1022,Di=1023,$o=1026,tl=1027,Yd=1028,jd=1029,xv=1030,Zd=1031,Kd=1033,Vc=33776,kc=33777,Xc=33778,Wc=33779,cd=35840,ud=35841,fd=35842,hd=35843,dd=36196,pd=37492,md=37496,gd=37808,_d=37809,vd=37810,yd=37811,xd=37812,Sd=37813,Md=37814,Ed=37815,bd=37816,Td=37817,Ad=37818,Rd=37819,Cd=37820,wd=37821,qc=36492,Dd=36494,Ud=36495,Sv=36283,Ld=36284,Nd=36285,Pd=36286,lE=3200,cE=3201,Mv=0,uE=1,$a="",gi="srgb",Fs="srgb-linear",Qc="linear",Ve="srgb",_s=7680,j_=519,fE=512,hE=513,dE=514,Ev=515,pE=516,mE=517,gE=518,_E=519,Z_=35044,K_="300 es",ga=2e3,Jc=2001;class Ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yc=Math.PI/180,Od=180/Math.PI;function rl(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[t&255]+On[t>>8&255]+"-"+On[t>>16&15|64]+On[t>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function be(s,t,i){return Math.max(t,Math.min(i,s))}function vE(s,t){return(s%t+t)%t}function _h(s,t,i){return(1-i)*s+i*t}function Ho(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yE={DEG2RAD:Yc};class me{constructor(t=0,i=0){me.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*r-f*l+t.x,this.y=c*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class pe{constructor(t,i,r,l,c,f,h,p,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m)}set(t,i,r,l,c,f,h,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],p=r[6],m=r[1],g=r[4],y=r[7],v=r[2],x=r[5],b=r[8],T=l[0],S=l[3],_=l[6],O=l[1],L=l[4],D=l[7],B=l[2],V=l[5],F=l[8];return c[0]=f*T+h*O+p*B,c[3]=f*S+h*L+p*V,c[6]=f*_+h*D+p*F,c[1]=m*T+g*O+y*B,c[4]=m*S+g*L+y*V,c[7]=m*_+g*D+y*F,c[2]=v*T+x*O+b*B,c[5]=v*S+x*L+b*V,c[8]=v*_+x*D+b*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*h*m-r*c*g+r*h*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],y=g*f-h*m,v=h*p-g*c,x=m*c-f*p,b=i*y+r*v+l*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return t[0]=y*T,t[1]=(l*m-g*r)*T,t[2]=(h*r-l*f)*T,t[3]=v*T,t[4]=(g*i-l*p)*T,t[5]=(l*c-h*i)*T,t[6]=x*T,t[7]=(r*p-m*i)*T,t[8]=(f*i-r*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,c,f,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*f+m*h)+f+t,-l*m,l*p,-l*(-m*f+p*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(vh.makeScale(t,i)),this}rotate(t){return this.premultiply(vh.makeRotation(-t)),this}translate(t,i){return this.premultiply(vh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new pe;function bv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function $c(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xE(){const s=$c("canvas");return s.style.display="block",s}const Q_={};function jc(s){s in Q_||(Q_[s]=!0,console.warn(s))}function SE(s,t,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}function ME(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function EE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const J_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bE(){const s={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(l.r=Os(l.r),l.g=Os(l.g),l.b=Os(l.b))),l},fromWorkingColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},toWorkingColorSpace:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?Qc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Fs]:{primaries:t,whitePoint:r,transfer:Qc,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:J_,fromXYZ:$_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Ne=bE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let vs;class TE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{vs===void 0&&(vs=$c("canvas")),vs.width=t.width,vs.height=t.height;const l=vs.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=vs}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=$c("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(va(i[r]/255)*255):i[r]=va(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AE=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=rl(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(yh(l[f].image)):c.push(yh(l[f]))}else c=yh(l);r.url=c}return i||(t.images[this.uuid]=r),r}}function yh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?TE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RE=0;class Fn extends Ir{constructor(t=Fn.DEFAULT_IMAGE,i=Fn.DEFAULT_MAPPING,r=wr,l=wr,c=Gi,f=Dr,h=Di,p=Xi,m=Fn.DEFAULT_ANISOTROPY,g=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=rl(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case od:t.x=t.x-Math.floor(t.x);break;case wr:t.x=t.x<0?0:1;break;case ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case od:t.y=t.y-Math.floor(t.y);break;case wr:t.y=t.y<0?0:1;break;case ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=pv;Fn.DEFAULT_ANISOTROPY=1;class on{constructor(t=0,i=0,r=0,l=1){on.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,c;const p=t.elements,m=p[0],g=p[4],y=p[8],v=p[1],x=p[5],b=p[9],T=p[2],S=p[6],_=p[10];if(Math.abs(g-v)<.01&&Math.abs(y-T)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+v)<.1&&Math.abs(y+T)<.1&&Math.abs(b+S)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(m+1)/2,D=(x+1)/2,B=(_+1)/2,V=(g+v)/4,F=(y+T)/4,q=(b+S)/4;return L>D&&L>B?L<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(L),l=V/r,c=F/r):D>B?D<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),r=V/l,c=q/l):B<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),r=F/c,l=q/c),this.set(r,l,c,i),this}let O=Math.sqrt((S-b)*(S-b)+(y-T)*(y-T)+(v-g)*(v-g));return Math.abs(O)<.001&&(O=1),this.x=(S-b)/O,this.y=(y-T)/O,this.z=(v-g)/O,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this.w=be(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this.w=be(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CE extends Ir{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new on(0,0,t,i),this.scissorTest=!1,this.viewport=new on(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const c=new Fn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Qd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends CE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Tv extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wE extends Fn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ri,this.minFilter=ri,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,c,f,h){let p=r[l+0],m=r[l+1],g=r[l+2],y=r[l+3];const v=c[f+0],x=c[f+1],b=c[f+2],T=c[f+3];if(h===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=y;return}if(h===1){t[i+0]=v,t[i+1]=x,t[i+2]=b,t[i+3]=T;return}if(y!==T||p!==v||m!==x||g!==b){let S=1-h;const _=p*v+m*x+g*b+y*T,O=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const B=Math.sqrt(L),V=Math.atan2(B,_*O);S=Math.sin(S*V)/B,h=Math.sin(h*V)/B}const D=h*O;if(p=p*S+v*D,m=m*S+x*D,g=g*S+b*D,y=y*S+T*D,S===1-h){const B=1/Math.sqrt(p*p+m*m+g*g+y*y);p*=B,m*=B,g*=B,y*=B}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=y}static multiplyQuaternionsFlat(t,i,r,l,c,f){const h=r[l],p=r[l+1],m=r[l+2],g=r[l+3],y=c[f],v=c[f+1],x=c[f+2],b=c[f+3];return t[i]=h*b+g*y+p*x-m*v,t[i+1]=p*b+g*v+m*y-h*x,t[i+2]=m*b+g*x+h*v-p*y,t[i+3]=g*b-h*y-p*v-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,c=t._z,f=t._order,h=Math.cos,p=Math.sin,m=h(r/2),g=h(l/2),y=h(c/2),v=p(r/2),x=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=v*g*y+m*x*b,this._y=m*x*y-v*g*b,this._z=m*g*b+v*x*y,this._w=m*g*y-v*x*b;break;case"YXZ":this._x=v*g*y+m*x*b,this._y=m*x*y-v*g*b,this._z=m*g*b-v*x*y,this._w=m*g*y+v*x*b;break;case"ZXY":this._x=v*g*y-m*x*b,this._y=m*x*y+v*g*b,this._z=m*g*b+v*x*y,this._w=m*g*y-v*x*b;break;case"ZYX":this._x=v*g*y-m*x*b,this._y=m*x*y+v*g*b,this._z=m*g*b-v*x*y,this._w=m*g*y+v*x*b;break;case"YZX":this._x=v*g*y+m*x*b,this._y=m*x*y+v*g*b,this._z=m*g*b-v*x*y,this._w=m*g*y-v*x*b;break;case"XZY":this._x=v*g*y-m*x*b,this._y=m*x*y-v*g*b,this._z=m*g*b+v*x*y,this._w=m*g*y+v*x*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],p=i[9],m=i[2],g=i[6],y=i[10],v=r+h+y;if(v>0){const x=.5/Math.sqrt(v+1);this._w=.25/x,this._x=(g-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(r>h&&r>y){const x=2*Math.sqrt(1+r-h-y);this._w=(g-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(h>y){const x=2*Math.sqrt(1+h-r-y);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+g)/x}else{const x=2*Math.sqrt(1+y-r-h);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,c=t._z,f=t._w,h=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*h+l*m-c*p,this._y=l*g+f*p+c*h-r*m,this._z=c*g+f*m+r*p-l*h,this._w=f*g-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*t._w+r*t._x+l*t._y+c*t._z;if(h<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,h=-h):this.copy(t),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const p=1-h*h;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*r+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,h),y=Math.sin((1-i)*g)/m,v=Math.sin(i*g)/m;return this._w=f*y+this._w*v,this._x=r*y+this._x*v,this._y=l*y+this._y*v,this._z=c*y+this._z*v,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(t=0,i=0,r=0){J.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(t0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(t0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,c=t.x,f=t.y,h=t.z,p=t.w,m=2*(f*l-h*r),g=2*(h*i-c*l),y=2*(c*r-f*i);return this.x=i+p*m+f*y-h*g,this.y=r+p*g+h*m-c*y,this.z=l+p*y+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=be(this.x,t.x,i.x),this.y=be(this.y,t.y,i.y),this.z=be(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=be(this.x,t,i),this.y=be(this.y,t,i),this.z=be(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(be(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,c=t.z,f=i.x,h=i.y,p=i.z;return this.x=l*p-c*h,this.y=c*f-r*p,this.z=r*h-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return xh.copy(this).projectOnVector(t),this.sub(xh)}reflect(t){return this.sub(xh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(be(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xh=new J,t0=new Pr;class Br{constructor(t=new J(1/0,1/0,1/0),i=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,Ai):Ai.fromBufferAttribute(c,f),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),_c.copy(r.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Go),vc.subVectors(this.max,Go),ys.subVectors(t.a,Go),xs.subVectors(t.b,Go),Ss.subVectors(t.c,Go),qa.subVectors(xs,ys),Ya.subVectors(Ss,xs),xr.subVectors(ys,Ss);let i=[0,-qa.z,qa.y,0,-Ya.z,Ya.y,0,-xr.z,xr.y,qa.z,0,-qa.x,Ya.z,0,-Ya.x,xr.z,0,-xr.x,-qa.y,qa.x,0,-Ya.y,Ya.x,0,-xr.y,xr.x,0];return!Sh(i,ys,xs,Ss,vc)||(i=[1,0,0,0,1,0,0,0,1],!Sh(i,ys,xs,Ss,vc))?!1:(yc.crossVectors(qa,Ya),i=[yc.x,yc.y,yc.z],Sh(i,ys,xs,Ss,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ca=[new J,new J,new J,new J,new J,new J,new J,new J],Ai=new J,_c=new Br,ys=new J,xs=new J,Ss=new J,qa=new J,Ya=new J,xr=new J,Go=new J,vc=new J,yc=new J,Sr=new J;function Sh(s,t,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Sr.fromArray(s,c);const h=l.x*Math.abs(Sr.x)+l.y*Math.abs(Sr.y)+l.z*Math.abs(Sr.z),p=t.dot(Sr),m=i.dot(Sr),g=r.dot(Sr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>h)return!1}return!0}const DE=new Br,Vo=new J,Mh=new J;class sl{constructor(t=new J,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):DE.setFromPoints(t).getCenter(r);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,r.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vo.subVectors(t,this.center);const i=Vo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Vo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vo.copy(t.center).add(Mh)),this.expandByPoint(Vo.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ua=new J,Eh=new J,xc=new J,ja=new J,bh=new J,Sc=new J,Th=new J;class Av{constructor(t=new J,i=new J(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ua)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ua.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ua.copy(this.origin).addScaledVector(this.direction,i),ua.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Eh.copy(t).add(i).multiplyScalar(.5),xc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(Eh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(xc),h=ja.dot(this.direction),p=-ja.dot(xc),m=ja.lengthSq(),g=Math.abs(1-f*f);let y,v,x,b;if(g>0)if(y=f*p-h,v=f*h-p,b=c*g,y>=0)if(v>=-b)if(v<=b){const T=1/g;y*=T,v*=T,x=y*(y+f*v+2*h)+v*(f*y+v+2*p)+m}else v=c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;else v=-c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;else v<=-b?(y=Math.max(0,-(-f*c+h)),v=y>0?-c:Math.min(Math.max(-c,-p),c),x=-y*y+v*(v+2*p)+m):v<=b?(y=0,v=Math.min(Math.max(-c,-p),c),x=v*(v+2*p)+m):(y=Math.max(0,-(f*c+h)),v=y>0?c:Math.min(Math.max(-c,-p),c),x=-y*y+v*(v+2*p)+m);else v=f>0?-c:c,y=Math.max(0,-(f*v+h)),x=-y*y+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,y),l&&l.copy(Eh).addScaledVector(xc,v),x}intersectSphere(t,i){ua.subVectors(t.center,this.origin);const r=ua.dot(this.direction),l=ua.dot(ua)-r*r,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,p=r+f;return p<0?null:h<0?this.at(p,i):this.at(h,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,c,f,h,p;const m=1/this.direction.x,g=1/this.direction.y,y=1/this.direction.z,v=this.origin;return m>=0?(r=(t.min.x-v.x)*m,l=(t.max.x-v.x)*m):(r=(t.max.x-v.x)*m,l=(t.min.x-v.x)*m),g>=0?(c=(t.min.y-v.y)*g,f=(t.max.y-v.y)*g):(c=(t.max.y-v.y)*g,f=(t.min.y-v.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),y>=0?(h=(t.min.z-v.z)*y,p=(t.max.z-v.z)*y):(h=(t.max.z-v.z)*y,p=(t.min.z-v.z)*y),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ua)!==null}intersectTriangle(t,i,r,l,c){bh.subVectors(i,t),Sc.subVectors(r,t),Th.crossVectors(bh,Sc);let f=this.direction.dot(Th),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;ja.subVectors(this.origin,t);const p=h*this.direction.dot(Sc.crossVectors(ja,Sc));if(p<0)return null;const m=h*this.direction.dot(bh.cross(ja));if(m<0||p+m>f)return null;const g=-h*ja.dot(Th);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ke{constructor(t,i,r,l,c,f,h,p,m,g,y,v,x,b,T,S){Ke.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,c,f,h,p,m,g,y,v,x,b,T,S)}set(t,i,r,l,c,f,h,p,m,g,y,v,x,b,T,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=p,_[2]=m,_[6]=g,_[10]=y,_[14]=v,_[3]=x,_[7]=b,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ke().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/Ms.setFromMatrixColumn(t,0).length(),c=1/Ms.setFromMatrixColumn(t,1).length(),f=1/Ms.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,c=t.z,f=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),y=Math.sin(c);if(t.order==="XYZ"){const v=f*g,x=f*y,b=h*g,T=h*y;i[0]=p*g,i[4]=-p*y,i[8]=m,i[1]=x+b*m,i[5]=v-T*m,i[9]=-h*p,i[2]=T-v*m,i[6]=b+x*m,i[10]=f*p}else if(t.order==="YXZ"){const v=p*g,x=p*y,b=m*g,T=m*y;i[0]=v+T*h,i[4]=b*h-x,i[8]=f*m,i[1]=f*y,i[5]=f*g,i[9]=-h,i[2]=x*h-b,i[6]=T+v*h,i[10]=f*p}else if(t.order==="ZXY"){const v=p*g,x=p*y,b=m*g,T=m*y;i[0]=v-T*h,i[4]=-f*y,i[8]=b+x*h,i[1]=x+b*h,i[5]=f*g,i[9]=T-v*h,i[2]=-f*m,i[6]=h,i[10]=f*p}else if(t.order==="ZYX"){const v=f*g,x=f*y,b=h*g,T=h*y;i[0]=p*g,i[4]=b*m-x,i[8]=v*m+T,i[1]=p*y,i[5]=T*m+v,i[9]=x*m-b,i[2]=-m,i[6]=h*p,i[10]=f*p}else if(t.order==="YZX"){const v=f*p,x=f*m,b=h*p,T=h*m;i[0]=p*g,i[4]=T-v*y,i[8]=b*y+x,i[1]=y,i[5]=f*g,i[9]=-h*g,i[2]=-m*g,i[6]=x*y+b,i[10]=v-T*y}else if(t.order==="XZY"){const v=f*p,x=f*m,b=h*p,T=h*m;i[0]=p*g,i[4]=-y,i[8]=m*g,i[1]=v*y+T,i[5]=f*g,i[9]=x*y-b,i[2]=b*y-x,i[6]=h*g,i[10]=T*y+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(UE,t,LE)}lookAt(t,i,r){const l=this.elements;return ii.subVectors(t,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Za.crossVectors(r,ii),Za.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Za.crossVectors(r,ii)),Za.normalize(),Mc.crossVectors(ii,Za),l[0]=Za.x,l[4]=Mc.x,l[8]=ii.x,l[1]=Za.y,l[5]=Mc.y,l[9]=ii.y,l[2]=Za.z,l[6]=Mc.z,l[10]=ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],p=r[8],m=r[12],g=r[1],y=r[5],v=r[9],x=r[13],b=r[2],T=r[6],S=r[10],_=r[14],O=r[3],L=r[7],D=r[11],B=r[15],V=l[0],F=l[4],q=l[8],N=l[12],R=l[1],G=l[5],pt=l[9],ht=l[13],At=l[2],yt=l[6],I=l[10],Q=l[14],j=l[3],Nt=l[7],P=l[11],at=l[15];return c[0]=f*V+h*R+p*At+m*j,c[4]=f*F+h*G+p*yt+m*Nt,c[8]=f*q+h*pt+p*I+m*P,c[12]=f*N+h*ht+p*Q+m*at,c[1]=g*V+y*R+v*At+x*j,c[5]=g*F+y*G+v*yt+x*Nt,c[9]=g*q+y*pt+v*I+x*P,c[13]=g*N+y*ht+v*Q+x*at,c[2]=b*V+T*R+S*At+_*j,c[6]=b*F+T*G+S*yt+_*Nt,c[10]=b*q+T*pt+S*I+_*P,c[14]=b*N+T*ht+S*Q+_*at,c[3]=O*V+L*R+D*At+B*j,c[7]=O*F+L*G+D*yt+B*Nt,c[11]=O*q+L*pt+D*I+B*P,c[15]=O*N+L*ht+D*Q+B*at,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],c=t[12],f=t[1],h=t[5],p=t[9],m=t[13],g=t[2],y=t[6],v=t[10],x=t[14],b=t[3],T=t[7],S=t[11],_=t[15];return b*(+c*p*y-l*m*y-c*h*v+r*m*v+l*h*x-r*p*x)+T*(+i*p*x-i*m*v+c*f*v-l*f*x+l*m*g-c*p*g)+S*(+i*m*y-i*h*x-c*f*y+r*f*x+c*h*g-r*m*g)+_*(-l*h*g-i*p*y+i*h*v+l*f*y-r*f*v+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],c=t[3],f=t[4],h=t[5],p=t[6],m=t[7],g=t[8],y=t[9],v=t[10],x=t[11],b=t[12],T=t[13],S=t[14],_=t[15],O=y*S*m-T*v*m+T*p*x-h*S*x-y*p*_+h*v*_,L=b*v*m-g*S*m-b*p*x+f*S*x+g*p*_-f*v*_,D=g*T*m-b*y*m+b*h*x-f*T*x-g*h*_+f*y*_,B=b*y*p-g*T*p-b*h*v+f*T*v+g*h*S-f*y*S,V=i*O+r*L+l*D+c*B;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return t[0]=O*F,t[1]=(T*v*c-y*S*c-T*l*x+r*S*x+y*l*_-r*v*_)*F,t[2]=(h*S*c-T*p*c+T*l*m-r*S*m-h*l*_+r*p*_)*F,t[3]=(y*p*c-h*v*c-y*l*m+r*v*m+h*l*x-r*p*x)*F,t[4]=L*F,t[5]=(g*S*c-b*v*c+b*l*x-i*S*x-g*l*_+i*v*_)*F,t[6]=(b*p*c-f*S*c-b*l*m+i*S*m+f*l*_-i*p*_)*F,t[7]=(f*v*c-g*p*c+g*l*m-i*v*m-f*l*x+i*p*x)*F,t[8]=D*F,t[9]=(b*y*c-g*T*c-b*r*x+i*T*x+g*r*_-i*y*_)*F,t[10]=(f*T*c-b*h*c+b*r*m-i*T*m-f*r*_+i*h*_)*F,t[11]=(g*h*c-f*y*c-g*r*m+i*y*m+f*r*x-i*h*x)*F,t[12]=B*F,t[13]=(g*T*l-b*y*l+b*r*v-i*T*v-g*r*S+i*y*S)*F,t[14]=(b*h*l-f*T*l-b*r*p+i*T*p+f*r*S-i*h*S)*F,t[15]=(f*y*l-g*h*l+g*r*p-i*y*p-f*r*v+i*h*v)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,c=t.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=t.x,h=t.y,p=t.z,m=c*f,g=c*h;return this.set(m*f+r,m*h-l*p,m*p+l*h,0,m*h+l*p,g*h+r,g*p-l*f,0,m*p-l*h,g*p+l*f,c*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,c,f){return this.set(1,r,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,p=i._w,m=c+c,g=f+f,y=h+h,v=c*m,x=c*g,b=c*y,T=f*g,S=f*y,_=h*y,O=p*m,L=p*g,D=p*y,B=r.x,V=r.y,F=r.z;return l[0]=(1-(T+_))*B,l[1]=(x+D)*B,l[2]=(b-L)*B,l[3]=0,l[4]=(x-D)*V,l[5]=(1-(v+_))*V,l[6]=(S+O)*V,l[7]=0,l[8]=(b+L)*F,l[9]=(S-O)*F,l[10]=(1-(v+T))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let c=Ms.set(l[0],l[1],l[2]).length();const f=Ms.set(l[4],l[5],l[6]).length(),h=Ms.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Ri.copy(this);const m=1/c,g=1/f,y=1/h;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=y,Ri.elements[9]*=y,Ri.elements[10]*=y,i.setFromRotationMatrix(Ri),r.x=c,r.y=f,r.z=h,this}makePerspective(t,i,r,l,c,f,h=ga){const p=this.elements,m=2*c/(i-t),g=2*c/(r-l),y=(i+t)/(i-t),v=(r+l)/(r-l);let x,b;if(h===ga)x=-(f+c)/(f-c),b=-2*f*c/(f-c);else if(h===Jc)x=-f/(f-c),b=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=m,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=v,p[13]=0,p[2]=0,p[6]=0,p[10]=x,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,c,f,h=ga){const p=this.elements,m=1/(i-t),g=1/(r-l),y=1/(f-c),v=(i+t)*m,x=(r+l)*g;let b,T;if(h===ga)b=(f+c)*y,T=-2*y;else if(h===Jc)b=c*y,T=-1*y;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-v,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-x,p[2]=0,p[6]=0,p[10]=T,p[14]=-b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const Ms=new J,Ri=new Ke,UE=new J(0,0,0),LE=new J(1,1,1),Za=new J,Mc=new J,ii=new J,e0=new Ke,n0=new Pr;class Wi{constructor(t=0,i=0,r=0,l=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,c=l[0],f=l[4],h=l[8],p=l[1],m=l[5],g=l[9],y=l[2],v=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-y,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-y,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-be(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(v,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-y,c)):(this._x=0,this._y=Math.atan2(h,x));break;case"XZY":this._z=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return e0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(e0,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return n0.setFromEuler(this),this.setFromQuaternion(n0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class Rv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let NE=0;const i0=new J,Es=new Pr,fa=new Ke,Ec=new J,ko=new J,PE=new J,OE=new Pr,a0=new J(1,0,0),r0=new J(0,1,0),s0=new J(0,0,1),o0={type:"added"},zE={type:"removed"},bs={type:"childadded",child:null},Ah={type:"childremoved",child:null};class Tn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const t=new J,i=new Wi,r=new Pr,l=new J(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ke},normalMatrix:{value:new pe}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,i){return Es.setFromAxisAngle(t,i),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(a0,t)}rotateY(t){return this.rotateOnAxis(r0,t)}rotateZ(t){return this.rotateOnAxis(s0,t)}translateOnAxis(t,i){return i0.copy(t).applyQuaternion(this.quaternion),this.position.add(i0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(a0,t)}translateY(t){return this.translateOnAxis(r0,t)}translateZ(t){return this.translateOnAxis(s0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fa.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Ec.copy(t):Ec.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),ko.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fa.lookAt(ko,Ec,this.up):fa.lookAt(Ec,ko,this.up),this.quaternion.setFromRotationMatrix(fa),l&&(fa.extractRotation(l.matrixWorld),Es.setFromRotationMatrix(fa),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(o0),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zE),Ah.child=t,this.dispatchEvent(Ah),Ah.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fa.multiply(t.parent.matrixWorld)),t.applyMatrix4(fa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(o0),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,t,PE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ko,OE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?{min:h.boundingBox.min.toArray(),max:h.boundingBox.max.toArray()}:void 0,boundingSphere:h.boundingSphere?{radius:h.boundingSphere.radius,center:h.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const y=p[m];c(t.shapes,y)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(t.materials,this.material[p]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(t.animations,p))}}if(i){const h=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),y=f(t.shapes),v=f(t.skeletons),x=f(t.animations),b=f(t.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),y.length>0&&(r.shapes=y),v.length>0&&(r.skeletons=v),x.length>0&&(r.animations=x),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const p=[];for(const m in h){const g=h[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Tn.DEFAULT_UP=new J(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new J,ha=new J,Rh=new J,da=new J,Ts=new J,As=new J,l0=new J,Ch=new J,wh=new J,Dh=new J,Uh=new on,Lh=new on,Nh=new on;class wi{constructor(t=new J,i=new J,r=new J){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ci.subVectors(t,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,r,l,c){Ci.subVectors(l,i),ha.subVectors(r,i),Rh.subVectors(t,i);const f=Ci.dot(Ci),h=Ci.dot(ha),p=Ci.dot(Rh),m=ha.dot(ha),g=ha.dot(Rh),y=f*m-h*h;if(y===0)return c.set(0,0,0),null;const v=1/y,x=(m*p-h*g)*v,b=(f*g-h*p)*v;return c.set(1-x-b,b,x)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(t,i,r,l,c,f,h,p){return this.getBarycoord(t,i,r,l,da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,da.x),p.addScaledVector(f,da.y),p.addScaledVector(h,da.z),p)}static getInterpolatedAttribute(t,i,r,l,c,f){return Uh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Uh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,r),Nh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Uh,c.x),f.addScaledVector(Lh,c.y),f.addScaledVector(Nh,c.z),f}static isFrontFacing(t,i,r,l){return Ci.subVectors(r,i),ha.subVectors(t,i),Ci.cross(ha).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ha.subVectors(this.a,this.b),Ci.cross(ha).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return wi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,c){return wi.getInterpolation(t,this.a,this.b,this.c,i,r,l,c)}containsPoint(t){return wi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,c=this.c;let f,h;Ts.subVectors(l,r),As.subVectors(c,r),Ch.subVectors(t,r);const p=Ts.dot(Ch),m=As.dot(Ch);if(p<=0&&m<=0)return i.copy(r);wh.subVectors(t,l);const g=Ts.dot(wh),y=As.dot(wh);if(g>=0&&y<=g)return i.copy(l);const v=p*y-g*m;if(v<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(Ts,f);Dh.subVectors(t,c);const x=Ts.dot(Dh),b=As.dot(Dh);if(b>=0&&x<=b)return i.copy(c);const T=x*m-p*b;if(T<=0&&m>=0&&b<=0)return h=m/(m-b),i.copy(r).addScaledVector(As,h);const S=g*b-x*y;if(S<=0&&y-g>=0&&x-b>=0)return l0.subVectors(c,l),h=(y-g)/(y-g+(x-b)),i.copy(l).addScaledVector(l0,h);const _=1/(S+T+v);return f=T*_,h=v*_,i.copy(r).addScaledVector(Ts,f).addScaledVector(As,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Cv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ka={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Ph(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Te{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Ne.workingColorSpace){return this.r=t,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Ne.workingColorSpace){if(t=vE(t,1),i=be(i,0,1),r=be(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Ph(f,c,t+1/3),this.g=Ph(f,c,t),this.b=Ph(f,c,t-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(t,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=gi){const r=Cv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return Ne.fromWorkingColorSpace(zn.copy(this),t),Math.round(be(zn.r*255,0,255))*65536+Math.round(be(zn.g*255,0,255))*256+Math.round(be(zn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(zn.copy(this),i);const r=zn.r,l=zn.g,c=zn.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const g=(h+f)/2;if(h===f)p=0,m=0;else{const y=f-h;switch(m=g<=.5?y/(f+h):y/(2-f-h),f){case r:p=(l-c)/y+(l<c?6:0);break;case l:p=(c-r)/y+2;break;case c:p=(r-l)/y+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=gi){Ne.fromWorkingColorSpace(zn.copy(this),t);const i=zn.r,r=zn.g,l=zn.b;return t!==gi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ka),this.setHSL(Ka.h+t,Ka.s+i,Ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ka),t.getHSL(bc);const r=_h(Ka.h,bc.h,i),l=_h(Ka.s,bc.s,i),c=_h(Ka.l,bc.l,i);return this.setHSL(r,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Te;Te.NAMES=Cv;let IE=0;class ol extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Ur,this.side=xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Qh,this.blendEquation=Rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=j_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ur&&(r.blending=this.blending),this.side!==xa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Kh&&(r.blendSrc=this.blendSrc),this.blendDst!==Qh&&(r.blendDst=this.blendDst),this.blendEquation!==Rr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==j_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const p=c[h];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class wv extends ol{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=dv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new J,Tc=new me;let BE=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Z_,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ho(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Xn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,c){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),r=Xn(r,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Z_&&(t.usage=this.usage),t}}class Dv extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Uv extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class ki extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let FE=0;const mi=new Ke,Oh=new Tn,Rs=new J,ai=new Br,Xo=new Br,bn=new J;class nr extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bv(t)?Uv:Dv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(t);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,r){return mi.makeTranslation(t,i,r),this.applyMatrix4(mi),this}scale(t,i,r){return mi.makeScale(t,i,r),this.applyMatrix4(mi),this}lookAt(t){return Oh.lookAt(t),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new ki(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors(ai.min,Xo.min),ai.expandByPoint(bn),bn.addVectors(ai.max,Xo.max),ai.expandByPoint(bn)):(ai.expandByPoint(Xo.min),ai.expandByPoint(Xo.max))}ai.getCenter(r);let l=0;for(let c=0,f=t.count;c<f;c++)bn.fromBufferAttribute(t,c),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],p=this.morphTargetsRelative;for(let m=0,g=h.count;m<g;m++)bn.fromBufferAttribute(h,m),p&&(Rs.fromBufferAttribute(t,m),bn.add(Rs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],p=[];for(let q=0;q<r.count;q++)h[q]=new J,p[q]=new J;const m=new J,g=new J,y=new J,v=new me,x=new me,b=new me,T=new J,S=new J;function _(q,N,R){m.fromBufferAttribute(r,q),g.fromBufferAttribute(r,N),y.fromBufferAttribute(r,R),v.fromBufferAttribute(c,q),x.fromBufferAttribute(c,N),b.fromBufferAttribute(c,R),g.sub(m),y.sub(m),x.sub(v),b.sub(v);const G=1/(x.x*b.y-b.x*x.y);isFinite(G)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(y,-x.y).multiplyScalar(G),S.copy(y).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(G),h[q].add(T),h[N].add(T),h[R].add(T),p[q].add(S),p[N].add(S),p[R].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let q=0,N=O.length;q<N;++q){const R=O[q],G=R.start,pt=R.count;for(let ht=G,At=G+pt;ht<At;ht+=3)_(t.getX(ht+0),t.getX(ht+1),t.getX(ht+2))}const L=new J,D=new J,B=new J,V=new J;function F(q){B.fromBufferAttribute(l,q),V.copy(B);const N=h[q];L.copy(N),L.sub(B.multiplyScalar(B.dot(N))).normalize(),D.crossVectors(V,N);const G=D.dot(p[q])<0?-1:1;f.setXYZW(q,L.x,L.y,L.z,G)}for(let q=0,N=O.length;q<N;++q){const R=O[q],G=R.start,pt=R.count;for(let ht=G,At=G+pt;ht<At;ht+=3)F(t.getX(ht+0)),F(t.getX(ht+1)),F(t.getX(ht+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,x=r.count;v<x;v++)r.setXYZ(v,0,0,0);const l=new J,c=new J,f=new J,h=new J,p=new J,m=new J,g=new J,y=new J;if(t)for(let v=0,x=t.count;v<x;v+=3){const b=t.getX(v+0),T=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),g.subVectors(f,c),y.subVectors(l,c),g.cross(y),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,S),h.add(g),p.add(g),m.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let v=0,x=i.count;v<x;v+=3)l.fromBufferAttribute(i,v+0),c.fromBufferAttribute(i,v+1),f.fromBufferAttribute(i,v+2),g.subVectors(f,c),y.subVectors(l,c),g.cross(y),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,p){const m=h.array,g=h.itemSize,y=h.normalized,v=new m.constructor(p.length*g);let x=0,b=0;for(let T=0,S=p.length;T<S;T++){h.isInterleavedBufferAttribute?x=p[T]*h.data.stride+h.offset:x=p[T]*g;for(let _=0;_<g;_++)v[b++]=m[x++]}return new Ui(v,g,y)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new nr,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=t(p,r);i.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let g=0,y=m.length;g<y;g++){const v=m[g],x=t(v,r);p.push(x)}i.morphAttributes[h]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,p=f.length;h<p;h++){const m=f[h];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let y=0,v=m.length;y<v;y++){const x=m[y];g.push(x.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],y=c[m];for(let v=0,x=y.length;v<x;v++)g.push(y[v].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const y=f[m];this.addGroup(y.start,y.count,y.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const c0=new Ke,Mr=new Av,Ac=new sl,u0=new J,Rc=new J,Cc=new J,wc=new J,zh=new J,Dc=new J,f0=new J,Uc=new J;class vi extends Tn{constructor(t=new nr,i=new wv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){Dc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=h[p],y=c[p];g!==0&&(zh.fromBufferAttribute(y,t),f?Dc.addScaledVector(zh,g):Dc.addScaledVector(zh.sub(i),g))}i.add(Dc)}return i}raycast(t,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ac.copy(r.boundingSphere),Ac.applyMatrix4(c),Mr.copy(t.ray).recast(t.near),!(Ac.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Ac,u0)===null||Mr.origin.distanceToSquared(u0)>(t.far-t.near)**2))&&(c0.copy(c).invert(),Mr.copy(t.ray).applyMatrix4(c0),!(r.boundingBox!==null&&Mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,Mr)))}_computeIntersections(t,i,r){let l;const c=this.geometry,f=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,y=c.attributes.normal,v=c.groups,x=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const S=v[b],_=f[S.materialIndex],O=Math.max(S.start,x.start),L=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let D=O,B=L;D<B;D+=3){const V=h.getX(D),F=h.getX(D+1),q=h.getX(D+2);l=Lc(this,_,t,r,m,g,y,V,F,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let S=b,_=T;S<_;S+=3){const O=h.getX(S),L=h.getX(S+1),D=h.getX(S+2);l=Lc(this,f,t,r,m,g,y,O,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,T=v.length;b<T;b++){const S=v[b],_=f[S.materialIndex],O=Math.max(S.start,x.start),L=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let D=O,B=L;D<B;D+=3){const V=D,F=D+1,q=D+2;l=Lc(this,_,t,r,m,g,y,V,F,q),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=b,_=T;S<_;S+=3){const O=S,L=S+1,D=S+2;l=Lc(this,f,t,r,m,g,y,O,L,D),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function HE(s,t,i,r,l,c,f,h){let p;if(t.side===qn?p=r.intersectTriangle(f,c,l,!0,h):p=r.intersectTriangle(l,c,f,t.side===xa,h),p===null)return null;Uc.copy(h),Uc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Uc);return m<i.near||m>i.far?null:{distance:m,point:Uc.clone(),object:s}}function Lc(s,t,i,r,l,c,f,h,p,m){s.getVertexPosition(h,Rc),s.getVertexPosition(p,Cc),s.getVertexPosition(m,wc);const g=HE(s,t,i,r,Rc,Cc,wc,f0);if(g){const y=new J;wi.getBarycoord(f0,Rc,Cc,wc,y),l&&(g.uv=wi.getInterpolatedAttribute(l,h,p,m,y,new me)),c&&(g.uv1=wi.getInterpolatedAttribute(c,h,p,m,y,new me)),f&&(g.normal=wi.getInterpolatedAttribute(f,h,p,m,y,new J),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:h,b:p,c:m,normal:new J,materialIndex:0};wi.getNormal(Rc,Cc,wc,v.normal),g.face=v,g.barycoord=y}return g}class ll extends nr{constructor(t=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],y=[];let v=0,x=0;b("z","y","x",-1,-1,r,i,t,f,c,0),b("z","y","x",1,-1,r,i,-t,f,c,1),b("x","z","y",1,1,t,r,i,l,f,2),b("x","z","y",1,-1,t,r,-i,l,f,3),b("x","y","z",1,-1,t,i,r,l,c,4),b("x","y","z",-1,-1,t,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new ki(m,3)),this.setAttribute("normal",new ki(g,3)),this.setAttribute("uv",new ki(y,2));function b(T,S,_,O,L,D,B,V,F,q,N){const R=D/F,G=B/q,pt=D/2,ht=B/2,At=V/2,yt=F+1,I=q+1;let Q=0,j=0;const Nt=new J;for(let P=0;P<I;P++){const at=P*G-ht;for(let Ct=0;Ct<yt;Ct++){const Lt=Ct*R-pt;Nt[T]=Lt*O,Nt[S]=at*L,Nt[_]=At,m.push(Nt.x,Nt.y,Nt.z),Nt[T]=0,Nt[S]=0,Nt[_]=V>0?1:-1,g.push(Nt.x,Nt.y,Nt.z),y.push(Ct/F),y.push(1-P/q),Q+=1}}for(let P=0;P<q;P++)for(let at=0;at<F;at++){const Ct=v+at+yt*P,Lt=v+at+yt*(P+1),tt=v+(at+1)+yt*(P+1),Et=v+(at+1)+yt*P;p.push(Ct,Lt,Et),p.push(Lt,tt,Et),j+=6}h.addGroup(x,j,N),x+=j,v+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Hs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Bn(s){const t={};for(let i=0;i<s.length;i++){const r=Hs(s[i]);for(const l in r)t[l]=r[l]}return t}function GE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function Lv(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ne.workingColorSpace}const VE={clone:Hs,merge:Bn};var kE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sa extends ol{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kE,this.fragmentShader=XE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Hs(t.uniforms),this.uniformsGroups=GE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Nv extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=ga}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qa=new J,h0=new me,d0=new me;class _i extends Nv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Od*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Yc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Od*2*Math.atan(Math.tan(Yc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z),Qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qa.x,Qa.y).multiplyScalar(-t/Qa.z)}getViewSize(t,i){return this.getViewBounds(t,h0,d0),i.subVectors(d0,h0)}setViewOffset(t,i,r,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Yc*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Cs=-90,ws=1;class WE extends Tn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new _i(Cs,ws,t,i);l.layers=this.layers,this.add(l);const c=new _i(Cs,ws,t,i);c.layers=this.layers,this.add(c);const f=new _i(Cs,ws,t,i);f.layers=this.layers,this.add(f);const h=new _i(Cs,ws,t,i);h.layers=this.layers,this.add(h);const p=new _i(Cs,ws,t,i);p.layers=this.layers,this.add(p);const m=new _i(Cs,ws,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,p]=i;for(const m of i)this.remove(m);if(t===ga)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Jc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,p,m,g]=this.children,y=t.getRenderTarget(),v=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,c),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=T,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(y,v,x),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Pv extends Fn{constructor(t=[],i=Is,r,l,c,f,h,p,m,g){super(t,i,r,l,c,f,h,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qE extends Nr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new Sa({name:"CubemapFromEquirect",uniforms:Hs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:tr});c.uniforms.tEquirect.value=i;const f=new vi(l,c),h=i.minFilter;return i.minFilter===Dr&&(i.minFilter=Gi),new WE(1,10,this).update(t,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(c)}}class Nc extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YE={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,c=null,f=null;const h=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,r),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],y=m.joints["thumb-tip"],v=g.position.distanceTo(y.position),x=.02,b=.005;m.inputState.pinching&&v>x+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&v<=x-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(YE)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Nc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class jE extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ZE extends Fn{constructor(t=null,i=1,r=1,l,c,f,h,p,m=ri,g=ri,y,v){super(null,f,h,p,m,g,l,c,y,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo extends Ui{constructor(t,i,r,l=1){super(t,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ds=new Ke,p0=new Ke,Pc=[],m0=new Br,KE=new Ke,Wo=new vi,qo=new sl;class g0 extends vi{constructor(t,i,r){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new jo(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,KE)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Br),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ds),m0.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(m0)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new sl),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ds),qo.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(qo)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,f=t*c+1;for(let h=0;h<r.length;h++)r[h]=l[f+h]}raycast(t,i){const r=this.matrixWorld,l=this.count;if(Wo.geometry=this.geometry,Wo.material=this.material,Wo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(r),t.ray.intersectsSphere(qo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ds),p0.multiplyMatrices(r,Ds),Wo.matrixWorld=p0,Wo.raycast(t,Pc);for(let f=0,h=Pc.length;f<h;f++){const p=Pc[f];p.instanceId=c,p.object=this,i.push(p)}Pc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new jo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new ZE(new Float32Array(l*this.count),l,this.count,Yd,Vi));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<r.length;m++)f+=r[m];const h=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=h,c.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bh=new J,QE=new J,JE=new pe;class Ja{constructor(t=new J(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Bh.subVectors(r,i).cross(QE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Bh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(r,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||JE.getNormalMatrix(t),l=this.coplanarPoint(Bh).applyMatrix4(t),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new sl,Oc=new J;class Jd{constructor(t=new Ja,i=new Ja,r=new Ja,l=new Ja,c=new Ja,f=new Ja){this.planes=[t,i,r,l,c,f]}set(t,i,r,l,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ga){const r=this.planes,l=t.elements,c=l[0],f=l[1],h=l[2],p=l[3],m=l[4],g=l[5],y=l[6],v=l[7],x=l[8],b=l[9],T=l[10],S=l[11],_=l[12],O=l[13],L=l[14],D=l[15];if(r[0].setComponents(p-c,v-m,S-x,D-_).normalize(),r[1].setComponents(p+c,v+m,S+x,D+_).normalize(),r[2].setComponents(p+f,v+g,S+b,D+O).normalize(),r[3].setComponents(p-f,v-g,S-b,D-O).normalize(),r[4].setComponents(p-h,v-y,S-T,D-L).normalize(),i===ga)r[5].setComponents(p+h,v+y,S+T,D+L).normalize();else if(i===Jc)r[5].setComponents(h,y,T,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(t){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(t.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Oc.x=l.normal.x>0?t.max.x:t.min.x,Oc.y=l.normal.y>0?t.max.y:t.min.y,Oc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Oc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ov extends Fn{constructor(t,i,r=Lr,l,c,f,h=ri,p=ri,m,g=$o){if(g!==$o&&g!==tl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,c,f,h,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Qd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class au extends nr{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const c=t/2,f=i/2,h=Math.floor(r),p=Math.floor(l),m=h+1,g=p+1,y=t/h,v=i/p,x=[],b=[],T=[],S=[];for(let _=0;_<g;_++){const O=_*v-f;for(let L=0;L<m;L++){const D=L*y-c;b.push(D,-O,0),T.push(0,0,1),S.push(L/h),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<h;O++){const L=O+m*_,D=O+m*(_+1),B=O+1+m*(_+1),V=O+1+m*_;x.push(L,D,V),x.push(D,B,V)}this.setIndex(x),this.setAttribute("position",new ki(b,3)),this.setAttribute("normal",new ki(T,3)),this.setAttribute("uv",new ki(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new au(t.width,t.height,t.widthSegments,t.heightSegments)}}class Zo extends nr{constructor(t=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+h,Math.PI);let m=0;const g=[],y=new J,v=new J,x=[],b=[],T=[],S=[];for(let _=0;_<=r;_++){const O=[],L=_/r;let D=0;_===0&&f===0?D=.5/i:_===r&&p===Math.PI&&(D=-.5/i);for(let B=0;B<=i;B++){const V=B/i;y.x=-t*Math.cos(l+V*c)*Math.sin(f+L*h),y.y=t*Math.cos(f+L*h),y.z=t*Math.sin(l+V*c)*Math.sin(f+L*h),b.push(y.x,y.y,y.z),v.copy(y).normalize(),T.push(v.x,v.y,v.z),S.push(V+D,1-L),O.push(m++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const L=g[_][O+1],D=g[_][O],B=g[_+1][O],V=g[_+1][O+1];(_!==0||f>0)&&x.push(L,D,V),(_!==r-1||p<Math.PI)&&x.push(D,B,V)}this.setIndex(x),this.setAttribute("position",new ki(b,3)),this.setAttribute("normal",new ki(T,3)),this.setAttribute("uv",new ki(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class _0 extends ol{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mv,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $E extends ol{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tb extends ol{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class zv extends Tn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Fh=new Ke,v0=new J,y0=new J;class eb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jd,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new on(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,r=this.matrix;v0.setFromMatrixPosition(t.matrixWorld),i.position.copy(v0),y0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(y0),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Iv extends Nv{constructor(t=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-t,f=r+t,h=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,h-=g*this.view.offsetY,p=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class nb extends eb{constructor(){super(new Iv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x0 extends zv{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new nb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ib extends zv{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class ab extends _i{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class S0{constructor(t=1,i=0,r=0){this.radius=t,this.phi=i,this.theta=r}set(t,i,r){return this.radius=t,this.phi=i,this.theta=r,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=be(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,r){return this.radius=Math.sqrt(t*t+i*i+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,r),this.phi=Math.acos(be(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rb extends Ir{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function M0(s,t,i,r){const l=sb(r);switch(i){case vv:return s*t;case Yd:return s*t/l.components*l.byteLength;case jd:return s*t/l.components*l.byteLength;case xv:return s*t*2/l.components*l.byteLength;case Zd:return s*t*2/l.components*l.byteLength;case yv:return s*t*3/l.components*l.byteLength;case Di:return s*t*4/l.components*l.byteLength;case Kd:return s*t*4/l.components*l.byteLength;case Vc:case kc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xc:case Wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ud:case hd:return Math.max(s,16)*Math.max(t,8)/4;case cd:case fd:return Math.max(s,8)*Math.max(t,8)/2;case dd:case pd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case md:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case vd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case yd:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case xd:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Sd:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Md:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Ed:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case bd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Td:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Ad:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Rd:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case qc:case Dd:case Ud:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sv:case Ld:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Nd:case Pd:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function sb(s){switch(s){case Xi:case mv:return{byteLength:1,components:1};case Qo:case gv:case al:return{byteLength:2,components:1};case Wd:case qd:return{byteLength:2,components:4};case Lr:case Xd:case Vi:return{byteLength:4,components:1};case _v:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bv(){let s=null,t=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function ob(s){const t=new WeakMap;function i(h,p){const m=h.array,g=h.usage,y=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,g),h.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:y}}function r(h,p,m){const g=p.array,y=p.updateRanges;if(s.bindBuffer(m,h),y.length===0)s.bufferSubData(m,0,g);else{y.sort((x,b)=>x.start-b.start);let v=0;for(let x=1;x<y.length;x++){const b=y[v],T=y[x];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++v,y[v]=T)}y.length=v+1;for(let x=0,b=y.length;x<b;x++){const T=y[x];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=t.get(h);p&&(s.deleteBuffer(p.buffer),t.delete(h))}function f(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=t.get(h);if(m===void 0)t.set(h,i(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:f}}var lb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ib=`#ifdef USE_EMISSIVEMAP
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
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,IT=`#ifdef PREMULTIPLIED_ALPHA
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
}`,z1=`uniform vec3 diffuse;
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
}`,I1=`#include <common>
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
}`,ge={alphahash_fragment:lb,alphahash_pars_fragment:cb,alphamap_fragment:ub,alphamap_pars_fragment:fb,alphatest_fragment:hb,alphatest_pars_fragment:db,aomap_fragment:pb,aomap_pars_fragment:mb,batching_pars_vertex:gb,batching_vertex:_b,begin_vertex:vb,beginnormal_vertex:yb,bsdfs:xb,iridescence_fragment:Sb,bumpmap_pars_fragment:Mb,clipping_planes_fragment:Eb,clipping_planes_pars_fragment:bb,clipping_planes_pars_vertex:Tb,clipping_planes_vertex:Ab,color_fragment:Rb,color_pars_fragment:Cb,color_pars_vertex:wb,color_vertex:Db,common:Ub,cube_uv_reflection_fragment:Lb,defaultnormal_vertex:Nb,displacementmap_pars_vertex:Pb,displacementmap_vertex:Ob,emissivemap_fragment:zb,emissivemap_pars_fragment:Ib,colorspace_fragment:Bb,colorspace_pars_fragment:Fb,envmap_fragment:Hb,envmap_common_pars_fragment:Gb,envmap_pars_fragment:Vb,envmap_pars_vertex:kb,envmap_physical_pars_fragment:tT,envmap_vertex:Xb,fog_vertex:Wb,fog_pars_vertex:qb,fog_fragment:Yb,fog_pars_fragment:jb,gradientmap_pars_fragment:Zb,lightmap_pars_fragment:Kb,lights_lambert_fragment:Qb,lights_lambert_pars_fragment:Jb,lights_pars_begin:$b,lights_toon_fragment:eT,lights_toon_pars_fragment:nT,lights_phong_fragment:iT,lights_phong_pars_fragment:aT,lights_physical_fragment:rT,lights_physical_pars_fragment:sT,lights_fragment_begin:oT,lights_fragment_maps:lT,lights_fragment_end:cT,logdepthbuf_fragment:uT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:dT,map_fragment:pT,map_pars_fragment:mT,map_particle_fragment:gT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:yT,morphinstance_vertex:xT,morphcolor_vertex:ST,morphnormal_vertex:MT,morphtarget_pars_vertex:ET,morphtarget_vertex:bT,normal_fragment_begin:TT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:CT,normal_vertex:wT,normalmap_pars_fragment:DT,clearcoat_normal_fragment_begin:UT,clearcoat_normal_fragment_maps:LT,clearcoat_pars_fragment:NT,iridescence_pars_fragment:PT,opaque_fragment:OT,packing:zT,premultiplied_alpha_fragment:IT,project_vertex:BT,dithering_fragment:FT,dithering_pars_fragment:HT,roughnessmap_fragment:GT,roughnessmap_pars_fragment:VT,shadowmap_pars_fragment:kT,shadowmap_pars_vertex:XT,shadowmap_vertex:WT,shadowmask_pars_fragment:qT,skinbase_vertex:YT,skinning_pars_vertex:jT,skinning_vertex:ZT,skinnormal_vertex:KT,specularmap_fragment:QT,specularmap_pars_fragment:JT,tonemapping_fragment:$T,tonemapping_pars_fragment:t1,transmission_fragment:e1,transmission_pars_fragment:n1,uv_pars_fragment:i1,uv_pars_vertex:a1,uv_vertex:r1,worldpos_vertex:s1,background_vert:o1,background_frag:l1,backgroundCube_vert:c1,backgroundCube_frag:u1,cube_vert:f1,cube_frag:h1,depth_vert:d1,depth_frag:p1,distanceRGBA_vert:m1,distanceRGBA_frag:g1,equirect_vert:_1,equirect_frag:v1,linedashed_vert:y1,linedashed_frag:x1,meshbasic_vert:S1,meshbasic_frag:M1,meshlambert_vert:E1,meshlambert_frag:b1,meshmatcap_vert:T1,meshmatcap_frag:A1,meshnormal_vert:R1,meshnormal_frag:C1,meshphong_vert:w1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:L1,meshtoon_vert:N1,meshtoon_frag:P1,points_vert:O1,points_frag:z1,shadow_vert:I1,shadow_frag:B1,sprite_vert:F1,sprite_frag:H1},Yt={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Hi={basic:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.fog]),vertexShader:ge.meshbasic_vert,fragmentShader:ge.meshbasic_frag},lambert:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshlambert_vert,fragmentShader:ge.meshlambert_frag},phong:{uniforms:Bn([Yt.common,Yt.specularmap,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,Yt.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:ge.meshphong_vert,fragmentShader:ge.meshphong_frag},standard:{uniforms:Bn([Yt.common,Yt.envmap,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.roughnessmap,Yt.metalnessmap,Yt.fog,Yt.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag},toon:{uniforms:Bn([Yt.common,Yt.aomap,Yt.lightmap,Yt.emissivemap,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.gradientmap,Yt.fog,Yt.lights,{emissive:{value:new Te(0)}}]),vertexShader:ge.meshtoon_vert,fragmentShader:ge.meshtoon_frag},matcap:{uniforms:Bn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,Yt.fog,{matcap:{value:null}}]),vertexShader:ge.meshmatcap_vert,fragmentShader:ge.meshmatcap_frag},points:{uniforms:Bn([Yt.points,Yt.fog]),vertexShader:ge.points_vert,fragmentShader:ge.points_frag},dashed:{uniforms:Bn([Yt.common,Yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ge.linedashed_vert,fragmentShader:ge.linedashed_frag},depth:{uniforms:Bn([Yt.common,Yt.displacementmap]),vertexShader:ge.depth_vert,fragmentShader:ge.depth_frag},normal:{uniforms:Bn([Yt.common,Yt.bumpmap,Yt.normalmap,Yt.displacementmap,{opacity:{value:1}}]),vertexShader:ge.meshnormal_vert,fragmentShader:ge.meshnormal_frag},sprite:{uniforms:Bn([Yt.sprite,Yt.fog]),vertexShader:ge.sprite_vert,fragmentShader:ge.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ge.background_vert,fragmentShader:ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ge.backgroundCube_vert,fragmentShader:ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ge.cube_vert,fragmentShader:ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ge.equirect_vert,fragmentShader:ge.equirect_frag},distanceRGBA:{uniforms:Bn([Yt.common,Yt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ge.distanceRGBA_vert,fragmentShader:ge.distanceRGBA_frag},shadow:{uniforms:Bn([Yt.lights,Yt.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:ge.shadow_vert,fragmentShader:ge.shadow_frag}};Hi.physical={uniforms:Bn([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ge.meshphysical_vert,fragmentShader:ge.meshphysical_frag};const zc={r:0,b:0,g:0},br=new Wi,G1=new Ke;function V1(s,t,i,r,l,c,f){const h=new Te(0);let p=c===!0?0:1,m,g,y=null,v=0,x=null;function b(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:t).get(D)),D}function T(L){let D=!1;const B=b(L);B===null?_(h,p):B&&B.isColor&&(_(B,1),D=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?r.buffers.color.setClear(0,0,0,1,f):V==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(L,D){const B=b(D);B&&(B.isCubeTexture||B.mapping===iu)?(g===void 0&&(g=new vi(new ll(1,1,1),new Sa({name:"BackgroundCubeMaterial",uniforms:Hs(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),br.copy(D.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),g.material.uniforms.envMap.value=B,g.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(G1.makeRotationFromEuler(br)),g.material.toneMapped=Ne.getTransfer(B.colorSpace)!==Ve,(y!==B||v!==B.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,y=B,v=B.version,x=s.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):B&&B.isTexture&&(m===void 0&&(m=new vi(new au(2,2),new Sa({name:"BackgroundMaterial",uniforms:Hs(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=B,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(B.colorSpace)!==Ve,B.matrixAutoUpdate===!0&&B.updateMatrix(),m.material.uniforms.uvTransform.value.copy(B.matrix),(y!==B||v!==B.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,y=B,v=B.version,x=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,D){L.getRGB(zc,Lv(s)),r.buffers.color.setClear(zc.r,zc.g,zc.b,D,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),p=D,_(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(h,p)},render:T,addToRenderList:S,dispose:O}}function k1(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,f=!1;function h(R,G,pt,ht,At){let yt=!1;const I=y(ht,pt,G);c!==I&&(c=I,m(c.object)),yt=x(R,ht,pt,At),yt&&b(R,ht,pt,At),At!==null&&t.update(At,s.ELEMENT_ARRAY_BUFFER),(yt||f)&&(f=!1,D(R,G,pt,ht),At!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(At).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function y(R,G,pt){const ht=pt.wireframe===!0;let At=r[R.id];At===void 0&&(At={},r[R.id]=At);let yt=At[G.id];yt===void 0&&(yt={},At[G.id]=yt);let I=yt[ht];return I===void 0&&(I=v(p()),yt[ht]=I),I}function v(R){const G=[],pt=[],ht=[];for(let At=0;At<i;At++)G[At]=0,pt[At]=0,ht[At]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:pt,attributeDivisors:ht,object:R,attributes:{},index:null}}function x(R,G,pt,ht){const At=c.attributes,yt=G.attributes;let I=0;const Q=pt.getAttributes();for(const j in Q)if(Q[j].location>=0){const P=At[j];let at=yt[j];if(at===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(at=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(at=R.instanceColor)),P===void 0||P.attribute!==at||at&&P.data!==at.data)return!0;I++}return c.attributesNum!==I||c.index!==ht}function b(R,G,pt,ht){const At={},yt=G.attributes;let I=0;const Q=pt.getAttributes();for(const j in Q)if(Q[j].location>=0){let P=yt[j];P===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(P=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(P=R.instanceColor));const at={};at.attribute=P,P&&P.data&&(at.data=P.data),At[j]=at,I++}c.attributes=At,c.attributesNum=I,c.index=ht}function T(){const R=c.newAttributes;for(let G=0,pt=R.length;G<pt;G++)R[G]=0}function S(R){_(R,0)}function _(R,G){const pt=c.newAttributes,ht=c.enabledAttributes,At=c.attributeDivisors;pt[R]=1,ht[R]===0&&(s.enableVertexAttribArray(R),ht[R]=1),At[R]!==G&&(s.vertexAttribDivisor(R,G),At[R]=G)}function O(){const R=c.newAttributes,G=c.enabledAttributes;for(let pt=0,ht=G.length;pt<ht;pt++)G[pt]!==R[pt]&&(s.disableVertexAttribArray(pt),G[pt]=0)}function L(R,G,pt,ht,At,yt,I){I===!0?s.vertexAttribIPointer(R,G,pt,At,yt):s.vertexAttribPointer(R,G,pt,ht,At,yt)}function D(R,G,pt,ht){T();const At=ht.attributes,yt=pt.getAttributes(),I=G.defaultAttributeValues;for(const Q in yt){const j=yt[Q];if(j.location>=0){let Nt=At[Q];if(Nt===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Nt=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Nt=R.instanceColor)),Nt!==void 0){const P=Nt.normalized,at=Nt.itemSize,Ct=t.get(Nt);if(Ct===void 0)continue;const Lt=Ct.buffer,tt=Ct.type,Et=Ct.bytesPerElement,wt=tt===s.INT||tt===s.UNSIGNED_INT||Nt.gpuType===Xd;if(Nt.isInterleavedBufferAttribute){const Vt=Nt.data,kt=Vt.stride,fe=Nt.offset;if(Vt.isInstancedInterleavedBuffer){for(let re=0;re<j.locationSize;re++)_(j.location+re,Vt.meshPerAttribute);R.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let re=0;re<j.locationSize;re++)S(j.location+re);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let re=0;re<j.locationSize;re++)L(j.location+re,at/j.locationSize,tt,P,kt*Et,(fe+at/j.locationSize*re)*Et,wt)}else{if(Nt.isInstancedBufferAttribute){for(let Vt=0;Vt<j.locationSize;Vt++)_(j.location+Vt,Nt.meshPerAttribute);R.isInstancedMesh!==!0&&ht._maxInstanceCount===void 0&&(ht._maxInstanceCount=Nt.meshPerAttribute*Nt.count)}else for(let Vt=0;Vt<j.locationSize;Vt++)S(j.location+Vt);s.bindBuffer(s.ARRAY_BUFFER,Lt);for(let Vt=0;Vt<j.locationSize;Vt++)L(j.location+Vt,at/j.locationSize,tt,P,at*Et,at/j.locationSize*Vt*Et,wt)}}else if(I!==void 0){const P=I[Q];if(P!==void 0)switch(P.length){case 2:s.vertexAttrib2fv(j.location,P);break;case 3:s.vertexAttrib3fv(j.location,P);break;case 4:s.vertexAttrib4fv(j.location,P);break;default:s.vertexAttrib1fv(j.location,P)}}}}O()}function B(){q();for(const R in r){const G=r[R];for(const pt in G){const ht=G[pt];for(const At in ht)g(ht[At].object),delete ht[At];delete G[pt]}delete r[R]}}function V(R){if(r[R.id]===void 0)return;const G=r[R.id];for(const pt in G){const ht=G[pt];for(const At in ht)g(ht[At].object),delete ht[At];delete G[pt]}delete r[R.id]}function F(R){for(const G in r){const pt=r[G];if(pt[R.id]===void 0)continue;const ht=pt[R.id];for(const At in ht)g(ht[At].object),delete ht[At];delete pt[R.id]}}function q(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:N,dispose:B,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:O}}function X1(s,t,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,y){y!==0&&(s.drawArraysInstanced(r,m,g,y),i.update(g,r,y))}function h(m,g,y){if(y===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,y);let x=0;for(let b=0;b<y;b++)x+=g[b];i.update(x,r,1)}function p(m,g,y,v){if(y===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let b=0;b<m.length;b++)f(m[b],g[b],v[b]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,g,0,v,0,y);let b=0;for(let T=0;T<y;T++)b+=g[T]*v[T];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function W1(s,t,i,r){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(F){return!(F!==Di&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===al&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==Xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Vi&&!q)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const y=i.logarithmicDepthBuffer===!0,v=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=b>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:y,reverseDepthBuffer:v,maxTextures:x,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:B,maxSamples:V}}function q1(s){const t=this;let i=null,r=0,l=!1,c=!1;const f=new Ja,h=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(y,v){const x=y.length!==0||v||r!==0||l;return l=v,r=y.length,x},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(y,v){i=g(y,v,0)},this.setState=function(y,v,x){const b=y.clippingPlanes,T=y.clipIntersection,S=y.clipShadows,_=s.get(y);if(!l||b===null||b.length===0||c&&!S)c?g(null):m();else{const O=c?0:r,L=O*4;let D=_.clippingState||null;p.value=D,D=g(b,v,L,x);for(let B=0;B!==L;++B)D[B]=i[B];_.clippingState=D,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(y,v,x,b){const T=y!==null?y.length:0;let S=null;if(T!==0){if(S=p.value,b!==!0||S===null){const _=x+T*4,O=v.matrixWorldInverse;h.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,D=x;L!==T;++L,D+=4)f.copy(y[L]).applyMatrix4(O,h),f.normal.toArray(S,D),S[D+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function Y1(s){let t=new WeakMap;function i(f,h){return h===rd?f.mapping=Is:h===sd&&(f.mapping=Bs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===rd||h===sd)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new qE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function c(){t=new WeakMap}return{get:r,dispose:c}}const Ns=4,E0=[.125,.215,.35,.446,.526,.582],Cr=20,Hh=new Iv,b0=new Te;let Gh=null,Vh=0,kh=0,Xh=!1;const Ar=(1+Math.sqrt(5))/2,Us=1/Ar,T0=[new J(-Ar,Us,0),new J(Ar,Us,0),new J(-Us,0,Ar),new J(Us,0,Ar),new J(0,Ar,-Us),new J(0,Ar,Us),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],j1=new J;class A0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=j1}=c;Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,h),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=w0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=C0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gh,Vh,kh),this._renderer.xr.enabled=Xh,t.scissorTest=!1,Ic(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===Bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),kh=this._renderer.getActiveMipmapLevel(),Xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Gi,minFilter:Gi,generateMipmaps:!1,type:al,format:Di,colorSpace:Fs,depthBuffer:!1},l=R0(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=R0(t,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z1(c)),this._blurMaterial=K1(c,t,i)}return l}_compileMaterial(t){const i=new vi(this._lodPlanes[0],t);this._renderer.compile(i,Hh)}_sceneToCubeUV(t,i,r,l,c){const p=new _i(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],y=this._renderer,v=y.autoClear,x=y.toneMapping;y.getClearColor(b0),y.toneMapping=er,y.autoClear=!1;const b=new wv({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),T=new vi(new ll,b);let S=!1;const _=t.background;_?_.isColor&&(b.color.copy(_),t.background=null,S=!0):(b.color.copy(b0),S=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):L===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const D=this._cubeSize;Ic(l,L*D,O>2?D:0,D,D),y.setRenderTarget(l),S&&y.render(T,p),y.render(t,p)}T.geometry.dispose(),T.material.dispose(),y.toneMapping=x,y.autoClear=v,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Is||t.mapping===Bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=w0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=C0());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new vi(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=t;const p=this._cubeSize;Ic(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,Hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=T0[(l-c-1)%T0.length];this._blur(t,c-1,c,f,h)}i.autoClear=r}_blur(t,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",c),this._halfBlur(f,t,r,r,l,"longitudinal",c)}_halfBlur(t,i,r,l,c,f,h){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,y=new vi(this._lodPlanes[l],m),v=m.uniforms,x=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*Cr-1),T=c/b,S=isFinite(c)?1+Math.floor(g*T):Cr;S>Cr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Cr}`);const _=[];let O=0;for(let F=0;F<Cr;++F){const q=F/T,N=Math.exp(-q*q/2);_.push(N),F===0?O+=N:F<S&&(O+=2*N)}for(let F=0;F<_.length;F++)_[F]=_[F]/O;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=f==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:L}=this;v.dTheta.value=b,v.mipInt.value=L-r;const D=this._sizeLods[l],B=3*D*(l>L-Ns?l-L+Ns:0),V=4*(this._cubeSize-D);Ic(i,B,V,3*D,2*D),p.setRenderTarget(i),p.render(y,Hh)}}function Z1(s){const t=[],i=[],r=[];let l=s;const c=s-Ns+1+E0.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let p=1/h;f>s-Ns?p=E0[f-s+Ns-1]:f===0&&(p=0),r.push(p);const m=1/(h-2),g=-m,y=1+m,v=[g,g,y,g,y,y,g,g,y,y,g,y],x=6,b=6,T=3,S=2,_=1,O=new Float32Array(T*b*x),L=new Float32Array(S*b*x),D=new Float32Array(_*b*x);for(let V=0;V<x;V++){const F=V%3*2/3-1,q=V>2?0:-1,N=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];O.set(N,T*b*V),L.set(v,S*b*V);const R=[V,V,V,V,V,V];D.set(R,_*b*V)}const B=new nr;B.setAttribute("position",new Ui(O,T)),B.setAttribute("uv",new Ui(L,S)),B.setAttribute("faceIndex",new Ui(D,_)),t.push(B),l>Ns&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function R0(s,t,i){const r=new Nr(s,t,i);return r.texture.mapping=iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ic(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function K1(s,t,i){const r=new Float32Array(Cr),l=new J(0,1,0);return new Sa({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:$d(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function C0(){return new Sa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function w0(){return new Sa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function $d(){return`

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
	`}function Q1(s){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const p=h.mapping,m=p===rd||p===sd,g=p===Is||p===Bs;if(m||g){let y=t.get(h);const v=y!==void 0?y.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new A0(s)),y=m?i.fromEquirectangular(h,y):i.fromCubemap(h,y),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),y.texture;if(y!==void 0)return y.texture;{const x=h.image;return m&&x&&x.height>0||g&&x&&l(x)?(i===null&&(i=new A0(s)),y=m?i.fromEquirectangular(h):i.fromCubemap(h),y.texture.pmremVersion=h.pmremVersion,t.set(h,y),h.addEventListener("dispose",c),y.texture):null}}}return h}function l(h){let p=0;const m=6;for(let g=0;g<m;g++)h[g]!==void 0&&p++;return p===m}function c(h){const p=h.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function J1(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&jc("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function $1(s,t,i,r){const l={},c=new WeakMap;function f(y){const v=y.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",f),delete l[v.id];const x=c.get(v);x&&(t.remove(x),c.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(y,v){return l[v.id]===!0||(v.addEventListener("dispose",f),l[v.id]=!0,i.memory.geometries++),v}function p(y){const v=y.attributes;for(const x in v)t.update(v[x],s.ARRAY_BUFFER)}function m(y){const v=[],x=y.index,b=y.attributes.position;let T=0;if(x!==null){const O=x.array;T=x.version;for(let L=0,D=O.length;L<D;L+=3){const B=O[L+0],V=O[L+1],F=O[L+2];v.push(B,V,V,F,F,B)}}else if(b!==void 0){const O=b.array;T=b.version;for(let L=0,D=O.length/3-1;L<D;L+=3){const B=L+0,V=L+1,F=L+2;v.push(B,V,V,F,F,B)}}else return;const S=new(bv(v)?Uv:Dv)(v,1);S.version=T;const _=c.get(y);_&&t.remove(_),c.set(y,S)}function g(y){const v=c.get(y);if(v){const x=y.index;x!==null&&v.version<x.version&&m(y)}else m(y);return c.get(y)}return{get:h,update:p,getWireframeAttribute:g}}function tA(s,t,i){let r;function l(v){r=v}let c,f;function h(v){c=v.type,f=v.bytesPerElement}function p(v,x){s.drawElements(r,x,c,v*f),i.update(x,r,1)}function m(v,x,b){b!==0&&(s.drawElementsInstanced(r,x,c,v*f,b),i.update(x,r,b))}function g(v,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,c,v,0,b);let S=0;for(let _=0;_<b;_++)S+=x[_];i.update(S,r,1)}function y(v,x,b,T){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)m(v[_]/f,x[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,c,v,0,T,0,b);let _=0;for(let O=0;O<b;O++)_+=x[O]*T[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=y}function eA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function nA(s,t,i){const r=new WeakMap,l=new on;function c(f,h,p){const m=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let v=r.get(h);if(v===void 0||v.count!==y){let R=function(){q.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var x=R;v!==void 0&&v.texture.dispose();const b=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let D=0;b===!0&&(D=1),T===!0&&(D=2),S===!0&&(D=3);let B=h.attributes.position.count*D,V=1;B>t.maxTextureSize&&(V=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const F=new Float32Array(B*V*4*y),q=new Tv(F,B,V,y);q.type=Vi,q.needsUpdate=!0;const N=D*4;for(let G=0;G<y;G++){const pt=_[G],ht=O[G],At=L[G],yt=B*V*4*G;for(let I=0;I<pt.count;I++){const Q=I*N;b===!0&&(l.fromBufferAttribute(pt,I),F[yt+Q+0]=l.x,F[yt+Q+1]=l.y,F[yt+Q+2]=l.z,F[yt+Q+3]=0),T===!0&&(l.fromBufferAttribute(ht,I),F[yt+Q+4]=l.x,F[yt+Q+5]=l.y,F[yt+Q+6]=l.z,F[yt+Q+7]=0),S===!0&&(l.fromBufferAttribute(At,I),F[yt+Q+8]=l.x,F[yt+Q+9]=l.y,F[yt+Q+10]=l.z,F[yt+Q+11]=At.itemSize===4?l.w:1)}}v={count:y,texture:q,size:new me(B,V)},r.set(h,v),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<m.length;S++)b+=m[S];const T=h.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function iA(s,t,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,y=t.get(p,g);if(l.get(y)!==m&&(t.update(y),l.set(y,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const v=p.skeleton;l.get(v)!==m&&(v.update(),l.set(v,m))}return y}function f(){l=new WeakMap}function h(p){const m=p.target;m.removeEventListener("dispose",h),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const Fv=new Fn,D0=new Ov(1,1),Hv=new Tv,Gv=new wE,Vv=new Pv,U0=[],L0=[],N0=new Float32Array(16),P0=new Float32Array(9),O0=new Float32Array(4);function Vs(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let c=U0[l];if(c===void 0&&(c=new Float32Array(l),U0[l]=c),t!==0){r.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=i,s[f].toArray(c,h)}return c}function vn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function yn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ru(s,t){let i=L0[t];i===void 0&&(i=new Int32Array(t),L0[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function aA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function rA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2fv(this.addr,t),yn(i,t)}}function sA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(vn(i,t))return;s.uniform3fv(this.addr,t),yn(i,t)}}function oA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4fv(this.addr,t),yn(i,t)}}function lA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;O0.set(r),s.uniformMatrix2fv(this.addr,!1,O0),yn(i,r)}}function cA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;P0.set(r),s.uniformMatrix3fv(this.addr,!1,P0),yn(i,r)}}function uA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(vn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),yn(i,t)}else{if(vn(i,r))return;N0.set(r),s.uniformMatrix4fv(this.addr,!1,N0),yn(i,r)}}function fA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function hA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2iv(this.addr,t),yn(i,t)}}function dA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3iv(this.addr,t),yn(i,t)}}function pA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4iv(this.addr,t),yn(i,t)}}function mA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function gA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(vn(i,t))return;s.uniform2uiv(this.addr,t),yn(i,t)}}function _A(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(vn(i,t))return;s.uniform3uiv(this.addr,t),yn(i,t)}}function vA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(vn(i,t))return;s.uniform4uiv(this.addr,t),yn(i,t)}}function yA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(D0.compareFunction=Ev,c=D0):c=Fv,i.setTexture2D(t||c,l)}function xA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Gv,l)}function SA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Vv,l)}function MA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Hv,l)}function EA(s){switch(s){case 5126:return aA;case 35664:return rA;case 35665:return sA;case 35666:return oA;case 35674:return lA;case 35675:return cA;case 35676:return uA;case 5124:case 35670:return fA;case 35667:case 35671:return hA;case 35668:case 35672:return dA;case 35669:case 35673:return pA;case 5125:return mA;case 36294:return gA;case 36295:return _A;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return yA;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return MA}}function bA(s,t){s.uniform1fv(this.addr,t)}function TA(s,t){const i=Vs(t,this.size,2);s.uniform2fv(this.addr,i)}function AA(s,t){const i=Vs(t,this.size,3);s.uniform3fv(this.addr,i)}function RA(s,t){const i=Vs(t,this.size,4);s.uniform4fv(this.addr,i)}function CA(s,t){const i=Vs(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function wA(s,t){const i=Vs(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function DA(s,t){const i=Vs(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function UA(s,t){s.uniform1iv(this.addr,t)}function LA(s,t){s.uniform2iv(this.addr,t)}function NA(s,t){s.uniform3iv(this.addr,t)}function PA(s,t){s.uniform4iv(this.addr,t)}function OA(s,t){s.uniform1uiv(this.addr,t)}function zA(s,t){s.uniform2uiv(this.addr,t)}function IA(s,t){s.uniform3uiv(this.addr,t)}function BA(s,t){s.uniform4uiv(this.addr,t)}function FA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||Fv,c[f])}function HA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||Gv,c[f])}function GA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||Vv,c[f])}function VA(s,t,i){const r=this.cache,l=t.length,c=ru(i,l);vn(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||Hv,c[f])}function kA(s){switch(s){case 5126:return bA;case 35664:return TA;case 35665:return AA;case 35666:return RA;case 35674:return CA;case 35675:return wA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return LA;case 35668:case 35672:return NA;case 35669:case 35673:return PA;case 5125:return OA;case 36294:return zA;case 36295:return IA;case 36296:return BA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return HA;case 35680:case 36300:case 36308:case 36293:return GA;case 36289:case 36303:case 36311:case 36292:return VA}}class XA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=EA(i.type)}}class WA{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=kA(i.type)}}class qA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(t,i[h.id],r)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function z0(s,t){s.seq.push(t),s.map[t.id]=t}function YA(s,t,i){const r=s.name,l=r.length;for(Wh.lastIndex=0;;){const c=Wh.exec(r),f=Wh.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&f+2===l){z0(i,m===void 0?new XA(h,s,t):new WA(h,s,t));break}else{let y=i.map[h];y===void 0&&(y=new qA(h),z0(i,y)),i=y}}}class Zc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);YA(c,f,this)}}setValue(t,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function I0(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const jA=37297;let ZA=0;function KA(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===t?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const B0=new pe;function QA(s){Ne._getMatrix(B0,Ne.workingColorSpace,s);const t=`mat3( ${B0.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(s)){case Qc:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function F0(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+KA(s.getShaderSource(t),f)}else return l}function JA(s,t){const i=QA(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function $A(s,t){let i;switch(t){case tE:i="Linear";break;case eE:i="Reinhard";break;case nE:i="Cineon";break;case iE:i="ACESFilmic";break;case rE:i="AgX";break;case sE:i="Neutral";break;case aE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bc=new J;function tR(){Ne.getLuminanceCoefficients(Bc);const s=Bc.x.toFixed(4),t=Bc.y.toFixed(4),i=Bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function nR(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function iR(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(t,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(t,f),locationSize:h}}return i}function Yo(s){return s!==""}function H0(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function G0(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function zd(s){return s.replace(aR,sR)}const rR=new Map;function sR(s,t){let i=ge[t];if(i===void 0){const r=rR.get(t);if(r!==void 0)i=ge[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return zd(i)}const oR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function V0(s){return s.replace(oR,lR)}function lR(s,t,i,r){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function k0(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function cR(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===NM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pa&&(t="SHADOWMAP_TYPE_VSM"),t}function uR(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Is:case Bs:t="ENVMAP_TYPE_CUBE";break;case iu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fR(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Bs:t="ENVMAP_MODE_REFRACTION";break}return t}function hR(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case dv:t="ENVMAP_BLENDING_MULTIPLY";break;case JM:t="ENVMAP_BLENDING_MIX";break;case $M:t="ENVMAP_BLENDING_ADD";break}return t}function dR(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function pR(s,t,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const p=cR(i),m=uR(i),g=fR(i),y=hR(i),v=dR(i),x=eR(i),b=nR(c),T=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(S=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[k0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+y:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?ge.tonemapping_pars_fragment:"",i.toneMapping!==er?$A("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ge.colorspace_pars_fragment,JA("linearToOutputTexel",i.outputColorSpace),tR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Yo).join(`
`)),f=zd(f),f=H0(f,i),f=G0(f,i),h=zd(h),h=H0(h,i),h=G0(h,i),f=V0(f),h=V0(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===K_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===K_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=O+S+f,D=O+_+h,B=I0(l,l.VERTEX_SHADER,L),V=I0(l,l.FRAGMENT_SHADER,D);l.attachShader(T,B),l.attachShader(T,V),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function F(G){if(s.debug.checkShaderErrors){const pt=l.getProgramInfoLog(T).trim(),ht=l.getShaderInfoLog(B).trim(),At=l.getShaderInfoLog(V).trim();let yt=!0,I=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(yt=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,B,V);else{const Q=F0(l,B,"vertex"),j=F0(l,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+pt+`
`+Q+`
`+j)}else pt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",pt):(ht===""||At==="")&&(I=!1);I&&(G.diagnostics={runnable:yt,programLog:pt,vertexShader:{log:ht,prefix:S},fragmentShader:{log:At,prefix:_}})}l.deleteShader(B),l.deleteShader(V),q=new Zc(l,T),N=iR(l,T)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let N;this.getAttributes=function(){return N===void 0&&F(this),N};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(T,jA)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ZA++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=V,this}let mR=0;class gR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new _R(t),i.set(t,r)),r}}class _R{constructor(t){this.id=mR++,this.code=t,this.usedTimes=0}}function vR(s,t,i,r,l,c,f){const h=new Rv,p=new gR,m=new Set,g=[],y=l.logarithmicDepthBuffer,v=l.vertexTextures;let x=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function S(N,R,G,pt,ht){const At=pt.fog,yt=ht.geometry,I=N.isMeshStandardMaterial?pt.environment:null,Q=(N.isMeshStandardMaterial?i:t).get(N.envMap||I),j=Q&&Q.mapping===iu?Q.image.height:null,Nt=b[N.type];N.precision!==null&&(x=l.getMaxPrecision(N.precision),x!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const P=yt.morphAttributes.position||yt.morphAttributes.normal||yt.morphAttributes.color,at=P!==void 0?P.length:0;let Ct=0;yt.morphAttributes.position!==void 0&&(Ct=1),yt.morphAttributes.normal!==void 0&&(Ct=2),yt.morphAttributes.color!==void 0&&(Ct=3);let Lt,tt,Et,wt;if(Nt){const Ae=Hi[Nt];Lt=Ae.vertexShader,tt=Ae.fragmentShader}else Lt=N.vertexShader,tt=N.fragmentShader,p.update(N),Et=p.getVertexShaderID(N),wt=p.getFragmentShaderID(N);const Vt=s.getRenderTarget(),kt=s.state.buffers.depth.getReversed(),fe=ht.isInstancedMesh===!0,re=ht.isBatchedMesh===!0,Ie=!!N.map,mt=!!N.matcap,$=!!Q,U=!!N.aoMap,Dt=!!N.lightMap,Pt=!!N.bumpMap,zt=!!N.normalMap,xt=!!N.displacementMap,Ft=!!N.emissiveMap,Ut=!!N.metalnessMap,w=!!N.roughnessMap,E=N.anisotropy>0,H=N.clearcoat>0,nt=N.dispersion>0,dt=N.iridescence>0,rt=N.sheen>0,St=N.transmission>0,X=E&&!!N.anisotropyMap,ft=H&&!!N.clearcoatMap,gt=H&&!!N.clearcoatNormalMap,bt=H&&!!N.clearcoatRoughnessMap,Wt=dt&&!!N.iridescenceMap,$t=dt&&!!N.iridescenceThicknessMap,jt=rt&&!!N.sheenColorMap,Ht=rt&&!!N.sheenRoughnessMap,Jt=!!N.specularMap,Kt=!!N.specularColorMap,he=!!N.specularIntensityMap,W=St&&!!N.transmissionMap,Gt=St&&!!N.thicknessMap,st=!!N.gradientMap,_t=!!N.alphaMap,It=N.alphaTest>0,Bt=!!N.alphaHash,te=!!N.extensions;let ye=er;N.toneMapped&&(Vt===null||Vt.isXRRenderTarget===!0)&&(ye=s.toneMapping);const Be={shaderID:Nt,shaderType:N.type,shaderName:N.name,vertexShader:Lt,fragmentShader:tt,defines:N.defines,customVertexShaderID:Et,customFragmentShaderID:wt,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:re,batchingColor:re&&ht._colorsTexture!==null,instancing:fe,instancingColor:fe&&ht.instanceColor!==null,instancingMorph:fe&&ht.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Vt===null?s.outputColorSpace:Vt.isXRRenderTarget===!0?Vt.texture.colorSpace:Fs,alphaToCoverage:!!N.alphaToCoverage,map:Ie,matcap:mt,envMap:$,envMapMode:$&&Q.mapping,envMapCubeUVHeight:j,aoMap:U,lightMap:Dt,bumpMap:Pt,normalMap:zt,displacementMap:v&&xt,emissiveMap:Ft,normalMapObjectSpace:zt&&N.normalMapType===uE,normalMapTangentSpace:zt&&N.normalMapType===Mv,metalnessMap:Ut,roughnessMap:w,anisotropy:E,anisotropyMap:X,clearcoat:H,clearcoatMap:ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:bt,dispersion:nt,iridescence:dt,iridescenceMap:Wt,iridescenceThicknessMap:$t,sheen:rt,sheenColorMap:jt,sheenRoughnessMap:Ht,specularMap:Jt,specularColorMap:Kt,specularIntensityMap:he,transmission:St,transmissionMap:W,thicknessMap:Gt,gradientMap:st,opaque:N.transparent===!1&&N.blending===Ur&&N.alphaToCoverage===!1,alphaMap:_t,alphaTest:It,alphaHash:Bt,combine:N.combine,mapUv:Ie&&T(N.map.channel),aoMapUv:U&&T(N.aoMap.channel),lightMapUv:Dt&&T(N.lightMap.channel),bumpMapUv:Pt&&T(N.bumpMap.channel),normalMapUv:zt&&T(N.normalMap.channel),displacementMapUv:xt&&T(N.displacementMap.channel),emissiveMapUv:Ft&&T(N.emissiveMap.channel),metalnessMapUv:Ut&&T(N.metalnessMap.channel),roughnessMapUv:w&&T(N.roughnessMap.channel),anisotropyMapUv:X&&T(N.anisotropyMap.channel),clearcoatMapUv:ft&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:gt&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&T(N.sheenRoughnessMap.channel),specularMapUv:Jt&&T(N.specularMap.channel),specularColorMapUv:Kt&&T(N.specularColorMap.channel),specularIntensityMapUv:he&&T(N.specularIntensityMap.channel),transmissionMapUv:W&&T(N.transmissionMap.channel),thicknessMapUv:Gt&&T(N.thicknessMap.channel),alphaMapUv:_t&&T(N.alphaMap.channel),vertexTangents:!!yt.attributes.tangent&&(zt||E),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!yt.attributes.color&&yt.attributes.color.itemSize===4,pointsUvs:ht.isPoints===!0&&!!yt.attributes.uv&&(Ie||_t),fog:!!At,useFog:N.fog===!0,fogExp2:!!At&&At.isFogExp2,flatShading:N.flatShading===!0,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:y,reverseDepthBuffer:kt,skinning:ht.isSkinnedMesh===!0,morphTargets:yt.morphAttributes.position!==void 0,morphNormals:yt.morphAttributes.normal!==void 0,morphColors:yt.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:Ct,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:ye,decodeVideoTexture:Ie&&N.map.isVideoTexture===!0&&Ne.getTransfer(N.map.colorSpace)===Ve,decodeVideoTextureEmissive:Ft&&N.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(N.emissiveMap.colorSpace)===Ve,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===ma,flipSided:N.side===qn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:te&&N.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(te&&N.extensions.multiDraw===!0||re)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return Be.vertexUv1s=m.has(1),Be.vertexUv2s=m.has(2),Be.vertexUv3s=m.has(3),m.clear(),Be}function _(N){const R=[];if(N.shaderID?R.push(N.shaderID):(R.push(N.customVertexShaderID),R.push(N.customFragmentShaderID)),N.defines!==void 0)for(const G in N.defines)R.push(G),R.push(N.defines[G]);return N.isRawShaderMaterial===!1&&(O(R,N),L(R,N),R.push(s.outputColorSpace)),R.push(N.customProgramCacheKey),R.join()}function O(N,R){N.push(R.precision),N.push(R.outputColorSpace),N.push(R.envMapMode),N.push(R.envMapCubeUVHeight),N.push(R.mapUv),N.push(R.alphaMapUv),N.push(R.lightMapUv),N.push(R.aoMapUv),N.push(R.bumpMapUv),N.push(R.normalMapUv),N.push(R.displacementMapUv),N.push(R.emissiveMapUv),N.push(R.metalnessMapUv),N.push(R.roughnessMapUv),N.push(R.anisotropyMapUv),N.push(R.clearcoatMapUv),N.push(R.clearcoatNormalMapUv),N.push(R.clearcoatRoughnessMapUv),N.push(R.iridescenceMapUv),N.push(R.iridescenceThicknessMapUv),N.push(R.sheenColorMapUv),N.push(R.sheenRoughnessMapUv),N.push(R.specularMapUv),N.push(R.specularColorMapUv),N.push(R.specularIntensityMapUv),N.push(R.transmissionMapUv),N.push(R.thicknessMapUv),N.push(R.combine),N.push(R.fogExp2),N.push(R.sizeAttenuation),N.push(R.morphTargetsCount),N.push(R.morphAttributeCount),N.push(R.numDirLights),N.push(R.numPointLights),N.push(R.numSpotLights),N.push(R.numSpotLightMaps),N.push(R.numHemiLights),N.push(R.numRectAreaLights),N.push(R.numDirLightShadows),N.push(R.numPointLightShadows),N.push(R.numSpotLightShadows),N.push(R.numSpotLightShadowsWithMaps),N.push(R.numLightProbes),N.push(R.shadowMapType),N.push(R.toneMapping),N.push(R.numClippingPlanes),N.push(R.numClipIntersection),N.push(R.depthPacking)}function L(N,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),N.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),N.push(h.mask)}function D(N){const R=b[N.type];let G;if(R){const pt=Hi[R];G=VE.clone(pt.uniforms)}else G=N.uniforms;return G}function B(N,R){let G;for(let pt=0,ht=g.length;pt<ht;pt++){const At=g[pt];if(At.cacheKey===R){G=At,++G.usedTimes;break}}return G===void 0&&(G=new pR(s,R,N,c),g.push(G)),G}function V(N){if(--N.usedTimes===0){const R=g.indexOf(N);g[R]=g[g.length-1],g.pop(),N.destroy()}}function F(N){p.remove(N)}function q(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:D,acquireProgram:B,releaseProgram:V,releaseShaderCache:F,programs:g,dispose:q}}function yR(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,p){s.get(f)[h]=p}function c(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:c}}function xR(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function X0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function W0(){const s=[];let t=0;const i=[],r=[],l=[];function c(){t=0,i.length=0,r.length=0,l.length=0}function f(y,v,x,b,T,S){let _=s[t];return _===void 0?(_={id:y.id,object:y,geometry:v,material:x,groupOrder:b,renderOrder:y.renderOrder,z:T,group:S},s[t]=_):(_.id=y.id,_.object=y,_.geometry=v,_.material=x,_.groupOrder=b,_.renderOrder=y.renderOrder,_.z=T,_.group=S),t++,_}function h(y,v,x,b,T,S){const _=f(y,v,x,b,T,S);x.transmission>0?r.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(y,v,x,b,T,S){const _=f(y,v,x,b,T,S);x.transmission>0?r.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(y,v){i.length>1&&i.sort(y||xR),r.length>1&&r.sort(v||X0),l.length>1&&l.sort(v||X0)}function g(){for(let y=t,v=s.length;y<v;y++){const x=s[y];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:p,finish:g,sort:m}}function SR(){let s=new WeakMap;function t(r,l){const c=s.get(r);let f;return c===void 0?(f=new W0,s.set(r,[f])):l>=c.length?(f=new W0,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function MR(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new J,color:new Te};break;case"SpotLight":i={position:new J,direction:new J,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new J,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new J,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new J,halfWidth:new J,halfHeight:new J};break}return s[t.id]=i,i}}}function ER(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let bR=0;function TR(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function AR(s){const t=new MR,i=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const l=new J,c=new Ke,f=new Ke;function h(m){let g=0,y=0,v=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let x=0,b=0,T=0,S=0,_=0,O=0,L=0,D=0,B=0,V=0,F=0;m.sort(TR);for(let N=0,R=m.length;N<R;N++){const G=m[N],pt=G.color,ht=G.intensity,At=G.distance,yt=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)g+=pt.r*ht,y+=pt.g*ht,v+=pt.b*ht;else if(G.isLightProbe){for(let I=0;I<9;I++)r.probe[I].addScaledVector(G.sh.coefficients[I],ht);F++}else if(G.isDirectionalLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Q=G.shadow,j=i.get(G);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,r.directionalShadow[x]=j,r.directionalShadowMap[x]=yt,r.directionalShadowMatrix[x]=G.shadow.matrix,O++}r.directional[x]=I,x++}else if(G.isSpotLight){const I=t.get(G);I.position.setFromMatrixPosition(G.matrixWorld),I.color.copy(pt).multiplyScalar(ht),I.distance=At,I.coneCos=Math.cos(G.angle),I.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),I.decay=G.decay,r.spot[T]=I;const Q=G.shadow;if(G.map&&(r.spotLightMap[B]=G.map,B++,Q.updateMatrices(G),G.castShadow&&V++),r.spotLightMatrix[T]=Q.matrix,G.castShadow){const j=i.get(G);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,r.spotShadow[T]=j,r.spotShadowMap[T]=yt,D++}T++}else if(G.isRectAreaLight){const I=t.get(G);I.color.copy(pt).multiplyScalar(ht),I.halfWidth.set(G.width*.5,0,0),I.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=I,S++}else if(G.isPointLight){const I=t.get(G);if(I.color.copy(G.color).multiplyScalar(G.intensity),I.distance=G.distance,I.decay=G.decay,G.castShadow){const Q=G.shadow,j=i.get(G);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,r.pointShadow[b]=j,r.pointShadowMap[b]=yt,r.pointShadowMatrix[b]=G.shadow.matrix,L++}r.point[b]=I,b++}else if(G.isHemisphereLight){const I=t.get(G);I.skyColor.copy(G.color).multiplyScalar(ht),I.groundColor.copy(G.groundColor).multiplyScalar(ht),r.hemi[_]=I,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Yt.LTC_FLOAT_1,r.rectAreaLTC2=Yt.LTC_FLOAT_2):(r.rectAreaLTC1=Yt.LTC_HALF_1,r.rectAreaLTC2=Yt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=y,r.ambient[2]=v;const q=r.hash;(q.directionalLength!==x||q.pointLength!==b||q.spotLength!==T||q.rectAreaLength!==S||q.hemiLength!==_||q.numDirectionalShadows!==O||q.numPointShadows!==L||q.numSpotShadows!==D||q.numSpotMaps!==B||q.numLightProbes!==F)&&(r.directional.length=x,r.spot.length=T,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=D+B-V,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=V,r.numLightProbes=F,q.directionalLength=x,q.pointLength=b,q.spotLength=T,q.rectAreaLength=S,q.hemiLength=_,q.numDirectionalShadows=O,q.numPointShadows=L,q.numSpotShadows=D,q.numSpotMaps=B,q.numLightProbes=F,r.version=bR++)}function p(m,g){let y=0,v=0,x=0,b=0,T=0;const S=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const L=m[_];if(L.isDirectionalLight){const D=r.directional[y];D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),y++}else if(L.isSpotLight){const D=r.spot[x];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),D.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(S),x++}else if(L.isRectAreaLight){const D=r.rectArea[b];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),f.identity(),c.copy(L.matrixWorld),c.premultiply(S),f.extractRotation(c),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),b++}else if(L.isPointLight){const D=r.point[v];D.position.setFromMatrixPosition(L.matrixWorld),D.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const D=r.hemi[T];D.direction.setFromMatrixPosition(L.matrixWorld),D.direction.transformDirection(S),T++}}}return{setup:h,setupView:p,state:r}}function q0(s){const t=new AR(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:h,setupLightsView:p,pushLight:c,pushShadow:f}}function RR(s){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let h;return f===void 0?(h=new q0(s),t.set(l,[h])):c>=f.length?(h=new q0(s),f.push(h)):h=f[c],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const CR=`void main() {
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
}`;function DR(s,t,i){let r=new Jd;const l=new me,c=new me,f=new on,h=new $E({depthPacking:cE}),p=new tb,m={},g=i.maxTextureSize,y={[xa]:qn,[qn]:xa,[ma]:ma},v=new Sa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:CR,fragmentShader:wR}),x=v.clone();x.defines.HORIZONTAL_PASS=1;const b=new nr;b.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new vi(b,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hv;let _=this.type;this.render=function(V,F,q){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||V.length===0)return;const N=s.getRenderTarget(),R=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),pt=s.state;pt.setBlending(tr),pt.buffers.color.setClear(1,1,1,1),pt.buffers.depth.setTest(!0),pt.setScissorTest(!1);const ht=_!==pa&&this.type===pa,At=_===pa&&this.type!==pa;for(let yt=0,I=V.length;yt<I;yt++){const Q=V[yt],j=Q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const Nt=j.getFrameExtents();if(l.multiply(Nt),c.copy(j.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Nt.x),l.x=c.x*Nt.x,j.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Nt.y),l.y=c.y*Nt.y,j.mapSize.y=c.y)),j.map===null||ht===!0||At===!0){const at=this.type!==pa?{minFilter:ri,magFilter:ri}:{};j.map!==null&&j.map.dispose(),j.map=new Nr(l.x,l.y,at),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}s.setRenderTarget(j.map),s.clear();const P=j.getViewportCount();for(let at=0;at<P;at++){const Ct=j.getViewport(at);f.set(c.x*Ct.x,c.y*Ct.y,c.x*Ct.z,c.y*Ct.w),pt.viewport(f),j.updateMatrices(Q,at),r=j.getFrustum(),D(F,q,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===pa&&O(j,q),j.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(N,R,G)};function O(V,F){const q=t.update(T);v.defines.VSM_SAMPLES!==V.blurSamples&&(v.defines.VSM_SAMPLES=V.blurSamples,x.defines.VSM_SAMPLES=V.blurSamples,v.needsUpdate=!0,x.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Nr(l.x,l.y)),v.uniforms.shadow_pass.value=V.map.texture,v.uniforms.resolution.value=V.mapSize,v.uniforms.radius.value=V.radius,s.setRenderTarget(V.mapPass),s.clear(),s.renderBufferDirect(F,null,q,v,T,null),x.uniforms.shadow_pass.value=V.mapPass.texture,x.uniforms.resolution.value=V.mapSize,x.uniforms.radius.value=V.radius,s.setRenderTarget(V.map),s.clear(),s.renderBufferDirect(F,null,q,x,T,null)}function L(V,F,q,N){let R=null;const G=q.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(G!==void 0)R=G;else if(R=q.isPointLight===!0?p:h,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const pt=R.uuid,ht=F.uuid;let At=m[pt];At===void 0&&(At={},m[pt]=At);let yt=At[ht];yt===void 0&&(yt=R.clone(),At[ht]=yt,F.addEventListener("dispose",B)),R=yt}if(R.visible=F.visible,R.wireframe=F.wireframe,N===pa?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:y[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const pt=s.properties.get(R);pt.light=q}return R}function D(V,F,q,N,R){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&R===pa)&&(!V.frustumCulled||r.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,V.matrixWorld);const ht=t.update(V),At=V.material;if(Array.isArray(At)){const yt=ht.groups;for(let I=0,Q=yt.length;I<Q;I++){const j=yt[I],Nt=At[j.materialIndex];if(Nt&&Nt.visible){const P=L(V,Nt,N,R);V.onBeforeShadow(s,V,F,q,ht,P,j),s.renderBufferDirect(q,null,ht,P,V,j),V.onAfterShadow(s,V,F,q,ht,P,j)}}}else if(At.visible){const yt=L(V,At,N,R);V.onBeforeShadow(s,V,F,q,ht,yt,null),s.renderBufferDirect(q,null,ht,yt,V,null),V.onAfterShadow(s,V,F,q,ht,yt,null)}}const pt=V.children;for(let ht=0,At=pt.length;ht<At;ht++)D(pt[ht],F,q,N,R)}function B(V){V.target.removeEventListener("dispose",B);for(const q in m){const N=m[q],R=V.target.uuid;R in N&&(N[R].dispose(),delete N[R])}}}const UR={[Jh]:$h,[td]:id,[ed]:ad,[zs]:nd,[$h]:Jh,[id]:td,[ad]:ed,[nd]:zs};function LR(s,t){function i(){let W=!1;const Gt=new on;let st=null;const _t=new on(0,0,0,0);return{setMask:function(It){st!==It&&!W&&(s.colorMask(It,It,It,It),st=It)},setLocked:function(It){W=It},setClear:function(It,Bt,te,ye,Be){Be===!0&&(It*=ye,Bt*=ye,te*=ye),Gt.set(It,Bt,te,ye),_t.equals(Gt)===!1&&(s.clearColor(It,Bt,te,ye),_t.copy(Gt))},reset:function(){W=!1,st=null,_t.set(-1,0,0,0)}}}function r(){let W=!1,Gt=!1,st=null,_t=null,It=null;return{setReversed:function(Bt){if(Gt!==Bt){const te=t.get("EXT_clip_control");Bt?te.clipControlEXT(te.LOWER_LEFT_EXT,te.ZERO_TO_ONE_EXT):te.clipControlEXT(te.LOWER_LEFT_EXT,te.NEGATIVE_ONE_TO_ONE_EXT),Gt=Bt;const ye=It;It=null,this.setClear(ye)}},getReversed:function(){return Gt},setTest:function(Bt){Bt?Vt(s.DEPTH_TEST):kt(s.DEPTH_TEST)},setMask:function(Bt){st!==Bt&&!W&&(s.depthMask(Bt),st=Bt)},setFunc:function(Bt){if(Gt&&(Bt=UR[Bt]),_t!==Bt){switch(Bt){case Jh:s.depthFunc(s.NEVER);break;case $h:s.depthFunc(s.ALWAYS);break;case td:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case ed:s.depthFunc(s.EQUAL);break;case nd:s.depthFunc(s.GEQUAL);break;case id:s.depthFunc(s.GREATER);break;case ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}_t=Bt}},setLocked:function(Bt){W=Bt},setClear:function(Bt){It!==Bt&&(Gt&&(Bt=1-Bt),s.clearDepth(Bt),It=Bt)},reset:function(){W=!1,st=null,_t=null,It=null,Gt=!1}}}function l(){let W=!1,Gt=null,st=null,_t=null,It=null,Bt=null,te=null,ye=null,Be=null;return{setTest:function(Ae){W||(Ae?Vt(s.STENCIL_TEST):kt(s.STENCIL_TEST))},setMask:function(Ae){Gt!==Ae&&!W&&(s.stencilMask(Ae),Gt=Ae)},setFunc:function(Ae,dn,en){(st!==Ae||_t!==dn||It!==en)&&(s.stencilFunc(Ae,dn,en),st=Ae,_t=dn,It=en)},setOp:function(Ae,dn,en){(Bt!==Ae||te!==dn||ye!==en)&&(s.stencilOp(Ae,dn,en),Bt=Ae,te=dn,ye=en)},setLocked:function(Ae){W=Ae},setClear:function(Ae){Be!==Ae&&(s.clearStencil(Ae),Be=Ae)},reset:function(){W=!1,Gt=null,st=null,_t=null,It=null,Bt=null,te=null,ye=null,Be=null}}}const c=new i,f=new r,h=new l,p=new WeakMap,m=new WeakMap;let g={},y={},v=new WeakMap,x=[],b=null,T=!1,S=null,_=null,O=null,L=null,D=null,B=null,V=null,F=new Te(0,0,0),q=0,N=!1,R=null,G=null,pt=null,ht=null,At=null;const yt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,Q=0;const j=s.getParameter(s.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),I=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),I=Q>=2);let Nt=null,P={};const at=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Lt=new on().fromArray(at),tt=new on().fromArray(Ct);function Et(W,Gt,st,_t){const It=new Uint8Array(4),Bt=s.createTexture();s.bindTexture(W,Bt),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let te=0;te<st;te++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Gt,0,s.RGBA,1,1,_t,0,s.RGBA,s.UNSIGNED_BYTE,It):s.texImage2D(Gt+te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,It);return Bt}const wt={};wt[s.TEXTURE_2D]=Et(s.TEXTURE_2D,s.TEXTURE_2D,1),wt[s.TEXTURE_CUBE_MAP]=Et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[s.TEXTURE_2D_ARRAY]=Et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),wt[s.TEXTURE_3D]=Et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),Vt(s.DEPTH_TEST),f.setFunc(zs),Pt(!1),zt(X_),Vt(s.CULL_FACE),U(tr);function Vt(W){g[W]!==!0&&(s.enable(W),g[W]=!0)}function kt(W){g[W]!==!1&&(s.disable(W),g[W]=!1)}function fe(W,Gt){return y[W]!==Gt?(s.bindFramebuffer(W,Gt),y[W]=Gt,W===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=Gt),W===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=Gt),!0):!1}function re(W,Gt){let st=x,_t=!1;if(W){st=v.get(Gt),st===void 0&&(st=[],v.set(Gt,st));const It=W.textures;if(st.length!==It.length||st[0]!==s.COLOR_ATTACHMENT0){for(let Bt=0,te=It.length;Bt<te;Bt++)st[Bt]=s.COLOR_ATTACHMENT0+Bt;st.length=It.length,_t=!0}}else st[0]!==s.BACK&&(st[0]=s.BACK,_t=!0);_t&&s.drawBuffers(st)}function Ie(W){return b!==W?(s.useProgram(W),b=W,!0):!1}const mt={[Rr]:s.FUNC_ADD,[OM]:s.FUNC_SUBTRACT,[zM]:s.FUNC_REVERSE_SUBTRACT};mt[IM]=s.MIN,mt[BM]=s.MAX;const $={[FM]:s.ZERO,[HM]:s.ONE,[GM]:s.SRC_COLOR,[Kh]:s.SRC_ALPHA,[YM]:s.SRC_ALPHA_SATURATE,[WM]:s.DST_COLOR,[kM]:s.DST_ALPHA,[VM]:s.ONE_MINUS_SRC_COLOR,[Qh]:s.ONE_MINUS_SRC_ALPHA,[qM]:s.ONE_MINUS_DST_COLOR,[XM]:s.ONE_MINUS_DST_ALPHA,[jM]:s.CONSTANT_COLOR,[ZM]:s.ONE_MINUS_CONSTANT_COLOR,[KM]:s.CONSTANT_ALPHA,[QM]:s.ONE_MINUS_CONSTANT_ALPHA};function U(W,Gt,st,_t,It,Bt,te,ye,Be,Ae){if(W===tr){T===!0&&(kt(s.BLEND),T=!1);return}if(T===!1&&(Vt(s.BLEND),T=!0),W!==PM){if(W!==S||Ae!==N){if((_!==Rr||D!==Rr)&&(s.blendEquation(s.FUNC_ADD),_=Rr,D=Rr),Ae)switch(W){case Ur:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.ONE,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Ur:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case W_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case q_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Y_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}O=null,L=null,B=null,V=null,F.set(0,0,0),q=0,S=W,N=Ae}return}It=It||Gt,Bt=Bt||st,te=te||_t,(Gt!==_||It!==D)&&(s.blendEquationSeparate(mt[Gt],mt[It]),_=Gt,D=It),(st!==O||_t!==L||Bt!==B||te!==V)&&(s.blendFuncSeparate($[st],$[_t],$[Bt],$[te]),O=st,L=_t,B=Bt,V=te),(ye.equals(F)===!1||Be!==q)&&(s.blendColor(ye.r,ye.g,ye.b,Be),F.copy(ye),q=Be),S=W,N=!1}function Dt(W,Gt){W.side===ma?kt(s.CULL_FACE):Vt(s.CULL_FACE);let st=W.side===qn;Gt&&(st=!st),Pt(st),W.blending===Ur&&W.transparent===!1?U(tr):U(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const _t=W.stencilWrite;h.setTest(_t),_t&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ft(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Vt(s.SAMPLE_ALPHA_TO_COVERAGE):kt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Pt(W){R!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),R=W)}function zt(W){W!==UM?(Vt(s.CULL_FACE),W!==G&&(W===X_?s.cullFace(s.BACK):W===LM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):kt(s.CULL_FACE),G=W}function xt(W){W!==pt&&(I&&s.lineWidth(W),pt=W)}function Ft(W,Gt,st){W?(Vt(s.POLYGON_OFFSET_FILL),(ht!==Gt||At!==st)&&(s.polygonOffset(Gt,st),ht=Gt,At=st)):kt(s.POLYGON_OFFSET_FILL)}function Ut(W){W?Vt(s.SCISSOR_TEST):kt(s.SCISSOR_TEST)}function w(W){W===void 0&&(W=s.TEXTURE0+yt-1),Nt!==W&&(s.activeTexture(W),Nt=W)}function E(W,Gt,st){st===void 0&&(Nt===null?st=s.TEXTURE0+yt-1:st=Nt);let _t=P[st];_t===void 0&&(_t={type:void 0,texture:void 0},P[st]=_t),(_t.type!==W||_t.texture!==Gt)&&(Nt!==st&&(s.activeTexture(st),Nt=st),s.bindTexture(W,Gt||wt[W]),_t.type=W,_t.texture=Gt)}function H(){const W=P[Nt];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function nt(){try{s.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{s.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function rt(){try{s.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{s.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function X(){try{s.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ft(){try{s.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{s.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function bt(){try{s.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{s.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $t(){try{s.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function jt(W){Lt.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Lt.copy(W))}function Ht(W){tt.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),tt.copy(W))}function Jt(W,Gt){let st=m.get(Gt);st===void 0&&(st=new WeakMap,m.set(Gt,st));let _t=st.get(W);_t===void 0&&(_t=s.getUniformBlockIndex(Gt,W.name),st.set(W,_t))}function Kt(W,Gt){const _t=m.get(Gt).get(W);p.get(Gt)!==_t&&(s.uniformBlockBinding(Gt,_t,W.__bindingPointIndex),p.set(Gt,_t))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Nt=null,P={},y={},v=new WeakMap,x=[],b=null,T=!1,S=null,_=null,O=null,L=null,D=null,B=null,V=null,F=new Te(0,0,0),q=0,N=!1,R=null,G=null,pt=null,ht=null,At=null,Lt.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:Vt,disable:kt,bindFramebuffer:fe,drawBuffers:re,useProgram:Ie,setBlending:U,setMaterial:Dt,setFlipSided:Pt,setCullFace:zt,setLineWidth:xt,setPolygonOffset:Ft,setScissorTest:Ut,activeTexture:w,bindTexture:E,unbindTexture:H,compressedTexImage2D:nt,compressedTexImage3D:dt,texImage2D:Wt,texImage3D:$t,updateUBOMapping:Jt,uniformBlockBinding:Kt,texStorage2D:gt,texStorage3D:bt,texSubImage2D:rt,texSubImage3D:St,compressedTexSubImage2D:X,compressedTexSubImage3D:ft,scissor:jt,viewport:Ht,reset:he}}function NR(s,t,i,r,l,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new me,g=new WeakMap;let y;const v=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,E){return x?new OffscreenCanvas(w,E):$c("canvas")}function T(w,E,H){let nt=1;const dt=Ut(w);if((dt.width>H||dt.height>H)&&(nt=H/Math.max(dt.width,dt.height)),nt<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const rt=Math.floor(nt*dt.width),St=Math.floor(nt*dt.height);y===void 0&&(y=b(rt,St));const X=E?b(rt,St):y;return X.width=rt,X.height=St,X.getContext("2d").drawImage(w,0,0,rt,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+dt.width+"x"+dt.height+") to ("+rt+"x"+St+")."),X}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+dt.width+"x"+dt.height+")."),w;return w}function S(w){return w.generateMipmaps}function _(w){s.generateMipmap(w)}function O(w){return w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?s.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(w,E,H,nt,dt=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let rt=E;if(E===s.RED&&(H===s.FLOAT&&(rt=s.R32F),H===s.HALF_FLOAT&&(rt=s.R16F),H===s.UNSIGNED_BYTE&&(rt=s.R8)),E===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(rt=s.R8UI),H===s.UNSIGNED_SHORT&&(rt=s.R16UI),H===s.UNSIGNED_INT&&(rt=s.R32UI),H===s.BYTE&&(rt=s.R8I),H===s.SHORT&&(rt=s.R16I),H===s.INT&&(rt=s.R32I)),E===s.RG&&(H===s.FLOAT&&(rt=s.RG32F),H===s.HALF_FLOAT&&(rt=s.RG16F),H===s.UNSIGNED_BYTE&&(rt=s.RG8)),E===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(rt=s.RG8UI),H===s.UNSIGNED_SHORT&&(rt=s.RG16UI),H===s.UNSIGNED_INT&&(rt=s.RG32UI),H===s.BYTE&&(rt=s.RG8I),H===s.SHORT&&(rt=s.RG16I),H===s.INT&&(rt=s.RG32I)),E===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(rt=s.RGB8UI),H===s.UNSIGNED_SHORT&&(rt=s.RGB16UI),H===s.UNSIGNED_INT&&(rt=s.RGB32UI),H===s.BYTE&&(rt=s.RGB8I),H===s.SHORT&&(rt=s.RGB16I),H===s.INT&&(rt=s.RGB32I)),E===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(rt=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(rt=s.RGBA16UI),H===s.UNSIGNED_INT&&(rt=s.RGBA32UI),H===s.BYTE&&(rt=s.RGBA8I),H===s.SHORT&&(rt=s.RGBA16I),H===s.INT&&(rt=s.RGBA32I)),E===s.RGB&&H===s.UNSIGNED_INT_5_9_9_9_REV&&(rt=s.RGB9_E5),E===s.RGBA){const St=dt?Qc:Ne.getTransfer(nt);H===s.FLOAT&&(rt=s.RGBA32F),H===s.HALF_FLOAT&&(rt=s.RGBA16F),H===s.UNSIGNED_BYTE&&(rt=St===Ve?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(rt=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(rt=s.RGB5_A1)}return(rt===s.R16F||rt===s.R32F||rt===s.RG16F||rt===s.RG32F||rt===s.RGBA16F||rt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function D(w,E){let H;return w?E===null||E===Lr||E===Jo?H=s.DEPTH24_STENCIL8:E===Vi?H=s.DEPTH32F_STENCIL8:E===Qo&&(H=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Lr||E===Jo?H=s.DEPTH_COMPONENT24:E===Vi?H=s.DEPTH_COMPONENT32F:E===Qo&&(H=s.DEPTH_COMPONENT16),H}function B(w,E){return S(w)===!0||w.isFramebufferTexture&&w.minFilter!==ri&&w.minFilter!==Gi?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function V(w){const E=w.target;E.removeEventListener("dispose",V),q(E),E.isVideoTexture&&g.delete(E)}function F(w){const E=w.target;E.removeEventListener("dispose",F),R(E)}function q(w){const E=r.get(w);if(E.__webglInit===void 0)return;const H=w.source,nt=v.get(H);if(nt){const dt=nt[E.__cacheKey];dt.usedTimes--,dt.usedTimes===0&&N(w),Object.keys(nt).length===0&&v.delete(H)}r.remove(w)}function N(w){const E=r.get(w);s.deleteTexture(E.__webglTexture);const H=w.source,nt=v.get(H);delete nt[E.__cacheKey],f.memory.textures--}function R(w){const E=r.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),r.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(E.__webglFramebuffer[nt]))for(let dt=0;dt<E.__webglFramebuffer[nt].length;dt++)s.deleteFramebuffer(E.__webglFramebuffer[nt][dt]);else s.deleteFramebuffer(E.__webglFramebuffer[nt]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[nt])}else{if(Array.isArray(E.__webglFramebuffer))for(let nt=0;nt<E.__webglFramebuffer.length;nt++)s.deleteFramebuffer(E.__webglFramebuffer[nt]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let nt=0;nt<E.__webglColorRenderbuffer.length;nt++)E.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[nt]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=w.textures;for(let nt=0,dt=H.length;nt<dt;nt++){const rt=r.get(H[nt]);rt.__webglTexture&&(s.deleteTexture(rt.__webglTexture),f.memory.textures--),r.remove(H[nt])}r.remove(w)}let G=0;function pt(){G=0}function ht(){const w=G;return w>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l.maxTextures),G+=1,w}function At(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function yt(w,E){const H=r.get(w);if(w.isVideoTexture&&xt(w),w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){const nt=w.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(H,w,E);return}}i.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+E)}function I(w,E){const H=r.get(w);if(w.version>0&&H.__version!==w.version){tt(H,w,E);return}i.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+E)}function Q(w,E){const H=r.get(w);if(w.version>0&&H.__version!==w.version){tt(H,w,E);return}i.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+E)}function j(w,E){const H=r.get(w);if(w.version>0&&H.__version!==w.version){Et(H,w,E);return}i.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+E)}const Nt={[od]:s.REPEAT,[wr]:s.CLAMP_TO_EDGE,[ld]:s.MIRRORED_REPEAT},P={[ri]:s.NEAREST,[oE]:s.NEAREST_MIPMAP_NEAREST,[gc]:s.NEAREST_MIPMAP_LINEAR,[Gi]:s.LINEAR,[gh]:s.LINEAR_MIPMAP_NEAREST,[Dr]:s.LINEAR_MIPMAP_LINEAR},at={[fE]:s.NEVER,[_E]:s.ALWAYS,[hE]:s.LESS,[Ev]:s.LEQUAL,[dE]:s.EQUAL,[gE]:s.GEQUAL,[pE]:s.GREATER,[mE]:s.NOTEQUAL};function Ct(w,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Gi||E.magFilter===gh||E.magFilter===gc||E.magFilter===Dr||E.minFilter===Gi||E.minFilter===gh||E.minFilter===gc||E.minFilter===Dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,Nt[E.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,Nt[E.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,Nt[E.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,P[E.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,P[E.minFilter]),E.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,at[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ri||E.minFilter!==gc&&E.minFilter!==Dr||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");s.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Lt(w,E){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",V));const nt=E.source;let dt=v.get(nt);dt===void 0&&(dt={},v.set(nt,dt));const rt=At(E);if(rt!==w.__cacheKey){dt[rt]===void 0&&(dt[rt]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,H=!0),dt[rt].usedTimes++;const St=dt[w.__cacheKey];St!==void 0&&(dt[w.__cacheKey].usedTimes--,St.usedTimes===0&&N(E)),w.__cacheKey=rt,w.__webglTexture=dt[rt].texture}return H}function tt(w,E,H){let nt=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(nt=s.TEXTURE_3D);const dt=Lt(w,E),rt=E.source;i.bindTexture(nt,w.__webglTexture,s.TEXTURE0+H);const St=r.get(rt);if(rt.version!==St.__version||dt===!0){i.activeTexture(s.TEXTURE0+H);const X=Ne.getPrimaries(Ne.workingColorSpace),ft=E.colorSpace===$a?null:Ne.getPrimaries(E.colorSpace),gt=E.colorSpace===$a||X===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let bt=T(E.image,!1,l.maxTextureSize);bt=Ft(E,bt);const Wt=c.convert(E.format,E.colorSpace),$t=c.convert(E.type);let jt=L(E.internalFormat,Wt,$t,E.colorSpace,E.isVideoTexture);Ct(nt,E);let Ht;const Jt=E.mipmaps,Kt=E.isVideoTexture!==!0,he=St.__version===void 0||dt===!0,W=rt.dataReady,Gt=B(E,bt);if(E.isDepthTexture)jt=D(E.format===tl,E.type),he&&(Kt?i.texStorage2D(s.TEXTURE_2D,1,jt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,jt,bt.width,bt.height,0,Wt,$t,null));else if(E.isDataTexture)if(Jt.length>0){Kt&&he&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,Jt[0].width,Jt[0].height);for(let st=0,_t=Jt.length;st<_t;st++)Ht=Jt[st],Kt?W&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,Wt,$t,Ht.data):i.texImage2D(s.TEXTURE_2D,st,jt,Ht.width,Ht.height,0,Wt,$t,Ht.data);E.generateMipmaps=!1}else Kt?(he&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,bt.width,bt.height),W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,Wt,$t,bt.data)):i.texImage2D(s.TEXTURE_2D,0,jt,bt.width,bt.height,0,Wt,$t,bt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&he&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,jt,Jt[0].width,Jt[0].height,bt.depth);for(let st=0,_t=Jt.length;st<_t;st++)if(Ht=Jt[st],E.format!==Di)if(Wt!==null)if(Kt){if(W)if(E.layerUpdates.size>0){const It=M0(Ht.width,Ht.height,E.format,E.type);for(const Bt of E.layerUpdates){const te=Ht.data.subarray(Bt*It/Ht.data.BYTES_PER_ELEMENT,(Bt+1)*It/Ht.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,Bt,Ht.width,Ht.height,1,Wt,te)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ht.width,Ht.height,bt.depth,Wt,Ht.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,st,jt,Ht.width,Ht.height,bt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?W&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,st,0,0,0,Ht.width,Ht.height,bt.depth,Wt,$t,Ht.data):i.texImage3D(s.TEXTURE_2D_ARRAY,st,jt,Ht.width,Ht.height,bt.depth,0,Wt,$t,Ht.data)}else{Kt&&he&&i.texStorage2D(s.TEXTURE_2D,Gt,jt,Jt[0].width,Jt[0].height);for(let st=0,_t=Jt.length;st<_t;st++)Ht=Jt[st],E.format!==Di?Wt!==null?Kt?W&&i.compressedTexSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,Wt,Ht.data):i.compressedTexImage2D(s.TEXTURE_2D,st,jt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?W&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Ht.width,Ht.height,Wt,$t,Ht.data):i.texImage2D(s.TEXTURE_2D,st,jt,Ht.width,Ht.height,0,Wt,$t,Ht.data)}else if(E.isDataArrayTexture)if(Kt){if(he&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Gt,jt,bt.width,bt.height,bt.depth),W)if(E.layerUpdates.size>0){const st=M0(bt.width,bt.height,E.format,E.type);for(const _t of E.layerUpdates){const It=bt.data.subarray(_t*st/bt.data.BYTES_PER_ELEMENT,(_t+1)*st/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_t,bt.width,bt.height,1,Wt,$t,It)}E.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Wt,$t,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,jt,bt.width,bt.height,bt.depth,0,Wt,$t,bt.data);else if(E.isData3DTexture)Kt?(he&&i.texStorage3D(s.TEXTURE_3D,Gt,jt,bt.width,bt.height,bt.depth),W&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Wt,$t,bt.data)):i.texImage3D(s.TEXTURE_3D,0,jt,bt.width,bt.height,bt.depth,0,Wt,$t,bt.data);else if(E.isFramebufferTexture){if(he)if(Kt)i.texStorage2D(s.TEXTURE_2D,Gt,jt,bt.width,bt.height);else{let st=bt.width,_t=bt.height;for(let It=0;It<Gt;It++)i.texImage2D(s.TEXTURE_2D,It,jt,st,_t,0,Wt,$t,null),st>>=1,_t>>=1}}else if(Jt.length>0){if(Kt&&he){const st=Ut(Jt[0]);i.texStorage2D(s.TEXTURE_2D,Gt,jt,st.width,st.height)}for(let st=0,_t=Jt.length;st<_t;st++)Ht=Jt[st],Kt?W&&i.texSubImage2D(s.TEXTURE_2D,st,0,0,Wt,$t,Ht):i.texImage2D(s.TEXTURE_2D,st,jt,Wt,$t,Ht);E.generateMipmaps=!1}else if(Kt){if(he){const st=Ut(bt);i.texStorage2D(s.TEXTURE_2D,Gt,jt,st.width,st.height)}W&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Wt,$t,bt)}else i.texImage2D(s.TEXTURE_2D,0,jt,Wt,$t,bt);S(E)&&_(nt),St.__version=rt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function Et(w,E,H){if(E.image.length!==6)return;const nt=Lt(w,E),dt=E.source;i.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+H);const rt=r.get(dt);if(dt.version!==rt.__version||nt===!0){i.activeTexture(s.TEXTURE0+H);const St=Ne.getPrimaries(Ne.workingColorSpace),X=E.colorSpace===$a?null:Ne.getPrimaries(E.colorSpace),ft=E.colorSpace===$a||St===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const gt=E.isCompressedTexture||E.image[0].isCompressedTexture,bt=E.image[0]&&E.image[0].isDataTexture,Wt=[];for(let _t=0;_t<6;_t++)!gt&&!bt?Wt[_t]=T(E.image[_t],!0,l.maxCubemapSize):Wt[_t]=bt?E.image[_t].image:E.image[_t],Wt[_t]=Ft(E,Wt[_t]);const $t=Wt[0],jt=c.convert(E.format,E.colorSpace),Ht=c.convert(E.type),Jt=L(E.internalFormat,jt,Ht,E.colorSpace),Kt=E.isVideoTexture!==!0,he=rt.__version===void 0||nt===!0,W=dt.dataReady;let Gt=B(E,$t);Ct(s.TEXTURE_CUBE_MAP,E);let st;if(gt){Kt&&he&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Jt,$t.width,$t.height);for(let _t=0;_t<6;_t++){st=Wt[_t].mipmaps;for(let It=0;It<st.length;It++){const Bt=st[It];E.format!==Di?jt!==null?Kt?W&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,Bt.width,Bt.height,jt,Bt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,Jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,0,0,Bt.width,Bt.height,jt,Ht,Bt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It,Jt,Bt.width,Bt.height,0,jt,Ht,Bt.data)}}}else{if(st=E.mipmaps,Kt&&he){st.length>0&&Gt++;const _t=Ut(Wt[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Gt,Jt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(bt){Kt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Wt[_t].width,Wt[_t].height,jt,Ht,Wt[_t].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,Wt[_t].width,Wt[_t].height,0,jt,Ht,Wt[_t].data);for(let It=0;It<st.length;It++){const te=st[It].image[_t].image;Kt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,te.width,te.height,jt,Ht,te.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,Jt,te.width,te.height,0,jt,Ht,te.data)}}else{Kt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,jt,Ht,Wt[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Jt,jt,Ht,Wt[_t]);for(let It=0;It<st.length;It++){const Bt=st[It];Kt?W&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,0,0,jt,Ht,Bt.image[_t]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,It+1,Jt,jt,Ht,Bt.image[_t])}}}S(E)&&_(s.TEXTURE_CUBE_MAP),rt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function wt(w,E,H,nt,dt,rt){const St=c.convert(H.format,H.colorSpace),X=c.convert(H.type),ft=L(H.internalFormat,St,X,H.colorSpace),gt=r.get(E),bt=r.get(H);if(bt.__renderTarget=E,!gt.__hasExternalTextures){const Wt=Math.max(1,E.width>>rt),$t=Math.max(1,E.height>>rt);dt===s.TEXTURE_3D||dt===s.TEXTURE_2D_ARRAY?i.texImage3D(dt,rt,ft,Wt,$t,E.depth,0,St,X,null):i.texImage2D(dt,rt,ft,Wt,$t,0,St,X,null)}i.bindFramebuffer(s.FRAMEBUFFER,w),zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,dt,bt.__webglTexture,0,Pt(E)):(dt===s.TEXTURE_2D||dt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&dt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,dt,bt.__webglTexture,rt),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Vt(w,E,H){if(s.bindRenderbuffer(s.RENDERBUFFER,w),E.depthBuffer){const nt=E.depthTexture,dt=nt&&nt.isDepthTexture?nt.type:null,rt=D(E.stencilBuffer,dt),St=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=Pt(E);zt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,rt,E.width,E.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,X,rt,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,rt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,St,s.RENDERBUFFER,w)}else{const nt=E.textures;for(let dt=0;dt<nt.length;dt++){const rt=nt[dt],St=c.convert(rt.format,rt.colorSpace),X=c.convert(rt.type),ft=L(rt.internalFormat,St,X,rt.colorSpace),gt=Pt(E);H&&zt(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt,ft,E.width,E.height):zt(E)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt,ft,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ft,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function kt(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=r.get(E.depthTexture);nt.__renderTarget=E,(!nt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),yt(E.depthTexture,0);const dt=nt.__webglTexture,rt=Pt(E);if(E.depthTexture.format===$o)zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,dt,0);else if(E.depthTexture.format===tl)zt(E)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0,rt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function fe(w){const E=r.get(w),H=w.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==w.depthTexture){const nt=w.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),nt){const dt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,nt.removeEventListener("dispose",dt)};nt.addEventListener("dispose",dt),E.__depthDisposeCallback=dt}E.__boundDepthTexture=nt}if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const nt=w.texture.mipmaps;nt&&nt.length>0?kt(E.__webglFramebuffer[0],w):kt(E.__webglFramebuffer,w)}else if(H){E.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[nt]),E.__webglDepthbuffer[nt]===void 0)E.__webglDepthbuffer[nt]=s.createRenderbuffer(),Vt(E.__webglDepthbuffer[nt],w,!1);else{const dt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,rt)}}else{const nt=w.texture.mipmaps;if(nt&&nt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Vt(E.__webglDepthbuffer,w,!1);else{const dt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,dt,s.RENDERBUFFER,rt)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function re(w,E,H){const nt=r.get(w);E!==void 0&&wt(nt.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&fe(w)}function Ie(w){const E=w.texture,H=r.get(w),nt=r.get(E);w.addEventListener("dispose",F);const dt=w.textures,rt=w.isWebGLCubeRenderTarget===!0,St=dt.length>1;if(St||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=E.version,f.memory.textures++),rt){H.__webglFramebuffer=[];for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[X]=[];for(let ft=0;ft<E.mipmaps.length;ft++)H.__webglFramebuffer[X][ft]=s.createFramebuffer()}else H.__webglFramebuffer[X]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let X=0;X<E.mipmaps.length;X++)H.__webglFramebuffer[X]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(St)for(let X=0,ft=dt.length;X<ft;X++){const gt=r.get(dt[X]);gt.__webglTexture===void 0&&(gt.__webglTexture=s.createTexture(),f.memory.textures++)}if(w.samples>0&&zt(w)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let X=0;X<dt.length;X++){const ft=dt[X];H.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[X]);const gt=c.convert(ft.format,ft.colorSpace),bt=c.convert(ft.type),Wt=L(ft.internalFormat,gt,bt,ft.colorSpace,w.isXRRenderTarget===!0),$t=Pt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Wt,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,H.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Vt(H.__webglDepthRenderbuffer,w,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(rt){i.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,E);for(let X=0;X<6;X++)if(E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)wt(H.__webglFramebuffer[X][ft],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,ft);else wt(H.__webglFramebuffer[X],w,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);S(E)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(St){for(let X=0,ft=dt.length;X<ft;X++){const gt=dt[X],bt=r.get(gt);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),Ct(s.TEXTURE_2D,gt),wt(H.__webglFramebuffer,w,gt,s.COLOR_ATTACHMENT0+X,s.TEXTURE_2D,0),S(gt)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let X=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(X=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(X,nt.__webglTexture),Ct(X,E),E.mipmaps&&E.mipmaps.length>0)for(let ft=0;ft<E.mipmaps.length;ft++)wt(H.__webglFramebuffer[ft],w,E,s.COLOR_ATTACHMENT0,X,ft);else wt(H.__webglFramebuffer,w,E,s.COLOR_ATTACHMENT0,X,0);S(E)&&_(X),i.unbindTexture()}w.depthBuffer&&fe(w)}function mt(w){const E=w.textures;for(let H=0,nt=E.length;H<nt;H++){const dt=E[H];if(S(dt)){const rt=O(w),St=r.get(dt).__webglTexture;i.bindTexture(rt,St),_(rt),i.unbindTexture()}}}const $=[],U=[];function Dt(w){if(w.samples>0){if(zt(w)===!1){const E=w.textures,H=w.width,nt=w.height;let dt=s.COLOR_BUFFER_BIT;const rt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,St=r.get(w),X=E.length>1;if(X)for(let gt=0;gt<E.length;gt++)i.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const ft=w.texture.mipmaps;ft&&ft.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let gt=0;gt<E.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(dt|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(dt|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const bt=r.get(E[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,H,nt,0,0,H,nt,dt,s.NEAREST),p===!0&&($.length=0,U.length=0,$.push(s.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&($.push(rt),U.push(rt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let gt=0;gt<E.length;gt++){i.bindFramebuffer(s.FRAMEBUFFER,St.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,St.__webglColorRenderbuffer[gt]);const bt=r.get(E[gt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,St.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&p){const E=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function Pt(w){return Math.min(l.maxSamples,w.samples)}function zt(w){const E=r.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(w){const E=f.render.frame;g.get(w)!==E&&(g.set(w,E),w.update())}function Ft(w,E){const H=w.colorSpace,nt=w.format,dt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==Fs&&H!==$a&&(Ne.getTransfer(H)===Ve?(nt!==Di||dt!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),E}function Ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(m.width=w.naturalWidth||w.width,m.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(m.width=w.displayWidth,m.height=w.displayHeight):(m.width=w.width,m.height=w.height),m}this.allocateTextureUnit=ht,this.resetTextureUnits=pt,this.setTexture2D=yt,this.setTexture2DArray=I,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=re,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=zt}function PR(s,t){function i(r,l=$a){let c;const f=Ne.getTransfer(l);if(r===Xi)return s.UNSIGNED_BYTE;if(r===Wd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===mv)return s.BYTE;if(r===gv)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===Xd)return s.INT;if(r===Lr)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===al)return s.HALF_FLOAT;if(r===vv)return s.ALPHA;if(r===yv)return s.RGB;if(r===Di)return s.RGBA;if(r===$o)return s.DEPTH_COMPONENT;if(r===tl)return s.DEPTH_STENCIL;if(r===Yd)return s.RED;if(r===jd)return s.RED_INTEGER;if(r===xv)return s.RG;if(r===Zd)return s.RG_INTEGER;if(r===Kd)return s.RGBA_INTEGER;if(r===Vc||r===kc||r===Xc||r===Wc)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Vc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Vc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Xc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Wc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===cd||r===ud||r===fd||r===hd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===cd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ud)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===fd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===hd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===dd||r===pd||r===md)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(r===dd||r===pd)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===md)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===gd||r===_d||r===vd||r===yd||r===xd||r===Sd||r===Md||r===Ed||r===bd||r===Td||r===Ad||r===Rd||r===Cd||r===wd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(r===gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_d)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===vd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Sd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Md)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Ed)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Td)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ad)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qc||r===Dd||r===Ud)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(r===qc)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ud)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sv||r===Ld||r===Nd||r===Pd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(r===qc)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ld)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zR=`
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

}`;class IR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Fn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Sa({vertexShader:OR,fragmentShader:zR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vi(new au(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends Ir{constructor(t,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",p=1,m=null,g=null,y=null,v=null,x=null,b=null;const T=new IR,S=i.getContextAttributes();let _=null,O=null;const L=[],D=[],B=new me;let V=null;const F=new _i;F.viewport=new on;const q=new _i;q.viewport=new on;const N=[F,q],R=new ab;let G=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let Et=L[tt];return Et===void 0&&(Et=new Ih,L[tt]=Et),Et.getTargetRaySpace()},this.getControllerGrip=function(tt){let Et=L[tt];return Et===void 0&&(Et=new Ih,L[tt]=Et),Et.getGripSpace()},this.getHand=function(tt){let Et=L[tt];return Et===void 0&&(Et=new Ih,L[tt]=Et),Et.getHandSpace()};function ht(tt){const Et=D.indexOf(tt.inputSource);if(Et===-1)return;const wt=L[Et];wt!==void 0&&(wt.update(tt.inputSource,tt.frame,m||f),wt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function At(){l.removeEventListener("select",ht),l.removeEventListener("selectstart",ht),l.removeEventListener("selectend",ht),l.removeEventListener("squeeze",ht),l.removeEventListener("squeezestart",ht),l.removeEventListener("squeezeend",ht),l.removeEventListener("end",At),l.removeEventListener("inputsourceschange",yt);for(let tt=0;tt<L.length;tt++){const Et=D[tt];Et!==null&&(D[tt]=null,L[tt].disconnect(Et))}G=null,pt=null,T.reset(),t.setRenderTarget(_),x=null,v=null,y=null,l=null,O=null,Lt.stop(),r.isPresenting=!1,t.setPixelRatio(V),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){c=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){h=tt,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return v!==null?v:x},this.getBinding=function(){return y},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",ht),l.addEventListener("selectstart",ht),l.addEventListener("selectend",ht),l.addEventListener("squeeze",ht),l.addEventListener("squeezestart",ht),l.addEventListener("squeezeend",ht),l.addEventListener("end",At),l.addEventListener("inputsourceschange",yt),S.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(B),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,kt=null;S.depth&&(kt=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=S.stencil?tl:$o,Vt=S.stencil?Jo:Lr);const fe={colorFormat:i.RGBA8,depthFormat:kt,scaleFactor:c};y=new XRWebGLBinding(l,i),v=y.createProjectionLayer(fe),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),O=new Nr(v.textureWidth,v.textureHeight,{format:Di,type:Xi,depthTexture:new Ov(v.textureWidth,v.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const wt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),O=new Nr(x.framebufferWidth,x.framebufferHeight,{format:Di,type:Xi,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(h),Lt.setContext(l),Lt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function yt(tt){for(let Et=0;Et<tt.removed.length;Et++){const wt=tt.removed[Et],Vt=D.indexOf(wt);Vt>=0&&(D[Vt]=null,L[Vt].disconnect(wt))}for(let Et=0;Et<tt.added.length;Et++){const wt=tt.added[Et];let Vt=D.indexOf(wt);if(Vt===-1){for(let fe=0;fe<L.length;fe++)if(fe>=D.length){D.push(wt),Vt=fe;break}else if(D[fe]===null){D[fe]=wt,Vt=fe;break}if(Vt===-1)break}const kt=L[Vt];kt&&kt.connect(wt)}}const I=new J,Q=new J;function j(tt,Et,wt){I.setFromMatrixPosition(Et.matrixWorld),Q.setFromMatrixPosition(wt.matrixWorld);const Vt=I.distanceTo(Q),kt=Et.projectionMatrix.elements,fe=wt.projectionMatrix.elements,re=kt[14]/(kt[10]-1),Ie=kt[14]/(kt[10]+1),mt=(kt[9]+1)/kt[5],$=(kt[9]-1)/kt[5],U=(kt[8]-1)/kt[0],Dt=(fe[8]+1)/fe[0],Pt=re*U,zt=re*Dt,xt=Vt/(-U+Dt),Ft=xt*-U;if(Et.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ft),tt.translateZ(xt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),kt[10]===-1)tt.projectionMatrix.copy(Et.projectionMatrix),tt.projectionMatrixInverse.copy(Et.projectionMatrixInverse);else{const Ut=re+xt,w=Ie+xt,E=Pt-Ft,H=zt+(Vt-Ft),nt=mt*Ie/w*Ut,dt=$*Ie/w*Ut;tt.projectionMatrix.makePerspective(E,H,nt,dt,Ut,w),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Nt(tt,Et){Et===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(Et.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let Et=tt.near,wt=tt.far;T.texture!==null&&(T.depthNear>0&&(Et=T.depthNear),T.depthFar>0&&(wt=T.depthFar)),R.near=q.near=F.near=Et,R.far=q.far=F.far=wt,(G!==R.near||pt!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),G=R.near,pt=R.far),F.layers.mask=tt.layers.mask|2,q.layers.mask=tt.layers.mask|4,R.layers.mask=F.layers.mask|q.layers.mask;const Vt=tt.parent,kt=R.cameras;Nt(R,Vt);for(let fe=0;fe<kt.length;fe++)Nt(kt[fe],Vt);kt.length===2?j(R,F,q):R.projectionMatrix.copy(F.projectionMatrix),P(tt,R,Vt)};function P(tt,Et,wt){wt===null?tt.matrix.copy(Et.matrixWorld):(tt.matrix.copy(wt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(Et.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(Et.projectionMatrix),tt.projectionMatrixInverse.copy(Et.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Od*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(v===null&&x===null))return p},this.setFoveation=function(tt){p=tt,v!==null&&(v.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(R)};let at=null;function Ct(tt,Et){if(g=Et.getViewerPose(m||f),b=Et,g!==null){const wt=g.views;x!==null&&(t.setRenderTargetFramebuffer(O,x.framebuffer),t.setRenderTarget(O));let Vt=!1;wt.length!==R.cameras.length&&(R.cameras.length=0,Vt=!0);for(let re=0;re<wt.length;re++){const Ie=wt[re];let mt=null;if(x!==null)mt=x.getViewport(Ie);else{const U=y.getViewSubImage(v,Ie);mt=U.viewport,re===0&&(t.setRenderTargetTextures(O,U.colorTexture,U.depthStencilTexture),t.setRenderTarget(O))}let $=N[re];$===void 0&&($=new _i,$.layers.enable(re),$.viewport=new on,N[re]=$),$.matrix.fromArray(Ie.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ie.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(mt.x,mt.y,mt.width,mt.height),re===0&&(R.matrix.copy($.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Vt===!0&&R.cameras.push($)}const kt=l.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&y){const re=y.getDepthInformation(wt[0]);re&&re.isValid&&re.texture&&T.init(t,re,l.renderState)}}for(let wt=0;wt<L.length;wt++){const Vt=D[wt],kt=L[wt];Vt!==null&&kt!==void 0&&kt.update(Vt,Et,m||f)}at&&at(tt,Et),Et.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Et}),b=null}const Lt=new Bv;Lt.setAnimationLoop(Ct),this.setAnimationLoop=function(tt){at=tt},this.dispose=function(){}}}const Tr=new Wi,FR=new Ke;function HR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,Lv(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,L,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),y(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),v(S,_),_.isMeshPhysicalMaterial&&x(S,_,D)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?p(S,_,O,L):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===qn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===qn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=t.get(_),L=O.envMap,D=O.envMapRotation;L&&(S.envMap.value=L,Tr.copy(D),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),S.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(Tr)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,O,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function y(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const O=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function GR(s,t,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,L){const D=L.program;r.uniformBlockBinding(O,D)}function m(O,L){let D=l[O.id];D===void 0&&(b(O),D=g(O),l[O.id]=D,O.addEventListener("dispose",S));const B=L.program;r.updateUBOMapping(O,B);const V=t.render.frame;c[O.id]!==V&&(v(O),c[O.id]=V)}function g(O){const L=y();O.__bindingPointIndex=L;const D=s.createBuffer(),B=O.__size,V=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,B,V),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,D),D}function y(){for(let O=0;O<h;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(O){const L=l[O.id],D=O.uniforms,B=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let V=0,F=D.length;V<F;V++){const q=Array.isArray(D[V])?D[V]:[D[V]];for(let N=0,R=q.length;N<R;N++){const G=q[N];if(x(G,V,N,B)===!0){const pt=G.__offset,ht=Array.isArray(G.value)?G.value:[G.value];let At=0;for(let yt=0;yt<ht.length;yt++){const I=ht[yt],Q=T(I);typeof I=="number"||typeof I=="boolean"?(G.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,pt+At,G.__data)):I.isMatrix3?(G.__data[0]=I.elements[0],G.__data[1]=I.elements[1],G.__data[2]=I.elements[2],G.__data[3]=0,G.__data[4]=I.elements[3],G.__data[5]=I.elements[4],G.__data[6]=I.elements[5],G.__data[7]=0,G.__data[8]=I.elements[6],G.__data[9]=I.elements[7],G.__data[10]=I.elements[8],G.__data[11]=0):(I.toArray(G.__data,At),At+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,pt,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(O,L,D,B){const V=O.value,F=L+"_"+D;if(B[F]===void 0)return typeof V=="number"||typeof V=="boolean"?B[F]=V:B[F]=V.clone(),!0;{const q=B[F];if(typeof V=="number"||typeof V=="boolean"){if(q!==V)return B[F]=V,!0}else if(q.equals(V)===!1)return q.copy(V),!0}return!1}function b(O){const L=O.uniforms;let D=0;const B=16;for(let F=0,q=L.length;F<q;F++){const N=Array.isArray(L[F])?L[F]:[L[F]];for(let R=0,G=N.length;R<G;R++){const pt=N[R],ht=Array.isArray(pt.value)?pt.value:[pt.value];for(let At=0,yt=ht.length;At<yt;At++){const I=ht[At],Q=T(I),j=D%B,Nt=j%Q.boundary,P=j+Nt;D+=Nt,P!==0&&B-P<Q.storage&&(D+=B-P),pt.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),pt.__offset=D,D+=Q.storage}}}const V=D%B;return V>0&&(D+=B-V),O.__size=D,O.__cache={},this}function T(O){const L={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(L.boundary=4,L.storage=4):O.isVector2?(L.boundary=8,L.storage=8):O.isVector3||O.isColor?(L.boundary=16,L.storage=12):O.isVector4?(L.boundary=16,L.storage=16):O.isMatrix3?(L.boundary=48,L.storage=48):O.isMatrix4?(L.boundary=64,L.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),L}function S(O){const L=O.target;L.removeEventListener("dispose",S);const D=f.indexOf(L.__bindingPointIndex);f.splice(D,1),s.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class VR{constructor(t={}){const{canvas:i=xE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:y=!1,reverseDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=f;const b=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const O=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let B=!1;this._outputColorSpace=gi;let V=0,F=0,q=null,N=-1,R=null;const G=new on,pt=new on;let ht=null;const At=new Te(0);let yt=0,I=i.width,Q=i.height,j=1,Nt=null,P=null;const at=new on(0,0,I,Q),Ct=new on(0,0,I,Q);let Lt=!1;const tt=new Jd;let Et=!1,wt=!1;const Vt=new Ke,kt=new Ke,fe=new J,re=new on,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let mt=!1;function $(){return q===null?j:1}let U=r;function Dt(C,Z){return i.getContext(C,Z)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:y};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${kd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",It,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),U===null){const Z="webgl2";if(U=Dt(Z,C),U===null)throw Dt(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Pt,zt,xt,Ft,Ut,w,E,H,nt,dt,rt,St,X,ft,gt,bt,Wt,$t,jt,Ht,Jt,Kt,he,W;function Gt(){Pt=new J1(U),Pt.init(),Kt=new PR(U,Pt),zt=new W1(U,Pt,t,Kt),xt=new LR(U,Pt),zt.reverseDepthBuffer&&v&&xt.buffers.depth.setReversed(!0),Ft=new eA(U),Ut=new yR,w=new NR(U,Pt,xt,Ut,zt,Kt,Ft),E=new Y1(D),H=new Q1(D),nt=new ob(U),he=new k1(U,nt),dt=new $1(U,nt,Ft,he),rt=new iA(U,dt,nt,Ft),jt=new nA(U,zt,w),bt=new q1(Ut),St=new vR(D,E,H,Pt,zt,he,bt),X=new HR(D,Ut),ft=new SR,gt=new RR(Pt),$t=new V1(D,E,H,xt,rt,x,p),Wt=new DR(D,rt,zt),W=new GR(U,Ft,zt,xt),Ht=new X1(U,Pt,Ft),Jt=new tA(U,Pt,Ft),Ft.programs=St.programs,D.capabilities=zt,D.extensions=Pt,D.properties=Ut,D.renderLists=ft,D.shadowMap=Wt,D.state=xt,D.info=Ft}Gt();const st=new BR(D,U);this.xr=st,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const C=Pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(C){C!==void 0&&(j=C,this.setSize(I,Q,!1))},this.getSize=function(C){return C.set(I,Q)},this.setSize=function(C,Z,ct=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,Q=Z,i.width=Math.floor(C*j),i.height=Math.floor(Z*j),ct===!0&&(i.style.width=C+"px",i.style.height=Z+"px"),this.setViewport(0,0,C,Z)},this.getDrawingBufferSize=function(C){return C.set(I*j,Q*j).floor()},this.setDrawingBufferSize=function(C,Z,ct){I=C,Q=Z,j=ct,i.width=Math.floor(C*ct),i.height=Math.floor(Z*ct),this.setViewport(0,0,C,Z)},this.getCurrentViewport=function(C){return C.copy(G)},this.getViewport=function(C){return C.copy(at)},this.setViewport=function(C,Z,ct,ut){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,Z,ct,ut),xt.viewport(G.copy(at).multiplyScalar(j).round())},this.getScissor=function(C){return C.copy(Ct)},this.setScissor=function(C,Z,ct,ut){C.isVector4?Ct.set(C.x,C.y,C.z,C.w):Ct.set(C,Z,ct,ut),xt.scissor(pt.copy(Ct).multiplyScalar(j).round())},this.getScissorTest=function(){return Lt},this.setScissorTest=function(C){xt.setScissorTest(Lt=C)},this.setOpaqueSort=function(C){Nt=C},this.setTransparentSort=function(C){P=C},this.getClearColor=function(C){return C.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(C=!0,Z=!0,ct=!0){let ut=0;if(C){let K=!1;if(q!==null){const Ot=q.texture.format;K=Ot===Kd||Ot===Zd||Ot===jd}if(K){const Ot=q.texture.type,Xt=Ot===Xi||Ot===Lr||Ot===Qo||Ot===Jo||Ot===Wd||Ot===qd,qt=$t.getClearColor(),Zt=$t.getClearAlpha(),le=qt.r,ie=qt.g,ne=qt.b;Xt?(b[0]=le,b[1]=ie,b[2]=ne,b[3]=Zt,U.clearBufferuiv(U.COLOR,0,b)):(T[0]=le,T[1]=ie,T[2]=ne,T[3]=Zt,U.clearBufferiv(U.COLOR,0,T))}else ut|=U.COLOR_BUFFER_BIT}Z&&(ut|=U.DEPTH_BUFFER_BIT),ct&&(ut|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(ut)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",It,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),$t.dispose(),ft.dispose(),gt.dispose(),Ut.dispose(),E.dispose(),H.dispose(),rt.dispose(),he.dispose(),W.dispose(),St.dispose(),st.dispose(),st.removeEventListener("sessionstart",Ze),st.removeEventListener("sessionend",qe),xe.stop()};function _t(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const C=Ft.autoReset,Z=Wt.enabled,ct=Wt.autoUpdate,ut=Wt.needsUpdate,K=Wt.type;Gt(),Ft.autoReset=C,Wt.enabled=Z,Wt.autoUpdate=ct,Wt.needsUpdate=ut,Wt.type=K}function Bt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function te(C){const Z=C.target;Z.removeEventListener("dispose",te),ye(Z)}function ye(C){Be(C),Ut.remove(C)}function Be(C){const Z=Ut.get(C).programs;Z!==void 0&&(Z.forEach(function(ct){St.releaseProgram(ct)}),C.isShaderMaterial&&St.releaseShaderCache(C))}this.renderBufferDirect=function(C,Z,ct,ut,K,Ot){Z===null&&(Z=Ie);const Xt=K.isMesh&&K.matrixWorld.determinant()<0,qt=Ni(C,Z,ct,ut,K);xt.setMaterial(ut,Xt);let Zt=ct.index,le=1;if(ut.wireframe===!0){if(Zt=dt.getWireframeAttribute(ct),Zt===void 0)return;le=2}const ie=ct.drawRange,ne=ct.attributes.position;let Se=ie.start*le,Ue=(ie.start+ie.count)*le;Ot!==null&&(Se=Math.max(Se,Ot.start*le),Ue=Math.min(Ue,(Ot.start+Ot.count)*le)),Zt!==null?(Se=Math.max(Se,0),Ue=Math.min(Ue,Zt.count)):ne!=null&&(Se=Math.max(Se,0),Ue=Math.min(Ue,ne.count));const Je=Ue-Se;if(Je<0||Je===1/0)return;he.setup(K,ut,qt,ct,Zt);let Re,Ce=Ht;if(Zt!==null&&(Re=nt.get(Zt),Ce=Jt,Ce.setIndex(Re)),K.isMesh)ut.wireframe===!0?(xt.setLineWidth(ut.wireframeLinewidth*$()),Ce.setMode(U.LINES)):Ce.setMode(U.TRIANGLES);else if(K.isLine){let ae=ut.linewidth;ae===void 0&&(ae=1),xt.setLineWidth(ae*$()),K.isLineSegments?Ce.setMode(U.LINES):K.isLineLoop?Ce.setMode(U.LINE_LOOP):Ce.setMode(U.LINE_STRIP)}else K.isPoints?Ce.setMode(U.POINTS):K.isSprite&&Ce.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)jc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Pt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ae=K._multiDrawStarts,an=K._multiDrawCounts,De=K._multiDrawCount,Un=Zt?nt.get(Zt).bytesPerElement:1,Ea=Ut.get(ut).currentProgram.getUniforms();for(let Ye=0;Ye<De;Ye++)Ea.setValue(U,"_gl_DrawID",Ye),Ce.render(ae[Ye]/Un,an[Ye])}else if(K.isInstancedMesh)Ce.renderInstances(Se,Je,K.count);else if(ct.isInstancedBufferGeometry){const ae=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,an=Math.min(ct.instanceCount,ae);Ce.renderInstances(Se,Je,an)}else Ce.render(Se,Je)};function Ae(C,Z,ct){C.transparent===!0&&C.side===ma&&C.forceSinglePass===!1?(C.side=qn,C.needsUpdate=!0,jn(C,Z,ct),C.side=xa,C.needsUpdate=!0,jn(C,Z,ct),C.side=ma):jn(C,Z,ct)}this.compile=function(C,Z,ct=null){ct===null&&(ct=C),_=gt.get(ct),_.init(Z),L.push(_),ct.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),C!==ct&&C.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(_.pushLight(K),K.castShadow&&_.pushShadow(K))}),_.setupLights();const ut=new Set;return C.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const Ot=K.material;if(Ot)if(Array.isArray(Ot))for(let Xt=0;Xt<Ot.length;Xt++){const qt=Ot[Xt];Ae(qt,ct,K),ut.add(qt)}else Ae(Ot,ct,K),ut.add(Ot)}),_=L.pop(),ut},this.compileAsync=function(C,Z,ct=null){const ut=this.compile(C,Z,ct);return new Promise(K=>{function Ot(){if(ut.forEach(function(Xt){Ut.get(Xt).currentProgram.isReady()&&ut.delete(Xt)}),ut.size===0){K(C);return}setTimeout(Ot,10)}Pt.get("KHR_parallel_shader_compile")!==null?Ot():setTimeout(Ot,10)})};let dn=null;function en(C){dn&&dn(C)}function Ze(){xe.stop()}function qe(){xe.start()}const xe=new Bv;xe.setAnimationLoop(en),typeof self<"u"&&xe.setContext(self),this.setAnimationLoop=function(C){dn=C,st.setAnimationLoop(C),C===null?xe.stop():xe.start()},st.addEventListener("sessionstart",Ze),st.addEventListener("sessionend",qe),this.render=function(C,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(Z),Z=st.getCamera()),C.isScene===!0&&C.onBeforeRender(D,C,Z,q),_=gt.get(C,L.length),_.init(Z),L.push(_),kt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),tt.setFromProjectionMatrix(kt),wt=this.localClippingEnabled,Et=bt.init(this.clippingPlanes,wt),S=ft.get(C,O.length),S.init(),O.push(S),st.enabled===!0&&st.isPresenting===!0){const Ot=D.xr.getDepthSensingMesh();Ot!==null&&An(Ot,Z,-1/0,D.sortObjects)}An(C,Z,0,D.sortObjects),S.finish(),D.sortObjects===!0&&S.sort(Nt,P),mt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,mt&&$t.addToRenderList(S,C),this.info.render.frame++,Et===!0&&bt.beginShadows();const ct=_.state.shadowsArray;Wt.render(ct,C,Z),Et===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ut=S.opaque,K=S.transmissive;if(_.setupLights(),Z.isArrayCamera){const Ot=Z.cameras;if(K.length>0)for(let Xt=0,qt=Ot.length;Xt<qt;Xt++){const Zt=Ot[Xt];yi(ut,K,C,Zt)}mt&&$t.render(C);for(let Xt=0,qt=Ot.length;Xt<qt;Xt++){const Zt=Ot[Xt];si(S,C,Zt,Zt.viewport)}}else K.length>0&&yi(ut,K,C,Z),mt&&$t.render(C),si(S,C,Z);q!==null&&F===0&&(w.updateMultisampleRenderTarget(q),w.updateRenderTargetMipmap(q)),C.isScene===!0&&C.onAfterRender(D,C,Z),he.resetDefaultState(),N=-1,R=null,L.pop(),L.length>0?(_=L[L.length-1],Et===!0&&bt.setGlobalState(D.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function An(C,Z,ct,ut){if(C.visible===!1)return;if(C.layers.test(Z.layers)){if(C.isGroup)ct=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Z);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||tt.intersectsSprite(C)){ut&&re.setFromMatrixPosition(C.matrixWorld).applyMatrix4(kt);const Xt=rt.update(C),qt=C.material;qt.visible&&S.push(C,Xt,qt,ct,re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||tt.intersectsObject(C))){const Xt=rt.update(C),qt=C.material;if(ut&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),re.copy(C.boundingSphere.center)):(Xt.boundingSphere===null&&Xt.computeBoundingSphere(),re.copy(Xt.boundingSphere.center)),re.applyMatrix4(C.matrixWorld).applyMatrix4(kt)),Array.isArray(qt)){const Zt=Xt.groups;for(let le=0,ie=Zt.length;le<ie;le++){const ne=Zt[le],Se=qt[ne.materialIndex];Se&&Se.visible&&S.push(C,Xt,Se,ct,re.z,ne)}}else qt.visible&&S.push(C,Xt,qt,ct,re.z,null)}}const Ot=C.children;for(let Xt=0,qt=Ot.length;Xt<qt;Xt++)An(Ot[Xt],Z,ct,ut)}function si(C,Z,ct,ut){const K=C.opaque,Ot=C.transmissive,Xt=C.transparent;_.setupLightsView(ct),Et===!0&&bt.setGlobalState(D.clippingPlanes,ct),ut&&xt.viewport(G.copy(ut)),K.length>0&&xi(K,Z,ct),Ot.length>0&&xi(Ot,Z,ct),Xt.length>0&&xi(Xt,Z,ct),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function yi(C,Z,ct,ut){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ut.id]===void 0&&(_.state.transmissionRenderTarget[ut.id]=new Nr(1,1,{generateMipmaps:!0,type:Pt.has("EXT_color_buffer_half_float")||Pt.has("EXT_color_buffer_float")?al:Xi,minFilter:Dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const Ot=_.state.transmissionRenderTarget[ut.id],Xt=ut.viewport||G;Ot.setSize(Xt.z*D.transmissionResolutionScale,Xt.w*D.transmissionResolutionScale);const qt=D.getRenderTarget();D.setRenderTarget(Ot),D.getClearColor(At),yt=D.getClearAlpha(),yt<1&&D.setClearColor(16777215,.5),D.clear(),mt&&$t.render(ct);const Zt=D.toneMapping;D.toneMapping=er;const le=ut.viewport;if(ut.viewport!==void 0&&(ut.viewport=void 0),_.setupLightsView(ut),Et===!0&&bt.setGlobalState(D.clippingPlanes,ut),xi(C,ct,ut),w.updateMultisampleRenderTarget(Ot),w.updateRenderTargetMipmap(Ot),Pt.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let ne=0,Se=Z.length;ne<Se;ne++){const Ue=Z[ne],Je=Ue.object,Re=Ue.geometry,Ce=Ue.material,ae=Ue.group;if(Ce.side===ma&&Je.layers.test(ut.layers)){const an=Ce.side;Ce.side=qn,Ce.needsUpdate=!0,Yn(Je,ct,ut,Re,Ce,ae),Ce.side=an,Ce.needsUpdate=!0,ie=!0}}ie===!0&&(w.updateMultisampleRenderTarget(Ot),w.updateRenderTargetMipmap(Ot))}D.setRenderTarget(qt),D.setClearColor(At,yt),le!==void 0&&(ut.viewport=le),D.toneMapping=Zt}function xi(C,Z,ct){const ut=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,Ot=C.length;K<Ot;K++){const Xt=C[K],qt=Xt.object,Zt=Xt.geometry,le=Xt.group;let ie=Xt.material;ie.allowOverride===!0&&ut!==null&&(ie=ut),qt.layers.test(ct.layers)&&Yn(qt,Z,ct,Zt,ie,le)}}function Yn(C,Z,ct,ut,K,Ot){C.onBeforeRender(D,Z,ct,ut,K,Ot),C.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),K.onBeforeRender(D,Z,ct,ut,C,Ot),K.transparent===!0&&K.side===ma&&K.forceSinglePass===!1?(K.side=qn,K.needsUpdate=!0,D.renderBufferDirect(ct,Z,ut,K,C,Ot),K.side=xa,K.needsUpdate=!0,D.renderBufferDirect(ct,Z,ut,K,C,Ot),K.side=ma):D.renderBufferDirect(ct,Z,ut,K,C,Ot),C.onAfterRender(D,Z,ct,ut,K,Ot)}function jn(C,Z,ct){Z.isScene!==!0&&(Z=Ie);const ut=Ut.get(C),K=_.state.lights,Ot=_.state.shadowsArray,Xt=K.state.version,qt=St.getParameters(C,K.state,Ot,Z,ct),Zt=St.getProgramCacheKey(qt);let le=ut.programs;ut.environment=C.isMeshStandardMaterial?Z.environment:null,ut.fog=Z.fog,ut.envMap=(C.isMeshStandardMaterial?H:E).get(C.envMap||ut.environment),ut.envMapRotation=ut.environment!==null&&C.envMap===null?Z.environmentRotation:C.envMapRotation,le===void 0&&(C.addEventListener("dispose",te),le=new Map,ut.programs=le);let ie=le.get(Zt);if(ie!==void 0){if(ut.currentProgram===ie&&ut.lightsStateVersion===Xt)return Zn(C,qt),ie}else qt.uniforms=St.getUniforms(C),C.onBeforeCompile(qt,D),ie=St.acquireProgram(qt,Zt),le.set(Zt,ie),ut.uniforms=qt.uniforms;const ne=ut.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ne.clippingPlanes=bt.uniform),Zn(C,qt),ut.needsLights=nn(C),ut.lightsStateVersion=Xt,ut.needsLights&&(ne.ambientLightColor.value=K.state.ambient,ne.lightProbe.value=K.state.probe,ne.directionalLights.value=K.state.directional,ne.directionalLightShadows.value=K.state.directionalShadow,ne.spotLights.value=K.state.spot,ne.spotLightShadows.value=K.state.spotShadow,ne.rectAreaLights.value=K.state.rectArea,ne.ltc_1.value=K.state.rectAreaLTC1,ne.ltc_2.value=K.state.rectAreaLTC2,ne.pointLights.value=K.state.point,ne.pointLightShadows.value=K.state.pointShadow,ne.hemisphereLights.value=K.state.hemi,ne.directionalShadowMap.value=K.state.directionalShadowMap,ne.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ne.spotShadowMap.value=K.state.spotShadowMap,ne.spotLightMatrix.value=K.state.spotLightMatrix,ne.spotLightMap.value=K.state.spotLightMap,ne.pointShadowMap.value=K.state.pointShadowMap,ne.pointShadowMatrix.value=K.state.pointShadowMatrix),ut.currentProgram=ie,ut.uniformsList=null,ie}function Si(C){if(C.uniformsList===null){const Z=C.currentProgram.getUniforms();C.uniformsList=Zc.seqWithValue(Z.seq,C.uniforms)}return C.uniformsList}function Zn(C,Z){const ct=Ut.get(C);ct.outputColorSpace=Z.outputColorSpace,ct.batching=Z.batching,ct.batchingColor=Z.batchingColor,ct.instancing=Z.instancing,ct.instancingColor=Z.instancingColor,ct.instancingMorph=Z.instancingMorph,ct.skinning=Z.skinning,ct.morphTargets=Z.morphTargets,ct.morphNormals=Z.morphNormals,ct.morphColors=Z.morphColors,ct.morphTargetsCount=Z.morphTargetsCount,ct.numClippingPlanes=Z.numClippingPlanes,ct.numIntersection=Z.numClipIntersection,ct.vertexAlphas=Z.vertexAlphas,ct.vertexTangents=Z.vertexTangents,ct.toneMapping=Z.toneMapping}function Ni(C,Z,ct,ut,K){Z.isScene!==!0&&(Z=Ie),w.resetTextureUnits();const Ot=Z.fog,Xt=ut.isMeshStandardMaterial?Z.environment:null,qt=q===null?D.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Fs,Zt=(ut.isMeshStandardMaterial?H:E).get(ut.envMap||Xt),le=ut.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ie=!!ct.attributes.tangent&&(!!ut.normalMap||ut.anisotropy>0),ne=!!ct.morphAttributes.position,Se=!!ct.morphAttributes.normal,Ue=!!ct.morphAttributes.color;let Je=er;ut.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Je=D.toneMapping);const Re=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ce=Re!==void 0?Re.length:0,ae=Ut.get(ut),an=_.state.lights;if(Et===!0&&(wt===!0||C!==R)){const xn=C===R&&ut.id===N;bt.setState(ut,C,xn)}let De=!1;ut.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==an.state.version||ae.outputColorSpace!==qt||K.isBatchedMesh&&ae.batching===!1||!K.isBatchedMesh&&ae.batching===!0||K.isBatchedMesh&&ae.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ae.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ae.instancing===!1||!K.isInstancedMesh&&ae.instancing===!0||K.isSkinnedMesh&&ae.skinning===!1||!K.isSkinnedMesh&&ae.skinning===!0||K.isInstancedMesh&&ae.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ae.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ae.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ae.instancingMorph===!1&&K.morphTexture!==null||ae.envMap!==Zt||ut.fog===!0&&ae.fog!==Ot||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==bt.numPlanes||ae.numIntersection!==bt.numIntersection)||ae.vertexAlphas!==le||ae.vertexTangents!==ie||ae.morphTargets!==ne||ae.morphNormals!==Se||ae.morphColors!==Ue||ae.toneMapping!==Je||ae.morphTargetsCount!==Ce)&&(De=!0):(De=!0,ae.__version=ut.version);let Un=ae.currentProgram;De===!0&&(Un=jn(ut,Z,K));let Ea=!1,Ye=!1,Yi=!1;const Xe=Un.getUniforms(),Ln=ae.uniforms;if(xt.useProgram(Un.program)&&(Ea=!0,Ye=!0,Yi=!0),ut.id!==N&&(N=ut.id,Ye=!0),Ea||R!==C){xt.buffers.depth.getReversed()?(Vt.copy(C.projectionMatrix),ME(Vt),EE(Vt),Xe.setValue(U,"projectionMatrix",Vt)):Xe.setValue(U,"projectionMatrix",C.projectionMatrix),Xe.setValue(U,"viewMatrix",C.matrixWorldInverse);const Rn=Xe.map.cameraPosition;Rn!==void 0&&Rn.setValue(U,fe.setFromMatrixPosition(C.matrixWorld)),zt.logarithmicDepthBuffer&&Xe.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ut.isMeshPhongMaterial||ut.isMeshToonMaterial||ut.isMeshLambertMaterial||ut.isMeshBasicMaterial||ut.isMeshStandardMaterial||ut.isShaderMaterial)&&Xe.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,Ye=!0,Yi=!0)}if(K.isSkinnedMesh){Xe.setOptional(U,K,"bindMatrix"),Xe.setOptional(U,K,"bindMatrixInverse");const xn=K.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Xe.setValue(U,"boneTexture",xn.boneTexture,w))}K.isBatchedMesh&&(Xe.setOptional(U,K,"batchingTexture"),Xe.setValue(U,"batchingTexture",K._matricesTexture,w),Xe.setOptional(U,K,"batchingIdTexture"),Xe.setValue(U,"batchingIdTexture",K._indirectTexture,w),Xe.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(U,"batchingColorTexture",K._colorsTexture,w));const pn=ct.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&jt.update(K,ct,Un),(Ye||ae.receiveShadow!==K.receiveShadow)&&(ae.receiveShadow=K.receiveShadow,Xe.setValue(U,"receiveShadow",K.receiveShadow)),ut.isMeshGouraudMaterial&&ut.envMap!==null&&(Ln.envMap.value=Zt,Ln.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),ut.isMeshStandardMaterial&&ut.envMap===null&&Z.environment!==null&&(Ln.envMapIntensity.value=Z.environmentIntensity),Ye&&(Xe.setValue(U,"toneMappingExposure",D.toneMappingExposure),ae.needsLights&&Mi(Ln,Yi),Ot&&ut.fog===!0&&X.refreshFogUniforms(Ln,Ot),X.refreshMaterialUniforms(Ln,ut,j,Q,_.state.transmissionRenderTarget[C.id]),Zc.upload(U,Si(ae),Ln,w)),ut.isShaderMaterial&&ut.uniformsNeedUpdate===!0&&(Zc.upload(U,Si(ae),Ln,w),ut.uniformsNeedUpdate=!1),ut.isSpriteMaterial&&Xe.setValue(U,"center",K.center),Xe.setValue(U,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(U,"normalMatrix",K.normalMatrix),Xe.setValue(U,"modelMatrix",K.matrixWorld),ut.isShaderMaterial||ut.isRawShaderMaterial){const xn=ut.uniformsGroups;for(let Rn=0,Pi=xn.length;Rn<Pi;Rn++){const ji=xn[Rn];W.update(ji,Un),W.bind(ji,Un)}}return Un}function Mi(C,Z){C.ambientLightColor.needsUpdate=Z,C.lightProbe.needsUpdate=Z,C.directionalLights.needsUpdate=Z,C.directionalLightShadows.needsUpdate=Z,C.pointLights.needsUpdate=Z,C.pointLightShadows.needsUpdate=Z,C.spotLights.needsUpdate=Z,C.spotLightShadows.needsUpdate=Z,C.rectAreaLights.needsUpdate=Z,C.hemisphereLights.needsUpdate=Z}function nn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,Z,ct){const ut=Ut.get(C);ut.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ut.__autoAllocateDepthBuffer===!1&&(ut.__useRenderToTexture=!1),Ut.get(C.texture).__webglTexture=Z,Ut.get(C.depthTexture).__webglTexture=ut.__autoAllocateDepthBuffer?void 0:ct,ut.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Z){const ct=Ut.get(C);ct.__webglFramebuffer=Z,ct.__useDefaultFramebuffer=Z===void 0};const Fr=U.createFramebuffer();this.setRenderTarget=function(C,Z=0,ct=0){q=C,V=Z,F=ct;let ut=!0,K=null,Ot=!1,Xt=!1;if(C){const Zt=Ut.get(C);if(Zt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(U.FRAMEBUFFER,null),ut=!1;else if(Zt.__webglFramebuffer===void 0)w.setupRenderTarget(C);else if(Zt.__hasExternalTextures)w.rebindTextures(C,Ut.get(C.texture).__webglTexture,Ut.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ne=C.depthTexture;if(Zt.__boundDepthTexture!==ne){if(ne!==null&&Ut.has(ne)&&(C.width!==ne.image.width||C.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(C)}}const le=C.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Xt=!0);const ie=Ut.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?K=ie[Z][ct]:K=ie[Z],Ot=!0):C.samples>0&&w.useMultisampledRTT(C)===!1?K=Ut.get(C).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[ct]:K=ie,G.copy(C.viewport),pt.copy(C.scissor),ht=C.scissorTest}else G.copy(at).multiplyScalar(j).floor(),pt.copy(Ct).multiplyScalar(j).floor(),ht=Lt;if(ct!==0&&(K=Fr),xt.bindFramebuffer(U.FRAMEBUFFER,K)&&ut&&xt.drawBuffers(C,K),xt.viewport(G),xt.scissor(pt),xt.setScissorTest(ht),Ot){const Zt=Ut.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Zt.__webglTexture,ct)}else if(Xt){const Zt=Ut.get(C.texture),le=Z;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Zt.__webglTexture,ct,le)}else if(C!==null&&ct!==0){const Zt=Ut.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Zt.__webglTexture,ct)}N=-1},this.readRenderTargetPixels=function(C,Z,ct,ut,K,Ot,Xt){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=Ut.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt){xt.bindFramebuffer(U.FRAMEBUFFER,qt);try{const Zt=C.texture,le=Zt.format,ie=Zt.type;if(!zt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!zt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=C.width-ut&&ct>=0&&ct<=C.height-K&&U.readPixels(Z,ct,ut,K,Kt.convert(le),Kt.convert(ie),Ot)}finally{const Zt=q!==null?Ut.get(q).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Zt)}}},this.readRenderTargetPixelsAsync=async function(C,Z,ct,ut,K,Ot,Xt){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=Ut.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Xt!==void 0&&(qt=qt[Xt]),qt)if(Z>=0&&Z<=C.width-ut&&ct>=0&&ct<=C.height-K){xt.bindFramebuffer(U.FRAMEBUFFER,qt);const Zt=C.texture,le=Zt.format,ie=Zt.type;if(!zt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!zt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ne=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.bufferData(U.PIXEL_PACK_BUFFER,Ot.byteLength,U.STREAM_READ),U.readPixels(Z,ct,ut,K,Kt.convert(le),Kt.convert(ie),0);const Se=q!==null?Ut.get(q).__webglFramebuffer:null;xt.bindFramebuffer(U.FRAMEBUFFER,Se);const Ue=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await SE(U,Ue,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ne),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ot),U.deleteBuffer(ne),U.deleteSync(Ue),Ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Z=null,ct=0){const ut=Math.pow(2,-ct),K=Math.floor(C.image.width*ut),Ot=Math.floor(C.image.height*ut),Xt=Z!==null?Z.x:0,qt=Z!==null?Z.y:0;w.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,ct,0,0,Xt,qt,K,Ot),xt.unbindTexture()};const ir=U.createFramebuffer(),oi=U.createFramebuffer();this.copyTextureToTexture=function(C,Z,ct=null,ut=null,K=0,Ot=null){Ot===null&&(K!==0?(jc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ot=K,K=0):Ot=0);let Xt,qt,Zt,le,ie,ne,Se,Ue,Je;const Re=C.isCompressedTexture?C.mipmaps[Ot]:C.image;if(ct!==null)Xt=ct.max.x-ct.min.x,qt=ct.max.y-ct.min.y,Zt=ct.isBox3?ct.max.z-ct.min.z:1,le=ct.min.x,ie=ct.min.y,ne=ct.isBox3?ct.min.z:0;else{const pn=Math.pow(2,-K);Xt=Math.floor(Re.width*pn),qt=Math.floor(Re.height*pn),C.isDataArrayTexture?Zt=Re.depth:C.isData3DTexture?Zt=Math.floor(Re.depth*pn):Zt=1,le=0,ie=0,ne=0}ut!==null?(Se=ut.x,Ue=ut.y,Je=ut.z):(Se=0,Ue=0,Je=0);const Ce=Kt.convert(Z.format),ae=Kt.convert(Z.type);let an;Z.isData3DTexture?(w.setTexture3D(Z,0),an=U.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(w.setTexture2DArray(Z,0),an=U.TEXTURE_2D_ARRAY):(w.setTexture2D(Z,0),an=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const De=U.getParameter(U.UNPACK_ROW_LENGTH),Un=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ea=U.getParameter(U.UNPACK_SKIP_PIXELS),Ye=U.getParameter(U.UNPACK_SKIP_ROWS),Yi=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Re.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Re.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,le),U.pixelStorei(U.UNPACK_SKIP_ROWS,ie),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ne);const Xe=C.isDataArrayTexture||C.isData3DTexture,Ln=Z.isDataArrayTexture||Z.isData3DTexture;if(C.isDepthTexture){const pn=Ut.get(C),xn=Ut.get(Z),Rn=Ut.get(pn.__renderTarget),Pi=Ut.get(xn.__renderTarget);xt.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let ji=0;ji<Zt;ji++)Xe&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(C).__webglTexture,K,ne+ji),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.get(Z).__webglTexture,Ot,Je+ji)),U.blitFramebuffer(le,ie,Xt,qt,Se,Ue,Xt,qt,U.DEPTH_BUFFER_BIT,U.NEAREST);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||C.isRenderTargetTexture||Ut.has(C)){const pn=Ut.get(C),xn=Ut.get(Z);xt.bindFramebuffer(U.READ_FRAMEBUFFER,ir),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,oi);for(let Rn=0;Rn<Zt;Rn++)Xe?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,pn.__webglTexture,K,ne+Rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pn.__webglTexture,K),Ln?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,xn.__webglTexture,Ot,Je+Rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,xn.__webglTexture,Ot),K!==0?U.blitFramebuffer(le,ie,Xt,qt,Se,Ue,Xt,qt,U.COLOR_BUFFER_BIT,U.NEAREST):Ln?U.copyTexSubImage3D(an,Ot,Se,Ue,Je+Rn,le,ie,Xt,qt):U.copyTexSubImage2D(an,Ot,Se,Ue,le,ie,Xt,qt);xt.bindFramebuffer(U.READ_FRAMEBUFFER,null),xt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ln?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(an,Ot,Se,Ue,Je,Xt,qt,Zt,Ce,ae,Re.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(an,Ot,Se,Ue,Je,Xt,qt,Zt,Ce,Re.data):U.texSubImage3D(an,Ot,Se,Ue,Je,Xt,qt,Zt,Ce,ae,Re):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ot,Se,Ue,Xt,qt,Ce,ae,Re.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ot,Se,Ue,Re.width,Re.height,Ce,Re.data):U.texSubImage2D(U.TEXTURE_2D,Ot,Se,Ue,Xt,qt,Ce,ae,Re);U.pixelStorei(U.UNPACK_ROW_LENGTH,De),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Un),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ea),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Yi),Ot===0&&Z.generateMipmaps&&U.generateMipmap(an),xt.unbindTexture()},this.copyTextureToTexture3D=function(C,Z,ct=null,ut=null,K=0){return jc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,Z,ct,ut,K)},this.initRenderTarget=function(C){Ut.get(C).__webglFramebuffer===void 0&&w.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),xt.unbindTexture()},this.resetState=function(){V=0,F=0,q=null,xt.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ga}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Y0={type:"change"},tp={type:"start"},kv={type:"end"},Fc=new Av,j0=new Ja,kR=Math.cos(70*yE.DEG2RAD),_n=new J,Wn=2*Math.PI,ke={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qh=1e-6;class XR extends rb{constructor(t,i=null){super(t,i),this.state=ke.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ps.ROTATE,MIDDLE:Ps.DOLLY,RIGHT:Ps.PAN},this.touches={ONE:Ls.ROTATE,TWO:Ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new Pr,this._lastTargetPosition=new J,this._quat=new Pr().setFromUnitVectors(t.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new S0,this._sphericalDelta=new S0,this._scale=1,this._panOffset=new J,this._rotateStart=new me,this._rotateEnd=new me,this._rotateDelta=new me,this._panStart=new me,this._panEnd=new me,this._panDelta=new me,this._dollyStart=new me,this._dollyEnd=new me,this._dollyDelta=new me,this._dollyDirection=new J,this._mouse=new me,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qR.bind(this),this._onPointerDown=WR.bind(this),this._onPointerUp=YR.bind(this),this._onContextMenu=tC.bind(this),this._onMouseWheel=KR.bind(this),this._onKeyDown=QR.bind(this),this._onTouchStart=JR.bind(this),this._onTouchMove=$R.bind(this),this._onMouseDown=jR.bind(this),this._onMouseMove=ZR.bind(this),this._interceptControlDown=eC.bind(this),this._interceptControlUp=nC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Y0),this.update(),this.state=ke.NONE}update(t=null){const i=this.object.position;_n.copy(i).sub(this.target),_n.applyQuaternion(this._quat),this._spherical.setFromVector3(_n),this.autoRotate&&this.state===ke.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(r)&&isFinite(l)&&(r<-Math.PI?r+=Wn:r>Math.PI&&(r-=Wn),l<-Math.PI?l+=Wn:l>Math.PI&&(l-=Wn),r<=l?this._spherical.theta=Math.max(r,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+l)/2?Math.max(r,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const f=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=f!=this._spherical.radius}if(_n.setFromSpherical(this._spherical),_n.applyQuaternion(this._quatInverse),i.copy(this.target).add(_n),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let f=null;if(this.object.isPerspectiveCamera){const h=_n.length();f=this._clampDistance(h*this._scale);const p=h-f;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),c=!!p}else if(this.object.isOrthographicCamera){const h=new J(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=p!==this.object.zoom;const m=new J(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(h),this.object.updateMatrixWorld(),f=_n.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;f!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(f).add(this.object.position):(Fc.origin.copy(this.object.position),Fc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Fc.direction))<kR?this.object.lookAt(this.target):(j0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Fc.intersectPlane(j0,this.target))))}else if(this.object.isOrthographicCamera){const f=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),f!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>qh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qh||this._lastTargetPosition.distanceToSquared(this.target)>qh?(this.dispatchEvent(Y0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){_n.setFromMatrixColumn(i,0),_n.multiplyScalar(-t),this._panOffset.add(_n)}_panUp(t,i){this.screenSpacePanning===!0?_n.setFromMatrixColumn(i,1):(_n.setFromMatrixColumn(i,0),_n.crossVectors(this.object.up,_n)),_n.multiplyScalar(t),this._panOffset.add(_n)}_pan(t,i){const r=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;_n.copy(l).sub(this.target);let c=_n.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/r.clientHeight,this.object.matrix),this._panUp(2*i*c/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),l=t-r.left,c=i-r.top,f=r.width,h=r.height;this._mouse.x=l/f*2-1,this._mouse.y=-(c/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(r,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(r,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const r=this._getSecondPointerPosition(t),l=.5*(t.pageX+r.x),c=.5*(t.pageY+r.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(r,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),r=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(r*r+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const f=(t.pageX+i.x)*.5,h=(t.pageY+i.y)*.5;this._updateZoomParameters(f,h)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new me,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,r={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function WR(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function qR(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function YR(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kv),this.state=ke.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function jR(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ps.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ke.DOLLY;break;case Ps.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}break;case Ps.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ke.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ke.PAN}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(tp)}function ZR(s){switch(this.state){case ke.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ke.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ke.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function KR(s){this.enabled===!1||this.enableZoom===!1||this.state!==ke.NONE||(s.preventDefault(),this.dispatchEvent(tp),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(kv))}function QR(s){this.enabled!==!1&&this._handleKeyDown(s)}function JR(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ke.TOUCH_ROTATE;break;case Ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ke.TOUCH_PAN;break;default:this.state=ke.NONE}break;case 2:switch(this.touches.TWO){case Ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ke.TOUCH_DOLLY_PAN;break;case Ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ke.TOUCH_DOLLY_ROTATE;break;default:this.state=ke.NONE}break;default:this.state=ke.NONE}this.state!==ke.NONE&&this.dispatchEvent(tp)}function $R(s){switch(this._trackPointer(s),this.state){case ke.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ke.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ke.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ke.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ke.NONE}}function tC(s){this.enabled!==!1&&s.preventDefault()}function eC(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nC(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function iC(){const s=Tt.useRef(null),t=Tt.useRef(null);return Tt.useEffect(()=>{if(!s.current||!t.current)return;let i,r,l,c;const f={};let h="3p",p="focused",m=.05,g="normal";const y=45e3,v=.05,x=new Map;let b=[],T=.5,S=0,_=1,O=.8,L=.3,D=!1,B=0,V=0,F=0;const q=`
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
      uniform mat4 u_projectionMatrix;
      uniform float u_frustumPadding;
      uniform bool u_isPrimaryOrbital;
      uniform float u_overlapCullDistance;
      uniform float u_densityThreshold;
      
      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      void main() {
          vec3 original_pos = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);

          float angularSpeed = u_maxSpeedAtCenter; // Use only one speed per orbital
          float currentRotationY = angularSpeed * u_time;

          float s = sin(currentRotationY);
          float c = cos(currentRotationY);
          mat4 rotationAnimMatrix = mat4(
              c, 0, s, 0,
              0, 1, 0, 0,
              -s, 0, c, 0,
              0, 0, 0, 1
          );

          vec3 animated_position = (rotationAnimMatrix * vec4(original_pos, 1.0)).xyz;

          float density = exp(-length(animated_position) / orbitalScale);
          if (density < u_densityThreshold) {
              vCameraCull = 0.0; // Hide particle if outside density region
          }

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

          if (!u_isPrimaryOrbital) {
              // For secondary orbitals, hide particles that are too close to origin
              // where primary orbital particles would be dense
              float distToOrigin = length(animated_position);
              if (distToOrigin < u_overlapCullDistance) {
                  vCameraCull = 0.0; // Hide this particle
              }
          }

          // Apply particle scale uniform
          vec3 scaledPosition = position * u_particleScale;
          vec4 worldPosition = modelMatrix * translationToAnimatedCenter * vec4(scaledPosition, 1.0);
          vWorldPosition = worldPosition.xyz;
          
          // Updated cross-section visibility (0-10 range instead of -10 to 10)
          float crossSectionFactor = u_crossSectionX / 10.0; // Convert 0-10 to 0-1
          vCrossSectionVisibility = worldPosition.x <= mix(0.0, 10.0, crossSectionFactor) ? 1.0 : 0.0;
          
          // Camera-based culling with different behavior for primary vs secondary orbitals
          float distanceToCamera = distance(worldPosition.xyz, u_cameraPosition);
          float distanceFromOrigin = length(worldPosition.xyz);

          if (u_isPrimaryOrbital) {
              // Minimal culling for primary orbital - only cull very close particles
              vCameraCull = distanceToCamera > u_cameraCullDistance * 0.5 ? 1.0 : 0.0;
          } else {
              // Aggressive culling for secondary orbitals
              
              // Basic bulldozer effect
              vCameraCull = distanceToCamera > u_cameraCullDistance ? 1.0 : 0.0;
              
              // Calculate if particle is between camera and origin
              vec3 cameraToOrigin = normalize(-u_cameraPosition);
              vec3 cameraToParticle = normalize(worldPosition.xyz - u_cameraPosition);
              float alignment = dot(cameraToOrigin, cameraToParticle);
              
              // Cull secondary particles that are:
              // 1. In front of the camera's view toward origin (alignment > 0.7)
              // 2. Closer to camera than the primary orbital's typical radius
              if (alignment > 0.7 && distanceToCamera < distanceFromOrigin) {
                  vCameraCull = 0.0;
              }
              
              // Also cull particles that are far from origin AND in front
              vec3 toCameraDir = normalize(u_cameraPosition - worldPosition.xyz);
              vec3 toOriginDir = normalize(-worldPosition.xyz);
              float viewAlignment = dot(toCameraDir, toOriginDir);
              
              if (distanceFromOrigin > u_depthCullDistance && viewAlignment < 0.3) {
                  vCameraCull = 0.0;
              }
          }
          
          vNormalWorld = normalize(mat3(modelMatrix) * normal);

          vec4 viewPosition = viewMatrix * worldPosition; 
          float rawDepth = -viewPosition.z; 
          
          vDepthFactor = smoothstep(orbitalScale * 0.45, orbitalScale * 2.8, rawDepth); 

          gl_Position = projectionMatrix * viewPosition;

          vec4 clipPos = gl_Position;
          float w = clipPos.w;
          if (clipPos.x < -w * u_frustumPadding || clipPos.x > w * u_frustumPadding ||
              clipPos.y < -w * u_frustumPadding || clipPos.y > w * u_frustumPadding ||
              clipPos.z < -w || clipPos.z > w) {
              vCameraCull = 0.0;
          }
      }
    `,N=`
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
      uniform bool u_isPrimaryOrbital;
      uniform float u_overlapCullDistance;
      uniform float u_orbitalScale;

      varying vec3 vWorldPosition;
      varying vec3 vNormalWorld;
      varying float vDepthFactor;
      varying float vCrossSectionVisibility;
      varying float vCameraCull;
      
      const float minOverallBrightness = 0.12;
      const float maxOverallBrightness = 0.98;
      const float minRawLight = 0.15;
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

          rawLighting *= 1.5;
          
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

          float isKorLShell = u_orbitalScale < 1.0 ? 1.0 : 0.0;
          float isPrimary = u_isPrimaryOrbital ? 1.0 : 0.0;

          // For K/L shells when primary: 85% brightness, otherwise normal 25%
          float darkeningStrength = mix(0.25, 0.85, isKorLShell * isPrimary);

          float adjustedDepthFactor = vDepthFactor * (1.0 - (crossSectionFactor * 0.02));
          vec3 darkColorMultiplier = vec3(darkeningStrength, darkeningStrength, darkeningStrength); 
          vec3 finalColor = mix(litColor, litColor * darkColorMultiplier, adjustedDepthFactor);

          finalColor = clamp(finalColor, vec3(minOverallBrightness), vec3(maxOverallBrightness));

          gl_FragColor = vec4(finalColor, u_opacity);
      }
    `,R={"1s":{name:"1s",shell:"K",color:16729156,lowDensityColor:16755370,midDensityColor:16737894,highDensityColor:13369344,scale:.3,particleCount:5e3,generatePoints:pt,cameraPosition:new J(2,1.5,.5),energy:7112,particleScale:1.5,renderMode:"solid",rotationSpeed:.5,renderOrder:1e3},"2s":{name:"2s",shell:"L",color:4521796,lowDensityColor:11206570,midDensityColor:6750054,highDensityColor:52224,scale:.65,particleCount:1e4,generatePoints:ht,cameraPosition:new J(3,2.5,1),energy:844,particleScale:1,renderMode:"solid",rotationSpeed:.3,renderOrder:500},"2p1/2":{name:"2p₁/₂",shell:"L",color:4521898,lowDensityColor:11206621,midDensityColor:6750139,highDensityColor:52360,scale:.75,particleCount:1e4,generatePoints:At,cameraPosition:new J(3,2.5,1),energy:720,particleScale:1,renderMode:"solid",rotationSpeed:.3,renderOrder:400},"2p3/2":{name:"2p₃/₂",shell:"L",color:4500223,lowDensityColor:11197951,midDensityColor:6732799,highDensityColor:35020,scale:.85,particleCount:1e4,generatePoints:At,cameraPosition:new J(3,2.5,1),energy:707,particleScale:1,renderMode:"solid",rotationSpeed:.3,renderOrder:300},"3s":{name:"3s",shell:"M",color:16777028,lowDensityColor:16777130,midDensityColor:16777062,highDensityColor:13421568,scale:1.5,particleCount:2e4,generatePoints:yt,cameraPosition:new J(3,3,1.5),energy:92,particleScale:.8,renderMode:"solid",rotationSpeed:.12,renderOrder:2},"3p":{name:"3p",shell:"M",color:16755268,lowDensityColor:16768426,midDensityColor:16759654,highDensityColor:13404160,scale:1.5,particleCount:2e4,generatePoints:I,cameraPosition:new J(3,3,1.5),energy:52,particleScale:.8,renderMode:"solid",rotationSpeed:.12,renderOrder:1},"3d":{name:"3d",shell:"M",color:16729343,lowDensityColor:16755455,midDensityColor:16738047,highDensityColor:13369548,scale:1.5,particleCount:2e4,generatePoints:Q,cameraPosition:new J(3,3,1.5),energy:1,particleScale:.8,renderMode:"solid",rotationSpeed:.12,renderOrder:0},"4s":{name:"4s",shell:"N",color:11158783,lowDensityColor:14527231,midDensityColor:12281599,highDensityColor:8913100,scale:2,particleCount:25e3,generatePoints:j,cameraPosition:new J(4,3.5,2),energy:7.9,particleScale:.7,renderMode:"solid",rotationSpeed:.08,renderOrder:-1}};function G(mt,$,U,Dt=.1){const Pt=Math.floor(mt/Dt),zt=Math.floor($/Dt),xt=Math.floor(U/Dt);return`${Pt},${zt},${xt}`}function pt(mt,$){const U=[],Dt=$*.05;x.clear();let Pt=0;const zt=mt*2;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft;do{xt=$*Math.random();const X=xt/($/4);Ft=X*X*Math.exp(-2*X)}while(Math.random()>Ft);const Ut=Math.acos(2*Math.random()-1),w=Math.random()*Math.PI*2,E=xt*Math.sin(Ut)*Math.cos(w),H=xt*Math.sin(Ut)*Math.sin(w),nt=xt*Math.cos(Ut),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function ht(mt,$){const U=[],Dt=$*.06;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft;do{xt=$*1.5*Math.random();const X=xt/($/4),ft=Math.pow(2-X/2,2),gt=Math.abs(X/2-2)<.3?.05:1;Ft=X*X*ft*Math.exp(-X/2)*gt}while(Math.random()*2>Ft);const Ut=Math.acos(2*Math.random()-1),w=Math.random()*Math.PI*2,E=xt*Math.sin(Ut)*Math.cos(w),H=xt*Math.sin(Ut)*Math.sin(w),nt=xt*Math.cos(Ut),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function At(mt,$){const U=[],Dt=$*.06;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft,Ut;do{xt=$*1.2*Math.random(),Ft=Math.acos(2*Math.random()-1);const X=xt/($/4),ft=Math.pow(Math.cos(Ft),4),gt=Math.abs(Math.cos(Ft))<.2?.01:1;Ut=X*X*Math.exp(-X)*ft*gt}while(Math.random()*.3>Ut);const w=Math.random()*Math.PI*2,E=xt*Math.sin(Ft)*Math.cos(w),H=xt*Math.sin(Ft)*Math.sin(w),nt=xt*Math.cos(Ft),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function yt(mt,$){const U=[],Dt=$*.04;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft;do{xt=$*1.8*Math.random();const X=xt/($/6),ft=Math.pow(27-18*X/3+2*Math.pow(X/3,2),2),gt=Math.abs(X-6)<.4||Math.abs(X-12)<.4?.05:1;Ft=X*X*ft*Math.exp(-X/3)*gt}while(Math.random()*3>Ft);const Ut=Math.acos(2*Math.random()-1),w=Math.random()*Math.PI*2,E=xt*Math.sin(Ut)*Math.cos(w),H=xt*Math.sin(Ut)*Math.sin(w),nt=xt*Math.cos(Ut),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function I(mt,$){const U=[],Dt=$*.04;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft,Ut;do{xt=$*1.5*Math.random(),Ft=Math.acos(2*Math.random()-1);const X=xt/($/6),ft=Math.pow(Math.cos(Ft),4),gt=Math.abs(Math.cos(Ft))<.2?.01:1,bt=Math.pow(6-X,2)*Math.pow(X,2),Wt=Math.abs(X-6)<.5?.05:1;Ut=bt*Math.exp(-X/3)*ft*gt*Wt}while(Math.random()*5>Ut);const w=Math.random()*Math.PI*2,E=xt*Math.sin(Ft)*Math.cos(w),H=xt*Math.sin(Ft)*Math.sin(w),nt=xt*Math.cos(Ft),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function Q(mt,$){const U=[],Dt=$*.04;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft,Ut;do{xt=$*1.5*Math.random(),Ft=Math.acos(2*Math.random()-1);const X=xt/($/6),ft=Math.pow(3*Math.pow(Math.cos(Ft),2)-1,2),gt=Math.abs(3*Math.pow(Math.cos(Ft),2)-1)<.3?.05:1;Ut=Math.pow(X,4)*Math.exp(-X/3)*ft*gt}while(Math.random()*10>Ut);const w=Math.random()*Math.PI*2,E=xt*Math.sin(Ft)*Math.cos(w),H=xt*Math.sin(Ft)*Math.sin(w),nt=xt*Math.cos(Ft),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function j(mt,$){const U=[],Dt=$*.03;x.clear();let Pt=0;const zt=mt*3;for(;U.length<mt&&Pt<zt;){Pt++;let xt,Ft;do{xt=$*2*Math.random();const X=xt/($/8),ft=Math.pow(48-36*X/4+9*Math.pow(X/4,2)-Math.pow(X/4,3),2),gt=Math.abs(X-8)<.5||Math.abs(X-16)<.5||Math.abs(X-24)<.5?.05:1;Ft=X*X*ft*Math.exp(-X/4)*gt}while(Math.random()*4>Ft);const Ut=Math.acos(2*Math.random()-1),w=Math.random()*Math.PI*2,E=xt*Math.sin(Ut)*Math.cos(w),H=xt*Math.sin(Ut)*Math.sin(w),nt=xt*Math.cos(Ut),dt=G(E,H,nt,Dt),rt=[];for(let X=-1;X<=1;X++)for(let ft=-1;ft<=1;ft++)for(let gt=-1;gt<=1;gt++)rt.push(G(E+X*Dt,H+ft*Dt,nt+gt*Dt,Dt));let St=!1;for(const X of rt){const ft=x.get(X)||[];for(const gt of ft)if(Math.sqrt(Math.pow(E-gt.x,2)+Math.pow(H-gt.y,2)+Math.pow(nt-gt.z,2))<Dt){St=!0;break}if(St)break}if(!St){const X=new J(E,H,nt);U.push(X),x.has(dt)||x.set(dt,[]),x.get(dt).push(X)}}return U}function Nt(){const mt=document.createElement("div");mt.style.position="absolute",mt.style.top="50%",mt.style.left="50%",mt.style.transform="translate(-50%, -50%)",mt.style.color="rgba(220, 220, 220, 0.9)",mt.style.fontSize="20px",mt.style.fontFamily="Arial, sans-serif",mt.textContent="Loading Iron Atom...",s.current.appendChild(mt),i=new jE,r=new _i(75,s.current.clientWidth/s.current.clientHeight,.01,1e3),r.position.set(2,1.5,.5),l=new VR({antialias:!0,alpha:!0,powerPreference:"high-performance"}),l.setSize(s.current.clientWidth,s.current.clientHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.setClearColor(3355443),l.sortObjects=!0,l.setScissorTest(!1),s.current.appendChild(l.domElement);const $=new ib(16777215,.9);i.add($);const U=new x0(16777215,.5);U.position.set(5,10,7.5),i.add(U);const Dt=new x0(16777215,.3);Dt.position.set(-5,-5,-7.5),i.add(Dt),i.userData.ambientLightColor=$.color.clone(),i.userData.directionalLight1={color:U.color.clone(),direction:U.position.clone().normalize()},i.userData.directionalLight2={color:Dt.color.clone(),direction:Dt.position.clone().normalize()},c=new XR(r,l.domElement),c.enableDamping=!0,c.dampingFactor=.05;const Pt=new Zo(.1,32,32),zt=new _0({color:16777184,emissive:3355392}),xt=new vi(Pt,zt);xt.visible=!0,i.add(xt);for(const E in R)f[E]=Vt(E),i.add(f[E]);mt&&mt.parentNode&&mt.parentNode.removeChild(mt),P(),Ct(),kt(h);const Ft=re(i);window.addEventListener("resize",fe);let Ut=0,w=function(){requestAnimationFrame(w),Ut++;const E=1/60;if(Ie(E),typeof Ft=="function"&&Ft(E),S+=E*_,D){const H=f[h];H.material&&H.material.uniforms&&(H.material.uniforms.u_absorptionStrength?(H.material.uniforms.u_absorptionStrength.value=B,H.material.uniforms.u_absorptionFrequency.value=V,H.material.uniforms.u_absorptionPhase.value=F):(H.material.uniforms.u_absorptionStrength={value:B},H.material.uniforms.u_absorptionFrequency={value:V},H.material.uniforms.u_absorptionPhase={value:F}))}for(const H in f)if(f[H].material&&f[H].material.uniforms){const nt=f[H].material.uniforms.u_opacity.value;(H===h||nt>.1||Ut%2===0)&&nt>.01&&(f[H].material.uniforms.u_time.value=S,f[H].material.uniforms.viewMatrix.value=r.matrixWorldInverse,f[H].material.uniforms.u_cameraPosition.value=r.position,f[H].material.uniforms.u_waveHeight&&(f[H].material.uniforms.u_waveHeight.value=O),f[H].material.uniforms.u_waveFrequency&&(f[H].material.uniforms.u_waveFrequency.value=L))}c.update(),l.render(i,r)};w()}function P(){if(p==="focused"){const mt=R[h].shell;for(const $ in f)f[$].material&&f[$].material.uniforms&&($===h?(f[$].material.uniforms.u_opacity.value=1,f[$].material.depthWrite=!0,f[$].material.transparent=!1,f[$].material.needsUpdate=!0):R[$].shell===mt?(f[$].material.uniforms.u_opacity.value=m*2,f[$].material.depthWrite=!1,f[$].material.transparent=!0,f[$].material.needsUpdate=!0):(f[$].material.uniforms.u_opacity.value=m,f[$].material.depthWrite=!1,f[$].material.transparent=!0,f[$].material.needsUpdate=!0))}else for(const mt in f)f[mt].material&&f[mt].material.uniforms&&(mt===h?(f[mt].material.uniforms.u_opacity.value=1,f[mt].material.depthWrite=!0,f[mt].material.transparent=!1):(f[mt].material.uniforms.u_opacity.value=.4,f[mt].material.depthWrite=!1,f[mt].material.transparent=!0),f[mt].material.needsUpdate=!0)}function at(){const mt=R[h].scale,$=mt<.5;if(p==="focused"&&$){for(const U in f)if(f[U].material&&f[U].material.uniforms){const Dt=R[U].scale;if(U===h)f[U].material.uniforms.u_opacity.value=1,f[U].material.uniforms.u_particleScale.value=R[U].particleScale*1.8,f[U].material.uniforms.u_cameraCullDistance.value=.3;else{const Pt=Dt/mt,zt=m/(Pt*Pt);f[U].material.uniforms.u_opacity.value=Math.max(.01,zt),f[U].material.uniforms.u_cameraCullDistance.value=1,f[U].material.uniforms.u_depthCullDistance.value=mt*2}f[U].material.needsUpdate=!0}}}function Ct(){const mt=t.current;mt.innerHTML="",mt.className="glass",mt.style.padding="20px",mt.style.borderRadius="12px",mt.style.boxShadow="0 4px 12px rgba(0, 0, 0, 0.3)",mt.style.width="320px",mt.style.color="rgba(220, 220, 220, 0.9)",mt.style.maxHeight="90vh",mt.style.overflowY="auto";const $=document.createElement("h3");$.textContent="Iron (Fe) Orbitals",$.style.margin="0 0 15px 0",$.style.textAlign="center",mt.appendChild($);const U=document.createElement("div");U.className="glass",U.style.padding="10px",U.style.borderRadius="8px",U.style.backgroundColor="rgba(50, 50, 50, 0.8)",U.style.marginBottom="15px";const Dt=document.createElement("button");Dt.textContent=p==="focused"?"Mode: Focused Shell":"Mode: Show All",Dt.style.width="100%",Dt.style.padding="8px",Dt.style.backgroundColor="rgba(70, 70, 100, 0.8)",Dt.style.border="1px solid rgba(100, 100, 150, 0.8)",Dt.style.borderRadius="4px",Dt.style.color="rgba(220, 220, 220, 0.9)",Dt.style.cursor="pointer",Dt.onclick=()=>{p=p==="focused"?"all":"focused",Dt.textContent=p==="focused"?"Mode: Focused Shell":"Mode: Show All",P()},U.appendChild(Dt);const Pt=document.createElement("button");Pt.textContent="Performance: Normal",Pt.style.width="100%",Pt.style.padding="8px",Pt.style.backgroundColor="rgba(70, 70, 70, 0.8)",Pt.style.border="1px solid rgba(100, 100, 100, 0.8)",Pt.style.borderRadius="4px",Pt.style.color="rgba(220, 220, 220, 0.9)",Pt.style.cursor="pointer",Pt.style.marginTop="10px",Pt.onclick=()=>{if(g=g==="normal"?"low":"normal",Pt.textContent=g==="normal"?"Performance: Normal":"Performance: Low",!R["1s"].originalParticleCount)for(const Jt in R)R[Jt].originalParticleCount=R[Jt].particleCount;const Ht=g==="low"?.5:1;for(const Jt in f)if(f[Jt]){i.remove(f[Jt]),f[Jt].geometry.dispose(),f[Jt].material.dispose();const Kt=R[Jt],he=Kt.shell==="M"?1e4:Kt.shell==="L"?4e3:3e3;Kt.particleCount=Math.max(he,Math.floor(Kt.originalParticleCount*Ht)),f[Jt]=Vt(Jt),i.add(f[Jt])}P()},U.appendChild(Pt),mt.appendChild(U);const zt=document.createElement("div");zt.style.marginBottom="15px";const xt={K:["1s"],L:["2s","2p1/2","2p3/2"],M:["3s","3p","3d"],N:["4s"]},Ft=document.createElement("div");Ft.style.fontSize="12px",Ft.style.color="rgba(180, 180, 180, 0.9)",Ft.style.marginBottom="10px",Ft.style.fontStyle="italic",Ft.textContent="Energy values show the binding energy (ionization potential) in eV",mt.appendChild(Ft);for(const[Ht,Jt]of Object.entries(xt)){const Kt=document.createElement("div");Kt.style.marginBottom="10px",Kt.style.borderRadius="4px",Kt.style.overflow="hidden";const he=document.createElement("div");he.style.padding="8px",he.style.backgroundColor="rgba(60, 60, 60, 0.8)",he.style.cursor="pointer",he.style.fontWeight="bold",he.textContent=`${Ht}-shell`;const W=document.createElement("div");W.style.display="none",W.style.backgroundColor="rgba(40, 40, 40, 0.8)",he.onclick=()=>{W.style.display=W.style.display==="none"?"block":"none"},Jt.forEach(Gt=>{const st=document.createElement("div");st.style.padding="8px 15px",st.style.cursor="pointer",st.style.display="flex",st.style.alignItems="center",st.style.justifyContent="space-between",st.className="orbital-btn";const _t=document.createElement("span");_t.textContent=R[Gt].name;const It=document.createElement("span");It.style.fontSize="12px",It.style.color="rgba(150, 150, 150, 0.9)",It.textContent=`${R[Gt].energy} eV`,st.appendChild(_t),st.appendChild(It),st.onclick=()=>{kt(Gt),document.querySelectorAll(".orbital-btn").forEach(Be=>{Be.style.backgroundColor=""}),st.style.backgroundColor="rgba(70, 70, 100, 0.8)";const Bt=document.getElementById("photonEnergyInput"),te=document.getElementById("photonEnergyDisplay"),ye=R[Gt].energy;Bt.value=ye,Lt(ye),te.textContent=`Wavelength: ${(1239.84/ye).toFixed(2)} nm`},Gt===h&&(st.style.backgroundColor="rgba(70, 70, 100, 0.8)",W.style.display="block"),W.appendChild(st)}),Kt.appendChild(he),Kt.appendChild(W),zt.appendChild(Kt)}mt.appendChild(zt);const Ut=document.createElement("div");Ut.className="glass",Ut.style.padding="15px",Ut.style.borderRadius="8px",Ut.style.backgroundColor="rgba(50, 50, 50, 0.8)",Ut.style.marginBottom="15px";const w=document.createElement("label");w.textContent="Secondary Opacity:",w.style.fontWeight="bold",w.style.display="block",w.style.marginBottom="10px";const E=document.createElement("input");E.type="range",E.min="0",E.max="30",E.value="5",E.style.width="100%",E.style.accentColor="rgb(220, 40, 40)";const H=document.createElement("span");H.style.fontSize="12px",H.textContent="5%",E.oninput=Ht=>{m=Ht.target.value/100,H.textContent=`${Ht.target.value}%`,P()},Ut.appendChild(w),Ut.appendChild(E),Ut.appendChild(H),mt.appendChild(Ut);const nt=document.createElement("div");nt.className="glass",nt.style.padding="15px",nt.style.borderRadius="8px",nt.style.backgroundColor="rgba(50, 50, 50, 0.8)",nt.style.marginBottom="15px";const dt=document.createElement("label");dt.textContent="Photon Energy:",dt.style.fontWeight="bold",dt.style.display="block",dt.style.marginBottom="10px";const rt=document.createElement("input");rt.type="number",rt.id="photonEnergyInput",rt.value="52",rt.style.width="60%",rt.style.padding="4px",rt.style.marginRight="5px";const St=document.createElement("span");St.textContent="eV";const X=document.createElement("div");X.style.backgroundColor="rgba(40, 40, 40, 0.8)",X.style.padding="5px",X.style.borderRadius="4px",X.style.marginTop="10px",X.style.fontSize="13px",X.style.color="rgba(200, 200, 200, 0.8)",X.id="photonEnergyDisplay",X.textContent=`Wavelength: ${(1239.84/100).toFixed(2)} nm`,rt.oninput=Ht=>{const Jt=parseFloat(Ht.target.value)||100;Lt(Jt),X.textContent=`Wavelength: ${(1239.84/Jt).toFixed(2)} nm`},nt.appendChild(dt),nt.appendChild(rt),nt.appendChild(St),nt.appendChild(X),mt.appendChild(nt);const ft=document.createElement("div");ft.className="glass",ft.style.padding="15px",ft.style.borderRadius="8px",ft.style.backgroundColor="rgba(50, 50, 50, 0.8)",ft.style.marginBottom="15px";const gt=document.createElement("label");gt.textContent="Cross-Section View:",gt.style.fontWeight="bold",gt.style.display="block",gt.style.marginBottom="10px";const bt=document.createElement("input");bt.type="range",bt.id="crossSectionSlider",bt.min="0",bt.max="10",bt.value="10",bt.step="0.1",bt.style.width="100%",bt.style.accentColor="rgb(220, 40, 40)",bt.addEventListener("input",Ht=>{const Jt=parseFloat(Ht.target.value);for(const Kt in f)f[Kt].material&&f[Kt].material.uniforms&&(f[Kt].material.uniforms.u_crossSectionX.value=Jt)}),ft.appendChild(gt),ft.appendChild(bt);const Wt=document.createElement("div");Wt.style.display="flex",Wt.style.justifyContent="space-between",Wt.style.fontSize="12px",Wt.innerHTML="<span>50%</span><span>75%</span><span>100%</span>",ft.appendChild(Wt),mt.appendChild(ft);const $t=document.createElement("div");$t.style.marginTop="15px";const jt=document.createElement("button");jt.id="emitWaveBtn",jt.textContent="Emit Photon Wave",jt.className="w-full p-2 rounded border transition-all hover:bg-opacity-90",jt.style.backgroundColor="rgb(220, 40, 40)",jt.style.borderColor="rgb(220, 40, 40)",jt.style.color="rgba(220, 220, 220, 0.9)",$t.appendChild(jt),mt.appendChild($t)}function Lt(mt){mt>5e3?T=.15:mt>500?T=.3+(5e3-mt)/1e4:mt>50?T=.5+(500-mt)/500:T=1+(50-mt)/50,T*=.8}function tt(mt,$,U,Dt){const Pt=mt.charAt(1),zt=$.charAt(1);if(Pt==="s"&&zt==="s")return 0;if(Pt==="p"&&zt==="s"||Pt==="s"&&zt==="p")return Math.pow(Math.sin(U),2);if(Pt==="d"&&zt==="p"||Pt==="p"&&zt==="d")return Math.pow(Math.sin(U),2)*Math.pow(Math.cos(2*Dt),2);if(Pt==="d"&&zt==="s"){const xt=Math.cos(U);return Math.pow(3*xt*xt-1,2)*.25}return 1}let Et=null,wt=null;function Vt(mt){const $=R[mt],U=$.scale,Dt=$.generatePoints($.particleCount||y,U),Pt=new Zo(v*.9,6,4),zt=mt===h,xt=new Sa({vertexShader:q,fragmentShader:N,transparent:!zt,depthWrite:zt,depthTest:!0,blending:Ur,side:xa,uniforms:{baseColor:{value:new Te($.color)},lowDensityColor:{value:new Te($.lowDensityColor)},midDensityColor:{value:new Te($.midDensityColor)},highDensityColor:{value:new Te($.highDensityColor)},ambientLightColor:{value:i.userData.ambientLightColor},directionalLightColor1:{value:i.userData.directionalLight1.color},directionalLightDirection1:{value:i.userData.directionalLight1.direction},directionalLightColor2:{value:i.userData.directionalLight2.color},directionalLightDirection2:{value:i.userData.directionalLight2.direction},orbitalScale:{value:U},u_time:{value:0},u_maxSpeedAtCenter:{value:$.rotationSpeed||.3},u_minSpeedAtEdge:{value:.005},u_exponentialFalloffRate:{value:5},u_crossSectionX:{value:10},viewMatrix:{value:r.matrixWorldInverse},u_waveHeight:{value:O},u_waveFrequency:{value:L},u_absorptionStrength:{value:0},u_absorptionFrequency:{value:.3},u_opacity:{value:.05},u_absorptionPhase:{value:0},u_particleScale:{value:$.particleScale||1},u_isWireframe:{value:!1},u_minSpeedAtEdge:{value:$.shell==="K"?.01:.005},u_exponentialFalloffRate:{value:$.shell==="K"?8:$.shell==="L"?6:4},u_cameraPosition:{value:r.position},u_cameraCullDistance:{value:.2},u_depthCullDistance:{value:U*3},u_projectionMatrix:{value:r.projectionMatrix},u_frustumPadding:{value:1.5},u_isPrimaryOrbital:{value:mt===h},u_orbitalScale:{value:U},u_overlapCullDistance:{value:R[mt].scale*.7}}}),Ft=new g0(Pt,xt,Dt.length);Ft.renderOrder=$.renderOrder||0;const Ut=new Float32Array(Dt.length);for(let E=0;E<Dt.length;E++)Ut[E]=Math.random()*Math.PI*2;Ft.geometry.setAttribute("a_initialPhase",new jo(Ut,1));const w=new Tn;for(let E=0;E<Dt.length;E++)w.position.set(Dt[E].x,Dt[E].y,Dt[E].z),w.updateMatrix(),Ft.setMatrixAt(E,w.matrix);return Ft.instanceMatrix.needsUpdate=!0,Ft}function kt(mt){for(const $ in f)if(f[$]&&f[$].material&&f[$].material.uniforms){const U=R[$];f[$].material.uniforms.u_particleScale.value=U.particleScale||1,f[$].material.uniforms.u_cameraCullDistance.value=.2,f[$].material.uniforms.u_depthCullDistance.value=U.scale*3,i.userData.directionalLight1&&i.userData.directionalLight2&&(f[$].material.uniforms.directionalLightColor1.value.copy(i.userData.directionalLight1.color),f[$].material.uniforms.directionalLightColor2.value.copy(i.userData.directionalLight2.color))}for(const $ in f)f[$]&&(p==="focused"?($===mt?(f[$].visible=!0,f[$].material.uniforms.u_opacity.value=1,f[$].material.depthWrite=!0,f[$].material.transparent=!1,f[$].material.needsUpdate=!0):(f[$].visible=!0,f[$].material.uniforms.u_opacity.value=m,f[$].material.depthWrite=!1,f[$].material.transparent=!0,f[$].material.needsUpdate=!0,f[$].material.uniforms.directionalLightColor1.value.copy(i.userData.directionalLight1.color),f[$].material.uniforms.directionalLightColor2.value.copy(i.userData.directionalLight2.color)),f[$].material.uniforms.u_isPrimaryOrbital.value=$===mt,f[$].material.uniforms.u_overlapCullDistance.value=$===mt?0:R[mt].scale*.5):(f[$].visible=!0,$===mt?(f[$].material.uniforms.u_opacity.value=1,f[$].material.depthWrite=!0,f[$].material.transparent=!1):(f[$].material.uniforms.u_opacity.value=.4,f[$].material.depthWrite=!1,f[$].material.transparent=!0),f[$].material.needsUpdate=!0,f[$].material.uniforms.directionalLightColor1.value.copy(i.userData.directionalLight1.color),f[$].material.uniforms.directionalLightColor2.value.copy(i.userData.directionalLight2.color)));if(h=mt,R[mt].cameraPosition){let $=function(){const xt=performance.now()-zt,Ft=Math.min(xt/Pt,1),Ut=1-Math.pow(1-Ft,3);r.position.lerpVectors(Dt,U,Ut),Ft<1&&requestAnimationFrame($)};const U=R[mt].cameraPosition,Dt=r.position.clone(),Pt=1e3,zt=performance.now();$()}at()}function fe(){s.current&&(r.aspect=s.current.clientWidth/s.current.clientHeight,r.updateProjectionMatrix(),l.setSize(s.current.clientWidth,s.current.clientHeight))}function re(mt){const $={waveSpeed:1.8,waveHeight:1.5,waveFrequency:.3,wavelength:T};let U=!1,Dt=0,Pt=-10,zt=!1,xt=0;const Ft=100,Ut=.15,w=Ft*Ft,E=new Te(49151),H=.3,nt=0,dt=new Zo(.12,8,6),rt=new _0({color:E,emissive:E.clone().multiplyScalar(.3),transparent:!0,opacity:.8}),St=new g0(dt,rt,w),X=new Float32Array(w);St.geometry.setAttribute("opacity",new jo(X,1)),St.renderOrder=-1e3,St.visible=!0,mt.add(St),rt.transparent=!0,rt.opacity=.8,St.instanceColor=new jo(new Float32Array(w*3),3);const ft=new Tn,gt=0;for(let jt=0;jt<Ft;jt++)for(let Ht=0;Ht<Ft;Ht++){const Jt=jt*Ft+Ht,Kt=(jt-Ft/2)*Ut,he=(Ht-Ft/2)*Ut+gt;ft.position.set(Kt,nt,he),ft.scale.set(H,H,H),ft.updateMatrix(),St.setMatrixAt(Jt,ft.matrix),St.setColorAt(Jt,E)}St.instanceMatrix.needsUpdate=!0,St.instanceColor.needsUpdate=!0;function bt(){U=!0,zt=!1,Dt=0,xt=0,Pt=-10,D=!1,B=0;const jt=document.getElementById("photonEnergyInput"),Ht=parseFloat(jt.value)||100;Lt(Ht),$.wavelength=T,$.waveFrequency=1/T}function Wt(jt){const Ht=document.getElementById("photonEnergyInput"),Jt=parseFloat(Ht.value)||100;if(U&&!zt){Dt+=jt*$.waveSpeed*.3,Pt+=jt*$.waveSpeed*.8,Pt>25&&(U=!1);const Gt=R[h].scale,st=Math.abs(Pt);if(st<Gt*1.5){const _t=document.getElementById("photonEnergyInput"),It=parseFloat(_t.value)||100,Bt=R[h].energy,te=Math.abs(It-Bt)/Bt,ye=Math.exp(-Math.pow(te,2)*5),Be=st/(Gt*1.5),dn=Math.pow(1-Math.min(Be,1),2)*ye*.8;B=B*.95+dn*.05;const en=It>5e3?.15:.3;if(ye>.5&&st<Gt*.8&&B>en){if(!zt){zt=!0,xt=0,D=!0,V=.8/T,F=Dt*6.28,Et=h;const Ze=h.charAt(1);let qe=null;Ze==="s"?qe=["2p1/2","2p3/2","3p"].find(xe=>R[xe]&&R[xe].energy<R[h].energy):Ze==="p"?qe=["1s","2s","3s","3d"].find(xe=>R[xe]&&R[xe].energy<R[h].energy):Ze==="d"&&(qe=["2p1/2","2p3/2","3p"].find(xe=>R[xe]&&R[xe].energy<R[h].energy)),wt=qe||"2p1/2"}}else B>.01&&(D=!0,V=.8/T,F=Dt*6.28)}else B*=.96,B<.01&&(D=!1,B=0)}zt&&(xt+=jt);const Kt=r.position.length(),he=Math.min(1,5/Kt),W=Math.max(1,Math.floor(1/he));for(let Gt=0;Gt<Ft;Gt+=W)for(let st=0;st<Ft;st+=W){const _t=Gt*Ft+st,It=(Gt-Ft/2)*Ut,Bt=(st-Ft/2)*Ut+gt;let te=Math.sin(S*.3+It*.1+Bt*.1)*.01,ye=.4;if(U&&!zt){const xe=It,An=Bt-Pt,si=Math.sqrt(xe*xe+An*An),yi=5*T,xi=10*T;if(si<xi&&si<yi){const Yn=1-si/yi,jn=$.waveHeight*T*Math.pow(Yn,2);jn>te&&(te=jn,ye=.4+Math.min(.6,te/($.waveHeight*T)*.6))}}if(zt&&B>.1){const xe=Math.sqrt(It*It+Bt*Bt),An=Math.sqrt(It*It+Bt*Bt),si=Math.atan2(An,0),yi=Math.atan2(Bt,It),xi=tt(Et,wt,si,yi),Yn=Jt>5e3?2:1,jn=T*1.1,Si=1.2*Yn,Zn=xt*Si*2,Ni=Math.abs(xe-Zn),Mi=jn*1.5;if(Ni<Mi&&Zn<20){const nn=1-Ni/Mi,Fr=Math.max(.3,1/(1+Zn*.1)),ir=xi,oi=Math.pow(nn,1.5)*B*Fr*ir,C=$.waveHeight*.6*oi*Yn*(.3+.7*ir);C>te&&(te=C,ye=.3+Math.min(.7,oi*1.2))}}ft.position.set(It,te,Bt);const Be=H+te*.7;ft.scale.set(Be,Be,Be),ft.updateMatrix(),St.setMatrixAt(_t,ft.matrix);const Ae=E.clone().multiplyScalar(ye);let dn=!1;if(U){const xe=It,An=Bt-Pt,si=Math.sqrt(xe*xe+An*An),yi=12*T;si<yi&&(dn=!0)}const en=It,Ze=Bt,qe=new J(en,0,Ze);if(qe.project(r),!(Math.abs(qe.x)>1.5||Math.abs(qe.y)>1.5)){if(zt&&B>.1){const xe=Math.sqrt(It*It+Bt*Bt),An=xt*1.2*2;Math.abs(xe-An)<2&&(dn=!0)}if(dn&&te>.01){ft.position.set(It,te,Bt);const xe=H+te*.7;ft.scale.set(xe,xe,xe),St.setColorAt(_t,Ae)}else ft.position.set(It,0,Bt),ft.scale.set(0,0,0),St.setColorAt(_t,new Te(0,0,0));ft.updateMatrix(),St.setMatrixAt(_t,ft.matrix)}}zt&&xt>10&&(U=!1,zt=!1,B=0,D=!1),St.instanceMatrix.needsUpdate=!0,St.instanceColor.needsUpdate=!0}const $t=document.getElementById("emitWaveBtn");return $t&&$t.addEventListener("click",bt),Wt}function Ie(mt){for(let $=b.length-1;$>=0;$--){const U=b[$];if(U.material&&U.material.uniforms){const Dt=performance.now()*.001-U.userData.startTime;U.material.uniforms.time.value=Dt;const Pt=.3;U.position.x+=Pt*mt,U.userData.totalDistance+=Pt*mt;const zt=U.userData.wavelength*1.2;U.userData.totalDistance>zt&&(i.remove(U),b.splice($,1))}}}return Nt(),()=>{window.removeEventListener("resize",fe),l&&(l.dispose(),s.current&&s.current.contains(l.domElement)&&s.current.removeChild(l.domElement))}},[]),ue.jsxs("div",{className:"quantum-container",style:{position:"relative",width:"100%",height:"100vh"},children:[ue.jsx("div",{ref:s,className:"renderer-container",style:{width:"100%",height:"100%"}}),ue.jsx("div",{ref:t,className:"gui-container",style:{position:"absolute",top:"20px",left:"20px",zIndex:10,backgroundColor:"rgba(40,40,40,0.85)",padding:"15px",width:"280px"}})]})}function aC(){return ue.jsx(yM,{children:ue.jsxs(ZS,{children:[ue.jsx(jh,{path:"/",element:ue.jsx(DM,{})}),ue.jsx(jh,{path:"/atom",element:ue.jsx(iC,{})})]})})}iS.createRoot(document.getElementById("root")).render(ue.jsx(Zx.StrictMode,{children:ue.jsx(aC,{})}));
