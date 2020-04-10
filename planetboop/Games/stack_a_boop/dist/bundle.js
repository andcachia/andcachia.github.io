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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audio/Jump.wav": 2,
	"./audio/LandOnCardboard.wav": 3,
	"./audio/LandOnMetal.wav": 4,
	"./audio/LandOnWood.wav": 5,
	"./audio/MachineWhir.wav": 6,
	"./audio/Punch.wav": 7,
	"./audio/WumpaStackTheme.wav": 8,
	"./sprites/Sprites.json": 1,
	"./sprites/Sprites.png": 9
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

module.exports = JSON.parse("{\"textures\":[{\"image\":\"Sprites.png\",\"format\":\"RGBA8888\",\"size\":{\"w\":1888,\"h\":1805},\"scale\":1,\"frames\":[{\"filename\":\"background_level.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":961},\"frame\":{\"x\":1,\"y\":1,\"w\":641,\"h\":961}},{\"filename\":\"ui_game_over.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":551,\"h\":840},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":551,\"h\":840},\"frame\":{\"x\":1,\"y\":964,\"w\":551,\"h\":840}},{\"filename\":\"background_tutorial.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":961},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":961},\"frame\":{\"x\":644,\"y\":1,\"w\":641,\"h\":961}},{\"filename\":\"tutorial.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":641,\"h\":744},\"spriteSourceSize\":{\"x\":0,\"y\":4,\"w\":641,\"h\":740},\"frame\":{\"x\":554,\"y\":964,\"w\":641,\"h\":740}},{\"filename\":\"screen_panel.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":424,\"h\":746},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":423,\"h\":746},\"frame\":{\"x\":1287,\"y\":1,\"w\":423,\"h\":746}},{\"filename\":\"btn_play_now.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":321,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":321,\"h\":98},\"frame\":{\"x\":554,\"y\":1706,\"w\":321,\"h\":98}},{\"filename\":\"btn_subbmit.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":320,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":320,\"h\":98},\"frame\":{\"x\":877,\"y\":1706,\"w\":320,\"h\":98}},{\"filename\":\"title.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":383,\"h\":312},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":383,\"h\":308},\"frame\":{\"x\":1287,\"y\":749,\"w\":383,\"h\":308}},{\"filename\":\"background_base.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":185},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":185},\"frame\":{\"x\":1197,\"y\":1059,\"w\":641,\"h\":185}},{\"filename\":\"asset_top_screen_score.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":641,\"h\":83},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":641,\"h\":83},\"frame\":{\"x\":1197,\"y\":1246,\"w\":641,\"h\":83}},{\"filename\":\"asset_hight_score_line.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":650,\"h\":15},\"spriteSourceSize\":{\"x\":0,\"y\":3,\"w\":646,\"h\":7},\"frame\":{\"x\":1197,\"y\":1331,\"w\":646,\"h\":7}},{\"filename\":\"ui_textbar.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":333,\"h\":195},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":333,\"h\":195},\"frame\":{\"x\":1197,\"y\":1340,\"w\":333,\"h\":195}},{\"filename\":\"btn_start.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":402,\"h\":113},\"spriteSourceSize\":{\"x\":1,\"y\":0,\"w\":400,\"h\":113},\"frame\":{\"x\":1197,\"y\":1537,\"w\":400,\"h\":113}},{\"filename\":\"btn_replay.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":127},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":127},\"frame\":{\"x\":1712,\"y\":1,\"w\":175,\"h\":127}},{\"filename\":\"box_5.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":175,\"h\":118},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":175,\"h\":118},\"frame\":{\"x\":1712,\"y\":130,\"w\":175,\"h\":118}},{\"filename\":\"asset_toilet_sucker_1.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":242,\"h\":97},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":242,\"h\":97},\"frame\":{\"x\":1532,\"y\":1340,\"w\":242,\"h\":97}},{\"filename\":\"btn_hight_scores.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":249,\"h\":78},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":249,\"h\":78},\"frame\":{\"x\":1532,\"y\":1439,\"w\":249,\"h\":78}},{\"filename\":\"btn_menu.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":174,\"h\":127},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":174,\"h\":127},\"frame\":{\"x\":1712,\"y\":250,\"w\":174,\"h\":127}},{\"filename\":\"asset_boop_jumper.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":188,\"h\":150},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":188,\"h\":150},\"frame\":{\"x\":1599,\"y\":1519,\"w\":188,\"h\":150}},{\"filename\":\"box_2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":174,\"h\":118},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":174,\"h\":118},\"frame\":{\"x\":1712,\"y\":379,\"w\":174,\"h\":118}},{\"filename\":\"box_6.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":174,\"h\":118},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":174,\"h\":118},\"frame\":{\"x\":1712,\"y\":499,\"w\":174,\"h\":118}},{\"filename\":\"box_1.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":173,\"h\":118},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":173,\"h\":118},\"frame\":{\"x\":1712,\"y\":619,\"w\":173,\"h\":118}},{\"filename\":\"asset_toilet_sucker_2.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":235,\"h\":98},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":235,\"h\":98},\"frame\":{\"x\":1199,\"y\":1652,\"w\":235,\"h\":98}},{\"filename\":\"asset_website.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":262,\"h\":28},\"spriteSourceSize\":{\"x\":3,\"y\":0,\"w\":253,\"h\":24},\"frame\":{\"x\":1199,\"y\":1752,\"w\":253,\"h\":24}},{\"filename\":\"asset_boop_player.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":141,\"h\":131},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":141,\"h\":131},\"frame\":{\"x\":1672,\"y\":749,\"w\":141,\"h\":131}},{\"filename\":\"box_3.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":177,\"h\":121},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":177,\"h\":121},\"frame\":{\"x\":1672,\"y\":882,\"w\":177,\"h\":121}},{\"filename\":\"btn_more_games.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":249,\"h\":78},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":249,\"h\":78},\"frame\":{\"x\":1436,\"y\":1671,\"w\":249,\"h\":78}},{\"filename\":\"box_4.png\",\"rotated\":false,\"trimmed\":false,\"sourceSize\":{\"w\":177,\"h\":121},\"spriteSourceSize\":{\"x\":0,\"y\":0,\"w\":177,\"h\":121},\"frame\":{\"x\":1687,\"y\":1671,\"w\":177,\"h\":121}},{\"filename\":\"asset_text.png\",\"rotated\":false,\"trimmed\":true,\"sourceSize\":{\"w\":132,\"h\":22},\"spriteSourceSize\":{\"x\":1,\"y\":2,\"w\":131,\"h\":18},\"frame\":{\"x\":1672,\"y\":1005,\"w\":131,\"h\":18}}]}],\"meta\":{\"app\":\"https://www.codeandweb.com/texturepacker\",\"version\":\"3.0\",\"smartupdate\":\"$TexturePacker:SmartUpdate:1ae4f5c980567cf70bf4bda8cd41c48a:d4f469de683126b8ef130292913e3e3c:3cdb13131f548fed5fbd9288201b06ea$\"}}");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f6f7bd7dc828a8abdb46899c6ff24233.wav";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ae9d6452ab3545683ad4ea906e7d37c7.wav";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44ae9eb22a66ec52d7d9b696bcb5786b.wav";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a02c06cd0ddaf37c6b0ebe5fbd12f63c.wav";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c2007e93457df967ff3686ba39d9ad4a.wav";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "75b4e0aee7afbe783e18f9b60c881006.wav";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6198b5ae9ce9b6c43eb235f74cd0030f.wav";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2ca256f6c17ba36456d4e0ef3fe3c3b8.png";

/***/ }),
/* 10 */
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
/* 11 */
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
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./audio/Jump.wav": 2,
	"./audio/LandOnCardboard.wav": 3,
	"./audio/LandOnMetal.wav": 4,
	"./audio/LandOnWood.wav": 5,
	"./audio/MachineWhir.wav": 6,
	"./audio/Punch.wav": 7,
	"./audio/WumpaStackTheme.wav": 8,
	"./sprites/Sprites.json": 1,
	"./sprites/Sprites.png": 9
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
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 13;

/***/ }),
/* 14 */
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
var webfontloader = __webpack_require__(10);
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
    const data = __webpack_require__(11)(`./${dir}${name}${this.postfix}.json`);
    this.scene.load.atlas(name, file, data);
  }

  /**
   * Load an audio file.
   * @param  {String} name Name of the file.
   * @param  {String} ext  File extension.
   */
  _loadAudio(name, ext) {
    const dir = 'audio/';
    const file = __webpack_require__(12)(`./${dir}${name}.${ext}`);
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
    const data = __webpack_require__(13)(`./${dir}${name}${this.postfix}.xml`);
    this.scene.load.bitmapFont(name, file, data);
  }
}

// CONCATENATED MODULE: ./AssetManifest.js
const AssetManifest = {
    sprites: [
      'Sprites.png'
    ],
    audio: [
      'Jump.wav',
      'LandOnCardboard.wav',
      'LandOnMetal.wav',
      'LandOnWood.wav',
      'MachineWhir.wav',
      'Punch.wav',
      'WumpaStackTheme.wav'
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
        this.load.script('https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont');
    },

    create: function ()
    {
        this.loader.start(AssetManifest_0);
        this.loader.load().then(() => {
            // Done loading!

            var music = this.sound.add('WumpaStackTheme', { loop: true });
            music.play();
            
            WebFont.load({
                active: () => this.scene.start('mainmenu'),
                google: {
                  families: ['Montserrat:800'],
                }
              });
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
        var background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_tutorial.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var tutorial = this.add.image(game.config.width/2, game.config.height/2.2,'Sprites','tutorial.png');

        var startButton = this.children.add(new Button(this,'Sprites','btn_play_now.png', game.config.width/2, game.config.height + 100));
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
        var background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_level.png');
        background.setDisplaySize(game.config.width, game.config.height);

        var logo = this.add.image(game.config.width/2, game.config.height/5,'Sprites','title.png');
        logo.setAlpha(0);

        var startButton = this.children.add(new Button(this,'Sprites','btn_play_now.png', game.config.width/2, game.config.height + 100));
        startButton.on('pointerdown', () => this.startGame() );

        var highScoresButton = this.children.add(new Button(this,'Sprites','btn_hight_scores.png', game.config.width/2 - 135, game.config.height + 100));
        highScoresButton.on('pointerdown', () => this.highScores() );

        var moreGamesButton = this.children.add(new Button(this,'Sprites','btn_more_games.png', game.config.width/2 + 135, game.config.height + 100));
        moreGamesButton.on('pointerdown', () => this.moreGames() );

        var animations = new UIAnimations(this);
        animations.fadeIn(logo);      
        animations.moveUp(startButton, 565, 250, 0);
        animations.moveUp(highScoresButton, 680, 250, 250);
        animations.moveUp(moreGamesButton, 680, 250, 500);

        var highScore = localStorage.getItem("stackaboop_highscore");
        if (!(highScore === null)){
            var highScoreLabel = this.add.text(game.config.width/2, game.config.height/2 - 75, 'MY TOP STACK', { fontFamily: "Montserrat", fontSize: 32, color: '#00ff33' }).setFontStyle('bold italic');
            highScoreLabel.setOrigin(0.5);
            highScoreLabel.setAlpha(0);   
            animations.fadeIn2(highScoreLabel);

            var highScoreText = this.add.text(highScoreLabel.x, highScoreLabel.y + 50, highScore, { fontFamily: "Montserrat", fontSize: 50, color: "#FFFFFF" }).setFontStyle('bold italic');
            highScoreText.setOrigin(0.5);
            highScoreText.setAlpha(0);   
            animations.fadeIn2(highScoreText);
        }  

        var backgroundBase = this.add.image(game.config.width/2, game.config.height,'Sprites','background_base.png');
        backgroundBase.y -= backgroundBase.displayHeight/2;

        var websiteText = this.add.text(game.config.width/2 + 25, 908, 'www.planetboop.com', { fontFamily: "Montserrat", fontSize: 20, color: "#FFFFFF" });
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
        this.playerHit;
        this.followingPlayer;
        this.background;

        this.boxGroup;
        this.currentBoxYPos;

        this.scoreBar;
        this.scoreText;

        this.suckerLeft;
        this.suckerRight;

        this.sfxJump;
        this.sfxLandOnCardboard;
        this.sfxLandOnMetal;
        this.sfxLandOnWood;
        this.sfxMachineWhir;
        this.sfxPunch;

        this.currentBoxSound;

        this.initVariables();
    },

    initVariables : function()
    {
        this.playerHit = false;
        this.followingPlayer = false;

        this.boxSpeed = 550;
        this.boxDelaySecondsRange = [1250,2000];
        this.boxDelaySeconds = 2000;
        this.boxDelayPreviousTime = 0
        this.boxSide = 0;

        this.lastIncreasedSpeedTime = 0;
        this.increaseSpeedDelay = 10000;

        this.score = 0;
    },

    create: function ()
    {
        globalScene = this;

        this.initVariables();

        // Set sfx
        this.sfxJump = this.sound.add('Jump');
        this.sfxLandOnCardboard = this.sound.add('LandOnCardboard');
        this.sfxLandOnMetal = this.sound.add('LandOnMetal');
        this.sfxLandOnWood = this.sound.add('LandOnWood');
        this.sfxMachineWhir = this.sound.add('MachineWhir');
        this.sfxMachineWhir.volume = 0.3;
        this.sfxPunch = this.sound.add('Punch');
        this.currentBoxSound = this.sfxLandOnWood;

        // Set background
        this.background = this.add.image(game.config.width/2, game.config.height/2,'Sprites','background_level.png')
            .setDisplaySize(game.config.width, game.config.height)
            .setScrollFactor(0);

        // Player config
        this.player = this.physics.add.sprite(game.config.width/2, game.config.height/1.9,'Sprites','asset_boop_jumper.png');
        this.player.setSize(110);
        this.player.setBounce(0.1);

        // Set bottom floor
        var backgroundBase = this.add.image(game.config.width/2, game.config.height,'Sprites','background_base.png');
        var backgroundBase2 = this.add.image(game.config.width/2, game.config.height,'Sprites','background_base.png');
        backgroundBase.y -= backgroundBase.displayHeight/2;
        backgroundBase2.y += backgroundBase.displayHeight/2;

        // NPC
        var npcBoop = this.add.image(game.config.width * 0.8, game.config.height,'Sprites','asset_boop_player.png')
        npcBoop.y -= backgroundBase.displayHeight + npcBoop.displayHeight/2;

        // Define box group
        this.boxGroup = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        // Initial starting box
        var initialBox = this.boxGroup.create(game.config.width/2, game.config.height, 'Sprites','box_4.png');
        initialBox.y -= backgroundBase.displayHeight + initialBox.displayHeight/2;
        this.currentBoxYPos = initialBox.y - initialBox.displayHeight;
        this.boxDelayPreviousTime = 0;

        // Score bar
        this.scoreBar = this.add.image(0, 0, 'Sprites', 'asset_top_screen_score.png');
        this.scoreBar.setPosition(this.scoreBar.displayWidth/2 + 3, this.scoreBar.displayHeight/2)
            .setScrollFactor(0);
        this.scoreText = this.add.text(this.scoreBar.x, this.scoreBar.y, "0", { fontFamily: "Montserrat", fontSize: 40, color: "#FFFFFF" })
            .setOrigin(0.5)
            .setScrollFactor(0);

        // Define collider
        this.physics.add.collider(this.player, this.boxGroup);

        // Define jump funciton on click
        this.input.on('pointerdown', this.jump, this);

        // Left and right suckers config
        this.suckerLeft = this.physics.add.sprite(-100, -100,'Sprites','asset_toilet_sucker_1.png');
        this.suckerRight = this.physics.add.sprite(-100, -100,'Sprites','asset_toilet_sucker_2.png');
        this.suckerLeft.range = this.suckerLeft.width/2;
        this.suckerRight.range = game.config.width - this.suckerRight.width/2;
        this.suckerLeft.body.allowGravity = false;
        this.suckerRight.body.allowGravity = false;

        //this.cameras.main.startFollow(this.player, true, 0.5, 0.5);
    },

    addNewBox: function()
    {
        // Alternating left and right
        this.boxSide = (this.boxSide == 0) ? 1 : 0;
        var boxStartingPos = (this.boxSide == 0) ? -100 : (game.config.width + 100);

        // Box image + repsective sound
        var boxImage = Phaser.Math.Between(1, 6);
        var newBox = this.boxGroup.create(boxStartingPos, this.currentBoxYPos,'Sprites','box_'+boxImage+'.png');
        newBox.active = true;
        this.currentBoxSound = setBoxSound(boxImage);

        // Move box to center
        var target = {};
        target.x = game.config.width/2;
        target.y = this.currentBoxYPos;
        this.physics.moveToObject(newBox, target, globalScene.boxSpeed);

        this.currentBoxYPos -= newBox.displayHeight;

        // Move suckers with box
        var target2 = {};
        target2.y = target.y; 

        if (this.boxSide == 0){
            target2.x = this.suckerLeft.displayWidth/2 - 90;
            this.suckerLeft.x = boxStartingPos - this.suckerLeft.displayWidth/2 - newBox.displayWidth/2;
            this.suckerLeft.y = newBox.y;
            this.physics.moveToObject(this.suckerLeft, target2, globalScene.boxSpeed);
        }
        else{
            target2.x = game.config.width - this.suckerLeft.displayWidth/2 + 100;
            this.suckerRight.x = boxStartingPos + this.suckerLeft.displayWidth/2 + newBox.displayWidth/2;
            this.suckerRight.y = newBox.y;
            this.physics.moveToObject(this.suckerRight, target2, globalScene.boxSpeed);
        }

        this.sfxMachineWhir.play();

        function setBoxSound(boxImage){
            switch(boxImage){
                case 1:
                case 2: return globalScene.sfxLandOnCardboard;
                case 3: return globalScene.sfxLandOnMetal;
                case 4:
                case 5:
                case 6: return globalScene.sfxLandOnWood;
            }
        }
    },

    jump: function()
    {
        if (!this.playerHit && this.player.body.touching.down){
            this.player.setVelocityY(-900);
            this.sfxJump.play();
        }
    },

    increaseSpeed: function()
    {
        this.boxSpeed += 50;
        console.log("Speed increased");
    },

    increaseScore: function()
    {
        this.scoreText.setText(++this.score);
    },

    update: function (time, delta)
    {
        // Camera to start following player after first jump
        if (!this.followingPlayer && this.player.y < this.midY){
            this.followingPlayer = true;
            this.cameras.main.startFollow(this.player, true, 0.5, 0.5);
        }

        // Push new box
        if (this.boxDelayPreviousTime == 0) this.boxDelayPreviousTime = time;
        var elapsedTimeSinceLastBox = time - this.boxDelayPreviousTime;
        if (elapsedTimeSinceLastBox >= this.boxDelaySeconds){
            this.addNewBox();
            this.boxDelayPreviousTime = time;
            this.boxDelaySeconds = Phaser.Math.Between(this.boxDelaySecondsRange[0], this.boxDelaySecondsRange[1]);
        }

        // Destroy boxes which are out of screen to save resources
        var toBeRemoved = null;
        this.boxGroup.children.iterate(function(child){
            if (child.active){
                if (child.body.touching.up){
                    child.setVelocity(0);
                    globalScene.increaseScore();
                    child.active = false;
                    globalScene.currentBoxSound.play();
                }
                else if (child.x > globalScene.midX - 10 && child.x < globalScene.midX + 10){
                    child.setVelocity(0);
                }
            }
            if (child.y > globalScene.cameras.main.midPoint.y + game.config.height/2 + 200){
                toBeRemoved = child;
            }
        });

        if (toBeRemoved != null) globalScene.boxGroup.remove(toBeRemoved, true, true);
        
        // Detect if player has been hit
        if (this.player.body.touching.left || this.player.body.touching.right){
            this.playerHit = true;
            this.sfxPunch.play();
            this.cameras.main.stopFollow();
        }

        if (this.playerHit){
            this.player.rotation += 0.01;

            if (this.player.x < -100 || this.player.x > game.config.width + 100)
            {
                this.scene.start('gameover', { score: this.score });
            }
        }

        // Change sucker direction once it has pushed box to center
        if (this.suckerLeft.range - 15 < this.suckerLeft.x && this.suckerLeft.x < this.suckerLeft.range + 15)
        {
            this.suckerLeft.setVelocity(-this.suckerLeft.body.velocity.x, 0);
        }
        if (this.suckerRight.range - 15 < this.suckerRight.x && this.suckerRight.x < this.suckerRight.range + 15)
        {
            this.suckerRight.setVelocity(-this.suckerRight.body.velocity.x, 0);
        }

        // Increase speed
        if (this.lastIncreasedSpeedTime == 0) this.lastIncreasedSpeedTime = time;
        if (time - this.lastIncreasedSpeedTime > this.increaseSpeedDelay) {
            this.lastIncreasedSpeedTime = time;
            this.increaseSpeed();
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

        var scoreLabel = this.add.text(game.config.width/2, game.config.height/4 - 20, 'YOUR SCORE', { fontFamily: "Montserrat", fontSize: 32, color: '#00ff33' }).setFontStyle('italic');
        scoreLabel.setOrigin(0.5);
        scoreLabel.setAlpha(0);   

        var scoreText = this.add.text(scoreLabel.x, scoreLabel.y + 50, this.score , { fontFamily: "Montserrat", fontSize: 50, color: "#FFFFFF" }).setFontStyle('italic');
        scoreText.setOrigin(0.5);
        scoreText.setAlpha(0);   

        var restartButton = this.children.add(new Button(this, 'Sprites', 'btn_replay.png', game.config.width/3, game.config.height + 100));
        restartButton.on('pointerdown', () => this.startGame() );

        var menuButton = this.children.add(new Button(this, 'Sprites', 'btn_menu.png', game.config.width/1.5, game.config.height + 100));
        menuButton.on('pointerdown', () => this.openMenu() );

        var animations = new UIAnimations(this);
        animations.fallDown(board);
        animations.fadeIn2(scoreLabel);
        animations.fadeIn2(scoreText);
        animations.moveUp(restartButton, game.config.height - 225, 500, 750);
        animations.moveUp(menuButton, game.config.height - 225, 500, 900);

        var highScore = localStorage.getItem("stackaboop_highscore");
        if (highScore === null || this.score > highScore){
            localStorage.setItem("stackaboop_highscore", this.score);
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
                gravity: { y: 2000 },
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