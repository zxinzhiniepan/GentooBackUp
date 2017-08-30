(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }





  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") { r = Reflect.decorate(decorators, target, key, desc); }
      else { for (var i = decorators.length - 1; i >= 0; i--) { if (d = decorators[i]) { r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r; } } }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }





  function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) { throw new TypeError("Generator is already executing."); }
          while (_) { try {
              if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) { return t; }
              if (y = 0, t) { op = [0, t.value]; }
              switch (op[0]) {
                  case 0: case 1: t = op; break;
                  case 4: _.label++; return { value: op[1], done: false };
                  case 5: _.label++; y = op[1]; op = [0]; continue;
                  case 7: op = _.ops.pop(); _.trys.pop(); continue;
                  default:
                      if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                      if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                      if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                      if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                      if (t[2]) { _.ops.pop(); }
                      _.trys.pop(); continue;
              }
              op = body.call(thisArg, _);
          } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
          if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
      }
  }





  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) { return o; }
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) { ar.push(r.value); }
      }
      catch (error) { e = { error: error }; }
      finally {
          try {
              if (r && !r.done && (m = i["return"])) { m.call(i); }
          }
          finally { if (e) { throw e.error; } }
      }
      return ar;
  }



  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }

  var JSocket = (function () {
      function JSocket() {
      }
      JSocket.init = function () {
          return __awaiter(this, void 0, void 0, function () {
              var src, flash, div, api;
              return __generator(this, function (_a) {
                  src = 'https://imspace.nos-eastchina1.126.net/JSocket2.swf';
                  flash = ['<object type="application/x-shockwave-flash" ', 'id="jsocket" ', 'name="jsocket" ', 'align="middle" ', 'allowscriptaccess="always" ', 'allowfullscreen="true" ', 'allowfullscreeninteractive="true" ', 'wmode="transparent" ', 'data="' + src + '" ', 'width="100%" ', 'height="100%">', '<param name="src" value="' + src + '">', '<param name="quality" value="high">', '<param name="bgcolor" value="#fff">', '<param name="allowscriptaccess" value="always">', '<param name="allowfullscreen" value="true">', '<param name="wmode" value="transparent">', '<param name="allowFullScreenInteractive" value="true">', '<param name="flashvars" value="">', "</object>"].join("");
                  div = document.createElement('div');
                  div.className = 'jsocket-cls';
                  document.body.appendChild(div);
                  JSocket.el = div;
                  div.innerHTML = flash;
                  api = document.querySelector('#jsocket');
                  console.log(div, api);
                  JSocket.flashapi = api;
                  if (JSocket.flashapi.newsocket) {
                      return [2];
                  }
                  else {
                      return [2, new Promise(function (res, rej) {
                              var id = setTimeout(rej, 10 * 1000);
                              JSocket.swfloadedcb = function () {
                                  clearTimeout(id);
                                  res();
                              };
                          })];
                  }
                  return [2];
              });
          });
      };
      JSocket.swfloaded = function () {
          JSocket.swfloadedcb();
      };
      JSocket.connectHandler = function (socid) {
          JSocket.handlers[socid].connectHandler();
      };
      JSocket.dataHandler = function (socid, data) {
          try {
              JSocket.handlers[socid].dataHandler(atob(data));
          }
          catch (e) {
              console.error(e);
          }
      };
      JSocket.closeHandler = function (socid) {
          JSocket.handlers[socid].closeHandler();
      };
      JSocket.errorHandler = function (socid, str) {
          JSocket.handlers[socid].errorHandler(str);
      };
      JSocket.prototype.init = function (handlers, newsocketopt) {
          this.socid = JSocket.flashapi.newsocket(newsocketopt);
          JSocket.handlers[this.socid] = handlers;
      };
      JSocket.prototype.connect = function (host, port) {
          JSocket.flashapi.connect(this.socid, host, port);
      };
      JSocket.prototype.write = function (data) {
          JSocket.flashapi.write(this.socid, btoa(data));
      };
      JSocket.prototype.writeFlush = function (data) {
          JSocket.flashapi.writeFlush(this.socid, btoa(data));
      };
      JSocket.prototype.close = function () {
          JSocket.flashapi.close(this.socid);
      };
      JSocket.prototype.flush = function () {
          JSocket.flashapi.flush(this.socid);
      };
      JSocket.VERSION = '0.1';
      JSocket.handlers = [];
      return JSocket;
  }());
  window.JSocket = JSocket;

  var _this$1 = window;
  function utf8ToUtf16(utf8_bytes) {
      var unicode_codes = [];
      var unicode_code = 0;
      var num_followed = 0;
      for (var i_1 = 0; i_1 < utf8_bytes.length; ++i_1) {
          var utf8_byte = utf8_bytes[i_1];
          if (utf8_byte >= 0x100) {
          }
          else if ((utf8_byte & 0xC0) == 0x80) {
              if (num_followed > 0) {
                  unicode_code = (unicode_code << 6) | (utf8_byte & 0x3f);
                  num_followed -= 1;
              }
              else {
              }
          }
          else {
              if (num_followed == 0) {
                  unicode_codes.push(unicode_code);
              }
              else {
              }
              if (utf8_byte < 0x80) {
                  unicode_code = utf8_byte;
                  num_followed = 0;
              }
              else if ((utf8_byte & 0xE0) == 0xC0) {
                  unicode_code = utf8_byte & 0x1f;
                  num_followed = 1;
              }
              else if ((utf8_byte & 0xF0) == 0xE0) {
                  unicode_code = utf8_byte & 0x0f;
                  num_followed = 2;
              }
              else if ((utf8_byte & 0xF8) == 0xF0) {
                  unicode_code = utf8_byte & 0x07;
                  num_followed = 3;
              }
              else {
              }
          }
      }
      if (num_followed == 0) {
          unicode_codes.push(unicode_code);
      }
      else {
      }
      unicode_codes.shift();
      var utf16_codes = [];
      for (var i = 0; i < unicode_codes.length; ++i) {
          unicode_code = unicode_codes[i];
          if (unicode_code < (1 << 16)) {
              utf16_codes.push(unicode_code);
          }
          else {
              var first = ((unicode_code - (1 << 16)) / (1 << 10)) + 0xD800;
              var second = (unicode_code % (1 << 10)) + 0xDC00;
              utf16_codes.push(first);
              utf16_codes.push(second);
          }
      }
      return utf16_codes;
  }
  function utf8_to_ascii(str) {
      var char2bytes = function (unicode_code) {
          var utf8_bytes = [];
          if (unicode_code < 0x80) {
              utf8_bytes.push(unicode_code);
          }
          else if (unicode_code < (1 << 11)) {
              utf8_bytes.push((unicode_code >>> 6) | 0xC0);
              utf8_bytes.push((unicode_code & 0x3F) | 0x80);
          }
          else if (unicode_code < (1 << 16)) {
              utf8_bytes.push((unicode_code >>> 12) | 0xE0);
              utf8_bytes.push(((unicode_code >> 6) & 0x3f) | 0x80);
              utf8_bytes.push((unicode_code & 0x3F) | 0x80);
          }
          else if (unicode_code < (1 << 21)) {
              utf8_bytes.push((unicode_code >>> 18) | 0xF0);
              utf8_bytes.push(((unicode_code >> 12) & 0x3F) | 0x80);
              utf8_bytes.push(((unicode_code >> 6) & 0x3F) | 0x80);
              utf8_bytes.push((unicode_code & 0x3F) | 0x80);
          }
          return utf8_bytes;
      };
      var o = [];
      for (var i = 0; i < str.length; i++) {
          o = o.concat(char2bytes(str.charCodeAt(i)));
      }
      return o.map(function (i) { return String.fromCharCode(i); }).join('');
  }
  function ascii_to_utf8(str) {
      var bytes = str.split('').map(function (i) { return i.charCodeAt(0); });
      return utf8ToUtf16(bytes).map(function (i) { return String.fromCharCode(i); }).join('');
  }


  function getURL(src) {
      if (src.substr(0, 5) !== 'blob:') {
          src = chrome.runtime.getURL(src);
      }
      return src;
  }



  var p32 = function (i) { return [i, i / 256, i / 65536, i / 16777216].map(function (i) { return String.fromCharCode(Math.floor(i) % 256); }).join(''); };
  var u32 = function (s) { return s.split('').map(function (i) { return i.charCodeAt(0); }).reduce(function (a, b) { return b * 256 + a; }); };
  var messageMap = {};
  function onMessage(type, cb) {
      messageMap[type] = cb;
  }
  function postMessage(type, data) {
      window.postMessage({
          type: type,
          data: data
      }, "*");
  }
  var msgCallbacks = [];
  var lastCbId = 0;

  window.addEventListener('message', function (event) { return __awaiter(_this$1, void 0, void 0, function () {
      var data, cb, result;
      return __generator(this, function (_a) {
          switch (_a.label) {
              case 0:
                  if (event.source != window)
                      { return [2]; }
                  data = event.data;
                  if (!data.cb) { return [3, 1]; }
                  cb = msgCallbacks[data.cbId];
                  if (cb && (typeof cb === 'function')) {
                      cb(data.cbResult);
                  }
                  return [3, 4];
              case 1:
                  if (!data.type) { return [3, 4]; }
                  result = undefined;
                  if (!(typeof messageMap[data.type] === 'function')) { return [3, 4]; }
                  result = messageMap[data.type](data.data);
                  if (!(result instanceof Promise)) { return [3, 3]; }
                  return [4, result];
              case 2:
                  result = _a.sent();
                  _a.label = 3;
              case 3:
                  if (data.cbId) {
                      window.postMessage({
                          cb: true,
                          cbId: data.cbId,
                          cbResult: result
                      }, '*');
                  }
                  _a.label = 4;
              case 4: return [2];
          }
      });
  }); }, false);
  function retry(promise, times) {
      return __awaiter(this, void 0, void 0, function () {
          var err, i, e_1;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      err = [];
                      i = 0;
                      _a.label = 1;
                  case 1:
                      if (!(i < times)) { return [3, 6]; }
                      _a.label = 2;
                  case 2:
                      _a.trys.push([2, 4, , 5]);
                      return [4, promise()];
                  case 3: return [2, _a.sent()];
                  case 4:
                      e_1 = _a.sent();
                      err.push(e_1);
                      return [3, 5];
                  case 5:
                      i++;
                      return [3, 1];
                  case 6: throw err;
              }
          });
      });
  }
  function getSync() {
      return new Promise(function (res, rej) {
          if (chrome && chrome.storage && chrome.storage.sync) {
              chrome.storage.sync.get(function (items) {
                  res(items);
              });
          }
          else {
              rej(new Error('不支持的存储方式'));
          }
      });
  }



  var defaultBgListener = function (request) { return __awaiter(_this$1, void 0, void 0, function () { return __generator(this, function (_a) {
      return [2, null];
  }); }); };
  var bgListener = defaultBgListener;

  function md5cycle(x, k) {
      var a = x[0], b = x[1], c = x[2], d = x[3];
      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);
      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);
      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);
      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);
      x[0] = add32(a, x[0]);
      x[1] = add32(b, x[1]);
      x[2] = add32(c, x[2]);
      x[3] = add32(d, x[3]);
  }
  function cmn(q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32((a << s) | (a >>> (32 - s)), b);
  }
  function ff(a, b, c, d, x, s, t) {
      return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }
  function gg(a, b, c, d, x, s, t) {
      return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }
  function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
  }
  function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }
  function md51(s) {
      var txt = '';
      var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i;
      for (i = 64; i <= s.length; i += 64) {
          md5cycle(state, md5blk(s.substring(i - 64, i)));
      }
      s = s.substring(i - 64);
      var tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (i = 0; i < s.length; i++)
          { tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3); }
      tail[i >> 2] |= 0x80 << ((i % 4) << 3);
      if (i > 55) {
          md5cycle(state, tail);
          for (i = 0; i < 16; i++)
              { tail[i] = 0; }
      }
      tail[14] = n * 8;
      md5cycle(state, tail);
      return state;
  }
  function md5blk(s) {
      var md5blks = [], i;
      for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
  }
  var hex_chr = '0123456789abcdef'.split('');
  function rhex(n) {
      var s = '', j = 0;
      for (; j < 4; j++)
          { s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F]; }
      return s;
  }
  function hex(x) {
      return x.map(rhex).join('');
  }
  function md5(s) {
      return hex(md51(s));
  }
  var add32 = function (a, b) {
      return (a + b) & 0xFFFFFFFF;
  };
  if (md5('hello') != '5d41402abc4b2a76b9719d911017c592') {
      add32 = function (x, y) {
          var lsw = (x & 0xFFFF) + (y & 0xFFFF), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return (msw << 16) | (lsw & 0xFFFF);
      };
  }

  var getACF = function (key) {
      try {
          return new RegExp("acf_" + key + "=(.*?);").exec(document.cookie)[1];
      }
      catch (e) {
          return '';
      }
  };
  function filterEnc(s) {
      s = s.toString();
      s = s.replace(/@/g, '@A');
      return s.replace(/\//g, '@S');
  }
  function filterDec(s) {
      s = s.toString();
      s = s.replace(/@S/g, '/');
      return s.replace(/@A/g, '@');
  }
  function douyuEncode(data) {
      return Object.keys(data).map(function (key) { return key + "@=" + filterEnc(data[key]); }).join('/') + '/';
  }
  function douyuDecode(data) {
      var out = {
          type: '!!missing!!'
      };
      try {
          data.split('/').filter(function (i) { return i.length > 2; }).forEach(function (i) {
              var e = i.split('@=');
              out[e[0]] = filterDec(e[1]);
          });
      }
      catch (e) {
          console.error(e);
          console.log(data);
      }
      return out;
  }
  function ACJ(id, data) {
      if (typeof data == 'object') {
          data = douyuEncode(data);
      }
      try {
          window._ACJ_([id, data]);
      }
      catch (e) {
          console.error(id, data, e);
      }
  }
  var DouyuProtocol = (function (_super) {
      __extends(DouyuProtocol, _super);
      function DouyuProtocol(listener) {
          var _this = _super.call(this) || this;
          _this.listener = listener;
          _this.connectHandler = function () { return null; };
          _this.init(_this, {});
          _this.buffer = '';
          return _this;
      }
      DouyuProtocol.prototype.connectAsync = function (host, port) {
          var _this = this;
          _super.prototype.connect.call(this, host, port);
          return new Promise(function (res, rej) {
              var prevConnHandler = _this.connectHandler;
              var prevErrHandler = _this.errorHandler;
              var recover = function () {
                  _this.connectHandler = prevConnHandler;
                  _this.errorHandler = prevErrHandler;
              };
              _this.connectHandler = function () {
                  recover();
                  res();
              };
              _this.errorHandler = function () {
                  recover();
                  rej();
              };
          });
      };
      DouyuProtocol.prototype.dataHandler = function (data) {
          var this$1 = this;

          this.buffer += data;
          var buffer = this.buffer;
          while (buffer.length >= 4) {
              var size = u32(buffer.substr(0, 4));
              if (buffer.length >= size) {
                  var pkgStr = '';
                  try {
                      pkgStr = ascii_to_utf8(buffer.substr(12, size - 8));
                  }
                  catch (e) {
                      console.log('deocde fail', escape(buffer.substr(12, size - 8)));
                  }
                  this$1.buffer = buffer = buffer.substr(size + 4);
                  if (pkgStr.length === 0)
                      { continue; }
                  try {
                      var pkg = douyuDecode(pkgStr);
                      this$1.listener && this$1.listener.onPackage(pkg, pkgStr);
                  }
                  catch (e) {
                      console.error('call map', e);
                  }
              }
              else {
                  break;
              }
          }
      };
      DouyuProtocol.prototype.closeHandler = function () {
          console.error('lost connection');
          this.listener && this.listener.onClose();
      };
      DouyuProtocol.prototype.errorHandler = function (err) {
          console.error(err);
          this.listener && this.listener.onError(err);
      };
      DouyuProtocol.prototype.send = function (data) {
          var msg = douyuEncode(data) + '\0';
          msg = utf8_to_ascii(msg);
          msg = p32(msg.length + 8) + p32(msg.length + 8) + p32(689) + msg;
          this.writeFlush(msg);
      };
      return DouyuProtocol;
  }(JSocket));
  function Type(type) {
      return function (target, propertyKey, descriptor) {
          if (!target.map) {
              target.map = {};
          }
          target.map[type] = target[propertyKey];
      };
  }
  var DouyuBaseClient = (function () {
      function DouyuBaseClient(roomId) {
          this.roomId = roomId;
          this.lastIP = null;
          this.lastPort = null;
          this.keepaliveId = null;
          this.redirect = {};
          this.prot = new DouyuProtocol(this);
      }
      DouyuBaseClient.getRoomArgs = function () {
          if (window._room_args)
              { return window._room_args; }
          if (window.room_args) {
              return window.room_args;
          }
          else {
              return window.$ROOM.args;
          }
      };
      DouyuBaseClient.prototype.reconnect = function () {
          return __awaiter(this, void 0, void 0, function () {
              var e_1;
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          console.log('reconnect');
                          this.prot.listener = null;
                          this.prot = new DouyuProtocol(this);
                          _a.label = 1;
                      case 1:
                          _a.trys.push([1, 3, , 4]);
                          return [4, this.connectAsync(this.lastIP, this.lastPort)];
                      case 2:
                          _a.sent();
                          return [3, 4];
                      case 3:
                          e_1 = _a.sent();
                          this.onError();
                          return [3, 4];
                      case 4: return [2];
                  }
              });
          });
      };
      DouyuBaseClient.prototype.onClose = function () {
          var _this = this;
          setTimeout(function () { return _this.reconnect(); }, 1000);
      };
      DouyuBaseClient.prototype.onError = function () {
          this.onClose();
      };
      DouyuBaseClient.prototype.onPackage = function (pkg, pkgStr) {
          var type = pkg.type;
          if (this.redirect[type]) {
              ACJ(this.redirect[type], pkg);
              return;
          }
          if (this.map[type]) {
              this.map[type].call(this, pkg, pkgStr);
              return;
          }
          this.onDefault(pkg);
      };
      DouyuBaseClient.prototype.onDefault = function (pkg) {
      };
      DouyuBaseClient.prototype.send = function (pkg) {
          this.prot.send(pkg);
      };
      DouyuBaseClient.prototype.connectAsync = function (ip, port) {
          return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                  switch (_a.label) {
                      case 0:
                          this.lastIP = ip;
                          this.lastPort = port;
                          return [4, this.prot.connectAsync(ip, port)];
                      case 1:
                          _a.sent();
                          this.send(this.loginreq());
                          return [2];
                  }
              });
          });
      };
      DouyuBaseClient.prototype.keepalivePkg = function () {
          return {
              type: 'keeplive',
              tick: Math.round(new Date().getTime() / 1000).toString()
          };
      };
      DouyuBaseClient.prototype.loginreq = function () {
          var rt = Math.round(new Date().getTime() / 1000);
          var devid = getACF('devid');
          var username = getACF('username');
          console.log('username', username, devid);
          return {
              type: 'loginreq',
              username: username,
              ct: 0,
              password: '',
              roomid: this.roomId,
              devid: devid,
              rt: rt,
              vk: md5(rt + "r5*^5;}2#${XF[h+;'./.Q'1;,-]f'p[" + devid),
              ver: '20150929',
              aver: '2017012111',
              biz: getACF('biz'),
              stk: getACF('stk'),
              ltkid: getACF('ltkid')
          };
      };
      DouyuBaseClient.prototype.startKeepalive = function () {
          var _this = this;
          this.send(this.keepalivePkg());
          if (this.keepaliveId) {
              clearInterval(this.keepaliveId);
          }
          this.keepaliveId = setInterval(function () { return _this.send(_this.keepalivePkg()); }, 30 * 1000);
      };
      return DouyuBaseClient;
  }());
  var blacklist = [];
  function onChatMsg(data) {
      if (blacklist.indexOf(data.uid) !== -1) {
          console.log('black');
          return;
      }
      try {
          postMessage('DANMU', data);
      }
      catch (e) {
          console.error('wtf', e);
      }
      ACJ('room_data_chat2', data);
      if (window.BarrageReturn) {
          window.BarrageReturn(douyuEncode(data));
      }
  }
  var DouyuClient = (function (_super) {
      __extends(DouyuClient, _super);
      function DouyuClient(roomId, danmuClient) {
          var _this = _super.call(this, roomId) || this;
          _this.danmuClient = danmuClient;
          _this.redirect = {
              qtlr: 'room_data_tasklis',
              initcl: 'room_data_chatinit',
              memberinfores: 'room_data_info',
              ranklist: 'room_data_cqrank',
              rsm: 'room_data_brocast',
              qausrespond: 'data_rank_score',
              frank: 'room_data_handler',
              online_noble_list: 'room_data_handler',
          };
          return _this;
      }
      DouyuClient.prototype.reqOnlineGift = function (loginres) {
          return {
              type: 'reqog',
              uid: loginres.userid
          };
      };
      DouyuClient.prototype.chatmsg = function (data) {
          onChatMsg(data);
      };
      DouyuClient.prototype.resog = function (data) {
          ACJ('room_data_chest', {
              lev: data.lv,
              lack_time: data.t,
              dl: data.dl
          });
      };
      DouyuClient.prototype.loginres = function (data) {
          console.log('loginres ms', data);
          this.uid = data.userid;
          this.send(this.reqOnlineGift(data));
          this.startKeepalive();
          ACJ('room_data_login', data);
          ACJ('room_data_getdid', {
              devid: getACF('devid')
          });
      };
      DouyuClient.prototype.keeplive = function (data, rawString) {
          ACJ('room_data_userc', data.uc);
          ACJ('room_data_tbredpacket', rawString);
      };
      DouyuClient.prototype.setmsggroup = function (data) {
          console.log('joingroup', data);
          this.danmuClient.send({
              type: 'joingroup',
              rid: data.rid,
              gid: data.gid
          });
      };
      DouyuClient.prototype.onDefault = function (data) {
          ACJ('room_data_handler', data);
          console.log('ms', data);
      };
      __decorate([
          Type('chatmsg')
      ], DouyuClient.prototype, "chatmsg", null);
      __decorate([
          Type('resog')
      ], DouyuClient.prototype, "resog", null);
      __decorate([
          Type('loginres')
      ], DouyuClient.prototype, "loginres", null);
      __decorate([
          Type('keeplive')
      ], DouyuClient.prototype, "keeplive", null);
      __decorate([
          Type('setmsggroup')
      ], DouyuClient.prototype, "setmsggroup", null);
      return DouyuClient;
  }(DouyuBaseClient));
  var DouyuDanmuClient = (function (_super) {
      __extends(DouyuDanmuClient, _super);
      function DouyuDanmuClient(roomId) {
          var _this = _super.call(this, roomId) || this;
          _this.redirect = {
              chatres: 'room_data_chat2',
              initcl: 'room_data_chatinit',
              dgb: 'room_data_giftbat1',
              dgn: 'room_data_giftbat1',
              spbc: 'room_data_giftbat1',
              uenter: 'room_data_nstip2',
              upgrade: 'room_data_ulgrow',
              newblackres: 'room_data_sys',
              ranklist: 'room_data_cqrank',
              rankup: 'room_data_ulgrow',
              gift_title: 'room_data_schat',
              rss: 'room_data_state',
              srres: 'room_data_wbsharesuc',
              onlinegift: 'room_data_olyw',
              gpbc: 'room_data_handler',
              synexp: 'room_data_handler',
              frank: 'room_data_handler',
              ggbb: 'room_data_sabonusget',
              online_noble_list: 'room_data_handler',
          };
          return _this;
      }
      DouyuDanmuClient.prototype.chatmsg = function (pkg) {
          onChatMsg(pkg);
      };
      DouyuDanmuClient.prototype.loginres = function (data) {
          console.log('loginres dm', data);
          this.startKeepalive();
      };
      DouyuDanmuClient.prototype.onDefault = function (data) {
          ACJ('room_data_handler', data);
          console.log('dm', data);
      };
      __decorate([
          Type('chatmsg')
      ], DouyuDanmuClient.prototype, "chatmsg", null);
      __decorate([
          Type('loginres')
      ], DouyuDanmuClient.prototype, "loginres", null);
      return DouyuDanmuClient;
  }(DouyuBaseClient));
  function hookDouyu(roomId, miscClient) {
      var oldExe;
      var repeatPacket = function (text) { return douyuDecode(text); };
      var jsMap = {
          js_getRankScore: repeatPacket,
          js_getnoble: repeatPacket,
          js_rewardList: {
              type: 'qrl',
              rid: roomId
          },
          js_queryTask: {
              type: 'qtlnq'
          },
          js_newQueryTask: {
              type: 'qtlq'
          },
          js_sendmsg: function (msg) {
              var pkg = douyuDecode(msg);
              pkg.type = 'chatmessage';
              return pkg;
          },
          js_giveGift: function (gift) {
              var pkg = douyuDecode(gift);
              if (pkg.type === 'dn_s_gf') {
                  pkg.type = 'sgq';
                  pkg.bat = 0;
              }
              console.log('giveGift', gift);
              return gift;
          },
          js_GetHongbao: repeatPacket,
          js_UserHaveHandle: function () { },
          js_myblacklist: function (list) {
              console.log('add blacklist', list);
              blacklist = list.split('|');
          },
          js_medal_opera: function (opt) {
              var pkg = douyuDecode(opt);
              return pkg;
          }
      };
      var api = window['require']('douyu/page/room/base/api');
      var hookd = function hookd() {
          var arguments$1 = arguments;

          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments$1[_i];
          }
          var req = jsMap[args[0]];
          if (req) {
              if (typeof req == 'function') {
                  req = req.apply(null, args.slice(1));
              }
              req && miscClient.send(req);
          }
          else {
              console.log('exe', args);
              try {
                  return oldExe.apply(api, args);
              }
              catch (e) { }
          }
      };
      if (api) {
          if (api.exe !== hookd) {
              oldExe = api.exe;
              api.exe = hookd;
          }
      }
      else if (window.thisMovie) {
          window.thisMovie = function () { return new Proxy({}, {
              get: function (target, key, receiver) {
                  return function () {
                      var arguments$1 = arguments;

                      var args = [];
                      for (var _i = 0; _i < arguments.length; _i++) {
                          args[_i] = arguments$1[_i];
                      }
                      return hookd.apply(null, [key].concat(args));
                  };
              }
          }); };
      }
  }
  function douyuApi(roomId) {
      return __awaiter(this, void 0, void 0, function () {
          var res, args, servers, mserver, ports, danmuServer, danmuClient, miscClient;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4, fetch('/swf_api/get_room_args')];
                  case 1:
                      res = _a.sent();
                      return [4, res.json()];
                  case 2:
                      args = _a.sent();
                      servers = JSON.parse(decodeURIComponent(args.server_config));
                      mserver = servers[Math.floor(Math.random() * servers.length)];
                      ports = [8601, 8602, 12601, 12602];
                      danmuServer = {
                          ip: 'danmu.douyu.com',
                          port: ports[Math.floor(Math.random() * ports.length)]
                      };
                      danmuClient = new DouyuDanmuClient(roomId);
                      miscClient = new DouyuClient(roomId, danmuClient);
                      return [4, danmuClient.connectAsync(danmuServer.ip, danmuServer.port)];
                  case 3:
                      _a.sent();
                      return [4, miscClient.connectAsync(mserver.ip, mserver.port)];
                  case 4:
                      _a.sent();
                      return [2, {
                              sendDanmu: function (content) {
                                  miscClient.send({
                                      col: '0',
                                      content: content,
                                      dy: '',
                                      pid: '',
                                      sender: miscClient.uid,
                                      type: 'chatmessage'
                                  });
                              },
                              serverSend: function (pkg) {
                                  return miscClient.send(pkg);
                              },
                              hookExe: function () {
                                  hookDouyu(roomId, miscClient);
                              }
                          }];
              }
          });
      });
  }

  function embedSWF(id, src) {
      var flash = [
          '<object type="application/x-shockwave-flash" ',
          "id=\"" + id + "\" ",
          'name="${id}" ',
          'align="middle" ',
          'allowscriptaccess="always" ',
          'allowfullscreen="true" ',
          'allowfullscreeninteractive="true" ',
          'wmode="transparent" ',
          "data=\"" + src + "\" ",
          'width="100%" ',
          'height="100%">',
          "<param name=\"src\" value=\"" + src + "\">",
          '<param name="quality" value="high">',
          '<param name="bgcolor" value="#fff">',
          '<param name="allowscriptaccess" value="always">',
          '<param name="allowfullscreen" value="true">',
          '<param name="wmode" value="transparent">',
          '<param name="allowFullScreenInteractive" value="true">',
          '<param name="flashvars" value="">',
          '</object>'
      ].join('');
      var div = document.createElement('div');
      div.className = 'big-flash-cls';
      document.body.appendChild(div);
      div.innerHTML = flash;
      return div;
  }

  var SignerState;
  (function (SignerState) {
      SignerState[SignerState["None"] = 0] = "None";
      SignerState[SignerState["Loaded"] = 1] = "Loaded";
      SignerState[SignerState["Ready"] = 2] = "Ready";
      SignerState[SignerState["Timeout"] = 3] = "Timeout";
  })(SignerState || (SignerState = {}));
  var Signer = (function () {
      function Signer() {
      }
      Signer.sign = function (rid, tt, did) {
          return this._flash.sign(rid, tt, did);
      };
      Object.defineProperty(Signer, "state", {
          get: function () {
              return Signer._state;
          },
          set: function (val) {
              if (Signer._state === SignerState.Timeout) {
                  return;
              }
              if (val !== Signer._state) {
                  Signer._state = val;
                  this.onStateChanged(Signer.state);
              }
              else {
                  Signer._state = val;
              }
          },
          enumerable: true,
          configurable: true
      });
      Signer.init = function () {
          var _this = this;
          embedSWF('signer', 'https://imspace.nos-eastchina1.126.net/signer.swf');
          this._flash = document.querySelector('#signer');
          window.setTimeout(function () {
              if (_this.state !== SignerState.Ready) {
                  _this.state = SignerState.Timeout;
              }
          }, 15 * 1000);
      };
      Signer._Loaded = function () {
          Signer.state = SignerState.Loaded;
      };
      Signer._Ready = function () {
          Signer.state = SignerState.Ready;
      };
      Signer._state = SignerState.None;
      Signer.onStateChanged = function () { return null; };
      return Signer;
  }());
  window.signerLoaded = Signer._Loaded;
  window.signerReady = Signer._Ready;

  var _this = window;
  function hookFunc(obj, funcName, newFunc) {
      var old = obj[funcName];
      obj[funcName] = function () {
          return newFunc.call(this, old.bind(this), Array.from(arguments));
      };
  }
  function getParam(flash, name) {
      var children = flash.children;
      for (var i = 0; i < children.length; i++) {
          var param = children[i];
          if (param.name == name) {
              return param.value;
          }
      }
      return '';
  }
  function getRoomIdFromFlash(s) {
      return s.split('&').filter(function (i) { return i.substr(0, 6) == 'RoomId'; })[0].split('=')[1];
  }
  hookFunc(document, 'createElement', function (old, args) {
      var ret = old.apply(null, args);
      if (args[0] == 'object') {
          hookFunc(ret, 'setAttribute', function (old, args) {
              if (args[0] == 'data') {
                  if (/WebRoom/.test(args[1])) {
                      setTimeout(function () {
                          var roomId = getRoomIdFromFlash(getParam(ret, 'flashvars'));
                          console.log('RoomId', roomId);
                          postMessage('VIDEOID', {
                              roomId: roomId,
                              id: ret.id
                          });
                      }, 1);
                  }
              }
              return old.apply(null, args);
          });
      }
      return ret;
  });
  Signer.onStateChanged = function (state) {
      if (state === SignerState.Ready) {
          postMessage('SIGNER_READY', true);
      }
      else if (state === SignerState.Timeout) {
          postMessage('SIGNER_READY', false);
      }
  };
  Signer.init();
  var api;
  onMessage('BEGINAPI', function (data) { return __awaiter(_this, void 0, void 0, function () {
      return __generator(this, function (_a) {
          switch (_a.label) {
              case 0: return [4, retry(function () { return JSocket.init(); }, 3)];
              case 1:
                  _a.sent();
                  return [4, douyuApi(data.roomId)];
              case 2:
                  api = _a.sent();
                  api.hookExe();
                  window.api = api;
                  return [2];
          }
      });
  }); });
  onMessage('SENDANMU', function (data) {
      api.sendDanmu(data);
  });
  onMessage('ACJ', function (data) {
      ACJ(data.id, data.data);
  });
  onMessage('SIGNAPI', function (data) {
      if (Signer.state !== SignerState.Ready) {
          throw new Error('Signer is not ready');
      }
      return Signer.sign(data.rid, data.tt, data.did);
  });

})));
