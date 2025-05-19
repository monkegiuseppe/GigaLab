(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function wv(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Qf={exports:{}},To={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m_;function TS(){if(m_)return To;m_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var g_;function bS(){return g_||(g_=1,Qf.exports=TS()),Qf.exports}var Gt=bS(),Jf={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var __;function AS(){if(__)return re;__=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(N,$,xt){this.props=N,this.context=$,this.refs=A,this.updater=xt||y}S.prototype.isReactComponent={},S.prototype.setState=function(N,$){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,$,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function _(){}_.prototype=S.prototype;function O(N,$,xt){this.props=N,this.context=$,this.refs=A,this.updater=xt||y}var D=O.prototype=new _;D.constructor=O,E(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},H=Object.prototype.hasOwnProperty;function z(N,$,xt,yt,Q,pt){return xt=pt.ref,{$$typeof:s,type:N,key:$,ref:xt!==void 0?xt:null,props:pt}}function W(N,$){return z(N.type,$,void 0,void 0,void 0,N.props)}function U(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function C(N){var $={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(xt){return $[xt]})}var V=/\/+/g;function lt(N,$){return typeof N=="object"&&N!==null&&N.key!=null?C(""+N.key):$.toString(36)}function st(){}function vt(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(st,st):(N.status="pending",N.then(function($){N.status==="pending"&&(N.status="fulfilled",N.value=$)},function($){N.status==="pending"&&(N.status="rejected",N.reason=$)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function ht(N,$,xt,yt,Q){var pt=typeof N;(pt==="undefined"||pt==="boolean")&&(N=null);var St=!1;if(N===null)St=!0;else switch(pt){case"bigint":case"string":case"number":St=!0;break;case"object":switch(N.$$typeof){case s:case t:St=!0;break;case g:return St=N._init,ht(St(N._payload),$,xt,yt,Q)}}if(St)return Q=Q(N),St=yt===""?"."+lt(N,0):yt,w(Q)?(xt="",St!=null&&(xt=St.replace(V,"$&/")+"/"),ht(Q,$,xt,"",function(oe){return oe})):Q!=null&&(U(Q)&&(Q=W(Q,xt+(Q.key==null||N&&N.key===Q.key?"":(""+Q.key).replace(V,"$&/")+"/")+St)),$.push(Q)),1;St=0;var At=yt===""?".":yt+":";if(w(N))for(var Ut=0;Ut<N.length;Ut++)yt=N[Ut],pt=At+lt(yt,Ut),St+=ht(yt,$,xt,pt,Q);else if(Ut=x(N),typeof Ut=="function")for(N=Ut.call(N),Ut=0;!(yt=N.next()).done;)yt=yt.value,pt=At+lt(yt,Ut++),St+=ht(yt,$,xt,pt,Q);else if(pt==="object"){if(typeof N.then=="function")return ht(vt(N),$,xt,yt,Q);throw $=String(N),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return St}function B(N,$,xt){if(N==null)return N;var yt=[],Q=0;return ht(N,yt,"","",function(pt){return $.call(xt,pt,Q++)}),yt}function Z(N){if(N._status===-1){var $=N._result;$=$(),$.then(function(xt){(N._status===0||N._status===-1)&&(N._status=1,N._result=xt)},function(xt){(N._status===0||N._status===-1)&&(N._status=2,N._result=xt)}),N._status===-1&&(N._status=0,N._result=$)}if(N._status===1)return N._result.default;throw N._result}var Y=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)};function Mt(){}return re.Children={map:B,forEach:function(N,$,xt){B(N,function(){$.apply(this,arguments)},xt)},count:function(N){var $=0;return B(N,function(){$++}),$},toArray:function(N){return B(N,function($){return $})||[]},only:function(N){if(!U(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},re.Component=S,re.Fragment=i,re.Profiler=l,re.PureComponent=O,re.StrictMode=r,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return I.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cloneElement=function(N,$,xt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var yt=E({},N.props),Q=N.key,pt=void 0;if($!=null)for(St in $.ref!==void 0&&(pt=void 0),$.key!==void 0&&(Q=""+$.key),$)!H.call($,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&$.ref===void 0||(yt[St]=$[St]);var St=arguments.length-2;if(St===1)yt.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];yt.children=At}return z(N.type,Q,void 0,void 0,pt,yt)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:u,_context:N},N},re.createElement=function(N,$,xt){var yt,Q={},pt=null;if($!=null)for(yt in $.key!==void 0&&(pt=""+$.key),$)H.call($,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Q[yt]=$[yt]);var St=arguments.length-2;if(St===1)Q.children=xt;else if(1<St){for(var At=Array(St),Ut=0;Ut<St;Ut++)At[Ut]=arguments[Ut+2];Q.children=At}if(N&&N.defaultProps)for(yt in St=N.defaultProps,St)Q[yt]===void 0&&(Q[yt]=St[yt]);return z(N,pt,void 0,void 0,null,Q)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=U,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:Z}},re.memo=function(N,$){return{$$typeof:m,type:N,compare:$===void 0?null:$}},re.startTransition=function(N){var $=I.T,xt={};I.T=xt;try{var yt=N(),Q=I.S;Q!==null&&Q(xt,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(Mt,Y)}catch(pt){Y(pt)}finally{I.T=$}},re.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},re.use=function(N){return I.H.use(N)},re.useActionState=function(N,$,xt){return I.H.useActionState(N,$,xt)},re.useCallback=function(N,$){return I.H.useCallback(N,$)},re.useContext=function(N){return I.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,$){return I.H.useDeferredValue(N,$)},re.useEffect=function(N,$,xt){var yt=I.H;if(typeof xt=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return yt.useEffect(N,$)},re.useId=function(){return I.H.useId()},re.useImperativeHandle=function(N,$,xt){return I.H.useImperativeHandle(N,$,xt)},re.useInsertionEffect=function(N,$){return I.H.useInsertionEffect(N,$)},re.useLayoutEffect=function(N,$){return I.H.useLayoutEffect(N,$)},re.useMemo=function(N,$){return I.H.useMemo(N,$)},re.useOptimistic=function(N,$){return I.H.useOptimistic(N,$)},re.useReducer=function(N,$,xt){return I.H.useReducer(N,$,xt)},re.useRef=function(N){return I.H.useRef(N)},re.useState=function(N){return I.H.useState(N)},re.useSyncExternalStore=function(N,$,xt){return I.H.useSyncExternalStore(N,$,xt)},re.useTransition=function(){return I.H.useTransition()},re.version="19.1.0",re}var v_;function Ad(){return v_||(v_=1,Jf.exports=AS()),Jf.exports}var dt=Ad();const RS=wv(dt);var $f={exports:{}},bo={},th={exports:{}},eh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x_;function CS(){return x_||(x_=1,function(s){function t(B,Z){var Y=B.length;B.push(Z);t:for(;0<Y;){var Mt=Y-1>>>1,N=B[Mt];if(0<l(N,Z))B[Mt]=Z,B[Y]=N,Y=Mt;else break t}}function i(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Z=B[0],Y=B.pop();if(Y!==Z){B[0]=Y;t:for(var Mt=0,N=B.length,$=N>>>1;Mt<$;){var xt=2*(Mt+1)-1,yt=B[xt],Q=xt+1,pt=B[Q];if(0>l(yt,Y))Q<N&&0>l(pt,yt)?(B[Mt]=pt,B[Q]=Y,Mt=Q):(B[Mt]=yt,B[xt]=Y,Mt=xt);else if(Q<N&&0>l(pt,Y))B[Mt]=pt,B[Q]=Y,Mt=Q;else break t}}return Z}function l(B,Z){var Y=B.sortIndex-Z.sortIndex;return Y!==0?Y:B.id-Z.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,y=!1,E=!1,A=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function w(B){for(var Z=i(m);Z!==null;){if(Z.callback===null)r(m);else if(Z.startTime<=B)r(m),Z.sortIndex=Z.expirationTime,t(p,Z);else break;Z=i(m)}}function I(B){if(A=!1,w(B),!E)if(i(p)!==null)E=!0,H||(H=!0,lt());else{var Z=i(m);Z!==null&&ht(I,Z.startTime-B)}}var H=!1,z=-1,W=5,U=-1;function C(){return S?!0:!(s.unstable_now()-U<W)}function V(){if(S=!1,H){var B=s.unstable_now();U=B;var Z=!0;try{t:{E=!1,A&&(A=!1,O(z),z=-1),y=!0;var Y=x;try{e:{for(w(B),v=i(p);v!==null&&!(v.expirationTime>B&&C());){var Mt=v.callback;if(typeof Mt=="function"){v.callback=null,x=v.priorityLevel;var N=Mt(v.expirationTime<=B);if(B=s.unstable_now(),typeof N=="function"){v.callback=N,w(B),Z=!0;break e}v===i(p)&&r(p),w(B)}else r(p);v=i(p)}if(v!==null)Z=!0;else{var $=i(m);$!==null&&ht(I,$.startTime-B),Z=!1}}break t}finally{v=null,x=Y,y=!1}Z=void 0}}finally{Z?lt():H=!1}}}var lt;if(typeof D=="function")lt=function(){D(V)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,vt=st.port2;st.port1.onmessage=V,lt=function(){vt.postMessage(null)}}else lt=function(){_(V,0)};function ht(B,Z){z=_(function(){B(s.unstable_now())},Z)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var Z=3;break;default:Z=x}var Y=x;x=Z;try{return B()}finally{x=Y}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(B,Z){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Y=x;x=B;try{return Z()}finally{x=Y}},s.unstable_scheduleCallback=function(B,Z,Y){var Mt=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?Mt+Y:Mt):Y=Mt,B){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=Y+N,B={id:g++,callback:Z,priorityLevel:B,startTime:Y,expirationTime:N,sortIndex:-1},Y>Mt?(B.sortIndex=Y,t(m,B),i(p)===null&&B===i(m)&&(A?(O(z),z=-1):A=!0,ht(I,Y-Mt))):(B.sortIndex=N,t(p,B),E||y||(E=!0,H||(H=!0,lt()))),B},s.unstable_shouldYield=C,s.unstable_wrapCallback=function(B){var Z=x;return function(){var Y=x;x=Z;try{return B.apply(this,arguments)}finally{x=Y}}}}(eh)),eh}var S_;function wS(){return S_||(S_=1,th.exports=CS()),th.exports}var nh={exports:{}},Rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function DS(){if(y_)return Rn;y_=1;var s=Ad();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Rn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(p,m,null,g)},Rn.flushSync=function(p){var m=f.T,g=r.p;try{if(f.T=null,r.p=2,p)return p()}finally{f.T=m,r.p=g,r.d.f()}},Rn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Rn.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Rn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Rn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Rn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Rn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Rn.requestFormReset=function(p){r.d.r(p)},Rn.unstable_batchedUpdates=function(p,m){return p(m)},Rn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Rn.version="19.1.0",Rn}var M_;function US(){if(M_)return nh.exports;M_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),nh.exports=DS(),nh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function LS(){if(E_)return bo;E_=1;var s=wS(),t=Ad(),i=US();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return d(c),e;if(h===o)return d(c),n;h=h.sibling}throw Error(r(188))}if(a.return!==o.return)a=c,o=h;else{for(var M=!1,T=c.child;T;){if(T===a){M=!0,a=c,o=h;break}if(T===o){M=!0,o=c,a=h;break}T=T.sibling}if(!M){for(T=h.child;T;){if(T===a){M=!0,a=h,o=c;break}if(T===o){M=!0,o=h,a=c;break}T=T.sibling}if(!M)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function m(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=m(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),_=Symbol.for("react.provider"),O=Symbol.for("react.consumer"),D=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function lt(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function vt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case S:return"Profiler";case A:return"StrictMode";case I:return"Suspense";case H:return"SuspenseList";case U:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case y:return"Portal";case D:return(e.displayName||"Context")+".Provider";case O:return(e._context.displayName||"Context")+".Consumer";case w:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case z:return n=e.displayName||null,n!==null?n:vt(e.type)||"Memo";case W:n=e._payload,e=e._init;try{return vt(e(n))}catch{}}return null}var ht=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},Mt=[],N=-1;function $(e){return{current:e}}function xt(e){0>N||(e.current=Mt[N],Mt[N]=null,N--)}function yt(e,n){N++,Mt[N]=e.current,e.current=n}var Q=$(null),pt=$(null),St=$(null),At=$(null);function Ut(e,n){switch(yt(St,n),yt(pt,e),yt(Q,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?kg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=kg(n),e=Xg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}xt(Q),yt(Q,e)}function oe(){xt(Q),xt(pt),xt(St)}function Kt(e){e.memoizedState!==null&&yt(At,e);var n=Q.current,a=Xg(n,e.type);n!==a&&(yt(pt,e),yt(Q,a))}function He(e){pt.current===e&&(xt(Q),xt(pt)),At.current===e&&(xt(At),xo._currentValue=Y)}var Be=Object.prototype.hasOwnProperty,fe=s.unstable_scheduleCallback,F=s.unstable_cancelCallback,Ln=s.unstable_shouldYield,ge=s.unstable_requestPaint,ie=s.unstable_now,Wt=s.unstable_getCurrentPriorityLevel,De=s.unstable_ImmediatePriority,Vt=s.unstable_UserBlockingPriority,L=s.unstable_NormalPriority,b=s.unstable_LowPriority,tt=s.unstable_IdlePriority,mt=s.log,Et=s.unstable_setDisableYieldValue,ct=null,Ot=null;function Rt(e){if(typeof mt=="function"&&Et(e),Ot&&typeof Ot.setStrictMode=="function")try{Ot.setStrictMode(ct,e)}catch{}}var Ht=Math.clz32?Math.clz32:It,$t=Math.log,bt=Math.LN2;function It(e){return e>>>=0,e===0?32:31-($t(e)/bt|0)|0}var jt=256,Qt=4194304;function Pt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ue(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?c=Pt(o):(M&=T,M!==0?c=Pt(M):a||(a=T&~e,a!==0&&(c=Pt(a))))):(T=o&~h,T!==0?c=Pt(T):M!==0?c=Pt(M):a||(a=o&~e,a!==0&&(c=Pt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function ne(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Ue(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function k(){var e=jt;return jt<<=1,(jt&4194048)===0&&(jt=256),e}function Lt(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function ot(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function gt(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bt(e,n,a,o,c,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,P=e.expirationTimes,J=e.hiddenUpdates;for(a=M&~a;0<a;){var ut=31-Ht(a),_t=1<<ut;T[ut]=0,P[ut]=-1;var et=J[ut];if(et!==null)for(J[ut]=null,ut=0;ut<et.length;ut++){var nt=et[ut];nt!==null&&(nt.lane&=-536870913)}a&=~_t}o!==0&&Nt(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function Nt(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ht(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function ae(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ht(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ge(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function en(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Me(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:u_(e.type))}function Vn(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var dn=Math.random().toString(36).slice(2),on="__reactFiber$"+dn,xn="__reactProps$"+dn,Nn="__reactContainer$"+dn,ja="__reactEvents$"+dn,Zo="__reactListeners$"+dn,Ko="__reactHandles$"+dn,Za="__reactResources$"+dn,fa="__reactMarker$"+dn;function ha(e){delete e[on],delete e[xn],delete e[ja],delete e[Zo],delete e[Ko]}function Ui(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Nn]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=jg(e);e!==null;){if(a=e[on])return a;e=jg(e)}return n}e=a,a=e.parentNode}return null}function Li(e){if(e=e[on]||e[Nn]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function Ka(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function da(e){var n=e[Za];return n||(n=e[Za]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function nn(e){e[fa]=!0}var Qo=new Set,Jo={};function Ni(e,n){R(e,n),R(e+"Capture",n)}function R(e,n){for(Jo[e]=n,e=0;e<n.length;e++)Qo.add(n[e])}var q=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},at={};function j(e){return Be.call(at,e)?!0:Be.call(it,e)?!1:q.test(e)?at[e]=!0:(it[e]=!0,!1)}function Tt(e,n,a){if(j(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}var zt,te;function qt(e){if(zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);zt=n&&n[1]||"",te=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+zt+e+te}var Xt=!1;function de(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(nt){var et=nt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(nt){et=nt}e.call(_t.prototype)}}else{try{throw Error()}catch(nt){et=nt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(nt){if(nt&&et&&typeof nt.stack=="string")return[nt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],T=h[1];if(M&&T){var P=M.split(`
`),J=T.split(`
`);for(c=o=0;o<P.length&&!P[o].includes("DetermineComponentFrameRoot");)o++;for(;c<J.length&&!J[c].includes("DetermineComponentFrameRoot");)c++;if(o===P.length||c===J.length)for(o=P.length-1,c=J.length-1;1<=o&&0<=c&&P[o]!==J[c];)c--;for(;1<=o&&0<=c;o--,c--)if(P[o]!==J[c]){if(o!==1||c!==1)do if(o--,c--,0>c||P[o]!==J[c]){var ut=`
`+P[o].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=o&&0<=c);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?qt(a):""}function Ee(e){switch(e.tag){case 26:case 27:case 5:return qt(e.type);case 16:return qt("Lazy");case 13:return qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return de(e.type,!1);case 11:return de(e.type.render,!1);case 1:return de(e.type,!0);case 31:return qt("Activity");default:return""}}function We(e){try{var n="";do n+=Ee(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function _e(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ve(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yt(e){var n=ve(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),o=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,h=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(M){o=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(M){o=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function je(e){e._valueTracker||(e._valueTracker=Yt(e))}function ye(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=ve(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Tn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var pa=/[\n"\\]/g;function Ve(e){return e.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,o,c,h,M,T){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+_e(n)):e.value!==""+_e(n)&&(e.value=""+_e(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?bn(e,M,_e(n)):a!=null?bn(e,M,_e(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+_e(T):e.removeAttribute("name")}function ze(e,n,a,o,c,h,M,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null))return;a=a!=null?""+_e(a):"",n=n!=null?""+_e(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M)}function bn(e,n,a){n==="number"&&Tn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ln(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+_e(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function pn(e,n,a){if(n!=null&&(n=""+_e(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+_e(a):""}function Sn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ht(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=_e(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function xi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&kd(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&kd(e,h,n[h])}function Zu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $o(e){return E0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Ku=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Wd(e){var n=Li(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ve(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[xn]||null;if(!c)throw Error(r(90));Oi(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&ye(o)}break t;case"textarea":pn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ln(e,!!a.multiple,n,!1)}}}var Ju=!1;function qd(e,n,a){if(Ju)return e(n,a);Ju=!0;try{var o=e(n);return o}finally{if(Ju=!1,(wr!==null||Dr!==null)&&(Il(),wr&&(n=wr,e=Dr,Dr=wr=null,Wd(n),e)))for(n=0;n<e.length;n++)Wd(e[n])}}function Us(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$u=!1;if(Bi)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){$u=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{$u=!1}var ma=null,tc=null,tl=null;function Yd(){if(tl)return tl;var e,n=tc,a=n.length,o,c="value"in ma?ma.value:ma.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===c[h-o];o++);return tl=c.slice(e,1<o?1-o:void 0)}function el(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nl(){return!0}function jd(){return!1}function On(e){function n(a,o,c,h,M){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?nl:jd,this.isPropagationStopped=jd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),n}var Qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},il=On(Qa),Ns=g({},Qa,{view:0,detail:0}),T0=On(Ns),ec,nc,Os,al=g({},Ns,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ac,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Os&&(Os&&e.type==="mousemove"?(ec=e.screenX-Os.screenX,nc=e.screenY-Os.screenY):nc=ec=0,Os=e),ec)},movementY:function(e){return"movementY"in e?e.movementY:nc}}),Zd=On(al),b0=g({},al,{dataTransfer:0}),A0=On(b0),R0=g({},Ns,{relatedTarget:0}),ic=On(R0),C0=g({},Qa,{animationName:0,elapsedTime:0,pseudoElement:0}),w0=On(C0),D0=g({},Qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U0=On(D0),L0=g({},Qa,{data:0}),Kd=On(L0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},O0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P0[e])?!!n[e]:!1}function ac(){return B0}var z0=g({},Ns,{key:function(e){if(e.key){var n=N0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=el(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?O0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ac,charCode:function(e){return e.type==="keypress"?el(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?el(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),I0=On(z0),F0=g({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qd=On(F0),H0=g({},Ns,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ac}),G0=On(H0),V0=g({},Qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),k0=On(V0),X0=g({},al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),W0=On(X0),q0=g({},Qa,{newState:0,oldState:0}),Y0=On(q0),j0=[9,13,27,32],rc=Bi&&"CompositionEvent"in window,Ps=null;Bi&&"documentMode"in document&&(Ps=document.documentMode);var Z0=Bi&&"TextEvent"in window&&!Ps,Jd=Bi&&(!rc||Ps&&8<Ps&&11>=Ps),$d=" ",tp=!1;function ep(e,n){switch(e){case"keyup":return j0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function np(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function K0(e,n){switch(e){case"compositionend":return np(n);case"keypress":return n.which!==32?null:(tp=!0,$d);case"textInput":return e=n.data,e===$d&&tp?null:e;default:return null}}function Q0(e,n){if(Ur)return e==="compositionend"||!rc&&ep(e,n)?(e=Yd(),tl=tc=ma=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jd&&n.locale!=="ko"?null:n.data;default:return null}}var J0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ip(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!J0[e.type]:n==="textarea"}function ap(e,n,a,o){wr?Dr?Dr.push(o):Dr=[o]:wr=o,n=Xl(n,"onChange"),0<n.length&&(a=new il("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Bs=null,zs=null;function $0(e){Ig(e,0)}function rl(e){var n=Ka(e);if(ye(n))return e}function rp(e,n){if(e==="change")return n}var sp=!1;if(Bi){var sc;if(Bi){var oc="oninput"in document;if(!oc){var op=document.createElement("div");op.setAttribute("oninput","return;"),oc=typeof op.oninput=="function"}sc=oc}else sc=!1;sp=sc&&(!document.documentMode||9<document.documentMode)}function lp(){Bs&&(Bs.detachEvent("onpropertychange",up),zs=Bs=null)}function up(e){if(e.propertyName==="value"&&rl(zs)){var n=[];ap(n,zs,e,Qu(e)),qd($0,n)}}function tx(e,n,a){e==="focusin"?(lp(),Bs=n,zs=a,Bs.attachEvent("onpropertychange",up)):e==="focusout"&&lp()}function ex(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rl(zs)}function nx(e,n){if(e==="click")return rl(n)}function ix(e,n){if(e==="input"||e==="change")return rl(n)}function ax(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var kn=typeof Object.is=="function"?Object.is:ax;function Is(e,n){if(kn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!Be.call(n,c)||!kn(e[c],n[c]))return!1}return!0}function cp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function fp(e,n){var a=cp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cp(a)}}function hp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?hp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function dp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Tn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Tn(e.document)}return n}function lc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rx=Bi&&"documentMode"in document&&11>=document.documentMode,Lr=null,uc=null,Fs=null,cc=!1;function pp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cc||Lr==null||Lr!==Tn(o)||(o=Lr,"selectionStart"in o&&lc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fs&&Is(Fs,o)||(Fs=o,o=Xl(uc,"onSelect"),0<o.length&&(n=new il("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Lr)))}function Ja(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionrun:Ja("Transition","TransitionRun"),transitionstart:Ja("Transition","TransitionStart"),transitioncancel:Ja("Transition","TransitionCancel"),transitionend:Ja("Transition","TransitionEnd")},fc={},mp={};Bi&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function $a(e){if(fc[e])return fc[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in mp)return fc[e]=n[a];return e}var gp=$a("animationend"),_p=$a("animationiteration"),vp=$a("animationstart"),sx=$a("transitionrun"),ox=$a("transitionstart"),lx=$a("transitioncancel"),xp=$a("transitionend"),Sp=new Map,hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hc.push("scrollEnd");function li(e,n){Sp.set(e,n),Ni(n,[e])}var yp=new WeakMap;function Jn(e,n){if(typeof e=="object"&&e!==null){var a=yp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:We(n)},yp.set(e,n),n)}return{value:e,source:n,stack:We(n)}}var $n=[],Or=0,dc=0;function sl(){for(var e=Or,n=dc=Or=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var c=$n[n];$n[n++]=null;var h=$n[n];if($n[n++]=null,o!==null&&c!==null){var M=o.pending;M===null?c.next=c:(c.next=M.next,M.next=c),o.pending=c}h!==0&&Mp(a,c,h)}}function ol(e,n,a,o){$n[Or++]=e,$n[Or++]=n,$n[Or++]=a,$n[Or++]=o,dc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function pc(e,n,a,o){return ol(e,n,a,o),ll(e)}function Pr(e,n){return ol(e,null,null,n),ll(e)}function Mp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Ht(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function ll(e){if(50<co)throw co=0,yf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Br={};function ux(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(e,n,a,o){return new ux(e,n,a,o)}function mc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zi(e,n){var a=e.alternate;return a===null?(a=Xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ep(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ul(e,n,a,o,c,h){var M=0;if(o=e,typeof e=="function")mc(e)&&(M=1);else if(typeof e=="string")M=fS(e,a,Q.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case U:return e=Xn(31,a,n,c),e.elementType=U,e.lanes=h,e;case E:return tr(a.children,c,h,n);case A:M=8,c|=24;break;case S:return e=Xn(12,a,n,c|2),e.elementType=S,e.lanes=h,e;case I:return e=Xn(13,a,n,c),e.elementType=I,e.lanes=h,e;case H:return e=Xn(19,a,n,c),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _:case D:M=10;break t;case O:M=9;break t;case w:M=11;break t;case z:M=14;break t;case W:M=16,o=null;break t}M=29,a=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Xn(M,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function tr(e,n,a,o){return e=Xn(7,e,o,n),e.lanes=a,e}function gc(e,n,a){return e=Xn(6,e,null,n),e.lanes=a,e}function _c(e,n,a){return n=Xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var zr=[],Ir=0,cl=null,fl=0,ti=[],ei=0,er=null,Ii=1,Fi="";function nr(e,n){zr[Ir++]=fl,zr[Ir++]=cl,cl=e,fl=n}function Tp(e,n,a){ti[ei++]=Ii,ti[ei++]=Fi,ti[ei++]=er,er=e;var o=Ii;e=Fi;var c=32-Ht(o)-1;o&=~(1<<c),a+=1;var h=32-Ht(n)+c;if(30<h){var M=c-c%5;h=(o&(1<<M)-1).toString(32),o>>=M,c-=M,Ii=1<<32-Ht(n)+c|a<<c|o,Fi=h+e}else Ii=1<<h|a<<c|o,Fi=e}function vc(e){e.return!==null&&(nr(e,1),Tp(e,1,0))}function xc(e){for(;e===cl;)cl=zr[--Ir],zr[Ir]=null,fl=zr[--Ir],zr[Ir]=null;for(;e===er;)er=ti[--ei],ti[ei]=null,Fi=ti[--ei],ti[ei]=null,Ii=ti[--ei],ti[ei]=null}var Dn=null,Ze=null,Ae=!1,ir=null,Si=!1,Sc=Error(r(519));function ar(e){var n=Error(r(418,""));throw Vs(Jn(n,e)),Sc}function bp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[xn]=o,a){case"dialog":me("cancel",n),me("close",n);break;case"iframe":case"object":case"embed":me("load",n);break;case"video":case"audio":for(a=0;a<ho.length;a++)me(ho[a],n);break;case"source":me("error",n);break;case"img":case"image":case"link":me("error",n),me("load",n);break;case"details":me("toggle",n);break;case"input":me("invalid",n),ze(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),je(n);break;case"select":me("invalid",n);break;case"textarea":me("invalid",n),Sn(n,o.value,o.defaultValue,o.children),je(n)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||Vg(n.textContent,a)?(o.popover!=null&&(me("beforetoggle",n),me("toggle",n)),o.onScroll!=null&&me("scroll",n),o.onScrollEnd!=null&&me("scrollend",n),o.onClick!=null&&(n.onclick=Wl),n=!0):n=!1,n||ar(e)}function Ap(e){for(Dn=e.return;Dn;)switch(Dn.tag){case 5:case 13:Si=!1;return;case 27:case 3:Si=!0;return;default:Dn=Dn.return}}function Hs(e){if(e!==Dn)return!1;if(!Ae)return Ap(e),Ae=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Ze&&ar(e),Ap(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){Ze=ci(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}Ze=null}}else n===27?(n=Ze,Ua(e.type)?(e=Gf,Gf=null,Ze=e):Ze=n):Ze=Dn?ci(e.stateNode.nextSibling):null;return!0}function Gs(){Ze=Dn=null,Ae=!1}function Rp(){var e=ir;return e!==null&&(zn===null?zn=e:zn.push.apply(zn,e),ir=null),e}function Vs(e){ir===null?ir=[e]:ir.push(e)}var yc=$(null),rr=null,Hi=null;function ga(e,n,a){yt(yc,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=yc.current,xt(yc)}function Mc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Ec(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var M=c.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=c;for(var P=0;P<n.length;P++)if(T.context===n[P]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),Mc(h.return,a,e),o||(M=null);break t}h=T.next}}else if(c.tag===18){if(M=c.return,M===null)throw Error(r(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),Mc(M,a,e),M=null}else M=c.child;if(M!==null)M.return=c;else for(M=c;M!==null;){if(M===e){M=null;break}if(c=M.sibling,c!==null){c.return=M.return,M=c;break}M=M.return}c=M}}function ks(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var M=c.alternate;if(M===null)throw Error(r(387));if(M=M.memoizedProps,M!==null){var T=c.type;kn(c.pendingProps.value,M.value)||(e!==null?e.push(T):e=[T])}}else if(c===At.current){if(M=c.alternate,M===null)throw Error(r(387));M.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(xo):e=[xo])}c=c.return}e!==null&&Ec(n,e,a,o),n.flags|=262144}function hl(e){for(e=e.firstContext;e!==null;){if(!kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Cp(rr,e)}function dl(e,n){return rr===null&&sr(e),Cp(e,n)}function Cp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var cx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},fx=s.unstable_scheduleCallback,hx=s.unstable_NormalPriority,un={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tc(){return{controller:new cx,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&fx(hx,function(){e.controller.abort()})}var Ws=null,bc=0,Fr=0,Hr=null;function dx(e,n){if(Ws===null){var a=Ws=[];bc=0,Fr=Cf(),Hr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bc++,n.then(wp,wp),n}function wp(){if(--bc===0&&Ws!==null){Hr!==null&&(Hr.status="fulfilled");var e=Ws;Ws=null,Fr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Dp=B.S;B.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&dx(e,n),Dp!==null&&Dp(e,n)};var or=$(null);function Ac(){var e=or.current;return e!==null?e:ke.pooledCache}function pl(e,n){n===null?yt(or,or.current):yt(or,n.pool)}function Up(){var e=Ac();return e===null?null:{parent:un._currentValue,pool:e}}var qs=Error(r(460)),Lp=Error(r(474)),ml=Error(r(542)),Rc={then:function(){}};function Np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gl(){}function Op(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(gl,gl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e;default:if(typeof n.status=="string")n.then(gl,gl);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Bp(e),e}throw Ys=n,qs}}var Ys=null;function Pp(){if(Ys===null)throw Error(r(459));var e=Ys;return Ys=null,e}function Bp(e){if(e===qs||e===ml)throw Error(r(483))}var _a=!1;function Cc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function va(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ce&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=ll(e),Mp(e,null,a),n}return ol(e,o,n,a),ll(e)}function js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}function Dc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Uc=!1;function Zs(){if(Uc){var e=Hr;if(e!==null)throw e}}function Ks(e,n,a,o){Uc=!1;var c=e.updateQueue;_a=!1;var h=c.firstBaseUpdate,M=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var P=T,J=P.next;P.next=null,M===null?h=J:M.next=J,M=P;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,T=ut.lastBaseUpdate,T!==M&&(T===null?ut.firstBaseUpdate=J:T.next=J,ut.lastBaseUpdate=P))}if(h!==null){var _t=c.baseState;M=0,ut=J=P=null,T=h;do{var et=T.lane&-536870913,nt=et!==T.lane;if(nt?(Se&et)===et:(o&et)===et){et!==0&&et===Fr&&(Uc=!0),ut!==null&&(ut=ut.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var ee=e,Zt=T;et=n;var Oe=a;switch(Zt.tag){case 1:if(ee=Zt.payload,typeof ee=="function"){_t=ee.call(Oe,_t,et);break t}_t=ee;break t;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=Zt.payload,et=typeof ee=="function"?ee.call(Oe,_t,et):ee,et==null)break t;_t=g({},_t,et);break t;case 2:_a=!0}}et=T.callback,et!==null&&(e.flags|=64,nt&&(e.flags|=8192),nt=c.callbacks,nt===null?c.callbacks=[et]:nt.push(et))}else nt={lane:et,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ut===null?(J=ut=nt,P=_t):ut=ut.next=nt,M|=et;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;nt=T,T=nt.next,nt.next=null,c.lastBaseUpdate=nt,c.shared.pending=null}}while(!0);ut===null&&(P=_t),c.baseState=P,c.firstBaseUpdate=J,c.lastBaseUpdate=ut,h===null&&(c.shared.lanes=0),Ra|=M,e.lanes=M,e.memoizedState=_t}}function zp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Ip(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)zp(a[e],n)}var Gr=$(null),_l=$(0);function Fp(e,n){e=ji,yt(_l,e),yt(Gr,n),ji=e|n.baseLanes}function Lc(){yt(_l,ji),yt(Gr,Gr.current)}function Nc(){ji=_l.current,xt(Gr),xt(_l)}var Sa=0,ce=null,Le=null,an=null,vl=!1,Vr=!1,lr=!1,xl=0,Qs=0,kr=null,mx=0;function Qe(){throw Error(r(321))}function Oc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!kn(e[a],n[a]))return!1;return!0}function Pc(e,n,a,o,c,h){return Sa=h,ce=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Mm:Em,lr=!1,h=a(o,c),lr=!1,Vr&&(h=Gp(n,a,o,c)),Hp(e),h}function Hp(e){B.H=bl;var n=Le!==null&&Le.next!==null;if(Sa=0,an=Le=ce=null,vl=!1,Qs=0,kr=null,n)throw Error(r(300));e===null||mn||(e=e.dependencies,e!==null&&hl(e)&&(mn=!0))}function Gp(e,n,a,o){ce=e;var c=0;do{if(Vr&&(kr=null),Qs=0,Vr=!1,25<=c)throw Error(r(301));if(c+=1,an=Le=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=Mx,h=n(a,o)}while(Vr);return h}function gx(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?Js(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ce.flags|=1024),n}function Bc(){var e=xl!==0;return xl=0,e}function zc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ic(e){if(vl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}vl=!1}Sa=0,an=Le=ce=null,Vr=!1,Qs=xl=0,kr=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?ce.memoizedState=an=e:an=an.next=e,an}function rn(){if(Le===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=an===null?ce.memoizedState:an.next;if(n!==null)an=n,Le=e;else{if(e===null)throw ce.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},an===null?ce.memoizedState=an=e:an=an.next=e}return an}function Fc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Js(e){var n=Qs;return Qs+=1,kr===null&&(kr=[]),e=Op(kr,e,n),n=ce,(an===null?n.memoizedState:an.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Mm:Em),e}function Sl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Js(e);if(e.$$typeof===D)return An(e)}throw Error(r(438,String(e)))}function Hc(e){var n=null,a=ce.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ce.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Fc(),ce.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=C;return n.index++,a}function Vi(e,n){return typeof n=="function"?n(e):n}function yl(e){var n=rn();return Gc(n,Le,e)}function Gc(e,n,a){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var M=c.next;c.next=h.next,h.next=M}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var T=M=null,P=null,J=n,ut=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(Se&_t)===_t:(Sa&_t)===_t){var et=J.revertLane;if(et===0)P!==null&&(P=P.next={lane:0,revertLane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Fr&&(ut=!0);else if((Sa&et)===et){J=J.next,et===Fr&&(ut=!0);continue}else _t={lane:0,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=_t,M=h):P=P.next=_t,ce.lanes|=et,Ra|=et;_t=J.action,lr&&a(h,_t),h=J.hasEagerState?J.eagerState:a(h,_t)}else et={lane:_t,revertLane:J.revertLane,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},P===null?(T=P=et,M=h):P=P.next=et,ce.lanes|=_t,Ra|=_t;J=J.next}while(J!==null&&J!==n);if(P===null?M=h:P.next=T,!kn(h,e.memoizedState)&&(mn=!0,ut&&(a=Hr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=P,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vc(e){var n=rn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var M=c=c.next;do h=e(h,M.action),M=M.next;while(M!==c);kn(h,n.memoizedState)||(mn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function Vp(e,n,a){var o=ce,c=rn(),h=Ae;if(h){if(a===void 0)throw Error(r(407));a=a()}else a=n();var M=!kn((Le||c).memoizedState,a);M&&(c.memoizedState=a,mn=!0),c=c.queue;var T=Wp.bind(null,o,c,e);if($s(2048,8,T,[e]),c.getSnapshot!==n||M||an!==null&&an.memoizedState.tag&1){if(o.flags|=2048,Xr(9,Ml(),Xp.bind(null,o,c,a,n),null),ke===null)throw Error(r(349));h||(Sa&124)!==0||kp(o,n,a)}return a}function kp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ce.updateQueue,n===null?(n=Fc(),ce.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Xp(e,n,a,o){n.value=a,n.getSnapshot=o,qp(n)&&Yp(e)}function Wp(e,n,a){return a(function(){qp(n)&&Yp(e)})}function qp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!kn(e,a)}catch{return!0}}function Yp(e){var n=Pr(e,2);n!==null&&Zn(n,e,2)}function kc(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),lr){Rt(!0);try{a()}finally{Rt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},n}function jp(e,n,a,o){return e.baseState=a,Gc(e,Le,typeof o=="function"?o:Vi)}function _x(e,n,a,o,c){if(Tl(e))throw Error(r(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};B.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Zp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Zp(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=B.T,M={};B.T=M;try{var T=a(c,o),P=B.S;P!==null&&P(M,T),Kp(e,n,T)}catch(J){Xc(e,n,J)}finally{B.T=h}}else try{h=a(c,o),Kp(e,n,h)}catch(J){Xc(e,n,J)}}function Kp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Qp(e,n,o)},function(o){return Xc(e,n,o)}):Qp(e,n,a)}function Qp(e,n,a){n.status="fulfilled",n.value=a,Jp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Zp(e,a)))}function Xc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Jp(n),n=n.next;while(n!==o)}e.action=null}function Jp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function $p(e,n){return n}function tm(e,n){if(Ae){var a=ke.formState;if(a!==null){t:{var o=ce;if(Ae){if(Ze){e:{for(var c=Ze,h=Si;c.nodeType!==8;){if(!h){c=null;break e}if(c=ci(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Ze=ci(c.nextSibling),o=c.data==="F!";break t}}ar(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:$p,lastRenderedState:n},a.queue=o,a=xm.bind(null,ce,o),o.dispatch=a,o=kc(!1),h=Zc.bind(null,ce,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=_x.bind(null,ce,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function em(e){var n=rn();return nm(n,Le,e)}function nm(e,n,a){if(n=Gc(e,n,$p)[0],e=yl(Vi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Js(n)}catch(M){throw M===qs?ml:M}else o=n;n=rn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ce.flags|=2048,Xr(9,Ml(),vx.bind(null,c,a),null)),[o,h,e]}function vx(e,n){e.action=n}function im(e){var n=rn(),a=Le;if(a!==null)return nm(n,a,e);rn(),n=n.memoizedState,a=rn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Xr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ce.updateQueue,n===null&&(n=Fc(),ce.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ml(){return{destroy:void 0,resource:void 0}}function am(){return rn().memoizedState}function El(e,n,a,o){var c=Pn();o=o===void 0?null:o,ce.flags|=e,c.memoizedState=Xr(1|n,Ml(),a,o)}function $s(e,n,a,o){var c=rn();o=o===void 0?null:o;var h=c.memoizedState.inst;Le!==null&&o!==null&&Oc(o,Le.memoizedState.deps)?c.memoizedState=Xr(n,h,a,o):(ce.flags|=e,c.memoizedState=Xr(1|n,h,a,o))}function rm(e,n){El(8390656,8,e,n)}function sm(e,n){$s(2048,8,e,n)}function om(e,n){return $s(4,2,e,n)}function lm(e,n){return $s(4,4,e,n)}function um(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function cm(e,n,a){a=a!=null?a.concat([e]):null,$s(4,4,um.bind(null,n,e),a)}function Wc(){}function fm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Oc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function hm(e,n){var a=rn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Oc(n,o[1]))return o[0];if(o=e(),lr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o}function qc(e,n,a){return a===void 0||(Sa&1073741824)!==0?e.memoizedState=n:(e.memoizedState=a,e=mg(),ce.lanes|=e,Ra|=e,a)}function dm(e,n,a,o){return kn(a,n)?a:Gr.current!==null?(e=qc(e,a,o),kn(e,n)||(mn=!0),e):(Sa&42)===0?(mn=!0,e.memoizedState=a):(e=mg(),ce.lanes|=e,Ra|=e,n)}function pm(e,n,a,o,c){var h=Z.p;Z.p=h!==0&&8>h?h:8;var M=B.T,T={};B.T=T,Zc(e,!1,n,a);try{var P=c(),J=B.S;if(J!==null&&J(T,P),P!==null&&typeof P=="object"&&typeof P.then=="function"){var ut=px(P,o);to(e,n,ut,jn(e))}else to(e,n,o,jn(e))}catch(_t){to(e,n,{then:function(){},status:"rejected",reason:_t},jn())}finally{Z.p=h,B.T=M}}function xx(){}function Yc(e,n,a,o){if(e.tag!==5)throw Error(r(476));var c=mm(e).queue;pm(e,c,n,Y,a===null?xx:function(){return gm(e),a(o)})}function mm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function gm(e){var n=mm(e).next.queue;to(e,n,{},jn())}function jc(){return An(xo)}function _m(){return rn().memoizedState}function vm(){return rn().memoizedState}function Sx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=va(a);var o=xa(n,e,a);o!==null&&(Zn(o,n,a),js(o,n,a)),n={cache:Tc()},e.payload=n;return}n=n.return}}function yx(e,n,a){var o=jn();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},Tl(e)?Sm(n,a):(a=pc(e,n,a,o),a!==null&&(Zn(a,e,o),ym(a,n,o)))}function xm(e,n,a){var o=jn();to(e,n,a,o)}function to(e,n,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(Tl(e))Sm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,T=h(M,a);if(c.hasEagerState=!0,c.eagerState=T,kn(T,M))return ol(e,n,c,0),ke===null&&sl(),!1}catch{}finally{}if(a=pc(e,n,c,o),a!==null)return Zn(a,e,o),ym(a,n,o),!0}return!1}function Zc(e,n,a,o){if(o={lane:2,revertLane:Cf(),action:o,hasEagerState:!1,eagerState:null,next:null},Tl(e)){if(n)throw Error(r(479))}else n=pc(e,a,o,2),n!==null&&Zn(n,e,2)}function Tl(e){var n=e.alternate;return e===ce||n!==null&&n===ce}function Sm(e,n){Vr=vl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function ym(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,ae(e,a)}}var bl={readContext:An,use:Sl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe},Mm={readContext:An,use:Sl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:rm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,El(4194308,4,um.bind(null,n,e),a)},useLayoutEffect:function(e,n){return El(4194308,4,e,n)},useInsertionEffect:function(e,n){El(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(lr){Rt(!0);try{e()}finally{Rt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(lr){Rt(!0);try{a(n)}finally{Rt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=yx.bind(null,ce,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=kc(e);var n=e.queue,a=xm.bind(null,ce,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Wc,useDeferredValue:function(e,n){var a=Pn();return qc(a,e,n)},useTransition:function(){var e=kc(!1);return e=pm.bind(null,ce,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ce,c=Pn();if(Ae){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),ke===null)throw Error(r(349));(Se&124)!==0||kp(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,rm(Wp.bind(null,o,h,e),[e]),o.flags|=2048,Xr(9,Ml(),Xp.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(Ae){var a=Fi,o=Ii;a=(o&~(1<<32-Ht(o)-1)).toString(32)+a,n="«"+n+"R"+a,a=xl++,0<a&&(n+="H"+a.toString(32)),n+="»"}else a=mx++,n="«"+n+"r"+a.toString(32)+"»";return e.memoizedState=n},useHostTransitionStatus:jc,useFormState:tm,useActionState:tm,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Zc.bind(null,ce,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hc,useCacheRefresh:function(){return Pn().memoizedState=Sx.bind(null,ce)}},Em={readContext:An,use:Sl,useCallback:fm,useContext:An,useEffect:sm,useImperativeHandle:cm,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:yl,useRef:am,useState:function(){return yl(Vi)},useDebugValue:Wc,useDeferredValue:function(e,n){var a=rn();return dm(a,Le.memoizedState,e,n)},useTransition:function(){var e=yl(Vi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:jc,useFormState:em,useActionState:em,useOptimistic:function(e,n){var a=rn();return jp(a,Le,e,n)},useMemoCache:Hc,useCacheRefresh:vm},Mx={readContext:An,use:Sl,useCallback:fm,useContext:An,useEffect:sm,useImperativeHandle:cm,useInsertionEffect:om,useLayoutEffect:lm,useMemo:hm,useReducer:Vc,useRef:am,useState:function(){return Vc(Vi)},useDebugValue:Wc,useDeferredValue:function(e,n){var a=rn();return Le===null?qc(a,e,n):dm(a,Le.memoizedState,e,n)},useTransition:function(){var e=Vc(Vi)[0],n=rn().memoizedState;return[typeof e=="boolean"?e:Js(e),n]},useSyncExternalStore:Vp,useId:_m,useHostTransitionStatus:jc,useFormState:im,useActionState:im,useOptimistic:function(e,n){var a=rn();return Le!==null?jp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hc,useCacheRefresh:vm},Wr=null,eo=0;function Al(e){var n=eo;return eo+=1,Wr===null&&(Wr=[]),Op(Wr,e,n)}function no(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Rl(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Tm(e){var n=e._init;return n(e._payload)}function bm(e){function n(X,G){if(e){var K=X.deletions;K===null?(X.deletions=[G],X.flags|=16):K.push(G)}}function a(X,G){if(!e)return null;for(;G!==null;)n(X,G),G=G.sibling;return null}function o(X){for(var G=new Map;X!==null;)X.key!==null?G.set(X.key,X):G.set(X.index,X),X=X.sibling;return G}function c(X,G){return X=zi(X,G),X.index=0,X.sibling=null,X}function h(X,G,K){return X.index=K,e?(K=X.alternate,K!==null?(K=K.index,K<G?(X.flags|=67108866,G):K):(X.flags|=67108866,G)):(X.flags|=1048576,G)}function M(X){return e&&X.alternate===null&&(X.flags|=67108866),X}function T(X,G,K,ft){return G===null||G.tag!==6?(G=gc(K,X.mode,ft),G.return=X,G):(G=c(G,K),G.return=X,G)}function P(X,G,K,ft){var Ft=K.type;return Ft===E?ut(X,G,K.props.children,ft,K.key):G!==null&&(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===W&&Tm(Ft)===G.type)?(G=c(G,K.props),no(G,K),G.return=X,G):(G=ul(K.type,K.key,K.props,null,X.mode,ft),no(G,K),G.return=X,G)}function J(X,G,K,ft){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=_c(K,X.mode,ft),G.return=X,G):(G=c(G,K.children||[]),G.return=X,G)}function ut(X,G,K,ft,Ft){return G===null||G.tag!==7?(G=tr(K,X.mode,ft,Ft),G.return=X,G):(G=c(G,K),G.return=X,G)}function _t(X,G,K){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=gc(""+G,X.mode,K),G.return=X,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case x:return K=ul(G.type,G.key,G.props,null,X.mode,K),no(K,G),K.return=X,K;case y:return G=_c(G,X.mode,K),G.return=X,G;case W:var ft=G._init;return G=ft(G._payload),_t(X,G,K)}if(ht(G)||lt(G))return G=tr(G,X.mode,K,null),G.return=X,G;if(typeof G.then=="function")return _t(X,Al(G),K);if(G.$$typeof===D)return _t(X,dl(X,G),K);Rl(X,G)}return null}function et(X,G,K,ft){var Ft=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return Ft!==null?null:T(X,G,""+K,ft);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case x:return K.key===Ft?P(X,G,K,ft):null;case y:return K.key===Ft?J(X,G,K,ft):null;case W:return Ft=K._init,K=Ft(K._payload),et(X,G,K,ft)}if(ht(K)||lt(K))return Ft!==null?null:ut(X,G,K,ft,null);if(typeof K.then=="function")return et(X,G,Al(K),ft);if(K.$$typeof===D)return et(X,G,dl(X,K),ft);Rl(X,K)}return null}function nt(X,G,K,ft,Ft){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return X=X.get(K)||null,T(G,X,""+ft,Ft);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case x:return X=X.get(ft.key===null?K:ft.key)||null,P(G,X,ft,Ft);case y:return X=X.get(ft.key===null?K:ft.key)||null,J(G,X,ft,Ft);case W:var he=ft._init;return ft=he(ft._payload),nt(X,G,K,ft,Ft)}if(ht(ft)||lt(ft))return X=X.get(K)||null,ut(G,X,ft,Ft,null);if(typeof ft.then=="function")return nt(X,G,K,Al(ft),Ft);if(ft.$$typeof===D)return nt(X,G,K,dl(G,ft),Ft);Rl(G,ft)}return null}function ee(X,G,K,ft){for(var Ft=null,he=null,kt=G,Jt=G=0,_n=null;kt!==null&&Jt<K.length;Jt++){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var Te=et(X,kt,K[Jt],ft);if(Te===null){kt===null&&(kt=_n);break}e&&kt&&Te.alternate===null&&n(X,kt),G=h(Te,G,Jt),he===null?Ft=Te:he.sibling=Te,he=Te,kt=_n}if(Jt===K.length)return a(X,kt),Ae&&nr(X,Jt),Ft;if(kt===null){for(;Jt<K.length;Jt++)kt=_t(X,K[Jt],ft),kt!==null&&(G=h(kt,G,Jt),he===null?Ft=kt:he.sibling=kt,he=kt);return Ae&&nr(X,Jt),Ft}for(kt=o(kt);Jt<K.length;Jt++)_n=nt(kt,X,Jt,K[Jt],ft),_n!==null&&(e&&_n.alternate!==null&&kt.delete(_n.key===null?Jt:_n.key),G=h(_n,G,Jt),he===null?Ft=_n:he.sibling=_n,he=_n);return e&&kt.forEach(function(Ba){return n(X,Ba)}),Ae&&nr(X,Jt),Ft}function Zt(X,G,K,ft){if(K==null)throw Error(r(151));for(var Ft=null,he=null,kt=G,Jt=G=0,_n=null,Te=K.next();kt!==null&&!Te.done;Jt++,Te=K.next()){kt.index>Jt?(_n=kt,kt=null):_n=kt.sibling;var Ba=et(X,kt,Te.value,ft);if(Ba===null){kt===null&&(kt=_n);break}e&&kt&&Ba.alternate===null&&n(X,kt),G=h(Ba,G,Jt),he===null?Ft=Ba:he.sibling=Ba,he=Ba,kt=_n}if(Te.done)return a(X,kt),Ae&&nr(X,Jt),Ft;if(kt===null){for(;!Te.done;Jt++,Te=K.next())Te=_t(X,Te.value,ft),Te!==null&&(G=h(Te,G,Jt),he===null?Ft=Te:he.sibling=Te,he=Te);return Ae&&nr(X,Jt),Ft}for(kt=o(kt);!Te.done;Jt++,Te=K.next())Te=nt(kt,X,Jt,Te.value,ft),Te!==null&&(e&&Te.alternate!==null&&kt.delete(Te.key===null?Jt:Te.key),G=h(Te,G,Jt),he===null?Ft=Te:he.sibling=Te,he=Te);return e&&kt.forEach(function(ES){return n(X,ES)}),Ae&&nr(X,Jt),Ft}function Oe(X,G,K,ft){if(typeof K=="object"&&K!==null&&K.type===E&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case x:t:{for(var Ft=K.key;G!==null;){if(G.key===Ft){if(Ft=K.type,Ft===E){if(G.tag===7){a(X,G.sibling),ft=c(G,K.props.children),ft.return=X,X=ft;break t}}else if(G.elementType===Ft||typeof Ft=="object"&&Ft!==null&&Ft.$$typeof===W&&Tm(Ft)===G.type){a(X,G.sibling),ft=c(G,K.props),no(ft,K),ft.return=X,X=ft;break t}a(X,G);break}else n(X,G);G=G.sibling}K.type===E?(ft=tr(K.props.children,X.mode,ft,K.key),ft.return=X,X=ft):(ft=ul(K.type,K.key,K.props,null,X.mode,ft),no(ft,K),ft.return=X,X=ft)}return M(X);case y:t:{for(Ft=K.key;G!==null;){if(G.key===Ft)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(X,G.sibling),ft=c(G,K.children||[]),ft.return=X,X=ft;break t}else{a(X,G);break}else n(X,G);G=G.sibling}ft=_c(K,X.mode,ft),ft.return=X,X=ft}return M(X);case W:return Ft=K._init,K=Ft(K._payload),Oe(X,G,K,ft)}if(ht(K))return ee(X,G,K,ft);if(lt(K)){if(Ft=lt(K),typeof Ft!="function")throw Error(r(150));return K=Ft.call(K),Zt(X,G,K,ft)}if(typeof K.then=="function")return Oe(X,G,Al(K),ft);if(K.$$typeof===D)return Oe(X,G,dl(X,K),ft);Rl(X,K)}return typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint"?(K=""+K,G!==null&&G.tag===6?(a(X,G.sibling),ft=c(G,K),ft.return=X,X=ft):(a(X,G),ft=gc(K,X.mode,ft),ft.return=X,X=ft),M(X)):a(X,G)}return function(X,G,K,ft){try{eo=0;var Ft=Oe(X,G,K,ft);return Wr=null,Ft}catch(kt){if(kt===qs||kt===ml)throw kt;var he=Xn(29,kt,null,X.mode);return he.lanes=ft,he.return=X,he}finally{}}}var qr=bm(!0),Am=bm(!1),ni=$(null),yi=null;function ya(e){var n=e.alternate;yt(cn,cn.current&1),yt(ni,e),yi===null&&(n===null||Gr.current!==null||n.memoizedState!==null)&&(yi=e)}function Rm(e){if(e.tag===22){if(yt(cn,cn.current),yt(ni,e),yi===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(yi=e)}}else Ma()}function Ma(){yt(cn,cn.current),yt(ni,ni.current)}function ki(e){xt(ni),yi===e&&(yi=null),xt(cn)}var cn=$(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Hf(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}function Kc(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Qc={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),c=va(o);c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Zn(n,e,o),js(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),c=va(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=xa(e,c,o),n!==null&&(Zn(n,e,o),js(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=va(a);o.tag=2,n!=null&&(o.callback=n),n=xa(e,o,a),n!==null&&(Zn(n,e,a),js(n,e,a))}};function Cm(e,n,a,o,c,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Is(a,o)||!Is(c,h):!0}function wm(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Qc.enqueueReplaceState(n,n.state,null)}function ur(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var wl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Dm(e){wl(e)}function Um(e){console.error(e)}function Lm(e){wl(e)}function Dl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Nm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Jc(e,n,a){return a=va(a),a.tag=3,a.payload={element:null},a.callback=function(){Dl(e,n)},a}function Om(e){return e=va(e),e.tag=3,e}function Pm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Nm(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){Nm(n,a,o),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Ex(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&ks(n,a,c,!0),a=ni.current,a!==null){switch(a.tag){case 13:return yi===null?Ef():a.alternate===null&&Ke===0&&(Ke=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Rc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),bf(e,o,c)),!1;case 22:return a.flags|=65536,o===Rc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),bf(e,o,c)),!1}throw Error(r(435,a.tag))}return bf(e,o,c),Ef(),!1}if(Ae)return n=ni.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Sc&&(e=Error(r(422),{cause:o}),Vs(Jn(e,a)))):(o!==Sc&&(n=Error(r(423),{cause:o}),Vs(Jn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Jn(o,a),c=Jc(e.stateNode,o,c),Dc(e,c),Ke!==4&&(Ke=2)),!1;var h=Error(r(520),{cause:o});if(h=Jn(h,a),uo===null?uo=[h]:uo.push(h),Ke!==4&&(Ke=2),n===null)return!0;o=Jn(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Jc(a.stateNode,o,e),Dc(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ca===null||!Ca.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Om(c),Pm(c,e,a,o),Dc(a,c),!1}a=a.return}while(a!==null);return!1}var Bm=Error(r(461)),mn=!1;function yn(e,n,a,o){n.child=e===null?Am(n,null,a,o):qr(n,e.child,a,o)}function zm(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var T in o)T!=="ref"&&(M[T]=o[T])}else M=o;return sr(n),o=Pc(e,n,a,M,h,c),T=Bc(),e!==null&&!mn?(zc(e,n,c),Xi(e,n,c)):(Ae&&T&&vc(n),n.flags|=1,yn(e,n,o,c),n.child)}function Im(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!mc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Fm(e,n,h,o,c)):(e=ul(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!of(e,c)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Is,a(M,o)&&e.ref===n.ref)return Xi(e,n,c)}return n.flags|=1,e=zi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Fm(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Is(h,o)&&e.ref===n.ref)if(mn=!1,n.pendingProps=o=h,of(e,c))(e.flags&131072)!==0&&(mn=!0);else return n.lanes=e.lanes,Xi(e,n,c)}return $c(e,n,a,o,c)}function Hm(e,n,a){var o=n.pendingProps,c=o.children,h=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((n.flags&128)!==0){if(o=h!==null?h.baseLanes|a:a,e!==null){for(c=n.child=e.child,h=0;c!==null;)h=h|c.lanes|c.childLanes,c=c.sibling;n.childLanes=h&~o}else n.childLanes=0,n.child=null;return Gm(e,n,o,a)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&pl(n,h!==null?h.cachePool:null),h!==null?Fp(n,h):Lc(),Rm(n);else return n.lanes=n.childLanes=536870912,Gm(e,n,h!==null?h.baseLanes|a:a,a)}else h!==null?(pl(n,h.cachePool),Fp(n,h),Ma(),n.memoizedState=null):(e!==null&&pl(n,null),Lc(),Ma());return yn(e,n,c,a),n.child}function Gm(e,n,a,o){var c=Ac();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&pl(n,null),Lc(),Rm(n),e!==null&&ks(e,n,o,!0),null}function Ul(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $c(e,n,a,o,c){return sr(n),a=Pc(e,n,a,o,void 0,c),o=Bc(),e!==null&&!mn?(zc(e,n,c),Xi(e,n,c)):(Ae&&o&&vc(n),n.flags|=1,yn(e,n,a,c),n.child)}function Vm(e,n,a,o,c,h){return sr(n),n.updateQueue=null,a=Gp(n,o,a,c),Hp(e),o=Bc(),e!==null&&!mn?(zc(e,n,h),Xi(e,n,h)):(Ae&&o&&vc(n),n.flags|=1,yn(e,n,a,h),n.child)}function km(e,n,a,o,c){if(sr(n),n.stateNode===null){var h=Br,M=a.contextType;typeof M=="object"&&M!==null&&(h=An(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Qc,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Cc(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?An(M):Br,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Kc(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Qc.enqueueReplaceState(h,h.state,null),Ks(n,o,h,c),Zs(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,P=ur(a,T);h.props=P;var J=h.context,ut=a.contextType;M=Br,typeof ut=="object"&&ut!==null&&(M=An(ut));var _t=a.getDerivedStateFromProps;ut=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ut||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||J!==M)&&wm(n,h,o,M),_a=!1;var et=n.memoizedState;h.state=et,Ks(n,o,h,c),Zs(),J=n.memoizedState,T||et!==J||_a?(typeof _t=="function"&&(Kc(n,a,_t,o),J=n.memoizedState),(P=_a||Cm(n,a,P,o,et,J,M))?(ut||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=J),h.props=o,h.state=J,h.context=M,o=P):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,wc(e,n),M=n.memoizedProps,ut=ur(a,M),h.props=ut,_t=n.pendingProps,et=h.context,J=a.contextType,P=Br,typeof J=="object"&&J!==null&&(P=An(J)),T=a.getDerivedStateFromProps,(J=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==_t||et!==P)&&wm(n,h,o,P),_a=!1,et=n.memoizedState,h.state=et,Ks(n,o,h,c),Zs();var nt=n.memoizedState;M!==_t||et!==nt||_a||e!==null&&e.dependencies!==null&&hl(e.dependencies)?(typeof T=="function"&&(Kc(n,a,T,o),nt=n.memoizedState),(ut=_a||Cm(n,a,ut,o,et,nt,P)||e!==null&&e.dependencies!==null&&hl(e.dependencies))?(J||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,nt,P),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,nt,P)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=P,o=ut):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ul(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=qr(n,e.child,null,c),n.child=qr(n,null,a,c)):yn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Xi(e,n,c),e}function Xm(e,n,a,o){return Gs(),n.flags|=256,yn(e,n,a,o),n.child}var tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ef(e){return{baseLanes:e,cachePool:Up()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function Wm(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(cn.current&2)!==0),M&&(c=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(c?ya(n):Ma(),Ae){var T=Ze,P;if(P=T){t:{for(P=T,T=Si;P.nodeType!==8;){if(!T){T=null;break t}if(P=ci(P.nextSibling),P===null){T=null;break t}}T=P}T!==null?(n.memoizedState={dehydrated:T,treeContext:er!==null?{id:Ii,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},P=Xn(18,null,null,0),P.stateNode=T,P.return=n,n.child=P,Dn=n,Ze=null,P=!0):P=!1}P||ar(n)}if(T=n.memoizedState,T!==null&&(T=T.dehydrated,T!==null))return Hf(T)?n.lanes=32:n.lanes=536870912,null;ki(n)}return T=o.children,o=o.fallback,c?(Ma(),c=n.mode,T=Ll({mode:"hidden",children:T},c),o=tr(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,c=n.child,c.memoizedState=ef(a),c.childLanes=nf(e,M,a),n.memoizedState=tf,o):(ya(n),af(n,T))}if(P=e.memoizedState,P!==null&&(T=P.dehydrated,T!==null)){if(h)n.flags&256?(ya(n),n.flags&=-257,n=rf(e,n,a)):n.memoizedState!==null?(Ma(),n.child=e.child,n.flags|=128,n=null):(Ma(),c=o.fallback,T=n.mode,o=Ll({mode:"visible",children:o.children},T),c=tr(c,T,a,null),c.flags|=2,o.return=n,c.return=n,o.sibling=c,n.child=o,qr(n,e.child,null,a),o=n.child,o.memoizedState=ef(a),o.childLanes=nf(e,M,a),n.memoizedState=tf,n=c);else if(ya(n),Hf(T)){if(M=T.nextSibling&&T.nextSibling.dataset,M)var J=M.dgst;M=J,o=Error(r(419)),o.stack="",o.digest=M,Vs({value:o,source:null,stack:null}),n=rf(e,n,a)}else if(mn||ks(e,n,a,!1),M=(a&e.childLanes)!==0,mn||M){if(M=ke,M!==null&&(o=a&-a,o=(o&42)!==0?1:Ge(o),o=(o&(M.suspendedLanes|a))!==0?0:o,o!==0&&o!==P.retryLane))throw P.retryLane=o,Pr(e,o),Zn(M,e,o),Bm;T.data==="$?"||Ef(),n=rf(e,n,a)}else T.data==="$?"?(n.flags|=192,n.child=e.child,n=null):(e=P.treeContext,Ze=ci(T.nextSibling),Dn=n,Ae=!0,ir=null,Si=!1,e!==null&&(ti[ei++]=Ii,ti[ei++]=Fi,ti[ei++]=er,Ii=e.id,Fi=e.overflow,er=n),n=af(n,o.children),n.flags|=4096);return n}return c?(Ma(),c=o.fallback,T=n.mode,P=e.child,J=P.sibling,o=zi(P,{mode:"hidden",children:o.children}),o.subtreeFlags=P.subtreeFlags&65011712,J!==null?c=zi(J,c):(c=tr(c,T,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,o=c,c=n.child,T=e.child.memoizedState,T===null?T=ef(a):(P=T.cachePool,P!==null?(J=un._currentValue,P=P.parent!==J?{parent:J,pool:J}:P):P=Up(),T={baseLanes:T.baseLanes|a,cachePool:P}),c.memoizedState=T,c.childLanes=nf(e,M,a),n.memoizedState=tf,o):(ya(n),a=e.child,e=a.sibling,a=zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Ll({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ll(e,n){return e=Xn(22,e,null,n),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function rf(e,n,a){return qr(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function qm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mc(e.return,n,a)}function sf(e,n,a,o,c){var h=e.memoizedState;h===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(h.isBackwards=n,h.rendering=null,h.renderingStartTime=0,h.last=o,h.tail=a,h.tailMode=c)}function Ym(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;if(yn(e,n,o.children,a),o=cn.current,(o&2)!==0)o=o&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&qm(e,a,n);else if(e.tag===19)qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch(yt(cn,o),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),sf(n,!1,c,a,h);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}sf(n,!0,a,null,h);break;case"together":sf(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&hl(e)))}function Tx(e,n,a){switch(n.tag){case 3:Ut(n,n.stateNode.containerInfo),ga(n,un,e.memoizedState.cache),Gs();break;case 27:case 5:Kt(n);break;case 4:Ut(n,n.stateNode.containerInfo);break;case 10:ga(n,n.type,n.memoizedProps.value);break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Wm(e,n,a):(ya(n),e=Xi(e,n,a),e!==null?e.sibling:null);ya(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(ks(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Ym(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(cn,cn.current),o)break;return null;case 22:case 23:return n.lanes=0,Hm(e,n,a);case 24:ga(n,un,e.memoizedState.cache)}return Xi(e,n,a)}function jm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)mn=!0;else{if(!of(e,a)&&(n.flags&128)===0)return mn=!1,Tx(e,n,a);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(n.flags&1048576)!==0&&Tp(n,fl,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var o=n.elementType,c=o._init;if(o=c(o._payload),n.type=o,typeof o=="function")mc(o)?(e=ur(o,e),n.tag=1,n=km(null,n,o,e,a)):(n.tag=0,n=$c(null,n,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===w){n.tag=11,n=zm(null,n,o,e,a);break t}else if(c===z){n.tag=14,n=Im(null,n,o,e,a);break t}}throw n=vt(o)||o,Error(r(306,n,""))}}return n;case 0:return $c(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=ur(o,n.pendingProps),km(e,n,o,c,a);case 3:t:{if(Ut(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,wc(e,n),Ks(n,o,null,a);var M=n.memoizedState;if(o=M.cache,ga(n,un,o),o!==h.cache&&Ec(n,[un],a,!0),Zs(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Xm(e,n,o,a);break t}else if(o!==c){c=Jn(Error(r(424)),n),Vs(c),n=Xm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ze=ci(e.firstChild),Dn=n,Ae=!0,ir=null,Si=!0,a=Am(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gs(),o===c){n=Xi(e,n,a);break t}yn(e,n,o,a)}n=n.child}return n;case 26:return Ul(e,n),e===null?(a=Jg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ae||(a=n.type,e=n.pendingProps,o=ql(St.current).createElement(a),o[on]=n,o[xn]=e,En(o,a,e),nn(o),n.stateNode=o):n.memoizedState=Jg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Kt(n),e===null&&Ae&&(o=n.stateNode=Zg(n.type,n.pendingProps,St.current),Dn=n,Si=!0,c=Ze,Ua(n.type)?(Gf=c,Ze=ci(o.firstChild)):Ze=c),yn(e,n,n.pendingProps.children,a),Ul(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((c=o=Ze)&&(o=Jx(o,n.type,n.pendingProps,Si),o!==null?(n.stateNode=o,Dn=n,Ze=ci(o.firstChild),Si=!1,c=!0):c=!1),c||ar(n)),Kt(n),c=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,zf(c,h)?o=null:M!==null&&zf(c,M)&&(n.flags|=32),n.memoizedState!==null&&(c=Pc(e,n,gx,null,null,a),xo._currentValue=c),Ul(e,n),yn(e,n,o,a),n.child;case 6:return e===null&&Ae&&((e=a=Ze)&&(a=$x(a,n.pendingProps,Si),a!==null?(n.stateNode=a,Dn=n,Ze=null,e=!0):e=!1),e||ar(n)),null;case 13:return Wm(e,n,a);case 4:return Ut(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=qr(n,null,o,a):yn(e,n,o,a),n.child;case 11:return zm(e,n,n.type,n.pendingProps,a);case 7:return yn(e,n,n.pendingProps,a),n.child;case 8:return yn(e,n,n.pendingProps.children,a),n.child;case 12:return yn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ga(n,n.type,o.value),yn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,sr(n),c=An(c),o=o(c),n.flags|=1,yn(e,n,o,a),n.child;case 14:return Im(e,n,n.type,n.pendingProps,a);case 15:return Fm(e,n,n.type,n.pendingProps,a);case 19:return Ym(e,n,a);case 31:return o=n.pendingProps,a=n.mode,o={mode:o.mode,children:o.children},e===null?(a=Ll(o,a),a.ref=n.ref,n.child=a,a.return=n,n=a):(a=zi(e.child,o),a.ref=n.ref,n.child=a,a.return=n,n=a),n;case 22:return Hm(e,n,a);case 24:return sr(n),o=An(un),e===null?(c=Ac(),c===null&&(c=ke,h=Tc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Cc(n),ga(n,un,c)):((e.lanes&a)!==0&&(wc(e,n),Ks(n,null,null,a),Zs()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),ga(n,un,o)):(o=h.cache,ga(n,un,o),o!==c.cache&&Ec(n,[un],a,!0))),yn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function Zm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i_(n)){if(n=ni.current,n!==null&&((Se&4194048)===Se?yi!==null:(Se&62914560)!==Se&&(Se&536870912)===0||n!==yi))throw Ys=Rc,Lp;e.flags|=8192}}function Nl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Lt():536870912,e.lanes|=n,Kr|=n)}function io(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function bx(e,n,a){var o=n.pendingProps;switch(xc(n),n.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Gi(un),oe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Rp())),qe(n),null;case 26:return a=n.memoizedState,e===null?(Wi(n),a!==null?(qe(n),Zm(n,a)):(qe(n),n.flags&=-16777217)):a?a!==e.memoizedState?(Wi(n),qe(n),Zm(n,a)):(qe(n),n.flags&=-16777217):(e.memoizedProps!==o&&Wi(n),qe(n),n.flags&=-16777217),null;case 27:He(n),a=St.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}e=Q.current,Hs(n)?bp(n):(e=Zg(c,o,a),n.stateNode=e,Wi(n))}return qe(n),null;case 5:if(He(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return qe(n),null}if(e=Q.current,Hs(n))bp(n);else{switch(c=ql(St.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[on]=n,e[xn]=o;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(En(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&Wi(n)}}return qe(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Wi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=St.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Dn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||Vg(e.nodeValue,a)),e||ar(n)}else e=ql(e).createTextNode(o),e[on]=n,n.stateNode=e}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Hs(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[on]=n}else Gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Rp(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ki(n),n):(ki(n),null)}if(ki(n),(n.flags&128)!==0)return n.lanes=a,n;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var h=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),Nl(n,n.updateQueue),qe(n),null;case 4:return oe(),e===null&&Lf(n.stateNode.containerInfo),qe(n),null;case 10:return Gi(n.type),qe(n),null;case 19:if(xt(cn),c=n.memoizedState,c===null)return qe(n),null;if(o=(n.flags&128)!==0,h=c.rendering,h===null)if(o)io(c,!1);else{if(Ke!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Cl(e),h!==null){for(n.flags|=128,io(c,!1),e=h.updateQueue,n.updateQueue=e,Nl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ep(a,e),a=a.sibling;return yt(cn,cn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ie()>Bl&&(n.flags|=128,o=!0,io(c,!1),n.lanes=4194304)}else{if(!o)if(e=Cl(h),e!==null){if(n.flags|=128,o=!0,e=e.updateQueue,n.updateQueue=e,Nl(n,e),io(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Ae)return qe(n),null}else 2*ie()-c.renderingStartTime>Bl&&a!==536870912&&(n.flags|=128,o=!0,io(c,!1),n.lanes=4194304);c.isBackwards?(h.sibling=n.child,n.child=h):(e=c.last,e!==null?e.sibling=h:n.child=h,c.last=h)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ie(),n.sibling=null,e=cn.current,yt(cn,o?e&1|2:e&1),n):(qe(n),null);case 22:case 23:return ki(n),Nc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Nl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&xt(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(un),qe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Ax(e,n){switch(xc(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(un),oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return He(n),null;case 13:if(ki(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Gs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return xt(cn),null;case 4:return oe(),null;case 10:return Gi(n.type),null;case 22:case 23:return ki(n),Nc(),e!==null&&xt(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(un),null;case 25:return null;default:return null}}function Km(e,n){switch(xc(n),n.tag){case 3:Gi(un),oe();break;case 26:case 27:case 5:He(n);break;case 4:oe();break;case 13:ki(n);break;case 19:xt(cn);break;case 10:Gi(n.type);break;case 22:case 23:ki(n),Nc(),e!==null&&xt(or);break;case 24:Gi(un)}}function ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==c)}}catch(T){Ie(n,n.return,T)}}function Ea(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var M=o.inst,T=M.destroy;if(T!==void 0){M.destroy=void 0,c=n;var P=a,J=T;try{J()}catch(ut){Ie(c,P,ut)}}}o=o.next}while(o!==h)}}catch(ut){Ie(n,n.return,ut)}}function Qm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Ip(n,a)}catch(o){Ie(e,e.return,o)}}}function Jm(e,n,a){a.props=ur(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Ie(e,n,o)}}function ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Ie(e,n,c)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Ie(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Ie(e,n,c)}else a.current=null}function $m(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Ie(e,e.return,c)}}function lf(e,n,a){try{var o=e.stateNode;Yx(o,e.type,a,n),o[xn]=n}catch(c){Ie(e,e.return,c)}}function tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ua(e.type)||e.tag===4}function uf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ua(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wl));else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(cf(e,n,a),e=e.sibling;e!==null;)cf(e,n,a),e=e.sibling}function Ol(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ua(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ol(e,n,a),e=e.sibling;e!==null;)Ol(e,n,a),e=e.sibling}function eg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);En(n,o,a),n[on]=e,n[xn]=a}catch(h){Ie(e,e.return,h)}}var qi=!1,Je=!1,ff=!1,ng=typeof WeakSet=="function"?WeakSet:Set,gn=null;function Rx(e,n){if(e=e.containerInfo,Pf=Jl,e=dp(e),lc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var M=0,T=-1,P=-1,J=0,ut=0,_t=e,et=null;e:for(;;){for(var nt;_t!==a||c!==0&&_t.nodeType!==3||(T=M+c),_t!==h||o!==0&&_t.nodeType!==3||(P=M+o),_t.nodeType===3&&(M+=_t.nodeValue.length),(nt=_t.firstChild)!==null;)et=_t,_t=nt;for(;;){if(_t===e)break e;if(et===a&&++J===c&&(T=M),et===h&&++ut===o&&(P=M),(nt=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=nt}a=T===-1||P===-1?null:{start:T,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},Jl=!1,gn=n;gn!==null;)if(n=gn,e=n.child,(n.subtreeFlags&1024)!==0&&e!==null)e.return=n,gn=e;else for(;gn!==null;){switch(n=gn,h=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var ee=ur(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(ee,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(Zt){Ie(a,a.return,Zt)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Ff(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ff(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,gn=e;break}gn=n.return}}function ig(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ta(e,a),o&4&&ao(5,a);break;case 1:if(Ta(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){Ie(a,a.return,M)}else{var c=ur(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){Ie(a,a.return,M)}}o&64&&Qm(a),o&512&&ro(a,a.return);break;case 3:if(Ta(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Ip(e,n)}catch(M){Ie(a,a.return,M)}}break;case 27:n===null&&o&4&&eg(a);case 26:case 5:Ta(e,a),n===null&&o&4&&$m(a),o&512&&ro(a,a.return);break;case 12:Ta(e,a);break;case 13:Ta(e,a),o&4&&sg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Bx.bind(null,a),tS(e,a))));break;case 22:if(o=a.memoizedState!==null||qi,!o){n=n!==null&&n.memoizedState!==null||Je,c=qi;var h=Je;qi=o,(Je=n)&&!h?ba(e,a,(a.subtreeFlags&8772)!==0):Ta(e,a),qi=c,Je=h}break;case 30:break;default:Ta(e,a)}}function ag(e){var n=e.alternate;n!==null&&(e.alternate=null,ag(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ha(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Xe=null,Bn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)rg(e,n,a),a=a.sibling}function rg(e,n,a){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(ct,a)}catch{}switch(a.tag){case 26:Je||Mi(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Je||Mi(a,n);var o=Xe,c=Bn;Ua(a.type)&&(Xe=a.stateNode,Bn=!1),Yi(e,n,a),mo(a.stateNode),Xe=o,Bn=c;break;case 5:Je||Mi(a,n);case 6:if(o=Xe,c=Bn,Xe=null,Yi(e,n,a),Xe=o,Bn=c,Xe!==null)if(Bn)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(a.stateNode)}catch(h){Ie(a,n,h)}else try{Xe.removeChild(a.stateNode)}catch(h){Ie(a,n,h)}break;case 18:Xe!==null&&(Bn?(e=Xe,Yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Eo(e)):Yg(Xe,a.stateNode));break;case 4:o=Xe,c=Bn,Xe=a.stateNode.containerInfo,Bn=!0,Yi(e,n,a),Xe=o,Bn=c;break;case 0:case 11:case 14:case 15:Je||Ea(2,a,n),Je||Ea(4,a,n),Yi(e,n,a);break;case 1:Je||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Jm(a,n,o)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:Je=(o=Je)||a.memoizedState!==null,Yi(e,n,a),Je=o;break;default:Yi(e,n,a)}}function sg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Eo(e)}catch(a){Ie(n,n.return,a)}}function Cx(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new ng),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new ng),n;default:throw Error(r(435,e.tag))}}function hf(e,n){var a=Cx(e);n.forEach(function(o){var c=zx.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Wn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,M=n,T=M;t:for(;T!==null;){switch(T.tag){case 27:if(Ua(T.type)){Xe=T.stateNode,Bn=!1;break t}break;case 5:Xe=T.stateNode,Bn=!1;break t;case 3:case 4:Xe=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Xe===null)throw Error(r(160));rg(h,M,c),Xe=null,Bn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)og(n,e),n=n.sibling}var ui=null;function og(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Wn(n,e),qn(e),o&4&&(Ea(3,e,e.return),ao(3,e),Ea(5,e,e.return));break;case 1:Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&64&&qi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=ui;if(Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[fa]||h[on]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),En(h,o,a),h[on]=e,nn(h),o=h;break t;case"link":var M=e_("link","href",c).get(o+(a.href||""));if(M){for(var T=0;T<M.length;T++)if(h=M[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){M.splice(T,1);break e}}h=c.createElement(o),En(h,o,a),c.head.appendChild(h);break;case"meta":if(M=e_("meta","content",c).get(o+(a.content||""))){for(T=0;T<M.length;T++)if(h=M[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){M.splice(T,1);break e}}h=c.createElement(o),En(h,o,a),c.head.appendChild(h);break;default:throw Error(r(468,o))}h[on]=e,nn(h),o=h}e.stateNode=o}else n_(c,e.type,e.stateNode);else e.stateNode=t_(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?n_(c,e.type,e.stateNode):t_(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&lf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),a!==null&&o&4&&lf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,e),qn(e),o&512&&(Je||a===null||Mi(a,a.return)),e.flags&32){c=e.stateNode;try{xi(c,"")}catch(nt){Ie(e,e.return,nt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,lf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(ff=!0);break;case 6:if(Wn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(nt){Ie(e,e.return,nt)}}break;case 3:if(Zl=null,c=ui,ui=Yl(n.containerInfo),Wn(n,e),ui=c,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(n.containerInfo)}catch(nt){Ie(e,e.return,nt)}ff&&(ff=!1,lg(e));break;case 4:o=ui,ui=Yl(e.stateNode.containerInfo),Wn(n,e),qn(e),ui=o;break;case 12:Wn(n,e),qn(e);break;case 13:Wn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(vf=ie()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 22:c=e.memoizedState!==null;var P=a!==null&&a.memoizedState!==null,J=qi,ut=Je;if(qi=J||c,Je=ut||P,Wn(n,e),Je=ut,qi=J,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||P||qi||Je||cr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){P=a=n;try{if(h=P.stateNode,c)M=h.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none";else{T=P.stateNode;var _t=P.memoizedProps.style,et=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(nt){Ie(P,P.return,nt)}}}else if(n.tag===6){if(a===null){P=n;try{P.stateNode.nodeValue=c?"":P.memoizedProps}catch(nt){Ie(P,P.return,nt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,hf(e,a))));break;case 19:Wn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,hf(e,o)));break;case 30:break;case 21:break;default:Wn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(tg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,h=uf(e);Ol(e,h,c);break;case 5:var M=a.stateNode;a.flags&32&&(xi(M,""),a.flags&=-33);var T=uf(e);Ol(e,T,M);break;case 3:case 4:var P=a.stateNode.containerInfo,J=uf(e);cf(e,J,P);break;default:throw Error(r(161))}}catch(ut){Ie(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function lg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;lg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)ig(e,n.alternate,n),n=n.sibling}function cr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ea(4,n,n.return),cr(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Jm(n,n.return,a),cr(n);break;case 27:mo(n.stateNode);case 26:case 5:Mi(n,n.return),cr(n);break;case 22:n.memoizedState===null&&cr(n);break;case 30:cr(n);break;default:cr(n)}e=e.sibling}}function ba(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,M=h.flags;switch(h.tag){case 0:case 11:case 15:ba(c,h,a),ao(4,h);break;case 1:if(ba(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(J){Ie(o,o.return,J)}if(o=h,c=o.updateQueue,c!==null){var T=o.stateNode;try{var P=c.shared.hiddenCallbacks;if(P!==null)for(c.shared.hiddenCallbacks=null,c=0;c<P.length;c++)zp(P[c],T)}catch(J){Ie(o,o.return,J)}}a&&M&64&&Qm(h),ro(h,h.return);break;case 27:eg(h);case 26:case 5:ba(c,h,a),a&&o===null&&M&4&&$m(h),ro(h,h.return);break;case 12:ba(c,h,a);break;case 13:ba(c,h,a),a&&M&4&&sg(c,h);break;case 22:h.memoizedState===null&&ba(c,h,a),ro(h,h.return);break;case 30:break;default:ba(c,h,a)}n=n.sibling}}function df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function Ei(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)ug(e,n,a,o),n=n.sibling}function ug(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Ei(e,n,a,o),c&2048&&ao(9,n);break;case 1:Ei(e,n,a,o);break;case 3:Ei(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(c&2048){Ei(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,M=h.id,T=h.onPostCommit;typeof T=="function"&&T(M,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(P){Ie(n,n.return,P)}}else Ei(e,n,a,o);break;case 13:Ei(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,M=n.alternate,n.memoizedState!==null?h._visibility&2?Ei(e,n,a,o):so(e,n):h._visibility&2?Ei(e,n,a,o):(h._visibility|=2,Yr(e,n,a,o,(n.subtreeFlags&10256)!==0)),c&2048&&df(M,n);break;case 24:Ei(e,n,a,o),c&2048&&pf(n.alternate,n);break;default:Ei(e,n,a,o)}}function Yr(e,n,a,o,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var h=e,M=n,T=a,P=o,J=M.flags;switch(M.tag){case 0:case 11:case 15:Yr(h,M,T,P,c),ao(8,M);break;case 23:break;case 22:var ut=M.stateNode;M.memoizedState!==null?ut._visibility&2?Yr(h,M,T,P,c):so(h,M):(ut._visibility|=2,Yr(h,M,T,P,c)),c&&J&2048&&df(M.alternate,M);break;case 24:Yr(h,M,T,P,c),c&&J&2048&&pf(M.alternate,M);break;default:Yr(h,M,T,P,c)}n=n.sibling}}function so(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:so(a,o),c&2048&&df(o.alternate,o);break;case 24:so(a,o),c&2048&&pf(o.alternate,o);break;default:so(a,o)}n=n.sibling}}var oo=8192;function jr(e){if(e.subtreeFlags&oo)for(e=e.child;e!==null;)cg(e),e=e.sibling}function cg(e){switch(e.tag){case 26:jr(e),e.flags&oo&&e.memoizedState!==null&&dS(ui,e.memoizedState,e.memoizedProps);break;case 5:jr(e);break;case 3:case 4:var n=ui;ui=Yl(e.stateNode.containerInfo),jr(e),ui=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=oo,oo=16777216,jr(e),oo=n):jr(e));break;default:jr(e)}}function fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)hg(e),e=e.sibling}function hg(e){switch(e.tag){case 0:case 11:case 15:lo(e),e.flags&2048&&Ea(9,e,e.return);break;case 3:lo(e);break;case 12:lo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Pl(e)):lo(e);break;default:lo(e)}}function Pl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];gn=o,dg(o,e)}fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ea(8,n,n.return),Pl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Pl(n));break;default:Pl(n)}e=e.sibling}}function dg(e,n){for(;gn!==null;){var a=gn;switch(a.tag){case 0:case 11:case 15:Ea(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,gn=o;else t:for(a=e;gn!==null;){o=gn;var c=o.sibling,h=o.return;if(ag(o),o===a){gn=null;break t}if(c!==null){c.return=h,gn=c;break t}gn=h}}}var wx={getCacheForType:function(e){var n=An(un),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},Dx=typeof WeakMap=="function"?WeakMap:Map,Ce=0,ke=null,pe=null,Se=0,we=0,Yn=null,Aa=!1,Zr=!1,mf=!1,ji=0,Ke=0,Ra=0,fr=0,gf=0,ii=0,Kr=0,uo=null,zn=null,_f=!1,vf=0,Bl=1/0,zl=null,Ca=null,Mn=0,wa=null,Qr=null,Jr=0,xf=0,Sf=null,pg=null,co=0,yf=null;function jn(){if((Ce&2)!==0&&Se!==0)return Se&-Se;if(B.T!==null){var e=Fr;return e!==0?e:Cf()}return Me()}function mg(){ii===0&&(ii=(Se&536870912)===0||Ae?k():536870912);var e=ni.current;return e!==null&&(e.flags|=32),ii}function Zn(e,n,a){(e===ke&&(we===2||we===9)||e.cancelPendingCommit!==null)&&($r(e,0),Da(e,Se,ii,!1)),gt(e,a),((Ce&2)===0||e!==ke)&&(e===ke&&((Ce&2)===0&&(fr|=a),Ke===4&&Da(e,Se,ii,!1)),Ti(e))}function gg(e,n,a){if((Ce&6)!==0)throw Error(r(327));var o=!a&&(n&124)===0&&(n&e.expiredLanes)===0||ne(e,n),c=o?Nx(e,n):Tf(e,n,!0),h=o;do{if(c===0){Zr&&!o&&Da(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Ux(a)){c=Tf(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var T=e;c=uo;var P=T.current.memoizedState.isDehydrated;if(P&&($r(T,M).flags|=256),M=Tf(T,M,!1),M!==2){if(mf&&!P){T.errorRecoveryDisabledLanes|=h,fr|=h,c=4;break t}h=zn,zn=c,h!==null&&(zn===null?zn=h:zn.push.apply(zn,h))}c=M}if(h=!1,c!==2)continue}}if(c===1){$r(e,0),Da(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(o,n,ii,!Aa);break t;case 2:zn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=vf+300-ie(),10<c)){if(Da(o,n,ii,!Aa),ue(o,0,!0)!==0)break t;o.timeoutHandle=Wg(_g.bind(null,o,a,zn,zl,_f,n,ii,fr,Kr,Aa,h,2,-0,0),c);break t}_g(o,a,zn,zl,_f,n,ii,fr,Kr,Aa,h,0,-0,0)}}break}while(!0);Ti(e)}function _g(e,n,a,o,c,h,M,T,P,J,ut,_t,et,nt){if(e.timeoutHandle=-1,_t=n.subtreeFlags,(_t&8192||(_t&16785408)===16785408)&&(vo={stylesheets:null,count:0,unsuspend:hS},cg(n),_t=pS(),_t!==null)){e.cancelPendingCommit=_t(Tg.bind(null,e,n,h,a,o,c,M,T,P,ut,1,et,nt)),Da(e,h,M,!J);return}Tg(e,n,h,a,o,c,M,T,P)}function Ux(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!kn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(e,n,a,o){n&=~gf,n&=~fr,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Ht(c),M=1<<h;o[h]=-1,c&=~M}a!==0&&Nt(e,a,n)}function Il(){return(Ce&6)===0?(fo(0),!1):!0}function Mf(){if(pe!==null){if(we===0)var e=pe.return;else e=pe,Hi=rr=null,Ic(e),Wr=null,eo=0,e=pe;for(;e!==null;)Km(e.alternate,e),e=e.return;pe=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Zx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Mf(),ke=e,pe=a=zi(e.current,null),Se=n,we=0,Yn=null,Aa=!1,Zr=ne(e,n),mf=!1,Kr=ii=gf=fr=Ra=Ke=0,zn=uo=null,_f=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-Ht(o),h=1<<c;n|=e[c],o&=~h}return ji=n,sl(),a}function vg(e,n){ce=null,B.H=bl,n===qs||n===ml?(n=Pp(),we=3):n===Lp?(n=Pp(),we=4):we=n===Bm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Yn=n,pe===null&&(Ke=1,Dl(e,Jn(n,e.current)))}function xg(){var e=B.H;return B.H=bl,e===null?bl:e}function Sg(){var e=B.A;return B.A=wx,e}function Ef(){Ke=4,Aa||(Se&4194048)!==Se&&ni.current!==null||(Zr=!0),(Ra&134217727)===0&&(fr&134217727)===0||ke===null||Da(ke,Se,ii,!1)}function Tf(e,n,a){var o=Ce;Ce|=2;var c=xg(),h=Sg();(ke!==e||Se!==n)&&(zl=null,$r(e,n)),n=!1;var M=Ke;t:do try{if(we!==0&&pe!==null){var T=pe,P=Yn;switch(we){case 8:Mf(),M=6;break t;case 3:case 2:case 9:case 6:ni.current===null&&(n=!0);var J=we;if(we=0,Yn=null,ts(e,T,P,J),a&&Zr){M=0;break t}break;default:J=we,we=0,Yn=null,ts(e,T,P,J)}}Lx(),M=Ke;break}catch(ut){vg(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Hi=rr=null,Ce=o,B.H=c,B.A=h,pe===null&&(ke=null,Se=0,sl()),M}function Lx(){for(;pe!==null;)yg(pe)}function Nx(e,n){var a=Ce;Ce|=2;var o=xg(),c=Sg();ke!==e||Se!==n?(zl=null,Bl=ie()+500,$r(e,n)):Zr=ne(e,n);t:do try{if(we!==0&&pe!==null){n=pe;var h=Yn;e:switch(we){case 1:we=0,Yn=null,ts(e,n,h,1);break;case 2:case 9:if(Np(h)){we=0,Yn=null,Mg(n);break}n=function(){we!==2&&we!==9||ke!==e||(we=7),Ti(e)},h.then(n,n);break t;case 3:we=7;break t;case 4:we=5;break t;case 7:Np(h)?(we=0,Yn=null,Mg(n)):(we=0,Yn=null,ts(e,n,h,7));break;case 5:var M=null;switch(pe.tag){case 26:M=pe.memoizedState;case 5:case 27:var T=pe;if(!M||i_(M)){we=0,Yn=null;var P=T.sibling;if(P!==null)pe=P;else{var J=T.return;J!==null?(pe=J,Fl(J)):pe=null}break e}}we=0,Yn=null,ts(e,n,h,5);break;case 6:we=0,Yn=null,ts(e,n,h,6);break;case 8:Mf(),Ke=6;break t;default:throw Error(r(462))}}Ox();break}catch(ut){vg(e,ut)}while(!0);return Hi=rr=null,B.H=o,B.A=c,Ce=a,pe!==null?0:(ke=null,Se=0,sl(),Ke)}function Ox(){for(;pe!==null&&!Ln();)yg(pe)}function yg(e){var n=jm(e.alternate,e,ji);e.memoizedProps=e.pendingProps,n===null?Fl(e):pe=n}function Mg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Vm(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=Vm(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:Ic(n);default:Km(a,n),n=pe=Ep(n,ji),n=jm(a,n,ji)}e.memoizedProps=e.pendingProps,n===null?Fl(e):pe=n}function ts(e,n,a,o){Hi=rr=null,Ic(n),Wr=null,eo=0;var c=n.return;try{if(Ex(e,c,n,a,Se)){Ke=1,Dl(e,Jn(a,e.current)),pe=null;return}}catch(h){if(c!==null)throw pe=c,h;Ke=1,Dl(e,Jn(a,e.current)),pe=null;return}n.flags&32768?(Ae||o===1?e=!0:Zr||(Se&536870912)!==0?e=!1:(Aa=e=!0,(o===2||o===9||o===3||o===6)&&(o=ni.current,o!==null&&o.tag===13&&(o.flags|=16384))),Eg(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){Eg(n,Aa);return}e=n.return;var a=bx(n.alternate,n,ji);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);Ke===0&&(Ke=5)}function Eg(e,n){do{var a=Ax(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);Ke=6,pe=null}function Tg(e,n,a,o,c,h,M,T,P){e.cancelPendingCommit=null;do Hl();while(Mn!==0);if((Ce&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(h=n.lanes|n.childLanes,h|=dc,Bt(e,a,h,M,T,P),e===ke&&(pe=ke=null,Se=0),Qr=n,wa=e,Jr=a,xf=h,Sf=c,pg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Ix(L,function(){return wg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=Z.p,Z.p=2,M=Ce,Ce|=4;try{Rx(e,n,a)}finally{Ce=M,Z.p=c,B.T=o}}Mn=1,bg(),Ag(),Rg()}}function bg(){if(Mn===1){Mn=0;var e=wa,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ce;Ce|=4;try{og(n,e);var h=Bf,M=dp(e.containerInfo),T=h.focusedElem,P=h.selectionRange;if(M!==T&&T&&T.ownerDocument&&hp(T.ownerDocument.documentElement,T)){if(P!==null&&lc(T)){var J=P.start,ut=P.end;if(ut===void 0&&(ut=J),"selectionStart"in T)T.selectionStart=J,T.selectionEnd=Math.min(ut,T.value.length);else{var _t=T.ownerDocument||document,et=_t&&_t.defaultView||window;if(et.getSelection){var nt=et.getSelection(),ee=T.textContent.length,Zt=Math.min(P.start,ee),Oe=P.end===void 0?Zt:Math.min(P.end,ee);!nt.extend&&Zt>Oe&&(M=Oe,Oe=Zt,Zt=M);var X=fp(T,Zt),G=fp(T,Oe);if(X&&G&&(nt.rangeCount!==1||nt.anchorNode!==X.node||nt.anchorOffset!==X.offset||nt.focusNode!==G.node||nt.focusOffset!==G.offset)){var K=_t.createRange();K.setStart(X.node,X.offset),nt.removeAllRanges(),Zt>Oe?(nt.addRange(K),nt.extend(G.node,G.offset)):(K.setEnd(G.node,G.offset),nt.addRange(K))}}}}for(_t=[],nt=T;nt=nt.parentNode;)nt.nodeType===1&&_t.push({element:nt,left:nt.scrollLeft,top:nt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var ft=_t[T];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Jl=!!Pf,Bf=Pf=null}finally{Ce=c,Z.p=o,B.T=a}}e.current=n,Mn=2}}function Ag(){if(Mn===2){Mn=0;var e=wa,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=Z.p;Z.p=2;var c=Ce;Ce|=4;try{ig(e,n.alternate,n)}finally{Ce=c,Z.p=o,B.T=a}}Mn=3}}function Rg(){if(Mn===4||Mn===3){Mn=0,ge();var e=wa,n=Qr,a=Jr,o=pg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Mn=5:(Mn=0,Qr=wa=null,Cg(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ca=null),en(a),n=n.stateNode,Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(ct,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,c=Z.p,Z.p=2,B.T=null;try{for(var h=e.onRecoverableError,M=0;M<o.length;M++){var T=o[M];h(T.value,{componentStack:T.stack})}}finally{B.T=n,Z.p=c}}(Jr&3)!==0&&Hl(),Ti(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===yf?co++:(co=0,yf=e):co=0,fo(0)}}function Cg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function Hl(e){return bg(),Ag(),Rg(),wg()}function wg(){if(Mn!==5)return!1;var e=wa,n=xf;xf=0;var a=en(Jr),o=B.T,c=Z.p;try{Z.p=32>a?32:a,B.T=null,a=Sf,Sf=null;var h=wa,M=Jr;if(Mn=0,Qr=wa=null,Jr=0,(Ce&6)!==0)throw Error(r(331));var T=Ce;if(Ce|=4,hg(h.current),ug(h,h.current,M,a),Ce=T,fo(0,!1),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(ct,h)}catch{}return!0}finally{Z.p=c,B.T=o,Cg(e,n)}}function Dg(e,n,a){n=Jn(a,n),n=Jc(e.stateNode,n,2),e=xa(e,n,2),e!==null&&(gt(e,2),Ti(e))}function Ie(e,n,a){if(e.tag===3)Dg(e,e,a);else for(;n!==null;){if(n.tag===3){Dg(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ca===null||!Ca.has(o))){e=Jn(a,e),a=Om(2),o=xa(n,a,2),o!==null&&(Pm(a,o,n,e),gt(o,2),Ti(o));break}}n=n.return}}function bf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Dx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(mf=!0,c.add(a),e=Px.bind(null,e,n,a),n.then(e,e))}function Px(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(Se&a)===a&&(Ke===4||Ke===3&&(Se&62914560)===Se&&300>ie()-vf?(Ce&2)===0&&$r(e,0):gf|=a,Kr===Se&&(Kr=0)),Ti(e)}function Ug(e,n){n===0&&(n=Lt()),e=Pr(e,n),e!==null&&(gt(e,n),Ti(e))}function Bx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Ug(e,a)}function zx(e,n){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Ug(e,a)}function Ix(e,n){return fe(e,n)}var Gl=null,es=null,Af=!1,Vl=!1,Rf=!1,hr=0;function Ti(e){e!==es&&e.next===null&&(es===null?Gl=es=e:es=es.next=e),Vl=!0,Af||(Af=!0,Hx())}function fo(e,n){if(!Rf&&Vl){Rf=!0;do for(var a=!1,o=Gl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var M=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-Ht(42|e)+1)-1,h&=c&~(M&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,Pg(o,h))}else h=Se,h=ue(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||ne(o,h)||(a=!0,Pg(o,h));o=o.next}while(a);Rf=!1}}function Fx(){Lg()}function Lg(){Vl=Af=!1;var e=0;hr!==0&&(jx()&&(e=hr),hr=0);for(var n=ie(),a=null,o=Gl;o!==null;){var c=o.next,h=Ng(o,n);h===0?(o.next=null,a===null?Gl=c:a.next=c,c===null&&(es=a)):(a=o,(e!==0||(h&3)!==0)&&(Vl=!0)),o=c}fo(e)}function Ng(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Ht(h),T=1<<M,P=c[M];P===-1?((T&a)===0||(T&o)!==0)&&(c[M]=Ue(T,n)):P<=n&&(e.expiredLanes|=T),h&=~T}if(n=ke,a=Se,a=ue(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(we===2||we===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&F(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ne(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&F(o),en(a)){case 2:case 8:a=Vt;break;case 32:a=L;break;case 268435456:a=tt;break;default:a=L}return o=Og.bind(null,e),a=fe(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&F(o),e.callbackPriority=2,e.callbackNode=null,2}function Og(e,n){if(Mn!==0&&Mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Hl()&&e.callbackNode!==a)return null;var o=Se;return o=ue(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(gg(e,o,n),Ng(e,ie()),e.callbackNode!=null&&e.callbackNode===a?Og.bind(null,e):null)}function Pg(e,n){if(Hl())return null;gg(e,n,!0)}function Hx(){Kx(function(){(Ce&6)!==0?fe(De,Fx):Lg()})}function Cf(){return hr===0&&(hr=k()),hr}function Bg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$o(""+e)}function zg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Gx(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=Bg((c[xn]||null).action),M=o.submitter;M&&(n=(n=M[xn]||null)?Bg(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var T=new il("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(hr!==0){var P=M?zg(c,M):new FormData(c);Yc(a,{pending:!0,data:P,method:c.method,action:h},null,P)}}else typeof h=="function"&&(T.preventDefault(),P=M?zg(c,M):new FormData(c),Yc(a,{pending:!0,data:P,method:c.method,action:h},h,P))},currentTarget:c}]})}}for(var wf=0;wf<hc.length;wf++){var Df=hc[wf],Vx=Df.toLowerCase(),kx=Df[0].toUpperCase()+Df.slice(1);li(Vx,"on"+kx)}li(gp,"onAnimationEnd"),li(_p,"onAnimationIteration"),li(vp,"onAnimationStart"),li("dblclick","onDoubleClick"),li("focusin","onFocus"),li("focusout","onBlur"),li(sx,"onTransitionRun"),li(ox,"onTransitionStart"),li(lx,"onTransitionCancel"),li(xp,"onTransitionEnd"),R("onMouseEnter",["mouseout","mouseover"]),R("onMouseLeave",["mouseout","mouseover"]),R("onPointerEnter",["pointerout","pointerover"]),R("onPointerLeave",["pointerout","pointerover"]),Ni("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ni("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ni("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ni("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ni("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ho="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ho));function Ig(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var T=o[M],P=T.instance,J=T.currentTarget;if(T=T.listener,P!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=J;try{h(c)}catch(ut){wl(ut)}c.currentTarget=null,h=P}else for(M=0;M<o.length;M++){if(T=o[M],P=T.instance,J=T.currentTarget,T=T.listener,P!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=J;try{h(c)}catch(ut){wl(ut)}c.currentTarget=null,h=P}}}}function me(e,n){var a=n[ja];a===void 0&&(a=n[ja]=new Set);var o=e+"__bubble";a.has(o)||(Fg(n,e,2,!1),a.add(o))}function Uf(e,n,a){var o=0;n&&(o|=4),Fg(a,e,o,n)}var kl="_reactListening"+Math.random().toString(36).slice(2);function Lf(e){if(!e[kl]){e[kl]=!0,Qo.forEach(function(a){a!=="selectionchange"&&(Xx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[kl]||(n[kl]=!0,Uf("selectionchange",!1,n))}}function Fg(e,n,a,o){switch(u_(n)){case 2:var c=_S;break;case 8:c=vS;break;default:c=qf}a=c.bind(null,n,a,e),c=void 0,!$u||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Nf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var T=o.stateNode.containerInfo;if(T===c)break;if(M===4)for(M=o.return;M!==null;){var P=M.tag;if((P===3||P===4)&&M.stateNode.containerInfo===c)return;M=M.return}for(;T!==null;){if(M=Ui(T),M===null)return;if(P=M.tag,P===5||P===6||P===26||P===27){o=h=M;continue t}T=T.parentNode}}o=o.return}qd(function(){var J=h,ut=Qu(a),_t=[];t:{var et=Sp.get(e);if(et!==void 0){var nt=il,ee=e;switch(e){case"keypress":if(el(a)===0)break t;case"keydown":case"keyup":nt=I0;break;case"focusin":ee="focus",nt=ic;break;case"focusout":ee="blur",nt=ic;break;case"beforeblur":case"afterblur":nt=ic;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=A0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=G0;break;case gp:case _p:case vp:nt=w0;break;case xp:nt=k0;break;case"scroll":case"scrollend":nt=T0;break;case"wheel":nt=W0;break;case"copy":case"cut":case"paste":nt=U0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=Qd;break;case"toggle":case"beforetoggle":nt=Y0}var Zt=(n&4)!==0,Oe=!Zt&&(e==="scroll"||e==="scrollend"),X=Zt?et!==null?et+"Capture":null:et;Zt=[];for(var G=J,K;G!==null;){var ft=G;if(K=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||K===null||X===null||(ft=Us(G,X),ft!=null&&Zt.push(po(G,ft,K))),Oe)break;G=G.return}0<Zt.length&&(et=new nt(et,ee,null,a,ut),_t.push({event:et,listeners:Zt}))}}if((n&7)===0){t:{if(et=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",et&&a!==Ku&&(ee=a.relatedTarget||a.fromElement)&&(Ui(ee)||ee[Nn]))break t;if((nt||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,nt?(ee=a.relatedTarget||a.toElement,nt=J,ee=ee?Ui(ee):null,ee!==null&&(Oe=u(ee),Zt=ee.tag,ee!==Oe||Zt!==5&&Zt!==27&&Zt!==6)&&(ee=null)):(nt=null,ee=J),nt!==ee)){if(Zt=Zd,ft="onMouseLeave",X="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(Zt=Qd,ft="onPointerLeave",X="onPointerEnter",G="pointer"),Oe=nt==null?et:Ka(nt),K=ee==null?et:Ka(ee),et=new Zt(ft,G+"leave",nt,a,ut),et.target=Oe,et.relatedTarget=K,ft=null,Ui(ut)===J&&(Zt=new Zt(X,G+"enter",ee,a,ut),Zt.target=K,Zt.relatedTarget=Oe,ft=Zt),Oe=ft,nt&&ee)e:{for(Zt=nt,X=ee,G=0,K=Zt;K;K=ns(K))G++;for(K=0,ft=X;ft;ft=ns(ft))K++;for(;0<G-K;)Zt=ns(Zt),G--;for(;0<K-G;)X=ns(X),K--;for(;G--;){if(Zt===X||X!==null&&Zt===X.alternate)break e;Zt=ns(Zt),X=ns(X)}Zt=null}else Zt=null;nt!==null&&Hg(_t,et,nt,Zt,!1),ee!==null&&Oe!==null&&Hg(_t,Oe,ee,Zt,!0)}}t:{if(et=J?Ka(J):window,nt=et.nodeName&&et.nodeName.toLowerCase(),nt==="select"||nt==="input"&&et.type==="file")var Ft=rp;else if(ip(et))if(sp)Ft=ix;else{Ft=ex;var he=tx}else nt=et.nodeName,!nt||nt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Zu(J.elementType)&&(Ft=rp):Ft=nx;if(Ft&&(Ft=Ft(e,J))){ap(_t,Ft,a,ut);break t}he&&he(e,et,J),e==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&bn(et,"number",et.value)}switch(he=J?Ka(J):window,e){case"focusin":(ip(he)||he.contentEditable==="true")&&(Lr=he,uc=J,Fs=null);break;case"focusout":Fs=uc=Lr=null;break;case"mousedown":cc=!0;break;case"contextmenu":case"mouseup":case"dragend":cc=!1,pp(_t,a,ut);break;case"selectionchange":if(rx)break;case"keydown":case"keyup":pp(_t,a,ut)}var kt;if(rc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Ur?ep(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(Jd&&a.locale!=="ko"&&(Ur||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Ur&&(kt=Yd()):(ma=ut,tc="value"in ma?ma.value:ma.textContent,Ur=!0)),he=Xl(J,Jt),0<he.length&&(Jt=new Kd(Jt,e,null,a,ut),_t.push({event:Jt,listeners:he}),kt?Jt.data=kt:(kt=np(a),kt!==null&&(Jt.data=kt)))),(kt=Z0?K0(e,a):Q0(e,a))&&(Jt=Xl(J,"onBeforeInput"),0<Jt.length&&(he=new Kd("onBeforeInput","beforeinput",null,a,ut),_t.push({event:he,listeners:Jt}),he.data=kt)),Gx(_t,e,J,a,ut)}Ig(_t,n)})}function po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Xl(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Us(e,a),c!=null&&o.unshift(po(e,c,h)),c=Us(e,n),c!=null&&o.push(po(e,c,h))),e.tag===3)return o;e=e.return}return[]}function ns(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Hg(e,n,a,o,c){for(var h=n._reactName,M=[];a!==null&&a!==o;){var T=a,P=T.alternate,J=T.stateNode;if(T=T.tag,P!==null&&P===o)break;T!==5&&T!==26&&T!==27||J===null||(P=J,c?(J=Us(a,h),J!=null&&M.unshift(po(a,J,P))):c||(J=Us(a,h),J!=null&&M.push(po(a,J,P)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var Wx=/\r\n?/g,qx=/\u0000|\uFFFD/g;function Gg(e){return(typeof e=="string"?e:""+e).replace(Wx,`
`).replace(qx,"")}function Vg(e,n){return n=Gg(n),Gg(e)===n}function Wl(){}function Ne(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||xi(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&xi(e,""+o);break;case"className":Ct(e,"class",o);break;case"tabIndex":Ct(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,o);break;case"style":Xd(e,o,h);break;case"data":if(n!=="object"){Ct(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=$o(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=$o(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":me("beforetoggle",e),me("toggle",e),Tt(e,"popover",o);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Tt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M0.get(a)||a,Tt(e,a,o))}}function Of(e,n,a,o,c,h){switch(a){case"style":Xd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof o=="string"?xi(e,o):(typeof o=="number"||typeof o=="bigint")&&xi(e,""+o);break;case"onScroll":o!=null&&me("scroll",e);break;case"onScrollEnd":o!=null&&me("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Wl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Jo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Tt(e,a,o)}}}function En(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,h,M,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),o&&Ne(e,n,"src",a.src,a,null);return;case"input":me("invalid",e);var T=h=M=c=null,P=null,J=null;for(o in a)if(a.hasOwnProperty(o)){var ut=a[o];if(ut!=null)switch(o){case"name":c=ut;break;case"type":M=ut;break;case"checked":P=ut;break;case"defaultChecked":J=ut;break;case"value":h=ut;break;case"defaultValue":T=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(e,n,o,ut,a,null)}}ze(e,h,T,P,J,M,c,!1),je(e);return;case"select":me("invalid",e),o=M=h=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":h=T;break;case"defaultValue":M=T;break;case"multiple":o=T;default:Ne(e,n,c,T,a,null)}n=h,a=M,e.multiple=!!o,n!=null?ln(e,!!o,n,!1):a!=null&&ln(e,!!o,a,!0);return;case"textarea":me("invalid",e),h=c=o=null;for(M in a)if(a.hasOwnProperty(M)&&(T=a[M],T!=null))switch(M){case"value":o=T;break;case"defaultValue":c=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Ne(e,n,M,T,a,null)}Sn(e,o,c,h),je(e);return;case"option":for(P in a)if(a.hasOwnProperty(P)&&(o=a[P],o!=null))switch(P){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ne(e,n,P,o,a,null)}return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(o=0;o<ho.length;o++)me(ho[o],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(o=a[J],o!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,J,o,a,null)}return;default:if(Zu(n)){for(ut in a)a.hasOwnProperty(ut)&&(o=a[ut],o!==void 0&&Of(e,n,ut,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ne(e,n,T,o,a,null))}function Yx(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,M=null,T=null,P=null,J=null,ut=null;for(nt in a){var _t=a[nt];if(a.hasOwnProperty(nt)&&_t!=null)switch(nt){case"checked":break;case"value":break;case"defaultValue":P=_t;default:o.hasOwnProperty(nt)||Ne(e,n,nt,null,o,_t)}}for(var et in o){var nt=o[et];if(_t=a[et],o.hasOwnProperty(et)&&(nt!=null||_t!=null))switch(et){case"type":h=nt;break;case"name":c=nt;break;case"checked":J=nt;break;case"defaultChecked":ut=nt;break;case"value":M=nt;break;case"defaultValue":T=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(r(137,n));break;default:nt!==_t&&Ne(e,n,et,nt,o,_t)}}Oi(e,M,T,P,J,ut,h,c);return;case"select":nt=M=T=et=null;for(h in a)if(P=a[h],a.hasOwnProperty(h)&&P!=null)switch(h){case"value":break;case"multiple":nt=P;default:o.hasOwnProperty(h)||Ne(e,n,h,null,o,P)}for(c in o)if(h=o[c],P=a[c],o.hasOwnProperty(c)&&(h!=null||P!=null))switch(c){case"value":et=h;break;case"defaultValue":T=h;break;case"multiple":M=h;default:h!==P&&Ne(e,n,c,h,o,P)}n=T,a=M,o=nt,et!=null?ln(e,!!a,et,!1):!!o!=!!a&&(n!=null?ln(e,!!a,n,!0):ln(e,!!a,a?[]:"",!1));return;case"textarea":nt=et=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ne(e,n,T,null,o,c)}for(M in o)if(c=o[M],h=a[M],o.hasOwnProperty(M)&&(c!=null||h!=null))switch(M){case"value":et=c;break;case"defaultValue":nt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==h&&Ne(e,n,M,c,o,h)}pn(e,et,nt);return;case"option":for(var ee in a)if(et=a[ee],a.hasOwnProperty(ee)&&et!=null&&!o.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Ne(e,n,ee,null,o,et)}for(P in o)if(et=o[P],nt=a[P],o.hasOwnProperty(P)&&et!==nt&&(et!=null||nt!=null))switch(P){case"selected":e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ne(e,n,P,et,o,nt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Zt in a)et=a[Zt],a.hasOwnProperty(Zt)&&et!=null&&!o.hasOwnProperty(Zt)&&Ne(e,n,Zt,null,o,et);for(J in o)if(et=o[J],nt=a[J],o.hasOwnProperty(J)&&et!==nt&&(et!=null||nt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ne(e,n,J,et,o,nt)}return;default:if(Zu(n)){for(var Oe in a)et=a[Oe],a.hasOwnProperty(Oe)&&et!==void 0&&!o.hasOwnProperty(Oe)&&Of(e,n,Oe,void 0,o,et);for(ut in o)et=o[ut],nt=a[ut],!o.hasOwnProperty(ut)||et===nt||et===void 0&&nt===void 0||Of(e,n,ut,et,o,nt);return}}for(var X in a)et=a[X],a.hasOwnProperty(X)&&et!=null&&!o.hasOwnProperty(X)&&Ne(e,n,X,null,o,et);for(_t in o)et=o[_t],nt=a[_t],!o.hasOwnProperty(_t)||et===nt||et==null&&nt==null||Ne(e,n,_t,et,o,nt)}var Pf=null,Bf=null;function ql(e){return e.nodeType===9?e:e.ownerDocument}function kg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Xg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var If=null;function jx(){var e=window.event;return e&&e.type==="popstate"?e===If?!1:(If=e,!0):(If=null,!1)}var Wg=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,qg=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof qg<"u"?function(e){return qg.resolve(null).then(e).catch(Qx)}:Wg;function Qx(e){setTimeout(function(){throw e})}function Ua(e){return e==="head"}function Yg(e,n){var a=n,o=0,c=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(0<o&&8>o){a=o;var M=e.ownerDocument;if(a&1&&mo(M.documentElement),a&2&&mo(M.body),a&4)for(a=M.head,mo(a),M=a.firstChild;M;){var T=M.nextSibling,P=M.nodeName;M[fa]||P==="SCRIPT"||P==="STYLE"||P==="LINK"&&M.rel.toLowerCase()==="stylesheet"||a.removeChild(M),M=T}}if(c===0){e.removeChild(h),Eo(n);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=h}while(a);Eo(n)}function Ff(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ff(a),ha(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Jx(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=ci(e.nextSibling),e===null)break}return null}function $x(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ci(e.nextSibling),e===null))return null;return e}function Hf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function tS(e,n){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}var Gf=null;function jg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function Zg(e,n,a){switch(n=ql(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function mo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ha(e)}var ai=new Map,Kg=new Set;function Yl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Zi=Z.d;Z.d={f:eS,r:nS,D:iS,C:aS,L:rS,m:sS,X:lS,S:oS,M:uS};function eS(){var e=Zi.f(),n=Il();return e||n}function nS(e){var n=Li(e);n!==null&&n.tag===5&&n.type==="form"?gm(n):Zi.r(e)}var is=typeof document>"u"?null:document;function Qg(e,n,a){var o=is;if(o&&typeof n=="string"&&n){var c=Ve(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Kg.has(c)||(Kg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function iS(e){Zi.D(e),Qg("dns-prefetch",e,null)}function aS(e,n){Zi.C(e,n),Qg("preconnect",e,n)}function rS(e,n,a){Zi.L(e,n,a);var o=is;if(o&&e&&n){var c='link[rel="preload"][as="'+Ve(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Ve(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Ve(a.imageSizes)+'"]')):c+='[href="'+Ve(e)+'"]';var h=c;switch(n){case"style":h=as(e);break;case"script":h=rs(e)}ai.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(go(h))||n==="script"&&o.querySelector(_o(h))||(n=o.createElement("link"),En(n,"link",e),nn(n),o.head.appendChild(n)))}}function sS(e,n){Zi.m(e,n);var a=is;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Ve(o)+'"][href="'+Ve(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=rs(e)}if(!ai.has(h)&&(e=g({rel:"modulepreload",href:e},n),ai.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(h)))return}o=a.createElement("link"),En(o,"link",e),nn(o),a.head.appendChild(o)}}}function oS(e,n,a){Zi.S(e,n,a);var o=is;if(o&&e){var c=da(o).hoistableStyles,h=as(e);n=n||"default";var M=c.get(h);if(!M){var T={loading:0,preload:null};if(M=o.querySelector(go(h)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(h))&&Vf(e,a);var P=M=o.createElement("link");nn(P),En(P,"link",e),P._p=new Promise(function(J,ut){P.onload=J,P.onerror=ut}),P.addEventListener("load",function(){T.loading|=1}),P.addEventListener("error",function(){T.loading|=2}),T.loading|=4,jl(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:T},c.set(h,M)}}}function lS(e,n){Zi.X(e,n);var a=is;if(a&&e){var o=da(a).hoistableScripts,c=rs(e),h=o.get(c);h||(h=a.querySelector(_o(c)),h||(e=g({src:e,async:!0},n),(n=ai.get(c))&&kf(e,n),h=a.createElement("script"),nn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function uS(e,n){Zi.M(e,n);var a=is;if(a&&e){var o=da(a).hoistableScripts,c=rs(e),h=o.get(c);h||(h=a.querySelector(_o(c)),h||(e=g({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&kf(e,n),h=a.createElement("script"),nn(h),En(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function Jg(e,n,a,o){var c=(c=St.current)?Yl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=as(a.href),a=da(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=as(a.href);var h=da(c).hoistableStyles,M=h.get(e);if(M||(c=c.ownerDocument||c,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=c.querySelector(go(e)))&&!h._p&&(M.instance=h,M.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),h||cS(c,e,a,M.state))),n&&o===null)throw Error(r(528,""));return M}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rs(a),a=da(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function as(e){return'href="'+Ve(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function $g(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function cS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),En(n,"link",a),nn(n),e.head.appendChild(n))}function rs(e){return'[src="'+Ve(e)+'"]'}function _o(e){return"script[async]"+e}function t_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ve(a.href)+'"]');if(o)return n.instance=o,nn(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nn(o),En(o,"style",c),jl(o,a.precedence,e),n.instance=o;case"stylesheet":c=as(a.href);var h=e.querySelector(go(c));if(h)return n.state.loading|=4,n.instance=h,nn(h),h;o=$g(a),(c=ai.get(c))&&Vf(o,c),h=(e.ownerDocument||e).createElement("link"),nn(h);var M=h;return M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),En(h,"link",o),n.state.loading|=4,jl(h,a.precedence,e),n.instance=h;case"script":return h=rs(a.src),(c=e.querySelector(_o(h)))?(n.instance=c,nn(c),c):(o=a,(c=ai.get(h))&&(o=g({},a),kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nn(c),En(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,jl(o,a.precedence,e));return n.instance}function jl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,M=0;M<o.length;M++){var T=o[M];if(T.dataset.precedence===n)h=T;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function e_(e,n,a){if(Zl===null){var o=new Map,c=Zl=new Map;c.set(a,o)}else c=Zl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[fa]||h[on]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var T=o.get(M);T?T.push(h):o.set(M,[h])}}return o}function n_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var vo=null;function hS(){}function dS(e,n,a){if(vo===null)throw Error(r(475));var o=vo;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=as(a.href),h=e.querySelector(go(c));if(h){e=h._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Kl.bind(o),e.then(o,o)),n.state.loading|=4,n.instance=h,nn(h);return}h=e.ownerDocument||e,a=$g(a),(c=ai.get(c))&&Vf(a,c),h=h.createElement("link"),nn(h);var M=h;M._p=new Promise(function(T,P){M.onload=T,M.onerror=P}),En(h,"link",a),n.instance=h}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(o.count++,n=Kl.bind(o),e.addEventListener("load",n),e.addEventListener("error",n))}}function pS(){if(vo===null)throw Error(r(475));var e=vo;return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Kl(){if(this.count--,this.count===0){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Xf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(mS,e),Ql=null,Kl.call(e))}function mS(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var o=a.get(null);else{a=new Map,Ql.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var M=c[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}c=n.instance,M=c.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,c),a.set(M,c),this.count++,o=Kl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var xo={$$typeof:D,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function gS(e,n,a,o,c,h,M,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ot(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.hiddenUpdates=ot(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function a_(e,n,a,o,c,h,M,T,P,J,ut,_t){return e=new gS(e,n,a,M,T,P,J,_t),n=1,h===!0&&(n|=24),h=Xn(3,null,null,n),e.current=h,h.stateNode=e,n=Tc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Cc(h),e}function r_(e){return e?(e=Br,e):Br}function s_(e,n,a,o,c,h){c=r_(c),o.context===null?o.context=c:o.pendingContext=c,o=va(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=xa(e,o,n),a!==null&&(Zn(a,e,n),js(a,e,n))}function o_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Wf(e,n){o_(e,n),(e=e.alternate)&&o_(e,n)}function l_(e){if(e.tag===13){var n=Pr(e,67108864);n!==null&&Zn(n,e,67108864),Wf(e,67108864)}}var Jl=!0;function _S(e,n,a,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=2,qf(e,n,a,o)}finally{Z.p=h,B.T=c}}function vS(e,n,a,o){var c=B.T;B.T=null;var h=Z.p;try{Z.p=8,qf(e,n,a,o)}finally{Z.p=h,B.T=c}}function qf(e,n,a,o){if(Jl){var c=Yf(o);if(c===null)Nf(e,n,o,$l,a),c_(e,o);else if(SS(c,e,n,a,o))o.stopPropagation();else if(c_(e,o),n&4&&-1<xS.indexOf(e)){for(;c!==null;){var h=Li(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Pt(h.pendingLanes);if(M!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;M;){var P=1<<31-Ht(M);T.entanglements[1]|=P,M&=~P}Ti(h),(Ce&6)===0&&(Bl=ie()+500,fo(0))}}break;case 13:T=Pr(h,2),T!==null&&Zn(T,h,2),Il(),Wf(h,2)}if(h=Yf(o),h===null&&Nf(e,n,o,$l,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Nf(e,n,o,null,a)}}function Yf(e){return e=Qu(e),jf(e)}var $l=null;function jf(e){if($l=null,e=Ui(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return $l=e,null}function u_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Wt()){case De:return 2;case Vt:return 8;case L:case b:return 32;case tt:return 268435456;default:return 32}default:return 32}}var Zf=!1,La=null,Na=null,Oa=null,So=new Map,yo=new Map,Pa=[],xS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function c_(e,n){switch(e){case"focusin":case"focusout":La=null;break;case"dragenter":case"dragleave":Na=null;break;case"mouseover":case"mouseout":Oa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Li(n),n!==null&&l_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function SS(e,n,a,o,c){switch(n){case"focusin":return La=Mo(La,e,n,a,o,c),!0;case"dragenter":return Na=Mo(Na,e,n,a,o,c),!0;case"mouseover":return Oa=Mo(Oa,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return So.set(h,Mo(So.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,yo.set(h,Mo(yo.get(h)||null,e,n,a,o,c)),!0}return!1}function f_(e){var n=Ui(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Vn(e.priority,function(){if(a.tag===13){var o=jn();o=Ge(o);var c=Pr(a,o);c!==null&&Zn(c,a,o),Wf(a,o)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Yf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Ku=o,a.target.dispatchEvent(o),Ku=null}else return n=Li(a),n!==null&&l_(n),e.blockedOn=a,!1;n.shift()}return!0}function h_(e,n,a){tu(e)&&a.delete(n)}function yS(){Zf=!1,La!==null&&tu(La)&&(La=null),Na!==null&&tu(Na)&&(Na=null),Oa!==null&&tu(Oa)&&(Oa=null),So.forEach(h_),yo.forEach(h_)}function eu(e,n){e.blockedOn===n&&(e.blockedOn=null,Zf||(Zf=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,yS)))}var nu=null;function d_(e){nu!==e&&(nu=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){nu===e&&(nu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(jf(o||a)===null)continue;break}var h=Li(a);h!==null&&(e.splice(n,3),n-=3,Yc(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Eo(e){function n(P){return eu(P,e)}La!==null&&eu(La,e),Na!==null&&eu(Na,e),Oa!==null&&eu(Oa,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Pa.length;a++){var o=Pa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)f_(a),a.blockedOn===null&&Pa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],M=c[xn]||null;if(typeof h=="function")M||d_(a);else if(M){var T=null;if(h&&h.hasAttribute("formAction")){if(c=h,M=h[xn]||null)T=M.formAction;else if(jf(c)!==null)continue}else T=M.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),d_(a)}}}function Kf(e){this._internalRoot=e}iu.prototype.render=Kf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=jn();s_(a,o,e,n,null,null)},iu.prototype.unmount=Kf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;s_(e.current,2,null,e,null,null),Il(),n[Nn]=null}};function iu(e){this._internalRoot=e}iu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Me();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,e),a===0&&f_(e)}};var p_=t.version;if(p_!=="19.1.0")throw Error(r(527,p_,"19.1.0"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var MS={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var au=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!au.isDisabled&&au.supportsFiber)try{ct=au.inject(MS),Ot=au}catch{}}return bo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,o="",c=Dm,h=Um,M=Lm,T=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(T=n.unstable_transitionCallbacks)),n=a_(e,1,!1,null,null,a,o,c,h,M,T,null),e[Nn]=n.current,Lf(e),new Kf(n)},bo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var o=!1,c="",h=Dm,M=Um,T=Lm,P=null,J=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(P=a.unstable_transitionCallbacks),a.formState!==void 0&&(J=a.formState)),n=a_(e,1,!0,n,a??null,o,c,h,M,T,P,J),n.context=r_(null),a=n.current,o=jn(),o=Ge(o),c=va(o),c.callback=null,xa(a,c,o),a=o,n.current.lanes=a,gt(n,a),Ti(n),e[Nn]=n.current,Lf(e),new iu(n)},bo.version="19.1.0",bo}var T_;function NS(){if(T_)return $f.exports;T_=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),$f.exports=LS(),$f.exports}var OS=NS();const PS=wv(OS);var Ao={},b_;function BS(){if(b_)return Ao;b_=1,Object.defineProperty(Ao,"__esModule",{value:!0}),Ao.parse=f,Ao.serialize=m;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,r=/^[\u0020-\u003A\u003D-\u007E]*$/,l=Object.prototype.toString,u=(()=>{const x=function(){};return x.prototype=Object.create(null),x})();function f(x,y){const E=new u,A=x.length;if(A<2)return E;const S=(y==null?void 0:y.decode)||g;let _=0;do{const O=x.indexOf("=",_);if(O===-1)break;const D=x.indexOf(";",_),w=D===-1?A:D;if(O>w){_=x.lastIndexOf(";",O-1)+1;continue}const I=d(x,_,O),H=p(x,O,I),z=x.slice(I,H);if(E[z]===void 0){let W=d(x,O+1,w),U=p(x,w,W);const C=S(x.slice(W,U));E[z]=C}_=w+1}while(_<A);return E}function d(x,y,E){do{const A=x.charCodeAt(y);if(A!==32&&A!==9)return y}while(++y<E);return E}function p(x,y,E){for(;y>E;){const A=x.charCodeAt(--y);if(A!==32&&A!==9)return y+1}return E}function m(x,y,E){const A=(E==null?void 0:E.encode)||encodeURIComponent;if(!s.test(x))throw new TypeError(`argument name is invalid: ${x}`);const S=A(y);if(!t.test(S))throw new TypeError(`argument val is invalid: ${y}`);let _=x+"="+S;if(!E)return _;if(E.maxAge!==void 0){if(!Number.isInteger(E.maxAge))throw new TypeError(`option maxAge is invalid: ${E.maxAge}`);_+="; Max-Age="+E.maxAge}if(E.domain){if(!i.test(E.domain))throw new TypeError(`option domain is invalid: ${E.domain}`);_+="; Domain="+E.domain}if(E.path){if(!r.test(E.path))throw new TypeError(`option path is invalid: ${E.path}`);_+="; Path="+E.path}if(E.expires){if(!v(E.expires)||!Number.isFinite(E.expires.valueOf()))throw new TypeError(`option expires is invalid: ${E.expires}`);_+="; Expires="+E.expires.toUTCString()}if(E.httpOnly&&(_+="; HttpOnly"),E.secure&&(_+="; Secure"),E.partitioned&&(_+="; Partitioned"),E.priority)switch(typeof E.priority=="string"?E.priority.toLowerCase():void 0){case"low":_+="; Priority=Low";break;case"medium":_+="; Priority=Medium";break;case"high":_+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${E.priority}`)}if(E.sameSite)switch(typeof E.sameSite=="string"?E.sameSite.toLowerCase():E.sameSite){case!0:case"strict":_+="; SameSite=Strict";break;case"lax":_+="; SameSite=Lax";break;case"none":_+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${E.sameSite}`)}return _}function g(x){if(x.indexOf("%")===-1)return x;try{return decodeURIComponent(x)}catch{return x}}function v(x){return l.call(x)==="[object Date]"}return Ao}BS();var A_="popstate";function zS(s={}){function t(l,u){let{pathname:f="/",search:d="",hash:p=""}=Rr(l.location.hash.substring(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Ph("",{pathname:f,search:d,hash:p},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function i(l,u){let f=l.document.querySelector("base"),d="";if(f&&f.getAttribute("href")){let p=l.location.href,m=p.indexOf("#");d=m===-1?p:p.slice(0,m)}return d+"#"+(typeof u=="string"?u:Oo(u))}function r(l,u){vi(l.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(u)})`)}return FS(t,i,r,s)}function Ye(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}function vi(s,t){if(!s){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function IS(){return Math.random().toString(36).substring(2,10)}function R_(s,t){return{usr:s.state,key:s.key,idx:t}}function Ph(s,t,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof t=="string"?Rr(t):t,state:i,key:t&&t.key||r||IS()}}function Oo({pathname:s="/",search:t="",hash:i=""}){return t&&t!=="?"&&(s+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Rr(s){let t={};if(s){let i=s.indexOf("#");i>=0&&(t.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(t.search=s.substring(r),s=s.substring(0,r)),s&&(t.pathname=s)}return t}function FS(s,t,i,r={}){let{window:l=document.defaultView,v5Compat:u=!1}=r,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let S=g(),_=S==null?null:S-m;m=S,p&&p({action:d,location:A.location,delta:_})}function x(S,_){d="PUSH";let O=Ph(A.location,S,_);i&&i(O,S),m=g()+1;let D=R_(O,m),w=A.createHref(O);try{f.pushState(D,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(w)}u&&p&&p({action:d,location:A.location,delta:1})}function y(S,_){d="REPLACE";let O=Ph(A.location,S,_);i&&i(O,S),m=g();let D=R_(O,m),w=A.createHref(O);f.replaceState(D,"",w),u&&p&&p({action:d,location:A.location,delta:0})}function E(S){return HS(S)}let A={get action(){return d},get location(){return s(l,f)},listen(S){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(A_,v),p=S,()=>{l.removeEventListener(A_,v),p=null}},createHref(S){return t(l,S)},createURL:E,encodeLocation(S){let _=E(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:y,go(S){return f.go(S)}};return A}function HS(s,t=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),Ye(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Oo(s);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function Dv(s,t,i="/"){return GS(s,t,i,!1)}function GS(s,t,i,r){let l=typeof t=="string"?Rr(t):t,u=oa(l.pathname||"/",i);if(u==null)return null;let f=Uv(s);VS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=$S(u);d=QS(f[p],m,r)}return d}function Uv(s,t=[],i=[],r=""){let l=(u,f,d)=>{let p={relativePath:d===void 0?u.path||"":d,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};p.relativePath.startsWith("/")&&(Ye(p.relativePath.startsWith(r),`Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(r.length));let m=ra([r,p.relativePath]),g=i.concat(p);u.children&&u.children.length>0&&(Ye(u.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${m}".`),Uv(u.children,t,g,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:ZS(m,u.index),routesMeta:g})};return s.forEach((u,f)=>{var d;if(u.path===""||!((d=u.path)!=null&&d.includes("?")))l(u,f);else for(let p of Lv(u.path))l(u,f,p)}),t}function Lv(s){let t=s.split("/");if(t.length===0)return[];let[i,...r]=t,l=i.endsWith("?"),u=i.replace(/\?$/,"");if(r.length===0)return l?[u,""]:[u];let f=Lv(r.join("/")),d=[];return d.push(...f.map(p=>p===""?u:[u,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function VS(s){s.sort((t,i)=>t.score!==i.score?i.score-t.score:KS(t.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var kS=/^:[\w-]+$/,XS=3,WS=2,qS=1,YS=10,jS=-2,C_=s=>s==="*";function ZS(s,t){let i=s.split("/"),r=i.length;return i.some(C_)&&(r+=jS),t&&(r+=WS),i.filter(l=>!C_(l)).reduce((l,u)=>l+(kS.test(u)?XS:u===""?qS:YS),r)}function KS(s,t){return s.length===t.length&&s.slice(0,-1).every((r,l)=>r===t[l])?s[s.length-1]-t[t.length-1]:0}function QS(s,t,i=!1){let{routesMeta:r}=s,l={},u="/",f=[];for(let d=0;d<r.length;++d){let p=r[d],m=d===r.length-1,g=u==="/"?t:t.slice(u.length)||"/",v=Fu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!v&&m&&i&&!r[r.length-1].route.index&&(v=Fu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ra([u,v.pathname]),pathnameBase:iy(ra([u,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(u=ra([u,v.pathnameBase]))}return f}function Fu(s,t){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=JS(s.path,s.caseSensitive,s.end),l=t.match(i);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:r.reduce((m,{paramName:g,isOptional:v},x)=>{if(g==="*"){let E=d[x]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const y=d[x];return v&&!y?m[g]=void 0:m[g]=(y||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:s}}function JS(s,t=!1,i=!0){vi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(r.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),r]}function $S(s){try{return s.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),s}}function oa(s,t){if(t==="/")return s;if(!s.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function ty(s,t="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Rr(s):s;return{pathname:i?i.startsWith("/")?i:ey(i,t):t,search:ay(r),hash:ry(l)}}function ey(s,t){let i=t.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function ih(s,t,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function ny(s){return s.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function Nv(s){let t=ny(s);return t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase)}function Ov(s,t,i,r=!1){let l;typeof s=="string"?l=Rr(s):(l={...s},Ye(!l.pathname||!l.pathname.includes("?"),ih("?","pathname","search",l)),Ye(!l.pathname||!l.pathname.includes("#"),ih("#","pathname","hash",l)),Ye(!l.search||!l.search.includes("#"),ih("#","search","hash",l)));let u=s===""||l.pathname==="",f=u?"/":l.pathname,d;if(f==null)d=i;else{let v=t.length-1;if(!r&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?t[v]:"/"}let p=ty(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ra=s=>s.join("/").replace(/\/\/+/g,"/"),iy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),ay=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ry=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function sy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Pv=["POST","PUT","PATCH","DELETE"];new Set(Pv);var oy=["GET",...Pv];new Set(oy);var Cs=dt.createContext(null);Cs.displayName="DataRouter";var ku=dt.createContext(null);ku.displayName="DataRouterState";var Bv=dt.createContext({isTransitioning:!1});Bv.displayName="ViewTransition";var ly=dt.createContext(new Map);ly.displayName="Fetchers";var uy=dt.createContext(null);uy.displayName="Await";var wi=dt.createContext(null);wi.displayName="Navigation";var Fo=dt.createContext(null);Fo.displayName="Location";var ca=dt.createContext({outlet:null,matches:[],isDataRoute:!1});ca.displayName="Route";var Rd=dt.createContext(null);Rd.displayName="RouteError";function cy(s,{relative:t}={}){Ye(Ho(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=dt.useContext(wi),{hash:l,pathname:u,search:f}=Go(s,{relative:t}),d=u;return i!=="/"&&(d=u==="/"?i:ra([i,u])),r.createHref({pathname:d,search:f,hash:l})}function Ho(){return dt.useContext(Fo)!=null}function Cr(){return Ye(Ho(),"useLocation() may be used only in the context of a <Router> component."),dt.useContext(Fo).location}var zv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Iv(s){dt.useContext(wi).static||dt.useLayoutEffect(s)}function fy(){let{isDataRoute:s}=dt.useContext(ca);return s?Ty():hy()}function hy(){Ye(Ho(),"useNavigate() may be used only in the context of a <Router> component.");let s=dt.useContext(Cs),{basename:t,navigator:i}=dt.useContext(wi),{matches:r}=dt.useContext(ca),{pathname:l}=Cr(),u=JSON.stringify(Nv(r)),f=dt.useRef(!1);return Iv(()=>{f.current=!0}),dt.useCallback((p,m={})=>{if(vi(f.current,zv),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=Ov(p,JSON.parse(u),l,m.relative==="path");s==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:ra([t,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[t,i,u,l,s])}dt.createContext(null);function Go(s,{relative:t}={}){let{matches:i}=dt.useContext(ca),{pathname:r}=Cr(),l=JSON.stringify(Nv(i));return dt.useMemo(()=>Ov(s,JSON.parse(l),r,t==="path"),[s,l,r,t])}function dy(s,t){return Fv(s,t)}function Fv(s,t,i,r){var O;Ye(Ho(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l,static:u}=dt.useContext(wi),{matches:f}=dt.useContext(ca),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let D=v&&v.path||"";Hv(m,!v||D.endsWith("*")||D.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D==="/"?"*":`${D}/*`}">.`)}let x=Cr(),y;if(t){let D=typeof t=="string"?Rr(t):t;Ye(g==="/"||((O=D.pathname)==null?void 0:O.startsWith(g)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${D.pathname}" was given in the \`location\` prop.`),y=D}else y=x;let E=y.pathname||"/",A=E;if(g!=="/"){let D=g.replace(/^\//,"").split("/");A="/"+E.replace(/^\//,"").split("/").slice(D.length).join("/")}let S=!u&&i&&i.matches&&i.matches.length>0?i.matches:Dv(s,{pathname:A});vi(v||S!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),vi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=vy(S&&S.map(D=>Object.assign({},D,{params:Object.assign({},p,D.params),pathname:ra([g,l.encodeLocation?l.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ra([g,l.encodeLocation?l.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),f,i,r);return t&&_?dt.createElement(Fo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},_):_}function py(){let s=Ey(),t=sy(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},u={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=dt.createElement(dt.Fragment,null,dt.createElement("p",null,"💿 Hey developer 👋"),dt.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",dt.createElement("code",{style:u},"ErrorBoundary")," or"," ",dt.createElement("code",{style:u},"errorElement")," prop on your route.")),dt.createElement(dt.Fragment,null,dt.createElement("h2",null,"Unexpected Application Error!"),dt.createElement("h3",{style:{fontStyle:"italic"}},t),i?dt.createElement("pre",{style:l},i):null,f)}var my=dt.createElement(py,null),gy=class extends dt.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,t){return t.location!==s.location||t.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:t.error,location:t.location,revalidation:s.revalidation||t.revalidation}}componentDidCatch(s,t){console.error("React Router caught the following error during render",s,t)}render(){return this.state.error!==void 0?dt.createElement(ca.Provider,{value:this.props.routeContext},dt.createElement(Rd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function _y({routeContext:s,match:t,children:i}){let r=dt.useContext(Cs);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),dt.createElement(ca.Provider,{value:s},i)}function vy(s,t=[],i=null,r=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(t.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let l=s,u=i==null?void 0:i.errors;if(u!=null){let p=l.findIndex(m=>m.route.id&&(u==null?void 0:u[m.route.id])!==void 0);Ye(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),l=l.slice(0,Math.min(l.length,p+1))}let f=!1,d=-1;if(i)for(let p=0;p<l.length;p++){let m=l[p];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(d=p),m.route.id){let{loaderData:g,errors:v}=i,x=m.route.loader&&!g.hasOwnProperty(m.route.id)&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){f=!0,d>=0?l=l.slice(0,d+1):l=[l[0]];break}}}return l.reduceRight((p,m,g)=>{let v,x=!1,y=null,E=null;i&&(v=u&&m.route.id?u[m.route.id]:void 0,y=m.route.errorElement||my,f&&(d<0&&g===0?(Hv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),x=!0,E=null):d===g&&(x=!0,E=m.route.hydrateFallbackElement||null)));let A=t.concat(l.slice(0,g+1)),S=()=>{let _;return v?_=y:x?_=E:m.route.Component?_=dt.createElement(m.route.Component,null):m.route.element?_=m.route.element:_=p,dt.createElement(_y,{match:m,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:_})};return i&&(m.route.ErrorBoundary||m.route.errorElement||g===0)?dt.createElement(gy,{location:i.location,revalidation:i.revalidation,component:y,error:v,children:S(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):S()},null)}function Cd(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function xy(s){let t=dt.useContext(Cs);return Ye(t,Cd(s)),t}function Sy(s){let t=dt.useContext(ku);return Ye(t,Cd(s)),t}function yy(s){let t=dt.useContext(ca);return Ye(t,Cd(s)),t}function wd(s){let t=yy(s),i=t.matches[t.matches.length-1];return Ye(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function My(){return wd("useRouteId")}function Ey(){var r;let s=dt.useContext(Rd),t=Sy("useRouteError"),i=wd("useRouteError");return s!==void 0?s:(r=t.errors)==null?void 0:r[i]}function Ty(){let{router:s}=xy("useNavigate"),t=wd("useNavigate"),i=dt.useRef(!1);return Iv(()=>{i.current=!0}),dt.useCallback(async(l,u={})=>{vi(i.current,zv),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:t,...u}))},[s,t])}var w_={};function Hv(s,t,i){!t&&!w_[s]&&(w_[s]=!0,vi(!1,i))}dt.memo(by);function by({routes:s,future:t,state:i}){return Fv(s,void 0,i,t)}function Bh(s){Ye(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ay({basename:s="/",children:t=null,location:i,navigationType:r="POP",navigator:l,static:u=!1}){Ye(!Ho(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=dt.useMemo(()=>({basename:f,navigator:l,static:u,future:{}}),[f,l,u]);typeof i=="string"&&(i=Rr(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:x="default"}=i,y=dt.useMemo(()=>{let E=oa(p,f);return E==null?null:{location:{pathname:E,search:m,hash:g,state:v,key:x},navigationType:r}},[f,p,m,g,v,x,r]);return vi(y!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),y==null?null:dt.createElement(wi.Provider,{value:d},dt.createElement(Fo.Provider,{children:t,value:y}))}function Ry({children:s,location:t}){return dy(zh(s),t)}function zh(s,t=[]){let i=[];return dt.Children.forEach(s,(r,l)=>{if(!dt.isValidElement(r))return;let u=[...t,l];if(r.type===dt.Fragment){i.push.apply(i,zh(r.props.children,u));return}Ye(r.type===Bh,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ye(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||u.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=zh(r.props.children,u)),i.push(f)}),i}var Du="get",Uu="application/x-www-form-urlencoded";function Xu(s){return s!=null&&typeof s.tagName=="string"}function Cy(s){return Xu(s)&&s.tagName.toLowerCase()==="button"}function wy(s){return Xu(s)&&s.tagName.toLowerCase()==="form"}function Dy(s){return Xu(s)&&s.tagName.toLowerCase()==="input"}function Uy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ly(s,t){return s.button===0&&(!t||t==="_self")&&!Uy(s)}var ru=null;function Ny(){if(ru===null)try{new FormData(document.createElement("form"),0),ru=!1}catch{ru=!0}return ru}var Oy=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function ah(s){return s!=null&&!Oy.has(s)?(vi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Uu}"`),null):s}function Py(s,t){let i,r,l,u,f;if(wy(s)){let d=s.getAttribute("action");r=d?oa(d,t):null,i=s.getAttribute("method")||Du,l=ah(s.getAttribute("enctype"))||Uu,u=new FormData(s)}else if(Cy(s)||Dy(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(r=p?oa(p,t):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Du,l=ah(s.getAttribute("formenctype"))||ah(d.getAttribute("enctype"))||Uu,u=new FormData(d,s),!Ny()){let{name:m,type:g,value:v}=s;if(g==="image"){let x=m?`${m}.`:"";u.append(`${x}x`,"0"),u.append(`${x}y`,"0")}else m&&u.append(m,v)}}else{if(Xu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Du,r=null,l=Uu,f=s}return u&&l==="text/plain"&&(f=u,u=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:u,body:f}}function Dd(s,t){if(s===!1||s===null||typeof s>"u")throw new Error(t)}async function By(s,t){if(s.id in t)return t[s.id];try{let i=await import(s.module);return t[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function zy(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Iy(s,t,i){let r=await Promise.all(s.map(async l=>{let u=t.routes[l.route.id];if(u){let f=await By(u,i);return f.links?f.links():[]}return[]}));return Vy(r.flat(1).filter(zy).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function D_(s,t,i,r,l,u){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>{var g;return i[m].pathname!==p.pathname||((g=i[m].route.path)==null?void 0:g.endsWith("*"))&&i[m].params["*"]!==p.params["*"]};return u==="assets"?t.filter((p,m)=>f(p,m)||d(p,m)):u==="data"?t.filter((p,m)=>{var v;let g=r.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function Fy(s,t,{includeHydrateFallback:i}={}){return Hy(s.map(r=>{let l=t.routes[r.route.id];if(!l)return[];let u=[l.module];return l.clientActionModule&&(u=u.concat(l.clientActionModule)),l.clientLoaderModule&&(u=u.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(u=u.concat(l.hydrateFallbackModule)),l.imports&&(u=u.concat(l.imports)),u}).flat(1))}function Hy(s){return[...new Set(s)]}function Gy(s){let t={},i=Object.keys(s).sort();for(let r of i)t[r]=s[r];return t}function Vy(s,t){let i=new Set;return new Set(t),s.reduce((r,l)=>{let u=JSON.stringify(Gy(l));return i.has(u)||(i.add(u),r.push({key:u,link:l})),r},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var ky=new Set([100,101,204,205]);function Xy(s,t){let i=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return i.pathname==="/"?i.pathname="_root.data":t&&oa(i.pathname,t)==="/"?i.pathname=`${t.replace(/\/$/,"")}/_root.data`:i.pathname=`${i.pathname.replace(/\/$/,"")}.data`,i}function Gv(){let s=dt.useContext(Cs);return Dd(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Wy(){let s=dt.useContext(ku);return Dd(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Ud=dt.createContext(void 0);Ud.displayName="FrameworkContext";function Vv(){let s=dt.useContext(Ud);return Dd(s,"You must render this element inside a <HydratedRouter> element"),s}function qy(s,t){let i=dt.useContext(Ud),[r,l]=dt.useState(!1),[u,f]=dt.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=t,x=dt.useRef(null);dt.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(O=>{f(O.isIntersecting)})},S=new IntersectionObserver(A,{threshold:.5});return x.current&&S.observe(x.current),()=>{S.disconnect()}}},[s]),dt.useEffect(()=>{if(r){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[r]);let y=()=>{l(!0)},E=()=>{l(!1),f(!1)};return i?s!=="intent"?[u,x,{}]:[u,x,{onFocus:Ro(d,y),onBlur:Ro(p,E),onMouseEnter:Ro(m,y),onMouseLeave:Ro(g,E),onTouchStart:Ro(v,y)}]:[!1,x,{}]}function Ro(s,t){return i=>{s&&s(i),i.defaultPrevented||t(i)}}function Yy({page:s,...t}){let{router:i}=Gv(),r=dt.useMemo(()=>Dv(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?dt.createElement(Zy,{page:s,matches:r,...t}):null}function jy(s){let{manifest:t,routeModules:i}=Vv(),[r,l]=dt.useState([]);return dt.useEffect(()=>{let u=!1;return Iy(s,t,i).then(f=>{u||l(f)}),()=>{u=!0}},[s,t,i]),r}function Zy({page:s,matches:t,...i}){let r=Cr(),{manifest:l,routeModules:u}=Vv(),{basename:f}=Gv(),{loaderData:d,matches:p}=Wy(),m=dt.useMemo(()=>D_(s,t,p,l,r,"data"),[s,t,p,l,r]),g=dt.useMemo(()=>D_(s,t,p,l,r,"assets"),[s,t,p,l,r]),v=dt.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let E=new Set,A=!1;if(t.forEach(_=>{var D;let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(w=>w.route.id===_.route.id)&&_.route.id in d&&((D=u[_.route.id])!=null&&D.shouldRevalidate)||O.hasClientLoader?A=!0:E.add(_.route.id))}),E.size===0)return[];let S=Xy(s,f);return A&&E.size>0&&S.searchParams.set("_routes",t.filter(_=>E.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,d,r,l,m,t,s,u]),x=dt.useMemo(()=>Fy(g,l),[g,l]),y=jy(g);return dt.createElement(dt.Fragment,null,v.map(E=>dt.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...i})),x.map(E=>dt.createElement("link",{key:E,rel:"modulepreload",href:E,...i})),y.map(({key:E,link:A})=>dt.createElement("link",{key:E,...A})))}function Ky(...s){return t=>{s.forEach(i=>{typeof i=="function"?i(t):i!=null&&(i.current=t)})}}var kv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{kv&&(window.__reactRouterVersion="7.6.0")}catch{}function Qy({basename:s,children:t,window:i}){let r=dt.useRef();r.current==null&&(r.current=zS({window:i,v5Compat:!0}));let l=r.current,[u,f]=dt.useState({action:l.action,location:l.location}),d=dt.useCallback(p=>{dt.startTransition(()=>f(p))},[f]);return dt.useLayoutEffect(()=>l.listen(d),[l,d]),dt.createElement(Ay,{basename:s,children:t,location:u.location,navigationType:u.action,navigator:l})}var Xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Vo=dt.forwardRef(function({onClick:t,discover:i="render",prefetch:r="none",relative:l,reloadDocument:u,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...x},y){let{basename:E}=dt.useContext(wi),A=typeof m=="string"&&Xv.test(m),S,_=!1;if(typeof m=="string"&&A&&(S=m,kv))try{let U=new URL(window.location.href),C=m.startsWith("//")?new URL(U.protocol+m):new URL(m),V=oa(C.pathname,E);C.origin===U.origin&&V!=null?m=V+C.search+C.hash:_=!0}catch{vi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=cy(m,{relative:l}),[D,w,I]=qy(r,x),H=eM(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function z(U){t&&t(U),U.defaultPrevented||H(U)}let W=dt.createElement("a",{...x,...I,href:S||O,onClick:_||u?t:z,ref:Ky(y,w),target:p,"data-discover":!A&&i==="render"?"true":void 0});return D&&!A?dt.createElement(dt.Fragment,null,W,dt.createElement(Yy,{page:O})):W});Vo.displayName="Link";var Jy=dt.forwardRef(function({"aria-current":t="page",caseSensitive:i=!1,className:r="",end:l=!1,style:u,to:f,viewTransition:d,children:p,...m},g){let v=Go(f,{relative:m.relative}),x=Cr(),y=dt.useContext(ku),{navigator:E,basename:A}=dt.useContext(wi),S=y!=null&&sM(v)&&d===!0,_=E.encodeLocation?E.encodeLocation(v).pathname:v.pathname,O=x.pathname,D=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;i||(O=O.toLowerCase(),D=D?D.toLowerCase():null,_=_.toLowerCase()),D&&A&&(D=oa(D,A)||D);const w=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let I=O===_||!l&&O.startsWith(_)&&O.charAt(w)==="/",H=D!=null&&(D===_||!l&&D.startsWith(_)&&D.charAt(_.length)==="/"),z={isActive:I,isPending:H,isTransitioning:S},W=I?t:void 0,U;typeof r=="function"?U=r(z):U=[r,I?"active":null,H?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let C=typeof u=="function"?u(z):u;return dt.createElement(Vo,{...m,"aria-current":W,className:U,ref:g,style:C,to:f,viewTransition:d},typeof p=="function"?p(z):p)});Jy.displayName="NavLink";var $y=dt.forwardRef(({discover:s="render",fetcherKey:t,navigate:i,reloadDocument:r,replace:l,state:u,method:f=Du,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...x},y)=>{let E=aM(),A=rM(d,{relative:m}),S=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&Xv.test(d),O=D=>{if(p&&p(D),D.defaultPrevented)return;D.preventDefault();let w=D.nativeEvent.submitter,I=(w==null?void 0:w.getAttribute("formmethod"))||f;E(w||D.currentTarget,{fetcherKey:t,method:I,navigate:i,replace:l,state:u,relative:m,preventScrollReset:g,viewTransition:v})};return dt.createElement("form",{ref:y,method:S,action:A,onSubmit:r?p:O,...x,"data-discover":!_&&s==="render"?"true":void 0})});$y.displayName="Form";function tM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Wv(s){let t=dt.useContext(Cs);return Ye(t,tM(s)),t}function eM(s,{target:t,replace:i,state:r,preventScrollReset:l,relative:u,viewTransition:f}={}){let d=fy(),p=Cr(),m=Go(s,{relative:u});return dt.useCallback(g=>{if(Ly(g,t)){g.preventDefault();let v=i!==void 0?i:Oo(p)===Oo(m);d(s,{replace:v,state:r,preventScrollReset:l,relative:u,viewTransition:f})}},[p,d,m,i,r,t,s,l,u,f])}var nM=0,iM=()=>`__${String(++nM)}__`;function aM(){let{router:s}=Wv("useSubmit"),{basename:t}=dt.useContext(wi),i=My();return dt.useCallback(async(r,l={})=>{let{action:u,method:f,encType:d,formData:p,body:m}=Py(r,t);if(l.navigate===!1){let g=l.fetcherKey||iM();await s.fetch(g,i,l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||u,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,t,i])}function rM(s,{relative:t}={}){let{basename:i}=dt.useContext(wi),r=dt.useContext(ca);Ye(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),u={...Go(s||".",{relative:t})},f=Cr();if(s==null){u.search=f.search;let d=new URLSearchParams(u.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();u.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:ra([i,u.pathname])),Oo(u)}function sM(s,t={}){let i=dt.useContext(Bv);Ye(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Wv("useViewTransitionState"),l=Go(s,{relative:t.relative});if(!i.isTransitioning)return!1;let u=oa(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=oa(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Fu(l.pathname,f)!=null||Fu(l.pathname,u)!=null}[...ky];const U_=[{id:"quantum-playground",title:"Quantum Playground",description:"Explore electron clouds and photon interactions",color:"#1a73e8",image:"⚛️",path:"/quantum-playground",available:!0},{id:"gravity-wells",title:"Gravity Wells",description:"Visualize spacetime curvature and orbital mechanics",color:"#ea4335",image:"🪐",path:"/gravity-wells",available:!1}];function oM({simulation:s,isActive:t,onMouseEnter:i,onMouseLeave:r,themeColors:l}){const{id:u,title:f,description:d,color:p,image:m,path:g,available:v}=s;return Gt.jsx(Vo,{to:v?g:"#",className:"block rounded-xl overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl",style:{opacity:v?1:.7,cursor:v?"pointer":"not-allowed",transform:t?"translateY(-5px)":"translateY(0)"},onMouseEnter:i,onMouseLeave:r,children:Gt.jsxs("div",{className:"glass card-content transition-transform duration-500 ease-out h-full p-6 flex flex-col",style:{borderLeft:`3px solid ${l.accent}`,boxShadow:t?`0 0 20px ${l.accent}80`:"none",background:l.card},children:[Gt.jsx("div",{className:"emoji-icon text-5xl mb-4 transition-all duration-300",style:{filter:t?`drop-shadow(0 0 10px ${l.accent})`:"none",transform:t?"scale(1.05)":"scale(1)",transformOrigin:"center"},children:m}),Gt.jsx("h2",{className:"text-2xl font-bold mb-2 transition-all duration-300",style:{color:l.accent,transform:t?"scale(1.05)":"scale(1)",transformOrigin:"left"},children:f}),Gt.jsx("p",{style:{color:l.textSecondary},className:"mb-6 flex-grow",children:d}),Gt.jsxs("div",{className:"mt-auto",children:[Gt.jsx("div",{className:`text-sm font-medium ${v?"text-green-400":"text-amber-400"}`,children:v?"Available Now":"Coming Soon"}),Gt.jsx("div",{className:"progress-bar h-1 mt-3 rounded-full transition-all duration-500",style:{background:`linear-gradient(to right, ${l.accent}80, ${l.accent})`,opacity:t?1:0,transform:t?"scaleX(1)":"scaleX(0)"}})]})]})})}function lM(){const[s,t]=dt.useState(null),[i,r]=dt.useState("dark"),l=p=>{t(p)},u=()=>{t(null)},f={dark:{bg:"rgba(20, 40, 45, 1)",sidebar:"rgba(50, 90, 100, 0.3)",card:"rgba(50, 90, 100, 0.8)",accent:"rgb(0, 160, 170)",accentHover:"rgb(0, 190, 210)",text:"rgba(230, 240, 245, 0.9)",textSecondary:"rgba(180, 200, 210, 0.7)",gradient:"from-[rgb(0,160,170)] to-[rgb(0,190,210)]"},light:{bg:"rgba(245, 240, 230, 1)",sidebar:"rgba(230, 220, 200, 0.7)",card:"rgba(235, 225, 210, 0.9)",accent:"rgb(210, 120, 50)",accentHover:"rgb(230, 150, 80)",text:"rgba(70, 60, 50, 0.9)",textSecondary:"rgba(100, 90, 80, 0.7)",gradient:"from-[rgb(230,150,80)] to-[rgb(210,120,50)]"},blue:{bg:"#0f172a",sidebar:"rgba(30, 41, 59, 0.8)",card:"rgba(30, 41, 59, 0.8)",accent:"rgb(59, 130, 246)",accentHover:"rgb(96, 165, 250)",text:"rgba(255, 255, 255, 0.87)",textSecondary:"rgba(203, 213, 225, 0.7)",gradient:"from-blue-400 via-purple-500 to-pink-500"},gray:{bg:"#1a1a1a",sidebar:"rgba(40, 40, 40, 0.8)",card:"rgba(50, 50, 50, 0.8)",accent:"rgb(220, 40, 40)",accentHover:"rgb(240, 70, 70)",text:"rgba(220, 220, 220, 0.9)",textSecondary:"rgba(180, 180, 180, 0.7)",gradient:"from-[rgb(220,40,40)] to-[rgb(240,70,70)]"}},d=f[i];return document.documentElement.style.setProperty("--accent-color",d.accent),document.documentElement.style.setProperty("--accent-color-hover",d.accentHover),document.documentElement.style.setProperty("--text-primary",d.text),document.documentElement.style.setProperty("--text-secondary",d.textSecondary),document.documentElement.style.setProperty("--bg-card",d.card),Gt.jsxs("div",{className:"min-h-screen grid grid-cols-12",style:{backgroundColor:d.bg,color:d.text},children:[Gt.jsxs("div",{className:"col-span-2 glass fixed h-full p-4 flex flex-col",style:{background:d.sidebar},children:[Gt.jsx("div",{className:"text-xl font-bold mb-8",style:{color:d.accent},children:"GigaLab"}),Gt.jsx("nav",{className:"flex flex-col space-y-4",children:U_.map(p=>Gt.jsxs(Vo,{to:p.available?p.path:"#",className:`p-2 rounded transition-colors ${p.available?"hover:bg-opacity-20":"opacity-50 cursor-not-allowed"}`,style:{color:d.text,backgroundColor:p.available&&i===s?`${d.accent}20`:"transparent"},children:[Gt.jsx("span",{className:"mr-2",children:p.image}),p.title]},p.id))}),Gt.jsxs("div",{className:"mt-8 mb-4",children:[Gt.jsx("p",{className:"text-sm mb-2",style:{color:d.textSecondary},children:"Select Theme"}),Gt.jsxs("div",{className:"flex space-x-2",children:[Gt.jsx("button",{onClick:()=>r("dark"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="dark"?"ring-2 scale-110":""}`,style:{background:"rgba(20, 40, 45, 1)",ringColor:f.dark.accent},title:"Dark Theme",children:i==="dark"&&Gt.jsx("span",{className:"text-xs",children:"✓"})}),Gt.jsx("button",{onClick:()=>r("light"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="light"?"ring-2 scale-110":""}`,style:{background:"rgba(245, 240, 230, 1)",ringColor:f.light.accent},title:"Light Theme",children:i==="light"&&Gt.jsx("span",{className:"text-xs text-gray-800",children:"✓"})}),Gt.jsx("button",{onClick:()=>r("blue"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="blue"?"ring-2 scale-110":""}`,style:{background:"#0f172a",ringColor:f.blue.accent},title:"Blue Theme",children:i==="blue"&&Gt.jsx("span",{className:"text-xs",children:"✓"})}),Gt.jsx("button",{onClick:()=>r("gray"),className:`w-8 h-8 rounded-full flex items-center justify-center transition-all ${i==="gray"?"ring-2 scale-110":""}`,style:{background:"#1a1a1a",ringColor:f.gray.accent},title:"Gray Theme",children:i==="gray"&&Gt.jsx("span",{className:"text-xs",children:"✓"})})]})]}),Gt.jsx("div",{className:"mt-auto text-sm",children:Gt.jsx("button",{className:"w-full p-2 rounded border transition-all hover:bg-opacity-90",style:{backgroundColor:d.accent,borderColor:d.accent,color:i==="light"?"#fff":d.text},children:"Contact"})})]}),Gt.jsxs("div",{className:"col-span-10 col-start-3 px-4 py-16",children:[Gt.jsxs("header",{className:"text-center mb-16",children:[Gt.jsx("h1",{className:`text-6xl font-bold mb-4 bg-gradient-to-r ${d.gradient} text-transparent bg-clip-text px-4 py-4`,children:"GigaLab"}),Gt.jsx("p",{className:"text-xl",style:{color:d.text},children:"Interactive physics simulations based on reality"})]}),Gt.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:U_.map(p=>Gt.jsx(oM,{simulation:p,isActive:s===p.id,onMouseEnter:()=>l(p.id),onMouseLeave:u,themeColors:d},p.id))})]}),Gt.jsx("div",{className:"bg-animate"})]})}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="176",uM=0,L_=1,cM=2,qv=1,fM=2,ea=3,qa=0,Fn=1,na=2,Xa=0,ys=1,N_=2,O_=3,P_=4,hM=5,yr=100,dM=101,pM=102,mM=103,gM=104,_M=200,vM=201,xM=202,SM=203,Ih=204,Fh=205,yM=206,MM=207,EM=208,TM=209,bM=210,AM=211,RM=212,CM=213,wM=214,Hh=0,Gh=1,Vh=2,Es=3,kh=4,Xh=5,Wh=6,qh=7,Yv=0,DM=1,UM=2,Wa=0,LM=1,NM=2,OM=3,PM=4,BM=5,zM=6,IM=7,jv=300,Ts=301,bs=302,Yh=303,jh=304,Wu=306,Zh=1e3,Er=1001,Kh=1002,gi=1003,FM=1004,su=1005,Ai=1006,rh=1007,Tr=1008,la=1009,Zv=1010,Kv=1011,Po=1012,Nd=1013,br=1014,ia=1015,ko=1016,Od=1017,Pd=1018,Bo=1020,Qv=35902,Jv=1021,$v=1022,mi=1023,zo=1026,Io=1027,t0=1028,Bd=1029,e0=1030,zd=1031,Id=1033,Lu=33776,Nu=33777,Ou=33778,Pu=33779,Qh=35840,Jh=35841,$h=35842,td=35843,ed=36196,nd=37492,id=37496,ad=37808,rd=37809,sd=37810,od=37811,ld=37812,ud=37813,cd=37814,fd=37815,hd=37816,dd=37817,pd=37818,md=37819,gd=37820,_d=37821,Bu=36492,vd=36494,xd=36495,n0=36283,Sd=36284,yd=36285,Md=36286,HM=3200,GM=3201,VM=0,kM=1,ka="",si="srgb",As="srgb-linear",Hu="linear",Pe="srgb",ss=7680,B_=519,XM=512,WM=513,qM=514,i0=515,YM=516,jM=517,ZM=518,KM=519,z_=35044,I_="300 es",aa=2e3,Gu=2001;class ws{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sh=Math.PI/180,Ed=180/Math.PI;function Xo(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[s&255]+Cn[s>>8&255]+Cn[s>>16&255]+Cn[s>>24&255]+"-"+Cn[t&255]+Cn[t>>8&255]+"-"+Cn[t>>16&15|64]+Cn[t>>24&255]+"-"+Cn[i&63|128]+Cn[i>>8&255]+"-"+Cn[i>>16&255]+Cn[i>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function xe(s,t,i){return Math.max(t,Math.min(i,s))}function QM(s,t){return(s%t+t)%t}function oh(s,t,i){return(1-i)*s+i*t}function Co(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function In(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(t=0,i=0){Fe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*r-f*l+t.x,this.y=u*l+f*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class se{constructor(t,i,r,l,u,f,d,p,m){se.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,p,m)}set(t,i,r,l,u,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=u,g[5]=p,g[6]=r,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],x=r[2],y=r[5],E=r[8],A=l[0],S=l[3],_=l[6],O=l[1],D=l[4],w=l[7],I=l[2],H=l[5],z=l[8];return u[0]=f*A+d*O+p*I,u[3]=f*S+d*D+p*H,u[6]=f*_+d*w+p*z,u[1]=m*A+g*O+v*I,u[4]=m*S+g*D+v*H,u[7]=m*_+g*w+v*z,u[2]=x*A+y*O+E*I,u[5]=x*S+y*D+E*H,u[8]=x*_+y*w+E*z,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-r*u*g+r*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=g*f-d*m,x=d*p-g*u,y=m*u-f*p,E=i*v+r*x+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=v*A,t[1]=(l*m-g*r)*A,t[2]=(d*r-l*f)*A,t[3]=x*A,t[4]=(g*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=y*A,t[7]=(r*p-m*i)*A,t[8]=(f*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(lh.makeScale(t,i)),this}rotate(t){return this.premultiply(lh.makeRotation(-t)),this}translate(t,i){return this.premultiply(lh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const lh=new se;function a0(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Vu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function JM(){const s=Vu("canvas");return s.style.display="block",s}const F_={};function zu(s){s in F_||(F_[s]=!0,console.warn(s))}function $M(s,t,i){return new Promise(function(r,l){function u(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function tE(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function eE(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const H_=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G_=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nE(){const s={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Pe&&(l.r=sa(l.r),l.g=sa(l.g),l.b=sa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Pe&&(l.r=Ms(l.r),l.g=Ms(l.g),l.b=Ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ka?Hu:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[As]:{primaries:t,whitePoint:r,transfer:Hu,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:r,transfer:Pe,toXYZ:H_,fromXYZ:G_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),s}const be=nE();function sa(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ms(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let os;class iE{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Vu("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Vu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=sa(u[f]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(sa(i[r]/255)*255):i[r]=sa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let aE=0;class Fd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aE++}),this.uuid=Xo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(uh(l[f].image)):u.push(uh(l[f]))}else u=uh(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function uh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?iE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rE=0;class Hn extends ws{constructor(t=Hn.DEFAULT_IMAGE,i=Hn.DEFAULT_MAPPING,r=Er,l=Er,u=Ai,f=Tr,d=mi,p=la,m=Hn.DEFAULT_ANISOTROPY,g=ka){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rE++}),this.uuid=Xo(),this.name="",this.source=new Fd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isTextureArray=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isTextureArray=t.isTextureArray,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==jv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zh:t.x=t.x-Math.floor(t.x);break;case Er:t.x=t.x<0?0:1;break;case Kh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zh:t.y=t.y-Math.floor(t.y);break;case Er:t.y=t.y<0?0:1;break;case Kh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=jv;Hn.DEFAULT_ANISOTROPY=1;class $e{constructor(t=0,i=0,r=0,l=1){$e.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const p=t.elements,m=p[0],g=p[4],v=p[8],x=p[1],y=p[5],E=p[9],A=p[2],S=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,w=(y+1)/2,I=(_+1)/2,H=(g+x)/4,z=(v+A)/4,W=(E+S)/4;return D>w&&D>I?D<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(D),l=H/r,u=z/r):w>I?w<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(w),r=H/l,u=W/l):I<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),r=z/u,l=W/u),this.set(r,l,u,i),this}let O=Math.sqrt((S-E)*(S-E)+(v-A)*(v-A)+(x-g)*(x-g));return Math.abs(O)<.001&&(O=1),this.x=(S-E)/O,this.y=(v-A)/O,this.z=(x-g)/O,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this.w=xe(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this.w=xe(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sE extends ws{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth?r.depth:1,this.scissor=new $e(0,0,t,i),this.scissorTest=!1,this.viewport=new $e(0,0,t,i);const l={width:t,height:i,depth:this.depth};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ai,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,multiview:!1},r);const u=new Hn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const f=r.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Fd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ar extends sE{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class r0 extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class oE extends Hn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=gi,this.minFilter=gi,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,f,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3];const x=u[f+0],y=u[f+1],E=u[f+2],A=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=x,t[i+1]=y,t[i+2]=E,t[i+3]=A;return}if(v!==A||p!==x||m!==y||g!==E){let S=1-d;const _=p*x+m*y+g*E+v*A,O=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const I=Math.sqrt(D),H=Math.atan2(I,_*O);S=Math.sin(S*H)/I,d=Math.sin(d*H)/I}const w=d*O;if(p=p*S+x*w,m=m*S+y*w,g=g*S+E*w,v=v*S+A*w,S===1-d){const I=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=I,m*=I,g*=I,v*=I}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,r,l,u,f){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=u[f],x=u[f+1],y=u[f+2],E=u[f+3];return t[i]=d*E+g*v+p*y-m*x,t[i+1]=p*E+g*x+m*v-d*y,t[i+2]=m*E+g*y+d*x-p*v,t[i+3]=g*E-d*v-p*x-m*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(u/2),x=p(r/2),y=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"YXZ":this._x=x*g*v+m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"ZXY":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v-x*y*E;break;case"ZYX":this._x=x*g*v-m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v+x*y*E;break;case"YZX":this._x=x*g*v+m*y*E,this._y=m*y*v+x*g*E,this._z=m*g*E-x*y*v,this._w=m*g*v-x*y*E;break;case"XZY":this._x=x*g*v-m*y*E,this._y=m*y*v-x*g*E,this._z=m*g*E+x*y*v,this._w=m*g*v+x*y*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=r+d+v;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(g-p)*y,this._y=(u-m)*y,this._z=(f-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(u-m)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(f-l)/y,this._x=(u+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(xe(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+f*d+l*m-u*p,this._y=l*g+f*p+u*d-r*m,this._z=u*g+f*m+r*p-l*d,this._w=f*g-r*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=r,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const y=1-i;return this._w=y*f+i*this._w,this._x=y*r+i*this._x,this._y=y*l+i*this._y,this._z=y*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*v+this._w*x,this._x=r*v+this._x*x,this._y=l*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(t=0,i=0,r=0){rt.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*r),g=2*(d*i-u*l),v=2*(u*r-f*i);return this.x=i+p*m+f*v-d*g,this.y=r+p*g+d*m-u*v,this.z=l+p*v+u*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=xe(this.x,t.x,i.x),this.y=xe(this.y,t.y,i.y),this.z=xe(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=xe(this.x,t,i),this.y=xe(this.y,t,i),this.z=xe(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(xe(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-r*p,this.z=r*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return ch.copy(this).projectOnVector(t),this.sub(ch)}reflect(t){return this.sub(ch.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(xe(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ch=new rt,V_=new Wo;class qo{constructor(t=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,fi):fi.fromBufferAttribute(u,f),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ou.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ou.copy(r.boundingBox)),ou.applyMatrix4(t.matrixWorld),this.union(ou)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),lu.subVectors(this.max,wo),ls.subVectors(t.a,wo),us.subVectors(t.b,wo),cs.subVectors(t.c,wo),za.subVectors(us,ls),Ia.subVectors(cs,us),dr.subVectors(ls,cs);let i=[0,-za.z,za.y,0,-Ia.z,Ia.y,0,-dr.z,dr.y,za.z,0,-za.x,Ia.z,0,-Ia.x,dr.z,0,-dr.x,-za.y,za.x,0,-Ia.y,Ia.x,0,-dr.y,dr.x,0];return!fh(i,ls,us,cs,lu)||(i=[1,0,0,0,1,0,0,0,1],!fh(i,ls,us,cs,lu))?!1:(uu.crossVectors(za,Ia),i=[uu.x,uu.y,uu.z],fh(i,ls,us,cs,lu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ki),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ki=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],fi=new rt,ou=new qo,ls=new rt,us=new rt,cs=new rt,za=new rt,Ia=new rt,dr=new rt,wo=new rt,lu=new rt,uu=new rt,pr=new rt;function fh(s,t,i,r,l){for(let u=0,f=s.length-3;u<=f;u+=3){pr.fromArray(s,u);const d=l.x*Math.abs(pr.x)+l.y*Math.abs(pr.y)+l.z*Math.abs(pr.z),p=t.dot(pr),m=i.dot(pr),g=r.dot(pr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const lE=new qo,Do=new rt,hh=new rt;class qu{constructor(t=new rt,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):lE.setFromPoints(t).getCenter(r);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Do,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(hh)),this.expandByPoint(Do.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Qi=new rt,dh=new rt,cu=new rt,Fa=new rt,ph=new rt,fu=new rt,mh=new rt;class s0{constructor(t=new rt,i=new rt(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Qi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Qi.copy(this.origin).addScaledVector(this.direction,i),Qi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){dh.copy(t).add(i).multiplyScalar(.5),cu.copy(i).sub(t).normalize(),Fa.copy(this.origin).sub(dh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(cu),d=Fa.dot(this.direction),p=-Fa.dot(cu),m=Fa.lengthSq(),g=Math.abs(1-f*f);let v,x,y,E;if(g>0)if(v=f*p-d,x=f*d-p,E=u*g,v>=0)if(x>=-E)if(x<=E){const A=1/g;v*=A,x*=A,y=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x=-u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;else x<=-E?(v=Math.max(0,-(-f*u+d)),x=v>0?-u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m):x<=E?(v=0,x=Math.min(Math.max(-u,-p),u),y=x*(x+2*p)+m):(v=Math.max(0,-(f*u+d)),x=v>0?u:Math.min(Math.max(-u,-p),u),y=-v*v+x*(x+2*p)+m);else x=f>0?-u:u,v=Math.max(0,-(f*x+d)),y=-v*v+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(dh).addScaledVector(cu,x),y}intersectSphere(t,i){Qi.subVectors(t.center,this.origin);const r=Qi.dot(this.direction),l=Qi.dot(Qi)-r*r,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=r-f,p=r+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),g>=0?(u=(t.min.y-x.y)*g,f=(t.max.y-x.y)*g):(u=(t.max.y-x.y)*g,f=(t.min.y-x.y)*g),r>f||u>l||((u>r||isNaN(r))&&(r=u),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-x.z)*v,p=(t.max.z-x.z)*v):(d=(t.max.z-x.z)*v,p=(t.min.z-x.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Qi)!==null}intersectTriangle(t,i,r,l,u){ph.subVectors(i,t),fu.subVectors(r,t),mh.crossVectors(ph,fu);let f=this.direction.dot(mh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Fa.subVectors(this.origin,t);const p=d*this.direction.dot(fu.crossVectors(Fa,fu));if(p<0)return null;const m=d*this.direction.dot(ph.cross(Fa));if(m<0||p+m>f)return null;const g=-d*Fa.dot(mh);return g<0?null:this.at(g/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(t,i,r,l,u,f,d,p,m,g,v,x,y,E,A,S){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,f,d,p,m,g,v,x,y,E,A,S)}set(t,i,r,l,u,f,d,p,m,g,v,x,y,E,A,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=y,_[7]=E,_[11]=A,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),f=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,f=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const x=f*g,y=f*v,E=d*g,A=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+E*m,i[5]=x-A*m,i[9]=-d*p,i[2]=A-x*m,i[6]=E+y*m,i[10]=f*p}else if(t.order==="YXZ"){const x=p*g,y=p*v,E=m*g,A=m*v;i[0]=x+A*d,i[4]=E*d-y,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=y*d-E,i[6]=A+x*d,i[10]=f*p}else if(t.order==="ZXY"){const x=p*g,y=p*v,E=m*g,A=m*v;i[0]=x-A*d,i[4]=-f*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=f*g,i[9]=A-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const x=f*g,y=f*v,E=d*g,A=d*v;i[0]=p*g,i[4]=E*m-y,i[8]=x*m+A,i[1]=p*v,i[5]=A*m+x,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const x=f*p,y=f*m,E=d*p,A=d*m;i[0]=p*g,i[4]=A-x*v,i[8]=E*v+y,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+E,i[10]=x-A*v}else if(t.order==="XZY"){const x=f*p,y=f*m,E=d*p,A=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+A,i[5]=f*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=A*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uE,t,cE)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ha.crossVectors(r,Kn),Ha.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ha.crossVectors(r,Kn)),Ha.normalize(),hu.crossVectors(Kn,Ha),l[0]=Ha.x,l[4]=hu.x,l[8]=Kn.x,l[1]=Ha.y,l[5]=hu.y,l[9]=Kn.y,l[2]=Ha.z,l[6]=hu.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,f=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],x=r[9],y=r[13],E=r[2],A=r[6],S=r[10],_=r[14],O=r[3],D=r[7],w=r[11],I=r[15],H=l[0],z=l[4],W=l[8],U=l[12],C=l[1],V=l[5],lt=l[9],st=l[13],vt=l[2],ht=l[6],B=l[10],Z=l[14],Y=l[3],Mt=l[7],N=l[11],$=l[15];return u[0]=f*H+d*C+p*vt+m*Y,u[4]=f*z+d*V+p*ht+m*Mt,u[8]=f*W+d*lt+p*B+m*N,u[12]=f*U+d*st+p*Z+m*$,u[1]=g*H+v*C+x*vt+y*Y,u[5]=g*z+v*V+x*ht+y*Mt,u[9]=g*W+v*lt+x*B+y*N,u[13]=g*U+v*st+x*Z+y*$,u[2]=E*H+A*C+S*vt+_*Y,u[6]=E*z+A*V+S*ht+_*Mt,u[10]=E*W+A*lt+S*B+_*N,u[14]=E*U+A*st+S*Z+_*$,u[3]=O*H+D*C+w*vt+I*Y,u[7]=O*z+D*V+w*ht+I*Mt,u[11]=O*W+D*lt+w*B+I*N,u[15]=O*U+D*st+w*Z+I*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],v=t[6],x=t[10],y=t[14],E=t[3],A=t[7],S=t[11],_=t[15];return E*(+u*p*v-l*m*v-u*d*x+r*m*x+l*d*y-r*p*y)+A*(+i*p*y-i*m*x+u*f*x-l*f*y+l*m*g-u*p*g)+S*(+i*m*v-i*d*y-u*f*v+r*f*y+u*d*g-r*m*g)+_*(-l*d*g-i*p*v+i*d*x+l*f*v-r*f*x+r*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=t[9],x=t[10],y=t[11],E=t[12],A=t[13],S=t[14],_=t[15],O=v*S*m-A*x*m+A*p*y-d*S*y-v*p*_+d*x*_,D=E*x*m-g*S*m-E*p*y+f*S*y+g*p*_-f*x*_,w=g*A*m-E*v*m+E*d*y-f*A*y-g*d*_+f*v*_,I=E*v*p-g*A*p-E*d*x+f*A*x+g*d*S-f*v*S,H=i*O+r*D+l*w+u*I;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/H;return t[0]=O*z,t[1]=(A*x*u-v*S*u-A*l*y+r*S*y+v*l*_-r*x*_)*z,t[2]=(d*S*u-A*p*u+A*l*m-r*S*m-d*l*_+r*p*_)*z,t[3]=(v*p*u-d*x*u-v*l*m+r*x*m+d*l*y-r*p*y)*z,t[4]=D*z,t[5]=(g*S*u-E*x*u+E*l*y-i*S*y-g*l*_+i*x*_)*z,t[6]=(E*p*u-f*S*u-E*l*m+i*S*m+f*l*_-i*p*_)*z,t[7]=(f*x*u-g*p*u+g*l*m-i*x*m-f*l*y+i*p*y)*z,t[8]=w*z,t[9]=(E*v*u-g*A*u-E*r*y+i*A*y+g*r*_-i*v*_)*z,t[10]=(f*A*u-E*d*u+E*r*m-i*A*m-f*r*_+i*d*_)*z,t[11]=(g*d*u-f*v*u-g*r*m+i*v*m+f*r*y-i*d*y)*z,t[12]=I*z,t[13]=(g*A*l-E*v*l+E*r*x-i*A*x-g*r*S+i*v*S)*z,t[14]=(E*d*l-f*A*l-E*r*p+i*A*p+f*r*S-i*d*S)*z,t[15]=(f*v*l-g*d*l+g*r*p-i*v*p-f*r*x+i*d*x)*z,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,f=t.x,d=t.y,p=t.z,m=u*f,g=u*d;return this.set(m*f+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*f,0,m*p-l*d,g*p+l*f,u*p*p+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,f){return this.set(1,r,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,g=f+f,v=d+d,x=u*m,y=u*g,E=u*v,A=f*g,S=f*v,_=d*v,O=p*m,D=p*g,w=p*v,I=r.x,H=r.y,z=r.z;return l[0]=(1-(A+_))*I,l[1]=(y+w)*I,l[2]=(E-D)*I,l[3]=0,l[4]=(y-w)*H,l[5]=(1-(x+_))*H,l[6]=(S+O)*H,l[7]=0,l[8]=(E+D)*z,l[9]=(S-O)*z,l[10]=(1-(x+A))*z,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const f=fs.set(l[4],l[5],l[6]).length(),d=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],hi.copy(this);const m=1/u,g=1/f,v=1/d;return hi.elements[0]*=m,hi.elements[1]*=m,hi.elements[2]*=m,hi.elements[4]*=g,hi.elements[5]*=g,hi.elements[6]*=g,hi.elements[8]*=v,hi.elements[9]*=v,hi.elements[10]*=v,i.setFromRotationMatrix(hi),r.x=u,r.y=f,r.z=d,this}makePerspective(t,i,r,l,u,f,d=aa){const p=this.elements,m=2*u/(i-t),g=2*u/(r-l),v=(i+t)/(i-t),x=(r+l)/(r-l);let y,E;if(d===aa)y=-(f+u)/(f-u),E=-2*f*u/(f-u);else if(d===Gu)y=-f/(f-u),E=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=y,p[14]=E,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,f,d=aa){const p=this.elements,m=1/(i-t),g=1/(r-l),v=1/(f-u),x=(i+t)*m,y=(r+l)*g;let E,A;if(d===aa)E=(f+u)*v,A=-2*v;else if(d===Gu)E=u*v,A=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-y,p[2]=0,p[6]=0,p[10]=A,p[14]=-E,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new rt,hi=new tn,uE=new rt(0,0,0),cE=new rt(1,1,1),Ha=new rt,hu=new rt,Kn=new rt,k_=new tn,X_=new Wo;class ua{constructor(t=0,i=0,r=0,l=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(xe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-xe(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(xe(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-xe(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(xe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-xe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-g,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return k_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(k_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return X_.setFromEuler(this),this.setFromQuaternion(X_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class o0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let fE=0;const W_=new rt,hs=new Wo,Ji=new tn,du=new rt,Uo=new rt,hE=new rt,dE=new Wo,q_=new rt(1,0,0),Y_=new rt(0,1,0),j_=new rt(0,0,1),Z_={type:"added"},pE={type:"removed"},ds={type:"childadded",child:null},gh={type:"childremoved",child:null};class Gn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fE++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const t=new rt,i=new ua,r=new Wo,l=new rt(1,1,1);function u(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new tn},normalMatrix:{value:new se}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new o0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.multiply(hs),this}rotateOnWorldAxis(t,i){return hs.setFromAxisAngle(t,i),this.quaternion.premultiply(hs),this}rotateX(t){return this.rotateOnAxis(q_,t)}rotateY(t){return this.rotateOnAxis(Y_,t)}rotateZ(t){return this.rotateOnAxis(j_,t)}translateOnAxis(t,i){return W_.copy(t).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(q_,t)}translateY(t){return this.translateOnAxis(Y_,t)}translateZ(t){return this.translateOnAxis(j_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ji.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?du.copy(t):du.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ji.lookAt(Uo,du,this.up):Ji.lookAt(du,Uo,this.up),this.quaternion.setFromRotationMatrix(Ji),l&&(Ji.extractRotation(l.matrixWorld),hs.setFromRotationMatrix(Ji),this.quaternion.premultiply(hs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Z_),ds.child=t,this.dispatchEvent(ds),ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(pE),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ji.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ji.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ji),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Z_),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,hE),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,dE,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?{min:d.boundingBox.min.toArray(),max:d.boundingBox.max.toArray()}:void 0,boundingSphere:d.boundingSphere?{radius:d.boundingSphere.radius,center:d.boundingSphere.center.toArray()}:void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:this.boundingSphere.center.toArray(),radius:this.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:this.boundingBox.min.toArray(),max:this.boundingBox.max.toArray()}));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),x=f(t.skeletons),y=f(t.animations),E=f(t.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Gn.DEFAULT_UP=new rt(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new rt,$i=new rt,_h=new rt,ta=new rt,ps=new rt,ms=new rt,K_=new rt,vh=new rt,xh=new rt,Sh=new rt,yh=new $e,Mh=new $e,Eh=new $e;class pi{constructor(t=new rt,i=new rt,r=new rt){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),di.subVectors(t,i),l.cross(di);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){di.subVectors(l,i),$i.subVectors(r,i),_h.subVectors(t,i);const f=di.dot(di),d=di.dot($i),p=di.dot(_h),m=$i.dot($i),g=$i.dot(_h),v=f*m-d*d;if(v===0)return u.set(0,0,0),null;const x=1/v,y=(m*p-d*g)*x,E=(f*g-d*p)*x;return u.set(1-y-E,E,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ta)===null?!1:ta.x>=0&&ta.y>=0&&ta.x+ta.y<=1}static getInterpolation(t,i,r,l,u,f,d,p){return this.getBarycoord(t,i,r,l,ta)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,ta.x),p.addScaledVector(f,ta.y),p.addScaledVector(d,ta.z),p)}static getInterpolatedAttribute(t,i,r,l,u,f){return yh.setScalar(0),Mh.setScalar(0),Eh.setScalar(0),yh.fromBufferAttribute(t,i),Mh.fromBufferAttribute(t,r),Eh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(yh,u.x),f.addScaledVector(Mh,u.y),f.addScaledVector(Eh,u.z),f}static isFrontFacing(t,i,r,l){return di.subVectors(r,i),$i.subVectors(t,i),di.cross($i).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),$i.subVectors(this.a,this.b),di.cross($i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return pi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return pi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let f,d;ps.subVectors(l,r),ms.subVectors(u,r),vh.subVectors(t,r);const p=ps.dot(vh),m=ms.dot(vh);if(p<=0&&m<=0)return i.copy(r);xh.subVectors(t,l);const g=ps.dot(xh),v=ms.dot(xh);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(r).addScaledVector(ps,f);Sh.subVectors(t,u);const y=ps.dot(Sh),E=ms.dot(Sh);if(E>=0&&y<=E)return i.copy(u);const A=y*m-p*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(ms,d);const S=g*E-y*v;if(S<=0&&v-g>=0&&y-E>=0)return K_.subVectors(u,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(K_,d);const _=1/(S+A+x);return f=A*_,d=x*_,i.copy(r).addScaledVector(ps,f).addScaledVector(ms,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ga={h:0,s:0,l:0},pu={h:0,s:0,l:0};function Th(s,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(t-s)*6*i:i<1/2?t:i<2/3?s+(t-s)*6*(2/3-i):s}class Re{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=r,be.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=be.workingColorSpace){if(t=QM(t,1),i=xe(i,0,1),r=xe(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,f=2*r-u;this.r=Th(f,u,t+1/3),this.g=Th(f,u,t),this.b=Th(f,u,t-1/3)}return be.toWorkingColorSpace(this,l),this}setStyle(t,i=si){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const r=l0[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=sa(t.r),this.g=sa(t.g),this.b=sa(t.b),this}copyLinearToSRGB(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return be.fromWorkingColorSpace(wn.copy(this),t),Math.round(xe(wn.r*255,0,255))*65536+Math.round(xe(wn.g*255,0,255))*256+Math.round(xe(wn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.fromWorkingColorSpace(wn.copy(this),i);const r=wn.r,l=wn.g,u=wn.b,f=Math.max(r,l,u),d=Math.min(r,l,u);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case r:p=(l-u)/v+(l<u?6:0);break;case l:p=(u-r)/v+2;break;case u:p=(r-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=be.workingColorSpace){return be.fromWorkingColorSpace(wn.copy(this),i),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=si){be.fromWorkingColorSpace(wn.copy(this),t);const i=wn.r,r=wn.g,l=wn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(Ga),this.setHSL(Ga.h+t,Ga.s+i,Ga.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(Ga),t.getHSL(pu);const r=oh(Ga.h,pu.h,i),l=oh(Ga.s,pu.s,i),u=oh(Ga.l,pu.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Re;Re.NAMES=l0;let mE=0;class Yo extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=ys,this.side=qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ih,this.blendDst=Fh,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Re(0,0,0),this.blendAlpha=0,this.depthFunc=Es,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(r.blending=this.blending),this.side!==qa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ih&&(r.blendSrc=this.blendSrc),this.blendDst!==Fh&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Es&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(r.textures=u),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Hd extends Yo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=Yv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const sn=new rt,mu=new Fe;let gE=0;class _i{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gE++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=z_,this.updateRanges=[],this.gpuType=ia,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(t),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix3(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyMatrix4(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.applyNormalMatrix(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)sn.fromBufferAttribute(this,i),sn.transformDirection(t),this.setXYZ(i,sn.x,sn.y,sn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=In(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=In(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=In(i,this.array),r=In(r,this.array),l=In(l,this.array),u=In(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==z_&&(t.usage=this.usage),t}}class u0 extends _i{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class c0 extends _i{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ci extends _i{constructor(t,i,r){super(new Float32Array(t),i,r)}}let _E=0;const ri=new tn,bh=new Gn,gs=new rt,Qn=new qo,Lo=new qo,vn=new rt;class Di extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(a0(t)?c0:u0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new se().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return bh.lookAt(t),bh.updateMatrix(),this.applyMatrix4(bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ci(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Qn.setFromBufferAttribute(u),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qu);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(t){const r=this.boundingSphere.center;if(Qn.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(Qn.min,Lo.min),Qn.expandByPoint(vn),vn.addVectors(Qn.max,Lo.max),Qn.expandByPoint(vn)):(Qn.expandByPoint(Lo.min),Qn.expandByPoint(Lo.max))}Qn.getCenter(r);let l=0;for(let u=0,f=t.count;u<f;u++)vn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(vn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)vn.fromBufferAttribute(d,m),p&&(gs.fromBufferAttribute(t,m),vn.add(gs)),l=Math.max(l,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let W=0;W<r.count;W++)d[W]=new rt,p[W]=new rt;const m=new rt,g=new rt,v=new rt,x=new Fe,y=new Fe,E=new Fe,A=new rt,S=new rt;function _(W,U,C){m.fromBufferAttribute(r,W),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,C),x.fromBufferAttribute(u,W),y.fromBufferAttribute(u,U),E.fromBufferAttribute(u,C),g.sub(m),v.sub(m),y.sub(x),E.sub(x);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(V),S.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),d[W].add(A),d[U].add(A),d[C].add(A),p[W].add(S),p[U].add(S),p[C].add(S))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let W=0,U=O.length;W<U;++W){const C=O[W],V=C.start,lt=C.count;for(let st=V,vt=V+lt;st<vt;st+=3)_(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const D=new rt,w=new rt,I=new rt,H=new rt;function z(W){I.fromBufferAttribute(l,W),H.copy(I);const U=d[W];D.copy(U),D.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(H,U);const V=w.dot(p[W])<0?-1:1;f.setXYZW(W,D.x,D.y,D.z,V)}for(let W=0,U=O.length;W<U;++W){const C=O[W],V=C.start,lt=C.count;for(let st=V,vt=V+lt;st<vt;st+=3)z(t.getX(st+0)),z(t.getX(st+1)),z(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new _i(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,y=r.count;x<y;x++)r.setXYZ(x,0,0,0);const l=new rt,u=new rt,f=new rt,d=new rt,p=new rt,m=new rt,g=new rt,v=new rt;if(t)for(let x=0,y=t.count;x<y;x+=3){const E=t.getX(x+0),A=t.getX(x+1),S=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),f.fromBufferAttribute(i,S),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,u),v.subVectors(l,u),g.cross(v),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)vn.fromBufferAttribute(t,i),vn.normalize(),t.setXYZ(i,vn.x,vn.y,vn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let y=0,E=0;for(let A=0,S=p.length;A<S;A++){d.isInterleavedBufferAttribute?y=p[A]*d.data.stride+d.offset:y=p[A]*g;for(let _=0;_<g;_++)x[E++]=m[y++]}return new _i(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Di,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,r);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],y=t(x,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const y=m[v];g.push(y.toJSON(t.data))}g.length>0&&(l[p]=g,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const u=t.morphAttributes;for(const m in u){const g=[],v=u[m];for(let x=0,y=v.length;x<y;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q_=new tn,mr=new s0,gu=new qu,J_=new rt,_u=new rt,vu=new rt,xu=new rt,Ah=new rt,Su=new rt,$_=new rt,yu=new rt;class Ri extends Gn{constructor(t=new Di,i=new Hd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Su.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const g=d[p],v=u[p];g!==0&&(Ah.fromBufferAttribute(v,t),f?Su.addScaledVector(Ah,g):Su.addScaledVector(Ah.sub(i),g))}i.add(Su)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gu.copy(r.boundingSphere),gu.applyMatrix4(u),mr.copy(t.ray).recast(t.near),!(gu.containsPoint(mr.origin)===!1&&(mr.intersectSphere(gu,J_)===null||mr.origin.distanceToSquared(J_)>(t.far-t.near)**2))&&(Q_.copy(u).invert(),mr.copy(t.ray).applyMatrix4(Q_),!(r.boundingBox!==null&&mr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,mr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,g=u.attributes.uv1,v=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let w=O,I=D;w<I;w+=3){const H=d.getX(w),z=d.getX(w+1),W=d.getX(w+2);l=Mu(this,_,t,r,m,g,v,H,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(d.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=d.getX(S),D=d.getX(S+1),w=d.getX(S+2);l=Mu(this,f,t,r,m,g,v,O,D,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,A=x.length;E<A;E++){const S=x[E],_=f[S.materialIndex],O=Math.max(S.start,y.start),D=Math.min(p.count,Math.min(S.start+S.count,y.start+y.count));for(let w=O,I=D;w<I;w+=3){const H=w,z=w+1,W=w+2;l=Mu(this,_,t,r,m,g,v,H,z,W),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),A=Math.min(p.count,y.start+y.count);for(let S=E,_=A;S<_;S+=3){const O=S,D=S+1,w=S+2;l=Mu(this,f,t,r,m,g,v,O,D,w),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function vE(s,t,i,r,l,u,f,d){let p;if(t.side===Fn?p=r.intersectTriangle(f,u,l,!0,d):p=r.intersectTriangle(l,u,f,t.side===qa,d),p===null)return null;yu.copy(d),yu.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(yu);return m<i.near||m>i.far?null:{distance:m,point:yu.clone(),object:s}}function Mu(s,t,i,r,l,u,f,d,p,m){s.getVertexPosition(d,_u),s.getVertexPosition(p,vu),s.getVertexPosition(m,xu);const g=vE(s,t,i,r,_u,vu,xu,$_);if(g){const v=new rt;pi.getBarycoord($_,_u,vu,xu,v),l&&(g.uv=pi.getInterpolatedAttribute(l,d,p,m,v,new Fe)),u&&(g.uv1=pi.getInterpolatedAttribute(u,d,p,m,v,new Fe)),f&&(g.normal=pi.getInterpolatedAttribute(f,d,p,m,v,new rt),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new rt,materialIndex:0};pi.getNormal(_u,vu,xu,x.normal),g.face=x,g.barycoord=v}return g}class jo extends Di{constructor(t=1,i=1,r=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,y=0;E("z","y","x",-1,-1,r,i,t,f,u,0),E("z","y","x",1,-1,r,i,-t,f,u,1),E("x","z","y",1,1,t,r,i,l,f,2),E("x","z","y",1,-1,t,r,-i,l,f,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(p),this.setAttribute("position",new Ci(m,3)),this.setAttribute("normal",new Ci(g,3)),this.setAttribute("uv",new Ci(v,2));function E(A,S,_,O,D,w,I,H,z,W,U){const C=w/z,V=I/W,lt=w/2,st=I/2,vt=H/2,ht=z+1,B=W+1;let Z=0,Y=0;const Mt=new rt;for(let N=0;N<B;N++){const $=N*V-st;for(let xt=0;xt<ht;xt++){const yt=xt*C-lt;Mt[A]=yt*O,Mt[S]=$*D,Mt[_]=vt,m.push(Mt.x,Mt.y,Mt.z),Mt[A]=0,Mt[S]=0,Mt[_]=H>0?1:-1,g.push(Mt.x,Mt.y,Mt.z),v.push(xt/z),v.push(1-N/W),Z+=1}}for(let N=0;N<W;N++)for(let $=0;$<z;$++){const xt=x+$+ht*N,yt=x+$+ht*(N+1),Q=x+($+1)+ht*(N+1),pt=x+($+1)+ht*N;p.push(xt,yt,pt),p.push(yt,Q,pt),Y+=6}d.addGroup(y,Y,U),y+=Y,x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(s){const t={};for(const i in s){t[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(s){const t={};for(let i=0;i<s.length;i++){const r=Rs(s[i]);for(const l in r)t[l]=r[l]}return t}function xE(s){const t=[];for(let i=0;i<s.length;i++)t.push(s[i].clone());return t}function f0(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const SE={clone:Rs,merge:Un};var yE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ME=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ya extends Yo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yE,this.fragmentShader=ME,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=xE(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class h0 extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=aa}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Va=new rt,tv=new Fe,ev=new Fe;class oi extends h0{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ed*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(sh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ed*2*Math.atan(Math.tan(sh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Va.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Va.x,Va.y).multiplyScalar(-t/Va.z),Va.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Va.x,Va.y).multiplyScalar(-t/Va.z)}getViewSize(t,i){return this.getViewBounds(t,tv,ev),i.subVectors(ev,tv)}setViewOffset(t,i,r,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(sh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*r/m,l*=f.width/p,r*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _s=-90,vs=1;class EE extends Gn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(_s,vs,t,i);l.layers=this.layers,this.add(l);const u=new oi(_s,vs,t,i);u.layers=this.layers,this.add(u);const f=new oi(_s,vs,t,i);f.layers=this.layers,this.add(f);const d=new oi(_s,vs,t,i);d.layers=this.layers,this.add(d);const p=new oi(_s,vs,t,i);p.layers=this.layers,this.add(p);const m=new oi(_s,vs,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===aa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Gu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,g]=this.children,v=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,f),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,p),t.setRenderTarget(r,4,l),t.render(i,m),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,g),t.setRenderTarget(v,x,y),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class d0 extends Hn{constructor(t=[],i=Ts,r,l,u,f,d,p,m,g){super(t,i,r,l,u,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class TE extends Ar{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new d0(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ai}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new jo(5,5,5),u=new Ya({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:Xa});u.uniforms.tEquirect.value=i;const f=new Ri(l,u),d=i.minFilter;return i.minFilter===Tr&&(i.minFilter=Ai),new EE(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,r,l);t.setRenderTarget(u)}}class Eu extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const A of t.hand.values()){const S=i.getJointPose(A,r),_=this._getHandJoint(m,A);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&x>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Eu;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class AE extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Ch=new rt,RE=new rt,CE=new se;class xr{constructor(t=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Ch.subVectors(r,i).cross(RE.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(Ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||CE.getNormalMatrix(t),l=this.coplanarPoint(Ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new qu,Tu=new rt;class p0{constructor(t=new xr,i=new xr,r=new xr,l=new xr,u=new xr,f=new xr){this.planes=[t,i,r,l,u,f]}set(t,i,r,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=aa){const r=this.planes,l=t.elements,u=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],x=l[7],y=l[8],E=l[9],A=l[10],S=l[11],_=l[12],O=l[13],D=l[14],w=l[15];if(r[0].setComponents(p-u,x-m,S-y,w-_).normalize(),r[1].setComponents(p+u,x+m,S+y,w+_).normalize(),r[2].setComponents(p+f,x+g,S+E,w+O).normalize(),r[3].setComponents(p-f,x-g,S-E,w-O).normalize(),r[4].setComponents(p-d,x-v,S-A,w-D).normalize(),i===aa)r[5].setComponents(p+d,x+v,S+A,w+D).normalize();else if(i===Gu)r[5].setComponents(d,v,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(t){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(t.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tu.x=l.normal.x>0?t.max.x:t.min.x,Tu.y=l.normal.y>0?t.max.y:t.min.y,Tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class m0 extends Yo{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nv=new tn,Td=new s0,bu=new qu,Au=new rt;class wE extends Gn{constructor(t=new Di,i=new m0){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bu.copy(r.boundingSphere),bu.applyMatrix4(l),bu.radius+=u,t.ray.intersectsSphere(bu)===!1)return;nv.copy(l).invert(),Td.copy(t.ray).applyMatrix4(nv);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,v=r.attributes.position;if(m!==null){const x=Math.max(0,f.start),y=Math.min(m.count,f.start+f.count);for(let E=x,A=y;E<A;E++){const S=m.getX(E);Au.fromBufferAttribute(v,S),iv(Au,S,p,l,t,i,this)}}else{const x=Math.max(0,f.start),y=Math.min(v.count,f.start+f.count);for(let E=x,A=y;E<A;E++)Au.fromBufferAttribute(v,E),iv(Au,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function iv(s,t,i,r,l,u,f){const d=Td.distanceSqToPoint(s);if(d<i){const p=new rt;Td.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class g0 extends Hn{constructor(t,i,r=br,l,u,f,d=gi,p=gi,m,g=zo){if(g!==zo&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,u,f,d,p,g,r,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Fd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Yu extends Di{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=t/d,x=i/p,y=[],E=[],A=[],S=[];for(let _=0;_<g;_++){const O=_*x-f;for(let D=0;D<m;D++){const w=D*v-u;E.push(w,-O,0),A.push(0,0,1),S.push(D/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<d;O++){const D=O+m*_,w=O+m*(_+1),I=O+1+m*(_+1),H=O+1+m*_;y.push(D,w,H),y.push(w,I,H)}this.setIndex(y),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Gd extends Di{constructor(t=1,i=32,r=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(f+d,Math.PI);let m=0;const g=[],v=new rt,x=new rt,y=[],E=[],A=[],S=[];for(let _=0;_<=r;_++){const O=[],D=_/r;let w=0;_===0&&f===0?w=.5/i:_===r&&p===Math.PI&&(w=-.5/i);for(let I=0;I<=i;I++){const H=I/i;v.x=-t*Math.cos(l+H*u)*Math.sin(f+D*d),v.y=t*Math.cos(f+D*d),v.z=t*Math.sin(l+H*u)*Math.sin(f+D*d),E.push(v.x,v.y,v.z),x.copy(v).normalize(),A.push(x.x,x.y,x.z),S.push(H+w,1-D),O.push(m++)}g.push(O)}for(let _=0;_<r;_++)for(let O=0;O<i;O++){const D=g[_][O+1],w=g[_][O],I=g[_+1][O],H=g[_+1][O+1];(_!==0||f>0)&&y.push(D,w,H),(_!==r-1||p<Math.PI)&&y.push(w,I,H)}this.setIndex(y),this.setAttribute("position",new Ci(E,3)),this.setAttribute("normal",new Ci(A,3)),this.setAttribute("uv",new Ci(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gd(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class DE extends Yo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class UE extends Yo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class LE extends h0{constructor(t=-1,i=1,r=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,f=r+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class NE extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function av(s,t,i,r){const l=OE(r);switch(i){case Jv:return s*t;case t0:return s*t/l.components*l.byteLength;case Bd:return s*t/l.components*l.byteLength;case e0:return s*t*2/l.components*l.byteLength;case zd:return s*t*2/l.components*l.byteLength;case $v:return s*t*3/l.components*l.byteLength;case mi:return s*t*4/l.components*l.byteLength;case Id:return s*t*4/l.components*l.byteLength;case Lu:case Nu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ou:case Pu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Jh:case td:return Math.max(s,16)*Math.max(t,8)/4;case Qh:case $h:return Math.max(s,8)*Math.max(t,8)/2;case ed:case nd:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case id:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ad:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case rd:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case sd:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case od:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case ld:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ud:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cd:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case fd:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case hd:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dd:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case pd:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case md:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case gd:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case _d:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Bu:case vd:case xd:return Math.ceil(s/4)*Math.ceil(t/4)*16;case n0:case Sd:return Math.ceil(s/4)*Math.ceil(t/4)*8;case yd:case Md:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function OE(s){switch(s){case la:case Zv:return{byteLength:1,components:1};case Po:case Kv:case ko:return{byteLength:2,components:1};case Od:case Pd:return{byteLength:2,components:4};case br:case Nd:case ia:return{byteLength:4,components:1};case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let s=null,t=!1,i=null,r=null;function l(u,f){i(u,f),r=s.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=s.requestAnimationFrame(l),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){s=u}}}function PE(s){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((y,E)=>y.start-E.start);let x=0;for(let y=1;y<v.length;y++){const E=v[x],A=v[y];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,v[x]=A)}v.length=x+1;for(let y=0,E=v.length;y<E;y++){const A=v[y];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(s.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var BE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zE=`#ifdef USE_ALPHAHASH
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
#endif`,IE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VE=`#ifdef USE_AOMAP
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
#endif`,kE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XE=`#ifdef USE_BATCHING
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
#endif`,WE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,YE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ZE=`#ifdef USE_IRIDESCENCE
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
#endif`,KE=`#ifdef USE_BUMPMAP
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
#endif`,QE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,aT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,rT=`#define PI 3.141592653589793
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
} // validated`,sT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oT=`vec3 transformedNormal = objectNormal;
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
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hT="gl_FragColor = linearToOutputTexel( gl_FragColor );",dT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pT=`#ifdef USE_ENVMAP
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
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,xT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ST=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ET=`#ifdef USE_GRADIENTMAP
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
}`,TT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RT=`uniform bool receiveShadow;
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
#endif`,CT=`#ifdef USE_ENVMAP
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
#endif`,wT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NT=`PhysicalMaterial material;
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
#endif`,OT=`struct PhysicalMaterial {
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
}`,PT=`
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
#endif`,BT=`#if defined( RE_IndirectDiffuse )
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
#endif`,zT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WT=`#if defined( USE_POINTS_UV )
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
#endif`,qT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QT=`#ifdef USE_MORPHTARGETS
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
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$T=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ib=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ab=`#ifdef USE_NORMALMAP
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
#endif`,rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ub=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,db=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sb=`float getShadowMask() {
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
}`,yb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mb=`#ifdef USE_SKINNING
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
#endif`,Eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tb=`#ifdef USE_SKINNING
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
#endif`,bb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ab=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#ifdef USE_TRANSMISSION
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gb=`#include <common>
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
}`,Vb=`#if DEPTH_PACKING == 3200
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
}`,kb=`#define DISTANCE
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
}`,Xb=`#define DISTANCE
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
}`,Wb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`uniform float scale;
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
}`,jb=`uniform vec3 diffuse;
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
}`,Zb=`#include <common>
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
}`,Kb=`uniform vec3 diffuse;
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
}`,Qb=`#define LAMBERT
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
}`,Jb=`#define LAMBERT
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
}`,$b=`#define MATCAP
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
}`,tA=`#define MATCAP
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
}`,eA=`#define NORMAL
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
}`,nA=`#define NORMAL
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
}`,iA=`#define PHONG
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
}`,aA=`#define PHONG
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
}`,rA=`#define STANDARD
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
}`,sA=`#define STANDARD
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
}`,oA=`#define TOON
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
}`,lA=`#define TOON
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
}`,uA=`uniform float size;
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
}`,cA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,hA=`uniform vec3 color;
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
}`,dA=`uniform float rotation;
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
}`,pA=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:BE,alphahash_pars_fragment:zE,alphamap_fragment:IE,alphamap_pars_fragment:FE,alphatest_fragment:HE,alphatest_pars_fragment:GE,aomap_fragment:VE,aomap_pars_fragment:kE,batching_pars_vertex:XE,batching_vertex:WE,begin_vertex:qE,beginnormal_vertex:YE,bsdfs:jE,iridescence_fragment:ZE,bumpmap_pars_fragment:KE,clipping_planes_fragment:QE,clipping_planes_pars_fragment:JE,clipping_planes_pars_vertex:$E,clipping_planes_vertex:tT,color_fragment:eT,color_pars_fragment:nT,color_pars_vertex:iT,color_vertex:aT,common:rT,cube_uv_reflection_fragment:sT,defaultnormal_vertex:oT,displacementmap_pars_vertex:lT,displacementmap_vertex:uT,emissivemap_fragment:cT,emissivemap_pars_fragment:fT,colorspace_fragment:hT,colorspace_pars_fragment:dT,envmap_fragment:pT,envmap_common_pars_fragment:mT,envmap_pars_fragment:gT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:CT,envmap_vertex:vT,fog_vertex:xT,fog_pars_vertex:ST,fog_fragment:yT,fog_pars_fragment:MT,gradientmap_pars_fragment:ET,lightmap_pars_fragment:TT,lights_lambert_fragment:bT,lights_lambert_pars_fragment:AT,lights_pars_begin:RT,lights_toon_fragment:wT,lights_toon_pars_fragment:DT,lights_phong_fragment:UT,lights_phong_pars_fragment:LT,lights_physical_fragment:NT,lights_physical_pars_fragment:OT,lights_fragment_begin:PT,lights_fragment_maps:BT,lights_fragment_end:zT,logdepthbuf_fragment:IT,logdepthbuf_pars_fragment:FT,logdepthbuf_pars_vertex:HT,logdepthbuf_vertex:GT,map_fragment:VT,map_pars_fragment:kT,map_particle_fragment:XT,map_particle_pars_fragment:WT,metalnessmap_fragment:qT,metalnessmap_pars_fragment:YT,morphinstance_vertex:jT,morphcolor_vertex:ZT,morphnormal_vertex:KT,morphtarget_pars_vertex:QT,morphtarget_vertex:JT,normal_fragment_begin:$T,normal_fragment_maps:tb,normal_pars_fragment:eb,normal_pars_vertex:nb,normal_vertex:ib,normalmap_pars_fragment:ab,clearcoat_normal_fragment_begin:rb,clearcoat_normal_fragment_maps:sb,clearcoat_pars_fragment:ob,iridescence_pars_fragment:lb,opaque_fragment:ub,packing:cb,premultiplied_alpha_fragment:fb,project_vertex:hb,dithering_fragment:db,dithering_pars_fragment:pb,roughnessmap_fragment:mb,roughnessmap_pars_fragment:gb,shadowmap_pars_fragment:_b,shadowmap_pars_vertex:vb,shadowmap_vertex:xb,shadowmask_pars_fragment:Sb,skinbase_vertex:yb,skinning_pars_vertex:Mb,skinning_vertex:Eb,skinnormal_vertex:Tb,specularmap_fragment:bb,specularmap_pars_fragment:Ab,tonemapping_fragment:Rb,tonemapping_pars_fragment:Cb,transmission_fragment:wb,transmission_pars_fragment:Db,uv_pars_fragment:Ub,uv_pars_vertex:Lb,uv_vertex:Nb,worldpos_vertex:Ob,background_vert:Pb,background_frag:Bb,backgroundCube_vert:zb,backgroundCube_frag:Ib,cube_vert:Fb,cube_frag:Hb,depth_vert:Gb,depth_frag:Vb,distanceRGBA_vert:kb,distanceRGBA_frag:Xb,equirect_vert:Wb,equirect_frag:qb,linedashed_vert:Yb,linedashed_frag:jb,meshbasic_vert:Zb,meshbasic_frag:Kb,meshlambert_vert:Qb,meshlambert_frag:Jb,meshmatcap_vert:$b,meshmatcap_frag:tA,meshnormal_vert:eA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:aA,meshphysical_vert:rA,meshphysical_frag:sA,meshtoon_vert:oA,meshtoon_frag:lA,points_vert:uA,points_frag:cA,shadow_vert:fA,shadow_frag:hA,sprite_vert:dA,sprite_frag:pA},Dt={common:{diffuse:{value:new Re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new Re(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},bi={basic:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Re(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Un([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Re(0)},specular:{value:new Re(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Un([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Un([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Re(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Un([Dt.points,Dt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Un([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Un([Dt.common,Dt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Un([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Un([Dt.sprite,Dt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:Un([Dt.common,Dt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:Un([Dt.lights,Dt.fog,{color:{value:new Re(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};bi.physical={uniforms:Un([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new Re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new Re(0)},specularColor:{value:new Re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Ru={r:0,b:0,g:0},_r=new ua,mA=new tn;function gA(s,t,i,r,l,u,f){const d=new Re(0);let p=u===!0?0:1,m,g,v=null,x=0,y=null;function E(D){let w=D.isScene===!0?D.background:null;return w&&w.isTexture&&(w=(D.backgroundBlurriness>0?i:t).get(w)),w}function A(D){let w=!1;const I=E(D);I===null?_(d,p):I&&I.isColor&&(_(I,1),w=!0);const H=s.xr.getEnvironmentBlendMode();H==="additive"?r.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||w)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===Wu)?(g===void 0&&(g=new Ri(new jo(1,1,1),new Ya({name:"BackgroundCubeMaterial",uniforms:Rs(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),_r.copy(w.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(mA.makeRotationFromEuler(_r)),g.material.toneMapped=be.getTransfer(I.colorSpace)!==Pe,(v!==I||x!==I.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,x=I.version,y=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Ri(new Yu(2,2),new Ya({name:"BackgroundMaterial",uniforms:Rs(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,m.material.toneMapped=be.getTransfer(I.colorSpace)!==Pe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||x!==I.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,x=I.version,y=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,w){D.getRGB(Ru,f0(s)),r.buffers.color.setClear(Ru.r,Ru.g,Ru.b,w,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,w=1){d.set(D),p=w,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:A,addToRenderList:S,dispose:O}}function _A(s,t){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,f=!1;function d(C,V,lt,st,vt){let ht=!1;const B=v(st,lt,V);u!==B&&(u=B,m(u.object)),ht=y(C,st,lt,vt),ht&&E(C,st,lt,vt),vt!==null&&t.update(vt,s.ELEMENT_ARRAY_BUFFER),(ht||f)&&(f=!1,w(C,V,lt,st),vt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(vt).buffer))}function p(){return s.createVertexArray()}function m(C){return s.bindVertexArray(C)}function g(C){return s.deleteVertexArray(C)}function v(C,V,lt){const st=lt.wireframe===!0;let vt=r[C.id];vt===void 0&&(vt={},r[C.id]=vt);let ht=vt[V.id];ht===void 0&&(ht={},vt[V.id]=ht);let B=ht[st];return B===void 0&&(B=x(p()),ht[st]=B),B}function x(C){const V=[],lt=[],st=[];for(let vt=0;vt<i;vt++)V[vt]=0,lt[vt]=0,st[vt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:lt,attributeDivisors:st,object:C,attributes:{},index:null}}function y(C,V,lt,st){const vt=u.attributes,ht=V.attributes;let B=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){const N=vt[Y];let $=ht[Y];if($===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&($=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&($=C.instanceColor)),N===void 0||N.attribute!==$||$&&N.data!==$.data)return!0;B++}return u.attributesNum!==B||u.index!==st}function E(C,V,lt,st){const vt={},ht=V.attributes;let B=0;const Z=lt.getAttributes();for(const Y in Z)if(Z[Y].location>=0){let N=ht[Y];N===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(N=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(N=C.instanceColor));const $={};$.attribute=N,N&&N.data&&($.data=N.data),vt[Y]=$,B++}u.attributes=vt,u.attributesNum=B,u.index=st}function A(){const C=u.newAttributes;for(let V=0,lt=C.length;V<lt;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const lt=u.newAttributes,st=u.enabledAttributes,vt=u.attributeDivisors;lt[C]=1,st[C]===0&&(s.enableVertexAttribArray(C),st[C]=1),vt[C]!==V&&(s.vertexAttribDivisor(C,V),vt[C]=V)}function O(){const C=u.newAttributes,V=u.enabledAttributes;for(let lt=0,st=V.length;lt<st;lt++)V[lt]!==C[lt]&&(s.disableVertexAttribArray(lt),V[lt]=0)}function D(C,V,lt,st,vt,ht,B){B===!0?s.vertexAttribIPointer(C,V,lt,vt,ht):s.vertexAttribPointer(C,V,lt,st,vt,ht)}function w(C,V,lt,st){A();const vt=st.attributes,ht=lt.getAttributes(),B=V.defaultAttributeValues;for(const Z in ht){const Y=ht[Z];if(Y.location>=0){let Mt=vt[Z];if(Mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Mt=C.instanceColor)),Mt!==void 0){const N=Mt.normalized,$=Mt.itemSize,xt=t.get(Mt);if(xt===void 0)continue;const yt=xt.buffer,Q=xt.type,pt=xt.bytesPerElement,St=Q===s.INT||Q===s.UNSIGNED_INT||Mt.gpuType===Nd;if(Mt.isInterleavedBufferAttribute){const At=Mt.data,Ut=At.stride,oe=Mt.offset;if(At.isInstancedInterleavedBuffer){for(let Kt=0;Kt<Y.locationSize;Kt++)_(Y.location+Kt,At.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let Kt=0;Kt<Y.locationSize;Kt++)S(Y.location+Kt);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let Kt=0;Kt<Y.locationSize;Kt++)D(Y.location+Kt,$/Y.locationSize,Q,N,Ut*pt,(oe+$/Y.locationSize*Kt)*pt,St)}else{if(Mt.isInstancedBufferAttribute){for(let At=0;At<Y.locationSize;At++)_(Y.location+At,Mt.meshPerAttribute);C.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let At=0;At<Y.locationSize;At++)S(Y.location+At);s.bindBuffer(s.ARRAY_BUFFER,yt);for(let At=0;At<Y.locationSize;At++)D(Y.location+At,$/Y.locationSize,Q,N,$*pt,$/Y.locationSize*At*pt,St)}}else if(B!==void 0){const N=B[Z];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(Y.location,N);break;case 3:s.vertexAttrib3fv(Y.location,N);break;case 4:s.vertexAttrib4fv(Y.location,N);break;default:s.vertexAttrib1fv(Y.location,N)}}}}O()}function I(){W();for(const C in r){const V=r[C];for(const lt in V){const st=V[lt];for(const vt in st)g(st[vt].object),delete st[vt];delete V[lt]}delete r[C]}}function H(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const lt in V){const st=V[lt];for(const vt in st)g(st[vt].object),delete st[vt];delete V[lt]}delete r[C.id]}function z(C){for(const V in r){const lt=r[V];if(lt[C.id]===void 0)continue;const st=lt[C.id];for(const vt in st)g(st[vt].object),delete st[vt];delete lt[C.id]}}function W(){U(),f=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:W,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:H,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:S,disableUnusedAttributes:O}}function vA(s,t,i){let r;function l(m){r=m}function u(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function p(m,g,v,x){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)f(m[E],g[E],x[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,x,0,v);let E=0;for(let A=0;A<v;A++)E+=g[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function xA(s,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const z=t.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==mi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===ko&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(z!==la&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ia&&!W)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),w=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,H=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:O,maxVaryings:D,maxFragmentUniforms:w,vertexTextures:I,maxSamples:H}}function SA(s){const t=this;let i=null,r=0,l=!1,u=!1;const f=new xr,d=new se,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const y=v.length!==0||x||r!==0||l;return l=x,r=v.length,y},this.beginShadows=function(){u=!0,g(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,y){const E=v.clippingPlanes,A=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||u&&!S)u?g(null):m();else{const O=u?0:r,D=O*4;let w=_.clippingState||null;p.value=w,w=g(E,x,D,y);for(let I=0;I!==D;++I)w[I]=i[I];_.clippingState=w,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(v,x,y,E){const A=v!==null?v.length:0;let S=null;if(A!==0){if(S=p.value,E!==!0||S===null){const _=y+A*4,O=x.matrixWorldInverse;d.getNormalMatrix(O),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,w=y;D!==A;++D,w+=4)f.copy(v[D]).applyMatrix4(O,d),f.normal.toArray(S,w),S[w+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,S}}function yA(s){let t=new WeakMap;function i(f,d){return d===Yh?f.mapping=Ts:d===jh&&(f.mapping=bs),f}function r(f){if(f&&f.isTexture){const d=f.mapping;if(d===Yh||d===jh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new TE(p.height);return m.fromEquirectangularTexture(s,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Ss=4,rv=[.125,.215,.35,.446,.526,.582],Mr=20,wh=new LE,sv=new Re;let Dh=null,Uh=0,Lh=0,Nh=!1;const Sr=(1+Math.sqrt(5))/2,xs=1/Sr,ov=[new rt(-Sr,xs,0),new rt(Sr,xs,0),new rt(-xs,0,Sr),new rt(xs,0,Sr),new rt(0,Sr,-xs),new rt(0,Sr,xs),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],MA=new rt;class lv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100,u={}){const{size:f=256,position:d=MA}=u;Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dh,Uh,Lh),this._renderer.xr.enabled=Nh,t.scissorTest=!1,Cu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ts||t.mapping===bs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dh=this._renderer.getRenderTarget(),Uh=this._renderer.getActiveCubeFace(),Lh=this._renderer.getActiveMipmapLevel(),Nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ai,minFilter:Ai,generateMipmaps:!1,type:ko,format:mi,colorSpace:As,depthBuffer:!1},l=uv(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EA(u)),this._blurMaterial=TA(u,t,i)}return l}_compileMaterial(t){const i=new Ri(this._lodPlanes[0],t);this._renderer.compile(i,wh)}_sceneToCubeUV(t,i,r,l,u){const p=new oi(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,y=v.toneMapping;v.getClearColor(sv),v.toneMapping=Wa,v.autoClear=!1;const E=new Hd({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),A=new Ri(new jo,E);let S=!1;const _=t.background;_?_.isColor&&(E.color.copy(_),t.background=null,S=!0):(E.color.copy(sv),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+g[O],u.y,u.z)):D===1?(p.up.set(0,0,m[O]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+g[O],u.z)):(p.up.set(0,m[O],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+g[O]));const w=this._cubeSize;Cu(l,D*w,O>2?w:0,w,w),v.setRenderTarget(l),S&&v.render(A,p),v.render(t,p)}A.geometry.dispose(),A.material.dispose(),v.toneMapping=y,v.autoClear=x,t.background=_}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ts||t.mapping===bs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new Ri(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Cu(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(f,wh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=ov[(l-u-1)%ov.length];this._blur(t,u-1,u,f,d)}i.autoClear=r}_blur(t,i,r,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,r,l,"latitudinal",u),this._halfBlur(f,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ri(this._lodPlanes[l],m),x=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),A=u/E,S=isFinite(u)?1+Math.floor(g*A):Mr;S>Mr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Mr}`);const _=[];let O=0;for(let z=0;z<Mr;++z){const W=z/A,U=Math.exp(-W*W/2);_.push(U),z===0?O+=U:z<S&&(O+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;x.envMap.value=t.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=E,x.mipInt.value=D-r;const w=this._sizeLods[l],I=3*w*(l>D-Ss?l-D+Ss:0),H=4*(this._cubeSize-w);Cu(i,I,H,3*w,2*w),p.setRenderTarget(i),p.render(v,wh)}}function EA(s){const t=[],i=[],r=[];let l=s;const u=s-Ss+1+rv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Ss?p=rv[f-s+Ss-1]:f===0&&(p=0),r.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,A=3,S=2,_=1,O=new Float32Array(A*E*y),D=new Float32Array(S*E*y),w=new Float32Array(_*E*y);for(let H=0;H<y;H++){const z=H%3*2/3-1,W=H>2?0:-1,U=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];O.set(U,A*E*H),D.set(x,S*E*H);const C=[H,H,H,H,H,H];w.set(C,_*E*H)}const I=new Di;I.setAttribute("position",new _i(O,A)),I.setAttribute("uv",new _i(D,S)),I.setAttribute("faceIndex",new _i(w,_)),t.push(I),l>Ss&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function uv(s,t,i){const r=new Ar(s,t,i);return r.texture.mapping=Wu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Cu(s,t,i,r,l){s.viewport.set(t,i,r,l),s.scissor.set(t,i,r,l)}function TA(s,t,i){const r=new Float32Array(Mr),l=new rt(0,1,0);return new Ya({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function cv(){return new Ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vd(),fragmentShader:`

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
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function fv(){return new Ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xa,depthTest:!1,depthWrite:!1})}function Vd(){return`

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
	`}function bA(s){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Yh||p===jh,g=p===Ts||p===bs;if(m||g){let v=t.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new lv(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new lv(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",u),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function AA(s){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&zu("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function RA(s,t,i,r){const l={},u=new WeakMap;function f(v){const x=v.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const y in x)t.update(x[y],s.ARRAY_BUFFER)}function m(v){const x=[],y=v.index,E=v.attributes.position;let A=0;if(y!==null){const O=y.array;A=y.version;for(let D=0,w=O.length;D<w;D+=3){const I=O[D+0],H=O[D+1],z=O[D+2];x.push(I,H,H,z,z,I)}}else if(E!==void 0){const O=E.array;A=E.version;for(let D=0,w=O.length/3-1;D<w;D+=3){const I=D+0,H=D+1,z=D+2;x.push(I,H,H,z,z,I)}}else return;const S=new(a0(x)?c0:u0)(x,1);S.version=A;const _=u.get(v);_&&t.remove(_),u.set(v,S)}function g(v){const x=u.get(v);if(x){const y=v.index;y!==null&&x.version<y.version&&m(v)}else m(v);return u.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function CA(s,t,i){let r;function l(x){r=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function p(x,y){s.drawElements(r,y,u,x*f),i.update(y,r,1)}function m(x,y,E){E!==0&&(s.drawElementsInstanced(r,y,u,x*f,E),i.update(y,r,E))}function g(x,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,x,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,r,1)}function v(x,y,E,A){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)m(x[_]/f,y[_],A[_]);else{S.multiDrawElementsInstancedWEBGL(r,y,0,u,x,0,A,0,E);let _=0;for(let O=0;O<E;O++)_+=y[O]*A[O];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function wA(s){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(u/3);break;case s.LINES:i.lines+=d*(u/2);break;case s.LINE_STRIP:i.lines+=d*(u-1);break;case s.LINE_LOOP:i.lines+=d*u;break;case s.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function DA(s,t,i){const r=new WeakMap,l=new $e;function u(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==v){let C=function(){W.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var y=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),A===!0&&(w=2),S===!0&&(w=3);let I=d.attributes.position.count*w,H=1;I>t.maxTextureSize&&(H=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const z=new Float32Array(I*H*4*v),W=new r0(z,I,H,v);W.type=ia,W.needsUpdate=!0;const U=w*4;for(let V=0;V<v;V++){const lt=_[V],st=O[V],vt=D[V],ht=I*H*4*V;for(let B=0;B<lt.count;B++){const Z=B*U;E===!0&&(l.fromBufferAttribute(lt,B),z[ht+Z+0]=l.x,z[ht+Z+1]=l.y,z[ht+Z+2]=l.z,z[ht+Z+3]=0),A===!0&&(l.fromBufferAttribute(st,B),z[ht+Z+4]=l.x,z[ht+Z+5]=l.y,z[ht+Z+6]=l.z,z[ht+Z+7]=0),S===!0&&(l.fromBufferAttribute(vt,B),z[ht+Z+8]=l.x,z[ht+Z+9]=l.y,z[ht+Z+10]=l.z,z[ht+Z+11]=vt.itemSize===4?l.w:1)}}x={count:v,texture:W,size:new Fe(I,H)},r.set(d,x),d.addEventListener("dispose",C)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const A=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function UA(s,t,i,r){let l=new WeakMap;function u(p){const m=r.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const v0=new Hn,hv=new g0(1,1),x0=new r0,S0=new oE,y0=new d0,dv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),_v=new Float32Array(4);function Ds(s,t,i){const r=s[0];if(r<=0||r>0)return s;const l=t*i;let u=dv[l];if(u===void 0&&(u=new Float32Array(l),dv[l]=u),t!==0){r.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,s[f].toArray(u,d)}return u}function fn(s,t){if(s.length!==t.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==t[i])return!1;return!0}function hn(s,t){for(let i=0,r=t.length;i<r;i++)s[i]=t[i]}function ju(s,t){let i=pv[t];i===void 0&&(i=new Int32Array(t),pv[t]=i);for(let r=0;r!==t;++r)i[r]=s.allocateTextureUnit();return i}function LA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1f(this.addr,t),i[0]=t)}function NA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2fv(this.addr,t),hn(i,t)}}function OA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(fn(i,t))return;s.uniform3fv(this.addr,t),hn(i,t)}}function PA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4fv(this.addr,t),hn(i,t)}}function BA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix2fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;_v.set(r),s.uniformMatrix2fv(this.addr,!1,_v),hn(i,r)}}function zA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix3fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;gv.set(r),s.uniformMatrix3fv(this.addr,!1,gv),hn(i,r)}}function IA(s,t){const i=this.cache,r=t.elements;if(r===void 0){if(fn(i,t))return;s.uniformMatrix4fv(this.addr,!1,t),hn(i,t)}else{if(fn(i,r))return;mv.set(r),s.uniformMatrix4fv(this.addr,!1,mv),hn(i,r)}}function FA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1i(this.addr,t),i[0]=t)}function HA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2iv(this.addr,t),hn(i,t)}}function GA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3iv(this.addr,t),hn(i,t)}}function VA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4iv(this.addr,t),hn(i,t)}}function kA(s,t){const i=this.cache;i[0]!==t&&(s.uniform1ui(this.addr,t),i[0]=t)}function XA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(fn(i,t))return;s.uniform2uiv(this.addr,t),hn(i,t)}}function WA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(fn(i,t))return;s.uniform3uiv(this.addr,t),hn(i,t)}}function qA(s,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(fn(i,t))return;s.uniform4uiv(this.addr,t),hn(i,t)}}function YA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let u;this.type===s.SAMPLER_2D_SHADOW?(hv.compareFunction=i0,u=hv):u=v0,i.setTexture2D(t||u,l)}function jA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||S0,l)}function ZA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||y0,l)}function KA(s,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||x0,l)}function QA(s){switch(s){case 5126:return LA;case 35664:return NA;case 35665:return OA;case 35666:return PA;case 35674:return BA;case 35675:return zA;case 35676:return IA;case 5124:case 35670:return FA;case 35667:case 35671:return HA;case 35668:case 35672:return GA;case 35669:case 35673:return VA;case 5125:return kA;case 36294:return XA;case 36295:return WA;case 36296:return qA;case 35678:case 36198:case 36298:case 36306:case 35682:return YA;case 35679:case 36299:case 36307:return jA;case 35680:case 36300:case 36308:case 36293:return ZA;case 36289:case 36303:case 36311:case 36292:return KA}}function JA(s,t){s.uniform1fv(this.addr,t)}function $A(s,t){const i=Ds(t,this.size,2);s.uniform2fv(this.addr,i)}function t1(s,t){const i=Ds(t,this.size,3);s.uniform3fv(this.addr,i)}function e1(s,t){const i=Ds(t,this.size,4);s.uniform4fv(this.addr,i)}function n1(s,t){const i=Ds(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function i1(s,t){const i=Ds(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function a1(s,t){const i=Ds(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function r1(s,t){s.uniform1iv(this.addr,t)}function s1(s,t){s.uniform2iv(this.addr,t)}function o1(s,t){s.uniform3iv(this.addr,t)}function l1(s,t){s.uniform4iv(this.addr,t)}function u1(s,t){s.uniform1uiv(this.addr,t)}function c1(s,t){s.uniform2uiv(this.addr,t)}function f1(s,t){s.uniform3uiv(this.addr,t)}function h1(s,t){s.uniform4uiv(this.addr,t)}function d1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||v0,u[f])}function p1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||S0,u[f])}function m1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||y0,u[f])}function g1(s,t,i){const r=this.cache,l=t.length,u=ju(i,l);fn(r,u)||(s.uniform1iv(this.addr,u),hn(r,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||x0,u[f])}function _1(s){switch(s){case 5126:return JA;case 35664:return $A;case 35665:return t1;case 35666:return e1;case 35674:return n1;case 35675:return i1;case 35676:return a1;case 5124:case 35670:return r1;case 35667:case 35671:return s1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return u1;case 36294:return c1;case 36295:return f1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return d1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class v1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=QA(i.type)}}class x1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class S1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const Oh=/(\w+)(\])?(\[|\.)?/g;function vv(s,t){s.seq.push(t),s.map[t.id]=t}function y1(s,t,i){const r=s.name,l=r.length;for(Oh.lastIndex=0;;){const u=Oh.exec(r),f=Oh.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){vv(i,m===void 0?new v1(d,s,t):new x1(d,s,t));break}else{let v=i.map[d];v===void 0&&(v=new S1(d),vv(i,v)),i=v}}}class Iu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);y1(u,f,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&r.push(f)}return r}}function xv(s,t,i){const r=s.createShader(t);return s.shaderSource(r,i),s.compileShader(r),r}const M1=37297;let E1=0;function T1(s,t){const i=s.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;r.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return r.join(`
`)}const Sv=new se;function b1(s){be._getMatrix(Sv,be.workingColorSpace,s);const t=`mat3( ${Sv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(s)){case Hu:return[t,"LinearTransferOETF"];case Pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function yv(s,t,i){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=s.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+T1(s.getShaderSource(t),f)}else return l}function A1(s,t){const i=b1(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function R1(s,t){let i;switch(t){case LM:i="Linear";break;case NM:i="Reinhard";break;case OM:i="Cineon";break;case PM:i="ACESFilmic";break;case zM:i="AgX";break;case IM:i="Neutral";break;case BM:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const wu=new rt;function C1(){be.getLuminanceCoefficients(wu);const s=wu.x.toFixed(4),t=wu.y.toFixed(4),i=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function D1(s){const t=[];for(const i in s){const r=s[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function U1(s,t){const i={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=s.getActiveAttrib(t,l),f=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:s.getAttribLocation(t,f),locationSize:d}}return i}function No(s){return s!==""}function Mv(s,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ev(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function bd(s){return s.replace(L1,O1)}const N1=new Map;function O1(s,t){let i=le[t];if(i===void 0){const r=N1.get(t);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return bd(i)}const P1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tv(s){return s.replace(P1,B1)}function B1(s,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function bv(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function z1(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qv?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fM?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ea&&(t="SHADOWMAP_TYPE_VSM"),t}function I1(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ts:case bs:t="ENVMAP_TYPE_CUBE";break;case Wu:t="ENVMAP_TYPE_CUBE_UV";break}return t}function F1(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case bs:t="ENVMAP_MODE_REFRACTION";break}return t}function H1(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Yv:t="ENVMAP_BLENDING_MULTIPLY";break;case DM:t="ENVMAP_BLENDING_MIX";break;case UM:t="ENVMAP_BLENDING_ADD";break}return t}function G1(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function V1(s,t,i,r){const l=s.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=z1(i),m=I1(i),g=F1(i),v=H1(i),x=G1(i),y=w1(i),E=D1(u),A=l.createProgram();let S,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(No).join(`
`),_.length>0&&(_+=`
`)):(S=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[bv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wa?"#define TONE_MAPPING":"",i.toneMapping!==Wa?le.tonemapping_pars_fragment:"",i.toneMapping!==Wa?R1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,A1("linearToOutputTexel",i.outputColorSpace),C1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),f=bd(f),f=Mv(f,i),f=Ev(f,i),d=bd(d),d=Mv(d,i),d=Ev(d,i),f=Tv(f),d=Tv(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===I_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===I_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=O+S+f,w=O+_+d,I=xv(l,l.VERTEX_SHADER,D),H=xv(l,l.FRAGMENT_SHADER,w);l.attachShader(A,I),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(V){if(s.debug.checkShaderErrors){const lt=l.getProgramInfoLog(A).trim(),st=l.getShaderInfoLog(I).trim(),vt=l.getShaderInfoLog(H).trim();let ht=!0,B=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(ht=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,I,H);else{const Z=yv(l,I,"vertex"),Y=yv(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+lt+`
`+Z+`
`+Y)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(st===""||vt==="")&&(B=!1);B&&(V.diagnostics={runnable:ht,programLog:lt,vertexShader:{log:st,prefix:S},fragmentShader:{log:vt,prefix:_}})}l.deleteShader(I),l.deleteShader(H),W=new Iu(l,A),U=U1(l,A)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,M1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E1++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=H,this}let k1=0;class X1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new W1(t),i.set(t,r)),r}}class W1{constructor(t){this.id=k1++,this.code=t,this.usedTimes=0}}function q1(s,t,i,r,l,u,f){const d=new o0,p=new X1,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return m.add(U),U===0?"uv":`uv${U}`}function S(U,C,V,lt,st){const vt=lt.fog,ht=st.geometry,B=U.isMeshStandardMaterial?lt.environment:null,Z=(U.isMeshStandardMaterial?i:t).get(U.envMap||B),Y=Z&&Z.mapping===Wu?Z.image.height:null,Mt=E[U.type];U.precision!==null&&(y=l.getMaxPrecision(U.precision),y!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",y,"instead."));const N=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,$=N!==void 0?N.length:0;let xt=0;ht.morphAttributes.position!==void 0&&(xt=1),ht.morphAttributes.normal!==void 0&&(xt=2),ht.morphAttributes.color!==void 0&&(xt=3);let yt,Q,pt,St;if(Mt){const Me=bi[Mt];yt=Me.vertexShader,Q=Me.fragmentShader}else yt=U.vertexShader,Q=U.fragmentShader,p.update(U),pt=p.getVertexShaderID(U),St=p.getFragmentShaderID(U);const At=s.getRenderTarget(),Ut=s.state.buffers.depth.getReversed(),oe=st.isInstancedMesh===!0,Kt=st.isBatchedMesh===!0,He=!!U.map,Be=!!U.matcap,fe=!!Z,F=!!U.aoMap,Ln=!!U.lightMap,ge=!!U.bumpMap,ie=!!U.normalMap,Wt=!!U.displacementMap,De=!!U.emissiveMap,Vt=!!U.metalnessMap,L=!!U.roughnessMap,b=U.anisotropy>0,tt=U.clearcoat>0,mt=U.dispersion>0,Et=U.iridescence>0,ct=U.sheen>0,Ot=U.transmission>0,Rt=b&&!!U.anisotropyMap,Ht=tt&&!!U.clearcoatMap,$t=tt&&!!U.clearcoatNormalMap,bt=tt&&!!U.clearcoatRoughnessMap,It=Et&&!!U.iridescenceMap,jt=Et&&!!U.iridescenceThicknessMap,Qt=ct&&!!U.sheenColorMap,Pt=ct&&!!U.sheenRoughnessMap,ue=!!U.specularMap,ne=!!U.specularColorMap,Ue=!!U.specularIntensityMap,k=Ot&&!!U.transmissionMap,Lt=Ot&&!!U.thicknessMap,ot=!!U.gradientMap,gt=!!U.alphaMap,Bt=U.alphaTest>0,Nt=!!U.alphaHash,ae=!!U.extensions;let Ge=Wa;U.toneMapped&&(At===null||At.isXRRenderTarget===!0)&&(Ge=s.toneMapping);const en={shaderID:Mt,shaderType:U.type,shaderName:U.name,vertexShader:yt,fragmentShader:Q,defines:U.defines,customVertexShaderID:pt,customFragmentShaderID:St,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:y,batching:Kt,batchingColor:Kt&&st._colorsTexture!==null,instancing:oe,instancingColor:oe&&st.instanceColor!==null,instancingMorph:oe&&st.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:At===null?s.outputColorSpace:At.isXRRenderTarget===!0?At.texture.colorSpace:As,alphaToCoverage:!!U.alphaToCoverage,map:He,matcap:Be,envMap:fe,envMapMode:fe&&Z.mapping,envMapCubeUVHeight:Y,aoMap:F,lightMap:Ln,bumpMap:ge,normalMap:ie,displacementMap:x&&Wt,emissiveMap:De,normalMapObjectSpace:ie&&U.normalMapType===kM,normalMapTangentSpace:ie&&U.normalMapType===VM,metalnessMap:Vt,roughnessMap:L,anisotropy:b,anisotropyMap:Rt,clearcoat:tt,clearcoatMap:Ht,clearcoatNormalMap:$t,clearcoatRoughnessMap:bt,dispersion:mt,iridescence:Et,iridescenceMap:It,iridescenceThicknessMap:jt,sheen:ct,sheenColorMap:Qt,sheenRoughnessMap:Pt,specularMap:ue,specularColorMap:ne,specularIntensityMap:Ue,transmission:Ot,transmissionMap:k,thicknessMap:Lt,gradientMap:ot,opaque:U.transparent===!1&&U.blending===ys&&U.alphaToCoverage===!1,alphaMap:gt,alphaTest:Bt,alphaHash:Nt,combine:U.combine,mapUv:He&&A(U.map.channel),aoMapUv:F&&A(U.aoMap.channel),lightMapUv:Ln&&A(U.lightMap.channel),bumpMapUv:ge&&A(U.bumpMap.channel),normalMapUv:ie&&A(U.normalMap.channel),displacementMapUv:Wt&&A(U.displacementMap.channel),emissiveMapUv:De&&A(U.emissiveMap.channel),metalnessMapUv:Vt&&A(U.metalnessMap.channel),roughnessMapUv:L&&A(U.roughnessMap.channel),anisotropyMapUv:Rt&&A(U.anisotropyMap.channel),clearcoatMapUv:Ht&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:$t&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:bt&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&A(U.sheenRoughnessMap.channel),specularMapUv:ue&&A(U.specularMap.channel),specularColorMapUv:ne&&A(U.specularColorMap.channel),specularIntensityMapUv:Ue&&A(U.specularIntensityMap.channel),transmissionMapUv:k&&A(U.transmissionMap.channel),thicknessMapUv:Lt&&A(U.thicknessMap.channel),alphaMapUv:gt&&A(U.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(ie||b),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ht.attributes.uv&&(He||gt),fog:!!vt,useFog:U.fog===!0,fogExp2:!!vt&&vt.isFogExp2,flatShading:U.flatShading===!0,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Ut,skinning:st.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:xt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ge,decodeVideoTexture:He&&U.map.isVideoTexture===!0&&be.getTransfer(U.map.colorSpace)===Pe,decodeVideoTextureEmissive:De&&U.emissiveMap.isVideoTexture===!0&&be.getTransfer(U.emissiveMap.colorSpace)===Pe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===na,flipSided:U.side===Fn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:ae&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&U.extensions.multiDraw===!0||Kt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return en.vertexUv1s=m.has(1),en.vertexUv2s=m.has(2),en.vertexUv3s=m.has(3),m.clear(),en}function _(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)C.push(V),C.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(O(C,U),D(C,U),C.push(s.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function O(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function D(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function w(U){const C=E[U.type];let V;if(C){const lt=bi[C];V=SE.clone(lt.uniforms)}else V=U.uniforms;return V}function I(U,C){let V;for(let lt=0,st=g.length;lt<st;lt++){const vt=g[lt];if(vt.cacheKey===C){V=vt,++V.usedTimes;break}}return V===void 0&&(V=new V1(s,C,U,u),g.push(V)),V}function H(U){if(--U.usedTimes===0){const C=g.indexOf(U);g[C]=g[g.length-1],g.pop(),U.destroy()}}function z(U){p.remove(U)}function W(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:w,acquireProgram:I,releaseProgram:H,releaseShaderCache:z,programs:g,dispose:W}}function Y1(){let s=new WeakMap;function t(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function r(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function u(){s=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function j1(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Av(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Rv(){const s=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function f(v,x,y,E,A,S){let _=s[t];return _===void 0?(_={id:v.id,object:v,geometry:x,material:y,groupOrder:E,renderOrder:v.renderOrder,z:A,group:S},s[t]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=A,_.group=S),t++,_}function d(v,x,y,E,A,S){const _=f(v,x,y,E,A,S);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function p(v,x,y,E,A,S){const _=f(v,x,y,E,A,S);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||j1),r.length>1&&r.sort(x||Av),l.length>1&&l.sort(x||Av)}function g(){for(let v=t,x=s.length;v<x;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:p,finish:g,sort:m}}function Z1(){let s=new WeakMap;function t(r,l){const u=s.get(r);let f;return u===void 0?(f=new Rv,s.set(r,[f])):l>=u.length?(f=new Rv,u.push(f)):f=u[l],f}function i(){s=new WeakMap}return{get:t,dispose:i}}function K1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new rt,color:new Re};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Re,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Re,groundColor:new Re};break;case"RectAreaLight":i={color:new Re,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return s[t.id]=i,i}}}function Q1(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=i,i}}}let J1=0;function $1(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function tR(s){const t=new K1,i=Q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new rt);const l=new rt,u=new tn,f=new tn;function d(m){let g=0,v=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let y=0,E=0,A=0,S=0,_=0,O=0,D=0,w=0,I=0,H=0,z=0;m.sort($1);for(let U=0,C=m.length;U<C;U++){const V=m[U],lt=V.color,st=V.intensity,vt=V.distance,ht=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=lt.r*st,v+=lt.g*st,x+=lt.b*st;else if(V.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(V.sh.coefficients[B],st);z++}else if(V.isDirectionalLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ht,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=B,y++}else if(V.isSpotLight){const B=t.get(V);B.position.setFromMatrixPosition(V.matrixWorld),B.color.copy(lt).multiplyScalar(st),B.distance=vt,B.coneCos=Math.cos(V.angle),B.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),B.decay=V.decay,r.spot[A]=B;const Z=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,Z.updateMatrices(V),V.castShadow&&H++),r.spotLightMatrix[A]=Z.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=ht,w++}A++}else if(V.isRectAreaLight){const B=t.get(V);B.color.copy(lt).multiplyScalar(st),B.halfWidth.set(V.width*.5,0,0),B.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=B,S++}else if(V.isPointLight){const B=t.get(V);if(B.color.copy(V.color).multiplyScalar(V.intensity),B.distance=V.distance,B.decay=V.decay,V.castShadow){const Z=V.shadow,Y=i.get(V);Y.shadowIntensity=Z.intensity,Y.shadowBias=Z.bias,Y.shadowNormalBias=Z.normalBias,Y.shadowRadius=Z.radius,Y.shadowMapSize=Z.mapSize,Y.shadowCameraNear=Z.camera.near,Y.shadowCameraFar=Z.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=ht,r.pointShadowMatrix[E]=V.shadow.matrix,D++}r.point[E]=B,E++}else if(V.isHemisphereLight){const B=t.get(V);B.skyColor.copy(V.color).multiplyScalar(st),B.groundColor.copy(V.groundColor).multiplyScalar(st),r.hemi[_]=B,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Dt.LTC_FLOAT_1,r.rectAreaLTC2=Dt.LTC_FLOAT_2):(r.rectAreaLTC1=Dt.LTC_HALF_1,r.rectAreaLTC2=Dt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=x;const W=r.hash;(W.directionalLength!==y||W.pointLength!==E||W.spotLength!==A||W.rectAreaLength!==S||W.hemiLength!==_||W.numDirectionalShadows!==O||W.numPointShadows!==D||W.numSpotShadows!==w||W.numSpotMaps!==I||W.numLightProbes!==z)&&(r.directional.length=y,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=w+I-H,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,W.directionalLength=y,W.pointLength=E,W.spotLength=A,W.rectAreaLength=S,W.hemiLength=_,W.numDirectionalShadows=O,W.numPointShadows=D,W.numSpotShadows=w,W.numSpotMaps=I,W.numLightProbes=z,r.version=J1++)}function p(m,g){let v=0,x=0,y=0,E=0,A=0;const S=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const D=m[_];if(D.isDirectionalLight){const w=r.directional[v];w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),v++}else if(D.isSpotLight){const w=r.spot[y];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),w.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(S),y++}else if(D.isRectAreaLight){const w=r.rectArea[E];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),f.identity(),u.copy(D.matrixWorld),u.premultiply(S),f.extractRotation(u),w.halfWidth.set(D.width*.5,0,0),w.halfHeight.set(0,D.height*.5,0),w.halfWidth.applyMatrix4(f),w.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const w=r.point[x];w.position.setFromMatrixPosition(D.matrixWorld),w.position.applyMatrix4(S),x++}else if(D.isHemisphereLight){const w=r.hemi[A];w.direction.setFromMatrixPosition(D.matrixWorld),w.direction.transformDirection(S),A++}}}return{setup:d,setupView:p,state:r}}function Cv(s){const t=new tR(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function u(g){i.push(g)}function f(g){r.push(g)}function d(){t.setup(i)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function eR(s){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Cv(s),t.set(l,[d])):u>=f.length?(d=new Cv(s),f.push(d)):d=f[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const nR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iR=`uniform sampler2D shadow_pass;
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
}`;function aR(s,t,i){let r=new p0;const l=new Fe,u=new Fe,f=new $e,d=new DE({depthPacking:GM}),p=new UE,m={},g=i.maxTextureSize,v={[qa]:Fn,[Fn]:qa,[na]:na},x=new Ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:nR,fragmentShader:iR}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const E=new Di;E.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Ri(E,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qv;let _=this.type;this.render=function(H,z,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const U=s.getRenderTarget(),C=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),lt=s.state;lt.setBlending(Xa),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const st=_!==ea&&this.type===ea,vt=_===ea&&this.type!==ea;for(let ht=0,B=H.length;ht<B;ht++){const Z=H[ht],Y=Z.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const Mt=Y.getFrameExtents();if(l.multiply(Mt),u.copy(Y.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(u.x=Math.floor(g/Mt.x),l.x=u.x*Mt.x,Y.mapSize.x=u.x),l.y>g&&(u.y=Math.floor(g/Mt.y),l.y=u.y*Mt.y,Y.mapSize.y=u.y)),Y.map===null||st===!0||vt===!0){const $=this.type!==ea?{minFilter:gi,magFilter:gi}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Ar(l.x,l.y,$),Y.map.texture.name=Z.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const N=Y.getViewportCount();for(let $=0;$<N;$++){const xt=Y.getViewport($);f.set(u.x*xt.x,u.y*xt.y,u.x*xt.z,u.y*xt.w),lt.viewport(f),Y.updateMatrices(Z,$),r=Y.getFrustum(),w(z,W,Y.camera,Z,this.type)}Y.isPointLightShadow!==!0&&this.type===ea&&O(Y,W),Y.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(U,C,V)};function O(H,z){const W=t.update(A);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ar(l.x,l.y)),x.uniforms.shadow_pass.value=H.map.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,s.setRenderTarget(H.mapPass),s.clear(),s.renderBufferDirect(z,null,W,x,A,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,s.setRenderTarget(H.map),s.clear(),s.renderBufferDirect(z,null,W,y,A,null)}function D(H,z,W,U){let C=null;const V=W.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(V!==void 0)C=V;else if(C=W.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const lt=C.uuid,st=z.uuid;let vt=m[lt];vt===void 0&&(vt={},m[lt]=vt);let ht=vt[st];ht===void 0&&(ht=C.clone(),vt[st]=ht,z.addEventListener("dispose",I)),C=ht}if(C.visible=z.visible,C.wireframe=z.wireframe,U===ea?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:v[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,W.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const lt=s.properties.get(C);lt.light=W}return C}function w(H,z,W,U,C){if(H.visible===!1)return;if(H.layers.test(z.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===ea)&&(!H.frustumCulled||r.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,H.matrixWorld);const st=t.update(H),vt=H.material;if(Array.isArray(vt)){const ht=st.groups;for(let B=0,Z=ht.length;B<Z;B++){const Y=ht[B],Mt=vt[Y.materialIndex];if(Mt&&Mt.visible){const N=D(H,Mt,U,C);H.onBeforeShadow(s,H,z,W,st,N,Y),s.renderBufferDirect(W,null,st,N,H,Y),H.onAfterShadow(s,H,z,W,st,N,Y)}}}else if(vt.visible){const ht=D(H,vt,U,C);H.onBeforeShadow(s,H,z,W,st,ht,null),s.renderBufferDirect(W,null,st,ht,H,null),H.onAfterShadow(s,H,z,W,st,ht,null)}}const lt=H.children;for(let st=0,vt=lt.length;st<vt;st++)w(lt[st],z,W,U,C)}function I(H){H.target.removeEventListener("dispose",I);for(const W in m){const U=m[W],C=H.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const rR={[Hh]:Gh,[Vh]:Wh,[kh]:qh,[Es]:Xh,[Gh]:Hh,[Wh]:Vh,[qh]:kh,[Xh]:Es};function sR(s,t){function i(){let k=!1;const Lt=new $e;let ot=null;const gt=new $e(0,0,0,0);return{setMask:function(Bt){ot!==Bt&&!k&&(s.colorMask(Bt,Bt,Bt,Bt),ot=Bt)},setLocked:function(Bt){k=Bt},setClear:function(Bt,Nt,ae,Ge,en){en===!0&&(Bt*=Ge,Nt*=Ge,ae*=Ge),Lt.set(Bt,Nt,ae,Ge),gt.equals(Lt)===!1&&(s.clearColor(Bt,Nt,ae,Ge),gt.copy(Lt))},reset:function(){k=!1,ot=null,gt.set(-1,0,0,0)}}}function r(){let k=!1,Lt=!1,ot=null,gt=null,Bt=null;return{setReversed:function(Nt){if(Lt!==Nt){const ae=t.get("EXT_clip_control");Nt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Lt=Nt;const Ge=Bt;Bt=null,this.setClear(Ge)}},getReversed:function(){return Lt},setTest:function(Nt){Nt?At(s.DEPTH_TEST):Ut(s.DEPTH_TEST)},setMask:function(Nt){ot!==Nt&&!k&&(s.depthMask(Nt),ot=Nt)},setFunc:function(Nt){if(Lt&&(Nt=rR[Nt]),gt!==Nt){switch(Nt){case Hh:s.depthFunc(s.NEVER);break;case Gh:s.depthFunc(s.ALWAYS);break;case Vh:s.depthFunc(s.LESS);break;case Es:s.depthFunc(s.LEQUAL);break;case kh:s.depthFunc(s.EQUAL);break;case Xh:s.depthFunc(s.GEQUAL);break;case Wh:s.depthFunc(s.GREATER);break;case qh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}gt=Nt}},setLocked:function(Nt){k=Nt},setClear:function(Nt){Bt!==Nt&&(Lt&&(Nt=1-Nt),s.clearDepth(Nt),Bt=Nt)},reset:function(){k=!1,ot=null,gt=null,Bt=null,Lt=!1}}}function l(){let k=!1,Lt=null,ot=null,gt=null,Bt=null,Nt=null,ae=null,Ge=null,en=null;return{setTest:function(Me){k||(Me?At(s.STENCIL_TEST):Ut(s.STENCIL_TEST))},setMask:function(Me){Lt!==Me&&!k&&(s.stencilMask(Me),Lt=Me)},setFunc:function(Me,Vn,dn){(ot!==Me||gt!==Vn||Bt!==dn)&&(s.stencilFunc(Me,Vn,dn),ot=Me,gt=Vn,Bt=dn)},setOp:function(Me,Vn,dn){(Nt!==Me||ae!==Vn||Ge!==dn)&&(s.stencilOp(Me,Vn,dn),Nt=Me,ae=Vn,Ge=dn)},setLocked:function(Me){k=Me},setClear:function(Me){en!==Me&&(s.clearStencil(Me),en=Me)},reset:function(){k=!1,Lt=null,ot=null,gt=null,Bt=null,Nt=null,ae=null,Ge=null,en=null}}}const u=new i,f=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,D=null,w=null,I=null,H=null,z=new Re(0,0,0),W=0,U=!1,C=null,V=null,lt=null,st=null,vt=null;const ht=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,Z=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),B=Z>=1):Y.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),B=Z>=2);let Mt=null,N={};const $=s.getParameter(s.SCISSOR_BOX),xt=s.getParameter(s.VIEWPORT),yt=new $e().fromArray($),Q=new $e().fromArray(xt);function pt(k,Lt,ot,gt){const Bt=new Uint8Array(4),Nt=s.createTexture();s.bindTexture(k,Nt),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ae=0;ae<ot;ae++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Lt,0,s.RGBA,1,1,gt,0,s.RGBA,s.UNSIGNED_BYTE,Bt):s.texImage2D(Lt+ae,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Bt);return Nt}const St={};St[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),St[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),St[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),At(s.DEPTH_TEST),f.setFunc(Es),ge(!1),ie(L_),At(s.CULL_FACE),F(Xa);function At(k){g[k]!==!0&&(s.enable(k),g[k]=!0)}function Ut(k){g[k]!==!1&&(s.disable(k),g[k]=!1)}function oe(k,Lt){return v[k]!==Lt?(s.bindFramebuffer(k,Lt),v[k]=Lt,k===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Lt),k===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Kt(k,Lt){let ot=y,gt=!1;if(k){ot=x.get(Lt),ot===void 0&&(ot=[],x.set(Lt,ot));const Bt=k.textures;if(ot.length!==Bt.length||ot[0]!==s.COLOR_ATTACHMENT0){for(let Nt=0,ae=Bt.length;Nt<ae;Nt++)ot[Nt]=s.COLOR_ATTACHMENT0+Nt;ot.length=Bt.length,gt=!0}}else ot[0]!==s.BACK&&(ot[0]=s.BACK,gt=!0);gt&&s.drawBuffers(ot)}function He(k){return E!==k?(s.useProgram(k),E=k,!0):!1}const Be={[yr]:s.FUNC_ADD,[dM]:s.FUNC_SUBTRACT,[pM]:s.FUNC_REVERSE_SUBTRACT};Be[mM]=s.MIN,Be[gM]=s.MAX;const fe={[_M]:s.ZERO,[vM]:s.ONE,[xM]:s.SRC_COLOR,[Ih]:s.SRC_ALPHA,[bM]:s.SRC_ALPHA_SATURATE,[EM]:s.DST_COLOR,[yM]:s.DST_ALPHA,[SM]:s.ONE_MINUS_SRC_COLOR,[Fh]:s.ONE_MINUS_SRC_ALPHA,[TM]:s.ONE_MINUS_DST_COLOR,[MM]:s.ONE_MINUS_DST_ALPHA,[AM]:s.CONSTANT_COLOR,[RM]:s.ONE_MINUS_CONSTANT_COLOR,[CM]:s.CONSTANT_ALPHA,[wM]:s.ONE_MINUS_CONSTANT_ALPHA};function F(k,Lt,ot,gt,Bt,Nt,ae,Ge,en,Me){if(k===Xa){A===!0&&(Ut(s.BLEND),A=!1);return}if(A===!1&&(At(s.BLEND),A=!0),k!==hM){if(k!==S||Me!==U){if((_!==yr||w!==yr)&&(s.blendEquation(s.FUNC_ADD),_=yr,w=yr),Me)switch(k){case ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.ONE,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case N_:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case O_:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case P_:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}O=null,D=null,I=null,H=null,z.set(0,0,0),W=0,S=k,U=Me}return}Bt=Bt||Lt,Nt=Nt||ot,ae=ae||gt,(Lt!==_||Bt!==w)&&(s.blendEquationSeparate(Be[Lt],Be[Bt]),_=Lt,w=Bt),(ot!==O||gt!==D||Nt!==I||ae!==H)&&(s.blendFuncSeparate(fe[ot],fe[gt],fe[Nt],fe[ae]),O=ot,D=gt,I=Nt,H=ae),(Ge.equals(z)===!1||en!==W)&&(s.blendColor(Ge.r,Ge.g,Ge.b,en),z.copy(Ge),W=en),S=k,U=!1}function Ln(k,Lt){k.side===na?Ut(s.CULL_FACE):At(s.CULL_FACE);let ot=k.side===Fn;Lt&&(ot=!ot),ge(ot),k.blending===ys&&k.transparent===!1?F(Xa):F(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),f.setFunc(k.depthFunc),f.setTest(k.depthTest),f.setMask(k.depthWrite),u.setMask(k.colorWrite);const gt=k.stencilWrite;d.setTest(gt),gt&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),De(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?At(s.SAMPLE_ALPHA_TO_COVERAGE):Ut(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(k){C!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),C=k)}function ie(k){k!==uM?(At(s.CULL_FACE),k!==V&&(k===L_?s.cullFace(s.BACK):k===cM?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ut(s.CULL_FACE),V=k}function Wt(k){k!==lt&&(B&&s.lineWidth(k),lt=k)}function De(k,Lt,ot){k?(At(s.POLYGON_OFFSET_FILL),(st!==Lt||vt!==ot)&&(s.polygonOffset(Lt,ot),st=Lt,vt=ot)):Ut(s.POLYGON_OFFSET_FILL)}function Vt(k){k?At(s.SCISSOR_TEST):Ut(s.SCISSOR_TEST)}function L(k){k===void 0&&(k=s.TEXTURE0+ht-1),Mt!==k&&(s.activeTexture(k),Mt=k)}function b(k,Lt,ot){ot===void 0&&(Mt===null?ot=s.TEXTURE0+ht-1:ot=Mt);let gt=N[ot];gt===void 0&&(gt={type:void 0,texture:void 0},N[ot]=gt),(gt.type!==k||gt.texture!==Lt)&&(Mt!==ot&&(s.activeTexture(ot),Mt=ot),s.bindTexture(k,Lt||St[k]),gt.type=k,gt.texture=Lt)}function tt(){const k=N[Mt];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function mt(){try{s.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ct(){try{s.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ot(){try{s.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Rt(){try{s.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ht(){try{s.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function $t(){try{s.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function bt(){try{s.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function It(){try{s.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function jt(){try{s.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(k){yt.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),yt.copy(k))}function Pt(k){Q.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),Q.copy(k))}function ue(k,Lt){let ot=m.get(Lt);ot===void 0&&(ot=new WeakMap,m.set(Lt,ot));let gt=ot.get(k);gt===void 0&&(gt=s.getUniformBlockIndex(Lt,k.name),ot.set(k,gt))}function ne(k,Lt){const gt=m.get(Lt).get(k);p.get(Lt)!==gt&&(s.uniformBlockBinding(Lt,gt,k.__bindingPointIndex),p.set(Lt,gt))}function Ue(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Mt=null,N={},v={},x=new WeakMap,y=[],E=null,A=!1,S=null,_=null,O=null,D=null,w=null,I=null,H=null,z=new Re(0,0,0),W=0,U=!1,C=null,V=null,lt=null,st=null,vt=null,yt.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:At,disable:Ut,bindFramebuffer:oe,drawBuffers:Kt,useProgram:He,setBlending:F,setMaterial:Ln,setFlipSided:ge,setCullFace:ie,setLineWidth:Wt,setPolygonOffset:De,setScissorTest:Vt,activeTexture:L,bindTexture:b,unbindTexture:tt,compressedTexImage2D:mt,compressedTexImage3D:Et,texImage2D:It,texImage3D:jt,updateUBOMapping:ue,uniformBlockBinding:ne,texStorage2D:$t,texStorage3D:bt,texSubImage2D:ct,texSubImage3D:Ot,compressedTexSubImage2D:Rt,compressedTexSubImage3D:Ht,scissor:Qt,viewport:Pt,reset:Ue}}function oR(s,t,i,r,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Fe,g=new WeakMap;let v;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return y?new OffscreenCanvas(L,b):Vu("canvas")}function A(L,b,tt){let mt=1;const Et=Vt(L);if((Et.width>tt||Et.height>tt)&&(mt=tt/Math.max(Et.width,Et.height)),mt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ct=Math.floor(mt*Et.width),Ot=Math.floor(mt*Et.height);v===void 0&&(v=E(ct,Ot));const Rt=b?E(ct,Ot):v;return Rt.width=ct,Rt.height=Ot,Rt.getContext("2d").drawImage(L,0,0,ct,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Et.width+"x"+Et.height+") to ("+ct+"x"+Ot+")."),Rt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Et.width+"x"+Et.height+")."),L;return L}function S(L){return L.generateMipmaps}function _(L){s.generateMipmap(L)}function O(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(L,b,tt,mt,Et=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ct=b;if(b===s.RED&&(tt===s.FLOAT&&(ct=s.R32F),tt===s.HALF_FLOAT&&(ct=s.R16F),tt===s.UNSIGNED_BYTE&&(ct=s.R8)),b===s.RED_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.R8UI),tt===s.UNSIGNED_SHORT&&(ct=s.R16UI),tt===s.UNSIGNED_INT&&(ct=s.R32UI),tt===s.BYTE&&(ct=s.R8I),tt===s.SHORT&&(ct=s.R16I),tt===s.INT&&(ct=s.R32I)),b===s.RG&&(tt===s.FLOAT&&(ct=s.RG32F),tt===s.HALF_FLOAT&&(ct=s.RG16F),tt===s.UNSIGNED_BYTE&&(ct=s.RG8)),b===s.RG_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RG8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RG16UI),tt===s.UNSIGNED_INT&&(ct=s.RG32UI),tt===s.BYTE&&(ct=s.RG8I),tt===s.SHORT&&(ct=s.RG16I),tt===s.INT&&(ct=s.RG32I)),b===s.RGB_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RGB8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RGB16UI),tt===s.UNSIGNED_INT&&(ct=s.RGB32UI),tt===s.BYTE&&(ct=s.RGB8I),tt===s.SHORT&&(ct=s.RGB16I),tt===s.INT&&(ct=s.RGB32I)),b===s.RGBA_INTEGER&&(tt===s.UNSIGNED_BYTE&&(ct=s.RGBA8UI),tt===s.UNSIGNED_SHORT&&(ct=s.RGBA16UI),tt===s.UNSIGNED_INT&&(ct=s.RGBA32UI),tt===s.BYTE&&(ct=s.RGBA8I),tt===s.SHORT&&(ct=s.RGBA16I),tt===s.INT&&(ct=s.RGBA32I)),b===s.RGB&&tt===s.UNSIGNED_INT_5_9_9_9_REV&&(ct=s.RGB9_E5),b===s.RGBA){const Ot=Et?Hu:be.getTransfer(mt);tt===s.FLOAT&&(ct=s.RGBA32F),tt===s.HALF_FLOAT&&(ct=s.RGBA16F),tt===s.UNSIGNED_BYTE&&(ct=Ot===Pe?s.SRGB8_ALPHA8:s.RGBA8),tt===s.UNSIGNED_SHORT_4_4_4_4&&(ct=s.RGBA4),tt===s.UNSIGNED_SHORT_5_5_5_1&&(ct=s.RGB5_A1)}return(ct===s.R16F||ct===s.R32F||ct===s.RG16F||ct===s.RG32F||ct===s.RGBA16F||ct===s.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function w(L,b){let tt;return L?b===null||b===br||b===Bo?tt=s.DEPTH24_STENCIL8:b===ia?tt=s.DEPTH32F_STENCIL8:b===Po&&(tt=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===br||b===Bo?tt=s.DEPTH_COMPONENT24:b===ia?tt=s.DEPTH_COMPONENT32F:b===Po&&(tt=s.DEPTH_COMPONENT16),tt}function I(L,b){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==gi&&L.minFilter!==Ai?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function H(L){const b=L.target;b.removeEventListener("dispose",H),W(b),b.isVideoTexture&&g.delete(b)}function z(L){const b=L.target;b.removeEventListener("dispose",z),C(b)}function W(L){const b=r.get(L);if(b.__webglInit===void 0)return;const tt=L.source,mt=x.get(tt);if(mt){const Et=mt[b.__cacheKey];Et.usedTimes--,Et.usedTimes===0&&U(L),Object.keys(mt).length===0&&x.delete(tt)}r.remove(L)}function U(L){const b=r.get(L);s.deleteTexture(b.__webglTexture);const tt=L.source,mt=x.get(tt);delete mt[b.__cacheKey],f.memory.textures--}function C(L){const b=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let mt=0;mt<6;mt++){if(Array.isArray(b.__webglFramebuffer[mt]))for(let Et=0;Et<b.__webglFramebuffer[mt].length;Et++)s.deleteFramebuffer(b.__webglFramebuffer[mt][Et]);else s.deleteFramebuffer(b.__webglFramebuffer[mt]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[mt])}else{if(Array.isArray(b.__webglFramebuffer))for(let mt=0;mt<b.__webglFramebuffer.length;mt++)s.deleteFramebuffer(b.__webglFramebuffer[mt]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let mt=0;mt<b.__webglColorRenderbuffer.length;mt++)b.__webglColorRenderbuffer[mt]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[mt]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const tt=L.textures;for(let mt=0,Et=tt.length;mt<Et;mt++){const ct=r.get(tt[mt]);ct.__webglTexture&&(s.deleteTexture(ct.__webglTexture),f.memory.textures--),r.remove(tt[mt])}r.remove(L)}let V=0;function lt(){V=0}function st(){const L=V;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),V+=1,L}function vt(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function ht(L,b){const tt=r.get(L);if(L.isVideoTexture&&Wt(L),L.isRenderTargetTexture===!1&&L.version>0&&tt.__version!==L.version){const mt=L.image;if(mt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(mt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,L,b);return}}i.bindTexture(s.TEXTURE_2D,tt.__webglTexture,s.TEXTURE0+b)}function B(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,b);return}i.bindTexture(s.TEXTURE_2D_ARRAY,tt.__webglTexture,s.TEXTURE0+b)}function Z(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){Q(tt,L,b);return}i.bindTexture(s.TEXTURE_3D,tt.__webglTexture,s.TEXTURE0+b)}function Y(L,b){const tt=r.get(L);if(L.version>0&&tt.__version!==L.version){pt(tt,L,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture,s.TEXTURE0+b)}const Mt={[Zh]:s.REPEAT,[Er]:s.CLAMP_TO_EDGE,[Kh]:s.MIRRORED_REPEAT},N={[gi]:s.NEAREST,[FM]:s.NEAREST_MIPMAP_NEAREST,[su]:s.NEAREST_MIPMAP_LINEAR,[Ai]:s.LINEAR,[rh]:s.LINEAR_MIPMAP_NEAREST,[Tr]:s.LINEAR_MIPMAP_LINEAR},$={[XM]:s.NEVER,[KM]:s.ALWAYS,[WM]:s.LESS,[i0]:s.LEQUAL,[qM]:s.EQUAL,[ZM]:s.GEQUAL,[YM]:s.GREATER,[jM]:s.NOTEQUAL};function xt(L,b){if(b.type===ia&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Ai||b.magFilter===rh||b.magFilter===su||b.magFilter===Tr||b.minFilter===Ai||b.minFilter===rh||b.minFilter===su||b.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Mt[b.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Mt[b.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Mt[b.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,N[b.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,N[b.minFilter]),b.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,$[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===gi||b.minFilter!==su&&b.minFilter!==Tr||b.type===ia&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const tt=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function yt(L,b){let tt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",H));const mt=b.source;let Et=x.get(mt);Et===void 0&&(Et={},x.set(mt,Et));const ct=vt(b);if(ct!==L.__cacheKey){Et[ct]===void 0&&(Et[ct]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,tt=!0),Et[ct].usedTimes++;const Ot=Et[L.__cacheKey];Ot!==void 0&&(Et[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&U(b)),L.__cacheKey=ct,L.__webglTexture=Et[ct].texture}return tt}function Q(L,b,tt){let mt=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(mt=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(mt=s.TEXTURE_3D);const Et=yt(L,b),ct=b.source;i.bindTexture(mt,L.__webglTexture,s.TEXTURE0+tt);const Ot=r.get(ct);if(ct.version!==Ot.__version||Et===!0){i.activeTexture(s.TEXTURE0+tt);const Rt=be.getPrimaries(be.workingColorSpace),Ht=b.colorSpace===ka?null:be.getPrimaries(b.colorSpace),$t=b.colorSpace===ka||Rt===Ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);let bt=A(b.image,!1,l.maxTextureSize);bt=De(b,bt);const It=u.convert(b.format,b.colorSpace),jt=u.convert(b.type);let Qt=D(b.internalFormat,It,jt,b.colorSpace,b.isVideoTexture);xt(mt,b);let Pt;const ue=b.mipmaps,ne=b.isVideoTexture!==!0,Ue=Ot.__version===void 0||Et===!0,k=ct.dataReady,Lt=I(b,bt);if(b.isDepthTexture)Qt=w(b.format===Io,b.type),Ue&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Qt,bt.width,bt.height):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,It,jt,null));else if(b.isDataTexture)if(ue.length>0){ne&&Ue&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,It,jt,Pt.data);b.generateMipmaps=!1}else ne?(Ue&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height),k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,bt.width,bt.height,It,jt,bt.data)):i.texImage2D(s.TEXTURE_2D,0,Qt,bt.width,bt.height,0,It,jt,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ne&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,ue[0].width,ue[0].height,bt.depth);for(let ot=0,gt=ue.length;ot<gt;ot++)if(Pt=ue[ot],b.format!==mi)if(It!==null)if(ne){if(k)if(b.layerUpdates.size>0){const Bt=av(Pt.width,Pt.height,b.format,b.type);for(const Nt of b.layerUpdates){const ae=Pt.data.subarray(Nt*Bt/Pt.data.BYTES_PER_ELEMENT,(Nt+1)*Bt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,Nt,Pt.width,Pt.height,1,It,ae)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,It,Pt.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?k&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ot,0,0,0,Pt.width,Pt.height,bt.depth,It,jt,Pt.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ot,Qt,Pt.width,Pt.height,bt.depth,0,It,jt,Pt.data)}else{ne&&Ue&&i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ue[0].width,ue[0].height);for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],b.format!==mi?It!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,Pt.data):i.compressedTexImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,Pt.width,Pt.height,It,jt,Pt.data):i.texImage2D(s.TEXTURE_2D,ot,Qt,Pt.width,Pt.height,0,It,jt,Pt.data)}else if(b.isDataArrayTexture)if(ne){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Lt,Qt,bt.width,bt.height,bt.depth),k)if(b.layerUpdates.size>0){const ot=av(bt.width,bt.height,b.format,b.type);for(const gt of b.layerUpdates){const Bt=bt.data.subarray(gt*ot/bt.data.BYTES_PER_ELEMENT,(gt+1)*ot/bt.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,gt,bt.width,bt.height,1,It,jt,Bt)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,It,jt,bt.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Qt,bt.width,bt.height,bt.depth,0,It,jt,bt.data);else if(b.isData3DTexture)ne?(Ue&&i.texStorage3D(s.TEXTURE_3D,Lt,Qt,bt.width,bt.height,bt.depth),k&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,It,jt,bt.data)):i.texImage3D(s.TEXTURE_3D,0,Qt,bt.width,bt.height,bt.depth,0,It,jt,bt.data);else if(b.isFramebufferTexture){if(Ue)if(ne)i.texStorage2D(s.TEXTURE_2D,Lt,Qt,bt.width,bt.height);else{let ot=bt.width,gt=bt.height;for(let Bt=0;Bt<Lt;Bt++)i.texImage2D(s.TEXTURE_2D,Bt,Qt,ot,gt,0,It,jt,null),ot>>=1,gt>>=1}}else if(ue.length>0){if(ne&&Ue){const ot=Vt(ue[0]);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}for(let ot=0,gt=ue.length;ot<gt;ot++)Pt=ue[ot],ne?k&&i.texSubImage2D(s.TEXTURE_2D,ot,0,0,It,jt,Pt):i.texImage2D(s.TEXTURE_2D,ot,Qt,It,jt,Pt);b.generateMipmaps=!1}else if(ne){if(Ue){const ot=Vt(bt);i.texStorage2D(s.TEXTURE_2D,Lt,Qt,ot.width,ot.height)}k&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,It,jt,bt)}else i.texImage2D(s.TEXTURE_2D,0,Qt,It,jt,bt);S(b)&&_(mt),Ot.__version=ct.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function pt(L,b,tt){if(b.image.length!==6)return;const mt=yt(L,b),Et=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+tt);const ct=r.get(Et);if(Et.version!==ct.__version||mt===!0){i.activeTexture(s.TEXTURE0+tt);const Ot=be.getPrimaries(be.workingColorSpace),Rt=b.colorSpace===ka?null:be.getPrimaries(b.colorSpace),Ht=b.colorSpace===ka||Ot===Rt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ht);const $t=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,It=[];for(let gt=0;gt<6;gt++)!$t&&!bt?It[gt]=A(b.image[gt],!0,l.maxCubemapSize):It[gt]=bt?b.image[gt].image:b.image[gt],It[gt]=De(b,It[gt]);const jt=It[0],Qt=u.convert(b.format,b.colorSpace),Pt=u.convert(b.type),ue=D(b.internalFormat,Qt,Pt,b.colorSpace),ne=b.isVideoTexture!==!0,Ue=ct.__version===void 0||mt===!0,k=Et.dataReady;let Lt=I(b,jt);xt(s.TEXTURE_CUBE_MAP,b);let ot;if($t){ne&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,jt.width,jt.height);for(let gt=0;gt<6;gt++){ot=It[gt].mipmaps;for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];b.format!==mi?Qt!==null?ne?k&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Qt,Nt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ue,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,0,0,Nt.width,Nt.height,Qt,Pt,Nt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt,ue,Nt.width,Nt.height,0,Qt,Pt,Nt.data)}}}else{if(ot=b.mipmaps,ne&&Ue){ot.length>0&&Lt++;const gt=Vt(It[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Lt,ue,gt.width,gt.height)}for(let gt=0;gt<6;gt++)if(bt){ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,It[gt].width,It[gt].height,Qt,Pt,It[gt].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,It[gt].width,It[gt].height,0,Qt,Pt,It[gt].data);for(let Bt=0;Bt<ot.length;Bt++){const ae=ot[Bt].image[gt].image;ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,ae.width,ae.height,Qt,Pt,ae.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ue,ae.width,ae.height,0,Qt,Pt,ae.data)}}else{ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,0,0,Qt,Pt,It[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,ue,Qt,Pt,It[gt]);for(let Bt=0;Bt<ot.length;Bt++){const Nt=ot[Bt];ne?k&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,0,0,Qt,Pt,Nt.image[gt]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Bt+1,ue,Qt,Pt,Nt.image[gt])}}}S(b)&&_(s.TEXTURE_CUBE_MAP),ct.__version=Et.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function St(L,b,tt,mt,Et,ct){const Ot=u.convert(tt.format,tt.colorSpace),Rt=u.convert(tt.type),Ht=D(tt.internalFormat,Ot,Rt,tt.colorSpace),$t=r.get(b),bt=r.get(tt);if(bt.__renderTarget=b,!$t.__hasExternalTextures){const It=Math.max(1,b.width>>ct),jt=Math.max(1,b.height>>ct);Et===s.TEXTURE_3D||Et===s.TEXTURE_2D_ARRAY?i.texImage3D(Et,ct,Ht,It,jt,b.depth,0,Ot,Rt,null):i.texImage2D(Et,ct,Ht,It,jt,0,Ot,Rt,null)}i.bindFramebuffer(s.FRAMEBUFFER,L),ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,0,ge(b)):(Et===s.TEXTURE_2D||Et>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Et<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,mt,Et,bt.__webglTexture,ct),i.bindFramebuffer(s.FRAMEBUFFER,null)}function At(L,b,tt){if(s.bindRenderbuffer(s.RENDERBUFFER,L),b.depthBuffer){const mt=b.depthTexture,Et=mt&&mt.isDepthTexture?mt.type:null,ct=w(b.stencilBuffer,Et),Ot=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=ge(b);ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Rt,ct,b.width,b.height):tt?s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,ct,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ct,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ot,s.RENDERBUFFER,L)}else{const mt=b.textures;for(let Et=0;Et<mt.length;Et++){const ct=mt[Et],Ot=u.convert(ct.format,ct.colorSpace),Rt=u.convert(ct.type),Ht=D(ct.internalFormat,Ot,Rt,ct.colorSpace),$t=ge(b);tt&&ie(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$t,Ht,b.width,b.height):ie(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$t,Ht,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ht,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ut(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const mt=r.get(b.depthTexture);mt.__renderTarget=b,(!mt.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ht(b.depthTexture,0);const Et=mt.__webglTexture,ct=ge(b);if(b.depthTexture.format===zo)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Et,0);else if(b.depthTexture.format===Io)ie(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0,ct):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Et,0);else throw new Error("Unknown depthTexture format")}function oe(L){const b=r.get(L),tt=L.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==L.depthTexture){const mt=L.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),mt){const Et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,mt.removeEventListener("dispose",Et)};mt.addEventListener("dispose",Et),b.__depthDisposeCallback=Et}b.__boundDepthTexture=mt}if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const mt=L.texture.mipmaps;mt&&mt.length>0?Ut(b.__webglFramebuffer[0],L):Ut(b.__webglFramebuffer,L)}else if(tt){b.__webglDepthbuffer=[];for(let mt=0;mt<6;mt++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[mt]),b.__webglDepthbuffer[mt]===void 0)b.__webglDepthbuffer[mt]=s.createRenderbuffer(),At(b.__webglDepthbuffer[mt],L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer[mt];s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ct)}}else{const mt=L.texture.mipmaps;if(mt&&mt.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),At(b.__webglDepthbuffer,L,!1);else{const Et=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ct),s.framebufferRenderbuffer(s.FRAMEBUFFER,Et,s.RENDERBUFFER,ct)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function Kt(L,b,tt){const mt=r.get(L);b!==void 0&&St(mt.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),tt!==void 0&&oe(L)}function He(L){const b=L.texture,tt=r.get(L),mt=r.get(b);L.addEventListener("dispose",z);const Et=L.textures,ct=L.isWebGLCubeRenderTarget===!0,Ot=Et.length>1;if(Ot||(mt.__webglTexture===void 0&&(mt.__webglTexture=s.createTexture()),mt.__version=b.version,f.memory.textures++),ct){tt.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer[Rt]=[];for(let Ht=0;Ht<b.mipmaps.length;Ht++)tt.__webglFramebuffer[Rt][Ht]=s.createFramebuffer()}else tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Rt=0;Rt<b.mipmaps.length;Rt++)tt.__webglFramebuffer[Rt]=s.createFramebuffer()}else tt.__webglFramebuffer=s.createFramebuffer();if(Ot)for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const $t=r.get(Et[Rt]);$t.__webglTexture===void 0&&($t.__webglTexture=s.createTexture(),f.memory.textures++)}if(L.samples>0&&ie(L)===!1){tt.__webglMultisampledFramebuffer=s.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Rt=0;Rt<Et.length;Rt++){const Ht=Et[Rt];tt.__webglColorRenderbuffer[Rt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt]);const $t=u.convert(Ht.format,Ht.colorSpace),bt=u.convert(Ht.type),It=D(Ht.internalFormat,$t,bt,Ht.colorSpace,L.isXRRenderTarget===!0),jt=ge(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,It,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Rt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[Rt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(tt.__webglDepthRenderbuffer=s.createRenderbuffer(),At(tt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ct){i.bindTexture(s.TEXTURE_CUBE_MAP,mt.__webglTexture),xt(s.TEXTURE_CUBE_MAP,b);for(let Rt=0;Rt<6;Rt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)St(tt.__webglFramebuffer[Rt][Ht],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,Ht);else St(tt.__webglFramebuffer[Rt],L,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let Rt=0,Ht=Et.length;Rt<Ht;Rt++){const $t=Et[Rt],bt=r.get($t);i.bindTexture(s.TEXTURE_2D,bt.__webglTexture),xt(s.TEXTURE_2D,$t),St(tt.__webglFramebuffer,L,$t,s.COLOR_ATTACHMENT0+Rt,s.TEXTURE_2D,0),S($t)&&_(s.TEXTURE_2D)}i.unbindTexture()}else{let Rt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Rt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Rt,mt.__webglTexture),xt(Rt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ht=0;Ht<b.mipmaps.length;Ht++)St(tt.__webglFramebuffer[Ht],L,b,s.COLOR_ATTACHMENT0,Rt,Ht);else St(tt.__webglFramebuffer,L,b,s.COLOR_ATTACHMENT0,Rt,0);S(b)&&_(Rt),i.unbindTexture()}L.depthBuffer&&oe(L)}function Be(L){const b=L.textures;for(let tt=0,mt=b.length;tt<mt;tt++){const Et=b[tt];if(S(Et)){const ct=O(L),Ot=r.get(Et).__webglTexture;i.bindTexture(ct,Ot),_(ct),i.unbindTexture()}}}const fe=[],F=[];function Ln(L){if(L.samples>0){if(ie(L)===!1){const b=L.textures,tt=L.width,mt=L.height;let Et=s.COLOR_BUFFER_BIT;const ct=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ot=r.get(L),Rt=b.length>1;if(Rt)for(let $t=0;$t<b.length;$t++)i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ht=L.texture.mipmaps;Ht&&Ht.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let $t=0;$t<b.length;$t++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Et|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Et|=s.STENCIL_BUFFER_BIT)),Rt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,bt,0)}s.blitFramebuffer(0,0,tt,mt,0,0,tt,mt,Et,s.NEAREST),p===!0&&(fe.length=0,F.length=0,fe.push(s.COLOR_ATTACHMENT0+$t),L.depthBuffer&&L.resolveDepthBuffer===!1&&(fe.push(ct),F.push(ct),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,fe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Rt)for(let $t=0;$t<b.length;$t++){i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.RENDERBUFFER,Ot.__webglColorRenderbuffer[$t]);const bt=r.get(b[$t]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ot.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$t,s.TEXTURE_2D,bt,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const b=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ge(L){return Math.min(l.maxSamples,L.samples)}function ie(L){const b=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(L){const b=f.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function De(L,b){const tt=L.colorSpace,mt=L.format,Et=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||tt!==As&&tt!==ka&&(be.getTransfer(tt)===Pe?(mt!==mi||Et!==la)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),b}function Vt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=st,this.resetTextureUnits=lt,this.setTexture2D=ht,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=Y,this.rebindTextures=Kt,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Ln,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=St,this.useMultisampledRTT=ie}function lR(s,t){function i(r,l=ka){let u;const f=be.getTransfer(l);if(r===la)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Qv)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zv)return s.BYTE;if(r===Kv)return s.SHORT;if(r===Po)return s.UNSIGNED_SHORT;if(r===Nd)return s.INT;if(r===br)return s.UNSIGNED_INT;if(r===ia)return s.FLOAT;if(r===ko)return s.HALF_FLOAT;if(r===Jv)return s.ALPHA;if(r===$v)return s.RGB;if(r===mi)return s.RGBA;if(r===zo)return s.DEPTH_COMPONENT;if(r===Io)return s.DEPTH_STENCIL;if(r===t0)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===e0)return s.RG;if(r===zd)return s.RG_INTEGER;if(r===Id)return s.RGBA_INTEGER;if(r===Lu||r===Nu||r===Ou||r===Pu)if(f===Pe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Lu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Lu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ou)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qh||r===Jh||r===$h||r===td)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Qh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Jh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===$h)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===td)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ed||r===nd||r===id)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ed||r===nd)return f===Pe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===id)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ad||r===rd||r===sd||r===od||r===ld||r===ud||r===cd||r===fd||r===hd||r===dd||r===pd||r===md||r===gd||r===_d)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===ad)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===sd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===od)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ld)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ud)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===cd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===fd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===hd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===md)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gd)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===_d)return f===Pe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Bu||r===vd||r===xd)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===Bu)return f===Pe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===n0||r===Sd||r===yd||r===Md)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===Bu)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Sd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===yd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Md)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Bo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const uR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cR=`
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

}`;class fR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Hn,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Ya({vertexShader:uR,fragmentShader:cR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ri(new Yu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hR extends ws{constructor(t,i){super();const r=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,y=null,E=null;const A=new fR,S=i.getContextAttributes();let _=null,O=null;const D=[],w=[],I=new Fe;let H=null;const z=new oi;z.viewport=new $e;const W=new oi;W.viewport=new $e;const U=[z,W],C=new NE;let V=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Rh,D[Q]=pt),pt.getTargetRaySpace()},this.getControllerGrip=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Rh,D[Q]=pt),pt.getGripSpace()},this.getHand=function(Q){let pt=D[Q];return pt===void 0&&(pt=new Rh,D[Q]=pt),pt.getHandSpace()};function st(Q){const pt=w.indexOf(Q.inputSource);if(pt===-1)return;const St=D[pt];St!==void 0&&(St.update(Q.inputSource,Q.frame,m||f),St.dispatchEvent({type:Q.type,data:Q.inputSource}))}function vt(){l.removeEventListener("select",st),l.removeEventListener("selectstart",st),l.removeEventListener("selectend",st),l.removeEventListener("squeeze",st),l.removeEventListener("squeezestart",st),l.removeEventListener("squeezeend",st),l.removeEventListener("end",vt),l.removeEventListener("inputsourceschange",ht);for(let Q=0;Q<D.length;Q++){const pt=w[Q];pt!==null&&(w[Q]=null,D[Q].disconnect(pt))}V=null,lt=null,A.reset(),t.setRenderTarget(_),y=null,x=null,v=null,l=null,O=null,yt.stop(),r.isPresenting=!1,t.setPixelRatio(H),t.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(Q){if(l=Q,l!==null){if(_=t.getRenderTarget(),l.addEventListener("select",st),l.addEventListener("selectstart",st),l.addEventListener("selectend",st),l.addEventListener("squeeze",st),l.addEventListener("squeezestart",st),l.addEventListener("squeezeend",st),l.addEventListener("end",vt),l.addEventListener("inputsourceschange",ht),S.xrCompatible!==!0&&await i.makeXRCompatible(),H=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,At=null,Ut=null;S.depth&&(Ut=S.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,St=S.stencil?Io:zo,At=S.stencil?Bo:br);const oe={colorFormat:i.RGBA8,depthFormat:Ut,scaleFactor:u};v=new XRWebGLBinding(l,i),x=v.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),O=new Ar(x.textureWidth,x.textureHeight,{format:mi,type:la,depthTexture:new g0(x.textureWidth,x.textureHeight,At,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,St),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),O=new Ar(y.framebufferWidth,y.framebufferHeight,{format:mi,type:la,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),yt.setContext(l),yt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function ht(Q){for(let pt=0;pt<Q.removed.length;pt++){const St=Q.removed[pt],At=w.indexOf(St);At>=0&&(w[At]=null,D[At].disconnect(St))}for(let pt=0;pt<Q.added.length;pt++){const St=Q.added[pt];let At=w.indexOf(St);if(At===-1){for(let oe=0;oe<D.length;oe++)if(oe>=w.length){w.push(St),At=oe;break}else if(w[oe]===null){w[oe]=St,At=oe;break}if(At===-1)break}const Ut=D[At];Ut&&Ut.connect(St)}}const B=new rt,Z=new rt;function Y(Q,pt,St){B.setFromMatrixPosition(pt.matrixWorld),Z.setFromMatrixPosition(St.matrixWorld);const At=B.distanceTo(Z),Ut=pt.projectionMatrix.elements,oe=St.projectionMatrix.elements,Kt=Ut[14]/(Ut[10]-1),He=Ut[14]/(Ut[10]+1),Be=(Ut[9]+1)/Ut[5],fe=(Ut[9]-1)/Ut[5],F=(Ut[8]-1)/Ut[0],Ln=(oe[8]+1)/oe[0],ge=Kt*F,ie=Kt*Ln,Wt=At/(-F+Ln),De=Wt*-F;if(pt.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(De),Q.translateZ(Wt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Ut[10]===-1)Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse);else{const Vt=Kt+Wt,L=He+Wt,b=ge-De,tt=ie+(At-De),mt=Be*He/L*Vt,Et=fe*He/L*Vt;Q.projectionMatrix.makePerspective(b,tt,mt,Et,Vt,L),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Mt(Q,pt){pt===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(pt.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(l===null)return;let pt=Q.near,St=Q.far;A.texture!==null&&(A.depthNear>0&&(pt=A.depthNear),A.depthFar>0&&(St=A.depthFar)),C.near=W.near=z.near=pt,C.far=W.far=z.far=St,(V!==C.near||lt!==C.far)&&(l.updateRenderState({depthNear:C.near,depthFar:C.far}),V=C.near,lt=C.far),z.layers.mask=Q.layers.mask|2,W.layers.mask=Q.layers.mask|4,C.layers.mask=z.layers.mask|W.layers.mask;const At=Q.parent,Ut=C.cameras;Mt(C,At);for(let oe=0;oe<Ut.length;oe++)Mt(Ut[oe],At);Ut.length===2?Y(C,z,W):C.projectionMatrix.copy(z.projectionMatrix),N(Q,C,At)};function N(Q,pt,St){St===null?Q.matrix.copy(pt.matrixWorld):(Q.matrix.copy(St.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(pt.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(pt.projectionMatrix),Q.projectionMatrixInverse.copy(pt.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ed*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(x===null&&y===null))return p},this.setFoveation=function(Q){p=Q,x!==null&&(x.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let $=null;function xt(Q,pt){if(g=pt.getViewerPose(m||f),E=pt,g!==null){const St=g.views;y!==null&&(t.setRenderTargetFramebuffer(O,y.framebuffer),t.setRenderTarget(O));let At=!1;St.length!==C.cameras.length&&(C.cameras.length=0,At=!0);for(let Kt=0;Kt<St.length;Kt++){const He=St[Kt];let Be=null;if(y!==null)Be=y.getViewport(He);else{const F=v.getViewSubImage(x,He);Be=F.viewport,Kt===0&&(t.setRenderTargetTextures(O,F.colorTexture,F.depthStencilTexture),t.setRenderTarget(O))}let fe=U[Kt];fe===void 0&&(fe=new oi,fe.layers.enable(Kt),fe.viewport=new $e,U[Kt]=fe),fe.matrix.fromArray(He.transform.matrix),fe.matrix.decompose(fe.position,fe.quaternion,fe.scale),fe.projectionMatrix.fromArray(He.projectionMatrix),fe.projectionMatrixInverse.copy(fe.projectionMatrix).invert(),fe.viewport.set(Be.x,Be.y,Be.width,Be.height),Kt===0&&(C.matrix.copy(fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),At===!0&&C.cameras.push(fe)}const Ut=l.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&v){const Kt=v.getDepthInformation(St[0]);Kt&&Kt.isValid&&Kt.texture&&A.init(t,Kt,l.renderState)}}for(let St=0;St<D.length;St++){const At=w[St],Ut=D[St];At!==null&&Ut!==void 0&&Ut.update(At,pt,m||f)}$&&$(Q,pt),pt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pt}),E=null}const yt=new _0;yt.setAnimationLoop(xt),this.setAnimationLoop=function(Q){$=Q},this.dispose=function(){}}}const vr=new ua,dR=new tn;function pR(s,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,f0(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,O,D,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(S,_):_.isMeshToonMaterial?(u(S,_),v(S,_)):_.isMeshPhongMaterial?(u(S,_),g(S,_)):_.isMeshStandardMaterial?(u(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,w)):_.isMeshMatcapMaterial?(u(S,_),E(S,_)):_.isMeshDepthMaterial?u(S,_):_.isMeshDistanceMaterial?(u(S,_),A(S,_)):_.isMeshNormalMaterial?u(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,O,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Fn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Fn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const O=t.get(_),D=O.envMap,w=O.envMapRotation;D&&(S.envMap.value=D,vr.copy(w),vr.x*=-1,vr.y*=-1,vr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),S.envMapRotation.value.setFromMatrix4(dR.makeRotationFromEuler(vr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,O,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*O,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,O){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Fn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=O.texture,S.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function A(S,_){const O=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(O.matrixWorld),S.nearDistance.value=O.shadow.camera.near,S.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function mR(s,t,i,r){let l={},u={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,D){const w=D.program;r.uniformBlockBinding(O,w)}function m(O,D){let w=l[O.id];w===void 0&&(E(O),w=g(O),l[O.id]=w,O.addEventListener("dispose",S));const I=D.program;r.updateUBOMapping(O,I);const H=t.render.frame;u[O.id]!==H&&(x(O),u[O.id]=H)}function g(O){const D=v();O.__bindingPointIndex=D;const w=s.createBuffer(),I=O.__size,H=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,I,H),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,w),w}function v(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(O){const D=l[O.id],w=O.uniforms,I=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let H=0,z=w.length;H<z;H++){const W=Array.isArray(w[H])?w[H]:[w[H]];for(let U=0,C=W.length;U<C;U++){const V=W[U];if(y(V,H,U,I)===!0){const lt=V.__offset,st=Array.isArray(V.value)?V.value:[V.value];let vt=0;for(let ht=0;ht<st.length;ht++){const B=st[ht],Z=A(B);typeof B=="number"||typeof B=="boolean"?(V.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,lt+vt,V.__data)):B.isMatrix3?(V.__data[0]=B.elements[0],V.__data[1]=B.elements[1],V.__data[2]=B.elements[2],V.__data[3]=0,V.__data[4]=B.elements[3],V.__data[5]=B.elements[4],V.__data[6]=B.elements[5],V.__data[7]=0,V.__data[8]=B.elements[6],V.__data[9]=B.elements[7],V.__data[10]=B.elements[8],V.__data[11]=0):(B.toArray(V.__data,vt),vt+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,lt,V.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(O,D,w,I){const H=O.value,z=D+"_"+w;if(I[z]===void 0)return typeof H=="number"||typeof H=="boolean"?I[z]=H:I[z]=H.clone(),!0;{const W=I[z];if(typeof H=="number"||typeof H=="boolean"){if(W!==H)return I[z]=H,!0}else if(W.equals(H)===!1)return W.copy(H),!0}return!1}function E(O){const D=O.uniforms;let w=0;const I=16;for(let z=0,W=D.length;z<W;z++){const U=Array.isArray(D[z])?D[z]:[D[z]];for(let C=0,V=U.length;C<V;C++){const lt=U[C],st=Array.isArray(lt.value)?lt.value:[lt.value];for(let vt=0,ht=st.length;vt<ht;vt++){const B=st[vt],Z=A(B),Y=w%I,Mt=Y%Z.boundary,N=Y+Mt;w+=Mt,N!==0&&I-N<Z.storage&&(w+=I-N),lt.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=w,w+=Z.storage}}}const H=w%I;return H>0&&(w+=I-H),O.__size=w,O.__cache={},this}function A(O){const D={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(D.boundary=4,D.storage=4):O.isVector2?(D.boundary=8,D.storage=8):O.isVector3||O.isColor?(D.boundary=16,D.storage=12):O.isVector4?(D.boundary=16,D.storage=16):O.isMatrix3?(D.boundary=48,D.storage=48):O.isMatrix4?(D.boundary=64,D.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),D}function S(O){const D=O.target;D.removeEventListener("dispose",S);const w=f.indexOf(D.__bindingPointIndex);f.splice(w,1),s.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},u={}}return{bind:p,update:m,dispose:_}}class gR{constructor(t={}){const{canvas:i=JM(),context:r=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=f;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,_=null;const O=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=si;let H=0,z=0,W=null,U=-1,C=null;const V=new $e,lt=new $e;let st=null;const vt=new Re(0);let ht=0,B=i.width,Z=i.height,Y=1,Mt=null,N=null;const $=new $e(0,0,B,Z),xt=new $e(0,0,B,Z);let yt=!1;const Q=new p0;let pt=!1,St=!1;const At=new tn,Ut=new tn,oe=new rt,Kt=new $e,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function fe(){return W===null?Y:1}let F=r;function Ln(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ld}`),i.addEventListener("webglcontextlost",gt,!1),i.addEventListener("webglcontextrestored",Bt,!1),i.addEventListener("webglcontextcreationerror",Nt,!1),F===null){const q="webgl2";if(F=Ln(q,R),F===null)throw Ln(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ge,ie,Wt,De,Vt,L,b,tt,mt,Et,ct,Ot,Rt,Ht,$t,bt,It,jt,Qt,Pt,ue,ne,Ue,k;function Lt(){ge=new AA(F),ge.init(),ne=new lR(F,ge),ie=new xA(F,ge,t,ne),Wt=new sR(F,ge),ie.reverseDepthBuffer&&x&&Wt.buffers.depth.setReversed(!0),De=new wA(F),Vt=new Y1,L=new oR(F,ge,Wt,Vt,ie,ne,De),b=new yA(w),tt=new bA(w),mt=new PE(F),Ue=new _A(F,mt),Et=new RA(F,mt,De,Ue),ct=new UA(F,Et,mt,De),Qt=new DA(F,ie,L),bt=new SA(Vt),Ot=new q1(w,b,tt,ge,ie,Ue,bt),Rt=new pR(w,Vt),Ht=new Z1,$t=new eR(ge),jt=new gA(w,b,tt,Wt,ct,y,p),It=new aR(w,ct,ie),k=new mR(F,De,ie,Wt),Pt=new vA(F,ge,De),ue=new CA(F,ge,De),De.programs=Ot.programs,w.capabilities=ie,w.extensions=ge,w.properties=Vt,w.renderLists=Ht,w.shadowMap=It,w.state=Wt,w.info=De}Lt();const ot=new hR(w,F);this.xr=ot,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=ge.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ge.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(R){R!==void 0&&(Y=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,q,it=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=q,i.width=Math.floor(R*Y),i.height=Math.floor(q*Y),it===!0&&(i.style.width=R+"px",i.style.height=q+"px"),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(B*Y,Z*Y).floor()},this.setDrawingBufferSize=function(R,q,it){B=R,Z=q,Y=it,i.width=Math.floor(R*it),i.height=Math.floor(q*it),this.setViewport(0,0,R,q)},this.getCurrentViewport=function(R){return R.copy(V)},this.getViewport=function(R){return R.copy($)},this.setViewport=function(R,q,it,at){R.isVector4?$.set(R.x,R.y,R.z,R.w):$.set(R,q,it,at),Wt.viewport(V.copy($).multiplyScalar(Y).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,q,it,at){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,q,it,at),Wt.scissor(lt.copy(xt).multiplyScalar(Y).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(R){Wt.setScissorTest(yt=R)},this.setOpaqueSort=function(R){Mt=R},this.setTransparentSort=function(R){N=R},this.getClearColor=function(R){return R.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,it=!0){let at=0;if(R){let j=!1;if(W!==null){const Tt=W.texture.format;j=Tt===Id||Tt===zd||Tt===Bd}if(j){const Tt=W.texture.type,Ct=Tt===la||Tt===br||Tt===Po||Tt===Bo||Tt===Od||Tt===Pd,wt=jt.getClearColor(),zt=jt.getClearAlpha(),te=wt.r,qt=wt.g,Xt=wt.b;Ct?(E[0]=te,E[1]=qt,E[2]=Xt,E[3]=zt,F.clearBufferuiv(F.COLOR,0,E)):(A[0]=te,A[1]=qt,A[2]=Xt,A[3]=zt,F.clearBufferiv(F.COLOR,0,A))}else at|=F.COLOR_BUFFER_BIT}q&&(at|=F.DEPTH_BUFFER_BIT),it&&(at|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",gt,!1),i.removeEventListener("webglcontextrestored",Bt,!1),i.removeEventListener("webglcontextcreationerror",Nt,!1),jt.dispose(),Ht.dispose(),$t.dispose(),Vt.dispose(),b.dispose(),tt.dispose(),ct.dispose(),Ue.dispose(),k.dispose(),Ot.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",on),ot.removeEventListener("sessionend",xn),Nn.stop()};function gt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Bt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const R=De.autoReset,q=It.enabled,it=It.autoUpdate,at=It.needsUpdate,j=It.type;Lt(),De.autoReset=R,It.enabled=q,It.autoUpdate=it,It.needsUpdate=at,It.type=j}function Nt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function ae(R){const q=R.target;q.removeEventListener("dispose",ae),Ge(q)}function Ge(R){en(R),Vt.remove(R)}function en(R){const q=Vt.get(R).programs;q!==void 0&&(q.forEach(function(it){Ot.releaseProgram(it)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,it,at,j,Tt){q===null&&(q=He);const Ct=j.isMesh&&j.matrixWorld.determinant()<0,wt=Ka(R,q,it,at,j);Wt.setMaterial(at,Ct);let zt=it.index,te=1;if(at.wireframe===!0){if(zt=Et.getWireframeAttribute(it),zt===void 0)return;te=2}const qt=it.drawRange,Xt=it.attributes.position;let de=qt.start*te,Ee=(qt.start+qt.count)*te;Tt!==null&&(de=Math.max(de,Tt.start*te),Ee=Math.min(Ee,(Tt.start+Tt.count)*te)),zt!==null?(de=Math.max(de,0),Ee=Math.min(Ee,zt.count)):Xt!=null&&(de=Math.max(de,0),Ee=Math.min(Ee,Xt.count));const We=Ee-de;if(We<0||We===1/0)return;Ue.setup(j,at,wt,it,zt);let _e,ve=Pt;if(zt!==null&&(_e=mt.get(zt),ve=ue,ve.setIndex(_e)),j.isMesh)at.wireframe===!0?(Wt.setLineWidth(at.wireframeLinewidth*fe()),ve.setMode(F.LINES)):ve.setMode(F.TRIANGLES);else if(j.isLine){let Yt=at.linewidth;Yt===void 0&&(Yt=1),Wt.setLineWidth(Yt*fe()),j.isLineSegments?ve.setMode(F.LINES):j.isLineLoop?ve.setMode(F.LINE_LOOP):ve.setMode(F.LINE_STRIP)}else j.isPoints?ve.setMode(F.POINTS):j.isSprite&&ve.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)zu("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ve.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ge.get("WEBGL_multi_draw"))ve.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Yt=j._multiDrawStarts,je=j._multiDrawCounts,ye=j._multiDrawCount,Tn=zt?mt.get(zt).bytesPerElement:1,pa=Vt.get(at).currentProgram.getUniforms();for(let Ve=0;Ve<ye;Ve++)pa.setValue(F,"_gl_DrawID",Ve),ve.render(Yt[Ve]/Tn,je[Ve])}else if(j.isInstancedMesh)ve.renderInstances(de,We,j.count);else if(it.isInstancedBufferGeometry){const Yt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,je=Math.min(it.instanceCount,Yt);ve.renderInstances(de,We,je)}else ve.render(de,We)};function Me(R,q,it){R.transparent===!0&&R.side===na&&R.forceSinglePass===!1?(R.side=Fn,R.needsUpdate=!0,ha(R,q,it),R.side=qa,R.needsUpdate=!0,ha(R,q,it),R.side=na):ha(R,q,it)}this.compile=function(R,q,it=null){it===null&&(it=R),_=$t.get(it),_.init(q),D.push(_),it.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),R!==it&&R.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(_.pushLight(j),j.castShadow&&_.pushShadow(j))}),_.setupLights();const at=new Set;return R.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Tt=j.material;if(Tt)if(Array.isArray(Tt))for(let Ct=0;Ct<Tt.length;Ct++){const wt=Tt[Ct];Me(wt,it,j),at.add(wt)}else Me(Tt,it,j),at.add(Tt)}),_=D.pop(),at},this.compileAsync=function(R,q,it=null){const at=this.compile(R,q,it);return new Promise(j=>{function Tt(){if(at.forEach(function(Ct){Vt.get(Ct).currentProgram.isReady()&&at.delete(Ct)}),at.size===0){j(R);return}setTimeout(Tt,10)}ge.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Vn=null;function dn(R){Vn&&Vn(R)}function on(){Nn.stop()}function xn(){Nn.start()}const Nn=new _0;Nn.setAnimationLoop(dn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(R){Vn=R,ot.setAnimationLoop(R),R===null?Nn.stop():Nn.start()},ot.addEventListener("sessionstart",on),ot.addEventListener("sessionend",xn),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,q,W),_=$t.get(R,D.length),_.init(q),D.push(_),Ut.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Q.setFromProjectionMatrix(Ut),St=this.localClippingEnabled,pt=bt.init(this.clippingPlanes,St),S=Ht.get(R,O.length),S.init(),O.push(S),ot.enabled===!0&&ot.isPresenting===!0){const Tt=w.xr.getDepthSensingMesh();Tt!==null&&ja(Tt,q,-1/0,w.sortObjects)}ja(R,q,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Mt,N),Be=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Be&&jt.addToRenderList(S,R),this.info.render.frame++,pt===!0&&bt.beginShadows();const it=_.state.shadowsArray;It.render(it,R,q),pt===!0&&bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=S.opaque,j=S.transmissive;if(_.setupLights(),q.isArrayCamera){const Tt=q.cameras;if(j.length>0)for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Ko(at,j,R,zt)}Be&&jt.render(R);for(let Ct=0,wt=Tt.length;Ct<wt;Ct++){const zt=Tt[Ct];Zo(S,R,zt,zt.viewport)}}else j.length>0&&Ko(at,j,R,q),Be&&jt.render(R),Zo(S,R,q);W!==null&&z===0&&(L.updateMultisampleRenderTarget(W),L.updateRenderTargetMipmap(W)),R.isScene===!0&&R.onAfterRender(w,R,q),Ue.resetDefaultState(),U=-1,C=null,D.pop(),D.length>0?(_=D[D.length-1],pt===!0&&bt.setGlobalState(w.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?S=O[O.length-1]:S=null};function ja(R,q,it,at){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)it=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Q.intersectsSprite(R)){at&&Kt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ut);const Ct=ct.update(R),wt=R.material;wt.visible&&S.push(R,Ct,wt,it,Kt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Q.intersectsObject(R))){const Ct=ct.update(R),wt=R.material;if(at&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Kt.copy(R.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Kt.copy(Ct.boundingSphere.center)),Kt.applyMatrix4(R.matrixWorld).applyMatrix4(Ut)),Array.isArray(wt)){const zt=Ct.groups;for(let te=0,qt=zt.length;te<qt;te++){const Xt=zt[te],de=wt[Xt.materialIndex];de&&de.visible&&S.push(R,Ct,de,it,Kt.z,Xt)}}else wt.visible&&S.push(R,Ct,wt,it,Kt.z,null)}}const Tt=R.children;for(let Ct=0,wt=Tt.length;Ct<wt;Ct++)ja(Tt[Ct],q,it,at)}function Zo(R,q,it,at){const j=R.opaque,Tt=R.transmissive,Ct=R.transparent;_.setupLightsView(it),pt===!0&&bt.setGlobalState(w.clippingPlanes,it),at&&Wt.viewport(V.copy(at)),j.length>0&&Za(j,q,it),Tt.length>0&&Za(Tt,q,it),Ct.length>0&&Za(Ct,q,it),Wt.buffers.depth.setTest(!0),Wt.buffers.depth.setMask(!0),Wt.buffers.color.setMask(!0),Wt.setPolygonOffset(!1)}function Ko(R,q,it,at){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[at.id]===void 0&&(_.state.transmissionRenderTarget[at.id]=new Ar(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float")?ko:la,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace}));const Tt=_.state.transmissionRenderTarget[at.id],Ct=at.viewport||V;Tt.setSize(Ct.z*w.transmissionResolutionScale,Ct.w*w.transmissionResolutionScale);const wt=w.getRenderTarget();w.setRenderTarget(Tt),w.getClearColor(vt),ht=w.getClearAlpha(),ht<1&&w.setClearColor(16777215,.5),w.clear(),Be&&jt.render(it);const zt=w.toneMapping;w.toneMapping=Wa;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),_.setupLightsView(at),pt===!0&&bt.setGlobalState(w.clippingPlanes,at),Za(R,it,at),L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Xt=0,de=q.length;Xt<de;Xt++){const Ee=q[Xt],We=Ee.object,_e=Ee.geometry,ve=Ee.material,Yt=Ee.group;if(ve.side===na&&We.layers.test(at.layers)){const je=ve.side;ve.side=Fn,ve.needsUpdate=!0,fa(We,it,at,_e,ve,Yt),ve.side=je,ve.needsUpdate=!0,qt=!0}}qt===!0&&(L.updateMultisampleRenderTarget(Tt),L.updateRenderTargetMipmap(Tt))}w.setRenderTarget(wt),w.setClearColor(vt,ht),te!==void 0&&(at.viewport=te),w.toneMapping=zt}function Za(R,q,it){const at=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Tt=R.length;j<Tt;j++){const Ct=R[j],wt=Ct.object,zt=Ct.geometry,te=Ct.group;let qt=Ct.material;qt.allowOverride===!0&&at!==null&&(qt=at),wt.layers.test(it.layers)&&fa(wt,q,it,zt,qt,te)}}function fa(R,q,it,at,j,Tt){R.onBeforeRender(w,q,it,at,j,Tt),R.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),j.onBeforeRender(w,q,it,at,R,Tt),j.transparent===!0&&j.side===na&&j.forceSinglePass===!1?(j.side=Fn,j.needsUpdate=!0,w.renderBufferDirect(it,q,at,j,R,Tt),j.side=qa,j.needsUpdate=!0,w.renderBufferDirect(it,q,at,j,R,Tt),j.side=na):w.renderBufferDirect(it,q,at,j,R,Tt),R.onAfterRender(w,q,it,at,j,Tt)}function ha(R,q,it){q.isScene!==!0&&(q=He);const at=Vt.get(R),j=_.state.lights,Tt=_.state.shadowsArray,Ct=j.state.version,wt=Ot.getParameters(R,j.state,Tt,q,it),zt=Ot.getProgramCacheKey(wt);let te=at.programs;at.environment=R.isMeshStandardMaterial?q.environment:null,at.fog=q.fog,at.envMap=(R.isMeshStandardMaterial?tt:b).get(R.envMap||at.environment),at.envMapRotation=at.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,te===void 0&&(R.addEventListener("dispose",ae),te=new Map,at.programs=te);let qt=te.get(zt);if(qt!==void 0){if(at.currentProgram===qt&&at.lightsStateVersion===Ct)return Li(R,wt),qt}else wt.uniforms=Ot.getUniforms(R),R.onBeforeCompile(wt,w),qt=Ot.acquireProgram(wt,zt),te.set(zt,qt),at.uniforms=wt.uniforms;const Xt=at.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Xt.clippingPlanes=bt.uniform),Li(R,wt),at.needsLights=nn(R),at.lightsStateVersion=Ct,at.needsLights&&(Xt.ambientLightColor.value=j.state.ambient,Xt.lightProbe.value=j.state.probe,Xt.directionalLights.value=j.state.directional,Xt.directionalLightShadows.value=j.state.directionalShadow,Xt.spotLights.value=j.state.spot,Xt.spotLightShadows.value=j.state.spotShadow,Xt.rectAreaLights.value=j.state.rectArea,Xt.ltc_1.value=j.state.rectAreaLTC1,Xt.ltc_2.value=j.state.rectAreaLTC2,Xt.pointLights.value=j.state.point,Xt.pointLightShadows.value=j.state.pointShadow,Xt.hemisphereLights.value=j.state.hemi,Xt.directionalShadowMap.value=j.state.directionalShadowMap,Xt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Xt.spotShadowMap.value=j.state.spotShadowMap,Xt.spotLightMatrix.value=j.state.spotLightMatrix,Xt.spotLightMap.value=j.state.spotLightMap,Xt.pointShadowMap.value=j.state.pointShadowMap,Xt.pointShadowMatrix.value=j.state.pointShadowMatrix),at.currentProgram=qt,at.uniformsList=null,qt}function Ui(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=Iu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Li(R,q){const it=Vt.get(R);it.outputColorSpace=q.outputColorSpace,it.batching=q.batching,it.batchingColor=q.batchingColor,it.instancing=q.instancing,it.instancingColor=q.instancingColor,it.instancingMorph=q.instancingMorph,it.skinning=q.skinning,it.morphTargets=q.morphTargets,it.morphNormals=q.morphNormals,it.morphColors=q.morphColors,it.morphTargetsCount=q.morphTargetsCount,it.numClippingPlanes=q.numClippingPlanes,it.numIntersection=q.numClipIntersection,it.vertexAlphas=q.vertexAlphas,it.vertexTangents=q.vertexTangents,it.toneMapping=q.toneMapping}function Ka(R,q,it,at,j){q.isScene!==!0&&(q=He),L.resetTextureUnits();const Tt=q.fog,Ct=at.isMeshStandardMaterial?q.environment:null,wt=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:As,zt=(at.isMeshStandardMaterial?tt:b).get(at.envMap||Ct),te=at.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,qt=!!it.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Xt=!!it.morphAttributes.position,de=!!it.morphAttributes.normal,Ee=!!it.morphAttributes.color;let We=Wa;at.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(We=w.toneMapping);const _e=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,ve=_e!==void 0?_e.length:0,Yt=Vt.get(at),je=_.state.lights;if(pt===!0&&(St===!0||R!==C)){const pn=R===C&&at.id===U;bt.setState(at,R,pn)}let ye=!1;at.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==je.state.version||Yt.outputColorSpace!==wt||j.isBatchedMesh&&Yt.batching===!1||!j.isBatchedMesh&&Yt.batching===!0||j.isBatchedMesh&&Yt.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Yt.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Yt.instancing===!1||!j.isInstancedMesh&&Yt.instancing===!0||j.isSkinnedMesh&&Yt.skinning===!1||!j.isSkinnedMesh&&Yt.skinning===!0||j.isInstancedMesh&&Yt.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Yt.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Yt.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Yt.instancingMorph===!1&&j.morphTexture!==null||Yt.envMap!==zt||at.fog===!0&&Yt.fog!==Tt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==bt.numPlanes||Yt.numIntersection!==bt.numIntersection)||Yt.vertexAlphas!==te||Yt.vertexTangents!==qt||Yt.morphTargets!==Xt||Yt.morphNormals!==de||Yt.morphColors!==Ee||Yt.toneMapping!==We||Yt.morphTargetsCount!==ve)&&(ye=!0):(ye=!0,Yt.__version=at.version);let Tn=Yt.currentProgram;ye===!0&&(Tn=ha(at,q,j));let pa=!1,Ve=!1,Oi=!1;const ze=Tn.getUniforms(),bn=Yt.uniforms;if(Wt.useProgram(Tn.program)&&(pa=!0,Ve=!0,Oi=!0),at.id!==U&&(U=at.id,Ve=!0),pa||C!==R){Wt.buffers.depth.getReversed()?(At.copy(R.projectionMatrix),tE(At),eE(At),ze.setValue(F,"projectionMatrix",At)):ze.setValue(F,"projectionMatrix",R.projectionMatrix),ze.setValue(F,"viewMatrix",R.matrixWorldInverse);const Sn=ze.map.cameraPosition;Sn!==void 0&&Sn.setValue(F,oe.setFromMatrixPosition(R.matrixWorld)),ie.logarithmicDepthBuffer&&ze.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ze.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,Ve=!0,Oi=!0)}if(j.isSkinnedMesh){ze.setOptional(F,j,"bindMatrix"),ze.setOptional(F,j,"bindMatrixInverse");const pn=j.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),ze.setValue(F,"boneTexture",pn.boneTexture,L))}j.isBatchedMesh&&(ze.setOptional(F,j,"batchingTexture"),ze.setValue(F,"batchingTexture",j._matricesTexture,L),ze.setOptional(F,j,"batchingIdTexture"),ze.setValue(F,"batchingIdTexture",j._indirectTexture,L),ze.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&ze.setValue(F,"batchingColorTexture",j._colorsTexture,L));const ln=it.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Qt.update(j,it,Tn),(Ve||Yt.receiveShadow!==j.receiveShadow)&&(Yt.receiveShadow=j.receiveShadow,ze.setValue(F,"receiveShadow",j.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(bn.envMap.value=zt,bn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&q.environment!==null&&(bn.envMapIntensity.value=q.environmentIntensity),Ve&&(ze.setValue(F,"toneMappingExposure",w.toneMappingExposure),Yt.needsLights&&da(bn,Oi),Tt&&at.fog===!0&&Rt.refreshFogUniforms(bn,Tt),Rt.refreshMaterialUniforms(bn,at,Y,Z,_.state.transmissionRenderTarget[R.id]),Iu.upload(F,Ui(Yt),bn,L)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Iu.upload(F,Ui(Yt),bn,L),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ze.setValue(F,"center",j.center),ze.setValue(F,"modelViewMatrix",j.modelViewMatrix),ze.setValue(F,"normalMatrix",j.normalMatrix),ze.setValue(F,"modelMatrix",j.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const pn=at.uniformsGroups;for(let Sn=0,xi=pn.length;Sn<xi;Sn++){const Pi=pn[Sn];k.update(Pi,Tn),k.bind(Pi,Tn)}}return Tn}function da(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function nn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(R,q,it){const at=Vt.get(R);at.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),Vt.get(R.texture).__webglTexture=q,Vt.get(R.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:it,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const it=Vt.get(R);it.__webglFramebuffer=q,it.__useDefaultFramebuffer=q===void 0};const Qo=F.createFramebuffer();this.setRenderTarget=function(R,q=0,it=0){W=R,H=q,z=it;let at=!0,j=null,Tt=!1,Ct=!1;if(R){const zt=Vt.get(R);if(zt.__useDefaultFramebuffer!==void 0)Wt.bindFramebuffer(F.FRAMEBUFFER,null),at=!1;else if(zt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(zt.__hasExternalTextures)L.rebindTextures(R,Vt.get(R.texture).__webglTexture,Vt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Xt=R.depthTexture;if(zt.__boundDepthTexture!==Xt){if(Xt!==null&&Vt.has(Xt)&&(R.width!==Xt.image.width||R.height!==Xt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const te=R.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Ct=!0);const qt=Vt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(qt[q])?j=qt[q][it]:j=qt[q],Tt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?j=Vt.get(R).__webglMultisampledFramebuffer:Array.isArray(qt)?j=qt[it]:j=qt,V.copy(R.viewport),lt.copy(R.scissor),st=R.scissorTest}else V.copy($).multiplyScalar(Y).floor(),lt.copy(xt).multiplyScalar(Y).floor(),st=yt;if(it!==0&&(j=Qo),Wt.bindFramebuffer(F.FRAMEBUFFER,j)&&at&&Wt.drawBuffers(R,j),Wt.viewport(V),Wt.scissor(lt),Wt.setScissorTest(st),Tt){const zt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+q,zt.__webglTexture,it)}else if(Ct){const zt=Vt.get(R.texture),te=q;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,zt.__webglTexture,it,te)}else if(R!==null&&it!==0){const zt=Vt.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,it)}U=-1},this.readRenderTargetPixels=function(R,q,it,at,j,Tt,Ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt){Wt.bindFramebuffer(F.FRAMEBUFFER,wt);try{const zt=R.texture,te=zt.format,qt=zt.type;if(!ie.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ie.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-at&&it>=0&&it<=R.height-j&&F.readPixels(q,it,at,j,ne.convert(te),ne.convert(qt),Tt)}finally{const zt=W!==null?Vt.get(W).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,q,it,at,j,Tt,Ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Vt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ct!==void 0&&(wt=wt[Ct]),wt)if(q>=0&&q<=R.width-at&&it>=0&&it<=R.height-j){Wt.bindFramebuffer(F.FRAMEBUFFER,wt);const zt=R.texture,te=zt.format,qt=zt.type;if(!ie.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ie.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(q,it,at,j,ne.convert(te),ne.convert(qt),0);const de=W!==null?Vt.get(W).__webglFramebuffer:null;Wt.bindFramebuffer(F.FRAMEBUFFER,de);const Ee=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $M(F,Ee,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Xt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.deleteBuffer(Xt),F.deleteSync(Ee),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,it=0){const at=Math.pow(2,-it),j=Math.floor(R.image.width*at),Tt=Math.floor(R.image.height*at),Ct=q!==null?q.x:0,wt=q!==null?q.y:0;L.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,it,0,0,Ct,wt,j,Tt),Wt.unbindTexture()};const Jo=F.createFramebuffer(),Ni=F.createFramebuffer();this.copyTextureToTexture=function(R,q,it=null,at=null,j=0,Tt=null){Tt===null&&(j!==0?(zu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=j,j=0):Tt=0);let Ct,wt,zt,te,qt,Xt,de,Ee,We;const _e=R.isCompressedTexture?R.mipmaps[Tt]:R.image;if(it!==null)Ct=it.max.x-it.min.x,wt=it.max.y-it.min.y,zt=it.isBox3?it.max.z-it.min.z:1,te=it.min.x,qt=it.min.y,Xt=it.isBox3?it.min.z:0;else{const ln=Math.pow(2,-j);Ct=Math.floor(_e.width*ln),wt=Math.floor(_e.height*ln),R.isDataArrayTexture?zt=_e.depth:R.isData3DTexture?zt=Math.floor(_e.depth*ln):zt=1,te=0,qt=0,Xt=0}at!==null?(de=at.x,Ee=at.y,We=at.z):(de=0,Ee=0,We=0);const ve=ne.convert(q.format),Yt=ne.convert(q.type);let je;q.isData3DTexture?(L.setTexture3D(q,0),je=F.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),je=F.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const ye=F.getParameter(F.UNPACK_ROW_LENGTH),Tn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),pa=F.getParameter(F.UNPACK_SKIP_PIXELS),Ve=F.getParameter(F.UNPACK_SKIP_ROWS),Oi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,_e.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_e.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,te),F.pixelStorei(F.UNPACK_SKIP_ROWS,qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xt);const ze=R.isDataArrayTexture||R.isData3DTexture,bn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const ln=Vt.get(R),pn=Vt.get(q),Sn=Vt.get(ln.__renderTarget),xi=Vt.get(pn.__renderTarget);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<zt;Pi++)ze&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(R).__webglTexture,j,Xt+Pi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Vt.get(q).__webglTexture,Tt,We+Pi)),F.blitFramebuffer(te,qt,Ct,wt,de,Ee,Ct,wt,F.DEPTH_BUFFER_BIT,F.NEAREST);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||R.isRenderTargetTexture||Vt.has(R)){const ln=Vt.get(R),pn=Vt.get(q);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,Jo),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ni);for(let Sn=0;Sn<zt;Sn++)ze?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,ln.__webglTexture,j,Xt+Sn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ln.__webglTexture,j),bn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,pn.__webglTexture,Tt,We+Sn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pn.__webglTexture,Tt),j!==0?F.blitFramebuffer(te,qt,Ct,wt,de,Ee,Ct,wt,F.COLOR_BUFFER_BIT,F.NEAREST):bn?F.copyTexSubImage3D(je,Tt,de,Ee,We+Sn,te,qt,Ct,wt):F.copyTexSubImage2D(je,Tt,de,Ee,te,qt,Ct,wt);Wt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Wt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else bn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,Yt,_e.data):q.isCompressedArrayTexture?F.compressedTexSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,_e.data):F.texSubImage3D(je,Tt,de,Ee,We,Ct,wt,zt,ve,Yt,_e):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,de,Ee,Ct,wt,ve,Yt,_e.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,de,Ee,_e.width,_e.height,ve,_e.data):F.texSubImage2D(F.TEXTURE_2D,Tt,de,Ee,Ct,wt,ve,Yt,_e);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Tn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,pa),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),Tt===0&&q.generateMipmaps&&F.generateMipmap(je),Wt.unbindTexture()},this.copyTextureToTexture3D=function(R,q,it=null,at=null,j=0){return zu('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,q,it,at,j)},this.initRenderTarget=function(R){Vt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Wt.unbindTexture()},this.resetState=function(){H=0,z=0,W=null,Wt.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return aa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}function _R(){const s=dt.useRef(null);return dt.useEffect(()=>{const t=new AE;t.background=new Re(0);const i=new oi(75,window.innerWidth/window.innerHeight,.1,1e3);i.position.z=5;const r=new gR({antialias:!0});r.setSize(s.current.clientWidth,s.current.clientHeight),s.current.appendChild(r.domElement);const l=new Gd(.5,32,32),u=new Hd({color:1733608,transparent:!0,opacity:.8}),f=new Ri(l,u);t.add(f);const d=new Di,p=new m0({color:8956671,size:.05}),m=2e3,g=new Float32Array(m*3);for(let E=0;E<m;E++){const A=1+Math.random()*1.5,S=Math.random()*Math.PI*2,_=Math.random()*Math.PI,O=A*Math.sin(_)*Math.cos(S),D=A*Math.sin(_)*Math.sin(S),w=A*Math.cos(_);g[E*3]=O,g[E*3+1]=D,g[E*3+2]=w}d.setAttribute("position",new _i(g,3));const v=new wE(d,p);t.add(v);const x=()=>{i.aspect=s.current.clientWidth/s.current.clientHeight,i.updateProjectionMatrix(),r.setSize(s.current.clientWidth,s.current.clientHeight)};window.addEventListener("resize",x);const y=()=>{requestAnimationFrame(y),v.rotation.x+=.002,v.rotation.y+=.001,r.render(t,i)};return y(),()=>{window.removeEventListener("resize",x),s.current.removeChild(r.domElement)}},[]),Gt.jsxs("div",{className:"min-h-screen bg-slate-900 text-white flex flex-col",children:[Gt.jsxs("header",{className:"bg-slate-800 p-4 flex items-center",children:[Gt.jsx(Vo,{to:"/",className:"text-white hover:text-blue-300 transition mr-4",children:"← Back to Home"}),Gt.jsx("h1",{className:"text-2xl font-bold",children:"Quantum Playground"})]}),Gt.jsxs("div",{className:"flex flex-1",children:[Gt.jsx("div",{ref:s,className:"w-3/4 bg-black"}),Gt.jsxs("div",{className:"w-1/4 bg-slate-800 p-4 overflow-y-auto",children:[Gt.jsx("h2",{className:"text-xl font-bold mb-4",children:"Controls"}),Gt.jsxs("div",{className:"mb-4",children:[Gt.jsx("label",{className:"block mb-2",children:"Energy Level"}),Gt.jsx("input",{type:"range",min:"1",max:"5",defaultValue:"1",className:"w-full"})]}),Gt.jsxs("div",{className:"mb-4",children:[Gt.jsx("label",{className:"block mb-2",children:"Photon Energy (eV)"}),Gt.jsx("input",{type:"range",min:"0.5",max:"20",step:"0.1",defaultValue:"10.2",className:"w-full"})]}),Gt.jsx("button",{className:"w-full bg-blue-600 py-2 rounded font-medium",children:"Emit Photon"}),Gt.jsxs("div",{className:"mt-6",children:[Gt.jsx("h2",{className:"text-xl font-bold mb-2",children:"Information"}),Gt.jsx("p",{className:"text-sm text-gray-300",children:"This is a placeholder. Replace this section with your simulation's controls and information. You'll integrate your electron cloud and photon interaction simulation here."})]})]})]})]})}function vR(){return Gt.jsx(Qy,{children:Gt.jsxs(Ry,{children:[Gt.jsx(Bh,{path:"/",element:Gt.jsx(lM,{})}),Gt.jsx(Bh,{path:"/quantum-playground",element:Gt.jsx(_R,{})})]})})}PS.createRoot(document.getElementById("root")).render(Gt.jsx(RS.StrictMode,{children:Gt.jsx(vR,{})}));
