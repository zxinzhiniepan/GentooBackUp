var g;
if(!window.__idm_init__){var u=function(){var a=window.self===window.top;this.D=(this.O=a)?0:null;this.c=!1;this.s=this.l=null;this.J=[];this.L=this.h=!1;this.C=this.B=-1;this.N=1;this.g={};this.G=[];var b=chrome.runtime.connect({name:a?"top":"sub"});this.a=b;this.K=b.id||b.portId_||Math.ceil(1048575*Math.random());b.onMessage.addListener(this.onMessage.bind(this));b.onDisconnect.addListener(this.R.bind(this));this.b(window,"scroll",this.da);this.b(window,"blur",this.$);this.b(window,"keydown",this.H,
!0);this.b(window,"keyup",this.H,!0);this.b(window,"mousedown",this.aa,!0);this.b(window,"mouseup",this.ba,!0);this.b(document,"beforeload",this.Y,!0);this.b(document,"DOMContentLoaded",this.Z);a&&this.b(window,"resize",this.ca)};window.__idm_init__=!0;0<navigator.userAgent.indexOf("Edge/")&&(chrome=browser);var x={16:!0,17:!0,18:!0,45:!0,46:!0},C=["video","audio","object","embed"],D=new RegExp(atob("KD86eXRwbGF5ZXJcLmNvbmZpZ1xzKj18J1BMQVlFUl9DT05GSUcnXHMqOilccypcew==")),E=new RegExp(atob("XCI/dmlkZW9EYXRhXCI/XHMqOlxzKlxbXHs=")),
F=new RegExp(atob("InByb2dyZXNzaXZlIjpccypcWw=="));g=u.prototype;g.U=function(a,b,c,f){try{var d=document.activeElement,l=d&&0<=C.indexOf(d.localName)?d:null;l||(l=(d=document.elementFromPoint(this.B,this.C))&&0<=C.indexOf(d.localName)?d:null);for(var n=0,m,p,q,h,k=0;k<C.length;k++){for(var e=document.getElementsByTagName(C[k]),r=0;r<e.length;r++)if(d=e[r],3!=k||"application/x-shockwave-flash"==d.type.toLowerCase()){var t=d.src||d.data;if(t&&(t==a||t==b)){m=d;break}if(!l&&!p)if(!t||t!=c&&t!=f){var v=
d.clientWidth,w=d.clientHeight;if(v&&w){var y=d.getBoundingClientRect();if(!(0>=y.right+window.scrollX||0>=y.bottom+window.scrollY)){var z=window.getComputedStyle(d);if(!z||"hidden"!=z.visibility){var A=v*w;A>n&&1.35*v>w&&v<3*w&&(n=A,q=d);h||(h=d)}}}}else p=d}if(m)break}a=m||l||p||q||h;if(!a)return null;if("embed"==a.localName&&!a.clientWidth&&!a.clientHeight){var B=a.parentElement;"object"==B.localName&&(a=B)}return this.o(a)}catch(G){}};g.T=function(a,b,c){try{for(var f=[],d,f=Array.prototype.concat.apply(f,
document.getElementsByTagName("frame")),f=Array.prototype.concat.apply(f,document.getElementsByTagName("iframe")),l=0;l<f.length;l++){var n=f[l];if(parseInt(n.getAttribute("__idm_frm__"))==a){d=n;break}if(!d){var m=n.src;!m||m!=b&&m!=c||(d=n)}}return this.o(d)}catch(p){}};g.A=function(){var a=window.devicePixelRatio,b=document.width,c=document.body.scrollWidth;b&&c&&(a=b==c?0:b/c);return a};g.v=function(a){try{var b=a.getBoundingClientRect(),c=Math.round(b.width),f=Math.round(b.height),d;switch(a.localName){case "video":if(15>
c||10>f)return null;break;case "audio":if(!c&&!f)return null;d=!0}var l=document.documentElement,n=l.scrollHeight||l.clientHeight,m=Math.round(b.left)+a.clientLeft,p=Math.round(b.top)+a.clientTop;return m>=(l.scrollWidth||l.clientWidth)||p>=n||d&&!m&&!p?null:{left:m,top:p,right:m+c,bottom:p+f,zoom:this.A()}}catch(q){}};g.w=function(){this.a.postMessage([21,window.location.href])};g.m=function(a){if(a){if(!this.P){this.P=!0;this.b(window,"message",this.ea);var b=document.createElement("script");b.src=
chrome.extension.getURL("document.js");b.onload=function(){b.parentNode.removeChild(b)};document.documentElement.appendChild(b)}this.i(a)&&window.postMessage([1],"/")}else if("loading"==document.readyState)this.M=!0;else if(this.i()){this.M=!1;a=document.getElementsByTagName("script");for(var c=0;c<a.length;c++){b=a[c];if(!b.src&&D.test(b.innerText)){a=this.f();a=[34,a,-1,b.outerHTML];this.a.postMessage(a);break}if(!b.src&&E.test(b.innerText)){a=this.f();a=[34,a,-2,b.outerHTML];this.a.postMessage(a);
break}if(!b.src&&F.test(b.innerText)){a=this.f();a=[34,a,-2,b.outerHTML];this.a.postMessage(a);break}}}};g.ea=function(a){var b=a.data;Array.isArray(b)&&a.origin==(document.origin||location.origin)&&2==b[0]&&this.a.postMessage([34,b[1],-1,b[2]])};g.X=function(a){var b=a[2]||this.T(a[3],a[4],a[5]),c=b&&this.g[b],c=c&&this.v(c);this.a.postMessage([22,a[1],a[3],b,c])};g.W=function(a){if(this.i(a)){var b=!a[2],c=a[2]||this.U(a[3],a[4],a[5],a[6]);a=[23,a[1],c,!1];var f=c&&this.g[c];if(f){var d=this.v(f);
d&&(a[4]=d);b?(a[5]=f.localName,a[6]=f.src||f.data,a[7]=this.f()):d||document.contains(f)||(a[3]=!0,delete this.g[c])}this.a.postMessage(a)}};g.o=function(a){try{var b=parseInt(a.getAttribute("__idm_id__"));b||(b=this.K<<10|this.N++,a.setAttribute("__idm_id__",b));this.g[b]=a;return b}catch(c){return null}};g.f=function(a){if(!a||this.i(a)){var b;try{b=window.top.document.title}catch(c){}if(b)if(b=b.replace(/[ \t\r\n\u25B6]+/g," ").trim(),a)this.a.postMessage([24,a,b]);else return b}};g.j=function(a){if(!this.F){var b=
"\\b\\w+://(?:[%T]*(?::[%T]*)?@)?[%H.]+\\.[%H]+(?::\\d+)?(?:/(?:(?: +(?!\\w+:))?[%T/~;])*)?(?:\\?[%Q]*)?(?:#[%T]*)?".replace(/%\w/g,function(a){return this[a]}.bind({"%H":"\\w\\-\u00a0-\ufeff","%T":"\\w\\-.+*()$!,%\u00a0-\ufeff","%Q":"^\\s\\[\\]{}()"}));this.F=new RegExp(b,"gi")}for(var c=[];b=this.F.exec(a);)c.push(b.shift());return c};g.u=function(a,b,c){var f=[],d={},l="",n="",m=!c,p;if(c&&(p=a.getSelection(),!p||p.isCollapsed))return f;var q=a.getElementsByTagName("a");if(q)for(var h=0;h<q.length;h++){var k=
q[h];if(k&&(m||p.containsNode(k,!0)))try{var e=k.href;e&&!d[e]&&b.test(e)&&(d[e]=f.push([e,2,k.innerText||k.title]));c&&d[e]&&(l+=k.innerText,l+="\n")}catch(r){}}if(q=a.getElementsByTagName("area"))for(h=0;h<q.length;h++)if((k=q[h])&&(m||p.containsNode(k,!0)))try{(e=k.href)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,2,k.alt]))}catch(r){}if(q=m&&a.getElementsByTagName("iframe"))for(h=0;h<q.length;h++)if((k=q[h])&&(m||p.containsNode(k,!0)))try{(e=k.src)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,4]))}catch(r){}if(h=
c&&p.toString())for(k=this.j(h),l=this.j(l),h=0;h<k.length;h++)(e=k[h])&&!d[e]&&b.test(e)&&0>l.indexOf(e)&&(d[e]=f.push([e,1]));if(l=(m||!f.length)&&a.getElementsByTagName("img"))for(h=0;h<l.length;h++)if((k=l[h])&&(m||p.containsNode(k,!0)))try{(e=k.src)&&!d[e]&&b.test(e)&&(d[e]=f.push([e,3,"<<<=IDMTRANSMITIMGPREFIX=>>>"+k.alt])),m&&k.onclick&&(n+=k.onclick,n+="\n")}catch(r){}if(e=m&&a.getElementsByTagName("script")){for(h=0;h<e.length;h++)n+=e[h].innerText,n+="\n";for(n=this.j(n);n.length;)(e=n.shift())&&
!d[e]&&b.test(e)&&(d[e]=f.push([e,5]))}return f};g.V=function(a,b){for(var c=this.u(document,a,b),f=document.getElementsByTagName("iframe"),d=Array.prototype.push,l=0;l<f.length;l++)try{var n=f[l],m=n.contentDocument;m&&!n.src&&d.apply(c,this.u(m,a,b))}catch(p){}return c};g.H=function(a){x[a.keyCode]&&this.a.postMessage([31,a.keyCode,"keydown"==a.type])};g.aa=function(a){this.L&&this.a.postMessage([28]);if(0==a.button){var b=a.view.getSelection();this.h=b&&b.isCollapsed;this.a.postMessage([32,a.button,
!0])}};g.ba=function(a){if(0==a.button&&(this.B=a.clientX,this.C=a.clientY,this.a.postMessage([32,a.button,!1]),this.h)){this.h=!1;var b=a.view.getSelection();b&&!b.isCollapsed&&this.a.postMessage([26,a.clientX,a.clientY,this.A()])}};g.$=function(){this.h=!1;this.a.postMessage([33])};g.da=function(){this.a.postMessage([29])};g.ca=function(a){a=a.target;this.a.postMessage([30,a.innerWidth,a.innerHeight])};g.Y=function(a){var b=a.target,c=b.localName;0<=C.indexOf(c)&&a.url&&(b=this.o(b),this.a.postMessage([25,
b,c,a.url]))};g.Z=function(){this.c=!0;var a;try{a=window.top.document.getElementsByTagName("title")[0]}catch(c){}if(a){var b=this.l;b||(this.l=b=new MutationObserver(this.I.bind(this)));b.observe(a,{childList:!0})}this.M&&this.m()};g.I=function(a){this.c=!0;a&&(window.clearTimeout(this.s),this.s=null);a=this.J;for(var b;b=a.shift();)b.shift().apply(this,b)};g.S=function(){this.l&&this.c&&(this.c=!1,this.s=window.setTimeout(this.I.bind(this,!1),3E3))};g.i=function(){if(this.c)return!0;var a=Array.prototype.slice.call(arguments);
a.unshift(arguments.callee.caller);this.J.push(a);return!1};g.onMessage=function(a){switch(a[0]){case 11:var b=a[2];if(b){this.D=b;try{window.frameElement&&window.frameElement.setAttribute("__idm_frm__",b)}catch(f){}}a[3]&&this.w();a[4]&&this.m();break;case 17:this.S();a[1]&&this.w();a[2]&&this.m(!0);break;case 12:var b=this.V(a[4]?new RegExp(a[4],"i"):null,a[2]),c=[27,a[1],this.D,b.length];a[3]||(c[4]=b,c[5]=window.location.href,this.O&&(c[6]=window.location.href,c[7]=document.title));this.a.postMessage(c);
break;case 13:this.L=a[1];break;case 14:this.f(a[1]);break;case 15:this.W(a);break;case 16:this.X(a)}};g.b=function(a){var b=Array.prototype.slice.call(arguments);b[2]=b[2].bind(this);this.G.push(b);a.addEventListener.apply(a,b.slice(1))};g.R=function(){for(var a;a=this.G.shift();){var b=a.shift();b.removeEventListener.apply(b,a)}this.a=this.K=null;window.__idm_init__=!1};new u}!0;