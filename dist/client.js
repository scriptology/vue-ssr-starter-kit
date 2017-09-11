webpackJsonp([6,8],[function(t,e,n){"use strict";function r(t){return"[object Array]"===E.call(t)}function o(t){return"[object ArrayBuffer]"===E.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function u(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function s(t){return"number"==typeof t}function c(t){return void 0===t}function f(t){return null!==t&&"object"==typeof t}function p(t){return"[object Date]"===E.call(t)}function l(t){return"[object File]"===E.call(t)}function d(t){return"[object Blob]"===E.call(t)}function h(t){return"[object Function]"===E.call(t)}function m(t){return f(t)&&h(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function y(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function g(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function w(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||r(t)||(t=[t]),r(t))for(var n=0,o=t.length;n<o;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function b(){function t(t,n){"object"==typeof e[n]&&"object"==typeof t?e[n]=b(e[n],t):e[n]=t}for(var e={},n=0,r=arguments.length;n<r;n++)w(arguments[n],t);return e}function T(t,e,n){return w(e,function(e,r){t[r]=n&&"function"==typeof e?x(e,n):e}),t}var x=n(12),A=n(38),E=Object.prototype.toString;t.exports={isArray:r,isArrayBuffer:o,isBuffer:A,isFormData:i,isArrayBufferView:u,isString:a,isNumber:s,isObject:f,isUndefined:c,isDate:p,isFile:l,isBlob:d,isFunction:h,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:g,forEach:w,merge:b,extend:T,trim:y}},,function(t,e,n){"use strict";(function(e){function r(t,e){!i.isUndefined(t)&&i.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function o(){var t;return"undefined"!=typeof XMLHttpRequest?t=n(8):void 0!==e&&(t=n(8)),t}var i=n(0),u=n(30),a={"Content-Type":"application/x-www-form-urlencoded"},s={adapter:o(),transformRequest:[function(t,e){return u(e,"Content-Type"),i.isFormData(t)||i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t)?t:i.isArrayBufferView(t)?t.buffer:i.isURLSearchParams(t)?(r(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):i.isObject(t)?(r(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};s.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(t){s.headers[t]={}}),i.forEach(["post","put","patch"],function(t){s.headers[t]=i.merge(a)}),t.exports=s}).call(e,n(39))},function(t,e,n){"use strict";var r=n(1),o=n(5),i=n(34);r.a.use(o.a);var u=[{path:"/",component:i("Index")},{path:"/foo/:id",name:"foo",component:i("Foo")},{path:"/show-error-page",component:i("ShowErrorPage")},{path:"/posts",component:i("Posts")},{path:"/posts/:code",name:"post",component:i("Post")}];u.push({path:"*",component:i("HTTP404")}),e.a=new o.a({mode:"history",routes:u})},function(t,e,n){"use strict";var r=n(1),o=n(6),i=n(35);r.a.use(o.a),e.a=new o.a.Store({state:{count:0,items:[],tags:[],item:{}},mutations:{increment:function(t){t.count++},setItems:function(t,e){var n=e.data;t.items=n},setTags:function(t,e){var n=e.data;t.tags=n},setItem:function(t,e){var n=e.data;t.item=n,t.title=n.name,t.description=n.description}},actions:{fetchItems:function(t){var e=t.commit;return i.a.get("article?page=1&limit=30").then(function(t){e("setItems",t)})},fetchTags:function(t){var e=t.commit;return i.a.get("tag?page=1&limit=10&is_root=1").then(function(t){e("setTags",t)})},fetchItem:function(t,e){var n=t.commit;return i.a.get("article/code/"+e).then(function(t){n("setItem",t)})},asyncIncrement:function(t){var e=t.commit;return new Promise(function(t){setTimeout(function(){e("increment"),t()})})}}})},,,,function(t,e,n){"use strict";var r=n(0),o=n(22),i=n(25),u=n(31),a=n(29),s=n(11),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(24);t.exports=function(t){return new Promise(function(e,f){var p=t.data,l=t.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in d||a(t.url)||(d=new window.XDomainRequest,h="onload",m=!0,d.onprogress=function(){},d.ontimeout=function(){}),t.auth){var v=t.auth.username||"",y=t.auth.password||"";l.Authorization="Basic "+c(v+":"+y)}if(d.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),d.timeout=t.timeout,d[h]=function(){if(d&&(4===d.readyState||m)&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r=t.responseType&&"text"!==t.responseType?d.response:d.responseText,i={data:r,status:1223===d.status?204:d.status,statusText:1223===d.status?"No Content":d.statusText,headers:n,config:t,request:d};o(e,f,i),d=null}},d.onerror=function(){f(s("Network Error",t,null,d)),d=null},d.ontimeout=function(){f(s("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var g=n(27),w=(t.withCredentials||a(t.url))&&t.xsrfCookieName?g.read(t.xsrfCookieName):void 0;w&&(l[t.xsrfHeaderName]=w)}if("setRequestHeader"in d&&r.forEach(l,function(t,e){void 0===p&&"content-type"===e.toLowerCase()?delete l[e]:d.setRequestHeader(e,t)}),t.withCredentials&&(d.withCredentials=!0),t.responseType)try{d.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&d.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){d&&(d.abort(),f(t),d=null)}),void 0===p&&(p=null),d.send(p)})}},function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},function(t,e,n){"use strict";var r=n(21);t.exports=function(t,e,n,o,i){var u=new Error(t);return r(u,e,n,o,i)}},function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},function(t,e,n){var r=n(14)(n(37),n(40),null,null);t.exports=r.exports},function(t,e){t.exports=function(t,e,n,r){var o,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(o=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),r){var s=Object.create(a.computed||null);Object.keys(r).forEach(function(t){var e=r[t];s[t]=function(){return e}}),a.computed=s}return{esModule:o,exports:i,options:a}}},function(t,e,n){t.exports=n(16)},function(t,e,n){"use strict";function r(t){var e=new u(t),n=i(u.prototype.request,e);return o.extend(n,u.prototype,e),o.extend(n,e),n}var o=n(0),i=n(12),u=n(18),a=n(2),s=r(a);s.Axios=u,s.create=function(t){return r(o.merge(a,t))},s.Cancel=n(9),s.CancelToken=n(17),s.isCancel=n(10),s.all=function(t){return Promise.all(t)},s.spread=n(32),t.exports=s,t.exports.default=s},function(t,e,n){"use strict";function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var n=this;t(function(t){n.reason||(n.reason=new o(t),e(n.reason))})}var o=n(9);r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.source=function(){var t;return{token:new r(function(e){t=e}),cancel:t}},t.exports=r},function(t,e,n){"use strict";function r(t){this.defaults=t,this.interceptors={request:new u,response:new u}}var o=n(2),i=n(0),u=n(19),a=n(20),s=n(28),c=n(26);r.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!s(t.url)&&(t.url=c(t.baseURL,t.url));var e=[a,void 0],n=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)n=n.then(e.shift(),e.shift());return n},i.forEach(["delete","get","head","options"],function(t){r.prototype[t]=function(e,n){return this.request(i.merge(n||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){r.prototype[t]=function(e,n,r){return this.request(i.merge(r||{},{method:t,url:e,data:n}))}}),t.exports=r},function(t,e,n){"use strict";function r(){this.handlers=[]}var o=n(0);r.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=r},function(t,e,n){"use strict";function r(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=n(0),i=n(23),u=n(10),a=n(2);t.exports=function(t){return r(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return r(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return u(e)||(r(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o){return t.config=e,n&&(t.code=n),t.request=r,t.response=o,t}},function(t,e,n){"use strict";var r=n(11);t.exports=function(t,e,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e,n){return r.forEach(n,function(n){t=n(t,e)}),t}},function(t,e,n){"use strict";function r(){this.message="String contains an invalid character"}function o(t){for(var e,n,o=String(t),u="",a=0,s=i;o.charAt(0|a)||(s="=",a%1);u+=s.charAt(63&e>>8-a%1*8)){if((n=o.charCodeAt(a+=.75))>255)throw new r;e=e<<8|n}return u}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.prototype=new Error,r.prototype.code=5,r.prototype.name="InvalidCharacterError",t.exports=o},function(t,e,n){"use strict";function r(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=n(0);t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(o.isURLSearchParams(e))i=e.toString();else{var u=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),u.push(r(e)+"="+r(t))}))}),i=u.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,o,i,u){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(i)&&a.push("domain="+i),!0===u&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},function(t,e,n){"use strict";var r=n(0);t.exports=r.isStandardBrowserEnv()?function(){function t(t){var e=t;return n&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,n=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(n){var o=r.isString(n)?t(n):n;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},function(t,e,n){"use strict";var r=n(0);t.exports=function(t,e){r.forEach(t,function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])})}},function(t,e,n){"use strict";var r=n(0);t.exports=function(t){var e,n,o,i={};return t?(r.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=r.trim(t.substr(0,o)).toLowerCase(),n=r.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+n:n)}),i):i}},function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},function(t,e,n){"use strict";var r=n(1),o=n(36);r.a.globalsRegistered||(r.a.globalsRegistered=!0,r.a.mixin(o.a))},function(t,e,n){t.exports=function(t){return function(){return n(42)("./"+t+".vue")}}},function(t,e,n){"use strict";var r=n(15),o=n.n(r);n.d(e,"a",function(){return i});var i=o.a.create({baseURL:"http://www.gq.ru/api/",headers:{Authorization:"Bearer {token}"}})},function(t,e,n){"use strict";e.a={created:function(){var t=this;if(window.__INITIAL_COMPONENTS_STATE__&this.$router){var e=this.$router.getMatchedComponents();if(!e.length)return;e.forEach(function(t,e){t.__INITIAL_STATE__=window.__INITIAL_COMPONENTS_STATE__[e]}),window.__INITIAL_COMPONENTS_STATE__=null}this.constructor.extendOptions&&this.constructor.extendOptions.__INITIAL_STATE__?(Object.assign(this.$data,this.constructor.extendOptions.__INITIAL_STATE__),this.prefetched=Promise.resolve(this.constructor.extendOptions.__INITIAL_STATE__),this.constructor.extendOptions.__INITIAL_STATE__=null):this.$options.prefetch&&(this.prefetched=this.$options.prefetch(this.$route,this.$store).then(function(e){return Object.assign(t.$data,e),e}))}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=(n(33),n(1)),o=n(3),i=n(4),u=n(41),a=n.n(u);r.a.use(a.a),e.default={router:o.a,store:i.a,metaInfo:{title:"Default Title",titleTemplate:"%s - Company Name"}}},function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function r(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(n(t)||r(t)||!!t._isBuffer)}},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(t){if(f===setTimeout)return setTimeout(t,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(t,0);try{return f(t,0)}catch(e){try{return f.call(null,t,0)}catch(e){return f.call(this,t,0)}}}function i(t){if(p===clearTimeout)return clearTimeout(t);if((p===r||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):v=-1,h.length&&a())}function a(){if(!m){var t=o(u);m=!0;for(var e=h.length;e;){for(d=h,h=[];++v<e;)d&&d[v].run();v=-1,e=h.length}d=null,m=!1,i(t)}}function s(t,e){this.fun=t,this.array=e}function c(){}var f,p,l=t.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(t){f=n}try{p="function"==typeof clearTimeout?clearTimeout:r}catch(t){p=r}}();var d,h=[],m=!1,v=-1;l.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];h.push(new s(t,e)),1!==h.length||m||o(a)},s.prototype.run=function(){this.fun.apply(null,this.array)},l.title="browser",l.browser=!0,l.env={},l.argv=[],l.version="",l.versions={},l.on=c,l.addListener=c,l.once=c,l.off=c,l.removeListener=c,l.removeAllListeners=c,l.emit=c,l.prependListener=c,l.prependOnceListener=c,l.listeners=function(t){return[]},l.binding=function(t){throw new Error("process.binding is not supported")},l.cwd=function(){return"/"},l.chdir=function(t){throw new Error("process.chdir is not supported")},l.umask=function(){return 0}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},function(t,e,n){(function(e){/**
 * vue-meta v0.5.5
 * (c) 2017 Declan de Wet
 * @license MIT
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}function r(t,e){return e={exports:{}},t(e,e.exports),e.exports}function o(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function i(t,e){return function(n){return t(e(n))}}function u(t){return!!t&&"object"==typeof t}function a(t){if(!u(t)||R.call(t)!=I||o(t))return!1;var e=$(t);if(null===e)return!0;var n=L.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&k.call(n)==P}function s(t){return Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)}function c(t,e){void 0===e&&(e={});var n=t.component,r=t.option,o=t.deep,i=t.arrayMerge,u=n.$options;if(void 0!==u[r]&&null!==u[r]){var a=u[r];"function"==typeof a&&(a=a.call(n)),e="object"==typeof a?S(e,a,{clone:!0,arrayMerge:i}):a}return o&&n.$children.length&&n.$children.forEach(function(t){e=c({component:t,option:r,deep:o,arrayMerge:i},e)}),e}function f(t){void 0===t&&(t={});var e=t.keyName,n=t.tagIDKeyName;return function(t){var r={title:"",titleChunk:"",titleTemplate:"%s",htmlAttrs:{},bodyAttrs:{},meta:[],base:[],link:[],style:[],script:[],noscript:[],__dangerouslyDisableSanitizers:[]},o=c({component:t,option:e,deep:!0,arrayMerge:function(t,e){var r=[];for(var o in t){var i=t[o],u=!1;for(var a in e){var s=e[a];if(i[n]&&i[n]===s[n]){u=!0;break}}u||r.push(i)}return r.concat(e)}});o.title&&(o.titleChunk=o.title),o.titleTemplate&&(o.title=o.titleTemplate.replace(/%s/g,o.titleChunk)),o.base&&(o.base=Object.keys(o.base).length?[o.base]:[]);var i=function(t){return Object.keys(t).reduce(function(e,n){var r=t.__dangerouslyDisableSanitizers,o=r&&r.indexOf(n)>-1,u=t[n];return o?e[n]=u:"string"==typeof u?e[n]=q(u):B(u)?e[n]=i(u):s(u)?e[n]=u.map(i):e[n]=u,e},{})};return o=S(r,o),o=i(o)}}function p(t){void 0===t&&(t={});var e=t.attribute;return function(t,n){return{text:function(){return"<"+t+" "+e+'="true">'+n+"</"+t+">"}}}}function l(t){void 0===t&&(t={});var e=t.attribute;return function(t,n){return{text:function(){var t="",r=[];for(var o in n)n.hasOwnProperty(o)&&(r.push(o),t+=(void 0!==n[o]?o+'="'+n[o]+'"':o)+" ");return t+=e+'="'+r.join(",")+'"',t.trim()}}}}function d(t){void 0===t&&(t={});var e=t.attribute;return function(t,n){return{text:function(){return n.reduce(function(n,r){var o=Object.keys(r).reduce(function(t,e){switch(e){case"innerHTML":case"cssText":return t;default:return void 0===r[e]?t+" "+e:t+" "+e+'="'+r[e]+'"'}},"").trim(),i=r.innerHTML||r.cssText||"";return-1===["noscript","script","style"].indexOf(t)?n+"<"+t+" "+e+'="true" '+o+"/>":n+"<"+t+" "+e+'="true" '+o+">"+i+"</"+t+">"},"")}}}}function h(t){return void 0===t&&(t={}),function(e,n){switch(e){case"title":return p(t)(e,n);case"htmlAttrs":case"bodyAttrs":return l(t)(e,n);default:return d(t)(e,n)}}}function m(t){return void 0===t&&(t={}),function(){var e=f(t)(this.$root);for(var n in e)e.hasOwnProperty(n)&&"titleTemplate"!==n&&(e[n]=h(t)(n,e[n]));return e}}function v(){return function(t){void 0===t&&(t=document.title),document.title=t}}function y(t){void 0===t&&(t={});var e=t.attribute;return function(t,n){var r=n.getAttribute(e),o=r?r.split(","):[],i=[].concat(o);for(var u in t)if(t.hasOwnProperty(u)){var a=t[u]||"";n.setAttribute(u,a),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var c=i.length-1;c>=0;c--)n.removeAttribute(i[c]);o.length===i.length?n.removeAttribute(e):n.setAttribute(e,o.join(","))}}function g(t){void 0===t&&(t={});var e=t.attribute;return function(t,n,r){var o,i=r.querySelectorAll(t+"["+e+"]"),u=U(i),a=[];if(n.length>1){var s=[];n=n.map(function(t){var e=JSON.stringify(t);if(s.indexOf(e)<0)return s.push(e),t}).filter(function(t){return t})}return n&&n.length&&n.forEach(function(n){var r=document.createElement(t);for(var i in n)if(n.hasOwnProperty(i))if("innerHTML"===i)r.innerHTML=n.innerHTML;else if("cssText"===i)r.styleSheet?r.styleSheet.cssText=n.cssText:r.appendChild(document.createTextNode(n.cssText));else{var s=void 0===n[i]?"":n[i];r.setAttribute(i,s)}r.setAttribute(e,"true"),u.some(function(t,e){return o=e,r.isEqualNode(t)})?u.splice(o,1):a.push(r)}),u.forEach(function(t){return t.parentNode.removeChild(t)}),a.forEach(function(t){return r.appendChild(t)}),{oldTags:u,newTags:a}}}function w(t){void 0===t&&(t={});var e=t.ssrAttribute;return function(n){var r=document.getElementsByTagName("html")[0];if(null===r.getAttribute(e)){var o={},i={};Object.keys(n).forEach(function(e){switch(e){case"title":v(t)(n.title);break;case"htmlAttrs":case"bodyAttrs":y(t)(n[e],"htmlAttrs"===e?r:document.getElementsByTagName("body")[0]);break;case"titleChunk":case"titleTemplate":case"changed":break;default:var u=g(t)(e,n[e],document.getElementsByTagName("head")[0]),a=u.oldTags,s=u.newTags;s.length&&(o[e]=s,i[e]=a)}}),"function"==typeof n.changed&&n.changed(n,o,i)}else r.removeAttribute(e)}}function b(t){return void 0===t&&(t={}),function(){var e=f(t)(this.$root);return w(t)(e),e}}function T(t){return void 0===t&&(t={}),function(){return{inject:m(t).bind(this),refresh:b(t).bind(this)}}}function x(t,e){return D(t),F(function(){t=null,e()})}function A(t,e){void 0===e&&(e={}),e=j({keyName:M,attribute:H,ssrAttribute:X,tagIDKeyName:V},e),t.prototype.$meta=T(e);var n=null;t.mixin({beforeCreate:function(){"function"==typeof this.$options[e.keyName]&&(void 0===this.$options.computed&&(this.$options.computed={}),this.$options.computed.$metaInfo=this.$options[e.keyName])},created:function(){var t=this;this.$metaInfo&&this.$watch("$metaInfo",function(){n=x(n,function(){return t.$meta().refresh()})})},beforeMount:function(){var t=this;n=x(n,function(){return t.$meta().refresh()})}})}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,j=n()?Object.assign:function(e,n){for(var r,o,i=arguments,u=t(e),a=1;a<arguments.length;a++){r=Object(i[a]);for(var s in r)O.call(r,s)&&(u[s]=r[s]);if(E){o=E(r);for(var c=0;c<o.length;c++)_.call(r,o[c])&&(u[o[c]]=r[o[c]])}}return u},S=("undefined"!=typeof window?window:void 0!==e||"undefined"!=typeof self&&self,r(function(t,e){!function(e,n){t.exports=n()}(0,function(){function t(t){return t&&"object"==typeof t&&"[object RegExp]"!==Object.prototype.toString.call(t)&&"[object Date]"!==Object.prototype.toString.call(t)}function e(t){return Array.isArray(t)?[]:{}}function n(n,r){return r&&!0===r.clone&&t(n)?i(e(n),n,r):n}function r(e,r,o){var u=e.slice();return r.forEach(function(r,a){void 0===u[a]?u[a]=n(r,o):t(r)?u[a]=i(e[a],r,o):-1===e.indexOf(r)&&u.push(n(r,o))}),u}function o(e,r,o){var u={};return t(e)&&Object.keys(e).forEach(function(t){u[t]=n(e[t],o)}),Object.keys(r).forEach(function(a){t(r[a])&&e[a]?u[a]=i(e[a],r[a],o):u[a]=n(r[a],o)}),u}function i(t,e,i){var u=Array.isArray(e),a=i||{arrayMerge:r},s=a.arrayMerge||r;return u?Array.isArray(t)?s(t,e,i):n(e,i):o(t,e,i)}return i.all=function(t,e){if(!Array.isArray(t)||t.length<2)throw new Error("first argument should be an array with at least two elements");return t.reduce(function(t,n){return i(t,n,e)})},i})})),I="[object Object]",C=Function.prototype,N=Object.prototype,k=C.toString,L=N.hasOwnProperty,P=k.call(Object),R=N.toString,$=i(Object.getPrototypeOf,Object),B=a,q=function(t){return"undefined"==typeof window?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"):String(t).replace(/&/g,"&").replace(/</g,"<").replace(/>/g,">").replace(/"/g,'"').replace(/'/g,"'")},U=Function.prototype.call.bind(Array.prototype.slice),D=("undefined"!=typeof window?window.cancelAnimationFrame:null)||clearTimeout,F=("undefined"!=typeof window?window.requestAnimationFrame:null)||function(t){return setTimeout(t,0)},M="metaInfo",H="data-vue-meta",X="data-vue-meta-server-rendered",V="vmid";return"undefined"!=typeof Vue&&Vue.use(A),A.version="0.5.5",A})}).call(e,n(7))},function(t,e,n){function r(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./Foo.vue":[45,2],"./HTTP404.vue":[46,5],"./Index.vue":[47,4],"./Post.vue":[48,1],"./Posts.vue":[49,0],"./ShowErrorPage.vue":[50,3]};r.keys=function(){return Object.keys(o)},t.exports=r,r.id=42},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1),o=n(13),i=n.n(o),u=n(4),a=n(3);window.__INITIAL_VUEX_STATE__&&u.a.replaceState(window.__INITIAL_VUEX_STATE__);var s=new r.a(i.a);a.a.onReady(function(){return s.$mount("#app")})}],[43]);