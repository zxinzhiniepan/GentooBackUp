(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('flv.js')) :
  typeof define === 'function' && define.amd ? define(['flv.js'], factory) :
  (factory(global.flvjs));
}(this, (function (flv_js) { 'use strict';

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

  function hookFetchCode () {
    var self = this;
    var convertHeader = function convertHeader(headers) {
      var out = new Headers();
      for (var i = 0, list = Object.keys(headers); i < list.length; i += 1) {
        var key = list[i];

        out.set(key, headers[key]);
      }
      return out
    };
    var hideHookStack = function (stack) {
      return stack.replace(/^\s*at\s.*?hookfetch\.js:\d.*$\n/mg, '')
    };
    var wrapPort = function wrapPort (port) {
      var curMethod = '';
      var curResolve = null;
      var curReject = null;
      var stack = new Error().stack;
      port.onMessage.addListener(function (msg) {
        if (msg.method === curMethod) {
          if (msg.err) {
            // TODO 潜在安全性问题= =
            var ctor = new Function('return ' + msg.err.name)();
            var err = ctor(msg.err.message);
            err.stack = hideHookStack(stack);
            // console.log('fetch err', err)
            curReject(err);
          } else {
            curResolve.apply(null, msg.args);
          }
        } else {
          console.error('wtf?');
        }
      });
      return function (method, args) {
        return new Promise(function (resolve, reject) {
          curMethod = method;
          curResolve = resolve;
          curReject = reject;
          port.postMessage({
            method: method,
            args: args
          });
        })
      }
    };
    var bgFetch = function bgFetch() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var port = wrapPort(chrome.runtime.connect({name: "fetch"}));
      return port('fetch', args).then(function (r) {
        console.log(r);
        var hasReader = false;
        var requireReader = function (after) {
          if (hasReader) {
            return Promise.resolve().then(after)
          } else {
            return port('body.getReader').then(function () { return hasReader = true; }).then(after)
          }
        };
        r.json = function () { return port('json'); };
        r.headers = convertHeader(r.headers);
        r.body = {
          getReader: function getReader () {
            return {
              read: function read () {
                return requireReader(function () { return port('reader.read'); }).then(function (r) {
                  if (r.done == false) {
                    r.value = new Uint8Array(r.value);
                  }
                  return r
                })
              },
              cancel: function cancel () {
                return requireReader(function () { return port('reader.cancel'); })
              }
            }
          }
        };
        return r
      })
    };
    function hookFetch () {
      if (fetch !== bgFetch) {
        fetch = bgFetch;
      }
    }
    var oldBlob = Blob;
    var newBlob = function newBlob(a, b) {
      a[0] = "(" + hookFetchCode + ")();" + (a[0]);
      console.log('new blob', a, b);
      return new oldBlob(a, b)
    };
    // if(self.document !== undefined) {
    //   if (self.Blob !== newBlob) {
    //     self.Blob = newBlob
    //   }
    // }

    hookFetch();
  }
  if (typeof chrome !== 'undefined') {
    hookFetchCode();
  }

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
  function requestFullScreen() {
      var de = document.documentElement;
      if (de.requestFullscreen) {
          de.requestFullscreen();
      }
      else if (de.mozRequestFullScreen) {
          de.mozRequestFullScreen();
      }
      else if (de.webkitRequestFullScreen) {
          de.webkitRequestFullScreen();
      }
  }
  function exitFullscreen() {
      var de = document;
      if (de.exitFullscreen) {
          de.exitFullscreen();
      }
      else if (de.mozCancelFullScreen) {
          de.mozCancelFullScreen();
      }
      else if (de.webkitCancelFullScreen) {
          de.webkitCancelFullScreen();
      }
  }
  var LocalStorage = (function () {
      function LocalStorage(domain) {
          this.domain = domain;
      }
      LocalStorage.prototype.getItem = function (key, def) {
          return window.localStorage.getItem(this.domain + "-" + key) || def;
      };
      LocalStorage.prototype.setItem = function (key, data) {
          window.localStorage.setItem(this.domain + "-" + key, data);
      };
      return LocalStorage;
  }());
  var Timer = (function () {
      function Timer(delay) {
          this.delay = delay;
      }
      Timer.prototype.reset = function () {
          if (this.id) {
              clearTimeout(this.id);
          }
          this.id = window.setTimeout(this.onTimer, this.delay);
      };
      return Timer;
  }());
  function getURL(src) {
      if (src.substr(0, 5) !== 'blob:') {
          src = chrome.runtime.getURL(src);
      }
      return src;
  }
  function addScript(src) {
      var script = document.createElement('script');
      script.src = getURL(src);
      document.head.appendChild(script);
  }
  function addCss(src, rel, type) {
      if (rel === void 0) { rel = 'stylesheet'; }
      if (type === void 0) { type = 'text/css'; }
      var link = document.createElement('link');
      link.rel = rel;
      link.type = type;
      link.href = getURL(src);
      document.head.appendChild(link);
  }
  function createBlobURL(content, type) {
      var blob = new Blob([content], { type: type });
      return URL.createObjectURL(blob);
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
  function sendMessage(type, data) {
      return new Promise(function (res, rej) {
          var curId = ++lastCbId;
          var timeoutId = window.setTimeout(function () {
              delete msgCallbacks[curId];
              rej(new Error('sendMessage timeout'));
          }, 5000);
          msgCallbacks[curId] = function (result) {
              delete msgCallbacks[curId];
              window.clearTimeout(timeoutId);
              res(result);
          };
          window.postMessage({
              type: type,
              data: data,
              cbId: curId++
          }, '*');
      });
  }
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
  function setSync(item) {
      return new Promise(function (res, rej) {
          if (chrome && chrome.storage && chrome.storage.sync) {
              chrome.storage.sync.set(item, res);
          }
          else {
              rej(new Error('不支持的存储方式'));
          }
      });
  }
  function getSetting() {
      return __awaiter(this, void 0, void 0, function () {
          var setting;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4, getSync()];
                  case 1:
                      setting = _a.sent();
                      if (!setting.blacklist) {
                          setting.blacklist = [];
                      }
                      return [2, setting];
              }
          });
      });
  }
  function setSetting(setting) {
      return __awaiter(this, void 0, void 0, function () {
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0: return [4, setSync(setting)];
                  case 1:
                      _a.sent();
                      return [2];
              }
          });
      });
  }
  var defaultBgListener = function (request) { return __awaiter(_this$1, void 0, void 0, function () { return __generator(this, function (_a) {
      return [2, null];
  }); }); };
  var bgListener = defaultBgListener;
  function setBgListener(listener) {
      var _this = this;
      if (bgListener === defaultBgListener) {
          if ((typeof chrome !== 'undefined') && chrome.runtime && chrome.runtime.onMessage) {
              chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { return __awaiter(_this, void 0, void 0, function () {
                  var _a;
                  return __generator(this, function (_b) {
                      switch (_b.label) {
                          case 0:
                              _a = sendResponse;
                              return [4, bgListener(request)];
                          case 1:
                              _a.apply(void 0, [_b.sent()]);
                              return [2];
                      }
                  });
              }); });
          }
      }
      else {
          console.warn('多次设置BgListener');
      }
      bgListener = listener;
  }
  var DelayNotify = (function () {
      function DelayNotify(defaultValue) {
          this.defaultValue = defaultValue;
          this.notified = false;
          this.tmid = null;
          this.res = null;
      }
      DelayNotify.prototype.notify = function (value) {
          if (this.notified) {
              return;
          }
          this.notified = true;
          this.value = value;
          if (this.res) {
              this.res(this.value);
          }
      };
      DelayNotify.prototype.wait = function (timeout) {
          var _this = this;
          if (timeout === void 0) { timeout = 1000 * 10; }
          if (this.notified) {
              return Promise.resolve(this.value);
          }
          return new Promise(function (resolve, reject) {
              if (timeout > 0) {
                  window.setTimeout(function () {
                      resolve(_this.defaultValue);
                  }, timeout);
              }
              _this.res = function (value) {
                  return resolve(value);
              };
          });
      };
      DelayNotify.prototype.reset = function () {
          this.notified = false;
      };
      return DelayNotify;
  }());

  /*! typestate - v1.0.4 - 2016-09-07
  * https://github.com/eonarheim/TypeState
  * Copyright (c) 2016 Erik Onarheim; Licensed BSD-2-Clause*/
  var typestate;
  (function (typestate) {
      /**
       * Transition grouping to faciliate fluent api
       */
      var Transitions = (function () {
          function Transitions(fsm) {
              this.fsm = fsm;
          }
          /**
           * Specify the end state(s) of a transition function
           */
          Transitions.prototype.to = function () {
              var arguments$1 = arguments;

              var states = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  states[_i - 0] = arguments$1[_i];
              }
              this.toStates = states;
              this.fsm.addTransitions(this);
          };
          /**
           * Specify that any state in the state enum is value
           * Takes the state enum as an argument
           */
          Transitions.prototype.toAny = function (states) {
              var toStates = [];
              for (var s in states) {
                  if (states.hasOwnProperty(s)) {
                      toStates.push(states[s]);
                  }
              }
              this.toStates = toStates;
              this.fsm.addTransitions(this);
          };
          return Transitions;
      }());
      typestate.Transitions = Transitions;
      /**
       * Internal representation of a transition function
       */
      var TransitionFunction = (function () {
          function TransitionFunction(fsm, from, to) {
              this.fsm = fsm;
              this.from = from;
              this.to = to;
          }
          return TransitionFunction;
      }());
      typestate.TransitionFunction = TransitionFunction;
      /**
       * A simple finite state machine implemented in TypeScript, the templated argument is meant to be used
       * with an enumeration.
       */
      var FiniteStateMachine = (function () {
          function FiniteStateMachine(startState) {
              this._transitionFunctions = [];
              this._onCallbacks = {};
              this._exitCallbacks = {};
              this._enterCallbacks = {};
              this._invalidTransitionCallback = null;
              this.currentState = startState;
              this._startState = startState;
          }
          FiniteStateMachine.prototype.addTransitions = function (fcn) {
              var _this = this;
              fcn.fromStates.forEach(function (from) {
                  fcn.toStates.forEach(function (to) {
                      // self transitions are invalid and don't add duplicates
                      if (from !== to && !_this._validTransition(from, to)) {
                          _this._transitionFunctions.push(new TransitionFunction(_this, from, to));
                      }
                  });
              });
          };
          /**
           * Listen for the transition to this state and fire the associated callback
           */
          FiniteStateMachine.prototype.on = function (state, callback) {
              var key = state.toString();
              if (!this._onCallbacks[key]) {
                  this._onCallbacks[key] = [];
              }
              this._onCallbacks[key].push(callback);
              return this;
          };
          /**
           * Listen for the transition to this state and fire the associated callback, returning
           * false in the callback will block the transition to this state.
           */
          FiniteStateMachine.prototype.onEnter = function (state, callback) {
              var key = state.toString();
              if (!this._enterCallbacks[key]) {
                  this._enterCallbacks[key] = [];
              }
              this._enterCallbacks[key].push(callback);
              return this;
          };
          /**
           * Listen for the transition to this state and fire the associated callback, returning
           * false in the callback will block the transition from this state.
           */
          FiniteStateMachine.prototype.onExit = function (state, callback) {
              var key = state.toString();
              if (!this._exitCallbacks[key]) {
                  this._exitCallbacks[key] = [];
              }
              this._exitCallbacks[key].push(callback);
              return this;
          };
          /**
           * List for an invalid transition and handle the error, returning a falsy value will throw an
           * exception, a truthy one will swallow the exception
           */
          FiniteStateMachine.prototype.onInvalidTransition = function (callback) {
              if (!this._invalidTransitionCallback) {
                  this._invalidTransitionCallback = callback;
              }
              return this;
          };
          /**
           * Declares the start state(s) of a transition function, must be followed with a '.to(...endStates)'
           */
          FiniteStateMachine.prototype.from = function () {
              var arguments$1 = arguments;

              var states = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                  states[_i - 0] = arguments$1[_i];
              }
              var _transition = new Transitions(this);
              _transition.fromStates = states;
              return _transition;
          };
          FiniteStateMachine.prototype.fromAny = function (states) {
              var fromStates = [];
              for (var s in states) {
                  if (states.hasOwnProperty(s)) {
                      fromStates.push(states[s]);
                  }
              }
              var _transition = new Transitions(this);
              _transition.fromStates = fromStates;
              return _transition;
          };
          FiniteStateMachine.prototype._validTransition = function (from, to) {
              return this._transitionFunctions.some(function (tf) {
                  return (tf.from === from && tf.to === to);
              });
          };
          /**
           * Check whether a transition to a new state is valid
           */
          FiniteStateMachine.prototype.canGo = function (state) {
              return this.currentState === state || this._validTransition(this.currentState, state);
          };
          /**
           * Transition to another valid state
           */
          FiniteStateMachine.prototype.go = function (state) {
              if (!this.canGo(state)) {
                  if (!this._invalidTransitionCallback || !this._invalidTransitionCallback(this.currentState, state)) {
                      throw new Error('Error no transition function exists from state ' + this.currentState.toString() + ' to ' + state.toString());
                  }
              }
              else {
                  this._transitionTo(state);
              }
          };
          /**
           * This method is availble for overridding for the sake of extensibility.
           * It is called in the event of a successful transition.
           */
          FiniteStateMachine.prototype.onTransition = function (from, to) {
              // pass, does nothing until overidden
          };
          /**
          * Reset the finite state machine back to the start state, DO NOT USE THIS AS A SHORTCUT for a transition.
          * This is for starting the fsm from the beginning.
          */
          FiniteStateMachine.prototype.reset = function () {
              this.currentState = this._startState;
          };
          /**
           * Whether or not the current state equals the given state
           */
          FiniteStateMachine.prototype.is = function (state) {
              return this.currentState === state;
          };
          FiniteStateMachine.prototype._transitionTo = function (state) {
              var _this = this;
              if (!this._exitCallbacks[this.currentState.toString()]) {
                  this._exitCallbacks[this.currentState.toString()] = [];
              }
              if (!this._enterCallbacks[state.toString()]) {
                  this._enterCallbacks[state.toString()] = [];
              }
              if (!this._onCallbacks[state.toString()]) {
                  this._onCallbacks[state.toString()] = [];
              }
              var canExit = this._exitCallbacks[this.currentState.toString()].reduce(function (accum, next) {
                  return accum && next.call(_this, state);
              }, true);
              var canEnter = this._enterCallbacks[state.toString()].reduce(function (accum, next) {
                  return accum && next.call(_this, _this.currentState);
              }, true);
              if (canExit && canEnter) {
                  var old = this.currentState;
                  this.currentState = state;
                  this._onCallbacks[this.currentState.toString()].forEach(function (fcn) {
                      fcn.call(_this, old);
                  });
                  this.onTransition(old, state);
              }
          };
          return FiniteStateMachine;
      }());
      typestate.FiniteStateMachine = FiniteStateMachine;
  })(typestate || (typestate = {}));
  var TypeState_1 = typestate;

  var storage = new LocalStorage('h5plr');
  function findInParent(node, toFind) {
      while ((node !== toFind) && (node !== null)) {
          node = node.parentElement;
      }
      return node !== null;
  }
  var PlayerState;
  (function (PlayerState) {
      PlayerState[PlayerState["Stopped"] = 0] = "Stopped";
      PlayerState[PlayerState["Playing"] = 1] = "Playing";
      PlayerState[PlayerState["Paused"] = 2] = "Paused";
      PlayerState[PlayerState["Buffering"] = 3] = "Buffering";
  })(PlayerState || (PlayerState = {}));
  var SizeState;
  (function (SizeState) {
      SizeState[SizeState["Normal"] = 0] = "Normal";
      SizeState[SizeState["FullPage"] = 1] = "FullPage";
      SizeState[SizeState["FullScreen"] = 2] = "FullScreen";
      SizeState[SizeState["ExitFullScreen"] = 3] = "ExitFullScreen";
  })(SizeState || (SizeState = {}));
  var SizeStateFSM = (function (_super) {
      __extends(SizeStateFSM, _super);
      function SizeStateFSM() {
          var _this = _super.call(this, SizeState.Normal) || this;
          _this.fromAny(SizeState).to(SizeState.Normal);
          _this.fromAny(SizeState).to(SizeState.FullPage);
          _this.fromAny(SizeState).to(SizeState.FullScreen);
          _this.from(SizeState.FullScreen).to(SizeState.ExitFullScreen);
          return _this;
      }
      SizeStateFSM.prototype.onTransition = function (from, to) {
          console.log('SizeFSM', from, to);
      };
      return SizeStateFSM;
  }(TypeState_1.FiniteStateMachine));
  var PlayerStateFSM = (function (_super) {
      __extends(PlayerStateFSM, _super);
      function PlayerStateFSM() {
          var _this = _super.call(this, PlayerState.Stopped) || this;
          _this.fromAny(PlayerState).to(PlayerState.Stopped);
          _this.fromAny(PlayerState).to(PlayerState.Playing);
          _this.from(PlayerState.Playing).to(PlayerState.Buffering);
          _this.from(PlayerState.Playing).to(PlayerState.Paused);
          _this.from(PlayerState.Buffering).to(PlayerState.Paused);
          return _this;
      }
      PlayerStateFSM.prototype.onTransition = function (from, to) {
          console.log('PlayerFSM', from, to);
      };
      return PlayerStateFSM;
  }(TypeState_1.FiniteStateMachine));
  var PlayerUI = (function () {
      function PlayerUI(listener, state) {
          var _this = this;
          this.listener = listener;
          this.state = state;
          this.inputing = false;
          this.hideDanmu = false;
          this._muted = false;
          this._fullscreen = false;
          this._lastY = -1;
          var playerContainer = document.createElement('div');
          var playerWrap = document.createElement('div');
          var playerCtrl = document.createElement('div');
          var danmuLayout = document.createElement('div');
          var videoBox = document.createElement('div');
          var msgBox = document.createElement('div');
          var msgInput = document.createElement('input');
          var videoEl = document.createElement('video');
          this.sizeState = new SizeStateFSM();
          var lastState;
          this.sizeState
              .on(SizeState.Normal, function (from) {
              switch (from) {
                  case SizeState.FullPage:
                      _this._exitFullPage();
                      break;
                  case SizeState.ExitFullScreen:
                      _this._exitFullScreen();
                      break;
              }
          })
              .on(SizeState.FullPage, function (from) {
              switch (from) {
                  case SizeState.Normal:
                      _this._enterFullPage();
                      break;
                  case SizeState.ExitFullScreen:
                      _this._enterFullPage();
                      break;
              }
          })
              .on(SizeState.FullScreen, function (from) {
              if (from == SizeState.FullScreen)
                  { return; }
              lastState = from;
              switch (from) {
                  case SizeState.Normal:
                      _this._enterFullScreen();
                      break;
                  case SizeState.FullPage:
                      _this._enterFullScreen();
                      break;
              }
          })
              .on(SizeState.ExitFullScreen, function (from) {
              _this._exitFullScreen();
              _this.sizeState.go(lastState);
          });
          videoEl.style.width = videoEl.style.height = '100%';
          msgInput.type = 'text';
          msgInput.placeholder = '发送弹幕...';
          msgBox.className = 'danmu-input';
          videoBox.className = 'danmu-video';
          playerCtrl.className = 'danmu-ctrl';
          danmuLayout.className = 'danmu-layout';
          playerWrap.className = 'danmu-wrap';
          playerContainer.className = 'danmu-container';
          videoBox.appendChild(videoEl);
          msgBox.appendChild(msgInput);
          playerWrap.appendChild(videoBox);
          playerWrap.appendChild(playerCtrl);
          playerWrap.appendChild(danmuLayout);
          playerWrap.appendChild(msgBox);
          playerContainer.appendChild(playerWrap);
          var timer = new Timer(1000);
          timer.onTimer = function () { return playerWrap.removeAttribute('hover'); };
          playerWrap.addEventListener('mousemove', function (event) {
              var hoverCtl = findInParent(event.target, playerCtrl);
              if (event.offsetY - _this._lastY == 0)
                  { return; }
              _this._lastY = event.offsetY;
              var height = playerWrap.getBoundingClientRect().height;
              if (event.offsetY > 0) {
                  playerWrap.setAttribute('hover', '');
                  timer.reset();
              }
              else {
                  playerWrap.removeAttribute('hover');
              }
          });
          playerWrap.addEventListener('click', function (event) {
              if (findInParent(event.target, msgBox))
                  { return; }
              playerWrap.removeAttribute('inputing');
              _this.inputing = false;
          });
          document.addEventListener('keydown', function (event) {
              if (event.keyCode == 13) {
                  if (_this.sizeState.is(SizeState.Normal))
                      { return; }
                  if (event.target.nodeName.toUpperCase() === 'TEXTAREA')
                      { return; }
                  _this.inputing = !_this.inputing;
                  if (_this.inputing) {
                      msgInput.value = '';
                      playerWrap.setAttribute('inputing', '');
                      msgInput.focus();
                  }
                  else {
                      if (msgInput.value.length > 0) {
                          listener.onSendDanmu(msgInput.value);
                      }
                      playerWrap.removeAttribute('inputing');
                  }
              }
              else if (event.keyCode == 27) {
                  if (_this.sizeState.is(SizeState.FullPage)) {
                      _this.sizeState.go(SizeState.Normal);
                  }
                  if (_this.sizeState.is(SizeState.FullScreen)) {
                      _this.sizeState.go(SizeState.ExitFullScreen);
                  }
              }
          });
          document.addEventListener('webkitfullscreenchange', function (event) {
              _this._fullscreen = !_this._fullscreen;
              if (!_this._fullscreen) {
                  if (_this.sizeState.is(SizeState.FullScreen)) {
                      _this.sizeState.go(SizeState.ExitFullScreen);
                  }
              }
          });
          window.addEventListener('unload', function (event) {
              listener.onStop();
              listener.onUnload();
          });
          this.video = videoEl;
          this.el = playerContainer;
          this.wrap = playerWrap;
          this.dmLayout = danmuLayout;
          this.playerCtrl = playerCtrl;
          this.transparent = this.transparent;
      }
      PlayerUI.prototype._exitFullScreen = function () {
          exitFullscreen();
          this.wrap.removeAttribute('fullpage');
          this.el.appendChild(this.wrap);
          document.body.style.overflow = document.body.parentElement.style.overflow = 'auto';
          this.listener.onTryPlay();
      };
      PlayerUI.prototype._enterFullScreen = function () {
          requestFullScreen();
          this.wrap.setAttribute('fullpage', '');
          document.body.appendChild(this.wrap);
          document.body.style.overflow = document.body.parentElement.style.overflow = 'hidden';
          this.listener.onTryPlay();
      };
      PlayerUI.prototype._exitFullPage = function () {
          this.wrap.removeAttribute('fullpage');
          this.el.appendChild(this.wrap);
          document.body.style.overflow = document.body.parentElement.style.overflow = 'auto';
          this.listener.onTryPlay();
      };
      PlayerUI.prototype._enterFullPage = function () {
          this.wrap.setAttribute('fullpage', '');
          document.body.appendChild(this.wrap);
          document.body.style.overflow = document.body.parentElement.style.overflow = 'hidden';
          this.listener.onTryPlay();
      };
      Object.defineProperty(PlayerUI.prototype, "transparent", {
          get: function () {
              return parseInt(storage.getItem('transparent', '0'));
          },
          set: function (val) {
              storage.setItem('transparent', val.toString());
              this.dmLayout.style.opacity = (1 - val / 100).toString();
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(PlayerUI.prototype, "playing", {
          get: function () {
              return this.state.is(PlayerState.Playing) || this.state.is(PlayerState.Buffering);
          },
          set: function (val) {
              if (val) {
                  this.state.go(PlayerState.Playing);
              }
              else {
                  this.state.go(PlayerState.Paused);
              }
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(PlayerUI.prototype, "muted", {
          get: function () {
              return this._muted;
          },
          set: function (v) {
              this.listener.onMute(v);
              if (v) {
                  this.muteEl.setAttribute('muted', '');
              }
              else {
                  this.muteEl.removeAttribute('muted');
              }
              this._muted = v;
          },
          enumerable: true,
          configurable: true
      });
      PlayerUI.prototype.notifyStateChange = function () {
          if (this.playing) {
              this.playPause.setAttribute('pause', '');
          }
          else {
              this.playPause.removeAttribute('pause');
          }
      };
      PlayerUI.prototype.initControls = function () {
          var _this = this;
          if (this.tipEl)
              { return; }
          var bar = this.playerCtrl;
          var now = function () { return new Date().getTime(); };
          var addBtn = function (cls, cb) {
              var btn = document.createElement('a');
              btn.className = ['danmu-btn', 'danmu-' + cls].join(' ');
              btn.addEventListener('click', cb);
              bar.appendChild(btn);
              return btn;
          };
          this.video.addEventListener('dblclick', function (event) {
              switch (_this.sizeState.currentState) {
                  case SizeState.Normal:
                      _this.sizeState.go(SizeState.FullPage);
                      break;
                  case SizeState.FullPage:
                      _this.sizeState.go(SizeState.Normal);
                      break;
                  case SizeState.FullScreen:
                      _this.sizeState.go(SizeState.ExitFullScreen);
                      break;
              }
              event.preventDefault();
              event.stopPropagation();
          });
          this.playPause = addBtn('playpause', function () {
              _this.playing = !_this.playing;
              _this.notifyStateChange();
          });
          this.playPause.setAttribute('pause', '');
          var reload = addBtn('reload', function () {
              _this.listener.onReload();
          });
          var fullscreen = addBtn('fullscreen', function () {
              if (_this.sizeState.is(SizeState.FullScreen)) {
                  _this.sizeState.go(SizeState.ExitFullScreen);
              }
              else {
                  _this.sizeState.go(SizeState.FullScreen);
              }
          });
          var fullpage = addBtn('fullpage', function () {
              switch (_this.sizeState.currentState) {
                  case SizeState.Normal:
                      _this.sizeState.go(SizeState.FullPage);
                      break;
                  case SizeState.FullPage:
                      _this.sizeState.go(SizeState.Normal);
                      break;
                  case SizeState.FullScreen:
                      _this.sizeState.go(SizeState.ExitFullScreen);
                      _this.sizeState.go(SizeState.FullPage);
                      break;
              }
          });
          var volume = this.createVolume(function (percent) {
              _this.listener.onVolumeChange(percent);
          });
          bar.appendChild(volume);
          this.muteEl = addBtn('mute', function () {
              _this.muted = !_this.muted;
          });
          var danmuSwitch = addBtn('switch', function () {
              _this.hideDanmu = !_this.hideDanmu;
              _this.listener.onHideDanmu(_this.hideDanmu);
              danmuSwitch.innerText = _this.hideDanmu ? '开启弹幕' : '关闭弹幕';
              _this.dmLayout.style.display = _this.hideDanmu ? 'none' : 'block';
          });
          danmuSwitch.innerText = this.hideDanmu ? '开启弹幕' : '关闭弹幕';
          var tip = document.createElement('div');
          tip.className = 'danmu-tip';
          bar.appendChild(tip);
          this.tipEl = tip;
      };
      PlayerUI.prototype.createVolume = function (cb) {
          var volume = document.createElement('div');
          var progress = document.createElement('div');
          var input = document.createElement('input');
          volume.className = 'danmu-volume';
          progress.className = 'progress';
          input.type = 'range';
          volume.appendChild(input);
          volume.appendChild(progress);
          input.value = storage.getItem('volume') || '100';
          cb(parseInt(input.value) / 100);
          input.addEventListener('input', function (event) {
              progress.style.width = input.value + "%";
              cb(parseInt(input.value) / 100);
              storage.setItem('volume', input.value);
          });
          progress.style.width = input.value + "%";
          return volume;
      };
      PlayerUI.prototype.setTip = function (tip) {
          this.tipEl.innerText = tip;
      };
      return PlayerUI;
  }());
  var PlayerBufferMonitor = (function () {
      function PlayerBufferMonitor(dmPlayer) {
          var _this = this;
          this.dmPlayer = dmPlayer;
          this.intId = window.setInterval(function () {
              try {
                  _this.handler();
              }
              catch (e) {
                  console.error(e);
              }
          }, 200);
          this.reset();
      }
      PlayerBufferMonitor.prototype.unload = function () {
          window.clearInterval(this.intId);
      };
      PlayerBufferMonitor.prototype.reset = function () {
          this.bufTime = 1;
      };
      Object.defineProperty(PlayerBufferMonitor.prototype, "player", {
          get: function () {
              return this.dmPlayer.player;
          },
          enumerable: true,
          configurable: true
      });
      PlayerBufferMonitor.prototype.handler = function () {
          if (this.player) {
              var buffered = this.player.buffered;
              if (buffered.length === 0)
                  { return; }
              var buf = buffered.end(buffered.length - 1) - this.player.currentTime;
              var state = this.dmPlayer.state;
              if (state.is(PlayerState.Playing)) {
                  if (buf <= 1) {
                      state.go(PlayerState.Buffering);
                      this.dmPlayer.ui.notifyStateChange();
                      this.bufTime *= 2;
                      if (this.bufTime > 8) {
                          console.warn('网络不佳');
                          this.bufTime = 8;
                      }
                  }
              }
              else if (state.is(PlayerState.Buffering)) {
                  if (buf > this.bufTime) {
                      state.go(PlayerState.Playing);
                      this.dmPlayer.player.currentTime -= 0.5;
                      this.dmPlayer.ui.notifyStateChange();
                  }
              }
          }
      };
      return PlayerBufferMonitor;
  }());
  var DanmuPlayer = (function () {
      function DanmuPlayer(listener, ui) {
          var _this = this;
          this.inputing = false;
          this._src = '';
          this.bufferMonitor = new PlayerBufferMonitor(this);
          this.state = new PlayerStateFSM();
          var now = function () { return new Date().getTime(); };
          var beginTime = 0;
          this.state
              .on(PlayerState.Stopped, function () {
              beginTime = 0;
              _this.mgr.deferTime = 0;
              _this.bufferMonitor.reset();
              if (_this.player) {
                  _this.player.unload();
                  _this.player.detachMediaElement();
                  _this.player = null;
              }
          })
              .on(PlayerState.Paused, function (from) {
              beginTime = now();
              _this.player.pause();
          })
              .on(PlayerState.Playing, function (from) {
              if (beginTime !== 0) {
                  _this.mgr.deferTime += now() - beginTime;
              }
              _this.player.play();
          })
              .on(PlayerState.Buffering, function (from) {
              beginTime = 0;
              _this.player.pause();
          });
          this.initUI();
          this.mgr = new DanmuManager(this.ui.dmLayout, this.state);
          this.listener = listener;
      }
      DanmuPlayer.prototype.onVolumeChange = function (vol) {
          this.player.volume = vol;
      };
      DanmuPlayer.prototype.onReload = function () {
          this.stop();
          this.load();
      };
      DanmuPlayer.prototype.onSendDanmu = function (txt) {
          this.listener.onSendDanmu(txt);
      };
      DanmuPlayer.prototype.onStop = function () {
          this.stop();
      };
      DanmuPlayer.prototype.onUnload = function () {
          this.bufferMonitor.unload();
      };
      DanmuPlayer.prototype.onTryPlay = function () {
          this.tryPlay();
      };
      DanmuPlayer.prototype.onMute = function (muted) {
          if (muted) {
              this.lastVolume = this.player.volume;
              this.player.volume = 0;
          }
          else {
              this.player.volume = this.lastVolume;
          }
      };
      DanmuPlayer.prototype.onHideDanmu = function (hide) {
          this.mgr.hideDanmu = hide;
      };
      DanmuPlayer.prototype.onStat = function (e) {
          this.ui.setTip(Math.round(e.speed * 10) / 10 + 'KB/s');
      };
      DanmuPlayer.prototype.load = function () {
          return __awaiter(this, void 0, void 0, function () {
              var _a;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          _a = this;
                          return [4, this.listener.getSrc()];
                      case 1:
                          _a.src = _b.sent();
                          return [2];
                  }
              });
          });
      };
      DanmuPlayer.prototype.createFlvjs = function () {
          var sourceConfig = {
              isLive: true,
              type: 'flv',
              url: this.src
          };
          var playerConfig = {
              enableWorker: false,
              deferLoadAfterSourceOpen: true,
              stashInitialSize: 512 * 1024,
              enableStashBuffer: true
          };
          var player = flvjs.createPlayer(sourceConfig, playerConfig);
          player.on(flvjs.Events.ERROR, function (e, t) {
              console.error('播放器发生错误：' + e + ' - ' + t);
              player.unload();
          });
          player.on(flvjs.Events.STATISTICS_INFO, this.onStat.bind(this));
          player.attachMediaElement(this.ui.video);
          player.load();
          player.play();
          return player;
      };
      DanmuPlayer.prototype.stop = function () {
          this.state.go(PlayerState.Stopped);
      };
      Object.defineProperty(DanmuPlayer.prototype, "src", {
          get: function () {
              return this._src;
          },
          set: function (val) {
              this._src = val;
              this.stop();
              var player = this.createFlvjs();
              this.player = player;
              this.ui.initControls();
              this.state.go(PlayerState.Playing);
          },
          enumerable: true,
          configurable: true
      });
      DanmuPlayer.prototype.initUI = function () {
          this.ui = new PlayerUI(this, this.state);
      };
      DanmuPlayer.prototype.tryPlay = function () {
          if (this.state.is(PlayerState.Playing)) {
              try {
                  this.ui.video.play();
              }
              catch (e) { }
          }
      };
      DanmuPlayer.prototype.fireDanmu = function (text, color, cls) {
          return this.mgr.fireDanmu(text, color, cls);
      };
      return DanmuPlayer;
  }());
  var DanmuManager = (function () {
      function DanmuManager(danmuLayout, state) {
          var this$1 = this;

          this.danmuLayout = danmuLayout;
          this.state = state;
          this.pool = [];
          this.rows = [];
          this._deferTime = 0;
          this.maxRow = 10;
          this.baseTop = 10;
          this.deferId = null;
          this.deferQueue = [];
          this.hideDanmu = false;
          this.parsePic = function (i) { return i; };
          var poolSize = 100;
          for (var i = 0; i < poolSize; i++) {
              var dm = document.createElement('div');
              danmuLayout.appendChild(dm);
              this$1.pool.push({
                  el: dm,
                  using: false
              });
          }
      }
      Object.defineProperty(DanmuManager.prototype, "playing", {
          get: function () {
              return this.state.is(PlayerState.Playing);
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(DanmuManager.prototype, "deferTime", {
          get: function () {
              return this._deferTime;
          },
          set: function (v) {
              this._deferTime = v;
              this.defering = v !== 0;
          },
          enumerable: true,
          configurable: true
      });
      DanmuManager.prototype.calcRect = function () {
          return this.danmuLayout.getBoundingClientRect();
      };
      DanmuManager.prototype.calcRow = function (width, duration) {
          var this$1 = this;

          var _this = this;
          var rect = this.calcRect();
          var now = new Date().getTime();
          var check = function (idx) {
              var row = _this.rows[idx];
              if (!row)
                  { return true; }
              if (row.endTime <= now) {
                  _this.rows[idx] = null;
                  return true;
              }
              else {
                  var distance = rect.width + row.width;
                  var percent = (now - row.beginTime) / row.duration;
                  var left = rect.width - distance * percent;
                  if (left + row.width >= rect.width) {
                      return false;
                  }
                  var remainTime = row.endTime - now;
                  var myDistance = rect.width + width;
                  var leftX = rect.width - (myDistance) * (remainTime / duration);
                  if (leftX < 0) {
                      return false;
                  }
              }
              return true;
          };
          var i = 0;
          while (true) {
              if (check(i)) {
                  this$1.rows[i] = {
                      duration: duration,
                      beginTime: now,
                      endTime: now + duration,
                      width: width
                  };
                  return i % this$1.maxRow;
              }
              i++;
          }
      };
      DanmuManager.prototype.doDefer = function () {
          if (this.deferQueue.length === 0)
              { return; }
          var top = this.deferQueue[0];
          var now = new Date().getTime();
          if (this.playing && ((top.oriTime + this.deferTime) <= now)) {
              top.run();
              this.deferQueue.shift();
          }
      };
      Object.defineProperty(DanmuManager.prototype, "defering", {
          set: function (v) {
              var _this = this;
              if (this.deferId === null) {
                  if (v) {
                      this.deferId = window.setInterval(function () { return _this.doDefer(); }, 100);
                  }
              }
              else {
                  if (v === false) {
                      window.clearInterval(this.deferId);
                      this.deferId = null;
                  }
              }
          },
          enumerable: true,
          configurable: true
      });
      DanmuManager.prototype.fireDanmu = function (text, color, cls) {
          var _this = this;
          var fire = function () {
              var rect = _this.calcRect();
              var duration = rect.width * 7;
              var dm = _this.pool.shift().el;
              setTimeout(function () {
                  dm.removeAttribute('style');
                  _this.pool.push({
                      el: dm,
                      using: false
                  });
              }, duration);
              dm.innerText = text;
              dm.innerHTML = _this.parsePic(dm.innerHTML);
              if (Array.isArray(cls))
                  { cls = cls.join(' '); }
              dm.className = cls || '';
              dm.style.left = rect.width + "px";
              dm.style.display = 'inline-block';
              dm.style.color = color;
              setTimeout(function () {
                  var dmRect = dm.getBoundingClientRect();
                  var row = _this.calcRow(dmRect.width, duration);
                  dm.style.top = _this.baseTop + row * dmRect.height + "px";
                  dm.style.transition = "transform " + duration / 1000 + "s linear";
                  dm.style.transform = "translateX(-" + (rect.width + dmRect.width) + "px)";
              }, 0);
          };
          var now = new Date().getTime();
          if (!this.playing || this.deferTime > 0) {
              this.deferQueue.push({
                  oriTime: now,
                  run: function () { return fire(); }
              });
              return;
          }
          if (this.hideDanmu)
              { return; }
          if (this.pool.length == 0)
              { return; }
          fire();
      };
      return DanmuManager;
  }());

  var createMenu = function (x, y) {
    var wrap = document.createElement('div');
    var menu = document.createElement('div');
    wrap.className = 'player-menu';
    menu.className = 'menu';
    wrap.appendChild(menu);

    menu.style.left = x + "px";
    menu.style.top = y + "px";

    menu.close = function () { return document.body.removeChild(wrap); };
    wrap.addEventListener('mousedown', function (event) {
      if (event.target === wrap) {
        document.body.removeChild(wrap);
      }
    });
    wrap.addEventListener('contextmenu', function (event) { return event.preventDefault(); });

    document.body.appendChild(wrap);
    return menu
  };
  var addTextMenu = function (menu, text, cb) {
    var item = document.createElement('div');
    item.className = 'menu-item';
    item.innerText = text;
    menu.appendChild(item);

    item.addEventListener('click', function () {
      menu.close();
      cb();
    });
  };
  var addEleMenu = function (menu, ele) {
    var item = document.createElement('div');
    item.className = 'menu-ele';
    item.appendChild(ele);
    menu.appendChild(item);
  };
  var addLabelMenu = function (menu, label) {
    var item = document.createElement('div');
    item.className = 'menu-item';
    item.innerText = label;
    menu.appendChild(item);
  };
  var addDash = function (menu) {
    var item = document.createElement('div');
    item.className = 'menu-dash';
    menu.appendChild(item);
  };
  function bindMenu (el, menuItems) {
    el.addEventListener('contextmenu', function (event) {
      var menu = createMenu(event.clientX, event.clientY);
      var items = menuItems;
      if (typeof items === 'function') { items = items(); }
      for (var i = 0, list = items; i < list.length; i += 1) {
        var item = list[i];

        if (item.text) {
          addTextMenu(menu, item.text, item.cb);
        } else if (item.el) {
          addEleMenu(menu, item.el, item.cb);
        } else if (item.label) {
          addLabelMenu(menu, item.label);
        } else {
          addDash(menu);
        }
      }
      var rect = menu.getBoundingClientRect();
      if (menu.offsetLeft + menu.offsetWidth > document.documentElement.clientWidth) {
        menu.style.left = (rect.left - rect.width) + "px";
      }
      if (menu.offsetTop + menu.offsetHeight > document.documentElement.clientHeight) {
        menu.style.top = (rect.top - rect.height) + "px";
      }
      event.preventDefault();
    });
  }

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

  var BaseSource = (function () {
      function BaseSource() {
          this.onChange = function () { return null; };
      }
      Object.defineProperty(BaseSource.prototype, "url", {
          get: function () {
              return this._url;
          },
          set: function (v) {
              if (v === this._url) {
                  this._url = v;
                  return;
              }
              this.onChange(v);
          },
          enumerable: true,
          configurable: true
      });
      return BaseSource;
  }());

  var m_signer = null;
  function getSourceURL(rid, cdn, rate) {
      return __awaiter(this, void 0, void 0, function () {
          var API_KEY, tt, did, sign, body, res, videoInfo, baseUrl, livePath, videoUrl;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      API_KEY = 'a2053899224e8a92974c729dceed1cc99b3d8282';
                      tt = Math.round(new Date().getTime() / 60 / 1000);
                      did = md5(Math.random().toString()).toUpperCase();
                      if (m_signer === null) {
                          throw new Error('Signer is not defined.');
                      }
                      return [4, m_signer(rid, tt, did)];
                  case 1:
                      sign = _a.sent();
                      body = {
                          'cdn': cdn,
                          'rate': rate,
                          'ver': '2017072601',
                          'tt': tt,
                          'did': did,
                          'sign': sign,
                          'cptl': '0001'
                      };
                      body = Object.keys(body).map(function (key) { return key + "=" + encodeURIComponent(body[key]); }).join('&');
                      return [4, fetch("https://www.douyu.com/lapi/live/getPlay/" + rid, {
                              method: 'POST',
                              headers: {
                                  'Content-Type': 'application/x-www-form-urlencoded'
                              },
                              body: body
                          })];
                  case 2:
                      res = _a.sent();
                      return [4, res.json()];
                  case 3:
                      videoInfo = _a.sent();
                      baseUrl = videoInfo.data.rtmp_url;
                      livePath = videoInfo.data.rtmp_live;
                      if (baseUrl && livePath) {
                          videoUrl = baseUrl + "/" + livePath;
                          console.log('RoomId', rid, 'SourceURL:', videoUrl);
                          return [2, videoUrl];
                      }
                      else {
                          throw new Error('未开播或获取失败');
                      }
                      return [2];
              }
          });
      });
  }
  function getSwfApi(rid) {
      return __awaiter(this, void 0, void 0, function () {
          var API_KEY, tt, signContent, sign, res, obj;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      API_KEY = 'bLFlashflowlad92';
                      tt = Math.round(new Date().getTime() / 60 / 1000);
                      signContent = [rid, API_KEY, tt].join('');
                      sign = md5(signContent);
                      return [4, fetch("http://www.douyutv.com/swf_api/room/" + rid + "?cdn=&nofan=yes&_t=" + tt + "&sign=" + sign)];
                  case 1:
                      res = _a.sent();
                      return [4, res.json()];
                  case 2:
                      obj = _a.sent();
                      return [4, obj.data];
                  case 3: return [2, _a.sent()];
              }
          });
      });
  }
  var DouyuSource = (function (_super) {
      __extends(DouyuSource, _super);
      function DouyuSource(roomId, signer) {
          var _this = _super.call(this) || this;
          m_signer = signer;
          _this._cdn = 'ws';
          _this._rate = '0';
          _this.url = '';
          _this.roomId = roomId;
          _this.swfApi = null;
          return _this;
      }
      Object.defineProperty(DouyuSource.prototype, "cdn", {
          get: function () {
              return this._cdn;
          },
          set: function (val) {
              this._cdn = val;
              this.getUrl();
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(DouyuSource.prototype, "rate", {
          get: function () {
              return this._rate;
          },
          set: function (val) {
              this._rate = val;
              this.getUrl();
          },
          enumerable: true,
          configurable: true
      });
      Object.defineProperty(DouyuSource.prototype, "cdnsWithName", {
          get: function () {
              if (this.swfApi) {
                  return this.swfApi.cdnsWithName;
              }
              else {
                  return [{
                          name: '主要线路',
                          cdn: 'ws'
                      }];
              }
          },
          enumerable: true,
          configurable: true
      });
      DouyuSource.prototype.getUrl = function () {
          return __awaiter(this, void 0, void 0, function () {
              var _a, url;
              return __generator(this, function (_b) {
                  switch (_b.label) {
                      case 0:
                          if (!!this.swfApi) { return [3, 2]; }
                          _a = this;
                          return [4, getSwfApi(this.roomId)];
                      case 1:
                          _a.swfApi = _b.sent();
                          this._cdn = this.swfApi.cdns[0];
                          _b.label = 2;
                      case 2: return [4, getSourceURL(this.roomId, this.cdn, this.rate)];
                      case 3:
                          url = _b.sent();
                          this.url = url;
                          return [2, url];
                  }
              });
          });
      };
      return DouyuSource;
  }(BaseSource));

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

  var _this = window;
  var onload = function () {
      if (window.__space_inject) {
          var _a = window.__space_inject, script = _a.script, css = _a.css;
          addCss(createBlobURL(css, 'text/css'));
          addScript(createBlobURL(script, 'text/javascript'));
          window.__space_inject = null;
      }
      else {
          addCss('dist/danmu.css');
          addScript('dist/douyuInject.js');
      }
      var uid = getACF('uid');
      flvjs.LoggingControl.forceGlobalTag = true;
      flvjs.LoggingControl.enableAll = true;
      var DouyuPlayerUI = (function (_super) {
          __extends(DouyuPlayerUI, _super);
          function DouyuPlayerUI(listener, state) {
              var _this = _super.call(this, listener, state) || this;
              _this.douyuFullpage = false;
              _this.wrap.style.position = 'inherit';
              _this.wrap.style.zIndex = 'inherit';
              return _this;
          }
          DouyuPlayerUI.prototype._enterFullScreen = function () {
              this.wrap.style.position = '';
              this.wrap.style.zIndex = '';
              _super.prototype._enterFullScreen.call(this);
          };
          DouyuPlayerUI.prototype._exitFullScreen = function () {
              this.wrap.style.position = 'inherit';
              this.wrap.style.zIndex = 'inherit';
              _super.prototype._exitFullScreen.call(this);
          };
          DouyuPlayerUI.prototype._enterFullPage = function () {
              this.wrap.setAttribute('fullpage', '');
              this.el.style.border = '0';
              if (!this.douyuFullpage) {
                  this.douyuFullpage = true;
                  postMessage('ACJ', {
                      id: 'room_bus_pagescr'
                  });
              }
          };
          DouyuPlayerUI.prototype._exitFullPage = function () {
              this.wrap.removeAttribute('fullpage');
              this.el.style.border = '';
              if (this.douyuFullpage) {
                  this.douyuFullpage = false;
                  postMessage('ACJ', {
                      id: 'room_bus_pagescr'
                  });
              }
          };
          return DouyuPlayerUI;
      }(PlayerUI));
      var DouyuDanmuPlayer = (function (_super) {
          __extends(DouyuDanmuPlayer, _super);
          function DouyuDanmuPlayer(roomId) {
              var _this = this;
              var source = new DouyuSource(roomId, function (rid, tt, did) { return __awaiter(_this, void 0, void 0, function () {
                  var sign;
                  return __generator(this, function (_a) {
                      switch (_a.label) {
                          case 0: return [4, sendMessage('SIGNAPI', { rid: rid, tt: tt, did: did })];
                          case 1:
                              sign = _a.sent();
                              return [2, sign];
                      }
                  });
              }); });
              source.onChange = function (videoUrl) {
                  _this.src = videoUrl;
              };
              _this = _super.call(this, {
                  getSrc: function () { return source.getUrl(); },
                  onSendDanmu: function (txt) {
                      window.postMessage({
                          type: "SENDANMU",
                          data: txt
                      }, "*");
                  }
              }) || this;
              _this.source = source;
              return _this;
          }
          DouyuDanmuPlayer.prototype.initUI = function () {
              this.ui = new DouyuPlayerUI(this, this.state);
          };
          DouyuDanmuPlayer.prototype.onDanmuPkg = function (pkg) {
              var example = {
                  "type": "chatmsg",
                  "rid": "510541",
                  "ct": "1",
                  "uid": "59839409",
                  "nn": "登辛",
                  "txt": "3ds没有鼓棒先生吗",
                  "cid": "ce554df5bf2841e41459070000000000",
                  "ic": "avatar/face/201607/27/12d23d30a9a7790e955d7affc54335ad",
                  "level": "17",
                  "gt": "2",
                  "rg": "4",
                  "el": "eid@A=1500000005@Setp@A=1@Ssc@A=1@Sef@A=0@S/"
              };
              var getColor = function (c) { return ["#ff0000", "#1e87f0", "#7ac84b", "#ff7f00", "#9b39f4", "#ff69b4"][c - 1]; };
              if (pkg.txt.length > 0) {
                  var cls = [];
                  var color = getColor(pkg.col) || '#ffffff';
                  if (pkg.uid === uid)
                      { cls.push('danmu-self'); }
                  this.fireDanmu(pkg.txt, color, cls);
              }
          };
          return DouyuDanmuPlayer;
      }(DanmuPlayer));
      var makeMenu = function (player, source) {
          var cdnMenu = function () { return source.cdnsWithName.map(function (i) {
              var suffix = '';
              if (i.cdn == source.cdn)
                  { suffix = ' √'; }
              return {
                  text: i.name + suffix,
                  cb: function () {
                      source.cdn = i.cdn;
                  }
              };
          }); };
          var rateMenu = function () {
              var rates = [{
                      text: '超清',
                      rate: '0'
                  }, {
                      text: '高清',
                      rate: '2'
                  }, {
                      text: '普清',
                      rate: '1'
                  }];
              return rates.map(function (i) {
                  var suffix = '';
                  if (i.rate == source.rate)
                      { suffix = ' √'; }
                  return {
                      text: i.text + suffix,
                      cb: function () {
                          source.rate = i.rate;
                      }
                  };
              });
          };
          var transparentMenu = function () {
              var opts = [{
                      text: '0%',
                      transparent: 0
                  }, {
                      text: '25%',
                      transparent: 25
                  }, {
                      text: '50%',
                      transparent: 50
                  }];
              return [{
                      label: '弹幕透明度:'
                  }].concat(opts.map(function (i) {
                  var suffix = '';
                  if (i.transparent == player.ui.transparent)
                      { suffix = ' √'; }
                  return {
                      text: i.text + suffix,
                      cb: function () {
                          player.ui.transparent = i.transparent;
                      },
                      label: null
                  };
              }));
          };
          var dash = {};
          bindMenu(player.ui.video, function () { return [].concat(cdnMenu(), dash, rateMenu(), dash, transparentMenu()); });
      };
      var loadVideo = function (roomId, replace) {
          var danmuPlayer = new DouyuDanmuPlayer(roomId);
          danmuPlayer.mgr.parsePic = function (s) { return s.replace(/\[emot:dy(.*?)\]/g, function (_, i) { return "<img style=\"height:1em\" src=\"https://shark.douyucdn.cn/app/douyu/res/page/room-normal/face/dy" + i + ".png?v=20161103\">"; }); };
          replace(danmuPlayer.ui.el);
          makeMenu(danmuPlayer, danmuPlayer.source);
          window.danmu = danmuPlayer;
          return danmuPlayer.source.getUrl().then(function () { return danmuPlayer; });
      };
      var danmuPlayer = null;
      var signerLoaded = new DelayNotify(false);
      onMessage('SIGNER_READY', function (data) {
          console.log('SIGNER_READY', data);
          signerLoaded.notify(data);
      });
      onMessage('DANMU', function (data) {
          danmuPlayer && danmuPlayer.onDanmuPkg(data);
      });
      onMessage('VIDEOID', function (data) { return __awaiter(_this, void 0, void 0, function () {
          var _this = this;
          var roomId, setting, e_1, ctr;
          return __generator(this, function (_a) {
              switch (_a.label) {
                  case 0:
                      console.log('onVideoId', data);
                      roomId = data.roomId;
                      setBgListener(function (req) { return __awaiter(_this, void 0, void 0, function () {
                          var _a, setting, id;
                          return __generator(this, function (_b) {
                              switch (_b.label) {
                                  case 0:
                                      _a = req.type;
                                      switch (_a) {
                                          case 'toggle': return [3, 1];
                                      }
                                      return [3, 4];
                                  case 1: return [4, getSetting()];
                                  case 2:
                                      setting = _b.sent();
                                      id = setting.blacklist.indexOf(roomId);
                                      if (id === -1) {
                                          setting.blacklist.push(roomId);
                                      }
                                      else {
                                          setting.blacklist.splice(id, 1);
                                      }
                                      return [4, setSetting(setting)];
                                  case 3:
                                      _b.sent();
                                      location.reload();
                                      _b.label = 4;
                                  case 4: return [2];
                              }
                          });
                      }); });
                      return [4, signerLoaded.wait()];
                  case 1:
                      if (!(_a.sent())) {
                          console.warn('需要开启 Flash 才能获取直播地址');
                          return [2];
                      }
                      _a.label = 2;
                  case 2:
                      _a.trys.push([2, 4, , 5]);
                      return [4, getSetting()];
                  case 3:
                      setting = _a.sent();
                      if (setting.blacklist.indexOf(roomId) !== -1) {
                          if (chrome && chrome.runtime && chrome.runtime.sendMessage) {
                              chrome.runtime.sendMessage({
                                  type: 'disable'
                              });
                          }
                          return [2];
                      }
                      return [3, 5];
                  case 4:
                      e_1 = _a.sent();
                      console.warn(e_1);
                      return [3, 5];
                  case 5:
                      ctr = document.querySelector("#" + data.id);
                      return [4, postMessage('BEGINAPI', {
                              roomId: roomId
                          })];
                  case 6:
                      _a.sent();
                      return [4, loadVideo(roomId, function (el) {
                              ctr.parentNode.replaceChild(el, ctr);
                          })];
                  case 7:
                      danmuPlayer = _a.sent();
                      return [2];
              }
          });
      }); });
  };
  onload();

})));
