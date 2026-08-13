import{o as e,t}from"./rolldown-runtime-C0FnF6B9.js";import{Fn as n,Ln as r,Rn as i}from"./assess-DRQtD_KK.js";import{E as a,I as o,O as s,a as c,b as l,k as u,n as d,x as f}from"./useGithubAuth-BNH109fc.js";function p(e){return e}var m=e(i(),1),h=r(),g={scopes:null,status:null};function _(e){g.status=e.status,g.scopes=e.scopes}function v(){return{...g}}var y=n(),b=u.scope(`context:github`),x=(0,m.createContext)(null),S=(0,m.createContext)(null);function C(e){let t=(0,h.c)(12),{token:n,children:r}=e,[i,a]=(0,m.useState)(null),{expireSession:s}=d(),c;t[0]!==s||t[1]!==n?(c=e=>{if(n){if(_(e),e.status===401){b.warn(`live 401 on API response, tearing down session`,{record:!0}),s();return}a(t=>t&&t.token===n&&t.signal.status===e.status&&t.signal.scopes===e.scopes?t:{token:n,signal:e})}},t[0]=s,t[1]=n,t[2]=c):c=t[2];let u=c,f;bb0:{if(!n){f=null;break bb0}b.debug(`creating GitHub client for new token`);let e;t[3]!==u||t[4]!==n?(e=l({token:n,archiveBaseUrl:o,onResponse:u}),t[3]=u,t[4]=n,t[5]=e):e=t[5],f=e}let p=f,g=i&&i.token===n?i:null,v;t[6]!==r||t[7]!==g?(v=(0,y.jsx)(S.Provider,{value:g,children:r}),t[6]=r,t[7]=g,t[8]=v):v=t[8];let C;return t[9]!==p||t[10]!==v?(C=(0,y.jsx)(x.Provider,{value:p,children:v}),t[9]=p,t[10]=v,t[11]=C):C=t[11],C}function w(){let e=(0,m.useContext)(x);if(!e)throw Error(`useGitHubClient must be used after GitHub auth is ready`);return e}function T(){return(0,m.useContext)(x)}function E(){let e=(0,h.c)(3),{tokenScope:t}=d(),n=(0,m.useContext)(S)?.signal.scopes??t,r;bb0:{if(!n){let t;e[0]===Symbol.for(`react.memo_cache_sentinel`)?(t=[],e[0]=t):t=e[0],r=t;break bb0}let t;e[1]===n?t=e[2]:(t=c(n),t.length>0&&b.debug(`token is missing required scopes`,{missing:t}),e[1]=n,e[2]=t),r=t}return r}var D=`classroom50`,O=`main`,k=t(((e,t)=>{((n,r)=>{typeof define==`function`&&define.amd?define([],r):typeof t==`object`&&e!==void 0?t.exports=r():n.Papa=r()})(e,function e(){var t=typeof self<`u`?self:typeof window<`u`?window:t===void 0?{}:t,n,r=!t.document&&!!t.postMessage,i=t.IS_PAPA_WORKER||!1,a={},o=0,s={};function c(e){return e.charCodeAt(0)===65279?e.slice(1):e}function l(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine=``,this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=b(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new m(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,n){var r=parseInt(this._config.skipFirstNLines)||0;if(this.isFirstChunk&&0<r){let t=this._config.newline;t||=(a=this._config.quoteChar||`"`,this._handle.guessLineEndings(e,a)),e=[...e.split(t).slice(r)].join(t)}this.isFirstChunk&&S(this._config.beforeFirstChunk)&&(a=this._config.beforeFirstChunk(e))!==void 0&&(e=a),this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e,a=(this._partialLine=``,this._handle.parse(r,this._baseIndex,!this._finished));if(!this._handle.paused()&&!this._handle.aborted()){if(e=a.meta.cursor,r=(this._finished||(this._partialLine=r.substring(e-this._baseIndex),this._baseIndex=e),a&&a.data&&(this._rowCount+=a.data.length),this._finished||this._config.preview&&this._rowCount>=this._config.preview),i)t.postMessage({results:a,workerId:s.WORKER_ID,finished:r});else if(S(this._config.chunk)&&!n){if(this._config.chunk(a,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);this._completeResults=a=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(a.data),this._completeResults.errors=this._completeResults.errors.concat(a.errors),this._completeResults.meta=a.meta),this._completed||!r||!S(this._config.complete)||a&&a.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),r||a&&a.meta.paused||this._nextChunk(),a}this._halted=!0},this._sendError=function(e){S(this._config.error)?this._config.error(e):i&&this._config.error&&t.postMessage({workerId:s.WORKER_ID,error:e,finished:!1})}}function u(e){var t;(e||={}).chunkSize||(e.chunkSize=s.RemoteChunkSize),l.call(this,e),this._nextChunk=r?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(t=new XMLHttpRequest,this._config.withCredentials&&(t.withCredentials=this._config.withCredentials),r||(t.onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)),t.open(this._config.downloadRequestBody?`POST`:`GET`,this._input,!r),this._config.downloadRequestHeaders){var e,n=this._config.downloadRequestHeaders;for(e in n)t.setRequestHeader(e,n[e])}var i;this._config.chunkSize&&(i=this._start+this._config.chunkSize-1,t.setRequestHeader(`Range`,`bytes=`+this._start+`-`+i));try{t.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}r&&t.status===0&&this._chunkError()}},this._chunkLoaded=function(){t.readyState===4&&(t.status<200||400<=t.status?this._chunkError():(this._start+=this._config.chunkSize||t.responseText.length,this._finished=!this._config.chunkSize||this._start>=(e=>(e=e.getResponseHeader(`Content-Range`))===null?-1:parseInt(e.substring(e.lastIndexOf(`/`)+1)))(t),this.parseChunk(t.responseText)))},this._chunkError=function(e){e=t.statusText||e,this._sendError(Error(e))}}function d(e){(e||={}).chunkSize||(e.chunkSize=s.LocalChunkSize),l.call(this,e);var t,n,r=typeof FileReader<`u`;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,r?((t=new FileReader).onload=x(this._chunkLoaded,this),t.onerror=x(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input,i=(this._config.chunkSize&&(i=Math.min(this._start+this._config.chunkSize,this._input.size),e=n.call(e,this._start,i)),t.readAsText(e,this._config.encoding));r||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function f(e){var t;l.call(this,e||={}),this.stream=function(e){return t=e,this._nextChunk()},this._nextChunk=function(){var e,n;if(!this._finished)return e=this._config.chunkSize,t=e?(n=t.substring(0,e),t.substring(e)):(n=t,``),this._finished=!t,this.parseChunk(n)}}function p(e){l.call(this,e||={});var t=[],n=!0,r=!1;this.pause=function(){l.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){l.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on(`data`,this._streamData),this._input.on(`end`,this._streamEnd),this._input.on(`error`,this._streamError)},this._checkIsFinished=function(){r&&t.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):n=!0},this._streamData=x(function(e){try{t.push(typeof e==`string`?e:e.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=x(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=x(function(){this._streamCleanUp(),r=!0,this._streamData(``)},this),this._streamCleanUp=x(function(){this._input.removeListener(`data`,this._streamData),this._input.removeListener(`end`,this._streamEnd),this._input.removeListener(`error`,this._streamError)},this)}function m(e){var t,n,r,i,a=2**53,o=-a,l=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,d=this,f=0,p=0,m=!1,_=!1,v=[],y={data:[],errors:[],meta:{}};function x(t){return e.skipEmptyLines===`greedy`?t.join(``).trim()===``:t.length===1&&t[0].length===0}function C(){if(y&&r&&(T(`Delimiter`,`UndetectableDelimiter`,`Unable to auto-detect delimiting character; defaulted to '`+s.DefaultDelimiter+`'`),r=!1),e.skipEmptyLines&&(y.data=y.data.filter(function(e){return!x(e)})),w()){if(y){if(Array.isArray(y.data[0])){for(var t=0;w()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n)}function n(t,n){t=c(t),S(e.transformHeader)&&(t=e.transformHeader(t,n)),v.push(t)}}function n(t,n){for(var r=e.header?{}:[],i=0;i<t.length;i++){var s=i,c=t[i],c=((t,n)=>(t=>(e.dynamicTypingFunction&&e.dynamicTyping[t]===void 0&&(e.dynamicTyping[t]=e.dynamicTypingFunction(t)),!0===(e.dynamicTyping[t]||e.dynamicTyping)))(t)?n===`true`||n===`TRUE`||n!==`false`&&n!==`FALSE`&&((e=>{if(l.test(e)&&(e=parseFloat(e),o<e&&e<a))return 1})(n)?parseFloat(n):u.test(n)?new Date(n):n===``?null:n):n)(s=e.header?i>=v.length?`__parsed_extra`:v[i]:s,c=e.transform?e.transform(c,s):c);s===`__parsed_extra`?(r[s]=r[s]||[],r[s].push(c)):r[s]=c}return e.header&&(i>v.length?T(`FieldMismatch`,`TooManyFields`,`Too many fields: expected `+v.length+` fields but parsed `+i,p+n):i<v.length&&T(`FieldMismatch`,`TooFewFields`,`Too few fields: expected `+v.length+` fields but parsed `+i,p+n)),r}var i;y&&(e.header||e.dynamicTyping||e.transform)&&(i=1,!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(n),i=y.data.length):y.data=n(y.data,0),e.header&&y.meta&&(y.meta.fields=v),p+=i)}function w(){return e.header&&v.length===0}function T(e,t,n,r){e={type:e,code:t,message:n},r!==void 0&&(e.row=r),y.errors.push(e)}S(e.step)&&(i=e.step,e.step=function(t){y=t,w()?C():(C(),y.data.length!==0&&(f+=t.data.length,e.preview&&f>e.preview?n.abort():(y.data=y.data[0],i(y,d))))}),this.parse=function(i,a,o){var c=e.quoteChar||`"`,c=(e.newline||=this.guessLineEndings(i,c),r=!1,e.delimiter?S(e.delimiter)&&(e.delimiter=e.delimiter(i),y.meta.delimiter=e.delimiter):((c=((t,n,r,i,a)=>{var o,c,l,u;a||=[`,`,`	`,`|`,`;`,s.RECORD_SEP,s.UNIT_SEP];for(var d=0;d<a.length;d++){for(var f,p=a[d],m=0,h=0,_=0,v=(l=void 0,new g({comments:i,delimiter:p,newline:n,preview:10}).parse(t)),y=0;y<v.data.length;y++)r&&x(v.data[y])?_++:(f=v.data[y].length,h+=f,l===void 0?l=f:0<f&&(m+=Math.abs(f-l),l=f));0<v.data.length&&(h/=v.data.length-_),(c===void 0||m<=c)&&(u===void 0||u<h)&&1.99<h&&(c=m,o=p,u=h)}return{successful:!!(e.delimiter=o),bestDelimiter:o}})(i,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess)).successful?e.delimiter=c.bestDelimiter:(r=!0,e.delimiter=s.DefaultDelimiter),y.meta.delimiter=e.delimiter),b(e));return e.preview&&e.header&&c.preview++,t=i,n=new g(c),y=n.parse(t,a,o),C(),m?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return m},this.pause=function(){m=!0,n.abort(),t=S(e.chunk)?``:t.substring(n.getCharIndex())},this.resume=function(){d.streamer._halted?(m=!1,d.streamer.parseChunk(t,!0)):setTimeout(d.resume,3)},this.aborted=function(){return _},this.abort=function(){_=!0,n.abort(),y.meta.aborted=!0,S(e.complete)&&e.complete(y),t=``},this.guessLineEndings=function(e,t){e=e.substring(0,1048576);var t=RegExp(h(t)+`([^]*?)`+h(t),`gm`),n=(e=e.replace(t,``)).split(`\r`),t=e.split(`
`),e=1<t.length&&t[0].length<n[0].length;if(n.length===1||e)return`
`;for(var r=0,i=0;i<n.length;i++)n[i][0]===`
`&&r++;return r>=n.length/2?`\r
`:`\r`}}function h(e){return e.replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)}function g(e){var t=(e||={}).delimiter,n=e.newline,r=e.comments,i=e.step,a=e.preview,o=e.fastMode,l=null,u=!1,d=e.quoteChar==null?`"`:e.quoteChar,f=d;if(e.escapeChar!==void 0&&(f=e.escapeChar),(typeof t!=`string`||-1<s.BAD_DELIMITERS.indexOf(t))&&(t=`,`),r===t)throw Error(`Comment character same as delimiter`);!0===r?r=`#`:(typeof r!=`string`||-1<s.BAD_DELIMITERS.indexOf(r))&&(r=!1),n!==`
`&&n!==`\r`&&n!==`\r
`&&(n=`
`);var p=0,m=!1;this.parse=function(s,g,_){if(typeof s!=`string`)throw Error(`Input must be a string`);var v=s.length,y=t.length,b=n.length,x=r.length,C=S(i),w=[],T=[],E=[],D=p=0;if(!s)return z();if(o||!1!==o&&s.indexOf(d)===-1){for(var O=s.split(n),k=0;k<O.length;k++){if(E=O[k],p+=E.length,k!==O.length-1)p+=n.length;else if(_)return z();if(!r||E.substring(0,x)!==r){if(C){if(w=[],F(E.split(t)),B(),m)return z()}else F(E.split(t));if(a&&a<=k)return w=w.slice(0,a),z(!0)}}return z()}for(var A=s.indexOf(t,p),j=s.indexOf(n,p),M=new RegExp(h(f)+h(d),`g`),N=s.indexOf(d,p);;)if(s[p]===d)for(N=p,p++;;){if((N=s.indexOf(d,N+1))===-1)return _||T.push({type:`Quotes`,code:`MissingQuotes`,message:`Quoted field unterminated`,row:w.length,index:p}),L();if(N===v-1)return L(s.substring(p,N).replace(M,d));if(d===f&&s[N+1]===f)N++;else if(d===f||N===0||s[N-1]!==f){A!==-1&&A<N+1&&(A=s.indexOf(t,N+1));var P=I((j=j!==-1&&j<N+1?s.indexOf(n,N+1):j)===-1?A:Math.min(A,j));if(s.substr(N+1+P,y)===t){E.push(s.substring(p,N).replace(M,d)),s[p=N+1+P+y]!==d&&(N=s.indexOf(d,p)),A=s.indexOf(t,p),j=s.indexOf(n,p);break}if(P=I(j),s.substring(N+1+P,N+1+P+b)===n){if(E.push(s.substring(p,N).replace(M,d)),R(N+1+P+b),A=s.indexOf(t,p),N=s.indexOf(d,p),C&&(B(),m))return z();if(a&&w.length>=a)return z(!0);break}T.push({type:`Quotes`,code:`InvalidQuotes`,message:`Trailing quote on quoted field is malformed`,row:w.length,index:p}),N++}}else if(r&&E.length===0&&s.substring(p,p+x)===r){if(j===-1)return z();p=j+b,j=s.indexOf(n,p),A=s.indexOf(t,p)}else if(A!==-1&&(A<j||j===-1))E.push(s.substring(p,A)),p=A+y,A=s.indexOf(t,p);else{if(j===-1)break;if(E.push(s.substring(p,j)),R(j+b),C&&(B(),m))return z();if(a&&w.length>=a)return z(!0)}return L();function F(e){w.push(e),D=p}function I(e){var t=0;return t=e!==-1&&(e=s.substring(N+1,e))&&e.trim()===``?e.length:t}function L(e){return _||(e===void 0&&(e=s.substring(p)),E.push(e),p=v,F(E),C&&B()),z()}function R(e){p=e,F(E),E=[],j=s.indexOf(n,p)}function z(r){if(e.header&&!g&&w.length&&!u){var i=w[0],a=Object.create(null),o=new Set(i);let t=!1;for(let n=0;n<i.length;n++){let r=c(i[n]);if(a[r=S(e.transformHeader)?e.transformHeader(r,n):r]){let e,s=a[r];for(;e=r+`_`+s,s++,o.has(e););o.add(e),i[n]=e,a[r]++,t=!0,(l=l===null?{}:l)[e]=r}else a[r]=1,i[n]=r;o.add(r)}t&&console.warn(`Duplicate headers found and renamed.`),u=!0}return{data:w,errors:T,meta:{delimiter:t,linebreak:n,aborted:m,truncated:!!r,cursor:D+(g||0),renamedHeaders:l}}}function B(){i(z()),w=[],T=[]}},this.abort=function(){m=!0},this.getCharIndex=function(){return p}}function _(e){var t=e.data,n=a[t.workerId],r=!1;if(t.error)n.userError(t.error,t.file);else if(t.results&&t.results.data){var i={abort:function(){r=!0,v(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:y,resume:y};if(S(n.userStep)){for(var o=0;o<t.results.data.length&&(n.userStep({data:t.results.data[o],errors:t.results.errors,meta:t.results.meta},i),!r);o++);delete t.results}else S(n.userChunk)&&(n.userChunk(t.results,i,t.file),delete t.results)}t.finished&&!r&&v(t.workerId,t.results)}function v(e,t){var n=a[e];S(n.userComplete)&&n.userComplete(t),n.terminate(),delete a[e]}function y(){throw Error(`Not implemented.`)}function b(e){if(typeof e!=`object`||!e)return e;var t,n=Array.isArray(e)?[]:{};for(t in e)n[t]=b(e[t]);return n}function x(e,t){return function(){e.apply(t,arguments)}}function S(e){return typeof e==`function`}return s.parse=function(n,r){var i=(r||={}).dynamicTyping||!1;if(S(i)&&(r.dynamicTypingFunction=i,i={}),r.dynamicTyping=i,r.transform=!!S(r.transform)&&r.transform,!r.worker||!s.WORKERS_SUPPORTED)return i=null,s.NODE_STREAM_INPUT,typeof n==`string`?(n=c(n),i=new(r.download?u:f)(r)):!0===n.readable&&S(n.read)&&S(n.on)?i=new p(r):(t.File&&n instanceof File||n instanceof Object)&&(i=new d(r)),i.stream(n);(i=(()=>{var n;return!!s.WORKERS_SUPPORTED&&(n=(()=>{var n=t.URL||t.webkitURL||null,r=e.toString();return s.BLOB_URL||=n.createObjectURL(new Blob([`var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; `,`(`,r,`)();`],{type:`text/javascript`}))})(),(n=new t.Worker(n)).onmessage=_,n.id=o++,a[n.id]=n)})()).userStep=r.step,i.userChunk=r.chunk,i.userComplete=r.complete,i.userError=r.error,r.step=S(r.step),r.chunk=S(r.chunk),r.complete=S(r.complete),r.error=S(r.error),delete r.worker,i.postMessage({input:n,config:r,workerId:i.id})},s.unparse=function(e,t){var n=!1,r=!0,i=`,`,a=`\r
`,o=`"`,c=o+o,l=!1,u=null,d=!1,f=((()=>{if(typeof t==`object`){if(typeof t.delimiter!=`string`||s.BAD_DELIMITERS.filter(function(e){return t.delimiter.indexOf(e)!==-1}).length||(i=t.delimiter),typeof t.quotes!=`boolean`&&typeof t.quotes!=`function`&&!Array.isArray(t.quotes)||(n=t.quotes),typeof t.skipEmptyLines!=`boolean`&&typeof t.skipEmptyLines!=`string`||(l=t.skipEmptyLines),typeof t.newline==`string`&&(a=t.newline),typeof t.quoteChar==`string`&&(o=t.quoteChar,c=o+o),typeof t.header==`boolean`&&(r=t.header),Array.isArray(t.columns)){if(t.columns.length===0)throw Error(`Option columns is empty`);u=t.columns}t.escapeChar!==void 0&&(c=t.escapeChar+o),t.escapeFormulae instanceof RegExp?d=t.escapeFormulae:typeof t.escapeFormulae==`boolean`&&t.escapeFormulae&&(d=/^[=+\-@\t\r].*$/)}})(),new RegExp(h(o),`g`));if(typeof e==`string`&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return p(null,e,l);if(typeof e[0]==`object`)return p(u||Object.keys(e[0]),e,l)}else if(typeof e==`object`)return typeof e.data==`string`&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||u),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:typeof e.data[0]==`object`?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||typeof e.data[0]==`object`||(e.data=[e.data])),p(e.fields||[],e.data||[],l);throw Error(`Unable to serialize unrecognized input`);function p(e,t,n){var o=``,s=(typeof e==`string`&&(e=JSON.parse(e)),typeof t==`string`&&(t=JSON.parse(t)),Array.isArray(e)&&0<e.length),c=!Array.isArray(t[0]);if(s&&r){for(var l=0;l<e.length;l++)0<l&&(o+=i),o+=m(e[l],l);0<t.length&&(o+=a)}for(var u=0;u<t.length;u++){var d=(s?e:t[u]).length,f=!1,p=s?Object.keys(t[u]).length===0:t[u].length===0;if(n&&!s&&(f=n===`greedy`?t[u].join(``).trim()===``:t[u].length===1&&t[u][0].length===0),n===`greedy`&&s){for(var h=[],g=0;g<d;g++){var _=c?e[g]:g;h.push(t[u][_])}f=h.join(``).trim()===``}if(!f){for(var v=0;v<d;v++){0<v&&!p&&(o+=i);var y=s&&c?e[v]:v;o+=m(t[u][y],v)}u<t.length-1&&(!n||0<d&&!p)&&(o+=a)}}return o}function m(e,t){var r,a,l;return e==null?``:e.constructor===Date?JSON.stringify(e).slice(1,25):(l=!1,d&&typeof e==`string`&&d.test(e)&&(e=`'`+e,l=!0),a=(r=e.toString()).replace(f,c),(l=l||!0===n||typeof n==`function`&&n(e,t)||Array.isArray(n)&&n[t]||((e,t)=>{for(var n=0;n<t.length;n++)if(-1<e.indexOf(t[n]))return!0;return!1})(a,s.BAD_DELIMITERS)||-1<a.indexOf(i)||-1<r.indexOf(o)||a.charAt(0)===` `||a.charAt(a.length-1)===` `)?o+a+o:a)}},s.RECORD_SEP=``,s.UNIT_SEP=``,s.BYTE_ORDER_MARK=`﻿`,s.BAD_DELIMITERS=[`\r`,`
`,`"`,s.BYTE_ORDER_MARK],s.WORKERS_SUPPORTED=!r&&!!t.Worker,s.NODE_STREAM_INPUT=1,s.LocalChunkSize=10485760,s.RemoteChunkSize=5242880,s.DefaultDelimiter=`,`,s.Parser=g,s.ParserHandle=m,s.NetworkStreamer=u,s.FileStreamer=d,s.StringStreamer=f,s.ReadableStreamStreamer=p,t.jQuery&&((n=t.jQuery).fn.parse=function(e){var r=e.config||{},i=[];return this.each(function(e){if(!(n(this).prop(`tagName`).toUpperCase()===`INPUT`&&n(this).attr(`type`).toLowerCase()===`file`&&t.FileReader)||!this.files||this.files.length===0)return!0;for(var a=0;a<this.files.length;a++)i.push({file:this.files[a],inputElem:this,instanceConfig:n.extend({},r)})}),a(),this;function a(){if(i.length===0)S(e.complete)&&e.complete();else{var t,r,a,c,l=i[0];if(S(e.before)){var u=e.before(l.file,l.inputElem);if(typeof u==`object`){if(u.action===`abort`)return t=`AbortError`,r=l.file,a=l.inputElem,c=u.reason,void(S(e.error)&&e.error({name:t},r,a,c));if(u.action===`skip`)return void o();typeof u.config==`object`&&(l.instanceConfig=n.extend(l.instanceConfig,u.config))}else if(u===`skip`)return void o()}var d=l.instanceConfig.complete;l.instanceConfig.complete=function(e){S(d)&&d(e,l.file,l.inputElem),o()},s.parse(l.file,l.instanceConfig)}}function o(){i.splice(0,1),a()}}),i&&(t.onmessage=function(e){e=e.data,s.WORKER_ID===void 0&&e&&(s.WORKER_ID=e.workerId),typeof e.input==`string`?t.postMessage({workerId:s.WORKER_ID,results:s.parse(e.input,e.config),finished:!0}):(t.File&&e.input instanceof File||e.input instanceof Object)&&(e=s.parse(e.input,e.config))&&t.postMessage({workerId:s.WORKER_ID,results:e,finished:!0})}),(u.prototype=Object.create(l.prototype)).constructor=u,(d.prototype=Object.create(l.prototype)).constructor=d,(f.prototype=Object.create(f.prototype)).constructor=f,(p.prototype=Object.create(l.prototype)).constructor=p,s})})),A=u.scope(s);async function j(e,t){let n=[],r=1;for(;r<=100;){let i=await e.request(t(r));if(n.push(...i),i.length<100)break;r++}return r>100&&A.warn(`pagination hit MAX_PAGES cap, results may be truncated`,{maxPages:100}),n}var M=`collect-scores.yaml`,N=`regrade.yaml`,P={all:[`github`],viewer:()=>[...P.all,`viewer`],user:e=>[...P.all,`user`,e],orgMembership:e=>[...P.all,`org-membership`,e],orgDetails:e=>[...P.all,`orgs`,e],ownOrgMembership:e=>[...P.all,`memberships`,`orgs`,e],orgRepos:e=>[...P.all,`org-repos`,e],orgMembers:e=>[`orgs`,`list`,`members`,e],orgMembersAll:e=>[`orgs`,`list`,`members`,`all`,e],orgAdmins:e=>[`orgs`,`list`,`members`,`admins`,e],orgRunners:e=>[...P.all,`org-runners`,e],teamMembers:(e,t)=>[...P.all,`team-members`,e,t],teamInvitations:(e,t)=>[...P.all,`team-invitations`,e,t],teamFailedInvitations:(e,t)=>[...P.all,`team-failed-invitations`,e,t],orgTeams:e=>[...P.all,`org-teams`,e],repoTeams:(e,t)=>[...P.all,`repo-teams`,e,t],myTeams:()=>[...P.all,`my-teams`],repo:(e,t)=>[...P.all,`repo`,e,t],collaborators:(e,t)=>[...P.all,`collaborators`,e,t],openPullsAll:()=>[...P.all,`open-pulls`],openPulls:(e,t)=>[...P.openPullsAll(),e,t],branchRef:e=>[...P.all,`branchRef`,e],commitTree:(e,t)=>[...P.all,`commitRef`,e,t],configCommits:(e,t)=>[...P.all,`config-commits`,e,t],rawFile:(e,t,n,r)=>[...P.all,`raw-file`,e,t,n,r??null],rosterRawFile:(e,t,n,r)=>[...P.all,`roster-raw-file`,e,t,n,r??null],jsonFile:(e,t,n,r)=>[...P.all,`json-file`,e,t,n||``,r??null],csvFile:(e,t,n,r)=>[...P.all,`csv-file`,e,t,n,r??null],collectScoresRun:(e,t)=>[...P.all,`collect-scores-run`,e,t??`none`],lastCollectScoresRun:e=>[...P.all,`last-collect-scores-run`,e],regradeRun:(e,t,n,r,i)=>[...P.all,`regrade-run`,e,t,n,r??`all`,i??`none`],serviceToken:e=>[...P.all,`serviceToken`,e],skeletonDrift:e=>[...P.all,`skeletonDrift`,e],orgAudit:(e,t)=>[...P.all,`orgAudit`,e,t??null],orgAuditPrefix:e=>[...P.all,`orgAudit`,e],releases:(e,t)=>[...P.all,`releases`,e,t],defaultBranchCommits:(e,t,n)=>[...P.all,`default-branch-commits`,e,t,n],repoTags:(e,t)=>[...P.all,`repo-tags`,e,t],orgActionsMode:e=>[...P.all,`orgActionsMode`,e],orgActionsUsage:e=>[...P.all,`orgActionsUsage`,e],autogradeState:(e,t)=>[...P.all,`autogradeState`,e,t],orgActionsBudget:e=>[...P.all,`orgActionsBudget`,e]};function F(e){e.invalidateQueries({queryKey:[`orgs`,`memberships`]}),e.invalidateQueries({queryKey:[`orgs`,`active-summaries`]}),e.invalidateQueries({queryKey:[...P.all,`orgs`]}),e.invalidateQueries({queryKey:[...P.all,`repo`],predicate:e=>e.queryKey[3]===D})}function I(e,t,n){e.invalidateQueries({queryKey:P.teamMembers(t,n)}),e.invalidateQueries({queryKey:P.teamInvitations(t,n)})}function L(e,t){e.invalidateQueries({queryKey:[...P.all,`team-invitations`,t]}),e.invalidateQueries({queryKey:[...P.all,`team-failed-invitations`,t]}),e.invalidateQueries({queryKey:P.orgMembers(t)})}var R=`submit/`;function z(e){return new Date(e.published_at??e.created_at).getTime()}function B(e){return e.filter(e=>e.tag_name.startsWith(R)).sort((e,t)=>z(t)-z(e))}function ee(e,t,n){return p({queryKey:P.releases(t,n),queryFn:({signal:r})=>a(async()=>B(await e.request(`/repos/${encodeURIComponent(t)}/${encodeURIComponent(n)}/releases?per_page=100`,{method:`GET`,signal:r})),[]),enabled:!!(t&&n),staleTime:3e5,retry:!1})}async function te(e,t,n,r){return a(async()=>{let i=B(await e.request(`/repos/${encodeURIComponent(t)}/${encodeURIComponent(n)}/releases?per_page=100`,{method:`GET`,signal:r}));return{latest:i[0]??null,count:i.length}},{latest:null,count:0})}var V=`CLASSROOM50_SERVICE_TOKEN`,H=`CLASSROOM50_SERVICE_TOKEN_EXPIRES_AT`,U=`CLASSROOM50_SERVICE_TOKEN_NAME`;function ne(e,t=Date.now(),n=14){if(!e)return`unknown`;let r=new Date(e).getTime();if(Number.isNaN(r))return`unknown`;if(r<=t)return`expired`;let i=n*24*60*60*1e3;return r-t<=i?`expiringSoon`:`ok`}async function W(e,t,n){try{return(await e.request(`/repos/${t}/classroom50/actions/variables/${n}`)).value||void 0}catch{return}}async function re(e,t){try{let n=await e.request(`/repos/${t}/${D}/actions/secrets/${V}`),[r,i]=await Promise.all([W(e,t,H),W(e,t,U)]);return{status:`present`,secretName:V,createdAt:n.created_at,updatedAt:n.updated_at,expiresAt:r,tokenName:i,message:`Service token is set on the ${D} config repo. Last updated ${new Date(n.updated_at).toLocaleString()}.`}}catch(e){if(e instanceof f){if(e.status===404)return{status:`missing`,secretName:V,message:`Service token is not set on the ${D} config repo. Score-collection and regrade workflows cannot access student repositories until a service token is set.`};if(e.status===403)return{status:`unknown`,secretName:V,reason:`permission_denied`,message:`Could not check the service token on the ${D} config repo because this GitHub authorization cannot read repository Actions secrets.`}}throw e}}async function G(e,t,n,r,i=M){let a=new URLSearchParams({per_page:String(n.perPage??1)});return n.event&&a.set(`event`,n.event),n.since&&a.set(`created`,`>=${n.since}`),n.status&&a.set(`status`,n.status),n.page&&a.set(`page`,String(n.page)),(await e.request(`/repos/${t}/classroom50/actions/workflows/${i}/runs?${a.toString()}`,{method:`GET`,signal:r})).workflow_runs??[]}async function ie(e,t,n,r){let i=await G(e,t,{event:`workflow_dispatch`,perPage:20},r),a=n===null?i:i.filter(e=>e.id>n);return a.length>0?a[a.length-1]:null}var K=30,ae=10;async function oe(e,t,n,r){if(n===null){let n=await G(e,t,{event:`workflow_dispatch`,perPage:K},r,N);return n.length>0?n[n.length-1]:null}let i=[];for(let a=1;a<=ae;a++){let o=await G(e,t,{event:`workflow_dispatch`,perPage:K,page:a},r,N);if(o.length===0)break;for(let e of o)e.id>n&&i.push(e);if(o.some(e=>e.id<=n))break}return i.length>0?i[i.length-1]:null}async function se(e,t,n){return(await G(e,t,{status:`completed`},n))[0]??null}var q=[`teacher`,`hta`,`ta`],ce=e=>e.active===!1,J=[`individual`,`group`];function le(e){if(J.includes(e))return e;throw Error(`mode: must be one of ${J.join(`, `)} (got "${e}").`)}var ue=[`pull`,`triage`,`push`,`maintain`,`admin`];function de(e){return e===`group`?`admin`:`push`}var fe=[`every-push`,`tag`],pe=[`off`,`auto`,`manual`];function me(e){let t=e?.description;return typeof t==`string`?t.trim():``}function he(e,t){let{org:n,...r}=t;return e.request(`/orgs/${n}/teams`,{method:`POST`,body:{privacy:`closed`,notification_setting:`notifications_disabled`,...r}})}function Y(e,t=`student`){return t===`student`?`${D}-${e}`:`${D}-${e}-${t}`}function ge(e){return[Y(e),...q.map(t=>Y(e,t))]}function _e(e,t,n){return t===`student`?n?.team?.slug||Y(e,`student`):t===`teacher`?n?.teams?.teacher?.slug||Y(e,`teacher`):n?.teams?.[t]?.slug||Y(e,t)}function X(e){let t=`${D}-`;if(!e.startsWith(t))return null;for(let n of q){let r=`-${n}`;if(e.endsWith(r)){let i=e.slice(t.length,e.length-r.length);if(i.length>0)return{classroom:i,role:n}}}return null}function ve(e){return X(e)?null:Z(e)}function Z(e){let t=`${D}-`;if(!e.startsWith(t))return null;let n=e.slice(t.length);return n.length===0?null:{classroom:n}}var ye=`actions`,be=`organization`,xe=`ProductPricing`;function Se(e){return`https://github.com/organizations/${e}/settings/billing/budgets`}function Ce(e){return`/organizations/${e}/settings/billing/budgets`}function we(e){return e.find(e=>e.budget_scope===`organization`&&e.budget_product_sku===`actions`)}function Te(e){let t=we(e);if(t===void 0)return{tier:`missing`,amount:0,preventsUsage:!1};let n=t.budget_amount??0,r=t.prevent_further_usage??!1,i;return i=r?n>50?`warn`:n===0?`enforced`:`ok`:`missing`,{tier:i,amount:n,preventsUsage:r}}var Ee=`#!/usr/bin/env python3
"""Teacher-triggered scores collector.

Walks the classroom teams × assignment manifest: for each (team member,
assignment) pair, pages the canonical \`<classroom>-<assignment>-<username>\`
repo's \`submit/*\` releases, validates each \`result.json\` asset, and upserts
into \`<classroom>/scores.json\`. The polled members are the union of the
classroom's STUDENT team and its STAFF teams (teacher/hta/ta), so a staff
member who accepted an assignment to test the autograde flow is collected like
a student. Staff who never accepted have no assignment repo, so their poll
returns no releases and they produce no entry (the "accepted" gate is implicit
in the per-repo release read). The classroom GitHub teams are the source of
truth for enrollment; the roster (roster.csv) is only a
best-effort source of optional display metadata (name/section/email).

\`scores.json\` is keyed by assignment slug under root \`assignments\`: each value
is \`{ "type": "individual"|"group", "entries": [...] }\`. An \`entry\` is one
student repo's record (one per repo owner): identity/keying at the top
(\`owner\`; plus \`member_usernames\` for group — the credited collaborators) and
the full per-submission history in \`submissions\` (newest first). Each
\`submissions\` item is a validated \`result.json\` payload minus the redundant
\`assignment\` bucket key (it carries \`owner\` + \`assignment_type\` + optional
\`submitted_by\`, no \`usernames\`). When the assignment has a \`due\` date, each
record carries \`"late": true|false\` (its \`datetime\` vs. \`due\`) — advisory only;
late submissions are still collected and scored.

Single writer per scores.json. Re-runs are idempotent: unchanged submissions
are no-ops, and \`"override": true\` entries are preserved verbatim so teacher
corrections aren't overwritten. Per-classroom writes are atomic (tmp +
os.replace). A missing release is not an error (student hasn't
accepted/submitted); the per-assignment "X of Y submitted" log shows coverage.

Environment (set by \`collect-scores.yaml\`):
  CLASSROOM50_SERVICE_TOKEN — fine-grained PAT. Needs Organization ->
                              Members: Read (collection lists the classroom
                              team), Repository -> Contents: Read and write
                              (read scope used here; write scope shared with
                              regrade.yaml), and Repository -> Administration:
                              Read and write (grant staff teams repo access via
                              PUT teams/.../repos/...).
  CLASSROOM_FILTER          — optional single-classroom limit.
  GITHUB_REPOSITORY_OWNER   — org name (auto-set by Actions).
  GITHUB_API_URL            — API URL on GHES runners.
  GH_API_URL                — explicit override (test servers).

Exit codes:
  0 — success.
  1 — operational failure (missing token, malformed scores.json, unrecoverable
      network error). The run log points at \`gh teacher rotate-service-token\`
      for PAT issues.
"""

from __future__ import annotations

import csv
import datetime
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Callable, Iterable

# Schema sentinels — keep in lockstep with the Go-side constants in
# \`cli/gh-teacher/classroom.go\` and \`cli/gh-teacher/assignments_json.go\`.
CLASSROOM_SCHEMA_V1 = "classroom50/classroom/v1"
ASSIGNMENTS_SCHEMA_V1 = "classroom50/assignments/v1"
SCORES_SCHEMA_V1 = "classroom50/scores/v1"
RESULT_SCHEMA_V1 = "classroom50/result/v1"

# Trigger contract: only \`submit/*\` tag releases count as submissions
# (created by autograde-runner.yaml on push to the repo's default branch).
SUBMIT_TAG_PREFIX = "submit/"

# Repo permission the grant gives each staff role's team. Hand-mirrored from Go
# StaffTeamRepoPermissions (source of truth; parity-tested) — keep in lockstep.
# The head-TA/TA-team template read is granted eagerly at assignment add/reuse
# and classroom migrate (Go side, which hardcodes read there); this collect-time
# grant reads the value below and is the idempotent re-affirm. A role absent
# here gets nothing (the teacher team is an org owner with access via ownership,
# so only the non-owner staff teams — head-TA and TA — need a grant).
STAFF_TEAM_PERMISSIONS = {"hta": "pull", "ta": "pull"}

RFC3339_RE = re.compile(
    r"^\\d{4}-\\d{2}-\\d{2}T([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d"
    r"(\\.\\d+)?(Z|[+-]([01]\\d|2[0-3]):[0-5]\\d)$"
)

# Release asset name written by the autograde runner. Cross-binary
# contract — keep aligned with autograde-runner.yaml and download.go.
RESULT_ASSET_NAME = "result.json"

# Hard cap on result.json size. Real payloads sit well under 1 MiB; 10 MiB
# bounds a hostile asset without rejecting any plausible submission.
MAX_RESULT_BYTES = 10 * 1024 * 1024

# Required roster columns written by \`gh teacher classroom add\`. Mirrors
# RosterColumns in cli/gh-teacher/internal/configrepo/students_csv.go and the
# web app's STUDENT_CSV_FIELDS. Identity/metadata columns; \`role\`
# (teacher/ta/student, or "") is best-effort recorded metadata refreshed from
# the classroom's GitHub teams — the teams, not this column, remain the
# enrollment authority. A pre-role file (ending at github_id) still reads fine:
# DictReader is header-keyed and a missing column just yields "".
ROSTER_REQUIRED_COLUMNS = ("username", "first_name", "last_name", "email", "section", "github_id", "role")

# Per-classroom roster file. Mirrors contract.RosterFilename in
# cli/shared/contract/contract.go with NO compile-time link — keep
# byte-identical.
ROSTER_FILENAME = "roster.csv"

# The exact on-disk roster.csv header. Must equal FullRosterHeader in the Go
# students_csv.go (asserted by TestFullRosterHeader) and the web app's
# STUDENT_CSV_FIELDS header — a three-way lockstep. Retained as the Python leg
# of that lockstep (the Go download-metadata join and the web writer share it),
# pinned by test_full_roster_header_matches_go_constant.
FULL_ROSTER_HEADER = ",".join(ROSTER_REQUIRED_COLUMNS)


# Top-level dispatch ----------------------------------------------------------


def main() -> int:
    base_dir = pathlib.Path(os.environ.get("GITHUB_WORKSPACE") or ".").resolve()
    classroom_filter = (os.environ.get("CLASSROOM_FILTER") or "").strip()

    org = (os.environ.get("GITHUB_REPOSITORY_OWNER") or "").strip()
    if not org:
        emit_error("GITHUB_REPOSITORY_OWNER is empty — this script must run inside a GitHub Actions workflow")
        return 1

    service_token = (os.environ.get("CLASSROOM50_SERVICE_TOKEN") or "").strip()
    if not service_token:
        emit_error("CLASSROOM50_SERVICE_TOKEN is empty — run \`gh teacher rotate-service-token <org>\` to provision it")
        return 1

    api_url = (
        os.environ.get("GH_API_URL")
        or os.environ.get("GITHUB_API_URL")
        or "https://api.github.com"
    ).rstrip("/")

    classroom_dirs = list(iter_classrooms(base_dir, classroom_filter))
    if not classroom_dirs:
        msg = f"no classrooms found in {base_dir}"
        if classroom_filter:
            msg += f" matching CLASSROOM_FILTER={classroom_filter!r}"
        print(msg)
        return 0

    total_changes = 0
    failed_classrooms: list[str] = []
    for classroom_short, classroom_meta, assignments in classroom_dirs:
        scores_path = base_dir / classroom_short / "scores.json"
        try:
            scores = load_scores(scores_path)
        except ScoresFileError as exc:
            # A malformed/hand-edited scores.json is a per-CLASSROOM data
            # problem — isolate it (like iter_classrooms does for a bad
            # classroom.json) so one broken file can't deny collection to the
            # rest. The run still exits non-zero at the end so CI surfaces it.
            emit_error(f"{classroom_short}: {exc}")
            failed_classrooms.append(classroom_short)
            continue

        # Staff-team grant is a SEPARATE, non-fatal pass: it needs Administration
        # (collection doesn't), so its failure must not abort the core job. On
        # failure, warn and mark the classroom failed (non-zero exit) but still
        # collect — here and for every later classroom.
        try:
            grant_classroom_team_access(
                api_url=api_url,
                org=org,
                classroom_short=classroom_short,
                classroom_meta=classroom_meta,
                assignments=assignments,
                service_token=service_token,
            )
        except urllib.error.HTTPError as exc:
            grant_hint = (
                f" — grant staff teams repo access needs a fine-grained PAT with "
                f"Repository -> Administration: Read and write; run "
                f"\`gh teacher rotate-service-token {org}\`"
                if exc.code in (401, 403)
                else ""
            )
            emit_error(
                f"{classroom_short}: staff-team access grant failed with HTTP "
                f"{exc.code} ({exc.reason or 'no reason'}){grant_hint}. Score "
                f"collection continues; TAs may not see student repos until this "
                f"is fixed."
            )
            failed_classrooms.append(classroom_short)

        try:
            updates, mode_flip_assignments = collect_classroom(
                api_url=api_url,
                org=org,
                classroom_short=classroom_short,
                classroom_meta=classroom_meta,
                assignments=assignments,
                service_token=service_token,
                roster_meta=load_roster_metadata(base_dir / classroom_short),
            )
        except urllib.error.HTTPError as exc:
            # Auth (401/403) and synthetic-network (599) failures on COLLECTION
            # are GLOBAL — the token can't read repos/members or GitHub is
            # unreachable, so every remaining classroom would fail identically.
            # Abort the whole run loudly rather than warn-and-skip per classroom
            # (which would report a broken run as success that collected
            # nothing). The staff-grant pass above is excluded — its
            # Administration scope isn't needed to collect.
            if exc.code in (401, 403):
                emit_error(
                    f"{classroom_short}: service token was rejected with HTTP {exc.code} "
                    f"({exc.reason or 'no reason'}) — run \`gh teacher rotate-service-token {org}\` "
                    f"with a fine-grained PAT scoped to Organization -> Members: Read (collection "
                    f"lists the classroom team's members) AND Repository -> Contents: Read and write "
                    f"(read the student repos' releases; the write scope is shared with regrade)"
                )
            else:
                emit_error(
                    f"{classroom_short}: collect failed with HTTP {exc.code} "
                    f"({exc.reason or 'no reason'})"
                )
            return 1

        # A service token that can't read the student repos returns 404 for
        # every repo (GitHub hides existence), indistinguishable from "not
        # submitted" — so collect_classroom reports the whole team as
        # unsubmitted and the run exits cleanly (the 401/403 guard never trips).
        # A non-empty assignment set yielding zero readable submissions often
        # means the team has no members yet OR the token lacks repo access.
        # Warn, don't fail: an early-term run legitimately collects zero.
        #
        # Suppress this when collect_classroom already attributed the empty
        # result to a mode flip (releases present but all rejected): that has
        # its own loud warning, and blaming the token here would misdirect.
        assignment_count = len(valid_assignment_slugs(assignments))
        if assignment_count and not updates and not mode_flip_assignments:
            emit_warning(
                f"{classroom_short}: collected 0 submissions across "
                f"{assignment_count} assignment(s). If you expected submissions, "
                f"either the classroom team has no members yet, or the "
                f"CLASSROOM50_SERVICE_TOKEN lacks read access to the student repos "
                f"(a fine-grained PAT returns 404 for repos outside its scope, which "
                f'is indistinguishable from "not submitted"). Re-scope it to all '
                f"org repos: gh teacher rotate-service-token {org}"
            )

        n_changes = apply_updates(scores, updates)
        try:
            save_scores(scores_path, scores)
        except ScoresFileError as exc:
            # Per-classroom write failure — isolate like the load failure above.
            emit_error(f"{classroom_short}: {exc}")
            failed_classrooms.append(classroom_short)
            continue

        print(f"{classroom_short}: {n_changes} updated submission(s)")
        total_changes += n_changes

    print(
        f"collect: {total_changes} total submission(s) updated across "
        f"{len(classroom_dirs)} classroom(s)"
    )
    if failed_classrooms:
        # Dedup (preserve order): a classroom can be recorded once for a
        # non-fatal staff-grant failure and again for a scores write failure.
        unique_failed = list(dict.fromkeys(failed_classrooms))
        emit_error(
            f"collect: {len(unique_failed)} classroom(s) had a failure (staff-team "
            f"grant and/or scores write): {', '.join(unique_failed)}. Score "
            f"collection ran for every classroom; a grant-only failure means TAs "
            f"may not yet have access."
        )
        return 1
    return 0


# Classroom enumeration -------------------------------------------------------


def iter_classrooms(
    base_dir: pathlib.Path, classroom_filter: str
) -> Iterable[tuple[str, dict[str, Any], dict[str, Any]]]:
    """Yield (short_name, classroom_meta, assignments) per classroom. Non-v1
    schemas skip with a workflow warning (forward-compat without crashing).

    Collection is TEAM-driven: the classroom GitHub team is the source of truth
    for enrollment, so this no longer reads the roster to decide who to poll
    (the team enumeration in collect_classroom drives the pairs). The roster
    (roster.csv) is only best-effort display metadata,
    joined onto collected results and also consumed elsewhere (the Go download
    scores.csv join and the web roster view).
    """
    if not base_dir.is_dir():
        return
    for entry in sorted(p for p in base_dir.iterdir() if p.is_dir()):
        if classroom_filter and entry.name != classroom_filter:
            continue
        classroom_path = entry / "classroom.json"
        assignments_path = entry / "assignments.json"
        if not classroom_path.is_file() or not assignments_path.is_file():
            continue
        try:
            classroom_meta = json.loads(classroom_path.read_text())
            assignments = json.loads(assignments_path.read_text())
        except (OSError, json.JSONDecodeError) as exc:
            emit_warning(f"{entry.name}: skipping (read/parse: {exc})")
            continue
        if classroom_meta.get("schema") != CLASSROOM_SCHEMA_V1:
            emit_warning(
                f"{entry.name}: classroom.json schema = "
                f"{classroom_meta.get('schema')!r}, want {CLASSROOM_SCHEMA_V1!r}; skipping"
            )
            continue
        if assignments.get("schema") != ASSIGNMENTS_SCHEMA_V1:
            emit_warning(
                f"{entry.name}: assignments.json schema = "
                f"{assignments.get('schema')!r}, want {ASSIGNMENTS_SCHEMA_V1!r}; skipping"
            )
            continue
        yield entry.name, classroom_meta, assignments


# Roster metadata (best-effort) -----------------------------------------------


def load_roster_metadata(classroom_dir: pathlib.Path) -> dict[str, dict[str, str]]:
    """Best-effort roster read for optional display metadata, keyed by
    lowercased username, from roster.csv. The classroom GitHub team — not this
    file — is authoritative for enrollment, so a missing/unreadable/malformed
    roster is NOT fatal: it just yields no metadata (blank name/section/email),
    never a crash or a dropped student.
    """
    path = classroom_dir / ROSTER_FILENAME
    if not path.is_file():
        return {}
    try:
        with path.open(newline="") as fh:
            reader = csv.DictReader(fh)
            meta: dict[str, dict[str, str]] = {}
            for row in reader:
                username = (row.get("username") or "").strip()
                if not username:
                    continue
                meta[username.lower()] = {
                    col: (row.get(col) or "").strip()
                    for col in ("first_name", "last_name", "email", "section")
                }
        return meta
    except (OSError, csv.Error):
        # Best-effort: a read/parse failure degrades to blank metadata.
        return {}


# Per-classroom collection ----------------------------------------------------


def is_empty_repo(entry: dict[str, Any]) -> bool:
    """True only when empty_repo is the boolean \`true\`. The wire contract is a
    JSON boolean (schema type "boolean"; Go decodes into a strict \`bool\`), so a
    non-boolean value from a hand-edited manifest is not empty_repo — matching
    the Go and TypeScript readers (TS uses \`=== true\`). Every Python reader
    (collect/regrade/runner) MUST use this predicate so all tools agree."""
    return entry.get("empty_repo") is True


def is_no_autograder(entry: dict[str, Any]) -> bool:
    """True only when no_autograder is the boolean \`true\` (strict, like
    is_empty_repo). A templated no_autograder assignment commits no shim, so it
    never autogrades and produces no submit/* releases — collection and regrade
    skip it exactly as they skip empty_repo. Keep byte-identical across
    collect/regrade and the autograde-runner read step so every tool agrees."""
    return entry.get("no_autograder") is True


def is_init_shim(entry: dict[str, Any]) -> bool:
    """True only when init_shim is the boolean \`true\` (strict, like
    is_empty_repo). An init_shim assignment is a template-less repo initialized
    with only the marker + default shim — it DOES autograde and produces
    submit/* releases, so unlike empty_repo/no_autograder it is NOT part of
    skips_grading(): collection and regrade treat it as a normal grading
    assignment. Provided for symmetry and tests."""
    return entry.get("init_shim") is True


def skips_grading(entry: dict[str, Any]) -> bool:
    """True when the assignment never autogrades — either a bare empty_repo or a
    templated no_autograder (teacher-supplied CI). The "does not autograde"
    predicate family; collection/regrade poll neither. NOTE: init_shim is
    deliberately EXCLUDED — an init_shim repo commits the default shim and
    autogrades, so it must be collected/regraded like any built-in assignment."""
    return is_empty_repo(entry) or is_no_autograder(entry)


def valid_assignment_slugs(assignments: dict[str, Any]) -> list[str]:
    """Slugs worth collecting: non-empty strings, in manifest order, excluding
    assignments that never autograde (empty_repo or no_autograder — their repos
    produce no submit/* releases, so polling them would only produce dead
    gradebook rows). main()'s zero-submission guard counts these; the collect
    loop applies the same predicate inline (it also needs each entry's \`due\`),
    so both agree on what counts as collectable."""
    slugs: list[str] = []
    for entry in assignments.get("assignments") or []:
        slug = entry.get("slug")
        if isinstance(slug, str) and slug and not skips_grading(entry):
            slugs.append(slug)
    return slugs


def all_assignment_slugs(assignments: dict[str, Any]) -> list[str]:
    """Every valid slug including assignments that never autograde (empty_repo
    or no_autograder). Staff access grants use this instead of
    valid_assignment_slugs: these repos never autograde, but TAs still need read
    on them to review the student-built work."""
    slugs: list[str] = []
    for entry in assignments.get("assignments") or []:
        slug = entry.get("slug")
        if isinstance(slug, str) and slug:
            slugs.append(slug)
    return slugs


def list_enrolled_logins(
    api_url: str,
    org: str,
    classroom_meta: dict[str, Any],
    classroom_short: str,
    service_token: str,
) -> tuple[list[str], set[str]]:
    """Return (polled logins, student logins). The first is the case-insensitive
    dedup union of the student team and every staff team's members, first-seen
    order/casing preserved (student team first). The second is the lowercased
    set of STUDENT-team logins — used only so the per-assignment "X of Y
    submitted" denominator counts students (expected to submit) rather than
    every staffer polled (a non-accepting TA is a tester, not missing work).

    Collection polls staff (teacher/hta/ta) too so a staff member testing an
    assignment is graded like a student — but only when they've ACCEPTED: a
    staff member with no \`<classroom>-<assignment>-<username>\` repo returns no
    releases and so produces no entry (the accepted gate falls out of the
    per-repo poll; no explicit staff check is needed). A staff member on no
    team, or one who never accepted, never appears.

    A hard auth/network error (401/403/599) propagates so main() aborts; a soft
    per-team failure (e.g. a 404 on an uncreated staff team) is warned and that
    team contributes nobody, matching how the staff-grant pass tolerates a
    missing team."""
    student_slug = resolve_team_slug(classroom_meta, classroom_short)
    # Student team first so its casing wins in the dedup (the repo-name formula
    # lowercases anyway, so casing is cosmetic — but keep it deterministic).
    student_logins = list_team_member_logins(api_url, org, student_slug, service_token)
    logins = list(student_logins)
    for role, staff_slug in resolve_staff_team_slugs(classroom_meta).items():
        try:
            logins.extend(
                list_team_member_logins(api_url, org, staff_slug, service_token)
            )
        except urllib.error.HTTPError as exc:
            if is_hard_http_error(exc):
                raise
            emit_warning(
                f"{classroom_short}: could not read staff team {staff_slug!r} "
                f"({role}) members: HTTP {exc.code} ({exc.reason or 'no reason'}); "
                f"skipping that team's members for collection."
            )
        except (json.JSONDecodeError, ValueError) as exc:
            emit_warning(
                f"{classroom_short}: staff team {staff_slug!r} ({role}) member "
                f"listing malformed ({exc}); skipping that team's members."
            )
    return _dedupe_logins(logins), {u.strip().lower() for u in student_logins}


def collect_classroom(
    *,
    api_url: str,
    org: str,
    classroom_short: str,
    classroom_meta: dict[str, Any],
    assignments: dict[str, Any],
    service_token: str,
    roster_meta: dict[str, dict[str, str]] | None = None,
) -> tuple[list[dict[str, Any]], int]:
    """Return (validated result payloads for every (student, assignment) pair,
    count of assignments whose only submissions were rejected by validation).
    Per-repo failures warn and skip; hard failures (auth 401/403; network 599)
    propagate and main() converts them to exit 1. The second tuple element lets
    main() distinguish a mode-flip-induced empty result (which has its own loud
    warning) from a token-access problem.

    \`roster_meta\` is the best-effort roster join (username -> display metadata,
    see load_roster_metadata); when a collected owner has a matching row its
    name/section/email are attached to the entry. Absent/blank is fine — the
    join never gates collection.
    """
    roster_meta = roster_meta or {}
    results: list[dict[str, Any]] = []
    group_attribution_degraded = 0
    # (assignment) buckets where every present submission was rejected by
    # validation (the mode-flip symptom). Returned so main() can suppress its
    # "rotate token" heuristic, which would otherwise misread this as a
    # token-access problem.
    mode_flip_assignments = 0

    # Team-driven username source: the classroom GitHub teams are authoritative
    # for enrollment. The roster (roster.csv) is only
    # best-effort display metadata, so the (username, assignment) pairs come
    # from the team member lists, NOT the CSV. The set is the union of the
    # STUDENT team and every STAFF team (teacher/hta/ta) so a staff member who
    # accepted an assignment (to test the autograde flow) is collected like a
    # student — staff who never accepted have no repo, hence no releases, hence
    # no entry (the accepted gate is implicit in the per-repo poll). A 404
    # (student team missing) or empty union yields no pairs (warn + return). A
    # hard auth/network error propagates so main() aborts the whole run loudly.
    team_slug = resolve_team_slug(classroom_meta, classroom_short)
    try:
        team_usernames, student_logins = list_enrolled_logins(
            api_url, org, classroom_meta, classroom_short, service_token
        )
    except urllib.error.HTTPError as exc:
        if is_hard_http_error(exc):
            raise
        emit_warning(
            f"{classroom_short}: could not read team {team_slug!r} members: "
            f"HTTP {exc.code} ({exc.reason or 'no reason'}); skipping collection for "
            f"this classroom. Ensure CLASSROOM50_SERVICE_TOKEN has Organization -> "
            f"Members: Read (a fine-grained PAT permission) — rotate it with "
            f"\`gh teacher rotate-service-token {org}\`."
        )
        return results, mode_flip_assignments
    except (json.JSONDecodeError, ValueError) as exc:
        emit_warning(
            f"{classroom_short}: team {team_slug!r} member listing malformed "
            f"({exc}); skipping collection for this classroom."
        )
        return results, mode_flip_assignments

    if not team_usernames:
        emit_warning(
            f"{classroom_short}: teams {team_slug!r} (and staff teams) have no "
            f"members — no (username, assignment) pairs to poll; skipping."
        )
        return results, mode_flip_assignments

    # Group attribution credits a collaborator only if on a classroom team
    # (owner always credited) — same trust model, team-sourced set. Staff are in
    # the union, so a staff collaborator on a group repo can be credited too.
    roster_logins = {u.lower() for u in team_usernames}
    for entry in assignments.get("assignments") or []:
        slug = entry.get("slug")
        if not isinstance(slug, str) or not slug:
            continue
        # Assignments that never autograde (empty_repo or no_autograder) —
        # same predicate as valid_assignment_slugs, kept in lockstep.
        if skips_grading(entry):
            reason = "empty_repo" if is_empty_repo(entry) else "no_autograder"
            print(
                f"{classroom_short}/{slug}: {reason} assignment — autograding "
                f"is disabled; skipping collection"
            )
            continue

        due_raw = entry.get("due")
        due = parse_rfc3339(due_raw) if due_raw else None
        if due_raw and due is None:
            emit_warning(
                f"{classroom_short}/{slug}: due = {due_raw!r} is not an RFC 3339 "
                f"timestamp with timezone; skipping late-marking for this assignment"
            )

        is_group = (entry.get("mode") or "").lower() == "group"
        assignment_type = "group" if is_group else "individual"

        submitted = 0
        # Staff (non-student-team) members who actually submitted this
        # assignment. They count toward the "X of Y" denominator only when they
        # submitted — a non-accepting staffer is a tester, not missing work, so
        # counting every polled staffer in Y would understate student coverage.
        staff_submitted = 0
        # Repos under THIS assignment whose only submissions were rejected by
        # validation (mode-flip symptom); reported once per assignment below.
        mode_flip_repos: list[str] = []
        for username in team_usernames:
            repo_name = assignment_repo_name(classroom_short, slug, username)

            try:
                releases = all_submit_releases(api_url, org, repo_name, service_token)
            except urllib.error.HTTPError as exc:
                if is_hard_http_error(exc):
                    raise
                emit_warning(
                    f"{org}/{repo_name}: release listing failed: HTTP {exc.code} "
                    f"({exc.reason or 'no reason'}); skipping"
                )
                continue
            except (json.JSONDecodeError, ValueError) as exc:
                emit_warning(f"{org}/{repo_name}: release listing malformed ({exc}); skipping")
                continue
            if not releases:
                # Student hasn't submitted/accepted/finished grading. Individual
                # misses are quiet; the per-assignment summary reports the gap.
                continue

            # Collect EVERY submission, newest first. Each release's result.json
            # is downloaded and validated independently; a single bad/missing one
            # warns and is skipped without dropping the others. \`validation_rejected\`
            # counts releases present and downloaded but FAILED validate_result
            # (the mode-flip / identity-mismatch symptom) — kept distinct from a
            # benign download error or missing asset, so the "mode flipped"
            # warning below only fires on the real symptom.
            history: list[dict[str, Any]] = []
            validation_rejected = 0
            for release in releases:
                try:
                    candidate = download_result_asset(api_url, release, service_token)
                except urllib.error.HTTPError as exc:
                    if is_hard_http_error(exc):
                        raise
                    emit_warning(
                        f"{org}/{repo_name}: result.json download failed for "
                        f"{release.get('tag_name')!r}: HTTP {exc.code} "
                        f"({exc.reason or 'no reason'}); skipping that submission"
                    )
                    continue
                except AssetMissingError as exc:
                    emit_warning(
                        f"{org}/{repo_name}: {release.get('tag_name')!r}: {exc}; "
                        f"skipping that submission"
                    )
                    continue
                except (json.JSONDecodeError, ValueError) as exc:
                    emit_warning(
                        f"{org}/{repo_name}: result.json malformed for "
                        f"{release.get('tag_name')!r} ({exc}); skipping that submission"
                    )
                    continue

                # validate_result enforces identity (owner == repo owner) AND
                # that \`assignment_type\` matches the manifest mode (is_group), so
                # a mode-flipped or mis-typed result is rejected here — no
                # separate assignment_type cross-check needed afterward.
                try:
                    validate_result(candidate, classroom_short, slug, username, is_group=is_group)
                except ValueError as exc:
                    emit_warning(
                        f"{org}/{repo_name}: invalid result.json for "
                        f"{release.get('tag_name')!r} ({exc}); skipping that submission"
                    )
                    validation_rejected += 1
                    continue

                # Lateness is advisory, marked per submission on the record
                # itself (each carries its own datetime).
                if due is not None and not mark_late(candidate, due):
                    emit_warning(
                        f"{org}/{repo_name}: result.json datetime = "
                        f"{candidate.get('datetime')!r} is not an RFC 3339 timestamp; "
                        f"cannot mark lateness"
                    )
                # The stored record is the validated payload minus the bucket-key
                # \`assignment\`. Keeps result/v1 shape: owner + assignment_type +
                # submitted_by, no usernames.
                history.append({k: v for k, v in candidate.items() if k != "assignment"})

            if not history:
                # The repo had submit-tag releases but no creditable history.
                # When releases were rejected specifically by validation (not a
                # missing asset / transient download error), that's the symptom
                # of an assignment whose \`mode\` was switched individual<->group
                # mid-term: every prior release's assignment_type now mismatches
                # and is rejected, silently reverting graded students to "not
                # submitted". Count it for the consolidated warning below (rather
                # than one per repo), and so main() can distinguish this from a
                # token-access problem. A benign asset-missing / transient repo
                # does NOT count here.
                if validation_rejected:
                    mode_flip_repos.append(repo_name)
                continue

            # Group attribution: the runner emits owner-only (it can't read
            # collaborators). Collection is authoritative — list the repo's
            # collaborators intersected with the roster and credit them all via
            # \`member_usernames\`. On a read failure, force owner-only (never
            # trust student-supplied data) and warn, so a scope/transient issue
            # degrades gracefully. Individual entries carry no member list.
            # Resolved BEFORE building the entry so \`member_usernames\` sits
            # right after \`owner\` in the written JSON key order.
            members: list[str] | None = None
            if is_group:
                members, degraded_warning = attribute_group_members(
                    api_url, org, repo_name, username, service_token, roster_logins
                )
                if degraded_warning is not None:
                    group_attribution_degraded += 1
                    emit_warning(degraded_warning)
                elif len(members) == 1:
                    # Read succeeded but credited only the owner — no other
                    # rostered collaborator found. Often expected (a solo group
                    # submission), but also the symptom of a real misconfig
                    # (teammates not on the roster, or not added as
                    # collaborators), which would otherwise be silent.
                    emit_warning(
                        f"{org}/{repo_name}: group submission credited to the owner "
                        f"{username!r} only — no other team member is a collaborator "
                        f"on the repo. If this is a team submission, ensure each teammate "
                        f"is on the {classroom_short} classroom team AND a collaborator on "
                        f"the repo (added via \`gh student invite\`)."
                    )

            # Build the gradebook entry: identity/keying at the top, the full
            # per-submission detail ONLY inside \`submissions\` (newest first).
            # \`owner\` is the stable per-bucket key (repo owner from the
            # <classroom>-<assignment>-<username> formula), invariant across
            # re-collects even when a group's member set changes, so apply_updates
            # replaces the entry in place. For a group entry \`member_usernames\`
            # sits right after \`owner\`. \`_assignment\` / \`_type\` are transport-only
            # hints for apply_updates (bucket slug + type), stripped on store.
            entry_row: dict[str, Any] = {
                "_assignment": slug,
                "_type": assignment_type,
                "owner": username,
            }
            if members is not None:
                entry_row["member_usernames"] = list(members)
            # Best-effort roster join: attach non-blank display metadata for the
            # owner when the roster carries a row. Missing/blank is fine (the
            # team, not the roster, drives enrollment).
            meta = roster_meta.get(username.lower())
            if meta:
                for field in ("first_name", "last_name", "email", "section"):
                    value = meta.get(field)
                    if value:
                        entry_row[field] = value
            entry_row["submissions"] = history

            results.append(entry_row)
            submitted += 1
            if username.strip().lower() not in student_logins:
                staff_submitted += 1

        # Denominator: students (expected to submit) + staff who actually
        # submitted. Non-accepting staff (polled but no repo) are excluded so
        # the coverage line reads as student coverage, not inflated by testers.
        expected = len(student_logins) + staff_submitted
        print(f"{classroom_short}/{slug}: {submitted}/{expected} submitted")

        if mode_flip_repos:
            mode_flip_assignments += 1
            emit_warning(
                f"{classroom_short}/{slug}: {len(mode_flip_repos)} repo(s) had submit-tag "
                f"release(s) but NONE were creditable — every present submission was rejected "
                f"by validation. This is the symptom of switching this assignment's mode "
                f"(individual<->group): prior submissions' assignment_type no longer matches "
                f"{assignment_type!r}, so affected students show as not-submitted until they "
                f"re-submit under the new mode. Affected repos: "
                f"{', '.join(sorted(mode_flip_repos))}."
            )

    if group_attribution_degraded:
        emit_warning(
            f"{classroom_short}: {group_attribution_degraded} group submission(s) "
            f"credited to the repo owner only because the collaborator read failed "
            f"(teammates not credited). This usually means CLASSROOM50_SERVICE_TOKEN "
            f"lacks the collaborator-read permission — rotate it with \`gh teacher rotate-service-token\`."
        )

    return results, mode_flip_assignments


def assignment_repo_name(classroom: str, assignment: str, username: str) -> str:
    """Canonical student-repo name. Mirrors the formula single-sourced in
    cli/shared/contract (AssignmentRepoName); keep byte-identical or the
    collect loop misidentifies submissions."""
    return f"{classroom.lower()}-{assignment.lower()}-{username.lower()}"


def resolve_team_slug(classroom_meta: dict[str, Any], classroom_short: str) -> str:
    """The classroom's GitHub team slug: persisted classroom.json \`team.slug\`
    when present (authoritative — GitHub may re-slug on a name collision, e.g.
    \`classroom50-cs-1\`), else the derived \`classroom50-<short>\`. Mirrors the web
    app's resolveClassroomTeam and Go's ResolveClassroomTeam so all three target
    the same team."""
    team = classroom_meta.get("team")
    if isinstance(team, dict):
        slug = team.get("slug")
        if isinstance(slug, str) and slug.strip():
            return slug.strip()
    return f"classroom50-{classroom_short}"


def resolve_staff_team_slugs(classroom_meta: dict[str, Any]) -> dict[str, str]:
    """Map each staff role present in classroom.json \`teams\` to its authoritative
    slug (role -> slug). Only roles with a non-empty slug are returned; a
    classroom with no \`teams\` block yields {}. The slug is authoritative — never
    re-derived — mirroring resolve_team_slug's contract for the student team."""
    teams = classroom_meta.get("teams")
    if not isinstance(teams, dict):
        return {}
    out: dict[str, str] = {}
    for role, ref in teams.items():
        if not isinstance(ref, dict):
            continue
        slug = ref.get("slug")
        if isinstance(slug, str) and slug.strip():
            out[role] = slug.strip()
    return out


def get_repo(api_url: str, owner: str, repo: str, token: str) -> dict[str, Any] | None:
    """GET /repos/{owner}/{repo} → the repo object, or None on 404. Used to read
    a template's \`private\` flag before granting a staff team access to it. A hard
    error (401/403/599) propagates so main() aborts."""
    url = (
        f"{api_url}/repos/{urllib.parse.quote(owner, safe='')}/"
        f"{urllib.parse.quote(repo, safe='')}"
    )
    try:
        body = _http_get(url, token, accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return None
        raise
    parsed = json.loads(body.decode("utf-8"))
    return parsed if isinstance(parsed, dict) else None


def assignment_template_ref(entry: dict[str, Any]) -> tuple[str, str] | None:
    """(owner, repo) of an assignment's \`template\` block, or None when absent or
    malformed. Mirrors the \`template\` shape in assignments-v1 ({owner, repo,
    branch})."""
    template = entry.get("template")
    if not isinstance(template, dict):
        return None
    owner = template.get("owner")
    repo = template.get("repo")
    if isinstance(owner, str) and owner and isinstance(repo, str) and repo:
        return owner, repo
    return None


def grant_classroom_team_access(
    *,
    api_url: str,
    org: str,
    classroom_short: str,
    classroom_meta: dict[str, Any],
    assignments: dict[str, Any],
    service_token: str,
) -> None:
    """Grant each classroom staff team its mapped repo permission (see
    STAFF_TEAM_PERMISSIONS) on every EXISTING student assignment repo and on each
    private, in-org assignment template. Additive + idempotent, so re-running
    collection re-affirms access cheaply.

    Student-repo targets are the (team member × assignment) product — the same
    set collect_classroom polls. A per-repo 404/422 (repo not accepted yet, or
    template not org-owned) is warned-and-skipped; a hard error (401/403/599)
    propagates so main() aborts. A classroom with no mapped staff team is a no-op.
    """
    role_slugs = resolve_staff_team_slugs(classroom_meta)
    grant_slugs = {
        role: (slug, STAFF_TEAM_PERMISSIONS[role])
        for role, slug in role_slugs.items()
        if role in STAFF_TEAM_PERMISSIONS
    }
    if not grant_slugs:
        return

    # ALL slugs, not just the collectable subset: empty_repo assignments are
    # skipped by collection but their student repos still exist and staff
    # still need access to review them.
    slugs = all_assignment_slugs(assignments)
    if not slugs:
        return

    student_team_slug = resolve_team_slug(classroom_meta, classroom_short)
    try:
        team_logins = list_team_member_logins(api_url, org, student_team_slug, service_token)
    except urllib.error.HTTPError as exc:
        if is_hard_http_error(exc):
            raise
        emit_warning(
            f"{classroom_short}: could not read team {student_team_slug!r} members for "
            f"staff-access grant: HTTP {exc.code} ({exc.reason or 'no reason'}); skipping grant."
        )
        return
    except (json.JSONDecodeError, ValueError) as exc:
        emit_warning(
            f"{classroom_short}: team {student_team_slug!r} member listing malformed "
            f"({exc}); skipping staff-access grant."
        )
        return

    usernames = _dedupe_logins(team_logins)

    # Grant on each existing student repo (the team × assignment product).
    for role, (team_slug, permission) in grant_slugs.items():
        granted = 0
        for slug in slugs:
            for username in usernames:
                repo_name = assignment_repo_name(classroom_short, slug, username)
                try:
                    if grant_team_repo(
                        api_url, org, team_slug, org, repo_name, permission, service_token
                    ):
                        granted += 1
                except urllib.error.HTTPError as exc:
                    if is_hard_http_error(exc):
                        raise
                    # 404 = repo not accepted yet; 422 = not org-owned. Neither is
                    # a token problem — skip that repo.
                    emit_warning(
                        f"{org}/{repo_name}: could not grant {team_slug!r} {permission}: "
                        f"HTTP {exc.code} ({exc.reason or 'no reason'}); skipping"
                    )

        # Grant on each private, in-org template (starter code the staff team
        # should also be able to read). Public and out-of-org templates are
        # skipped: a public template needs no grant, and an out-of-org private
        # template can't be granted to this org's team.
        for entry in assignments.get("assignments") or []:
            ref = assignment_template_ref(entry) if isinstance(entry, dict) else None
            if ref is None:
                continue
            t_owner, t_repo = ref
            if t_owner.lower() != org.lower():
                continue
            try:
                repo = get_repo(api_url, t_owner, t_repo, service_token)
            except urllib.error.HTTPError as exc:
                if is_hard_http_error(exc):
                    raise
                emit_warning(
                    f"{t_owner}/{t_repo}: could not read template for {team_slug!r} grant: "
                    f"HTTP {exc.code} ({exc.reason or 'no reason'}); skipping"
                )
                continue
            if repo is None or not repo.get("private"):
                continue
            try:
                if grant_team_repo(
                    api_url, org, team_slug, t_owner, t_repo, permission, service_token
                ):
                    granted += 1
            except urllib.error.HTTPError as exc:
                if is_hard_http_error(exc):
                    raise
                emit_warning(
                    f"{t_owner}/{t_repo}: could not grant {team_slug!r} {permission}: "
                    f"HTTP {exc.code} ({exc.reason or 'no reason'}); skipping"
                )

        if granted:
            print(f"{classroom_short}: granted {team_slug} {permission} on {granted} repo(s)")


def _dedupe_logins(logins: list[str]) -> list[str]:
    """Case-insensitive dedupe of team logins, preserving first-seen order and
    casing. Same normalization collect_classroom applies to its team roster."""
    seen: set[str] = set()
    out: list[str] = []
    for login in logins:
        key = login.strip().lower()
        if not key or key in seen:
            continue
        seen.add(key)
        out.append(login.strip())
    return out


# Due-date / lateness ---------------------------------------------------------


def parse_rfc3339(value: Any) -> datetime.datetime | None:
    """Parse an RFC 3339 timestamp into an aware datetime, or None when it
    isn't one (non-string, unparseable, or missing a timezone offset). Naive
    timestamps are rejected rather than guessed — lateness is a cross-timezone
    comparison, so an ambiguous wall-clock time must not silently pick one.
    """
    if not isinstance(value, str) or not value:
        return None
    if not RFC3339_RE.fullmatch(value):
        return None
    try:
        parsed = datetime.datetime.fromisoformat(value)
    except ValueError:
        return None
    if parsed.tzinfo is None:
        return None
    return parsed


def mark_late(payload: dict[str, Any], due: datetime.datetime) -> bool:
    """Set payload["late"] by comparing the runner's submission \`datetime\`
    against the assignment's due date. Submitting exactly at the deadline is on
    time. Returns False — leaving the payload unmarked — when the timestamp
    doesn't parse; lateness is advisory and must never drop a submission.
    """
    submitted = parse_rfc3339(payload.get("datetime"))
    if submitted is None:
        return False
    payload["late"] = submitted > due
    return True


# scores.json read / write ----------------------------------------------------


class ScoresFileError(Exception):
    """Raised on a malformed scores.json or a write that can't be persisted."""


class AssetMissingError(Exception):
    """Raised when the latest submit release has no result.json asset."""


def strict_json_loads(raw: str) -> Any:
    """Parse JSON rejecting NaN/Infinity. Python's json accepts them by default
    but Go's encoding/json doesn't, and scores.json is read by both.
    """

    def reject_constant(value: str) -> None:
        raise ValueError(f"non-finite JSON number {value!r} is not allowed")

    return json.loads(raw, parse_constant=reject_constant)


def load_scores(path: pathlib.Path) -> dict[str, Any]:
    """Read scores.json. Missing or empty returns the v1 skeleton. Malformed
    raises so the workflow fails instead of overwriting the teacher's work.

    \`assignments\` must be the canonical object keyed by slug, each value an
    object \`{ "type": ..., "entries": [...] }\`. Legacy shapes are not migrated
    (see normalize_assignments) — a non-canonical file hard-fails.
    """
    if not path.is_file():
        return {"schema": SCORES_SCHEMA_V1, "assignments": {}}
    try:
        raw = path.read_text()
    except OSError as exc:
        raise ScoresFileError(f"{path}: read failed: {exc}") from exc
    if not raw.strip():
        return {"schema": SCORES_SCHEMA_V1, "assignments": {}}
    try:
        scores = strict_json_loads(raw)
    except (json.JSONDecodeError, ValueError) as exc:
        raise ScoresFileError(f"{path}: malformed JSON ({exc})") from exc
    if not isinstance(scores, dict):
        raise ScoresFileError(f"{path}: top-level value must be an object, got {type(scores).__name__}")
    if scores.get("schema") != SCORES_SCHEMA_V1:
        raise ScoresFileError(
            f"{path}: schema = {scores.get('schema')!r}, want {SCORES_SCHEMA_V1!r}"
        )
    try:
        scores["assignments"] = normalize_assignments(scores.get("assignments"))
    except ValueError as exc:
        raise ScoresFileError(f"{path}: {exc}") from exc
    # Drop the legacy root field if a hand-edit left it — \`assignments\` is
    # authoritative.
    scores.pop("submissions", None)
    return scores


def normalize_assignments(assignments: Any) -> dict[str, dict[str, Any]]:
    """Validate the \`assignments\` field as the canonical slug-keyed map.
    Accepted: None/missing -> {}; object -> each value an object
    \`{ "type": <"individual"|"group">, "entries": [...] }\`.

    Anything else hard-fails. Legacy shapes (flat array, "{}" string wrapper,
    the old \`submissions\`-keyed map) are NOT migrated — backward compat is
    intentionally dropped, so a non-canonical file fails loudly.
    """
    if assignments is None:
        return {}
    if not isinstance(assignments, dict):
        raise ValueError(
            f"assignments field must be an object keyed by assignment slug, "
            f"got {type(assignments).__name__}"
        )
    normalized: dict[str, dict[str, Any]] = {}
    for slug, bucket in assignments.items():
        if not isinstance(bucket, dict):
            raise ValueError(
                f"assignments[{slug!r}] must be an object {{type, entries}}, "
                f"got {type(bucket).__name__}"
            )
        atype = bucket.get("type")
        if atype not in ("individual", "group"):
            raise ValueError(
                f"assignments[{slug!r}].type must be 'individual' or 'group', got {atype!r}"
            )
        entries = bucket.get("entries")
        if entries is None:
            entries = []
        elif not isinstance(entries, list):
            raise ValueError(
                f"assignments[{slug!r}].entries must be a list, got {type(entries).__name__}"
            )
        normalized[slug] = {"type": atype, "entries": entries}
    return normalized


def save_scores(path: pathlib.Path, scores: dict[str, Any]) -> None:
    """Atomic write: encode → parse-back sanity check → tmp + replace.
    On any exception the original is untouched and the tmp is removed.
    """
    path.parent.mkdir(parents=True, exist_ok=True)
    try:
        payload = json.dumps(scores, indent=2, allow_nan=False) + "\\n"
    except ValueError as exc:
        raise ScoresFileError(f"{path}: encode failed: {exc}") from exc
    # Re-parse to catch silent corruption (e.g., NaN in a score) before touching
    # the destination file.
    strict_json_loads(payload)
    tmp_path = path.with_name(path.name + ".tmp")
    try:
        tmp_path.write_text(payload)
        os.replace(tmp_path, path)
    except OSError as exc:
        # Clean up the tmp so a retry doesn't trip over a stale .tmp.
        try:
            tmp_path.unlink(missing_ok=True)
        except OSError:
            pass
        raise ScoresFileError(f"{path}: atomic write failed: {exc}") from exc


# Upsert / override-respect ---------------------------------------------------


def apply_updates(scores: dict[str, Any], updates: Iterable[dict[str, Any]]) -> int:
    """Merge incoming gradebook entries into the slug-keyed
    \`scores["assignments"]\` map; return the number of entries added or replaced.
    Each incoming entry carries transport hints \`_assignment\` (bucket slug) and
    \`_type\` (mode), plus the canonical fields (\`owner\`, optional
    \`member_usernames\`, \`submissions[]\`). The hints are stripped before storage
    (entry_from_result).

    Each bucket is \`{ "type": ..., "entries": [...] }\`. Existing entries with
    \`"override": true\` are preserved verbatim. Entries within a bucket are keyed
    by the repo OWNER (\`row_key\`), invariant for a repo — so a group entry whose
    member set changes between collects REPLACES its prior entry instead of
    orphaning it and appending a duplicate. Entries without an \`owner\` are not
    keyable and are skipped — no legacy migration.
    """
    assignments: dict[str, Any] = scores["assignments"]
    # Per-bucket index: assignment slug -> {row_key: entry index}.
    index: dict[str, dict[str, int]] = {}
    for slug, bucket in assignments.items():
        bucket_index: dict[str, int] = {}
        for i, ent in enumerate(bucket.get("entries", [])):
            if not isinstance(ent, dict):
                continue
            key = row_key(ent)
            if key is not None:
                bucket_index[key] = i
        index[slug] = bucket_index

    changes = 0
    for update in updates:
        slug = update.get("_assignment")
        atype = update.get("_type")
        key = row_key(update)
        # Require a valid slug, valid bucket type, and a keyable owner.
        # Validating \`atype\` here (not just below) means a missing/garbage
        # \`_type\` can never be persisted as a new bucket's \`type\` via
        # setdefault. Collection always supplies a valid type; defensive.
        if (
            not isinstance(slug, str) or not slug
            or atype not in ("individual", "group")
            or key is None
        ):
            continue
        entry = entry_from_result(update)
        bucket = assignments.setdefault(slug, {"type": atype, "entries": []})
        # Keep the bucket type in sync with the manifest-derived type.
        bucket["type"] = atype
        bucket.setdefault("entries", [])
        entries = bucket["entries"]
        bucket_index = index.setdefault(slug, {})
        idx = bucket_index.get(key)
        if idx is None:
            entries.append(entry)
            bucket_index[key] = len(entries) - 1
            changes += 1
            continue

        existing = entries[idx]
        if existing.get("override") is True:
            continue
        if same_submission(existing, entry):
            continue
        # A group re-collect that drops a previously-credited member (e.g., a
        # teammate who left the classroom team but is still a repo collaborator)
        # replaces the entry in place, silently revoking their shared credit.
        # The owner-only warning in collect_classroom only fires on collapse to
        # just the owner; a shrink still leaving >=2 members would be invisible.
        # Surface any dropped member so the teacher can confirm.
        dropped = _dropped_group_members(existing, entry)
        if dropped:
            emit_warning(
                f"{slug}: group entry owned by {row_key(entry)!r} lost previously-"
                f"credited member(s) {', '.join(sorted(dropped))} on re-collect. A "
                f"teammate is credited only while on the classroom team; verify the "
                f"drop is intended (e.g., an unenrollment) and not a team-vs-roster "
                f"divergence, since the shared score is now revoked for them."
            )
        # Preserve an explicit "override": false on replacement — the teacher's
        # "I reviewed this, keep refreshing" signal.
        if "override" in existing and "override" not in entry:
            entry = dict(entry)
            entry["override"] = existing["override"]
        entries[idx] = entry
        changes += 1
    return changes


def _dropped_group_members(
    existing: dict[str, Any], incoming: dict[str, Any]
) -> set[str]:
    """Members credited on the existing group entry but absent from the incoming
    one (case-insensitive), i.e., teammates whose shared credit a re-collect
    would silently revoke. Empty for individual entries or when the credited set
    didn't shrink."""
    def credited(entry: dict[str, Any]) -> set[str]:
        members = entry.get("member_usernames")
        if not isinstance(members, list):
            return set()
        return {
            m.strip().lower()
            for m in members
            if isinstance(m, str) and m.strip()
        }

    return credited(existing) - credited(incoming)


def entry_from_result(payload: dict[str, Any]) -> dict[str, Any]:
    """The stored gradebook entry, minus the transport-only hints.

    An entry is the shape collection builds: identity/keying at the top
    (\`owner\`, optional \`member_usernames\` for group) and the full per-submission
    detail inside \`submissions\` (newest first). The \`_assignment\` and \`_type\`
    hints drive bucket placement in apply_updates and are dropped here.
    """
    return {k: v for k, v in payload.items() if k not in ("_assignment", "_type")}


def row_key(record: dict[str, Any]) -> str | None:
    """The stable per-bucket key: the repo OWNER login, lowercased.

    Requires the explicit \`owner\` field (set by collection from the repo-name
    formula). Returns None when \`owner\` is missing or not a non-empty string —
    such a record is unkeyable and apply_updates skips it. No sole-username
    fallback and no legacy migration: every canonical row carries \`owner\`.

    Keying on the owner — not the credited \`usernames\` set — is what makes a
    group re-collect replace its row instead of duplicating it when the member
    set changes.

    Cross-binary tie: the owner is the \`<username>\` of the
    \`<classroom>-<assignment>-<username>\` repo-name formula (see
    \`assignment_repo_name\` here and \`assignmentRepoName\` in
    cli/gh-student/accept.go); persisted as the row \`owner\` field, which
    download.go reads tolerantly (rows decode as map[string]any).
    """
    owner = record.get("owner")
    if isinstance(owner, str) and owner:
        return owner.lower()
    return None


def same_submission(a: dict[str, Any], b: dict[str, Any]) -> bool:
    """Field-equal comparison ignoring \`override\` (collect-side only)."""
    a_copy = {k: v for k, v in a.items() if k != "override"}
    b_copy = {k: v for k, v in b.items() if k != "override"}
    return a_copy == b_copy


# Result schema validation ----------------------------------------------------


_REQUIRED_STR_FIELDS = ("submission", "commit", "release", "review", "datetime")


def validate_result(
    payload: Any,
    expected_classroom: str,
    expected_assignment: str,
    expected_username: str,
    *,
    is_group: bool = False,
) -> None:
    """Raise ValueError if the payload fails the v1 contract. The
    classroom/assignment/owner checks defend against a hostile result.json
    trying to land in someone else's scores.json — the triple must match the
    source repo's expected identity.

    \`owner\` (repo owner, the identity anchor) must equal \`expected_username\`
    (the roster/repo-name-derived owner). \`assignment_type\` must be
    "individual"/"group" and match the mode implied by \`is_group\`. No
    \`usernames\` field: who pushed is \`submitted_by\`; the credited member list
    is resolved by collection after this check.
    """
    if not isinstance(payload, dict):
        raise ValueError(f"top-level value must be an object, got {type(payload).__name__}")
    if payload.get("schema") != RESULT_SCHEMA_V1:
        raise ValueError(f"schema = {payload.get('schema')!r}, want {RESULT_SCHEMA_V1!r}")

    classroom = payload.get("classroom")
    if classroom != expected_classroom:
        raise ValueError(f"classroom = {classroom!r}, want {expected_classroom!r}")

    assignment = payload.get("assignment")
    if assignment != expected_assignment:
        raise ValueError(f"assignment = {assignment!r}, want {expected_assignment!r}")

    owner = payload.get("owner")
    if not isinstance(owner, str) or not owner:
        raise ValueError(f"owner must be a non-empty string, got {owner!r}")
    if owner.lower() != expected_username.lower():
        raise ValueError(
            f"owner = {owner!r}, want {expected_username!r} (derived from the repo name)"
        )

    expected_type = "group" if is_group else "individual"
    assignment_type = payload.get("assignment_type")
    if assignment_type != expected_type:
        raise ValueError(
            f"assignment_type = {assignment_type!r}, want {expected_type!r}"
        )

    submission = payload.get("submission")
    if not isinstance(submission, str) or not submission.startswith(SUBMIT_TAG_PREFIX):
        raise ValueError(f"submission must start with {SUBMIT_TAG_PREFIX!r}, got {submission!r}")

    for field in _REQUIRED_STR_FIELDS:
        value = payload.get(field)
        if not isinstance(value, str) or not value:
            raise ValueError(f"{field} must be a non-empty string, got {value!r}")

    score = payload.get("score")
    max_score = payload.get("max-score")
    if not isinstance(score, int) or isinstance(score, bool) or score < 0:
        raise ValueError(f"score must be a non-negative integer, got {score!r}")
    if not isinstance(max_score, int) or isinstance(max_score, bool) or max_score < 0:
        raise ValueError(f"max-score must be a non-negative integer, got {max_score!r}")
    if score > max_score:
        raise ValueError(f"score ({score}) > max-score ({max_score})")

    tests = payload.get("tests")
    if not isinstance(tests, list):
        raise ValueError(f"tests must be a list, got {type(tests).__name__}")
    for i, test in enumerate(tests):
        if not isinstance(test, dict):
            raise ValueError(f"tests[{i}] must be an object, got {type(test).__name__}")
        if not isinstance(test.get("test-name"), str) or not test["test-name"]:
            raise ValueError(f"tests[{i}].test-name must be a non-empty string")
        if not isinstance(test.get("passed"), bool):
            raise ValueError(f"tests[{i}].passed must be a boolean")
        for field in ("score", "max-score"):
            value = test.get(field)
            if not isinstance(value, int) or isinstance(value, bool) or value < 0:
                raise ValueError(f"tests[{i}].{field} must be a non-negative integer, got {value!r}")
        if test["score"] > test["max-score"]:
            raise ValueError(
                f"tests[{i}].score ({test['score']}) > tests[{i}].max-score ({test['max-score']})"
            )

    # submitted_by is optional (older results omit it). When present, validate
    # its shape so a hand-edited result.json can't store a malformed identity.
    submitted_by = payload.get("submitted_by")
    if submitted_by is not None:
        if not isinstance(submitted_by, dict):
            raise ValueError(f"submitted_by must be an object, got {type(submitted_by).__name__}")
        uname = submitted_by.get("username")
        if not isinstance(uname, str) or not uname:
            raise ValueError("submitted_by.username must be a non-empty string")
        sid = submitted_by.get("id")
        if sid is not None and (isinstance(sid, bool) or not isinstance(sid, int)):
            raise ValueError(f"submitted_by.id must be an integer or null, got {sid!r}")


# GitHub API helpers ----------------------------------------------------------


class _AuthStrippingRedirect(urllib.request.HTTPRedirectHandler):
    """Drop Authorization on redirect so the GitHub token doesn't leak to the
    S3-signed asset URL GitHub redirects asset reads to.
    """

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        new_req = super().redirect_request(req, fp, code, msg, headers, newurl)
        if new_req is None:
            return None
        for h in ("Authorization", "authorization"):
            new_req.headers.pop(h, None)
            if hasattr(new_req, "unredirected_hdrs"):
                new_req.unredirected_hdrs.pop(h, None)
        return new_req


_OPENER = urllib.request.build_opener(_AuthStrippingRedirect)


def _repo_url(api_url: str, owner: str, repo: str) -> str:
    return (
        f"{api_url}/repos/{urllib.parse.quote(owner, safe='')}/"
        f"{urllib.parse.quote(repo, safe='')}"
    )


def all_submit_releases(
    api_url: str, owner: str, repo: str, token: str
) -> list[dict[str, Any]]:
    """Every submit-tag release for a repo, newest first, walking the full
    /releases pagination — the complete submission history (a student who pushed
    N times has N submit/* releases, all returned). Non-submit releases (e.g., a
    hand-created tag) are filtered out. A 404 (no releases, or repo not
    accepted) yields an empty list.

    Pagination follows GitHub's \`Link: rel="next"\` header (host-pinned to
    api_url so the token can't be pivoted off-host), falling back to the
    short-page heuristic when no Link header is present — mirrors
    list_repo_collaborator_logins.
    """
    per_page = 100
    max_pages = 100
    releases: list[dict[str, Any]] = []
    url = f"{_repo_url(api_url, owner, repo)}/releases?per_page={per_page}&page=1"
    seen_next: set[str] = set()
    for page in range(1, max_pages + 1):
        try:
            body, headers = _http_get_with_headers(
                url, token, accept="application/vnd.github+json"
            )
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                return []
            raise
        batch = json.loads(body.decode("utf-8"))
        if not isinstance(batch, list):
            raise ValueError(f"GET {url}: expected JSON array, got {type(batch).__name__}")
        for i, release in enumerate(batch):
            if not isinstance(release, dict):
                raise ValueError(
                    f"GET {url}: expected release object at index {i}, got {type(release).__name__}"
                )
            if (release.get("tag_name") or "").startswith(SUBMIT_TAG_PREFIX):
                releases.append(release)
        link_header = headers.get("Link") if headers else None
        next_url = _next_page_link(link_header)
        if next_url:
            next_url = _assert_same_host(next_url, api_url)
            if next_url in seen_next:
                return releases
            seen_next.add(next_url)
            url = next_url
            continue
        if link_header or len(batch) < per_page:
            return releases
        url = f"{_repo_url(api_url, owner, repo)}/releases?per_page={per_page}&page={page + 1}"
    raise ValueError(
        f"repos/{owner}/{repo}/releases: too many releases to enumerate "
        f"(hit the {max_pages}-page cap)"
    )


def _next_page_link(link_header: str | None) -> str | None:
    """The \`rel="next"\` URL from a GitHub \`Link\` header, or None when there's no
    next page (or no header). GitHub's guidance is to follow this URL rather
    than synthesize page numbers, since page size and next-page presence are the
    server's to decide. Mirrors NextPageLink in cli/shared/ghutil/ghutil.go.
    """
    if not link_header:
        return None
    m = re.search(r'<([^>]+)>\\s*;\\s*[^,]*rel="next"', link_header)
    return m.group(1) if m else None


def _assert_same_host(next_url: str, api_url: str) -> str:
    """Return next_url only if its scheme+host match api_url's; else raise
    ValueError. The pagination loop attaches \`Authorization: Bearer <token>\` to
    whatever URL it follows, so a malicious/MITM'd \`Link: rel="next"\` pointing
    off-host would otherwise pivot the token. The redirect path defends this via
    _AuthStrippingRedirect; this is the fail-closed guard on the Link-follow
    path. A legitimate api.github.com / GHES next page passes unchanged.
    """
    api = urllib.parse.urlsplit(api_url)
    nxt = urllib.parse.urlsplit(next_url)
    if (nxt.scheme, nxt.netloc) != (api.scheme, api.netloc):
        raise ValueError(
            f"pagination Link points off-host "
            f"({nxt.scheme}://{nxt.netloc} != {api.scheme}://{api.netloc}); "
            f"refusing to send the service token to a different host"
        )
    return next_url


def _paginate_login_list(
    page_url: Callable[[int], str],
    api_url: str,
    token: str,
    resource_label: str,
) -> list[str]:
    """Walk a paginated GitHub list-of-accounts endpoint, returning every
    \`login\`. Shared core for list_repo_collaborator_logins and
    list_team_member_logins — the only per-caller differences are the URL
    builder and the cap-error label.

    \`page_url(page)\` builds the request URL for a 1-based page (caller owns
    per_page/page formatting). Only the first page uses it; subsequent pages
    follow GitHub's \`Link: rel="next"\`, host-pinned via _assert_same_host so a
    crafted Link can't pivot the token. When no Link header is present, falls
    back to page+1 and stops on a short page (len < per_page). A self/looping
    rel="next" is bounded by seen_next.

    Raises urllib.error.HTTPError on any non-2xx (including 404) so the caller
    can choose soft fallback vs. hard failure; raises ValueError on a non-array
    body or on hitting the page cap.
    """
    per_page = 100
    max_pages = 100
    logins: list[str] = []
    url = page_url(1)
    seen_next: set[str] = set()
    for page in range(1, max_pages + 1):
        body, headers = _http_get_with_headers(
            url, token, accept="application/vnd.github+json"
        )
        batch = json.loads(body.decode("utf-8"))
        if not isinstance(batch, list):
            raise ValueError(
                f"GET {url}: expected JSON array, got {type(batch).__name__}"
            )
        for item in batch:
            if not isinstance(item, dict):
                continue
            login = item.get("login")
            if isinstance(login, str) and login:
                logins.append(login)
        link_header = headers.get("Link") if headers else None
        next_url = _next_page_link(link_header)
        if next_url:
            next_url = _assert_same_host(next_url, api_url)
            # Stop if the server points back at an already-fetched page
            # (self/looping rel="next"): bounds a crafted or buggy Link chain
            # to the pages actually seen instead of running out the cap.
            if next_url in seen_next:
                return logins
            seen_next.add(next_url)
            url = next_url
            continue
        if link_header or len(batch) < per_page:
            return logins
        url = page_url(page + 1)
    raise ValueError(
        f"{resource_label}: too many entries to enumerate "
        f"(hit the {max_pages}-page cap)"
    )


def list_repo_collaborator_logins(
    api_url: str, owner: str, repo: str, token: str
) -> list[str]:
    """Logins of every direct collaborator on owner/repo, walking pagination.

    Returns ALL collaborators regardless of permission level. The crediting gate
    is NOT permission level — it's classroom-team membership, applied by the
    caller (group_member_usernames intersects with the team). Filtering on
    \`role_name == "admin"\` here was a bug: a group teammate who is also an org
    owner (admin on every repo), or a founder kept as repo \`admin\` to invite
    teammates, is \`admin\` yet a legitimate student — the old filter dropped
    them, crediting only the owner. Non-student teachers/TAs/org-owners are
    excluded downstream because they're not on the roster, so dropping the admin
    filter here loses no protection.

    Pagination follows GitHub's \`Link: rel="next"\` header (short-page heuristic
    only as fallback); the followed next URL is host-pinned to api_url so the
    token can't be pivoted off-host.

    Raises urllib.error.HTTPError on any non-2xx (including 404) so the caller
    can choose owner-only fallback vs. hard failure.
    """
    per_page = 100
    base = f"{_repo_url(api_url, owner, repo)}/collaborators"
    return _paginate_login_list(
        page_url=lambda page: f"{base}?per_page={per_page}&page={page}",
        api_url=api_url,
        token=token,
        resource_label=f"repos/{owner}/{repo}/collaborators",
    )


def list_team_member_logins(
    api_url: str, org: str, team_slug: str, token: str
) -> list[str]:
    """Logins of every member of the classroom team, walking pagination. The
    team-driven username source for collection: the classroom GitHub team is
    authoritative for enrollment (the roster is only best-effort display
    metadata). Hits GET /orgs/{org}/teams/{slug}/members.

    Pagination follows GitHub's \`Link: rel="next"\` header, host-pinned to
    api_url (same defense as list_repo_collaborator_logins). Raises
    urllib.error.HTTPError on any non-2xx (including 404 when the team doesn't
    exist) so the caller can warn-and-skip vs. hard-fail."""
    per_page = 100
    base = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/members"
    )
    return _paginate_login_list(
        page_url=lambda page: f"{base}?per_page={per_page}&page={page}",
        api_url=api_url,
        token=token,
        resource_label=f"orgs/{org}/teams/{team_slug}/members",
    )


def group_member_usernames(
    api_url: str, org: str, repo: str, owner_username: str, token: str, roster_logins: set[str]
) -> list[str]:
    """Member list for a group submission: the repo's collaborators (any
    permission) **intersected with the classroom team** (case-insensitive),
    sorted and deduped, owner guaranteed present. Crediting is gated on team
    membership, NOT collaborator permission: a teammate on the classroom team is
    credited whether push or admin (an org owner is admin everywhere; a founder
    is kept admin to invite). A collaborator not on the team (teacher, TA,
    non-student org owner, or an account added out-of-band) is never credited.
    Raises on the underlying HTTP/parse error so the caller can fall back to
    owner-only.

    (\`roster_logins\` is the case-folded set of classroom-team logins the caller
    passes in — the team is authoritative for enrollment; the name is legacy.)

    TRUST ASSUMPTION (F6, documented residual): every teammate on the classroom
    team who is a collaborator on the repo is credited. GitHub doesn't record HOW
    a collaborator was added, so collection can't distinguish a teammate the
    founder invited via \`gh student invite\` from one a student added via the UI.
    The team intersection bounds the blast radius to classmates on the team — a
    stranger can never be credited — but a student could add a teammate on the
    team and credit them this score. Treating that as acceptable (classmates on
    the team are mutually trusted within a classroom) is the deliberate, simple
    model; see wiki/Autograders.md. Tightening it would require a teacher-approved
    group manifest, out of scope.
    """
    logins = list_repo_collaborator_logins(api_url, org, repo, token)
    seen: dict[str, str] = {}
    owner_key = owner_username.lower()
    for login in [owner_username, *logins]:
        key = login.lower()
        # Owner always credited; other collaborators only if on the team.
        if key != owner_key and key not in roster_logins:
            continue
        if key not in seen:
            # Store the OWNER under its own (repo-derived) casing, but normalize
            # every other member to lowercase. GitHub's /collaborators can return
            # a login under different casing between collects; storing that raw
            # casing made the member list (and same_submission) churn and rewrite
            # the entry every run. Lowercasing non-owner members is deterministic
            # (crediting is case-insensitive anyway), so an unchanged group
            # submission compares equal and is left alone.
            seen[key] = owner_username if key == owner_key else key
    return [seen[k] for k in sorted(seen)]


def attribute_group_members(
    api_url: str, org: str, repo: str, owner_username: str, token: str, roster_logins: set[str]
) -> tuple[list[str], str | None]:
    """Resolve the member list to credit for a group submission.

    Returns (usernames, warning). On success \`usernames\` is the rostered
    collaborator list (owner always included) and \`warning\` is None. On a
    collaborator-read failure \`usernames\` is forced to [owner] — never the
    runner/student-supplied list — and \`warning\` is a message the caller should
    emit and count as a degraded attribution.
    """
    try:
        return group_member_usernames(api_url, org, repo, owner_username, token, roster_logins), None
    except urllib.error.HTTPError as exc:
        return [owner_username], (
            f"{org}/{repo}: could not read group collaborators "
            f"(HTTP {exc.code} {exc.reason or 'no reason'}); crediting the "
            f"repo owner {owner_username!r} only. Ensure CLASSROOM50_SERVICE_TOKEN "
            f"can read repository collaborators (see the service-token wiki)."
        )
    except (json.JSONDecodeError, ValueError) as exc:
        return [owner_username], (
            f"{org}/{repo}: group collaborator listing malformed "
            f"({exc}); crediting the repo owner {owner_username!r} only."
        )


def download_result_asset(
    api_url: str, release: dict[str, Any], token: str
) -> dict[str, Any]:
    """Find the \`result.json\` asset on \`release\` and return the parsed JSON.

    Raises:
        urllib.error.HTTPError if the asset endpoint refuses the request.
        AssetMissingError if no \`result.json\` asset is found.
        json.JSONDecodeError if the bytes don't parse as JSON.
        ValueError if the asset is too large.
    """
    matches = [
        c for c in (release.get("assets") or [])
        if (c.get("name") or "").lower() == RESULT_ASSET_NAME
    ]
    if not matches:
        raise AssetMissingError(f"{RESULT_ASSET_NAME} asset missing from latest submit release")
    if len(matches) > 1:
        raise ValueError(f"latest submit release has {len(matches)} {RESULT_ASSET_NAME} assets")

    asset_url = matches[0].get("url")
    if not asset_url:
        raise ValueError("asset record missing url field")

    asset_url = rewrite_asset_url(asset_url, api_url)

    body = _http_get(
        asset_url,
        token,
        accept="application/octet-stream",
        max_bytes=MAX_RESULT_BYTES + 1,
    )
    if len(body) > MAX_RESULT_BYTES:
        raise ValueError(f"asset exceeds {MAX_RESULT_BYTES} byte ceiling ({len(body)} bytes)")
    return json.loads(body.decode("utf-8"))


def rewrite_asset_url(asset_url: str, api_url: str) -> str:
    """Rewrite an asset API URL to the configured API host. Asset records still
    carry api.github.com URLs even when GH_API_URL points at a test server or
    GHES — parse and swap scheme+netloc rather than string-slice a hardcoded
    prefix. Preserves a GHES-style /api/v3 prefix when the asset URL lacks it.
    """
    parsed_asset = urllib.parse.urlsplit(asset_url)
    parsed_api = urllib.parse.urlsplit(api_url)
    if not parsed_asset.scheme or not parsed_asset.netloc:
        return asset_url
    if not parsed_api.scheme or not parsed_api.netloc:
        return asset_url
    path = parsed_asset.path
    api_prefix = parsed_api.path.rstrip("/")
    if api_prefix and not (path == api_prefix or path.startswith(api_prefix + "/")):
        path = api_prefix + (path if path.startswith("/") else "/" + path)
    return urllib.parse.urlunsplit(
        (
            parsed_api.scheme,
            parsed_api.netloc,
            path,
            parsed_asset.query,
            parsed_asset.fragment,
        )
    )


def _http_get(
    url: str, token: str, *, accept: str, max_bytes: int | None = None, _retries: int = 3
) -> bytes:
    """GET \`url\` with bearer auth; return the body. Thin wrapper over
    \`_http_get_with_headers\` for callers that don't need response headers
    (release/asset reads)."""
    body, _headers = _http_get_with_headers(
        url, token, accept=accept, max_bytes=max_bytes, _retries=_retries
    )
    return body


def _http_get_with_headers(
    url: str, token: str, *, accept: str, max_bytes: int | None = None, _retries: int = 3
) -> tuple[bytes, Any]:
    """GET \`url\` with bearer auth; return (body, response headers). Retries
    5xx/429 with exponential backoff. The custom redirect handler strips
    Authorization before following GitHub's asset-download redirect to S3
    (otherwise the signed URL rejects the forwarded token).

    Headers are returned so paginated callers can follow GitHub's \`Link:
    rel="next"\` rather than guessing the next page from page length.
    """
    for attempt in range(_retries):
        req = urllib.request.Request(
            url,
            method="GET",
            headers={
                "Accept": accept,
                "Authorization": f"Bearer {token}",
                "User-Agent": "classroom50-collect-scores",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        )
        try:
            with _OPENER.open(req, timeout=30) as resp:
                body = resp.read(max_bytes) if max_bytes is not None else resp.read()
                return body, resp.headers
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 500, 502, 503, 504) and attempt < _retries - 1:
                # Honor Retry-After (capped at 30s); else exp backoff.
                retry_after = exc.headers.get("Retry-After") if exc.headers else None
                delay = min(int(retry_after), 30) if (retry_after or "").isdigit() else 2 ** attempt
                time.sleep(delay)
                continue
            raise
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            # A connect-phase failure is wrapped in URLError, but a timeout/reset
            # during resp.read() raises socket.timeout (= TimeoutError, an
            # OSError) which is NOT a URLError — so a stalled response body would
            # otherwise escape this retry path and crash past main()'s HTTPError
            # handler. Catch all three so a read-phase stall retries and wraps
            # into the synthetic 599 that is_hard_http_error treats as hard.
            if attempt < _retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise urllib.error.HTTPError(
                url=url,
                code=599,
                msg=f"network error: {exc}",
                hdrs=None,  # type: ignore[arg-type]
                fp=None,
            ) from exc
    raise RuntimeError(f"_http_get_with_headers called with _retries={_retries}")


def _http_send(
    method: str,
    url: str,
    token: str,
    *,
    accept: str,
    body: bytes | None,
    _retries: int = 3,
) -> tuple[int, bytes]:
    """Issue \`method url\` with bearer auth; return (status, body). Same
    retry/backoff and synthetic-599 contract as _http_get_with_headers (and
    _OPENER strips Authorization on a cross-host redirect). Mirrors
    regrade_repos.py's transport; used only for the team-repo grant PUT/GET."""
    headers = {
        "Accept": accept,
        "Authorization": f"Bearer {token}",
        "User-Agent": "classroom50-collect-scores",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if body is not None:
        headers["Content-Type"] = "application/json"
    for attempt in range(_retries):
        req = urllib.request.Request(url, method=method, data=body, headers=headers)
        try:
            with _OPENER.open(req, timeout=30) as resp:
                return resp.status, resp.read()
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 500, 502, 503, 504) and attempt < _retries - 1:
                retry_after = exc.headers.get("Retry-After") if exc.headers else None
                delay = min(int(retry_after), 30) if (retry_after or "").isdigit() else 2 ** attempt
                time.sleep(delay)
                continue
            raise
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            if attempt < _retries - 1:
                time.sleep(2 ** attempt)
                continue
            raise urllib.error.HTTPError(
                url=url,
                code=599,
                msg=f"network error: {exc}",
                hdrs=None,  # type: ignore[arg-type]
                fp=None,
            ) from exc
    raise RuntimeError(f"_http_send called with _retries={_retries}")


def team_has_repo_access(
    api_url: str, org: str, team_slug: str, repo_owner: str, repo: str, token: str
) -> bool:
    """Whether \`team_slug\` already has any access to <repo_owner>/<repo> (2xx =
    yes, 404 = no). Keeps grant_team_repo idempotent. Mirrors Go's
    teamHasRepoAccess."""
    url = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/repos/"
        f"{urllib.parse.quote(repo_owner, safe='')}/{urllib.parse.quote(repo, safe='')}"
    )
    try:
        _http_send("GET", url, token, accept="application/vnd.github+json", body=None)
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return False
        raise
    return True


def grant_team_repo(
    api_url: str,
    org: str,
    team_slug: str,
    repo_owner: str,
    repo: str,
    permission: str,
    token: str,
) -> bool:
    """Grant \`team_slug\` \`permission\` on <repo_owner>/<repo> via
    PUT /orgs/{org}/teams/{slug}/repos/{owner}/{repo}, skipping the write when
    the team already has any access (idempotent). Returns whether a new grant was
    applied. Mirrors Go's grantTeamRepo. A 403 (token lacks Administration) or
    599 propagates so main() aborts the run (is_hard_http_error); a 404/422 (repo
    absent / not org-owned) is left for the caller to warn-and-skip."""
    if team_has_repo_access(api_url, org, team_slug, repo_owner, repo, token):
        return False
    url = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/repos/"
        f"{urllib.parse.quote(repo_owner, safe='')}/{urllib.parse.quote(repo, safe='')}"
    )
    _http_send(
        "PUT",
        url,
        token,
        accept="application/vnd.github+json",
        body=json.dumps({"permission": permission}).encode("utf-8"),
    )
    return True


def is_hard_http_error(exc: urllib.error.HTTPError) -> bool:
    """Hard failures that should fail the whole run: 401/403 (bad/under-scoped
    token) and 599 (synthetic "network unavailable" after retries). Treating
    these as per-student "not submitted" would make a broken run report success
    while collecting nothing.
    """
    return exc.code in (401, 403, 599)


# Workflow-command output -----------------------------------------------------


def emit_error(message: str) -> None:
    print(f"::error::{message}", file=sys.stderr)


def emit_warning(message: str) -> None:
    print(f"::warning::{message}", file=sys.stderr)


# Entry point ----------------------------------------------------------------


if __name__ == "__main__":
    sys.exit(main())
`,De=`#!/usr/bin/env python3
"""classroom50 Feedback PR maintainer.

Fetched from the teacher's Pages site by the autograde-runner workflow's
"Ensure Feedback PR" step (like runner.py). Lives here (not inline in the
workflow) so the ~160 lines of control flow are unit-testable with a stubbed
\`gh\`; the workflow step is a thin curl+exec shim.

Opt-in per assignment (the workflow only invokes this when feedback-pr is on
and there's a diff). Maintains ONE long-lived PR per repo:
  base = the frozen \`feedback\` branch at the baseline commit
  head = the repo's default branch
so the teacher reviews the full starter->latest diff with inline comments, and
it auto-updates on every submission. PRs opened by GITHUB_TOKEN don't retrigger
workflows, so there's no loop.

Since issue #228 the accept clients (gh student accept / the web GUI) create
the PR at accept time with the student's own token — same base/head, title,
labels, and body (byte-mirrored via cli/shared/contract) — so it exists even
with Actions disabled. find_pr matches by base+head only, so this script
ADOPTS that PR; this create path remains the fallback for pre-feature repos
and accepts whose best-effort PR step failed.

Behavior (ported verbatim from the former inline bash):
  1. Freeze the base: create the \`feedback\` branch at BASE_SHA once, never
     advance it. If it already exists at a DIFFERENT sha, a student may have
     pre-created it (ruleset leaves creation open) -> refuse to open/refresh the
     PR against an unverified base, post a failure status, and stop.
  2. Find the single PR (any state). If none, create it (labeled by mode); on a
     create race lost to a concurrent run, re-query and treat the existing PR as
     success. If one exists, reopen only a student's *unmerged* close (a teacher
     merge is the grading-done signal).
  3. Always post a machine-readable \`classroom50/feedback-pr\` commit status
     (success | failure | error), mirroring \`classroom50/autograde\`. It defaults
     to \`error\` and is promoted to \`success\` only at the verified-good end, so
     an early failure reports error, not false success.

Environment (set by the autograde-runner workflow's grade job):
  GH_TOKEN            token for \`gh\` (Actions GITHUB_TOKEN)
  GITHUB_REPOSITORY   <owner>/<repo>
  GITHUB_SHA          graded commit SHA (the status target)
  GITHUB_SERVER_URL   https://github.com (or GHES base)
  GITHUB_RUN_ID       for the fallback status target_url
  BASE_SHA            the trusted baseline commit to freeze the base at
  MODE                assignment mode (individual | group), for the PR label

Exits 0 for every outcome (like runner.py): the status carries success vs
failure vs error. Exits non-zero only on missing required env (invoked outside
the workflow).
"""

from __future__ import annotations

import json
import os
import subprocess
import sys

# Lockstep with cli/gh-teacher/init_repo.go \`feedbackBaseBranch\` and the
# \`classroom50-feedback-base-lock\` org ruleset (pinned by a Go parity test).
BASE_BRANCH = "feedback"

# Commit-status context, mirroring classroom50/autograde so an agent can poll
# whether the Feedback PR is in place.
STATUS_CONTEXT = "classroom50/feedback-pr"

# Mode -> (PR label, color). Mirrors GitHub Classroom's Individual/Group
# feedback labels so a teacher can tell them apart.
_LABELS = {
    "group": ("Group Assignment", "5319E7"),
    "individual": ("Individual Assignment", "0E8A16"),
}


class GhError(Exception):
    """A \`gh\` invocation exited non-zero. Carries combined output for logs."""

    def __init__(self, args: list[str], returncode: int, output: str):
        super().__init__(f"gh {' '.join(args)} exited {returncode}: {output}")
        self.args_list = args
        self.returncode = returncode
        self.output = output


def gh(*args: str, check: bool = True) -> str:
    """Run \`gh\` and return stdout (stripped). The single seam tests stub.

    On a non-zero exit, raises GhError when check=True (carrying stderr), else
    returns "". A subprocess timeout is converted to a GhError so callers treat
    it uniformly rather than crashing past the "always exit 0" contract. \`gh\`
    reads GH_TOKEN from env.
    """
    try:
        proc = subprocess.run(
            ["gh", *args],
            capture_output=True,
            text=True,
            timeout=60,
            check=False,
        )
    except subprocess.SubprocessError as exc:  # TimeoutExpired, etc.
        if check:
            raise GhError(list(args), -1, f"gh invocation failed: {exc}") from exc
        return ""
    if proc.returncode != 0:
        if check:
            raise GhError(list(args), proc.returncode, (proc.stderr or proc.stdout).strip())
        return ""
    return proc.stdout.strip()


# ---------------------------------------------------------------------------
# Pure-ish helpers (each wraps one gh call; tests stub \`gh\`)
# ---------------------------------------------------------------------------


def head_branch(repo: str) -> str:
    """The repo's default branch (the Feedback PR head)."""
    return gh("repo", "view", repo, "--json", "defaultBranchRef",
              "--jq", ".defaultBranchRef.name")


def existing_base_sha(repo: str) -> str | None:
    """SHA the \`feedback\` branch points at, or None if it doesn't exist.

    Uses the API (not \`git ls-remote\`) so this runs without a config-repo
    checkout — the reusable workflow only checks out the student repo.

    A genuine 404 (branch absent) returns None -> caller creates it. Any OTHER
    failure (403/429/5xx/network) RAISES GhError rather than masquerading as
    "absent": treating an unreadable base as absent would let the caller open a
    PR over a base it couldn't verify, defeating the poisoned-base guard (a
    student can pre-create the branch at a wrong SHA).
    """
    try:
        out = gh("api", f"repos/{repo}/git/ref/heads/{BASE_BRANCH}",
                 "--jq", ".object.sha")
    except GhError as exc:
        # \`gh api\` exits 1 on any HTTP error; distinguish 404 (absent) from the
        # rest via the error text gh prints (it includes "HTTP 404").
        if "HTTP 404" in exc.output or "Not Found" in exc.output:
            return None
        raise
    return out or None


def create_base(repo: str, base_sha: str) -> bool:
    """Create the frozen \`feedback\` branch at base_sha. Returns True on success.
    A failure is non-fatal (logged as a notice) — the ruleset leaves creation
    open to GITHUB_TOKEN, but a transient error shouldn't abort; the next
    submission retries."""
    try:
        gh("api", "-X", "POST", f"repos/{repo}/git/refs",
           "-f", f"ref=refs/heads/{BASE_BRANCH}", "-f", f"sha={base_sha}")
        return True
    except GhError as exc:
        print(f"::notice::could not create feedback-base at {base_sha}: {exc.output}")
        return False


def find_pr(repo: str, head: str) -> dict[str, str] | None:
    """The single base<-head PR (any state) as {number, state, mergedAt}, or
    None. Matching any state means a previously closed/merged PR is never
    duplicated.

    Parses the JSON array directly (not a @tsv line): a tab-joined row is
    fragile because an empty leading field (no PR number) survives gh's output
    but is lost to strip()+split, fabricating a phantom PR. JSON is unambiguous.
    """
    out = gh("pr", "list", "--repo", repo,
             "--base", BASE_BRANCH, "--head", head, "--state", "all",
             "--json", "number,state,mergedAt", check=False)
    if not out:
        return None
    try:
        rows = json.loads(out)
    except (json.JSONDecodeError, ValueError):
        return None
    if not isinstance(rows, list) or not rows or not isinstance(rows[0], dict):
        return None
    row = rows[0]
    number = row.get("number")
    if number is None or number == "":
        return None
    return {
        "number": str(number),
        "state": str(row.get("state") or ""),
        "mergedAt": str(row.get("mergedAt") or ""),
    }


def label_for_mode(mode: str) -> tuple[str, str]:
    """(label, color) for the assignment mode; unknown -> individual."""
    return _LABELS.get((mode or "").strip().lower(), _LABELS["individual"])


def pr_body(head: str, release_url: str) -> str:
    """The Feedback PR body (GitHub Classroom-style).

    release_url is the static \`.../releases/latest\` link (not a pinned tag), so
    it self-updates as new submissions publish even though this body is written
    once at PR creation and only refreshed to backfill a missing link.
    """
    return "\\n".join([
        ":wave:! Classroom 50 opened this pull request as a place for your "
        "teacher to leave feedback on your work. It stays up to date "
        "automatically as you push. "
        "**Don't close or merge this pull request** unless your teacher tells you to.",
        "",
        f"Each commit is automatically graded — the latest autograding result "
        f"is [here]({release_url}).",
        "",
        "Your teacher can leave comments and feedback on your code here. Click "
        "the **Subscribe** button to be notified when that happens.",
        "",
        f"Open the **Files changed** or **Commits** tab to see everything "
        f"you've pushed to \`{head}\` since you accepted the assignment — your "
        f"teacher sees the same view.",
        "",
        "<details>",
        "<summary><strong>Notes for teachers</strong></summary>",
        "",
        "Use this PR to leave feedback:",
        "",
        f"- **Files changed** shows the full diff on \`{head}\` since the student "
        f"accepted. Hover a line and click the blue **+** to leave a line comment.",
        "- **Commits** lists each pushed commit; open one to see its changes.",
        "- Autograde results appear as the \`classroom50/autograde\` commit "
        "status / check on each submission.",
        f"- The [latest autograding result]({release_url}) has the per-test "
        f"detail behind that status.",
        "- This page is an overview — commits, line comments, and a general "
        "comment box below.",
        "",
        f"The base branch (\`{BASE_BRANCH}\`) is frozen at the starter so the diff "
        f"always reflects the full body of work. The PR is kept up to date "
        f"automatically; merging it is the teacher-side "
        f"\\"grading done\\" signal.",
        "</details>",
    ])


def create_pr(repo: str, head: str, mode: str, release_url: str) -> str:
    """Create the Feedback PR, returning its URL. Best-effort labels it first.
    Raises GhError on a create failure (caller handles the race)."""
    label, color = label_for_mode(mode)
    # Best-effort label; never block PR creation on label setup.
    gh("label", "create", label, "--repo", repo, "--color", color,
       "--description", "Classroom 50 teacher-managed feedback PR", check=False)
    return gh("pr", "create", "--repo", repo,
              "--base", BASE_BRANCH, "--head", head,
              "--title", "Feedback", "--body", pr_body(head, release_url),
              "--label", label)


def existing_pr_url(repo: str, head: str) -> str:
    """URL of the existing base<-head PR (any state), or "". Used to
    recover from a lost create race."""
    return gh("pr", "list", "--repo", repo, "--base", BASE_BRANCH,
              "--head", head, "--state", "all", "--json", "url",
              "--jq", "(.[0] // {}).url // \\"\\"", check=False)


def backfill_release_link(repo: str, number: str, head: str,
                          release_url: str) -> None:
    """Add the latest-submission link to an OPEN PR whose body lacks it.

    Best-effort and idempotent (mirrors the label/reopen tolerance): if the body
    already contains the link it's left alone; an empty/transient body read skips
    the edit rather than risk clobbering; a failed edit logs a warning and never
    flips the run's outcome (the PR is still in place). Caller gates on OPEN
    state so merged/closed PRs are never edited.
    """
    body = gh("pr", "view", number, "--repo", repo,
              "--json", "body", "--jq", ".body", check=False)
    if not body or release_url in body:
        return
    try:
        gh("pr", "edit", number, "--repo", repo,
           "--body", pr_body(head, release_url))
    except GhError as exc:
        print(f"::warning::could not backfill latest-submission link on "
              f"Feedback PR #{number}: {exc.output}")
        return
    print(f"Backfilled latest-submission link on Feedback PR #{number}")


# ---------------------------------------------------------------------------
# Orchestration
# ---------------------------------------------------------------------------


def ensure_feedback_pr(repo: str, base_sha: str, mode: str, server_url: str,
                       run_id: str) -> tuple[str, str, str]:
    """Maintain the one Feedback PR. Returns (state, description, url) where
    state is success | failure | error. Ported verbatim from the inline bash;
    the EXIT-trap status emission is replaced by main()'s finally block.
    """
    run_url = f"{server_url}/{repo}/actions/runs/{run_id}"
    # Static "latest" pointer (set-latest job keeps it current), not a pinned
    # submit-tag URL — the body is written once at creation, so a tag would go
    # stale but /releases/latest self-updates. See #262.
    release_url = f"{server_url}/{repo}/releases/latest"

    head = head_branch(repo)  # GhError here -> main() reports error (no false success)

    # 1) Freeze the base.
    existing = existing_base_sha(repo)
    if not existing:
        create_base(repo, base_sha)
    elif existing != base_sha:
        print(
            f"::warning::feedback-base ({BASE_BRANCH}) is at {existing}, not the "
            f"expected baseline {base_sha}; not opening/updating the Feedback PR. "
            f"If a student created this branch, an org admin should delete it so "
            f"the next submission re-freezes it correctly."
        )
        return ("failure",
                "feedback-base is at the wrong commit; an org admin must delete "
                "the 'feedback' branch",
                run_url)

    # 2) Find or create the single PR.
    pr = find_pr(repo, head)
    if pr is None:
        try:
            url = create_pr(repo, head, mode, release_url)
        except GhError as exc:
            # A concurrent run (submit/* tag vs main push use different
            # concurrency groups) can win the create race; re-query before
            # reporting the "org setting off" case.
            race_url = existing_pr_url(repo, head)
            if race_url:
                print("Feedback PR already present (created concurrently); nothing to do")
                return ("success", "Feedback PR in place (created concurrently)", race_url)
            print(f"::warning::could not open Feedback PR (base={BASE_BRANCH} head={head}): {exc.output}")
            print("::warning::if this reports that Actions is not permitted to create "
                  "pull requests, the org setting is off — re-run 'gh teacher init', or "
                  "enable Settings → Actions → 'Allow GitHub Actions to create and approve "
                  "pull requests'")
            return ("error",
                    "could not open Feedback PR (often: org Actions-PR setting off)",
                    run_url)
        print(f"Feedback PR opened: {url}")
        return ("success", "Feedback PR opened", url)

    # Existing PR: reopen only a student's unmerged close.
    url = f"{server_url}/{repo}/pull/{pr['number']}"
    if pr["state"] == "CLOSED" and not pr["mergedAt"]:
        # A failed reopen must NOT report success (F8). Trust \`gh pr reopen\`'s
        # own exit: if it raises, the reopen genuinely failed -> failure. If it
        # succeeds, a follow-up \`pr view\` only DOWNGRADES to failure when it
        # *confirms* the PR is still CLOSED — a transient/empty view is treated
        # as success, so a flaky read can't flip a reopened PR to a false failure.
        try:
            gh("pr", "reopen", pr["number"], "--repo", repo)
        except GhError as exc:
            print(f"::warning::could not reopen Feedback PR #{pr['number']}: {exc.output}")
            return ("failure", "could not reopen the closed Feedback PR", url)
        state_now = gh("pr", "view", pr["number"], "--repo", repo,
                       "--json", "state", "--jq", ".state", check=False)
        if state_now == "CLOSED":
            print(f"::warning::Feedback PR #{pr['number']} still CLOSED after reopen")
            return ("failure", "could not reopen the closed Feedback PR", url)
        print(f"Reopened Feedback PR #{pr['number']} (was closed unmerged)")
        return ("success", "Feedback PR reopened", url)

    # Backfill the latest-submission link onto an already-open PR whose body
    # predates it (#262). Only OPEN, unmerged PRs are edited — a merged/closed
    # PR is the teacher's "grading done" signal and must stay untouched.
    if pr["state"] == "OPEN":
        backfill_release_link(repo, pr["number"], head, release_url)

    print(f"Feedback PR #{pr['number']} already present "
          f"(state={pr['state']} merged={pr['mergedAt'] or 'none'}); nothing to do")
    return ("success", "Feedback PR in place", url)


def emit_status(repo: str, sha: str, state: str, description: str, url: str) -> None:
    """Post the classroom50/feedback-pr commit status. Best-effort: a failed
    status POST is logged, never fatal (mirrors the former trap's \`|| true\`,
    but surfaced rather than silenced)."""
    try:
        gh("api", f"repos/{repo}/statuses/{sha}",
           "-f", f"state={state}", "-f", f"context={STATUS_CONTEXT}",
           "-f", f"description={description}", "-f", f"target_url={url}")
    except (GhError, OSError) as exc:
        # Last best-effort action; never let a status-POST failure (gh error,
        # timeout-as-GhError, missing gh binary) mask the real outcome.
        print(f"::warning::could not post {STATUS_CONTEXT} status: {exc}")


def main() -> int:
    repo = os.environ.get("GITHUB_REPOSITORY", "").strip()
    sha = os.environ.get("GITHUB_SHA", "").strip()
    base_sha = os.environ.get("BASE_SHA", "").strip()
    server_url = os.environ.get("GITHUB_SERVER_URL", "https://github.com").strip()
    run_id = os.environ.get("GITHUB_RUN_ID", "").strip()
    mode = os.environ.get("MODE", "").strip()

    if not (repo and sha and base_sha):
        print("::error::ensure_feedback_pr requires GITHUB_REPOSITORY, GITHUB_SHA, "
              "and BASE_SHA — running outside the autograde-runner workflow?",
              file=sys.stderr)
        return 1

    # Default to error so any uncaught failure reports error (never false
    # success), mirroring the former \`trap emit_status EXIT\` design.
    state, description = "error", "Feedback PR step did not complete"
    url = f"{server_url}/{repo}/actions/runs/{run_id}"
    try:
        state, description, url = ensure_feedback_pr(repo, base_sha, mode, server_url, run_id)
    except GhError as exc:
        print(f"::warning::Feedback PR step failed: {exc}")
    finally:
        emit_status(repo, sha, state, description, url)
    return 0


if __name__ == "__main__":
    sys.exit(main())
`,Oe=`#!/usr/bin/env python3
"""Materialize declarative tests from each classroom's assignments.json.

Run by publish-pages.yaml before the per-assignment bundles are tarred. For
every assignment entry with a \`tests\` block, writes

    <classroom>/autograders/<slug>/tests.json   (schema classroom50/tests/v1)

into the checkout so the bundle step tars it alongside any sibling fixtures
(input-file / expected-file). runner.py grades the bundled file with its
built-in interpreter (run_declarative).

Validation lives elsewhere (tests.go at write time, runner.py at grade time),
so this script stays forgiving: a malformed manifest emits a ::warning:: and is
skipped rather than failing the Pages deploy. tests.json-vs-autograder.py
precedence is resolved in ONE place — runner.py's entrypoint resolution — so it
isn't special-cased here.
"""

from __future__ import annotations

import json
import pathlib
import re
import sys

ASSIGNMENTS_SCHEMA_V1 = "classroom50/assignments/v1"
TESTS_SCHEMA_V1 = "classroom50/tests/v1"
TESTS_FILENAME = "tests.json"

# Mirror validate.ShortNamePattern in cli/gh-teacher/internal/validate/validate.go.
# The slug becomes a directory path here, so a traversal-style slug must be
# rejected before it reaches mkdir.
SLUG_RE = re.compile(r"^[a-z0-9][a-z0-9-]{1,38}$")


def materialize(root: pathlib.Path) -> int:
    """Walk every <classroom>/assignments.json under \`root\`, writing a
    tests.json for each assignment that declares tests. Returns the count of
    files written. Never raises on bad manifest data -- warns and skips."""
    written = 0
    for manifest in sorted(root.glob("*/assignments.json")):
        classroom = manifest.parent.name
        try:
            data = json.loads(manifest.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError) as exc:
            print(f"::warning::{manifest}: {exc}; skipping declarative-test materialization")
            continue
        if not isinstance(data, dict):
            print(f"::warning::{manifest}: not a JSON object; skipping")
            continue
        if data.get("schema") != ASSIGNMENTS_SCHEMA_V1:
            print(f"::warning::{manifest}: schema {data.get('schema')!r}, "
                  f"want {ASSIGNMENTS_SCHEMA_V1!r}; skipping")
            continue

        for entry in data.get("assignments") or []:
            if not isinstance(entry, dict):
                continue
            tests = entry.get("tests")
            if not tests:
                continue
            slug = entry.get("slug")
            if not isinstance(slug, str) or not SLUG_RE.match(slug):
                print(f"::warning::{manifest}: skipping entry with invalid slug {slug!r}")
                continue
            if not isinstance(tests, list):
                print(f"::warning::{manifest}: {slug}: 'tests' is not a list; skipping")
                continue

            outdir = root / classroom / "autograders" / slug
            outdir.mkdir(parents=True, exist_ok=True)
            payload = {"schema": TESTS_SCHEMA_V1, "tests": tests}
            (outdir / TESTS_FILENAME).write_text(
                json.dumps(payload, indent=2) + "\\n", encoding="utf-8")
            print(f"materialized {outdir / TESTS_FILENAME} ({len(tests)} test(s))")
            written += 1
    return written


def main() -> int:
    root = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else pathlib.Path.cwd()
    count = materialize(root)
    print(f"materialize_tests: wrote {count} tests.json file(s)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
`,ke=`#!/usr/bin/env python3
"""Teacher-triggered service-token probe.

Exercises EVERY GitHub API scope the CLASSROOM50_SERVICE_TOKEN needs, so a
teacher runs one workflow after provisioning/rotating and gets a single
green/red signal covering scopes the pre-provisioning validators (\`gh teacher
init\` / the web "validate & save") can't cheaply check — the org-team read and
the repo-level Actions permission that only surface at collect/regrade time.

SIDE-EFFECT FREE by design. Never pushes a tag, re-runs a workflow, writes a
secret, or mutates a repo. Write scopes are proven with read-only PROXIES that
GitHub gates behind the write permission:

  - Contents: write  -> GET /repos/{org}/classroom50 reports
                        \`permissions.push == true\` only with contents-write
                        (same signal the CLI/web validators use).
  - Administration: write -> the same GET reports \`permissions.admin == true\`
                        only with the Administration permission (collect grants
                        staff teams repo access via PUT teams/.../repos/...).
  - Actions:  write  -> GET /repos/{org}/classroom50/actions/permissions is
                        reachable only with the Actions permission; a
                        fine-grained PAT's Actions permission is a single
                        read/write pair, so reachability establishes the grant
                        regrade's rerun API needs. No run is re-run.

Scope -> probe (mirrors the wiki REST table):
  Organization Members: R   -> GET /orgs/{org}/members      (+ per-team read)
  Repository Contents: R    -> GET /repos/{org}/classroom50 (config repo)
  Repository Contents: W    -> permissions.push on the config repo
  Repository Administration: W -> permissions.admin on the config repo
  Repository Actions:  R/W  -> GET /repos/{org}/classroom50/actions/permissions
  Repository Metadata: R    -> GET /repos/{org}/classroom50/collaborators

Config + org scopes are ALWAYS probed. Per-classroom, the probe also reads the
classroom team's members (the exact call collect-scores makes), which exercises
team VISIBILITY — a secret team the token can't see 404/403s here even when the
org-members proxy passes. It additionally reads each STAFF team (classroom.json
\`teams\`, e.g., \`classroom50-<short>-ta\`) the collect-time grant targets, so a
secret/invisible staff team fails RED here rather than silently granting TAs no
access at cron. A team that doesn't exist yet (404) is a PASS with a note (an
early-term classroom legitimately has no team), never a failure.

Environment (set by \`probe-token.yaml\`):
  CLASSROOM50_SERVICE_TOKEN — the fine-grained PAT to probe.
  GITHUB_REPOSITORY_OWNER   — org name (auto-set by Actions).
  GITHUB_WORKSPACE          — checkout root (holds the per-classroom dirs).
  GITHUB_API_URL            — API URL on GHES runners.
  GH_API_URL                — explicit override (test servers).

Exit codes:
  0 — every required scope present (a per-classroom team read may be skipped
      with a note when the team doesn't exist yet).
  1 — at least one required scope missing, or the token is invalid/expired.
"""

from __future__ import annotations

import json
import os
import pathlib
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

# Config repo name. Cross-binary contract — mirrors ConfigRepoName in
# cli/gh-teacher/internal/configrepo and the collect/regrade scripts.
CONFIG_REPO = "classroom50"

# Schema sentinel for a classroom.json — keep aligned with collect_scores.py.
CLASSROOM_SCHEMA_V1 = "classroom50/classroom/v1"


# GitHub API transport --------------------------------------------------------


def _api_url() -> str:
    return (
        os.environ.get("GH_API_URL")
        or os.environ.get("GITHUB_API_URL")
        or "https://api.github.com"
    ).rstrip("/")


def http_get(url: str, token: str, *, _retries: int = 3) -> tuple[int, bytes]:
    """GET \`url\` with bearer auth. Returns (status, body) for a 2xx; raises
    urllib.error.HTTPError for a non-2xx so callers can classify. Retries
    5xx/429 with exponential backoff (honoring Retry-After), mirroring the
    collect/regrade transport. The token lives only in the Authorization header
    — never logged or interpolated into output."""
    for attempt in range(_retries):
        req = urllib.request.Request(
            url,
            method="GET",
            headers={
                "Accept": "application/vnd.github+json",
                "Authorization": f"Bearer {token}",
                "User-Agent": "classroom50-probe-token",
                "X-GitHub-Api-Version": "2022-11-28",
            },
        )
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                return resp.status, resp.read()
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 500, 502, 503, 504) and attempt < _retries - 1:
                retry_after = exc.headers.get("Retry-After") if exc.headers else None
                delay = (
                    min(int(retry_after), 30)
                    if (retry_after or "").isdigit()
                    else 2**attempt
                )
                time.sleep(delay)
                continue
            raise
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            if attempt < _retries - 1:
                time.sleep(2**attempt)
                continue
            raise urllib.error.HTTPError(
                url=url, code=599, msg=f"network error: {exc}", hdrs=None, fp=None  # type: ignore[arg-type]
            ) from exc
    raise RuntimeError(f"http_get called with _retries={_retries}")


def _repo_url(api_url: str, owner: str, repo: str) -> str:
    return (
        f"{api_url}/repos/{urllib.parse.quote(owner, safe='')}/"
        f"{urllib.parse.quote(repo, safe='')}"
    )


# Individual scope checks -----------------------------------------------------
#
# Each returns a Check: ok True/False and a human message. A check that can't
# run for a benign reason (no student repos yet) is \`skipped\` — a pass with a
# note, not a failure.


class Check:
    __slots__ = ("name", "ok", "skipped", "message")

    def __init__(self, name: str, ok: bool, message: str, *, skipped: bool = False):
        self.name = name
        self.ok = ok
        self.skipped = skipped
        self.message = message


def _classify_repo_read(exc: urllib.error.HTTPError) -> str:
    """Short human cause for a failed repo/org read."""
    if exc.code == 401:
        return "token is invalid, expired, or revoked (401)"
    if exc.code in (403, 404):
        return f"HTTP {exc.code} — the scope is missing or the resource is out of the token's reach"
    return f"HTTP {exc.code} ({exc.reason or 'no reason'})"


def check_config_contents_and_write(api_url: str, org: str, token: str) -> list[Check]:
    """Contents: Read (config repo readable), Contents: Write
    (permissions.push true), AND Administration: Write (permissions.admin true —
    collect grants staff teams repo access). One request establishes all three."""
    url = _repo_url(api_url, org, CONFIG_REPO)
    try:
        _status, body = http_get(url, token)
    except urllib.error.HTTPError as exc:
        cause = _classify_repo_read(exc)
        return [
            Check("Contents: Read (config repo)", False, f"GET {org}/{CONFIG_REPO}: {cause}"),
            Check("Contents: Write (config repo)", False, "not checked — the config-repo read failed above"),
            Check("Administration: Write (config repo)", False, "not checked — the config-repo read failed above"),
        ]
    try:
        repo = json.loads(body.decode("utf-8"))
    except (json.JSONDecodeError, ValueError) as exc:
        return [
            Check("Contents: Read (config repo)", False, f"GET {org}/{CONFIG_REPO}: malformed JSON ({exc})"),
            Check("Contents: Write (config repo)", False, "not checked — the config-repo read failed above"),
            Check("Administration: Write (config repo)", False, "not checked — the config-repo read failed above"),
        ]
    permissions = repo.get("permissions") if isinstance(repo, dict) else None
    permissions = permissions if isinstance(permissions, dict) else {}
    push = bool(permissions.get("push"))
    admin = bool(permissions.get("admin"))
    return [
        Check("Contents: Read (config repo)", True, f"{org}/{CONFIG_REPO} is readable"),
        Check(
            "Contents: Write (config repo)",
            push,
            "permissions.push is true (regrade can push submit/* tags)"
            if push
            else "permissions.push is false — the token is read-only; regrade needs Contents: Read and write",
        ),
        Check(
            "Administration: Write (config repo)",
            admin,
            "permissions.admin is true (collect can grant staff teams repo access) — "
            "note this proves admin on the config repo only; the grant targets student "
            "repos + templates, so the token must be scoped to All repositories"
            if admin
            else "permissions.admin is false — collect grants staff teams (e.g., TAs) repo access, which needs Administration: Read and write",
        ),
    ]


def check_actions(api_url: str, org: str, token: str) -> Check:
    """Actions: Read/Write — GET .../actions/permissions is reachable only with
    the Actions permission (a fine-grained Actions permission is a single
    read/write pair, so reachability establishes the grant regrade's rerun API
    needs). Read-only: no run is re-run."""
    url = f"{_repo_url(api_url, org, CONFIG_REPO)}/actions/permissions"
    try:
        http_get(url, token)
    except urllib.error.HTTPError as exc:
        return Check(
            "Actions: Read and write (config repo)",
            False,
            f"GET {org}/{CONFIG_REPO}/actions/permissions: {_classify_repo_read(exc)} — "
            f"regrade re-runs student autograde workflows and needs Actions: Read and write",
        )
    return Check(
        "Actions: Read and write (config repo)",
        True,
        "actions/permissions is reachable (regrade can re-run autograde workflows)",
    )


def check_metadata(api_url: str, org: str, token: str) -> Check:
    """Metadata: Read — /collaborators is a Metadata endpoint, what group
    attribution reads. Metadata is auto-included on every fine-grained PAT, so
    this is expected to pass; a failure means the token is scoped to the wrong
    resource owner or a repo subset."""
    url = f"{_repo_url(api_url, org, CONFIG_REPO)}/collaborators?per_page=1"
    try:
        http_get(url, token)
    except urllib.error.HTTPError as exc:
        return Check(
            "Metadata: Read (collaborators)",
            False,
            f"GET {org}/{CONFIG_REPO}/collaborators: {_classify_repo_read(exc)} — "
            f"group attribution reads repo collaborators via Metadata: Read",
        )
    return Check(
        "Metadata: Read (collaborators)",
        True,
        "repo collaborators are readable (group attribution works)",
    )


def check_org_members(api_url: str, org: str, token: str) -> Check:
    """Members: Read — GET /orgs/{org}/members. The org-wide proxy for the
    per-team read collect-scores makes; both need the same Members permission.
    The per-classroom team read below is the stronger, exact check."""
    url = f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/members?per_page=1"
    try:
        http_get(url, token)
    except urllib.error.HTTPError as exc:
        return Check(
            "Members: Read (org members)",
            False,
            f"GET orgs/{org}/members: {_classify_repo_read(exc)} — "
            f"collection is team-driven and lists the classroom team; add "
            f"Organization permissions -> Members: Read",
        )
    return Check(
        "Members: Read (org members)",
        True,
        "org members are listable (collection can read the classroom team)",
    )


# Per-classroom checks --------------------------------------------------------


def resolve_team_slug(classroom_meta: dict[str, Any], classroom_short: str) -> str:
    """The classroom's GitHub team slug — persisted \`team.slug\` when present,
    else the derived \`classroom50-<short>\`. Mirrors collect_scores.py's
    resolve_team_slug so the probe reads the EXACT team collection reads."""
    team = classroom_meta.get("team")
    if isinstance(team, dict):
        slug = team.get("slug")
        if isinstance(slug, str) and slug.strip():
            return slug.strip()
    return f"classroom50-{classroom_short}"


def resolve_staff_team_slugs(classroom_meta: dict[str, Any]) -> dict[str, str]:
    """role -> slug for each staff team present in classroom.json \`teams\`.
    Mirrors collect_scores.py's resolve_staff_team_slugs so the probe reads the
    EXACT staff teams the grant pass targets."""
    teams = classroom_meta.get("teams")
    if not isinstance(teams, dict):
        return {}
    out: dict[str, str] = {}
    for role, ref in teams.items():
        if not isinstance(ref, dict):
            continue
        slug = ref.get("slug")
        if isinstance(slug, str) and slug.strip():
            out[role] = slug.strip()
    return out


def iter_classroom_meta(base_dir: pathlib.Path):
    """Yield (short_name, classroom_meta) for each v1 classroom dir. Non-v1 or
    unreadable dirs are skipped silently (the probe is about the token, not the
    config's validity — collect-scores validates that)."""
    if not base_dir.is_dir():
        return
    for entry in sorted(p for p in base_dir.iterdir() if p.is_dir()):
        classroom_path = entry / "classroom.json"
        if not classroom_path.is_file():
            continue
        try:
            meta = json.loads(classroom_path.read_text())
        except (OSError, json.JSONDecodeError):
            continue
        if isinstance(meta, dict) and meta.get("schema") == CLASSROOM_SCHEMA_V1:
            yield entry.name, meta


def check_classroom_team(
    api_url: str, org: str, token: str, classroom_short: str, team_slug: str
) -> Check:
    """The EXACT read collect-scores makes: GET the classroom team's members.
    Stronger than the org-members proxy because it also exercises team
    VISIBILITY (a secret team not visible to the token would 404/403 here even
    when the org-members proxy passes — the visibility-asymmetry gap)."""
    url = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/members?per_page=1"
    )
    try:
        http_get(url, token)
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            # The team may not exist yet (classroom created but team not
            # provisioned), which is not a token problem — note and pass.
            return Check(
                f"Team members: {classroom_short} ({team_slug})",
                True,
                "team not found (404) — not created yet, or renamed; not a token scope problem",
                skipped=True,
            )
        return Check(
            f"Team members: {classroom_short} ({team_slug})",
            False,
            f"GET orgs/{org}/teams/{team_slug}/members: {_classify_repo_read(exc)} — "
            f"the token can't read this classroom team (Members: Read, and the team must be visible)",
        )
    return Check(
        f"Team members: {classroom_short} ({team_slug})",
        True,
        "classroom team members are readable",
    )


def check_staff_team_visible(
    api_url: str, org: str, token: str, classroom_short: str, role: str, team_slug: str
) -> Check:
    """Staff-team visibility for the collect-time grant. \`PUT .../teams/{slug}/
    repos/...\` needs the token to SEE the team — a scope the config-repo admin
    check can't prove. Without this probe, a secret/invisible staff team passes
    every other check, then the grant soft-skips its 404 and TAs silently get NO
    access while the run reports success. Reading the team's members is the same
    visibility proxy used for the student team, against the exact grant slug."""
    url = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/members?per_page=1"
    )
    label = f"Staff team visible: {classroom_short} {role} ({team_slug})"
    try:
        http_get(url, token)
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            # Staff team not provisioned yet (or renamed) — not a token problem,
            # and the grant simply skips a role whose team is absent.
            return Check(
                label,
                True,
                "staff team not found (404) — not created yet, or renamed; not a token scope problem",
                skipped=True,
            )
        return Check(
            label,
            False,
            f"GET orgs/{org}/teams/{team_slug}/members: {_classify_repo_read(exc)} — "
            f"the grant can't see this staff team, so it would silently grant TAs no "
            f"access (Members: Read, and the team must be visible to the token)",
        )
    return Check(
        label,
        True,
        "staff team is visible (the collect-time grant can target it)",
    )


# Workflow-command output -----------------------------------------------------


def emit_error(message: str) -> None:
    print(f"::error::{message}", file=sys.stderr)


def emit_notice(message: str) -> None:
    print(f"::notice::{message}", file=sys.stderr)


def print_check(check: Check) -> None:
    if check.skipped:
        mark = "SKIP"
    elif check.ok:
        mark = "PASS"
    else:
        mark = "FAIL"
    print(f"  [{mark}] {check.name}: {check.message}")


# Top-level dispatch ----------------------------------------------------------


def main() -> int:
    org = (os.environ.get("GITHUB_REPOSITORY_OWNER") or "").strip()
    if not org:
        emit_error(
            "GITHUB_REPOSITORY_OWNER is empty — this script must run inside a GitHub Actions workflow"
        )
        return 1

    token = (os.environ.get("CLASSROOM50_SERVICE_TOKEN") or "").strip()
    if not token:
        emit_error(
            "CLASSROOM50_SERVICE_TOKEN is empty — run \`gh teacher rotate-service-token <org>\` to provision it"
        )
        return 1

    api_url = _api_url()
    base_dir = pathlib.Path(os.environ.get("GITHUB_WORKSPACE") or ".").resolve()

    checks: list[Check] = []

    print("Probing org- and config-repo-level scopes:")
    org_scope_checks = [
        check_org_members(api_url, org, token),
        *check_config_contents_and_write(api_url, org, token),
        check_actions(api_url, org, token),
        check_metadata(api_url, org, token),
    ]
    for check in org_scope_checks:
        print_check(check)
    checks.extend(org_scope_checks)

    # Per-classroom: read the exact team collect-scores reads. Catches the
    # team-visibility gap the org-members proxy can miss.
    classrooms = list(iter_classroom_meta(base_dir))
    if classrooms:
        print("\\nProbing per-classroom team reads:")
        for classroom_short, meta in classrooms:
            team_slug = resolve_team_slug(meta, classroom_short)
            check = check_classroom_team(api_url, org, token, classroom_short, team_slug)
            print_check(check)
            checks.append(check)
            # Probe each staff team the grant targets (see check_staff_team_visible).
            for role, staff_slug in resolve_staff_team_slugs(meta).items():
                staff_check = check_staff_team_visible(
                    api_url, org, token, classroom_short, role, staff_slug
                )
                print_check(staff_check)
                checks.append(staff_check)
    else:
        print("\\nNo classrooms found in the config repo yet — skipping per-team reads.")

    failed = [c for c in checks if not c.ok and not c.skipped]
    passed = [c for c in checks if c.ok and not c.skipped]
    skipped = [c for c in checks if c.skipped]

    print(
        f"\\nprobe-token: {len(passed)} passed, {len(failed)} failed, "
        f"{len(skipped)} skipped"
    )

    if failed:
        emit_error(
            f"service token probe FAILED: {len(failed)} scope check(s) did not pass "
            f"({', '.join(c.name for c in failed)}). Re-create the fine-grained PAT with "
            f"Contents: Read and write, Actions: Read and write, Administration: Read and "
            f"write, and Organization -> Members: Read, then "
            f"\`gh teacher rotate-service-token {org}\`."
        )
        return 1

    emit_notice(
        f"service token probe PASSED: all {len(passed)} required scope check(s) present"
        + (f" ({len(skipped)} skipped as not-applicable)" if skipped else "")
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
`,Ae=`#!/usr/bin/env python3
"""Teacher-triggered regrade fan-out.

Re-runs the autograder across an assignment's student repos WITHOUT changing
each submission. For every targeted repo it re-runs the latest \`autograde.yaml\`
run via the Actions rerun API: grades the SAME commit again and re-fetches the
current autograder from Pages, so a teacher's fixed test / updated autograder
takes effect. Because the runner stamps the submission \`datetime\` from the
graded commit's committer date (not grade time), the submission time and \`late\`
flag are unchanged — only the score/\`graded_at\` move.

A re-run replays at ITS ORIGINAL submit/* commit, NOT the current \`main\` HEAD:
regrade refreshes the score for an EXISTING submission; it does not grade newer
un-submitted work. (Only the first-grade fallback below tags the current HEAD.)

A repo with a \`main\` HEAD but no prior autograde run (never graded) is
first-graded by pushing a fresh \`submit/<UTC-timestamp>-<short-sha>\` tag, which
fires its autograde workflow. Repos with no \`main\` HEAD (student hasn't
accepted/pushed) are skipped.

Grading then happens ASYNCHRONOUSLY inside each student repo, so refreshed
releases are ingested by the next \`collect-scores.py\` run (nightly or "Collect
now"). Until then the gradebook shows PRE-regrade scores — an eventual-
consistency window, by design (collecting here would race the still-running
grade jobs).

Team-driven (mirroring collect_scores.py): the (student, assignment) pairs come
from the classroom GitHub team x \`<classroom>/assignments.json\`. The classroom
team is the source of truth for enrollment. A single
\`OWNER_FILTER\` narrows to one repo (the per-row "Regrade" web action); empty
means the whole assignment.

Environment (set by \`regrade.yaml\`):
  CLASSROOM50_SERVICE_TOKEN — fine-grained PAT, Contents: Read and write AND
                              Actions: Read and write on the student repos, plus
                              Organization -> Members: Read to list the classroom
                              team. Actions: write re-runs a run; Contents: write
                              pushes a submit/* tag for the first-grade case.
  CLASSROOM_FILTER          — classroom short-name (required for regrade).
  ASSIGNMENT_FILTER         — assignment slug (required for regrade).
  OWNER_FILTER              — optional single repo-owner login; empty means
                              every rostered student for the assignment.
  GITHUB_REPOSITORY_OWNER   — org name (auto-set by Actions).
  GITHUB_API_URL            — API URL on GHES runners.
  GH_API_URL                — explicit override (test servers).

Exit codes:
  0 — success (every targeted repo re-run, first-graded, or had nothing to do).
  1 — operational failure (missing token/inputs, auth rejection, unrecoverable
      network error). Per-repo failures warn and skip.
"""

from __future__ import annotations

import datetime
import json
import os
import pathlib
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any, Callable

# Schema sentinels — keep in lockstep with collect_scores.py and the Go
# constants in cli/gh-teacher/classroom.go / assignments_json.go.
CLASSROOM_SCHEMA_V1 = "classroom50/classroom/v1"
ASSIGNMENTS_SCHEMA_V1 = "classroom50/assignments/v1"

# Trigger contract: the autograde workflow fires on \`submit/*\` tags. Keep this
# prefix aligned with autograde-runner.yaml and collect_scores.py.
SUBMIT_TAG_PREFIX = "submit/"

# Fallback submission branch when a repo's default branch can't be read.
# Submissions grade off the repo's default branch (the autograde shim's
# \`on.push.branches\`); \`main\` is only the fallback for a repo with no default.
SUBMISSION_BRANCH = "main"

# How often (every N repos) the fan-out logs incremental progress, so a run
# killed by the Actions job timeout still leaves per-repo accounting in the log
# rather than only the final summary.
PROGRESS_EVERY = 25

# Coarse filter for obviously-bogus usernames so they don't get formatted
# into a URL. Mirrors collect_scores.py; not a strict GitHub validator.
_USERNAME_BAD_CHARS = re.compile(r"[^A-Za-z0-9-]")


def _compile_tag_pattern(pattern: str) -> re.Pattern[str] | None:
    """One Actions tag-filter pattern -> an anchored regex, or None when it
    can't compile (fail closed: matches nothing). Character by character so
    \`.\` and other regex metacharacters in the pattern stay literal. Supported
    subset: literal names, \`*\` (not crossing \`/\`), \`**\` (crossing), \`?\`/\`+\`
    (zero-or-one / one-or-more of the preceding element), \`[abc]\` classes.
    """
    out = ["^"]
    i = 0
    while i < len(pattern):
        ch = pattern[i]
        if ch == "*":
            if i + 1 < len(pattern) and pattern[i + 1] == "*":
                out.append(".*")  # ** crosses /
                i += 1
            else:
                out.append("[^/]*")  # * stops at /
        elif ch in ("?", "+"):
            out.append(ch)
        elif ch == "[":
            close = pattern.find("]", i + 1)
            if close != -1:
                out.append(pattern[i : close + 1])  # class verbatim
                i = close
            else:
                out.append(re.escape(ch))  # unclosed [ is literal
        else:
            out.append(re.escape(ch))
        i += 1
    out.append("$")
    try:
        return re.compile("".join(out))
    except re.error:
        return None


# The safe-pattern charset — literal-name characters plus the glob
# metacharacters GitHub Actions tag filters support. Keep in lockstep with Go
# contract.SubmissionTagCharsetRE and the web SUBMISSION_TAG_PATTERN_RE.
_TAG_PATTERN = re.compile(r"^[A-Za-z0-9._/*?+\\[\\]-]+$")

# A leading \`?\`/\`+\` (nothing to repeat) or a \`+\` stacked on another
# quantifier (\`v*+\`, \`a++\`). LOAD-BEARING here in the Python mirror: those
# translate to POSSESSIVE quantifiers, which Python 3.11+ compiles (and
# matches!) while Go RE2 and JS reject — without this guard the four matcher
# copies would diverge on exactly these patterns. Keep in lockstep with Go
# contract.stackedQuantifierRE and the web copies.
_STACKED_QUANTIFIER = re.compile(r"^[?+]|[*?+]\\+")


def matches_submission_tag(patterns: list[str], tag: str) -> bool:
    """Whether \`tag\` matches ANY of the Actions tag-filter \`patterns\`; an
    empty list matches nothing. By-value copy of Go's
    contract.MatchesSubmissionTag and the web matchesSubmissionTag — all
    pinned to identical output by the shared golden fixture
    cli/shared/testdata/submission_tag_match_cases.json. The same strings are
    rendered into the shim's on.push.tags, so this matcher and GitHub's own
    filter evaluation must agree on what fires. Keep in lockstep."""
    for pattern in patterns:
        if not _TAG_PATTERN.fullmatch(pattern) or _STACKED_QUANTIFIER.search(pattern):
            continue  # fail closed, matching the Go/JS charset+compile guards
        compiled = _compile_tag_pattern(pattern)
        if compiled is not None and compiled.fullmatch(tag) is not None:
            return True
    return False


# Top-level dispatch ----------------------------------------------------------


def main() -> int:
    base_dir = pathlib.Path(os.environ.get("GITHUB_WORKSPACE") or ".").resolve()

    classroom_filter = (os.environ.get("CLASSROOM_FILTER") or "").strip()
    assignment_filter = (os.environ.get("ASSIGNMENT_FILTER") or "").strip()
    owner_filter = (os.environ.get("OWNER_FILTER") or "").strip()

    # Regrade is always scoped to one classroom + assignment — unlike collect
    # (which can sweep all classrooms), there's no "regrade everything" mode, so
    # both inputs are required.
    if not classroom_filter:
        emit_error("CLASSROOM_FILTER is empty — regrade requires a classroom short-name")
        return 1
    if not assignment_filter:
        emit_error("ASSIGNMENT_FILTER is empty — regrade requires an assignment slug")
        return 1

    org = (os.environ.get("GITHUB_REPOSITORY_OWNER") or "").strip()
    if not org:
        emit_error(
            "GITHUB_REPOSITORY_OWNER is empty — this script must run inside a GitHub Actions workflow"
        )
        return 1

    service_token = (os.environ.get("CLASSROOM50_SERVICE_TOKEN") or "").strip()
    if not service_token:
        emit_error(
            "CLASSROOM50_SERVICE_TOKEN is empty — run \`gh teacher rotate-service-token <org>\` to provision it"
        )
        return 1

    api_url = (
        os.environ.get("GH_API_URL")
        or os.environ.get("GITHUB_API_URL")
        or "https://api.github.com"
    ).rstrip("/")

    classroom_dir = base_dir / classroom_filter
    try:
        roster, entry = load_roster(classroom_dir, assignment_filter, api_url, org, service_token)
    except EmptyRepoAssignment:
        # Successful no-op, not a failure: the teacher (or a stale button)
        # targeted an assignment that never autogrades (empty_repo, or a
        # templated no_autograder with teacher-supplied CI).
        print(
            f"regrade {classroom_filter}/{assignment_filter}: assignment does "
            f"not autograde (empty_repo or no_autograder) — nothing to regrade."
        )
        return 0
    except RegradeInputError as exc:
        emit_error(str(exc))
        return 1
    except urllib.error.HTTPError as exc:
        if is_hard_http_error(exc):
            emit_error(
                f"{classroom_filter}: could not list the classroom team — service token "
                f"rejected or network unavailable (HTTP {exc.code} {exc.reason or 'no reason'}). "
                f"Ensure CLASSROOM50_SERVICE_TOKEN has Organization -> Members: Read with "
                f"\`gh teacher rotate-service-token {org}\`"
            )
            return 1
        emit_error(
            f"{classroom_filter}: listing the classroom team failed with HTTP {exc.code} "
            f"({exc.reason or 'no reason'})"
        )
        return 1
    except (json.JSONDecodeError, ValueError) as exc:
        # A non-array team-listing body or the pagination page cap raises here
        # (see _paginate_login_list). Surface it as a loud error rather than an
        # uncaught traceback — mirrors collect_scores.py's handling of the same
        # raise.
        emit_error(
            f"{classroom_filter}: classroom team member listing malformed ({exc})"
        )
        return 1

    # An empty team (enrollment flux, or a team not yet populated) means there's
    # nothing to regrade — succeed, but warn so a green 0-repo run isn't mistaken
    # for a successful regrade. Mirrors collect_scores.py's empty-team warning. A
    # single-owner regrade surfaces its own "not a member" error below instead.
    if not roster and not owner_filter:
        emit_warning(
            f"{classroom_filter}: classroom team has no members — nothing to regrade "
            f"for assignment {assignment_filter!r}."
        )

    # Narrow to a single owner for the per-row regrade action. A filter matching
    # no team member is a teacher mistake (typo / off-team student), so fail
    # loudly rather than silently tagging nothing.
    targets = roster
    if owner_filter:
        targets = [u for u in roster if u.lower() == owner_filter.lower()]
        if not targets:
            emit_error(
                f"OWNER_FILTER={owner_filter!r} is not a member of the {classroom_filter} "
                f"classroom team for assignment {assignment_filter!r}; nothing to regrade"
            )
            return 1

    # Tag-mode assignments introduce runs that complete green but grade
    # nothing (a suppressed stale-shim branch push); regrade_repo must skip
    # those when picking the run to replay. Milestone submission_tags runs
    # are real graded runs, so the patterns ride along for the run filter.
    tag_mode = is_tag_submission_mode(entry)
    submission_tags = entry.get("submission_tags") or []
    if not isinstance(submission_tags, list):
        submission_tags = []

    regraded = 0   # rerun an existing run (the true regrade)
    tagged = 0     # first-grade fallback (no prior run, tagged main HEAD)
    skipped = 0    # nothing to do (not accepted) or benign skip
    failed: list[str] = []
    total = len(targets)
    for index, username in enumerate(targets, start=1):
        repo_name = assignment_repo_name(classroom_filter, assignment_filter, username)
        try:
            outcome = regrade_repo(
                api_url, org, repo_name, service_token, tag_mode, submission_tags
            )
        except _SkipRepo:
            # Benign per-repo skip (e.g., the latest run can't be re-run right
            # now); already warned at the source.
            skipped += 1
            continue
        except urllib.error.HTTPError as exc:
            if is_hard_http_error(exc):
                emit_error(
                    f"{org}/{repo_name}: regrade aborted — service token rejected or network "
                    f"unavailable (HTTP {exc.code} {exc.reason or 'no reason'}). Re-scope the PAT "
                    f"to Contents: Read and write AND Actions: Read and write with "
                    f"\`gh teacher rotate-service-token {org}\`"
                )
                return 1
            emit_warning(
                f"{org}/{repo_name}: regrade failed: HTTP {exc.code} "
                f"({exc.reason or 'no reason'}); skipping"
            )
            failed.append(repo_name)
            continue
        except (json.JSONDecodeError, ValueError) as exc:
            emit_warning(f"{org}/{repo_name}: regrade failed ({exc}); skipping")
            failed.append(repo_name)
            continue

        if outcome == "rerun":
            regraded += 1
        elif outcome == "tagged":
            tagged += 1
        else:
            # "missing": the student hasn't accepted/pushed — nothing to grade.
            skipped += 1

        # Incremental progress checkpoint. The final summary below only prints
        # if the loop completes, so a job killed by the Actions timeout (a large
        # roster is a long sequential fan-out) would otherwise leave NO per-repo
        # accounting. Re-dispatching is safe (rerun is idempotent and the tag
        # path reuses an existing submit/* tag at HEAD), so a teacher can rerun.
        if index % PROGRESS_EVERY == 0 or index == total:
            print(
                f"regrade {classroom_filter}/{assignment_filter}: progress "
                f"{index}/{total} (re-ran {regraded}, first-graded {tagged}, "
                f"skipped {skipped}, failed {len(failed)})"
            )

    print(
        f"regrade {classroom_filter}/{assignment_filter}: re-ran {regraded}, "
        f"first-graded {tagged}, skipped {skipped} across {total} repo(s). "
        f"Grading runs asynchronously inside each student repo and can take "
        f"minutes; refreshed scores are NOT visible until the next collect-scores "
        f"run ingests the new releases (nightly cron, or \\"Collect now\\")."
    )
    if failed:
        emit_error(
            f"regrade: {len(failed)} repo(s) could not be regraded and were skipped: "
            f"{', '.join(sorted(failed))} (the others were regraded)"
        )
        return 1
    return 0


# Per-repo regrade ------------------------------------------------------------


# The student-repo autograde workflow filename (the shim gh-student writes at
# accept time, \`name: Autograde\`). Re-running its latest run re-fetches the
# current autograder from Pages and re-grades the same commit. Cross-binary:
# keep aligned with cli/gh-student/embed/autograde-shim.yaml's filename.
AUTOGRADE_WORKFLOW = "autograde.yaml"


def regrade_repo(
    api_url: str,
    org: str,
    repo: str,
    token: str,
    tag_mode: bool,
    submission_tags: list[str] | None = None,
) -> str:
    """Re-run grading for \`repo\` on its existing latest submission, without
    creating a new one. Returns one of:

      "rerun"   — re-ran the latest autograde run: grades the SAME commit again
                  (re-fetching the current autograder), and because the runner
                  stamps \`datetime\` from the commit's committer date, the
                  submission time / late flag DON'T change — only the score.
      "tagged"  — no (usable) prior run, so a fresh submit/<ts>-<sha> tag was
                  pushed to first-grade the main HEAD. (Submission time is
                  still the commit's committer date; \`graded_at\` records the
                  new run.)
      "missing" — no prior run and no main HEAD (student hasn't
                  accepted/pushed); nothing to do.

    tag_mode narrows which run counts as "the latest submission": on a
    tag-mode assignment a branch-triggered run is a SUPPRESSED run (a stale
    every-push shim fired; the runner tagged and graded nothing), and
    replaying it would re-suppress — regrade would report success while
    grading nothing. So in tag mode only submit/* tag runs are candidates;
    a repo with none (only suppressed pushes, or no runs at all) falls
    through to the tag-at-HEAD path, which fires a REAL tag run (the
    service token's tag push fires workflows). Every-push keeps today's
    behavior exactly — its branch runs are real graded runs.

    Raises urllib.error.HTTPError / ValueError on a hard failure the caller
    classifies (auth/network abort; other per-repo errors warn-and-skip).
    """
    # Prefer re-running the existing run: a true "regrade the same commit" with
    # no new tag and no new submission event.
    run_id = latest_autograde_run_id(
        api_url, org, repo, token, tag_only=tag_mode, submission_tags=submission_tags
    )
    if run_id is not None:
        rerun_workflow_run(api_url, org, repo, token, run_id)
        return "rerun"

    # No prior run. If the repo has a main HEAD, kick off a first grade by
    # tagging it; otherwise there's nothing to regrade.
    head_sha = main_head_sha(api_url, org, repo, token)
    if head_sha is None:
        return "missing"

    # A submit/* tag may already sit at HEAD (tagged but the run was deleted);
    # reuse it rather than stacking a duplicate.
    if existing_submit_tag_at(api_url, org, repo, token, head_sha) is not None:
        return "tagged"

    tag = build_submit_tag(head_sha)
    create_tag_ref(api_url, org, repo, token, tag, head_sha)
    return "tagged"


def latest_autograde_run_id(
    api_url: str,
    org: str,
    repo: str,
    token: str,
    *,
    tag_only: bool = False,
    submission_tags: list[str] | None = None,
) -> int | None:
    """The id of the most recent autograde run on \`repo\`, or None when it has
    never run (or doesn't exist yet). Run ids are newest-first from the API, so
    the first entry is the latest run — the one a regrade re-runs.

    tag_only=True (tag-mode assignments) considers only runs whose head_branch
    names a real submission tag (GitHub sets head_branch to the tag on
    tag-push runs): the canonical submit/* namespace, or a teacher-named
    milestone pattern from \`submission_tags\` (a milestone run grades for real
    — its record lives at the canonical tag the runner mints). Branch-
    triggered runs on a tag-mode assignment are suppressed no-ops that must
    never be replayed. One 100-run page is scanned, no pagination: if the
    newest submission run has scrolled past 100 suppressed pushes, we return
    None and the caller's tag-at-HEAD fallback freshly grades HEAD instead —
    acceptable for that degenerate case.
    """
    per_page = 100 if tag_only else 1
    url = (
        f"{_repo_url(api_url, org, repo)}/actions/workflows/"
        f"{urllib.parse.quote(AUTOGRADE_WORKFLOW)}/runs?per_page={per_page}"
    )
    try:
        body = _http_get(url, token, accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        # 404 = repo or workflow not present yet (never accepted / never ran).
        if exc.code == 404:
            return None
        raise
    data = json.loads(body.decode("utf-8"))
    runs = data.get("workflow_runs") if isinstance(data, dict) else None
    if not isinstance(runs, list) or not runs:
        return None
    run: Any = None
    if tag_only:
        patterns = submission_tags or []
        for candidate in runs:
            if not isinstance(candidate, dict):
                continue
            head_branch = candidate.get("head_branch")
            if not isinstance(head_branch, str):
                continue
            if head_branch.startswith(SUBMIT_TAG_PREFIX) or matches_submission_tag(
                patterns, head_branch
            ):
                run = candidate
                break
        if run is None:
            return None
    else:
        run = runs[0]
    run_id = run.get("id") if isinstance(run, dict) else None
    if not isinstance(run_id, int):
        raise ValueError("workflow run object missing an integer id")
    return run_id


def rerun_workflow_run(
    api_url: str, org: str, repo: str, token: str, run_id: int
) -> None:
    """Re-run a completed workflow run via the Actions rerun API. Replays at
    the same commit; runtime-fetched resources (runner.py and the autograder
    bundle, both from Pages at grade time) are re-fetched, so a teacher's updated
    autograder takes effect. A 403 (not re-runnable — e.g., still in progress) is
    surfaced as a per-repo skip by the caller, not a hard auth failure, so one
    un-rerunnable repo doesn't abort the run."""
    url = f"{_repo_url(api_url, org, repo)}/actions/runs/{run_id}/rerun"
    try:
        _http_request("POST", url, token, body=b"{}", accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        # 403 here means "this run can't be re-run right now" (in progress, or
        # too old); treat as a benign per-repo skip rather than a token error.
        if exc.code == 403:
            emit_warning(
                f"{org}/{repo}: latest autograde run {run_id} can't be re-run "
                f"right now (in progress or expired); skipping"
            )
            raise _SkipRepo() from exc
        raise


class _SkipRepo(Exception):
    """A benign per-repo condition (e.g., a non-rerunnable run) that should be
    counted as skipped, not failed."""


def build_submit_tag(sha: str) -> str:
    """submit/<UTC-timestamp>-<short-sha>. The short-SHA suffix prevents
    collisions when two regrades land in the same UTC second. Mirrors the tag
    format autograde-runner.yaml writes for a branch push."""
    stamp = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H-%M-%SZ")
    return f"{SUBMIT_TAG_PREFIX}{stamp}-{sha[:7]}"


def repo_default_branch(api_url: str, org: str, repo: str, token: str) -> str | None:
    """The repo's default branch (which GitHub may have named \`master\`), or None
    when the repo doesn't exist (404) — the student hasn't accepted."""
    try:
        body = _http_get(
            _repo_url(api_url, org, repo), token, accept="application/vnd.github+json"
        )
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return None
        raise
    data = json.loads(body.decode("utf-8"))
    branch = data.get("default_branch") if isinstance(data, dict) else None
    if isinstance(branch, str) and branch:
        return branch
    return SUBMISSION_BRANCH


def main_head_sha(api_url: str, org: str, repo: str, token: str) -> str | None:
    """The commit SHA at \`repo\`'s default-branch HEAD, or None when the repo
    or branch doesn't exist (404) — the student hasn't accepted/pushed.

    Resolves the repo's actual default branch first (it may be \`master\`), so a
    non-main repo is regraded off its real HEAD rather than a nonexistent
    \`main\`."""
    branch = repo_default_branch(api_url, org, repo, token)
    if branch is None:
        return None
    url = f"{_repo_url(api_url, org, repo)}/git/ref/heads/{urllib.parse.quote(branch)}"
    try:
        body = _http_get(url, token, accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return None
        raise
    ref = json.loads(body.decode("utf-8"))
    obj = ref.get("object") if isinstance(ref, dict) else None
    sha = obj.get("sha") if isinstance(obj, dict) else None
    if not isinstance(sha, str) or not sha:
        raise ValueError(f"git/ref/heads/{branch} returned no object.sha")
    return sha


def existing_submit_tag_at(
    api_url: str, org: str, repo: str, token: str, sha: str
) -> str | None:
    """Return a submit/* tag name already pointing at \`sha\`, or None.

    Lists the repo's submit/* tag refs and matches on the pointed-at commit. A
    lightweight tag's ref points straight at the commit (object.type ==
    "commit"); an ANNOTATED tag's ref points at a tag object (object.type ==
    "tag"), so its object.sha is the tag's own sha — that case is dereferenced
    via git/tags/<sha> to recover the target commit before comparing. Resolving
    both keeps the first-grade fallback idempotent even when a prior submit tag
    was annotated (autograde-runner.yaml's set-latest step shows annotated
    submit tags occur), so a regrade reuses the existing tag instead of minting
    a duplicate that yields two releases for one commit."""
    url = (
        f"{_repo_url(api_url, org, repo)}/git/matching-refs/"
        f"tags/{urllib.parse.quote(SUBMIT_TAG_PREFIX, safe='')}"
    )
    try:
        body = _http_get(url, token, accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        if exc.code == 404:
            return None
        raise
    refs = json.loads(body.decode("utf-8"))
    if not isinstance(refs, list):
        raise ValueError("git/matching-refs/tags did not return an array")
    for ref in refs:
        if not isinstance(ref, dict):
            continue
        obj = ref.get("object")
        ref_name = ref.get("ref") or ""
        if not (
            isinstance(obj, dict)
            and isinstance(ref_name, str)
            and ref_name.startswith(f"refs/tags/{SUBMIT_TAG_PREFIX}")
        ):
            continue
        if _ref_points_at_commit(api_url, org, repo, token, obj, sha):
            return ref_name[len("refs/tags/") :]
    return None


def _ref_points_at_commit(
    api_url: str, org: str, repo: str, token: str, obj: dict, sha: str
) -> bool:
    """Whether a tag ref's \`object\` ultimately points at commit \`sha\`.

    A lightweight tag's object IS the commit (type == "commit"); an annotated
    tag's object is a tag object (type == "tag") whose git/tags/<sha>
    target.object.sha is the commit. A failed dereference is treated
    conservatively as a non-match (worst case: a duplicate release, never a
    missed regrade)."""
    obj_sha = obj.get("sha")
    if not isinstance(obj_sha, str) or not obj_sha:
        return False
    if obj_sha == sha:
        return True
    # Annotated tag: the ref points at a tag object, so dereference it to the
    # commit it wraps. Lightweight tags (type "commit") already matched/failed
    # above, so only chase the tag-object case.
    if obj.get("type") != "tag":
        return False
    tag_url = f"{_repo_url(api_url, org, repo)}/git/tags/{urllib.parse.quote(obj_sha, safe='')}"
    try:
        body = _http_get(tag_url, token, accept="application/vnd.github+json")
    except urllib.error.HTTPError:
        return False
    try:
        tag_obj = json.loads(body.decode("utf-8"))
    except (json.JSONDecodeError, ValueError):
        return False
    target = tag_obj.get("object") if isinstance(tag_obj, dict) else None
    target_sha = target.get("sha") if isinstance(target, dict) else None
    return isinstance(target_sha, str) and target_sha == sha


def create_tag_ref(
    api_url: str, org: str, repo: str, token: str, tag: str, sha: str
) -> None:
    """Create a lightweight tag ref \`refs/tags/<tag>\` at \`sha\`. A 422 whose body
    says the ref already exists is benign — a concurrent regrade won the race —
    so it's swallowed; any OTHER 422 (invalid sha, unprocessable payload) is a
    real failure and propagates, so the caller records it as failed rather than
    mis-counting the repo as first-graded."""
    url = f"{_repo_url(api_url, org, repo)}/git/refs"
    payload = json.dumps({"ref": f"refs/tags/{tag}", "sha": sha}).encode("utf-8")
    try:
        _http_request("POST", url, token, body=payload, accept="application/vnd.github+json")
    except urllib.error.HTTPError as exc:
        # Only swallow the "reference already exists" 422 — GitHub returns that
        # for a duplicate ref. Any other 422 (invalid sha, malformed ref) must
        # NOT count as a successful tagging, so re-raise for warn-and-skip.
        if exc.code == 422 and _http_error_says_ref_exists(exc):
            emit_warning(
                f"{org}/{repo}: tag {tag} already exists (concurrent regrade?); leaving as-is"
            )
            return
        raise


def _http_error_says_ref_exists(exc: urllib.error.HTTPError) -> bool:
    """Whether a 422's response body reports the ref already exists.

    GitHub's git/refs endpoint returns \`{"message": "Reference already
    exists", ...}\` for a duplicate ref. Match on that (case-insensitively) so a
    genuinely different 422 isn't mistaken for the benign race. An unreadable
    body falls back to False (treat as a real error) — failing safe toward
    surfacing the failure."""
    try:
        raw = exc.read()
    except (OSError, ValueError):
        return False
    if not raw:
        return False
    try:
        body = json.loads(raw.decode("utf-8", errors="replace"))
    except (json.JSONDecodeError, ValueError):
        return False
    message = body.get("message") if isinstance(body, dict) else None
    return isinstance(message, str) and "already exists" in message.lower()


# Roster / assignment loading -------------------------------------------------


class RegradeInputError(Exception):
    """A missing/malformed classroom dir, classroom.json, or assignments.json."""


class EmptyRepoAssignment(Exception):
    """The target assignment never autogrades — empty_repo: true (bare repos)
    or no_autograder: true (templated, teacher-supplied CI). Student repos carry
    no autograde workflow, so there is nothing to re-run and no HEAD worth
    tagging (the first-grade fallback would push submit/* tags that fire
    nothing). main() treats this as a successful no-op, not an error."""


def is_empty_repo(entry: dict[str, Any]) -> bool:
    """True only when empty_repo is the boolean \`true\`. The wire contract is a
    JSON boolean (Go decodes a strict \`bool\`; TS uses \`=== true\`), so a
    non-boolean value from a hand-edited manifest is not empty_repo. Keep this
    byte-identical to collect_scores.py / the autograde-runner so every tool
    agrees on the predicate."""
    return entry.get("empty_repo") is True


def is_no_autograder(entry: dict[str, Any]) -> bool:
    """True only when no_autograder is the boolean \`true\` (strict, like
    is_empty_repo). A templated no_autograder assignment commits no shim, so it
    never autogrades and produces no submit/* releases — regrade has nothing to
    re-run and no HEAD worth tagging. Keep byte-identical to collect_scores.py /
    the autograde-runner so every tool agrees."""
    return entry.get("no_autograder") is True


def is_init_shim(entry: dict[str, Any]) -> bool:
    """True only when init_shim is the boolean \`true\` (strict, like
    is_empty_repo). An init_shim assignment initializes a template-less repo
    with only the marker + default shim — it DOES autograde, so unlike
    empty_repo/no_autograder it is NOT part of skips_grading(): regrade treats
    it as a normal grading assignment. Keep byte-identical to collect_scores.py."""
    return entry.get("init_shim") is True


def skips_grading(entry: dict[str, Any]) -> bool:
    """True when the assignment never autogrades — either a bare empty_repo or a
    templated no_autograder (teacher-supplied CI). The "does not autograde"
    predicate family shared with collect_scores.py. NOTE: init_shim is
    deliberately EXCLUDED — it commits the default shim and autogrades."""
    return is_empty_repo(entry) or is_no_autograder(entry)


def is_tag_submission_mode(entry: dict[str, Any]) -> bool:
    """Whether the assignment grades ONLY on submit/* tag pushes. Strict
    equality mirroring the Go Entry.IsTagSubmissionMode: absent, "every-push",
    and any junk value all read as every-push (fail open to today's regrade
    behavior; the runner polices invalid modes at grade time)."""
    return entry.get("submission_mode") == "tag"


def load_roster(
    classroom_dir: pathlib.Path,
    assignment_slug: str,
    api_url: str,
    org: str,
    token: str,
) -> tuple[list[str], dict[str, Any]]:
    """(team members to regrade, the assignment's manifest entry) for an
    assignment registered in this classroom.

    Validates the assignments.json schema and that the target slug is
    registered (so a typo'd slug fails loudly rather than tagging nothing), then
    enumerates the classroom GitHub team — the source of truth for enrollment.
    The entry rides along so main() can read submission_mode (regrade must not
    replay a suppressed tag-mode branch run — see regrade_repo). Config
    problems raise RegradeInputError; a team-listing HTTP error propagates so
    main() can classify it (hard auth/network vs. transient).
    """
    if not classroom_dir.is_dir():
        raise RegradeInputError(
            f"classroom {classroom_dir.name!r} not found in the config repo"
        )

    assignments_path = classroom_dir / "assignments.json"
    if not assignments_path.is_file():
        raise RegradeInputError(f"{classroom_dir.name}/assignments.json not found")
    try:
        assignments = json.loads(assignments_path.read_text())
    except (OSError, json.JSONDecodeError) as exc:
        raise RegradeInputError(f"{classroom_dir.name}/assignments.json: {exc}") from exc
    if not isinstance(assignments, dict) or assignments.get("schema") != ASSIGNMENTS_SCHEMA_V1:
        raise RegradeInputError(
            f"{classroom_dir.name}/assignments.json schema = "
            f"{assignments.get('schema')!r}, want {ASSIGNMENTS_SCHEMA_V1!r}"
        )
    entries = {
        e["slug"]: e
        for e in (assignments.get("assignments") or [])
        if isinstance(e, dict) and isinstance(e.get("slug"), str) and e.get("slug")
    }
    if assignment_slug not in entries:
        raise RegradeInputError(
            f"assignment {assignment_slug!r} is not registered in "
            f"{classroom_dir.name}/assignments.json"
        )
    # Assignments that never autograde (empty_repo, or a templated
    # no_autograder with teacher-supplied CI) commit no autograde workflow, so
    # skip before the team listing — otherwise the first-grade fallback would
    # push useless submit/* tags into every student repo.
    if skips_grading(entries[assignment_slug]):
        raise EmptyRepoAssignment(assignment_slug)

    # Resolve the classroom team slug: classroom.json's authoritative team.slug
    # (GitHub may re-slug on a name collision), else the derived slug.
    classroom_meta: dict[str, Any] = {}
    classroom_path = classroom_dir / "classroom.json"
    if classroom_path.is_file():
        try:
            loaded = json.loads(classroom_path.read_text())
        except (OSError, json.JSONDecodeError) as exc:
            raise RegradeInputError(
                f"{classroom_dir.name}/classroom.json: {exc}"
            ) from exc
        if isinstance(loaded, dict):
            classroom_meta = loaded
    team_slug = resolve_team_slug(classroom_meta, classroom_dir.name)

    logins = list_team_member_logins(api_url, org, team_slug, token)

    # Dedupe case-insensitively (first-seen casing wins) and drop obviously-bogus
    # logins so they don't reach the repo-name/URL builder.
    seen: set[str] = set()
    usernames: list[str] = []
    for login in logins:
        username = login.strip()
        key = username.lower()
        if not username or key in seen:
            continue
        if _USERNAME_BAD_CHARS.search(username):
            emit_warning(
                f"{classroom_dir.name}: classroom team member with malformed login "
                f"{username!r}; skipping that student"
            )
            continue
        seen.add(key)
        usernames.append(username)
    return usernames, entries[assignment_slug]


def resolve_team_slug(classroom_meta: dict[str, Any], classroom_short: str) -> str:
    """The classroom's GitHub team slug: persisted classroom.json \`team.slug\`
    when present (authoritative — GitHub may re-slug on a name collision, e.g.
    \`classroom50-cs-1\`), else the derived \`classroom50-<short>\`. Mirrors
    collect_scores.py's resolve_team_slug and the web/Go resolvers so all target
    the same team."""
    team = classroom_meta.get("team")
    if isinstance(team, dict):
        slug = team.get("slug")
        if isinstance(slug, str) and slug.strip():
            return slug.strip()
    return f"classroom50-{classroom_short}"


def list_team_member_logins(
    api_url: str, org: str, team_slug: str, token: str
) -> list[str]:
    """Logins of every member of the classroom team, walking pagination. The
    team-driven username source for regrade (mirrors collect_scores.py): the
    classroom GitHub team is authoritative for enrollment. Hits
    GET /orgs/{org}/teams/{slug}/members.

    Pagination follows GitHub's \`Link: rel="next"\` header, host-pinned to
    api_url so a crafted Link can't pivot the token. Raises
    urllib.error.HTTPError on any non-2xx (including 404 when the team doesn't
    exist) so the caller can classify hard vs. transient."""
    per_page = 100
    base = (
        f"{api_url}/orgs/{urllib.parse.quote(org, safe='')}/teams/"
        f"{urllib.parse.quote(team_slug, safe='')}/members"
    )
    return _paginate_login_list(
        page_url=lambda page: f"{base}?per_page={per_page}&page={page}",
        api_url=api_url,
        token=token,
        resource_label=f"orgs/{org}/teams/{team_slug}/members",
    )


def _paginate_login_list(
    page_url: Callable[[int], str],
    api_url: str,
    token: str,
    resource_label: str,
) -> list[str]:
    """Walk a paginated GitHub list-of-accounts endpoint, returning every
    \`login\`. Only the first page uses \`page_url\`; subsequent pages follow
    GitHub's \`Link: rel="next"\`, host-pinned via _assert_same_host so a crafted
    Link can't pivot the token. When no Link header is present, falls back to
    page+1 and stops on a short page. A self/looping rel="next" is bounded by
    seen_next. Mirrors collect_scores.py's helper of the same name.

    Raises urllib.error.HTTPError on any non-2xx (including 404) so the caller
    can classify; raises ValueError on a non-array body or on hitting the cap.
    """
    per_page = 100
    max_pages = 100
    logins: list[str] = []
    url = page_url(1)
    seen_next: set[str] = set()
    for page in range(1, max_pages + 1):
        body, headers = _http_get_with_headers(
            url, token, accept="application/vnd.github+json"
        )
        batch = json.loads(body.decode("utf-8"))
        if not isinstance(batch, list):
            raise ValueError(
                f"GET {url}: expected JSON array, got {type(batch).__name__}"
            )
        for item in batch:
            if not isinstance(item, dict):
                continue
            login = item.get("login")
            if isinstance(login, str) and login:
                logins.append(login)
        link_header = headers.get("Link") if headers else None
        next_url = _next_page_link(link_header)
        if next_url:
            next_url = _assert_same_host(next_url, api_url)
            if next_url in seen_next:
                return logins
            seen_next.add(next_url)
            url = next_url
            continue
        if link_header or len(batch) < per_page:
            return logins
        url = page_url(page + 1)
    raise ValueError(
        f"{resource_label}: too many entries to enumerate "
        f"(hit the {max_pages}-page cap)"
    )


def _next_page_link(link_header: str | None) -> str | None:
    """The \`rel="next"\` URL from a GitHub \`Link\` header, or None. Mirrors
    collect_scores.py's _next_page_link."""
    if not link_header:
        return None
    m = re.search(r'<([^>]+)>\\s*;\\s*[^,]*rel="next"', link_header)
    return m.group(1) if m else None


def _assert_same_host(next_url: str, api_url: str) -> str:
    """Return next_url only if its scheme+host match api_url's; else raise
    ValueError. The pagination loop attaches the bearer token to whatever URL it
    follows, so a malicious \`Link: rel="next"\` pointing off-host would pivot the
    token. Mirrors collect_scores.py's _assert_same_host."""
    api = urllib.parse.urlsplit(api_url)
    nxt = urllib.parse.urlsplit(next_url)
    if (nxt.scheme, nxt.netloc) != (api.scheme, api.netloc):
        raise ValueError(
            f"pagination Link points off-host "
            f"({nxt.scheme}://{nxt.netloc} != {api.scheme}://{api.netloc}); "
            f"refusing to send the service token to a different host"
        )
    return next_url


def assignment_repo_name(classroom: str, assignment: str, username: str) -> str:
    """Canonical student-repo name. Mirrors the formula single-sourced in
    cli/shared/contract (AssignmentRepoName); keep byte-identical or the
    regrade fan-out misidentifies submissions."""
    return f"{classroom.lower()}-{assignment.lower()}-{username.lower()}"


# GitHub API helpers ----------------------------------------------------------


def _repo_url(api_url: str, owner: str, repo: str) -> str:
    return (
        f"{api_url}/repos/{urllib.parse.quote(owner, safe='')}/"
        f"{urllib.parse.quote(repo, safe='')}"
    )


class _AuthStrippingRedirect(urllib.request.HTTPRedirectHandler):
    """Drop Authorization on redirect so the service token isn't forwarded to a
    redirect target on a different host. CPython's default handler replays every
    request header (including Authorization) across a cross-host 3xx, which would
    leak the fine-grained CLASSROOM50_SERVICE_TOKEN; _assert_same_host only pins
    the explicit Link-follow, not a transport-level redirect. Mirrors
    collect_scores.py's _AuthStrippingRedirect (kept in lockstep)."""

    def redirect_request(self, req, fp, code, msg, headers, newurl):
        new_req = super().redirect_request(req, fp, code, msg, headers, newurl)
        if new_req is None:
            return None
        for h in ("Authorization", "authorization"):
            new_req.headers.pop(h, None)
            if hasattr(new_req, "unredirected_hdrs"):
                new_req.unredirected_hdrs.pop(h, None)
        return new_req


_OPENER = urllib.request.build_opener(_AuthStrippingRedirect)


def _http_get(url: str, token: str, *, accept: str, _retries: int = 3) -> bytes:
    """GET \`url\`; return the body. Thin wrapper over _http_get_with_headers for
    callers that don't need response headers."""
    body, _headers = _http_get_with_headers(url, token, accept=accept, _retries=_retries)
    return body


def _http_get_with_headers(
    url: str, token: str, *, accept: str, _retries: int = 3
) -> tuple[bytes, Any]:
    """GET \`url\` with bearer auth; return (body, response headers). Headers are
    returned so paginated callers can follow \`Link: rel="next"\` (mirrors
    collect_scores.py's _http_get_with_headers)."""
    return _http_send("GET", url, token, accept=accept, body=None, _retries=_retries)


def _http_request(
    method: str,
    url: str,
    token: str,
    *,
    accept: str,
    body: bytes | None = None,
    _retries: int = 3,
) -> bytes:
    """Issue \`method url\` with bearer auth; return the body. Thin wrapper over
    the transport core for callers (the rerun/tag POSTs) that don't need the
    response headers."""
    result, _headers = _http_send(method, url, token, accept=accept, body=body, _retries=_retries)
    return result


def _http_send(
    method: str,
    url: str,
    token: str,
    *,
    accept: str,
    body: bytes | None,
    _retries: int = 3,
) -> tuple[bytes, Any]:
    """The single transport core: issue \`method url\` with bearer auth and return
    (body, response headers). Retries 5xx/429 with backoff (honoring Retry-After),
    wraps a read-phase stall into a synthetic 599 so is_hard_http_error aborts the
    run, and routes through _OPENER so a cross-host redirect strips Authorization.
    Mirrors collect_scores.py's transport."""
    headers = {
        "Accept": accept,
        "Authorization": f"Bearer {token}",
        "User-Agent": "classroom50-regrade",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    # A body is always a JSON payload (the rerun/tag POSTs); GET carries none.
    if body is not None:
        headers["Content-Type"] = "application/json"
    for attempt in range(_retries):
        req = urllib.request.Request(url, method=method, data=body, headers=headers)
        try:
            with _OPENER.open(req, timeout=30) as resp:
                return resp.read(), resp.headers
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 500, 502, 503, 504) and attempt < _retries - 1:
                retry_after = exc.headers.get("Retry-After") if exc.headers else None
                delay = (
                    min(int(retry_after), 30)
                    if (retry_after or "").isdigit()
                    else 2**attempt
                )
                time.sleep(delay)
                continue
            raise
        except (urllib.error.URLError, TimeoutError, OSError) as exc:
            if attempt < _retries - 1:
                time.sleep(2**attempt)
                continue
            raise urllib.error.HTTPError(
                url=url,
                code=599,
                msg=f"network error: {exc}",
                hdrs=None,  # type: ignore[arg-type]
                fp=None,
            ) from exc
    raise RuntimeError(f"_http_send called with _retries={_retries}")


def is_hard_http_error(exc: urllib.error.HTTPError) -> bool:
    """Hard failures that abort the whole run: 401/403 (bad/under-scoped
    token) and 599 (synthetic network-unavailable after retries). Mirrors
    collect_scores.py. A per-repo 404/422 is NOT hard — it warns and skips."""
    return exc.code in (401, 403, 599)


# Workflow-command output -----------------------------------------------------


def emit_error(message: str) -> None:
    print(f"::error::{message}", file=sys.stderr)


def emit_warning(message: str) -> None:
    print(f"::warning::{message}", file=sys.stderr)


# Entry point ----------------------------------------------------------------


if __name__ == "__main__":
    sys.exit(main())
`,je=`#!/usr/bin/env python3
"""classroom50 runner.

Fetched from the teacher's Pages site by the autograde-runner workflow on
every submission. Reads env, resolves an entrypoint (per-assignment
autograder.py > per-assignment tests.json > classroom-default autograder.py
> vacuous pass), execs it in the student checkout, then reads/synthesizes
result.json + release-body.md + $GITHUB_OUTPUT so downstream steps always
have a v1-shaped payload. Per-assignment grading lives in autograder.py —
see the Autograders wiki page.

Exits 0 for EVERY grading outcome, including failures (reported via a
synthetic error result + status=error) so the release/commit-status steps
still fire and the gradebook ingests the submission. Only missing required
identity env (PAGES_BASE_URL, CLASSROOM, ASSIGNMENT, SUBMISSION_TAG) fails
fast with exit 1 — those are needed to synthesize a v1 result.json, and
this only happens when run outside the workflow.

Environment (set by the autograde-runner workflow):
  PAGES_BASE_URL    org-level Pages URL of the classroom50 config repo
  CLASSROOM         classroom short-name
  ASSIGNMENT        assignment slug
  SUBMISSION_TAG    submit/<UTC-timestamp>-<short-sha>
  GITHUB_REPOSITORY <owner>/<repo>
  GITHUB_SHA        commit SHA
  GITHUB_SERVER_URL https://github.com (or GHES base)
  GITHUB_ACTOR      fallback username when the repo name doesn't follow
                    <classroom>-<assignment>-<username>
  GITHUB_OUTPUT     workflow-step output sink

Passed through to the entrypoint: USERNAME, COMMIT_URL, RELEASE_URL,
REVIEW_URL (full baseline...graded diff; falls back to COMMIT_URL when
history is unavailable or baseline == commit).
"""

from __future__ import annotations

import datetime
import difflib
import errno
import importlib.util
import io
import json
import os
import pathlib
import re
import shlex
import shutil
import stat
import subprocess
import sys
import tarfile
import tempfile
import time
import urllib.error
import urllib.parse
import urllib.request
from typing import Any

# Schema sentinel — keep in lockstep with collect_scores.py::validate_result
# (cli/gh-teacher/skeleton/dotgithub/scripts/collect_scores.py).
RESULT_SCHEMA_V1 = "classroom50/result/v1"

# result.json is required; release-body.md optional (synthesized when
# missing). Lockstep with contract.ResultFilename / contract.ReleaseBodyFilename
# (cli/shared/contract/contract.go); test_runner.py pins these literals.
RESULT_FILENAME = "result.json"
RELEASE_BODY_FILENAME = "release-body.md"
RELEASE_ASSETS_DIRNAME = "classroom50-release-assets"
RELEASE_ASSETS_MAX_FILES = 50
RELEASE_ASSETS_MAX_PATH_BYTES = 8_192
RELEASE_ASSETS_MAX_BYTES = 104_857_600
RELEASE_ASSET_BASENAME = re.compile(
    r"^[A-Za-z0-9_-](?:[A-Za-z0-9._-]{0,253}[A-Za-z0-9_-])?$",
    re.ASCII,
)

# Name of both the per-assignment override and classroom-default entrypoint.
ENTRYPOINT_FILENAME = "autograder.py"

# Bundled declarative tests (materialized from assignments.json by
# publish-pages.yaml), graded by the built-in interpreter below. Schema in
# tests.go; contract in the wiki.
TESTS_FILENAME = "tests.json"
TESTS_SCHEMA_V1 = "classroom50/tests/v1"

# Default per-test timeout (s) when \`timeout\` is omitted/0; setup and run
# commands are each bounded by it independently.
DEFAULT_TEST_TIMEOUT = 10

# Cap captured stdout/stderr in the release body so a runaway program can't
# bloat the published release.
MAX_CAPTURED_CHARS = 2000

# ANSI codes for the log report -- the Actions log viewer renders these, the
# release body (Markdown) must never see them, so color is applied only at
# render time in render_log_report.
ANSI_RED = "\\x1b[31m"
ANSI_GREEN = "\\x1b[32m"
ANSI_CYAN = "\\x1b[36m"
ANSI_BOLD = "\\x1b[1m"
ANSI_RESET = "\\x1b[0m"

# Test types and io comparison modes -- mirror the allow-lists in tests.go.
TEST_TYPE_IO = "io"
TEST_TYPE_RUN = "run"
TEST_TYPE_PYTHON = "python"
TEST_TYPES = (TEST_TYPE_IO, TEST_TYPE_RUN, TEST_TYPE_PYTHON)

COMPARISON_INCLUDED = "included"
COMPARISON_EXACT = "exact"
COMPARISON_REGEX = "regex"
COMPARISONS = (COMPARISON_INCLUDED, COMPARISON_EXACT, COMPARISON_REGEX)

# Bounded retry for Pages fetches: 1s then 2s between attempts (final attempt
# raises) on transient network errors / HTTP 5xx. 404 is NOT retried — for the
# bundle URL it means "no per-assignment override"; for the classroom-default
# URL it means the classroom hasn't run \`gh teacher autograder set-default\`
# (falls back to a vacuous-pass result).
FETCH_ATTEMPTS = 3

# Hard cap on bundle / classroom-default fetches. 10 MB covers all realistic
# test suites and bounds a hostile asset.
MAX_FETCH_BYTES = 10 * 1024 * 1024

# The accept commit creates the repo's \`.classroom50.yaml\`. Resolving the
# baseline from this structural marker (not the commit subject) is stable
# across clients/rewording and removes the subject-reuse spoof. The baseline
# still can't be moved *forward* (to hide pre-baseline work) only because the
# default-branch force-push/delete ruleset protects the accept commit -- on a
# plan that rejects org rulesets that protection silently doesn't apply, so
# this is a robustness win over subject-matching, not a guarantee. Path mirrors
# classroomcfg.MetadataPath (cli/gh-student/internal/classroomcfg/metadata.go)
# -- keep in lockstep.
ACCEPT_MARKER_PATH = ".classroom50.yaml"

# Full set of paths the accept commit lands atomically in one Tree commit.
# Mirrors classroomcfg.DropFiles (cli/gh-student/internal/classroomcfg/
# metadata.go), which commits exactly MetadataPath + AutogradeWorkflowPath --
# keep in lockstep. is_acceptance_commit uses this to fail open when the tip
# accept commit also adds non-setup files (e.g., amended/squashed real work),
# so that work is graded rather than silently skipped.
ACCEPT_COMMIT_PATHS = frozenset(
    {
        ACCEPT_MARKER_PATH,
        ".github/workflows/autograde.yaml",
    }
)

# Paths a teacher-side submission-mode shim retrofit touches: exactly the shim,
# nothing else. Such a commit carries \`[skip ci]\` so the workflow normally
# never fires; is_shim_update_commit is the backstop for environments that
# strip it. Mirrors contract.ShimUpdateCommitMessage's write path — keep in
# lockstep with classroomcfg.AutogradeWorkflowPath.
SHIM_UPDATE_COMMIT_PATHS = frozenset({".github/workflows/autograde.yaml"})

# \`_baseline_scan\` source discriminator. SOURCE_OPENABLE yields a usable
# Feedback PR base (accept commit or root fallback); the others skip.
SOURCE_ACCEPT = "accept"
SOURCE_ROOT = "root"
SOURCE_GIT_ERROR = "git-error"
SOURCE_NONE = "none"
SOURCE_OPENABLE = (SOURCE_ACCEPT, SOURCE_ROOT)

# Control paths allowed_files enforcement never removes, even under a bare \`*\`.
# Lockstep with submit.go's isControlPath, pinned from both sides by the shared
# fixture cli/shared/testdata/control_path_cases.json. Directory controls match
# by prefix; file controls match exactly, so a sibling like \`result.json.bak\`
# stays subject to the allowlist.
ALLOWED_FILES_KEEP_PREFIXES = (
    ".github/",
    ".git/",
)
ALLOWED_FILES_KEEP_EXACT = (
    ACCEPT_MARKER_PATH,
    ".github",
    ".git",
    RESULT_FILENAME,
    RELEASE_BODY_FILENAME,
)


def runtime_root() -> pathlib.Path:
    """Writable scratch dir for bundle extraction + entrypoint fetches.
    Prefers \`$RUNNER_TEMP\` (Actions temp, cleaned between jobs), else
    \`tempfile.mkdtemp()\` for local dev. Hard-coded \`/tmp/\` would break on
    Windows runners (which runtime.go's allow-list admits)."""
    base = os.environ.get("RUNNER_TEMP", "").strip()
    if base:
        return pathlib.Path(base) / "classroom50-runtime"
    return pathlib.Path(tempfile.mkdtemp(prefix="classroom50-runtime-"))


# ---------------------------------------------------------------------------
# Pure helpers (no I/O — fully unit-testable)
# ---------------------------------------------------------------------------


def username_from_repo(repository: str, classroom: str, assignment: str, actor: str) -> str:
    """Derive the student username from \`<owner>/<classroom>-<assignment>-<username>\`.

    Mirrors the naming formula single-sourced in cli/shared/contract
    (AssignmentRepoName); keep byte-identical. Falls back to GITHUB_ACTOR when
    the repo name doesn't follow the convention (e.g., hand-created test repos).
    """
    if "/" in repository:
        _, repo = repository.split("/", 1)
    else:
        repo = repository
    prefix = f"{classroom.lower()}-{assignment.lower()}-"
    if repo.lower().startswith(prefix):
        return repo[len(prefix):]
    return actor


def commit_url(server_url: str, repository: str, sha: str) -> str:
    return f"{server_url}/{repository}/commit/{sha}"


def release_url(server_url: str, repository: str, submission_tag: str) -> str:
    return f"{server_url}/{repository}/releases/tag/{urllib.parse.quote(submission_tag, safe='')}"


def compare_url(server_url: str, repository: str, base_sha: str, head_sha: str) -> str:
    return f"{server_url}/{repository}/compare/{base_sha}...{head_sha}"


def review_url(server_url: str, repository: str, base_sha: str | None, head_sha: str) -> str:
    """Full baseline...graded diff; commit view when there's no usable
    baseline (history unavailable, or baseline == head)."""
    if base_sha and head_sha and base_sha != head_sha:
        return compare_url(server_url, repository, base_sha, head_sha)
    return commit_url(server_url, repository, head_sha)


def _classroom_segment(classroom: str, secret: str) -> str:
    """Per-classroom Pages path segment. A protected classroom carries a
    capability-URL secret and serves everything under \`<classroom>/<secret>\`;
    otherwise plain \`<classroom>\`. Both parts are URL-quoted by callers."""
    safe_classroom = urllib.parse.quote(classroom, safe="")
    if not secret:
        return safe_classroom
    return f"{safe_classroom}/{urllib.parse.quote(secret, safe='')}"


def bundle_url(pages_base_url: str, classroom: str, assignment: str, secret: str = "") -> str:
    """Pages URL for an assignment's bundle (autograder.py + sibling fixtures,
    packaged by publish-pages.yaml). Secret-aware."""
    safe_slug = urllib.parse.quote(assignment, safe="")
    return f"{pages_base_url}/{_classroom_segment(classroom, secret)}/autograders/{safe_slug}.tar.gz"


def classroom_default_autograder_url(pages_base_url: str, classroom: str, secret: str = "") -> str:
    """Pages URL for a classroom's default autograder.py.

    Published verbatim by publish-pages.yaml from \`<classroom>/autograder.py\`.
    Optional — classrooms that haven't run \`gh teacher autograder set-default\`
    won't have one, and the runner falls back to a vacuous-pass result.
    """
    return f"{pages_base_url}/{_classroom_segment(classroom, secret)}/{ENTRYPOINT_FILENAME}"


def actor_identity() -> dict[str, Any] | None:
    """The GitHub actor who pushed this submission. Returns {"username":
    <login>, "id": <numeric id|None>} or None when the login is unavailable.

    For a GROUP submission the graded repo is the founder's but any teammate
    can push; \`submitted_by\` records who actually pushed while the shared
    score is credited to every member. From GITHUB_ACTOR / GITHUB_ACTOR_ID
    (id parsed as int when present, else null).
    """
    login = (os.environ.get("GITHUB_ACTOR") or "").strip()
    if not login:
        return None
    raw_id = (os.environ.get("GITHUB_ACTOR_ID") or "").strip()
    actor_id: int | None = None
    if raw_id.isdigit():
        actor_id = int(raw_id)
    return {"username": login, "id": actor_id}


def make_result(
    *,
    classroom: str,
    assignment: str,
    username: str,
    submission: str,
    commit_link: str,
    release_link: str,
    when: datetime.datetime,
    score: int,
    max_score: int,
    tests: list[dict[str, Any]],
    assignment_type: str,
    review_link: str | None = None,
    submitted_by: dict[str, Any] | None = None,
    graded_at: datetime.datetime | None = None,
) -> dict[str, Any]:
    """Build a v1-shaped result.json payload. Single source of the field
    layout shared by the error/vacuous paths (empty_result) and the
    declarative grader. \`review\` falls back to the commit view when
    review_link is None.

    \`username\` is the repo OWNER, emitted as \`owner\` (the identity anchor
    the collector validates). \`assignment_type\` ("individual"|"group")
    records the mode. No \`usernames\` field: who pushed is \`submitted_by\`,
    who owns the repo is \`owner\`, the credited member list is resolved by
    collection.

    \`when\` is the SUBMISSION instant (graded commit's committer date), emitted
    as \`datetime\`; invariant across regrades, so collect-scores' \`late\` marking
    never changes on a re-run. \`graded_at\` is THIS run's wall clock (defaults
    to now), purely informational."""
    result: dict[str, Any] = {
        "schema": RESULT_SCHEMA_V1,
        "classroom": classroom,
        "assignment": assignment,
        "assignment_type": assignment_type,
        "owner": username,
        "submission": submission,
        "commit": commit_link,
        "release": release_link,
        "review": review_link or commit_link,
        "datetime": when.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "graded_at": (graded_at or now_utc()).strftime("%Y-%m-%dT%H:%M:%SZ"),
        "score": score,
        "max-score": max_score,
        "tests": tests,
    }
    if submitted_by is not None:
        result["submitted_by"] = submitted_by
    return result


def empty_result(
    *,
    classroom: str,
    assignment: str,
    username: str,
    submission: str,
    commit_link: str,
    release_link: str,
    when: datetime.datetime,
    assignment_type: str,
    review_link: str | None = None,
    submitted_by: dict[str, Any] | None = None,
) -> dict[str, Any]:
    """A v1-valid result.json payload with no tests (score 0/0). Used for
    every error path — collect-scores ingests it as "submitted, error"; the
    workflow log carries the actual failure reason.
    """
    return make_result(
        classroom=classroom,
        assignment=assignment,
        username=username,
        submission=submission,
        commit_link=commit_link,
        release_link=release_link,
        when=when,
        score=0,
        max_score=0,
        tests=[],
        assignment_type=assignment_type,
        review_link=review_link,
        submitted_by=submitted_by,
    )


def derive_status_and_summary(result: dict[str, Any]) -> tuple[str, str]:
    """Map a result.json payload to a commit-status state + summary line.

    \`success\` when all tests pass (or zero tests — vacuous pass, "no
    autograder configured"). \`failure\` when any test failed. The error path
    is set explicitly by the runner, never derived here.
    """
    tests = result.get("tests") or []
    score = int(result.get("score") or 0)
    max_score = int(result.get("max-score") or 0)
    assignment = result.get("assignment") or "assignment"

    if not tests:
        return (
            "success",
            f"classroom50 autograde: submitted — no autograder configured for {assignment}",
        )

    passed = sum(1 for t in tests if t.get("passed"))
    total = len(tests)
    if passed == total:
        return "success", f"classroom50 autograde: {score}/{max_score} (all tests passed)"
    return "failure", f"classroom50 autograde: {score}/{max_score} ({passed}/{total} tests passed)"


def render_release_body(result: dict[str, Any], summary: str) -> str:
    """Render the Markdown body for the submit-tag release: the score line,
    then a per-test table (or just the summary when \`tests\` is empty). \`|\` in
    test names is escaped so it can't break the Markdown table.
    """
    score = int(result.get("score") or 0)
    max_score = int(result.get("max-score") or 0)
    tests = result.get("tests") or []

    lines = [f"### classroom50 autograde: {score}/{max_score}", ""]
    if tests:
        lines.append("| Test | Result | Score |")
        lines.append("|---|---|---|")
        for t in tests:
            ok = "PASS" if t.get("passed") else "FAIL"
            test_name = (t.get("test-name") or "").replace("|", "\\\\|")
            lines.append(
                f"| {test_name} | {ok} | "
                f"{int(t.get('score') or 0)} / {int(t.get('max-score') or 0)} |"
            )
        lines.append("")
        lines.append(f"Status: {summary}")
    else:
        lines.append(f"_{summary}_")
    return "\\n".join(lines) + "\\n"


def validate_result(
    data: Any, *, classroom: str, assignment: str, is_group: bool = False,
    owner: str | None = None,
) -> str | None:
    """None if \`data\` is v1-shaped for the given identity, else a
    human-readable error string.

    Mirrors collect_scores.py::validate_result so a payload passing here also
    passes gradebook ingest. Without parity, a malformed result.json (missing
    \`owner\`, non-int score, non-dict test entry, ...) would silently pass the
    runner, get published, and only be rejected on the next collect-scores run
    — the student appears not-yet-submitted with no signal in the log.

    \`owner\` (repo owner login) is the identity anchor: when provided it must
    equal \`data["owner"]\`. \`assignment_type\` must be "individual"/"group" and
    match the run's mode. No \`usernames\` field: who pushed is \`submitted_by\`,
    who owns is \`owner\`, the credited member list is resolved by collection.
    """
    if not isinstance(data, dict):
        return f"{RESULT_FILENAME} is not a JSON object"
    if data.get("schema") != RESULT_SCHEMA_V1:
        return f"{RESULT_FILENAME} schema is {data.get('schema')!r}, want {RESULT_SCHEMA_V1!r}"
    if data.get("classroom") != classroom:
        return (
            f"{RESULT_FILENAME} classroom is {data.get('classroom')!r}, "
            f"want {classroom!r}"
        )
    if data.get("assignment") != assignment:
        return (
            f"{RESULT_FILENAME} assignment is {data.get('assignment')!r}, "
            f"want {assignment!r}"
        )

    result_owner = data.get("owner")
    if not isinstance(result_owner, str) or not result_owner:
        return f"{RESULT_FILENAME} 'owner' must be a non-empty string"
    if owner is not None and result_owner.lower() != owner.lower():
        return (
            f"{RESULT_FILENAME} 'owner' is {result_owner!r}, want {owner!r} "
            f"(derived from the repo name)"
        )

    expected_type = "group" if is_group else "individual"
    assignment_type = data.get("assignment_type")
    if assignment_type != expected_type:
        return (
            f"{RESULT_FILENAME} 'assignment_type' is {assignment_type!r}, "
            f"want {expected_type!r}"
        )

    # submit/* here is the RECORD namespace, deliberately not the configurable
    # submission_tags patterns: a milestone-tag run (e.g. phase1) mints/reuses
    # the canonical submit/<ts>-<sha> tag in the workflow's tag step BEFORE
    # grading, so SUBMISSION_TAG — and thus result.json's \`submission\` — is
    # always canonical. Custom tags trigger; submit/* records.
    submission = data.get("submission")
    if not isinstance(submission, str) or not submission.startswith("submit/"):
        return f"{RESULT_FILENAME} 'submission' must be a 'submit/*' string"

    for field in ("commit", "release", "review", "datetime"):
        v = data.get(field)
        if not isinstance(v, str) or not v:
            return f"{RESULT_FILENAME} {field!r} must be a non-empty string"

    score = data.get("score")
    max_score = data.get("max-score")
    # Reject bool (an int subclass in Python) so True/False can't pass as scores.
    if isinstance(score, bool) or not isinstance(score, int) or score < 0:
        return f"{RESULT_FILENAME} 'score' must be a non-negative integer"
    if isinstance(max_score, bool) or not isinstance(max_score, int) or max_score < 0:
        return f"{RESULT_FILENAME} 'max-score' must be a non-negative integer"
    if score > max_score:
        return f"{RESULT_FILENAME} score ({score}) > max-score ({max_score})"

    tests = data.get("tests")
    if not isinstance(tests, list):
        return f"{RESULT_FILENAME} 'tests' is not a list"
    for i, t in enumerate(tests):
        if not isinstance(t, dict):
            return f"{RESULT_FILENAME} 'tests[{i}]' is not an object"
        name = t.get("test-name")
        if not isinstance(name, str) or not name:
            return f"{RESULT_FILENAME} 'tests[{i}].test-name' must be a non-empty string"
        if not isinstance(t.get("passed"), bool):
            return f"{RESULT_FILENAME} 'tests[{i}].passed' must be a boolean"
        ts, tm = t.get("score"), t.get("max-score")
        if isinstance(ts, bool) or not isinstance(ts, int) or ts < 0:
            return f"{RESULT_FILENAME} 'tests[{i}].score' must be a non-negative integer"
        if isinstance(tm, bool) or not isinstance(tm, int) or tm < 0:
            return f"{RESULT_FILENAME} 'tests[{i}].max-score' must be a non-negative integer"
        if ts > tm:
            return f"{RESULT_FILENAME} 'tests[{i}].score' ({ts}) > 'tests[{i}].max-score' ({tm})"

    # submitted_by is optional (older results omit it). When present: object
    # with a non-empty string username and int-or-null id — stamped by the
    # runner from GITHUB_ACTOR/GITHUB_ACTOR_ID.
    err = validate_submitted_by(data.get("submitted_by"), RESULT_FILENAME)
    if err is not None:
        return err
    return None


def validate_submitted_by(value: Any, filename: str) -> str | None:
    """Validate the optional \`submitted_by\` block (pusher identity). None/absent
    is allowed (older results omit it). When present: {"username": <non-empty
    str>, "id": <int|null>}. Shared shape so runner and collector agree. Returns
    an error string or None.
    """
    if value is None:
        return None
    if not isinstance(value, dict):
        return f"{filename} 'submitted_by' must be an object"
    uname = value.get("username")
    if not isinstance(uname, str) or not uname:
        return f"{filename} 'submitted_by.username' must be a non-empty string"
    sid = value.get("id")
    if sid is not None and (isinstance(sid, bool) or not isinstance(sid, int)):
        return f"{filename} 'submitted_by.id' must be an integer or null"
    return None


# ---------------------------------------------------------------------------
# I/O helpers
# ---------------------------------------------------------------------------


def _baseline_scan(workspace: pathlib.Path) -> tuple[str | None, str]:
    """Resolve the student's baseline commit and how it was found.

    Returns (sha, source) where source is one of the SOURCE_* constants:
      - SOURCE_ACCEPT:    the commit that introduced \`.classroom50.yaml\`
        (ACCEPT_MARKER_PATH). A trusted baseline.
      - SOURCE_ROOT:      the repo's root commit (no commit added the marker)
        -- a best-effort baseline.
      - SOURCE_GIT_ERROR: git ran but failed (e.g., "dubious ownership" in a
        container, or an un-deepenable shallow clone). History might exist; we
        couldn't read it. Distinct from SOURCE_NONE so the caller warns right.
      - SOURCE_NONE:      no history to resolve -- git unavailable or not a repo.
    sha is None for everything except SOURCE_ACCEPT / SOURCE_ROOT.
    """

    def git(*args: str) -> subprocess.CompletedProcess[str]:
        # \`-c safe.directory=*\` keeps the scan independent of the runner
        # OS/container: in a container the checkout is owned by the host runner
        # user but git runs as a different UID over a bind mount, tripping git's
        # "dubious ownership" guard. actions/checkout's exception is under a
        # temporary HOME restored before runner.py runs, so it's invisible here.
        return subprocess.run(
            ["git", "-c", "safe.directory=*", "-C", str(workspace), *args],
            capture_output=True, text=True, timeout=120, check=False,
        )

    try:
        # Is this a git repo at all? A git-less tarball checkout is
        # SOURCE_NONE; a real repo git refuses to read is SOURCE_GIT_ERROR.
        inside = git("rev-parse", "--git-dir")
        if inside.returncode != 0:
            low = inside.stderr.lower()
            if "not a git repository" in low or "no such file" in low:
                return None, SOURCE_NONE
            # Repo exists but git won't read it (dubious ownership, corruption,
            # locked index): history may exist.
            return None, SOURCE_GIT_ERROR
        shallow = git("rev-parse", "--is-shallow-repository")
        if shallow.returncode != 0:
            return None, SOURCE_GIT_ERROR
        if shallow.stdout.strip() == "true":
            # Depth-1 checkout (workflows predating fetch-depth: 0): deepen, or
            # the graft boundary would pose as the root. checkout's persisted
            # credentials authenticate the fetch.
            if git("fetch", "--quiet", "--unshallow", "origin").returncode != 0:
                return None, SOURCE_GIT_ERROR
        # Earliest commit that ADDED the marker wins, so a later re-add (delete
        # then restore) can't move the baseline forward and hide work from the
        # review diff. --diff-filter=A selects additions, --reverse oldest-first,
        # --first-parent stays on mainline. Run before the root-commit fallback.
        added = git(
            "log", "--reverse", "--first-parent", "--diff-filter=A",
            "--format=%H", "HEAD", "--", ACCEPT_MARKER_PATH,
        )
        # A failed marker query is history-unreadable, not "marker absent" --
        # SOURCE_GIT_ERROR so a transient git error doesn't degrade to root.
        if added.returncode != 0:
            return None, SOURCE_GIT_ERROR
        for line in added.stdout.splitlines():
            sha = line.strip()
            if sha:
                return sha, SOURCE_ACCEPT
        # No commit added the marker (hand-created repo): fall back to the root
        # commit for the best-effort review link.
        log = git("log", "--reverse", "--first-parent", "--format=%H", "HEAD")
        if log.returncode != 0:
            return None, SOURCE_GIT_ERROR
        for line in log.stdout.splitlines():
            sha = line.strip()
            if sha:
                return sha, SOURCE_ROOT
        return None, SOURCE_NONE
    except (OSError, subprocess.SubprocessError):
        return None, SOURCE_NONE


def baseline_sha(workspace: pathlib.Path) -> str | None:
    """SHA the student started from: the accept commit (which introduced
    \`.classroom50.yaml\`) when present, else the root commit. None when history
    is unavailable (no git, no .git, or an un-deepenable shallow clone) and the
    caller falls back to the commit view. Used for the review compare link,
    which tolerates the root fallback."""
    return _baseline_scan(workspace)[0]


def is_acceptance_commit(workspace: pathlib.Path, head_sha: str) -> bool:
    """Whether head_sha is the bare acceptance commit: the commit that
    introduced \`.classroom50.yaml\` (SOURCE_ACCEPT) with nothing on top.

    The setup job calls this to skip tagging/grading/release for a student's
    accept (nothing to grade yet). True only when the trusted accept commit is
    the tip; a submission stacks a fresh commit (submit uses \`--allow-empty\`),
    so head_sha != accept_sha. Fails open (False) on root fallback, git error,
    empty head_sha, or no accept commit.

    Final guard: the tip accept commit must touch ONLY the known setup paths
    (\`ACCEPT_COMMIT_PATHS\`). A student can rewrite history so the marker commit
    is the tip yet carries real work (amend + force-push, or a squash); skipping
    it would silently drop gradeable work, so an accept commit touching anything
    outside the setup set fails open (grade). A git error reading its paths also
    fails open.
    """
    if not head_sha:
        return False
    accept_sha, source = _baseline_scan(workspace)
    if not (source == SOURCE_ACCEPT and accept_sha == head_sha):
        return False
    return _accept_commit_is_setup_only(workspace, head_sha)


def _accept_commit_is_setup_only(workspace: pathlib.Path, head_sha: str) -> bool:
    """True only when every path the commit touches is in the known setup set
    (\`ACCEPT_COMMIT_PATHS\`). Fails open (False -> grade) on any git error or an
    empty path list, so a commit we can't fully inspect is treated as a
    submission rather than silently skipped.
    """
    return _commit_touches_only(workspace, head_sha, ACCEPT_COMMIT_PATHS)


def is_shim_update_commit(workspace: pathlib.Path, head_sha: str) -> bool:
    """Whether head_sha is a teacher-side submission-mode shim retrofit: a tip
    commit that touches ONLY .github/workflows/autograde.yaml.

    Such commits carry \`[skip ci]\` and normally never fire the workflow; this
    is the defense-in-depth backstop for a client that forgot the marker or an
    environment that strips it. Deliberately NOT gated on the accept scan: a
    shim-only commit has nothing to grade regardless of who authored it, and a
    student hand-editing their shim gets a skip either way (the edit alone is
    never gradeable work). Fails open (False -> grade) on any uncertainty.
    The acceptance check takes precedence at the call site — the accept commit
    also touches the shim but additionally lands the marker, so the path sets
    never overlap in practice.
    """
    if not head_sha:
        return False
    return _commit_touches_only(workspace, head_sha, SHIM_UPDATE_COMMIT_PATHS)


def _commit_touches_only(
    workspace: pathlib.Path, head_sha: str, allowed: frozenset[str]
) -> bool:
    """True only when every path the commit touches is in \`allowed\`. Fails
    open (False -> grade) on any git error or an empty path list, so a commit
    we can't fully inspect is treated as a submission rather than silently
    skipped.
    """

    def git(*args: str) -> subprocess.CompletedProcess[str]:
        return subprocess.run(
            ["git", "-c", "safe.directory=*", "-C", str(workspace), *args],
            capture_output=True, text=True, timeout=120, check=False,
        )

    try:
        # Names of every path the commit changed vs its parent (root commit:
        # vs the empty tree). -r recurses, --no-renames keeps paths literal,
        # -z NUL-delimits so unusual filenames survive.
        changed = git(
            "show", "--no-renames", "--name-only", "--format=", "-r", "-z",
            head_sha,
        )
        if changed.returncode != 0:
            return False
        paths = [p for p in changed.stdout.split("\\0") if p]
        if not paths:
            return False
        return all(p in allowed for p in paths)
    except (OSError, subprocess.SubprocessError):
        return False


def feedback_base_outcome(
    workspace: pathlib.Path,
    scan: tuple[str | None, str] | None = None,
) -> tuple[str | None, str]:
    """(feedback-PR-base-sha, scan-source) for \`main()\`, which needs both the
    base AND the trust signal. Same (sha, source) as \`_baseline_scan\`, but
    forces a null sha for non-openable sources so the caller's gate is a simple
    \`sha is not None\`: SOURCE_ACCEPT / SOURCE_ROOT open (root warns it's
    untrusted), SOURCE_GIT_ERROR / SOURCE_NONE skip.

    A reviewable diff against the root commit beats no Feedback PR at all, and
    the untrusted-baseline warning tells the teacher to verify.

    \`scan\` lets a caller that already ran \`_baseline_scan\` (e.g., main(), which
    also needs the review-link baseline) reuse it instead of re-walking history
    -- the scan issues several sequential git calls, so a second walk doubles
    the worst-case time against the job ceiling.
    """
    sha, source = scan if scan is not None else _baseline_scan(workspace)
    return (sha, source) if source in SOURCE_OPENABLE else (None, source)


def _is_control_path(rel: str) -> bool:
    """Whether rel is a control path allowed_files must never remove."""
    if rel in ALLOWED_FILES_KEEP_EXACT:
        return True
    return any(rel.startswith(p) for p in ALLOWED_FILES_KEEP_PREFIXES)


def parse_allowed_files(raw: str | None) -> list[str]:
    """Parse the ALLOWED_FILES env (JSON array of patterns). Empty, absent, or
    malformed -> [] so a bad value never strips files."""
    if not raw or not raw.strip():
        return []
    try:
        value = json.loads(raw)
    except json.JSONDecodeError:
        print("runner: ALLOWED_FILES is not valid JSON; skipping allowed_files enforcement", file=sys.stderr)
        return []
    if not isinstance(value, list) or not all(isinstance(p, str) and p.strip() for p in value):
        print("runner: ALLOWED_FILES must be a JSON array of non-empty strings; skipping enforcement", file=sys.stderr)
        return []
    return value


def _ascii_fold(value: str) -> str:
    return value.translate(str.maketrans(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"
    ))


def validate_release_asset_paths(value: Any) -> list[str]:
    if not isinstance(value, list):
        raise ValueError("release_assets must be an array")
    if len(value) > RELEASE_ASSETS_MAX_FILES:
        raise ValueError(
            f"release_assets has {len(value)} paths "
            f"(max {RELEASE_ASSETS_MAX_FILES})"
        )

    seen_paths: set[str] = set()
    seen_basenames: set[str] = set()
    total_path_bytes = 0
    for index, configured_path in enumerate(value):
        where = f"release_assets[{index}]"
        if not isinstance(configured_path, str) or not configured_path.strip():
            raise ValueError(f"{where} must be a non-empty string")
        if any(0xD800 <= ord(char) <= 0xDFFF for char in configured_path):
            raise ValueError(f"{where} must not contain Unicode surrogates")
        total_path_bytes += len(configured_path.encode("utf-8"))
        if total_path_bytes > RELEASE_ASSETS_MAX_PATH_BYTES:
            raise ValueError(
                f"release_assets paths exceed {RELEASE_ASSETS_MAX_PATH_BYTES} "
                "UTF-8 bytes"
            )
        if configured_path.startswith("/") or re.match(
            r"^[A-Za-z]:", configured_path, re.ASCII
        ):
            raise ValueError(f"{where} must be relative")
        if "\\\\" in configured_path:
            raise ValueError(f"{where} must use '/' separators")
        if any(ord(char) < 0x20 or 0x7F <= ord(char) <= 0x9F
               for char in configured_path):
            raise ValueError(f"{where} must not contain control characters")

        segments = configured_path.split("/")
        if any(segment in ("", ".", "..") for segment in segments):
            raise ValueError(f"{where} has an invalid path segment")
        if _ascii_fold(segments[0]) == ".git":
            raise ValueError(f"{where} must not select the root .git tree")

        basename = segments[-1]
        folded_basename = _ascii_fold(basename)
        if not RELEASE_ASSET_BASENAME.fullmatch(basename) or ".." in basename:
            raise ValueError(f"{where} basename {basename!r} is not Release-safe")
        if folded_basename in ("result.json", "release-body.md"):
            raise ValueError(f"{where} basename {basename!r} is reserved")
        if configured_path in seen_paths:
            raise ValueError(f"{where} duplicates path {configured_path!r}")
        if basename in seen_basenames:
            raise ValueError(f"{where} duplicates basename {basename!r}")
        seen_paths.add(configured_path)
        seen_basenames.add(basename)
    return list(value)


def parse_release_assets(raw: str | None) -> list[str]:
    if raw is None or not raw.strip():
        return []
    try:
        value = json.loads(raw)
    except json.JSONDecodeError as exc:
        raise ValueError("RELEASE_ASSETS is not valid JSON") from exc
    return validate_release_asset_paths(value)


def _workflow_warning(message: str) -> None:
    escaped = "".join(
        char if 0x20 <= ord(char) < 0x7F else f"\\\\u{ord(char):04x}"
        for char in message
    ).replace("%", "%25")
    print(f"::warning::{escaped}")


def open_release_asset_source(
    workspace: pathlib.Path, configured_path: str
) -> int:
    """Open the configured leaf for reading WITHOUT following any symlink, and
    return the pinned file descriptor. Every segment is opened with
    O_NOFOLLOW/O_DIRECTORY so a symlink swapped onto a parent or the leaf after
    validation (a student process double-forked during grading survives into
    post-grade staging) is rejected at open time — closing the validate-then-
    reopen TOCTOU. The returned fd is what _copy_release_asset reads from, so
    the copy can never re-resolve the path against a mutated tree. Caller owns
    closing the fd."""
    validate_release_asset_paths([configured_path])
    segments = configured_path.split("/")
    dir_fd = os.open(workspace, os.O_RDONLY | os.O_DIRECTORY | os.O_CLOEXEC)
    leaf_fd = -1
    try:
        for index, segment in enumerate(segments):
            is_leaf = index == len(segments) - 1
            flags = os.O_RDONLY | os.O_NOFOLLOW | os.O_CLOEXEC
            if not is_leaf:
                flags |= os.O_DIRECTORY
            try:
                next_fd = os.open(segment, flags, dir_fd=dir_fd)
            except OSError as exc:
                # O_NOFOLLOW rejects a symlink with ELOOP; O_DIRECTORY on a
                # symlink-to-dir can surface as ENOTDIR first. lstat the segment
                # (relative to the current dir fd, no follow) to report a
                # symlinked segment precisely rather than as a plain non-dir.
                if exc.errno in (errno.ELOOP, errno.ENOTDIR):
                    try:
                        seg_info = os.lstat(segment, dir_fd=dir_fd)
                    except OSError:
                        seg_info = None
                    if seg_info is not None and stat.S_ISLNK(seg_info.st_mode):
                        raise ValueError(
                            f"{configured_path!r} contains a symlink"
                        ) from exc
                    if not is_leaf and exc.errno == errno.ENOTDIR:
                        raise ValueError(
                            f"{configured_path!r} has a non-directory parent"
                        ) from exc
                raise
            if is_leaf:
                info = os.fstat(next_fd)
                if not stat.S_ISREG(info.st_mode):
                    os.close(next_fd)
                    raise ValueError(
                        f"{configured_path!r} is not a regular file"
                    )
                leaf_fd = next_fd
            else:
                os.close(dir_fd)
                dir_fd = next_fd
        return leaf_fd
    except BaseException:
        if leaf_fd >= 0:
            os.close(leaf_fd)
        raise
    finally:
        os.close(dir_fd)


def _copy_release_asset(
    source_fd: int, destination: pathlib.Path, max_bytes: int
) -> int:
    """Copy from an already-open, symlink-free source fd (see
    open_release_asset_source) to \`destination\`, capped at max_bytes. Reading
    the pinned fd — never re-opening by path — is what makes this copy immune to
    a symlink swapped in after validation."""
    copied = 0
    created = False
    try:
        with os.fdopen(source_fd, "rb", closefd=False) as input_file, \\
                destination.open("xb") as output_file:
            created = True
            while chunk := input_file.read(1024 * 1024):
                if copied + len(chunk) > max_bytes:
                    raise ValueError(
                        f"{destination.name!r} exceeds the remaining byte budget"
                    )
                output_file.write(chunk)
                copied += len(chunk)
    except (OSError, ValueError):
        if created:
            try:
                destination.unlink(missing_ok=True)
            except OSError:
                pass
        raise
    return copied


def stage_release_assets(
    workspace: pathlib.Path,
    destination: pathlib.Path,
    configured_paths: list[str],
) -> list[str]:
    configured_paths = validate_release_asset_paths(configured_paths)
    try:
        existing = destination.lstat()
    except FileNotFoundError:
        pass
    else:
        if stat.S_ISDIR(existing.st_mode) and not stat.S_ISLNK(existing.st_mode):
            shutil.rmtree(destination)
        else:
            destination.unlink()
    destination.mkdir(parents=True)

    accepted: list[str] = []
    total = 0
    for configured_path in configured_paths:
        basename = configured_path.split("/")[-1]
        target = destination / basename
        copy_attempted = False
        try:
            try:
                target.lstat()
            except FileNotFoundError:
                pass
            else:
                raise FileExistsError(
                    f"release asset {basename!r} has a runtime destination collision"
                )
            source_fd = open_release_asset_source(workspace, configured_path)
            copy_attempted = True
            try:
                copied = _copy_release_asset(
                    source_fd, target, RELEASE_ASSETS_MAX_BYTES - total
                )
            finally:
                os.close(source_fd)
        except (OSError, ValueError) as exc:
            if copy_attempted:
                try:
                    target.unlink(missing_ok=True)
                except OSError:
                    pass
            _workflow_warning(f"release_assets: {configured_path!r} skipped ({exc})")
            continue
        total += copied
        accepted.append(basename)
    return accepted


def _stage_release_assets_and_emit(
    workspace: pathlib.Path, github_output: str | None, rc: int
) -> int:
    """Stage the configured release assets after grading and emit the staged
    dir + accepted basenames + skipped count to $GITHUB_OUTPUT. Fail-open: any
    staging error only warns and never changes \`rc\` (the grade result). Split
    out of main() so the staging/output contract the workflow upload step
    depends on is unit-testable without the full grading pipeline."""
    accepted_assets: list[str] = []
    configured_asset_count = 0
    staging_dir = (
        pathlib.Path(
            os.environ.get("RUNNER_TEMP")
            or tempfile.mkdtemp(prefix="classroom50-")
        )
        / RELEASE_ASSETS_DIRNAME
    )
    try:
        configured_paths = parse_release_assets(os.environ.get("RELEASE_ASSETS"))
        configured_asset_count = len(configured_paths)
        accepted_assets = stage_release_assets(
            workspace, staging_dir, configured_paths
        )
    except (OSError, ValueError) as exc:
        _workflow_warning(f"release_assets: staging disabled ({exc})")

    skipped = configured_asset_count - len(accepted_assets)
    if skipped > 0:
        # Machine-readable signal so a teacher can tell a fully-published
        # Release from a partial one without scraping ::warning:: annotations.
        print(
            f"::notice::release_assets: attached {len(accepted_assets)} of "
            f"{configured_asset_count} configured file(s); {skipped} skipped"
        )

    if github_output:
        try:
            with open(github_output, "a") as output:
                # release-assets-dir is the absolute staged dir the workflow
                # upload step reads (see STAGED_RELEASE_DIR in the workflow).
                output.write(f"release-assets={','.join(accepted_assets)}\\n")
                output.write(f"release-assets-dir={staging_dir}\\n")
                output.write(f"release-assets-skipped={skipped}\\n")
        except OSError as exc:
            _workflow_warning(f"release_assets: could not emit staged names ({exc})")
    return rc


def _isolated_git_env() -> dict[str, str]:
    """Environment that ignores the host's git config so allowed_files patterns
    classify identically on every runner. Paired with \`-c core.excludesFile\`.
    Mirrors Go's isolatedGitEnv."""
    env = dict(os.environ)
    env["GIT_CONFIG_NOSYSTEM"] = "1"
    env["GIT_CONFIG_GLOBAL"] = os.devnull
    return env


def _walk_workspace_files(workspace: pathlib.Path) -> list[str]:
    """All regular-file relative paths (forward-slash) under \`workspace\`,
    skipping \`.git\` at any depth. Unlike \`git ls-files\`, recurses into nested
    git repos so files hidden inside one can't escape the allowlist. Symlinks
    are reported as their own path."""
    results: list[str] = []
    for dirpath, dirnames, filenames in os.walk(workspace):
        dirnames[:] = [d for d in dirnames if d != ".git"]
        rel_dir = os.path.relpath(dirpath, workspace)
        for name in filenames:
            rel = name if rel_dir == "." else os.path.join(rel_dir, name)
            results.append(pathlib.PurePath(rel).as_posix())
    return results


def _classify_disallowed(patterns: list[str], paths: list[str]) -> list[str] | None:
    """Subset of \`paths\` the \`patterns\` disallow, or None when the matcher
    couldn't run (caller then skips enforcement — fail open). Delegates to \`git
    check-ignore\` against a throwaway, config-isolated repo. Mirrors Go's
    ignorematch.Disallowed; both pinned by the shared fixture
    cli/shared/testdata/allowed_files_matcher_cases.json."""
    if not patterns or not paths:
        return []
    git_env = _isolated_git_env()
    # A hung git raises subprocess.TimeoutExpired (a SubprocessError, not an
    # OSError); a missing git binary raises OSError. Both must surface as
    # "matcher couldn't run" (return None), not an uncaught traceback —
    # mirroring _baseline_scan's SubprocessError handling.
    try:
        with tempfile.TemporaryDirectory(prefix="classroom50-ignore-") as tmp:
            tmp_path = pathlib.Path(tmp)
            init = subprocess.run(
                ["git", "-C", tmp, "init", "-q"],
                capture_output=True, text=True, timeout=60, check=False, env=git_env,
            )
            if init.returncode != 0:
                print("runner: allowed_files enforcement skipped (could not init matcher repo)", file=sys.stderr)
                return None
            (tmp_path / ".gitignore").write_text("\\n".join(patterns) + "\\n")
            checked = subprocess.run(
                ["git", "-c", f"core.excludesFile={os.devnull}", "-C", tmp,
                 "check-ignore", "--no-index", "--stdin", "-z"],
                input="\\x00".join(paths) + "\\x00",
                capture_output=True, text=True, timeout=120, check=False, env=git_env,
            )
    except (subprocess.SubprocessError, OSError) as exc:
        print(f"runner: allowed_files enforcement skipped (matcher failed: {exc})", file=sys.stderr)
        return None
    # check-ignore: 0 = >=1 ignored, 1 = none, >1 = error.
    if checked.returncode not in (0, 1):
        print(f"runner: allowed_files enforcement skipped (check-ignore rc={checked.returncode}: "
              f"{checked.stderr.strip()})", file=sys.stderr)
        return None
    return [p for p in checked.stdout.split("\\x00") if p]


def enforce_allowed_files(workspace: pathlib.Path, patterns: list[str]) -> list[str]:
    """Remove every working-tree file the allowed_files patterns disallow so
    the autograder only sees allowed files. Control files are always kept.
    Working-tree-only, so the baseline and review/Feedback-PR links are
    unaffected. Returns the sorted removed paths; no-ops when patterns is empty.

    Fails OPEN: if the matcher can't run for a non-empty allowlist (tree
    enumeration failure, git init/check-ignore error, or timeout), returns []
    (skip enforcement, grade the unfiltered tree) rather than blocking the
    grade. The submit-side filter is best-effort too.

    To fail CLOSED instead (treat the allowlist as an authoritative security
    boundary), change the two \`return []\` failure branches below to raise and
    have main() route it through finalize.error(...) so the submission lands as
    an \`error\` result. The decision is intentionally fail-open: allowed_files
    is a grading-scope/hygiene tool, not a secret-hiding control.
    """
    if not patterns:
        return []

    # Walk the tree directly: \`git ls-files\` won't recurse into a nested repo,
    # so a student could hide disallowed files there. The walk skips every
    # \`.git\` so git metadata is never enumerated or removed.
    try:
        candidates = _walk_workspace_files(workspace)
    except OSError as exc:
        # Fail open (see docstring); to fail closed, raise here instead.
        print(f"runner: allowed_files enforcement skipped (walk failed: {exc})", file=sys.stderr)
        return []

    candidates = [p for p in candidates if not _is_control_path(p)]
    if not candidates:
        return []

    # None = matcher couldn't run. Fail open (see docstring); to fail closed,
    # raise here and surface via finalize.error in main().
    disallowed = _classify_disallowed(patterns, candidates)
    if disallowed is None:
        return []

    removed: list[str] = []
    for rel in disallowed:
        if _is_control_path(rel):
            continue
        target = workspace / rel
        try:
            target.unlink()
            removed.append(rel)
        except FileNotFoundError:
            continue
        except OSError as exc:
            print(f"runner: could not remove disallowed file {rel}: {exc}", file=sys.stderr)

    removed.sort()
    if removed:
        print(f"runner: removed {len(removed)} file(s) outside the assignment's allowed_files set: "
              f"{', '.join(removed)}")
    return removed


def render_removed_files_note(removed: list[str]) -> str:
    """Markdown section listing files stripped by allowed_files, appended to
    release-body.md so a renamed/missing required file is visible."""
    lines = [
        "",
        f"### Removed {len(removed)} file(s) outside the assignment's allowed files",
        "",
        "These files are not in this assignment's \`allowed_files\` set, so the "
        "autograder did not see them:",
        "",
    ]
    lines.extend(f"- \`{rel}\`" for rel in removed)
    lines.append("")
    return "\\n".join(lines)


def append_removed_files_note(workspace: pathlib.Path, removed: list[str]) -> None:
    """Append the removed-files note to release-body.md. Runs in main()'s
    finally, before the final body is mirrored to the Summary page, so the note
    reaches both surfaces without a second write here. Best-effort: a missing
    body or write error must not fail the grade. errors="replace" guards against
    a custom autograder's non-UTF-8 body (UnicodeDecodeError is a ValueError,
    not an OSError, so a strict read would escape the except and crash a run)."""
    if not removed:
        return
    note = render_removed_files_note(removed)
    body_path = workspace / RELEASE_BODY_FILENAME
    try:
        existing = body_path.read_text(encoding="utf-8", errors="replace") if body_path.exists() else ""
        body_path.write_text(existing + note)
    except OSError as exc:
        print(f"runner: could not append removed-files note to {RELEASE_BODY_FILENAME}: {exc}", file=sys.stderr)


def no_baseline_warning(source: str = SOURCE_NONE) -> str:
    """GitHub workflow annotation when no baseline resolves and the Feedback
    PR step will SKIP. A pure helper so the \`::warning::\` prefix (which routes
    it to GitHub's annotation stream) is unit-testable.

    Only unopenable sources reach here (SOURCE_ROOT opens the PR with
    \`untrusted_baseline_warning\` instead). SOURCE_GIT_ERROR = git couldn't read
    history (a baseline may exist); SOURCE_NONE = not a git repo / no history.
    """
    prefix = "::warning title=classroom50 Feedback PR::"
    if source == SOURCE_GIT_ERROR:
        return (
            f"{prefix}could not read git history to resolve the Feedback PR "
            "baseline; a baseline may exist but git could not read it (e.g., a "
            "container's 'dubious ownership' guard). The Feedback PR step will "
            "skip. See the runner log above for the git error."
        )
    return (
        f"{prefix}no git history found to anchor the Feedback PR baseline "
        "(not a git repository), so the Feedback PR step will skip. Was this "
        "repo created by an accept flow?"
    )


def untrusted_baseline_warning() -> str:
    """GitHub workflow annotation when the Feedback PR opens against the repo's
    root commit instead of the trusted accept commit (no commit detected adding
    \`.classroom50.yaml\`). The PR is still useful; the teacher gets a heads-up
    that the frozen base may include starter/plumbing work, so the diff could
    be larger than usual.

    A \`::warning::\` annotation (not a plain log) so it shows in the run summary.
    Pure helper for the same testability reason as \`no_baseline_warning\`."""
    return (
        "::warning title=classroom50 Feedback PR::opened the Feedback PR "
        f"against the repo's root commit -- no commit was detected as adding "
        f"{ACCEPT_MARKER_PATH}, so this baseline is UNTRUSTED and the review "
        "diff may include starter/plumbing files. Verify the repo was created "
        "by an accept flow if the diff looks larger than expected."
    )



def fetch_url(url: str) -> bytes | None:
    """GET \`url\`. 200 → bytes (≤ MAX_FETCH_BYTES), 404 → None,
    transient 5xx/network failures retried with exponential backoff."""
    last_exc: Exception | None = None
    for attempt in range(FETCH_ATTEMPTS):
        req = urllib.request.Request(url, headers={"User-Agent": "classroom50-autograde"})
        try:
            with urllib.request.urlopen(req, timeout=30) as resp:
                body = resp.read(MAX_FETCH_BYTES + 1)
                if len(body) > MAX_FETCH_BYTES:
                    raise ValueError(f"response from {url} exceeds {MAX_FETCH_BYTES}-byte ceiling")
                return body
        except urllib.error.HTTPError as exc:
            if exc.code == 404:
                return None
            last_exc = exc
            if exc.code < 500 or attempt == FETCH_ATTEMPTS - 1:
                raise
        except urllib.error.URLError as exc:
            last_exc = exc
            if attempt == FETCH_ATTEMPTS - 1:
                raise
        time.sleep(2 ** attempt)
    raise RuntimeError(f"fetch_url exhausted retries: {last_exc!r}")


def extract_tarball(data: bytes, dest: pathlib.Path) -> None:
    """Safe-extract a gzipped tar archive into \`dest\`.

    Prefers \`tarfile.extractall(filter='data')\` (Python 3.12+) to block
    path-traversal and unsafe member types. Falls back to a manual prefix
    check on older interpreters, since \`runtime.python\` lets teachers pin
    3.10/3.11 and the container path inherits the image's python.
    """
    dest.mkdir(parents=True, exist_ok=True)
    with tarfile.open(fileobj=io.BytesIO(data), mode="r:gz") as tar:
        if sys.version_info >= (3, 12):
            tar.extractall(path=dest, filter="data")
            return
        _safe_extractall_legacy(tar, dest)


def _safe_extractall_legacy(tar: tarfile.TarFile, dest: pathlib.Path) -> None:
    """Path-traversal-safe extraction for Python < 3.12. Mirrors the
    rejections \`filter='data'\` enforces upstream: no absolute paths, no \`..\`
    escaping \`dest\`, no symlinks/hard links, no device/FIFO/char-special
    members. Sane bundles (git archive / tar -czf) extract identically both
    ways.
    """
    dest_real = pathlib.Path(os.path.realpath(dest))
    for m in tar.getmembers():
        if m.issym() or m.islnk() or m.isdev() or m.ischr() or m.isfifo():
            raise ValueError(f"unsupported tar member type: {m.name!r}")
        if not m.name or os.path.isabs(m.name) or m.name.startswith(".."):
            raise ValueError(f"unsafe tar path: {m.name!r}")
        target = pathlib.Path(os.path.realpath(dest_real / m.name))
        if target != dest_real and dest_real not in target.parents:
            raise ValueError(f"unsafe tar path: {m.name!r}")
    tar.extractall(path=dest)


def output_has_status(github_output_path: str | None) -> bool:
    """Did the autograder write a status= line to $GITHUB_OUTPUT?"""
    if not github_output_path:
        return False
    p = pathlib.Path(github_output_path)
    if not p.is_file():
        return False
    return any(line.startswith("status=") for line in p.read_text().splitlines())


def append_outputs(github_output_path: str | None, status: str, summary: str) -> None:
    if not github_output_path:
        return
    safe_summary = summary.replace("\\n", " ").replace("\\r", " ")
    with open(github_output_path, "a") as fh:
        fh.write(f"status={status}\\n")
        fh.write(f"summary={safe_summary}\\n")


def append_sha_outputs(
    github_output_path: str | None, base_sha: str | None, head_sha: str
) -> None:
    """Write \`baseline-sha\` and \`head-sha\` to $GITHUB_OUTPUT for the Feedback
    PR step. \`baseline-sha\` is omitted (empty) when there's no usable baseline,
    which the step treats as "skip". SHAs are \`[0-9a-f]{40}\` so they can't
    inject extra output lines."""
    if not github_output_path:
        return
    with open(github_output_path, "a") as fh:
        fh.write(f"head-sha={head_sha}\\n")
        if base_sha:
            fh.write(f"baseline-sha={base_sha}\\n")


def now_utc() -> datetime.datetime:
    return datetime.datetime.now(datetime.timezone.utc)


def commit_submitted_at(sha: str, workspace: pathlib.Path) -> datetime.datetime:
    """The SUBMISSION instant for a graded commit: its committer date, read
    from git in the (full-depth) checkout and normalized to aware UTC. Invariant
    for a given commit, so re-grading it reproduces the identical \`datetime\` in
    result.json — the submission time and \`late\` flag never move.

    Falls back to now_utc() when the SHA is empty or git can't read the committer
    date (shallow clone, detached state, git error): lateness is advisory and a
    regrade must never fail or drop a submission over an unreadable timestamp. A
    normal full-depth checkout always resolves.
    """
    if not sha:
        return now_utc()
    try:
        proc = subprocess.run(
            ["git", "show", "-s", "--format=%cI", sha],
            cwd=str(workspace),
            capture_output=True,
            text=True,
            timeout=30,
            check=False,
        )
    except (OSError, subprocess.SubprocessError):
        return now_utc()
    if proc.returncode != 0:
        return now_utc()
    raw = (proc.stdout or "").strip()
    if not raw:
        return now_utc()
    try:
        # %cI is strict ISO-8601 with an offset (e.g., 2026-06-30T12:00:00+01:00).
        parsed = datetime.datetime.fromisoformat(raw)
    except ValueError:
        return now_utc()
    if parsed.tzinfo is None:
        return now_utc()
    # Normalize to UTC so the YYYY-MM-DDTHH:MM:SSZ format (and the late
    # comparison) is timezone-correct regardless of the committer's offset.
    return parsed.astimezone(datetime.timezone.utc)


def mode_is_group(mode: str | None) -> bool:
    """True only when the assignment mode is exactly 'group' (case- and
    whitespace-insensitive). Anything else — None, '', or unrecognized — is
    individual, so a missing/typo'd MODE env can never loosen validation (only
    require the stricter individual \`assignment_type\`). Mirrors the setup job's
    mode normalization."""
    return (mode or "").strip().lower() == "group"


# ---------------------------------------------------------------------------
# Error finalizer
# ---------------------------------------------------------------------------


class Finalizer:
    """Synthesizes a v1 result.json + release body + GITHUB_OUTPUT entries on
    any error path. The runner calls \`.error(message)\` instead of returning a
    non-zero exit code so the downstream publish step still has something to
    upload."""

    def __init__(
        self,
        *,
        workspace: pathlib.Path,
        github_output: str | None,
        classroom: str,
        assignment: str,
        username: str,
        submission: str,
        commit_link: str,
        release_link: str,
        review_link: str | None = None,
        submitted_by: dict[str, Any] | None = None,
        assignment_type: str = "individual",
        submitted_at: datetime.datetime | None = None,
    ):
        self.workspace = workspace
        self.github_output = github_output
        self.classroom = classroom
        self.assignment = assignment
        self.username = username
        self.submission = submission
        self.commit_link = commit_link
        self.release_link = release_link
        self.review_link = review_link
        self.submitted_by = submitted_by
        self.assignment_type = assignment_type
        # The graded commit's committer date — the invariant submission instant
        # written as \`datetime\`. Defaults to now only when a caller didn't
        # resolve it (keeps older call sites / tests working).
        self.submitted_at = submitted_at or now_utc()

    def error(self, message: str) -> int:
        print(f"::error::{message}", file=sys.stderr)
        result = empty_result(
            classroom=self.classroom,
            assignment=self.assignment,
            username=self.username,
            submission=self.submission,
            commit_link=self.commit_link,
            release_link=self.release_link,
            when=self.submitted_at,
            review_link=self.review_link,
            submitted_by=self.submitted_by,
            assignment_type=self.assignment_type,
        )
        summary = f"classroom50 autograde: {message}"
        (self.workspace / RESULT_FILENAME).write_text(json.dumps(result, indent=2) + "\\n")
        (self.workspace / RELEASE_BODY_FILENAME).write_text(render_release_body(result, summary))
        # Always overwrite — the autograder may have written a stale
        # status= before exiting non-zero or producing bad output.
        append_outputs(self.github_output, "error", summary)
        return 0

    def no_autograder(self) -> int:
        """Vacuous-pass synthesis for classrooms with no autograder configured
        yet. Distinct from \`error()\` because "no autograder configured" is a
        valid mid-setup state, not a failure: the student submitted, the
        workflow tagged, and the gradebook records 0/0 success rather than an
        error. Reuses derive_status_and_summary's empty-tests branch."""
        result = empty_result(
            classroom=self.classroom,
            assignment=self.assignment,
            username=self.username,
            submission=self.submission,
            commit_link=self.commit_link,
            release_link=self.release_link,
            when=self.submitted_at,
            review_link=self.review_link,
            submitted_by=self.submitted_by,
            assignment_type=self.assignment_type,
        )
        status, summary = derive_status_and_summary(result)
        print(f"runner: {summary}")
        (self.workspace / RESULT_FILENAME).write_text(json.dumps(result, indent=2) + "\\n")
        (self.workspace / RELEASE_BODY_FILENAME).write_text(render_release_body(result, summary))
        append_outputs(self.github_output, status, summary)
        return 0


# ---------------------------------------------------------------------------
# Declarative test grading (GitHub Classroom-style io / run / python tests)
# ---------------------------------------------------------------------------
#
# Grades a bundled tests.json with a built-in interpreter. The specs are DATA,
# never code: \`run\`/\`setup\` strings are teacher-authored shell, executed in the
# student checkout at the same privilege as an autograder.py. They arrive via
# the Pages bundle — never interpolated into workflow YAML — and students can't
# edit assignments.json. The interpreter re-validates spec shape because the
# file is hand-editable. Write-time validator: tests.go; trust-boundary
# rationale: the Autograders wiki page.


class TestsConfigError(Exception):
    """tests.json is missing, malformed, or fails runtime re-validation.
    Surfaced to the workflow via Finalizer.error."""


class TestFixtureError(Exception):
    """A test references an input-file/expected-file that is missing or escapes
    the bundle directory."""


def compare_output(actual: str, expected: str, mode: str) -> bool:
    """Compare program stdout against expected output, GitHub Classroom-style.

    - included: expected appears anywhere in actual (raw substring).
    - exact: equal ignoring leading/trailing whitespace (the trailing-newline
      footgun otherwise fails almost every test).
    - regex: \`re.search\` with re.MULTILINE (^/$ anchor at line boundaries).
      Raises re.error on a bad pattern so the caller reports a failing test.
    """
    if mode == COMPARISON_INCLUDED:
        return expected in actual
    if mode == COMPARISON_EXACT:
        return actual.strip() == expected.strip()
    if mode == COMPARISON_REGEX:
        return re.search(expected, actual, re.MULTILINE) is not None
    raise ValueError(f"unknown comparison mode {mode!r}")


def _clip(text: str | None) -> str:
    """Truncate captured output for the release body."""
    text = text or ""
    if len(text) > MAX_CAPTURED_CHARS:
        return text[:MAX_CAPTURED_CHARS] + "\\n... (truncated)"
    return text


def _unified_diff(expected: str, actual: str) -> str:
    """Unified diff of expected vs actual stdout for a failed exact-comparison
    io test. A diff pinpoints the divergent line; the raw side-by-side blocks
    it replaces made students eyeball-compare up to 2000 chars each. Inputs
    are stripped to mirror compare_output's exact semantics, so the diff never
    flags leading/trailing whitespace the comparison ignores."""
    lines = difflib.unified_diff(
        expected.strip().splitlines(), actual.strip().splitlines(),
        fromfile="expected", tofile="actual stdout", lineterm="",
    )
    return _clip("\\n".join(lines))


def _fence(text: str) -> str:
    """A backtick fence longer than any backtick run inside \`text\`, so student
    output containing \`\`\` can't break out of the code block and inject Markdown
    into the release body."""
    longest = max((len(m.group(0)) for m in re.finditer(r"\`+", text)), default=0)
    return "\`" * max(3, longest + 1)


def _make_outcome(name: str, points: int, passed: bool, detail: str,
                  *, score: int | None = None) -> dict[str, Any]:
    """One test's outcome. Carries the v1 result-row fields plus a \`detail\`
    string used only for the release body (stripped before result.json)."""
    if score is None:
        score = points if passed else 0
    return {
        "test-name": name,
        "passed": passed,
        "score": score,
        "max-score": points,
        "detail": detail,
    }


def _read_fixture(rel: str, fixtures_dir: pathlib.Path) -> str:
    """Read a bundled fixture file, rejecting any path that escapes the bundle
    directory (a hand-edited expected-file '../../etc/passwd' must not be
    readable)."""
    base = pathlib.Path(os.path.realpath(fixtures_dir))
    target = pathlib.Path(os.path.realpath(base / rel))
    if target != base and base not in target.parents:
        raise TestFixtureError(f"fixture path escapes the bundle: {rel!r}")
    if not target.is_file():
        raise TestFixtureError(f"fixture file not found: {rel!r}")
    return target.read_text(encoding="utf-8", errors="replace")


def _resolve_stdin(spec: dict[str, Any], fixtures_dir: pathlib.Path) -> str:
    """stdin for an io test: the bundled input-file if set, else the inline
    \`input\`, else empty (always a string so the child never inherits the
    parent's stdin and hangs on a terminal)."""
    if spec.get("input-file"):
        return _read_fixture(spec["input-file"], fixtures_dir)
    return spec.get("input") or ""


def _resolve_expected(spec: dict[str, Any], fixtures_dir: pathlib.Path) -> str:
    if spec.get("expected-file"):
        return _read_fixture(spec["expected-file"], fixtures_dir)
    return spec.get("expected") or ""


def _run_command(command: str, cwd: pathlib.Path, timeout: int,
                 stdin: str = "") -> subprocess.CompletedProcess[str]:
    """Run a shell command in the student checkout with captured text output
    and an empty-by-default stdin."""
    return subprocess.run(
        command,
        shell=True,
        cwd=str(cwd),
        input=stdin,
        capture_output=True,
        text=True,
        encoding="utf-8",
        errors="replace",
        timeout=timeout,
    )


def _run_setup(setup: str, cwd: pathlib.Path, timeout: int) -> str | None:
    """Run a test's setup command. Returns an error string if it times out or
    exits non-zero, else None."""
    try:
        sp = _run_command(setup, cwd, timeout)
    except subprocess.TimeoutExpired:
        return f"setup timed out after {timeout}s"
    except OSError as exc:
        return f"setup failed to start: {exc}"
    if sp.returncode != 0:
        return f"setup exited {sp.returncode}\\n{_clip(sp.stderr or sp.stdout)}"
    return None


# import name -> pip package for the pytest deps bare setup-python omits (#212).
_PYTEST_DEPS = {"pytest": "pytest", "pytest_jsonreport": "pytest-json-report"}

# Floor for the auto-install budget: the 10s default per-test timeout is too
# small for a cold install, which would silently no-op the #212 fix.
PIP_INSTALL_TIMEOUT = 120


def _ensure_pytest(cwd: pathlib.Path, timeout: int) -> None:
    """Best-effort, idempotent install of the pytest deps missing from the
    grading interpreter; never raises (offline runner falls back to #212)."""
    missing = [package for module, package in _PYTEST_DEPS.items()
               if importlib.util.find_spec(module) is None]
    if not missing:
        return
    install = (f"{shlex.quote(sys.executable)} -m pip install --quiet "
               + " ".join(shlex.quote(p) for p in missing))
    try:
        # Own budget, not the per-test timeout: the 10s default is too small
        # for a cold install and would leave the deps missing.
        _run_command(install, cwd, max(timeout, PIP_INSTALL_TIMEOUT))
    except (subprocess.SubprocessError, OSError):
        pass


def _grade_python(spec: dict[str, Any], cwd: pathlib.Path, timeout: int,
                  points: int, name: str) -> dict[str, Any]:
    """Split \`points\` across cases via pytest-json-report (deps auto-installed
    by _ensure_pytest), falling back to exit-code scoring when no report."""
    _ensure_pytest(cwd, timeout)
    report_dir = pathlib.Path(tempfile.mkdtemp(prefix="classroom50-pytest-"))
    report = report_dir / "report.json"
    # Skip appending when the teacher's command already configures the plugin
    # (duplicate flags make pytest exit with a usage error).
    if "--json-report" in spec["run"]:
        cmd = spec["run"]
    else:
        cmd = f"{spec['run']} --json-report --json-report-file={shlex.quote(str(report))}"
    try:
        rp = _run_command(cmd, cwd, timeout)
    except subprocess.TimeoutExpired:
        shutil.rmtree(report_dir, ignore_errors=True)
        return _make_outcome(name, points, False, f"timed out after {timeout}s")
    except OSError as exc:
        shutil.rmtree(report_dir, ignore_errors=True)
        return _make_outcome(name, points, False, f"failed to start: {exc}")

    passed_n = total_n = None
    if report.is_file():
        try:
            summary = (json.loads(report.read_text(encoding="utf-8", errors="replace"))
                       .get("summary") or {})
            total_n = int(summary.get("total") or 0)
            passed_n = int(summary.get("passed") or 0)
        except (json.JSONDecodeError, ValueError, TypeError, AttributeError):
            passed_n = total_n = None
    shutil.rmtree(report_dir, ignore_errors=True)

    if total_n:
        score = max(0, min(points, round(points * passed_n / total_n)))
        passed = passed_n == total_n
        # Full credit is reserved for an all-pass run: with small point values
        # round() could otherwise award points/points to a FAIL row (e.g.
        # points=1, 2/3 cases passed).
        if not passed:
            score = min(score, max(0, points - 1))
        detail = f"pytest: {passed_n}/{total_n} cases passed"
        if not passed:
            detail += "\\n" + _clip(rp.stdout or rp.stderr)
        return _make_outcome(name, points, passed, detail, score=score)

    # Fallback: no parseable report -> all-or-nothing on the exit code
    # (e.g., an offline runner couldn't load pytest-json-report).
    passed = rp.returncode == 0
    detail = (f"pytest exit {rp.returncode} "
              f"(no JSON report from pytest-json-report; scored on exit code)")
    if not passed:
        detail += "\\n" + _clip(rp.stdout or rp.stderr)
    return _make_outcome(name, points, passed, detail)


def execute_test(spec: dict[str, Any], *, cwd: pathlib.Path,
                 fixtures_dir: pathlib.Path) -> dict[str, Any]:
    """Run one declarative test and return its outcome dict. Never raises for a
    test failure -- a timeout, crash, bad fixture, or bad regex all map to a
    failing outcome with a diagnostic \`detail\`."""
    name = spec["name"]
    points = int(spec.get("points") or 0)
    ttype = spec["type"]
    timeout = int(spec.get("timeout") or 0) or DEFAULT_TEST_TIMEOUT

    setup = spec.get("setup") or ""
    if setup:
        err = _run_setup(setup, cwd, timeout)
        if err:
            return _make_outcome(name, points, False, err)

    if ttype == TEST_TYPE_PYTHON:
        return _grade_python(spec, cwd, timeout, points, name)

    try:
        stdin = _resolve_stdin(spec, fixtures_dir)
    except TestFixtureError as exc:
        return _make_outcome(name, points, False, str(exc))

    try:
        rp = _run_command(spec["run"], cwd, timeout, stdin=stdin)
    except subprocess.TimeoutExpired:
        return _make_outcome(name, points, False, f"timed out after {timeout}s")
    except OSError as exc:
        return _make_outcome(name, points, False, f"failed to start: {exc}")

    if ttype == TEST_TYPE_RUN:
        want = spec.get("exit-code")
        want = 0 if want is None else int(want)
        passed = rp.returncode == want
        detail = f"exit {rp.returncode} (wanted {want})"
        if not passed:
            detail += "\\n" + _clip(rp.stderr or rp.stdout)
        return _make_outcome(name, points, passed, detail)

    # io test.
    try:
        expected = _resolve_expected(spec, fixtures_dir)
    except TestFixtureError as exc:
        return _make_outcome(name, points, False, str(exc))
    comparison = spec["comparison"]
    try:
        passed = compare_output(rp.stdout, expected, comparison)
    except re.error as exc:
        return _make_outcome(name, points, False, f"invalid regex in expected: {exc}")
    detail = f"exit {rp.returncode}; comparison={comparison}"
    if not passed:
        # A line diff only makes sense against a full expected output, and only
        # for exact: for included/regex the expectation is a fragment or
        # pattern, so those keep the verbatim expected/actual blocks. The exact
        # comparison also sees separator characters splitlines() folds away
        # (\\x0c, \\x85, \\u2028, a literal \\r in an inline expected), so a failing
        # exact test can yield an empty diff — fall back to the same verbatim
        # blocks rather than show FAIL with no explanation.
        diff = _unified_diff(expected, rp.stdout) if comparison == COMPARISON_EXACT else ""
        if diff:
            detail += f"\\n{diff}"
        else:
            detail += (f"\\n--- expected ({comparison}) ---\\n{_clip(expected)}"
                       f"\\n--- actual stdout ---\\n{_clip(rp.stdout)}")
        if rp.stderr.strip():
            detail += f"\\n--- stderr ---\\n{_clip(rp.stderr)}"
    return _make_outcome(name, points, passed, detail)


def _validate_test_spec(t: Any) -> str | None:
    """Re-validate one spec at grade time — a lower bar than tests.go that
    keeps a hand-edited assignments.json from crashing the grader."""
    if not isinstance(t, dict):
        return "not an object"
    name = t.get("name")
    if not isinstance(name, str) or not name:
        return "name must be a non-empty string"
    # Mirror tests.go / tests-v1.schema.json: names are echoed into the release
    # body and, since the log report, into a column-0 \`::group::FAIL: {name}\`
    # line — a control char there could inject a workflow command.
    if any(ord(c) < 0x20 or ord(c) == 0x7f for c in name):
        return "name must not contain control characters"
    if t.get("type") not in TEST_TYPES:
        return f"type {t.get('type')!r} must be one of {list(TEST_TYPES)}"
    if not isinstance(t.get("run"), str) or not t.get("run"):
        return "run must be a non-empty string"
    points = t.get("points", 0)
    if isinstance(points, bool) or not isinstance(points, int) or points < 0:
        return "points must be a non-negative integer"
    timeout = t.get("timeout", 0)
    if isinstance(timeout, bool) or not isinstance(timeout, int) or timeout < 0 or timeout > 600:
        return "timeout must be an integer between 0 and 600"
    # Type-check the optional string fields execute_test consumes so a malformed
    # tests.json fails with a clear message, not a mid-run TypeError.
    for key in ("setup", "input", "input-file", "expected", "expected-file"):
        v = t.get(key)
        if v is not None and not isinstance(v, str):
            return f"{key} must be a string"
    if t.get("type") == TEST_TYPE_IO and t.get("comparison") not in COMPARISONS:
        return f"comparison must be one of {list(COMPARISONS)}"
    # exit-code feeds \`int(...)\` and an equality check in execute_test.
    exit_code = t.get("exit-code")
    if exit_code is not None and (isinstance(exit_code, bool) or not isinstance(exit_code, int)):
        return "exit-code must be an integer"
    return None


def load_tests(path: pathlib.Path) -> list[dict[str, Any]]:
    """Parse + re-validate a materialized tests.json. Raises TestsConfigError
    on any structural problem."""
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise TestsConfigError(f"{TESTS_FILENAME} is not a JSON object")
    if data.get("schema") != TESTS_SCHEMA_V1:
        raise TestsConfigError(
            f"{TESTS_FILENAME} schema is {data.get('schema')!r}, want {TESTS_SCHEMA_V1!r}")
    tests = data.get("tests")
    if not isinstance(tests, list) or not tests:
        raise TestsConfigError(f"{TESTS_FILENAME} 'tests' must be a non-empty list")
    seen = set()
    for i, t in enumerate(tests):
        err = _validate_test_spec(t)
        if err:
            raise TestsConfigError(f"{TESTS_FILENAME} tests[{i}]: {err}")
        # Names are row identities in result.json; duplicates make the
        # gradebook ambiguous.
        if t["name"] in seen:
            raise TestsConfigError(f"{TESTS_FILENAME} tests[{i}]: duplicate test name {t['name']!r}")
        seen.add(t["name"])
    return tests


def render_declarative_body(result: dict[str, Any], outcomes: list[dict[str, Any]],
                            summary: str) -> str:
    """Release-body Markdown for a declaratively-graded submission: the score
    line, a per-test table, and a collapsible failure-detail section with
    captured output for any failing test."""
    lines = [f"### classroom50 autograde: {result['score']}/{result['max-score']}", ""]
    lines.append("| Test | Result | Score |")
    lines.append("|---|---|---|")
    for o in outcomes:
        ok = "PASS" if o["passed"] else "FAIL"
        name = o["test-name"].replace("|", "\\\\|")
        lines.append(f"| {name} | {ok} | {o['score']} / {o['max-score']} |")
    lines.append("")

    failed = [o for o in outcomes if not o["passed"]]
    if failed:
        lines.append("<details><summary>Failure details</summary>")
        lines.append("")
        for o in failed:
            detail = (o.get("detail") or "").rstrip()
            fence = _fence(detail)
            lines.append(f"**{o['test-name']}**")
            lines.append("")
            lines.append(fence)
            lines.append(detail)
            lines.append(fence)
            lines.append("")
        lines.append("</details>")
        lines.append("")

    lines.append(f"Status: {summary}")
    return "\\n".join(lines) + "\\n"


def _colorize(text: str, code: str, *, color: bool) -> str:
    """Wrap \`text\` in an ANSI code, or return it untouched when color is off."""
    if not color:
        return text
    return f"{code}{text}{ANSI_RESET}"


def _strip_control_chars(text: str) -> str:
    """Drop ASCII control chars (incl. newlines) so a name can't inject a
    column-0 workflow command into the log report. Mirrors tests.go's
    no-control-chars rule as a defense-in-depth backstop to _validate_test_spec."""
    return "".join(c for c in text if ord(c) >= 0x20 and ord(c) != 0x7f)


def render_log_report(outcomes: list[dict[str, Any]], *, color: bool) -> str:
    """Per-test report for the workflow log: a PASS/FAIL line per test, then
    one collapsible ::group:: per failing test with its captured detail.
    Failures only get groups — folding every passing test would bury the red
    ones. The release body carries the same data as Markdown; this is the
    log-surface rendering (ANSI is fine here, Markdown tables are not).

    Detail lines are indented two spaces: detail carries student-controlled
    program output, and GitHub only interprets workflow commands (::error::,
    ::endgroup::, ::stop-commands::) at column 0 — the indent makes command
    injection impossible. This is the log-surface analogue of _fence on the
    Markdown surface.
    """
    lines = []
    for o in outcomes:
        name = _strip_control_chars(o["test-name"])
        if o["passed"]:
            verdict = _colorize("PASS", ANSI_GREEN, color=color)
        else:
            verdict = _colorize("FAIL", ANSI_BOLD + ANSI_RED, color=color)
        lines.append(f"{verdict}  {name}  ({o['score']}/{o['max-score']})")

    for o in outcomes:
        if o["passed"]:
            continue
        # test-name lands at column 0 in the group header; _validate_test_spec
        # already rejects control chars, but strip here too so a name can never
        # inject a workflow command even if it reached this renderer some other
        # way (mirrors the two-space indent that defends the detail lines).
        lines.append(f"::group::FAIL: {_strip_control_chars(o['test-name'])}")
        for dl in (o.get("detail") or "").rstrip().splitlines():
            if dl.startswith("+"):
                dl = _colorize(dl, ANSI_GREEN, color=color)
            elif dl.startswith("-"):
                dl = _colorize(dl, ANSI_RED, color=color)
            elif dl.startswith("@@"):
                dl = _colorize(dl, ANSI_CYAN, color=color)
            lines.append(f"  {dl}")
        lines.append("::endgroup::")
    return "\\n".join(lines) + "\\n"


def append_step_summary(markdown: str) -> None:
    """Append Markdown to the workflow run's Summary page ($GITHUB_STEP_SUMMARY).
    Best-effort: the summary is a convenience surface, so an unset var (local
    runs, tests) or a write failure must never affect the grading outcome."""
    path = os.environ.get("GITHUB_STEP_SUMMARY")
    if not path:
        return
    try:
        with open(path, "a", encoding="utf-8") as f:
            f.write(markdown)
    except OSError:
        pass


def mirror_body_to_step_summary(workspace: pathlib.Path) -> None:
    """Mirror the final release-body.md to the run's Summary page. Called once
    from main()'s finally so every exit path (declarative grade, custom
    autograder, infrastructure error, vacuous pass) surfaces the same body the
    release carries. errors="replace": a custom autograder may write arbitrary
    bytes, and a decode error must never crash a graded run (UnicodeDecodeError
    is a ValueError, not an OSError, so the read is guarded too)."""
    body_path = workspace / RELEASE_BODY_FILENAME
    try:
        append_step_summary(body_path.read_text(encoding="utf-8", errors="replace"))
    except OSError:
        pass


class DeclarativeGrader:
    """Runs a list of declarative test specs and builds the v1 result.json.
    Constructed with the same identity context the Finalizer carries."""

    def __init__(self, *, workspace: pathlib.Path, fixtures_dir: pathlib.Path,
                 classroom: str, assignment: str, username: str, submission: str,
                 commit_link: str, release_link: str,
                 review_link: str | None = None,
                 submitted_by: dict[str, Any] | None = None,
                 assignment_type: str = "individual",
                 submitted_at: datetime.datetime | None = None):
        self.workspace = workspace
        self.fixtures_dir = fixtures_dir
        self.classroom = classroom
        self.assignment = assignment
        self.username = username
        self.submission = submission
        self.commit_link = commit_link
        self.release_link = release_link
        self.review_link = review_link
        self.submitted_by = submitted_by
        self.assignment_type = assignment_type
        # The graded commit's committer date (invariant submission instant),
        # written as \`datetime\`; defaults to now when not supplied.
        self.submitted_at = submitted_at or now_utc()

    def grade(self, tests: list[dict[str, Any]]) -> tuple[dict[str, Any], list[dict[str, Any]]]:
        """Run every test. Returns (result.json dict, outcomes) where the
        outcomes carry per-test \`detail\` for the release body."""
        outcomes = [execute_test(t, cwd=self.workspace, fixtures_dir=self.fixtures_dir)
                    for t in tests]
        rows = [{k: o[k] for k in ("test-name", "passed", "score", "max-score")}
                for o in outcomes]
        result = make_result(
            classroom=self.classroom,
            assignment=self.assignment,
            username=self.username,
            submission=self.submission,
            commit_link=self.commit_link,
            release_link=self.release_link,
            when=self.submitted_at,
            score=sum(o["score"] for o in outcomes),
            max_score=sum(o["max-score"] for o in outcomes),
            tests=rows,
            review_link=self.review_link,
            submitted_by=self.submitted_by,
            assignment_type=self.assignment_type,
        )
        return result, outcomes


def run_declarative(tests_path: pathlib.Path, finalize: Finalizer,
                    fixtures_dir: pathlib.Path) -> int:
    """Grade a per-assignment tests.json: load + re-validate, run each test,
    then write result.json / release-body.md / GITHUB_OUTPUT. A malformed
    tests.json routes through Finalizer.error so the submission still publishes
    as 'submitted, error'. Always returns 0 -- a grading outcome (even all-fail)
    never fails the runner."""
    try:
        tests = load_tests(tests_path)
    except (json.JSONDecodeError, TestsConfigError, OSError) as exc:
        return finalize.error(f"{TESTS_FILENAME}: {exc}")

    grader = DeclarativeGrader(
        workspace=finalize.workspace,
        fixtures_dir=fixtures_dir,
        classroom=finalize.classroom,
        assignment=finalize.assignment,
        username=finalize.username,
        submission=finalize.submission,
        commit_link=finalize.commit_link,
        release_link=finalize.release_link,
        review_link=finalize.review_link,
        submitted_by=finalize.submitted_by,
        assignment_type=finalize.assignment_type,
        submitted_at=finalize.submitted_at,
    )
    # Backstop: execute_test/load_tests handle expected failures; the broad
    # catch guarantees the "grading outcomes always exit 0" invariant — an
    # unexpected exception becomes a published error result, never a crash.
    try:
        result, outcomes = grader.grade(tests)
    except Exception as exc:  # noqa: BLE001 - grading must never crash the runner
        return finalize.error(f"declarative grader crashed: {exc}")

    # Should always pass (the grader controls every field), but validating
    # keeps parity with collect_scores ingest and catches drift early.
    err = validate_result(
        result, classroom=finalize.classroom, assignment=finalize.assignment,
        is_group=(finalize.assignment_type == "group"), owner=finalize.username,
    )
    if err is not None:
        return finalize.error(f"declarative grader produced invalid result: {err}")

    status, summary = derive_status_and_summary(result)
    # Failure details used to live only in the release body, forcing a
    # detour from the (natural) Actions log to the release to see why a
    # test failed. Print the per-test report to the log too, ANSI-colored
    # only under Actions so pytest-captured and local output stay clean.
    color = os.environ.get("GITHUB_ACTIONS") == "true" and "NO_COLOR" not in os.environ
    print(render_log_report(outcomes, color=color), end="")
    print(f"runner: {summary}")
    (finalize.workspace / RESULT_FILENAME).write_text(json.dumps(result, indent=2) + "\\n")
    body = render_declarative_body(result, outcomes, summary)
    (finalize.workspace / RELEASE_BODY_FILENAME).write_text(body)
    append_outputs(finalize.github_output, status, summary)
    return 0


# ---------------------------------------------------------------------------
# Pipeline stages (called in order by main(); each a named step so the flow
# reads as a narrative with explicit precedence/early-exit). They call the
# module-level fetch_url / subprocess.run so the test harness's monkeypatches
# still apply.
# ---------------------------------------------------------------------------


def fetch_bundle(finalize: Finalizer, *, pages_base_url: str, classroom: str,
                 assignment: str, runtime_dir: pathlib.Path, secret: str = "") -> int | None:
    """Download the per-assignment bundle from Pages and extract it into
    \`runtime_dir\`. A 404 means "no per-assignment override" — fine, the resolver
    falls through to the classroom default. Returns an rc (already finalized as
    an error) on a hard fetch/extract failure, or None to continue."""
    burl = bundle_url(pages_base_url, classroom, assignment, secret)
    print(f"runner: fetching bundle {burl}")
    try:
        bundle = fetch_url(burl)
    except (urllib.error.HTTPError, urllib.error.URLError, ValueError) as exc:
        return finalize.error(f"bundle fetch failed: {exc} — see workflow logs")

    if bundle is not None:
        print(f"runner: bundle size {len(bundle)} bytes")
        try:
            extract_tarball(bundle, runtime_dir)
        except (tarfile.TarError, OSError, ValueError) as exc:
            return finalize.error(f"bundle extraction failed: {exc} — see workflow logs")
    return None


def resolve_entrypoint(
    finalize: Finalizer, *, pages_base_url: str, classroom: str, assignment: str,
    runtime_dir: pathlib.Path, secret: str = "",
) -> tuple[pathlib.Path | None, int | None]:
    """Resolve the grading entrypoint, most-specific first:
        per-assignment autograder.py
        > per-assignment tests.json (declarative, graded in-process)
        > classroom default autograder.py
        > vacuous pass.
    A hand-written per-assignment autograder.py wins over declarative tests for
    the same slug (it's the escape hatch).

    Returns exactly one of two shapes (never both-set, never both-None):
      (entrypoint, None)  — a Python entrypoint to exec; main() continues.
      (None, rc)          — the step is TERMINAL and rc is main()'s return
                            value: declarative grader ran (run_declarative),
                            nothing configured (no_autograder), or the default
                            fetch failed (error).
    A missing autograder is NOT an error: "no autograder configured" is a valid
    mid-setup state, so finalize.no_autograder() synthesizes a vacuous-pass
    (0/0 success) and the gradebook records the submission.
    """
    per_assignment = runtime_dir / assignment / ENTRYPOINT_FILENAME
    per_assignment_tests = runtime_dir / assignment / TESTS_FILENAME
    if per_assignment.is_file():
        print(f"runner: using per-assignment entrypoint {per_assignment}")
        return per_assignment, None
    if per_assignment_tests.is_file():
        print(f"runner: grading per-assignment declarative tests {per_assignment_tests}")
        return None, run_declarative(per_assignment_tests, finalize, runtime_dir / assignment)

    durl = classroom_default_autograder_url(pages_base_url, classroom, secret)
    print(
        f"runner: no per-assignment {ENTRYPOINT_FILENAME}; "
        f"fetching classroom default from {durl}"
    )
    try:
        content = fetch_url(durl)
    except (urllib.error.HTTPError, urllib.error.URLError, ValueError) as exc:
        return None, finalize.error(f"classroom default {ENTRYPOINT_FILENAME} fetch failed: {exc}")
    if content is None:
        # "No autograder configured" is a valid mid-setup state, not an error:
        # synthesize a vacuous-pass result (0/0 success).
        return None, finalize.no_autograder()
    entrypoint = runtime_dir / ENTRYPOINT_FILENAME
    entrypoint.write_bytes(content)
    print(f"runner: using classroom default entrypoint {entrypoint}")
    return entrypoint, None


def run_entrypoint(
    finalize: Finalizer, entrypoint: pathlib.Path, workspace: pathlib.Path,
) -> int | None:
    """Exec the entrypoint with the helper env vars and cwd at the student's
    checkout. Returns an rc (already finalized as an error) on a failed
    invocation or a non-zero autograder exit, else None to continue.

    The USERNAME / *_URL helper env vars are read off \`finalize\` (the identity
    carrier), matching run_declarative, rather than re-threading them through
    the signature."""
    env = dict(os.environ)
    env["USERNAME"] = finalize.username
    env["OWNER"] = finalize.username
    env["ASSIGNMENT_TYPE"] = finalize.assignment_type
    env["COMMIT_URL"] = finalize.commit_link
    env["RELEASE_URL"] = finalize.release_link
    env["REVIEW_URL"] = finalize.review_link
    try:
        proc = subprocess.run(
            [sys.executable, str(entrypoint)],
            cwd=str(workspace),
            env=env,
            check=False,
        )
    except OSError as exc:
        return finalize.error(f"failed to invoke {ENTRYPOINT_FILENAME}: {exc}")
    if proc.returncode != 0:
        return finalize.error(f"autograder exited {proc.returncode}")
    return None


def finalize_result(finalize: Finalizer, *, is_group: bool) -> int:
    """Read + validate the autograder's result.json, then synthesize the release
    body and status/summary outputs it didn't write. Returns the runner's exit
    code (0 on success; an error rc when the result is missing/malformed/invalid).
    Identity/paths are read off \`finalize\`; \`is_group\` is the one stage-local
    input (it drives the \`assignment_type\` check in validate_result)."""
    workspace = finalize.workspace
    github_output = finalize.github_output
    result_path = workspace / RESULT_FILENAME
    if not result_path.is_file():
        return finalize.error(f"autograder did not produce {RESULT_FILENAME}")
    try:
        result = json.loads(result_path.read_text())
    except json.JSONDecodeError as exc:
        return finalize.error(f"{RESULT_FILENAME} is not valid JSON: {exc}")

    # Stamp the runner-authoritative identity fields BEFORE validation. A custom
    # autograder builds its own result.json and can't be trusted to set \`owner\`
    # (repo owner) or \`assignment_type\` (mode) — the runner knows both. Overwrite
    # so a student-influenced result.json can't claim a different owner/type.
    if isinstance(result, dict):
        result["owner"] = finalize.username
        result["assignment_type"] = finalize.assignment_type
        # Submission instant is runner-authoritative: the graded commit's
        # committer date, invariant across regrades and not student-influenced.
        # Overwrite any autograder-written \`datetime\`. \`graded_at\` (this run's
        # wall clock) is stamped fresh on every (re)grade.
        result["datetime"] = finalize.submitted_at.strftime("%Y-%m-%dT%H:%M:%SZ")
        result["graded_at"] = now_utc().strftime("%Y-%m-%dT%H:%M:%SZ")
        # The actual pusher (GITHUB_ACTOR), also runner-authoritative. Stamp
        # unconditionally: set it when known, DROP any autograder-written
        # \`submitted_by\` when the actor couldn't be resolved — never let a
        # custom result.json's self-asserted (student-influenced) pusher survive.
        if finalize.submitted_by is not None:
            result["submitted_by"] = finalize.submitted_by
        else:
            result.pop("submitted_by", None)
        result_path.write_text(json.dumps(result, indent=2) + "\\n")

    err = validate_result(
        result, classroom=finalize.classroom, assignment=finalize.assignment,
        is_group=is_group, owner=finalize.username,
    )
    if err is not None:
        return finalize.error(err)

    # Synthesize release-body.md if the autograder didn't write one. main()'s
    # finally mirrors the final body to the Summary page on every exit path.
    body_path = workspace / RELEASE_BODY_FILENAME
    if not body_path.is_file():
        _, fallback = derive_status_and_summary(result)
        body_path.write_text(render_release_body(result, fallback))

    # Synthesize status / summary if the autograder didn't write them.
    if not output_has_status(github_output):
        status, summary = derive_status_and_summary(result)
        append_outputs(github_output, status, summary)
        print(f"runner: derived status={status} summary={summary!r}")
    else:
        print("runner: autograder set status/summary; using as-is")
    return 0


# ---------------------------------------------------------------------------
# main()
# ---------------------------------------------------------------------------


def detect_acceptance_mode() -> int:
    """\`runner.py --detect-acceptance\`: write is-acceptance=true|false and
    is-shim-update=true|false to $GITHUB_OUTPUT for the setup job's skip
    gates. Always exits 0; fails open (both False) on any uncertainty.
    Acceptance takes precedence: the accept commit also touches the shim, so
    is-shim-update is only computed for a non-acceptance tip.
    """
    workspace = pathlib.Path.cwd()
    head_sha = os.environ.get("GITHUB_SHA", "").strip()
    is_acceptance = is_acceptance_commit(workspace, head_sha)
    is_shim_update = not is_acceptance and is_shim_update_commit(workspace, head_sha)
    github_output = os.environ.get("GITHUB_OUTPUT")
    if github_output:
        with open(github_output, "a") as fh:
            fh.write(f"is-acceptance={'true' if is_acceptance else 'false'}\\n")
            fh.write(f"is-shim-update={'true' if is_shim_update else 'false'}\\n")
    if is_acceptance:
        print(
            "::notice::acceptance commit detected — nothing to grade yet; "
            "submit work (gh student submit) to be graded"
        )
    elif is_shim_update:
        print(
            "::notice::autograder-trigger update detected — nothing to grade"
        )
    else:
        print("runner: not an acceptance commit; grading proceeds")
    return 0


def main() -> int:
    if "--detect-acceptance" in sys.argv[1:]:
        return detect_acceptance_mode()

    pages_base_url = os.environ.get("PAGES_BASE_URL", "").strip()
    classroom = os.environ.get("CLASSROOM", "").strip()
    assignment = os.environ.get("ASSIGNMENT", "").strip()
    submission = os.environ.get("SUBMISSION_TAG", "").strip()
    if not (pages_base_url and classroom and assignment and submission):
        print(
            "::error::runner requires PAGES_BASE_URL, CLASSROOM, "
            "ASSIGNMENT, and SUBMISSION_TAG — running outside the autograde-runner workflow?",
            file=sys.stderr,
        )
        return 1

    # Optional capability-URL secret (from the student repo's .classroom50.yaml).
    # Present -> resources at <classroom>/<secret>/; absent -> plain path. The
    # setup job validates it; re-check here as defense-in-depth since it composes
    # into a URL.
    secret = os.environ.get("SECRET", "").strip()
    if secret and not re.fullmatch(r"[a-z0-9]{4,64}", secret):
        print(
            f"::error::SECRET {secret!r} is malformed (must be [a-z0-9]{{4,64}}) — "
            "re-run \`gh student accept\` to regenerate .classroom50.yaml",
            file=sys.stderr,
        )
        return 1

    repository = os.environ.get("GITHUB_REPOSITORY", "")
    sha = os.environ.get("GITHUB_SHA", "")
    server_url = os.environ.get("GITHUB_SERVER_URL", "https://github.com")
    actor = os.environ.get("GITHUB_ACTOR", "")
    # Assignment mode flows from assignments.json via the setup job's \`mode\`
    # output. Unknown/missing defaults to individual (the stricter
    # \`assignment_type\`) so a missing env can't loosen validation.
    is_group = mode_is_group(os.environ.get("MODE"))
    github_output = os.environ.get("GITHUB_OUTPUT")
    workspace = pathlib.Path.cwd()

    username = username_from_repo(repository, classroom, assignment, actor)
    commit_link = commit_url(server_url, repository, sha)
    release_link = release_url(server_url, repository, submission)
    # Submission instant is the graded commit's committer date — stable across
    # regrades, so re-grading the same commit never moves \`datetime\`/\`late\`.
    submitted_at = commit_submitted_at(sha, workspace)
    # Resolve the baseline once: both the review-compare link and the Feedback
    # PR gate need it, and the scan issues several sequential git calls, so a
    # second walk would double the worst-case time against the 15-min ceiling.
    baseline_scan = _baseline_scan(workspace)
    base_sha = baseline_scan[0]
    review_link = review_url(server_url, repository, base_sha, sha)
    if base_sha is None:
        print("runner: no baseline commit found; review link falls back to the commit view")

    # Hand the baseline + graded SHAs to the workflow so the post-grade step can
    # open/refresh the Feedback PR without recomputing git state. Emitted
    # unconditionally and early so the step runs even when grading fails
    # (teachers review failing work too). The step is the gate: it opens the PR
    # only when the assignment opted in (feedback-pr) and there's a diff. The
    # base is the accept commit when detected, else the root commit: a root
    # fallback still opens the PR but warns it's UNTRUSTED; only an unresolvable
    # baseline (git unreadable / not a repo) skips.
    fb_base_sha, fb_source = feedback_base_outcome(workspace, baseline_scan)
    append_sha_outputs(github_output, fb_base_sha, sha)
    if fb_source == SOURCE_ROOT:
        print(untrusted_baseline_warning())
    elif fb_base_sha is None:
        # No baseline -> the step skips. Visible annotation (not a plain log) so
        # a skipped Feedback PR is diagnosable. A warning, not an error: opt-in.
        print(no_baseline_warning(fb_source))

    print(
        f"runner: classroom={classroom!r} assignment={assignment!r} "
        f"submission={submission!r} username={username!r}"
    )
    print(f"runner: review link {review_link}")

    finalize = Finalizer(
        workspace=workspace,
        github_output=github_output,
        classroom=classroom,
        assignment=assignment,
        username=username,
        submission=submission,
        commit_link=commit_link,
        release_link=release_link,
        review_link=review_link,
        submitted_by=actor_identity(),
        assignment_type="group" if is_group else "individual",
        submitted_at=submitted_at,
    )

    # Reset the runtime root and clear stale outputs from any prior run.
    runtime_dir = runtime_root()
    if runtime_dir.exists():
        shutil.rmtree(runtime_dir)
    runtime_dir.mkdir(parents=True)
    for f in (workspace / RESULT_FILENAME, workspace / RELEASE_BODY_FILENAME):
        if f.exists():
            f.unlink()

    # Enforce allowed_files before grading so the autograder only sees allowed
    # files. Fails open — if the matcher can't run, returns [] and grading
    # proceeds on the unfiltered tree (see its docstring to flip to fail-closed).
    # The removed list is appended to release-body.md on every exit path below.
    removed_files = enforce_allowed_files(workspace, parse_allowed_files(os.environ.get("ALLOWED_FILES")))

    def _grade() -> int:
        # Pipeline: fetch bundle → resolve entrypoint → exec → validate.
        # Each stage returns an rc when terminal, else None to continue.
        rc = fetch_bundle(
            finalize, pages_base_url=pages_base_url, classroom=classroom,
            assignment=assignment, secret=secret, runtime_dir=runtime_dir,
        )
        if rc is not None:
            return rc

        entrypoint, rc = resolve_entrypoint(
            finalize, pages_base_url=pages_base_url, classroom=classroom,
            assignment=assignment, secret=secret, runtime_dir=runtime_dir,
        )
        if entrypoint is None:
            return rc  # declarative grader ran, vacuous pass, or fetch error

        rc = run_entrypoint(finalize, entrypoint, workspace)
        if rc is not None:
            return rc

        return finalize_result(finalize, is_group=is_group)

    # Append the removed-files note on every exit path (incl. an exception
    # in grading): the files were already deleted before _grade() ran.
    try:
        rc = _grade()
    finally:
        append_removed_files_note(workspace, removed_files)
        # Mirror the FINAL release body to the run's Summary page from here —
        # the one point every exit path (success, error, vacuous pass) passes
        # through, after the removed-files note has been folded in. Doing it
        # here (not in run_declarative / finalize_result / the note) keeps the
        # Summary a faithful mirror of release-body.md on all paths; the error
        # and vacuous-pass paths previously wrote a body no surface mirrored.
        mirror_body_to_step_summary(workspace)

    return _stage_release_assets_and_emit(workspace, github_output, rc)


if __name__ == "__main__":
    sys.exit(main())
`,Me=`name: Classroom50 Autograde Runner

# Reusable workflow called by every student-repo autograde shim.
# For per-assignment runtime config (Python version, apt packages,
# container image), edit assignments.json — see the Autograders
# wiki page. Edit this file only when you need to add a language
# toolchain GitHub doesn't ship a setup-* action for, swap the
# runner-side bootstrap, or change post-grade behavior.

on:
  workflow_call:
    outputs:
      status:
        description: Commit-status state from the autograder (success | failure | error)
        value: \${{ jobs.grade.outputs.status }}
      summary:
        description: Commit-status description line
        value: \${{ jobs.grade.outputs.summary }}

permissions:
  contents: write
  statuses: write
  # pull-requests: write powers the opt-in Feedback PR. The
  # calling shim must grant the same scope — a reusable workflow's
  # effective token is the intersection with the caller's permissions.
  pull-requests: write

# cancel-in-progress: false — every push gets its own release.
# The set-latest job (further down) serializes the latest-pointer
# flip so out-of-order completions can't make older submissions
# look latest.
concurrency:
  group: classroom50-autograde-\${{ github.ref }}
  cancel-in-progress: false

jobs:
  setup:
    runs-on: ubuntu-latest
    outputs:
      # 'true' -> pushed commit is the acceptance commit; skip the tag/read
      # steps and the grade job (no submission tag, no release).
      is-acceptance:  \${{ steps.acceptance.outputs.is-acceptance }}
      # 'true' -> pushed commit is a teacher-side shim retrofit (touches only
      # .github/workflows/autograde.yaml); nothing to grade. Defense-in-depth
      # behind the [skip ci] in the retrofit commit message.
      is-shim-update: \${{ steps.acceptance.outputs.is-shim-update }}
      # 'true' -> the assignment is in tag submission mode but this run was
      # branch-triggered (a stale every-push shim, or a hand-edited one);
      # skip tagging + grading so a plain \`git push\` costs nothing.
      branch-push-suppressed: \${{ steps.read.outputs.branch-push-suppressed }}
      # 'true' -> a pushed tag matched neither submit/* nor any configured
      # submission_tags pattern (stale/hand-edited shim); skip tagging +
      # grading — the tag is not a submission trigger.
      foreign-tag-suppressed: \${{ steps.read.outputs.foreign-tag-suppressed }}
      # The teacher-named milestone tag that triggered this run ('' for a
      # branch or canonical submit/* trigger); surfaces in the Release title.
      trigger-tag: \${{ steps.read.outputs.trigger-tag }}
      submission-tag: \${{ steps.tag.outputs.tag }}
      runs-on:        \${{ steps.read.outputs.runs-on }}
      container:      \${{ steps.read.outputs.container }}
      python:         \${{ steps.read.outputs.python }}
      node:           \${{ steps.read.outputs.node }}
      java:           \${{ steps.read.outputs.java }}
      go:             \${{ steps.read.outputs.go }}
      rust:           \${{ steps.read.outputs.rust }}
      apt:            \${{ steps.read.outputs.apt }}
      base-url:       \${{ steps.read.outputs.base-url }}
      classroom:      \${{ steps.read.outputs.classroom }}
      assignment:     \${{ steps.read.outputs.assignment }}
      secret:         \${{ steps.read.outputs.secret }}
      feedback-pr:    \${{ steps.read.outputs.feedback-pr }}
      mode:           \${{ steps.read.outputs.mode }}
      allowed-files:  \${{ steps.read.outputs.allowed-files }}
      release-assets: \${{ steps.read.outputs.release-assets }}
      # 'true' -> no autograder configured (no declarative tests, no
      # per-assignment bundle, no classroom-default autograder.py), so grade +
      # set-latest skip. Fails OPEN: any probe error emits 'false' and grades.
      no-autograder:  \${{ steps.read.outputs.no-autograder }}
    steps:
      - name: Check out repository
        uses: actions/checkout@v7
        with:
          # Full history -- the acceptance check walks back to the commit
          # that added .classroom50.yaml; a shallow clone hides it.
          fetch-depth: 0
      - name: Set up Python
        uses: actions/setup-python@v7
        with:
          python-version: "3.14"
      - name: Install PyYAML
        run: python3 -m pip install --quiet --user pyyaml
        working-directory: \${{ runner.temp }}

      # === Skip the acceptance commit / a shim-retrofit commit ===
      # The accept commit (adds .classroom50.yaml + the shim, student-
      # authored, so it fires this workflow) has nothing to grade — and
      # neither does a teacher-side submission-mode shim retrofit (touches
      # only .github/workflows/autograde.yaml; its [skip ci] normally keeps
      # this workflow from running at all, this is the backstop). Detect
      # both via the Pages-fetched runner.py and skip the tag/read steps
      # and grade job. Branch trigger only (a tag push is always a
      # submission). Fails open (grades) on a fetch failure.
      - name: Detect acceptance commit
        id: acceptance
        if: github.ref_type == 'branch'
        env:
          REPO_OWNER: \${{ github.repository_owner }}
          GITHUB_SHA: \${{ github.sha }}
        run: |
          set -euo pipefail
          BASE_URL="https://\${REPO_OWNER}.github.io/classroom50"
          RUNNER_SCRIPT="\${RUNNER_TEMP:-/tmp}/classroom50-runner.py"
          if curl -fsSL --max-time 30 --retry 3 --retry-delay 2 --retry-all-errors \\
               "\${BASE_URL}/runner.py" -o "$RUNNER_SCRIPT"; then
            # Fail open on a fetched-but-unrunnable runner.py too (invalid
            # 200 body, syntax error, missing python3): a non-zero detect
            # exit must grade, not fail the setup job and drop a real
            # submission. detect_acceptance_mode already exits 0 for every
            # in-process outcome; this guards the can't-execute case.
            python3 "$RUNNER_SCRIPT" --detect-acceptance || {
              echo "::warning::acceptance detection errored; grading proceeds"
              echo "is-acceptance=false" >> "$GITHUB_OUTPUT"
              echo "is-shim-update=false" >> "$GITHUB_OUTPUT"
            }
          else
            echo "::warning::could not fetch runner.py for acceptance check; grading proceeds"
            echo "is-acceptance=false" >> "$GITHUB_OUTPUT"
            echo "is-shim-update=false" >> "$GITHUB_OUTPUT"
          fi

      # === Acceptance-skip commit status ===
      # A graded run posts a classroom50/autograde commit status (the
      # grade job's \`always()\` step); an acceptance skip otherwise posts
      # nothing, so a client polling the commit-status API can't tell
      # "skipped because acceptance" from "hasn't run yet". Post an
      # explicit success status here to keep that polling channel at
      # parity with the human's check mark (mirrors the Feedback PR
      # status fallback). Best-effort: never fail the job over it.
      - name: Acceptance-skip commit status
        if: steps.acceptance.outputs.is-acceptance == 'true'
        env:
          GH_TOKEN: \${{ github.token }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="success" \\
            -f context="classroom50/autograde" \\
            -f description="acceptance commit — nothing to grade yet; run gh student submit" \\
            -f target_url="$RUN_URL" >/dev/null 2>&1 || true

      # === Read metadata + validate runtime ===
      # \`.classroom50.yaml\` is in the student repo (untrusted) — every
      # field validated against a strict regex; org pinned to the
      # calling repo's owner so a hand-edited file can't redirect to
      # an attacker-hosted Pages site. Allow-lists mirror
      # cli/gh-teacher/runtime.go (runtime block) and
      # cli/gh-teacher/tests.go (declarative tests block).
      - name: Read assignment config
        id: read
        if: >-
          steps.acceptance.outputs.is-acceptance != 'true' &&
          steps.acceptance.outputs.is-shim-update != 'true'
        env:
          REF: \${{ github.ref }}
          REF_NAME: \${{ github.ref_name }}
          REPO_OWNER: \${{ github.repository_owner }}
        shell: python3 {0}
        run: |
          import json, os, re, sys, time
          import urllib.error, urllib.request
          import yaml

          _SLUG = re.compile(r"^[a-z0-9][a-z0-9-]{1,38}$")
          _SECRET = re.compile(r"^[a-z0-9]{4,64}$")
          _LANG = re.compile(r"^[A-Za-z0-9._+-]{1,32}$")
          _APT  = re.compile(r"^[a-z0-9][a-z0-9.+-]{0,63}$")
          _IMAGE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._:/@+-]{0,255}$")
          _USER = re.compile(r"^[A-Za-z0-9_][A-Za-z0-9_.-]{0,31}(?::[A-Za-z0-9_][A-Za-z0-9_.-]{0,31})?$")
          _RUNS_ON_LABEL = re.compile(r"^[A-Za-z0-9][A-Za-z0-9._-]{0,63}$")
          _DEFAULT_RUNS_ON = "ubuntu-latest"

          def fail(msg):
              print(f"::error::{msg}", file=sys.stderr)
              sys.exit(1)

          def emit(key, value):
              with open(os.environ["GITHUB_OUTPUT"], "a") as fh:
                  if "\\n" in str(value):
                      fail(f"output {key!r} would inject newline: {value!r}")
                  fh.write(f"{key}={value}\\n")

          try:
              with open(".classroom50.yaml") as fh:
                  cfg = yaml.safe_load(fh) or {}
          except FileNotFoundError:
              fail(".classroom50.yaml not found — was this repo created by \`gh student accept\`?")
          except yaml.YAMLError as exc:
              fail(f".classroom50.yaml is malformed YAML: {exc}")

          def safe(value, label, pattern):
              if not isinstance(value, str) or not pattern.match(value):
                  fail(f".classroom50.yaml field {label!r} has invalid value {value!r} (must match {pattern.pattern!r}) — re-run \`gh student accept\`")
              return value

          classroom  = safe((cfg.get("classroom") or "").strip(),  "classroom",  _SLUG)
          assignment = safe((cfg.get("assignment") or "").strip(), "assignment", _SLUG)

          # Optional capability-URL secret. Present -> resources at
          # <classroom>/<secret>/; absent -> plain path. Validated against the
          # same strict regex as the other fields since it composes into a URL.
          secret = (cfg.get("secret") or "").strip()
          if secret and not _SECRET.match(secret):
              fail(f".classroom50.yaml field 'secret' has invalid value {secret!r} (must match {_SECRET.pattern!r}) — re-run \`gh student accept\`")

          owner = os.environ["REPO_OWNER"]
          base_url = f"https://{owner}.github.io/classroom50"

          def get(url):
              for attempt in range(3):
                  try:
                      req = urllib.request.Request(url, headers={"User-Agent": "classroom50-autograde-runner"})
                      return urllib.request.urlopen(req, timeout=30)
                  except urllib.error.HTTPError as exc:
                      if exc.code >= 500 and attempt < 2:
                          time.sleep(2 ** attempt); continue
                      raise
                  except urllib.error.URLError:
                      if attempt < 2:
                          time.sleep(2 ** attempt); continue
                      raise

          # Secret-aware classroom path segment, mirroring runner.py's
          # _classroom_segment and publish-pages.yaml's dest_prefix. Defined
          # locally because this setup step runs before runner.py is fetched;
          # keep it byte-identical to those copies (pinned by
          # cli/shared/contract/contract_test.go).
          def classroom_segment(classroom, secret):
              return f"{classroom}/{secret}" if secret else classroom

          manifest_url = f"{base_url}/{classroom_segment(classroom, secret)}/assignments.json"
          try:
              with get(manifest_url) as resp:
                  manifest = json.load(resp)
          except urllib.error.HTTPError as exc:
              fail(f"GET {manifest_url}: HTTP {exc.code} — ask your teacher to confirm publish-pages.yaml has run")
          except urllib.error.URLError as exc:
              fail(f"GET {manifest_url}: {exc.reason} — the Pages site may not be deployed yet")

          if not isinstance(manifest, dict) or manifest.get("schema") != "classroom50/assignments/v1":
              fail(f"{manifest_url}: schema = {manifest.get('schema')!r}, want 'classroom50/assignments/v1'")

          entry = next(
              (e for e in manifest.get("assignments") or [] if e.get("slug") == assignment),
              None,
          )
          if entry is None:
              fail(f"assignment {assignment!r} not registered in {manifest_url} — ask your teacher to run \`gh teacher assignment add\`")

          # empty_repo assignments never autograde — same predicate as
          # collect_scores.py / regrade_repos.py (is_empty_repo: strictly the
          # boolean true, matching Go's bool decode and TS's === true),
          # enforced here too because student repos are student-writable: a
          # hand-added workflow calling this runner must not re-enter the
          # grading pipeline (releases, submit tags) that collection skips.
          if entry.get("empty_repo") is True:
              fail(f"assignment {assignment!r} is an empty-repository assignment — autograding is disabled for it")

          # no_autograder assignments (templated, teacher-supplied CI) commit no
          # shim, so the runner should never be invoked for one. Enforced here
          # for the same student-writable reason as empty_repo: a hand-added
          # workflow must not re-enter the grading pipeline collection skips.
          # Strict boolean, byte-identical to is_no_autograder in
          # collect_scores.py / regrade_repos.py.
          if entry.get("no_autograder") is True:
              fail(f"assignment {assignment!r} is a no-autograder assignment (teacher-supplied CI) — built-in autograding is disabled for it")

          # === Re-validate the declarative tests block ===
          # Mirrors cli/gh-teacher/tests.go (write-time validator) so a
          # hand-edited assignments.json fails here with a clear
          # setup-time error instead of mid-grade. The specs never touch
          # workflow YAML — they reach the grade job as Pages-bundle
          # data — and nothing from \`tests\` is emitted to job outputs.
          tests = entry.get("tests")
          if tests is not None:
              _TEST_TYPES = {"io", "run", "python"}
              _COMPARISONS = {"exact", "included", "regex"}
              _TEST_KEYS = {"name", "type", "setup", "run", "input", "input-file",
                            "expected", "expected-file", "comparison", "timeout",
                            "exit-code", "points"}
              _IO_ONLY_KEYS = ("input", "input-file", "expected", "expected-file", "comparison")
              if not isinstance(tests, list):
                  fail(f"entry {assignment!r}: tests must be an array")
              if len(tests) > 100:
                  fail(f"entry {assignment!r}: too many tests ({len(tests)} exceeds the cap of 100)")
              seen_names = set()
              for i, t in enumerate(tests):
                  where = f"entry {assignment!r}: tests[{i}]"
                  if not isinstance(t, dict):
                      fail(f"{where} is not an object")
                  extras = sorted(set(t) - _TEST_KEYS)
                  if extras:
                      fail(f"{where} has unsupported keys: {extras}")
                  name = t.get("name")
                  if not isinstance(name, str) or not name:
                      fail(f"{where}.name must be a non-empty string")
                  # Byte length, mirroring Go's len() on the UTF-8 string.
                  if len(name.encode("utf-8")) > 100:
                      fail(f"{where}.name exceeds 100 bytes")
                  if any(ord(c) < 0x20 or ord(c) == 0x7F for c in name):
                      fail(f"{where}.name must not contain control characters")
                  if name in seen_names:
                      fail(f"{where}: duplicate test name {name!r}")
                  seen_names.add(name)
                  ttype = t.get("type")
                  if ttype not in _TEST_TYPES:
                      fail(f"{where}.type {ttype!r} must be one of {sorted(_TEST_TYPES)}")
                  if not isinstance(t.get("run"), str) or not t.get("run"):
                      fail(f"{where}.run must be a non-empty string")
                  for key in ("setup",) + _IO_ONLY_KEYS:
                      v = t.get(key)
                      if v is not None and not isinstance(v, str):
                          fail(f"{where}.{key} must be a string")
                  timeout = t.get("timeout", 0)
                  if isinstance(timeout, bool) or not isinstance(timeout, int) or (timeout != 0 and not (1 <= timeout <= 600)):
                      fail(f"{where}.timeout must be an integer between 1 and 600 seconds (0/omitted = default)")
                  points = t.get("points", 0)
                  if isinstance(points, bool) or not isinstance(points, int) or not (0 <= points <= 1000):
                      fail(f"{where}.points must be an integer between 0 and 1000")
                  exit_code = t.get("exit-code")
                  if ttype == "io":
                      comparison = t.get("comparison")
                      if comparison not in _COMPARISONS:
                          fail(f"{where}.comparison {comparison!r} must be one of {sorted(_COMPARISONS)} for an io test")
                      if t.get("input") and t.get("input-file"):
                          fail(f"{where}: input and input-file are mutually exclusive")
                      if t.get("expected") and t.get("expected-file"):
                          fail(f"{where}: expected and expected-file are mutually exclusive")
                      if comparison != "exact" and not t.get("expected") and not t.get("expected-file"):
                          fail(f"{where}: an io test with comparison {comparison!r} needs a non-empty expected or expected-file (an empty expected matches everything)")
                      if exit_code is not None:
                          fail(f"{where}: exit-code is not valid for an io test (use type 'run')")
                  else:
                      for key in _IO_ONLY_KEYS:
                          if t.get(key):
                              fail(f"{where}.{key} is only valid for an io test, not a {ttype} test")
                      if exit_code is not None:
                          if ttype != "run":
                              fail(f"{where}: exit-code is only valid for a run test, not a {ttype} test")
                          if isinstance(exit_code, bool) or not isinstance(exit_code, int) or not (0 <= exit_code <= 255):
                              fail(f"{where}.exit-code must be an integer between 0 and 255")

          runtime = entry.get("runtime") or {}
          if not isinstance(runtime, dict):
              fail(f"entry {assignment!r} has malformed runtime block")

          # Allow-list mirrors Go's RuntimeRef + DisallowUnknownFields.
          # A hand-edited assignments.json with extra keys (e.g., an
          # \`options:\` smuggled at runtime level) would otherwise pass
          # this validator silently while the CLI rejects it at write.
          _RUNTIME_KEYS = {"runs-on", "container", "python", "node", "java", "go", "rust", "apt"}
          extras = set(runtime) - _RUNTIME_KEYS
          if extras:
              fail(f"runtime has unsupported keys: {sorted(extras)}")

          container = runtime.get("container")
          raw_runs_on = runtime.get("runs-on")
          python    = runtime.get("python")   or ""
          node      = runtime.get("node")     or ""
          java      = runtime.get("java")     or ""
          go        = runtime.get("go")       or ""
          rust      = runtime.get("rust")     or ""
          apt       = runtime.get("apt")      or []

          # runs-on mirrors GitHub Actions: a single label or an array
          # (["self-hosted", "gpu"]), normalized to a list. No value
          # allow-list (mirror Go's ValidateRunsOn) — only injection-
          # checked. The degenerate "" and [] forms are rejected (mirror
          # Go's UnmarshalJSON + the schema) so only an OMITTED runs-on
          # means "use the default".
          if raw_runs_on is None:
              runs_on_labels = []
          elif isinstance(raw_runs_on, str):
              if raw_runs_on == "":
                  fail("runtime.runs-on must not be an empty string; omit the field to use the default (ubuntu-latest)")
              runs_on_labels = [raw_runs_on]
          elif isinstance(raw_runs_on, list):
              if not raw_runs_on:
                  fail("runtime.runs-on must not be an empty array; omit the field to use the default (ubuntu-latest)")
              runs_on_labels = raw_runs_on
          else:
              fail(f"runtime.runs-on must be a label string or an array of label strings, got {raw_runs_on!r}")
          if len(runs_on_labels) > 10:
              fail(f"runtime.runs-on has {len(runs_on_labels)} labels (max 10)")
          for i, lbl in enumerate(runs_on_labels):
              if not isinstance(lbl, str) or not _RUNS_ON_LABEL.match(lbl):
                  fail(f"runtime.runs-on[{i}] {lbl!r} must match {_RUNS_ON_LABEL.pattern}")

          if container is not None:
              if not isinstance(container, dict):
                  fail("runtime.container must be an object")
              # Same allow-list discipline at the container level —
              # closes the "smuggle --privileged via container.options"
              # vector. Mirror Go's containerSpec exactly. Only \`image\`
              # and \`user\` are accepted; private registries can't be
              # used for autograding (no safe way to deliver a pull
              # secret to a student repo), so images must be public.
              _CONTAINER_KEYS = {"image", "user"}
              c_extras = set(container) - _CONTAINER_KEYS
              if c_extras:
                  fail(f"runtime.container has unsupported keys: {sorted(c_extras)}")
              image = container.get("image") or ""
              if not image:
                  fail("runtime.container.image must not be empty")
              if not isinstance(image, str) or not _IMAGE.match(image):
                  fail(f"runtime.container.image {image!r} must match {_IMAGE.pattern}")
              if apt:
                  fail("runtime.apt is not allowed when runtime.container is set")
              # Containers run on Ubuntu only — reject a recognized
              # macOS/Windows label; custom/self-hosted labels pass
              # (the teacher owns OS matching). Mirrors Go's
              # isNonUbuntuHostedLabel.
              for lbl in runs_on_labels:
                  if lbl.startswith("macos-") or lbl.startswith("windows-"):
                      fail(f"runtime.runs-on {lbl!r} invalid with container: GitHub Actions runs containers on Ubuntu hosts only")
              # Translate runtime.container.user to GitHub Actions'
              # container.options: --user <value>. Actions doesn't
              # accept container.user directly, but a non-root container
              # (cs50/cli, most maintained images) hits EACCES when
              # actions/checkout writes to /__w/_temp/. \`user: root\`
              # (or \`0\`, or \`0:0\`) is the standard fix.
              user = container.get("user")
              if user is not None and (not isinstance(user, str) or not _USER.match(user)):
                  fail(f"runtime.container.user {user!r} must match {_USER.pattern}")
              # Build \`emitted\` from validated fields only — prevents
              # any future schema-skew (e.g., a new GHA container key
              # added by Actions) from flowing through unchecked.
              emitted = {"image": image}
              if user is not None:
                  emitted["options"] = f"--user {user}"
              if not runs_on_labels:
                  runs_on_labels = [_DEFAULT_RUNS_ON]
              container_json = json.dumps(emitted)
          else:
              if not runs_on_labels:
                  runs_on_labels = [_DEFAULT_RUNS_ON]
              container_json = "null"
              # Default the host path to a recent Python so teachers
              # don't need to set it explicitly for every assignment.
              # Container path leaves python alone — the image owns
              # the toolchain. (runner.py itself works on any 3.x
              # via the legacy tar-extraction fallback.)
              if not python:
                  python = "3.14"

          # Emit runs-on as a JSON array consumed by the grade job via
          # fromJSON, so a single hosted label and a multi-label
          # self-hosted target share one code path.
          runs_on_json = json.dumps(runs_on_labels)

          for label, value in [("python", python), ("node", node), ("java", java), ("go", go), ("rust", rust)]:
              if value and (not isinstance(value, str) or not _LANG.match(value)):
                  fail(f"runtime.{label} {value!r} must match {_LANG.pattern}")

          if not isinstance(apt, list):
              fail("runtime.apt must be an array of strings")
          for i, pkg in enumerate(apt):
              if not isinstance(pkg, str) or not _APT.match(pkg):
                  fail(f"runtime.apt[{i}] {pkg!r} must match {_APT.pattern}")
          apt_str = " ".join(apt)

          # === Feedback PR opt-in ===
          # Mirror Go's bool \`feedback_pr\` field. Re-validated here (like
          # the tests/runtime blocks) so a hand-edited manifest fails at
          # setup with a clear error. Emitted as "true"/"false" so the
          # grade job's post-grade step knows whether to open the PR.
          feedback_pr = entry.get("feedback_pr", False)
          if not isinstance(feedback_pr, bool):
              fail(f"entry {assignment!r}: feedback_pr {feedback_pr!r} must be a boolean")

          # Assignment mode (individual | group), normalized; drives the
          # Feedback PR label so a teacher can tell them apart at a glance.
          mode = (entry.get("mode") or "individual").strip().lower()
          if mode not in ("individual", "group"):
              fail(f"entry {assignment!r}: mode {mode!r} must be 'individual' or 'group'")

          # === Allowed-files allowlist ===
          # Re-validate the hand-editable manifest field and emit it as a
          # JSON array for runner.py to enforce.
          allowed_files = entry.get("allowed_files", [])
          if not isinstance(allowed_files, list):
              fail(f"entry {assignment!r}: allowed_files must be an array")
          for i, pat in enumerate(allowed_files):
              if not isinstance(pat, str) or not pat.strip():
                  fail(f"entry {assignment!r}: allowed_files[{i}] {pat!r} must be a non-empty string")
              if "\\x00" in pat or "\\n" in pat:
                  fail(f"entry {assignment!r}: allowed_files[{i}] {pat!r} must not contain NUL or newline")
          allowed_files_json = json.dumps(allowed_files)

          # === Release assets ===
          # Re-validate the hand-editable exact release asset paths and emit
          # compact ordered JSON. Mirrors ValidateReleaseAssets (Go).
          release_assets = entry.get("release_assets", [])
          if not isinstance(release_assets, list):
              fail(f"entry {assignment!r}: release_assets must be an array")
          if len(release_assets) > 50:
              fail(f"entry {assignment!r}: release_assets has {len(release_assets)} paths (max 50)")
          _RELEASE_BASENAME = re.compile(
              r"^[A-Za-z0-9_-](?:[A-Za-z0-9._-]{0,253}[A-Za-z0-9_-])?$",
              re.ASCII,
          )
          _ASCII_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
          _ASCII_LOWER = "abcdefghijklmnopqrstuvwxyz"
          _ASCII_FOLD = str.maketrans(_ASCII_UPPER, _ASCII_LOWER)
          seen_paths = set()
          seen_basenames = set()
          release_assets_path_bytes = 0
          for i, configured_path in enumerate(release_assets):
              where = f"entry {assignment!r}: release_assets[{i}]"
              if not isinstance(configured_path, str) or not configured_path.strip():
                  fail(f"{where} must be a non-empty string")
              if any(0xD800 <= ord(char) <= 0xDFFF for char in configured_path):
                  fail(f"{where} must not contain Unicode surrogates")
              release_assets_path_bytes += len(configured_path.encode("utf-8"))
              if release_assets_path_bytes > 8192:
                  fail(f"entry {assignment!r}: release_assets paths exceed 8192 UTF-8 bytes")
              if configured_path.startswith("/") or re.match(r"^[A-Za-z]:", configured_path, re.ASCII):
                  fail(f"{where} must be relative")
              if "\\\\" in configured_path:
                  fail(f"{where} must use '/' separators")
              if any(ord(char) < 0x20 or 0x7F <= ord(char) <= 0x9F for char in configured_path):
                  fail(f"{where} must not contain control characters")
              segments = configured_path.split("/")
              if any(segment in ("", ".", "..") for segment in segments):
                  fail(f"{where} has an invalid path segment")
              if segments[0].translate(_ASCII_FOLD) == ".git":
                  fail(f"{where} must not select the root .git tree")
              basename = segments[-1]
              folded_basename = basename.translate(_ASCII_FOLD)
              if not _RELEASE_BASENAME.fullmatch(basename) or ".." in basename:
                  fail(f"{where} basename {basename!r} is not Release-safe")
              if folded_basename in ("result.json", "release-body.md"):
                  fail(f"{where} basename {basename!r} is reserved")
              if configured_path in seen_paths:
                  fail(f"{where} duplicates path {configured_path!r}")
              if basename in seen_basenames:
                  fail(f"{where} duplicates basename {basename!r}")
              seen_paths.add(configured_path)
              seen_basenames.add(basename)
          release_assets_json = json.dumps(
              release_assets, separators=(",", ":"), ensure_ascii=False
          )

          # === Submission mode ===
          # Mirror Go's ValidateSubmissionMode: absent/empty means every-push;
          # a non-empty value must be one of the enum (contract.SubmissionModes,
          # by-value copy — keep in lockstep). In tag mode a BRANCH-triggered
          # run is suppressed (no tag, no grade): the shim shouldn't have fired
          # at all, so this only happens with a stale every-push shim (mode
          # changed, retrofit pending/failed) or a hand-edited one. Suppressing
          # here keeps a plain \`git push\` from grading — the cost lever the
          # mode exists for — while a submission-tag push always grades.
          submission_mode = entry.get("submission_mode") or "every-push"
          if submission_mode not in ("every-push", "tag"):
              fail(f"entry {assignment!r}: submission_mode {submission_mode!r} must be 'every-push' or 'tag'")
          is_branch_run = not os.environ.get("REF", "").startswith("refs/tags/")
          branch_push_suppressed = submission_mode == "tag" and is_branch_run

          # === Submission tags (teacher-named milestone patterns) ===
          # Validate like allowed_files (opaque pattern strings, charset
          # mirrors the schema/Go/web validators), then classify a TAG run:
          #   - submit/* tag        -> the canonical namespace, grades (reuse)
          #   - matches a pattern   -> milestone submission; grades, and the
          #                            tag step mints/reuses the canonical
          #                            submit/* tag at this commit (the RECORD
          #                            stays immutable one-release-per-
          #                            submission; the trigger tag is only the
          #                            trigger)
          #   - matches nothing     -> not a submission trigger; suppress
          #                            gracefully (stale/hand-edited shim —
          #                            same defense-in-depth rationale as the
          #                            stale-shim branch suppression; the shim
          #                            normally pre-filters via on.push.tags)
          # matches_submission_tag is a by-value copy of Go's
          # contract.MatchesSubmissionTag / the web matchesSubmissionTag,
          # pinned to identical output by the shared golden fixture
          # cli/shared/testdata/submission_tag_match_cases.json — keep in
          # lockstep.
          submission_tags = entry.get("submission_tags") or []
          if not isinstance(submission_tags, list):
              fail(f"entry {assignment!r}: submission_tags must be an array")
          _TAG_PATTERN = re.compile(r"^[A-Za-z0-9._/*?+\\[\\]-]+$")
          # Stacked/leading quantifiers (\`v*+\`, \`+lead\`) compile as POSSESSIVE
          # quantifiers in Python but are compile errors in Go/JS — the one
          # construct where the four matcher copies would diverge, so reject
          # like the write-side validators (contract.stackedQuantifierRE).
          _STACKED_QUANTIFIER = re.compile(r"^[?+]|[*?+]\\+")
          for pattern in submission_tags:
              if not isinstance(pattern, str) or not _TAG_PATTERN.fullmatch(pattern) or _STACKED_QUANTIFIER.search(pattern):
                  fail(f"entry {assignment!r}: invalid submission_tags pattern {pattern!r}")

          def _compile_tag_pattern(pattern):
              out = ["^"]
              i = 0
              while i < len(pattern):
                  ch = pattern[i]
                  if ch == "*":
                      if i + 1 < len(pattern) and pattern[i + 1] == "*":
                          out.append(".*")
                          i += 1
                      else:
                          out.append("[^/]*")
                  elif ch in ("?", "+"):
                      out.append(ch)
                  elif ch == "[":
                      close = pattern.find("]", i + 1)
                      if close != -1:
                          out.append(pattern[i : close + 1])
                          i = close
                      else:
                          out.append(re.escape(ch))
                  else:
                      out.append(re.escape(ch))
                  i += 1
              out.append("$")
              try:
                  return re.compile("".join(out))
              except re.error:
                  return None

          def matches_submission_tag(patterns, tag):
              for pattern in patterns:
                  if not _TAG_PATTERN.fullmatch(pattern) or _STACKED_QUANTIFIER.search(pattern):
                      continue  # fail closed like the Go/JS charset+compile guards
                  compiled = _compile_tag_pattern(pattern)
                  if compiled is not None and compiled.fullmatch(tag) is not None:
                      return True
              return False

          # REF_NAME with a defensive fallback derived from REF (both are
          # set in a real Actions run; the fallback keeps the classification
          # sound if the env plumbing ever drops one).
          ref_name = os.environ.get("REF_NAME") or os.environ.get("REF", "").removeprefix("refs/tags/")
          trigger_tag = ""
          foreign_tag_suppressed = False
          if not is_branch_run:
              if ref_name.startswith("submit/"):
                  pass  # canonical namespace; the tag step reuses it
              elif matches_submission_tag(submission_tags, ref_name):
                  trigger_tag = ref_name
              else:
                  foreign_tag_suppressed = True

          # === No-autograder detection ===
          # Skip grade + set-latest when nothing is configured to grade,
          # inverting resolve_entrypoint's fall-through: no declarative tests
          # AND no per-assignment bundle AND no classroom-default autograder.py.
          # runner.py's no_autograder() stays the fail-open backstop. FAIL OPEN
          # here too — a probe that can't prove absence must grade — so any
          # non-404 / network error falls open to grading.
          # The bundle + classroom-default URL shapes mirror runner.py's
          # bundle_url / classroom_default_autograder_url (pinned by
          # contract_test.go); segment left un-quoted to match classroom_segment
          # (both parts are regex-validated upstream).
          # Non-retrying: the outcome is only ever acted on for a confirmed 404,
          # so a transient 5xx falls open to grading anyway — no point spending
          # get()'s retry ladder on a result we'd discard.
          def probe_absent(url):
              try:
                  req = urllib.request.Request(url, headers={"User-Agent": "classroom50-autograde-runner"})
                  with urllib.request.urlopen(req, timeout=30) as resp:
                      resp.read(1)
                  return False
              except urllib.error.HTTPError as exc:
                  if exc.code == 404:
                      return True
                  print(f"::warning::autograder probe GET {url}: HTTP {exc.code}; grading proceeds")
                  return False
              except urllib.error.URLError as exc:
                  print(f"::warning::autograder probe GET {url}: {exc.reason}; grading proceeds")
                  return False

          has_tests = isinstance(tests, list) and len(tests) > 0
          no_autograder = False
          if not has_tests:
              seg = classroom_segment(classroom, secret)
              bundle = f"{base_url}/{seg}/autograders/{assignment}.tar.gz"
              default_py = f"{base_url}/{seg}/autograder.py"
              no_autograder = probe_absent(bundle) and probe_absent(default_py)

          emit("submission-mode", submission_mode)
          emit("branch-push-suppressed", "true" if branch_push_suppressed else "false")
          emit("foreign-tag-suppressed", "true" if foreign_tag_suppressed else "false")
          emit("trigger-tag", trigger_tag)
          emit("runs-on", runs_on_json)
          emit("container", container_json)
          emit("python", python)
          emit("node", node)
          emit("java", java)
          emit("go", go)
          emit("rust", rust)
          emit("apt", apt_str)
          emit("base-url", base_url)
          emit("classroom", classroom)
          emit("assignment", assignment)
          emit("secret", secret)
          emit("feedback-pr", "true" if feedback_pr else "false")
          emit("mode", mode)
          emit("allowed-files", allowed_files_json)
          emit("release-assets", release_assets_json)
          emit("no-autograder", "true" if no_autograder else "false")

      # === Tag the submission ===
      # Branch trigger: create submit/<UTC-timestamp>-<short-sha> at
      # the pushed SHA. Canonical submit/* tag trigger: reuse the pushed
      # tag. Milestone-tag trigger (a teacher-named submission_tags
      # pattern): mint/reuse the canonical tag exactly like a branch run —
      # the milestone tag TRIGGERS grading but the immutable submit/* tag
      # IS the record (a reusable tag like \`phase1\` moves between commits;
      # parking the release on it would overwrite prior submissions).
      # Tags pushed with github.token don't fire workflows
      # (anti-recursion). Runs AFTER the read step so a suppressed run
      # (tag-mode branch push, or a tag matching no submission pattern)
      # never mints a tag for a run that won't grade.
      - name: Tag submission
        id: tag
        if: >-
          steps.acceptance.outputs.is-acceptance != 'true' &&
          steps.acceptance.outputs.is-shim-update != 'true' &&
          steps.read.outputs.branch-push-suppressed != 'true' &&
          steps.read.outputs.foreign-tag-suppressed != 'true'
        env:
          GH_TOKEN: \${{ github.token }}
          REF: \${{ github.ref }}
          REF_NAME: \${{ github.ref_name }}
          SHA: \${{ github.sha }}
          TRIGGER_TAG: \${{ steps.read.outputs.trigger-tag }}
        run: |
          set -euo pipefail
          # A canonical submit/* tag push IS the record — reuse it verbatim.
          # A milestone-tag push (TRIGGER_TAG set) falls through to the
          # mint/reuse path below, same as a branch push. Any other tag
          # was suppressed by the read step (foreign-tag-suppressed), so
          # reaching here with one is a wiring bug — fail loudly.
          if [[ "$REF" == refs/tags/* && -z "$TRIGGER_TAG" ]]; then
            if [[ "$REF_NAME" != submit/* ]]; then
              echo "::error::tag $REF_NAME reached the tag step without matching submit/* or a submission pattern" >&2
              exit 1
            fi
            echo "tag=$REF_NAME" >> "$GITHUB_OUTPUT"
            exit 0
          fi
          # Idempotency: if a submit/* tag already points at this SHA
          # (workflow re-run of the same commit, a submit client that
          # already tagged it, or a re-pushed milestone tag), reuse it
          # instead of racing on a fresh timestamp. \`--refs\` filters out
          # the \`refs/tags/X^{}\` peeled-ref rows that annotated tags emit
          # — without it, awk could capture e.g., \`submit/foo^{}\` and
          # produce an invalid pseudo-tag.
          EXISTING=$(git ls-remote --refs --tags origin \\
                       | awk -v sha="$SHA" '$1 == sha && $2 ~ /^refs\\/tags\\/submit\\// { sub("refs/tags/", "", $2); print $2; exit }')
          if [[ -n "$EXISTING" ]]; then
            echo "tag=$EXISTING" >> "$GITHUB_OUTPUT"
            exit 0
          fi
          # Short-SHA suffix prevents collisions when two pushes land
          # in the same UTC second.
          TAG="submit/$(date -u +%Y-%m-%dT%H-%M-%SZ)-$(echo "$SHA" | cut -c1-7)"
          git config user.name  "classroom50-bot"
          git config user.email "bot@classroom50"
          git tag "$TAG" "$SHA"
          git push origin "refs/tags/$TAG"
          echo "tag=$TAG" >> "$GITHUB_OUTPUT"

      # === Foreign-tag commit status ===
      # A pushed tag matched neither submit/* nor any configured
      # submission_tags pattern (stale/hand-edited shim — the on.push.tags
      # filter normally pre-empts this run entirely). Nothing tags or
      # grades; say why. DISTINCT CONTEXT (classroom50/autograde-skipped),
      # unlike the nothing-to-grade skips above: here the student's real
      # work exists but was NOT graded, and a green classroom50/autograde
      # would read as "graded successfully" to both humans and any client
      # polling that context. The main context stays absent — accurate,
      # since no grade will ever appear for this commit. Best-effort;
      # never fails the job.
      - name: Foreign-tag commit status
        if: steps.read.outputs.foreign-tag-suppressed == 'true'
        env:
          GH_TOKEN: \${{ github.token }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="success" \\
            -f context="classroom50/autograde-skipped" \\
            -f description="tag is not a submission trigger — not graded" \\
            -f target_url="$RUN_URL" >/dev/null 2>&1 || true

      # === Suppressed-push commit status ===
      # A tag-mode assignment got a branch push (stale every-push shim or a
      # hand-edited trigger): nothing tags or grades. Same DISTINCT CONTEXT
      # rationale as the foreign-tag status: ungraded work must never show
      # green under classroom50/autograde. state stays success (a red X on
      # every work-in-progress push would teach students to ignore
      # failures); the separate context is what keeps graded and not-graded
      # machine-distinguishable. Best-effort; never fails the job.
      - name: Suppressed-push commit status
        if: steps.read.outputs.branch-push-suppressed == 'true'
        env:
          GH_TOKEN: \${{ github.token }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="success" \\
            -f context="classroom50/autograde-skipped" \\
            -f description="tag-mode assignment — push not graded; run gh student submit" \\
            -f target_url="$RUN_URL" >/dev/null 2>&1 || true

      # === Shim-update commit status ===
      # Parallel to the acceptance-skip status, for the [skip ci] backstop
      # path: a shim-retrofit commit that still fired the workflow skips
      # everything; say so explicitly. Best-effort; never fails the job.
      - name: Shim-update commit status
        if: steps.acceptance.outputs.is-shim-update == 'true'
        env:
          GH_TOKEN: \${{ github.token }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="success" \\
            -f context="classroom50/autograde" \\
            -f description="autograder trigger updated — nothing to grade" \\
            -f target_url="$RUN_URL" >/dev/null 2>&1 || true

  grade:
    needs: setup
    # Skip the acceptance commit, a shim-retrofit commit, a suppressed
    # tag-mode branch push, and a suppressed foreign tag (set-latest needs
    # grade, so it skips too). The no-autograder case still runs so the
    # submission is RECORDED: runner.py synthesizes a vacuous-pass (0/0
    # success) result and the Release step publishes it, keeping the
    # submission visible on the teacher dashboard (which reads submit/*
    # releases). Language-toolchain setup is separately gated off
    # no-autograder below, so this cheap path spends no minutes installing
    # toolchains it won't use.
    if: >-
      needs.setup.outputs.is-acceptance != 'true' &&
      needs.setup.outputs.is-shim-update != 'true' &&
      needs.setup.outputs.branch-push-suppressed != 'true' &&
      needs.setup.outputs.foreign-tag-suppressed != 'true'
    runs-on:   \${{ fromJSON(needs.setup.outputs.runs-on) }}
    container: \${{ fromJSON(needs.setup.outputs.container) }}
    timeout-minutes: 15
    # Pin bash explicitly. GitHub-hosted runners default run: steps
    # to bash, but inside a container Actions falls back to \`sh -e\`
    # — and our run: blocks use \`set -euo pipefail\` (bash-only).
    defaults:
      run:
        shell: bash
    outputs:
      status:  \${{ steps.autograde.outputs.status }}
      summary: \${{ steps.autograde.outputs.summary }}
    env:
      PAGES_BASE_URL: \${{ needs.setup.outputs.base-url }}
      CLASSROOM:      \${{ needs.setup.outputs.classroom }}
      ASSIGNMENT:     \${{ needs.setup.outputs.assignment }}
      SUBMISSION_TAG: \${{ needs.setup.outputs.submission-tag }}
      # Optional capability-URL secret from .classroom50.yaml (via setup).
      # runner.py inserts it into the fetch URLs; empty = plain path.
      SECRET:         \${{ needs.setup.outputs.secret }}
      # Assignment mode (individual | group) from assignments.json, so
      # runner.py validates a group autograder's multi-username result.json
      # instead of rejecting it. Defaults to the stricter individual rule
      # when absent.
      MODE:           \${{ needs.setup.outputs.mode }}
      # allowed_files patterns (JSON array) from assignments.json;
      # runner.py removes disallowed files before grading. "[]" = allow all.
      ALLOWED_FILES:  \${{ needs.setup.outputs.allowed-files }}
      # release_assets paths (JSON array) from assignments.json; runner.py
      # stages the exact regular files post-grading for the Release step below.
      # "[]" = none.
      RELEASE_ASSETS: \${{ needs.setup.outputs.release-assets }}
    steps:
      - name: Check out submission
        uses: actions/checkout@v7
        with:
          ref: \${{ github.sha }}
          # Full history -- runner.py needs the student's baseline
          # commit for the full-diff review link.
          fetch-depth: 0
          persist-credentials: false

      # === Language toolchains (driven by \`runtime:\` in assignments.json) ===
      # All gated on a hosted runner: \`runner.environment\` is resolved on the
      # actual runner at step time and is 'self-hosted' | 'github-hosted'. A
      # self-hosted runner supplies its own prebuilt toolchains (and their
      # dependencies), so layering setup-* / apt on top would shadow the
      # runner's environment and break autograders that import preinstalled
      # packages (see issue #369). Keyed on the runner itself — not the
      # \`runs-on\` label — so it also covers self-hosted runners registered
      # with --no-default-labels or selected by a runner group.
      #
      # Also gated off no-autograder: when nothing is configured to grade, the
      # job still runs to RECORD the submission (runner.py's vacuous-pass), but
      # it needs only system python3 — so skip every toolchain install and spend
      # no minutes provisioning a toolchain the recording path won't use.
      - name: Set up Python
        if: needs.setup.outputs.python != '' && needs.setup.outputs.no-autograder != 'true' && runner.environment != 'self-hosted'
        uses: actions/setup-python@v7
        with:
          python-version: \${{ needs.setup.outputs.python }}

      - name: Set up Node
        if: needs.setup.outputs.node != '' && needs.setup.outputs.no-autograder != 'true' && runner.environment != 'self-hosted'
        uses: actions/setup-node@v7
        with:
          node-version: \${{ needs.setup.outputs.node }}

      - name: Set up Java
        if: needs.setup.outputs.java != '' && needs.setup.outputs.no-autograder != 'true' && runner.environment != 'self-hosted'
        uses: actions/setup-java@v5
        with:
          distribution: temurin
          java-version: \${{ needs.setup.outputs.java }}

      - name: Set up Go
        if: needs.setup.outputs.go != '' && needs.setup.outputs.no-autograder != 'true' && runner.environment != 'self-hosted'
        uses: actions/setup-go@v7
        with:
          go-version: \${{ needs.setup.outputs.go }}

      # No first-party setup-rust; dtolnay/rust-toolchain is the de-facto
      # standard. Pinned to @master with an explicit \`toolchain:\` input
      # (its @rev-derived default can't read a version from a SHA pin).
      - name: Set up Rust
        if: needs.setup.outputs.rust != '' && needs.setup.outputs.no-autograder != 'true' && runner.environment != 'self-hosted'
        uses: dtolnay/rust-toolchain@master
        with:
          toolchain: \${{ needs.setup.outputs.rust }}

      - name: Install apt packages
        if: needs.setup.outputs.apt != '' && needs.setup.outputs.no-autograder != 'true' && runner.os == 'Linux' && runner.environment != 'self-hosted'
        run: |
          set -euo pipefail
          sudo apt-get update -qq
          sudo apt-get install -y --no-install-recommends \${{ needs.setup.outputs.apt }}

      # === Run runner.py (which execs the autograder) ===
      # runner.py is fetched fresh every run so updates to the
      # runner-side bootstrap propagate without editing this file.
      # Replace this block to swap to a non-Python bootstrap.
      # \`--retry-all-errors\` covers DNS / TLS / 5xx / partial response;
      # \`--retry-delay 2\` uses a fixed 2s gap (it disables curl's
      # exponential backoff), so 3 retries add ~6s plus the 30s
      # per-attempt ceiling — well under the grade job's 15-minute timeout.
      - name: Grade details
        id: autograde
        run: |
          set -euo pipefail
          # Re-assert the checkout as safe before git-dependent steps. In
          # a container the bind-mounted repo is owned by the host runner
          # user but git runs as a different UID, tripping git's "dubious
          # ownership" guard. actions/checkout's own entry was written
          # under a now-restored temporary HOME, so set it again here (under
          # the runtime HOME) so runner.py can read history. Guard the
          # --add so repeated runs on a persistent-HOME (self-hosted)
          # runner don't accumulate duplicate lines in ~/.gitconfig.
          SAFE_DIR="\${GITHUB_WORKSPACE:-$PWD}"
          git config --global --get-all safe.directory 2>/dev/null | grep -qxF "$SAFE_DIR" \\
            || git config --global --add safe.directory "$SAFE_DIR" || true
          RUNNER_SCRIPT="\${RUNNER_TEMP:-/tmp}/classroom50-runner.py"
          curl -fsSL --max-time 30 --retry 3 --retry-delay 2 --retry-all-errors \\
               "\${PAGES_BASE_URL}/runner.py" -o "$RUNNER_SCRIPT"
          python3 "$RUNNER_SCRIPT"

      # === Post commit status ===
      - name: Post commit status
        if: always()
        env:
          GH_TOKEN: \${{ github.token }}
          STATE:   \${{ steps.autograde.outputs.status || 'error' }}
          SUMMARY: \${{ steps.autograde.outputs.summary || 'Autograde did not complete' }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="$STATE" \\
            -f context="classroom50/autograde" \\
            -f description="$SUMMARY" \\
            -f target_url="$RUN_URL"

      # === Publish submit-tag release ===
      # Created with --latest=false; the set-latest job below owns
      # the latest-pointer flip (serialized to avoid races between
      # concurrent grade jobs). Idempotent on workflow re-runs.
      - name: Publish submission release
        if: success() && steps.autograde.outputs.status != 'error'
        env:
          GH_TOKEN: \${{ github.token }}
          TAG: \${{ env.SUBMISSION_TAG }}
          # The milestone tag that triggered this run ('' otherwise); noted in
          # the Release title so the teacher sees WHICH milestone was graded.
          TRIGGER_TAG: \${{ needs.setup.outputs.trigger-tag }}
          # Distinct name from the job-level RELEASE_ASSETS (a JSON array fed to
          # runner.py): this is the comma-joined list of accepted basenames the
          # runner emits post-staging. Different wire shape, different name, so a
          # future edit can't feed the JSON array into the IFS=',' read below.
          STAGED_RELEASE_BASENAMES: \${{ steps.autograde.outputs.release-assets }}
          # Absolute dir runner.py actually staged into, so this step reads from
          # exactly where the runner wrote instead of re-deriving it from
          # RUNNER_TEMP (the two fallbacks diverged when RUNNER_TEMP was unset).
          STAGED_RELEASE_DIR: \${{ steps.autograde.outputs.release-assets-dir }}
        run: |
          set -euo pipefail
          ASSETS_DIR="\${STAGED_RELEASE_DIR:-\${RUNNER_TEMP:-/tmp}/classroom50-release-assets}"

          # Collect the valid staged extras FIRST, so they're attached in the
          # same \`gh release create\` as result.json. Immutable releases (an org
          # ruleset can enforce them) reject a later \`gh release upload\`/\`edit\`
          # with HTTP 422, so assets must be baked in at creation time — a
          # post-create upload can never succeed there. Re-validate each staged
          # basename (defense in depth: these came from runner.py's strict
          # validator, but the workflow re-checks before anything reaches gh).
          EXTRA_ASSETS=()
          if [[ -n "\${STAGED_RELEASE_BASENAMES:-}" ]]; then
            IFS=',' read -r -a ASSET_NAMES <<< "\${STAGED_RELEASE_BASENAMES:-}"
            for NAME in "\${ASSET_NAMES[@]}"; do
              [[ -n "$NAME" ]] || continue
              if [[ ! "$NAME" =~ ^[A-Za-z0-9._-]{1,255}$ || "$NAME" == .* || "$NAME" == *. || "$NAME" == *..* ]]; then
                echo "::warning::release_assets: invalid staged basename (skipped)"
                continue
              fi
              case "$(printf '%s' "$NAME" | LC_ALL=C tr '[:upper:]' '[:lower:]')" in
                result.json|release-body.md)
                  echo "::warning::release_assets: reserved staged basename $NAME (skipped)"
                  continue
                  ;;
              esac
              ASSET="$ASSETS_DIR/$NAME"
              if [[ ! -f "$ASSET" || -L "$ASSET" ]]; then
                echo "::warning::release_assets: staged $NAME is missing or unsafe (skipped)"
                continue
              fi
              EXTRA_ASSETS+=("$ASSET")
            done
          fi

          # Recreate on re-run: an immutable release can't have result.json
          # clobbered or new assets uploaded, so a re-run must delete and
          # recreate to attach the current result + extras atomically. Keep the
          # git tag (--cleanup-tag omitted) so the submission ref is unchanged.
          #
          # But an org ruleset enforcing immutable releases (same rule noted
          # above for post-create uploads) ALSO rejects the delete itself with
          # HTTP 422/403 — seen live on a teacher regrade 2026-08-07: the
          # delete failed, this step went red, and set-latest was skipped even
          # though grading PASSED and the commit status posted success. gh's
          # exit codes can't reliably distinguish that ruleset rejection from
          # a transient error, so re-check existence instead: if the delete
          # failed and the release is STILL there, treat it as
          # immutable-blocked — warn and keep the old release rather than
          # failing the job over record-keeping GitHub forbids. If the delete
          # failed but the release is GONE (a race removed it), proceed to
          # create as usual.
          if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
            if ! DELETE_ERR="$(gh release delete "$TAG" --repo "$GITHUB_REPOSITORY" --yes 2>&1)"; then
              if gh release view "$TAG" --repo "$GITHUB_REPOSITORY" >/dev/null 2>&1; then
                echo "$DELETE_ERR"
                echo "::warning::the release at $TAG is immutable (org ruleset) and cannot be refreshed; the regraded score is in the commit status and the job summary, but gradebook collection keeps reading the OLD release's result.json for this submission (GitHub's rule, not ours)"
                exit 0
              fi
              # Release vanished between delete and re-check: surface why the
              # delete complained, then create as if it had never existed.
              echo "$DELETE_ERR"
            fi
          fi
          TITLE="Submission $TAG"
          if [[ -n "\${TRIGGER_TAG:-}" ]]; then
            TITLE="Submission $TAG (via $TRIGGER_TAG)"
          fi
          gh release create "$TAG" result.json \${EXTRA_ASSETS[@]+"\${EXTRA_ASSETS[@]}"} \\
            --repo "$GITHUB_REPOSITORY" \\
            --title "$TITLE" \\
            --notes-file release-body.md \\
            --latest=false

      # === Ensure the Feedback PR ===
      # Opt-in per assignment (feedback-pr). One long-lived PR per repo:
      # base = the frozen \`feedback\` branch at the baseline commit,
      # head = the default branch, so the teacher reviews the full
      # starter→latest diff with inline comments and it auto-updates on
      # every submission. Runs on always() so a failing submission still
      # gets a review surface, but only fires once there's a diff
      # (baseline-sha != head-sha) — GitHub won't open a no-commit PR.
      # Idempotent: reuse the one PR across submissions; reopen only a
      # student's *unmerged* close (a teacher merge means grading is
      # done). PRs opened by GITHUB_TOKEN don't retrigger workflows, so
      # there's no loop, and this adds no new workflow runs.
      - name: Ensure Feedback PR
        id: feedback_pr
        if: >-
          always() &&
          needs.setup.outputs.feedback-pr == 'true' &&
          steps.autograde.outputs.baseline-sha != '' &&
          steps.autograde.outputs.head-sha != '' &&
          steps.autograde.outputs.baseline-sha != steps.autograde.outputs.head-sha
        env:
          GH_TOKEN: \${{ github.token }}
          BASE_SHA: \${{ steps.autograde.outputs.baseline-sha }}
          MODE: \${{ needs.setup.outputs.mode }}
        # The control flow lives in ensure_feedback_pr.py (fetched from Pages,
        # like runner.py) so it's unit-testable with a stubbed gh; this step
        # is a thin fetch+exec shim. The script freezes the \`feedback\` base,
        # maintains the one PR, and posts the classroom50/feedback-pr status.
        # --retry-all-errors covers DNS/TLS/5xx/partial-response; the script
        # itself exits 0 for every outcome (state is in the commit status).
        run: |
          set -euo pipefail
          FB_SCRIPT="\${RUNNER_TEMP:-/tmp}/classroom50-ensure-feedback-pr.py"
          curl -fsSL --max-time 30 --retry 3 --retry-delay 2 --retry-all-errors \\
               "\${PAGES_BASE_URL}/ensure_feedback_pr.py" -o "$FB_SCRIPT"
          python3 "$FB_SCRIPT"

      # The script posts the classroom50/feedback-pr status itself for every
      # outcome it reaches. But if the FETCH above fails (Pages 5xx past
      # retries), the step aborts before the script runs and posts nothing —
      # so this fallback posts an \`error\` status only when the step didn't
      # succeed, keeping the "agent can always poll feedback-pr" guarantee
      # (mirrors the autograde status's always() posting).
      - name: Feedback PR status fallback
        if: >-
          always() &&
          needs.setup.outputs.feedback-pr == 'true' &&
          steps.autograde.outputs.baseline-sha != '' &&
          steps.autograde.outputs.head-sha != '' &&
          steps.autograde.outputs.baseline-sha != steps.autograde.outputs.head-sha &&
          steps.feedback_pr.outcome != 'success'
        env:
          GH_TOKEN: \${{ github.token }}
          RUN_URL: \${{ github.server_url }}/\${{ github.repository }}/actions/runs/\${{ github.run_id }}
        run: |
          set -euo pipefail
          gh api "repos/\${GITHUB_REPOSITORY}/statuses/\${GITHUB_SHA}" \\
            -f state="error" \\
            -f context="classroom50/feedback-pr" \\
            -f description="Feedback PR step could not run (could not fetch ensure_feedback_pr.py from Pages)" \\
            -f target_url="$RUN_URL" >/dev/null 2>&1 || true

  # === Move the "latest" pointer forward ===
  # Latest = the most recent SUBMISSION EVENT, not the newest commit:
  # every published submission release claims the badge, so grading an
  # older commit on purpose (a milestone tag like phase1 re-pointed at
  # earlier work, or a teacher regrade) makes THAT release latest. This
  # matches the gradebook collector and the web submission views, which
  # both order by release publish time — one definition everywhere.
  # (An earlier commit-time comparator tried "newest code wins", but it
  # read the just-published release back as the current latest, compared
  # it against itself, and never acted — GitHub's default publish-order
  # badge is what actually shipped, and it is the semantics we want.)
  # Serialized per-repo so concurrent submissions can't interleave edits.
  set-latest:
    needs: [setup, grade]
    # Advance latest for any recorded submission — including the no-autograder
    # vacuous pass (status 'success'), so its release becomes the latest the
    # dashboard surfaces. Explicit suppressed-push / foreign-tag / shim-update
    # guards, defensive against a future change to grade's result semantics.
    if: >-
      needs.setup.outputs.branch-push-suppressed != 'true' &&
      needs.setup.outputs.foreign-tag-suppressed != 'true' &&
      needs.setup.outputs.is-shim-update != 'true' &&
      needs.grade.result == 'success' &&
      (needs.grade.outputs.status == 'success' || needs.grade.outputs.status == 'failure')
    runs-on: ubuntu-latest
    concurrency:
      group: classroom50-set-latest-\${{ github.repository }}
      cancel-in-progress: false
    steps:
      - name: Advance latest release pointer
        env:
          GH_TOKEN: \${{ github.token }}
          TAG: \${{ needs.setup.outputs.submission-tag }}
        run: |
          set -euo pipefail
          # Best-effort: the badge is cosmetic and GitHub's own default
          # (most recently published) already matches this rule, so a
          # rejected edit must never fail the pipeline. Known rejection:
          # an org ruleset enforcing immutable releases 422s any edit.
          if ! gh release edit "$TAG" --repo "$GITHUB_REPOSITORY" --latest=true; then
            echo "::warning::could not mark $TAG as the latest release (immutable-release ruleset?); GitHub's default latest (most recently published) matches anyway"
          fi
`,Ne=`name: Collect Scores

# Teacher-triggered workflow. Iterates the (member, assignment)
# Cartesian product of the classroom GitHub teams' members ×
# <classroom>/assignments.json (the teams are authoritative for
# enrollment; roster.csv is optional display metadata). The polled
# members are the union of the STUDENT team and the STAFF teams
# (teacher/hta/ta), so a staff member who accepted an assignment to test
# the autograde flow is collected like a student — staff who never
# accepted have no repo, hence no releases, hence no entry. It pages
# through each expected \`<classroom>-<assignment>-<username>\` repo's
# \`submit/*\` releases and downloads \`result.json\` from each. Single-writer
# by design — no concurrent ingest, no per-student dispatch event, no broad
# cross-repo write secret.

on:
  workflow_dispatch:
    inputs:
      classroom:
        description: "Classroom short-name (leave blank to collect all)"
        required: false
  schedule:
    # Nightly autopilot. Comment out the next line if you only want
    # manual triggers.
    - cron: "17 4 * * *"

permissions:
  contents: write       # write scores.json + commit

concurrency:
  group: collect-\${{ github.event.inputs.classroom || 'all' }}
  cancel-in-progress: false

jobs:
  collect:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7

      - uses: actions/setup-python@v7
        with:
          python-version: '3.14'

      - name: Collect scores
        env:
          # Fine-grained PAT. Needs Organization -> Members: Read
          # (collection is team-driven and lists the classroom team's
          # members), Repository -> Contents: Read and write on
          # <classroom>-* student repos, and Repository ->
          # Administration: Read and write (collection grants staff teams
          # — e.g., TAs — read access to student repos and private
          # templates via PUT teams/.../repos/...). Collection READS
          # (team members, releases + result.json) and grants team access;
          # the contents-write scope is shared with regrade.yaml, which
          # pushes submit/* tags.
          # Rotated via \`gh teacher rotate-service-token <org>\`.
          CLASSROOM50_SERVICE_TOKEN: \${{ secrets.CLASSROOM50_SERVICE_TOKEN }}
          # Optional restriction to a single classroom; empty
          # means "collect all classrooms in this config repo".
          CLASSROOM_FILTER: \${{ github.event.inputs.classroom || '' }}
        run: python3 .github/scripts/collect_scores.py

      - name: Commit and push
        run: |
          set -euo pipefail
          if [ -n "$(git status --porcelain '*/scores.json' 2>/dev/null)" ]; then
            git add '*/scores.json'
            git -c user.name=classroom50-bot -c user.email=bot@classroom50 \\
                commit -m "[Classroom 50] collect: refresh scores.json"
            git push
          else
            echo "no scores.json changes to commit"
          fi
`,Pe=`name: Probe Service Token

# Teacher-triggered service-token health check. Run this after
# \`gh teacher init\` / \`gh teacher rotate-service-token\` (or any time a
# collect-scores / regrade run fails with a 401/403) to confirm the
# CLASSROOM50_SERVICE_TOKEN holds EVERY scope the pipeline needs — including
# the org-team read and repo-level Actions permission that the CLI/web
# provisioning validators can't cheaply check and that otherwise only surface
# as an opaque failure in a nightly collect or a regrade.
#
# SIDE-EFFECT FREE: the probe only READS. It proves the write scopes with
# read-only proxies GitHub gates behind the write permission (config-repo
# permissions.push for Contents: write; actions/permissions reachability for
# Actions: write) — it never pushes a tag, re-runs a workflow, or writes a
# secret. Safe to run any time.

on:
  workflow_dispatch: {}

permissions:
  contents: read        # read the per-classroom config to resolve team slugs

concurrency:
  group: probe-token
  cancel-in-progress: false

jobs:
  probe:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7

      - uses: actions/setup-python@v7
        with:
          python-version: '3.14'

      - name: Probe the service token
        env:
          # The fine-grained PAT under test. The probe touches every scope the
          # token requests (Contents R/W, Actions R/W, Organization Members: R,
          # Metadata: R) with read-only calls. Rotated via
          # \`gh teacher rotate-service-token <org>\`.
          CLASSROOM50_SERVICE_TOKEN: \${{ secrets.CLASSROOM50_SERVICE_TOKEN }}
        run: python3 .github/scripts/probe_token.py
`,Fe=`name: Publish Pages

# Allow-list publisher: only the paths enumerated under "Assemble Pages
# artifact" appear in the deployed site, so a new file dropped into the
# repo is private by default. Triggers are intentionally limited to
# push to the org default branch and workflow_dispatch — never
# pull_request — so a fork PR cannot modify this workflow to leak
# private paths. {{DEFAULT_BRANCH}} is substituted at skeleton commit
# time by \`gh teacher init\`.

on:
  push:
    branches: ["{{DEFAULT_BRANCH}}"]
    # Skip the redeploy for roster-only commits: the roster isn't published.
    paths-ignore:
      - "**/roster.csv"
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v7

      - name: Assemble Pages artifact (allow-list)
        run: |
          set -euo pipefail
          mkdir -p _site
          shopt -s nullglob
          # dest_prefix <classroom> -> the per-classroom site path:
          # <classroom>/<secret> when classroom.json carries a (validated)
          # secret, else plain <classroom>. python3 reads the JSON so a
          # malformed classroom.json can't inject shell.
          #
          # Written ONCE to $RUNNER_TEMP and reused by the later "Bundle"
          # step (run: blocks can't share a shell function) so the two steps
          # can't drift and split a protected classroom's published tree.
          mkdir -p "$RUNNER_TEMP"
          cat > "$RUNNER_TEMP/dest_prefix.py" <<'PY'
          import json, os, re, sys
          classroom = sys.argv[1]
          path = os.path.join(classroom, "classroom.json")
          secret = ""
          try:
              with open(path) as fh:
                  secret = (json.load(fh) or {}).get("secret") or ""
          except (OSError, ValueError):
              secret = ""
          if secret and not re.fullmatch(r"[a-z0-9]{4,64}", secret):
              print(f"::error::{path}: invalid secret (must be [a-z0-9]{{4,64}})", file=sys.stderr)
              sys.exit(1)
          print(f"{classroom}/{secret}" if secret else classroom)
          PY
          dest_prefix() {
            python3 "$RUNNER_TEMP/dest_prefix.py" "$1"
          }
          # runner.py (org-level bootstrap) published at the site root
          # so the autograde-runner workflow can fetch it from
          #   https://<org>.github.io/classroom50/runner.py
          # regardless of which classroom triggered the run.
          if [ -f .github/scripts/runner.py ]; then
            cp .github/scripts/runner.py _site/runner.py
          fi
          # ensure_feedback_pr.py (org-level): the autograde-runner's
          # "Ensure Feedback PR" step fetches it from the site root the same
          # way as runner.py. Guarded so an older skeleton still publishes
          # everything else.
          if [ -f .github/scripts/ensure_feedback_pr.py ]; then
            cp .github/scripts/ensure_feedback_pr.py _site/ensure_feedback_pr.py
          fi
          # Per-classroom config files, published under the classroom's
          # dest prefix (plain or secret-protected). classroom default
          # autograder (\`<classroom>/autograder.py\`) is published only when
          # the classroom has run \`gh teacher autograder set-default\` —
          # absence is fine, the runner falls back to a vacuous-pass
          # result when neither per-assignment nor classroom default
          # is published.
          for f in */classroom.json */assignments.json; do
            classroom="$(dirname "$f")"
            dest="$(dest_prefix "$classroom")"
            mkdir -p "_site/$dest"
            cp "$f" "_site/$dest/$(basename "$f")"
          done
          for f in */autograder.py; do
            classroom="$(dirname "$f")"
            dest="$(dest_prefix "$classroom")"
            mkdir -p "_site/$dest"
            cp "$f" "_site/$dest/$(basename "$f")"
          done
          # Non-default autograder workflow shims (the rare
          # swap-the-runner-entirely case).
          for f in */autograders/*.yaml; do
            classroom="$(echo "$f" | cut -d/ -f1)"
            dest="$(dest_prefix "$classroom")"
            mkdir -p "_site/$dest/autograders"
            cp "$f" "_site/$dest/autograders/$(basename "$f")"
          done

      - name: Materialize declarative tests
        run: |
          set -euo pipefail
          # Translate each entry's \`tests\` block into
          # <classroom>/autograders/<slug>/tests.json so the bundle step
          # below tars it (with any sibling fixtures) for runner.py's
          # interpreter. Must run BEFORE the bundle step. Guarded so an
          # older skeleton still publishes everything else.
          if [ -f .github/scripts/materialize_tests.py ]; then
            python3 .github/scripts/materialize_tests.py
          else
            echo "::warning::.github/scripts/materialize_tests.py not found; skipping declarative-test materialization (re-run \\\`gh teacher init\\\` to update skeleton scripts)"
          fi

      - name: Bundle per-assignment autograders
        run: |
          set -euo pipefail
          shopt -s nullglob
          # Reuse the dest-prefix resolver the assemble step wrote to
          # $RUNNER_TEMP, so both steps share one copy of the secret/path rule.
          dest_prefix() {
            python3 "$RUNNER_TEMP/dest_prefix.py" "$1"
          }
          # Per-assignment override directories live at
          # <classroom>/autograders/<slug>/ (autograder.py + any
          # ancillary files: fixtures, helpers, framework configs, or a
          # tests.json materialized from assignments.json above).
          # Bundle each into <dest>/autograders/<slug>.tar.gz so
          # runner.py fetches one tarball at runtime (instead of
          # walking a directory listing Pages doesn't serve).
          for slugdir in */autograders/*/; do
            classroom=$(echo "$slugdir" | cut -d/ -f1)
            slug=$(basename "$slugdir")
            dest="$(dest_prefix "$classroom")"
            outdir="_site/$dest/autograders"
            mkdir -p "$outdir"
            # \`-C parent slug\` so the tarball's internal layout is
            # \`<slug>/<files>\`, matching the runtime extraction path
            # runner.py uses to locate the per-assignment entrypoint.
            tar -czf "$outdir/$slug.tar.gz" -C "$(dirname "$slugdir")" "$slug"
          done

      - name: Build classrooms index
        run: |
          python3 - <<'PY'
          import glob, json, os
          # Public fields only — keep internal/teacher-side keys (e.g., the
          # \`team\` block, which carries the GitHub team id/slug) out of the
          # unauthenticated Pages index. New public fields must be added
          # here explicitly rather than dumping classroom.json wholesale.
          # \`active\` is published so the student accept page can refuse an
          # archived classroom (active:false); absent = active (legacy),
          # matching configrepo.ClassroomJSON.IsArchived.
          PUBLIC_KEYS = ("schema", "name", "short_name", "term", "org", "active", "migrated_from")
          rooms = []
          for path in sorted(glob.glob("*/classroom.json")):
              with open(path) as fh:
                  doc = json.load(fh)
              rooms.append({k: doc[k] for k in PUBLIC_KEYS if k in doc})
          os.makedirs("_site", exist_ok=True)
          with open("_site/classrooms-index.json", "w") as fh:
              json.dump({"classrooms": rooms}, fh)
          PY

      - uses: actions/upload-pages-artifact@v5
        with:
          path: _site

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v5
`,Ie=`name: Regrade

# Teacher-triggered regrade fan-out. For each targeted student repo it
# RE-RUNS the repo's latest autograde workflow run (re-fetching the current
# autograder from Pages), so an existing commit is graded again — e.g., after
# the teacher fixed a buggy test or changed the autograder. Re-running the
# same run grades the SAME commit and does NOT create a new submission, so
# the student's submission time and \`late\` flag don't change (the runner
# stamps \`datetime\` from the commit's committer date — see runner.py).
#
# WHICH COMMIT GETS GRADED: a re-run replays the run at ITS ORIGINAL
# submit/* commit — NOT the current \`main\` HEAD. So if a student pushed a
# new commit to main after the run being re-run, regrade still grades the
# earlier (already-submitted) commit, by design: regrade refreshes the score
# for an existing submission, it does not grade newer un-submitted work. Only
# the first-grade fallback below (a never-graded repo) tags the current \`main\`
# HEAD.
#
# Fallback: a repo that has a \`main\` HEAD but no prior autograde run (never
# graded) is first-graded by pushing a fresh \`submit/<ts>-<sha>\` tag instead.
#
# Re-run/tag only by design: grading then runs ASYNCHRONOUSLY inside each
# student repo (it can take minutes), so this workflow does NOT collect
# scores itself — collecting immediately would race the still-running grade
# jobs. The refreshed releases are ingested by \`collect-scores.yaml\`
# (nightly, or "Collect now" from the web app). EVENTUAL CONSISTENCY: until
# that next collect runs, the gradebook still shows the PRE-regrade scores —
# a "Collect now" fired while grading is still in flight will read the old
# result.json and only pick up the new score on a later collect. This is
# expected; the regrade summary log says so too.
#
# LATENESS IS ADVISORY: \`datetime\` (and the derived \`late\` flag) come from the
# graded commit's committer date, which a student can set freely. The schema
# documents \`late\` as advisory and nothing enforces it — keep it that way; do
# NOT wire \`late\` into anything that gates grades or eligibility.

on:
  workflow_dispatch:
    inputs:
      classroom:
        description: "Classroom short-name (required)"
        required: true
      assignment:
        description: "Assignment slug (required)"
        required: true
      owner:
        description: "Single repo-owner login to regrade (blank = whole assignment)"
        required: false

permissions:
  contents: read        # reads roster/manifest from this repo's checkout
  # The cross-repo work (re-running a student repo's run, or pushing a
  # submit/* tag) is authenticated by CLASSROOM50_SERVICE_TOKEN on the student
  # repos, NOT this job's GITHUB_TOKEN — so no extra job permissions are needed.

concurrency:
  # One regrade in flight per (classroom, assignment) so two dispatches don't
  # race on the same repos. Independent of collect-scores' concurrency group.
  group: regrade-\${{ github.event.inputs.classroom }}-\${{ github.event.inputs.assignment }}
  cancel-in-progress: false

jobs:
  regrade:
    runs-on: ubuntu-latest
    # A whole-assignment regrade is a sequential fan-out: up to ~5 GitHub API
    # calls per student repo (plus retries). A large classroom can run long, so
    # raise the ceiling above the 6h default's worst case is unnecessary — but
    # set an explicit, generous bound so a stuck run fails on a predictable
    # boundary instead of the implicit default. The script logs incremental
    # progress, and re-dispatching is safe (rerun is idempotent and the tag
    # path reuses an existing submit/* tag at HEAD), so a timed-out run can
    # just be run again.
    timeout-minutes: 120
    steps:
      - uses: actions/checkout@v7

      - uses: actions/setup-python@v7
        with:
          python-version: '3.14'

      - name: Regrade (re-run student autograde workflows)
        env:
          # Fine-grained PAT scoped to \`Contents: Read and write\`,
          # \`Actions: Read and write\` on the <classroom>-* student repos, AND
          # Organization -> Members: Read. Re-running a student repo's latest
          # autograde run (the regrade path) needs Actions: write; pushing a
          # submit/* tag for a never-graded repo (the first-grade fallback)
          # needs Contents: write; listing the classroom team (regrade is
          # team-driven, mirroring collect) needs Members: Read. Shared with
          # collect-scores.yaml. Rotated via \`gh teacher rotate-service-token <org>\`.
          CLASSROOM50_SERVICE_TOKEN: \${{ secrets.CLASSROOM50_SERVICE_TOKEN }}
          CLASSROOM_FILTER: \${{ github.event.inputs.classroom }}
          ASSIGNMENT_FILTER: \${{ github.event.inputs.assignment }}
          OWNER_FILTER: \${{ github.event.inputs.owner || '' }}
        run: python3 .github/scripts/regrade_repos.py
`,Q=`dotgithub`,$=`.github`,Le=`{{DEFAULT_BRANCH}}`,Re=Object.assign({"../../../cli/gh-teacher/skeleton/dotgithub/scripts/collect_scores.py":Ee,"../../../cli/gh-teacher/skeleton/dotgithub/scripts/ensure_feedback_pr.py":De,"../../../cli/gh-teacher/skeleton/dotgithub/scripts/materialize_tests.py":Oe,"../../../cli/gh-teacher/skeleton/dotgithub/scripts/probe_token.py":ke,"../../../cli/gh-teacher/skeleton/dotgithub/scripts/regrade_repos.py":Ae,"../../../cli/gh-teacher/skeleton/dotgithub/scripts/runner.py":je,"../../../cli/gh-teacher/skeleton/dotgithub/workflows/autograde-runner.yaml":Me,"../../../cli/gh-teacher/skeleton/dotgithub/workflows/collect-scores.yaml":Ne,"../../../cli/gh-teacher/skeleton/dotgithub/workflows/probe-token.yaml":Pe,"../../../cli/gh-teacher/skeleton/dotgithub/workflows/publish-pages.yaml":Fe,"../../../cli/gh-teacher/skeleton/dotgithub/workflows/regrade.yaml":Ie}),ze=[`workflows/publish-pages.yaml`,`workflows/collect-scores.yaml`,`workflows/autograde-runner.yaml`,`workflows/regrade.yaml`,`scripts/collect_scores.py`,`scripts/runner.py`,`scripts/materialize_tests.py`,`scripts/ensure_feedback_pr.py`,`scripts/regrade_repos.py`,`workflows/probe-token.yaml`,`scripts/probe_token.py`],Be=`workflows/autograde-runner.yaml`;function Ve(e){let t=`/${Q}/`,n=e.indexOf(t);return n===-1?null:e.slice(n+t.length)}var He=(()=>{let e=new Map;for(let[t,n]of Object.entries(Re)){let r=Ve(t);r&&e.set(r,n)}return e})();function Ue(e,t,n){return e.map(e=>{let r=t.get(e);if(r===void 0)throw Error(`Bundled skeleton file missing: ${e}. The web build did not include cli/gh-teacher/skeleton/${Q}/${e}.`);return{path:`${$}/${e}`,mode:`100644`,type:`blob`,content:r.replaceAll(Le,n)}})}function We(e){return Ue(ze,He,e)}export{ie as A,M as B,de as C,V as D,U as E,ee as F,O as G,j as H,P as I,E as J,C as K,I as L,oe as M,re as N,R as O,te as P,L as R,me as S,H as T,k as U,N as V,D as W,v as X,T as Y,p as Z,pe as _,be as a,fe as b,Ce as c,ge as d,Z as f,he as g,_e as h,ye as i,se as j,ne as k,Se as l,ve as m,$ as n,xe as o,X as p,w as q,We as r,Te as s,Be as t,Y as u,ue as v,ce as w,le as x,q as y,F as z};