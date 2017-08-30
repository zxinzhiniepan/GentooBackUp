window.requestFileSystem||(window.requestFileSystem=window.webkitRequestFileSystem);window.BlobBuilder||(window.BlobBuilder=window.WebKitBlobBuilder);
Registry.require("promise layout xmlhttprequest convert crcrc curtain layout/default/tabview layout/default/htmlutil helper i18n parser statistics layout/default/layout_helper".split(" "),function(){var I=rea.FEATURES,T=Registry.get("promise"),n=Registry.get("crcrc").cr,d=Registry.get("crcrc").crc,g=Registry.get("i18n"),C=Registry.get("curtain"),t=Registry.get("helper"),U=Registry.get("layout/default/tabview"),r=Registry.get("layout/default/htmlutil"),V=Registry.get("statistics"),E=Registry.get("layout"),
J=Registry.get("layout/default/layout_helper"),y=J.images;E.render(function(){J.addStyle();var l=null,K="???",D=null,L="0.0.0",A=function(){var a=document.getElementById("ask"),b=d("div","content_wrapper","ask","main");if(a){var c=a.parentNode;c.removeChild(a);c.appendChild(b);document.body.setAttribute("class","main")}var a=d("div","head_container","ask","head_container"),c=d("div","tv_container_fit","ask","tv_container"),h=n("a","head_link","ask","head_link");h.href="http://tampermonkey.net";h.target=
"_blank";var e=d("div","float","ask","head1"),f=d("img","banner","ask");f.src=rea.extension.getURL("images/icon128.png");var g=d("div","float head","ask","head2"),m=d("div","header_title","heading"),l=d("div","version","version","version");l.textContent=" by Jan Biniok";var k=n("div","search","box","");m.textContent="Tampermonkey";e.appendChild(f);g.appendChild(m);g.appendChild(l);h.appendChild(e);h.appendChild(g);a.appendChild(h);a.appendChild(k);b.appendChild(a);b.appendChild(c);b=U.create("_main",
c);a=n("div","main","main","tab_content_h");a.textContent=K;c=n("div","main","main","tab_content");b.appendTab(t.createUniqueId("main","main"),a,c).select();C.hide();return c},E=function(a){var b=a.script,c=d("div","viewer_bottom","bottom","");a=d("div","editor_400p_outer","editor",b.name);var h=d("div","editor_400p editor_border","editor",b.name);c.appendChild(a);a.appendChild(h);l.nocm?(a=d("textarea","editorta","editor",b.name),a.setAttribute("wrap","off"),h.appendChild(a),a.value=b.textContent):
window.setTimeout(function(){c.editor=new MirrorFrame(h,{value:b.textContent,noButtons:!0,matchBrackets:!0})},1);return c},W=function(){var a={};window.addEventListener("keydown",function(b){var d=!1;if("keydown"==b.type&&(a[b.keyCode]&&(d=a[b.keyCode](b)),d))return b.stopPropagation(),b.preventDefault(),!1},!0);return{registerListener:function(b,d){a[b]=d}}}(),w=function(a,b,c){t.select(c,function(a){return a.label}).forEach(function(c){var e=d("button",b,"tm",c.label);c.id&&e.setAttribute("data-btn-id",
c.id);if(c.icon){var f=n("img","tm",c.label,c.icon);f.src=y.get(c.icon);f.setAttribute("height","24px");e.appendChild(f)}f=n("span","tm",c.label,"label");f.textContent=c.label;e.appendChild(f);e.addEventListener("click",c.fn);a.appendChild(e);c.focus&&window.setTimeout(function(){$(e).focus()},300);c.keyDown&&W.registerListener(c.keyDown.keyCode?c.keyDown.keyCode:c.keyDown,c.keyDown.cb?c.keyDown.cb:c.fn)})},Y=function(a){var b=a.script,c=d("div","viewer_last","install"),h=d("div","viewer_content",
"install_content"),e=d("div","ask_action_buttons","install_buttons"),f=[];f.push({label:a.messages.action,fn:function(){k(l.aid,"install")},focus:!0});I.RUNTIME.CHROME&&21>I.RUNTIME.BROWSER_VERSION&&f.push({label:a.messages.flags.install?g.getMessage("Process_with_Chrome"):null,fn:function(){X(b.fileURL);$(c).hide()}});f.push({label:g.getMessage("Cancel"),fn:x,keyDown:27});w(e,"install",f);h.appendChild(e);c.appendChild(h);return c},Z=function(a){var b=d("div","viewer_last","import"),c=d("div","viewer_content",
"import_content"),h=d("div","ask_action_buttons import_buttons","import_buttons");w(h,"import",[{label:g.getMessage("Import"),fn:function(){var b=Object.keys(a.scripts).filter(function(a){return!!$("input[type=checkbox][data-import-id="+a+"]:checked").val()}),c=a.global_settings&&!!$("input[type=checkbox][data-import-id=global_settings]:checked").val();k(l.aid,"import",{data:{import_ids:b,global_settings:c}})},focus:!0},{label:g.getMessage("Cancel"),fn:x,keyDown:27}]);c.appendChild(h);b.appendChild(c);
c=d("div","section","btn");c.appendChild(b);return c},aa=function(a){a=d("div","viewer_last","ok");var b=d("div","viewer_content","ok_content"),c=d("div","ask_action_buttons","ok_buttons");w(c,"import",[{label:g.getMessage("Ok"),fn:x,focus:!0}]);b.appendChild(c);a.appendChild(b);return a},ba=function(a,b){var c=d("div","viewer_last","ok"),h=d("div","viewer_content","ok_content"),e=d("div","ask_action_buttons","ok_buttons");w(e,"permission",[{label:g.getMessage("Ok"),fn:function(){rea.permissions.request({permissions:[b.permission]},
function(a){rea.runtime.lastError&&console.warn("notify: error on getting permission",b.permission+"!","reason:",rea.runtime.lastError.message);k(l.aid,"permission",{data:{granted:a,permission:b.permission}})})},focus:!0},{label:g.getMessage("Cancel"),fn:x,keyDown:27}]);h.appendChild(e);c.appendChild(h);var h=d("div","viewer_upper","permission"),e=d("div","viewer_info viewer_info_wide","general","permission"),f=d("div","viewer_content","general_content","permission"),z=n("h3","install","heading",
"permission"),m=d("span","message","heading","permission");z.textContent=b.title;m.textContent=b.message;f.appendChild(m);e.appendChild(z);e.appendChild(f);h.appendChild(e);e=d("div","section","perm_src","permission");e.appendChild(h);e.appendChild(c);a.appendChild(e)},da=function(a,b){var c=Date.now(),h,e;b.timeout&&(h=window.setTimeout(function(){x();f()},b.timeout));var f=function(){var a;e&&window.clearInterval(e);h&&window.clearTimeout(h);e=h=null;(a=$("button[data-btn-id]")[0])&&a.parentNode.removeChild(a)},
z=d("div","viewer_last","ok"),m=d("div","viewer_content","ok_content"),M=d("div","ask_action_buttons","ok_buttons"),q=d("div","ask_action_buttons","ok_buttons"),p=d("div","ask_action_buttons","ok_buttons");w(M,"connect",[{label:g.getMessage("Allow_once"),icon:"button_ok",fn:function(){return k(l.aid,"connect",{data:{ok:!0,allow:!0,once:!0}})},focus:!0},{label:g.getMessage("Temporarily_allow"),icon:"clock",fn:function(){return k(l.aid,"connect",{data:{ok:!0,allow:!0,temporary:!0}})}},{label:b.hostname!=
b.domain?g.getMessage("Always_allow"):g.getMessage("Always_allow_domain"),icon:"edit_add",fn:function(){return k(l.aid,"connect",{data:{ok:!0,allow:!0}})}},function(){return b.hostname!=b.domain?{label:g.getMessage("Always_allow_domain"),icon:"edit_add",fn:function(){return k(l.aid,"connect",{data:{ok:!0,allow:!0,whole_domain:!0}})}}:null}(),function(){return b.all_domains?{label:g.getMessage("Always_allow_all_domains"),icon:"critical",fn:function(){f();if(window.confirm(g.getMessage("This_gives_this_script_the_permission_to_retrieve_and_send_data_from_and_to_every_webpage__This_is_potentially_unsafe__Are_you_sure_you_want_to_continue_")))return k(l.aid,
"connect",{data:{ok:!0,allow:!0,all_domains:!0}})}}:null}()].filter(function(a){return a}));w(q,"connect",[{label:g.getMessage("Forbid_once"),icon:"cancel",fn:function(){return k(l.aid,"connect",{data:{ok:!0,deny:!0,once:!0}})},keyDown:27},{label:b.hostname!=b.domain?g.getMessage("Always_forbid"):g.getMessage("Always_forbid_domain"),icon:"no",fn:function(){return k(l.aid,"connect",{data:{ok:!0,deny:!0}})}},function(){return b.hostname!=b.domain?{label:g.getMessage("Always_forbid_domain"),icon:"no",
fn:function(){return k(l.aid,"connect",{data:{ok:!0,deny:!0,whole_domain:!0}})}}:null}(),{label:g.getMessage("Dont_ask_again"),icon:"exit",fn:function(){return k(l.aid,"connect",{data:{ok:!0,deny:!0,all_domains:!0}})}}].filter(function(a){return a}));w(p,"connect_misc",[function(){return b.tabid?{label:g.getMessage("Focus_tab"),icon:"windowlist",fn:function(){ca("focus_tab",{tabid:b.tabid})}}:null}(),function(){if(b.timeout)return e=window.setInterval(function(){var a;(a=$("button[data-btn-id]")[0])&&
$(a).find("span").text(g.getMessage("Skip_timeout__0seconds0_seconds_",Math.round((b.timeout+c-Date.now())/1E3)))},1E3),{label:g.getMessage("Skip_timeout__0seconds0_seconds_",Math.round(b.timeout/1E3)),id:"skip_timeout_button",fn:f}}()].filter(function(a){return a}));var r=d("div","viewer_upper","connect"),u=d("div","viewer_info viewer_info_wide","general","connect"),v=d("div","viewer_content","general_content","connect"),F=n("h3","install","heading","connect"),N=d("span","message","heading","connect");
if(b.script.icon){var B=n("img","version","heading","connect");B.src=b.script.icon;F.appendChild(B)}F.textContent=g.getMessage("A_userscript_wants_to_access_a_cross_origin_resource_");var B=d("div","ask_action_buttons message","help","connect"),O=n("div","help","connect"),G=g.getMessage("A_request_to_a_cross_origin_resource_is_nothing_unusual__You_just_have_to_check_whether_this_script_has_a_good_reason_to_access_this_domain__For_example_there_are_only_a_very_few_reasons_for_a_userscript_to_contact_your_bank__Please_note_that_userscript_authors_can_avoid_this_dialog_by_adding_@connect_tags_to_their_scripts__You_can_change_your_opinion_at_any_time_at_the_scripts_settings_tab_",
b.connect_url,b.settings_url),G=G.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/\[url=([^\]]+)\](.*)\[\/url\]/g,'<a target="_blank" href="$1">$2 &#x2B00;</a>').replace(/\n/g,"<br>");O.innerHTML=G+"<br><br>";B.appendChild(O);m.appendChild([p,B,M,q]);z.appendChild(m);var P=d("table","script_desc","connect");[{prop:"name",label:g.getMessage("Name")},{prop:"src_url",label:g.getMessage("Tab_URL")},{prop:"hostname",label:g.getMessage("Destination_domain")},{prop:"url",label:g.getMessage("Destination_URL")}].forEach(function(a){var c=
b[a.prop]||b.script[a.prop]||a.value,f=d("tr","script_desc",a.prop,"connect"),e=d("td","script_desc",a.prop,"connectdt"),h=d("td","script_desc",a.prop,"connectdd");e.textContent=a.label?a.label:"";h.textContent=c||g.getMessage("_not_set_");f.appendChild(e);f.appendChild(h);P.appendChild(f)});N.appendChild(P);v.appendChild(N);u.appendChild(F);u.appendChild(v);r.appendChild(u);m=d("div","section","connect_src","connect");m.appendChild(r);m.appendChild(z);a.appendChild(m)},fa=function(a,b){a.appendChild(Z(b));
if(b.global_settings){var c=d("div","viewer_upper","");ea({content:c,checkbox:"import",key:"global_settings"});a.appendChild(c)}b.scripts&&Object.keys(b.scripts).forEach(function(c){var e=b.scripts[c],f=d("div","viewer_upper",c);H({content:f,preparat:e,checkbox:"import",key:c},!0);a.appendChild(f)})},Q=function(a,b){var c=n("input",a+"_",b,"",!0);c.setAttribute("data-import-id",b);c.checked=!0;c.type="checkbox";c.addEventListener("click",function(a){(a.ctrlKey||a.metaKey)&&$("input[type=checkbox][data-import-id!="+
b+"]").prop("checked",c.checked)});return c},ea=function(a){var b=a.key,c=a.content,h=d("div","viewer_upper",b),e=d("div","viewer_info viewer_info_wide","general",b),f=d("div","viewer_content","general_content",b),l=n("h3","install","heading",b);a.checkbox&&l.appendChild(Q(a.checkbox,a.key));a=n("img","version","heading",b);a.src=rea.extension.getURL("images/icon128.png");l.appendChild(a);a=n("span","name","heading",b);a.textContent=g.getMessage("Global_Settings");l.appendChild(a);e.appendChild(l);
l=d("table","script_desc",b);a=d("tr","settings_desc","action",b);var m=d("td","settings_desc","action",b+"dt"),k=d("td","settings_desc","action",b+"dd");m.textContent=g.getMessage("Action");k.textContent=g.getMessage("Global_settings_import");a.appendChild(m);a.appendChild(k);l.appendChild(a);a=d("tr","settings_desc","warning",b);m=d("td","settings_desc","warning",b+"dt");k=d("td","settings_desc","warning",b+"dd");m.innerHTML='<img src="'+y.get("critical")+'"></img>&nbsp;';k.textContent=g.getMessage("This_will_overwrite_your_global_settings_");
a.appendChild(m);a.appendChild(k);l.appendChild(a);f.appendChild(l);e.appendChild(f);h.appendChild(e);b=d("div","section","settings_src");b.appendChild(h);c.appendChild(b)},H=function(a,b){var c=a.preparat,h=a.content,e=c.script||{},f=e.uuid||e.id||e.name;c.short_info||(c.short_info=[]);var l=d("div","viewer_upper",f),m=d("div","viewer_info "+(b?"viewer_info_wide":"viewer_info_multiple"),"general",f),k=d("div","viewer_content","general_content",f),q=n("h3","install","heading",f);a.checkbox&&q.appendChild(Q(a.checkbox,
a.key));if(e.icon||e.icon64){var p=n("img","version","heading",f);p.src=e.icon||e.icon64;q.appendChild(p)}p=n("span","name","heading",f);p.textContent=c.heading||e.name||"";q.appendChild(p);e.version&&(p=d("span","view_version","heading",f),p.textContent="v"==e.version[0]?"":"v",p.textContent+=e.version,q.appendChild(p));m.appendChild(q);b&&c.short_info.unshift({prop:"heading",value:c.messages.heading,label:g.getMessage("Action")});var t=d("table","script_desc",f);c.short_info.forEach(function(a){var c=
e[a.prop]||a.value;if(c||!b){var h=d("tr","script_desc",a.prop,f),l=d("td","script_desc",a.prop,f+"dt"),k=d("td","script_desc",a.prop,f+"dd");l.textContent=a.label?a.label:"";k.textContent=c||g.getMessage("_not_set_");h.appendChild(l);h.appendChild(k);t.appendChild(h)}});k.appendChild(t);var q=d("div","viewer_info viewer_info_multiple","info",f),u;b?u=k:(u=d("div","viewer_content","info_content",f),p=n("h4","action","heading",f),p.textContent=c.messages.heading,u.appendChild(p));var v=0;["errors",
"warnings","info"].forEach(function(a){var b=n("table",a,f+v);(c.messages[a]||[]).forEach(function(c){v++;var d=n("tr",a,f+v),e=n("td",a,f+"dt"+v),h=n("td",a,f+"dd"+v);"info"==a?c.label&&c.value?(e.textContent=c.label,h.textContent=c.value):(e.innerHTML='<img src="'+y.get("info")+'"></img>&nbsp;',h.innerHTML=r.safeTagsReplace(c).replace(/\n/,"<br />")):"warnings"==a?(e.innerHTML='<img src="'+y.get("critical")+'"></img>&nbsp;',h.innerHTML=r.safeTagsReplace(c).replace(/\n/,"<br />")):"errors"==a&&(e.innerHTML=
'<img src="'+y.get("error")+'"></img>&nbsp;',h.innerHTML=r.safeTagsReplace(c).replace(/\n/,"<br />"));d.appendChild(e);d.appendChild(h);b.appendChild(d)});u.appendChild(b)});p=function(a,b,c,h){var l=n("table",a,f),k=0,m={};b.forEach(function(b){if(!(k>h||m[b])){m[b]=!0;var e=d("tr",a+"desc",b,f+k),g=d("td",a+"desc",b,f+k+"dt"),n=d("td",a+"desc",b,f+k+"dd");g.innerHTML=0==k?r.safeTagsReplace(c.label):"&nbsp;";n.innerHTML=k==h?'<span title="'+r.safeTagsReplace(c.warning)+'">...!</span>':r.safeTagsReplace(b);
e.appendChild(g);e.appendChild(n);l.appendChild(e);k++}});if(e.options&&(b=e.options.override&&e.options.override["use_"+a])&&b.length){b=d("tr",a+"desc","ovverride",f+k);var p=d("td",a+"desc","ovverride",f+k+"dt"),q=d("td",a+"desc","ovverride",f+k+"dd");p.innerHTML=0==k?r.safeTagsReplace(c.label):"&nbsp;";q.innerHTML=r.safeTagsReplace(" ("+g.getMessage("overwritten_by_user")+")");b.appendChild(p);b.appendChild(q);l.appendChild(b)}u.appendChild(l)};p("includes",(e.includes||[]).concat(e.matches||
[]),{label:g.getMessage("Include_s__"),warning:g.getMessage("Attention_Can_not_display_all_includes_")},5);p("excludes",e.excludes||[],{label:g.getMessage("Exclude_s__"),warning:g.getMessage("Attention_Can_not_display_all_excludes_")},3);m.appendChild(k);q.appendChild(u);l.appendChild(m);l.appendChild(q);m=d("div","section",f,"install_src");m.appendChild(l);a.install&&m.appendChild(a.install(c));a.editor&&m.appendChild(a.editor(c));h.appendChild(m)},X=function(a){k(l.aid,"abort");window.setTimeout(function(){window.location=
a+"#bypass=true"},10)},x=function(a){k(l.aid,"abort");window.setTimeout(function(){window.close()},3E3)},R=function(a,b){k(l.aid,"unload");D&&(window.clearInterval(D),D=null);window.removeEventListener("unload",R)};window.addEventListener("unload",R);var S=function(){window.location.search||window.location.hash?(l=t.getUrlArgs(),l.aid?(k(l.aid,"preparat").done(function(a){a.ext&&a.ext.version&&(L=a.ext.version);a.i18n&&g.setLocale(a.i18n);if(a.options&&(a.options.statistics_enabled&&V.init("ask",
L),a.options.layout_user_css)){var b=document.createElement("style");b.innerHTML=a.options.layout_user_css;(document.head||document.body||document.documentElement||document).appendChild(b)}K=g.getMessage("Install");b=null;a.preparat&&("install"==a.type?b=function(){H({content:A(),preparat:a.preparat,install:Y,editor:E})}:"install_error"==a.type?b=function(){H({content:A(),preparat:a.preparat,install:aa},!0)}:"import"==a.type?b=function(){fa(A(),a.preparat)}:"permission"==a.type?b=function(){ba(A(),
a.preparat)}:"connect"==a.type&&(b=function(){da(A(),a.preparat)}),D=window.setInterval(ga,3E3),b&&window.setTimeout(b,1))}).fail(function(){x()}),C.wait(g.getMessage("Please_wait___"))):x()):window.onhashchange=function(){S()}},ga=function(){return k(l.aid,"ping",{bg:!0})},k=function(a,b,c){c=c||{};var d=T();try{var e={aid:a,method:b};c.data&&t.each(c.data,function(a,b){e[b]=c.data[b]});sendMessage({method:"askCom",data:e},function(a){c.bg||C.hide();a.error?(a.please_close&&window.setTimeout(window.close,
100),d.reject(a)):d.resolve(a)});c.bg||C.wait(g.getMessage("Please_wait___"))}catch(f){console.warn("sS: "+f.message),d.reject()}return d.promise()},ca=function(a,b,c){try{sendMessage(t.assign({method:"buttonPress",name:a},b),function(a){c&&c(a)})}catch(d){console.log("button: "+d.message)}};rea.extension.onMessage.addListener(function(a,b,c){if("confirm"==a.method)t.confirm(a.msg,function(a){c({confirm:a})});else if("showMsg"==a.method)t.alert(a.msg),c({});else return!1;return!0});S()})});
