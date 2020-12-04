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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(this,function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",f="date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,c=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+$(r,2,"0")+":"+$(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},y="en",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if("string"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!("Invalid Date"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+"Hours",0);case r:return l(D+"Minutes",1);case n:return l(D+"Seconds",2);case e:return l(D+"Milliseconds",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d="set"+(this.$u?"UTC":""),$=(h={},h[i]=d+"Date",h[f]=d+"Date",h[u]=d+"Month",h[o]=d+"FullYear",h[r]=d+"Hours",h[n]=d+"Minutes",h[e]=d+"Seconds",h[t]=d+"Milliseconds",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(":","")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t(e,S,v),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: films */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "films", function() { return films; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/utils.js");
/* harmony import */ var _mock_movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock/movie.js */ "./src/mock/movie.js");
/* harmony import */ var _mock_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock/filter.js */ "./src/mock/filter.js");
/* harmony import */ var _mock_const_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mock/const.js */ "./src/mock/const.js");
/* harmony import */ var _mock_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mock/show-more-button.js */ "./src/mock/show-more-button.js");
/* harmony import */ var _view_user_rank_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/user-rank.js */ "./src/view/user-rank.js");
/* harmony import */ var _view_menu_filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/menu-filters.js */ "./src/view/menu-filters.js");
/* harmony import */ var _view_menu_sorting_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/menu-sorting.js */ "./src/view/menu-sorting.js");
/* harmony import */ var _view_movies_wrapper_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./view/movies-wrapper.js */ "./src/view/movies-wrapper.js");
/* harmony import */ var _view_movie_card_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/movie-card.js */ "./src/view/movie-card.js");
/* harmony import */ var _view_list_empty_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/list-empty.js */ "./src/view/list-empty.js");




// import {openPopup} from "./mock/popup.js";










const {MOVIES_NUM_ALL, MOVIES_NUM_PER_STEP} = _mock_const_js__WEBPACK_IMPORTED_MODULE_3__["moviesNum"];

const films = new Array(MOVIES_NUM_ALL).fill().map(_mock_movie_js__WEBPACK_IMPORTED_MODULE_1__["generateMovie"]);

const filters = Object(_mock_filter_js__WEBPACK_IMPORTED_MODULE_2__["generateFilter"])(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteHeaderElement, new _view_user_rank_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement());
Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_menu_filters_js__WEBPACK_IMPORTED_MODULE_6__["default"](filters).getElement());

const renderFilms = function (place) {
  for (let i = 0; i < Math.min(films.length, MOVIES_NUM_PER_STEP); i++) {
    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(place, new _view_movie_card_js__WEBPACK_IMPORTED_MODULE_9__["default"](films[i]).getElement());
  }
};

if (films.length === 0) {
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_list_empty_js__WEBPACK_IMPORTED_MODULE_10__["default"]().getElement());
} else {

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_menu_sorting_js__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement());
  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_movies_wrapper_js__WEBPACK_IMPORTED_MODULE_8__["default"]().getElement());

  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);

  renderFilms(container);

  Object(_mock_show_more_button_js__WEBPACK_IMPORTED_MODULE_4__["showMoreButton"])();
}


/***/ }),

/***/ "./src/mock/const.js":
/*!***************************!*\
  !*** ./src/mock/const.js ***!
  \***************************/
/*! exports provided: titles, ratings, years, durations, genres, posters, sentences, sentencesNum, moviesNum, commentsNum, emojis, MAX_LENGTH_SHORT_DESCRIPTION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratings", function() { return ratings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durations", function() { return durations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genres", function() { return genres; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "posters", function() { return posters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentences", function() { return sentences; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sentencesNum", function() { return sentencesNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesNum", function() { return moviesNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentsNum", function() { return commentsNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emojis", function() { return emojis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_LENGTH_SHORT_DESCRIPTION", function() { return MAX_LENGTH_SHORT_DESCRIPTION; });
const titles = [
  `The Dance of Life`,
  `Sagebrush Trail`,
  `The Man with the Golden Arm`,
  `Santa Claus Conquers the Martians`,
  `Popeye the Sailor Meets Sindbad the Sailor`,
  `Made for each other`,
  `The great flamarion`
];

const ratings = {
  MIN_RATING: 1,
  MAX_RATING: 10
};

const years = {
  MIN_YEAR: 1950,
  MAX_YEAR: 1999
};

const durations = {
  MIN_DURATION: 70,
  MAX_DURATION: 200
};

const genres = [
  `Musical`,
  `Western`,
  `Drama`,
  `Comedy`,
  `Cartoon`
];

const posters = [
  `./images/posters/made-for-each-other.jpg`,
  `./images/posters/popeye-meets-sinbad.jpg`,
  `./images/posters/sagebrush-trail.jpg`,
  `./images/posters/santa-claus-conquers-the-martians.jpg`,
  `./images/posters/the-dance-of-life.jpg`,
  `./images/posters/the-great-flamarion.jpg`,
  `./images/posters/the-man-with-the-golden-arm.jpg`
];

const sentences = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const sentencesNum = {
  MIN_SENTENCES: 1,
  MAX_SENTENCES: 5
};

const moviesNum = {
  MOVIES_NUM_ALL: 20,
  MOVIES_NUM_PER_STEP: 5
};

const commentsNum = {
  MIN_COMMENTS: 0,
  MAX_COMMENTS: 5
};

const emojis = [
  `./images/emoji/angry.png`,
  `./images/emoji/puke.png`,
  `./images/emoji/sleeping.png`,
  `./images/emoji/smile.png`
];

const MAX_LENGTH_SHORT_DESCRIPTION = 140;


/***/ }),

/***/ "./src/mock/filter.js":
/*!****************************!*\
  !*** ./src/mock/filter.js ***!
  \****************************/
/*! exports provided: generateFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilter", function() { return generateFilter; });
const filmToFilterMap = {
  watchList: (films) => films.filter((film) => film.isInWatchList).length,
  watched: (films) => films.filter((film) => film.isWatched).length,
  favorite: (films) => films.filter((film) => film.isFavorite).length,
};

const generateFilter = (films) => {
  return Object.entries(filmToFilterMap).map(([filterName, countTasks]) => {
    return {
      name: filterName,
      count: countTasks(films),
    };
  });
};


/***/ }),

/***/ "./src/mock/movie.js":
/*!***************************!*\
  !*** ./src/mock/movie.js ***!
  \***************************/
/*! exports provided: generateMovie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMovie", function() { return generateMovie; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/mock/const.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);




const generateTitle = () => {
  return _const_js__WEBPACK_IMPORTED_MODULE_1__["titles"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["titles"].length - 1)];
};

const generateRating = () => {
  const {MIN_RATING, MAX_RATING} = _const_js__WEBPACK_IMPORTED_MODULE_1__["ratings"];

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_RATING, MAX_RATING);
};

const generateYear = () => {
  const {MIN_YEAR, MAX_YEAR} = _const_js__WEBPACK_IMPORTED_MODULE_1__["years"];

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_YEAR, MAX_YEAR);
};

const generateDuration = () => {
  const {MIN_DURATION, MAX_DURATION} = _const_js__WEBPACK_IMPORTED_MODULE_1__["durations"];

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_DURATION, MAX_DURATION);
};

const generateGenre = () => {
  const randomIndex = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(1, _const_js__WEBPACK_IMPORTED_MODULE_1__["genres"].length - 1);

  return Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElements"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["genres"], randomIndex);
};

const generatePoster = () => {

  return _const_js__WEBPACK_IMPORTED_MODULE_1__["posters"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["posters"].length - 1)];
};

const generateDescription = () => {
  const {MIN_SENTENCES, MAX_SENTENCES} = _const_js__WEBPACK_IMPORTED_MODULE_1__["sentencesNum"];
  const randomNum = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_SENTENCES, MAX_SENTENCES);
  const newSentences = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomElements"])(_const_js__WEBPACK_IMPORTED_MODULE_1__["sentences"], randomNum);

  return newSentences.join(` `);
};

const generateMovie = () => {
  return {
    poster: generatePoster(),
    title: generateTitle(),
    rating: generateRating(),
    year: generateYear(),
    duration: generateDuration(),
    genre: generateGenre(),
    description: generateDescription(),
    isInWatchList: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isWatched: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    isFavorite: Boolean(Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, 1)),
    comments: getComments()
  };
};

const generateEmojis = () => {
  return _const_js__WEBPACK_IMPORTED_MODULE_1__["emojis"][Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(0, _const_js__WEBPACK_IMPORTED_MODULE_1__["emojis"].length - 1)];
};

const getComments = function () {
  return {
    author: `Tim Macoveev`,
    date: dayjs__WEBPACK_IMPORTED_MODULE_2___default()().format(`YYYY/M/D h:m`),
    message: generateDescription(),
    emoji: generateEmojis()
  };
};


/***/ }),

/***/ "./src/mock/popup.js":
/*!***************************!*\
  !*** ./src/mock/popup.js ***!
  \***************************/
/*! exports provided: openPopup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openPopup", function() { return openPopup; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/mock/const.js");
/* harmony import */ var _view_popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../view/popup.js */ "./src/view/popup.js");
/* harmony import */ var _view_popup_comments_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/popup-comments.js */ "./src/view/popup-comments.js");








const EvtKeys = {
  ESCAPE: `Escape`
};

const body = document.querySelector(`body`);
const siteMainElement = body.querySelector(`.main`);

const onPopupEscPress = function (evt) {
  if (evt.key === EvtKeys.ESCAPE) {
    evt.preventDefault();
    closePopup();
  }
};

const addComments = function () {
  const {MIN_COMMENTS, MAX_COMMENTS} = _const_js__WEBPACK_IMPORTED_MODULE_1__["commentsNum"];
  const commentsAmount = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["getRandomInteger"])(MIN_COMMENTS, MAX_COMMENTS);
  const commentsWrapper = siteMainElement.querySelector(`.film-details__comments-list`);

  for (let i = 0; i < commentsAmount; i++) {

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(commentsWrapper, new _view_popup_comments_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement());
  }
};

const openPopup = function (film) {

  body.classList.add(`hide-overflow`);

  Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(siteMainElement, new _view_popup_js__WEBPACK_IMPORTED_MODULE_2__["default"](film).getElement());
  addComments();

  const closeButton = siteMainElement.querySelector(`.film-details__close-btn`);

  closeButton.addEventListener(`click`, closePopup);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  const popup = siteMainElement.querySelector(`.film-details`);

  popup.remove();
  body.classList.remove(`hide-overflow`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};


/***/ }),

/***/ "./src/mock/show-more-button.js":
/*!**************************************!*\
  !*** ./src/mock/show-more-button.js ***!
  \**************************************/
/*! exports provided: showMoreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoreButton", function() { return showMoreButton; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const.js */ "./src/mock/const.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.js */ "./src/main.js");
/* harmony import */ var _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../view/show-more-button.js */ "./src/view/show-more-button.js");
/* harmony import */ var _view_movie_card_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/movie-card.js */ "./src/view/movie-card.js");






const {MOVIES_NUM_PER_STEP} = _const_js__WEBPACK_IMPORTED_MODULE_1__["moviesNum"];

const showMoreButton = function () {
  const siteMainElement = document.querySelector(`.main`);
  const movies = siteMainElement.querySelector(`.films`);
  const container = movies.querySelector(`.films-list__container`);
  const moviesWrapper = movies.querySelector(`.films-list`);

  if (_main_js__WEBPACK_IMPORTED_MODULE_2__["films"].length > MOVIES_NUM_PER_STEP) {
    let renderedFilms = MOVIES_NUM_PER_STEP;

    Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(moviesWrapper, new _view_show_more_button_js__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement());

    const buttonElement = movies.querySelector(`.films-list__show-more`);

    buttonElement.addEventListener(`click`, (evt) => {
      evt.preventDefault();

      _main_js__WEBPACK_IMPORTED_MODULE_2__["films"]
      .slice(renderedFilms, renderedFilms + MOVIES_NUM_PER_STEP)
      .forEach(function (film) {
        Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["render"])(container, new _view_movie_card_js__WEBPACK_IMPORTED_MODULE_4__["default"](film).getElement());
      });

      renderedFilms += MOVIES_NUM_PER_STEP;

      if (renderedFilms >= _main_js__WEBPACK_IMPORTED_MODULE_2__["films"].length) {
        buttonElement.remove();
      }
    });
  }
};


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandomInteger, getRandomElements, RenderPosition, render, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomInteger", function() { return getRandomInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomElements", function() { return getRandomElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const getRandomElements = (oldArr, maxLength) => {
  const newArr = [];

  for (let i = 0; i < maxLength; i++) {
    newArr.push(oldArr[getRandomInteger(0, oldArr.length - 1)]);
  }

  const uniqueElements = new Set(newArr);

  return Array.from(uniqueElements);
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    default:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};


/***/ }),

/***/ "./src/view/list-empty.js":
/*!********************************!*\
  !*** ./src/view/list-empty.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListEmpty; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createListEmptyTemplate = () => {
  return `<section class="films">
  <section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
  </section>
</section>`;
};

class ListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createListEmptyTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/menu-filters.js":
/*!**********************************!*\
  !*** ./src/view/menu-filters.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filter; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const countFilms = (filterName, filters) => {
  let filterCount = 0;

  for (let filter of filters) {
    if (filter.name === filterName) {
      filterCount = filter.count;
    }
  }

  return filterCount;
};

const createFilterTemplate = (filters) => {
  const watchedListCount = countFilms(`watchList`, filters);
  const watchedCount = countFilms(`watched`, filters);
  const favoriteCount = countFilms(`favorite`, filters);

  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchedListCount}</span></a>
      <a href="#history" class="main-navigation__item main-navigation__item--active">History <span class="main-navigation__item-count">${watchedCount}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favoriteCount}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`;
};

class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/menu-sorting.js":
/*!**********************************!*\
  !*** ./src/view/menu-sorting.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createSortingTemplate = () => {
  return `<ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

class Sorting {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/movie-card.js":
/*!********************************!*\
  !*** ./src/view/movie-card.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Movie; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _mock_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/popup.js */ "./src/mock/popup.js");



const createMovieCardTemplate = (movie) => {
  const {poster,
    title,
    rating,
    year, duration,
    genre,
    description,
    isInWatchList,
    isWatched,
    isFavorite} = movie;

  const isActive = (control) => {
    const activeClassName = control
      ? `film-card__controls-item--active`
      : ``;

    return activeClassName;
  };

  const shortDescriprion = () => {
    if (description.length >= 140) {
      return description.slice(0, 139) + `...`;
    } else {
      return description;
    }
  };


  return `<article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${year}</span>
      <span class="film-card__duration">${Math.trunc(duration / 60)}h ${duration % 60}m</span>
      <span class="film-card__genre">${genre[0]}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${shortDescriprion()}</p>
    <a class="film-card__comments">51 comments</a>
    <div class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isActive(isInWatchList)}" type="button">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isActive(isWatched)}" type="button">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite ${isActive(isFavorite)}" type="button">Mark as favorite</button>
    </div>
  </article>`;
};

class Movie {
  constructor(film) {
    this._film = film;
    this._element = null;

    this.onCardClick = this.onCardClick.bind(this);
  }

  getTemplate() {
    return createMovieCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
      this._element.querySelector(`.film-card__title`).addEventListener(`click`, this.onCardClick);
      this._element.querySelector(`.film-card__poster`).addEventListener(`click`, this.onCardClick);
      this._element.querySelector(`.film-card__comments`).addEventListener(`click`, this.onCardClick);
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }

  onCardClick(evt) {
    evt.preventDefault();
    Object(_mock_popup_js__WEBPACK_IMPORTED_MODULE_1__["openPopup"])(this._film);
  }
}


/***/ }),

/***/ "./src/view/movies-wrapper.js":
/*!************************************!*\
  !*** ./src/view/movies-wrapper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MoviesWrapper; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createMoviesWrapperTemplate = () => {
  return `<section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container"></div>
    </section>
    <section class="films-list films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container"></div>
    </section>
  </section>`;
};

class MoviesWrapper {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createMoviesWrapperTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/popup-comments.js":
/*!************************************!*\
  !*** ./src/view/popup-comments.js ***!
  \************************************/
/*! exports provided: createComments, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComments", function() { return createComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Comment; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");
/* harmony import */ var _mock_movie_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock/movie.js */ "./src/mock/movie.js");



const createComments = () => {

  const comments = Object(_mock_movie_js__WEBPACK_IMPORTED_MODULE_1__["generateMovie"])().comments;

  return `<li class="film-details__comment">
    <span class="film-details__comment-emoji">
      <img src="${comments.emoji}" width="55" height="55" alt="emoji-smile">
    </span>
    <div>
      <p class="film-details__comment-text">${comments.message}</p>
      <p class="film-details__comment-info">
        <span class="film-details__comment-author">${comments.author}</span>
        <span class="film-details__comment-day">${comments.date}</span>
        <button class="film-details__comment-delete">Delete</button>
      </p>
    </div>
  </li>`;
};

class Comment {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createComments();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/popup.js":
/*!***************************!*\
  !*** ./src/view/popup.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createPopupTemplate = (movie) => {
  const {poster, title, rating, year, duration, genre, description} = movie;

  const showGenresTitle = () => {
    const genreTitle = (genre.length === 1) ? `Genre` : `Genres`;

    return genreTitle;
  };

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="${poster}" alt="">

          <p class="film-details__age">18+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">${title}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tr class="film-details__row">
              <td class="film-details__term">Director</td>
              <td class="film-details__cell">Anthony Mann</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Writers</td>
              <td class="film-details__cell">Anne Wigton, Heinz Herald, Richard Weil</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Actors</td>
              <td class="film-details__cell">Erich von Stroheim, Mary Beth Hughes, Dan Duryea</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Release Date</td>
              <td class="film-details__cell">${year}</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Runtime</td>
              <td class="film-details__cell">${Math.trunc(duration / 60)}h ${duration % 60}m</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">Country</td>
              <td class="film-details__cell">USA</td>
            </tr>
            <tr class="film-details__row">
              <td class="film-details__term">${showGenresTitle()}</td>
              <td class="film-details__cell">
                <span class="film-details__genre">${genre.join(`, `)}</span>
            </tr>
          </table>

          <p class="film-details__film-description">${description}</p>
        </div>
      </div>

      <section class="film-details__controls">
        <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
        <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
        <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

        <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
        <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
      </section>
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

        <ul class="film-details__comments-list">

        </ul>

        <div class="film-details__new-comment">
          <div class="film-details__add-emoji-label"></div>

          <label class="film-details__comment-label">
            <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
          </label>

          <div class="film-details__emoji-list">
            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
            <label class="film-details__emoji-label" for="emoji-smile">
              <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
            <label class="film-details__emoji-label" for="emoji-sleeping">
              <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
            <label class="film-details__emoji-label" for="emoji-puke">
              <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
            </label>

            <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
            <label class="film-details__emoji-label" for="emoji-angry">
              <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
            </label>
          </div>
        </div>
      </section>
    </div>
  </form>
</section>`;
};

class Popup {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createPopupTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/show-more-button.js":
/*!**************************************!*\
  !*** ./src/view/show-more-button.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createShowMoreButtonTemplate = () => {
  return `<button class="films-list__show-more">Show more</button>`;
};

class Button {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/view/user-rank.js":
/*!*******************************!*\
  !*** ./src/view/user-rank.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rank; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/utils.js");


const createUserRankTemplate = () => {
  return `<section class="header__profile profile">
    <p class="profile__rating">Movie Buff</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

class Rank {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createUserRankTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map