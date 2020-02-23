/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/Sprites.json": 1,
	"./sprites/Sprites.png": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 0;

/***/ }),
/* 1 */
/***/ (function(module) {

module.exports = JSON.parse("{\"textures\":[{\"image\":\"zBoop.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1784,\"h\":2029},\"scale\":1,\"frames\":[{\"filename\":\"background_tutorial_game_over.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":640,\"h\":963},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":640,\"h\":963},\"frame\":{\"x\":1,\"y\":1,\"w\":640,\"h\":963}},{\"filename\":\"background_base.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":961},\"frame\":{\"x\":1,\"y\":966,\"w\":641,\"h\":961}},{\"filename\":\"btn_more_games.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":250,\"h\":77},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":250,\"h\":77},\"frame\":{\"x\":1,\"y\":1929,\"w\":250,\"h\":77}},{\"filename\":\"asset_website.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":256,\"h\":19},\"spriteSourceSize\":{\"x\":2,\"y\":0,\"w\":253,\"h\":19},\"frame\":{\"x\":1,\"y\":2008,\"w\":253,\"h\":19}},{\"filename\":\"btn_high_scores.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":250,\"h\":77},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":248,\"h\":77},\"frame\":{\"x\":253,\"y\":1929,\"w\":248,\"h\":77}},{\"filename\":\"boop_2.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":87,\"h\":102},\"spriteSourceSize\":{\"x\":0,\"y\":1,\"w\":82,\"h\":99},\"frame\":{\"x\":503,\"y\":1929,\"w\":82,\"h\":99}},{\"filename\":\"boop_3.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":74,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":71,\"h\":97},\"frame\":{\"x\":587,\"y\":1929,\"w\":71,\"h\":97}},{\"filename\":\"background_high_score.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":961},\"frame\":{\"x\":643,\"y\":1,\"w\":641,\"h\":961}},{\"filename\":\"ui_screen_panel.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":502,\"h\":703},\"spriteSourceSize\":{\"x\":3,\"y\":1,\"w\":495,\"h\":698},\"frame\":{\"x\":1286,\"y\":1,\"w\":495,\"h\":698}},{\"filename\":\"ui_game_over.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":317,\"h\":330},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":313,\"h\":330},\"frame\":{\"x\":1286,\"y\":701,\"w\":313,\"h\":330}},{\"filename\":\"asset_cube.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":133,\"h\":184},\"spriteSourceSize\":{\"x\":1,\"y\":1,\"w\":130,\"h\":183},\"frame\":{\"x\":1601,\"y\":701,\"w\":130,\"h\":183}},{\"filename\":\"ui_cross.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":102,\"h\":82},\"spriteSourceSize\":{\"x\":29,\"y\":14,\"w\":50,\"h\":50},\"frame\":{\"x\":1733,\"y\":701,\"w\":50,\"h\":50}},{\"filename\":\"boop_4.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":72,\"h\":98},\"spriteSourceSize\":{\"x\":1,\"y\":1,\"w\":71,\"h\":97},\"frame\":{\"x\":1601,\"y\":886,\"w\":71,\"h\":97}},{\"filename\":\"boop_1.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":62,\"h\":82},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":61,\"h\":82},\"frame\":{\"x\":1674,\"y\":886,\"w\":61,\"h\":82}},{\"filename\":\"asset_potatoe.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":80,\"h\":70},\"spriteSourceSize\":{\"x\":6,\"y\":5,\"w\":70,\"h\":60},\"frame\":{\"x\":1674,\"y\":970,\"w\":70,\"h\":60}},{\"filename\":\"background_bottom_tape.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":640,\"h\":639},\"spriteSourceSize\":{\"x\":0,\"y\":14,\"w\":640,\"h\":556},\"frame\":{\"x\":644,\"y\":964,\"w\":640,\"h\":556}},{\"filename\":\"background_top_tape.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":640,\"h\":228},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":640,\"h\":202},\"frame\":{\"x\":644,\"y\":1522,\"w\":640,\"h\":202}},{\"filename\":\"ui_high_score.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":456,\"h\":146},\"spriteSourceSize\":{\"x\":4,\"y\":0,\"w\":447,\"h\":143},\"frame\":{\"x\":644,\"y\":1726,\"w\":447,\"h\":143}},{\"filename\":\"title.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":355,\"h\":304},\"spriteSourceSize\":{\"x\":22,\"y\":5,\"w\":316,\"h\":297},\"frame\":{\"x\":1093,\"y\":1726,\"w\":316,\"h\":297}},{\"filename\":\"ui_tap_text.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":413,\"h\":128},\"spriteSourceSize\":{\"x\":4,\"y\":3,\"w\":405,\"h\":124},\"frame\":{\"x\":660,\"y\":1871,\"w\":405,\"h\":124}},{\"filename\":\"ui_textbar.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":347,\"h\":203},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":346,\"h\":203},\"frame\":{\"x\":1286,\"y\":1033,\"w\":346,\"h\":203}},{\"filename\":\"ui_tutorial.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":218,\"h\":305},\"spriteSourceSize\":{\"x\":4,\"y\":2,\"w\":208,\"h\":301},\"frame\":{\"x\":1286,\"y\":1238,\"w\":208,\"h\":301}},{\"filename\":\"btn_start.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":401,\"h\":116},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":399,\"h\":116},\"frame\":{\"x\":1286,\"y\":1541,\"w\":399,\"h\":116}},{\"filename\":\"ui_textbar_speed_increased.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":277,\"h\":116},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":276,\"h\":116},\"frame\":{\"x\":1496,\"y\":1238,\"w\":276,\"h\":116}},{\"filename\":\"btn_main_menu.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":228,\"h\":115},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":227,\"h\":115},\"frame\":{\"x\":1496,\"y\":1356,\"w\":227,\"h\":115}},{\"filename\":\"btn_submit.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":323,\"h\":100},\"spriteSourceSize\":{\"x\":3,\"y\":0,\"w\":320,\"h\":100},\"frame\":{\"x\":1411,\"y\":1659,\"w\":320,\"h\":100}},{\"filename\":\"btn_replay.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":229,\"h\":115},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":227,\"h\":115},\"frame\":{\"x\":1411,\"y\":1761,\"w\":227,\"h\":115}},{\"filename\":\"btn_back.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":234,\"h\":100},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":234,\"h\":100},\"frame\":{\"x\":1411,\"y\":1878,\"w\":234,\"h\":100}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:a65711fecf134e8ec8d2536ea6d2624c:532a23bc8426493c8a9595f5ed99092e:75cc4bf2b2c0bc39e55e394e7f92862f$\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "684127f5af3a306b11003140796fb817.png";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined;}());


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/Sprites.json": 1
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./sprites/Sprites.json": 1,
	"./sprites/Sprites.png": 2
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 6;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Scenes/boot.js
var Boot = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Boot ()
    {
        Phaser.Scene.call(this, { key: 'boot' });
    },

    preload: function ()
    {
        this.load.setPath('Assets');
        this.load.image('logo','FaceZapperLogo.png');
    },

    create: function ()
    {
        this.scene.start('preloader');
    }

});


// EXTERNAL MODULE: ./node_modules/webfontloader/webfontloader.js
var webfontloader = __webpack_require__(3);
var webfontloader_default = /*#__PURE__*/__webpack_require__.n(webfontloader);

// CONCATENATED MODULE: ./node_modules/phaser-webpack-loader/src/index.js


/**
 * Phaser Webpack Loader plugin for Phaser.
 */
class src_WebpackLoader extends Phaser.Plugins.ScenePlugin {
  /**
   * Setup the plugin.
   * @param  {Object} scene         Reference to scene owner.
   * @param  {Object} pluginManager Scene's plugin manager.
   */
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
  }

  /**
   * Start the loader plugin.
   * @param  {Object} manifest          Your asset manifest file contents.
   * @param  {String} postfix           (optional) Postfix to append to assets.
   */
  start(manifest, postfix = '') {
    // Pull the font values out of the manifest.
    this.fonts = manifest.fonts || {};

    // Pull the asset values out of the manifest.
    this.assets = {
      images: manifest.images || [],
      sprites: manifest.sprites || [],
      audio: manifest.audio || [],
      bitmapFonts: manifest.bitmapFonts || [],
    };

    // Define the loaders for the different asset types.
    this.loaders = {
      images: this._loadImage,
      sprites: this._loadSprite,
      audio: this._loadAudio,
      bitmapFonts: this._loadBitmapFont,
    };

    // Define the postfix string to apply to image assets (ex: @2x).
    this.postfix = postfix;
  }

  /**
   * Begins loading of all assets.
   * @return {Promise} Returns when loading is complete.
   */
  load() {
    return Promise.all([
      this._loadAssets(),
      this._loadFonts(),
    ]);
  }

  /**
   * Emit load event for each file that loads.
   * @param  {Object} file Reference to file that has loaded.
   */
  _emitLoad(file) {
    this.systems.events.emit('load', file);
  }

  /**
   * Load all assets in parallel.
   * @return {Promise} Returns when assets are loaded.
   */
  _loadAssets() {
    return new Promise((resolve) => {
      // Loop through all of the asset types and begin loading.
      Object.keys(this.assets).forEach((key) => {
        // Loop through each asset of this type.
        this.assets[key].forEach((asset) => {
          const assetData = asset.split('.');
          this.loaders[key].call(this, assetData[0], assetData[1]);
        });
      });

      // Emit load event on each file.
      this.scene.load.on('load', this._emitLoad, this);

      // Once everything has loaded, resolve the promise.
      this.scene.load.once('complete', () => {
        this.scene.load.off('load', this._emitLoad);
        resolve();
      });

      // Start the loading of the assets.
      this.scene.load.start();
    });
  }

  /**
   * Loads all defined web fonts using webfontloader.
   * @return {Promise} Returns when fonts are ready to use.
   */
  _loadFonts() {
    if (Object.keys(this.fonts).length === 0) {
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      webfontloader_default.a.load(Object.assign({}, this.fonts, {
        active: () => {
          this.systems.events.emit('load');
          resolve();
        },
      }));
    });
  }

  /**
   * Load an image.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadImage(name, ext) {
    const dir = 'images/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    this.scene.load.image(name, file);
  }

  /**
   * Load a spritesheet.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadSprite(name, ext) {
    const dir = 'sprites/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(4)(`./${dir}${name}${this.postfix}.json`);
    this.scene.load.atlas(name, file, data);
  }

  /**
   * Load an audio file.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadAudio(name, ext) {
    const dir = 'audio/';
    const file = __webpack_require__(5)(`./${dir}${name}.${ext}`);
    this.scene.load.audio(name, file);
  }

  /**
   * Load a bitmap font.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadBitmapFont(name, ext) {
    const dir = 'fonts/';
    const file = __webpack_require__(0)(`./${dir}${name}${this.postfix}.${ext}`);
    const data = __webpack_require__(6)(`./${dir}${name}${this.postfix}.xml`);
    this.scene.load.bitmapFont(name, file, data);
  }
}

// CONCATENATED MODULE: ./AssetManifest.js
const AssetManifest = {
    sprites: [
      'Sprites.png'
    ]
  }

/* harmony default export */ var AssetManifest_0 = (AssetManifest);
// CONCATENATED MODULE: ./src/Scenes/preloader.js





var Preloader = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Preloader ()
    {
        Phaser.Scene.call(this, { key: 'preloader' });
    },

    preload: function ()
    {
        this.add.image(game.config.width/2, game.config.height/5, 'logo');

        this.add.text(game.config.width/2, game.config.height/2, "Loading...")
            .setOrigin(0.5);

        var progress = this.add.graphics();
        this.load.on('progress', function (value) {

            progress.clear();
            progress.fillStyle(0xffffff, 1);
            progress.fillRect(0, game.config.height/1.7, 800 * value, 60);
    
        });
        this.load.on('complete', function () {

            progress.destroy();
    
        });
        
        this.load.scenePlugin('WebpackLoader', src_WebpackLoader, 'loader', 'loader');
    },

    create: function ()
    {
        this.loader.start(AssetManifest_0);
        this.loader.load().then(() => {
            // Done loading!
            
            this.scene.start('mainmenu');
        });
    }

});


// CONCATENATED MODULE: ./src/Animations/ui_animations.js
var UIAnimations = new Phaser.Class({

    //Extends: Phaser.GameObjects.Image,

    initialize:

    function UIAnimations (scene)
    {
        this.scene = scene;
    },

    moveUp: function(target, to, duration, delay){
        this.scene.tweens.add({
            targets: target,
            y: to,
            duration: duration,
            delay: delay,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    growIn: function(target){
        this.scene.tweens.add({
            targets: target,
            scaleX: 1,
            scaleY: 1,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fallDown: function(target){
        this.scene.tweens.add({
            targets: target,
            y: target.y+target.height,
            duration: 750,
            ease: 'Sine.easeOut'
        });
    },

    fadeIn2: function(target){
        this.scene.tweens.add({
            targets: target,
            alpha: 1,
            duration: 750,
            delay: 750,
            ease: 'Sine.easeOut'
        });
    },

});


// CONCATENATED MODULE: ./src/UIObjects/button.js
var Button = new Phaser.Class({

    Extends: Phaser.GameObjects.Image,

    initialize:

    function Button (scene, spritesheetName, imageName, x, y)
    {
        Phaser.GameObjects.Image.call(this, scene);

        this.image = imageName;

        this
            .setTexture(spritesheetName, imageName)
            .setInteractive()
            .setPosition(x, y)
            .on('pointerover', () => this.buttonHoverState(this) )
            .on('pointerout', () => this.buttonNormalState(this) );
    },

    buttonHoverState: function(button) {
        button.setTint(0xff0000);
    },

    buttonNormalState: function(button) {
        button.clearTint();
    }

});


// CONCATENATED MODULE: ./src/Scenes/how_to_play.js





var HowToPlay = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function HowToPlay ()
    {
        Phaser.Scene.call(this, { key: 'howtoplay' });
        window.OVER = this;
    },

    init: function (data)
    {
        this.numOfPlayers = data.numOfPlayers;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_level.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var tutorial = this.add.image(game.config.width/2, game.config.height/2.2,'Sprites','ui_tutorial.png');
        this.add.image(game.config.width/2, game.config.height/1.4,'Sprites','ui_tap_text.png');

        var startButton = this.children.add(new Button(this,'Sprites','btn_start.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var animations = new UIAnimations(this);
        animations.moveUp(startButton, game.config.height/1.15, 250, 0);
    },

    startGame: function() {
        this.scene.start('game', { numOfPlayers: this.numOfPlayers });
    }
});


// CONCATENATED MODULE: ./src/Scenes/main_menu.js





var MainMenu = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function MainMenu ()
    {
        Phaser.Scene.call(this, { key: 'mainmenu' });
        window.OVER = this;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_tutorial.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var logo = this.add.image(game.config.width/2, game.config.height/4,'Sprites','title.png');
        logo.setAlpha(0);

        var startButton = this.children.add(new Button(this,'Sprites','btn_start.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this,'Sprites','btn_high_scores.png', game.config.width/2, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this,'Sprites','btn_more_games.png', game.config.width/2, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        var animations = new UIAnimations(this);
        animations.fadeIn(logo);      
        animations.moveUp(startButton, game.config.height/2, 250, 0);
        animations.moveUp(highScoresButton, game.config.height/1.55, 250, 250);
        animations.moveUp(moreGamesButton,game.config.height/1.3, 250, 500);

        var highScore = localStorage.getItem("zboop_highscore");
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/2.2, game.config.height - 120, 'High Score', { font: '32px Courier', fill: '#000000' });
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(highScoreLabel.x + 150, highScoreLabel.y, highScore, { font: '32px Courier', fill: '#FFFFFF' });
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            animations.fadeIn2(highScoreText);
        }  

        var websiteText = this.add.text(game.config.width/2, game.config.height - 65, 'www.planetboop.com', { font: '20px Courier', fill: '#FFFFFF' });
        websiteText.setOrigin(0.5);
        websiteText.setAlpha(0);
        animations.fadeIn2(websiteText);
    },

    startGame: function() {
        this.scene.start('howtoplay');
    },

    highScores: function() {
        this.scene.start('highscores');
    },

    moreGames: function() {
        window.open("http://planetboop.com",  "_blank")
    },

    
});


// CONCATENATED MODULE: ./src/Scenes/game.js


var globalScene;

var game_Game = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function Game ()
    {
        Phaser.Scene.call(this, { key: 'game' });
        window.GAME = this;

        this.midX = game.config.width/2;
        this.midY = game.config.height/2;

        this.player;
        this.followingPlayer = false;
        this.background;

        this.score = 0;
        this.scoreBar;
        this.scoreText;

        this.currentBox;
        this.boxGroup;

        this.initialCheck = true;
        this.falling = false;

        this.previousTime = 0;
    },

    create: function ()
    {
        globalScene = this;

        this.followingPlayer = false;
        this.score = 0;
        this.initialCheck = true;
        this.falling = false;
        this.previousTime = 0;

        this.background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_base.png')
            .setDisplaySize(game.config.width, game.config.height)
            .setScrollFactor(0);

        this.boxGroup = this.physics.add.staticGroup();

        //var initialBox = this.boxGroup.create(game.config.width/2 + (i*100), game.config.height/2 - (j*50), 'Sprites','asset_cube.png');
        var initialBox = this.boxGroup.create(game.config.width/2, game.config.height/2 - 100, 'Sprites','asset_cube.png');
        initialBox.setOrigin(0.9,0.6);
        initialBox.setDepth(9998);
        initialBox.setSize(50,50);
        this.currentBox = initialBox;

        for (var i=0; i<2; i++){
            for (var j=0; j<2; j++)
            {
                globalScene.initialBoxes(j);
            }
        }

        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/3,'Sprites','boop_1.png')
            .setVelocity(-56.5 * 3, -30 * 3)
            //.setOrigin(0.5,1)
            .setDepth(9999)
            //.setSize(30, 30);

        var timedEventTarget = this.time.addEvent({ delay: 200, callback: this.addNewBox, callbackscope: this, loop: true });

        this.score = 0;
        this.scoreBar = this.add.image(0, 0, 'Sprites', 'ui_textbar.png');
        this.scoreBar.setPosition(this.scoreBar.displayWidth/2, this.scoreBar.displayHeight/2)
            .setScrollFactor(0)
            .setDepth(10000);
        this.scoreText = this.add.text(this.scoreBar.x, this.scoreBar.y + 30, "0", { font: '32px Courier', fill: '#FFFFFF' })
            .setOrigin(0.5)
            .setScrollFactor(0)
            .setDepth(10001);

        this.input.on('pointerdown', this.changeDirection, this);

        this.physics.add.overlap(this.player, this.boxGroup);

        this.cameras.main.startFollow(this.player, true);
    },

    initialBoxes: function(index)
    {
        var box1XPos = globalScene.currentBox.x + -globalScene.currentBox.displayWidth/2 + 10;
        var box1YPos = globalScene.currentBox.y - 28;

        var box2XPos = globalScene.currentBox.x + globalScene.currentBox.displayWidth/2 - 10;
        var box2YPos = globalScene.currentBox.y - 30;

        var depth = globalScene.currentBox.depth - 1;

        var newBox1 = globalScene.boxGroup.create(box1XPos, box1YPos,'Sprites','asset_cube.png');
        newBox1.setOrigin(0.9,0.6);
        newBox1.setDepth(depth);
        newBox1.setSize(50,50);

        var newBox2 = globalScene.boxGroup.create(box2XPos, box2YPos,'Sprites','asset_cube.png');
        newBox2.setOrigin(0.9,0.6);
        newBox2.setDepth(depth);
        newBox2.setSize(50,50);

        if (index == 0) globalScene.currentBox = newBox2;
        if (index == 1) globalScene.currentBox = newBox1;
    },

    addNewBox: function()
    {
        var boxSide = Phaser.Math.Between(0, 1);
        var boxXPos = globalScene.currentBox.x + ((boxSide == 0) ? -globalScene.currentBox.displayWidth/2 + 10 : globalScene.currentBox.displayWidth/2 - 10);
        var boxYPos = globalScene.currentBox.y - ((boxSide == 0) ? 28 : 30);

        var depth = globalScene.currentBox.depth - 1;
        var newBox = globalScene.boxGroup.create(boxXPos, boxYPos,'Sprites','asset_cube.png');
        newBox.setOrigin(0.9,0.6);
        newBox.setDepth(depth);
        newBox.setSize(50,50);
        globalScene.currentBox = newBox;
    },

    changeDirection: function()
    {
        this.player.setVelocity(-this.player.body.velocity.x, this.player.body.velocity.y);
    },

    increaseScore: function()
    {
        this.scoreText.setText(++this.score);
    },

    update: function (time, delta)
    {
        if (this.initialCheck)
        {
            this.initialCheck = false;
        }
        else if (this.player.body.touching.none)
        {
            this.player.setVelocity(0,400);
            this.player.setDepth(1);
            this.cameras.main.stopFollow();

            if (this.player.y > this.cameras.main.midPoint.y + game.config.height / 2) 
            {
                this.scene.start('gameover', { score: this.score });
            }
        }

        if (time - this.previousTime > 500)
        {
            this.increaseScore();
            this.previousTime = time;
        }
    }
});


// CONCATENATED MODULE: ./src/Scenes/game_over.js





var GameOver = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize:

    function GameOver ()
    {
        Phaser.Scene.call(this, { key: 'gameover' });
        window.OVER = this;
    },

    init: function (data)
    {
        this.score = data.score;
    },

    create: function ()
    {
        var background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_level.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var board = this.add.image(game.config.width/2, 0, 'Sprites','ui_game_over.png');
        board.y -= board.displayHeight/2;

        var scoreText = this.add.text(game.config.width/2, game.config.height/2, 'Your score: ' + this.score, { font: '42px Courier', fill: '#000000' });
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0);   

        var restartButton = this.children.add(new Button(this, 'Sprites', 'btn_replay.png', game.config.width/3.3, game.config.height + 175));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'Sprites', 'btn_main_menu.png', game.config.width/1.4, game.config.height + 175));
        menuButton.on('pointerdown', () => this.openMenu() );

        var animations = new UIAnimations(this);
        animations.fallDown(board);
        animations.fadeIn2(scoreText);
        animations.moveUp(restartButton, game.config.height - 120, 500, 750);
        animations.moveUp(menuButton, game.config.height - 120, 500, 900);

        var highScore = localStorage.getItem("zboop_highscore");
        if (highScore === null || this.score > highScore){
            localStorage.setItem("zboop_highscore", this.score);
        }        
    },

    startGame: function() {
        this.scene.start('game');
    },

    openMenu: function() {
        this.scene.start('mainmenu');
    }

});


// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "game", function() { return game; });







var game;

function resize() {
    var canvas = document.querySelector("canvas");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowRatio = windowWidth / windowHeight;
    var gameRatio = game.config.width / game.config.height;

    if(windowRatio < gameRatio){
        canvas.style.width = windowWidth + "px";
        canvas.style.height = (windowWidth / gameRatio) + "px";
    }
    else {
        canvas.style.width = (windowHeight * gameRatio) + "px";
        canvas.style.height = windowHeight + "px";
    }
}

window.onload = function() {
    var config = {
        type: Phaser.AUTO,
        width: 650,
        height: 950,
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 0 },
                debug: false
            }
        },
        scene: [ Boot, Preloader, MainMenu, HowToPlay, game_Game, GameOver ]
    };
    game = new Phaser.Game(config);
    resize();
    window.addEventListener("resize", resize, false);
}



/***/ })
/******/ ]);