Registry.registerRaw("page.js","5454",{inject:function(a){var u="text/xml"==document.contentType?document.createElementNS("http://www.w3.org/1999/xhtml","script"):document.createElement("script");u.textContent=a;(document.head||document.body||document.documentElement||document).appendChild(u);u.parentNode.removeChild(u)},backup:function(a,u,l,H){var c={safeWindow:{},safeDocument:{},eval:eval,Context:{D:H},exec_fn:function(a,b,M){h(new c.safeWindow.Function(a),b,M)},exec_csp:function(a,
b,M){var e="__u__"+(19831206*c.Context.M_r()+1);c.Message.send("csp",{id:e,src:a});c.exec_script(e,b,M)},exec_script:function(a,b,c){var e=window[a];delete window[a];h(e,b,c)}},h,b,p,y,r;(function(){var d=function(a){var b=function(b){return h(a,b,h(p.wrappedJSObject,arguments,[1]))};b.wrappedJSObject=a;return b},L={F_a:h=function(){var b=a.Function.apply;return function(a,c,d){a.apply===b?c=a.apply(c,d):(a[l]=b,c=a[l](c,d),delete a[l]);return c}}(),E_u:function(b,e){if(c.exec_eval){var d="__u__"+
(19831206*c.Context.M_r()+1),l=d+"_";window[l]=e;var f=c.Context.F_c(c.Context.eval,window,"(function() {"+b+'}).apply(window["'+l+'"])');delete a[d];delete a[l];return f}c.exec_csp(b,e)},E_c:function(a,b){c.exec_eval?h(new c.safeWindow.Function(a),b):c.exec_csp(a,b)},F_c:d(a.Function.call),F_b:b=d(a.Function.bind),F_tS:d(a.Function.toString),A_fE:d(a.Array.prototype.forEach),A_sl:p=d(a.Array.prototype.slice),A_sp:d(a.Array.prototype.splice),A_sh:d(a.Array.prototype.shift),A_j:d(a.Array.prototype.join),
A_pu:d(a.Array.prototype.push),A_po:d(a.Array.prototype.pop),A_m:d(a.Array.prototype.map),A_c:d(a.Array.prototype.concat),A_f:d(a.Array.prototype.filter),A_iO:d(a.Array.prototype.indexOf),O_k:a.Object.keys,O_dP:a.Object.defineProperties,O_gOPN:a.Object.getOwnPropertyNames,O_gOPD:a.Object.getOwnPropertyDescriptor,O_gOPDs:a.Object.getOwnPropertyDescriptors||function(a){var b={},c;for(c in a)b[c]=L.O_gOPD(a,c);return b},O_dG:d(a.Object.prototype.__defineGetter__),O_dS:d(a.Object.prototype.__defineSetter__),
O_tS:d(a.Object.prototype.toString),J_p:r=a.JSON.parse,J_s:y=a.JSON.stringify,c_l:a.console.log.bind(a.console),c_i:a.console.info.bind(a.console),c_w:a.console.warn.bind(a.console),c_e:a.console.error.bind(a.console),c_d:a.console.debug.bind(a.console),M_f:a.Math.floor,M_r:a.Math.random,M_m:a.Math.max,N_tS:d(a.Number.prototype.toString),R_rAAB:d(a.FileReader.prototype.readAsArrayBuffer),S_fCC:a.String.fromCharCode,S_m:d(a.String.prototype.match),S_su:d(a.String.prototype.substr),S_se:d(a.String.prototype.search),
S_sp:d(a.String.prototype.split),S_r:d(a.String.prototype.replace),S_cCA:d(a.String.prototype.charCodeAt),S_tLC:d(a.String.prototype.toLowerCase),S_tUC:d(a.String.prototype.toUpperCase),D_pFS:d(a.DOMParser.prototype.parseFromString),X_o:d(a.XMLHttpRequest.prototype.open),X_sRH:d(a.XMLHttpRequest.prototype.setRequestHeader),X_oMT:d(a.XMLHttpRequest.prototype.overrideMimeType),X_gARH:d(a.XMLHttpRequest.prototype.getAllResponseHeaders),X_gRH:d(a.XMLHttpRequest.prototype.getResponseHeader),X_s:d(a.XMLHttpRequest.prototype.send),
X_a:d(a.XMLHttpRequest.prototype.abort),D_n:a.Date.now};Object.keys(L).forEach(function(a){c.Context[a]=L[a]});"String Array Object Number parseInt JSON Math Date Event MutationEvent console location Error Uint8Array Blob FileReader DOMParser XMLHttpRequest Function RegExp frames self top document location".split(" ").forEach(function(b){c.safeWindow[b]=a[b]});"postMessage addEventListener removeEventListener setTimeout setInterval clearTimeout clearInterval alert prompt confirm encodeURIComponent decodeURIComponent encodeURI decodeURI escape unescape atob btoa close".split(" ").forEach(function(b){var d=
a[b];c.safeWindow[b]=function(){return h(d,a,arguments)}});c.createSafeDocument=function(a){"getElementById createEvent createElement dispatchEvent addEventListener removeEventListener".split(" ").forEach(function(b){var d=a[b];c.safeDocument[b]=function(){return h(d,a,arguments)}})};c.createSafeDocument(u)})();try{c.Message=function(a,b){var c=function(){return h(b.dispatchEvent,b,arguments)},e=function(){return h(b.addEventListener,b,arguments)},l=function(){return h(b.removeEventListener,b,arguments)},
u=function(a,c){var d=b.createEvent("MutationEvent");d.initMutationEvent(a,!1,!1,null,null,null,y(c),d.ADDITION);return d},f=function(a,b){var c;a&&(c=ca[a])&&(c(b),delete ca[a])},p,H,J,R,Z=1,ca={},aa=function(a){var b=r(a.attrName);"message.response"==b.m?f(b.r,b.a):p&&p(b,b.r?function(a){a=u(J,{m:"message.response",a:a,r:b.r});c(a)}:function(){})};return{init:function(a){R||(R=a);J="2C_"+R;H="2P_"+R;e(H,aa,!1)},send:function(a,b,d){if(d){var f=++Z;ca[Z]=d;d=f}else d=null;a=u(J,{m:a,a:b,r:d});c(a)},
onMessage:{setListener:function(a){p=a}},cleanup:function(){aa&&l(H,aa,!1);aa=null}}}(c.safeWindow,c.safeDocument),c.Message.init(l),c.Message.onMessage.setListener(function(a){if(c)if("load"==a.m)c.Context.pageLoaded=!0;else if("DOMContentLoaded"==a.m)c.Context.domContentLoaded=!0;else if("cleanup"==a.m)c.Message.cleanup(),c=null;else if("next"==a.m)if(a.a.id)c.exec_script(a.a.id,c),c.exec_eval=!1;else{if(void 0===c.exec_eval)try{c.exec_eval=b(c.eval,window)("true")}catch(l){c.exec_eval=!1}c.exec_eval?
c.exec_fn(a.a.src,c):c.exec_csp(a.a.src,c)}})}catch(d){}},next:function(a,u,l,H,c,h,b,p,y,r,d,L,M,e,ka){var G="";p&&(G+="var V = true;\n");r&&(G+="var EV = true;\n");y&&(G+="var ENV = true;\n");r="";if(M||"complete"==document.readyState)r+="Context.pageLoaded |= true;\nContext.domContentLoaded |= true;\n";else if(e||"interactive"==document.readyState)r+="Context.domContentLoaded |= true;\n";return['var backup = this;\n(function TM_back() {var Context = backup.Context;\nvar copy = function(src) {"use strict";var props = Context.O_gOPN(src);for (var kk, ii=0; (kk=props[ii]) !== undefined; ii++) {Context[kk] = src[kk];};};copy(backup);with (Context) {(function() {"use strict";copy({Context: Context,V:',
p?"true":"false",",ENV:",y?"true":"false",",TS:",d?"true":"false",",D:",L?"true":"false",",use:",h,",windowProps:",H,",scripts:",u,",powers:",l,",_content: false,flags:",c,',write_listeners: []});var cleanup = function(evt) {Message.cleanup();safeWindow.removeEventListener("unload", cleanup, false);};safeWindow.addEventListener("unload", cleanup, false);Context.write_listeners.push(function(d) {Context.createSafeDocument(d);Message.init();});',G+("var logLevel = "+b+";\n")+('var contextId = "'+a+
'";\n')+"var Event = function() {};var Window = function() {};Window.prototype = {};"+r+"("+ka+")(Context, contextId);\n","})();};})()"].join("")},environment:function(a,u){var l=a.V,H=a.EV,c=a.D,h=a.Message,b=a.safeWindow,p=a.safeDocument,y=a.flags,r=a.F_a,d=a.F_c,L=a.F_b,M=a.F_tS,e=a.A_fE,ka=a.A_sl,G=a.A_sp,f=a.A_pu,da=a.A_po,na=a.A_sh,J=a.A_j,R=a.A_f,Z=a.A_iO,ca=a.A_m,aa=a.A_c,z=a.O_k,Y=a.O_dP,Ba=a.O_gOPN,oa=a.O_gOPD,Ca=a.O_gOPDs,fa=a.O_dG,pa=a.O_dS,Da=a.O_tS,qa=a.J_p,ga=a.J_s,v=a.c_l,Ea=a.c_i,
O=a.c_w,ea=a.c_e,t=a.c_d,Fa=a.M_f,ra=a.M_r,sa=a.M_m,ta=a.S_fCC,ha=a.S_m,ua=a.S_su,va=a.S_sp,S=a.S_r,Ga=a.S_se,wa=a.S_cCA,xa=a.S_tLC,Ha=a.S_tUC,Ia=a.R_rAAB,Ja=a.D_pFS,Ka=a.X_o,La=a.X_sRH,Ma=a.X_oMT,Na=a.X_gARH,Oa=a.X_gRH,Pa=a.X_s,Qa=a.X_a,Ra=a.N_tS,ia=a.D_n;a.domContentLoaded|=0;a.pageLoaded|=0;a.domNodeInserted|=0;a.props={};var ba=function(){var d=[],za=function(a){if(document.body)a&&(a(),a=null);else{var b=["load","DOMNodeInserted","DOMContentLoaded"],c=function(){e(b,function(a){p.removeEventListener(a,
c,!1)});za(a)};e(b,function(a){p.addEventListener(a,c,!1)})}},la=function(c){f(d,function(){b.setTimeout(c,1)});a.domContentLoaded&&D.runListeners()},D={runListeners:function(){for(var a;a=na(d);)a()},run:function(b){var e=function(){Sa.create(b)};"document-start"==b.script.options.run_at?(c&&t('env: run "'+b.script.name+'" ASAP -> document-start'),e()):"document-body"==b.script.options.run_at?(c&&t('env: schedule "'+b.script.name+'" for document-body'),za(e)):"context-menu"==b.script.options.run_at?
(c&&t('env: run "'+b.script.name+'" ASAP -> context-menu'),e()):"document-end"==b.script.options.run_at?(c&&t('env: schedule "'+b.script.name+'" for document-end'),f(d,e),a.domContentLoaded&&D.runListeners()):(c&&t('env: schedule "'+b.script.name+'" for document-idle'),la(e))}};return D}();(l||c)&&t("env: initialized (content, id:"+ua(u,0,10)+"..., "+b.location.origin+b.location.pathname+") ");var T={createUUID:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=
16*ra()|0;return Ra("x"==a?b:b&3|8,16)})},toType:function(a){return ha(Da(a,{}),new b.RegExp("\\s([a-z|A-Z]+)"))[1]}},U={UTF8:{encode:function(a){return b.unescape(b.encodeURIComponent(a))},decode:function(a){return b.decodeURIComponent(b.escape(a))}},Base64:{encode:function(a){for(var c="",d=0;d<a.length;d++)c+=ta(wa(a,d)&255);return b.btoa(c)},decode:function(a){return b.atob(a)}},str2arrbuf:function(a){for(var c=new b.Uint8Array(a.length),d=0;d<a.length;d++)c[d]=wa(a,d);return c.buffer},arrbuf2str:function(a){var c=
"";a=new b.Uint8Array(a);for(var d=0;d<a.length;d+=32687)c+=r(ta,null,a.subarray(d,d+32687));return c}},P=function(){var a={},b,d=function(b){var c=[],d=[],C=function(){l=d=c=null;delete a[b]},l={postMessage:function(a){h.send("port.message",{response_id:b,value:a})},onMessage:{addListener:function(a){f(c,a)}},onDisconnect:{addListener:function(a){f(d,a)}},disconnect:function(){h.send("port.message",{response_id:b,disconnect:!0});C()}};a[b]={message:function(a){c&&e(c,function(b){b(a)})},disconnect:function(a){d&&
e(d,function(b){b(a)});C()}};return l};return{message:function(f){var e;f.connect?b&&b(f.destination,d(f.response_id)):(e=a[f.response_id])?f.disconnect?e.disconnect():e.message(f.value):c&&O("ports: unkown id",f.response_id,f)},connect:function(a){var b=T.createUUID();h.send("port.message",{response_id:b,connect:!0,destination:a});return d(b)},onConnect:{addListener:function(a){b=a}}}}(),ma=function(){var a={objs:{},push:function(b,c){0!==c&&1!==c&&(c=0);var d=Fa(19831206*ra()+1);a.objs[d]={fn:b,
prio:c};return d},remove:function(b){delete a.objs[b]},get:function(b){for(var c=[],d=0;1>=d;d++)e(z(a.objs),function(e){a.objs[e].prio!==d||void 0!==b&&e!=b||f(c,a.objs[e].fn)});return void 0===b?c:c[0]},finalize:function(b){if(void 0===b){b=a.get();for(var c=0;c<b.length;c++)b[c]()}else return a.objs[b]&&(c=a.objs[b].fn(),delete a.objs[b]),c}};return a}(),X=function(){var a=function(){var a=0,c={},d={register:function(f,e,h){var r=P.connect("registerMenuCommand");r.onMessage.addListener(function(a){"run"===
a&&b.setTimeout(e,1)});r.onDisconnect.addListener(function(){d.unregister(E)});r.postMessage({method:"register",name:f,accessKey:h});l&&v("env: registerMenuCommand "+M(e));var E=++a;c[E]=r.disconnect;return E},unregister:function(a){l&&v("env: registerMenuCommand "+a);var b;if(b=c[a])b(),delete c[a]}};return d}(),d=function(a,b){var d=null,e=!1,l=null,h,r=function(){var a=[];return{run:function(b){b&&f(a,b);if(d)for(;a.length;)da(a)()}}}(),E=P.connect("openInTab");E.onMessage.addListener(function(a){a.tabId?
e?I():(d=a.tabId,r.run()):a.name?h=a.name:a.close&&(e=!0,l&&(l(),l=void 0))});E.onDisconnect.addListener(function(){E=null});E.postMessage({method:"openTab",url:a,options:b});var I=function(){E&&E.postMessage({method:"closeTab"})},x={};Y(x,{close:{value:function(){e?c&&t("env: attempt to close already closed tab!"):(e=!0,I())}},closed:{get:function(){return e}},onclose:{get:function(){return l},set:function(a){l=a}},name:{get:function(){return h},set:function(a){r.run(function(){E&&E.postMessage({method:"nameTab",
name:a})})}}});return x},H=function(a,c){var d="Object"===T.toType(a)?a:{url:a,name:c},f=function(a,c){c=c||{};a&&b.setTimeout(function(){r(a,c,[c])},1)},e=P.connect("download");e.onMessage.addListener(function(a){try{a.load?d.onload&&f(d.onload,a.data):a.progress?d.onprogress&&f(d.onprogress,a.data):a.timeout?d.ontimeout&&f(d.ontimeout,a.data):d.onerror&&f(d.onerror,a.data)}catch(b){v("env: Error: TM_download - ",b,d)}});e.onDisconnect.addListener(function(){e=null});e.postMessage({details:d});return{abort:function(){e&&
e.disconnect();e=null}}},D={};return{log:v,addStyle:function(a,b){var c=T.createUUID();h.send("addStyle",{css:a,id:c},b?function(){b()}:null);return p.getElementById(c)},closeTab:function(a){h.send("closeTab",null,a?function(){a()}:null)},focusTab:function(a){h.send("focusTab",null,a?function(){a()}:null)},setClipboard:function(a,b,c){h.send("setClipboard",{content:a,info:b,id:u},c?function(){c()}:null)},syntaxCheck:function(a,b){h.send("syntaxCheck",{code:a},function(a){b(a)})},of:function(t){var B=
t.script,C=function(){var a=[],d=t.storage,x=0,K=function(a,c){if("string"===typeof a){var d=a[0];a=ua(a,1);switch(d){case "b":return"true"===a;case "n":return b.Number(a);case "o":try{return qa(a)}catch(m){v("values: parseValueFromStorage: "+m)}return c;default:return a}}else return c},V=function(b,d,Q,m){d!=Q&&e(a,function(a){if(a&&a.key==b&&a.cb)try{a.cb(b,K(d),K(Q),m)}catch(x){c&&O('values: change listener of "'+b+'" failed with: '+x.message)}})},q=function(a){g.postMessage({method:"saveStorageKey",
uuid:B.uuid,key:a,value:d.data[a],id:u,ts:d.ts})},g=P.connect("values");g.onMessage.addListener(function(a){a.storage&&e(z(a.storage.data),function(b){var c=d.data[b];d.data[b]=a.storage.data[b];var m=d.data[b];l&&v("values: message - config key "+b+": "+c+" -> "+m);V(b,c,m,!0)});a.removed&&(d[a.removed]=void 0)});g.onDisconnect.addListener(function(){c&&v("values: port disconnected")});g.postMessage({method:"addStorageListener",uuid:B.uuid,id:u});return{set:function(a,b){var c=d.data[a];d.ts=ia();
var m=d.data,k;a:{k=b;var x=(typeof k)[0];switch(x){case "o":try{k=x+ga(k)}catch(E){v(E);k=void 0;break a}break;default:k=x+k}}m[a]=k;q(a);V(a,c,d.data[a],!1)},get:function(a,b){return K(d.data[a],b)},remove:function(a){var b=d.data[a];d.ts=ia();delete d.data[a];q(a);V(a,b,d.data[a],!1)},list:function(){return z(d.data)},registerChangeListener:function(b,c){var d=++x;f(a,{id:d,key:b,cb:c});return d},unregisterChangeListener:function(b){a=R(a,function(a){return a.id!==b?!0:!1})}}}(),p=function(){return{getText:function(a){for(var b=
0;b<B.resources.length;b++){var c=B.resources[b];if(c.name==a&&!c.failed){try{if(null!==c.content)return U.UTF8.decode(c.content)}catch(d){}return""}}return null},getURL:function(a){for(var b=0;b<B.resources.length;b++){var c=B.resources[b];if(c.name==a&&!c.failed){if(null===c.content)return"";try{return"data:"+(c.meta||"application")+";base64,"+U.Base64.encode(c.content)}catch(d){}return c.url}}return null}}}(),G=function(){return{set:function(a,b){h.send("tabsSet",{uuid:B.uuid,tab:a},b?function(){b()}:
null)},get:function(a){h.send("tabsGet",{uuid:B.uuid},a?function(b){a(b||{})}:null)},getAll:function(a){h.send("tabsGetAll",{uuid:B.uuid},a?function(b){a(b||{})}:null)}}}(),L=function(a){var c=!1,d=a.context;delete a.context;var K=function(){var a={};e(z(b.XMLHttpRequest.__proto__),function(b){a[b]=!0});var c=function(){};e(z(b.XMLHttpRequest),function(d){a[d]||(c[d]=b.XMLHttpRequest[d])});return c}(),V=function(){c=!0},q=function(a,d){d=d||{};a&&!c&&b.setTimeout(function(){d.__proto__=K;r(a,d,[d])},
1)};"object"===typeof a.url&&a.url.href&&(a.url=a.url.href);var g=function(a,c){var d=new b.FileReader;d.onload=function(){c(U.arrbuf2str(d.result))};Ia(d,a)},n=function(a,c){var d,F,x,e=T.toType(a);if("Blob"===e||"File"===e)g(a,function(b){c({type:e,value:b,meta:a.type,name:a.name,lastModified:a.lastModified})});else if("FormData"===e)if(F=a.keys&&a.getAll?a.keys():null){var I,A={};for(d=[];!(I=F.next()).done;)f(d,I.value);x=function(){if(d.length){var b=da(d),e=a.getAll(b);-1===Ga(b,/\[\]$/)&&(e=
e[0]);n(e,function(a){A[b]=a;x()})}else c({type:"FormData",value:A})};x()}else c({error:e});else if(!(e=T.toType(a))||"Array"!==e&&"Object"!==e)c({value:a});else{var W,K,q=0;F=0;"Object"===e?(d=z(a),K=function(a){return a<d.length?d[a]:null},W={}):(K=function(b){return b<a.length?b:null},W=[]);x=function(){var d=K(q);null===d?c({type:e,value:W}):n(a[d],function(a){a.error?c(a):(W[d]=a,q++,1024>F++?x():(F=0,b.setTimeout(x,1)))})};x()}},A=!0;(function(b){if(!a.data)return b();n(a.data,function(c){c.error?
(A=!1,O("GM_xmlhttpRequest:","unable to handle data type "+c.error+". Going to use default xhr as fallback.")):(a.binary&&(c.type="Blob"),a.data=c,a.data_type="typified");b()})})(function(){if(!c)if(A){var n=P.connect("xhr"),m=[];a.headers&&e(z(a.headers),function(b){"cookie"===xa(b)&&(a.cookie=a.headers[b],delete a.headers[b])});n.postMessage({method:"xhr",details:a,callbacks:{onloadstart:!!a.onloadstart,onload:!!a.onload,onreadystatechange:!!a.onreadystatechange,onerror:!0,ontimeout:!!a.ontimeout,
onprogress:!!a.onprogress,onpartial:!0},id:u,url:b.location.href,uuid:B.uuid});n.onMessage.addListener(function(c){c.data&&d&&(c.data.context=d);if(c.data&&c.onload){m.length&&(c.data.response_data=J(m,""),m=null);if(c.data.response_data){var k=c.data.response_data;e(["response_data"],function(a){delete c.data[a]});var n={response:function(c){var d=a.responseType?xa(a.responseType):"";return"arraybuffer"==d?U.str2arrbuf(c):"blob"==d?new b.Blob([U.str2arrbuf(c)]):"json"==d?qa(c):c},responseText:function(a){return a},
responseXML:function(a){var c=new b.DOMParser;return Ja(c,a,"text/xml")}};e(z(n),function(a){fa(c.data,a,function(){try{return n[a](k)}catch(b){O("GM_xmlhttpRequest: ",b)}})})}q(a.onreadystatechange,c.data);q(a.onload,c.data)}else if(c.onreadystatechange)4!=c.data.readyState&&q(a.onreadystatechange,c.data);else if(c.onpartial)f(m,c.data.partial);else if(c.onerror)c.exception&&ea(c.exception),q(a.onerror,c.data);else{var g=R(["onloadstart","onprogress","ontimeout"],function(a){return!!c[a]})[0]||"onerror";
q(a[g],c.data)}});l&&n.onDisconnect.addListener(function(){v("env: TM_xmlhttpRequest.onDisconnect! :)")});V=function(){n&&n.disconnect();n=null;c=!0}}else{var k=new b.XMLHttpRequest;void 0===a.async&&(a.async=!0);Ka(k,a.method,a.url,a.async,a.user,a.password);a.headers&&e(z(a.headers),function(b){La(k,b,a.headers[b])});a.overrideMimeType&&Ma(k,a.overrideMimeType);a.responseType&&(k.responseType=a.responseType);e("abort error load loadstart progress readystatechange timeout".split(" "),function(b){k["on"+
b]=function(){var c="",m=a.url;if(2<k.readyState&&(c=Na(k),4==k.readyState)){c&&(c=S(c,/TM-finalURL[0-9a-zA-Z]*\: .*[\r\n]{1,2}/,""));var e=Oa(k,"TM-finalURL"+y.short_id);e&&(m=e)}c={readyState:k.readyState,status:"",statusText:"",responseHeaders:c,finalUrl:m,context:d};4==k.readyState&&(k.responseType?c.response=k.response:(c.responseText=k.responseText,c.responseXML=k.responseXML),c.status=k.status,c.statusText=k.statusText);q(a["on"+b],c)}});Pa(k,a.data);V=function(){Qa(k);c=!0}}});return{abort:function(){V()}}},
M=function(a,b,c,d,f){var q=null,g={id:u},n=["timeout","text","image","title","highlight"],A=null;"object"===typeof a?A=a:"object"===typeof f&&(A=f);A?(e(n,function(a){g[a]=A[a]}),q=A.ondone,d=A.onclick,"function"===typeof b&&(q=b)):("number"===typeof f&&(g.timeout=f),g.image=c,g.title=b,g.text=a);g.text&&(g.image=g.image||B.icon64||B.icon,g.title=g.title||B.name);g.text||g.highlight?h.send("notification",g,function(a){d&&a.clicked&&d();q&&q(!0===a.clicked)}):O("GM_notification: neither a message text nor the hightlight options was given!")};
D[t.script.uuid]=D[t.script.uuid]||{getInfo:function(){var a=t.script,b={observers:1,id:1,enabled:1,hash:1,fileURL:1},c={script:{}};e(z(a),function(d){b[d]||(c.script[d]=a[d])});var d=a.options.updateURL||a.options.fileURL;c.script["run-at"]=a.options.override.run_at||a.options.run_at;c.script.excludes=a.options.override.orig_excludes;c.script.includes=a.options.override.orig_includes;c.script.matches=a.options.override.orig_matches;c.script.grant=a.grant;c.script.unwrap=!1;c.scriptMetaStr=t.header;
c.scriptSource=t.code;c.scriptWillUpdate=!!d;c.scriptUpdateURL=d;c.version=y.version;c.scriptHandler="Tampermonkey";c.isIncognito=y.inIncognitoContext;c.downloadMode=y.downloadMode;return c}(),registerMenuCommand:a.register,unregisterMenuCommand:a.unregister,download:H,openInTab:d,setValue:C.set,getValue:C.get,deleteValue:C.remove,listValues:C.list,addValueChangeListener:C.registerChangeListener,removeValueChangeListener:C.unregisterChangeListener,getResourceText:p.getText,getResourceURL:p.getURL,
notification:M,xmlhttpRequest:L,setTab:G.set,getTab:G.get,getTabs:G.getAll};return D[t.script.uuid]}}}(),Sa=function(){var u=function(a,b,c){var d=Ca(b);e(z(d),function(c){var e=d[c];e&&e.get&&!y.sandbox_allow_getters||("function"===typeof b[c]?a[c]=L(b[c],b):function(){fa(a,c,function(){return b[c]})}())});e(z(c),function(b){a[b]=c[b]});return a},p=function(a,c,d,f){var q={attrChange:0,attrName:null,bubbles:!0,cancelBubble:!1,cancelable:!1,clipboardData:void 0,currentTarget:null,defaultPrevented:!1,
eventPhase:0,newValue:null,prevValue:null,relatedNode:null,returnValue:!0,srcElement:null,target:null,timeStamp:ia()};d="string"===typeof d?new b.Function(d):d;var g=new Event;e(z(q),function(a){g[a]=q[a]});e(z(c),function(a){g[a]=c[a]});g.type=a;r(d,f,[g])},la=function(a,b,c){void 0===c&&(c=function(a){return a});var d={GM_info:!0};e(a,function(a){d[a]=!0});return R(b,function(a){return d[c(a.name)]})},D=function(a,b){void 0===b&&(b=100);return b&&a&&(a==document||D(a.parentNode,b-1))},ya=function(){var b=
null;return function(c){b||(b={instance:c,is_open:!1},e(["write","writeln","open","close"],function(d){b[d]=c[d];c[d]=function(){var f=!1;-1!=Z(["write","writeln","open"],d)?b.is_open?f=!0:b.is_open=!0:"close"===d&&(b.is_open=!1);!f&&b.is_open&&h.send("document.write");var l=document.documentElement,g=r(b[d],c,arguments);if(!f&&b.is_open)return l!==document.documentElement&&(b.instance!==c&&(b=null,ya(document)),e(a.write_listeners,function(a){a(document)})),g}}))}}(),B={},C=[],P=function(e,x,K,h){if(!e.__addEventListener){Y(e,
{__addEventListener:{value:e.addEventListener,enumerable:!1,configurable:!1},__removeEventListener:{value:e.removeEventListener,enumerable:!1,configurable:!1}});var q=[],g=function(a){for(var b=0;b<q.length;b++)if(q[b].fn===a)return b};e.removeEventListener=function(a,b,c){c=!!c;var d,e;if(void 0!==(d=g(b))&&(e=q[d].listeners)){if(b=e[a+"-"+c])this.__removeEventListener(a,b,c),delete e[a+"-"+c];Ba(e).length||G(q,d,1)}else this.__removeEventListener(a,b,c)};var n=function(a,c,d,e){if(c){var n=C.length;
c=b.parseInt(J(["DOMContentLoaded"==d?1:2,e?1:2,e?c:3-c,ia()],"0"));for(d=0;d<C.length;d++)if(e=C[d],!e||!e.prio||e.prio>c){n=d;break}G(C,n,0,{prio:c,fn:a})}else f(C,{fn:a})};e.addEventListener=function(e,Q,m){(l||H)&&v("env: addEventListener "+e);if("load"==e||"DOMContentLoaded"==e||"DOMNodeInserted"==e){m=!!m;var k=!0,F=this;if(!h)try{try{throw new b.Error;}catch(ja){var r=/tms_[0-9a-f_]+/,N=ja.stack||ja.stacktrace;if(N)for(var t=va(N,"\n"),I,N=0;N<t.length&&(!(I=ha(t[N],r))||!(h=B[I[0]]));N++);
else{var W=function(a,d){void 0===d&&(d=10);if(0===d)return null;if(a.caller){var e,k;try{return k=M(a.caller),ha(k,new b.RegExp("^function[^(]+"))&&(void 0).length&&(e=ha((void 0)[0],r))?e[0]:W(a.caller,d-1)}catch(f){c&&O("env: unable to detect caller context",f)}}return null},Aa;if(Aa=W(arguments.callee))h=B[Aa]}}}catch(ja){c&&ea("env: Error: event "+e,ja)}h&&"document-idle"!==h.run_at&&(t=null,"load"==e?a.pageLoaded&&(t=function(){var a=F.document||F;(l||H)&&v("env: postLoadEvent!");a=a||document;
p("load",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:a,relatedNode:a,srcElement:a},Q,F)},k=!1,n(t,x,e,m)):"DOMContentLoaded"==e&&a.domContentLoaded&&(t=function(){var a=F.document||F;(l||H)&&v("env: postDomEventListener!");a=a||document;p("DOMContentLoaded",{attrName:"null",newValue:"null",prevValue:"null",eventPhase:b.Event.AT_TARGET,attrChange:b.MutationEvent.ADDITION,target:a,relatedNode:a,srcElement:a},Q,F)},k=!1,n(t,
x,e,m)),t&&(b.setTimeout(function(){if(C.length){var a=na(C);a&&a.fn&&a.fn()}},1),k=!1));k&&(t=function(a){return d(Q,this,K(a))},void 0===(k=g(Q))&&(k=q.length,f(q,{fn:Q,listeners:{}})),q[k].listeners[e+"-"+m]=t,this.__addEventListener(e,t,m))}else this.__addEventListener(e,Q,m)};f(ma,function(){e.removeEventListener=e.__removeEventListener;e.addEventListener=e.__addEventListener})}},U=function(a){a.__evaluate||(Y(a,{__evaluate:{value:a.evaluate,enumerable:!1,configurable:!1}}),a.evaluate=function(a,
b,c,d,e){l&&v("env: document.evaluate "+a);b||(b=this);var f;if("undefined"!=typeof XPathResult){var A=a,h=null;try{f=this.__evaluate(A,b,c,d,e)}catch(k){h=k}var m=!1;try{m|=!!f.snapshotLength}catch(k){}try{m|=!!f.singleNodeValue}catch(k){}if(m||"."==a[0]||D(b))l&&v("env: queried document for "+A);else{l&&v("env: query added elem for "+A);A=("/"==a[0]?".":"./")+a;try{f=this.__evaluate(A,b,c,d,e)}catch(k){}}l&&v("env: query returned ",f,h);if(!m&&h)throw h;}else l&&v("env: XPathResult == undefined, but selectNodes via ",
a),f=b.selectNodes(a);return f},f(ma,function(){a.evaluate=a.__evaluate}))},ba=function(c,d){var f=["eval"],h={};e(c,function(a){a.context_prop&&(h[(a.name.split(".")||[])[1]]=!0)});var q=function(a,c,d,m){var k=function(b){return b===c?a:b},g=function(a,b,c,d){c||(c=a);var e=function(){var e=r(a[b],c,arguments);d&&(e=d(e));return e};e.__proto__=a[b];e.prototype=a[b].prototype;return e},q=function(c){var d,e=null,k=c.replace(/^on/,""),f,e=function(c){(d=c)&&!f?(f=function(){if("function"===typeof d)return r(d,
a,arguments)},b.addEventListener(k,f,!0)):!d&&f&&(b.removeEventListener(k,f,!0),f=null)};fa(a,c,function(){return d});pa(a,c,e)},x=function(b,d){var e,f=null,m=null,f="function"===typeof d.get?d.get:function(){d.opts&&d.opts.get_cb&&r(d.opts.get_cb,this,[arguments,x]);return void 0===e?k(c[b]):e};"function"===typeof d.set?m=d.set:d.get||(m=function(a){e=a});f&&fa(a,b,f);m&&pa(a,b,m)};e(z(m),function(a){d[a]=d[a]||!1!==m[a]});var v=y.sandbox_allow_getters,u=y.detect_constructors_by_keys;e(z(d),function(b){if(!1!==
m[b]){var e,r,I,w={};try{var p=oa(c,b);try{if(!(e=m[b])||e.needs_grant&&!0!==h[b])if(d[b].event)w.event=!0;else if(p&&p.get)if(v)w.get=!0;else{l&&t("sandbox: ignore getter",b,p);return}else"function"===(I=typeof(r=c[b]))?d[b].proto?w.wrap=!0:(oa(r,"prototype")||u&&z(r).length)&&!p.enumerable||-1!=Z(f,b)||!r.bind?w.direct=!0:w.bind=!0:"number"===I||"string"===I?w.get=!0:w.direct=!0;else if(e.wrap)w.wrap=!0,w.that=e.that;else if(e.direct)w.direct=!0;else if(e.enhance)w.enhance=e.enhance;else if(e.get||
e.set)w.get=e.get,w.set=e.set,w.opts=e.opts}catch(D){w.get=!0}w.enhance?(l&&t("sandbox: original["+b+"] -> enhanced reference"),a[b]=w.enhance):p&&p.get&&!v?l&&t("sandbox: ignore getter",b,p):w.event?(l&&t("sandbox: original["+b+"] -> event reference"),q(b)):w.get||w.set?(l&&t("sandbox: original["+b+"] -> "+("function"===typeof w.get||"function"===typeof w.set?"enhanced ":"")+"getter/setter reference"),x(b,w)):w.wrap?(l&&t("sandbox: original["+b+"] -> wrapped reference "),a[b]=g(c,b,w.that,k)):w.direct?
(l&&t("sandbox: original["+b+"] -> direct reference"),a[b]=k(c[b])):w.bind&&(l&&t("sandbox: original["+b+"] -> bound reference"),a[b]=L(c[b],c))}catch(D){O("env: error while creating a new sandbox: "+D.message)}}});return a},g=function(a,c,d,e,k){var f=c[d],g=typeof f;e&&"string"===g?c[d]=new b.Function(f):k&&"function"===g&&(c[d]=function(){return r(f,k,arguments)});return r(a,window,c)};return function(){var c=new Window,f={setTimeout:{enhance:function(){return g(b.setTimeout,arguments,0,!0,c)}},
setInterval:{enhance:function(){return g(b.setInterval,arguments,0,!0,c)}},close:{needs_grant:!0,get:function(){return b.self==b.top?function(a){return X.closeTab(a)}:b.close}},focus:{needs_grant:!0,get:function(){return function(a){return X.focusTab(a)}}},location:{get:!0,set:function(a){b.location.href=a}},document:{get:function(){var a=b.document;d(a);return a}},clearInterval:{get:function(){return b.clearInterval}},clearTimeout:{get:function(){return b.clearTimeout}},addEventListener:{enhance:function(){return g(b.addEventListener,
arguments,1,!0)}},removeEventListener:{enhance:function(){return g(b.removeEventListener,arguments,1,!0)}}};(function(){var a=sa(b.frames.length,7);f.length={get:!0,opts:{get_cb:function(c,d){for(var e=b.frames.length,f=a;f<e;f++)d(b.String(f),{get:!0});a=sa(e,a)}}};for(var c=0;c<a;c++)f[b.String(c)]={get:!0}})();e(z(b),function(a){b[a]!=window&&(f[a]=f[a]||{enhance:b[a]})});var l=q(c,window,a.windowProps,f),m={context:l,filter:function(a){return a==window?l:a},filterEvent:function(a){var b={},c;
for(c in a)if("function"===typeof a[c])b[c]=function(){var b=c;return function(){return r(a[b],a,arguments)}}();else{var d=m.filter(a[c]);b[c]=d}return b}};return m}()},da=function(){return u({},b.console,{debug:t,log:v,info:Ea,warn:O,error:ea})},E=function(d,l,h,t,q,g){var n=null,p=function(){return"[Tampermonkey property]"};try{var v=t.sandboxes[d.uuid],m=["context","fapply"],k=[void 0,void 0];e(t.elements[d.uuid],function(a){a.name?(a.overwrite?(f(m,a.name),f(k,a.value)):a.context_prop||(v[a.name]=
a.value,f(m,a.name),f(k,"context."+a.name)),a.protect&&v[a.name]&&(v[a.name].toString=p)):c&&O("env: WARN: unexpected item in props elem: "+ga(a))});var F,n=J(["(function(context, fapply, console) {","with (context) {","(function(module) {",'"use strict";',"try {\n",y.measure_scripts?'console.time("'+(F="SCRIPT RUN TIME["+d.name.replace(/\W+/g," ")+"]")+'");\n':"","fapply(module, context, [",J(k,","),"]);",y.measure_scripts?'console.timeEnd("'+F+'");\n':"","} catch (e) {","if (e.message && e.stack) {",
"console.error(\"ERROR: Execution of script '",S(d.name,new b.RegExp("[\"']","g"),"\\$1"),"' failed! \" + e.message);",'console.log(e.stack.replace(/(\\\\(eval at )?<anonymous>[: ]?)|([\\s.]*at Object.tms_[\\s\\S.]*)/g, ""));',"} else {","console.error(e);","}","}\n","})","(function ",g,"(",J(m,","),") {",y.enforce_strict_mode?'"use strict";\n':"",h,l,"\n","})","}","})(this.context, this.fapply, this.console)"],""),u={context:v,fapply:r,console:da()};q?q(n,u):a.E_c(n,u)}catch(N){X.syntaxCheck(J([h,
l],""),function(a){var f="";if(a.errors){var m=va(h,"\n").length-1,k="";a.errors&&e(z(a.errors),function(b){if((b=a.errors[b])&&0<=b.line&&b.reason){var c=b.line;k+=J([c>m?"script:":"require:"," (",b.code,") ",S(b.reason,/.$/,"")," on line: ",c>m?c-m:c," at character: ",b.character,"\n"],"")}});f="JSHINT output:\n"+k}else f=l;var g=N.stack?S(N.stack,/(\\(eval at )?<anonymous>[: ]?)|([\s.]*at Object.tms_[\s\S.]*)/g,""):"";c||a.errors?ea('Syntax error @ "'+d.name+'"!\n##########################\n'+
f+"##########################\n\n"+g):ea('Syntax error @ "'+d.name+'"!\n\n',g);b.setTimeout(function(){throw N;},1)})}};return{create:function(d){var h=d.script,p=[],u=-1!==Z(h.grant,"none")?function(b,c){a.E_u(b,c)}:null,q=h.namespace+"_"+!!u;void 0===a.props[q]&&(a.props[q]={sandboxes:{},elements:{}},f(ma,function(){a.props[q]=null}));f(p,{name:"CDATA",value:function(a){this.src=a;this.toXMLString=this.toString=function(){return this.src}}});f(p,{name:"uneval",value:function(a){try{return"\\$1 = "+
ga(a)+";"}catch(b){v(b)}}});f(p,{name:"define",value:void 0});f(p,{name:"module",value:void 0});var g=[],n=X.of(d);if(!u){f(p,{name:"window",value:"context",overwrite:!0});var D={window:window};e(z(D),function(a){var b=S(a,/^(.)/g,function(a){return Ha(a)});f(p,{name:"unsafe"+b,value:D[a]})});f(p,{name:"console",value:da()});f(p,{name:"cloneInto",value:function(a){return a}});f(p,{name:"exportFunction",value:function(a,b,c){c&&void 0!==c.defineAs&&(b[c.defineAs]=a);return a}});f(p,{name:"createObjectIn",
value:function(a,b){var c={};b&&void 0!==b.defineAs&&(a[b.defineAs]=c);return c}});f(g,{name:"GM_addStyle",value:X.addStyle});f(g,{name:"GM_deleteValue",value:n.deleteValue});f(g,{name:"GM_listValues",value:n.listValues});f(g,{name:"GM_getValue",value:n.getValue});f(g,{name:"GM_setValue",value:n.setValue});f(g,{name:"GM_log",value:X.log});f(g,{name:"GM_registerMenuCommand",value:n.registerMenuCommand});f(g,{name:"GM_unregisterMenuCommand",value:n.unregisterMenuCommand});f(g,{name:"GM_openInTab",value:n.openInTab});
f(g,{name:"GM_addValueChangeListener",value:n.addValueChangeListener});f(g,{name:"GM_removeValueChangeListener",value:n.removeValueChangeListener});f(g,{name:"GM_xmlhttpRequest",value:n.xmlhttpRequest});f(g,{name:"GM_download",value:n.download});f(g,{name:"GM_setClipboard",value:X.setClipboard});f(g,{name:"GM_getTab",value:n.getTab});f(g,{name:"GM_setTab",value:n.setTab});f(g,{name:"GM_saveTab",value:n.setTab});f(g,{name:"GM_getTabs",value:n.getTabs});f(g,{name:"GM_notification",value:n.notification});
f(g,{name:"GM_getResourceText",value:n.getResourceText});f(g,{name:"GM_getResourceURL",value:n.getResourceURL});f(g,{name:"window.close",context_prop:!0});f(g,{name:"window.focus",context_prop:!0})}f(g,{name:"GM_info",value:n.getInfo});p=aa(p,la(h.grant,ca(g,function(a){a.protect=!0;return a})));h.options.compat_prototypes&&((l||c)&&v("env: option: add toSource"),b.Object.prototype.toSource||Y(b.Object.prototype,{toSource:{value:function(){var a=T.toType(this);if("String"===a)return'(String("'+S(this,
new b.RegExp('"',"g"),'\\"')+'"))';if("Number"===a)return'(Number("'+b.Number(this)+'"))';if("Array"===a){for(var a="(new Array(",c=0;c<this.length;c++){var d=T.toType(this[c]),a="Null"===d?a+"null":"Undefined"===d?a+"undefined":a+this[c].toSource();c+1<this.length&&(a+=",")}return a+"))"}return'JSON.parse(unescape("'+b.escape(ga(this))+'"))'},enumerable:!1,writable:!0,configurable:!0}}),(l||c)&&v("env: option: add some array generics"),e("indexOf lastIndexOf filter forEach every map some slice".split(" "),
function(a){if("function"!==typeof b.Array[a]){var c={};c[a]={value:function(c){return r(b.Array.prototype[a],c,r(ka.wrappedJSObject,arguments,[1]))},enumerable:!1,writable:!0,configurable:!0};Y(b.Array,c)}}));g="";if(u)n=new Window;else{var y=ba(p,function(a){U(a);ya(a);P(a,2,y.filterEvent)}),n={run_at:h.options.run_at,uuid:h.uuid},g="tms_"+S(h.uuid,/-/g,"_");B[g]=n;P(y.context,1,y.filterEvent,n);n=y.context}a.props[q].sandboxes[h.uuid]=n;a.props[q].elements[h.uuid]=p;(l||c)&&t("env: execute script "+
h.name+" @ the "+(u?"un":"")+"safe context now!");E(h,d.code,d.requires,a.props[q],u,g)}}}();(function(){if(y.external_connect){var a;if(a=window.external){var b=function(a,b){h.send("external.message",a,function(a){b&&b(a)})};Y(a,{Tampermonkey:{get:function(){return{getVersion:function(a){b({method:"getVersion"},a)},isInstalled:function(a,c,d){"function"===typeof c&&(d=c,c=null);b({method:"isInstalled",script:{name:a,namespace:c}},d)}}},configurable:!0}})}}})();h.onMessage.setListener(function(a){var b=
a.a;"load"==a.m?ba.runListeners():"DOMContentLoaded"==a.m?ba.runListeners():"setForeignAttr"==a.m?window[b.attr]=b.value:"port.message"==a.m?P.message(b):"executeScript"==a.m?ba.run(a.a):"cleanup"==a.m?h.cleanup():c&&v("env: unkown method",a)});c&&v("Tampermonkey started");e(a.scripts,function(a){ba.run(a)})}});
